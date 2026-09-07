-- Update expanded explanations for 6.1-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Inventory is stock held for sale, not every physical item owned. Equipment used in operations is a non-current tangible asset.

Using the stem facts: "A pallet loader used by an operating business is classified as inventory because inventory can include any physical equipment a business owns."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Resale intent makes dealer stock inventory (current). Being a business does not turn resale stock into a non-current operating asset.

The statement is false.', 'TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Operating use beyond one year meets the non-current tangible (fixed) asset definition.

Using the stem facts: "A pallet loader kept in service by an operating business for more than one year is classified as a non-current tangible asset."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Classification follows how the reporting entity holds the item (use vs resale), not physical form alone.

Using the stem facts: "The same pallet loader must always be classified identically on every balance sheet regardless of how it is held."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Intended use decides the line: operations → non-current; held for sale → inventory.

Using the stem facts: "The same pallet loader may be a non-current asset for one business and inventory for another, depending on whether it is used or held for sale."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.'] WHERE case_id = 'CASE 6.1.001' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Price affects measurement; classification between fixed asset and inventory follows intended use.

Using the stem facts: "Classifying a pallet loader as a non-current asset depends mainly on its purchase price rather than on management''s intended use."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Management intent to use in operations (typically >1 year) places the item among non-current assets.

Using the stem facts: "Classifying a pallet loader as a non-current asset depends on management''s intention to use it in operations rather than to sell it quickly."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Resale intent puts the item in inventory from acquisition; time unsold does not make it non-current.

Using the stem facts: "A pallet loader acquired for resale still counts among non-current assets as long as it remains unsold for several months."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Wear is handled by depreciating a fixed asset. Daily operating use supports non-current classification, not inventory.

Using the stem facts: "A pallet loader used daily in a business''s own operations should be recorded as inventory because it wears out over time."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

After sale, the buyer''s intent governs: use in operations → buyer''s non-current asset, not inventory.

Using the stem facts: "Once a dealer sells a pallet loader from its stock, the buyer must continue to record it as inventory."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.'] WHERE case_id = 'CASE 6.1.002' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Owner''s Equity as a Residual Claim". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "When a pallet loader is acquired to be resold rather than used, it belongs among current assets as inventory."

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A pallet loader bought by a business to support its own daily operations is a tangible fixed asset. The reason given — it delivers benefit across several accounting periods. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Owner''s Equity as a Residual Claim". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A pallet loader that a dealer displays for sale is not a fixed asset of that dealer."

The statement is true.', 'TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Operating use beyond one year meets the non-current tangible (fixed) asset definition.

Using the stem facts: "An industrial dishwasher kept in service by an operating business for more than one year is classified as a non-current tangible asset."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Owner''s Equity as a Residual Claim". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "An industrial dishwasher held by a dealer for resale to customers is classified as inventory, a current asset, rather than a non-current asset."

The statement is true.'] WHERE case_id = 'CASE 6.1.003' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Intended use decides the line: operations → non-current; held for sale → inventory.

Using the stem facts: "The same industrial dishwasher may be a non-current asset for one business and inventory for another, depending on whether it is used or held for sale."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Inventory is stock held for sale, not every physical item owned. Equipment used in operations is a non-current tangible asset.

Using the stem facts: "An industrial dishwasher used by an operating business is classified as inventory because inventory can include any physical equipment a business owns."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Resale intent makes dealer stock inventory (current). Being a business does not turn resale stock into a non-current operating asset.

The statement is false.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Classification follows how the reporting entity holds the item (use vs resale), not physical form alone.

Using the stem facts: "The same industrial dishwasher must always be classified identically on every balance sheet regardless of how it is held."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Management intent to use in operations (typically >1 year) places the item among non-current assets.

Using the stem facts: "Classifying an industrial dishwasher as a non-current asset depends on management''s intention to use it in operations rather than to sell it quickly."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.'] WHERE case_id = 'CASE 6.1.004' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Non-current assets are held for use beyond one accounting period.

Useful life beyond one year plus operating intent (not ordinary resale) define the category.

Using the stem facts: "Non-current assets normally have a useful life of more than one year and are intended to be used in the business for longer than one year."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — Non-current liabilities are the long-term funding claims; here they are long-term bank loan plus bonds payable, compared with total equity.

Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\text{NCL} = 220 + 63 = 283
$$

$$
\text{Equity} = 839
$$

$$
\frac{283}{839} = 33.7\%
$$

Threshold: less than 56.8% in Year 2. Actual 33.7%.

Reading the arithmetic against the claim: Year 2 NCL/equity is 33.7%, which is consistent with ''less than 56.8%'' so the statement holds.

The statement is true.', 'TRUE — Long-term financing is equity plus non-current liabilities; the claim compares that pool with non-current assets.

Name the identity in words: surplus = (equity + non-current liabilities) ÷ non-current assets − 1.

$$
\text{Equity} + \text{NCL} = 761 + 267 = 1,028
$$

$$
\text{NCA} = 740
$$

$$
\frac{1,028}{740} - 1 = 38.9\%
$$

Threshold: more than 7.3%. Actual surplus 38.9%.

Reading the arithmetic against the claim: the surplus is 38.9%, which exceeds 7.3% so the statement holds.

The statement is true.', 'FALSE — Use the case figures for Total equity and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total equity}_{\text{Y1}} = 761, \quad
\text{Total equity}_{\text{Y2}} = 839
$$

$$
\frac{839 - 761}{761} = 10.2\%
$$

$$
10.2\% \le  24.5\%
$$

The actual growth is 10.2%, which is not more than the claimed 24.5%.

The statement is false.', 'FALSE — Use the case figures for Total assets and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total assets}_{\text{Y1}} = 1,181, \quad
\text{Total assets}_{\text{Y2}} = 1,279
$$

$$
\frac{1,279 - 1,181}{1,181} = 8.3\%
$$

$$
8.3\% \le  10\%
$$

The actual growth is 8.3%, which is not more than the claimed 10%.

The statement is false.'] WHERE case_id = 'CASE 6.1.005' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Comparative Balance Sheet Analysis 6". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "Equity usually does not have to be repaid on a fixed schedule, helps the business stay relatively independent from creditors, and cushions losses."

The statement is true.', 'FALSE — Use the case figures for Total equity and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total equity}_{\text{Y1}} = 399, \quad
\text{Total equity}_{\text{Y2}} = 407
$$

$$
\frac{407 - 399}{399} = 2.0\%
$$

$$
2.0\% \le  10.4\%
$$

The actual growth is 2.0%, which is not more than the claimed 10.4%.

The statement is false.', 'FALSE — Use the case figures for Total assets and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total assets}_{\text{Y1}} = 951, \quad
\text{Total assets}_{\text{Y2}} = 1,034
$$

$$
\frac{1,034 - 951}{951} = 8.7\%
$$

$$
8.7\% \le  21.8\%
$$

The actual growth is 8.7%, which is not more than the claimed 21.8%.

The statement is false.', 'FALSE — Use the case figures for Inventory and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Inventory}_{\text{Y1}} = 204, \quad
\text{Inventory}_{\text{Y2}} = 211
$$

$$
\frac{211 - 204}{204} = 3.4\%
$$

$$
3.4\% \le  21\%
$$

The actual growth is 3.4%, which is not more than the claimed 21%.

The statement is false.', 'FALSE — Use the case figures for Trade payables and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Trade payables}_{\text{Y1}} = 149, \quad
\text{Trade payables}_{\text{Y2}} = 160
$$

$$
\frac{160 - 149}{149} = 7.4\%
$$

$$
7.4\% \le  25.4\%
$$

The actual growth is 7.4%, which is not more than the claimed 25.4%.

The statement is false.'] WHERE case_id = 'CASE 6.1.006' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Asset Composition Chart 7". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "The balance sheet identity requires that total assets always equal the sum of total liabilities and total equity, which is why any increase in assets must be matched by an increase in either liabil…"

The statement is true.', 'TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 160 + 79 + 113 = 352
$$

$$
CL = 188 + 40 = 228
$$

$$
\text{Current ratio} = \frac{352}{228} = 1.5439
$$

Claimed: exceeds 1.54. Actual 1.54.

Reading the arithmetic against the claim: actual current ratio 1.54 versus ''exceeds 1.54'' so the statement holds.

The statement is true.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 160 + 79 + 113 = 352
$$

$$
CL = 188 + 40 = 228
$$

$$
\text{Current ratio} = \frac{352}{228} = 1.5439
$$

Claimed: is below 0.79. Actual 1.54.

Reading the arithmetic against the claim: actual current ratio 1.54 versus ''is below 0.79'' so the statement does not hold.

The statement is false.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 352 and current liabilities total 228:

$$
WC = CA - CL
$$

$$
CA = 352, \quad CL = 228
$$

$$
WC = 352 - 228 = 124
$$

The statement cites working capital of €124 thousand and that it is positive. Calculated WC is 124, which is positive.

Reading the arithmetic against the claim: WC = 124 is positive as claimed so the statement holds.

The statement is true.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 476 and total assets = 1,019. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{476}{1,019}
$$

$$
ER = 46.7\%
$$

Claimed: is below 41.5%. Actual 46.7%.

Reading the arithmetic against the claim: actual equity ratio 46.7% does not match ''is below 41.5%'' so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.1.007' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Defining Non-Current Assets". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "When an industrial dishwasher is acquired to be resold rather than used, it belongs among current assets as inventory."

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: An industrial dishwasher bought by a business to support its own daily operations is a tangible fixed asset. The reason given — it delivers benefit across several accounting periods. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Price affects measurement; classification between fixed asset and inventory follows intended use.

Using the stem facts: "Classifying an industrial dishwasher as a non-current asset depends mainly on its purchase price rather than on management''s intended use."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Defining Non-Current Assets". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "An industrial dishwasher that a dealer displays for sale is not a fixed asset of that dealer."

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Resale intent puts the item in inventory from acquisition; time unsold does not make it non-current.

Using the stem facts: "An industrial dishwasher acquired for resale still counts among non-current assets as long as it remains unsold for several months."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.'] WHERE case_id = 'CASE 6.1.008' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Liquidity From the Balance Sheet 9". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Owner''s equity is the portion of assets financed by bank loans and trade creditors."

The statement is false.', 'TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 201 + 163 + 42 = 406
$$

$$
CL = 101 + 58 = 159
$$

$$
\text{Current ratio} = \frac{406}{159} = 2.5535
$$

Claimed: exceeds 1.47. Actual 2.55.

Reading the arithmetic against the claim: actual current ratio 2.55 versus ''exceeds 1.47'' so the statement holds.

The statement is true.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 406 and current liabilities total 159:

$$
WC = CA - CL
$$

$$
CA = 406, \quad CL = 159
$$

$$
WC = 406 - 159 = 247
$$

The statement cites working capital of €247 thousand and that it is positive. Calculated WC is 247, which is positive.

Reading the arithmetic against the claim: WC = 247 is positive as claimed so the statement holds.

The statement is true.', 'TRUE — The acid-test (quick) ratio is a stricter liquidity test: inventory is removed from current assets before dividing by current liabilities.

Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = 406, \quad \text{Inventory} = 201, \quad CL = 159
$$

$$
CA - \text{Inventory} = 406 - 201 = 205
$$

$$
\text{Acid-test} = \frac{205}{159} = 1.2893
$$

Threshold: more than 0.64. Actual 1.29.

Reading the arithmetic against the claim: acid-test 1.29 is more than 0.64 so the statement holds.

The statement is true.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 201 + 163 + 42 = 406
$$

$$
CL = 101 + 58 = 159
$$

$$
\text{Current ratio} = \frac{406}{159} = 2.5535
$$

Claimed: is below 0.72. Actual 2.55.

Reading the arithmetic against the claim: actual current ratio 2.55 versus ''is below 0.72'' so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.1.009' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Wear is handled by depreciating a fixed asset. Daily operating use supports non-current classification, not inventory.

Using the stem facts: "An industrial dishwasher used daily in a business''s own operations should be recorded as inventory because it wears out over time."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

After sale, the buyer''s intent governs: use in operations → buyer''s non-current asset, not inventory.

Using the stem facts: "Once a dealer sells an industrial dishwasher from its stock, the buyer must continue to record it as inventory."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Operating use beyond one year meets the non-current tangible (fixed) asset definition.

Using the stem facts: "A warehouse crane kept in service by an operating business for more than one year is classified as a non-current tangible asset."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Inventory is stock held for sale, not every physical item owned. Equipment used in operations is a non-current tangible asset.

Using the stem facts: "A warehouse crane used by an operating business is classified as inventory because inventory can include any physical equipment a business owns."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Resale intent makes dealer stock inventory (current). Being a business does not turn resale stock into a non-current operating asset.

The statement is false.'] WHERE case_id = 'CASE 6.1.010' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Two-Year Balance Sheet Review 11". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Long-term assets should preferably be financed only with short-term trade credit."

The statement is false.', 'TRUE — Compare percentage growth in retained earnings with percentage growth in total equity over the same two years.

Name the identity in words: growth = (Year 2 − Year 1) ÷ Year 1 for each line.

$$
\text{RE}_{\text{Y1}} = 400, \quad \text{RE}_{\text{Y2}} = 426
$$

$$
\text{RE growth} = 6.5\%
$$

$$
\text{Equity}_{\text{Y1}} = 524, \quad \text{Equity}_{\text{Y2}} = 550
$$

$$
\text{Equity growth} = 5.0\%
$$

Reading the arithmetic against the claim: RE growth 6.5% exceeds equity growth 5.0% so the statement holds.

The statement is true.', 'FALSE — Use the case figures for Total equity and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total equity}_{\text{Y1}} = 524, \quad
\text{Total equity}_{\text{Y2}} = 550
$$

$$
\frac{550 - 524}{524} = 5.0\%
$$

$$
5.0\% \le  16.9\%
$$

The actual growth is 5.0%, which is not more than the claimed 16.9%.

The statement is false.', 'FALSE — Use the case figures for Total assets and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total assets}_{\text{Y1}} = 1,194, \quad
\text{Total assets}_{\text{Y2}} = 1,247
$$

$$
\frac{1,247 - 1,194}{1,194} = 4.4\%
$$

$$
4.4\% \le  16.5\%
$$

The actual growth is 4.4%, which is not more than the claimed 16.5%.

The statement is false.', 'FALSE — Use the case figures for Inventory and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Inventory}_{\text{Y1}} = 147, \quad
\text{Inventory}_{\text{Y2}} = 152
$$

$$
\frac{152 - 147}{147} = 3.4\%
$$

$$
3.4\% \le  21.8\%
$$

The actual growth is 3.4%, which is not more than the claimed 21.8%.

The statement is false.'] WHERE case_id = 'CASE 6.1.011' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Tangible Non-Current Assets". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A warehouse crane held by a dealer for resale to customers is classified as inventory, a current asset, rather than a non-current asset."

The statement is true.', 'TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Intended use decides the line: operations → non-current; held for sale → inventory.

Using the stem facts: "The same warehouse crane may be a non-current asset for one business and inventory for another, depending on whether it is used or held for sale."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Management intent to use in operations (typically >1 year) places the item among non-current assets.

Using the stem facts: "Classifying a warehouse crane as a non-current asset depends on management''s intention to use it in operations rather than to sell it quickly."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Tangible Non-Current Assets". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "When a warehouse crane is acquired to be resold rather than used, it belongs among current assets as inventory."

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Classification follows how the reporting entity holds the item (use vs resale), not physical form alone.

Using the stem facts: "The same warehouse crane must always be classified identically on every balance sheet regardless of how it is held."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.'] WHERE case_id = 'CASE 6.1.012' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Gearing From Comparative Figures 13". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "Owner''s equity is the residual claim remaining after liabilities are deducted from assets, and it is the portion of assets not financed by debt."

The statement is true.', 'TRUE — Non-current liabilities are the long-term funding claims; here they are long-term bank loan plus bonds payable, compared with total equity.

Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\text{NCL} = 395 + 84 = 479
$$

$$
\text{Equity} = 351
$$

$$
\frac{479}{351} = 136.5\%
$$

Threshold: more than 102.9% in Year 1. Actual 136.5%.

Reading the arithmetic against the claim: Year 1 NCL/equity is 136.5%, which is consistent with ''more than 102.9%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Non-current assets as a percentage of total assets in Year 2.

Name the identity in words: Non-current assets share of total assets in Year 2 = Non-current assets ÷ total assets in Year 2.

From the extract, Non-current assets = 819 and total assets in Year 2 = 1,203. Plug the figures step by step:

$$
Share = \frac{\text{Non-current assets}}{\text{total assets in Year 2}}
$$

$$
Share = \frac{819}{1,203}
$$

$$
Share = 68.1\%
$$

Threshold: more than 66%. Actual 68.1%.

Reading the arithmetic against the claim: actual share 68.1% matches ''more than 66%'' so the statement holds.

The statement is true.', 'FALSE — Use the case figures for Total equity and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total equity}_{\text{Y1}} = 351, \quad
\text{Total equity}_{\text{Y2}} = 381
$$

$$
\frac{381 - 351}{351} = 8.5\%
$$

$$
8.5\% \le  9.3\%
$$

The actual growth is 8.5%, which is not more than the claimed 9.3%.

The statement is false.', 'FALSE — Use the case figures for Inventory and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Inventory}_{\text{Y1}} = 147, \quad
\text{Inventory}_{\text{Y2}} = 162
$$

$$
\frac{162 - 147}{147} = 10.2\%
$$

$$
10.2\% \le  16.8\%
$$

The actual growth is 10.2%, which is not more than the claimed 16.8%.

The statement is false.'] WHERE case_id = 'CASE 6.1.013' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Balance Sheet Structure Review 14". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "Profit for the year increases equity through retained earnings, while a loss decreases equity."

The statement is true.', 'TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 228 + 95 + 81 = 404
$$

$$
CL = 148 + 33 = 181
$$

$$
\text{Current ratio} = \frac{404}{181} = 2.2320
$$

Claimed: exceeds 1.24. Actual 2.23.

Reading the arithmetic against the claim: actual current ratio 2.23 versus ''exceeds 1.24'' so the statement holds.

The statement is true.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 404 and current liabilities total 181:

$$
WC = CA - CL
$$

$$
CA = 404, \quad CL = 181
$$

$$
WC = 404 - 181 = 223
$$

The statement cites working capital of €223 thousand and that it is positive. Calculated WC is 223, which is positive.

Reading the arithmetic against the claim: WC = 223 is positive as claimed so the statement holds.

The statement is true.', 'TRUE — The acid-test (quick) ratio is a stricter liquidity test: inventory is removed from current assets before dividing by current liabilities.

Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = 404, \quad \text{Inventory} = 228, \quad CL = 181
$$

$$
CA - \text{Inventory} = 404 - 228 = 176
$$

$$
\text{Acid-test} = \frac{176}{181} = 0.9724
$$

Threshold: more than 0.82. Actual 0.97.

Reading the arithmetic against the claim: acid-test 0.97 is more than 0.82 so the statement holds.

The statement is true.', 'TRUE — The debt ratio places debt against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: debt ratio = debt ÷ total assets.

From the extract, debt = 598 and total assets = 1,127. Plug the figures step by step:

$$
DR = \frac{\text{debt}}{\text{total assets}}
$$

$$
DR = \frac{598}{1,127}
$$

$$
DR = 53.1\%
$$

Claimed: exceeds 53%. Actual 53.1%.

Reading the arithmetic against the claim: actual debt ratio 53.1% matches ''exceeds 53%'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.014' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Price affects measurement; classification between fixed asset and inventory follows intended use.

Using the stem facts: "Classifying a warehouse crane as a non-current asset depends mainly on its purchase price rather than on management''s intended use."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Resale intent puts the item in inventory from acquisition; time unsold does not make it non-current.

Using the stem facts: "A warehouse crane acquired for resale still counts among non-current assets as long as it remains unsold for several months."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Wear is handled by depreciating a fixed asset. Daily operating use supports non-current classification, not inventory.

Using the stem facts: "A warehouse crane used daily in a business''s own operations should be recorded as inventory because it wears out over time."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A warehouse crane bought by a business to support its own daily operations is a tangible fixed asset. The reason given — it delivers benefit across several accounting periods. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Intangible Non-Current Assets". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A warehouse crane that a dealer displays for sale is not a fixed asset of that dealer."

The statement is true.'] WHERE case_id = 'CASE 6.1.015' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

After sale, the buyer''s intent governs: use in operations → buyer''s non-current asset, not inventory.

Using the stem facts: "Once a dealer sells a warehouse crane from its stock, the buyer must continue to record it as inventory."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Operating use beyond one year meets the non-current tangible (fixed) asset definition.

Using the stem facts: "A delivery scooter kept in service by an operating business for more than one year is classified as a non-current tangible asset."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Inventory is stock held for sale, not every physical item owned. Equipment used in operations is a non-current tangible asset.

Using the stem facts: "A delivery scooter used by an operating business is classified as inventory because inventory can include any physical equipment a business owns."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Licences as Intangible Assets". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A delivery scooter held by a dealer for resale to customers is classified as inventory, a current asset, rather than a non-current asset."

The statement is true.', 'TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Intended use decides the line: operations → non-current; held for sale → inventory.

Using the stem facts: "The same delivery scooter may be a non-current asset for one business and inventory for another, depending on whether it is used or held for sale."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.'] WHERE case_id = 'CASE 6.1.016' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Balance Sheet Structure Review 17". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "The same physical item can be inventory for a dealer that holds it for sale and a non-current asset for a business that uses it in operations."

The statement is true.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 224 + 133 + 32 = 389
$$

$$
CL = 147 + 65 = 212
$$

$$
\text{Current ratio} = \frac{389}{212} = 1.8349
$$

Claimed: is below 0.76. Actual 1.83.

Reading the arithmetic against the claim: actual current ratio 1.83 versus ''is below 0.76'' so the statement does not hold.

The statement is false.', 'TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 224 + 133 + 32 = 389
$$

$$
CL = 147 + 65 = 212
$$

$$
\text{Current ratio} = \frac{389}{212} = 1.8349
$$

Claimed: exceeds 1.62. Actual 1.83.

Reading the arithmetic against the claim: actual current ratio 1.83 versus ''exceeds 1.62'' so the statement holds.

The statement is true.', 'FALSE — The acid-test (quick) ratio is a stricter liquidity test: inventory is removed from current assets before dividing by current liabilities.

Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = 389, \quad \text{Inventory} = 224, \quad CL = 212
$$

$$
CA - \text{Inventory} = 389 - 224 = 165
$$

$$
\text{Acid-test} = \frac{165}{212} = 0.7783
$$

Threshold: more than 1.23. Actual 0.78.

Reading the arithmetic against the claim: acid-test 0.78 is not more than 1.23 so the statement does not hold.

The statement is false.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 389 and current liabilities total 212:

$$
WC = CA - CL
$$

$$
CA = 389, \quad CL = 212
$$

$$
WC = 389 - 212 = 177
$$

The statement cites working capital of €177 thousand and that it is positive. Calculated WC is 177, which is positive.

Reading the arithmetic against the claim: WC = 177 is positive as claimed so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.017' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Comparative Balance Sheet Analysis 18". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "Equity usually does not have to be repaid on a fixed schedule, helps the business stay relatively independent from creditors, and cushions losses."

The statement is true.', 'FALSE — Use the case figures for Total equity and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total equity}_{\text{Y1}} = 340, \quad
\text{Total equity}_{\text{Y2}} = 348
$$

$$
\frac{348 - 340}{340} = 2.4\%
$$

$$
2.4\% \le  9.8\%
$$

The actual growth is 2.4%, which is not more than the claimed 9.8%.

The statement is false.', 'TRUE — Non-current liabilities are the long-term funding claims; here they are long-term bank loan plus bonds payable, compared with total equity.

Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\text{NCL} = 353 + 56 = 409
$$

$$
\text{Equity} = 340
$$

$$
\frac{409}{340} = 120.3\%
$$

Threshold: more than 56.5% in Year 1. Actual 120.3%.

Reading the arithmetic against the claim: Year 1 NCL/equity is 120.3%, which is consistent with ''more than 56.5%'' so the statement holds.

The statement is true.', 'TRUE — This is the Year 2 current ratio read as coverage of current liabilities.

Name the identity in words: coverage = current assets ÷ current liabilities.

$$
\frac{400}{275} = 1.4545
$$

Threshold: less than 1.83. Actual 1.45.

Reading the arithmetic against the claim: actual coverage 1.45 is less than 1.83 so the statement holds.

The statement is true.', 'TRUE — Current liabilities are due within one year or the operating cycle.

Trade payables to suppliers are routinely short-term; the euro amount does not change that rule.

Using the stem facts: "Trade payables of €188 thousand in Year 2 are correctly classified as a current liability, since suppliers are normally expected to be paid within one year."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.'] WHERE case_id = 'CASE 6.1.018' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Gearing From Comparative Figures 19". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "The balance sheet identity requires that total assets always equal the sum of total liabilities and total equity, which is why any increase in assets must be matched by an increase in either liabil…"

The statement is true.', 'TRUE — Non-current liabilities are the long-term funding claims; here they are long-term bank loan plus bonds payable, compared with total equity.

Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\text{NCL} = 297 + 70 = 367
$$

$$
\text{Equity} = 613
$$

$$
\frac{367}{613} = 59.9\%
$$

Threshold: more than 50.2% in Year 1. Actual 59.9%.

Reading the arithmetic against the claim: Year 1 NCL/equity is 59.9%, which is consistent with ''more than 50.2%'' so the statement holds.

The statement is true.', 'TRUE — Non-current liabilities are the long-term funding claims; here they are long-term bank loan plus bonds payable, compared with total equity.

Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\text{NCL} = 345 + 80 = 425
$$

$$
\text{Equity} = 620
$$

$$
\frac{425}{620} = 68.5\%
$$

Threshold: less than 107.9% in Year 2. Actual 68.5%.

Reading the arithmetic against the claim: Year 2 NCL/equity is 68.5%, which is consistent with ''less than 107.9%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Non-current assets as a percentage of total assets in Year 2.

Name the identity in words: Non-current assets share of total assets in Year 2 = Non-current assets ÷ total assets in Year 2.

From the extract, Non-current assets = 900 and total assets in Year 2 = 1,347. Plug the figures step by step:

$$
Share = \frac{\text{Non-current assets}}{\text{total assets in Year 2}}
$$

$$
Share = \frac{900}{1,347}
$$

$$
Share = 66.8\%
$$

Threshold: more than 61.1%. Actual 66.8%.

Reading the arithmetic against the claim: actual share 66.8% matches ''more than 61.1%'' so the statement holds.

The statement is true.', 'TRUE — This is the Year 2 current ratio read as coverage of current liabilities.

Name the identity in words: coverage = current assets ÷ current liabilities.

$$
\frac{447}{302} = 1.4801
$$

Threshold: less than 1.57. Actual 1.48.

Reading the arithmetic against the claim: actual coverage 1.48 is less than 1.57 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.019' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Non-current assets are held for use beyond one accounting period.

Useful life beyond one year plus operating intent (not ordinary resale) define the category.

Using the stem facts: "Non-current assets normally have a useful life of more than one year and are intended to be used in the business for longer than one year."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 136 + 162 + 34 = 332
$$

$$
CL = 150 + 48 = 198
$$

$$
\text{Current ratio} = \frac{332}{198} = 1.6768
$$

Claimed: is below 0.93. Actual 1.68.

Reading the arithmetic against the claim: actual current ratio 1.68 versus ''is below 0.93'' so the statement does not hold.

The statement is false.', 'FALSE — The acid-test (quick) ratio is a stricter liquidity test: inventory is removed from current assets before dividing by current liabilities.

Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = 332, \quad \text{Inventory} = 136, \quad CL = 198
$$

$$
CA - \text{Inventory} = 332 - 136 = 196
$$

$$
\text{Acid-test} = \frac{196}{198} = 0.9899
$$

Threshold: more than 1.24. Actual 0.99.

Reading the arithmetic against the claim: acid-test 0.99 is not more than 1.24 so the statement does not hold.

The statement is false.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 718 and total assets = 1,206. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{718}{1,206}
$$

$$
ER = 59.5\%
$$

Claimed: is below 33.7%. Actual 59.5%.

Reading the arithmetic against the claim: actual equity ratio 59.5% does not match ''is below 33.7%'' so the statement does not hold.

The statement is false.', 'FALSE — The debt ratio places debt against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: debt ratio = debt ÷ total assets.

From the extract, debt = 488 and total assets = 1,206. Plug the figures step by step:

$$
DR = \frac{\text{debt}}{\text{total assets}}
$$

$$
DR = \frac{488}{1,206}
$$

$$
DR = 40.5\%
$$

Claimed: exceeds 47.8%. Actual 40.5%.

Reading the arithmetic against the claim: actual debt ratio 40.5% does not match ''exceeds 47.8%'' so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.1.020' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Management intent to use in operations (typically >1 year) places the item among non-current assets.

Using the stem facts: "Classifying a delivery scooter as a non-current asset depends on management''s intention to use it in operations rather than to sell it quickly."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Resale intent makes dealer stock inventory (current). Being a business does not turn resale stock into a non-current operating asset.

The statement is false.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Classification follows how the reporting entity holds the item (use vs resale), not physical form alone.

Using the stem facts: "The same delivery scooter must always be classified identically on every balance sheet regardless of how it is held."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Price affects measurement; classification between fixed asset and inventory follows intended use.

Using the stem facts: "Classifying a delivery scooter as a non-current asset depends mainly on its purchase price rather than on management''s intended use."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Resale intent puts the item in inventory from acquisition; time unsold does not make it non-current.

Using the stem facts: "A delivery scooter acquired for resale still counts among non-current assets as long as it remains unsold for several months."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.'] WHERE case_id = 'CASE 6.1.021' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Asset Composition Chart 22". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A high equity ratio indicates that a larger portion of assets was financed by the company''s own resources rather than by creditors."

The statement is true.', 'TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 164 + 127 + 30 = 321
$$

$$
CL = 65 + 41 = 106
$$

$$
\text{Current ratio} = \frac{321}{106} = 3.0283
$$

Claimed: exceeds 1.41. Actual 3.03.

Reading the arithmetic against the claim: actual current ratio 3.03 versus ''exceeds 1.41'' so the statement holds.

The statement is true.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 164 + 127 + 30 = 321
$$

$$
CL = 65 + 41 = 106
$$

$$
\text{Current ratio} = \frac{321}{106} = 3.0283
$$

Claimed: is below 0.95. Actual 3.03.

Reading the arithmetic against the claim: actual current ratio 3.03 versus ''is below 0.95'' so the statement does not hold.

The statement is false.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 537 and total assets = 1,046. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{537}{1,046}
$$

$$
ER = 51.3\%
$$

Claimed: is below 26.9%. Actual 51.3%.

Reading the arithmetic against the claim: actual equity ratio 51.3% does not match ''is below 26.9%'' so the statement does not hold.

The statement is false.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 321 and current liabilities total 106:

$$
WC = CA - CL
$$

$$
CA = 321, \quad CL = 106
$$

$$
WC = 321 - 106 = 215
$$

The statement cites working capital of €215 thousand and that it is positive. Calculated WC is 215, which is positive.

Reading the arithmetic against the claim: WC = 215 is positive as claimed so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.022' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Buildings and Machinery as Fixed Assets". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "When a delivery scooter is acquired to be resold rather than used, it belongs among current assets as inventory."

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A delivery scooter bought by a business to support its own daily operations is a tangible fixed asset. The reason given — it delivers benefit across several accounting periods. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Buildings and Machinery as Fixed Assets". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A delivery scooter that a dealer displays for sale is not a fixed asset of that dealer."

The statement is true.', 'TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Operating use beyond one year meets the non-current tangible (fixed) asset definition.

Using the stem facts: "A packaging line kept in service by an operating business for more than one year is classified as a non-current tangible asset."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Buildings and Machinery as Fixed Assets". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A packaging line held by a dealer for resale to customers is classified as inventory, a current asset, rather than a non-current asset."

The statement is true.'] WHERE case_id = 'CASE 6.1.023' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Wear is handled by depreciating a fixed asset. Daily operating use supports non-current classification, not inventory.

Using the stem facts: "A delivery scooter used daily in a business''s own operations should be recorded as inventory because it wears out over time."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Intended use decides the line: operations → non-current; held for sale → inventory.

Using the stem facts: "The same packaging line may be a non-current asset for one business and inventory for another, depending on whether it is used or held for sale."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

After sale, the buyer''s intent governs: use in operations → buyer''s non-current asset, not inventory.

Using the stem facts: "Once a dealer sells a delivery scooter from its stock, the buyer must continue to record it as inventory."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Inventory is stock held for sale, not every physical item owned. Equipment used in operations is a non-current tangible asset.

Using the stem facts: "A packaging line used by an operating business is classified as inventory because inventory can include any physical equipment a business owns."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Management intent to use in operations (typically >1 year) places the item among non-current assets.

Using the stem facts: "Classifying a packaging line as a non-current asset depends on management''s intention to use it in operations rather than to sell it quickly."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.'] WHERE case_id = 'CASE 6.1.024' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Gearing From Comparative Figures 25". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Long-term assets should preferably be financed only with short-term trade credit."

The statement is false.', 'TRUE — Use the case figures for Total equity and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total equity}_{\text{Y1}} = 202, \quad
\text{Total equity}_{\text{Y2}} = 260
$$

$$
\frac{260 - 202}{202} = 28.7\%
$$

$$
28.7\% > 24.7\%
$$

The actual growth is 28.7%, which is more than the claimed 24.7%.

The statement is true.', 'TRUE — Compute each year''s equity ratio from the balance-sheet totals, then the change in percentage points.

$$
R_{Y1} = \frac{202}{867} = 23.3\%
$$

$$
R_{Y2} = \frac{260}{1,001} = 26.0\%
$$

$$
\Delta = +2.7\text{ percentage points}
$$

Required: improved by more than 2.4 pp. Actual change +2.7 pp.

The statement is true.', 'TRUE — Non-current liabilities are the long-term funding claims; here they are long-term bank loan plus bonds payable, compared with total equity.

Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\text{NCL} = 324 + 68 = 392
$$

$$
\text{Equity} = 202
$$

$$
\frac{392}{202} = 194.1\%
$$

Threshold: more than 73.2% in Year 1. Actual 194.1%.

Reading the arithmetic against the claim: Year 1 NCL/equity is 194.1%, which is consistent with ''more than 73.2%'' so the statement holds.

The statement is true.', 'TRUE — Working capital each year is current assets minus current liabilities; doubling compares Year 2 with twice Year 1.

Name the identity in words: working capital = current assets − current liabilities.

$$
WC_{Y1} = 297 - 273 = 24
$$

$$
WC_{Y2} = 346 - 293 = 53
$$

$$
2 \times WC_{Y1} = 48
$$

Doubling requires $WC_{Y2} \ge 48$. Actual Year-2 WC is 53.

Reading the arithmetic against the claim: Year-2 WC 53 meets the doubling test against 48 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.025' AND tier = 'full';
