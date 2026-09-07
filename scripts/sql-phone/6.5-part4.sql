-- Update expanded explanations for 6.5-part4 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Equity ratio = total equity / total assets.

485 / 960 ≈ 50.5%

The claim says the ratio below 44.6%. We have about 50.5%, which does not match that comparison.

The statement is false.', 'Working capital = current assets minus current liabilities.

380 - 238 = 142

The claim cites 142. We have 142, so the figures line up.

The statement is true.', 'Trade receivables are about 17.6% of current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Cash and cash equivalents are about 28.7% of current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Long-term financing covers non-current assets by about 24.5%.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.076' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Working capital = current assets minus current liabilities.

516 - 237 = 279

The claim cites 279. We have 279, so the figures line up.

The statement is true.', 'Acid-test ratio ≈ 1.20.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Buildings are about 41.4% of total assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Inventory are about 44.8% of current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Long-term financing covers non-current assets by about 40.0%.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.077' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Inventory turnover ≈ 3.91.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Asset turnover ≈ 1.01.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Receivables turnover ≈ 6.95.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Average inventory are about 17.8% of average total assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventory changed by about -3.1% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.5.078' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Current assets gather the short-term asset lines:

Inventory (238) + Trade receivables (95) + Cash and cash equivalents (30)
= 363

Current liabilities gather the short-term claims:

Trade payables (76) + Bank overdraft (89)
= 165

Current ratio = 363 / 165 ≈ 2.20

The claim says the ratio exceeds 1.81. We have about 2.20, which matches that comparison.

The statement is true.', 'Equity ratio = total equity / total assets.

670 / 1151 ≈ 58.2%

The claim says the ratio below 24%. We have about 58.2%, which does not match that comparison.

The statement is false.', 'Buildings are about 44.0% of total assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Cash and cash equivalents are about 8.3% of current assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Long-term financing covers non-current assets by about 25.1%.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.5.079' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The acid-test ratio excludes inventory to provide a stricter liquidity test.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'The standard working capital definition applies to an online retailer: current assets minus current liabilities.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Positive working capital is generally preferable for an online retailer as a cushion over short-term obligations.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Return on capital employed gains meaning chiefly from comparisons over time or with peers.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Return on equity relates profit before interest and tax to equity, not cash to liabilities.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.5.080' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Asset turnover ≈ 1.39.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventory turnover ≈ 4.42.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Receivables turnover ≈ 11.21.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'High turnover signals faster stock rotation.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'From the figures or classification rule involved, revenue = 1,233. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.081' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Inventory turnover ≈ 4.73.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Receivables turnover ≈ 10.60.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'High turnover signals faster stock rotation.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Asset turnover ≈ 1.34.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Apply the case evidence: Revenue = 1,214. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.082' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Current ratio analysis for an online retailer compares current assets with current liabilities.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Return on equity for an online retailer links profit before interest and tax to owners'' equity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Return on capital employed for an online retailer is most useful in comparison rather than in isolation.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Inventory turnover uses cost of sales relative to average inventory, not revenue.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Asset turnover measures how much revenue an online retailer generates per unit of average assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.083' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['When inventory is material, the acid-test ratio differs from the current ratio.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Equity ratio analysis for an online retailer expresses equity as a share of total assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Short-term borrowing can boost cash yet reduce working capital for an online retailer.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'The standard working capital definition applies to a hotel operator: current assets minus current liabilities.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Positive working capital is generally preferable for a hotel operator as a cushion over short-term obligations.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.084' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Current assets = 410

Current liabilities gather the short-term claims:

Current liabilities = 259

Current ratio = 410 / 259 ≈ 1.58

The claim says the ratio exceeds 1.44. We have about 1.58, which matches that comparison.

The statement is true.', 'Apply the case evidence: Debt ratio ≈ 61.7%. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Buildings are about 41.8% of total assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Working capital = current assets minus current liabilities.

410 - 259 = 151

The claim cites 151. We have 151, so the figures line up.

The statement is true.', 'Equity ratio = total equity / total assets.

459 / 1198 ≈ 38.3%

The claim says the ratio below 44.9%. We have about 38.3%, which matches that comparison.

The statement is true.'] WHERE case_id = 'CASE 6.5.085' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Inventory turnover ≈ 4.29.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Asset turnover ≈ 1.15.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Average collection period ≈ 36 days.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Average inventory are about 18.4% of average total assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventory changed by about 4.1% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.5.086' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Equity ratio = total equity / total assets.

528 / 1148 ≈ 46.0%

The claim says the ratio below 23.5%. We have about 46.0%, which does not match that comparison.

The statement is false.', 'Working capital = current assets minus current liabilities.

307 - 185 = 122

The claim cites 122. We have 122, so the figures line up.

The statement is true.', 'Working capital = current assets minus current liabilities.

307 - 185 = 122

Working capital is 122, which is positive.

The statement is true.', 'Equity ratio = total equity / total assets.

528 / 1148 ≈ 46.0%

The claim says the ratio exceeds 31.4%. We have about 46.0%, which matches that comparison.

The statement is true.', 'Acid-test (quick) assets exclude inventory.

Current assets 307 minus inventory 84 = 223

Acid-test ratio = 223 / 185 ≈ 1.21

The claim says the ratio exceeds 1.04. We have about 1.21, which matches that comparison.

The statement is true.'] WHERE case_id = 'CASE 6.5.087' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Inventory turnover ≈ 4.21.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Asset turnover ≈ 1.17.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Average inventory are about 17.5% of average total assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Receivables turnover ≈ 7.53.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Trade receivables moved from 135 to 143.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.5.088' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Working capital = current assets minus current liabilities.

300 - 199 = 101

The claim cites 101. We have 101, so the figures line up.

The statement is true.', 'Equity ratio = total equity / total assets.

421 / 944 ≈ 44.6%

The claim says the ratio below 39.9%. We have about 44.6%, which does not match that comparison.

The statement is false.', 'From the figures or classification rule involved, debt ratio ≈ 55.4%. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Trade receivables are about 30.0% of current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Buildings are about 41.1% of total assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.5.089' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Current assets = 336

Current liabilities gather the short-term claims:

Current liabilities = 116

Current ratio = 336 / 116 ≈ 2.90

The claim says the ratio exceeds 1.01. We have about 2.90, which matches that comparison.

The statement is true.', 'Working capital = current assets minus current liabilities.

336 - 116 = 220

The claim cites 220. We have 220, so the figures line up.

The statement is true.', 'Acid-test ratio ≈ 1.42.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current assets = 336

Current liabilities gather the short-term claims:

Current liabilities = 116

Current ratio = 336 / 116 ≈ 2.90

The claim says the ratio below 0.7. We have about 2.90, which does not match that comparison.

The statement is false.', 'Equity ratio = total equity / total assets.

709 / 1061 ≈ 66.8%

The claim says the ratio below 35.1%. We have about 66.8%, which does not match that comparison.

The statement is false.'] WHERE case_id = 'CASE 6.5.090' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Asset turnover ≈ 1.21.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventory turnover ≈ 4.34.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'From the figures or classification rule involved, revenue = 1,127. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Receivables turnover ≈ 10.89.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Cost of sales is about 66.6% of revenue.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.5.091' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Current ratio analysis for a hotel operator compares current assets with current liabilities.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Working capital is current assets minus current liabilities, not the reverse.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Return on equity for a hotel operator links profit before interest and tax to owners'' equity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Return on capital employed for a hotel operator is most useful in comparison rather than in isolation.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Negative working capital means current liabilities exceed current assets and does not imply excess cash.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.'] WHERE case_id = 'CASE 6.5.092' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Current assets gather the short-term asset lines:

Inventory (182) + Trade receivables (153) + Cash and cash equivalents (34)
= 369

Current liabilities gather the short-term claims:

Trade payables (188) + Bank overdraft (81)
= 269

Current ratio = 369 / 269 ≈ 1.37

The claim says the ratio exceeds 1.87. We have about 1.37, which does not match that comparison.

The statement is false.', 'Working capital = current assets minus current liabilities.

369 - 269 = 100

The claim cites 100. We have 100, so the figures line up.

The statement is true.', 'Equity ratio = total equity / total assets.

264 / 1011 ≈ 26.1%

The claim says the ratio below 20.4%. We have about 26.1%, which does not match that comparison.

The statement is false.', 'Apply the case evidence: Debt ratio ≈ 74.2%. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Inventory are about 49.3% of current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.093' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Return on equity ≈ 39.3%.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Cash conversion ≈ 100.0% of the operating result.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Return on capital employed ≈ 23.4%.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Equity ratio = total equity / total assets.

610 / 1549 ≈ 39.4%

The claim says the ratio exceeds 44.5%. We have about 39.4%, which matches that comparison.

The statement is true.', 'Inventory are about 21.3% of total assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.5.094' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Asset turnover measures how much revenue a hotel operator generates per unit of average assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Equity ratio analysis for a hotel operator expresses equity as a share of total assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'The acid-test ratio excludes inventory to provide a stricter liquidity test.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Short-term borrowing can boost cash yet reduce working capital for a hotel operator.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Return on capital employed gains meaning chiefly from comparisons over time or with peers.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.'] WHERE case_id = 'CASE 6.5.095' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Market capitalisation ≈ €22.6 million.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'From the figures or classification rule involved, range €24-€30. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Turnover ≈ 49.3% of shares outstanding.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Peak monthly volume = 93,000.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Operating result = 301.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.5.096' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The standard working capital definition applies to a pharmaceutical distributor: current assets minus current liabilities.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Return on equity relates profit before interest and tax to equity, not cash to liabilities.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventory turnover uses cost of sales relative to average inventory, not revenue.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Positive working capital is generally preferable for a pharmaceutical distributor as a cushion over short-term obligations.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'When inventory is material, the acid-test ratio differs from the current ratio.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.'] WHERE case_id = 'CASE 6.5.097' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Market capitalisation ≈ €22.1 million.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'From the figures or classification rule involved, price change ≈ 25.0%. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'From the figures or classification rule involved, range €20-€25. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'From the figures or classification rule involved, €17.6m → €22.1m. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Turnover ≈ 37.9% of shares outstanding.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.098' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Market capitalisation ≈ €7.9 million.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Turnover ≈ 91.0% of shares outstanding.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Peak monthly volume = 90,000.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Shares outstanding = 466,000.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Operating result = 259.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.099' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Market capitalisation ≈ €5.1 million.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Earnings per share ≈ €0.75.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'From the figures or classification rule involved, range €12-€19. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Turnover ≈ 89.6% of shares outstanding.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Peak monthly volume = 91,000.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.100' AND tier = 'full';
