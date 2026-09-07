-- Update expanded explanations for 6.5-part4 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 485 and total assets = 960. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{485}{960}
$$

$$
ER = 50.5\%
$$

Claimed: is below 44.6%. Actual 50.5%.

Reading the arithmetic against the claim: actual equity ratio 50.5% does not match ''is below 44.6%'' so the statement does not hold.

The statement is false.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 380 and current liabilities total 238:

$$
WC = CA - CL
$$

$$
CA = 380, \quad CL = 238
$$

$$
WC = 380 - 238 = 142
$$

The statement cites working capital of €142 thousand and that it is positive. Calculated WC is 142, which is positive.

Reading the arithmetic against the claim: WC = 142 is positive as claimed so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Trade receivables as a percentage of current assets.

Name the identity in words: Trade receivables share of current assets = Trade receivables ÷ current assets.

From the extract, Trade receivables = 67 and current assets = 380. Plug the figures step by step:

$$
Share = \frac{\text{Trade receivables}}{\text{current assets}}
$$

$$
Share = \frac{67}{380}
$$

$$
Share = 17.6\%
$$

Threshold: less than 35.4%. Actual 17.6%.

Reading the arithmetic against the claim: actual share 17.6% matches ''less than 35.4%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Cash and cash equivalents as a percentage of current assets.

Name the identity in words: Cash and cash equivalents share of current assets = Cash and cash equivalents ÷ current assets.

From the extract, Cash and cash equivalents = 109 and current assets = 380. Plug the figures step by step:

$$
Share = \frac{\text{Cash and cash equivalents}}{\text{current assets}}
$$

$$
Share = \frac{109}{380}
$$

$$
Share = 28.7\%
$$

Threshold: more than 16.5%. Actual 28.7%.

Reading the arithmetic against the claim: actual share 28.7% matches ''more than 16.5%'' so the statement holds.

The statement is true.', 'TRUE — Long-term financing is equity plus non-current liabilities; the claim compares that pool with non-current assets.

Name the identity in words: surplus = (equity + non-current liabilities) ÷ non-current assets − 1.

$$
\text{Equity} + \text{NCL} = 485 + 237 = 722
$$

$$
\text{NCA} = 580
$$

$$
\frac{722}{580} - 1 = 24.5\%
$$

Threshold: more than 7.7%. Actual surplus 24.5%.

Reading the arithmetic against the claim: the surplus is 24.5%, which exceeds 7.7% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.076' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 516 and current liabilities total 237:

$$
WC = CA - CL
$$

$$
CA = 516, \quad CL = 237
$$

$$
WC = 516 - 237 = 279
$$

The statement cites working capital of €279 thousand and that it is positive. Calculated WC is 279, which is positive.

Reading the arithmetic against the claim: WC = 279 is positive as claimed so the statement holds.

The statement is true.', 'TRUE — The acid-test (quick) ratio is a stricter liquidity test: inventory is removed from current assets before dividing by current liabilities.

Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = 516, \quad \text{Inventory} = 231, \quad CL = 237
$$

$$
CA - \text{Inventory} = 516 - 231 = 285
$$

$$
\text{Acid-test} = \frac{285}{237} = 1.2025
$$

Threshold: more than 0.9. Actual 1.20.

Reading the arithmetic against the claim: acid-test 1.20 is more than 0.9 so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Buildings as a percentage of total assets.

Name the identity in words: Buildings share of total assets = Buildings ÷ total assets.

From the extract, Buildings = 502 and total assets = 1,214. Plug the figures step by step:

$$
Share = \frac{\text{Buildings}}{\text{total assets}}
$$

$$
Share = \frac{502}{1,214}
$$

$$
Share = 41.4\%
$$

Threshold: more than 38.9%. Actual 41.4%.

Reading the arithmetic against the claim: actual share 41.4% matches ''more than 38.9%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Inventory as a percentage of current assets.

Name the identity in words: Inventory share of current assets = Inventory ÷ current assets.

From the extract, Inventory = 231 and current assets = 516. Plug the figures step by step:

$$
Share = \frac{\text{Inventory}}{\text{current assets}}
$$

$$
Share = \frac{231}{516}
$$

$$
Share = 44.8\%
$$

Threshold: more than 42.9%. Actual 44.8%.

Reading the arithmetic against the claim: actual share 44.8% matches ''more than 42.9%'' so the statement holds.

The statement is true.', 'TRUE — Long-term financing is equity plus non-current liabilities; the claim compares that pool with non-current assets.

Name the identity in words: surplus = (equity + non-current liabilities) ÷ non-current assets − 1.

$$
\text{Equity} + \text{NCL} = 584 + 393 = 977
$$

$$
\text{NCA} = 698
$$

$$
\frac{977}{698} - 1 = 40.0\%
$$

Threshold: more than 26.8%. Actual surplus 40.0%.

Reading the arithmetic against the claim: the surplus is 40.0%, which exceeds 26.8% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.077' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Inventory turnover relates cost of sales to average inventory held.

Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\text{Avg inventory} = \frac{163 + 158}{2} = 160.5
$$

$$
IT = \frac{628}{160.5} = 3.9128
$$

Claimed below 4.6. Actual 3.91.

Reading the arithmetic against the claim: inventory turnover 3.91 versus ''below 4.6'' so the statement holds.

The statement is true.', 'FALSE — Asset turnover shows how many times revenue covers average total assets over the year.

Name the identity in words: asset turnover = revenue ÷ average total assets.

$$
\text{Avg assets} = \frac{792 + 1,012}{2} = 902
$$

$$
AT = \frac{914}{902} = 1.0133
$$

Claimed above 1.45. Actual 1.01.

Reading the arithmetic against the claim: asset turnover 1.01 versus ''above 1.45'' so the statement does not hold.

The statement is false.', 'FALSE — Receivables turnover shows how many times revenue covers average trade receivables.

Name the identity in words: receivables turnover = revenue ÷ average trade receivables.

$$
\text{Avg receivables} = \frac{113 + 150}{2} = 131.5
$$

$$
RT = \frac{914}{131.5} = 6.9506
$$

Threshold: exceeds 9.4. Actual 6.95.

Reading the arithmetic against the claim: receivables turnover 6.95 does not exceed 9.4 so the statement does not hold.

The statement is false.', 'FALSE — Average inventory and average assets are midpoints of the beginning and ending balances on the extract.

Name the identity in words: average-inventory share = average inventory ÷ average total assets.

$$
\text{Avg inventory} = \frac{163 + 158}{2} = 160.5
$$

$$
\text{Avg assets} = \frac{792 + 1,012}{2} = 902
$$

$$
\frac{160.5}{902} = 17.8\%
$$

Threshold: less than 17.3%. Actual 17.8%.

Reading the arithmetic against the claim: the share is 17.8% versus ''less than 17.3%'' so the statement does not hold.

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Turnover and Liquidity Extract 78". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Inventory grew by more than 32% between Year 1 and Year 2."

The statement is false.'] WHERE case_id = 'CASE 6.5.078' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 238 + 95 + 30 = 363
$$

$$
CL = 76 + 89 = 165
$$

$$
\text{Current ratio} = \frac{363}{165} = 2.2000
$$

Claimed: exceeds 1.81. Actual 2.20.

Reading the arithmetic against the claim: actual current ratio 2.20 versus ''exceeds 1.81'' so the statement holds.

The statement is true.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 670 and total assets = 1,151. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{670}{1,151}
$$

$$
ER = 58.2\%
$$

Claimed: is below 24%. Actual 58.2%.

Reading the arithmetic against the claim: actual equity ratio 58.2% does not match ''is below 24%'' so the statement does not hold.

The statement is false.', 'FALSE — This is a composition claim: express Buildings as a percentage of total assets.

Name the identity in words: Buildings share of total assets = Buildings ÷ total assets.

From the extract, Buildings = 506 and total assets = 1,151. Plug the figures step by step:

$$
Share = \frac{\text{Buildings}}{\text{total assets}}
$$

$$
Share = \frac{506}{1,151}
$$

$$
Share = 44.0\%
$$

Threshold: more than 51%. Actual 44.0%.

Reading the arithmetic against the claim: actual share 44.0% does not match ''more than 51%'' so the statement does not hold.

The statement is false.', 'FALSE — This is a composition claim: express Cash and cash equivalents as a percentage of current assets.

Name the identity in words: Cash and cash equivalents share of current assets = Cash and cash equivalents ÷ current assets.

From the extract, Cash and cash equivalents = 30 and current assets = 363. Plug the figures step by step:

$$
Share = \frac{\text{Cash and cash equivalents}}{\text{current assets}}
$$

$$
Share = \frac{30}{363}
$$

$$
Share = 8.3\%
$$

Threshold: more than 17%. Actual 8.3%.

Reading the arithmetic against the claim: actual share 8.3% does not match ''more than 17%'' so the statement does not hold.

The statement is false.', 'FALSE — Long-term financing is equity plus non-current liabilities; the claim compares that pool with non-current assets.

Name the identity in words: surplus = (equity + non-current liabilities) ÷ non-current assets − 1.

$$
\text{Equity} + \text{NCL} = 670 + 316 = 986
$$

$$
\text{NCA} = 788
$$

$$
\frac{986}{788} - 1 = 25.1\%
$$

Threshold: more than 25.5%. Actual surplus 25.1%.

Reading the arithmetic against the claim: the surplus is 25.1%, which does not exceed 25.5% so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.5.079' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Capital Employed and Long-Term Funds for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "The acid-test ratio for a construction group includes inventory within current assets before comparing the total with current liabilities."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Capital Employed and Long-Term Funds for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Working capital for an online retailer is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Capital Employed and Long-Term Funds for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "An online retailer is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Capital Employed and Long-Term Funds for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "A single return on capital employed figure for a construction group is always fully meaningful on its own, without any need to compare it against other years or similar businesses."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Capital Employed and Long-Term Funds for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Return on equity for a construction group is calculated by comparing the cash balance on the balance sheet with total liabilities rather than relating profit to equity."

The statement is false.'] WHERE case_id = 'CASE 6.5.080' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Asset turnover shows how many times revenue covers average total assets over the year.

Name the identity in words: asset turnover = revenue ÷ average total assets.

$$
\text{Avg assets} = \frac{785 + 987}{2} = 886
$$

$$
AT = \frac{1,233}{886} = 1.3916
$$

Claimed above 1.52. Actual 1.39.

Reading the arithmetic against the claim: asset turnover 1.39 versus ''above 1.52'' so the statement does not hold.

The statement is false.', 'TRUE — Inventory turnover relates cost of sales to average inventory held.

Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\text{Avg inventory} = \frac{167 + 193}{2} = 180
$$

$$
IT = \frac{795}{180} = 4.4167
$$

Claimed below 5.21. Actual 4.42.

Reading the arithmetic against the claim: inventory turnover 4.42 versus ''below 5.21'' so the statement holds.

The statement is true.', 'TRUE — Receivables turnover shows how many times revenue covers average trade receivables.

Name the identity in words: receivables turnover = revenue ÷ average trade receivables.

$$
\text{Avg receivables} = \frac{107 + 113}{2} = 110
$$

$$
RT = \frac{1,233}{110} = 11.2091
$$

Threshold: exceeds 10.98. Actual 11.21.

Reading the arithmetic against the claim: receivables turnover 11.21 exceeds 10.98 so the statement holds.

The statement is true.', 'TRUE — Inventory turnover = cost of sales ÷ average inventory; a higher figure means stock moves faster and ties up less cash.

Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\text{Avg inventory} = \frac{167 + 193}{2} = 180
$$

$$
IT = \frac{795}{180} = 4.42
$$

That reading matches the definition used in the claim.

Reading the arithmetic against the claim: inventory turnover is about 4.42, consistent with the stated interpretation so the statement holds.

The statement is true.', 'TRUE — Revenue is read directly from the extract and compared with the stated euro-thousand threshold — a level check, not a ratio.

From the extract:

$$
\text{Revenue} = €1,233\text{ thousand}
$$

The statement claims revenue exceeds €1,232 thousand. Actual revenue is €1,233 thousand, which exceeds that level.

Reading the arithmetic against the claim: revenue €1,233k exceeds €1,232k so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.081' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Inventory turnover relates cost of sales to average inventory held.

Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\text{Avg inventory} = \frac{150 + 188}{2} = 169
$$

$$
IT = \frac{799}{169} = 4.7278
$$

Claimed below 6.16. Actual 4.73.

Reading the arithmetic against the claim: inventory turnover 4.73 versus ''below 6.16'' so the statement holds.

The statement is true.', 'TRUE — Receivables turnover shows how many times revenue covers average trade receivables.

Name the identity in words: receivables turnover = revenue ÷ average trade receivables.

$$
\text{Avg receivables} = \frac{98 + 131}{2} = 114.5
$$

$$
RT = \frac{1,214}{114.5} = 10.6026
$$

Threshold: exceeds 7.63. Actual 10.60.

Reading the arithmetic against the claim: receivables turnover 10.60 exceeds 7.63 so the statement holds.

The statement is true.', 'TRUE — Inventory turnover = cost of sales ÷ average inventory; a higher figure means stock moves faster and ties up less cash.

Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\text{Avg inventory} = \frac{150 + 188}{2} = 169
$$

$$
IT = \frac{799}{169} = 4.73
$$

That reading matches the definition used in the claim.

Reading the arithmetic against the claim: inventory turnover is about 4.73, consistent with the stated interpretation so the statement holds.

The statement is true.', 'FALSE — Asset turnover shows how many times revenue covers average total assets over the year.

Name the identity in words: asset turnover = revenue ÷ average total assets.

$$
\text{Avg assets} = \frac{762 + 1,046}{2} = 904
$$

$$
AT = \frac{1,214}{904} = 1.3429
$$

Claimed above 1.59. Actual 1.34.

Reading the arithmetic against the claim: asset turnover 1.34 versus ''above 1.59'' so the statement does not hold.

The statement is false.', 'TRUE — Revenue is read directly from the extract and compared with the stated euro-thousand threshold — a level check, not a ratio.

From the extract:

$$
\text{Revenue} = €1,214\text{ thousand}
$$

The statement claims revenue exceeds €1,045 thousand. Actual revenue is €1,214 thousand, which exceeds that level.

Reading the arithmetic against the claim: revenue €1,214k exceeds €1,045k so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.082' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Capital Employed and Long-Term Funds Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The current ratio for an online retailer sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Capital Employed and Long-Term Funds Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Return on equity for an online retailer relates the profit before interest and tax generated during the period to the equity that owners have invested in the business."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Capital Employed and Long-Term Funds Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A return on capital employed figure for an online retailer carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Capital Employed and Long-Term Funds Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Inventory turnover for a construction group is calculated by dividing revenue by average inventory rather than by relating cost of sales to average inventory."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Capital Employed and Long-Term Funds Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Asset turnover for an online retailer relates revenue earned during the period to the average total assets employed to generate that revenue."

The statement is true.'] WHERE case_id = 'CASE 6.5.083' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Capital Employed and Long-Term Funds in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "The current ratio and the acid-test ratio for a construction group always produce identical results, regardless of how much inventory the business holds."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Capital Employed and Long-Term Funds in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The equity ratio for an online retailer expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The claim states: If an online retailer draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken. The reason given — current liabilities rise. — fits the chapter rule. Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding.

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Capital Employed and Long-Term Funds in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Working capital for a hotel operator is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Capital Employed and Long-Term Funds in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A hotel operator is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account."

The statement is true.'] WHERE case_id = 'CASE 6.5.084' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 187 + 115 + 108 = 410
$$

$$
CL = 171 + 88 = 259
$$

$$
\text{Current ratio} = \frac{410}{259} = 1.5830
$$

Claimed: exceeds 1.44. Actual 1.58.

Reading the arithmetic against the claim: actual current ratio 1.58 versus ''exceeds 1.44'' so the statement holds.

The statement is true.', 'FALSE — The debt ratio places debt against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: debt ratio = debt ÷ total assets.

From the extract, debt = 739 and total assets = 1,198. Plug the figures step by step:

$$
DR = \frac{\text{debt}}{\text{total assets}}
$$

$$
DR = \frac{739}{1,198}
$$

$$
DR = 61.7\%
$$

Claimed: exceeds 77%. Actual 61.7%.

Reading the arithmetic against the claim: actual debt ratio 61.7% does not match ''exceeds 77%'' so the statement does not hold.

The statement is false.', 'FALSE — This is a composition claim: express Buildings as a percentage of total assets.

Name the identity in words: Buildings share of total assets = Buildings ÷ total assets.

From the extract, Buildings = 501 and total assets = 1,198. Plug the figures step by step:

$$
Share = \frac{\text{Buildings}}{\text{total assets}}
$$

$$
Share = \frac{501}{1,198}
$$

$$
Share = 41.8\%
$$

Threshold: more than 56.7%. Actual 41.8%.

Reading the arithmetic against the claim: actual share 41.8% does not match ''more than 56.7%'' so the statement does not hold.

The statement is false.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 410 and current liabilities total 259:

$$
WC = CA - CL
$$

$$
CA = 410, \quad CL = 259
$$

$$
WC = 410 - 259 = 151
$$

The statement cites working capital of €151 thousand and that it is positive. Calculated WC is 151, which is positive.

Reading the arithmetic against the claim: WC = 151 is positive as claimed so the statement holds.

The statement is true.', 'TRUE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 459 and total assets = 1,198. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{459}{1,198}
$$

$$
ER = 38.3\%
$$

Claimed: is below 44.9%. Actual 38.3%.

Reading the arithmetic against the claim: actual equity ratio 38.3% matches ''is below 44.9%'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.085' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Inventory turnover relates cost of sales to average inventory held.

Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\text{Avg inventory} = \frac{169 + 176}{2} = 172.5
$$

$$
IT = \frac{740}{172.5} = 4.2899
$$

Claimed below 6.11. Actual 4.29.

Reading the arithmetic against the claim: inventory turnover 4.29 versus ''below 6.11'' so the statement holds.

The statement is true.', 'FALSE — Asset turnover shows how many times revenue covers average total assets over the year.

Name the identity in words: asset turnover = revenue ÷ average total assets.

$$
\text{Avg assets} = \frac{844 + 1,030}{2} = 937
$$

$$
AT = \frac{1,076}{937} = 1.1483
$$

Claimed above 1.22. Actual 1.15.

Reading the arithmetic against the claim: asset turnover 1.15 versus ''above 1.22'' so the statement does not hold.

The statement is false.', 'FALSE — Collection days convert receivables turnover into an approximate outstanding period.

Name the identity in words: collection days ≈ 365 ÷ receivables turnover.

$$
RT = \frac{1,076}{106} = 10.1509
$$

$$
\text{Days} = \frac{365}{10.1509} = 36.0
$$

Threshold: more than 54 days. Actual 36 days.

Reading the arithmetic against the claim: collection days 36 do not exceed 54 so the statement does not hold.

The statement is false.', 'FALSE — Average inventory and average assets are midpoints of the beginning and ending balances on the extract.

Name the identity in words: average-inventory share = average inventory ÷ average total assets.

$$
\text{Avg inventory} = \frac{169 + 176}{2} = 172.5
$$

$$
\text{Avg assets} = \frac{844 + 1,030}{2} = 937
$$

$$
\frac{172.5}{937} = 18.4\%
$$

Threshold: less than 13.1%. Actual 18.4%.

Reading the arithmetic against the claim: the share is 18.4% versus ''less than 13.1%'' so the statement does not hold.

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Turnover and Liquidity Extract 86". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Inventory grew by more than 30.8% between Year 1 and Year 2."

The statement is false.'] WHERE case_id = 'CASE 6.5.086' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 528 and total assets = 1,148. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{528}{1,148}
$$

$$
ER = 46.0\%
$$

Claimed: is below 23.5%. Actual 46.0%.

Reading the arithmetic against the claim: actual equity ratio 46.0% does not match ''is below 23.5%'' so the statement does not hold.

The statement is false.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 307 and current liabilities total 185:

$$
WC = CA - CL
$$

$$
CA = 307, \quad CL = 185
$$

$$
WC = 307 - 185 = 122
$$

The statement cites working capital of €122 thousand and that it is positive. Calculated WC is 122, which is positive.

Reading the arithmetic against the claim: WC = 122 is positive as claimed so the statement holds.

The statement is true.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 307 and current liabilities total 185:

$$
WC = CA - CL
$$

$$
CA = 307, \quad CL = 185
$$

$$
WC = 307 - 185 = 122
$$

Calculated WC is 122, which is positive.

Reading the arithmetic against the claim: WC = 122 is positive as claimed so the statement holds.

The statement is true.', 'TRUE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 528 and total assets = 1,148. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{528}{1,148}
$$

$$
ER = 46.0\%
$$

Claimed: exceeds 31.4%. Actual 46.0%.

Reading the arithmetic against the claim: actual equity ratio 46.0% matches ''exceeds 31.4%'' so the statement holds.

The statement is true.', 'TRUE — The acid-test ratio excludes inventory from current assets, then divides by current liabilities.

Name the identity in words: acid-test = (current assets − inventory) ÷ current liabilities.

$$
\frac{307 - 84}{185} = 1.2054
$$

Threshold: exceeds 1.04. Actual 1.21.

Reading the arithmetic against the claim: acid-test 1.21 exceeds 1.04 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.087' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Inventory turnover relates cost of sales to average inventory held.

Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\text{Avg inventory} = \frac{131 + 182}{2} = 156.5
$$

$$
IT = \frac{659}{156.5} = 4.2109
$$

Claimed below 5.42. Actual 4.21.

Reading the arithmetic against the claim: inventory turnover 4.21 versus ''below 5.42'' so the statement holds.

The statement is true.', 'FALSE — Asset turnover shows how many times revenue covers average total assets over the year.

Name the identity in words: asset turnover = revenue ÷ average total assets.

$$
\text{Avg assets} = \frac{851 + 941}{2} = 896
$$

$$
AT = \frac{1,046}{896} = 1.1674
$$

Claimed above 1.24. Actual 1.17.

Reading the arithmetic against the claim: asset turnover 1.17 versus ''above 1.24'' so the statement does not hold.

The statement is false.', 'FALSE — Average inventory and average assets are midpoints of the beginning and ending balances on the extract.

Name the identity in words: average-inventory share = average inventory ÷ average total assets.

$$
\text{Avg inventory} = \frac{131 + 182}{2} = 156.5
$$

$$
\text{Avg assets} = \frac{851 + 941}{2} = 896
$$

$$
\frac{156.5}{896} = 17.5\%
$$

Threshold: less than 14.4%. Actual 17.5%.

Reading the arithmetic against the claim: the share is 17.5% versus ''less than 14.4%'' so the statement does not hold.

The statement is false.', 'TRUE — Receivables turnover shows how many times revenue covers average trade receivables.

Name the identity in words: receivables turnover = revenue ÷ average trade receivables.

$$
\text{Avg receivables} = \frac{135 + 143}{2} = 139
$$

$$
RT = \frac{1,046}{139} = 7.5252
$$

Threshold: exceeds 7.05. Actual 7.53.

Reading the arithmetic against the claim: receivables turnover 7.53 exceeds 7.05 so the statement holds.

The statement is true.', 'FALSE — Receivables growth compares ending with beginning trade receivables.

Name the identity in words: growth = (ending − beginning) ÷ beginning.

$$
R_{0} = 135, \quad R_{1} = 143
$$

$$
\frac{143 - 135}{135} = 5.9\%
$$

Threshold: more than 19%. Actual 5.9%.

Reading the arithmetic against the claim: growth 5.9% does not exceed 19% so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.5.088' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 300 and current liabilities total 199:

$$
WC = CA - CL
$$

$$
CA = 300, \quad CL = 199
$$

$$
WC = 300 - 199 = 101
$$

The statement cites working capital of €101 thousand and that it is positive. Calculated WC is 101, which is positive.

Reading the arithmetic against the claim: WC = 101 is positive as claimed so the statement holds.

The statement is true.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 421 and total assets = 944. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{421}{944}
$$

$$
ER = 44.6\%
$$

Claimed: is below 39.9%. Actual 44.6%.

Reading the arithmetic against the claim: actual equity ratio 44.6% does not match ''is below 39.9%'' so the statement does not hold.

The statement is false.', 'TRUE — The debt ratio places debt against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: debt ratio = debt ÷ total assets.

From the extract, debt = 523 and total assets = 944. Plug the figures step by step:

$$
DR = \frac{\text{debt}}{\text{total assets}}
$$

$$
DR = \frac{523}{944}
$$

$$
DR = 55.4\%
$$

Claimed: exceeds 50.3%. Actual 55.4%.

Reading the arithmetic against the claim: actual debt ratio 55.4% matches ''exceeds 50.3%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Trade receivables as a percentage of current assets.

Name the identity in words: Trade receivables share of current assets = Trade receivables ÷ current assets.

From the extract, Trade receivables = 90 and current assets = 300. Plug the figures step by step:

$$
Share = \frac{\text{Trade receivables}}{\text{current assets}}
$$

$$
Share = \frac{90}{300}
$$

$$
Share = 30.0\%
$$

Threshold: less than 48.2%. Actual 30.0%.

Reading the arithmetic against the claim: actual share 30.0% matches ''less than 48.2%'' so the statement holds.

The statement is true.', 'FALSE — This is a composition claim: express Buildings as a percentage of total assets.

Name the identity in words: Buildings share of total assets = Buildings ÷ total assets.

From the extract, Buildings = 388 and total assets = 944. Plug the figures step by step:

$$
Share = \frac{\text{Buildings}}{\text{total assets}}
$$

$$
Share = \frac{388}{944}
$$

$$
Share = 41.1\%
$$

Threshold: more than 41.8%. Actual 41.1%.

Reading the arithmetic against the claim: actual share 41.1% does not match ''more than 41.8%'' so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.5.089' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 171 + 64 + 101 = 336
$$

$$
CL = 70 + 46 = 116
$$

$$
\text{Current ratio} = \frac{336}{116} = 2.8966
$$

Claimed: exceeds 1.01. Actual 2.90.

Reading the arithmetic against the claim: actual current ratio 2.90 versus ''exceeds 1.01'' so the statement holds.

The statement is true.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 336 and current liabilities total 116:

$$
WC = CA - CL
$$

$$
CA = 336, \quad CL = 116
$$

$$
WC = 336 - 116 = 220
$$

The statement cites working capital of €220 thousand and that it is positive. Calculated WC is 220, which is positive.

Reading the arithmetic against the claim: WC = 220 is positive as claimed so the statement holds.

The statement is true.', 'TRUE — The acid-test (quick) ratio is a stricter liquidity test: inventory is removed from current assets before dividing by current liabilities.

Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = 336, \quad \text{Inventory} = 171, \quad CL = 116
$$

$$
CA - \text{Inventory} = 336 - 171 = 165
$$

$$
\text{Acid-test} = \frac{165}{116} = 1.4224
$$

Threshold: more than 1.03. Actual 1.42.

Reading the arithmetic against the claim: acid-test 1.42 is more than 1.03 so the statement holds.

The statement is true.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 171 + 64 + 101 = 336
$$

$$
CL = 70 + 46 = 116
$$

$$
\text{Current ratio} = \frac{336}{116} = 2.8966
$$

Claimed: is below 0.7. Actual 2.90.

Reading the arithmetic against the claim: actual current ratio 2.90 versus ''is below 0.7'' so the statement does not hold.

The statement is false.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 709 and total assets = 1,061. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{709}{1,061}
$$

$$
ER = 66.8\%
$$

Claimed: is below 35.1%. Actual 66.8%.

Reading the arithmetic against the claim: actual equity ratio 66.8% does not match ''is below 35.1%'' so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.5.090' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Asset turnover shows how many times revenue covers average total assets over the year.

Name the identity in words: asset turnover = revenue ÷ average total assets.

$$
\text{Avg assets} = \frac{843 + 1,018}{2} = 930.5
$$

$$
AT = \frac{1,127}{930.5} = 1.2112
$$

Claimed above 1.41. Actual 1.21.

Reading the arithmetic against the claim: asset turnover 1.21 versus ''above 1.41'' so the statement does not hold.

The statement is false.', 'TRUE — Inventory turnover relates cost of sales to average inventory held.

Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\text{Avg inventory} = \frac{163 + 183}{2} = 173
$$

$$
IT = \frac{751}{173} = 4.3410
$$

Claimed below 6.97. Actual 4.34.

Reading the arithmetic against the claim: inventory turnover 4.34 versus ''below 6.97'' so the statement holds.

The statement is true.', 'FALSE — Revenue is read directly from the extract and compared with the stated euro-thousand threshold — a level check, not a ratio.

From the extract:

$$
\text{Revenue} = €1,127\text{ thousand}
$$

The statement claims revenue exceeds €1,138 thousand. Actual revenue is €1,127 thousand, which does not exceed that level.

Reading the arithmetic against the claim: revenue €1,127k does not exceed €1,138k so the statement does not hold.

The statement is false.', 'TRUE — Receivables turnover shows how many times revenue covers average trade receivables.

Name the identity in words: receivables turnover = revenue ÷ average trade receivables.

$$
\text{Avg receivables} = \frac{106 + 101}{2} = 103.5
$$

$$
RT = \frac{1,127}{103.5} = 10.8889
$$

Threshold: exceeds 10.07. Actual 10.89.

Reading the arithmetic against the claim: receivables turnover 10.89 exceeds 10.07 so the statement holds.

The statement is true.', 'FALSE — Cost of sales as a share of revenue is the COS-to-revenue ratio.

Name the identity in words: COS share = cost of sales ÷ revenue.

From the extract, cost of sales = 751 and revenue = 1,127. Plug the figures step by step:

$$
COS\% = \frac{\text{cost of sales}}{\text{revenue}}
$$

$$
COS\% = \frac{751}{1,127}
$$

$$
COS\% = 66.6\%
$$

Threshold: more than 69.7%. Actual 66.6%.

Reading the arithmetic against the claim: COS share 66.6% does not exceed 69.7% so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.5.091' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Asset Turnover and Revenue Generation in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The current ratio for a hotel operator sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Asset Turnover and Revenue Generation in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Working capital for a fashion retailer is calculated by subtracting current assets from current liabilities."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Asset Turnover and Revenue Generation in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Return on equity for a hotel operator relates the profit before interest and tax generated during the period to the equity that owners have invested in the business."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Asset Turnover and Revenue Generation in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A return on capital employed figure for a hotel operator carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Asset Turnover and Revenue Generation in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "A fashion retailer reporting negative working capital always holds more cash than it needs for its daily operations."

The statement is false.'] WHERE case_id = 'CASE 6.5.092' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 182 + 153 + 34 = 369
$$

$$
CL = 188 + 81 = 269
$$

$$
\text{Current ratio} = \frac{369}{269} = 1.3717
$$

Claimed: exceeds 1.87. Actual 1.37.

Reading the arithmetic against the claim: actual current ratio 1.37 versus ''exceeds 1.87'' so the statement does not hold.

The statement is false.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 369 and current liabilities total 269:

$$
WC = CA - CL
$$

$$
CA = 369, \quad CL = 269
$$

$$
WC = 369 - 269 = 100
$$

The statement cites working capital of €100 thousand and that it is positive. Calculated WC is 100, which is positive.

Reading the arithmetic against the claim: WC = 100 is positive as claimed so the statement holds.

The statement is true.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 261 and total assets = 1,011. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{261}{1,011}
$$

$$
ER = 25.8\%
$$

Claimed: is below 20.4%. Actual 25.8%.

Reading the arithmetic against the claim: actual equity ratio 25.8% does not match ''is below 20.4%'' so the statement does not hold.

The statement is false.', 'TRUE — The debt ratio places debt against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: debt ratio = debt ÷ total assets.

From the extract, debt = 750 and total assets = 1,011. Plug the figures step by step:

$$
DR = \frac{\text{debt}}{\text{total assets}}
$$

$$
DR = \frac{750}{1,011}
$$

$$
DR = 74.2\%
$$

Claimed: exceeds 46%. Actual 74.2%.

Reading the arithmetic against the claim: actual debt ratio 74.2% matches ''exceeds 46%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Inventory as a percentage of current assets.

Name the identity in words: Inventory share of current assets = Inventory ÷ current assets.

From the extract, Inventory = 182 and current assets = 369. Plug the figures step by step:

$$
Share = \frac{\text{Inventory}}{\text{current assets}}
$$

$$
Share = \frac{182}{369}
$$

$$
Share = 49.3\%
$$

Threshold: more than 38.6%. Actual 49.3%.

Reading the arithmetic against the claim: actual share 49.3% matches ''more than 38.6%'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.093' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — ROE on this extract is operating result divided by total equity.

Name the identity in words: ROE = operating result ÷ total equity.

From the extract, operating result = 240 and total equity = 610. Plug the figures step by step:

$$
ROE = \frac{\text{operating result}}{\text{total equity}}
$$

$$
ROE = \frac{240}{610}
$$

$$
ROE = 39.3\%
$$

Threshold: exceeds 29.7%. Actual 39.3%.

Reading the arithmetic against the claim: ROE 39.3% exceeds 29.7% so the statement holds.

The statement is true.', 'FALSE — Operating-cash conversion here is cash flow from operating activities as a percentage of operating result.

Name the identity in words: conversion = operating cash flow ÷ operating result.

From the extract, operating cash flow = 240 and operating result = 240. Plug the figures step by step:

$$
Conv = \frac{\text{operating cash flow}}{\text{operating result}}
$$

$$
Conv = \frac{240}{240}
$$

$$
Conv = 100.0\%
$$

Threshold: less than 82.5%. Actual 100.0%.

Reading the arithmetic against the claim: conversion 100.0% is not less than 82.5% so the statement does not hold.

The statement is false.', 'TRUE — ROCE relates operating result to capital employed: equity plus non-current liabilities.

Name the identity in words: ROCE = operating result ÷ (equity + non-current liabilities).

$$
\text{Capital employed} = 610 + 346 + 69 = 1,025
$$

$$
ROCE = \frac{240}{1,025} = 23.4\%
$$

Threshold: exceeds 15%. Actual 23.4%.

Reading the arithmetic against the claim: ROCE 23.4% exceeds 15% so the statement holds.

The statement is true.', 'TRUE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 610 and total assets = 1,270. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{610}{1,270}
$$

$$
ER = 48.0\%
$$

Claimed: exceeds 44.5%. Actual 48.0%.

Reading the arithmetic against the claim: actual equity ratio 48.0% matches ''exceeds 44.5%'' so the statement holds.

The statement is true.', 'FALSE — This is a composition claim: express Inventory as a percentage of total assets.

Name the identity in words: Inventory share of total assets = Inventory ÷ total assets.

From the extract, Inventory = 270 and total assets = 1,270. Plug the figures step by step:

$$
Share = \frac{\text{Inventory}}{\text{total assets}}
$$

$$
Share = \frac{270}{1,270}
$$

$$
Share = 21.3\%
$$

Threshold: more than 26.7%. Actual 21.3%.

Reading the arithmetic against the claim: actual share 21.3% does not match ''more than 26.7%'' so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.5.094' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Asset Turnover and Revenue Generation Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Asset turnover for a hotel operator relates revenue earned during the period to the average total assets employed to generate that revenue."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Asset Turnover and Revenue Generation Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The equity ratio for a hotel operator expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Asset Turnover and Revenue Generation Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "The acid-test ratio for a fashion retailer includes inventory within current assets before comparing the total with current liabilities."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The claim states: If a hotel operator draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken. The reason given — current liabilities rise. — fits the chapter rule. Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding.

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Asset Turnover and Revenue Generation Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "A single return on capital employed figure for a fashion retailer is always fully meaningful on its own, without any need to compare it against other years or similar businesses."

The statement is false.'] WHERE case_id = 'CASE 6.5.095' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 30, \quad \text{Shares} = 753,000
$$

$$
\text{MCap} = 30 \times 753,000 = €22.59\text{ million}
$$

Threshold: exceeds €19.2 million. Actual €22.59 million.

Reading the arithmetic against the claim: market cap €22.59m exceeds €19.2m so the statement holds.

The statement is true.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 30, \quad P_{\min} = 24
$$

$$
\frac{30 - 24}{24} = 25.0\%
$$

Threshold: more than 27.3%. Actual 25.0%.

Reading the arithmetic against the claim: the gap is 25.0%, which does not exceed 27.3% so the statement does not hold.

The statement is false.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 371,000, \quad \text{Shares} = 753,000
$$

$$
\frac{371,000}{753,000} = 49.3\%
$$

Threshold: exceed 21.2%. Actual 49.3%.

Reading the arithmetic against the claim: turnover 49.3% exceeds 21.2% so the statement holds.

The statement is true.', 'FALSE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 93,000 \quad (March)
$$

Threshold: exceeds 96,969. Actual 93,000.

Reading the arithmetic against the claim: peak volume 93,000 does not exceed 96,969 so the statement does not hold.

The statement is false.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €301\text{ thousand}
$$

The statement claims this amount is below €258 thousand. Actual €301 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €301k is not below €258k so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.5.096' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Asset Turnover and Revenue Generation for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Working capital for a pharmaceutical distributor is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Asset Turnover and Revenue Generation for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Return on equity for a fashion retailer is calculated by comparing the cash balance on the balance sheet with total liabilities rather than relating profit to equity."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Asset Turnover and Revenue Generation for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Inventory turnover for a fashion retailer is calculated by dividing revenue by average inventory rather than by relating cost of sales to average inventory."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Asset Turnover and Revenue Generation for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A pharmaceutical distributor is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Asset Turnover and Revenue Generation for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "The current ratio and the acid-test ratio for a fashion retailer always produce identical results, regardless of how much inventory the business holds."

The statement is false.'] WHERE case_id = 'CASE 6.5.097' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 25, \quad \text{Shares} = 882,000
$$

$$
\text{MCap} = 25 \times 882,000 = €22.05\text{ million}
$$

Threshold: exceeds €20.2 million. Actual €22.05 million.

Reading the arithmetic against the claim: market cap €22.05m exceeds €20.2m so the statement holds.

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 20, \quad P_{\text{last}} = 25
$$

$$
\frac{25 - 20}{20} = 25.0\%
$$

Threshold: more than 28.9%. Actual 25.0%.

Reading the arithmetic against the claim: the rise is 25.0%, which does not exceed 28.9% so the statement does not hold.

The statement is false.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 25, \quad P_{\min} = 20
$$

$$
\frac{25 - 20}{20} = 25.0\%
$$

Threshold: more than 39.8%. Actual 25.0%.

Reading the arithmetic against the claim: the gap is 25.0%, which does not exceed 39.8% so the statement does not hold.

The statement is false.', 'TRUE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 20 \times 882,000 = €17.64\text{m}
$$

$$
\text{MCap}_{\text{last}} = 25 \times 882,000 = €22.05\text{m}
$$

$$
\frac{22.05 - 17.64}{17.64} = 25.0\%
$$

Threshold: more than 14.1%. Actual 25.0%.

Reading the arithmetic against the claim: MCap rose 25.0%, which exceeds 14.1% so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 334,000, \quad \text{Shares} = 882,000
$$

$$
\frac{334,000}{882,000} = 37.9\%
$$

Threshold: exceed 9.1%. Actual 37.9%.

Reading the arithmetic against the claim: turnover 37.9% exceeds 9.1% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.098' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 17, \quad \text{Shares} = 466,000
$$

$$
\text{MCap} = 17 \times 466,000 = €7.92\text{ million}
$$

Threshold: exceeds €7.3 million. Actual €7.92 million.

Reading the arithmetic against the claim: market cap €7.92m exceeds €7.3m so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 424,000, \quad \text{Shares} = 466,000
$$

$$
\frac{424,000}{466,000} = 91.0\%
$$

Threshold: exceed 16.7%. Actual 91.0%.

Reading the arithmetic against the claim: turnover 91.0% exceeds 16.7% so the statement holds.

The statement is true.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 90,000 \quad (March)
$$

Threshold: exceeds 82,270. Actual 90,000.

Reading the arithmetic against the claim: peak volume 90,000 exceeds 82,270 so the statement holds.

The statement is true.', 'TRUE — Shares outstanding are an annual stock figure reported beside the price table; the claim is simply whether that figure equals the stated count.

Read shares outstanding from the annual figures attached to the extract:

$$
\text{Shares outstanding} = 466,000
$$

The statement claims exactly 466,000. The extract reports 466,000, which matches the claim.

Reading the arithmetic against the claim: extract reports 466,000 versus claimed 466,000 so the statement holds.

The statement is true.', 'TRUE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €259\text{ thousand}
$$

The statement claims this amount is below €263 thousand. Actual €259 thousand is below that threshold.

Reading the arithmetic against the claim: operating result €259k is below €263k so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.099' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 12, \quad \text{Shares} = 425,000
$$

$$
\text{MCap} = 12 \times 425,000 = €5.10\text{ million}
$$

Threshold: exceeds €3.8 million. Actual €5.10 million.

Reading the arithmetic against the claim: market cap €5.10m exceeds €3.8m so the statement holds.

The statement is true.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 318, \quad \frac{\text{Shares}}{1,000} = 425
$$

$$
EPS = \frac{318}{425} = €0.7482
$$

Threshold: exceeds €0.66. Actual ≈ €0.75.

Reading the arithmetic against the claim: EPS €0.75 exceeds €0.66 so the statement holds.

The statement is true.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 19, \quad P_{\min} = 12
$$

$$
\frac{19 - 12}{12} = 58.3\%
$$

Threshold: more than 34.3%. Actual 58.3%.

Reading the arithmetic against the claim: the gap is 58.3%, which exceeds 34.3% so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 381,000, \quad \text{Shares} = 425,000
$$

$$
\frac{381,000}{425,000} = 89.6\%
$$

Threshold: exceed 36.2%. Actual 89.6%.

Reading the arithmetic against the claim: turnover 89.6% exceeds 36.2% so the statement holds.

The statement is true.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 91,000 \quad (March)
$$

Threshold: exceeds 81,302. Actual 91,000.

Reading the arithmetic against the claim: peak volume 91,000 exceeds 81,302 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.100' AND tier = 'full';
