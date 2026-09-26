# 6 CASE 6.1.005 ak=[True, True, True, False, False] lens=[782, 379, 447, 546, 363]
## context
Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 381 | 403 |
| Machinery | 266 | 298 |
| Office equipment | 59 | 61 |
| Patents, trademarks and licences | 34 | 34 |
| Inventory | 254 | 288 |
| Trade receivables | 84 | 86 |
| Cash and cash equivalents | 103 | 109 |
| Total assets | **1181** | **1279** |
| **EQUITY** | | |
| Share capital | 212 | 212 |
| Retained earnings | 549 | 627 |
| Total equity | **761** | **839** |
| **LIABILITIES** | | |
| Long-term bank loan | 209 | 220 |
| Bonds payable | 58 | 63 |
| Trade payables | 99 | 101 |
| Bank overdraft | 54 | 56 |
| Total liabilities | **420** | **440** |
| Total equity and liabilities | **1181** | **1279** |

Evaluate the following economic assertions:
## statement A
Non-current assets normally have a useful life of more than one year and are intended to be used in the business for longer than one year.
## expl A (len=782)
Non-current assets are held for use beyond one accounting period. Useful life beyond a year plus operating intent define the category. Short-term claims belong with current liabilities; long-dated borrowings stay non-current. Period profit flows to retained earnings; it is not a separate cash-flow line. Customer collections recycle earlier sales through operating cash. Plant bought for cash is an investing outflow, not day-to-day operating spend. Residual value reduces the depreciable base before the annual charge is calculated. The described treatment of the item matches standard reporting here. Settlement timing and intended use matter more than physical shape for the item. Operators and dealers can report the same the item on different lines.

So the statement is True.
## statement B
Non-current liabilities amount to less than 56.8% of total equity in Year 2.
## expl B (len=379)
NCL-to-equity share = non-current liabilities ÷ total equity.

$$
\text{NCL share} = \frac{\text{non-current liabilities}}{\text{total equity}}
$$

$$
\text{NCL} = 220 + 63,\quad \text{NCL} = 283,\quad \text{Equity} = 839
$$

$$
\frac{283}{839} \approx 0.3373 \approx 33.7\%
$$

$$
33.7\% < 56.8\%
$$

Year-2 NCL/equity is 33.7%, below the 56.8% claim.

So the statement is True.
## statement C
The combined total of equity and non-current liabilities exceeds non-current assets by more than 7.3% in Year 1.
## expl C (len=447)
Long-term financing surplus = (equity + non-current liabilities) ÷ non-current assets − 1.

$$
\text{Surplus} = \frac{\text{equity} + \text{NCL}}{\text{NCA}} - 1
$$

$$
\text{Equity} + \text{NCL} = 761 + 267 = 1{,}028
$$

$$
\text{NCA} = 740
$$

$$
\frac{1{,}028}{740} \approx 1.3892
$$

$$
\frac{1{,}028}{740} - 1 \approx 0.3892 \approx 38.9\%
$$

$$
38.9\% > 7.3\%
$$

Year-2 NCL/equity is 38.9%, above the 7.3% claim.

So the statement is True.
## statement D
Total equity grew by more than 24.5% between Year 1 and Year 2.
## expl D (len=546)
Percentage growth for Total equity is (Year 2 − Year 1) ÷ Year 1.

$$
\text{growth} = \frac{Y_2 - Y_1}{Y_1}
$$

$$
Y_1 = 761, Y_2 = 839
$$

$$
Y_2 - Y_1 = 839 - 761 = 78
$$

$$
\frac{78}{761} \approx 0.1025 \approx 10.2\%
$$

$$
10.2\% \le 24.5\%
$$

Total equity changed by 10.2%, at or below the 24.5% threshold claimed. Total equity runs 761 → 839 across the two years. Percentage change ≈ 10.2%, while the claim wants growth above 24.5%. 10.2% misses that hurdle. Year-on-year growth is (Year 2 − Year 1) ÷ Year 1.

So the statement is False.
## statement E
Total assets grew by more than 10% between Year 1 and Year 2.
## expl E (len=363)
Percentage growth for Total assets is (Year 2 − Year 1) ÷ Year 1.

$$
\text{growth} = \frac{Y_2 - Y_1}{Y_1}
$$

$$
Y_1 = 1{,}181, Y_2 = 1{,}279
$$

$$
Y_2 - Y_1 = 1{,}279 - 1{,}181 = 98
$$

$$
\frac{98}{1{,}181} \approx 0.0830 \approx 8.3\%
$$

$$
8.3\% \le 10\%
$$

Total assets changed by 8.3%, at or below the 10% threshold claimed.

So the statement is False.

====

# 7 CASE 6.3.037 ak=[False, True, True, True, False] lens=[789, 381, 420, 584, 369]
## context
Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 471 | 504 |
| Machinery | 255 | 304 |
| Office equipment | 80 | 90 |
| Patents, trademarks and licences | 64 | 64 |
| Inventory | 229 | 239 |
| Trade receivables | 114 | 122 |
| Cash and cash equivalents | 36 | 40 |
| Total assets | **1249** | **1363** |
| **EQUITY** | | |
| Share capital | 131 | 131 |
| Retained earnings | 765 | 829 |
| Total equity | **896** | **960** |
| **LIABILITIES** | | |
| Long-term bank loan | 206 | 230 |
| Bonds payable | 42 | 48 |
| Trade payables | 64 | 76 |
| Bank overdraft | 41 | 49 |
| Total liabilities | **353** | **403** |
| Total equity and liabilities | **1249** | **1363** |

Evaluate the following economic assertions:
## statement A
Total equity grew by more than 16.5% between Year 1 and Year 2.
## expl A (len=789)
Percentage growth for Total equity is (Year 2 − Year 1) ÷ Year 1.

$$
\text{growth} = \frac{Y_2 - Y_1}{Y_1}
$$

$$
Y_1 = 896, Y_2 = 960
$$

$$
Y_2 - Y_1 = 960 - 896 = 64
$$

$$
\frac{64}{896} \approx 0.0714 \approx 7.1\%
$$

$$
7.1\% \le 16.5\%
$$

Total equity changed by 7.1%, at or below the 16.5% threshold claimed. Total equity runs 896 → 960 across the two years. Percentage change ≈ 7.1%, while the claim wants growth above 16.5%. 7.1% misses that hurdle. Year-on-year growth is (Year 2 − Year 1) ÷ Year 1. Always read the extract’s own line labels before comparing the threshold. Balance-sheet lines are read from the reporter’s purpose, not from generic labels. Short-term claims belong with current liabilities; long-dated borrowings stay non-current.

So the statement is False.
## statement B
Non-current liabilities amount to less than 105.9% of total equity in Year 2.
## expl B (len=381)
NCL-to-equity share = non-current liabilities ÷ total equity.

$$
\text{NCL share} = \frac{\text{non-current liabilities}}{\text{total equity}}
$$

$$
\text{NCL} = 230 + 48,\quad \text{NCL} = 278,\quad \text{Equity} = 960
$$

$$
\frac{278}{960} \approx 0.2896 \approx 29.0\%
$$

$$
29.0\% < 105.9\%
$$

Year-2 NCL/equity is 29.0%, below the 105.9% claim.

So the statement is True.
## statement C
Non-current assets make up more than 60.3% of total assets in Year 2.
## expl C (len=420)
From the extract, Non-current assets = 962 and total assets in Year 2 = 1,363.

$$
\text{Share} = \frac{\text{Non-current assets}}{\text{total assets in Year 2}}
$$

$$
\text{Share} = \frac{962}{1{,}363}
$$

$$
\text{Share} = 70.6\%
$$

Non-current assets / total assets in Year 2 ≈ 962 ÷ 1,363 = 70.6%. More than 60.3% is true here. Composition shares are plain part ÷ whole from the extract.

So the statement is True.
## statement D
Trade payables of €76 thousand in Year 2 are correctly classified as a current liability, since suppliers are normally expected to be paid within one year.
## expl D (len=584)
Obligations due within a year sit among current liabilities. Trade payables to suppliers normally meet that timing test. The euro size does not override settlement timing. Period profit flows to retained earnings; it is not a separate cash-flow line. Customer collections recycle earlier sales through operating cash. Plant bought for cash is an investing outflow, not day-to-day operating spend. Residual value reduces the depreciable base before the annual charge is calculated. Year 1 and Year 2 columns give the pair of totals needed for the percentage.

So the statement is True.
## statement E
Total assets grew by more than 22.8% between Year 1 and Year 2.
## expl E (len=369)
Percentage growth for Total assets is (Year 2 − Year 1) ÷ Year 1.

$$
\text{growth} = \frac{Y_2 - Y_1}{Y_1}
$$

$$
Y_1 = 1{,}249, Y_2 = 1{,}363
$$

$$
Y_2 - Y_1 = 1{,}363 - 1{,}249 = 114
$$

$$
\frac{114}{1{,}249} \approx 0.0913 \approx 9.1\%
$$

$$
9.1\% \le 22.8\%
$$

Total assets changed by 9.1%, at or below the 22.8% threshold claimed.

So the statement is False.

====

# 8 CASE 6.2.044 ak=[True, True, True, True, True] lens=[376, 606, 437, 391, 619]
## context
A business depreciates the following fixed assets on a straight-line basis. Identity is not disclosed.

| Asset details | Amount |
| --- | ---: |
| Asset A – Machinery | €122,000 purchase price, 11-year useful life, no residual value |
| Asset B – Delivery truck | €48,000 purchase price, 6-year useful life, €7,000 residual value |
| Asset C – Computer equipment | €21,000 purchase price, 3-year useful life, no residual value |

Evaluate the following economic assertions:
## statement A
The balance sheet shows assets, liabilities and equity at a point in time, while the income statement summarises revenues, costs and expenses over a period.
## expl A (len=376)
An income-statement line is a flow across the period, not a balance-sheet stock. With that split the claim is fine. How the item is held and for how long decides the balance-sheet line. Settlement timing and intended use matter more than physical shape for the item. Balance-sheet lines are read from the reporter’s purpose, not from generic labels.

So the statement is True.
## statement B
After three years, the delivery truck's carrying value is €27,500.
## expl B (len=606)
Carrying value after three years subtracts three annual charges from cost.

$$
48{,}000 - 7{,}000 = 41{,}000
$$

$$
\frac{41{,}000}{6} \approx 6{,}833
$$

$$
BV_{3} = 48{,}000 - 3 \times 6{,}833 = 27{,}500
$$

Carrying value ≈ 48,000 − 3 × 6,833 = 27,500. Claimed €27,500 is right. Depreciation spreads depreciable cost over useful life. It is normally non-cash; land is not depreciated like buildings. Against that rule the claim is right. The described treatment of the item matches standard reporting here. How the item is held and for how long decides the balance-sheet line.

So the statement is True.
## statement C
After three years, the computer equipment, originally costing €21,000, is fully written down to nil.
## expl C (len=437)
With nil residual, the asset is fully written down once elapsed years reach useful life.

$$
\text{Cost} = EUR 21{,}000, \quad \text{Life} = 3\text{ years}, \quad \text{Residual} = EUR 0
$$

Computer: cost €21,000, life 3y, residual €0. After three years it is at nil. Read the claim against the chapter rule: After three years, the computer equipment, originally costing €21,000, is fully written down to nil.

So the statement is True.
## statement D
After three years, the combined carrying value of all three assets exceeds €101,344.
## expl D (len=391)
Sum each asset's carrying value after three years (floored at residual once fully depreciated).

$$
\text{Asset A - Machinery}\ BV_{3} = 88{,}727
$$

$$
\text{Asset B - Delivery truck}\ BV_{3} = 27{,}500
$$

$$
\text{Asset C - Computer equipment}\ BV_{3} = 0
$$

$$
\text{Combined BV} \approx EUR 116{,}227
$$

$$
Combined carrying value \approx  EUR 116{,}227.
$$

So the statement is True.
## statement E
Without recording depreciation on the €122,000 machinery, non-current assets on the balance sheet would be overstated.
## expl E (len=619)
Depreciation spreads depreciable cost over useful life. It is normally non-cash; land is not depreciated like buildings. Against that rule the claim is right. Land is usually kept at cost without an annual write-down. Depreciation matches past spending on the asset, not a fresh cash bill. The described treatment of the item matches standard reporting here. How the item is held and for how long decides the balance-sheet line. Settlement timing and intended use matter more than physical shape for the item. Balance-sheet lines are read from the reporter’s purpose, not from generic labels.

So the statement is True.

====

# 9 CASE 6.MOCK.RIGHTS ak=[True, False, True, False, True] lens=[171, 232, 426, 163, 336]
## context
NordGlass AG is listed on the Vienna Stock Exchange. Before a planned capital increase the company has 5.0 million shares outstanding. Earnings for the last financial year were €12.0 million, and the board paid a cash dividend of €0.96 per share. Over the same year the consumer-price index rose by 5.0%.

The board now announces a rights issue: existing shareholders may buy 1 new share for every 4 shares they already hold, at a subscription price of €18.00. Assume earnings stay at €12.0 million after the issue.

[[CHART type="line" title="NordGlass AG closing share price (€)"]]
Jan | Price=20.00
Feb | Price=20.80
Mar | Price=21.40
Apr | Price=21.10
May | Price=22.00
Jun | Price=22.60
Jul | Price=23.20
Aug | Price=22.90
Sep | Price=23.50
Oct | Price=23.80
Nov | Price=24.20
Dec | Price=24.00
[[/CHART]]

| Key figure | Value |
| --- | ---: |
| Closing share price (Dec, cum-rights) | €24.00 |
| Shares outstanding (pre-issue) | 5,000,000 |
| Annual earnings | €12,000,000 |
| Cash dividend per share | €0.96 |
| Rights terms | 1 new for 4 old @ €18.00 |
| CPI inflation over the year | 5.0% |

Evaluate the following economic assertions:
## statement A
At the December cum-rights price, NordGlass’s dividend yield exceeds 3.5%.
## expl A (len=171)
Dividend yield compares the cash dividend to the current share price:

$$
\text{Dividend yield}=\dfrac{0.96}{24.00}=0.04=4\%
$$

$$
4\%>3.5\%
$$

So the statement is True.
## statement B
The theoretical ex-rights price (TERP) after the announced 1-for-4 issue at €18 is less than €22.50.
## expl B (len=232)
With a 1-for-4 rights issue the theoretical ex-rights price pools four cum-rights shares and one new share:

$$
\mathrm{TERP}=\dfrac{4\cdot 24.00+18.00}{5}=\dfrac{114}{5}=22.80
$$

$$
22.80\nless 22.50
$$

So the statement is False.
## statement C
If earnings remain €12 million after the issue, earnings per share fall by more than 15% relative to the pre-issue EPS.
## expl C (len=426)
Pre-issue EPS and post-issue EPS (earnings unchanged, shares rise by $5/4$):

$$
\mathrm{EPS}_{\text{pre}}=\dfrac{12{,}000{,}000}{5{,}000{,}000}=2.40
$$

$$
\text{New shares}=\dfrac{5{,}000{,}000}{4}=1{,}250{,}000,\qquad
\text{Shares after}=6{,}250{,}000
$$

$$
\mathrm{EPS}_{\text{post}}=\dfrac{12{,}000{,}000}{6{,}250{,}000}=1.92
$$

$$
\dfrac{2.40-1.92}{2.40}=\dfrac{0.48}{2.40}=0.20=20\%>15\%
$$

So the statement is True.
## statement D
The payout ratio (dividend per share divided by pre-issue EPS) is greater than 45%.
## expl D (len=163)
Payout uses the dividend against pre-issue earnings per share:

$$
\text{Payout}=\dfrac{0.96}{2.40}=0.40=40\%
$$

$$
40\%\ngtr  45\%
$$

So the statement is False.
## statement E
An investor who bought the share in January at €20 and sold at the December close earned a real (inflation-adjusted) return of more than 12%.
## expl E (len=336)
Nominal share return from January to December:

$$
\dfrac{24.00}{20.00}-1=0.20=20\%
$$

Inflation was $5\%$, so the real return is

$$
\dfrac{1.20}{1.05}-1\approx 0.1429=14.29\%
$$

$$
14.29\%>12\%
$$

(Equivalently $20\%-5\%=15\%$ is only a rough additive approximation; the exact ratio still clears $12\%$.)

So the statement is True.

====
