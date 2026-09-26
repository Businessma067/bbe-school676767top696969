# 0 CASE 6.5.034 chapter=None ak=[True, False, True, True, False]
## title
Turnover and Liquidity Extract 34
## context
Consider the following extract (in € thousands) for a business whose identity is not disclosed.

| Item (€ thousands) | Amount |
| --- | ---: |
| Revenue | 1,019 |
| Cost of sales | 674 |
| Total assets at the beginning of the year | 823 |
| Total assets at the end of the year | 1028 |
| Inventory at the beginning of the year | 169 |
| Inventory at the end of the year | 179 |
| Trade receivables at the beginning of the year | 135 |
| Trade receivables at the end of the year | 107 |

Evaluate the following economic assertions:

## statement A
Inventory turnover is below 6.87 times per year.
## CURRENT explanation A (len=325)
**A.** → True

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

So the statement is True.
## statement B
Asset turnover is above 1.48.
## CURRENT explanation B (len=334)
**B.** → False

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

So the statement is False.
## statement C
With inventory turnover of about 3.9 times a year on this extract, a higher figure would generally mean stock is sold and replaced more quickly, tying up less money in inventory.
## CURRENT explanation C (len=339)
**C.** → True

Inventory turnover on this extract is cost of sales over average inventory, which is about 3.9 times a year (674 ÷ 174 ≈ 3.87). A higher turnover figure means stock is sold and replaced more often within the year, so less cash sits tied up in inventory — exactly the economic reading claimed here.

So the statement is True.
## statement D
Revenue exceeds €999 thousand.
## CURRENT explanation D (len=473)
**D.** → True

Revenue is read straight from the extract line. All figures on this extract are stated in EUR thousands, so the comparison stays inside that unit.

From the extract, the revenue line:

The claim threshold is EUR 999 thousand:

$$
1019 - 999 = 20
$$

Inequality test required by the claim (“exceeds”):

$$
1019 > 999
$$

Revenue of EUR 1019 thousand exceeds the EUR 999 thousand threshold by EUR 20 thousand, so the statement holds.

So the statement is True.
## statement E
Trade receivables turnover exceeds 10.4 times per year.
## CURRENT explanation E (len=342)
**E.** → False

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

So the statement is False.

========

# 1 CASE 6.4.010 chapter=None ak=[True, True, True, True, True]
## title
Asset Composition Chart 10
## context
Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 464 |
| Machinery | 277 |
| Office equipment | 43 |
| Patents, trademarks and licences | 41 |
| Inventory | 156 |
| Trade receivables | 81 |
| Cash and cash equivalents | 119 |
| Total assets | **1181** |
| **EQUITY** | |
| Share capital | 153 |
| Retained earnings | 325 |
| Total equity | **478** |
| **LIABILITIES** | |
| Long-term bank loan | 401 |
| Bonds payable | 79 |
| Trade payables | 197 |
| Bank overdraft | 26 |
| Total liabilities | **703** |
| Total equity and liabilities | **1181** |

Evaluate the following economic assertions:

## statement A
Financial accounting information such as the balance sheet and the income statement is also of interest to decision makers outside the business, for example tax authorities or banks.
## CURRENT explanation A (len=337)
**A.** → True

Financial accounting reports such as the balance sheet and the income statement are prepared for users beyond day-to-day managers. Tax authorities assess taxable profit from those statements; banks use them when deciding whether to lend. The claim correctly names those external decision makers.

So the statement is True.
## statement B
Working capital of €133 thousand is positive on this balance sheet.
## CURRENT explanation B (len=242)
**B.** → True

The overview already recovers current assets $CA = 356$ and current liabilities $CL = 223$.

$$
356 - 223 = 133
$$

$$
133 > 0
$$

Working capital is EUR 133 thousand and positive, matching the claim.

So the statement is True.
## statement C
The debt ratio exceeds 56%.
## CURRENT explanation C (len=398)
**C.** → True

The debt ratio is total liabilities divided by total assets.

Total liabilities from the extract:

Total assets from the extract:

Name and apply the debt-ratio formula:

$$
\frac{703}{1181}
$$

$$
703 \div 1181 \approx 0.5953
$$

Convert to a percentage:

$$
59.53\% \approx 59.5\%
$$

$$
59.5\% > 56\%
$$

The debt ratio is about 59.5%, which clears 56%.

So the statement is True.
## statement D
Trade receivables make up less than 48.5% of current assets.
## CURRENT explanation D (len=322)
**D.** → True

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

So the statement is True.
## statement E
Cash and cash equivalents make up more than 23.1% of current assets.
## CURRENT explanation E (len=380)
**E.** → True

The cash share of current assets is cash and cash equivalents divided by current assets. CA was built above as 356.

Cash and cash equivalents:

Current assets:

$$
\frac{119}{356}
$$

$$
119 \div 356 \approx 0.3343
$$

$$
33.43\% \approx 33.4\%
$$

$$
33.4\% > 23.1\%
$$

Cash is about 33.4% of current assets, above the 23.1% threshold.

So the statement is True.

========

# 2 CASE 6.2.039 chapter=None ak=[True, False, True, True, False]
## title
Liquidity From the Balance Sheet 39
## context
Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 307 |
| Machinery | 153 |
| Office equipment | 58 |
| Patents, trademarks and licences | 66 |
| Inventory | 119 |
| Trade receivables | 60 |
| Cash and cash equivalents | 97 |
| Total assets | **860** |
| **EQUITY** | |
| Share capital | 236 |
| Retained earnings | 49 |
| Total equity | **285** |
| **LIABILITIES** | |
| Long-term bank loan | 388 |
| Bonds payable | 55 |
| Trade payables | 74 |
| Bank overdraft | 58 |
| Total liabilities | **575** |
| Total equity and liabilities | **860** |

Evaluate the following economic assertions:

## statement A
Under the straight-line method, the depreciable cost is spread evenly over the expected useful life, giving the same depreciation charge each year.
## CURRENT explanation A (len=250)
**A.** → True

Under the straight-line method, depreciable cost is spread evenly over the expected useful life, so each year carries the same depreciation charge. That is precisely the allocation rule restated in the claim.

So the statement is True.
## statement B
After excluding inventory, the remaining current assets still cover current liabilities more than 1.35 times over.
## CURRENT explanation B (len=306)
**B.** → False

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

So the statement is False.
## statement C
The current ratio exceeds 1.28.
## CURRENT explanation C (len=451)
**C.** → True

The current ratio is current assets divided by current liabilities. Rebuild CA and CL from the extract lines.

Inventory:

Trade receivables:

Cash and cash equivalents:

$$
119 + 60 = 179\qquad 179 + 97 = 276
$$

Trade payables:

Bank overdraft:

$$
74 + 58 = 132
$$

$$
\frac{276}{132}
$$

$$
276 \div 132 \approx 2.0909
$$

$$
2.091 > 1.28
$$

The current ratio is about 2.09, which clears the 1.28 hurdle.

So the statement is True.
## statement D
Working capital of €144 thousand is positive on this balance sheet.
## CURRENT explanation D (len=404)
**D.** → True

Working capital is current assets minus current liabilities. Rebuild CA and CL from the extract.

Inventory:

Trade receivables:

Cash and cash equivalents:

$$
119 + 60 = 179\qquad 179 + 97 = 276
$$

Trade payables:

Bank overdraft:

$$
74 + 58 = 132\qquad 276 - 132 = 144
$$

$$
144 > 0
$$

Working capital is EUR 144 thousand and positive, matching the claim.

So the statement is True.
## statement E
Buildings make up more than 47.1% of total assets.
## CURRENT explanation E (len=400)
**E.** → False

Buildings as a share of total assets is the buildings line divided by total assets.

Buildings:

Total assets:

$$
\frac{307}{860}
$$

$$
307 \div 860 \approx 0.3570
$$

$$
35.70\% \approx 35.7\%
$$

The claim says buildings make up more than 47.1% of total assets:

$$
35.7\% \ngtr 47.1\%
$$

Buildings are about 35.7% of total assets, so the claim fails.

So the statement is False.

========

# 3 CASE 6.3.027 chapter=None ak=[False, True, True, True, False]
## title
Comparative Balance Sheet Analysis 27
## context
Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 489 | 505 |
| Machinery | 142 | 147 |
| Office equipment | 74 | 77 |
| Patents, trademarks and licences | 79 | 79 |
| Inventory | 81 | 85 |
| Trade receivables | 180 | 193 |
| Cash and cash equivalents | 57 | 58 |
| Total assets | **1102** | **1144** |
| **EQUITY** | | |
| Share capital | 158 | 158 |
| Retained earnings | 384 | 374 |
| Total equity | **542** | **532** |
| **LIABILITIES** | | |
| Long-term bank loan | 360 | 388 |
| Bonds payable | 49 | 53 |
| Trade payables | 93 | 104 |
| Bank overdraft | 58 | 67 |
| Total liabilities | **560** | **612** |
| Total equity and liabilities | **1102** | **1144** |

Evaluate the following economic assertions:

## statement A
Total equity grew by more than 21.7% between Year 1 and Year 2.
## CURRENT explanation A (len=298)
**A.** → False

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

So the statement is False.
## statement B
Current assets such as inventory, trade receivables and cash normally have higher liquidity and are not expected to be used longer than a year.
## CURRENT explanation B (len=273)
**B.** → True

Current assets such as inventory, trade receivables and cash are the short-term, more liquid stock of resources. They are not expected to be held for use beyond one year. That is exactly the classification rule stated in the claim.

So the statement is True.
## statement C
Non-current liabilities amount to less than 91.7% of total equity in Year 2.
## CURRENT explanation C (len=442)
**C.** → True

Non-current liabilities as a share of total equity in Year 2 is NCL ÷ equity. Year-2 NCL is the long-term bank loan plus bonds payable.

Long-term bank loan Year 2:

Bonds payable Year 2:

$$
388 + 53 = 441
$$

Total equity Year 2:

$$
\frac{441}{532}
$$

$$
441 \div 532 \approx 0.8290
$$

$$
82.90\% \approx 82.9\%
$$

$$
82.9\% < 91.7\%
$$

Year-2 NCL/equity is about 82.9%, below the 91.7% claim.

So the statement is True.
## statement D
Current liabilities are covered by current assets less than 2.02 times over in Year 2.
## CURRENT explanation D (len=488)
**D.** → True

Current-liability cover in Year 2 is the current ratio CA ÷ CL.

Inventory Year 2:

Trade receivables Year 2:

Cash Year 2:

$$
85 + 193 = 278\qquad 278 + 58 = 336
$$

Trade payables Year 2:

Bank overdraft Year 2:

$$
104 + 67 = 171
$$

$$
\frac{336}{171}
$$

$$
336 \div 171 \approx 1.9649
$$

The claim says cover is less than 2.02 times:

$$
1.965 < 2.02
$$

Current assets cover current liabilities about 1.97 times, which is less than 2.02.

So the statement is True.
## statement E
Total assets grew by more than 12.2% between Year 1 and Year 2.
## CURRENT explanation E (len=452)
**E.** → False

Percentage growth for total assets is (Year 2 − Year 1) ÷ Year 1.

Total assets Year 1:

Total assets Year 2:

Change:

$$
1144 - 1102 = 42
$$

$$
\text{growth} = \frac{Y_2 - Y_1}{Y_1}
$$

$$
\frac{42}{1102}
$$

$$
42 \div 1102 \approx 0.03811
$$

$$
3.811\% \approx 3.8\%
$$

The claim says assets grew by more than 12.2%:

$$
3.8\% \ngtr 12.2\%
$$

Total assets grew by only about 3.8%, so the claim fails.

So the statement is False.

========

# 4 CASE 6.1.020 chapter=None ak=[True, False, False, False, False]
## title
Balance Sheet Structure Review 20
## context
Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 492 |
| Machinery | 256 |
| Office equipment | 63 |
| Patents, trademarks and licences | 63 |
| Inventory | 136 |
| Trade receivables | 162 |
| Cash and cash equivalents | 34 |
| Total assets | **1206** |
| **EQUITY** | |
| Share capital | 296 |
| Retained earnings | 422 |
| Total equity | **718** |
| **LIABILITIES** | |
| Long-term bank loan | 207 |
| Bonds payable | 83 |
| Trade payables | 150 |
| Bank overdraft | 48 |
| Total liabilities | **488** |
| Total equity and liabilities | **1206** |

Evaluate the following economic assertions:

## statement A
Non-current assets normally have a useful life of more than one year and are intended to be used in the business for longer than one year.
## CURRENT explanation A (len=224)
**A.** → True

Non-current assets are held for use in the business beyond one year and normally have a useful life longer than one year. That is the standard classification rule the claim restates.

So the statement is True.
## statement B
The current ratio is below 0.93.
## CURRENT explanation B (len=462)
**B.** → False

The current ratio is current assets divided by current liabilities.

Inventory:

Trade receivables:

Cash and cash equivalents:

$$
136 + 162 = 298\qquad 298 + 34 = 332
$$

Trade payables:

Bank overdraft:

$$
150 + 48 = 198
$$

$$
\frac{332}{198}
$$

$$
332 \div 198 \approx 1.6768
$$

The claim says the current ratio is below 0.93:

$$
1.677 \nless 0.93
$$

The current ratio is about 1.68, so it is not below 0.93.

So the statement is False.
## statement C
After excluding inventory, the remaining current assets still cover current liabilities more than 1.24 times over.
## CURRENT explanation C (len=306)
**C.** → False

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

So the statement is False.
## statement D
The equity ratio is below 33.7%.
## CURRENT explanation D (len=471)
**D.** → False

The equity ratio is total equity divided by total assets. Pull both totals from the extract.

Total equity (share capital + retained earnings):

Total assets:

Name and apply the equity-ratio formula:

$$
\frac{718}{1206}
$$

$$
718 \div 1206 \approx 0.5954
$$

$$
59.54\% \approx 59.5\%
$$

The claim says the equity ratio is below 33.7%:

$$
59.5\% \nless 33.7\%
$$

The equity ratio is about 59.5%, so it is not below 33.7%.

So the statement is False.
## statement E
The debt ratio exceeds 47.8%.
## CURRENT explanation E (len=438)
**E.** → False

The debt ratio is total liabilities divided by total assets. Pull both totals from the extract.

Total liabilities:

Total assets:

Name and apply the debt-ratio formula:

$$
\frac{488}{1206}
$$

$$
488 \div 1206 \approx 0.4046
$$

$$
40.46\% \approx 40.5\%
$$

The claim says the debt ratio exceeds 47.8%:

$$
40.5\% \ngtr 47.8\%
$$

The debt ratio is about 40.5%, so it does not exceed 47.8%.

So the statement is False.

========

# 5 CASE 6.5.068 chapter=None ak=[False, True, False, True, True]
## title
Balance Sheet Structure Review 68
## context
Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 307 |
| Machinery | 225 |
| Office equipment | 39 |
| Patents, trademarks and licences | 67 |
| Inventory | 215 |
| Trade receivables | 156 |
| Cash and cash equivalents | 80 |
| Total assets | **1089** |
| **EQUITY** | |
| Share capital | 146 |
| Retained earnings | 301 |
| Total equity | **447** |
| **LIABILITIES** | |
| Long-term bank loan | 286 |
| Bonds payable | 89 |
| Trade payables | 228 |
| Bank overdraft | 39 |
| Total liabilities | **642** |
| Total equity and liabilities | **1089** |

Evaluate the following economic assertions:

## statement A
The current ratio is below 0.78.
## CURRENT explanation A (len=516)
**A.** → False

The current ratio is current assets divided by current liabilities. Build CA and CL from the extract lines one at a time.

Inventory:

Trade receivables:

Cash and cash equivalents:

$$
215 + 156 = 371\qquad 371 + 80 = 451
$$

Trade payables:

Bank overdraft:

$$
228 + 39 = 267
$$

$$
\frac{451}{267}
$$

$$
451 \div 267 \approx 1.6891
$$

The claim says the current ratio is below 0.78:

$$
1.689 \nless 0.78
$$

The current ratio is about 1.69, so it is not below 0.78.

So the statement is False.
## statement B
The current ratio exceeds 1.53.
## CURRENT explanation B (len=442)
**B.** → True

The current ratio is current assets divided by current liabilities. Rebuild CA and CL from the extract lines.

Inventory:

Trade receivables:

Cash and cash equivalents:

$$
215 + 156 = 371\qquad 371 + 80 = 451
$$

Trade payables:

Bank overdraft:

$$
228 + 39 = 267
$$

$$
\frac{451}{267}
$$

$$
451 \div 267 \approx 1.6891
$$

$$
1.689 > 1.53
$$

The current ratio is about 1.69, which clears 1.53.

So the statement is True.
## statement C
After excluding inventory, the remaining current assets still cover current liabilities more than 1.25 times over.
## CURRENT explanation C (len=306)
**C.** → False

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

So the statement is False.
## statement D
Working capital of €184 thousand is positive on this balance sheet.
## CURRENT explanation D (len=467)
**D.** → True

Working capital is current assets minus current liabilities. Rebuild CA and CL from the extract so the EUR 184 thousand figure is transparent.

Inventory:

Trade receivables:

Cash and cash equivalents:

$$
215 + 156 = 371\qquad 371 + 80 = 451
$$

Trade payables:

Bank overdraft:

$$
228 + 39 = 267\qquad 451 - 267 = 184
$$

$$
184 > 0
$$

Working capital is EUR 184 thousand and positive, matching the claim amount exactly.

So the statement is True.
## statement E
Trade receivables make up less than 55% of current assets.
## CURRENT explanation E (len=350)
**E.** → True

The receivables share of current assets is trade receivables divided by current assets.

Trade receivables:

Current assets:

$$
\frac{156}{451}
$$

$$
156 \div 451 \approx 0.3460
$$

$$
34.60\% \approx 34.6\%
$$

$$
34.6\% < 55\%
$$

Trade receivables are about 34.6% of current assets, below the 55% claim.

So the statement is True.

========

# 6 CASE 6.5.074 chapter=None ak=[True, False, False, False, True]
## title
Balance Sheet Structure Review 74
## context
Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 305 |
| Machinery | 176 |
| Office equipment | 58 |
| Patents, trademarks and licences | 39 |
| Inventory | 169 |
| Trade receivables | 103 |
| Cash and cash equivalents | 83 |
| Total assets | **933** |
| **EQUITY** | |
| Share capital | 298 |
| Retained earnings | -8 |
| Total equity | **290** |
| **LIABILITIES** | |
| Long-term bank loan | 396 |
| Bonds payable | 70 |
| Trade payables | 143 |
| Bank overdraft | 34 |
| Total liabilities | **643** |
| Total equity and liabilities | **933** |

Evaluate the following economic assertions:

## statement A
The current ratio exceeds 1.8.
## CURRENT explanation A (len=443)
**A.** → True

The current ratio is current assets divided by current liabilities. Build CA and CL from the extract.

Inventory:

Trade receivables:

Cash and cash equivalents:

$$
169 + 103 = 272\qquad 272 + 83 = 355
$$

Trade payables:

Bank overdraft:

$$
143 + 34 = 177
$$

$$
\frac{355}{177}
$$

$$
355 \div 177 \approx 2.0056
$$

$$
2.006 > 1.8
$$

The current ratio is about 2.01, which clears the 1.8 hurdle.

So the statement is True.
## statement B
After excluding inventory, the remaining current assets still cover current liabilities more than 1.14 times over.
## CURRENT explanation B (len=306)
**B.** → False

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

So the statement is False.
## statement C
Buildings make up more than 43.4% of total assets.
## CURRENT explanation C (len=400)
**C.** → False

Buildings as a share of total assets is the buildings line divided by total assets.

Buildings:

Total assets:

$$
\frac{305}{933}
$$

$$
305 \div 933 \approx 0.3269
$$

$$
32.69\% \approx 32.7\%
$$

The claim says buildings make up more than 43.4% of total assets:

$$
32.7\% \ngtr 43.4\%
$$

Buildings are about 32.7% of total assets, so the claim fails.

So the statement is False.
## statement D
The long-term bank loan of €396 thousand should be classified within equity rather than liabilities.
## CURRENT explanation D (len=325)
**D.** → False

A long-term bank loan is borrowed funds owed to lenders. It belongs with non-current liabilities, alongside bonds payable, not with equity (share capital and retained earnings). Classifying the EUR 396 thousand loan inside equity would reverse the financing structure of the sheet.

So the statement is False.
## statement E
Working capital of €178 thousand is positive on this balance sheet.
## CURRENT explanation E (len=412)
**E.** → True

Working capital is current assets minus current liabilities. Rebuild CA and CL from the extract lines.

Inventory:

Trade receivables:

Cash and cash equivalents:

$$
169 + 103 = 272\qquad 272 + 83 = 355
$$

Trade payables:

Bank overdraft:

$$
143 + 34 = 177\qquad 355 - 177 = 178
$$

$$
178 > 0
$$

Working capital is EUR 178 thousand and positive, matching the claim.

So the statement is True.

========

# 7 CASE 6.5.060 chapter=None ak=[False, False, True, False, False]
## title
Liquidity From the Balance Sheet 60
## context
Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 474 |
| Machinery | 153 |
| Office equipment | 30 |
| Patents, trademarks and licences | 26 |
| Inventory | 97 |
| Trade receivables | 79 |
| Cash and cash equivalents | 104 |
| Total assets | **963** |
| **EQUITY** | |
| Share capital | 119 |
| Retained earnings | 191 |
| Total equity | **310** |
| **LIABILITIES** | |
| Long-term bank loan | 424 |
| Bonds payable | 51 |
| Trade payables | 114 |
| Bank overdraft | 64 |
| Total liabilities | **653** |
| Total equity and liabilities | **963** |

Evaluate the following economic assertions:

## statement A
After excluding inventory, the remaining current assets still cover current liabilities more than 1.22 times over.
## CURRENT explanation A (len=304)
**A.** → False

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

So the statement is False.
## statement B
The equity ratio is below 28.8%.
## CURRENT explanation B (len=477)
**B.** → False

The equity ratio is total equity divided by total assets. Pull both closing totals from the extract.

Total equity (share capital + retained earnings):

Total assets:

Name and apply the equity-ratio formula:

$$
\frac{310}{963}
$$

$$
310 \div 963 \approx 0.3219
$$

$$
32.19\% \approx 32.2\%
$$

The claim says the equity ratio is below 28.8%:

$$
32.2\% \nless 28.8\%
$$

The equity ratio is about 32.2%, so it is not below 28.8%.

So the statement is False.
## statement C
Working capital of €102 thousand is positive on this balance sheet.
## CURRENT explanation C (len=405)
**C.** → True

Working capital is current assets minus current liabilities. Rebuild CA and CL from the extract.

Inventory:

Trade receivables:

Cash and cash equivalents:

$$
97 + 79 = 176\qquad 176 + 104 = 280
$$

Trade payables:

Bank overdraft:

$$
114 + 64 = 178\qquad 280 - 178 = 102
$$

$$
102 > 0
$$

Working capital is EUR 102 thousand and positive, matching the claim.

So the statement is True.
## statement D
Buildings make up more than 55.3% of total assets.
## CURRENT explanation D (len=400)
**D.** → False

Buildings as a share of total assets is the buildings line divided by total assets.

Buildings:

Total assets:

$$
\frac{474}{963}
$$

$$
474 \div 963 \approx 0.4922
$$

$$
49.22\% \approx 49.2\%
$$

The claim says buildings make up more than 55.3% of total assets:

$$
49.2\% \ngtr 55.3\%
$$

Buildings are about 49.2% of total assets, so the claim fails.

So the statement is False.
## statement E
Inventory make up more than 46% of current assets.
## CURRENT explanation E (len=416)
**E.** → False

Inventory as a share of current assets is inventory divided by current assets. CA = 280 from above.

Inventory:

Current assets:

$$
\frac{97}{280}
$$

$$
97 \div 280 \approx 0.3464
$$

$$
34.64\% \approx 34.6\%
$$

The claim says inventory makes up more than 46% of current assets:

$$
34.6\% \ngtr 46\%
$$

Inventory is about 34.6% of current assets, so the claim fails.

So the statement is False.

========

# 8 CASE 6.5.077 chapter=None ak=[True, True, True, True, True]
## title
Balance Sheet Structure Review 77
## context
Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 502 |
| Machinery | 124 |
| Office equipment | 43 |
| Patents, trademarks and licences | 29 |
| Inventory | 231 |
| Trade receivables | 180 |
| Cash and cash equivalents | 105 |
| Total assets | **1214** |
| **EQUITY** | |
| Share capital | 110 |
| Retained earnings | 474 |
| Total equity | **584** |
| **LIABILITIES** | |
| Long-term bank loan | 346 |
| Bonds payable | 47 |
| Trade payables | 153 |
| Bank overdraft | 84 |
| Total liabilities | **630** |
| Total equity and liabilities | **1214** |

Evaluate the following economic assertions:

## statement A
Working capital of €279 thousand is positive on this balance sheet.
## CURRENT explanation A (len=411)
**A.** → True

Working capital is current assets minus current liabilities. Build CA and CL from the extract lines.

Inventory:

Trade receivables:

Cash and cash equivalents:

$$
231 + 180 = 411\qquad 411 + 105 = 516
$$

Trade payables:

Bank overdraft:

$$
153 + 84 = 237\qquad 516 - 237 = 279
$$

$$
279 > 0
$$

Working capital is EUR 279 thousand and positive, matching the claim.

So the statement is True.
## statement B
After excluding inventory, the remaining current assets still cover current liabilities more than 0.9 times over.
## CURRENT explanation B (len=516)
**B.** → True

After excluding inventory, remaining current assets over current liabilities is the quick ratio. Rebuild CA and CL from the extract.

Inventory:

Trade receivables:

Cash and cash equivalents:

$$
231 + 180 = 411\qquad 411 + 105 = 516
$$

Trade payables:

Bank overdraft:

$$
153 + 84 = 237
$$

Strip inventory:

$$
516 - 231 = 285
$$

$$
\frac{285}{237}
$$

$$
285 \div 237 \approx 1.2025
$$

$$
1.203 > 0.9
$$

Quick cover is about 1.20 times, which clears the 0.9 hurdle.

So the statement is True.
## statement C
Buildings make up more than 38.9% of total assets.
## CURRENT explanation C (len=401)
**C.** → True

Buildings as a share of total assets is the buildings line divided by total assets. Pull both figures from the extract.

Buildings:

Total assets:

Name the composition share:

$$
\frac{502}{1214}
$$

$$
502 \div 1214 \approx 0.4135
$$

$$
41.35\% \approx 41.4\%
$$

$$
41.4\% > 38.9\%
$$

Buildings are about 41.4% of total assets, above the 38.9% threshold.

So the statement is True.
## statement D
Inventory make up more than 42.9% of current assets.
## CURRENT explanation D (len=449)
**D.** → True

Inventory as a share of current assets is inventory divided by current assets. First rebuild CA from the extract lines.

Inventory:

Trade receivables:

Cash and cash equivalents:

$$
231 + 180 = 411\qquad 411 + 105 = 516
$$

$$
\frac{231}{516}
$$

$$
231 \div 516 \approx 0.4477
$$

$$
44.77\% \approx 44.8\%
$$

$$
44.8\% > 42.9\%
$$

Inventory is about 44.8% of current assets, above the 42.9% threshold.

So the statement is True.
## statement E
The combined total of equity and non-current liabilities exceeds non-current assets by more than 26.8%.
## CURRENT explanation E (len=414)
**E.** → True

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

So the statement is True.

========

# 9 CASE 6.5.029 chapter=None ak=[True, False, False, True, False]
## title
Balance Sheet Structure Review 29
## context
Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 485 |
| Machinery | 256 |
| Office equipment | 66 |
| Patents, trademarks and licences | 77 |
| Inventory | 273 |
| Trade receivables | 145 |
| Cash and cash equivalents | 45 |
| Total assets | **1347** |
| **EQUITY** | |
| Share capital | 198 |
| Retained earnings | 684 |
| Total equity | **882** |
| **LIABILITIES** | |
| Long-term bank loan | 288 |
| Bonds payable | 49 |
| Trade payables | 80 |
| Bank overdraft | 48 |
| Total liabilities | **465** |
| Total equity and liabilities | **1347** |

Evaluate the following economic assertions:

## statement A
The current ratio exceeds 1.55.
## CURRENT explanation A (len=444)
**A.** → True

The current ratio is current assets divided by current liabilities. Build CA and CL from the extract.

Inventory:

Trade receivables:

Cash and cash equivalents:

$$
273 + 145 = 418\qquad 418 + 45 = 463
$$

Trade payables:

Bank overdraft:

$$
80 + 48 = 128
$$

$$
\frac{463}{128}
$$

$$
463 \div 128 \approx 3.6172
$$

$$
3.617 > 1.55
$$

The current ratio is about 3.62, which clears the 1.55 hurdle.

So the statement is True.
## statement B
The equity ratio is below 28.7%.
## CURRENT explanation B (len=479)
**B.** → False

The equity ratio is total equity divided by total assets. Pull both closing totals from the extract.

Total equity (share capital + retained earnings):

Total assets:

Name and apply the equity-ratio formula:

$$
\frac{882}{1347}
$$

$$
882 \div 1347 \approx 0.6548
$$

$$
65.48\% \approx 65.5\%
$$

The claim says the equity ratio is below 28.7%:

$$
65.5\% \nless 28.7\%
$$

The equity ratio is about 65.5%, so it is not below 28.7%.

So the statement is False.
## statement C
The debt ratio exceeds 76.4%.
## CURRENT explanation C (len=446)
**C.** → False

The debt ratio is total liabilities divided by total assets. Pull both closing totals from the extract.

Total liabilities:

Total assets:

Name and apply the debt-ratio formula:

$$
\frac{465}{1347}
$$

$$
465 \div 1347 \approx 0.3452
$$

$$
34.52\% \approx 34.5\%
$$

The claim says the debt ratio exceeds 76.4%:

$$
34.5\% \ngtr 76.4\%
$$

The debt ratio is about 34.5%, so it does not exceed 76.4%.

So the statement is False.
## statement D
Working capital of €335 thousand is positive on this balance sheet.
## CURRENT explanation D (len=411)
**D.** → True

Working capital is current assets minus current liabilities. Rebuild CA and CL from the extract lines.

Inventory:

Trade receivables:

Cash and cash equivalents:

$$
273 + 145 = 418\qquad 418 + 45 = 463
$$

Trade payables:

Bank overdraft:

$$
80 + 48 = 128\qquad 463 - 128 = 335
$$

$$
335 > 0
$$

Working capital is EUR 335 thousand and positive, matching the claim.

So the statement is True.
## statement E
Buildings make up more than 50.7% of total assets.
## CURRENT explanation E (len=402)
**E.** → False

Buildings as a share of total assets is the buildings line divided by total assets.

Buildings:

Total assets:

$$
\frac{485}{1347}
$$

$$
485 \div 1347 \approx 0.3601
$$

$$
36.01\% \approx 36.0\%
$$

The claim says buildings make up more than 50.7% of total assets:

$$
36.0\% \ngtr 50.7\%
$$

Buildings are about 36.0% of total assets, so the claim fails.

So the statement is False.

========
