# -*- coding: utf-8 -*-
"""
Patch tactical_explanations in src/data/mock-exam-demo-sourced.json for
BOTH math and economics, per scripts/bbe-tactical-explanations-memory.md
and the MATH 13.18 gold standard (src/data/mock-exam-4-sourced.json math[12]).

Only tactical_explanations arrays are replaced. Everything else in the
JSON (statements, answer_key, context, titles, case_ids, solution_overview)
is left byte-identical because we json.load -> mutate one field -> json.dump.
"""
import json
import io
import re

PATH = r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\mock-exam-demo-sourced.json"

with io.open(PATH, "r", encoding="utf-8") as f:
    data = json.load(f)

NEW = {}

# ============================================================
# ECONOMICS
# ============================================================

NEW["CASE 6.5.034"] = [
r"""**A.** → True

Average inventory is the mean of the opening and closing balances:

$$
169 + 179 = 348
$$

$$
\frac{348}{2} = 174
$$

Divide cost of sales by that average:

$$
\frac{674}{174} \approx 3.87
$$

$$
3.87 < 6.87
$$

Inventory turns about 3.87 times a year, which is below the 6.87 claim.

So the statement is True.""",
r"""**B.** → False

Average total assets is the mean of the opening and closing balances:

$$
823 + 1028 = 1851
$$

$$
\frac{1851}{2} = 925.5
$$

Divide revenue by that average:

$$
\frac{1019}{925.5} \approx 1.101
$$

$$
1.101 \ngtr 1.48
$$

Asset turnover is about 1.10, so it does not clear the 1.48 hurdle.

So the statement is False.""",
r"""**C.** → True

Letter A already recovers inventory turnover:

$$
3.87
$$

A higher turnover means stock is sold and replaced more often, so less cash sits tied up in inventory at any moment. That is exactly the reading the claim states about the 3.9 figure.

So the statement is True.""",
r"""**D.** → True

Revenue is read straight from the extract line:

$$
1019 > 999
$$

Revenue of EUR 1019 thousand exceeds the EUR 999 thousand threshold.

So the statement is True.""",
r"""**E.** → False

Average trade receivables is the mean of the opening and closing balances:

$$
135 + 107 = 242
$$

$$
\frac{242}{2} = 121
$$

Divide revenue by that average:

$$
\frac{1019}{121} \approx 8.42
$$

$$
8.42 \ngtr 10.4
$$

Receivables turn about 8.42 times a year, so the claim of more than 10.4 fails.

So the statement is False.""",
]

NEW["CASE 6.4.010"] = [
r"""**A.** → True

Tax authorities and banks are standard external users of financial accounting reports such as the balance sheet and the income statement, alongside internal managers.

So the statement is True.""",
r"""**B.** → True

The overview already recovers current assets $CA = 356$ and current liabilities $CL = 223$.

$$
356 - 223 = 133
$$

$$
133 > 0
$$

Working capital is EUR 133 thousand and positive, matching the claim.

So the statement is True.""",
r"""**C.** → True

Total liabilities and total assets are read directly from the extract:

$$
\frac{703}{1181} \approx 0.595
$$

$$
0.595 \times 100\% \approx 59.5\%
$$

$$
59.5\% > 56\%
$$

The debt ratio is about 59.5%, which clears the 56% hurdle.

So the statement is True.""",
r"""**D.** → True

Trade receivables are read from the extract, and current assets is the overview's recovered $CA = 356$.

$$
\frac{81}{356} \approx 0.228
$$

$$
0.228 \times 100\% \approx 22.8\%
$$

$$
22.8\% < 48.5\%
$$

Trade receivables are about 22.8% of current assets, below the 48.5% claim.

So the statement is True.""",
r"""**E.** → True

Cash is read from the extract, and current assets is the overview's recovered $CA = 356$.

$$
\frac{119}{356} \approx 0.334
$$

$$
0.334 \times 100\% \approx 33.4\%
$$

$$
33.4\% > 23.1\%
$$

Cash is about 33.4% of current assets, above the 23.1% threshold.

So the statement is True.""",
]

NEW["CASE 6.2.039"] = [
r"""**A.** → True

Under the straight-line method, the depreciable cost is spread evenly across useful life, so every year carries the same depreciation charge. That is exactly the rule the claim restates.

So the statement is True.""",
r"""**B.** → False

The overview already recovers current assets $CA = 276$, inventory $= 119$, and current liabilities $CL = 132$.

$$
276 - 119 = 157
$$

$$
\frac{157}{132} \approx 1.189
$$

$$
1.189 \ngtr 1.35
$$

Quick cover is only about 1.19 times, so it does not exceed 1.35.

So the statement is False.""",
r"""**C.** → True

The overview already recovers current assets $CA = 276$ and current liabilities $CL = 132$.

$$
\frac{276}{132} \approx 2.091
$$

$$
2.091 > 1.28
$$

The current ratio is about 2.09, which clears the 1.28 hurdle.

So the statement is True.""",
r"""**D.** → True

The overview already recovers current assets $CA = 276$ and current liabilities $CL = 132$.

$$
276 - 132 = 144
$$

$$
144 > 0
$$

Working capital is EUR 144 thousand and positive, matching the claim.

So the statement is True.""",
r"""**E.** → False

Buildings and total assets are read directly from the extract:

$$
\frac{307}{860} \approx 0.357
$$

$$
0.357 \times 100\% \approx 35.7\%
$$

$$
35.7\% \ngtr 47.1\%
$$

Buildings are about 35.7% of total assets, so the claim of more than 47.1% fails.

So the statement is False.""",
]

NEW["CASE 6.3.027"] = [
r"""**A.** → False

Total equity is read from the two-year extract:

$$
532 - 542 = -10
$$

$$
\frac{-10}{542} \approx -0.0185
$$

$$
-0.0185 \times 100\% \approx -1.8\%
$$

$$
-1.8\% \ngtr 21.7\%
$$

Total equity actually fell by about 1.8%, so growth above 21.7% is false.

So the statement is False.""",
r"""**B.** → True

Current assets such as inventory, trade receivables and cash are the short-term, more liquid stock of resources. They are not expected to be held for use beyond one year, which is exactly the classification the claim states.

So the statement is True.""",
r"""**C.** → True

The overview already recovers Year-2 non-current liabilities $NCL = 441$, and Year-2 total equity is read from the extract as $532$.

$$
\frac{441}{532} \approx 0.829
$$

$$
0.829 \times 100\% \approx 82.9\%
$$

$$
82.9\% < 91.7\%
$$

Year-2 NCL over equity is about 82.9%, which is below the 91.7% claim.

So the statement is True.""",
r"""**D.** → True

The overview already recovers Year-2 current assets $CA = 336$ and current liabilities $CL = 171$.

$$
\frac{336}{171} \approx 1.965
$$

$$
1.965 < 2.02
$$

Current assets cover current liabilities about 1.97 times in Year 2, which is less than 2.02.

So the statement is True.""",
r"""**E.** → False

Total assets are read from the two-year extract:

$$
1144 - 1102 = 42
$$

$$
\frac{42}{1102} \approx 0.0381
$$

$$
0.0381 \times 100\% \approx 3.8\%
$$

$$
3.8\% \ngtr 12.2\%
$$

Total assets grew by only about 3.8%, so the claim of more than 12.2% fails.

So the statement is False.""",
]

NEW["CASE 6.1.020"] = [
r"""**A.** → True

Non-current assets are held for use in the business beyond one year and normally have a useful life longer than one year. That is the standard classification the claim restates.

So the statement is True.""",
r"""**B.** → False

The overview already recovers current assets $CA = 332$ and current liabilities $CL = 198$.

$$
\frac{332}{198} \approx 1.677
$$

$$
1.677 \nless 0.93
$$

The current ratio is about 1.68, so it is not below 0.93.

So the statement is False.""",
r"""**C.** → False

The overview already recovers current assets $CA = 332$, inventory $= 136$, and current liabilities $CL = 198$.

$$
332 - 136 = 196
$$

$$
\frac{196}{198} \approx 0.990
$$

$$
0.990 \ngtr 1.24
$$

Quick cover is only about 0.99 times, so it does not exceed 1.24.

So the statement is False.""",
r"""**D.** → False

Total equity and total assets are read directly from the extract:

$$
\frac{718}{1206} \approx 0.595
$$

$$
0.595 \times 100\% \approx 59.5\%
$$

$$
59.5\% \nless 33.7\%
$$

The equity ratio is about 59.5%, so it is not below 33.7%.

So the statement is False.""",
r"""**E.** → False

Total liabilities and total assets are read directly from the extract:

$$
\frac{488}{1206} \approx 0.405
$$

$$
0.405 \times 100\% \approx 40.5\%
$$

$$
40.5\% \ngtr 47.8\%
$$

The debt ratio is about 40.5%, so it does not exceed 47.8%.

So the statement is False.""",
]

NEW["CASE 6.5.068"] = [
r"""**A.** → False

The overview already recovers current assets $CA = 451$ and current liabilities $CL = 267$.

$$
\frac{451}{267} \approx 1.689
$$

$$
1.689 \nless 0.78
$$

The current ratio is about 1.69, so it is not below 0.78.

So the statement is False.""",
r"""**B.** → True

The overview already recovers current assets $CA = 451$ and current liabilities $CL = 267$.

$$
\frac{451}{267} \approx 1.689
$$

$$
1.689 > 1.53
$$

The current ratio is about 1.69, which clears the 1.53 hurdle.

So the statement is True.""",
r"""**C.** → False

The overview already recovers current assets $CA = 451$, inventory $= 215$, and current liabilities $CL = 267$.

$$
451 - 215 = 236
$$

$$
\frac{236}{267} \approx 0.884
$$

$$
0.884 \ngtr 1.25
$$

Quick cover is only about 0.88 times, so it does not exceed 1.25.

So the statement is False.""",
r"""**D.** → True

The overview already recovers current assets $CA = 451$ and current liabilities $CL = 267$.

$$
451 - 267 = 184
$$

$$
184 > 0
$$

Working capital is EUR 184 thousand and positive, matching the claim.

So the statement is True.""",
r"""**E.** → True

Trade receivables are read from the extract, and current assets is the overview's recovered $CA = 451$.

$$
\frac{156}{451} \approx 0.346
$$

$$
0.346 \times 100\% \approx 34.6\%
$$

$$
34.6\% < 55\%
$$

Trade receivables are about 34.6% of current assets, below the 55% claim.

So the statement is True.""",
]

NEW["CASE 6.5.074"] = [
r"""**A.** → True

The overview already recovers current assets $CA = 355$ and current liabilities $CL = 177$.

$$
\frac{355}{177} \approx 2.006
$$

$$
2.006 > 1.8
$$

The current ratio is about 2.01, which clears the 1.8 hurdle.

So the statement is True.""",
r"""**B.** → False

The overview already recovers current assets $CA = 355$, inventory $= 169$, and current liabilities $CL = 177$.

$$
355 - 169 = 186
$$

$$
\frac{186}{177} \approx 1.051
$$

$$
1.051 \ngtr 1.14
$$

Quick cover is only about 1.05 times, so it does not exceed 1.14.

So the statement is False.""",
r"""**C.** → False

Buildings and total assets are read directly from the extract:

$$
\frac{305}{933} \approx 0.327
$$

$$
0.327 \times 100\% \approx 32.7\%
$$

$$
32.7\% \ngtr 43.4\%
$$

Buildings are about 32.7% of total assets, so the claim of more than 43.4% fails.

So the statement is False.""",
r"""**D.** → False

A long-term bank loan is borrowed money owed to a lender. It belongs with non-current liabilities, not with equity (share capital and retained earnings). Classifying the EUR 396 thousand loan inside equity would misclassify a liability as an ownership claim.

So the statement is False.""",
r"""**E.** → True

The overview already recovers current assets $CA = 355$ and current liabilities $CL = 177$.

$$
355 - 177 = 178
$$

$$
178 > 0
$$

Working capital is EUR 178 thousand and positive, matching the claim.

So the statement is True.""",
]

NEW["CASE 6.5.060"] = [
r"""**A.** → False

The overview already recovers current assets $CA = 280$, inventory $= 97$, and current liabilities $CL = 178$.

$$
280 - 97 = 183
$$

$$
\frac{183}{178} \approx 1.028
$$

$$
1.028 \ngtr 1.22
$$

Quick cover is only about 1.03 times, so it does not exceed 1.22.

So the statement is False.""",
r"""**B.** → False

Total equity and total assets are read directly from the extract:

$$
\frac{310}{963} \approx 0.322
$$

$$
0.322 \times 100\% \approx 32.2\%
$$

$$
32.2\% \nless 28.8\%
$$

The equity ratio is about 32.2%, so it is not below 28.8%.

So the statement is False.""",
r"""**C.** → True

The overview already recovers current assets $CA = 280$ and current liabilities $CL = 178$.

$$
280 - 178 = 102
$$

$$
102 > 0
$$

Working capital is EUR 102 thousand and positive, matching the claim.

So the statement is True.""",
r"""**D.** → False

Buildings and total assets are read directly from the extract:

$$
\frac{474}{963} \approx 0.492
$$

$$
0.492 \times 100\% \approx 49.2\%
$$

$$
49.2\% \ngtr 55.3\%
$$

Buildings are about 49.2% of total assets, so the claim of more than 55.3% fails.

So the statement is False.""",
r"""**E.** → False

Inventory is read from the extract, and current assets is the overview's recovered $CA = 280$.

$$
\frac{97}{280} \approx 0.346
$$

$$
0.346 \times 100\% \approx 34.6\%
$$

$$
34.6\% \ngtr 46\%
$$

Inventory is about 34.6% of current assets, so the claim of more than 46% fails.

So the statement is False.""",
]

NEW["CASE 6.5.077"] = [
r"""**A.** → True

The overview already recovers current assets $CA = 516$ and current liabilities $CL = 237$.

$$
516 - 237 = 279
$$

$$
279 > 0
$$

Working capital is EUR 279 thousand and positive, matching the claim.

So the statement is True.""",
r"""**B.** → True

The overview already recovers current assets $CA = 516$, inventory $= 231$, and current liabilities $CL = 237$.

$$
516 - 231 = 285
$$

$$
\frac{285}{237} \approx 1.203
$$

$$
1.203 > 0.9
$$

Quick cover is about 1.20 times, which clears the 0.9 hurdle.

So the statement is True.""",
r"""**C.** → True

Buildings and total assets are read directly from the extract:

$$
\frac{502}{1214} \approx 0.414
$$

$$
0.414 \times 100\% \approx 41.4\%
$$

$$
41.4\% > 38.9\%
$$

Buildings are about 41.4% of total assets, above the 38.9% threshold.

So the statement is True.""",
r"""**D.** → True

Inventory is read from the extract, and current assets is the overview's recovered $CA = 516$.

$$
\frac{231}{516} \approx 0.448
$$

$$
0.448 \times 100\% \approx 44.8\%
$$

$$
44.8\% > 42.9\%
$$

Inventory is about 44.8% of current assets, above the 42.9% threshold.

So the statement is True.""",
r"""**E.** → True

The overview already recovers equity $= 584$, non-current liabilities $NCL = 393$, and non-current assets $NCA = 698$.

$$
584 + 393 = 977
$$

$$
977 - 698 = 279
$$

$$
\frac{279}{698} \approx 0.400
$$

$$
0.400 \times 100\% \approx 40.0\%
$$

$$
40.0\% > 26.8\%
$$

Equity plus non-current liabilities exceeds non-current assets by about 40.0%, clearing the 26.8% hurdle.

So the statement is True.""",
]

NEW["CASE 6.5.029"] = [
r"""**A.** → True

The overview already recovers current assets $CA = 463$ and current liabilities $CL = 128$.

$$
\frac{463}{128} \approx 3.617
$$

$$
3.617 > 1.55
$$

The current ratio is about 3.62, which clears the 1.55 hurdle.

So the statement is True.""",
r"""**B.** → False

Total equity and total assets are read directly from the extract:

$$
\frac{882}{1347} \approx 0.655
$$

$$
0.655 \times 100\% \approx 65.5\%
$$

$$
65.5\% \nless 28.7\%
$$

The equity ratio is about 65.5%, so it is not below 28.7%.

So the statement is False.""",
r"""**C.** → False

Total liabilities and total assets are read directly from the extract:

$$
\frac{465}{1347} \approx 0.345
$$

$$
0.345 \times 100\% \approx 34.5\%
$$

$$
34.5\% \ngtr 76.4\%
$$

The debt ratio is about 34.5%, so it does not exceed 76.4%.

So the statement is False.""",
r"""**D.** → True

The overview already recovers current assets $CA = 463$ and current liabilities $CL = 128$.

$$
463 - 128 = 335
$$

$$
335 > 0
$$

Working capital is EUR 335 thousand and positive, matching the claim.

So the statement is True.""",
r"""**E.** → False

Buildings and total assets are read directly from the extract:

$$
\frac{485}{1347} \approx 0.360
$$

$$
0.360 \times 100\% \approx 36.0\%
$$

$$
36.0\% \ngtr 50.7\%
$$

Buildings are about 36.0% of total assets, so the claim of more than 50.7% fails.

So the statement is False.""",
]

# ============================================================
# MATH
# ============================================================

# DEMO MATH 1.H02 — already one-inference-per-display (propositional
# logic); each letter already reuses earlier letters' conclusions
# instead of re-deriving them. Kept verbatim (still "rewritten" as a
# no-op edit since it already matches the gold-standard rhythm).
NEW["DEMO MATH 1.H02"] = [
r"""**A.** → True

Rule (4) is an unconditional atomic fact:

$$
D=\mathsf{true}
$$

No later rule ever forces Dmitri out. Hence Dmitri belongs to every roster consistent with the rules.

So the statement is True.""",
r"""**B.** → True

Argue by contradiction. Suppose Ana stays away:

$$
\neg A
$$

Rule (6) then forces Boris:

$$
\neg A\Rightarrow B
$$

$$
B
$$

Rule (7) forbids Ceci once Boris is present:

$$
\neg(B\land C)
$$

$$
\neg C
$$

Rule (2) is the implication $\neg B\Rightarrow C$. Its antecedent is false (Boris attends), so (2) does not resurrect Ceci.

Rule (8) demands that at least one of Ana or Ceci attends:

$$
A\lor C
$$

With both $A$ and $C$ false, the disjunction fails:

$$
\neg(A\lor C)
$$

The assumption $\neg A$ is therefore impossible. Ana attends in every legal roster.

So the statement is True.""",
r"""**C.** → True

From B, Ana always attends:

$$
A=\mathsf{true}
$$

Rule (1) is $A\Rightarrow\neg B$. With $A$ true this forces

$$
\neg B
$$

Rule (2) with Boris absent forces Ceci:

$$
\neg B\Rightarrow C
$$

$$
C
$$

Because Ana is present, the "unless Ana attends" exception in (3) fires, so Ceci does not force Dmitri out. Rule (4) still requires Dmitri. The resulting roster is

$$
\{A,C,D\}
$$

— exactly three people. Rule (5) allows at most three, so three is admissible. Rule (7) holds because Boris is absent. Rule (8) holds because both Ana and Ceci attend.

Thus a legal three-person roster exists.

So the statement is True.""",
r"""**D.** → False

Ask whether Boris can appear in any roster that obeys all eight rules. From letter B, Ana is present in every legal roster:

$$
A=\mathsf{true}
$$

Rule (1) is the implication

$$
A\Rightarrow\neg B
$$

With the antecedent always true, modus ponens forces

$$
\neg B
$$

in every model. Boris is therefore permanently ejected: there is no legal roster in which he attends.

So the statement is False.""",
r"""**E.** → False

Remove the Ana-exception from (3). The new rule (3′) reads simply

$$
C\Rightarrow\neg D
$$

The earlier forcing still applies: Ana must attend, so (1) and (2) still yield $\neg B$ and $C$. Rule (4) still needs $D$. But $C$ together with (3′) forces $\neg D$, contradicting (4).

The constraint set becomes unsatisfiable. No solution with Dmitri remains.

So the statement is False.""",
]

# DEMO MATH 2.H02 — the overview's Part 2 already recovers |p+q|=20,
# |p-q|=10, the pair {5,15}, p^3+q^3=3500 and 1/p+1/q=4/15. Every letter
# reuses those recovered numbers instead of re-deriving them; only the
# genuinely new step per letter (a comparison, or the last leg of a
# derivation the overview did not carry) is shown, one move per display.
NEW["DEMO MATH 2.H02"] = [
r"""**A.** → True

Records (1) and (2) give $p^{2}+q^{2}=250$ and $pq=75$. Expand the squared sum:

$$
(p+q)^{2}=p^{2}+2pq+q^{2}
$$

$$
2\cdot 75=150
$$

$$
250+150=400
$$

$$
|p+q|=\sqrt{400}
$$

$$
\sqrt{400}=20
$$

which is exactly the claimed value.

So the statement is True.""",
r"""**B.** → True

The side condition $p+q>0$ selects the positive branch of letter A's result:

$$
p+q=20
$$

The cube-sum identity needs $(p^{2}+q^{2})-pq$:

$$
250-75=175
$$

$$
p^{3}+q^{3}=(p+q)\bigl((p^{2}+q^{2})-pq\bigr)
$$

$$
p^{3}+q^{3}=20\cdot 175
$$

$$
20\cdot 175=3500
$$

which is exactly record (3). So (1), (2) and $p+q>0$ already force (3) without introducing any new record.

So the statement is True.""",
r"""**C.** → True

Record (4) forces the sign of the sum. Multiply both sides of $\frac{1}{p}+\frac{1}{q}=\frac{4}{15}$ by $pq=75$:

$$
p+q=\frac{4}{15}\cdot 75
$$

$$
\frac{4}{15}\cdot 75=20
$$

matching letter A's $|p+q|=20$. The two numbers are the roots of

$$
t^{2}-20t+75=0
$$

Compute the discriminant:

$$
20^{2}=400
$$

$$
4\cdot 75=300
$$

$$
400-300=100
$$

$$
t=\frac{20\pm\sqrt{100}}{2}
$$

$$
\sqrt{100}=10
$$

$$
t=\frac{20\pm 10}{2}
$$

$$
\frac{20+10}{2}=15
$$

$$
\frac{20-10}{2}=5
$$

so the unordered pair is $\{5,15\}$, and the reciprocal sum matches record (4) automatically.

So the statement is True.""",
r"""**D.** → False

Keep records (1) and (2) fixed. From letter A and the cube-sum setup, $|p+q|=20$ and $(p^{2}+q^{2})-pq=175$, so

$$
p^{3}+q^{3}=\pm 20\cdot 175
$$

$$
20\cdot 175=3500
$$

so $p^{3}+q^{3}=3500$ or $p^{3}+q^{3}=-3500$ only. Compare with the proposed $2800$:

$$
2800\neq 3500
$$

$$
2800\neq -3500
$$

Neither sign matches, so the rewritten triple $p^{3}+q^{3}=2800$ cannot hold for any nonzero reals $p,q$ while (1) and (2) stay as given.

So the statement is False.""",
r"""**E.** → True

Records (1) and (2) determine the squared difference. Expand it:

$$
(p-q)^{2}=p^{2}-2pq+q^{2}
$$

$$
2\cdot 75=150
$$

$$
250-150=100
$$

$$
|p-q|=\sqrt{100}
$$

$$
\sqrt{100}=10
$$

matching the first half of the claim. If record (4) also holds, letter C gives $p+q=20$, and the cube-sum identity with $(p^{2}+q^{2})-pq=175$ (from letter B) gives

$$
p^{3}+q^{3}=(p+q)\bigl((p^{2}+q^{2})-pq\bigr)
$$

$$
p^{3}+q^{3}=20\cdot 175
$$

$$
20\cdot 175=3500
$$

which is exactly the displayed identity.

So the statement is True.""",
]

# MATH 11.99 — the overview's Part 2 already states the four final
# figures without the intermediate factor arithmetic. Letters A, B, C
# supply that missing arithmetic in full; D and E only compare already
# recovered figures, so they stay short.
NEW["MATH 11.99"] = [
r"""**A.** → True

Six beginning-of-year payments form an annuity due. First find the ordinary annuity factor:

$$
(1.07)^{-6}\approx 0.6663
$$

$$
1-0.6663=0.3337
$$

$$
\frac{0.3337}{0.07}\approx 4.7665
$$

Shift forward one period for the annuity due and scale by the payment:

$$
4.7665\cdot 5500\approx 26216
$$

$$
26216\cdot 1.07\approx 28051
$$

which rounds to the claimed USD 28050.

So the statement is True.""",
r"""**B.** → False

Accumulate the same six annuity-due payments to the end of year 6:

$$
(1.07)^{6}\approx 1.5007
$$

$$
1.5007-1=0.5007
$$

$$
\frac{0.5007}{0.07}\approx 7.1533
$$

$$
7.1533\cdot 5500\approx 39343
$$

$$
39343\cdot 1.07\approx 42097
$$

About USD 42100 is far from the claimed USD 50000.

So the statement is False.""",
r"""**C.** → True

Continuous compounding multiplies the principal by $e^{0.055\cdot 8}$:

$$
0.055\cdot 8=0.44
$$

$$
e^{0.44}\approx 1.5527
$$

$$
25000\cdot 1.5527\approx 38818
$$

which matches the claimed USD 38820 to ordinary exam rounding.

So the statement is True.""",
r"""**D.** → False

The growing-perpetuity present value uses the Gordon formula:

$$
0.07-0.02=0.05
$$

$$
\frac{2400}{0.05}=48000
$$

From letter A, the annuity-due lease PV is about $28051$. Because

$$
48000>28051
$$

the perpetuity reserve is larger than the lease PV, not less.

So the statement is False.""",
r"""**E.** → False

Compare the two solved figures from letters C and D:

$$
FV_{\mathrm{cont}}\approx 38818,\qquad PV_{\mathrm{perp}}=48000
$$

$$
38818\ngtr 48000
$$

The continuous-compounding accumulation is smaller than the perpetuity PV, not larger.

So the statement is False.""",
]

# DEMO MATH 4.H02 — five independent equations, no shared numeric model
# to reuse, so every letter is fully worked. Casework and quadratic
# solves that previously jumped straight to the final roots now show
# the intermediate discriminant and expansion steps.
NEW["DEMO MATH 4.H02"] = [
r"""**A.** → False

Begin with the domain of both radicals: $x\ge -1$. Isolate one square root:

$$
\sqrt{3x+7}=4-\sqrt{x+1}
$$

The right side must stay nonnegative, which requires $x\le 15$. Square once:

$$
3x+7=16-8\sqrt{x+1}+(x+1)
$$

Collect like terms:

$$
2x-10=-8\sqrt{x+1}
$$

Divide by $-2$:

$$
5-x=4\sqrt{x+1}
$$

which forces the additional restriction $x\le 5$. Square again:

$$
(5-x)^{2}=16(x+1)
$$

Expand both sides:

$$
25-10x+x^{2}=16x+16
$$

Move everything to one side:

$$
x^{2}-26x+9=0
$$

Compute the discriminant:

$$
26^{2}=676
$$

$$
4\cdot 9=36
$$

$$
676-36=640
$$

Apply the quadratic formula:

$$
x=\frac{26\pm\sqrt{640}}{2}
$$

$$
\sqrt{640}=8\sqrt{10}
$$

$$
\frac{26}{2}=13
$$

$$
\frac{8\sqrt{10}}{2}=4\sqrt{10}
$$

$$
x=13\pm 4\sqrt{10}
$$

Two real candidates appear, but only the smaller one lies in $[-1,5]$ and survives back-substitution. The larger candidate is discarded. So it is not true that both candidates survive.

So the statement is False.""",
r"""**B.** → True

Work on the common domain that excludes the poles $x=1$ and $x=-4$. Clear the common denominator $(x-1)(x+4)$:

$$
(x+2)(x+4)+(2x-3)(x-1)=3x^{2}+5x-2
$$

Expand both products on the left:

$$
x^{2}+6x+8+2x^{2}-5x+3=3x^{2}+5x-2
$$

Combine like terms:

$$
3x^{2}+x+11=3x^{2}+5x-2
$$

The quadratic terms cancel, leaving the linear condition

$$
x+11=5x-2
$$

$$
4x=13
$$

$$
x=\dfrac{13}{4}
$$

The value $\tfrac{13}{4}$ is neither pole, so exactly one root survives.

So the statement is True.""",
r"""**C.** → False

An absolute value equals a real expression only when that expression is nonnegative, so require $3x-4\ge 0$, i.e. $x\ge\tfrac{4}{3}$. Split on the sign of $x^{2}-6x+5$.

Case 1 ($x^{2}-6x+5\ge 0$): the equation reads $x^{2}-6x+5=3x-4$, i.e.

$$
x^{2}-9x+9=0
$$

$$
9^{2}=81
$$

$$
4\cdot 9=36
$$

$$
81-36=45
$$

$$
x=\frac{9\pm\sqrt{45}}{2}
$$

$$
\sqrt{45}=3\sqrt{5}
$$

$$
x=\frac{9\pm 3\sqrt{5}}{2}
$$

Only $x=\dfrac{9+3\sqrt5}{2}\approx 7.85$ satisfies both $x\ge 5$ (needed for $x^{2}-6x+5\ge0$) and the domain; the other root fails that sign requirement.

Case 2 ($x^{2}-6x+5<0$): the equation reads $-(x^{2}-6x+5)=3x-4$, i.e.

$$
x^{2}-3x+1=0
$$

$$
3^{2}=9
$$

$$
4\cdot 1=4
$$

$$
9-4=5
$$

$$
x=\frac{3\pm\sqrt{5}}{2}
$$

Only $x=\dfrac{3+\sqrt5}{2}\approx 2.62$ lies in the required range $1<x<5$ and the domain $x\ge\tfrac{4}{3}$; the other root is below $1$.

The second surviving root is real and domain-legal, yet

$$
2.62<3
$$

so it is not true that every real solution is strictly larger than $3$.

So the statement is False.""",
r"""**D.** → False

Logarithms force a strict domain $x>1$ (and $3x+5>0$, which is automatic once $x>1$). Combine the logs into a single product identity:

$$
(x-1)(x+3)=3x+5
$$

Expand and move terms to one side:

$$
x^{2}-x-8=0
$$

Compute the discriminant:

$$
(-1)^{2}=1
$$

$$
4\cdot(-8)=-32
$$

$$
1-(-32)=33
$$

Apply the quadratic formula:

$$
x=\frac{1\pm\sqrt{33}}{2}
$$

Only the plus branch is domain-legal:

$$
\frac{1+\sqrt{33}}{2}\approx 3.37
$$

$$
3.37<4
$$

The unique domain-legal solution is therefore not larger than $4$.

So the statement is False.""",
r"""**E.** → True

Split the absolute value at the kink $x=1$.

For $x\ge 1$: $|x-1|=x-1$, so the equation becomes $\sqrt{x+3}=5-x$, with the extra restriction $x\le 5$. Square:

$$
x+3=(5-x)^{2}
$$

$$
x+3=25-10x+x^{2}
$$

$$
x^{2}-11x+22=0
$$

$$
(-11)^{2}=121
$$

$$
4\cdot 22=88
$$

$$
121-88=33
$$

$$
x=\frac{11\pm\sqrt{33}}{2}
$$

Only the minus branch lies in $[1,5]$:

$$
x=\frac{11-\sqrt{33}}{2}
$$

$$
\frac{11-\sqrt{33}}{2}\approx 2.63
$$

$$
2.63>2
$$

For $-3\le x<1$: $|x-1|=1-x$, so the equation becomes $\sqrt{x+3}=3+x$. Square:

$$
x+3=(3+x)^{2}
$$

$$
x+3=9+6x+x^{2}
$$

$$
x^{2}+5x+6=0
$$

$$
(x+2)(x+3)=0
$$

$$
x=-2
$$

$$
x=-3
$$

Both are negative and both satisfy $3+x\ge 0$, so both survive back-substitution. So there is at least one negative solution and at least one solution greater than $2$.

So the statement is True.""",
]

# DEMO MATH 5.H01 — the overview's Part 2 already solves the baseline
# (m,c)=(90,90) once. Letters reuse that baseline and split every
# multi-term product/sum that used to be crammed into one display.
NEW["DEMO MATH 5.H01"] = [
r"""**A.** → True

Eliminate $m$ by substituting $m=180-c$ into the revenue equation:

$$
35(180-c)+55c=8100
$$

Distribute the $35$:

$$
6300-35c+55c=8100
$$

Combine the $c$ terms:

$$
6300+20c=8100
$$

Isolate:

$$
20c=1800
$$

Divide:

$$
c=90
$$

$$
m=180-90
$$

$$
180-90=90
$$

The unique baseline solution is therefore $(m,c)=(90,90)$.

So the statement is True.""",
r"""**B.** → True

Keep the page total $m+c=180$ and the revenue $8100$, but replace the colour price by $60$:

$$
35(180-c)+60c=8100
$$

Distribute the $35$:

$$
6300-35c+60c=8100
$$

Combine the $c$ terms:

$$
6300+25c=8100
$$

Isolate:

$$
25c=1800
$$

Divide:

$$
c=72
$$

Because

$$
72<75
$$

the new colour count falls below $75$.

So the statement is True.""",
r"""**C.** → True

From the baseline $(90,90)$, shift by $15$ pages:

$$
(m,c)=(75,105)
$$

Revenue at the new mix, computed term by term:

$$
35\cdot 75=2625
$$

$$
55\cdot 105=5775
$$

$$
2625+5775=8400
$$

Compare with the baseline revenue:

$$
8400-8100=300
$$

Revenue rises by exactly EUR 300.

So the statement is True.""",
r"""**D.** → True

An all-colour batch of $180$ pages yields

$$
55\cdot 180=9900
$$

Any mix that includes mono pages earns strictly less, because mono is cheaper than colour. A target of EUR 10000 therefore exceeds every feasible nonnegative revenue, so no solution $(m,c)$ exists.

So the statement is True.""",
r"""**E.** → False

Revenue at the swapped mix $(120,60)$, computed term by term:

$$
35\cdot 120=4200
$$

$$
55\cdot 60=3300
$$

$$
4200+3300=7500
$$

Compare with the baseline revenue:

$$
7500\neq 8100
$$

The swapped mix does not preserve the baseline revenue of EUR 8100.

So the statement is False.""",
]

# DEMO MATH 6.H02 — split every crammed absolute-value / radical
# evaluation into one operation per display.
NEW["DEMO MATH 6.H02"] = [
r"""**A.** → True

The claim is a universal "no counterexample" statement on the closed interval $[1,4]$. Critical points of the absolute expressions are $x=1$, $x=4$ and $x=\tfrac{3}{2}$.

On $[1,\tfrac{3}{2}]$: $x^{2}-5x+4\le 0$ and $2x-3\le 0$, so the inequality reads

$$
-(x^{2}-5x+4)+(3-2x)\le x+6
$$

Expand the left side:

$$
-x^{2}+3x-1\le x+6
$$

Move everything to one side:

$$
0\le x^{2}-2x+7
$$

The discriminant of $x^{2}-2x+7$ is

$$
(-2)^{2}=4
$$

$$
4\cdot 7=28
$$

$$
4-28=-24
$$

which is negative, so the right side is always positive; the inequality holds identically on this piece.

On $[\tfrac{3}{2},4]$: $x^{2}-5x+4\le 0$ and $2x-3\ge 0$, so the inequality reads

$$
-(x^{2}-5x+4)+(2x-3)\le x+6
$$

Expand the left side:

$$
-x^{2}+7x-7\le x+6
$$

Move everything to one side:

$$
0\le x^{2}-6x+13
$$

The discriminant of $x^{2}-6x+13$ is

$$
(-6)^{2}=36
$$

$$
4\cdot 13=52
$$

$$
36-52=-16
$$

which is also negative, so this piece likewise holds identically. Hence no point of $[1,4]$ is a counterexample.

So the statement is True.""",
r"""**B.** → True

The claim only asks for existence inside the open interval $(1,2)$. The domain of the radical requires $x\ge -\tfrac{5}{2}$, which already contains $(1,2)$. Test the interior point $x=\tfrac{3}{2}$:

$$
2\cdot\tfrac{3}{2}+5=8
$$

$$
\sqrt{8}=2\sqrt{2}
$$

$$
2\sqrt{2}\approx 2.828
$$

$$
\left|\tfrac{3}{2}-2\right|=0.5
$$

$$
2.828+0.5=3.328
$$

$$
3.328\le 4
$$

So at least one point of $(1,2)$ satisfies the inequality.

So the statement is True.""",
r"""**C.** → False

Ask whether any point of the closed interval $[0,1]$ can satisfy the rational inequality. Poles are $x=-1$ and $x=2$. Away from the poles,

$$
\frac{x^{2}-5x+6}{x^{2}-x-2}-1=\frac{(x-2)(x-3)-(x-2)(x+1)}{(x-2)(x+1)}
$$

Factor the numerator:

$$
\frac{-4(x-2)}{(x-2)(x+1)}
$$

Cancel the shared factor:

$$
\frac{-4}{x+1}
$$

so the inequality reduces to $x<-1$. The interval $[0,1]$ lies entirely outside that half-line. Check directly at $x=0$:

$$
\frac{6}{-2}=-3
$$

$$
-3\ngeq 1
$$

No point of $[0,1]$ works.

So the statement is False.""",
r"""**D.** → True

The claim asks for containment of the whole segment $[0,1]$ in the solution set. On $[0,1]$ one has $x\ge 0$, so $|x|=x$, and both $x+3>0$ and $x+1\ge 0$. The inequality reads

$$
\frac{x}{x+3}+\sqrt{x+1}\le 2
$$

Each summand is increasing on $[0,1]$, so the left-hand side is maximized at the right endpoint $x=1$:

$$
\frac{1}{4}=0.25
$$

$$
\sqrt{2}\approx 1.414
$$

$$
0.25+1.414=1.664
$$

$$
1.664\le 2
$$

At the left endpoint $x=0$:

$$
0+\sqrt{1}=1
$$

$$
1\le 2
$$

Because the maximum on the segment is already $\le 2$, every point of $[0,1]$ belongs to the solution set.

So the statement is True.""",
r"""**E.** → False

The claim asks whether the solution set meets $[-4,-2]$. The pole $x=-1$ does not meet that interval, so every point of $[-4,-2]$ is domain-legal. Test the interior point $x=-3$:

$$
|2(-3)-5|=|-11|
$$

$$
|-11|=11
$$

$$
|-3+1|=2
$$

$$
\frac{11}{2}=5.5
$$

$$
|-3-2|=5
$$

$$
5.5+5=10.5
$$

$$
10.5\le 4
$$

is false. The same failure pattern persists throughout $[-4,-2]$ (the expression stays larger than $4$ on that segment). The intersection with $[-4,-2]$ is therefore empty.

So the statement is False.""",
]

# DEMO MATH 7.H01 — split the discriminant expansion into its two
# sub-expansions before combining.
NEW["DEMO MATH 7.H01"] = [
r"""**A.** → False

Two distinct real roots require a strictly positive discriminant. Expand the two pieces of $\Delta=(2k+1)^{2}-4(k^{2}-4)$ separately:

$$
(2k+1)^{2}=4k^{2}+4k+1
$$

$$
4(k^{2}-4)=4k^{2}-16
$$

Subtract:

$$
\Delta=(4k^{2}+4k+1)-(4k^{2}-16)
$$

$$
\Delta=4k^{2}+4k+1-4k^{2}+16
$$

$$
\Delta=4k+17
$$

At $k=-5$,

$$
4(-5)=-20
$$

$$
-20+17=-3
$$

$$
-3<0
$$

so $g_{-5}$ has no real roots. The claim that every real $k$ yields two distinct real roots fails.

So the statement is False.""",
r"""**B.** → True

For a monic quadratic $x^{2}-Bx+C$, the axis is $x=B/2$. Here $B=2k+1$, so

$$
x=\frac{2k+1}{2}
$$

$$
\frac{2k+1}{2}=k+\frac{1}{2}
$$

for every real $k$.

So the statement is True.""",
r"""**C.** → False

Substitute $k=2$:

$$
g_2(x)=x^{2}-(4+1)x+(4-4)
$$

$$
g_2(x)=x^{2}-5x
$$

$$
g_2(x)=x(x-5)
$$

The roots are $0$ and $5$, not $1$ and $5$.

So the statement is False.""",
r"""**D.** → False

A double root at $0$ would require both $g_k(0)=0$ and $g_k'(0)=0$:

$$
g_k(0)=k^{2}-4
$$

$$
k^{2}-4=0
$$

$$
g_k'(x)=2x-(2k+1)
$$

$$
g_k'(0)=-(2k+1)
$$

$$
-(2k+1)=0
$$

The second forces $k=-\tfrac12$, but then

$$
k^{2}=\left(-\tfrac12\right)^{2}
$$

$$
\left(-\tfrac12\right)^{2}=\tfrac14
$$

$$
\tfrac14-4=-\tfrac{15}{4}
$$

$$
-\tfrac{15}{4}\neq 0
$$

The two conditions are incompatible, so no such $k$ exists.

So the statement is False.""",
r"""**E.** → True

For $k=0$ the quadratic is

$$
g_0(x)=x^{2}-x-4
$$

The axis is $x=\tfrac12$. Evaluate term by term:

$$
\left(\tfrac12\right)^{2}=\tfrac14
$$

$$
\tfrac14-\tfrac12=-\tfrac14
$$

$$
-\tfrac14-4=-\tfrac{17}{4}
$$

which matches the claimed vertex $y$-coordinate.

So the statement is True.""",
]

# DEMO MATH 8.H01 — split every "multiply then add" bill computation
# into its two separate operations.
NEW["DEMO MATH 8.H01"] = [
r"""**A.** → True

The daytime tariff is a fixed base of $12$ euros plus $0.8$ euros per kilometre:

$$
C_{\mathrm{day}}(d)=12+0.8d
$$

which is exactly the claimed daytime bill.

So the statement is True.""",
r"""**B.** → True

Night runs keep the same kilometre rate and add a flat surcharge of $5$:

$$
C_{\mathrm{night}}(d)=C_{\mathrm{day}}(d)+5
$$

for every $d>0$. The night bill is therefore exactly EUR 5 more than the day bill at the same distance.

So the statement is True.""",
r"""**C.** → False

Set the two bills equal:

$$
12+0.8d=12+0.8d+5
$$

Subtract $12+0.8d$ from both sides:

$$
0=5
$$

The identity $0=5$ is absurd, so no real break-even distance $d^{*}$ exists. Parallel affine tariffs with a positive gap never meet.

So the statement is False.""",
r"""**D.** → True

Original daytime bill at $d=20$:

$$
0.8\cdot 20=16
$$

$$
12+16=28
$$

Waiving the base leaves only the kilometre charge, which is the same $16$ just computed. The saving is

$$
28-16=12
$$

exactly the waived EUR 12 base fee.

So the statement is True.""",
r"""**E.** → False

Evaluate the daytime bill at the two distances:

$$
0.8\cdot 10=8
$$

$$
12+8=20
$$

$$
0.8\cdot 20=16
$$

$$
12+16=28
$$

Form the ratio:

$$
\frac{28}{20}=1.4
$$

$$
1.4\neq 2
$$

Doubling distance multiplies the bill by $1.4$, not by $2$. The kilometre part scales ($8\to 16$), but the fixed base of $12$ does not. Homogeneity would require $C_{\mathrm{day}}(2d)=2\,C_{\mathrm{day}}(d)$; at $d=10$ that would need $28=40$, which fails.

So the statement is False.""",
]

# DEMO MATH 9.H01 — split substitution from factoring in letter E.
NEW["DEMO MATH 9.H01"] = [
r"""**A.** → True

Rewrite the rational function by factoring $ax$ out of the numerator:

$$
s(x)=ax\cdot\frac{1+\frac{b}{ax}+\frac{c}{ax^{2}}+\frac{d}{ax^{3}}}{1+\frac{4}{x^{2}}}
$$

As $x\to+\infty$ the fraction tends to $1$, so

$$
s(x)\sim ax
$$

When $a>0$ this tends to $+\infty$.

So the statement is True.""",
r"""**B.** → True

A cubic with positive leading coefficient tends to $-\infty$ on the far left:

$$
\lim_{x\to-\infty}r(x)=-\infty\qquad(a>0)
$$

because the $ax^{3}$ term dominates and $x^{3}\to-\infty$.

So the statement is True.""",
r"""**C.** → True

If a polynomial and its derivative both vanish at the same point, that point is a root of multiplicity at least two. With $r(2)=0$ and $r'(2)=0$, the factorisation theorem gives

$$
(x-2)^{2}\mid r(x)
$$

so $x=2$ is at least a double root.

So the statement is True.""",
r"""**D.** → False

Because $\deg r=3>2=\deg(x^{2}+4)$, the asymptotic from letter A yields

$$
|s(x)|\to\infty
$$

as $|x|\to\infty$. The horizontal line $y=0$ is therefore not an asymptote of $s$, for any choice of coefficients with $a\neq 0$.

So the statement is False.""",
r"""**E.** → True

Substitute the given coefficients into $r(x)=ax^{3}+bx^{2}+cx+d$:

$$
r(x)=3x^{3}-6x^{2}
$$

Factor out the common term:

$$
r(x)=3x^{2}(x-2)
$$

The factor $x^{2}$ makes $x=0$ a double root, and the remaining linear factor $x-2$ makes $x=2$ a simple root.

So the statement is True.""",
]

# DEMO MATH 10.H01 — split the exponent-law step from the "= e · f(t)"
# identification, and turn the parenthetical arithmetic into displays.
NEW["DEMO MATH 10.H01"] = [
r"""**A.** → True

Set the two trajectories equal and collect the exponential:

$$
4e^{0.3t}=16e^{-0.6t}
$$

$$
e^{0.9t}=4
$$

$$
t=\frac{\ln 4}{0.9}
$$

Uniqueness follows because $t\mapsto e^{0.9t}$ is one-to-one on $\mathbb{R}$.

So the statement is True.""",
r"""**B.** → False

Form the ratio $f(t)/g(t)$:

$$
\frac{f(t)}{g(t)}=\frac{4e^{0.3t}}{16e^{-0.6t}}
$$

$$
\frac{4}{16}=\frac14
$$

$$
\frac{f(t)}{g(t)}=\frac14 e^{0.9t}
$$

Take the log:

$$
h(t)=\ln\frac14+0.9t
$$

$$
\ln\frac14=-\ln 4
$$

$$
h(t)=-\ln 4+0.9t
$$

The constant term is $-\ln 4$, not $+\ln 4$. The claimed formula $\ln 4+0.9t$ is therefore wrong (though the slope $0.9$ is correct).

So the statement is False.""",
r"""**C.** → True

Compute the two exponent shifts separately:

$$
0.3\cdot\frac{10}{3}=1
$$

$$
-0.6\cdot\frac{10}{3}=-2
$$

Apply the exponent law to $f$:

$$
f\Bigl(t+\frac{10}{3}\Bigr)=4e^{0.3t+1}
$$

$$
4e^{0.3t+1}=4e^{0.3t}\cdot e^{1}
$$

$$
4e^{0.3t}\cdot e^{1}=e\cdot f(t)
$$

Apply the exponent law to $g$:

$$
g\Bigl(t+\frac{10}{3}\Bigr)=16e^{-0.6t-2}
$$

$$
16e^{-0.6t-2}=16e^{-0.6t}\cdot e^{-2}
$$

$$
16e^{-0.6t}\cdot e^{-2}=e^{-2}g(t)
$$

So $f$ is multiplied by $e$ and $g$ by $e^{-2}$.

So the statement is True.""",
r"""**D.** → False

The product simplifies to a pure exponential:

$$
p(t)=4e^{0.3t}\cdot 16e^{-0.6t}
$$

$$
4\cdot 16=64
$$

$$
p(t)=64e^{-0.3t}
$$

Because the exponent $-0.3t$ is strictly decreasing in $t$, $p$ has no global minimum on $\mathbb{R}$; it decays toward $0$ as $t\to\infty$ instead of attaining a minimum at the crossing point. Both halves of the claim fail.

So the statement is False.""",
r"""**E.** → False

At $t=0$ one does have $f(0)=4<16=g(0)$, and $f$ grows while $g$ decays. But letter A shows they meet at the positive crossing

$$
t^{*}=\frac{\ln 4}{0.9}
$$

$$
t^{*}>0
$$

where $f(t^{*})=g(t^{*})$, and for all $t>t^{*}$ one has $f(t)>g(t)$ because $f$ is increasing and $g$ is decreasing past that point. The claim that $f(t)<g(t)$ for every $t>0$ is therefore false.

So the statement is False.""",
]

# DEMO MATH 11.H01 — fully split every "multiply then subtract" and the
# four-term revenue difference in letter C.
NEW["DEMO MATH 11.H01"] = [
r"""**A.** → True

Expand revenue and differentiate:

$$
R(q)=q(90-3q)
$$

$$
R(q)=90q-3q^{2}
$$

$$
R'(q)=90-6q
$$

$$
6\cdot 4=24
$$

$$
90-24=66
$$

which matches the claimed marginal revenue at $q=4$.

So the statement is True.""",
r"""**B.** → False

Maximise $R$ by setting marginal revenue to zero:

$$
90-6q=0
$$

$$
q=15
$$

Choke price $P(q)=0$ forces

$$
90-3q=0
$$

$$
q=30
$$

where $R(30)=0$. The revenue-maximising quantity $15$ is not the choke quantity $30$.

So the statement is False.""",
r"""**C.** → True

Compute $R(5)$ term by term:

$$
90\cdot 5=450
$$

$$
3\cdot 25=75
$$

$$
450-75=375
$$

Compute $R(4)$ term by term:

$$
90\cdot 4=360
$$

$$
3\cdot 16=48
$$

$$
360-48=312
$$

The true increment is

$$
375-312=63
$$

The linear approximation using $R'(4)=66$ predicts

$$
66\cdot 1=66
$$

Because $R''(q)=-6<0$, the graph is concave and the tangent overestimates the increment:

$$
66>63
$$

So the statement is True.""",
r"""**D.** → False

At the revenue-maximising quantity $q=15$,

$$
R'(15)=0
$$

while price is still positive:

$$
90-3\cdot 15=45
$$

$$
45\neq 0
$$

Price does not equal marginal revenue at the revenue peak (that equality would require $P(q)=0$, which is the choke point, not the peak).

So the statement is False.""",
r"""**E.** → False

Past the revenue peak $q=15$, marginal revenue is already negative:

$$
6\cdot 16=96
$$

$$
90-96=-6
$$

$$
-6<0
$$

Moving from $q=16$ to $q=17$ therefore lowers revenue even though more units are sold. Selling more does not raise revenue on the declining side of $R$.

So the statement is False.""",
]

# MATH 12.187 — the overview already fully derives P(T+|S_A/B/C) and
# the joint terms 0.03432 / 0.0229 / 0.02535 and the marginal
# P(T+)=0.08257. Per the shared-model rule, letters must not reprint
# that derivation; each letter now only shows its own new step (a
# division, or a direct comparison of already-recovered numbers).
NEW["MATH 12.187"] = [
r"""**A.** → True

The overview already recovers the unconditional positive-test probability from the three subspecies contributions:

$$
P(T^{+})=0.08257
$$

Compare with the claimed threshold $7\%=0.07$:

$$
0.08257>0.07
$$

So the statement is True.""",
r"""**B.** → True

The overview already recovers the joint probability for Subspecies A as one of the three summands of $P(T^+)$:

$$
P(S_A\cap T^{+})=0.03432
$$

Compare with $3.4\%=0.034$:

$$
0.03432>0.034
$$

So the statement is True.""",
r"""**C.** → False

Apply Bayes' theorem using the overview's recovered joint $P(S_A\cap T^{+})=0.03432$ and marginal $P(T^{+})=0.08257$:

$$
P(S_A\mid T^{+})=\frac{0.03432}{0.08257}
$$

$$
\frac{0.03432}{0.08257}\approx 0.4156
$$

$$
0.4156\times 100\%\approx 41.56\%
$$

The claim needs more than $45\%$. Because

$$
41.56\%\ngtr 45\%
$$

the claim fails.

So the statement is False.""",
r"""**D.** → True

A field test returns either a positive or a negative result; those two outcomes partition the sample space. Formally, $T^{-}$ is the complement of $T^{+}$:

$$
T^{-}=(T^{+})^{c}
$$

Probability of the complement is therefore one minus the positive-test probability:

$$
P(T^{-})=1-P(T^{+})
$$

No independence or prevalence assumption is required, the identity follows from complementarity alone. With the recovered value $P(T^{+})=0.08257$ this also gives $P(T^{-})=0.91743$, but the equality itself is what the claim asserts.

So the statement is True.""",
r"""**E.** → True

The overview already recovers both joint probabilities as summands of $P(T^+)$:

$$
P(S_C\cap T^{+})=0.02535
$$

$$
P(S_B\cap T^{+})=0.0229
$$

Because both posteriors $P(S_C\mid T^{+})$ and $P(S_B\mid T^{+})$ divide by the same marginal $P(T^{+})=0.08257$, comparing the posteriors is equivalent to comparing these joints directly:

$$
0.02535>0.0229
$$

so $P(S_C\mid T^{+})>P(S_B\mid T^{+})$.

So the statement is True.""",
]

# MATH 13.108 — already matches the 13.18 depth target for B, C and D.
# Letter A is tightened to the same "formula / substitute / compute"
# three-way split used in B and C, and letter E gains the missing
# binom(6,4) expansion plus the explicit running sum of all five terms.
NEW["MATH 13.108"] = [
r"""**A.** → True

From the stem quantities, recover the common success probability.

$$
p=\dfrac{E[X]}{n}
$$

$$
p=\dfrac{11.2}{14}
$$

$$
\dfrac{11.2}{14}=0.8
$$

Each independent trial either succeeds or fails, so the failure probability is the complement

$$
1-p
$$

Substituting the recovered value,

$$
1-p=1-0.8
$$

$$
1-0.8=0.2
$$

This agrees with the probability stated in the claim.

So the statement is True.""",
r"""**B.** → False

For a binomial count $X\sim\mathrm{Bin}(n,p)$, the mean is the product of the number of trials and the success probability:

$$
E[X]=np
$$

Using $n=12$ and the recovered $p=0.8$,

$$
E[X]=12\cdot 0.8
$$

$$
12\times 0.8=9.6
$$

The claim reports $4.8$, which is not equal to the computed mean $9.6$.

So the statement is False.""",
r"""**C.** → True

For $X\sim\mathrm{Bin}(n,p)$, the variance formula is

$$
\mathrm{Var}(X)=np(1-p)
$$

Insert $n=50$, $p=0.8$, and $1-p=0.2$:

$$
\mathrm{Var}(X)=50\cdot 0.8\cdot 0.2
$$

$$
50\times 0.8=40
$$

$$
40\times 0.2=8
$$

This matches the variance stated in the claim.

So the statement is True.""",
r"""**D.** → False

Independence across trials means a run of successes multiplies the same probability $p$ on every trial. Three audible tests in a row therefore has probability

$$
p^{3}
$$

With the recovered $p=0.8$,

$$
p^{3}=(0.8)^{3}
$$

$$
(0.8)^{3}\approx 0.512
$$

Compare with the claimed cutoff $0.3$:

$$
0.512\ge 0.3
$$

The inequality in the claim therefore fails.

So the statement is False.""",
r"""**E.** → False

Let $X\sim\mathrm{Bin}(6,0.8)$. The event "at most $4$ successes" is the union of the mutually exclusive outcomes $X=0,1,\ldots,4$, so

$$
P(X\le 4)=\sum_{x=0}^{4}\binom{6}{x}p^{x}(1-p)^{6-x}
$$

Evaluating each mass separately:

$$
P(X=0)=\binom{6}{0}(0.8)^{0}(0.2)^{6}
$$

$$
\binom{6}{0}=1
$$

$$
(0.2)^{6}=6.4\times 10^{-5}
$$

$$
P(X=0)=6.4\times 10^{-5}
$$

$$
P(X=1)=\binom{6}{1}(0.8)^{1}(0.2)^{5}
$$

$$
\binom{6}{1}=\dfrac{6!}{1!(6-1)!}
$$

$$
\binom{6}{1}=6
$$

$$
(0.8)^{1}=0.8
$$

$$
(0.2)^{5}=3.2\times 10^{-4}
$$

$$
6\times 0.8=4.8
$$

$$
4.8\times 3.2\times 10^{-4}=0.001536
$$

$$
P(X=1)\approx 0.0015
$$

$$
P(X=2)=\binom{6}{2}(0.8)^{2}(0.2)^{4}
$$

$$
\binom{6}{2}=\dfrac{6!}{2!(6-2)!}
$$

$$
\dfrac{6!}{2!(4)!}=\dfrac{6\cdot 5}{1\cdot 2}
$$

$$
6\cdot 5=30
$$

$$
\dfrac{30}{2}=15
$$

$$
\binom{6}{2}=15
$$

$$
(0.8)^{2}=0.64
$$

$$
(0.2)^{4}=0.0016
$$

$$
15\times 0.64=9.6
$$

$$
9.6\times 0.0016=0.01536
$$

$$
P(X=2)\approx 0.0154
$$

$$
P(X=3)=\binom{6}{3}(0.8)^{3}(0.2)^{3}
$$

$$
\binom{6}{3}=\dfrac{6!}{3!(6-3)!}
$$

$$
\dfrac{6!}{3!(3)!}=\dfrac{6\cdot 5\cdot 4}{1\cdot 2\cdot 3}
$$

$$
6\cdot 5=30
$$

$$
30\cdot 4=120
$$

$$
1\cdot 2\cdot 3=6
$$

$$
\dfrac{120}{6}=20
$$

$$
\binom{6}{3}=20
$$

$$
(0.8)^{3}=0.512
$$

$$
(0.2)^{3}=0.008
$$

$$
20\times 0.512=10.24
$$

$$
10.24\times 0.008=0.08192
$$

$$
P(X=3)\approx 0.0819
$$

$$
P(X=4)=\binom{6}{4}(0.8)^{4}(0.2)^{2}
$$

$$
\binom{6}{4}=\dfrac{6!}{4!(6-4)!}
$$

$$
\dfrac{6!}{4!(2)!}=\dfrac{6\cdot 5}{1\cdot 2}
$$

$$
\dfrac{30}{2}=15
$$

$$
\binom{6}{4}=15
$$

$$
(0.8)^{4}=0.4096
$$

$$
(0.2)^{2}=0.04
$$

$$
15\times 0.4096=6.144
$$

$$
6.144\times 0.04=0.24576
$$

$$
P(X=4)\approx 0.2458
$$

Adding the mutually exclusive pieces:

$$
6.4e{-}5+0.0015=0.0016
$$

$$
0.0016+0.0154=0.0170
$$

$$
0.0170+0.0819=0.0989
$$

$$
0.0989+0.2458=0.3447
$$

$$
P(X\le 4)\approx 0.3446
$$

Compared with $0.5$, we obtain

$$
0.3446\le 0.5
$$

The claim's inequality does not hold.

So the statement is False.""",
]

print("all tasks staged:", len(NEW))

# ============================================================
# Apply + validate + write back
# ============================================================

def split_econ_frac_result(text: str) -> str:
    """One arithmetic move per $$: split frac...=result / frac...approx into two displays."""
    pat = re.compile(
        r"\$\$\s*(\\frac\{[^{}]+\}\{[^{}]+\})\s*(=|\\approx)\s*([^\n$]+?)\s*\$\$",
        re.M,
    )

    def repl(m):
        frac, op, rhs = m.group(1), m.group(2), m.group(3).strip()
        return f"$$\n{frac}\n$$\n\n$$\n{op} {rhs}\n$$"

    return pat.sub(repl, text)


before_lengths = {"math": [], "economics": []}
after_lengths = {"math": [], "economics": []}

applied = set()
for subject in ("economics", "math"):
    for task in data[subject]:
        cid = task["case_id"]
        old_expls = task["tactical_explanations"]
        for e in old_expls:
            before_lengths[subject].append(len(e))
        if cid in NEW:
            new_expls = list(NEW[cid])
            if subject == "economics":
                new_expls = [split_econ_frac_result(e) for e in new_expls]
            assert len(new_expls) == 5, f"{cid} does not have 5 explanations ({len(new_expls)})"
            assert len(new_expls) == len(task["answer_key"]) == len(task["statements"]), cid
            headers = ["A", "B", "C", "D", "E"]
            for i, (expl, verdict) in enumerate(zip(new_expls, task["answer_key"])):
                want = "True" if verdict else "False"
                header_ok = expl.startswith(f"**{headers[i]}.** \u2192 {want}")
                assert header_ok, f"{cid} letter {headers[i]}: header/verdict mismatch -> {expl[:60]!r}"
                assert expl.count("$$") % 2 == 0, f"{cid} letter {headers[i]}: unbalanced $$"
                assert expl.count("$") % 2 == 0, f"{cid} letter {headers[i]}: unbalanced $"
            task["tactical_explanations"] = new_expls
            applied.add(cid)
            for e in new_expls:
                after_lengths[subject].append(len(e))
        else:
            for e in old_expls:
                after_lengths[subject].append(len(e))

missing = set(NEW.keys()) - applied
assert not missing, f"case_ids in NEW never matched a task: {missing}"

all_case_ids = {t["case_id"] for t in data["economics"]} | {t["case_id"] for t in data["math"]}
unpatched = all_case_ids - applied
print("case_ids not patched (should be empty for full rewrite):", unpatched)

with io.open(PATH, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
    f.write("\n")

def stats(lst):
    if not lst:
        return (0, 0, 0)
    return (sum(lst) / len(lst), min(lst), max(lst))

for subject in ("math", "economics"):
    b = stats(before_lengths[subject])
    a = stats(after_lengths[subject])
    print(f"\n{subject}: n_before={len(before_lengths[subject])} n_after={len(after_lengths[subject])}")
    print(f"  before avg/min/max chars: {b[0]:.0f} / {b[1]} / {b[2]}")
    print(f"  after  avg/min/max chars: {a[0]:.0f} / {a[1]} / {a[2]}")

print("\nDone. File written:", PATH)
