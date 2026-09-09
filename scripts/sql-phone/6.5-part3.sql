-- Update expanded explanations for 6.5-part3 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Return on capital employed for a construction group is most useful in comparison rather than in isolation.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Working capital is current assets minus current liabilities, not the reverse.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Asset turnover measures how much revenue a construction group generates per unit of average assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Equity ratio analysis for a construction group expresses equity as a share of total assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Negative working capital means current liabilities exceed current assets and does not imply excess cash.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.'] WHERE case_id = 'CASE 6.5.051' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Asset turnover ≈ 1.33.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Average collection period ≈ 42 days.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Average inventory are about 16.1% of average total assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'High turnover signals faster stock rotation.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Inventory changed by about 36.3% between the two years.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.052' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Asset turnover ≈ 1.43.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventory turnover ≈ 5.22.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Average collection period ≈ 36 days.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Average inventory are about 18.6% of average total assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Receivables turnover ≈ 10.18.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.053' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Working capital = current assets minus current liabilities.

456 - 213 = 243

The claim cites 243. We have 243, so the figures line up.

The statement is true.', 'Inventory are about 48.5% of current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current assets = 456

Current liabilities gather the short-term claims:

Current liabilities = 213

Current ratio = 456 / 213 ≈ 2.14

The claim says the ratio below 1.17. We have about 2.14, which does not match that comparison.

The statement is false.', 'Trade receivables are about 39.3% of current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Equity ratio = total equity / total assets.

530 / 1094 ≈ 48.4%

The claim says the ratio below 20.9%. We have about 48.4%, which does not match that comparison.

The statement is false.'] WHERE case_id = 'CASE 6.5.054' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Debt ratio analysis for a construction group expresses total liabilities relative to total assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Short-term borrowing can boost cash yet reduce working capital for a construction group.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'The acid-test ratio excludes inventory to provide a stricter liquidity test.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'The standard working capital definition applies to a fashion retailer: current assets minus current liabilities.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Positive working capital is generally preferable for a fashion retailer as a cushion over short-term obligations.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.055' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Return on capital employed gains meaning chiefly from comparisons over time or with peers.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Return on equity relates profit before interest and tax to equity, not cash to liabilities.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Current ratio analysis for a fashion retailer compares current assets with current liabilities.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Return on equity for a fashion retailer links profit before interest and tax to owners'' equity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Inventory turnover uses cost of sales relative to average inventory, not revenue.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.5.056' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Asset turnover ≈ 1.29.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Receivables turnover ≈ 9.07.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventory turnover ≈ 4.48.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'High turnover signals faster stock rotation.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Inventory changed by about 50.8% between the two years.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.057' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Current assets gather the short-term asset lines:

Inventory (124) + Trade receivables (65) + Cash and cash equivalents (72)
= 261

Current liabilities gather the short-term claims:

Trade payables (178) + Bank overdraft (28)
= 206

Current ratio = 261 / 206 ≈ 1.27

The claim says the ratio below 1.29. We have about 1.27, which matches that comparison.

The statement is true.', 'Apply the case evidence: Debt ratio ≈ 68.8%. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Buildings are about 41.0% of total assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Inventory are about 47.5% of current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Trade receivables are about 24.9% of current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.058' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['When inventory is material, the acid-test ratio differs from the current ratio.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Return on capital employed for a fashion retailer is most useful in comparison rather than in isolation.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Working capital is current assets minus current liabilities, not the reverse.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Negative working capital means current liabilities exceed current assets and does not imply excess cash.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'The acid-test ratio excludes inventory to provide a stricter liquidity test.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.5.059' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Acid-test ratio ≈ 1.03.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Equity ratio = total equity / total assets.

310 / 963 ≈ 32.2%

The claim says the ratio below 28.8%. We have about 32.2%, which does not match that comparison.

The statement is false.', 'Working capital = current assets minus current liabilities.

280 - 178 = 102

The claim cites 102. We have 102, so the figures line up.

The statement is true.', 'Buildings are about 49.2% of total assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventory are about 34.6% of current assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.5.060' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Receivables turnover ≈ 7.70.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Average inventory are about 18.0% of average total assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventory changed by about 0.6% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Cost of sales is about 65.8% of revenue.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventory turnover ≈ 4.10.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.061' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Asset turnover measures how much revenue a fashion retailer generates per unit of average assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Equity ratio analysis for a fashion retailer expresses equity as a share of total assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Short-term borrowing can boost cash yet reduce working capital for a fashion retailer.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'The standard working capital definition applies to a utility company: current assets minus current liabilities.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Positive working capital is generally preferable for a utility company as a cushion over short-term obligations.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.062' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Return on capital employed gains meaning chiefly from comparisons over time or with peers.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Current ratio analysis for a utility company compares current assets with current liabilities.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Return on equity relates profit before interest and tax to equity, not cash to liabilities.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Return on equity for a utility company links profit before interest and tax to owners'' equity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Return on capital employed for a utility company is most useful in comparison rather than in isolation.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.063' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Asset turnover measures how much revenue a utility company generates per unit of average assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Equity ratio analysis for a utility company expresses equity as a share of total assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Short-term borrowing can boost cash yet reduce working capital for a utility company.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Inventory turnover uses cost of sales relative to average inventory, not revenue.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'The standard working capital definition applies to a wholesaler: current assets minus current liabilities.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.064' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Working capital = current assets minus current liabilities.

265 - 207 = 58

The claim cites 58. We have 58, so the figures line up.

The statement is true.', 'Apply the case evidence: Debt ratio ≈ 65.3%. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Inventory are about 52.1% of current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Trade receivables are about 32.8% of current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Inventory is always a current asset.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.065' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Inventory turnover ≈ 4.08.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Asset turnover ≈ 1.04.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Receivables turnover ≈ 8.68.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Average inventory are about 17.9% of average total assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Trade receivables moved from 107 to 108.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.5.066' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Positive working capital is generally preferable for a wholesaler as a cushion over short-term obligations.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current ratio analysis for a wholesaler compares current assets with current liabilities.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'When inventory is material, the acid-test ratio differs from the current ratio.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Return on equity for a wholesaler links profit before interest and tax to owners'' equity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Return on capital employed for a wholesaler is most useful in comparison rather than in isolation.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.067' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Current assets gather the short-term asset lines:

Inventory (215) + Trade receivables (156) + Cash and cash equivalents (80)
= 451

Current liabilities gather the short-term claims:

Trade payables (228) + Bank overdraft (39)
= 267

Current ratio = 451 / 267 ≈ 1.69

The claim says the ratio below 0.78. We have about 1.69, which does not match that comparison.

The statement is false.', 'Current assets gather the short-term asset lines:

Inventory (215) + Trade receivables (156) + Cash and cash equivalents (80)
= 451

Current liabilities gather the short-term claims:

Trade payables (228) + Bank overdraft (39)
= 267

Current ratio = 451 / 267 ≈ 1.69

The claim says the ratio exceeds 1.53. We have about 1.69, which matches that comparison.

The statement is true.', 'Acid-test ratio ≈ 0.88.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Working capital = current assets minus current liabilities.

451 - 267 = 184

The claim cites 184. We have 184, so the figures line up.

The statement is true.', 'Trade receivables are about 34.6% of current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.068' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Return on capital employed ≈ 21.1%.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Return on equity ≈ 36.6%.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Cash conversion ≈ 113.0% of the operating result.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventory are about 7.4% of total assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Equity ratio = total equity / total assets.

503 / 1397 ≈ 36.0%

The claim says the ratio exceeds 35.4%. We have about 36.0%, which matches that comparison.

The statement is true.'] WHERE case_id = 'CASE 6.5.069' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Working capital is current assets minus current liabilities, not the reverse.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Negative working capital means current liabilities exceed current assets and does not imply excess cash.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Asset turnover measures how much revenue a wholesaler generates per unit of average assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Equity ratio analysis for a wholesaler expresses equity as a share of total assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Short-term borrowing can boost cash yet reduce working capital for a wholesaler.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.070' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Inventory turnover ≈ 4.46.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Receivables turnover ≈ 8.41.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Average collection period ≈ 43 days.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'From the figures or classification rule involved, revenue = 1,026. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Cost of sales is about 69.4% of revenue.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.071' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Current assets = 289

Current liabilities gather the short-term claims:

Current liabilities = 170

Current ratio = 289 / 170 ≈ 1.70

The claim says the ratio exceeds 1.4. We have about 1.70, which matches that comparison.

The statement is true.', 'Current assets = 289

Current liabilities gather the short-term claims:

Current liabilities = 170

Current ratio = 289 / 170 ≈ 1.70

The claim says the ratio below 0.91. We have about 1.70, which does not match that comparison.

The statement is false.', 'Working capital = current assets minus current liabilities.

289 - 170 = 119

The claim cites 119. We have 119, so the figures line up.

The statement is true.', 'Equity ratio = total equity / total assets.

393 / 1041 ≈ 37.8%

The claim says the ratio below 36.4%. We have about 37.8%, which does not match that comparison.

The statement is false.', 'Apply the case evidence: Debt ratio ≈ 62.2%. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.5.072' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Receivables turnover ≈ 8.49.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventory turnover ≈ 4.28.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Average collection period ≈ 43 days.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Average inventory are about 16.8% of average total assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Apply the case evidence: Revenue = 1,036. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.5.073' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Current assets gather the short-term asset lines:

Inventory (169) + Trade receivables (103) + Cash and cash equivalents (83)
= 355

Current liabilities gather the short-term claims:

Trade payables (143) + Bank overdraft (34)
= 177

Current ratio = 355 / 177 ≈ 2.01

The claim says the ratio exceeds 1.8. We have about 2.01, which matches that comparison.

The statement is true.', 'Acid-test ratio ≈ 1.05.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Buildings are about 32.7% of total assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'A bank loan is a liability, not equity, regardless of its size.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Working capital = current assets minus current liabilities.

355 - 177 = 178

The claim cites 178. We have 178, so the figures line up.

The statement is true.'] WHERE case_id = 'CASE 6.5.074' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Asset turnover ≈ 1.15.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Inventory turnover ≈ 4.16.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Receivables turnover ≈ 7.89.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Average collection period ≈ 46 days.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'High turnover signals faster stock rotation.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.075' AND tier = 'full';
