-- Chapter 6 subtopics 6.1–6.5: proportional Full Course bank (~625; text+table interleaved).
DELETE FROM public.economics_cases WHERE subsection IN ('6.1','6.2','6.3','6.4','6.5') AND tier = 'full' AND case_id LIKE 'CASE 6.%';

INSERT INTO public.economics_cases
  (subsection, case_id, title, context, statements, answer_key, tactical_explanations, difficulty_level, sort_order, tier)
VALUES
( '6.1', 'CASE 6.1.001', 'The Balance Sheet Equation', 'Analyze how the balance sheet equation requires total assets to equal the sum of total liabilities and total equity. Evaluate the following economic assertions:', ARRAY['A pallet loader used by an operating business is classified as inventory because inventory can include any physical equipment a business owns.', 'A pallet loader held by a dealer for resale to customers is classified as a non-current asset because the dealer is a business rather than a household.', 'A pallet loader kept in service by an operating business for more than one year is classified as a non-current tangible asset.', 'The same pallet loader must always be classified identically on every balance sheet regardless of how it is held.', 'The same pallet loader may be a non-current asset for one business and inventory for another, depending on whether it is used or held for sale.'], ARRAY[false, false, true, false, true], ARRAY['FALSE — Long-term operational use makes the pallet loader a non-current tangible asset, not inventory.', 'FALSE — Resale intent, not the dealer''s status as a business, places the pallet loader in inventory rather than among non-current assets.', 'TRUE — Continued operational use beyond one year makes the pallet loader a non-current tangible asset.', 'FALSE — Classification of the pallet loader depends on whether it is used or held for resale, so identical items can differ across balance sheets.', 'TRUE — Intended use versus resale intent, not physical form, decides whether the pallet loader is non-current or current.'], '5/5', 1, 'full' ),
( '6.1', 'CASE 6.1.002', 'Assets Equal Liabilities Plus Equity', 'Review how owner''s equity is derived as the residual claim remaining once liabilities are deducted from assets. Evaluate the following economic assertions:', ARRAY['Classifying a pallet loader as a non-current asset depends mainly on its purchase price rather than on management''s intended use.', 'Classifying a pallet loader as a non-current asset depends on management''s intention to use it in operations rather than to sell it quickly.', 'A pallet loader acquired for resale still counts among non-current assets as long as it remains unsold for several months.', 'A pallet loader used daily in a business''s own operations should be recorded as inventory because it wears out over time.', 'Once a dealer sells a pallet loader from its stock, the buyer must continue to record it as inventory.'], ARRAY[false, true, false, false, false], ARRAY['FALSE — Intended use, not purchase price, drives the non-current classification of the pallet loader.', 'TRUE — An intention to use the pallet loader over the long term is the deciding factor for non-current classification.', 'FALSE — Resale intent keeps the pallet loader in inventory as a current asset regardless of how long it stays unsold.', 'FALSE — Continued operational use makes the pallet loader a non-current asset; inventory is reserved for goods held for resale.', 'FALSE — A buyer intending to use the pallet loader in operations records it as a non-current asset, not inventory, after purchase.'], '5/5', 2, 'full' ),
( '6.1', 'CASE 6.1.003', 'Owner''s Equity as a Residual Claim', 'Consider a coffee roastery that owns its roasting drum for daily production while purchasing green coffee beans on credit from an overseas supplier. Evaluate the following economic assertions:', ARRAY['When a pallet loader is acquired to be resold rather than used, it belongs among current assets as inventory.', 'A pallet loader bought by a business to support its own daily operations is a tangible fixed asset because it delivers benefit across several accounting periods.', 'A pallet loader that a dealer displays for sale is not a fixed asset of that dealer.', 'An industrial dishwasher kept in service by an operating business for more than one year is classified as a non-current tangible asset.', 'An industrial dishwasher held by a dealer for resale to customers is classified as inventory, a current asset, rather than a non-current asset.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Resale intent places the pallet loader in inventory, a current-asset category.', 'TRUE — Multi-period operational benefit qualifies the pallet loader as a tangible fixed asset.', 'TRUE — Stock awaiting sale remains inventory, not a fixed asset, for the dealer holding it.', 'TRUE — Continued operational use beyond one year makes the industrial dishwasher a non-current tangible asset.', 'TRUE — Held for resale rather than use, the industrial dishwasher counts as inventory within current assets.'], '2/5', 3, 'full' ),
( '6.1', 'CASE 6.1.004', 'Non-Current Versus Current Assets', 'Review why non-current assets are expected to deliver benefit to a business for more than one year. Evaluate the following economic assertions:', ARRAY['The same industrial dishwasher may be a non-current asset for one business and inventory for another, depending on whether it is used or held for sale.', 'An industrial dishwasher used by an operating business is classified as inventory because inventory can include any physical equipment a business owns.', 'An industrial dishwasher held by a dealer for resale to customers is classified as a non-current asset because the dealer is a business rather than a household.', 'The same industrial dishwasher must always be classified identically on every balance sheet regardless of how it is held.', 'Classifying an industrial dishwasher as a non-current asset depends on management''s intention to use it in operations rather than to sell it quickly.'], ARRAY[true, false, false, false, true], ARRAY['TRUE — Intended use versus resale intent, not physical form, decides whether the industrial dishwasher is non-current or current.', 'FALSE — Long-term operational use makes the industrial dishwasher a non-current tangible asset, not inventory.', 'FALSE — Resale intent, not the dealer''s status as a business, places the industrial dishwasher in inventory rather than among non-current assets.', 'FALSE — Classification of the industrial dishwasher depends on whether it is used or held for resale, so identical items can differ across balance sheets.', 'TRUE — An intention to use the industrial dishwasher over the long term is the deciding factor for non-current classification.'], '5/5', 4, 'full' ),
( '6.1', 'CASE 6.1.005', 'Two-Year Balance Sheet Review 5', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=761 | Total assets=1181
Year 2 | Equity=839 | Total assets=1279
[[/CHART]]

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

Evaluate the following economic assertions:', ARRAY['Non-current liabilities amount to less than 56.8% of total equity in Year 2.', 'The combined total of equity and non-current liabilities exceeds non-current assets by more than 7.3% in Year 1.', 'Retained earnings grew faster than total equity as a whole between Year 1 and Year 2.', 'Total equity grew by more than 24.5% between Year 1 and Year 2.', 'Total assets grew by more than 10% between Year 1 and Year 2.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Non-current liabilities are about 33.7% of equity in Year 2.', 'TRUE — Long-term financing covers non-current assets by about 38.9% in Year 1.', 'TRUE — Retained earnings growth ≈ 14.2% versus total equity growth ≈ 10.2%.', 'FALSE — Total equity changed by about 10.2% between the two years.', 'FALSE — Total assets changed by about 8.3% between the two years.'], '5/5', 5, 'full' ),
( '6.1', 'CASE 6.1.006', 'Comparative Balance Sheet Analysis 6', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=399 | Total assets=951
Year 2 | Equity=407 | Total assets=1034
[[/CHART]]

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 362 | 405 |
| Machinery | 132 | 144 |
| Office equipment | 45 | 52 |
| Patents, trademarks and licences | 72 | 72 |
| Inventory | 204 | 211 |
| Trade receivables | 106 | 117 |
| Cash and cash equivalents | 30 | 33 |
| Total assets | **951** | **1034** |
| **EQUITY** | | |
| Share capital | 129 | 129 |
| Retained earnings | 270 | 278 |
| Total equity | **399** | **407** |
| **LIABILITIES** | | |
| Long-term bank loan | 294 | 340 |
| Bonds payable | 62 | 70 |
| Trade payables | 149 | 160 |
| Bank overdraft | 47 | 57 |
| Total liabilities | **552** | **627** |
| Total equity and liabilities | **951** | **1034** |

Evaluate the following economic assertions:', ARRAY['Non-current liabilities amount to less than 121% of total equity in Year 2.', 'Total equity grew by more than 10.4% between Year 1 and Year 2.', 'Total assets grew by more than 21.8% between Year 1 and Year 2.', 'Inventory grew by more than 21% between Year 1 and Year 2.', 'Trade payables grew by more than 25.4% between Year 1 and Year 2.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Non-current liabilities are about 100.7% of equity in Year 2.', 'FALSE — Total equity changed by about 2.0% between the two years.', 'FALSE — Total assets changed by about 8.7% between the two years.', 'FALSE — Inventory changed by about 3.4% between the two years.', 'FALSE — Trade payables changed by about 7.4% between the two years.'], '2/5', 6, 'full' ),
( '6.1', 'CASE 6.1.007', 'Asset Composition Chart 7', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=379
Machinery=182
Patents, trademarks and licences=66
Inventory=160
Trade receivables=79
Cash and cash equivalents=113
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 379 |
| Machinery | 182 |
| Office equipment | 40 |
| Patents, trademarks and licences | 66 |
| Inventory | 160 |
| Trade receivables | 79 |
| Cash and cash equivalents | 113 |
| Total assets | **1019** |
| **EQUITY** | |
| Share capital | 280 |
| Retained earnings | 196 |
| Total equity | **476** |
| **LIABILITIES** | |
| Long-term bank loan | 269 |
| Bonds payable | 46 |
| Trade payables | 188 |
| Bank overdraft | 40 |
| Total liabilities | **543** |
| Total equity and liabilities | **1019** |

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.54.', 'Working capital of €124 thousand is positive on this balance sheet.', 'The current ratio is below 0.79.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 0.62 times over.', 'The equity ratio is below 41.5%.'], ARRAY[true, true, false, true, false], ARRAY['TRUE — Current ratio ≈ 1.54.', 'TRUE — Working capital = 124.', 'FALSE — Current ratio ≈ 1.54.', 'TRUE — Acid-test ratio ≈ 0.84.', 'FALSE — Equity ratio ≈ 46.7%.'], '5/5', 7, 'full' ),
( '6.1', 'CASE 6.1.008', 'Defining Non-Current Assets', 'Analyze why current assets are expected to convert into cash within the normal operating cycle. Evaluate the following economic assertions:', ARRAY['When an industrial dishwasher is acquired to be resold rather than used, it belongs among current assets as inventory.', 'An industrial dishwasher bought by a business to support its own daily operations is a tangible fixed asset because it delivers benefit across several accounting periods.', 'Classifying an industrial dishwasher as a non-current asset depends mainly on its purchase price rather than on management''s intended use.', 'An industrial dishwasher that a dealer displays for sale is not a fixed asset of that dealer.', 'An industrial dishwasher acquired for resale still counts among non-current assets as long as it remains unsold for several months.'], ARRAY[true, true, false, true, false], ARRAY['TRUE — Resale intent places the industrial dishwasher in inventory, a current-asset category.', 'TRUE — Multi-period operational benefit qualifies the industrial dishwasher as a tangible fixed asset.', 'FALSE — Intended use, not purchase price, drives the non-current classification of the industrial dishwasher.', 'TRUE — Stock awaiting sale remains inventory, not a fixed asset, for the dealer holding it.', 'FALSE — Resale intent keeps the industrial dishwasher in inventory as a current asset regardless of how long it stays unsold.'], '4/5', 8, 'full' ),
( '6.1', 'CASE 6.1.009', 'Liquidity From the Balance Sheet 9', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=406
Current liabilities=159
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 409 |
| Machinery | 265 |
| Office equipment | 40 |
| Patents, trademarks and licences | 72 |
| Inventory | 201 |
| Trade receivables | 163 |
| Cash and cash equivalents | 42 |
| Total assets | **1192** |
| **EQUITY** | |
| Share capital | 183 |
| Retained earnings | 444 |
| Total equity | **627** |
| **LIABILITIES** | |
| Long-term bank loan | 328 |
| Bonds payable | 78 |
| Trade payables | 101 |
| Bank overdraft | 58 |
| Total liabilities | **565** |
| Total equity and liabilities | **1192** |

Evaluate the following economic assertions:', ARRAY['The current ratio is below 0.72.', 'The current ratio exceeds 1.47.', 'Working capital of €247 thousand is positive on this balance sheet.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 0.64 times over.', 'The equity ratio is below 20.2%.'], ARRAY[false, true, true, true, false], ARRAY['FALSE — Current ratio ≈ 2.55.', 'TRUE — Current ratio ≈ 2.55.', 'TRUE — Working capital = 247.', 'TRUE — Acid-test ratio ≈ 1.29.', 'FALSE — Equity ratio ≈ 52.6%.'], '3/5', 9, 'full' ),
( '6.1', 'CASE 6.1.010', 'Defining Current Assets', 'Review how tangible non-current assets differ from intangible non-current assets in physical form. Evaluate the following economic assertions:', ARRAY['An industrial dishwasher used daily in a business''s own operations should be recorded as inventory because it wears out over time.', 'Once a dealer sells an industrial dishwasher from its stock, the buyer must continue to record it as inventory.', 'A warehouse crane kept in service by an operating business for more than one year is classified as a non-current tangible asset.', 'A warehouse crane used by an operating business is classified as inventory because inventory can include any physical equipment a business owns.', 'A warehouse crane held by a dealer for resale to customers is classified as a non-current asset because the dealer is a business rather than a household.'], ARRAY[false, false, true, false, false], ARRAY['FALSE — Continued operational use makes the industrial dishwasher a non-current asset; inventory is reserved for goods held for resale.', 'FALSE — A buyer intending to use the industrial dishwasher in operations records it as a non-current asset, not inventory, after purchase.', 'TRUE — Continued operational use beyond one year makes the warehouse crane a non-current tangible asset.', 'FALSE — Long-term operational use makes the warehouse crane a non-current tangible asset, not inventory.', 'FALSE — Resale intent, not the dealer''s status as a business, places the warehouse crane in inventory rather than among non-current assets.'], '5/5', 10, 'full' ),
( '6.1', 'CASE 6.1.011', 'Two-Year Balance Sheet Review 11', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=524 | Total assets=1194
Year 2 | Equity=550 | Total assets=1247
[[/CHART]]

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 400 | 402 |
| Machinery | 268 | 276 |
| Office equipment | 69 | 72 |
| Patents, trademarks and licences | 54 | 54 |
| Inventory | 147 | 152 |
| Trade receivables | 144 | 160 |
| Cash and cash equivalents | 112 | 131 |
| Total assets | **1194** | **1247** |
| **EQUITY** | | |
| Share capital | 124 | 124 |
| Retained earnings | 400 | 426 |
| Total equity | **524** | **550** |
| **LIABILITIES** | | |
| Long-term bank loan | 357 | 374 |
| Bonds payable | 71 | 73 |
| Trade payables | 165 | 163 |
| Bank overdraft | 77 | 87 |
| Total liabilities | **670** | **697** |
| Total equity and liabilities | **1194** | **1247** |

Evaluate the following economic assertions:', ARRAY['Total equity grew by more than 16.9% between Year 1 and Year 2.', 'Trade payables of €163 thousand in Year 2 are correctly classified as a current liability, since suppliers are normally expected to be paid within one year.', 'Total assets grew by more than 16.5% between Year 1 and Year 2.', 'Inventory grew by more than 21.8% between Year 1 and Year 2.', 'Trade payables grew by more than 14.5% between Year 1 and Year 2.'], ARRAY[false, true, false, false, false], ARRAY['FALSE — Total equity changed by about 5.0% between the two years.', 'TRUE — Trade payables are a current liability regardless of the amount.', 'FALSE — Total assets changed by about 4.4% between the two years.', 'FALSE — Inventory changed by about 3.4% between the two years.', 'FALSE — Trade payables changed by about -1.2% between the two years.'], '3/5', 11, 'full' ),
( '6.1', 'CASE 6.1.012', 'Tangible Non-Current Assets', 'Consider an orchard business that owns tractors for cultivation while holding harvested fruit in cold storage awaiting sale. Evaluate the following economic assertions:', ARRAY['A warehouse crane held by a dealer for resale to customers is classified as inventory, a current asset, rather than a non-current asset.', 'The same warehouse crane may be a non-current asset for one business and inventory for another, depending on whether it is used or held for sale.', 'Classifying a warehouse crane as a non-current asset depends on management''s intention to use it in operations rather than to sell it quickly.', 'When a warehouse crane is acquired to be resold rather than used, it belongs among current assets as inventory.', 'The same warehouse crane must always be classified identically on every balance sheet regardless of how it is held.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Held for resale rather than use, the warehouse crane counts as inventory within current assets.', 'TRUE — Intended use versus resale intent, not physical form, decides whether the warehouse crane is non-current or current.', 'TRUE — An intention to use the warehouse crane over the long term is the deciding factor for non-current classification.', 'TRUE — Resale intent places the warehouse crane in inventory, a current-asset category.', 'FALSE — Classification of the warehouse crane depends on whether it is used or held for resale, so identical items can differ across balance sheets.'], '4/5', 12, 'full' ),
( '6.1', 'CASE 6.1.013', 'Gearing From Comparative Figures 13', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=351 | Total assets=1115
Year 2 | Equity=381 | Total assets=1203
[[/CHART]]

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 471 | 499 |
| Machinery | 178 | 199 |
| Office equipment | 36 | 39 |
| Patents, trademarks and licences | 82 | 82 |
| Inventory | 147 | 162 |
| Trade receivables | 87 | 99 |
| Cash and cash equivalents | 114 | 123 |
| Total assets | **1115** | **1203** |
| **EQUITY** | | |
| Share capital | 232 | 232 |
| Retained earnings | 119 | 149 |
| Total equity | **351** | **381** |
| **LIABILITIES** | | |
| Long-term bank loan | 395 | 432 |
| Bonds payable | 84 | 88 |
| Trade payables | 213 | 231 |
| Bank overdraft | 72 | 71 |
| Total liabilities | **764** | **822** |
| Total equity and liabilities | **1115** | **1203** |

Evaluate the following economic assertions:', ARRAY['Non-current liabilities amount to more than 102.9% of total equity in Year 1.', 'Non-current assets make up more than 66% of total assets in Year 2.', 'Current liabilities are covered by current assets less than 1.61 times over in Year 2.', 'Total equity grew by more than 9.3% between Year 1 and Year 2.', 'Inventory grew by more than 16.8% between Year 1 and Year 2.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Non-current liabilities are about 136.5% of equity in Year 1.', 'TRUE — Non-current assets are about 68.1% of total assets in Year 2.', 'TRUE — Current ratio in Year 2 is about 1.27.', 'FALSE — Total equity changed by about 8.5% between the two years.', 'FALSE — Inventory changed by about 10.2% between the two years.'], '5/5', 13, 'full' ),
( '6.1', 'CASE 6.1.014', 'Balance Sheet Structure Review 14', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=354
Machinery=202
Patents, trademarks and licences=89
Inventory=228
Trade receivables=95
Cash and cash equivalents=81
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 354 |
| Machinery | 202 |
| Office equipment | 78 |
| Patents, trademarks and licences | 89 |
| Inventory | 228 |
| Trade receivables | 95 |
| Cash and cash equivalents | 81 |
| Total assets | **1127** |
| **EQUITY** | |
| Share capital | 129 |
| Retained earnings | 400 |
| Total equity | **529** |
| **LIABILITIES** | |
| Long-term bank loan | 342 |
| Bonds payable | 75 |
| Trade payables | 148 |
| Bank overdraft | 33 |
| Total liabilities | **598** |
| Total equity and liabilities | **1127** |

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.24.', 'Working capital of €223 thousand is positive on this balance sheet.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 0.82 times over.', 'The debt ratio exceeds 53%.', 'Inventory make up more than 32% of current assets.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Current ratio ≈ 2.23.', 'TRUE — Working capital = 223.', 'TRUE — Acid-test ratio ≈ 0.97.', 'TRUE — Debt ratio ≈ 53.1%.', 'TRUE — Inventory are about 56.4% of current assets.'], '2/5', 14, 'full' ),
( '6.1', 'CASE 6.1.015', 'Intangible Non-Current Assets', 'Review how buildings, machinery and office equipment are classified as tangible non-current assets. Evaluate the following economic assertions:', ARRAY['Classifying a warehouse crane as a non-current asset depends mainly on its purchase price rather than on management''s intended use.', 'A warehouse crane acquired for resale still counts among non-current assets as long as it remains unsold for several months.', 'A warehouse crane used daily in a business''s own operations should be recorded as inventory because it wears out over time.', 'A warehouse crane bought by a business to support its own daily operations is a tangible fixed asset because it delivers benefit across several accounting periods.', 'A warehouse crane that a dealer displays for sale is not a fixed asset of that dealer.'], ARRAY[false, false, false, true, true], ARRAY['FALSE — Intended use, not purchase price, drives the non-current classification of the warehouse crane.', 'FALSE — Resale intent keeps the warehouse crane in inventory as a current asset regardless of how long it stays unsold.', 'FALSE — Continued operational use makes the warehouse crane a non-current asset; inventory is reserved for goods held for resale.', 'TRUE — Multi-period operational benefit qualifies the warehouse crane as a tangible fixed asset.', 'TRUE — Stock awaiting sale remains inventory, not a fixed asset, for the dealer holding it.'], '3/5', 15, 'full' ),
( '6.1', 'CASE 6.1.016', 'Licences as Intangible Assets', 'Analyze how inventory, trade receivables and cash are classified among current assets. Evaluate the following economic assertions:', ARRAY['Once a dealer sells a warehouse crane from its stock, the buyer must continue to record it as inventory.', 'A delivery scooter kept in service by an operating business for more than one year is classified as a non-current tangible asset.', 'A delivery scooter used by an operating business is classified as inventory because inventory can include any physical equipment a business owns.', 'A delivery scooter held by a dealer for resale to customers is classified as inventory, a current asset, rather than a non-current asset.', 'The same delivery scooter may be a non-current asset for one business and inventory for another, depending on whether it is used or held for sale.'], ARRAY[false, true, false, true, true], ARRAY['FALSE — A buyer intending to use the warehouse crane in operations records it as a non-current asset, not inventory, after purchase.', 'TRUE — Continued operational use beyond one year makes the delivery scooter a non-current tangible asset.', 'FALSE — Long-term operational use makes the delivery scooter a non-current tangible asset, not inventory.', 'TRUE — Held for resale rather than use, the delivery scooter counts as inventory within current assets.', 'TRUE — Intended use versus resale intent, not physical form, decides whether the delivery scooter is non-current or current.'], '5/5', 16, 'full' ),
( '6.1', 'CASE 6.1.017', 'Balance Sheet Structure Review 17', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=389
Current liabilities=212
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 360 |
| Machinery | 239 |
| Office equipment | 54 |
| Patents, trademarks and licences | 77 |
| Inventory | 224 |
| Trade receivables | 133 |
| Cash and cash equivalents | 32 |
| Total assets | **1119** |
| **EQUITY** | |
| Share capital | 143 |
| Retained earnings | 397 |
| Total equity | **540** |
| **LIABILITIES** | |
| Long-term bank loan | 302 |
| Bonds payable | 65 |
| Trade payables | 147 |
| Bank overdraft | 65 |
| Total liabilities | **579** |
| Total equity and liabilities | **1119** |

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.62.', 'The current ratio is below 0.76.', 'Working capital of €177 thousand is positive on this balance sheet.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 1.23 times over.', 'Inventory make up more than 37.9% of current assets.'], ARRAY[true, false, true, false, true], ARRAY['TRUE — Current ratio ≈ 1.83.', 'FALSE — Current ratio ≈ 1.83.', 'TRUE — Working capital = 177.', 'FALSE — Acid-test ratio ≈ 0.78.', 'TRUE — Inventory are about 57.6% of current assets.'], '3/5', 17, 'full' ),
( '6.1', 'CASE 6.1.018', 'Comparative Balance Sheet Analysis 18', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=340 | Total assets=1006
Year 2 | Equity=348 | Total assets=1051
[[/CHART]]

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 302 | 329 |
| Machinery | 234 | 230 |
| Office equipment | 60 | 64 |
| Patents, trademarks and licences | 28 | 28 |
| Inventory | 189 | 205 |
| Trade receivables | 138 | 135 |
| Cash and cash equivalents | 55 | 60 |
| Total assets | **1006** | **1051** |
| **EQUITY** | | |
| Share capital | 128 | 128 |
| Retained earnings | 212 | 220 |
| Total equity | **340** | **348** |
| **LIABILITIES** | | |
| Long-term bank loan | 353 | 370 |
| Bonds payable | 56 | 58 |
| Trade payables | 178 | 188 |
| Bank overdraft | 79 | 87 |
| Total liabilities | **666** | **703** |
| Total equity and liabilities | **1006** | **1051** |

Evaluate the following economic assertions:', ARRAY['Non-current liabilities amount to more than 56.5% of total equity in Year 1.', 'Total equity grew by more than 9.8% between Year 1 and Year 2.', 'Current liabilities are covered by current assets less than 1.83 times over in Year 2.', 'Trade payables of €188 thousand in Year 2 are correctly classified as a current liability, since suppliers are normally expected to be paid within one year.', 'The current ratio in Year 1 is exactly 1.49.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — Non-current liabilities are about 120.3% of equity in Year 1.', 'FALSE — Total equity changed by about 2.4% between the two years.', 'TRUE — Current ratio in Year 2 is about 1.45.', 'TRUE — Trade payables are a current liability regardless of the amount.', 'TRUE — Current ratio in Year 1 is 1.49.'], '5/5', 18, 'full' ),
( '6.1', 'CASE 6.1.019', 'Gearing From Comparative Figures 19', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=613 | Total assets=1263
Year 2 | Equity=620 | Total assets=1347
[[/CHART]]

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 463 | 483 |
| Machinery | 269 | 282 |
| Office equipment | 39 | 42 |
| Patents, trademarks and licences | 93 | 93 |
| Inventory | 212 | 239 |
| Trade receivables | 109 | 131 |
| Cash and cash equivalents | 78 | 77 |
| Total assets | **1263** | **1347** |
| **EQUITY** | | |
| Share capital | 203 | 203 |
| Retained earnings | 410 | 417 |
| Total equity | **613** | **620** |
| **LIABILITIES** | | |
| Long-term bank loan | 297 | 345 |
| Bonds payable | 70 | 80 |
| Trade payables | 204 | 216 |
| Bank overdraft | 79 | 86 |
| Total liabilities | **650** | **727** |
| Total equity and liabilities | **1263** | **1347** |

Evaluate the following economic assertions:', ARRAY['Non-current liabilities amount to more than 50.2% of total equity in Year 1.', 'Non-current liabilities amount to less than 107.9% of total equity in Year 2.', 'Non-current assets make up more than 61.1% of total assets in Year 2.', 'Current liabilities are covered by current assets less than 1.57 times over in Year 2.', 'Trade payables of €216 thousand in Year 2 are correctly classified as a current liability, since suppliers are normally expected to be paid within one year.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Non-current liabilities are about 59.9% of equity in Year 1.', 'TRUE — Non-current liabilities are about 68.5% of equity in Year 2.', 'TRUE — Non-current assets are about 66.8% of total assets in Year 2.', 'TRUE — Current ratio in Year 2 is about 1.48.', 'TRUE — Trade payables are a current liability regardless of the amount.'], '5/5', 19, 'full' ),
( '6.1', 'CASE 6.1.020', 'Balance Sheet Structure Review 20', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=492
Machinery=256
Patents, trademarks and licences=63
Inventory=136
Trade receivables=162
Cash and cash equivalents=34
[[/CHART]]

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

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.05.', 'The current ratio is below 0.93.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 1.24 times over.', 'The equity ratio is below 33.7%.', 'The debt ratio exceeds 47.8%.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Current ratio ≈ 1.68.', 'FALSE — Current ratio ≈ 1.68.', 'FALSE — Acid-test ratio ≈ 0.99.', 'FALSE — Equity ratio ≈ 59.5%.', 'FALSE — Debt ratio ≈ 40.5%.'], '4/5', 20, 'full' ),
( '6.1', 'CASE 6.1.021', 'Trading Rights on the Balance Sheet', 'Review why an identical physical item can be a non-current asset for one holder and inventory for another. Evaluate the following economic assertions:', ARRAY['Classifying a delivery scooter as a non-current asset depends on management''s intention to use it in operations rather than to sell it quickly.', 'A delivery scooter held by a dealer for resale to customers is classified as a non-current asset because the dealer is a business rather than a household.', 'The same delivery scooter must always be classified identically on every balance sheet regardless of how it is held.', 'Classifying a delivery scooter as a non-current asset depends mainly on its purchase price rather than on management''s intended use.', 'A delivery scooter acquired for resale still counts among non-current assets as long as it remains unsold for several months.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — An intention to use the delivery scooter over the long term is the deciding factor for non-current classification.', 'FALSE — Resale intent, not the dealer''s status as a business, places the delivery scooter in inventory rather than among non-current assets.', 'FALSE — Classification of the delivery scooter depends on whether it is used or held for resale, so identical items can differ across balance sheets.', 'FALSE — Intended use, not purchase price, drives the non-current classification of the delivery scooter.', 'FALSE — Resale intent keeps the delivery scooter in inventory as a current asset regardless of how long it stays unsold.'], '5/5', 21, 'full' ),
( '6.1', 'CASE 6.1.022', 'Asset Composition Chart 22', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=321
Current liabilities=106
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 450 |
| Machinery | 186 |
| Office equipment | 43 |
| Patents, trademarks and licences | 46 |
| Inventory | 164 |
| Trade receivables | 127 |
| Cash and cash equivalents | 30 |
| Total assets | **1046** |
| **EQUITY** | |
| Share capital | 169 |
| Retained earnings | 368 |
| Total equity | **537** |
| **LIABILITIES** | |
| Long-term bank loan | 320 |
| Bonds payable | 83 |
| Trade payables | 65 |
| Bank overdraft | 41 |
| Total liabilities | **509** |
| Total equity and liabilities | **1046** |

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.41.', 'Working capital of €215 thousand is positive on this balance sheet.', 'The current ratio is below 0.95.', 'The equity ratio is below 26.9%.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 1.19 times over.'], ARRAY[true, true, false, false, true], ARRAY['TRUE — Current ratio ≈ 3.03.', 'TRUE — Working capital = 215.', 'FALSE — Current ratio ≈ 3.03.', 'FALSE — Equity ratio ≈ 51.3%.', 'TRUE — Acid-test ratio ≈ 1.48.'], '5/5', 22, 'full' ),
( '6.1', 'CASE 6.1.023', 'Buildings and Machinery as Fixed Assets', 'Consider a metalworking firm that owns specialised cutting equipment while also holding raw steel awaiting use in customer orders. Evaluate the following economic assertions:', ARRAY['When a delivery scooter is acquired to be resold rather than used, it belongs among current assets as inventory.', 'A delivery scooter bought by a business to support its own daily operations is a tangible fixed asset because it delivers benefit across several accounting periods.', 'A delivery scooter that a dealer displays for sale is not a fixed asset of that dealer.', 'A packaging line kept in service by an operating business for more than one year is classified as a non-current tangible asset.', 'A packaging line held by a dealer for resale to customers is classified as inventory, a current asset, rather than a non-current asset.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Resale intent places the delivery scooter in inventory, a current-asset category.', 'TRUE — Multi-period operational benefit qualifies the delivery scooter as a tangible fixed asset.', 'TRUE — Stock awaiting sale remains inventory, not a fixed asset, for the dealer holding it.', 'TRUE — Continued operational use beyond one year makes the packaging line a non-current tangible asset.', 'TRUE — Held for resale rather than use, the packaging line counts as inventory within current assets.'], '5/5', 23, 'full' ),
( '6.1', 'CASE 6.1.024', 'Office Equipment as a Fixed Asset', 'Review the distinction between current liabilities and non-current liabilities based on settlement timing. Evaluate the following economic assertions:', ARRAY['A delivery scooter used daily in a business''s own operations should be recorded as inventory because it wears out over time.', 'The same packaging line may be a non-current asset for one business and inventory for another, depending on whether it is used or held for sale.', 'Once a dealer sells a delivery scooter from its stock, the buyer must continue to record it as inventory.', 'A packaging line used by an operating business is classified as inventory because inventory can include any physical equipment a business owns.', 'Classifying a packaging line as a non-current asset depends on management''s intention to use it in operations rather than to sell it quickly.'], ARRAY[false, true, false, false, true], ARRAY['FALSE — Continued operational use makes the delivery scooter a non-current asset; inventory is reserved for goods held for resale.', 'TRUE — Intended use versus resale intent, not physical form, decides whether the packaging line is non-current or current.', 'FALSE — A buyer intending to use the delivery scooter in operations records it as a non-current asset, not inventory, after purchase.', 'FALSE — Long-term operational use makes the packaging line a non-current tangible asset, not inventory.', 'TRUE — An intention to use the packaging line over the long term is the deciding factor for non-current classification.'], '3/5', 24, 'full' ),
( '6.1', 'CASE 6.1.025', 'Gearing From Comparative Figures 25', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=202 | Total assets=867
Year 2 | Equity=260 | Total assets=1001
[[/CHART]]

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 336 | 384 |
| Machinery | 136 | 161 |
| Office equipment | 74 | 86 |
| Patents, trademarks and licences | 24 | 24 |
| Inventory | 131 | 147 |
| Trade receivables | 109 | 128 |
| Cash and cash equivalents | 57 | 71 |
| Total assets | **867** | **1001** |
| **EQUITY** | | |
| Share capital | 152 | 152 |
| Retained earnings | 50 | 108 |
| Total equity | **202** | **260** |
| **LIABILITIES** | | |
| Long-term bank loan | 324 | 372 |
| Bonds payable | 68 | 76 |
| Trade payables | 205 | 215 |
| Bank overdraft | 68 | 78 |
| Total liabilities | **665** | **741** |
| Total equity and liabilities | **867** | **1001** |

Evaluate the following economic assertions:', ARRAY['Total assets grew by more than 21.2% between Year 1 and Year 2.', 'Total equity grew by more than 24.7% between Year 1 and Year 2.', 'The equity ratio improved by more than 2.4 percentage points between Year 1 and Year 2.', 'Non-current liabilities amount to more than 73.2% of total equity in Year 1.', 'Working capital more than doubled between Year 1 and Year 2.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — Total assets changed by about 15.5% between the two years.', 'TRUE — Total equity changed by about 28.7% between the two years.', 'TRUE — Equity ratio moved from 23.3% to 26.0%.', 'TRUE — Non-current liabilities are about 194.1% of equity in Year 1.', 'TRUE — Working capital moved from 24 to 53.'], '5/5', 25, 'full' ),
( '6.1', 'CASE 6.1.026', 'Equipment for Use Versus Resale', 'Analyze why amounts owed to suppliers are classified as a current liability. Evaluate the following economic assertions:', ARRAY['When a packaging line is acquired to be resold rather than used, it belongs among current assets as inventory.', 'A packaging line bought by a business to support its own daily operations is a tangible fixed asset because it delivers benefit across several accounting periods.', 'A packaging line that a dealer displays for sale is not a fixed asset of that dealer.', 'A concrete mixer kept in service by an operating business for more than one year is classified as a non-current tangible asset.', 'A concrete mixer held by a dealer for resale to customers is classified as inventory, a current asset, rather than a non-current asset.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Resale intent places the packaging line in inventory, a current-asset category.', 'TRUE — Multi-period operational benefit qualifies the packaging line as a tangible fixed asset.', 'TRUE — Stock awaiting sale remains inventory, not a fixed asset, for the dealer holding it.', 'TRUE — Continued operational use beyond one year makes the concrete mixer a non-current tangible asset.', 'TRUE — Held for resale rather than use, the concrete mixer counts as inventory within current assets.'], '5/5', 26, 'full' ),
( '6.1', 'CASE 6.1.027', 'Liquidity From the Balance Sheet 27', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=479
Machinery=155
Patents, trademarks and licences=59
Inventory=166
Trade receivables=73
Cash and cash equivalents=112
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 479 |
| Machinery | 155 |
| Office equipment | 73 |
| Patents, trademarks and licences | 59 |
| Inventory | 166 |
| Trade receivables | 73 |
| Cash and cash equivalents | 112 |
| Total assets | **1117** |
| **EQUITY** | |
| Share capital | 185 |
| Retained earnings | 430 |
| Total equity | **615** |
| **LIABILITIES** | |
| Long-term bank loan | 299 |
| Bonds payable | 50 |
| Trade payables | 80 |
| Bank overdraft | 73 |
| Total liabilities | **502** |
| Total equity and liabilities | **1117** |

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.31.', 'Working capital of €198 thousand is positive on this balance sheet.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 0.65 times over.', 'Inventory make up more than 35% of current assets.', 'Trade receivables make up less than 52.9% of current assets.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Current ratio ≈ 2.29.', 'TRUE — Working capital = 198.', 'TRUE — Acid-test ratio ≈ 1.21.', 'TRUE — Inventory are about 47.3% of current assets.', 'TRUE — Trade receivables are about 20.8% of current assets.'], '5/5', 27, 'full' ),
( '6.1', 'CASE 6.1.028', 'Inventory as a Current Asset', 'Review why long-term bank loans and corporate bonds are classified as non-current liabilities. Evaluate the following economic assertions:', ARRAY['The same concrete mixer may be a non-current asset for one business and inventory for another, depending on whether it is used or held for sale.', 'Classifying a concrete mixer as a non-current asset depends on management''s intention to use it in operations rather than to sell it quickly.', 'A packaging line held by a dealer for resale to customers is classified as a non-current asset because the dealer is a business rather than a household.', 'When a concrete mixer is acquired to be resold rather than used, it belongs among current assets as inventory.', 'A concrete mixer bought by a business to support its own daily operations is a tangible fixed asset because it delivers benefit across several accounting periods.'], ARRAY[true, true, false, true, true], ARRAY['TRUE — Intended use versus resale intent, not physical form, decides whether the concrete mixer is non-current or current.', 'TRUE — An intention to use the concrete mixer over the long term is the deciding factor for non-current classification.', 'FALSE — Resale intent, not the dealer''s status as a business, places the packaging line in inventory rather than among non-current assets.', 'TRUE — Resale intent places the concrete mixer in inventory, a current-asset category.', 'TRUE — Multi-period operational benefit qualifies the concrete mixer as a tangible fixed asset.'], '5/5', 28, 'full' ),
( '6.1', 'CASE 6.1.029', 'Trade Receivables Explained', 'Consider a dairy processor that owns its pasteurising equipment while owing suppliers for recently delivered packaging materials. Evaluate the following economic assertions:', ARRAY['A concrete mixer that a dealer displays for sale is not a fixed asset of that dealer.', 'A laptop computer kept in service by an operating business for more than one year is classified as a non-current tangible asset.', 'A laptop computer held by a dealer for resale to customers is classified as inventory, a current asset, rather than a non-current asset.', 'The same packaging line must always be classified identically on every balance sheet regardless of how it is held.', 'The same laptop computer may be a non-current asset for one business and inventory for another, depending on whether it is used or held for sale.'], ARRAY[true, true, true, false, true], ARRAY['TRUE — Stock awaiting sale remains inventory, not a fixed asset, for the dealer holding it.', 'TRUE — Continued operational use beyond one year makes the laptop computer a non-current tangible asset.', 'TRUE — Held for resale rather than use, the laptop computer counts as inventory within current assets.', 'FALSE — Classification of the packaging line depends on whether it is used or held for resale, so identical items can differ across balance sheets.', 'TRUE — Intended use versus resale intent, not physical form, decides whether the laptop computer is non-current or current.'], '5/5', 29, 'full' ),
( '6.1', 'CASE 6.1.030', 'Liquidity From the Balance Sheet 30', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=389
Machinery=221
Patents, trademarks and licences=27
Inventory=152
Trade receivables=68
Cash and cash equivalents=44
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 389 |
| Machinery | 221 |
| Office equipment | 76 |
| Patents, trademarks and licences | 27 |
| Inventory | 152 |
| Trade receivables | 68 |
| Cash and cash equivalents | 44 |
| Total assets | **977** |
| **EQUITY** | |
| Share capital | 212 |
| Retained earnings | 127 |
| Total equity | **339** |
| **LIABILITIES** | |
| Long-term bank loan | 448 |
| Bonds payable | 43 |
| Trade payables | 120 |
| Bank overdraft | 27 |
| Total liabilities | **638** |
| Total equity and liabilities | **977** |

Evaluate the following economic assertions:', ARRAY['Working capital of €117 thousand is positive on this balance sheet.', 'The equity ratio is below 42.8%.', 'Inventory make up more than 55.4% of current assets.', 'Trade receivables make up less than 31.2% of current assets.', 'Inventory of €152 thousand is correctly classified as a current asset rather than a non-current intangible asset.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Working capital = 117.', 'TRUE — Equity ratio ≈ 34.7%.', 'TRUE — Inventory are about 57.6% of current assets.', 'TRUE — Trade receivables are about 25.8% of current assets.', 'TRUE — Inventory is always a current asset.'], '5/5', 30, 'full' ),
( '6.1', 'CASE 6.1.031', 'Asset Composition Chart 31', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=290
Current liabilities=261
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 309 |
| Machinery | 279 |
| Office equipment | 58 |
| Patents, trademarks and licences | 30 |
| Inventory | 130 |
| Trade receivables | 61 |
| Cash and cash equivalents | 99 |
| Total assets | **966** |
| **EQUITY** | |
| Share capital | 245 |
| Retained earnings | 204 |
| Total equity | **449** |
| **LIABILITIES** | |
| Long-term bank loan | 196 |
| Bonds payable | 60 |
| Trade payables | 174 |
| Bank overdraft | 87 |
| Total liabilities | **517** |
| Total equity and liabilities | **966** |

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.09.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 1.26 times over.', 'The equity ratio is below 25.8%.', 'The debt ratio exceeds 77.4%.', 'Buildings make up more than 57.9% of total assets.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Current ratio ≈ 1.11.', 'FALSE — Acid-test ratio ≈ 0.61.', 'FALSE — Equity ratio ≈ 46.5%.', 'FALSE — Debt ratio ≈ 53.5%.', 'FALSE — Buildings are about 32.0% of total assets.'], '2/5', 31, 'full' ),
( '6.1', 'CASE 6.1.032', 'Cash and Cash Equivalents', 'Review why a higher equity ratio indicates greater financial independence from creditors. Evaluate the following economic assertions:', ARRAY['Classifying a laptop computer as a non-current asset depends on management''s intention to use it in operations rather than to sell it quickly.', 'When a laptop computer is acquired to be resold rather than used, it belongs among current assets as inventory.', 'Classifying a packaging line as a non-current asset depends mainly on its purchase price rather than on management''s intended use.', 'A laptop computer bought by a business to support its own daily operations is a tangible fixed asset because it delivers benefit across several accounting periods.', 'A packaging line acquired for resale still counts among non-current assets as long as it remains unsold for several months.'], ARRAY[true, true, false, true, false], ARRAY['TRUE — An intention to use the laptop computer over the long term is the deciding factor for non-current classification.', 'TRUE — Resale intent places the laptop computer in inventory, a current-asset category.', 'FALSE — Intended use, not purchase price, drives the non-current classification of the packaging line.', 'TRUE — Multi-period operational benefit qualifies the laptop computer as a tangible fixed asset.', 'FALSE — Resale intent keeps the packaging line in inventory as a current asset regardless of how long it stays unsold.'], '2/5', 32, 'full' ),
( '6.1', 'CASE 6.1.033', 'Comparative Balance Sheet Analysis 33', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=619 | Total assets=1145
Year 2 | Equity=655 | Total assets=1257
[[/CHART]]

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 467 | 500 |
| Machinery | 129 | 145 |
| Office equipment | 42 | 46 |
| Patents, trademarks and licences | 76 | 76 |
| Inventory | 216 | 253 |
| Trade receivables | 146 | 164 |
| Cash and cash equivalents | 69 | 73 |
| Total assets | **1145** | **1257** |
| **EQUITY** | | |
| Share capital | 182 | 182 |
| Retained earnings | 437 | 473 |
| Total equity | **619** | **655** |
| **LIABILITIES** | | |
| Long-term bank loan | 197 | 217 |
| Bonds payable | 73 | 83 |
| Trade payables | 169 | 198 |
| Bank overdraft | 87 | 104 |
| Total liabilities | **526** | **602** |
| Total equity and liabilities | **1145** | **1257** |

Evaluate the following economic assertions:', ARRAY['Total equity grew by more than 10.8% between Year 1 and Year 2.', 'Total assets grew by more than 23.6% between Year 1 and Year 2.', 'Trade payables grew by more than 20% between Year 1 and Year 2.', 'Inventory grew by more than 10.5% between Year 1 and Year 2.', 'Cash and cash equivalents fell by more than 26.5% between Year 1 and Year 2.'], ARRAY[false, false, false, true, false], ARRAY['FALSE — Total equity changed by about 5.8% between the two years.', 'FALSE — Total assets changed by about 9.8% between the two years.', 'FALSE — Trade payables changed by about 17.2% between the two years.', 'TRUE — Inventory changed by about 17.1% between the two years.', 'FALSE — Cash and cash equivalents changed by about 5.8% between the two years.'], '2/5', 33, 'full' ),
( '6.1', 'CASE 6.1.034', 'Gearing From Comparative Figures 34', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=190 | Total assets=959
Year 2 | Equity=245 | Total assets=1042
[[/CHART]]

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 287 | 303 |
| Machinery | 212 | 237 |
| Office equipment | 79 | 87 |
| Patents, trademarks and licences | 90 | 90 |
| Inventory | 107 | 123 |
| Trade receivables | 137 | 151 |
| Cash and cash equivalents | 47 | 51 |
| Total assets | **959** | **1042** |
| **EQUITY** | | |
| Share capital | 194 | 194 |
| Retained earnings | -4 | 51 |
| Total equity | **190** | **245** |
| **LIABILITIES** | | |
| Long-term bank loan | 395 | 424 |
| Bonds payable | 78 | 82 |
| Trade payables | 235 | 232 |
| Bank overdraft | 61 | 59 |
| Total liabilities | **769** | **797** |
| Total equity and liabilities | **959** | **1042** |

Evaluate the following economic assertions:', ARRAY['Total equity grew by more than 29.1% between Year 1 and Year 2.', 'Non-current liabilities amount to more than 56.1% of total equity in Year 1.', 'Inventory grew by more than 17.9% between Year 1 and Year 2.', 'Non-current assets make up more than 59.9% of total assets in Year 2.', 'Working capital turned positive by Year 2 after being negative in Year 1.'], ARRAY[false, true, false, true, true], ARRAY['FALSE — Total equity changed by about 28.9% between the two years.', 'TRUE — Non-current liabilities are about 248.9% of equity in Year 1.', 'FALSE — Inventory changed by about 15.0% between the two years.', 'TRUE — Non-current assets are about 68.8% of total assets in Year 2.', 'TRUE — Working capital moved from -5 to 34.'], '2/5', 34, 'full' ),
( '6.1', 'CASE 6.1.035', 'Balance Sheet Structure Review 35', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=319
Machinery=124
Patents, trademarks and licences=34
Inventory=113
Trade receivables=85
Cash and cash equivalents=73
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 319 |
| Machinery | 124 |
| Office equipment | 53 |
| Patents, trademarks and licences | 34 |
| Inventory | 113 |
| Trade receivables | 85 |
| Cash and cash equivalents | 73 |
| Total assets | **801** |
| **EQUITY** | |
| Share capital | 265 |
| Retained earnings | -93 |
| Total equity | **172** |
| **LIABILITIES** | |
| Long-term bank loan | 433 |
| Bonds payable | 65 |
| Trade payables | 94 |
| Bank overdraft | 37 |
| Total liabilities | **629** |
| Total equity and liabilities | **801** |

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.75.', 'Working capital of €140 thousand is positive on this balance sheet.', 'The current ratio is below 0.75.', 'Buildings make up more than 41.2% of total assets.', 'The equity ratio is below 23.4%.'], ARRAY[true, true, false, false, true], ARRAY['TRUE — Current ratio ≈ 2.07.', 'TRUE — Working capital = 140.', 'FALSE — Current ratio ≈ 2.07.', 'FALSE — Buildings are about 39.8% of total assets.', 'TRUE — Equity ratio ≈ 21.5%.'], '2/5', 35, 'full' ),
( '6.1', 'CASE 6.1.036', 'Liquidity From the Balance Sheet 36', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=466
Current liabilities=231
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 328 |
| Machinery | 270 |
| Office equipment | 34 |
| Patents, trademarks and licences | 63 |
| Inventory | 207 |
| Trade receivables | 161 |
| Cash and cash equivalents | 98 |
| Total assets | **1161** |
| **EQUITY** | |
| Share capital | 213 |
| Retained earnings | 329 |
| Total equity | **542** |
| **LIABILITIES** | |
| Long-term bank loan | 327 |
| Bonds payable | 61 |
| Trade payables | 161 |
| Bank overdraft | 70 |
| Total liabilities | **619** |
| Total equity and liabilities | **1161** |

Evaluate the following economic assertions:', ARRAY['The current ratio is below 1.08.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 1.36 times over.', 'Working capital of €235 thousand is positive on this balance sheet.', 'The equity ratio is below 38.4%.', 'Inventory make up more than 36.1% of current assets.'], ARRAY[false, false, true, false, true], ARRAY['FALSE — Current ratio ≈ 2.02.', 'FALSE — Acid-test ratio ≈ 1.12.', 'TRUE — Working capital = 235.', 'FALSE — Equity ratio ≈ 46.7%.', 'TRUE — Inventory are about 44.4% of current assets.'], '2/5', 36, 'full' ),
( '6.1', 'CASE 6.1.037', 'Gearing From Comparative Figures 37', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=371 | Total assets=957
Year 2 | Equity=407 | Total assets=1041
[[/CHART]]

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 364 | 388 |
| Machinery | 180 | 205 |
| Office equipment | 37 | 42 |
| Patents, trademarks and licences | 76 | 76 |
| Inventory | 140 | 157 |
| Trade receivables | 60 | 61 |
| Cash and cash equivalents | 100 | 112 |
| Total assets | **957** | **1041** |
| **EQUITY** | | |
| Share capital | 234 | 234 |
| Retained earnings | 137 | 173 |
| Total equity | **371** | **407** |
| **LIABILITIES** | | |
| Long-term bank loan | 223 | 242 |
| Bonds payable | 87 | 97 |
| Trade payables | 192 | 205 |
| Bank overdraft | 84 | 90 |
| Total liabilities | **586** | **634** |
| Total equity and liabilities | **957** | **1041** |

Evaluate the following economic assertions:', ARRAY['Non-current liabilities amount to more than 62.2% of total equity in Year 1.', 'Non-current liabilities amount to less than 125.6% of total equity in Year 2.', 'Non-current assets make up more than 57.6% of total assets in Year 2.', 'Trade payables of €205 thousand in Year 2 are correctly classified as a current liability, since suppliers are normally expected to be paid within one year.', 'Because share capital stayed at €234 thousand in both years, total equity increased by exactly €36 thousand from Year 1 to Year 2, all of it from retained earnings.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Non-current liabilities are about 83.6% of equity in Year 1.', 'TRUE — Non-current liabilities are about 83.3% of equity in Year 2.', 'TRUE — Non-current assets are about 68.3% of total assets in Year 2.', 'TRUE — Trade payables are a current liability regardless of the amount.', 'TRUE — Equity rose from 371 to 407, an increase of €36 thousand.'], '2/5', 37, 'full' ),
( '6.1', 'CASE 6.1.038', 'Two-Year Balance Sheet Review 38', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=510 | Total assets=1204
Year 2 | Equity=511 | Total assets=1282
[[/CHART]]

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 426 | 443 |
| Machinery | 234 | 250 |
| Office equipment | 37 | 41 |
| Patents, trademarks and licences | 28 | 28 |
| Inventory | 194 | 213 |
| Trade receivables | 172 | 194 |
| Cash and cash equivalents | 113 | 113 |
| Total assets | **1204** | **1282** |
| **EQUITY** | | |
| Share capital | 184 | 184 |
| Retained earnings | 326 | 327 |
| Total equity | **510** | **511** |
| **LIABILITIES** | | |
| Long-term bank loan | 401 | 454 |
| Bonds payable | 79 | 86 |
| Trade payables | 133 | 149 |
| Bank overdraft | 81 | 82 |
| Total liabilities | **694** | **771** |
| Total equity and liabilities | **1204** | **1282** |

Evaluate the following economic assertions:', ARRAY['Non-current liabilities amount to more than 55.1% of total equity in Year 1.', 'Total assets grew by more than 15.9% between Year 1 and Year 2.', 'The combined total of equity and non-current liabilities exceeds non-current assets by more than 17.9% in Year 1.', 'Inventory grew by more than 29.8% between Year 1 and Year 2.', 'Trade payables grew by more than 21.2% between Year 1 and Year 2.'], ARRAY[true, false, true, false, false], ARRAY['TRUE — Non-current liabilities are about 94.1% of equity in Year 1.', 'FALSE — Total assets changed by about 6.5% between the two years.', 'TRUE — Long-term financing covers non-current assets by about 36.6% in Year 1.', 'FALSE — Inventory changed by about 9.8% between the two years.', 'FALSE — Trade payables changed by about 12.0% between the two years.'], '3/5', 38, 'full' ),
( '6.1', 'CASE 6.1.039', 'Current Liabilities Overview', 'Analyze why equity does not require repayment on a fixed schedule, unlike borrowed funds. Evaluate the following economic assertions:', ARRAY['A laptop computer that a dealer displays for sale is not a fixed asset of that dealer.', 'A refrigerated van kept in service by an operating business for more than one year is classified as a non-current tangible asset.', 'A refrigerated van held by a dealer for resale to customers is classified as inventory, a current asset, rather than a non-current asset.', 'The same refrigerated van may be a non-current asset for one business and inventory for another, depending on whether it is used or held for sale.', 'Classifying a refrigerated van as a non-current asset depends on management''s intention to use it in operations rather than to sell it quickly.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Stock awaiting sale remains inventory, not a fixed asset, for the dealer holding it.', 'TRUE — Continued operational use beyond one year makes the refrigerated van a non-current tangible asset.', 'TRUE — Held for resale rather than use, the refrigerated van counts as inventory within current assets.', 'TRUE — Intended use versus resale intent, not physical form, decides whether the refrigerated van is non-current or current.', 'TRUE — An intention to use the refrigerated van over the long term is the deciding factor for non-current classification.'], '5/5', 39, 'full' ),
( '6.1', 'CASE 6.1.040', 'Asset Composition Chart 40', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=472
Machinery=140
Patents, trademarks and licences=42
Inventory=95
Trade receivables=60
Cash and cash equivalents=31
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 472 |
| Machinery | 140 |
| Office equipment | 51 |
| Patents, trademarks and licences | 42 |
| Inventory | 95 |
| Trade receivables | 60 |
| Cash and cash equivalents | 31 |
| Total assets | **891** |
| **EQUITY** | |
| Share capital | 118 |
| Retained earnings | 349 |
| Total equity | **467** |
| **LIABILITIES** | |
| Long-term bank loan | 195 |
| Bonds payable | 86 |
| Trade payables | 89 |
| Bank overdraft | 54 |
| Total liabilities | **424** |
| Total equity and liabilities | **891** |

Evaluate the following economic assertions:', ARRAY['Working capital of €43 thousand is positive on this balance sheet.', 'The current ratio exceeds 1.33.', 'The current ratio is below 0.63.', 'The equity ratio is below 44%.', 'The debt ratio exceeds 54.2%.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Working capital = 43.', 'FALSE — Current ratio ≈ 1.30.', 'FALSE — Current ratio ≈ 1.30.', 'FALSE — Equity ratio ≈ 52.4%.', 'FALSE — Debt ratio ≈ 47.6%.'], '5/5', 40, 'full' ),
( '6.1', 'CASE 6.1.041', 'Non-Current Liabilities Overview', 'Review how equity acts as a buffer that absorbs losses before creditors are affected. Evaluate the following economic assertions:', ARRAY['When a refrigerated van is acquired to be resold rather than used, it belongs among current assets as inventory.', 'A refrigerated van bought by a business to support its own daily operations is a tangible fixed asset because it delivers benefit across several accounting periods.', 'A refrigerated van that a dealer displays for sale is not a fixed asset of that dealer.', 'A woodworking lathe kept in service by an operating business for more than one year is classified as a non-current tangible asset.', 'A woodworking lathe held by a dealer for resale to customers is classified as inventory, a current asset, rather than a non-current asset.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Resale intent places the refrigerated van in inventory, a current-asset category.', 'TRUE — Multi-period operational benefit qualifies the refrigerated van as a tangible fixed asset.', 'TRUE — Stock awaiting sale remains inventory, not a fixed asset, for the dealer holding it.', 'TRUE — Continued operational use beyond one year makes the woodworking lathe a non-current tangible asset.', 'TRUE — Held for resale rather than use, the woodworking lathe counts as inventory within current assets.'], '4/5', 41, 'full' ),
( '6.1', 'CASE 6.1.042', 'Amounts Owed to Suppliers', 'Consider a private clinic that owns its diagnostic scanners while settling invoices from medical suppliers on standard credit terms. Evaluate the following economic assertions:', ARRAY['A packaging line used daily in a business''s own operations should be recorded as inventory because it wears out over time.', 'The same woodworking lathe may be a non-current asset for one business and inventory for another, depending on whether it is used or held for sale.', 'Classifying a woodworking lathe as a non-current asset depends on management''s intention to use it in operations rather than to sell it quickly.', 'When a woodworking lathe is acquired to be resold rather than used, it belongs among current assets as inventory.', 'A woodworking lathe bought by a business to support its own daily operations is a tangible fixed asset because it delivers benefit across several accounting periods.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — Continued operational use makes the packaging line a non-current asset; inventory is reserved for goods held for resale.', 'TRUE — Intended use versus resale intent, not physical form, decides whether the woodworking lathe is non-current or current.', 'TRUE — An intention to use the woodworking lathe over the long term is the deciding factor for non-current classification.', 'TRUE — Resale intent places the woodworking lathe in inventory, a current-asset category.', 'TRUE — Multi-period operational benefit qualifies the woodworking lathe as a tangible fixed asset.'], '5/5', 42, 'full' ),
( '6.1', 'CASE 6.1.043', 'Long-Term Loans as Non-Current Liabilities', 'Review how a credit purchase increases an asset and a liability at the same time. Evaluate the following economic assertions:', ARRAY['A woodworking lathe that a dealer displays for sale is not a fixed asset of that dealer.', 'An espresso machine kept in service by an operating business for more than one year is classified as a non-current tangible asset.', 'An espresso machine held by a dealer for resale to customers is classified as inventory, a current asset, rather than a non-current asset.', 'The same espresso machine may be a non-current asset for one business and inventory for another, depending on whether it is used or held for sale.', 'Classifying an espresso machine as a non-current asset depends on management''s intention to use it in operations rather than to sell it quickly.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Stock awaiting sale remains inventory, not a fixed asset, for the dealer holding it.', 'TRUE — Continued operational use beyond one year makes the espresso machine a non-current tangible asset.', 'TRUE — Held for resale rather than use, the espresso machine counts as inventory within current assets.', 'TRUE — Intended use versus resale intent, not physical form, decides whether the espresso machine is non-current or current.', 'TRUE — An intention to use the espresso machine over the long term is the deciding factor for non-current classification.'], '2/5', 43, 'full' ),
( '6.1', 'CASE 6.1.044', 'Balance Sheet Structure Review 44', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=468
Current liabilities=221
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 462 |
| Machinery | 260 |
| Office equipment | 52 |
| Patents, trademarks and licences | 51 |
| Inventory | 180 |
| Trade receivables | 178 |
| Cash and cash equivalents | 110 |
| Total assets | **1293** |
| **EQUITY** | |
| Share capital | 227 |
| Retained earnings | 454 |
| Total equity | **681** |
| **LIABILITIES** | |
| Long-term bank loan | 320 |
| Bonds payable | 71 |
| Trade payables | 147 |
| Bank overdraft | 74 |
| Total liabilities | **612** |
| Total equity and liabilities | **1293** |

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.85.', 'The current ratio is below 0.64.', 'Inventory make up more than 37.1% of current assets.', 'The equity ratio is below 26.8%.', 'The debt ratio exceeds 68%.'], ARRAY[true, false, true, false, false], ARRAY['TRUE — Current ratio ≈ 2.12.', 'FALSE — Current ratio ≈ 2.12.', 'TRUE — Inventory are about 38.5% of current assets.', 'FALSE — Equity ratio ≈ 52.7%.', 'FALSE — Debt ratio ≈ 47.3%.'], '5/5', 44, 'full' ),
( '6.1', 'CASE 6.1.045', 'Bonds Payable and Settlement Timing', 'Analyze the difference between a cash purchase and a credit purchase in their effect on the balance sheet. Evaluate the following economic assertions:', ARRAY['When an espresso machine is acquired to be resold rather than used, it belongs among current assets as inventory.', 'Once a dealer sells a packaging line from its stock, the buyer must continue to record it as inventory.', 'An espresso machine bought by a business to support its own daily operations is a tangible fixed asset because it delivers benefit across several accounting periods.', 'A concrete mixer used by an operating business is classified as inventory because inventory can include any physical equipment a business owns.', 'An espresso machine that a dealer displays for sale is not a fixed asset of that dealer.'], ARRAY[true, false, true, false, true], ARRAY['TRUE — Resale intent places the espresso machine in inventory, a current-asset category.', 'FALSE — A buyer intending to use the packaging line in operations records it as a non-current asset, not inventory, after purchase.', 'TRUE — Multi-period operational benefit qualifies the espresso machine as a tangible fixed asset.', 'FALSE — Long-term operational use makes the concrete mixer a non-current tangible asset, not inventory.', 'TRUE — Stock awaiting sale remains inventory, not a fixed asset, for the dealer holding it.'], '5/5', 45, 'full' ),
( '6.1', 'CASE 6.1.046', 'The Equity Ratio Explained', 'Review how reclassifying an asset from resale stock to operational use changes its balance sheet category. Evaluate the following economic assertions:', ARRAY['A printing press kept in service by an operating business for more than one year is classified as a non-current tangible asset.', 'A concrete mixer held by a dealer for resale to customers is classified as a non-current asset because the dealer is a business rather than a household.', 'The same concrete mixer must always be classified identically on every balance sheet regardless of how it is held.', 'Classifying a concrete mixer as a non-current asset depends mainly on its purchase price rather than on management''s intended use.', 'A printing press held by a dealer for resale to customers is classified as inventory, a current asset, rather than a non-current asset.'], ARRAY[true, false, false, false, true], ARRAY['TRUE — Continued operational use beyond one year makes the printing press a non-current tangible asset.', 'FALSE — Resale intent, not the dealer''s status as a business, places the concrete mixer in inventory rather than among non-current assets.', 'FALSE — Classification of the concrete mixer depends on whether it is used or held for resale, so identical items can differ across balance sheets.', 'FALSE — Intended use, not purchase price, drives the non-current classification of the concrete mixer.', 'TRUE — Held for resale rather than use, the printing press counts as inventory within current assets.'], '4/5', 46, 'full' ),
( '6.1', 'CASE 6.1.047', 'Two-Year Balance Sheet Review 47', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=251 | Total assets=952
Year 2 | Equity=257 | Total assets=1010
[[/CHART]]

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 342 | 363 |
| Machinery | 227 | 247 |
| Office equipment | 55 | 58 |
| Patents, trademarks and licences | 24 | 24 |
| Inventory | 154 | 155 |
| Trade receivables | 76 | 89 |
| Cash and cash equivalents | 74 | 74 |
| Total assets | **952** | **1010** |
| **EQUITY** | | |
| Share capital | 165 | 165 |
| Retained earnings | 86 | 92 |
| Total equity | **251** | **257** |
| **LIABILITIES** | | |
| Long-term bank loan | 403 | 434 |
| Bonds payable | 55 | 60 |
| Trade payables | 218 | 234 |
| Bank overdraft | 25 | 25 |
| Total liabilities | **701** | **753** |
| Total equity and liabilities | **952** | **1010** |

Evaluate the following economic assertions:', ARRAY['Non-current liabilities amount to more than 108.2% of total equity in Year 1.', 'Total equity grew by more than 25.9% between Year 1 and Year 2.', 'Non-current assets make up more than 67.9% of total assets in Year 2.', 'Trade payables of €234 thousand in Year 2 are correctly classified as a current liability, since suppliers are normally expected to be paid within one year.', 'The current ratio in Year 1 is exactly 1.25.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — Non-current liabilities are about 182.5% of equity in Year 1.', 'FALSE — Total equity changed by about 2.4% between the two years.', 'TRUE — Non-current assets are about 68.5% of total assets in Year 2.', 'TRUE — Trade payables are a current liability regardless of the amount.', 'TRUE — Current ratio in Year 1 is 1.25.'], '5/5', 47, 'full' ),
( '6.1', 'CASE 6.1.048', 'Comparative Balance Sheet Analysis 48', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=543 | Total assets=997
Year 2 | Equity=578 | Total assets=1079
[[/CHART]]

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 379 | 410 |
| Machinery | 159 | 176 |
| Office equipment | 30 | 32 |
| Patents, trademarks and licences | 53 | 53 |
| Inventory | 140 | 153 |
| Trade receivables | 128 | 142 |
| Cash and cash equivalents | 108 | 113 |
| Total assets | **997** | **1079** |
| **EQUITY** | | |
| Share capital | 113 | 113 |
| Retained earnings | 430 | 465 |
| Total equity | **543** | **578** |
| **LIABILITIES** | | |
| Long-term bank loan | 280 | 311 |
| Bonds payable | 48 | 51 |
| Trade payables | 72 | 83 |
| Bank overdraft | 54 | 56 |
| Total liabilities | **454** | **501** |
| Total equity and liabilities | **997** | **1079** |

Evaluate the following economic assertions:', ARRAY['Non-current liabilities amount to less than 87.7% of total equity in Year 2.', 'Total equity grew by more than 14.8% between Year 1 and Year 2.', 'Total assets grew by more than 20.1% between Year 1 and Year 2.', 'The combined total of equity and non-current liabilities exceeds non-current assets by more than 39.6% in Year 1.', 'Inventory grew by more than 13.8% between Year 1 and Year 2.'], ARRAY[true, false, false, true, false], ARRAY['TRUE — Non-current liabilities are about 62.6% of equity in Year 2.', 'FALSE — Total equity changed by about 6.4% between the two years.', 'FALSE — Total assets changed by about 8.2% between the two years.', 'TRUE — Long-term financing covers non-current assets by about 40.3% in Year 1.', 'FALSE — Inventory changed by about 9.3% between the two years.'], '5/5', 48, 'full' ),
( '6.1', 'CASE 6.1.049', 'Financial Independence and Equity', 'Consider a coffee roastery that owns its roasting drum for daily production while purchasing green coffee beans on credit from an overseas supplier. Evaluate the following economic assertions:', ARRAY['The same printing press may be a non-current asset for one business and inventory for another, depending on whether it is used or held for sale.', 'A concrete mixer acquired for resale still counts among non-current assets as long as it remains unsold for several months.', 'A concrete mixer used daily in a business''s own operations should be recorded as inventory because it wears out over time.', 'Classifying a printing press as a non-current asset depends on management''s intention to use it in operations rather than to sell it quickly.', 'Once a dealer sells a concrete mixer from its stock, the buyer must continue to record it as inventory.'], ARRAY[true, false, false, true, false], ARRAY['TRUE — Intended use versus resale intent, not physical form, decides whether the printing press is non-current or current.', 'FALSE — Resale intent keeps the concrete mixer in inventory as a current asset regardless of how long it stays unsold.', 'FALSE — Continued operational use makes the concrete mixer a non-current asset; inventory is reserved for goods held for resale.', 'TRUE — An intention to use the printing press over the long term is the deciding factor for non-current classification.', 'FALSE — A buyer intending to use the concrete mixer in operations records it as a non-current asset, not inventory, after purchase.'], '2/5', 49, 'full' ),
( '6.1', 'CASE 6.1.050', 'Balance Sheet Structure Review 50', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=459
Machinery=215
Patents, trademarks and licences=55
Inventory=204
Trade receivables=104
Cash and cash equivalents=57
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 459 |
| Machinery | 215 |
| Office equipment | 53 |
| Patents, trademarks and licences | 55 |
| Inventory | 204 |
| Trade receivables | 104 |
| Cash and cash equivalents | 57 |
| Total assets | **1147** |
| **EQUITY** | |
| Share capital | 271 |
| Retained earnings | 317 |
| Total equity | **588** |
| **LIABILITIES** | |
| Long-term bank loan | 371 |
| Bonds payable | 67 |
| Trade payables | 67 |
| Bank overdraft | 54 |
| Total liabilities | **559** |
| Total equity and liabilities | **1147** |

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.56.', 'Working capital of €244 thousand is positive on this balance sheet.', 'The current ratio is below 0.96.', 'The equity ratio is below 40%.', 'The debt ratio exceeds 71.6%.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Current ratio ≈ 3.02.', 'TRUE — Working capital = 244.', 'FALSE — Current ratio ≈ 3.02.', 'FALSE — Equity ratio ≈ 51.3%.', 'FALSE — Debt ratio ≈ 48.7%.'], '4/5', 50, 'full' ),
( '6.1', 'CASE 6.1.051', 'Liquidity From the Balance Sheet 51', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=369
Current liabilities=151
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 407 |
| Machinery | 133 |
| Office equipment | 47 |
| Patents, trademarks and licences | 62 |
| Inventory | 160 |
| Trade receivables | 115 |
| Cash and cash equivalents | 94 |
| Total assets | **1018** |
| **EQUITY** | |
| Share capital | 209 |
| Retained earnings | 383 |
| Total equity | **592** |
| **LIABILITIES** | |
| Long-term bank loan | 202 |
| Bonds payable | 73 |
| Trade payables | 85 |
| Bank overdraft | 66 |
| Total liabilities | **426** |
| Total equity and liabilities | **1018** |

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.67.', 'Working capital of €218 thousand is positive on this balance sheet.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 0.67 times over.', 'Inventory make up more than 40.6% of current assets.', 'The current ratio is below 0.62.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Current ratio ≈ 2.44.', 'TRUE — Working capital = 218.', 'TRUE — Acid-test ratio ≈ 1.38.', 'TRUE — Inventory are about 43.4% of current assets.', 'FALSE — Current ratio ≈ 2.44.'], '2/5', 51, 'full' ),
( '6.1', 'CASE 6.1.052', 'Gearing From Comparative Figures 52', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=364 | Total assets=1046
Year 2 | Equity=419 | Total assets=1160
[[/CHART]]

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 419 | 463 |
| Machinery | 228 | 264 |
| Office equipment | 38 | 41 |
| Patents, trademarks and licences | 53 | 53 |
| Inventory | 102 | 105 |
| Trade receivables | 148 | 169 |
| Cash and cash equivalents | 58 | 65 |
| Total assets | **1046** | **1160** |
| **EQUITY** | | |
| Share capital | 160 | 160 |
| Retained earnings | 204 | 259 |
| Total equity | **364** | **419** |
| **LIABILITIES** | | |
| Long-term bank loan | 446 | 483 |
| Bonds payable | 52 | 59 |
| Trade payables | 137 | 148 |
| Bank overdraft | 47 | 51 |
| Total liabilities | **682** | **741** |
| Total equity and liabilities | **1046** | **1160** |

Evaluate the following economic assertions:', ARRAY['Non-current liabilities amount to more than 63.6% of total equity in Year 1.', 'Non-current assets make up more than 56.2% of total assets in Year 2.', 'Total equity grew by more than 23.7% between Year 1 and Year 2.', 'Trade payables of €148 thousand in Year 2 are correctly classified as a current liability, since suppliers are normally expected to be paid within one year.', 'Because share capital stayed at €160 thousand in both years, total equity increased by exactly €55 thousand from Year 1 to Year 2, all of it from retained earnings.'], ARRAY[true, true, false, true, true], ARRAY['TRUE — Non-current liabilities are about 136.8% of equity in Year 1.', 'TRUE — Non-current assets are about 70.8% of total assets in Year 2.', 'FALSE — Total equity changed by about 15.1% between the two years.', 'TRUE — Trade payables are a current liability regardless of the amount.', 'TRUE — Equity rose from 364 to 419, an increase of €55 thousand.'], '5/5', 52, 'full' ),
( '6.1', 'CASE 6.1.053', 'Balance Sheet Structure Review 53', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=480
Machinery=233
Patents, trademarks and licences=56
Inventory=243
Trade receivables=148
Cash and cash equivalents=81
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 480 |
| Machinery | 233 |
| Office equipment | 38 |
| Patents, trademarks and licences | 56 |
| Inventory | 243 |
| Trade receivables | 148 |
| Cash and cash equivalents | 81 |
| Total assets | **1279** |
| **EQUITY** | |
| Share capital | 103 |
| Retained earnings | 458 |
| Total equity | **561** |
| **LIABILITIES** | |
| Long-term bank loan | 423 |
| Bonds payable | 72 |
| Trade payables | 198 |
| Bank overdraft | 25 |
| Total liabilities | **718** |
| Total equity and liabilities | **1279** |

Evaluate the following economic assertions:', ARRAY['Working capital of €249 thousand is positive on this balance sheet.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 0.86 times over.', 'The debt ratio exceeds 54.5%.', 'Inventory make up more than 42.3% of current assets.', 'Trade receivables make up less than 45.8% of current assets.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Working capital = 249.', 'TRUE — Acid-test ratio ≈ 1.03.', 'TRUE — Debt ratio ≈ 56.1%.', 'TRUE — Inventory are about 51.5% of current assets.', 'TRUE — Trade receivables are about 31.4% of current assets.'], '5/5', 53, 'full' ),
( '6.1', 'CASE 6.1.054', 'Liquidity From the Balance Sheet 54', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=354
Machinery=239
Patents, trademarks and licences=39
Inventory=209
Trade receivables=100
Cash and cash equivalents=80
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 354 |
| Machinery | 239 |
| Office equipment | 71 |
| Patents, trademarks and licences | 39 |
| Inventory | 209 |
| Trade receivables | 100 |
| Cash and cash equivalents | 80 |
| Total assets | **1092** |
| **EQUITY** | |
| Share capital | 166 |
| Retained earnings | 406 |
| Total equity | **572** |
| **LIABILITIES** | |
| Long-term bank loan | 314 |
| Bonds payable | 72 |
| Trade payables | 85 |
| Bank overdraft | 49 |
| Total liabilities | **520** |
| Total equity and liabilities | **1092** |

Evaluate the following economic assertions:', ARRAY['The current ratio is below 0.61.', 'The current ratio exceeds 1.76.', 'Working capital of €255 thousand is positive on this balance sheet.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 1.09 times over.', 'The equity ratio is below 23.5%.'], ARRAY[false, true, true, true, false], ARRAY['FALSE — Current ratio ≈ 2.90.', 'TRUE — Current ratio ≈ 2.90.', 'TRUE — Working capital = 255.', 'TRUE — Acid-test ratio ≈ 1.34.', 'FALSE — Equity ratio ≈ 52.4%.'], '5/5', 54, 'full' ),
( '6.1', 'CASE 6.1.055', 'Equity as a Buffer for Creditors', 'Review why settlement timing, rather than the size of a debt, determines its current or non-current classification. Evaluate the following economic assertions:', ARRAY['When a printing press is acquired to be resold rather than used, it belongs among current assets as inventory.', 'A printing press bought by a business to support its own daily operations is a tangible fixed asset because it delivers benefit across several accounting periods.', 'A laptop computer used by an operating business is classified as inventory because inventory can include any physical equipment a business owns.', 'A laptop computer held by a dealer for resale to customers is classified as a non-current asset because the dealer is a business rather than a household.', 'A printing press that a dealer displays for sale is not a fixed asset of that dealer.'], ARRAY[true, true, false, false, true], ARRAY['TRUE — Resale intent places the printing press in inventory, a current-asset category.', 'TRUE — Multi-period operational benefit qualifies the printing press as a tangible fixed asset.', 'FALSE — Long-term operational use makes the laptop computer a non-current tangible asset, not inventory.', 'FALSE — Resale intent, not the dealer''s status as a business, places the laptop computer in inventory rather than among non-current assets.', 'TRUE — Stock awaiting sale remains inventory, not a fixed asset, for the dealer holding it.'], '5/5', 55, 'full' ),
( '6.1', 'CASE 6.1.056', 'Why Equity Does Not Require Repayment', 'Analyze how partial repayment due within a year moves part of a long-term loan into current liabilities. Evaluate the following economic assertions:', ARRAY['A conveyor belt kept in service by an operating business for more than one year is classified as a non-current tangible asset.', 'The same laptop computer must always be classified identically on every balance sheet regardless of how it is held.', 'Classifying a laptop computer as a non-current asset depends mainly on its purchase price rather than on management''s intended use.', 'A conveyor belt held by a dealer for resale to customers is classified as inventory, a current asset, rather than a non-current asset.', 'A laptop computer acquired for resale still counts among non-current assets as long as it remains unsold for several months.'], ARRAY[true, false, false, true, false], ARRAY['TRUE — Continued operational use beyond one year makes the conveyor belt a non-current tangible asset.', 'FALSE — Classification of the laptop computer depends on whether it is used or held for resale, so identical items can differ across balance sheets.', 'FALSE — Intended use, not purchase price, drives the non-current classification of the laptop computer.', 'TRUE — Held for resale rather than use, the conveyor belt counts as inventory within current assets.', 'FALSE — Resale intent keeps the laptop computer in inventory as a current asset regardless of how long it stays unsold.'], '4/5', 56, 'full' ),
( '6.1', 'CASE 6.1.057', 'Liquidity From the Balance Sheet 57', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=454
Current liabilities=277
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 433 |
| Machinery | 172 |
| Office equipment | 77 |
| Patents, trademarks and licences | 47 |
| Inventory | 222 |
| Trade receivables | 143 |
| Cash and cash equivalents | 89 |
| Total assets | **1183** |
| **EQUITY** | |
| Share capital | 195 |
| Retained earnings | 473 |
| Total equity | **668** |
| **LIABILITIES** | |
| Long-term bank loan | 187 |
| Bonds payable | 51 |
| Trade payables | 205 |
| Bank overdraft | 72 |
| Total liabilities | **515** |
| Total equity and liabilities | **1183** |

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.74.', 'The current ratio is below 1.03.', 'The equity ratio is below 40.1%.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 0.78 times over.', 'The debt ratio exceeds 70.8%.'], ARRAY[false, false, false, true, false], ARRAY['FALSE — Current ratio ≈ 1.64.', 'FALSE — Current ratio ≈ 1.64.', 'FALSE — Equity ratio ≈ 56.5%.', 'TRUE — Acid-test ratio ≈ 0.84.', 'FALSE — Debt ratio ≈ 43.5%.'], '5/5', 57, 'full' ),
( '6.1', 'CASE 6.1.058', 'Gearing From Comparative Figures 58', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=289 | Total assets=995
Year 2 | Equity=383 | Total assets=1149
[[/CHART]]

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 460 | 537 |
| Machinery | 147 | 167 |
| Office equipment | 39 | 43 |
| Patents, trademarks and licences | 24 | 24 |
| Inventory | 157 | 187 |
| Trade receivables | 85 | 91 |
| Cash and cash equivalents | 83 | 100 |
| Total assets | **995** | **1149** |
| **EQUITY** | | |
| Share capital | 111 | 111 |
| Retained earnings | 178 | 272 |
| Total equity | **289** | **383** |
| **LIABILITIES** | | |
| Long-term bank loan | 388 | 427 |
| Bonds payable | 47 | 52 |
| Trade payables | 212 | 223 |
| Bank overdraft | 59 | 64 |
| Total liabilities | **706** | **766** |
| Total equity and liabilities | **995** | **1149** |

Evaluate the following economic assertions:', ARRAY['Inventory grew by more than 30.4% between Year 1 and Year 2.', 'Total equity grew by more than 21.4% between Year 1 and Year 2.', 'Total assets grew by more than 9% between Year 1 and Year 2.', 'Trade payables grew by more than 16.3% between Year 1 and Year 2.', 'Cash and cash equivalents fell by more than 20.2% between Year 1 and Year 2.'], ARRAY[false, true, true, false, false], ARRAY['FALSE — Inventory changed by about 19.1% between the two years.', 'TRUE — Total equity changed by about 32.5% between the two years.', 'TRUE — Total assets changed by about 15.5% between the two years.', 'FALSE — Trade payables changed by about 5.2% between the two years.', 'FALSE — Cash and cash equivalents changed by about 20.5% between the two years.'], '5/5', 58, 'full' ),
( '6.1', 'CASE 6.1.059', 'Two-Year Balance Sheet Review 59', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=393 | Total assets=1064
Year 2 | Equity=436 | Total assets=1168
[[/CHART]]

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 337 | 372 |
| Machinery | 170 | 197 |
| Office equipment | 33 | 38 |
| Patents, trademarks and licences | 93 | 93 |
| Inventory | 176 | 203 |
| Trade receivables | 149 | 159 |
| Cash and cash equivalents | 106 | 106 |
| Total assets | **1064** | **1168** |
| **EQUITY** | | |
| Share capital | 127 | 127 |
| Retained earnings | 266 | 309 |
| Total equity | **393** | **436** |
| **LIABILITIES** | | |
| Long-term bank loan | 339 | 366 |
| Bonds payable | 55 | 60 |
| Trade payables | 193 | 221 |
| Bank overdraft | 84 | 85 |
| Total liabilities | **671** | **732** |
| Total equity and liabilities | **1064** | **1168** |

Evaluate the following economic assertions:', ARRAY['Total equity grew by more than 22.8% between Year 1 and Year 2.', 'Total assets grew by more than 10.2% between Year 1 and Year 2.', 'Trade payables grew by more than 10.4% between Year 1 and Year 2.', 'Inventory grew by more than 19.7% between Year 1 and Year 2.', 'Non-current liabilities amount to more than 78.1% of total equity in Year 1.'], ARRAY[false, false, true, false, true], ARRAY['FALSE — Total equity changed by about 10.9% between the two years.', 'FALSE — Total assets changed by about 9.8% between the two years.', 'TRUE — Trade payables changed by about 14.5% between the two years.', 'FALSE — Inventory changed by about 15.3% between the two years.', 'TRUE — Non-current liabilities are about 100.3% of equity in Year 1.'], '5/5', 59, 'full' ),
( '6.1', 'CASE 6.1.060', 'Asset Swaps and the Balance Sheet', 'Review how a business''s equity ratio changes when new equity is raised from its owners. Evaluate the following economic assertions:', ARRAY['A laptop computer used daily in a business''s own operations should be recorded as inventory because it wears out over time.', 'Once a dealer sells a laptop computer from its stock, the buyer must continue to record it as inventory.', 'The same conveyor belt may be a non-current asset for one business and inventory for another, depending on whether it is used or held for sale.', 'A refrigerated van used by an operating business is classified as inventory because inventory can include any physical equipment a business owns.', 'A refrigerated van held by a dealer for resale to customers is classified as a non-current asset because the dealer is a business rather than a household.'], ARRAY[false, false, true, false, false], ARRAY['FALSE — Continued operational use makes the laptop computer a non-current asset; inventory is reserved for goods held for resale.', 'FALSE — A buyer intending to use the laptop computer in operations records it as a non-current asset, not inventory, after purchase.', 'TRUE — Intended use versus resale intent, not physical form, decides whether the conveyor belt is non-current or current.', 'FALSE — Long-term operational use makes the refrigerated van a non-current tangible asset, not inventory.', 'FALSE — Resale intent, not the dealer''s status as a business, places the refrigerated van in inventory rather than among non-current assets.'], '5/5', 60, 'full' ),
( '6.1', 'CASE 6.1.061', 'Asset Composition Chart 61', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=420
Machinery=274
Patents, trademarks and licences=26
Inventory=83
Trade receivables=165
Cash and cash equivalents=85
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 420 |
| Machinery | 274 |
| Office equipment | 78 |
| Patents, trademarks and licences | 26 |
| Inventory | 83 |
| Trade receivables | 165 |
| Cash and cash equivalents | 85 |
| Total assets | **1131** |
| **EQUITY** | |
| Share capital | 198 |
| Retained earnings | 600 |
| Total equity | **798** |
| **LIABILITIES** | |
| Long-term bank loan | 181 |
| Bonds payable | 64 |
| Trade payables | 61 |
| Bank overdraft | 27 |
| Total liabilities | **333** |
| Total equity and liabilities | **1131** |

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.88.', 'Working capital of €245 thousand is positive on this balance sheet.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 1.37 times over.', 'The current ratio is below 1.11.', 'The combined total of equity and non-current liabilities exceeds non-current assets by more than 26.2%.'], ARRAY[true, true, true, false, true], ARRAY['TRUE — Current ratio ≈ 3.78.', 'TRUE — Working capital = 245.', 'TRUE — Acid-test ratio ≈ 2.84.', 'FALSE — Current ratio ≈ 3.78.', 'TRUE — Long-term financing covers non-current assets by about 30.7%.'], '5/5', 61, 'full' ),
( '6.1', 'CASE 6.1.062', 'Credit Purchases and Balance Sheet Balance', 'Consider an orchard business that owns tractors for cultivation while holding harvested fruit in cold storage awaiting sale. Evaluate the following economic assertions:', ARRAY['Classifying a conveyor belt as a non-current asset depends on management''s intention to use it in operations rather than to sell it quickly.', 'The same refrigerated van must always be classified identically on every balance sheet regardless of how it is held.', 'Classifying a refrigerated van as a non-current asset depends mainly on its purchase price rather than on management''s intended use.', 'A refrigerated van acquired for resale still counts among non-current assets as long as it remains unsold for several months.', 'A refrigerated van used daily in a business''s own operations should be recorded as inventory because it wears out over time.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — An intention to use the conveyor belt over the long term is the deciding factor for non-current classification.', 'FALSE — Classification of the refrigerated van depends on whether it is used or held for resale, so identical items can differ across balance sheets.', 'FALSE — Intended use, not purchase price, drives the non-current classification of the refrigerated van.', 'FALSE — Resale intent keeps the refrigerated van in inventory as a current asset regardless of how long it stays unsold.', 'FALSE — Continued operational use makes the refrigerated van a non-current asset; inventory is reserved for goods held for resale.'], '4/5', 62, 'full' ),
( '6.1', 'CASE 6.1.063', 'Liquidity From the Balance Sheet 63', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=478
Current liabilities=217
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 463 |
| Machinery | 229 |
| Office equipment | 66 |
| Patents, trademarks and licences | 28 |
| Inventory | 210 |
| Trade receivables | 152 |
| Cash and cash equivalents | 116 |
| Total assets | **1264** |
| **EQUITY** | |
| Share capital | 178 |
| Retained earnings | 574 |
| Total equity | **752** |
| **LIABILITIES** | |
| Long-term bank loan | 231 |
| Bonds payable | 64 |
| Trade payables | 142 |
| Bank overdraft | 75 |
| Total liabilities | **512** |
| Total equity and liabilities | **1264** |

Evaluate the following economic assertions:', ARRAY['The current ratio is below 0.67.', 'The equity ratio is below 21.2%.', 'The debt ratio exceeds 45.8%.', 'The current ratio exceeds 1.17.', 'Working capital of €261 thousand is positive on this balance sheet.'], ARRAY[false, false, false, true, true], ARRAY['FALSE — Current ratio ≈ 2.20.', 'FALSE — Equity ratio ≈ 59.5%.', 'FALSE — Debt ratio ≈ 40.5%.', 'TRUE — Current ratio ≈ 2.20.', 'TRUE — Working capital = 261.'], '5/5', 63, 'full' ),
( '6.1', 'CASE 6.1.064', 'Cash Purchases Versus Credit Purchases', 'Review why the balance sheet reports figures at a single point in time rather than over a period. Evaluate the following economic assertions:', ARRAY['When a conveyor belt is acquired to be resold rather than used, it belongs among current assets as inventory.', 'Once a dealer sells a refrigerated van from its stock, the buyer must continue to record it as inventory.', 'A conveyor belt bought by a business to support its own daily operations is a tangible fixed asset because it delivers benefit across several accounting periods.', 'A conveyor belt that a dealer displays for sale is not a fixed asset of that dealer.', 'An operating licence lacks physical substance but is classified as a non-current intangible asset because it provides expected long-term benefit.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — Resale intent places the conveyor belt in inventory, a current-asset category.', 'FALSE — A buyer intending to use the refrigerated van in operations records it as a non-current asset, not inventory, after purchase.', 'TRUE — Multi-period operational benefit qualifies the conveyor belt as a tangible fixed asset.', 'TRUE — Stock awaiting sale remains inventory, not a fixed asset, for the dealer holding it.', 'TRUE — Long-term expected benefit, not physical form, justifies classifying an operating licence as non-current.'], '5/5', 64, 'full' ),
( '6.1', 'CASE 6.1.065', 'Reclassifying Assets by Intended Use', 'Analyze how total equity and liabilities together must equal total assets. Evaluate the following economic assertions:', ARRAY['A woodworking lathe used by an operating business is classified as inventory because inventory can include any physical equipment a business owns.', 'Although an operating licence cannot be touched, it appears among non-current assets rather than current assets because of its long-term value.', 'An operating licence is recorded as an intangible non-current asset alongside tangible assets such as buildings and machinery.', 'A woodworking lathe held by a dealer for resale to customers is classified as a non-current asset because the dealer is a business rather than a household.', 'The absence of physical form does not prevent an operating licence from being classified as a non-current asset.'], ARRAY[false, true, true, false, true], ARRAY['FALSE — Long-term operational use makes the woodworking lathe a non-current tangible asset, not inventory.', 'TRUE — Long-term value places an intangible operating licence among non-current rather than current assets.', 'TRUE — Intangible and tangible non-current assets, including an operating licence, sit within the same balance sheet section.', 'FALSE — Resale intent, not the dealer''s status as a business, places the woodworking lathe in inventory rather than among non-current assets.', 'TRUE — Physical form is not a requirement for classifying an operating licence as non-current.'], '4/5', 65, 'full' ),
( '6.1', 'CASE 6.1.066', 'Dealer Stock Versus Operating Assets', 'Review why physical form is not a requirement for an item to qualify as a non-current asset. Evaluate the following economic assertions:', ARRAY['The same woodworking lathe must always be classified identically on every balance sheet regardless of how it is held.', 'An operating licence acquired to protect or support a business''s operations over several years is grouped with intangible non-current assets.', 'Classifying a woodworking lathe as a non-current asset depends mainly on its purchase price rather than on management''s intended use.', 'A woodworking lathe acquired for resale still counts among non-current assets as long as it remains unsold for several months.', 'An operating licence is not classified as a current asset because it is not expected to convert into cash within the normal operating cycle.'], ARRAY[false, true, false, false, true], ARRAY['FALSE — Classification of the woodworking lathe depends on whether it is used or held for resale, so identical items can differ across balance sheets.', 'TRUE — Multi-year protective or operational value groups an operating licence with intangible non-current assets.', 'FALSE — Intended use, not purchase price, drives the non-current classification of the woodworking lathe.', 'FALSE — Resale intent keeps the woodworking lathe in inventory as a current asset regardless of how long it stays unsold.', 'TRUE — Because an operating licence is not expected to convert into cash within the operating cycle, it is excluded from current assets.'], '5/5', 66, 'full' ),
( '6.1', 'CASE 6.1.067', 'Same Item Different Classification', 'Consider a metalworking firm that owns specialised cutting equipment while also holding raw steel awaiting use in customer orders. Evaluate the following economic assertions:', ARRAY['A woodworking lathe used daily in a business''s own operations should be recorded as inventory because it wears out over time.', 'A brand name lacks physical substance but is classified as a non-current intangible asset because it provides expected long-term benefit.', 'Once a dealer sells a woodworking lathe from its stock, the buyer must continue to record it as inventory.', 'Although a brand name cannot be touched, it appears among non-current assets rather than current assets because of its long-term value.', 'An espresso machine used by an operating business is classified as inventory because inventory can include any physical equipment a business owns.'], ARRAY[false, true, false, true, false], ARRAY['FALSE — Continued operational use makes the woodworking lathe a non-current asset; inventory is reserved for goods held for resale.', 'TRUE — Long-term expected benefit, not physical form, justifies classifying a brand name as non-current.', 'FALSE — A buyer intending to use the woodworking lathe in operations records it as a non-current asset, not inventory, after purchase.', 'TRUE — Long-term value places an intangible brand name among non-current rather than current assets.', 'FALSE — Long-term operational use makes the espresso machine a non-current tangible asset, not inventory.'], '5/5', 67, 'full' ),
( '6.1', 'CASE 6.1.068', 'Two-Year Balance Sheet Review 68', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=570 | Total assets=1104
Year 2 | Equity=610 | Total assets=1175
[[/CHART]]

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 353 | 360 |
| Machinery | 155 | 162 |
| Office equipment | 53 | 56 |
| Patents, trademarks and licences | 86 | 86 |
| Inventory | 231 | 256 |
| Trade receivables | 147 | 164 |
| Cash and cash equivalents | 79 | 91 |
| Total assets | **1104** | **1175** |
| **EQUITY** | | |
| Share capital | 260 | 260 |
| Retained earnings | 310 | 350 |
| Total equity | **570** | **610** |
| **LIABILITIES** | | |
| Long-term bank loan | 322 | 339 |
| Bonds payable | 76 | 85 |
| Trade payables | 71 | 73 |
| Bank overdraft | 65 | 68 |
| Total liabilities | **534** | **565** |
| Total equity and liabilities | **1104** | **1175** |

Evaluate the following economic assertions:', ARRAY['Total equity grew by more than 24% between Year 1 and Year 2.', 'Non-current liabilities amount to more than 47.7% of total equity in Year 1.', 'Total assets grew by more than 9.5% between Year 1 and Year 2.', 'Inventory grew by more than 32.1% between Year 1 and Year 2.', 'Trade payables grew by more than 22.8% between Year 1 and Year 2.'], ARRAY[false, true, false, false, false], ARRAY['FALSE — Total equity changed by about 7.0% between the two years.', 'TRUE — Non-current liabilities are about 69.8% of equity in Year 1.', 'FALSE — Total assets changed by about 6.4% between the two years.', 'FALSE — Inventory changed by about 10.8% between the two years.', 'FALSE — Trade payables changed by about 2.8% between the two years.'], '5/5', 68, 'full' ),
( '6.1', 'CASE 6.1.069', 'Comparative Balance Sheet Analysis 69', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=487 | Total assets=1091
Year 2 | Equity=536 | Total assets=1177
[[/CHART]]

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 284 | 326 |
| Machinery | 270 | 288 |
| Office equipment | 52 | 56 |
| Patents, trademarks and licences | 75 | 75 |
| Inventory | 235 | 253 |
| Trade receivables | 138 | 141 |
| Cash and cash equivalents | 37 | 38 |
| Total assets | **1091** | **1177** |
| **EQUITY** | | |
| Share capital | 213 | 213 |
| Retained earnings | 274 | 323 |
| Total equity | **487** | **536** |
| **LIABILITIES** | | |
| Long-term bank loan | 241 | 250 |
| Bonds payable | 52 | 56 |
| Trade payables | 229 | 245 |
| Bank overdraft | 82 | 90 |
| Total liabilities | **604** | **641** |
| Total equity and liabilities | **1091** | **1177** |

Evaluate the following economic assertions:', ARRAY['Total equity grew by more than 16% between Year 1 and Year 2.', 'Total assets grew by more than 12.1% between Year 1 and Year 2.', 'Non-current liabilities amount to less than 103.8% of total equity in Year 2.', 'Non-current assets make up more than 61.9% of total assets in Year 2.', 'Current liabilities are covered by current assets less than 1.94 times over in Year 2.'], ARRAY[false, false, true, true, true], ARRAY['FALSE — Total equity changed by about 10.1% between the two years.', 'FALSE — Total assets changed by about 7.9% between the two years.', 'TRUE — Non-current liabilities are about 57.1% of equity in Year 2.', 'TRUE — Non-current assets are about 63.3% of total assets in Year 2.', 'TRUE — Current ratio in Year 2 is about 1.29.'], '5/5', 69, 'full' ),
( '6.1', 'CASE 6.1.070', 'Settlement Timing for Liabilities', 'Review the benefit-period concept underlying non-current asset classification. Evaluate the following economic assertions:', ARRAY['An espresso machine held by a dealer for resale to customers is classified as a non-current asset because the dealer is a business rather than a household.', 'A brand name is recorded as an intangible non-current asset alongside tangible assets such as buildings and machinery.', 'The absence of physical form does not prevent a brand name from being classified as a non-current asset.', 'The same espresso machine must always be classified identically on every balance sheet regardless of how it is held.', 'A brand name acquired to protect or support a business''s operations over several years is grouped with intangible non-current assets.'], ARRAY[false, true, true, false, true], ARRAY['FALSE — Resale intent, not the dealer''s status as a business, places the espresso machine in inventory rather than among non-current assets.', 'TRUE — Intangible and tangible non-current assets, including a brand name, sit within the same balance sheet section.', 'TRUE — Physical form is not a requirement for classifying a brand name as non-current.', 'FALSE — Classification of the espresso machine depends on whether it is used or held for resale, so identical items can differ across balance sheets.', 'TRUE — Multi-year protective or operational value groups a brand name with intangible non-current assets.'], '4/5', 70, 'full' ),
( '6.1', 'CASE 6.1.071', 'Balance Sheet Structure Review 71', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=467
Machinery=166
Patents, trademarks and licences=65
Inventory=183
Trade receivables=162
Cash and cash equivalents=76
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 467 |
| Machinery | 166 |
| Office equipment | 72 |
| Patents, trademarks and licences | 65 |
| Inventory | 183 |
| Trade receivables | 162 |
| Cash and cash equivalents | 76 |
| Total assets | **1191** |
| **EQUITY** | |
| Share capital | 175 |
| Retained earnings | 380 |
| Total equity | **555** |
| **LIABILITIES** | |
| Long-term bank loan | 304 |
| Bonds payable | 78 |
| Trade payables | 178 |
| Bank overdraft | 76 |
| Total liabilities | **636** |
| Total equity and liabilities | **1191** |

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.66.', 'Working capital of €167 thousand is positive on this balance sheet.', 'The current ratio is below 1.25.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 1.11 times over.', 'The equity ratio is below 23.8%.'], ARRAY[false, true, false, false, false], ARRAY['FALSE — Current ratio ≈ 1.66.', 'TRUE — Working capital = 167.', 'FALSE — Current ratio ≈ 1.66.', 'FALSE — Acid-test ratio ≈ 0.94.', 'FALSE — Equity ratio ≈ 46.6%.'], '5/5', 71, 'full' ),
( '6.1', 'CASE 6.1.072', 'Liquidity From the Balance Sheet 72', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=333
Current liabilities=315
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 440 |
| Machinery | 259 |
| Office equipment | 72 |
| Patents, trademarks and licences | 75 |
| Inventory | 140 |
| Trade receivables | 120 |
| Cash and cash equivalents | 73 |
| Total assets | **1179** |
| **EQUITY** | |
| Share capital | 235 |
| Retained earnings | 344 |
| Total equity | **579** |
| **LIABILITIES** | |
| Long-term bank loan | 214 |
| Bonds payable | 71 |
| Trade payables | 242 |
| Bank overdraft | 73 |
| Total liabilities | **600** |
| Total equity and liabilities | **1179** |

Evaluate the following economic assertions:', ARRAY['The current ratio is below 0.65.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 0.72 times over.', 'Working capital of €18 thousand is positive on this balance sheet.', 'Inventory make up more than 32.6% of current assets.', 'The equity ratio is below 28.5%.'], ARRAY[false, false, true, true, false], ARRAY['FALSE — Current ratio ≈ 1.06.', 'FALSE — Acid-test ratio ≈ 0.61.', 'TRUE — Working capital = 18.', 'TRUE — Inventory are about 42.0% of current assets.', 'FALSE — Equity ratio ≈ 49.1%.'], '3/5', 72, 'full' ),
( '6.1', 'CASE 6.1.073', 'Partial Repayment and Reclassification', 'Analyze how amounts owed to suppliers arise from receiving goods or services before paying for them. Evaluate the following economic assertions:', ARRAY['A brand name is not classified as a current asset because it is not expected to convert into cash within the normal operating cycle.', 'A registered design lacks physical substance but is classified as a non-current intangible asset because it provides expected long-term benefit.', 'Although a registered design cannot be touched, it appears among non-current assets rather than current assets because of its long-term value.', 'A registered design is recorded as an intangible non-current asset alongside tangible assets such as buildings and machinery.', 'The absence of physical form does not prevent a registered design from being classified as a non-current asset.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Because a brand name is not expected to convert into cash within the operating cycle, it is excluded from current assets.', 'TRUE — Long-term expected benefit, not physical form, justifies classifying a registered design as non-current.', 'TRUE — Long-term value places an intangible registered design among non-current rather than current assets.', 'TRUE — Intangible and tangible non-current assets, including a registered design, sit within the same balance sheet section.', 'TRUE — Physical form is not a requirement for classifying a registered design as non-current.'], '5/5', 73, 'full' ),
( '6.1', 'CASE 6.1.074', 'Two-Year Balance Sheet Review 74', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=685 | Total assets=1115
Year 2 | Equity=679 | Total assets=1140
[[/CHART]]

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 414 | 416 |
| Machinery | 196 | 193 |
| Office equipment | 46 | 49 |
| Patents, trademarks and licences | 51 | 51 |
| Inventory | 234 | 259 |
| Trade receivables | 66 | 71 |
| Cash and cash equivalents | 108 | 101 |
| Total assets | **1115** | **1140** |
| **EQUITY** | | |
| Share capital | 286 | 286 |
| Retained earnings | 399 | 393 |
| Total equity | **685** | **679** |
| **LIABILITIES** | | |
| Long-term bank loan | 200 | 214 |
| Bonds payable | 80 | 87 |
| Trade payables | 94 | 96 |
| Bank overdraft | 56 | 64 |
| Total liabilities | **430** | **461** |
| Total equity and liabilities | **1115** | **1140** |

Evaluate the following economic assertions:', ARRAY['Total equity grew by more than 14.6% between Year 1 and Year 2.', 'Cash and cash equivalents fell by more than 5.4% between Year 1 and Year 2.', 'Non-current liabilities amount to less than 96.3% of total equity in Year 2.', 'Non-current assets make up more than 57.1% of total assets in Year 2.', 'The combined total of equity and non-current liabilities exceeds non-current assets by more than 27.8% in Year 1.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — Total equity changed by about -0.9% between the two years.', 'TRUE — Cash and cash equivalents changed by about -6.5% between the two years.', 'TRUE — Non-current liabilities are about 44.3% of equity in Year 2.', 'TRUE — Non-current assets are about 62.2% of total assets in Year 2.', 'TRUE — Long-term financing covers non-current assets by about 36.5% in Year 1.'], '5/5', 74, 'full' ),
( '6.1', 'CASE 6.1.075', 'Equity Ratio and Lender Risk', 'Review how comparing amounts owed to suppliers with amounts owed by customers reveals net short-term obligations. Evaluate the following economic assertions:', ARRAY['A registered design acquired to protect or support a business''s operations over several years is grouped with intangible non-current assets.', 'A registered design is not classified as a current asset because it is not expected to convert into cash within the normal operating cycle.', 'A development patent lacks physical substance but is classified as a non-current intangible asset because it provides expected long-term benefit.', 'Classifying an espresso machine as a non-current asset depends mainly on its purchase price rather than on management''s intended use.', 'Although a development patent cannot be touched, it appears among non-current assets rather than current assets because of its long-term value.'], ARRAY[true, true, true, false, true], ARRAY['TRUE — Multi-year protective or operational value groups a registered design with intangible non-current assets.', 'TRUE — Because a registered design is not expected to convert into cash within the operating cycle, it is excluded from current assets.', 'TRUE — Long-term expected benefit, not physical form, justifies classifying a development patent as non-current.', 'FALSE — Intended use, not purchase price, drives the non-current classification of the espresso machine.', 'TRUE — Long-term value places an intangible development patent among non-current rather than current assets.'], '5/5', 75, 'full' ),
( '6.1', 'CASE 6.1.076', 'Gearing From Comparative Figures 76', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=594 | Total assets=1222
Year 2 | Equity=686 | Total assets=1380
[[/CHART]]

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 520 | 604 |
| Machinery | 157 | 184 |
| Office equipment | 33 | 36 |
| Patents, trademarks and licences | 63 | 63 |
| Inventory | 266 | 281 |
| Trade receivables | 84 | 93 |
| Cash and cash equivalents | 99 | 119 |
| Total assets | **1222** | **1380** |
| **EQUITY** | | |
| Share capital | 188 | 188 |
| Retained earnings | 406 | 498 |
| Total equity | **594** | **686** |
| **LIABILITIES** | | |
| Long-term bank loan | 273 | 293 |
| Bonds payable | 66 | 71 |
| Trade payables | 203 | 232 |
| Bank overdraft | 86 | 98 |
| Total liabilities | **628** | **694** |
| Total equity and liabilities | **1222** | **1380** |

Evaluate the following economic assertions:', ARRAY['Total equity grew by more than 14.4% between Year 1 and Year 2.', 'Non-current liabilities amount to more than 54.8% of total equity in Year 1.', 'The combined total of equity and non-current liabilities exceeds non-current assets by more than 10.5% in Year 1.', 'Trade payables of €232 thousand in Year 2 are correctly classified as a current liability, since suppliers are normally expected to be paid within one year.', 'Because share capital stayed at €188 thousand in both years, total equity increased by exactly €92 thousand from Year 1 to Year 2, all of it from retained earnings.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Total equity changed by about 15.5% between the two years.', 'TRUE — Non-current liabilities are about 57.1% of equity in Year 1.', 'TRUE — Long-term financing covers non-current assets by about 20.7% in Year 1.', 'TRUE — Trade payables are a current liability regardless of the amount.', 'TRUE — Equity rose from 594 to 686, an increase of €92 thousand.'], '3/5', 76, 'full' ),
( '6.1', 'CASE 6.1.077', 'Balance Sheet Structure Review 77', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=325
Machinery=168
Patents, trademarks and licences=77
Inventory=83
Trade receivables=99
Cash and cash equivalents=39
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 325 |
| Machinery | 168 |
| Office equipment | 33 |
| Patents, trademarks and licences | 77 |
| Inventory | 83 |
| Trade receivables | 99 |
| Cash and cash equivalents | 39 |
| Total assets | **824** |
| **EQUITY** | |
| Share capital | 190 |
| Retained earnings | 73 |
| Total equity | **263** |
| **LIABILITIES** | |
| Long-term bank loan | 314 |
| Bonds payable | 63 |
| Trade payables | 155 |
| Bank overdraft | 29 |
| Total liabilities | **561** |
| Total equity and liabilities | **824** |

Evaluate the following economic assertions:', ARRAY['The current ratio is below 0.77.', 'The current ratio exceeds 1.02.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 1.27 times over.', 'The debt ratio exceeds 70.9%.', 'Inventory make up more than 38.7% of current assets.'], ARRAY[false, true, false, false, false], ARRAY['FALSE — Current ratio ≈ 1.20.', 'TRUE — Current ratio ≈ 1.20.', 'FALSE — Acid-test ratio ≈ 0.75.', 'FALSE — Debt ratio ≈ 68.1%.', 'FALSE — Inventory are about 37.6% of current assets.'], '3/5', 77, 'full' ),
( '6.1', 'CASE 6.1.078', 'Raising Equity Versus Taking on Debt', 'Consider a dairy processor that owns its pasteurising equipment while owing suppliers for recently delivered packaging materials. Evaluate the following economic assertions:', ARRAY['A development patent is recorded as an intangible non-current asset alongside tangible assets such as buildings and machinery.', 'An espresso machine acquired for resale still counts among non-current assets as long as it remains unsold for several months.', 'An espresso machine used daily in a business''s own operations should be recorded as inventory because it wears out over time.', 'Once a dealer sells an espresso machine from its stock, the buyer must continue to record it as inventory.', 'A printing press used by an operating business is classified as inventory because inventory can include any physical equipment a business owns.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Intangible and tangible non-current assets, including a development patent, sit within the same balance sheet section.', 'FALSE — Resale intent keeps the espresso machine in inventory as a current asset regardless of how long it stays unsold.', 'FALSE — Continued operational use makes the espresso machine a non-current asset; inventory is reserved for goods held for resale.', 'FALSE — A buyer intending to use the espresso machine in operations records it as a non-current asset, not inventory, after purchase.', 'FALSE — Long-term operational use makes the printing press a non-current tangible asset, not inventory.'], '5/5', 78, 'full' ),
( '6.1', 'CASE 6.1.079', 'Asset Composition Chart 79', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=367
Current liabilities=231
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 454 |
| Machinery | 160 |
| Office equipment | 69 |
| Patents, trademarks and licences | 30 |
| Inventory | 222 |
| Trade receivables | 96 |
| Cash and cash equivalents | 49 |
| Total assets | **1080** |
| **EQUITY** | |
| Share capital | 185 |
| Retained earnings | 307 |
| Total equity | **492** |
| **LIABILITIES** | |
| Long-term bank loan | 273 |
| Bonds payable | 84 |
| Trade payables | 171 |
| Bank overdraft | 60 |
| Total liabilities | **588** |
| Total equity and liabilities | **1080** |

Evaluate the following economic assertions:', ARRAY['The current ratio is below 1.05.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 1.3 times over.', 'The current ratio exceeds 1.29.', 'Working capital of €136 thousand is positive on this balance sheet.', 'The debt ratio exceeds 51.5%.'], ARRAY[false, false, true, true, true], ARRAY['FALSE — Current ratio ≈ 1.59.', 'FALSE — Acid-test ratio ≈ 0.63.', 'TRUE — Current ratio ≈ 1.59.', 'TRUE — Working capital = 136.', 'TRUE — Debt ratio ≈ 54.4%.'], '4/5', 79, 'full' ),
( '6.1', 'CASE 6.1.080', 'Two-Year Balance Sheet Review 80', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=343 | Total assets=944
Year 2 | Equity=319 | Total assets=999
[[/CHART]]

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 292 | 307 |
| Machinery | 170 | 182 |
| Office equipment | 52 | 56 |
| Patents, trademarks and licences | 98 | 98 |
| Inventory | 142 | 156 |
| Trade receivables | 144 | 155 |
| Cash and cash equivalents | 46 | 45 |
| Total assets | **944** | **999** |
| **EQUITY** | | |
| Share capital | 161 | 161 |
| Retained earnings | 182 | 158 |
| Total equity | **343** | **319** |
| **LIABILITIES** | | |
| Long-term bank loan | 367 | 418 |
| Bonds payable | 43 | 47 |
| Trade payables | 123 | 138 |
| Bank overdraft | 68 | 77 |
| Total liabilities | **601** | **680** |
| Total equity and liabilities | **944** | **999** |

Evaluate the following economic assertions:', ARRAY['Non-current liabilities amount to more than 102.2% of total equity in Year 1.', 'Total assets grew by more than 19% between Year 1 and Year 2.', 'Non-current assets make up more than 64.2% of total assets in Year 2.', 'Inventory grew by more than 20.1% between Year 1 and Year 2.', 'The combined total of equity and non-current liabilities exceeds non-current assets by more than 22.5% in Year 1.'], ARRAY[true, false, true, false, true], ARRAY['TRUE — Non-current liabilities are about 119.5% of equity in Year 1.', 'FALSE — Total assets changed by about 5.8% between the two years.', 'TRUE — Non-current assets are about 64.4% of total assets in Year 2.', 'FALSE — Inventory changed by about 9.9% between the two years.', 'TRUE — Long-term financing covers non-current assets by about 23.0% in Year 1.'], '3/5', 80, 'full' ),
( '6.1', 'CASE 6.1.081', 'Comparative Balance Sheet Analysis 81', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=866 | Total assets=1381
Year 2 | Equity=987 | Total assets=1546
[[/CHART]]

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 516 | 575 |
| Machinery | 247 | 293 |
| Office equipment | 71 | 78 |
| Patents, trademarks and licences | 94 | 94 |
| Inventory | 274 | 300 |
| Trade receivables | 85 | 96 |
| Cash and cash equivalents | 94 | 110 |
| Total assets | **1381** | **1546** |
| **EQUITY** | | |
| Share capital | 211 | 211 |
| Retained earnings | 655 | 776 |
| Total equity | **866** | **987** |
| **LIABILITIES** | | |
| Long-term bank loan | 235 | 256 |
| Bonds payable | 87 | 97 |
| Trade payables | 116 | 125 |
| Bank overdraft | 77 | 81 |
| Total liabilities | **515** | **559** |
| Total equity and liabilities | **1381** | **1546** |

Evaluate the following economic assertions:', ARRAY['Total assets grew by more than 15.2% between Year 1 and Year 2.', 'Trade payables grew by more than 10.1% between Year 1 and Year 2.', 'Cash and cash equivalents fell by more than 23.2% between Year 1 and Year 2.', 'The equity ratio improved by more than 8.1 percentage points between Year 1 and Year 2.', 'Total equity grew by more than 13.1% between Year 1 and Year 2.'], ARRAY[false, false, false, false, true], ARRAY['FALSE — Total assets changed by about 11.9% between the two years.', 'FALSE — Trade payables changed by about 7.8% between the two years.', 'FALSE — Cash and cash equivalents changed by about 17.0% between the two years.', 'FALSE — Equity ratio moved from 62.7% to 63.8%.', 'TRUE — Total equity changed by about 14.0% between the two years.'], '4/5', 81, 'full' ),
( '6.1', 'CASE 6.1.082', 'Asset Composition Chart 82', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=310
Machinery=152
Patents, trademarks and licences=35
Inventory=83
Trade receivables=138
Cash and cash equivalents=88
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 310 |
| Machinery | 152 |
| Office equipment | 39 |
| Patents, trademarks and licences | 35 |
| Inventory | 83 |
| Trade receivables | 138 |
| Cash and cash equivalents | 88 |
| Total assets | **845** |
| **EQUITY** | |
| Share capital | 189 |
| Retained earnings | 115 |
| Total equity | **304** |
| **LIABILITIES** | |
| Long-term bank loan | 239 |
| Bonds payable | 41 |
| Trade payables | 211 |
| Bank overdraft | 50 |
| Total liabilities | **541** |
| Total equity and liabilities | **845** |

Evaluate the following economic assertions:', ARRAY['Working capital of €48 thousand is positive on this balance sheet.', 'The equity ratio is below 37.5%.', 'Cash and cash equivalents make up more than 15.2% of current assets.', 'Inventory of €83 thousand is correctly classified as a current asset rather than a non-current intangible asset.', 'The acid-test ratio is exactly 0.87.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Working capital = 48.', 'TRUE — Equity ratio ≈ 36.0%.', 'TRUE — Cash and cash equivalents are about 28.5% of current assets.', 'TRUE — Inventory is always a current asset.', 'TRUE — Acid-test ratio ≈ 0.87.'], '5/5', 82, 'full' ),
( '6.1', 'CASE 6.1.083', 'Balance Sheet as a Point in Time', 'Review how a piece of equipment used in daily operations differs in classification from an identical item held for resale. Evaluate the following economic assertions:', ARRAY['A printing press held by a dealer for resale to customers is classified as a non-current asset because the dealer is a business rather than a household.', 'The same printing press must always be classified identically on every balance sheet regardless of how it is held.', 'The absence of physical form does not prevent a development patent from being classified as a non-current asset.', 'A development patent acquired to protect or support a business''s operations over several years is grouped with intangible non-current assets.', 'A development patent is not classified as a current asset because it is not expected to convert into cash within the normal operating cycle.'], ARRAY[false, false, true, true, true], ARRAY['FALSE — Resale intent, not the dealer''s status as a business, places the printing press in inventory rather than among non-current assets.', 'FALSE — Classification of the printing press depends on whether it is used or held for resale, so identical items can differ across balance sheets.', 'TRUE — Physical form is not a requirement for classifying a development patent as non-current.', 'TRUE — Multi-year protective or operational value groups a development patent with intangible non-current assets.', 'TRUE — Because a development patent is not expected to convert into cash within the operating cycle, it is excluded from current assets.'], '4/5', 83, 'full' ),
( '6.1', 'CASE 6.1.084', 'Share Price and Market Capitalisation 84', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=29
February | Price=28
March | Price=24
April | Price=23
May | Price=20
June | Price=17
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=78000
February | Volume=29000
March | Volume=92000
April | Volume=18000
May | Volume=83000
June | Volume=50000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 29 | 78,000 |
| February | 28 | 29,000 |
| March | 24 | 92,000 |
| April | 23 | 18,000 |
| May | 20 | 83,000 |
| June | 17 | 50,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 279 |
| Shares outstanding | 641,000 |
| Total shares traded (six months) | 350,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €9 million.', 'Earnings per share exceeds €0.33.', 'Highest closing price is more than 17.1% above the lowest.', 'Total shares traded over six months exceed 25.2% of shares outstanding.', 'Peak monthly share turnover exceeds 56,921 shares.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Market capitalisation ≈ €10.9 million.', 'TRUE — Earnings per share ≈ €0.44.', 'TRUE — Range €17–€29.', 'TRUE — Turnover ≈ 54.6% of shares outstanding.', 'TRUE — Peak monthly volume = 92,000.'], '3/5', 84, 'full' ),
( '6.1', 'CASE 6.1.085', 'Listed Company Performance Charts 85', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=38
February | Price=38
March | Price=38
April | Price=40
May | Price=42
June | Price=48
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=19000
February | Volume=26000
March | Volume=83000
April | Volume=53000
May | Volume=68000
June | Volume=77000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 38 | 19,000 |
| February | 38 | 26,000 |
| March | 38 | 83,000 |
| April | 40 | 53,000 |
| May | 42 | 68,000 |
| June | 48 | 77,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 234 |
| Shares outstanding | 692,000 |
| Total shares traded (six months) | 326,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 26% from first to last month.', 'Market capitalisation at the last month exceeds €31.5 million.', 'Earnings per share exceeds €0.28.', 'Total shares traded over six months exceed 17.9% of shares outstanding.', 'Peak monthly share turnover exceeds 64,359 shares.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Price change ≈ 26.3%.', 'TRUE — Market capitalisation ≈ €33.2 million.', 'TRUE — Earnings per share ≈ €0.34.', 'TRUE — Turnover ≈ 47.1% of shares outstanding.', 'TRUE — Peak monthly volume = 83,000.'], '2/5', 85, 'full' ),
( '6.1', 'CASE 6.1.086', 'Total Equity and Liabilities Identity', 'Analyze how a licence held for long-term use is classified as an intangible non-current asset. Evaluate the following economic assertions:', ARRAY['Classifying a printing press as a non-current asset depends mainly on its purchase price rather than on management''s intended use.', 'A printing press acquired for resale still counts among non-current assets as long as it remains unsold for several months.', 'A trading permit lacks physical substance but is classified as a non-current intangible asset because it provides expected long-term benefit.', 'Although a trading permit cannot be touched, it appears among non-current assets rather than current assets because of its long-term value.', 'A printing press used daily in a business''s own operations should be recorded as inventory because it wears out over time.'], ARRAY[false, false, true, true, false], ARRAY['FALSE — Intended use, not purchase price, drives the non-current classification of the printing press.', 'FALSE — Resale intent keeps the printing press in inventory as a current asset regardless of how long it stays unsold.', 'TRUE — Long-term expected benefit, not physical form, justifies classifying a trading permit as non-current.', 'TRUE — Long-term value places an intangible trading permit among non-current rather than current assets.', 'FALSE — Continued operational use makes the printing press a non-current asset; inventory is reserved for goods held for resale.'], '3/5', 86, 'full' ),
( '6.1', 'CASE 6.1.087', 'Share Price and Market Capitalisation 87', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=25
February | Price=25
March | Price=25
April | Price=24
May | Price=24
June | Price=29
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=34000
February | Volume=58000
March | Volume=66000
April | Volume=73000
May | Volume=24000
June | Volume=44000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 25 | 34,000 |
| February | 25 | 58,000 |
| March | 25 | 66,000 |
| April | 24 | 73,000 |
| May | 24 | 24,000 |
| June | 29 | 44,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 252 |
| Shares outstanding | 408,000 |
| Total shares traded (six months) | 299,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €9.9 million.', 'Earnings per share exceeds €0.53.', 'Total shares traded over six months exceed 23.2% of shares outstanding.', 'Peak monthly share turnover exceeds 46,844 shares.', 'Shares outstanding equal 408,000.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Market capitalisation ≈ €11.8 million.', 'TRUE — Earnings per share ≈ €0.62.', 'TRUE — Turnover ≈ 73.3% of shares outstanding.', 'TRUE — Peak monthly volume = 73,000.', 'TRUE — Shares outstanding = 408,000.'], '4/5', 87, 'full' ),
( '6.1', 'CASE 6.1.088', 'Physical Form and Asset Classification', 'Review how a customer relationship acquired in a takeover can be recognised as an intangible non-current asset. Evaluate the following economic assertions:', ARRAY['Once a dealer sells a printing press from its stock, the buyer must continue to record it as inventory.', 'A trading permit is recorded as an intangible non-current asset alongside tangible assets such as buildings and machinery.', 'The absence of physical form does not prevent a trading permit from being classified as a non-current asset.', 'A conveyor belt used by an operating business is classified as inventory because inventory can include any physical equipment a business owns.', 'A trading permit acquired to protect or support a business''s operations over several years is grouped with intangible non-current assets.'], ARRAY[false, true, true, false, true], ARRAY['FALSE — A buyer intending to use the printing press in operations records it as a non-current asset, not inventory, after purchase.', 'TRUE — Intangible and tangible non-current assets, including a trading permit, sit within the same balance sheet section.', 'TRUE — Physical form is not a requirement for classifying a trading permit as non-current.', 'FALSE — Long-term operational use makes the conveyor belt a non-current tangible asset, not inventory.', 'TRUE — Multi-year protective or operational value groups a trading permit with intangible non-current assets.'], '2/5', 88, 'full' ),
( '6.1', 'CASE 6.1.089', 'Earnings Per Share From Reported Figures 89', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=24
February | Price=26
March | Price=27
April | Price=29
May | Price=31
June | Price=31
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=89000
February | Volume=59000
March | Volume=72000
April | Volume=20000
May | Volume=65000
June | Volume=52000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 24 | 89,000 |
| February | 26 | 59,000 |
| March | 27 | 72,000 |
| April | 29 | 20,000 |
| May | 31 | 65,000 |
| June | 31 | 52,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 249 |
| Shares outstanding | 559,000 |
| Total shares traded (six months) | 357,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation rose by more than 34.2% over the period.', 'Share turnover peaked in the same month as the highest closing price.', 'The closing share price rose by more than 19.6% from first to last month.', 'The last closing price is below the first.', 'Operating result is below €211 thousand.'], ARRAY[false, false, true, false, false], ARRAY['FALSE — €13.4m → €17.3m.', 'FALSE — Peak price month vs peak volume month.', 'TRUE — Price change ≈ 29.2%.', 'FALSE — 24 → 31.', 'FALSE — Operating result = 249.'], '5/5', 89, 'full' ),
( '6.1', 'CASE 6.1.090', 'Share Price and Market Capitalisation 90', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=36
February | Price=33
March | Price=31
April | Price=29
May | Price=29
June | Price=29
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=26000
February | Volume=48000
March | Volume=44000
April | Volume=45000
May | Volume=84000
June | Volume=22000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 36 | 26,000 |
| February | 33 | 48,000 |
| March | 31 | 44,000 |
| April | 29 | 45,000 |
| May | 29 | 84,000 |
| June | 29 | 22,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 193 |
| Shares outstanding | 718,000 |
| Total shares traded (six months) | 269,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €16.7 million.', 'Earnings per share exceeds €0.19.', 'Total shares traded over six months exceed 12.6% of shares outstanding.', 'Peak monthly share turnover exceeds 51,097 shares.', 'Shares outstanding equal 718,000.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Market capitalisation ≈ €20.8 million.', 'TRUE — Earnings per share ≈ €0.27.', 'TRUE — Turnover ≈ 37.5% of shares outstanding.', 'TRUE — Peak monthly volume = 84,000.', 'TRUE — Shares outstanding = 718,000.'], '5/5', 90, 'full' ),
( '6.1', 'CASE 6.1.091', 'Listed Company Performance Charts 91', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=21
February | Price=20
March | Price=20
April | Price=19
May | Price=19
June | Price=24
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=27000
February | Volume=45000
March | Volume=51000
April | Volume=67000
May | Volume=49000
June | Volume=93000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 21 | 27,000 |
| February | 20 | 45,000 |
| March | 20 | 51,000 |
| April | 19 | 67,000 |
| May | 19 | 49,000 |
| June | 24 | 93,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 231 |
| Shares outstanding | 501,000 |
| Total shares traded (six months) | 332,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €9.4 million.', 'The closing share price rose by more than 22.1% from first to last month.', 'Market capitalisation rose by more than 29.7% over the period.', 'Earnings per share exceeds €0.38.', 'Highest closing price is more than 39.9% above the lowest.'], ARRAY[true, false, false, true, false], ARRAY['TRUE — Market capitalisation ≈ €12.0 million.', 'FALSE — Price change ≈ 14.3%.', 'FALSE — €10.5m → €12.0m.', 'TRUE — Earnings per share ≈ €0.46.', 'FALSE — Range €19–€24.'], '5/5', 91, 'full' ),
( '6.1', 'CASE 6.1.092', 'Earnings Per Share From Reported Figures 92', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=35
February | Price=37
March | Price=37
April | Price=41
May | Price=41
June | Price=42
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=29000
February | Volume=71000
March | Volume=50000
April | Volume=81000
May | Volume=89000
June | Volume=74000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 35 | 29,000 |
| February | 37 | 71,000 |
| March | 37 | 50,000 |
| April | 41 | 81,000 |
| May | 41 | 89,000 |
| June | 42 | 74,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 305 |
| Shares outstanding | 703,000 |
| Total shares traded (six months) | 394,000 |

Evaluate the following economic assertions:', ARRAY['Highest closing price is more than 38.5% above the lowest.', 'The closing share price rose by more than 11.5% from first to last month.', 'Market capitalisation at the last month exceeds €22.8 million.', 'Market capitalisation rose by more than 12.1% over the period.', 'Earnings per share exceeds €0.32.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — Range €35–€42.', 'TRUE — Price change ≈ 20.0%.', 'TRUE — Market capitalisation ≈ €29.5 million.', 'TRUE — €24.6m → €29.5m.', 'TRUE — Earnings per share ≈ €0.43.'], '5/5', 92, 'full' ),
( '6.1', 'CASE 6.1.093', 'Operating Cycle and Current Assets', 'Consider a private clinic that owns its diagnostic scanners while settling invoices from medical suppliers on standard credit terms. Evaluate the following economic assertions:', ARRAY['A trading permit is not classified as a current asset because it is not expected to convert into cash within the normal operating cycle.', 'A service mark lacks physical substance but is classified as a non-current intangible asset because it provides expected long-term benefit.', 'Although a service mark cannot be touched, it appears among non-current assets rather than current assets because of its long-term value.', 'A service mark is recorded as an intangible non-current asset alongside tangible assets such as buildings and machinery.', 'The absence of physical form does not prevent a service mark from being classified as a non-current asset.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Because a trading permit is not expected to convert into cash within the operating cycle, it is excluded from current assets.', 'TRUE — Long-term expected benefit, not physical form, justifies classifying a service mark as non-current.', 'TRUE — Long-term value places an intangible service mark among non-current rather than current assets.', 'TRUE — Intangible and tangible non-current assets, including a service mark, sit within the same balance sheet section.', 'TRUE — Physical form is not a requirement for classifying a service mark as non-current.'], '5/5', 93, 'full' ),
( '6.1', 'CASE 6.1.094', 'Benefit Period and Non-Current Assets', 'Review how a bank overdraft is classified as a current liability. Evaluate the following economic assertions:', ARRAY['A service mark acquired to protect or support a business''s operations over several years is grouped with intangible non-current assets.', 'A service mark is not classified as a current asset because it is not expected to convert into cash within the normal operating cycle.', 'A proprietary formula lacks physical substance but is classified as a non-current intangible asset because it provides expected long-term benefit.', 'Although a proprietary formula cannot be touched, it appears among non-current assets rather than current assets because of its long-term value.', 'A conveyor belt held by a dealer for resale to customers is classified as a non-current asset because the dealer is a business rather than a household.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Multi-year protective or operational value groups a service mark with intangible non-current assets.', 'TRUE — Because a service mark is not expected to convert into cash within the operating cycle, it is excluded from current assets.', 'TRUE — Long-term expected benefit, not physical form, justifies classifying a proprietary formula as non-current.', 'TRUE — Long-term value places an intangible proprietary formula among non-current rather than current assets.', 'FALSE — Resale intent, not the dealer''s status as a business, places the conveyor belt in inventory rather than among non-current assets.'], '5/5', 94, 'full' ),
( '6.1', 'CASE 6.1.095', 'Earnings Per Share From Reported Figures 95', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=41
February | Price=41
March | Price=39
April | Price=40
May | Price=42
June | Price=49
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=49000
February | Volume=70000
March | Volume=63000
April | Volume=44000
May | Volume=66000
June | Volume=47000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 41 | 49,000 |
| February | 41 | 70,000 |
| March | 39 | 63,000 |
| April | 40 | 44,000 |
| May | 42 | 66,000 |
| June | 49 | 47,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 265 |
| Shares outstanding | 646,000 |
| Total shares traded (six months) | 339,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 10.2% from first to last month.', 'Market capitalisation at the last month exceeds €28.7 million.', 'Total shares traded over six months exceed 27.6% of shares outstanding.', 'Market capitalisation rose by more than 22.4% over the period.', 'Peak monthly share turnover exceeds 61,528 shares.'], ARRAY[true, true, true, false, true], ARRAY['TRUE — Price change ≈ 19.5%.', 'TRUE — Market capitalisation ≈ €31.7 million.', 'TRUE — Turnover ≈ 52.5% of shares outstanding.', 'FALSE — €26.5m → €31.7m.', 'TRUE — Peak monthly volume = 70,000.'], '3/5', 95, 'full' ),
( '6.1', 'CASE 6.1.096', 'Share Price and Market Capitalisation 96', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=20
February | Price=20
March | Price=21
April | Price=20
May | Price=19
June | Price=24
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=40000
February | Volume=70000
March | Volume=75000
April | Volume=38000
May | Volume=90000
June | Volume=73000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 20 | 40,000 |
| February | 20 | 70,000 |
| March | 21 | 75,000 |
| April | 20 | 38,000 |
| May | 19 | 90,000 |
| June | 24 | 73,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 235 |
| Shares outstanding | 423,000 |
| Total shares traded (six months) | 386,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 29.5% from first to last month.', 'Market capitalisation rose by more than 23.8% over the period.', 'Earnings per share exceeds €0.45.', 'Highest closing price is more than 31.4% above the lowest.', 'Closing price rose in more than half of the month-to-month steps.'], ARRAY[false, false, true, false, false], ARRAY['FALSE — Price change ≈ 20.0%.', 'FALSE — €8.5m → €10.2m.', 'TRUE — Earnings per share ≈ €0.56.', 'FALSE — Range €19–€24.', 'FALSE — Rose in 2 of 5 steps.'], '4/5', 96, 'full' ),
( '6.1', 'CASE 6.1.097', 'Listed Company Performance Charts 97', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=25
February | Price=23
March | Price=23
April | Price=23
May | Price=22
June | Price=28
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=59000
February | Volume=52000
March | Volume=30000
April | Volume=33000
May | Volume=37000
June | Volume=36000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 25 | 59,000 |
| February | 23 | 52,000 |
| March | 23 | 30,000 |
| April | 23 | 33,000 |
| May | 22 | 37,000 |
| June | 28 | 36,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 225 |
| Shares outstanding | 602,000 |
| Total shares traded (six months) | 247,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 13.1% from first to last month.', 'Highest closing price is more than 35.6% above the lowest.', 'Operating result is below €205 thousand.', 'Market capitalisation at the last month exceeds €12.7 million.', 'Lowest monthly share turnover is under half of the peak month.'], ARRAY[false, false, false, true, false], ARRAY['FALSE — Price change ≈ 12.0%.', 'FALSE — Range €22–€28.', 'FALSE — Operating result = 225.', 'TRUE — Market capitalisation ≈ €16.9 million.', 'FALSE — Low 30,000 vs peak 59,000.'], '4/5', 97, 'full' ),
( '6.1', 'CASE 6.1.098', 'Supplier Credit and Payables', 'Analyze how wages payable to employees are classified as a current liability. Evaluate the following economic assertions:', ARRAY['The same conveyor belt must always be classified identically on every balance sheet regardless of how it is held.', 'A proprietary formula is recorded as an intangible non-current asset alongside tangible assets such as buildings and machinery.', 'The absence of physical form does not prevent a proprietary formula from being classified as a non-current asset.', 'Classifying a conveyor belt as a non-current asset depends mainly on its purchase price rather than on management''s intended use.', 'A conveyor belt acquired for resale still counts among non-current assets as long as it remains unsold for several months.'], ARRAY[false, true, true, false, false], ARRAY['FALSE — Classification of the conveyor belt depends on whether it is used or held for resale, so identical items can differ across balance sheets.', 'TRUE — Intangible and tangible non-current assets, including a proprietary formula, sit within the same balance sheet section.', 'TRUE — Physical form is not a requirement for classifying a proprietary formula as non-current.', 'FALSE — Intended use, not purchase price, drives the non-current classification of the conveyor belt.', 'FALSE — Resale intent keeps the conveyor belt in inventory as a current asset regardless of how long it stays unsold.'], '3/5', 98, 'full' ),
( '6.1', 'CASE 6.1.099', 'Comparing Payables and Receivables', 'Review how tax payable to the authorities is classified as a current liability. Evaluate the following economic assertions:', ARRAY['A conveyor belt used daily in a business''s own operations should be recorded as inventory because it wears out over time.', 'Once a dealer sells a conveyor belt from its stock, the buyer must continue to record it as inventory.', 'An operating licence is excluded from non-current assets because it has no physical substance.', 'A proprietary formula acquired to protect or support a business''s operations over several years is grouped with intangible non-current assets.', 'A proprietary formula is not classified as a current asset because it is not expected to convert into cash within the normal operating cycle.'], ARRAY[false, false, false, true, true], ARRAY['FALSE — Continued operational use makes the conveyor belt a non-current asset; inventory is reserved for goods held for resale.', 'FALSE — A buyer intending to use the conveyor belt in operations records it as a non-current asset, not inventory, after purchase.', 'FALSE — Physical substance is not required for non-current classification; an operating licence qualifies through its long-term value.', 'TRUE — Multi-year protective or operational value groups a proprietary formula with intangible non-current assets.', 'TRUE — Because a proprietary formula is not expected to convert into cash within the operating cycle, it is excluded from current assets.'], '5/5', 99, 'full' ),
( '6.1', 'CASE 6.1.100', 'Listed Company Performance Charts 100', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=16
February | Price=15
March | Price=14
April | Price=13
May | Price=12
June | Price=11
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=61000
February | Volume=33000
March | Volume=56000
April | Volume=54000
May | Volume=77000
June | Volume=55000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 16 | 61,000 |
| February | 15 | 33,000 |
| March | 14 | 56,000 |
| April | 13 | 54,000 |
| May | 12 | 77,000 |
| June | 11 | 55,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 184 |
| Shares outstanding | 464,000 |
| Total shares traded (six months) | 336,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €4 million.', 'Earnings per share exceeds €0.29.', 'Highest closing price is more than 30.4% above the lowest.', 'Total shares traded over six months exceed 39.2% of shares outstanding.', 'Peak monthly share turnover exceeds 50,599 shares.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Market capitalisation ≈ €5.1 million.', 'TRUE — Earnings per share ≈ €0.40.', 'TRUE — Range €11–€16.', 'TRUE — Turnover ≈ 72.4% of shares outstanding.', 'TRUE — Peak monthly volume = 77,000.'], '2/5', 100, 'full' ),
( '6.1', 'CASE 6.1.101', 'Vehicles as Fixed or Resale Assets', 'Consider a coffee roastery that owns its roasting drum for daily production while purchasing green coffee beans on credit from an overseas supplier. Evaluate the following economic assertions:', ARRAY['An operating licence is classified as a current asset because, being intangible, it is easily converted into cash within a year.', 'Because an operating licence cannot be touched, it is recorded as an expense rather than as an asset on the balance sheet.', 'A concession right lacks physical substance but is classified as a non-current intangible asset because it provides expected long-term benefit.', 'Non-current assets can never include an operating licence because that section is reserved strictly for tangible items such as machinery.', 'An operating licence is treated as inventory because it is intended for use rather than for display.'], ARRAY[false, false, true, false, false], ARRAY['FALSE — An operating licence is a non-current intangible asset because it provides benefit over several years, not because it converts to cash quickly.', 'FALSE — An operating licence with expected long-term benefit is recorded as an intangible non-current asset, not expensed immediately.', 'TRUE — Long-term expected benefit, not physical form, justifies classifying a concession right as non-current.', 'FALSE — The non-current assets section includes intangible items such as an operating licence alongside tangible assets.', 'FALSE — Long-term exclusive use, not physical display, places an operating licence among non-current intangible assets, not inventory.'], '3/5', 101, 'full' ),
( '6.1', 'CASE 6.1.102', 'Cranes in Fixed Versus Current Assets', 'Review how a manufacturing firm''s balance sheet reflects both fixed assets and working capital items. Evaluate the following economic assertions:', ARRAY['Although a concession right cannot be touched, it appears among non-current assets rather than current assets because of its long-term value.', 'A concession right is recorded as an intangible non-current asset alongside tangible assets such as buildings and machinery.', 'The absence of physical form does not prevent a concession right from being classified as a non-current asset.', 'A concession right acquired to protect or support a business''s operations over several years is grouped with intangible non-current assets.', 'A concession right is not classified as a current asset because it is not expected to convert into cash within the normal operating cycle.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Long-term value places an intangible concession right among non-current rather than current assets.', 'TRUE — Intangible and tangible non-current assets, including a concession right, sit within the same balance sheet section.', 'TRUE — Physical form is not a requirement for classifying a concession right as non-current.', 'TRUE — Multi-year protective or operational value groups a concession right with intangible non-current assets.', 'TRUE — Because a concession right is not expected to convert into cash within the operating cycle, it is excluded from current assets.'], '4/5', 102, 'full' ),
( '6.1', 'CASE 6.1.103', 'Listed Company Performance Charts 103', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=27
February | Price=26
March | Price=26
April | Price=25
May | Price=23
June | Price=29
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=23000
February | Volume=76000
March | Volume=32000
April | Volume=75000
May | Volume=40000
June | Volume=59000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 27 | 23,000 |
| February | 26 | 76,000 |
| March | 26 | 32,000 |
| April | 25 | 75,000 |
| May | 23 | 40,000 |
| June | 29 | 59,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 190 |
| Shares outstanding | 889,000 |
| Total shares traded (six months) | 305,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 33.5% from first to last month.', 'Market capitalisation at the last month exceeds €21.5 million.', 'Earnings per share exceeds €0.15.', 'Peak monthly share turnover exceeds 52,358 shares.', 'Market capitalisation rose by more than 21.5% over the period.'], ARRAY[false, true, true, true, false], ARRAY['FALSE — Price change ≈ 7.4%.', 'TRUE — Market capitalisation ≈ €25.8 million.', 'TRUE — Earnings per share ≈ €0.21.', 'TRUE — Peak monthly volume = 76,000.', 'FALSE — €24.0m → €25.8m.'], '5/5', 103, 'full' ),
( '6.1', 'CASE 6.1.104', 'Earnings Per Share From Reported Figures 104', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=27
February | Price=28
March | Price=28
April | Price=28
May | Price=30
June | Price=33
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=57000
February | Volume=46000
March | Volume=86000
April | Volume=45000
May | Volume=76000
June | Volume=61000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 27 | 57,000 |
| February | 28 | 46,000 |
| March | 28 | 86,000 |
| April | 28 | 45,000 |
| May | 30 | 76,000 |
| June | 33 | 61,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 217 |
| Shares outstanding | 629,000 |
| Total shares traded (six months) | 371,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation rose by more than 27.4% over the period.', 'The closing share price rose by more than 16.7% from first to last month.', 'Market capitalisation at the last month exceeds €17 million.', 'Earnings per share exceeds €0.27.', 'Highest closing price is more than 16.2% above the lowest.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — €17.0m → €20.8m.', 'TRUE — Price change ≈ 22.2%.', 'TRUE — Market capitalisation ≈ €20.8 million.', 'TRUE — Earnings per share ≈ €0.34.', 'TRUE — Range €27–€33.'], '3/5', 104, 'full' ),
( '6.1', 'CASE 6.1.105', 'Ovens Held for Use or Sale', 'Analyze how a retail chain''s balance sheet separates fixed shop fittings from seasonal inventory. Evaluate the following economic assertions:', ARRAY['An operating licence loses its non-current classification as soon as the business begins actively using it.', 'An exclusive distribution agreement lacks physical substance but is classified as a non-current intangible asset because it provides expected long-term benefit.', 'Although an exclusive distribution agreement cannot be touched, it appears among non-current assets rather than current assets because of its long-term value.', 'An exclusive distribution agreement is recorded as an intangible non-current asset alongside tangible assets such as buildings and machinery.', 'A brand name is excluded from non-current assets because it has no physical substance.'], ARRAY[false, true, true, true, false], ARRAY['FALSE — Active use does not remove an operating licence''s non-current classification; it confirms the long-term benefit that justifies it.', 'TRUE — Long-term expected benefit, not physical form, justifies classifying an exclusive distribution agreement as non-current.', 'TRUE — Long-term value places an intangible exclusive distribution agreement among non-current rather than current assets.', 'TRUE — Intangible and tangible non-current assets, including an exclusive distribution agreement, sit within the same balance sheet section.', 'FALSE — Physical substance is not required for non-current classification; a brand name qualifies through its long-term value.'], '5/5', 105, 'full' ),
( '6.1', 'CASE 6.1.106', 'Listed Company Performance Charts 106', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=37
February | Price=38
March | Price=36
April | Price=35
May | Price=32
June | Price=29
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=49000
February | Volume=81000
March | Volume=59000
April | Volume=75000
May | Volume=70000
June | Volume=76000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 37 | 49,000 |
| February | 38 | 81,000 |
| March | 36 | 59,000 |
| April | 35 | 75,000 |
| May | 32 | 70,000 |
| June | 29 | 76,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 301 |
| Shares outstanding | 633,000 |
| Total shares traded (six months) | 410,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €15.4 million.', 'Earnings per share exceeds €0.35.', 'The closing share price rose by more than 29% from first to last month.', 'Market capitalisation rose by more than 18.8% over the period.', 'Highest closing price is more than 40% above the lowest.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Market capitalisation ≈ €18.4 million.', 'TRUE — Earnings per share ≈ €0.48.', 'FALSE — Price change ≈ -21.6%.', 'FALSE — €23.4m → €18.4m.', 'FALSE — Range €29–€38.'], '2/5', 106, 'full' ),
( '6.1', 'CASE 6.1.107', 'Earnings Per Share From Reported Figures 107', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=24
February | Price=23
March | Price=24
April | Price=24
May | Price=24
June | Price=29
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=42000
February | Volume=73000
March | Volume=28000
April | Volume=47000
May | Volume=66000
June | Volume=19000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 24 | 42,000 |
| February | 23 | 73,000 |
| March | 24 | 28,000 |
| April | 24 | 47,000 |
| May | 24 | 66,000 |
| June | 29 | 19,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 228 |
| Shares outstanding | 799,000 |
| Total shares traded (six months) | 275,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 9.4% from first to last month.', 'Market capitalisation at the last month exceeds €21.3 million.', 'Earnings per share exceeds €0.25.', 'Market capitalisation rose by more than 30.8% over the period.', 'Highest closing price is more than 23.8% above the lowest.'], ARRAY[true, true, true, false, true], ARRAY['TRUE — Price change ≈ 20.8%.', 'TRUE — Market capitalisation ≈ €23.2 million.', 'TRUE — Earnings per share ≈ €0.29.', 'FALSE — €19.2m → €23.2m.', 'TRUE — Range €23–€29.'], '5/5', 107, 'full' ),
( '6.1', 'CASE 6.1.108', 'Share Price and Market Capitalisation 108', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=18
February | Price=17
March | Price=15
April | Price=13
May | Price=11
June | Price=10
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=41000
February | Volume=26000
March | Volume=78000
April | Volume=20000
May | Volume=56000
June | Volume=67000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 18 | 41,000 |
| February | 17 | 26,000 |
| March | 15 | 78,000 |
| April | 13 | 20,000 |
| May | 11 | 56,000 |
| June | 10 | 67,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 267 |
| Shares outstanding | 504,000 |
| Total shares traded (six months) | 288,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €4.3 million.', 'Earnings per share exceeds €0.49.', 'The closing share price rose by more than 27.8% from first to last month.', 'Highest closing price is more than 17.8% above the lowest.', 'Total shares traded over six months exceed 10.7% of shares outstanding.'], ARRAY[true, true, false, true, true], ARRAY['TRUE — Market capitalisation ≈ €5.0 million.', 'TRUE — Earnings per share ≈ €0.53.', 'FALSE — Price change ≈ -44.4%.', 'TRUE — Range €10–€18.', 'TRUE — Turnover ≈ 57.1% of shares outstanding.'], '4/5', 108, 'full' ),
( '6.1', 'CASE 6.1.109', 'Looms and Asset Classification', 'Review how equity contributions differ from borrowed funds in their effect on a business''s balance sheet structure. Evaluate the following economic assertions:', ARRAY['The absence of physical form does not prevent an exclusive distribution agreement from being classified as a non-current asset.', 'A brand name is classified as a current asset because, being intangible, it is easily converted into cash within a year.', 'An exclusive distribution agreement acquired to protect or support a business''s operations over several years is grouped with intangible non-current assets.', 'An exclusive distribution agreement is not classified as a current asset because it is not expected to convert into cash within the normal operating cycle.', 'A software platform licence lacks physical substance but is classified as a non-current intangible asset because it provides expected long-term benefit.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — Physical form is not a requirement for classifying an exclusive distribution agreement as non-current.', 'FALSE — A brand name is a non-current intangible asset because it provides benefit over several years, not because it converts to cash quickly.', 'TRUE — Multi-year protective or operational value groups an exclusive distribution agreement with intangible non-current assets.', 'TRUE — Because an exclusive distribution agreement is not expected to convert into cash within the operating cycle, it is excluded from current assets.', 'TRUE — Long-term expected benefit, not physical form, justifies classifying a software platform licence as non-current.'], '2/5', 109, 'full' ),
( '6.1', 'CASE 6.1.110', 'Earnings Per Share From Reported Figures 110', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=38
February | Price=36
March | Price=35
April | Price=33
May | Price=32
June | Price=31
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=35000
February | Volume=37000
March | Volume=23000
April | Volume=63000
May | Volume=85000
June | Volume=58000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 38 | 35,000 |
| February | 36 | 37,000 |
| March | 35 | 23,000 |
| April | 33 | 63,000 |
| May | 32 | 85,000 |
| June | 31 | 58,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 218 |
| Shares outstanding | 615,000 |
| Total shares traded (six months) | 301,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 10.4% from first to last month.', 'Market capitalisation at the last month exceeds €16.1 million.', 'Market capitalisation rose by more than 21.7% over the period.', 'Highest closing price is more than 26.8% above the lowest.', 'Operating result is below €216 thousand.'], ARRAY[false, true, false, false, false], ARRAY['FALSE — Price change ≈ -18.4%.', 'TRUE — Market capitalisation ≈ €19.1 million.', 'FALSE — €23.4m → €19.1m.', 'FALSE — Range €31–€38.', 'FALSE — Operating result = 218.'], '5/5', 110, 'full' ),
( '6.1', 'CASE 6.1.111', 'Share Price and Market Capitalisation 111', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=30
February | Price=31
March | Price=28
April | Price=26
May | Price=26
June | Price=25
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=83000
February | Volume=56000
March | Volume=19000
April | Volume=93000
May | Volume=69000
June | Volume=67000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 30 | 83,000 |
| February | 31 | 56,000 |
| March | 28 | 19,000 |
| April | 26 | 93,000 |
| May | 26 | 69,000 |
| June | 25 | 67,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 216 |
| Shares outstanding | 501,000 |
| Total shares traded (six months) | 387,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €11.6 million.', 'Earnings per share exceeds €0.37.', 'Highest closing price is more than 19.1% above the lowest.', 'Total shares traded over six months exceed 32.5% of shares outstanding.', 'Peak monthly share turnover exceeds 80,606 shares.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Market capitalisation ≈ €12.5 million.', 'TRUE — Earnings per share ≈ €0.43.', 'TRUE — Range €25–€31.', 'TRUE — Turnover ≈ 77.2% of shares outstanding.', 'TRUE — Peak monthly volume = 93,000.'], '3/5', 111, 'full' ),
( '6.1', 'CASE 6.1.112', 'Tanks as Operating Equipment', 'Consider an orchard business that owns tractors for cultivation while holding harvested fruit in cold storage awaiting sale. Evaluate the following economic assertions:', ARRAY['Although a software platform licence cannot be touched, it appears among non-current assets rather than current assets because of its long-term value.', 'A software platform licence is recorded as an intangible non-current asset alongside tangible assets such as buildings and machinery.', 'The absence of physical form does not prevent a software platform licence from being classified as a non-current asset.', 'Because a brand name cannot be touched, it is recorded as an expense rather than as an asset on the balance sheet.', 'A software platform licence acquired to protect or support a business''s operations over several years is grouped with intangible non-current assets.'], ARRAY[true, true, true, false, true], ARRAY['TRUE — Long-term value places an intangible software platform licence among non-current rather than current assets.', 'TRUE — Intangible and tangible non-current assets, including a software platform licence, sit within the same balance sheet section.', 'TRUE — Physical form is not a requirement for classifying a software platform licence as non-current.', 'FALSE — A brand name with expected long-term benefit is recorded as an intangible non-current asset, not expensed immediately.', 'TRUE — Multi-year protective or operational value groups a software platform licence with intangible non-current assets.'], '5/5', 112, 'full' ),
( '6.1', 'CASE 6.1.113', 'Earnings Per Share From Reported Figures 113', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=31
February | Price=29
March | Price=27
April | Price=25
May | Price=22
June | Price=21
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=61000
February | Volume=41000
March | Volume=31000
April | Volume=77000
May | Volume=62000
June | Volume=75000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 31 | 61,000 |
| February | 29 | 41,000 |
| March | 27 | 31,000 |
| April | 25 | 77,000 |
| May | 22 | 62,000 |
| June | 21 | 75,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 185 |
| Shares outstanding | 671,000 |
| Total shares traded (six months) | 347,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 8.9% from first to last month.', 'Market capitalisation at the last month exceeds €11.7 million.', 'Highest closing price is more than 20% above the lowest.', 'Total shares traded over six months exceed 31.5% of shares outstanding.', 'Shares outstanding equal 671,000.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — Price change ≈ -32.3%.', 'TRUE — Market capitalisation ≈ €14.1 million.', 'TRUE — Range €21–€31.', 'TRUE — Turnover ≈ 51.7% of shares outstanding.', 'TRUE — Shares outstanding = 671,000.'], '5/5', 113, 'full' ),
( '6.1', 'CASE 6.1.114', 'Tractors in Farm Business Balance Sheets', 'Review how owner''s equity is derived as the residual claim remaining once liabilities are deducted from assets. Evaluate the following economic assertions:', ARRAY['A software platform licence is not classified as a current asset because it is not expected to convert into cash within the normal operating cycle.', 'Non-current assets can never include a brand name because that section is reserved strictly for tangible items such as machinery.', 'A brand name is treated as inventory because it is intended for use rather than for display.', 'A brand name loses its non-current classification as soon as the business begins actively using it.', 'A packaging manufacturer that takes out a ten-year bank loan repayable in more than one year classifies the obligation as a non-current liability.'], ARRAY[true, false, false, false, true], ARRAY['TRUE — Because a software platform licence is not expected to convert into cash within the operating cycle, it is excluded from current assets.', 'FALSE — The non-current assets section includes intangible items such as a brand name alongside tangible assets.', 'FALSE — Long-term exclusive use, not physical display, places a brand name among non-current intangible assets, not inventory.', 'FALSE — Active use does not remove a brand name''s non-current classification; it confirms the long-term benefit that justifies it.', 'TRUE — Repayment due beyond one year places the ten-year bank loan among the non-current liabilities of a packaging manufacturer.'], '4/5', 114, 'full' ),
( '6.1', 'CASE 6.1.115', 'Listed Company Performance Charts 115', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=38
February | Price=38
March | Price=37
April | Price=36
May | Price=33
June | Price=31
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=51000
February | Volume=43000
March | Volume=33000
April | Volume=95000
May | Volume=20000
June | Volume=90000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 38 | 51,000 |
| February | 38 | 43,000 |
| March | 37 | 33,000 |
| April | 36 | 95,000 |
| May | 33 | 20,000 |
| June | 31 | 90,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 231 |
| Shares outstanding | 806,000 |
| Total shares traded (six months) | 332,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €21.7 million.', 'Total shares traded over six months exceed 20.2% of shares outstanding.', 'Peak monthly share turnover exceeds 70,733 shares.', 'The closing share price rose by more than 12.3% from first to last month.', 'Shares outstanding equal 806,000.'], ARRAY[true, true, true, false, true], ARRAY['TRUE — Market capitalisation ≈ €25.0 million.', 'TRUE — Turnover ≈ 41.2% of shares outstanding.', 'TRUE — Peak monthly volume = 95,000.', 'FALSE — Price change ≈ -18.4%.', 'TRUE — Shares outstanding = 806,000.'], '3/5', 115, 'full' ),
( '6.1', 'CASE 6.1.116', 'Earnings Per Share From Reported Figures 116', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=22
February | Price=22
March | Price=21
April | Price=19
May | Price=17
June | Price=15
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=48000
February | Volume=33000
March | Volume=85000
April | Volume=61000
May | Volume=43000
June | Volume=93000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 22 | 48,000 |
| February | 22 | 33,000 |
| March | 21 | 85,000 |
| April | 19 | 61,000 |
| May | 17 | 43,000 |
| June | 15 | 93,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 283 |
| Shares outstanding | 654,000 |
| Total shares traded (six months) | 363,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €7.9 million.', 'Earnings per share exceeds €0.31.', 'Highest closing price is more than 34.1% above the lowest.', 'Total shares traded over six months exceed 9% of shares outstanding.', 'Shares outstanding equal 654,000.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Market capitalisation ≈ €9.8 million.', 'TRUE — Earnings per share ≈ €0.43.', 'TRUE — Range €15–€22.', 'TRUE — Turnover ≈ 55.5% of shares outstanding.', 'TRUE — Shares outstanding = 654,000.'], '4/5', 116, 'full' ),
( '6.1', 'CASE 6.1.117', 'Share Price and Market Capitalisation 117', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=34
February | Price=31
March | Price=27
April | Price=24
May | Price=22
June | Price=20
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=38000
February | Volume=49000
March | Volume=83000
April | Volume=47000
May | Volume=59000
June | Volume=74000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 34 | 38,000 |
| February | 31 | 49,000 |
| March | 27 | 83,000 |
| April | 24 | 47,000 |
| May | 22 | 59,000 |
| June | 20 | 74,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 211 |
| Shares outstanding | 744,000 |
| Total shares traded (six months) | 350,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 24.9% from first to last month.', 'Market capitalisation rose by more than 26.9% over the period.', 'Peak monthly share turnover exceeds 90,002 shares.', 'Earnings per share is exactly €0.39.', 'Market capitalisation at the last month exceeds €11.9 million.'], ARRAY[false, false, false, false, true], ARRAY['FALSE — Price change ≈ -41.2%.', 'FALSE — €25.3m → €14.9m.', 'FALSE — Peak monthly volume = 83,000.', 'FALSE — Earnings per share ≈ €0.28.', 'TRUE — Market capitalisation ≈ €14.9 million.'], '3/5', 117, 'full' ),
( '6.1', 'CASE 6.1.118', 'Scanners as Fixed Assets', 'Analyze the distinction drawn between non-current assets and current assets based on expected holding period. Evaluate the following economic assertions:', ARRAY['A packaging manufacturer that owes supplier balances due within the next year classifies the obligation as a current liability.', 'A registered design is excluded from non-current assets because it has no physical substance.', 'For a packaging manufacturer, a ten-year bank loan appears separately from current liabilities because it falls due after more than one year.', 'A registered design is classified as a current asset because, being intangible, it is easily converted into cash within a year.', 'For a packaging manufacturer, the supplier balances appear within current liabilities because settlement is expected within one year.'], ARRAY[true, false, true, false, true], ARRAY['TRUE — Settlement within one year places the supplier balances among the current liabilities of a packaging manufacturer.', 'FALSE — Physical substance is not required for non-current classification; a registered design qualifies through its long-term value.', 'TRUE — A longer settlement horizon separates the ten-year bank loan from the current liabilities of a packaging manufacturer.', 'FALSE — A registered design is a non-current intangible asset because it provides benefit over several years, not because it converts to cash quickly.', 'TRUE — A short settlement horizon places the supplier balances within the current liabilities of a packaging manufacturer.'], '5/5', 118, 'full' ),
( '6.1', 'CASE 6.1.119', 'Earnings Per Share From Reported Figures 119', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=27
February | Price=27
March | Price=30
April | Price=32
May | Price=32
June | Price=33
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=80000
February | Volume=30000
March | Volume=72000
April | Volume=89000
May | Volume=71000
June | Volume=67000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 27 | 80,000 |
| February | 27 | 30,000 |
| March | 30 | 72,000 |
| April | 32 | 89,000 |
| May | 32 | 71,000 |
| June | 33 | 67,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 180 |
| Shares outstanding | 514,000 |
| Total shares traded (six months) | 409,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 25.5% from first to last month.', 'Market capitalisation at the last month exceeds €15.2 million.', 'Market capitalisation rose by more than 23.7% over the period.', 'Highest closing price is more than 18.2% above the lowest.', 'Peak monthly share turnover exceeds 91,305 shares.'], ARRAY[false, true, false, true, false], ARRAY['FALSE — Price change ≈ 22.2%.', 'TRUE — Market capitalisation ≈ €17.0 million.', 'FALSE — €13.9m → €17.0m.', 'TRUE — Range €27–€33.', 'FALSE — Peak monthly volume = 89,000.'], '2/5', 119, 'full' ),
( '6.1', 'CASE 6.1.120', 'Share Price and Market Capitalisation 120', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=18
February | Price=15
March | Price=14
April | Price=12
May | Price=11
June | Price=10
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=25000
February | Volume=28000
March | Volume=92000
April | Volume=53000
May | Volume=32000
June | Volume=47000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 18 | 25,000 |
| February | 15 | 28,000 |
| March | 14 | 92,000 |
| April | 12 | 53,000 |
| May | 11 | 32,000 |
| June | 10 | 47,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 314 |
| Shares outstanding | 729,000 |
| Total shares traded (six months) | 277,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €6 million.', 'Earnings per share exceeds €0.36.', 'Highest closing price is more than 20.5% above the lowest.', 'Total shares traded over six months exceed 18.8% of shares outstanding.', 'The closing share price rose by more than 17.8% from first to last month.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Market capitalisation ≈ €7.3 million.', 'TRUE — Earnings per share ≈ €0.43.', 'TRUE — Range €10–€18.', 'TRUE — Turnover ≈ 38.0% of shares outstanding.', 'FALSE — Price change ≈ -44.4%.'], '4/5', 120, 'full' ),
( '6.1', 'CASE 6.1.121', 'Printers for Office Use', 'Review why non-current assets are expected to deliver benefit to a business for more than one year. Evaluate the following economic assertions:', ARRAY['Because a registered design cannot be touched, it is recorded as an expense rather than as an asset on the balance sheet.', 'Non-current assets can never include a registered design because that section is reserved strictly for tangible items such as machinery.', 'A registered design is treated as inventory because it is intended for use rather than for display.', 'A registered design loses its non-current classification as soon as the business begins actively using it.', 'A ten-year bank loan owed by a packaging manufacturer does not increase current liabilities because it is not due within the coming year.'], ARRAY[false, false, false, false, true], ARRAY['FALSE — A registered design with expected long-term benefit is recorded as an intangible non-current asset, not expensed immediately.', 'FALSE — The non-current assets section includes intangible items such as a registered design alongside tangible assets.', 'FALSE — Long-term exclusive use, not physical display, places a registered design among non-current intangible assets, not inventory.', 'FALSE — Active use does not remove a registered design''s non-current classification; it confirms the long-term benefit that justifies it.', 'TRUE — Because the ten-year bank loan of a packaging manufacturer is not due within a year, it stays outside current liabilities.'], '5/5', 121, 'full' ),
( '6.1', 'CASE 6.1.122', 'Earnings Per Share From Reported Figures 122', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=27
February | Price=28
March | Price=29
April | Price=28
May | Price=30
June | Price=34
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=45000
February | Volume=90000
March | Volume=45000
April | Volume=23000
May | Volume=38000
June | Volume=76000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 27 | 45,000 |
| February | 28 | 90,000 |
| March | 29 | 45,000 |
| April | 28 | 23,000 |
| May | 30 | 38,000 |
| June | 34 | 76,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 287 |
| Shares outstanding | 549,000 |
| Total shares traded (six months) | 317,000 |

Evaluate the following economic assertions:', ARRAY['Highest closing price is more than 26.3% above the lowest.', 'Peak monthly share turnover exceeds 92,651 shares.', 'The closing share price rose by more than 16.9% from first to last month.', 'Market capitalisation at the last month exceeds €14.6 million.', 'Market capitalisation rose by more than 25.6% over the period.'], ARRAY[false, false, true, true, true], ARRAY['FALSE — Range €27–€34.', 'FALSE — Peak monthly volume = 90,000.', 'TRUE — Price change ≈ 25.9%.', 'TRUE — Market capitalisation ≈ €18.7 million.', 'TRUE — €14.8m → €18.7m.'], '5/5', 122, 'full' ),
( '6.1', 'CASE 6.1.123', 'Share Price and Market Capitalisation 123', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=19
February | Price=20
March | Price=20
April | Price=21
May | Price=21
June | Price=24
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=43000
February | Volume=22000
March | Volume=57000
April | Volume=25000
May | Volume=63000
June | Volume=20000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 19 | 43,000 |
| February | 20 | 22,000 |
| March | 20 | 57,000 |
| April | 21 | 25,000 |
| May | 21 | 63,000 |
| June | 24 | 20,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 195 |
| Shares outstanding | 807,000 |
| Total shares traded (six months) | 230,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €18.2 million.', 'The closing share price rose by more than 28.4% from first to last month.', 'Market capitalisation rose by more than 30% over the period.', 'Peak monthly share turnover exceeds 70,004 shares.', 'Earnings per share is exactly €0.14.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Market capitalisation ≈ €19.4 million.', 'FALSE — Price change ≈ 26.3%.', 'FALSE — €15.3m → €19.4m.', 'FALSE — Peak monthly volume = 63,000.', 'FALSE — Earnings per share ≈ €0.24.'], '4/5', 123, 'full' ),
( '6.1', 'CASE 6.1.124', 'Delivery Vehicles as Non-Current Assets', 'Consider a metalworking firm that owns specialised cutting equipment while also holding raw steel awaiting use in customer orders. Evaluate the following economic assertions:', ARRAY['If part of a packaging manufacturer''s ten-year bank loan becomes due within the next twelve months, that portion should move into current liabilities.', 'A development patent is excluded from non-current assets because it has no physical substance.', 'A clothing retailer that takes out a corporate debenture repayable in more than one year classifies the obligation as a non-current liability.', 'A development patent is classified as a current asset because, being intangible, it is easily converted into cash within a year.', 'A clothing retailer that owes overdraft borrowings due within the next year classifies the obligation as a current liability.'], ARRAY[true, false, true, false, true], ARRAY['TRUE — A ten-year bank loan nearing its due date within a year has that portion reclassified into current liabilities for a packaging manufacturer.', 'FALSE — Physical substance is not required for non-current classification; a development patent qualifies through its long-term value.', 'TRUE — Repayment due beyond one year places the corporate debenture among the non-current liabilities of a clothing retailer.', 'FALSE — A development patent is a non-current intangible asset because it provides benefit over several years, not because it converts to cash quickly.', 'TRUE — Settlement within one year places the overdraft borrowings among the current liabilities of a clothing retailer.'], '5/5', 124, 'full' ),
( '6.1', 'CASE 6.1.125', 'Earnings Per Share From Reported Figures 125', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=32
February | Price=29
March | Price=28
April | Price=27
May | Price=26
June | Price=23
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=25000
February | Volume=64000
March | Volume=90000
April | Volume=23000
May | Volume=39000
June | Volume=18000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 32 | 25,000 |
| February | 29 | 64,000 |
| March | 28 | 90,000 |
| April | 27 | 23,000 |
| May | 26 | 39,000 |
| June | 23 | 18,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 291 |
| Shares outstanding | 759,000 |
| Total shares traded (six months) | 259,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 17.7% from first to last month.', 'Market capitalisation at the last month exceeds €16.3 million.', 'Highest closing price is more than 27% above the lowest.', 'Peak monthly share turnover exceeds 74,170 shares.', 'Shares outstanding equal 759,000.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — Price change ≈ -28.1%.', 'TRUE — Market capitalisation ≈ €17.5 million.', 'TRUE — Range €23–€32.', 'TRUE — Peak monthly volume = 90,000.', 'TRUE — Shares outstanding = 759,000.'], '4/5', 125, 'full' ),
( '6.1', 'CASE 6.1.126', 'Share Price and Market Capitalisation 126', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=24
February | Price=22
March | Price=20
April | Price=17
May | Price=16
June | Price=15
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=45000
February | Volume=79000
March | Volume=78000
April | Volume=43000
May | Volume=85000
June | Volume=51000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 24 | 45,000 |
| February | 22 | 79,000 |
| March | 20 | 78,000 |
| April | 17 | 43,000 |
| May | 16 | 85,000 |
| June | 15 | 51,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 230 |
| Shares outstanding | 450,000 |
| Total shares traded (six months) | 381,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €6.2 million.', 'Highest closing price is more than 12.4% above the lowest.', 'Total shares traded over six months exceed 31.7% of shares outstanding.', 'Peak monthly share turnover exceeds 79,184 shares.', 'Shares outstanding equal 450,000.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Market capitalisation ≈ €6.8 million.', 'TRUE — Range €15–€24.', 'TRUE — Turnover ≈ 84.7% of shares outstanding.', 'TRUE — Peak monthly volume = 85,000.', 'TRUE — Shares outstanding = 450,000.'], '2/5', 126, 'full' ),
( '6.1', 'CASE 6.1.127', 'Listed Company Performance Charts 127', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=31
February | Price=32
March | Price=34
April | Price=34
May | Price=33
June | Price=39
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=69000
February | Volume=67000
March | Volume=22000
April | Volume=54000
May | Volume=70000
June | Volume=63000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 31 | 69,000 |
| February | 32 | 67,000 |
| March | 34 | 22,000 |
| April | 34 | 54,000 |
| May | 33 | 70,000 |
| June | 39 | 63,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 230 |
| Shares outstanding | 420,000 |
| Total shares traded (six months) | 345,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 16.2% from first to last month.', 'Market capitalisation at the last month exceeds €12.5 million.', 'Market capitalisation rose by more than 16.5% over the period.', 'Earnings per share exceeds €0.39.', 'Total shares traded over six months exceed 38.8% of shares outstanding.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Price change ≈ 25.8%.', 'TRUE — Market capitalisation ≈ €16.4 million.', 'TRUE — €13.0m → €16.4m.', 'TRUE — Earnings per share ≈ €0.55.', 'TRUE — Turnover ≈ 82.1% of shares outstanding.'], '3/5', 127, 'full' ),
( '6.1', 'CASE 6.1.128', 'Earnings Per Share From Reported Figures 128', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=24
February | Price=24
March | Price=21
April | Price=17
May | Price=15
June | Price=13
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=37000
February | Volume=73000
March | Volume=51000
April | Volume=23000
May | Volume=79000
June | Volume=90000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 24 | 37,000 |
| February | 24 | 73,000 |
| March | 21 | 51,000 |
| April | 17 | 23,000 |
| May | 15 | 79,000 |
| June | 13 | 90,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 317 |
| Shares outstanding | 676,000 |
| Total shares traded (six months) | 353,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €8.3 million.', 'Highest closing price is more than 42.4% above the lowest.', 'Total shares traded over six months exceed 19.1% of shares outstanding.', 'Peak monthly share turnover exceeds 75,410 shares.', 'The closing share price rose by more than 28.5% from first to last month.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Market capitalisation ≈ €8.8 million.', 'TRUE — Range €13–€24.', 'TRUE — Turnover ≈ 52.2% of shares outstanding.', 'TRUE — Peak monthly volume = 90,000.', 'FALSE — Price change ≈ -45.8%.'], '5/5', 128, 'full' ),
( '6.1', 'CASE 6.1.129', 'Share Price and Market Capitalisation 129', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=32
February | Price=31
March | Price=30
April | Price=30
May | Price=31
June | Price=38
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=95000
February | Volume=71000
March | Volume=24000
April | Volume=33000
May | Volume=39000
June | Volume=79000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 32 | 95,000 |
| February | 31 | 71,000 |
| March | 30 | 24,000 |
| April | 30 | 33,000 |
| May | 31 | 39,000 |
| June | 38 | 79,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 198 |
| Shares outstanding | 680,000 |
| Total shares traded (six months) | 341,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €22.5 million.', 'The closing share price rose by more than 20.2% from first to last month.', 'Market capitalisation rose by more than 29.1% over the period.', 'Highest closing price is more than 39.7% above the lowest.', 'Earnings per share is exactly €0.21.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Market capitalisation ≈ €25.8 million.', 'FALSE — Price change ≈ 18.8%.', 'FALSE — €21.8m → €25.8m.', 'FALSE — Range €30–€38.', 'FALSE — Earnings per share ≈ €0.29.'], '3/5', 129, 'full' ),
( '6.1', 'CASE 6.1.130', 'Franchise Agreements as Intangibles', 'Review how tangible non-current assets differ from intangible non-current assets in physical form. Evaluate the following economic assertions:', ARRAY['Because a development patent cannot be touched, it is recorded as an expense rather than as an asset on the balance sheet.', 'Non-current assets can never include a development patent because that section is reserved strictly for tangible items such as machinery.', 'A development patent is treated as inventory because it is intended for use rather than for display.', 'For a clothing retailer, a corporate debenture appears separately from current liabilities because it falls due after more than one year.', 'For a clothing retailer, the overdraft borrowings appear within current liabilities because settlement is expected within one year.'], ARRAY[false, false, false, true, true], ARRAY['FALSE — A development patent with expected long-term benefit is recorded as an intangible non-current asset, not expensed immediately.', 'FALSE — The non-current assets section includes intangible items such as a development patent alongside tangible assets.', 'FALSE — Long-term exclusive use, not physical display, places a development patent among non-current intangible assets, not inventory.', 'TRUE — A longer settlement horizon separates the corporate debenture from the current liabilities of a clothing retailer.', 'TRUE — A short settlement horizon places the overdraft borrowings within the current liabilities of a clothing retailer.'], '2/5', 130, 'full' ),
( '6.2', 'CASE 6.2.001', 'Cash Flow Mix Over Two Years 1', 'Consider the cash flow extract below (€ thousands).

[[CHART type="bar" title="Operating and investing cash flows"]]
Year 1 | Operating=123 | Investing=-151
Year 2 | Operating=139 | Investing=-235
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Cash flow from operating activities before changes in working capital | 136 | 174 |
| Cash flow from operating activities | 123 | 139 |
| Cash flow from investing activities | (151) | (235) |
| Cash flow from financing activities | 38 | 100 |
| Change in cash and cash equivalents | 10 | 4 |
| Cash and cash equivalents at end of the year | 103 | 88 |

Evaluate the following economic assertions:', ARRAY['Year 2 operating cash flow is below the before-working-capital figure.', 'Investing cash flow is an outflow in both years.', 'Year 2 financing cash flow is positive.', 'Net cash change is positive in Year 1.', 'Year 2 ending cash equals €88 thousand.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — 139 vs 174.', 'TRUE — Investing: -151, -235.', 'TRUE — Financing Year 2 = 100.', 'TRUE — Year 1 change = 10.', 'TRUE — Ending cash = €88 thousand.'], '5/5', 1, 'full' ),
( '6.2', 'CASE 6.2.002', 'Profit and Loss Over Two Years 2', 'Consider the following two-year statement of profit and loss (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Revenue and operating result"]]
Year 1 | Revenue=1055 | Operating result=342
Year 2 | Revenue=1281 | Operating result=400
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Revenue | 1055 | 1281 |
| Cost of sales | (644) | (787) |
| Gross profit | 411 | 494 |
| Distribution costs | (35) | (49) |
| General and administrative costs | (38) | (48) |
| Other operating result | 4 | 3 |
| Operating result | 342 | 400 |
| Finance costs | (22) | (26) |
| Finance costs – net | (19) | (22) |
| Profit before tax | 323 | 378 |
| Income taxes | (69) | (79) |
| Profit for the year | 254 | 299 |

Evaluate the following economic assertions:', ARRAY['Revenue grew by more than 19.8% between Year 1 and Year 2.', 'The gross profit margin, gross profit taken as a share of revenue, is more than 4.8 percentage points higher in Year 2 than in Year 1.', 'The operating result covers finance costs more than 9.14 times over in Year 1.', 'The operating result grew by more than 37.5% between Year 1 and Year 2.', 'The operating margin, operating result taken as a share of revenue, exceeds 10.4% in Year 2.'], ARRAY[true, false, true, false, true], ARRAY['TRUE — Revenue changed by about 21.4% between the two years.', 'FALSE — Gross margins were 39.0% then 38.6%.', 'TRUE — Interest coverage in Year 1 ≈ 15.5 times.', 'FALSE — The operating result changed by about 17.0% between the two years.', 'TRUE — Operating margin in Year 2 ≈ 31.2%.'], '5/5', 2, 'full' ),
( '6.2', 'CASE 6.2.003', 'Annual Depreciation Chart 3', 'A business depreciates the following fixed assets on a straight-line basis. Identity is not disclosed.

[[CHART type="bar" title="Annual depreciation by asset"]]
Machinery | Annual depreciation=15818
Delivery truck | Annual depreciation=6500
Computer equipment | Annual depreciation=6333
[[/CHART]]

| Asset details | Amount |
| --- | ---: |
| Asset A – Machinery | €174,000 purchase price, 11-year useful life, no residual value |
| Asset B – Delivery truck | €46,000 purchase price, 6-year useful life, €7,000 residual value |
| Asset C – Computer equipment | €19,000 purchase price, 3-year useful life, no residual value |

Evaluate the following economic assertions:', ARRAY['Combined annual depreciation for the three assets is €28,652.', 'After three years, the computer equipment, originally costing €19,000, is fully written down to nil.', 'After three years, the delivery truck''s book value is €30,895.', 'After three years, the combined book value of all three assets exceeds €143,061.', 'Without recording depreciation on the €174,000 machinery, non-current assets on the balance sheet would be overstated.'], ARRAY[true, true, false, true, true], ARRAY['TRUE — Sum of annual charges ≈ €28,652.', 'TRUE — Useful life is 3 years with no residual value.', 'FALSE — Book value ≈ €26,500.', 'TRUE — Combined book value ≈ €153,045.', 'TRUE — Assets would stay at historical cost without write-downs.'], '5/5', 3, 'full' ),
( '6.2', 'CASE 6.2.004', 'Balance Sheet as a Point-in-Time Snapshot', 'Consider the following cash flow statement extract (€) for a bakery.

| Item | Amount |
| --- | ---: |
| Cash flow from operating activities | 26000 |
| Cash flow from investing activities | (9000) |
| Cash flow from financing activities | 5500 |
| Net change in cash and cash equivalents | **22500** |

Evaluate the following economic assertions:', ARRAY['On extract 1, cash and cash equivalents change by 22,500 euros in total.', 'Treating the investing line as an addition, total cash would change by 40,500 euros on extract 1.', 'Purchases recorded under investing total an outflow of 9,000 euros on extract 1.', 'The operating figure alone of 26,000 euros is already the full net change on extract 1.', 'The investing line on extract 1 reports cash received of 9,000 euros.'], ARRAY[true, false, true, false, false], ARRAY['TRUE — Operating 26000 − investing 9000 + financing 5500 = 22500.', 'FALSE — Investing must be subtracted; correct net change is 22,500 euros.', 'TRUE — The investing line is (9000).', 'FALSE — That ignores investing and financing; correct net is 22,500 euros.', 'FALSE — Investing is an outflow of 9,000 euros.'], '2/5', 4, 'full' ),
( '6.2', 'CASE 6.2.005', 'Profit and Loss Over an Accounting Period', 'Analyze why the balance sheet does not report the sales made during the accounting period. Evaluate the following economic assertions:', ARRAY['Turnover for the year is reported in the statement of profit and loss rather than in the balance sheet.', 'Depreciation has nothing to do with the wearing out of a fixed asset and is simply an arbitrary entry with no economic meaning.', 'A fixed asset that is never depreciated will automatically show a reduced value in the accounts that reflects its true worth after years of use.', 'Depreciation is a cash expense in the statement of profit and loss that triggers an actual cash payment in the year it is recorded.', 'Depreciation reflects the gradual wearing out of a fixed asset as it is used to help generate revenue over its useful life.'], ARRAY[true, false, false, false, true], ARRAY['TRUE — The balance sheet does not show sales made during the year; that figure belongs in the statement of profit and loss.', 'FALSE — Depreciation specifically reflects the loss of value a fixed asset experiences through use.', 'FALSE — Without depreciation, an asset stays at its original cost in the accounts, overstating rather than reflecting its real worth.', 'FALSE — Depreciation does not itself cause a cash payment in the year it is charged; the cash was paid when the asset was bought.', 'TRUE — Depreciation allocates the loss of value a fixed asset suffers through use across the years it is expected to be used.'], '3/5', 5, 'full' ),
( '6.2', 'CASE 6.2.006', 'Cash Flow Statement Over Two Years 6', 'Consider the cash flow extract below (€ thousands).

[[CHART type="bar" title="Operating and investing cash flows"]]
Year 1 | Operating=174 | Investing=-110
Year 2 | Operating=191 | Investing=-194
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Cash flow from operating activities before changes in working capital | 150 | 174 |
| Cash flow from operating activities | 174 | 191 |
| Cash flow from investing activities | (110) | (194) |
| Cash flow from financing activities | 27 | 67 |
| Change in cash and cash equivalents | 91 | 64 |
| Cash and cash equivalents at end of the year | 115 | 101 |

Evaluate the following economic assertions:', ARRAY['Operating cash flow grew by more than 22% between Year 1 and Year 2.', 'Net cash change is positive in Year 2.', 'Year 2 investing outflow exceeds 136.1% of Year 2 operating cash flow.', 'Year-end cash fell by more than 20.2% from Year 1 to Year 2.', 'Negative investing cash flow always means the business is failing.'], ARRAY[false, true, false, false, false], ARRAY['FALSE — Operating cash flow changed by about 9.8% between the two years.', 'TRUE — Year 2 change = 64.', 'FALSE — Investing/operating ≈ 101.6%.', 'FALSE — End-cash change ≈ 12.2%.', 'FALSE — It often reflects asset purchases.'], '5/5', 6, 'full' ),
( '6.2', 'CASE 6.2.007', 'Asset Composition Chart 7', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=410
Current liabilities=278
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 317 |
| Machinery | 185 |
| Office equipment | 51 |
| Patents, trademarks and licences | 100 |
| Inventory | 159 |
| Trade receivables | 158 |
| Cash and cash equivalents | 93 |
| Total assets | **1063** |
| **EQUITY** | |
| Share capital | 233 |
| Retained earnings | 244 |
| Total equity | **477** |
| **LIABILITIES** | |
| Long-term bank loan | 234 |
| Bonds payable | 74 |
| Trade payables | 197 |
| Bank overdraft | 81 |
| Total liabilities | **586** |
| Total equity and liabilities | **1063** |

Evaluate the following economic assertions:', ARRAY['The current ratio is below 1.', 'The debt ratio exceeds 57.6%.', 'Buildings make up more than 35.9% of total assets.', 'Working capital of €132 thousand is positive on this balance sheet.', 'Inventory make up more than 52.2% of current assets.'], ARRAY[false, false, false, true, false], ARRAY['FALSE — Current ratio ≈ 1.47.', 'FALSE — Debt ratio ≈ 55.1%.', 'FALSE — Buildings are about 29.8% of total assets.', 'TRUE — Working capital = 132.', 'FALSE — Inventory are about 38.8% of current assets.'], '3/5', 7, 'full' ),
( '6.2', 'CASE 6.2.008', 'Components of a Financial Statement', 'Consider a construction firm financing new heavy machinery partly with retained profits and partly with a long-term loan. Evaluate the following economic assertions:', ARRAY['Under the straight-line method, the depreciable amount of an asset is spread unevenly across its useful life, producing a different charge each year.', 'Land is depreciated in exactly the same way as buildings, machinery and vehicles because all fixed assets wear out identically through use.', 'A profit earned during the year reduces the equity reported on the balance sheet.', 'If a fixed asset were never depreciated, it would remain on the accounts at its original cost even after years of productive use, overstating its true worth.', 'A loss incurred during the year increases the equity reported on the balance sheet.'], ARRAY[false, false, false, true, false], ARRAY['FALSE — Straight-line depreciation produces an equal annual charge across the useful life, not a varying one.', 'FALSE — Land is generally excluded from depreciation because it does not wear out through use the way other fixed assets do.', 'FALSE — Profit increases equity, typically through retained earnings, rather than reducing it.', 'TRUE — Skipping depreciation leaves an asset recorded above its real economic value once it has been used for some time.', 'FALSE — A loss reduces equity by lowering retained earnings; it does not increase equity.'], '3/5', 8, 'full' ),
( '6.2', 'CASE 6.2.009', 'Cash Flow From Operating Activities', 'Consider the following cash flow statement extract (€) for a hotel chain.

| Item | Amount |
| --- | ---: |
| Cash flow from operating activities | 30800 |
| Cash flow from investing activities | (14400) |
| Cash flow from financing activities | (4740) |
| Net change in cash and cash equivalents | **11660** |

Evaluate the following economic assertions:', ARRAY['On extract 4, cash and cash equivalents change by 11,660 euros in total.', 'Purchases recorded under investing total an outflow of 14,400 euros on extract 4.', 'Financing activities remove 4,740 euros from cash on extract 4.', 'Operating cash of 30,800 euros more than covers the investing outflow of 14,400 euros on extract 4.', 'Treating the investing line as an addition, total cash would change by 40,460 euros on extract 4.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Operating 30800 − investing 14400 − financing 4740 = 11660.', 'TRUE — The investing line is (14400).', 'TRUE — Financing is an outflow of 4,740 euros.', 'TRUE — Operating 30800 versus investing 14400.', 'FALSE — Investing must be subtracted; correct net change is 11,660 euros.'], '4/5', 9, 'full' ),
( '6.2', 'CASE 6.2.010', 'Cash Flow From Investing Activities', 'Review how a complete financial statement typically combines a balance sheet, a statement of profit and loss and a cash flow statement. Evaluate the following economic assertions:', ARRAY['A loss incurred during the year reduces the equity reported on the balance sheet.', 'Profit for the year and the net change in cash and cash equivalents for the year are different measures that will not usually be equal.', 'Cash flow from operating activities reflects cash movements arising from the core trading activities of a business during the period.', 'Cash flow from operating activities reflects cash movements arising from borrowing and repaying loans during the period.', 'Cash flow from investing activities reflects cash movements arising from buying or selling long-term assets during the period.'], ARRAY[true, true, true, false, true], ARRAY['TRUE — A loss lowers retained earnings and therefore reduces total equity.', 'TRUE — Non-cash items and timing differences mean profit and cash movement typically diverge.', 'TRUE — Day-to-day trading, such as receipts from customers and payments to suppliers and employees, is captured in the operating section.', 'FALSE — Borrowing and loan repayments are financing activities; operating cash flow instead reflects core trading.', 'TRUE — Spending on or proceeds from long-term assets such as equipment or property sit in the investing section.'], '3/5', 10, 'full' ),
( '6.2', 'CASE 6.2.011', 'Cash Flow From Financing Activities', 'Analyze the purpose of the cash flow statement alongside the balance sheet and the statement of profit and loss. Evaluate the following economic assertions:', ARRAY['Cash flow from investing activities reflects cash movements arising from the core day-to-day trading of a business during the period.', 'Cash flow from financing activities reflects cash movements arising from buying or selling long-term assets during the period.', 'Cash flow from financing activities reflects cash movements arising from borrowing, repaying loans, raising share capital or paying dividends during the period.', 'A negative cash flow from investing activities is always a definite sign that a business is in financial difficulty, regardless of the cause.', 'The net change in cash and cash equivalents for a period has no relationship to the cash flows from operating, investing and financing activities.'], ARRAY[false, false, true, false, false], ARRAY['FALSE — Core trading is reflected in operating cash flow; investing cash flow relates to long-term assets.', 'FALSE — Buying or selling long-term assets is an investing activity, not a financing one.', 'TRUE — Transactions with lenders and owners are grouped in the financing section of the cash flow statement.', 'FALSE — Investing outflows often simply reflect spending on new long-term assets rather than financial distress.', 'FALSE — The net change in cash is exactly the sum of the operating, investing and financing cash flows for the period.'], '3/5', 11, 'full' ),
( '6.2', 'CASE 6.2.012', 'Negative Investing Cash Flow Explained', 'Consider the following cash flow statement extract (€) for a furniture maker.

| Item | Amount |
| --- | ---: |
| Cash flow from operating activities | 35600 |
| Cash flow from investing activities | (10800) |
| Cash flow from financing activities | 6820 |
| Net change in cash and cash equivalents | **31620** |

Evaluate the following economic assertions:', ARRAY['Treating the investing line as an addition, total cash would change by 53,220 euros on extract 7.', 'The operating figure alone of 35,600 euros is already the full net change on extract 7.', 'On extract 7, cash and cash equivalents change by 31,620 euros in total.', 'Purchases recorded under investing total an outflow of 10,800 euros on extract 7.', 'The investing line on extract 7 reports cash received of 10,800 euros.'], ARRAY[false, false, true, true, false], ARRAY['FALSE — Investing must be subtracted; correct net change is 31,620 euros.', 'FALSE — That ignores investing and financing; correct net is 31,620 euros.', 'TRUE — Operating 35600 − investing 10800 + financing 6820 = 31620.', 'TRUE — The investing line is (10800).', 'FALSE — Investing is an outflow of 10,800 euros.'], '3/5', 12, 'full' ),
( '6.2', 'CASE 6.2.013', 'Cash Flow Mix Over Two Years 13', 'Consider the cash flow extract below (€ thousands).

[[CHART type="bar" title="Operating and investing cash flows"]]
Year 1 | Operating=121 | Investing=-113
Year 2 | Operating=145 | Investing=-241
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Cash flow from operating activities before changes in working capital | 181 | 202 |
| Cash flow from operating activities | 121 | 145 |
| Cash flow from investing activities | (113) | (241) |
| Cash flow from financing activities | 27 | 63 |
| Change in cash and cash equivalents | 35 | -33 |
| Cash and cash equivalents at end of the year | 100 | 78 |

Evaluate the following economic assertions:', ARRAY['Year 2 investing outflow exceeds 195.1% of Year 2 operating cash flow.', 'Operating cash flow grew by more than 16.8% between Year 1 and Year 2.', 'Year 2 ending cash equals €50 thousand.', 'Year-end cash fell by more than 16.6% from Year 1 to Year 2.', 'Year 2 operating cash flow equals €161 thousand.'], ARRAY[false, true, false, true, false], ARRAY['FALSE — Investing/operating ≈ 166.2%.', 'TRUE — Operating cash flow changed by about 19.8% between the two years.', 'FALSE — Ending cash = €78 thousand.', 'TRUE — End-cash change ≈ 22.0%.', 'FALSE — Operating cash flow = €145 thousand.'], '3/5', 13, 'full' ),
( '6.2', 'CASE 6.2.014', 'Collecting a Trade Receivable', 'Analyze why failing to record depreciation would overstate the value of a fixed asset in the accounts. Evaluate the following economic assertions:', ARRAY['A business that reports a profit for the year can never see its cash and cash equivalents fall over that same year.', 'Straight-line annual depreciation on commercial ovens bought by a bakery is 6,000 euros when residual value is ignored.', 'When reconciling profit to cash generated from operating activities under the indirect method, depreciation charged during the year is added back to profit because it did not involve a cash payment.', 'Accumulated depreciation is deducted from the original cost of a fixed asset to arrive at its carrying value, also called its carrying value.', 'A rise in inventory or trade receivables during the year uses cash but does not by itself reduce the profit reported for the period, which helps explain why profit and operating cash flow can differ.'], ARRAY[false, false, true, true, true], ARRAY['FALSE — Non-cash charges and timing differences mean a profitable business can still see its cash balance fall during the year.', 'FALSE — Ignoring residual value overstates the charge; the correct annual amount is 5,500 euros.', 'TRUE — Depreciation is a non-cash charge, so it is added back to profit when working out cash generated from operations.', 'TRUE — Carrying value equals original cost less the depreciation built up against the asset since it was acquired.', 'TRUE — Working capital movements affect cash without moving through the statement of profit and loss in the same way, creating a gap between profit and operating cash flow.'], '3/5', 14, 'full' ),
( '6.2', 'CASE 6.2.015', 'Revenue and Operating Result Chart 15', 'Consider the following two-year statement of profit and loss (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Revenue and operating result"]]
Year 1 | Revenue=1057 | Operating result=297
Year 2 | Revenue=1282 | Operating result=349
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Revenue | 1057 | 1282 |
| Cost of sales | (676) | (824) |
| Gross profit | 381 | 458 |
| Distribution costs | (47) | (60) |
| General and administrative costs | (41) | (52) |
| Other operating result | 4 | 3 |
| Operating result | 297 | 349 |
| Finance costs | (16) | (19) |
| Finance costs – net | (9) | (14) |
| Profit before tax | 288 | 335 |
| Income taxes | (69) | (80) |
| Profit for the year | 219 | 255 |

Evaluate the following economic assertions:', ARRAY['The gross profit margin, gross profit taken as a share of revenue, is more than 4 percentage points higher in Year 2 than in Year 1.', 'The operating result grew by more than 56.9% between Year 1 and Year 2.', 'Revenue grew by more than 11.3% between Year 1 and Year 2.', 'The operating result covers finance costs more than 7.14 times over in Year 1.', 'The operating margin, operating result taken as a share of revenue, exceeds 8.2% in Year 2.'], ARRAY[false, false, true, true, true], ARRAY['FALSE — Gross margins were 36.0% then 35.7%.', 'FALSE — The operating result changed by about 17.5% between the two years.', 'TRUE — Revenue changed by about 21.3% between the two years.', 'TRUE — Interest coverage in Year 1 ≈ 18.6 times.', 'TRUE — Operating margin in Year 2 ≈ 27.2%.'], '5/5', 15, 'full' ),
( '6.2', 'CASE 6.2.016', 'Depreciation Schedule Review 16', 'A business depreciates the following fixed assets on a straight-line basis. Identity is not disclosed.

[[CHART type="bar" title="Annual depreciation by asset"]]
Machinery | Annual depreciation=17000
Delivery truck | Annual depreciation=8500
Computer equipment | Annual depreciation=7333
[[/CHART]]

| Asset details | Amount |
| --- | ---: |
| Asset A – Machinery | €170,000 purchase price, 10-year useful life, no residual value |
| Asset B – Delivery truck | €57,000 purchase price, 6-year useful life, €6,000 residual value |
| Asset C – Computer equipment | €22,000 purchase price, 3-year useful life, no residual value |

Evaluate the following economic assertions:', ARRAY['Residual value of the €57,000 delivery truck is ignored when calculating its annual depreciation.', 'Combined annual depreciation for the three assets is €32,833.', 'After three years, more than 34% of the machinery''s purchase price has been depreciated.', 'The delivery truck''s annual depreciation charge is more than 71.5% higher than the computer equipment''s annual depreciation charge.', 'The machinery accounts for more than 58.8% of the combined annual depreciation charge.'], ARRAY[false, true, false, false, false], ARRAY['FALSE — Residual value is deducted from cost before spreading the remainder.', 'TRUE — Sum of annual charges ≈ €32,833.', 'FALSE — About 30.0% of the machinery''s cost is depreciated after three years.', 'FALSE — Delivery truck ≈ €8,500 a year versus computer equipment ≈ €7,333 a year.', 'FALSE — Machinery''s share of the combined charge ≈ 51.8%.'], '5/5', 16, 'full' ),
( '6.2', 'CASE 6.2.017', 'Repaying a Long-Term Loan', 'Review why depreciation is described as an expense that does not by itself cause a cash payment. Evaluate the following economic assertions:', ARRAY['A business can report a profit for the year in its statement of profit and loss while still seeing its cash and cash equivalents fall, because profit and cash movement are not the same thing.', 'Straight-line annual depreciation on commercial ovens bought by a bakery is 5,500 euros when cost, residual value and useful life are applied correctly.', 'Straight-line annual depreciation on delivery vans bought by a courier firm is 5,140 euros when cost, residual value and useful life are applied correctly.', 'Straight-line annual depreciation on kitchen equipment bought by a hotel chain is 4,125 euros when cost, residual value and useful life are applied correctly.', 'Straight-line annual depreciation on woodworking machinery bought by a furniture maker is 9,800 euros when cost, residual value and useful life are applied correctly.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Non-cash charges and the timing of cash receipts and payments mean a profitable year can still coincide with a falling cash balance.', 'TRUE — That is the correct annual straight-line charge for this commercial ovens.', 'TRUE — That is the correct annual straight-line charge for this delivery vans.', 'TRUE — That is the correct annual straight-line charge for this kitchen equipment.', 'TRUE — That is the correct annual straight-line charge for this woodworking machinery.'], '4/5', 17, 'full' ),
( '6.2', 'CASE 6.2.018', 'Net Change in Cash and Cash Equivalents', 'Consider the following cash flow statement extract (€) for a printing company.

| Item | Amount |
| --- | ---: |
| Cash flow from operating activities | 40400 |
| Cash flow from investing activities | (16200) |
| Cash flow from financing activities | (5820) |
| Net change in cash and cash equivalents | **18380** |

Evaluate the following economic assertions:', ARRAY['On extract 10, cash and cash equivalents change by 18,380 euros in total.', 'Treating the investing line as an addition, total cash would change by 50,780 euros on extract 10.', 'The operating figure alone of 40,400 euros is already the full net change on extract 10.', 'The investing line on extract 10 reports cash received of 16,200 euros.', 'Purchases recorded under investing total an outflow of 16,200 euros on extract 10.'], ARRAY[true, false, false, false, true], ARRAY['TRUE — Operating 40400 − investing 16200 − financing 5820 = 18380.', 'FALSE — Investing must be subtracted; correct net change is 18,380 euros.', 'FALSE — That ignores investing and financing; correct net is 18,380 euros.', 'FALSE — Investing is an outflow of 16,200 euros.', 'TRUE — The investing line is (16200).'], '5/5', 18, 'full' ),
( '6.2', 'CASE 6.2.019', 'Asset Composition Chart 19', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=314
Current liabilities=230
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 516 |
| Machinery | 236 |
| Office equipment | 37 |
| Patents, trademarks and licences | 49 |
| Inventory | 80 |
| Trade receivables | 133 |
| Cash and cash equivalents | 101 |
| Total assets | **1152** |
| **EQUITY** | |
| Share capital | 109 |
| Retained earnings | 549 |
| Total equity | **658** |
| **LIABILITIES** | |
| Long-term bank loan | 189 |
| Bonds payable | 75 |
| Trade payables | 175 |
| Bank overdraft | 55 |
| Total liabilities | **494** |
| Total equity and liabilities | **1152** |

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.27.', 'Working capital of €84 thousand is positive on this balance sheet.', 'Trade receivables make up less than 52.8% of current assets.', 'Cash and cash equivalents make up more than 12.4% of current assets.', 'Inventory of €80 thousand is correctly classified as a current asset rather than a non-current intangible asset.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Current ratio ≈ 1.37.', 'TRUE — Working capital = 84.', 'TRUE — Trade receivables are about 42.4% of current assets.', 'TRUE — Cash and cash equivalents are about 32.2% of current assets.', 'TRUE — Inventory is always a current asset.'], '5/5', 19, 'full' ),
( '6.2', 'CASE 6.2.020', 'Depreciation and Asset Wear', 'Consider an arable farm that owns land alongside a tractor and is reviewing how each asset is treated for depreciation purposes. Evaluate the following economic assertions:', ARRAY['Straight-line annual depreciation on printing press bought by a printing company is 6,010 euros when cost, residual value and useful life are applied correctly.', 'Straight-line annual depreciation on point-of-sale tills bought by a electronics retailer is 13,500 euros when cost, residual value and useful life are applied correctly.', 'Straight-line annual depreciation on refrigerated trucks bought by a dairy processor is 9,950 euros when cost, residual value and useful life are applied correctly.', 'Straight-line annual depreciation on dispensing equipment bought by a pharmacy chain is 8,340 euros when cost, residual value and useful life are applied correctly.', 'Straight-line annual depreciation on binding machines bought by a publishing house is 12,875 euros when cost, residual value and useful life are applied correctly.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — That is the correct annual straight-line charge for this printing press.', 'TRUE — That is the correct annual straight-line charge for this point-of-sale tills.', 'TRUE — That is the correct annual straight-line charge for this refrigerated trucks.', 'TRUE — That is the correct annual straight-line charge for this dispensing equipment.', 'TRUE — That is the correct annual straight-line charge for this binding machines.'], '2/5', 20, 'full' ),
( '6.2', 'CASE 6.2.021', 'Liquidity From the Balance Sheet 21', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=230
Current liabilities=176
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 351 |
| Machinery | 186 |
| Office equipment | 70 |
| Patents, trademarks and licences | 53 |
| Inventory | 124 |
| Trade receivables | 76 |
| Cash and cash equivalents | 30 |
| Total assets | **890** |
| **EQUITY** | |
| Share capital | 181 |
| Retained earnings | 115 |
| Total equity | **296** |
| **LIABILITIES** | |
| Long-term bank loan | 356 |
| Bonds payable | 62 |
| Trade payables | 142 |
| Bank overdraft | 34 |
| Total liabilities | **594** |
| Total equity and liabilities | **890** |

Evaluate the following economic assertions:', ARRAY['The current ratio is below 1.28.', 'Buildings make up more than 48.3% of total assets.', 'Cash and cash equivalents make up more than 22.6% of current assets.', 'The combined total of equity and non-current liabilities exceeds non-current assets by more than 33.1%.', 'The current ratio exceeds 1.21.'], ARRAY[false, false, false, false, true], ARRAY['FALSE — Current ratio ≈ 1.31.', 'FALSE — Buildings are about 39.4% of total assets.', 'FALSE — Cash and cash equivalents are about 13.0% of current assets.', 'FALSE — Long-term financing covers non-current assets by about 8.2%.', 'TRUE — Current ratio ≈ 1.31.'], '5/5', 21, 'full' ),
( '6.2', 'CASE 6.2.022', 'Depreciation as a Non-Cash Expense', 'Analyze why land is generally treated differently from buildings, machinery and vehicles when it comes to depreciation. Evaluate the following economic assertions:', ARRAY['Straight-line annual depreciation on office computer equipment bought by a software developer is 4,200 euros when residual value is ignored.', 'Straight-line annual depreciation on diagnostic equipment bought by a garage is 11,625 euros when residual value is ignored.', 'Straight-line annual depreciation on stamping presses bought by a car parts manufacturer is 10,670 euros when cost, residual value and useful life are applied correctly.', 'Straight-line annual depreciation on woodworking machinery bought by a furniture maker is 10,200 euros when residual value is ignored.', 'Straight-line annual depreciation on brewing tanks bought by a brewery is 9,250 euros when residual value is ignored.'], ARRAY[false, false, true, false, false], ARRAY['FALSE — Ignoring residual value overstates the charge; the correct annual amount is 3,680 euros.', 'FALSE — Ignoring residual value overstates the charge; the correct annual amount is 10,125 euros.', 'TRUE — That is the correct annual straight-line charge for this stamping presses.', 'FALSE — Ignoring residual value overstates the charge; the correct annual amount is 9,800 euros.', 'FALSE — Ignoring residual value overstates the charge; the correct annual amount is 8,750 euros.'], '2/5', 22, 'full' ),
( '6.2', 'CASE 6.2.023', 'Cash Flow Mix Over Two Years 23', 'Consider the cash flow extract below (€ thousands).

[[CHART type="bar" title="Operating and investing cash flows"]]
Year 1 | Operating=150 | Investing=-107
Year 2 | Operating=164 | Investing=-217
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Cash flow from operating activities before changes in working capital | 198 | 241 |
| Cash flow from operating activities | 150 | 164 |
| Cash flow from investing activities | (107) | (217) |
| Cash flow from financing activities | 42 | 89 |
| Change in cash and cash equivalents | 85 | 36 |
| Cash and cash equivalents at end of the year | 140 | 122 |

Evaluate the following economic assertions:', ARRAY['Operating cash flow grew by more than 13.7% between Year 1 and Year 2.', 'Year-end cash fell by more than 19% from Year 1 to Year 2.', 'Year 2 investing outflow exceeds 117.3% of Year 2 operating cash flow.', 'Year 2 ending cash equals €152 thousand.', 'Year 2 operating cash flow equals €164 thousand.'], ARRAY[false, false, true, false, true], ARRAY['FALSE — Operating cash flow changed by about 9.3% between the two years.', 'FALSE — End-cash change ≈ 12.9%.', 'TRUE — Investing/operating ≈ 132.3%.', 'FALSE — Ending cash = €122 thousand.', 'TRUE — Operating cash flow = €164 thousand.'], '5/5', 23, 'full' ),
( '6.2', 'CASE 6.2.024', 'Profit and Loss Over Two Years 24', 'Consider the following two-year statement of profit and loss (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Revenue and operating result"]]
Year 1 | Revenue=967 | Operating result=241
Year 2 | Revenue=1158 | Operating result=290
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Revenue | 967 | 1158 |
| Cost of sales | (637) | (762) |
| Gross profit | 330 | 396 |
| Distribution costs | (50) | (60) |
| General and administrative costs | (39) | (50) |
| Other operating result | 0 | 4 |
| Operating result | 241 | 290 |
| Finance costs | (15) | (22) |
| Finance costs – net | (11) | (20) |
| Profit before tax | 230 | 270 |
| Income taxes | (55) | (62) |
| Profit for the year | 175 | 208 |

Evaluate the following economic assertions:', ARRAY['Revenue grew by more than 9.7% between Year 1 and Year 2.', 'The gross profit margin, gross profit taken as a share of revenue, is more than 5.5 percentage points higher in Year 2 than in Year 1.', 'Finance costs grew by more than 40% between Year 1 and Year 2, outpacing the growth in the operating result.', 'The operating result covers finance costs more than 5.39 times over in Year 1.', 'The operating margin, operating result taken as a share of revenue, exceeds 19.5% in Year 2.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — Revenue changed by about 19.8% between the two years.', 'FALSE — Gross margins were 34.1% then 34.2%.', 'TRUE — Finance costs moved from 15 to 22; operating result moved from 241 to 290.', 'TRUE — Interest coverage in Year 1 ≈ 16.1 times.', 'TRUE — Operating margin in Year 2 ≈ 25.0%.'], '3/5', 24, 'full' ),
( '6.2', 'CASE 6.2.025', 'Straight-Line Depreciation Method', 'Consider the following cash flow statement extract (€) for a logistics company.

| Item | Amount |
| --- | ---: |
| Cash flow from operating activities | 45200 |
| Cash flow from investing activities | (12600) |
| Cash flow from financing activities | 8140 |
| Net change in cash and cash equivalents | **40740** |

Evaluate the following economic assertions:', ARRAY['Treating the investing line as an addition, total cash would change by 65,940 euros on extract 13.', 'On extract 13, cash and cash equivalents change by 40,740 euros in total.', 'The operating figure alone of 45,200 euros is already the full net change on extract 13.', 'Purchases recorded under investing total an outflow of 12,600 euros on extract 13.', 'Financing activities add 8,140 euros to cash on extract 13.'], ARRAY[false, true, false, true, true], ARRAY['FALSE — Investing must be subtracted; correct net change is 40,740 euros.', 'TRUE — Operating 45200 − investing 12600 + financing 8140 = 40740.', 'FALSE — That ignores investing and financing; correct net is 40,740 euros.', 'TRUE — The investing line is (12600).', 'TRUE — Financing is an inflow of 8,140 euros.'], '2/5', 25, 'full' ),
( '6.2', 'CASE 6.2.026', 'Book Value After Depreciation', 'Analyze how a loss incurred during the year affects the equity reported on the balance sheet. Evaluate the following economic assertions:', ARRAY['After two years, the carrying value of a courier firm''s delivery vans is 18,220 euros.', 'Straight-line annual depreciation on tractor bought by a arable farm is 17,250 euros when residual value is ignored.', 'After two years, the carrying value of a construction firm''s heavy construction machinery is 23,200 euros.', 'After two years, the carrying value of a hotel chain''s kitchen equipment is 29,250 euros.', 'Straight-line annual depreciation on point-of-sale tills bought by a electronics retailer is 14,700 euros when residual value is ignored.'], ARRAY[true, false, true, true, false], ARRAY['TRUE — Cost less two years of depreciation leaves 18,220 euros.', 'FALSE — Ignoring residual value overstates the charge; the correct annual amount is 15,950 euros.', 'TRUE — Cost less two years of depreciation leaves 23,200 euros.', 'TRUE — Cost less two years of depreciation leaves 29,250 euros.', 'FALSE — Ignoring residual value overstates the charge; the correct annual amount is 13,500 euros.'], '5/5', 26, 'full' ),
( '6.2', 'CASE 6.2.027', 'Annual Depreciation Chart 27', 'A business depreciates the following fixed assets on a straight-line basis. Identity is not disclosed.

[[CHART type="bar" title="Annual depreciation by asset"]]
Machinery | Annual depreciation=21250
Delivery truck | Annual depreciation=7500
Computer equipment | Annual depreciation=6667
[[/CHART]]

| Asset details | Amount |
| --- | ---: |
| Asset A – Machinery | €170,000 purchase price, 8-year useful life, no residual value |
| Asset B – Delivery truck | €52,000 purchase price, 6-year useful life, €7,000 residual value |
| Asset C – Computer equipment | €20,000 purchase price, 3-year useful life, no residual value |

Evaluate the following economic assertions:', ARRAY['After three years, the computer equipment, originally costing €20,000, is fully written down to nil.', 'Combined annual depreciation for the three assets is €32,858.', 'After three years, the delivery truck''s book value is €33,574.', 'Residual value of the €52,000 delivery truck is ignored when calculating its annual depreciation.', 'After three years, the combined book value of all three assets exceeds €120,260.'], ARRAY[true, false, false, false, true], ARRAY['TRUE — Useful life is 3 years with no residual value.', 'FALSE — Sum of annual charges ≈ €35,417.', 'FALSE — Book value ≈ €29,500.', 'FALSE — Residual value is deducted from cost before spreading the remainder.', 'TRUE — Combined book value ≈ €135,750.'], '5/5', 27, 'full' ),
( '6.2', 'CASE 6.2.028', 'Asset Composition Chart 28', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=403
Current liabilities=283
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 422 |
| Machinery | 166 |
| Office equipment | 79 |
| Patents, trademarks and licences | 93 |
| Inventory | 141 |
| Trade receivables | 161 |
| Cash and cash equivalents | 101 |
| Total assets | **1163** |
| **EQUITY** | |
| Share capital | 121 |
| Retained earnings | 452 |
| Total equity | **573** |
| **LIABILITIES** | |
| Long-term bank loan | 239 |
| Bonds payable | 68 |
| Trade payables | 237 |
| Bank overdraft | 46 |
| Total liabilities | **590** |
| Total equity and liabilities | **1163** |

Evaluate the following economic assertions:', ARRAY['The current ratio is below 0.78.', 'The current ratio exceeds 1.35.', 'Working capital of €120 thousand is positive on this balance sheet.', 'Inventory make up more than 31.7% of current assets.', 'Trade receivables make up less than 41% of current assets.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — Current ratio ≈ 1.42.', 'TRUE — Current ratio ≈ 1.42.', 'TRUE — Working capital = 120.', 'TRUE — Inventory are about 35.0% of current assets.', 'TRUE — Trade receivables are about 40.0% of current assets.'], '5/5', 28, 'full' ),
( '6.2', 'CASE 6.2.029', 'Land and Non-Depreciable Assets', 'Consider a pharmacy chain reviewing why its reported profit for the year does not match the change in its cash balance. Evaluate the following economic assertions:', ARRAY['Straight-line annual depreciation on forklift trucks bought by a logistics company is 13,000 euros when residual value is ignored.', 'After two years, the carrying value of a software developer''s office computer equipment is 34,640 euros.', 'Straight-line annual depreciation on refrigerated trucks bought by a dairy processor is 10,313 euros when residual value is ignored.', 'After two years, the carrying value of a garage''s diagnostic equipment is 26,250 euros.', 'Straight-line annual depreciation on dispensing equipment bought by a pharmacy chain is 8,700 euros when residual value is ignored.'], ARRAY[false, true, false, true, false], ARRAY['FALSE — Ignoring residual value overstates the charge; the correct annual amount is 12,650 euros.', 'TRUE — Cost less two years of depreciation leaves 34,640 euros.', 'FALSE — Ignoring residual value overstates the charge; the correct annual amount is 9,950 euros.', 'TRUE — Cost less two years of depreciation leaves 26,250 euros.', 'FALSE — Ignoring residual value overstates the charge; the correct annual amount is 8,340 euros.'], '4/5', 29, 'full' ),
( '6.2', 'CASE 6.2.030', 'Liquidity From the Balance Sheet 30', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=475
Current liabilities=139
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 393 |
| Machinery | 265 |
| Office equipment | 43 |
| Patents, trademarks and licences | 81 |
| Inventory | 276 |
| Trade receivables | 96 |
| Cash and cash equivalents | 103 |
| Total assets | **1257** |
| **EQUITY** | |
| Share capital | 217 |
| Retained earnings | 618 |
| Total equity | **835** |
| **LIABILITIES** | |
| Long-term bank loan | 220 |
| Bonds payable | 63 |
| Trade payables | 76 |
| Bank overdraft | 63 |
| Total liabilities | **422** |
| Total equity and liabilities | **1257** |

Evaluate the following economic assertions:', ARRAY['The equity ratio is below 42.5%.', 'The current ratio exceeds 1.65.', 'Working capital of €336 thousand is positive on this balance sheet.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 0.96 times over.', 'The debt ratio exceeds 69.4%.'], ARRAY[false, true, true, true, false], ARRAY['FALSE — Equity ratio ≈ 66.4%.', 'TRUE — Current ratio ≈ 3.42.', 'TRUE — Working capital = 336.', 'TRUE — Acid-test ratio ≈ 1.43.', 'FALSE — Debt ratio ≈ 33.6%.'], '3/5', 30, 'full' ),
( '6.2', 'CASE 6.2.031', 'Cash Flow Mix Over Two Years 31', 'Consider the cash flow extract below (€ thousands).

[[CHART type="bar" title="Operating and investing cash flows"]]
Year 1 | Operating=126 | Investing=-123
Year 2 | Operating=146 | Investing=-193
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Cash flow from operating activities before changes in working capital | 193 | 218 |
| Cash flow from operating activities | 126 | 146 |
| Cash flow from investing activities | (123) | (193) |
| Cash flow from financing activities | 39 | 97 |
| Change in cash and cash equivalents | 42 | 50 |
| Cash and cash equivalents at end of the year | 98 | 90 |

Evaluate the following economic assertions:', ARRAY['Year 2 ending cash equals €90 thousand.', 'Operating cash flow grew by more than 19.6% between Year 1 and Year 2.', 'Year 2 operating cash flow equals €146 thousand.', 'Year 2 investing outflow exceeds 186.9% of Year 2 operating cash flow.', 'Year-end cash fell by more than 13.5% from Year 1 to Year 2.'], ARRAY[true, false, true, false, false], ARRAY['TRUE — Ending cash = €90 thousand.', 'FALSE — Operating cash flow changed by about 15.9% between the two years.', 'TRUE — Operating cash flow = €146 thousand.', 'FALSE — Investing/operating ≈ 132.2%.', 'FALSE — End-cash change ≈ 8.2%.'], '3/5', 31, 'full' ),
( '6.2', 'CASE 6.2.032', 'Profit Raises Equity', 'Consider the following cash flow statement extract (€) for a fitness club chain.

| Item | Amount |
| --- | ---: |
| Cash flow from operating activities | 50000 |
| Cash flow from investing activities | (9000) |
| Cash flow from financing activities | (6900) |
| Net change in cash and cash equivalents | **34100** |

Evaluate the following economic assertions:', ARRAY['Treating the investing line as an addition, total cash would change by 52,100 euros on extract 16.', 'On extract 16, cash and cash equivalents change by 34,100 euros in total.', 'Purchases recorded under investing total an outflow of 9,000 euros on extract 16.', 'The operating figure alone of 50,000 euros is already the full net change on extract 16.', 'Financing activities remove 6,900 euros from cash on extract 16.'], ARRAY[false, true, true, false, true], ARRAY['FALSE — Investing must be subtracted; correct net change is 34,100 euros.', 'TRUE — Operating 50000 − investing 9000 − financing 6900 = 34100.', 'TRUE — The investing line is (9000).', 'FALSE — That ignores investing and financing; correct net is 34,100 euros.', 'TRUE — Financing is an outflow of 6,900 euros.'], '5/5', 32, 'full' ),
( '6.2', 'CASE 6.2.033', 'Loss Reduces Equity', 'Review the three sections of a cash flow statement: operating, investing and financing activities. Evaluate the following economic assertions:', ARRAY['After two years, the carrying value of a printing company''s printing press is 52,480 euros.', 'After two years, the carrying value of a arable farm''s tractor is 37,100 euros.', 'After two years, the carrying value of a electronics retailer''s point-of-sale tills is 46,500 euros.', 'After two years, the carrying value of a logistics company''s forklift trucks is 52,700 euros.', 'After two years, the carrying value of a dairy processor''s refrigerated trucks is 62,600 euros.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Cost less two years of depreciation leaves 52,480 euros.', 'TRUE — Cost less two years of depreciation leaves 37,100 euros.', 'TRUE — Cost less two years of depreciation leaves 46,500 euros.', 'TRUE — Cost less two years of depreciation leaves 52,700 euros.', 'TRUE — Cost less two years of depreciation leaves 62,600 euros.'], '5/5', 33, 'full' ),
( '6.2', 'CASE 6.2.034', 'Profit and Loss Over Two Years 34', 'Consider the following two-year statement of profit and loss (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Revenue and operating result"]]
Year 1 | Revenue=805 | Operating result=256
Year 2 | Revenue=972 | Operating result=314
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Revenue | 805 | 972 |
| Cost of sales | (477) | (568) |
| Gross profit | 328 | 404 |
| Distribution costs | (36) | (49) |
| General and administrative costs | (33) | (44) |
| Other operating result | (3) | 3 |
| Operating result | 256 | 314 |
| Finance costs | (15) | (18) |
| Finance costs – net | (12) | (12) |
| Profit before tax | 244 | 302 |
| Income taxes | (49) | (61) |
| Profit for the year | 195 | 241 |

Evaluate the following economic assertions:', ARRAY['Revenue grew by more than 20.7% between Year 1 and Year 2.', 'Profit for the year grew by more than 9.1% between Year 1 and Year 2.', 'The operating result covers finance costs more than 9.29 times over in Year 1.', 'The operating margin, operating result taken as a share of revenue, exceeds 19.8% in Year 2.', 'The gross profit margin, gross profit taken as a share of revenue, is more than 2.5 percentage points higher in Year 2 than in Year 1.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Revenue changed by about 20.7% between the two years.', 'TRUE — Profit for the year changed by about 23.6% between the two years.', 'TRUE — Interest coverage in Year 1 ≈ 17.1 times.', 'TRUE — Operating margin in Year 2 ≈ 32.3%.', 'FALSE — Gross margins were 40.7% then 41.6%.'], '4/5', 34, 'full' ),
( '6.2', 'CASE 6.2.035', 'Annual Depreciation Chart 35', 'A business depreciates the following fixed assets on a straight-line basis. Identity is not disclosed.

[[CHART type="bar" title="Annual depreciation by asset"]]
Machinery | Annual depreciation=11273
Delivery truck | Annual depreciation=7000
Computer equipment | Annual depreciation=6000
[[/CHART]]

| Asset details | Amount |
| --- | ---: |
| Asset A – Machinery | €124,000 purchase price, 11-year useful life, no residual value |
| Asset B – Delivery truck | €46,000 purchase price, 6-year useful life, €4,000 residual value |
| Asset C – Computer equipment | €18,000 purchase price, 3-year useful life, no residual value |

Evaluate the following economic assertions:', ARRAY['Combined annual depreciation for the three assets is €24,273.', 'After three years, the computer equipment, originally costing €18,000, is fully written down to nil.', 'After three years, the combined book value of all three assets exceeds €106,072.', 'Without recording depreciation on the €124,000 machinery, non-current assets on the balance sheet would be overstated.', 'After three years, the delivery truck''s book value is €28,880.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Sum of annual charges ≈ €24,273.', 'TRUE — Useful life is 3 years with no residual value.', 'TRUE — Combined book value ≈ €115,182.', 'TRUE — Assets would stay at historical cost without write-downs.', 'FALSE — Book value ≈ €25,000.'], '5/5', 35, 'full' ),
( '6.2', 'CASE 6.2.036', 'Liquidity From the Balance Sheet 36', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=356
Current liabilities=182
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 427 |
| Machinery | 207 |
| Office equipment | 30 |
| Patents, trademarks and licences | 53 |
| Inventory | 164 |
| Trade receivables | 92 |
| Cash and cash equivalents | 100 |
| Total assets | **1073** |
| **EQUITY** | |
| Share capital | 147 |
| Retained earnings | 329 |
| Total equity | **476** |
| **LIABILITIES** | |
| Long-term bank loan | 329 |
| Bonds payable | 86 |
| Trade payables | 156 |
| Bank overdraft | 26 |
| Total liabilities | **597** |
| Total equity and liabilities | **1073** |

Evaluate the following economic assertions:', ARRAY['The current ratio is below 1.18.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 1.07 times over.', 'The equity ratio is below 21%.', 'Working capital of €174 thousand is positive on this balance sheet.', 'Trade receivables make up less than 44.2% of current assets.'], ARRAY[false, false, false, true, true], ARRAY['FALSE — Current ratio ≈ 1.96.', 'FALSE — Acid-test ratio ≈ 1.05.', 'FALSE — Equity ratio ≈ 44.4%.', 'TRUE — Working capital = 174.', 'TRUE — Trade receivables are about 25.8% of current assets.'], '5/5', 36, 'full' ),
( '6.2', 'CASE 6.2.037', 'Profit Versus Cash Flow', 'Analyze which section of the cash flow statement reflects cash movements from core trading activities. Evaluate the following economic assertions:', ARRAY['After two years, the carrying value of a pharmacy chain''s dispensing equipment is 70,320 euros.', 'Straight-line annual depreciation on laptop computers bought by a IT consultancy is 16,750 euros when residual value is ignored.', 'After two years, the carrying value of a fitness club chain''s exercise equipment is 47,950 euros.', 'Straight-line annual depreciation on binding machines bought by a publishing house is 13,125 euros when residual value is ignored.', 'After two years, the carrying value of a restaurant chain''s commercial refrigerators is 59,680 euros.'], ARRAY[true, false, true, false, true], ARRAY['TRUE — Cost less two years of depreciation leaves 70,320 euros.', 'FALSE — Ignoring residual value overstates the charge; the correct annual amount is 15,750 euros.', 'TRUE — Cost less two years of depreciation leaves 47,950 euros.', 'FALSE — Ignoring residual value overstates the charge; the correct annual amount is 12,875 euros.', 'TRUE — Cost less two years of depreciation leaves 59,680 euros.'], '5/5', 37, 'full' ),
( '6.2', 'CASE 6.2.038', 'Turnover and the Balance Sheet', 'Consider the following cash flow statement extract (€) for a publishing house.

| Item | Amount |
| --- | ---: |
| Cash flow from operating activities | 54800 |
| Cash flow from investing activities | (14400) |
| Cash flow from financing activities | 9460 |
| Net change in cash and cash equivalents | **49860** |

Evaluate the following economic assertions:', ARRAY['On extract 19, cash and cash equivalents change by 49,860 euros in total.', 'Treating the investing line as an addition, total cash would change by 78,660 euros on extract 19.', 'Purchases recorded under investing total an outflow of 14,400 euros on extract 19.', 'The operating figure alone of 54,800 euros is already the full net change on extract 19.', 'The investing line on extract 19 reports cash received of 14,400 euros.'], ARRAY[true, false, true, false, false], ARRAY['TRUE — Operating 54800 − investing 14400 + financing 9460 = 49860.', 'FALSE — Investing must be subtracted; correct net change is 49,860 euros.', 'TRUE — The investing line is (14400).', 'FALSE — That ignores investing and financing; correct net is 49,860 euros.', 'FALSE — Investing is an outflow of 14,400 euros.'], '4/5', 38, 'full' ),
( '6.2', 'CASE 6.2.039', 'Liquidity From the Balance Sheet 39', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=276
Current liabilities=132
[[/CHART]]

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

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.28.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 1.35 times over.', 'Working capital of €144 thousand is positive on this balance sheet.', 'The equity ratio is below 40.6%.', 'Buildings make up more than 47.1% of total assets.'], ARRAY[true, false, true, true, false], ARRAY['TRUE — Current ratio ≈ 2.09.', 'FALSE — Acid-test ratio ≈ 1.19.', 'TRUE — Working capital = 144.', 'TRUE — Equity ratio ≈ 33.1%.', 'FALSE — Buildings are about 35.7% of total assets.'], '3/5', 39, 'full' ),
( '6.2', 'CASE 6.2.040', 'Cash Flow Statement Over Two Years 40', 'Consider the cash flow extract below (€ thousands).

[[CHART type="bar" title="Operating and investing cash flows"]]
Year 1 | Operating=159 | Investing=-135
Year 2 | Operating=166 | Investing=-259
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Cash flow from operating activities before changes in working capital | 195 | 234 |
| Cash flow from operating activities | 159 | 166 |
| Cash flow from investing activities | (135) | (259) |
| Cash flow from financing activities | 44 | 109 |
| Change in cash and cash equivalents | 68 | 16 |
| Cash and cash equivalents at end of the year | 120 | 109 |

Evaluate the following economic assertions:', ARRAY['Year 2 operating cash flow equals €166 thousand.', 'Operating cash flow grew by more than 7.2% between Year 1 and Year 2.', 'Collecting a customer invoice is an operating cash inflow.', 'Year 2 investing outflow exceeds 156.2% of Year 2 operating cash flow.', 'Year-end cash fell by more than 24.6% from Year 1 to Year 2.'], ARRAY[true, false, true, false, false], ARRAY['TRUE — Operating cash flow = €166 thousand.', 'FALSE — Operating cash flow changed by about 4.4% between the two years.', 'TRUE — Trade-receivable collections are operating.', 'FALSE — Investing/operating ≈ 156.0%.', 'FALSE — End-cash change ≈ 9.2%.'], '3/5', 40, 'full' ),
( '6.2', 'CASE 6.2.041', 'Revenue and Operating Result Chart 41', 'Consider the following two-year statement of profit and loss (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Revenue and operating result"]]
Year 1 | Revenue=913 | Operating result=268
Year 2 | Revenue=1073 | Operating result=310
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Revenue | 913 | 1073 |
| Cost of sales | (564) | (665) |
| Gross profit | 349 | 408 |
| Distribution costs | (51) | (56) |
| General and administrative costs | (33) | (42) |
| Other operating result | 3 | 0 |
| Operating result | 268 | 310 |
| Finance costs | (18) | (23) |
| Finance costs – net | (13) | (21) |
| Profit before tax | 255 | 289 |
| Income taxes | (57) | (66) |
| Profit for the year | 198 | 223 |

Evaluate the following economic assertions:', ARRAY['Finance costs grew by more than 18.3% between Year 1 and Year 2, outpacing the growth in the operating result.', 'The gross profit margin, gross profit taken as a share of revenue, is more than 6 percentage points higher in Year 2 than in Year 1.', 'The operating result grew by more than 22.2% between Year 1 and Year 2.', 'Profit for the year grew by more than 29.8% between Year 1 and Year 2.', 'The effective tax rate rose by more than 1.3 percentage points between Year 1 and Year 2.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Finance costs moved from 18 to 23; operating result moved from 268 to 310.', 'FALSE — Gross margins were 38.2% then 38.0%.', 'FALSE — The operating result changed by about 15.7% between the two years.', 'FALSE — Profit for the year changed by about 12.6% between the two years.', 'FALSE — Effective tax rate moved from 22.4% to 22.8%.'], '5/5', 41, 'full' ),
( '6.2', 'CASE 6.2.042', 'Depreciable Amount and Residual Value', 'Analyze which section of the cash flow statement reflects cash movements from borrowing, repaying loans or transactions with owners. Evaluate the following economic assertions:', ARRAY['After two years, the carrying value of a car parts manufacturer''s stamping presses is 88,160 euros.', 'Straight-line annual depreciation on sorting machinery bought by a recycling firm is 20,500 euros when residual value is ignored.', 'After two years, the carrying value of a packaging manufacturer''s packaging machinery is 58,800 euros.', 'After two years, the carrying value of a catering company''s catering vans is 72,860 euros.', 'After two years, the carrying value of a recycling firm''s sorting machinery is 83,800 euros.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — Cost less two years of depreciation leaves 88,160 euros.', 'FALSE — Ignoring residual value overstates the charge; the correct annual amount is 19,600 euros.', 'TRUE — Cost less two years of depreciation leaves 58,800 euros.', 'TRUE — Cost less two years of depreciation leaves 72,860 euros.', 'TRUE — Cost less two years of depreciation leaves 83,800 euros.'], '5/5', 42, 'full' ),
( '6.2', 'CASE 6.2.043', 'Bakery Oven Depreciation Charge', 'Review why a negative cash flow from investing activities does not necessarily indicate financial distress. Evaluate the following economic assertions:', ARRAY['After two years, the carrying value of a ceramics workshop''s kiln equipment is 97,150 euros.', 'Straight-line annual depreciation on kiln equipment bought by a ceramics workshop is 15,938 euros when residual value is ignored.', 'Accumulated depreciation on a bakery''s commercial ovens after three years is 16,500 euros.', 'Accumulated depreciation on a courier firm''s delivery vans after three years is 15,420 euros.', 'Accumulated depreciation on a construction firm''s heavy construction machinery after three years is 14,700 euros.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — Cost less two years of depreciation leaves 97,150 euros.', 'FALSE — Ignoring residual value overstates the charge; the correct annual amount is 15,175 euros.', 'TRUE — Three annual charges of 5,500 euros accumulate to 16,500 euros.', 'TRUE — Three annual charges of 5,140 euros accumulate to 15,420 euros.', 'TRUE — Three annual charges of 4,900 euros accumulate to 14,700 euros.'], '5/5', 43, 'full' ),
( '6.2', 'CASE 6.2.044', 'Depreciation Schedule Review 44', 'A business depreciates the following fixed assets on a straight-line basis. Identity is not disclosed.

[[CHART type="bar" title="Annual depreciation by asset"]]
Machinery | Annual depreciation=11091
Delivery truck | Annual depreciation=6833
Computer equipment | Annual depreciation=7000
[[/CHART]]

| Asset details | Amount |
| --- | ---: |
| Asset A – Machinery | €122,000 purchase price, 11-year useful life, no residual value |
| Asset B – Delivery truck | €48,000 purchase price, 6-year useful life, €7,000 residual value |
| Asset C – Computer equipment | €21,000 purchase price, 3-year useful life, no residual value |

Evaluate the following economic assertions:', ARRAY['After three years, the delivery truck''s book value is €27,500.', 'After three years, the computer equipment, originally costing €21,000, is fully written down to nil.', 'After three years, the combined book value of all three assets exceeds €101,344.', 'Without recording depreciation on the €122,000 machinery, non-current assets on the balance sheet would be overstated.', 'Straight-line depreciation on the €122,000 machinery charges the same amount each year of its useful life, since it has no residual value.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Book value ≈ €27,500.', 'TRUE — Useful life is 3 years with no residual value.', 'TRUE — Combined book value ≈ €116,227.', 'TRUE — Assets would stay at historical cost without write-downs.', 'TRUE — Straight-line spreads depreciable cost evenly.'], '4/5', 44, 'full' ),
( '6.2', 'CASE 6.2.045', 'Liquidity From the Balance Sheet 45', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=353
Current liabilities=182
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 494 |
| Machinery | 179 |
| Office equipment | 37 |
| Patents, trademarks and licences | 24 |
| Inventory | 127 |
| Trade receivables | 151 |
| Cash and cash equivalents | 75 |
| Total assets | **1087** |
| **EQUITY** | |
| Share capital | 171 |
| Retained earnings | 273 |
| Total equity | **444** |
| **LIABILITIES** | |
| Long-term bank loan | 416 |
| Bonds payable | 45 |
| Trade payables | 129 |
| Bank overdraft | 53 |
| Total liabilities | **643** |
| Total equity and liabilities | **1087** |

Evaluate the following economic assertions:', ARRAY['The current ratio is below 0.81.', 'The current ratio exceeds 1.57.', 'Working capital of €171 thousand is positive on this balance sheet.', 'Trade receivables make up less than 44.3% of current assets.', 'The equity ratio is below 33.9%.'], ARRAY[false, true, true, true, false], ARRAY['FALSE — Current ratio ≈ 1.94.', 'TRUE — Current ratio ≈ 1.94.', 'TRUE — Working capital = 171.', 'TRUE — Trade receivables are about 42.8% of current assets.', 'FALSE — Equity ratio ≈ 40.8%.'], '2/5', 45, 'full' ),
( '6.2', 'CASE 6.2.046', 'Courier Van Fleet Cash Outflow', 'Consider the following cash flow statement extract (€) for a catering company.

| Item | Amount |
| --- | ---: |
| Cash flow from operating activities | 59600 |
| Cash flow from investing activities | (10800) |
| Cash flow from financing activities | (7980) |
| Net change in cash and cash equivalents | **40820** |

Evaluate the following economic assertions:', ARRAY['On extract 22, cash and cash equivalents change by 40,820 euros in total.', 'Treating the investing line as an addition, total cash would change by 62,420 euros on extract 22.', 'Purchases recorded under investing total an outflow of 10,800 euros on extract 22.', 'Financing activities remove 7,980 euros from cash on extract 22.', 'Operating cash of 59,600 euros more than covers the investing outflow of 10,800 euros on extract 22.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — Operating 59600 − investing 10800 − financing 7980 = 40820.', 'FALSE — Investing must be subtracted; correct net change is 40,820 euros.', 'TRUE — The investing line is (10800).', 'TRUE — Financing is an outflow of 7,980 euros.', 'TRUE — Operating 59600 versus investing 10800.'], '5/5', 46, 'full' ),
( '6.2', 'CASE 6.2.047', 'Balance Sheet Structure Review 47', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=368
Current liabilities=313
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 508 |
| Machinery | 145 |
| Office equipment | 57 |
| Patents, trademarks and licences | 67 |
| Inventory | 190 |
| Trade receivables | 96 |
| Cash and cash equivalents | 82 |
| Total assets | **1145** |
| **EQUITY** | |
| Share capital | 195 |
| Retained earnings | 204 |
| Total equity | **399** |
| **LIABILITIES** | |
| Long-term bank loan | 370 |
| Bonds payable | 63 |
| Trade payables | 227 |
| Bank overdraft | 86 |
| Total liabilities | **746** |
| Total equity and liabilities | **1145** |

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.58.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 1.15 times over.', 'The debt ratio exceeds 66.8%.', 'Buildings make up more than 46.2% of total assets.', 'Working capital of €55 thousand is positive on this balance sheet.'], ARRAY[false, false, false, false, true], ARRAY['FALSE — Current ratio ≈ 1.18.', 'FALSE — Acid-test ratio ≈ 0.57.', 'FALSE — Debt ratio ≈ 65.2%.', 'FALSE — Buildings are about 44.4% of total assets.', 'TRUE — Working capital = 55.'], '2/5', 47, 'full' ),
( '6.2', 'CASE 6.2.048', 'Construction Firm Machinery Financing', 'Consider a software developer that reported a healthy profit for the year but noticed its cash and cash equivalents had fallen. Evaluate the following economic assertions:', ARRAY['Accumulated depreciation on a brewery''s brewing tanks after three years is 26,250 euros.', 'Accumulated depreciation on a textile mill''s spinning machinery after three years is 21,150 euros.', 'Accumulated depreciation on a printing company''s printing press after three years is 18,030 euros.', 'Accumulated depreciation on a arable farm''s tractor after three years is 47,850 euros.', 'After two years, the carrying value of a courier firm''s delivery vans is 38,780 euros.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Three annual charges of 8,750 euros accumulate to 26,250 euros.', 'TRUE — Three annual charges of 7,050 euros accumulate to 21,150 euros.', 'TRUE — Three annual charges of 6,010 euros accumulate to 18,030 euros.', 'TRUE — Three annual charges of 15,950 euros accumulate to 47,850 euros.', 'FALSE — Depreciation reduces carrying value; the correct figure is 18,220 euros.'], '2/5', 48, 'full' ),
( '6.2', 'CASE 6.2.049', 'Revenue and Operating Result Chart 49', 'Consider the following two-year statement of profit and loss (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Revenue and operating result"]]
Year 1 | Revenue=1091 | Operating result=322
Year 2 | Revenue=1231 | Operating result=360
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Revenue | 1091 | 1231 |
| Cost of sales | (701) | (781) |
| Gross profit | 390 | 450 |
| Distribution costs | (36) | (41) |
| General and administrative costs | (35) | (47) |
| Other operating result | 3 | (2) |
| Operating result | 322 | 360 |
| Finance costs | (15) | (23) |
| Finance costs – net | (9) | (17) |
| Profit before tax | 313 | 343 |
| Income taxes | (72) | (76) |
| Profit for the year | 241 | 267 |

Evaluate the following economic assertions:', ARRAY['Revenue grew by more than 12.8% between Year 1 and Year 2.', 'Finance costs grew by more than 40.6% between Year 1 and Year 2, outpacing the growth in the operating result.', 'The operating result covers finance costs more than 5.56 times over in Year 1.', 'The operating margin, operating result taken as a share of revenue, exceeds 15% in Year 2.', 'The effective tax rate, income taxes taken as a share of profit before tax, is below 28.4% in Year 1.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Revenue changed by about 12.8% between the two years.', 'TRUE — Finance costs moved from 15 to 23; operating result moved from 322 to 360.', 'TRUE — Interest coverage in Year 1 ≈ 21.5 times.', 'TRUE — Operating margin in Year 2 ≈ 29.2%.', 'TRUE — Effective tax rate in Year 1 ≈ 23.0%.'], '4/5', 49, 'full' ),
( '6.2', 'CASE 6.2.050', 'Hotel Chain Kitchen Equipment Depreciation', 'Analyze how the net change in cash and cash equivalents is calculated from the three cash flow sections. Evaluate the following economic assertions:', ARRAY['After two years, the carrying value of a construction firm''s heavy construction machinery is 42,800 euros.', 'After two years, the carrying value of a hotel chain''s kitchen equipment is 45,750 euros.', 'After two years, the carrying value of a software developer''s office computer equipment is 49,360 euros.', 'Accumulated depreciation on a electronics retailer''s point-of-sale tills after three years is 40,500 euros.', 'After two years, the carrying value of a garage''s diagnostic equipment is 66,750 euros.'], ARRAY[false, false, false, true, false], ARRAY['FALSE — Depreciation reduces carrying value; the correct figure is 23,200 euros.', 'FALSE — Depreciation reduces carrying value; the correct figure is 29,250 euros.', 'FALSE — Depreciation reduces carrying value; the correct figure is 34,640 euros.', 'TRUE — Three annual charges of 13,500 euros accumulate to 40,500 euros.', 'FALSE — Depreciation reduces carrying value; the correct figure is 26,250 euros.'], '5/5', 50, 'full' ),
( '6.2', 'CASE 6.2.051', 'Revenue and Operating Result Chart 51', 'Consider the following two-year statement of profit and loss (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Revenue and operating result"]]
Year 1 | Revenue=897 | Operating result=278
Year 2 | Revenue=1043 | Operating result=309
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Revenue | 897 | 1043 |
| Cost of sales | (551) | (642) |
| Gross profit | 346 | 401 |
| Distribution costs | (39) | (50) |
| General and administrative costs | (30) | (38) |
| Other operating result | 1 | (4) |
| Operating result | 278 | 309 |
| Finance costs | (22) | (25) |
| Finance costs – net | (17) | (19) |
| Profit before tax | 261 | 290 |
| Income taxes | (58) | (68) |
| Profit for the year | 203 | 222 |

Evaluate the following economic assertions:', ARRAY['The gross profit margin, gross profit taken as a share of revenue, is more than 3.4 percentage points higher in Year 2 than in Year 1.', 'The operating result grew by more than 22.7% between Year 1 and Year 2.', 'Revenue grew by more than 19.9% between Year 1 and Year 2.', 'Profit for the year grew by more than 32.3% between Year 1 and Year 2.', 'The operating result covers finance costs more than 11.31 times over in Year 1.'], ARRAY[false, false, false, false, true], ARRAY['FALSE — Gross margins were 38.6% then 38.4%.', 'FALSE — The operating result changed by about 11.2% between the two years.', 'FALSE — Revenue changed by about 16.3% between the two years.', 'FALSE — Profit for the year changed by about 9.4% between the two years.', 'TRUE — Interest coverage in Year 1 ≈ 12.6 times.'], '5/5', 51, 'full' ),
( '6.2', 'CASE 6.2.052', 'Depreciation Schedule Review 52', 'A business depreciates the following fixed assets on a straight-line basis. Identity is not disclosed.

[[CHART type="bar" title="Annual depreciation by asset"]]
Machinery | Annual depreciation=16800
Delivery truck | Annual depreciation=6500
Computer equipment | Annual depreciation=6000
[[/CHART]]

| Asset details | Amount |
| --- | ---: |
| Asset A – Machinery | €168,000 purchase price, 10-year useful life, no residual value |
| Asset B – Delivery truck | €46,000 purchase price, 6-year useful life, €7,000 residual value |
| Asset C – Computer equipment | €18,000 purchase price, 3-year useful life, no residual value |

Evaluate the following economic assertions:', ARRAY['After three years, the delivery truck''s book value is €31,138.', 'Residual value of the €46,000 delivery truck is ignored when calculating its annual depreciation.', 'Combined annual depreciation for the three assets is €29,300.', 'After three years, more than 42.8% of the machinery''s purchase price has been depreciated.', 'After three years, the combined book value of all three assets exceeds €135,854.'], ARRAY[false, false, true, false, true], ARRAY['FALSE — Book value ≈ €26,500.', 'FALSE — Residual value is deducted from cost before spreading the remainder.', 'TRUE — Sum of annual charges ≈ €29,300.', 'FALSE — About 30.0% of the machinery''s cost is depreciated after three years.', 'TRUE — Combined book value ≈ €144,100.'], '5/5', 52, 'full' ),
( '6.2', 'CASE 6.2.053', 'Cash Flow Mix Over Two Years 53', 'Consider the cash flow extract below (€ thousands).

[[CHART type="bar" title="Operating and investing cash flows"]]
Year 1 | Operating=138 | Investing=-141
Year 2 | Operating=148 | Investing=-251
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Cash flow from operating activities before changes in working capital | 154 | 188 |
| Cash flow from operating activities | 138 | 148 |
| Cash flow from investing activities | (141) | (251) |
| Cash flow from financing activities | 44 | 82 |
| Change in cash and cash equivalents | 41 | -21 |
| Cash and cash equivalents at end of the year | 137 | 117 |

Evaluate the following economic assertions:', ARRAY['Year 2 investing outflow exceeds 200.3% of Year 2 operating cash flow.', 'Operating cash flow grew by more than 6.8% between Year 1 and Year 2.', 'Year 2 ending cash equals €117 thousand.', 'Year-end cash fell by more than 16.8% from Year 1 to Year 2.', 'Year 2 operating cash flow equals €125 thousand.'], ARRAY[false, true, true, false, false], ARRAY['FALSE — Investing/operating ≈ 169.6%.', 'TRUE — Operating cash flow changed by about 7.2% between the two years.', 'TRUE — Ending cash = €117 thousand.', 'FALSE — End-cash change ≈ 14.6%.', 'FALSE — Operating cash flow = €148 thousand.'], '3/5', 53, 'full' ),
( '6.2', 'CASE 6.2.054', 'Liquidity From the Balance Sheet 54', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=336
Current liabilities=272
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 294 |
| Machinery | 249 |
| Office equipment | 57 |
| Patents, trademarks and licences | 39 |
| Inventory | 234 |
| Trade receivables | 62 |
| Cash and cash equivalents | 40 |
| Total assets | **975** |
| **EQUITY** | |
| Share capital | 191 |
| Retained earnings | 107 |
| Total equity | **298** |
| **LIABILITIES** | |
| Long-term bank loan | 354 |
| Bonds payable | 51 |
| Trade payables | 209 |
| Bank overdraft | 63 |
| Total liabilities | **677** |
| Total equity and liabilities | **975** |

Evaluate the following economic assertions:', ARRAY['Working capital of €64 thousand is positive on this balance sheet.', 'The equity ratio is below 35.2%.', 'The debt ratio exceeds 45.4%.', 'The current ratio is below 1.04.', 'Trade receivables make up less than 53.1% of current assets.'], ARRAY[true, true, true, false, true], ARRAY['TRUE — Working capital = 64.', 'TRUE — Equity ratio ≈ 30.6%.', 'TRUE — Debt ratio ≈ 69.4%.', 'FALSE — Current ratio ≈ 1.24.', 'TRUE — Trade receivables are about 18.5% of current assets.'], '2/5', 54, 'full' ),
( '6.2', 'CASE 6.2.055', 'Revenue and Operating Result Chart 55', 'Consider the following two-year statement of profit and loss (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Revenue and operating result"]]
Year 1 | Revenue=957 | Operating result=316
Year 2 | Revenue=1097 | Operating result=360
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Revenue | 957 | 1097 |
| Cost of sales | (566) | (644) |
| Gross profit | 391 | 453 |
| Distribution costs | (43) | (55) |
| General and administrative costs | (31) | (39) |
| Other operating result | (1) | 1 |
| Operating result | 316 | 360 |
| Finance costs | (17) | (24) |
| Finance costs – net | (11) | (19) |
| Profit before tax | 305 | 341 |
| Income taxes | (64) | (73) |
| Profit for the year | 241 | 268 |

Evaluate the following economic assertions:', ARRAY['Revenue grew by more than 8.9% between Year 1 and Year 2.', 'The operating result covers finance costs more than 7.94 times over in Year 1.', 'The operating margin, operating result taken as a share of revenue, exceeds 13% in Year 2.', 'The effective tax rate, income taxes taken as a share of profit before tax, is below 26.8% in Year 1.', 'Cost of sales is deducted from revenue to arrive at gross profit.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Revenue changed by about 14.6% between the two years.', 'TRUE — Interest coverage in Year 1 ≈ 18.6 times.', 'TRUE — Operating margin in Year 2 ≈ 32.8%.', 'TRUE — Effective tax rate in Year 1 ≈ 21.0%.', 'TRUE — Gross profit = revenue − cost of sales.'], '5/5', 55, 'full' ),
( '6.2', 'CASE 6.2.056', 'Software Developer Profit and Cash Gap', 'Consider the following cash flow statement extract (€) for a bakery.

| Item | Amount |
| --- | ---: |
| Cash flow from operating activities | 64400 |
| Cash flow from investing activities | (16200) |
| Cash flow from financing activities | 10780 |
| Net change in cash and cash equivalents | **58980** |

Evaluate the following economic assertions:', ARRAY['Treating the investing line as an addition, total cash would change by 91,380 euros on extract 25.', 'On extract 25, cash and cash equivalents change by 58,980 euros in total.', 'Purchases recorded under investing total an outflow of 16,200 euros on extract 25.', 'Financing activities add 10,780 euros to cash on extract 25.', 'Operating cash of 64,400 euros more than covers the investing outflow of 16,200 euros on extract 25.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — Investing must be subtracted; correct net change is 58,980 euros.', 'TRUE — Operating 64400 − investing 16200 + financing 10780 = 58980.', 'TRUE — The investing line is (16200).', 'TRUE — Financing is an inflow of 10,780 euros.', 'TRUE — Operating 64400 versus investing 16200.'], '5/5', 56, 'full' ),
( '6.2', 'CASE 6.2.057', 'Revenue and Operating Result Chart 57', 'Consider the following two-year statement of profit and loss (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Revenue and operating result"]]
Year 1 | Revenue=860 | Operating result=277
Year 2 | Revenue=986 | Operating result=306
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Revenue | 860 | 986 |
| Cost of sales | (516) | (585) |
| Gross profit | 344 | 401 |
| Distribution costs | (44) | (57) |
| General and administrative costs | (28) | (35) |
| Other operating result | 5 | (3) |
| Operating result | 277 | 306 |
| Finance costs | (14) | (22) |
| Finance costs – net | (10) | (18) |
| Profit before tax | 267 | 288 |
| Income taxes | (64) | (68) |
| Profit for the year | 203 | 220 |

Evaluate the following economic assertions:', ARRAY['Revenue grew by more than 10.6% between Year 1 and Year 2.', 'Finance costs grew by more than 22.9% between Year 1 and Year 2, outpacing the growth in the operating result.', 'The operating result covers finance costs more than 5.11 times over in Year 1.', 'The operating margin, operating result taken as a share of revenue, exceeds 21.9% in Year 2.', 'Revenue grew by exactly 14.7% from Year 1 to Year 2.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Revenue changed by about 14.7% between the two years.', 'TRUE — Finance costs moved from 14 to 22; operating result moved from 277 to 306.', 'TRUE — Interest coverage in Year 1 ≈ 19.8 times.', 'TRUE — Operating margin in Year 2 ≈ 31.0%.', 'TRUE — Actual revenue growth ≈ 14.7%.'], '5/5', 57, 'full' ),
( '6.2', 'CASE 6.2.058', 'Depreciation Schedule Review 58', 'A business depreciates the following fixed assets on a straight-line basis. Identity is not disclosed.

[[CHART type="bar" title="Annual depreciation by asset"]]
Machinery | Annual depreciation=13500
Delivery truck | Annual depreciation=7500
Computer equipment | Annual depreciation=6000
[[/CHART]]

| Asset details | Amount |
| --- | ---: |
| Asset A – Machinery | €162,000 purchase price, 12-year useful life, no residual value |
| Asset B – Delivery truck | €49,000 purchase price, 6-year useful life, €4,000 residual value |
| Asset C – Computer equipment | €18,000 purchase price, 3-year useful life, no residual value |

Evaluate the following economic assertions:', ARRAY['After three years, the delivery truck''s book value is €26,500.', 'After three years, the combined book value of all three assets exceeds €135,918.', 'Without recording depreciation on the €162,000 machinery, non-current assets on the balance sheet would be overstated.', 'Straight-line depreciation on the €162,000 machinery charges the same amount each year of its useful life, since it has no residual value.', 'Combined annual depreciation for the three assets is €29,072.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Book value ≈ €26,500.', 'TRUE — Combined book value ≈ €148,000.', 'TRUE — Assets would stay at historical cost without write-downs.', 'TRUE — Straight-line spreads depreciable cost evenly.', 'FALSE — Sum of annual charges ≈ €27,000.'], '5/5', 58, 'full' ),
( '6.2', 'CASE 6.2.059', 'Cash Flow Mix Over Two Years 59', 'Consider the cash flow extract below (€ thousands).

[[CHART type="bar" title="Operating and investing cash flows"]]
Year 1 | Operating=129 | Investing=-102
Year 2 | Operating=135 | Investing=-257
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Cash flow from operating activities before changes in working capital | 185 | 211 |
| Cash flow from operating activities | 129 | 135 |
| Cash flow from investing activities | (102) | (257) |
| Cash flow from financing activities | 28 | 92 |
| Change in cash and cash equivalents | 55 | -30 |
| Cash and cash equivalents at end of the year | 131 | 106 |

Evaluate the following economic assertions:', ARRAY['Operating cash flow grew by more than 18% between Year 1 and Year 2.', 'Year 2 investing outflow exceeds 130.3% of Year 2 operating cash flow.', 'Year-end cash fell by more than 19.7% from Year 1 to Year 2.', 'Year 2 ending cash equals €106 thousand.', 'Year 2 operating cash flow equals €135 thousand.'], ARRAY[false, true, false, true, true], ARRAY['FALSE — Operating cash flow changed by about 4.7% between the two years.', 'TRUE — Investing/operating ≈ 190.4%.', 'FALSE — End-cash change ≈ 19.1%.', 'TRUE — Ending cash = €106 thousand.', 'TRUE — Operating cash flow = €135 thousand.'], '2/5', 59, 'full' ),
( '6.2', 'CASE 6.2.060', 'Garage Diagnostic Equipment Charge', 'Analyze how accumulated depreciation is used to calculate an asset''s carrying value after several years of use. Evaluate the following economic assertions:', ARRAY['Accumulated depreciation on a restaurant chain''s commercial refrigerators after three years is 54,480 euros.', 'After two years, the carrying value of a brewery''s brewing tanks is 73,000 euros.', 'Accumulated depreciation on a IT consultancy''s laptop computers after three years is 47,250 euros.', 'After two years, the carrying value of a textile mill''s spinning machinery is 74,100 euros.', 'Accumulated depreciation on a publishing house''s binding machines after three years is 38,625 euros.'], ARRAY[true, false, true, false, true], ARRAY['TRUE — Three annual charges of 18,160 euros accumulate to 54,480 euros.', 'FALSE — Depreciation reduces carrying value; the correct figure is 38,000 euros.', 'TRUE — Three annual charges of 15,750 euros accumulate to 47,250 euros.', 'FALSE — Depreciation reduces carrying value; the correct figure is 45,900 euros.', 'TRUE — Three annual charges of 12,875 euros accumulate to 38,625 euros.'], '5/5', 60, 'full' ),
( '6.2', 'CASE 6.2.061', 'Asset Composition Chart 61', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=403
Current liabilities=237
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 424 |
| Machinery | 135 |
| Office equipment | 69 |
| Patents, trademarks and licences | 69 |
| Inventory | 185 |
| Trade receivables | 170 |
| Cash and cash equivalents | 48 |
| Total assets | **1100** |
| **EQUITY** | |
| Share capital | 125 |
| Retained earnings | 241 |
| Total equity | **366** |
| **LIABILITIES** | |
| Long-term bank loan | 448 |
| Bonds payable | 49 |
| Trade payables | 193 |
| Bank overdraft | 44 |
| Total liabilities | **734** |
| Total equity and liabilities | **1100** |

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.71.', 'Working capital of €166 thousand is positive on this balance sheet.', 'The current ratio is below 0.9.', 'The debt ratio exceeds 60.3%.', 'Inventory make up more than 37.4% of current assets.'], ARRAY[false, true, false, true, true], ARRAY['FALSE — Current ratio ≈ 1.70.', 'TRUE — Working capital = 166.', 'FALSE — Current ratio ≈ 1.70.', 'TRUE — Debt ratio ≈ 66.7%.', 'TRUE — Inventory are about 45.9% of current assets.'], '2/5', 61, 'full' ),
( '6.2', 'CASE 6.2.062', 'Furniture Maker Depreciation Policy', 'Consider a textile mill replacing ageing spinning machinery and calculating the machinery''s carrying value after several years of use. Evaluate the following economic assertions:', ARRAY['After two years, the carrying value of a printing company''s printing press is 76,520 euros.', 'Accumulated depreciation on a car parts manufacturer''s stamping presses after three years is 32,010 euros.', 'After two years, the carrying value of a arable farm''s tractor is 100,900 euros.', 'After two years, the carrying value of a electronics retailer''s point-of-sale tills is 100,500 euros.', 'After two years, the carrying value of a logistics company''s forklift trucks is 103,300 euros.'], ARRAY[false, true, false, false, false], ARRAY['FALSE — Depreciation reduces carrying value; the correct figure is 52,480 euros.', 'TRUE — Three annual charges of 10,670 euros accumulate to 32,010 euros.', 'FALSE — Depreciation reduces carrying value; the correct figure is 37,100 euros.', 'FALSE — Depreciation reduces carrying value; the correct figure is 46,500 euros.', 'FALSE — Depreciation reduces carrying value; the correct figure is 52,700 euros.'], '3/5', 62, 'full' ),
( '6.2', 'CASE 6.2.063', 'Cash Flow Mix Over Two Years 63', 'Consider the cash flow extract below (€ thousands).

[[CHART type="bar" title="Operating and investing cash flows"]]
Year 1 | Operating=135 | Investing=-106
Year 2 | Operating=145 | Investing=-217
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Cash flow from operating activities before changes in working capital | 133 | 166 |
| Cash flow from operating activities | 135 | 145 |
| Cash flow from investing activities | (106) | (217) |
| Cash flow from financing activities | 57 | 105 |
| Change in cash and cash equivalents | 86 | 33 |
| Cash and cash equivalents at end of the year | 112 | 106 |

Evaluate the following economic assertions:', ARRAY['Operating cash flow grew by more than 19.8% between Year 1 and Year 2.', 'Year 2 investing outflow exceeds 189% of Year 2 operating cash flow.', 'Year-end cash fell by more than 13.1% from Year 1 to Year 2.', 'Year 2 ending cash equals €94 thousand.', 'Year 2 operating cash flow equals €145 thousand.'], ARRAY[false, false, false, false, true], ARRAY['FALSE — Operating cash flow changed by about 7.4% between the two years.', 'FALSE — Investing/operating ≈ 149.7%.', 'FALSE — End-cash change ≈ 5.4%.', 'FALSE — Ending cash = €106 thousand.', 'TRUE — Operating cash flow = €145 thousand.'], '5/5', 63, 'full' ),
( '6.2', 'CASE 6.2.064', 'Profit and Loss Over Two Years 64', 'Consider the following two-year statement of profit and loss (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Revenue and operating result"]]
Year 1 | Revenue=741 | Operating result=211
Year 2 | Revenue=833 | Operating result=221
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Revenue | 741 | 833 |
| Cost of sales | (460) | (511) |
| Gross profit | 281 | 322 |
| Distribution costs | (39) | (54) |
| General and administrative costs | (34) | (46) |
| Other operating result | 3 | (1) |
| Operating result | 211 | 221 |
| Finance costs | (19) | (24) |
| Finance costs – net | (14) | (22) |
| Profit before tax | 197 | 199 |
| Income taxes | (40) | (38) |
| Profit for the year | 157 | 161 |

Evaluate the following economic assertions:', ARRAY['The gross profit margin, gross profit taken as a share of revenue, is more than 3.8 percentage points higher in Year 2 than in Year 1.', 'The operating result covers finance costs less than 10.26 times over in Year 2.', 'The operating margin, operating result taken as a share of revenue, exceeds 16.7% in Year 2.', 'The effective tax rate, income taxes taken as a share of profit before tax, is below 21.9% in Year 1.', 'The gross profit margin in Year 2 is exactly 38.7%.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — Gross margins were 37.9% then 38.7%.', 'TRUE — Interest coverage in Year 2 ≈ 9.2 times.', 'TRUE — Operating margin in Year 2 ≈ 26.5%.', 'TRUE — Effective tax rate in Year 1 ≈ 20.3%.', 'TRUE — Gross margin in Year 2 ≈ 38.7%.'], '5/5', 64, 'full' ),
( '6.2', 'CASE 6.2.065', 'Annual Depreciation Chart 65', 'A business depreciates the following fixed assets on a straight-line basis. Identity is not disclosed.

[[CHART type="bar" title="Annual depreciation by asset"]]
Machinery | Annual depreciation=12273
Delivery truck | Annual depreciation=8000
Computer equipment | Annual depreciation=6333
[[/CHART]]

| Asset details | Amount |
| --- | ---: |
| Asset A – Machinery | €135,000 purchase price, 11-year useful life, no residual value |
| Asset B – Delivery truck | €55,000 purchase price, 6-year useful life, €7,000 residual value |
| Asset C – Computer equipment | €19,000 purchase price, 3-year useful life, no residual value |

Evaluate the following economic assertions:', ARRAY['After three years, the combined book value of all three assets exceeds €111,069.', 'Combined annual depreciation for the three assets is €27,656.', 'Without recording depreciation on the €135,000 machinery, non-current assets on the balance sheet would be overstated.', 'Straight-line depreciation on the €135,000 machinery charges the same amount each year of its useful life, since it has no residual value.', 'The machinery''s annual depreciation charge is exactly €12,273.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — Combined book value ≈ €129,182.', 'FALSE — Sum of annual charges ≈ €26,606.', 'TRUE — Assets would stay at historical cost without write-downs.', 'TRUE — Straight-line spreads depreciable cost evenly.', 'TRUE — Machinery annual charge = €12,273.'], '5/5', 65, 'full' ),
( '6.2', 'CASE 6.2.066', 'Brewery Investing Cash Flow', 'Consider the following cash flow statement extract (€) for a hotel chain.

| Item | Amount |
| --- | ---: |
| Cash flow from operating activities | 69200 |
| Cash flow from investing activities | (12600) |
| Cash flow from financing activities | (9060) |
| Net change in cash and cash equivalents | **47540** |

Evaluate the following economic assertions:', ARRAY['On extract 28, cash and cash equivalents change by 47,540 euros in total.', 'Purchases recorded under investing total an outflow of 12,600 euros on extract 28.', 'Financing activities remove 9,060 euros from cash on extract 28.', 'Operating cash of 69,200 euros more than covers the investing outflow of 12,600 euros on extract 28.', 'Buying new kitchen equipment for this hotel chain is classified under investing activities.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Operating 69200 − investing 12600 − financing 9060 = 47540.', 'TRUE — The investing line is (12600).', 'TRUE — Financing is an outflow of 9,060 euros.', 'TRUE — Operating 69200 versus investing 12600.', 'TRUE — Long-term asset purchases are investing cash flows.'], '2/5', 66, 'full' ),
( '6.2', 'CASE 6.2.067', 'Textile Mill Machinery Book Value', 'Review why turnover for the year appears in the statement of profit and loss rather than the balance sheet. Evaluate the following economic assertions:', ARRAY['When a courier firm repays part of a long-term bank loan, that cash outflow belongs in cash flow from financing activities.', 'After two years, the carrying value of a dairy processor''s refrigerated trucks is 102,400 euros.', 'When a construction firm purchases new heavy construction machinery for use in the business, the resulting cash outflow belongs in cash flow from investing activities.', 'When a hotel chain collects payment from a customer who owed money on an overdue invoice, the resulting cash inflow belongs in cash flow from operating activities.', 'When a electronics retailer purchases new point-of-sale tills for use in the business, the resulting cash outflow belongs in cash flow from investing activities.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — Repaying borrowed funds relates to how the business is financed, so it is classified as a financing cash flow.', 'FALSE — Depreciation reduces carrying value; the correct figure is 62,600 euros.', 'TRUE — Buying long-term assets such as heavy construction machinery is an investing decision, so the outflow is classified as an investing cash flow.', 'TRUE — Collecting money owed by a customer relates to core trading activity, so it is classified as an operating cash flow.', 'TRUE — Buying long-term assets such as point-of-sale tills is an investing decision, so the outflow is classified as an investing cash flow.'], '5/5', 67, 'full' ),
( '6.2', 'CASE 6.2.068', 'Balance Sheet Structure Review 68', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=351
Current liabilities=301
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 456 |
| Machinery | 151 |
| Office equipment | 56 |
| Patents, trademarks and licences | 54 |
| Inventory | 137 |
| Trade receivables | 137 |
| Cash and cash equivalents | 77 |
| Total assets | **1068** |
| **EQUITY** | |
| Share capital | 119 |
| Retained earnings | 267 |
| Total equity | **386** |
| **LIABILITIES** | |
| Long-term bank loan | 324 |
| Bonds payable | 57 |
| Trade payables | 228 |
| Bank overdraft | 73 |
| Total liabilities | **682** |
| Total equity and liabilities | **1068** |

Evaluate the following economic assertions:', ARRAY['Working capital of €50 thousand is positive on this balance sheet.', 'The debt ratio exceeds 53.2%.', 'Trade receivables make up less than 46.8% of current assets.', 'Inventory of €137 thousand is correctly classified as a current asset rather than a non-current intangible asset.', 'The current ratio is exactly 1.17.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Working capital = 50.', 'TRUE — Debt ratio ≈ 63.9%.', 'TRUE — Trade receivables are about 39.0% of current assets.', 'TRUE — Inventory is always a current asset.', 'TRUE — Current ratio is 1.17.'], '5/5', 68, 'full' ),
( '6.2', 'CASE 6.2.069', 'Printing Press Cash Flow Impact', 'Analyze the difference between a cash expense and a non-cash expense such as depreciation. Evaluate the following economic assertions:', ARRAY['After two years, the carrying value of a pharmacy chain''s dispensing equipment is 103,680 euros.', 'After two years, the carrying value of a fitness club chain''s exercise equipment is 135,050 euros.', 'When a logistics company collects payment from a customer who owed money on an overdue invoice, the resulting cash inflow belongs in cash flow from operating activities.', 'After two years, the carrying value of a restaurant chain''s commercial refrigerators is 132,320 euros.', 'After two years, the carrying value of a IT consultancy''s laptop computers is 132,000 euros.'], ARRAY[false, false, true, false, false], ARRAY['FALSE — Depreciation reduces carrying value; the correct figure is 70,320 euros.', 'FALSE — Depreciation reduces carrying value; the correct figure is 47,950 euros.', 'TRUE — Collecting money owed by a customer relates to core trading activity, so it is classified as an operating cash flow.', 'FALSE — Depreciation reduces carrying value; the correct figure is 59,680 euros.', 'FALSE — Depreciation reduces carrying value; the correct figure is 69,000 euros.'], '5/5', 69, 'full' ),
( '6.2', 'CASE 6.2.070', 'Asset Composition Chart 70', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=276
Current liabilities=285
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 336 |
| Machinery | 194 |
| Office equipment | 42 |
| Patents, trademarks and licences | 27 |
| Inventory | 87 |
| Trade receivables | 109 |
| Cash and cash equivalents | 80 |
| Total assets | **875** |
| **EQUITY** | |
| Share capital | 222 |
| Retained earnings | 131 |
| Total equity | **353** |
| **LIABILITIES** | |
| Long-term bank loan | 196 |
| Bonds payable | 41 |
| Trade payables | 249 |
| Bank overdraft | 36 |
| Total liabilities | **522** |
| Total equity and liabilities | **875** |

Evaluate the following economic assertions:', ARRAY['After excluding inventory, the remaining current assets still cover current liabilities more than 0.66 times over.', 'Trade receivables make up less than 44.1% of current assets.', 'Cash and cash equivalents make up more than 16.8% of current assets.', 'Inventory of €87 thousand is correctly classified as a current asset rather than a non-current intangible asset.', 'The current ratio is exactly 0.97.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Acid-test ratio ≈ 0.66.', 'TRUE — Trade receivables are about 39.5% of current assets.', 'TRUE — Cash and cash equivalents are about 29.0% of current assets.', 'TRUE — Inventory is always a current asset.', 'TRUE — Current ratio is 0.97.'], '4/5', 70, 'full' ),
( '6.2', 'CASE 6.2.071', 'Revenue and Operating Result Chart 71', 'Consider the following two-year statement of profit and loss (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Revenue and operating result"]]
Year 1 | Revenue=1097 | Operating result=309
Year 2 | Revenue=1288 | Operating result=371
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Revenue | 1097 | 1288 |
| Cost of sales | (700) | (821) |
| Gross profit | 397 | 467 |
| Distribution costs | (54) | (60) |
| General and administrative costs | (32) | (37) |
| Other operating result | (2) | 1 |
| Operating result | 309 | 371 |
| Finance costs | (18) | (25) |
| Finance costs – net | (12) | (22) |
| Profit before tax | 297 | 349 |
| Income taxes | (70) | (87) |
| Profit for the year | 227 | 262 |

Evaluate the following economic assertions:', ARRAY['Revenue grew by more than 14% between Year 1 and Year 2.', 'The operating result covers finance costs more than 4.26 times over in Year 1.', 'The operating margin, operating result taken as a share of revenue, exceeds 11.2% in Year 2.', 'The effective tax rate, income taxes taken as a share of profit before tax, is below 31.5% in Year 1.', 'The gross profit margin in Year 2 is exactly 36.3%.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Revenue changed by about 17.4% between the two years.', 'TRUE — Interest coverage in Year 1 ≈ 17.2 times.', 'TRUE — Operating margin in Year 2 ≈ 28.8%.', 'TRUE — Effective tax rate in Year 1 ≈ 23.6%.', 'TRUE — Gross margin in Year 2 ≈ 36.3%.'], '5/5', 71, 'full' ),
( '6.2', 'CASE 6.2.072', 'Profit and Loss Over Two Years 72', 'Consider the following two-year statement of profit and loss (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Revenue and operating result"]]
Year 1 | Revenue=804 | Operating result=245
Year 2 | Revenue=915 | Operating result=272
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Revenue | 804 | 915 |
| Cost of sales | (467) | (528) |
| Gross profit | 337 | 387 |
| Distribution costs | (55) | (64) |
| General and administrative costs | (42) | (51) |
| Other operating result | 5 | 0 |
| Operating result | 245 | 272 |
| Finance costs | (18) | (22) |
| Finance costs – net | (14) | (19) |
| Profit before tax | 231 | 253 |
| Income taxes | (55) | (57) |
| Profit for the year | 176 | 196 |

Evaluate the following economic assertions:', ARRAY['Revenue grew by more than 13.8% between Year 1 and Year 2.', 'The gross profit margin, gross profit taken as a share of revenue, is more than 5.4 percentage points higher in Year 2 than in Year 1.', 'The operating result grew by more than 28.4% between Year 1 and Year 2.', 'Profit for the year grew by more than 22% between Year 1 and Year 2.', 'The operating result covers finance costs more than 5.16 times over in Year 1.'], ARRAY[true, false, false, false, true], ARRAY['TRUE — Revenue changed by about 13.8% between the two years.', 'FALSE — Gross margins were 41.9% then 42.3%.', 'FALSE — The operating result changed by about 11.0% between the two years.', 'FALSE — Profit for the year changed by about 11.4% between the two years.', 'TRUE — Interest coverage in Year 1 ≈ 13.6 times.'], '3/5', 72, 'full' ),
( '6.2', 'CASE 6.2.073', 'Annual Depreciation Chart 73', 'A business depreciates the following fixed assets on a straight-line basis. Identity is not disclosed.

[[CHART type="bar" title="Annual depreciation by asset"]]
Machinery | Annual depreciation=14333
Delivery truck | Annual depreciation=8833
Computer equipment | Annual depreciation=8000
[[/CHART]]

| Asset details | Amount |
| --- | ---: |
| Asset A – Machinery | €172,000 purchase price, 12-year useful life, no residual value |
| Asset B – Delivery truck | €57,000 purchase price, 6-year useful life, €4,000 residual value |
| Asset C – Computer equipment | €24,000 purchase price, 3-year useful life, no residual value |

Evaluate the following economic assertions:', ARRAY['After three years, the delivery truck''s book value is €27,929.', 'Combined annual depreciation for the three assets is €31,167.', 'After three years, more than 41.2% of the machinery''s purchase price has been depreciated.', 'The delivery truck''s annual depreciation charge is more than 87.6% higher than the computer equipment''s annual depreciation charge.', 'After three years, the computer equipment, originally costing €24,000, is fully written down to nil.'], ARRAY[false, true, false, false, true], ARRAY['FALSE — Book value ≈ €30,500.', 'TRUE — Sum of annual charges ≈ €31,167.', 'FALSE — About 25.0% of the machinery''s cost is depreciated after three years.', 'FALSE — Delivery truck ≈ €8,833 a year versus computer equipment ≈ €8,000 a year.', 'TRUE — Useful life is 3 years with no residual value.'], '3/5', 73, 'full' ),
( '6.2', 'CASE 6.2.074', 'Balance Sheet Structure Review 74', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=330
Current liabilities=160
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 365 |
| Machinery | 266 |
| Office equipment | 54 |
| Patents, trademarks and licences | 93 |
| Inventory | 147 |
| Trade receivables | 73 |
| Cash and cash equivalents | 110 |
| Total assets | **1108** |
| **EQUITY** | |
| Share capital | 101 |
| Retained earnings | 332 |
| Total equity | **433** |
| **LIABILITIES** | |
| Long-term bank loan | 441 |
| Bonds payable | 74 |
| Trade payables | 112 |
| Bank overdraft | 48 |
| Total liabilities | **675** |
| Total equity and liabilities | **1108** |

Evaluate the following economic assertions:', ARRAY['The current ratio is below 0.85.', 'The current ratio exceeds 1.11.', 'Working capital of €170 thousand is positive on this balance sheet.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 1.13 times over.', 'The equity ratio is below 19.9%.'], ARRAY[false, true, true, true, false], ARRAY['FALSE — Current ratio ≈ 2.06.', 'TRUE — Current ratio ≈ 2.06.', 'TRUE — Working capital = 170.', 'TRUE — Acid-test ratio ≈ 1.14.', 'FALSE — Equity ratio ≈ 39.1%.'], '4/5', 74, 'full' ),
( '6.2', 'CASE 6.2.075', 'Arable Farm Land and Tractor', 'Consider the following cash flow statement extract (€) for a furniture maker.

| Item | Amount |
| --- | ---: |
| Cash flow from operating activities | 74000 |
| Cash flow from investing activities | (9000) |
| Cash flow from financing activities | 12100 |
| Net change in cash and cash equivalents | **77100** |

Evaluate the following economic assertions:', ARRAY['Treating the investing line as an addition, total cash would change by 95,100 euros on extract 31.', 'On extract 31, cash and cash equivalents change by 77,100 euros in total.', 'The operating figure alone of 74,000 euros is already the full net change on extract 31.', 'The investing line on extract 31 reports cash received of 9,000 euros.', 'Financing activities remove 12,100 euros from cash on extract 31.'], ARRAY[false, true, false, false, false], ARRAY['FALSE — Investing must be subtracted; correct net change is 77,100 euros.', 'TRUE — Operating 74000 − investing 9000 + financing 12100 = 77100.', 'FALSE — That ignores investing and financing; correct net is 77,100 euros.', 'FALSE — Investing is an outflow of 9,000 euros.', 'FALSE — Financing is an inflow of 12,100 euros, not an outflow.'], '5/5', 75, 'full' ),
( '6.2', 'CASE 6.2.076', 'Electronics Retailer Till Upgrade', 'Analyze why the balance sheet alone cannot show how a business performed over the whole year. Evaluate the following economic assertions:', ARRAY['After two years, the carrying value of a recycling firm''s sorting machinery is 162,200 euros.', 'When a pharmacy chain purchases new dispensing equipment for use in the business, the resulting cash outflow belongs in cash flow from investing activities.', 'When a fitness club chain collects payment from a customer who owed money on an overdue invoice, the resulting cash inflow belongs in cash flow from operating activities.', 'After two years, the carrying value of a ceramics workshop''s kiln equipment is 157,850 euros.', 'Accumulated depreciation on a bakery''s commercial ovens after three years is 11,000 euros.'], ARRAY[false, true, true, false, false], ARRAY['FALSE — Depreciation reduces carrying value; the correct figure is 83,800 euros.', 'TRUE — Buying long-term assets such as dispensing equipment is an investing decision, so the outflow is classified as an investing cash flow.', 'TRUE — Collecting money owed by a customer relates to core trading activity, so it is classified as an operating cash flow.', 'FALSE — Depreciation reduces carrying value; the correct figure is 97,150 euros.', 'FALSE — Three years of use accumulate 16,500 euros, not two years'' worth.'], '5/5', 76, 'full' ),
( '6.2', 'CASE 6.2.077', 'Balance Sheet Structure Review 77', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=287
Current liabilities=158
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 440 |
| Machinery | 247 |
| Office equipment | 64 |
| Patents, trademarks and licences | 79 |
| Inventory | 185 |
| Trade receivables | 65 |
| Cash and cash equivalents | 37 |
| Total assets | **1117** |
| **EQUITY** | |
| Share capital | 297 |
| Retained earnings | 410 |
| Total equity | **707** |
| **LIABILITIES** | |
| Long-term bank loan | 206 |
| Bonds payable | 46 |
| Trade payables | 115 |
| Bank overdraft | 43 |
| Total liabilities | **410** |
| Total equity and liabilities | **1117** |

Evaluate the following economic assertions:', ARRAY['The current ratio is below 0.84.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 0.87 times over.', 'Working capital of €129 thousand is positive on this balance sheet.', 'Inventory make up more than 51.9% of current assets.', 'Trade receivables make up less than 38.8% of current assets.'], ARRAY[false, false, true, true, true], ARRAY['FALSE — Current ratio ≈ 1.82.', 'FALSE — Acid-test ratio ≈ 0.65.', 'TRUE — Working capital = 129.', 'TRUE — Inventory are about 64.5% of current assets.', 'TRUE — Trade receivables are about 22.6% of current assets.'], '5/5', 77, 'full' ),
( '6.2', 'CASE 6.2.078', 'Overstated Assets Without Depreciation', 'Review how retained earnings link the statement of profit and loss to the equity section of the balance sheet. Evaluate the following economic assertions:', ARRAY['Accumulated depreciation on a courier firm''s delivery vans after three years is 10,280 euros.', 'Accumulated depreciation on a construction firm''s heavy construction machinery after three years is 9,800 euros.', 'Accumulated depreciation on a hotel chain''s kitchen equipment after three years is 8,250 euros.', 'When a restaurant chain repays part of a long-term bank loan, that cash outflow belongs in cash flow from financing activities.', 'Accumulated depreciation on a software developer''s office computer equipment after three years is 7,360 euros.'], ARRAY[false, false, false, true, false], ARRAY['FALSE — Three years of use accumulate 15,420 euros, not two years'' worth.', 'FALSE — Three years of use accumulate 14,700 euros, not two years'' worth.', 'FALSE — Three years of use accumulate 12,375 euros, not two years'' worth.', 'TRUE — Repaying borrowed funds relates to how the business is financed, so it is classified as a financing cash flow.', 'FALSE — Three years of use accumulate 11,040 euros, not two years'' worth.'], '5/5', 78, 'full' ),
( '6.2', 'CASE 6.2.079', 'Understanding the Three Cash Flow Sections', 'Consider the following cash flow statement extract (€) for a printing company.

| Item | Amount |
| --- | ---: |
| Cash flow from operating activities | 78800 |
| Cash flow from investing activities | (14400) |
| Cash flow from financing activities | (10140) |
| Net change in cash and cash equivalents | **54260** |

Evaluate the following economic assertions:', ARRAY['Treating the investing line as an addition, total cash would change by 83,060 euros on extract 34.', 'On extract 34, cash and cash equivalents change by 54,260 euros in total.', 'The operating figure alone of 78,800 euros is already the full net change on extract 34.', 'Purchases recorded under investing total an outflow of 14,400 euros on extract 34.', 'The investing line on extract 34 reports cash received of 14,400 euros.'], ARRAY[false, true, false, true, false], ARRAY['FALSE — Investing must be subtracted; correct net change is 54,260 euros.', 'TRUE — Operating 78800 − investing 14400 − financing 10140 = 54260.', 'FALSE — That ignores investing and financing; correct net is 54,260 euros.', 'TRUE — The investing line is (14400).', 'FALSE — Investing is an outflow of 14,400 euros.'], '4/5', 79, 'full' ),
( '6.2', 'CASE 6.2.080', 'Profit and Loss Over Two Years 80', 'Consider the following two-year statement of profit and loss (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Revenue and operating result"]]
Year 1 | Revenue=922 | Operating result=248
Year 2 | Revenue=1077 | Operating result=287
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Revenue | 922 | 1077 |
| Cost of sales | (595) | (698) |
| Gross profit | 327 | 379 |
| Distribution costs | (40) | (45) |
| General and administrative costs | (37) | (48) |
| Other operating result | (2) | 1 |
| Operating result | 248 | 287 |
| Finance costs | (14) | (19) |
| Finance costs – net | (11) | (13) |
| Profit before tax | 237 | 274 |
| Income taxes | (59) | (67) |
| Profit for the year | 178 | 207 |

Evaluate the following economic assertions:', ARRAY['Revenue grew by more than 10.8% between Year 1 and Year 2.', 'The operating result grew by more than 59.1% between Year 1 and Year 2.', 'The operating result covers finance costs more than 9.99 times over in Year 1.', 'The operating margin, operating result taken as a share of revenue, exceeds 11.7% in Year 2.', 'Profit for the year grew by more than 36.2% between Year 1 and Year 2.'], ARRAY[true, false, true, true, false], ARRAY['TRUE — Revenue changed by about 16.8% between the two years.', 'FALSE — The operating result changed by about 15.7% between the two years.', 'TRUE — Interest coverage in Year 1 ≈ 17.7 times.', 'TRUE — Operating margin in Year 2 ≈ 26.6%.', 'FALSE — Profit for the year changed by about 16.3% between the two years.'], '5/5', 80, 'full' ),
( '6.2', 'CASE 6.2.081', 'Operating Cash Flow and Core Trading', 'Consider a restaurant chain replacing commercial refrigerators across its outlets and reviewing the depreciation policy applied to them. Evaluate the following economic assertions:', ARRAY['When a car parts manufacturer repays part of a long-term bank loan, that cash outflow belongs in cash flow from financing activities.', 'When a packaging manufacturer purchases new packaging machinery for use in the business, the resulting cash outflow belongs in cash flow from investing activities.', 'When a catering company collects payment from a customer who owed money on an overdue invoice, the resulting cash inflow belongs in cash flow from operating activities.', 'Accumulated depreciation on a textile mill''s spinning machinery after three years is 14,100 euros.', 'Accumulated depreciation on a printing company''s printing press after three years is 12,020 euros.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Repaying borrowed funds relates to how the business is financed, so it is classified as a financing cash flow.', 'TRUE — Buying long-term assets such as packaging machinery is an investing decision, so the outflow is classified as an investing cash flow.', 'TRUE — Collecting money owed by a customer relates to core trading activity, so it is classified as an operating cash flow.', 'FALSE — Three years of use accumulate 21,150 euros, not two years'' worth.', 'FALSE — Three years of use accumulate 18,030 euros, not two years'' worth.'], '5/5', 81, 'full' ),
( '6.2', 'CASE 6.2.082', 'Profit and Loss Over Two Years 82', 'Consider the following two-year statement of profit and loss (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Revenue and operating result"]]
Year 1 | Revenue=878 | Operating result=234
Year 2 | Revenue=1002 | Operating result=261
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Revenue | 878 | 1002 |
| Cost of sales | (577) | (656) |
| Gross profit | 301 | 346 |
| Distribution costs | (38) | (48) |
| General and administrative costs | (29) | (41) |
| Other operating result | 0 | 4 |
| Operating result | 234 | 261 |
| Finance costs | (21) | (28) |
| Finance costs – net | (18) | (24) |
| Profit before tax | 216 | 237 |
| Income taxes | (46) | (49) |
| Profit for the year | 170 | 188 |

Evaluate the following economic assertions:', ARRAY['The operating result covers finance costs more than 7.88 times over in Year 1.', 'The operating margin, operating result taken as a share of revenue, exceeds 16.1% in Year 2.', 'The effective tax rate, income taxes taken as a share of profit before tax, is below 30.7% in Year 1.', 'The gross profit margin, gross profit taken as a share of revenue, is more than 5.9 percentage points higher in Year 2 than in Year 1.', 'Profit for the year increased by exactly €18 thousand from Year 1 to Year 2.'], ARRAY[true, true, true, false, true], ARRAY['TRUE — Interest coverage in Year 1 ≈ 11.1 times.', 'TRUE — Operating margin in Year 2 ≈ 26.0%.', 'TRUE — Effective tax rate in Year 1 ≈ 21.3%.', 'FALSE — Gross margins were 34.3% then 34.5%.', 'TRUE — Profit moved from 170 to 188.'], '5/5', 82, 'full' ),
( '6.2', 'CASE 6.2.083', 'Annual Depreciation Chart 83', 'A business depreciates the following fixed assets on a straight-line basis. Identity is not disclosed.

[[CHART type="bar" title="Annual depreciation by asset"]]
Machinery | Annual depreciation=14333
Delivery truck | Annual depreciation=8167
Computer equipment | Annual depreciation=7667
[[/CHART]]

| Asset details | Amount |
| --- | ---: |
| Asset A – Machinery | €172,000 purchase price, 12-year useful life, no residual value |
| Asset B – Delivery truck | €57,000 purchase price, 6-year useful life, €8,000 residual value |
| Asset C – Computer equipment | €23,000 purchase price, 3-year useful life, no residual value |

Evaluate the following economic assertions:', ARRAY['Combined annual depreciation for the three assets is €30,167.', 'After three years, the delivery truck''s book value is €32,500.', 'After three years, more than 34.5% of the machinery''s purchase price has been depreciated.', 'The delivery truck''s annual depreciation charge is more than 78.8% higher than the computer equipment''s annual depreciation charge.', 'The machinery accounts for more than 59.5% of the combined annual depreciation charge.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Sum of annual charges ≈ €30,167.', 'TRUE — Book value ≈ €32,500.', 'FALSE — About 25.0% of the machinery''s cost is depreciated after three years.', 'FALSE — Delivery truck ≈ €8,167 a year versus computer equipment ≈ €7,667 a year.', 'FALSE — Machinery''s share of the combined charge ≈ 47.5%.'], '2/5', 83, 'full' ),
( '6.2', 'CASE 6.2.084', 'Liquidity From the Balance Sheet 84', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=458
Current liabilities=127
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 466 |
| Machinery | 204 |
| Office equipment | 58 |
| Patents, trademarks and licences | 74 |
| Inventory | 211 |
| Trade receivables | 177 |
| Cash and cash equivalents | 70 |
| Total assets | **1260** |
| **EQUITY** | |
| Share capital | 256 |
| Retained earnings | 405 |
| Total equity | **661** |
| **LIABILITIES** | |
| Long-term bank loan | 415 |
| Bonds payable | 57 |
| Trade payables | 71 |
| Bank overdraft | 56 |
| Total liabilities | **599** |
| Total equity and liabilities | **1260** |

Evaluate the following economic assertions:', ARRAY['Working capital of €331 thousand is positive on this balance sheet.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 1.12 times over.', 'Cash and cash equivalents make up more than 14.8% of current assets.', 'The combined total of equity and non-current liabilities exceeds non-current assets by more than 24.2%.', 'Inventory of €211 thousand is correctly classified as a current asset rather than a non-current intangible asset.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Working capital = 331.', 'TRUE — Acid-test ratio ≈ 1.94.', 'TRUE — Cash and cash equivalents are about 15.3% of current assets.', 'TRUE — Long-term financing covers non-current assets by about 41.3%.', 'TRUE — Inventory is always a current asset.'], '4/5', 84, 'full' ),
( '6.2', 'CASE 6.2.085', 'Asset Composition Chart 85', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=404
Current liabilities=249
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 345 |
| Machinery | 144 |
| Office equipment | 67 |
| Patents, trademarks and licences | 70 |
| Inventory | 234 |
| Trade receivables | 128 |
| Cash and cash equivalents | 42 |
| Total assets | **1030** |
| **EQUITY** | |
| Share capital | 271 |
| Retained earnings | 168 |
| Total equity | **439** |
| **LIABILITIES** | |
| Long-term bank loan | 258 |
| Bonds payable | 84 |
| Trade payables | 215 |
| Bank overdraft | 34 |
| Total liabilities | **591** |
| Total equity and liabilities | **1030** |

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.5.', 'Working capital of €155 thousand is positive on this balance sheet.', 'The debt ratio exceeds 57.3%.', 'Inventory make up more than 51.3% of current assets.', 'Trade receivables make up less than 37.9% of current assets.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Current ratio ≈ 1.62.', 'TRUE — Working capital = 155.', 'TRUE — Debt ratio ≈ 57.4%.', 'TRUE — Inventory are about 57.9% of current assets.', 'TRUE — Trade receivables are about 31.7% of current assets.'], '5/5', 85, 'full' ),
( '6.2', 'CASE 6.2.086', 'Profit and Loss Over Two Years 86', 'Consider the following two-year statement of profit and loss (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Revenue and operating result"]]
Year 1 | Revenue=877 | Operating result=216
Year 2 | Revenue=1040 | Operating result=254
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Revenue | 877 | 1040 |
| Cost of sales | (576) | (679) |
| Gross profit | 301 | 361 |
| Distribution costs | (54) | (65) |
| General and administrative costs | (29) | (39) |
| Other operating result | (2) | (3) |
| Operating result | 216 | 254 |
| Finance costs | (14) | (19) |
| Finance costs – net | (9) | (13) |
| Profit before tax | 207 | 241 |
| Income taxes | (47) | (59) |
| Profit for the year | 160 | 182 |

Evaluate the following economic assertions:', ARRAY['The operating result covers finance costs more than 6.63 times over in Year 1.', 'The operating margin, operating result taken as a share of revenue, exceeds 8.9% in Year 2.', 'The effective tax rate, income taxes taken as a share of profit before tax, is below 23.1% in Year 1.', 'The gross profit margin in Year 2 is exactly 34.7%.', 'Profit for the year increased by exactly €22 thousand from Year 1 to Year 2.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Interest coverage in Year 1 ≈ 15.4 times.', 'TRUE — Operating margin in Year 2 ≈ 24.4%.', 'TRUE — Effective tax rate in Year 1 ≈ 22.7%.', 'TRUE — Gross margin in Year 2 ≈ 34.7%.', 'TRUE — Profit moved from 160 to 182.'], '4/5', 86, 'full' ),
( '6.2', 'CASE 6.2.087', 'Investing Cash Flow and Fixed Assets', 'Analyze why a business can be profitable yet still see its cash balance fall during the year. Evaluate the following economic assertions:', ARRAY['Accumulated depreciation on a arable farm''s tractor after three years is 31,900 euros.', 'When a recycling firm repays part of a long-term bank loan, that cash outflow belongs in cash flow from financing activities.', 'Accumulated depreciation on a electronics retailer''s point-of-sale tills after three years is 27,000 euros.', 'Accumulated depreciation on a logistics company''s forklift trucks after three years is 25,300 euros.', 'Accumulated depreciation on a dairy processor''s refrigerated trucks after three years is 19,900 euros.'], ARRAY[false, true, false, false, false], ARRAY['FALSE — Three years of use accumulate 47,850 euros, not two years'' worth.', 'TRUE — Repaying borrowed funds relates to how the business is financed, so it is classified as a financing cash flow.', 'FALSE — Three years of use accumulate 40,500 euros, not two years'' worth.', 'FALSE — Three years of use accumulate 37,950 euros, not two years'' worth.', 'FALSE — Three years of use accumulate 29,850 euros, not two years'' worth.'], '2/5', 87, 'full' ),
( '6.2', 'CASE 6.2.088', 'Financing Cash Flow and Borrowing', 'Consider the following cash flow statement extract (€) for a logistics company.

| Item | Amount |
| --- | ---: |
| Cash flow from operating activities | 83600 |
| Cash flow from investing activities | (10800) |
| Cash flow from financing activities | 13420 |
| Net change in cash and cash equivalents | **86220** |

Evaluate the following economic assertions:', ARRAY['On extract 37, cash and cash equivalents change by 86,220 euros in total.', 'Treating the investing line as an addition, total cash would change by 107,820 euros on extract 37.', 'Purchases recorded under investing total an outflow of 10,800 euros on extract 37.', 'Financing activities add 13,420 euros to cash on extract 37.', 'Operating cash of 83,600 euros more than covers the investing outflow of 10,800 euros on extract 37.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — Operating 83600 − investing 10800 + financing 13420 = 86220.', 'FALSE — Investing must be subtracted; correct net change is 86,220 euros.', 'TRUE — The investing line is (10800).', 'TRUE — Financing is an inflow of 13,420 euros.', 'TRUE — Operating 83600 versus investing 10800.'], '2/5', 88, 'full' ),
( '6.2', 'CASE 6.2.089', 'Revenue and Operating Result Chart 89', 'Consider the following two-year statement of profit and loss (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Revenue and operating result"]]
Year 1 | Revenue=958 | Operating result=313
Year 2 | Revenue=1086 | Operating result=345
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Revenue | 958 | 1086 |
| Cost of sales | (578) | (652) |
| Gross profit | 380 | 434 |
| Distribution costs | (38) | (51) |
| General and administrative costs | (31) | (36) |
| Other operating result | 2 | (2) |
| Operating result | 313 | 345 |
| Finance costs | (19) | (24) |
| Finance costs – net | (16) | (18) |
| Profit before tax | 297 | 327 |
| Income taxes | (67) | (77) |
| Profit for the year | 230 | 250 |

Evaluate the following economic assertions:', ARRAY['Revenue grew by more than 8.6% between Year 1 and Year 2.', 'The operating result grew by more than 57% between Year 1 and Year 2.', 'Profit for the year grew by more than 17.2% between Year 1 and Year 2.', 'Finance costs grew by more than 12.7% between Year 1 and Year 2, outpacing the growth in the operating result.', 'The operating result covers finance costs more than 10.94 times over in Year 1.'], ARRAY[true, false, false, true, true], ARRAY['TRUE — Revenue changed by about 13.4% between the two years.', 'FALSE — The operating result changed by about 10.2% between the two years.', 'FALSE — Profit for the year changed by about 8.7% between the two years.', 'TRUE — Finance costs moved from 19 to 24; operating result moved from 313 to 345.', 'TRUE — Interest coverage in Year 1 ≈ 16.5 times.'], '5/5', 89, 'full' ),
( '6.2', 'CASE 6.2.090', 'Depreciation Schedule Review 90', 'A business depreciates the following fixed assets on a straight-line basis. Identity is not disclosed.

[[CHART type="bar" title="Annual depreciation by asset"]]
Machinery | Annual depreciation=15625
Delivery truck | Annual depreciation=8167
Computer equipment | Annual depreciation=7667
[[/CHART]]

| Asset details | Amount |
| --- | ---: |
| Asset A – Machinery | €125,000 purchase price, 8-year useful life, no residual value |
| Asset B – Delivery truck | €56,000 purchase price, 6-year useful life, €7,000 residual value |
| Asset C – Computer equipment | €23,000 purchase price, 3-year useful life, no residual value |

Evaluate the following economic assertions:', ARRAY['After three years, the computer equipment, originally costing €23,000, is fully written down to nil.', 'Combined annual depreciation for the three assets is €32,549.', 'After three years, the combined book value of all three assets exceeds €100,238.', 'After three years, the delivery truck''s book value is €34,424.', 'Without recording depreciation on the €125,000 machinery, non-current assets on the balance sheet would be overstated.'], ARRAY[true, false, true, false, true], ARRAY['TRUE — Useful life is 3 years with no residual value.', 'FALSE — Sum of annual charges ≈ €31,458.', 'TRUE — Combined book value ≈ €109,625.', 'FALSE — Book value ≈ €31,500.', 'TRUE — Assets would stay at historical cost without write-downs.'], '4/5', 90, 'full' ),
( '6.2', 'CASE 6.2.091', 'Asset Composition Chart 91', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=383
Current liabilities=176
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 481 |
| Machinery | 203 |
| Office equipment | 61 |
| Patents, trademarks and licences | 64 |
| Inventory | 148 |
| Trade receivables | 168 |
| Cash and cash equivalents | 67 |
| Total assets | **1192** |
| **EQUITY** | |
| Share capital | 272 |
| Retained earnings | 505 |
| Total equity | **777** |
| **LIABILITIES** | |
| Long-term bank loan | 195 |
| Bonds payable | 44 |
| Trade payables | 138 |
| Bank overdraft | 38 |
| Total liabilities | **415** |
| Total equity and liabilities | **1192** |

Evaluate the following economic assertions:', ARRAY['Working capital of €207 thousand is positive on this balance sheet.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 1 times over.', 'The equity ratio is below 35.5%.', 'The debt ratio exceeds 51.1%.', 'Inventory of €148 thousand is correctly classified as a current asset rather than a non-current intangible asset.'], ARRAY[true, true, false, false, true], ARRAY['TRUE — Working capital = 207.', 'TRUE — Acid-test ratio ≈ 1.34.', 'FALSE — Equity ratio ≈ 65.2%.', 'FALSE — Debt ratio ≈ 34.8%.', 'TRUE — Inventory is always a current asset.'], '2/5', 91, 'full' ),
( '6.2', 'CASE 6.2.092', 'Earnings Per Share From Reported Figures 92', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=35
February | Price=36
March | Price=36
April | Price=38
May | Price=39
June | Price=44
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=40000
February | Volume=49000
March | Volume=89000
April | Volume=32000
May | Volume=79000
June | Volume=87000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 35 | 40,000 |
| February | 36 | 49,000 |
| March | 36 | 89,000 |
| April | 38 | 32,000 |
| May | 39 | 79,000 |
| June | 44 | 87,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 200 |
| Shares outstanding | 604,000 |
| Total shares traded (six months) | 376,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 34.9% from first to last month.', 'Market capitalisation at the last month exceeds €20.3 million.', 'Highest closing price is more than 14.3% above the lowest.', 'Total shares traded over six months exceed 28% of shares outstanding.', 'Peak monthly share turnover exceeds 65,605 shares.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — Price change ≈ 25.7%.', 'TRUE — Market capitalisation ≈ €26.6 million.', 'TRUE — Range €35–€44.', 'TRUE — Turnover ≈ 62.3% of shares outstanding.', 'TRUE — Peak monthly volume = 89,000.'], '2/5', 92, 'full' ),
( '6.2', 'CASE 6.2.093', 'Retained Earnings and Equity Growth', 'Analyze why depreciation is added back to profit when working out cash generated from operating activities. Evaluate the following economic assertions:', ARRAY['Accumulated depreciation on a fitness club chain''s exercise equipment after three years is 43,550 euros.', 'Accumulated depreciation on a restaurant chain''s commercial refrigerators after three years is 36,320 euros.', 'Accumulated depreciation on a IT consultancy''s laptop computers after three years is 31,500 euros.', 'When a construction firm earns a profit for the year, that profit is added to retained earnings and therefore increases the equity shown on its balance sheet.', 'When a hotel chain makes a loss for the year, that loss is deducted from retained earnings and therefore reduces the equity shown on its balance sheet.'], ARRAY[false, false, false, true, true], ARRAY['FALSE — Three years of use accumulate 65,325 euros, not two years'' worth.', 'FALSE — Three years of use accumulate 54,480 euros, not two years'' worth.', 'FALSE — Three years of use accumulate 47,250 euros, not two years'' worth.', 'TRUE — Profit for the year raises retained earnings, which in turn increases total equity.', 'TRUE — A loss for the year lowers retained earnings, which in turn reduces total equity.'], '5/5', 93, 'full' ),
( '6.2', 'CASE 6.2.094', 'Listed Company Performance Charts 94', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=20
February | Price=21
March | Price=23
April | Price=23
May | Price=24
June | Price=25
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=63000
February | Volume=69000
March | Volume=54000
April | Volume=93000
May | Volume=52000
June | Volume=36000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 20 | 63,000 |
| February | 21 | 69,000 |
| March | 23 | 54,000 |
| April | 23 | 93,000 |
| May | 24 | 52,000 |
| June | 25 | 36,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 278 |
| Shares outstanding | 656,000 |
| Total shares traded (six months) | 367,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 16.8% from first to last month.', 'Market capitalisation at the last month exceeds €12.6 million.', 'Total shares traded over six months exceed 26.4% of shares outstanding.', 'Peak monthly share turnover exceeds 56,226 shares.', 'Shares outstanding equal 656,000.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Price change ≈ 25.0%.', 'TRUE — Market capitalisation ≈ €16.4 million.', 'TRUE — Turnover ≈ 55.9% of shares outstanding.', 'TRUE — Peak monthly volume = 93,000.', 'TRUE — Shares outstanding = 656,000.'], '4/5', 94, 'full' ),
( '6.2', 'CASE 6.2.095', 'Earnings Per Share From Reported Figures 95', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=20
February | Price=20
March | Price=20
April | Price=20
May | Price=20
June | Price=24
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=26000
February | Volume=52000
March | Volume=85000
April | Volume=95000
May | Volume=50000
June | Volume=55000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 20 | 26,000 |
| February | 20 | 52,000 |
| March | 20 | 85,000 |
| April | 20 | 95,000 |
| May | 20 | 50,000 |
| June | 24 | 55,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 209 |
| Shares outstanding | 510,000 |
| Total shares traded (six months) | 363,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 15.9% from first to last month.', 'Market capitalisation rose by more than 23.2% over the period.', 'Market capitalisation at the last month exceeds €11.5 million.', 'Total shares traded over six months exceed 10.4% of shares outstanding.', 'Peak monthly share turnover exceeds 84,116 shares.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — Price change ≈ 20.0%.', 'FALSE — €10.2m → €12.2m.', 'TRUE — Market capitalisation ≈ €12.2 million.', 'TRUE — Turnover ≈ 71.2% of shares outstanding.', 'TRUE — Peak monthly volume = 95,000.'], '2/5', 95, 'full' ),
( '6.2', 'CASE 6.2.096', 'Loss and Retained Earnings Decline', 'Consider a construction firm financing new heavy machinery partly with retained profits and partly with a long-term loan. Evaluate the following economic assertions:', ARRAY['Accumulated depreciation on a publishing house''s binding machines after three years is 25,750 euros.', 'Accumulated depreciation on a car parts manufacturer''s stamping presses after three years is 21,340 euros.', 'Accumulated depreciation on a packaging manufacturer''s packaging machinery after three years is 55,200 euros.', 'Accumulated depreciation on a catering company''s catering vans after three years is 45,640 euros.', 'When a software developer earns a profit for the year, that profit is added to retained earnings and therefore increases the equity shown on its balance sheet.'], ARRAY[false, false, false, false, true], ARRAY['FALSE — Three years of use accumulate 38,625 euros, not two years'' worth.', 'FALSE — Three years of use accumulate 32,010 euros, not two years'' worth.', 'FALSE — Three years of use accumulate 82,800 euros, not two years'' worth.', 'FALSE — Three years of use accumulate 68,460 euros, not two years'' worth.', 'TRUE — Profit for the year raises retained earnings, which in turn increases total equity.'], '5/5', 96, 'full' ),
( '6.2', 'CASE 6.2.097', 'Listed Company Performance Charts 97', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=36
February | Price=38
March | Price=40
April | Price=42
May | Price=42
June | Price=45
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=46000
February | Volume=59000
March | Volume=58000
April | Volume=63000
May | Volume=48000
June | Volume=49000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 36 | 46,000 |
| February | 38 | 59,000 |
| March | 40 | 58,000 |
| April | 42 | 63,000 |
| May | 42 | 48,000 |
| June | 45 | 49,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 230 |
| Shares outstanding | 639,000 |
| Total shares traded (six months) | 323,000 |

Evaluate the following economic assertions:', ARRAY['Highest closing price is more than 31.3% above the lowest.', 'The closing share price rose by more than 16% from first to last month.', 'Market capitalisation at the last month exceeds €23.7 million.', 'Peak monthly share turnover exceeds 63,979 shares.', 'Operating result is below €199 thousand.'], ARRAY[false, true, true, false, false], ARRAY['FALSE — Range €36–€45.', 'TRUE — Price change ≈ 25.0%.', 'TRUE — Market capitalisation ≈ €28.8 million.', 'FALSE — Peak monthly volume = 63,000.', 'FALSE — Operating result = 230.'], '5/5', 97, 'full' ),
( '6.2', 'CASE 6.2.098', 'Reading a Statement of Profit and Loss', 'Consider the following cash flow statement extract (€) for a fitness club chain.

| Item | Amount |
| --- | ---: |
| Cash flow from operating activities | 88400 |
| Cash flow from investing activities | (16200) |
| Cash flow from financing activities | (11220) |
| Net change in cash and cash equivalents | **60980** |

Evaluate the following economic assertions:', ARRAY['On extract 40, cash and cash equivalents change by 60,980 euros in total.', 'Purchases recorded under investing total an outflow of 16,200 euros on extract 40.', 'Financing activities remove 11,220 euros from cash on extract 40.', 'Operating cash of 88,400 euros more than covers the investing outflow of 16,200 euros on extract 40.', 'Buying new exercise equipment for this fitness club chain is classified under investing activities.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Operating 88400 − investing 16200 − financing 11220 = 60980.', 'TRUE — The investing line is (16200).', 'TRUE — Financing is an outflow of 11,220 euros.', 'TRUE — Operating 88400 versus investing 16200.', 'TRUE — Long-term asset purchases are investing cash flows.'], '2/5', 98, 'full' ),
( '6.2', 'CASE 6.2.099', 'Share Price and Market Capitalisation 99', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=28
February | Price=28
March | Price=28
April | Price=28
May | Price=28
June | Price=35
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=82000
February | Volume=92000
March | Volume=45000
April | Volume=38000
May | Volume=30000
June | Volume=77000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 28 | 82,000 |
| February | 28 | 92,000 |
| March | 28 | 45,000 |
| April | 28 | 38,000 |
| May | 28 | 30,000 |
| June | 35 | 77,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 244 |
| Shares outstanding | 796,000 |
| Total shares traded (six months) | 364,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 15.7% from first to last month.', 'Market capitalisation at the last month exceeds €22 million.', 'Market capitalisation rose by more than 23.5% over the period.', 'Total shares traded over six months exceed 28.1% of shares outstanding.', 'Peak monthly share turnover exceeds 86,752 shares.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Price change ≈ 25.0%.', 'TRUE — Market capitalisation ≈ €27.9 million.', 'TRUE — €22.3m → €27.9m.', 'TRUE — Turnover ≈ 45.7% of shares outstanding.', 'TRUE — Peak monthly volume = 92,000.'], '4/5', 99, 'full' ),
( '6.2', 'CASE 6.2.100', 'Listed Company Performance Charts 100', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=23
February | Price=24
March | Price=24
April | Price=23
May | Price=22
June | Price=28
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=74000
February | Volume=39000
March | Volume=72000
April | Volume=18000
May | Volume=65000
June | Volume=32000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 23 | 74,000 |
| February | 24 | 39,000 |
| March | 24 | 72,000 |
| April | 23 | 18,000 |
| May | 22 | 65,000 |
| June | 28 | 32,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 203 |
| Shares outstanding | 474,000 |
| Total shares traded (six months) | 300,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 15% from first to last month.', 'Market capitalisation at the last month exceeds €10.4 million.', 'Market capitalisation rose by more than 13.4% over the period.', 'Highest closing price is more than 20.6% above the lowest.', 'Total shares traded over six months exceed 21.9% of shares outstanding.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Price change ≈ 21.7%.', 'TRUE — Market capitalisation ≈ €13.3 million.', 'TRUE — €10.9m → €13.3m.', 'TRUE — Range €22–€28.', 'TRUE — Turnover ≈ 63.3% of shares outstanding.'], '5/5', 100, 'full' ),
( '6.2', 'CASE 6.2.101', 'Earnings Per Share From Reported Figures 101', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=25
February | Price=24
March | Price=23
April | Price=23
May | Price=22
June | Price=26
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=36000
February | Volume=42000
March | Volume=91000
April | Volume=75000
May | Volume=27000
June | Volume=41000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 25 | 36,000 |
| February | 24 | 42,000 |
| March | 23 | 91,000 |
| April | 23 | 75,000 |
| May | 22 | 27,000 |
| June | 26 | 41,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 288 |
| Shares outstanding | 623,000 |
| Total shares traded (six months) | 312,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €13.3 million.', 'The closing share price rose by more than 19% from first to last month.', 'Market capitalisation rose by more than 29.9% over the period.', 'Highest closing price is more than 38.4% above the lowest.', 'Operating result is below €202 thousand.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Market capitalisation ≈ €16.2 million.', 'FALSE — Price change ≈ 4.0%.', 'FALSE — €15.6m → €16.2m.', 'FALSE — Range €22–€26.', 'FALSE — Operating result = 288.'], '3/5', 101, 'full' ),
( '6.2', 'CASE 6.2.102', 'Share Price and Market Capitalisation 102', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=33
February | Price=36
March | Price=36
April | Price=38
May | Price=41
June | Price=44
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=45000
February | Volume=67000
March | Volume=62000
April | Volume=58000
May | Volume=43000
June | Volume=77000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 33 | 45,000 |
| February | 36 | 67,000 |
| March | 36 | 62,000 |
| April | 38 | 58,000 |
| May | 41 | 43,000 |
| June | 44 | 77,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 244 |
| Shares outstanding | 406,000 |
| Total shares traded (six months) | 352,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation rose by more than 35% over the period.', 'Peak monthly share turnover exceeds 81,999 shares.', 'The closing share price rose by more than 25.3% from first to last month.', 'Operating result is below €212 thousand.', 'Earnings per share is exactly €0.50.'], ARRAY[false, false, true, false, false], ARRAY['FALSE — €13.4m → €17.9m.', 'FALSE — Peak monthly volume = 77,000.', 'TRUE — Price change ≈ 33.3%.', 'FALSE — Operating result = 244.', 'FALSE — Earnings per share ≈ €0.60.'], '2/5', 102, 'full' ),
( '6.2', 'CASE 6.2.103', 'Listed Company Performance Charts 103', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=32
February | Price=31
March | Price=31
April | Price=31
May | Price=30
June | Price=38
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=41000
February | Volume=54000
March | Volume=95000
April | Volume=73000
May | Volume=21000
June | Volume=52000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 32 | 41,000 |
| February | 31 | 54,000 |
| March | 31 | 95,000 |
| April | 31 | 73,000 |
| May | 30 | 21,000 |
| June | 38 | 52,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 206 |
| Shares outstanding | 603,000 |
| Total shares traded (six months) | 336,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation rose by more than 14.5% over the period.', 'The closing share price rose by more than 29.8% from first to last month.', 'Peak monthly share turnover exceeds 97,827 shares.', 'Earnings per share is exactly €0.43.', 'Highest closing price is more than 26% above the lowest.'], ARRAY[true, false, false, false, true], ARRAY['TRUE — €19.3m → €22.9m.', 'FALSE — Price change ≈ 18.8%.', 'FALSE — Peak monthly volume = 95,000.', 'FALSE — Earnings per share ≈ €0.34.', 'TRUE — Range €30–€38.'], '5/5', 103, 'full' ),
( '6.2', 'CASE 6.2.104', 'Earnings Per Share From Reported Figures 104', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=38
February | Price=40
March | Price=41
April | Price=40
May | Price=43
June | Price=48
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=35000
February | Volume=18000
March | Volume=75000
April | Volume=34000
May | Volume=26000
June | Volume=78000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 38 | 35,000 |
| February | 40 | 18,000 |
| March | 41 | 75,000 |
| April | 40 | 34,000 |
| May | 43 | 26,000 |
| June | 48 | 78,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 222 |
| Shares outstanding | 858,000 |
| Total shares traded (six months) | 266,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €35.4 million.', 'Earnings per share exceeds €0.21.', 'Highest closing price is more than 22.9% above the lowest.', 'Total shares traded over six months exceed 26.5% of shares outstanding.', 'Peak monthly share turnover exceeds 66,118 shares.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Market capitalisation ≈ €41.2 million.', 'TRUE — Earnings per share ≈ €0.26.', 'TRUE — Range €38–€48.', 'TRUE — Turnover ≈ 31.0% of shares outstanding.', 'TRUE — Peak monthly volume = 78,000.'], '2/5', 104, 'full' ),
( '6.2', 'CASE 6.2.105', 'Share Price and Market Capitalisation 105', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=29
February | Price=29
March | Price=27
April | Price=25
May | Price=24
June | Price=22
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=35000
February | Volume=89000
March | Volume=47000
April | Volume=61000
May | Volume=58000
June | Volume=37000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 29 | 35,000 |
| February | 29 | 89,000 |
| March | 27 | 47,000 |
| April | 25 | 61,000 |
| May | 24 | 58,000 |
| June | 22 | 37,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 187 |
| Shares outstanding | 656,000 |
| Total shares traded (six months) | 327,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 15.6% from first to last month.', 'Market capitalisation rose by more than 15.6% over the period.', 'Peak monthly share turnover exceeds 95,658 shares.', 'Earnings per share is exactly €0.19.', 'Market capitalisation at the last month exceeds €13.4 million.'], ARRAY[false, false, false, false, true], ARRAY['FALSE — Price change ≈ -24.1%.', 'FALSE — €19.0m → €14.4m.', 'FALSE — Peak monthly volume = 89,000.', 'FALSE — Earnings per share ≈ €0.29.', 'TRUE — Market capitalisation ≈ €14.4 million.'], '3/5', 105, 'full' ),
( '6.2', 'CASE 6.2.106', 'Listed Company Performance Charts 106', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=37
February | Price=42
March | Price=43
April | Price=45
May | Price=46
June | Price=49
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=48000
February | Volume=29000
March | Volume=62000
April | Volume=67000
May | Volume=29000
June | Volume=60000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 37 | 48,000 |
| February | 42 | 29,000 |
| March | 43 | 62,000 |
| April | 45 | 67,000 |
| May | 46 | 29,000 |
| June | 49 | 60,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 241 |
| Shares outstanding | 784,000 |
| Total shares traded (six months) | 295,000 |

Evaluate the following economic assertions:', ARRAY['Highest closing price is more than 38.9% above the lowest.', 'The closing share price rose by more than 17.4% from first to last month.', 'Earnings per share is exactly €0.25.', 'Market capitalisation at the last month exceeds €30.1 million.', 'Market capitalisation rose by more than 19.5% over the period.'], ARRAY[false, true, false, true, true], ARRAY['FALSE — Range €37–€49.', 'TRUE — Price change ≈ 32.4%.', 'FALSE — Earnings per share ≈ €0.31.', 'TRUE — Market capitalisation ≈ €38.4 million.', 'TRUE — €29.0m → €38.4m.'], '4/5', 106, 'full' ),
( '6.2', 'CASE 6.2.107', 'Reading a Cash Flow Statement', 'Review why financing activities in the cash flow statement often involve loans, share capital or dividends. Evaluate the following economic assertions:', ARRAY['Straight-line annual depreciation on office computer equipment bought by a software developer is 3,680 euros when cost, residual value and useful life are applied correctly.', 'Accumulated depreciation on a recycling firm''s sorting machinery after three years is 39,200 euros.', 'Straight-line annual depreciation on tractor bought by a arable farm is 15,950 euros when cost, residual value and useful life are applied correctly.', 'Straight-line annual depreciation on forklift trucks bought by a logistics company is 12,650 euros when cost, residual value and useful life are applied correctly.', 'Straight-line annual depreciation on exercise equipment bought by a fitness club chain is 21,775 euros when cost, residual value and useful life are applied correctly.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — That is the correct annual straight-line charge for this office computer equipment.', 'FALSE — Three years of use accumulate 58,800 euros, not two years'' worth.', 'TRUE — That is the correct annual straight-line charge for this tractor.', 'TRUE — That is the correct annual straight-line charge for this forklift trucks.', 'TRUE — That is the correct annual straight-line charge for this exercise equipment.'], '5/5', 107, 'full' ),
( '6.2', 'CASE 6.2.108', 'Share Price and Market Capitalisation 108', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=43
February | Price=45
March | Price=49
April | Price=48
May | Price=48
June | Price=54
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=59000
February | Volume=66000
March | Volume=56000
April | Volume=87000
May | Volume=42000
June | Volume=76000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 43 | 59,000 |
| February | 45 | 66,000 |
| March | 49 | 56,000 |
| April | 48 | 87,000 |
| May | 48 | 42,000 |
| June | 54 | 76,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 288 |
| Shares outstanding | 404,000 |
| Total shares traded (six months) | 386,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 21.4% from first to last month.', 'Market capitalisation rose by more than 31.6% over the period.', 'Highest closing price is more than 25.9% above the lowest.', 'Operating result is below €229 thousand.', 'Market capitalisation at the last month exceeds €18.4 million.'], ARRAY[true, false, false, false, true], ARRAY['TRUE — Price change ≈ 25.6%.', 'FALSE — €17.4m → €21.8m.', 'FALSE — Range €43–€54.', 'FALSE — Operating result = 288.', 'TRUE — Market capitalisation ≈ €21.8 million.'], '5/5', 108, 'full' ),
( '6.2', 'CASE 6.2.109', 'Fixed Assets and Useful Life', 'Analyze why operating activities in the cash flow statement reflect the core trading of a business. Evaluate the following economic assertions:', ARRAY['Accumulated depreciation on a ceramics workshop''s kiln equipment after three years is 30,350 euros.', 'When a bakery collects payment from a customer who owed money on an overdue invoice, the resulting cash inflow belongs in cash flow from financing activities.', 'When a courier firm repays part of a long-term bank loan, that cash outflow belongs in cash flow from operating activities.', 'Straight-line annual depreciation on commercial refrigerators bought by a restaurant chain is 18,160 euros when cost, residual value and useful life are applied correctly.', 'When a construction firm purchases new heavy construction machinery for use in the business, the resulting cash outflow belongs in cash flow from operating activities.'], ARRAY[false, false, false, true, false], ARRAY['FALSE — Three years of use accumulate 45,525 euros, not two years'' worth.', 'FALSE — Collecting money from a customer relates to core trading, so it belongs in the operating section, not the financing section.', 'FALSE — Loan repayments relate to how the business is financed, so they belong in the financing section, not the operating section.', 'TRUE — That is the correct annual straight-line charge for this commercial refrigerators.', 'FALSE — Buying long-term assets such as heavy construction machinery is an investing decision, so the outflow belongs in the investing section, not the operating section.'], '5/5', 109, 'full' ),
( '6.2', 'CASE 6.2.110', 'Earnings Per Share From Reported Figures 110', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=35
February | Price=36
March | Price=35
April | Price=36
May | Price=36
June | Price=44
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=92000
February | Volume=56000
March | Volume=20000
April | Volume=23000
May | Volume=85000
June | Volume=65000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 35 | 92,000 |
| February | 36 | 56,000 |
| March | 35 | 20,000 |
| April | 36 | 23,000 |
| May | 36 | 85,000 |
| June | 44 | 65,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 282 |
| Shares outstanding | 776,000 |
| Total shares traded (six months) | 341,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 18.3% from first to last month.', 'Market capitalisation rose by more than 33.1% over the period.', 'Highest closing price is more than 43.7% above the lowest.', 'Peak monthly share turnover exceeds 92,097 shares.', 'Operating result is below €214 thousand.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Price change ≈ 25.7%.', 'FALSE — €27.2m → €34.1m.', 'FALSE — Range €35–€44.', 'FALSE — Peak monthly volume = 92,000.', 'FALSE — Operating result = 282.'], '5/5', 110, 'full' ),
( '6.2', 'CASE 6.2.111', 'Share Price and Market Capitalisation 111', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=26
February | Price=24
March | Price=21
April | Price=19
May | Price=17
June | Price=15
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=93000
February | Volume=38000
March | Volume=55000
April | Volume=77000
May | Volume=68000
June | Volume=45000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 26 | 93,000 |
| February | 24 | 38,000 |
| March | 21 | 55,000 |
| April | 19 | 77,000 |
| May | 17 | 68,000 |
| June | 15 | 45,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 292 |
| Shares outstanding | 660,000 |
| Total shares traded (six months) | 376,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 22% from first to last month.', 'Market capitalisation rose by more than 22.6% over the period.', 'Peak monthly share turnover exceeds 97,905 shares.', 'Earnings per share exceeds €0.41.', 'Operating result is below €269 thousand.'], ARRAY[false, false, false, true, false], ARRAY['FALSE — Price change ≈ -42.3%.', 'FALSE — €17.2m → €9.9m.', 'FALSE — Peak monthly volume = 93,000.', 'TRUE — Earnings per share ≈ €0.44.', 'FALSE — Operating result = 292.'], '4/5', 111, 'full' ),
( '6.2', 'CASE 6.2.112', 'Listed Company Performance Charts 112', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=31
February | Price=31
March | Price=33
April | Price=34
May | Price=36
June | Price=39
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=43000
February | Volume=91000
March | Volume=40000
April | Volume=64000
May | Volume=59000
June | Volume=93000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 31 | 43,000 |
| February | 31 | 91,000 |
| March | 33 | 40,000 |
| April | 34 | 64,000 |
| May | 36 | 59,000 |
| June | 39 | 93,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 200 |
| Shares outstanding | 734,000 |
| Total shares traded (six months) | 390,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €22.4 million.', 'Market capitalisation rose by more than 16.3% over the period.', 'Earnings per share exceeds €0.23.', 'Highest closing price is more than 23.2% above the lowest.', 'Total shares traded over six months exceed 39% of shares outstanding.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Market capitalisation ≈ €28.6 million.', 'TRUE — €22.8m → €28.6m.', 'TRUE — Earnings per share ≈ €0.27.', 'TRUE — Range €31–€39.', 'TRUE — Turnover ≈ 53.1% of shares outstanding.'], '4/5', 112, 'full' ),
( '6.2', 'CASE 6.2.113', 'Earnings Per Share From Reported Figures 113', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=20
February | Price=17
March | Price=16
April | Price=15
May | Price=12
June | Price=10
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=47000
February | Volume=55000
March | Volume=40000
April | Volume=18000
May | Volume=81000
June | Volume=90000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 20 | 47,000 |
| February | 17 | 55,000 |
| March | 16 | 40,000 |
| April | 15 | 18,000 |
| May | 12 | 81,000 |
| June | 10 | 90,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 316 |
| Shares outstanding | 869,000 |
| Total shares traded (six months) | 331,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 24.3% from first to last month.', 'Market capitalisation at the last month exceeds €8 million.', 'Market capitalisation rose by more than 32.8% over the period.', 'Operating result is below €231 thousand.', 'Earnings per share is exactly €0.41.'], ARRAY[false, true, false, false, false], ARRAY['FALSE — Price change ≈ -50.0%.', 'TRUE — Market capitalisation ≈ €8.7 million.', 'FALSE — €17.4m → €8.7m.', 'FALSE — Operating result = 316.', 'FALSE — Earnings per share ≈ €0.36.'], '5/5', 113, 'full' ),
( '6.2', 'CASE 6.2.114', 'Accumulated Depreciation Over Time', 'Consider the following cash flow statement extract (€) for a publishing house.

| Item | Amount |
| --- | ---: |
| Cash flow from operating activities | 93200 |
| Cash flow from investing activities | (12600) |
| Cash flow from financing activities | 14740 |
| Net change in cash and cash equivalents | **95340** |

Evaluate the following economic assertions:', ARRAY['On extract 43, cash and cash equivalents change by 95,340 euros in total.', 'Purchases recorded under investing total an outflow of 12,600 euros on extract 43.', 'Financing activities add 14,740 euros to cash on extract 43.', 'Operating cash of 93,200 euros more than covers the investing outflow of 12,600 euros on extract 43.', 'Buying new binding machines for this publishing house is classified under investing activities.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Operating 93200 − investing 12600 + financing 14740 = 95340.', 'TRUE — The investing line is (12600).', 'TRUE — Financing is an inflow of 14,740 euros.', 'TRUE — Operating 93200 versus investing 12600.', 'TRUE — Long-term asset purchases are investing cash flows.'], '5/5', 114, 'full' ),
( '6.2', 'CASE 6.2.115', 'Listed Company Performance Charts 115', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=21
February | Price=19
March | Price=18
April | Price=17
May | Price=16
June | Price=16
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=43000
February | Volume=48000
March | Volume=24000
April | Volume=49000
May | Volume=41000
June | Volume=65000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 21 | 43,000 |
| February | 19 | 48,000 |
| March | 18 | 24,000 |
| April | 17 | 49,000 |
| May | 16 | 41,000 |
| June | 16 | 65,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 249 |
| Shares outstanding | 513,000 |
| Total shares traded (six months) | 270,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 21% from first to last month.', 'Market capitalisation rose by more than 10% over the period.', 'Peak monthly share turnover exceeds 72,575 shares.', 'Market capitalisation at the last month exceeds €7 million.', 'Operating result is below €247 thousand.'], ARRAY[false, false, false, true, false], ARRAY['FALSE — Price change ≈ -23.8%.', 'FALSE — €10.8m → €8.2m.', 'FALSE — Peak monthly volume = 65,000.', 'TRUE — Market capitalisation ≈ €8.2 million.', 'FALSE — Operating result = 249.'], '3/5', 115, 'full' ),
( '6.2', 'CASE 6.2.116', 'Earnings Per Share From Reported Figures 116', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=36
February | Price=31
March | Price=28
April | Price=26
May | Price=22
June | Price=19
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=23000
February | Volume=18000
March | Volume=70000
April | Volume=73000
May | Volume=42000
June | Volume=20000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 36 | 23,000 |
| February | 31 | 18,000 |
| March | 28 | 70,000 |
| April | 26 | 73,000 |
| May | 22 | 42,000 |
| June | 19 | 20,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 274 |
| Shares outstanding | 855,000 |
| Total shares traded (six months) | 246,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €12.3 million.', 'Total shares traded over six months exceed 17.4% of shares outstanding.', 'Peak monthly share turnover exceeds 61,411 shares.', 'The closing share price rose by more than 22.4% from first to last month.', 'Shares outstanding equal 855,000.'], ARRAY[true, true, true, false, true], ARRAY['TRUE — Market capitalisation ≈ €16.2 million.', 'TRUE — Turnover ≈ 28.8% of shares outstanding.', 'TRUE — Peak monthly volume = 73,000.', 'FALSE — Price change ≈ -47.2%.', 'TRUE — Shares outstanding = 855,000.'], '5/5', 116, 'full' ),
( '6.2', 'CASE 6.2.117', 'Share Price and Market Capitalisation 117', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=27
February | Price=30
March | Price=34
April | Price=36
May | Price=38
June | Price=38
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=30000
February | Volume=55000
March | Volume=75000
April | Volume=86000
May | Volume=94000
June | Volume=20000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 27 | 30,000 |
| February | 30 | 55,000 |
| March | 34 | 75,000 |
| April | 36 | 86,000 |
| May | 38 | 94,000 |
| June | 38 | 20,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 295 |
| Shares outstanding | 801,000 |
| Total shares traded (six months) | 360,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 27.7% from first to last month.', 'Peak monthly share turnover exceeds 96,071 shares.', 'Operating result is below €242 thousand.', 'Earnings per share is exactly €0.26.', 'Market capitalisation at the last month exceeds €26.8 million.'], ARRAY[true, false, false, false, true], ARRAY['TRUE — Price change ≈ 40.7%.', 'FALSE — Peak monthly volume = 94,000.', 'FALSE — Operating result = 295.', 'FALSE — Earnings per share ≈ €0.37.', 'TRUE — Market capitalisation ≈ €30.4 million.'], '5/5', 117, 'full' ),
( '6.2', 'CASE 6.2.118', 'Listed Company Performance Charts 118', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=40
February | Price=44
March | Price=46
April | Price=47
May | Price=47
June | Price=50
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=49000
February | Volume=69000
March | Volume=51000
April | Volume=34000
May | Volume=33000
June | Volume=89000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 40 | 49,000 |
| February | 44 | 69,000 |
| March | 46 | 51,000 |
| April | 47 | 34,000 |
| May | 47 | 33,000 |
| June | 50 | 89,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 242 |
| Shares outstanding | 684,000 |
| Total shares traded (six months) | 325,000 |

Evaluate the following economic assertions:', ARRAY['Highest closing price is more than 34.5% above the lowest.', 'The closing share price rose by more than 14.1% from first to last month.', 'Market capitalisation at the last month exceeds €25.7 million.', 'Market capitalisation rose by more than 18.7% over the period.', 'Total shares traded over six months exceed 13.7% of shares outstanding.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — Range €40–€50.', 'TRUE — Price change ≈ 25.0%.', 'TRUE — Market capitalisation ≈ €34.2 million.', 'TRUE — €27.4m → €34.2m.', 'TRUE — Turnover ≈ 47.5% of shares outstanding.'], '4/5', 118, 'full' ),
( '6.2', 'CASE 6.2.119', 'Depreciation Charge Consistency', 'Analyze why a business purchasing new equipment often shows a negative investing cash flow in that year. Evaluate the following economic assertions:', ARRAY['When a brewery repays part of a long-term bank loan, that cash outflow belongs in cash flow from financing activities.', 'When a hotel chain collects payment from a customer who owed money on an overdue invoice, the resulting cash inflow belongs in cash flow from financing activities.', 'When a garage purchases new diagnostic equipment for use in the business, the resulting cash outflow belongs in cash flow from operating activities.', 'When a textile mill purchases new spinning machinery for use in the business, the resulting cash outflow belongs in cash flow from investing activities.', 'The balance sheet of a courier firm shows its assets, equity and liabilities on one specific date, while its statement of profit and loss reports the revenue earned and costs incurred across the whole accounting period.'], ARRAY[true, false, false, true, true], ARRAY['TRUE — Repaying borrowed funds relates to how the business is financed, so it is classified as a financing cash flow.', 'FALSE — Collecting money from a customer relates to core trading, so it belongs in the operating section, not the financing section.', 'FALSE — Buying long-term assets such as diagnostic equipment is an investing decision, so the outflow belongs in the investing section, not the operating section.', 'TRUE — Buying long-term assets such as spinning machinery is an investing decision, so the outflow is classified as an investing cash flow.', 'TRUE — The balance sheet is a snapshot at a single date; the statement of profit and loss instead summarises revenue and costs across a period.'], '5/5', 119, 'full' ),
( '6.2', 'CASE 6.2.120', 'Share Price and Market Capitalisation 120', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=35
February | Price=35
March | Price=33
April | Price=31
May | Price=28
June | Price=27
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=23000
February | Volume=51000
March | Volume=56000
April | Volume=63000
May | Volume=52000
June | Volume=59000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 35 | 23,000 |
| February | 35 | 51,000 |
| March | 33 | 56,000 |
| April | 31 | 63,000 |
| May | 28 | 52,000 |
| June | 27 | 59,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 212 |
| Shares outstanding | 818,000 |
| Total shares traded (six months) | 304,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 16.4% from first to last month.', 'Market capitalisation at the last month exceeds €20.8 million.', 'Market capitalisation rose by more than 28.8% over the period.', 'Earnings per share is exactly €0.18.', 'Earnings per share exceeds €0.2.'], ARRAY[false, true, false, false, true], ARRAY['FALSE — Price change ≈ -22.9%.', 'TRUE — Market capitalisation ≈ €22.1 million.', 'FALSE — €28.6m → €22.1m.', 'FALSE — Earnings per share ≈ €0.26.', 'TRUE — Earnings per share ≈ €0.26.'], '5/5', 120, 'full' ),
( '6.2', 'CASE 6.2.121', 'Financial Statement Structure Overview', 'Review why a business''s reported profit for the year is not the same thing as the cash it generated during the year. Evaluate the following economic assertions:', ARRAY['When a furniture maker collects payment from a customer who owed money on an overdue invoice, the resulting cash inflow belongs in cash flow from financing activities.', 'The balance sheet of a construction firm shows its assets, equity and liabilities on one specific date, while its statement of profit and loss reports the revenue earned and costs incurred across the whole accounting period.', 'When a brewery makes a loss for the year, that loss is deducted from retained earnings and therefore reduces the equity shown on its balance sheet.', 'When a textile mill earns a profit for the year, that profit is added to retained earnings and therefore increases the equity shown on its balance sheet.', 'Land owned by a construction firm is normally left out of the depreciation schedule because, unlike its heavy construction machinery, land does not wear out through ordinary use.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — Collecting money from a customer relates to core trading, so it belongs in the operating section, not the financing section.', 'TRUE — The balance sheet is a snapshot at a single date; the statement of profit and loss instead summarises revenue and costs across a period.', 'TRUE — A loss for the year lowers retained earnings, which in turn reduces total equity.', 'TRUE — Profit for the year raises retained earnings, which in turn increases total equity.', 'TRUE — Land generally has an unlimited useful life and is not used up the way equipment is, so it is typically excluded from depreciation.'], '5/5', 121, 'full' ),
( '6.2', 'CASE 6.2.122', 'Balance Sheet Versus Income Statement', 'Consider the following cash flow statement extract (€) for a catering company.

| Item | Amount |
| --- | ---: |
| Cash flow from operating activities | 98000 |
| Cash flow from investing activities | (9000) |
| Cash flow from financing activities | (12300) |
| Net change in cash and cash equivalents | **76700** |

Evaluate the following economic assertions:', ARRAY['Treating the investing line as an addition, total cash would change by 94,700 euros on extract 46.', 'The operating figure alone of 98,000 euros is already the full net change on extract 46.', 'The investing line on extract 46 reports cash received of 9,000 euros.', 'On extract 46, cash and cash equivalents change by 76,700 euros in total.', 'Financing activities add 12,300 euros to cash on extract 46.'], ARRAY[false, false, false, true, false], ARRAY['FALSE — Investing must be subtracted; correct net change is 76,700 euros.', 'FALSE — That ignores investing and financing; correct net is 76,700 euros.', 'FALSE — Investing is an outflow of 9,000 euros.', 'TRUE — Operating 98000 − investing 9000 − financing 12300 = 76700.', 'FALSE — Financing is an outflow of 12,300 euros, not an inflow.'], '5/5', 122, 'full' ),
( '6.2', 'CASE 6.2.123', 'Cash Flow Statement Purpose', 'Consider an arable farm that owns land alongside a tractor and is reviewing how each asset is treated for depreciation purposes. Evaluate the following economic assertions:', ARRAY['When a logistics company collects payment from a customer who owed money on an overdue invoice, the resulting cash inflow belongs in cash flow from financing activities.', 'Land owned by a software developer is normally left out of the depreciation schedule because, unlike its office computer equipment, land does not wear out through ordinary use.', 'The depreciation that a garage charges on its diagnostic equipment each year is a non-cash expense, since the related cash was already paid out when the diagnostic equipment was originally purchased.', 'When a dairy processor repays part of a long-term bank loan, that cash outflow belongs in cash flow from operating activities.', 'Straight-line annual depreciation on diagnostic equipment bought by a garage is 10,125 euros when cost, residual value and useful life are applied correctly.'], ARRAY[false, true, true, false, true], ARRAY['FALSE — Collecting money from a customer relates to core trading, so it belongs in the operating section, not the financing section.', 'TRUE — Land generally has an unlimited useful life and is not used up the way equipment is, so it is typically excluded from depreciation.', 'TRUE — Depreciation spreads a past cash cost over time; it does not itself require a new cash payment.', 'FALSE — Loan repayments relate to how the business is financed, so they belong in the financing section, not the operating section.', 'TRUE — That is the correct annual straight-line charge for this diagnostic equipment.'], '5/5', 123, 'full' ),
( '6.2', 'CASE 6.2.124', 'Trade Receivable Cash Classification', 'Review how the statement of profit and loss reports revenues, costs and the resulting profit or loss over an accounting period. Evaluate the following economic assertions:', ARRAY['Straight-line annual depreciation on catering vans bought by a catering company is 22,820 euros when cost, residual value and useful life are applied correctly.', 'When a printing company collects payment from a customer who owed money on an overdue invoice, the resulting cash inflow belongs in cash flow from operating activities.', 'When a arable farm repays part of a long-term bank loan, that cash outflow belongs in cash flow from financing activities.', 'When a pharmacy chain purchases new dispensing equipment for use in the business, the resulting cash outflow belongs in cash flow from operating activities.', 'The balance sheet of a bakery reports the revenue earned and costs incurred across the whole accounting period, while its statement of profit and loss shows assets, equity and liabilities on one specific date.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — That is the correct annual straight-line charge for this catering vans.', 'TRUE — Collecting money owed by a customer relates to core trading activity, so it is classified as an operating cash flow.', 'TRUE — Repaying borrowed funds relates to how the business is financed, so it is classified as a financing cash flow.', 'FALSE — Buying long-term assets such as dispensing equipment is an investing decision, so the outflow belongs in the investing section, not the operating section.', 'FALSE — This reverses the two statements: the balance sheet is the point-in-time snapshot, and the statement of profit and loss covers the period.'], '5/5', 124, 'full' ),
( '6.2', 'CASE 6.2.125', 'Loan Repayment Cash Classification', 'Consider the following cash flow statement extract (€) for a bakery.

| Item | Amount |
| --- | ---: |
| Cash flow from operating activities | 102800 |
| Cash flow from investing activities | (14400) |
| Cash flow from financing activities | 16060 |
| Net change in cash and cash equivalents | **104460** |

Evaluate the following economic assertions:', ARRAY['Treating the investing line as an addition, total cash would change by 133,260 euros on extract 49.', 'On extract 49, cash and cash equivalents change by 104,460 euros in total.', 'Purchases recorded under investing total an outflow of 14,400 euros on extract 49.', 'The operating figure alone of 102,800 euros is already the full net change on extract 49.', 'Financing activities add 16,060 euros to cash on extract 49.'], ARRAY[false, true, true, false, true], ARRAY['FALSE — Investing must be subtracted; correct net change is 104,460 euros.', 'TRUE — Operating 102800 − investing 14400 + financing 16060 = 104460.', 'TRUE — The investing line is (14400).', 'FALSE — That ignores investing and financing; correct net is 104,460 euros.', 'TRUE — Financing is an inflow of 16,060 euros.'], '2/5', 125, 'full' ),
( '6.2', 'CASE 6.2.126', 'Combining Three Financial Statements', 'Review how a complete financial statement typically combines a balance sheet, a statement of profit and loss and a cash flow statement. Evaluate the following economic assertions:', ARRAY['When a restaurant chain earns a profit for the year, that profit is deducted from retained earnings and therefore reduces the equity shown on its balance sheet.', 'When a IT consultancy makes a loss for the year, that loss is added to retained earnings and therefore increases the equity shown on its balance sheet.', 'Land owned by a bakery is depreciated in exactly the same way as its commercial ovens, because all fixed assets wear out identically through use.', 'The depreciation that a brewery charges on its brewing tanks each year is a non-cash expense, since the related cash was already paid out when the brewing tanks was originally purchased.', 'The depreciation that a courier firm charges on its delivery vans each year is a cash expense that directly reduces its bank balance at the time it is recorded.'], ARRAY[false, false, false, true, false], ARRAY['FALSE — Profit adds to retained earnings and increases equity; it does not reduce it.', 'FALSE — A loss lowers retained earnings and reduces equity; it does not increase it.', 'FALSE — Land does not wear out through use the way equipment does, so it is normally excluded from depreciation.', 'TRUE — Depreciation spreads a past cash cost over time; it does not itself require a new cash payment.', 'FALSE — Depreciation does not itself cause a cash payment; the related cash was already paid when the delivery vans was purchased.'], '3/5', 126, 'full' ),
( '6.2', 'CASE 6.2.127', 'Listed Company Performance Charts 127', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=23
February | Price=25
March | Price=27
April | Price=27
May | Price=30
June | Price=31
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=77000
February | Volume=76000
March | Volume=93000
April | Volume=33000
May | Volume=79000
June | Volume=41000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 23 | 77,000 |
| February | 25 | 76,000 |
| March | 27 | 93,000 |
| April | 27 | 33,000 |
| May | 30 | 79,000 |
| June | 31 | 41,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 295 |
| Shares outstanding | 608,000 |
| Total shares traded (six months) | 399,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 30.4% from first to last month.', 'Market capitalisation at the last month exceeds €15.3 million.', 'Market capitalisation rose by more than 23.3% over the period.', 'Highest closing price is more than 14.9% above the lowest.', 'Total shares traded over six months exceed 37.6% of shares outstanding.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Price change ≈ 34.8%.', 'TRUE — Market capitalisation ≈ €18.8 million.', 'TRUE — €14.0m → €18.8m.', 'TRUE — Range €23–€31.', 'TRUE — Turnover ≈ 65.6% of shares outstanding.'], '3/5', 127, 'full' ),
( '6.2', 'CASE 6.2.128', 'Point-in-Time Versus Period Statements', 'Consider a pharmacy chain reviewing why its reported profit for the year does not match the change in its cash balance. Evaluate the following economic assertions:', ARRAY['Land owned by a construction firm is depreciated in exactly the same way as its heavy construction machinery, because all fixed assets wear out identically through use.', 'Land owned by a textile mill is normally left out of the depreciation schedule because, unlike its spinning machinery, land does not wear out through ordinary use.', 'The depreciation that a printing company charges on its printing press each year is a non-cash expense, since the related cash was already paid out when the printing press was originally purchased.', 'The balance sheet of a hotel chain shows its assets, equity and liabilities on one specific date, while its statement of profit and loss reports the revenue earned and costs incurred across the whole accounting period.', 'When a electronics retailer makes a loss for the year, that loss is deducted from retained earnings and therefore reduces the equity shown on its balance sheet.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — Land does not wear out through use the way equipment does, so it is normally excluded from depreciation.', 'TRUE — Land generally has an unlimited useful life and is not used up the way equipment is, so it is typically excluded from depreciation.', 'TRUE — Depreciation spreads a past cash cost over time; it does not itself require a new cash payment.', 'TRUE — The balance sheet is a snapshot at a single date; the statement of profit and loss instead summarises revenue and costs across a period.', 'TRUE — A loss for the year lowers retained earnings, which in turn reduces total equity.'], '3/5', 128, 'full' ),
( '6.2', 'CASE 6.2.129', 'Equity Movements From Profit', 'Consider the following cash flow statement extract (€) for a hotel chain.

| Item | Amount |
| --- | ---: |
| Cash flow from operating activities | 107600 |
| Cash flow from investing activities | (10800) |
| Cash flow from financing activities | (13380) |
| Net change in cash and cash equivalents | **83420** |

Evaluate the following economic assertions:', ARRAY['On extract 52, cash and cash equivalents change by 83,420 euros in total.', 'Purchases recorded under investing total an outflow of 10,800 euros on extract 52.', 'Treating the investing line as an addition, total cash would change by 105,020 euros on extract 52.', 'Financing activities remove 13,380 euros from cash on extract 52.', 'Operating cash of 107,600 euros more than covers the investing outflow of 10,800 euros on extract 52.'], ARRAY[true, true, false, true, true], ARRAY['TRUE — Operating 107600 − investing 10800 − financing 13380 = 83420.', 'TRUE — The investing line is (10800).', 'FALSE — Investing must be subtracted; correct net change is 83,420 euros.', 'TRUE — Financing is an outflow of 13,380 euros.', 'TRUE — Operating 107600 versus investing 10800.'], '4/5', 129, 'full' ),
( '6.2', 'CASE 6.2.130', 'Equity Movements From Loss', 'Analyze why failing to record depreciation would overstate the value of a fixed asset in the accounts. Evaluate the following economic assertions:', ARRAY['Land owned by a logistics company is normally left out of the depreciation schedule because, unlike its forklift trucks, land does not wear out through ordinary use.', 'Land owned by a software developer is depreciated in exactly the same way as its office computer equipment, because all fixed assets wear out identically through use.', 'The depreciation that a dairy processor charges on its refrigerated trucks each year is a non-cash expense, since the related cash was already paid out when the refrigerated trucks was originally purchased.', 'The depreciation that a garage charges on its diagnostic equipment each year is a cash expense that directly reduces its bank balance at the time it is recorded.', 'The balance sheet of a software developer shows its assets, equity and liabilities on one specific date, while its statement of profit and loss reports the revenue earned and costs incurred across the whole accounting period.'], ARRAY[true, false, true, false, true], ARRAY['TRUE — Land generally has an unlimited useful life and is not used up the way equipment is, so it is typically excluded from depreciation.', 'FALSE — Land does not wear out through use the way equipment does, so it is normally excluded from depreciation.', 'TRUE — Depreciation spreads a past cash cost over time; it does not itself require a new cash payment.', 'FALSE — Depreciation does not itself cause a cash payment; the related cash was already paid when the diagnostic equipment was purchased.', 'TRUE — The balance sheet is a snapshot at a single date; the statement of profit and loss instead summarises revenue and costs across a period.'], '2/5', 130, 'full' ),
( '6.2', 'CASE 6.2.131', 'Earnings Per Share From Reported Figures 131', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=25
February | Price=25
March | Price=26
April | Price=26
May | Price=25
June | Price=30
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=21000
February | Volume=38000
March | Volume=34000
April | Volume=60000
May | Volume=92000
June | Volume=39000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 25 | 21,000 |
| February | 25 | 38,000 |
| March | 26 | 34,000 |
| April | 26 | 60,000 |
| May | 25 | 92,000 |
| June | 30 | 39,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 287 |
| Shares outstanding | 532,000 |
| Total shares traded (six months) | 284,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 12.8% from first to last month.', 'Market capitalisation at the last month exceeds €12.9 million.', 'Market capitalisation rose by more than 34.5% over the period.', 'Earnings per share exceeds €0.5.', 'Total shares traded over six months exceed 32.9% of shares outstanding.'], ARRAY[true, true, false, true, true], ARRAY['TRUE — Price change ≈ 20.0%.', 'TRUE — Market capitalisation ≈ €16.0 million.', 'FALSE — €13.3m → €16.0m.', 'TRUE — Earnings per share ≈ €0.54.', 'TRUE — Turnover ≈ 53.4% of shares outstanding.'], '3/5', 131, 'full' ),
( '6.2', 'CASE 6.2.132', 'Share Price and Market Capitalisation 132', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=40
February | Price=44
March | Price=47
April | Price=48
May | Price=50
June | Price=54
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=49000
February | Volume=57000
March | Volume=68000
April | Volume=39000
May | Volume=29000
June | Volume=80000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 40 | 49,000 |
| February | 44 | 57,000 |
| March | 47 | 68,000 |
| April | 48 | 39,000 |
| May | 50 | 29,000 |
| June | 54 | 80,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 249 |
| Shares outstanding | 525,000 |
| Total shares traded (six months) | 322,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €26.9 million.', 'Market capitalisation rose by more than 21.2% over the period.', 'Highest closing price is more than 34% above the lowest.', 'Total shares traded over six months exceed 29.3% of shares outstanding.', 'Peak monthly share turnover exceeds 71,499 shares.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Market capitalisation ≈ €28.4 million.', 'TRUE — €21.0m → €28.4m.', 'TRUE — Range €40–€54.', 'TRUE — Turnover ≈ 61.3% of shares outstanding.', 'TRUE — Peak monthly volume = 80,000.'], '4/5', 132, 'full' ),
( '6.2', 'CASE 6.2.133', 'Depreciation Policy and Reported Profit', 'Review why depreciation is described as an expense that does not by itself cause a cash payment. Evaluate the following economic assertions:', ARRAY['The balance sheet of a garage shows its assets, equity and liabilities on one specific date, while its statement of profit and loss reports the revenue earned and costs incurred across the whole accounting period.', 'When a pharmacy chain earns a profit for the year, that profit is added to retained earnings and therefore increases the equity shown on its balance sheet.', 'When a fitness club chain makes a loss for the year, that loss is deducted from retained earnings and therefore reduces the equity shown on its balance sheet.', 'Land owned by a pharmacy chain is normally left out of the depreciation schedule because, unlike its dispensing equipment, land does not wear out through ordinary use.', 'The depreciation that a fitness club chain charges on its exercise equipment each year is a non-cash expense, since the related cash was already paid out when the exercise equipment was originally purchased.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — The balance sheet is a snapshot at a single date; the statement of profit and loss instead summarises revenue and costs across a period.', 'TRUE — Profit for the year raises retained earnings, which in turn increases total equity.', 'TRUE — A loss for the year lowers retained earnings, which in turn reduces total equity.', 'TRUE — Land generally has an unlimited useful life and is not used up the way equipment is, so it is typically excluded from depreciation.', 'TRUE — Depreciation spreads a past cash cost over time; it does not itself require a new cash payment.'], '5/5', 133, 'full' ),
( '6.2', 'CASE 6.2.134', 'Non-Cash Adjustments to Profit', 'Consider the following cash flow statement extract (€) for a furniture maker.

| Item | Amount |
| --- | ---: |
| Cash flow from operating activities | 112400 |
| Cash flow from investing activities | (16200) |
| Cash flow from financing activities | 17380 |
| Net change in cash and cash equivalents | **113580** |

Evaluate the following economic assertions:', ARRAY['Treating the investing line as an addition, total cash would change by 145,980 euros on extract 55.', 'On extract 55, cash and cash equivalents change by 113,580 euros in total.', 'The operating figure alone of 112,400 euros is already the full net change on extract 55.', 'Purchases recorded under investing total an outflow of 16,200 euros on extract 55.', 'Financing activities add 17,380 euros to cash on extract 55.'], ARRAY[false, true, false, true, true], ARRAY['FALSE — Investing must be subtracted; correct net change is 113,580 euros.', 'TRUE — Operating 112400 − investing 16200 + financing 17380 = 113580.', 'FALSE — That ignores investing and financing; correct net is 113,580 euros.', 'TRUE — The investing line is (16200).', 'TRUE — Financing is an inflow of 17,380 euros.'], '5/5', 134, 'full' ),
( '6.2', 'CASE 6.2.135', 'Share Price and Market Capitalisation 135', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=26
February | Price=27
March | Price=28
April | Price=28
May | Price=27
June | Price=33
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=50000
February | Volume=94000
March | Volume=27000
April | Volume=24000
May | Volume=45000
June | Volume=92000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 26 | 50,000 |
| February | 27 | 94,000 |
| March | 28 | 27,000 |
| April | 28 | 24,000 |
| May | 27 | 45,000 |
| June | 33 | 92,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 319 |
| Shares outstanding | 647,000 |
| Total shares traded (six months) | 332,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €19.5 million.', 'Market capitalisation rose by more than 14.9% over the period.', 'Earnings per share exceeds €0.4.', 'Highest closing price is more than 42% above the lowest.', 'Operating result is below €271 thousand.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Market capitalisation ≈ €21.4 million.', 'TRUE — €16.8m → €21.4m.', 'TRUE — Earnings per share ≈ €0.49.', 'FALSE — Range €26–€33.', 'FALSE — Operating result = 319.'], '4/5', 135, 'full' ),
( '6.2', 'CASE 6.2.136', 'Listed Company Performance Charts 136', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=29
February | Price=31
March | Price=33
April | Price=35
May | Price=36
June | Price=36
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=61000
February | Volume=86000
March | Volume=25000
April | Volume=66000
May | Volume=63000
June | Volume=94000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 29 | 61,000 |
| February | 31 | 86,000 |
| March | 33 | 25,000 |
| April | 35 | 66,000 |
| May | 36 | 63,000 |
| June | 36 | 94,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 312 |
| Shares outstanding | 688,000 |
| Total shares traded (six months) | 395,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 29.6% from first to last month.', 'Market capitalisation rose by more than 30.7% over the period.', 'Market capitalisation at the last month exceeds €20.7 million.', 'Highest closing price is more than 30.1% above the lowest.', 'Operating result is below €226 thousand.'], ARRAY[false, false, true, false, false], ARRAY['FALSE — Price change ≈ 24.1%.', 'FALSE — €20.0m → €24.8m.', 'TRUE — Market capitalisation ≈ €24.8 million.', 'FALSE — Range €29–€36.', 'FALSE — Operating result = 312.'], '5/5', 136, 'full' ),
( '6.2', 'CASE 6.2.137', 'Earnings Per Share From Reported Figures 137', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=33
February | Price=37
March | Price=38
April | Price=40
May | Price=43
June | Price=43
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=39000
February | Volume=95000
March | Volume=48000
April | Volume=92000
May | Volume=82000
June | Volume=30000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 33 | 39,000 |
| February | 37 | 95,000 |
| March | 38 | 48,000 |
| April | 40 | 92,000 |
| May | 43 | 82,000 |
| June | 43 | 30,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 318 |
| Shares outstanding | 782,000 |
| Total shares traded (six months) | 386,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €26.1 million.', 'The closing share price rose by more than 30.9% from first to last month.', 'Market capitalisation rose by more than 34.9% over the period.', 'Earnings per share exceeds €0.34.', 'Highest closing price is more than 19.5% above the lowest.'], ARRAY[true, false, false, true, true], ARRAY['TRUE — Market capitalisation ≈ €33.6 million.', 'FALSE — Price change ≈ 30.3%.', 'FALSE — €25.8m → €33.6m.', 'TRUE — Earnings per share ≈ €0.41.', 'TRUE — Range €33–€43.'], '5/5', 137, 'full' ),
( '6.2', 'CASE 6.2.138', 'Asset Purchase and Investing Outflows', 'Review how an asset''s carrying value changes over time once straight-line depreciation is applied. Evaluate the following economic assertions:', ARRAY['The balance sheet of a brewery shows its assets, equity and liabilities on one specific date, while its statement of profit and loss reports the revenue earned and costs incurred across the whole accounting period.', 'When a restaurant chain earns a profit for the year, that profit is added to retained earnings and therefore increases the equity shown on its balance sheet.', 'When a IT consultancy makes a loss for the year, that loss is deducted from retained earnings and therefore reduces the equity shown on its balance sheet.', 'Land owned by a publishing house is normally left out of the depreciation schedule because, unlike its binding machines, land does not wear out through ordinary use.', 'Land owned by a textile mill is depreciated in exactly the same way as its spinning machinery, because all fixed assets wear out identically through use.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — The balance sheet is a snapshot at a single date; the statement of profit and loss instead summarises revenue and costs across a period.', 'TRUE — Profit for the year raises retained earnings, which in turn increases total equity.', 'TRUE — A loss for the year lowers retained earnings, which in turn reduces total equity.', 'TRUE — Land generally has an unlimited useful life and is not used up the way equipment is, so it is typically excluded from depreciation.', 'FALSE — Land does not wear out through use the way equipment does, so it is normally excluded from depreciation.'], '2/5', 138, 'full' ),
( '6.2', 'CASE 6.2.139', 'Loan Financing and Cash Outflows', 'Analyze why land is generally treated differently from buildings, machinery and vehicles when it comes to depreciation. Evaluate the following economic assertions:', ARRAY['The depreciation that a printing company charges on its printing press each year is a cash expense that directly reduces its bank balance at the time it is recorded.', 'Land owned by a arable farm is depreciated in exactly the same way as its tractor, because all fixed assets wear out identically through use.', 'When a software developer repays part of a long-term bank loan, that cash outflow belongs in cash flow from operating activities.', 'When a fitness club chain collects payment from a customer who owed money on an overdue invoice, the resulting cash inflow belongs in cash flow from financing activities.', 'The depreciation that a car parts manufacturer charges on its stamping presses each year is a non-cash expense, since the related cash was already paid out when the stamping presses was originally purchased.'], ARRAY[false, false, false, false, true], ARRAY['FALSE — Depreciation does not itself cause a cash payment; the related cash was already paid when the printing press was purchased.', 'FALSE — Land does not wear out through use the way equipment does, so it is normally excluded from depreciation.', 'FALSE — Loan repayments relate to how the business is financed, so they belong in the financing section, not the operating section.', 'FALSE — Collecting money from a customer relates to core trading, so it belongs in the operating section, not the financing section.', 'TRUE — Depreciation spreads a past cash cost over time; it does not itself require a new cash payment.'], '5/5', 139, 'full' ),
( '6.2', 'CASE 6.2.140', 'Earnings Per Share From Reported Figures 140', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=20
February | Price=19
March | Price=18
April | Price=17
May | Price=15
June | Price=14
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=19000
February | Volume=64000
March | Volume=82000
April | Volume=61000
May | Volume=49000
June | Volume=65000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 20 | 19,000 |
| February | 19 | 64,000 |
| March | 18 | 82,000 |
| April | 17 | 61,000 |
| May | 15 | 49,000 |
| June | 14 | 65,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 250 |
| Shares outstanding | 766,000 |
| Total shares traded (six months) | 340,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 33.1% from first to last month.', 'Market capitalisation rose by more than 11.2% over the period.', 'Market capitalisation at the last month exceeds €9.3 million.', 'Operating result is below €244 thousand.', 'Total shares traded over six months exceed 18.7% of shares outstanding.'], ARRAY[false, false, true, false, true], ARRAY['FALSE — Price change ≈ -30.0%.', 'FALSE — €15.3m → €10.7m.', 'TRUE — Market capitalisation ≈ €10.7 million.', 'FALSE — Operating result = 250.', 'TRUE — Turnover ≈ 44.4% of shares outstanding.'], '2/5', 140, 'full' ),
( '6.2', 'CASE 6.2.141', 'Share Price and Market Capitalisation 141', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=34
February | Price=34
March | Price=34
April | Price=34
May | Price=35
June | Price=43
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=32000
February | Volume=63000
March | Volume=39000
April | Volume=44000
May | Volume=39000
June | Volume=84000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 34 | 32,000 |
| February | 34 | 63,000 |
| March | 34 | 39,000 |
| April | 34 | 44,000 |
| May | 35 | 39,000 |
| June | 43 | 84,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 301 |
| Shares outstanding | 890,000 |
| Total shares traded (six months) | 301,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 15.5% from first to last month.', 'Market capitalisation at the last month exceeds €32 million.', 'Market capitalisation rose by more than 13.9% over the period.', 'Highest closing price is more than 14.5% above the lowest.', 'Peak monthly share turnover exceeds 80,218 shares.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Price change ≈ 26.5%.', 'TRUE — Market capitalisation ≈ €38.3 million.', 'TRUE — €30.3m → €38.3m.', 'TRUE — Range €34–€43.', 'TRUE — Peak monthly volume = 84,000.'], '4/5', 141, 'full' ),
( '6.2', 'CASE 6.2.142', 'Listed Company Performance Charts 142', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=23
February | Price=20
March | Price=18
April | Price=17
May | Price=15
June | Price=14
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=68000
February | Volume=95000
March | Volume=37000
April | Volume=29000
May | Volume=62000
June | Volume=45000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 23 | 68,000 |
| February | 20 | 95,000 |
| March | 18 | 37,000 |
| April | 17 | 29,000 |
| May | 15 | 62,000 |
| June | 14 | 45,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 279 |
| Shares outstanding | 843,000 |
| Total shares traded (six months) | 336,000 |

Evaluate the following economic assertions:', ARRAY['Highest closing price is more than 30.3% above the lowest.', 'Total shares traded over six months exceed 11.8% of shares outstanding.', 'The closing share price rose by more than 11.7% from first to last month.', 'Market capitalisation rose by more than 19.1% over the period.', 'Operating result is below €193 thousand.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Range €14–€23.', 'TRUE — Turnover ≈ 39.9% of shares outstanding.', 'FALSE — Price change ≈ -39.1%.', 'FALSE — €19.4m → €11.8m.', 'FALSE — Operating result = 279.'], '5/5', 142, 'full' ),
( '6.2', 'CASE 6.2.143', 'Earnings Per Share From Reported Figures 143', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=32
February | Price=30
March | Price=28
April | Price=24
May | Price=19
June | Price=16
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=83000
February | Volume=26000
March | Volume=95000
April | Volume=90000
May | Volume=27000
June | Volume=72000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 32 | 83,000 |
| February | 30 | 26,000 |
| March | 28 | 95,000 |
| April | 24 | 90,000 |
| May | 19 | 27,000 |
| June | 16 | 72,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 216 |
| Shares outstanding | 451,000 |
| Total shares traded (six months) | 393,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €5.8 million.', 'Highest closing price is more than 33.1% above the lowest.', 'Total shares traded over six months exceed 22.7% of shares outstanding.', 'Peak monthly share turnover exceeds 73,341 shares.', 'Shares outstanding equal 451,000.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Market capitalisation ≈ €7.2 million.', 'TRUE — Range €16–€32.', 'TRUE — Turnover ≈ 87.1% of shares outstanding.', 'TRUE — Peak monthly volume = 95,000.', 'TRUE — Shares outstanding = 451,000.'], '3/5', 143, 'full' ),
( '6.2', 'CASE 6.2.144', 'Straight-Line Charges Across Useful Life', 'Consider the following cash flow statement extract (€) for a printing company.

| Item | Amount |
| --- | ---: |
| Cash flow from operating activities | 117200 |
| Cash flow from investing activities | (12600) |
| Cash flow from financing activities | (14460) |
| Net change in cash and cash equivalents | **90140** |

Evaluate the following economic assertions:', ARRAY['On extract 58, cash and cash equivalents change by 90,140 euros in total.', 'Treating the investing line as an addition, total cash would change by 115,340 euros on extract 58.', 'Purchases recorded under investing total an outflow of 12,600 euros on extract 58.', 'Financing activities remove 14,460 euros from cash on extract 58.', 'Operating cash of 117,200 euros more than covers the investing outflow of 12,600 euros on extract 58.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — Operating 117200 − investing 12600 − financing 14460 = 90140.', 'FALSE — Investing must be subtracted; correct net change is 90,140 euros.', 'TRUE — The investing line is (12600).', 'TRUE — Financing is an outflow of 14,460 euros.', 'TRUE — Operating 117200 versus investing 12600.'], '2/5', 144, 'full' ),
( '6.2', 'CASE 6.2.145', 'Land Excluded From Depreciation', 'Consider a software developer that reported a healthy profit for the year but noticed its cash and cash equivalents had fallen. Evaluate the following economic assertions:', ARRAY['When a car parts manufacturer makes a loss for the year, that loss is deducted from retained earnings and therefore reduces the equity shown on its balance sheet.', 'When a packaging manufacturer earns a profit for the year, that profit is added to retained earnings and therefore increases the equity shown on its balance sheet.', 'Land owned by a recycling firm is normally left out of the depreciation schedule because, unlike its sorting machinery, land does not wear out through ordinary use.', 'The depreciation that a ceramics workshop charges on its kiln equipment each year is a non-cash expense, since the related cash was already paid out when the kiln equipment was originally purchased.', 'The balance sheet of a printing company shows its assets, equity and liabilities on one specific date, while its statement of profit and loss reports the revenue earned and costs incurred across the whole accounting period.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — A loss for the year lowers retained earnings, which in turn reduces total equity.', 'TRUE — Profit for the year raises retained earnings, which in turn increases total equity.', 'TRUE — Land generally has an unlimited useful life and is not used up the way equipment is, so it is typically excluded from depreciation.', 'TRUE — Depreciation spreads a past cash cost over time; it does not itself require a new cash payment.', 'TRUE — The balance sheet is a snapshot at a single date; the statement of profit and loss instead summarises revenue and costs across a period.'], '5/5', 145, 'full' ),
( '6.2', 'CASE 6.2.146', 'Earnings Per Share From Reported Figures 146', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=25
February | Price=26
March | Price=25
April | Price=25
May | Price=23
June | Price=29
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=46000
February | Volume=61000
March | Volume=42000
April | Volume=27000
May | Volume=57000
June | Volume=91000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 25 | 46,000 |
| February | 26 | 61,000 |
| March | 25 | 42,000 |
| April | 25 | 27,000 |
| May | 23 | 57,000 |
| June | 29 | 91,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 263 |
| Shares outstanding | 863,000 |
| Total shares traded (six months) | 324,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 21.6% from first to last month.', 'Market capitalisation rose by more than 16.6% over the period.', 'Market capitalisation at the last month exceeds €22.2 million.', 'Total shares traded over six months exceed 15.3% of shares outstanding.', 'Shares outstanding equal 863,000.'], ARRAY[false, false, true, true, true], ARRAY['FALSE — Price change ≈ 16.0%.', 'FALSE — €21.6m → €25.0m.', 'TRUE — Market capitalisation ≈ €25.0 million.', 'TRUE — Turnover ≈ 37.5% of shares outstanding.', 'TRUE — Shares outstanding = 863,000.'], '5/5', 146, 'full' ),
( '6.2', 'CASE 6.2.147', 'Share Price and Market Capitalisation 147', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=31
February | Price=32
March | Price=33
April | Price=35
May | Price=36
June | Price=39
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=78000
February | Volume=53000
March | Volume=87000
April | Volume=60000
May | Volume=62000
June | Volume=76000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 31 | 78,000 |
| February | 32 | 53,000 |
| March | 33 | 87,000 |
| April | 35 | 60,000 |
| May | 36 | 62,000 |
| June | 39 | 76,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 220 |
| Shares outstanding | 889,000 |
| Total shares traded (six months) | 416,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 8.6% from first to last month.', 'Market capitalisation at the last month exceeds €26.7 million.', 'Market capitalisation rose by more than 18.3% over the period.', 'Earnings per share exceeds €0.18.', 'Total shares traded over six months exceed 18.1% of shares outstanding.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Price change ≈ 25.8%.', 'TRUE — Market capitalisation ≈ €34.7 million.', 'TRUE — €27.6m → €34.7m.', 'TRUE — Earnings per share ≈ €0.25.', 'TRUE — Turnover ≈ 46.8% of shares outstanding.'], '5/5', 147, 'full' ),
( '6.2', 'CASE 6.2.148', 'Listed Company Performance Charts 148', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=34
February | Price=33
March | Price=33
April | Price=31
May | Price=31
June | Price=36
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=65000
February | Volume=52000
March | Volume=33000
April | Volume=34000
May | Volume=89000
June | Volume=78000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 34 | 65,000 |
| February | 33 | 52,000 |
| March | 33 | 33,000 |
| April | 31 | 34,000 |
| May | 31 | 89,000 |
| June | 36 | 78,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 307 |
| Shares outstanding | 602,000 |
| Total shares traded (six months) | 351,000 |

Evaluate the following economic assertions:', ARRAY['Total shares traded over six months exceed 23.1% of shares outstanding.', 'Market capitalisation rose by more than 9.8% over the period.', 'Highest closing price is more than 20.1% above the lowest.', 'Peak monthly share turnover exceeds 58,256 shares.', 'Operating result is below €225 thousand.'], ARRAY[true, false, false, true, false], ARRAY['TRUE — Turnover ≈ 58.3% of shares outstanding.', 'FALSE — €20.5m → €21.7m.', 'FALSE — Range €31–€36.', 'TRUE — Peak monthly volume = 89,000.', 'FALSE — Operating result = 307.'], '4/5', 148, 'full' ),
( '6.2', 'CASE 6.2.149', 'Earnings Per Share From Reported Figures 149', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=20
February | Price=20
March | Price=19
April | Price=19
May | Price=18
June | Price=23
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=43000
February | Volume=18000
March | Volume=29000
April | Volume=52000
May | Volume=73000
June | Volume=32000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 20 | 43,000 |
| February | 20 | 18,000 |
| March | 19 | 29,000 |
| April | 19 | 52,000 |
| May | 18 | 73,000 |
| June | 23 | 32,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 264 |
| Shares outstanding | 776,000 |
| Total shares traded (six months) | 247,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 11% from first to last month.', 'Total shares traded over six months exceed 33.9% of shares outstanding.', 'Operating result is below €246 thousand.', 'Earnings per share is exactly €0.31.', 'Market capitalisation at the last month exceeds €16.9 million.'], ARRAY[true, false, false, false, true], ARRAY['TRUE — Price change ≈ 15.0%.', 'FALSE — Turnover ≈ 31.8% of shares outstanding.', 'FALSE — Operating result = 264.', 'FALSE — Earnings per share ≈ €0.34.', 'TRUE — Market capitalisation ≈ €17.8 million.'], '4/5', 149, 'full' ),
( '6.2', 'CASE 6.2.150', 'Profit Reported Versus Cash Generated', 'Review why profit for the year and the change in cash and cash equivalents are not usually the same figure. Evaluate the following economic assertions:', ARRAY['The balance sheet of a arable farm shows its assets, equity and liabilities on one specific date, while its statement of profit and loss reports the revenue earned and costs incurred across the whole accounting period.', 'When a catering company makes a loss for the year, that loss is deducted from retained earnings and therefore reduces the equity shown on its balance sheet.', 'When a IT consultancy purchases new laptop computers for use in the business, the resulting cash outflow belongs in cash flow from operating activities.', 'When a publishing house collects payment from a customer who owed money on an overdue invoice, the resulting cash inflow belongs in cash flow from financing activities.', 'When a car parts manufacturer repays part of a long-term bank loan, that cash outflow belongs in cash flow from operating activities.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — The balance sheet is a snapshot at a single date; the statement of profit and loss instead summarises revenue and costs across a period.', 'TRUE — A loss for the year lowers retained earnings, which in turn reduces total equity.', 'FALSE — Buying long-term assets such as laptop computers is an investing decision, so the outflow belongs in the investing section, not the operating section.', 'FALSE — Collecting money from a customer relates to core trading, so it belongs in the operating section, not the financing section.', 'FALSE — Loan repayments relate to how the business is financed, so they belong in the financing section, not the operating section.'], '5/5', 150, 'full' ),
( '6.3', 'CASE 6.3.001', 'Reading Financial Statements With Caution in Practice', 'Analyze why a business''s balance sheet and income statement for a single year should be read cautiously rather than taken at face value. Evaluate the following economic assertions:', ARRAY['A business''s balance sheet and income statement for a single year should be read cautiously, since one year''s figures alone can create a misleading impression of overall performance.', 'Because a balance sheet and income statement summarise a whole year of trading into a limited set of totals, important detail can be lost and should be sought elsewhere before conclusions are drawn.', 'An improvement in profit for the year need not reflect stronger underlying trading, since it could instead result from a one-off event that will not repeat.', 'Reading the explanatory notes that accompany a balance sheet and income statement can clarify movements that the main statements alone leave unexplained.', 'A business''s balance sheet and income statement for a single year can always be trusted on their own, since one year''s figures alone give a complete impression of overall performance.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — One year''s figures alone can mislead, so cautious reading is required before drawing conclusions.', 'TRUE — Summarising a year''s trading into totals can hide detail that matters for a fair conclusion.', 'TRUE — A profit improvement can come from a non-recurring event rather than better ongoing trading.', 'TRUE — Explanatory notes often clarify what the main financial statements alone cannot fully explain.', 'FALSE — One year''s figures alone can mislead; caution and wider context are needed before drawing conclusions.'], '2/5', 1, 'full' ),
( '6.3', 'CASE 6.3.002', 'Reading Financial Statements With Caution Explained', 'Analyze how comparing several years of financial statements reveals trends that one year''s figures cannot show alone. Evaluate the following economic assertions:', ARRAY['A cautious reader treats any single figure drawn from the financial statements as a starting point for further inquiry rather than as a final conclusion in itself.', 'Placing several years of a business''s balance sheets and income statements side by side reveals directional trends that cannot be seen from any single year.', 'Following revenue, cost of sales and profit for the year across several reporting periods helps show the direction in which a business''s performance is heading.', 'Comparing successive balance sheets shows whether a business''s asset base and its sources of finance are expanding, contracting or holding steady over time.', 'Because a balance sheet and income statement summarise a whole year of trading into a limited set of totals, no detail is ever lost and nothing further needs to be sought.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — A single figure should prompt further inquiry rather than serve as a final conclusion.', 'TRUE — Multi-year comparison reveals trends invisible within any one year''s figures alone.', 'TRUE — Multi-period tracking of key results shows the direction of a business''s performance.', 'TRUE — Successive balance sheet comparison shows whether assets and financing are expanding, contracting or stable.', 'FALSE — Summarising into totals can hide detail, so additional information is often still needed.'], '2/5', 2, 'full' ),
( '6.3', 'CASE 6.3.003', 'Return and Cash Flow Extract 3', 'Consider the following combined extracts (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=461
Machinery=162
Inventory=223
Trade receivables=113
Cash and cash equivalents=119
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 461 |
| Machinery | 162 |
| Office equipment | 73 |
| Patents, trademarks and licences | 84 |
| Inventory | 223 |
| Trade receivables | 113 |
| Cash and cash equivalents | 119 |
| Total assets | **1235** |
| **EQUITY** | |
| Share capital | 166 |
| Retained earnings | 570 |
| Total equity | **736** |
| **LIABILITIES** | |
| Long-term bank loan | 227 |
| Bonds payable | 79 |
| Trade payables | 145 |
| Bank overdraft | 48 |
| Total liabilities | **499** |
| Total equity and liabilities | **1235** |

| Income statement extract (€ thousands) | Amount |
| --- | ---: |
| Operating result | 192 |

| Cash flow statement extract (€ thousands) | Amount |
| --- | ---: |
| Cash flow from operating activities | 176 |
| Cash flow from investing activities | (267) |
| Cash flow from financing activities | 61 |
| Cash and cash equivalents at the beginning of the year | 149 |

Evaluate the following economic assertions:', ARRAY['Return on equity, the operating result taken as a percentage of total equity, exceeds 35.1%.', 'Cash flow from operating activities amounts to less than 77% of the operating result, indicating profit is only partly backed by cash.', 'Cash flow from operating activities amounts to more than 99.7% of the operating result.', 'With cash flow from operating activities of €176 thousand, cash flow from investing activities was an inflow this year.', 'Return on capital employed, the operating result taken relative to equity plus non-current liabilities, exceeds 15.5%.'], ARRAY[false, false, false, false, true], ARRAY['FALSE — Return on equity ≈ 26.1%.', 'FALSE — Cash conversion ≈ 91.7% of the operating result.', 'FALSE — Cash conversion ≈ 91.7% of the operating result.', 'FALSE — Investing cash flow = -267.', 'TRUE — Return on capital employed ≈ 18.4%.'], '5/5', 3, 'full' ),
( '6.3', 'CASE 6.3.004', 'Reading Financial Statements With Caution for Analysts', 'Consider a ceramics manufacturer whose analysts are benchmarking its financial statements against those of competing firms in the same region. Evaluate the following economic assertions:', ARRAY['Looking at several consecutive years of results makes it easier to tell whether an unusual figure was a temporary blip or the start of a lasting change.', 'A trend that persists across three or more reporting periods carries more weight than a single period''s outcome when judging a business''s direction of travel.', 'Judging whether a business''s results are strong or weak is more reliable when its figures are set alongside those of comparable businesses in the same industry.', 'A profit margin that appears strong when viewed in isolation may turn out to be unremarkable once measured against the margins earned by similar businesses.', 'Sector-wide benchmarks help determine whether an individual business''s asset structure or profitability is ordinary for its industry or genuinely stands out.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Several consecutive years help distinguish a temporary blip from a lasting change.', 'TRUE — A trend persisting across several periods is more meaningful than one period''s outcome alone.', 'TRUE — Comparable industry figures provide the benchmark for judging whether results are strong or weak.', 'TRUE — An apparently strong margin can look unremarkable once benchmarked against similar businesses.', 'TRUE — Sector benchmarks reveal whether a business''s results are ordinary or exceptional for its industry.'], '4/5', 4, 'full' ),
( '6.3', 'CASE 6.3.005', 'Revenue and Operating Result Chart 5', 'Consider the following two-year statement of profit and loss (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Revenue and operating result"]]
Year 1 | Revenue=794 | Operating result=244
Year 2 | Revenue=968 | Operating result=293
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Revenue | 794 | 968 |
| Cost of sales | (476) | (580) |
| Gross profit | 318 | 388 |
| Distribution costs | (39) | (50) |
| General and administrative costs | (37) | (45) |
| Other operating result | 2 | 0 |
| Operating result | 244 | 293 |
| Finance costs | (21) | (23) |
| Finance costs – net | (14) | (21) |
| Profit before tax | 230 | 272 |
| Income taxes | (57) | (66) |
| Profit for the year | 173 | 206 |

Evaluate the following economic assertions:', ARRAY['The gross profit margin, gross profit taken as a share of revenue, is more than 4.6 percentage points higher in Year 2 than in Year 1.', 'Revenue grew by more than 10% between Year 1 and Year 2.', 'The operating result grew by more than 39.7% between Year 1 and Year 2.', 'Finance costs grew by more than 43.6% between Year 1 and Year 2, outpacing the growth in the operating result.', 'The operating result covers finance costs less than 12.48 times over in Year 2.'], ARRAY[false, true, false, false, false], ARRAY['FALSE — Gross margins were 40.1% then 40.1%.', 'TRUE — Revenue changed by about 21.9% between the two years.', 'FALSE — The operating result changed by about 20.1% between the two years.', 'FALSE — Finance costs moved from 21 to 23; operating result moved from 244 to 293.', 'FALSE — Interest coverage in Year 2 ≈ 12.7 times.'], '3/5', 5, 'full' ),
( '6.3', 'CASE 6.3.006', 'Reading Financial Statements With Caution Over Time', 'Analyze how the balance between current and non-current assets signals how capital-intensive a business is. Evaluate the following economic assertions:', ARRAY['Comparing a business''s statements with those of its direct competitors can reveal whether a change in results reflects conditions across the whole industry or is specific to that one business.', 'An improvement in profit for the year always reflects stronger underlying trading, since one-off events never affect the reported profit figure.', 'Reading the explanatory notes that accompany a balance sheet and income statement never adds anything beyond what the main statements alone already show.', 'Without a suitable point of comparison, a reader has no reliable way of judging whether a given profit margin counts as good or poor performance.', 'The relative weight of non-current assets against current assets on a business''s balance sheet gives an indication of how capital-intensive its operations are.'], ARRAY[true, false, false, true, true], ARRAY['TRUE — Competitor comparison distinguishes industry-wide changes from company-specific ones.', 'FALSE — One-off events can and do affect reported profit, so an improvement need not reflect better trading.', 'FALSE — Explanatory notes frequently add clarification that the main statements alone do not provide.', 'TRUE — Without a comparison point, judging whether a margin is good or poor is unreliable.', 'TRUE — The non-current versus current asset balance indicates the capital intensity of operations.'], '5/5', 6, 'full' ),
( '6.3', 'CASE 6.3.007', 'Reading Financial Statements With Caution in Context', 'Analyze how the split between retained earnings and new share capital reveals the source of a business''s equity growth. Evaluate the following economic assertions:', ARRAY['A business holding a larger share of its resources in current assets typically has more of its wealth available for conversion into cash within the coming year.', 'Studying how the balance between current and non-current assets shifts over time helps explain how a business is choosing to deploy its resources.', 'A cautious reader treats any single figure drawn from the financial statements as a final conclusion in itself, with no need for further inquiry.', 'An increasing share of non-current assets over successive years can point to a business committing more heavily to long-term productive capacity.', 'Businesses in capital-intensive industries tend to carry a heavier weighting of non-current assets relative to current assets than businesses that trade mainly in quickly turned-over stock.'], ARRAY[true, true, false, true, true], ARRAY['TRUE — More current assets relative to non-current assets means more resources convertible into cash soon.', 'TRUE — Shifts in the current versus non-current asset balance reveal how resources are being deployed.', 'FALSE — A single figure is a starting point for inquiry, not a final conclusion on its own.', 'TRUE — A rising non-current asset share can signal greater commitment to long-term capacity.', 'TRUE — Capital-intensive industries tend to carry more non-current assets relative to current assets.'], '4/5', 7, 'full' ),
( '6.3', 'CASE 6.3.008', 'Two-Year Balance Sheet Review 8', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=600 | Total assets=1185
Year 2 | Equity=654 | Total assets=1312
[[/CHART]]

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 486 | 532 |
| Machinery | 185 | 214 |
| Office equipment | 63 | 71 |
| Patents, trademarks and licences | 84 | 84 |
| Inventory | 152 | 182 |
| Trade receivables | 98 | 103 |
| Cash and cash equivalents | 117 | 126 |
| Total assets | **1185** | **1312** |
| **EQUITY** | | |
| Share capital | 100 | 100 |
| Retained earnings | 500 | 554 |
| Total equity | **600** | **654** |
| **LIABILITIES** | | |
| Long-term bank loan | 221 | 253 |
| Bonds payable | 87 | 95 |
| Trade payables | 201 | 228 |
| Bank overdraft | 76 | 82 |
| Total liabilities | **585** | **658** |
| Total equity and liabilities | **1185** | **1312** |

Evaluate the following economic assertions:', ARRAY['Total assets grew by more than 10.6% between Year 1 and Year 2.', 'Non-current liabilities amount to less than 80.2% of total equity in Year 2.', 'Non-current assets make up more than 61.8% of total assets in Year 2.', 'Current liabilities are covered by current assets less than 2.01 times over in Year 2.', 'Trade payables of €228 thousand in Year 2 are correctly classified as a current liability, since suppliers are normally expected to be paid within one year.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Total assets changed by about 10.7% between the two years.', 'TRUE — Non-current liabilities are about 53.2% of equity in Year 2.', 'TRUE — Non-current assets are about 68.7% of total assets in Year 2.', 'TRUE — Current ratio in Year 2 is about 1.33.', 'TRUE — Trade payables are a current liability regardless of the amount.'], '2/5', 8, 'full' ),
( '6.3', 'CASE 6.3.009', 'Liquidity From the Balance Sheet 9', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=429
Current liabilities=263
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 320 |
| Machinery | 167 |
| Office equipment | 55 |
| Patents, trademarks and licences | 33 |
| Inventory | 265 |
| Trade receivables | 71 |
| Cash and cash equivalents | 93 |
| Total assets | **1004** |
| **EQUITY** | |
| Share capital | 279 |
| Retained earnings | 94 |
| Total equity | **373** |
| **LIABILITIES** | |
| Long-term bank loan | 292 |
| Bonds payable | 76 |
| Trade payables | 225 |
| Bank overdraft | 38 |
| Total liabilities | **631** |
| Total equity and liabilities | **1004** |

Evaluate the following economic assertions:', ARRAY['The current ratio is below 1.22.', 'Inventory make up more than 52.1% of current assets.', 'Trade receivables make up less than 38.6% of current assets.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 0.71 times over.', 'Cash and cash equivalents make up more than 18.9% of current assets.'], ARRAY[false, true, true, false, true], ARRAY['FALSE — Current ratio ≈ 1.63.', 'TRUE — Inventory are about 61.8% of current assets.', 'TRUE — Trade receivables are about 16.6% of current assets.', 'FALSE — Acid-test ratio ≈ 0.62.', 'TRUE — Cash and cash equivalents are about 21.7% of current assets.'], '3/5', 9, 'full' ),
( '6.3', 'CASE 6.3.010', 'Comparing Results Across Several Years in Practice', 'Analyze why non-current assets are best matched with equity and non-current liabilities rather than short-term credit. Evaluate the following economic assertions:', ARRAY['Placing several years of a business''s balance sheets and income statements side by side reveals nothing beyond what a single year''s figures already show.', 'Following revenue, cost of sales and profit for the year across several reporting periods provides no indication of the direction in which a business''s performance is heading.', 'When a business''s equity rises mainly because retained earnings have grown while share capital stays the same, that growth has been funded internally out of past profit.', 'Tracking share capital and retained earnings separately over successive years shows whether a business''s equity growth has come from owner contributions or from accumulated profit.', 'Comparing successive balance sheets provides no way of telling whether a business''s asset base or sources of finance are expanding, contracting or holding steady.'], ARRAY[false, false, true, true, false], ARRAY['FALSE — Multi-year comparison reveals trends that a single year''s figures cannot show.', 'FALSE — Tracking key results over several periods is exactly how a performance direction is identified.', 'TRUE — Equity growth from rising retained earnings with static share capital reflects internal funding.', 'TRUE — Separate tracking of share capital and retained earnings reveals the source of equity growth.', 'FALSE — Successive balance sheet comparison is precisely how such changes are detected.'], '3/5', 10, 'full' ),
( '6.3', 'CASE 6.3.011', 'Return and Cash Flow Extract 11', 'Consider the following combined extracts (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=513
Machinery=148
Inventory=125
Trade receivables=168
Cash and cash equivalents=94
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 513 |
| Machinery | 148 |
| Office equipment | 67 |
| Patents, trademarks and licences | 34 |
| Inventory | 125 |
| Trade receivables | 168 |
| Cash and cash equivalents | 94 |
| Total assets | **1149** |
| **EQUITY** | |
| Share capital | 161 |
| Retained earnings | 382 |
| Total equity | **543** |
| **LIABILITIES** | |
| Long-term bank loan | 417 |
| Bonds payable | 44 |
| Trade payables | 85 |
| Bank overdraft | 60 |
| Total liabilities | **606** |
| Total equity and liabilities | **1149** |

| Income statement extract (€ thousands) | Amount |
| --- | ---: |
| Operating result | 227 |

| Cash flow statement extract (€ thousands) | Amount |
| --- | ---: |
| Cash flow from operating activities | 232 |
| Cash flow from investing activities | (300) |
| Cash flow from financing activities | 71 |
| Cash and cash equivalents at the beginning of the year | 91 |

Evaluate the following economic assertions:', ARRAY['Return on capital employed, the operating result taken relative to equity plus non-current liabilities, exceeds 25.8%.', 'Working capital equals exactly €278 thousand.', 'Cash flow from operating activities amounts to less than 99.7% of the operating result, indicating profit is only partly backed by cash.', 'Return on equity, the operating result taken as a percentage of total equity, exceeds 24.6%.', 'With an operating result of €227 thousand, return on capital employed is mainly useful when comparing similar businesses or the same business over time, not as a standalone absolute number.'], ARRAY[false, false, false, true, true], ARRAY['FALSE — Return on capital employed ≈ 22.6%.', 'FALSE — Working capital = 242.', 'FALSE — Cash conversion ≈ 102.2% of the operating result.', 'TRUE — Return on equity ≈ 41.8%.', 'TRUE — Comparative context matters for return on capital employed.'], '5/5', 11, 'full' ),
( '6.3', 'CASE 6.3.012', 'Profit and Loss Over Two Years 12', 'Consider the following two-year statement of profit and loss (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Revenue and operating result"]]
Year 1 | Revenue=755 | Operating result=203
Year 2 | Revenue=883 | Operating result=238
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Revenue | 755 | 883 |
| Cost of sales | (471) | (559) |
| Gross profit | 284 | 324 |
| Distribution costs | (40) | (47) |
| General and administrative costs | (38) | (43) |
| Other operating result | (3) | 4 |
| Operating result | 203 | 238 |
| Finance costs | (16) | (23) |
| Finance costs – net | (9) | (20) |
| Profit before tax | 194 | 218 |
| Income taxes | (48) | (55) |
| Profit for the year | 146 | 163 |

Evaluate the following economic assertions:', ARRAY['The gross profit margin, gross profit taken as a share of revenue, is more than 3.2 percentage points higher in Year 2 than in Year 1.', 'The operating result grew by more than 42.2% between Year 1 and Year 2.', 'Finance costs grew by more than 13.9% between Year 1 and Year 2, outpacing the growth in the operating result.', 'Revenue grew by more than 21% between Year 1 and Year 2.', 'Profit for the year grew by more than 27.7% between Year 1 and Year 2.'], ARRAY[false, false, true, false, false], ARRAY['FALSE — Gross margins were 37.6% then 36.7%.', 'FALSE — The operating result changed by about 17.2% between the two years.', 'TRUE — Finance costs moved from 16 to 23; operating result moved from 203 to 238.', 'FALSE — Revenue changed by about 17.0% between the two years.', 'FALSE — Profit for the year changed by about 11.6% between the two years.'], '3/5', 12, 'full' ),
( '6.3', 'CASE 6.3.013', 'Comparing Results Across Several Years Explained', 'Consider a joinery and furniture workshop whose accountant is explaining the difference between cash spent on new machinery and the expense recorded in the income statement. Evaluate the following economic assertions:', ARRAY['A business that grows its equity mostly through retained earnings is relying less on outside investors than one whose equity growth comes mainly from new share issues.', 'The pattern of a business''s equity growth over several years, whether driven by retained profit or fresh capital, reveals something about its underlying financing strategy.', 'If share capital has remained unchanged for several years while equity has still grown, retained earnings must account for the entire increase.', 'A business is considered to be financing its non-current assets soundly when their total value does not exceed the combined total of equity and non-current liabilities.', 'Relying on long-term sources of finance, rather than short-term borrowing that must soon be renewed, is regarded as the prudent way to fund long-lived assets.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Retained-earnings-driven equity growth relies less on outside investors than share-issue-driven growth.', 'TRUE — The pattern of equity growth over time reveals a business''s financing strategy.', 'TRUE — Unchanged share capital plus rising equity means retained earnings account for the increase.', 'TRUE — Non-current assets covered by equity plus non-current liabilities reflects sound long-term financing.', 'TRUE — Long-term financing of long-lived assets is regarded as the financially prudent approach.'], '5/5', 13, 'full' ),
( '6.3', 'CASE 6.3.014', 'Comparing Results Across Several Years for Analysts', 'Analyze how gross profit is calculated by deducting cost of sales from revenue before operating expenses are considered. Evaluate the following economic assertions:', ARRAY['Looking at several consecutive years of results makes it harder to tell whether an unusual figure was a temporary blip or the start of a lasting change.', 'A trend that persists across three or more reporting periods carries no more weight than a single period''s outcome when judging a business''s direction of travel.', 'When non-current assets exceed the sum of equity and non-current liabilities, part of those long-term assets must be financed by current liabilities, which increases financial risk.', 'Judging whether a business''s results are strong or weak is unaffected by whether its figures are set alongside those of comparable businesses in the same industry.', 'Matching the expected life of an asset with the maturity of the finance used to fund it is a widely accepted principle of sound financial management.'], ARRAY[false, false, true, false, true], ARRAY['FALSE — More years of data make this distinction easier, not harder, to draw.', 'FALSE — A persistent multi-period trend is more meaningful than a single period''s outcome.', 'TRUE — Non-current assets exceeding equity plus non-current liabilities implies risky reliance on current liabilities.', 'FALSE — Comparison with comparable businesses is exactly what allows strong or weak results to be identified.', 'TRUE — Matching asset life to financing maturity is a widely accepted sound-finance principle.'], '5/5', 14, 'full' ),
( '6.3', 'CASE 6.3.015', 'Comparative Balance Sheet Analysis 15', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=360 | Total assets=922
Year 2 | Equity=412 | Total assets=1028
[[/CHART]]

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 320 | 359 |
| Machinery | 133 | 148 |
| Office equipment | 40 | 44 |
| Patents, trademarks and licences | 45 | 45 |
| Inventory | 133 | 147 |
| Trade receivables | 148 | 172 |
| Cash and cash equivalents | 103 | 113 |
| Total assets | **922** | **1028** |
| **EQUITY** | | |
| Share capital | 178 | 178 |
| Retained earnings | 182 | 234 |
| Total equity | **360** | **412** |
| **LIABILITIES** | | |
| Long-term bank loan | 239 | 260 |
| Bonds payable | 84 | 95 |
| Trade payables | 211 | 231 |
| Bank overdraft | 28 | 30 |
| Total liabilities | **562** | **616** |
| Total equity and liabilities | **922** | **1028** |

Evaluate the following economic assertions:', ARRAY['Total assets grew by more than 23.4% between Year 1 and Year 2.', 'Inventory grew by more than 27.1% between Year 1 and Year 2.', 'Total equity grew by more than 13.8% between Year 1 and Year 2.', 'Trade payables grew by more than 17.6% between Year 1 and Year 2.', 'Cash and cash equivalents fell by more than 12.1% between Year 1 and Year 2.'], ARRAY[false, false, true, false, false], ARRAY['FALSE — Total assets changed by about 11.5% between the two years.', 'FALSE — Inventory changed by about 10.5% between the two years.', 'TRUE — Total equity changed by about 14.4% between the two years.', 'FALSE — Trade payables changed by about 9.5% between the two years.', 'FALSE — Cash and cash equivalents changed by about 9.7% between the two years.'], '5/5', 15, 'full' ),
( '6.3', 'CASE 6.3.016', 'Asset Composition Chart 16', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=285
Current liabilities=321
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 371 |
| Machinery | 276 |
| Office equipment | 46 |
| Patents, trademarks and licences | 47 |
| Inventory | 84 |
| Trade receivables | 95 |
| Cash and cash equivalents | 106 |
| Total assets | **1025** |
| **EQUITY** | |
| Share capital | 205 |
| Retained earnings | 204 |
| Total equity | **409** |
| **LIABILITIES** | |
| Long-term bank loan | 249 |
| Bonds payable | 46 |
| Trade payables | 250 |
| Bank overdraft | 71 |
| Total liabilities | **616** |
| Total equity and liabilities | **1025** |

Evaluate the following economic assertions:', ARRAY['Trade receivables make up less than 36.9% of current assets.', 'Cash and cash equivalents make up more than 30.7% of current assets.', 'Inventory of €84 thousand is correctly classified as a current asset rather than a non-current intangible asset.', 'The current ratio is exactly 0.89.', 'The equity ratio is exactly 39.9%.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Trade receivables are about 33.3% of current assets.', 'TRUE — Cash and cash equivalents are about 37.2% of current assets.', 'TRUE — Inventory is always a current asset.', 'TRUE — Current ratio is 0.89.', 'TRUE — Equity ratio ≈ 39.9%.'], '2/5', 16, 'full' ),
( '6.3', 'CASE 6.3.017', 'Return and Cash Flow Extract 17', 'Consider the following combined extracts (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=329
Machinery=139
Inventory=257
Trade receivables=104
Cash and cash equivalents=87
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 329 |
| Machinery | 139 |
| Office equipment | 76 |
| Patents, trademarks and licences | 79 |
| Inventory | 257 |
| Trade receivables | 104 |
| Cash and cash equivalents | 87 |
| Total assets | **1071** |
| **EQUITY** | |
| Share capital | 126 |
| Retained earnings | 382 |
| Total equity | **508** |
| **LIABILITIES** | |
| Long-term bank loan | 283 |
| Bonds payable | 55 |
| Trade payables | 197 |
| Bank overdraft | 28 |
| Total liabilities | **563** |
| Total equity and liabilities | **1071** |

| Income statement extract (€ thousands) | Amount |
| --- | ---: |
| Operating result | 171 |

| Cash flow statement extract (€ thousands) | Amount |
| --- | ---: |
| Cash flow from operating activities | 186 |
| Cash flow from investing activities | (280) |
| Cash flow from financing activities | 77 |
| Cash and cash equivalents at the beginning of the year | 104 |

Evaluate the following economic assertions:', ARRAY['Return on equity, the operating result taken as a percentage of total equity, exceeds 31.3%.', 'With an operating result of €171 thousand, return on capital employed is mainly useful when comparing similar businesses or the same business over time, not as a standalone absolute number.', 'The net change in cash and cash equivalents equals exactly €-17 thousand.', 'Cash and cash equivalents at the end of the year exceed €81 thousand.', 'Cash flow from operating activities amounts to more than 87.5% of the operating result.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Return on equity ≈ 33.7%.', 'TRUE — Comparative context matters for return on capital employed.', 'TRUE — Net change = -17.', 'TRUE — Ending cash ≈ €87 thousand.', 'TRUE — Cash conversion ≈ 108.8% of the operating result.'], '3/5', 17, 'full' ),
( '6.3', 'CASE 6.3.018', 'Comparing Results Across Several Years Over Time', 'Analyze why the operating result, also called earnings before interest and taxes, isolates core trading performance from financing and tax effects. Evaluate the following economic assertions:', ARRAY['A profit margin that appears strong when viewed in isolation remains equally strong once measured against the margins earned by similar businesses.', 'Sector-wide benchmarks provide no basis for determining whether an individual business''s asset structure or profitability is ordinary for its industry or genuinely stands out.', 'Financing long-lived production assets through short-term credit that must be repaid within a year exposes a business to the risk of needing to refinance repeatedly.', 'Cost of sales is confined to the direct costs incurred in producing or acquiring the goods a business has actually sold during the period.', 'Comparing a business''s statements with those of its direct competitors can never reveal whether a change in results reflects conditions across the whole industry or is specific to that one business.'], ARRAY[false, false, true, true, false], ARRAY['FALSE — Benchmarking against similar businesses can turn an apparently strong margin into an unremarkable one.', 'FALSE — Sector benchmarks are precisely what shows whether results are ordinary or exceptional.', 'TRUE — Short-term financing of long-lived assets creates repeated refinancing risk.', 'TRUE — Cost of sales captures only the direct costs of producing or acquiring the goods sold.', 'FALSE — Competitor comparison is exactly how industry-wide effects are separated from company-specific ones.'], '5/5', 18, 'full' ),
( '6.3', 'CASE 6.3.019', 'Comparing Results Across Several Years in Context', 'Analyze how an expenditure differs from an expense recognised in the income statement. Evaluate the following economic assertions:', ARRAY['Only costs that can be traced directly to manufacturing or acquiring the units a business has sold belong within cost of sales.', 'Materials physically consumed in manufacturing the units sold form part of cost of sales, while costs incurred once production is finished generally do not.', 'Because cost of sales is restricted to direct production costs, functions such as administration and distribution are reported in separate lines of the income statement.', 'Direct labour spent physically producing the goods sold is treated as part of cost of sales, unlike labour spent on functions unrelated to production.', 'Gross profit is arrived at by deducting cost of sales from revenue, before any operating expenses such as distribution or administrative costs are taken into account.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Only directly traceable production or acquisition costs belong within cost of sales.', 'TRUE — Materials consumed in production belong in cost of sales; post-production costs generally do not.', 'TRUE — Direct-cost-only cost of sales means administration and distribution appear as separate lines.', 'TRUE — Direct production labour belongs in cost of sales; labour on unrelated functions does not.', 'TRUE — Gross profit equals revenue minus cost of sales, calculated ahead of operating expenses.'], '5/5', 19, 'full' ),
( '6.3', 'CASE 6.3.020', 'Profit and Loss Over Two Years 20', 'Consider the following two-year statement of profit and loss (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Revenue and operating result"]]
Year 1 | Revenue=763 | Operating result=194
Year 2 | Revenue=912 | Operating result=237
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Revenue | 763 | 912 |
| Cost of sales | (489) | (583) |
| Gross profit | 274 | 329 |
| Distribution costs | (48) | (54) |
| General and administrative costs | (35) | (40) |
| Other operating result | 3 | 2 |
| Operating result | 194 | 237 |
| Finance costs | (20) | (23) |
| Finance costs – net | (14) | (19) |
| Profit before tax | 180 | 218 |
| Income taxes | (44) | (56) |
| Profit for the year | 136 | 162 |

Evaluate the following economic assertions:', ARRAY['Revenue grew by more than 15.1% between Year 1 and Year 2.', 'The operating result covers finance costs less than 11.41 times over in Year 2.', 'The gross profit margin, gross profit taken as a share of revenue, is more than 2.3 percentage points higher in Year 2 than in Year 1.', 'The operating result grew by more than 41.1% between Year 1 and Year 2.', 'The operating margin, operating result taken as a share of revenue, exceeds 12.8% in Year 2.'], ARRAY[true, true, false, false, true], ARRAY['TRUE — Revenue changed by about 19.5% between the two years.', 'TRUE — Interest coverage in Year 2 ≈ 10.3 times.', 'FALSE — Gross margins were 35.9% then 36.1%.', 'FALSE — The operating result changed by about 22.2% between the two years.', 'TRUE — Operating margin in Year 2 ≈ 26.0%.'], '2/5', 20, 'full' ),
( '6.3', 'CASE 6.3.021', 'Comparative Balance Sheet Analysis 21', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=289 | Total assets=1092
Year 2 | Equity=372 | Total assets=1231
[[/CHART]]

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 386 | 435 |
| Machinery | 175 | 202 |
| Office equipment | 36 | 39 |
| Patents, trademarks and licences | 50 | 50 |
| Inventory | 271 | 320 |
| Trade receivables | 95 | 103 |
| Cash and cash equivalents | 79 | 82 |
| Total assets | **1092** | **1231** |
| **EQUITY** | | |
| Share capital | 294 | 294 |
| Retained earnings | -5 | 78 |
| Total equity | **289** | **372** |
| **LIABILITIES** | | |
| Long-term bank loan | 425 | 456 |
| Bonds payable | 69 | 75 |
| Trade payables | 240 | 258 |
| Bank overdraft | 69 | 70 |
| Total liabilities | **803** | **859** |
| Total equity and liabilities | **1092** | **1231** |

Evaluate the following economic assertions:', ARRAY['Total assets grew by more than 6.2% between Year 1 and Year 2.', 'The equity ratio improved by more than 3.1 percentage points between Year 1 and Year 2.', 'The debt ratio fell by more than 3.2 percentage points between Year 1 and Year 2.', 'Non-current liabilities amount to more than 66.8% of total equity in Year 1.', 'Current liabilities are covered by current assets less than 1.73 times over in Year 2.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Total assets changed by about 12.7% between the two years.', 'TRUE — Equity ratio moved from 26.5% to 30.2%.', 'TRUE — Debt ratio moved from 73.5% to 69.8%.', 'TRUE — Non-current liabilities are about 170.9% of equity in Year 1.', 'TRUE — Current ratio in Year 2 is about 1.54.'], '3/5', 21, 'full' ),
( '6.3', 'CASE 6.3.022', 'Asset Composition Chart 22', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=531
Current liabilities=153
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 317 |
| Machinery | 158 |
| Office equipment | 64 |
| Patents, trademarks and licences | 58 |
| Inventory | 255 |
| Trade receivables | 171 |
| Cash and cash equivalents | 105 |
| Total assets | **1128** |
| **EQUITY** | |
| Share capital | 147 |
| Retained earnings | 590 |
| Total equity | **737** |
| **LIABILITIES** | |
| Long-term bank loan | 185 |
| Bonds payable | 53 |
| Trade payables | 76 |
| Bank overdraft | 77 |
| Total liabilities | **391** |
| Total equity and liabilities | **1128** |

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.77.', 'Working capital of €378 thousand is positive on this balance sheet.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 1.05 times over.', 'Inventory make up more than 39% of current assets.', 'Trade receivables make up less than 46% of current assets.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Current ratio ≈ 3.47.', 'TRUE — Working capital = 378.', 'TRUE — Acid-test ratio ≈ 1.80.', 'TRUE — Inventory are about 48.0% of current assets.', 'TRUE — Trade receivables are about 32.2% of current assets.'], '5/5', 22, 'full' ),
( '6.3', 'CASE 6.3.023', 'Benchmarking Against Industry Peers in Practice', 'Consider a textile dyeing company whose board is discussing how the split between current and non-current assets has changed since a recent plant upgrade. Evaluate the following economic assertions:', ARRAY['Even without a suitable point of comparison, a reader can still judge reliably whether a given profit margin counts as good or poor performance.', 'The relative weight of non-current assets against current assets on a business''s balance sheet gives no indication of how capital-intensive its operations are.', 'The margin represented by gross profit reflects how much a business earns from producing and selling its goods before overhead costs such as administration are considered.', 'Distribution costs and administrative expenses are deducted from gross profit, not from revenue directly, on the way to arriving at the operating result.', 'Two businesses can report identical gross profit yet end up with very different operating results if their distribution and administrative costs differ.'], ARRAY[false, false, true, true, true], ARRAY['FALSE — Without a comparison point, judging a margin as good or poor is unreliable.', 'FALSE — This balance is exactly what indicates how capital-intensive operations are.', 'TRUE — Gross profit reflects the production and selling margin before overhead costs are considered.', 'TRUE — Distribution and administrative costs are deducted after gross profit, on the way to the operating result.', 'TRUE — Identical gross profit can still yield different operating results depending on subsequent operating expenses.'], '4/5', 23, 'full' ),
( '6.3', 'CASE 6.3.024', 'Benchmarking Against Industry Peers Explained', 'Analyze why reading the balance sheet and income statement together gives a fuller picture than reading either alone. Evaluate the following economic assertions:', ARRAY['A widening gap between revenue and cost of sales, expressed as a proportion of revenue, indicates that gross profit margin is improving.', 'A business holding a larger share of its resources in current assets typically has less of its wealth available for conversion into cash within the coming year.', 'Studying how the balance between current and non-current assets shifts over time reveals nothing about how a business is choosing to deploy its resources.', 'An increasing share of non-current assets over successive years can only point to a business reducing its commitment to long-term productive capacity.', 'Businesses in capital-intensive industries tend to carry a lighter weighting of non-current assets relative to current assets than businesses that trade mainly in quickly turned-over stock.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — A widening revenue-to-cost-of-sales gap, relative to revenue, means gross profit margin is improving.', 'FALSE — A larger current-asset share means more, not less, of a business''s resources are readily convertible to cash.', 'FALSE — Such shifts are precisely what reveal changing resource deployment.', 'FALSE — A rising non-current asset share typically signals greater, not reduced, long-term commitment.', 'FALSE — Capital-intensive businesses tend to carry heavier, not lighter, non-current asset weightings.'], '5/5', 24, 'full' ),
( '6.3', 'CASE 6.3.025', 'Return and Cash Flow Extract 25', 'Consider the following combined extracts (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=475
Machinery=249
Inventory=247
Trade receivables=148
Cash and cash equivalents=50
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 475 |
| Machinery | 249 |
| Office equipment | 37 |
| Patents, trademarks and licences | 48 |
| Inventory | 247 |
| Trade receivables | 148 |
| Cash and cash equivalents | 50 |
| Total assets | **1254** |
| **EQUITY** | |
| Share capital | 128 |
| Retained earnings | 496 |
| Total equity | **624** |
| **LIABILITIES** | |
| Long-term bank loan | 336 |
| Bonds payable | 83 |
| Trade payables | 184 |
| Bank overdraft | 27 |
| Total liabilities | **630** |
| Total equity and liabilities | **1254** |

| Income statement extract (€ thousands) | Amount |
| --- | ---: |
| Operating result | 218 |

| Cash flow statement extract (€ thousands) | Amount |
| --- | ---: |
| Cash flow from operating activities | 221 |
| Cash flow from investing activities | (220) |
| Cash flow from financing activities | 67 |
| Cash and cash equivalents at the beginning of the year | -18 |

Evaluate the following economic assertions:', ARRAY['Return on equity, the operating result taken as a percentage of total equity, exceeds 33.1%.', 'Return on capital employed, the operating result taken relative to equity plus non-current liabilities, exceeds 22.2%.', 'Working capital equals exactly €259 thousand.', 'The net change in cash and cash equivalents equals exactly €39 thousand.', 'Cash flow from operating activities amounts to less than 99.3% of the operating result, indicating profit is only partly backed by cash.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Return on equity ≈ 34.9%.', 'FALSE — Return on capital employed ≈ 20.9%.', 'FALSE — Working capital = 234.', 'FALSE — Net change = 68.', 'FALSE — Cash conversion ≈ 101.4% of the operating result.'], '5/5', 25, 'full' ),
( '6.3', 'CASE 6.3.026', 'Profit and Loss Over Two Years 26', 'Consider the following two-year statement of profit and loss (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Revenue and operating result"]]
Year 1 | Revenue=821 | Operating result=205
Year 2 | Revenue=927 | Operating result=221
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Revenue | 821 | 927 |
| Cost of sales | (523) | (595) |
| Gross profit | 298 | 332 |
| Distribution costs | (49) | (63) |
| General and administrative costs | (43) | (48) |
| Other operating result | (1) | 0 |
| Operating result | 205 | 221 |
| Finance costs | (22) | (29) |
| Finance costs – net | (15) | (26) |
| Profit before tax | 190 | 195 |
| Income taxes | (46) | (48) |
| Profit for the year | 144 | 147 |

Evaluate the following economic assertions:', ARRAY['Finance costs grew by more than 25% between Year 1 and Year 2, outpacing the growth in the operating result.', 'The operating result covers finance costs more than 9.28 times over in Year 1.', 'The operating margin, operating result taken as a share of revenue, exceeds 13.9% in Year 2.', 'The gross profit margin in Year 2 is exactly 35.8%.', 'Profit for the year increased by exactly €3 thousand from Year 1 to Year 2.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Finance costs moved from 22 to 29; operating result moved from 205 to 221.', 'TRUE — Interest coverage in Year 1 ≈ 9.3 times.', 'TRUE — Operating margin in Year 2 ≈ 23.8%.', 'TRUE — Gross margin in Year 2 ≈ 35.8%.', 'TRUE — Profit moved from 144 to 147.'], '5/5', 26, 'full' ),
( '6.3', 'CASE 6.3.027', 'Comparative Balance Sheet Analysis 27', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=542 | Total assets=1102
Year 2 | Equity=532 | Total assets=1144
[[/CHART]]

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

Evaluate the following economic assertions:', ARRAY['Total equity grew by more than 21.7% between Year 1 and Year 2.', 'Non-current liabilities amount to less than 91.7% of total equity in Year 2.', 'Current liabilities are covered by current assets less than 2.02 times over in Year 2.', 'Trade payables of €104 thousand in Year 2 are correctly classified as a current liability, since suppliers are normally expected to be paid within one year.', 'Total assets grew by more than 12.2% between Year 1 and Year 2.'], ARRAY[false, true, true, true, false], ARRAY['FALSE — Total equity changed by about -1.8% between the two years.', 'TRUE — Non-current liabilities are about 82.9% of equity in Year 2.', 'TRUE — Current ratio in Year 2 is about 1.96.', 'TRUE — Trade payables are a current liability regardless of the amount.', 'FALSE — Total assets changed by about 3.8% between the two years.'], '4/5', 27, 'full' ),
( '6.3', 'CASE 6.3.028', 'Asset Composition Chart 28', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=372
Current liabilities=226
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 494 |
| Machinery | 146 |
| Office equipment | 66 |
| Patents, trademarks and licences | 88 |
| Inventory | 280 |
| Trade receivables | 61 |
| Cash and cash equivalents | 31 |
| Total assets | **1166** |
| **EQUITY** | |
| Share capital | 219 |
| Retained earnings | 469 |
| Total equity | **688** |
| **LIABILITIES** | |
| Long-term bank loan | 200 |
| Bonds payable | 52 |
| Trade payables | 161 |
| Bank overdraft | 65 |
| Total liabilities | **478** |
| Total equity and liabilities | **1166** |

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.82.', 'Working capital of €146 thousand is positive on this balance sheet.', 'The current ratio is below 1.26.', 'The equity ratio is below 35.4%.', 'The debt ratio exceeds 50%.'], ARRAY[false, true, false, false, false], ARRAY['FALSE — Current ratio ≈ 1.65.', 'TRUE — Working capital = 146.', 'FALSE — Current ratio ≈ 1.65.', 'FALSE — Equity ratio ≈ 59.0%.', 'FALSE — Debt ratio ≈ 41.0%.'], '2/5', 28, 'full' ),
( '6.3', 'CASE 6.3.029', 'Benchmarking Against Industry Peers for Analysts', 'Review why a business''s balance sheet and income statement for a single year should be read cautiously rather than taken at face value. Evaluate the following economic assertions:', ARRAY['The operating result, also described as earnings before interest and taxes, measures profit from core operations before the effects of financing costs and income tax are included.', 'When a business''s equity rises mainly because retained earnings have grown while share capital stays the same, that growth must have come from a new issue of shares to owners.', 'Tracking share capital and retained earnings separately over successive years provides no way of telling whether a business''s equity growth has come from owner contributions or from accumulated profit.', 'A business that grows its equity mostly through retained earnings is relying just as heavily on outside investors as one whose equity growth comes mainly from new share issues.', 'The pattern of a business''s equity growth over several years reveals nothing about its underlying financing strategy, regardless of whether it is driven by retained profit or fresh capital.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — The operating result, i.e. earnings before interest and taxes, excludes financing costs and income tax.', 'FALSE — With share capital unchanged, equity growth cannot come from new shares; it must be retained earnings.', 'FALSE — Separate tracking of these two components is exactly how the source of equity growth is identified.', 'FALSE — Growth funded by retained earnings relies less on outside investors than growth funded by new shares.', 'FALSE — This pattern is precisely what reveals a business''s underlying financing strategy.'], '5/5', 29, 'full' ),
( '6.3', 'CASE 6.3.030', 'Benchmarking Against Industry Peers Over Time', 'Review how comparing several years of financial statements reveals trends that one year''s figures cannot show alone. Evaluate the following economic assertions:', ARRAY['Excluding financing costs and income tax from the operating result allows a business''s core trading performance to be judged separately from how it happens to be financed or taxed.', 'If share capital has remained unchanged for several years while equity has still grown, that growth cannot be explained by retained earnings.', 'A business is considered to be financing its non-current assets soundly only when their total value is covered mainly by current liabilities.', 'Relying on short-term borrowing that must soon be renewed, rather than long-term sources of finance, is regarded as the prudent way to fund long-lived assets.', 'When non-current assets exceed the sum of equity and non-current liabilities, this always indicates a conservative and low-risk financing position.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Excluding financing and tax lets the operating result isolate core trading performance.', 'FALSE — With share capital unchanged, retained earnings are exactly what explain rising equity.', 'FALSE — Covering long-term assets mainly with current liabilities is considered risky, not sound.', 'FALSE — Funding long-lived assets mainly with short-term borrowing is regarded as risky, not prudent.', 'FALSE — This situation indicates a risky, not conservative, financing position.'], '5/5', 30, 'full' ),
( '6.3', 'CASE 6.3.031', 'Return and Cash Flow Extract 31', 'Consider the following combined extracts (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=515
Machinery=190
Inventory=154
Trade receivables=107
Cash and cash equivalents=79
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 515 |
| Machinery | 190 |
| Office equipment | 51 |
| Patents, trademarks and licences | 64 |
| Inventory | 154 |
| Trade receivables | 107 |
| Cash and cash equivalents | 79 |
| Total assets | **1160** |
| **EQUITY** | |
| Share capital | 118 |
| Retained earnings | 510 |
| Total equity | **628** |
| **LIABILITIES** | |
| Long-term bank loan | 207 |
| Bonds payable | 61 |
| Trade payables | 188 |
| Bank overdraft | 76 |
| Total liabilities | **532** |
| Total equity and liabilities | **1160** |

| Income statement extract (€ thousands) | Amount |
| --- | ---: |
| Operating result | 187 |

| Cash flow statement extract (€ thousands) | Amount |
| --- | ---: |
| Cash flow from operating activities | 203 |
| Cash flow from investing activities | (232) |
| Cash flow from financing activities | 68 |
| Cash and cash equivalents at the beginning of the year | 40 |

Evaluate the following economic assertions:', ARRAY['Return on equity, the operating result taken as a percentage of total equity, exceeds 26%.', 'Return on capital employed, the operating result taken relative to equity plus non-current liabilities, exceeds 14.3%.', 'Working capital equals exactly €18 thousand.', 'With an operating result of €187 thousand, return on capital employed is mainly useful when comparing similar businesses or the same business over time, not as a standalone absolute number.', 'Cash and cash equivalents at the end of the year exceed €71 thousand.'], ARRAY[true, true, false, true, true], ARRAY['TRUE — Return on equity ≈ 29.8%.', 'TRUE — Return on capital employed ≈ 20.9%.', 'FALSE — Working capital = 76.', 'TRUE — Comparative context matters for return on capital employed.', 'TRUE — Ending cash ≈ €79 thousand.'], '4/5', 31, 'full' ),
( '6.3', 'CASE 6.3.032', 'Profit and Loss Over Two Years 32', 'Consider the following two-year statement of profit and loss (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Revenue and operating result"]]
Year 1 | Revenue=840 | Operating result=210
Year 2 | Revenue=945 | Operating result=218
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Revenue | 840 | 945 |
| Cost of sales | (551) | (626) |
| Gross profit | 289 | 319 |
| Distribution costs | (43) | (49) |
| General and administrative costs | (40) | (49) |
| Other operating result | 4 | (3) |
| Operating result | 210 | 218 |
| Finance costs | (19) | (24) |
| Finance costs – net | (12) | (21) |
| Profit before tax | 198 | 197 |
| Income taxes | (40) | (42) |
| Profit for the year | 158 | 155 |

Evaluate the following economic assertions:', ARRAY['Revenue grew by more than 10.1% between Year 1 and Year 2.', 'Finance costs grew by more than 10% between Year 1 and Year 2, outpacing the growth in the operating result.', 'The gross profit margin, gross profit taken as a share of revenue, is more than 2.2 percentage points higher in Year 2 than in Year 1.', 'The operating result grew by more than 28.1% between Year 1 and Year 2.', 'Profit for the year grew by more than 22.6% between Year 1 and Year 2.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Revenue changed by about 12.5% between the two years.', 'TRUE — Finance costs moved from 19 to 24; operating result moved from 210 to 218.', 'FALSE — Gross margins were 34.4% then 33.8%.', 'FALSE — The operating result changed by about 3.8% between the two years.', 'FALSE — Profit for the year changed by about -1.9% between the two years.'], '5/5', 32, 'full' ),
( '6.3', 'CASE 6.3.033', 'Comparative Balance Sheet Analysis 33', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=513 | Total assets=1020
Year 2 | Equity=571 | Total assets=1143
[[/CHART]]

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 374 | 428 |
| Machinery | 220 | 240 |
| Office equipment | 35 | 41 |
| Patents, trademarks and licences | 79 | 79 |
| Inventory | 186 | 216 |
| Trade receivables | 96 | 104 |
| Cash and cash equivalents | 30 | 35 |
| Total assets | **1020** | **1143** |
| **EQUITY** | | |
| Share capital | 229 | 229 |
| Retained earnings | 284 | 342 |
| Total equity | **513** | **571** |
| **LIABILITIES** | | |
| Long-term bank loan | 329 | 376 |
| Bonds payable | 40 | 44 |
| Trade payables | 82 | 90 |
| Bank overdraft | 56 | 62 |
| Total liabilities | **507** | **572** |
| Total equity and liabilities | **1020** | **1143** |

Evaluate the following economic assertions:', ARRAY['Non-current liabilities amount to more than 52.9% of total equity in Year 1.', 'Total equity grew by more than 15.8% between Year 1 and Year 2.', 'Total assets grew by more than 21% between Year 1 and Year 2.', 'Inventory grew by more than 29% between Year 1 and Year 2.', 'Trade payables grew by more than 24.9% between Year 1 and Year 2.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Non-current liabilities are about 71.9% of equity in Year 1.', 'FALSE — Total equity changed by about 11.3% between the two years.', 'FALSE — Total assets changed by about 12.1% between the two years.', 'FALSE — Inventory changed by about 16.1% between the two years.', 'FALSE — Trade payables changed by about 9.8% between the two years.'], '3/5', 33, 'full' ),
( '6.3', 'CASE 6.3.034', 'Asset Composition Chart 34', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=215
Current liabilities=236
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 446 |
| Machinery | 238 |
| Office equipment | 41 |
| Patents, trademarks and licences | 63 |
| Inventory | 109 |
| Trade receivables | 71 |
| Cash and cash equivalents | 35 |
| Total assets | **1003** |
| **EQUITY** | |
| Share capital | 235 |
| Retained earnings | 49 |
| Total equity | **284** |
| **LIABILITIES** | |
| Long-term bank loan | 398 |
| Bonds payable | 85 |
| Trade payables | 165 |
| Bank overdraft | 71 |
| Total liabilities | **719** |
| Total equity and liabilities | **1003** |

Evaluate the following economic assertions:', ARRAY['The current ratio is below 0.99.', 'The debt ratio exceeds 67.1%.', 'Inventory make up more than 35.6% of current assets.', 'Trade receivables make up less than 35.6% of current assets.', 'Inventory of €109 thousand is correctly classified as a current asset rather than a non-current intangible asset.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Current ratio ≈ 0.91.', 'TRUE — Debt ratio ≈ 71.7%.', 'TRUE — Inventory are about 50.7% of current assets.', 'TRUE — Trade receivables are about 33.0% of current assets.', 'TRUE — Inventory is always a current asset.'], '5/5', 34, 'full' ),
( '6.3', 'CASE 6.3.035', 'Return and Cash Flow Extract 35', 'Consider the following combined extracts (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=329
Machinery=237
Inventory=273
Trade receivables=180
Cash and cash equivalents=94
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 329 |
| Machinery | 237 |
| Office equipment | 51 |
| Patents, trademarks and licences | 89 |
| Inventory | 273 |
| Trade receivables | 180 |
| Cash and cash equivalents | 94 |
| Total assets | **1253** |
| **EQUITY** | |
| Share capital | 162 |
| Retained earnings | 464 |
| Total equity | **626** |
| **LIABILITIES** | |
| Long-term bank loan | 419 |
| Bonds payable | 55 |
| Trade payables | 126 |
| Bank overdraft | 27 |
| Total liabilities | **627** |
| Total equity and liabilities | **1253** |

| Income statement extract (€ thousands) | Amount |
| --- | ---: |
| Operating result | 201 |

| Cash flow statement extract (€ thousands) | Amount |
| --- | ---: |
| Cash flow from operating activities | 199 |
| Cash flow from investing activities | (276) |
| Cash flow from financing activities | 46 |
| Cash and cash equivalents at the beginning of the year | 125 |

Evaluate the following economic assertions:', ARRAY['Return on equity, the operating result taken as a percentage of total equity, exceeds 41.4%.', 'Return on capital employed, the operating result taken relative to equity plus non-current liabilities, exceeds 25.3%.', 'With an operating result of €201 thousand, return on capital employed is mainly useful when comparing similar businesses or the same business over time, not as a standalone absolute number.', 'Working capital equals exactly €437 thousand.', 'Cash flow from operating activities amounts to less than 82.4% of the operating result, indicating profit is only partly backed by cash.'], ARRAY[false, false, true, false, false], ARRAY['FALSE — Return on equity ≈ 32.1%.', 'FALSE — Return on capital employed ≈ 18.3%.', 'TRUE — Comparative context matters for return on capital employed.', 'FALSE — Working capital = 394.', 'FALSE — Cash conversion ≈ 99.0% of the operating result.'], '5/5', 35, 'full' ),
( '6.3', 'CASE 6.3.036', 'Profit and Loss Over Two Years 36', 'Consider the following two-year statement of profit and loss (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Revenue and operating result"]]
Year 1 | Revenue=701 | Operating result=211
Year 2 | Revenue=821 | Operating result=234
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Revenue | 701 | 821 |
| Cost of sales | (410) | (478) |
| Gross profit | 291 | 343 |
| Distribution costs | (38) | (52) |
| General and administrative costs | (43) | (54) |
| Other operating result | 1 | (3) |
| Operating result | 211 | 234 |
| Finance costs | (22) | (25) |
| Finance costs – net | (15) | (20) |
| Profit before tax | 196 | 214 |
| Income taxes | (47) | (52) |
| Profit for the year | 149 | 162 |

Evaluate the following economic assertions:', ARRAY['The operating result covers finance costs more than 4.07 times over in Year 1.', 'The operating margin, operating result taken as a share of revenue, exceeds 13.2% in Year 2.', 'The effective tax rate, income taxes taken as a share of profit before tax, is below 28.5% in Year 1.', 'The gross profit margin, gross profit taken as a share of revenue, is more than 5 percentage points higher in Year 2 than in Year 1.', 'The gross profit margin in Year 2 is exactly 41.8%.'], ARRAY[true, true, true, false, true], ARRAY['TRUE — Interest coverage in Year 1 ≈ 9.6 times.', 'TRUE — Operating margin in Year 2 ≈ 28.5%.', 'TRUE — Effective tax rate in Year 1 ≈ 24.0%.', 'FALSE — Gross margins were 41.5% then 41.8%.', 'TRUE — Gross margin in Year 2 ≈ 41.8%.'], '5/5', 36, 'full' ),
( '6.3', 'CASE 6.3.037', 'Gearing From Comparative Figures 37', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=896 | Total assets=1249
Year 2 | Equity=960 | Total assets=1363
[[/CHART]]

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

Evaluate the following economic assertions:', ARRAY['Total equity grew by more than 16.5% between Year 1 and Year 2.', 'Non-current liabilities amount to less than 105.9% of total equity in Year 2.', 'Non-current assets make up more than 60.3% of total assets in Year 2.', 'Trade payables of €76 thousand in Year 2 are correctly classified as a current liability, since suppliers are normally expected to be paid within one year.', 'Total assets grew by more than 22.8% between Year 1 and Year 2.'], ARRAY[false, true, true, true, false], ARRAY['FALSE — Total equity changed by about 7.1% between the two years.', 'TRUE — Non-current liabilities are about 29.0% of equity in Year 2.', 'TRUE — Non-current assets are about 70.6% of total assets in Year 2.', 'TRUE — Trade payables are a current liability regardless of the amount.', 'FALSE — Total assets changed by about 9.1% between the two years.'], '5/5', 37, 'full' ),
( '6.3', 'CASE 6.3.038', 'Benchmarking Against Industry Peers in Context', 'Consider an industrial cleaning company whose accountant is walking new staff through the difference between cost of sales and the operating expenses reported further down the income statement. Evaluate the following economic assertions:', ARRAY['Tracking the operating result over several years shows how a business''s core trading is developing independently of changes in interest rates or tax policy.', 'Matching the expected life of an asset with the maturity of the finance used to fund it has no bearing on whether a business is considered soundly financed.', 'Two businesses reporting an identical operating result can still end up with different profit for the year if their finance costs or tax rates differ.', 'Financing long-lived production assets through short-term credit that must be repaid within a year removes any risk of needing to refinance.', 'A decline in profit for the year alongside a stable or rising operating result suggests the cause lies in financing costs or taxation rather than in core trading.'], ARRAY[true, false, true, false, true], ARRAY['TRUE — Multi-year operating result tracking isolates trading trends from interest rate or tax changes.', 'FALSE — This matching principle is central to being considered a soundly financed business.', 'TRUE — Identical operating results can yield different profit for the year given differing finance costs or tax rates.', 'FALSE — Short-term financing of long-lived assets creates, rather than removes, refinancing risk.', 'TRUE — Falling profit for the year with a stable operating result points to financing or tax causes, not trading.'], '5/5', 38, 'full' ),
( '6.3', 'CASE 6.3.039', 'Liquidity From the Balance Sheet 39', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=441
Current liabilities=200
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 444 |
| Machinery | 275 |
| Office equipment | 30 |
| Patents, trademarks and licences | 79 |
| Inventory | 215 |
| Trade receivables | 174 |
| Cash and cash equivalents | 52 |
| Total assets | **1269** |
| **EQUITY** | |
| Share capital | 221 |
| Retained earnings | 336 |
| Total equity | **557** |
| **LIABILITIES** | |
| Long-term bank loan | 439 |
| Bonds payable | 73 |
| Trade payables | 118 |
| Bank overdraft | 82 |
| Total liabilities | **712** |
| Total equity and liabilities | **1269** |

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.08.', 'Working capital of €241 thousand is positive on this balance sheet.', 'The current ratio is below 1.01.', 'The debt ratio exceeds 55.9%.', 'The equity ratio is below 20.5%.'], ARRAY[true, true, false, true, false], ARRAY['TRUE — Current ratio ≈ 2.21.', 'TRUE — Working capital = 241.', 'FALSE — Current ratio ≈ 2.21.', 'TRUE — Debt ratio ≈ 56.1%.', 'FALSE — Equity ratio ≈ 43.9%.'], '5/5', 39, 'full' ),
( '6.3', 'CASE 6.3.040', 'Combined Statement Extract 40', 'Consider the following combined extracts (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=328
Machinery=265
Inventory=253
Trade receivables=143
Cash and cash equivalents=43
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 328 |
| Machinery | 265 |
| Office equipment | 63 |
| Patents, trademarks and licences | 66 |
| Inventory | 253 |
| Trade receivables | 143 |
| Cash and cash equivalents | 43 |
| Total assets | **1161** |
| **EQUITY** | |
| Share capital | 234 |
| Retained earnings | 301 |
| Total equity | **535** |
| **LIABILITIES** | |
| Long-term bank loan | 308 |
| Bonds payable | 89 |
| Trade payables | 144 |
| Bank overdraft | 85 |
| Total liabilities | **626** |
| Total equity and liabilities | **1161** |

| Income statement extract (€ thousands) | Amount |
| --- | ---: |
| Operating result | 185 |

| Cash flow statement extract (€ thousands) | Amount |
| --- | ---: |
| Cash flow from operating activities | 192 |
| Cash flow from investing activities | (192) |
| Cash flow from financing activities | 40 |
| Cash and cash equivalents at the beginning of the year | 3 |

Evaluate the following economic assertions:', ARRAY['Return on equity, the operating result taken as a percentage of total equity, exceeds 34.4%.', 'Working capital equals exactly €166 thousand.', 'Return on capital employed, the operating result taken relative to equity plus non-current liabilities, exceeds 14%.', 'With an operating result of €185 thousand, return on capital employed is mainly useful when comparing similar businesses or the same business over time, not as a standalone absolute number.', 'The net change in cash and cash equivalents equals exactly €40 thousand.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — Return on equity ≈ 34.6%.', 'FALSE — Working capital = 210.', 'TRUE — Return on capital employed ≈ 19.8%.', 'TRUE — Comparative context matters for return on capital employed.', 'TRUE — Net change = 40.'], '5/5', 40, 'full' ),
( '6.3', 'CASE 6.3.041', 'The Current and Non-Current Asset Balance in Practice', 'Review how the balance between current and non-current assets signals how capital-intensive a business is. Evaluate the following economic assertions:', ARRAY['An expenditure is an outflow of cash or resources, while an expense is the portion of that outflow recognised in the income statement as belonging to the current period.', 'Cost of sales includes every cost a business incurs during the period, regardless of whether the cost relates directly to the goods sold.', 'Any cost that benefits the business in some way, even indirectly, belongs within cost of sales.', 'Materials physically consumed in manufacturing the units sold are excluded from cost of sales because they are considered an overhead.', 'Paying in advance for a full year of insurance cover is an expenditure at the time of payment, but it becomes an expense only as each period of cover passes.'], ARRAY[true, false, false, false, true], ARRAY['TRUE — Expenditure is the outflow itself; expense is the portion recognised for the current period.', 'FALSE — Cost of sales is limited to direct costs; not every cost incurred belongs there.', 'FALSE — Only directly traceable costs belong in cost of sales; indirect benefit is not sufficient.', 'FALSE — Materials consumed directly in production are a direct cost and belong within cost of sales.', 'TRUE — A prepayment is an expenditure immediately but becomes an expense only in the periods it covers.'], '5/5', 41, 'full' ),
( '6.3', 'CASE 6.3.042', 'The Current and Non-Current Asset Balance Explained', 'Review how the split between retained earnings and new share capital reveals the source of a business''s equity growth. Evaluate the following economic assertions:', ARRAY['A single large expenditure can result in expense being recognised gradually across several future accounting periods rather than all at once.', 'Because cost of sales includes every departmental cost, functions such as administration and distribution are absorbed into it rather than reported separately.', 'Direct labour spent physically producing the goods sold is excluded from cost of sales because wages are always treated as an administrative cost.', 'The distinction between expenditure and expense matters because it explains why a business''s cash outflow for a year can differ substantially from its reported expenses for that year.', 'Gross profit is arrived at by deducting all operating expenses, including distribution and administrative costs, from revenue.'], ARRAY[true, false, false, true, false], ARRAY['TRUE — A large expenditure can be spread as expense across several future periods.', 'FALSE — Administration and distribution are reported separately, not absorbed into cost of sales.', 'FALSE — Direct production labour is a core component of cost of sales, not an administrative cost.', 'TRUE — Distinguishing expenditure from expense explains gaps between cash outflow and reported expense in a year.', 'FALSE — Gross profit only deducts cost of sales from revenue; operating expenses are deducted later.'], '5/5', 42, 'full' ),
( '6.3', 'CASE 6.3.043', 'The Current and Non-Current Asset Balance for Analysts', 'Review why non-current assets are best matched with equity and non-current liabilities rather than short-term credit. Evaluate the following economic assertions:', ARRAY['Buying an asset that will be used for several years is an expenditure immediately, but only part of its cost becomes an expense in the year of purchase.', 'Comparing how quickly revenue grows against how quickly cost of sales grows over successive years shows whether a business is becoming more or less efficient at producing what it sells.', 'The margin represented by gross profit reflects a business''s overall profitability after every overhead cost, including administration, has already been deducted.', 'If cost of sales grows more slowly than revenue over a period, the resulting gross profit margin will widen across that period.', 'A business whose cost of sales consistently outpaces its revenue growth will see its gross profit margin come under sustained pressure.'], ARRAY[true, true, false, true, true], ARRAY['TRUE — Buying a multi-year asset is an immediate expenditure, with only part becoming expense that year.', 'TRUE — Comparing revenue growth with cost of sales growth reveals changing production efficiency.', 'FALSE — Gross profit is calculated before, not after, overhead costs such as administration are deducted.', 'TRUE — Cost of sales growing more slowly than revenue widens the gross profit margin.', 'TRUE — Cost of sales consistently outpacing revenue growth puts sustained pressure on the gross profit margin.'], '4/5', 43, 'full' ),
( '6.3', 'CASE 6.3.044', 'Profit and Loss Over Two Years 44', 'Consider the following two-year statement of profit and loss (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Revenue and operating result"]]
Year 1 | Revenue=770 | Operating result=240
Year 2 | Revenue=904 | Operating result=264
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Revenue | 770 | 904 |
| Cost of sales | (448) | (530) |
| Gross profit | 322 | 374 |
| Distribution costs | (46) | (61) |
| General and administrative costs | (40) | (46) |
| Other operating result | 4 | (3) |
| Operating result | 240 | 264 |
| Finance costs | (18) | (26) |
| Finance costs – net | (12) | (23) |
| Profit before tax | 228 | 241 |
| Income taxes | (46) | (47) |
| Profit for the year | 182 | 194 |

Evaluate the following economic assertions:', ARRAY['Revenue grew by more than 12.4% between Year 1 and Year 2.', 'Finance costs grew by more than 37.8% between Year 1 and Year 2, outpacing the growth in the operating result.', 'The gross profit margin, gross profit taken as a share of revenue, is more than 4.4 percentage points higher in Year 2 than in Year 1.', 'The operating result grew by more than 59.9% between Year 1 and Year 2.', 'Profit for the year grew by more than 29.3% between Year 1 and Year 2.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Revenue changed by about 17.4% between the two years.', 'TRUE — Finance costs moved from 18 to 26; operating result moved from 240 to 264.', 'FALSE — Gross margins were 41.8% then 41.4%.', 'FALSE — The operating result changed by about 10.0% between the two years.', 'FALSE — Profit for the year changed by about 6.6% between the two years.'], '3/5', 44, 'full' ),
( '6.3', 'CASE 6.3.045', 'Comparative Balance Sheet Analysis 45', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=474 | Total assets=1013
Year 2 | Equity=524 | Total assets=1129
[[/CHART]]

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 369 | 423 |
| Machinery | 146 | 168 |
| Office equipment | 71 | 77 |
| Patents, trademarks and licences | 51 | 51 |
| Inventory | 231 | 247 |
| Trade receivables | 114 | 128 |
| Cash and cash equivalents | 31 | 35 |
| Total assets | **1013** | **1129** |
| **EQUITY** | | |
| Share capital | 191 | 191 |
| Retained earnings | 283 | 333 |
| Total equity | **474** | **524** |
| **LIABILITIES** | | |
| Long-term bank loan | 197 | 217 |
| Bonds payable | 81 | 94 |
| Trade payables | 184 | 214 |
| Bank overdraft | 77 | 80 |
| Total liabilities | **539** | **605** |
| Total equity and liabilities | **1013** | **1129** |

Evaluate the following economic assertions:', ARRAY['Total equity grew by more than 14.5% between Year 1 and Year 2.', 'Trade payables grew by more than 8.4% between Year 1 and Year 2.', 'Non-current liabilities amount to less than 75.7% of total equity in Year 2.', 'Total assets grew by more than 14.9% between Year 1 and Year 2.', 'Inventory grew by more than 20.7% between Year 1 and Year 2.'], ARRAY[false, true, true, false, false], ARRAY['FALSE — Total equity changed by about 10.5% between the two years.', 'TRUE — Trade payables changed by about 16.3% between the two years.', 'TRUE — Non-current liabilities are about 59.4% of equity in Year 2.', 'FALSE — Total assets changed by about 11.5% between the two years.', 'FALSE — Inventory changed by about 6.9% between the two years.'], '3/5', 45, 'full' ),
( '6.3', 'CASE 6.3.046', 'The Current and Non-Current Asset Balance Over Time', 'Consider a beverage bottling company whose finance team is preparing balance sheet and income statement summaries for a meeting with its bank. Evaluate the following economic assertions:', ARRAY['Stable growth in both revenue and cost of sales at similar rates tends to keep a business''s gross profit margin relatively steady from year to year.', 'Rising revenue figures alone do not guarantee improving profitability if cost of sales is rising at an even faster pace.', 'Distribution costs and administrative expenses are deducted directly from revenue at the same stage as cost of sales, before gross profit is calculated.', 'Two businesses that report identical gross profit will always end up with identical operating results, regardless of their distribution and administrative costs.', 'Reading the balance sheet and income statement together gives a fuller picture of a business''s position and performance than studying either statement on its own.'], ARRAY[true, true, false, false, true], ARRAY['TRUE — Revenue and cost of sales growing at similar rates tends to keep the margin steady.', 'TRUE — Rising revenue does not guarantee improving profitability if cost of sales rises even faster.', 'FALSE — These costs are deducted after gross profit has already been calculated, not alongside cost of sales.', 'FALSE — Identical gross profit does not guarantee identical operating results if operating expenses differ.', 'TRUE — Reading both statements together gives a fuller picture than studying either alone.'], '5/5', 46, 'full' ),
( '6.3', 'CASE 6.3.047', 'Balance Sheet Structure Review 47', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=435
Current liabilities=301
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 289 |
| Machinery | 272 |
| Office equipment | 30 |
| Patents, trademarks and licences | 62 |
| Inventory | 259 |
| Trade receivables | 69 |
| Cash and cash equivalents | 107 |
| Total assets | **1088** |
| **EQUITY** | |
| Share capital | 254 |
| Retained earnings | 129 |
| Total equity | **383** |
| **LIABILITIES** | |
| Long-term bank loan | 329 |
| Bonds payable | 75 |
| Trade payables | 214 |
| Bank overdraft | 87 |
| Total liabilities | **705** |
| Total equity and liabilities | **1088** |

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.84.', 'The current ratio is below 0.68.', 'Working capital of €134 thousand is positive on this balance sheet.', 'Inventory make up more than 55.2% of current assets.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 0.97 times over.'], ARRAY[false, false, true, true, false], ARRAY['FALSE — Current ratio ≈ 1.45.', 'FALSE — Current ratio ≈ 1.45.', 'TRUE — Working capital = 134.', 'TRUE — Inventory are about 59.5% of current assets.', 'FALSE — Acid-test ratio ≈ 0.58.'], '5/5', 47, 'full' ),
( '6.3', 'CASE 6.3.048', 'The Current and Non-Current Asset Balance in Context', 'Review how gross profit is calculated by deducting cost of sales from revenue before operating expenses are considered. Evaluate the following economic assertions:', ARRAY['A widening gap between revenue and cost of sales, expressed as a proportion of revenue, indicates that gross profit margin is deteriorating.', 'A strong profit for the year shown in the income statement can be undermined by a weak financing position revealed only by the balance sheet.', 'Changes in working capital shown on the balance sheet can help explain why cash movements differ from the profit for the year reported in the income statement.', 'Judging a business''s overall financial health requires weighing income statement performance against balance sheet strength rather than looking at either alone.', 'The operating result, also described as earnings before interest and taxes, is calculated only after financing costs and income tax have already been deducted.'], ARRAY[false, true, true, true, false], ARRAY['FALSE — A widening such gap indicates an improving, not deteriorating, gross profit margin.', 'TRUE — A strong income statement result can be undermined by weaknesses only the balance sheet reveals.', 'TRUE — Balance sheet working capital changes help explain gaps between cash movement and reported profit.', 'TRUE — Overall financial health requires weighing both statements together, not either alone.', 'FALSE — The operating result is calculated before, not after, financing costs and income tax.'], '5/5', 48, 'full' ),
( '6.3', 'CASE 6.3.049', 'Sources of Equity Growth in Practice', 'Review why the operating result, also called earnings before interest and taxes, isolates core trading performance from financing and tax effects. Evaluate the following economic assertions:', ARRAY['A business could report rising profit for the year while its balance sheet simultaneously shows a deteriorating financing structure, so both statements need to be considered together.', 'A beverage bottling company is regarded as financing its bottling line machinery soundly when their value does not exceed equity plus a long-term bottling equipment loan.', 'Tracking the balance between bottling line machinery and bottled stock awaiting dispatch on a beverage bottling company''s statements over several years shows whether the business is becoming more or less capital-intensive.', 'A paper mill is regarded as financing its papermaking machinery soundly when their value does not exceed equity plus a long-term papermill mortgage.', 'Tracking the balance between papermaking machinery and paper roll inventory on a paper mill''s statements over several years shows whether the business is becoming more or less capital-intensive.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Rising profit can coincide with a deteriorating balance sheet, so both statements matter jointly.', 'TRUE — Non-current assets covered by equity and non-current liabilities reflect sound long-term financing.', 'TRUE — Changes in the non-current versus current asset split over time signal shifting capital intensity.', 'TRUE — Non-current assets covered by equity and non-current liabilities reflect sound long-term financing.', 'TRUE — Changes in the non-current versus current asset split over time signal shifting capital intensity.'], '3/5', 49, 'full' ),
( '6.3', 'CASE 6.3.050', 'Combined Statement Extract 50', 'Consider the following combined extracts (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=473
Machinery=181
Inventory=128
Trade receivables=99
Cash and cash equivalents=49
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 473 |
| Machinery | 181 |
| Office equipment | 76 |
| Patents, trademarks and licences | 68 |
| Inventory | 128 |
| Trade receivables | 99 |
| Cash and cash equivalents | 49 |
| Total assets | **1074** |
| **EQUITY** | |
| Share capital | 239 |
| Retained earnings | 421 |
| Total equity | **660** |
| **LIABILITIES** | |
| Long-term bank loan | 243 |
| Bonds payable | 77 |
| Trade payables | 66 |
| Bank overdraft | 28 |
| Total liabilities | **414** |
| Total equity and liabilities | **1074** |

| Income statement extract (€ thousands) | Amount |
| --- | ---: |
| Operating result | 180 |

| Cash flow statement extract (€ thousands) | Amount |
| --- | ---: |
| Cash flow from operating activities | 201 |
| Cash flow from investing activities | (273) |
| Cash flow from financing activities | 38 |
| Cash and cash equivalents at the beginning of the year | 83 |

Evaluate the following economic assertions:', ARRAY['Return on equity, the operating result taken as a percentage of total equity, exceeds 42.6%.', 'Return on capital employed, the operating result taken relative to equity plus non-current liabilities, exceeds 15.6%.', 'With an operating result of €180 thousand, return on capital employed is mainly useful when comparing similar businesses or the same business over time, not as a standalone absolute number.', 'Cash and cash equivalents at the end of the year exceed €40 thousand.', 'Working capital equals exactly €228 thousand.'], ARRAY[false, true, true, true, false], ARRAY['FALSE — Return on equity ≈ 27.3%.', 'TRUE — Return on capital employed ≈ 18.4%.', 'TRUE — Comparative context matters for return on capital employed.', 'TRUE — Ending cash ≈ €49 thousand.', 'FALSE — Working capital = 182.'], '2/5', 50, 'full' ),
( '6.3', 'CASE 6.3.051', 'Sources of Equity Growth Explained', 'Review how an expenditure differs from an expense recognised in the income statement. Evaluate the following economic assertions:', ARRAY['A ceramics manufacturer is regarded as financing its ceramics kilns and moulding equipment soundly when their value does not exceed equity plus long-term kiln financing.', 'Because the operating result already includes financing costs and income tax, it cannot be used to judge a business''s core trading performance separately from financing or tax.', 'Tracking the balance between ceramics kilns and moulding equipment and finished ceramics stock on a ceramics manufacturer''s statements over several years shows whether the business is becoming more or less capital-intensive.', 'An automotive parts supplier is regarded as financing its assembly-line robotics soundly when their value does not exceed equity plus a long-term robotics lease.', 'Tracking the balance between assembly-line robotics and spare automotive parts inventory on an automotive parts supplier''s statements over several years shows whether the business is becoming more or less capital-intensive.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — Non-current assets covered by equity and non-current liabilities reflect sound long-term financing.', 'FALSE — The operating result excludes financing and tax, which is precisely why it isolates trading performance.', 'TRUE — Changes in the non-current versus current asset split over time signal shifting capital intensity.', 'TRUE — Non-current assets covered by equity and non-current liabilities reflect sound long-term financing.', 'TRUE — Changes in the non-current versus current asset split over time signal shifting capital intensity.'], '5/5', 51, 'full' ),
( '6.3', 'CASE 6.3.052', 'Profit and Loss Over Two Years 52', 'Consider the following two-year statement of profit and loss (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Revenue and operating result"]]
Year 1 | Revenue=889 | Operating result=294
Year 2 | Revenue=1082 | Operating result=344
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Revenue | 889 | 1082 |
| Cost of sales | (524) | (649) |
| Gross profit | 365 | 433 |
| Distribution costs | (39) | (48) |
| General and administrative costs | (35) | (42) |
| Other operating result | 3 | 1 |
| Operating result | 294 | 344 |
| Finance costs | (22) | (30) |
| Finance costs – net | (19) | (27) |
| Profit before tax | 275 | 317 |
| Income taxes | (54) | (65) |
| Profit for the year | 221 | 252 |

Evaluate the following economic assertions:', ARRAY['The operating result grew by more than 54.6% between Year 1 and Year 2.', 'Profit for the year grew by more than 14.6% between Year 1 and Year 2.', 'The effective tax rate rose by more than 1.7 percentage points between Year 1 and Year 2.', 'Revenue grew by more than 16.9% between Year 1 and Year 2.', 'Distribution costs and general and administrative costs are deducted before gross profit is calculated.'], ARRAY[false, false, false, true, false], ARRAY['FALSE — The operating result changed by about 17.0% between the two years.', 'FALSE — Profit for the year changed by about 14.0% between the two years.', 'FALSE — Effective tax rate moved from 19.6% to 20.5%.', 'TRUE — Revenue changed by about 21.7% between the two years.', 'FALSE — Gross profit is revenue minus cost of sales only; those costs are deducted afterwards.'], '2/5', 52, 'full' ),
( '6.3', 'CASE 6.3.053', 'Sources of Equity Growth for Analysts', 'Consider a commercial bakery chain preparing a presentation on how its cost of sales and gross profit have moved over the past several years. Evaluate the following economic assertions:', ARRAY['A commercial bakery chain is regarded as financing its ovens and proofing equipment soundly when their value does not exceed equity plus a long-term bakery expansion loan.', 'Tracking the operating result over several years cannot show how a business''s core trading is developing, since the figure already reflects changes in interest rates and tax policy.', 'Two businesses reporting an identical operating result must always end up with identical profit for the year, regardless of their finance costs or tax rates.', 'Tracking the balance between ovens and proofing equipment and dough and ingredient stock on a commercial bakery chain''s statements over several years shows whether the business is becoming more or less capital-intensive.', 'A marine equipment supplier is regarded as financing its dockside cranes and lifting gear soundly when their value does not exceed equity plus a long-term dockyard loan.'], ARRAY[true, false, false, true, true], ARRAY['TRUE — Non-current assets covered by equity and non-current liabilities reflect sound long-term financing.', 'FALSE — The operating result is unaffected by interest rates and tax, so it can show core trading trends over time.', 'FALSE — Differing finance costs or tax rates can still produce different profit for the year from the same operating result.', 'TRUE — Changes in the non-current versus current asset split over time signal shifting capital intensity.', 'TRUE — Non-current assets covered by equity and non-current liabilities reflect sound long-term financing.'], '5/5', 53, 'full' ),
( '6.3', 'CASE 6.3.054', 'Sources of Equity Growth Over Time', 'Review why reading the balance sheet and income statement together gives a fuller picture than reading either alone. Evaluate the following economic assertions:', ARRAY['Tracking the balance between dockside cranes and lifting gear and spare marine parts inventory on a marine equipment supplier''s statements over several years shows whether the business is becoming more or less capital-intensive.', 'A joinery and furniture workshop is regarded as financing its joinery workshop machinery soundly when their value does not exceed equity plus a long-term workshop mortgage.', 'Tracking the balance between joinery workshop machinery and unsold furniture stock on a joinery and furniture workshop''s statements over several years shows whether the business is becoming more or less capital-intensive.', 'A plastics moulding company is regarded as financing its injection-moulding machinery soundly when their value does not exceed equity plus long-term moulding equipment finance.', 'A dairy cooperative is regarded as financing its chilling and pasteurising plant soundly when their value does not exceed equity plus a long-term dairy plant loan.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Changes in the non-current versus current asset split over time signal shifting capital intensity.', 'TRUE — Non-current assets covered by equity and non-current liabilities reflect sound long-term financing.', 'TRUE — Changes in the non-current versus current asset split over time signal shifting capital intensity.', 'TRUE — Non-current assets covered by equity and non-current liabilities reflect sound long-term financing.', 'TRUE — Non-current assets covered by equity and non-current liabilities reflect sound long-term financing.'], '5/5', 54, 'full' ),
( '6.3', 'CASE 6.3.055', 'Gearing From Comparative Figures 55', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=452 | Total assets=986
Year 2 | Equity=489 | Total assets=1102
[[/CHART]]

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 289 | 319 |
| Machinery | 120 | 136 |
| Office equipment | 79 | 86 |
| Patents, trademarks and licences | 51 | 51 |
| Inventory | 257 | 284 |
| Trade receivables | 113 | 137 |
| Cash and cash equivalents | 77 | 89 |
| Total assets | **986** | **1102** |
| **EQUITY** | | |
| Share capital | 238 | 238 |
| Retained earnings | 214 | 251 |
| Total equity | **452** | **489** |
| **LIABILITIES** | | |
| Long-term bank loan | 221 | 249 |
| Bonds payable | 78 | 90 |
| Trade payables | 166 | 195 |
| Bank overdraft | 69 | 79 |
| Total liabilities | **534** | **613** |
| Total equity and liabilities | **986** | **1102** |

Evaluate the following economic assertions:', ARRAY['Total equity grew by more than 28% between Year 1 and Year 2.', 'Trade payables grew by more than 21.9% between Year 1 and Year 2.', 'Cash and cash equivalents fell by more than 10.9% between Year 1 and Year 2.', 'Total assets grew by more than 10.1% between Year 1 and Year 2.', 'The equity ratio improved by more than 8.4 percentage points between Year 1 and Year 2.'], ARRAY[false, false, false, true, false], ARRAY['FALSE — Total equity changed by about 8.2% between the two years.', 'FALSE — Trade payables changed by about 17.5% between the two years.', 'FALSE — Cash and cash equivalents changed by about 15.6% between the two years.', 'TRUE — Total assets changed by about 11.8% between the two years.', 'FALSE — Equity ratio moved from 45.8% to 44.4%.'], '5/5', 55, 'full' ),
( '6.3', 'CASE 6.3.056', 'Balance Sheet Structure Review 56', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=317
Current liabilities=172
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 442 |
| Machinery | 239 |
| Office equipment | 64 |
| Patents, trademarks and licences | 47 |
| Inventory | 172 |
| Trade receivables | 112 |
| Cash and cash equivalents | 33 |
| Total assets | **1109** |
| **EQUITY** | |
| Share capital | 296 |
| Retained earnings | 157 |
| Total equity | **453** |
| **LIABILITIES** | |
| Long-term bank loan | 432 |
| Bonds payable | 52 |
| Trade payables | 120 |
| Bank overdraft | 52 |
| Total liabilities | **656** |
| Total equity and liabilities | **1109** |

Evaluate the following economic assertions:', ARRAY['The current ratio is below 1.2.', 'The equity ratio is below 24.8%.', 'The current ratio exceeds 1.15.', 'Working capital of €145 thousand is positive on this balance sheet.', 'The debt ratio exceeds 62.1%.'], ARRAY[false, false, true, true, false], ARRAY['FALSE — Current ratio ≈ 1.84.', 'FALSE — Equity ratio ≈ 40.8%.', 'TRUE — Current ratio ≈ 1.84.', 'TRUE — Working capital = 145.', 'FALSE — Debt ratio ≈ 59.2%.'], '5/5', 56, 'full' ),
( '6.3', 'CASE 6.3.057', 'Sources of Equity Growth in Context', 'Examine why a business''s balance sheet and income statement for a single year should be read cautiously rather than taken at face value. Evaluate the following economic assertions:', ARRAY['Tracking the balance between chilling and pasteurising plant and dairy products awaiting delivery on a dairy cooperative''s statements over several years shows whether the business is becoming more or less capital-intensive.', 'A decline in profit for the year alongside a stable or rising operating result always means that core trading performance has deteriorated.', 'A mining equipment lessor is regarded as financing its heavy mining equipment held for hire soundly when their value does not exceed equity plus long-term mining equipment finance.', 'Tracking the balance between heavy mining equipment held for hire and replacement parts inventory on a mining equipment lessor''s statements over several years shows whether the business is becoming more or less capital-intensive.', 'A textile dyeing company is regarded as financing its dyeing vats and finishing lines soundly when their value does not exceed equity plus a long-term dyeing plant loan.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — Changes in the non-current versus current asset split over time signal shifting capital intensity.', 'FALSE — A stable operating result alongside falling profit for the year points away from, not toward, deteriorating trading.', 'TRUE — Non-current assets covered by equity and non-current liabilities reflect sound long-term financing.', 'TRUE — Changes in the non-current versus current asset split over time signal shifting capital intensity.', 'TRUE — Non-current assets covered by equity and non-current liabilities reflect sound long-term financing.'], '3/5', 57, 'full' ),
( '6.3', 'CASE 6.3.058', 'Matching Long-Term Assets to Long-Term Finance in Practice', 'Examine how comparing several years of financial statements reveals trends that one year''s figures cannot show alone. Evaluate the following economic assertions:', ARRAY['Tracking the balance between dyeing vats and finishing lines and dyed fabric stock on a textile dyeing company''s statements over several years shows whether the business is becoming more or less capital-intensive.', 'An expenditure and an expense refer to exactly the same amount recognised in exactly the same accounting period, with no distinction between them.', 'An appliance repair network is regarded as financing its diagnostic and repair equipment soundly when their value does not exceed equity plus a long-term equipment finance lease.', 'Tracking the balance between diagnostic and repair equipment and spare repair components on an appliance repair network''s statements over several years shows whether the business is becoming more or less capital-intensive.', 'A seed and fertiliser distributor is regarded as financing its seed processing plant soundly when their value does not exceed equity plus a long-term seed processing loan.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — Changes in the non-current versus current asset split over time signal shifting capital intensity.', 'FALSE — Expenditure and expense can differ; expenditure is the outflow, expense is the period-matched portion.', 'TRUE — Non-current assets covered by equity and non-current liabilities reflect sound long-term financing.', 'TRUE — Changes in the non-current versus current asset split over time signal shifting capital intensity.', 'TRUE — Non-current assets covered by equity and non-current liabilities reflect sound long-term financing.'], '2/5', 58, 'full' ),
( '6.3', 'CASE 6.3.059', 'Return and Cash Flow Extract 59', 'Consider the following combined extracts (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=283
Machinery=179
Inventory=86
Trade receivables=89
Cash and cash equivalents=90
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 283 |
| Machinery | 179 |
| Office equipment | 73 |
| Patents, trademarks and licences | 78 |
| Inventory | 86 |
| Trade receivables | 89 |
| Cash and cash equivalents | 90 |
| Total assets | **878** |
| **EQUITY** | |
| Share capital | 125 |
| Retained earnings | 36 |
| Total equity | **161** |
| **LIABILITIES** | |
| Long-term bank loan | 396 |
| Bonds payable | 80 |
| Trade payables | 213 |
| Bank overdraft | 28 |
| Total liabilities | **717** |
| Total equity and liabilities | **878** |

| Income statement extract (€ thousands) | Amount |
| --- | ---: |
| Operating result | 239 |

| Cash flow statement extract (€ thousands) | Amount |
| --- | ---: |
| Cash flow from operating activities | 232 |
| Cash flow from investing activities | (219) |
| Cash flow from financing activities | 45 |
| Cash and cash equivalents at the beginning of the year | 32 |

Evaluate the following economic assertions:', ARRAY['Return on equity, the operating result taken as a percentage of total equity, exceeds 40.5%.', 'Return on capital employed, the operating result taken relative to equity plus non-current liabilities, exceeds 13.5%.', 'With an operating result of €239 thousand, return on capital employed is mainly useful when comparing similar businesses or the same business over time, not as a standalone absolute number.', 'Working capital equals exactly €24 thousand.', 'The net change in cash and cash equivalents equals exactly €58 thousand.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Return on equity ≈ 148.4%.', 'TRUE — Return on capital employed ≈ 37.5%.', 'TRUE — Comparative context matters for return on capital employed.', 'TRUE — Working capital = 24.', 'TRUE — Net change = 58.'], '5/5', 59, 'full' ),
( '6.3', 'CASE 6.3.060', 'Matching Long-Term Assets to Long-Term Finance Explained', 'Consider a dairy cooperative whose members are reviewing the balance sheet to judge whether its long-term assets are financed appropriately. Evaluate the following economic assertions:', ARRAY['Paying in advance for a full year of insurance cover is recognised entirely as an expense at the moment of payment, regardless of which period the cover relates to.', 'A single large expenditure must always be recognised entirely as an expense within the same accounting period in which it occurs.', 'Tracking the balance between seed processing plant and seed and fertiliser stock on a seed and fertiliser distributor''s statements over several years shows whether the business is becoming more or less capital-intensive.', 'A scaffolding rental firm is regarded as financing its scaffolding held for long-term hire soundly when their value does not exceed equity plus a long-term scaffolding fleet loan.', 'Tracking the balance between scaffolding held for long-term hire and scaffolding materials awaiting short-term hire on a scaffolding rental firm''s statements over several years shows whether the business is becoming more or less capital-intensive.'], ARRAY[false, false, true, true, true], ARRAY['FALSE — A prepayment becomes an expense gradually, matched to the periods it covers, not entirely at payment.', 'FALSE — Expenditure can be spread over future periods as expense rather than recognised all at once.', 'TRUE — Changes in the non-current versus current asset split over time signal shifting capital intensity.', 'TRUE — Non-current assets covered by equity and non-current liabilities reflect sound long-term financing.', 'TRUE — Changes in the non-current versus current asset split over time signal shifting capital intensity.'], '2/5', 60, 'full' ),
( '6.3', 'CASE 6.3.061', 'Revenue and Operating Result Chart 61', 'Consider the following two-year statement of profit and loss (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Revenue and operating result"]]
Year 1 | Revenue=950 | Operating result=273
Year 2 | Revenue=1128 | Operating result=321
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Revenue | 950 | 1128 |
| Cost of sales | (597) | (701) |
| Gross profit | 353 | 427 |
| Distribution costs | (42) | (56) |
| General and administrative costs | (40) | (49) |
| Other operating result | 2 | (1) |
| Operating result | 273 | 321 |
| Finance costs | (20) | (25) |
| Finance costs – net | (14) | (22) |
| Profit before tax | 259 | 299 |
| Income taxes | (60) | (68) |
| Profit for the year | 199 | 231 |

Evaluate the following economic assertions:', ARRAY['The gross profit margin, gross profit taken as a share of revenue, is more than 3.5 percentage points higher in Year 2 than in Year 1.', 'The operating result covers finance costs more than 8.22 times over in Year 1.', 'The operating margin, operating result taken as a share of revenue, exceeds 10.9% in Year 2.', 'The effective tax rate, income taxes taken as a share of profit before tax, is below 27.2% in Year 1.', 'Profit for the year increased by exactly €32 thousand from Year 1 to Year 2.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — Gross margins were 37.2% then 37.9%.', 'TRUE — Interest coverage in Year 1 ≈ 13.7 times.', 'TRUE — Operating margin in Year 2 ≈ 28.5%.', 'TRUE — Effective tax rate in Year 1 ≈ 23.2%.', 'TRUE — Profit moved from 199 to 231.'], '4/5', 61, 'full' ),
( '6.3', 'CASE 6.3.062', 'Matching Long-Term Assets to Long-Term Finance for Analysts', 'Examine how the balance between current and non-current assets signals how capital-intensive a business is. Evaluate the following economic assertions:', ARRAY['An industrial cleaning company is regarded as financing its industrial cleaning machinery soundly when their value does not exceed equity plus a long-term cleaning equipment loan.', 'The distinction between expenditure and expense is irrelevant because a business''s cash outflow for a year is always identical to its reported expenses for that year.', 'Tracking the balance between industrial cleaning machinery and cleaning supplies inventory on an industrial cleaning company''s statements over several years shows whether the business is becoming more or less capital-intensive.', 'Buying an asset that will be used for several years results in its entire cost becoming an expense in the year of purchase.', 'Comparing how quickly revenue grows against how quickly cost of sales grows over successive years reveals nothing about how efficiently a business produces what it sells.'], ARRAY[true, false, true, false, false], ARRAY['TRUE — Non-current assets covered by equity and non-current liabilities reflect sound long-term financing.', 'FALSE — Cash outflow and reported expense for a year often differ, which is exactly why the distinction matters.', 'TRUE — Changes in the non-current versus current asset split over time signal shifting capital intensity.', 'FALSE — Only part of a multi-year asset''s cost becomes expense in the year of purchase; the rest is spread forward.', 'FALSE — This comparison is exactly what reveals changing production efficiency.'], '4/5', 62, 'full' ),
( '6.3', 'CASE 6.3.063', 'Matching Long-Term Assets to Long-Term Finance Over Time', 'Examine how the split between retained earnings and new share capital reveals the source of a business''s equity growth. Evaluate the following economic assertions:', ARRAY['If cost of sales grows more slowly than revenue over a period, the resulting gross profit margin will narrow across that period.', 'A business whose cost of sales consistently outpaces its revenue growth will see its gross profit margin improve steadily over time.', 'Stable growth in both revenue and cost of sales at similar rates tends to make a business''s gross profit margin swing wildly from year to year.', 'Rising revenue figures alone always guarantee improving profitability, regardless of how quickly cost of sales is rising.', 'The wages of head office administrators are kept out of cost of sales because their duties are not directly involved in producing the goods that are sold.'], ARRAY[false, false, false, false, true], ARRAY['FALSE — Slower cost of sales growth relative to revenue widens, rather than narrows, the margin.', 'FALSE — Cost of sales outpacing revenue growth puts pressure on, rather than improves, the margin.', 'FALSE — Similar growth rates in revenue and cost of sales tend to stabilise, not destabilise, the margin.', 'FALSE — Rising revenue alone does not guarantee improving profitability if costs rise faster still.', 'TRUE — Cost of sales reflects direct production costs only, not general administrative wages.'], '3/5', 63, 'full' ),
( '6.3', 'CASE 6.3.064', 'Gearing From Comparative Figures 64', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=622 | Total assets=1076
Year 2 | Equity=650 | Total assets=1146
[[/CHART]]

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 466 | 483 |
| Machinery | 210 | 238 |
| Office equipment | 64 | 71 |
| Patents, trademarks and licences | 84 | 84 |
| Inventory | 83 | 88 |
| Trade receivables | 128 | 132 |
| Cash and cash equivalents | 41 | 50 |
| Total assets | **1076** | **1146** |
| **EQUITY** | | |
| Share capital | 268 | 268 |
| Retained earnings | 354 | 382 |
| Total equity | **622** | **650** |
| **LIABILITIES** | | |
| Long-term bank loan | 263 | 289 |
| Bonds payable | 62 | 68 |
| Trade payables | 61 | 69 |
| Bank overdraft | 68 | 70 |
| Total liabilities | **454** | **496** |
| Total equity and liabilities | **1076** | **1146** |

Evaluate the following economic assertions:', ARRAY['Total assets grew by more than 22.5% between Year 1 and Year 2.', 'Inventory grew by more than 19% between Year 1 and Year 2.', 'Non-current liabilities amount to less than 76.5% of total equity in Year 2.', 'Trade payables grew by more than 25.5% between Year 1 and Year 2.', 'Cash and cash equivalents fell by more than 18.4% between Year 1 and Year 2.'], ARRAY[false, false, true, false, false], ARRAY['FALSE — Total assets changed by about 6.5% between the two years.', 'FALSE — Inventory changed by about 6.0% between the two years.', 'TRUE — Non-current liabilities are about 54.9% of equity in Year 2.', 'FALSE — Trade payables changed by about 13.1% between the two years.', 'FALSE — Cash and cash equivalents changed by about 22.0% between the two years.'], '5/5', 64, 'full' ),
( '6.3', 'CASE 6.3.065', 'Matching Long-Term Assets to Long-Term Finance in Context', 'Examine why non-current assets are best matched with equity and non-current liabilities rather than short-term credit. Evaluate the following economic assertions:', ARRAY['Pay earned by despatch and loading staff is treated as a distribution cost rather than cost of sales, since their work happens after production of the goods is complete.', 'Amounts paid to account managers are excluded from cost of sales because selling activity takes place only after the goods have already been produced.', 'Raw materials consumed directly in production are included within cost of sales because they are incurred directly in producing the goods that a beverage bottling company has sold.', 'Reading the balance sheet and income statement together adds nothing beyond what studying either statement on its own would already reveal.', 'The wages of payroll and accounts clerks are kept out of cost of sales because their duties are not directly involved in producing the goods that are sold.'], ARRAY[true, true, true, false, true], ARRAY['TRUE — Distribution wages are incurred after production and are not part of cost of sales.', 'TRUE — Selling costs occur after production and are excluded from cost of sales.', 'TRUE — Direct production or acquisition costs are exactly what cost of sales is meant to capture.', 'FALSE — Reading both statements together reveals more than studying either one alone.', 'TRUE — Cost of sales reflects direct production costs only, not general administrative wages.'], '4/5', 65, 'full' ),
( '6.3', 'CASE 6.3.066', 'Liquidity From the Balance Sheet 66', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=421
Current liabilities=224
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 354 |
| Machinery | 121 |
| Office equipment | 72 |
| Patents, trademarks and licences | 63 |
| Inventory | 212 |
| Trade receivables | 128 |
| Cash and cash equivalents | 81 |
| Total assets | **1031** |
| **EQUITY** | |
| Share capital | 112 |
| Retained earnings | 366 |
| Total equity | **478** |
| **LIABILITIES** | |
| Long-term bank loan | 257 |
| Bonds payable | 72 |
| Trade payables | 142 |
| Bank overdraft | 82 |
| Total liabilities | **553** |
| Total equity and liabilities | **1031** |

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.25.', 'Working capital of €197 thousand is positive on this balance sheet.', 'Inventory make up more than 34.1% of current assets.', 'Trade receivables make up less than 37.1% of current assets.', 'Cash and cash equivalents make up more than 15.4% of current assets.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Current ratio ≈ 1.88.', 'TRUE — Working capital = 197.', 'TRUE — Inventory are about 50.4% of current assets.', 'TRUE — Trade receivables are about 30.4% of current assets.', 'TRUE — Cash and cash equivalents are about 19.2% of current assets.'], '5/5', 66, 'full' ),
( '6.3', 'CASE 6.3.067', 'Return and Cash Flow Extract 67', 'Consider the following combined extracts (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=374
Machinery=217
Inventory=81
Trade receivables=131
Cash and cash equivalents=36
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 374 |
| Machinery | 217 |
| Office equipment | 61 |
| Patents, trademarks and licences | 65 |
| Inventory | 81 |
| Trade receivables | 131 |
| Cash and cash equivalents | 36 |
| Total assets | **965** |
| **EQUITY** | |
| Share capital | 144 |
| Retained earnings | 189 |
| Total equity | **333** |
| **LIABILITIES** | |
| Long-term bank loan | 436 |
| Bonds payable | 55 |
| Trade payables | 73 |
| Bank overdraft | 68 |
| Total liabilities | **632** |
| Total equity and liabilities | **965** |

| Income statement extract (€ thousands) | Amount |
| --- | ---: |
| Operating result | 185 |

| Cash flow statement extract (€ thousands) | Amount |
| --- | ---: |
| Cash flow from operating activities | 193 |
| Cash flow from investing activities | (225) |
| Cash flow from financing activities | 78 |
| Cash and cash equivalents at the beginning of the year | -10 |

Evaluate the following economic assertions:', ARRAY['Return on capital employed, the operating result taken relative to equity plus non-current liabilities, exceeds 25.9%.', 'Return on equity, the operating result taken as a percentage of total equity, exceeds 29.6%.', 'The net change in cash and cash equivalents equals exactly €46 thousand.', 'Working capital equals exactly €72 thousand.', 'Cash flow from operating activities amounts to less than 98.3% of the operating result, indicating profit is only partly backed by cash.'], ARRAY[false, true, true, false, false], ARRAY['FALSE — Return on capital employed ≈ 22.5%.', 'TRUE — Return on equity ≈ 55.6%.', 'TRUE — Net change = 46.', 'FALSE — Working capital = 107.', 'FALSE — Cash conversion ≈ 104.3% of the operating result.'], '5/5', 67, 'full' ),
( '6.3', 'CASE 6.3.068', 'Defining Cost of Sales in Practice', 'Consider a seed and fertiliser distributor whose members are reviewing the income statement to understand how gross profit was calculated this season. Evaluate the following economic assertions:', ARRAY['Pay earned by outbound freight handlers is treated as a distribution cost rather than cost of sales, since their work happens after production of the goods is complete.', 'Amounts paid to field sales representatives are excluded from cost of sales because selling activity takes place only after the goods have already been produced.', 'Direct factory labour on the production line are included within cost of sales because they are incurred directly in producing the goods that a paper mill has sold.', 'The wages of reception and clerical staff are kept out of cost of sales because their duties are not directly involved in producing the goods that are sold.', 'A strong profit for the year shown in the income statement guarantees that the balance sheet will also show a strong financing position.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Distribution wages are incurred after production and are not part of cost of sales.', 'TRUE — Selling costs occur after production and are excluded from cost of sales.', 'TRUE — Direct production or acquisition costs are exactly what cost of sales is meant to capture.', 'TRUE — Cost of sales reflects direct production costs only, not general administrative wages.', 'FALSE — Strong reported profit does not guarantee a strong balance sheet financing position.'], '5/5', 68, 'full' ),
( '6.3', 'CASE 6.3.069', 'Defining Cost of Sales Explained', 'Examine how gross profit is calculated by deducting cost of sales from revenue before operating expenses are considered. Evaluate the following economic assertions:', ARRAY['Pay earned by delivery drivers is treated as a distribution cost rather than cost of sales, since their work happens after production of the goods is complete.', 'Amounts paid to the retail sales team are excluded from cost of sales because selling activity takes place only after the goods have already been produced.', 'Changes in working capital shown on the balance sheet have no bearing on why cash movements might differ from the profit for the year reported in the income statement.', 'Components purchased for direct assembly are included within cost of sales because they are incurred directly in producing the goods that a ceramics manufacturer has sold.', 'Judging a business''s overall financial health can be done reliably by looking at the income statement alone, without any reference to the balance sheet.'], ARRAY[true, true, false, true, false], ARRAY['TRUE — Distribution wages are incurred after production and are not part of cost of sales.', 'TRUE — Selling costs occur after production and are excluded from cost of sales.', 'FALSE — Working capital changes are exactly what help explain such differences.', 'TRUE — Direct production or acquisition costs are exactly what cost of sales is meant to capture.', 'FALSE — Reliable judgement requires weighing both statements, not the income statement in isolation.'], '5/5', 69, 'full' ),
( '6.3', 'CASE 6.3.070', 'Gearing From Comparative Figures 70', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=568 | Total assets=1129
Year 2 | Equity=636 | Total assets=1269
[[/CHART]]

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 291 | 333 |
| Machinery | 278 | 320 |
| Office equipment | 56 | 64 |
| Patents, trademarks and licences | 95 | 95 |
| Inventory | 191 | 216 |
| Trade receivables | 151 | 161 |
| Cash and cash equivalents | 67 | 80 |
| Total assets | **1129** | **1269** |
| **EQUITY** | | |
| Share capital | 227 | 227 |
| Retained earnings | 341 | 409 |
| Total equity | **568** | **636** |
| **LIABILITIES** | | |
| Long-term bank loan | 384 | 434 |
| Bonds payable | 47 | 53 |
| Trade payables | 63 | 71 |
| Bank overdraft | 67 | 75 |
| Total liabilities | **561** | **633** |
| Total equity and liabilities | **1129** | **1269** |

Evaluate the following economic assertions:', ARRAY['Total assets grew by more than 6.1% between Year 1 and Year 2.', 'Non-current liabilities amount to more than 67.8% of total equity in Year 1.', 'Non-current assets make up more than 63.8% of total assets in Year 2.', 'The combined total of equity and non-current liabilities exceeds non-current assets by more than 37.3% in Year 1.', 'Trade payables of €71 thousand in Year 2 are correctly classified as a current liability, since suppliers are normally expected to be paid within one year.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Total assets changed by about 12.4% between the two years.', 'TRUE — Non-current liabilities are about 75.9% of equity in Year 1.', 'TRUE — Non-current assets are about 64.0% of total assets in Year 2.', 'TRUE — Long-term financing covers non-current assets by about 38.7% in Year 1.', 'TRUE — Trade payables are a current liability regardless of the amount.'], '5/5', 70, 'full' ),
( '6.3', 'CASE 6.3.071', 'Defining Cost of Sales for Analysts', 'Examine why the operating result, also called earnings before interest and taxes, isolates core trading performance from financing and tax effects. Evaluate the following economic assertions:', ARRAY['The wages of human resources personnel are kept out of cost of sales because their duties are not directly involved in producing the goods that are sold.', 'A business cannot report rising profit for the year while its balance sheet simultaneously shows a deteriorating financing structure, since the two always move in the same direction.', 'A beverage bottling company is regarded as financing its bottling line machinery soundly only when they are covered mainly by short-term credit from bottle and packaging suppliers.', 'The balance between bottling line machinery and bottled stock awaiting dispatch on a beverage bottling company''s statements has no bearing on whether the business is becoming more or less capital-intensive.', 'Pay earned by warehouse dispatch personnel is treated as a distribution cost rather than cost of sales, since their work happens after production of the goods is complete.'], ARRAY[true, false, false, false, true], ARRAY['TRUE — Cost of sales reflects direct production costs only, not general administrative wages.', 'FALSE — Profit and balance sheet strength can move in different directions, so both need checking.', 'FALSE — Covering long-term assets mainly with current liabilities is considered risky, not sound financing.', 'FALSE — The asset mix directly reflects capital intensity; the balance is not irrelevant.', 'TRUE — Distribution wages are incurred after production and are not part of cost of sales.'], '3/5', 71, 'full' ),
( '6.3', 'CASE 6.3.072', 'Comparative Balance Sheet Analysis 72', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=529 | Total assets=1177
Year 2 | Equity=580 | Total assets=1296
[[/CHART]]

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 363 | 407 |
| Machinery | 252 | 270 |
| Office equipment | 80 | 93 |
| Patents, trademarks and licences | 41 | 41 |
| Inventory | 155 | 161 |
| Trade receivables | 166 | 192 |
| Cash and cash equivalents | 120 | 132 |
| Total assets | **1177** | **1296** |
| **EQUITY** | | |
| Share capital | 284 | 284 |
| Retained earnings | 245 | 296 |
| Total equity | **529** | **580** |
| **LIABILITIES** | | |
| Long-term bank loan | 305 | 345 |
| Bonds payable | 89 | 100 |
| Trade payables | 173 | 186 |
| Bank overdraft | 81 | 85 |
| Total liabilities | **648** | **716** |
| Total equity and liabilities | **1177** | **1296** |

Evaluate the following economic assertions:', ARRAY['Non-current liabilities amount to more than 67.2% of total equity in Year 1.', 'Total equity grew by more than 20.9% between Year 1 and Year 2.', 'Total assets grew by more than 16.1% between Year 1 and Year 2.', 'Non-current liabilities amount to less than 119.3% of total equity in Year 2.', 'Non-current assets make up more than 56.5% of total assets in Year 2.'], ARRAY[true, false, false, true, true], ARRAY['TRUE — Non-current liabilities are about 74.5% of equity in Year 1.', 'FALSE — Total equity changed by about 9.6% between the two years.', 'FALSE — Total assets changed by about 10.1% between the two years.', 'TRUE — Non-current liabilities are about 76.7% of equity in Year 2.', 'TRUE — Non-current assets are about 62.6% of total assets in Year 2.'], '2/5', 72, 'full' ),
( '6.3', 'CASE 6.3.073', 'Defining Cost of Sales Over Time', 'Examine how an expenditure differs from an expense recognised in the income statement. Evaluate the following economic assertions:', ARRAY['Amounts paid to business development staff are excluded from cost of sales because selling activity takes place only after the goods have already been produced.', 'A paper mill is regarded as financing its papermaking machinery soundly only when they are covered mainly by short-term credit from pulp suppliers.', 'Production supplies consumed making the units sold are included within cost of sales because they are incurred directly in producing the goods that an automotive parts supplier has sold.', 'The wages of general office administrators are kept out of cost of sales because their duties are not directly involved in producing the goods that are sold.', 'Pay earned by courier and transport staff is treated as a distribution cost rather than cost of sales, since their work happens after production of the goods is complete.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — Selling costs occur after production and are excluded from cost of sales.', 'FALSE — Covering long-term assets mainly with current liabilities is considered risky, not sound financing.', 'TRUE — Direct production or acquisition costs are exactly what cost of sales is meant to capture.', 'TRUE — Cost of sales reflects direct production costs only, not general administrative wages.', 'TRUE — Distribution wages are incurred after production and are not part of cost of sales.'], '5/5', 73, 'full' ),
( '6.3', 'CASE 6.3.074', 'Defining Cost of Sales in Context', 'Consider a paper mill whose analysts are reading its financial statements cautiously before recommending whether to extend further credit. Evaluate the following economic assertions:', ARRAY['Amounts paid to sales commission earners are excluded from cost of sales because selling activity takes place only after the goods have already been produced.', 'The direct purchase cost of goods bought for resale are included within cost of sales because they are incurred directly in producing the goods that a commercial bakery chain has sold.', 'The wages of back-office support staff are kept out of cost of sales because their duties are not directly involved in producing the goods that are sold.', 'Pay earned by distribution centre employees is treated as a distribution cost rather than cost of sales, since their work happens after production of the goods is complete.', 'Materials directly consumed manufacturing the goods sold are included within cost of sales because they are incurred directly in producing the goods that a marine equipment supplier has sold.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Selling costs occur after production and are excluded from cost of sales.', 'TRUE — Direct production or acquisition costs are exactly what cost of sales is meant to capture.', 'TRUE — Cost of sales reflects direct production costs only, not general administrative wages.', 'TRUE — Distribution wages are incurred after production and are not part of cost of sales.', 'TRUE — Direct production or acquisition costs are exactly what cost of sales is meant to capture.'], '5/5', 74, 'full' ),
( '6.3', 'CASE 6.3.075', 'Liquidity From the Balance Sheet 75', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=229
Current liabilities=195
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 357 |
| Machinery | 159 |
| Office equipment | 49 |
| Patents, trademarks and licences | 46 |
| Inventory | 93 |
| Trade receivables | 98 |
| Cash and cash equivalents | 38 |
| Total assets | **840** |
| **EQUITY** | |
| Share capital | 145 |
| Retained earnings | 181 |
| Total equity | **326** |
| **LIABILITIES** | |
| Long-term bank loan | 270 |
| Bonds payable | 49 |
| Trade payables | 154 |
| Bank overdraft | 41 |
| Total liabilities | **514** |
| Total equity and liabilities | **840** |

Evaluate the following economic assertions:', ARRAY['The current ratio is below 0.88.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 0.81 times over.', 'The equity ratio is below 22.8%.', 'Working capital of €34 thousand is positive on this balance sheet.', 'The debt ratio exceeds 75.3%.'], ARRAY[false, false, false, true, false], ARRAY['FALSE — Current ratio ≈ 1.17.', 'FALSE — Acid-test ratio ≈ 0.70.', 'FALSE — Equity ratio ≈ 38.8%.', 'TRUE — Working capital = 34.', 'FALSE — Debt ratio ≈ 61.2%.'], '4/5', 75, 'full' ),
( '6.3', 'CASE 6.3.076', 'Combined Statement Extract 76', 'Consider the following combined extracts (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=400
Machinery=209
Inventory=184
Trade receivables=171
Cash and cash equivalents=76
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 400 |
| Machinery | 209 |
| Office equipment | 63 |
| Patents, trademarks and licences | 80 |
| Inventory | 184 |
| Trade receivables | 171 |
| Cash and cash equivalents | 76 |
| Total assets | **1183** |
| **EQUITY** | |
| Share capital | 246 |
| Retained earnings | 281 |
| Total equity | **527** |
| **LIABILITIES** | |
| Long-term bank loan | 331 |
| Bonds payable | 72 |
| Trade payables | 214 |
| Bank overdraft | 39 |
| Total liabilities | **656** |
| Total equity and liabilities | **1183** |

| Income statement extract (€ thousands) | Amount |
| --- | ---: |
| Operating result | 153 |

| Cash flow statement extract (€ thousands) | Amount |
| --- | ---: |
| Cash flow from operating activities | 142 |
| Cash flow from investing activities | (210) |
| Cash flow from financing activities | 42 |
| Cash and cash equivalents at the beginning of the year | 102 |

Evaluate the following economic assertions:', ARRAY['Return on equity, the operating result taken as a percentage of total equity, exceeds 32.1%.', 'Return on capital employed, the operating result taken relative to equity plus non-current liabilities, exceeds 19.4%.', 'Cash flow from operating activities amounts to less than 79.8% of the operating result, indicating profit is only partly backed by cash.', 'With an operating result of €153 thousand, return on capital employed is mainly useful when comparing similar businesses or the same business over time, not as a standalone absolute number.', 'With cash flow from operating activities of €142 thousand, cash flow from investing activities was an inflow this year.'], ARRAY[false, false, false, true, false], ARRAY['FALSE — Return on equity ≈ 29.0%.', 'FALSE — Return on capital employed ≈ 16.5%.', 'FALSE — Cash conversion ≈ 92.8% of the operating result.', 'TRUE — Comparative context matters for return on capital employed.', 'FALSE — Investing cash flow = -210.'], '4/5', 76, 'full' ),
( '6.3', 'CASE 6.3.077', 'Revenue and Operating Result Chart 77', 'Consider the following two-year statement of profit and loss (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Revenue and operating result"]]
Year 1 | Revenue=805 | Operating result=228
Year 2 | Revenue=928 | Operating result=261
[[/CHART]]

| Item (€ thousands) | Year 1 | Year 2 |
| --- | ---: | ---: |
| Revenue | 805 | 928 |
| Cost of sales | (497) | (573) |
| Gross profit | 308 | 355 |
| Distribution costs | (37) | (43) |
| General and administrative costs | (43) | (49) |
| Other operating result | 0 | (2) |
| Operating result | 228 | 261 |
| Finance costs | (18) | (23) |
| Finance costs – net | (13) | (21) |
| Profit before tax | 215 | 240 |
| Income taxes | (42) | (46) |
| Profit for the year | 173 | 194 |

Evaluate the following economic assertions:', ARRAY['Revenue grew by more than 11.7% between Year 1 and Year 2.', 'The operating result covers finance costs more than 5.93 times over in Year 1.', 'The operating margin, operating result taken as a share of revenue, exceeds 10.8% in Year 2.', 'The effective tax rate, income taxes taken as a share of profit before tax, is below 20.1% in Year 1.', 'The gross profit margin in Year 2 is exactly 38.3%.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Revenue changed by about 15.3% between the two years.', 'TRUE — Interest coverage in Year 1 ≈ 12.7 times.', 'TRUE — Operating margin in Year 2 ≈ 28.1%.', 'TRUE — Effective tax rate in Year 1 ≈ 19.5%.', 'TRUE — Gross margin in Year 2 ≈ 38.3%.'], '2/5', 77, 'full' ),
( '6.3', 'CASE 6.3.078', 'Comparative Balance Sheet Analysis 78', 'Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and total assets"]]
Year 1 | Equity=277 | Total assets=823
Year 2 | Equity=309 | Total assets=939
[[/CHART]]

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 301 | 356 |
| Machinery | 144 | 162 |
| Office equipment | 65 | 71 |
| Patents, trademarks and licences | 28 | 28 |
| Inventory | 94 | 110 |
| Trade receivables | 86 | 99 |
| Cash and cash equivalents | 105 | 113 |
| Total assets | **823** | **939** |
| **EQUITY** | | |
| Share capital | 121 | 121 |
| Retained earnings | 156 | 188 |
| Total equity | **277** | **309** |
| **LIABILITIES** | | |
| Long-term bank loan | 246 | 287 |
| Bonds payable | 59 | 68 |
| Trade payables | 203 | 230 |
| Bank overdraft | 38 | 45 |
| Total liabilities | **546** | **630** |
| Total equity and liabilities | **823** | **939** |

Evaluate the following economic assertions:', ARRAY['Inventory grew by more than 13.1% between Year 1 and Year 2.', 'Trade payables grew by more than 13.3% between Year 1 and Year 2.', 'Non-current liabilities amount to more than 96.9% of total equity in Year 1.', 'Non-current liabilities amount to less than 116.6% of total equity in Year 2.', 'Current liabilities are covered by current assets less than 1.44 times over in Year 2.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Inventory changed by about 17.0% between the two years.', 'TRUE — Trade payables changed by about 13.3% between the two years.', 'TRUE — Non-current liabilities are about 110.1% of equity in Year 1.', 'TRUE — Non-current liabilities are about 114.9% of equity in Year 2.', 'TRUE — Current ratio in Year 2 is about 1.17.'], '4/5', 78, 'full' ),
( '6.3', 'CASE 6.3.079', 'Asset Composition Chart 79', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=339
Current liabilities=265
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 306 |
| Machinery | 219 |
| Office equipment | 54 |
| Patents, trademarks and licences | 100 |
| Inventory | 109 |
| Trade receivables | 153 |
| Cash and cash equivalents | 77 |
| Total assets | **1018** |
| **EQUITY** | |
| Share capital | 122 |
| Retained earnings | 324 |
| Total equity | **446** |
| **LIABILITIES** | |
| Long-term bank loan | 262 |
| Bonds payable | 45 |
| Trade payables | 177 |
| Bank overdraft | 88 |
| Total liabilities | **572** |
| Total equity and liabilities | **1018** |

Evaluate the following economic assertions:', ARRAY['The current ratio is below 0.74.', 'Working capital of €74 thousand is positive on this balance sheet.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 0.69 times over.', 'The equity ratio is below 26.4%.', 'The debt ratio exceeds 46.4%.'], ARRAY[false, true, true, false, true], ARRAY['FALSE — Current ratio ≈ 1.28.', 'TRUE — Working capital = 74.', 'TRUE — Acid-test ratio ≈ 0.87.', 'FALSE — Equity ratio ≈ 43.8%.', 'TRUE — Debt ratio ≈ 56.2%.'], '3/5', 79, 'full' ),
( '6.3', 'CASE 6.3.080', 'Combined Statement Extract 80', 'Consider the following combined extracts (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=406
Machinery=150
Inventory=224
Trade receivables=125
Cash and cash equivalents=41
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 406 |
| Machinery | 150 |
| Office equipment | 52 |
| Patents, trademarks and licences | 30 |
| Inventory | 224 |
| Trade receivables | 125 |
| Cash and cash equivalents | 41 |
| Total assets | **1028** |
| **EQUITY** | |
| Share capital | 299 |
| Retained earnings | -14 |
| Total equity | **285** |
| **LIABILITIES** | |
| Long-term bank loan | 450 |
| Bonds payable | 62 |
| Trade payables | 163 |
| Bank overdraft | 68 |
| Total liabilities | **743** |
| Total equity and liabilities | **1028** |

| Income statement extract (€ thousands) | Amount |
| --- | ---: |
| Operating result | 213 |

| Cash flow statement extract (€ thousands) | Amount |
| --- | ---: |
| Cash flow from operating activities | 233 |
| Cash flow from investing activities | (232) |
| Cash flow from financing activities | 61 |
| Cash and cash equivalents at the beginning of the year | -21 |

Evaluate the following economic assertions:', ARRAY['Return on equity, the operating result taken as a percentage of total equity, exceeds 29.1%.', 'The net change in cash and cash equivalents equals exactly €84 thousand.', 'Return on capital employed, the operating result taken relative to equity plus non-current liabilities, exceeds 19.1%.', 'With an operating result of €213 thousand, return on capital employed is mainly useful when comparing similar businesses or the same business over time, not as a standalone absolute number.', 'Working capital equals exactly €159 thousand.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — Return on equity ≈ 74.7%.', 'FALSE — Net change = 62.', 'TRUE — Return on capital employed ≈ 26.7%.', 'TRUE — Comparative context matters for return on capital employed.', 'TRUE — Working capital = 159.'], '4/5', 80, 'full' ),
( '6.3', 'CASE 6.3.081', 'Share Price and Market Capitalisation 81', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=38
February | Price=38
March | Price=36
April | Price=36
May | Price=34
June | Price=41
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=48000
February | Volume=41000
March | Volume=20000
April | Volume=49000
May | Volume=41000
June | Volume=20000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 38 | 48,000 |
| February | 38 | 41,000 |
| March | 36 | 20,000 |
| April | 36 | 49,000 |
| May | 34 | 41,000 |
| June | 41 | 20,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 230 |
| Shares outstanding | 681,000 |
| Total shares traded (six months) | 219,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €25.4 million.', 'Earnings per share exceeds €0.26.', 'Total shares traded over six months exceed 20% of shares outstanding.', 'The closing share price rose by more than 14.6% from first to last month.', 'Market capitalisation rose by more than 18.5% over the period.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Market capitalisation ≈ €27.9 million.', 'TRUE — Earnings per share ≈ €0.34.', 'TRUE — Turnover ≈ 32.2% of shares outstanding.', 'FALSE — Price change ≈ 7.9%.', 'FALSE — €25.9m → €27.9m.'], '5/5', 81, 'full' ),
( '6.3', 'CASE 6.3.082', 'Listed Company Performance Charts 82', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=38
February | Price=37
March | Price=37
April | Price=37
May | Price=35
June | Price=41
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=66000
February | Volume=83000
March | Volume=21000
April | Volume=19000
May | Volume=77000
June | Volume=86000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 38 | 66,000 |
| February | 37 | 83,000 |
| March | 37 | 21,000 |
| April | 37 | 19,000 |
| May | 35 | 77,000 |
| June | 41 | 86,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 232 |
| Shares outstanding | 418,000 |
| Total shares traded (six months) | 352,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €14.9 million.', 'The closing share price rose by more than 26.9% from first to last month.', 'Total shares traded over six months exceed 11.3% of shares outstanding.', 'Market capitalisation rose by more than 16.9% over the period.', 'Highest closing price is more than 27.7% above the lowest.'], ARRAY[true, false, true, false, false], ARRAY['TRUE — Market capitalisation ≈ €17.1 million.', 'FALSE — Price change ≈ 7.9%.', 'TRUE — Turnover ≈ 84.2% of shares outstanding.', 'FALSE — €15.9m → €17.1m.', 'FALSE — Range €35–€41.'], '5/5', 82, 'full' ),
( '6.3', 'CASE 6.3.083', 'Earnings Per Share From Reported Figures 83', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=23
February | Price=24
March | Price=25
April | Price=25
May | Price=25
June | Price=29
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=40000
February | Volume=77000
March | Volume=61000
April | Volume=74000
May | Volume=65000
June | Volume=57000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 23 | 40,000 |
| February | 24 | 77,000 |
| March | 25 | 61,000 |
| April | 25 | 74,000 |
| May | 25 | 65,000 |
| June | 29 | 57,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 287 |
| Shares outstanding | 515,000 |
| Total shares traded (six months) | 374,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €13 million.', 'The closing share price rose by more than 28.2% from first to last month.', 'Market capitalisation rose by more than 29.5% over the period.', 'Highest closing price is more than 28.1% above the lowest.', 'Operating result is below €238 thousand.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Market capitalisation ≈ €14.9 million.', 'FALSE — Price change ≈ 26.1%.', 'FALSE — €11.8m → €14.9m.', 'FALSE — Range €23–€29.', 'FALSE — Operating result = 287.'], '2/5', 83, 'full' ),
( '6.3', 'CASE 6.3.084', 'Share Price and Market Capitalisation 84', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=35
February | Price=33
March | Price=32
April | Price=32
May | Price=28
June | Price=25
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=45000
February | Volume=88000
March | Volume=66000
April | Volume=47000
May | Volume=52000
June | Volume=80000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 35 | 45,000 |
| February | 33 | 88,000 |
| March | 32 | 66,000 |
| April | 32 | 47,000 |
| May | 28 | 52,000 |
| June | 25 | 80,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 192 |
| Shares outstanding | 752,000 |
| Total shares traded (six months) | 378,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 16.1% from first to last month.', 'Market capitalisation at the last month exceeds €16 million.', 'Market capitalisation rose by more than 24.1% over the period.', 'Total shares traded over six months exceed 36.3% of shares outstanding.', 'Peak monthly share turnover exceeds 73,354 shares.'], ARRAY[false, true, false, true, true], ARRAY['FALSE — Price change ≈ -28.6%.', 'TRUE — Market capitalisation ≈ €18.8 million.', 'FALSE — €26.3m → €18.8m.', 'TRUE — Turnover ≈ 50.3% of shares outstanding.', 'TRUE — Peak monthly volume = 88,000.'], '5/5', 84, 'full' ),
( '6.3', 'CASE 6.3.085', 'Listed Company Performance Charts 85', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=38
February | Price=37
March | Price=36
April | Price=36
May | Price=34
June | Price=43
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=40000
February | Volume=90000
March | Volume=39000
April | Volume=38000
May | Volume=20000
June | Volume=26000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 38 | 40,000 |
| February | 37 | 90,000 |
| March | 36 | 39,000 |
| April | 36 | 38,000 |
| May | 34 | 20,000 |
| June | 43 | 26,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 266 |
| Shares outstanding | 671,000 |
| Total shares traded (six months) | 253,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 19.5% from first to last month.', 'Market capitalisation at the last month exceeds €23.2 million.', 'Market capitalisation rose by more than 20% over the period.', 'Peak monthly share turnover exceeds 99,409 shares.', 'Operating result is below €239 thousand.'], ARRAY[false, true, false, false, false], ARRAY['FALSE — Price change ≈ 13.2%.', 'TRUE — Market capitalisation ≈ €28.9 million.', 'FALSE — €25.5m → €28.9m.', 'FALSE — Peak monthly volume = 90,000.', 'FALSE — Operating result = 266.'], '4/5', 85, 'full' ),
( '6.3', 'CASE 6.3.086', 'Earnings Per Share From Reported Figures 86', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=33
February | Price=32
March | Price=31
April | Price=29
May | Price=29
June | Price=27
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=67000
February | Volume=88000
March | Volume=68000
April | Volume=62000
May | Volume=77000
June | Volume=38000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 33 | 67,000 |
| February | 32 | 88,000 |
| March | 31 | 68,000 |
| April | 29 | 62,000 |
| May | 29 | 77,000 |
| June | 27 | 38,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 253 |
| Shares outstanding | 763,000 |
| Total shares traded (six months) | 400,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €16.5 million.', 'Total shares traded over six months exceed 12.5% of shares outstanding.', 'Shares outstanding equal 763,000.', 'Earnings per share is exactly €0.33.', 'With unchanged shares outstanding, rising market capitalisation means the share price rose.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Market capitalisation ≈ €20.6 million.', 'TRUE — Turnover ≈ 52.4% of shares outstanding.', 'TRUE — Shares outstanding = 763,000.', 'TRUE — Earnings per share ≈ €0.33.', 'TRUE — Market capitalisation = price × shares.'], '5/5', 86, 'full' ),
( '6.3', 'CASE 6.3.087', 'Share Price and Market Capitalisation 87', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=22
February | Price=23
March | Price=25
April | Price=27
May | Price=29
June | Price=31
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=22000
February | Volume=85000
March | Volume=40000
April | Volume=64000
May | Volume=35000
June | Volume=77000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 22 | 22,000 |
| February | 23 | 85,000 |
| March | 25 | 40,000 |
| April | 27 | 64,000 |
| May | 29 | 35,000 |
| June | 31 | 77,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 216 |
| Shares outstanding | 779,000 |
| Total shares traded (six months) | 323,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 27.9% from first to last month.', 'Market capitalisation at the last month exceeds €20 million.', 'Market capitalisation rose by more than 27.1% over the period.', 'Highest closing price is more than 33.2% above the lowest.', 'Total shares traded over six months exceed 38.3% of shares outstanding.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Price change ≈ 40.9%.', 'TRUE — Market capitalisation ≈ €24.1 million.', 'TRUE — €17.1m → €24.1m.', 'TRUE — Range €22–€31.', 'TRUE — Turnover ≈ 41.5% of shares outstanding.'], '3/5', 87, 'full' ),
( '6.3', 'CASE 6.3.088', 'Listed Company Performance Charts 88', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=30
February | Price=29
March | Price=30
April | Price=30
May | Price=29
June | Price=36
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=53000
February | Volume=63000
March | Volume=38000
April | Volume=53000
May | Volume=24000
June | Volume=54000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 30 | 53,000 |
| February | 29 | 63,000 |
| March | 30 | 38,000 |
| April | 30 | 53,000 |
| May | 29 | 24,000 |
| June | 36 | 54,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 214 |
| Shares outstanding | 640,000 |
| Total shares traded (six months) | 285,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation rose by more than 15.7% over the period.', 'Total shares traded over six months exceed 23.5% of shares outstanding.', 'Peak monthly share turnover exceeds 43,682 shares.', 'The closing share price rose by more than 26.4% from first to last month.', 'Shares outstanding equal 640,000.'], ARRAY[true, true, true, false, true], ARRAY['TRUE — €19.2m → €23.0m.', 'TRUE — Turnover ≈ 44.5% of shares outstanding.', 'TRUE — Peak monthly volume = 63,000.', 'FALSE — Price change ≈ 20.0%.', 'TRUE — Shares outstanding = 640,000.'], '5/5', 88, 'full' ),
( '6.3', 'CASE 6.3.089', 'Calculating Gross Profit in Practice', 'Examine why reading the balance sheet and income statement together gives a fuller picture than reading either alone. Evaluate the following economic assertions:', ARRAY['The balance between papermaking machinery and paper roll inventory on a paper mill''s statements has no bearing on whether the business is becoming more or less capital-intensive.', 'The wages of corporate finance staff are kept out of cost of sales because their duties are not directly involved in producing the goods that are sold.', 'A ceramics manufacturer is regarded as financing its ceramics kilns and moulding equipment soundly only when they are covered mainly by short-term credit from clay suppliers.', 'The balance between ceramics kilns and moulding equipment and finished ceramics stock on a ceramics manufacturer''s statements has no bearing on whether the business is becoming more or less capital-intensive.', 'Pay earned by outbound logistics coordinators is treated as a distribution cost rather than cost of sales, since their work happens after production of the goods is complete.'], ARRAY[false, true, false, false, true], ARRAY['FALSE — The asset mix directly reflects capital intensity; the balance is not irrelevant.', 'TRUE — Cost of sales reflects direct production costs only, not general administrative wages.', 'FALSE — Covering long-term assets mainly with current liabilities is considered risky, not sound financing.', 'FALSE — The asset mix directly reflects capital intensity; the balance is not irrelevant.', 'TRUE — Distribution wages are incurred after production and are not part of cost of sales.'], '3/5', 89, 'full' ),
( '6.3', 'CASE 6.3.090', 'Share Price and Market Capitalisation 90', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=42
February | Price=43
March | Price=47
April | Price=51
May | Price=55
June | Price=57
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=60000
February | Volume=67000
March | Volume=79000
April | Volume=40000
May | Volume=76000
June | Volume=90000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 42 | 60,000 |
| February | 43 | 67,000 |
| March | 47 | 79,000 |
| April | 51 | 40,000 |
| May | 55 | 76,000 |
| June | 57 | 90,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 280 |
| Shares outstanding | 739,000 |
| Total shares traded (six months) | 412,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 14.3% from first to last month.', 'Market capitalisation at the last month exceeds €35.9 million.', 'Market capitalisation rose by more than 9.1% over the period.', 'Total shares traded over six months exceed 33.5% of shares outstanding.', 'Highest closing price is more than 36.2% above the lowest.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Price change ≈ 35.7%.', 'TRUE — Market capitalisation ≈ €42.1 million.', 'TRUE — €31.0m → €42.1m.', 'TRUE — Turnover ≈ 55.8% of shares outstanding.', 'FALSE — Range €42–€57.'], '2/5', 90, 'full' ),
( '6.3', 'CASE 6.3.091', 'Listed Company Performance Charts 91', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=28
February | Price=29
March | Price=28
April | Price=29
May | Price=30
June | Price=35
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=41000
February | Volume=85000
March | Volume=76000
April | Volume=87000
May | Volume=53000
June | Volume=54000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 28 | 41,000 |
| February | 29 | 85,000 |
| March | 28 | 76,000 |
| April | 29 | 87,000 |
| May | 30 | 53,000 |
| June | 35 | 54,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 265 |
| Shares outstanding | 599,000 |
| Total shares traded (six months) | 396,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 32% from first to last month.', 'Market capitalisation at the last month exceeds €19.8 million.', 'Market capitalisation rose by more than 34.8% over the period.', 'Highest closing price is more than 13.1% above the lowest.', 'Total shares traded over six months exceed 17% of shares outstanding.'], ARRAY[false, true, false, true, true], ARRAY['FALSE — Price change ≈ 25.0%.', 'TRUE — Market capitalisation ≈ €21.0 million.', 'FALSE — €16.8m → €21.0m.', 'TRUE — Range €28–€35.', 'TRUE — Turnover ≈ 66.1% of shares outstanding.'], '5/5', 91, 'full' ),
( '6.3', 'CASE 6.3.092', 'Calculating Gross Profit Explained', 'Assess why a business''s balance sheet and income statement for a single year should be read cautiously rather than taken at face value. Evaluate the following economic assertions:', ARRAY['Amounts paid to telesales personnel are excluded from cost of sales because selling activity takes place only after the goods have already been produced.', 'Direct labour incurred producing the units sold are included within cost of sales because they are incurred directly in producing the goods that a joinery and furniture workshop has sold.', 'The wages of administrative assistants are kept out of cost of sales because their duties are not directly involved in producing the goods that are sold.', 'Pay earned by loading bay workers is treated as a distribution cost rather than cost of sales, since their work happens after production of the goods is complete.', 'An automotive parts supplier is regarded as financing its assembly-line robotics soundly only when they are covered mainly by a short-term bank overdraft.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Selling costs occur after production and are excluded from cost of sales.', 'TRUE — Direct production or acquisition costs are exactly what cost of sales is meant to capture.', 'TRUE — Cost of sales reflects direct production costs only, not general administrative wages.', 'TRUE — Distribution wages are incurred after production and are not part of cost of sales.', 'FALSE — Covering long-term assets mainly with current liabilities is considered risky, not sound financing.'], '5/5', 92, 'full' ),
( '6.3', 'CASE 6.3.093', 'Share Price and Market Capitalisation 93', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=25
February | Price=23
March | Price=22
April | Price=22
May | Price=21
June | Price=26
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=52000
February | Volume=37000
March | Volume=87000
April | Volume=67000
May | Volume=55000
June | Volume=84000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 25 | 52,000 |
| February | 23 | 37,000 |
| March | 22 | 87,000 |
| April | 22 | 67,000 |
| May | 21 | 55,000 |
| June | 26 | 84,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 258 |
| Shares outstanding | 731,000 |
| Total shares traded (six months) | 382,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €15.8 million.', 'The closing share price rose by more than 32.8% from first to last month.', 'Total shares traded over six months exceed 33% of shares outstanding.', 'Peak monthly share turnover exceeds 75,951 shares.', 'Shares outstanding equal 731,000.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — Market capitalisation ≈ €19.0 million.', 'FALSE — Price change ≈ 4.0%.', 'TRUE — Turnover ≈ 52.3% of shares outstanding.', 'TRUE — Peak monthly volume = 87,000.', 'TRUE — Shares outstanding = 731,000.'], '5/5', 93, 'full' ),
( '6.3', 'CASE 6.3.094', 'Calculating Gross Profit for Analysts', 'Assess how comparing several years of financial statements reveals trends that one year''s figures cannot show alone. Evaluate the following economic assertions:', ARRAY['Amounts paid to regional sales agents are excluded from cost of sales because selling activity takes place only after the goods have already been produced.', 'The balance between assembly-line robotics and spare automotive parts inventory on an automotive parts supplier''s statements has no bearing on whether the business is becoming more or less capital-intensive.', 'Factory-floor wages tied directly to output produced are included within cost of sales because they are incurred directly in producing the goods that a plastics moulding company has sold.', 'The wages of office management personnel are kept out of cost of sales because their duties are not directly involved in producing the goods that are sold.', 'A commercial bakery chain is regarded as financing its ovens and proofing equipment soundly only when they are covered mainly by short-term credit from ingredient suppliers.'], ARRAY[true, false, true, true, false], ARRAY['TRUE — Selling costs occur after production and are excluded from cost of sales.', 'FALSE — The asset mix directly reflects capital intensity; the balance is not irrelevant.', 'TRUE — Direct production or acquisition costs are exactly what cost of sales is meant to capture.', 'TRUE — Cost of sales reflects direct production costs only, not general administrative wages.', 'FALSE — Covering long-term assets mainly with current liabilities is considered risky, not sound financing.'], '2/5', 94, 'full' ),
( '6.3', 'CASE 6.3.095', 'Calculating Gross Profit Over Time', 'Consider a ceramics manufacturer whose analysts are benchmarking its financial statements against those of competing firms in the same region. Evaluate the following economic assertions:', ARRAY['The balance between ovens and proofing equipment and dough and ingredient stock on a commercial bakery chain''s statements has no bearing on whether the business is becoming more or less capital-intensive.', 'A marine equipment supplier is regarded as financing its dockside cranes and lifting gear soundly only when they are covered mainly by short-term credit from parts suppliers.', 'Pay earned by delivery fleet staff is treated as a distribution cost rather than cost of sales, since their work happens after production of the goods is complete.', 'Amounts paid to the commercial sales force are excluded from cost of sales because selling activity takes place only after the goods have already been produced.', 'The balance between dockside cranes and lifting gear and spare marine parts inventory on a marine equipment supplier''s statements has no bearing on whether the business is becoming more or less capital-intensive.'], ARRAY[false, false, true, true, false], ARRAY['FALSE — The asset mix directly reflects capital intensity; the balance is not irrelevant.', 'FALSE — Covering long-term assets mainly with current liabilities is considered risky, not sound financing.', 'TRUE — Distribution wages are incurred after production and are not part of cost of sales.', 'TRUE — Selling costs occur after production and are excluded from cost of sales.', 'FALSE — The asset mix directly reflects capital intensity; the balance is not irrelevant.'], '5/5', 95, 'full' ),
( '6.3', 'CASE 6.3.096', 'Share Price and Market Capitalisation 96', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=33
February | Price=37
March | Price=39
April | Price=39
May | Price=39
June | Price=40
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=58000
February | Volume=21000
March | Volume=28000
April | Volume=65000
May | Volume=41000
June | Volume=61000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 33 | 58,000 |
| February | 37 | 21,000 |
| March | 39 | 28,000 |
| April | 39 | 65,000 |
| May | 39 | 41,000 |
| June | 40 | 61,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 273 |
| Shares outstanding | 780,000 |
| Total shares traded (six months) | 274,000 |

Evaluate the following economic assertions:', ARRAY['Highest closing price is more than 25.5% above the lowest.', 'The closing share price rose by more than 9.6% from first to last month.', 'Market capitalisation at the last month exceeds €24.7 million.', 'Operating result is below €228 thousand.', 'Market capitalisation rose by more than 19.3% over the period.'], ARRAY[false, true, true, false, true], ARRAY['FALSE — Range €33–€40.', 'TRUE — Price change ≈ 21.2%.', 'TRUE — Market capitalisation ≈ €31.2 million.', 'FALSE — Operating result = 273.', 'TRUE — €25.7m → €31.2m.'], '3/5', 96, 'full' ),
( '6.3', 'CASE 6.3.097', 'Listed Company Performance Charts 97', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=19
February | Price=19
March | Price=19
April | Price=19
May | Price=19
June | Price=23
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=30000
February | Volume=52000
March | Volume=51000
April | Volume=35000
May | Volume=54000
June | Volume=80000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 19 | 30,000 |
| February | 19 | 52,000 |
| March | 19 | 51,000 |
| April | 19 | 35,000 |
| May | 19 | 54,000 |
| June | 23 | 80,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 265 |
| Shares outstanding | 760,000 |
| Total shares traded (six months) | 302,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €13.8 million.', 'The closing share price rose by more than 29.1% from first to last month.', 'Market capitalisation rose by more than 9% over the period.', 'Operating result is below €207 thousand.', 'Highest closing price is more than 14.8% above the lowest.'], ARRAY[true, false, true, false, true], ARRAY['TRUE — Market capitalisation ≈ €17.5 million.', 'FALSE — Price change ≈ 21.1%.', 'TRUE — €14.4m → €17.5m.', 'FALSE — Operating result = 265.', 'TRUE — Range €19–€23.'], '5/5', 97, 'full' ),
( '6.3', 'CASE 6.3.098', 'Earnings Per Share From Reported Figures 98', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=31
February | Price=31
March | Price=31
April | Price=30
May | Price=31
June | Price=38
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=46000
February | Volume=42000
March | Volume=25000
April | Volume=45000
May | Volume=54000
June | Volume=92000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 31 | 46,000 |
| February | 31 | 42,000 |
| March | 31 | 25,000 |
| April | 30 | 45,000 |
| May | 31 | 54,000 |
| June | 38 | 92,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 235 |
| Shares outstanding | 840,000 |
| Total shares traded (six months) | 304,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €24.8 million.', 'Earnings per share exceeds €0.22.', 'Total shares traded over six months exceed 20.5% of shares outstanding.', 'Shares outstanding equal 840,000.', 'Earnings per share is exactly €0.28.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Market capitalisation ≈ €31.9 million.', 'TRUE — Earnings per share ≈ €0.28.', 'TRUE — Turnover ≈ 36.2% of shares outstanding.', 'TRUE — Shares outstanding = 840,000.', 'TRUE — Earnings per share ≈ €0.28.'], '5/5', 98, 'full' ),
( '6.3', 'CASE 6.3.099', 'Calculating Gross Profit in Context', 'Assess how the balance between current and non-current assets signals how capital-intensive a business is. Evaluate the following economic assertions:', ARRAY['A joinery and furniture workshop is regarded as financing its joinery workshop machinery soundly only when they are covered mainly by short-term credit from timber suppliers.', 'The direct cost of goods acquired for resale are included within cost of sales because they are incurred directly in producing the goods that a dairy cooperative has sold.', 'The balance between joinery workshop machinery and unsold furniture stock on a joinery and furniture workshop''s statements has no bearing on whether the business is becoming more or less capital-intensive.', 'A plastics moulding company is regarded as financing its injection-moulding machinery soundly only when they are covered mainly by short-term credit from resin suppliers.', 'The balance between injection-moulding machinery and moulded component stock on a plastics moulding company''s statements has no bearing on whether the business is becoming more or less capital-intensive.'], ARRAY[false, true, false, false, false], ARRAY['FALSE — Covering long-term assets mainly with current liabilities is considered risky, not sound financing.', 'TRUE — Direct production or acquisition costs are exactly what cost of sales is meant to capture.', 'FALSE — The asset mix directly reflects capital intensity; the balance is not irrelevant.', 'FALSE — Covering long-term assets mainly with current liabilities is considered risky, not sound financing.', 'FALSE — The asset mix directly reflects capital intensity; the balance is not irrelevant.'], '3/5', 99, 'full' ),
( '6.3', 'CASE 6.3.100', 'Listed Company Performance Charts 100', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=38
February | Price=35
March | Price=33
April | Price=32
May | Price=32
June | Price=40
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=72000
February | Volume=25000
March | Volume=32000
April | Volume=45000
May | Volume=91000
June | Volume=82000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 38 | 72,000 |
| February | 35 | 25,000 |
| March | 33 | 32,000 |
| April | 32 | 45,000 |
| May | 32 | 91,000 |
| June | 40 | 82,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 309 |
| Shares outstanding | 451,000 |
| Total shares traded (six months) | 347,000 |

Evaluate the following economic assertions:', ARRAY['Earnings per share exceeds €0.58.', 'Market capitalisation rose by more than 18.9% over the period.', 'Highest closing price is more than 43.6% above the lowest.', 'Total shares traded over six months exceed 14.5% of shares outstanding.', 'Operating result is below €268 thousand.'], ARRAY[true, false, false, true, false], ARRAY['TRUE — Earnings per share ≈ €0.69.', 'FALSE — €17.1m → €18.0m.', 'FALSE — Range €32–€40.', 'TRUE — Turnover ≈ 76.9% of shares outstanding.', 'FALSE — Operating result = 309.'], '5/5', 100, 'full' ),
( '6.3', 'CASE 6.3.101', 'Understanding the Operating Result in Practice', 'Assess how the split between retained earnings and new share capital reveals the source of a business''s equity growth. Evaluate the following economic assertions:', ARRAY['A dairy cooperative is regarded as financing its chilling and pasteurising plant soundly only when they are covered mainly by short-term credit from feed suppliers.', 'The balance between chilling and pasteurising plant and dairy products awaiting delivery on a dairy cooperative''s statements has no bearing on whether the business is becoming more or less capital-intensive.', 'The wages of clerical support employees are kept out of cost of sales because their duties are not directly involved in producing the goods that are sold.', 'Pay earned by freight dispatch clerks is treated as a distribution cost rather than cost of sales, since their work happens after production of the goods is complete.', 'Amounts paid to customer account executives are excluded from cost of sales because selling activity takes place only after the goods have already been produced.'], ARRAY[false, false, true, true, true], ARRAY['FALSE — Covering long-term assets mainly with current liabilities is considered risky, not sound financing.', 'FALSE — The asset mix directly reflects capital intensity; the balance is not irrelevant.', 'TRUE — Cost of sales reflects direct production costs only, not general administrative wages.', 'TRUE — Distribution wages are incurred after production and are not part of cost of sales.', 'TRUE — Selling costs occur after production and are excluded from cost of sales.'], '5/5', 101, 'full' ),
( '6.3', 'CASE 6.3.102', 'Share Price and Market Capitalisation 102', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=37
February | Price=38
March | Price=36
April | Price=36
May | Price=34
June | Price=43
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=59000
February | Volume=38000
March | Volume=42000
April | Volume=82000
May | Volume=62000
June | Volume=95000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 37 | 59,000 |
| February | 38 | 38,000 |
| March | 36 | 42,000 |
| April | 36 | 82,000 |
| May | 34 | 62,000 |
| June | 43 | 95,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 282 |
| Shares outstanding | 512,000 |
| Total shares traded (six months) | 378,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €17.6 million.', 'Total shares traded over six months exceed 26% of shares outstanding.', 'Peak monthly share turnover exceeds 83,828 shares.', 'Shares outstanding equal 512,000.', 'The closing share price rose by more than 33.4% from first to last month.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Market capitalisation ≈ €22.0 million.', 'TRUE — Turnover ≈ 73.8% of shares outstanding.', 'TRUE — Peak monthly volume = 95,000.', 'TRUE — Shares outstanding = 512,000.', 'FALSE — Price change ≈ 16.2%.'], '4/5', 102, 'full' ),
( '6.3', 'CASE 6.3.103', 'Understanding the Operating Result Explained', 'Assess why non-current assets are best matched with equity and non-current liabilities rather than short-term credit. Evaluate the following economic assertions:', ARRAY['A mining equipment lessor is regarded as financing its heavy mining equipment held for hire soundly only when they are covered mainly by a short-term equipment rental payable.', 'The balance between heavy mining equipment held for hire and replacement parts inventory on a mining equipment lessor''s statements has no bearing on whether the business is becoming more or less capital-intensive.', 'Production-line materials consumed in manufacturing are included within cost of sales because they are incurred directly in producing the goods that a mining equipment lessor has sold.', 'The wages of head office coordinators are kept out of cost of sales because their duties are not directly involved in producing the goods that are sold.', 'A textile dyeing company is regarded as financing its dyeing vats and finishing lines soundly only when they are covered mainly by short-term credit from dye suppliers.'], ARRAY[false, false, true, true, false], ARRAY['FALSE — Covering long-term assets mainly with current liabilities is considered risky, not sound financing.', 'FALSE — The asset mix directly reflects capital intensity; the balance is not irrelevant.', 'TRUE — Direct production or acquisition costs are exactly what cost of sales is meant to capture.', 'TRUE — Cost of sales reflects direct production costs only, not general administrative wages.', 'FALSE — Covering long-term assets mainly with current liabilities is considered risky, not sound financing.'], '4/5', 103, 'full' ),
( '6.3', 'CASE 6.3.104', 'Earnings Per Share From Reported Figures 104', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=31
February | Price=32
March | Price=33
April | Price=35
May | Price=34
June | Price=39
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=72000
February | Volume=41000
March | Volume=42000
April | Volume=43000
May | Volume=57000
June | Volume=59000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 31 | 72,000 |
| February | 32 | 41,000 |
| March | 33 | 42,000 |
| April | 35 | 43,000 |
| May | 34 | 57,000 |
| June | 39 | 59,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 294 |
| Shares outstanding | 527,000 |
| Total shares traded (six months) | 314,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €19.1 million.', 'Market capitalisation rose by more than 18% over the period.', 'Shares outstanding equal 527,000.', 'Earnings per share is exactly €0.56.', 'The closing share price rose by more than 31% from first to last month.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Market capitalisation ≈ €20.6 million.', 'TRUE — €16.3m → €20.6m.', 'TRUE — Shares outstanding = 527,000.', 'TRUE — Earnings per share ≈ €0.56.', 'FALSE — Price change ≈ 25.8%.'], '5/5', 104, 'full' ),
( '6.3', 'CASE 6.3.105', 'Share Price and Market Capitalisation 105', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=36
February | Price=37
March | Price=38
April | Price=37
May | Price=39
June | Price=45
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=18000
February | Volume=75000
March | Volume=85000
April | Volume=82000
May | Volume=19000
June | Volume=64000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 36 | 18,000 |
| February | 37 | 75,000 |
| March | 38 | 85,000 |
| April | 37 | 82,000 |
| May | 39 | 19,000 |
| June | 45 | 64,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 242 |
| Shares outstanding | 409,000 |
| Total shares traded (six months) | 343,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation rose by more than 15.2% over the period.', 'Earnings per share exceeds €0.44.', 'Highest closing price is more than 18.6% above the lowest.', 'Peak monthly share turnover exceeds 95,451 shares.', 'Total shares traded over six months exceed 35.1% of shares outstanding.'], ARRAY[true, true, true, false, true], ARRAY['TRUE — €14.7m → €18.4m.', 'TRUE — Earnings per share ≈ €0.59.', 'TRUE — Range €36–€45.', 'FALSE — Peak monthly volume = 85,000.', 'TRUE — Turnover ≈ 83.9% of shares outstanding.'], '5/5', 105, 'full' ),
( '6.3', 'CASE 6.3.106', 'Listed Company Performance Charts 106', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=37
February | Price=35
March | Price=31
April | Price=28
May | Price=24
June | Price=22
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=37000
February | Volume=69000
March | Volume=56000
April | Volume=66000
May | Volume=28000
June | Volume=72000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 37 | 37,000 |
| February | 35 | 69,000 |
| March | 31 | 56,000 |
| April | 28 | 66,000 |
| May | 24 | 28,000 |
| June | 22 | 72,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 313 |
| Shares outstanding | 873,000 |
| Total shares traded (six months) | 328,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €17.7 million.', 'The closing share price rose by more than 16.3% from first to last month.', 'Highest closing price is more than 28% above the lowest.', 'Market capitalisation rose by more than 8.5% over the period.', 'Earnings per share is exactly €0.32.'], ARRAY[true, false, true, false, false], ARRAY['TRUE — Market capitalisation ≈ €19.2 million.', 'FALSE — Price change ≈ -40.5%.', 'TRUE — Range €22–€37.', 'FALSE — €32.3m → €19.2m.', 'FALSE — Earnings per share ≈ €0.36.'], '4/5', 106, 'full' ),
( '6.3', 'CASE 6.3.107', 'Understanding the Operating Result for Analysts', 'Consider a joinery and furniture workshop whose accountant is explaining the difference between cash spent on new machinery and the expense recorded in the income statement. Evaluate the following economic assertions:', ARRAY['The balance between dyeing vats and finishing lines and dyed fabric stock on a textile dyeing company''s statements has no bearing on whether the business is becoming more or less capital-intensive.', 'Pay earned by transport scheduling staff is treated as a distribution cost rather than cost of sales, since their work happens after production of the goods is complete.', 'An appliance repair network is regarded as financing its diagnostic and repair equipment soundly only when they are covered mainly by short-term credit from components suppliers.', 'The balance between diagnostic and repair equipment and spare repair components on an appliance repair network''s statements has no bearing on whether the business is becoming more or less capital-intensive.', 'Amounts paid to sales support staff are excluded from cost of sales because selling activity takes place only after the goods have already been produced.'], ARRAY[false, true, false, false, true], ARRAY['FALSE — The asset mix directly reflects capital intensity; the balance is not irrelevant.', 'TRUE — Distribution wages are incurred after production and are not part of cost of sales.', 'FALSE — Covering long-term assets mainly with current liabilities is considered risky, not sound financing.', 'FALSE — The asset mix directly reflects capital intensity; the balance is not irrelevant.', 'TRUE — Selling costs occur after production and are excluded from cost of sales.'], '3/5', 107, 'full' ),
( '6.3', 'CASE 6.3.108', 'Share Price and Market Capitalisation 108', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=28
February | Price=26
March | Price=24
April | Price=25
May | Price=23
June | Price=21
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=51000
February | Volume=73000
March | Volume=44000
April | Volume=27000
May | Volume=19000
June | Volume=45000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 28 | 51,000 |
| February | 26 | 73,000 |
| March | 24 | 44,000 |
| April | 25 | 27,000 |
| May | 23 | 19,000 |
| June | 21 | 45,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 263 |
| Shares outstanding | 431,000 |
| Total shares traded (six months) | 259,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 22.2% from first to last month.', 'Market capitalisation rose by more than 19.9% over the period.', 'Highest closing price is more than 35.9% above the lowest.', 'Operating result is below €220 thousand.', 'Earnings per share exceeds €0.46.'], ARRAY[false, false, false, false, true], ARRAY['FALSE — Price change ≈ -25.0%.', 'FALSE — €12.1m → €9.1m.', 'FALSE — Range €21–€28.', 'FALSE — Operating result = 263.', 'TRUE — Earnings per share ≈ €0.61.'], '2/5', 108, 'full' ),
( '6.3', 'CASE 6.3.109', 'Understanding the Operating Result Over Time', 'Assess how gross profit is calculated by deducting cost of sales from revenue before operating expenses are considered. Evaluate the following economic assertions:', ARRAY['A seed and fertiliser distributor is regarded as financing its seed processing plant soundly only when they are covered mainly by short-term credit from seed suppliers.', 'The balance between seed processing plant and seed and fertiliser stock on a seed and fertiliser distributor''s statements has no bearing on whether the business is becoming more or less capital-intensive.', 'Direct input costs of the manufacturing process are included within cost of sales because they are incurred directly in producing the goods that a textile dyeing company has sold.', 'A scaffolding rental firm is regarded as financing its scaffolding held for long-term hire soundly only when they are covered mainly by a short-term scaffolding materials payable.', 'The wages of general administrative staff are kept out of cost of sales because their duties are not directly involved in producing the goods that are sold.'], ARRAY[false, false, true, false, true], ARRAY['FALSE — Covering long-term assets mainly with current liabilities is considered risky, not sound financing.', 'FALSE — The asset mix directly reflects capital intensity; the balance is not irrelevant.', 'TRUE — Direct production or acquisition costs are exactly what cost of sales is meant to capture.', 'FALSE — Covering long-term assets mainly with current liabilities is considered risky, not sound financing.', 'TRUE — Cost of sales reflects direct production costs only, not general administrative wages.'], '2/5', 109, 'full' ),
( '6.3', 'CASE 6.3.110', 'Understanding the Operating Result in Context', 'Assess why the operating result, also called earnings before interest and taxes, isolates core trading performance from financing and tax effects. Evaluate the following economic assertions:', ARRAY['Pay earned by outbound packing staff is treated as a distribution cost rather than cost of sales, since their work happens after production of the goods is complete.', 'The balance between scaffolding held for long-term hire and scaffolding materials awaiting short-term hire on a scaffolding rental firm''s statements has no bearing on whether the business is becoming more or less capital-intensive.', 'Amounts paid to territory sales representatives are excluded from cost of sales because selling activity takes place only after the goods have already been produced.', 'An industrial cleaning company is regarded as financing its industrial cleaning machinery soundly only when they are covered mainly by short-term credit from chemical suppliers.', 'Direct labour hours spent producing the goods sold are included within cost of sales because they are incurred directly in producing the goods that an appliance repair network has sold.'], ARRAY[true, false, true, false, true], ARRAY['TRUE — Distribution wages are incurred after production and are not part of cost of sales.', 'FALSE — The asset mix directly reflects capital intensity; the balance is not irrelevant.', 'TRUE — Selling costs occur after production and are excluded from cost of sales.', 'FALSE — Covering long-term assets mainly with current liabilities is considered risky, not sound financing.', 'TRUE — Direct production or acquisition costs are exactly what cost of sales is meant to capture.'], '5/5', 110, 'full' ),
( '6.3', 'CASE 6.3.111', 'Share Price and Market Capitalisation 111', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=30
February | Price=28
March | Price=28
April | Price=27
May | Price=24
June | Price=21
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=19000
February | Volume=18000
March | Volume=70000
April | Volume=83000
May | Volume=76000
June | Volume=63000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 30 | 19,000 |
| February | 28 | 18,000 |
| March | 28 | 70,000 |
| April | 27 | 83,000 |
| May | 24 | 76,000 |
| June | 21 | 63,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 271 |
| Shares outstanding | 713,000 |
| Total shares traded (six months) | 329,000 |

Evaluate the following economic assertions:', ARRAY['Highest closing price is more than 39% above the lowest.', 'Total shares traded over six months exceed 10.1% of shares outstanding.', 'Market capitalisation rose by more than 34.3% over the period.', 'Peak monthly share turnover exceeds 80,490 shares.', 'Earnings per share is exactly €0.49.'], ARRAY[true, true, false, true, false], ARRAY['TRUE — Range €21–€30.', 'TRUE — Turnover ≈ 46.1% of shares outstanding.', 'FALSE — €21.4m → €15.0m.', 'TRUE — Peak monthly volume = 83,000.', 'FALSE — Earnings per share ≈ €0.38.'], '2/5', 111, 'full' ),
( '6.3', 'CASE 6.3.112', 'Listed Company Performance Charts 112', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=35
February | Price=35
March | Price=34
April | Price=34
May | Price=32
June | Price=29
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=54000
February | Volume=22000
March | Volume=68000
April | Volume=32000
May | Volume=52000
June | Volume=88000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 35 | 54,000 |
| February | 35 | 22,000 |
| March | 34 | 68,000 |
| April | 34 | 32,000 |
| May | 32 | 52,000 |
| June | 29 | 88,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 280 |
| Shares outstanding | 470,000 |
| Total shares traded (six months) | 316,000 |

Evaluate the following economic assertions:', ARRAY['Earnings per share exceeds €0.54.', 'Total shares traded over six months exceed 32.2% of shares outstanding.', 'Shares outstanding equal 470,000.', 'Operating result is below €299 thousand.', 'Earnings per share is exactly €0.60.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Earnings per share ≈ €0.60.', 'TRUE — Turnover ≈ 67.2% of shares outstanding.', 'TRUE — Shares outstanding = 470,000.', 'TRUE — Operating result = 280.', 'TRUE — Earnings per share ≈ €0.60.'], '5/5', 112, 'full' ),
( '6.3', 'CASE 6.3.113', 'Earnings Per Share From Reported Figures 113', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=19
February | Price=18
March | Price=16
April | Price=16
May | Price=14
June | Price=14
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=38000
February | Volume=87000
March | Volume=23000
April | Volume=62000
May | Volume=88000
June | Volume=55000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 19 | 38,000 |
| February | 18 | 87,000 |
| March | 16 | 23,000 |
| April | 16 | 62,000 |
| May | 14 | 88,000 |
| June | 14 | 55,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 225 |
| Shares outstanding | 688,000 |
| Total shares traded (six months) | 353,000 |

Evaluate the following economic assertions:', ARRAY['Highest closing price is more than 34.7% above the lowest.', 'Total shares traded over six months exceed 23.6% of shares outstanding.', 'Peak monthly share turnover exceeds 77,004 shares.', 'Shares outstanding equal 688,000.', 'The closing share price rose by more than 18.5% from first to last month.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Range €14–€19.', 'TRUE — Turnover ≈ 51.3% of shares outstanding.', 'TRUE — Peak monthly volume = 88,000.', 'TRUE — Shares outstanding = 688,000.', 'FALSE — Price change ≈ -26.3%.'], '3/5', 113, 'full' ),
( '6.3', 'CASE 6.3.114', 'Expenditure Versus Expense in Practice', 'Assess how an expenditure differs from an expense recognised in the income statement. Evaluate the following economic assertions:', ARRAY['The wages of office-based support personnel are kept out of cost of sales because their duties are not directly involved in producing the goods that are sold.', 'Pay earned by courier dispatch personnel is treated as a distribution cost rather than cost of sales, since their work happens after production of the goods is complete.', 'Amounts paid to the wholesale sales team are excluded from cost of sales because selling activity takes place only after the goods have already been produced.', 'Materials directly used assembling the units sold are included within cost of sales because they are incurred directly in producing the goods that a seed and fertiliser distributor has sold.', 'The direct cost of inventory purchased for resale are included within cost of sales because they are incurred directly in producing the goods that a scaffolding rental firm has sold.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Cost of sales reflects direct production costs only, not general administrative wages.', 'TRUE — Distribution wages are incurred after production and are not part of cost of sales.', 'TRUE — Selling costs occur after production and are excluded from cost of sales.', 'TRUE — Direct production or acquisition costs are exactly what cost of sales is meant to capture.', 'TRUE — Direct production or acquisition costs are exactly what cost of sales is meant to capture.'], '4/5', 114, 'full' ),
( '6.3', 'CASE 6.3.115', 'Listed Company Performance Charts 115', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=31
February | Price=29
March | Price=29
April | Price=28
May | Price=28
June | Price=33
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=48000
February | Volume=78000
March | Volume=79000
April | Volume=80000
May | Volume=82000
June | Volume=73000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 31 | 48,000 |
| February | 29 | 78,000 |
| March | 29 | 79,000 |
| April | 28 | 80,000 |
| May | 28 | 82,000 |
| June | 33 | 73,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 309 |
| Shares outstanding | 831,000 |
| Total shares traded (six months) | 440,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 8.1% from first to last month.', 'Market capitalisation at the last month exceeds €21.2 million.', 'Market capitalisation rose by more than 25.8% over the period.', 'Highest closing price is more than 20.8% above the lowest.', 'Total shares traded over six months exceed 23.8% of shares outstanding.'], ARRAY[false, true, false, false, true], ARRAY['FALSE — Price change ≈ 6.5%.', 'TRUE — Market capitalisation ≈ €27.4 million.', 'FALSE — €25.8m → €27.4m.', 'FALSE — Range €28–€33.', 'TRUE — Turnover ≈ 52.9% of shares outstanding.'], '5/5', 115, 'full' ),
( '6.3', 'CASE 6.3.116', 'Earnings Per Share From Reported Figures 116', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=28
February | Price=28
March | Price=29
April | Price=32
May | Price=32
June | Price=35
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=78000
February | Volume=39000
March | Volume=85000
April | Volume=49000
May | Volume=80000
June | Volume=33000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 28 | 78,000 |
| February | 28 | 39,000 |
| March | 29 | 85,000 |
| April | 32 | 49,000 |
| May | 32 | 80,000 |
| June | 35 | 33,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 265 |
| Shares outstanding | 790,000 |
| Total shares traded (six months) | 364,000 |

Evaluate the following economic assertions:', ARRAY['Earnings per share exceeds €0.3.', 'Total shares traded over six months exceed 16.5% of shares outstanding.', 'Peak monthly share turnover exceeds 63,134 shares.', 'Shares outstanding equal 790,000.', 'Earnings per share is exactly €0.34.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Earnings per share ≈ €0.34.', 'TRUE — Turnover ≈ 46.1% of shares outstanding.', 'TRUE — Peak monthly volume = 85,000.', 'TRUE — Shares outstanding = 790,000.', 'TRUE — Earnings per share ≈ €0.34.'], '2/5', 116, 'full' ),
( '6.3', 'CASE 6.3.117', 'Share Price and Market Capitalisation 117', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=36
February | Price=34
March | Price=35
April | Price=37
May | Price=36
June | Price=43
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=56000
February | Volume=53000
March | Volume=18000
April | Volume=48000
May | Volume=75000
June | Volume=87000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 36 | 56,000 |
| February | 34 | 53,000 |
| March | 35 | 18,000 |
| April | 37 | 48,000 |
| May | 36 | 75,000 |
| June | 43 | 87,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 309 |
| Shares outstanding | 801,000 |
| Total shares traded (six months) | 337,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 27.4% from first to last month.', 'Market capitalisation rose by more than 32.6% over the period.', 'Peak monthly share turnover exceeds 94,422 shares.', 'Operating result is below €219 thousand.', 'Market capitalisation at the last month exceeds €29.1 million.'], ARRAY[false, false, false, false, true], ARRAY['FALSE — Price change ≈ 19.4%.', 'FALSE — €28.8m → €34.4m.', 'FALSE — Peak monthly volume = 87,000.', 'FALSE — Operating result = 309.', 'TRUE — Market capitalisation ≈ €34.4 million.'], '4/5', 117, 'full' ),
( '6.3', 'CASE 6.3.118', 'Expenditure Versus Expense Explained', 'Consider a textile dyeing company whose board is discussing how the split between current and non-current assets has changed since a recent plant upgrade. Evaluate the following economic assertions:', ARRAY['The balance between industrial cleaning machinery and cleaning supplies inventory on an industrial cleaning company''s statements has no bearing on whether the business is becoming more or less capital-intensive.', 'The wages of head office administrators are included within cost of sales because every employee contributes in some way to the goods that are sold.', 'Pay earned by despatch and loading staff is included within cost of sales because moving finished goods is considered part of manufacturing them.', 'The wages of head office clerical staff are kept out of cost of sales because their duties are not directly involved in producing the goods that are sold.', 'Pay earned by distribution warehouse staff is treated as a distribution cost rather than cost of sales, since their work happens after production of the goods is complete.'], ARRAY[false, false, false, true, true], ARRAY['FALSE — The asset mix directly reflects capital intensity; the balance is not irrelevant.', 'FALSE — Only direct production costs belong in cost of sales; general contribution is not enough.', 'FALSE — Distribution activity occurs after production and belongs outside cost of sales.', 'TRUE — Cost of sales reflects direct production costs only, not general administrative wages.', 'TRUE — Distribution wages are incurred after production and are not part of cost of sales.'], '5/5', 118, 'full' ),
( '6.3', 'CASE 6.3.119', 'Earnings Per Share From Reported Figures 119', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=18
February | Price=17
March | Price=15
April | Price=14
May | Price=13
June | Price=12
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=35000
February | Volume=95000
March | Volume=90000
April | Volume=35000
May | Volume=81000
June | Volume=71000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 18 | 35,000 |
| February | 17 | 95,000 |
| March | 15 | 90,000 |
| April | 14 | 35,000 |
| May | 13 | 81,000 |
| June | 12 | 71,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 287 |
| Shares outstanding | 512,000 |
| Total shares traded (six months) | 407,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €4.8 million.', 'Highest closing price is more than 35.5% above the lowest.', 'Total shares traded over six months exceed 13.3% of shares outstanding.', 'The closing share price rose by more than 21.1% from first to last month.', 'Peak monthly share turnover exceeds 73,683 shares.'], ARRAY[true, true, true, false, true], ARRAY['TRUE — Market capitalisation ≈ €6.1 million.', 'TRUE — Range €12–€18.', 'TRUE — Turnover ≈ 79.5% of shares outstanding.', 'FALSE — Price change ≈ -33.3%.', 'TRUE — Peak monthly volume = 95,000.'], '5/5', 119, 'full' ),
( '6.3', 'CASE 6.3.120', 'Expenditure Versus Expense for Analysts', 'Assess why reading the balance sheet and income statement together gives a fuller picture than reading either alone. Evaluate the following economic assertions:', ARRAY['Amounts paid to account managers are included within cost of sales because generating sales is necessary before any revenue can be recognised.', 'Raw materials consumed directly in production are excluded from cost of sales because only costs paid in cash during the same month count toward it.', 'Amounts paid to key account managers are excluded from cost of sales because selling activity takes place only after the goods have already been produced.', 'The wages of payroll and accounts clerks are included within cost of sales because every employee contributes in some way to the goods that are sold.', 'Pay earned by outbound freight handlers is included within cost of sales because moving finished goods is considered part of manufacturing them.'], ARRAY[false, false, true, false, false], ARRAY['FALSE — Selling costs are operating expenses, not part of cost of sales, regardless of their necessity.', 'FALSE — Cost of sales includes direct production costs regardless of the timing of any related cash payment.', 'TRUE — Selling costs occur after production and are excluded from cost of sales.', 'FALSE — Only direct production costs belong in cost of sales; general contribution is not enough.', 'FALSE — Distribution activity occurs after production and belongs outside cost of sales.'], '5/5', 120, 'full' ),
( '6.3', 'CASE 6.3.121', 'Listed Company Performance Charts 121', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=24
February | Price=24
March | Price=22
April | Price=22
May | Price=20
June | Price=19
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=84000
February | Volume=27000
March | Volume=71000
April | Volume=63000
May | Volume=26000
June | Volume=75000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 24 | 84,000 |
| February | 24 | 27,000 |
| March | 22 | 71,000 |
| April | 22 | 63,000 |
| May | 20 | 26,000 |
| June | 19 | 75,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 279 |
| Shares outstanding | 453,000 |
| Total shares traded (six months) | 346,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 24.2% from first to last month.', 'Market capitalisation rose by more than 8.4% over the period.', 'Highest closing price is more than 32.1% above the lowest.', 'Market capitalisation at the last month exceeds €7.8 million.', 'Peak monthly share turnover exceeds 87,473 shares.'], ARRAY[false, false, false, true, false], ARRAY['FALSE — Price change ≈ -20.8%.', 'FALSE — €10.9m → €8.6m.', 'FALSE — Range €19–€24.', 'TRUE — Market capitalisation ≈ €8.6 million.', 'FALSE — Peak monthly volume = 84,000.'], '3/5', 121, 'full' ),
( '6.3', 'CASE 6.3.122', 'Earnings Per Share From Reported Figures 122', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=31
February | Price=34
March | Price=35
April | Price=36
May | Price=40
June | Price=40
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=80000
February | Volume=32000
March | Volume=26000
April | Volume=25000
May | Volume=57000
June | Volume=93000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 31 | 80,000 |
| February | 34 | 32,000 |
| March | 35 | 26,000 |
| April | 36 | 25,000 |
| May | 40 | 57,000 |
| June | 40 | 93,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 243 |
| Shares outstanding | 636,000 |
| Total shares traded (six months) | 313,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 13.9% from first to last month.', 'Market capitalisation rose by more than 22.3% over the period.', 'Highest closing price is more than 18.7% above the lowest.', 'Total shares traded over six months exceed 23.4% of shares outstanding.', 'Peak monthly share turnover exceeds 76,068 shares.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Price change ≈ 29.0%.', 'TRUE — €19.7m → €25.4m.', 'TRUE — Range €31–€40.', 'TRUE — Turnover ≈ 49.2% of shares outstanding.', 'TRUE — Peak monthly volume = 93,000.'], '2/5', 122, 'full' ),
( '6.3', 'CASE 6.3.123', 'Expenditure Versus Expense Over Time', 'Consider why a business''s balance sheet and income statement for a single year should be read cautiously rather than taken at face value. Evaluate the following economic assertions:', ARRAY['Production costs directly tied to units manufactured are included within cost of sales because they are incurred directly in producing the goods that an industrial cleaning company has sold.', 'When a beverage bottling company buys a bottling line, only the depreciation charged in each period becomes an expense in that period''s income statement, even though the full expenditure occurs at purchase.', 'Amounts paid to field sales representatives are included within cost of sales because generating sales is necessary before any revenue can be recognised.', 'Not every expenditure a beverage bottling company makes during a year shows up as an expense in that same year''s income statement.', 'Not every expenditure a joinery and furniture workshop makes during a year shows up as an expense in that same year''s income statement.'], ARRAY[true, true, false, true, true], ARRAY['TRUE — Direct production or acquisition costs are exactly what cost of sales is meant to capture.', 'TRUE — Capital expenditure becomes expense gradually, through depreciation, not all at once.', 'FALSE — Selling costs are operating expenses, not part of cost of sales, regardless of their necessity.', 'TRUE — Some expenditures are capitalised and expensed only gradually in future periods.', 'TRUE — Some expenditures are capitalised and expensed only gradually in future periods.'], '2/5', 123, 'full' ),
( '6.3', 'CASE 6.3.124', 'Expenditure Versus Expense in Context', 'Consider how comparing several years of financial statements reveals trends that one year''s figures cannot show alone. Evaluate the following economic assertions:', ARRAY['When a plastics moulding company buys an injection-moulding machine, only the depreciation charged in each period becomes an expense in that period''s income statement, even though the full expenditure occurs at purchase.', 'Direct factory labour on the production line are excluded from cost of sales because only costs paid in cash during the same month count toward it.', 'The wages of reception and clerical staff are included within cost of sales because every employee contributes in some way to the goods that are sold.', 'Pay earned by delivery drivers is included within cost of sales because moving finished goods is considered part of manufacturing them.', 'Amounts paid to the retail sales team are included within cost of sales because generating sales is necessary before any revenue can be recognised.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Capital expenditure becomes expense gradually, through depreciation, not all at once.', 'FALSE — Cost of sales includes direct production costs regardless of the timing of any related cash payment.', 'FALSE — Only direct production costs belong in cost of sales; general contribution is not enough.', 'FALSE — Distribution activity occurs after production and belongs outside cost of sales.', 'FALSE — Selling costs are operating expenses, not part of cost of sales, regardless of their necessity.'], '4/5', 124, 'full' ),
( '6.3', 'CASE 6.3.125', 'Earnings Per Share From Reported Figures 125', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=34
February | Price=32
March | Price=29
April | Price=26
May | Price=23
June | Price=20
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=57000
February | Volume=60000
March | Volume=49000
April | Volume=64000
May | Volume=60000
June | Volume=45000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 34 | 57,000 |
| February | 32 | 60,000 |
| March | 29 | 49,000 |
| April | 26 | 64,000 |
| May | 23 | 60,000 |
| June | 20 | 45,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 188 |
| Shares outstanding | 804,000 |
| Total shares traded (six months) | 335,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation rose by more than 19.6% over the period.', 'Market capitalisation at the last month exceeds €15 million.', 'Peak monthly share turnover exceeds 66,234 shares.', 'Highest closing price is more than 24.4% above the lowest.', 'Earnings per share is exactly €0.29.'], ARRAY[false, true, false, true, false], ARRAY['FALSE — €27.3m → €16.1m.', 'TRUE — Market capitalisation ≈ €16.1 million.', 'FALSE — Peak monthly volume = 64,000.', 'TRUE — Range €20–€34.', 'FALSE — Earnings per share ≈ €0.23.'], '4/5', 125, 'full' ),
( '6.4', 'CASE 6.4.001', 'Short Balance Sheet Extract 1', 'Consider the following short balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and liabilities"]]
Total equity=173
Total liabilities=147
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 200 |
| Inventory | 65 |
| Cash and cash equivalents | 55 |
| Total assets | **320** |
| **EQUITY** | |
| Share capital | 150 |
| Retained earnings | 23 |
| Total equity | **173** |
| **LIABILITIES** | |
| Long-term bank loan | 115 |
| Trade payables | 32 |
| Total liabilities | **147** |
| Total equity and liabilities | **320** |

Evaluate the following economic assertions:', ARRAY['The equity ratio is below 45.2%.', 'Working capital is positive on this extract.', 'Inventory of €65 thousand is correctly classified as a current asset.', 'The current ratio is exactly 3.75.', 'A published version of the extract above, showing total assets of €320 thousand, is an example of external financial reporting that a lender might study before extending credit.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — Equity ratio ≈ 54.1%.', 'TRUE — Working capital = 88.', 'TRUE — Inventory is always current.', 'TRUE — Current ratio ≈ 3.75.', 'TRUE — Financial accounting reports are prepared for external users such as lenders and shareholders.'], '3/5', 1, 'full' ),
( '6.4', 'CASE 6.4.002', 'Financial Accounting and External Users', 'Analyze why financial accounting and management accounting are prepared for different groups of users. Evaluate the following economic assertions:', ARRAY['Owners of a manufacturer are users outside day-to-day management, so they mainly rely on the business''s published financial accounting statements.', 'Owners of a manufacturer are internal users who receive management accounting reports every week, in the same way as its own managers.', 'Owners of a manufacturer normally receive formal accounting information no more often than once a year, when the financial accounting statements are published.', 'Owners of a manufacturer base their judgement mainly on informal notes prepared for its managers rather than on the published financial statements.', 'Managers of a manufacturer are not allowed to see any accounting information more often than the once-a-year published financial statements.'], ARRAY[true, false, true, false, false], ARRAY['TRUE — Owners sit outside daily management and depend on financial accounting rather than internal management reports.', 'FALSE — Owners are external users who rely on annual financial accounting, not weekly internal management reports.', 'TRUE — Financial accounting statements reach external users such as owners on the statutory annual cycle.', 'FALSE — Owners typically rely on published financial accounting statements, not informal internal notes.', 'FALSE — Internal users such as managers can receive management accounting far more often than the annual financial statements.'], '3/5', 2, 'full' ),
( '6.4', 'CASE 6.4.003', 'Short Depreciation Extract 3', 'A small business depreciates the following two fixed assets on a straight-line basis. Identity is not disclosed.

[[CHART type="bar" title="Annual depreciation"]]
Asset A=12667
Asset B=3800
[[/CHART]]

| Asset details | Amount |
| --- | ---: |
| Asset A | €76,000 purchase price, 6-year useful life, no residual value |
| Asset B | €23,000 purchase price, 5-year useful life, €4,000 residual value |

Evaluate the following economic assertions:', ARRAY['Asset B''s annual depreciation charge is exactly €3,800.', 'Residual value reduces the amount of Asset B''s cost that is spread as depreciation.', 'Asset A will be fully written down to nil residual value at the end of its useful life.', 'Asset A''s annual depreciation charge is exactly €14,073.', 'Because the extract above (the combined asset cost of €99,000 thousand) covers only one financial year, external users such as shareholders could not rely on it at all.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Asset B annual charge = €3,800.', 'TRUE — Depreciable amount = cost minus residual value.', 'TRUE — Asset A has no residual value.', 'FALSE — Asset A annual charge = €12,667.', 'FALSE — External users routinely rely on single-year financial statements, often alongside prior-year comparatives.'], '5/5', 3, 'full' ),
( '6.4', 'CASE 6.4.004', 'Management Accounting for Internal Users', 'Consider a retail chain whose employees hear informal updates on trading performance while tax authorities rely solely on its filed financial accounts. Evaluate the following economic assertions:', ARRAY['Management accounting reports prepared for managers of a manufacturer must use exactly the same statutory format as the published financial statements.', 'Lenders of a manufacturer are users outside day-to-day management, so they mainly rely on the business''s published financial accounting statements.', 'Lenders of a manufacturer normally receive formal accounting information no more often than once a year, when the financial accounting statements are published.', 'Employees of a manufacturer are not allowed to see any accounting information more often than the once-a-year published financial statements.', 'Managers of a manufacturer work inside the business and can be given management accounting reports designed around their own questions.'], ARRAY[false, true, true, false, true], ARRAY['FALSE — Management accounting for internal users such as managers is not tied to the statutory format used for financial accounting.', 'TRUE — Lenders sit outside daily management and depend on financial accounting rather than internal management reports.', 'TRUE — Financial accounting statements reach external users such as lenders on the statutory annual cycle.', 'FALSE — Internal users such as employees can receive management accounting far more often than the annual financial statements.', 'TRUE — Managers are internal users who can receive management accounting tailored to their needs.'], '5/5', 4, 'full' ),
( '6.4', 'CASE 6.4.005', 'Owners Weighing Return Against Risk', 'Analyze why managers and employees are generally classified as internal users of accounting information. Evaluate the following economic assertions:', ARRAY['Management accounting reports prepared for employees of a manufacturer must use exactly the same statutory format as the published financial statements.', 'Managers of a manufacturer can be supplied with management accounting figures weekly or monthly, well before the annual financial accounting statements are finalised.', 'Reports prepared for managers of a manufacturer can be laid out however suits the decision at hand, unlike the standardised format required of financial accounting statements.', 'Employees of a manufacturer work inside the business and can be given management accounting reports designed around their own questions.', 'Owners of a manufacturer look at accounting information mainly to judge the return earned on the capital they have invested.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — Management accounting for internal users such as employees is not tied to the statutory format used for financial accounting.', 'TRUE — Management accounting can reach internal users such as managers far more frequently than annual financial accounting.', 'TRUE — Management accounting for internal users such as managers is flexible in format, unlike statutory financial accounting.', 'TRUE — Employees are internal users who can receive management accounting tailored to their needs.', 'TRUE — Owners focus on the return earned on the capital they have invested when they use accounting information.'], '2/5', 5, 'full' ),
( '6.4', 'CASE 6.4.006', 'Liquidity From the Balance Sheet 6', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=409
Current liabilities=205
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 292 |
| Machinery | 176 |
| Office equipment | 42 |
| Patents, trademarks and licences | 45 |
| Inventory | 192 |
| Trade receivables | 115 |
| Cash and cash equivalents | 102 |
| Total assets | **964** |
| **EQUITY** | |
| Share capital | 149 |
| Retained earnings | 116 |
| Total equity | **265** |
| **LIABILITIES** | |
| Long-term bank loan | 436 |
| Bonds payable | 58 |
| Trade payables | 170 |
| Bank overdraft | 35 |
| Total liabilities | **699** |
| Total equity and liabilities | **964** |

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.34.', 'Working capital of €204 thousand is positive on this balance sheet.', 'The debt ratio exceeds 63.6%.', 'The equity ratio is below 20%.', 'Inventory make up more than 32.3% of current assets.'], ARRAY[true, true, true, false, true], ARRAY['TRUE — Current ratio ≈ 2.00.', 'TRUE — Working capital = 204.', 'TRUE — Debt ratio ≈ 72.5%.', 'FALSE — Equity ratio ≈ 27.5%.', 'TRUE — Inventory are about 46.9% of current assets.'], '2/5', 6, 'full' ),
( '6.4', 'CASE 6.4.007', 'Lenders and Repayment Capacity', 'Review why owners weigh the return on their investment against the risk they are taking. Evaluate the following economic assertions:', ARRAY['Lenders of a manufacturer look at accounting information mainly to judge whether the business will be able to repay what it owes.', 'Tax authorities of a manufacturer look at accounting information mainly to judge how much tax is due on the business''s profit.', 'Investors of a manufacturer look at accounting information mainly to judge the likely return and risk before committing further capital.', 'Managers of a manufacturer look at accounting information mainly to judge controlling costs and choosing between courses of action.', 'Employees of a manufacturer look at accounting information mainly to judge how secure their jobs and future pay are likely to be.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Lenders focus on whether the business will be able to repay what it owes when they use accounting information.', 'TRUE — Tax authorities focus on how much tax is due on the business''s profit when they use accounting information.', 'TRUE — Investors focus on the likely return and risk before committing further capital when they use accounting information.', 'TRUE — Managers focus on controlling costs and choosing between courses of action when they use accounting information.', 'TRUE — Employees focus on how secure their jobs and future pay are likely to be when they use accounting information.'], '5/5', 7, 'full' ),
( '6.4', 'CASE 6.4.008', 'Short Balance Sheet Extract 8', 'Consider the following short balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and liabilities"]]
Total equity=290
Total liabilities=221
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 348 |
| Inventory | 116 |
| Cash and cash equivalents | 47 |
| Total assets | **511** |
| **EQUITY** | |
| Share capital | 118 |
| Retained earnings | 172 |
| Total equity | **290** |
| **LIABILITIES** | |
| Long-term bank loan | 172 |
| Trade payables | 49 |
| Total liabilities | **221** |
| Total equity and liabilities | **511** |

Evaluate the following economic assertions:', ARRAY['Inventory of €116 thousand is correctly classified as a current asset.', 'A published version of the extract above, showing total assets of €511 thousand, is an example of external financial reporting that a lender might study before extending credit.', 'An independent audit of the extract above, including the total assets of €511 thousand, aims to give reasonable assurance that the figures are free from material misstatement, not an absolute guarantee.', 'Because the extract above discloses total assets of €511 thousand to outside parties, it is best described as financial accounting rather than management accounting.', 'An auditor reviewing the extract above, including total assets of €511 thousand, is responsible for forming an opinion on the figures, not for guaranteeing the business will remain profitable.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Inventory is always current.', 'TRUE — Financial accounting reports are prepared for external users such as lenders and shareholders.', 'TRUE — Audits provide reasonable, not absolute, assurance.', 'TRUE — Reports aimed at external parties fall under financial accounting.', 'TRUE — Audit opinions relate to the fairness of the figures, not to future business performance.'], '2/5', 8, 'full' ),
( '6.4', 'CASE 6.4.009', 'Short Depreciation Extract 9', 'A small business depreciates the following two fixed assets on a straight-line basis. Identity is not disclosed.

[[CHART type="bar" title="Annual depreciation"]]
Asset A=9286
Asset B=4200
[[/CHART]]

| Asset details | Amount |
| --- | ---: |
| Asset A | €65,000 purchase price, 7-year useful life, no residual value |
| Asset B | €24,000 purchase price, 5-year useful life, €3,000 residual value |

Evaluate the following economic assertions:', ARRAY['Asset A''s annual depreciation charge is exactly €9,286.', 'Asset A''s annual depreciation charge is more than 29.9% higher than Asset B''s annual depreciation charge.', 'A published version of the extract above, showing the combined asset cost of €89,000 thousand, is an example of external financial reporting that a lender might study before extending credit.', 'An independent audit of the extract above, including the the combined asset cost of €89,000 thousand, aims to give reasonable assurance that the figures are free from material misstatement, not an absolute guarantee.', 'Because the extract above discloses the combined asset cost of €89,000 thousand to outside parties, it is best described as financial accounting rather than management accounting.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Asset A annual charge = €9,286.', 'TRUE — Asset A ≈ €9,286 a year versus Asset B ≈ €4,200 a year.', 'TRUE — Financial accounting reports are prepared for external users such as lenders and shareholders.', 'TRUE — Audits provide reasonable, not absolute, assurance.', 'TRUE — Reports aimed at external parties fall under financial accounting.'], '5/5', 9, 'full' ),
( '6.4', 'CASE 6.4.010', 'Asset Composition Chart 10', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=356
Current liabilities=223
[[/CHART]]

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

Evaluate the following economic assertions:', ARRAY['Working capital of €133 thousand is positive on this balance sheet.', 'The debt ratio exceeds 56%.', 'Trade receivables make up less than 48.5% of current assets.', 'Cash and cash equivalents make up more than 23.1% of current assets.', 'Inventory of €156 thousand is correctly classified as a current asset rather than a non-current intangible asset.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Working capital = 133.', 'TRUE — Debt ratio ≈ 59.5%.', 'TRUE — Trade receivables are about 22.8% of current assets.', 'TRUE — Cash and cash equivalents are about 33.4% of current assets.', 'TRUE — Inventory is always a current asset.'], '2/5', 10, 'full' ),
( '6.4', 'CASE 6.4.011', 'Short Balance Sheet Extract 11', 'Consider the following short balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and liabilities"]]
Total equity=319
Total liabilities=198
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 347 |
| Inventory | 116 |
| Cash and cash equivalents | 54 |
| Total assets | **517** |
| **EQUITY** | |
| Share capital | 94 |
| Retained earnings | 225 |
| Total equity | **319** |
| **LIABILITIES** | |
| Long-term bank loan | 120 |
| Trade payables | 78 |
| Total liabilities | **198** |
| Total equity and liabilities | **517** |

Evaluate the following economic assertions:', ARRAY['The equity ratio is below 29.8%.', 'The long-term bank loan of €120 thousand is correctly classified within equity.', 'The current ratio is exactly 2.18.', 'Because the extract above (total assets of €517 thousand) covers only one financial year, external users such as shareholders could not rely on it at all.', 'Internal management reports covering the same period as the extract above (total assets of €517 thousand) must follow the identical statutory format shown here.'], ARRAY[false, false, true, false, false], ARRAY['FALSE — Equity ratio ≈ 61.7%.', 'FALSE — A loan is a liability, never equity.', 'TRUE — Current ratio ≈ 2.18.', 'FALSE — External users routinely rely on single-year financial statements, often alongside prior-year comparatives.', 'FALSE — Management accounting reports are flexible and internal; they are not bound by the statutory format of published financial statements.'], '5/5', 11, 'full' ),
( '6.4', 'CASE 6.4.012', 'Tax Authorities and Filed Accounts', 'Analyze why lenders focus on a business''s ability to repay what it owes. Evaluate the following economic assertions:', ARRAY['Owners of a manufacturer have no interest in the return earned on the capital they have invested when they look at accounting information.', 'Lenders of a manufacturer have no interest in whether the business will be able to repay what it owes when they look at accounting information.', 'Owners of a retailer are users outside day-to-day management, so they mainly rely on the business''s published financial accounting statements.', 'Owners of a retailer normally receive formal accounting information no more often than once a year, when the financial accounting statements are published.', 'Tax authorities of a manufacturer have no interest in how much tax is due on the business''s profit when they look at accounting information.'], ARRAY[false, false, true, true, false], ARRAY['FALSE — Owners are typically concerned with the return earned on the capital they have invested.', 'FALSE — Lenders are typically concerned with whether the business will be able to repay what it owes.', 'TRUE — Owners sit outside daily management and depend on financial accounting rather than internal management reports.', 'TRUE — Financial accounting statements reach external users such as owners on the statutory annual cycle.', 'FALSE — Tax authorities are typically concerned with how much tax is due on the business''s profit.'], '2/5', 12, 'full' ),
( '6.4', 'CASE 6.4.013', 'Short Depreciation Extract 13', 'A small business depreciates the following two fixed assets on a straight-line basis. Identity is not disclosed.

[[CHART type="bar" title="Annual depreciation"]]
Asset A=9250
Asset B=4400
[[/CHART]]

| Asset details | Amount |
| --- | ---: |
| Asset A | €74,000 purchase price, 8-year useful life, no residual value |
| Asset B | €24,000 purchase price, 5-year useful life, €2,000 residual value |

Evaluate the following economic assertions:', ARRAY['Asset A''s annual depreciation charge is exactly €8,722.', 'Because the extract above (the combined asset cost of €98,000 thousand) covers only one financial year, external users such as shareholders could not rely on it at all.', 'Asset B''s annual depreciation charge is exactly €4,400.', 'Internal management reports covering the same period as the extract above (the combined asset cost of €98,000 thousand) must follow the identical statutory format shown here.', 'The the combined asset cost of €98,000 thousand shown above would never be disclosed to any party outside the business under any circumstances.'], ARRAY[false, false, true, false, false], ARRAY['FALSE — Asset A annual charge = €9,250.', 'FALSE — External users routinely rely on single-year financial statements, often alongside prior-year comparatives.', 'TRUE — Asset B annual charge = €4,400.', 'FALSE — Management accounting reports are flexible and internal; they are not bound by the statutory format of published financial statements.', 'FALSE — Figures such as this are routinely published for external users like tax authorities and shareholders.'], '5/5', 13, 'full' ),
( '6.4', 'CASE 6.4.014', 'Balance Sheet Structure Review 14', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=467
Current liabilities=263
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 510 |
| Machinery | 167 |
| Office equipment | 75 |
| Patents, trademarks and licences | 94 |
| Inventory | 263 |
| Trade receivables | 166 |
| Cash and cash equivalents | 38 |
| Total assets | **1313** |
| **EQUITY** | |
| Share capital | 204 |
| Retained earnings | 419 |
| Total equity | **623** |
| **LIABILITIES** | |
| Long-term bank loan | 361 |
| Bonds payable | 66 |
| Trade payables | 237 |
| Bank overdraft | 26 |
| Total liabilities | **690** |
| Total equity and liabilities | **1313** |

Evaluate the following economic assertions:', ARRAY['The equity ratio is below 33.6%.', 'The debt ratio exceeds 47.9%.', 'Buildings make up more than 53% of total assets.', 'Inventory make up more than 54% of current assets.', 'The combined total of equity and non-current liabilities exceeds non-current assets by more than 9.1%.'], ARRAY[false, true, false, true, true], ARRAY['FALSE — Equity ratio ≈ 47.4%.', 'TRUE — Debt ratio ≈ 52.6%.', 'FALSE — Buildings are about 38.8% of total assets.', 'TRUE — Inventory are about 56.3% of current assets.', 'TRUE — Long-term financing covers non-current assets by about 24.1%.'], '3/5', 14, 'full' ),
( '6.4', 'CASE 6.4.015', 'Short Balance Sheet Extract 15', 'Consider the following short balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and liabilities"]]
Total equity=279
Total liabilities=137
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 255 |
| Inventory | 85 |
| Cash and cash equivalents | 76 |
| Total assets | **416** |
| **EQUITY** | |
| Share capital | 162 |
| Retained earnings | 117 |
| Total equity | **279** |
| **LIABILITIES** | |
| Long-term bank loan | 101 |
| Trade payables | 36 |
| Total liabilities | **137** |
| Total equity and liabilities | **416** |

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.3.', 'Inventory of €85 thousand is correctly classified as a current asset.', 'The equity ratio is below 25.2%.', 'The current ratio is exactly 4.47.', 'The long-term bank loan of €101 thousand is correctly classified within equity.'], ARRAY[true, true, false, true, false], ARRAY['TRUE — Current ratio ≈ 4.47.', 'TRUE — Inventory is always current.', 'FALSE — Equity ratio ≈ 67.1%.', 'TRUE — Current ratio ≈ 4.47.', 'FALSE — A loan is a liability, never equity.'], '4/5', 15, 'full' ),
( '6.4', 'CASE 6.4.016', 'Short Depreciation Extract 16', 'A small business depreciates the following two fixed assets on a straight-line basis. Identity is not disclosed.

[[CHART type="bar" title="Annual depreciation"]]
Asset A=9750
Asset B=7000
[[/CHART]]

| Asset details | Amount |
| --- | ---: |
| Asset A | €78,000 purchase price, 8-year useful life, no residual value |
| Asset B | €39,000 purchase price, 5-year useful life, €4,000 residual value |

Evaluate the following economic assertions:', ARRAY['Because the extract above (the combined asset cost of €117,000 thousand) covers only one financial year, external users such as shareholders could not rely on it at all.', 'Asset A''s annual depreciation charge is exactly €9,750.', 'Asset B''s annual depreciation charge is exactly €7,000.', 'Asset A''s annual depreciation charge is more than 32.4% higher than Asset B''s annual depreciation charge.', 'A published version of the extract above, showing the combined asset cost of €117,000 thousand, is an example of external financial reporting that a lender might study before extending credit.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — External users routinely rely on single-year financial statements, often alongside prior-year comparatives.', 'TRUE — Asset A annual charge = €9,750.', 'TRUE — Asset B annual charge = €7,000.', 'TRUE — Asset A ≈ €9,750 a year versus Asset B ≈ €7,000 a year.', 'TRUE — Financial accounting reports are prepared for external users such as lenders and shareholders.'], '5/5', 16, 'full' ),
( '6.4', 'CASE 6.4.017', 'Balance Sheet Structure Review 17', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=335
Current liabilities=252
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 480 |
| Machinery | 214 |
| Office equipment | 38 |
| Patents, trademarks and licences | 65 |
| Inventory | 82 |
| Trade receivables | 161 |
| Cash and cash equivalents | 92 |
| Total assets | **1132** |
| **EQUITY** | |
| Share capital | 239 |
| Retained earnings | 279 |
| Total equity | **518** |
| **LIABILITIES** | |
| Long-term bank loan | 314 |
| Bonds payable | 48 |
| Trade payables | 227 |
| Bank overdraft | 25 |
| Total liabilities | **614** |
| Total equity and liabilities | **1132** |

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.14.', 'The current ratio is below 0.83.', 'Working capital of €83 thousand is positive on this balance sheet.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 1.17 times over.', 'Buildings make up more than 39.3% of total assets.'], ARRAY[true, false, true, false, true], ARRAY['TRUE — Current ratio ≈ 1.33.', 'FALSE — Current ratio ≈ 1.33.', 'TRUE — Working capital = 83.', 'FALSE — Acid-test ratio ≈ 1.00.', 'TRUE — Buildings are about 42.4% of total assets.'], '5/5', 17, 'full' ),
( '6.4', 'CASE 6.4.018', 'Short Balance Sheet Extract 18', 'Consider the following short balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and liabilities"]]
Total equity=288
Total liabilities=216
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 312 |
| Inventory | 145 |
| Cash and cash equivalents | 47 |
| Total assets | **504** |
| **EQUITY** | |
| Share capital | 118 |
| Retained earnings | 170 |
| Total equity | **288** |
| **LIABILITIES** | |
| Long-term bank loan | 144 |
| Trade payables | 72 |
| Total liabilities | **216** |
| Total equity and liabilities | **504** |

Evaluate the following economic assertions:', ARRAY['Inventory of €145 thousand is correctly classified as a current asset.', 'The equity ratio is below 31.3%.', 'The long-term bank loan of €144 thousand is correctly classified within equity.', 'Because the extract above (total assets of €504 thousand) covers only one financial year, external users such as shareholders could not rely on it at all.', 'The current ratio is exactly 2.67.'], ARRAY[true, false, false, false, true], ARRAY['TRUE — Inventory is always current.', 'FALSE — Equity ratio ≈ 57.1%.', 'FALSE — A loan is a liability, never equity.', 'FALSE — External users routinely rely on single-year financial statements, often alongside prior-year comparatives.', 'TRUE — Current ratio ≈ 2.67.'], '5/5', 18, 'full' ),
( '6.4', 'CASE 6.4.019', 'Investors and Published Statements', 'Consider a health-care provider whose employees ask about job security after an internal trading update while lenders study its audited balance sheet. Evaluate the following economic assertions:', ARRAY['Lenders of a retailer are users outside day-to-day management, so they mainly rely on the business''s published financial accounting statements.', 'Lenders of a retailer normally receive formal accounting information no more often than once a year, when the financial accounting statements are published.', 'Managers of a retailer work inside the business and can be given management accounting reports designed around their own questions.', 'Managers of a retailer can be supplied with management accounting figures weekly or monthly, well before the annual financial accounting statements are finalised.', 'Reports prepared for managers of a retailer can be laid out however suits the decision at hand, unlike the standardised format required of financial accounting statements.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Lenders sit outside daily management and depend on financial accounting rather than internal management reports.', 'TRUE — Financial accounting statements reach external users such as lenders on the statutory annual cycle.', 'TRUE — Managers are internal users who can receive management accounting tailored to their needs.', 'TRUE — Management accounting can reach internal users such as managers far more frequently than annual financial accounting.', 'TRUE — Management accounting for internal users such as managers is flexible in format, unlike statutory financial accounting.'], '4/5', 19, 'full' ),
( '6.4', 'CASE 6.4.020', 'Short Depreciation Extract 20', 'A small business depreciates the following two fixed assets on a straight-line basis. Identity is not disclosed.

[[CHART type="bar" title="Annual depreciation"]]
Asset A=22500
Asset B=4000
[[/CHART]]

| Asset details | Amount |
| --- | ---: |
| Asset A | €90,000 purchase price, 4-year useful life, no residual value |
| Asset B | €24,000 purchase price, 5-year useful life, €4,000 residual value |

Evaluate the following economic assertions:', ARRAY['Asset B''s annual depreciation charge is exactly €5,303.', 'Asset A''s annual depreciation charge is exactly €22,500.', 'Asset A''s annual depreciation charge is more than 17.2% higher than Asset B''s annual depreciation charge.', 'A published version of the extract above, showing the combined asset cost of €114,000 thousand, is an example of external financial reporting that a lender might study before extending credit.', 'Because the extract above (the combined asset cost of €114,000 thousand) covers only one financial year, external users such as shareholders could not rely on it at all.'], ARRAY[false, true, true, true, false], ARRAY['FALSE — Asset B annual charge = €4,000.', 'TRUE — Asset A annual charge = €22,500.', 'TRUE — Asset A ≈ €22,500 a year versus Asset B ≈ €4,000 a year.', 'TRUE — Financial accounting reports are prepared for external users such as lenders and shareholders.', 'FALSE — External users routinely rely on single-year financial statements, often alongside prior-year comparatives.'], '2/5', 20, 'full' ),
( '6.4', 'CASE 6.4.021', 'Managers Controlling Costs Internally', 'Analyze why investors study published financial statements before committing further capital. Evaluate the following economic assertions:', ARRAY['Employees of a retailer work inside the business and can be given management accounting reports designed around their own questions.', 'Investors of a manufacturer have no interest in the likely return and risk before committing further capital when they look at accounting information.', 'Employees of a retailer can be supplied with management accounting figures weekly or monthly, well before the annual financial accounting statements are finalised.', 'Reports prepared for employees of a retailer can be laid out however suits the decision at hand, unlike the standardised format required of financial accounting statements.', 'Owners of a retailer look at accounting information mainly to judge the return earned on the capital they have invested.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — Employees are internal users who can receive management accounting tailored to their needs.', 'FALSE — Investors are typically concerned with the likely return and risk before committing further capital.', 'TRUE — Management accounting can reach internal users such as employees far more frequently than annual financial accounting.', 'TRUE — Management accounting for internal users such as employees is flexible in format, unlike statutory financial accounting.', 'TRUE — Owners focus on the return earned on the capital they have invested when they use accounting information.'], '5/5', 21, 'full' ),
( '6.4', 'CASE 6.4.022', 'Asset Composition Chart 22', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=324
Current liabilities=193
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 348 |
| Machinery | 138 |
| Office equipment | 51 |
| Patents, trademarks and licences | 68 |
| Inventory | 175 |
| Trade receivables | 83 |
| Cash and cash equivalents | 66 |
| Total assets | **929** |
| **EQUITY** | |
| Share capital | 292 |
| Retained earnings | 87 |
| Total equity | **379** |
| **LIABILITIES** | |
| Long-term bank loan | 278 |
| Bonds payable | 79 |
| Trade payables | 141 |
| Bank overdraft | 52 |
| Total liabilities | **550** |
| Total equity and liabilities | **929** |

Evaluate the following economic assertions:', ARRAY['The equity ratio is below 39.8%.', 'The current ratio exceeds 1.63.', 'Working capital of €131 thousand is positive on this balance sheet.', 'The long-term bank loan of €278 thousand should be classified within equity rather than liabilities.', 'The debt ratio exceeds 48.3%.'], ARRAY[false, true, true, false, true], ARRAY['FALSE — Equity ratio ≈ 40.8%.', 'TRUE — Current ratio ≈ 1.68.', 'TRUE — Working capital = 131.', 'FALSE — A bank loan is a liability, not equity, regardless of its size.', 'TRUE — Debt ratio ≈ 59.2%.'], '5/5', 22, 'full' ),
( '6.4', 'CASE 6.4.023', 'Short Balance Sheet Extract 23', 'Consider the following short balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and liabilities"]]
Total equity=359
Total liabilities=166
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 349 |
| Inventory | 121 |
| Cash and cash equivalents | 55 |
| Total assets | **525** |
| **EQUITY** | |
| Share capital | 131 |
| Retained earnings | 228 |
| Total equity | **359** |
| **LIABILITIES** | |
| Long-term bank loan | 96 |
| Trade payables | 70 |
| Total liabilities | **166** |
| Total equity and liabilities | **525** |

Evaluate the following economic assertions:', ARRAY['The equity ratio is below 39.6%.', 'The long-term bank loan of €96 thousand is correctly classified within equity.', 'The current ratio exceeds 1.43.', 'Inventory of €121 thousand is correctly classified as a current asset.', 'The current ratio is exactly 2.98.'], ARRAY[false, false, true, true, false], ARRAY['FALSE — Equity ratio ≈ 68.4%.', 'FALSE — A loan is a liability, never equity.', 'TRUE — Current ratio ≈ 2.51.', 'TRUE — Inventory is always current.', 'FALSE — Current ratio ≈ 2.51.'], '2/5', 23, 'full' ),
( '6.4', 'CASE 6.4.024', 'Short Depreciation Extract 24', 'A small business depreciates the following two fixed assets on a straight-line basis. Identity is not disclosed.

[[CHART type="bar" title="Annual depreciation"]]
Asset A=16400
Asset B=7200
[[/CHART]]

| Asset details | Amount |
| --- | ---: |
| Asset A | €82,000 purchase price, 5-year useful life, no residual value |
| Asset B | €38,000 purchase price, 5-year useful life, €2,000 residual value |

Evaluate the following economic assertions:', ARRAY['Asset A''s annual depreciation charge is exactly €17,843.', 'Asset A''s annual depreciation charge is more than 38.4% higher than Asset B''s annual depreciation charge.', 'Asset B''s annual depreciation charge is exactly €6,416.', 'A published version of the extract above, showing the combined asset cost of €120,000 thousand, is an example of external financial reporting that a lender might study before extending credit.', 'Because the extract above (the combined asset cost of €120,000 thousand) covers only one financial year, external users such as shareholders could not rely on it at all.'], ARRAY[false, true, false, true, false], ARRAY['FALSE — Asset A annual charge = €16,400.', 'TRUE — Asset A ≈ €16,400 a year versus Asset B ≈ €7,200 a year.', 'FALSE — Asset B annual charge = €7,200.', 'TRUE — Financial accounting reports are prepared for external users such as lenders and shareholders.', 'FALSE — External users routinely rely on single-year financial statements, often alongside prior-year comparatives.'], '5/5', 24, 'full' ),
( '6.4', 'CASE 6.4.025', 'Employees and Job Security', 'Review why employees may take an interest in accounting information about job security and pay. Evaluate the following economic assertions:', ARRAY['Lenders of a retailer look at accounting information mainly to judge whether the business will be able to repay what it owes.', 'Tax authorities of a retailer look at accounting information mainly to judge how much tax is due on the business''s profit.', 'Investors of a retailer look at accounting information mainly to judge the likely return and risk before committing further capital.', 'Managers of a manufacturer have no interest in controlling costs and choosing between courses of action when they look at accounting information.', 'Managers of a retailer look at accounting information mainly to judge controlling costs and choosing between courses of action.'], ARRAY[true, true, true, false, true], ARRAY['TRUE — Lenders focus on whether the business will be able to repay what it owes when they use accounting information.', 'TRUE — Tax authorities focus on how much tax is due on the business''s profit when they use accounting information.', 'TRUE — Investors focus on the likely return and risk before committing further capital when they use accounting information.', 'FALSE — Managers are typically concerned with controlling costs and choosing between courses of action.', 'TRUE — Managers focus on controlling costs and choosing between courses of action when they use accounting information.'], '5/5', 25, 'full' ),
( '6.4', 'CASE 6.4.026', 'Internal Versus External Users', 'Analyze why managers rely on management accounting information to control costs and choose between options. Evaluate the following economic assertions:', ARRAY['Employees of a manufacturer have no interest in how secure their jobs and future pay are likely to be when they look at accounting information.', 'Employees of a retailer look at accounting information mainly to judge how secure their jobs and future pay are likely to be.', 'Owners of a service firm are users outside day-to-day management, so they mainly rely on the business''s published financial accounting statements.', 'Owners of a service firm normally receive formal accounting information no more often than once a year, when the financial accounting statements are published.', 'Owners of a retailer are internal users who receive management accounting reports every week, in the same way as its own managers.'], ARRAY[false, true, true, true, false], ARRAY['FALSE — Employees are typically concerned with how secure their jobs and future pay are likely to be.', 'TRUE — Employees focus on how secure their jobs and future pay are likely to be when they use accounting information.', 'TRUE — Owners sit outside daily management and depend on financial accounting rather than internal management reports.', 'TRUE — Financial accounting statements reach external users such as owners on the statutory annual cycle.', 'FALSE — Owners are external users who rely on annual financial accounting, not weekly internal management reports.'], '5/5', 26, 'full' ),
( '6.4', 'CASE 6.4.027', 'Liquidity From the Balance Sheet 27', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=350
Current liabilities=296
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 439 |
| Machinery | 217 |
| Office equipment | 63 |
| Patents, trademarks and licences | 33 |
| Inventory | 182 |
| Trade receivables | 64 |
| Cash and cash equivalents | 104 |
| Total assets | **1102** |
| **EQUITY** | |
| Share capital | 212 |
| Retained earnings | 154 |
| Total equity | **366** |
| **LIABILITIES** | |
| Long-term bank loan | 354 |
| Bonds payable | 86 |
| Trade payables | 247 |
| Bank overdraft | 49 |
| Total liabilities | **736** |
| Total equity and liabilities | **1102** |

Evaluate the following economic assertions:', ARRAY['Working capital of €54 thousand is positive on this balance sheet.', 'The current ratio exceeds 1.89.', 'The equity ratio is below 38%.', 'Inventory make up more than 34.8% of current assets.', 'Trade receivables make up less than 42.3% of current assets.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — Working capital = 54.', 'FALSE — Current ratio ≈ 1.18.', 'TRUE — Equity ratio ≈ 33.2%.', 'TRUE — Inventory are about 52.0% of current assets.', 'TRUE — Trade receivables are about 18.3% of current assets.'], '5/5', 27, 'full' ),
( '6.4', 'CASE 6.4.028', 'Frequency of Financial Reporting', 'Consider a publishing house whose tax authorities assess liabilities from filed financial accounts rather than from internal management reports. Evaluate the following economic assertions:', ARRAY['Lenders of a service firm are users outside day-to-day management, so they mainly rely on the business''s published financial accounting statements.', 'Lenders of a service firm normally receive formal accounting information no more often than once a year, when the financial accounting statements are published.', 'Owners of a retailer base their judgement mainly on informal notes prepared for its managers rather than on the published financial statements.', 'Lenders of a retailer are internal users who receive management accounting reports every week, in the same way as its own managers.', 'Managers of a retailer are not allowed to see any accounting information more often than the once-a-year published financial statements.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Lenders sit outside daily management and depend on financial accounting rather than internal management reports.', 'TRUE — Financial accounting statements reach external users such as lenders on the statutory annual cycle.', 'FALSE — Owners typically rely on published financial accounting statements, not informal internal notes.', 'FALSE — Lenders are external users who rely on annual financial accounting, not weekly internal management reports.', 'FALSE — Internal users such as managers can receive management accounting far more often than the annual financial statements.'], '5/5', 28, 'full' ),
( '6.4', 'CASE 6.4.029', 'Frequency of Management Reporting', 'Analyze why management accounting is not bound by the same presentation rules as financial accounting. Evaluate the following economic assertions:', ARRAY['Tax authorities of a service firm are users outside day-to-day management, so they mainly rely on the business''s published financial accounting statements.', 'Tax authorities of a service firm normally receive formal accounting information no more often than once a year, when the financial accounting statements are published.', 'Managers of a service firm work inside the business and can be given management accounting reports designed around their own questions.', 'Managers of a service firm can be supplied with management accounting figures weekly or monthly, well before the annual financial accounting statements are finalised.', 'Reports prepared for managers of a service firm can be laid out however suits the decision at hand, unlike the standardised format required of financial accounting statements.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Tax authorities sit outside daily management and depend on financial accounting rather than internal management reports.', 'TRUE — Financial accounting statements reach external users such as tax authorities on the statutory annual cycle.', 'TRUE — Managers are internal users who can receive management accounting tailored to their needs.', 'TRUE — Management accounting can reach internal users such as managers far more frequently than annual financial accounting.', 'TRUE — Management accounting for internal users such as managers is flexible in format, unlike statutory financial accounting.'], '5/5', 29, 'full' ),
( '6.4', 'CASE 6.4.030', 'Short Balance Sheet Extract 30', 'Consider the following short balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and liabilities"]]
Total equity=275
Total liabilities=254
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 332 |
| Inventory | 117 |
| Cash and cash equivalents | 80 |
| Total assets | **529** |
| **EQUITY** | |
| Share capital | 87 |
| Retained earnings | 188 |
| Total equity | **275** |
| **LIABILITIES** | |
| Long-term bank loan | 162 |
| Trade payables | 92 |
| Total liabilities | **254** |
| Total equity and liabilities | **529** |

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.51.', 'The equity ratio is below 28.2%.', 'The long-term bank loan of €162 thousand is correctly classified within equity.', 'Because the extract above (total assets of €529 thousand) covers only one financial year, external users such as shareholders could not rely on it at all.', 'Internal management reports covering the same period as the extract above (total assets of €529 thousand) must follow the identical statutory format shown here.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Current ratio ≈ 2.14.', 'FALSE — Equity ratio ≈ 52.0%.', 'FALSE — A loan is a liability, never equity.', 'FALSE — External users routinely rely on single-year financial statements, often alongside prior-year comparatives.', 'FALSE — Management accounting reports are flexible and internal; they are not bound by the statutory format of published financial statements.'], '2/5', 30, 'full' ),
( '6.4', 'CASE 6.4.031', 'Short Depreciation Extract 31', 'A small business depreciates the following two fixed assets on a straight-line basis. Identity is not disclosed.

[[CHART type="bar" title="Annual depreciation"]]
Asset A=10429
Asset B=4600
[[/CHART]]

| Asset details | Amount |
| --- | ---: |
| Asset A | €73,000 purchase price, 7-year useful life, no residual value |
| Asset B | €28,000 purchase price, 5-year useful life, €5,000 residual value |

Evaluate the following economic assertions:', ARRAY['Asset A''s annual depreciation charge is exactly €10,429.', 'Asset B''s annual depreciation charge is exactly €4,600.', 'Asset A''s annual depreciation charge is more than 23.2% higher than Asset B''s annual depreciation charge.', 'A published version of the extract above, showing the combined asset cost of €101,000 thousand, is an example of external financial reporting that a lender might study before extending credit.', 'An independent audit of the extract above, including the the combined asset cost of €101,000 thousand, aims to give reasonable assurance that the figures are free from material misstatement, not an absolute guarantee.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Asset A annual charge = €10,429.', 'TRUE — Asset B annual charge = €4,600.', 'TRUE — Asset A ≈ €10,429 a year versus Asset B ≈ €4,600 a year.', 'TRUE — Financial accounting reports are prepared for external users such as lenders and shareholders.', 'TRUE — Audits provide reasonable, not absolute, assurance.'], '5/5', 31, 'full' ),
( '6.4', 'CASE 6.4.032', 'Flexible Formats in Management Accounting', 'Review why financial accounting statements are normally published only once a year. Evaluate the following economic assertions:', ARRAY['Employees of a service firm work inside the business and can be given management accounting reports designed around their own questions.', 'Management accounting reports prepared for managers of a retailer must use exactly the same statutory format as the published financial statements.', 'Employees of a retailer are not allowed to see any accounting information more often than the once-a-year published financial statements.', 'Employees of a service firm can be supplied with management accounting figures weekly or monthly, well before the annual financial accounting statements are finalised.', 'Owners of a retailer have no interest in the return earned on the capital they have invested when they look at accounting information.'], ARRAY[true, false, false, true, false], ARRAY['TRUE — Employees are internal users who can receive management accounting tailored to their needs.', 'FALSE — Management accounting for internal users such as managers is not tied to the statutory format used for financial accounting.', 'FALSE — Internal users such as employees can receive management accounting far more often than the annual financial statements.', 'TRUE — Management accounting can reach internal users such as employees far more frequently than annual financial accounting.', 'FALSE — Owners are typically concerned with the return earned on the capital they have invested.'], '5/5', 32, 'full' ),
( '6.4', 'CASE 6.4.033', 'Liquidity From the Balance Sheet 33', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=422
Current liabilities=275
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 502 |
| Machinery | 192 |
| Office equipment | 34 |
| Patents, trademarks and licences | 41 |
| Inventory | 245 |
| Trade receivables | 134 |
| Cash and cash equivalents | 43 |
| Total assets | **1191** |
| **EQUITY** | |
| Share capital | 282 |
| Retained earnings | 161 |
| Total equity | **443** |
| **LIABILITIES** | |
| Long-term bank loan | 433 |
| Bonds payable | 40 |
| Trade payables | 209 |
| Bank overdraft | 66 |
| Total liabilities | **748** |
| Total equity and liabilities | **1191** |

Evaluate the following economic assertions:', ARRAY['The current ratio is below 1.19.', 'The equity ratio is below 30.9%.', 'Buildings make up more than 44.1% of total assets.', 'The current ratio exceeds 1.36.', 'Cash and cash equivalents make up more than 17.2% of current assets.'], ARRAY[false, false, false, true, false], ARRAY['FALSE — Current ratio ≈ 1.53.', 'FALSE — Equity ratio ≈ 37.2%.', 'FALSE — Buildings are about 42.1% of total assets.', 'TRUE — Current ratio ≈ 1.53.', 'FALSE — Cash and cash equivalents are about 10.2% of current assets.'], '3/5', 33, 'full' ),
( '6.4', 'CASE 6.4.034', 'Statutory Formats in Financial Accounting', 'Analyze why management accounting reports can be produced weekly or monthly for internal users. Evaluate the following economic assertions:', ARRAY['Reports prepared for employees of a service firm can be laid out however suits the decision at hand, unlike the standardised format required of financial accounting statements.', 'Owners of a service firm look at accounting information mainly to judge the return earned on the capital they have invested.', 'Lenders of a service firm look at accounting information mainly to judge whether the business will be able to repay what it owes.', 'Tax authorities of a service firm look at accounting information mainly to judge how much tax is due on the business''s profit.', 'Investors of a service firm look at accounting information mainly to judge the likely return and risk before committing further capital.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Management accounting for internal users such as employees is flexible in format, unlike statutory financial accounting.', 'TRUE — Owners focus on the return earned on the capital they have invested when they use accounting information.', 'TRUE — Lenders focus on whether the business will be able to repay what it owes when they use accounting information.', 'TRUE — Tax authorities focus on how much tax is due on the business''s profit when they use accounting information.', 'TRUE — Investors focus on the likely return and risk before committing further capital when they use accounting information.'], '3/5', 34, 'full' ),
( '6.4', 'CASE 6.4.035', 'Independent Auditing Explained', 'Consider a hospitality group whose owners compare profit with the capital they have invested while an independent auditor checks the underlying figures. Evaluate the following economic assertions:', ARRAY['Lenders of a retailer have no interest in whether the business will be able to repay what it owes when they look at accounting information.', 'Managers of a service firm look at accounting information mainly to judge controlling costs and choosing between courses of action.', 'Employees of a service firm look at accounting information mainly to judge how secure their jobs and future pay are likely to be.', 'Tax authorities of a retailer have no interest in how much tax is due on the business''s profit when they look at accounting information.', 'Investors of a retailer have no interest in the likely return and risk before committing further capital when they look at accounting information.'], ARRAY[false, true, true, false, false], ARRAY['FALSE — Lenders are typically concerned with whether the business will be able to repay what it owes.', 'TRUE — Managers focus on controlling costs and choosing between courses of action when they use accounting information.', 'TRUE — Employees focus on how secure their jobs and future pay are likely to be when they use accounting information.', 'FALSE — Tax authorities are typically concerned with how much tax is due on the business''s profit.', 'FALSE — Investors are typically concerned with the likely return and risk before committing further capital.'], '4/5', 35, 'full' ),
( '6.4', 'CASE 6.4.036', 'Audit Independence From Management', 'Analyze why an auditor must be independent of the managers whose figures are being checked. Evaluate the following economic assertions:', ARRAY['Owners of a construction contractor are users outside day-to-day management, so they mainly rely on the business''s published financial accounting statements.', 'Managers of a retailer have no interest in controlling costs and choosing between courses of action when they look at accounting information.', 'Employees of a retailer have no interest in how secure their jobs and future pay are likely to be when they look at accounting information.', 'Owners of a service firm are internal users who receive management accounting reports every week, in the same way as its own managers.', 'Owners of a service firm base their judgement mainly on informal notes prepared for its managers rather than on the published financial statements.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Owners sit outside daily management and depend on financial accounting rather than internal management reports.', 'FALSE — Managers are typically concerned with controlling costs and choosing between courses of action.', 'FALSE — Employees are typically concerned with how secure their jobs and future pay are likely to be.', 'FALSE — Owners are external users who rely on annual financial accounting, not weekly internal management reports.', 'FALSE — Owners typically rely on published financial accounting statements, not informal internal notes.'], '4/5', 36, 'full' ),
( '6.4', 'CASE 6.4.037', 'A True and Fair View', 'Review how auditing gives external users confidence in published financial statements. Evaluate the following economic assertions:', ARRAY['Lenders of a service firm are internal users who receive management accounting reports every week, in the same way as its own managers.', 'Lenders of a service firm base their judgement mainly on informal notes prepared for its managers rather than on the published financial statements.', 'Managers of a service firm are not allowed to see any accounting information more often than the once-a-year published financial statements.', 'Management accounting reports prepared for managers of a service firm must use exactly the same statutory format as the published financial statements.', 'Owners of a construction contractor normally receive formal accounting information no more often than once a year, when the financial accounting statements are published.'], ARRAY[false, false, false, false, true], ARRAY['FALSE — Lenders are external users who rely on annual financial accounting, not weekly internal management reports.', 'FALSE — Lenders typically rely on published financial accounting statements, not informal internal notes.', 'FALSE — Internal users such as managers can receive management accounting far more often than the annual financial statements.', 'FALSE — Management accounting for internal users such as managers is not tied to the statutory format used for financial accounting.', 'TRUE — Financial accounting statements reach external users such as owners on the statutory annual cycle.'], '5/5', 37, 'full' ),
( '6.4', 'CASE 6.4.038', 'Assurance for External Users', 'Analyze why management accounting reports are not normally subject to the same audit as financial accounting statements. Evaluate the following economic assertions:', ARRAY['Employees of a service firm are not allowed to see any accounting information more often than the once-a-year published financial statements.', 'Management accounting reports prepared for employees of a service firm must use exactly the same statutory format as the published financial statements.', 'Lenders of a construction contractor are users outside day-to-day management, so they mainly rely on the business''s published financial accounting statements.', 'Owners of a service firm have no interest in the return earned on the capital they have invested when they look at accounting information.', 'Lenders of a service firm have no interest in whether the business will be able to repay what it owes when they look at accounting information.'], ARRAY[false, false, true, false, false], ARRAY['FALSE — Internal users such as employees can receive management accounting far more often than the annual financial statements.', 'FALSE — Management accounting for internal users such as employees is not tied to the statutory format used for financial accounting.', 'TRUE — Lenders sit outside daily management and depend on financial accounting rather than internal management reports.', 'FALSE — Owners are typically concerned with the return earned on the capital they have invested.', 'FALSE — Lenders are typically concerned with whether the business will be able to repay what it owes.'], '5/5', 38, 'full' ),
( '6.4', 'CASE 6.4.039', 'Unaudited Internal Reports', 'Consider a service firm whose owners request more frequent internal figures than the statutory annual accounts provide. Evaluate the following economic assertions:', ARRAY['Lenders of a construction contractor normally receive formal accounting information no more often than once a year, when the financial accounting statements are published.', 'Tax authorities of a construction contractor are users outside day-to-day management, so they mainly rely on the business''s published financial accounting statements.', 'Tax authorities of a service firm have no interest in how much tax is due on the business''s profit when they look at accounting information.', 'Managers of a construction contractor work inside the business and can be given management accounting reports designed around their own questions.', 'Managers of a construction contractor can be supplied with management accounting figures weekly or monthly, well before the annual financial accounting statements are finalised.'], ARRAY[true, true, false, true, true], ARRAY['TRUE — Financial accounting statements reach external users such as lenders on the statutory annual cycle.', 'TRUE — Tax authorities sit outside daily management and depend on financial accounting rather than internal management reports.', 'FALSE — Tax authorities are typically concerned with how much tax is due on the business''s profit.', 'TRUE — Managers are internal users who can receive management accounting tailored to their needs.', 'TRUE — Management accounting can reach internal users such as managers far more frequently than annual financial accounting.'], '3/5', 39, 'full' ),
( '6.4', 'CASE 6.4.040', 'Short Balance Sheet Extract 40', 'Consider the following short balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Equity and liabilities"]]
Total equity=182
Total liabilities=228
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 231 |
| Inventory | 93 |
| Cash and cash equivalents | 86 |
| Total assets | **410** |
| **EQUITY** | |
| Share capital | 88 |
| Retained earnings | 94 |
| Total equity | **182** |
| **LIABILITIES** | |
| Long-term bank loan | 139 |
| Trade payables | 89 |
| Total liabilities | **228** |
| Total equity and liabilities | **410** |

Evaluate the following economic assertions:', ARRAY['Inventory of €93 thousand is correctly classified as a current asset.', 'A published version of the extract above, showing total assets of €410 thousand, is an example of external financial reporting that a lender might study before extending credit.', 'An independent audit of the extract above, including the total assets of €410 thousand, aims to give reasonable assurance that the figures are free from material misstatement, not an absolute guarantee.', 'The equity ratio is below 33.1%.', 'The long-term bank loan of €139 thousand is correctly classified within equity.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Inventory is always current.', 'TRUE — Financial accounting reports are prepared for external users such as lenders and shareholders.', 'TRUE — Audits provide reasonable, not absolute, assurance.', 'FALSE — Equity ratio ≈ 44.4%.', 'FALSE — A loan is a liability, never equity.'], '4/5', 40, 'full' ),
( '6.4', 'CASE 6.4.041', 'Earnings Per Share From Reported Figures 41', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=37
February | Price=36
March | Price=34
April | Price=32
May | Price=31
June | Price=30
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=72000
February | Volume=36000
March | Volume=66000
April | Volume=33000
May | Volume=78000
June | Volume=79000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 37 | 72,000 |
| February | 36 | 36,000 |
| March | 34 | 66,000 |
| April | 32 | 33,000 |
| May | 31 | 78,000 |
| June | 30 | 79,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 261 |
| Shares outstanding | 620,000 |
| Total shares traded (six months) | 364,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €14 million.', 'The closing share price rose by more than 17.6% from first to last month.', 'Total shares traded over six months exceed 35.9% of shares outstanding.', 'Peak monthly share turnover exceeds 60,891 shares.', 'Shares outstanding equal 620,000.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — Market capitalisation ≈ €18.6 million.', 'FALSE — Price change ≈ -18.9%.', 'TRUE — Turnover ≈ 58.7% of shares outstanding.', 'TRUE — Peak monthly volume = 79,000.', 'TRUE — Shares outstanding = 620,000.'], '2/5', 41, 'full' ),
( '6.4', 'CASE 6.4.042', 'Shared Transactions, Different Purposes', 'Analyze why financial accounting and management accounting can draw on the same underlying transactions. Evaluate the following economic assertions:', ARRAY['Reports prepared for managers of a construction contractor can be laid out however suits the decision at hand, unlike the standardised format required of financial accounting statements.', 'Investors of a service firm have no interest in the likely return and risk before committing further capital when they look at accounting information.', 'Managers of a service firm have no interest in controlling costs and choosing between courses of action when they look at accounting information.', 'Employees of a service firm have no interest in how secure their jobs and future pay are likely to be when they look at accounting information.', 'Owners of a construction contractor are internal users who receive management accounting reports every week, in the same way as its own managers.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Management accounting for internal users such as managers is flexible in format, unlike statutory financial accounting.', 'FALSE — Investors are typically concerned with the likely return and risk before committing further capital.', 'FALSE — Managers are typically concerned with controlling costs and choosing between courses of action.', 'FALSE — Employees are typically concerned with how secure their jobs and future pay are likely to be.', 'FALSE — Owners are external users who rely on annual financial accounting, not weekly internal management reports.'], '3/5', 42, 'full' ),
( '6.4', 'CASE 6.4.043', 'Recognised Rules for Comparability', 'Review why recognised presentation rules help external users compare different businesses. Evaluate the following economic assertions:', ARRAY['Employees of a construction contractor work inside the business and can be given management accounting reports designed around their own questions.', 'Employees of a construction contractor can be supplied with management accounting figures weekly or monthly, well before the annual financial accounting statements are finalised.', 'Reports prepared for employees of a construction contractor can be laid out however suits the decision at hand, unlike the standardised format required of financial accounting statements.', 'Owners of a construction contractor look at accounting information mainly to judge the return earned on the capital they have invested.', 'Lenders of a construction contractor look at accounting information mainly to judge whether the business will be able to repay what it owes.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Employees are internal users who can receive management accounting tailored to their needs.', 'TRUE — Management accounting can reach internal users such as employees far more frequently than annual financial accounting.', 'TRUE — Management accounting for internal users such as employees is flexible in format, unlike statutory financial accounting.', 'TRUE — Owners focus on the return earned on the capital they have invested when they use accounting information.', 'TRUE — Lenders focus on whether the business will be able to repay what it owes when they use accounting information.'], '3/5', 43, 'full' ),
( '6.4', 'CASE 6.4.044', 'Earnings Per Share From Reported Figures 44', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=20
February | Price=21
March | Price=21
April | Price=21
May | Price=22
June | Price=25
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=76000
February | Volume=43000
March | Volume=32000
April | Volume=78000
May | Volume=55000
June | Volume=23000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 20 | 76,000 |
| February | 21 | 43,000 |
| March | 21 | 32,000 |
| April | 21 | 78,000 |
| May | 22 | 55,000 |
| June | 25 | 23,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 275 |
| Shares outstanding | 560,000 |
| Total shares traded (six months) | 307,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 27.2% from first to last month.', 'Highest closing price is more than 43.3% above the lowest.', 'Operating result is below €209 thousand.', 'Earnings per share is exactly €0.42.', 'Market capitalisation at the last month exceeds €11.1 million.'], ARRAY[false, false, false, false, true], ARRAY['FALSE — Price change ≈ 25.0%.', 'FALSE — Range €20–€25.', 'FALSE — Operating result = 275.', 'FALSE — Earnings per share ≈ €0.49.', 'TRUE — Market capitalisation ≈ €14.0 million.'], '4/5', 44, 'full' ),
( '6.4', 'CASE 6.4.045', 'Share Price and Market Capitalisation 45', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=19
February | Price=21
March | Price=21
April | Price=21
May | Price=23
June | Price=23
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=33000
February | Volume=40000
March | Volume=26000
April | Volume=47000
May | Volume=26000
June | Volume=64000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 19 | 33,000 |
| February | 21 | 40,000 |
| March | 21 | 26,000 |
| April | 21 | 47,000 |
| May | 23 | 26,000 |
| June | 23 | 64,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 227 |
| Shares outstanding | 655,000 |
| Total shares traded (six months) | 236,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 20.9% from first to last month.', 'Market capitalisation at the last month exceeds €14.2 million.', 'Total shares traded over six months exceed 10.2% of shares outstanding.', 'Peak monthly share turnover exceeds 39,691 shares.', 'Shares outstanding equal 655,000.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Price change ≈ 21.1%.', 'TRUE — Market capitalisation ≈ €15.1 million.', 'TRUE — Turnover ≈ 36.0% of shares outstanding.', 'TRUE — Peak monthly volume = 64,000.', 'TRUE — Shares outstanding = 655,000.'], '5/5', 45, 'full' ),
( '6.4', 'CASE 6.4.046', 'Owners and Investors as Separate Users', 'Analyze why internal reports can be laid out however best suits the decision being made. Evaluate the following economic assertions:', ARRAY['Owners of a construction contractor base their judgement mainly on informal notes prepared for its managers rather than on the published financial statements.', 'Tax authorities of a construction contractor look at accounting information mainly to judge how much tax is due on the business''s profit.', 'Investors of a construction contractor look at accounting information mainly to judge the likely return and risk before committing further capital.', 'Managers of a construction contractor look at accounting information mainly to judge controlling costs and choosing between courses of action.', 'Employees of a construction contractor look at accounting information mainly to judge how secure their jobs and future pay are likely to be.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — Owners typically rely on published financial accounting statements, not informal internal notes.', 'TRUE — Tax authorities focus on how much tax is due on the business''s profit when they use accounting information.', 'TRUE — Investors focus on the likely return and risk before committing further capital when they use accounting information.', 'TRUE — Managers focus on controlling costs and choosing between courses of action when they use accounting information.', 'TRUE — Employees focus on how secure their jobs and future pay are likely to be when they use accounting information.'], '5/5', 46, 'full' ),
( '6.4', 'CASE 6.4.047', 'Annual Statements Versus Monthly Reports', 'Consider a retail chain whose employees hear informal updates on trading performance while tax authorities rely solely on its filed financial accounts. Evaluate the following economic assertions:', ARRAY['Lenders of a construction contractor are internal users who receive management accounting reports every week, in the same way as its own managers.', 'Owners of a hospitality group are users outside day-to-day management, so they mainly rely on the business''s published financial accounting statements.', 'Owners of a hospitality group normally receive formal accounting information no more often than once a year, when the financial accounting statements are published.', 'Lenders of a construction contractor base their judgement mainly on informal notes prepared for its managers rather than on the published financial statements.', 'Managers of a construction contractor are not allowed to see any accounting information more often than the once-a-year published financial statements.'], ARRAY[false, true, true, false, false], ARRAY['FALSE — Lenders are external users who rely on annual financial accounting, not weekly internal management reports.', 'TRUE — Owners sit outside daily management and depend on financial accounting rather than internal management reports.', 'TRUE — Financial accounting statements reach external users such as owners on the statutory annual cycle.', 'FALSE — Lenders typically rely on published financial accounting statements, not informal internal notes.', 'FALSE — Internal users such as managers can receive management accounting far more often than the annual financial statements.'], '5/5', 47, 'full' ),
( '6.4', 'CASE 6.4.048', 'Share Price and Market Capitalisation 48', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=21
February | Price=21
March | Price=21
April | Price=20
May | Price=18
June | Price=17
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=57000
February | Volume=95000
March | Volume=62000
April | Volume=43000
May | Volume=41000
June | Volume=50000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 21 | 57,000 |
| February | 21 | 95,000 |
| March | 21 | 62,000 |
| April | 20 | 43,000 |
| May | 18 | 41,000 |
| June | 17 | 50,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 300 |
| Shares outstanding | 716,000 |
| Total shares traded (six months) | 348,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 21.9% from first to last month.', 'Market capitalisation at the last month exceeds €10.2 million.', 'Highest closing price is more than 16.5% above the lowest.', 'Market capitalisation rose by more than 30.9% over the period.', 'Peak monthly share turnover exceeds 99,894 shares.'], ARRAY[false, true, true, false, false], ARRAY['FALSE — Price change ≈ -19.0%.', 'TRUE — Market capitalisation ≈ €12.2 million.', 'TRUE — Range €17–€21.', 'FALSE — €15.0m → €12.2m.', 'FALSE — Peak monthly volume = 95,000.'], '5/5', 48, 'full' ),
( '6.4', 'CASE 6.4.049', 'Listed Company Performance Charts 49', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=20
February | Price=19
March | Price=18
April | Price=19
May | Price=19
June | Price=23
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=40000
February | Volume=75000
March | Volume=27000
April | Volume=38000
May | Volume=84000
June | Volume=29000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 20 | 40,000 |
| February | 19 | 75,000 |
| March | 18 | 27,000 |
| April | 19 | 38,000 |
| May | 19 | 84,000 |
| June | 23 | 29,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 194 |
| Shares outstanding | 602,000 |
| Total shares traded (six months) | 293,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation rose by more than 18.4% over the period.', 'The closing share price rose by more than 10.6% from first to last month.', 'Market capitalisation at the last month exceeds €10.9 million.', 'Highest closing price is more than 39.3% above the lowest.', 'Total shares traded over six months exceed 8.2% of shares outstanding.'], ARRAY[false, true, true, false, true], ARRAY['FALSE — €12.0m → €13.8m.', 'TRUE — Price change ≈ 15.0%.', 'TRUE — Market capitalisation ≈ €13.8 million.', 'FALSE — Range €18–€23.', 'TRUE — Turnover ≈ 48.7% of shares outstanding.'], '5/5', 49, 'full' ),
( '6.4', 'CASE 6.4.050', 'Earnings Per Share From Reported Figures 50', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=30
February | Price=30
March | Price=31
April | Price=32
May | Price=31
June | Price=36
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=50000
February | Volume=63000
March | Volume=34000
April | Volume=29000
May | Volume=34000
June | Volume=61000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 30 | 50,000 |
| February | 30 | 63,000 |
| March | 31 | 34,000 |
| April | 32 | 29,000 |
| May | 31 | 34,000 |
| June | 36 | 61,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 240 |
| Shares outstanding | 684,000 |
| Total shares traded (six months) | 271,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 26.8% from first to last month.', 'Total shares traded over six months exceed 33.8% of shares outstanding.', 'Peak monthly share turnover exceeds 45,158 shares.', 'Market capitalisation rose by more than 31.9% over the period.', 'Highest closing price is more than 44.2% above the lowest.'], ARRAY[false, true, true, false, false], ARRAY['FALSE — Price change ≈ 20.0%.', 'TRUE — Turnover ≈ 39.6% of shares outstanding.', 'TRUE — Peak monthly volume = 63,000.', 'FALSE — €20.5m → €24.6m.', 'FALSE — Range €30–€36.'], '5/5', 50, 'full' ),
( '6.4', 'CASE 6.4.051', 'Share Price and Market Capitalisation 51', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=38
February | Price=41
March | Price=42
April | Price=43
May | Price=47
June | Price=46
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=57000
February | Volume=25000
March | Volume=86000
April | Volume=30000
May | Volume=43000
June | Volume=28000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 38 | 57,000 |
| February | 41 | 25,000 |
| March | 42 | 86,000 |
| April | 43 | 30,000 |
| May | 47 | 43,000 |
| June | 46 | 28,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 234 |
| Shares outstanding | 411,000 |
| Total shares traded (six months) | 269,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €14.3 million.', 'Total shares traded over six months exceed 10.3% of shares outstanding.', 'Shares outstanding equal 411,000.', 'Highest closing price is more than 27.1% above the lowest.', 'Peak monthly share turnover exceeds 86,167 shares.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Market capitalisation ≈ €18.9 million.', 'TRUE — Turnover ≈ 65.5% of shares outstanding.', 'TRUE — Shares outstanding = 411,000.', 'FALSE — Range €38–€47.', 'FALSE — Peak monthly volume = 86,000.'], '5/5', 51, 'full' ),
( '6.4', 'CASE 6.4.052', 'Listed Company Performance Charts 52', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=25
February | Price=24
March | Price=23
April | Price=19
May | Price=17
June | Price=15
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=88000
February | Volume=76000
March | Volume=67000
April | Volume=71000
May | Volume=72000
June | Volume=59000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 25 | 88,000 |
| February | 24 | 76,000 |
| March | 23 | 67,000 |
| April | 19 | 71,000 |
| May | 17 | 72,000 |
| June | 15 | 59,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 289 |
| Shares outstanding | 726,000 |
| Total shares traded (six months) | 433,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €9.5 million.', 'Highest closing price is more than 28.4% above the lowest.', 'Total shares traded over six months exceed 31.2% of shares outstanding.', 'Peak monthly share turnover exceeds 55,329 shares.', 'Shares outstanding equal 726,000.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Market capitalisation ≈ €10.9 million.', 'TRUE — Range €15–€25.', 'TRUE — Turnover ≈ 59.6% of shares outstanding.', 'TRUE — Peak monthly volume = 88,000.', 'TRUE — Shares outstanding = 726,000.'], '4/5', 52, 'full' ),
( '6.4', 'CASE 6.4.053', 'Earnings Per Share From Reported Figures 53', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=26
February | Price=24
March | Price=21
April | Price=18
May | Price=17
June | Price=14
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=80000
February | Volume=24000
March | Volume=70000
April | Volume=86000
May | Volume=36000
June | Volume=36000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 26 | 80,000 |
| February | 24 | 24,000 |
| March | 21 | 70,000 |
| April | 18 | 86,000 |
| May | 17 | 36,000 |
| June | 14 | 36,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 283 |
| Shares outstanding | 668,000 |
| Total shares traded (six months) | 332,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 30.5% from first to last month.', 'Market capitalisation at the last month exceeds €8.9 million.', 'Total shares traded over six months exceed 15.9% of shares outstanding.', 'Market capitalisation rose by more than 24.2% over the period.', 'Earnings per share is exactly €0.38.'], ARRAY[false, true, true, false, false], ARRAY['FALSE — Price change ≈ -46.2%.', 'TRUE — Market capitalisation ≈ €9.4 million.', 'TRUE — Turnover ≈ 49.7% of shares outstanding.', 'FALSE — €17.4m → €9.4m.', 'FALSE — Earnings per share ≈ €0.42.'], '5/5', 53, 'full' ),
( '6.4', 'CASE 6.4.054', 'Tailored Reports for Managers', 'Analyze why tax authorities are treated as external users of financial accounting information. Evaluate the following economic assertions:', ARRAY['Lenders of a hospitality group are users outside day-to-day management, so they mainly rely on the business''s published financial accounting statements.', 'Management accounting reports prepared for managers of a construction contractor must use exactly the same statutory format as the published financial statements.', 'Employees of a construction contractor are not allowed to see any accounting information more often than the once-a-year published financial statements.', 'Lenders of a hospitality group normally receive formal accounting information no more often than once a year, when the financial accounting statements are published.', 'Managers of a hospitality group work inside the business and can be given management accounting reports designed around their own questions.'], ARRAY[true, false, false, true, true], ARRAY['TRUE — Lenders sit outside daily management and depend on financial accounting rather than internal management reports.', 'FALSE — Management accounting for internal users such as managers is not tied to the statutory format used for financial accounting.', 'FALSE — Internal users such as employees can receive management accounting far more often than the annual financial statements.', 'TRUE — Financial accounting statements reach external users such as lenders on the statutory annual cycle.', 'TRUE — Managers are internal users who can receive management accounting tailored to their needs.'], '3/5', 54, 'full' ),
( '6.4', 'CASE 6.4.055', 'Why Employees Read Trading Updates', 'Review how the frequency of reporting differs between financial accounting and management accounting. Evaluate the following economic assertions:', ARRAY['Managers of a hospitality group can be supplied with management accounting figures weekly or monthly, well before the annual financial accounting statements are finalised.', 'Reports prepared for managers of a hospitality group can be laid out however suits the decision at hand, unlike the standardised format required of financial accounting statements.', 'Employees of a hospitality group work inside the business and can be given management accounting reports designed around their own questions.', 'Owners of a hospitality group look at accounting information mainly to judge the return earned on the capital they have invested.', 'Management accounting reports prepared for employees of a construction contractor must use exactly the same statutory format as the published financial statements.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Management accounting can reach internal users such as managers far more frequently than annual financial accounting.', 'TRUE — Management accounting for internal users such as managers is flexible in format, unlike statutory financial accounting.', 'TRUE — Employees are internal users who can receive management accounting tailored to their needs.', 'TRUE — Owners focus on the return earned on the capital they have invested when they use accounting information.', 'FALSE — Management accounting for internal users such as employees is not tied to the statutory format used for financial accounting.'], '4/5', 55, 'full' ),
( '6.4', 'CASE 6.4.056', 'Earnings Per Share From Reported Figures 56', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=24
February | Price=25
March | Price=27
April | Price=27
May | Price=30
June | Price=30
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=20000
February | Volume=84000
March | Volume=34000
April | Volume=76000
May | Volume=31000
June | Volume=29000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 24 | 20,000 |
| February | 25 | 84,000 |
| March | 27 | 34,000 |
| April | 27 | 76,000 |
| May | 30 | 31,000 |
| June | 30 | 29,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 318 |
| Shares outstanding | 430,000 |
| Total shares traded (six months) | 274,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 16.5% from first to last month.', 'Earnings per share exceeds €0.52.', 'Total shares traded over six months exceed 21% of shares outstanding.', 'Peak monthly share turnover exceeds 51,239 shares.', 'Shares outstanding equal 430,000.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Price change ≈ 25.0%.', 'TRUE — Earnings per share ≈ €0.74.', 'TRUE — Turnover ≈ 63.7% of shares outstanding.', 'TRUE — Peak monthly volume = 84,000.', 'TRUE — Shares outstanding = 430,000.'], '2/5', 56, 'full' ),
( '6.4', 'CASE 6.4.057', 'Share Price and Market Capitalisation 57', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=24
February | Price=24
March | Price=22
April | Price=22
May | Price=21
June | Price=26
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=54000
February | Volume=54000
March | Volume=38000
April | Volume=43000
May | Volume=36000
June | Volume=48000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 24 | 54,000 |
| February | 24 | 54,000 |
| March | 22 | 38,000 |
| April | 22 | 43,000 |
| May | 21 | 36,000 |
| June | 26 | 48,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 291 |
| Shares outstanding | 496,000 |
| Total shares traded (six months) | 273,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €9.7 million.', 'The closing share price rose by more than 13.4% from first to last month.', 'Highest closing price is more than 41.1% above the lowest.', 'Operating result is below €196 thousand.', 'Earnings per share is exactly €0.54.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Market capitalisation ≈ €12.9 million.', 'FALSE — Price change ≈ 8.3%.', 'FALSE — Range €21–€26.', 'FALSE — Operating result = 291.', 'FALSE — Earnings per share ≈ €0.59.'], '5/5', 57, 'full' ),
( '6.4', 'CASE 6.4.058', 'Listed Company Performance Charts 58', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=19
February | Price=20
March | Price=20
April | Price=20
May | Price=20
June | Price=24
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=80000
February | Volume=27000
March | Volume=35000
April | Volume=30000
May | Volume=61000
June | Volume=20000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 19 | 80,000 |
| February | 20 | 27,000 |
| March | 20 | 35,000 |
| April | 20 | 30,000 |
| May | 20 | 61,000 |
| June | 24 | 20,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 313 |
| Shares outstanding | 779,000 |
| Total shares traded (six months) | 253,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 33.9% from first to last month.', 'Highest closing price is more than 36.9% above the lowest.', 'Market capitalisation rose by more than 9.6% over the period.', 'Total shares traded over six months exceed 37.4% of shares outstanding.', 'Peak monthly share turnover exceeds 86,180 shares.'], ARRAY[false, false, true, false, false], ARRAY['FALSE — Price change ≈ 26.3%.', 'FALSE — Range €19–€24.', 'TRUE — €14.8m → €18.7m.', 'FALSE — Turnover ≈ 32.5% of shares outstanding.', 'FALSE — Peak monthly volume = 80,000.'], '4/5', 58, 'full' ),
( '6.4', 'CASE 6.4.059', 'Earnings Per Share From Reported Figures 59', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=34
February | Price=32
March | Price=31
April | Price=30
May | Price=29
June | Price=27
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=27000
February | Volume=82000
March | Volume=87000
April | Volume=82000
May | Volume=55000
June | Volume=92000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 34 | 27,000 |
| February | 32 | 82,000 |
| March | 31 | 87,000 |
| April | 30 | 82,000 |
| May | 29 | 55,000 |
| June | 27 | 92,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 312 |
| Shares outstanding | 841,000 |
| Total shares traded (six months) | 425,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 8% from first to last month.', 'Market capitalisation rose by more than 33.6% over the period.', 'Peak monthly share turnover exceeds 105,511 shares.', 'Operating result is below €194 thousand.', 'Market capitalisation at the last month exceeds €21.4 million.'], ARRAY[false, false, false, false, true], ARRAY['FALSE — Price change ≈ -20.6%.', 'FALSE — €28.6m → €22.7m.', 'FALSE — Peak monthly volume = 92,000.', 'FALSE — Operating result = 312.', 'TRUE — Market capitalisation ≈ €22.7 million.'], '3/5', 59, 'full' ),
( '6.4', 'CASE 6.4.060', 'Share Price and Market Capitalisation 60', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=42
February | Price=42
March | Price=42
April | Price=45
May | Price=48
June | Price=52
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=23000
February | Volume=78000
March | Volume=56000
April | Volume=18000
May | Volume=58000
June | Volume=41000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 42 | 23,000 |
| February | 42 | 78,000 |
| March | 42 | 56,000 |
| April | 45 | 18,000 |
| May | 48 | 58,000 |
| June | 52 | 41,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 283 |
| Shares outstanding | 413,000 |
| Total shares traded (six months) | 274,000 |

Evaluate the following economic assertions:', ARRAY['Earnings per share exceeds €0.55.', 'Peak monthly share turnover exceeds 63,983 shares.', 'Highest closing price is more than 36.7% above the lowest.', 'Shares outstanding equal 413,000.', 'Earnings per share is exactly €0.69.'], ARRAY[true, true, false, true, true], ARRAY['TRUE — Earnings per share ≈ €0.69.', 'TRUE — Peak monthly volume = 78,000.', 'FALSE — Range €42–€52.', 'TRUE — Shares outstanding = 413,000.', 'TRUE — Earnings per share ≈ €0.69.'], '4/5', 60, 'full' ),
( '6.5', 'CASE 6.5.001', 'Asset and Inventory Turnover 1', 'Consider the following extract (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Beginning versus ending balances"]]
Total assets | Beginning=796 | Ending=983
Inventory | Beginning=136 | Ending=184
[[/CHART]]

| Item (€ thousands) | Amount |
| --- | ---: |
| Revenue | 919 |
| Cost of sales | 580 |
| Total assets at the beginning of the year | 796 |
| Total assets at the end of the year | 983 |
| Inventory at the beginning of the year | 136 |
| Inventory at the end of the year | 184 |
| Trade receivables at the beginning of the year | 111 |
| Trade receivables at the end of the year | 147 |

Evaluate the following economic assertions:', ARRAY['Inventory turnover, cost of sales taken relative to average inventory, is below 7.1 times per year.', 'Asset turnover, revenue taken relative to average total assets, is above 1.13.', 'Trade receivables turnover, revenue taken relative to average trade receivables, exceeds 10.53 times per year.', 'Average inventory make up less than 15.8% of average total assets.', 'Cost of sales amounts to more than 67.5% of revenue.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Inventory turnover ≈ 3.63.', 'FALSE — Asset turnover ≈ 1.03.', 'FALSE — Receivables turnover ≈ 7.12.', 'FALSE — Average inventory are about 18.0% of average total assets.', 'FALSE — Cost of sales is about 63.1% of revenue.'], '5/5', 1, 'full' ),
( '6.5', 'CASE 6.5.002', 'Working Capital Fundamentals in Practice', 'Analyze how working capital is defined and why a positive balance is generally preferred to a negative one. Evaluate the following economic assertions:', ARRAY['Working capital is defined as current liabilities minus current assets, so a larger current asset balance always reduces working capital.', 'A business with negative working capital automatically holds more cash than it needs for its daily operations.', 'Working capital is defined as current assets minus current liabilities, so a business with more current liabilities than current assets reports negative working capital.', 'A comfortable liquidity position generally means current assets are large enough to cover current liabilities with some margin to spare, though the exact margin needed varies by sector.', 'The current ratio expresses how many times current assets cover current liabilities, so a ratio above one indicates current assets exceed current liabilities.'], ARRAY[false, false, true, true, true], ARRAY['FALSE — Working capital is current assets minus current liabilities, not the reverse; a larger current asset balance raises it.', 'FALSE — Negative working capital means current liabilities exceed current assets and does not imply excess cash.', 'TRUE — Working capital equals current assets minus current liabilities by definition.', 'TRUE — Some margin of current assets over current liabilities is generally desired, with the required size depending on the sector.', 'TRUE — A current ratio above one means current assets are larger than current liabilities.'], '5/5', 2, 'full' ),
( '6.5', 'CASE 6.5.003', 'Working Capital Fundamentals Explained', 'Analyze how the current ratio and the acid-test ratio each measure short-term liquidity, and why they can diverge for inventory-heavy businesses. Evaluate the following economic assertions:', ARRAY['A current ratio commonly cited as comfortable falls somewhere between one and a half and two, though this guideline should be read alongside the norms of the specific industry.', 'A current ratio below one suggests that current liabilities exceed current assets, which can signal difficulty meeting short-term obligations from those assets alone.', 'The acid-test ratio removes inventory from current assets before comparing the remainder with current liabilities, producing a stricter measure of immediate liquidity.', 'Because inventory can take time to sell and convert into cash, the acid-test ratio gives a more cautious liquidity picture than the current ratio for businesses holding substantial stock.', 'Raising a short-term loan to pay suppliers can increase a business''s cash balance while simultaneously increasing current liabilities, so the net effect on working capital may be negative rather than positive.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — One and a half to two is a common guideline for the current ratio, tempered by industry context.', 'TRUE — A current ratio below one means liabilities exceed current assets, a possible liquidity warning sign.', 'TRUE — Excluding inventory before comparing with current liabilities is what defines the acid-test ratio.', 'TRUE — Slow-to-sell inventory is why the acid-test ratio is stricter than the current ratio for stock-heavy businesses.', 'TRUE — Short-term borrowing can raise cash yet still reduce working capital because current liabilities also rise.'], '4/5', 3, 'full' ),
( '6.5', 'CASE 6.5.004', 'Working Capital Fundamentals for Analysts', 'Consider a listed manufacturer whose shareholders compare its return on equity with sector peers. Evaluate the following economic assertions:', ARRAY['Relying on extended supplier credit increases current liabilities, which can erode working capital even while the cash balance on hand remains unchanged.', 'Strengthening working capital on a lasting basis typically calls for long-term finance or genuine operational improvement rather than another round of short-term borrowing.', 'The current ratio expresses how many times current liabilities cover current assets, so a ratio above one means liabilities exceed assets.', 'Working capital problems and cash flow problems are related concepts but are not identical, since working capital reflects a balance-sheet position at a point in time while cash flow tracks movements over a period.', 'Return on equity relates profit before interest and tax generated during the period to the equity invested by owners, showing how effectively that equity produced a return.'], ARRAY[true, true, false, true, true], ARRAY['TRUE — Extended supplier credit raises current liabilities and can reduce working capital without any change in cash.', 'TRUE — Sustainable working capital improvement relies on long-term finance or operational change, not repeated short-term loans.', 'FALSE — The current ratio compares current assets with current liabilities; a ratio above one means assets exceed liabilities, not the reverse.', 'TRUE — Working capital is a point-in-time balance-sheet concept, distinct from cash flow, which tracks movements over time.', 'TRUE — Return on equity links profit before interest and tax to owners'' equity.'], '4/5', 4, 'full' ),
( '6.5', 'CASE 6.5.005', 'Working Capital Fundamentals Across Sectors', 'Analyze how return on equity relates profit before interest and tax to the equity that owners have invested in the business. Evaluate the following economic assertions:', ARRAY['Because return on equity is judged against the risk owners bear by investing in the business, a modest return may still be considered inadequate if the business carries substantial risk.', 'Return on capital employed relates profit before interest and tax to the long-term capital employed in the business, combining funds contributed by both owners and long-term lenders.', 'Capital employed can be approximated by adding non-current liabilities to equity, representing the long-term funds financing the business.', 'A single return on capital employed figure is most informative when set against the same business''s results in earlier years or against similar businesses in the same industry.', 'A current ratio between one and a half and two is an exact legal requirement that every business in every industry must satisfy.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Risk borne by owners is part of judging whether a given return on equity is adequate.', 'TRUE — Return on capital employed links profit before interest and tax to combined owner and long-term lender funds.', 'TRUE — Capital employed is approximated as equity plus non-current liabilities.', 'TRUE — Comparative context, not an isolated figure, is what makes return on capital employed informative.', 'FALSE — The one-and-a-half to two range is a common guideline, not a legal requirement, and industry norms still matter.'], '2/5', 5, 'full' ),
( '6.5', 'CASE 6.5.006', 'Liquidity From the Balance Sheet 6', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=489
Machinery=232
Patents, trademarks and licences=74
Inventory=218
Trade receivables=166
Cash and cash equivalents=87
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 489 |
| Machinery | 232 |
| Office equipment | 73 |
| Patents, trademarks and licences | 74 |
| Inventory | 218 |
| Trade receivables | 166 |
| Cash and cash equivalents | 87 |
| Total assets | **1339** |
| **EQUITY** | |
| Share capital | 239 |
| Retained earnings | 570 |
| Total equity | **809** |
| **LIABILITIES** | |
| Long-term bank loan | 250 |
| Bonds payable | 58 |
| Trade payables | 135 |
| Bank overdraft | 87 |
| Total liabilities | **530** |
| Total equity and liabilities | **1339** |

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.1.', 'Buildings make up more than 35.1% of total assets.', 'Inventory make up more than 43.6% of current assets.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 1.34 times over.', 'The equity ratio is below 25.6%.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Current ratio ≈ 2.12.', 'TRUE — Buildings are about 36.5% of total assets.', 'TRUE — Inventory are about 46.3% of current assets.', 'FALSE — Acid-test ratio ≈ 1.14.', 'FALSE — Equity ratio ≈ 60.4%.'], '5/5', 6, 'full' ),
( '6.5', 'CASE 6.5.007', 'Working Capital Fundamentals in Context', 'Analyze how return on capital employed relates profit before interest and tax to the long-term capital financing a business. Evaluate the following economic assertions:', ARRAY['When comparing return measures across two businesses, using the same definition of profit throughout the comparison avoids distorted conclusions.', 'Asset turnover relates revenue generated during the period to the average total assets employed to generate that revenue.', 'If revenue grows more slowly than the asset base a business has invested in, asset turnover will decline even while revenue itself keeps rising.', 'Using average asset or inventory balances rather than a single year-end figure helps smooth out timing distortions when calculating turnover ratios.', 'A current ratio below one guarantees that a business can comfortably settle every short-term obligation immediately.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — A consistent profit definition across a comparison prevents distorted return conclusions.', 'TRUE — Asset turnover links revenue to average total assets.', 'TRUE — Assets outgrowing revenue causes asset turnover to fall despite rising revenue.', 'TRUE — Averaging balances reduces timing distortions in turnover ratio calculations.', 'FALSE — A current ratio below one suggests current assets may not fully cover current liabilities, the opposite of a guarantee.'], '3/5', 7, 'full' ),
( '6.5', 'CASE 6.5.008', 'Turnover and Liquidity Extract 8', 'Consider the following extract (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Beginning versus ending balances"]]
Total assets | Beginning=865 | Ending=931
Inventory | Beginning=130 | Ending=177
[[/CHART]]

| Item (€ thousands) | Amount |
| --- | ---: |
| Revenue | 1,029 |
| Cost of sales | 692 |
| Total assets at the beginning of the year | 865 |
| Total assets at the end of the year | 931 |
| Inventory at the beginning of the year | 130 |
| Inventory at the end of the year | 177 |
| Trade receivables at the beginning of the year | 118 |
| Trade receivables at the end of the year | 128 |

Evaluate the following economic assertions:', ARRAY['Trade receivables turnover, revenue taken relative to average trade receivables, exceeds 10.27 times per year.', 'Asset turnover, revenue taken relative to average total assets, is above 1.12.', 'On average, revenue remains outstanding in trade receivables for more than 52 days.', 'Average inventory make up less than 13.9% of average total assets.', 'Inventory turnover is higher than trade receivables turnover, meaning stock rotates faster than customer collections.'], ARRAY[false, true, false, false, false], ARRAY['FALSE — Receivables turnover ≈ 8.37.', 'TRUE — Asset turnover ≈ 1.15.', 'FALSE — Average collection period ≈ 44 days.', 'FALSE — Average inventory are about 17.1% of average total assets.', 'FALSE — Inventory turnover ≈ 4.51 versus receivables turnover ≈ 8.37.'], '5/5', 8, 'full' ),
( '6.5', 'CASE 6.5.009', 'Asset and Inventory Turnover 9', 'Consider the following extract (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Beginning versus ending balances"]]
Total assets | Beginning=804 | Ending=933
Inventory | Beginning=147 | Ending=155
[[/CHART]]

| Item (€ thousands) | Amount |
| --- | ---: |
| Revenue | 1,116 |
| Cost of sales | 766 |
| Total assets at the beginning of the year | 804 |
| Total assets at the end of the year | 933 |
| Inventory at the beginning of the year | 147 |
| Inventory at the end of the year | 155 |
| Trade receivables at the beginning of the year | 101 |
| Trade receivables at the end of the year | 116 |

Evaluate the following economic assertions:', ARRAY['With inventory turnover of about 5.1 times a year on this extract, a higher figure would generally mean stock is sold and replaced more quickly, tying up less money in inventory.', 'Revenue exceeds €1,106 thousand.', 'Asset turnover, revenue taken relative to average total assets, is above 1.51.', 'Total assets grew during the year.', 'Cost of sales amounts to more than 58.7% of revenue.'], ARRAY[true, true, false, true, true], ARRAY['TRUE — High turnover signals faster stock rotation.', 'TRUE — Revenue = 1,116.', 'FALSE — Asset turnover ≈ 1.28.', 'TRUE — Assets moved from 804 to 933.', 'TRUE — Cost of sales is about 68.6% of revenue.'], '3/5', 9, 'full' ),
( '6.5', 'CASE 6.5.010', 'Liquidity Through the Current Ratio in Practice', 'Analyze why a single return on capital employed figure is best interpreted alongside comparable years or similar businesses rather than in isolation. Evaluate the following economic assertions:', ARRAY['The acid-test ratio adds inventory to current assets before comparing the total with current liabilities, giving a more lenient measure than the current ratio.', 'Because inventory converts into cash instantly, the acid-test ratio and the current ratio always produce identical results for any business.', 'Inventory turnover relates the cost of sales incurred during the period to the average inventory held over that same period.', 'Raising a short-term loan to pay suppliers always increases working capital because the cash received immediately outweighs any increase in liabilities.', 'Extending supplier credit terms has no effect whatsoever on a business''s current liabilities or its working capital.'], ARRAY[false, false, true, false, false], ARRAY['FALSE — The acid-test ratio excludes inventory, giving a stricter, not more lenient, measure than the current ratio.', 'FALSE — Inventory does not convert into cash instantly, which is exactly why the acid-test ratio can differ from the current ratio.', 'TRUE — Inventory turnover links cost of sales to average inventory.', 'FALSE — Short-term borrowing raises current liabilities alongside cash, so working capital can fall rather than rise.', 'FALSE — Extended supplier credit increases current liabilities and can reduce working capital.'], '5/5', 10, 'full' ),
( '6.5', 'CASE 6.5.011', 'Liquidity Through the Current Ratio Explained', 'Consider a wholesaler that drew down a short-term facility to pay suppliers and is reviewing the effect on working capital. Evaluate the following economic assertions:', ARRAY['Working capital can be strengthened permanently only by taking out repeated short-term loans, since long-term finance has no bearing on the current asset and liability position.', 'A higher inventory turnover figure generally indicates that stock is sold and replaced more quickly, tying up less money in unsold goods.', 'Inventory turnover is typically expressed as a number of times per year, reflecting how often stock is estimated to be replaced.', 'The equity ratio expresses equity as a percentage of total assets, showing what proportion of the asset base owners have financed themselves.', 'Working capital and cash flow describe exactly the same concept and can always be used interchangeably without any loss of meaning.'], ARRAY[false, true, true, true, false], ARRAY['FALSE — Long-term finance and operational improvement, not repeated short-term loans, sustainably strengthen working capital.', 'TRUE — Faster stock rotation and less money tied up in stock is what a higher inventory turnover signals.', 'TRUE — Inventory turnover is conventionally expressed as a number of times per year.', 'TRUE — The equity ratio is equity expressed as a percentage of total assets.', 'FALSE — Working capital is a balance-sheet snapshot while cash flow tracks movements over time; the two are related but distinct.'], '5/5', 11, 'full' ),
( '6.5', 'CASE 6.5.012', 'Liquidity From the Balance Sheet 12', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=449
Current liabilities=189
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 482 |
| Machinery | 205 |
| Office equipment | 61 |
| Patents, trademarks and licences | 30 |
| Inventory | 230 |
| Trade receivables | 140 |
| Cash and cash equivalents | 79 |
| Total assets | **1227** |
| **EQUITY** | |
| Share capital | 249 |
| Retained earnings | 328 |
| Total equity | **577** |
| **LIABILITIES** | |
| Long-term bank loan | 396 |
| Bonds payable | 65 |
| Trade payables | 142 |
| Bank overdraft | 47 |
| Total liabilities | **650** |
| Total equity and liabilities | **1227** |

Evaluate the following economic assertions:', ARRAY['Working capital of €260 thousand is positive on this balance sheet.', 'Inventory make up more than 46.9% of current assets.', 'Trade receivables make up less than 46.6% of current assets.', 'The combined total of equity and non-current liabilities exceeds non-current assets by more than 30.8%.', 'Inventory of €230 thousand is correctly classified as a current asset rather than a non-current intangible asset.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Working capital = 260.', 'TRUE — Inventory are about 51.2% of current assets.', 'TRUE — Trade receivables are about 31.2% of current assets.', 'TRUE — Long-term financing covers non-current assets by about 33.4%.', 'TRUE — Inventory is always a current asset.'], '5/5', 12, 'full' ),
( '6.5', 'CASE 6.5.013', 'Asset and Inventory Turnover 13', 'Consider the following extract (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Beginning versus ending balances"]]
Total assets | Beginning=763 | Ending=942
Inventory | Beginning=129 | Ending=196
[[/CHART]]

| Item (€ thousands) | Amount |
| --- | ---: |
| Revenue | 1,252 |
| Cost of sales | 869 |
| Total assets at the beginning of the year | 763 |
| Total assets at the end of the year | 942 |
| Inventory at the beginning of the year | 129 |
| Inventory at the end of the year | 196 |
| Trade receivables at the beginning of the year | 115 |
| Trade receivables at the end of the year | 123 |

Evaluate the following economic assertions:', ARRAY['Trade receivables turnover, revenue taken relative to average trade receivables, exceeds 7.21 times per year.', 'Average inventory make up less than 19.7% of average total assets.', 'With inventory turnover of about 5.3 times a year on this extract, a higher figure would generally mean stock is sold and replaced more quickly, tying up less money in inventory.', 'Inventory grew by more than 32.9% between Year 1 and Year 2.', 'Cost of sales amounts to more than 60.1% of revenue.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Receivables turnover ≈ 10.52.', 'TRUE — Average inventory are about 19.1% of average total assets.', 'TRUE — High turnover signals faster stock rotation.', 'TRUE — Inventory changed by about 51.9% between the two years.', 'TRUE — Cost of sales is about 69.4% of revenue.'], '3/5', 13, 'full' ),
( '6.5', 'CASE 6.5.014', 'Liquidity Through the Current Ratio for Analysts', 'Analyze how inventory turnover links cost of sales to average inventory, and what a rising figure typically indicates. Evaluate the following economic assertions:', ARRAY['Return on equity is calculated by comparing a business''s cash balance with its total liabilities rather than relating profit to equity.', 'The debt ratio expresses total liabilities as a percentage of total assets, showing what proportion of the asset base has been financed through borrowing.', 'Because equity and liabilities together finance the whole of the balance sheet, the equity ratio and the debt ratio move in opposite directions as one rises the other falls correspondingly.', 'A low return on equity is always acceptable regardless of how much risk the owners have taken on by investing in the business.', 'Return on capital employed relates profit before interest and tax to inventory levels rather than to the long-term capital financing the business.'], ARRAY[false, true, true, false, false], ARRAY['FALSE — Return on equity relates profit before interest and tax to equity, not cash to liabilities.', 'TRUE — The debt ratio is total liabilities expressed as a percentage of total assets.', 'TRUE — Equity and liabilities financing the same total assets means the equity ratio and debt ratio move inversely.', 'FALSE — Risk borne by owners is precisely what makes a low return on equity potentially unacceptable.', 'FALSE — Return on capital employed relates profit to long-term capital employed, not to inventory levels.'], '3/5', 14, 'full' ),
( '6.5', 'CASE 6.5.015', 'Liquidity Through the Current Ratio Across Sectors', 'Analyze how the equity ratio and the debt ratio together describe the way a business finances its total assets. Evaluate the following economic assertions:', ARRAY['A rising debt ratio generally signals greater reliance on borrowed funds and, with it, increased financial risk for the owners of the business.', 'Capital employed is calculated by subtracting non-current liabilities from equity rather than adding the two together.', 'Financial statement analysis is commonly organised around four broad questions: whether a business can pay its short-term obligations, whether it is sufficiently profitable, how efficiently it uses its assets, and how it is financed.', 'Liquidity analysis is primarily concerned with whether a business can meet its short-term obligations as they fall due.', 'Profitability analysis judges profit not in isolation but in relation to the size of the equity or capital employed that generated it.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — A rising debt ratio reflects greater borrowing reliance and higher financial risk for owners.', 'FALSE — Capital employed is approximated by adding non-current liabilities to equity, not subtracting them.', 'TRUE — Liquidity, profitability, financial efficiency and financial structure are the four broad analytical questions.', 'TRUE — Meeting short-term obligations on time is the focus of liquidity analysis.', 'TRUE — Relating profit to equity or capital employed, not viewing it alone, is the essence of profitability analysis.'], '5/5', 15, 'full' ),
( '6.5', 'CASE 6.5.016', 'Liquidity Through the Current Ratio in Context', 'Analyze why comparing ratios with industry peers or with a business''s own history over time improves interpretation. Evaluate the following economic assertions:', ARRAY['A single return on capital employed figure is always fully meaningful on its own and requires no comparison with other years or similar businesses.', 'Comparing return measures calculated using different definitions of profit across two businesses always produces a fair and reliable comparison.', 'Financial efficiency analysis asks how effectively a business converts the assets it holds into revenue.', 'Asset turnover relates profit for the year to average total assets rather than relating revenue to those assets.', 'Asset turnover automatically rises whenever a business adds more assets, regardless of what happens to revenue.'], ARRAY[false, false, true, false, false], ARRAY['FALSE — Return on capital employed gains meaning chiefly from comparison over time or with peers, not in isolation.', 'FALSE — Mixing different profit definitions across a comparison distorts rather than clarifies the result.', 'TRUE — Converting assets into revenue effectively is the focus of financial efficiency analysis.', 'FALSE — Asset turnover relates revenue to average assets, not profit to assets.', 'FALSE — Asset turnover falls, rather than rises, if added assets are not matched by proportional revenue growth.'], '5/5', 16, 'full' ),
( '6.5', 'CASE 6.5.017', 'Balance Sheet Structure Review 17', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=373
Machinery=194
Patents, trademarks and licences=77
Inventory=96
Trade receivables=130
Cash and cash equivalents=114
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 373 |
| Machinery | 194 |
| Office equipment | 59 |
| Patents, trademarks and licences | 77 |
| Inventory | 96 |
| Trade receivables | 130 |
| Cash and cash equivalents | 114 |
| Total assets | **1043** |
| **EQUITY** | |
| Share capital | 141 |
| Retained earnings | 340 |
| Total equity | **481** |
| **LIABILITIES** | |
| Long-term bank loan | 289 |
| Bonds payable | 79 |
| Trade payables | 133 |
| Bank overdraft | 61 |
| Total liabilities | **562** |
| Total equity and liabilities | **1043** |

Evaluate the following economic assertions:', ARRAY['The equity ratio is below 39.4%.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 0.8 times over.', 'Trade receivables make up less than 54.6% of current assets.', 'The debt ratio exceeds 76.9%.', 'Inventory make up more than 31% of current assets.'], ARRAY[false, true, true, false, false], ARRAY['FALSE — Equity ratio ≈ 46.1%.', 'TRUE — Acid-test ratio ≈ 1.26.', 'TRUE — Trade receivables are about 38.2% of current assets.', 'FALSE — Debt ratio ≈ 53.9%.', 'FALSE — Inventory are about 28.2% of current assets.'], '4/5', 17, 'full' ),
( '6.5', 'CASE 6.5.018', 'Combined Statement Extract 18', 'Consider the following combined extracts (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=484
Machinery=251
Inventory=91
Trade receivables=134
Cash and cash equivalents=110
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 484 |
| Machinery | 251 |
| Office equipment | 50 |
| Patents, trademarks and licences | 99 |
| Inventory | 91 |
| Trade receivables | 134 |
| Cash and cash equivalents | 110 |
| Total assets | **1219** |
| **EQUITY** | |
| Share capital | 137 |
| Retained earnings | 667 |
| Total equity | **804** |
| **LIABILITIES** | |
| Long-term bank loan | 193 |
| Bonds payable | 75 |
| Trade payables | 85 |
| Bank overdraft | 62 |
| Total liabilities | **415** |
| Total equity and liabilities | **1219** |

| Income statement extract (€ thousands) | Amount |
| --- | ---: |
| Operating result | 206 |

| Cash flow statement extract (€ thousands) | Amount |
| --- | ---: |
| Cash flow from operating activities | 227 |
| Cash flow from investing activities | (244) |
| Cash flow from financing activities | 63 |
| Cash and cash equivalents at the beginning of the year | 64 |

Evaluate the following economic assertions:', ARRAY['Return on equity, the operating result taken as a percentage of total equity, exceeds 28.8%.', 'The net change in cash and cash equivalents equals exactly €77 thousand.', 'With an operating result of €206 thousand, return on capital employed is mainly useful when comparing similar businesses or the same business over time, not as a standalone absolute number.', 'Cash flow from operating activities amounts to less than 95.8% of the operating result, indicating profit is only partly backed by cash.', 'With cash flow from operating activities of €227 thousand, cash flow from investing activities was an inflow this year.'], ARRAY[false, false, true, false, false], ARRAY['FALSE — Return on equity ≈ 25.6%.', 'FALSE — Net change = 46.', 'TRUE — Comparative context matters for return on capital employed.', 'FALSE — Cash conversion ≈ 110.2% of the operating result.', 'FALSE — Investing cash flow = -244.'], '5/5', 18, 'full' ),
( '6.5', 'CASE 6.5.019', 'The Acid-Test Liquidity Check in Practice', 'Consider a transport operator comparing this year''s profitability ratios with its own figures from five years earlier. Evaluate the following economic assertions:', ARRAY['Financial structure analysis examines the balance between funds contributed by owners and funds borrowed from lenders.', 'Comparing a business''s ratios with those of close competitors in the same industry provides a benchmark that a single isolated figure cannot offer.', 'Tracking the same ratio for one business across several consecutive years can reveal a trend that a single year''s figure would conceal.', 'Applying liquidity or gearing benchmarks drawn from an unrelated industry to a business in a very different sector can produce a misleading assessment.', 'Because liquidity, profitability, financial efficiency and financial structure each capture a different dimension of performance, a rounded assessment of a business draws on all four rather than any single ratio.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — The owner-versus-lender funding balance is the focus of financial structure analysis.', 'TRUE — Peer comparison provides a benchmark an isolated ratio figure lacks.', 'TRUE — Multi-year tracking reveals trends a single year''s figure would hide.', 'TRUE — Cross-industry benchmarks applied without adjustment can mislead.', 'TRUE — A rounded assessment combines all four analytical dimensions rather than relying on one ratio.'], '5/5', 19, 'full' ),
( '6.5', 'CASE 6.5.020', 'Turnover and Liquidity Extract 20', 'Consider the following extract (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Beginning versus ending balances"]]
Total assets | Beginning=836 | Ending=972
Inventory | Beginning=158 | Ending=155
[[/CHART]]

| Item (€ thousands) | Amount |
| --- | ---: |
| Revenue | 901 |
| Cost of sales | 625 |
| Total assets at the beginning of the year | 836 |
| Total assets at the end of the year | 972 |
| Inventory at the beginning of the year | 158 |
| Inventory at the end of the year | 155 |
| Trade receivables at the beginning of the year | 113 |
| Trade receivables at the end of the year | 134 |

Evaluate the following economic assertions:', ARRAY['Inventory turnover, cost of sales taken relative to average inventory, is below 6.24 times per year.', 'With inventory turnover of about 4.0 times a year on this extract, a higher figure would generally mean stock is sold and replaced more quickly, tying up less money in inventory.', 'Asset turnover, revenue taken relative to average total assets, is above 1.18.', 'Trade receivables turnover, revenue taken relative to average trade receivables, exceeds 10.47 times per year.', 'Revenue exceeds €803 thousand.'], ARRAY[true, true, false, false, true], ARRAY['TRUE — Inventory turnover ≈ 3.99.', 'TRUE — High turnover signals faster stock rotation.', 'FALSE — Asset turnover ≈ 1.00.', 'FALSE — Receivables turnover ≈ 7.30.', 'TRUE — Revenue = 901.'], '2/5', 20, 'full' ),
( '6.5', 'CASE 6.5.021', 'Liquidity From the Balance Sheet 21', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=387
Current liabilities=222
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 471 |
| Machinery | 175 |
| Office equipment | 74 |
| Patents, trademarks and licences | 90 |
| Inventory | 166 |
| Trade receivables | 107 |
| Cash and cash equivalents | 114 |
| Total assets | **1197** |
| **EQUITY** | |
| Share capital | 130 |
| Retained earnings | 555 |
| Total equity | **685** |
| **LIABILITIES** | |
| Long-term bank loan | 214 |
| Bonds payable | 76 |
| Trade payables | 152 |
| Bank overdraft | 70 |
| Total liabilities | **512** |
| Total equity and liabilities | **1197** |

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.86.', 'The equity ratio is below 27.7%.', 'Working capital of €165 thousand is positive on this balance sheet.', 'The debt ratio exceeds 54.7%.', 'Buildings make up more than 44.2% of total assets.'], ARRAY[false, false, true, false, false], ARRAY['FALSE — Current ratio ≈ 1.74.', 'FALSE — Equity ratio ≈ 57.2%.', 'TRUE — Working capital = 165.', 'FALSE — Debt ratio ≈ 42.8%.', 'FALSE — Buildings are about 39.3% of total assets.'], '3/5', 21, 'full' ),
( '6.5', 'CASE 6.5.022', 'The Acid-Test Liquidity Check Explained', 'Analyze why applying ratio benchmarks drawn from an unrelated industry can mislead rather than inform. Evaluate the following economic assertions:', ARRAY['A business carrying large seasonal inventories can show a materially lower acid-test ratio than its current ratio would suggest, even when its overall liquidity position is otherwise adequate.', 'Lenders sometimes write minimum liquidity or gearing requirements into loan agreements, using ratios such as the current ratio or the debt ratio to monitor ongoing risk.', 'Negative working capital is not automatically a sign of financial distress for a business that collects cash from customers well before it must pay its own suppliers.', 'A business can report a profit for the year and still face a liquidity squeeze if that profit is tied up in inventory or receivables rather than held as cash.', 'Return on equity and return on capital employed both start from profit before interest and tax but relate it to a different capital base, owners'' equity in one case and total long-term capital in the other.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Large seasonal inventory can widen the gap between the acid-test ratio and the current ratio without implying a liquidity problem.', 'TRUE — Loan agreements can embed minimum liquidity or gearing ratios as ongoing risk monitors.', 'TRUE — Fast cash collection ahead of supplier payment can make negative working capital manageable rather than distressed.', 'TRUE — Profit tied up in inventory or receivables, rather than cash, can still leave a business facing a liquidity squeeze.', 'TRUE — Both return measures use profit before interest and tax but divide it by different capital bases.'], '4/5', 22, 'full' ),
( '6.5', 'CASE 6.5.023', 'The Acid-Test Liquidity Check for Analysts', 'Review how working capital is defined and why a positive balance is generally preferred to a negative one. Evaluate the following economic assertions:', ARRAY['A firm''s inventory turnover and asset turnover can move in different directions in the same year if inventory management improves while overall investment in non-current assets expands.', 'Using a single year-end balance instead of an average figure never distorts a turnover ratio calculation.', 'Inventory turnover relates revenue to average inventory rather than relating cost of sales to average inventory.', 'A higher inventory turnover figure generally indicates that more money is being tied up in unsold stock for longer periods.', 'Inventory turnover is always expressed in currency units rather than as a number of times per year.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Inventory turnover and asset turnover need not move together, since they relate to different parts of the asset base.', 'FALSE — A single year-end balance can distort turnover ratios, which is exactly why averages are preferred.', 'FALSE — Inventory turnover uses cost of sales relative to average inventory, not revenue.', 'FALSE — Higher inventory turnover indicates faster stock rotation and less money tied up, not more.', 'FALSE — Inventory turnover is conventionally expressed as a number of times per year, not in currency units.'], '4/5', 23, 'full' ),
( '6.5', 'CASE 6.5.024', 'The Acid-Test Liquidity Check Across Sectors', 'Review how the current ratio and the acid-test ratio each measure short-term liquidity, and why they can diverge for inventory-heavy businesses. Evaluate the following economic assertions:', ARRAY['Working capital for a supermarket chain is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital.', 'A supermarket chain is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account.', 'The current ratio for a supermarket chain sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations.', 'The equity ratio expresses total liabilities as a percentage of total assets rather than expressing equity as a percentage of total assets.', 'The equity ratio and the debt ratio always move in the same direction, both rising or both falling together.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — The standard working capital definition applies to a supermarket chain: current assets minus current liabilities.', 'TRUE — Positive working capital is generally preferable for a supermarket chain as a cushion over short-term obligations.', 'TRUE — Current ratio analysis for a supermarket chain compares current assets with current liabilities.', 'FALSE — The equity ratio is equity, not liabilities, expressed as a percentage of total assets; that description matches the debt ratio instead.', 'FALSE — Because equity and liabilities finance the same total assets, the equity ratio and debt ratio move inversely, not together.'], '3/5', 24, 'full' ),
( '6.5', 'CASE 6.5.025', 'Asset and Inventory Turnover 25', 'Consider the following extract (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Beginning versus ending balances"]]
Total assets | Beginning=790 | Ending=1050
Inventory | Beginning=147 | Ending=195
[[/CHART]]

| Item (€ thousands) | Amount |
| --- | ---: |
| Revenue | 1,288 |
| Cost of sales | 811 |
| Total assets at the beginning of the year | 790 |
| Total assets at the end of the year | 1050 |
| Inventory at the beginning of the year | 147 |
| Inventory at the end of the year | 195 |
| Trade receivables at the beginning of the year | 140 |
| Trade receivables at the end of the year | 140 |

Evaluate the following economic assertions:', ARRAY['On average, revenue remains outstanding in trade receivables for more than 53 days.', 'Inventory grew by more than 36.8% between Year 1 and Year 2.', 'Inventory turnover is exactly 4.11 times per year.', 'Asset turnover, revenue taken relative to average total assets, is above 1.14.', 'Inventory turnover, cost of sales taken relative to average inventory, is below 7.12 times per year.'], ARRAY[false, false, false, true, true], ARRAY['FALSE — Average collection period ≈ 40 days.', 'FALSE — Inventory changed by about 32.7% between the two years.', 'FALSE — Inventory turnover ≈ 4.74.', 'TRUE — Asset turnover ≈ 1.40.', 'TRUE — Inventory turnover ≈ 4.74.'], '2/5', 25, 'full' ),
( '6.5', 'CASE 6.5.026', 'Balance Sheet Structure Review 26', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=359
Machinery=267
Patents, trademarks and licences=33
Inventory=107
Trade receivables=135
Cash and cash equivalents=96
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 359 |
| Machinery | 267 |
| Office equipment | 30 |
| Patents, trademarks and licences | 33 |
| Inventory | 107 |
| Trade receivables | 135 |
| Cash and cash equivalents | 96 |
| Total assets | **1027** |
| **EQUITY** | |
| Share capital | 170 |
| Retained earnings | 256 |
| Total equity | **426** |
| **LIABILITIES** | |
| Long-term bank loan | 349 |
| Bonds payable | 85 |
| Trade payables | 135 |
| Bank overdraft | 32 |
| Total liabilities | **601** |
| Total equity and liabilities | **1027** |

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.16.', 'The current ratio is below 1.21.', 'Buildings make up more than 45.6% of total assets.', 'Inventory make up more than 47.1% of current assets.', 'Trade receivables make up less than 35.9% of current assets.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Current ratio ≈ 2.02.', 'FALSE — Current ratio ≈ 2.02.', 'FALSE — Buildings are about 35.0% of total assets.', 'FALSE — Inventory are about 31.7% of current assets.', 'FALSE — Trade receivables are about 39.9% of current assets.'], '4/5', 26, 'full' ),
( '6.5', 'CASE 6.5.027', 'Return and Cash Flow Extract 27', 'Consider the following combined extracts (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=361
Machinery=175
Inventory=257
Trade receivables=95
Cash and cash equivalents=98
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 361 |
| Machinery | 175 |
| Office equipment | 39 |
| Patents, trademarks and licences | 23 |
| Inventory | 257 |
| Trade receivables | 95 |
| Cash and cash equivalents | 98 |
| Total assets | **1048** |
| **EQUITY** | |
| Share capital | 143 |
| Retained earnings | 344 |
| Total equity | **487** |
| **LIABILITIES** | |
| Long-term bank loan | 261 |
| Bonds payable | 86 |
| Trade payables | 183 |
| Bank overdraft | 31 |
| Total liabilities | **561** |
| Total equity and liabilities | **1048** |

| Income statement extract (€ thousands) | Amount |
| --- | ---: |
| Operating result | 211 |

| Cash flow statement extract (€ thousands) | Amount |
| --- | ---: |
| Cash flow from operating activities | 232 |
| Cash flow from investing activities | (260) |
| Cash flow from financing activities | 76 |
| Cash and cash equivalents at the beginning of the year | 50 |

Evaluate the following economic assertions:', ARRAY['Return on equity, the operating result taken as a percentage of total equity, exceeds 25.4%.', 'Cash flow from operating activities amounts to less than 85.6% of the operating result, indicating profit is only partly backed by cash.', 'With cash flow from operating activities of €232 thousand, cash flow from investing activities was an inflow this year.', 'Inventory make up more than 25.1% of total assets.', 'Return on capital employed, the operating result taken relative to equity plus non-current liabilities, exceeds 15.2%.'], ARRAY[true, false, false, false, true], ARRAY['TRUE — Return on equity ≈ 43.3%.', 'FALSE — Cash conversion ≈ 110.0% of the operating result.', 'FALSE — Investing cash flow = -260.', 'FALSE — Inventory are about 24.5% of total assets.', 'TRUE — Return on capital employed ≈ 25.3%.'], '5/5', 27, 'full' ),
( '6.5', 'CASE 6.5.028', 'Turnover and Liquidity Extract 28', 'Consider the following extract (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Beginning versus ending balances"]]
Total assets | Beginning=900 | Ending=961
Inventory | Beginning=145 | Ending=178
[[/CHART]]

| Item (€ thousands) | Amount |
| --- | ---: |
| Revenue | 1,249 |
| Cost of sales | 783 |
| Total assets at the beginning of the year | 900 |
| Total assets at the end of the year | 961 |
| Inventory at the beginning of the year | 145 |
| Inventory at the end of the year | 178 |
| Trade receivables at the beginning of the year | 110 |
| Trade receivables at the end of the year | 121 |

Evaluate the following economic assertions:', ARRAY['Asset turnover, revenue taken relative to average total assets, is above 1.23.', 'Inventory turnover, cost of sales taken relative to average inventory, is below 5.8 times per year.', 'Trade receivables turnover, revenue taken relative to average trade receivables, exceeds 10.76 times per year.', 'With inventory turnover of about 4.8 times a year on this extract, a higher figure would generally mean stock is sold and replaced more quickly, tying up less money in inventory.', 'Revenue exceeds €1,145 thousand.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Asset turnover ≈ 1.34.', 'TRUE — Inventory turnover ≈ 4.85.', 'TRUE — Receivables turnover ≈ 10.81.', 'TRUE — High turnover signals faster stock rotation.', 'TRUE — Revenue = 1,249.'], '5/5', 28, 'full' ),
( '6.5', 'CASE 6.5.029', 'Balance Sheet Structure Review 29', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=463
Current liabilities=128
[[/CHART]]

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

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.55.', 'The equity ratio is below 28.7%.', 'The debt ratio exceeds 76.4%.', 'Working capital of €335 thousand is positive on this balance sheet.', 'Buildings make up more than 50.7% of total assets.'], ARRAY[true, false, false, true, false], ARRAY['TRUE — Current ratio ≈ 3.62.', 'FALSE — Equity ratio ≈ 65.5%.', 'FALSE — Debt ratio ≈ 34.5%.', 'TRUE — Working capital = 335.', 'FALSE — Buildings are about 36.0% of total assets.'], '3/5', 29, 'full' ),
( '6.5', 'CASE 6.5.030', 'The Acid-Test Liquidity Check in Context', 'Consider a brewery group reviewing whether revenue growth is matched by efficient use of its total asset base. Evaluate the following economic assertions:', ARRAY['Return on equity for a supermarket chain relates the profit before interest and tax generated during the period to the equity that owners have invested in the business.', 'A rising debt ratio always reduces financial risk for the owners of a business regardless of how the additional funds are used.', 'Financial statement analysis is concerned only with profitability and has no established framework for examining liquidity, efficiency or structure.', 'A return on capital employed figure for a supermarket chain carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry.', 'Asset turnover for a supermarket chain relates revenue earned during the period to the average total assets employed to generate that revenue.'], ARRAY[true, false, false, true, true], ARRAY['TRUE — Return on equity for a supermarket chain links profit before interest and tax to owners'' equity.', 'FALSE — A rising debt ratio generally signals greater reliance on borrowing and higher, not lower, financial risk for owners.', 'FALSE — Financial statement analysis is commonly organised around liquidity, profitability, efficiency and structure together, not profitability alone.', 'TRUE — Return on capital employed for a supermarket chain is most useful in comparison rather than in isolation.', 'TRUE — Asset turnover measures how much revenue a supermarket chain generates per unit of average assets.'], '4/5', 30, 'full' ),
( '6.5', 'CASE 6.5.031', 'Short-Term Borrowing and Working Capital in Practice', 'Review how return on equity relates profit before interest and tax to the equity that owners have invested in the business. Evaluate the following economic assertions:', ARRAY['The equity ratio for a supermarket chain expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds.', 'If a supermarket chain draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken because current liabilities rise.', 'Working capital for a consulting firm is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital.', 'A consulting firm is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account.', 'The current ratio for a consulting firm sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Equity ratio analysis for a supermarket chain expresses equity as a share of total assets.', 'TRUE — Short-term borrowing can boost cash yet reduce working capital for a supermarket chain.', 'TRUE — The standard working capital definition applies to a consulting firm: current assets minus current liabilities.', 'TRUE — Positive working capital is generally preferable for a consulting firm as a cushion over short-term obligations.', 'TRUE — Current ratio analysis for a consulting firm compares current assets with current liabilities.'], '2/5', 31, 'full' ),
( '6.5', 'CASE 6.5.032', 'Short-Term Borrowing and Working Capital Explained', 'Review how return on capital employed relates profit before interest and tax to the long-term capital financing a business. Evaluate the following economic assertions:', ARRAY['Return on equity for a consulting firm relates the profit before interest and tax generated during the period to the equity that owners have invested in the business.', 'A return on capital employed figure for a consulting firm carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry.', 'Asset turnover for a consulting firm relates revenue earned during the period to the average total assets employed to generate that revenue.', 'The equity ratio for a consulting firm expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds.', 'If a consulting firm draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken because current liabilities rise.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Return on equity for a consulting firm links profit before interest and tax to owners'' equity.', 'TRUE — Return on capital employed for a consulting firm is most useful in comparison rather than in isolation.', 'TRUE — Asset turnover measures how much revenue a consulting firm generates per unit of average assets.', 'TRUE — Equity ratio analysis for a consulting firm expresses equity as a share of total assets.', 'TRUE — Short-term borrowing can boost cash yet reduce working capital for a consulting firm.'], '3/5', 32, 'full' ),
( '6.5', 'CASE 6.5.033', 'Short-Term Borrowing and Working Capital for Analysts', 'Review why a single return on capital employed figure is best interpreted alongside comparable years or similar businesses rather than in isolation. Evaluate the following economic assertions:', ARRAY['Liquidity analysis is primarily concerned with long-term profitability rather than whether short-term obligations can be met.', 'Profitability analysis judges profit in absolute currency terms alone, without ever relating it to equity or capital employed.', 'Working capital for a manufacturer is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital.', 'Financial efficiency analysis has nothing to do with how assets are used to generate revenue.', 'Financial structure analysis focuses exclusively on inventory levels rather than the balance between equity and borrowed funds.'], ARRAY[false, false, true, false, false], ARRAY['FALSE — Liquidity analysis focuses on meeting short-term obligations, not long-term profitability.', 'FALSE — Profitability analysis relates profit to the equity or capital employed that generated it, not just its absolute size.', 'TRUE — The standard working capital definition applies to a manufacturer: current assets minus current liabilities.', 'FALSE — Financial efficiency analysis is specifically about how effectively assets generate revenue.', 'FALSE — Financial structure analysis examines the equity-versus-borrowing balance, not inventory levels.'], '5/5', 33, 'full' ),
( '6.5', 'CASE 6.5.034', 'Turnover and Liquidity Extract 34', 'Consider the following extract (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Beginning versus ending balances"]]
Total assets | Beginning=823 | Ending=1028
Inventory | Beginning=169 | Ending=179
[[/CHART]]

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

Evaluate the following economic assertions:', ARRAY['Inventory turnover, cost of sales taken relative to average inventory, is below 6.87 times per year.', 'Asset turnover, revenue taken relative to average total assets, is above 1.48.', 'With inventory turnover of about 3.9 times a year on this extract, a higher figure would generally mean stock is sold and replaced more quickly, tying up less money in inventory.', 'Revenue exceeds €999 thousand.', 'Trade receivables turnover, revenue taken relative to average trade receivables, exceeds 10.4 times per year.'], ARRAY[true, false, true, true, false], ARRAY['TRUE — Inventory turnover ≈ 3.87.', 'FALSE — Asset turnover ≈ 1.10.', 'TRUE — High turnover signals faster stock rotation.', 'TRUE — Revenue = 1,019.', 'FALSE — Receivables turnover ≈ 8.42.'], '5/5', 34, 'full' ),
( '6.5', 'CASE 6.5.035', 'Balance Sheet Structure Review 35', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=482
Machinery=270
Patents, trademarks and licences=62
Inventory=143
Trade receivables=100
Cash and cash equivalents=31
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 482 |
| Machinery | 270 |
| Office equipment | 69 |
| Patents, trademarks and licences | 62 |
| Inventory | 143 |
| Trade receivables | 100 |
| Cash and cash equivalents | 31 |
| Total assets | **1157** |
| **EQUITY** | |
| Share capital | 175 |
| Retained earnings | 411 |
| Total equity | **586** |
| **LIABILITIES** | |
| Long-term bank loan | 300 |
| Bonds payable | 47 |
| Trade payables | 135 |
| Bank overdraft | 89 |
| Total liabilities | **571** |
| Total equity and liabilities | **1157** |

Evaluate the following economic assertions:', ARRAY['Trade receivables make up less than 47.9% of current assets.', 'The equity ratio is below 16.6%.', 'The debt ratio exceeds 51.3%.', 'Buildings make up more than 52.2% of total assets.', 'Inventory of €143 thousand is correctly classified as a current asset rather than a non-current intangible asset.'], ARRAY[true, false, false, false, true], ARRAY['TRUE — Trade receivables are about 36.5% of current assets.', 'FALSE — Equity ratio ≈ 50.6%.', 'FALSE — Debt ratio ≈ 49.4%.', 'FALSE — Buildings are about 41.7% of total assets.', 'TRUE — Inventory is always a current asset.'], '5/5', 35, 'full' ),
( '6.5', 'CASE 6.5.036', 'Combined Statement Extract 36', 'Consider the following combined extracts (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=289
Machinery=184
Inventory=151
Trade receivables=162
Cash and cash equivalents=37
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 289 |
| Machinery | 184 |
| Office equipment | 50 |
| Patents, trademarks and licences | 73 |
| Inventory | 151 |
| Trade receivables | 162 |
| Cash and cash equivalents | 37 |
| Total assets | **946** |
| **EQUITY** | |
| Share capital | 134 |
| Retained earnings | 34 |
| Total equity | **168** |
| **LIABILITIES** | |
| Long-term bank loan | 426 |
| Bonds payable | 54 |
| Trade payables | 208 |
| Bank overdraft | 90 |
| Total liabilities | **778** |
| Total equity and liabilities | **946** |

| Income statement extract (€ thousands) | Amount |
| --- | ---: |
| Operating result | 240 |

| Cash flow statement extract (€ thousands) | Amount |
| --- | ---: |
| Cash flow from operating activities | 234 |
| Cash flow from investing activities | (208) |
| Cash flow from financing activities | 64 |
| Cash and cash equivalents at the beginning of the year | -53 |

Evaluate the following economic assertions:', ARRAY['Working capital equals exactly €-3 thousand.', 'Cash flow from operating activities amounts to less than 85% of the operating result, indicating profit is only partly backed by cash.', 'Return on equity, the operating result taken as a percentage of total equity, exceeds 30.7%.', 'Cash flow from operating activities amounts to more than 102.8% of the operating result.', 'With cash flow from operating activities of €234 thousand, cash flow from investing activities was an inflow this year.'], ARRAY[false, false, true, false, false], ARRAY['FALSE — Working capital = 52.', 'FALSE — Cash conversion ≈ 97.5% of the operating result.', 'TRUE — Return on equity ≈ 142.9%.', 'FALSE — Cash conversion ≈ 97.5% of the operating result.', 'FALSE — Investing cash flow = -208.'], '5/5', 36, 'full' ),
( '6.5', 'CASE 6.5.037', 'Asset Composition Chart 37', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=409
Current liabilities=168
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 309 |
| Machinery | 180 |
| Office equipment | 59 |
| Patents, trademarks and licences | 99 |
| Inventory | 219 |
| Trade receivables | 99 |
| Cash and cash equivalents | 91 |
| Total assets | **1056** |
| **EQUITY** | |
| Share capital | 172 |
| Retained earnings | 395 |
| Total equity | **567** |
| **LIABILITIES** | |
| Long-term bank loan | 271 |
| Bonds payable | 50 |
| Trade payables | 120 |
| Bank overdraft | 48 |
| Total liabilities | **489** |
| Total equity and liabilities | **1056** |

Evaluate the following economic assertions:', ARRAY['The current ratio is below 1.07.', 'The equity ratio is below 41.1%.', 'The debt ratio exceeds 64.2%.', 'Buildings make up more than 42.5% of total assets.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 0.92 times over.'], ARRAY[false, false, false, false, true], ARRAY['FALSE — Current ratio ≈ 2.43.', 'FALSE — Equity ratio ≈ 53.7%.', 'FALSE — Debt ratio ≈ 46.3%.', 'FALSE — Buildings are about 29.3% of total assets.', 'TRUE — Acid-test ratio ≈ 1.13.'], '5/5', 37, 'full' ),
( '6.5', 'CASE 6.5.038', 'Balance Sheet Structure Review 38', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=436
Current liabilities=152
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 478 |
| Machinery | 278 |
| Office equipment | 46 |
| Patents, trademarks and licences | 63 |
| Inventory | 217 |
| Trade receivables | 107 |
| Cash and cash equivalents | 112 |
| Total assets | **1301** |
| **EQUITY** | |
| Share capital | 158 |
| Retained earnings | 663 |
| Total equity | **821** |
| **LIABILITIES** | |
| Long-term bank loan | 244 |
| Bonds payable | 84 |
| Trade payables | 117 |
| Bank overdraft | 35 |
| Total liabilities | **480** |
| Total equity and liabilities | **1301** |

Evaluate the following economic assertions:', ARRAY['The equity ratio is below 34.9%.', 'Working capital of €284 thousand is positive on this balance sheet.', 'Cash and cash equivalents make up more than 31% of current assets.', 'The long-term bank loan of €244 thousand should be classified within equity rather than liabilities.', 'The bank overdraft of €35 thousand belongs under non-current liabilities because overdrafts usually run for several years.'], ARRAY[false, true, false, false, false], ARRAY['FALSE — Equity ratio ≈ 63.1%.', 'TRUE — Working capital = 284.', 'FALSE — Cash and cash equivalents are about 25.7% of current assets.', 'FALSE — A bank loan is a liability, not equity, regardless of its size.', 'FALSE — A bank overdraft is a current liability.'], '4/5', 38, 'full' ),
( '6.5', 'CASE 6.5.039', 'Asset and Inventory Turnover 39', 'Consider the following extract (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Beginning versus ending balances"]]
Total assets | Beginning=761 | Ending=1015
Inventory | Beginning=128 | Ending=160
[[/CHART]]

| Item (€ thousands) | Amount |
| --- | ---: |
| Revenue | 1,177 |
| Cost of sales | 793 |
| Total assets at the beginning of the year | 761 |
| Total assets at the end of the year | 1015 |
| Inventory at the beginning of the year | 128 |
| Inventory at the end of the year | 160 |
| Trade receivables at the beginning of the year | 134 |
| Trade receivables at the end of the year | 110 |

Evaluate the following economic assertions:', ARRAY['Asset turnover, revenue taken relative to average total assets, is above 1.19.', 'Inventory turnover, cost of sales taken relative to average inventory, is below 7.42 times per year.', 'Average inventory make up less than 16.3% of average total assets.', 'Trade receivables turnover, revenue taken relative to average trade receivables, exceeds 10.99 times per year.', 'With inventory turnover of about 5.5 times a year on this extract, a higher figure would generally mean stock is sold and replaced more quickly, tying up less money in inventory.'], ARRAY[true, true, true, false, true], ARRAY['TRUE — Asset turnover ≈ 1.33.', 'TRUE — Inventory turnover ≈ 5.51.', 'TRUE — Average inventory are about 16.2% of average total assets.', 'FALSE — Receivables turnover ≈ 9.65.', 'TRUE — High turnover signals faster stock rotation.'], '4/5', 39, 'full' ),
( '6.5', 'CASE 6.5.040', 'Short-Term Borrowing and Working Capital Across Sectors', 'Consider a publishing house analysing whether short-term borrowing improved cash but weakened working capital. Evaluate the following economic assertions:', ARRAY['A manufacturer is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account.', 'The current ratio for a manufacturer sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations.', 'Return on equity for a manufacturer relates the profit before interest and tax generated during the period to the equity that owners have invested in the business.', 'Comparing a business''s ratios with unrelated competitors in a completely different industry always produces the most reliable benchmark.', 'Tracking the same ratio for a business over several years reveals nothing beyond what a single year''s figure already shows.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Positive working capital is generally preferable for a manufacturer as a cushion over short-term obligations.', 'TRUE — Current ratio analysis for a manufacturer compares current assets with current liabilities.', 'TRUE — Return on equity for a manufacturer links profit before interest and tax to owners'' equity.', 'FALSE — Same-industry peers, not unrelated competitors, provide the most reliable ratio benchmark.', 'FALSE — Multi-year tracking reveals trends that a single year''s figure cannot show on its own.'], '3/5', 40, 'full' ),
( '6.5', 'CASE 6.5.041', 'Balance Sheet Structure Review 41', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=493
Machinery=254
Patents, trademarks and licences=36
Inventory=113
Trade receivables=64
Cash and cash equivalents=91
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 493 |
| Machinery | 254 |
| Office equipment | 43 |
| Patents, trademarks and licences | 36 |
| Inventory | 113 |
| Trade receivables | 64 |
| Cash and cash equivalents | 91 |
| Total assets | **1094** |
| **EQUITY** | |
| Share capital | 221 |
| Retained earnings | 299 |
| Total equity | **520** |
| **LIABILITIES** | |
| Long-term bank loan | 388 |
| Bonds payable | 40 |
| Trade payables | 96 |
| Bank overdraft | 50 |
| Total liabilities | **574** |
| Total equity and liabilities | **1094** |

Evaluate the following economic assertions:', ARRAY['The current ratio is below 0.87.', 'The equity ratio is below 36.9%.', 'Buildings make up more than 55.6% of total assets.', 'The current ratio exceeds 1.68.', 'The combined total of equity and non-current liabilities exceeds non-current assets by more than 34.7%.'], ARRAY[false, false, false, true, false], ARRAY['FALSE — Current ratio ≈ 1.84.', 'FALSE — Equity ratio ≈ 47.5%.', 'FALSE — Buildings are about 45.1% of total assets.', 'TRUE — Current ratio ≈ 1.84.', 'FALSE — Long-term financing covers non-current assets by about 14.8%.'], '5/5', 41, 'full' ),
( '6.5', 'CASE 6.5.042', 'Combined Statement Extract 42', 'Consider the following combined extracts (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=434
Machinery=220
Inventory=275
Trade receivables=75
Cash and cash equivalents=102
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 434 |
| Machinery | 220 |
| Office equipment | 66 |
| Patents, trademarks and licences | 89 |
| Inventory | 275 |
| Trade receivables | 75 |
| Cash and cash equivalents | 102 |
| Total assets | **1261** |
| **EQUITY** | |
| Share capital | 129 |
| Retained earnings | 523 |
| Total equity | **652** |
| **LIABILITIES** | |
| Long-term bank loan | 285 |
| Bonds payable | 43 |
| Trade payables | 224 |
| Bank overdraft | 57 |
| Total liabilities | **609** |
| Total equity and liabilities | **1261** |

| Income statement extract (€ thousands) | Amount |
| --- | ---: |
| Operating result | 165 |

| Cash flow statement extract (€ thousands) | Amount |
| --- | ---: |
| Cash flow from operating activities | 160 |
| Cash flow from investing activities | (295) |
| Cash flow from financing activities | 47 |
| Cash and cash equivalents at the beginning of the year | 190 |

Evaluate the following economic assertions:', ARRAY['Return on equity, the operating result taken as a percentage of total equity, exceeds 27.3%.', 'Return on capital employed, the operating result taken relative to equity plus non-current liabilities, exceeds 13.9%.', 'Working capital equals exactly €231 thousand.', 'The net change in cash and cash equivalents equals exactly €-60 thousand.', 'With an operating result of €165 thousand, return on capital employed is mainly useful when comparing similar businesses or the same business over time, not as a standalone absolute number.'], ARRAY[false, true, false, false, true], ARRAY['FALSE — Return on equity ≈ 25.3%.', 'TRUE — Return on capital employed ≈ 16.8%.', 'FALSE — Working capital = 171.', 'FALSE — Net change = -88.', 'TRUE — Comparative context matters for return on capital employed.'], '5/5', 42, 'full' ),
( '6.5', 'CASE 6.5.043', 'Short-Term Borrowing and Working Capital in Context', 'Review how inventory turnover links cost of sales to average inventory, and what a rising figure typically indicates. Evaluate the following economic assertions:', ARRAY['Benchmarks drawn from any industry can be applied to any other industry without adjustment and will always remain reliable.', 'A return on capital employed figure for a manufacturer carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry.', 'A rounded assessment of a business can rely entirely on a single liquidity ratio without any need to consider profitability, efficiency or structure.', 'Return on equity and return on capital employed are calculated in exactly the same way and always produce identical results for the same business.', 'Inventory turnover and asset turnover must always move in the same direction within a given year for any business.'], ARRAY[false, true, false, false, false], ARRAY['FALSE — Cross-industry benchmarks require adjustment for differing business models to remain reliable.', 'TRUE — Return on capital employed for a manufacturer is most useful in comparison rather than in isolation.', 'FALSE — A rounded assessment draws on liquidity, profitability, efficiency and structure together, not one ratio alone.', 'FALSE — The two measures use the same profit figure but divide it by different capital bases, so they generally differ.', 'FALSE — Inventory turnover and asset turnover relate to different parts of the asset base and can move independently.'], '5/5', 43, 'full' ),
( '6.5', 'CASE 6.5.044', 'Turnover and Liquidity Extract 44', 'Consider the following extract (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Beginning versus ending balances"]]
Total assets | Beginning=886 | Ending=967
Inventory | Beginning=134 | Ending=158
[[/CHART]]

| Item (€ thousands) | Amount |
| --- | ---: |
| Revenue | 1,108 |
| Cost of sales | 775 |
| Total assets at the beginning of the year | 886 |
| Total assets at the end of the year | 967 |
| Inventory at the beginning of the year | 134 |
| Inventory at the end of the year | 158 |
| Trade receivables at the beginning of the year | 96 |
| Trade receivables at the end of the year | 127 |

Evaluate the following economic assertions:', ARRAY['Trade receivables turnover, revenue taken relative to average trade receivables, exceeds 9.96 times per year.', 'Asset turnover, revenue taken relative to average total assets, is above 1.05.', 'On average, revenue remains outstanding in trade receivables for more than 39 days.', 'Inventory turnover, cost of sales taken relative to average inventory, is below 6.79 times per year.', 'Average inventory make up less than 15.9% of average total assets.'], ARRAY[false, true, false, true, true], ARRAY['FALSE — Receivables turnover ≈ 9.94.', 'TRUE — Asset turnover ≈ 1.20.', 'FALSE — Average collection period ≈ 37 days.', 'TRUE — Inventory turnover ≈ 5.31.', 'TRUE — Average inventory are about 15.8% of average total assets.'], '4/5', 44, 'full' ),
( '6.5', 'CASE 6.5.045', 'Liquidity From the Balance Sheet 45', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=227
Current liabilities=287
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 401 |
| Machinery | 210 |
| Office equipment | 76 |
| Patents, trademarks and licences | 55 |
| Inventory | 111 |
| Trade receivables | 80 |
| Cash and cash equivalents | 36 |
| Total assets | **969** |
| **EQUITY** | |
| Share capital | 134 |
| Retained earnings | 283 |
| Total equity | **417** |
| **LIABILITIES** | |
| Long-term bank loan | 216 |
| Bonds payable | 49 |
| Trade payables | 212 |
| Bank overdraft | 75 |
| Total liabilities | **552** |
| Total equity and liabilities | **969** |

Evaluate the following economic assertions:', ARRAY['Inventory of €111 thousand is correctly classified as a current asset rather than a non-current intangible asset.', 'The current ratio is exactly 0.79.', 'Working capital equals exactly €-60 thousand.', 'The acid-test ratio is exactly 0.40.', 'Total assets of €969 thousand equal total equity plus total liabilities.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Inventory is always a current asset.', 'TRUE — Current ratio is 0.79.', 'TRUE — Working capital = -60.', 'TRUE — Acid-test ratio ≈ 0.40.', 'TRUE — The balance sheet balances at 969.'], '2/5', 45, 'full' ),
( '6.5', 'CASE 6.5.046', 'Return on Equity Explained in Practice', 'Review how the equity ratio and the debt ratio together describe the way a business finances its total assets. Evaluate the following economic assertions:', ARRAY['Asset turnover for a manufacturer relates revenue earned during the period to the average total assets employed to generate that revenue.', 'The equity ratio for a manufacturer expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds.', 'Working capital for a supermarket chain is calculated by subtracting current assets from current liabilities.', 'A supermarket chain reporting negative working capital always holds more cash than it needs for its daily operations.', 'The acid-test ratio for a supermarket chain includes inventory within current assets before comparing the total with current liabilities.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Asset turnover measures how much revenue a manufacturer generates per unit of average assets.', 'TRUE — Equity ratio analysis for a manufacturer expresses equity as a share of total assets.', 'FALSE — Working capital is current assets minus current liabilities, not the reverse.', 'FALSE — Negative working capital means current liabilities exceed current assets and does not imply excess cash.', 'FALSE — The acid-test ratio excludes inventory to provide a stricter liquidity test.'], '3/5', 46, 'full' ),
( '6.5', 'CASE 6.5.047', 'Return on Equity Explained Explained', 'Review why comparing ratios with industry peers or with a business''s own history over time improves interpretation. Evaluate the following economic assertions:', ARRAY['The debt ratio for a manufacturer expresses the proportion of total assets financed through liabilities rather than through owners'' equity.', 'If a manufacturer draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken because current liabilities rise.', 'Working capital for a construction group is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital.', 'A construction group is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account.', 'The current ratio for a construction group sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Debt ratio analysis for a manufacturer expresses total liabilities relative to total assets.', 'TRUE — Short-term borrowing can boost cash yet reduce working capital for a manufacturer.', 'TRUE — The standard working capital definition applies to a construction group: current assets minus current liabilities.', 'TRUE — Positive working capital is generally preferable for a construction group as a cushion over short-term obligations.', 'TRUE — Current ratio analysis for a construction group compares current assets with current liabilities.'], '5/5', 47, 'full' ),
( '6.5', 'CASE 6.5.048', 'Turnover and Liquidity Extract 48', 'Consider the following extract (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Beginning versus ending balances"]]
Total assets | Beginning=847 | Ending=983
Inventory | Beginning=156 | Ending=199
[[/CHART]]

| Item (€ thousands) | Amount |
| --- | ---: |
| Revenue | 1,223 |
| Cost of sales | 795 |
| Total assets at the beginning of the year | 847 |
| Total assets at the end of the year | 983 |
| Inventory at the beginning of the year | 156 |
| Inventory at the end of the year | 199 |
| Trade receivables at the beginning of the year | 96 |
| Trade receivables at the end of the year | 131 |

Evaluate the following economic assertions:', ARRAY['Asset turnover, revenue taken relative to average total assets, is above 1.4.', 'On average, revenue remains outstanding in trade receivables for more than 56 days.', 'Inventory turnover, cost of sales taken relative to average inventory, is below 6.06 times per year.', 'Trade receivables turnover, revenue taken relative to average trade receivables, exceeds 9.87 times per year.', 'Average inventory make up less than 18.8% of average total assets.'], ARRAY[false, false, true, true, false], ARRAY['FALSE — Asset turnover ≈ 1.34.', 'FALSE — Average collection period ≈ 34 days.', 'TRUE — Inventory turnover ≈ 4.48.', 'TRUE — Receivables turnover ≈ 10.78.', 'FALSE — Average inventory are about 19.4% of average total assets.'], '5/5', 48, 'full' ),
( '6.5', 'CASE 6.5.049', 'Return on Equity Explained for Analysts', 'Consider a listed manufacturer whose shareholders compare its return on equity with sector peers. Evaluate the following economic assertions:', ARRAY['Return on equity for a construction group relates the profit before interest and tax generated during the period to the equity that owners have invested in the business.', 'A single return on capital employed figure for a supermarket chain is always fully meaningful on its own, without any need to compare it against other years or similar businesses.', 'Return on equity for a supermarket chain is calculated by comparing the cash balance on the balance sheet with total liabilities rather than relating profit to equity.', 'Inventory turnover for a supermarket chain is calculated by dividing revenue by average inventory rather than by relating cost of sales to average inventory.', 'The current ratio and the acid-test ratio for a supermarket chain always produce identical results, regardless of how much inventory the business holds.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Return on equity for a construction group links profit before interest and tax to owners'' equity.', 'FALSE — Return on capital employed gains meaning chiefly from comparisons over time or with peers.', 'FALSE — Return on equity relates profit before interest and tax to equity, not cash to liabilities.', 'FALSE — Inventory turnover uses cost of sales relative to average inventory, not revenue.', 'FALSE — When inventory is material, the acid-test ratio differs from the current ratio.'], '3/5', 49, 'full' ),
( '6.5', 'CASE 6.5.050', 'Balance Sheet Structure Review 50', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=303
Machinery=275
Patents, trademarks and licences=54
Inventory=185
Trade receivables=73
Cash and cash equivalents=83
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 303 |
| Machinery | 275 |
| Office equipment | 31 |
| Patents, trademarks and licences | 54 |
| Inventory | 185 |
| Trade receivables | 73 |
| Cash and cash equivalents | 83 |
| Total assets | **1004** |
| **EQUITY** | |
| Share capital | 204 |
| Retained earnings | 160 |
| Total equity | **364** |
| **LIABILITIES** | |
| Long-term bank loan | 419 |
| Bonds payable | 77 |
| Trade payables | 62 |
| Bank overdraft | 82 |
| Total liabilities | **640** |
| Total equity and liabilities | **1004** |

Evaluate the following economic assertions:', ARRAY['After excluding inventory, the remaining current assets still cover current liabilities more than 0.98 times over.', 'The current ratio is below 0.66.', 'The equity ratio is below 40.5%.', 'Inventory make up more than 37.8% of current assets.', 'Trade receivables make up less than 44.5% of current assets.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — Acid-test ratio ≈ 1.08.', 'FALSE — Current ratio ≈ 2.37.', 'TRUE — Equity ratio ≈ 36.3%.', 'TRUE — Inventory are about 54.3% of current assets.', 'TRUE — Trade receivables are about 21.4% of current assets.'], '5/5', 50, 'full' ),
( '6.5', 'CASE 6.5.051', 'Return on Equity Explained Across Sectors', 'Review why applying ratio benchmarks drawn from an unrelated industry can mislead rather than inform. Evaluate the following economic assertions:', ARRAY['A return on capital employed figure for a construction group carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry.', 'Working capital for a consulting firm is calculated by subtracting current assets from current liabilities.', 'Asset turnover for a construction group relates revenue earned during the period to the average total assets employed to generate that revenue.', 'The equity ratio for a construction group expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds.', 'A consulting firm reporting negative working capital always holds more cash than it needs for its daily operations.'], ARRAY[true, false, true, true, false], ARRAY['TRUE — Return on capital employed for a construction group is most useful in comparison rather than in isolation.', 'FALSE — Working capital is current assets minus current liabilities, not the reverse.', 'TRUE — Asset turnover measures how much revenue a construction group generates per unit of average assets.', 'TRUE — Equity ratio analysis for a construction group expresses equity as a share of total assets.', 'FALSE — Negative working capital means current liabilities exceed current assets and does not imply excess cash.'], '3/5', 51, 'full' ),
( '6.5', 'CASE 6.5.052', 'Combined Statement Extract 52', 'Consider the following combined extracts (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=469
Machinery=134
Inventory=236
Trade receivables=107
Cash and cash equivalents=114
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 469 |
| Machinery | 134 |
| Office equipment | 51 |
| Patents, trademarks and licences | 33 |
| Inventory | 236 |
| Trade receivables | 107 |
| Cash and cash equivalents | 114 |
| Total assets | **1144** |
| **EQUITY** | |
| Share capital | 222 |
| Retained earnings | 392 |
| Total equity | **614** |
| **LIABILITIES** | |
| Long-term bank loan | 276 |
| Bonds payable | 80 |
| Trade payables | 87 |
| Bank overdraft | 87 |
| Total liabilities | **530** |
| Total equity and liabilities | **1144** |

| Income statement extract (€ thousands) | Amount |
| --- | ---: |
| Operating result | 176 |

| Cash flow statement extract (€ thousands) | Amount |
| --- | ---: |
| Cash flow from operating activities | 194 |
| Cash flow from investing activities | (283) |
| Cash flow from financing activities | 39 |
| Cash and cash equivalents at the beginning of the year | 164 |

Evaluate the following economic assertions:', ARRAY['With an operating result of €176 thousand, return on capital employed is mainly useful when comparing similar businesses or the same business over time, not as a standalone absolute number.', 'Working capital equals exactly €283 thousand.', 'The net change in cash and cash equivalents equals exactly €-50 thousand.', 'Cash and cash equivalents at the end of the year exceed €94 thousand.', 'Cash flow from operating activities amounts to more than 109.6% of the operating result.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Comparative context matters for return on capital employed.', 'TRUE — Working capital = 283.', 'TRUE — Net change = -50.', 'TRUE — Ending cash ≈ €114 thousand.', 'TRUE — Cash conversion ≈ 110.2% of the operating result.'], '5/5', 52, 'full' ),
( '6.5', 'CASE 6.5.053', 'Asset and Inventory Turnover 53', 'Consider the following extract (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Beginning versus ending balances"]]
Total assets | Beginning=775 | Ending=932
Inventory | Beginning=156 | Ending=161
[[/CHART]]

| Item (€ thousands) | Amount |
| --- | ---: |
| Revenue | 1,221 |
| Cost of sales | 827 |
| Total assets at the beginning of the year | 775 |
| Total assets at the end of the year | 932 |
| Inventory at the beginning of the year | 156 |
| Inventory at the end of the year | 161 |
| Trade receivables at the beginning of the year | 119 |
| Trade receivables at the end of the year | 121 |

Evaluate the following economic assertions:', ARRAY['Asset turnover, revenue taken relative to average total assets, is above 1.54.', 'Inventory turnover, cost of sales taken relative to average inventory, is below 4.76 times per year.', 'On average, revenue remains outstanding in trade receivables for more than 45 days.', 'Average inventory make up less than 12.1% of average total assets.', 'Trade receivables turnover, revenue taken relative to average trade receivables, exceeds 8.32 times per year.'], ARRAY[false, false, false, false, true], ARRAY['FALSE — Asset turnover ≈ 1.43.', 'FALSE — Inventory turnover ≈ 5.22.', 'FALSE — Average collection period ≈ 36 days.', 'FALSE — Average inventory are about 18.6% of average total assets.', 'TRUE — Receivables turnover ≈ 10.18.'], '5/5', 53, 'full' ),
( '6.5', 'CASE 6.5.054', 'Liquidity From the Balance Sheet 54', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=456
Current liabilities=213
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 354 |
| Machinery | 195 |
| Office equipment | 39 |
| Patents, trademarks and licences | 50 |
| Inventory | 221 |
| Trade receivables | 179 |
| Cash and cash equivalents | 56 |
| Total assets | **1094** |
| **EQUITY** | |
| Share capital | 212 |
| Retained earnings | 318 |
| Total equity | **530** |
| **LIABILITIES** | |
| Long-term bank loan | 292 |
| Bonds payable | 59 |
| Trade payables | 179 |
| Bank overdraft | 34 |
| Total liabilities | **564** |
| Total equity and liabilities | **1094** |

Evaluate the following economic assertions:', ARRAY['Working capital of €243 thousand is positive on this balance sheet.', 'Inventory make up more than 32.5% of current assets.', 'The current ratio is below 1.17.', 'Trade receivables make up less than 50.6% of current assets.', 'The equity ratio is below 20.9%.'], ARRAY[true, true, false, true, false], ARRAY['TRUE — Working capital = 243.', 'TRUE — Inventory are about 48.5% of current assets.', 'FALSE — Current ratio ≈ 2.14.', 'TRUE — Trade receivables are about 39.3% of current assets.', 'FALSE — Equity ratio ≈ 48.4%.'], '2/5', 54, 'full' ),
( '6.5', 'CASE 6.5.055', 'Return on Equity Explained in Context', 'Examine how working capital is defined and why a positive balance is generally preferred to a negative one. Evaluate the following economic assertions:', ARRAY['The debt ratio for a construction group expresses the proportion of total assets financed through liabilities rather than through owners'' equity.', 'If a construction group draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken because current liabilities rise.', 'The acid-test ratio for a consulting firm includes inventory within current assets before comparing the total with current liabilities.', 'Working capital for a fashion retailer is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital.', 'A fashion retailer is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account.'], ARRAY[true, true, false, true, true], ARRAY['TRUE — Debt ratio analysis for a construction group expresses total liabilities relative to total assets.', 'TRUE — Short-term borrowing can boost cash yet reduce working capital for a construction group.', 'FALSE — The acid-test ratio excludes inventory to provide a stricter liquidity test.', 'TRUE — The standard working capital definition applies to a fashion retailer: current assets minus current liabilities.', 'TRUE — Positive working capital is generally preferable for a fashion retailer as a cushion over short-term obligations.'], '4/5', 55, 'full' ),
( '6.5', 'CASE 6.5.056', 'Return on Capital Employed Explained in Practice', 'Examine how the current ratio and the acid-test ratio each measure short-term liquidity, and why they can diverge for inventory-heavy businesses. Evaluate the following economic assertions:', ARRAY['A single return on capital employed figure for a consulting firm is always fully meaningful on its own, without any need to compare it against other years or similar businesses.', 'Return on equity for a consulting firm is calculated by comparing the cash balance on the balance sheet with total liabilities rather than relating profit to equity.', 'The current ratio for a fashion retailer sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations.', 'Return on equity for a fashion retailer relates the profit before interest and tax generated during the period to the equity that owners have invested in the business.', 'Inventory turnover for a consulting firm is calculated by dividing revenue by average inventory rather than by relating cost of sales to average inventory.'], ARRAY[false, false, true, true, false], ARRAY['FALSE — Return on capital employed gains meaning chiefly from comparisons over time or with peers.', 'FALSE — Return on equity relates profit before interest and tax to equity, not cash to liabilities.', 'TRUE — Current ratio analysis for a fashion retailer compares current assets with current liabilities.', 'TRUE — Return on equity for a fashion retailer links profit before interest and tax to owners'' equity.', 'FALSE — Inventory turnover uses cost of sales relative to average inventory, not revenue.'], '4/5', 56, 'full' ),
( '6.5', 'CASE 6.5.057', 'Asset and Inventory Turnover 57', 'Consider the following extract (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Beginning versus ending balances"]]
Total assets | Beginning=771 | Ending=991
Inventory | Beginning=128 | Ending=193
[[/CHART]]

| Item (€ thousands) | Amount |
| --- | ---: |
| Revenue | 1,134 |
| Cost of sales | 719 |
| Total assets at the beginning of the year | 771 |
| Total assets at the end of the year | 991 |
| Inventory at the beginning of the year | 128 |
| Inventory at the end of the year | 193 |
| Trade receivables at the beginning of the year | 110 |
| Trade receivables at the end of the year | 140 |

Evaluate the following economic assertions:', ARRAY['Asset turnover, revenue taken relative to average total assets, is above 1.1.', 'Trade receivables turnover, revenue taken relative to average trade receivables, exceeds 9.66 times per year.', 'Inventory turnover, cost of sales taken relative to average inventory, is below 6.46 times per year.', 'With inventory turnover of about 4.5 times a year on this extract, a higher figure would generally mean stock is sold and replaced more quickly, tying up less money in inventory.', 'Inventory grew by more than 37.4% between Year 1 and Year 2.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — Asset turnover ≈ 1.29.', 'FALSE — Receivables turnover ≈ 9.07.', 'TRUE — Inventory turnover ≈ 4.48.', 'TRUE — High turnover signals faster stock rotation.', 'TRUE — Inventory changed by about 50.8% between the two years.'], '5/5', 57, 'full' ),
( '6.5', 'CASE 6.5.058', 'Asset Composition Chart 58', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=372
Machinery=124
Patents, trademarks and licences=81
Inventory=124
Trade receivables=65
Cash and cash equivalents=72
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 372 |
| Machinery | 124 |
| Office equipment | 69 |
| Patents, trademarks and licences | 81 |
| Inventory | 124 |
| Trade receivables | 65 |
| Cash and cash equivalents | 72 |
| Total assets | **907** |
| **EQUITY** | |
| Share capital | 185 |
| Retained earnings | 98 |
| Total equity | **283** |
| **LIABILITIES** | |
| Long-term bank loan | 330 |
| Bonds payable | 88 |
| Trade payables | 178 |
| Bank overdraft | 28 |
| Total liabilities | **624** |
| Total equity and liabilities | **907** |

Evaluate the following economic assertions:', ARRAY['The current ratio is below 1.29.', 'The debt ratio exceeds 65.2%.', 'Inventory make up more than 40.1% of current assets.', 'Cash and cash equivalents make up more than 20.2% of current assets.', 'Inventory of €124 thousand is correctly classified as a current asset rather than a non-current intangible asset.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Current ratio ≈ 1.27.', 'TRUE — Debt ratio ≈ 68.8%.', 'TRUE — Inventory are about 47.5% of current assets.', 'TRUE — Cash and cash equivalents are about 27.6% of current assets.', 'TRUE — Inventory is always a current asset.'], '5/5', 58, 'full' ),
( '6.5', 'CASE 6.5.059', 'Return on Capital Employed Explained Explained', 'Consider a wholesaler that drew down a short-term facility to pay suppliers and is reviewing the effect on working capital. Evaluate the following economic assertions:', ARRAY['The current ratio and the acid-test ratio for a consulting firm always produce identical results, regardless of how much inventory the business holds.', 'A return on capital employed figure for a fashion retailer carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry.', 'Working capital for a manufacturer is calculated by subtracting current assets from current liabilities.', 'A manufacturer reporting negative working capital always holds more cash than it needs for its daily operations.', 'The acid-test ratio for a manufacturer includes inventory within current assets before comparing the total with current liabilities.'], ARRAY[false, true, false, false, false], ARRAY['FALSE — When inventory is material, the acid-test ratio differs from the current ratio.', 'TRUE — Return on capital employed for a fashion retailer is most useful in comparison rather than in isolation.', 'FALSE — Working capital is current assets minus current liabilities, not the reverse.', 'FALSE — Negative working capital means current liabilities exceed current assets and does not imply excess cash.', 'FALSE — The acid-test ratio excludes inventory to provide a stricter liquidity test.'], '5/5', 59, 'full' ),
( '6.5', 'CASE 6.5.060', 'Combined Statement Extract 60', 'Consider the following combined extracts (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=380
Machinery=185
Inventory=204
Trade receivables=114
Cash and cash equivalents=98
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 380 |
| Machinery | 185 |
| Office equipment | 45 |
| Patents, trademarks and licences | 88 |
| Inventory | 204 |
| Trade receivables | 114 |
| Cash and cash equivalents | 98 |
| Total assets | **1114** |
| **EQUITY** | |
| Share capital | 159 |
| Retained earnings | 245 |
| Total equity | **404** |
| **LIABILITIES** | |
| Long-term bank loan | 439 |
| Bonds payable | 52 |
| Trade payables | 177 |
| Bank overdraft | 42 |
| Total liabilities | **710** |
| Total equity and liabilities | **1114** |

| Income statement extract (€ thousands) | Amount |
| --- | ---: |
| Operating result | 232 |

| Cash flow statement extract (€ thousands) | Amount |
| --- | ---: |
| Cash flow from operating activities | 252 |
| Cash flow from investing activities | (203) |
| Cash flow from financing activities | 72 |
| Cash and cash equivalents at the beginning of the year | -23 |

Evaluate the following economic assertions:', ARRAY['The net change in cash and cash equivalents equals exactly €139 thousand.', 'Cash flow from operating activities amounts to less than 78.4% of the operating result, indicating profit is only partly backed by cash.', 'Return on equity, the operating result taken as a percentage of total equity, exceeds 35.3%.', 'With cash flow from operating activities of €252 thousand, cash flow from investing activities was an inflow this year.', 'Inventory make up more than 26.4% of total assets.'], ARRAY[false, false, true, false, false], ARRAY['FALSE — Net change = 121.', 'FALSE — Cash conversion ≈ 108.6% of the operating result.', 'TRUE — Return on equity ≈ 57.4%.', 'FALSE — Investing cash flow = -203.', 'FALSE — Inventory are about 18.3% of total assets.'], '3/5', 60, 'full' ),
( '6.5', 'CASE 6.5.061', 'Asset and Inventory Turnover 61', 'Consider the following extract (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Beginning versus ending balances"]]
Total assets | Beginning=865 | Ending=984
Inventory | Beginning=166 | Ending=167
[[/CHART]]

| Item (€ thousands) | Amount |
| --- | ---: |
| Revenue | 1,036 |
| Cost of sales | 682 |
| Total assets at the beginning of the year | 865 |
| Total assets at the end of the year | 984 |
| Inventory at the beginning of the year | 166 |
| Inventory at the end of the year | 167 |
| Trade receivables at the beginning of the year | 120 |
| Trade receivables at the end of the year | 149 |

Evaluate the following economic assertions:', ARRAY['Trade receivables turnover, revenue taken relative to average trade receivables, exceeds 10.79 times per year.', 'Average inventory make up less than 16.4% of average total assets.', 'Inventory grew by more than 30% between Year 1 and Year 2.', 'Cost of sales amounts to more than 65.9% of revenue.', 'Inventory turnover, cost of sales taken relative to average inventory, is below 4.89 times per year.'], ARRAY[false, false, false, false, true], ARRAY['FALSE — Receivables turnover ≈ 7.70.', 'FALSE — Average inventory are about 18.0% of average total assets.', 'FALSE — Inventory changed by about 0.6% between the two years.', 'FALSE — Cost of sales is about 65.8% of revenue.', 'TRUE — Inventory turnover ≈ 4.10.'], '4/5', 61, 'full' ),
( '6.5', 'CASE 6.5.062', 'Return on Capital Employed Explained for Analysts', 'Examine how return on equity relates profit before interest and tax to the equity that owners have invested in the business. Evaluate the following economic assertions:', ARRAY['Asset turnover for a fashion retailer relates revenue earned during the period to the average total assets employed to generate that revenue.', 'The equity ratio for a fashion retailer expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds.', 'If a fashion retailer draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken because current liabilities rise.', 'Working capital for a utility company is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital.', 'A utility company is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Asset turnover measures how much revenue a fashion retailer generates per unit of average assets.', 'TRUE — Equity ratio analysis for a fashion retailer expresses equity as a share of total assets.', 'TRUE — Short-term borrowing can boost cash yet reduce working capital for a fashion retailer.', 'TRUE — The standard working capital definition applies to a utility company: current assets minus current liabilities.', 'TRUE — Positive working capital is generally preferable for a utility company as a cushion over short-term obligations.'], '2/5', 62, 'full' ),
( '6.5', 'CASE 6.5.063', 'Return on Capital Employed Explained Across Sectors', 'Examine how return on capital employed relates profit before interest and tax to the long-term capital financing a business. Evaluate the following economic assertions:', ARRAY['A single return on capital employed figure for a manufacturer is always fully meaningful on its own, without any need to compare it against other years or similar businesses.', 'The current ratio for a utility company sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations.', 'Return on equity for a manufacturer is calculated by comparing the cash balance on the balance sheet with total liabilities rather than relating profit to equity.', 'Return on equity for a utility company relates the profit before interest and tax generated during the period to the equity that owners have invested in the business.', 'A return on capital employed figure for a utility company carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry.'], ARRAY[false, true, false, true, true], ARRAY['FALSE — Return on capital employed gains meaning chiefly from comparisons over time or with peers.', 'TRUE — Current ratio analysis for a utility company compares current assets with current liabilities.', 'FALSE — Return on equity relates profit before interest and tax to equity, not cash to liabilities.', 'TRUE — Return on equity for a utility company links profit before interest and tax to owners'' equity.', 'TRUE — Return on capital employed for a utility company is most useful in comparison rather than in isolation.'], '4/5', 63, 'full' ),
( '6.5', 'CASE 6.5.064', 'Return on Capital Employed Explained in Context', 'Examine why a single return on capital employed figure is best interpreted alongside comparable years or similar businesses rather than in isolation. Evaluate the following economic assertions:', ARRAY['Asset turnover for a utility company relates revenue earned during the period to the average total assets employed to generate that revenue.', 'The equity ratio for a utility company expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds.', 'If a utility company draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken because current liabilities rise.', 'Inventory turnover for a manufacturer is calculated by dividing revenue by average inventory rather than by relating cost of sales to average inventory.', 'Working capital for a wholesaler is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital.'], ARRAY[true, true, true, false, true], ARRAY['TRUE — Asset turnover measures how much revenue a utility company generates per unit of average assets.', 'TRUE — Equity ratio analysis for a utility company expresses equity as a share of total assets.', 'TRUE — Short-term borrowing can boost cash yet reduce working capital for a utility company.', 'FALSE — Inventory turnover uses cost of sales relative to average inventory, not revenue.', 'TRUE — The standard working capital definition applies to a wholesaler: current assets minus current liabilities.'], '4/5', 64, 'full' ),
( '6.5', 'CASE 6.5.065', 'Balance Sheet Structure Review 65', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=265
Current liabilities=207
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 319 |
| Machinery | 213 |
| Office equipment | 58 |
| Patents, trademarks and licences | 81 |
| Inventory | 138 |
| Trade receivables | 87 |
| Cash and cash equivalents | 40 |
| Total assets | **936** |
| **EQUITY** | |
| Share capital | 198 |
| Retained earnings | 127 |
| Total equity | **325** |
| **LIABILITIES** | |
| Long-term bank loan | 352 |
| Bonds payable | 52 |
| Trade payables | 152 |
| Bank overdraft | 55 |
| Total liabilities | **611** |
| Total equity and liabilities | **936** |

Evaluate the following economic assertions:', ARRAY['Working capital of €58 thousand is positive on this balance sheet.', 'The debt ratio exceeds 60.2%.', 'Inventory make up more than 40.9% of current assets.', 'Inventory of €138 thousand is correctly classified as a current asset rather than a non-current intangible asset.', 'The acid-test ratio is exactly 0.61.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Working capital = 58.', 'TRUE — Debt ratio ≈ 65.3%.', 'TRUE — Inventory are about 52.1% of current assets.', 'TRUE — Inventory is always a current asset.', 'TRUE — Acid-test ratio ≈ 0.61.'], '2/5', 65, 'full' ),
( '6.5', 'CASE 6.5.066', 'Turnover and Liquidity Extract 66', 'Consider the following extract (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Beginning versus ending balances"]]
Total assets | Beginning=755 | Ending=1036
Inventory | Beginning=155 | Ending=165
[[/CHART]]

| Item (€ thousands) | Amount |
| --- | ---: |
| Revenue | 933 |
| Cost of sales | 652 |
| Total assets at the beginning of the year | 755 |
| Total assets at the end of the year | 1036 |
| Inventory at the beginning of the year | 155 |
| Inventory at the end of the year | 165 |
| Trade receivables at the beginning of the year | 107 |
| Trade receivables at the end of the year | 108 |

Evaluate the following economic assertions:', ARRAY['Inventory turnover, cost of sales taken relative to average inventory, is below 5.17 times per year.', 'Asset turnover, revenue taken relative to average total assets, is above 1.26.', 'Trade receivables turnover, revenue taken relative to average trade receivables, exceeds 7.72 times per year.', 'Average inventory make up less than 18.7% of average total assets.', 'Asset turnover is exactly 1.29.'], ARRAY[true, false, true, true, false], ARRAY['TRUE — Inventory turnover ≈ 4.08.', 'FALSE — Asset turnover ≈ 1.04.', 'TRUE — Receivables turnover ≈ 8.68.', 'TRUE — Average inventory are about 17.9% of average total assets.', 'FALSE — Asset turnover ≈ 1.04.'], '4/5', 66, 'full' ),
( '6.5', 'CASE 6.5.067', 'Capital Employed and Long-Term Funds in Practice', 'Consider a transport operator comparing this year''s profitability ratios with its own figures from five years earlier. Evaluate the following economic assertions:', ARRAY['A wholesaler is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account.', 'The current ratio for a wholesaler sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations.', 'The current ratio and the acid-test ratio for a manufacturer always produce identical results, regardless of how much inventory the business holds.', 'Return on equity for a wholesaler relates the profit before interest and tax generated during the period to the equity that owners have invested in the business.', 'A return on capital employed figure for a wholesaler carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry.'], ARRAY[true, true, false, true, true], ARRAY['TRUE — Positive working capital is generally preferable for a wholesaler as a cushion over short-term obligations.', 'TRUE — Current ratio analysis for a wholesaler compares current assets with current liabilities.', 'FALSE — When inventory is material, the acid-test ratio differs from the current ratio.', 'TRUE — Return on equity for a wholesaler links profit before interest and tax to owners'' equity.', 'TRUE — Return on capital employed for a wholesaler is most useful in comparison rather than in isolation.'], '5/5', 67, 'full' ),
( '6.5', 'CASE 6.5.068', 'Balance Sheet Structure Review 68', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=307
Machinery=225
Patents, trademarks and licences=67
Inventory=215
Trade receivables=156
Cash and cash equivalents=80
[[/CHART]]

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

Evaluate the following economic assertions:', ARRAY['After excluding inventory, the remaining current assets still cover current liabilities more than 1.25 times over.', 'The current ratio exceeds 1.53.', 'The debt ratio exceeds 69.9%.', 'Working capital of €184 thousand is positive on this balance sheet.', 'Trade receivables make up less than 55% of current assets.'], ARRAY[false, true, false, true, true], ARRAY['FALSE — Acid-test ratio ≈ 0.88.', 'TRUE — Current ratio ≈ 1.69.', 'FALSE — Debt ratio ≈ 59.0%.', 'TRUE — Working capital = 184.', 'TRUE — Trade receivables are about 34.6% of current assets.'], '5/5', 68, 'full' ),
( '6.5', 'CASE 6.5.069', 'Return and Cash Flow Extract 69', 'Consider the following combined extracts (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=501
Machinery=187
Inventory=84
Trade receivables=121
Cash and cash equivalents=85
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 501 |
| Machinery | 187 |
| Office equipment | 73 |
| Patents, trademarks and licences | 88 |
| Inventory | 84 |
| Trade receivables | 121 |
| Cash and cash equivalents | 85 |
| Total assets | **1139** |
| **EQUITY** | |
| Share capital | 230 |
| Retained earnings | 273 |
| Total equity | **503** |
| **LIABILITIES** | |
| Long-term bank loan | 302 |
| Bonds payable | 67 |
| Trade payables | 198 |
| Bank overdraft | 69 |
| Total liabilities | **636** |
| Total equity and liabilities | **1139** |

| Income statement extract (€ thousands) | Amount |
| --- | ---: |
| Operating result | 184 |

| Cash flow statement extract (€ thousands) | Amount |
| --- | ---: |
| Cash flow from operating activities | 208 |
| Cash flow from investing activities | (243) |
| Cash flow from financing activities | 50 |
| Cash and cash equivalents at the beginning of the year | 70 |

Evaluate the following economic assertions:', ARRAY['Return on capital employed, the operating result taken relative to equity plus non-current liabilities, exceeds 13.3%.', 'Return on equity, the operating result taken as a percentage of total equity, exceeds 39.5%.', 'The net change in cash and cash equivalents equals exactly €-6 thousand.', 'Cash flow from operating activities amounts to less than 81.6% of the operating result, indicating profit is only partly backed by cash.', 'With an operating result of €184 thousand, return on capital employed is mainly useful when comparing similar businesses or the same business over time, not as a standalone absolute number.'], ARRAY[true, false, false, false, true], ARRAY['TRUE — Return on capital employed ≈ 21.1%.', 'FALSE — Return on equity ≈ 36.6%.', 'FALSE — Net change = 15.', 'FALSE — Cash conversion ≈ 113.0% of the operating result.', 'TRUE — Comparative context matters for return on capital employed.'], '2/5', 69, 'full' ),
( '6.5', 'CASE 6.5.070', 'Capital Employed and Long-Term Funds Explained', 'Examine how inventory turnover links cost of sales to average inventory, and what a rising figure typically indicates. Evaluate the following economic assertions:', ARRAY['Working capital for a construction group is calculated by subtracting current assets from current liabilities.', 'A construction group reporting negative working capital always holds more cash than it needs for its daily operations.', 'Asset turnover for a wholesaler relates revenue earned during the period to the average total assets employed to generate that revenue.', 'The equity ratio for a wholesaler expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds.', 'If a wholesaler draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken because current liabilities rise.'], ARRAY[false, false, true, true, true], ARRAY['FALSE — Working capital is current assets minus current liabilities, not the reverse.', 'FALSE — Negative working capital means current liabilities exceed current assets and does not imply excess cash.', 'TRUE — Asset turnover measures how much revenue a wholesaler generates per unit of average assets.', 'TRUE — Equity ratio analysis for a wholesaler expresses equity as a share of total assets.', 'TRUE — Short-term borrowing can boost cash yet reduce working capital for a wholesaler.'], '5/5', 70, 'full' ),
( '6.5', 'CASE 6.5.071', 'Asset and Inventory Turnover 71', 'Consider the following extract (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Beginning versus ending balances"]]
Total assets | Beginning=794 | Ending=931
Inventory | Beginning=155 | Ending=164
[[/CHART]]

| Item (€ thousands) | Amount |
| --- | ---: |
| Revenue | 1,026 |
| Cost of sales | 712 |
| Total assets at the beginning of the year | 794 |
| Total assets at the end of the year | 931 |
| Inventory at the beginning of the year | 155 |
| Inventory at the end of the year | 164 |
| Trade receivables at the beginning of the year | 101 |
| Trade receivables at the end of the year | 143 |

Evaluate the following economic assertions:', ARRAY['Inventory turnover, cost of sales taken relative to average inventory, is below 5.18 times per year.', 'Trade receivables turnover, revenue taken relative to average trade receivables, exceeds 7.13 times per year.', 'On average, revenue remains outstanding in trade receivables for more than 32 days.', 'Revenue exceeds €965 thousand.', 'Cost of sales amounts to more than 65.8% of revenue.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Inventory turnover ≈ 4.46.', 'TRUE — Receivables turnover ≈ 8.41.', 'TRUE — Average collection period ≈ 43 days.', 'TRUE — Revenue = 1,026.', 'TRUE — Cost of sales is about 69.4% of revenue.'], '5/5', 71, 'full' ),
( '6.5', 'CASE 6.5.072', 'Liquidity From the Balance Sheet 72', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=289
Current liabilities=170
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 425 |
| Machinery | 168 |
| Office equipment | 76 |
| Patents, trademarks and licences | 83 |
| Inventory | 109 |
| Trade receivables | 117 |
| Cash and cash equivalents | 63 |
| Total assets | **1041** |
| **EQUITY** | |
| Share capital | 197 |
| Retained earnings | 196 |
| Total equity | **393** |
| **LIABILITIES** | |
| Long-term bank loan | 418 |
| Bonds payable | 60 |
| Trade payables | 140 |
| Bank overdraft | 30 |
| Total liabilities | **648** |
| Total equity and liabilities | **1041** |

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.4.', 'The current ratio is below 0.91.', 'Working capital of €119 thousand is positive on this balance sheet.', 'The equity ratio is below 36.4%.', 'The debt ratio exceeds 71.7%.'], ARRAY[true, false, true, false, false], ARRAY['TRUE — Current ratio ≈ 1.70.', 'FALSE — Current ratio ≈ 1.70.', 'TRUE — Working capital = 119.', 'FALSE — Equity ratio ≈ 37.8%.', 'FALSE — Debt ratio ≈ 62.2%.'], '5/5', 72, 'full' ),
( '6.5', 'CASE 6.5.073', 'Asset and Inventory Turnover 73', 'Consider the following extract (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Beginning versus ending balances"]]
Total assets | Beginning=849 | Ending=988
Inventory | Beginning=134 | Ending=174
[[/CHART]]

| Item (€ thousands) | Amount |
| --- | ---: |
| Revenue | 1,036 |
| Cost of sales | 659 |
| Total assets at the beginning of the year | 849 |
| Total assets at the end of the year | 988 |
| Inventory at the beginning of the year | 134 |
| Inventory at the end of the year | 174 |
| Trade receivables at the beginning of the year | 138 |
| Trade receivables at the end of the year | 106 |

Evaluate the following economic assertions:', ARRAY['Trade receivables turnover, revenue taken relative to average trade receivables, exceeds 8.61 times per year.', 'Inventory turnover, cost of sales taken relative to average inventory, is below 7.44 times per year.', 'On average, revenue remains outstanding in trade receivables for more than 44 days.', 'Average inventory make up less than 15% of average total assets.', 'Revenue exceeds €1,072 thousand.'], ARRAY[false, true, false, false, false], ARRAY['FALSE — Receivables turnover ≈ 8.49.', 'TRUE — Inventory turnover ≈ 4.28.', 'FALSE — Average collection period ≈ 43 days.', 'FALSE — Average inventory are about 16.8% of average total assets.', 'FALSE — Revenue = 1,036.'], '5/5', 73, 'full' ),
( '6.5', 'CASE 6.5.074', 'Balance Sheet Structure Review 74', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=305
Machinery=176
Patents, trademarks and licences=39
Inventory=169
Trade receivables=103
Cash and cash equivalents=83
[[/CHART]]

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

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.8.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 1.14 times over.', 'Buildings make up more than 43.4% of total assets.', 'The long-term bank loan of €396 thousand should be classified within equity rather than liabilities.', 'Working capital of €178 thousand is positive on this balance sheet.'], ARRAY[true, false, false, false, true], ARRAY['TRUE — Current ratio ≈ 2.01.', 'FALSE — Acid-test ratio ≈ 1.05.', 'FALSE — Buildings are about 32.7% of total assets.', 'FALSE — A bank loan is a liability, not equity, regardless of its size.', 'TRUE — Working capital = 178.'], '2/5', 74, 'full' ),
( '6.5', 'CASE 6.5.075', 'Return and Cash Flow Extract 75', 'Consider the following combined extracts (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=364
Machinery=158
Inventory=237
Trade receivables=140
Cash and cash equivalents=45
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 364 |
| Machinery | 158 |
| Office equipment | 67 |
| Patents, trademarks and licences | 46 |
| Inventory | 237 |
| Trade receivables | 140 |
| Cash and cash equivalents | 45 |
| Total assets | **1057** |
| **EQUITY** | |
| Share capital | 203 |
| Retained earnings | 402 |
| Total equity | **605** |
| **LIABILITIES** | |
| Long-term bank loan | 218 |
| Bonds payable | 70 |
| Trade payables | 82 |
| Bank overdraft | 82 |
| Total liabilities | **452** |
| Total equity and liabilities | **1057** |

| Income statement extract (€ thousands) | Amount |
| --- | ---: |
| Operating result | 173 |

| Cash flow statement extract (€ thousands) | Amount |
| --- | ---: |
| Cash flow from operating activities | 171 |
| Cash flow from investing activities | (229) |
| Cash flow from financing activities | 80 |
| Cash and cash equivalents at the beginning of the year | 23 |

Evaluate the following economic assertions:', ARRAY['Return on equity, the operating result taken as a percentage of total equity, exceeds 24.2%.', 'With an operating result of €173 thousand, return on capital employed is mainly useful when comparing similar businesses or the same business over time, not as a standalone absolute number.', 'The net change in cash and cash equivalents equals exactly €22 thousand.', 'Cash and cash equivalents at the end of the year exceed €38 thousand.', 'Inventory make up more than 22.4% of total assets.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Return on equity ≈ 28.6%.', 'TRUE — Comparative context matters for return on capital employed.', 'TRUE — Net change = 22.', 'TRUE — Ending cash ≈ €45 thousand.', 'TRUE — Inventory are about 22.4% of total assets.'], '5/5', 75, 'full' ),
( '6.5', 'CASE 6.5.076', 'Turnover and Liquidity Extract 76', 'Consider the following extract (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Beginning versus ending balances"]]
Total assets | Beginning=858 | Ending=1006
Inventory | Beginning=152 | Ending=159
[[/CHART]]

| Item (€ thousands) | Amount |
| --- | ---: |
| Revenue | 1,226 |
| Cost of sales | 796 |
| Total assets at the beginning of the year | 858 |
| Total assets at the end of the year | 1006 |
| Inventory at the beginning of the year | 152 |
| Inventory at the end of the year | 159 |
| Trade receivables at the beginning of the year | 132 |
| Trade receivables at the end of the year | 151 |

Evaluate the following economic assertions:', ARRAY['Asset turnover, revenue taken relative to average total assets, is above 1.32.', 'Inventory turnover, cost of sales taken relative to average inventory, is below 6.08 times per year.', 'On average, revenue remains outstanding in trade receivables for more than 33 days.', 'Asset turnover is exactly 1.32.', 'Inventory turnover is exactly 5.12 times per year.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — Asset turnover ≈ 1.32.', 'TRUE — Inventory turnover ≈ 5.12.', 'TRUE — Average collection period ≈ 42 days.', 'TRUE — Asset turnover ≈ 1.32.', 'TRUE — Inventory turnover ≈ 5.12.'], '4/5', 76, 'full' ),
( '6.5', 'CASE 6.5.077', 'Balance Sheet Structure Review 77', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=516
Current liabilities=237
[[/CHART]]

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

Evaluate the following economic assertions:', ARRAY['Working capital of €279 thousand is positive on this balance sheet.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 0.9 times over.', 'Buildings make up more than 38.9% of total assets.', 'Inventory make up more than 42.9% of current assets.', 'The combined total of equity and non-current liabilities exceeds non-current assets by more than 26.8%.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Working capital = 279.', 'TRUE — Acid-test ratio ≈ 1.20.', 'TRUE — Buildings are about 41.4% of total assets.', 'TRUE — Inventory are about 44.8% of current assets.', 'TRUE — Long-term financing covers non-current assets by about 40.0%.'], '2/5', 77, 'full' ),
( '6.5', 'CASE 6.5.078', 'Turnover and Liquidity Extract 78', 'Consider the following extract (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Beginning versus ending balances"]]
Total assets | Beginning=792 | Ending=1012
Inventory | Beginning=163 | Ending=158
[[/CHART]]

| Item (€ thousands) | Amount |
| --- | ---: |
| Revenue | 914 |
| Cost of sales | 628 |
| Total assets at the beginning of the year | 792 |
| Total assets at the end of the year | 1012 |
| Inventory at the beginning of the year | 163 |
| Inventory at the end of the year | 158 |
| Trade receivables at the beginning of the year | 113 |
| Trade receivables at the end of the year | 150 |

Evaluate the following economic assertions:', ARRAY['Inventory turnover, cost of sales taken relative to average inventory, is below 4.6 times per year.', 'Asset turnover, revenue taken relative to average total assets, is above 1.45.', 'Trade receivables turnover, revenue taken relative to average trade receivables, exceeds 9.4 times per year.', 'Average inventory make up less than 17.3% of average total assets.', 'Inventory grew by more than 32% between Year 1 and Year 2.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Inventory turnover ≈ 3.91.', 'FALSE — Asset turnover ≈ 1.01.', 'FALSE — Receivables turnover ≈ 6.95.', 'FALSE — Average inventory are about 17.8% of average total assets.', 'FALSE — Inventory changed by about -3.1% between the two years.'], '3/5', 78, 'full' ),
( '6.5', 'CASE 6.5.079', 'Asset Composition Chart 79', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=506
Machinery=182
Patents, trademarks and licences=59
Inventory=238
Trade receivables=95
Cash and cash equivalents=30
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 506 |
| Machinery | 182 |
| Office equipment | 41 |
| Patents, trademarks and licences | 59 |
| Inventory | 238 |
| Trade receivables | 95 |
| Cash and cash equivalents | 30 |
| Total assets | **1151** |
| **EQUITY** | |
| Share capital | 174 |
| Retained earnings | 496 |
| Total equity | **670** |
| **LIABILITIES** | |
| Long-term bank loan | 226 |
| Bonds payable | 90 |
| Trade payables | 76 |
| Bank overdraft | 89 |
| Total liabilities | **481** |
| Total equity and liabilities | **1151** |

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.81.', 'The equity ratio is below 24%.', 'Buildings make up more than 51% of total assets.', 'Cash and cash equivalents make up more than 17% of current assets.', 'The combined total of equity and non-current liabilities exceeds non-current assets by more than 25.5%.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Current ratio ≈ 2.20.', 'FALSE — Equity ratio ≈ 58.2%.', 'FALSE — Buildings are about 44.0% of total assets.', 'FALSE — Cash and cash equivalents are about 8.3% of current assets.', 'FALSE — Long-term financing covers non-current assets by about 25.1%.'], '2/5', 79, 'full' ),
( '6.5', 'CASE 6.5.080', 'Capital Employed and Long-Term Funds for Analysts', 'Examine how the equity ratio and the debt ratio together describe the way a business finances its total assets. Evaluate the following economic assertions:', ARRAY['The acid-test ratio for a construction group includes inventory within current assets before comparing the total with current liabilities.', 'Working capital for an online retailer is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital.', 'An online retailer is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account.', 'A single return on capital employed figure for a construction group is always fully meaningful on its own, without any need to compare it against other years or similar businesses.', 'Return on equity for a construction group is calculated by comparing the cash balance on the balance sheet with total liabilities rather than relating profit to equity.'], ARRAY[false, true, true, false, false], ARRAY['FALSE — The acid-test ratio excludes inventory to provide a stricter liquidity test.', 'TRUE — The standard working capital definition applies to an online retailer: current assets minus current liabilities.', 'TRUE — Positive working capital is generally preferable for an online retailer as a cushion over short-term obligations.', 'FALSE — Return on capital employed gains meaning chiefly from comparisons over time or with peers.', 'FALSE — Return on equity relates profit before interest and tax to equity, not cash to liabilities.'], '2/5', 80, 'full' ),
( '6.5', 'CASE 6.5.081', 'Return and Cash Flow Extract 81', 'Consider the following combined extracts (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=322
Machinery=187
Inventory=226
Trade receivables=118
Cash and cash equivalents=36
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 322 |
| Machinery | 187 |
| Office equipment | 68 |
| Patents, trademarks and licences | 69 |
| Inventory | 226 |
| Trade receivables | 118 |
| Cash and cash equivalents | 36 |
| Total assets | **1026** |
| **EQUITY** | |
| Share capital | 243 |
| Retained earnings | 266 |
| Total equity | **509** |
| **LIABILITIES** | |
| Long-term bank loan | 182 |
| Bonds payable | 66 |
| Trade payables | 223 |
| Bank overdraft | 46 |
| Total liabilities | **517** |
| Total equity and liabilities | **1026** |

| Income statement extract (€ thousands) | Amount |
| --- | ---: |
| Operating result | 188 |

| Cash flow statement extract (€ thousands) | Amount |
| --- | ---: |
| Cash flow from operating activities | 181 |
| Cash flow from investing activities | (282) |
| Cash flow from financing activities | 55 |
| Cash and cash equivalents at the beginning of the year | 82 |

Evaluate the following economic assertions:', ARRAY['Working capital equals exactly €177 thousand.', 'Return on equity, the operating result taken as a percentage of total equity, exceeds 32.2%.', 'Return on capital employed, the operating result taken relative to equity plus non-current liabilities, exceeds 21.9%.', 'With an operating result of €188 thousand, return on capital employed is mainly useful when comparing similar businesses or the same business over time, not as a standalone absolute number.', 'Cash and cash equivalents at the end of the year exceed €29 thousand.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — Working capital = 111.', 'TRUE — Return on equity ≈ 36.9%.', 'TRUE — Return on capital employed ≈ 24.8%.', 'TRUE — Comparative context matters for return on capital employed.', 'TRUE — Ending cash ≈ €36 thousand.'], '5/5', 81, 'full' ),
( '6.5', 'CASE 6.5.082', 'Turnover and Liquidity Extract 82', 'Consider the following extract (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Beginning versus ending balances"]]
Total assets | Beginning=762 | Ending=1046
Inventory | Beginning=150 | Ending=188
[[/CHART]]

| Item (€ thousands) | Amount |
| --- | ---: |
| Revenue | 1,214 |
| Cost of sales | 799 |
| Total assets at the beginning of the year | 762 |
| Total assets at the end of the year | 1046 |
| Inventory at the beginning of the year | 150 |
| Inventory at the end of the year | 188 |
| Trade receivables at the beginning of the year | 98 |
| Trade receivables at the end of the year | 131 |

Evaluate the following economic assertions:', ARRAY['Inventory turnover, cost of sales taken relative to average inventory, is below 6.16 times per year.', 'Trade receivables turnover, revenue taken relative to average trade receivables, exceeds 7.63 times per year.', 'With inventory turnover of about 4.7 times a year on this extract, a higher figure would generally mean stock is sold and replaced more quickly, tying up less money in inventory.', 'Asset turnover, revenue taken relative to average total assets, is above 1.59.', 'Revenue exceeds €1,045 thousand.'], ARRAY[true, true, true, false, true], ARRAY['TRUE — Inventory turnover ≈ 4.73.', 'TRUE — Receivables turnover ≈ 10.60.', 'TRUE — High turnover signals faster stock rotation.', 'FALSE — Asset turnover ≈ 1.34.', 'TRUE — Revenue = 1,214.'], '4/5', 82, 'full' ),
( '6.5', 'CASE 6.5.083', 'Capital Employed and Long-Term Funds Across Sectors', 'Examine why comparing ratios with industry peers or with a business''s own history over time improves interpretation. Evaluate the following economic assertions:', ARRAY['The current ratio for an online retailer sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations.', 'Return on equity for an online retailer relates the profit before interest and tax generated during the period to the equity that owners have invested in the business.', 'A return on capital employed figure for an online retailer carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry.', 'Inventory turnover for a construction group is calculated by dividing revenue by average inventory rather than by relating cost of sales to average inventory.', 'Asset turnover for an online retailer relates revenue earned during the period to the average total assets employed to generate that revenue.'], ARRAY[true, true, true, false, true], ARRAY['TRUE — Current ratio analysis for an online retailer compares current assets with current liabilities.', 'TRUE — Return on equity for an online retailer links profit before interest and tax to owners'' equity.', 'TRUE — Return on capital employed for an online retailer is most useful in comparison rather than in isolation.', 'FALSE — Inventory turnover uses cost of sales relative to average inventory, not revenue.', 'TRUE — Asset turnover measures how much revenue an online retailer generates per unit of average assets.'], '2/5', 83, 'full' ),
( '6.5', 'CASE 6.5.084', 'Capital Employed and Long-Term Funds in Context', 'Consider a brewery group reviewing whether revenue growth is matched by efficient use of its total asset base. Evaluate the following economic assertions:', ARRAY['The current ratio and the acid-test ratio for a construction group always produce identical results, regardless of how much inventory the business holds.', 'The equity ratio for an online retailer expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds.', 'If an online retailer draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken because current liabilities rise.', 'Working capital for a hotel operator is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital.', 'A hotel operator is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — When inventory is material, the acid-test ratio differs from the current ratio.', 'TRUE — Equity ratio analysis for an online retailer expresses equity as a share of total assets.', 'TRUE — Short-term borrowing can boost cash yet reduce working capital for an online retailer.', 'TRUE — The standard working capital definition applies to a hotel operator: current assets minus current liabilities.', 'TRUE — Positive working capital is generally preferable for a hotel operator as a cushion over short-term obligations.'], '5/5', 84, 'full' ),
( '6.5', 'CASE 6.5.085', 'Asset Composition Chart 85', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=410
Current liabilities=259
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 501 |
| Machinery | 165 |
| Office equipment | 57 |
| Patents, trademarks and licences | 65 |
| Inventory | 187 |
| Trade receivables | 115 |
| Cash and cash equivalents | 108 |
| Total assets | **1198** |
| **EQUITY** | |
| Share capital | 169 |
| Retained earnings | 290 |
| Total equity | **459** |
| **LIABILITIES** | |
| Long-term bank loan | 435 |
| Bonds payable | 45 |
| Trade payables | 171 |
| Bank overdraft | 88 |
| Total liabilities | **739** |
| Total equity and liabilities | **1198** |

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.44.', 'The debt ratio exceeds 77%.', 'Buildings make up more than 56.7% of total assets.', 'Working capital of €151 thousand is positive on this balance sheet.', 'The equity ratio is below 44.9%.'], ARRAY[true, false, false, true, true], ARRAY['TRUE — Current ratio ≈ 1.58.', 'FALSE — Debt ratio ≈ 61.7%.', 'FALSE — Buildings are about 41.8% of total assets.', 'TRUE — Working capital = 151.', 'TRUE — Equity ratio ≈ 38.3%.'], '5/5', 85, 'full' ),
( '6.5', 'CASE 6.5.086', 'Turnover and Liquidity Extract 86', 'Consider the following extract (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Beginning versus ending balances"]]
Total assets | Beginning=844 | Ending=1030
Inventory | Beginning=169 | Ending=176
[[/CHART]]

| Item (€ thousands) | Amount |
| --- | ---: |
| Revenue | 1,076 |
| Cost of sales | 740 |
| Total assets at the beginning of the year | 844 |
| Total assets at the end of the year | 1030 |
| Inventory at the beginning of the year | 169 |
| Inventory at the end of the year | 176 |
| Trade receivables at the beginning of the year | 90 |
| Trade receivables at the end of the year | 122 |

Evaluate the following economic assertions:', ARRAY['Inventory turnover, cost of sales taken relative to average inventory, is below 6.11 times per year.', 'Asset turnover, revenue taken relative to average total assets, is above 1.22.', 'On average, revenue remains outstanding in trade receivables for more than 54 days.', 'Average inventory make up less than 13.1% of average total assets.', 'Inventory grew by more than 30.8% between Year 1 and Year 2.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Inventory turnover ≈ 4.29.', 'FALSE — Asset turnover ≈ 1.15.', 'FALSE — Average collection period ≈ 36 days.', 'FALSE — Average inventory are about 18.4% of average total assets.', 'FALSE — Inventory changed by about 4.1% between the two years.'], '5/5', 86, 'full' ),
( '6.5', 'CASE 6.5.087', 'Liquidity From the Balance Sheet 87', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=492
Machinery=249
Patents, trademarks and licences=45
Inventory=84
Trade receivables=157
Cash and cash equivalents=66
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 492 |
| Machinery | 249 |
| Office equipment | 55 |
| Patents, trademarks and licences | 45 |
| Inventory | 84 |
| Trade receivables | 157 |
| Cash and cash equivalents | 66 |
| Total assets | **1148** |
| **EQUITY** | |
| Share capital | 139 |
| Retained earnings | 389 |
| Total equity | **528** |
| **LIABILITIES** | |
| Long-term bank loan | 392 |
| Bonds payable | 43 |
| Trade payables | 127 |
| Bank overdraft | 58 |
| Total liabilities | **620** |
| Total equity and liabilities | **1148** |

Evaluate the following economic assertions:', ARRAY['The debt ratio exceeds 71.2%.', 'Working capital of €122 thousand is positive on this balance sheet.', 'Working capital equals exactly €122 thousand.', 'The acid-test ratio is exactly 1.21.', 'Total assets of €1,148 thousand equal total equity plus total liabilities.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — Debt ratio ≈ 54.0%.', 'TRUE — Working capital = 122.', 'TRUE — Working capital = 122.', 'TRUE — Acid-test ratio ≈ 1.21.', 'TRUE — The balance sheet balances at 1148.'], '4/5', 87, 'full' ),
( '6.5', 'CASE 6.5.088', 'Combined Statement Extract 88', 'Consider the following combined extracts (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=348
Machinery=201
Inventory=93
Trade receivables=62
Cash and cash equivalents=41
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 348 |
| Machinery | 201 |
| Office equipment | 53 |
| Patents, trademarks and licences | 37 |
| Inventory | 93 |
| Trade receivables | 62 |
| Cash and cash equivalents | 41 |
| Total assets | **835** |
| **EQUITY** | |
| Share capital | 277 |
| Retained earnings | -20 |
| Total equity | **257** |
| **LIABILITIES** | |
| Long-term bank loan | 214 |
| Bonds payable | 75 |
| Trade payables | 248 |
| Bank overdraft | 41 |
| Total liabilities | **578** |
| Total equity and liabilities | **835** |

| Income statement extract (€ thousands) | Amount |
| --- | ---: |
| Operating result | 185 |

| Cash flow statement extract (€ thousands) | Amount |
| --- | ---: |
| Cash flow from operating activities | 165 |
| Cash flow from investing activities | (232) |
| Cash flow from financing activities | 74 |
| Cash and cash equivalents at the beginning of the year | 34 |

Evaluate the following economic assertions:', ARRAY['Return on equity, the operating result taken as a percentage of total equity, exceeds 41.3%.', 'Working capital equals exactly €-151 thousand.', 'Cash flow from operating activities amounts to less than 79% of the operating result, indicating profit is only partly backed by cash.', 'Return on capital employed, the operating result taken relative to equity plus non-current liabilities, exceeds 20.2%.', 'Cash flow from operating activities amounts to more than 108.9% of the operating result.'], ARRAY[true, false, false, true, false], ARRAY['TRUE — Return on equity ≈ 72.0%.', 'FALSE — Working capital = -93.', 'FALSE — Cash conversion ≈ 89.2% of the operating result.', 'TRUE — Return on capital employed ≈ 33.9%.', 'FALSE — Cash conversion ≈ 89.2% of the operating result.'], '4/5', 88, 'full' ),
( '6.5', 'CASE 6.5.089', 'Asset and Inventory Turnover 89', 'Consider the following extract (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Beginning versus ending balances"]]
Total assets | Beginning=785 | Ending=964
Inventory | Beginning=152 | Ending=185
[[/CHART]]

| Item (€ thousands) | Amount |
| --- | ---: |
| Revenue | 1,053 |
| Cost of sales | 672 |
| Total assets at the beginning of the year | 785 |
| Total assets at the end of the year | 964 |
| Inventory at the beginning of the year | 152 |
| Inventory at the end of the year | 185 |
| Trade receivables at the beginning of the year | 126 |
| Trade receivables at the end of the year | 131 |

Evaluate the following economic assertions:', ARRAY['Inventory turnover, cost of sales taken relative to average inventory, is below 5.96 times per year.', 'Asset turnover, revenue taken relative to average total assets, is above 1.28.', 'Revenue exceeds €961 thousand.', 'Asset turnover is exactly 1.20.', 'Average inventory make up less than 13.2% of average total assets.'], ARRAY[true, false, true, true, false], ARRAY['TRUE — Inventory turnover ≈ 3.99.', 'FALSE — Asset turnover ≈ 1.20.', 'TRUE — Revenue = 1,053.', 'TRUE — Asset turnover ≈ 1.20.', 'FALSE — Average inventory are about 19.3% of average total assets.'], '4/5', 89, 'full' ),
( '6.5', 'CASE 6.5.090', 'Liquidity From the Balance Sheet 90', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Current assets and current liabilities"]]
Current assets=336
Current liabilities=116
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 306 |
| Machinery | 276 |
| Office equipment | 76 |
| Patents, trademarks and licences | 67 |
| Inventory | 171 |
| Trade receivables | 64 |
| Cash and cash equivalents | 101 |
| Total assets | **1061** |
| **EQUITY** | |
| Share capital | 250 |
| Retained earnings | 459 |
| Total equity | **709** |
| **LIABILITIES** | |
| Long-term bank loan | 195 |
| Bonds payable | 41 |
| Trade payables | 70 |
| Bank overdraft | 46 |
| Total liabilities | **352** |
| Total equity and liabilities | **1061** |

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.01.', 'Working capital of €220 thousand is positive on this balance sheet.', 'After excluding inventory, the remaining current assets still cover current liabilities more than 1.03 times over.', 'The current ratio is below 0.7.', 'The equity ratio is below 35.1%.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Current ratio ≈ 2.90.', 'TRUE — Working capital = 220.', 'TRUE — Acid-test ratio ≈ 1.42.', 'FALSE — Current ratio ≈ 2.90.', 'FALSE — Equity ratio ≈ 66.8%.'], '5/5', 90, 'full' ),
( '6.5', 'CASE 6.5.091', 'Asset and Inventory Turnover 91', 'Consider the following extract (in € thousands) for a business whose identity is not disclosed.

[[CHART type="bar" title="Beginning versus ending balances"]]
Total assets | Beginning=843 | Ending=1018
Inventory | Beginning=163 | Ending=183
[[/CHART]]

| Item (€ thousands) | Amount |
| --- | ---: |
| Revenue | 1,127 |
| Cost of sales | 751 |
| Total assets at the beginning of the year | 843 |
| Total assets at the end of the year | 1018 |
| Inventory at the beginning of the year | 163 |
| Inventory at the end of the year | 183 |
| Trade receivables at the beginning of the year | 106 |
| Trade receivables at the end of the year | 101 |

Evaluate the following economic assertions:', ARRAY['Asset turnover, revenue taken relative to average total assets, is above 1.41.', 'Inventory turnover, cost of sales taken relative to average inventory, is below 6.97 times per year.', 'Revenue exceeds €1,138 thousand.', 'Trade receivables turnover, revenue taken relative to average trade receivables, exceeds 10.07 times per year.', 'Cost of sales amounts to more than 69.7% of revenue.'], ARRAY[false, true, false, true, false], ARRAY['FALSE — Asset turnover ≈ 1.21.', 'TRUE — Inventory turnover ≈ 4.34.', 'FALSE — Revenue = 1,127.', 'TRUE — Receivables turnover ≈ 10.89.', 'FALSE — Cost of sales is about 66.6% of revenue.'], '5/5', 91, 'full' ),
( '6.5', 'CASE 6.5.092', 'Asset Turnover and Revenue Generation in Practice', 'Examine why applying ratio benchmarks drawn from an unrelated industry can mislead rather than inform. Evaluate the following economic assertions:', ARRAY['The current ratio for a hotel operator sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations.', 'Working capital for a fashion retailer is calculated by subtracting current assets from current liabilities.', 'Return on equity for a hotel operator relates the profit before interest and tax generated during the period to the equity that owners have invested in the business.', 'A return on capital employed figure for a hotel operator carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry.', 'A fashion retailer reporting negative working capital always holds more cash than it needs for its daily operations.'], ARRAY[true, false, true, true, false], ARRAY['TRUE — Current ratio analysis for a hotel operator compares current assets with current liabilities.', 'FALSE — Working capital is current assets minus current liabilities, not the reverse.', 'TRUE — Return on equity for a hotel operator links profit before interest and tax to owners'' equity.', 'TRUE — Return on capital employed for a hotel operator is most useful in comparison rather than in isolation.', 'FALSE — Negative working capital means current liabilities exceed current assets and does not imply excess cash.'], '4/5', 92, 'full' ),
( '6.5', 'CASE 6.5.093', 'Liquidity From the Balance Sheet 93', 'Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=291
Machinery=274
Patents, trademarks and licences=34
Inventory=182
Trade receivables=153
Cash and cash equivalents=34
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 291 |
| Machinery | 274 |
| Office equipment | 43 |
| Patents, trademarks and licences | 34 |
| Inventory | 182 |
| Trade receivables | 153 |
| Cash and cash equivalents | 34 |
| Total assets | **1011** |
| **EQUITY** | |
| Share capital | 264 |
| Retained earnings | -3 |
| Total equity | **261** |
| **LIABILITIES** | |
| Long-term bank loan | 397 |
| Bonds payable | 84 |
| Trade payables | 188 |
| Bank overdraft | 81 |
| Total liabilities | **750** |
| Total equity and liabilities | **1011** |

Evaluate the following economic assertions:', ARRAY['The current ratio exceeds 1.87.', 'Working capital of €100 thousand is positive on this balance sheet.', 'The equity ratio is below 20.4%.', 'The debt ratio exceeds 46%.', 'Inventory make up more than 38.6% of current assets.'], ARRAY[false, true, false, true, true], ARRAY['FALSE — Current ratio ≈ 1.37.', 'TRUE — Working capital = 100.', 'FALSE — Equity ratio ≈ 25.8%.', 'TRUE — Debt ratio ≈ 74.2%.', 'TRUE — Inventory are about 49.3% of current assets.'], '5/5', 93, 'full' ),
( '6.5', 'CASE 6.5.094', 'Combined Statement Extract 94', 'Consider the following combined extracts (in € thousands) for a business whose identity is not disclosed.

[[CHART type="pie" title="Asset composition"]]
Buildings=463
Machinery=178
Inventory=270
Trade receivables=168
Cash and cash equivalents=31
[[/CHART]]

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 463 |
| Machinery | 178 |
| Office equipment | 63 |
| Patents, trademarks and licences | 97 |
| Inventory | 270 |
| Trade receivables | 168 |
| Cash and cash equivalents | 31 |
| Total assets | **1270** |
| **EQUITY** | |
| Share capital | 177 |
| Retained earnings | 433 |
| Total equity | **610** |
| **LIABILITIES** | |
| Long-term bank loan | 346 |
| Bonds payable | 69 |
| Trade payables | 159 |
| Bank overdraft | 86 |
| Total liabilities | **660** |
| Total equity and liabilities | **1270** |

| Income statement extract (€ thousands) | Amount |
| --- | ---: |
| Operating result | 240 |

| Cash flow statement extract (€ thousands) | Amount |
| --- | ---: |
| Cash flow from operating activities | 240 |
| Cash flow from investing activities | (185) |
| Cash flow from financing activities | 39 |
| Cash and cash equivalents at the beginning of the year | -63 |

Evaluate the following economic assertions:', ARRAY['Return on equity, the operating result taken as a percentage of total equity, exceeds 29.7%.', 'Cash flow from operating activities amounts to less than 81.5% of the operating result, indicating profit is only partly backed by cash.', 'Return on capital employed, the operating result taken relative to equity plus non-current liabilities, exceeds 15%.', 'With an operating result of €240 thousand, return on capital employed is mainly useful when comparing similar businesses or the same business over time, not as a standalone absolute number.', 'With cash flow from operating activities of €240 thousand, cash flow from investing activities was an inflow this year.'], ARRAY[true, false, true, true, false], ARRAY['TRUE — Return on equity ≈ 39.3%.', 'FALSE — Cash conversion ≈ 100.0% of the operating result.', 'TRUE — Return on capital employed ≈ 23.4%.', 'TRUE — Comparative context matters for return on capital employed.', 'FALSE — Investing cash flow = -185.'], '3/5', 94, 'full' ),
( '6.5', 'CASE 6.5.095', 'Asset Turnover and Revenue Generation Explained', 'Assess how working capital is defined and why a positive balance is generally preferred to a negative one. Evaluate the following economic assertions:', ARRAY['Asset turnover for a hotel operator relates revenue earned during the period to the average total assets employed to generate that revenue.', 'The equity ratio for a hotel operator expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds.', 'The acid-test ratio for a fashion retailer includes inventory within current assets before comparing the total with current liabilities.', 'If a hotel operator draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken because current liabilities rise.', 'A single return on capital employed figure for a fashion retailer is always fully meaningful on its own, without any need to compare it against other years or similar businesses.'], ARRAY[true, true, false, true, false], ARRAY['TRUE — Asset turnover measures how much revenue a hotel operator generates per unit of average assets.', 'TRUE — Equity ratio analysis for a hotel operator expresses equity as a share of total assets.', 'FALSE — The acid-test ratio excludes inventory to provide a stricter liquidity test.', 'TRUE — Short-term borrowing can boost cash yet reduce working capital for a hotel operator.', 'FALSE — Return on capital employed gains meaning chiefly from comparisons over time or with peers.'], '2/5', 95, 'full' ),
( '6.5', 'CASE 6.5.096', 'Share Price and Market Capitalisation 96', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=24
February | Price=24
March | Price=24
April | Price=25
May | Price=24
June | Price=30
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=29000
February | Volume=74000
March | Volume=93000
April | Volume=93000
May | Volume=42000
June | Volume=40000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 24 | 29,000 |
| February | 24 | 74,000 |
| March | 24 | 93,000 |
| April | 25 | 93,000 |
| May | 24 | 42,000 |
| June | 30 | 40,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 301 |
| Shares outstanding | 753,000 |
| Total shares traded (six months) | 371,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €19.2 million.', 'Highest closing price is more than 27.3% above the lowest.', 'Total shares traded over six months exceed 21.2% of shares outstanding.', 'Peak monthly share turnover exceeds 96,969 shares.', 'Operating result is below €258 thousand.'], ARRAY[true, false, true, false, false], ARRAY['TRUE — Market capitalisation ≈ €22.6 million.', 'FALSE — Range €24–€30.', 'TRUE — Turnover ≈ 49.3% of shares outstanding.', 'FALSE — Peak monthly volume = 93,000.', 'FALSE — Operating result = 301.'], '3/5', 96, 'full' ),
( '6.5', 'CASE 6.5.097', 'Asset Turnover and Revenue Generation for Analysts', 'Assess how the current ratio and the acid-test ratio each measure short-term liquidity, and why they can diverge for inventory-heavy businesses. Evaluate the following economic assertions:', ARRAY['Working capital for a pharmaceutical distributor is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital.', 'Return on equity for a fashion retailer is calculated by comparing the cash balance on the balance sheet with total liabilities rather than relating profit to equity.', 'Inventory turnover for a fashion retailer is calculated by dividing revenue by average inventory rather than by relating cost of sales to average inventory.', 'A pharmaceutical distributor is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account.', 'The current ratio and the acid-test ratio for a fashion retailer always produce identical results, regardless of how much inventory the business holds.'], ARRAY[true, false, false, true, false], ARRAY['TRUE — The standard working capital definition applies to a pharmaceutical distributor: current assets minus current liabilities.', 'FALSE — Return on equity relates profit before interest and tax to equity, not cash to liabilities.', 'FALSE — Inventory turnover uses cost of sales relative to average inventory, not revenue.', 'TRUE — Positive working capital is generally preferable for a pharmaceutical distributor as a cushion over short-term obligations.', 'FALSE — When inventory is material, the acid-test ratio differs from the current ratio.'], '3/5', 97, 'full' ),
( '6.5', 'CASE 6.5.098', 'Earnings Per Share From Reported Figures 98', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=20
February | Price=20
March | Price=21
April | Price=21
May | Price=21
June | Price=25
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=54000
February | Volume=47000
March | Volume=93000
April | Volume=39000
May | Volume=74000
June | Volume=27000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 20 | 54,000 |
| February | 20 | 47,000 |
| March | 21 | 93,000 |
| April | 21 | 39,000 |
| May | 21 | 74,000 |
| June | 25 | 27,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 266 |
| Shares outstanding | 882,000 |
| Total shares traded (six months) | 334,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €20.2 million.', 'The closing share price rose by more than 28.9% from first to last month.', 'Highest closing price is more than 39.8% above the lowest.', 'Market capitalisation rose by more than 14.1% over the period.', 'Total shares traded over six months exceed 9.1% of shares outstanding.'], ARRAY[true, false, false, true, true], ARRAY['TRUE — Market capitalisation ≈ €22.1 million.', 'FALSE — Price change ≈ 25.0%.', 'FALSE — Range €20–€25.', 'TRUE — €17.6m → €22.1m.', 'TRUE — Turnover ≈ 37.9% of shares outstanding.'], '5/5', 98, 'full' ),
( '6.5', 'CASE 6.5.099', 'Share Price and Market Capitalisation 99', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=20
February | Price=21
March | Price=20
April | Price=21
May | Price=21
June | Price=25
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=87000
February | Volume=84000
March | Volume=68000
April | Volume=57000
May | Volume=30000
June | Volume=60000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 20 | 87,000 |
| February | 21 | 84,000 |
| March | 20 | 68,000 |
| April | 21 | 57,000 |
| May | 21 | 30,000 |
| June | 25 | 60,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 315 |
| Shares outstanding | 490,000 |
| Total shares traded (six months) | 386,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €9.8 million.', 'Earnings per share exceeds €0.57.', 'Total shares traded over six months exceed 19.4% of shares outstanding.', 'Shares outstanding equal 490,000.', 'Earnings per share is exactly €0.64.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Market capitalisation ≈ €12.3 million.', 'TRUE — Earnings per share ≈ €0.64.', 'TRUE — Turnover ≈ 78.8% of shares outstanding.', 'TRUE — Shares outstanding = 490,000.', 'TRUE — Earnings per share ≈ €0.64.'], '3/5', 99, 'full' ),
( '6.5', 'CASE 6.5.100', 'Listed Company Performance Charts 100', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=19
February | Price=18
March | Price=16
April | Price=15
May | Price=13
June | Price=12
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=74000
February | Volume=74000
March | Volume=91000
April | Volume=42000
May | Volume=60000
June | Volume=40000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 19 | 74,000 |
| February | 18 | 74,000 |
| March | 16 | 91,000 |
| April | 15 | 42,000 |
| May | 13 | 60,000 |
| June | 12 | 40,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 318 |
| Shares outstanding | 425,000 |
| Total shares traded (six months) | 381,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €3.8 million.', 'Earnings per share exceeds €0.66.', 'Highest closing price is more than 34.3% above the lowest.', 'Total shares traded over six months exceed 36.2% of shares outstanding.', 'Peak monthly share turnover exceeds 81,302 shares.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Market capitalisation ≈ €5.1 million.', 'TRUE — Earnings per share ≈ €0.75.', 'TRUE — Range €12–€19.', 'TRUE — Turnover ≈ 89.6% of shares outstanding.', 'TRUE — Peak monthly volume = 91,000.'], '5/5', 100, 'full' ),
( '6.5', 'CASE 6.5.101', 'Asset Turnover and Revenue Generation Across Sectors', 'Consider a publishing house analysing whether short-term borrowing improved cash but weakened working capital. Evaluate the following economic assertions:', ARRAY['The current ratio for a pharmaceutical distributor sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations.', 'Working capital for a utility company is calculated by subtracting current assets from current liabilities.', 'Return on equity for a pharmaceutical distributor relates the profit before interest and tax generated during the period to the equity that owners have invested in the business.', 'A return on capital employed figure for a pharmaceutical distributor carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry.', 'Asset turnover for a pharmaceutical distributor relates revenue earned during the period to the average total assets employed to generate that revenue.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — Current ratio analysis for a pharmaceutical distributor compares current assets with current liabilities.', 'FALSE — Working capital is current assets minus current liabilities, not the reverse.', 'TRUE — Return on equity for a pharmaceutical distributor links profit before interest and tax to owners'' equity.', 'TRUE — Return on capital employed for a pharmaceutical distributor is most useful in comparison rather than in isolation.', 'TRUE — Asset turnover measures how much revenue a pharmaceutical distributor generates per unit of average assets.'], '5/5', 101, 'full' ),
( '6.5', 'CASE 6.5.102', 'Share Price and Market Capitalisation 102', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=38
February | Price=37
March | Price=38
April | Price=36
May | Price=37
June | Price=45
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=86000
February | Volume=73000
March | Volume=36000
April | Volume=23000
May | Volume=77000
June | Volume=28000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 38 | 86,000 |
| February | 37 | 73,000 |
| March | 38 | 36,000 |
| April | 36 | 23,000 |
| May | 37 | 77,000 |
| June | 45 | 28,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 318 |
| Shares outstanding | 758,000 |
| Total shares traded (six months) | 323,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €27.7 million.', 'Market capitalisation rose by more than 10.4% over the period.', 'Total shares traded over six months exceed 34% of shares outstanding.', 'Peak monthly share turnover exceeds 61,167 shares.', 'Shares outstanding equal 758,000.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Market capitalisation ≈ €34.1 million.', 'TRUE — €28.8m → €34.1m.', 'TRUE — Turnover ≈ 42.6% of shares outstanding.', 'TRUE — Peak monthly volume = 86,000.', 'TRUE — Shares outstanding = 758,000.'], '5/5', 102, 'full' ),
( '6.5', 'CASE 6.5.103', 'Listed Company Performance Charts 103', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=21
February | Price=21
March | Price=21
April | Price=21
May | Price=20
June | Price=25
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=27000
February | Volume=39000
March | Volume=24000
April | Volume=55000
May | Volume=24000
June | Volume=38000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 21 | 27,000 |
| February | 21 | 39,000 |
| March | 21 | 24,000 |
| April | 21 | 55,000 |
| May | 20 | 24,000 |
| June | 25 | 38,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 243 |
| Shares outstanding | 572,000 |
| Total shares traded (six months) | 207,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 22.5% from first to last month.', 'Highest closing price is more than 15.7% above the lowest.', 'Market capitalisation rose by more than 26.1% over the period.', 'Total shares traded over six months exceed 21.4% of shares outstanding.', 'Peak monthly share turnover exceeds 49,902 shares.'], ARRAY[false, true, false, true, true], ARRAY['FALSE — Price change ≈ 19.0%.', 'TRUE — Range €20–€25.', 'FALSE — €12.0m → €14.3m.', 'TRUE — Turnover ≈ 36.2% of shares outstanding.', 'TRUE — Peak monthly volume = 55,000.'], '5/5', 103, 'full' ),
( '6.5', 'CASE 6.5.104', 'Earnings Per Share From Reported Figures 104', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=40
February | Price=41
March | Price=42
April | Price=47
May | Price=48
June | Price=53
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=92000
February | Volume=44000
March | Volume=77000
April | Volume=36000
May | Volume=78000
June | Volume=73000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 40 | 92,000 |
| February | 41 | 44,000 |
| March | 42 | 77,000 |
| April | 47 | 36,000 |
| May | 48 | 78,000 |
| June | 53 | 73,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 232 |
| Shares outstanding | 859,000 |
| Total shares traded (six months) | 400,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 34.1% from first to last month.', 'Highest closing price is more than 45% above the lowest.', 'Market capitalisation at the last month exceeds €38.5 million.', 'Total shares traded over six months exceed 38.7% of shares outstanding.', 'Shares outstanding equal 859,000.'], ARRAY[false, false, true, true, true], ARRAY['FALSE — Price change ≈ 32.5%.', 'FALSE — Range €40–€53.', 'TRUE — Market capitalisation ≈ €45.5 million.', 'TRUE — Turnover ≈ 46.6% of shares outstanding.', 'TRUE — Shares outstanding = 859,000.'], '4/5', 104, 'full' ),
( '6.5', 'CASE 6.5.105', 'Share Price and Market Capitalisation 105', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=31
February | Price=35
March | Price=36
April | Price=36
May | Price=37
June | Price=39
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=91000
February | Volume=84000
March | Volume=50000
April | Volume=68000
May | Volume=29000
June | Volume=50000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 31 | 91,000 |
| February | 35 | 84,000 |
| March | 36 | 50,000 |
| April | 36 | 68,000 |
| May | 37 | 29,000 |
| June | 39 | 50,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 299 |
| Shares outstanding | 444,000 |
| Total shares traded (six months) | 372,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation rose by more than 29.3% over the period.', 'Earnings per share exceeds €0.63.', 'Highest closing price is more than 43.1% above the lowest.', 'Operating result is below €237 thousand.', 'Total shares traded over six months exceed 36% of shares outstanding.'], ARRAY[false, true, false, false, true], ARRAY['FALSE — €13.8m → €17.3m.', 'TRUE — Earnings per share ≈ €0.67.', 'FALSE — Range €31–€39.', 'FALSE — Operating result = 299.', 'TRUE — Turnover ≈ 83.8% of shares outstanding.'], '5/5', 105, 'full' ),
( '6.5', 'CASE 6.5.106', 'Asset Turnover and Revenue Generation in Context', 'Assess how return on equity relates profit before interest and tax to the equity that owners have invested in the business. Evaluate the following economic assertions:', ARRAY['A utility company reporting negative working capital always holds more cash than it needs for its daily operations.', 'The equity ratio for a pharmaceutical distributor expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds.', 'The acid-test ratio for a utility company includes inventory within current assets before comparing the total with current liabilities.', 'If a pharmaceutical distributor draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken because current liabilities rise.', 'A single return on capital employed figure for a utility company is always fully meaningful on its own, without any need to compare it against other years or similar businesses.'], ARRAY[false, true, false, true, false], ARRAY['FALSE — Negative working capital means current liabilities exceed current assets and does not imply excess cash.', 'TRUE — Equity ratio analysis for a pharmaceutical distributor expresses equity as a share of total assets.', 'FALSE — The acid-test ratio excludes inventory to provide a stricter liquidity test.', 'TRUE — Short-term borrowing can boost cash yet reduce working capital for a pharmaceutical distributor.', 'FALSE — Return on capital employed gains meaning chiefly from comparisons over time or with peers.'], '3/5', 106, 'full' ),
( '6.5', 'CASE 6.5.107', 'Earnings Per Share From Reported Figures 107', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=20
February | Price=21
March | Price=21
April | Price=22
May | Price=24
June | Price=25
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=78000
February | Volume=36000
March | Volume=57000
April | Volume=39000
May | Volume=77000
June | Volume=51000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 20 | 78,000 |
| February | 21 | 36,000 |
| March | 21 | 57,000 |
| April | 22 | 39,000 |
| May | 24 | 77,000 |
| June | 25 | 51,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 186 |
| Shares outstanding | 446,000 |
| Total shares traded (six months) | 338,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €8.5 million.', 'Market capitalisation rose by more than 23.9% over the period.', 'Total shares traded over six months exceed 33.7% of shares outstanding.', 'Peak monthly share turnover exceeds 70,887 shares.', 'Shares outstanding equal 446,000.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Market capitalisation ≈ €11.2 million.', 'TRUE — €8.9m → €11.2m.', 'TRUE — Turnover ≈ 75.8% of shares outstanding.', 'TRUE — Peak monthly volume = 78,000.', 'TRUE — Shares outstanding = 446,000.'], '3/5', 107, 'full' ),
( '6.5', 'CASE 6.5.108', 'Inventory Turnover and Stock Rotation in Practice', 'Assess how return on capital employed relates profit before interest and tax to the long-term capital financing a business. Evaluate the following economic assertions:', ARRAY['Return on equity for a utility company is calculated by comparing the cash balance on the balance sheet with total liabilities rather than relating profit to equity.', 'Working capital for a transport operator is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital.', 'Inventory turnover for a utility company is calculated by dividing revenue by average inventory rather than by relating cost of sales to average inventory.', 'The current ratio and the acid-test ratio for a utility company always produce identical results, regardless of how much inventory the business holds.', 'Working capital for a wholesaler is calculated by subtracting current assets from current liabilities.'], ARRAY[false, true, false, false, false], ARRAY['FALSE — Return on equity relates profit before interest and tax to equity, not cash to liabilities.', 'TRUE — The standard working capital definition applies to a transport operator: current assets minus current liabilities.', 'FALSE — Inventory turnover uses cost of sales relative to average inventory, not revenue.', 'FALSE — When inventory is material, the acid-test ratio differs from the current ratio.', 'FALSE — Working capital is current assets minus current liabilities, not the reverse.'], '3/5', 108, 'full' ),
( '6.5', 'CASE 6.5.109', 'Listed Company Performance Charts 109', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=29
February | Price=28
March | Price=26
April | Price=24
May | Price=23
June | Price=22
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=74000
February | Volume=47000
March | Volume=33000
April | Volume=56000
May | Volume=92000
June | Volume=80000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 29 | 74,000 |
| February | 28 | 47,000 |
| March | 26 | 33,000 |
| April | 24 | 56,000 |
| May | 23 | 92,000 |
| June | 22 | 80,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 291 |
| Shares outstanding | 817,000 |
| Total shares traded (six months) | 382,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 18.4% from first to last month.', 'Market capitalisation rose by more than 27.5% over the period.', 'Highest closing price is more than 37% above the lowest.', 'Peak monthly share turnover exceeds 96,324 shares.', 'Shares outstanding equal 817,000.'], ARRAY[false, false, false, false, true], ARRAY['FALSE — Price change ≈ -24.1%.', 'FALSE — €23.7m → €18.0m.', 'FALSE — Range €22–€29.', 'FALSE — Peak monthly volume = 92,000.', 'TRUE — Shares outstanding = 817,000.'], '2/5', 109, 'full' ),
( '6.5', 'CASE 6.5.110', 'Earnings Per Share From Reported Figures 110', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=31
February | Price=30
March | Price=31
April | Price=29
May | Price=26
June | Price=25
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=26000
February | Volume=73000
March | Volume=58000
April | Volume=34000
May | Volume=69000
June | Volume=75000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 31 | 26,000 |
| February | 30 | 73,000 |
| March | 31 | 58,000 |
| April | 29 | 34,000 |
| May | 26 | 69,000 |
| June | 25 | 75,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 297 |
| Shares outstanding | 708,000 |
| Total shares traded (six months) | 335,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 10.3% from first to last month.', 'Market capitalisation rose by more than 9.7% over the period.', 'Highest closing price is more than 35.1% above the lowest.', 'Operating result is below €276 thousand.', 'Peak monthly share turnover exceeds 69,773 shares.'], ARRAY[false, false, false, false, true], ARRAY['FALSE — Price change ≈ -19.4%.', 'FALSE — €21.9m → €17.7m.', 'FALSE — Range €25–€31.', 'FALSE — Operating result = 297.', 'TRUE — Peak monthly volume = 75,000.'], '2/5', 110, 'full' ),
( '6.5', 'CASE 6.5.111', 'Inventory Turnover and Stock Rotation Explained', 'Assess why a single return on capital employed figure is best interpreted alongside comparable years or similar businesses rather than in isolation. Evaluate the following economic assertions:', ARRAY['A transport operator is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account.', 'The current ratio for a transport operator sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations.', 'Return on equity for a transport operator relates the profit before interest and tax generated during the period to the equity that owners have invested in the business.', 'A return on capital employed figure for a transport operator carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry.', 'Asset turnover for a transport operator relates revenue earned during the period to the average total assets employed to generate that revenue.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Positive working capital is generally preferable for a transport operator as a cushion over short-term obligations.', 'TRUE — Current ratio analysis for a transport operator compares current assets with current liabilities.', 'TRUE — Return on equity for a transport operator links profit before interest and tax to owners'' equity.', 'TRUE — Return on capital employed for a transport operator is most useful in comparison rather than in isolation.', 'TRUE — Asset turnover measures how much revenue a transport operator generates per unit of average assets.'], '5/5', 111, 'full' ),
( '6.5', 'CASE 6.5.112', 'Listed Company Performance Charts 112', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=34
February | Price=35
March | Price=36
April | Price=39
May | Price=41
June | Price=42
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=80000
February | Volume=32000
March | Volume=18000
April | Volume=83000
May | Volume=61000
June | Volume=48000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 34 | 80,000 |
| February | 35 | 32,000 |
| March | 36 | 18,000 |
| April | 39 | 83,000 |
| May | 41 | 61,000 |
| June | 42 | 48,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 251 |
| Shares outstanding | 674,000 |
| Total shares traded (six months) | 322,000 |

Evaluate the following economic assertions:', ARRAY['Highest closing price is more than 13.7% above the lowest.', 'The closing share price rose by more than 32.7% from first to last month.', 'Peak monthly share turnover exceeds 73,138 shares.', 'Market capitalisation rose by more than 28.3% over the period.', 'Earnings per share is exactly €0.45.'], ARRAY[true, false, true, false, false], ARRAY['TRUE — Range €34–€42.', 'FALSE — Price change ≈ 23.5%.', 'TRUE — Peak monthly volume = 83,000.', 'FALSE — €22.9m → €28.3m.', 'FALSE — Earnings per share ≈ €0.37.'], '5/5', 112, 'full' ),
( '6.5', 'CASE 6.5.113', 'Earnings Per Share From Reported Figures 113', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=19
February | Price=20
March | Price=21
April | Price=21
May | Price=21
June | Price=24
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=30000
February | Volume=21000
March | Volume=42000
April | Volume=71000
May | Volume=86000
June | Volume=83000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 19 | 30,000 |
| February | 20 | 21,000 |
| March | 21 | 42,000 |
| April | 21 | 71,000 |
| May | 21 | 86,000 |
| June | 24 | 83,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 285 |
| Shares outstanding | 546,000 |
| Total shares traded (six months) | 333,000 |

Evaluate the following economic assertions:', ARRAY['Highest closing price is more than 41.4% above the lowest.', 'Earnings per share exceeds €0.48.', 'Total shares traded over six months exceed 30% of shares outstanding.', 'Peak monthly share turnover exceeds 85,316 shares.', 'Shares outstanding equal 546,000.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — Range €19–€24.', 'TRUE — Earnings per share ≈ €0.52.', 'TRUE — Turnover ≈ 61.0% of shares outstanding.', 'TRUE — Peak monthly volume = 86,000.', 'TRUE — Shares outstanding = 546,000.'], '2/5', 113, 'full' ),
( '6.5', 'CASE 6.5.114', 'Share Price and Market Capitalisation 114', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=29
February | Price=28
March | Price=27
April | Price=23
May | Price=20
June | Price=17
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=40000
February | Volume=78000
March | Volume=27000
April | Volume=34000
May | Volume=30000
June | Volume=73000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 29 | 40,000 |
| February | 28 | 78,000 |
| March | 27 | 27,000 |
| April | 23 | 34,000 |
| May | 20 | 30,000 |
| June | 17 | 73,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 294 |
| Shares outstanding | 622,000 |
| Total shares traded (six months) | 282,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €10 million.', 'Earnings per share exceeds €0.43.', 'Highest closing price is more than 13% above the lowest.', 'Total shares traded over six months exceed 15.4% of shares outstanding.', 'Peak monthly share turnover exceeds 65,329 shares.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Market capitalisation ≈ €10.6 million.', 'TRUE — Earnings per share ≈ €0.47.', 'TRUE — Range €17–€29.', 'TRUE — Turnover ≈ 45.3% of shares outstanding.', 'TRUE — Peak monthly volume = 78,000.'], '3/5', 114, 'full' ),
( '6.5', 'CASE 6.5.115', 'Inventory Turnover and Stock Rotation for Analysts', 'Consider a listed manufacturer whose shareholders compare its return on equity with sector peers. Evaluate the following economic assertions:', ARRAY['The equity ratio for a transport operator expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds.', 'A wholesaler reporting negative working capital always holds more cash than it needs for its daily operations.', 'If a transport operator draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken because current liabilities rise.', 'The acid-test ratio for a wholesaler includes inventory within current assets before comparing the total with current liabilities.', 'Working capital for a software subscription business is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital.'], ARRAY[true, false, true, false, true], ARRAY['TRUE — Equity ratio analysis for a transport operator expresses equity as a share of total assets.', 'FALSE — Negative working capital means current liabilities exceed current assets and does not imply excess cash.', 'TRUE — Short-term borrowing can boost cash yet reduce working capital for a transport operator.', 'FALSE — The acid-test ratio excludes inventory to provide a stricter liquidity test.', 'TRUE — The standard working capital definition applies to a software subscription business: current assets minus current liabilities.'], '5/5', 115, 'full' ),
( '6.5', 'CASE 6.5.116', 'Inventory Turnover and Stock Rotation Across Sectors', 'Assess how inventory turnover links cost of sales to average inventory, and what a rising figure typically indicates. Evaluate the following economic assertions:', ARRAY['A software subscription business is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account.', 'A single return on capital employed figure for a wholesaler is always fully meaningful on its own, without any need to compare it against other years or similar businesses.', 'Return on equity for a wholesaler is calculated by comparing the cash balance on the balance sheet with total liabilities rather than relating profit to equity.', 'The current ratio for a software subscription business sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations.', 'Inventory turnover for a wholesaler is calculated by dividing revenue by average inventory rather than by relating cost of sales to average inventory.'], ARRAY[true, false, false, true, false], ARRAY['TRUE — Positive working capital is generally preferable for a software subscription business as a cushion over short-term obligations.', 'FALSE — Return on capital employed gains meaning chiefly from comparisons over time or with peers.', 'FALSE — Return on equity relates profit before interest and tax to equity, not cash to liabilities.', 'TRUE — Current ratio analysis for a software subscription business compares current assets with current liabilities.', 'FALSE — Inventory turnover uses cost of sales relative to average inventory, not revenue.'], '5/5', 116, 'full' ),
( '6.5', 'CASE 6.5.117', 'Share Price and Market Capitalisation 117', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=19
February | Price=18
March | Price=17
April | Price=17
May | Price=17
June | Price=20
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=43000
February | Volume=73000
March | Volume=40000
April | Volume=90000
May | Volume=87000
June | Volume=95000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 19 | 43,000 |
| February | 18 | 73,000 |
| March | 17 | 40,000 |
| April | 17 | 90,000 |
| May | 17 | 87,000 |
| June | 20 | 95,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 271 |
| Shares outstanding | 433,000 |
| Total shares traded (six months) | 428,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €7.2 million.', 'The closing share price rose by more than 22.8% from first to last month.', 'Market capitalisation rose by more than 20.8% over the period.', 'Highest closing price is more than 23.9% above the lowest.', 'Total shares traded over six months exceed 37.1% of shares outstanding.'], ARRAY[true, false, false, false, true], ARRAY['TRUE — Market capitalisation ≈ €8.7 million.', 'FALSE — Price change ≈ 5.3%.', 'FALSE — €8.2m → €8.7m.', 'FALSE — Range €17–€20.', 'TRUE — Turnover ≈ 98.8% of shares outstanding.'], '4/5', 117, 'full' ),
( '6.5', 'CASE 6.5.118', 'Listed Company Performance Charts 118', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=37
February | Price=35
March | Price=33
April | Price=34
May | Price=35
June | Price=41
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=40000
February | Volume=89000
March | Volume=68000
April | Volume=35000
May | Volume=30000
June | Volume=91000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 37 | 40,000 |
| February | 35 | 89,000 |
| March | 33 | 68,000 |
| April | 34 | 35,000 |
| May | 35 | 30,000 |
| June | 41 | 91,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 256 |
| Shares outstanding | 480,000 |
| Total shares traded (six months) | 353,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 18.7% from first to last month.', 'Market capitalisation rose by more than 30.5% over the period.', 'Market capitalisation at the last month exceeds €14.8 million.', 'Total shares traded over six months exceed 8.4% of shares outstanding.', 'Highest closing price is more than 37.8% above the lowest.'], ARRAY[false, false, true, true, false], ARRAY['FALSE — Price change ≈ 10.8%.', 'FALSE — €17.8m → €19.7m.', 'TRUE — Market capitalisation ≈ €19.7 million.', 'TRUE — Turnover ≈ 73.5% of shares outstanding.', 'FALSE — Range €33–€41.'], '2/5', 118, 'full' ),
( '6.5', 'CASE 6.5.119', 'Earnings Per Share From Reported Figures 119', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=19
February | Price=18
March | Price=18
April | Price=17
May | Price=17
June | Price=20
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=37000
February | Volume=40000
March | Volume=58000
April | Volume=81000
May | Volume=28000
June | Volume=20000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 19 | 37,000 |
| February | 18 | 40,000 |
| March | 18 | 58,000 |
| April | 17 | 81,000 |
| May | 17 | 28,000 |
| June | 20 | 20,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 302 |
| Shares outstanding | 420,000 |
| Total shares traded (six months) | 264,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 12.4% from first to last month.', 'Market capitalisation rose by more than 10.6% over the period.', 'Highest closing price is more than 25.8% above the lowest.', 'Operating result is below €261 thousand.', 'Market capitalisation at the last month exceeds €7.6 million.'], ARRAY[false, false, false, false, true], ARRAY['FALSE — Price change ≈ 5.3%.', 'FALSE — €8.0m → €8.4m.', 'FALSE — Range €17–€20.', 'FALSE — Operating result = 302.', 'TRUE — Market capitalisation ≈ €8.4 million.'], '3/5', 119, 'full' ),
( '6.5', 'CASE 6.5.120', 'Inventory Turnover and Stock Rotation in Context', 'Assess how the equity ratio and the debt ratio together describe the way a business finances its total assets. Evaluate the following economic assertions:', ARRAY['Return on equity for a software subscription business relates the profit before interest and tax generated during the period to the equity that owners have invested in the business.', 'The current ratio and the acid-test ratio for a wholesaler always produce identical results, regardless of how much inventory the business holds.', 'A return on capital employed figure for a software subscription business carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry.', 'Asset turnover for a software subscription business relates revenue earned during the period to the average total assets employed to generate that revenue.', 'The equity ratio for a software subscription business expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — Return on equity for a software subscription business links profit before interest and tax to owners'' equity.', 'FALSE — When inventory is material, the acid-test ratio differs from the current ratio.', 'TRUE — Return on capital employed for a software subscription business is most useful in comparison rather than in isolation.', 'TRUE — Asset turnover measures how much revenue a software subscription business generates per unit of average assets.', 'TRUE — Equity ratio analysis for a software subscription business expresses equity as a share of total assets.'], '4/5', 120, 'full' ),
( '6.5', 'CASE 6.5.121', 'Listed Company Performance Charts 121', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=30
February | Price=26
March | Price=24
April | Price=22
May | Price=20
June | Price=18
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=68000
February | Volume=33000
March | Volume=31000
April | Volume=31000
May | Volume=90000
June | Volume=36000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 30 | 68,000 |
| February | 26 | 33,000 |
| March | 24 | 31,000 |
| April | 22 | 31,000 |
| May | 20 | 90,000 |
| June | 18 | 36,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 304 |
| Shares outstanding | 480,000 |
| Total shares traded (six months) | 289,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €7.7 million.', 'The closing share price rose by more than 27.3% from first to last month.', 'Highest closing price is more than 25.6% above the lowest.', 'Market capitalisation rose by more than 24.6% over the period.', 'Total shares traded over six months exceed 38.9% of shares outstanding.'], ARRAY[true, false, true, false, true], ARRAY['TRUE — Market capitalisation ≈ €8.6 million.', 'FALSE — Price change ≈ -40.0%.', 'TRUE — Range €18–€30.', 'FALSE — €14.4m → €8.6m.', 'TRUE — Turnover ≈ 60.2% of shares outstanding.'], '5/5', 121, 'full' ),
( '6.5', 'CASE 6.5.122', 'The Equity Ratio in Financial Structure in Practice', 'Assess why comparing ratios with industry peers or with a business''s own history over time improves interpretation. Evaluate the following economic assertions:', ARRAY['The debt ratio for a software subscription business expresses the proportion of total assets financed through liabilities rather than through owners'' equity.', 'Working capital for an online retailer is calculated by subtracting current assets from current liabilities.', 'If a software subscription business draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken because current liabilities rise.', 'Working capital for a medical-device maker is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital.', 'A medical-device maker is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — Debt ratio analysis for a software subscription business expresses total liabilities relative to total assets.', 'FALSE — Working capital is current assets minus current liabilities, not the reverse.', 'TRUE — Short-term borrowing can boost cash yet reduce working capital for a software subscription business.', 'TRUE — The standard working capital definition applies to a medical-device maker: current assets minus current liabilities.', 'TRUE — Positive working capital is generally preferable for a medical-device maker as a cushion over short-term obligations.'], '5/5', 122, 'full' ),
( '6.5', 'CASE 6.5.123', 'The Equity Ratio in Financial Structure Explained', 'Consider a wholesaler that drew down a short-term facility to pay suppliers and is reviewing the effect on working capital. Evaluate the following economic assertions:', ARRAY['The current ratio for a medical-device maker sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations.', 'Return on equity for a medical-device maker relates the profit before interest and tax generated during the period to the equity that owners have invested in the business.', 'A return on capital employed figure for a medical-device maker carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry.', 'Asset turnover for a medical-device maker relates revenue earned during the period to the average total assets employed to generate that revenue.', 'The equity ratio for a medical-device maker expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Current ratio analysis for a medical-device maker compares current assets with current liabilities.', 'TRUE — Return on equity for a medical-device maker links profit before interest and tax to owners'' equity.', 'TRUE — Return on capital employed for a medical-device maker is most useful in comparison rather than in isolation.', 'TRUE — Asset turnover measures how much revenue a medical-device maker generates per unit of average assets.', 'TRUE — Equity ratio analysis for a medical-device maker expresses equity as a share of total assets.'], '5/5', 123, 'full' ),
( '6.5', 'CASE 6.5.124', 'Listed Company Performance Charts 124', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=36
February | Price=37
March | Price=36
April | Price=38
May | Price=37
June | Price=45
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=32000
February | Volume=79000
March | Volume=90000
April | Volume=52000
May | Volume=45000
June | Volume=53000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 36 | 32,000 |
| February | 37 | 79,000 |
| March | 36 | 90,000 |
| April | 38 | 52,000 |
| May | 37 | 45,000 |
| June | 45 | 53,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 202 |
| Shares outstanding | 403,000 |
| Total shares traded (six months) | 351,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 8.4% from first to last month.', 'Market capitalisation at the last month exceeds €14.5 million.', 'Market capitalisation rose by more than 13.5% over the period.', 'Earnings per share exceeds €0.47.', 'Highest closing price is more than 12% above the lowest.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Price change ≈ 25.0%.', 'TRUE — Market capitalisation ≈ €18.1 million.', 'TRUE — €14.5m → €18.1m.', 'TRUE — Earnings per share ≈ €0.50.', 'TRUE — Range €36–€45.'], '2/5', 124, 'full' ),
( '6.5', 'CASE 6.5.125', 'The Equity Ratio in Financial Structure for Analysts', 'Assess why applying ratio benchmarks drawn from an unrelated industry can mislead rather than inform. Evaluate the following economic assertions:', ARRAY['A online retailer reporting negative working capital always holds more cash than it needs for its daily operations.', 'The acid-test ratio for an online retailer includes inventory within current assets before comparing the total with current liabilities.', 'The debt ratio for a medical-device maker expresses the proportion of total assets financed through liabilities rather than through owners'' equity.', 'If a medical-device maker draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken because current liabilities rise.', 'A single return on capital employed figure for an online retailer is always fully meaningful on its own, without any need to compare it against other years or similar businesses.'], ARRAY[false, false, true, true, false], ARRAY['FALSE — Negative working capital means current liabilities exceed current assets and does not imply excess cash.', 'FALSE — The acid-test ratio excludes inventory to provide a stricter liquidity test.', 'TRUE — Debt ratio analysis for a medical-device maker expresses total liabilities relative to total assets.', 'TRUE — Short-term borrowing can boost cash yet reduce working capital for a medical-device maker.', 'FALSE — Return on capital employed gains meaning chiefly from comparisons over time or with peers.'], '5/5', 125, 'full' ),
( '6.5', 'CASE 6.5.126', 'The Equity Ratio in Financial Structure Across Sectors', 'Consider how working capital is defined and why a positive balance is generally preferred to a negative one. Evaluate the following economic assertions:', ARRAY['Working capital for a cinema chain is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital.', 'A cinema chain is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account.', 'The current ratio for a cinema chain sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations.', 'Return on equity for a cinema chain relates the profit before interest and tax generated during the period to the equity that owners have invested in the business.', 'A return on capital employed figure for a cinema chain carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — The standard working capital definition applies to a cinema chain: current assets minus current liabilities.', 'TRUE — Positive working capital is generally preferable for a cinema chain as a cushion over short-term obligations.', 'TRUE — Current ratio analysis for a cinema chain compares current assets with current liabilities.', 'TRUE — Return on equity for a cinema chain links profit before interest and tax to owners'' equity.', 'TRUE — Return on capital employed for a cinema chain is most useful in comparison rather than in isolation.'], '5/5', 126, 'full' ),
( '6.5', 'CASE 6.5.127', 'Listed Company Performance Charts 127', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=36
February | Price=34
March | Price=34
April | Price=32
May | Price=31
June | Price=39
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=48000
February | Volume=79000
March | Volume=20000
April | Volume=79000
May | Volume=29000
June | Volume=94000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 36 | 48,000 |
| February | 34 | 79,000 |
| March | 34 | 20,000 |
| April | 32 | 79,000 |
| May | 31 | 29,000 |
| June | 39 | 94,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 221 |
| Shares outstanding | 666,000 |
| Total shares traded (six months) | 349,000 |

Evaluate the following economic assertions:', ARRAY['Earnings per share exceeds €0.24.', 'The closing share price rose by more than 33.7% from first to last month.', 'Total shares traded over six months exceed 14.4% of shares outstanding.', 'Peak monthly share turnover exceeds 71,634 shares.', 'Market capitalisation rose by more than 31.8% over the period.'], ARRAY[true, false, true, true, false], ARRAY['TRUE — Earnings per share ≈ €0.33.', 'FALSE — Price change ≈ 8.3%.', 'TRUE — Turnover ≈ 52.4% of shares outstanding.', 'TRUE — Peak monthly volume = 94,000.', 'FALSE — €24.0m → €26.0m.'], '5/5', 127, 'full' ),
( '6.5', 'CASE 6.5.128', 'Earnings Per Share From Reported Figures 128', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=39
February | Price=39
March | Price=40
April | Price=43
May | Price=45
June | Price=47
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=68000
February | Volume=59000
March | Volume=56000
April | Volume=52000
May | Volume=20000
June | Volume=56000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 39 | 68,000 |
| February | 39 | 59,000 |
| March | 40 | 56,000 |
| April | 43 | 52,000 |
| May | 45 | 20,000 |
| June | 47 | 56,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 300 |
| Shares outstanding | 520,000 |
| Total shares traded (six months) | 311,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 34% from first to last month.', 'Market capitalisation rose by more than 19.8% over the period.', 'Highest closing price is more than 36.3% above the lowest.', 'Peak monthly share turnover exceeds 77,534 shares.', 'Earnings per share exceeds €0.51.'], ARRAY[false, true, false, false, true], ARRAY['FALSE — Price change ≈ 20.5%.', 'TRUE — €20.3m → €24.4m.', 'FALSE — Range €39–€47.', 'FALSE — Peak monthly volume = 68,000.', 'TRUE — Earnings per share ≈ €0.58.'], '5/5', 128, 'full' ),
( '6.5', 'CASE 6.5.129', 'Share Price and Market Capitalisation 129', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=44
February | Price=47
March | Price=47
April | Price=49
May | Price=51
June | Price=55
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=18000
February | Volume=25000
March | Volume=75000
April | Volume=44000
May | Volume=25000
June | Volume=54000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 44 | 18,000 |
| February | 47 | 25,000 |
| March | 47 | 75,000 |
| April | 49 | 44,000 |
| May | 51 | 25,000 |
| June | 55 | 54,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 283 |
| Shares outstanding | 679,000 |
| Total shares traded (six months) | 241,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 17.9% from first to last month.', 'Market capitalisation at the last month exceeds €30.9 million.', 'Market capitalisation rose by more than 15% over the period.', 'Highest closing price is more than 14% above the lowest.', 'Shares outstanding equal 679,000.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Price change ≈ 25.0%.', 'TRUE — Market capitalisation ≈ €37.3 million.', 'TRUE — €29.9m → €37.3m.', 'TRUE — Range €44–€55.', 'TRUE — Shares outstanding = 679,000.'], '5/5', 129, 'full' ),
( '6.5', 'CASE 6.5.130', 'The Equity Ratio in Financial Structure in Context', 'Consider how the current ratio and the acid-test ratio each measure short-term liquidity, and why they can diverge for inventory-heavy businesses. Evaluate the following economic assertions:', ARRAY['Asset turnover for a cinema chain relates revenue earned during the period to the average total assets employed to generate that revenue.', 'The equity ratio for a cinema chain expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds.', 'Return on equity for an online retailer is calculated by comparing the cash balance on the balance sheet with total liabilities rather than relating profit to equity.', 'If a cinema chain draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken because current liabilities rise.', 'Working capital for a brewery group is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital.'], ARRAY[true, true, false, true, true], ARRAY['TRUE — Asset turnover measures how much revenue a cinema chain generates per unit of average assets.', 'TRUE — Equity ratio analysis for a cinema chain expresses equity as a share of total assets.', 'FALSE — Return on equity relates profit before interest and tax to equity, not cash to liabilities.', 'TRUE — Short-term borrowing can boost cash yet reduce working capital for a cinema chain.', 'TRUE — The standard working capital definition applies to a brewery group: current assets minus current liabilities.'], '5/5', 130, 'full' ),
( '6.5', 'CASE 6.5.131', 'Earnings Per Share From Reported Figures 131', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=28
February | Price=26
March | Price=25
April | Price=23
May | Price=23
June | Price=22
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=19000
February | Volume=42000
March | Volume=29000
April | Volume=59000
May | Volume=57000
June | Volume=28000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 28 | 19,000 |
| February | 26 | 42,000 |
| March | 25 | 29,000 |
| April | 23 | 59,000 |
| May | 23 | 57,000 |
| June | 22 | 28,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 249 |
| Shares outstanding | 777,000 |
| Total shares traded (six months) | 234,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 30% from first to last month.', 'Market capitalisation at the last month exceeds €15.5 million.', 'Highest closing price is more than 17.5% above the lowest.', 'Total shares traded over six months exceed 11.4% of shares outstanding.', 'Peak monthly share turnover exceeds 47,258 shares.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — Price change ≈ -21.4%.', 'TRUE — Market capitalisation ≈ €17.1 million.', 'TRUE — Range €22–€28.', 'TRUE — Turnover ≈ 30.1% of shares outstanding.', 'TRUE — Peak monthly volume = 59,000.'], '5/5', 131, 'full' ),
( '6.5', 'CASE 6.5.132', 'The Debt Ratio in Financial Structure in Practice', 'Consider a transport operator comparing this year''s profitability ratios with its own figures from five years earlier. Evaluate the following economic assertions:', ARRAY['A brewery group is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account.', 'The current ratio for a brewery group sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations.', 'Return on equity for a brewery group relates the profit before interest and tax generated during the period to the equity that owners have invested in the business.', 'A return on capital employed figure for a brewery group carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry.', 'Asset turnover for a brewery group relates revenue earned during the period to the average total assets employed to generate that revenue.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Positive working capital is generally preferable for a brewery group as a cushion over short-term obligations.', 'TRUE — Current ratio analysis for a brewery group compares current assets with current liabilities.', 'TRUE — Return on equity for a brewery group links profit before interest and tax to owners'' equity.', 'TRUE — Return on capital employed for a brewery group is most useful in comparison rather than in isolation.', 'TRUE — Asset turnover measures how much revenue a brewery group generates per unit of average assets.'], '4/5', 132, 'full' ),
( '6.5', 'CASE 6.5.133', 'Listed Company Performance Charts 133', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=34
February | Price=30
March | Price=29
April | Price=27
May | Price=25
June | Price=22
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=23000
February | Volume=31000
March | Volume=38000
April | Volume=42000
May | Volume=18000
June | Volume=18000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 34 | 23,000 |
| February | 30 | 31,000 |
| March | 29 | 38,000 |
| April | 27 | 42,000 |
| May | 25 | 18,000 |
| June | 22 | 18,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 249 |
| Shares outstanding | 407,000 |
| Total shares traded (six months) | 170,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 13.2% from first to last month.', 'Market capitalisation rose by more than 30.3% over the period.', 'Highest closing price is more than 24.8% above the lowest.', 'Peak monthly share turnover exceeds 46,668 shares.', 'Total shares traded over six months exceed 28.8% of shares outstanding.'], ARRAY[false, false, true, false, true], ARRAY['FALSE — Price change ≈ -35.3%.', 'FALSE — €13.8m → €9.0m.', 'TRUE — Range €22–€34.', 'FALSE — Peak monthly volume = 42,000.', 'TRUE — Turnover ≈ 41.8% of shares outstanding.'], '5/5', 133, 'full' ),
( '6.5', 'CASE 6.5.134', 'Earnings Per Share From Reported Figures 134', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=24
February | Price=23
March | Price=21
April | Price=19
May | Price=18
June | Price=16
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=70000
February | Volume=35000
March | Volume=30000
April | Volume=74000
May | Volume=50000
June | Volume=85000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 24 | 70,000 |
| February | 23 | 35,000 |
| March | 21 | 30,000 |
| April | 19 | 74,000 |
| May | 18 | 50,000 |
| June | 16 | 85,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 201 |
| Shares outstanding | 820,000 |
| Total shares traded (six months) | 344,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 30.1% from first to last month.', 'Market capitalisation at the last month exceeds €12 million.', 'Market capitalisation rose by more than 20.6% over the period.', 'Operating result is below €190 thousand.', 'Earnings per share is exactly €0.20.'], ARRAY[false, true, false, false, false], ARRAY['FALSE — Price change ≈ -33.3%.', 'TRUE — Market capitalisation ≈ €13.1 million.', 'FALSE — €19.7m → €13.1m.', 'FALSE — Operating result = 201.', 'FALSE — Earnings per share ≈ €0.25.'], '5/5', 134, 'full' ),
( '6.5', 'CASE 6.5.135', 'The Debt Ratio in Financial Structure Explained', 'Consider how return on equity relates profit before interest and tax to the equity that owners have invested in the business. Evaluate the following economic assertions:', ARRAY['The equity ratio for a brewery group expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds.', 'If a brewery group draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken because current liabilities rise.', 'Working capital for a packaging plant is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital.', 'A packaging plant is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account.', 'Inventory turnover for an online retailer is calculated by dividing revenue by average inventory rather than by relating cost of sales to average inventory.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Equity ratio analysis for a brewery group expresses equity as a share of total assets.', 'TRUE — Short-term borrowing can boost cash yet reduce working capital for a brewery group.', 'TRUE — The standard working capital definition applies to a packaging plant: current assets minus current liabilities.', 'TRUE — Positive working capital is generally preferable for a packaging plant as a cushion over short-term obligations.', 'FALSE — Inventory turnover uses cost of sales relative to average inventory, not revenue.'], '5/5', 135, 'full' ),
( '6.5', 'CASE 6.5.136', 'Listed Company Performance Charts 136', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=26
February | Price=28
March | Price=29
April | Price=30
May | Price=32
June | Price=35
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=94000
February | Volume=50000
March | Volume=88000
April | Volume=67000
May | Volume=60000
June | Volume=78000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 26 | 94,000 |
| February | 28 | 50,000 |
| March | 29 | 88,000 |
| April | 30 | 67,000 |
| May | 32 | 60,000 |
| June | 35 | 78,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 318 |
| Shares outstanding | 427,000 |
| Total shares traded (six months) | 437,000 |

Evaluate the following economic assertions:', ARRAY['Peak monthly share turnover exceeds 97,257 shares.', 'The closing share price rose by more than 14.2% from first to last month.', 'Operating result is below €198 thousand.', 'Market capitalisation at the last month exceeds €12.2 million.', 'Market capitalisation rose by more than 21% over the period.'], ARRAY[false, true, false, true, true], ARRAY['FALSE — Peak monthly volume = 94,000.', 'TRUE — Price change ≈ 34.6%.', 'FALSE — Operating result = 318.', 'TRUE — Market capitalisation ≈ €14.9 million.', 'TRUE — €11.1m → €14.9m.'], '4/5', 136, 'full' ),
( '6.5', 'CASE 6.5.137', 'The Debt Ratio in Financial Structure for Analysts', 'Consider how return on capital employed relates profit before interest and tax to the long-term capital financing a business. Evaluate the following economic assertions:', ARRAY['The current ratio and the acid-test ratio for an online retailer always produce identical results, regardless of how much inventory the business holds.', 'The current ratio for a packaging plant sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations.', 'Working capital for a hotel operator is calculated by subtracting current assets from current liabilities.', 'A hotel operator reporting negative working capital always holds more cash than it needs for its daily operations.', 'The acid-test ratio for a hotel operator includes inventory within current assets before comparing the total with current liabilities.'], ARRAY[false, true, false, false, false], ARRAY['FALSE — When inventory is material, the acid-test ratio differs from the current ratio.', 'TRUE — Current ratio analysis for a packaging plant compares current assets with current liabilities.', 'FALSE — Working capital is current assets minus current liabilities, not the reverse.', 'FALSE — Negative working capital means current liabilities exceed current assets and does not imply excess cash.', 'FALSE — The acid-test ratio excludes inventory to provide a stricter liquidity test.'], '5/5', 137, 'full' ),
( '6.5', 'CASE 6.5.138', 'The Debt Ratio in Financial Structure Across Sectors', 'Consider why a single return on capital employed figure is best interpreted alongside comparable years or similar businesses rather than in isolation. Evaluate the following economic assertions:', ARRAY['Return on equity for a packaging plant relates the profit before interest and tax generated during the period to the equity that owners have invested in the business.', 'A return on capital employed figure for a packaging plant carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry.', 'Asset turnover for a packaging plant relates revenue earned during the period to the average total assets employed to generate that revenue.', 'The equity ratio for a packaging plant expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds.', 'If a packaging plant draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken because current liabilities rise.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Return on equity for a packaging plant links profit before interest and tax to owners'' equity.', 'TRUE — Return on capital employed for a packaging plant is most useful in comparison rather than in isolation.', 'TRUE — Asset turnover measures how much revenue a packaging plant generates per unit of average assets.', 'TRUE — Equity ratio analysis for a packaging plant expresses equity as a share of total assets.', 'TRUE — Short-term borrowing can boost cash yet reduce working capital for a packaging plant.'], '5/5', 138, 'full' ),
( '6.5', 'CASE 6.5.139', 'Listed Company Performance Charts 139', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=33
February | Price=33
March | Price=30
April | Price=27
May | Price=27
June | Price=27
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=71000
February | Volume=30000
March | Volume=74000
April | Volume=83000
May | Volume=18000
June | Volume=26000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 33 | 71,000 |
| February | 33 | 30,000 |
| March | 30 | 74,000 |
| April | 27 | 83,000 |
| May | 27 | 18,000 |
| June | 27 | 26,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 246 |
| Shares outstanding | 546,000 |
| Total shares traded (six months) | 302,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 23.7% from first to last month.', 'Market capitalisation rose by more than 15.8% over the period.', 'Highest closing price is more than 16.3% above the lowest.', 'Peak monthly share turnover exceeds 87,996 shares.', 'Total shares traded over six months exceed 34.9% of shares outstanding.'], ARRAY[false, false, true, false, true], ARRAY['FALSE — Price change ≈ -18.2%.', 'FALSE — €18.0m → €14.7m.', 'TRUE — Range €27–€33.', 'FALSE — Peak monthly volume = 83,000.', 'TRUE — Turnover ≈ 55.3% of shares outstanding.'], '2/5', 139, 'full' ),
( '6.5', 'CASE 6.5.140', 'The Debt Ratio in Financial Structure in Context', 'Consider a brewery group reviewing whether revenue growth is matched by efficient use of its total asset base. Evaluate the following economic assertions:', ARRAY['A single return on capital employed figure for a hotel operator is always fully meaningful on its own, without any need to compare it against other years or similar businesses.', 'Return on equity for a hotel operator is calculated by comparing the cash balance on the balance sheet with total liabilities rather than relating profit to equity.', 'Working capital for an office-furniture retailer is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital.', 'Inventory turnover for a hotel operator is calculated by dividing revenue by average inventory rather than by relating cost of sales to average inventory.', 'The current ratio and the acid-test ratio for a hotel operator always produce identical results, regardless of how much inventory the business holds.'], ARRAY[false, false, true, false, false], ARRAY['FALSE — Return on capital employed gains meaning chiefly from comparisons over time or with peers.', 'FALSE — Return on equity relates profit before interest and tax to equity, not cash to liabilities.', 'TRUE — The standard working capital definition applies to an office-furniture retailer: current assets minus current liabilities.', 'FALSE — Inventory turnover uses cost of sales relative to average inventory, not revenue.', 'FALSE — When inventory is material, the acid-test ratio differs from the current ratio.'], '5/5', 140, 'full' ),
( '6.5', 'CASE 6.5.141', 'Share Price and Market Capitalisation 141', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=21
February | Price=22
March | Price=24
April | Price=24
May | Price=25
June | Price=26
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=54000
February | Volume=90000
March | Volume=37000
April | Volume=39000
May | Volume=83000
June | Volume=93000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 21 | 54,000 |
| February | 22 | 90,000 |
| March | 24 | 37,000 |
| April | 24 | 39,000 |
| May | 25 | 83,000 |
| June | 26 | 93,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 216 |
| Shares outstanding | 658,000 |
| Total shares traded (six months) | 396,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 11.4% from first to last month.', 'Market capitalisation at the last month exceeds €13.6 million.', 'Total shares traded over six months exceed 31.3% of shares outstanding.', 'Peak monthly share turnover exceeds 73,114 shares.', 'Shares outstanding equal 658,000.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Price change ≈ 23.8%.', 'TRUE — Market capitalisation ≈ €17.1 million.', 'TRUE — Turnover ≈ 60.2% of shares outstanding.', 'TRUE — Peak monthly volume = 93,000.', 'TRUE — Shares outstanding = 658,000.'], '5/5', 141, 'full' ),
( '6.5', 'CASE 6.5.142', 'Comparing Ratios Across Time and Peers in Practice', 'Consider how inventory turnover links cost of sales to average inventory, and what a rising figure typically indicates. Evaluate the following economic assertions:', ARRAY['An office-furniture retailer is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account.', 'The current ratio for an office-furniture retailer sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations.', 'Return on equity for an office-furniture retailer relates the profit before interest and tax generated during the period to the equity that owners have invested in the business.', 'A return on capital employed figure for an office-furniture retailer carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry.', 'Asset turnover for an office-furniture retailer relates revenue earned during the period to the average total assets employed to generate that revenue.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Positive working capital is generally preferable for an office-furniture retailer as a cushion over short-term obligations.', 'TRUE — Current ratio analysis for an office-furniture retailer compares current assets with current liabilities.', 'TRUE — Return on equity for an office-furniture retailer links profit before interest and tax to owners'' equity.', 'TRUE — Return on capital employed for an office-furniture retailer is most useful in comparison rather than in isolation.', 'TRUE — Asset turnover measures how much revenue an office-furniture retailer generates per unit of average assets.'], '5/5', 142, 'full' ),
( '6.5', 'CASE 6.5.143', 'Earnings Per Share From Reported Figures 143', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=19
February | Price=18
March | Price=18
April | Price=17
May | Price=16
June | Price=15
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=86000
February | Volume=38000
March | Volume=82000
April | Volume=19000
May | Volume=60000
June | Volume=51000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 19 | 86,000 |
| February | 18 | 38,000 |
| March | 18 | 82,000 |
| April | 17 | 19,000 |
| May | 16 | 60,000 |
| June | 15 | 51,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 298 |
| Shares outstanding | 845,000 |
| Total shares traded (six months) | 336,000 |

Evaluate the following economic assertions:', ARRAY['Highest closing price is more than 42.5% above the lowest.', 'Operating result is below €218 thousand.', 'Peak monthly share turnover exceeds 83,467 shares.', 'Earnings per share is exactly €0.46.', 'Shares outstanding equal 845,000.'], ARRAY[false, false, true, false, true], ARRAY['FALSE — Range €15–€19.', 'FALSE — Operating result = 298.', 'TRUE — Peak monthly volume = 86,000.', 'FALSE — Earnings per share ≈ €0.35.', 'TRUE — Shares outstanding = 845,000.'], '5/5', 143, 'full' ),
( '6.5', 'CASE 6.5.144', 'Share Price and Market Capitalisation 144', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=24
February | Price=25
March | Price=24
April | Price=25
May | Price=25
June | Price=30
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=58000
February | Volume=47000
March | Volume=66000
April | Volume=76000
May | Volume=91000
June | Volume=78000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 24 | 58,000 |
| February | 25 | 47,000 |
| March | 24 | 66,000 |
| April | 25 | 76,000 |
| May | 25 | 91,000 |
| June | 30 | 78,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 293 |
| Shares outstanding | 732,000 |
| Total shares traded (six months) | 416,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation rose by more than 8.8% over the period.', 'Operating result is below €285 thousand.', 'Highest closing price is more than 18.8% above the lowest.', 'Peak monthly share turnover exceeds 81,445 shares.', 'Shares outstanding equal 732,000.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — €17.6m → €22.0m.', 'FALSE — Operating result = 293.', 'TRUE — Range €24–€30.', 'TRUE — Peak monthly volume = 91,000.', 'TRUE — Shares outstanding = 732,000.'], '5/5', 144, 'full' ),
( '6.5', 'CASE 6.5.145', 'Listed Company Performance Charts 145', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=31
February | Price=29
March | Price=26
April | Price=25
May | Price=24
June | Price=23
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=35000
February | Volume=88000
March | Volume=76000
April | Volume=71000
May | Volume=80000
June | Volume=33000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 31 | 35,000 |
| February | 29 | 88,000 |
| March | 26 | 76,000 |
| April | 25 | 71,000 |
| May | 24 | 80,000 |
| June | 23 | 33,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 219 |
| Shares outstanding | 527,000 |
| Total shares traded (six months) | 383,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €10.7 million.', 'Market capitalisation rose by more than 22% over the period.', 'Highest closing price is more than 32.2% above the lowest.', 'Peak monthly share turnover exceeds 96,320 shares.', 'Earnings per share is exactly €0.36.'], ARRAY[true, false, true, false, false], ARRAY['TRUE — Market capitalisation ≈ €12.1 million.', 'FALSE — €16.3m → €12.1m.', 'TRUE — Range €23–€31.', 'FALSE — Peak monthly volume = 88,000.', 'FALSE — Earnings per share ≈ €0.42.'], '5/5', 145, 'full' ),
( '6.5', 'CASE 6.5.146', 'Earnings Per Share From Reported Figures 146', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=27
February | Price=25
March | Price=24
April | Price=21
May | Price=18
June | Price=16
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=23000
February | Volume=94000
March | Volume=71000
April | Volume=67000
May | Volume=54000
June | Volume=21000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 27 | 23,000 |
| February | 25 | 94,000 |
| March | 24 | 71,000 |
| April | 21 | 67,000 |
| May | 18 | 54,000 |
| June | 16 | 21,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 309 |
| Shares outstanding | 538,000 |
| Total shares traded (six months) | 330,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 34.8% from first to last month.', 'Peak monthly share turnover exceeds 66,814 shares.', 'Shares outstanding equal 538,000.', 'Earnings per share is exactly €0.57.', 'Operating result is below €236 thousand.'], ARRAY[false, true, true, true, false], ARRAY['FALSE — Price change ≈ -40.7%.', 'TRUE — Peak monthly volume = 94,000.', 'TRUE — Shares outstanding = 538,000.', 'TRUE — Earnings per share ≈ €0.57.', 'FALSE — Operating result = 309.'], '2/5', 146, 'full' ),
( '6.5', 'CASE 6.5.147', 'Comparing Ratios Across Time and Peers Explained', 'Consider how the equity ratio and the debt ratio together describe the way a business finances its total assets. Evaluate the following economic assertions:', ARRAY['The equity ratio for an office-furniture retailer expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds.', 'If an office-furniture retailer draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken because current liabilities rise.', 'Working capital for a dairy cooperative is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital.', 'Working capital for a pharmaceutical distributor is calculated by subtracting current assets from current liabilities.', 'A dairy cooperative is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account.'], ARRAY[true, true, true, false, true], ARRAY['TRUE — Equity ratio analysis for an office-furniture retailer expresses equity as a share of total assets.', 'TRUE — Short-term borrowing can boost cash yet reduce working capital for an office-furniture retailer.', 'TRUE — The standard working capital definition applies to a dairy cooperative: current assets minus current liabilities.', 'FALSE — Working capital is current assets minus current liabilities, not the reverse.', 'TRUE — Positive working capital is generally preferable for a dairy cooperative as a cushion over short-term obligations.'], '5/5', 147, 'full' ),
( '6.5', 'CASE 6.5.148', 'Comparing Ratios Across Time and Peers for Analysts', 'Consider why comparing ratios with industry peers or with a business''s own history over time improves interpretation. Evaluate the following economic assertions:', ARRAY['The current ratio for a dairy cooperative sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations.', 'Return on equity for a dairy cooperative relates the profit before interest and tax generated during the period to the equity that owners have invested in the business.', 'A pharmaceutical distributor reporting negative working capital always holds more cash than it needs for its daily operations.', 'The acid-test ratio for a pharmaceutical distributor includes inventory within current assets before comparing the total with current liabilities.', 'A single return on capital employed figure for a pharmaceutical distributor is always fully meaningful on its own, without any need to compare it against other years or similar businesses.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Current ratio analysis for a dairy cooperative compares current assets with current liabilities.', 'TRUE — Return on equity for a dairy cooperative links profit before interest and tax to owners'' equity.', 'FALSE — Negative working capital means current liabilities exceed current assets and does not imply excess cash.', 'FALSE — The acid-test ratio excludes inventory to provide a stricter liquidity test.', 'FALSE — Return on capital employed gains meaning chiefly from comparisons over time or with peers.'], '2/5', 148, 'full' ),
( '6.5', 'CASE 6.5.149', 'Comparing Ratios Across Time and Peers Across Sectors', 'Consider a publishing house analysing whether short-term borrowing improved cash but weakened working capital. Evaluate the following economic assertions:', ARRAY['Return on equity for a pharmaceutical distributor is calculated by comparing the cash balance on the balance sheet with total liabilities rather than relating profit to equity.', 'A return on capital employed figure for a dairy cooperative carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry.', 'Asset turnover for a dairy cooperative relates revenue earned during the period to the average total assets employed to generate that revenue.', 'The equity ratio for a dairy cooperative expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds.', 'If a dairy cooperative draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken because current liabilities rise.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — Return on equity relates profit before interest and tax to equity, not cash to liabilities.', 'TRUE — Return on capital employed for a dairy cooperative is most useful in comparison rather than in isolation.', 'TRUE — Asset turnover measures how much revenue a dairy cooperative generates per unit of average assets.', 'TRUE — Equity ratio analysis for a dairy cooperative expresses equity as a share of total assets.', 'TRUE — Short-term borrowing can boost cash yet reduce working capital for a dairy cooperative.'], '2/5', 149, 'full' ),
( '6.5', 'CASE 6.5.150', 'Comparing Ratios Across Time and Peers in Context', 'Consider why applying ratio benchmarks drawn from an unrelated industry can mislead rather than inform. Evaluate the following economic assertions:', ARRAY['Inventory turnover for a pharmaceutical distributor is calculated by dividing revenue by average inventory rather than by relating cost of sales to average inventory.', 'The current ratio and the acid-test ratio for a pharmaceutical distributor always produce identical results, regardless of how much inventory the business holds.', 'Working capital for a publishing house is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital.', 'Working capital for a transport operator is calculated by subtracting current assets from current liabilities.', 'A publishing house is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account.'], ARRAY[false, false, true, false, true], ARRAY['FALSE — Inventory turnover uses cost of sales relative to average inventory, not revenue.', 'FALSE — When inventory is material, the acid-test ratio differs from the current ratio.', 'TRUE — The standard working capital definition applies to a publishing house: current assets minus current liabilities.', 'FALSE — Working capital is current assets minus current liabilities, not the reverse.', 'TRUE — Positive working capital is generally preferable for a publishing house as a cushion over short-term obligations.'], '3/5', 150, 'full' ),
( '6.5', 'CASE 6.5.151', 'Listed Company Performance Charts 151', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=28
February | Price=27
March | Price=25
April | Price=24
May | Price=22
June | Price=22
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=49000
February | Volume=51000
March | Volume=46000
April | Volume=57000
May | Volume=73000
June | Volume=74000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 28 | 49,000 |
| February | 27 | 51,000 |
| March | 25 | 46,000 |
| April | 24 | 57,000 |
| May | 22 | 73,000 |
| June | 22 | 74,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 315 |
| Shares outstanding | 408,000 |
| Total shares traded (six months) | 350,000 |

Evaluate the following economic assertions:', ARRAY['Earnings per share exceeds €0.73.', 'Total shares traded over six months exceed 25% of shares outstanding.', 'Peak monthly share turnover exceeds 67,570 shares.', 'Highest closing price is more than 29.8% above the lowest.', 'Earnings per share is exactly €0.77.'], ARRAY[true, true, true, false, true], ARRAY['TRUE — Earnings per share ≈ €0.77.', 'TRUE — Turnover ≈ 85.8% of shares outstanding.', 'TRUE — Peak monthly volume = 74,000.', 'FALSE — Range €22–€28.', 'TRUE — Earnings per share ≈ €0.77.'], '5/5', 151, 'full' ),
( '6.5', 'CASE 6.5.152', 'Earnings Per Share From Reported Figures 152', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=28
February | Price=29
March | Price=29
April | Price=30
May | Price=29
June | Price=35
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=83000
February | Volume=50000
March | Volume=54000
April | Volume=71000
May | Volume=39000
June | Volume=87000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 28 | 83,000 |
| February | 29 | 50,000 |
| March | 29 | 54,000 |
| April | 30 | 71,000 |
| May | 29 | 39,000 |
| June | 35 | 87,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 278 |
| Shares outstanding | 644,000 |
| Total shares traded (six months) | 384,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 13.6% from first to last month.', 'Market capitalisation at the last month exceeds €19.3 million.', 'Peak monthly share turnover exceeds 93,396 shares.', 'Highest closing price is more than 17.6% above the lowest.', 'Total shares traded over six months exceed 27.3% of shares outstanding.'], ARRAY[true, true, false, true, true], ARRAY['TRUE — Price change ≈ 25.0%.', 'TRUE — Market capitalisation ≈ €22.5 million.', 'FALSE — Peak monthly volume = 87,000.', 'TRUE — Range €28–€35.', 'TRUE — Turnover ≈ 59.6% of shares outstanding.'], '5/5', 152, 'full' ),
( '6.5', 'CASE 6.5.153', 'The Four Pillars of Ratio Analysis in Practice', 'Analyze how working capital is defined and why a positive balance is generally preferred to a negative one. Evaluate the following economic assertions:', ARRAY['The current ratio for a publishing house sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations.', 'A transport operator reporting negative working capital always holds more cash than it needs for its daily operations.', 'The acid-test ratio for a transport operator includes inventory within current assets before comparing the total with current liabilities.', 'A single return on capital employed figure for a transport operator is always fully meaningful on its own, without any need to compare it against other years or similar businesses.', 'Return on equity for a transport operator is calculated by comparing the cash balance on the balance sheet with total liabilities rather than relating profit to equity.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Current ratio analysis for a publishing house compares current assets with current liabilities.', 'FALSE — Negative working capital means current liabilities exceed current assets and does not imply excess cash.', 'FALSE — The acid-test ratio excludes inventory to provide a stricter liquidity test.', 'FALSE — Return on capital employed gains meaning chiefly from comparisons over time or with peers.', 'FALSE — Return on equity relates profit before interest and tax to equity, not cash to liabilities.'], '4/5', 153, 'full' ),
( '6.5', 'CASE 6.5.154', 'Listed Company Performance Charts 154', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=37
February | Price=39
March | Price=42
April | Price=41
May | Price=44
June | Price=45
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=67000
February | Volume=50000
March | Volume=53000
April | Volume=75000
May | Volume=44000
June | Volume=19000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 37 | 67,000 |
| February | 39 | 50,000 |
| March | 42 | 53,000 |
| April | 41 | 75,000 |
| May | 44 | 44,000 |
| June | 45 | 19,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 320 |
| Shares outstanding | 427,000 |
| Total shares traded (six months) | 308,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 24.8% from first to last month.', 'Market capitalisation rose by more than 33.8% over the period.', 'Operating result is below €254 thousand.', 'Market capitalisation at the last month exceeds €17.9 million.', 'Earnings per share is exactly €0.65.'], ARRAY[false, false, false, true, false], ARRAY['FALSE — Price change ≈ 21.6%.', 'FALSE — €15.8m → €19.2m.', 'FALSE — Operating result = 320.', 'TRUE — Market capitalisation ≈ €19.2 million.', 'FALSE — Earnings per share ≈ €0.75.'], '3/5', 154, 'full' ),
( '6.5', 'CASE 6.5.155', 'Earnings Per Share From Reported Figures 155', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=33
February | Price=33
March | Price=33
April | Price=33
May | Price=35
June | Price=41
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=88000
February | Volume=60000
March | Volume=67000
April | Volume=55000
May | Volume=21000
June | Volume=59000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 33 | 88,000 |
| February | 33 | 60,000 |
| March | 33 | 67,000 |
| April | 33 | 55,000 |
| May | 35 | 21,000 |
| June | 41 | 59,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 256 |
| Shares outstanding | 435,000 |
| Total shares traded (six months) | 350,000 |

Evaluate the following economic assertions:', ARRAY['Highest closing price is more than 24.3% above the lowest.', 'Total shares traded over six months exceed 34.3% of shares outstanding.', 'Peak monthly share turnover exceeds 58,884 shares.', 'Operating result is below €221 thousand.', 'Shares outstanding equal 435,000.'], ARRAY[false, true, true, false, true], ARRAY['FALSE — Range €33–€41.', 'TRUE — Turnover ≈ 80.5% of shares outstanding.', 'TRUE — Peak monthly volume = 88,000.', 'FALSE — Operating result = 256.', 'TRUE — Shares outstanding = 435,000.'], '3/5', 155, 'full' ),
( '6.5', 'CASE 6.5.156', 'The Four Pillars of Ratio Analysis Explained', 'Analyze how the current ratio and the acid-test ratio each measure short-term liquidity, and why they can diverge for inventory-heavy businesses. Evaluate the following economic assertions:', ARRAY['Return on equity for a publishing house relates the profit before interest and tax generated during the period to the equity that owners have invested in the business.', 'A return on capital employed figure for a publishing house carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry.', 'Asset turnover for a publishing house relates revenue earned during the period to the average total assets employed to generate that revenue.', 'The equity ratio for a publishing house expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds.', 'If a publishing house draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken because current liabilities rise.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Return on equity for a publishing house links profit before interest and tax to owners'' equity.', 'TRUE — Return on capital employed for a publishing house is most useful in comparison rather than in isolation.', 'TRUE — Asset turnover measures how much revenue a publishing house generates per unit of average assets.', 'TRUE — Equity ratio analysis for a publishing house expresses equity as a share of total assets.', 'TRUE — Short-term borrowing can boost cash yet reduce working capital for a publishing house.'], '2/5', 156, 'full' ),
( '6.5', 'CASE 6.5.157', 'The Four Pillars of Ratio Analysis for Analysts', 'Consider a listed manufacturer whose shareholders compare its return on equity with sector peers. Evaluate the following economic assertions:', ARRAY['Working capital for a telecommunications provider is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital.', 'A telecommunications provider is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account.', 'The current ratio for a telecommunications provider sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations.', 'Inventory turnover for a transport operator is calculated by dividing revenue by average inventory rather than by relating cost of sales to average inventory.', 'Return on equity for a telecommunications provider relates the profit before interest and tax generated during the period to the equity that owners have invested in the business.'], ARRAY[true, true, true, false, true], ARRAY['TRUE — The standard working capital definition applies to a telecommunications provider: current assets minus current liabilities.', 'TRUE — Positive working capital is generally preferable for a telecommunications provider as a cushion over short-term obligations.', 'TRUE — Current ratio analysis for a telecommunications provider compares current assets with current liabilities.', 'FALSE — Inventory turnover uses cost of sales relative to average inventory, not revenue.', 'TRUE — Return on equity for a telecommunications provider links profit before interest and tax to owners'' equity.'], '5/5', 157, 'full' ),
( '6.5', 'CASE 6.5.158', 'Earnings Per Share From Reported Figures 158', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=21
February | Price=20
March | Price=18
April | Price=17
May | Price=16
June | Price=14
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=68000
February | Volume=87000
March | Volume=58000
April | Volume=57000
May | Volume=62000
June | Volume=27000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 21 | 68,000 |
| February | 20 | 87,000 |
| March | 18 | 58,000 |
| April | 17 | 57,000 |
| May | 16 | 62,000 |
| June | 14 | 27,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 209 |
| Shares outstanding | 769,000 |
| Total shares traded (six months) | 359,000 |

Evaluate the following economic assertions:', ARRAY['Market capitalisation at the last month exceeds €8.7 million.', 'Highest closing price is more than 39.6% above the lowest.', 'The closing share price rose by more than 33% from first to last month.', 'Total shares traded over six months exceed 20.4% of shares outstanding.', 'Peak monthly share turnover exceeds 57,679 shares.'], ARRAY[true, true, false, true, true], ARRAY['TRUE — Market capitalisation ≈ €10.8 million.', 'TRUE — Range €14–€21.', 'FALSE — Price change ≈ -33.3%.', 'TRUE — Turnover ≈ 46.7% of shares outstanding.', 'TRUE — Peak monthly volume = 87,000.'], '5/5', 158, 'full' ),
( '6.5', 'CASE 6.5.159', 'The Four Pillars of Ratio Analysis Across Sectors', 'Analyze how return on equity relates profit before interest and tax to the equity that owners have invested in the business. Evaluate the following economic assertions:', ARRAY['A return on capital employed figure for a telecommunications provider carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry.', 'The current ratio and the acid-test ratio for a transport operator always produce identical results, regardless of how much inventory the business holds.', 'Asset turnover for a telecommunications provider relates revenue earned during the period to the average total assets employed to generate that revenue.', 'The equity ratio for a telecommunications provider expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds.', 'If a telecommunications provider draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken because current liabilities rise.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — Return on capital employed for a telecommunications provider is most useful in comparison rather than in isolation.', 'FALSE — When inventory is material, the acid-test ratio differs from the current ratio.', 'TRUE — Asset turnover measures how much revenue a telecommunications provider generates per unit of average assets.', 'TRUE — Equity ratio analysis for a telecommunications provider expresses equity as a share of total assets.', 'TRUE — Short-term borrowing can boost cash yet reduce working capital for a telecommunications provider.'], '2/5', 159, 'full' ),
( '6.5', 'CASE 6.5.160', 'Listed Company Performance Charts 160', 'Consider the share market extract below for a listed business whose identity is not disclosed.

[[CHART type="line" title="Closing share price"]]
January | Price=34
February | Price=35
March | Price=38
April | Price=36
May | Price=38
June | Price=43
[[/CHART]]

[[CHART type="bar" title="Monthly share turnover"]]
January | Volume=79000
February | Volume=20000
March | Volume=79000
April | Volume=45000
May | Volume=22000
June | Volume=31000
[[/CHART]]

| Month | Closing price (€) | Shares traded |
| --- | ---: | ---: |
| January | 34 | 79,000 |
| February | 35 | 20,000 |
| March | 38 | 79,000 |
| April | 36 | 45,000 |
| May | 38 | 22,000 |
| June | 43 | 31,000 |

| Annual figures | Amount |
| --- | ---: |
| Operating result (€ thousands) | 298 |
| Shares outstanding | 447,000 |
| Total shares traded (six months) | 276,000 |

Evaluate the following economic assertions:', ARRAY['The closing share price rose by more than 14.4% from first to last month.', 'Earnings per share exceeds €0.61.', 'Market capitalisation rose by more than 28.5% over the period.', 'Highest closing price is more than 43.9% above the lowest.', 'Total shares traded over six months exceed 16.1% of shares outstanding.'], ARRAY[true, true, false, false, true], ARRAY['TRUE — Price change ≈ 26.5%.', 'TRUE — Earnings per share ≈ €0.67.', 'FALSE — €15.2m → €19.2m.', 'FALSE — Range €34–€43.', 'TRUE — Turnover ≈ 61.7% of shares outstanding.'], '5/5', 160, 'full' )
ON CONFLICT (case_id, tier) DO UPDATE SET
  subsection = EXCLUDED.subsection,
  title = EXCLUDED.title,
  context = EXCLUDED.context,
  statements = EXCLUDED.statements,
  answer_key = EXCLUDED.answer_key,
  tactical_explanations = EXCLUDED.tactical_explanations,
  difficulty_level = EXCLUDED.difficulty_level,
  sort_order = EXCLUDED.sort_order;
