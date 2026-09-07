-- Update expanded explanations for 6.1-part3 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['The income statement links to the balance sheet via retained earnings.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current assets = 369

Current liabilities gather the short-term claims:

Current liabilities = 151

Current ratio = 369 / 151 ≈ 2.44

The claim says the ratio exceeds 1.67. We have about 2.44, which matches that comparison.

The statement is true.', 'Working capital = current assets minus current liabilities.

369 - 151 = 218

The claim cites 218. We have 218, so the figures line up.

The statement is true.', 'Acid-test ratio ≈ 1.38.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current assets = 369

Current liabilities gather the short-term claims:

Current liabilities = 151

Current ratio = 369 / 151 ≈ 2.44

The claim says the ratio below 0.62. We have about 2.44, which does not match that comparison.

The statement is false.'] WHERE case_id = 'CASE 6.1.051' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The income statement links to the balance sheet via retained earnings.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Non-current liabilities are about 136.8% of equity in year 1.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Total equity changed by about 15.1% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Non-current assets are about 70.8% of total assets in year 2.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Trade payables are a current liability regardless of the amount.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.052' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['These are textbook advantages of equity finance.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Non-current liabilities are about 36.6% of equity in Year 2.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Long-term financing covers non-current assets by about 50.6% in year 1.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Trade payables are a current liability regardless of the amount.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Equity equals assets minus liabilities.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.053' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Current liabilities are due within one year; longer debts are non-current.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Current assets gather the short-term asset lines:

Inventory (209) + Trade receivables (100) + Cash and cash equivalents (80)
= 389

Current liabilities gather the short-term claims:

Trade payables (85) + Bank overdraft (49)
= 134

Current ratio = 389 / 134 ≈ 2.90

The claim says the ratio exceeds 1.76. We have about 2.90, which matches that comparison.

The statement is true.', 'Working capital = current assets minus current liabilities.

389 - 134 = 255

The claim cites 255. We have 255, so the figures line up.

The statement is true.', 'Acid-test ratio ≈ 1.34.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current assets gather the short-term asset lines:

Inventory (209) + Trade receivables (100) + Cash and cash equivalents (80)
= 389

Current liabilities gather the short-term claims:

Trade payables (85) + Bank overdraft (49)
= 134

Current ratio = 389 / 134 ≈ 2.90

The claim says the ratio below 0.61. We have about 2.90, which does not match that comparison.

The statement is false.'] WHERE case_id = 'CASE 6.1.054' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Resale intent places the printing press in inventory, a current-asset category.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Multi-period operational benefit qualifies the printing press as a tangible fixed asset.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Long-term operational use makes the laptop computer a non-current tangible asset, not inventory.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Resale intent, not the dealer''s status as a business, places the laptop computer in inventory rather than among non-current assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Stock awaiting sale remains inventory, not a fixed asset, for the dealer holding it.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.055' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Continued operational use beyond one year makes the conveyor belt a non-current tangible asset.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Classification of the laptop computer depends on whether it is used or held for resale, so identical items can differ across balance sheets.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Intended use, not purchase price, drives the non-current classification of the laptop computer.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Held for resale rather than use, the conveyor belt counts as inventory within current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Resale intent keeps the laptop computer in inventory as a current asset regardless of how long it stays unsold.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.056' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['That portion is liabilities; equity is the residual not financed by debt.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Current assets = 454

Current liabilities gather the short-term claims:

Current liabilities = 277

Current ratio = 454 / 277 ≈ 1.64

The claim says the ratio exceeds 1.74. We have about 1.64, which does not match that comparison.

The statement is false.', 'Current assets = 454

Current liabilities gather the short-term claims:

Current liabilities = 277

Current ratio = 454 / 277 ≈ 1.64

The claim says the ratio below 1.03. We have about 1.64, which does not match that comparison.

The statement is false.', 'Acid-test ratio ≈ 0.84.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Equity ratio = total equity / total assets.

668 / 1183 ≈ 56.5%

The claim says the ratio below 40.1%. We have about 56.5%, which does not match that comparison.

The statement is false.'] WHERE case_id = 'CASE 6.1.057' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Cash falls by the same amount as the software rises, so total assets stay unchanged.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Total equity changed by about 32.5% between the two years.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Total assets changed by about 15.5% between the two years.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Inventory changed by about 19.1% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Trade payables changed by about 5.2% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.058' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['That portion is liabilities; equity is the residual not financed by debt.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Total equity changed by about 10.9% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Trade payables changed by about 14.5% between the two years.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Total assets changed by about 9.8% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Non-current liabilities are about 100.3% of equity in Year 1.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.059' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Continued operational use makes the laptop computer a non-current asset; inventory is reserved for goods held for resale.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'A buyer intending to use the laptop computer in operations records it as a non-current asset, not inventory, after purchase.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Intended use versus resale intent, not physical form, decides whether the conveyor belt is non-current or current.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Long-term operational use makes the refrigerated van a non-current tangible asset, not inventory.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Resale intent, not the dealer''s status as a business, places the refrigerated van in inventory rather than among non-current assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.060' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['This matches the textbook distinction between non-current and current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current assets gather the short-term asset lines:

Inventory (83) + Trade receivables (165) + Cash and cash equivalents (85)
= 333

Current liabilities gather the short-term claims:

Trade payables (61) + Bank overdraft (27)
= 88

Current ratio = 333 / 88 ≈ 3.78

The claim says the ratio exceeds 1.88. We have about 3.78, which matches that comparison.

The statement is true.', 'Working capital = current assets minus current liabilities.

333 - 88 = 245

The claim cites 245. We have 245, so the figures line up.

The statement is true.', 'Current assets gather the short-term asset lines:

Inventory (83) + Trade receivables (165) + Cash and cash equivalents (85)
= 333

Current liabilities gather the short-term claims:

Trade payables (61) + Bank overdraft (27)
= 88

Current ratio = 333 / 88 ≈ 3.78

The claim says the ratio below 1.11. We have about 3.78, which does not match that comparison.

The statement is false.', 'Acid-test ratio ≈ 2.84.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.061' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['An intention to use the conveyor belt over the long term is the deciding factor for non-current classification.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Classification of the refrigerated van depends on whether it is used or held for resale, so identical items can differ across balance sheets.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Intended use, not purchase price, drives the non-current classification of the refrigerated van.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Resale intent keeps the refrigerated van in inventory as a current asset regardless of how long it stays unsold.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Continued operational use makes the refrigerated van a non-current asset; inventory is reserved for goods held for resale.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.062' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['That portion is liabilities; equity is the residual not financed by debt.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Current assets = 478

Current liabilities gather the short-term claims:

Current liabilities = 217

Current ratio = 478 / 217 ≈ 2.20

The claim says the ratio below 0.67. We have about 2.20, which does not match that comparison.

The statement is false.', 'Equity ratio = total equity / total assets.

752 / 1264 ≈ 59.5%

The claim says the ratio below 21.2%. We have about 59.5%, which does not match that comparison.

The statement is false.', 'Current assets = 478

Current liabilities gather the short-term claims:

Current liabilities = 217

Current ratio = 478 / 217 ≈ 2.20

The claim says the ratio exceeds 1.17. We have about 2.20, which matches that comparison.

The statement is true.', 'Working capital = current assets minus current liabilities.

478 - 217 = 261

The claim cites 261. We have 261, so the figures line up.

The statement is true.'] WHERE case_id = 'CASE 6.1.063' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Resale intent places the conveyor belt in inventory, a current-asset category.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'A buyer intending to use the refrigerated van in operations records it as a non-current asset, not inventory, after purchase.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Multi-period operational benefit qualifies the conveyor belt as a tangible fixed asset.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Stock awaiting sale remains inventory, not a fixed asset, for the dealer holding it.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Long-term expected benefit, not physical form, justifies classifying an operating licence as non-current.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.064' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Long-term operational use makes the woodworking lathe a non-current tangible asset, not inventory.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Long-term value places an intangible operating licence among non-current rather than current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Intangible and tangible non-current assets, including an operating licence, sit within the same balance sheet section.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Resale intent, not the dealer''s status as a business, places the woodworking lathe in inventory rather than among non-current assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Physical form is not a requirement for classifying an operating licence as non-current.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.065' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Classification of the woodworking lathe depends on whether it is used or held for resale, so identical items can differ across balance sheets.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Multi-year protective or operational value groups an operating licence with intangible non-current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Intended use, not purchase price, drives the non-current classification of the woodworking lathe.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Resale intent keeps the woodworking lathe in inventory as a current asset regardless of how long it stays unsold.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Because an operating licence is not expected to convert into cash within the operating cycle, it is excluded from current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.066' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Continued operational use makes the woodworking lathe a non-current asset; inventory is reserved for goods held for resale.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Long-term expected benefit, not physical form, justifies classifying a brand name as non-current.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'A buyer intending to use the woodworking lathe in operations records it as a non-current asset, not inventory, after purchase.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Long-term value places an intangible brand name among non-current rather than current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Long-term operational use makes the espresso machine a non-current tangible asset, not inventory.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.067' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Long-term assets should be financed with long-term financial resources.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Non-current liabilities are about 69.8% of equity in year 1.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Total equity changed by about 7.0% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Total assets changed by about 6.4% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventory changed by about 10.8% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.068' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Cash falls by the same amount as the software rises, so total assets stay unchanged.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Total equity changed by about 10.1% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Non-current liabilities are about 57.1% of equity in year 2.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Non-current assets are about 63.3% of total assets in Year 2.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current ratio in year 2 is about 1.29.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.069' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Resale intent, not the dealer''s status as a business, places the espresso machine in inventory rather than among non-current assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Intangible and tangible non-current assets, including a brand name, sit within the same balance sheet section.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Physical form is not a requirement for classifying a brand name as non-current.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Classification of the espresso machine depends on whether it is used or held for resale, so identical items can differ across balance sheets.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Multi-year protective or operational value groups a brand name with intangible non-current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.070' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Cash falls by the same amount as the software rises, so total assets stay unchanged.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Working capital = current assets minus current liabilities.

421 - 254 = 167

The claim cites 167. We have 167, so the figures line up.

The statement is true.', 'Current assets gather the short-term asset lines:

Inventory (183) + Trade receivables (162) + Cash and cash equivalents (76)
= 421

Current liabilities gather the short-term claims:

Trade payables (178) + Bank overdraft (76)
= 254

Current ratio = 421 / 254 ≈ 1.66

The claim says the ratio exceeds 1.66. We have about 1.66, which does not match that comparison.

The statement is false.', 'Current assets gather the short-term asset lines:

Inventory (183) + Trade receivables (162) + Cash and cash equivalents (76)
= 421

Current liabilities gather the short-term claims:

Trade payables (178) + Bank overdraft (76)
= 254

Current ratio = 421 / 254 ≈ 1.66

The claim says the ratio below 1.25. We have about 1.66, which does not match that comparison.

The statement is false.', 'Acid-test ratio ≈ 0.94.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.071' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['That portion is liabilities; equity is the residual not financed by debt.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Current assets = 333

Current liabilities gather the short-term claims:

Current liabilities = 315

Current ratio = 333 / 315 ≈ 1.06

The claim says the ratio below 0.65. We have about 1.06, which does not match that comparison.

The statement is false.', 'Working capital = current assets minus current liabilities.

333 - 315 = 18

The claim cites 18. We have 18, so the figures line up.

The statement is true.', 'Inventory are about 42.0% of current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Acid-test ratio ≈ 0.61.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.072' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Because a brand name is not expected to convert into cash within the operating cycle, it is excluded from current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Long-term expected benefit, not physical form, justifies classifying a registered design as non-current.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Long-term value places an intangible registered design among non-current rather than current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Intangible and tangible non-current assets, including a registered design, sit within the same balance sheet section.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Physical form is not a requirement for classifying a registered design as non-current.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.073' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Cash falls by the same amount as the software rises, so total assets stay unchanged.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Cash and cash equivalents changed by about -6.5% between the two years.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Non-current liabilities are about 44.3% of equity in Year 2.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Non-current assets are about 62.2% of total assets in Year 2.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Long-term financing covers non-current assets by about 36.5% in year 1.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.074' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Multi-year protective or operational value groups a registered design with intangible non-current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Because a registered design is not expected to convert into cash within the operating cycle, it is excluded from current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Long-term expected benefit, not physical form, justifies classifying a development patent as non-current.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Intended use, not purchase price, drives the non-current classification of the espresso machine.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Long-term value places an intangible development patent among non-current rather than current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.075' AND tier = 'full';
