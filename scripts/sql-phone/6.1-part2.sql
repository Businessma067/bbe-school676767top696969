-- Update expanded explanations for 6.1-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Equipment for Use Versus Resale". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "When a packaging line is acquired to be resold rather than used, it belongs among current assets as inventory."

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A packaging line bought by a business to support its own daily operations is a tangible fixed asset. The reason given — it delivers benefit across several accounting periods. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Equipment for Use Versus Resale". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A packaging line that a dealer displays for sale is not a fixed asset of that dealer."

The statement is true.', 'TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Operating use beyond one year meets the non-current tangible (fixed) asset definition.

Using the stem facts: "A concrete mixer kept in service by an operating business for more than one year is classified as a non-current tangible asset."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Equipment for Use Versus Resale". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A concrete mixer held by a dealer for resale to customers is classified as inventory, a current asset, rather than a non-current asset."

The statement is true.'] WHERE case_id = 'CASE 6.1.026' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Comparative Balance Sheet Analysis 27". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "The same physical item can be inventory for a dealer that holds it for sale and a non-current asset for a business that uses it in operations."

The statement is true.', 'TRUE — Non-current liabilities are the long-term funding claims; here they are long-term bank loan plus bonds payable, compared with total equity.

Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\text{NCL} = 404 + 60 = 464
$$

$$
\text{Equity} = 770
$$

$$
\frac{464}{770} = 60.3\%
$$

Threshold: less than 113.9% in Year 2. Actual 60.3%.

Reading the arithmetic against the claim: Year 2 NCL/equity is 60.3%, which is consistent with ''less than 113.9%'' so the statement holds.

The statement is true.', 'TRUE — Long-term financing is equity plus non-current liabilities; the claim compares that pool with non-current assets.

Name the identity in words: surplus = (equity + non-current liabilities) ÷ non-current assets − 1.

$$
\text{Equity} + \text{NCL} = 706 + 422 = 1,128
$$

$$
\text{NCA} = 882
$$

$$
\frac{1,128}{882} - 1 = 27.9\%
$$

Threshold: more than 21.9%. Actual surplus 27.9%.

Reading the arithmetic against the claim: the surplus is 27.9%, which exceeds 21.9% so the statement holds.

The statement is true.', 'TRUE — Current liabilities are due within one year or the operating cycle.

Trade payables to suppliers are routinely short-term; the euro amount does not change that rule.

Using the stem facts: "Trade payables of €82 thousand in Year 2 are correctly classified as a current liability, since suppliers are normally expected to be paid within one year."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — Use the case figures for Total liabilities and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total liabilities}_{\text{Y1}} = 576, \quad
\text{Total liabilities}_{\text{Y2}} = 632
$$

$$
\frac{632 - 576}{576} = 9.7\%
$$

$$
9.7\% > 9\%
$$

The actual growth is 9.7%, which is more than the claimed 9%.

The statement is true.'] WHERE case_id = 'CASE 6.1.027' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Intended use decides the line: operations → non-current; held for sale → inventory.

Using the stem facts: "The same concrete mixer may be a non-current asset for one business and inventory for another, depending on whether it is used or held for sale."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Management intent to use in operations (typically >1 year) places the item among non-current assets.

Using the stem facts: "Classifying a concrete mixer as a non-current asset depends on management''s intention to use it in operations rather than to sell it quickly."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Resale intent makes dealer stock inventory (current). Being a business does not turn resale stock into a non-current operating asset.

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Inventory as a Current Asset". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "When a concrete mixer is acquired to be resold rather than used, it belongs among current assets as inventory."

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A concrete mixer bought by a business to support its own daily operations is a tangible fixed asset. The reason given — it delivers benefit across several accounting periods. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.'] WHERE case_id = 'CASE 6.1.028' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Trade Receivables Explained". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A concrete mixer that a dealer displays for sale is not a fixed asset of that dealer."

The statement is true.', 'TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Operating use beyond one year meets the non-current tangible (fixed) asset definition.

Using the stem facts: "A laptop computer kept in service by an operating business for more than one year is classified as a non-current tangible asset."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Trade Receivables Explained". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A laptop computer held by a dealer for resale to customers is classified as inventory, a current asset, rather than a non-current asset."

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Classification follows how the reporting entity holds the item (use vs resale), not physical form alone.

Using the stem facts: "The same packaging line must always be classified identically on every balance sheet regardless of how it is held."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Intended use decides the line: operations → non-current; held for sale → inventory.

Using the stem facts: "The same laptop computer may be a non-current asset for one business and inventory for another, depending on whether it is used or held for sale."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.'] WHERE case_id = 'CASE 6.1.029' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Liquidity From the Balance Sheet 30". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "The same physical item can be inventory for a dealer that holds it for sale and a non-current asset for a business that uses it in operations."

The statement is true.', 'TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 152 + 68 + 44 = 264
$$

$$
CL = 120 + 27 = 147
$$

$$
\text{Current ratio} = \frac{264}{147} = 1.7959
$$

Claimed: exceeds 1.31. Actual 1.80.

Reading the arithmetic against the claim: actual current ratio 1.80 versus ''exceeds 1.31'' so the statement holds.

The statement is true.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 264 and current liabilities total 147:

$$
WC = CA - CL
$$

$$
CA = 264, \quad CL = 147
$$

$$
WC = 264 - 147 = 117
$$

The statement cites working capital of €117 thousand and that it is positive. Calculated WC is 117, which is positive.

Reading the arithmetic against the claim: WC = 117 is positive as claimed so the statement holds.

The statement is true.', 'TRUE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 339 and total assets = 977. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{339}{977}
$$

$$
ER = 34.7\%
$$

Claimed: is below 42.8%. Actual 34.7%.

Reading the arithmetic against the claim: actual equity ratio 34.7% matches ''is below 42.8%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Inventory as a percentage of current assets.

Name the identity in words: Inventory share of current assets = Inventory ÷ current assets.

From the extract, Inventory = 152 and current assets = 264. Plug the figures step by step:

$$
Share = \frac{\text{Inventory}}{\text{current assets}}
$$

$$
Share = \frac{152}{264}
$$

$$
Share = 57.6\%
$$

Threshold: more than 55.4%. Actual 57.6%.

Reading the arithmetic against the claim: actual share 57.6% matches ''more than 55.4%'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.030' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Asset Composition Chart 31". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "The balance sheet identity requires that total assets always equal the sum of total liabilities and total equity, which is why any increase in assets must be matched by an increase in either liabil…"

The statement is true.', 'FALSE — The acid-test (quick) ratio is a stricter liquidity test: inventory is removed from current assets before dividing by current liabilities.

Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = 290, \quad \text{Inventory} = 130, \quad CL = 261
$$

$$
CA - \text{Inventory} = 290 - 130 = 160
$$

$$
\text{Acid-test} = \frac{160}{261} = 0.6130
$$

Threshold: more than 1.26. Actual 0.61.

Reading the arithmetic against the claim: acid-test 0.61 is not more than 1.26 so the statement does not hold.

The statement is false.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 449 and total assets = 966. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{449}{966}
$$

$$
ER = 46.5\%
$$

Claimed: is below 25.8%. Actual 46.5%.

Reading the arithmetic against the claim: actual equity ratio 46.5% does not match ''is below 25.8%'' so the statement does not hold.

The statement is false.', 'FALSE — The debt ratio places debt against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: debt ratio = debt ÷ total assets.

From the extract, debt = 517 and total assets = 966. Plug the figures step by step:

$$
DR = \frac{\text{debt}}{\text{total assets}}
$$

$$
DR = \frac{517}{966}
$$

$$
DR = 53.5\%
$$

Claimed: exceeds 77.4%. Actual 53.5%.

Reading the arithmetic against the claim: actual debt ratio 53.5% does not match ''exceeds 77.4%'' so the statement does not hold.

The statement is false.', 'FALSE — This is a composition claim: express Buildings as a percentage of total assets.

Name the identity in words: Buildings share of total assets = Buildings ÷ total assets.

From the extract, Buildings = 309 and total assets = 966. Plug the figures step by step:

$$
Share = \frac{\text{Buildings}}{\text{total assets}}
$$

$$
Share = \frac{309}{966}
$$

$$
Share = 32.0\%
$$

Threshold: more than 57.9%. Actual 32.0%.

Reading the arithmetic against the claim: actual share 32.0% does not match ''more than 57.9%'' so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.1.031' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Management intent to use in operations (typically >1 year) places the item among non-current assets.

Using the stem facts: "Classifying a laptop computer as a non-current asset depends on management''s intention to use it in operations rather than to sell it quickly."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Cash and Cash Equivalents". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "When a laptop computer is acquired to be resold rather than used, it belongs among current assets as inventory."

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Price affects measurement; classification between fixed asset and inventory follows intended use.

Using the stem facts: "Classifying a packaging line as a non-current asset depends mainly on its purchase price rather than on management''s intended use."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A laptop computer bought by a business to support its own daily operations is a tangible fixed asset. The reason given — it delivers benefit across several accounting periods. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Resale intent puts the item in inventory from acquisition; time unsold does not make it non-current.

Using the stem facts: "A packaging line acquired for resale still counts among non-current assets as long as it remains unsold for several months."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.'] WHERE case_id = 'CASE 6.1.032' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Comparative Balance Sheet Analysis 33". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Long-term assets should preferably be financed only with short-term trade credit."

The statement is false.', 'FALSE — Use the case figures for Total equity and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total equity}_{\text{Y1}} = 619, \quad
\text{Total equity}_{\text{Y2}} = 655
$$

$$
\frac{655 - 619}{619} = 5.8\%
$$

$$
5.8\% \le  10.8\%
$$

The actual growth is 5.8%, which is not more than the claimed 10.8%.

The statement is false.', 'FALSE — Use the case figures for Total assets and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total assets}_{\text{Y1}} = 1,145, \quad
\text{Total assets}_{\text{Y2}} = 1,257
$$

$$
\frac{1,257 - 1,145}{1,145} = 9.8\%
$$

$$
9.8\% \le  23.6\%
$$

The actual growth is 9.8%, which is not more than the claimed 23.6%.

The statement is false.', 'TRUE — Use the case figures for Inventory and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Inventory}_{\text{Y1}} = 216, \quad
\text{Inventory}_{\text{Y2}} = 253
$$

$$
\frac{253 - 216}{216} = 17.1\%
$$

$$
17.1\% > 10.5\%
$$

The actual growth is 17.1%, which is more than the claimed 10.5%.

The statement is true.', 'FALSE — Use the case figures for Trade payables and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Trade payables}_{\text{Y1}} = 169, \quad
\text{Trade payables}_{\text{Y2}} = 198
$$

$$
\frac{198 - 169}{169} = 17.2\%
$$

$$
17.2\% \le  20\%
$$

The actual growth is 17.2%, which is not more than the claimed 20%.

The statement is false.'] WHERE case_id = 'CASE 6.1.033' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Gearing From Comparative Figures 34". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Current liabilities are debts that must be repaid after more than one year."

The statement is false.', 'TRUE — Non-current liabilities are the long-term funding claims; here they are long-term bank loan plus bonds payable, compared with total equity.

Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\text{NCL} = 395 + 78 = 473
$$

$$
\text{Equity} = 190
$$

$$
\frac{473}{190} = 248.9\%
$$

Threshold: more than 56.1% in Year 1. Actual 248.9%.

Reading the arithmetic against the claim: Year 1 NCL/equity is 248.9%, which is consistent with ''more than 56.1%'' so the statement holds.

The statement is true.', 'FALSE — Use the case figures for Total equity and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total equity}_{\text{Y1}} = 190, \quad
\text{Total equity}_{\text{Y2}} = 245
$$

$$
\frac{245 - 190}{190} = 28.9\%
$$

$$
28.9\% \le  29.1\%
$$

The actual growth is 28.9%, which is not more than the claimed 29.1%.

The statement is false.', 'TRUE — This is a composition claim: express Non-current assets as a percentage of total assets in Year 2.

Name the identity in words: Non-current assets share of total assets in Year 2 = Non-current assets ÷ total assets in Year 2.

From the extract, Non-current assets = 717 and total assets in Year 2 = 1,042. Plug the figures step by step:

$$
Share = \frac{\text{Non-current assets}}{\text{total assets in Year 2}}
$$

$$
Share = \frac{717}{1,042}
$$

$$
Share = 68.8\%
$$

Threshold: more than 59.9%. Actual 68.8%.

Reading the arithmetic against the claim: actual share 68.8% matches ''more than 59.9%'' so the statement holds.

The statement is true.', 'TRUE — Working capital turns positive when current assets exceed current liabilities after having been non-positive.

Name the identity in words: working capital = current assets − current liabilities.

$$
WC_{Y1} = 291 - 296 = -5
$$

$$
WC_{Y2} = 325 - 291 = 34
$$

Year 1 is non-positive; Year 2 is positive.

Reading the arithmetic against the claim: WC moves from -5 to 34, which fits ''turned positive'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.034' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Balance Sheet Structure Review 35". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A high equity ratio indicates that a larger portion of assets was financed by the company''s own resources rather than by creditors."

The statement is true.', 'TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 113 + 85 + 73 = 271
$$

$$
CL = 94 + 37 = 131
$$

$$
\text{Current ratio} = \frac{271}{131} = 2.0687
$$

Claimed: exceeds 1.75. Actual 2.07.

Reading the arithmetic against the claim: actual current ratio 2.07 versus ''exceeds 1.75'' so the statement holds.

The statement is true.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 113 + 85 + 73 = 271
$$

$$
CL = 94 + 37 = 131
$$

$$
\text{Current ratio} = \frac{271}{131} = 2.0687
$$

Claimed: is below 0.75. Actual 2.07.

Reading the arithmetic against the claim: actual current ratio 2.07 versus ''is below 0.75'' so the statement does not hold.

The statement is false.', 'FALSE — This is a composition claim: express Buildings as a percentage of total assets.

Name the identity in words: Buildings share of total assets = Buildings ÷ total assets.

From the extract, Buildings = 319 and total assets = 801. Plug the figures step by step:

$$
Share = \frac{\text{Buildings}}{\text{total assets}}
$$

$$
Share = \frac{319}{801}
$$

$$
Share = 39.8\%
$$

Threshold: more than 41.2%. Actual 39.8%.

Reading the arithmetic against the claim: actual share 39.8% does not match ''more than 41.2%'' so the statement does not hold.

The statement is false.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 271 and current liabilities total 131:

$$
WC = CA - CL
$$

$$
CA = 271, \quad CL = 131
$$

$$
WC = 271 - 131 = 140
$$

The statement cites working capital of €140 thousand and that it is positive. Calculated WC is 140, which is positive.

Reading the arithmetic against the claim: WC = 140 is positive as claimed so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.035' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Liquidity From the Balance Sheet 36". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Long-term assets should preferably be financed only with short-term trade credit."

The statement is false.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 207 + 161 + 98 = 466
$$

$$
CL = 161 + 70 = 231
$$

$$
\text{Current ratio} = \frac{466}{231} = 2.0173
$$

Claimed: is below 1.08. Actual 2.02.

Reading the arithmetic against the claim: actual current ratio 2.02 versus ''is below 1.08'' so the statement does not hold.

The statement is false.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 466 and current liabilities total 231:

$$
WC = CA - CL
$$

$$
CA = 466, \quad CL = 231
$$

$$
WC = 466 - 231 = 235
$$

The statement cites working capital of €235 thousand and that it is positive. Calculated WC is 235, which is positive.

Reading the arithmetic against the claim: WC = 235 is positive as claimed so the statement holds.

The statement is true.', 'FALSE — The acid-test (quick) ratio is a stricter liquidity test: inventory is removed from current assets before dividing by current liabilities.

Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = 466, \quad \text{Inventory} = 207, \quad CL = 231
$$

$$
CA - \text{Inventory} = 466 - 207 = 259
$$

$$
\text{Acid-test} = \frac{259}{231} = 1.1212
$$

Threshold: more than 1.36. Actual 1.12.

Reading the arithmetic against the claim: acid-test 1.12 is not more than 1.36 so the statement does not hold.

The statement is false.', 'TRUE — This is a composition claim: express Inventory as a percentage of current assets.

Name the identity in words: Inventory share of current assets = Inventory ÷ current assets.

From the extract, Inventory = 207 and current assets = 466. Plug the figures step by step:

$$
Share = \frac{\text{Inventory}}{\text{current assets}}
$$

$$
Share = \frac{207}{466}
$$

$$
Share = 44.4\%
$$

Threshold: more than 36.1%. Actual 44.4%.

Reading the arithmetic against the claim: actual share 44.4% matches ''more than 36.1%'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.036' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Gearing From Comparative Figures 37". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A high equity ratio indicates that a larger portion of assets was financed by the company''s own resources rather than by creditors."

The statement is true.', 'TRUE — Non-current liabilities are the long-term funding claims; here they are long-term bank loan plus bonds payable, compared with total equity.

Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\text{NCL} = 223 + 87 = 310
$$

$$
\text{Equity} = 371
$$

$$
\frac{310}{371} = 83.6\%
$$

Threshold: more than 62.2% in Year 1. Actual 83.6%.

Reading the arithmetic against the claim: Year 1 NCL/equity is 83.6%, which is consistent with ''more than 62.2%'' so the statement holds.

The statement is true.', 'TRUE — Non-current liabilities are the long-term funding claims; here they are long-term bank loan plus bonds payable, compared with total equity.

Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\text{NCL} = 242 + 97 = 339
$$

$$
\text{Equity} = 407
$$

$$
\frac{339}{407} = 83.3\%
$$

Threshold: less than 125.6% in Year 2. Actual 83.3%.

Reading the arithmetic against the claim: Year 2 NCL/equity is 83.3%, which is consistent with ''less than 125.6%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Non-current assets as a percentage of total assets in Year 2.

Name the identity in words: Non-current assets share of total assets in Year 2 = Non-current assets ÷ total assets in Year 2.

From the extract, Non-current assets = 711 and total assets in Year 2 = 1,041. Plug the figures step by step:

$$
Share = \frac{\text{Non-current assets}}{\text{total assets in Year 2}}
$$

$$
Share = \frac{711}{1,041}
$$

$$
Share = 68.3\%
$$

Threshold: more than 57.6%. Actual 68.3%.

Reading the arithmetic against the claim: actual share 68.3% matches ''more than 57.6%'' so the statement holds.

The statement is true.', 'TRUE — This is the Year 2 current ratio read as coverage of current liabilities.

Name the identity in words: coverage = current assets ÷ current liabilities.

$$
\frac{330}{295} = 1.1186
$$

Threshold: less than 1.61. Actual 1.12.

Reading the arithmetic against the claim: actual coverage 1.12 is less than 1.61 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.037' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Two-Year Balance Sheet Review 38". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A high equity ratio indicates that a larger portion of assets was financed by the company''s own resources rather than by creditors."

The statement is true.', 'FALSE — Use the case figures for Total assets and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total assets}_{\text{Y1}} = 1,204, \quad
\text{Total assets}_{\text{Y2}} = 1,282
$$

$$
\frac{1,282 - 1,204}{1,204} = 6.5\%
$$

$$
6.5\% \le  15.9\%
$$

The actual growth is 6.5%, which is not more than the claimed 15.9%.

The statement is false.', 'TRUE — Non-current liabilities are the long-term funding claims; here they are long-term bank loan plus bonds payable, compared with total equity.

Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\text{NCL} = 401 + 79 = 480
$$

$$
\text{Equity} = 510
$$

$$
\frac{480}{510} = 94.1\%
$$

Threshold: more than 55.1% in Year 1. Actual 94.1%.

Reading the arithmetic against the claim: Year 1 NCL/equity is 94.1%, which is consistent with ''more than 55.1%'' so the statement holds.

The statement is true.', 'FALSE — Use the case figures for Inventory and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Inventory}_{\text{Y1}} = 194, \quad
\text{Inventory}_{\text{Y2}} = 213
$$

$$
\frac{213 - 194}{194} = 9.8\%
$$

$$
9.8\% \le  29.8\%
$$

The actual growth is 9.8%, which is not more than the claimed 29.8%.

The statement is false.', 'FALSE — Use the case figures for Trade payables and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Trade payables}_{\text{Y1}} = 133, \quad
\text{Trade payables}_{\text{Y2}} = 149
$$

$$
\frac{149 - 133}{133} = 12.0\%
$$

$$
12.0\% \le  21.2\%
$$

The actual growth is 12.0%, which is not more than the claimed 21.2%.

The statement is false.'] WHERE case_id = 'CASE 6.1.038' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Current Liabilities Overview". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A laptop computer that a dealer displays for sale is not a fixed asset of that dealer."

The statement is true.', 'TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Operating use beyond one year meets the non-current tangible (fixed) asset definition.

Using the stem facts: "A refrigerated van kept in service by an operating business for more than one year is classified as a non-current tangible asset."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Current Liabilities Overview". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A refrigerated van held by a dealer for resale to customers is classified as inventory, a current asset, rather than a non-current asset."

The statement is true.', 'TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Intended use decides the line: operations → non-current; held for sale → inventory.

Using the stem facts: "The same refrigerated van may be a non-current asset for one business and inventory for another, depending on whether it is used or held for sale."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Management intent to use in operations (typically >1 year) places the item among non-current assets.

Using the stem facts: "Classifying a refrigerated van as a non-current asset depends on management''s intention to use it in operations rather than to sell it quickly."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.'] WHERE case_id = 'CASE 6.1.039' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Asset Composition Chart 40". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "Owner''s equity is the residual claim remaining after liabilities are deducted from assets, and it is the portion of assets not financed by debt."

The statement is true.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 95 + 60 + 31 = 186
$$

$$
CL = 89 + 54 = 143
$$

$$
\text{Current ratio} = \frac{186}{143} = 1.3007
$$

Claimed: exceeds 1.33. Actual 1.30.

Reading the arithmetic against the claim: actual current ratio 1.30 versus ''exceeds 1.33'' so the statement does not hold.

The statement is false.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 95 + 60 + 31 = 186
$$

$$
CL = 89 + 54 = 143
$$

$$
\text{Current ratio} = \frac{186}{143} = 1.3007
$$

Claimed: is below 0.63. Actual 1.30.

Reading the arithmetic against the claim: actual current ratio 1.30 versus ''is below 0.63'' so the statement does not hold.

The statement is false.', 'FALSE — The acid-test (quick) ratio is a stricter liquidity test: inventory is removed from current assets before dividing by current liabilities.

Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = 186, \quad \text{Inventory} = 95, \quad CL = 143
$$

$$
CA - \text{Inventory} = 186 - 95 = 91
$$

$$
\text{Acid-test} = \frac{91}{143} = 0.6364
$$

Threshold: more than 0.65. Actual 0.64.

Reading the arithmetic against the claim: acid-test 0.64 is not more than 0.65 so the statement does not hold.

The statement is false.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 467 and total assets = 891. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{467}{891}
$$

$$
ER = 52.4\%
$$

Claimed: is below 44%. Actual 52.4%.

Reading the arithmetic against the claim: actual equity ratio 52.4% does not match ''is below 44%'' so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.1.040' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Non-Current Liabilities Overview". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "When a refrigerated van is acquired to be resold rather than used, it belongs among current assets as inventory."

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A refrigerated van bought by a business to support its own daily operations is a tangible fixed asset. The reason given — it delivers benefit across several accounting periods. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Non-Current Liabilities Overview". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A refrigerated van that a dealer displays for sale is not a fixed asset of that dealer."

The statement is true.', 'TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Operating use beyond one year meets the non-current tangible (fixed) asset definition.

Using the stem facts: "A woodworking lathe kept in service by an operating business for more than one year is classified as a non-current tangible asset."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Non-Current Liabilities Overview". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A woodworking lathe held by a dealer for resale to customers is classified as inventory, a current asset, rather than a non-current asset."

The statement is true.'] WHERE case_id = 'CASE 6.1.041' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Wear is handled by depreciating a fixed asset. Daily operating use supports non-current classification, not inventory.

Using the stem facts: "A packaging line used daily in a business''s own operations should be recorded as inventory because it wears out over time."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Intended use decides the line: operations → non-current; held for sale → inventory.

Using the stem facts: "The same woodworking lathe may be a non-current asset for one business and inventory for another, depending on whether it is used or held for sale."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Management intent to use in operations (typically >1 year) places the item among non-current assets.

Using the stem facts: "Classifying a woodworking lathe as a non-current asset depends on management''s intention to use it in operations rather than to sell it quickly."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Amounts Owed to Suppliers". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "When a woodworking lathe is acquired to be resold rather than used, it belongs among current assets as inventory."

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A woodworking lathe bought by a business to support its own daily operations is a tangible fixed asset. The reason given — it delivers benefit across several accounting periods. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.'] WHERE case_id = 'CASE 6.1.042' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Long-Term Loans as Non-Current Liabilities". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A woodworking lathe that a dealer displays for sale is not a fixed asset of that dealer."

The statement is true.', 'TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Operating use beyond one year meets the non-current tangible (fixed) asset definition.

Using the stem facts: "An espresso machine kept in service by an operating business for more than one year is classified as a non-current tangible asset."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Long-Term Loans as Non-Current Liabilities". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "An espresso machine held by a dealer for resale to customers is classified as inventory, a current asset, rather than a non-current asset."

The statement is true.', 'TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Intended use decides the line: operations → non-current; held for sale → inventory.

Using the stem facts: "The same espresso machine may be a non-current asset for one business and inventory for another, depending on whether it is used or held for sale."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Management intent to use in operations (typically >1 year) places the item among non-current assets.

Using the stem facts: "Classifying an espresso machine as a non-current asset depends on management''s intention to use it in operations rather than to sell it quickly."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.'] WHERE case_id = 'CASE 6.1.043' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Balance Sheet Structure Review 44". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A high equity ratio indicates that a larger portion of assets was financed by the company''s own resources rather than by creditors."

The statement is true.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 180 + 178 + 110 = 468
$$

$$
CL = 147 + 74 = 221
$$

$$
\text{Current ratio} = \frac{468}{221} = 2.1176
$$

Claimed: is below 0.64. Actual 2.12.

Reading the arithmetic against the claim: actual current ratio 2.12 versus ''is below 0.64'' so the statement does not hold.

The statement is false.', 'TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 180 + 178 + 110 = 468
$$

$$
CL = 147 + 74 = 221
$$

$$
\text{Current ratio} = \frac{468}{221} = 2.1176
$$

Claimed: exceeds 1.85. Actual 2.12.

Reading the arithmetic against the claim: actual current ratio 2.12 versus ''exceeds 1.85'' so the statement holds.

The statement is true.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 681 and total assets = 1,293. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{681}{1,293}
$$

$$
ER = 52.7\%
$$

Claimed: is below 26.8%. Actual 52.7%.

Reading the arithmetic against the claim: actual equity ratio 52.7% does not match ''is below 26.8%'' so the statement does not hold.

The statement is false.', 'FALSE — The debt ratio places debt against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: debt ratio = debt ÷ total assets.

From the extract, debt = 612 and total assets = 1,293. Plug the figures step by step:

$$
DR = \frac{\text{debt}}{\text{total assets}}
$$

$$
DR = \frac{612}{1,293}
$$

$$
DR = 47.3\%
$$

Claimed: exceeds 68%. Actual 47.3%.

Reading the arithmetic against the claim: actual debt ratio 47.3% does not match ''exceeds 68%'' so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.1.044' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Bonds Payable and Settlement Timing". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "When an espresso machine is acquired to be resold rather than used, it belongs among current assets as inventory."

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

After sale, the buyer''s intent governs: use in operations → buyer''s non-current asset, not inventory.

Using the stem facts: "Once a dealer sells a packaging line from its stock, the buyer must continue to record it as inventory."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: An espresso machine bought by a business to support its own daily operations is a tangible fixed asset. The reason given — it delivers benefit across several accounting periods. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Inventory is stock held for sale, not every physical item owned. Equipment used in operations is a non-current tangible asset.

Using the stem facts: "A concrete mixer used by an operating business is classified as inventory because inventory can include any physical equipment a business owns."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Bonds Payable and Settlement Timing". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "An espresso machine that a dealer displays for sale is not a fixed asset of that dealer."

The statement is true.'] WHERE case_id = 'CASE 6.1.045' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Operating use beyond one year meets the non-current tangible (fixed) asset definition.

Using the stem facts: "A printing press kept in service by an operating business for more than one year is classified as a non-current tangible asset."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Resale intent makes dealer stock inventory (current). Being a business does not turn resale stock into a non-current operating asset.

The statement is false.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Classification follows how the reporting entity holds the item (use vs resale), not physical form alone.

Using the stem facts: "The same concrete mixer must always be classified identically on every balance sheet regardless of how it is held."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Price affects measurement; classification between fixed asset and inventory follows intended use.

Using the stem facts: "Classifying a concrete mixer as a non-current asset depends mainly on its purchase price rather than on management''s intended use."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "The Equity Ratio Explained". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A printing press held by a dealer for resale to customers is classified as inventory, a current asset, rather than a non-current asset."

The statement is true.'] WHERE case_id = 'CASE 6.1.046' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Two-Year Balance Sheet Review 47". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "Owner''s equity is the residual claim remaining after liabilities are deducted from assets, and it is the portion of assets not financed by debt."

The statement is true.', 'FALSE — Use the case figures for Total equity and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total equity}_{\text{Y1}} = 251, \quad
\text{Total equity}_{\text{Y2}} = 257
$$

$$
\frac{257 - 251}{251} = 2.4\%
$$

$$
2.4\% \le  25.9\%
$$

The actual growth is 2.4%, which is not more than the claimed 25.9%.

The statement is false.', 'TRUE — Non-current liabilities are the long-term funding claims; here they are long-term bank loan plus bonds payable, compared with total equity.

Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\text{NCL} = 403 + 55 = 458
$$

$$
\text{Equity} = 251
$$

$$
\frac{458}{251} = 182.5\%
$$

Threshold: more than 108.2% in Year 1. Actual 182.5%.

Reading the arithmetic against the claim: Year 1 NCL/equity is 182.5%, which is consistent with ''more than 108.2%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Non-current assets as a percentage of total assets in Year 2.

Name the identity in words: Non-current assets share of total assets in Year 2 = Non-current assets ÷ total assets in Year 2.

From the extract, Non-current assets = 692 and total assets in Year 2 = 1,010. Plug the figures step by step:

$$
Share = \frac{\text{Non-current assets}}{\text{total assets in Year 2}}
$$

$$
Share = \frac{692}{1,010}
$$

$$
Share = 68.5\%
$$

Threshold: more than 67.9%. Actual 68.5%.

Reading the arithmetic against the claim: actual share 68.5% matches ''more than 67.9%'' so the statement holds.

The statement is true.', 'TRUE — Current liabilities are due within one year or the operating cycle.

Trade payables to suppliers are routinely short-term; the euro amount does not change that rule.

Using the stem facts: "Trade payables of €234 thousand in Year 2 are correctly classified as a current liability, since suppliers are normally expected to be paid within one year."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.'] WHERE case_id = 'CASE 6.1.047' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Comparative Balance Sheet Analysis 48". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "The same physical item can be inventory for a dealer that holds it for sale and a non-current asset for a business that uses it in operations."

The statement is true.', 'FALSE — Use the case figures for Total equity and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total equity}_{\text{Y1}} = 543, \quad
\text{Total equity}_{\text{Y2}} = 578
$$

$$
\frac{578 - 543}{543} = 6.4\%
$$

$$
6.4\% \le  14.8\%
$$

The actual growth is 6.4%, which is not more than the claimed 14.8%.

The statement is false.', 'FALSE — Use the case figures for Total assets and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total assets}_{\text{Y1}} = 997, \quad
\text{Total assets}_{\text{Y2}} = 1,079
$$

$$
\frac{1,079 - 997}{997} = 8.2\%
$$

$$
8.2\% \le  20.1\%
$$

The actual growth is 8.2%, which is not more than the claimed 20.1%.

The statement is false.', 'TRUE — Non-current liabilities are the long-term funding claims; here they are long-term bank loan plus bonds payable, compared with total equity.

Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\text{NCL} = 311 + 51 = 362
$$

$$
\text{Equity} = 578
$$

$$
\frac{362}{578} = 62.6\%
$$

Threshold: less than 87.7% in Year 2. Actual 62.6%.

Reading the arithmetic against the claim: Year 2 NCL/equity is 62.6%, which is consistent with ''less than 87.7%'' so the statement holds.

The statement is true.', 'FALSE — Use the case figures for Inventory and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Inventory}_{\text{Y1}} = 140, \quad
\text{Inventory}_{\text{Y2}} = 153
$$

$$
\frac{153 - 140}{140} = 9.3\%
$$

$$
9.3\% \le  13.8\%
$$

The actual growth is 9.3%, which is not more than the claimed 13.8%.

The statement is false.'] WHERE case_id = 'CASE 6.1.048' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Intended use decides the line: operations → non-current; held for sale → inventory.

Using the stem facts: "The same printing press may be a non-current asset for one business and inventory for another, depending on whether it is used or held for sale."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Resale intent puts the item in inventory from acquisition; time unsold does not make it non-current.

Using the stem facts: "A concrete mixer acquired for resale still counts among non-current assets as long as it remains unsold for several months."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Wear is handled by depreciating a fixed asset. Daily operating use supports non-current classification, not inventory.

Using the stem facts: "A concrete mixer used daily in a business''s own operations should be recorded as inventory because it wears out over time."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Management intent to use in operations (typically >1 year) places the item among non-current assets.

Using the stem facts: "Classifying a printing press as a non-current asset depends on management''s intention to use it in operations rather than to sell it quickly."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

After sale, the buyer''s intent governs: use in operations → buyer''s non-current asset, not inventory.

Using the stem facts: "Once a dealer sells a concrete mixer from its stock, the buyer must continue to record it as inventory."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.'] WHERE case_id = 'CASE 6.1.049' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Balance Sheet Structure Review 50". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "Profit for the year increases equity through retained earnings, while a loss decreases equity."

The statement is true.', 'TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 204 + 104 + 57 = 365
$$

$$
CL = 67 + 54 = 121
$$

$$
\text{Current ratio} = \frac{365}{121} = 3.0165
$$

Claimed: exceeds 1.56. Actual 3.02.

Reading the arithmetic against the claim: actual current ratio 3.02 versus ''exceeds 1.56'' so the statement holds.

The statement is true.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 204 + 104 + 57 = 365
$$

$$
CL = 67 + 54 = 121
$$

$$
\text{Current ratio} = \frac{365}{121} = 3.0165
$$

Claimed: is below 0.96. Actual 3.02.

Reading the arithmetic against the claim: actual current ratio 3.02 versus ''is below 0.96'' so the statement does not hold.

The statement is false.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 588 and total assets = 1,147. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{588}{1,147}
$$

$$
ER = 51.3\%
$$

Claimed: is below 40%. Actual 51.3%.

Reading the arithmetic against the claim: actual equity ratio 51.3% does not match ''is below 40%'' so the statement does not hold.

The statement is false.', 'FALSE — The debt ratio places debt against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: debt ratio = debt ÷ total assets.

From the extract, debt = 559 and total assets = 1,147. Plug the figures step by step:

$$
DR = \frac{\text{debt}}{\text{total assets}}
$$

$$
DR = \frac{559}{1,147}
$$

$$
DR = 48.7\%
$$

Claimed: exceeds 71.6%. Actual 48.7%.

Reading the arithmetic against the claim: actual debt ratio 48.7% does not match ''exceeds 71.6%'' so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.1.050' AND tier = 'full';
