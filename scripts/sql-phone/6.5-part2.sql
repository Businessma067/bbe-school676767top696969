-- Update expanded explanations for 6.5-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — On a stock exchange, existing shares change hands between investors.

That transfer does not raise new capital for the issuer; fresh equity cash comes only from primary issues or similar company transactions.

Using the stem facts: "Secondary-market trading changes who owns the shares; it does not, by itself, inject fresh equity cash into the issuing company."

Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding.

The statement is true.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 107 + 135 + 96 = 338
$$

$$
CL = 135 + 32 = 167
$$

$$
\text{Current ratio} = \frac{338}{167} = 2.0240
$$

Claimed: is below 1.21. Actual 2.02.

Reading the arithmetic against the claim: actual current ratio 2.02 versus ''is below 1.21'' so the statement does not hold.

The statement is false.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 426 and total assets = 1,027. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{426}{1,027}
$$

$$
ER = 41.5\%
$$

Claimed: is below 21%. Actual 41.5%.

Reading the arithmetic against the claim: actual equity ratio 41.5% does not match ''is below 21%'' so the statement does not hold.

The statement is false.', 'FALSE — This is a composition claim: express Buildings as a percentage of total assets.

Name the identity in words: Buildings share of total assets = Buildings ÷ total assets.

From the extract, Buildings = 359 and total assets = 1,027. Plug the figures step by step:

$$
Share = \frac{\text{Buildings}}{\text{total assets}}
$$

$$
Share = \frac{359}{1,027}
$$

$$
Share = 35.0\%
$$

Threshold: more than 45.6%. Actual 35.0%.

Reading the arithmetic against the claim: actual share 35.0% does not match ''more than 45.6%'' so the statement does not hold.

The statement is false.', 'FALSE — This is a composition claim: express Inventory as a percentage of current assets.

Name the identity in words: Inventory share of current assets = Inventory ÷ current assets.

From the extract, Inventory = 107 and current assets = 338. Plug the figures step by step:

$$
Share = \frac{\text{Inventory}}{\text{current assets}}
$$

$$
Share = \frac{107}{338}
$$

$$
Share = 31.7\%
$$

Threshold: more than 47.1%. Actual 31.7%.

Reading the arithmetic against the claim: actual share 31.7% does not match ''more than 47.1%'' so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.5.026' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Asset turnover shows how many times revenue covers average total assets over the year.

Name the identity in words: asset turnover = revenue ÷ average total assets.

$$
\text{Avg assets} = \frac{830 + 1,039}{2} = 934.5
$$

$$
AT = \frac{1,252}{934.5} = 1.3398
$$

Claimed above 1.06. Actual 1.34.

Reading the arithmetic against the claim: asset turnover 1.34 versus ''above 1.06'' so the statement holds.

The statement is true.', 'FALSE — Collection days convert receivables turnover into an approximate outstanding period.

Name the identity in words: collection days ≈ 365 ÷ receivables turnover.

$$
RT = \frac{1,252}{114} = 10.9825
$$

$$
\text{Days} = \frac{365}{10.9825} = 33.2
$$

Threshold: more than 43 days. Actual 33 days.

Reading the arithmetic against the claim: collection days 33 do not exceed 43 so the statement does not hold.

The statement is false.', 'FALSE — Average inventory and average assets are midpoints of the beginning and ending balances on the extract.

Name the identity in words: average-inventory share = average inventory ÷ average total assets.

$$
\text{Avg inventory} = \frac{158 + 195}{2} = 176.5
$$

$$
\text{Avg assets} = \frac{830 + 1,039}{2} = 934.5
$$

$$
\frac{176.5}{934.5} = 18.9\%
$$

Threshold: less than 13.4%. Actual 18.9%.

Reading the arithmetic against the claim: the share is 18.9% versus ''less than 13.4%'' so the statement does not hold.

The statement is false.', 'FALSE — Cost of sales as a share of revenue is the COS-to-revenue ratio.

Name the identity in words: COS share = cost of sales ÷ revenue.

From the extract, cost of sales = 795 and revenue = 1,252. Plug the figures step by step:

$$
COS\% = \frac{\text{cost of sales}}{\text{revenue}}
$$

$$
COS\% = \frac{795}{1,252}
$$

$$
COS\% = 63.5\%
$$

Threshold: more than 68%. Actual 63.5%.

Reading the arithmetic against the claim: COS share 63.5% does not exceed 68% so the statement does not hold.

The statement is false.', 'TRUE — Inventory turnover relates cost of sales to average inventory held.

Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\text{Avg inventory} = \frac{158 + 195}{2} = 176.5
$$

$$
IT = \frac{795}{176.5} = 4.5042
$$

Claimed below 6.15. Actual 4.50.

Reading the arithmetic against the claim: inventory turnover 4.50 versus ''below 6.15'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.027' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Asset turnover shows how many times revenue covers average total assets over the year.

Name the identity in words: asset turnover = revenue ÷ average total assets.

$$
\text{Avg assets} = \frac{900 + 961}{2} = 930.5
$$

$$
AT = \frac{1,249}{930.5} = 1.3423
$$

Claimed above 1.23. Actual 1.34.

Reading the arithmetic against the claim: asset turnover 1.34 versus ''above 1.23'' so the statement holds.

The statement is true.', 'TRUE — Inventory turnover relates cost of sales to average inventory held.

Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\text{Avg inventory} = \frac{145 + 178}{2} = 161.5
$$

$$
IT = \frac{783}{161.5} = 4.8483
$$

Claimed below 5.8. Actual 4.85.

Reading the arithmetic against the claim: inventory turnover 4.85 versus ''below 5.8'' so the statement holds.

The statement is true.', 'TRUE — Receivables turnover shows how many times revenue covers average trade receivables.

Name the identity in words: receivables turnover = revenue ÷ average trade receivables.

$$
\text{Avg receivables} = \frac{110 + 121}{2} = 115.5
$$

$$
RT = \frac{1,249}{115.5} = 10.8139
$$

Threshold: exceeds 10.76. Actual 10.81.

Reading the arithmetic against the claim: receivables turnover 10.81 exceeds 10.76 so the statement holds.

The statement is true.', 'TRUE — Inventory turnover = cost of sales ÷ average inventory; a higher figure means stock moves faster and ties up less cash.

Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\text{Avg inventory} = \frac{145 + 178}{2} = 161.5
$$

$$
IT = \frac{783}{161.5} = 4.85
$$

That reading matches the definition used in the claim.

Reading the arithmetic against the claim: inventory turnover is about 4.85, consistent with the stated interpretation so the statement holds.

The statement is true.', 'TRUE — Revenue is read directly from the extract and compared with the stated euro-thousand threshold — a level check, not a ratio.

From the extract:

$$
\text{Revenue} = €1,249\text{ thousand}
$$

The statement claims revenue exceeds €1,145 thousand. Actual revenue is €1,249 thousand, which exceeds that level.

Reading the arithmetic against the claim: revenue €1,249k exceeds €1,145k so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.028' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 273 + 145 + 45 = 463
$$

$$
CL = 80 + 48 = 128
$$

$$
\text{Current ratio} = \frac{463}{128} = 3.6172
$$

Claimed: exceeds 1.55. Actual 3.62.

Reading the arithmetic against the claim: actual current ratio 3.62 versus ''exceeds 1.55'' so the statement holds.

The statement is true.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 882 and total assets = 1,347. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{882}{1,347}
$$

$$
ER = 65.5\%
$$

Claimed: is below 28.7%. Actual 65.5%.

Reading the arithmetic against the claim: actual equity ratio 65.5% does not match ''is below 28.7%'' so the statement does not hold.

The statement is false.', 'FALSE — The debt ratio places debt against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: debt ratio = debt ÷ total assets.

From the extract, debt = 465 and total assets = 1,347. Plug the figures step by step:

$$
DR = \frac{\text{debt}}{\text{total assets}}
$$

$$
DR = \frac{465}{1,347}
$$

$$
DR = 34.5\%
$$

Claimed: exceeds 76.4%. Actual 34.5%.

Reading the arithmetic against the claim: actual debt ratio 34.5% does not match ''exceeds 76.4%'' so the statement does not hold.

The statement is false.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 463 and current liabilities total 128:

$$
WC = CA - CL
$$

$$
CA = 463, \quad CL = 128
$$

$$
WC = 463 - 128 = 335
$$

The statement cites working capital of €335 thousand and that it is positive. Calculated WC is 335, which is positive.

Reading the arithmetic against the claim: WC = 335 is positive as claimed so the statement holds.

The statement is true.', 'FALSE — This is a composition claim: express Buildings as a percentage of total assets.

Name the identity in words: Buildings share of total assets = Buildings ÷ total assets.

From the extract, Buildings = 485 and total assets = 1,347. Plug the figures step by step:

$$
Share = \frac{\text{Buildings}}{\text{total assets}}
$$

$$
Share = \frac{485}{1,347}
$$

$$
Share = 36.0\%
$$

Threshold: more than 50.7%. Actual 36.0%.

Reading the arithmetic against the claim: actual share 36.0% does not match ''more than 50.7%'' so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.5.029' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Acid-Test Liquidity Check in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Return on equity for a supermarket chain relates the profit before interest and tax generated during the period to the equity that owners have invested in the business."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "The Acid-Test Liquidity Check in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "A rising debt ratio always reduces financial risk for the owners of a business regardless of how the additional funds are used."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "The Acid-Test Liquidity Check in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Financial statement analysis is concerned only with profitability and has no established framework for examining liquidity, efficiency or structure."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Acid-Test Liquidity Check in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A return on capital employed figure for a supermarket chain carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Acid-Test Liquidity Check in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Asset turnover for a supermarket chain relates revenue earned during the period to the average total assets employed to generate that revenue."

The statement is true.'] WHERE case_id = 'CASE 6.5.030' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Short-Term Borrowing and Working Capital in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The equity ratio for a supermarket chain expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The claim states: If a supermarket chain draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken. The reason given — current liabilities rise. — fits the chapter rule. Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding.

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Short-Term Borrowing and Working Capital in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Working capital for a consulting firm is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Short-Term Borrowing and Working Capital in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A consulting firm is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Short-Term Borrowing and Working Capital in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The current ratio for a consulting firm sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations."

The statement is true.'] WHERE case_id = 'CASE 6.5.031' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Short-Term Borrowing and Working Capital Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Return on equity for a consulting firm relates the profit before interest and tax generated during the period to the equity that owners have invested in the business."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Short-Term Borrowing and Working Capital Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A return on capital employed figure for a consulting firm carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Short-Term Borrowing and Working Capital Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Asset turnover for a consulting firm relates revenue earned during the period to the average total assets employed to generate that revenue."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Short-Term Borrowing and Working Capital Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The equity ratio for a consulting firm expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The claim states: If a consulting firm draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken. The reason given — current liabilities rise. — fits the chapter rule. Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding.

The statement is true.'] WHERE case_id = 'CASE 6.5.032' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Short-Term Borrowing and Working Capital for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Liquidity analysis is primarily concerned with long-term profitability rather than whether short-term obligations can be met."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Short-Term Borrowing and Working Capital for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Profitability analysis judges profit in absolute currency terms alone, without ever relating it to equity or capital employed."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Short-Term Borrowing and Working Capital for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Working capital for a manufacturer is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Short-Term Borrowing and Working Capital for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Financial efficiency analysis has nothing to do with how assets are used to generate revenue."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Short-Term Borrowing and Working Capital for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Financial structure analysis focuses exclusively on inventory levels rather than the balance between equity and borrowed funds."

The statement is false.'] WHERE case_id = 'CASE 6.5.033' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Inventory turnover relates cost of sales to average inventory held.

Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\text{Avg inventory} = \frac{169 + 179}{2} = 174
$$

$$
IT = \frac{674}{174} = 3.8736
$$

Claimed below 6.87. Actual 3.87.

Reading the arithmetic against the claim: inventory turnover 3.87 versus ''below 6.87'' so the statement holds.

The statement is true.', 'FALSE — Asset turnover shows how many times revenue covers average total assets over the year.

Name the identity in words: asset turnover = revenue ÷ average total assets.

$$
\text{Avg assets} = \frac{823 + 1,028}{2} = 925.5
$$

$$
AT = \frac{1,019}{925.5} = 1.1010
$$

Claimed above 1.48. Actual 1.10.

Reading the arithmetic against the claim: asset turnover 1.10 versus ''above 1.48'' so the statement does not hold.

The statement is false.', 'TRUE — Inventory turnover = cost of sales ÷ average inventory; a higher figure means stock moves faster and ties up less cash.

Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\text{Avg inventory} = \frac{169 + 179}{2} = 174
$$

$$
IT = \frac{674}{174} = 3.87
$$

That reading matches the definition used in the claim.

Reading the arithmetic against the claim: inventory turnover is about 3.87, consistent with the stated interpretation so the statement holds.

The statement is true.', 'TRUE — Revenue is read directly from the extract and compared with the stated euro-thousand threshold — a level check, not a ratio.

From the extract:

$$
\text{Revenue} = €1,019\text{ thousand}
$$

The statement claims revenue exceeds €999 thousand. Actual revenue is €1,019 thousand, which exceeds that level.

Reading the arithmetic against the claim: revenue €1,019k exceeds €999k so the statement holds.

The statement is true.', 'FALSE — Receivables turnover shows how many times revenue covers average trade receivables.

Name the identity in words: receivables turnover = revenue ÷ average trade receivables.

$$
\text{Avg receivables} = \frac{135 + 107}{2} = 121
$$

$$
RT = \frac{1,019}{121} = 8.4215
$$

Threshold: exceeds 10.4. Actual 8.42.

Reading the arithmetic against the claim: receivables turnover 8.42 does not exceed 10.4 so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.5.034' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 274 and current liabilities total 224:

$$
WC = CA - CL
$$

$$
CA = 274, \quad CL = 224
$$

$$
WC = 274 - 224 = 50
$$

The statement cites working capital of €50 thousand and that it is positive. Calculated WC is 50, which is positive.

Reading the arithmetic against the claim: WC = 50 is positive as claimed so the statement holds.

The statement is true.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 586 and total assets = 1,157. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{586}{1,157}
$$

$$
ER = 50.6\%
$$

Claimed: is below 16.6%. Actual 50.6%.

Reading the arithmetic against the claim: actual equity ratio 50.6% does not match ''is below 16.6%'' so the statement does not hold.

The statement is false.', 'FALSE — The debt ratio places debt against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: debt ratio = debt ÷ total assets.

From the extract, debt = 571 and total assets = 1,157. Plug the figures step by step:

$$
DR = \frac{\text{debt}}{\text{total assets}}
$$

$$
DR = \frac{571}{1,157}
$$

$$
DR = 49.4\%
$$

Claimed: exceeds 51.3%. Actual 49.4%.

Reading the arithmetic against the claim: actual debt ratio 49.4% does not match ''exceeds 51.3%'' so the statement does not hold.

The statement is false.', 'FALSE — This is a composition claim: express Buildings as a percentage of total assets.

Name the identity in words: Buildings share of total assets = Buildings ÷ total assets.

From the extract, Buildings = 482 and total assets = 1,157. Plug the figures step by step:

$$
Share = \frac{\text{Buildings}}{\text{total assets}}
$$

$$
Share = \frac{482}{1,157}
$$

$$
Share = 41.7\%
$$

Threshold: more than 52.2%. Actual 41.7%.

Reading the arithmetic against the claim: actual share 41.7% does not match ''more than 52.2%'' so the statement does not hold.

The statement is false.', 'TRUE — This is a composition claim: express Trade receivables as a percentage of current assets.

Name the identity in words: Trade receivables share of current assets = Trade receivables ÷ current assets.

From the extract, Trade receivables = 100 and current assets = 274. Plug the figures step by step:

$$
Share = \frac{\text{Trade receivables}}{\text{current assets}}
$$

$$
Share = \frac{100}{274}
$$

$$
Share = 36.5\%
$$

Threshold: less than 47.9%. Actual 36.5%.

Reading the arithmetic against the claim: actual share 36.5% matches ''less than 47.9%'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.035' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Collection days convert receivables turnover into an approximate outstanding period.

Name the identity in words: collection days ≈ 365 ÷ receivables turnover.

$$
RT = \frac{1,043}{107} = 9.7477
$$

$$
\text{Days} = \frac{365}{9.7477} = 37.4
$$

Threshold: more than 50 days. Actual 37 days.

Reading the arithmetic against the claim: collection days 37 do not exceed 50 so the statement does not hold.

The statement is false.', 'FALSE — Average inventory and average assets are midpoints of the beginning and ending balances on the extract.

Name the identity in words: average-inventory share = average inventory ÷ average total assets.

$$
\text{Avg inventory} = \frac{170 + 197}{2} = 183.5
$$

$$
\text{Avg assets} = \frac{813 + 961}{2} = 887
$$

$$
\frac{183.5}{887} = 20.7\%
$$

Threshold: less than 17.5%. Actual 20.7%.

Reading the arithmetic against the claim: the share is 20.7% versus ''less than 17.5%'' so the statement does not hold.

The statement is false.', 'TRUE — Inventory turnover relates cost of sales to average inventory held.

Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\text{Avg inventory} = \frac{170 + 197}{2} = 183.5
$$

$$
IT = \frac{677}{183.5} = 3.6894
$$

Claimed below 6.78. Actual 3.69.

Reading the arithmetic against the claim: inventory turnover 3.69 versus ''below 6.78'' so the statement holds.

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Turnover and Liquidity Extract 36". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Inventory grew by more than 31.4% between Year 1 and Year 2."

The statement is false.', 'FALSE — Receivables growth compares ending with beginning trade receivables.

Name the identity in words: growth = (ending − beginning) ÷ beginning.

$$
R_{0} = 111, \quad R_{1} = 103
$$

$$
\frac{103 - 111}{111} = -7.2\%
$$

Threshold: more than 13.4%. Actual -7.2%.

Reading the arithmetic against the claim: growth -7.2% does not exceed 13.4% so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.5.036' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 219 + 99 + 91 = 409
$$

$$
CL = 120 + 48 = 168
$$

$$
\text{Current ratio} = \frac{409}{168} = 2.4345
$$

Claimed: is below 1.07. Actual 2.43.

Reading the arithmetic against the claim: actual current ratio 2.43 versus ''is below 1.07'' so the statement does not hold.

The statement is false.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 567 and total assets = 1,056. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{567}{1,056}
$$

$$
ER = 53.7\%
$$

Claimed: is below 41.1%. Actual 53.7%.

Reading the arithmetic against the claim: actual equity ratio 53.7% does not match ''is below 41.1%'' so the statement does not hold.

The statement is false.', 'FALSE — The debt ratio places debt against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: debt ratio = debt ÷ total assets.

From the extract, debt = 489 and total assets = 1,056. Plug the figures step by step:

$$
DR = \frac{\text{debt}}{\text{total assets}}
$$

$$
DR = \frac{489}{1,056}
$$

$$
DR = 46.3\%
$$

Claimed: exceeds 64.2%. Actual 46.3%.

Reading the arithmetic against the claim: actual debt ratio 46.3% does not match ''exceeds 64.2%'' so the statement does not hold.

The statement is false.', 'FALSE — This is a composition claim: express Buildings as a percentage of total assets.

Name the identity in words: Buildings share of total assets = Buildings ÷ total assets.

From the extract, Buildings = 309 and total assets = 1,056. Plug the figures step by step:

$$
Share = \frac{\text{Buildings}}{\text{total assets}}
$$

$$
Share = \frac{309}{1,056}
$$

$$
Share = 29.3\%
$$

Threshold: more than 42.5%. Actual 29.3%.

Reading the arithmetic against the claim: actual share 29.3% does not match ''more than 42.5%'' so the statement does not hold.

The statement is false.', 'TRUE — The acid-test (quick) ratio is a stricter liquidity test: inventory is removed from current assets before dividing by current liabilities.

Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = 409, \quad \text{Inventory} = 219, \quad CL = 168
$$

$$
CA - \text{Inventory} = 409 - 219 = 190
$$

$$
\text{Acid-test} = \frac{190}{168} = 1.1310
$$

Threshold: more than 0.92. Actual 1.13.

Reading the arithmetic against the claim: acid-test 1.13 is more than 0.92 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.037' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 821 and total assets = 1,301. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{821}{1,301}
$$

$$
ER = 63.1\%
$$

Claimed: is below 34.9%. Actual 63.1%.

Reading the arithmetic against the claim: actual equity ratio 63.1% does not match ''is below 34.9%'' so the statement does not hold.

The statement is false.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 436 and current liabilities total 152:

$$
WC = CA - CL
$$

$$
CA = 436, \quad CL = 152
$$

$$
WC = 436 - 152 = 284
$$

The statement cites working capital of €284 thousand and that it is positive. Calculated WC is 284, which is positive.

Reading the arithmetic against the claim: WC = 284 is positive as claimed so the statement holds.

The statement is true.', 'FALSE — This is a composition claim: express Cash and cash equivalents as a percentage of current assets.

Name the identity in words: Cash and cash equivalents share of current assets = Cash and cash equivalents ÷ current assets.

From the extract, Cash and cash equivalents = 112 and current assets = 436. Plug the figures step by step:

$$
Share = \frac{\text{Cash and cash equivalents}}{\text{current assets}}
$$

$$
Share = \frac{112}{436}
$$

$$
Share = 25.7\%
$$

Threshold: more than 31%. Actual 25.7%.

Reading the arithmetic against the claim: actual share 25.7% does not match ''more than 31%'' so the statement does not hold.

The statement is false.', 'FALSE — Borrowed funds are liabilities; equity is the owners'' residual interest.

A bank loan creates an obligation to a lender and cannot be classified as equity.

Using the stem facts: "The long-term bank loan of €244 thousand should be classified within equity rather than liabilities."

Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding.

The statement is false.', 'FALSE — Bank overdrafts are current liabilities.

Even if renewed in practice, overdrafts are presented as current, not with long-term debt.

Using the stem facts: "The bank overdraft of €35 thousand belongs under non-current liabilities because overdrafts usually run for several years."

Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding.

The statement is false.'] WHERE case_id = 'CASE 6.5.038' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Asset turnover shows how many times revenue covers average total assets over the year.

Name the identity in words: asset turnover = revenue ÷ average total assets.

$$
\text{Avg assets} = \frac{761 + 1,015}{2} = 888
$$

$$
AT = \frac{1,177}{888} = 1.3255
$$

Claimed above 1.19. Actual 1.33.

Reading the arithmetic against the claim: asset turnover 1.33 versus ''above 1.19'' so the statement holds.

The statement is true.', 'TRUE — Inventory turnover relates cost of sales to average inventory held.

Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\text{Avg inventory} = \frac{128 + 160}{2} = 144
$$

$$
IT = \frac{793}{144} = 5.5069
$$

Claimed below 7.42. Actual 5.51.

Reading the arithmetic against the claim: inventory turnover 5.51 versus ''below 7.42'' so the statement holds.

The statement is true.', 'TRUE — Average inventory and average assets are midpoints of the beginning and ending balances on the extract.

Name the identity in words: average-inventory share = average inventory ÷ average total assets.

$$
\text{Avg inventory} = \frac{128 + 160}{2} = 144
$$

$$
\text{Avg assets} = \frac{761 + 1,015}{2} = 888
$$

$$
\frac{144}{888} = 16.2\%
$$

Threshold: less than 16.3%. Actual 16.2%.

Reading the arithmetic against the claim: the share is 16.2% versus ''less than 16.3%'' so the statement holds.

The statement is true.', 'FALSE — Receivables turnover shows how many times revenue covers average trade receivables.

Name the identity in words: receivables turnover = revenue ÷ average trade receivables.

$$
\text{Avg receivables} = \frac{134 + 110}{2} = 122
$$

$$
RT = \frac{1,177}{122} = 9.6475
$$

Threshold: exceeds 10.99. Actual 9.65.

Reading the arithmetic against the claim: receivables turnover 9.65 does not exceed 10.99 so the statement does not hold.

The statement is false.', 'TRUE — Inventory turnover = cost of sales ÷ average inventory; a higher figure means stock moves faster and ties up less cash.

Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\text{Avg inventory} = \frac{128 + 160}{2} = 144
$$

$$
IT = \frac{793}{144} = 5.51
$$

That reading matches the definition used in the claim.

Reading the arithmetic against the claim: inventory turnover is about 5.51, consistent with the stated interpretation so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.039' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Short-Term Borrowing and Working Capital Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A manufacturer is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Short-Term Borrowing and Working Capital Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The current ratio for a manufacturer sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Short-Term Borrowing and Working Capital Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Return on equity for a manufacturer relates the profit before interest and tax generated during the period to the equity that owners have invested in the business."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Short-Term Borrowing and Working Capital Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Comparing a business''s ratios with unrelated competitors in a completely different industry always produces the most reliable benchmark."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Short-Term Borrowing and Working Capital Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Tracking the same ratio for a business over several years reveals nothing beyond what a single year''s figure already shows."

The statement is false.'] WHERE case_id = 'CASE 6.5.040' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 113 + 64 + 91 = 268
$$

$$
CL = 96 + 50 = 146
$$

$$
\text{Current ratio} = \frac{268}{146} = 1.8356
$$

Claimed: is below 0.87. Actual 1.84.

Reading the arithmetic against the claim: actual current ratio 1.84 versus ''is below 0.87'' so the statement does not hold.

The statement is false.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 520 and total assets = 1,094. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{520}{1,094}
$$

$$
ER = 47.5\%
$$

Claimed: is below 36.9%. Actual 47.5%.

Reading the arithmetic against the claim: actual equity ratio 47.5% does not match ''is below 36.9%'' so the statement does not hold.

The statement is false.', 'FALSE — The debt ratio places debt against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: debt ratio = debt ÷ total assets.

From the extract, debt = 574 and total assets = 1,094. Plug the figures step by step:

$$
DR = \frac{\text{debt}}{\text{total assets}}
$$

$$
DR = \frac{574}{1,094}
$$

$$
DR = 52.5\%
$$

Claimed: exceeds 54.2%. Actual 52.5%.

Reading the arithmetic against the claim: actual debt ratio 52.5% does not match ''exceeds 54.2%'' so the statement does not hold.

The statement is false.', 'TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 113 + 64 + 91 = 268
$$

$$
CL = 96 + 50 = 146
$$

$$
\text{Current ratio} = \frac{268}{146} = 1.8356
$$

Claimed: exceeds 1.68. Actual 1.84.

Reading the arithmetic against the claim: actual current ratio 1.84 versus ''exceeds 1.68'' so the statement holds.

The statement is true.', 'FALSE — This is a composition claim: express Buildings as a percentage of total assets.

Name the identity in words: Buildings share of total assets = Buildings ÷ total assets.

From the extract, Buildings = 493 and total assets = 1,094. Plug the figures step by step:

$$
Share = \frac{\text{Buildings}}{\text{total assets}}
$$

$$
Share = \frac{493}{1,094}
$$

$$
Share = 45.1\%
$$

Threshold: more than 55.6%. Actual 45.1%.

Reading the arithmetic against the claim: actual share 45.1% does not match ''more than 55.6%'' so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.5.041' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Average inventory and average assets are midpoints of the beginning and ending balances on the extract.

Name the identity in words: average-inventory share = average inventory ÷ average total assets.

$$
\text{Avg inventory} = \frac{139 + 177}{2} = 158
$$

$$
\text{Avg assets} = \frac{846 + 1,049}{2} = 947.5
$$

$$
\frac{158}{947.5} = 16.7\%
$$

Threshold: less than 14.7%. Actual 16.7%.

Reading the arithmetic against the claim: the share is 16.7% versus ''less than 14.7%'' so the statement does not hold.

The statement is false.', 'TRUE — Asset turnover shows how many times revenue covers average total assets over the year.

Name the identity in words: asset turnover = revenue ÷ average total assets.

$$
\text{Avg assets} = \frac{846 + 1,049}{2} = 947.5
$$

$$
AT = \frac{1,212}{947.5} = 1.2792
$$

Claimed above 1.09. Actual 1.28.

Reading the arithmetic against the claim: asset turnover 1.28 versus ''above 1.09'' so the statement holds.

The statement is true.', 'FALSE — Cost of sales as a share of revenue is the COS-to-revenue ratio.

Name the identity in words: COS share = cost of sales ÷ revenue.

From the extract, cost of sales = 811 and revenue = 1,212. Plug the figures step by step:

$$
COS\% = \frac{\text{cost of sales}}{\text{revenue}}
$$

$$
COS\% = \frac{811}{1,212}
$$

$$
COS\% = 66.9\%
$$

Threshold: more than 70.6%. Actual 66.9%.

Reading the arithmetic against the claim: COS share 66.9% does not exceed 70.6% so the statement does not hold.

The statement is false.', 'FALSE — Receivables growth compares ending with beginning trade receivables.

Name the identity in words: growth = (ending − beginning) ÷ beginning.

$$
R_{0} = 129, \quad R_{1} = 150
$$

$$
\frac{150 - 129}{129} = 16.3\%
$$

Threshold: more than 17%. Actual 16.3%.

Reading the arithmetic against the claim: growth 16.3% does not exceed 17% so the statement does not hold.

The statement is false.', 'TRUE — Inventory turnover relates cost of sales to average inventory held.

Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\text{Avg inventory} = \frac{139 + 177}{2} = 158
$$

$$
IT = \frac{811}{158} = 5.1329
$$

Claimed below 6.73. Actual 5.13.

Reading the arithmetic against the claim: inventory turnover 5.13 versus ''below 6.73'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.042' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Short-Term Borrowing and Working Capital in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Benchmarks drawn from any industry can be applied to any other industry without adjustment and will always remain reliable."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Short-Term Borrowing and Working Capital in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A return on capital employed figure for a manufacturer carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Short-Term Borrowing and Working Capital in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "A rounded assessment of a business can rely entirely on a single liquidity ratio without any need to consider profitability, efficiency or structure."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Short-Term Borrowing and Working Capital in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Return on equity and return on capital employed are calculated in exactly the same way and always produce identical results for the same business."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Short-Term Borrowing and Working Capital in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Inventory turnover and asset turnover must always move in the same direction within a given year for any business."

The statement is false.'] WHERE case_id = 'CASE 6.5.043' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Receivables turnover shows how many times revenue covers average trade receivables.

Name the identity in words: receivables turnover = revenue ÷ average trade receivables.

$$
\text{Avg receivables} = \frac{96 + 127}{2} = 111.5
$$

$$
RT = \frac{1,108}{111.5} = 9.9372
$$

Threshold: exceeds 9.96. Actual 9.94.

Reading the arithmetic against the claim: receivables turnover 9.94 does not exceed 9.96 so the statement does not hold.

The statement is false.', 'TRUE — Asset turnover shows how many times revenue covers average total assets over the year.

Name the identity in words: asset turnover = revenue ÷ average total assets.

$$
\text{Avg assets} = \frac{886 + 967}{2} = 926.5
$$

$$
AT = \frac{1,108}{926.5} = 1.1959
$$

Claimed above 1.05. Actual 1.20.

Reading the arithmetic against the claim: asset turnover 1.20 versus ''above 1.05'' so the statement holds.

The statement is true.', 'FALSE — Collection days convert receivables turnover into an approximate outstanding period.

Name the identity in words: collection days ≈ 365 ÷ receivables turnover.

$$
RT = \frac{1,108}{111.5} = 9.9372
$$

$$
\text{Days} = \frac{365}{9.9372} = 36.7
$$

Threshold: more than 39 days. Actual 37 days.

Reading the arithmetic against the claim: collection days 37 do not exceed 39 so the statement does not hold.

The statement is false.', 'TRUE — Inventory turnover relates cost of sales to average inventory held.

Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\text{Avg inventory} = \frac{134 + 158}{2} = 146
$$

$$
IT = \frac{775}{146} = 5.3082
$$

Claimed below 6.79. Actual 5.31.

Reading the arithmetic against the claim: inventory turnover 5.31 versus ''below 6.79'' so the statement holds.

The statement is true.', 'TRUE — Average inventory and average assets are midpoints of the beginning and ending balances on the extract.

Name the identity in words: average-inventory share = average inventory ÷ average total assets.

$$
\text{Avg inventory} = \frac{134 + 158}{2} = 146
$$

$$
\text{Avg assets} = \frac{886 + 967}{2} = 926.5
$$

$$
\frac{146}{926.5} = 15.8\%
$$

Threshold: less than 15.9%. Actual 15.8%.

Reading the arithmetic against the claim: the share is 15.8% versus ''less than 15.9%'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.044' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — This is a composition claim: express Trade receivables as a percentage of current assets.

Name the identity in words: Trade receivables share of current assets = Trade receivables ÷ current assets.

From the extract, Trade receivables = 80 and current assets = 227. Plug the figures step by step:

$$
Share = \frac{\text{Trade receivables}}{\text{current assets}}
$$

$$
Share = \frac{80}{227}
$$

$$
Share = 35.2\%
$$

Threshold: less than 46%. Actual 35.2%.

Reading the arithmetic against the claim: actual share 35.2% matches ''less than 46%'' so the statement holds.

The statement is true.', 'TRUE — Inventory is held for sale or for consumption in the operating cycle.

On the balance sheet that places inventory among current assets. It is not an intangible (no physical stock for sale) and not a non-current operating asset (those are used in the business beyond one year rather than turned over as stock).

Applied to this stem: "Inventory of €111 thousand is correctly classified as a current asset rather than a non-current intangible asset."

The statement is true.', 'TRUE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 417 and total assets = 969. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{417}{969}
$$

$$
ER = 43.0\%
$$

Claimed: exceeds 34%. Actual 43.0%.

Reading the arithmetic against the claim: actual equity ratio 43.0% matches ''exceeds 34%'' so the statement holds.

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Liquidity From the Balance Sheet 45". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Total assets of €969 thousand equal total equity plus total liabilities."

The statement is true.', 'TRUE — The acid-test excludes inventory from current assets before dividing by current liabilities.

Leaving inventory out makes the quick ratio less than or equal to the current ratio, so it is the more conservative liquidity test on the same balance sheet.

The statement is true.'] WHERE case_id = 'CASE 6.5.045' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Return on Equity Explained in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Asset turnover for a manufacturer relates revenue earned during the period to the average total assets employed to generate that revenue."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Return on Equity Explained in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The equity ratio for a manufacturer expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Return on Equity Explained in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Working capital for a supermarket chain is calculated by subtracting current assets from current liabilities."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Return on Equity Explained in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "A supermarket chain reporting negative working capital always holds more cash than it needs for its daily operations."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Return on Equity Explained in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "The acid-test ratio for a supermarket chain includes inventory within current assets before comparing the total with current liabilities."

The statement is false.'] WHERE case_id = 'CASE 6.5.046' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Return on Equity Explained Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The debt ratio for a manufacturer expresses the proportion of total assets financed through liabilities rather than through owners'' equity."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The claim states: If a manufacturer draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken. The reason given — current liabilities rise. — fits the chapter rule. Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding.

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Return on Equity Explained Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Working capital for a construction group is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Return on Equity Explained Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A construction group is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Return on Equity Explained Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The current ratio for a construction group sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations."

The statement is true.'] WHERE case_id = 'CASE 6.5.047' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Asset turnover shows how many times revenue covers average total assets over the year.

Name the identity in words: asset turnover = revenue ÷ average total assets.

$$
\text{Avg assets} = \frac{847 + 983}{2} = 915
$$

$$
AT = \frac{1,223}{915} = 1.3366
$$

Claimed above 1.4. Actual 1.34.

Reading the arithmetic against the claim: asset turnover 1.34 versus ''above 1.4'' so the statement does not hold.

The statement is false.', 'FALSE — Collection days convert receivables turnover into an approximate outstanding period.

Name the identity in words: collection days ≈ 365 ÷ receivables turnover.

$$
RT = \frac{1,223}{113.5} = 10.7753
$$

$$
\text{Days} = \frac{365}{10.7753} = 33.9
$$

Threshold: more than 56 days. Actual 34 days.

Reading the arithmetic against the claim: collection days 34 do not exceed 56 so the statement does not hold.

The statement is false.', 'TRUE — Inventory turnover relates cost of sales to average inventory held.

Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\text{Avg inventory} = \frac{156 + 199}{2} = 177.5
$$

$$
IT = \frac{795}{177.5} = 4.4789
$$

Claimed below 6.06. Actual 4.48.

Reading the arithmetic against the claim: inventory turnover 4.48 versus ''below 6.06'' so the statement holds.

The statement is true.', 'TRUE — Receivables turnover shows how many times revenue covers average trade receivables.

Name the identity in words: receivables turnover = revenue ÷ average trade receivables.

$$
\text{Avg receivables} = \frac{96 + 131}{2} = 113.5
$$

$$
RT = \frac{1,223}{113.5} = 10.7753
$$

Threshold: exceeds 9.87. Actual 10.78.

Reading the arithmetic against the claim: receivables turnover 10.78 exceeds 9.87 so the statement holds.

The statement is true.', 'FALSE — Average inventory and average assets are midpoints of the beginning and ending balances on the extract.

Name the identity in words: average-inventory share = average inventory ÷ average total assets.

$$
\text{Avg inventory} = \frac{156 + 199}{2} = 177.5
$$

$$
\text{Avg assets} = \frac{847 + 983}{2} = 915
$$

$$
\frac{177.5}{915} = 19.4\%
$$

Threshold: less than 18.8%. Actual 19.4%.

Reading the arithmetic against the claim: the share is 19.4% versus ''less than 18.8%'' so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.5.048' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Return on Equity Explained for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Return on equity for a construction group relates the profit before interest and tax generated during the period to the equity that owners have invested in the business."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Return on Equity Explained for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "A single return on capital employed figure for a supermarket chain is always fully meaningful on its own, without any need to compare it against other years or similar businesses."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Return on Equity Explained for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Return on equity for a supermarket chain is calculated by comparing the cash balance on the balance sheet with total liabilities rather than relating profit to equity."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Return on Equity Explained for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Inventory turnover for a supermarket chain is calculated by dividing revenue by average inventory rather than by relating cost of sales to average inventory."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Return on Equity Explained for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "The current ratio and the acid-test ratio for a supermarket chain always produce identical results, regardless of how much inventory the business holds."

The statement is false.'] WHERE case_id = 'CASE 6.5.049' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The acid-test (quick) ratio is a stricter liquidity test: inventory is removed from current assets before dividing by current liabilities.

Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = 341, \quad \text{Inventory} = 185, \quad CL = 144
$$

$$
CA - \text{Inventory} = 341 - 185 = 156
$$

$$
\text{Acid-test} = \frac{156}{144} = 1.0833
$$

Threshold: more than 0.98. Actual 1.08.

Reading the arithmetic against the claim: acid-test 1.08 is more than 0.98 so the statement holds.

The statement is true.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 185 + 73 + 83 = 341
$$

$$
CL = 62 + 82 = 144
$$

$$
\text{Current ratio} = \frac{341}{144} = 2.3681
$$

Claimed: is below 0.66. Actual 2.37.

Reading the arithmetic against the claim: actual current ratio 2.37 versus ''is below 0.66'' so the statement does not hold.

The statement is false.', 'TRUE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 364 and total assets = 1,004. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{364}{1,004}
$$

$$
ER = 36.3\%
$$

Claimed: is below 40.5%. Actual 36.3%.

Reading the arithmetic against the claim: actual equity ratio 36.3% matches ''is below 40.5%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Inventory as a percentage of current assets.

Name the identity in words: Inventory share of current assets = Inventory ÷ current assets.

From the extract, Inventory = 185 and current assets = 341. Plug the figures step by step:

$$
Share = \frac{\text{Inventory}}{\text{current assets}}
$$

$$
Share = \frac{185}{341}
$$

$$
Share = 54.3\%
$$

Threshold: more than 37.8%. Actual 54.3%.

Reading the arithmetic against the claim: actual share 54.3% matches ''more than 37.8%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Trade receivables as a percentage of current assets.

Name the identity in words: Trade receivables share of current assets = Trade receivables ÷ current assets.

From the extract, Trade receivables = 73 and current assets = 341. Plug the figures step by step:

$$
Share = \frac{\text{Trade receivables}}{\text{current assets}}
$$

$$
Share = \frac{73}{341}
$$

$$
Share = 21.4\%
$$

Threshold: less than 44.5%. Actual 21.4%.

Reading the arithmetic against the claim: actual share 21.4% matches ''less than 44.5%'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.050' AND tier = 'full';
