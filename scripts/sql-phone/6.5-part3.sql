-- Update expanded explanations for 6.5-part3 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Return on Equity Explained Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A return on capital employed figure for a construction group carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Return on Equity Explained Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Working capital for a consulting firm is calculated by subtracting current assets from current liabilities."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Return on Equity Explained Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Asset turnover for a construction group relates revenue earned during the period to the average total assets employed to generate that revenue."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Return on Equity Explained Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The equity ratio for a construction group expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Return on Equity Explained Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "A consulting firm reporting negative working capital always holds more cash than it needs for its daily operations."

The statement is false.'] WHERE case_id = 'CASE 6.5.051' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Asset turnover shows how many times revenue covers average total assets over the year.

Name the identity in words: asset turnover = revenue ÷ average total assets.

$$
\text{Avg assets} = \frac{774 + 1,049}{2} = 911.5
$$

$$
AT = \frac{1,215}{911.5} = 1.3330
$$

Claimed above 1.01. Actual 1.33.

Reading the arithmetic against the claim: asset turnover 1.33 versus ''above 1.01'' so the statement holds.

The statement is true.', 'TRUE — Collection days convert receivables turnover into an approximate outstanding period.

Name the identity in words: collection days ≈ 365 ÷ receivables turnover.

$$
RT = \frac{1,215}{141} = 8.6170
$$

$$
\text{Days} = \frac{365}{8.6170} = 42.4
$$

Threshold: more than 40 days. Actual 42 days.

Reading the arithmetic against the claim: collection days 42 exceed 40 so the statement holds.

The statement is true.', 'TRUE — Average inventory and average assets are midpoints of the beginning and ending balances on the extract.

Name the identity in words: average-inventory share = average inventory ÷ average total assets.

$$
\text{Avg inventory} = \frac{124 + 169}{2} = 146.5
$$

$$
\text{Avg assets} = \frac{774 + 1,049}{2} = 911.5
$$

$$
\frac{146.5}{911.5} = 16.1\%
$$

Threshold: less than 19.2%. Actual 16.1%.

Reading the arithmetic against the claim: the share is 16.1% versus ''less than 19.2%'' so the statement holds.

The statement is true.', 'TRUE — Inventory turnover = cost of sales ÷ average inventory; a higher figure means stock moves faster and ties up less cash.

Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\text{Avg inventory} = \frac{124 + 169}{2} = 146.5
$$

$$
IT = \frac{818}{146.5} = 5.58
$$

That reading matches the definition used in the claim.

Reading the arithmetic against the claim: inventory turnover is about 5.58, consistent with the stated interpretation so the statement holds.

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Turnover and Liquidity Extract 52". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Inventory grew by more than 17.3% between Year 1 and Year 2."

The statement is true.'] WHERE case_id = 'CASE 6.5.052' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Asset turnover shows how many times revenue covers average total assets over the year.

Name the identity in words: asset turnover = revenue ÷ average total assets.

$$
\text{Avg assets} = \frac{775 + 932}{2} = 853.5
$$

$$
AT = \frac{1,221}{853.5} = 1.4306
$$

Claimed above 1.54. Actual 1.43.

Reading the arithmetic against the claim: asset turnover 1.43 versus ''above 1.54'' so the statement does not hold.

The statement is false.', 'FALSE — Inventory turnover relates cost of sales to average inventory held.

Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\text{Avg inventory} = \frac{156 + 161}{2} = 158.5
$$

$$
IT = \frac{827}{158.5} = 5.2177
$$

Claimed below 4.76. Actual 5.22.

Reading the arithmetic against the claim: inventory turnover 5.22 versus ''below 4.76'' so the statement does not hold.

The statement is false.', 'FALSE — Collection days convert receivables turnover into an approximate outstanding period.

Name the identity in words: collection days ≈ 365 ÷ receivables turnover.

$$
RT = \frac{1,221}{120} = 10.1750
$$

$$
\text{Days} = \frac{365}{10.1750} = 35.9
$$

Threshold: more than 45 days. Actual 36 days.

Reading the arithmetic against the claim: collection days 36 do not exceed 45 so the statement does not hold.

The statement is false.', 'FALSE — Average inventory and average assets are midpoints of the beginning and ending balances on the extract.

Name the identity in words: average-inventory share = average inventory ÷ average total assets.

$$
\text{Avg inventory} = \frac{156 + 161}{2} = 158.5
$$

$$
\text{Avg assets} = \frac{775 + 932}{2} = 853.5
$$

$$
\frac{158.5}{853.5} = 18.6\%
$$

Threshold: less than 12.1%. Actual 18.6%.

Reading the arithmetic against the claim: the share is 18.6% versus ''less than 12.1%'' so the statement does not hold.

The statement is false.', 'TRUE — Receivables turnover shows how many times revenue covers average trade receivables.

Name the identity in words: receivables turnover = revenue ÷ average trade receivables.

$$
\text{Avg receivables} = \frac{119 + 121}{2} = 120
$$

$$
RT = \frac{1,221}{120} = 10.1750
$$

Threshold: exceeds 8.32. Actual 10.18.

Reading the arithmetic against the claim: receivables turnover 10.18 exceeds 8.32 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.053' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 456 and current liabilities total 213:

$$
WC = CA - CL
$$

$$
CA = 456, \quad CL = 213
$$

$$
WC = 456 - 213 = 243
$$

The statement cites working capital of €243 thousand and that it is positive. Calculated WC is 243, which is positive.

Reading the arithmetic against the claim: WC = 243 is positive as claimed so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Inventory as a percentage of current assets.

Name the identity in words: Inventory share of current assets = Inventory ÷ current assets.

From the extract, Inventory = 221 and current assets = 456. Plug the figures step by step:

$$
Share = \frac{\text{Inventory}}{\text{current assets}}
$$

$$
Share = \frac{221}{456}
$$

$$
Share = 48.5\%
$$

Threshold: more than 32.5%. Actual 48.5%.

Reading the arithmetic against the claim: actual share 48.5% matches ''more than 32.5%'' so the statement holds.

The statement is true.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 221 + 179 + 56 = 456
$$

$$
CL = 179 + 34 = 213
$$

$$
\text{Current ratio} = \frac{456}{213} = 2.1408
$$

Claimed: is below 1.17. Actual 2.14.

Reading the arithmetic against the claim: actual current ratio 2.14 versus ''is below 1.17'' so the statement does not hold.

The statement is false.', 'TRUE — This is a composition claim: express Trade receivables as a percentage of current assets.

Name the identity in words: Trade receivables share of current assets = Trade receivables ÷ current assets.

From the extract, Trade receivables = 179 and current assets = 456. Plug the figures step by step:

$$
Share = \frac{\text{Trade receivables}}{\text{current assets}}
$$

$$
Share = \frac{179}{456}
$$

$$
Share = 39.3\%
$$

Threshold: less than 50.6%. Actual 39.3%.

Reading the arithmetic against the claim: actual share 39.3% matches ''less than 50.6%'' so the statement holds.

The statement is true.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 530 and total assets = 1,094. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{530}{1,094}
$$

$$
ER = 48.4\%
$$

Claimed: is below 20.9%. Actual 48.4%.

Reading the arithmetic against the claim: actual equity ratio 48.4% does not match ''is below 20.9%'' so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.5.054' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Return on Equity Explained in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The debt ratio for a construction group expresses the proportion of total assets financed through liabilities rather than through owners'' equity."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The claim states: If a construction group draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken. The reason given — current liabilities rise. — fits the chapter rule. Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding.

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Return on Equity Explained in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "The acid-test ratio for a consulting firm includes inventory within current assets before comparing the total with current liabilities."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Return on Equity Explained in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Working capital for a fashion retailer is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Return on Equity Explained in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A fashion retailer is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account."

The statement is true.'] WHERE case_id = 'CASE 6.5.055' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Return on Capital Employed Explained in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "A single return on capital employed figure for a consulting firm is always fully meaningful on its own, without any need to compare it against other years or similar businesses."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Return on Capital Employed Explained in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Return on equity for a consulting firm is calculated by comparing the cash balance on the balance sheet with total liabilities rather than relating profit to equity."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Return on Capital Employed Explained in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The current ratio for a fashion retailer sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Return on Capital Employed Explained in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Return on equity for a fashion retailer relates the profit before interest and tax generated during the period to the equity that owners have invested in the business."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Return on Capital Employed Explained in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Inventory turnover for a consulting firm is calculated by dividing revenue by average inventory rather than by relating cost of sales to average inventory."

The statement is false.'] WHERE case_id = 'CASE 6.5.056' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Asset turnover shows how many times revenue covers average total assets over the year.

Name the identity in words: asset turnover = revenue ÷ average total assets.

$$
\text{Avg assets} = \frac{771 + 991}{2} = 881
$$

$$
AT = \frac{1,134}{881} = 1.2872
$$

Claimed above 1.1. Actual 1.29.

Reading the arithmetic against the claim: asset turnover 1.29 versus ''above 1.1'' so the statement holds.

The statement is true.', 'FALSE — Receivables turnover shows how many times revenue covers average trade receivables.

Name the identity in words: receivables turnover = revenue ÷ average trade receivables.

$$
\text{Avg receivables} = \frac{110 + 140}{2} = 125
$$

$$
RT = \frac{1,134}{125} = 9.0720
$$

Threshold: exceeds 9.66. Actual 9.07.

Reading the arithmetic against the claim: receivables turnover 9.07 does not exceed 9.66 so the statement does not hold.

The statement is false.', 'TRUE — Inventory turnover relates cost of sales to average inventory held.

Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\text{Avg inventory} = \frac{128 + 193}{2} = 160.5
$$

$$
IT = \frac{719}{160.5} = 4.4798
$$

Claimed below 6.46. Actual 4.48.

Reading the arithmetic against the claim: inventory turnover 4.48 versus ''below 6.46'' so the statement holds.

The statement is true.', 'TRUE — Inventory turnover = cost of sales ÷ average inventory; a higher figure means stock moves faster and ties up less cash.

Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\text{Avg inventory} = \frac{128 + 193}{2} = 160.5
$$

$$
IT = \frac{719}{160.5} = 4.48
$$

That reading matches the definition used in the claim.

Reading the arithmetic against the claim: inventory turnover is about 4.48, consistent with the stated interpretation so the statement holds.

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Asset and Inventory Turnover 57". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Inventory grew by more than 37.4% between Year 1 and Year 2."

The statement is true.'] WHERE case_id = 'CASE 6.5.057' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 124 + 65 + 72 = 261
$$

$$
CL = 178 + 28 = 206
$$

$$
\text{Current ratio} = \frac{261}{206} = 1.2670
$$

Claimed: is below 1.29. Actual 1.27.

Reading the arithmetic against the claim: actual current ratio 1.27 versus ''is below 1.29'' so the statement holds.

The statement is true.', 'TRUE — The debt ratio places debt against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: debt ratio = debt ÷ total assets.

From the extract, debt = 624 and total assets = 907. Plug the figures step by step:

$$
DR = \frac{\text{debt}}{\text{total assets}}
$$

$$
DR = \frac{624}{907}
$$

$$
DR = 68.8\%
$$

Claimed: exceeds 65.2%. Actual 68.8%.

Reading the arithmetic against the claim: actual debt ratio 68.8% matches ''exceeds 65.2%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Buildings as a percentage of total assets.

Name the identity in words: Buildings share of total assets = Buildings ÷ total assets.

From the extract, Buildings = 372 and total assets = 907. Plug the figures step by step:

$$
Share = \frac{\text{Buildings}}{\text{total assets}}
$$

$$
Share = \frac{372}{907}
$$

$$
Share = 41.0\%
$$

Threshold: more than 35.1%. Actual 41.0%.

Reading the arithmetic against the claim: actual share 41.0% matches ''more than 35.1%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Inventory as a percentage of current assets.

Name the identity in words: Inventory share of current assets = Inventory ÷ current assets.

From the extract, Inventory = 124 and current assets = 261. Plug the figures step by step:

$$
Share = \frac{\text{Inventory}}{\text{current assets}}
$$

$$
Share = \frac{124}{261}
$$

$$
Share = 47.5\%
$$

Threshold: more than 40.1%. Actual 47.5%.

Reading the arithmetic against the claim: actual share 47.5% matches ''more than 40.1%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Trade receivables as a percentage of current assets.

Name the identity in words: Trade receivables share of current assets = Trade receivables ÷ current assets.

From the extract, Trade receivables = 65 and current assets = 261. Plug the figures step by step:

$$
Share = \frac{\text{Trade receivables}}{\text{current assets}}
$$

$$
Share = \frac{65}{261}
$$

$$
Share = 24.9\%
$$

Threshold: less than 52.8%. Actual 24.9%.

Reading the arithmetic against the claim: actual share 24.9% matches ''less than 52.8%'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.058' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Return on Capital Employed Explained Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "The current ratio and the acid-test ratio for a consulting firm always produce identical results, regardless of how much inventory the business holds."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Return on Capital Employed Explained Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A return on capital employed figure for a fashion retailer carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Return on Capital Employed Explained Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Working capital for a manufacturer is calculated by subtracting current assets from current liabilities."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Return on Capital Employed Explained Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "A manufacturer reporting negative working capital always holds more cash than it needs for its daily operations."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Return on Capital Employed Explained Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "The acid-test ratio for a manufacturer includes inventory within current assets before comparing the total with current liabilities."

The statement is false.'] WHERE case_id = 'CASE 6.5.059' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The acid-test (quick) ratio is a stricter liquidity test: inventory is removed from current assets before dividing by current liabilities.

Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = 280, \quad \text{Inventory} = 97, \quad CL = 178
$$

$$
CA - \text{Inventory} = 280 - 97 = 183
$$

$$
\text{Acid-test} = \frac{183}{178} = 1.0281
$$

Threshold: more than 1.22. Actual 1.03.

Reading the arithmetic against the claim: acid-test 1.03 is not more than 1.22 so the statement does not hold.

The statement is false.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 310 and total assets = 963. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{310}{963}
$$

$$
ER = 32.2\%
$$

Claimed: is below 28.8%. Actual 32.2%.

Reading the arithmetic against the claim: actual equity ratio 32.2% does not match ''is below 28.8%'' so the statement does not hold.

The statement is false.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 280 and current liabilities total 178:

$$
WC = CA - CL
$$

$$
CA = 280, \quad CL = 178
$$

$$
WC = 280 - 178 = 102
$$

The statement cites working capital of €102 thousand and that it is positive. Calculated WC is 102, which is positive.

Reading the arithmetic against the claim: WC = 102 is positive as claimed so the statement holds.

The statement is true.', 'FALSE — This is a composition claim: express Buildings as a percentage of total assets.

Name the identity in words: Buildings share of total assets = Buildings ÷ total assets.

From the extract, Buildings = 474 and total assets = 963. Plug the figures step by step:

$$
Share = \frac{\text{Buildings}}{\text{total assets}}
$$

$$
Share = \frac{474}{963}
$$

$$
Share = 49.2\%
$$

Threshold: more than 55.3%. Actual 49.2%.

Reading the arithmetic against the claim: actual share 49.2% does not match ''more than 55.3%'' so the statement does not hold.

The statement is false.', 'FALSE — This is a composition claim: express Inventory as a percentage of current assets.

Name the identity in words: Inventory share of current assets = Inventory ÷ current assets.

From the extract, Inventory = 97 and current assets = 280. Plug the figures step by step:

$$
Share = \frac{\text{Inventory}}{\text{current assets}}
$$

$$
Share = \frac{97}{280}
$$

$$
Share = 34.6\%
$$

Threshold: more than 46%. Actual 34.6%.

Reading the arithmetic against the claim: actual share 34.6% does not match ''more than 46%'' so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.5.060' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Receivables turnover shows how many times revenue covers average trade receivables.

Name the identity in words: receivables turnover = revenue ÷ average trade receivables.

$$
\text{Avg receivables} = \frac{120 + 149}{2} = 134.5
$$

$$
RT = \frac{1,036}{134.5} = 7.7026
$$

Threshold: exceeds 10.79. Actual 7.70.

Reading the arithmetic against the claim: receivables turnover 7.70 does not exceed 10.79 so the statement does not hold.

The statement is false.', 'FALSE — Average inventory and average assets are midpoints of the beginning and ending balances on the extract.

Name the identity in words: average-inventory share = average inventory ÷ average total assets.

$$
\text{Avg inventory} = \frac{166 + 167}{2} = 166.5
$$

$$
\text{Avg assets} = \frac{865 + 984}{2} = 924.5
$$

$$
\frac{166.5}{924.5} = 18.0\%
$$

Threshold: less than 16.4%. Actual 18.0%.

Reading the arithmetic against the claim: the share is 18.0% versus ''less than 16.4%'' so the statement does not hold.

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Asset and Inventory Turnover 61". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Inventory grew by more than 30% between Year 1 and Year 2."

The statement is false.', 'FALSE — Cost of sales as a share of revenue is the COS-to-revenue ratio.

Name the identity in words: COS share = cost of sales ÷ revenue.

From the extract, cost of sales = 682 and revenue = 1,036. Plug the figures step by step:

$$
COS\% = \frac{\text{cost of sales}}{\text{revenue}}
$$

$$
COS\% = \frac{682}{1,036}
$$

$$
COS\% = 65.8\%
$$

Threshold: more than 65.9%. Actual 65.8%.

Reading the arithmetic against the claim: COS share 65.8% does not exceed 65.9% so the statement does not hold.

The statement is false.', 'TRUE — Inventory turnover relates cost of sales to average inventory held.

Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\text{Avg inventory} = \frac{166 + 167}{2} = 166.5
$$

$$
IT = \frac{682}{166.5} = 4.0961
$$

Claimed below 4.89. Actual 4.10.

Reading the arithmetic against the claim: inventory turnover 4.10 versus ''below 4.89'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.061' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Return on Capital Employed Explained for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Asset turnover for a fashion retailer relates revenue earned during the period to the average total assets employed to generate that revenue."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Return on Capital Employed Explained for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The equity ratio for a fashion retailer expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The claim states: If a fashion retailer draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken. The reason given — current liabilities rise. — fits the chapter rule. Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding.

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Return on Capital Employed Explained for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Working capital for a utility company is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Return on Capital Employed Explained for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A utility company is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account."

The statement is true.'] WHERE case_id = 'CASE 6.5.062' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Return on Capital Employed Explained Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "A single return on capital employed figure for a manufacturer is always fully meaningful on its own, without any need to compare it against other years or similar businesses."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Return on Capital Employed Explained Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The current ratio for a utility company sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Return on Capital Employed Explained Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Return on equity for a manufacturer is calculated by comparing the cash balance on the balance sheet with total liabilities rather than relating profit to equity."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Return on Capital Employed Explained Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Return on equity for a utility company relates the profit before interest and tax generated during the period to the equity that owners have invested in the business."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Return on Capital Employed Explained Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A return on capital employed figure for a utility company carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry."

The statement is true.'] WHERE case_id = 'CASE 6.5.063' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Return on Capital Employed Explained in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Asset turnover for a utility company relates revenue earned during the period to the average total assets employed to generate that revenue."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Return on Capital Employed Explained in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The equity ratio for a utility company expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The claim states: If a utility company draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken. The reason given — current liabilities rise. — fits the chapter rule. Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding.

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Return on Capital Employed Explained in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Inventory turnover for a manufacturer is calculated by dividing revenue by average inventory rather than by relating cost of sales to average inventory."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Return on Capital Employed Explained in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Working capital for a wholesaler is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital."

The statement is true.'] WHERE case_id = 'CASE 6.5.064' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 265 and current liabilities total 207:

$$
WC = CA - CL
$$

$$
CA = 265, \quad CL = 207
$$

$$
WC = 265 - 207 = 58
$$

The statement cites working capital of €58 thousand and that it is positive. Calculated WC is 58, which is positive.

Reading the arithmetic against the claim: WC = 58 is positive as claimed so the statement holds.

The statement is true.', 'TRUE — The debt ratio places debt against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: debt ratio = debt ÷ total assets.

From the extract, debt = 611 and total assets = 936. Plug the figures step by step:

$$
DR = \frac{\text{debt}}{\text{total assets}}
$$

$$
DR = \frac{611}{936}
$$

$$
DR = 65.3\%
$$

Claimed: exceeds 60.2%. Actual 65.3%.

Reading the arithmetic against the claim: actual debt ratio 65.3% matches ''exceeds 60.2%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Inventory as a percentage of current assets.

Name the identity in words: Inventory share of current assets = Inventory ÷ current assets.

From the extract, Inventory = 138 and current assets = 265. Plug the figures step by step:

$$
Share = \frac{\text{Inventory}}{\text{current assets}}
$$

$$
Share = \frac{138}{265}
$$

$$
Share = 52.1\%
$$

Threshold: more than 40.9%. Actual 52.1%.

Reading the arithmetic against the claim: actual share 52.1% matches ''more than 40.9%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Trade receivables as a percentage of current assets.

Name the identity in words: Trade receivables share of current assets = Trade receivables ÷ current assets.

From the extract, Trade receivables = 87 and current assets = 265. Plug the figures step by step:

$$
Share = \frac{\text{Trade receivables}}{\text{current assets}}
$$

$$
Share = \frac{87}{265}
$$

$$
Share = 32.8\%
$$

Threshold: less than 38.6%. Actual 32.8%.

Reading the arithmetic against the claim: actual share 32.8% matches ''less than 38.6%'' so the statement holds.

The statement is true.', 'TRUE — Inventory is held for sale or for consumption in the operating cycle.

On the balance sheet that places inventory among current assets. It is not an intangible (no physical stock for sale) and not a non-current operating asset (those are used in the business beyond one year rather than turned over as stock).

Applied to this stem: "Inventory of €138 thousand is correctly classified as a current asset rather than a non-current intangible asset."

The statement is true.'] WHERE case_id = 'CASE 6.5.065' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Inventory turnover relates cost of sales to average inventory held.

Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\text{Avg inventory} = \frac{155 + 165}{2} = 160
$$

$$
IT = \frac{652}{160} = 4.0750
$$

Claimed below 5.17. Actual 4.08.

Reading the arithmetic against the claim: inventory turnover 4.08 versus ''below 5.17'' so the statement holds.

The statement is true.', 'FALSE — Asset turnover shows how many times revenue covers average total assets over the year.

Name the identity in words: asset turnover = revenue ÷ average total assets.

$$
\text{Avg assets} = \frac{755 + 1,036}{2} = 895.5
$$

$$
AT = \frac{933}{895.5} = 1.0419
$$

Claimed above 1.26. Actual 1.04.

Reading the arithmetic against the claim: asset turnover 1.04 versus ''above 1.26'' so the statement does not hold.

The statement is false.', 'TRUE — Receivables turnover shows how many times revenue covers average trade receivables.

Name the identity in words: receivables turnover = revenue ÷ average trade receivables.

$$
\text{Avg receivables} = \frac{107 + 108}{2} = 107.5
$$

$$
RT = \frac{933}{107.5} = 8.6791
$$

Threshold: exceeds 7.72. Actual 8.68.

Reading the arithmetic against the claim: receivables turnover 8.68 exceeds 7.72 so the statement holds.

The statement is true.', 'TRUE — Average inventory and average assets are midpoints of the beginning and ending balances on the extract.

Name the identity in words: average-inventory share = average inventory ÷ average total assets.

$$
\text{Avg inventory} = \frac{155 + 165}{2} = 160
$$

$$
\text{Avg assets} = \frac{755 + 1,036}{2} = 895.5
$$

$$
\frac{160}{895.5} = 17.9\%
$$

Threshold: less than 18.7%. Actual 17.9%.

Reading the arithmetic against the claim: the share is 17.9% versus ''less than 18.7%'' so the statement holds.

The statement is true.', 'FALSE — Receivables growth compares ending with beginning trade receivables.

Name the identity in words: growth = (ending − beginning) ÷ beginning.

$$
R_{0} = 107, \quad R_{1} = 108
$$

$$
\frac{108 - 107}{107} = 0.9\%
$$

Threshold: more than 12.3%. Actual 0.9%.

Reading the arithmetic against the claim: growth 0.9% does not exceed 12.3% so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.5.066' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Capital Employed and Long-Term Funds in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A wholesaler is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Capital Employed and Long-Term Funds in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The current ratio for a wholesaler sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Capital Employed and Long-Term Funds in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "The current ratio and the acid-test ratio for a manufacturer always produce identical results, regardless of how much inventory the business holds."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Capital Employed and Long-Term Funds in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Return on equity for a wholesaler relates the profit before interest and tax generated during the period to the equity that owners have invested in the business."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Capital Employed and Long-Term Funds in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A return on capital employed figure for a wholesaler carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry."

The statement is true.'] WHERE case_id = 'CASE 6.5.067' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 215 + 156 + 80 = 451
$$

$$
CL = 228 + 39 = 267
$$

$$
\text{Current ratio} = \frac{451}{267} = 1.6891
$$

Claimed: is below 0.78. Actual 1.69.

Reading the arithmetic against the claim: actual current ratio 1.69 versus ''is below 0.78'' so the statement does not hold.

The statement is false.', 'TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 215 + 156 + 80 = 451
$$

$$
CL = 228 + 39 = 267
$$

$$
\text{Current ratio} = \frac{451}{267} = 1.6891
$$

Claimed: exceeds 1.53. Actual 1.69.

Reading the arithmetic against the claim: actual current ratio 1.69 versus ''exceeds 1.53'' so the statement holds.

The statement is true.', 'FALSE — The acid-test (quick) ratio is a stricter liquidity test: inventory is removed from current assets before dividing by current liabilities.

Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = 451, \quad \text{Inventory} = 215, \quad CL = 267
$$

$$
CA - \text{Inventory} = 451 - 215 = 236
$$

$$
\text{Acid-test} = \frac{236}{267} = 0.8839
$$

Threshold: more than 1.25. Actual 0.88.

Reading the arithmetic against the claim: acid-test 0.88 is not more than 1.25 so the statement does not hold.

The statement is false.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 451 and current liabilities total 267:

$$
WC = CA - CL
$$

$$
CA = 451, \quad CL = 267
$$

$$
WC = 451 - 267 = 184
$$

The statement cites working capital of €184 thousand and that it is positive. Calculated WC is 184, which is positive.

Reading the arithmetic against the claim: WC = 184 is positive as claimed so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Trade receivables as a percentage of current assets.

Name the identity in words: Trade receivables share of current assets = Trade receivables ÷ current assets.

From the extract, Trade receivables = 156 and current assets = 451. Plug the figures step by step:

$$
Share = \frac{\text{Trade receivables}}{\text{current assets}}
$$

$$
Share = \frac{156}{451}
$$

$$
Share = 34.6\%
$$

Threshold: less than 55%. Actual 34.6%.

Reading the arithmetic against the claim: actual share 34.6% matches ''less than 55%'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.068' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — ROCE relates operating result to capital employed: equity plus non-current liabilities.

Name the identity in words: ROCE = operating result ÷ (equity + non-current liabilities).

$$
\text{Capital employed} = 503 + 302 + 67 = 872
$$

$$
ROCE = \frac{184}{872} = 21.1\%
$$

Threshold: exceeds 13.3%. Actual 21.1%.

Reading the arithmetic against the claim: ROCE 21.1% exceeds 13.3% so the statement holds.

The statement is true.', 'FALSE — ROE on this extract is operating result divided by total equity.

Name the identity in words: ROE = operating result ÷ total equity.

From the extract, operating result = 184 and total equity = 503. Plug the figures step by step:

$$
ROE = \frac{\text{operating result}}{\text{total equity}}
$$

$$
ROE = \frac{184}{503}
$$

$$
ROE = 36.6\%
$$

Threshold: exceeds 39.5%. Actual 36.6%.

Reading the arithmetic against the claim: ROE 36.6% does not exceed 39.5% so the statement does not hold.

The statement is false.', 'FALSE — Operating-cash conversion here is cash flow from operating activities as a percentage of operating result.

Name the identity in words: conversion = operating cash flow ÷ operating result.

From the extract, operating cash flow = 208 and operating result = 184. Plug the figures step by step:

$$
Conv = \frac{\text{operating cash flow}}{\text{operating result}}
$$

$$
Conv = \frac{208}{184}
$$

$$
Conv = 113.0\%
$$

Threshold: less than 103.3%. Actual 113.0%.

Reading the arithmetic against the claim: conversion 113.0% is not less than 103.3% so the statement does not hold.

The statement is false.', 'FALSE — This is a composition claim: express Inventory as a percentage of total assets.

Name the identity in words: Inventory share of total assets = Inventory ÷ total assets.

From the extract, Inventory = 84 and total assets = 1,139. Plug the figures step by step:

$$
Share = \frac{\text{Inventory}}{\text{total assets}}
$$

$$
Share = \frac{84}{1,139}
$$

$$
Share = 7.4\%
$$

Threshold: more than 14.2%. Actual 7.4%.

Reading the arithmetic against the claim: actual share 7.4% does not match ''more than 14.2%'' so the statement does not hold.

The statement is false.', 'TRUE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 503 and total assets = 1,139. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{503}{1,139}
$$

$$
ER = 44.2\%
$$

Claimed: exceeds 35.4%. Actual 44.2%.

Reading the arithmetic against the claim: actual equity ratio 44.2% matches ''exceeds 35.4%'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.069' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Capital Employed and Long-Term Funds Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Working capital for a construction group is calculated by subtracting current assets from current liabilities."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Capital Employed and Long-Term Funds Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "A construction group reporting negative working capital always holds more cash than it needs for its daily operations."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Capital Employed and Long-Term Funds Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Asset turnover for a wholesaler relates revenue earned during the period to the average total assets employed to generate that revenue."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Capital Employed and Long-Term Funds Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The equity ratio for a wholesaler expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The claim states: If a wholesaler draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken. The reason given — current liabilities rise. — fits the chapter rule. Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding.

The statement is true.'] WHERE case_id = 'CASE 6.5.070' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Inventory turnover relates cost of sales to average inventory held.

Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\text{Avg inventory} = \frac{155 + 164}{2} = 159.5
$$

$$
IT = \frac{712}{159.5} = 4.4639
$$

Claimed below 5.18. Actual 4.46.

Reading the arithmetic against the claim: inventory turnover 4.46 versus ''below 5.18'' so the statement holds.

The statement is true.', 'TRUE — Receivables turnover shows how many times revenue covers average trade receivables.

Name the identity in words: receivables turnover = revenue ÷ average trade receivables.

$$
\text{Avg receivables} = \frac{101 + 143}{2} = 122
$$

$$
RT = \frac{1,026}{122} = 8.4098
$$

Threshold: exceeds 7.13. Actual 8.41.

Reading the arithmetic against the claim: receivables turnover 8.41 exceeds 7.13 so the statement holds.

The statement is true.', 'TRUE — Collection days convert receivables turnover into an approximate outstanding period.

Name the identity in words: collection days ≈ 365 ÷ receivables turnover.

$$
RT = \frac{1,026}{122} = 8.4098
$$

$$
\text{Days} = \frac{365}{8.4098} = 43.4
$$

Threshold: more than 32 days. Actual 43 days.

Reading the arithmetic against the claim: collection days 43 exceed 32 so the statement holds.

The statement is true.', 'TRUE — Revenue is read directly from the extract and compared with the stated euro-thousand threshold — a level check, not a ratio.

From the extract:

$$
\text{Revenue} = €1,026\text{ thousand}
$$

The statement claims revenue exceeds €965 thousand. Actual revenue is €1,026 thousand, which exceeds that level.

Reading the arithmetic against the claim: revenue €1,026k exceeds €965k so the statement holds.

The statement is true.', 'TRUE — Cost of sales as a share of revenue is the COS-to-revenue ratio.

Name the identity in words: COS share = cost of sales ÷ revenue.

From the extract, cost of sales = 712 and revenue = 1,026. Plug the figures step by step:

$$
COS\% = \frac{\text{cost of sales}}{\text{revenue}}
$$

$$
COS\% = \frac{712}{1,026}
$$

$$
COS\% = 69.4\%
$$

Threshold: more than 65.8%. Actual 69.4%.

Reading the arithmetic against the claim: COS share 69.4% exceeds 65.8% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.071' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 109 + 117 + 63 = 289
$$

$$
CL = 140 + 30 = 170
$$

$$
\text{Current ratio} = \frac{289}{170} = 1.7000
$$

Claimed: exceeds 1.4. Actual 1.70.

Reading the arithmetic against the claim: actual current ratio 1.70 versus ''exceeds 1.4'' so the statement holds.

The statement is true.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 109 + 117 + 63 = 289
$$

$$
CL = 140 + 30 = 170
$$

$$
\text{Current ratio} = \frac{289}{170} = 1.7000
$$

Claimed: is below 0.91. Actual 1.70.

Reading the arithmetic against the claim: actual current ratio 1.70 versus ''is below 0.91'' so the statement does not hold.

The statement is false.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 289 and current liabilities total 170:

$$
WC = CA - CL
$$

$$
CA = 289, \quad CL = 170
$$

$$
WC = 289 - 170 = 119
$$

The statement cites working capital of €119 thousand and that it is positive. Calculated WC is 119, which is positive.

Reading the arithmetic against the claim: WC = 119 is positive as claimed so the statement holds.

The statement is true.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 393 and total assets = 1,041. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{393}{1,041}
$$

$$
ER = 37.8\%
$$

Claimed: is below 36.4%. Actual 37.8%.

Reading the arithmetic against the claim: actual equity ratio 37.8% does not match ''is below 36.4%'' so the statement does not hold.

The statement is false.', 'FALSE — The debt ratio places debt against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: debt ratio = debt ÷ total assets.

From the extract, debt = 648 and total assets = 1,041. Plug the figures step by step:

$$
DR = \frac{\text{debt}}{\text{total assets}}
$$

$$
DR = \frac{648}{1,041}
$$

$$
DR = 62.2\%
$$

Claimed: exceeds 71.7%. Actual 62.2%.

Reading the arithmetic against the claim: actual debt ratio 62.2% does not match ''exceeds 71.7%'' so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.5.072' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Receivables turnover shows how many times revenue covers average trade receivables.

Name the identity in words: receivables turnover = revenue ÷ average trade receivables.

$$
\text{Avg receivables} = \frac{138 + 106}{2} = 122
$$

$$
RT = \frac{1,036}{122} = 8.4918
$$

Threshold: exceeds 8.61. Actual 8.49.

Reading the arithmetic against the claim: receivables turnover 8.49 does not exceed 8.61 so the statement does not hold.

The statement is false.', 'TRUE — Inventory turnover relates cost of sales to average inventory held.

Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\text{Avg inventory} = \frac{134 + 174}{2} = 154
$$

$$
IT = \frac{659}{154} = 4.2792
$$

Claimed below 7.44. Actual 4.28.

Reading the arithmetic against the claim: inventory turnover 4.28 versus ''below 7.44'' so the statement holds.

The statement is true.', 'FALSE — Collection days convert receivables turnover into an approximate outstanding period.

Name the identity in words: collection days ≈ 365 ÷ receivables turnover.

$$
RT = \frac{1,036}{122} = 8.4918
$$

$$
\text{Days} = \frac{365}{8.4918} = 43.0
$$

Threshold: more than 44 days. Actual 43 days.

Reading the arithmetic against the claim: collection days 43 do not exceed 44 so the statement does not hold.

The statement is false.', 'FALSE — Average inventory and average assets are midpoints of the beginning and ending balances on the extract.

Name the identity in words: average-inventory share = average inventory ÷ average total assets.

$$
\text{Avg inventory} = \frac{134 + 174}{2} = 154
$$

$$
\text{Avg assets} = \frac{849 + 988}{2} = 918.5
$$

$$
\frac{154}{918.5} = 16.8\%
$$

Threshold: less than 15%. Actual 16.8%.

Reading the arithmetic against the claim: the share is 16.8% versus ''less than 15%'' so the statement does not hold.

The statement is false.', 'FALSE — Revenue is read directly from the extract and compared with the stated euro-thousand threshold — a level check, not a ratio.

From the extract:

$$
\text{Revenue} = €1,036\text{ thousand}
$$

The statement claims revenue exceeds €1,072 thousand. Actual revenue is €1,036 thousand, which does not exceed that level.

Reading the arithmetic against the claim: revenue €1,036k does not exceed €1,072k so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.5.073' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 169 + 103 + 83 = 355
$$

$$
CL = 143 + 34 = 177
$$

$$
\text{Current ratio} = \frac{355}{177} = 2.0056
$$

Claimed: exceeds 1.8. Actual 2.01.

Reading the arithmetic against the claim: actual current ratio 2.01 versus ''exceeds 1.8'' so the statement holds.

The statement is true.', 'FALSE — The acid-test (quick) ratio is a stricter liquidity test: inventory is removed from current assets before dividing by current liabilities.

Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = 355, \quad \text{Inventory} = 169, \quad CL = 177
$$

$$
CA - \text{Inventory} = 355 - 169 = 186
$$

$$
\text{Acid-test} = \frac{186}{177} = 1.0508
$$

Threshold: more than 1.14. Actual 1.05.

Reading the arithmetic against the claim: acid-test 1.05 is not more than 1.14 so the statement does not hold.

The statement is false.', 'FALSE — This is a composition claim: express Buildings as a percentage of total assets.

Name the identity in words: Buildings share of total assets = Buildings ÷ total assets.

From the extract, Buildings = 305 and total assets = 933. Plug the figures step by step:

$$
Share = \frac{\text{Buildings}}{\text{total assets}}
$$

$$
Share = \frac{305}{933}
$$

$$
Share = 32.7\%
$$

Threshold: more than 43.4%. Actual 32.7%.

Reading the arithmetic against the claim: actual share 32.7% does not match ''more than 43.4%'' so the statement does not hold.

The statement is false.', 'FALSE — Borrowed funds are liabilities; equity is the owners'' residual interest.

A bank loan creates an obligation to a lender and cannot be classified as equity.

Using the stem facts: "The long-term bank loan of €396 thousand should be classified within equity rather than liabilities."

Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding.

The statement is false.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 355 and current liabilities total 177:

$$
WC = CA - CL
$$

$$
CA = 355, \quad CL = 177
$$

$$
WC = 355 - 177 = 178
$$

The statement cites working capital of €178 thousand and that it is positive. Calculated WC is 178, which is positive.

Reading the arithmetic against the claim: WC = 178 is positive as claimed so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.074' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Asset turnover shows how many times revenue covers average total assets over the year.

Name the identity in words: asset turnover = revenue ÷ average total assets.

$$
\text{Avg assets} = \frac{802 + 1,035}{2} = 918.5
$$

$$
AT = \frac{1,053}{918.5} = 1.1464
$$

Claimed above 1.03. Actual 1.15.

Reading the arithmetic against the claim: asset turnover 1.15 versus ''above 1.03'' so the statement holds.

The statement is true.', 'TRUE — Inventory turnover relates cost of sales to average inventory held.

Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\text{Avg inventory} = \frac{167 + 175}{2} = 171
$$

$$
IT = \frac{711}{171} = 4.1579
$$

Claimed below 6.65. Actual 4.16.

Reading the arithmetic against the claim: inventory turnover 4.16 versus ''below 6.65'' so the statement holds.

The statement is true.', 'TRUE — Receivables turnover shows how many times revenue covers average trade receivables.

Name the identity in words: receivables turnover = revenue ÷ average trade receivables.

$$
\text{Avg receivables} = \frac{117 + 150}{2} = 133.5
$$

$$
RT = \frac{1,053}{133.5} = 7.8876
$$

Threshold: exceeds 7.29. Actual 7.89.

Reading the arithmetic against the claim: receivables turnover 7.89 exceeds 7.29 so the statement holds.

The statement is true.', 'TRUE — Collection days convert receivables turnover into an approximate outstanding period.

Name the identity in words: collection days ≈ 365 ÷ receivables turnover.

$$
RT = \frac{1,053}{133.5} = 7.8876
$$

$$
\text{Days} = \frac{365}{7.8876} = 46.3
$$

Threshold: more than 37 days. Actual 46 days.

Reading the arithmetic against the claim: collection days 46 exceed 37 so the statement holds.

The statement is true.', 'TRUE — Inventory turnover = cost of sales ÷ average inventory; a higher figure means stock moves faster and ties up less cash.

Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\text{Avg inventory} = \frac{167 + 175}{2} = 171
$$

$$
IT = \frac{711}{171} = 4.16
$$

That reading matches the definition used in the claim.

Reading the arithmetic against the claim: inventory turnover is about 4.16, consistent with the stated interpretation so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.075' AND tier = 'full';
