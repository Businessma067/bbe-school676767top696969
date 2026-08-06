-- Chapter 6 pilot: 10 Full Course PDF-style cases with tables + charts (6.1–6.5).
DELETE FROM public.economics_cases WHERE case_id LIKE 'CASE 6.%' AND tier = 'full' AND subsection IN ('6.1','6.2','6.3','6.4','6.5');

INSERT INTO public.economics_cases
  (subsection, case_id, title, context, statements, answer_key, tactical_explanations, difficulty_level, sort_order, tier)
VALUES
( '6.1', 'CASE 6.1.01', 'Two-Year Balance Sheet Growth and Structure', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=370 | Total assets=775
Year 2 | Equity=435 | Total assets=875
[[/CHART]]

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 300 | 340 |
| Machinery | 150 | 170 |
| Office equipment | 45 | 50 |
| Patents, trademarks and licences | 30 | 30 |
| Inventory | 100 | 125 |
| Trade receivables | 90 | 115 |
| Cash and cash equivalents | 60 | 45 |
| Total assets | **775** | **875** |
| **EQUITY** | | |
| Share capital | 150 | 150 |
| Retained earnings | 220 | 285 |
| Total equity | **370** | **435** |
| **LIABILITIES** | | |
| Long-term bank loan | 245 | 275 |
| Bonds payable | 50 | 55 |
| Trade payables | 70 | 75 |
| Bank overdraft | 40 | 35 |
| Total liabilities | **405** | **440** |
| Total equity and liabilities | **775** | **875** |

Evaluate the following economic assertions:', ARRAY['Total equity increased by more than 20% from Year 1 to Year 2.', 'Since share capital remained unchanged, the entire increase in equity between Year 1 and Year 2 came from internal sources rather than from new capital contributed by the owners.', 'Non-current assets as a percentage of total assets decreased from Year 1 to Year 2.', 'Trade payables are classified under non-current liabilities because businesses are normally allowed more than a year to pay their suppliers.', 'Working capital more than doubled between Year 1 and Year 2.'], ARRAY[false, true, true, false, false], ARRAY['FALSE — Equity rose from 370 to 435, an increase of 65. Relative growth is about 17.6%, which is below 20%.', 'TRUE — Share capital stayed at 150 in both years, so the entire equity increase of 65 came from retained earnings (220 → 285), i.e. from internal sources.', 'TRUE — Non-current assets were 525 in Year 1 (67.7% of assets) and 590 in Year 2 (67.4%). The share fell slightly.', 'FALSE — Trade payables normally arise from short-term supplier credit and are classified as a current liability, not a non-current liability.', 'FALSE — Working capital was 140 in Year 1 and 175 in Year 2, an increase of only about 25%, nowhere near doubling.'], '5/5', 1, 'full' ),
( '6.1', 'CASE 6.1.02', 'Comparative Balance Sheet Gearing', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity versus non-current liabilities"]]
Year 1 | Equity=220 | Non-current liabilities=450
Year 2 | Equity=225 | Non-current liabilities=490
[[/CHART]]

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 350 | 380 |
| Machinery | 170 | 185 |
| Patents, trademarks and licences | 80 | 85 |
| Inventory | 100 | 115 |
| Trade receivables | 90 | 105 |
| Cash and cash equivalents | 40 | 40 |
| Total assets | **830** | **910** |
| **EQUITY** | | |
| Share capital | 100 | 100 |
| Retained earnings | 120 | 125 |
| Total equity | **220** | **225** |
| **LIABILITIES** | | |
| Long-term bank loan | 400 | 435 |
| Bonds payable | 50 | 55 |
| Trade payables | 120 | 150 |
| Bank overdraft | 40 | 45 |
| Total liabilities | **610** | **685** |
| Total equity and liabilities | **830** | **910** |

Evaluate the following economic assertions:', ARRAY['The equity ratio improved from Year 1 to Year 2.', 'The debt ratio decreased from Year 1 to Year 2.', 'Given that its non-current liabilities are far greater than its equity in both years, this business would be considered high geared in both Year 1 and Year 2.', 'Non-current assets are fully covered by the sum of equity and non-current liabilities in both years.', 'Total assets grew by more than 12% from Year 1 to Year 2.'], ARRAY[false, false, true, true, false], ARRAY['FALSE — Equity ratio Year 1 ≈ 26.5%; Year 2 ≈ 24.7%. The ratio fell.', 'FALSE — Debt ratio Year 1 ≈ 73.5%; Year 2 ≈ 75.3%. The ratio rose.', 'TRUE — Non-current liabilities (450 then 490) far exceed equity (220 then 225) in both years, so the business is high geared.', 'TRUE — Year 1 non-current assets 600 ≤ equity plus non-current liabilities 670. Year 2: 650 ≤ 715. Covered in both years.', 'FALSE — Total assets grew from 830 to 910, about 9.6%, which is not more than 12%.'], '5/5', 2, 'full' ),
( '6.2', 'CASE 6.2.01', 'Comparative Cash Flow Statement Extract', 'Consider the following cash flow statement extract (in € thousands) for a business whose identity is not disclosed, comparing the current year (Year 2) with the prior year (Year 1).

[[CHART type="bar" title="Operating and investing cash flows"]]
Year 1 | Operating=140 | Investing=-120
Year 2 | Operating=150 | Investing=-250
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Cash flow from operating activities before changes in working capital | 150 | 195 |
| Cash flow from operating activities | 140 | 150 |
| Cash flow from investing activities | (120) | (250) |
| Operating free cash flow | 20 | (100) |
| Free cash flow | 5 | (120) |
| Cash flow from financing activities | 30 | 110 |
| Change in cash and cash equivalents | 35 | (10) |
| Currency effects on cash and cash equivalents | 3 | (6) |
| Cash and cash equivalents at end of the year | 118 | 102 |

Evaluate the following economic assertions:', ARRAY['Cash flow from operating activities increased by more than 10% from Year 1 to Year 2.', 'A negative cash flow from investing activities always means that a business is in financial difficulty.', 'In both years, cash flow from operating activities was lower than cash flow from operating activities before changes in working capital.', 'If a customer settles an outstanding invoice during the year, the resulting cash inflow would be recorded within cash flow from operating activities, since it relates to the core activities of the business.', 'Cash and cash equivalents at the end of the year fell by more than 20% from Year 1 to Year 2.'], ARRAY[false, false, true, true, false], ARRAY['FALSE — Operating cash flow rose from 140 to 150, about 7.1%, which is below 10%.', 'FALSE — A negative investing cash flow usually indicates investment in long-term assets, not financial distress; investing inflows typically come from selling assets.', 'TRUE — Year 1: 140 is below 150; Year 2: 150 is below 195.', 'TRUE — Collecting a trade receivable is a core operating change in a current asset, so the cash inflow sits in operating activities.', 'FALSE — Ending cash fell from 118 to 102, about 13.6%, which is not more than 20%.'], '5/5', 1, 'full' ),
( '6.2', 'CASE 6.2.02', 'Two-Year Statement of Profit and Loss', 'Consider the following two-year statement of profit and loss (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Revenue, gross profit and operating result"]]
Year 1 | Revenue=780 | Gross profit=270 | Operating result=201
Year 2 | Revenue=920 | Gross profit=320 | Operating result=231
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Revenue | 780 | 920 |
| Cost of sales | (510) | (600) |
| Gross profit | 270 | 320 |
| Distribution costs | (42) | (50) |
| General and administrative costs | (30) | (37) |
| Other operating result | 3 | (2) |
| Operating result | 201 | 231 |
| Finance income | 5 | 4 |
| Finance costs | (18) | (23) |
| Finance costs – net | (13) | (19) |
| Profit before tax | 188 | 212 |
| Income taxes | (40) | (54) |
| Profit for the year | 148 | 158 |

Evaluate the following economic assertions:', ARRAY['Gross profit as a percentage of revenue was higher in Year 2 than in Year 1.', 'The operating result more than doubled from Year 1 to Year 2.', 'Income taxes as a percentage of profit before tax were higher in Year 2 than in Year 1.', 'Distribution costs and general and administrative costs are subtracted from revenue before gross profit is calculated.', 'Finance costs – net worsened by more than €10 thousand between Year 1 and Year 2.'], ARRAY[true, false, true, false, false], ARRAY['TRUE — Gross margin Year 1 ≈ 34.6%; Year 2 ≈ 34.8%. The proportion rose slightly.', 'FALSE — Operating result rose from 201 to 231, about 14.9%, far short of doubling.', 'TRUE — Tax / profit before tax Year 1 ≈ 21.3%; Year 2 ≈ 25.5%. The proportion rose.', 'FALSE — Gross profit is revenue minus cost of sales only. Distribution costs, general and administrative costs and other operating result are deducted after gross profit on the way to the operating result.', 'FALSE — Finance costs – net moved from (13) to (19), a worsening of only 6, not more than 10.'], '5/5', 2, 'full' ),
( '6.3', 'CASE 6.3.01', 'Balance Sheet With Income and Cash Flow Extracts', 'Consider the following balance sheet and income statement extracts (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=380
Machinery=180
Patents, trademarks and licences=90
Inventory=150
Trade receivables=120
Cash and cash equivalents=70
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 380 |
| Machinery | 180 |
| Patents, trademarks and licences | 90 |
| Inventory | 150 |
| Trade receivables | 120 |
| Cash and cash equivalents | 70 |
| Total assets | **990** |
| **EQUITY** | |
| Share capital | 260 |
| Retained earnings | 330 |
| Total equity | **590** |
| **LIABILITIES** | |
| Long-term bank loan | 180 |
| Bonds payable | 50 |
| Trade payables | 120 |
| Bank overdraft | 50 |
| Total liabilities | **400** |
| Total equity and liabilities | **990** |

| Income statement item (€ thousands) | Amount |
| --- | ---: |
| Revenue | 1,180 |
| Cost of sales | (760) |
| Gross profit | 420 |
| Operating expenses | (230) |
| Other operating result | 12 |
| Operating result | 202 |

| Cash flow statement extract (€ thousands) | Amount |
| --- | ---: |
| Cash flow from operating activities | 195 |
| Cash flow from investing activities | (240) |
| Cash flow from financing activities | 70 |
| Cash and cash equivalents at the beginning of the year | 60 |

Evaluate the following economic assertions:', ARRAY['Return on equity exceeds 35%.', 'Return on capital employed figures are mainly useful for comparing profitability between similar businesses, or for one business''s performance over time, rather than being meaningful on their own.', 'Working capital equals €150 thousand.', 'The net change in cash and cash equivalents for the year equals €25 thousand.', 'Cash and cash equivalents at the end of the year exceed €90 thousand.'], ARRAY[false, true, false, true, false], ARRAY['FALSE — Using operating result over equity, return on equity ≈ 34.2%, which is below 35%.', 'TRUE — A single return on capital employed figure says little in isolation; it becomes useful when compared with peers or tracked over time.', 'FALSE — Current assets 340 minus current liabilities 170 gives working capital 170, not 150.', 'TRUE — Net change = 195 + (-240) + 70 = 25.', 'FALSE — Beginning cash 60 plus net change 25 equals ending cash 85, which does not exceed 90.'], '5/5', 1, 'full' ),
( '6.3', 'CASE 6.3.02', 'Combined Balance Sheet, Profit and Loss, and Cash Flow', 'Consider the following combined extracts (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=500
Machinery=250
Patents, trademarks and licences=100
Inventory=180
Trade receivables=150
Cash and cash equivalents=100
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 500 |
| Machinery | 250 |
| Patents, trademarks and licences | 100 |
| Inventory | 180 |
| Trade receivables | 150 |
| Cash and cash equivalents | 100 |
| Total assets | **1,280** |
| **EQUITY** | |
| Share capital | 200 |
| Retained earnings | 290 |
| Total equity | **490** |
| **LIABILITIES** | |
| Long-term bank loan | 400 |
| Bonds payable | 70 |
| Trade payables | 230 |
| Bank overdraft | 90 |
| Total liabilities | **790** |
| Total equity and liabilities | **1,280** |

| Statement of profit and loss extract (€ thousands) | Amount |
| --- | ---: |
| Revenue | 1,420 |
| Cost of sales | (930) |
| Gross profit | 490 |
| Operating expenses | (295) |
| Other operating result | 6 |
| Operating result | 201 |
| Finance costs – net | (28) |
| Profit before tax | 173 |
| Income taxes | (42) |
| Profit for the year | 131 |

| Cash flow statement extract (€ thousands) | Amount |
| --- | ---: |
| Cash flow from operating activities | 205 |
| Cash flow from investing activities | (275) |
| Cash flow from financing activities | 45 |
| Cash and cash equivalents at the beginning of the year | 80 |

Evaluate the following economic assertions:', ARRAY['Return on capital employed is above 25%.', 'A positive cash flow from operating activities combined with a negative cash flow from investing activities is typically a sign that a business is generating cash from its core operations while also investing in long-term assets, rather than a sign that it is in trouble.', 'Working capital equals €150 thousand.', 'The net change in cash and cash equivalents for the year is negative, meaning the year-end cash balance is lower than the beginning balance.', 'Income taxes as a percentage of profit before tax are below 20%.'], ARRAY[false, true, false, true, false], ARRAY['FALSE — Capital employed = equity 490 + non-current liabilities 470 = 960. Return on capital employed = 201/960 ≈ 20.9%, below 25%.', 'TRUE — Operating cash generation paired with investing outflows usually means the firm invests in long-term assets while its core business produces cash — often a healthy growth pattern.', 'FALSE — Current assets 430 minus current liabilities 320 equals working capital 110, not 150.', 'TRUE — Net change = 205 + (-275) + 45 = -25, so year-end cash (55) is below the beginning balance.', 'FALSE — Income taxes / profit before tax = 42/173 ≈ 24.3%, which is above 20%.'], '5/5', 2, 'full' ),
( '6.4', 'CASE 6.4.01', 'Straight-Line Depreciation Across Three Assets', 'A business owns the following fixed assets, all depreciated on a straight-line basis.

[[CHART type="bar" title="Annual depreciation by asset"]]
Machinery | Annual depreciation=15000
Delivery truck | Annual depreciation=8000
Computer equipment | Annual depreciation=7000
[[/CHART]]

| Asset details | Amount |
| --- | ---: |
| Asset A – Machinery | €150,000 purchase price, 10-year useful life, no residual value |
| Asset B – Delivery truck | €54,000 purchase price, 6-year useful life, €6,000 residual value |
| Asset C – Computer equipment | €21,000 purchase price, 3-year useful life, no residual value |

Evaluate the following economic assertions:', ARRAY['Combined annual depreciation for all three assets is €30,000.', 'After three years, the book value of the delivery truck is €24,000.', 'After three years, the computer equipment is fully depreciated.', 'After three years, the combined book value of all three assets exceeds €150,000.', 'Recording depreciation is necessary because, without it, the value of these assets shown in the accounts would be inaccurate and overstated.'], ARRAY[true, false, true, false, true], ARRAY['TRUE — Annual charges are 15,000, 8,000 and 7,000, which sum to 30,000.', 'FALSE — After three years the truck''s book value is 54,000 − 24,000 = 30,000, not 24,000.', 'TRUE — After three years accumulated depreciation equals the full purchase price of 21,000, so book value is zero.', 'FALSE — Combined book value after three years is 135,000, which does not exceed 150,000.', 'TRUE — Fixed assets lose value as they are used; without depreciation they would remain at original cost and overstate their worth.'], '5/5', 1, 'full' ),
( '6.4', 'CASE 6.4.02', 'Financial Versus Management Accounting Uses', 'A mid-sized manufacturer whose identity is not disclosed prepares both a published annual report for external users and detailed internal cost reports for plant managers.

[[CHART type="bar" title="Illustrative reporting audiences"]]
External users | Typical report volume=1
Internal managers | Typical report volume=12
[[/CHART]]

Evaluate the following economic assertions:', ARRAY['Financial accounting information in the annual report is aimed primarily at external users such as owners, lenders and tax authorities.', 'Management accounting reports must follow the same legally prescribed formats as the published financial statements.', 'Depreciation appears as an expense in the income statement even though it does not by itself cause a cash payment in the year it is recognised.', 'Internal management reports may be prepared more frequently than once a year and can focus on product costs or department performance.', 'Only financial accounting can ever be used to decide whether to continue or discontinue a product line.'], ARRAY[true, false, true, true, false], ARRAY['TRUE — Financial accounting serves external stakeholders with the published financial statements and related disclosures.', 'FALSE — Management accounting is not bound to the statutory presentation of published financial statements; formats are chosen for internal decision needs.', 'TRUE — Depreciation allocates the cost of a fixed asset over its useful life and does not itself move cash when the charge is recorded.', 'TRUE — Management accounts are often monthly or weekly and can zoom in on products, customers or cost centres.', 'FALSE — Discontinue / continue decisions routinely rely on management accounting cost and contribution analysis, not only on published financial statements.'], '4/5', 2, 'full' ),
( '6.5', 'CASE 6.5.01', 'Retail Balance Sheet Liquidity Analysis', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Store buildings=400
Warehouse=130
Fixtures and fittings=50
Merchandise inventory=250
Trade receivables=65
Cash and cash equivalents=30
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Store buildings | 400 |
| Warehouse | 130 |
| Fixtures and fittings | 50 |
| Merchandise inventory | 250 |
| Trade receivables | 65 |
| Cash and cash equivalents | 30 |
| Total assets | **925** |
| **EQUITY** | |
| Share capital | 140 |
| Retained earnings | 115 |
| Total equity | **255** |
| **LIABILITIES** | |
| Long-term bank loan | 320 |
| Bonds payable | 55 |
| Trade payables | 225 |
| Bank overdraft | 70 |
| Total liabilities | **670** |
| Total equity and liabilities | **925** |

Evaluate the following economic assertions:', ARRAY['The current ratio falls between 1.5 and 2, the range often considered ideal.', 'Working capital equals €50 thousand.', 'Because inventory is not always quickly convertible into cash, the acid-test ratio excludes it from current assets to give a stricter test of a business''s liquidity than the current ratio.', 'The equity ratio is below 25%.', 'If merchandise inventory alone were excluded from current assets, the remaining current assets would still be enough to cover current liabilities more than once.'], ARRAY[false, true, true, false, false], ARRAY['FALSE — Current assets 345 / current liabilities 295 ≈ 1.17, which is below the 1.5–2 range.', 'TRUE — Working capital = 345 − 295 = 50.', 'TRUE — The acid-test ratio removes inventory because it can be harder to turn into cash quickly, giving a stricter liquidity check than the current ratio.', 'FALSE — Equity ratio = 255/925 ≈ 27.6%, which is above 25%.', 'FALSE — Remaining current assets 95 cover current liabilities only about 0.32 times, below 1.'], '5/5', 1, 'full' ),
( '6.5', 'CASE 6.5.02', 'Asset and Inventory Turnover Extract', 'Consider the following extract (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Beginning versus ending balances"]]
Total assets | Beginning=840 | Ending=930
Inventory | Beginning=140 | Ending=170
[[/CHART]]

| Item (€ thousands) | Amount |
| --- | ---: |
| Revenue | 1,080 |
| Cost of sales | 705 |
| Total assets at the beginning of the year | 840 |
| Total assets at the end of the year | 930 |
| Inventory at the beginning of the year | 140 |
| Inventory at the end of the year | 170 |

Evaluate the following economic assertions:', ARRAY['Asset turnover is above 1.5.', 'Inventory turnover is below 5 times per year.', 'Average inventory represents less than 15% of average total assets.', 'A higher inventory turnover figure generally indicates that goods are selling well and are not remaining in stock for a long time, meaning less money is tied up in inventory.', 'The increase in inventory from the beginning to the end of the year represents a rise of more than 25%.'], ARRAY[false, true, false, true, false], ARRAY['FALSE — Average total assets = 885; asset turnover = 1080/885 ≈ 1.22, below 1.5.', 'TRUE — Average inventory = 155; inventory turnover = 705/155 ≈ 4.55, which is below 5.', 'FALSE — Average inventory / average assets ≈ 17.5%, which is not less than 15%.', 'TRUE — High inventory turnover means stock turns over quickly, so less cash is locked in inventory for long periods.', 'FALSE — Inventory rose from 140 to 170, about 21.4%, which is not more than 25%.'], '5/5', 2, 'full' )
ON CONFLICT (case_id, tier) DO UPDATE SET
  subsection = EXCLUDED.subsection,
  title = EXCLUDED.title,
  context = EXCLUDED.context,
  statements = EXCLUDED.statements,
  answer_key = EXCLUDED.answer_key,
  tactical_explanations = EXCLUDED.tactical_explanations,
  difficulty_level = EXCLUDED.difficulty_level,
  sort_order = EXCLUDED.sort_order;
