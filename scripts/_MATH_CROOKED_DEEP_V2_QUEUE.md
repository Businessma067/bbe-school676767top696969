# Deep crooked audit v2 (cascade-aware)

Flagged tasks: **1165** | hard (rewrite-first): **983**

## Counts
- `eq_step_cascade`: 982
- `eq_step_pair`: 690
- `aligned_short_tail`: 1

## HARD queue

1. **MATH 12.02** (`math-cases-ch12-probability.json`, sev=6) — A Poker Hand
   - fields: solution_overview, tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=10 shorts=0 :: N_{\text{total}} = 2,598,960 || N_{\text{full house}} = \binom{13}{1} \binom{4}{3} || N_{\text{full house}} = 13 \times 4 \times 12`
   - `eq_step_pair`: `N_{\text{two pair}} = 78 \times 6 \times 6 \times 11 \times  || N_{\text{two pair}} = 123,552`

2. **MATH 12.03** (`math-cases-ch12-probability.json`, sev=6) — Restricted Seating
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `N_{\text{total}} = 7! || N_{\text{total}} = 5040`
   - `eq_step_cascade`: `len=4 shorts=2 :: 5! = 5 \times 4 \times 3 \times 2 \times 1 || 5 \times 4 = 20 || 20 \times 3 = 60 || 60 \times 2 = 120`

3. **MATH 12.07** (`math-cases-ch12-probability.json`, sev=6) — Arranging BALLOON
   - fields: solution_overview, tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=10 shorts=5 :: n_B = 1 || n_A = 1 || n_L = 2 || n_O = 2`
   - `eq_step_cascade`: `len=8 shorts=0 :: N_{\text{L adjacent}} = \frac{6!}{1! \cdot 1! \cdo || N_{\text{L adjacent}} = \frac{6!}{2!} || N_{\text{L adjacent}} = \frac{720}{2}`

4. **MATH 12.08** (`math-cases-ch12-probability.json`, sev=6) — A Lottery Draw
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=8 shorts=0 :: 49 \cdot 48 = 2352 || 2352 \cdot 47 = 110544 || 110544 \cdot 46 = 5085024 || 5085024 \cdot 45 = 228826080`
   - `eq_step_pair`: `P(\text{exactly } 6 \text{ matches}) = \frac{\binom{6}{6} \b || P(\text{exactly } 6 \text{ matches}) = \frac{1}{13,983,816}`

5. **MATH 12.11** (`math-cases-ch12-probability.json`, sev=6) — A Bookshelf Restriction
   - fields: solution_overview, tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=2 :: |S| = 8! || |S| = 8 \times 7 \times 6 \times 5 \times 4 \times || |S| = 40,320`
   - `eq_step_cascade`: `len=9 shorts=2 :: 8! = 8 \times 7 \times 6 \times 5 \times 4 \times  || 8 \times 7 = 56 || 56 \times 6 = 336 || 336 \times 5 = 1680`

6. **MATH 12.13** (`math-cases-ch12-probability.json`, sev=6) — A Poker Hand (13)
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=9 shorts=1 :: 52 \cdot 51 = 2652 || 2652 \cdot 50 = 132600 || 132600 \cdot 49 = 6497400 || 6497400 \cdot 48 = 311875200`
   - `eq_step_cascade`: `len=6 shorts=0 :: 52 \times 51 = 2652 || 2652 \times 50 = 132600 || 132600 \times 49 = 6497400 || 6497400 \times 48 = 311875200`

7. **MATH 12.14** (`math-cases-ch12-probability.json`, sev=6) — Choosing a Committee
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `\binom{13}{5} = 13 \times 11 \times 9 || \binom{13}{5} = 1287`
   - `eq_step_cascade`: `len=6 shorts=0 :: 13 \cdot 12 = 156 || 156 \cdot 11 = 1716 || 1716 \cdot 10 = 17160 || 17160 \cdot 9 = 154440`

8. **MATH 12.15** (`math-cases-ch12-probability.json`, sev=6) — Mismatched Gifts (Derangements)
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=8 shorts=3 :: n! = 6! || 6! = 6 \times 5 \times 4 \times 3 \times 2 \times  || 6 \times 5 = 30 || 30 \times 4 = 120`
   - `eq_step_pair`: `P(0 \text{ matches}) = \frac{D_6}{6!} || P(0 \text{ matches}) = \frac{265}{720}`

9. **MATH 12.21** (`math-cases-ch12-probability.json`, sev=6) — The Student Project Team
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=7 shorts=0 :: \binom{18}{4} = \dfrac{18!}{4!(18-4)!} || \dfrac{18!}{4!(14)!} = \dfrac{18 \cdot 17 \cdot 16 || 18 \times 17 = 306 || 306 \times 16 `
   - `eq_step_cascade`: `len=10 shorts=2 :: \binom{10}{2} = \dfrac{10!}{2!(10-2)!} || \dfrac{10!}{2!(8)!} = \dfrac{10 \cdot 9}{1 \cdot 2 || 10 \times 9 = 90 || \dfrac{90}{2} =`

10. **MATH 12.22** (`math-cases-ch12-probability.json`, sev=6) — Tennis Club Pairings
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=0 :: N_{\text{handshakes}} = \binom{12}{2} || \binom{12}{2} = \dfrac{12!}{2!(12-2)!} || \dfrac{12!}{2!(10)!} = \dfrac{12 \cdot 11}{1 \cdo`
   - `eq_step_pair`: `N_{\text{handshakes}} = \frac{12 \times 11}{2 \times 1} || N_{\text{handshakes}} = 66`

11. **MATH 12.23** (`math-cases-ch12-probability.json`, sev=6) — The Gala Dinner
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `8! = 8 \times 7 \times 6 \times 5 \times 4 \times 3 \times 2 || 8! = 40\,320`
   - `eq_step_cascade`: `len=9 shorts=2 :: 8! = 8 \times 7 \times 6 \times 5 \times 4 \times  || 8 \times 7 = 56 || 56 \times 6 = 336 || 336 \times 5 = 1680`

12. **MATH 12.28** (`math-cases-ch12-probability.json`, sev=6) — The Wedding Photograph
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `N_{\text{total}} = 6! || N_{\text{total}} = 720`
   - `eq_step_cascade`: `len=4 shorts=1 :: N_{\text{all 3 couples together}} = 3! \times (2!) || N_{\text{all 3 couples together}} = 6 \times 8 || 6 \times 8 = 48 || N_{\text{`

13. **MATH 12.29** (`math-cases-ch12-probability.json`, sev=6) — The Office Retreat
   - fields: solution_overview, tactical[0], tactical[1], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `P(\text{all different}) = \frac{P(N, n)}{N^n} || P(\text{all different}) = \frac{N \cdot (N-1) \cdot \ldots \`
   - `eq_step_cascade`: `len=4 shorts=0 :: P(\text{at least two share}) = 1 - P(\text{all 12  || P(\text{at least two share}) = 1 - 0.8330 || 1 - 0.833 = 0.167 || P(\text{at l`

14. **MATH 12.33** (`math-cases-ch12-probability.json`, sev=6) — The Ballroom Waltz Workshop
   - fields: tactical[0], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=0 :: \binom{n}{k} = \frac{n!}{k!(n-k)!} || \binom{14}{2} = \dfrac{14!}{2!(14-2)!} || \dfrac{14!}{2!(12)!} = \dfrac{14 \cdot 13}{1 \cdot |`
   - `eq_step_pair`: `P(\text{Lena and Marco are paired}) = \frac{1}{\text{Number  || P(\text{Lena and Marco are paired}) = \frac{1}{13}`

15. **MATH 12.34** (`math-cases-ch12-probability.json`, sev=6) — The Conservatory Stage Apron
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=2 :: N = 9! || N = 9 \times 8 \times 7 \times 6 \times 5 \times 4 || N = 362\,880`
   - `eq_step_pair`: `N = 9! || N = 362\,880`

16. **MATH 12.35** (`math-cases-ch12-probability.json`, sev=6) — The Design Studio Secret Santa
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=2 :: n! = 7! || 7! = 7 \times 6 \times 5 \times 4 \times 3 \times  || 7! = 5040`
   - `eq_step_cascade`: `len=8 shorts=8 :: 0 = 1 || 1 = 0 || 2 = 1 || 3 = 2`

17. **MATH 12.36** (`math-cases-ch12-probability.json`, sev=6) — The Ski-Chalet Shuttle Van
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=9 shorts=2 :: 8! = 8 \times 7 \times 6 \times 5 \times 4 \times  || 8 \times 7 = 56 || 56 \times 6 = 336 || 336 \times 5 = 1680`
   - `eq_step_pair`: `P(\text{all four couples side by side}) = \frac{384}{40\,320 || P(\text{all four couples side by side}) = \frac{1}{105}`

18. **MATH 12.37** (`math-cases-ch12-probability.json`, sev=6) — The Lab Contamination Screen
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=8 shorts=0 :: \text{Total number of batches} = \binom{20}{4} || \binom{20}{4} = \dfrac{20!}{4!(20-4)!} || \dfrac{20!}{4!(16)!} = \dfrac{20 \cdot 1`
   - `eq_step_cascade`: `len=7 shorts=0 :: \binom{20}{4} = \dfrac{20!}{4!(20-4)!} || \dfrac{20!}{4!(16)!} = \dfrac{20 \cdot 19 \cdot 18 || 20 \times 19 = 380 || 380 \times 18 `

19. **MATH 12.40** (`math-cases-ch12-probability.json`, sev=6) — Combinatorial Probability 40
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=17 shorts=2 :: \binom{12}{4} = \dfrac{12!}{4!(12-4)!} || \dfrac{12!}{4!(8)!} = \dfrac{12 \cdot 11 \cdot 10  || 12 \times 11 = 132 || 132 \times 10`
   - `eq_step_pair`: `P(\text{at least one woman}) = 1 - P(\text{no women}) || P(\text{at least one woman}) = 1 - P(\text{entirely men})`

20. **MATH 12.41** (`math-cases-ch12-probability.json`, sev=6) — Combinatorial Probability 41
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=0 :: N(3\text{W}, 2\text{M}) = 720 || N(5\text{W}, 0\text{M}) = \binom{6}{5} \times \bin || N(5\text{W}, 0\text{M}) = (6) \times (1) || N`
   - `eq_step_cascade`: `len=19 shorts=3 :: N(5\text{W}, 0\text{M}) = \binom{6}{5} \times \bin || \binom{6}{5} = \dfrac{6!}{5!(6-5)!} || \binom{6}{5} = 6 || \binom{9}{0} = 1`

21. **MATH 12.43** (`math-cases-ch12-probability.json`, sev=6) — At a mid-size company, 65% of employees regularly use Software Tool A, and 45%
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=2 :: P(A) = 0.65 || P(B) = 0.45 || P(A \cap B) = 0.30 || P(A \cup B) = P(A) + P(B) - P(A \cap B)`
   - `eq_step_pair`: `P(\text{neither}) = 1 - 0.80 || P(\text{neither}) = 0.20`

22. **MATH 12.45** (`math-cases-ch12-probability.json`, sev=6) — A gym tracks member usage of three amenities
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=11 shorts=3 :: P(P) = 0.50 || P(S) = 0.30 || P(W) = 0.60 || P(P \cap S) = 0.20`
   - `eq_step_cascade`: `len=9 shorts=4 :: P(P \cup S \cup W) = P(P) + P(S) + P(W) - P(P \cap || P(P \cup S \cup W) = 0.50 + 0.30 + 0.60 - 0.20 - 0 || 0.5 + 0.3 = 0.8 || 0.8 +`

23. **MATH 12.47** (`math-cases-ch12-probability.json`, sev=6) — A university registrar's data shows that 40% of students take an Art elective
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=11 shorts=3 :: P(A) = 0.40 || P(M) = 0.35 || P(T) = 0.25 || P(A \cap M) = 0.15`
   - `eq_step_cascade`: `len=9 shorts=2 :: P(A \cup M \cup T) = P(A) + P(M) + P(T) - P(A \cap || P(A \cup M \cup T) = 0.40 + 0.35 + 0.25 - 0.15 - 0 || 0.4 + 0.35 = 0.75 || 0.7`

24. **MATH 12.48** (`math-cases-ch12-probability.json`, sev=6) — A security firm scanned a fleet of servers for three vulnerability types
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=9 shorts=3 :: P(S) = 0.35 || P(X) = 0.28 || P(M) = 0.40 || P(S \cap X) = 0.12`
   - `eq_step_cascade`: `len=11 shorts=0 :: P(\text{exactly two}) = P(S \cap X) + P(S \cap M)  || P(\text{exactly two}) = 0.12 + 0.15 + 0.10 - 3(0.0 || P(\text{exactly two}) =`

25. **MATH 12.69** (`math-cases-ch12-probability.json`, sev=6) — Sci-fi, fantasy, and mystery readers
   - fields: tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `\frac{1}{2} P(A \cap B) = \frac{1}{2} \times 0.13 || \frac{1}{2} P(A \cap B) = 0.065`
   - `eq_step_cascade`: `len=6 shorts=0 :: P(C \cap (A \cup B)) = P(A \cap C \cap B^c) + P(B  || P(C \cap (A \cup B)) = 0.06 + 0.07 + 0.05 || 0.06 + 0.07 = 0.13 || 0.13 + 0.05`

26. **MATH 12.72** (`math-cases-ch12-probability.json`, sev=6) — An electronics store tracks warranty claims by product category
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `P(W) = \frac{\text{Total number of warranty claims}}{\text{T || P(W) = \frac{115}{1300}`
   - `eq_step_cascade`: `len=6 shorts=0 :: P(W \mid L) = \frac{\text{Number of laptop claims} || P(W \mid L) = \frac{60}{800} || P(W \mid L) = 0.075 || P(W \mid T) = \frac{\te`

27. **MATH 12.73** (`math-cases-ch12-probability.json`, sev=6) — A coffee shop tracks oat-milk add-ons by drink size
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `P(OM) = \frac{\text{Total drinks with oat milk}}{\text{Total || P(OM) = \frac{480}{2300}`
   - `eq_step_cascade`: `len=6 shorts=0 :: P(OM \mid L) = \frac{\text{Large drinks with oat m || P(OM \mid L) = \frac{270}{900} || P(OM \mid L) = 0.30 || P(OM \mid S) = \frac{`

28. **MATH 12.74** (`math-cases-ch12-probability.json`, sev=6) — A delivery service tracks on-time performance by package type
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=0 :: P(L) = P(S \cap L) + P(E \cap L) || P(L) = \frac{220}{3000} + \frac{40}{3000} || P(L) = \frac{260}{3000} || P(L) = \frac{13}{150}`
   - `eq_step_pair`: `P(L \mid E) = \frac{40}{800} || P(L \mid E) = 0.05`

29. **MATH 12.75** (`math-cases-ch12-probability.json`, sev=6) — An amusement park tracks wait times by ride category
   - fields: solution_overview, tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=13 shorts=2 :: N_T = 3,500 \quad (\text{total Thrill rides}) || N_{L \cap T} = 980 \quad (\text{Thrill rides with  || N_F = 4,500 \quad (\text{tot`
   - `eq_step_cascade`: `len=8 shorts=0 :: P(L \mid T) = \frac{N_{L \cap T}}{N_T} || P(L \mid T) = \frac{980}{3,500} || P(L \mid T) = 0.28 || P(L \mid F) = \frac{N_{L \cap F}}`

30. **MATH 12.76** (`math-cases-ch12-probability.json`, sev=6) — A call center tracks first-call resolution by call reason
   - fields: solution_overview, tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `N_B = 1200 || N_{R \cap B} = 900`
   - `eq_step_pair`: `N_T = 1800 || N_{R \cap T} = 990`

31. **MATH 12.77** (`math-cases-ch12-probability.json`, sev=6) — A movie theater tracks concession purchases by showtime
   - fields: tactical[0], tactical[1]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `P(C) = \frac{N_C}{N_{\text{total}}} || P(C) = \frac{1780}{6800}`
   - `eq_step_cascade`: `len=6 shorts=0 :: P(C \mid M) = \frac{N_{M \cap C}}{N_M} || P(C \mid M) = \frac{520}{2600} || P(C \mid M) = 0.20 || P(C \mid E) = \frac{N_{E \cap C}}{`

32. **MATH 12.78** (`math-cases-ch12-probability.json`, sev=6) — A car rental agency tracks late returns by vehicle class
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=8 shorts=0 :: P(R \mid L) = \frac{\text{Late Luxury rentals}}{\t || P(R \mid L) = \frac{156}{1200} || P(R \mid L) = 0.13 || P(R \mid E) = \frac{\t`
   - `eq_step_pair`: `P(L \mid R) = \frac{\text{Late Luxury rentals}}{\text{Total  || P(L \mid R) = \frac{156}{336}`

33. **MATH 12.79** (`math-cases-ch12-probability.json`, sev=6) — A bookstore tracks returns by purchase channel
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `P(R) = \frac{N_R}{N_{\text{total}}} || P(R) = \frac{625}{8500}`
   - `eq_step_cascade`: `len=6 shorts=0 :: P(R \mid O) = \frac{N_{O \cap R}}{N_O} || P(R \mid O) = \frac{450}{5000} || P(R \mid O) = 0.09 || P(R \mid I) = \frac{N_{I \cap R}}{`

34. **MATH 12.80** (`math-cases-ch12-probability.json`, sev=6) — A gym tracks no-shows by class type
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=0 :: P(N \mid Y) = \frac{\text{Yoga no-shows}}{\text{To || P(N \mid Y) = \frac{360}{2400} || P(N \mid Y) = 0.15 || P(N \mid S) = \frac{\t`
   - `eq_step_pair`: `P(Y \mid N) = \frac{\text{Yoga no-shows}}{\text{Total no-sho || P(Y \mid N) = \frac{360}{840}`

35. **MATH 12.81** (`math-cases-ch12-probability.json`, sev=6) — A pizza restaurant tracks order errors by order method
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `P(E) = \frac{\text{Total number of errors}}{\text{Total numb || P(E) = \frac{305}{5,500}`
   - `eq_step_cascade`: `len=6 shorts=0 :: P(E \mid I) = \frac{\text{Number of In-person erro || P(E \mid I) = \frac{110}{1,000} || P(E \mid I) = 0.11 || P(E \mid P) = \frac{\`

36. **MATH 12.83** (`math-cases-ch12-probability.json`, sev=6) — A hotel tracks cancellations by booking channel
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=0 :: P(C \mid O) = \frac{N_{O \cap C}}{N_O} || P(C \mid O) = \frac{560}{7000} || P(C \mid O) = 0.08 || P(C \mid A) = \frac{N_{A \cap C}}{`
   - `eq_step_pair`: `P(O \mid C) = \frac{N_{O \cap C}}{N_C} || P(O \mid C) = \frac{560}{1010}`

37. **MATH 12.84** (`math-cases-ch12-probability.json`, sev=6) — An auto repair shop tracks customer complaints by service type
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=10 shorts=4 :: N(R) = 5,000 || N(R \cap C) = 100 || N(M) = 2,000 || N(M \cap C) = 180`
   - `eq_step_cascade`: `len=4 shorts=1 :: P(C) = \frac{\text{Total number of complaints}}{\t || P(C) = \frac{N(C)}{N(\text{Total})} || P(C) = \frac{280}{7,000} || P(C) = 0.04`

38. **MATH 12.85** (`math-cases-ch12-probability.json`, sev=6) — A concert venue tracks no-shows by ticket type
   - fields: solution_overview, tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=2 :: N_{Total} = N_{GA} + N_{VIP} || N_{Total} = 8000 + 2000 || N_{Total} = 10000 || N_{NS,Total} = N_{GA,NS} + N_{VIP,NS}`
   - `eq_step_cascade`: `len=6 shorts=0 :: P(NS \mid VIP) = \frac{N_{VIP,NS}}{N_{VIP}} || P(NS \mid VIP) = \frac{100}{2000} || P(NS \mid VIP) = 0.05 || P(NS \mid GA) = \frac{N`

39. **MATH 12.86** (`math-cases-ch12-probability.json`, sev=6) — A streaming service tracks first-year cancellations by subscription plan
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=1 :: N(C \cap B) = 1,200 || N(C \cap S) = 1,350 || N(C \cap P) = 270 || N(C) = N(C \cap B) + N(C \cap S) + N(C \cap P)`
   - `eq_step_pair`: `P(C) = \frac{N(C)}{N_{\text{total}}} || P(C) = \frac{2,820}{18,000}`

40. **MATH 12.89** (`math-cases-ch12-probability.json`, sev=6) — An airline audited baggage handling across three flight categories over the past year
   - fields: solution_overview, tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=18 shorts=2 :: N_{\text{total}} = N_D + N_I + N_C || N_{\text{total}} = 40,000 + 15,000 + 5,000 || N_{\text{total}} = 60,000 || N_M = N_{M \cap D}`
   - `eq_step_cascade`: `len=8 shorts=0 :: P(M \mid C) = \frac{\text{Mishandled connecting ba || P(M \mid C) = \frac{250}{5,000} || P(M \mid C) = 0.05 || P(M \mid D) = \frac{\`

41. **MATH 12.90** (`math-cases-ch12-probability.json`, sev=6) — Two departments at a university submit final theses each spring
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=8 shorts=0 :: P(L \mid H) = \frac{N_{H \cap L}}{N_H} || P(L \mid H) = \frac{216}{2400} || P(L \mid H) = 0.09 || P(L \mid E) = \frac{N_{E \cap L}}{`
   - `eq_step_pair`: `P(H \mid L) = \frac{N_{H \cap L}}{N_L} || P(H \mid L) = \frac{216}{324}`

42. **MATH 12.93** (`math-cases-ch12-probability.json`, sev=6) — A certification board compared pass rates between two exam formats offered last
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `P(O \mid F) = \frac{F_O}{F_{\text{total}}} || P(O \mid F) = \frac{810}{1410}`
   - `eq_step_pair`: `P(I \mid F) = \frac{F_I}{F_{\text{total}}} || P(I \mid F) = \frac{600}{1410}`

43. **MATH 12.94** (`math-cases-ch12-probability.json`, sev=6) — A restaurant chain's health department compiled a year of inspection results
   - fields: solution_overview, tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=7 shorts=1 :: N_{\text{total}} = 18,000 + 9,000 + 3,000 || N_{\text{total}} = 30,000 || N_V = 540 + 180 + 210 || N_V = 930`
   - `eq_step_pair`: `P(V \mid L_K) = \frac{210}{3,000} || P(V \mid L_K) = 0.07`

44. **MATH 12.95** (`math-cases-ch12-probability.json`, sev=6) — A mobile carrier sampled call quality across its two network types over a single day
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `P(G_4 \mid D) = \frac{N_{D,4G}}{N_D} || P(G_4 \mid D) = \frac{900}{1\,100}`
   - `eq_step_pair`: `P(G_5 \mid D) = \frac{N_{D,5G}}{N_D} || P(G_5 \mid D) = \frac{200}{1\,100}`

45. **MATH 12.97** (`math-cases-ch12-probability.json`, sev=6) — An insurance company audited a year of claims across two policy types
   - fields: solution_overview, tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=9 shorts=2 :: N_{\text{Total}} = N_A + N_H || N_{\text{Total}} = 30\,000 + 20\,000 || N_{\text{Total}} = 50\,000 || N_D = N_{D \cap A} + N_{D \cap`
   - `eq_step_pair`: `P(A \mid D) = \frac{N_{D \cap A}}{N_D} || P(A \mid D) = \frac{450}{710}`

46. **MATH 12.98** (`math-cases-ch12-probability.json`, sev=6) — A software team reviewed a backlog of bug reports filed under two priority
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `P(S \mid V) = \frac{N_{V \cap S}}{N_V} || P(S \mid V) = \frac{6000}{7700}`
   - `eq_step_pair`: `P(C \mid V) = \frac{N_{V \cap C}}{N_V} || P(C \mid V) = \frac{1700}{7700}`

47. **MATH 12.99** (`math-cases-ch12-probability.json`, sev=6) — A university's admissions office reviewed a year of applications across three
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `P(R \mid I) = \frac{1\,200}{6\,000} || P(R \mid I) = 0.20`
   - `eq_step_pair`: `P(I \cup T \mid R) = \frac{1\,200 + 100}{3\,100} || P(I \cup T \mid R) = \frac{1\,300}{3\,100}`

48. **MATH 12.102** (`math-cases-ch12-probability.json`, sev=6) — Two fair six-sided dice are rolled once
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=2 :: N(S_{\ge 8} \cap E) = 5 + 3 + 1 || 5 + 3 = 8 || 8 + 1 = 9 || P(S_{\ge 8} \mid E) = \frac{N(S_{\ge 8} \cap E)}{N`
   - `eq_step_cascade`: `len=11 shorts=0 :: (1,6) \to S = 7 \text{ (odd)} || (2,6) \to S = 8 \text{ (even)} || (3,6) \to S = 9 \text{ (odd)} || (4,6) \to S = 10 \text{ (even)}`

49. **MATH 12.105** (`math-cases-ch12-probability.json`, sev=6) — 200 people take a diagnostic test for a disease
   - fields: solution_overview, tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=2 :: N(D \cap +) = 18 || N(D \cap -) = 2 || N(D^c \cap +) = 15 || N(D^c \cap -) = 165`
   - `eq_step_pair`: `P(+ \mid D) = \frac{18}{20} || P(+ \mid D) = 0.9`

50. **MATH 12.106** (`math-cases-ch12-probability.json`, sev=6) — A factory quality-control process depends on a chain of three stages
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=3 :: P(M_1) = 0.50 || P(M_2) = 0.30 || P(M_3) = 0.20 || P(D \mid M_1) = 0.02`
   - `eq_step_cascade`: `len=7 shorts=1 :: P(I) = 0.0085 + 0.0098 + 0.01275 + 0.0057 + 0.0170 || 0.0085 + 0.0098 = 0.0183 || 0.0183 + 0.01275 = 0.03105 || 0.03105 + 0.0057 = 0`

51. **MATH 12.107** (`math-cases-ch12-probability.json`, sev=6) — A bank reviewed a year of loan applications filed at two types of branches
   - fields: solution_overview, tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=9 shorts=3 :: N_{\text{total}} = N_U + N_R || N_{\text{total}} = 14{,}000 + 6{,}000 || N_{\text{total}} = 20{,}000 || N_J = N_{J \cap U} + N_{J \c`
   - `eq_step_pair`: `P(J \mid R) = \frac{900}{6{,}000} || P(J \mid R) = 0.15`

52. **MATH 12.108** (`math-cases-ch12-probability.json`, sev=6) — A gym chain reviewed a year of membership records across two tiers
   - fields: solution_overview, tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=2 :: N(B) = 12,000 || N(B \cap C) = 1,800 || N(P) = 8,000 || N(P \cap C) = 480`
   - `eq_step_pair`: `P(B \mid C) = \frac{N(B \cap C)}{N(C)} || P(B \mid C) = \frac{1,800}{2,280}`

53. **MATH 12.110** (`math-cases-ch12-probability.json`, sev=6) — An online marketplace reviewed a quarter of transactions split across two
   - fields: solution_overview, tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=12 shorts=3 :: N_{\text{total}} = N_{CC} + N_{DW} || N_{\text{total}} = 30,000 + 20,000 || N_{\text{total}} = 50,000 || N_{CB} = N_{CB \cap CC} + `
   - `eq_step_pair`: `P(CB \mid CC) = \frac{450}{30,000} || P(CB \mid CC) = 0.015`

54. **MATH 12.111** (`math-cases-ch12-probability.json`, sev=6) — A hospital tracked 30-day readmissions across three discharge units over the past year
   - fields: solution_overview, tactical[0], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=9 shorts=2 :: N_{\text{Total}} = N_{\text{ICU}} + N_{\text{GW}}  || N_{\text{Total}} = 4000 + 12000 + 8000 || N_{\text{Total}} = 24000 || N_R = N_`
   - `eq_step_pair`: `P(R) = \frac{N_R}{N_{\text{Total}}} || P(R) = \frac{1840}{24000}`

55. **MATH 12.113** (`math-cases-ch12-probability.json`, sev=6) — Dice Combinatorics
   - fields: solution_overview, tactical[1]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `E[X] = \frac{1 + 6 + 15 + 28 + 45 + 66}{36} || E[X] = \frac{161}{36}`
   - `eq_step_cascade`: `len=7 shorts=0 :: E[X] = \frac{161}{36} || E[X^2] = \frac{791}{36} || \mathrm{Var}(X) = \frac{791}{36} - \left(\frac{161 || \mathrm{Var}(X) = \frac{79`

56. **MATH 12.115** (`math-cases-ch12-probability.json`, sev=6) — Carnival Spinner with a Processing Fee
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=12 shorts=1 :: E[X] = (0)(0.40) + (5)(0.35) + (20)(0.20) + (100)( || E[X] = 0 + 1.75 + 4 + 5 || E[X] = 10.75 || E[X^2] = (0^2)(0.40) + (5^2)(0.35)`
   - `eq_step_cascade`: `len=6 shorts=4 :: E[X] = (0)(0.40) + (5)(0.35) + (20)(0.20) + (100)( || E[X] = 0 + 1.75 + 4 + 5 || 0 + 1.75 = 1.75 || 1.75 + 4 = 5.75`

57. **MATH 12.116** (`math-cases-ch12-probability.json`, sev=6) — Manufacturing Defect Counts
   - fields: solution_overview, tactical[0], tactical[1], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=11 shorts=2 :: E[X] = (0)(0.55) + (1)(0.25) + (2)(0.12) + (3)(0.0 || E[X] = 0 + 0.25 + 0.24 + 0.18 + 0.08 || E[X] = 0.75 || E[X^2] = (0^2)(0.55) +`
   - `eq_step_pair`: `E[X] = (0)(0.55) + (1)(0.25) + (2)(0.12) + (3)(0.06) + (4)(0 || E[X] = 0.75`

58. **MATH 12.118** (`math-cases-ch12-probability.json`, sev=6) — A Call Center
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=2 :: \mu = 6 || \sigma^2 = 6 || \sigma = \sqrt{6} \approx 2.449`
   - `eq_step_pair`: `\mu = \lambda || \mu = 6`

59. **MATH 12.119** (`math-cases-ch12-probability.json`, sev=6) — Company Profit
   - fields: solution_overview, tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `E[P] = 50,000 - 32,000 || E[P] = 18,000 \text{ dollars}`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(P) = 4,000,000 + 1,000,000 || \mathrm{Var}(P) = 5,000,000 \text{ dollars}^2 || \sigma_P = \sqrt{\mathrm{Var}(P)} || \si`

60. **MATH 12.125** (`math-cases-ch12-probability.json`, sev=6) — A Charity Raffle
   - fields: solution_overview, tactical[0], tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=11 shorts=3 :: E[X] = (0)(0.70) + (10)(0.25) + (50)(0.05) || E[X] = 0 + 2.5 + 2.5 || E[X] = 5 || E[X^2] = (0^2)(0.70) + (10^2)(0.25) + (50^2)(0.05`
   - `eq_step_pair`: `E[X] = (0)(0.70) + (10)(0.25) + (50)(0.05) || E[X] = 5`

61. **MATH 12.126** (`math-cases-ch12-probability.json`, sev=6) — Quality Inspection
   - fields: solution_overview, tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=10 shorts=1 :: E[X^2] = (0^2)(0.60) + (1^2)(0.30) + (2^2)(0.10) || E[X^2] = (0)(0.60) + (1)(0.30) + (4)(0.10) || E[X^2] = 0 + 0.30 + 0.40 || E[X^2`
   - `eq_step_cascade`: `len=4 shorts=3 :: \mu = 0 + 0.30 + 0.20 || 0 + 0.3 = 0.3 || 0.3 + 0.2 = 0.5 || \mu = 0.5`

62. **MATH 12.127** (`math-cases-ch12-probability.json`, sev=6) — Customer Star Ratings
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=10 shorts=1 :: E[X^2] = (1^2)(0.05) + (2^2)(0.10) + (3^2)(0.20) + || E[X^2] = (1)(0.05) + (4)(0.10) + (9)(0.20) + (16)( || E[X^2] = 0.05 + 0.40 + `
   - `eq_step_cascade`: `len=7 shorts=1 :: \mu = (1)(0.05) + (2)(0.10) + (3)(0.20) + (4)(0.35 || \mu = 0.05 + 0.20 + 0.60 + 1.40 + 1.50 || 0.05 + 0.2 = 0.25 || 0.25 + 0.6 = 0.`

63. **MATH 12.129** (`math-cases-ch12-probability.json`, sev=6) — A Game Show Wheel
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=13 shorts=3 :: E[X] = (0 \cdot 0.50) + (100 \cdot 0.35) + (500 \c || E[X] = 0 + 35 + 75 || E[X] = 110 || E[X^2] = (0^2 \cdot 0.50) + (100^2 \cdot `
   - `eq_step_pair`: `E[X] = (0 \cdot 0.50) + (100 \cdot 0.35) + (500 \cdot 0.15) || E[X] = 110`

64. **MATH 12.130** (`math-cases-ch12-probability.json`, sev=6) — Coffee Shop Arrivals
   - fields: solution_overview, tactical[0], tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=7 shorts=1 :: E[X^2] = (0^2)(0.40) + (1^2)(0.35) + (2^2)(0.20) + || E[X^2] = (0)(0.40) + (1)(0.35) + (4)(0.20) + (9)(0 || E[X^2] = 0 + 0.35 + 0.80`
   - `eq_step_cascade`: `len=6 shorts=2 :: E[X] = (0)(0.40) + (1)(0.35) + (2)(0.20) + (3)(0.0 || E[X] = 0 + 0.35 + 0.40 + 0.15 || 0 + 0.35 = 0.35 || 0.35 + 0.4 = 0.75`

65. **MATH 12.132** (`math-cases-ch12-probability.json`, sev=6) — A Free-Throw Contest
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=8 shorts=1 :: E[X^2] = (0^2)(0.05) + (1^2)(0.25) + (2^2)(0.45) + || E[X^2] = (0)(0.05) + (1)(0.25) + (4)(0.45) + (9)(0 || E[X^2] = 0 + 0.25 + 1.80`
   - `eq_step_cascade`: `len=6 shorts=2 :: E[X] = (0)(0.05) + (1)(0.25) + (2)(0.45) + (3)(0.2 || E[X] = 0 + 0.25 + 0.90 + 0.75 || 0 + 0.25 = 0.25 || 0.25 + 0.9 = 1.15`

66. **MATH 12.133** (`math-cases-ch12-probability.json`, sev=6) — A Delivery App Rating
   - fields: solution_overview, tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=7 shorts=1 :: E[X^2] = (1^2)(0.10) + (2^2)(0.10) + (3^2)(0.20) + || E[X^2] = (1)(0.10) + (4)(0.10) + (9)(0.20) + (16)( || E[X^2] = 0.10 + 0.40 + 1`
   - `eq_step_cascade`: `len=7 shorts=5 :: E[X] = (1)(0.10) + (2)(0.10) + (3)(0.20) + (4)(0.3 || E[X] = 0.10 + 0.20 + 0.60 + 1.20 + 1.50 || 0.1 + 0.2 = 0.3 || 0.3 + 0.6 = 0.9`

67. **MATH 12.134** (`math-cases-ch12-probability.json`, sev=6) — An Insurance Policy
   - fields: solution_overview, tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=12 shorts=1 :: E[X] = (0)(0.90) + (200)(0.08) + (5000)(0.02) || E[X] = 0 + 16 + 100 || E[X] = 116 || E[X^2] = (0^2)(0.90) + (200^2)(0.08) + (5000^`
   - `eq_step_cascade`: `len=5 shorts=3 :: E[X] = (0)(0.90) + (200)(0.08) + (5000)(0.02) || E[X] = 0 + 16 + 100 || 0 + 16 = 16 || 16 + 100 = 116`

68. **MATH 12.135** (`math-cases-ch12-probability.json`, sev=6) — A Charity Raffle
   - fields: solution_overview, tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=2 :: E[X] = (0)(0.60) + (50)(0.30) + (250)(0.10) || E[X] = 0 + 15 + 25 || E[X] = 40`
   - `eq_step_cascade`: `len=9 shorts=1 :: E[X^2] = (0^2)(0.60) + (50^2)(0.30) + (250^2)(0.10 || E[X^2] = (0)(0.60) + (2500)(0.30) + (62500)(0.10) || E[X^2] = 0 + 750 + 6250 |`

69. **MATH 12.136** (`math-cases-ch12-probability.json`, sev=6) — An Ice Cream Shop
   - fields: solution_overview, tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=7 shorts=1 :: E[X^2] = (1^2)(0.20) + (2^2)(0.50) + (3^2)(0.20) + || E[X^2] = (1)(0.20) + (4)(0.50) + (9)(0.20) + (16)( || E[X^2] = 0.20 + 2.00 + 1`
   - `eq_step_cascade`: `len=6 shorts=4 :: E[X] = (1)(0.20) + (2)(0.50) + (3)(0.20) + (4)(0.1 || E[X] = 0.20 + 1.00 + 0.60 + 0.40 || 0.2 + 1 = 1.2 || 1.2 + 0.6 = 1.8`

70. **MATH 12.138** (`math-cases-ch12-probability.json`, sev=6) — A Trivia Quiz
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=10 shorts=1 :: E[X^2] = (0^2)(0.05) + (1^2)(0.20) + (2^2)(0.35) + || E[X^2] = (0)(0.05) + (1)(0.20) + (4)(0.35) + (9)(0 || E[X^2] = 0 + 0.20 + 1.4`
   - `eq_step_cascade`: `len=7 shorts=5 :: E[X] = (0)(0.05) + (1)(0.20) + (2)(0.35) + (3)(0.3 || E[X] = 0 + 0.20 + 0.70 + 0.90 + 0.40 || 0 + 0.2 = 0.2 || 0.2 + 0.7 = 0.9`

71. **MATH 12.139** (`math-cases-ch12-probability.json`, sev=6) — A Podcast Episode Rating
   - fields: solution_overview, tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=11 shorts=2 :: E[X] = (1)(0.05) + (2)(0.15) + (3)(0.25) + (4)(0.3 || E[X] = 0.05 + 0.30 + 0.75 + 1.40 + 1.00 || E[X] = 3.5 || E[X^2] = (1^2)(0.05)`
   - `eq_step_cascade`: `len=7 shorts=3 :: E[X] = (1)(0.05) + (2)(0.15) + (3)(0.25) + (4)(0.3 || E[X] = 0.05 + 0.30 + 0.75 + 1.40 + 1.00 || 0.05 + 0.3 = 0.35 || 0.35 + 0.75 = `

72. **MATH 12.140** (`math-cases-ch12-probability.json`, sev=6) — An Extended Warranty
   - fields: solution_overview, tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=12 shorts=1 :: E[X] = (0)(0.85) + (150)(0.12) + (4000)(0.03) || E[X] = 0 + 18 + 120 || E[X] = 138 || E[X^2] = (0^2)(0.85) + (150^2)(0.12) + (4000^`
   - `eq_step_cascade`: `len=5 shorts=3 :: E[X] = (0)(0.85) + (150)(0.12) + (4000)(0.03) || E[X] = 0 + 18 + 120 || 0 + 18 = 18 || 18 + 120 = 138`

73. **MATH 12.141** (`math-cases-ch12-probability.json`, sev=6) — A Two-Machine Production Line
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=2 :: E[X_A] = 3 || \mathrm{Var}(X_A) = 4 || E[X_B] = 7 || \mathrm{Var}(X_B) = 9`
   - `eq_step_cascade`: `len=8 shorts=0 :: \mathrm{Var}(E[X \mid M]) = (0.65)(3 - 4.4)^2 + (0 || \mathrm{Var}(E[X \mid M]) = (0.65)(-1.4)^2 + (0.35 || \mathrm{Var}(E[X \mid M]`

74. **MATH 12.142** (`math-cases-ch12-probability.json`, sev=6) — A Hedged Investment Pair
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=3 :: E[P] = 0.5 E[X] + 0.5 E[Y] || E[P] = 0.5 (10) + 0.5 (6) || E[P] = 5 + 3 || 5 + 3 = 8`
   - `eq_step_pair`: `\mathrm{Cov}(X,Y) = (-0.5) \cdot (4) \cdot (3) || \mathrm{Cov}(X,Y) = -6`

75. **MATH 12.144** (`math-cases-ch12-probability.json`, sev=6) — The Vending Machine Puzzle
   - fields: solution_overview, tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=20 shorts=1 :: E[X] = (0 \cdot p) + (5 \cdot 0.4) + (10 \cdot (0. || E[X] = 0 + 2 + 6 - 10p || E[X] = 8 - 10p || E[X^2] = (0^2 \cdot p) + (5^2 \cd`
   - `eq_step_cascade`: `len=4 shorts=0 :: E[X] = 8 - 10 \left( \frac{3 - \sqrt{5}}{10} \righ || E[X] = 8 - (3 - \sqrt{5}) || E[X] = 8 - 3 + \sqrt{5} || E[X] = 5 + \sqrt{5}`

76. **MATH 12.145** (`math-cases-ch12-probability.json`, sev=6) — A Regional Manager's Rounds
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=12 shorts=3 :: E[X] = 4 || \mathrm{Var}(X) = 6 || E[N] = (2)(0.5) + (3)(0.3) + (5)(0.2) || E[N] = 1.0 + 0.9 + 1.0`
   - `eq_step_cascade`: `len=4 shorts=1 :: E[S] = E[N E[X]] || E[S] = E[N] E[X] || E[S] = (2.9)(4) || E[S] = 11.6`

77. **MATH 12.146** (`math-cases-ch12-probability.json`, sev=6) — Assembly Line Processing Time
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=13 shorts=4 :: E[X_1] = 2 || \mathrm{Var}(X_1) = 0.5 || E[X_2] = 3 || \mathrm{Var}(X_2) = 0.8`
   - `eq_step_cascade`: `len=5 shorts=0 :: \mathrm{Var}(T) = 4(0.5) + 2.25(0.8) + 1(0.3) || \mathrm{Var}(T) = 2 + 1.8 + 0.3 || \mathrm{Var}(T) = 4.1 || \mathrm{SD}(T) = \sqrt{`

78. **MATH 12.148** (`math-cases-ch12-probability.json`, sev=6) — An Ice Cream Shop (Two Independent Customers)
   - fields: solution_overview, tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=1 :: E[X^2] = (1^2)(0.20) + (2^2)(0.50) + (3^2)(0.20) + || E[X^2] = (1)(0.20) + (4)(0.50) + (9)(0.20) + (16)( || E[X^2] = 0.20 + 2.00 + 1`
   - `eq_step_pair`: `\mathrm{SD}(X) = \sqrt{\mathrm{Var}(X)} || \mathrm{SD}(X) = \sqrt{0.76}`

79. **MATH 12.149** (`math-cases-ch12-probability.json`, sev=6) — A Parking Garage (A Nonlinear Bonus)
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=7 shorts=1 :: E[X^2] = (0^2)(0.10) + (1^2)(0.30) + (2^2)(0.40) + || E[X^2] = (0)(0.10) + (1)(0.30) + (4)(0.40) + (9)(0 || E[X^2] = 0 + 0.30 + 1.60`
   - `eq_step_cascade`: `len=5 shorts=4 :: E[Y] = 0 + 0.30 + 1.60 + 1.80 || 0 + 0.3 = 0.3 || 0.3 + 1.6 = 1.9 || 1.9 + 1.8 = 3.7`

80. **MATH 12.150** (`math-cases-ch12-probability.json`, sev=6) — A Trivia Quiz (Comparing Two Formats)
   - fields: solution_overview, tactical[0]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=10 shorts=2 :: E[X_A] = (0)(0.05) + (1)(0.20) + (2)(0.35) + (3)(0 || E[X_A] = 0 + 0.20 + 0.70 + 0.90 + 0.40 || E[X_A] = 2.20 || E[X_B] = (0)(0.15)`
   - `eq_step_cascade`: `len=6 shorts=0 :: \mathrm{Var}(X_A) = 5.90 - 4.84 || \mathrm{Var}(X_A) = 1.06 || E[X_B^2] = (0^2)(0.15) + (1^2)(0.20) + (2^2)(0.15) || E[X_B^2] = (0)(`

81. **MATH 12.151** (`math-cases-ch12-probability.json`, sev=6) — A Streaming Royalty (Setting a Break-Even Fee)
   - fields: solution_overview, tactical[0], tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `E[X] = 2.5 \text{ cents} + 3.0 \text{ cents} + 4.0 \text{ ce || E[X] = 9.5 \text{ cents}`
   - `eq_step_pair`: `E[X^2] = 12.5 \text{ cents}^2 + 30.0 \text{ cents}^2 + 80.0  || E[X^2] = 122.5 \text{ cents}^2`

82. **MATH 12.152** (`math-cases-ch12-probability.json`, sev=6) — An Extended Warranty (Two Independent Policies)
   - fields: solution_overview, tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=11 shorts=1 :: E[X] = (0 \cdot 0.85) + (150 \cdot 0.12) + (4000 \ || E[X] = 0 + 18 + 120 || E[X] = 138 || E[X^2] = (0^2 \cdot 0.85) + (150^2 \cdot`
   - `eq_step_pair`: `\mathrm{SD}(Y) = \sqrt{\mathrm{Var}(Y)} || \mathrm{SD}(Y) = \sqrt{927312}`

83. **MATH 12.153** (`math-cases-ch12-probability.json`, sev=6) — Late Computer Deliveries
   - fields: solution_overview, tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=10 shorts=4 :: P(S_A) = 0.40 || P(S_B) = 0.30 || P(S_C) = 0.30 || P(L \mid S_A) = 0.05`
   - `eq_step_pair`: `P(S_B \mid L) = \frac{P(L \mid S_B)P(S_B)}{P(L)} || P(S_B \mid L) = \frac{0.009}{0.0365}`

84. **MATH 12.156** (`math-cases-ch12-probability.json`, sev=6) — Defective Batteries by Factory
   - fields: solution_overview, tactical[1], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=1 :: P(D) = P(D \mid F_1)P(F_1) + P(D \mid F_2)P(F_2) + || P(D) = (0.015)(0.55) + (0.030)(0.20) + (0.022)(0.2 || P(D) = 0.00825 + 0.00600`
   - `eq_step_pair`: `P(F_1 \mid D) = \frac{P(D \cap F_1)}{P(D)} || P(F_1 \mid D) = \frac{0.00825}{0.01975}`

85. **MATH 12.157** (`math-cases-ch12-probability.json`, sev=6) — Flagged Insurance Claims
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=1 :: P(F) = P(F \mid U_A)P(U_A) + P(F \mid U_B)P(U_B) + || P(F) = (0.04)(0.35) + (0.025)(0.40) + (0.06)(0.25) || P(F) = 0.014 + 0.010 + 0`
   - `eq_step_pair`: `P(F) = 0.039 || 0.039 = 3.9\%`

86. **MATH 12.158** (`math-cases-ch12-probability.json`, sev=6) — Delayed Flights by Carrier
   - fields: solution_overview, tactical[1], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=14 shorts=4 :: P(X) = 0.50 || P(Y) = 0.30 || P(Z) = 0.20 || P(D \mid X) = 0.06`
   - `eq_step_pair`: `P(X \mid D) = \frac{P(D \cap X)}{P(D)} || P(X \mid D) = \frac{0.0300}{0.0620}`

87. **MATH 12.159** (`math-cases-ch12-probability.json`, sev=6) — Faulty Brake Pads by Supplier
   - fields: solution_overview, tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=1 :: P(D) = P(D \mid S_1)P(S_1) + P(D \mid S_2)P(S_2) + || P(D) = (0.008)(0.60) + (0.015)(0.25) + (0.024)(0.1 || P(D) = 0.00480 + 0.00375`
   - `eq_step_pair`: `P(S_1 \mid D) = \frac{P(D \cap S_1)}{P(D)} || P(S_1 \mid D) = \frac{0.00480}{0.01215}`

88. **MATH 12.160** (`math-cases-ch12-probability.json`, sev=6) — Production Bugs by Team
   - fields: solution_overview, tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=14 shorts=4 :: P(T_A) = 0.40 || P(T_B) = 0.35 || P(T_G) = 0.25 || P(B \mid T_A) = 0.03`
   - `eq_step_pair`: `P(T_A \mid B) = \frac{P(B \mid T_A)P(T_A)}{P(B)} || P(T_A \mid B) = \frac{0.0120}{0.0315}`

89. **MATH 12.162** (`math-cases-ch12-probability.json`, sev=6) — Grade Appeals by Professor
   - fields: solution_overview, tactical[0], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=10 shorts=4 :: P(X) = 0.50 || P(Y) = 0.30 || P(Z) = 0.20 || P(A \mid X) = 0.03`
   - `eq_step_cascade`: `len=4 shorts=0 :: P(A) = P(A \mid X)P(X) + P(A \mid Y)P(Y) + P(A \mi || P(A) = 0.0150 + 0.0150 + 0.0140 || 0.015 + 0.015 = 0.03 || 0.03 + 0.014 = 0.04`

90. **MATH 12.164** (`math-cases-ch12-probability.json`, sev=6) — Tagged Fish in Four Lakes
   - fields: tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `P(L_W \mid T) = \frac{P(T \cap L_W)}{P(T)} || P(L_W \mid T) = \frac{0.1}{\frac{193}{720}}`
   - `eq_step_cascade`: `len=4 shorts=0 :: P(T \cap L_W) = 0.1 || P(T \cap L_E) = 0.0625 || 1.5 \times P(T \cap L_E) = 1.5 \times 0.0625 || 1.5 \times 0.0625 = 0.09375`

91. **MATH 12.165** (`math-cases-ch12-probability.json`, sev=6) — Golden Gumballs by Machine
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `P(M_3 \mid G) = \frac{P(G \cap M_3)}{P(G)} || P(M_3 \mid G) = \frac{0.125}{0.23125}`
   - `eq_step_cascade`: `len=4 shorts=0 :: P(M_1 \mid G) = \frac{P(G \cap M_1)}{P(G)} || P(M_4 \mid G) = \frac{P(G \cap M_4)}{P(G)} || P(M_1 \mid G) \propto P(G \cap M_1) = 0.`

92. **MATH 12.169** (`math-cases-ch12-probability.json`, sev=6) — Mechanical Issues by Car Lot
   - fields: solution_overview, tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=1 :: P(I) = P(L_1)P(I \mid L_1) + P(L_2)P(I \mid L_2) + || P(I) = \frac{1}{4}(0.10) + \frac{1}{4}(0.10) + \fr || P(I) = 0.025 + 0.025 + 0`
   - `eq_step_pair`: `P(L_3 \mid I) = \frac{P(L_3)P(I \mid L_3)}{P(I)} || P(L_3 \mid I) = \frac{0.050}{0.110}`

93. **MATH 12.174** (`math-cases-ch12-probability.json`, sev=6) — Complaints by Call-Centre Team
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=1 :: P(E) = P(E \mid T_1)P(T_1) + P(E \mid T_2)P(T_2) + || P(E) = \frac{1}{4} (P(E \mid T_1) + P(E \mid T_2)  || P(E) = \frac{1}{4} (0.4 `
   - `eq_step_pair`: `P(E) = 0.27625 || P(E) = 27.625\%`

94. **MATH 12.175** (`math-cases-ch12-probability.json`, sev=6) — Injuries by Gym Location
   - fields: solution_overview, tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=1 :: P(I) = \frac{1}{4} (0.05 + 0.20 + 0.05 + 0.25) || P(I) = \frac{1}{4} (0.55) || P(I) = 0.1375 || P(L_i \mid I) = \frac{P(I \mid L_i) `
   - `eq_step_pair`: `P(L_4 \mid I) = \frac{P(I \cap L_4)}{P(I)} || P(L_4 \mid I) = \frac{0.0625}{0.1375}`

95. **MATH 12.177** (`math-cases-ch12-probability.json`, sev=6) — Theft Reports by Parking Garage
   - fields: solution_overview, tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=0 :: P(T) = \frac{1}{4} \left(0.5 + 0.0625 + 0.2 + 0.12 || P(T) = \frac{1}{4} \left(0.8875\right) || P(T) = 0.221875 || P(G_i \mid T) = \`
   - `eq_step_pair`: `P(G_1 \mid T) = \frac{P(T \cap G_1)}{P(T)} || P(G_1 \mid T) = \frac{0.125}{0.221875}`

96. **MATH 12.178** (`math-cases-ch12-probability.json`, sev=6) — Trail Closures and the Weather
   - fields: solution_overview, tactical[0], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=1 :: P(C) = P(C \mid S)P(S) + P(C \mid R)P(R) + P(C \mi || P(C) = (0.02)(0.55) + (0.10)(0.30) + (0.40)(0.15) || P(C) = 0.011 + 0.030 + 0.`
   - `eq_step_pair`: `P(C) = 0.101 || 0.101 = 10.1\%`

97. **MATH 12.179** (`math-cases-ch12-probability.json`, sev=6) — Fungus Across Three Tree Species
   - fields: solution_overview, tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=10 shorts=4 :: P(O) = 0.50 || P(P) = 0.35 || P(B) = 0.15 || P(I \mid O) = 0.02`
   - `eq_step_pair`: `P(B \mid I) = \frac{P(B \cap I)}{P(I)} || P(B \mid I) = \frac{0.018}{0.0455}`

98. **MATH 12.180** (`math-cases-ch12-probability.json`, sev=6) — Tagged Fish in a Lake
   - fields: solution_overview, tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=10 shorts=4 :: P(B) = 0.50 || P(T) = 0.30 || P(C) = 0.20 || P(G \mid B) = 0.03`
   - `eq_step_pair`: `P(C \mid G) = \frac{P(G \mid C)P(C)}{P(G)} || P(C \mid G) = \frac{0.016}{0.046}`

99. **MATH 12.182** (`math-cases-ch12-probability.json`, sev=6) — Meteors Spotted Under Cloud Cover
   - fields: solution_overview, tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=10 shorts=4 :: P(C) = 0.40 || P(PC) = 0.35 || P(O) = 0.25 || P(M \mid C) = 0.25`
   - `eq_step_pair`: `P(C \mid M) = \frac{P(C \cap M)}{P(M)} || P(C \mid M) = \frac{0.100}{0.140}`

100. **MATH 12.184** (`math-cases-ch12-probability.json`, sev=6) — Coral Bleaching Across Four Reefs
   - fields: solution_overview, tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=16 shorts=5 :: P(N) = 0.35 || P(S) = 0.30 || P(E) = 0.20 || P(W) = 0.15`
   - `eq_step_pair`: `P(W \mid B) = \frac{P(W \cap B)}{P(B)} || P(W \mid B) = \frac{0.06}{0.19}`

101. **MATH 12.185** (`math-cases-ch12-probability.json`, sev=6) — A Failed Night at the Observatory
   - fields: tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=0 :: P(B_3 \cap F) = P(B_3) \times P(F \mid B_3) || P(B_3 \cap F) = 0.30 \times 0.60 || 0.3 \times 0.6 = 0.18 || P(B_3 \cap F) = 0.18`
   - `eq_step_pair`: `P(B_4 \mid F) = \frac{P(B_4 \cap F)}{P(F)} || P(B_4 \mid F) = \frac{0.17}{0.537}`

102. **MATH 12.186** (`math-cases-ch12-probability.json`, sev=6) — Two Clues and Three Suspects
   - fields: solution_overview, tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=3 :: P(C) = 0.50 || P(F) = 0.30 || P(B) = 0.20`
   - `eq_step_cascade`: `len=4 shorts=0 :: P(P \cap S) = P(C) P(P \cap S \mid C) + P(F) P(P \ || P(P \cap S) = (0.50)(0.42) + (0.30)(0.16) + (0.20) || P(P \cap S) = 0.21 + 0.0`

103. **MATH 12.187** (`math-cases-ch12-probability.json`, sev=6) — A Positive Test in a Deer Population
   - fields: solution_overview, tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=10 shorts=3 :: P(S_A) = 0.60 || P(S_B) = 0.25 || P(S_C) = 0.15 || P(D \mid S_A) = 0.02`
   - `eq_step_pair`: `P(T^+ \mid S_B) = (0.90)(0.06) + (0.04)(1 - 0.06) || P(T^+ \mid S_B) = (0.90)(0.06) + (0.04)(0.94)`

104. **MATH 12.188** (`math-cases-ch12-probability.json`, sev=6) — Wildfires That Escaped Containment
   - fields: solution_overview, tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=1 :: P(OOC) = P(OOC \mid E)P(E) + P(OOC \mid L)P(L) + P || P(OOC) = (0.15)(0.20) + (0.06)(0.30) + (0.08)(0.50 || P(OOC) = 0.030 + 0.018 +`
   - `eq_step_pair`: `P(OOC) = 0.088 || 0.088 = 8.8\%`

105. **MATH 12.189** (`math-cases-ch12-probability.json`, sev=6) — Tagged Whales in Three Feeding Grounds
   - fields: solution_overview, tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=1 :: P(T) = P(T \mid N)P(N) + P(T \mid M)P(M) + P(T \mi || P(T) = (0.09)(0.45) + (0.11)(0.35) + (0.15)(0.20) || P(T) = 0.0405 + 0.0385 + `
   - `eq_step_pair`: `P(N \mid T) = \frac{P(N \cap T)}{P(T)} || P(N \mid T) = \frac{0.0405}{0.109}`

106. **MATH 12.190** (`math-cases-ch12-probability.json`, sev=6) — A Genuine Meteorite in Three Search Areas
   - fields: solution_overview, tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=1 :: P(G) = P(G \mid L)P(L) + P(G \mid P)P(P) + P(G \mi || P(G) = (0.07)(0.3) + (0.12)(0.5) + (0.17)(0.2) || P(G) = 0.021 + 0.06 + 0.034 `
   - `eq_step_pair`: `P(P \mid G) = \frac{P(P \cap G)}{P(G)} || P(P \mid G) = \frac{0.06}{0.115}`

107. **MATH 12.191** (`math-cases-ch12-probability.json`, sev=6) — A Lake Trout Across Three Ice-Fishing Zones
   - fields: solution_overview, tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=1 :: P(L) = P(L \mid N)P(N) + P(L \mid M)P(M) + P(L \mi || P(L) = (0.07)(0.25) + (0.11)(0.45) + (0.19)(0.30) || P(L) = 0.0175 + 0.0495 + `
   - `eq_step_pair`: `P(S \mid L) = \frac{P(S \cap L)}{P(L)} || P(S \mid L) = \frac{0.057}{0.124}`

108. **MATH 12.192** (`math-cases-ch12-probability.json`, sev=6) — Mildew Across Four Vineyard Blocks
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=1 :: P(M) = P(M \mid A)P(A) + P(M \mid B)P(B) + P(M \mi || P(M) = (0.04)(0.20) + (0.09)(0.30) + (0.20)(0.35)  || P(M) = 0.008 + 0.027 + 0`
   - `eq_step_pair`: `P(M) = 0.126 || 0.126 = 12.6\%`

109. **MATH 12.193** (`math-cases-ch12-probability.json`, sev=6) — Irregular Blankets from Two Makers
   - fields: tactical[1], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `N_I(M_B) = 168 || N_I(M_A) = 120`
   - `eq_step_cascade`: `len=7 shorts=0 :: P(M_B \mid I) = \frac{P(I \mid M_B)P(M_B)}{P(I)} || P(M_B \mid I) = \frac{0.07 \times \frac{4}{9}}{\fr || P(M_B \mid I) = \frac{0.07`

110. **MATH 13.01** (`math-cases-ch13-binomial.json`, sev=6) — Multiple-Choice Guessing
   - fields: tactical[0], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=10 shorts=0 :: 0.25 \times 0.25 = 0.0625 || 0.0625 \times 0.25 = 0.015625 || 0.015625 \times 0.25 = 0.00390625 || 0.00390625 \times 0.25 = 0.00097`
   - `eq_step_cascade`: `len=6 shorts=2 :: \binom{10}{7} = \dfrac{10!}{7!(10-7)!} || \dfrac{10!}{7!(3)!} = \dfrac{10 \cdot 9 \cdot 8}{1 || 10 \cdot 9 = 90 || 90 \cdot 8 = 720`

111. **MATH 13.02** (`math-cases-ch13-binomial.json`, sev=6) — Free Throws — Rookie vs All-Star
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=10 shorts=0 :: 0.85 \times 0.85 = 0.7225 || 0.7225 \times 0.85 = 0.614125 || 0.614125 \times 0.85 = 0.52200625 || 0.52200625 \times 0.85 = 0.44370`
   - `eq_step_cascade`: `len=5 shorts=1 :: \binom{10}{8} = \dfrac{10!}{8!(10-8)!} || \dfrac{10!}{8!(2)!} = \dfrac{10 \cdot 9}{1 \cdot 2 || 10 \cdot 9 = 90 || \dfrac{90}{2} = 4`

112. **MATH 13.07** (`math-cases-ch13-binomial.json`, sev=6) — Archery Medal Round
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=9 shorts=0 :: 0.97 \times 0.97 = 0.9409 || 0.9409 \times 0.97 = 0.912673 || 0.912673 \times 0.97 = 0.88529281 || 0.88529281 \times 0.97 = 0.858734`
   - `eq_step_pair`: `\binom{9}{8} = \dfrac{9!}{8!(9-8)!} || \binom{9}{8} = 9`

113. **MATH 13.10** (`math-cases-ch13-binomial.json`, sev=6) — Forecast Accuracy Award
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=10 shorts=0 :: 0.95 \times 0.95 = 0.9025 || 0.9025 \times 0.95 = 0.857375 || 0.857375 \times 0.95 = 0.81450625 || 0.81450625 \times 0.95 = 0.77378`
   - `eq_step_pair`: `\binom{10}{9} = \dfrac{10!}{9!(10-9)!} || \binom{10}{9} = 10`

114. **MATH 13.15** (`math-cases-ch13-binomial.json`, sev=6) — Eight Free Throws Contest
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=8 shorts=0 :: 0.9 \times 0.9 = 0.81 || 0.81 \times 0.9 = 0.729 || 0.729 \times 0.9 = 0.6561 || 0.6561 \times 0.9 = 0.59049`
   - `eq_step_pair`: `\binom{8}{7} = \dfrac{8!}{7!(8-7)!} || \binom{8}{7} = 8`

115. **MATH 13.18** (`math-cases-ch13-binomial.json`, sev=6) — Sales Call Conversions
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `P(X = 25) || (0.3)^{25} = 0`
   - `eq_step_cascade`: `len=17 shorts=0 :: 25 \cdot 24 = 600 || 600 \cdot 23 = 13800 || 13800 \cdot 22 = 303600 || 303600 \cdot 21 = 6375600`

116. **MATH 13.48** (`math-cases-ch13-binomial.json`, sev=6) — Ten-Arrow Archery Contest
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=10 shorts=0 :: 0.95 \times 0.95 = 0.9025 || 0.9025 \times 0.95 = 0.857375 || 0.857375 \times 0.95 = 0.81450625 || 0.81450625 \times 0.95 = 0.77378`
   - `eq_step_pair`: `\binom{10}{9} = \dfrac{10!}{9!(10-9)!} || \binom{10}{9} = 10`

117. **MATH 10.3.31** (`math-ch10-exp-log.json`, sev=6) — Applied letters — discrete population, GDP per capita, and a continuous neighbour
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=0 :: f(t) = 12\cdot 1.018^{t} || f(0)=12\cdot 1.018^{0} || f(0)=12\cdot 1.1 || 12\cdot \frac{11}{10}=\frac{66}{5}`
   - `eq_step_pair`: `f(20)=12\cdot 1.018^{20} || f(20)=12\cdot 1.12748236216396078174437376`

118. **MATH 11.162** (`math-ch11-exam.json`, sev=6) — Harbour café: drinks, cost, and staffing hours
   - fields: tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=0 :: R^{\prime}(Q) = 40-Q || C^{\prime}(Q) = Q^{2}-9Q+20 || R^{\prime}(8) = 32 || C^{\prime}(8) = 12`
   - `eq_step_pair`: `Q = 6 || Q = 10`

119. **MATH 11.167** (`math-ch11-exam.json`, sev=6) — Bakery chain: demand, tax, and average cost
   - fields: tactical[0], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=1 :: P(Q) = 38Q-\dfrac{3}{4}Q^{2}-180 || P^{\prime}(Q) = 38-\dfrac{3}{2}Q || P^{\prime}(Q) = 0 || Q = \dfrac{76}{3}`
   - `eq_step_pair`: `Q = 10 || Q = 18`

120. **MATH 11.171** (`math-ch11-exam.json`, sev=6) — Greenhouse: two inputs and labour value
   - fields: tactical[0], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=3 :: \pi^{\prime}(L) = \dfrac{120}{\sqrt{L}}-30 || \pi^{\prime}(L) = 0 || \sqrt{L} = 4 || L = 16`
   - `eq_step_pair`: `VMP = 10\cdot 3 || 10\times 3 = 30`

121. **MATH 11.174** (`math-ch11-exam.json`, sev=6) — Shipping line: capacity, cost, and a smooth loading rule
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `P^{\prime}(x) = 126+12x-1.5x^{2} || P^{\prime}(x) = -1.5(x-14)(x+6)`
   - `eq_step_cascade`: `len=3 shorts=2 :: R^{\prime}(x) = 150-6x || R^{\prime}(x) = 0 || x = 25`

122. **MATH 11.177** (`math-ch11-exam.json`, sev=6) — Riverside market: three-sided stall enclosure
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=2 :: A^{\prime}(x) = 120-4x || A^{\prime}(x) = 0 || x = 30`
   - `eq_step_pair`: `A^{\prime}(x) = 120-4x || A^{\prime}(x) = 0`

123. **MATH 11.181** (`math-ch11-exam.json`, sev=6) — Design duo: two inputs under a budget
   - fields: tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=2 :: U^{\prime}(x) = 10-x || U^{\prime}(x) = 0 || x = 10`
   - `eq_step_pair`: `U^{\prime}(x) = 10-x || U^{\prime}(x) = 0`

124. **MATH 11.188** (`math-ch11-exam.json`, sev=6) — Summer festival: campaign weeks and ticket profit
   - fields: tactical[0], tactical[1]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=2 :: \pi(t) = 16t-t^{2}-10 || \pi^{\prime}(t) = 16-2t || 16-2t = 0 || t = 8`
   - `eq_step_pair`: `\pi(t) = D(t)-10 || t = 8`

125. **MATH 11.190** (`math-ch11-exam.json`, sev=6) — Cold-chain: spoilage index over delivery hours
   - fields: tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=1 :: S^{\prime\prime}(1) = 6\cdot 1-12 || S^{\prime\prime}(1) = -6<0 || t = 1 || S^{\prime} = 3(t-1)(t-3)`
   - `eq_step_pair`: `S^{\prime\prime}(3) = 18-12 || 18 - 12 = 6`

126. **MATH 11.192** (`math-ch11-exam.json`, sev=6) — Print kiosk: demand figure plus quadratic cost
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=4 :: D(15) = 30 || R(15) = 15\cdot 30 || 15\times 30 = 450 || D(15) = 60-30`
   - `eq_step_pair`: `R^{\prime}(15) = 60-4\cdot 15 || R^{\prime}(15) = 0`

127. **MATH 11.193** (`math-ch11-exam.json`, sev=6) — Spice importer: per-unit tax shifts MC on the figure
   - fields: tactical[0], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `Q = 12 || Q = 16`
   - `eq_step_cascade`: `len=3 shorts=3 :: Q = 16 || Q = 20 || MR = MC`

128. **MATH 11.194** (`math-ch11-exam.json`, sev=6) — Herb box: inverse demand inside a fencing budget
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=10 shorts=7 :: A^{\prime}(x) = 60-4x || 60-4x = 0 || x = 15 || A^{\prime\prime}(x) = -4<0`
   - `eq_step_cascade`: `len=3 shorts=2 :: R^{\prime}(A) = 24-A || 24-A = 0 || A = 24`

129. **MATH 11.198** (`math-ch11-exam.json`, sev=6) — Design duo: budget reduction then read U′ from the figure
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=2 :: U^{\prime}(x) = 10-x || U^{\prime}(x) = 0 || x = 10`
   - `eq_step_pair`: `2\cdot 10+4\cdot 5 = 20+20 || 20 + 20 = 40`

130. **MATH 11.202** (`math-ch11-exam.json`, sev=6) — Club: inverse-demand figure, membership fee, and MC
   - fields: solution_overview, tactical[0], tactical[1], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `R(Q)=20Q-\dfrac{1}{2}Q^{2} || MR=20-Q`
   - `eq_step_pair`: `p = 20-\dfrac{1}{2}\cdot 20 || p = 10`

131. **MATH 11.205** (`math-ch11-exam.json`, sev=6) — Distillery: quadratic cost, linear demand, and a unit tax
   - fields: tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=3 :: 30-\dfrac{2}{3}Q = 0 || Q = 45 || p = 30-\dfrac{1}{3}\cdot 45 || p = 15`
   - `eq_step_pair`: `MR = 0 || Q = 45`

132. **MATH 12.199** (`math-ch12-exam.json`, sev=6) — Exam-style tasks - 1
   - fields: tactical[0], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=7 shorts=0 :: P(\text{exactly two aces}) = \frac{\binom{4}{2}\bi || \binom{52}{3} = \dfrac{52!}{3!(52-3)!} || \dfrac{52!}{3!(49)!} = \dfrac{52 \cd`
   - `eq_step_cascade`: `len=6 shorts=1 :: \binom{4}{2} = \dfrac{4!}{2!(4-2)!} || \dfrac{4!}{2!(2)!} = \dfrac{4 \cdot 3}{1 \cdot 2} || 4 \cdot 3 = 12 || \dfrac{12}{2} = 6`

133. **MATH 12.200** (`math-ch12-exam.json`, sev=6) — Exam-style tasks - 2
   - fields: tactical[0], tactical[1]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `58 + 46 = 104 || 104 - 17 = 87`
   - `eq_step_cascade`: `len=4 shorts=0 :: P(A\cap B) = \frac{14}{104} || P(A)P(B) = \frac{47}{104}\cdot\frac{41}{104} || 14 \times 104 = 1456 || 47 \times 41 = 1927`

134. **MATH 12.201** (`math-ch12-exam.json`, sev=6) — Exam-style tasks - 3
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=2 :: N(C\cup T) = 50+45-15 || 50 + 45 = 95 || 95 - 15 = 80`
   - `eq_step_cascade`: `len=9 shorts=0 :: w_A = 0.50\cdot 0.01 || 0.5 \times 0.01 = 0.005 || w_B = 0.30\cdot 0.03 || 0.3 \times 0.03 = 0.009`

135. **MATH 12.215** (`math-ch12-exam.json`, sev=6) — Exam-style tasks - 17
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `N(\text{at least one}) = 129-35 || 129 - 35 = 94`
   - `eq_step_cascade`: `len=3 shorts=2 :: N(\text{exactly one}) = 26+21+19 || 26 + 21 = 47 || 47 + 19 = 66`

136. **MATH 13.76** (`math-ch13-exam.json`, sev=6) — Regional Tennis Circuit
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.68 || 1 - 0.68 = 0.32`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(X) = 50\cdot 0.68\cdot 0.32 || 50 \times 0.68 = 34 || 34 \times 0.32 = 10.88`

137. **MATH 13.77** (`math-ch13-exam.json`, sev=6) — Festival Food Stall
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.8 || 1 - 0.8 = 0.2`
   - `eq_step_cascade`: `len=3 shorts=2 :: E[X] = np || E[X] = 5\cdot 0.8 || 5 \times 0.8 = 4`

138. **MATH 13.78** (`math-ch13-exam.json`, sev=6) — Community Clinic Screening
   - fields: tactical[0], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.15 || 1 - 0.15 = 0.85`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(X) = 40\cdot 0.15\cdot 0.85 || 40 \times 0.15 = 6 || 6 \times 0.85 = 5.1`

139. **MATH 13.79** (`math-ch13-exam.json`, sev=6) — Night Courier Audit
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.84 || 1 - 0.84 = 0.16`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(X) = 25\cdot 0.84\cdot 0.16 || 25 \times 0.84 = 21 || 21 \times 0.16 = 3.36`

140. **MATH 13.80** (`math-ch13-exam.json`, sev=6) — Coding Contest Auto-Grader
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.4 || 1 - 0.4 = 0.6`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(X) = 35\cdot 0.4\cdot 0.6 || 35 \times 0.4 = 14 || 14 \times 0.6 = 8.4`

141. **MATH 13.81** (`math-ch13-exam.json`, sev=6) — Warehouse Picker Accuracy
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.8 || 1 - 0.8 = 0.2`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(X) = 25\cdot 0.8\cdot 0.2 || 25 \times 0.8 = 20 || 20 \times 0.2 = 4`

142. **MATH 13.82** (`math-ch13-exam.json`, sev=6) — Language Lab Listening Test
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.75 || 1 - 0.75 = 0.25`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(X) = 50\cdot 0.75\cdot 0.25 || 50 \times 0.75 = 37.5 || 37.5 \times 0.25 = 9.375`

143. **MATH 13.83** (`math-ch13-exam.json`, sev=6) — Bike-Share Dock Sensors
   - fields: tactical[0], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.2 || 1 - 0.2 = 0.8`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(X) = 40\cdot 0.2\cdot 0.8 || 40 \times 0.2 = 8 || 8 \times 0.8 = 6.4`

144. **MATH 13.84** (`math-ch13-exam.json`, sev=6) — Hotel Booking Confirmations
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.8 || 1 - 0.8 = 0.2`
   - `eq_step_cascade`: `len=3 shorts=2 :: E[X] = np || E[X] = 5\cdot 0.8 || 5 \times 0.8 = 4`

145. **MATH 13.85** (`math-ch13-exam.json`, sev=6) — Pharmacy Prescription Checks
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.2 || 1 - 0.2 = 0.8`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(X) = 40\cdot 0.2\cdot 0.8 || 40 \times 0.2 = 8 || 8 \times 0.8 = 6.4`

146. **MATH 13.86** (`math-ch13-exam.json`, sev=6) — Museum Audio Guide Returns
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.8 || 1 - 0.8 = 0.2`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(X) = 50\cdot 0.8\cdot 0.2 || 50 \times 0.8 = 40 || 40 \times 0.2 = 8`

147. **MATH 13.87** (`math-ch13-exam.json`, sev=6) — Startup Demo Conversions
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.4 || 1 - 0.4 = 0.6`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(X) = 25\cdot 0.4\cdot 0.6 || 25 \times 0.4 = 10 || 10 \times 0.6 = 6`

148. **MATH 13.88** (`math-ch13-exam.json`, sev=6) — Campus Bus On-Time Arrivals
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.8 || 1 - 0.8 = 0.2`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(X) = 40\cdot 0.8\cdot 0.2 || 40 \times 0.8 = 32 || 32 \times 0.2 = 6.4`

149. **MATH 13.89** (`math-ch13-exam.json`, sev=6) — Escape-Room Puzzle Solves
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.6 || 1 - 0.6 = 0.4`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(X) = 50\cdot 0.6\cdot 0.4 || 50 \times 0.6 = 30 || 30 \times 0.4 = 12`

150. **MATH 13.90** (`math-ch13-exam.json`, sev=6) — Wildlife Camera Triggers
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.25 || 1 - 0.25 = 0.75`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(X) = 48\cdot 0.25\cdot 0.75 || 48 \times 0.25 = 12 || 12 \times 0.75 = 9`

151. **MATH 13.91** (`math-ch13-exam.json`, sev=6) — Theatre Ticket Upsells
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.4 || 1 - 0.4 = 0.6`
   - `eq_step_cascade`: `len=3 shorts=2 :: E[X] = np || E[X] = 5\cdot 0.4 || 5 \times 0.4 = 2`

152. **MATH 13.92** (`math-ch13-exam.json`, sev=6) — Lab Pipette Calibration Passes
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.85 || 1 - 0.85 = 0.15`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(X) = 25\cdot 0.85\cdot 0.15 || 25 \times 0.85 = 21.25 || 21.25 \times 0.15 = 3.1875`

153. **MATH 13.93** (`math-ch13-exam.json`, sev=6) — Online Quiz Instant Feedback
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.6 || 1 - 0.6 = 0.4`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(X) = 50\cdot 0.6\cdot 0.4 || 50 \times 0.6 = 30 || 30 \times 0.4 = 12`

154. **MATH 13.94** (`math-ch13-exam.json`, sev=6) — Airport Lounge Wi-Fi Sessions
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.8 || 1 - 0.8 = 0.2`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(X) = 40\cdot 0.8\cdot 0.2 || 40 \times 0.8 = 32 || 32 \times 0.2 = 6.4`

155. **MATH 13.95** (`math-ch13-exam.json`, sev=6) — Charity Door-to-Door Pledges
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.25 || 1 - 0.25 = 0.75`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(X) = 25\cdot 0.25\cdot 0.75 || 25 \times 0.25 = 6.25 || 6.25 \times 0.75 = 4.6875`

156. **MATH 13.96** (`math-ch13-exam.json`, sev=6) — Bakery Morning Batch QC
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.8 || 1 - 0.8 = 0.2`
   - `eq_step_cascade`: `len=3 shorts=2 :: E[X] = np || E[X] = 5\cdot 0.8 || 5 \times 0.8 = 4`

157. **MATH 13.97** (`math-ch13-exam.json`, sev=6) — Swim-Meet Legal Starts
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.8 || 1 - 0.8 = 0.2`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(X) = 25\cdot 0.8\cdot 0.2 || 25 \times 0.8 = 20 || 20 \times 0.2 = 4`

158. **MATH 13.98** (`math-ch13-exam.json`, sev=6) — Library Reserve Hold Pickups
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.75 || 1 - 0.75 = 0.25`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(X) = 50\cdot 0.75\cdot 0.25 || 50 \times 0.75 = 37.5 || 37.5 \times 0.25 = 9.375`

159. **MATH 13.99** (`math-ch13-exam.json`, sev=6) — App Push Notification Opens
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.3 || 1 - 0.3 = 0.7`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(X) = 40\cdot 0.3\cdot 0.7 || 40 \times 0.3 = 12 || 12 \times 0.7 = 8.4`

160. **MATH 13.100** (`math-ch13-exam.json`, sev=6) — Robot Vacuum Room Completions
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.7 || 1 - 0.7 = 0.3`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(X) = 25\cdot 0.7\cdot 0.3 || 25 \times 0.7 = 17.5 || 17.5 \times 0.3 = 5.25`

161. **MATH 13.101** (`math-ch13-exam.json`, sev=6) — Debate Tournament Coin Tosses
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.55 || 1 - 0.55 = 0.45`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(X) = 50\cdot 0.55\cdot 0.45 || 50 \times 0.55 = 27.5 || 27.5 \times 0.45 = 12.375`

162. **MATH 13.102** (`math-ch13-exam.json`, sev=6) — Farm Soil Moisture Alerts
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.2 || 1 - 0.2 = 0.8`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(X) = 45\cdot 0.2\cdot 0.8 || 45 \times 0.2 = 9 || 9 \times 0.8 = 7.2`

163. **MATH 13.103** (`math-ch13-exam.json`, sev=6) — Cinema Loyalty Card Scans
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.6 || 1 - 0.6 = 0.4`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(X) = 25\cdot 0.6\cdot 0.4 || 25 \times 0.6 = 15 || 15 \times 0.4 = 6`

164. **MATH 13.104** (`math-ch13-exam.json`, sev=6) — Ski-Lift Gate Passes
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.9 || 1 - 0.9 = 0.1`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(X) = 40\cdot 0.9\cdot 0.1 || 40 \times 0.9 = 36 || 36 \times 0.1 = 3.6`

165. **MATH 13.105** (`math-ch13-exam.json`, sev=6) — Podcast Ad Click-Throughs
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.1 || 1 - 0.1 = 0.9`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(X) = 50\cdot 0.1\cdot 0.9 || 50 \times 0.1 = 5 || 5 \times 0.9 = 4.5`

166. **MATH 13.106** (`math-ch13-exam.json`, sev=6) — Campus Printer Job Success
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.8 || 1 - 0.8 = 0.2`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(X) = 25\cdot 0.8\cdot 0.2 || 25 \times 0.8 = 20 || 20 \times 0.2 = 4`

167. **MATH 13.107** (`math-ch13-exam.json`, sev=6) — Board-Game Critical Hits
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.2 || 1 - 0.2 = 0.8`
   - `eq_step_cascade`: `len=3 shorts=2 :: E[X] = np || E[X] = 5\cdot 0.2 || 5 \times 0.2 = 1`

168. **MATH 13.108** (`math-ch13-exam.json`, sev=6) — Harbor Foghorn Tests
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.8 || 1 - 0.8 = 0.2`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(X) = 50\cdot 0.8\cdot 0.2 || 50 \times 0.8 = 40 || 40 \times 0.2 = 8`

169. **MATH 13.109** (`math-ch13-exam.json`, sev=6) — Blood-Donation Appointment Shows
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.8 || 1 - 0.8 = 0.2`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(X) = 40\cdot 0.8\cdot 0.2 || 40 \times 0.8 = 32 || 32 \times 0.2 = 6.4`

170. **MATH 13.110** (`math-ch13-exam.json`, sev=6) — Drone Delivery Drop Accuracy
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.75 || 1 - 0.75 = 0.25`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(X) = 25\cdot 0.75\cdot 0.25 || 25 \times 0.75 = 18.75 || 18.75 \times 0.25 = 4.6875`

171. **MATH 13.111** (`math-ch13-exam.json`, sev=6) — Music Festival Wristband Scans
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.9 || 1 - 0.9 = 0.1`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(X) = 25\cdot 0.9\cdot 0.1 || 25 \times 0.9 = 22.5 || 22.5 \times 0.1 = 2.25`

172. **MATH 13.112** (`math-ch13-exam.json`, sev=6) — Tutoring Session Homework Done
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.6 || 1 - 0.6 = 0.4`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(X) = 50\cdot 0.6\cdot 0.4 || 50 \times 0.6 = 30 || 30 \times 0.4 = 12`

173. **MATH 13.113** (`math-ch13-exam.json`, sev=6) — Ice-Cream Machine Self-Cleans
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.8 || 1 - 0.8 = 0.2`
   - `eq_step_cascade`: `len=3 shorts=2 :: E[X] = np || E[X] = 5\cdot 0.8 || 5 \times 0.8 = 4`

174. **MATH 13.114** (`math-ch13-exam.json`, sev=6) — Archaeology Dig Artifact Finds
   - fields: tactical[0], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.25 || 1 - 0.25 = 0.75`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(X) = 40\cdot 0.25\cdot 0.75 || 40 \times 0.25 = 10 || 10 \times 0.75 = 7.5`

175. **MATH 13.115** (`math-ch13-exam.json`, sev=6) — Satellite Packet Acknowledgements
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `1-p = 1-0.85 || 1 - 0.85 = 0.15`
   - `eq_step_cascade`: `len=4 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(X) = 25\cdot 0.85\cdot 0.15 || 25 \times 0.85 = 21.25 || 21.25 \times 0.15 = 3.1875`

176. **MATH 2.05** (`math-ch2-cases.json`, sev=6) — Binomial identities — set 1
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `a=5 || b=2`
   - `eq_step_pair`: `5-2=3 || 3^2=9`

177. **MATH 2.06** (`math-ch2-cases.json`, sev=6) — Binomial identities — set 2
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=35 shorts=32 :: a=1 || b=2 || c=2 || d=1`
   - `eq_step_cascade`: `len=5 shorts=1 :: (c+3)^2=(c+3)(c+3) || (c+3)(c+3)=c^2+2\cdot c\cdot 3+3^2 || 2\cdot c\cdot 3=6c || 3^2=9`

178. **MATH 2.08** (`math-ch2-cases.json`, sev=6) — Perfect squares that miss the constant by one
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=16 shorts=15 :: y=2 || 3y=3\cdot 2 || 3\cdot 2=6 || (3y-2)=6-2`
   - `eq_step_pair`: `r=1 || s=3`

179. **MATH 2.09** (`math-ch2-cases.json`, sev=6) — Grouping a linear sum inside a square difference
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=12 shorts=11 :: p=5 || q=3 || p+q=5+3 || 5+3=8`
   - `eq_step_cascade`: `len=35 shorts=32 :: a=1 || b=2 || c=2 || d=1`

180. **MATH 2.11** (`math-ch2-cases.json`, sev=6) — A doubled middle that refuses to be halved
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=20 shorts=14 :: u=1 || v=1 || u^{4}+4v^{4}=(u^{2}+2v^{2})^{2}-(2uv)^{2} || u^{2}=1`
   - `eq_step_cascade`: `len=7 shorts=3 :: (x-2)^3=(x-2)(x-2)(x-2) || (x-2)^3=x^3-3x^2\cdot 2+3x\cdot 2^2-2^3 || 3x^2\cdot 2=6x^2 || 2^2=4`

181. **MATH 2.12** (`math-ch2-cases.json`, sev=6) — Three-term squares with a dropped factor two
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=10 shorts=6 :: x=1 || y=1 || z=1 || (x+y+z)^{2}=x^{2}+y^{2}+z^{2}+2xy+2yz+2zx`
   - `eq_step_pair`: `r=1 || s=3`

182. **MATH 2.15** (`math-ch2-cases.json`, sev=6) — A hidden square inside a biquadratic difference
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=20 shorts=14 :: u=1 || v=1 || u^{4}+4v^{4}=(u^{2}+2v^{2})^{2}-(2uv)^{2} || u^{2}=1`
   - `eq_step_cascade`: `len=9 shorts=8 :: 27=3^3 || 8=2^3 || 3^3-2^3=(3-2)(3^2+3\cdot 2+2^2) || 3-2=1`

183. **MATH 2.22** (`math-ch2-cases.json`, sev=6) — A square of a difference of two squares
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=2 :: (x^2-y^2)^2=(x^2-y^2)(x^2-y^2) || (x^2-y^2)(x^2-y^2)=(x^2)^2-2\cdot x^2\cdot y^2+(y^ || (x^2)^2=x^4 || 2\cdot x^2\cdot y^2=2x^2y^2`
   - `eq_step_cascade`: `len=10 shorts=9 :: x=2 || x-1=1 || x+1=3 || x^2+1=5`

184. **MATH 2.28** (`math-ch2-cases.json`, sev=6) — Completing the square under a leading coefficient two
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=9 shorts=9 :: x=3 || x^2=9 || 2x^2=18 || 8x=24`
   - `eq_step_pair`: `a=5 || b=2`

185. **MATH 2.33** (`math-ch2-cases.json`, sev=6) — A biquadratic that is already a completed square
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=8 shorts=8 :: x=2 || y=1 || x^4=16 || 2x^2y^2=8`
   - `eq_step_cascade`: `len=12 shorts=12 :: a=1 || e=2 || c=2 || d=1`

186. **MATH 2.38** (`math-ch2-cases.json`, sev=6) — Warm-up: partial fraction split on $x^2-1$
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=9 shorts=3 :: x^2-1=(x-1)(x+1) || \dfrac{1}{(x-1)(x+1)}=\dfrac{A}{x-1}+\dfrac{B}{x+1 || A(x+1)+B(x-1)=1 || A+B=0`
   - `eq_step_cascade`: `len=8 shorts=5 :: \dfrac{2}{(x-1)(x+1)}=\dfrac{A}{x-1}+\dfrac{B}{x+1 || A(x+1)+B(x-1)=2 || A+B=0 || A-B=2`

187. **MATH 2.39** (`math-ch2-cases.json`, sev=6) — Cancelled factor kept as the remainder
   - fields: tactical[0], tactical[1]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `8\cdot 2=16 || 4\cdot 4=16`
   - `eq_step_cascade`: `len=4 shorts=1 :: (-9m)^2=81m^2 || 4\cdot 9m=36m || \dfrac{36m}{81m^2}=\dfrac{36}{81m} || \dfrac{36}{81}=\dfrac{4}{9}`

188. **MATH 2.40** (`math-ch2-cases.json`, sev=6) — LCD taken as a sum of denominators
   - fields: tactical[0], tactical[1]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=2 :: \dfrac{1}{r}+\dfrac{1}{s}=\dfrac{r+s}{rs} || r=1 || s=1`
   - `eq_step_pair`: `\dfrac{3}{x}+\dfrac{5}{x}=\dfrac{3+5}{x} || 3+5=8`

189. **MATH 2.41** (`math-ch2-cases.json`, sev=6) — A letter struck from only one term
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=2 :: \dfrac{1}{a}+\dfrac{1}{b}=\dfrac{a+b}{ab} || \dfrac{b+a}{a+b}=1 || a=1 || b=1`
   - `eq_step_pair`: `\dfrac{1}{1-x}=-\dfrac{1}{x-1} || x=2`

190. **MATH 2.43** (`math-ch2-cases.json`, sev=6) — Test point after a difference-of-squares cancel
   - fields: tactical[0], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=1 :: \dfrac{1}{x-2}=\dfrac{x+2}{(x-2)(x+2)} || \dfrac{1}{x+2}=\dfrac{x-2}{(x-2)(x+2)} || \dfrac{x+2}{x^2-4}-\dfrac{x-2}{x^2-4}=\dfrac{(x+`
   - `eq_step_pair`: `4x^2-16=4(x-2)(x+2) || 2x+4=2(x+2)`

191. **MATH 2.109** (`math-ch2-cases.json`, sev=6) — Sign of a letter over its modulus
   - fields: tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `|x^2-8x+7|=|(x-1)|\,|(x-7)| || x=2`
   - `eq_step_cascade`: `len=3 shorts=2 :: x=0 || |1-x|=|x-1|, || |x-1|+|1-x|=2|x-1|.`

192. **MATH 2.119** (`math-ch2-cases.json`, sev=6) — Triangle inequality as a comparison
   - fields: tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `|1-2|+|1-8|=8 || x=-1`
   - `eq_step_cascade`: `len=11 shorts=10 :: x=-3 || y=1 || |x|=|-3| || |-3|=3`

193. **MATH 2.122** (`math-ch2-cases.json`, sev=6) — Cubes inside bars versus cubes of bars
   - fields: tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=11 shorts=10 :: x=-3 || y=1 || |x|=|-3| || |-3|=3`
   - `eq_step_pair`: `|h^2|=h^2. || |(-2)^2|=|4|`

194. **MATH 2.123** (`math-ch2-cases.json`, sev=6) — Reversed insides split by five breakpoints
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `|x+y|=|x|+|y|\iff xy\ge 0 || x=-3`
   - `eq_step_pair`: `|6-z|=6-z || |6-7|=|-1|`

195. **MATH 2.124** (`math-ch2-cases.json`, sev=6) — Homogeneity pulled out of bars
   - fields: tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `|x-3|+|x-9|=6+2>6 || x=2`
   - `eq_step_pair`: `|-6z|=-6|z| || |-6z|=|6|\,|z|`

196. **MATH 2.131** (`math-ch2-cases.json`, sev=6) — Nested bars around a translated letter
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=11 shorts=10 :: a=-4 || b=1 || |a|=|-4| || |-4|=4`
   - `eq_step_cascade`: `len=3 shorts=2 :: x=-2 || \bigl||0|-1\bigr|=1 || |0|-1=-1`

197. **MATH 2.132** (`math-ch2-cases.json`, sev=6) — Quotient of opposite linears then a false global constant
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=11 shorts=10 :: a=-4 || b=1 || |a|=|-4| || |-4|=4`
   - `eq_step_cascade`: `len=4 shorts=2 :: |u-1|=u-1 || 1-u=-(u-1) || \frac{|u-1|}{1-u}=\frac{u-1}{-(u-1)} || \frac{u-1}{-(u-1)}=-1`

198. **MATH 2.134** (`math-ch2-cases.json`, sev=6) — Wrong piece chosen then a leftover constant
   - fields: tactical[0], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=2 :: |4r-3|=4r-3. || 4|r|-3=4r-3. || |4r-3|=4|r|-3`
   - `eq_step_pair`: `|1-2|+|1-8|=8 || a=-1`

199. **MATH 2.136** (`math-ch2-cases.json`, sev=6) — Mixed slogans that look like product rules
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `|0-1|+|0-7|=8 || a=-1`
   - `eq_step_cascade`: `len=3 shorts=2 :: |z+h|=|z|+|h| || |1+(-1)|=0 || |1|+|-1|=2`

200. **MATH 2.137** (`math-ch2-cases.json`, sev=6) — Exam-style tasks - 1
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=0 :: (x-y)^2=x^2-2xy+y^2 || (y-z)^2=y^2-2yz+z^2 || (z-x)^2=z^2-2zx+x^2 || \tfrac12\bigl[(x-y)^2+(y-z)^2+(z-x)^2\bigr]=x^2+y^`
   - `eq_step_cascade`: `len=4 shorts=0 :: 1+\frac{1}{t}=\frac{t+1}{t} || \frac{1}{1+\frac{1}{t}}=\frac{t}{t+1} || 1+\frac{t}{t+1}=\frac{2t+1}{t+1} || \dfrac{1}{1+\dfrac{1}{1+`

201. **MATH 2.140** (`math-ch2-cases.json`, sev=6) — Exam-style tasks - 4
   - fields: tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=0 :: a^3+b^3=s^3-3ps || (a+b)^{3}=a^{3}+b^{3}+3ab(a+b) || a^{3}+b^{3}=(a+b)^{3}-3ab(a+b) || a^{3}+b^{3}=s^{3}-3ps`
   - `eq_step_cascade`: `len=4 shorts=0 :: x^2+\dfrac1{x^2}=k^2-2 || \left(x+\dfrac{1}{x}\right)^2=x^2+2+\dfrac{1}{x^2} || k^2=x^2+\dfrac{1}{x^2}+2 || x^2+\dfrac{1}{x^2}=k^2-2`

202. **MATH 2.141** (`math-ch2-cases.json`, sev=6) — Exam-style tasks - 5
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=0 :: a^2+b^2+c^2=-2(ab+bc+ca) || (a+b+c)^{2}=0 || a^{2}+b^{2}+c^{2}+2(ab+bc+ca)=0 || a^{2}+b^{2}+c^{2}=-2(ab+bc+ca)`
   - `eq_step_cascade`: `len=4 shorts=3 :: \dfrac{1}{x-1}=\dfrac{2}{x+1} || x+1=2(x-1) || x+1=2x-2 || 3=x`

203. **MATH 2.145** (`math-ch2-cases.json`, sev=6) — Exam-style tasks - 9
   - fields: tactical[1], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `\dfrac{1}{ab}+\dfrac{1}{bc}+\dfrac{1}{ca}=0 || \dfrac{1}{ab}+\dfrac{1}{bc}+\dfrac{1}{ca}=\dfrac{c+a+b}{abc}`
   - `eq_step_cascade`: `len=4 shorts=0 :: \sqrt x+\sqrt{x+2\sqrt x+1}=2\sqrt x+1 || x+2\sqrt{x}+1=(\sqrt{x}+1)^2 || \sqrt{x+2\sqrt{x}+1}=\sqrt{x}+1 || \sqrt{x}+\sqrt{x+2\sqrt`

204. **MATH 2.146** (`math-ch2-cases.json`, sev=6) — Exam-style tasks - 10
   - fields: tactical[1], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `\sqrt{(v-2)^2}=|v-2| || v=2`
   - `eq_step_cascade`: `len=4 shorts=4 :: a^2-ac=0 || a(a-c)=0 || a-c=0 || a=c`

205. **MATH 11.124** (`math-ch3-exam.json`, sev=6) — Exam-style tasks - 1
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=1 :: FV = P(1+i)^{nt} || FV=Pe^{rt} || FV=24000.00e^{(0.0380)(5)} || FV=24000.00e^{0.190000}`
   - `eq_step_pair`: `PV=7532.956685+9183.730589+11103.724438 || PV=27820.411713`

206. **MATH 11.125** (`math-ch3-exam.json`, sev=6) — Exam-style tasks - 2
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `PV=\sum_{t}\frac{C_t}{(1+i)^t} || PV=\frac{18000.00}{(1+0.0550)^2}+\frac{27000.00}{(1+0.0550)^`
   - `eq_step_pair`: `S_5=20000.00\frac{0.88000^{5}-1}{0.88000-1} || S_5=78711.347200`

207. **MATH 11.126** (`math-ch3-exam.json`, sev=6) — Exam-style tasks - 3
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `PV=4201.680672+5230.850510+6105.100969 || PV=15537.632151`
   - `eq_step_pair`: `S_7=4500.00\frac{1.06667^{7}-1}{1.06667-1} || S_7=38548.575210`

208. **MATH 11.127** (`math-ch3-exam.json`, sev=6) — Exam-style tasks - 4
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `FV=3000.00(1+0.0650)^{5}\frac{1-0.98591549^6}{1-0.98591549} || FV=23809.331183`
   - `eq_step_pair`: `PV_1=\frac{24000.00}{0.0480-0.0000} || PV_1=500000.000000`

209. **MATH 11.128** (`math-ch3-exam.json`, sev=6) — Exam-style tasks - 5
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `PV_1=\frac{30000.00}{0.0650-0.0200} || PV_1=666666.666667`
   - `eq_step_pair`: `NPV=-96000.00+25570.776256+23352.307083+21326.307838+19476.0 || NPV=-6274.528606`

210. **MATH 11.129** (`math-ch3-exam.json`, sev=6) — Exam-style tasks - 6
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `NPV=-250000.00+74626.865672+73056.380772+84763.195185 || NPV=-17553.558372`
   - `eq_step_cascade`: `len=4 shorts=1 :: 1+R=e^{0.0520} || R=e^{0.0520}-1 || R=0.05337574 || 100R=5.3376\%`

211. **MATH 11.130** (`math-ch3-exam.json`, sev=6) — Exam-style tasks - 7
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=1 :: 0=-42000.00+\frac{71500.00}{(1+r)^6} || 42000.00(1+r)^6=71500.00 || 1+r=\left(\frac{71500.00}{42000.00}\right)^{1/6} || r=0.09272143`
   - `eq_step_cascade`: `len=4 shorts=1 :: 1.3500=e^{0.0320t} || \ln(1.3500) = 0.0320t || t=\frac{\ln(1.3500)}{0.0320} || t=9.378269`

212. **MATH 11.132** (`math-ch3-exam.json`, sev=6) — Exam-style tasks - 9
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `PV=\sum_{t}\frac{C_t}{(1+i)^t} || PV=\frac{25000.00}{(1+0.0820)^2}+\frac{40000.00}{(1+0.0820)^`
   - `eq_step_pair`: `FV=2500.00(1+0.0450)^{6}\frac{1-1.03349282^7}{1-1.03349282} || FV=25211.602737`

213. **MATH 11.133** (`math-ch3-exam.json`, sev=6) — Exam-style tasks - 10
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `PV=9523.809524+10366.051182+11517.834647 || PV=31407.695353`
   - `eq_step_pair`: `S_8=15000.00\frac{0.82000^{8}-1}{0.82000-1} || S_8=66298.826178`

214. **MATH 4.01** (`math-ch4-cases.json`, sev=6) — Five short linear claims, each a full sentence
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=5 :: 2x + 6 = 14 || 2x = 14 - 6 || 14 - 6 = 8 || 2x = 8`
   - `eq_step_pair`: `2 \cdot 5 = 10 || 10 + 6 = 16`

215. **MATH 4.06** (`math-ch4-cases.json`, sev=6) — Short stories that close on a number
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=3 :: P = 2(4 + 7) || P = 2 \cdot 11 || P = 22`
   - `eq_step_pair`: `P = 4 \cdot 6 || P = 24`

216. **MATH 4.10** (`math-ch4-cases.json`, sev=6) — One solution, none, or every $x$
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `x + 3 = x + 5 || 3 = 5`
   - `eq_step_pair`: `2(x + 4) = 2x + 8 || 2x + 8 = 2x + 8`

217. **MATH 4.12** (`math-ch4-cases.json`, sev=6) — Runners, printers, and a train past a pole
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=7 shorts=0 :: t_1 = \frac{9}{6} || t_1 = \frac{3}{2} || t_2 = \frac{6}{9} || t_2 = \frac{2}{3}`
   - `eq_step_cascade`: `len=5 shorts=1 :: \frac{1}{6} + \frac{1}{s} = \frac{1}{4} || \frac{1}{s} = \frac{1}{4} - \frac{1}{6} || \frac{1}{s} = \frac{3}{12} - \frac{2}{12} || \`

218. **MATH 4.13** (`math-ch4-cases.json`, sev=6) — Wire around a garden, angles in a triangle
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=5 :: 2(b + 5) + b = 40 || 2b + 10 + b = 40 || 3b + 10 = 40 || 3b = 30`
   - `eq_step_cascade`: `len=5 shorts=5 :: 2(w + w + 3) = 54 || 2(2w + 3) = 54 || 4w + 6 = 54 || 4w = 48`

219. **MATH 4.23** (`math-ch4-cases.json`, sev=6) — Five separate mixing and alloy stories
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=2 :: 8 + 0.50x = 0.25(50 + x) || 8 + 0.50x = 12.5 + 0.25x || 0.25x = 4.5 || x = \frac{4.5}{0.25}`
   - `eq_step_cascade`: `len=3 shorts=3 :: V = 50 + 18 || 50 + 18 = 68 || V = 68`

220. **MATH 4.24** (`math-ch4-cases.json`, sev=6) — Five separate path, average-speed, and prize stories
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=3 :: (w + 3)(w + 11) - w(w + 8) = 141 || w^{2} + 14w + 33 - w^{2} - 8w = 141 || 6w + 33 = 141 || 6w = 108`
   - `eq_step_pair`: `6 \cdot 15 = 90 || 90 + 33 = 123`

221. **MATH 4.36** (`math-ch4-cases.json`, sev=6) — Acid Solution Mixture Optimization
   - fields: solution_overview, tactical[1], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=0 :: 0.15 \cdot 60 + p \cdot x = c \cdot (60 + x) || 9 + p \cdot x = 60 \cdot c + c \cdot x || (p - c) \cdot x = 60 \cdot c - 9 || (p - c`
   - `eq_step_pair`: `(0.15 - 0.15) \cdot x = 60 \cdot (0.15 - 0.15) || 0 \cdot x = 0`

222. **MATH 4.37** (`math-ch4-cases.json`, sev=6) — Joint Audit Report Production Rates
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `\frac{a}{60} t = W || 0 \cdot t = W`
   - `eq_step_cascade`: `len=6 shorts=1 :: \frac{1}{12} \cdot \frac{T}{2} + \frac{2}{15} \cdo || \frac{T}{24} + \frac{T}{15} = 4 || \frac{5T + 8T}{120} = 4 || \frac{13T}{120} `

223. **MATH 4.38** (`math-ch4-cases.json`, sev=6) — Successive Discount Structures and Price Parity
   - fields: solution_overview, tactical[0], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=1 :: 0.8\left(1 - \frac{p}{100}\right)x = 0.6x - 0.6F || \left(0.8 - \frac{0.8p}{100}\right)x - 0.6x = -0.6 || \left(0.2 - \frac{0.8p}{10`
   - `eq_step_pair`: `(25 - 25)x = 75F || 0 \cdot x = 75F`

224. **MATH 4.39** (`math-ch4-cases.json`, sev=6) — Parameter-Dependent Linear Equation with Fractional Coefficients
   - fields: solution_overview, tactical[0], tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=2 :: 3(3x - a) - 2(2x + 1) = 1(a x - 3) + 6 || 9x - 3a - 4x - 2 = ax - 3 + 6 || 5x - 3a - 2 = ax + 3 || (5 - a)x = 3a + 5`
   - `eq_step_cascade`: `len=3 shorts=2 :: 5 - a = 0 || a = 5 || 3(5) + 5 = 20 \neq 0`

225. **MATH 4.40** (`math-ch4-cases.json`, sev=6) — Parameterized Two-Leg Transport Schedule
   - fields: solution_overview, tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=0 :: v_1 t + v_2 (6 - t) = 360 || (k + 20)t + (2k + 10)(6 - t) = 360 || (k + 20)t + 6(2k + 10) - (2k + 10)t = 360 || (k + 20 - 2k - 10)t `
   - `eq_step_cascade`: `len=3 shorts=2 :: (10 - 25)t = 300 - 12(25) || -15t = 0 || t = 0`

226. **MATH 4.44** (`math-ch4-cases.json`, sev=6) — Corporate Discretionary Budget Allocation
   - fields: tactical[0], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=2 :: L - 2P = (1 - 3k)\left(\frac{3}{4}B - 15\right) +  || \left(1 - 3 \cdot \frac{1}{3}\right)\left(\frac{3} || 0 \cdot B + 18 = 0 || 18`
   - `eq_step_pair`: `\Delta P = P(B + 40) - P(B) || \Delta P = \left[\frac{3k}{4}(B + 40) - 15k - 6\right] - \le`

227. **MATH 4.45** (`math-ch4-cases.json`, sev=6) — Sensor Calibration via Baseline Average
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `(5 - 5)x = 2(5) || 0 \cdot x = 10`
   - `eq_step_cascade`: `len=4 shorts=3 :: (0 - 5)x = 2(0) || -5x = 0 || x = \frac{0}{-5} || x = 0`

228. **MATH 4.48** (`math-ch4-cases.json`, sev=6) — Parametric Fractional Linear Equation
   - fields: solution_overview, tactical[0], tactical[1], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=2 :: (2x^2 + x - 6) - (x^2 - x - 2) = x^2 + 2x - 4 || \frac{x^2 + 2x - 4}{x^2 - 4} = \frac{x^2 + k}{x^2  || x^2 + 2x - 4 = x^2 + k || 2x `
   - `eq_step_pair`: `x = \frac{0 + 4}{2} || x = 2`

229. **MATH 4.50** (`math-ch4-cases.json`, sev=6) — Parametric Linear Equation with Integer Solutions
   - fields: solution_overview, tactical[0], tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=1 :: 2(k x - 2) - (x + 3)(k - 1) = k - 7 || 2k x - 4 - (k x - x + 3k - 3) = k - 7 || 2k x - 4 - k x + x - 3k + 3 = k - 7 || (k + 1)x - 3k`
   - `eq_step_cascade`: `len=3 shorts=3 :: k + 1 = 0 || k = -1 || 4(-1) - 6 = -10`

230. **MATH 4.52** (`math-ch4-cases.json`, sev=6) — Executive Compensation Adjustment Model
   - fields: tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=3 :: N_1 = S_1 - K || N_2 = S_2 - K || N_1 = 2(N_2 + K) - K || N_1 = 2N_2 + K`
   - `eq_step_pair`: `\frac{d}{100} = 0.184 || d = 18.4`

231. **MATH 4.54** (`math-ch4-cases.json`, sev=6) — Parametric Linear Equation with Decimals
   - fields: solution_overview, tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=7 shorts=0 :: 25(a x - 4) - 15(2x + 5) = 5(x - 10) + 10(b - x) || 5(a x - 4) - 3(2x + 5) = (x - 10) + 2(b - x) || 5a x - 20 - 6x - 15 = x - 10 + 2`
   - `eq_step_cascade`: `len=4 shorts=2 :: 5(1 - 1)x = 2(-12.5) + 25 || 0 \cdot x = -25 + 25 || -25 + 25 = 0 || 0 = 0`

232. **MATH 4.57** (`math-ch4-cases.json`, sev=6) — Perimeter Equivalence of Partitioned Storage Plots
   - fields: solution_overview, tactical[0], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=9 shorts=3 :: P_A = 2((3x - a) + (x + 4)) || P_A = 2(4x - a + 4) || P_A = 8x - 2a + 8 || P_B = (2x + 3) + (4x - 1) + (ax + 2)`
   - `eq_step_pair`: `(2 - 2)x = 2(2) - 4 || 0 \cdot x = 0`

233. **MATH 4.58** (`math-ch4-cases.json`, sev=6) — Parametric Linear Equilibrium Model
   - fields: solution_overview, tactical[1]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=3 :: a x - 6 + 2(a + 1) = 3x - a || a x - 6 + 2a + 2 = 3x - a || a x + 2a - 4 = 3x - a || a x - 3x = 4 - 3a`
   - `eq_step_pair`: `3a - 4 < 3(1) - 4 = -1 < 0 || 3 - a > 3 - 1 = 2 > 0`

234. **MATH 4.59** (`math-ch4-cases.json`, sev=6) — A square of area $49$, and both signs of a square root
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=3 :: s^{2} = 49 || s = \pm 7 || 7 \cdot 7 = 49`
   - `eq_step_pair`: `x^{2} = 16 || x = \pm 4`

235. **MATH 4.60** (`math-ch4-cases.json`, sev=6) — When a product is zero, a factor is zero
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=4 :: (x - 2)(x - 5) = 0 || x - 2 = 0 || x - 5 = 0 || 2 + 5 = 7`
   - `eq_step_pair`: `x^{2} - 7x + 12 = 0 || (x - 3)(x - 4) = 0`

236. **MATH 4.62** (`math-ch4-cases.json`, sev=6) — A repeated root and a discriminant of zero
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `x^{2} - 4x = 0 || x(x - 4) = 0`
   - `eq_step_cascade`: `len=4 shorts=3 :: \Delta = (-4)^{2} - 4 \cdot 1 \cdot 4 || \Delta = 16 - 16 || 16 - 16 = 0 || \Delta = 0`

237. **MATH 4.65** (`math-ch4-cases.json`, sev=6) — Five separate rectangle and consecutive-integer stories
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=3 :: x(x + 2) = 48 || x^{2} + 2x - 48 = 0 || (x + 8)(x - 6) = 0 || 6 + 2 = 8`
   - `eq_step_cascade`: `len=4 shorts=4 :: n(n + 1) = 42 || n^{2} + n - 42 = 0 || (n + 7)(n - 6) = 0 || 6 + 7 = 13`

238. **MATH 4.70** (`math-ch4-cases.json`, sev=6) — Five separate Vieta sum-and-product stories
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `t^{2} - 12t + 32 = 0 || (t - 4)(t - 8) = 0`
   - `eq_step_cascade`: `len=3 shorts=2 :: t^{2} - 9t + 14 = 0 || (t - 2)(t - 7) = 0 || 7 - 2 = 5`

239. **MATH 4.71** (`math-ch4-cases.json`, sev=6) — Five separate completing-the-square and factoring claims
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=7 shorts=4 :: x^{2} + 6x + 5 = 0 || x^{2} + 6x = -5 || \frac{1}{2} \cdot 6 = 3 || 3^{2} = 9`
   - `eq_step_cascade`: `len=7 shorts=4 :: x^{2} - 4x - 1 = 0 || x^{2} - 4x = 1 || \frac{1}{2} \cdot (-4) = -2 || (-2)^{2} = 4`

240. **MATH 4.73** (`math-ch4-cases.json`, sev=6) — Five separate integer-pair product stories
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=2 :: n(n + 7) = 198 || n^{2} + 7n - 198 = 0 || \Delta = 7^{2} - 4(1)(-198) || \Delta = 49 + 792`
   - `eq_step_pair`: `(-18) \cdot (-11) = 198 || -11 - (-18) = 7`

241. **MATH 4.78** (`math-ch4-cases.json`, sev=6) — Five separate perimeter-and-area rectangle stories
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=2 :: 2(L + w) = 40 || L + w = 20 || t^{2} - 20t + 96 = 0 || \Delta = 400 - 384`
   - `eq_step_cascade`: `len=3 shorts=2 :: t = \frac{20 \pm 4}{2} || t = 12 || t = 8`

242. **MATH 4.82** (`math-ch4-cases.json`, sev=6) — Five separate biquadratic claims
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=3 :: u^{2} - 10u + 9 = 0 || (u - 9)(u - 1) = 0 || u = 9 || u = 1`
   - `eq_step_cascade`: `len=4 shorts=3 :: u^{2} - 8u + 15 = 0 || (u - 5)(u - 3) = 0 || u = 5 || u = 3`

243. **MATH 4.83** (`math-ch4-cases.json`, sev=6) — Five separate long-rectangle stories
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=2 :: w(w + 8) = 240 || w^{2} + 8w - 240 = 0 || \Delta = 8^{2} - 4(1)(-240) || \Delta = 64 + 960`
   - `eq_step_cascade`: `len=9 shorts=6 :: w(w + 5) = 84 || w^{2} + 5w - 84 = 0 || (w + 12)(w - 7) = 0 || 7 + 5 = 12`

244. **MATH 4.84** (`math-ch4-cases.json`, sev=6) — Five separate together-and-alone work stories
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=7 shorts=1 :: \frac{1}{t} + \frac{1}{t + 6} = \frac{1}{4} || 4(t + 6) + 4t = t(t + 6) || 4t + 24 + 4t = t^{2} + 6t || 8t + 24 = t^{2} + 6t`
   - `eq_step_cascade`: `len=3 shorts=2 :: t = \frac{2 \pm 10}{2} || t = 6 || t = -4`

245. **MATH 4.85** (`math-ch4-cases.json`, sev=6) — Five separate reciprocal quadratic stories
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=5 :: x^{2} + 4 = 4x || x^{2} - 4x + 4 = 0 || (x - 2)^{2} = 0 || \Delta = 16 - 16`
   - `eq_step_cascade`: `len=3 shorts=3 :: x^{2} + 3 = 4x || x^{2} - 4x + 3 = 0 || (x - 1)(x - 3) = 0`

246. **MATH 4.95** (`math-ch4-cases.json`, sev=6) — Parameterized Quadratic Equation and Root Properties
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=0 :: \frac{\Delta}{4} = (m-1)^2 - 1 \cdot (2m^2 - 6m +  || \frac{\Delta}{4} = (m^2 - 2m + 1) - (2m^2 - 6m + 5 || \frac{\Delta}{4} = -m^2 `
   - `eq_step_cascade`: `len=3 shorts=2 :: \frac{\Delta}{4} = -(m-2)^2 || -(m-2)^2 = 0 || m = 2`

247. **MATH 4.96** (`math-ch4-cases.json`, sev=6) — Macroeconomic Parameter Model
   - fields: solution_overview, tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=2 :: (x^2 - 4x)^2 - (k+5)(x^2 - 4x) + 5k = 0 || (x^2 - 4x)^2 - 5(x^2 - 4x) - k(x^2 - 4x) + 5k = 0 || (x^2 - 4x)(x^2 - 4x - 5) - k(x^2 - 4`
   - `eq_step_pair`: `\Delta = (-4)^2 - 4(1)(-k) || \Delta = 16 + 4k`

248. **MATH 4.97** (`math-ch4-cases.json`, sev=6) — Roots of a Parametric Biquadratic Equation
   - fields: tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `100 - 24 = 76 || 2(76) = 152`
   - `eq_step_cascade`: `len=3 shorts=2 :: u^2 + 4u + 5 = 0 || (u + 2)^2 - 4 + 5 = 0 || (u + 2)^2 = -1`

249. **MATH 4.99** (`math-ch4-cases.json`, sev=6) — Warehouse Buffer Expansion Model
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `\Delta = 40^2 - 4(1)(-k) || \Delta = 1600 + 4k`
   - `eq_step_cascade`: `len=4 shorts=0 :: B(x) = 4(x^2 + 40x) || B(x) = 4\left((x + 20)^2 - 20^2\right) || B(x) = 4\left((x + 20)^2 - 400\right) || B(x) = 4(x + 20)^2 - 1600`

250. **MATH 4.105** (`math-ch4-cases.json`, sev=6) — Vertical Flight Model of a Test Drone
   - fields: solution_overview, tactical[0], tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=0 :: h(t) = -5(t^2 - 8t - 9) || h(t) = -5(t - 9)(t + 1) || h(t) = -5\left((t - 4)^2 - 16\right) + 45 || h(t) = -5(t - 4)^2 + 80 + 45`
   - `eq_step_cascade`: `len=3 shorts=2 :: -5t^2 + 40t + 45 = 0 || t^2 - 8t - 9 = 0 || (t - 9)(t + 1) = 0`

251. **MATH 4.108** (`math-ch4-cases.json`, sev=6) — Reduction of a Fourth-Degree Polynomial to Quadratic Form
   - fields: solution_overview, tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=1 :: (x-1)(x-5) = x^2 - 6x + 5 || (x-2)(x-4) = x^2 - 6x + 8 || (u+5)(u+8) = 40 || u^2 + 13u + 40 = 40`
   - `eq_step_cascade`: `len=4 shorts=1 :: (u+5)(u+8) = c || u^2 + 13u + 40 - c = 0 || (v - 9)^2 + 13(v - 9) + 40 - c = 0 || v^2 - 5v + (4 - c) = 0`

252. **MATH 4.110** (`math-ch4-cases.json`, sev=6) — Comparing Parametric Quadratic Equations
   - fields: solution_overview, tactical[1]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=7 shorts=0 :: \Delta_1 = (-(m+3))^2 - 4(1)(3m - 1) || \Delta_1 = m^2 + 6m + 9 - 12m + 4 || \Delta_1 = m^2 - 6m + 13 || \Delta_1 = (m-3)^2 + 4`
   - `eq_step_pair`: `S_1 = m+3 || S_2 = 2m`

253. **MATH 4.113** (`math-ch4-cases.json`, sev=6) — Consecutive Integer Stage Allocation and Quadratic Models
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=9 shorts=4 :: n^2 + (n+1)^2 - n(n+1) = p || n^2 + n^2 + 2n + 1 - (n^2 + n) = p || n^2 + n + 1 = p || n^2 + n + (1 - p) = 0`
   - `eq_step_cascade`: `len=4 shorts=1 :: \Delta = b^2 - 4ac || \Delta = 1^2 - 4(1)(1 - p) || \Delta = 1 - 4 + 4p || \Delta = 4p - 3`

254. **MATH 4.114** (`math-ch4-cases.json`, sev=6) — Parametric Analysis of a Substituted Quadratic Form
   - fields: solution_overview, tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `u = (x + 1)^2 - 1 || u^2 - 2u + c = 0`
   - `eq_step_cascade`: `len=3 shorts=2 :: (-1)^2 - 2(-1) + c = 0 || 1 + 2 + c = 0 || c = -3`

255. **MATH 4.116** (`math-ch4-cases.json`, sev=6) — Compound Area Border Model
   - fields: solution_overview, tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `A_{\text{walkway}}(w) = (50 + 2w)(30 + 2w) - 1500 || A_{\text{walkway}}(w) = 4w^2 + 160w`
   - `eq_step_cascade`: `len=4 shorts=0 :: A(w) = 6\left(w^2 + 35w\right) || A(w) = 6\left[\left(w + \frac{35}{2}\right)^2 - \f || A(w) = 6\left(w + \frac{35}{2}\right)^2 - \f`

256. **MATH 4.117** (`math-ch4-cases.json`, sev=6) — Five separate rational equations with a hole
   - fields: tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `\frac{5}{x} = 1 || 5 = x`
   - `eq_step_cascade`: `len=5 shorts=3 :: \frac{4}{x + 1} = \frac{2}{3} || 3 \cdot 4 = 2(x + 1) || 12 = 2x + 2 || 10 = 2x`

257. **MATH 4.120** (`math-ch4-cases.json`, sev=6) — Five separate radical stories from squares
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=6 :: x + 3 = 4^{2} || x + 3 = 16 || x + 3 - 3 = 16 - 3 || 16 - 3 = 13`
   - `eq_step_pair`: `s^{2} = 13 || s = \sqrt{13}`

258. **MATH 4.122** (`math-ch4-cases.json`, sev=6) — Five separate packing and reciprocal stories
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=2 :: \frac{5}{x - 1} = 1 || 5 = x - 1 || x = 6 || \frac{5}{6 - 1} = 1`
   - `eq_step_pair`: `4 = x - 3 || x = 7`

259. **MATH 4.125** (`math-ch4-cases.json`, sev=6) — Five separate absolute-value readings
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=15 shorts=10 :: \lvert 2x - 4 \rvert = 6 || 2x - 4 = 6 || 2x = 6 + 4 || 6 + 4 = 10`
   - `eq_step_cascade`: `len=8 shorts=8 :: x - 3 = 5 || x - 3 + 3 = 5 + 3 || 5 + 3 = 8 || x = 8`

260. **MATH 4.127** (`math-ch4-cases.json`, sev=6) — Five separate radical equations, including extras after squaring
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=10 shorts=6 :: x + 5 = 16 - 8\sqrt{x - 3} + (x - 3) || x + 5 = x + 13 - 8\sqrt{x - 3} || 8\sqrt{x - 3} = 8 || \sqrt{x - 3} = 1`
   - `eq_step_cascade`: `len=7 shorts=5 :: \sqrt{4x + 5} = 7 || 4x + 5 = 49 || 4x = 49 - 5 || 49 - 5 = 44`

261. **MATH 4.130** (`math-ch4-cases.json`, sev=6) — Five distance-on-a-line claims
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=9 shorts=5 :: \lvert x - 1 \rvert + \lvert x - 5 \rvert = 8 || (1 - x) + (5 - x) = 8 || 6 - 2x = 8 || x = -1`
   - `eq_step_pair`: `\lvert 3 - 1 \rvert + \lvert 3 - 5 \rvert = 2 + 2 || 2 + 2 = 4`

262. **MATH 4.138** (`math-ch4-cases.json`, sev=6) — Five independent rational difference equations
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=8 shorts=4 :: \frac{2x + 1}{x - 1} - \frac{x + 3}{x + 1} = 1 || (2x + 1)(x + 1) - (x + 3)(x - 1) = x^{2} - 1 || (2x^{2} + 3x + 1) - (x^{2} + 2x - `
   - `eq_step_cascade`: `len=7 shorts=2 :: \frac{3x + 2}{x + 1} - \frac{2x - 1}{x - 2} = 1 || (3x + 2)(x - 2) - (2x - 1)(x + 1) = (x + 1)(x - 2) || (3x^{2} - 4x - 4) - (2x^{2}`

263. **MATH 4.140** (`math-ch4-cases.json`, sev=6) — A sum of two roots equal to $9$, three regions, and a $1$ m gap
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `(a - b)(a + b) = 9 || a - b = 1`
   - `eq_step_cascade`: `len=10 shorts=2 :: \frac{3x^{2} - 1}{x(x^{2} - 1)} = \frac{13}{12} || 12(3x^{2} - 1) = 13x(x^{2} - 1) || 36x^{2} - 12 = 13x^{3} - 13x || 0 = 13x^{3} -`

264. **MATH 4.145** (`math-ch4-cases.json`, sev=6) — Rational Equation with Denominator Clearing
   - fields: solution_overview, tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=3 :: \frac{x}{x-3} - \frac{2}{x-1} = \frac{4}{x^2-4x+3} || x^2 - 4x + 3 = (x-3)(x-1) || x(x-1) - 2(x-3) = 4 || x^2 - x - 2x + 6 = 4`
   - `eq_step_pair`: `x = 2 || 2 = 2\cdot 1 + 0`

265. **MATH 4.146** (`math-ch4-cases.json`, sev=6) — Radical Equilibrium Equation and Extraneous Roots
   - fields: solution_overview, tactical[1], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=2 :: \sqrt{5x + 19} = x + 1 || (\sqrt{5x + 19})^2 = (x + 1)^2 || 5x + 19 = x^2 + 2x + 1 || x^2 - 3x - 18 = 0`
   - `eq_step_pair`: `5x + 19 = x^2 + 2x + 1 || x^2 - 3x - 18 = 0`

266. **MATH 4.147** (`math-ch4-cases.json`, sev=6) — Radical Equation with Extraneous Roots
   - fields: solution_overview, tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=11 shorts=1 :: D = \left[\frac{3}{2}, \infty\right) || \sqrt{x + 2} = 1 + \sqrt{2x - 3} || (\sqrt{x + 2})^2 = (1 + \sqrt{2x - 3})^2 || x + 2 = 1 +`
   - `eq_step_cascade`: `len=4 shorts=1 :: 4 - x = 2\sqrt{2x - 3} || (4 - x)^2 = 4(2x - 3) || x^2 - 16x + 28 = 0 || (x - 2)(x - 14) = 0`

267. **MATH 4.150** (`math-ch4-cases.json`, sev=6) — Analysis of a Nested Absolute Value Equation
   - fields: solution_overview, tactical[1]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `|2x - 3| = x + 6 || x = 9`
   - `eq_step_cascade`: `len=4 shorts=4 :: x - 1 = -1 - 1 || -1 - 1 = -2 || x - 1 = -5 - 1 || -5 - 1 = -6`

268. **MATH 4.152** (`math-ch4-cases.json`, sev=6) — Radical Equation via Quadratic Substitution
   - fields: solution_overview, tactical[0]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=11 shorts=7 :: u = \sqrt{x^2 - 3x + 1} || u^2 = x^2 - 3x + 1 || x^2 - 3x = u^2 - 1 || (u^2 - 1) - 2u = 2`
   - `eq_step_pair`: `u^2 - 2u - 3 = 0 || (u - 3)(u + 1) = 0`

269. **MATH 4.153** (`math-ch4-cases.json`, sev=6) — Parametric Rational Equation and Extraneous Roots
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=7 shorts=0 :: \frac{x}{x - a} - \frac{2a}{x + a} = \frac{a^2 + 3 || D_a = \mathbb{R} \setminus \{a, -a\} || x(x + a) - 2a(x - a) = a^2 + 3a || x^2`
   - `eq_step_pair`: `x^2 - x - 2 = 0 || (x - 2)(x + 1) = 0`

270. **MATH 4.154** (`math-ch4-cases.json`, sev=6) — Cube-Root Radical Equation Analysis
   - fields: solution_overview, tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `\sqrt[3]{x + 6} - \sqrt[3]{x - 1} = 1 || u - v = 1`
   - `eq_step_cascade`: `len=7 shorts=6 :: (u - v)^3 = u^3 - v^3 - 3uv(u - v) || 1^3 = 7 - 3uv(1) || 3uv = 6 || uv = 2`

271. **MATH 4.158** (`math-ch4-cases.json`, sev=6) — Flow Rate Regulation in Coolant Networks
   - fields: solution_overview, tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=9 shorts=4 :: 2x(x+2) - 3(x-1) = 6 + (x-1)(x+2) || 2x^2 + x + 3 = x^2 + x + 4 || x^2 - 1 = 0 || x(x+3) - 2(x-3) = 18 + (x^2 - 9)`
   - `eq_step_pair`: `x^2 + x + 6 = x^2 + 9 || x = 3`

272. **MATH 4.162** (`math-ch4-cases.json`, sev=6) — Cost-Recovery Radical Equation
   - fields: solution_overview, tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=2 :: u - \frac{10}{u} = 3 || u^2 - 3u - 10 = 0 || (u - 5)(u + 2) = 0`
   - `eq_step_cascade`: `len=3 shorts=2 :: u - \frac{10}{u} = 3 || u^2 - 3u - 10 = 0 || (u - 5)(u + 2) = 0`

273. **MATH 4.163** (`math-ch4-cases.json`, sev=6) — Solvability and Domain Restrictions of an Algebraic Equation
   - fields: solution_overview, tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=8 shorts=2 :: 2x^2 - 7x + 3 = (2x - 1)(x - 3) || \frac{(2x - 1)(x - 3)}{x - 3} = 2x - 1 || 2x - 1 = \sqrt{6x + 7} || (2x - 1)^2 = 6x + 7`
   - `eq_step_cascade`: `len=3 shorts=2 :: (2x - 1)^2 = 6x + 7 || 4x^2 - 10x - 6 = 0 || 2x^2 - 5x - 3 = 0`

274. **MATH 4.164** (`math-ch4-cases.json`, sev=6) — Rational Equation and Structural Variations
   - fields: solution_overview, tactical[0], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=2 :: \frac{1}{x - 1} + \frac{1}{x - 4} = \frac{1}{2} || 2(x - 4) + 2(x - 1) = (x - 1)(x - 4) || 2x - 8 + 2x - 2 = x^2 - 5x + 4 || 4x - 10`
   - `eq_step_pair`: `x_1 + x_2 = 2 + 7 || 2 + 7 = 9`

275. **MATH 4.166** (`math-ch4-cases.json`, sev=6) — Radical Break-Even Equation
   - fields: solution_overview, tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=9 shorts=4 :: \sqrt{5x + 1} = 2 + \sqrt{x + 1} || 5x + 1 = 4 + 4\sqrt{x + 1} + (x + 1) || 5x + 1 = x + 5 + 4\sqrt{x + 1} || 4x - 4 = 4\sqrt{x + 1}`
   - `eq_step_pair`: `\sqrt{5(3) + 1} - \sqrt{3 + 1} = 4 - 2 || 4 - 2 = 2`

276. **MATH 4.172** (`math-ch4-cases.json`, sev=6) — An exponential term and its reciprocal
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=2 :: u + \frac{3}{u} = 4 || u^{2} + 3 = 4u || u^{2} - 4u + 3 = 0`
   - `eq_step_pair`: `u^{2} - 4u + 3 = 0 || (u - 1)(u - 3) = 0`

277. **MATH 4.174** (`math-ch4-cases.json`, sev=6) — A sum of logarithms with an extraneous candidate
   - fields: tactical[1], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `\log_{5}\big((x - 1)(x + 3)\big) = 1 || (x - 1)(x + 3) = 5`
   - `eq_step_cascade`: `len=3 shorts=3 :: x^{2} + 2x - 3 = 5 || x^{2} + 2x - 8 = 0 || (x - 2)(x + 4) = 0`

278. **MATH 4.178** (`math-ch4-cases.json`, sev=6) — A quadratic hidden behind base two
   - fields: solution_overview, tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=2 :: (2^x)^2 - 5 \cdot 2^x + 4 = 0 || u^2 - 5u + 4 = 0 || (u - 1)(u - 4) = 0`
   - `eq_step_pair`: `x_1 = 0 || x_2 = 2`

279. **MATH 4.179** (`math-ch4-cases.json`, sev=6) — A quadratic hidden behind base three
   - fields: solution_overview, tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=2 :: 9^{x} - 4 \cdot 3^{x} + 3 = 0 || (3^{x})^{2} - 4 \cdot 3^{x} + 3 = 0 || u^{2} - 4u + 3 = 0 || (u - 1)(u - 3) = 0`
   - `eq_step_pair`: `25^{x} - 4 \cdot 5^{x} + 3 = 0 || v^{2} - 4v + 3 = 0`

280. **MATH 4.180** (`math-ch4-cases.json`, sev=6) — An extraneous candidate in a logarithmic equation
   - fields: solution_overview, tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=4 :: D = (3, \infty) || \log\big(x(x - 3)\big) = 1 || x(x - 3) = 10^1 || x^2 - 3x - 10 = 0`
   - `eq_step_pair`: `x(x - 3) = 10 || x^2 - 3x - 10 = 0`

281. **MATH 4.183** (`math-ch4-cases.json`, sev=6) — A small exponential system
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=11 shorts=8 :: 2^{x} \cdot 2^{y} = 2^{x+y} || 2^{x+y} = 2^5 || x + y = 5 || 2^{x-y} = 2^1`
   - `eq_step_cascade`: `len=4 shorts=4 :: 2^{x+y} = 2^5 || x + y = 5 || 2^{x-y} = 2^1 || x - y = 1`

282. **MATH 4.184** (`math-ch4-cases.json`, sev=6) — Bounds on solutions of composite logarithmic equations
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=1 :: \log(x^r) = r \cdot \log x || \log(a \cdot b) = \log a + \log b || \log\left(\frac{a}{b}\right) = \log a - \log b || x = 10^k`
   - `eq_step_cascade`: `len=4 shorts=1 :: \log\sqrt{x} + \log x^3 - \log x = 5 || \frac{1}{2}\log x + 3\log x - \log x = 5 || \frac{5}{2}\log x = 5 || \log x = 2`

283. **MATH 4.191** (`math-ch4-cases.json`, sev=6) — Composite decadic equations under pressure
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=2 :: \log(x^{k}) = k \cdot \log x || \log 10^{k} = k || x = 10^{u}`
   - `eq_step_pair`: `1 + \log 100 = 1 + 2 || 1 + 2 = 3`

284. **MATH 4.204** (`math-ch4-cases.json`, sev=6) — Exam-style tasks - 11
   - fields: solution_overview, tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=3 :: 30+4x=110 || 4x=80 || x=20`
   - `eq_step_pair`: `x=\dfrac{110-30}{4} || x=20`

285. **MATH 4.206** (`math-ch4-cases.json`, sev=6) — Exam-style tasks - 13
   - fields: solution_overview, tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=2 :: \dfrac{1}{x}+\dfrac{1}{x+6}=\dfrac{1}{4} || 4(x+6)+4x=x(x+6) || 8x+24=x^{2}+6x || x^{2}+(6-8)x-24=0`
   - `eq_step_pair`: `x+6 =6+6 || 6 + 6 = 12`

286. **MATH 4.207** (`math-ch4-cases.json`, sev=6) — Exam-style tasks - 14
   - fields: solution_overview, tactical[0], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `t/3=2 || t=6`
   - `eq_step_cascade`: `len=4 shorts=2 :: N(0)=A\cdot 2^0 || 2^0 = 1 || N(0)=200\cdot 1 || N(0)=200`

287. **MATH 4.208** (`math-ch4-cases.json`, sev=6) — Exam-style tasks - 15
   - fields: solution_overview, tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=3 :: 35+5x=145 || 5x=110 || x=22`
   - `eq_step_pair`: `x=\dfrac{145-35}{5} || x=22`

288. **MATH 4.210** (`math-ch4-cases.json`, sev=6) — Exam-style tasks - 17
   - fields: solution_overview, tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=2 :: \dfrac{1}{x}+\dfrac{1}{x+12}=\dfrac{1}{8} || 8(x+12)+8x=x(x+12) || 16x+96=x^{2}+12x || x^{2}+(12-16)x-96=0`
   - `eq_step_pair`: `x+12 =12+12 || 12 + 12 = 24`

289. **MATH 4.211** (`math-ch4-cases.json`, sev=6) — Exam-style tasks - 18
   - fields: solution_overview, tactical[0], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `t/3=2 || t=6`
   - `eq_step_cascade`: `len=4 shorts=2 :: N(0)=A\cdot 2^0 || 2^0 = 1 || N(0)=250\cdot 1 || N(0)=250`

290. **MATH 4.212** (`math-ch4-cases.json`, sev=6) — Exam-style tasks - 19
   - fields: solution_overview, tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=3 :: 40+6x=184 || 6x=144 || x=24`
   - `eq_step_pair`: `x=\dfrac{184-40}{6} || x=24`

291. **MATH 4.217** (`math-ch4-cases.json`, sev=6) — Exam-style tasks - 24
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=2 :: n + (n + 2) + (n + 4) = 75 || 3n + 6 = 75 || n = 23`
   - `eq_step_cascade`: `len=3 shorts=3 :: 2L = L + 1 || 2L - L = 1 || L = 1`

292. **MATH 4.218** (`math-ch4-cases.json`, sev=6) — Exam-style tasks - 25
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=2 :: 2\bigl(w + (w + 6)\bigr) = 64 || 2(2w + 6) = 64 || w = 13`
   - `eq_step_cascade`: `len=4 shorts=4 :: 60t = 90(t - 1) || 60t = 90t - 90 || 30t = 90 || t = 3`

293. **MATH 4.219** (`math-ch4-cases.json`, sev=6) — Exam-style tasks - 26
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `12^{2} - 10^{2} = 144 - 100 || 144 - 100 = 44`
   - `eq_step_pair`: `\frac{1}{4 + w} = 0.10 || w = 6`

294. **MATH 4.220** (`math-ch4-cases.json`, sev=6) — Exam-style tasks - 27
   - fields: tactical[0], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=3 :: 5^{2} + h^{2} = 13^{2} || 25 + h^{2} = 169 || h^{2} = 144 || h = 12`
   - `eq_step_pair`: `u^{2} - u - 6 = 0 || (u - 3)(u + 2) = 0`

295. **MATH 4.221** (`math-ch4-cases.json`, sev=6) — Exam-style tasks - 28
   - fields: tactical[0], tactical[1]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=2 :: 5 \cdot 14 = 70 || 11 + 12 + 15 + 16 = 54 || 70 - 54 = 16`
   - `eq_step_pair`: `\frac{0.08}{0.8 + w} = 0.04 || w = 1.2`

296. **MATH 4.222** (`math-ch4-cases.json`, sev=6) — Exam-style tasks - 29
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `\frac{0.24}{2 + w} = 0.08 || w = 1`
   - `eq_step_cascade`: `len=7 shorts=3 :: \log\sqrt{x} = \frac{1}{2}L || \log x^{3} = 3L || \log x = L || \frac{1}{2}L + 3L - L = 5`

297. **MATH 4.224** (`math-ch4-cases.json`, sev=6) — Exam-style tasks - 31
   - fields: tactical[0], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=4 :: x + x + (x - 2) = 28 || 3x - 2 = 28 || 3x = 28 + 2 || x = 10`
   - `eq_step_pair`: `a + 0.8a + 0.64a = 4880 || a = 2000`

298. **MATH 4.225** (`math-ch4-cases.json`, sev=6) — Exam-style tasks - 32
   - fields: tactical[0], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=2 :: w(2w + 1) = 36 || 2w^{2} + w - 36 = 0 || \Delta = 1 + 288`
   - `eq_step_cascade`: `len=6 shorts=1 :: \log\sqrt[4]{x} = \frac{1}{4}L || \log\frac{1}{x^{2}} = -2L || \log\sqrt{x} = \frac{1}{2}L || \log 10 = 1`

299. **MATH 4.226** (`math-ch4-cases.json`, sev=6) — Exam-style tasks - 33
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=2 :: (n - 1) + n + (n + 1) = 54 || 3n = 54 || n = 18`
   - `eq_step_pair`: `\frac{0.18}{1 + w} = 0.12 || w = 0.5`

300. **MATH 4.228** (`math-ch4-cases.json`, sev=6) — Exam-style tasks - 35
   - fields: tactical[0], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=2 :: (w + 3)(w + 11) - w(w + 8) = 141 || 6w + 33 = 141 || w = 18`
   - `eq_step_cascade`: `len=3 shorts=3 :: 2x + 1 = 3(x + 1) || 2x + 1 = 3x + 3 || x = -2`

301. **MATH 4.229** (`math-ch4-cases.json`, sev=6) — Exam-style tasks - 36
   - fields: tactical[0], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=3 :: 2(2w + w) = 48 || 6w = 48 || w = 8`
   - `eq_step_cascade`: `len=3 shorts=2 :: \frac{8}{3} = \frac{8L}{3} || L = 1 || x = 10`

302. **MATH 4.231** (`math-ch4-cases.json`, sev=6) — Exam-style tasks - 38
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `\frac{0.30}{2.5 + w} = 0.08 || w = 1.25`
   - `eq_step_cascade`: `len=7 shorts=1 :: \log\sqrt{x} = \frac{1}{2}L || \log\frac{1}{x^{2}} = -2L || \log\sqrt[3]{x} = \frac{1}{3}L || \log x^{2} = 2L`

303. **MATH 4.232** (`math-ch4-cases.json`, sev=6) — Exam-style tasks - 39
   - fields: tactical[0], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `\frac{2}{5 + w} = 0.25 || w = 3`
   - `eq_step_cascade`: `len=6 shorts=1 :: \log\sqrt[4]{x} = \frac{1}{4}L || \log\frac{1}{x^{2}} = -2L || \log\sqrt{x} = \frac{1}{2}L || \log 10 = 1`

304. **MATH 4.234** (`math-ch4-cases.json`, sev=6) — Exam-style tasks - 41
   - fields: tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `5x + 2 = 5x + 2 || 0 = 0`
   - `eq_step_cascade`: `len=5 shorts=4 :: 2\bigl(x + (x + 3)\bigr) = 22 || 2(2x + 3) = 22 || 4x + 6 = 22 || 4x = 22 - 6`

305. **MATH 5.73** (`math-ch5-exam.json`, sev=6) — Exam-style tasks - 13
   - fields: solution_overview, tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=3 :: (10x+y)+(10y+x) = 121 || 11x + 11y = 121 || x + y = 11 \tag{1} || x - y = 3 \tag{2}`
   - `eq_step_pair`: `10 \times 7 = 70 || 70 + 4 = 74`

306. **MATH 5.74** (`math-ch5-exam.json`, sev=6) — Exam-style tasks - 14
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `x + y = 108 || x - y = 12`
   - `eq_step_cascade`: `len=6 shorts=6 :: x + y = 108 || x - y = 12 || 2x = 120 || x = 60`

307. **MATH 5.75** (`math-ch5-exam.json`, sev=6) — Exam-style tasks - 15
   - fields: solution_overview, tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=0 :: 2x + 5y = 40 \tag{1} || 6x + 15y = 120 \tag{2} || 2 \cdot 15 - 5 \cdot 6 = 0 || x = 20 - \tfrac{5}{2}y`
   - `eq_step_pair`: `3(2x + 5y) = 3(40) || 6x + 15y = 120`

308. **MATH 5.76** (`math-ch5-exam.json`, sev=6) — Exam-style tasks - 16
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `x + y = 160 || 21x + 12y = 2460`
   - `eq_step_cascade`: `len=6 shorts=6 :: x + y = 160 || 21x + 12y = 2460 || 9x = 540 || x = 60`

309. **MATH 5.79** (`math-ch5-exam.json`, sev=6) — Exam-style tasks - 19
   - fields: tactical[0], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `x + y = 25 || x - y = 17`
   - `eq_step_cascade`: `len=5 shorts=5 :: x + y = 25 || x - y = 17 || 2x = 42 || x = 21`

310. **MATH 6.65** (`math-ch6-inequalities.json`, sev=6) — Store Membership Savings
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=2 :: 0.8\cdot250=200 || 40+200=240 || s=250`
   - `eq_step_cascade`: `len=3 shorts=2 :: 0.8\cdot150=120 || 40+120=160 || s=150`

311. **MATH 6.76** (`math-ch6-inequalities.json`, sev=6) — Weighted Course Grade
   - fields: tactical[0], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=2 :: 0.5\cdot80=40 || 40.4+40=80.4 || x=80`
   - `eq_step_pair`: `0.5\cdot90=45 || 40.4+45=85.4`

312. **MATH 6.82** (`math-ch6-inequalities.json`, sev=6) — Food Truck Break-Even
   - fields: tactical[0], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `P=8x-(150+3x) || P=5x-150`
   - `eq_step_cascade`: `len=3 shorts=3 :: 5x-150=0 || 5x=150 || x=30`

313. **MATH 6.90** (`math-ch6-inequalities.json`, sev=6) — Exam-style tasks - 2
   - fields: tactical[0], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=4 :: x=-3 || x=-1 || x=1 || x=3`
   - `eq_step_cascade`: `len=4 shorts=4 :: x + 5=0 || x=-5 || x - 4=0 || x=4`

314. **MATH 6.93** (`math-ch6-inequalities.json`, sev=6) — Exam-style tasks - 5
   - fields: tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `x=2 || x=5`
   - `eq_step_cascade`: `len=3 shorts=2 :: -x^{2}+4x-4=0 || -(x-2)^{2}=0 || x=2`

315. **MATH 6.94** (`math-ch6-inequalities.json`, sev=6) — Exam-style tasks - 6
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=3 :: |x-1|=|2x+3| || x=-4 || x=-\dfrac23`
   - `eq_step_cascade`: `len=5 shorts=4 :: (x^{2} - 2 x) + 1=0 || (x - 1)^{2}=0 || x=1 || x + 2=0`

316. **MATH 6.95** (`math-ch6-inequalities.json`, sev=6) — Exam-style tasks - 7
   - fields: tactical[0], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `x=-1 || x=1`
   - `eq_step_cascade`: `len=5 shorts=5 :: x^{2} - 4=0 || (x - 2) (x + 2)=0 || x=-2 || x - 2=0`

317. **MATH 6.96** (`math-ch6-inequalities.json`, sev=6) — Exam-style tasks - 8
   - fields: tactical[1], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=8 shorts=5 :: (- x^{2} + 4 x) - 3=0 || - (x - 3) (x - 1)=0 || x=1 || x - 3=0`
   - `eq_step_pair`: `x=\frac{3}{2} - \frac{\sqrt{17}}{2} || x=\frac{3}{2} + \frac{\sqrt{17}}{2}`

318. **MATH 6.99** (`math-ch6-inequalities.json`, sev=6) — Exam-style tasks - 11
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=4 :: x-3=0 || x=3 || x+1=0 || x=-1`
   - `eq_step_cascade`: `len=4 shorts=4 :: x - 3=0 || x=3 || x + 1=0 || x=-1`

319. **MATH 6.100** (`math-ch6-inequalities.json`, sev=6) — Exam-style tasks - 12
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `x=3 || x=9`
   - `eq_step_cascade`: `len=4 shorts=1 :: Q(x)=-(x-3)(x-9) || Q(6)=-( 6-3 )( 6-9 ) || Q(6)=(-(3))(-3) || Q(6)=9`

320. **MATH 6.103** (`math-ch6-inequalities.json`, sev=6) — Exam-style tasks - 15
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=4 :: x-4=0 || x=4 || x+2=0 || x=-2`
   - `eq_step_cascade`: `len=4 shorts=4 :: x - 4=0 || x=4 || x + 2=0 || x=-2`

321. **MATH 6.104** (`math-ch6-inequalities.json`, sev=6) — Exam-style tasks - 16
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `x=4 || x=10`
   - `eq_step_cascade`: `len=4 shorts=1 :: Q(x)=-(x-4)(x-10) || Q(7)=-( 7-4 )( 7-10 ) || Q(7)=(-(3))(-3) || Q(7)=9`

322. **MATH 6.107** (`math-ch6-inequalities.json`, sev=6) — Exam-style tasks - 19
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=4 :: x-5=0 || x=5 || x+3=0 || x=-3`
   - `eq_step_cascade`: `len=4 shorts=4 :: x - 5=0 || x=5 || x + 3=0 || x=-3`

323. **MATH 6.108** (`math-ch6-inequalities.json`, sev=6) — Exam-style tasks - 20
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `x=5 || x=11`
   - `eq_step_cascade`: `len=4 shorts=1 :: Q(x)=-(x-5)(x-11) || Q(8)=-( 8-5 )( 8-11 ) || Q(8)=(-(3))(-3) || Q(8)=9`

324. **MATH 6.109** (`math-ch6-inequalities.json`, sev=6) — Exam-style tasks - 21
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `2w^{2}+w-48=0 || w=4`
   - `eq_step_pair`: `h(3)=113 || h(9)=113`

325. **MATH 6.110** (`math-ch6-inequalities.json`, sev=6) — Exam-style tasks - 22
   - fields: tactical[1], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `T(8) = T(12) || T(12) = 176`
   - `eq_step_cascade`: `len=6 shorts=4 :: 0.5\cdot 2 = 1 || 0.2\cdot 3 = 0.6 || 3\cdot 0.40 = 1.2 || 1 + 0.6 = 1.6`

326. **MATH 6.114** (`math-ch6-inequalities.json`, sev=6) — Exam-style tasks - 26
   - fields: tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=3 :: 5\cdot 6 = 30 || 60 + 30 = 90 || n\ge\bigl\lceil\tfrac{90}{8}\bigr\rceil=12 || h=6`
   - `eq_step_pair`: `x=\frac{1}{2} - \frac{\sqrt{13}}{2} || x=\frac{1}{2} + \frac{\sqrt{13}}{2}`

327. **MATH 6.122** (`math-ch6-inequalities.json`, sev=6) — Exam-style tasks - 34
   - fields: tactical[1], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=4 :: 1.5\cdot 4 = 6 || 0.2\cdot 30 = 6 || 6 + 6 = 12 || 12 + 5 = 17`
   - `eq_step_pair`: `h(2) = h(6) || h(6) = 60`

328. **MATH 6.126** (`math-ch6-inequalities.json`, sev=6) — Exam-style tasks - 38
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `x=\frac{1}{3} || x=9`
   - `eq_step_cascade`: `len=4 shorts=1 :: 0.04\cdot 25 = 1 || 0.06\cdot 3 = 0.18 || 1 + 0.18 = 1.18 || 1.18 + 0.2 = 1.38`

329. **MATH 7.02** (`math-ch7-linear-quadratic.json`, sev=6) — Slope and Opening at a Glance
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=3 :: f(x)=3x-5 || m=3 || f(1)-f(0)=(3-5)-(-5) || f(1)-f(0)=3`
   - `eq_step_pair`: `g(x)=-2x^{2}+x+4 || a=-2`

330. **MATH 7.03** (`math-ch7-linear-quadratic.json`, sev=6) — Axis from Coefficients
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=2 :: x=-\frac{-6}{2\cdot 1} || x=-\frac{-6}{2} || x=3 || x=\frac{1+5}{2}`
   - `eq_step_pair`: `g(x)=x^{2}-6x+5 || a=1`

331. **MATH 7.04** (`math-ch7-linear-quadratic.json`, sev=6) — A Taxi Fare That Grows With the Distance
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=5 :: C(x)=3x+5 || C(4)=3\cdot 4+5 || C(4)=12+5 || C(4)=17`
   - `eq_step_cascade`: `len=4 shorts=1 :: C(x+1)-C(x)=\bigl(3(x+1)+5\bigr)-(3x+5) || C(x+1)-C(x)=3 || C(2)-C(1)=(11)-(8) || C(2)-C(1)=3`

332. **MATH 7.05** (`math-ch7-linear-quadratic.json`, sev=6) — Intercept Checklist
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=3 :: f(0)=5\cdot 0 || f(0)=0 || f(x)=5x`
   - `eq_step_cascade`: `len=8 shorts=7 :: g(x)=x^{2}-4 || g(x)=(x-2)(x+2) || x=2 || x=-2`

333. **MATH 7.07** (`math-ch7-linear-quadratic.json`, sev=6) — Leading Coefficient Sign
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `g(x)=3x^{2}-x || a=3`
   - `eq_step_cascade`: `len=4 shorts=2 :: g(0)=3\cdot 0^{2}-0 || 0^{2}=0 || g(0)=3\cdot 0-0 || g(0)=0`

334. **MATH 7.08** (`math-ch7-linear-quadratic.json`, sev=6) — Two Easy Meetings
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=4 :: f(0)=0 || g(0)=0 || g(x)-f(x)=x^{2}-3x || g(x)-f(x)=x(x-3)`
   - `eq_step_cascade`: `len=5 shorts=4 :: f(3)=3 || g(3)=9-6 || g(3)=3 || g(x)-f(x)=x(x-3)`

335. **MATH 7.09** (`math-ch7-linear-quadratic.json`, sev=6) — A Ball Thrown Straight Upwards
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=1 :: H(x)=-5x^{2}+20x || x=-\frac{20}{2\cdot(-5)} || x=2 || H(x)=-5(x-2)^{2}+20`
   - `eq_step_cascade`: `len=6 shorts=3 :: x=2 || H(2)=-5\cdot 4+20\cdot 2 || H(2)=20 || H(x)=-5(x-2)^{2}+20`

336. **MATH 7.11** (`math-ch7-linear-quadratic.json`, sev=6) — A Falling Line and Its Two Axis Crossings
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=5 :: s(x)=6-2x || s(x)=-2x+6 || m=-2 || s(1)-s(0)=(4)-(6)`
   - `eq_step_pair`: `s(x)=-2x+6 || m=-2`

337. **MATH 7.13** (`math-ch7-linear-quadratic.json`, sev=6) — Vertex Versus Intercept
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=10 shorts=6 :: x=-\frac{-8}{2\cdot 2} || x=-\frac{-8}{4} || x=2 || g(2)=2\cdot 4-8\cdot 2+3`
   - `eq_step_cascade`: `len=3 shorts=3 :: g(0)=3 || g(2)=-5 || b=-8\neq 0`

338. **MATH 7.15** (`math-ch7-linear-quadratic.json`, sev=6) — Completing the Square, Easy
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=10 shorts=2 :: g(x)=x^{2}+4x+1 || \frac{b}{2a}=2 || \left(\frac{b}{2a}\right)^2=4 || h=-\frac{b}{2a}`
   - `eq_step_cascade`: `len=5 shorts=3 :: g(x)=(x+2)^{2}-3 || g(-2)=-3 || x=-\frac{4}{2} || x=-2`

339. **MATH 7.16** (`math-ch7-linear-quadratic.json`, sev=6) — A Line Written as a Single Fraction
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=0 :: t(x)=\frac{5-x}{2} || t(x)=\frac{5}{2}-\frac{1}{2}x || m=-\frac{1}{2} || t(1)-t(0)=\frac{4}{2}-\frac{5}{2}`
   - `eq_step_pair`: `t(0)=\frac{5-0}{2} || t(0)=\frac{5}{2}`

340. **MATH 7.17** (`math-ch7-linear-quadratic.json`, sev=6) — Scaled Parabola Roots
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=4 :: g(x)=2(x-1)(x-3) || x=1 || x=3 || g(1)=0`
   - `eq_step_pair`: `1+3=4 || 1+3=2x^{2}-8x+6`

341. **MATH 7.18** (`math-ch7-linear-quadratic.json`, sev=6) — Falling Line Twin Roots
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=14 shorts=12 :: g(x)=x^{2}+x-6 || g(x)=(x+3)(x-2) || x=-3 || x=2`
   - `eq_step_cascade`: `len=5 shorts=0 :: x=-\frac{1}{2\cdot 1} || x=-\frac{1}{2} || x=\frac{-3+2}{2} || x=\frac{-1}{2}`

342. **MATH 7.20** (`math-ch7-linear-quadratic.json`, sev=6) — A Table That Climbs at a Steady Rate
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=7 shorts=4 :: m=\frac{1-(-3)}{1-0} || m=4 || S=(13-(-3))/(4-0) || S=16/4`
   - `eq_step_cascade`: `len=7 shorts=7 :: y=4x-3 || S=12-3 || S=9 || S=16-3`

343. **MATH 7.22** (`math-ch7-linear-quadratic.json`, sev=6) — Discriminant Logic for Quadratics
   - fields: tactical[0], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `x^{2}+1=0 || \Delta=-4`
   - `eq_step_cascade`: `len=3 shorts=2 :: g(x)=a\left(x+\frac{b}{2a}\right)^{2} || x^{2}=0 || \Delta=0`

344. **MATH 7.25** (`math-ch7-linear-quadratic.json`, sev=6) — Nested Evaluation Chain
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=10 shorts=8 :: f(0)=1 || g(1)=1^{2}-1-2 || 1^{2}=1 || g(1)=1-1-2`
   - `eq_step_cascade`: `len=4 shorts=3 :: g(0)=-2 || f(-2)=2\cdot(-2)+1 || f(-2)=-3 || f(g(0))=-3`

345. **MATH 7.26** (`math-ch7-linear-quadratic.json`, sev=6) — Complete Square and Meetings
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=10 shorts=2 :: g(x)=x^{2}-6x+10 || \frac{b}{2a}=-3 || \left(\frac{b}{2a}\right)^2=9 || h=-\frac{b}{2a}`
   - `eq_step_pair`: `g(x)=(x-3)^{2}+1 || g(3)=1`

346. **MATH 7.28** (`math-ch7-linear-quadratic.json`, sev=6) — Vertex on the Line?
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=10 shorts=8 :: x=-\frac{-2}{2} || x=1 || g(1)=-4 || f(1)=1^{2}-1`
   - `eq_step_cascade`: `len=12 shorts=10 :: x=1 || g(1)=1^{2}-2-3 || 1^{2}=1 || g(1)=1-2-3`

347. **MATH 7.29** (`math-ch7-linear-quadratic.json`, sev=6) — Horizontal Gap at the Axis
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=9 shorts=8 :: x=-\frac{-4}{2} || x=2 || f(2)=7 || g(2)=4-8+1`
   - `eq_step_cascade`: `len=7 shorts=2 :: g(x)=x^{2}-4x+1 || x=-\frac{-4}{2\cdot 1} || x=-\frac{-4}{2} || x=2`

348. **MATH 7.30** (`math-ch7-linear-quadratic.json`, sev=6) — No Real Roots Versus Line
   - fields: tactical[0], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=2 :: g(x)=x^{2}+x+1 || \Delta=1-4 || \Delta=-3`
   - `eq_step_pair`: `P=\frac{c}{a} || P=1`

349. **MATH 7.35** (`math-ch7-linear-quadratic.json`, sev=6) — Difference $f-g$ and Intercept Traps
   - fields: tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=3 :: d(x) = 0 || f(x) = g(x) || d=1-x^{2}`
   - `eq_step_pair`: `d(x)=-a x^{2}+\cdots,\qquad -a\neq 0 || d(x)=-ax^{2}+\cdots`

350. **MATH 7.36** (`math-ch7-linear-quadratic.json`, sev=6) — Family of Lines Seeking Tangency
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `\Delta(0)=4-8 || \Delta(0)=-4`
   - `eq_step_cascade`: `len=9 shorts=8 :: x=-b/(2a) || x=1 || g(1)=1^{2}-2+2 || 1^{2}=1`

351. **MATH 7.37** (`math-ch7-linear-quadratic.json`, sev=6) — Composition Trap with Explicit Maps
   - fields: tactical[0], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `f(g(x))=3(2x^{2}-4x-6)-1 || f(g(x))=6x^{2}-12x-19`
   - `eq_step_cascade`: `len=7 shorts=6 :: f(0)=-1 || g(-1)=2\cdot 1-4\cdot(-1)-6 || g(-1)=2+4-6 || g(-1)=2+4`

352. **MATH 7.38** (`math-ch7-linear-quadratic.json`, sev=6) — Wrong Completed Square Sign
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=8 shorts=0 :: g(x)=x^{2}-3x-10 || \frac{b}{2a}=-\frac{3}{2} || \left(\frac{b}{2a}\right)^2=\frac{9}{4} || h=-\frac{b}{2a}`
   - `eq_step_cascade`: `len=8 shorts=0 :: g(x)=x^{2}-3x-10 || \frac{b}{2a}=-\frac{3}{2} || \left(\frac{b}{2a}\right)^2=\frac{9}{4} || h=-\frac{b}{2a}`

353. **MATH 7.39** (`math-ch7-linear-quadratic.json`, sev=6) — Three Maps: Line, Square, Difference
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `d(x) = 0 || f(x) = g(x)`
   - `eq_step_cascade`: `len=3 shorts=2 :: d(0)=f(0)-g(0) || d(0)=3-(-2) || d(0)=5`

354. **MATH 7.40** (`math-ch7-linear-quadratic.json`, sev=6) — Parameter Constraint on Opening
   - fields: tactical[0], tactical[1]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=2 :: g_{a}(x)-x=ax^{2}-5x+1 || \Delta=25-4a || \Delta=21`
   - `eq_step_pair`: `a=1 || \Delta=21`

355. **MATH 7.41** (`math-ch7-linear-quadratic.json`, sev=6) — Axis, Vieta, and the Half-Sum Trap
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=4 :: \ell:\; x=-\frac{b}{2a} || \ell:\; x=\frac{S}{2} || S=2 || x = 1\neq x`
   - `eq_step_pair`: `\frac{S}{2}=\frac{-b/a}{2} || \frac{S}{2}=-\frac{b}{2a}`

356. **MATH 7.42** (`math-ch7-linear-quadratic.json`, sev=6) — Nested Functions Without Numbers
   - fields: tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=0 :: g(f(x))=(x+1)^{2} || g(f(x))=x^{2}+2x+1 || f(g(x))=x^{2}+1 || g(f(x))=(x+1)^{2}`
   - `eq_step_pair`: `g\bigl(f(x)^{2}\bigr)=a\bigl(f(x)^{2}\bigr)^{2}+\cdots || g\bigl(f(x)^{2}\bigr)=a f(x)^{4}+\cdots`

357. **MATH 7.47** (`math-ch7-linear-quadratic.json`, sev=6) — Parameter Window for Two Meetings
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=2 :: g(0)=1 || f_{k}(0)=1 || g(x)-f_{k}(x)=x^{2}-(4+k)x || g(x)-f_{k}(x)=x\bigl(x-(4+k)\bigr)`
   - `eq_step_pair`: `g(x)-f_{k}(x)=x\bigl(x-(4+k)\bigr) || k=-4`

358. **MATH 7.48** (`math-ch7-linear-quadratic.json`, sev=6) — Scaled Roots and Nested Order
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=2 :: g(x)=2(x-2)(x-4) || g(x)=2(x^{2}-6x+8) || g(x)=2x^{2}-12x+16 || g(2)=0`
   - `eq_step_cascade`: `len=3 shorts=2 :: 2=A\cdot 25 || A=\frac{2}{25} || 2=A\cdot 25`

359. **MATH 7.50** (`math-ch7-linear-quadratic.json`, sev=6) — When Does Vertical Shift Kill Meetings?
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=2 :: g_{0}(x)-f(x)=x^{2}-3x-2 || \Delta=9+8 || \Delta=17`
   - `eq_step_cascade`: `len=5 shorts=3 :: g_{s}(x)-2x=x^{2}-3x+(s-2) || \Delta=9-4(s-2) || \Delta=17-4s || \Delta=17-20`

360. **MATH 7.51** (`math-ch7-linear-quadratic.json`, sev=6) — Slope, Constant Term, Axis
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=3 :: f(x)=7x+2 || m=7 || f(1)-f(0)=9-2 || f(1)-f(0)=7`
   - `eq_step_cascade`: `len=3 shorts=2 :: f(x)=7x+2 || f(0)=7\cdot 0+2 || f(0)=2`

361. **MATH 7.52** (`math-ch7-linear-quadratic.json`, sev=6) — Reading a Parabola Straight From Its Coefficients
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `p(x)=2x^{2}-8 || a=2`
   - `eq_step_cascade`: `len=4 shorts=4 :: 2x^{2}-8 = 0 || x^{2} = 4 || x=-2 || x=2`

362. **MATH 7.53** (`math-ch7-linear-quadratic.json`, sev=6) — A Parabola That Turns Downwards
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `q(x)=-3x^{2}+12x-4 || a=-3`
   - `eq_step_cascade`: `len=4 shorts=3 :: a=-3 || b=12 || x=-\frac{12}{2\cdot(-3)} || x=2`

363. **MATH 7.55** (`math-ch7-linear-quadratic.json`, sev=6) — Zeros Straight From a Product of Factors
   - fields: solution_overview, tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `q(x)=\left(x-1\right)\left(x+6\right) || q(x)=x^{2}+5x-6`
   - `eq_step_cascade`: `len=4 shorts=3 :: q(x)=(x-1)(x+6) || q(x)=0 || x=1 || x=-6`

364. **MATH 7.56** (`math-ch7-linear-quadratic.json`, sev=6) — A Water Tank Draining at a Steady Rate
   - fields: solution_overview, tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `V(x)=200-8x || V(x)=-8x+200`
   - `eq_step_cascade`: `len=3 shorts=2 :: V(10)=200-8\cdot 10 || V(10)=200-80 || V(10)=120`

365. **MATH 7.58** (`math-ch7-linear-quadratic.json`, sev=6) — Locating the Peak of a Downward Parabola
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `h(x)=-x^{2}+6x-5 || a=-1`
   - `eq_step_cascade`: `len=4 shorts=3 :: a=-1 || b=6 || x=-\frac{6}{2\cdot(-1)} || x=3`

366. **MATH 7.59** (`math-ch7-linear-quadratic.json`, sev=6) — A Gentle Slope in Fraction Form
   - fields: tactical[1], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=2 :: \frac{1}{3}x-2=0 || x=6 || v(6)=\frac{1}{3}\cdot 6-2 || v(6)=0`
   - `eq_step_pair`: `v(x)=\frac{1}{3}x-2 || v(0)=-2`

367. **MATH 7.61** (`math-ch7-linear-quadratic.json`, sev=6) — A Stretched Parabola and Its Turning Point
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=3 :: p(x)=3x^{2}-12x+7 || a=3,\ b || a=-12 || x=-\frac{-12}{2\cdot 3}`
   - `eq_step_cascade`: `len=8 shorts=6 :: p(2)=3\cdot 2^{2}-12\cdot 2+7 || 2^{2}=4 || p(2)=3\cdot 4-12\cdot 2+7 || p(2)=12-24+7`

368. **MATH 7.64** (`math-ch7-linear-quadratic.json`, sev=6) — Which Model Fits the Measurements?
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `m=\frac{-3}{1} || m=-3`
   - `eq_step_cascade`: `len=5 shorts=3 :: y(0)=10 || y(4)=-2 || x=\frac{-2-10}{4-0} || x=\frac{-12}{4}`

369. **MATH 7.65** (`math-ch7-linear-quadratic.json`, sev=6) — A Negative Stretch Keeps the Zeros
   - fields: solution_overview, tactical[0], tactical[1]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `p(x)=-3\left(x+2\right)\left(x-5\right) || p(x)=-3x^{2}+9x+30`
   - `eq_step_cascade`: `len=4 shorts=3 :: p(x)=-3(x+2)(x-5) || p(x)=0 || x=-2 || x=5`

370. **MATH 7.67** (`math-ch7-linear-quadratic.json`, sev=6) — Rebuilding a Parabola From Its Zeros
   - fields: solution_overview, tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `p(x)=3\left(x+4\right)\left(x-2\right) || p(x)=3x^{2}+6x-24`
   - `eq_step_cascade`: `len=6 shorts=2 :: x=\frac{-4+2}{2} || x=\frac{-2}{2} || x=-1 || x=-\frac{6}{2\cdot 3}`

371. **MATH 7.68** (`math-ch7-linear-quadratic.json`, sev=6) — A Line Fixed by a Slope and One Point
   - fields: solution_overview, tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `u(x)=-\frac{1}{2}\left(x-4\right)+1 || u(x)=-\frac{1}{2}x+3`
   - `eq_step_pair`: `u(x)=-\frac{1}{2}x+3 || u(0)=3`

372. **MATH 7.69** (`math-ch7-linear-quadratic.json`, sev=6) — Who Wins Far to the Right?
   - fields: tactical[0], tactical[1]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `g(x)-f(x)=ax^{2}+(b-m)x+(c-q) || g(x)-f(x)=a(x-h)^{2}+k\quad\text{with }a>0`
   - `eq_step_cascade`: `len=4 shorts=2 :: g(x)=x^{2} || f(x)=x || g\bigl(\tfrac{1}{2}\bigr)=\tfrac{1}{4} || f\bigl(\tfrac{1}{2}\bigr)=\tfrac{1}{2}`

373. **MATH 7.70** (`math-ch7-linear-quadratic.json`, sev=6) — When Is the Difference Still Curved?
   - fields: tactical[0], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `d(x)=(ax^{2}+bx+c)-(mx+q) || d(x)=ax^{2}+(b-m)x+(c-q)`
   - `eq_step_pair`: `d(x)=ax^{2}+(b-m)x+(c-q) || m = b`

374. **MATH 7.71** (`math-ch7-linear-quadratic.json`, sev=6) — Touching at the Vertex
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=8 shorts=6 :: x=-\frac{2}{2\cdot 1} || x=-\frac{2}{2} || x=-1 || g(-1)=1-2+3`
   - `eq_step_pair`: `g(x)-f(x)=(x+1)^{2} || g(-2)-2=1`

375. **MATH 7.73** (`math-ch7-linear-quadratic.json`, sev=6) — Turning Point, Zeros and a Horizontal Probe
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=8 shorts=5 :: q(x)=x^{2}-10x+21 || x=-\frac{-10}{2} || x=5 || q(5)=25-50+21`
   - `eq_step_cascade`: `len=5 shorts=3 :: \Delta=(-10)^{2}-4\cdot 1\cdot 21 || \Delta=100-84 || \Delta=16 || x=3`

376. **MATH 7.75** (`math-ch7-linear-quadratic.json`, sev=6) — A Parabola Pinned by Its Vertex and One Point
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `q(x)=2 || q(x)=2x^{2}-12x+10`
   - `eq_step_cascade`: `len=4 shorts=3 :: 3-(1-3)=5 || 2x^{2}-12x+10=2(x-1)(x-5) || x=1 || x=5`

377. **MATH 7.77** (`math-ch7-linear-quadratic.json`, sev=6) — Half-Scaled Factors and the Values a Parabola Reaches
   - fields: solution_overview, tactical[0], tactical[1]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `w(x)=\frac{1}{2}\left(x+1\right)\left(x-7\right) || w(x)=\frac{1}{2}x^{2}-3x-\frac{7}{2}`
   - `eq_step_cascade`: `len=4 shorts=3 :: w(x)=\frac{1}{2}(x+1)(x-7) || w(x)=0 || x=-1 || x=7`

378. **MATH 7.79** (`math-ch7-linear-quadratic.json`, sev=6) — Undoing a Line Around a Parabola
   - fields: tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `f^{-1}\left(g(x)\right)=\frac{g(x)-q}{m} || f^{-1}\left(g(x)\right)=\frac{a}{m}x^{2}+\frac{b}{m}x+\frac{`
   - `eq_step_cascade`: `len=5 shorts=4 :: g(x)=x^{2} || f(x)=x+1 || S=f^{-1}(x) || S=x-1`

379. **MATH 7.80** (`math-ch7-linear-quadratic.json`, sev=6) — Mirroring a Line and a Parabola
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `\tilde f(x) = \tilde g(x) || f(-x) = g(-x)`
   - `eq_step_cascade`: `len=4 shorts=0 :: \tilde g(x)-\tilde f(x)=(g-f)(-x) || g(x)-f(x) = a(x-h)^{2} || g(x)-f(x)=(g-f)(-x) || \tilde g(x)-\tilde f(x)=a(x+h)^{2}`

380. **MATH 7.83** (`math-ch7-linear-quadratic.json`, sev=6) — Signs of the Roots from Sum and Product
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `P=x_{1}x_{2} || P=\frac{c}{a}`
   - `eq_step_cascade`: `len=4 shorts=3 :: P = \frac{c}{a} || c=aP || g(0)=c || g(0)=aP<0`

381. **MATH 7.84** (`math-ch7-linear-quadratic.json`, sev=6) — Sliding a Line Until It Touches
   - fields: tactical[0], tactical[1]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=1 :: x^{2}-2x-5-(x+c)=x^{2}-3x-(5+c) || x^{2}-2x-5-(x+c)=0 || \Delta(c)=9+4(5+c) || \Delta(c)=29+4c`
   - `eq_step_pair`: `f_{c}(0)=c || f_{c}(0)= 0`

382. **MATH 7.86** (`math-ch7-linear-quadratic.json`, sev=6) — Coefficient Match Against a Composition
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=1 :: A(25x^{2}+10x+1)+B(5x+1)+C=3x^{2}-2x-1 || 10\cdot\frac{3}{25}+5B = -2 || x=\frac{6}{5}+5B || x=-2`
   - `eq_step_pair`: `f\bigl(g(x)\bigr)=5(3x^{2}-2x-1)+1 || f\bigl(g(x)\bigr)=15x^{2}-10x-4`

383. **MATH 7.87** (`math-ch7-linear-quadratic.json`, sev=6) — Root Spacing Against the Axis of a Parabola
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=7 shorts=3 :: \Delta=3^{2}-4\cdot 1\cdot(-40) || 3^{2}=9 || \Delta=9-4\cdot 1\cdot(-40) || \Delta=9+160`
   - `eq_step_cascade`: `len=5 shorts=2 :: p(x)=x^{2}+3x-40 || a=1,\ b || a=3 || x=-\frac{3}{2\cdot 1}`

384. **MATH 7.90** (`math-ch7-linear-quadratic.json`, sev=6) — Composing a Parabola With Itself
   - fields: tactical[1], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=0 :: f\bigl(g(x)\bigr)=m(ax^{2}+bx+c)+q || g\bigl(f(g(x))\bigr)=a(ma\,x^{2}+\cdots)^{2}+\cdot || \text{coefficient of }x^{4}=a(ma)^{2} ||`
   - `eq_step_pair`: `f\bigl(f(x)\bigr)=m(mx+q)+q || f\bigl(f(x)\bigr)=m^{2}x+q(m+1)`

385. **MATH 7.94** (`math-ch7-linear-quadratic.json`, sev=6) — A Pencil of Lines and Two Tangents
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=2 :: f_{t}(1)=t\cdot 0+2 || f_{t}(1)=2 || t = 0`
   - `eq_step_pair`: `f_{t}(1)=2 || t=3`

386. **MATH 7.95** (`math-ch7-linear-quadratic.json`, sev=6) — Sliding the Parabola Sideways
   - fields: tactical[0], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=1 :: (x-r)^{2}-4-(2x-1)=x^{2}-(2r+2)x+(r^{2}-3) || (x-r)^{2}-4-(2x-1)=0 || \Delta(r)=(2r+2)^{2}-4(r^{2}-3) || \Delta(r)=8r+16`
   - `eq_step_cascade`: `len=4 shorts=1 :: g_{r}(x) = (x-r)^{2}-4 || \ell:\ x=r || g_{r}(r+t)=t^{2}-4 || g_{r}(r+t)=g_{r}(r-t)`

387. **MATH 7.96** (`math-ch7-linear-quadratic.json`, sev=6) — Rebuild from a Vertex and a Point
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=4 :: f(x)=-3(x-1)+2 || f(x)=-3x+3+2 || f(x)=-3x+5 || f(1)=-3+5`
   - `eq_step_cascade`: `len=6 shorts=1 :: g(x)=2(x-2)^{2}-8 || g(x)=2(x^{2}-4x+4)-8 || g(x)=2x^{2}-8x || x=-\frac{-8}{2\cdot 2}`

388. **MATH 7.E01** (`math-ch7-mixed-exam.json`, sev=6) — Clearance plot — meetings and a chord
   - fields: solution_overview, tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `g(x)=-x^{2}+4 || f(x)=-x+2`
   - `eq_step_cascade`: `len=6 shorts=3 :: g(x)=-x^{2}+4 || f(x)=-x+2 || g(x)-f(x)=-x^{2}+x+2 || g(x)-f(x)=-(x-2)(x+1)`

389. **MATH 7.E02** (`math-ch7-mixed-exam.json`, sev=6) — Sampled heights — interpolating parabola
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `s_n=n^{2}-4n+3 || s_n=(n-1)(n-3)`
   - `eq_step_cascade`: `len=4 shorts=3 :: s:\ 3,\ 0,\ -1,\ 0,\ 3,\ 8\qquad \Delta_{1}\text{  || s_6=s_5+7 || s_6=8+7 || s_6=15`

390. **MATH 7.E03** (`math-ch7-mixed-exam.json`, sev=6) — Ticket desk — rebuilt revenue
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=3 :: R(3)=15 || R(5)=15 || x=\frac{3+5}{2} || x=\frac{8}{2}`
   - `eq_step_pair`: `2a=-2 || a=-1`

391. **MATH 7.E04** (`math-ch7-mixed-exam.json`, sev=6) — Meetings, vertex, and a rewrite in $f$
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `g(x)-f(x)=(x^{2}-4x+1)-(x+1) || g(x)-f(x)=x^{2}-5x`
   - `eq_step_cascade`: `len=4 shorts=1 :: g(x)=x^{2}-4x+1 || x=-\frac{-4}{2\cdot 1} || x=-\frac{-4}{2} || x=2`

392. **MATH 7.E05** (`math-ch7-mixed-exam.json`, sev=6) — Sliding slope family — when tangency happens
   - fields: tactical[0], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=2 :: g(x)-f_t(x)=x^{2}-tx+1 || \Delta=t^{2}-4 || \Delta=0 || t=\pm 2`
   - `eq_step_cascade`: `len=3 shorts=3 :: t=3 || \Delta=9-4 || \Delta=5`

393. **MATH 7.E09** (`math-ch7-mixed-exam.json`, sev=6) — Parabola figure, line table — a combined reading
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=3 :: x=-2 || x=2 || g(x)=x^{2}-4`
   - `eq_step_pair`: `g(x)=x^{2}-4 || g(0)=-4`

394. **MATH 7.E10** (`math-ch7-mixed-exam.json`, sev=6) — Dock crane — stretch from a named vertex
   - fields: tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=2 :: g(x)=-\frac{3}{2}(x+1)(x-3) || g(x)-f(x)=-\frac{3}{2}x^{2}+4x+\frac{5}{2} || \Delta=16+15 || \Delta=31`
   - `eq_step_pair`: `f(1)=-1+2 || f(1)=1`

395. **MATH 7.E13** (`math-ch7-mixed-exam.json`, sev=6) — Ball toss — peak as midpoint of the ground times
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=2 :: h(t)=t(6-t) || t=\frac{0+6}{2} || t=\frac{6}{2} || t=3`
   - `eq_step_cascade`: `len=4 shorts=2 :: h(t)=t(6-t) || t=\frac{0+6}{2} || t=\frac{6}{2} || t=3`

396. **MATH 7.E14** (`math-ch7-mixed-exam.json`, sev=6) — Completing the square — signs and a shift trap
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=9 shorts=2 :: g(x)=x^{2}+6x+5 || \frac{b}{2a}=3 || \left(\frac{b}{2a}\right)^2=9 || h=-\frac{b}{2a}`
   - `eq_step_cascade`: `len=4 shorts=3 :: g(x)=(x+1)(x+5) || x=-1,\ -5 || S=(-1)+(-5) || S=-6`

397. **MATH 7.E15** (`math-ch7-mixed-exam.json`, sev=6) — Vertical shift family — root count by vertex height
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=3 :: g_3(x)=(x-2)^{2}-1 || (x-2)^{2}=1 || x=1,\ 3 || x=\frac{1+3}{2}`
   - `eq_step_cascade`: `len=4 shorts=3 :: g_4(x)=(x-2)^{2} || (x-2)^{2}=0 || x=2 || g_4(2)=0`

398. **MATH 7.E16** (`math-ch7-mixed-exam.json`, sev=6) — Two intercepts — midpoint check and a height trap
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `m=-2x+4 || f(x)=-2x+4`
   - `eq_step_cascade`: `len=3 shorts=2 :: \left(\frac{0+2}{2},\frac{4+0}{2}\right)=(1,2) || f(1)=-2+4 || f(1)=2`

399. **MATH 7.E17** (`math-ch7-mixed-exam.json`, sev=6) — Two nestings — missing linear term, shifted axis
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=0 :: f(g(x))=2(x^{2}-4)-1 || f(g(x))=2x^{2}-9 || f(g(0))=-9\qquad\text{vertex }(0,-9) || f(g(-x))=2x^{2}-9`
   - `eq_step_pair`: `g(f(x))=(2x-1)^{2}-4 || g(f(x))=4x^{2}-4x-3`

400. **MATH 7.E18** (`math-ch7-mixed-exam.json`, sev=6) — Opposite roots — evenness and the trough sign
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=4 :: g(0)=(3)(-3) || g(0)=-9\qquad\text{vertex }(0,-9) || g(x)=x^{2}-9 || g(x)=g(-x)`
   - `eq_step_pair`: `g(-2)=-5\neq 5 || g(0)=-9\neq 0`

401. **MATH 7.E19** (`math-ch7-mixed-exam.json`, sev=6) — Peak above a level, falling table
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `g(x)=4-x^{2} || g(0)=4`
   - `eq_step_cascade`: `len=6 shorts=6 :: 4-x^{2}=0 || x=-2 || x=2 || 4-x^{2}=2`

402. **MATH 7.E20** (`math-ch7-mixed-exam.json`, sev=6) — Revenue peak is not the profit peak
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=2 :: R(p)=p(8-p) || R(p)=-p^{2}+8p || a=-1`
   - `eq_step_pair`: `R(4)=4\cdot 4 || R(4)=16`

403. **MATH 7.E21** (`math-ch7-mixed-exam.json`, sev=6) — Trough below a secant level
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `g(\pm 1)=0 || g(0)=-1`
   - `eq_step_cascade`: `len=4 shorts=3 :: y=1\qquad 1\neq 0 || x^{2}-1 = 1 || x=-\sqrt{2} || x=\sqrt{2}`

404. **MATH 7.E22** (`math-ch7-mixed-exam.json`, sev=6) — Quadratic samples — false second-gap $4$
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=3 :: h=h:\ 1,\ -1,\ -1,\ 1,\ 5,\ 11 || h=2 || a=1\neq 2 || 2a = 4`
   - `eq_step_pair`: `2a=2 || a=1\neq 0`

405. **MATH 7.E23** (`math-ch7-mixed-exam.json`, sev=6) — Workshop cost trough in a table
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=3 :: \Delta_{2}:\ 2,\ 2,\ 2,\ 2\qquad 2a=2 || a=1 || C(q)=(q-2)^{2}+1 || q=2`
   - `eq_step_cascade`: `len=6 shorts=4 :: C(q)=q^{2}-4q+5 || C(q)=(q-2)^{2}+1 || C(0)=5 || C(0)=C(4)`

406. **MATH 7.E24** (`math-ch7-mixed-exam.json`, sev=6) — Factor the difference, then the vertex of $g$
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=2 :: g(x)-f(x)=(x^{2}+x-1)-(4x-1) || g(x)-f(x)=x^{2}-3x || x(x-3)=0 || \Delta=9`
   - `eq_step_pair`: `S=0+3 || S=3`

407. **MATH 7.E25** (`math-ch7-mixed-exam.json`, sev=6) — Shared intercept, sliding second meeting
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=3 :: g_a(x)-3=ax^{2}-4x || g_a(x)-3=x(ax-4) || x=0 || g_a(0)=3`
   - `eq_step_cascade`: `len=12 shorts=10 :: x(ax-4)=0 || x=\frac{4}{a} || a=1 || x=4`

408. **MATH 7.E26** (`math-ch7-mixed-exam.json`, sev=6) — Monic parabola from two roots — sign traps
   - fields: solution_overview, tactical[0], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `g(x)=(x+1)(x-3) || g(x)=x^{2}-2x-3`
   - `eq_step_cascade`: `len=16 shorts=10 :: g(x)=(x+1)(x-3) || g(x)=x^{2}-2x-3 || x=\frac{-1+3}{2} || x=\frac{2}{2}`

409. **MATH 7.E28** (`math-ch7-mixed-exam.json`, sev=6) — A double root sitting on the axis
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=3 :: (x-2)^{2}=0 || x=2 || g(2)=0 || g(x)\ge 0\text{ with equality only at }x=2`
   - `eq_step_cascade`: `len=5 shorts=3 :: g(x)=x^{2}-4x+4 || \Delta=16-16 || \Delta=0 || x=-\frac{-4}{2}`

410. **MATH 7.E30** (`math-ch7-mixed-exam.json`, sev=6) — Arch crown versus a falling trolley chord
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=7 shorts=3 :: 4-(x-2)^{2}=0 || x-2=\pm 2 || x=0 || x=4\qquad\text{crown }(2,4)`
   - `eq_step_cascade`: `len=5 shorts=3 :: f(x)=2-\frac{1}{2}x || m=-\frac{1}{2} || f(2)=2^{2}-1 || 2^{2}=4`

411. **MATH 8.98** (`math-ch8-exam.json`, sev=6) — Exam-style tasks - 1
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=3 :: M(4)=5(4)^3 || M(4)=5\cdot64 || M(4)=320 || 320=320.`
   - `eq_step_cascade`: `len=5 shorts=4 :: 2h^{3}=250 || h^{3}=125 || h=(125)^{\frac{1}{3}} || h=5`

412. **MATH 8.99** (`math-ch8-exam.json`, sev=6) — Exam-style tasks - 2
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `\frac{B(9d)}{B(d)}=\frac{K(9d)^{\frac{1}{2}}}{Kd^{\frac{1}{2 || \frac{B(9d)}{B(d)}=(9)^{\frac{1}{2}}`
   - `eq_step_pair`: `\frac{B(9d)}{B(d)}=3 || 3=3.`

413. **MATH 8.101** (`math-ch8-exam.json`, sev=6) — Exam-style tasks - 4
   - fields: tactical[0], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=2 :: g(2)=27(2)^3 || g(2)=216 || f(g(2))=2\sqrt[3]{216}`
   - `eq_step_pair`: `f(g(2))=12 || 12=12.`

414. **MATH 8.102** (`math-ch8-exam.json`, sev=6) — Exam-style tasks - 5
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=2 :: C(9)=\frac{18}{\sqrt{9}} || C(9)=\frac{18}{3} || C(9)=6 || 6=6.`
   - `eq_step_pair`: `\frac{H(8L)}{H(L)}=\frac{K(8L)^{\frac{2}{3}}}{KL^{\frac{2}{3 || \frac{H(8L)}{H(L)}=(8)^{\frac{2}{3}}`

415. **MATH 8.103** (`math-ch8-exam.json`, sev=6) — Exam-style tasks - 6
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=0 :: \frac{P(5V)}{P(V)}=\frac{K(5V)^{-1}}{KV^{-1}} || \frac{P(5V)}{P(V)}=(5)^{-1} || (5)^{-1}=\dfrac{1}{5} || \dfrac{1}{5}=\dfrac{1}{5}.`
   - `eq_step_cascade`: `len=4 shorts=2 :: 5v^{-1}=1 || v^{-1}=\dfrac{1}{5} || v=(\dfrac{1}{5})^{-1} || v=5`

416. **MATH 8.104** (`math-ch8-exam.json`, sev=6) — Exam-style tasks - 7
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `\frac{R(16n)}{R(n)}=\frac{K(16n)^{\frac{5}{4}}}{Kn^{\frac{5} || \frac{R(16n)}{R(n)}=(16)^{\frac{5}{4}}`
   - `eq_step_cascade`: `len=5 shorts=2 :: 7q^{\frac{3}{4}}=56 || q^{\frac{3}{4}}=8 || q=(8)^{\frac{4}{3}} || q=16`

417. **MATH 8.105** (`math-ch8-exam.json`, sev=6) — Exam-style tasks - 8
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=1 :: 18m^{\frac{-1}{2}}=6 || m^{\frac{-1}{2}}=\dfrac{1}{3} || m=(\dfrac{1}{3})^{-2} || m=9`
   - `eq_step_cascade`: `len=3 shorts=2 :: g(2)=9(2)^2 || g(2)=36 || f(g(2))=\frac4{\sqrt{36}}`

418. **MATH 8.106** (`math-ch8-exam.json`, sev=6) — Exam-style tasks - 9
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=2 :: g(3)=3^3 || g(3)=27 || f(g(3))=6(27)^{2/3}`
   - `eq_step_pair`: `\frac{Y_{\rm new}}{Y_{\rm old}}=(\dfrac{5}{4})^{-2} || \frac{Y_{\rm new}}{Y_{\rm old}}=\dfrac{16}{25}`

419. **MATH 8.107** (`math-ch8-exam.json`, sev=6) — Exam-style tasks - 10
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `\varepsilon=\frac{x}{Y}\frac{dY}{dx} || \varepsilon=\frac{x}{Kx^a}`
   - `eq_step_pair`: `\varepsilon=a\varepsilon\varepsilon || \varepsilon=\dfrac{5}{4}`

420. **MATH 8.109** (`math-ch8-exam.json`, sev=6) — Exam-style tasks - 12
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=2 :: Y=Kx^{a} || c=4 || a=\dfrac{3}{2} || \frac{Y(4x)}{Y(x)}=4^{3/2}`
   - `eq_step_cascade`: `len=3 shorts=2 :: 4^{3/2}=2^{3} || 2^{3}=8 || 4^{3/2}=8`

421. **MATH 8.110** (`math-ch8-exam.json`, sev=6) — Exam-style tasks - 13
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=2 :: 4x^{3/2}=108 || \frac{4x^{3/2}}{4}=\frac{108}{4} || x^{3/2}=27`
   - `eq_step_cascade`: `len=3 shorts=2 :: x^{3/2}=27 || x=\bigl(x^{3/2}\bigr)^{2/3} || x=27^{2/3}`

422. **MATH 8.114** (`math-ch8-exam.json`, sev=6) — Exam-style tasks - 17
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=2 :: Y=Kx^{a} || c=8 || a=\dfrac{2}{3} || \frac{Y(8x)}{Y(x)}=8^{2/3}`
   - `eq_step_cascade`: `len=3 shorts=2 :: 8^{2/3}=2^{2} || 2^{2}=4 || 8^{2/3}=4`

423. **MATH 8.115** (`math-ch8-exam.json`, sev=6) — Exam-style tasks - 18
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=2 :: 5x^{3/2}=320 || \frac{5x^{3/2}}{5}=\frac{320}{5} || x^{3/2}=64`
   - `eq_step_cascade`: `len=3 shorts=2 :: x^{3/2}=64 || x=\bigl(x^{3/2}\bigr)^{2/3} || x=64^{2/3}`

424. **MATH 9.E01** (`math-ch9-mixed-exam.json`, sev=6) — Touch, ends, and a dashed mark from ticks
   - fields: tactical[0], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=0 :: p(x)=(x+1)^{2}(x-2) || (x+1)^{2}(x-2)=x^{3}-3x-2 || \lim_{x\to+\infty}p(x)=+\infty || \lim_{x\to-\infty}p(x)=-\infty`
   - `eq_step_pair`: `p(x)=x^{3}-3x-2 || p(0)=-2\neq 0`

425. **MATH 9.E02** (`math-ch9-mixed-exam.json`, sev=6) — Degree and factors from raw samples
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=12 shorts=12 :: 0--12 =12 || 2-0 =2 || 0-2 =-2 || 0-0 =0`
   - `eq_step_cascade`: `len=4 shorts=0 :: x=-2,-1,0,1,2,3 || p=-12,\ 0,\ 2,\ 0,\ 0,\ 8 || p(x)=(x+1)(x-1)(x-2) || p(x)=x^{3}-2x^{2}-x+2`

426. **MATH 9.E03** (`math-ch9-mixed-exam.json`, sev=6) — Lock imbalance from the hourly ledger
   - fields: tactical[0], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=3 :: t=0,1,2,3,4 || h=0,\ 2,\ 0,\ 0,\ 8 || h(0)=h(2) || h(0)=h(3)`
   - `eq_step_pair`: `h(t)=t(t-2)(t-3) || h(t)=t^{3}-5t^{2}+6t`

427. **MATH 9.E04** (`math-ch9-mixed-exam.json`, sev=6) — Shared roots, parity, and nested degree
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=3 :: p(x)=x^{2}-1 || q(1)=q(-1) || q(1)=0`
   - `eq_step_cascade`: `len=6 shorts=2 :: q(x)=x^{3}-x || q(-x)=-x^{3}+x || -x^{3}+x=-q(x) || q(-x)=(-x)^{3}-(-x)`

428. **MATH 9.E06** (`math-ch9-mixed-exam.json`, sev=6) — Rebuild a touch-and-cross monic cubic
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `p(x)=(x-1)^{2}(x+2) || p(x)=x^{3}-3x+2`
   - `eq_step_cascade`: `len=7 shorts=0 :: p'(x)=3x^{2}-3 || 3x^{2}-3=3(x-1)(x+1) || p'(-2)=3\cdot 4-3 || 3\cdot 4-3=9\neq 0`

429. **MATH 9.E07** (`math-ch9-mixed-exam.json`, sev=6) — Affine outer map around a difference of squares
   - fields: tactical[0], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `(x^{2}-1)-2=2 || p(x)=x^{2}-1`
   - `eq_step_cascade`: `len=5 shorts=3 :: q(p(0))=q(-1) || q(-1)=-3 || p(q(0))=p(-2) || p(q(0))=4-1`

430. **MATH 9.E08** (`math-ch9-mixed-exam.json`, sev=6) — A squared factor and the derivative
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=1 :: p(x)=(x+1)^{2}(x-2) || p'(x)=3x^{2}-3 || 3x^{2}-3=3(x-1)(x+1) || p'(-1)=0`
   - `eq_step_cascade`: `len=3 shorts=2 :: p'(x)=3x^{2}-3 || p'(2)=12-3 || 12-3=9\neq 0`

431. **MATH 9.E09** (`math-ch9-mixed-exam.json`, sev=6) — Solid cubic, dashed line, and a value table
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=3 :: p(x)=x(x-2)(x+2) || p(-2)=p(0) || p(-2)=p(2) || p(-2)=0`
   - `eq_step_cascade`: `len=7 shorts=2 :: p(x)=x^{3}-4x || p(-x)=-p(x) || p(-x)=(-x)^{3}-4(-x) || p(-x)=-x^{3}+4x`

432. **MATH 9.E11** (`math-ch9-mixed-exam.json`, sev=6) — Odd cubic against a dashed line
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=3 :: p(x)=x(x-2)(x+2) || p(-2)=p(0) || p(-2)=p(2) || p(-2)=0`
   - `eq_step_cascade`: `len=4 shorts=1 :: p(x)=x^{3}-4x || p(-x)=-p(x) || p(x)=x(x-2)(x+2) || p(x)=x^{3}-4x`

433. **MATH 9.E13** (`math-ch9-mixed-exam.json`, sev=6) — Beam camber against a design mark
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=7 shorts=1 :: c(t)=-(t+1)(t-1)(t-2) || -(t+1)(t-1)(t-2)=-t^{3}+2t^{2}+t-2 || \lim_{t\to+\infty}c(t)=-\infty || c(10)=-(11)(9)(8)`
   - `eq_step_cascade`: `len=6 shorts=3 :: c(t)=-(t+1)(t-1)(t-2) || c(-1)=c(1) || c(-1)=c(2) || c(-1)=0`

434. **MATH 9.E15** (`math-ch9-mixed-exam.json`, sev=6) — A double root with a sliding companion
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=0 :: p_{1}(x)=(x-1)^{2}(x-1) || (x-1)^{2}(x-1)=(x-1)^{3} || p_{1}(x)=(x-1)^{3} || p_{a}(x)=(x-1)^{2}(x-a)`
   - `eq_step_cascade`: `len=6 shorts=1 :: p_{2}(x)=(x-1)^{2}(x-2) || p_{2}'(x)=2(x-1)(x-2)+(x-1)^{2} || 2(x-1)(x-2)+(x-1)^{2}=(x-1)(3x-5) || p_{2}'(1)=0`

435. **MATH 9.E16** (`math-ch9-mixed-exam.json`, sev=6) — Double at 2 and simple at −1
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=0 :: p(x)=(x-2)^{2}(x+1) || p(x)=(x^{2}-4x+4)(x+1) || (x^{2}-4x+4)(x+1)=x^{3}-3x^{2}+4 || p(x)=x^{3}-3x^{2}+4`
   - `eq_step_cascade`: `len=5 shorts=1 :: p'(x)=3x^{2}-6x || 3x^{2}-6x=3x(x-2) || p'(2)=0 || p(x)=(x-2)^{2}(x+1)`

436. **MATH 9.E17** (`math-ch9-mixed-exam.json`, sev=6) — Two even maps nested both ways
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=0 :: q(p(x))=(x^{2}-1)^{2}+1 || (x^{2}-1)^{2}+1=x^{4}-2x^{2}+2 || p(q(x))=(x^{2}+1)^{2}-1 || (x^{2}+1)^{2}-1=x^{4}+2x^{2}`
   - `eq_step_pair`: `(x^{2}+1)^{2}-1=4 || p(x)=x^{2}-1`

437. **MATH 9.E19** (`math-ch9-mixed-exam.json`, sev=6) — Touch cubic on axes plus raw samples
   - fields: tactical[0], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `p(x)=(x-2)^{2}(x+1) || p(x)=x^{3}-3x^{2}+4`
   - `eq_step_cascade`: `len=4 shorts=1 :: x=-1,0,1,2,3 || p=0,\ 4,\ 2,\ 0,\ 4 || p(x)=(x-2)^{2}(x+1) || p(x)=x^{3}-3x^{2}+4`

438. **MATH 9.E21** (`math-ch9-mixed-exam.json`, sev=6) — Even quartic read from the axes
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=1 :: p(x)=(x-1)^{2}(x+1)^{2} || (x-1)^{2}(x+1)^{2}=x^{4}-2x^{2}+1 || \lim_{|x|\to\infty}p(x)=+\infty || p(10)=(100-1)^{2}`
   - `eq_step_cascade`: `len=4 shorts=1 :: p(x)=(x^{2}-1)^{2} || p(0)=1\neq 0 || p(x)=(x^{2}-1)^{2} || p(x)=x^{4}-2x^{2}+1`

439. **MATH 9.E25** (`math-ch9-mixed-exam.json`, sev=6) — A double root fixed at the origin
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=0 :: h_{k}(x)=x^{3}-kx^{2} || h_{1}(-x)=-x^{3}-x^{2} || -h_{1}(x)=-x^{3}+x^{2} || h_{k}(x)=x^{2}(x-k)`
   - `eq_step_pair`: `h_{k}(x)=x^{2}(x-k) || h_{k}(x)=x^{3}-kx^{2}`

440. **MATH 9.E26** (`math-ch9-mixed-exam.json`, sev=6) — Three simple zeros force a monic cubic
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=0 :: p(x)=(x+2)(x-1)(x-3) || p(x)=x^{3}-2x^{2}-5x+6 || p(x)=(x+2)(x-1)(x-3) || p(x)=x^{3}-2x^{2}-5x+6`
   - `eq_step_cascade`: `len=4 shorts=0 :: p(x)=x^{3}-2x^{2}-5x+6 || p(x)=(x+2)(x-1)(x-3) || p(x)=x^{3}-2x^{2}-5x+6 || r_{1}+r_{2}+r_{3}=-b`

441. **MATH 9.E28** (`math-ch9-mixed-exam.json`, sev=6) — Simple at 0, double at 2
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=1 :: p'(x)=3x^{2}-8x+4 || 3x^{2}-8x+4=(3x-2)(x-2) || p'(0)=4\neq 0 || p(x)=x(x-2)^{2}`
   - `eq_step_cascade`: `len=4 shorts=1 :: p'(x)=(3x-2)(x-2) || p'(2)=0 || p(x)=x(x-2)^{2} || p(x)=x^{3}-4x^{2}+4x`

442. **MATH 9.E29** (`math-ch9-mixed-exam.json`, sev=6) — Three crossings, a dashed mark, and table factors
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=3 :: p(x)=(x+1)(x-1)(x-2) || p(-1)=p(1) || p(-1)=p(2) || p(-1)=0`
   - `eq_step_cascade`: `len=4 shorts=2 :: p(0)=2 || p(0)=2>0 || p(x)=(x+1)(x-1)(x-2) || p(x)=x^{3}-2x^{2}-x+2`

443. **MATH 9.E30** (`math-ch9-mixed-exam.json`, sev=6) — Meetings, interpolation, and far-field sign
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `x^{3}-3x=0 || x(x^{2}-3)=0`
   - `eq_step_cascade`: `len=5 shorts=3 :: p(x)=(x^{3}-x)+(x^{2}-1) || (x^{3}-x)+(x^{2}-1)=(x+1)^{2}(x-1) || p(-1)=0 || p(-1)=0\neq 2`

444. **MATH 9.02** (`math-ch9-polynomials.json`, sev=6) — Reading a Cubic at Three Abscissas
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `p(x)=x^{3}-2x+4 || p(x)=x^{3} - 2 x + 4`
   - `eq_step_cascade`: `len=8 shorts=7 :: p(x)=x^{3} - 2 x + 4 || 0^{3}=0 || 0^{1}=0 || -2\cdot 0=0`

445. **MATH 9.03** (`math-ch9-polynomials.json`, sev=6) — Degree and Leading Coefficient on Sight
   - fields: solution_overview, tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `q(x)=4x^{3}-x+5 || q(x)=4 x^{3} - x + 5`
   - `eq_step_cascade`: `len=9 shorts=8 :: q(x)=4 x^{3} - x + 5 || 0^{3}=0 || 4\cdot 0=0 || 0^{1}=0`

446. **MATH 9.04** (`math-ch9-polynomials.json`, sev=6) — Roots from a Factored Cubic
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `p(x)=(x-1)(x+2)(x-3) || p(x)=x^{3} - 2 x^{2} - 5 x + 6`
   - `eq_step_cascade`: `len=4 shorts=3 :: p(x)=(x-1)(x+2)(x-3) || x=1 || x=-2 || x=3`

447. **MATH 9.05** (`math-ch9-polynomials.json`, sev=6) — A Line Times a Square
   - fields: solution_overview, tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `p(x)=(2x-1)(x^{2}+1) || p(x)=2 x^{3} - x^{2} + 2 x - 1`
   - `eq_step_cascade`: `len=11 shorts=10 :: p(x)=2 x^{3} - x^{2} + 2 x - 1 || 0^{3}=0 || 2\cdot 0=0 || 0^{2}=0`

448. **MATH 9.06** (`math-ch9-polynomials.json`, sev=6) — Adding Two Cubics
   - fields: solution_overview, tactical[0], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `p(x)=x^{3}+x || p(x)=x^{3} + x`
   - `eq_step_pair`: `s(x)=(x^{3}-x^{3})+4x^{2}+x-2 || s(x)=4x^{2}+x-2`

449. **MATH 9.07** (`math-ch9-polynomials.json`, sev=6) — Odd Cubic on Sight
   - fields: solution_overview, tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `p(x)=x^{3}-4x || p(x)=x \left(x^{2} - 4\right)`
   - `eq_step_cascade`: `len=5 shorts=1 :: p(x)=x^{3}-4x || p(-x)=(-x)^{3}-4(-x) || p(-x)=-x^{3}+4x || p(-x)=-(x^{3}-4x)`

450. **MATH 9.08** (`math-ch9-polynomials.json`, sev=6) — End Behaviour of a Downward Cubic
   - fields: solution_overview, tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `p(x)=-2x^{3}+x+1 || p(x)=- 2 x^{3} + x + 1`
   - `eq_step_cascade`: `len=8 shorts=7 :: p(x)=- 2 x^{3} + x + 1 || 0^{3}=0 || -2\cdot 0=0 || 0^{1}=0`

451. **MATH 9.09** (`math-ch9-polynomials.json`, sev=6) — A Short Value Table for a Cubic
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=8 shorts=7 :: p(x)=x^{3} - x + 1 || 0^{3}=0 || 0^{1}=0 || -(0)=0`
   - `eq_step_cascade`: `len=8 shorts=7 :: p(x)=x^{3} - x + 1 || 2^{3}=8 || 2^{1}=2 || -(2)=-2`

452. **MATH 9.10** (`math-ch9-polynomials.json`, sev=6) — Constant Term Versus Leading Term
   - fields: solution_overview, tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `p(x)=5-3x^{2}+x^{4} || p(x)=x^{4} - 3 x^{2} + 5`
   - `eq_step_pair`: `p(x)=5-3x^{2}+x^{4} || p(x)=x^{4}-3x^{2}+5`

453. **MATH 9.11** (`math-ch9-polynomials.json`, sev=6) — A Horizontal Line Against a Cubic
   - fields: solution_overview, tactical[1], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `p(x)=x^{3}-x || p(x)=x^{3} - x`
   - `eq_step_cascade`: `len=7 shorts=3 :: p(x)=x^{3}-x || p(-x)=(-x)^{3}-(-x) || (-x)^{3}-(-x)=-x^{3}+x || p(-x)=-(x^{3}-x)`

454. **MATH 9.12** (`math-ch9-polynomials.json`, sev=6) — Product of a Line and a Cubic
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `f(x)=x-2 || f(x)=x - 2`
   - `eq_step_cascade`: `len=4 shorts=1 :: f(x)=x-2 || h(x)=(x-2)(x^{3}+1) || x\cdot x^{3}=x^{4} || h(x)=x^{4}-2x^{3}+x-2`

455. **MATH 9.14** (`math-ch9-polynomials.json`, sev=6) — Warehouse Cost as a Cubic
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=9 shorts=8 :: C(q)=q^{3} - 6 q^{2} + 20 q || 0^{3}=0 || 0^{2}=0 || -6\cdot 0=0`
   - `eq_step_cascade`: `len=10 shorts=9 :: C(q)=q^{3} - 6 q^{2} + 20 q || 2^{3}=8 || 2^{2}=4 || -6\cdot 4=-24`

456. **MATH 9.15** (`math-ch9-polynomials.json`, sev=6) — Turning-Point Budget of a Cubic
   - fields: solution_overview, tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `p(x)=x^{3}-3x^{2}+2 || p(x)=x^{3} - 3 x^{2} + 2`
   - `eq_step_cascade`: `len=5 shorts=2 :: p(x)=x^{3}-3x^{2}+2 || p'(x)=3x^{2}-6x || 3x^{2}-6x=3x(x-2) || x=0`

457. **MATH 9.16** (`math-ch9-polynomials.json`, sev=6) — Factor Theorem at a Named Point
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `p(x)=x^{3}-4x^{2}+x+6 || p(x)=x^{3} - 4 x^{2} + x + 6`
   - `eq_step_cascade`: `len=8 shorts=4 :: p(x)=x^{3}-4x^{2}+x+6 || p(2)=2^{3}-4\cdot 2^{2}+2+6 || p(2)=8-4\cdot 4+2+6 || p(2)=8-16+2+6`

458. **MATH 9.19** (`math-ch9-polynomials.json`, sev=6) — Meetings of a Cubic and a Line
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `p(x)=x^{3}-x || p(x)=x^{3} - x`
   - `eq_step_cascade`: `len=4 shorts=2 :: p(x)=x^{3}-x || p(x)-\ell(x)=x^{3}-x-x || x^{3}-x-x=x^{3}-2x || x(x^{2}-2)=0`

459. **MATH 9.20** (`math-ch9-polynomials.json`, sev=6) — Revenue Cubic and a Break-Even Read
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=8 shorts=4 :: R(n)=\frac{n \left(- n^{2} + 30 n + 200\right)}{10 || R(10)=-\frac{1}{10}\cdot 1000+3\cdot 100+20\cdot 1 || R(10)=-100+300+200 || -1`
   - `eq_step_pair`: `R(n)=\frac{n \left(- n^{2} + 30 n + 200\right)}{10} || R(n)=-\frac{1}{10}n^{3}+3n^{2}+20n`

460. **MATH 9.21** (`math-ch9-polynomials.json`, sev=6) — Even Quartic from a Square
   - fields: solution_overview, tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `p(x)=(x^{2}-3)^{2}-1 || p(x)=x^{4} - 6 x^{2} + 8`
   - `eq_step_cascade`: `len=7 shorts=4 :: p(x)=(x^{2}-3)^{2}-1 || p(-x)=((-x)^{2}-3)^{2}-1 || ((-x)^{2}-3)^{2}-1=(x^{2}-3)^{2}-1 || p(-x)=p(x)`

461. **MATH 9.23** (`math-ch9-polynomials.json`, sev=6) — Graph of a Cubic with Two Turns
   - fields: tactical[1], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `p(0)=(0+1)(0-1)(0-2) || p(0)=(1)(-1)(-2)`
   - `eq_step_cascade`: `len=9 shorts=8 :: p'(x)=3x^{2}-4x-1 || p'(1)=3-4-1 || 3-4=-1 || -1-1=-2`

462. **MATH 9.27** (`math-ch9-polynomials.json`, sev=6) — Nested Polynomials Without Cancelling the Top Power
   - fields: solution_overview, tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `p(x)=x^{2}+1 || p(x)=x^{2} + 1`
   - `eq_step_cascade`: `len=4 shorts=2 :: p(x)=x^{2}+1 || r(x)=q(p(x)) || q(p(x))=(x^{2}+1)^{3}-(x^{2}+1) || (x^{2})^{3}=x^{6}`

463. **MATH 9.30** (`math-ch9-polynomials.json`, sev=6) — Rebuild a Monic Cubic from Three Roots
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=9 shorts=7 :: p(1)=1-2-8 || 1-2=-1 || -1-8=-9 || p(1)=-9`
   - `eq_step_cascade`: `len=4 shorts=3 :: p(0)=0\cdot(2)\cdot(-4) || 0\cdot 2=0 || 0\cdot -4=0 || p(0)=0`

464. **MATH 9.32** (`math-ch9-polynomials.json`, sev=6) — When Leading Terms Cancel
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `a+b=0,\qquad a\neq 0 || p+q=x+1`
   - `eq_step_cascade`: `len=3 shorts=2 :: p-q=(a-b)x^{n}+\cdots || a-b=a-(-a) || a-b=2a`

465. **MATH 9.38** (`math-ch9-polynomials.json`, sev=6) — Graph: Which Cubic Matches the Turns?
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=1 :: p(x)=-x^{3}+3x || p'(x)=-3x^{2}+3 || p'(x)=3(1-x^{2}) || p(-1)=1-3`
   - `eq_step_pair`: `p(-1)=-2 || p(1)=-1+3`

466. **MATH 9.39** (`math-ch9-polynomials.json`, sev=6) — Quartic End Behaviour Against a Cubic
   - fields: solution_overview, tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `p(x)=x^{4}-4x^{2} || p(x)=x^{2} \left(x^{2} - 4\right)`
   - `eq_step_cascade`: `len=4 shorts=1 :: p(x)=x^{4}-4x^{2} || p(-x)=(-x)^{4}-4(-x)^{2} || (-x)^{4}-4(-x)^{2}=x^{4}-4x^{2} || p(-x)=p(x)`

467. **MATH 9.44** (`math-ch9-polynomials.json`, sev=6) — Palindromic Coefficients
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=2 :: p(x)=a_n x^{n}+\cdots+a_0 || p(0)=a_0 || a_0=a_n`
   - `eq_step_pair`: `p(1)=6 || p(1)=2(1+2)`

468. **MATH 9.45** (`math-ch9-polynomials.json`, sev=6) — Integer Coefficients and Integer Roots
   - fields: tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `p(x)=x^{2}+1 || p(0)=1\neq 0`
   - `eq_step_cascade`: `len=5 shorts=4 :: p(x)=x^{3}+x+1 || p(-1)=-1-1+1 || -1-1=-2 || -2+1=-1`

469. **MATH 9.46** (`math-ch9-polynomials.json`, sev=6) — Min Acceleration of a Family of Cubics
   - fields: tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=1 :: v(t)=t \left(- b t + 2.0 \cdot 10^{-5} t^{2} + 0.4 || b=0.005 || t=\frac{2\cdot 0.005}{0.00012} || t=\frac{0.01}{0.00012}`
   - `eq_step_pair`: `a(t)=0.00006t^{2}-2bt+0.4 || a(0)=0.4`

470. **MATH 9.47** (`math-ch9-polynomials.json`, sev=6) — Workshop Output: Cubic Versus Recorded Totals
   - fields: tactical[0], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=1 :: Q(t)=\frac{t \left(- t^{2} + 50 t + 100\right)}{50 || Q(t)=-\frac{1}{50}t^{3}+t^{2}+2t || Q(10)=-\frac{1000}{50}+100+20 || Q(10)=-20`
   - `eq_step_pair`: `Q'(t)=-\frac{3}{50}t^{2}+2t+2 || Q'(0)=2`

471. **MATH 9.48** (`math-ch9-polynomials.json`, sev=6) — Rebuild from a Double Root and a Simple Root
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=3 :: p(x)=(x-1)^{2}(x+3) || p'(x)=2(x-1)(x+3)+(x-1)^{2} || p'(1)=0 || p'(1)=3+2-5`
   - `eq_step_cascade`: `len=5 shorts=3 :: p(0)=(0-1)^{2}(0+3) || p(0)=1\cdot 3 || 1\cdot 3=3 || p(0)=3`

472. **MATH 9.49** (`math-ch9-polynomials.json`, sev=6) — Crossing a Quartic and a Line Three Times
   - fields: solution_overview, tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `p(x)=x^{4}-5x^{2}+4 || p(x)=x^{4} - 5 x^{2} + 4`
   - `eq_step_cascade`: `len=5 shorts=2 :: p(-x)=(-x)^{4}-5(-x)^{2}+4 || (-x)^{4}-5(-x)^{2}+4=x^{4}-5x^{2}+4 || p(-2)=16-20+4 || p(-2)=0`

473. **MATH 9.50** (`math-ch9-polynomials.json`, sev=6) — Graph of $x^{3}-x$ Versus a Raised Copy
   - fields: solution_overview, tactical[0], tactical[1]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `q(x)=p(x)+c || p(x)=x^{3} - x`
   - `eq_step_cascade`: `len=6 shorts=5 :: q(x)=p(x)+c || p(x)=x^{3}-x || x^{3}-x=x(x-1)(x+1) || p(0)=p(1)`

474. **MATH 9.52** (`math-ch9-polynomials.json`, sev=6) — Sketch Reading: Three Crossings and a Turn Between Them
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=10 shorts=9 :: p(x)=x^{3} - 2 x^{2} - 5 x + 6 || 0^{3}=0 || 0^{2}=0 || -2\cdot 0=0`
   - `eq_step_pair`: `p(x)=x^{3}-2x^{2}-5x+6 || p(x)=x^{3}\left(1-\frac{2}{x}-\frac{5}{x^{2}}+\frac{6}{x^{3}`

475. **MATH 9.54** (`math-ch9-polynomials.json`, sev=6) — Sampling a Quartic: Are Fourth Differences Constant?
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=12 shorts=12 :: 2-1 =1 || 17-2 =15 || 82-17 =65 || 257-82 =175`
   - `eq_step_pair`: `60-36 =24 || 84-60 =24`

476. **MATH 9.56** (`math-ch9-polynomials.json`, sev=6) — Canal Gate: Water Height as a Cubic in Minutes
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `h(t)=\frac{1}{500}t^{3}-\frac{9}{100}t^{2}+t || h(0)=0`
   - `eq_step_cascade`: `len=5 shorts=4 :: h(10)=\frac{1000}{500}-\frac{9}{100}\cdot 100+10 || h(10)=2-9+10 || 2-9=-7 || -7+10=3`

477. **MATH 9.57** (`math-ch9-polynomials.json`, sev=6) — Rebuild a Monic Cubic from Three Given Zeros
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=0 :: p(x)=x(x+2)(x-4) || (x+2)(x-4)=x^{2}-2x-8 || x(x^{2}-2x-8)=x^{3}-2x^{2}-8x || x^{3}-2x^{2}-8x=x(x^{2}-2x-8)`
   - `eq_step_pair`: `p(x)=x^{3}-2x^{2}-8x || p(0)=0`

478. **MATH 9.58** (`math-ch9-polynomials.json`, sev=6) — Far-End Behaviour Without a Formula
   - fields: tactical[1], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=2 :: p(x)=x^{2}\qquad(n || p(x)=2,\ a_{n} || p(x)=1) || \lim_{x\to-\infty}p(x)=+\infty`
   - `eq_step_pair`: `p(x)=a_{n}x^{n}+\cdots+a_{1}x+a_{0} || p(0)=a_{0}`

479. **MATH 9.59** (`math-ch9-polynomials.json`, sev=6) — Workshop Output Cost and a Recorded Total Table
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `C(q)=\frac{1}{50}q^{3}-\frac{3}{5}q^{2}+4q+10 || C(0)=10`
   - `eq_step_cascade`: `len=6 shorts=4 :: C(10)=\frac{1000}{50}-\frac{3}{5}\cdot 100+40+10 || C(10)=20-60+40+10 || 20-60=-40 || -40+40=0`

480. **MATH 9.60** (`math-ch9-polynomials.json`, sev=6) — Touching the Axis at Two, Crossing at Negative One
   - fields: tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=8 shorts=7 :: p(x)=x^{3} - 3 x^{2} + 4 || 0^{3}=0 || 0^{2}=0 || -3\cdot 0=0`
   - `eq_step_pair`: `p(x)=x^{3}-3x^{2}+4 || p(x)=x^{3}\left(1-\frac{3}{x}+\frac{4}{x^{3}}\right)`

481. **MATH 9.62** (`math-ch9-polynomials.json`, sev=6) — Degree of a Sum When $n>m$ (Set 1)
   - fields: tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=3 :: p(x)=x^{3} || q(x)=x || p+q=x^{3}+x`
   - `eq_step_pair`: `p-q=a_{n}x^{n}+\cdots || p-q=x^{3}-x+1`

482. **MATH 9.63** (`math-ch9-polynomials.json`, sev=6) — When Equal Leading Terms Cancel in a Sum (Set 1)
   - fields: tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=2 :: a-b=a-(-a) || a-(-a)=2a || p-q=2ax^{n}+\cdots`
   - `eq_step_cascade`: `len=3 shorts=2 :: p(x)=x^{2}+1 || q(x)=-x^{2}+x || p+q=x+1`

483. **MATH 9.65** (`math-ch9-polynomials.json`, sev=6) — Inverted Cubic with Three Zeros
   - fields: tactical[1], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=12 shorts=10 :: p(x)=- x^{3} - 3 x^{2} - x + 3 || 1^{3}=1 || -(1)=-1 || 1^{2}=1`
   - `eq_step_pair`: `p(0)=-(1)(-1)(-3) || p(0)=-3`

484. **MATH 9.66** (`math-ch9-polynomials.json`, sev=6) — Cubic Meets a Line: Count the Crossings
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=9 shorts=3 :: p(x)=x \left(x^{2} - 4\right) || p(x)-\ell(x)=x(x^{2}-4)-x || x(x^{2}-4)-x=x^{3}-5x || x(x^{2}-5)=0`
   - `eq_step_cascade`: `len=4 shorts=0 :: p(x)=x \left(x^{2} - 4\right) || p(x)=x^{3}-4x || p(-x)=-x^{3}+4x || -x^{3}+4x=-p(x)`

485. **MATH 9.67** (`math-ch9-polynomials.json`, sev=6) — W: Warehouse Throughput
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=0 :: W(t)=\frac{t^{3}}{100}-\frac{3}{10}t^{2}+2t || W'(t)=\frac{3t^{2}}{100}-\frac{3}{5}t+2 || W'(5)=\frac{75}{100}-3+2 || W'(5)=-\frac{1`
   - `eq_step_cascade`: `len=7 shorts=1 :: W(5)=\frac{5(25-150+200)}{100} || W(5)=\frac{5\cdot 75}{100} || W(5)=\frac{375}{100} || W(5)=\frac{15}{4}`

486. **MATH 9.73** (`math-ch9-polynomials.json`, sev=6) — Degree of a Sum When $n>m$ (Set 2)
   - fields: tactical[0], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `p+q=a_{n}x^{n}+\cdots || p+q=x^{4}+x`
   - `eq_step_cascade`: `len=3 shorts=3 :: p(x)=x^{2} || q(x)=x || p+q=x^{2}+x`

487. **MATH 9.76** (`math-ch9-polynomials.json`, sev=6) — Odd Cubic Against a Parabola
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=8 shorts=3 :: p(x)-\ell(x)=x^{3}-x-(x^{2}-1) || p(x)-\ell(x)=x^{3}-x^{2}-x+1 || (x-1)^{2}(x+1)=0 || p(1)=0`
   - `eq_step_cascade`: `len=7 shorts=3 :: p(x)=x^{3} - x || p(-x)=(-x)^{3}-(-x) || p(-x)=-x^{3}+x || p(-x)=-(x^{3}-x)`

488. **MATH 9.79** (`math-ch9-polynomials.json`, sev=6) — Rebuild from a Double Root and a Simple Root (Set 2)
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=1 :: p'(x)=2(x-2)(x+1)+(x-2)^{2} || p'(x)=(x-2)\bigl(2x+2+x-2\bigr) || (x-2)\bigl(2x+2+x-2\bigr)=(x-2)\cdot 3x || p'(2)=0`
   - `eq_step_cascade`: `len=3 shorts=3 :: p'(-1)=9 || p'(-1)=3+6 || p'(-1)=9`

489. **MATH 9.80** (`math-ch9-polynomials.json`, sev=6) — Square of a Quadratic Minus Itself (Set 2)
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=0 :: p(x)=x^{2} + x + 1 || r(x)=p(x)^{2}-p(x) || r(x)=p(x)\bigl(p(x)-1\bigr) || p(p-1)=p^{2}-p`
   - `eq_step_pair`: `p(0)=1 || r(0)=1^{2}-1`

490. **MATH 9.81** (`math-ch9-polynomials.json`, sev=6) — Even Quartic: Factor Then Read the Shape (Set 2)
   - fields: tactical[1], tactical[2]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=7 shorts=4 :: p(x)=x^{4} - 10 x^{2} + 9 || p(-x)=(-x)^{4}-10(-x)^{2}+9 || p(-x)=x^{4}-10x^{2}+9 || p(-x)=p(x)`
   - `eq_step_pair`: `p(x)=x^{4} - 10 x^{2} + 9 || p(x)=(x^{2}-1)(x^{2}-9)`

491. **MATH 9.82** (`math-ch9-polynomials.json`, sev=6) — Raising a Cubic: Crossings After a Vertical Shift (Set 2)
   - fields: solution_overview, tactical[0], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `q(x)=p(x)+c || p(x)=x^{3} - x`
   - `eq_step_cascade`: `len=3 shorts=2 :: q(x)=p(x)+c || q(x)=x^{3}-x || q(x)=x(x-1)(x+1)`

492. **MATH 9.83** (`math-ch9-polynomials.json`, sev=6) — Degree of a Sum When $n>m$ (Set 3)
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=4 :: p(x)=x^{3} || q(x)=2x || p(x)+q(x)=x^{3}+2x || n=3>m`
   - `eq_step_cascade`: `len=5 shorts=2 :: p(x)=x^{3} || q(x)=2x || p(x)q(x)=2x^{4} || x^{4}=x^{3+1}`

493. **MATH 9.84** (`math-ch9-polynomials.json`, sev=6) — When Equal Leading Terms Cancel in a Sum (Set 2)
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=3 :: p(x)=x^{2}+1 || q(x)=-x^{2}+x || p(x)+q(x)=x+1 || a+b=1+(-1)`
   - `eq_step_pair`: `p(x)-q(x)=\bigl(x^{2}+1\bigr)-\bigl(-x^{2}+x\bigr) || p(x)-q(x)=2x^{2}-x+1`

494. **MATH 9.86** (`math-ch9-polynomials.json`, sev=6) — Negative Leading Coefficient Cubic
   - fields: tactical[1], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=3 :: p(x)=-x(x+2)(x-3) || p(0)=0\cdot(-2)\cdot(-3) || 0\cdot -2=0 || 0\cdot -3=0`
   - `eq_step_pair`: `p(x)=-x(x+2)(x-3) || p(0)=0`

495. **MATH 9.89** (`math-ch9-polynomials.json`, sev=6) — Finite Differences Diagnose the Degree (Set 3)
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=3 shorts=3 :: 1-1 =0 || 7-1 =6 || 25-7 =18`
   - `eq_step_cascade`: `len=4 shorts=4 :: p(3)=25 || 27-3=24 || 24+1=25 || p(3)=25`

496. **MATH 9.94** (`math-ch9-polynomials.json`, sev=6) — Parameter α5: How Many Real Zeros?
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `g_{36}(6)=216-216 || g_{36}(6)=0`
   - `eq_step_cascade`: `len=4 shorts=2 :: g_k(x)=x^3-kx || g_{0}(x)=x^{3} || x^{3}=0 || x=0`

497. **MATH 9.96** (`math-ch9-polynomials.json`, sev=6) — Hard Graph Read: Roots (-3, -1, 2)
   - fields: tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=12 shorts=9 :: p(x)=- x^{3} + 2 x^{2} - 5 x - 6 || (-1)^{3}=-1 || -(-1)=1 || (-1)^{2}=1`
   - `eq_step_pair`: `(-3)\cdot(-1)\cdot 2 =6 || 6=0`

498. **MATH 9.97** (`math-ch9-polynomials.json`, sev=6) — Hard Graph Read: Roots (-2, 1, 4)
   - fields: tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=12 shorts=10 :: p(x)=- x^{3} - 3 x^{2} - 6 x + 8 || 1^{3}=1 || -(1)=-1 || 1^{2}=1`
   - `eq_step_pair`: `(-2)\cdot 1\cdot 4 =-8 || p(0)=-8`

499. **MATH 9.98** (`math-ch9-polynomials.json`, sev=6) — Hard Graph Read: Roots (0, 1, 5)
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=1 :: p(x)=-x(x-1)(x-5) || p(x)=-x^{3}+6x^{2}-5x || p(10)=-10\cdot 9\cdot 5 || -10\cdot 9=-90`
   - `eq_step_cascade`: `len=5 shorts=3 :: p(x)=-x(x-1)(x-5) || p(1)=-1\cdot 0\cdot(-4) || -1\cdot 0=0 || 0\cdot -4=0`

500. **MATH 9.99** (`math-ch9-polynomials.json`, sev=6) — Hard Graph Read: Roots (-1, 2, 3)
   - fields: tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=11 shorts=9 :: p(x)=- x^{3} - 4 x^{2} + x + 6 || 2^{3}=8 || -(8)=-8 || 2^{2}=4`
   - `eq_step_pair`: `(-1)\cdot 2\cdot 3 =-6 || p(0)=-6`

501. **MATH 9.100** (`math-ch9-polynomials.json`, sev=6) — Hard Graph Read: Roots (1, 2, 4)
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=1 :: p(x)=-(x-1)(x-2)(x-4) || p(x)=-x^{3}+7x^{2}-14x+8 || \lim_{x\to+\infty}p(x)=-\infty || p(10)=-(9)(8)(6)`
   - `eq_step_cascade`: `len=12 shorts=10 :: p(x)=- x^{3} - 7 x^{2} + 14 x - 8 || 2^{3}=8 || -(8)=-8 || 2^{2}=4`

502. **MATH 9.101** (`math-ch9-polynomials.json`, sev=6) — Hard Graph Read: Roots (0, 2, 3)
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=6 shorts=2 :: p(x)=-x(x-2)(x-3) || p(x)=-x^{3}+5x^{2}-6x || p(6)=-6\cdot 4\cdot 3 || -6\cdot 4=-24`
   - `eq_step_cascade`: `len=5 shorts=3 :: p(x)=-x(x-2)(x-3) || p(2)=-2\cdot 0\cdot(-1) || -2\cdot 0=0 || 0\cdot -1=0`

503. **MATH 9.102** (`math-ch9-polynomials.json`, sev=6) — Hard Graph Read: Roots (-2, 0, 2)
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=2 :: p(x)=-x(x^{2}-4) || p(x)=-x^{3}+4x || p(x)=x^{3}\left(-1+\frac{4}{x^{2}}\right) || p(5)=-125+20`
   - `eq_step_cascade`: `len=6 shorts=3 :: p(x)=-x(x-2)(x+2) || p(0)=-0\cdot(-2)\cdot 2 || 0\cdot -2=0 || 0\cdot 2=0`

504. **MATH 9.103** (`math-ch9-polynomials.json`, sev=6) — Hard Graph Read: Roots (1, 3, 5)
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=5 shorts=1 :: p(x)=-(x-1)(x-3)(x-5) || p(x)=-x^{3}+9x^{2}-23x+15 || \lim_{x\to+\infty}p(x)=-\infty || p(8)=-(7)(5)(3)`
   - `eq_step_cascade`: `len=12 shorts=10 :: p(x)=- x^{3} - 9 x^{2} + 23 x - 15 || 3^{3}=27 || -(27)=-27 || 3^{2}=9`

505. **MATH 9.107** (`math-ch9-polynomials.json`, sev=6) — Biquadratic Minus a Line
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=1 :: p(x)=x^{2} \left(x^{2} - 4\right) || p(x)=x^{4}-4x^{2} || \ell(x)=x || p(x)-\ell(x)=x^{4}-4x^{2}-x`
   - `eq_step_cascade`: `len=6 shorts=1 :: p(x)=x^{2} \left(x^{2} - 4\right) || p(x)=x^{2}(x^{2}-4) || x^{2}(x^{2}-4)=x^{4}-4x^{2} || p(-x)=(-x)^{4}-4(-x)^{2}`

506. **MATH 9.109** (`math-ch9-polynomials.json`, sev=6) — Square of a Quadratic Minus Itself (Set 1) (variant 58)
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=1 :: p(x)=x^{2} - 2 x + 3 || r(x)=p(x)^{2}-p(x) || r(x)=p(x)\bigl(p(x)-1\bigr) || r=p(p-1)`
   - `eq_step_cascade`: `len=3 shorts=2 :: p(x)=x^{2} - 2 x + 3 || p(0)=3 || r(0)=3^{2}-3`

507. **MATH 9.110** (`math-ch9-polynomials.json`, sev=6) — Even Quartic: Factor Then Read the Shape (Set 1) (variant 59)
   - fields: tactical[0], tactical[1]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_pair`: `p(x)=x^{4}-5x^{2}+4 || p(x)=(x^{2}-4)(x^{2}-1)`
   - `eq_step_cascade`: `len=4 shorts=0 :: p(x)=x^{4}-5x^{2}+4 || p(-x)=(-x)^{4}-5(-x)^{2}+4 || p(-x)=x^{4}-5x^{2}+4 || x^{4}-5x^{2}+4=p(x)`

508. **MATH 9.115** (`math-ch9-polynomials.json`, sev=6) — Square of a Quadratic Minus Itself (Set 3)
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade, eq_step_pair
   - `eq_step_cascade`: `len=4 shorts=1 :: p(x)=x^{2} - 3 x + 5 || r(x)=p(x)^{2}-p(x) || r(x)=p(x)\bigl(p(x)-1\bigr) || r=p(p-1)`
   - `eq_step_cascade`: `len=3 shorts=2 :: p(x)=x^{2} - 3 x + 5 || p(0)=5 || r(0)=25-5`

509. **MATH 12.01** (`math-cases-ch12-probability.json`, sev=4) — A Committee Selection
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=8 shorts=0 :: N(\text{total committees}) = \binom{12}{4} || \binom{12}{4} = \dfrac{12!}{4!(12-4)!} || \dfrac{12!}{4!(8)!} = \dfrac{12 \cdot 11 \cd`
   - `eq_step_cascade`: `len=26 shorts=3 :: N(\text{2 men, 2 women}) = \binom{7}{2} \binom{5}{ || \binom{7}{2} = \dfrac{7!}{2!(7-2)!} || \dfrac{7!}{2!(5)!} = \dfrac{7 \cdot 6}`

510. **MATH 12.04** (`math-cases-ch12-probability.json`, sev=4) — Quality Control Sampling
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=0 :: N = 20 \text{ items in total} || K = 4 \text{ defective items} || n = 5 \text{ items selected} || \binom{N}{n} = \binom{20}{5}`
   - `eq_step_cascade`: `len=6 shorts=0 :: 20 \times 19 = 380 || 380 \times 18 = 6840 || 6840 \times 17 = 116280 || 116280 \times 16 = 1860480`

511. **MATH 12.05** (`math-cases-ch12-probability.json`, sev=4) — Rolling the Dice
   - fields: solution_overview, tactical[0], tactical[1], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: \Omega = k^n || \Omega = 6^5 || \Omega = 7776`
   - `eq_step_cascade`: `len=7 shorts=3 :: \Omega = 6 \times 6 \times 6 \times 6 \times 6 || 6 \times 6 = 36 || 36 \times 6 = 216 || 216 \times 6 = 1296`

512. **MATH 12.06** (`math-cases-ch12-probability.json`, sev=4) — Find the Missing Value
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=2 :: H = \binom{n}{2} || H = \frac{n(n-1)}{2} || \frac{n(n-1)}{2} = 45 || n(n-1) = 90`
   - `eq_step_cascade`: `len=3 shorts=2 :: \frac{n(n-1)}{2} = 45 || n(n-1) = 90 || n = 10`

513. **MATH 12.09** (`math-cases-ch12-probability.json`, sev=4) — A Round Table
   - fields: solution_overview, tactical[0], tactical[1], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: N_L = 8! || N_L = 40320 || N_{L,AB} = 2! \times (n-1)!`
   - `eq_step_cascade`: `len=9 shorts=3 :: (8-1)! = 7! || 7! = 7 \cdot 6 \cdot 5 \cdot 4 \cdot 3 \cdot 2 \cd || 7 \times 6 = 42 || 42 \times 5 = 210`

514. **MATH 12.12** (`math-cases-ch12-probability.json`, sev=4) — Find the Missing Value (12)
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=1 :: n(n-1)(n-2) = 336 || 8(8-1)(8-2) = 8 \times 7 \times 6 || 8 \times 7 = 56 || 56 \times 6 = 336`
   - `eq_step_cascade`: `len=8 shorts=2 :: P(n, k) = \frac{n!}{(n-k)!} || P(8, 4) = \frac{8!}{(8-4)!} || P(8, 4) = \frac{8!}{4!} || P(8, 4) = 8 \times 7 \times 6 \times 5`

515. **MATH 12.17** (`math-cases-ch12-probability.json`, sev=4) — Distributing Candies (Stars and Bars)
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=0 :: N_{\text{total}} = \binom{10+4-1}{4-1} || N_{\text{total}} = \binom{13}{3} || N_{\text{total}} = \frac{13 \times 12 \times 11}{3 || `
   - `eq_step_cascade`: `len=13 shorts=1 :: N_{\text{total}} = \binom{10+4-1}{4-1} || N_{\text{total}} = \binom{13}{3} || \binom{13}{3} = \dfrac{13!}{3!(13-3)!} || \dfrac{13!}`

516. **MATH 12.18** (`math-cases-ch12-probability.json`, sev=4) — Repeated Digits in a PIN
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=0 :: N_{\text{total}} = 10 \times 10 \times 10 \times 1 || 10 \times 10 = 100 || 100 \times 10 = 1000 || 1000 \times 10 = 10000`
   - `eq_step_cascade`: `len=7 shorts=1 :: 10 \times 9 = 90 || 90 \times 8 = 720 || 720 \times 7 = 5040 || N_{\text{all different}} = 5,040`

517. **MATH 12.19** (`math-cases-ch12-probability.json`, sev=4) — The Assessment Poster
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=0 :: \text{Total distinct arrangements} = \frac{N!}{n_A || \text{Total distinct arrangements} = \frac{10!}{1! || \text{Total distinct arr`
   - `eq_step_cascade`: `len=4 shorts=0 :: \text{Number of distinct arrangements} = \frac{10! || \text{Number of distinct arrangements} = \frac{3,6 || \text{Number of distinct`

518. **MATH 12.20** (`math-cases-ch12-probability.json`, sev=4) — The National Lottery
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=0 :: 49 \times 48 = 2352 || 2352 \times 47 = 110544 || 110544 \times 46 = 5085024 || 5085024 \times 45 = 228826080`
   - `eq_step_cascade`: `len=7 shorts=0 :: 49 \times 48 = 2352 || 2352 \times 47 = 110544 || 110544 \times 46 = 5085024 || 5085024 \times 45 = 228826080`

519. **MATH 12.24** (`math-cases-ch12-probability.json`, sev=4) — The Statistics Fair Banner
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=1 :: N = \frac{n!}{n_S! n_T! n_I! n_A! n_C!} || N = \frac{10!}{3! \cdot 3! \cdot 2! \cdot 1! \cdot || N = \frac{3,628,800}{6 \cdot 6 \cdo`
   - `eq_step_cascade`: `len=4 shorts=1 :: N = \frac{10!}{3! \cdot 3! \cdot 2! \cdot 1! \cdot || N = \frac{3,628,800}{6 \cdot 6 \cdot 2 \cdot 1 \cd || N = \frac{3,628,800}{72}`

520. **MATH 12.25** (`math-cases-ch12-probability.json`, sev=4) — Poker Night
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=0 :: 52 \cdot 51 = 2652 || 2652 \cdot 50 = 132600 || 132600 \cdot 49 = 6497400 || 6497400 \cdot 48 = 311875200`
   - `eq_step_cascade`: `len=25 shorts=3 :: N_{\text{full house}} = \binom{13}{1} \binom{4}{3} || \binom{13}{1} = \dfrac{13!}{1!(13-1)!} || \binom{13}{1} = 13 || \binom{4}{3} `

521. **MATH 12.26** (`math-cases-ch12-probability.json`, sev=4) — The Peer-Review Panel
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=0 :: 14 \times 13 = 182 || 182 \times 12 = 2184 || 2184 \times 11 = 24024 || 24024 \times 10 = 240240`
   - `eq_step_cascade`: `len=13 shorts=2 :: \binom{6}{2} = \dfrac{6!}{2!(6-2)!} || \dfrac{6!}{2!(4)!} = \dfrac{6 \cdot 5}{1 \cdot 2} || 6 \times 5 = 30 || \dfrac{30}{2} = 15`

522. **MATH 12.27** (`math-cases-ch12-probability.json`, sev=4) — Chess Club Pairings
   - fields: tactical[0]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=1 :: \binom{10}{2} = \dfrac{10!}{2!(10-2)!} || \dfrac{10!}{2!(8)!} = \dfrac{10 \cdot 9}{1 \cdot 2 || 10 \times 9 = 90 || \dfrac{90}{2} = `

523. **MATH 12.30** (`math-cases-ch12-probability.json`, sev=4) — The Summit LED Banner
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=0 :: N_{\text{total}} = \frac{n!}{n_1! n_2! \cdots n_k! || N_{\text{total}} = \frac{10!}{2! \cdot 1! \cdot 2! || N_{\text{total}} = \frac`
   - `eq_step_cascade`: `len=4 shorts=0 :: N_{\text{total}} = \frac{10!}{2! \cdot 2! \cdot 3! || N_{\text{total}} = \frac{3,628,800}{2 \cdot 2 \cdo || N_{\text{total}} = \frac`

524. **MATH 12.31** (`math-cases-ch12-probability.json`, sev=4) — The Harbour Charity Raffle
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=0 :: 40 \times 39 = 1560 || 1560 \times 38 = 59280 || 59280 \times 37 = 2193360 || 2193360 \times 36 = 78960960`
   - `eq_step_cascade`: `len=11 shorts=1 :: \binom{8}{2} = \dfrac{8!}{2!(8-2)!} || \dfrac{8!}{2!(6)!} = \dfrac{8 \cdot 7}{1 \cdot 2} || 8 \times 7 = 56 || \dfrac{56}{2} = 28`

525. **MATH 12.32** (`math-cases-ch12-probability.json`, sev=4) — The Marathon Medical Tent
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=0 :: 22 \times 21 = 462 || 462 \times 20 = 9240 || 9240 \times 19 = 175560 || 175560 \times 18 = 3160080`
   - `eq_step_cascade`: `len=14 shorts=1 :: \binom{9}{3} = \dfrac{9!}{3!(9-3)!} || \dfrac{9!}{3!(6)!} = \dfrac{9 \cdot 8 \cdot 7}{1 \ || 9 \times 8 = 72 || 72 \times 7 = 504`

526. **MATH 12.38** (`math-cases-ch12-probability.json`, sev=4) — The Twin Freshmen Exam Row
   - fields: tactical[0], tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=12 shorts=1 :: \text{Total arrangements} = 10! || 10! = 10 \times 9 \times 8 \times 7 \times 6 \time || 10 \times 9 = 90 || 90 \times 8 = 720`
   - `eq_step_cascade`: `len=4 shorts=0 :: P(\text{twins adjacent}) = \frac{9! \times 2!}{10! || P(\text{twins adjacent}) = \frac{9! \times 2}{10 \ || P(\text{twins adjacent})`

527. **MATH 12.39** (`math-cases-ch12-probability.json`, sev=4) — The Regional Cup Exhibition
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=0 :: \binom{16}{4} = \dfrac{16!}{4!(16-4)!} || \dfrac{16!}{4!(12)!} = \dfrac{16 \cdot 15 \cdot 14 || 16 \times 15 = 240 || 240 \times 14 `
   - `eq_step_cascade`: `len=7 shorts=0 :: \binom{16}{4} = \dfrac{16!}{4!(16-4)!} || \dfrac{16!}{4!(12)!} = \dfrac{16 \cdot 15 \cdot 14 || 16 \times 15 = 240 || 240 \times 14 `

528. **MATH 12.42** (`math-cases-ch12-probability.json`, sev=4) — Combinatorial Probability 42
   - fields: tactical[0], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=21 shorts=2 :: \binom{18}{4} = \dfrac{18!}{4!(18-4)!} || \dfrac{18!}{4!(14)!} = \dfrac{18 \cdot 17 \cdot 16 || 18 \times 17 = 306 || 306 \times 16`
   - `eq_step_cascade`: `len=19 shorts=1 :: \binom{18}{4} = \dfrac{18!}{4!(18-4)!} || \dfrac{18!}{4!(14)!} = \dfrac{18 \cdot 17 \cdot 16 || 18 \times 17 = 306 || 306 \times 16`

529. **MATH 12.44** (`math-cases-ch12-probability.json`, sev=4) — A market research firm found that 55% of surveyed households subscribe to Streaming Service X, and 40% subscribe to Streaming Service Y
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=18 shorts=2 :: P(X) = 0.55 || P(Y) = 0.40 || P(X \cap Y) = 0.25 || P(X \cup Y) = P(X) + P(Y) - P(X \cap Y)`
   - `eq_step_cascade`: `len=5 shorts=0 :: P(X \cup Y) = P(X) + P(Y) - P(X \cap Y) || P(X \cup Y) = 0.55 + 0.40 - 0.25 || 0.55 + 0.4 = 0.95 || 0.95 - 0.25 = 0.7`

530. **MATH 12.46** (`math-cases-ch12-probability.json`, sev=4) — During a store-wide sale, 42% of transactions redeemed Coupon 1, and 38%
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=2 :: P(C_1) = 0.42 || P(C_2) = 0.38 || P(C_1 \cap C_2) = 0.18 || P(C_1 \cup C_2) = P(C_1) + P(C_2) - P(C_1 \cap C_2`
   - `eq_step_cascade`: `len=5 shorts=0 :: P(C_1 \cup C_2) = P(C_1) + P(C_2) - P(C_1 \cap C_2 || P(C_1 \cup C_2) = 0.42 + 0.38 - 0.18 || 0.42 + 0.38 = 0.8 || 0.8 - 0.18 = 0.62`

531. **MATH 12.49** (`math-cases-ch12-probability.json`, sev=4) — A hospital reviewed patient charts for three risk factors
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=3 :: P(H) = 0.45 || P(D) = 0.25 || P(O) = 0.38 || P(H \cap D) = 0.14 \quad (\text{Hypertension and D`
   - `eq_step_cascade`: `len=12 shorts=0 :: P(H \cup D \cup O) = P(H) + P(D) + P(O) - P(H \cap || P(H \cup D \cup O) = 0.45 + 0.25 + 0.38 - 0.14 - 0 || 0.45 + 0.25 = 0.7 || 0.`

532. **MATH 12.50** (`math-cases-ch12-probability.json`, sev=4) — A retailer analyzed loyalty card ownership among its customers
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=3 :: P(X) = 0.52 || P(Y) = 0.34 || P(Z) = 0.41 || P(X \cap Y) = 0.18`
   - `eq_step_cascade`: `len=7 shorts=0 :: P(X \cup Y \cup Z) = P(X) + P(Y) + P(Z) - (P(X \ca || P(X \cup Y \cup Z) = 0.52 + 0.34 + 0.41 - (0.18 +  || P(X \cup Y \cup Z) = 1.2`

533. **MATH 12.51** (`math-cases-ch12-probability.json`, sev=4) — A factory inspected finished units for three defect types
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=21 shorts=3 :: P(C) = 0.18 || P(D) = 0.22 || P(W) = 0.15 || P(C \cap D) = 0.06`
   - `eq_step_cascade`: `len=6 shorts=0 :: P(C \cup D \cup W) = P(C) + P(D) + P(W) - (P(C \ca || P(C \cup D \cup W) = 0.18 + 0.22 + 0.15 - (0.06 +  || P(C \cup D \cup W) = 0.5`

534. **MATH 12.52** (`math-cases-ch12-probability.json`, sev=4) — A survey asked respondents which of three social media platforms they use
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=3 :: P(P) = 0.60 || P(Q) = 0.48 || P(R) = 0.36 || P(P \cap Q) = 0.28`
   - `eq_step_cascade`: `len=10 shorts=0 :: P(\text{exactly two}) = P(P \cap Q) + P(P \cap R)  || P(\text{exactly two}) = 0.28 + 0.20 + 0.18 - 3(0.1 || P(\text{exactly two}) =`

535. **MATH 12.53** (`math-cases-ch12-probability.json`, sev=4) — An insurance agency reviewed its customers' policies
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=15 shorts=3 :: P(A) = 0.48 || P(H) = 0.38 || P(L) = 0.30 || P(A \cap H) = 0.16`
   - `eq_step_cascade`: `len=6 shorts=0 :: P(A \cup H \cup L) = P(A) + P(H) + P(L) - (P(A \ca || P(A \cup H \cup L) = \Sigma_1 - \Sigma_2 + \Sigma_ || P(A \cup H \cup L) = 1.1`

536. **MATH 12.54** (`math-cases-ch12-probability.json`, sev=4) — A university tracked pass rates across three exams
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=3 :: P(A) = 0.70 || P(B) = 0.55 || P(C) = 0.48 || P(A \cap B) = 0.38`
   - `eq_step_cascade`: `len=6 shorts=0 :: P(A \cup B \cup C) = P(A) + P(B) + P(C) - (P(A \ca || P(A \cup B \cup C) = (0.70 + 0.55 + 0.48) - (0.38  || P(A \cup B \cup C) = 1.7`

537. **MATH 12.55** (`math-cases-ch12-probability.json`, sev=4) — A restaurant surveyed diners about dietary restrictions
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=11 shorts=3 :: P(V) = 0.25 || P(G) = 0.18 || P(D) = 0.15 || P(V \cap G) = 0.08`
   - `eq_step_cascade`: `len=6 shorts=0 :: P(V \cup G \cup D) = P(V) + P(G) + P(D) - (P(V \ca || P(V \cup G \cup D) = 0.25 + 0.18 + 0.15 - (0.08 +  || P(V \cup G \cup D) = 0.5`

538. **MATH 12.56** (`math-cases-ch12-probability.json`, sev=4) — A car dealership reviewed optional features on its lot
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=15 shorts=3 :: P(S) = 0.42 || P(L) = 0.55 || P(N) = 0.48 || P(S \cap L) = 0.25`
   - `eq_step_cascade`: `len=4 shorts=0 :: P(\text{exactly one feature}) = 0.42 + 0.55 + 0.48 || P(\text{exactly one feature}) = 1.45 - 2(0.77) + 0 || P(\text{exactly one feat`

539. **MATH 12.57** (`math-cases-ch12-probability.json`, sev=4) — An online retailer tracked customer behavior
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=15 shorts=6 :: P(A) = 0.55 || P(C) = 0.40 || P(R) = 0.35 || P(A \cap C) = 0.20`
   - `eq_step_cascade`: `len=6 shorts=0 :: P(A \cup C \cup R) = S_1 - S_2 + S_3 || P(A \cup C \cup R) = 1.30 - 0.52 + 0.08 || 1.3 - 0.52 = 0.78 || 0.78 + 0.08 = 0.86`

540. **MATH 12.58** (`math-cases-ch12-probability.json`, sev=4) — Of 2,000 factory units, 700 had Defect A, 440 Defect B, and 360 Defect C
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: N(A) = 700 || N(B) = 440 || N(C) = 360`
   - `eq_step_cascade`: `len=5 shorts=0 :: P(A \cup B \cup C) = S_1 - S_2 + S_3 || P(A \cup B \cup C) = 0.75 - 0.184 + 0.02 || 0.75 - 0.184 = 0.566 || 0.566 + 0.02 = 0.586`

541. **MATH 12.59** (`math-cases-ch12-probability.json`, sev=4) — UI, Performance, and Security rates are 50%, 40%, and 30%
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=12 shorts=3 :: P(U) = 0.50 || P(P) = 0.40 || P(S) = 0.30 || P(U \cap P) = P(P \mid U)P(U)`
   - `eq_step_cascade`: `len=12 shorts=3 :: P(U \cup P \cup S) = P(U) + P(P) + P(S) - P(U \cap || P(U \cup P \cup S) = 0.50 + 0.40 + 0.30 - 0.12 - 0 || 0.5 + 0.4 = 0.9 || 0.9 `

542. **MATH 12.60** (`math-cases-ch12-probability.json`, sev=4) — Product rates are P(A)=55%, P(B)=45%, and P(C)=35%
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=18 shorts=3 :: P(A) = 0.55 || P(B) = 0.45 || P(C) = 0.35 || P(A \cap C) = 0.18`
   - `eq_step_cascade`: `len=8 shorts=1 :: P(A \cup B \cup C) = P(A) + P(B) + P(C) - (P(A \ca || 0.70 = 0.55 + 0.45 + 0.35 - (P(A \cap B) + 0.18 +  || 0.70 = 1.35 - (P(A \cap `

543. **MATH 12.61** (`math-cases-ch12-probability.json`, sev=4) — Of 1,500 servers, Memory, Disk, and Network fault counts were 525, 390, and 285
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=6 :: |M| = 525 || |D| = 390 || |N| = 285 || |M \cap D| = 90`
   - `eq_step_cascade`: `len=6 shorts=0 :: P(M \cup D \cup N) = P(M) + P(D) + P(N) - (P(M \ca || P(M \cup D \cup N) = (0.35 + 0.26 + 0.19) - (0.06  || P(M \cup D \cup N) = 0.8`

544. **MATH 12.62** (`math-cases-ch12-probability.json`, sev=4) — Of 3,000 health-club members, 1,800 attended Yoga, 1,500 Spin, and 1,200
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=2 :: P(Y \cup S \cup P) = P(Y) + P(S) + P(P) - [P(Y \ca || P(Y \cup S \cup P) = S_1 - S_2 + S_3 || P(Y \cup S \cup P) = 1.50 - 0.60 + 0.1`
   - `eq_step_cascade`: `len=7 shorts=2 :: P(\text{exactly one}) = S_1 - 2S_2 + 3S_3 || P(\text{exactly one}) = 1.50 - 2(0.60) + 3(0.10) || P(\text{exactly one}) = 1.50 - 1.20`

545. **MATH 12.63** (`math-cases-ch12-probability.json`, sev=4) — Inclusion-Exclusion Principle
   - fields: solution_overview, tactical[1], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=11 shorts=6 :: |M| = 40 || |P| = 35 || |C| = 30 || |M \cap P| = 15`
   - `eq_step_cascade`: `len=5 shorts=0 :: |\text{Exactly One}| = (|M| + |P| + |C|) - 2(|M \c || |\text{Exactly One}| = (40 + 35 + 30) - 2(15 + 12  || |\text{Exactly One}| = 1`

546. **MATH 12.64** (`math-cases-ch12-probability.json`, sev=4) — Among 200 employees, 90 use App A, 70 App B, and 60 App C
   - fields: solution_overview, tactical[1], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=11 shorts=6 :: |A| = 90 || |B| = 70 || |C| = 60 || |A \cap B| = 30`
   - `eq_step_cascade`: `len=7 shorts=0 :: |\text{exactly two}| = |A \cap B| + |A \cap C| + | || |\text{exactly two}| = 30 + 25 + 20 - 3 \cdot 10 || |\text{exactly two}| = 75 `

547. **MATH 12.65** (`math-cases-ch12-probability.json`, sev=4) — Among 250 students, 120 take Math, 100 Physics, and 90 Chemistry
   - fields: solution_overview, tactical[1], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=11 shorts=8 :: N_M = 120 || N_P = 100 || N_C = 90 || N_{M \cap P} = 50`
   - `eq_step_cascade`: `len=9 shorts=0 :: N_{\text{exactly two}} = (50 - 15) + (40 - 15) + ( || N_{\text{exactly two}} = 35 + 25 + 15 || N_{\text{exactly two}} = 75 || N_{\te`

548. **MATH 12.66** (`math-cases-ch12-probability.json`, sev=4) — Newspaper and TV news survey
   - fields: solution_overview, tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=1 :: N(A \cap B^c) = 15 || N(A \cap B) = 10 || N(A^c \cap B) = 20 || N(A^c \cap B^c) = 5`
   - `eq_step_cascade`: `len=4 shorts=2 :: P(A \cup B) = 0.50 + 0.60 - 0.20 || 0.5 + 0.6 = 1.1 || 1.1 - 0.2 = 0.9 || P(A \cup B) = 0.90`

549. **MATH 12.67** (`math-cases-ch12-probability.json`, sev=4) — Email, SMS, and push notification channels
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=9 shorts=0 :: P(A \cap B \cap C) = 0.04 || P(A \cap B \cap C^c) = 0.07 \quad \text{(A and B,  || P(A \cap B^c \cap C) = 0.05 \quad \text{(A and C,`
   - `eq_step_cascade`: `len=5 shorts=1 :: P(\text{at least one channel}) = 1 - P(\text{none  || P(\text{at least one channel}) = 1 - P(A^c \cap B^ || P(\text{at least one cha`

550. **MATH 12.68** (`math-cases-ch12-probability.json`, sev=4) — Auto-save, dark mode, and cloud sync
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=8 shorts=0 :: P(P \cap Q^c \cap R^c) = 0.15 || P(P^c \cap Q \cap R^c) = 0.10 || P(P^c \cap Q^c \cap R) = 0.08 || P(P \cap Q \cap R^c) = 0.06`
   - `eq_step_cascade`: `len=5 shorts=1 :: P(P^c \cap Q^c \cap R^c) = 0.49 || P(\text{at least one}) = 1 - P(P^c \cap Q^c \cap R || P(\text{at least one}) = 1 - 0.49 || 1 - 0.`

551. **MATH 12.70** (`math-cases-ch12-probability.json`, sev=4) — Health, dental, and vision benefits
   - fields: solution_overview, tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=9 shorts=0 :: P(H \cap D \cap V) = 0.03 || P(H \cap D \cap V^c) = 0.06 || P(H \cap D^c \cap V) = 0.05 || P(H^c \cap D \cap V) = 0.02`
   - `eq_step_cascade`: `len=13 shorts=0 :: P(H \cup D) = 0.03 + 0.06 + 0.05 + 0.02 + 0.12 + 0 || 0.03 + 0.06 = 0.09 || 0.09 + 0.05 = 0.14 || 0.14 + 0.02 = 0.16`

552. **MATH 12.71** (`math-cases-ch12-probability.json`, sev=4) — Soccer, basketball, and tennis at a sports club
   - fields: solution_overview, tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=0 :: N_{\text{exactly one sport}} = 28 + 20 + 18 || N_{\text{exactly one sport}} = 66 || N_{\text{exactly two sports}} = 10 + 7 + 5 || N_`
   - `eq_step_cascade`: `len=5 shorts=0 :: N_{\text{at least one sport}} = 66 + 22 + 5 || N_{\text{at least one sport}} = 93 || N_{\text{none of the sports}} = N - N_{\text{at`

553. **MATH 12.82** (`math-cases-ch12-probability.json`, sev=4) — A grocery store tracks scanning errors by checkout method
   - fields: solution_overview, tactical[1], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=1 :: P(E) = P(E \mid S)P(S) + P(E \mid C)P(C) || P(E) = (0.08)(0.40) + (0.03)(0.60) || P(E) = 0.032 + 0.018 || P(E) = 0.05`
   - `eq_step_cascade`: `len=4 shorts=0 :: P(E \mid S) = \frac{320}{4000} || P(E \mid S) = 0.08 || P(E \mid C) = \frac{180}{6000} || P(E \mid C) = 0.03`

554. **MATH 12.87** (`math-cases-ch12-probability.json`, sev=4) — During Q3, engineers at a software company logged every user session across two
   - fields: solution_overview, tactical[1], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=9 shorts=3 :: N = N_{iOS} + N_{Android} || N = 12{,}500 + 17{,}500 || N = 30{,}000 || N(B) = N(B \cap S_{iOS}) + N(B \cap S_{Android})`
   - `eq_step_cascade`: `len=8 shorts=0 :: P(B \mid S_{Android}) = \frac{N(B \cap S_{Android} || P(B \mid S_{Android}) = \frac{875}{17{,}500} || P(B \mid S_{Android}) = 0.05 |`

555. **MATH 12.88** (`math-cases-ch12-probability.json`, sev=4) — A hospital pharmacy reviewed medication orders processed across two shifts last
   - fields: tactical[1], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=0 :: P(E \mid D) = 0.015 || P(E \mid N) = 0.03 || \frac{P(E \mid N)}{P(E \mid D)} = \frac{0.03}{0.01 || \frac{P(E \mid N)}{P(E \mid D)} =`
   - `eq_step_cascade`: `len=4 shorts=1 :: P(E) = 0.01875 || P(E^c) = 1 - 0.01875 || 1 - 0.01875 = 0.98125 || P(E^c) = 0.98125`

556. **MATH 12.92** (`math-cases-ch12-probability.json`, sev=4) — A logistics company reviewed a month of shipments sent by two methods
   - fields: solution_overview, tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=19 shorts=6 :: N_G = 25\,000 || N_{G \cap L} = 375 || N_A = 15\,000 || N_{A \cap L} = 105`
   - `eq_step_cascade`: `len=4 shorts=1 :: P(L^c) = 1 - P(L) || P(L^c) = 1 - 0.012 || 1 - 0.012 = 0.988 || P(L^c) = 0.988`

557. **MATH 12.96** (`math-cases-ch12-probability.json`, sev=4) — A retailer compiled a quarter's worth of purchase and return data across three
   - fields: solution_overview, tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=9 shorts=1 :: N_{\text{total}} = N_I + N_O + N_M || N_{\text{total}} = 20\,000 + 15\,000 + 5\,000 || N_{\text{total}} = 40\,000 || R_{\text{total}`
   - `eq_step_cascade`: `len=4 shorts=0 :: P(S_O \cup S_M \mid R) = \frac{R_O + R_M}{R_{\text || P(S_O \cup S_M \mid R) = \frac{1\,050 + 550}{2\,40 || P(S_O \cup S_M \mid R) =`

558. **MATH 12.101** (`math-cases-ch12-probability.json`, sev=4) — A manufacturer tracked a year of production and recalls across three plants
   - fields: solution_overview
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=9 shorts=0 :: N_{\text{total}} = N_A + N_B + N_C || N_{\text{total}} = 25{,}000 + 15{,}000 + 10{,}000 || N_{\text{total}} = 50{,}000 || R_{\text{t`

559. **MATH 12.103** (`math-cases-ch12-probability.json`, sev=4) — Two fair six-sided dice are rolled once
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=0 :: P(S \mid O) = \frac{|S \cap O|}{|O|} || S \cap O = \{(1,1), (3,3), (5,5)\} || P(S \mid O) = \frac{3}{9} || P(S \mid O) = \frac{1}{3}`
   - `eq_step_cascade`: `len=4 shorts=0 :: P(A_5 \mid E) = \frac{|A_5 \cap E|}{|E|} || A_5 \cap E = \{(2,5), (4,5), (6,5), (5,2), (5,4),  || P(A_5 \mid E) = \frac{6}{27} || P(`

560. **MATH 12.104** (`math-cases-ch12-probability.json`, sev=4) — Two fair six-sided dice are rolled once
   - fields: tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=0 :: P(O_S \mid S \ge 9) = \frac{N(O_S \cap A)}{N(A)} || P(O_S \mid S \ge 9) = \frac{6}{10} || P(O_S \mid S \ge 9) = 0.6 || P(O_S \mid S `

561. **MATH 12.109** (`math-cases-ch12-probability.json`, sev=4) — A city transit authority reviewed a month of on-time performance across three
   - fields: solution_overview, tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: N_E = 20\,000 || N_L = 15\,000 || N_S = 5\,000`
   - `eq_step_cascade`: `len=4 shorts=0 :: P(E \cup S \mid LT) = \frac{N_{E \cap LT} + N_{S \ || P(E \cup S \mid LT) = \frac{400 + 450}{1\,600} || P(E \cup S \mid LT) = \frac{`

562. **MATH 12.112** (`math-cases-ch12-probability.json`, sev=4) — Discrete Probability Table
   - fields: solution_overview, tactical[0], tactical[1], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=12 shorts=2 :: E[X] = (0)(0.10) + (1)(0.25) + (2)(0.30) + (3)(0.2 || E[X] = 0 + 0.25 + 0.60 + 0.60 + 0.60 || E[X] = 2.05 || E[X^2] = (0^2)(0.10) +`
   - `eq_step_cascade`: `len=7 shorts=2 :: E[X] = (0)(0.10) + (1)(0.25) + (2)(0.30) + (3)(0.2 || E[X] = 0 + 0.25 + 0.60 + 0.60 + 0.60 || 0 + 0.25 = 0.25 || 0.25 + 0.6 = 0.85`

563. **MATH 12.114** (`math-cases-ch12-probability.json`, sev=4) — Startup Profit Scenario
   - fields: solution_overview, tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=9 shorts=0 :: E[X^2] = (-5000)^2(0.20) + (0)^2(0.30) + (10000)^2 || E[X^2] = (25000000)(0.20) + (0)(0.30) + (100000000 || E[X^2] = 5000000 + 0 + 3`
   - `eq_step_cascade`: `len=7 shorts=0 :: \mathrm{Var}(X) = E[X^2] - (E[X])^2 || \mathrm{Var}(X) = 133750000 - (6250)^2 || \mathrm{Var}(X) = 133750000 - 39062500 || 133750000`

564. **MATH 12.117** (`math-cases-ch12-probability.json`, sev=4) — A Vending Machine
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=1 :: \mu = \frac{a+b}{2} || \mu = \frac{180 + 220}{2} || \mu = \frac{400}{2} || \mu = 200`
   - `eq_step_cascade`: `len=5 shorts=0 :: \sigma^2 = \frac{(b-a)^2}{12} || \sigma^2 = \frac{(220 - 180)^2}{12} || \sigma^2 = \frac{(40)^2}{12} || \sigma^2 = \frac{1600}{12}`

565. **MATH 12.120** (`math-cases-ch12-probability.json`, sev=4) — An Investment Portfolio
   - fields: solution_overview, tactical[0], tactical[1], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=0 :: \sigma_P^2 = (0.36)(25) + (0.16)(16) || \sigma_P^2 = 9 + 2.56 || \sigma_P^2 = 11.56 || \sigma_P = \sqrt{11.56}`
   - `eq_step_cascade`: `len=4 shorts=1 :: E[R_P] = w_A E[R_A] + w_B E[R_B] || E[R_P] = 0.6 (8\%) + 0.4 (5\%) || E[R_P] = 4.8\% + 2.0\% || E[R_P] = 6.8\%`

566. **MATH 12.121** (`math-cases-ch12-probability.json`, sev=4) — Standardized Exam Scores
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: \mu = 520 || \sigma = 85 || z = \frac{x - \mu}{\sigma}`
   - `eq_step_cascade`: `len=4 shorts=1 :: z = \frac{x - \mu}{\sigma} || z = \frac{690 - 520}{85} || z = \frac{170}{85} || z = 2`

567. **MATH 12.122** (`math-cases-ch12-probability.json`, sev=4) — Find the Missing Value
   - fields: solution_overview, tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=3 :: 8 = (0)(0.5) + (10)(0.3) + (k)(0.2) || 8 = 0 + 3 + 0.2k || 5 = 0.2k || k = \frac{5}{0.2}`
   - `eq_step_cascade`: `len=5 shorts=3 :: 8 = (0)(0.5) + (10)(0.3) + (k)(0.2) || 8 = 0 + 3 + 0.2k || 5 = 0.2k || k = \frac{5}{0.2}`

568. **MATH 12.128** (`math-cases-ch12-probability.json`, sev=4) — A Lottery Ticket
   - fields: solution_overview, tactical[0], tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=11 shorts=1 :: \mu = (0)(0.94) + (5)(0.05) + (1000)(0.01) || \mu = 0 + 0.25 + 10 || \mu = 10.25 || E[X^2] = (0^2)(0.94) + (5^2)(0.05) + (1000^2)(0`
   - `eq_step_cascade`: `len=5 shorts=2 :: \mu = (0)(0.94) + (5)(0.05) + (1000)(0.01) || \mu = 0 + 0.25 + 10 || 0 + 0.25 = 0.25 || 0.25 + 10 = 10.25`

569. **MATH 12.131** (`math-cases-ch12-probability.json`, sev=4) — A Vending Machine
   - fields: solution_overview, tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=12 shorts=2 :: E[X] = (1)(0.20) + (2)(0.50) + (3)(0.30) || E[X] = 0.20 + 1.00 + 0.90 || E[X] = 2.10 || E[X^2] = (1^2)(0.20) + (2^2)(0.50) + (3^2)(`
   - `eq_step_cascade`: `len=5 shorts=3 :: E[X] = (1)(0.20) + (2)(0.50) + (3)(0.30) || E[X] = 0.20 + 1.00 + 0.90 || 0.2 + 1 = 1.2 || 1.2 + 0.9 = 2.1`

570. **MATH 12.137** (`math-cases-ch12-probability.json`, sev=4) — A Parking Garage
   - fields: solution_overview, tactical[0], tactical[1], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=10 shorts=1 :: E[X^2] = (0^2)(0.10) + (1^2)(0.30) + (2^2)(0.40) + || E[X^2] = (0)(0.10) + (1)(0.30) + (4)(0.40) + (9)(0 || E[X^2] = 0 + 0.30 + 1.6`
   - `eq_step_cascade`: `len=6 shorts=4 :: E[X] = (0)(0.10) + (1)(0.30) + (2)(0.40) + (3)(0.2 || E[X] = 0 + 0.30 + 0.80 + 0.60 || 0 + 0.3 = 0.3 || 0.3 + 0.8 = 1.1`

571. **MATH 12.143** (`math-cases-ch12-probability.json`, sev=4) — Chebyshev's Inequality
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: k \cdot 5 = 10 || k = \frac{10}{5} || k = 2`
   - `eq_step_cascade`: `len=3 shorts=2 :: k \cdot 5 = 5 || k = \frac{5}{5} || k = 1`

572. **MATH 12.147** (`math-cases-ch12-probability.json`, sev=4) — A Charity Raffle (Unknown Probabilities)
   - fields: solution_overview, tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=5 :: 40 = (0 \cdot p) + (50 \cdot q) + (250 \cdot 0.10) || 40 = 0 + 50q + 25 || 15 = 50q || q = \frac{15}{50}`
   - `eq_step_cascade`: `len=10 shorts=2 :: E[X^2] = (0^2 \cdot 0.60) + (50^2 \cdot 0.30) + (2 || E[X^2] = 0 + (2500 \cdot 0.30) + (62500 \cdot 0.10 || E[X^2] = 0 + 750 + 6250`

573. **MATH 12.155** (`math-cases-ch12-probability.json`, sev=4) — Escalated Support Calls
   - fields: solution_overview
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=14 shorts=4 :: P(A_1) = 0.45 || P(A_2) = 0.25 || P(A_3) = 0.30 || P(E \mid A_1) = 0.08`

574. **MATH 12.161** (`math-cases-ch12-probability.json`, sev=4) — Burnt Loaves by Oven
   - fields: solution_overview
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=13 shorts=4 :: P(O_1) = 0.45 || P(O_2) = 0.35 || P(O_3) = 0.20 || P(B \mid O_1) = 0.02`

575. **MATH 12.176** (`math-cases-ch12-probability.json`, sev=4) — Misprints by Printer
   - fields: solution_overview
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=1 :: P(D) = \frac{1}{4} (0.20 + 0.25 + 0.15 + 0.25) || P(D) = \frac{1}{4} (0.85) || P(D) = 0.2125 || P(P_i \mid D) = \frac{P(D \mid P_i) `

576. **MATH 12.195** (`math-cases-ch12-probability.json`, sev=4) — Face Masks That Failed the Filtration Test
   - fields: solution_overview
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=1 :: P(F) = P(F|X)P(X) + P(F|Y)P(Y) || P(F) = (0.02)(0.64) + (0.06)(0.36) || P(F) = 0.0128 + 0.0216 || P(F) = 0.0344`

577. **MATH 12.196** (`math-cases-ch12-probability.json`, sev=4) — Underweight Flour Sacks from Two Mills
   - fields: solution_overview
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=1 :: P(U) = P(U \mid N)P(N) + P(U \mid R)P(R) || P(U) = (0.04)(0.6) + (0.09)(0.4) || P(U) = 0.024 + 0.036 || P(U) = 0.06`

578. **MATH 12.197** (`math-cases-ch12-probability.json`, sev=4) — Aircraft Repairs Across Two Fleets
   - fields: solution_overview, tactical[1], tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=0 :: P(R) = P(R \mid F) P(F) + P(R \mid A) P(A) || P(R) = (0.08) \left(\frac{5}{9}\right) + (0.15) \l || P(R) = \frac{0.40}{9} + \frac{0.`
   - `eq_step_cascade`: `len=4 shorts=0 :: \text{Number of Falconix repairs} = 50 \times 0.08 || 50 \times 0.08 = 4 || \text{Number of Aerotown repairs} = 40 \times 0.15 || 40`

579. **MATH 12.198** (`math-cases-ch12-probability.json`, sev=4) — Defective Sheets from Two Paper Vendors
   - fields: solution_overview, tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=1 :: P(D \mid R) = 0.03 || P(D \mid S) = 0.05 || P(D) = P(D \mid R)P(R) + P(D \mid S)P(S) || P(D) = (0.03)(0.625) + (0.05)(0.375)`
   - `eq_step_cascade`: `len=4 shorts=0 :: P(R \mid D) = \frac{P(D \mid R)P(R)}{P(D)} || P(R \mid D) = \frac{(0.03)(0.625)}{0.0375} || P(R \mid D) = \frac{0.01875}{0.0375} || `

580. **MATH 13.03** (`math-cases-ch13-binomial.json`, sev=4) — Factory Batch Certification
   - fields: tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=0 :: \binom{20}{18} = \dfrac{20!}{18!(20-18)!} || \dfrac{20!}{18!(2)!} = \dfrac{20 \cdot 19}{1 \cdot || 20 \cdot 19 = 380 || \dfrac{380}{`
   - `eq_step_cascade`: `len=4 shorts=0 :: 0.25 \times 0.25 = 0.0625 || (0.25)^{2} = 0.0625 || 190 \times 0.005637710114 = 1.071164921595 || 1.071164921595 \times 0.0625 = 0.0`

581. **MATH 13.04** (`math-cases-ch13-binomial.json`, sev=4) — First-Contact Resolutions
   - fields: tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=0 :: \binom{15}{13} = \dfrac{15!}{13!(15-13)!} || \dfrac{15!}{13!(2)!} = \dfrac{15 \cdot 14}{1 \cdot || 15 \cdot 14 = 210 || \dfrac{210}{`
   - `eq_step_cascade`: `len=4 shorts=0 :: 0.4 \times 0.4 = 0.16 || (0.4)^{2} = 0.16 || 105 \times 0.001306069402 = 0.137137287168 || 0.137137287168 \times 0.16 = 0.0219419659`

582. **MATH 13.05** (`math-cases-ch13-binomial.json`, sev=4) — Seed Germination Trays
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=0 :: \binom{12}{10} = \dfrac{12!}{10!(12-10)!} || \dfrac{12!}{10!(2)!} = \dfrac{12 \cdot 11}{1 \cdot || 12 \cdot 11 = 132 || \dfrac{132}{`
   - `eq_step_cascade`: `len=10 shorts=0 :: 0.4 \times 0.4 = 0.16 || 0.16 \times 0.4 = 0.064 || 0.064 \times 0.4 = 0.0256 || 0.0256 \times 0.4 = 0.01024`

583. **MATH 13.06** (`math-cases-ch13-binomial.json`, sev=4) — Airport Security Audit
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=0 :: \binom{25}{23} = \dfrac{25!}{23!(25-23)!} || \dfrac{25!}{23!(2)!} = \dfrac{25 \cdot 24}{1 \cdot || 25 \cdot 24 = 600 || \dfrac{600}{`
   - `eq_step_cascade`: `len=4 shorts=0 :: 0.3 \times 0.3 = 0.09 || (0.3)^{2} = 0.09 || 300 \times 0.000273687473 = 0.08210624202 || 0.08210624202 \times 0.09 = 0.007389561782`

584. **MATH 13.08** (`math-cases-ch13-binomial.json`, sev=4) — Restaurant Satisfaction Survey
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=0 :: \binom{14}{11} = \dfrac{14!}{11!(14-11)!} || \dfrac{14!}{11!(3)!} = \dfrac{14 \cdot 13 \cdot 12 || 14 \cdot 13 = 182 || 182 \cdot 12`
   - `eq_step_cascade`: `len=5 shorts=0 :: 0.5 \times 0.5 = 0.25 || 0.25 \times 0.5 = 0.125 || (0.5)^{3} = 0.125 || 364 \times 0.00048828125 = 0.177734375`

585. **MATH 13.09** (`math-cases-ch13-binomial.json`, sev=4) — Phishing Awareness Test
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=0 :: \binom{18}{16} = \dfrac{18!}{16!(18-16)!} || \dfrac{18!}{16!(2)!} = \dfrac{18 \cdot 17}{1 \cdot || 18 \cdot 17 = 306 || \dfrac{306}{`
   - `eq_step_cascade`: `len=4 shorts=0 :: 0.55 \times 0.55 = 0.3025 || (0.55)^{2} = 0.3025 || 153 \times 2.827484 \times 10^{-6} = 0.00043260511 || 0.000432605116 \times 0.30`

586. **MATH 13.11** (`math-cases-ch13-binomial.json`, sev=4) — Manufacturing Unit Audit
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=0 :: \binom{20}{17} = \dfrac{20!}{17!(20-17)!} || \dfrac{20!}{17!(3)!} = \dfrac{20 \cdot 19 \cdot 18 || 20 \cdot 19 = 380 || 380 \cdot 18`
   - `eq_step_cascade`: `len=5 shorts=0 :: 0.45 \times 0.45 = 0.2025 || 0.2025 \times 0.45 = 0.091125 || (0.45)^{3} = 0.091125 || 1140 \times 3.856255 \times 10^{-5} = 0.04396`

587. **MATH 13.12** (`math-cases-ch13-binomial.json`, sev=4) — Recorded Call Review
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=0 :: \binom{16}{14} = \dfrac{16!}{14!(16-14)!} || \dfrac{16!}{14!(2)!} = \dfrac{16 \cdot 15}{1 \cdot || 16 \cdot 15 = 240 || \dfrac{240}{`
   - `eq_step_cascade`: `len=4 shorts=0 :: 0.4 \times 0.4 = 0.16 || (0.4)^{2} = 0.16 || 120 \times 0.000783641641 = 0.094036996915 || 0.094036996915 \times 0.16 = 0.0150459195`

588. **MATH 13.13** (`math-cases-ch13-binomial.json`, sev=4) — Typing Accuracy Test
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=0 :: \binom{12}{9} = \dfrac{12!}{9!(12-9)!} || \dfrac{12!}{9!(3)!} = \dfrac{12 \cdot 11 \cdot 10} || 12 \cdot 11 = 132 || 132 \cdot 10 = `
   - `eq_step_cascade`: `len=9 shorts=0 :: 0.5 \times 0.5 = 0.25 || 0.25 \times 0.5 = 0.125 || 0.125 \times 0.5 = 0.0625 || 0.0625 \times 0.5 = 0.03125`

589. **MATH 13.14** (`math-cases-ch13-binomial.json`, sev=4) — Cybersecurity Attack Drill
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=0 :: \binom{22}{19} = \dfrac{22!}{19!(22-19)!} || \dfrac{22!}{19!(3)!} = \dfrac{22 \cdot 21 \cdot 20 || 22 \cdot 21 = 462 || 462 \cdot 20`
   - `eq_step_cascade`: `len=5 shorts=0 :: 0.6 \times 0.6 = 0.36 || 0.36 \times 0.6 = 0.216 || (0.6)^{3} = 0.216 || 1540 \times 2.748779 \times 10^{-8} = 4.23312 \tim`

590. **MATH 13.16** (`math-cases-ch13-binomial.json`, sev=4) — Diagnostic Kit Certification
   - fields: tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=0 :: \binom{15}{13} = \dfrac{15!}{13!(15-13)!} || \dfrac{15!}{13!(2)!} = \dfrac{15 \cdot 14}{1 \cdot || 15 \cdot 14 = 210 || \dfrac{210}{`
   - `eq_step_cascade`: `len=4 shorts=0 :: 0.35 \times 0.35 = 0.1225 || (0.35)^{2} = 0.1225 || 105 \times 0.003697205891 = 0.388206618557 || 0.388206618557 \times 0.1225 = 0.0`

591. **MATH 13.17** (`math-cases-ch13-binomial.json`, sev=4) — Production Line Batches
   - fields: tactical[0], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=1 :: \binom{10}{8} = \dfrac{10!}{8!(10-8)!} || \dfrac{10!}{8!(2)!} = \dfrac{10 \cdot 9}{1 \cdot 2 || 10 \cdot 9 = 90 || \dfrac{90}{2} = 4`
   - `eq_step_cascade`: `len=6 shorts=1 :: E[X] = np || E[A] = 10 \cdot 0.45 || 10 \times 0.45 = 4.5 || E[B] = 10 \cdot 0.85`

592. **MATH 13.19** (`math-cases-ch13-binomial.json`, sev=4) — Practice Exam Scores
   - fields: tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=11 shorts=0 :: 20 \cdot 19 = 380 || 380 \cdot 18 = 6840 || 6840 \cdot 17 = 116280 || 116280 \cdot 16 = 1860480`
   - `eq_step_cascade`: `len=12 shorts=0 :: 0.5 \times 0.5 = 0.25 || 0.25 \times 0.5 = 0.125 || 0.125 \times 0.5 = 0.0625 || 0.0625 \times 0.5 = 0.03125`

593. **MATH 13.20** (`math-cases-ch13-binomial.json`, sev=4) — Surgical Success Rates
   - fields: tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=0 :: \binom{14}{12} = \dfrac{14!}{12!(14-12)!} || \dfrac{14!}{12!(2)!} = \dfrac{14 \cdot 13}{1 \cdot || 14 \cdot 13 = 182 || \dfrac{182}{`
   - `eq_step_cascade`: `len=4 shorts=0 :: 0.25 \times 0.25 = 0.0625 || (0.25)^{2} = 0.0625 || 91 \times 0.031676352024 = 2.882548034191 || 2.882548034191 \times 0.0625 = 0.18`

594. **MATH 13.21** (`math-cases-ch13-binomial.json`, sev=4) — Defect-Free Factory Batches
   - fields: tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=0 :: \binom{18}{17} = \dfrac{18!}{17!(18-17)!} || \binom{18}{17} = 18 || (0.72)^{17} = 0.003755367464 || (0.28)^{1} = 0.28`
   - `eq_step_cascade`: `len=5 shorts=1 :: \binom{18}{18} = 1 || (0.72)^{18} = 0.002703864574 || (0.28)^{0} = 1 || 1 \times 0.002703864574 = 0.002703864574`

595. **MATH 13.22** (`math-cases-ch13-binomial.json`, sev=4) — Dual Quality Checks
   - fields: tactical[0], tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(A) = 30 \cdot 0.15 \cdot 0.85 || 30 \times 0.15 = 4.5 || 4.5 \times 0.85 = 3.825`
   - `eq_step_cascade`: `len=5 shorts=1 :: E[X] = np || E[A] = 30 \cdot 0.15 || 30 \times 0.15 = 4.5 || E[B] = 30 \cdot 0.85`

596. **MATH 13.24** (`math-cases-ch13-binomial.json`, sev=4) — Team Trial Successes
   - fields: tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=9 shorts=0 :: 16 \cdot 15 = 240 || 240 \cdot 14 = 3360 || 3360 \cdot 13 = 43680 || 43680 \cdot 12 = 524160`
   - `eq_step_cascade`: `len=7 shorts=1 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(A) = 16 \cdot 0.5 \cdot 0.5 || 16 \times 0.5 = 8 || 8 \times 0.5 = 4`

597. **MATH 13.26** (`math-cases-ch13-binomial.json`, sev=4) — Advanced Factory Inspection
   - fields: tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=0 :: \binom{22}{19} = \dfrac{22!}{19!(22-19)!} || \dfrac{22!}{19!(3)!} = \dfrac{22 \cdot 21 \cdot 20 || 22 \cdot 21 = 462 || 462 \cdot 20`
   - `eq_step_cascade`: `len=5 shorts=0 :: 0.35 \times 0.35 = 0.1225 || 0.1225 \times 0.35 = 0.042875 || (0.35)^{3} = 0.042875 || 1540 \times 0.000278839167 = 0.429412316738`

598. **MATH 13.27** (`math-cases-ch13-binomial.json`, sev=4) — Dual Inspection Flags
   - fields: tactical[0], tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(A) = 35 \cdot 0.22 \cdot 0.78 || 35 \times 0.22 = 7.7 || 7.7 \times 0.78 = 6.006`
   - `eq_step_cascade`: `len=6 shorts=1 :: E[X] = np || E[A] = 35 \cdot 0.22 || 35 \times 0.22 = 7.7 || E[B] = 35 \cdot 0.78`

599. **MATH 13.29** (`math-cases-ch13-binomial.json`, sev=4) — Extended Team Trials
   - fields: tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=10 shorts=0 :: 20 \cdot 19 = 380 || 380 \cdot 18 = 6840 || 6840 \cdot 17 = 116280 || 116280 \cdot 16 = 1860480`
   - `eq_step_cascade`: `len=7 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(A) = 20 \cdot 0.45 \cdot 0.55 || 20 \times 0.45 = 9 || 9 \times 0.55 = 4.95`

600. **MATH 13.31** (`math-cases-ch13-binomial.json`, sev=4) — Support Queue Tickets
   - fields: tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=8 shorts=0 :: \binom{28}{24} = \dfrac{28!}{24!(28-24)!} || \dfrac{28!}{24!(4)!} = \dfrac{28 \cdot 27 \cdot 26 || 28 \cdot 27 = 756 || 756 \cdot 26`
   - `eq_step_cascade`: `len=6 shorts=0 :: 0.22 \times 0.22 = 0.0484 || 0.0484 \times 0.22 = 0.010648 || 0.010648 \times 0.22 = 0.00234256 || (0.22)^{4} = 0.00234256`

601. **MATH 13.34** (`math-cases-ch13-binomial.json`, sev=4) — Hourly Production Units
   - fields: tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=1 :: E[X] = np || E[A] = 12 \cdot 0.65 || 12 \times 0.65 = 7.8 || E[B] = 18 \cdot 0.8`

602. **MATH 13.35** (`math-cases-ch13-binomial.json`, sev=4) — Auditor C Compliance
   - fields: tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=0 :: E[C] = 45 \cdot 0.60 || 45 \times 0.6 = 27 || E[D] = 40 \cdot 0.45 || 40 \times 0.45 = 18`
   - `eq_step_cascade`: `len=7 shorts=0 :: \mathrm{Var}(C) = 45 \cdot 0.60 \cdot 0.40 || 45 \times 0.6 = 27 || 27 \times 0.4 = 10.8 || \mathrm{Var}(D) = 40 \cdot 0.45 \cdot 0.`

603. **MATH 13.36** (`math-cases-ch13-binomial.json`, sev=4) — Low-Yield Factory Batches
   - fields: tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=0 :: \binom{17}{15} = \dfrac{17!}{15!(17-15)!} || \dfrac{17!}{15!(2)!} = \dfrac{17 \cdot 16}{1 \cdot || 17 \cdot 16 = 272 || \dfrac{272}{`
   - `eq_step_cascade`: `len=4 shorts=0 :: 0.57 \times 0.57 = 0.3249 || (0.57)^{2} = 0.3249 || 136 \times 3.17707 \times 10^{-6} = 0.00043208157 || 0.00043208157 \times 0.3249`

604. **MATH 13.37** (`math-cases-ch13-binomial.json`, sev=4) — Component Flag Checks
   - fields: tactical[0], tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(A) = 23 \cdot 0.34 \cdot 0.66 || 23 \times 0.34 = 7.82 || 7.82 \times 0.66 = 5.1612`
   - `eq_step_cascade`: `len=6 shorts=1 :: E[X] = np || E[A] = 23 \cdot 0.34 || 23 \times 0.34 = 7.82 || E[B] = 23 \cdot 0.66`

605. **MATH 13.39** (`math-cases-ch13-binomial.json`, sev=4) — Twenty-Three Trial Teams
   - fields: tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=9 shorts=0 :: 23 \cdot 22 = 506 || 506 \cdot 21 = 10626 || 10626 \cdot 20 = 212520 || 212520 \cdot 19 = 4037880`
   - `eq_step_cascade`: `len=7 shorts=0 :: \mathrm{Var}(X) = np(1-p) || \mathrm{Var}(A) = 23 \cdot 0.37 \cdot 0.63 || 23 \times 0.37 = 8.51 || 8.51 \times 0.63 = 5.3613`

606. **MATH 13.40** (`math-cases-ch13-binomial.json`, sev=4) — Auditor E Threshold
   - fields: tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=0 :: \mathrm{Var}(E) = 53 \cdot 0.43 \cdot 0.57 || 53 \times 0.43 = 22.79 || 22.79 \times 0.57 = 12.9903 || \mathrm{Var}(F) = 31 \cdot 0.`

607. **MATH 13.41** (`math-cases-ch13-binomial.json`, sev=4) — Rare Component Failures
   - fields: tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=0 :: \mathrm{Var}(A) = 2500 \cdot 0.0012 \cdot 0.9988 || 2500 \times 0.0012 = 3 || 3 \times 0.9988 = 2.9964 || \mathrm{Var}(B) = 6000 \cd`

608. **MATH 13.42** (`math-cases-ch13-binomial.json`, sev=4) — Mutation Type Rates
   - fields: tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=0 :: \mathrm{Var}(1) = 5000 \cdot 0.0006 \cdot 0.9994 || 5000 \times 0.0006 = 3 || 3 \times 0.9994 = 2.9982 || \mathrm{Var}(2) = 60 \cdot`

609. **MATH 13.46** (`math-cases-ch13-binomial.json`, sev=4) — Bakery Quality Control
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=0 :: \binom{18}{15} = \dfrac{18!}{15!(18-15)!} || \dfrac{18!}{15!(3)!} = \dfrac{18 \cdot 17 \cdot 16 || 18 \cdot 17 = 306 || 306 \cdot 16`
   - `eq_step_cascade`: `len=5 shorts=0 :: 0.55 \times 0.55 = 0.3025 || 0.3025 \times 0.55 = 0.166375 || (0.55)^{3} = 0.166375 || 816 \times 6.283299 \times 10^{-6} = 0.005127`

610. **MATH 13.47** (`math-cases-ch13-binomial.json`, sev=4) — Automated Test Cases
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=0 :: \binom{25}{22} = \dfrac{25!}{22!(25-22)!} || \dfrac{25!}{22!(3)!} = \dfrac{25 \cdot 24 \cdot 23 || 25 \cdot 24 = 600 || 600 \cdot 23`
   - `eq_step_cascade`: `len=5 shorts=0 :: 0.65 \times 0.65 = 0.4225 || 0.4225 \times 0.65 = 0.274625 || (0.65)^{3} = 0.274625 || 2300 \times 0 = 2.144 \times 10^{-7}`

611. **MATH 13.49** (`math-cases-ch13-binomial.json`, sev=4) — Customer Email Resolutions
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=0 :: \binom{14}{12} = \dfrac{14!}{12!(14-12)!} || \dfrac{14!}{12!(2)!} = \dfrac{14 \cdot 13}{1 \cdot || 14 \cdot 13 = 182 || \dfrac{182}{`
   - `eq_step_cascade`: `len=4 shorts=0 :: 0.5 \times 0.5 = 0.25 || (0.5)^{2} = 0.25 || 91 \times 0.000244140625 = 0.022216796875 || 0.022216796875 \times 0.25 = 0.00555419921`

612. **MATH 13.50** (`math-cases-ch13-binomial.json`, sev=4) — Diagnostic Scan Review
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=0 :: \binom{30}{27} = \dfrac{30!}{27!(30-27)!} || \dfrac{30!}{27!(3)!} = \dfrac{30 \cdot 29 \cdot 28 || 30 \cdot 29 = 870 || 870 \cdot 28`
   - `eq_step_cascade`: `len=5 shorts=0 :: 0.35 \times 0.35 = 0.1225 || 0.1225 \times 0.35 = 0.042875 || (0.35)^{3} = 0.042875 || 4060 \times 8.885065 \times 10^{-6} = 0.03607`

613. **MATH 13.51** (`math-cases-ch13-binomial.json`, sev=4) — Airport Shift Screening
   - fields: tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=8 shorts=0 :: \binom{28}{24} = \dfrac{28!}{24!(28-24)!} || \dfrac{28!}{24!(4)!} = \dfrac{28 \cdot 27 \cdot 26 || 28 \cdot 27 = 756 || 756 \cdot 26`
   - `eq_step_cascade`: `len=6 shorts=0 :: 0.58 \times 0.58 = 0.3364 || 0.3364 \times 0.58 = 0.195112 || 0.195112 \times 0.58 = 0.11316496 || (0.58)^{4} = 0.11316496`

614. **MATH 13.52** (`math-cases-ch13-binomial.json`, sev=4) — Vaccine Antibody Classification
   - fields: tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=0 :: 35 \cdot 34 = 1190 || 1190 \cdot 33 = 39270 || 39270 \cdot 32 = 1256640 || 1256640 \cdot 31 = 38955840`
   - `eq_step_cascade`: `len=7 shorts=0 :: 0.62 \times 0.62 = 0.3844 || 0.3844 \times 0.62 = 0.238328 || 0.238328 \times 0.62 = 0.14776336 || 0.14776336 \times 0.62 = 0.091613`

615. **MATH 13.53** (`math-cases-ch13-binomial.json`, sev=4) — Assembly Line Defect Inspection
   - fields: tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=8 shorts=0 :: \binom{24}{20} = \dfrac{24!}{20!(24-20)!} || \dfrac{24!}{20!(4)!} = \dfrac{24 \cdot 23 \cdot 22 || 24 \cdot 23 = 552 || 552 \cdot 22`
   - `eq_step_cascade`: `len=6 shorts=0 :: 0.53 \times 0.53 = 0.2809 || 0.2809 \times 0.53 = 0.148877 || 0.148877 \times 0.53 = 0.07890481 || (0.53)^{4} = 0.07890481`

616. **MATH 13.54** (`math-cases-ch13-binomial.json`, sev=4) — Essay Grading Accuracy
   - fields: tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=0 :: \binom{20}{17} = \dfrac{20!}{17!(20-17)!} || \dfrac{20!}{17!(3)!} = \dfrac{20 \cdot 19 \cdot 18 || 20 \cdot 19 = 380 || 380 \cdot 18`
   - `eq_step_cascade`: `len=5 shorts=0 :: 0.48 \times 0.48 = 0.2304 || 0.2304 \times 0.48 = 0.110592 || (0.48)^{3} = 0.110592 || 1140 \times 1.48613 \times 10^{-5} = 0.016941`

617. **MATH 13.55** (`math-cases-ch13-binomial.json`, sev=4) — Air Traffic Control Simulator
   - fields: tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=0 :: 32 \cdot 31 = 992 || 992 \cdot 30 = 29760 || 29760 \cdot 29 = 863040 || 863040 \cdot 28 = 24165120`
   - `eq_step_cascade`: `len=7 shorts=0 :: 0.56 \times 0.56 = 0.3136 || 0.3136 \times 0.56 = 0.175616 || 0.175616 \times 0.56 = 0.09834496 || 0.09834496 \times 0.56 = 0.055073`

618. **MATH 1.109** (`math-ch1-exam.json`, sev=4) — Exam-style tasks - 1
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=1 :: q\rightarrow r=T\rightarrow F || T\rightarrow F=F || p\rightarrow(q\rightarrow r)=T\rightarrow F || p\wedge q=T\wedge T`
   - `eq_step_cascade`: `len=5 shorts=5 :: 1+5=6 || 2+4=6 || 3+3=6 || 4+2=6`

619. **MATH 1.110** (`math-ch1-exam.json`, sev=4) — Exam-style tasks - 2
   - fields: tactical[0], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=4 :: 52+41=93 || 93-18=75 || |L\cup D|=75 || 90-75=15`
   - `eq_step_cascade`: `len=3 shorts=3 :: 8-1=7 || 7-2=5 || 2^{5}=32`

620. **MATH 1.111** (`math-ch1-exam.json`, sev=4) — Exam-style tasks - 3
   - fields: tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: m=n+1 || m-n=(n+1)-n || (n+1)-n=1`

621. **MATH 1.112** (`math-ch1-exam.json`, sev=4) — Exam-style tasks - 4
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=2 :: |\mathcal{P}(X)|=2^{3} || 2^{3}=8 || |\mathcal{P}(\mathcal{P}(X))|=2^{8} || 2^{8}=256`
   - `eq_step_cascade`: `len=6 shorts=6 :: 46+39=85 || 85+31=116 || 116-17=99 || 99-12=87`

622. **MATH 1.116** (`math-ch1-exam.json`, sev=4) — Exam-style tasks - 8
   - fields: tactical[0], tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: x=0 || x+y=0+y || 0+y=y`
   - `eq_step_cascade`: `len=6 shorts=6 :: |A|=70 || |B|=50 || |A\cap B|=10 || 70+50=120`

623. **MATH 1.120** (`math-ch1-exam.json`, sev=4) — Exam-style tasks - 12
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=7 :: 105+92=197 || 197+80=277 || 277-48=229 || 229-41=188`
   - `eq_step_cascade`: `len=3 shorts=3 :: 105-48=57 || 57-41=16 || 16+20=36`

624. **MATH 1.123** (`math-ch1-exam.json`, sev=4) — Exam-style tasks - 15
   - fields: tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=6 :: |C|=4 || |E|=5 || |C\cap E|=2 || 2\cdot 2=4`

625. **MATH 1.124** (`math-ch1-exam.json`, sev=4) — Exam-style tasks - 16
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=7 :: 138+124=262 || 262+96=358 || 358-68=290 || 290-52=238`
   - `eq_step_cascade`: `len=11 shorts=11 :: 138-68=70 || 70-52=18 || 18+28=46 || 124-68=56`

626. **MATH 1.128** (`math-ch1-exam.json`, sev=4) — Exam-style tasks - 20
   - fields: tactical[0], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=6 :: 170+145=315 || 315+130=445 || 445-80=365 || 365-72=293`
   - `eq_step_cascade`: `len=5 shorts=5 :: 80-35=45 || 72-35=37 || 61-35=26 || 45+37=82`

627. **MATH 10.1.1** (`math-ch10-exp-log.json`, sev=4) — Continuous force versus discrete compounding — letter rates
   - fields: tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=3 :: P(T) = 2P_0 || P_0 e^{kT} = 2P_0 || e^{kT} = 2 || kT = \ln 2`

628. **MATH 10.1.2** (`math-ch10-exp-log.json`, sev=4) — Recovering continuous force from an exact sample table
   - fields: tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=1 :: P(0) = P_0 || P(1) = P_0 e^{k} || \frac{P(1)}{P(0)} = e^{k} || k = \ln\frac{P(1)}{P(0)}`

629. **MATH 10.1.5** (`math-ch10-exp-log.json`, sev=4) — Rebuild $P(t)=P_0 e^{kt}$ from a doubling time
   - fields: tactical[0]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=2 :: P_0 e^{kT} = 2P_0 || e^{kT} = 2 || kT = \ln 2 || k = \frac{\ln 2}{T}`

630. **MATH 10.1.16** (`math-ch10-exp-log.json`, sev=4) — Rewriting $a^{t}$ as continuous force $\ln a$
   - fields: tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: e^{T\ln a} = 2 || T\ln a = \ln 2 || T = \frac{\ln 2}{\ln a}`

631. **MATH 10.1.25** (`math-ch10-exp-log.json`, sev=4) — Rebuild decay from a lettered half-life
   - fields: tactical[0]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=1 :: m(H) = \tfrac12 m_0 || m_0 e^{kH} = \tfrac12 m_0 || e^{kH} = \tfrac12 || kH = -\ln 2`

632. **MATH 10.2.2** (`math-ch10-exp-log.json`, sev=4) — Change-of-base identity in a verification table
   - fields: tactical[0], tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=2 :: \log_{2}8 = \frac{\ln 8}{\ln 2} || \log_{2}(2^{3}) = 3 || 2^{3}=8 || \log_{2}8=3`
   - `eq_step_cascade`: `len=6 shorts=4 :: \log_{3}9 = \frac{\ln 9}{\ln 3} || 9=3^{2} || 9=9 || \log_{3}(3^{2}) = 2`

633. **MATH 10.2.16** (`math-ch10-exp-log.json`, sev=4) — Triple nested logarithm: stacking domain conditions
   - fields: tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: 65536=2^{16} || 65536=65536 || \log_{2}65536 = 16`

634. **MATH 10.2.24** (`math-ch10-exp-log.json`, sev=4) — Parametric quadratic after the substitution $u=\log_{b}x$
   - fields: tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=4 :: \log_{b}x = 2 || x = b^{2} || \log_{b}x = 3 || x = b^{3}`

635. **MATH 10.2.35** (`math-ch10-exp-log.json`, sev=4) — Rebuild base from two graph points
   - fields: tactical[0]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: 8=2^{3} || 8=8 || \log_{b}8=\log_{b}(2^{3})`

636. **MATH 10.2.43** (`math-ch10-exp-log.json`, sev=4) — Symbolic substitution preparing a quadratic in $u=\ln x$
   - fields: tactical[1], tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=4 :: u-2 = 0 || u = 2 || u+1 = 0 || u = -1`
   - `eq_step_cascade`: `len=4 shorts=4 :: u = 2 || x = e^{2} || u = -1 || x = e^{-1}`

637. **MATH 10.3.7** (`math-ch10-exp-log.json`, sev=4) — Nested — log constraints on an exponential hitting clock
   - fields: tactical[0], tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: \ln P_0 = 3 || P_0 = e^{3} || e^{\ln P_0} = e^{3}`
   - `eq_step_cascade`: `len=3 shorts=2 :: \ln k = -2 || k = e^{-2} || e^{\ln k} = e^{-2}`

638. **MATH 10.3.14** (`math-ch10-exp-log.json`, sev=4) — Symbolic — change-of-base logarithm inside a power equation
   - fields: tactical[0]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=3 :: 8=2^{3} || 8=8 || \log_2(8) = 3 || \log_2(2^{n}) = n\in\mathbb{Z}`

639. **MATH 10.3.17** (`math-ch10-exp-log.json`, sev=4) — Nested — log-pinned force and its inverse clock
   - fields: tactical[0]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: \ln k = -1 || k = e^{-1} || e^{-1} = \frac{1}{e}`

640. **MATH 10.3.27** (`math-ch10-exp-log.json`, sev=4) — Nested — double-log constraints pinning level and force
   - fields: tactical[0], tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: \ln(\ln A) = \ln 2 || \ln A = 2 || A = e^{2}`
   - `eq_step_cascade`: `len=4 shorts=3 :: \ln(\ln(1/k)) = 0 || \ln(1/k) = 1 || 1/k = e || k = e^{-1}`

641. **MATH 10.3.30** (`math-ch10-exp-log.json`, sev=4) — Applied letters — nested log link between GDP and population forces
   - fields: tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=1 :: g=3\cdot0.01 || 3\cdot \frac{1}{100}=\frac{3}{100} || g=\frac{3}{100} || 3\times 0.01 = 0.03`
   - `eq_step_cascade`: `len=4 shorts=0 :: k_y t=0.02\cdot25 || \frac{1}{50}\cdot 25=\frac{1}{2} || k_y t=\frac{1}{2} || 0.02\times 25 = 0.5`

642. **MATH 11.115** (`math-ch11-differentiation.ts`, sev=4) — Two products, one resource: reduce then maximise profit
   - fields: solution_overview
   - reasons: aligned_short_tail
   - `aligned_short_tail`: `p(x) &=30x+20(10-x)-x^{2}-(10-x)^{2}=10x+200-x^{2}-(100-20x+x^{2}) // &=30x+100-2x^{2}.`

643. **MATH 11.161** (`math-ch11-exam.json`, sev=4) — Carpentry workshop: revenue, cost, and build time
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=0 :: T^{\prime}(Q) = Q+4 || T^{\prime}(11) = 15 || T^{\prime}(Q) = 12 || T^{\prime}(15) = 12`
   - `eq_step_cascade`: `len=3 shorts=2 :: R_{e}(6) = R(6) || Q = 6 || Q = 9`

644. **MATH 11.163** (`math-ch11-exam.json`, sev=4) — Print shop: price, demand, and elasticity
   - fields: solution_overview, tactical[0], tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=0 :: R(p)=120p-4p^{2} || R^{\prime}(p)=120-8p || \varepsilon(p)=\dfrac{-4p}{120-4p} || C^{\prime}(Q)=2+0.1Q`
   - `eq_step_cascade`: `len=4 shorts=2 :: R(p) = 120p-4p^{2} || R^{\prime}(p) = 120-8p || R^{\prime}(p) = 0 || p = 15`

645. **MATH 11.164** (`math-ch11-exam.json`, sev=4) — Market garden: labour, output, and wage
   - fields: tactical[0], tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: \pi^{\prime}(L) = 48-4L || \pi^{\prime}(L) = 0 || L = 12`
   - `eq_step_cascade`: `len=6 shorts=3 :: Q^{\prime}(L) = 30-2L || Q^{\prime}(12) = 30-24 || 30 - 24 = 6 || Q^{\prime}(12) = 6`

646. **MATH 11.165** (`math-ch11-exam.json`, sev=4) — Courier fleet: routes, cost, and a threshold
   - fields: tactical[1], tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=2 :: AC(x) = x+20+\dfrac{100}{x} || AC^{\prime}(x) = 1-\dfrac{100}{x^{2}} || AC^{\prime}(x) = 0 || x = 10`
   - `eq_step_cascade`: `len=4 shorts=1 :: P(x) = 40x-\dfrac{3}{2}x^{2}-100 || P^{\prime}(x) = 40-3x || P^{\prime}(x) = 0 || x = \dfrac{40}{3}`

647. **MATH 11.166** (`math-ch11-exam.json`, sev=4) — Gift-tube producer: volume, tax, and rival revenue
   - fields: tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=2 :: R(Q) = 72Q-Q^{2} || R^{\prime}(Q) = 72-2Q || R^{\prime}(Q) = 0 || Q = 36`

648. **MATH 11.168** (`math-ch11-exam.json`, sev=4) — Data studio: labour, output, and marginal value
   - fields: tactical[0]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=3 :: \pi^{\prime}(L) = \dfrac{120}{\sqrt{L}}-20 || \pi^{\prime}(L) = 0 || \sqrt{L} = 6 || L = 36`

649. **MATH 11.170** (`math-ch11-exam.json`, sev=4) — Ride platform: fare, commission, and profit
   - fields: tactical[0], tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=2 :: P(Q) = 100Q-\dfrac{5}{2}Q^{2}-600 || P^{\prime}(Q) = 100-5Q || P^{\prime}(Q) = 0 || Q = 20`
   - `eq_step_cascade`: `len=3 shorts=2 :: R^{\prime}(Q) = 120-4Q || R^{\prime}(Q) = 0 || Q = 30`

650. **MATH 11.172** (`math-ch11-exam.json`, sev=4) — Solar maintenance: output and a smooth service rule
   - fields: tactical[0], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: \pi^{\prime}(m) = 42-2m || \pi^{\prime}(m) = 0 || m = 21`
   - `eq_step_cascade`: `len=5 shorts=2 :: S^{\prime}(8) = 16 || S^{\prime}(12) = 20 || m = 8 || m = 12`

651. **MATH 11.173** (`math-ch11-exam.json`, sev=4) — Retail launch: price elasticity and a tax
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=2 :: R(p) = 200p-5p^{2} || R^{\prime}(p) = 200-10p || R^{\prime}(p) = 0 || p = 20`
   - `eq_step_cascade`: `len=4 shorts=1 :: P(Q) = 35Q-0.3Q^{2}-300 || P^{\prime}(Q) = 35-0.6Q || P^{\prime}(Q) = 0 || Q = \dfrac{175}{3}`

652. **MATH 11.175** (`math-ch11-exam.json`, sev=4) — Festival stalls: demand, levy, and setup time
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=8 shorts=6 :: MR = 30-\dfrac{2}{3}Q || MC = \dfrac{1}{3}Q+6 || MR(24) = 30-16 || 30 - 16 = 14`
   - `eq_step_cascade`: `len=4 shorts=2 :: P_{t}(Q) = 20Q-\dfrac{1}{2}Q^{2}-120 || P_{t}^{\prime}(Q) = 20-Q || P_{t}^{\prime}(Q) = 0 || Q = 20`

653. **MATH 11.176** (`math-ch11-exam.json`, sev=4) — Podcast studio: advertising spend and listeners
   - fields: tactical[0]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=3 :: \pi(a) = 100\sqrt{a}-a-40 || \pi^{\prime}(a) = \dfrac{50}{\sqrt{a}}-1 || \pi^{\prime}(a) = 0 || \sqrt{a} = 50`

654. **MATH 11.178** (`math-ch11-exam.json`, sev=4) — Pharmacy warehouse: order quantity and holding cost
   - fields: tactical[0], tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=3 :: TC^{\prime}(Q) = -\dfrac{20000}{Q^{2}}+2 || TC^{\prime}(Q) = 0 || Q^{2} = 10000 || Q = 100`
   - `eq_step_cascade`: `len=4 shorts=2 :: 2\cdot 100 = 200 || Q = 100 || hQ/2 = 2Q || \dfrac{hQ}{2} = 2Q`

655. **MATH 11.179** (`math-ch11-exam.json`, sev=4) — Artisan soap: inverse demand and revenue
   - fields: tactical[0], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=2 :: R(Q) = 36Q-3Q^{2} || R^{\prime}(Q) = 36-6Q || R^{\prime}(Q) = 0 || Q = 6`
   - `eq_step_cascade`: `len=5 shorts=1 :: R(Q) = 36Q-3Q^{2} || R^{\prime}(Q) = 36-6Q || R^{\prime}(4) = 36-24 || 36 - 24 = 12`

656. **MATH 11.180** (`math-ch11-exam.json`, sev=4) — Founder's wealth utility: risk attitude
   - fields: tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: w = 200 || U^{\prime} = 0 || w = 200`
   - `eq_step_cascade`: `len=5 shorts=1 :: U(w) = 20w-0.05w^{2} || U^{\prime}(w) = 20-0.1w || U^{\prime}(50) = 20-5 || 20 - 5 = 15`

657. **MATH 11.185** (`math-ch11-exam.json`, sev=4) — Ceramic kiln: cost inflection and marginal cost
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=3 :: C^{\prime\prime}(Q) = 6Q-12 || 6Q-12 = 0 || 6Q = 12 || Q = 2`
   - `eq_step_cascade`: `len=4 shorts=3 :: C^{\prime\prime} = 0 || AC = \dfrac{C}{Q} || Q = 2 || AC = MC`

658. **MATH 11.186** (`math-ch11-exam.json`, sev=4) — Pop-up shop: Newton quotient for weekend profit
   - fields: tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=4 :: P(4) = 16-24+20 || 16 - 24 = -8 || -8 + 20 = 12 || P(4) = 12`

659. **MATH 11.197** (`math-ch11-exam.json`, sev=4) — Foundry: MC and MC′ figure for inflection of total cost
   - fields: tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: AC^{\prime} = 0 || MC = AC || C^{\prime\prime} = 0`

660. **MATH 11.199** (`math-ch11-exam.json`, sev=4) — Warehouse: EOQ with a spoilage penalty overlay
   - fields: tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=4 :: S(1) = 1-6+9 || 1 - 6 = -5 || -5 + 9 = 4 || S(1) = 4`

661. **MATH 11.203** (`math-ch11-exam.json`, sev=4) — Mill: average-cost drift and a rival's marginal revenue
   - fields: tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: Q = 8 || Q = 5 || R_{\mathrm{rival}}(5) = R(5)`
   - `eq_step_cascade`: `len=5 shorts=3 :: C^{\prime}(Q) = Q^{2}-8Q+30 || C^{\prime\prime}(Q) = 2Q-8 || 2Q-8 = 0 || 2Q = 8`

662. **MATH 11.204** (`math-ch11-exam.json`, sev=4) — Theatre: price and MR figure with constant MC
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: MC = 10 || Q = 15 || Q = 10`
   - `eq_step_cascade`: `len=3 shorts=3 :: Q = 10 || MR = 0 || p = 20`

663. **MATH 12.202** (`math-ch12-exam.json`, sev=4) — Exam-style tasks - 4
   - fields: tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=3 :: N(A\cup B) = 64+59-23 || 64 + 59 = 123 || 123 - 23 = 100 || N(\text{neither}) = 140-100`

664. **MATH 12.203** (`math-ch12-exam.json`, sev=4) — Exam-style tasks - 5
   - fields: tactical[0]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=9 shorts=0 :: w_A = 0.50\cdot 0.98 || 0.5 \times 0.98 = 0.49 || w_B = 0.30\cdot 0.95 || 0.3 \times 0.95 = 0.285`

665. **MATH 12.204** (`math-ch12-exam.json`, sev=4) — Exam-style tasks - 6
   - fields: tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=2 :: N(G\cup P) = N(G)+N(P)-N(G\cap P) || N(G\cup P) = 51+44-19 || 51 + 44 = 95 || 95 - 19 = 76`

666. **MATH 12.205** (`math-ch12-exam.json`, sev=4) — Exam-style tasks - 7
   - fields: tactical[0]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=3 :: N(S\cup F) = 63+57-18 || 63 + 57 = 120 || 120 - 18 = 102 || N(\text{neither}) = 150-102`

667. **MATH 12.209** (`math-ch12-exam.json`, sev=4) — Exam-style tasks - 11
   - fields: tactical[0]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=0 :: \binom{12}{2} = \dfrac{12!}{2!(12-2)!} || \dfrac{12!}{2!(10)!} = \dfrac{12 \cdot 11}{1 \cdot || 12 \cdot 11 = 132 || \dfrac{132}{2} `

668. **MATH 12.210** (`math-ch12-exam.json`, sev=4) — Exam-style tasks - 12
   - fields: tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=2 :: N(\text{exactly one}) = 24+20+18 || 24 + 20 = 44 || 44 + 18 = 62 || N(\text{exactly one}) = 62`
   - `eq_step_cascade`: `len=4 shorts=2 :: N(\text{exactly two}) = 8+7+6 || 8 + 7 = 15 || 15 + 6 = 21 || N(\text{exactly two}) = 21`

669. **MATH 12.211** (`math-ch12-exam.json`, sev=4) — Exam-style tasks - 13
   - fields: tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=0 :: P(P\cap L) = \frac{15}{100} || P(P)P(L) = \frac{40}{100}\cdot\frac{35}{100} || 15 \times 100 = 1500 || 40 \times 35 = 1400`

670. **MATH 2.01** (`math-ch2-cases.json`, sev=4) — Warm-up: square of a sum
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=2 :: (2x+5)^2=(2x+5)(2x+5) || (2x+5)(2x+5)=(2x)^2+2\cdot(2x)\cdot 5+5^2 || (2x)^2=4x^2 || 2\cdot(2x)\cdot 5=20x`
   - `eq_step_cascade`: `len=12 shorts=11 :: x=4 || x+1=4+1 || 4+1=5 || (x+1)^2=5^2`

671. **MATH 2.02** (`math-ch2-cases.json`, sev=4) — Warm-up: difference of two squares
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=10 shorts=10 :: a=5 || a^2=5^2 || 5^2=25 || a^2-1=25-1`
   - `eq_step_cascade`: `len=10 shorts=8 :: u^2-v^2=(u-v)(u+v) || (u-v)(u+v)=(u+v)(u-v) || u=5 || v=2`

672. **MATH 2.03** (`math-ch2-cases.json`, sev=4) — Warm-up: elementary sum and product data
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=10 shorts=7 :: (a+b)^2=a^2+2ab+b^2 || a^2+b^2=(a+b)^2-2ab || a+b=7 || ab=10`
   - `eq_step_cascade`: `len=10 shorts=7 :: (m+n)^2=m^2+2mn+n^2 || m^2+n^2=(m+n)^2-2mn || m+n=8 || mn=15`

673. **MATH 2.04** (`math-ch2-cases.json`, sev=4) — Warm-up: cube sum under a vanishing triple sum
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=19 shorts=14 :: a=2 || b=3 || c=-5 || 2+3=5`
   - `eq_step_cascade`: `len=19 shorts=13 :: a=3 || b=5 || c=-8 || 3+5=8`

674. **MATH 2.07** (`math-ch2-cases.json`, sev=4) — Binomial identities — set 3
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=18 shorts=17 :: m=1 || n=1 || m^4=1^4 || 1^4=1`
   - `eq_step_cascade`: `len=20 shorts=9 :: c^{-3}d^2=2 || \dfrac{c^{8}d^{3}}{c^{2}d^{7}}=c^{8-2}d^{3-7} || 8-2=6 || 3-7=-4`

675. **MATH 2.10** (`math-ch2-cases.json`, sev=4) — Signs that flip only the cross term
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=14 shorts=13 :: m=4 || n=3 || m+n=4+3 || 4+3=7`
   - `eq_step_cascade`: `len=9 shorts=8 :: 8=2^3 || 27=3^3 || 2^3+3^3=(2+3)(2^2-2\cdot 3+3^2) || 2+3=5`

676. **MATH 2.13** (`math-ch2-cases.json`, sev=4) — Cubes whose odd-powered terms survive
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=0 :: (\alpha+\beta)^{3}=\alpha^{3}+3\alpha^{2}\beta+3\a || (\alpha-\beta)^{3}=\alpha^{3}-3\alpha^{2}\beta+3\a || \alpha^{3}-\alpha^{3}=0 `
   - `eq_step_cascade`: `len=35 shorts=32 :: a=1 || b=2 || c=2 || d=1`

677. **MATH 2.14** (`math-ch2-cases.json`, sev=4) — Elementary cubes evaluated from two symmetric values
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=8 shorts=5 :: (5+1)^2=(5+1)(5+1) || (5+1)(5+1)=5^2+2\cdot 5\cdot 1+1^2 || 5^2=25 || 2\cdot 5\cdot 1=10`
   - `eq_step_cascade`: `len=16 shorts=14 :: c=1 || 6c=6\cdot 1 || 6\cdot 1=6 || 6c-1=6-1`

678. **MATH 2.16** (`math-ch2-cases.json`, sev=4) — Reciprocal squares built from a linear sum
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=16 shorts=12 :: u=1 || v=1 || u^{4}+4v^{4}=(u^{2}+2v^{2})^{2}-(2uv)^{2} || u^{2}=1`
   - `eq_step_cascade`: `len=9 shorts=6 :: (5+2)^2=(5+2)(5+2) || (5+2)(5+2)=5^2+2\cdot 5\cdot 2+2^2 || 5^2=25 || 2\cdot 5\cdot 2=20`

679. **MATH 2.17** (`math-ch2-cases.json`, sev=4) — Four terms that group into a difference of squares
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=17 shorts=15 :: a=1 || b=2 || c=2 || d=1`
   - `eq_step_cascade`: `len=11 shorts=11 :: p=1 || 7p=7\cdot 1 || 7\cdot 1=7 || 7p-1=7-1`

680. **MATH 2.18** (`math-ch2-cases.json`, sev=4) — Half the sum of three squared gaps
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=5 :: (a+b)^2=a^2+2ab+b^2 || a^2+b^2=(a+b)^2-2ab || a+b=7 || ab=10`
   - `eq_step_cascade`: `len=17 shorts=15 :: a=1 || b=2 || c=2 || d=1`

681. **MATH 2.19** (`math-ch2-cases.json`, sev=4) — A cyclic product of three linear binomials
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=11 shorts=11 :: a=3 || 2a=2\cdot 3 || 2\cdot 3=6 || 2a-1=6-1`
   - `eq_step_cascade`: `len=5 shorts=3 :: a=1 || b=2 || c=3 || a^3+b^3+c^3-3abc=18`

682. **MATH 2.20** (`math-ch2-cases.json`, sev=4) — Mixed signs inside a three-letter square
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=17 shorts=17 :: a=3 || b=1 || c=2 || a-b+c=3-1+2`
   - `eq_step_cascade`: `len=4 shorts=4 :: a=3 || b=1 || c=2 || (a-b+c)^2=16`

683. **MATH 2.21** (`math-ch2-cases.json`, sev=4) — Newton sums built from a pair of elementary data
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=17 shorts=15 :: a=1 || b=2 || c=2 || d=1`
   - `eq_step_cascade`: `len=4 shorts=0 :: (p+q)^2=(p+q)(p+q) || (p+q)(p+q)=p^2+2\cdot p\cdot q+q^2 || 2\cdot p\cdot q=2pq || (p+q)^2=p^2+2pq+q^2`

684. **MATH 2.23** (`math-ch2-cases.json`, sev=4) — Four letters and the six doubled pairwise products
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=7 :: t=1 || t^2=1 || 6t=6 || 1+6+11=18`
   - `eq_step_cascade`: `len=5 shorts=1 :: (t^2+2)^2=t^4+4t^2+4 || (2t)^2=4t^2 || (t^2+2)^2-(2t)^2=t^4+4t^2+4-4t^2 || t^4+4t^2+4-4t^2=t^4+4`

685. **MATH 2.24** (`math-ch2-cases.json`, sev=4) — Mirror quadratics whose odd powers cancel
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=0 :: (x^2+1)^2=x^4+2x^2+1 || (x^2+1)^2-x^2=x^4+2x^2+1-x^2 || x^4+2x^2+1-x^2=x^4+x^2+1 || x^4+x^2+1=(x^2+1)^2-x^2`
   - `eq_step_cascade`: `len=7 shorts=3 :: (x-2)^3=(x-2)(x-2)(x-2) || (x-2)^3=x^3-3x^2\cdot 2+3x\cdot 2^2-2^3 || 3x^2\cdot 2=6x^2 || 2^2=4`

686. **MATH 2.25** (`math-ch2-cases.json`, sev=4) — Three cubes after a vanishing linear sum
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=9 shorts=9 :: s=5 || p=6 || 5^2=25 || 25\cdot 5=125`
   - `eq_step_cascade`: `len=8 shorts=8 :: p=1 || 5p=5 || 5p-1=4 || 4^2=16`

687. **MATH 2.26** (`math-ch2-cases.json`, sev=4) — Brahmagupta’s product against a cubed trinomial
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=28 shorts=28 :: a=1 || b=2 || c=2 || d=1`
   - `eq_step_cascade`: `len=14 shorts=14 :: a=2 || b=3 || c=4 || d=5`

688. **MATH 2.27** (`math-ch2-cases.json`, sev=4) — Brahmagupta’s product of two sums of squares
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=16 shorts=12 :: u=1 || v=1 || u^{4}+4v^{4}=(u^{2}+2v^{2})^{2}-(2uv)^{2} || u^{2}=1`
   - `eq_step_cascade`: `len=28 shorts=27 :: a=1 || b=2 || c=3 || a^3=1`

689. **MATH 2.29** (`math-ch2-cases.json`, sev=4) — Factoring a biquadratic after a completed square
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=0 :: (x^2+2y^2)^2=x^4+4x^2y^2+4y^4 || (2xy)^2=4x^2y^2 || (x^2+2y^2)^2-(2xy)^2=x^4+4x^2y^2+4y^4-4x^2y^2 || x^4+4x^2y^2+4y^4-4x^2y^2=x^4+4y`
   - `eq_step_cascade`: `len=28 shorts=28 :: a=1 || b=2 || c=2 || d=1`

690. **MATH 2.30** (`math-ch2-cases.json`, sev=4) — A cubic leftover after a cubed binomial is subtracted
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=11 shorts=11 :: a=3 || b=1 || c=2 || (a-b+c)^2=16`
   - `eq_step_cascade`: `len=11 shorts=11 :: a=2 || b=1 || a^3=8 || b^3=1`

691. **MATH 2.31** (`math-ch2-cases.json`, sev=4) — Binomial identities — set 27
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=10 shorts=8 :: t=2 || t-1=1 || t+1=3 || t^2+1=5`
   - `eq_step_cascade`: `len=7 shorts=5 :: (a+b)^2=a^2+2ab+b^2 || a^2+b^2=(a+b)^2-2ab || a+b=7 || ab=10`

692. **MATH 2.32** (`math-ch2-cases.json`, sev=4) — Hunting one mixed product in a shifted trinomial square
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=5 :: u=0 || u^2+6u+11=11 || u+3=3 || 3^2=9`
   - `eq_step_cascade`: `len=6 shorts=3 :: (x-2)^3=x^3-3x^2\cdot 2+3x\cdot 2^2-2^3 || 3x^2\cdot 2=6x^2 || 2^2=4 || 3x\cdot 4=12x`

693. **MATH 2.34** (`math-ch2-cases.json`, sev=4) — Walking around three squared differences
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=5 :: 27=3^3 || 8=2^3 || 3-2=1 || 9+6+4=19`
   - `eq_step_cascade`: `len=4 shorts=4 :: x=1 || x^4+4=5 || x^2+2x+2=5 || 5^2=25`

694. **MATH 2.35** (`math-ch2-cases.json`, sev=4) — Warm-up: adding two fractions
   - fields: tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: \dfrac{1}{m}+\dfrac{1}{n}=\dfrac{m+n}{mn} || m=1 || n=1`

695. **MATH 2.37** (`math-ch2-cases.json`, sev=4) — Warm-up: product of simple fractions
   - fields: tactical[1], tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=2 :: 2x\cdot y=2xy || y\cdot 4x=4xy || \dfrac{2xy}{4xy}=\dfrac{2}{4} || \dfrac{2}{4}=\dfrac{1}{2}`
   - `eq_step_cascade`: `len=3 shorts=2 :: 5p\cdot q=5pq || q\cdot 5p=5pq || \dfrac{5pq}{5pq}=1`

696. **MATH 2.42** (`math-ch2-cases.json`, sev=4) — Nested unit fraction with a swapped report
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: \dfrac{1}{r}+\dfrac{1}{s}=\dfrac{r+s}{rs} || r=1 || s=1`
   - `eq_step_cascade`: `len=5 shorts=1 :: 1-\dfrac{1}{t}=\dfrac{t-1}{t} || \dfrac{1}{\dfrac{t-1}{t}}=\dfrac{t}{t-1} || t=2 || \dfrac{2}{2-1}=2`

697. **MATH 2.44** (`math-ch2-cases.json`, sev=4) — Binomial square missing the doubled cross term
   - fields: tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: v=1 || 1+2+1=4 || 1+1=2`
   - `eq_step_cascade`: `len=4 shorts=1 :: (-6q)^2=36q^2 || 4\cdot 6q=24q || \dfrac{24q}{36q^2}=\dfrac{24}{36q} || \dfrac{24}{36}=\dfrac{2}{3}`

698. **MATH 2.45** (`math-ch2-cases.json`, sev=4) — Simple reciprocal sums and differences
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: \dfrac{1}{p}+\dfrac{1}{q}=\dfrac{p+q}{pq} || p=1 || q=1`
   - `eq_step_cascade`: `len=3 shorts=2 :: 2(x+1)=2x+2 || 3(x-1)=3x-3 || 2x+2+3x-3=5x-1`

699. **MATH 2.107** (`math-ch2-cases.json`, sev=4) — Piecewise rewrite then a leftover constant
   - fields: tactical[0]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: 2x-5=-7 || x=6 || x=-1`

700. **MATH 2.112** (`math-ch2-cases.json`, sev=4) — Copying a nonnegative inside then a vanishing difference
   - fields: tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: |u|=-u || |u|+u=-u+u || -u+u=0`

701. **MATH 2.121** (`math-ch2-cases.json`, sev=4) — A quadratic already a square, and neighbours
   - fields: tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: |4x-7|=4x-7. || 4|x|-7=4x-7. || |4x-7|=4|x|-7`

702. **MATH 2.125** (`math-ch2-cases.json`, sev=4) — Root of a squared binomial in two letters
   - fields: tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=0 :: |2t-5|=7\iff 2t-5 || 7\iff 2t-5=7\ \text{or}\ 2t-5 || 7\ \text{or}\ 2t-5=-7 || t=6\ \text{or}\ t`

703. **MATH 2.135** (`math-ch2-cases.json`, sev=4) — Root of a square after completing versus dropping bars
   - fields: tactical[0], tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=1 :: \frac{-8}{2}=-4 || -4^2=16 || w^2-8w+16=(w-4)^2 || w^2-8w+16=(w-4)^2+(16-16)`
   - `eq_step_cascade`: `len=3 shorts=2 :: 2u-5=-7. || |2\cdot 6-5|=7, || |2(-1)-5|=7.`

704. **MATH 2.138** (`math-ch2-cases.json`, sev=4) — Exam-style tasks - 2
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=2 :: \dfrac{1}{z-1}=\dfrac1z || \dfrac{1}{z-1}=\dfrac{1}{z} || z=z-1 || 0=-1`
   - `eq_step_cascade`: `len=5 shorts=5 :: z+3=(z+1)^2 || z+3=z^2+2z+1 || 0=z^2+z-2 || (z+2)(z-1)=0`

705. **MATH 2.139** (`math-ch2-cases.json`, sev=4) — Exam-style tasks - 3
   - fields: tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: q^2=q || q^2-q=0 || q(q-1)=0`
   - `eq_step_cascade`: `len=4 shorts=4 :: t=1 || t=t^{2} || t^{2}-t=0 || t(t-1)=0`

706. **MATH 2.142** (`math-ch2-cases.json`, sev=4) — Exam-style tasks - 6
   - fields: tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=0 :: (s+t)^{3}=s^{3}+3s^{2}t+3st^{2}+t^{3} || (s+t)^{3}=s^{3}+t^{3}+3st(s+t) || u^{3}=s^{3}+t^{3}+3stu || s^{3}+t^{3}+3stu=u^{3}.`

707. **MATH 2.143** (`math-ch2-cases.json`, sev=4) — Exam-style tasks - 7
   - fields: tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=1 :: u^3+v^3+w^3=0 || u^3+v^3+w^3-3uvw=(u+v+w)(u^2+v^2+w^2-uv-vw-wu) || u+v+w=0 || u^3+v^3+w^3=0`

708. **MATH 2.144** (`math-ch2-cases.json`, sev=4) — Exam-style tasks - 8
   - fields: tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=3 :: y^2=xz || \dfrac{x}{y}=\dfrac{y}{z} || xz=y\cdot y || xz=y^2`

709. **MATH 2.147** (`math-ch2-cases.json`, sev=4) — Exam-style tasks - 11
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=0 :: a^{2}+b^{2}=(a+b)^{2}-2ab || (a-b)^{2}=(a+b)^{2}-4ab || a^{3}+b^{3}=(a+b)^{3}-3ab(a+b) || \dfrac{1}{a}+\dfrac{1}{b}=\dfrac{a+b}{ab}`
   - `eq_step_cascade`: `len=5 shorts=1 :: (a+b)^2=a^2+2ab+b^2 || a^2+b^2=(a+b)^2-2ab || a^2+b^2=10^2-2\cdot21 || a^2+b^2=100-42`

710. **MATH 2.149** (`math-ch2-cases.json`, sev=4) — Exam-style tasks - 13
   - fields: tactical[0]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=3 :: x^{1/2}=4 || x^{1/2}=\sqrt{16} || 4^2=16 || x^{1/2}=4`

711. **MATH 2.151** (`math-ch2-cases.json`, sev=4) — Exam-style tasks - 15
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=0 :: a^{2}+b^{2}=(a+b)^{2}-2ab || (a-b)^{2}=(a+b)^{2}-4ab || a^{3}+b^{3}=(a+b)^{3}-3ab(a+b) || \dfrac{1}{a}+\dfrac{1}{b}=\dfrac{a+b}{ab}`
   - `eq_step_cascade`: `len=5 shorts=1 :: (a+b)^2=a^2+2ab+b^2 || a^2+b^2=(a+b)^2-2ab || a^2+b^2=9^2-2\cdot20 || a^2+b^2=81-40`

712. **MATH 2.153** (`math-ch2-cases.json`, sev=4) — Exam-style tasks - 17
   - fields: tactical[0]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=3 :: x^{1/2}=9 || x^{1/2}=\sqrt{81} || 9^2=81 || x^{1/2}=9`

713. **MATH 2.155** (`math-ch2-cases.json`, sev=4) — Exam-style tasks - 19
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=0 :: a^{2}+b^{2}=(a+b)^{2}-2ab || (a-b)^{2}=(a+b)^{2}-4ab || a^{3}+b^{3}=(a+b)^{3}-3ab(a+b) || \dfrac{1}{a}+\dfrac{1}{b}=\dfrac{a+b}{ab}`
   - `eq_step_cascade`: `len=5 shorts=1 :: (a+b)^2=a^2+2ab+b^2 || a^2+b^2=(a+b)^2-2ab || a^2+b^2=11^2-2\cdot18 || a^2+b^2=121-36`

714. **MATH 11.136** (`math-ch3-exam.json`, sev=4) — Exam-style tasks - 13
   - fields: solution_overview
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=0 :: PV_3 = \frac{18,000}{(1.06)^{3}} \approx 15,113.15 || PV_5 = \frac{25,000}{(1.06)^{5}} \approx 18,681.45 || PV \approx 11,320.75 + 1`

715. **MATH 11.137** (`math-ch3-exam.json`, sev=4) — Exam-style tasks - 14
   - fields: tactical[0]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: S_6 = a\frac{q^{6}-1}{q-1} || q = 1 + 0.05 || 1 + 0.05 = 1.05`

716. **MATH 11.140** (`math-ch3-exam.json`, sev=4) — Exam-style tasks - 17
   - fields: solution_overview, tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=0 :: PV_1 = \frac{70,000}{1.07} \approx 65,420.56 || PV_3 = \frac{85,000}{(1.07)^{3}} \approx 69,385.32 || PV_5 = \frac{100,000}{(1.07)^{`
   - `eq_step_cascade`: `len=4 shorts=0 :: PV_{\mathrm{in}} \approx 65,420.56 + 69,385.32 + 7 || NPV = -200,000 + 206,104.50 || 70,000 + 85,000 + 100,000 - 200,000 = 55,000 ||`

717. **MATH 11.141** (`math-ch3-exam.json`, sev=4) — Exam-style tasks - 18
   - fields: tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=0 :: (1+i_m)^{12} = 1.085 || i_m = (1.085)^{1/12} - 1 || i_m \approx 0.00682149 = 0.68215\% || j_{12} = 12 \times i_m`

718. **MATH 4.02** (`math-ch4-cases.json`, sev=4) — What each inverse step leaves
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=5 :: x + 5 = 11 || x + 5 - 5 = 11 - 5 || 11 - 5 = 6 || x = 6`
   - `eq_step_cascade`: `len=3 shorts=2 :: 7x = 21 || x = \frac{21}{7} || x = 3`

719. **MATH 4.03** (`math-ch4-cases.json`, sev=4) — A number, said in words
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=5 :: x + 4 = 11 || x + 4 - 4 = 11 - 4 || 11 - 4 = 7 || x = 7`
   - `eq_step_cascade`: `len=4 shorts=3 :: 3x = 18 || x = \frac{18}{3} || x = 6 || 3 \cdot 5 = 15`

720. **MATH 4.04** (`math-ch4-cases.json`, sev=4) — Brackets before isolating
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=8 shorts=7 :: 2(x + 3) = 14 || 2x + 6 = 14 || 2x = 14 - 6 || 14 - 6 = 8`
   - `eq_step_cascade`: `len=7 shorts=6 :: 5(x - 2) = 20 || 5x - 10 = 20 || 5x = 20 + 10 || 20 + 10 = 30`

721. **MATH 4.05** (`math-ch4-cases.json`, sev=4) — Fractions that clear in one move
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: \frac{x}{4} = 5 || x = 5 \cdot 4 || x = 20`
   - `eq_step_cascade`: `len=4 shorts=2 :: \frac{x}{3} + 2 = 6 || \frac{x}{3} = 4 || x = 4 \cdot 3 || x = 12`

722. **MATH 4.07** (`math-ch4-cases.json`, sev=4) — Unknowns on both sides
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: 2x + 3 = 3x - 5 || 3 = x - 5 || x = 8`
   - `eq_step_cascade`: `len=3 shorts=3 :: 2 \cdot 8 = 16 || 16 + 3 = 19 || 3 \cdot 8 - 5 = 19`

723. **MATH 4.08** (`math-ch4-cases.json`, sev=4) — Two fractions, one unknown
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=3 :: \frac{x}{2} + \frac{x}{3} = 5 || 3x + 2x = 30 || 5x = 30 || x = \frac{30}{5}`
   - `eq_step_cascade`: `len=8 shorts=5 :: \frac{x - 1}{3} = \frac{x + 1}{5} || 5(x - 1) = 3(x + 1) || 5x - 5 = 3x + 3 || 5x - 3x = 3 + 5`

724. **MATH 4.09** (`math-ch4-cases.json`, sev=4) — Five closed stories
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=9 shorts=7 :: 2\bigl(x + (x + 3)\bigr) = 22 || 2(2x + 3) = 22 || 4x + 6 = 22 || 4x = 22 - 6`
   - `eq_step_cascade`: `len=8 shorts=3 :: \frac{0.08}{1 + w} = 0.05 || 0.08 = 0.05(1 + w) || 0.08 = 0.05 + 0.05w || 0.03 = 0.05w`

725. **MATH 4.11** (`math-ch4-cases.json`, sev=4) — Ages, coins, and a tank that is not yet full
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=4 :: s + 28 + 8 = 2(s + 8) || s + 36 = 2s + 16 || 36 - 16 = 2s - s || s = 20`
   - `eq_step_cascade`: `len=5 shorts=4 :: n + (n + 2) + (n + 4) = 75 || 3n + 6 = 75 || 3n = 69 || n = 23`

726. **MATH 4.14** (`math-ch4-cases.json`, sev=4) — Five separate shopping bills
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=8 shorts=7 :: 2(x + 3) + 3x = 21 || 2x + 6 + 3x = 21 || 5x + 6 = 21 || 5x = 21 - 6`
   - `eq_step_cascade`: `len=5 shorts=5 :: 4n + 2(n + 5) = 22 || 4n + 2n + 10 = 22 || 6n + 10 = 22 || 6n = 12`

727. **MATH 4.15** (`math-ch4-cases.json`, sev=4) — Five separate percentage and dilution stories
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=9 shorts=2 :: 0.20 \cdot 2 = 0.40 || \frac{0.20(V - 2)}{V} = 0.16 || 0.20(V - 2) = 0.16V || 0.20V - 0.40 = 0.16V`
   - `eq_step_cascade`: `len=4 shorts=3 :: 0.25 \cdot 8 = 2 || 8 + 2 = 10 || 2 + 2 = 4 || \frac{4}{10} = 0.40`

728. **MATH 4.16** (`math-ch4-cases.json`, sev=4) — Five separate motion and current stories
   - fields: tactical[0]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=3 :: 48 \cdot \frac{1}{2} = 24 || 132 - 24 = 108 || 48 + 72 = 120 || t = \frac{108}{120}`

729. **MATH 4.17** (`math-ch4-cases.json`, sev=4) — A rod, a recipe, and two-fifths of a number
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=6 :: x + (x + 60) = 240 || 2x + 60 = 240 || 2x = 240 - 60 || 240 - 60 = 180`
   - `eq_step_cascade`: `len=3 shorts=3 :: 3 \cdot 14 = 42 || 42 - 11 - 15 = 16 || 11 + 15 + 18 = 44`

730. **MATH 4.18** (`math-ch4-cases.json`, sev=4) — Five separate fractional linear equations
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=9 shorts=6 :: \frac{3x - 1}{4} + \frac{x + 3}{2} = 5 || 3x - 1 + 2(x + 3) = 20 || 3x - 1 + 2x + 6 = 20 || 5x + 5 = 20`
   - `eq_step_cascade`: `len=7 shorts=5 :: \frac{x + 1}{2} - \frac{x - 1}{3} = 2 || 3(x + 1) - 2(x - 1) = 12 || 3x + 3 - 2x + 2 = 12 || x + 5 = 12`

731. **MATH 4.19** (`math-ch4-cases.json`, sev=4) — Five separate wage, parts, and overtime bills
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=3 :: 40 \cdot 3 + 60(h - 3) + 50 = 290 || 120 + 60(h - 3) + 50 = 290 || 170 + 60(h - 3) = 290 || 60(h - 3) = 120`
   - `eq_step_cascade`: `len=3 shorts=3 :: 45h + 30 = 165 || 45h = 135 || h = 3`

732. **MATH 4.21** (`math-ch4-cases.json`, sev=4) — Five separate age and consecutive-number stories
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=3 :: 4s + 20 = 2(s + 20) || 4s + 20 = 2s + 40 || 2s = 20 || s = 10`
   - `eq_step_cascade`: `len=3 shorts=2 :: 3d + 12 = 2(d + 12) || 3d + 12 = 2d + 24 || d = 12`

733. **MATH 4.22** (`math-ch4-cases.json`, sev=4) — Five separate train-passing and unit-conversion stories
   - fields: tactical[0], tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: 180 + 320 = 500 || 72 + 108 = 180 || 180 \cdot \frac{5}{18} = 50`
   - `eq_step_cascade`: `len=3 shorts=2 :: 90 - 54 = 36 || 36 \cdot \frac{5}{18} = 10 || 150 + 250 = 400`

734. **MATH 4.26** (`math-ch4-cases.json`, sev=4) — Five separate two-speed journey stories
   - fields: tactical[0]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=2 :: 80t + 40(4.5 - t) = 300 || 80t + 180 - 40t = 300 || 40t = 120 || t = 3`

735. **MATH 4.27** (`math-ch4-cases.json`, sev=4) — Five separate race-handicap and garrison stories
   - fields: tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=4 :: A : B = 5 : 4 || B : C = 4 : 3 || A : C = 5 : 3 || 100 : 60 = 5 : 3`

736. **MATH 4.28** (`math-ch4-cases.json`, sev=4) — Five separate nested linear word equations
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=3 :: \frac{x - 3}{4} = \frac{x}{3} - 2 || 3(x - 3) = 4x - 24 || 3x - 9 = 4x - 24 || 15 = x`
   - `eq_step_cascade`: `len=3 shorts=2 :: \frac{x + 5}{2} = x - 3 || x + 5 = 2x - 6 || 11 = x`

737. **MATH 4.29** (`math-ch4-cases.json`, sev=4) — Nested remainders, reversed digits, and a delayed leak
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=1 :: \frac{3}{4} \cdot \frac{4}{5}x = \frac{3}{5}x || \frac{1}{2} \cdot \frac{2}{5}x = \frac{1}{5}x || \frac{1}{5}x = 18 || x = 18 \cdot `
   - `eq_step_cascade`: `len=4 shorts=3 :: 11(u + 2) + 11u = 132 || u + 2 + u = 12 || 2u = 10 || u = 5`

738. **MATH 4.30** (`math-ch4-cases.json`, sev=4) — A platform, overlapping hands, and a faster leftover fill
   - fields: tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: 60 + 0.5m = 6m || 60 = 5.5m || m = \frac{120}{11}`
   - `eq_step_cascade`: `len=5 shorts=2 :: 6 + 0.7x = 0.4(30 + x) || 6 + 0.7x = 12 + 0.4x || 0.3x = 6 || x = \frac{6}{0.3}`

739. **MATH 4.31** (`math-ch4-cases.json`, sev=4) — A reverse that is $9$ more, a current, and a geometric prize
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: (10b + a) - (10a + b) = 9 || 9b - 9a = 9 || b - a = 1`
   - `eq_step_cascade`: `len=4 shorts=0 :: a + \frac{1}{2}a + \frac{1}{4}a = 8000 || \frac{7}{4}a = 8000 || a = \frac{32000}{7} || \frac{1}{2} \cdot \frac{32000}{7} = \frac{16`

740. **MATH 4.32** (`math-ch4-cases.json`, sev=4) — Evaporation then a richer stock, a delayed meeting, and successive percentages
   - fields: tactical[1], tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=0 :: 50 \cdot \frac{1}{3} = \frac{50}{3} || 180 - \frac{50}{3} = \frac{490}{3} || \frac{490/3}{90} = \frac{49}{27} || \frac{1}{3} + \frac`
   - `eq_step_cascade`: `len=4 shorts=3 :: s + 30 - 5 = 3(s - 5) || s + 25 = 3s - 15 || 40 = 2s || s = 20`

741. **MATH 4.33** (`math-ch4-cases.json`, sev=4) — Four nested remainders, a late third pipe, and a $90\%$ stock
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=1 :: \frac{4}{5} \cdot \frac{5}{6}x = \frac{2}{3}x || \frac{2}{3} \cdot \frac{1}{2}x = \frac{1}{3}x || \frac{1}{3}x = 20 || x = 20 \cdot `
   - `eq_step_cascade`: `len=4 shorts=2 :: \frac{0.24}{2 + w} = 0.08 || 0.24 = 0.08(2 + w) || 3 = 2 + w || w = 1`

742. **MATH 4.34** (`math-ch4-cases.json`, sev=4) — Parametric Equilibrium Volume
   - fields: tactical[0]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: (k - 2)(k + 1) = 0 || (k - 2)(k + 3) = 0 || k = 2`

743. **MATH 4.35** (`math-ch4-cases.json`, sev=4) — Joint Venture Balance Price Equation
   - fields: solution_overview, tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=0 :: a k (p - c) = b(1 - k)(p + m) || a k p - a c k = b(1 - k)p + b m (1 - k) || a k p - b(1 - k)p = a c k + b m (1 - k) || ((a + b)k - b`
   - `eq_step_cascade`: `len=5 shorts=2 :: 0 = a c k + b m (1 - k) || 0 = a c k + b m - b m k || (b m - a c)k = b m || k = \frac{b m}{b m - a c}`

744. **MATH 4.41** (`math-ch4-cases.json`, sev=4) — Parameter-Dependent Linear Systems and Solution Sets
   - fields: solution_overview
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=0 :: m^2 x + 2m^2 - 3m + 6 = (k - 4)x + k || m^2 x - (k - 4)x = k - (2m^2 - 3m + 6) || (m^2 - k + 4)x = -2m^2 + 3m + k - 6 || B(m, m^2 + `

745. **MATH 4.42** (`math-ch4-cases.json`, sev=4) — Parametric Break-Even Equation
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=8 shorts=1 :: \frac{a x - 5}{x - 2} - \frac{a + 1}{x - 2} = 2a - || \frac{a x - 5 - (a + 1)}{x - 2} = 2a - 3 || \frac{a x - a - 6}{x - 2} = 2a - 3`
   - `eq_step_cascade`: `len=4 shorts=2 :: (a - 3)x = 3(a - 4) || (3 - 3)x = 3(3 - 4) || 0 \cdot x = -3 || 0 = -3`

746. **MATH 4.43** (`math-ch4-cases.json`, sev=4) — Parametric Linear Equation with Nested Expressions
   - fields: tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: (6 - 6)x = 6 - 13 || 6 - 13 = -7 || 0 \cdot x = -7`

747. **MATH 4.46** (`math-ch4-cases.json`, sev=4) — Linear Scale Conversion for Vendor Ratings
   - fields: solution_overview, tactical[0], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=2 :: 50 = \frac{3}{2} \cdot 20 + b || 50 = 30 + b || b = 20 || G(E) = \frac{3}{2} E + 20`
   - `eq_step_cascade`: `len=4 shorts=1 :: \frac{3}{2}x + 20 = x || \frac{1}{2}x = -20 || x = -20 \cdot \frac{2}{1} || x = -40`

748. **MATH 4.47** (`math-ch4-cases.json`, sev=4) — Break-Even Modeling Under Regulatory Shifts
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=3 :: R(x) = C(x) || (3m + 8)x = (2m - 6) + (m + 4)x || (3m + 8 - m - 4)x = 2m - 6 || (2m + 4)x = 2m - 6`
   - `eq_step_cascade`: `len=4 shorts=4 :: (-2 + 2)x = -2 - 3 || -2 - 3 = -5 || 0 \cdot x = -5 || 0 = -5`

749. **MATH 4.49** (`math-ch4-cases.json`, sev=4) — Reconstruction of Initial Capital via Reverse Operations
   - fields: solution_overview, tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=0 :: B(x) = \frac{\lambda(x + 4) - 18}{3} - 2x || \frac{\lambda(x + 4) - 18}{3} - 2x = T || \lambda(x + 4) - 18 - 6x = 3T || \lambda x + `
   - `eq_step_cascade`: `len=4 shorts=2 :: (6 - 6)x = 3(2) - 4(6) + 18 || 0 \cdot x = 6 - 24 + 18 || 0 \cdot x = 0 || 0 = 0`

750. **MATH 4.51** (`math-ch4-cases.json`, sev=4) — Parametric Linear Capacity Model
   - fields: solution_overview, tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=1 :: k^2 x - 2k = 4x + k + 6 || k^2 x - 4x = 3k + 6 || (k^2 - 4)x = 3(k + 2) || (k - 2)(k + 2)x = 3(k + 2)`
   - `eq_step_cascade`: `len=3 shorts=2 :: (2 - 2)(2 + 2)x = 3(2 + 2) || (0)(4)x = 3(4) || 0 \cdot x = 12`

751. **MATH 4.53** (`math-ch4-cases.json`, sev=4) — Liquid Level Equalization in Coupled Reservoirs
   - fields: solution_overview, tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=0 :: 15 + \frac{a - q}{6} t^* = 5 + \frac{q - b}{10} t^ || 10 = \left( \frac{q - b}{10} - \frac{a - q}{6} \ri || 10 = \left( \frac{3(q - `
   - `eq_step_cascade`: `len=3 shorts=2 :: 90 - qt = 50 + qt || 2qt = 40 || t_V = \frac{20}{q}`

752. **MATH 4.55** (`math-ch4-cases.json`, sev=4) — Regional Logistics Hub Balancing
   - fields: solution_overview, tactical[0]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=0 :: \text{Beta} = 3x - 12 || \text{Gamma} = \frac{1}{2}x + k || x + (3x - 12) + \left(\frac{1}{2}x + k\right) = 15 || \frac{9}{2}x - 12 `
   - `eq_step_cascade`: `len=3 shorts=2 :: x = 36 - \frac{2}{9}(18) || x = 36 - 4 || 36 - 4 = 32`

753. **MATH 4.56** (`math-ch4-cases.json`, sev=4) — Corporate Budget Allocation with Remainder and Policy Parameter
   - fields: solution_overview, tactical[0], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=2 :: \frac{1}{2}S = m\left(\frac{1}{2}S\right) - 10 || S = mS - 20 || (m - 1)S = 20 || (m - 1)\left(\frac{4}{5}T - 40\right) = 20`
   - `eq_step_cascade`: `len=4 shorts=1 :: (m - 1)\left(\frac{4}{5}T - 40\right) = 20 || (1 - 1)\left(\frac{4}{5}T - 40\right) = 20 || 0 \cdot \left(\frac{4}{5}T - 40\right) =`

754. **MATH 4.61** (`math-ch4-cases.json`, sev=4) — Five separate square and consecutive-integer stories
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: s^{2} = 81 || s = \pm 9 || 9 \cdot 9 = 81`
   - `eq_step_cascade`: `len=4 shorts=4 :: n(n + 1) = 30 || n^{2} + n - 30 = 0 || (n + 6)(n - 5) = 0 || 5 + 6 = 11`

755. **MATH 4.64** (`math-ch4-cases.json`, sev=4) — Five separate quadratic root and discriminant claims
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=4 :: x^{2} - 5x + 6 = 0 || (x - 2)(x - 3) = 0 || \Delta = (-5)^{2} - 4 \cdot 1 \cdot 6 || \Delta = 25 - 24`
   - `eq_step_cascade`: `len=4 shorts=3 :: \Delta = 2^{2} - 4 \cdot 1 \cdot 5 || \Delta = 4 - 20 || 4 - 20 = -16 || \Delta = -16`

756. **MATH 4.66** (`math-ch4-cases.json`, sev=4) — Two consecutive integers whose product is $56$
   - fields: tactical[0], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: n(n + 1) = 56 || n^{2} + n - 56 = 0 || (n + 8)(n - 7) = 0`
   - `eq_step_cascade`: `len=4 shorts=4 :: n(n+1)=56 || n^{2}+n-56=0 || (n+8)(n-7)=0 || 7+8=15`

757. **MATH 4.67** (`math-ch4-cases.json`, sev=4) — A $5$ by $12$ rectangle from area $60$
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=10 shorts=5 :: w(w + 7) = 60 || w^{2} + 7w - 60 = 0 || \Delta = 7^{2} - 4 \cdot 1 \cdot (-60) || \Delta = 49 + 240`
   - `eq_step_cascade`: `len=3 shorts=3 :: A=\ell\cdot w || A=5\cdot 11 || A=55`

758. **MATH 4.68** (`math-ch4-cases.json`, sev=4) — Five separate Pythagoras and factoring stories
   - fields: tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=2 :: x^{2} + (x + 1)^{2} = 5^{2} || x^{2} + (x^{2} + 2x + 1) = 25 || 2x^{2} + 2x + 1 = 25 || 2x^{2} + 2x - 24 = 0`

759. **MATH 4.69** (`math-ch4-cases.json`, sev=4) — Five separate discriminant and root-count claims
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=3 :: \Delta = (-6)^{2} - 4 \cdot 1 \cdot 10 || \Delta = 36 - 40 || 36 - 40 = -4 || \Delta = -4`
   - `eq_step_cascade`: `len=8 shorts=6 :: x^{2} + 2x + 1 = 0 || \Delta = 2^{2} - 4 \cdot 1 \cdot 1 || \Delta = 4 - 4 || 4 - 4 = 0`

760. **MATH 4.72** (`math-ch4-cases.json`, sev=4) — Five separate frame and rectangle-area stories
   - fields: tactical[0], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=8 shorts=0 :: 24 \cdot 16 = 384 || 2 \cdot 384 = 768 || (24 + 2x)(16 + 2x) = 768 || 24 \cdot 16 + 24 \cdot 2x + 2x \cdot 16 + 2x \cdot`
   - `eq_step_cascade`: `len=3 shorts=2 :: 768 - 384 = 384 || 384 + 384 = 768 || 768 = 2 \cdot 384`

761. **MATH 4.74** (`math-ch4-cases.json`, sev=4) — Five separate rectangle-side stories
   - fields: tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=4 :: w \cdot 2w = 48 || 2w^{2} = 48 || w^{2} = 24 || w = \sqrt{24}`
   - `eq_step_cascade`: `len=4 shorts=4 :: P=2(\ell+w) || P=2(4+9) || P=2\cdot 13 || P=26`

762. **MATH 4.75** (`math-ch4-cases.json`, sev=4) — Five separate projectile and $t^{2}$ motion stories
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=3 :: h(1) = 20 \cdot 1 - 5 \cdot 1^{2} || h(1) = 20 - 5 || 20 - 5 = 15 || h(1) = 15`
   - `eq_step_cascade`: `len=4 shorts=0 :: h = -5(t^{2} - 4t) || t^{2} - 4t = (t - 2)^{2} - 4 || h = -5\left((t - 2)^{2} - 4\right) || h = -5(t - 2)^{2} + 20`

763. **MATH 4.76** (`math-ch4-cases.json`, sev=4) — Five separate Vieta sum-and-product stories
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=1 :: t^{2} - 15t + 44 = 0 || \Delta = 15^{2} - 4 \cdot 44 || \Delta = 225 - 176 || 225 - 176 = 49`
   - `eq_step_cascade`: `len=3 shorts=2 :: t^{2} - 12t + 32 = 0 || (t - 4)(t - 8) = 0 || 8 - 4 = 4`

764. **MATH 4.77** (`math-ch4-cases.json`, sev=4) — Five separate Pythagoras-quadratic stories
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=0 :: x^{2} + (x + 7)^{2} = 13^{2} || x^{2} + x^{2} + 14x + 49 = 169 || 2x^{2} + 14x + 49 - 169 = 0 || 2x^{2} + 14x - 120 = 0`
   - `eq_step_cascade`: `len=5 shorts=4 :: c^{2} = 9^{2} + 12^{2} || c^{2} = 81 + 144 || 81 + 144 = 225 || c^{2} = 225`

765. **MATH 4.79** (`math-ch4-cases.json`, sev=4) — Five separate age-product stories
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=2 :: s(s + 20) = 125 || s^{2} + 20s - 125 = 0 || (s + 25)(s - 5) = 0 || 5 \cdot 25 = 125`
   - `eq_step_cascade`: `len=4 shorts=2 :: s(s + 12) = 160 || s^{2} + 12s - 160 = 0 || (s + 20)(s - 8) = 0 || 8 + 12 = 20`

766. **MATH 4.80** (`math-ch4-cases.json`, sev=4) — Five separate ladder and Pythagoras stories
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=1 :: h^{2} + (h + 2)^{2} = 10^{2} || h^{2} + h^{2} + 4h + 4 = 100 || 2h^{2} + 4h + 4 - 100 = 0 || 2h^{2} + 4h - 96 = 0`
   - `eq_step_cascade`: `len=4 shorts=3 :: 5^{2} + b^{2} = 13^{2} || 25 + b^{2} = 169 || b^{2} = 144 || b = 12`

767. **MATH 4.81** (`math-ch4-cases.json`, sev=4) — Five separate reciprocal-sum claims
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=0 :: x + \frac{2}{x} = 3 || \left(x + \frac{2}{x}\right)^{2} = 3^{2} || x^{2} + 2 \cdot x \cdot \frac{2}{x} + \frac{4}{x^{ || x^{2} + 4 +`
   - `eq_step_cascade`: `len=3 shorts=2 :: x \cdot x + x \cdot \frac{3}{x} = 4x || x^{2} + 3 = 4x || x^{2} - 4x + 3 = 0`

768. **MATH 4.86** (`math-ch4-cases.json`, sev=4) — Five separate hard quadratics from different stories
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=3 :: u^{2} - 13u + 36 = 0 || (u - 4)(u - 9) = 0 || u = 4 || u = 9`
   - `eq_step_cascade`: `len=4 shorts=3 :: (x - 3)(x - 5) = 8 || x^{2} - 8x + 15 = 8 || x^{2} - 8x + 7 = 0 || (x - 1)(x - 7) = 0`

769. **MATH 4.87** (`math-ch4-cases.json`, sev=4) — An inner path, a projectile at $40$ m, and consecutive odds
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=0 :: (16 - 2x)(12 - 2x) = 96 || 192 - 56x + 4x^{2} = 96 || x^{2} - 14x + 24 = 0 || (x - 2)(x - 12) = 0`
   - `eq_step_cascade`: `len=4 shorts=2 :: 30t - 5t^{2} = 40 || 5t^{2} - 30t + 40 = 0 || t^{2} - 6t + 8 = 0 || (t - 2)(t - 4) = 0`

770. **MATH 4.88** (`math-ch4-cases.json`, sev=4) — A $10$-$24$-$26$ ladder, a slip, and a vertex
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=2 :: h^{2} + 10^{2} = 26^{2} || h^{2} + 100 = 676 || h^{2} = 576 || h = 24`
   - `eq_step_cascade`: `len=4 shorts=3 :: k^{2} + 9^{2} = 13^{2} || k^{2} = 169 - 81 || 169 - 81 = 88 || k = 2\sqrt{22}`

771. **MATH 4.89** (`math-ch4-cases.json`, sev=4) — A $7$ hour gap, a $5$-$12$-$13$ rectangle, and the last $3$ seconds
   - fields: tactical[0], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=0 :: \frac{1}{t} + \frac{1}{t + 7} = \frac{1}{12} || 12(t + 7) + 12t = t(t + 7) || 24t + 84 = t^{2} + 7t || t^{2} - 17t - 84 = 0`
   - `eq_step_cascade`: `len=4 shorts=0 :: (12 + 2x)(8 + 2x) = 192 || 96 + 40x + 4x^{2} = 192 || x^{2} + 10x - 24 = 0 || (x + 12)(x - 2) = 0`

772. **MATH 4.90** (`math-ch4-cases.json`, sev=4) — Legs differing by $4$, a $12$-$16$-$20$ area, and an inner $24$ by $16$
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=0 :: x^{2} + (x + 4)^{2} = 400 || x^{2} + x^{2} + 8x + 16 = 400 || 2x^{2} + 8x - 384 = 0 || x^{2} + 4x - 192 = 0`
   - `eq_step_cascade`: `len=4 shorts=2 :: 12^{2} + b^{2} = 20^{2} || b^{2} = 256 || b = 16 || \frac{1}{2} \cdot 12 \cdot 16 = 96`

773. **MATH 4.91** (`math-ch4-cases.json`, sev=4) — Sum $15$ product $54$, a walkway, and three consecutives
   - fields: tactical[0], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: (x + y)^{2} = x^{2} + 2xy + y^{2} || 225 = 117 + 2xy || xy = 54`
   - `eq_step_cascade`: `len=4 shorts=0 :: \frac{1}{t} + \frac{1}{t + 4} = \frac{5}{24} || 24(t + 4) + 24t = 5t(t + 4) || 48t + 96 = 5t^{2} + 20t || 0 = 5t^{2} - 28t - 96`

774. **MATH 4.92** (`math-ch4-cases.json`, sev=4) — Parameter-Dependent Quadratic Equation and Nature of Roots
   - fields: solution_overview, tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=8 shorts=4 :: D = B^2 - 4AC || D = (2m)^2 - 4(m-2)(m+3) || D = 4m^2 - 4(m^2 + m - 6) || D = 24 - 4m`
   - `eq_step_cascade`: `len=4 shorts=2 :: (6-2)x^2 + 2(6)x + (6+3) = 0 || 4x^2 + 12x + 9 = 0 || (2x + 3)^2 = 0 || x = -\frac{3}{2}`

775. **MATH 4.93** (`math-ch4-cases.json`, sev=4) — Break-Even Quantities and Vieta Relations
   - fields: solution_overview, tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=1 :: \Delta = b^2 - 4ac || \Delta = [-(2m - 1)]^2 - 4(1)(m^2 - m - 6) || \Delta = 4m^2 - 4m + 1 - 4m^2 + 4m + 24 || \Delta = 25`
   - `eq_step_cascade`: `len=5 shorts=0 :: x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1 x_2 || x_1^2 + x_2^2 = (2m - 1)^2 - 2(m^2 - m - 6) || x_1^2 + x_2^2 = 4m^2 - 4m + 1 - 2m^2 + 2m`

776. **MATH 4.94** (`math-ch4-cases.json`, sev=4) — Parameter Conditions for Root Signs in a Break-Even Model
   - fields: solution_overview, tactical[1], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=0 :: \Delta = b^2 - 4ac || \Delta = [-2(m-1)]^2 - 4(1)(m+5) || \Delta = 4(m^2 - 2m + 1) - 4(m+5) || \Delta = 4(m^2 - 3m - 4)`
   - `eq_step_cascade`: `len=4 shorts=0 :: x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1 x_2 || x_1^2 + x_2^2 = [2(m-1)]^2 - 2(m+5) || x_1^2 + x_2^2 = 4(m^2 - 2m + 1) - 2m - 10 || x_1^`

777. **MATH 4.98** (`math-ch4-cases.json`, sev=4) — Vertex Form and Parametric Analysis of Operating Profit
   - fields: solution_overview, tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=0 :: P_k(q) = -3\left(q^2 - 2(k+1)q\right) - 3k^2 + 12k || P_k(q) = -3\left((q - (k+1))^2 - (k+1)^2\right) -  || P_k(q) = -3(q - (k+1))^2`
   - `eq_step_cascade`: `len=6 shorts=0 :: -3(q - (k+1))^2 + 18k - 12 = 0 || (q - (k+1))^2 = 6k - 4 || q_1 = k + 1 - \sqrt{6k - 4} || q_2 = k + 1 + \sqrt{6k - 4}`

778. **MATH 4.100** (`math-ch4-cases.json`, sev=4) — Perimeter and Area of a Rectangular Depot
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=3 :: x(20 - x) = A || 20x - x^2 = A || x^2 - 20x + A = 0 || \Delta = (-20)^2 - 4(1)(A)`
   - `eq_step_cascade`: `len=4 shorts=2 :: \Delta = 400 - 4(105) || \Delta = 400 - 420 || 400 - 420 = -20 || \Delta = -20`

779. **MATH 4.101** (`math-ch4-cases.json`, sev=4) — Parameterized Quadratic Family and Root Separation
   - fields: solution_overview, tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=0 :: \Delta = b^2 - 4ac || \Delta = [-(m-2)]^2 - 4(1)(m-5) || \Delta = m^2 - 4m + 4 - 4m + 20 || \Delta = m^2 - 8m + 24`
   - `eq_step_cascade`: `len=3 shorts=2 :: \Delta = (m-4)^2 + 8 || (m-4)^2 + 8 = 0 || (m-4)^2 = -8`

780. **MATH 4.102** (`math-ch4-cases.json`, sev=4) — Roots and Reciprocals of a Parameterized Quadratic Equation
   - fields: solution_overview, tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=0 :: \Delta = b^2 - 4ac || \Delta = (-(k + 2))^2 - 4(2)(k - 1) || \Delta = k^2 + 4k + 4 - 8k + 8 || \Delta = k^2 - 4k + 12`
   - `eq_step_cascade`: `len=4 shorts=2 :: \frac{1}{x_1} + \frac{1}{x_2} = \frac{k + 2}{k - 1 || \frac{k + 2}{k - 1} = 1 || k + 2 = k - 1 || 2 = -1`

781. **MATH 4.103** (`math-ch4-cases.json`, sev=4) — Break-Even Analysis with Irrational Roots
   - fields: tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=1 :: x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1 x_2 || x_1^2 + x_2^2 = 6^2 - 2\left(\frac{7}{2}\right) || x_1^2 + x_2^2 = 36 - 7 || 36 - 7 = 29`
   - `eq_step_cascade`: `len=5 shorts=0 :: \Pi(x) = -2(x^2 - 6x) - 7 || \Pi(x) = -2(x - 3)^2 + 18 - 7 || \Pi(x) = -2(x - 3)^2 + 11 || -2(x - 3)^2 + 11 - k = 0`

782. **MATH 4.104** (`math-ch4-cases.json`, sev=4) — Parametric Quadratic Family and Root Shifts
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: (k+1)(0)^2 - (3k+1)(0) + (k^2 - 4) = 0 || k^2 - 4 = 0 || (k-2)(k+2) = 0`
   - `eq_step_cascade`: `len=4 shorts=1 :: (-1+1)x^2 - (3(-1)+1)x + ((-1)^2 - 4) = 0 || 0x^2 - (-2)x + (1 - 4) = 0 || 2x - 3 = 0 || x = \frac{3}{2}`

783. **MATH 4.106** (`math-ch4-cases.json`, sev=4) — Price-Demand Revenue Models and Quadratic Structure
   - fields: solution_overview, tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=0 :: R(p) = -3p^2 + 120p || R(p) = -3(p^2 - 40p) || R(p) = -3\left((p - 20)^2 - 400\right) || R(p) = -3(p - 20)^2 + 1200`
   - `eq_step_cascade`: `len=5 shorts=2 :: -3p^2 + 120p = M || 3p^2 - 120p + M = 0 || p^2 - 40p + \frac{M}{3} = 0 || p_1 + p_2 = 40`

784. **MATH 4.107** (`math-ch4-cases.json`, sev=4) — Parametric Quadratic Profit Model
   - fields: solution_overview, tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=0 :: \Delta = b^2 - 4ac || \Delta = (-(2k-1))^2 - 4(1)(-(k+3)) || \Delta = 4k^2 - 4k + 1 + 4k + 12 || \Delta = 4k^2 + 13`
   - `eq_step_cascade`: `len=5 shorts=0 :: P_k(x) = x^2 - (2k-1)x - (k+3) || P_k(x) = \left(x - \frac{2k-1}{2}\right)^2 - \left || P_k(x) = \left(x - \frac{2k-1}{2}\right)^2 -`

785. **MATH 4.111** (`math-ch4-cases.json`, sev=4) — Break-Even Output and Factorable Higher-Degree Forms
   - fields: tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=0 :: q(x) = 2\left(x^2 - 3x\right) + 1 || q(x) = 2\left(x^2 - 3x + \frac{9}{4} - \frac{9}{4} || q(x) = 2\left(x - \frac{3}{2}\right)^2 - `

786. **MATH 4.115** (`math-ch4-cases.json`, sev=4) — Parameterized Quadratic Equation and Root Properties
   - fields: solution_overview, tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=0 :: \Delta = b^2 - 4ac || \Delta = [-2(k + 1)]^2 - 4(k - 1)(2k - 1) || \Delta = 4(k^2 + 2k + 1) - 4(2k^2 - 3k + 1) || \Delta = 4(-k^2 + `
   - `eq_step_cascade`: `len=4 shorts=2 :: (5 - 1)x^2 - 2(5 + 1)x + (2(5) - 1) = 0 || 4x^2 - 12x + 9 = 0 || (2x - 3)^2 = 0 || x = \frac{3}{2}`

787. **MATH 4.118** (`math-ch4-cases.json`, sev=4) — Five separate rational proportions
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=4 :: \frac{x}{x + 3} = \frac{2}{5} || 5x = 2(x + 3) || 5x = 2x + 6 || 3x = 6`
   - `eq_step_cascade`: `len=4 shorts=3 :: \frac{x}{x + 1} = \frac{3}{4} || 4x = 3(x + 1) || 4x = 3x + 3 || x = 3`

788. **MATH 4.121** (`math-ch4-cases.json`, sev=4) — Five independent absolute-value distance equations
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=9 shorts=8 :: \lvert x - 7 \rvert = 4 || x - 7 = 4 || x - 7 + 7 = 4 + 7 || 4 + 7 = 11`
   - `eq_step_cascade`: `len=8 shorts=8 :: x + 2 = 5 || x + 2 - 2 = 5 - 2 || 5 - 2 = 3 || x = 3`

789. **MATH 4.123** (`math-ch4-cases.json`, sev=4) — Five independent radical equations from square roots
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=4 :: x + 7 = 25 || x + 7 - 7 = 25 - 7 || 25 - 7 = 18 || x = 18`
   - `eq_step_cascade`: `len=6 shorts=5 :: 3x - 2 = 16 || 3x = 16 + 2 || 16 + 2 = 18 || 3x = 18`

790. **MATH 4.124** (`math-ch4-cases.json`, sev=4) — Five independent square-root equations
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=5 :: 4x + 5 = 49 || 4x = 49 - 5 || 49 - 5 = 44 || 4x = 44`
   - `eq_step_cascade`: `len=4 shorts=4 :: x + 3 = 36 || x + 3 - 3 = 36 - 3 || 36 - 3 = 33 || x = 33`

791. **MATH 4.126** (`math-ch4-cases.json`, sev=4) — Five separate rational equations, each with a hole
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=3 :: \frac{x}{x - 1} = 3 || x = 3(x - 1) || x = 3x - 3 || 2x = 3`
   - `eq_step_cascade`: `len=5 shorts=3 :: \frac{x}{x - 4} = 2 || x = 2(x - 4) || x = 2x - 8 || x = 8`

792. **MATH 4.128** (`math-ch4-cases.json`, sev=4) — Five separate absolute-value readings
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=9 shorts=8 :: \lvert x - 4 \rvert = 6 || x - 4 = 6 || x - 4 + 4 = 6 + 4 || 6 + 4 = 10`
   - `eq_step_cascade`: `len=9 shorts=7 :: \lvert x - 50 \rvert = 3 || x - 50 = 3 || x - 50 + 50 = 3 + 50 || 3 + 50 = 53`

793. **MATH 4.129** (`math-ch4-cases.json`, sev=4) — Five radical equations with extraneous-root checks
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=3 :: 2x + 1 = (x - 1)^{2} || 2x + 1 = x^{2} - 2x + 1 || 0 = x^{2} - 4x || 0 = x(x - 4)`
   - `eq_step_cascade`: `len=3 shorts=2 :: x + 3 = (x - 3)^{2} || 0 = x^{2} - 7x + 6 || 0 = (x - 1)(x - 6)`

794. **MATH 4.131** (`math-ch4-cases.json`, sev=4) — Five independent rational proportion equations
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=2 :: \frac{x}{x - 3} = \frac{x + 6}{x - 1} || x(x - 1) = (x + 6)(x - 3) || x^{2} - x = x^{2} + 3x - 18 || -x = 3x - 18`
   - `eq_step_cascade`: `len=8 shorts=3 :: \frac{x + 2}{x - 4} = \frac{x + 8}{x - 2} || (x + 2)(x - 2) = (x + 8)(x - 4) || x^{2} - 4 = x^{2} + 4x - 32 || -4 = 4x - 32`

795. **MATH 4.132** (`math-ch4-cases.json`, sev=4) — Five independent reciprocal equations
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=2 :: \frac{x + 1}{x} + \frac{x}{x + 1} = \frac{5}{2} || 2(x + 1)^{2} + 2x^{2} = 5x(x + 1) || 4x^{2} + 4x + 2 = 5x^{2} + 5x || 0 = x^{2} +`
   - `eq_step_cascade`: `len=5 shorts=1 :: \frac{1}{x} + \frac{1}{x + 1} = \frac{3}{2} || 2(x + 1) + 2x = 3x(x + 1) || 4x + 2 = 3x^{2} + 3x || 0 = 3x^{2} - x - 2`

796. **MATH 4.133** (`math-ch4-cases.json`, sev=4) — Five independent radical isolation equations
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=0 :: 2x + 1 = (4 - x)^{2} || 2x + 1 = x^{2} - 8x + 16 || 0 = x^{2} - 10x + 15 || x = 5 \pm \sqrt{10}`
   - `eq_step_cascade`: `len=4 shorts=1 :: x - 1 = (2 - x)^{2} || x - 1 = 4 - 4x + x^{2} || 0 = x^{2} - 5x + 5 || x = \frac{5 \pm \sqrt{5}}{2}`

797. **MATH 4.134** (`math-ch4-cases.json`, sev=4) — Five independent radical difference equations
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=8 shorts=4 :: \sqrt{x + 12} = 2 + \sqrt{x} || x + 12 = 4 + 4\sqrt{x} + x || 12 = 4 + 4\sqrt{x} || 8 = 4\sqrt{x}`
   - `eq_step_cascade`: `len=7 shorts=4 :: \sqrt{x + 24} = 2 + \sqrt{x} || x + 24 = 4 + 4\sqrt{x} + x || 20 = 4\sqrt{x} || 5 = \sqrt{x}`

798. **MATH 4.135** (`math-ch4-cases.json`, sev=4) — Five further radical isolations
   - fields: tactical[0]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=0 :: x + 8 = 36 - 12\sqrt{x} + x || 8 = 36 - 12\sqrt{x} || 12\sqrt{x} = 28 || \sqrt{x} = \frac{7}{3}`

799. **MATH 4.136** (`math-ch4-cases.json`, sev=4) — Five independent absolute-value equations
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=3 :: 3 - 1 = 3x || x = \frac{2}{3} || 3 - 2x = -x - 1 || 4 = x`
   - `eq_step_cascade`: `len=12 shorts=10 :: 2x + 1 = 5 || 2x = 5 - 1 || 5 - 1 = 4 || 2x = 4`

800. **MATH 4.137** (`math-ch4-cases.json`, sev=4) — A reciprocal difference, a radical extra, and three more
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=8 shorts=4 :: \frac{1}{x - 1} - \frac{1}{x + 1} = \frac{1}{4} || 4(x + 1) - 4(x - 1) = x^{2} - 1 || 4x + 4 - 4x + 4 = x^{2} - 1 || 8 = x^{2} - 1`
   - `eq_step_cascade`: `len=4 shorts=3 :: x + 3 = (x - 3)^{2} || 0 = (x - 1)(x - 6) || \sqrt{1 + 3} = 2 || 1 - 3 = -2`

801. **MATH 4.139** (`math-ch4-cases.json`, sev=4) — A $2$ m isolate-and-square gap, posts $1$ and $7$, and a radical extra
   - fields: tactical[0], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=10 shorts=6 :: \sqrt{x + 21} = 2 + \sqrt{x + 1} || x + 21 = 4 + 4\sqrt{x + 1} + x + 1 || 16 = 4\sqrt{x + 1} || 4 = \sqrt{x + 1}`
   - `eq_step_cascade`: `len=4 shorts=1 :: x + 2 + x - 1 = (x - 1)(x + 2) || 2x + 1 = x^{2} + x - 2 || 0 = x^{2} - x - 3 || x = \frac{1 \pm \sqrt{13}}{2}`

802. **MATH 4.141** (`math-ch4-cases.json`, sev=4) — A $1$ m radical gap, a two-modulus sum, and a cancelled hole
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=10 shorts=6 :: \sqrt{x + 5} = 1 + \sqrt{x - 2} || x + 5 = 1 + 2\sqrt{x - 2} + x - 2 || 6 = 2\sqrt{x - 2} || 3 = \sqrt{x - 2}`
   - `eq_step_cascade`: `len=5 shorts=4 :: 3x - 2 = 11 || 3x = 11 + 2 || 11 + 2 = 13 || 3x = 13`

803. **MATH 4.142** (`math-ch4-cases.json`, sev=4) — A sum of roots equal to $7$, equal abs-values, and a two-fraction mix
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=5 :: 3 - 2x = x + 4 || -3x = 1 || x = -\frac{1}{3} || 3 - 2x = -x - 4`
   - `eq_step_cascade`: `len=8 shorts=4 :: \frac{3}{x(x + 3)} = \frac{1}{4} || 12 = x(x + 3) || 12 = x^{2} + 3x || 0 = x^{2} + 3x - 12`

804. **MATH 4.143** (`math-ch4-cases.json`, sev=4) — A $2$ m gap recovering $25$, posts adding to $12$, and $\sqrt{5x + 1}$
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=4 :: \sqrt{x + 24} = 2 + \sqrt{x} || x + 24 = 4 + 4\sqrt{x} + x || 20 = 4\sqrt{x} || 5 = \sqrt{x}`
   - `eq_step_cascade`: `len=5 shorts=1 :: 2(x + 1) - 1(x - 3) = (x - 3)(x + 1) || 2x + 2 - x + 3 = x^{2} - 2x - 3 || x + 5 = x^{2} - 2x - 3 || 0 = x^{2} - 3x - 8`

805. **MATH 4.144** (`math-ch4-cases.json`, sev=4) — Solvability of a Rational Equation
   - fields: solution_overview, tactical[1], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=4 :: x^2 - x - 2 = (x - 2)(x + 1) || D = \mathbb{R} \setminus \{-1, 2\} || x(x + 1) - 1(x - 2) = 6 || x^2 + x - x + 2 = 6`
   - `eq_step_cascade`: `len=3 shorts=2 :: x(x + 1) - (x - 2) = 6 || x^2 + 2 = 6 || x^2 - 4 = 0`

806. **MATH 4.148** (`math-ch4-cases.json`, sev=4) — Absolute-Value Equation with Case Analysis
   - fields: solution_overview, tactical[0], tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=4 :: x^2 - 2x - 3(x - 1) - 3 = 0 || x^2 - 5x = 0 || x(x - 5) = 0 || x^2 - 2x - 3(-(x - 1)) - 3 = 0`
   - `eq_step_cascade`: `len=6 shorts=4 :: x^2 - 2x - 3(x - 1) - 3 = 0 || x^2 - 5x = 0 || x(x - 5) = 0 || x^2 - 2x - 3(-(x - 1)) - 3 = 0`

807. **MATH 4.149** (`math-ch4-cases.json`, sev=4) — Absolute Value Equation with a Linear Right-Hand Side
   - fields: solution_overview, tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=4 :: x^2 - 5x + 6 = 6 - 2x || x^2 - 3x = 0 || x(x - 3) = 0 || -(x^2 - 5x + 6) = 6 - 2x`
   - `eq_step_cascade`: `len=4 shorts=2 :: x^2 - 5x + 6 = 6 - 2x || x(x - 3) = 0 || -(x^2 - 5x + 6) = 6 - 2x || (x - 3)(x - 4) = 0`

808. **MATH 4.151** (`math-ch4-cases.json`, sev=4) — Parametric Rational Equation Reducible to Linear
   - fields: solution_overview, tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=1 :: x^2 - x - 6 = (x - 3)(x + 2) || D = \mathbb{R} \setminus \{-2, 3\} || (2x - a)(x + 2) + (x + 1)(x - 3) = 3x^2 + 4 || (2x^2 + 4x - ax`
   - `eq_step_cascade`: `len=5 shorts=3 :: x = \frac{2a + 7}{2 - a} || \frac{2a + 7}{2 - a} = -2 || 2a + 7 = -2(2 - a) || 2a + 7 = -4 + 2a`

809. **MATH 4.155** (`math-ch4-cases.json`, sev=4) — Solvability and Extraneous Roots of a Radical Equation
   - fields: solution_overview, tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=2 :: \sqrt{2x + 3} = 2 - \sqrt{x - 1} || 2x + 3 = 4 - 4\sqrt{x - 1} + (x - 1) || 2x + 3 = x + 3 - 4\sqrt{x - 1} || x = -4\sqrt{x - 1}`
   - `eq_step_cascade`: `len=5 shorts=2 :: \sqrt{2x + 3} = 2 - \sqrt{x - 1} || 2x + 3 = 4 - 4\sqrt{x - 1} + x - 1 || x = -4\sqrt{x - 1} || x^2 = 16(x - 1)`

810. **MATH 4.156** (`math-ch4-cases.json`, sev=4) — Solvability of a Multi-Absolute-Value Equation
   - fields: solution_overview, tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=12 shorts=6 :: (-2x + 4) + (-x - 1) = x - 2 || -3x + 3 = x - 2 || -4x = -5 || x = \frac{5}{4}`
   - `eq_step_cascade`: `len=4 shorts=2 :: (-2x + 4) + (-x - 1) = x - 2 || -3x + 3 = x - 2 || -4x = -5 || x = \frac{5}{4}`

811. **MATH 4.157** (`math-ch4-cases.json`, sev=4) — Data Pipeline Work-Rate and Equation Models
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=2 :: (x+1)(x+2) - 3(x-2) = 12 || x^2 + 3x + 2 - 3x + 6 = 12 || x^2 + 8 = 12 || x^2 = 4`
   - `eq_step_cascade`: `len=6 shorts=1 :: \frac{1}{x} + \frac{1}{x+1} = \frac{1}{\frac{6}{5} || \frac{2x+1}{x(x+1)} = \frac{5}{6} || 6(2x+1) = 5x(x+1) || 12x + 6 = 5x^2 + 5x`

812. **MATH 4.159** (`math-ch4-cases.json`, sev=4) — Rational Equation with Squared Denominator and Absolute Value
   - fields: solution_overview, tactical[1], tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=3 :: \frac{3}{u^2} - \frac{2}{u} = 1 || 3 - 2u = u^2 || u^2 + 2u - 3 = 0 || (u+3)(u-1) = 0`
   - `eq_step_cascade`: `len=3 shorts=3 :: x_1 + x_2=1 + 3 || 1 + 3 = 4 || x_1 + x_2=4`

813. **MATH 4.160** (`math-ch4-cases.json`, sev=4) — Rational Equation with Factorisable Denominators
   - fields: solution_overview, tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=2 :: (x+1)(x+1) + 2(x-2) = 5x - 1 || (x^2 + 2x + 1) + (2x - 4) = 5x - 1 || x^2 + 4x - 3 = 5x - 1 || x^2 - x - 2 = 0`
   - `eq_step_cascade`: `len=3 shorts=3 :: x = 2 || x = -1 || 2 + (-1) = 1`

814. **MATH 4.161** (`math-ch4-cases.json`, sev=4) — Rational Equation with Absolute Value
   - fields: solution_overview, tactical[0]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=8 shorts=6 :: |2x - 1| + 3 = (x - 1)(x + 1) || |2x - 1| + 3 = x^2 - 1 || |2x - 1| = x^2 - 4 || 2x - 1 = x^2 - 4`
   - `eq_step_cascade`: `len=8 shorts=6 :: |2x - 1| + 3 = (x - 1)(x + 1) || |2x - 1| + 3 = x^2 - 1 || |2x - 1| = x^2 - 4 || 2x - 1 = x^2 - 4`

815. **MATH 4.165** (`math-ch4-cases.json`, sev=4) — Round-Trip Average Speed and Algebraic Equation Forms
   - fields: solution_overview, tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=0 :: \frac{v(v - 20)}{v - 10} = 48 || v(v - 20) = 48(v - 10) || v^2 - 20v = 48v - 480 || v^2 - 68v + 480 = 0`
   - `eq_step_cascade`: `len=5 shorts=1 :: \sqrt{10w} = w - 20 || 10w = (w - 20)^2 || 10w = w^2 - 40w + 400 || w^2 - 50w + 400 = 0`

816. **MATH 4.167** (`math-ch4-cases.json`, sev=4) — Symmetric Solutions of an Absolute-Value Equation
   - fields: solution_overview
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=8 shorts=5 :: \frac{||x| - 2|(|x| + 2)}{|x| + 1} = \frac{|x| + 2 || \frac{||x| - 2|}{|x| + 1} = \frac{1}{2} || 2||x| - 2| = |x| + 1 || 2u - 4 = u `

817. **MATH 4.168** (`math-ch4-cases.json`, sev=4) — Solvability and Extraneous Roots of a Radical Equation
   - fields: solution_overview, tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=8 shorts=6 :: u^2 = x + 3 || x = u^2 - 3 || 2(u^2 - 3) - 5u + 3 = 0 || 2u^2 - 5u - 3 = 0`
   - `eq_step_cascade`: `len=4 shorts=0 :: (2x + 3)^2 = \left(5\sqrt{x+3}\right)^2 || 4x^2 + 12x + 9 = 25(x + 3) || 4x^2 + 12x + 9 = 25x + 75 || 4x^2 - 13x - 66 = 0`

818. **MATH 4.171** (`math-ch4-cases.json`, sev=4) — Different bases on the two sides
   - fields: tactical[0]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=0 :: x \log 5 = (x + 3)\log 2 || x \log 5 - x \log 2 = 3\log 2 || x(\log 5 - \log 2) = 3\log 2 || x\log\left(\frac{5}{2}\right) = 3\log 2`

819. **MATH 4.173** (`math-ch4-cases.json`, sev=4) — Domain decides the answer
   - fields: solution_overview, tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=3 :: \log_{3}((x - 1)(x - 3)) = 1 || (x - 1)(x - 3) = 3^1 || x^2 - 4x + 3 = 3 || x^2 - 4x = 0`
   - `eq_step_cascade`: `len=4 shorts=4 :: x - 1 = 0 - 1 || 0 - 1 = -1 || x - 3 = 0 - 3 || 0 - 3 = -3`

820. **MATH 4.175** (`math-ch4-cases.json`, sev=4) — Doubling a capital at a fixed rate
   - fields: solution_overview
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=1 :: K(t) = K_0 (1 + r)^t || K(t) = K_0 (1.04)^t || K_0 (1.04)^t = m K_0 || 1.04^t = m`

821. **MATH 4.182** (`math-ch4-cases.json`, sev=4) — A rational equation with a factored denominator
   - fields: tactical[1], tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: 2(x + 2) + 3(x - 1) = 5 || 2x + 4 + 3x - 3 = 5 || 5x + 1 = 5`
   - `eq_step_cascade`: `len=6 shorts=5 :: 5x + 1 = 5 || 5x = 5 - 1 || 5 - 1 = 4 || 5x = 4`

822. **MATH 4.188** (`math-ch4-cases.json`, sev=4) — A logarithmic equation with a parameter
   - fields: solution_overview
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=2 :: \log_{2} x + \log_{2}(x - a) = 3 || \log_{2}\big(x(x - a)\big) = 3 || x(x - a) = 2^3 || x^2 - ax - 8 = 0`

823. **MATH 4.189** (`math-ch4-cases.json`, sev=4) — A linear equation controlled by a parameter
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: (2^{2} - 4)x = 2 - 2 || 2 - 2 = 0 || 0 \cdot x = 0`
   - `eq_step_cascade`: `len=3 shorts=2 :: \big((-2)^{2} - 4\big)x = -2 - 2 || -2 - 2 = -4 || 0 \cdot x = -4`

824. **MATH 4.193** (`math-ch4-cases.json`, sev=4) — A logarithm of a quadratic expression
   - fields: tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: x^{2} - 2x + 9 = 9 || x^{2} - 2x = 0 || x(x - 2) = 0`

825. **MATH 4.194** (`math-ch4-cases.json`, sev=4) — Exam-style tasks - 1
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=5 :: 2x+1=7 || 2x = 7 - 1 || 7 - 1 = 6 || 2x=6`
   - `eq_step_cascade`: `len=4 shorts=3 :: x^{2}-9x+18=0 || (x-3)(x-6)=0 || 3+6 = 9 || s=9`

826. **MATH 4.195** (`math-ch4-cases.json`, sev=4) — Exam-style tasks - 2
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=3 :: x^{2}-9x+18=0 || (x-3)(x-6)=0 || 3+6 = 9 || s=9`
   - `eq_step_cascade`: `len=5 shorts=4 :: \dfrac{x+3}{x-1}=2 || x+3=2(x-1) || x+3=2x-2 || 3+2 = 2x-x`

827. **MATH 4.196** (`math-ch4-cases.json`, sev=4) — Exam-style tasks - 3
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=4 :: \dfrac{x+2}{x-1}=2 || x+2=2(x-1) || x+2=2x-2 || 2+2 = 2x-x`
   - `eq_step_cascade`: `len=4 shorts=4 :: 2^{x}=8 || 8=2^{3} || 2^{x}=2^{3} || x=3`

828. **MATH 4.197** (`math-ch4-cases.json`, sev=4) — Exam-style tasks - 4
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=4 :: 2^{x}=4 || 4=2^{2} || 2^{x}=2^{2} || x=2`
   - `eq_step_cascade`: `len=6 shorts=5 :: 2x+5=13 || 2x = 13 - 5 || 13 - 5 = 8 || 2x=8`

829. **MATH 4.198** (`math-ch4-cases.json`, sev=4) — Exam-style tasks - 5
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=5 :: 2x+3=9 || 2x = 9 - 3 || 9 - 3 = 6 || 2x=6`
   - `eq_step_cascade`: `len=4 shorts=3 :: x^{2}-9x+18=0 || (x-3)(x-6)=0 || 3+6 = 9 || s=9`

830. **MATH 4.199** (`math-ch4-cases.json`, sev=4) — Exam-style tasks - 6
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=3 :: x^{2}-9x+18=0 || (x-3)(x-6)=0 || 3+6 = 9 || s=9`
   - `eq_step_cascade`: `len=5 shorts=4 :: \dfrac{x+3}{x-1}=2 || x+3=2(x-1) || x+3=2x-2 || 3+2 = 2x-x`

831. **MATH 4.200** (`math-ch4-cases.json`, sev=4) — Exam-style tasks - 7
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=4 :: \dfrac{x+2}{x-1}=2 || x+2=2(x-1) || x+2=2x-2 || 2+2 = 2x-x`
   - `eq_step_cascade`: `len=4 shorts=4 :: 2^{x}=8 || 8=2^{3} || 2^{x}=2^{3} || x=3`

832. **MATH 4.201** (`math-ch4-cases.json`, sev=4) — Exam-style tasks - 8
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=4 :: 2^{x}=4 || 4=2^{2} || 2^{x}=2^{2} || x=2`
   - `eq_step_cascade`: `len=6 shorts=5 :: 2x+1=9 || 2x = 9 - 1 || 9 - 1 = 8 || 2x=8`

833. **MATH 4.202** (`math-ch4-cases.json`, sev=4) — Exam-style tasks - 9
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=5 :: 2x+5=11 || 2x = 11 - 5 || 11 - 5 = 6 || 2x=6`
   - `eq_step_cascade`: `len=4 shorts=3 :: x^{2}-9x+18=0 || (x-3)(x-6)=0 || 3+6 = 9 || s=9`

834. **MATH 4.203** (`math-ch4-cases.json`, sev=4) — Exam-style tasks - 10
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=3 :: x^{2}-9x+18=0 || (x-3)(x-6)=0 || 3+6 = 9 || s=9`
   - `eq_step_cascade`: `len=5 shorts=4 :: \dfrac{x+3}{x-1}=2 || x+3=2(x-1) || x+3=2x-2 || 3+2 = 2x-x`

835. **MATH 4.205** (`math-ch4-cases.json`, sev=4) — Exam-style tasks - 12
   - fields: tactical[0], tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=4 :: q-4=0 || q=4 || q-10=0 || q=10`
   - `eq_step_cascade`: `len=4 shorts=1 :: q=\frac{r_1+r_2}{2} || q=\frac{4+10}{2} || q=\frac{14}{2} || q=7`

836. **MATH 4.209** (`math-ch4-cases.json`, sev=4) — Exam-style tasks - 16
   - fields: tactical[0], tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=4 :: q-5=0 || q=5 || q-11=0 || q=11`
   - `eq_step_cascade`: `len=4 shorts=1 :: q=\frac{r_1+r_2}{2} || q=\frac{5+11}{2} || q=\frac{16}{2} || q=8`

837. **MATH 4.213** (`math-ch4-cases.json`, sev=4) — Exam-style tasks - 20
   - fields: tactical[0], tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=4 :: q-6=0 || q=6 || q-12=0 || q=12`
   - `eq_step_cascade`: `len=4 shorts=1 :: q=\frac{r_1+r_2}{2} || q=\frac{6+12}{2} || q=\frac{18}{2} || q=9`

838. **MATH 4.214** (`math-ch4-cases.json`, sev=4) — Exam-style tasks - 21
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=3 :: x(x + 5) = 84 || x^{2} + 5x - 84 = 0 || (x + 12)(x - 7) = 0 || 7 + 5 = 12`
   - `eq_step_cascade`: `len=8 shorts=2 :: \frac{0.15}{1.5 + w} = 0.04 || 0.15 = 0.04(1.5 + w) || 0.15 = 0.06 + 0.04w || 0.09 = 0.04w`

839. **MATH 4.215** (`math-ch4-cases.json`, sev=4) — Exam-style tasks - 22
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: s + 28 + 8 = 2(s + 8) || s + 36 = 2s + 16 || s = 20`
   - `eq_step_cascade`: `len=4 shorts=0 :: (24 + 2x)(16 + 2x) = 768 || 4x^{2} + 80x + 384 = 768 || x^{2} + 20x - 96 = 0 || \Delta = 400 + 384`

840. **MATH 4.216** (`math-ch4-cases.json`, sev=4) — Exam-style tasks - 23
   - fields: tactical[1], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: x(x + 3) = 40 || x^{2} + 3x - 40 = 0 || (x + 8)(x - 5) = 0`
   - `eq_step_cascade`: `len=3 shorts=2 :: a + 0.5a + 0.25a = 8750 || 1.75a = 8750 || a = 5000`

841. **MATH 4.223** (`math-ch4-cases.json`, sev=4) — Exam-style tasks - 30
   - fields: tactical[0], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: n(n + 1) = 42 || n^{2} + n - 42 = 0 || (n + 7)(n - 6) = 0`
   - `eq_step_cascade`: `len=3 shorts=2 :: a + 0.5a + 0.25a = 6125 || 1.75a = 6125 || a = 3500`

842. **MATH 4.227** (`math-ch4-cases.json`, sev=4) — Exam-style tasks - 34
   - fields: tactical[0], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: -3x = 12 || x = \frac{12}{-3} || x = -4`
   - `eq_step_cascade`: `len=3 shorts=2 :: a + 0.8a + 0.64a = 12200 || 2.44a = 12200 || a = 5000`

843. **MATH 4.230** (`math-ch4-cases.json`, sev=4) — Exam-style tasks - 37
   - fields: tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: a + 0.8a + 0.64a = 12200 || 2.44a = 12200 || a = 5000`
   - `eq_step_cascade`: `len=4 shorts=4 :: 2x + 1 = x + 8 || 2x - x = 8 - 1 || 8 - 1 = 7 || x = 7`

844. **MATH 4.233** (`math-ch4-cases.json`, sev=4) — Exam-style tasks - 40
   - fields: tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: a + 0.8a + 0.64a = 15250 || 2.44a = 15250 || a = 6250`

845. **MATH 5.61** (`math-ch5-exam.json`, sev=4) — Exam-style tasks - 1
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=16 shorts=8 :: 1x+1y=140 || 18x+10y=2048 || 1\cdot 10 = 10 || 1\cdot 18 = 18`
   - `eq_step_cascade`: `len=16 shorts=10 :: 1x+1y=60 || 20x+8y=780 || 1\cdot 8 = 8 || 1\cdot 20 = 20`

846. **MATH 5.62** (`math-ch5-exam.json`, sev=4) — Exam-style tasks - 2
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=16 shorts=8 :: 1x+1y=50 || 70x+30y=2300 || 1\cdot 30 = 30 || 1\cdot 70 = 70`
   - `eq_step_cascade`: `len=16 shorts=9 :: 1x+1y=72 || 1x-3y=-16 || 1\cdot (-3) = -3 || 1\cdot 1 = 1`

847. **MATH 5.63** (`math-ch5-exam.json`, sev=4) — Exam-style tasks - 3
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=16 shorts=10 :: 1x-4y=0 || 1x-2y=12 || 1\cdot (-2) = -2 || (-4)\cdot 1 = -4`
   - `eq_step_cascade`: `len=16 shorts=11 :: 3x+3y=330 || 1x-1y=14 || 3\cdot (-1) = -3 || 3\cdot 1 = 3`

848. **MATH 5.64** (`math-ch5-exam.json`, sev=4) — Exam-style tasks - 4
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=16 shorts=12 :: 1x+1y=28 || 1x-1y=16 || 1\cdot (-1) = -1 || 1\cdot 1 = 1`
   - `eq_step_cascade`: `len=16 shorts=14 :: 4x+3y=87 || 2x+5y=89 || 4\cdot 5 = 20 || 3\cdot 2 = 6`

849. **MATH 5.65** (`math-ch5-exam.json`, sev=4) — Exam-style tasks - 5
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=8 shorts=6 :: 3x+9y=75 || 1x+3y=28 || 3\cdot 3 = 9 || 9\cdot 1 = 9`
   - `eq_step_cascade`: `len=16 shorts=8 :: 1x+1y=72 || 58x+34y=3312 || 1\cdot 34 = 34 || 1\cdot 58 = 58`

850. **MATH 5.66** (`math-ch5-exam.json`, sev=4) — Exam-style tasks - 6
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=16 shorts=8 :: 1x+1y=150 || 22x+13y=2535 || 1\cdot 13 = 13 || 1\cdot 22 = 22`
   - `eq_step_cascade`: `len=16 shorts=9 :: 1x+1y=24 || 55x+25y=900 || 1\cdot 25 = 25 || 1\cdot 55 = 55`

851. **MATH 5.67** (`math-ch5-exam.json`, sev=4) — Exam-style tasks - 7
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=16 shorts=8 :: 1x+1y=80 || 50x+10y=2000 || 1\cdot 10 = 10 || 1\cdot 50 = 50`
   - `eq_step_cascade`: `len=16 shorts=8 :: 1x-2y=-10 || 1x+1y=74 || 1\cdot 1 = 1 || (-2)\cdot 1 = -2`

852. **MATH 5.68** (`math-ch5-exam.json`, sev=4) — Exam-style tasks - 8
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=16 shorts=8 :: 1x-1y=27 || 2x-5y=27 || 1\cdot (-5) = -5 || (-1)\cdot 2 = -2`
   - `eq_step_cascade`: `len=16 shorts=10 :: 0.2x+0.2y=24 || 1x-1y=20 || 0.2\cdot (-1) = -0.2 || 0.2\cdot 1 = 0.2`

853. **MATH 5.69** (`math-ch5-exam.json`, sev=4) — Exam-style tasks - 9
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=16 shorts=12 :: 1x+1y=84 || 1x-2y=0 || 1\cdot (-2) = -2 || 1\cdot 1 = 1`
   - `eq_step_cascade`: `len=8 shorts=7 :: 4x+2y=60 || 6x+3y=90 || 4\cdot 3 = 12 || 2\cdot 6 = 12`

854. **MATH 5.70** (`math-ch5-exam.json`, sev=4) — Exam-style tasks - 10
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=16 shorts=12 :: 6x+5y=137 || 2x+3y=63 || 6\cdot 3 = 18 || 5\cdot 2 = 10`
   - `eq_step_cascade`: `len=16 shorts=8 :: 1x+1y=90 || 75x+35y=4350 || 1\cdot 35 = 35 || 1\cdot 75 = 75`

855. **MATH 5.72** (`math-ch5-exam.json`, sev=4) — Exam-style tasks - 12
   - fields: tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=4 :: 25x = 1050 || x = 42 || y = 28 || x = 42`

856. **MATH 5.77** (`math-ch5-exam.json`, sev=4) — Exam-style tasks - 17
   - fields: tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=6 :: x + y = 50 || 30x + 18y = 1140 || 12x = 240 || x = 20`

857. **MATH 5.80** (`math-ch5-exam.json`, sev=4) — Exam-style tasks - 20
   - fields: solution_overview, tactical[1], tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=2 :: 4x + 3y = 123 \tag{1} || 2x + 5y = 121 \tag{2} || (4x + 3y) - (4x + 10y) = 123 - 242 || -7y = -119`
   - `eq_step_cascade`: `len=7 shorts=6 :: 4x + 3y = 123 || 2x + 5y = 121 || (4x + 3y) - (4x + 10y) = 123 - 242 || -7y = -119`

858. **MATH 6.01** (`math-ch6-inequalities.json`, sev=4) — Rational Inequalities — 1
   - fields: tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: x^{2} - 9=0 || (x - 3) (x + 3)=0 || x=-3`

859. **MATH 6.02** (`math-ch6-inequalities.json`, sev=4) — Rational Inequalities — 2
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: x^{2} - 16=0 || (x - 4) (x + 4)=0 || x=-4`
   - `eq_step_cascade`: `len=3 shorts=2 :: (x^{2} - 5 x) + 4=0 || (x - 4) (x - 1)=0 || x=1`

860. **MATH 6.03** (`math-ch6-inequalities.json`, sev=4) — Rational Inequalities — 3
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: x^{2} - 9=0 || (x - 3) (x + 3)=0 || x=-3`
   - `eq_step_cascade`: `len=3 shorts=2 :: (x^{2} + 4 x) + 4=0 || (x + 2)^{2}=0 || x=-2`

861. **MATH 6.04** (`math-ch6-inequalities.json`, sev=4) — Rational Inequalities — 4
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: x^{2} - 1=0 || (x - 1) (x + 1)=0 || x=-1`
   - `eq_step_cascade`: `len=3 shorts=2 :: (x^{2} - 2 x) - 3=0 || (x - 3) (x + 1)=0 || x=-1`

862. **MATH 6.05** (`math-ch6-inequalities.json`, sev=4) — Rational Inequalities — 5
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: x^{2} - 16=0 || (x - 4) (x + 4)=0 || x=-4`
   - `eq_step_cascade`: `len=3 shorts=2 :: (x^{2} - 6 x) + 9=0 || (x - 3)^{2}=0 || x=3`

863. **MATH 6.06** (`math-ch6-inequalities.json`, sev=4) — Rational Inequalities — 6
   - fields: tactical[0], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: x^{2} - 49=0 || (x - 7) (x + 7)=0 || x=-7`
   - `eq_step_cascade`: `len=3 shorts=3 :: x^{2} - 4=0 || (x - 2) (x + 2)=0 || x=-2`

864. **MATH 6.07** (`math-ch6-inequalities.json`, sev=4) — Rational Inequalities — 7
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: x^{2} - 25=0 || (x - 5) (x + 5)=0 || x=-5`
   - `eq_step_cascade`: `len=3 shorts=2 :: (x^{2} - 4 x) + 4=0 || (x - 2)^{2}=0 || x=2`

865. **MATH 6.08** (`math-ch6-inequalities.json`, sev=4) — Rational Inequalities — 8
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: (x^{2} + 10 x) + 25=0 || (x + 5)^{2}=0 || x=-5`
   - `eq_step_cascade`: `len=3 shorts=3 :: x^{2} - 4=0 || (x - 2) (x + 2)=0 || x=-2`

866. **MATH 6.09** (`math-ch6-inequalities.json`, sev=4) — Rational Inequalities — 9
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: x^{2} - 36=0 || (x - 6) (x + 6)=0 || x=-6`
   - `eq_step_cascade`: `len=3 shorts=3 :: x^{2} - 9=0 || (x - 3) (x + 3)=0 || x=-3`

867. **MATH 6.10** (`math-ch6-inequalities.json`, sev=4) — Rational Inequalities — 10
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: x^{2} - 1=0 || (x - 1) (x + 1)=0 || x=-1`
   - `eq_step_cascade`: `len=3 shorts=3 :: x^{2} - 49=0 || (x - 7) (x + 7)=0 || x=-7`

868. **MATH 6.11** (`math-ch6-inequalities.json`, sev=4) — Rational Inequalities — 11
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: x^{2} - 81=0 || (x - 9) (x + 9)=0 || x=-9`
   - `eq_step_cascade`: `len=3 shorts=2 :: (x^{2} + 12 x) + 36=0 || (x + 6)^{2}=0 || x=-6`

869. **MATH 6.12** (`math-ch6-inequalities.json`, sev=4) — Rational Inequalities — 12
   - fields: tactical[0], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: (x^{2} + 18 x) + 81=0 || (x + 9)^{2}=0 || x=-9`
   - `eq_step_cascade`: `len=3 shorts=3 :: x^{2} - 4=0 || (x - 2) (x + 2)=0 || x=-2`

870. **MATH 6.13** (`math-ch6-inequalities.json`, sev=4) — Rational Inequalities — 13
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: (x^{2} - 4 x) + 4=0 || (x - 2)^{2}=0 || x=2`
   - `eq_step_cascade`: `len=3 shorts=2 :: (x^{2} + 2 x) - 3=0 || (x - 1) (x + 3)=0 || x=-3`

871. **MATH 6.14** (`math-ch6-inequalities.json`, sev=4) — Rational Inequalities — 14
   - fields: tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: x^{2} - 9=0 || (x - 3) (x + 3)=0 || x=-3`

872. **MATH 6.15** (`math-ch6-inequalities.json`, sev=4) — Rational Inequalities — 15
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: (x^{2} - x) - 2=0 || (x - 2) (x + 1)=0 || x=-1`
   - `eq_step_cascade`: `len=3 shorts=3 :: x^{2} - 4=0 || (x - 2) (x + 2)=0 || x=-2`

873. **MATH 6.16** (`math-ch6-inequalities.json`, sev=4) — Rational Inequalities — 16
   - fields: tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: x^{2} - 1=0 || (x - 1) (x + 1)=0 || x=-1`
   - `eq_step_cascade`: `len=3 shorts=3 :: x^{2} - 16=0 || (x - 4) (x + 4)=0 || x=-4`

874. **MATH 6.17** (`math-ch6-inequalities.json`, sev=4) — Rational Inequalities — 17
   - fields: tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: (x^{2} - 4 x) + 4=0 || (x - 2)^{2}=0 || x=2`

875. **MATH 6.18** (`math-ch6-inequalities.json`, sev=4) — Rational Inequalities — 18
   - fields: tactical[1], tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: x^{2} - 1=0 || (x - 1) (x + 1)=0 || x=-1`
   - `eq_step_cascade`: `len=3 shorts=3 :: x^{2} - 9=0 || (x - 3) (x + 3)=0 || x=-3`

876. **MATH 6.19** (`math-ch6-inequalities.json`, sev=4) — Rational Inequalities — 19
   - fields: tactical[0], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: (x^{2} + 8 x) + 16=0 || (x + 4)^{2}=0 || x=-4`
   - `eq_step_cascade`: `len=3 shorts=3 :: x^{2} - 36=0 || (x - 6) (x + 6)=0 || x=-6`

877. **MATH 6.20** (`math-ch6-inequalities.json`, sev=4) — Rational Inequalities — 20
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: x^{2} - 9=0 || (x - 3) (x + 3)=0 || x=-3`
   - `eq_step_cascade`: `len=3 shorts=3 :: x^{2} - 4=0 || (x - 2) (x + 2)=0 || x=-2`

878. **MATH 6.64** (`math-ch6-inequalities.json`, sev=4) — Loyalty Points Discount
   - fields: tactical[1], tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: 0.5\cdot250=125 || 400-125=275 || x=250`
   - `eq_step_cascade`: `len=3 shorts=2 :: 0.5\cdot350=175 || 400-175=225 || x=350`

879. **MATH 6.66** (`math-ch6-inequalities.json`, sev=4) — Greenhouse Temperature Safety
   - fields: tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=2 :: 30=\frac{5}{9}(F-32) || 54=F-32 || F=86 || C = \frac{5}{9}(F - 32)`

880. **MATH 6.79** (`math-ch6-inequalities.json`, sev=4) — Overtime Pay
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: 45-40=5 || 27\cdot5=135 || 720+135=855`
   - `eq_step_cascade`: `len=3 shorts=3 :: 44-40=4 || 27\cdot4=108 || 720+108=828`

881. **MATH 6.80** (`math-ch6-inequalities.json`, sev=4) — Markup vs. Profit Margin
   - fields: tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=2 :: 40\cdot 1.20=48 || 48-40=8 || \frac{8}{48}=0.167 || 1.20 = \`

882. **MATH 6.84** (`math-ch6-inequalities.json`, sev=4) — Tiered Shipping Rates
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: 15-10=5 || 0.5\cdot5=2.5 || 8+2.5=10.5`
   - `eq_step_cascade`: `len=3 shorts=3 :: 18-10=8 || 0.5\cdot8=4 || 8+4=12`

883. **MATH 6.85** (`math-ch6-inequalities.json`, sev=4) — Support Cable Length
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=2 :: L=\sqrt{15^2+20^2} || L=\sqrt{625} || L=25 || L = \sqrt{h^{2} + 20^{2}}`
   - `eq_step_cascade`: `len=4 shorts=1 :: L=\sqrt{10^2+20^2} || L=\sqrt{500}\approx 22.36 || h=10 || L = \sqrt{h^{2} + 20^{2}}`

884. **MATH 6.86** (`math-ch6-inequalities.json`, sev=4) — Comparing Three Internet Plans
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=3 :: A=30 || B = 10+0.05\cdot 200 || 0.05\cdot 200 = 10 || 10 + 10 = 20`
   - `eq_step_cascade`: `len=7 shorts=3 :: A=30 || B = 10+0.05\cdot 400 || 0.05\cdot 400 = 20 || 10 + 20 = 30`

885. **MATH 6.89** (`math-ch6-inequalities.json`, sev=4) — Exam-style tasks - 1
   - fields: tactical[0], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=10 shorts=9 :: (x^{2} - 5 x) + 6=0 || (x - 3) (x - 2)=0 || x=2 || x - 3=0`
   - `eq_step_cascade`: `len=4 shorts=4 :: x-a=0 || x=a || x+a=0 || x=-a`

886. **MATH 6.97** (`math-ch6-inequalities.json`, sev=4) — Exam-style tasks - 9
   - fields: tactical[1], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=4 :: x=-4 || x=-2 || x=2 || x=4`
   - `eq_step_cascade`: `len=5 shorts=4 :: x - 3=0 || x=3 || (x^{2} + 2 x) + 1=0 || (x + 1)^{2}=0`

887. **MATH 6.112** (`math-ch6-inequalities.json`, sev=4) — Exam-style tasks - 24
   - fields: tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=4 :: x - 4=0 || x=4 || x + 3=0 || x=-3`

888. **MATH 6.113** (`math-ch6-inequalities.json`, sev=4) — Exam-style tasks - 25
   - fields: tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=4 :: 6\cdot 1.5 = 9 || 2\cdot 4 = 8 || 9 + 8 = 17 || 17 + 3 = 20`

889. **MATH 6.115** (`math-ch6-inequalities.json`, sev=4) — Exam-style tasks - 27
   - fields: tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=3 :: 2\cdot 3 = 6 || 0.5\cdot 0.4 = 0.2 || 6 + 8 = 14 || 14 + 0.2 = 14.2`

890. **MATH 6.116** (`math-ch6-inequalities.json`, sev=4) — Exam-style tasks - 28
   - fields: tactical[0], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: 0.15\cdot 64 = 9.6 || 12 - 9.6 = 2.4 || V(8) = 2.4`
   - `eq_step_cascade`: `len=4 shorts=4 :: x=-3 || x=-2 || x=2 || x=3`

891. **MATH 6.117** (`math-ch6-inequalities.json`, sev=4) — Exam-style tasks - 29
   - fields: tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=5 :: x^{2} - 9=0 || x=-3 || x=3 || x - 2=0`
   - `eq_step_cascade`: `len=3 shorts=2 :: 0.8\cdot 12 = 9.6 || 9.6 + 4 = 13.6 || 13.6 + 1 = 14.6`

892. **MATH 6.118** (`math-ch6-inequalities.json`, sev=4) — Exam-style tasks - 30
   - fields: tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: 4\cdot 2 = 8 || 8 + 3 = 11 || 11 + 0.5 = 11.5`

893. **MATH 6.119** (`math-ch6-inequalities.json`, sev=4) — Exam-style tasks - 31
   - fields: tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=4 :: - x - 5=0 || x=-5 || x - 2=0 || x=2`

894. **MATH 6.120** (`math-ch6-inequalities.json`, sev=4) — Exam-style tasks - 32
   - fields: tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=4 :: - x - 6=0 || x=-6 || x + 1=0 || x=-1`
   - `eq_step_cascade`: `len=3 shorts=3 :: 2\cdot 6 = 12 || 12 + 5 = 17 || 17 + 1.2 = 18.2`

895. **MATH 6.123** (`math-ch6-inequalities.json`, sev=4) — Exam-style tasks - 35
   - fields: tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=5 :: 2 x=0 || x=0 || x^{2} - 9=0 || x=-3`

896. **MATH 7.01** (`math-ch7-linear-quadratic.json`, sev=4) — Vertex, Linear Rewrite, and Crossings of a Line and a Parabola
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=0 :: x=-\frac{-1}{2\cdot 1} || x=-\frac{-1}{2} || x=\frac{1}{2} || g\left(\frac{1}{2}\right)=\left(\frac{1}{2}\right)`
   - `eq_step_cascade`: `len=4 shorts=0 :: g(x)=A(4x+2)^{2}+B(4x+2)+C || A=\frac{1}{16} || B=-\frac{1}{2} || C=-\frac{5}{4}`

897. **MATH 7.06** (`math-ch7-linear-quadratic.json`, sev=4) — Simple Vertex Read
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=4 :: g(x)=(x-2)^{2}+3 || g(2)=0+3 || g(2)=3 || g(x)=x^{2}-4x+7`
   - `eq_step_cascade`: `len=6 shorts=3 :: g(x)=(x-2)^{2}+3 || x=2 || -b/(2a)=4/2 || -b/(2a)=2`

898. **MATH 7.10** (`math-ch7-linear-quadratic.json`, sev=4) — Factor Roots Quickly
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=5 :: g(x)=(x+1)(x-4) || x=-1 || x=4 || g(-1)=0\cdot(-5)`
   - `eq_step_cascade`: `len=6 shorts=4 :: g(x)=(x+1)(x-4) || S=(-1)+4 || S=3 || S=-b/a`

899. **MATH 7.12** (`math-ch7-linear-quadratic.json`, sev=4) — Vieta Against a Line
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=2 :: g(x)=x^{2}-5x+6 || S=-\frac{b}{a} || S=-\frac{-5}{1} || S=5`
   - `eq_step_cascade`: `len=6 shorts=2 :: P=\frac{c}{a} || P=\frac{6}{1} || P=6 || 2\cdot 3=6\neq -6`

900. **MATH 7.14** (`math-ch7-linear-quadratic.json`, sev=4) — Count the Meetings
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=2 :: g(x)-f(x)=x^{2}-2x-3 || \Delta=(-2)^{2}-4(1)(-3) || \Delta=16 || (x-3)(x+1)=0`
   - `eq_step_cascade`: `len=7 shorts=6 :: f(-1)=0 || g(-1)=1+1-2 || g(-1)=1+1 || g(-1)=2`

901. **MATH 7.19** (`math-ch7-linear-quadratic.json`, sev=4) — Even Parabola Check
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=3 :: g(-x)=(-x)^{2}-9 || g(-x)=x^{2}-9 || g(-x)=g(x) || g(3)=0`
   - `eq_step_cascade`: `len=5 shorts=3 :: g(x)=x^{2}-9 || b=0 || x=-\frac{0}{2\cdot 1} || x=-\frac{0}{2}`

902. **MATH 7.21** (`math-ch7-linear-quadratic.json`, sev=4) — Rewrite Exists at Level Two
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=3 :: g(x)=x^{2}-1 || g(x)=(x-1)(x+1) || (x-1)(x+1)=x^{2}-1 || g(1)=0`
   - `eq_step_cascade`: `len=6 shorts=6 :: f(1)=0 || g(1)=0 || g-f=x^{2}-x || g-f=x(x-1)`

903. **MATH 7.23** (`math-ch7-linear-quadratic.json`, sev=4) — Even Quadratic Symmetry
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: b=0 || x=-\frac{0}{2a} || x=0`
   - `eq_step_cascade`: `len=3 shorts=2 :: g(x)=x^{2} || g(-1)=1\neq -1 || g(-1)=-g(1)`

904. **MATH 7.24** (`math-ch7-linear-quadratic.json`, sev=4) — Tangent Line Probe
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=5 :: (x-2)(x-4)=0 || g(2)=1 || g(2)=f(2) || g(4)=5`
   - `eq_step_cascade`: `len=7 shorts=6 :: g(x)-f(x)=(x-2)(x-4) || x=2 || x=4 || f(2)=1`

905. **MATH 7.27** (`math-ch7-linear-quadratic.json`, sev=4) — Rebuild from Roots and Slope
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: f(x)=2x+1 || f(0)=1 || f(1)-f(0)=2`
   - `eq_step_cascade`: `len=4 shorts=2 :: g(x)=(x-2)(x-3) || g(x)=x^{2}-5x+6 || g(2)=0 || g(3)=0`

906. **MATH 7.31** (`math-ch7-linear-quadratic.json`, sev=4) — Writing a Parabola Using a Line
   - fields: tactical[1], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: a=A m^{2} || A=\frac{a}{m^{2}} || a=Am^{2}`
   - `eq_step_cascade`: `len=5 shorts=4 :: g(r)=C || g(r)=A\cdot 0+B\cdot 0+C || g(r)=C || A=1`

907. **MATH 7.46** (`math-ch7-linear-quadratic.json`, sev=4) — Double Composition and Leading Match
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=1 :: 1=A\cdot 16 || A=\frac{1}{16} || B=-\frac{1}{2} || C=-\frac{5}{4}`
   - `eq_step_cascade`: `len=13 shorts=11 :: f(0)=2 || g(2)=4-2-2 || g(2)=4-2 || g(2)=2`

908. **MATH 7.49** (`math-ch7-linear-quadratic.json`, sev=4) — Average Rate Versus Instantaneous Slope
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=3 :: \frac{g(2)-g(0)}{2-0}=\frac{(4-12+5)-5}{2} || \frac{g(2)-g(0)}{2-0}=-4 || g'(x)=2x-6 || 2c-6=-4`
   - `eq_step_cascade`: `len=10 shorts=2 :: g(x)=x^{2}-6x+5 || \frac{b}{2a}=-3 || \left(\frac{b}{2a}\right)^2=9 || h=-\frac{b}{2a}`

909. **MATH 7.57** (`math-ch7-linear-quadratic.json`, sev=4) — Where a Rising Line Crosses the Axes
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=1 :: 4x+10=0 || x=\frac{-10}{4} || x=-\frac{5}{2} || u\bigl(-\frac{5}{2}\bigr)=4\cdot\bigl(-\frac{5}{2}`
   - `eq_step_cascade`: `len=3 shorts=2 :: u(x)=4x+10 || u(0)=4\cdot 0+10 || u(0)=10`

910. **MATH 7.62** (`math-ch7-linear-quadratic.json`, sev=4) — Ticket Price Against Weekly Revenue
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=3 :: R(x)=-2x^{2}+36x || a=-2,\ b || a=36 || x=-\frac{36}{2\cdot(-2)}`
   - `eq_step_cascade`: `len=5 shorts=2 :: R(9)=-2\cdot 9^{2}+36\cdot 9 || 9^{2}=81 || R(9)=-2\cdot 81+36\cdot 9 || R(9)=-162+324`

911. **MATH 7.63** (`math-ch7-linear-quadratic.json`, sev=4) — Completing the Square With a Negative Constant
   - fields: tactical[0], tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=10 shorts=2 :: q(x)=x^{2}+8x+10 || \frac{b}{2a}=4 || \left(\frac{b}{2a}\right)^2=16 || h=-\frac{b}{2a}`
   - `eq_step_cascade`: `len=3 shorts=2 :: x=-4 || q(-4)=-6 || \text{vertex}=(-4,-6)`

912. **MATH 7.66** (`math-ch7-linear-quadratic.json`, sev=4) — A Parabola With the $y$-Axis as Its Mirror
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=1 :: p(x)=2x^{2}-18 || p(-x)=2(-x)^{2}-18 || p(-x)=2x^{2}-18 || p(-x)=p(x)`
   - `eq_step_cascade`: `len=4 shorts=2 :: p(-3)=2\cdot 9-18 || p(-3)=0 || p(3)=2\cdot 9-18 || p(3)=0`

913. **MATH 7.74** (`math-ch7-linear-quadratic.json`, sev=4) — Fuel Use Against Cruising Speed
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=2 :: F(x)=\frac{1}{50}x^{2}-2x+80 || a=\frac{1}{50},\ b || a=-2 || x=-\frac{-2}{2\cdot\frac{1}{50}}`
   - `eq_step_cascade`: `len=10 shorts=6 :: F(50)=\frac{1}{50}\cdot 50^{2}-2\cdot 50+80 || 50^{2}=2500 || F(50)=\frac{1}{50}\cdot 2500-2\cdot 50+80 || F(50)=50^{2}-100+80`

914. **MATH 7.76** (`math-ch7-linear-quadratic.json`, sev=4) — A Profit Curve With Two Break-Even Points
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=3 :: P(x)=-x^{2}+24x-80 || a=-1,\ b || a=24 || x=-\frac{24}{2\cdot(-1)}`
   - `eq_step_cascade`: `len=5 shorts=2 :: P(12)=-12^{2}+24\cdot 12-80 || 12^{2}=144 || P(12)=-144+24\cdot 12-80 || P(12)=64`

915. **MATH 7.78** (`math-ch7-linear-quadratic.json`, sev=4) — Heights of a Stone Recorded Every Second
   - fields: tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: 40+(-15)=25 || y(5)=-5\cdot 25+150 || y(5)=25`

916. **MATH 7.85** (`math-ch7-linear-quadratic.json`, sev=4) — Choosing the Leading Coefficient
   - fields: tactical[0], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=1 :: ax^{2}+2x-3-(x+1)=ax^{2}+x-4 || ax^{2}+2x-3-(x+1)=0 || \Delta(a)=1+16a || 1+16a = 0`
   - `eq_step_cascade`: `len=3 shorts=2 :: x=-1 || a=2 || a=-\frac{1}{2}`

917. **MATH 7.88** (`math-ch7-linear-quadratic.json`, sev=4) — A Translation Cannot Flatten a Parabola
   - fields: tactical[0], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=0 :: g(x)=2x^{2}+3x-2 || x=-\frac{3}{2\cdot 2} || x=-\frac{3}{4} || g\bigl(-\tfrac{3}{4}\bigr)=2\cdot\tfrac{9}{16}+3\c`
   - `eq_step_cascade`: `len=8 shorts=6 :: g(0)=-2 || g(2)=8+6-2 || g(2)=8+6 || g(2)=14`

918. **MATH 7.89** (`math-ch7-linear-quadratic.json`, sev=4) — Lines Through the Vertex
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=2 :: g(x)=a(x-h)^{2}+k || f(x)=k || g(x)-f(x)=a(x-h)^{2} || g(x)-f(x)= 0`
   - `eq_step_cascade`: `len=4 shorts=1 :: f(x)=m(x-h)+k || g(x)-f(x)=a(x-h)^{2}-m(x-h) || g(x)-f(x)=(x-h)\bigl(a(x-h)-m\bigr) || a(x-h) = m`

919. **MATH 7.93** (`math-ch7-linear-quadratic.json`, sev=4) — Equal Values and the Axis
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=1 :: g(u)-g(v)=a(u^{2}-v^{2})+b(u-v) || g(u)-g(v)=(u-v)\bigl(a(u+v)+b\bigr) || a(u+v)+b = 0 || a(u+v)+b=\frac{u+v}{2}`
   - `eq_step_cascade`: `len=6 shorts=6 :: g(x)=x^{2} || u=1 || v=-1 || g(1)=1`

920. **MATH 7.97** (`math-ch7-linear-quadratic.json`, sev=4) — Axis Gap, Vieta, and Nested Order
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=8 shorts=0 :: g(x)=x^{2}-5x+2 || \frac{b}{2a}=-\frac{5}{2} || \left(\frac{b}{2a}\right)^2=\frac{25}{4} || h=-\frac{b}{2a}`
   - `eq_step_cascade`: `len=6 shorts=0 :: x=\frac{5}{2} || f\bigl(\tfrac{5}{2}\bigr)=3\cdot\tfrac{5}{2}-7 || f\bigl(\tfrac{5}{2}\bigr)=\tfrac{1}{2} || g\bigl(\tfrac{5}{2}\big`

921. **MATH 7.E06** (`math-ch7-mixed-exam.json`, sev=4) — Rebuild from vertex and a point
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=5 :: g(0)=a(0-2)^{2}-3 || g(0)=5 || 4a-3=5 || a=2`
   - `eq_step_cascade`: `len=6 shorts=3 :: g(x)=2(x-2)^{2}-3 || g(4)=2(4-2)^{2}-3 || g(4)=5 || g(4)=g(0)`

922. **MATH 7.E07** (`math-ch7-mixed-exam.json`, sev=4) — Line inside a square — axis of the other order
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=1 :: f(g(x))=x^{2}+1 || x=-\frac{0}{2\cdot 1} || x=-\frac{0}{2} || x=0`
   - `eq_step_cascade`: `len=5 shorts=0 :: g(f(x))=(x+1)^{2} || g(f(x))=x^{2}+2x+1 || f(g(x))=x^{2}+1 || g(f(1)) = 4\neq 2`

923. **MATH 7.E08** (`math-ch7-mixed-exam.json`, sev=4) — Scaled product — Vieta with a leading $2$
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=1 :: g(3)=2(3-1)(3-5) || g(3)=2\cdot 2\cdot(-2) || g(3)=-8 || g(3)=-4\neq -8`
   - `eq_step_cascade`: `len=6 shorts=4 :: g(0)=2(-1)(-5) || g(0)=10 || g(6)=2(5)(1) || g(6)=10`

924. **MATH 7.E11** (`math-ch7-mixed-exam.json`, sev=4) — Trough touching a level line
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=1 :: g(x)=(x-1)(x-3) || g(x)=x^{2}-4x+3 || g(2)=-1 || g(x)+1=(x-2)^{2}`
   - `eq_step_cascade`: `len=7 shorts=5 :: g(x)=(x-1)(x-3) || x=1 || x=3 || \frac{1+3}{2}=2`

925. **MATH 7.E12** (`math-ch7-mixed-exam.json`, sev=4) — Arithmetic samples — why a square cannot fit
   - fields: tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=4 :: y(5)=11+3 || y(5)=14 || y(-1)=-1-3 || y(-1)=-4`
   - `eq_step_cascade`: `len=3 shorts=2 :: 2a=0 || a=0\neq 1 || y=3x-1\text{ fits; }x^{2}+\cdots\text{ does not}`

926. **MATH 7.E27** (`math-ch7-mixed-exam.json`, sev=4) — Parabola after an inverse shift
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=8 shorts=3 :: g(f^{-1}(x))=(x+2)^{2}-1 || (x+2)^{2}=x^{2}+4x+4 || x^{2}+4x+4-1=x^{2}+4x+3 || g(f^{-1}(0))=3`
   - `eq_step_cascade`: `len=7 shorts=4 :: x^{2}+4x+3=(x+1)(x+3) || x=-1 || x=-3 || (-1)+(-3)=-4`

927. **MATH 7.E29** (`math-ch7-mixed-exam.json`, sev=4) — Table versus two candidate formulas
   - fields: tactical[0], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: 2a=2 || a=1 || q(2-t)=q(2+t)`
   - `eq_step_cascade`: `len=8 shorts=7 :: q(4)=5 || q(5)=5^{2}+5 || 5^{2}=25 || q(5)=5+5`

928. **MATH 8.100** (`math-ch8-exam.json`, sev=4) — Exam-style tasks - 3
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=3 :: 96d^{-2}=6 || d^{-2}=\dfrac{1}{16} || d=(\dfrac{1}{16})^{\frac{-1}{2}} || d=4`
   - `eq_step_cascade`: `len=4 shorts=2 :: g(5)=16(5)^2 || g(5)=400 || f(g(5))=\sqrt{400} || \sqrt{400}=20`

929. **MATH 8.108** (`math-ch8-exam.json`, sev=4) — Exam-style tasks - 11
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=4 :: M(s)=3s^{3} || M(1)=3\cdot 1^{3} || 1^{3}=1 || M(1)=3\cdot 1`
   - `eq_step_cascade`: `len=7 shorts=6 :: s=2 || M(s)=3s^{3} || M(2)=3\cdot 2^{3} || 2^{3}=8`

930. **MATH 8.111** (`math-ch8-exam.json`, sev=4) — Exam-style tasks - 14
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=2 :: g(4)=8\cdot 4^{3} || 4^{3}=64 || g(4)=8\cdot 64 || g(4)=512`
   - `eq_step_cascade`: `len=3 shorts=2 :: f(g(4))=8 || f(g(4))=\frac12\cdot 8 || f(g(4))=4`

931. **MATH 8.112** (`math-ch8-exam.json`, sev=4) — Exam-style tasks - 15
   - fields: tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: 4^{3/2}=2^{3} || 2^{3}=8 || 4^{3/2}=8`

932. **MATH 8.113** (`math-ch8-exam.json`, sev=4) — Exam-style tasks - 16
   - fields: tactical[0], tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=6 :: M(s)=4s^{3} || s=1 || M(1)=4\cdot 1^{3} || 1^{3}=1`
   - `eq_step_cascade`: `len=7 shorts=6 :: s=2 || M(s)=4s^{3} || M(2)=4\cdot 2^{3} || 2^{3}=8`

933. **MATH 8.116** (`math-ch8-exam.json`, sev=4) — Exam-style tasks - 19
   - fields: tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=2 :: g(4)=27\cdot 4^{3} || 4^{3}=64 || g(4)=27\cdot 64 || g(4)=1728`
   - `eq_step_cascade`: `len=3 shorts=2 :: f(g(4))=12 || f(g(4))=\frac13\cdot 12 || f(g(4))=4`

934. **MATH 9.E05** (`math-ch9-mixed-exam.json`, sev=4) — The cubic family with a sliding gap
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=0 :: g_{k}(x)=x^{3}-kx || g_{k}(-x)=-x^{3}+kx || -x^{3}+kx=-g_{k}(x) || g_{k}(-x)=(-x)^{3}-k(-x)`
   - `eq_step_cascade`: `len=5 shorts=1 :: g_{1}(x)=x^{3}-x || x^{3}-x=x(x-1)(x+1) || x=-1,\ 0,\ 1 || g_{k}(x)=x^{3}-kx`

935. **MATH 9.E10** (`math-ch9-mixed-exam.json`, sev=4) — Five independent small-integer traps
   - fields: tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=1 :: f(x)=x^{4}+1 || f(-x)=(-x)^{4}+1 || (-x)^{4}+1=f(x) || (-x)^{4}+1=x^{4}+1`

936. **MATH 9.E12** (`math-ch9-mixed-exam.json`, sev=4) — Cubic samples with three visible factors
   - fields: tactical[0], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=9 shorts=9 :: 0-4 =-4 || -2-0 =-2 || -2--2 =0 || 0--2 =2`
   - `eq_step_cascade`: `len=5 shorts=5 :: 0-4 =-4 || -2-0 =-2 || -2--2 =0 || 0--2 =2`

937. **MATH 9.E14** (`math-ch9-mixed-exam.json`, sev=4) — Remainders, mixed parity, nested power
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=3 :: f(x)=x^{3}-x || f(x)=x(x-1)(x+1) || f(1)=1-1 || f(1)=0`
   - `eq_step_cascade`: `len=4 shorts=3 :: g(x)=x^{2}-4 || g(x)=(x-2)(x+2) || g(1)=1-4 || g(1)=-3`

938. **MATH 9.E18** (`math-ch9-mixed-exam.json`, sev=4) — Three simple linear factors
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=4 :: p(x)=(x-1)(x+1)(x-2) || x=-1,\ 1,\ 2 || p(-1)=p(1) || p(-1)=p(2)`
   - `eq_step_cascade`: `len=4 shorts=1 :: p(x)=(x+1)(x-1)(x-2) || p'(x)=3x^{2}-2x-2 || p'(1)=3-2-2 || p'(1)= -1\neq 0`

939. **MATH 9.E20** (`math-ch9-mixed-exam.json`, sev=4) — Parity, shift, Vieta, and linear factors
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=1 :: g'(x)=3x^{2}-4 || g'(-x)=g'(x) || g'(-x)=3x^{2}-4 || p(-x)\stackrel{?}{=}p(x)`
   - `eq_step_cascade`: `len=6 shorts=3 :: p(x)=(x+1)(x-1)(x-2) || -1+1=0 || 0+2=2 || p(x)=2`

940. **MATH 9.E22** (`math-ch9-mixed-exam.json`, sev=4) — Quartic samples: differences and factors
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=9 shorts=9 :: 0-9 =-9 || 1-0 =1 || 0-1 =-1 || 9-0 =9`
   - `eq_step_cascade`: `len=5 shorts=1 :: p(1)=0 || p(x)=(x^{2}-1)^{2} || p(x)=x^{4}-2x^{2}+1 || p(x)=(x-1)^{2}(x+1)^{2}`

941. **MATH 9.E23** (`math-ch9-mixed-exam.json`, sev=4) — Warehouse deviation from daily closes
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=12 shorts=12 :: 3-0 =3 || 0-3 =-3 || -3-0 =-3 || 0--3 =3`
   - `eq_step_cascade`: `len=7 shorts=3 :: n=0,1,2,3,4,5 || s=0,\ 3,\ 0,\ -3,\ 0,\ 15 || s(0)=s(2) || s(0)=s(4)`

942. **MATH 9.E24** (`math-ch9-mixed-exam.json`, sev=4) — An odd cubic: factors, Vieta, nesting
   - fields: tactical[0], tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=8 shorts=0 :: p(x)=x^{3}-4x || p(-x)=-x^{3}+4x || -x^{3}+4x=-p(x) || p(-x)=(-x)^{3}-4(-x)`
   - `eq_step_cascade`: `len=5 shorts=3 :: p(x)=x(x-2)(x+2) || p(2)=2\cdot 0\cdot 4 || 2\cdot 0=0 || 0\cdot 4=0`

943. **MATH 9.E27** (`math-ch9-mixed-exam.json`, sev=4) — A cubic around a shift: factors of the nest
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=1 :: q(p(x))=(x-1)^{3}-(x-1) || (x-1)^{3}-(x-1)=x(x-1)(x-2) || p(q(x))=x^{3}-x-1 || p(x)=x-1`
   - `eq_step_cascade`: `len=4 shorts=3 :: q(p(1))=q(0) || q(0)=0 || q(p(x))=x(x-1)(x-2) || p(x)=x-1`

944. **MATH 9.01** (`math-ch9-polynomials.json`, sev=4) — Two Lines Between A and B: Cubic Speed and a Distance Table
   - fields: tactical[0], tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=1 :: v(t)=0.00002t^{3}-0.005t^{2}+0.4t || a(t)=v'(t) || v'(t)=0.00006t^{2}-0.01t+0.4 || a(80)=0.00006\cdot 80^{2}-0.01\cdot 80+0.4`
   - `eq_step_cascade`: `len=5 shorts=0 :: a'(t)=0.00012t-0.01 || 0.00012t-0.01=0 || t=\frac{0.01}{0.00012} || t=\frac{250}{3}`

945. **MATH 9.13** (`math-ch9-polynomials.json`, sev=4) — First Differences Hint at the Degree
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=4 :: 2-1 =1 || 9-2 =7 || 28-9 =19 || 65-28 =37`
   - `eq_step_cascade`: `len=7 shorts=7 :: 2-1 =1 || 9-2 =7 || 28-9 =19 || 65-28 =37`

946. **MATH 9.17** (`math-ch9-polynomials.json`, sev=4) — Shift of a Cubic
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=8 shorts=7 :: p(x)=x^{3} || q(1)=(1-1)^{3} || q(1)=0^{3} || q(1)=0`
   - `eq_step_cascade`: `len=5 shorts=2 :: p(x)=x^{3} || q(0)=(0-1)^{3} || q(0)=(-1)^{3} || q(0)=-1`

947. **MATH 9.18** (`math-ch9-polynomials.json`, sev=4) — Cooling Chamber: Cubic Temperature
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=11 shorts=8 :: T(t)=- 0.01 t^{3} + 0.3 t^{2} - t + 8 || 0^{3}=0 || -0.01\cdot 0=0 || 0^{2}=0`
   - `eq_step_cascade`: `len=12 shorts=4 :: T(t)=- 0.01 t^{3} + 0.3 t^{2} - t + 8 || 10^{3}=1000 || -0.01\cdot 1000=-10.0 || 10^{2}=100`

948. **MATH 9.24** (`math-ch9-polynomials.json`, sev=4) — Production: Cubic Cost and a Piece Table
   - fields: tactical[0], tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=11 shorts=9 :: C(q)=0.02 q^{3} - 0.6 q^{2} + 8 q + 20 || 0^{3}=0 || 0.02\cdot 0=0 || 0^{2}=0`
   - `eq_step_cascade`: `len=12 shorts=4 :: C(q)=0.02 q^{3} - 0.6 q^{2} + 8 q + 20 || 10^{3}=1000 || 0.02\cdot 1000=20.0 || 10^{2}=100`

949. **MATH 9.28** (`math-ch9-polynomials.json`, sev=4) — Finite Differences of a Quartic Sample
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=5 :: p(x)=x^{4} + 1 || 0^{4}=0 || p(0)=0+1 || 0+1=1`
   - `eq_step_cascade`: `len=5 shorts=5 :: 2-1 =1 || 17-2 =15 || 82-17 =65 || 257-82 =175`

950. **MATH 9.29** (`math-ch9-polynomials.json`, sev=4) — Canal Lock: Height as a Cubic in Time
   - fields: tactical[0], tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=11 shorts=7 :: h(t)=0.002 t^{3} - 0.09 t^{2} + t || 0^{3}=0 || 0.002\cdot 0=0 || 0^{2}=0`
   - `eq_step_cascade`: `len=12 shorts=6 :: h(t)=0.002 t^{3} - 0.09 t^{2} + t || 10^{3}=1000 || 0.002\cdot 1000=2.0 || 10^{2}=100`

951. **MATH 9.34** (`math-ch9-polynomials.json`, sev=4) — Composition Multiplies the Highest Powers
   - fields: tactical[1], tactical[2], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=2 :: p(x)q(x)=a_n b_m x^{n+m}+\cdots || q(p(x))=b_m a_n^{m} x^{nm}+\cdots || n=m || n=2`
   - `eq_step_cascade`: `len=4 shorts=0 :: p(q(x))=a_n(b_m x^{m})^{n}+\cdots || a_n(b_m x^{m})^{n}+\cdots=a_n b_m^{n} x^{mn}+\cdot || p(q(x))=x^{6} || x^{mn}=x^{nm}`

952. **MATH 9.36** (`math-ch9-polynomials.json`, sev=4) — Family $p_a(x)=x^{3}-3x+a$
   - fields: tactical[0], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=1 :: p_{a}'(x)=3x^{2}-3 || 3x^{2}-3=3(x-1)(x+1) || p_{a}(-1)=a+2 || p_{a}(1)=a-2`
   - `eq_step_cascade`: `len=4 shorts=3 :: p_{a}'(1)=0 || p_{a}(1)=1-3+a || p_{a}(1)=a-2 || p_{a}(1)=0`

953. **MATH 9.37** (`math-ch9-polynomials.json`, sev=4) — Bicycle Speed: Another Cubic and a Table
   - fields: tactical[0]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=1 :: v(t)=0.00001t^{3}-0.003t^{2}+0.24t || a(t)=v'(t) || v'(t)=0.00003t^{2}-0.006t+0.24 || a(60)=0.00003\cdot 3600-0.006\cdot 60+0.24`

954. **MATH 9.40** (`math-ch9-polynomials.json`, sev=4) — Parameter Window for Three Real Roots
   - fields: tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=0 :: g_k(x)=x^{3}-kx || g_{k}(x)=x(x^{2}-k) || g_{-1}(x)=x^{3}+x || x^{3}+x=x(x^{2}+1)`
   - `eq_step_cascade`: `len=5 shorts=0 :: g_k(x)=x^{3}-kx || g_{k}(-x)=(-x)^{3}-k(-x) || (-x)^{3}-k(-x)=-x^{3}+kx || -g_{k}(x)=-(x^{3}-kx)`

955. **MATH 9.42** (`math-ch9-polynomials.json`, sev=4) — Multiple Roots and the Derivative
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=2 :: p(a)=0 || p(x)=(x-a)^{2}q(x) || p'(x)=2(x-a)q(x)+(x-a)^{2}q'(x) || p'(a)=0`
   - `eq_step_cascade`: `len=3 shorts=2 :: p'(x)=q(x)+(x-a)q'(x) || p'(a)=q(a) || q(a)=0`

956. **MATH 9.51** (`math-ch9-polynomials.json`, sev=4) — Freight Train: Cubic Speed and a Distance Ledger
   - fields: tactical[0]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=7 shorts=1 :: v(t)=\frac{1}{2500}t^{3}-\frac{9}{100}t^{2}+\frac{ || a(t)=\frac{3}{2500}t^{2}-\frac{18}{100}t+\frac{9}{ || a(45)=\frac{3\cdot 2025}`

957. **MATH 9.53** (`math-ch9-polynomials.json`, sev=4) — Double Root at One, Simple Root at Negative Two
   - fields: tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: p'(-2)=9 || p'(-2)=3(-3)(-1) || p'(-2)=9`

958. **MATH 9.61** (`math-ch9-polynomials.json`, sev=4) — Graph Clues: Three Crossings and a Turn Between the Last Pair
   - fields: tactical[0], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=10 shorts=9 :: p(x)=x^{3} - 5 x^{2} + 2 x + 8 || 0^{3}=0 || 0^{2}=0 || -5\cdot 0=0`
   - `eq_step_cascade`: `len=5 shorts=2 :: p(x)=x^{3}-5x^{2}+2x+8 || p(1)=(2)(-1)(-3) || p(1)=6 || p(-1)=(0)(-3)(-5)`

959. **MATH 9.64** (`math-ch9-polynomials.json`, sev=4) — Parameter k: How Many Real Zeros?
   - fields: tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=0 :: g_k(x)=x^3-kx || g_{k}(x)=x(x^{2}-k) || g(x)=x^{3}+4x || g(x)=x(x^{2}+4)`
   - `eq_step_cascade`: `len=8 shorts=2 :: g_{k}(-x)=(-x)^{3}-k(-x) || (-x)^{3}-k(-x)=-x^{3}+kx || g_{k}(-x)=-(x^{3}-kx) || -(x^{3}-kx)=-g_{k}(x)`

960. **MATH 9.68** (`math-ch9-polynomials.json`, sev=4) — Finite Differences Diagnose the Degree (Set 1)
   - fields: tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=4 :: 2-1 =1 || 9-2 =7 || 28-9 =19 || 65-28 =37`

961. **MATH 9.69** (`math-ch9-polynomials.json`, sev=4) — Rebuild from a Double Root and a Simple Root (Set 1)
   - fields: tactical[0], tactical[1], tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=3 :: p(x)=(x-1)^{2}(x+3) || (x^{2}-2x+1)(x+3)=x^{3}+x^{2}-5x+3 || p(1)=1+1-5+3 || p(1)=0`
   - `eq_step_cascade`: `len=5 shorts=4 :: p'(x)=3x^{2}+2x-5 || p'(1)=3+2-5 || 3+2=5 || 5-5=0`

962. **MATH 9.70** (`math-ch9-polynomials.json`, sev=4) — Square of a Quadratic Minus Itself (Set 1)
   - fields: tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=3 :: r(0)=6 || r(0)=3^{2}-3 || r(0)=6`

963. **MATH 9.71** (`math-ch9-polynomials.json`, sev=4) — Even Quartic: Factor Then Read the Shape (Set 1)
   - fields: tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=6 shorts=2 :: p(x)=x^{4} - 5 x^{2} + 4 || p(-x)=(-x)^{4}-5(-x)^{2}+4 || p(-x)=x^{4}-5x^{2}+4 || x^{4}-5x^{2}+4=p(x)`

964. **MATH 9.72** (`math-ch9-polynomials.json`, sev=4) — Raising a Cubic: Crossings After a Vertical Shift (Set 1)
   - fields: tactical[0], tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=2 :: q(x)=p(x)+c || q(x)=x(x^{2}-3) || x=0 || x=\pm\sqrt{3}`
   - `eq_step_cascade`: `len=3 shorts=2 :: q'(x)=p'(x) || p'(x)=3x^{2}-3 || x=\pm 1`

965. **MATH 9.74** (`math-ch9-polynomials.json`, sev=4) — Parameter m: How Many Real Zeros?
   - fields: tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=0 :: g_k(x)=x^3-kx || g_{k}(-x)=-x^{3}+kx || g_{k}(-x)=-(x^{3}-kx) || g_{k}(-x)=-g_{k}(x)`

966. **MATH 9.75** (`math-ch9-polynomials.json`, sev=4) — Downward Cubic Through the Origin
   - fields: tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=3 :: p(x)=-x(x-2)(x-5) || p(2)=-2\cdot 0\cdot(-3) || -2\cdot 0=0 || 0\cdot -3=0`

967. **MATH 9.77** (`math-ch9-polynomials.json`, sev=4) — R: Stall Revenue Model
   - fields: tactical[0], tactical[1], tactical[3]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=0 :: R(n)=\frac{-n^{3}+60n^{2}+200n}{20} || R'(n)=\frac{-3n^{2}+120n+200}{20} || R'(8)=\frac{-192+960+200}{20} || R'(8)=\frac{242}{5}`
   - `eq_step_cascade`: `len=4 shorts=0 :: R(8)=\frac{8\bigl(-64+480+200\bigr)}{20} || R(8)=\frac{8\cdot 616}{20} || R(8)=\frac{4928}{20} || R(8)=\frac{1232}{5}`

968. **MATH 9.78** (`math-ch9-polynomials.json`, sev=4) — Finite Differences Diagnose the Degree (Set 2)
   - fields: tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=5 :: 4-2 =2 || 12-4 =8 || 26-12 =14 || 46-26 =20`

969. **MATH 9.85** (`math-ch9-polynomials.json`, sev=4) — Parameter t: How Many Real Zeros?
   - fields: tactical[1], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=1 :: g_k(x)=x^3-kx || g_{0}(x)=x^{3}-0\cdot x || x^{3}-0\cdot x=x^{3} || x^{3}=0`
   - `eq_step_cascade`: `len=4 shorts=0 :: g_k(x)=x^3-kx || g_{k}(x)=x^{3}-kx || g_{1}(x)=x^{3}-x || g_{5}(x)=x^{3}-5x`

970. **MATH 9.87** (`math-ch9-polynomials.json`, sev=4) — Quartic Minus a Parabola
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=0 :: p(x)=x^{4} - 5 x^{2} + 4 || p(x)-\ell(x)=x^{4}-5x^{2}+4-(x^{2}-1) || p(x)-\ell(x)=x^{4}-6x^{2}+5 || (x^{2}-1)(x^{2}-5)=0`
   - `eq_step_cascade`: `len=10 shorts=7 :: p(x)=x^{4} - 5 x^{2} + 4 || p(-x)=(-x)^{4}-5(-x)^{2}+4 || p(-x)=x^{4}-5x^{2}+4 || p(-x)=p(x)`

971. **MATH 9.88** (`math-ch9-polynomials.json`, sev=4) — H: Tank Height
   - fields: tactical[0], tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=0 :: H(t)=\frac{t^{3}-50t^{2}+200t}{200} || H'(t)=\frac{3t^{2}-100t+200}{200} || H'(12)=\frac{432-1200+200}{200} || H'(12)=\frac{-71}{25}`
   - `eq_step_cascade`: `len=4 shorts=0 :: H(12)=\frac{12\bigl(144-600+200\bigr)}{200} || H(12)=\frac{12\cdot(-256)}{200} || H(12)=\frac{-3072}{200} || H(12)=-\frac{384}{25}`

972. **MATH 9.90** (`math-ch9-polynomials.json`, sev=4) — Parameter α1: How Many Real Zeros?
   - fields: tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=8 shorts=1 :: g_k(x)=x^3-kx || g_{k}(-x)=-x^{3}+kx || -g_{k}(x)=-x^{3}+kx || g_{0}(-x)=-x^{3}`

973. **MATH 9.91** (`math-ch9-polynomials.json`, sev=4) — Parameter α2: How Many Real Zeros?
   - fields: tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=1 :: g_k(x)=x^3-kx || g_{-9}(x)=x^{3}+9x || x^{3}+9x=x(x^{2}+9) || x^{2}+9=0`
   - `eq_step_cascade`: `len=9 shorts=2 :: g_k(x)=x^3-kx || g_{k}(-x)=(-x)^{3}-k(-x) || (-x)^{3}-k(-x)=-x^{3}+kx || g_{k}(-x)=-(x^{3}-kx)`

974. **MATH 9.92** (`math-ch9-polynomials.json`, sev=4) — Parameter α3: How Many Real Zeros?
   - fields: tactical[0], tactical[1], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=3 shorts=2 :: g_{16}(-4)=0 || g_{16}(4)=64-64 || g_{16}(4)=0`
   - `eq_step_cascade`: `len=4 shorts=1 :: g_k(x)=x^3-kx || g_{0}(x)=x^{3} || g_{0}(1)=1\neq 0 || g_{0}(0)=0`

975. **MATH 9.93** (`math-ch9-polynomials.json`, sev=4) — Parameter α4: How Many Real Zeros?
   - fields: tactical[1], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=1 :: g_k(x)=x^3-kx || g_{0}(x)=x^{3}-0\cdot x || x^{3}-0\cdot x=x^{3} || g_{0}'(x)=3x^{2}`
   - `eq_step_cascade`: `len=6 shorts=1 :: g_k(x)=x^3-kx || g_{k}(-x)=-x^{3}+kx || g_{k}(-x)=-(x^{3}-kx) || -(x^{3}-kx)=-g_{k}(x)`

976. **MATH 9.95** (`math-ch9-polynomials.json`, sev=4) — Parameter α6: How Many Real Zeros?
   - fields: tactical[0], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=1 :: g_k(x)=x^3-kx || g_{k}(x)=x^{3}-kx || g_{49}(7)=343-343 || g_{49}(7)=0`
   - `eq_step_cascade`: `len=8 shorts=2 :: g_k(x)=x^3-kx || g_{k}(-x)=(-x)\bigl((-x)^{2}-k\bigr) || g_{k}(-x)=-x(x^{2}-k) || g_{k}(-x)=-g_{k}(x)`

977. **MATH 9.104** (`math-ch9-polynomials.json`, sev=4) — Quartic Meets a Parabola Four Times
   - fields: tactical[0], tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=0 :: p(x)=x^{4} - 6 x^{2} + 5 || p(x)-\ell(x)=x^{4}-7x^{2}+6 || (x^{2}-1)(x^{2}-6)=0 || x=\pm 1,\ \pm\sqrt{6}`
   - `eq_step_cascade`: `len=4 shorts=0 :: p(x)=x^{4}-6x^{2}+5 || p(-x)=(-x)^{4}-6(-x)^{2}+5 || p(-x)=x^{4}-6x^{2}+5 || x^{4}-6x^{2}+5=p(x)`

978. **MATH 9.105** (`math-ch9-polynomials.json`, sev=4) — Cubic Meets a Parabola: Count Carefully
   - fields: tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=0 :: p(x)=x \left(x^{2} - 6\right) || p(x)=x^{3}-6x || \ell(x)=x^{2}-4 || p(x)-\ell(x)=x^{3}-x^{2}-6x+4`
   - `eq_step_cascade`: `len=5 shorts=0 :: p(x)=x \left(x^{2} - 6\right) || p(x)=x(x^{2}-6) || x(x^{2}-6)=x^{3}-6x || p(-x)=-x^{3}+6x`

979. **MATH 9.106** (`math-ch9-polynomials.json`, sev=4) — Cubic Minus a Line: Three Meetings?
   - fields: tactical[1], tactical[2], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=1 :: p(x)=x \left(x^{2} - 3\right) || p(x)=x^{3}-3x || \ell(x)=x+1 || p(x)-\ell(x)=x^{3}-4x-1`
   - `eq_step_cascade`: `len=6 shorts=1 :: p(x)=x \left(x^{2} - 3\right) || p(x)=x(x^{2}-3) || x(x^{2}-3)=x^{3}-3x || p(-x)=-x^{3}+3x`

980. **MATH 9.108** (`math-ch9-polynomials.json`, sev=4) — Rebuild from a Double Root and a Simple Root (Set 1) (variant 57)
   - fields: tactical[1], tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=5 shorts=2 :: p'(x)=2(x-1)(x+3)+(x-1)^{2} || p'(x)=(x-1)(3x+5) || p'(1)=0\cdot 8 || 0\cdot 8=0`
   - `eq_step_cascade`: `len=4 shorts=1 :: p'(x)=(x-1)(3x+5) || p'(-3)=(-4)(-9+5) || p'(-3)=(-4)(-4) || p'(-3)=16`

981. **MATH 9.112** (`math-ch9-polynomials.json`, sev=4) — Square of a Quadratic Minus Itself (Set 2) (variant 61)
   - fields: tactical[1], tactical[2], tactical[3], tactical[4]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=1 :: p(x)=x^{2} + x + 1 || r(x)=p(x)^{2}-p(x) || r(x)=p(x)\bigl(p(x)-1\bigr) || r=p(p-1)`
   - `eq_step_cascade`: `len=3 shorts=2 :: p(x)=x^{2} + x + 1 || p(0)=1 || r(0)=1^{2}-1`

982. **MATH 9.113** (`math-ch9-polynomials.json`, sev=4) — Even Quartic: Factor Then Read the Shape (Set 2) (variant 62)
   - fields: tactical[1]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=0 :: p(x)=x^{4}-10x^{2}+9 || p(-x)=(-x)^{4}-10(-x)^{2}+9 || p(-x)=x^{4}-10x^{2}+9 || x^{4}-10x^{2}+9=p(x)`

983. **MATH 9.114** (`math-ch9-polynomials.json`, sev=4) — Rebuild from a Double Root and a Simple Root (Set 3)
   - fields: tactical[2]
   - reasons: eq_step_cascade
   - `eq_step_cascade`: `len=4 shorts=2 :: p'(x)=3(x+1)(x-1) || p'(2)=3(3)(1) || 3(3)(1)=9 || p'(2)=9`
