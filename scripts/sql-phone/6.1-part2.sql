-- Update expanded explanations for 6.1-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Resale intent places the packaging line in inventory, a current-asset category.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Multi-period operational benefit qualifies the packaging line as a tangible fixed asset.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Stock awaiting sale remains inventory, not a fixed asset, for the dealer holding it.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Continued operational use beyond one year makes the concrete mixer a non-current tangible asset.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Held for resale rather than use, the concrete mixer counts as inventory within current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.026' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Classification follows intended use, not physical form alone.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Non-current liabilities are about 60.3% of equity in Year 2.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Long-term financing covers non-current assets by about 27.9% in year 1.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Trade payables are a current liability regardless of the amount.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Total liabilities changed by about 9.7% between the two years.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.027' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Intended use versus resale intent, not physical form, decides whether the concrete mixer is non-current or current.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'An intention to use the concrete mixer over the long term is the deciding factor for non-current classification.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Resale intent, not the dealer''s status as a business, places the packaging line in inventory rather than among non-current assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Resale intent places the concrete mixer in inventory, a current-asset category.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Multi-period operational benefit qualifies the concrete mixer as a tangible fixed asset.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.028' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Stock awaiting sale remains inventory, not a fixed asset, for the dealer holding it.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Continued operational use beyond one year makes the laptop computer a non-current tangible asset.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Held for resale rather than use, the laptop computer counts as inventory within current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Classification of the packaging line depends on whether it is used or held for resale, so identical items can differ across balance sheets.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Intended use versus resale intent, not physical form, decides whether the laptop computer is non-current or current.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.029' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Classification follows intended use, not physical form alone.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current assets gather the short-term asset lines:

Inventory (152) + Trade receivables (68) + Cash and cash equivalents (44)
= 264

Current liabilities gather the short-term claims:

Trade payables (120) + Bank overdraft (27)
= 147

Current ratio = 264 / 147 ≈ 1.80

The claim says the ratio exceeds 1.31. We have about 1.80, which matches that comparison.

The statement is true.', 'Working capital = current assets minus current liabilities.

264 - 147 = 117

The claim cites 117. We have 117, so the figures line up.

The statement is true.', 'Equity ratio = total equity / total assets.

339 / 977 ≈ 34.7%

The claim says the ratio below 42.8%. We have about 34.7%, which matches that comparison.

The statement is true.', 'Inventory are about 57.6% of current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.030' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Assets = liabilities + equity is the fundamental balance sheet equation.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Acid-test ratio ≈ 0.61.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Equity ratio = total equity / total assets.

449 / 966 ≈ 46.5%

The claim says the ratio below 25.8%. We have about 46.5%, which does not match that comparison.

The statement is false.', 'Apply the case evidence: Debt ratio ≈ 53.5%. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Buildings are about 32.0% of total assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.031' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['An intention to use the laptop computer over the long term is the deciding factor for non-current classification.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Resale intent places the laptop computer in inventory, a current-asset category.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Intended use, not purchase price, drives the non-current classification of the packaging line.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Multi-period operational benefit qualifies the laptop computer as a tangible fixed asset.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Resale intent keeps the packaging line in inventory as a current asset regardless of how long it stays unsold.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.032' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Long-term assets should be financed with long-term financial resources.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Total equity changed by about 5.8% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Total assets changed by about 9.8% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventory changed by about 17.1% between the two years.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Trade payables changed by about 17.2% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.033' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Current liabilities are due within one year; longer debts are non-current.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Non-current liabilities are about 248.9% of equity in Year 1.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Total equity changed by about 28.9% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Non-current assets are about 68.8% of total assets in year 2.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Working capital = current assets minus current liabilities.

291 - 296 = -5

The claim cites 2. We have -5, so the figures line up.

The statement is true.'] WHERE case_id = 'CASE 6.1.034' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Equity ratio = total equity / total assets.

265 / 801 ≈ 33.1%

The statement is true.', 'Current assets gather the short-term asset lines:

Inventory (113) + Trade receivables (85) + Cash and cash equivalents (73)
= 271

Current liabilities gather the short-term claims:

Trade payables (94) + Bank overdraft (37)
= 131

Current ratio = 271 / 131 ≈ 2.07

The claim says the ratio exceeds 1.75. We have about 2.07, which matches that comparison.

The statement is true.', 'Current assets gather the short-term asset lines:

Inventory (113) + Trade receivables (85) + Cash and cash equivalents (73)
= 271

Current liabilities gather the short-term claims:

Trade payables (94) + Bank overdraft (37)
= 131

Current ratio = 271 / 131 ≈ 2.07

The claim says the ratio below 0.75. We have about 2.07, which does not match that comparison.

The statement is false.', 'Buildings are about 39.8% of total assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Working capital = current assets minus current liabilities.

271 - 131 = 140

The claim cites 140. We have 140, so the figures line up.

The statement is true.'] WHERE case_id = 'CASE 6.1.035' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Long-term assets should be financed with long-term financial resources.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Current assets = 466

Current liabilities gather the short-term claims:

Current liabilities = 231

Current ratio = 466 / 231 ≈ 2.02

The claim says the ratio below 1.08. We have about 2.02, which does not match that comparison.

The statement is false.', 'Working capital = current assets minus current liabilities.

466 - 231 = 235

The claim cites 235. We have 235, so the figures line up.

The statement is true.', 'Acid-test ratio ≈ 1.12.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventory are about 44.4% of current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.036' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Equity ratio = total equity / total assets.

371 / 957 ≈ 38.8%

The statement is true.', 'Non-current liabilities are about 83.6% of equity in Year 1.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Non-current liabilities are about 83.3% of equity in Year 2.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Non-current assets are about 68.3% of total assets in year 2.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current ratio in Year 2 is about 1.12.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.037' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Equity ratio = total equity / total assets.

510 / 1204 ≈ 42.4%

The statement is true.', 'Total assets changed by about 6.5% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Non-current liabilities are about 94.1% of equity in Year 1.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Inventory changed by about 9.8% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Trade payables changed by about 12.0% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.038' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Stock awaiting sale remains inventory, not a fixed asset, for the dealer holding it.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Continued operational use beyond one year makes the refrigerated van a non-current tangible asset.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Held for resale rather than use, the refrigerated van counts as inventory within current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Intended use versus resale intent, not physical form, decides whether the refrigerated van is non-current or current.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'An intention to use the refrigerated van over the long term is the deciding factor for non-current classification.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.039' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Equity equals assets minus liabilities.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current assets gather the short-term asset lines:

Inventory (95) + Trade receivables (60) + Cash and cash equivalents (31)
= 186

Current liabilities gather the short-term claims:

Trade payables (89) + Bank overdraft (54)
= 143

Current ratio = 186 / 143 ≈ 1.30

The claim says the ratio exceeds 1.33. We have about 1.30, which does not match that comparison.

The statement is false.', 'Current assets gather the short-term asset lines:

Inventory (95) + Trade receivables (60) + Cash and cash equivalents (31)
= 186

Current liabilities gather the short-term claims:

Trade payables (89) + Bank overdraft (54)
= 143

Current ratio = 186 / 143 ≈ 1.30

The claim says the ratio below 0.63. We have about 1.30, which does not match that comparison.

The statement is false.', 'Acid-test ratio ≈ 0.64.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Equity ratio = total equity / total assets.

467 / 891 ≈ 52.4%

The claim says the ratio below 44%. We have about 52.4%, which does not match that comparison.

The statement is false.'] WHERE case_id = 'CASE 6.1.040' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Resale intent places the refrigerated van in inventory, a current-asset category.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Multi-period operational benefit qualifies the refrigerated van as a tangible fixed asset.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Stock awaiting sale remains inventory, not a fixed asset, for the dealer holding it.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Continued operational use beyond one year makes the woodworking lathe a non-current tangible asset.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Held for resale rather than use, the woodworking lathe counts as inventory within current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.041' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Continued operational use makes the packaging line a non-current asset; inventory is reserved for goods held for resale.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Intended use versus resale intent, not physical form, decides whether the woodworking lathe is non-current or current.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'An intention to use the woodworking lathe over the long term is the deciding factor for non-current classification.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Resale intent places the woodworking lathe in inventory, a current-asset category.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Multi-period operational benefit qualifies the woodworking lathe as a tangible fixed asset.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.042' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Stock awaiting sale remains inventory, not a fixed asset, for the dealer holding it.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Continued operational use beyond one year makes the espresso machine a non-current tangible asset.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Held for resale rather than use, the espresso machine counts as inventory within current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Intended use versus resale intent, not physical form, decides whether the espresso machine is non-current or current.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'An intention to use the espresso machine over the long term is the deciding factor for non-current classification.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.043' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Equity ratio = total equity / total assets.

681 / 1293 ≈ 52.7%

The statement is true.', 'Current assets = 468

Current liabilities gather the short-term claims:

Current liabilities = 221

Current ratio = 468 / 221 ≈ 2.12

The claim says the ratio below 0.64. We have about 2.12, which does not match that comparison.

The statement is false.', 'Current assets = 468

Current liabilities gather the short-term claims:

Current liabilities = 221

Current ratio = 468 / 221 ≈ 2.12

The claim says the ratio exceeds 1.85. We have about 2.12, which matches that comparison.

The statement is true.', 'Equity ratio = total equity / total assets.

681 / 1293 ≈ 52.7%

The claim says the ratio below 26.8%. We have about 52.7%, which does not match that comparison.

The statement is false.', 'Apply the case evidence: Debt ratio ≈ 47.3%. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.044' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Resale intent places the espresso machine in inventory, a current-asset category.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'A buyer intending to use the packaging line in operations records it as a non-current asset, not inventory, after purchase.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Multi-period operational benefit qualifies the espresso machine as a tangible fixed asset.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Long-term operational use makes the concrete mixer a non-current tangible asset, not inventory.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Stock awaiting sale remains inventory, not a fixed asset, for the dealer holding it.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.045' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Continued operational use beyond one year makes the printing press a non-current tangible asset.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Resale intent, not the dealer''s status as a business, places the concrete mixer in inventory rather than among non-current assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Classification of the concrete mixer depends on whether it is used or held for resale, so identical items can differ across balance sheets.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Intended use, not purchase price, drives the non-current classification of the concrete mixer.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Held for resale rather than use, the printing press counts as inventory within current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.046' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Equity equals assets minus liabilities.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Total equity changed by about 2.4% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Non-current liabilities are about 182.5% of equity in year 1.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Non-current assets are about 68.5% of total assets in Year 2.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Trade payables are a current liability regardless of the amount.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.047' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Classification follows intended use, not physical form alone.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Total equity changed by about 6.4% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Total assets changed by about 8.2% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Non-current liabilities are about 62.6% of equity in year 2.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Inventory changed by about 9.3% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.048' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Intended use versus resale intent, not physical form, decides whether the printing press is non-current or current.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Resale intent keeps the concrete mixer in inventory as a current asset regardless of how long it stays unsold.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Continued operational use makes the concrete mixer a non-current asset; inventory is reserved for goods held for resale.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'An intention to use the printing press over the long term is the deciding factor for non-current classification.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'A buyer intending to use the concrete mixer in operations records it as a non-current asset, not inventory, after purchase.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.049' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The income statement links to the balance sheet via retained earnings.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current assets gather the short-term asset lines:

Inventory (204) + Trade receivables (104) + Cash and cash equivalents (57)
= 365

Current liabilities gather the short-term claims:

Trade payables (67) + Bank overdraft (54)
= 121

Current ratio = 365 / 121 ≈ 3.02

The claim says the ratio exceeds 1.56. We have about 3.02, which matches that comparison.

The statement is true.', 'Current assets gather the short-term asset lines:

Inventory (204) + Trade receivables (104) + Cash and cash equivalents (57)
= 365

Current liabilities gather the short-term claims:

Trade payables (67) + Bank overdraft (54)
= 121

Current ratio = 365 / 121 ≈ 3.02

The claim says the ratio below 0.96. We have about 3.02, which does not match that comparison.

The statement is false.', 'Equity ratio = total equity / total assets.

588 / 1147 ≈ 51.3%

The claim says the ratio below 40%. We have about 51.3%, which does not match that comparison.

The statement is false.', 'Apply the case evidence: Debt ratio ≈ 48.7%. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.050' AND tier = 'full';
