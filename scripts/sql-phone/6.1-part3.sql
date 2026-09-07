-- Update expanded explanations for 6.1-part3 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Liquidity From the Balance Sheet 51". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "Profit for the year increases equity through retained earnings, while a loss decreases equity."

The statement is true.', 'TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 160 + 115 + 94 = 369
$$

$$
CL = 85 + 66 = 151
$$

$$
\text{Current ratio} = \frac{369}{151} = 2.4437
$$

Claimed: exceeds 1.67. Actual 2.44.

Reading the arithmetic against the claim: actual current ratio 2.44 versus ''exceeds 1.67'' so the statement holds.

The statement is true.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 369 and current liabilities total 151:

$$
WC = CA - CL
$$

$$
CA = 369, \quad CL = 151
$$

$$
WC = 369 - 151 = 218
$$

The statement cites working capital of €218 thousand and that it is positive. Calculated WC is 218, which is positive.

Reading the arithmetic against the claim: WC = 218 is positive as claimed so the statement holds.

The statement is true.', 'TRUE — The acid-test (quick) ratio is a stricter liquidity test: inventory is removed from current assets before dividing by current liabilities.

Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = 369, \quad \text{Inventory} = 160, \quad CL = 151
$$

$$
CA - \text{Inventory} = 369 - 160 = 209
$$

$$
\text{Acid-test} = \frac{209}{151} = 1.3841
$$

Threshold: more than 0.67. Actual 1.38.

Reading the arithmetic against the claim: acid-test 1.38 is more than 0.67 so the statement holds.

The statement is true.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 160 + 115 + 94 = 369
$$

$$
CL = 85 + 66 = 151
$$

$$
\text{Current ratio} = \frac{369}{151} = 2.4437
$$

Claimed: is below 0.62. Actual 2.44.

Reading the arithmetic against the claim: actual current ratio 2.44 versus ''is below 0.62'' so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.1.051' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Gearing From Comparative Figures 52". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "Profit for the year increases equity through retained earnings, while a loss decreases equity."

The statement is true.', 'TRUE — Non-current liabilities are the long-term funding claims; here they are long-term bank loan plus bonds payable, compared with total equity.

Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\text{NCL} = 446 + 52 = 498
$$

$$
\text{Equity} = 364
$$

$$
\frac{498}{364} = 136.8\%
$$

Threshold: more than 63.6% in Year 1. Actual 136.8%.

Reading the arithmetic against the claim: Year 1 NCL/equity is 136.8%, which is consistent with ''more than 63.6%'' so the statement holds.

The statement is true.', 'FALSE — Use the case figures for Total equity and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total equity}_{\text{Y1}} = 364, \quad
\text{Total equity}_{\text{Y2}} = 419
$$

$$
\frac{419 - 364}{364} = 15.1\%
$$

$$
15.1\% \le  23.7\%
$$

The actual growth is 15.1%, which is not more than the claimed 23.7%.

The statement is false.', 'TRUE — This is a composition claim: express Non-current assets as a percentage of total assets in Year 2.

Name the identity in words: Non-current assets share of total assets in Year 2 = Non-current assets ÷ total assets in Year 2.

From the extract, Non-current assets = 821 and total assets in Year 2 = 1,160. Plug the figures step by step:

$$
Share = \frac{\text{Non-current assets}}{\text{total assets in Year 2}}
$$

$$
Share = \frac{821}{1,160}
$$

$$
Share = 70.8\%
$$

Threshold: more than 56.2%. Actual 70.8%.

Reading the arithmetic against the claim: actual share 70.8% matches ''more than 56.2%'' so the statement holds.

The statement is true.', 'TRUE — Current liabilities are due within one year or the operating cycle.

Trade payables to suppliers are routinely short-term; the euro amount does not change that rule.

Using the stem facts: "Trade payables of €148 thousand in Year 2 are correctly classified as a current liability, since suppliers are normally expected to be paid within one year."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.'] WHERE case_id = 'CASE 6.1.052' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Two-Year Balance Sheet Review 53". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "Equity usually does not have to be repaid on a fixed schedule, helps the business stay relatively independent from creditors, and cushions losses."

The statement is true.', 'TRUE — Non-current liabilities are the long-term funding claims; here they are long-term bank loan plus bonds payable, compared with total equity.

Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\text{NCL} = 208 + 79 = 287
$$

$$
\text{Equity} = 784
$$

$$
\frac{287}{784} = 36.6\%
$$

Threshold: less than 60.5% in Year 2. Actual 36.6%.

Reading the arithmetic against the claim: Year 2 NCL/equity is 36.6%, which is consistent with ''less than 60.5%'' so the statement holds.

The statement is true.', 'TRUE — Long-term financing is equity plus non-current liabilities; the claim compares that pool with non-current assets.

Name the identity in words: surplus = (equity + non-current liabilities) ÷ non-current assets − 1.

$$
\text{Equity} + \text{NCL} = 705 + 250 = 955
$$

$$
\text{NCA} = 634
$$

$$
\frac{955}{634} - 1 = 50.6\%
$$

Threshold: more than 23.1%. Actual surplus 50.6%.

Reading the arithmetic against the claim: the surplus is 50.6%, which exceeds 23.1% so the statement holds.

The statement is true.', 'TRUE — Current liabilities are due within one year or the operating cycle.

Trade payables to suppliers are routinely short-term; the euro amount does not change that rule.

Using the stem facts: "Trade payables of €73 thousand in Year 2 are correctly classified as a current liability, since suppliers are normally expected to be paid within one year."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Two-Year Balance Sheet Review 53". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "Owner''s equity is the residual claim remaining after liabilities are deducted from assets, and it is the portion of assets not financed by debt."

The statement is true.'] WHERE case_id = 'CASE 6.1.053' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Liquidity From the Balance Sheet 54". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Current liabilities are debts that must be repaid after more than one year."

The statement is false.', 'TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 209 + 100 + 80 = 389
$$

$$
CL = 85 + 49 = 134
$$

$$
\text{Current ratio} = \frac{389}{134} = 2.9030
$$

Claimed: exceeds 1.76. Actual 2.90.

Reading the arithmetic against the claim: actual current ratio 2.90 versus ''exceeds 1.76'' so the statement holds.

The statement is true.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 389 and current liabilities total 134:

$$
WC = CA - CL
$$

$$
CA = 389, \quad CL = 134
$$

$$
WC = 389 - 134 = 255
$$

The statement cites working capital of €255 thousand and that it is positive. Calculated WC is 255, which is positive.

Reading the arithmetic against the claim: WC = 255 is positive as claimed so the statement holds.

The statement is true.', 'TRUE — The acid-test (quick) ratio is a stricter liquidity test: inventory is removed from current assets before dividing by current liabilities.

Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = 389, \quad \text{Inventory} = 209, \quad CL = 134
$$

$$
CA - \text{Inventory} = 389 - 209 = 180
$$

$$
\text{Acid-test} = \frac{180}{134} = 1.3433
$$

Threshold: more than 1.09. Actual 1.34.

Reading the arithmetic against the claim: acid-test 1.34 is more than 1.09 so the statement holds.

The statement is true.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 209 + 100 + 80 = 389
$$

$$
CL = 85 + 49 = 134
$$

$$
\text{Current ratio} = \frac{389}{134} = 2.9030
$$

Claimed: is below 0.61. Actual 2.90.

Reading the arithmetic against the claim: actual current ratio 2.90 versus ''is below 0.61'' so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.1.054' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Equity as a Buffer for Creditors". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "When a printing press is acquired to be resold rather than used, it belongs among current assets as inventory."

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A printing press bought by a business to support its own daily operations is a tangible fixed asset. The reason given — it delivers benefit across several accounting periods. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Inventory is stock held for sale, not every physical item owned. Equipment used in operations is a non-current tangible asset.

Using the stem facts: "A laptop computer used by an operating business is classified as inventory because inventory can include any physical equipment a business owns."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Resale intent makes dealer stock inventory (current). Being a business does not turn resale stock into a non-current operating asset.

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Equity as a Buffer for Creditors". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A printing press that a dealer displays for sale is not a fixed asset of that dealer."

The statement is true.'] WHERE case_id = 'CASE 6.1.055' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Operating use beyond one year meets the non-current tangible (fixed) asset definition.

Using the stem facts: "A conveyor belt kept in service by an operating business for more than one year is classified as a non-current tangible asset."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Classification follows how the reporting entity holds the item (use vs resale), not physical form alone.

Using the stem facts: "The same laptop computer must always be classified identically on every balance sheet regardless of how it is held."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Price affects measurement; classification between fixed asset and inventory follows intended use.

Using the stem facts: "Classifying a laptop computer as a non-current asset depends mainly on its purchase price rather than on management''s intended use."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Why Equity Does Not Require Repayment". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A conveyor belt held by a dealer for resale to customers is classified as inventory, a current asset, rather than a non-current asset."

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Resale intent puts the item in inventory from acquisition; time unsold does not make it non-current.

Using the stem facts: "A laptop computer acquired for resale still counts among non-current assets as long as it remains unsold for several months."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.'] WHERE case_id = 'CASE 6.1.056' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Liquidity From the Balance Sheet 57". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Owner''s equity is the portion of assets financed by bank loans and trade creditors."

The statement is false.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 222 + 143 + 89 = 454
$$

$$
CL = 205 + 72 = 277
$$

$$
\text{Current ratio} = \frac{454}{277} = 1.6390
$$

Claimed: exceeds 1.74. Actual 1.64.

Reading the arithmetic against the claim: actual current ratio 1.64 versus ''exceeds 1.74'' so the statement does not hold.

The statement is false.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 222 + 143 + 89 = 454
$$

$$
CL = 205 + 72 = 277
$$

$$
\text{Current ratio} = \frac{454}{277} = 1.6390
$$

Claimed: is below 1.03. Actual 1.64.

Reading the arithmetic against the claim: actual current ratio 1.64 versus ''is below 1.03'' so the statement does not hold.

The statement is false.', 'TRUE — The acid-test (quick) ratio is a stricter liquidity test: inventory is removed from current assets before dividing by current liabilities.

Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = 454, \quad \text{Inventory} = 222, \quad CL = 277
$$

$$
CA - \text{Inventory} = 454 - 222 = 232
$$

$$
\text{Acid-test} = \frac{232}{277} = 0.8375
$$

Threshold: more than 0.78. Actual 0.84.

Reading the arithmetic against the claim: acid-test 0.84 is more than 0.78 so the statement holds.

The statement is true.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 668 and total assets = 1,183. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{668}{1,183}
$$

$$
ER = 56.5\%
$$

Claimed: is below 40.1%. Actual 56.5%.

Reading the arithmetic against the claim: actual equity ratio 56.5% does not match ''is below 40.1%'' so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.1.057' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: Buying software with cash always increases total assets. The reason — a new asset is added without reducing any other asset. — does not support that label under the chapter definitions. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — Use the case figures for Total equity and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total equity}_{\text{Y1}} = 289, \quad
\text{Total equity}_{\text{Y2}} = 383
$$

$$
\frac{383 - 289}{289} = 32.5\%
$$

$$
32.5\% > 21.4\%
$$

The actual growth is 32.5%, which is more than the claimed 21.4%.

The statement is true.', 'TRUE — Use the case figures for Total assets and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total assets}_{\text{Y1}} = 995, \quad
\text{Total assets}_{\text{Y2}} = 1,149
$$

$$
\frac{1,149 - 995}{995} = 15.5\%
$$

$$
15.5\% > 9\%
$$

The actual growth is 15.5%, which is more than the claimed 9%.

The statement is true.', 'FALSE — Use the case figures for Inventory and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Inventory}_{\text{Y1}} = 157, \quad
\text{Inventory}_{\text{Y2}} = 187
$$

$$
\frac{187 - 157}{157} = 19.1\%
$$

$$
19.1\% \le  30.4\%
$$

The actual growth is 19.1%, which is not more than the claimed 30.4%.

The statement is false.', 'FALSE — Use the case figures for Trade payables and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Trade payables}_{\text{Y1}} = 212, \quad
\text{Trade payables}_{\text{Y2}} = 223
$$

$$
\frac{223 - 212}{212} = 5.2\%
$$

$$
5.2\% \le  16.3\%
$$

The actual growth is 5.2%, which is not more than the claimed 16.3%.

The statement is false.'] WHERE case_id = 'CASE 6.1.058' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Two-Year Balance Sheet Review 59". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Owner''s equity is the portion of assets financed by bank loans and trade creditors."

The statement is false.', 'FALSE — Use the case figures for Total equity and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total equity}_{\text{Y1}} = 393, \quad
\text{Total equity}_{\text{Y2}} = 436
$$

$$
\frac{436 - 393}{393} = 10.9\%
$$

$$
10.9\% \le  22.8\%
$$

The actual growth is 10.9%, which is not more than the claimed 22.8%.

The statement is false.', 'TRUE — Use the case figures for Trade payables and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Trade payables}_{\text{Y1}} = 193, \quad
\text{Trade payables}_{\text{Y2}} = 221
$$

$$
\frac{221 - 193}{193} = 14.5\%
$$

$$
14.5\% > 10.4\%
$$

The actual growth is 14.5%, which is more than the claimed 10.4%.

The statement is true.', 'FALSE — Use the case figures for Total assets and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total assets}_{\text{Y1}} = 1,064, \quad
\text{Total assets}_{\text{Y2}} = 1,168
$$

$$
\frac{1,168 - 1,064}{1,064} = 9.8\%
$$

$$
9.8\% \le  10.2\%
$$

The actual growth is 9.8%, which is not more than the claimed 10.2%.

The statement is false.', 'TRUE — Non-current liabilities are the long-term funding claims; here they are long-term bank loan plus bonds payable, compared with total equity.

Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\text{NCL} = 339 + 55 = 394
$$

$$
\text{Equity} = 393
$$

$$
\frac{394}{393} = 100.3\%
$$

Threshold: more than 78.1% in Year 1. Actual 100.3%.

Reading the arithmetic against the claim: Year 1 NCL/equity is 100.3%, which is consistent with ''more than 78.1%'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.059' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Wear is handled by depreciating a fixed asset. Daily operating use supports non-current classification, not inventory.

Using the stem facts: "A laptop computer used daily in a business''s own operations should be recorded as inventory because it wears out over time."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

After sale, the buyer''s intent governs: use in operations → buyer''s non-current asset, not inventory.

Using the stem facts: "Once a dealer sells a laptop computer from its stock, the buyer must continue to record it as inventory."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Intended use decides the line: operations → non-current; held for sale → inventory.

Using the stem facts: "The same conveyor belt may be a non-current asset for one business and inventory for another, depending on whether it is used or held for sale."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Inventory is stock held for sale, not every physical item owned. Equipment used in operations is a non-current tangible asset.

Using the stem facts: "A refrigerated van used by an operating business is classified as inventory because inventory can include any physical equipment a business owns."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Resale intent makes dealer stock inventory (current). Being a business does not turn resale stock into a non-current operating asset.

The statement is false.'] WHERE case_id = 'CASE 6.1.060' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Non-current assets are held for use beyond one accounting period.

Useful life beyond one year plus operating intent (not ordinary resale) define the category.

Using the stem facts: "Non-current assets normally have a useful life of more than one year and are intended to be used in the business for longer than one year."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 83 + 165 + 85 = 333
$$

$$
CL = 61 + 27 = 88
$$

$$
\text{Current ratio} = \frac{333}{88} = 3.7841
$$

Claimed: exceeds 1.88. Actual 3.78.

Reading the arithmetic against the claim: actual current ratio 3.78 versus ''exceeds 1.88'' so the statement holds.

The statement is true.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 333 and current liabilities total 88:

$$
WC = CA - CL
$$

$$
CA = 333, \quad CL = 88
$$

$$
WC = 333 - 88 = 245
$$

The statement cites working capital of €245 thousand and that it is positive. Calculated WC is 245, which is positive.

Reading the arithmetic against the claim: WC = 245 is positive as claimed so the statement holds.

The statement is true.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 83 + 165 + 85 = 333
$$

$$
CL = 61 + 27 = 88
$$

$$
\text{Current ratio} = \frac{333}{88} = 3.7841
$$

Claimed: is below 1.11. Actual 3.78.

Reading the arithmetic against the claim: actual current ratio 3.78 versus ''is below 1.11'' so the statement does not hold.

The statement is false.', 'TRUE — The acid-test (quick) ratio is a stricter liquidity test: inventory is removed from current assets before dividing by current liabilities.

Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = 333, \quad \text{Inventory} = 83, \quad CL = 88
$$

$$
CA - \text{Inventory} = 333 - 83 = 250
$$

$$
\text{Acid-test} = \frac{250}{88} = 2.8409
$$

Threshold: more than 1.37. Actual 2.84.

Reading the arithmetic against the claim: acid-test 2.84 is more than 1.37 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.061' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Management intent to use in operations (typically >1 year) places the item among non-current assets.

Using the stem facts: "Classifying a conveyor belt as a non-current asset depends on management''s intention to use it in operations rather than to sell it quickly."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Classification follows how the reporting entity holds the item (use vs resale), not physical form alone.

Using the stem facts: "The same refrigerated van must always be classified identically on every balance sheet regardless of how it is held."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Price affects measurement; classification between fixed asset and inventory follows intended use.

Using the stem facts: "Classifying a refrigerated van as a non-current asset depends mainly on its purchase price rather than on management''s intended use."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Resale intent puts the item in inventory from acquisition; time unsold does not make it non-current.

Using the stem facts: "A refrigerated van acquired for resale still counts among non-current assets as long as it remains unsold for several months."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Wear is handled by depreciating a fixed asset. Daily operating use supports non-current classification, not inventory.

Using the stem facts: "A refrigerated van used daily in a business''s own operations should be recorded as inventory because it wears out over time."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.'] WHERE case_id = 'CASE 6.1.062' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Liquidity From the Balance Sheet 63". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Owner''s equity is the portion of assets financed by bank loans and trade creditors."

The statement is false.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 210 + 152 + 116 = 478
$$

$$
CL = 142 + 75 = 217
$$

$$
\text{Current ratio} = \frac{478}{217} = 2.2028
$$

Claimed: is below 0.67. Actual 2.20.

Reading the arithmetic against the claim: actual current ratio 2.20 versus ''is below 0.67'' so the statement does not hold.

The statement is false.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 752 and total assets = 1,264. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{752}{1,264}
$$

$$
ER = 59.5\%
$$

Claimed: is below 21.2%. Actual 59.5%.

Reading the arithmetic against the claim: actual equity ratio 59.5% does not match ''is below 21.2%'' so the statement does not hold.

The statement is false.', 'TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 210 + 152 + 116 = 478
$$

$$
CL = 142 + 75 = 217
$$

$$
\text{Current ratio} = \frac{478}{217} = 2.2028
$$

Claimed: exceeds 1.17. Actual 2.20.

Reading the arithmetic against the claim: actual current ratio 2.20 versus ''exceeds 1.17'' so the statement holds.

The statement is true.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 478 and current liabilities total 217:

$$
WC = CA - CL
$$

$$
CA = 478, \quad CL = 217
$$

$$
WC = 478 - 217 = 261
$$

The statement cites working capital of €261 thousand and that it is positive. Calculated WC is 261, which is positive.

Reading the arithmetic against the claim: WC = 261 is positive as claimed so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.063' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Cash Purchases Versus Credit Purchases". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "When a conveyor belt is acquired to be resold rather than used, it belongs among current assets as inventory."

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

After sale, the buyer''s intent governs: use in operations → buyer''s non-current asset, not inventory.

Using the stem facts: "Once a dealer sells a refrigerated van from its stock, the buyer must continue to record it as inventory."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A conveyor belt bought by a business to support its own daily operations is a tangible fixed asset. The reason given — it delivers benefit across several accounting periods. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Cash Purchases Versus Credit Purchases". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A conveyor belt that a dealer displays for sale is not a fixed asset of that dealer."

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: An operating licence lacks physical substance but is classified as a non-current intangible asset. The reason given — it provides expected long-term benefit. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.'] WHERE case_id = 'CASE 6.1.064' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Inventory is stock held for sale, not every physical item owned. Equipment used in operations is a non-current tangible asset.

Using the stem facts: "A woodworking lathe used by an operating business is classified as inventory because inventory can include any physical equipment a business owns."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: Although an operating licence cannot be touched, it appears among non-current assets rather than current assets. The reason given — of its long-term value. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Reclassifying Assets by Intended Use". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "An operating licence is recorded as an intangible non-current asset alongside tangible assets such as buildings and machinery."

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Resale intent makes dealer stock inventory (current). Being a business does not turn resale stock into a non-current operating asset.

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Reclassifying Assets by Intended Use". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "The absence of physical form does not prevent an operating licence from being classified as a non-current asset."

The statement is true.'] WHERE case_id = 'CASE 6.1.065' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Classification follows how the reporting entity holds the item (use vs resale), not physical form alone.

Using the stem facts: "The same woodworking lathe must always be classified identically on every balance sheet regardless of how it is held."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Dealer Stock Versus Operating Assets". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "An operating licence acquired to protect or support a business''s operations over several years is grouped with intangible non-current assets."

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Price affects measurement; classification between fixed asset and inventory follows intended use.

Using the stem facts: "Classifying a woodworking lathe as a non-current asset depends mainly on its purchase price rather than on management''s intended use."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Resale intent puts the item in inventory from acquisition; time unsold does not make it non-current.

Using the stem facts: "A woodworking lathe acquired for resale still counts among non-current assets as long as it remains unsold for several months."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: An operating licence is not classified as a current asset. The reason given — it is not expected to convert into cash within the normal operating cycle. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.'] WHERE case_id = 'CASE 6.1.066' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Wear is handled by depreciating a fixed asset. Daily operating use supports non-current classification, not inventory.

Using the stem facts: "A woodworking lathe used daily in a business''s own operations should be recorded as inventory because it wears out over time."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A brand name lacks physical substance but is classified as a non-current intangible asset. The reason given — it provides expected long-term benefit. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

After sale, the buyer''s intent governs: use in operations → buyer''s non-current asset, not inventory.

Using the stem facts: "Once a dealer sells a woodworking lathe from its stock, the buyer must continue to record it as inventory."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: Although a brand name cannot be touched, it appears among non-current assets rather than current assets. The reason given — of its long-term value. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Inventory is stock held for sale, not every physical item owned. Equipment used in operations is a non-current tangible asset.

Using the stem facts: "An espresso machine used by an operating business is classified as inventory because inventory can include any physical equipment a business owns."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.'] WHERE case_id = 'CASE 6.1.067' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Two-Year Balance Sheet Review 68". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Long-term assets should preferably be financed only with short-term trade credit."

The statement is false.', 'TRUE — Non-current liabilities are the long-term funding claims; here they are long-term bank loan plus bonds payable, compared with total equity.

Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\text{NCL} = 322 + 76 = 398
$$

$$
\text{Equity} = 570
$$

$$
\frac{398}{570} = 69.8\%
$$

Threshold: more than 47.7% in Year 1. Actual 69.8%.

Reading the arithmetic against the claim: Year 1 NCL/equity is 69.8%, which is consistent with ''more than 47.7%'' so the statement holds.

The statement is true.', 'FALSE — Use the case figures for Total equity and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total equity}_{\text{Y1}} = 570, \quad
\text{Total equity}_{\text{Y2}} = 610
$$

$$
\frac{610 - 570}{570} = 7.0\%
$$

$$
7.0\% \le  24\%
$$

The actual growth is 7.0%, which is not more than the claimed 24%.

The statement is false.', 'FALSE — Use the case figures for Total assets and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total assets}_{\text{Y1}} = 1,104, \quad
\text{Total assets}_{\text{Y2}} = 1,175
$$

$$
\frac{1,175 - 1,104}{1,104} = 6.4\%
$$

$$
6.4\% \le  9.5\%
$$

The actual growth is 6.4%, which is not more than the claimed 9.5%.

The statement is false.', 'FALSE — Use the case figures for Inventory and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Inventory}_{\text{Y1}} = 231, \quad
\text{Inventory}_{\text{Y2}} = 256
$$

$$
\frac{256 - 231}{231} = 10.8\%
$$

$$
10.8\% \le  32.1\%
$$

The actual growth is 10.8%, which is not more than the claimed 32.1%.

The statement is false.'] WHERE case_id = 'CASE 6.1.068' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: Buying software with cash always increases total assets. The reason — a new asset is added without reducing any other asset. — does not support that label under the chapter definitions. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — Use the case figures for Total equity and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total equity}_{\text{Y1}} = 487, \quad
\text{Total equity}_{\text{Y2}} = 536
$$

$$
\frac{536 - 487}{487} = 10.1\%
$$

$$
10.1\% \le  16\%
$$

The actual growth is 10.1%, which is not more than the claimed 16%.

The statement is false.', 'TRUE — Non-current liabilities are the long-term funding claims; here they are long-term bank loan plus bonds payable, compared with total equity.

Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\text{NCL} = 250 + 56 = 306
$$

$$
\text{Equity} = 536
$$

$$
\frac{306}{536} = 57.1\%
$$

Threshold: less than 103.8% in Year 2. Actual 57.1%.

Reading the arithmetic against the claim: Year 2 NCL/equity is 57.1%, which is consistent with ''less than 103.8%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Non-current assets as a percentage of total assets in Year 2.

Name the identity in words: Non-current assets share of total assets in Year 2 = Non-current assets ÷ total assets in Year 2.

From the extract, Non-current assets = 745 and total assets in Year 2 = 1,177. Plug the figures step by step:

$$
Share = \frac{\text{Non-current assets}}{\text{total assets in Year 2}}
$$

$$
Share = \frac{745}{1,177}
$$

$$
Share = 63.3\%
$$

Threshold: more than 61.9%. Actual 63.3%.

Reading the arithmetic against the claim: actual share 63.3% matches ''more than 61.9%'' so the statement holds.

The statement is true.', 'TRUE — This is the Year 2 current ratio read as coverage of current liabilities.

Name the identity in words: coverage = current assets ÷ current liabilities.

$$
\frac{432}{335} = 1.2896
$$

Threshold: less than 1.94. Actual 1.29.

Reading the arithmetic against the claim: actual coverage 1.29 is less than 1.94 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.069' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Resale intent makes dealer stock inventory (current). Being a business does not turn resale stock into a non-current operating asset.

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Settlement Timing for Liabilities". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A brand name is recorded as an intangible non-current asset alongside tangible assets such as buildings and machinery."

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Settlement Timing for Liabilities". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "The absence of physical form does not prevent a brand name from being classified as a non-current asset."

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Classification follows how the reporting entity holds the item (use vs resale), not physical form alone.

Using the stem facts: "The same espresso machine must always be classified identically on every balance sheet regardless of how it is held."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Settlement Timing for Liabilities". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A brand name acquired to protect or support a business''s operations over several years is grouped with intangible non-current assets."

The statement is true.'] WHERE case_id = 'CASE 6.1.070' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: Buying software with cash always increases total assets. The reason — a new asset is added without reducing any other asset. — does not support that label under the chapter definitions. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 421 and current liabilities total 254:

$$
WC = CA - CL
$$

$$
CA = 421, \quad CL = 254
$$

$$
WC = 421 - 254 = 167
$$

The statement cites working capital of €167 thousand and that it is positive. Calculated WC is 167, which is positive.

Reading the arithmetic against the claim: WC = 167 is positive as claimed so the statement holds.

The statement is true.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 183 + 162 + 76 = 421
$$

$$
CL = 178 + 76 = 254
$$

$$
\text{Current ratio} = \frac{421}{254} = 1.6575
$$

Claimed: exceeds 1.66. Actual 1.66.

Reading the arithmetic against the claim: actual current ratio 1.66 versus ''exceeds 1.66'' so the statement does not hold.

The statement is false.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 183 + 162 + 76 = 421
$$

$$
CL = 178 + 76 = 254
$$

$$
\text{Current ratio} = \frac{421}{254} = 1.6575
$$

Claimed: is below 1.25. Actual 1.66.

Reading the arithmetic against the claim: actual current ratio 1.66 versus ''is below 1.25'' so the statement does not hold.

The statement is false.', 'FALSE — The acid-test (quick) ratio is a stricter liquidity test: inventory is removed from current assets before dividing by current liabilities.

Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = 421, \quad \text{Inventory} = 183, \quad CL = 254
$$

$$
CA - \text{Inventory} = 421 - 183 = 238
$$

$$
\text{Acid-test} = \frac{238}{254} = 0.9370
$$

Threshold: more than 1.11. Actual 0.94.

Reading the arithmetic against the claim: acid-test 0.94 is not more than 1.11 so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.1.071' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Liquidity From the Balance Sheet 72". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Owner''s equity is the portion of assets financed by bank loans and trade creditors."

The statement is false.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 140 + 120 + 73 = 333
$$

$$
CL = 242 + 73 = 315
$$

$$
\text{Current ratio} = \frac{333}{315} = 1.0571
$$

Claimed: is below 0.65. Actual 1.06.

Reading the arithmetic against the claim: actual current ratio 1.06 versus ''is below 0.65'' so the statement does not hold.

The statement is false.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 333 and current liabilities total 315:

$$
WC = CA - CL
$$

$$
CA = 333, \quad CL = 315
$$

$$
WC = 333 - 315 = 18
$$

The statement cites working capital of €18 thousand and that it is positive. Calculated WC is 18, which is positive.

Reading the arithmetic against the claim: WC = 18 is positive as claimed so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Inventory as a percentage of current assets.

Name the identity in words: Inventory share of current assets = Inventory ÷ current assets.

From the extract, Inventory = 140 and current assets = 333. Plug the figures step by step:

$$
Share = \frac{\text{Inventory}}{\text{current assets}}
$$

$$
Share = \frac{140}{333}
$$

$$
Share = 42.0\%
$$

Threshold: more than 32.6%. Actual 42.0%.

Reading the arithmetic against the claim: actual share 42.0% matches ''more than 32.6%'' so the statement holds.

The statement is true.', 'FALSE — The acid-test (quick) ratio is a stricter liquidity test: inventory is removed from current assets before dividing by current liabilities.

Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = 333, \quad \text{Inventory} = 140, \quad CL = 315
$$

$$
CA - \text{Inventory} = 333 - 140 = 193
$$

$$
\text{Acid-test} = \frac{193}{315} = 0.6127
$$

Threshold: more than 0.72. Actual 0.61.

Reading the arithmetic against the claim: acid-test 0.61 is not more than 0.72 so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.1.072' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A brand name is not classified as a current asset. The reason given — it is not expected to convert into cash within the normal operating cycle. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A registered design lacks physical substance but is classified as a non-current intangible asset. The reason given — it provides expected long-term benefit. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: Although a registered design cannot be touched, it appears among non-current assets rather than current assets. The reason given — of its long-term value. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Partial Repayment and Reclassification". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A registered design is recorded as an intangible non-current asset alongside tangible assets such as buildings and machinery."

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Partial Repayment and Reclassification". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "The absence of physical form does not prevent a registered design from being classified as a non-current asset."

The statement is true.'] WHERE case_id = 'CASE 6.1.073' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: Buying software with cash always increases total assets. The reason — a new asset is added without reducing any other asset. — does not support that label under the chapter definitions. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — Use the case figures for Cash and cash equivalents and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Cash and cash equivalents}_{\text{Y1}} = 108, \quad
\text{Cash and cash equivalents}_{\text{Y2}} = 101
$$

$$
\frac{101 - 108}{108} = -6.5\%
$$

$$
6.5\% > 5.4\%
$$

The actual decline is 6.5%, which is more than the claimed 5.4%.

The statement is true.', 'TRUE — Non-current liabilities are the long-term funding claims; here they are long-term bank loan plus bonds payable, compared with total equity.

Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\text{NCL} = 214 + 87 = 301
$$

$$
\text{Equity} = 679
$$

$$
\frac{301}{679} = 44.3\%
$$

Threshold: less than 96.3% in Year 2. Actual 44.3%.

Reading the arithmetic against the claim: Year 2 NCL/equity is 44.3%, which is consistent with ''less than 96.3%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Non-current assets as a percentage of total assets in Year 2.

Name the identity in words: Non-current assets share of total assets in Year 2 = Non-current assets ÷ total assets in Year 2.

From the extract, Non-current assets = 709 and total assets in Year 2 = 1,140. Plug the figures step by step:

$$
Share = \frac{\text{Non-current assets}}{\text{total assets in Year 2}}
$$

$$
Share = \frac{709}{1,140}
$$

$$
Share = 62.2\%
$$

Threshold: more than 57.1%. Actual 62.2%.

Reading the arithmetic against the claim: actual share 62.2% matches ''more than 57.1%'' so the statement holds.

The statement is true.', 'TRUE — Long-term financing is equity plus non-current liabilities; the claim compares that pool with non-current assets.

Name the identity in words: surplus = (equity + non-current liabilities) ÷ non-current assets − 1.

$$
\text{Equity} + \text{NCL} = 685 + 280 = 965
$$

$$
\text{NCA} = 707
$$

$$
\frac{965}{707} - 1 = 36.5\%
$$

Threshold: more than 27.8%. Actual surplus 36.5%.

Reading the arithmetic against the claim: the surplus is 36.5%, which exceeds 27.8% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.074' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Equity Ratio and Lender Risk". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A registered design acquired to protect or support a business''s operations over several years is grouped with intangible non-current assets."

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A registered design is not classified as a current asset. The reason given — it is not expected to convert into cash within the normal operating cycle. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A development patent lacks physical substance but is classified as a non-current intangible asset. The reason given — it provides expected long-term benefit. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Price affects measurement; classification between fixed asset and inventory follows intended use.

Using the stem facts: "Classifying an espresso machine as a non-current asset depends mainly on its purchase price rather than on management''s intended use."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: Although a development patent cannot be touched, it appears among non-current assets rather than current assets. The reason given — of its long-term value. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.'] WHERE case_id = 'CASE 6.1.075' AND tier = 'full';
