-- Chapter 6 pilot: 10 Full Course table-based cases (6.1–6.5).
DELETE FROM public.economics_cases WHERE case_id LIKE 'CASE 6.%' AND tier = 'full' AND subsection IN ('6.1','6.2','6.3','6.4','6.5');

INSERT INTO public.economics_cases
  (subsection, case_id, title, context, statements, answer_key, tactical_explanations, difficulty_level, sort_order, tier)
VALUES
( '6.1', 'CASE 6.1.01', 'Comparative Balance Sheets Over Two Years', 'Consider the following comparative balance sheet extracts (in € thousands) for a business whose identity is not disclosed.

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Land and buildings | 450 | 506 |
| Machinery | 160 | 205 |
| Inventory | 95 | 118 |
| Trade receivables | 72 | 90 |
| Cash and cash equivalents | 53 | 41 |
| **Total assets** | **830** | **960** |
| Share capital | 250 | 250 |
| Retained earnings | 170 | 230 |
| Long-term bank loan | 280 | 316 |
| Trade payables | 95 | 120 |
| Short-term loan | 35 | 44 |

Evaluate the following economic assertions:', ARRAY['Total assets grew by more than €110 thousand between the two years.', 'Equity increased, but the equity ratio declined.', 'Cash and cash equivalents fell even though every other asset category on the extract increased.', 'Working capital increased by exactly €15 thousand.', 'The long-term bank loan grew at a higher percentage rate than trade payables.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Total assets rose from 830 to 960, an increase of 130, which is more than 110.', 'TRUE — Equity rose from 420 to 480. The equity ratio fell from 50.60% (420/830) to 50.00% (480/960), so the ratio declined despite higher equity.', 'TRUE — Cash fell from 53 to 41. Land and buildings, machinery, inventory, and trade receivables all increased.', 'FALSE — Working capital was 90 in Year 1 (220 − 130) and 85 in Year 2 (249 − 164). The change is -5, not +15.', 'FALSE — The long-term bank loan grew by about 12.9%, while trade payables grew by about 26.3%. Trade payables grew faster, not the loan.'], '5/5', 1, 'full' ),
( '6.1', 'CASE 6.1.02', 'Balance Sheet Structure and Equity Claims', 'Consider the following balance sheet extract (in € thousands) for a business whose identity is not disclosed.

| Assets (€ thousands) | Amount | Liabilities and equity (€ thousands) | Amount |
| --- | ---: | --- | ---: |
| Buildings | 410 | Share capital | 180 |
| Machinery | 265 | Retained earnings | 165 |
| Patents | 35 | Long-term bank loan | 400 |
| Inventory | 128 | Trade payables | 180 |
| Trade receivables | 94 | Short-term loan | 65 |
| Cash and cash equivalents | 58 | | |
| **Total assets** | **990** | **Total liabilities and equity** | **990** |

Evaluate the following economic assertions:', ARRAY['Equity is less than the recorded value of the buildings.', 'The debt ratio exceeds 65%.', 'If retained earnings had been €20 thousand lower, the equity ratio would have fallen below 32%.', 'Non-current liabilities are more than six times the size of the short-term loan.', 'Non-current assets on this extract exceed €700 thousand.'], ARRAY[true, true, false, true, true], ARRAY['TRUE — Equity = share capital + retained earnings = 345. Buildings are recorded at 410, so equity (345) is less than buildings.', 'TRUE — Total liabilities = 645. Debt ratio = 645/990 ≈ 65.15%, which sits just above 65%.', 'FALSE — Equity would become 325. Equity ratio = 325/990 ≈ 32.83%, which is still above 32%, not below it.', 'TRUE — Long-term bank loan 400 divided by short-term loan 65 is about 6.15, which is more than six.', 'TRUE — Buildings + machinery + patents = 710, which exceeds 700.'], '5/5', 2, 'full' ),
( '6.2', 'CASE 6.2.01', 'Cash Flow Statement Extract', 'Consider the following cash flow statement extract (in € thousands) for a business whose identity is not disclosed.

| Item | Amount (€ thousands) |
| --- | ---: |
| Cash flow from operating activities | 84 |
| Cash flow from investing activities | (132) |
| Cash flow from financing activities | 55 |
| Net change in cash and cash equivalents | 7 |
| Cash and cash equivalents at beginning of year | 18 |
| Cash and cash equivalents at end of year | 25 |

Evaluate the following economic assertions:', ARRAY['The net change in cash and cash equivalents is €9 thousand.', 'Cash flow from investing activities, in absolute terms, is more than double the financing inflow.', 'Ending cash and cash equivalents equal €30 thousand.', 'If operating activities had instead generated €100 thousand, the net change in cash would have been positive.', 'Beginning cash and cash equivalents exceed ending cash and cash equivalents.'], ARRAY[false, true, false, true, false], ARRAY['FALSE — Operating 84 plus investing (−132) plus financing 55 equals a net change of 7, not 9.', 'TRUE — Absolute investing outflow is 132. Double the financing inflow of 55 is 110. Because 132 is greater than 110, investing is more than double the financing inflow.', 'FALSE — Beginning cash 18 plus net change 7 equals ending cash 25, not 30.', 'TRUE — With operating cash flow of 100, net change would be 100 − 132 + 55 = 23, which is positive.', 'FALSE — Beginning cash (18) is lower than ending cash (25), so beginning does not exceed ending.'], '5/5', 1, 'full' ),
( '6.2', 'CASE 6.2.02', 'Income Statement With Missing Totals', 'Consider the following income statement extract (in € thousands) for a business whose identity is not disclosed. Gross profit and the operating result must be calculated from the figures given.

| Item | Amount (€ thousands) |
| --- | ---: |
| Revenue | 2,140 |
| Cost of sales | 1,380 |
| Gross profit | ? |
| Distribution costs | 145 |
| General and administrative costs | 210 |
| Depreciation and amortisation | 95 |
| Operating result | ? |

Evaluate the following economic assertions:', ARRAY['Operating result before depreciation and amortisation is more than 30% higher than the operating result.', 'The gross profit margin, rounded to the nearest whole percent, is 36%.', 'Distribution costs are more than double depreciation and amortisation.', 'If general and administrative costs had been €40 thousand lower, the operating result would exceed €360 thousand.', 'The operating margin is below 14%.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Gross profit = 2,140 − 1,380 = 760. Operating result = 760 − 145 − 210 − 95 = 310. Operating result before depreciation and amortisation = 310 + 95 = 405. 405/310 ≈ 1.306, which is more than 30% higher.', 'TRUE — Gross profit margin = 760/2,140 ≈ 35.51%. Rounded to the nearest whole percent this is 36%.', 'FALSE — 145 / 95 ≈ 1.53, which is less than double. Double would require at least 190.', 'FALSE — Lowering administrative costs by 40 would raise the operating result from 310 to 350, which is still below 360.', 'FALSE — Operating margin = 310/2,140 ≈ 14.49%, which is above 14%, not below it.'], '5/5', 2, 'full' ),
( '6.3', 'CASE 6.3.01', 'Comparative Income Statements Across Two Years', 'Consider the following comparative income statement extracts (in € thousands) for a business whose identity is not disclosed.

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Revenue | 1,250 | 1,400 |
| Cost of sales | 800 | 868 |
| Gross profit | 450 | 532 |
| Distribution costs | 95 | 110 |
| General and administrative costs | 140 | 155 |
| Depreciation and amortisation | 60 | 70 |
| Operating result | 155 | 197 |

Evaluate the following economic assertions:', ARRAY['Revenue grew by more than 11%.', 'The gross profit margin improved by more than 3 percentage points.', 'In Year 2, operating result before depreciation and amortisation is more than 30% above the Year 2 operating result.', 'If Year 2 general and administrative costs had been €20 thousand lower, Year 2 operating result would exceed €220 thousand.', 'The operating margin rose by more than 1.5 percentage points.'], ARRAY[true, false, true, false, true], ARRAY['TRUE — Revenue growth = (1,400 − 1,250) / 1,250 = 12.0%, which exceeds 11%.', 'FALSE — Gross margin Year 1 = 450/1,250 = 36.00%. Year 2 = 532/1,400 ≈ 38.00%. The improvement is about 2.00 percentage points, which is not more than 3.', 'TRUE — Year 2 operating result before depreciation and amortisation = 197 + 70 = 267. Relative to operating result 197 this is about 35.5% higher, which is more than 30%.', 'FALSE — Cutting administrative costs by 20 would lift Year 2 operating result from 197 to 217, which is still below 220.', 'TRUE — Operating margin Year 1 = 155/1,250 = 12.40%. Year 2 = 197/1,400 ≈ 14.07%. The rise is about 1.67 percentage points, more than 1.5.'], '5/5', 1, 'full' ),
( '6.3', 'CASE 6.3.02', 'Reading Returns From Balance Sheet And Operating Result', 'Consider the following balance sheet extract and operating result figure (in € thousands) for a business whose identity is not disclosed.

| Assets (€ thousands) | Amount | Liabilities and equity (€ thousands) | Amount |
| --- | ---: | --- | ---: |
| Property | 620 | Share capital | 300 |
| Machinery | 380 | Retained earnings | 260 |
| Patents | 55 | Long-term bank loan | 520 |
| Inventory | 90 | Trade payables | 210 |
| Trade receivables | 140 | Short-term loan | 60 |
| Cash and cash equivalents | 65 | | |
| **Total assets** | **1,350** | **Total liabilities and equity** | **1,350** |

| Income statement extract | Amount (€ thousands) |
| --- | ---: |
| Operating result | 189 |

Evaluate the following economic assertions:', ARRAY['Return on capital employed exceeds 18%.', 'Return on equity is more than double return on capital employed.', 'The debt ratio is below 58%.', 'Capital employed is less than twice the combined value of trade payables and the short-term loan.', 'If the operating result had been €21 thousand higher, return on capital employed would exceed 19%.'], ARRAY[false, false, false, false, true], ARRAY['FALSE — Capital employed = equity 560 + long-term bank loan 520 = 1080. Return on capital employed = 189/1080 ≈ 17.50%, which does not exceed 18%.', 'FALSE — Return on equity = 189/560 ≈ 33.75%. Dividing by return on capital employed ≈ 1.93, which falls just short of double.', 'FALSE — Total liabilities = 790. Debt ratio = 790/1,350 ≈ 58.52%, which is above 58%, not below it.', 'FALSE — Trade payables plus short-term loan = 270; twice that is 540. Capital employed (1080) is well above that amount, not below it.', 'TRUE — A higher operating result of 189 + 21 = 210 gives return on capital employed = 210/1080 ≈ 19.44%, which exceeds 19%.'], '5/5', 2, 'full' ),
( '6.4', 'CASE 6.4.01', 'Straight-Line Depreciation Schedule', 'An asset is purchased for €96,000 with an expected useful life of 8 years and zero residual value. It is depreciated on a straight-line basis for a business whose identity is not disclosed.

| End of year | Accumulated depreciation (€) | Book value (€) |
| ---: | ---: | ---: |
| 3 | 36,000 | 60,000 |
| 5 | 60,000 | 36,000 |
| 7 | 84,000 | 12,000 |

*Note: annual depreciation = 96,000 ÷ 8 = 12,000. The Year 3 book value in the table above is 96,000 − 36,000 = 60,000.*

Evaluate the following economic assertions:', ARRAY['The book value at the end of Year 5 is exactly triple the book value at the end of Year 7.', 'Accumulated depreciation after Year 3 equals the book value remaining after Year 5.', 'If the useful life had instead been 6 years (cost unchanged), annual depreciation would be exactly one-third higher than under the 8-year plan.', 'The asset retains more than 25% of its original cost at the end of Year 5.', 'Depreciation expense reduces reported profit but does not itself change the cash and cash equivalents balance.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Book value Year 5 = 96,000 − 5 × 12,000 = 36000. Book value Year 7 = 12000. 36000 ÷ 12000 = 3 exactly.', 'TRUE — Accumulated depreciation after Year 3 = 3 × 12,000 = 36000. This equals the Year 5 book value (36000). That equality is a feature of these numbers, not a general rule.', 'TRUE — With a 6-year life, annual depreciation = 96,000 ÷ 6 = 16,000. Compared with 12,000 this is an increase of 4,000, and 4,000 ÷ 12,000 = one-third.', 'TRUE — Year 5 book value 36000 divided by original cost 96,000 = 37.5%, which is above 25%.', 'TRUE — Depreciation is a non-cash expense: it lowers profit on the income statement but does not by itself move cash into or out of the business.'], '5/5', 1, 'full' ),
( '6.4', 'CASE 6.4.02', 'Financial Accounting Versus Management Accounting Uses', 'The following overview summarises typical uses of accounting information for a business whose identity is not disclosed.

| Report or record | Primary users | Typical purpose |
| --- | --- | --- |
| Published balance sheet | External investors and creditors | Assess financial position and security |
| Published income statement | External investors and creditors | Assess profitability over a period |
| Detailed cost report by product line | Internal managers | Decide pricing and cost control |
| Cash budget for next quarter | Internal managers | Plan short-term liquidity |
| Annual financial statements filed under law | Authorities and the public | Meet legal reporting duties |

Evaluate the following economic assertions:', ARRAY['Detailed cost reports by product line belong primarily to management accounting because they support internal decision-making.', 'A published balance sheet is intended first and foremost as an internal weekly tool for shop-floor supervisors.', 'Cash budgets for the next quarter are management accounting instruments used to plan liquidity.', 'Financial accounting focuses on standardised reports that can be shown to external parties such as investors and creditors.', 'Management accounting information is useful only after it has been published in the annual financial statements.'], ARRAY[true, false, true, true, false], ARRAY['TRUE — Cost reports broken down by product line are prepared for managers inside the firm to control costs and pricing; that is management accounting.', 'FALSE — A published balance sheet is a financial accounting statement aimed at external users, not a weekly shop-floor control sheet.', 'TRUE — Forward-looking cash budgets are internal planning tools and form part of management accounting.', 'TRUE — Financial accounting produces formal, comparable statements for outsiders such as investors and creditors.', 'FALSE — Management accounting information is prepared for internal use and often never appears in the published annual statements.'], '4/5', 2, 'full' ),
( '6.5', 'CASE 6.5.01', 'Share Price Chart And Return Measures', 'Consider share-price and performance figures for a listed business whose identity is not disclosed.

**Closing share prices (€)**

```
€
26 |             ●
24 |         ●       ●
22 |     ●
20 | ●
   +------------------
     Jan Feb Mar Apr May
```

| Month | Closing price (€) | Shares outstanding |
| --- | ---: | ---: |
| January | 20 | 500,000 |
| February | 22 | 500,000 |
| March | 24 | 500,000 |
| April | 26 | 500,000 |
| May | 24 | 500,000 |

| Annual figure (€ thousands) | Amount |
| --- | ---: |
| Operating result | 210 |
| Equity | 1,200 |
| Capital employed | 1,800 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation in May exceeds €11 million.', 'From January to April the share price rose by more than 25%.', 'Return on capital employed exceeds 11%.', 'Return on equity is higher than return on capital employed.', 'If May’s closing price had stayed at €26 instead of falling to €24, May market capitalisation would equal January’s market capitalisation multiplied by 1.3.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — May market capitalisation = 24 × 500,000 = 12,000,000, which is more than €11 million.', 'TRUE — Price rise from 20 to 26 is (26 − 20) / 20 = 30%, which exceeds 25%.', 'TRUE — Return on capital employed = 210 / 1,800 = 11.67%, which exceeds 11%.', 'TRUE — Return on equity = 210 / 1,200 = 17.5%, which is higher than return on capital employed (11.67%).', 'TRUE — At €26, May market capitalisation = 13,000,000. January market capitalisation = 10,000,000. 13,000,000 ÷ 10,000,000 = 1.3 exactly.'], '5/5', 1, 'full' ),
( '6.5', 'CASE 6.5.02', 'Liquidity Analysis From Current Items', 'Consider the following balance sheet extract of current items (in € thousands) for a business whose identity is not disclosed.

| Item | Amount (€ thousands) |
| --- | ---: |
| Inventory | 310 |
| Trade receivables | 145 |
| Cash and cash equivalents | 42 |
| Trade payables | 250 |
| Short-term loan | 87 |

Evaluate the following economic assertions:', ARRAY['The current ratio is closer to 1.5 than to 1.4.', 'The acid-test ratio is more than half the current ratio.', 'Inventory accounts for less than two-thirds of current assets.', 'Working capital is greater than €150 thousand.', 'If the short-term loan were €40 thousand higher (all else equal), the acid-test ratio would rise.'], ARRAY[true, false, true, true, false], ARRAY['TRUE — Current assets = 497; current liabilities = 337; current ratio ≈ 1.475. Distance to 1.5 is 0.025; distance to 1.4 is 0.075. It is closer to 1.5.', 'FALSE — Acid-test ratio = (497 − 310)/337 ≈ 0.555. Half of the current ratio is about 0.737. Because 0.555 is below that half, the claim is false.', 'TRUE — Inventory share = 310/497 ≈ 62.4%, which is below two-thirds (≈66.7%).', 'TRUE — Working capital = 497 − 337 = 160, which is greater than 150.', 'FALSE — With the short-term loan raised by 40, current liabilities become 377 and the acid-test ratio becomes 0.4960212201591512 ≈ 0.496, which is lower than the original 0.555, so the ratio would fall, not rise.'], '5/5', 2, 'full' )
ON CONFLICT (case_id, tier) DO UPDATE SET
  subsection = EXCLUDED.subsection,
  title = EXCLUDED.title,
  context = EXCLUDED.context,
  statements = EXCLUDED.statements,
  answer_key = EXCLUDED.answer_key,
  tactical_explanations = EXCLUDED.tactical_explanations,
  difficulty_level = EXCLUDED.difficulty_level,
  sort_order = EXCLUDED.sort_order;
