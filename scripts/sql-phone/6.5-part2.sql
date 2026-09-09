-- Update expanded explanations for 6.5-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Secondary trading does not raise new company funds.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current assets gather the short-term asset lines:

Inventory (107) + Trade receivables (135) + Cash and cash equivalents (96)
= 338

Current liabilities gather the short-term claims:

Trade payables (135) + Bank overdraft (32)
= 167

Current ratio = 338 / 167 ≈ 2.02

The claim says the ratio below 1.21. We have about 2.02, which does not match that comparison.

The statement is false.', 'Equity ratio = total equity / total assets.

426 / 1027 ≈ 41.5%

The claim says the ratio below 21%. We have about 41.5%, which does not match that comparison.

The statement is false.', 'Buildings are about 35.0% of total assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventory are about 31.7% of current assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.5.026' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Asset turnover ≈ 1.34.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Average collection period ≈ 33 days.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Average inventory are about 18.9% of average total assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Cost of sales is about 63.5% of revenue.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventory turnover ≈ 4.50.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.027' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Asset turnover ≈ 1.34.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Inventory turnover ≈ 4.85.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Receivables turnover ≈ 10.81.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'High turnover signals faster stock rotation.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'From the figures or classification rule involved, revenue = 1,249. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.028' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Current assets = 463

Current liabilities gather the short-term claims:

Current liabilities = 128

Current ratio = 463 / 128 ≈ 3.62

The claim says the ratio exceeds 1.55. We have about 3.62, which matches that comparison.

The statement is true.', 'Equity ratio = total equity / total assets.

882 / 1347 ≈ 65.5%

The claim says the ratio below 28.7%. We have about 65.5%, which does not match that comparison.

The statement is false.', 'Apply the case evidence: Debt ratio ≈ 34.5%. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Working capital = current assets minus current liabilities.

463 - 128 = 335

The claim cites 335. We have 335, so the figures line up.

The statement is true.', 'Buildings are about 36.0% of total assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.5.029' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Return on equity for a supermarket chain links profit before interest and tax to owners'' equity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'A rising debt ratio generally signals greater reliance on borrowing and higher, not lower, financial risk for owners.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Financial statement analysis is commonly organised around liquidity, profitability, efficiency and structure together, not profitability alone.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Return on capital employed for a supermarket chain is most useful in comparison rather than in isolation.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Asset turnover measures how much revenue a supermarket chain generates per unit of average assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.030' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Equity ratio analysis for a supermarket chain expresses equity as a share of total assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Short-term borrowing can boost cash yet reduce working capital for a supermarket chain.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'The standard working capital definition applies to a consulting firm: current assets minus current liabilities.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Positive working capital is generally preferable for a consulting firm as a cushion over short-term obligations.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current ratio analysis for a consulting firm compares current assets with current liabilities.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.031' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Return on equity for a consulting firm links profit before interest and tax to owners'' equity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Return on capital employed for a consulting firm is most useful in comparison rather than in isolation.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Asset turnover measures how much revenue a consulting firm generates per unit of average assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Equity ratio analysis for a consulting firm expresses equity as a share of total assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Short-term borrowing can boost cash yet reduce working capital for a consulting firm.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.032' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Liquidity analysis focuses on meeting short-term obligations, not long-term profitability.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Profitability analysis relates profit to the equity or capital employed that generated it, not just its absolute size.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'The standard working capital definition applies to a manufacturer: current assets minus current liabilities.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Financial efficiency analysis is specifically about how effectively assets generate revenue.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Financial structure analysis examines the equity-versus-borrowing balance, not inventory levels.

The absolute wording "exclusively" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.'] WHERE case_id = 'CASE 6.5.033' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Inventory turnover ≈ 3.87.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Asset turnover ≈ 1.10.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'High turnover signals faster stock rotation.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Apply the case evidence: Revenue = 1,019. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Receivables turnover ≈ 8.42.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.5.034' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Working capital = current assets minus current liabilities.

274 - 224 = 50

The claim cites 50. We have 50, so the figures line up.

The statement is true.', 'Equity ratio = total equity / total assets.

586 / 1157 ≈ 50.6%

The claim says the ratio below 16.6%. We have about 50.6%, which does not match that comparison.

The statement is false.', 'From the figures or classification rule involved, debt ratio ≈ 49.4%. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Buildings are about 41.7% of total assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Trade receivables are about 36.5% of current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.035' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Average collection period ≈ 37 days.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Average inventory are about 20.7% of average total assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventory turnover ≈ 3.69.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Inventory changed by about 15.9% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Trade receivables moved from 111 to 103.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.5.036' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Current assets = 409

Current liabilities gather the short-term claims:

Current liabilities = 168

Current ratio = 409 / 168 ≈ 2.43

The claim says the ratio below 1.07. We have about 2.43, which does not match that comparison.

The statement is false.', 'Equity ratio = total equity / total assets.

567 / 1056 ≈ 53.7%

The claim says the ratio below 41.1%. We have about 53.7%, which does not match that comparison.

The statement is false.', 'From the figures or classification rule involved, debt ratio ≈ 46.3%. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Buildings are about 29.3% of total assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Acid-test ratio ≈ 1.13.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.037' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Equity ratio = total equity / total assets.

821 / 1301 ≈ 63.1%

The claim says the ratio below 34.9%. We have about 63.1%, which does not match that comparison.

The statement is false.', 'Working capital = current assets minus current liabilities.

436 - 152 = 284

The claim cites 284. We have 284, so the figures line up.

The statement is true.', 'Cash and cash equivalents are about 25.7% of current assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'A bank loan is a liability, not equity, regardless of its size.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'A bank overdraft is a current liability.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.5.038' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Asset turnover ≈ 1.33.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Inventory turnover ≈ 5.51.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Average inventory are about 16.2% of average total assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Receivables turnover ≈ 9.65.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'High turnover signals faster stock rotation.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.039' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Positive working capital is generally preferable for a manufacturer as a cushion over short-term obligations.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current ratio analysis for a manufacturer compares current assets with current liabilities.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Return on equity for a manufacturer links profit before interest and tax to owners'' equity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Same-industry peers, not unrelated competitors, provide the most reliable ratio benchmark.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Multi-year tracking reveals trends that a single year''s figure cannot show on its own.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.5.040' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Current assets gather the short-term asset lines:

Inventory (113) + Trade receivables (64) + Cash and cash equivalents (91)
= 268

Current liabilities gather the short-term claims:

Trade payables (96) + Bank overdraft (50)
= 146

Current ratio = 268 / 146 ≈ 1.84

The claim says the ratio below 0.87. We have about 1.84, which does not match that comparison.

The statement is false.', 'Equity ratio = total equity / total assets.

520 / 1094 ≈ 47.5%

The claim says the ratio below 36.9%. We have about 47.5%, which does not match that comparison.

The statement is false.', 'Apply the case evidence: Debt ratio ≈ 52.5%. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Current assets gather the short-term asset lines:

Inventory (113) + Trade receivables (64) + Cash and cash equivalents (91)
= 268

Current liabilities gather the short-term claims:

Trade payables (96) + Bank overdraft (50)
= 146

Current ratio = 268 / 146 ≈ 1.84

The claim says the ratio exceeds 1.68. We have about 1.84, which matches that comparison.

The statement is true.', 'Buildings are about 45.1% of total assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.5.041' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Average inventory are about 16.7% of average total assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Asset turnover ≈ 1.28.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Cost of sales is about 66.9% of revenue.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Trade receivables moved from 129 to 150.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventory turnover ≈ 5.13.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.042' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Cross-industry benchmarks require adjustment for differing business models to remain reliable.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Return on capital employed for a manufacturer is most useful in comparison rather than in isolation.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'A rounded assessment draws on liquidity, profitability, efficiency and structure together, not one ratio alone.

The absolute wording "entirely" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'The two measures use the same profit figure but divide it by different capital bases, so they generally differ.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Inventory turnover and asset turnover relate to different parts of the asset base and can move independently.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.'] WHERE case_id = 'CASE 6.5.043' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Receivables turnover ≈ 9.94.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Asset turnover ≈ 1.20.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Average collection period ≈ 37 days.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventory turnover ≈ 5.31.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Average inventory are about 15.8% of average total assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.044' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Trade receivables are about 35.2% of current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Inventory is always a current asset.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Equity ratio = total equity / total assets.

417 / 969 ≈ 43.0%

The claim says the ratio exceeds 34%. We have about 43.0%, which matches that comparison.

The statement is true.', 'The balance sheet balances at 969.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current assets = 227

Current liabilities gather the short-term claims:

Current liabilities = 287

Current ratio = 227 / 287 ≈ 0.79

The computed current ratio is about 0.79.

The statement is true.'] WHERE case_id = 'CASE 6.5.045' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Asset turnover measures how much revenue a manufacturer generates per unit of average assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Equity ratio analysis for a manufacturer expresses equity as a share of total assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Working capital is current assets minus current liabilities, not the reverse.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Negative working capital means current liabilities exceed current assets and does not imply excess cash.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'The acid-test ratio excludes inventory to provide a stricter liquidity test.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.5.046' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Debt ratio analysis for a manufacturer expresses total liabilities relative to total assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Short-term borrowing can boost cash yet reduce working capital for a manufacturer.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'The standard working capital definition applies to a construction group: current assets minus current liabilities.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Positive working capital is generally preferable for a construction group as a cushion over short-term obligations.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current ratio analysis for a construction group compares current assets with current liabilities.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.047' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Asset turnover ≈ 1.34.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Average collection period ≈ 34 days.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventory turnover ≈ 4.48.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Receivables turnover ≈ 10.78.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Average inventory are about 19.4% of average total assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.5.048' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Return on equity for a construction group links profit before interest and tax to owners'' equity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Return on capital employed gains meaning chiefly from comparisons over time or with peers.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Return on equity relates profit before interest and tax to equity, not cash to liabilities.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventory turnover uses cost of sales relative to average inventory, not revenue.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'When inventory is material, the acid-test ratio differs from the current ratio.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.'] WHERE case_id = 'CASE 6.5.049' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Acid-test ratio ≈ 1.08.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current assets gather the short-term asset lines:

Inventory (185) + Trade receivables (73) + Cash and cash equivalents (83)
= 341

Current liabilities gather the short-term claims:

Trade payables (62) + Bank overdraft (82)
= 144

Current ratio = 341 / 144 ≈ 2.37

The claim says the ratio below 0.66. We have about 2.37, which does not match that comparison.

The statement is false.', 'Equity ratio = total equity / total assets.

364 / 1004 ≈ 36.3%

The claim says the ratio below 40.5%. We have about 36.3%, which matches that comparison.

The statement is true.', 'Inventory are about 54.3% of current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Trade receivables are about 21.4% of current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.050' AND tier = 'full';
