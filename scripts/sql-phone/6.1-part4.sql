-- Update expanded explanations for 6.1-part4 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Gearing From Comparative Figures 76". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "Equity usually does not have to be repaid on a fixed schedule, helps the business stay relatively independent from creditors, and cushions losses."

The statement is true.', 'TRUE — Use the case figures for Total equity and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total equity}_{\text{Y1}} = 594, \quad
\text{Total equity}_{\text{Y2}} = 686
$$

$$
\frac{686 - 594}{594} = 15.5\%
$$

$$
15.5\% > 14.4\%
$$

The actual growth is 15.5%, which is more than the claimed 14.4%.

The statement is true.', 'TRUE — Non-current liabilities are the long-term funding claims; here they are long-term bank loan plus bonds payable, compared with total equity.

Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\text{NCL} = 273 + 66 = 339
$$

$$
\text{Equity} = 594
$$

$$
\frac{339}{594} = 57.1\%
$$

Threshold: more than 54.8% in Year 1. Actual 57.1%.

Reading the arithmetic against the claim: Year 1 NCL/equity is 57.1%, which is consistent with ''more than 54.8%'' so the statement holds.

The statement is true.', 'TRUE — Long-term financing is equity plus non-current liabilities; the claim compares that pool with non-current assets.

Name the identity in words: surplus = (equity + non-current liabilities) ÷ non-current assets − 1.

$$
\text{Equity} + \text{NCL} = 594 + 339 = 933
$$

$$
\text{NCA} = 773
$$

$$
\frac{933}{773} - 1 = 20.7\%
$$

Threshold: more than 10.5%. Actual surplus 20.7%.

Reading the arithmetic against the claim: the surplus is 20.7%, which exceeds 10.5% so the statement holds.

The statement is true.', 'TRUE — Current liabilities are due within one year or the operating cycle.

Trade payables to suppliers are routinely short-term; the euro amount does not change that rule.

Using the stem facts: "Trade payables of €232 thousand in Year 2 are correctly classified as a current liability, since suppliers are normally expected to be paid within one year."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.'] WHERE case_id = 'CASE 6.1.076' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Balance Sheet Structure Review 77". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Current liabilities are debts that must be repaid after more than one year."

The statement is false.', 'TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 83 + 99 + 39 = 221
$$

$$
CL = 155 + 29 = 184
$$

$$
\text{Current ratio} = \frac{221}{184} = 1.2011
$$

Claimed: exceeds 1.02. Actual 1.20.

Reading the arithmetic against the claim: actual current ratio 1.20 versus ''exceeds 1.02'' so the statement holds.

The statement is true.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 83 + 99 + 39 = 221
$$

$$
CL = 155 + 29 = 184
$$

$$
\text{Current ratio} = \frac{221}{184} = 1.2011
$$

Claimed: is below 0.77. Actual 1.20.

Reading the arithmetic against the claim: actual current ratio 1.20 versus ''is below 0.77'' so the statement does not hold.

The statement is false.', 'FALSE — The acid-test (quick) ratio is a stricter liquidity test: inventory is removed from current assets before dividing by current liabilities.

Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = 221, \quad \text{Inventory} = 83, \quad CL = 184
$$

$$
CA - \text{Inventory} = 221 - 83 = 138
$$

$$
\text{Acid-test} = \frac{138}{184} = 0.7500
$$

Threshold: more than 1.27. Actual 0.75.

Reading the arithmetic against the claim: acid-test 0.75 is not more than 1.27 so the statement does not hold.

The statement is false.', 'FALSE — The debt ratio places debt against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: debt ratio = debt ÷ total assets.

From the extract, debt = 561 and total assets = 824. Plug the figures step by step:

$$
DR = \frac{\text{debt}}{\text{total assets}}
$$

$$
DR = \frac{561}{824}
$$

$$
DR = 68.1\%
$$

Claimed: exceeds 70.9%. Actual 68.1%.

Reading the arithmetic against the claim: actual debt ratio 68.1% does not match ''exceeds 70.9%'' so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.1.077' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Raising Equity Versus Taking on Debt". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A development patent is recorded as an intangible non-current asset alongside tangible assets such as buildings and machinery."

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Resale intent puts the item in inventory from acquisition; time unsold does not make it non-current.

Using the stem facts: "An espresso machine acquired for resale still counts among non-current assets as long as it remains unsold for several months."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Wear is handled by depreciating a fixed asset. Daily operating use supports non-current classification, not inventory.

Using the stem facts: "An espresso machine used daily in a business''s own operations should be recorded as inventory because it wears out over time."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

After sale, the buyer''s intent governs: use in operations → buyer''s non-current asset, not inventory.

Using the stem facts: "Once a dealer sells an espresso machine from its stock, the buyer must continue to record it as inventory."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Inventory is stock held for sale, not every physical item owned. Equipment used in operations is a non-current tangible asset.

Using the stem facts: "A printing press used by an operating business is classified as inventory because inventory can include any physical equipment a business owns."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.'] WHERE case_id = 'CASE 6.1.078' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Asset Composition Chart 79". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Current liabilities are debts that must be repaid after more than one year."

The statement is false.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 222 + 96 + 49 = 367
$$

$$
CL = 171 + 60 = 231
$$

$$
\text{Current ratio} = \frac{367}{231} = 1.5887
$$

Claimed: is below 1.05. Actual 1.59.

Reading the arithmetic against the claim: actual current ratio 1.59 versus ''is below 1.05'' so the statement does not hold.

The statement is false.', 'TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 222 + 96 + 49 = 367
$$

$$
CL = 171 + 60 = 231
$$

$$
\text{Current ratio} = \frac{367}{231} = 1.5887
$$

Claimed: exceeds 1.29. Actual 1.59.

Reading the arithmetic against the claim: actual current ratio 1.59 versus ''exceeds 1.29'' so the statement holds.

The statement is true.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 367 and current liabilities total 231:

$$
WC = CA - CL
$$

$$
CA = 367, \quad CL = 231
$$

$$
WC = 367 - 231 = 136
$$

The statement cites working capital of €136 thousand and that it is positive. Calculated WC is 136, which is positive.

Reading the arithmetic against the claim: WC = 136 is positive as claimed so the statement holds.

The statement is true.', 'TRUE — The debt ratio places debt against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: debt ratio = debt ÷ total assets.

From the extract, debt = 588 and total assets = 1,080. Plug the figures step by step:

$$
DR = \frac{\text{debt}}{\text{total assets}}
$$

$$
DR = \frac{588}{1,080}
$$

$$
DR = 54.4\%
$$

Claimed: exceeds 51.5%. Actual 54.4%.

Reading the arithmetic against the claim: actual debt ratio 54.4% matches ''exceeds 51.5%'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.079' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Two-Year Balance Sheet Review 80". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "The same physical item can be inventory for a dealer that holds it for sale and a non-current asset for a business that uses it in operations."

The statement is true.', 'FALSE — Use the case figures for Total assets and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total assets}_{\text{Y1}} = 944, \quad
\text{Total assets}_{\text{Y2}} = 999
$$

$$
\frac{999 - 944}{944} = 5.8\%
$$

$$
5.8\% \le  19\%
$$

The actual growth is 5.8%, which is not more than the claimed 19%.

The statement is false.', 'TRUE — Non-current liabilities are the long-term funding claims; here they are long-term bank loan plus bonds payable, compared with total equity.

Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\text{NCL} = 367 + 43 = 410
$$

$$
\text{Equity} = 343
$$

$$
\frac{410}{343} = 119.5\%
$$

Threshold: more than 102.2% in Year 1. Actual 119.5%.

Reading the arithmetic against the claim: Year 1 NCL/equity is 119.5%, which is consistent with ''more than 102.2%'' so the statement holds.

The statement is true.', 'FALSE — Use the case figures for Inventory and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Inventory}_{\text{Y1}} = 142, \quad
\text{Inventory}_{\text{Y2}} = 156
$$

$$
\frac{156 - 142}{142} = 9.9\%
$$

$$
9.9\% \le  20.1\%
$$

The actual growth is 9.9%, which is not more than the claimed 20.1%.

The statement is false.', 'TRUE — This is a composition claim: express Non-current assets as a percentage of total assets in Year 2.

Name the identity in words: Non-current assets share of total assets in Year 2 = Non-current assets ÷ total assets in Year 2.

From the extract, Non-current assets = 643 and total assets in Year 2 = 999. Plug the figures step by step:

$$
Share = \frac{\text{Non-current assets}}{\text{total assets in Year 2}}
$$

$$
Share = \frac{643}{999}
$$

$$
Share = 64.4\%
$$

Threshold: more than 64.2%. Actual 64.4%.

Reading the arithmetic against the claim: actual share 64.4% matches ''more than 64.2%'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.080' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Comparative Balance Sheet Analysis 81". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Current liabilities are debts that must be repaid after more than one year."

The statement is false.', 'FALSE — Use the case figures for Total assets and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total assets}_{\text{Y1}} = 1,381, \quad
\text{Total assets}_{\text{Y2}} = 1,546
$$

$$
\frac{1,546 - 1,381}{1,381} = 11.9\%
$$

$$
11.9\% \le  15.2\%
$$

The actual growth is 11.9%, which is not more than the claimed 15.2%.

The statement is false.', 'FALSE — Use the case figures for Trade payables and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Trade payables}_{\text{Y1}} = 116, \quad
\text{Trade payables}_{\text{Y2}} = 125
$$

$$
\frac{125 - 116}{116} = 7.8\%
$$

$$
7.8\% \le  10.1\%
$$

The actual growth is 7.8%, which is not more than the claimed 10.1%.

The statement is false.', 'FALSE — Use the case figures for Cash and cash equivalents and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Cash and cash equivalents}_{\text{Y1}} = 94, \quad
\text{Cash and cash equivalents}_{\text{Y2}} = 110
$$

$$
\frac{110 - 94}{94} = 17.0\%
$$

$$
-17.0\% \le  23.2\%
$$

The actual decline is -17.0%, which is not more than the claimed 23.2%.

The statement is false.', 'TRUE — Use the case figures for Total equity and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total equity}_{\text{Y1}} = 866, \quad
\text{Total equity}_{\text{Y2}} = 987
$$

$$
\frac{987 - 866}{866} = 14.0\%
$$

$$
14.0\% > 13.1\%
$$

The actual growth is 14.0%, which is more than the claimed 13.1%.

The statement is true.'] WHERE case_id = 'CASE 6.1.081' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Asset Composition Chart 82". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "Owner''s equity is the residual claim remaining after liabilities are deducted from assets, and it is the portion of assets not financed by debt."

The statement is true.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 309 and current liabilities total 261:

$$
WC = CA - CL
$$

$$
CA = 309, \quad CL = 261
$$

$$
WC = 309 - 261 = 48
$$

The statement cites working capital of €48 thousand and that it is positive. Calculated WC is 48, which is positive.

Reading the arithmetic against the claim: WC = 48 is positive as claimed so the statement holds.

The statement is true.', 'TRUE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 304 and total assets = 845. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{304}{845}
$$

$$
ER = 36.0\%
$$

Claimed: is below 37.5%. Actual 36.0%.

Reading the arithmetic against the claim: actual equity ratio 36.0% matches ''is below 37.5%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Cash and cash equivalents as a percentage of current assets.

Name the identity in words: Cash and cash equivalents share of current assets = Cash and cash equivalents ÷ current assets.

From the extract, Cash and cash equivalents = 88 and current assets = 309. Plug the figures step by step:

$$
Share = \frac{\text{Cash and cash equivalents}}{\text{current assets}}
$$

$$
Share = \frac{88}{309}
$$

$$
Share = 28.5\%
$$

Threshold: more than 15.2%. Actual 28.5%.

Reading the arithmetic against the claim: actual share 28.5% matches ''more than 15.2%'' so the statement holds.

The statement is true.', 'TRUE — Inventory is held for sale or for consumption in the operating cycle.

On the balance sheet that places inventory among current assets. It is not an intangible (no physical stock for sale) and not a non-current operating asset (those are used in the business beyond one year rather than turned over as stock).

Applied to this stem: "Inventory of €83 thousand is correctly classified as a current asset rather than a non-current intangible asset."

The statement is true.'] WHERE case_id = 'CASE 6.1.082' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Resale intent makes dealer stock inventory (current). Being a business does not turn resale stock into a non-current operating asset.

The statement is false.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Classification follows how the reporting entity holds the item (use vs resale), not physical form alone.

Using the stem facts: "The same printing press must always be classified identically on every balance sheet regardless of how it is held."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Balance Sheet as a Point in Time". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "The absence of physical form does not prevent a development patent from being classified as a non-current asset."

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Balance Sheet as a Point in Time". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A development patent acquired to protect or support a business''s operations over several years is grouped with intangible non-current assets."

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A development patent is not classified as a current asset. The reason given — it is not expected to convert into cash within the normal operating cycle. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.'] WHERE case_id = 'CASE 6.1.083' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Share Price and Market Capitalisation 84". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "Market capitalisation is the total market value of a company''s outstanding shares and is often used to gauge size, but it is not necessarily a meaningful measure of fundamental value."

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 17, \quad \text{Shares} = 641,000
$$

$$
\text{MCap} = 17 \times 641,000 = €10.90\text{ million}
$$

Threshold: exceeds €9 million. Actual €10.90 million.

Reading the arithmetic against the claim: market cap €10.90m exceeds €9m so the statement holds.

The statement is true.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 279, \quad \frac{\text{Shares}}{1,000} = 641
$$

$$
EPS = \frac{279}{641} = €0.4353
$$

Threshold: exceeds €0.33. Actual ≈ €0.44.

Reading the arithmetic against the claim: EPS €0.44 exceeds €0.33 so the statement holds.

The statement is true.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 29, \quad P_{\min} = 17
$$

$$
\frac{29 - 17}{17} = 70.6\%
$$

Threshold: more than 17.1%. Actual 70.6%.

Reading the arithmetic against the claim: the gap is 70.6%, which exceeds 17.1% so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 350,000, \quad \text{Shares} = 641,000
$$

$$
\frac{350,000}{641,000} = 54.6\%
$$

Threshold: exceed 25.2%. Actual 54.6%.

Reading the arithmetic against the claim: turnover 54.6% exceeds 25.2% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.084' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Listed Company Performance Charts 85". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "Voting rights ordinarily attach to common shares, while preferred shareholders usually accept limited voting rights in return for a preferential dividend."

The statement is true.', 'TRUE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 38, \quad P_{\text{last}} = 48
$$

$$
\frac{48 - 38}{38} = 26.3\%
$$

Threshold: more than 26%. Actual 26.3%.

Reading the arithmetic against the claim: the rise is 26.3%, which exceeds 26% so the statement holds.

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 48, \quad \text{Shares} = 692,000
$$

$$
\text{MCap} = 48 \times 692,000 = €33.22\text{ million}
$$

Threshold: exceeds €31.5 million. Actual €33.22 million.

Reading the arithmetic against the claim: market cap €33.22m exceeds €31.5m so the statement holds.

The statement is true.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 234, \quad \frac{\text{Shares}}{1,000} = 692
$$

$$
EPS = \frac{234}{692} = €0.3382
$$

Threshold: exceeds €0.28. Actual ≈ €0.34.

Reading the arithmetic against the claim: EPS €0.34 exceeds €0.28 so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 326,000, \quad \text{Shares} = 692,000
$$

$$
\frac{326,000}{692,000} = 47.1\%
$$

Threshold: exceed 17.9%. Actual 47.1%.

Reading the arithmetic against the claim: turnover 47.1% exceeds 17.9% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.085' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Price affects measurement; classification between fixed asset and inventory follows intended use.

Using the stem facts: "Classifying a printing press as a non-current asset depends mainly on its purchase price rather than on management''s intended use."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Resale intent puts the item in inventory from acquisition; time unsold does not make it non-current.

Using the stem facts: "A printing press acquired for resale still counts among non-current assets as long as it remains unsold for several months."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A trading permit lacks physical substance but is classified as a non-current intangible asset. The reason given — it provides expected long-term benefit. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: Although a trading permit cannot be touched, it appears among non-current assets rather than current assets. The reason given — of its long-term value. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Wear is handled by depreciating a fixed asset. Daily operating use supports non-current classification, not inventory.

Using the stem facts: "A printing press used daily in a business''s own operations should be recorded as inventory because it wears out over time."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.'] WHERE case_id = 'CASE 6.1.086' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Share Price and Market Capitalisation 87". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "Return on equity and return on capital employed are most meaningful when comparing similar businesses or the same business over time, not as isolated absolute numbers."

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 29, \quad \text{Shares} = 408,000
$$

$$
\text{MCap} = 29 \times 408,000 = €11.83\text{ million}
$$

Threshold: exceeds €9.9 million. Actual €11.83 million.

Reading the arithmetic against the claim: market cap €11.83m exceeds €9.9m so the statement holds.

The statement is true.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 252, \quad \frac{\text{Shares}}{1,000} = 408
$$

$$
EPS = \frac{252}{408} = €0.6176
$$

Threshold: exceeds €0.53. Actual ≈ €0.62.

Reading the arithmetic against the claim: EPS €0.62 exceeds €0.53 so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 299,000, \quad \text{Shares} = 408,000
$$

$$
\frac{299,000}{408,000} = 73.3\%
$$

Threshold: exceed 23.2%. Actual 73.3%.

Reading the arithmetic against the claim: turnover 73.3% exceeds 23.2% so the statement holds.

The statement is true.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 73,000 \quad (April)
$$

Threshold: exceeds 46,844. Actual 73,000.

Reading the arithmetic against the claim: peak volume 73,000 exceeds 46,844 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.087' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

After sale, the buyer''s intent governs: use in operations → buyer''s non-current asset, not inventory.

Using the stem facts: "Once a dealer sells a printing press from its stock, the buyer must continue to record it as inventory."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Physical Form and Asset Classification". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A trading permit is recorded as an intangible non-current asset alongside tangible assets such as buildings and machinery."

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Physical Form and Asset Classification". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "The absence of physical form does not prevent a trading permit from being classified as a non-current asset."

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Inventory is stock held for sale, not every physical item owned. Equipment used in operations is a non-current tangible asset.

Using the stem facts: "A conveyor belt used by an operating business is classified as inventory because inventory can include any physical equipment a business owns."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Physical Form and Asset Classification". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A trading permit acquired to protect or support a business''s operations over several years is grouped with intangible non-current assets."

The statement is true.'] WHERE case_id = 'CASE 6.1.088' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Secondary-market trades move cash between investors, not into the company.

When one shareholder sells shares to another on the exchange, the issuer is not a party to that trade and does not receive new share capital from it. Fresh equity cash arrives only from primary issues or similar company transactions.

Applied to this stem: "When one shareholder sells shares to another on the stock exchange, the corporation always receives the sale proceeds as new share capital."

The statement is false.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 24 \times 559,000 = €13.42\text{m}
$$

$$
\text{MCap}_{\text{last}} = 31 \times 559,000 = €17.33\text{m}
$$

$$
\frac{17.33 - 13.42}{13.42} = 29.2\%
$$

Threshold: more than 34.2%. Actual 29.2%.

Reading the arithmetic against the claim: MCap rose 29.2%, which does not exceed 34.2% so the statement does not hold.

The statement is false.', 'TRUE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 24, \quad P_{\text{last}} = 31
$$

$$
\frac{31 - 24}{24} = 29.2\%
$$

Threshold: more than 19.6%. Actual 29.2%.

Reading the arithmetic against the claim: the rise is 29.2%, which exceeds 19.6% so the statement holds.

The statement is true.', 'FALSE — Compare the month that records the highest closing price with the month that records the highest volume.

$$
\text{Peak price month} = May \ (€31)
$$

$$
\text{Peak volume month} = January \ (89,000\ \text{shares})
$$

These months differ.

Reading the arithmetic against the claim: peak price and peak volume months do not coincide so the statement does not hold.

The statement is false.', 'FALSE — This claim is a direct order comparison of the first and last closing prices in the monthly table — no ratio is required.

Read the first month''s closing price and the last month''s closing price from the extract:

$$
P_{\text{first}} = 24
$$

$$
P_{\text{last}} = 31
$$

The statement asserts that the last close is below the first. Here last is not below first (31 versus 24).

Reading the arithmetic against the claim: last 31 is not below first 24 so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.1.089' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Share Price and Market Capitalisation 90". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A corporation is not obliged to pay a dividend every year regardless of performance; unpaid dividends over a longer period may make the shares less attractive, but payment is not legally required e…"

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 29, \quad \text{Shares} = 718,000
$$

$$
\text{MCap} = 29 \times 718,000 = €20.82\text{ million}
$$

Threshold: exceeds €16.7 million. Actual €20.82 million.

Reading the arithmetic against the claim: market cap €20.82m exceeds €16.7m so the statement holds.

The statement is true.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 193, \quad \frac{\text{Shares}}{1,000} = 718
$$

$$
EPS = \frac{193}{718} = €0.2688
$$

Threshold: exceeds €0.19. Actual ≈ €0.27.

Reading the arithmetic against the claim: EPS €0.27 exceeds €0.19 so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 269,000, \quad \text{Shares} = 718,000
$$

$$
\frac{269,000}{718,000} = 37.5\%
$$

Threshold: exceed 12.6%. Actual 37.5%.

Reading the arithmetic against the claim: turnover 37.5% exceeds 12.6% so the statement holds.

The statement is true.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 84,000 \quad (May)
$$

Threshold: exceeds 51,097. Actual 84,000.

Reading the arithmetic against the claim: peak volume 84,000 exceeds 51,097 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.090' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Listed Company Performance Charts 91". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "Investors may seek income from dividends, capital gains if prices rise, influence through voting, or a hedge of real values against inflation."

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 21, \quad P_{\text{last}} = 24
$$

$$
\frac{24 - 21}{21} = 14.3\%
$$

Threshold: more than 22.1%. Actual 14.3%.

Reading the arithmetic against the claim: the rise is 14.3%, which does not exceed 22.1% so the statement does not hold.

The statement is false.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 21 \times 501,000 = €10.52\text{m}
$$

$$
\text{MCap}_{\text{last}} = 24 \times 501,000 = €12.02\text{m}
$$

$$
\frac{12.02 - 10.52}{10.52} = 14.3\%
$$

Threshold: more than 29.7%. Actual 14.3%.

Reading the arithmetic against the claim: MCap rose 14.3%, which does not exceed 29.7% so the statement does not hold.

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 24, \quad \text{Shares} = 501,000
$$

$$
\text{MCap} = 24 \times 501,000 = €12.02\text{ million}
$$

Threshold: exceeds €9.4 million. Actual €12.02 million.

Reading the arithmetic against the claim: market cap €12.02m exceeds €9.4m so the statement holds.

The statement is true.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 24, \quad P_{\min} = 19
$$

$$
\frac{24 - 19}{19} = 26.3\%
$$

Threshold: more than 39.9%. Actual 26.3%.

Reading the arithmetic against the claim: the gap is 26.3%, which does not exceed 39.9% so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.1.091' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Earnings Per Share From Reported Figures 92". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Any increase in the listed price of already-issued shares transfers that increase as cash directly onto the company''s bank account."

The statement is false.', 'TRUE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 35, \quad P_{\text{last}} = 42
$$

$$
\frac{42 - 35}{35} = 20.0\%
$$

Threshold: more than 11.5%. Actual 20.0%.

Reading the arithmetic against the claim: the rise is 20.0%, which exceeds 11.5% so the statement holds.

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 42, \quad \text{Shares} = 703,000
$$

$$
\text{MCap} = 42 \times 703,000 = €29.53\text{ million}
$$

Threshold: exceeds €22.8 million. Actual €29.53 million.

Reading the arithmetic against the claim: market cap €29.53m exceeds €22.8m so the statement holds.

The statement is true.', 'TRUE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 35 \times 703,000 = €24.61\text{m}
$$

$$
\text{MCap}_{\text{last}} = 42 \times 703,000 = €29.53\text{m}
$$

$$
\frac{29.53 - 24.61}{24.61} = 20.0\%
$$

Threshold: more than 12.1%. Actual 20.0%.

Reading the arithmetic against the claim: MCap rose 20.0%, which exceeds 12.1% so the statement holds.

The statement is true.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 305, \quad \frac{\text{Shares}}{1,000} = 703
$$

$$
EPS = \frac{305}{703} = €0.4339
$$

Threshold: exceeds €0.32. Actual ≈ €0.43.

Reading the arithmetic against the claim: EPS €0.43 exceeds €0.32 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.092' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A trading permit is not classified as a current asset. The reason given — it is not expected to convert into cash within the normal operating cycle. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A service mark lacks physical substance but is classified as a non-current intangible asset. The reason given — it provides expected long-term benefit. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: Although a service mark cannot be touched, it appears among non-current assets rather than current assets. The reason given — of its long-term value. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Operating Cycle and Current Assets". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A service mark is recorded as an intangible non-current asset alongside tangible assets such as buildings and machinery."

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Operating Cycle and Current Assets". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "The absence of physical form does not prevent a service mark from being classified as a non-current asset."

The statement is true.'] WHERE case_id = 'CASE 6.1.093' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Benefit Period and Non-Current Assets". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A service mark acquired to protect or support a business''s operations over several years is grouped with intangible non-current assets."

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A service mark is not classified as a current asset. The reason given — it is not expected to convert into cash within the normal operating cycle. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A proprietary formula lacks physical substance but is classified as a non-current intangible asset. The reason given — it provides expected long-term benefit. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: Although a proprietary formula cannot be touched, it appears among non-current assets rather than current assets. The reason given — of its long-term value. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Resale intent makes dealer stock inventory (current). Being a business does not turn resale stock into a non-current operating asset.

The statement is false.'] WHERE case_id = 'CASE 6.1.094' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Earnings Per Share From Reported Figures 95". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A share buyback reduces the number of shares outstanding, which can raise earnings per share even if total profit stays exactly the same."

The statement is true.', 'TRUE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 41, \quad P_{\text{last}} = 49
$$

$$
\frac{49 - 41}{41} = 19.5\%
$$

Threshold: more than 10.2%. Actual 19.5%.

Reading the arithmetic against the claim: the rise is 19.5%, which exceeds 10.2% so the statement holds.

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 49, \quad \text{Shares} = 646,000
$$

$$
\text{MCap} = 49 \times 646,000 = €31.65\text{ million}
$$

Threshold: exceeds €28.7 million. Actual €31.65 million.

Reading the arithmetic against the claim: market cap €31.65m exceeds €28.7m so the statement holds.

The statement is true.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 41 \times 646,000 = €26.49\text{m}
$$

$$
\text{MCap}_{\text{last}} = 49 \times 646,000 = €31.65\text{m}
$$

$$
\frac{31.65 - 26.49}{26.49} = 19.5\%
$$

Threshold: more than 22.4%. Actual 19.5%.

Reading the arithmetic against the claim: MCap rose 19.5%, which does not exceed 22.4% so the statement does not hold.

The statement is false.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 339,000, \quad \text{Shares} = 646,000
$$

$$
\frac{339,000}{646,000} = 52.5\%
$$

Threshold: exceed 27.6%. Actual 52.5%.

Reading the arithmetic against the claim: turnover 52.5% exceeds 27.6% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.095' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Share Price and Market Capitalisation 96". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Every corporation must distribute a cash dividend to shareholders in each financial year by law."

The statement is false.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 35, \quad P_{\text{last}} = 44
$$

$$
\frac{44 - 35}{35} = 25.7\%
$$

Threshold: more than 26.1%. Actual 25.7%.

Reading the arithmetic against the claim: the rise is 25.7%, which does not exceed 26.1% so the statement does not hold.

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 44, \quad \text{Shares} = 598,000
$$

$$
\text{MCap} = 44 \times 598,000 = €26.31\text{ million}
$$

Threshold: exceeds €22.2 million. Actual €26.31 million.

Reading the arithmetic against the claim: market cap €26.31m exceeds €22.2m so the statement holds.

The statement is true.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 44, \quad P_{\min} = 35
$$

$$
\frac{44 - 35}{35} = 25.7\%
$$

Threshold: more than 44%. Actual 25.7%.

Reading the arithmetic against the claim: the gap is 25.7%, which does not exceed 44% so the statement does not hold.

The statement is false.', 'FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Share Price and Market Capitalisation 96". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Holders of preferred shares always vote at meetings, while common shareholders hold equity without voting rights."

The statement is false.'] WHERE case_id = 'CASE 6.1.096' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Listed Company Performance Charts 97". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "After shares are already trading, any rise in the market price automatically provides new cash funds to the issuing corporation."

The statement is false.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 25, \quad P_{\text{last}} = 28
$$

$$
\frac{28 - 25}{25} = 12.0\%
$$

Threshold: more than 13.1%. Actual 12.0%.

Reading the arithmetic against the claim: the rise is 12.0%, which does not exceed 13.1% so the statement does not hold.

The statement is false.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 28, \quad P_{\min} = 22
$$

$$
\frac{28 - 22}{22} = 27.3\%
$$

Threshold: more than 35.6%. Actual 27.3%.

Reading the arithmetic against the claim: the gap is 27.3%, which does not exceed 35.6% so the statement does not hold.

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 28, \quad \text{Shares} = 602,000
$$

$$
\text{MCap} = 28 \times 602,000 = €16.86\text{ million}
$$

Threshold: exceeds €12.7 million. Actual €16.86 million.

Reading the arithmetic against the claim: market cap €16.86m exceeds €12.7m so the statement holds.

The statement is true.', 'FALSE — Count how many consecutive month pairs show a higher closing price, then compare with half of the steps.

There are 5 month-to-month steps in the table.

$$
\text{Upward steps} = 1
$$

More than half of 5 requires more than 2.5 upward steps. Actual upward steps: 1.

Reading the arithmetic against the claim: 1 upward steps do not exceed half of 5 so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.1.097' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Classification follows how the reporting entity holds the item (use vs resale), not physical form alone.

Using the stem facts: "The same conveyor belt must always be classified identically on every balance sheet regardless of how it is held."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Supplier Credit and Payables". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A proprietary formula is recorded as an intangible non-current asset alongside tangible assets such as buildings and machinery."

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Supplier Credit and Payables". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "The absence of physical form does not prevent a proprietary formula from being classified as a non-current asset."

The statement is true.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Price affects measurement; classification between fixed asset and inventory follows intended use.

Using the stem facts: "Classifying a conveyor belt as a non-current asset depends mainly on its purchase price rather than on management''s intended use."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Resale intent puts the item in inventory from acquisition; time unsold does not make it non-current.

Using the stem facts: "A conveyor belt acquired for resale still counts among non-current assets as long as it remains unsold for several months."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.'] WHERE case_id = 'CASE 6.1.098' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

Wear is handled by depreciating a fixed asset. Daily operating use supports non-current classification, not inventory.

Using the stem facts: "A conveyor belt used daily in a business''s own operations should be recorded as inventory because it wears out over time."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone.

After sale, the buyer''s intent governs: use in operations → buyer''s non-current asset, not inventory.

Using the stem facts: "Once a dealer sells a conveyor belt from its stock, the buyer must continue to record it as inventory."

The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: An operating licence is excluded from non-current assets. The reason — it has no physical substance. — does not support that label under the chapter definitions. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Comparing Payables and Receivables". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A proprietary formula acquired to protect or support a business''s operations over several years is grouped with intangible non-current assets."

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A proprietary formula is not classified as a current asset. The reason given — it is not expected to convert into cash within the normal operating cycle. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.'] WHERE case_id = 'CASE 6.1.099' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Listed Company Performance Charts 100". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "Investors may seek income from dividends, capital gains if prices rise, influence through voting, or a hedge of real values against inflation."

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 11, \quad \text{Shares} = 464,000
$$

$$
\text{MCap} = 11 \times 464,000 = €5.10\text{ million}
$$

Threshold: exceeds €4 million. Actual €5.10 million.

Reading the arithmetic against the claim: market cap €5.10m exceeds €4m so the statement holds.

The statement is true.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 184, \quad \frac{\text{Shares}}{1,000} = 464
$$

$$
EPS = \frac{184}{464} = €0.3966
$$

Threshold: exceeds €0.29. Actual ≈ €0.40.

Reading the arithmetic against the claim: EPS €0.40 exceeds €0.29 so the statement holds.

The statement is true.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 16, \quad P_{\min} = 11
$$

$$
\frac{16 - 11}{11} = 45.5\%
$$

Threshold: more than 30.4%. Actual 45.5%.

Reading the arithmetic against the claim: the gap is 45.5%, which exceeds 30.4% so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 336,000, \quad \text{Shares} = 464,000
$$

$$
\frac{336,000}{464,000} = 72.4\%
$$

Threshold: exceed 39.2%. Actual 72.4%.

Reading the arithmetic against the claim: turnover 72.4% exceeds 39.2% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.100' AND tier = 'full';
