-- Update expanded explanations for 6.1-part4 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['These are textbook advantages of equity finance.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Total equity changed by about 15.5% between the two years.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Non-current liabilities are about 57.1% of equity in Year 1.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Long-term financing covers non-current assets by about 20.7% in year 1.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Trade payables are a current liability regardless of the amount.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.076' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Current liabilities are due within one year; longer debts are non-current.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Current assets gather the short-term asset lines:

Inventory (83) + Trade receivables (99) + Cash and cash equivalents (39)
= 221

Current liabilities gather the short-term claims:

Trade payables (155) + Bank overdraft (29)
= 184

Current ratio = 221 / 184 ≈ 1.20

The claim says the ratio exceeds 1.02. We have about 1.20, which matches that comparison.

The statement is true.', 'Current assets gather the short-term asset lines:

Inventory (83) + Trade receivables (99) + Cash and cash equivalents (39)
= 221

Current liabilities gather the short-term claims:

Trade payables (155) + Bank overdraft (29)
= 184

Current ratio = 221 / 184 ≈ 1.20

The claim says the ratio below 0.77. We have about 1.20, which does not match that comparison.

The statement is false.', 'Acid-test ratio ≈ 0.75.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'From the figures or classification rule involved, debt ratio ≈ 68.1%. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.077' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Intangible and tangible non-current assets, including a development patent, sit within the same balance sheet section.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Resale intent keeps the espresso machine in inventory as a current asset regardless of how long it stays unsold.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Continued operational use makes the espresso machine a non-current asset; inventory is reserved for goods held for resale.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'A buyer intending to use the espresso machine in operations records it as a non-current asset, not inventory, after purchase.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Long-term operational use makes the printing press a non-current tangible asset, not inventory.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.078' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Current liabilities are due within one year; longer debts are non-current.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Current assets = 367

Current liabilities gather the short-term claims:

Current liabilities = 231

Current ratio = 367 / 231 ≈ 1.59

The claim says the ratio below 1.05. We have about 1.59, which does not match that comparison.

The statement is false.', 'Current assets = 367

Current liabilities gather the short-term claims:

Current liabilities = 231

Current ratio = 367 / 231 ≈ 1.59

The claim says the ratio exceeds 1.29. We have about 1.59, which matches that comparison.

The statement is true.', 'Working capital = current assets minus current liabilities.

367 - 231 = 136

The claim cites 136. We have 136, so the figures line up.

The statement is true.', 'From the figures or classification rule involved, debt ratio ≈ 54.4%. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.079' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Classification follows intended use, not physical form alone.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Total assets changed by about 5.8% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Non-current liabilities are about 119.5% of equity in Year 1.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Inventory changed by about 9.9% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Non-current assets are about 64.4% of total assets in year 2.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.080' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Current liabilities are due within one year; longer debts are non-current.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Total assets changed by about 11.9% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Trade payables changed by about 7.8% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Cash and cash equivalents changed by about 17.0% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Total equity changed by about 14.0% between the two years.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.081' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Equity equals assets minus liabilities.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Working capital = current assets minus current liabilities.

309 - 261 = 48

The claim cites 48. We have 48, so the figures line up.

The statement is true.', 'Equity ratio = total equity / total assets.

304 / 845 ≈ 36.0%

The claim says the ratio below 37.5%. We have about 36.0%, which matches that comparison.

The statement is true.', 'Cash and cash equivalents are about 28.5% of current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Inventory is always a current asset.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.082' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Resale intent, not the dealer''s status as a business, places the printing press in inventory rather than among non-current assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Classification of the printing press depends on whether it is used or held for resale, so identical items can differ across balance sheets.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Physical form is not a requirement for classifying a development patent as non-current.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Multi-year protective or operational value groups a development patent with intangible non-current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Because a development patent is not expected to convert into cash within the operating cycle, it is excluded from current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.083' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Market capitalisation = shares × price; price can move for reasons unrelated to value.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Market capitalisation ≈ €10.9 million.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Earnings per share ≈ €0.44.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Apply the case evidence: Range €17-€29. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Turnover ≈ 54.6% of shares outstanding.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.084' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Common shares vote; preferred shares usually emphasise dividend priority.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'From the figures or classification rule involved, price change ≈ 26.3%. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Market capitalisation ≈ €33.2 million.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Earnings per share ≈ €0.34.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Turnover ≈ 47.1% of shares outstanding.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.085' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Intended use, not purchase price, drives the non-current classification of the printing press.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Resale intent keeps the printing press in inventory as a current asset regardless of how long it stays unsold.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Long-term expected benefit, not physical form, justifies classifying a trading permit as non-current.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Long-term value places an intangible trading permit among non-current rather than current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Continued operational use makes the printing press a non-current asset; inventory is reserved for goods held for resale.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.086' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Comparative context matters for return ratios.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Market capitalisation ≈ €11.8 million.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Earnings per share ≈ €0.62.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Turnover ≈ 73.3% of shares outstanding.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Peak monthly volume = 73,000.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.087' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A buyer intending to use the printing press in operations records it as a non-current asset, not inventory, after purchase.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Intangible and tangible non-current assets, including a trading permit, sit within the same balance sheet section.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Physical form is not a requirement for classifying a trading permit as non-current.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Long-term operational use makes the conveyor belt a non-current tangible asset, not inventory.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Multi-year protective or operational value groups a trading permit with intangible non-current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.088' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Secondary-market transfers do not bring cash into the corporation.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'From the figures or classification rule involved, €13.4m → €17.3m. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'From the figures or classification rule involved, price change ≈ 29.2%. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Peak price month vs peak volume month.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Apply the case evidence: 24 → 31. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.089' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Dividends are not a mandatory annual cash outflow.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Market capitalisation ≈ €20.8 million.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Earnings per share ≈ €0.27.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Turnover ≈ 37.5% of shares outstanding.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Peak monthly volume = 84,000.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.090' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Textbook motives for buying shares include dividends, growth, voting and real-value motives.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'From the figures or classification rule involved, price change ≈ 14.3%. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Apply the case evidence: €10.5m → €12.0m. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Market capitalisation ≈ €12.0 million.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'From the figures or classification rule involved, range €19-€24. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.091' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Listed price rises do not transfer cash to the issuer.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Apply the case evidence: Price change ≈ 20.0%. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Market capitalisation ≈ €29.5 million.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Apply the case evidence: €24.6m → €29.5m. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Earnings per share ≈ €0.43.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.092' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Because a trading permit is not expected to convert into cash within the operating cycle, it is excluded from current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Long-term expected benefit, not physical form, justifies classifying a service mark as non-current.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Long-term value places an intangible service mark among non-current rather than current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Intangible and tangible non-current assets, including a service mark, sit within the same balance sheet section.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Physical form is not a requirement for classifying a service mark as non-current.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.093' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Multi-year protective or operational value groups a service mark with intangible non-current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Because a service mark is not expected to convert into cash within the operating cycle, it is excluded from current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Long-term expected benefit, not physical form, justifies classifying a proprietary formula as non-current.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Long-term value places an intangible proprietary formula among non-current rather than current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Resale intent, not the dealer''s status as a business, places the conveyor belt in inventory rather than among non-current assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.094' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Fewer shares increase earnings per share for an unchanged profit.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'From the figures or classification rule involved, price change ≈ 19.5%. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Market capitalisation ≈ €31.7 million.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'From the figures or classification rule involved, €26.5m → €31.7m. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Turnover ≈ 52.5% of shares outstanding.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.095' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['There is no universal legal duty to pay a dividend every year.

The absolute wording "every" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Apply the case evidence: Price change ≈ 25.7%. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Market capitalisation ≈ €26.3 million.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Apply the case evidence: Range €35-€44. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'That reverses the usual voting rights of common versus preferred shares.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.'] WHERE case_id = 'CASE 6.1.096' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Secondary trading does not raise new company funds.

The absolute wording "automatically" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Apply the case evidence: Price change ≈ 12.0%. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Apply the case evidence: Range €22-€28. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Market capitalisation ≈ €16.9 million.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'From the figures or classification rule involved, rose in 1 of 5 steps. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.097' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Classification of the conveyor belt depends on whether it is used or held for resale, so identical items can differ across balance sheets.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Intangible and tangible non-current assets, including a proprietary formula, sit within the same balance sheet section.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Physical form is not a requirement for classifying a proprietary formula as non-current.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Intended use, not purchase price, drives the non-current classification of the conveyor belt.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Resale intent keeps the conveyor belt in inventory as a current asset regardless of how long it stays unsold.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.098' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Continued operational use makes the conveyor belt a non-current asset; inventory is reserved for goods held for resale.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'A buyer intending to use the conveyor belt in operations records it as a non-current asset, not inventory, after purchase.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Physical substance is not required for non-current classification; an operating licence qualifies through its long-term value.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Multi-year protective or operational value groups a proprietary formula with intangible non-current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Because a proprietary formula is not expected to convert into cash within the operating cycle, it is excluded from current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.099' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Textbook motives for buying shares include dividends, growth, voting and real-value motives.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Market capitalisation ≈ €5.1 million.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Earnings per share ≈ €0.40.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'From the figures or classification rule involved, range €11-€16. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Turnover ≈ 72.4% of shares outstanding.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.100' AND tier = 'full';
