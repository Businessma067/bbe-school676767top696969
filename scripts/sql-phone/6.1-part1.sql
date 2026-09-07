-- Update expanded explanations for 6.1-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Long-term operational use makes the pallet loader a non-current tangible asset, not inventory.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Resale intent, not the dealer''s status as a business, places the pallet loader in inventory rather than among non-current assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Continued operational use beyond one year makes the pallet loader a non-current tangible asset.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Classification of the pallet loader depends on whether it is used or held for resale, so identical items can differ across balance sheets.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Intended use versus resale intent, not physical form, decides whether the pallet loader is non-current or current.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.001' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Intended use, not purchase price, drives the non-current classification of the pallet loader.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'An intention to use the pallet loader over the long term is the deciding factor for non-current classification.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Resale intent keeps the pallet loader in inventory as a current asset regardless of how long it stays unsold.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Continued operational use makes the pallet loader a non-current asset; inventory is reserved for goods held for resale.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'A buyer intending to use the pallet loader in operations records it as a non-current asset, not inventory, after purchase.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.002' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Resale intent places the pallet loader in inventory, a current-asset category.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Multi-period operational benefit qualifies the pallet loader as a tangible fixed asset.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Stock awaiting sale remains inventory, not a fixed asset, for the dealer holding it.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Continued operational use beyond one year makes the industrial dishwasher a non-current tangible asset.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Held for resale rather than use, the industrial dishwasher counts as inventory within current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.003' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Intended use versus resale intent, not physical form, decides whether the industrial dishwasher is non-current or current.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Long-term operational use makes the industrial dishwasher a non-current tangible asset, not inventory.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Resale intent, not the dealer''s status as a business, places the industrial dishwasher in inventory rather than among non-current assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Classification of the industrial dishwasher depends on whether it is used or held for resale, so identical items can differ across balance sheets.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'An intention to use the industrial dishwasher over the long term is the deciding factor for non-current classification.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.004' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['This matches the textbook distinction between non-current and current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Non-current liabilities are about 33.7% of equity in year 2.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Long-term financing covers non-current assets by about 38.9% in year 1.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Total equity changed by about 10.2% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Total assets changed by about 8.3% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.005' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['These are textbook advantages of equity finance.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Total equity changed by about 2.0% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Total assets changed by about 8.7% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventory changed by about 3.4% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Trade payables changed by about 7.4% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.006' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Assets = liabilities + equity is the fundamental balance sheet equation.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current assets gather the short-term asset lines:

Inventory (160) + Trade receivables (79) + Cash and cash equivalents (113)
= 352

Current liabilities gather the short-term claims:

Trade payables (188) + Bank overdraft (40)
= 228

Current ratio = 352 / 228 ≈ 1.54

The claim says the ratio exceeds 1.54. We have about 1.54, which matches that comparison.

The statement is true.', 'Current assets gather the short-term asset lines:

Inventory (160) + Trade receivables (79) + Cash and cash equivalents (113)
= 352

Current liabilities gather the short-term claims:

Trade payables (188) + Bank overdraft (40)
= 228

Current ratio = 352 / 228 ≈ 1.54

The claim says the ratio below 0.79. We have about 1.54, which does not match that comparison.

The statement is false.', 'Working capital = current assets minus current liabilities.

352 - 228 = 124

The claim cites 124. We have 124, so the figures line up.

The statement is true.', 'Equity ratio = total equity / total assets.

476 / 1019 ≈ 46.7%

The claim says the ratio below 41.5%. We have about 46.7%, which does not match that comparison.

The statement is false.'] WHERE case_id = 'CASE 6.1.007' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Resale intent places the industrial dishwasher in inventory, a current-asset category.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Multi-period operational benefit qualifies the industrial dishwasher as a tangible fixed asset.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Intended use, not purchase price, drives the non-current classification of the industrial dishwasher.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Stock awaiting sale remains inventory, not a fixed asset, for the dealer holding it.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Resale intent keeps the industrial dishwasher in inventory as a current asset regardless of how long it stays unsold.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.008' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['That portion is liabilities; equity is the residual not financed by debt.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Current assets = 406

Current liabilities gather the short-term claims:

Current liabilities = 159

Current ratio = 406 / 159 ≈ 2.55

The claim says the ratio exceeds 1.47. We have about 2.55, which matches that comparison.

The statement is true.', 'Working capital = current assets minus current liabilities.

406 - 159 = 247

The claim cites 247. We have 247, so the figures line up.

The statement is true.', 'Acid-test ratio ≈ 1.29.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current assets = 406

Current liabilities gather the short-term claims:

Current liabilities = 159

Current ratio = 406 / 159 ≈ 2.55

The claim says the ratio below 0.72. We have about 2.55, which does not match that comparison.

The statement is false.'] WHERE case_id = 'CASE 6.1.009' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Continued operational use makes the industrial dishwasher a non-current asset; inventory is reserved for goods held for resale.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'A buyer intending to use the industrial dishwasher in operations records it as a non-current asset, not inventory, after purchase.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Continued operational use beyond one year makes the warehouse crane a non-current tangible asset.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Long-term operational use makes the warehouse crane a non-current tangible asset, not inventory.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Resale intent, not the dealer''s status as a business, places the warehouse crane in inventory rather than among non-current assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.010' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Long-term assets should be financed with long-term financial resources.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Retained earnings growth ≈ 6.5% versus total equity growth ≈ 5.0%.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Total equity changed by about 5.0% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Total assets changed by about 4.4% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventory changed by about 3.4% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.011' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Held for resale rather than use, the warehouse crane counts as inventory within current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Intended use versus resale intent, not physical form, decides whether the warehouse crane is non-current or current.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'An intention to use the warehouse crane over the long term is the deciding factor for non-current classification.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Resale intent places the warehouse crane in inventory, a current-asset category.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Classification of the warehouse crane depends on whether it is used or held for resale, so identical items can differ across balance sheets.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.'] WHERE case_id = 'CASE 6.1.012' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Equity equals assets minus liabilities.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Non-current liabilities are about 136.5% of equity in year 1.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Non-current assets are about 68.1% of total assets in Year 2.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Total equity changed by about 8.5% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventory changed by about 10.2% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.013' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The income statement links to the balance sheet via retained earnings.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current assets gather the short-term asset lines:

Inventory (228) + Trade receivables (95) + Cash and cash equivalents (81)
= 404

Current liabilities gather the short-term claims:

Trade payables (148) + Bank overdraft (33)
= 181

Current ratio = 404 / 181 ≈ 2.23

The claim says the ratio exceeds 1.24. We have about 2.23, which matches that comparison.

The statement is true.', 'Working capital = current assets minus current liabilities.

404 - 181 = 223

The claim cites 223. We have 223, so the figures line up.

The statement is true.', 'Acid-test ratio ≈ 0.97.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'From the figures or classification rule involved, debt ratio ≈ 53.1%. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.014' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Intended use, not purchase price, drives the non-current classification of the warehouse crane.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Resale intent keeps the warehouse crane in inventory as a current asset regardless of how long it stays unsold.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Continued operational use makes the warehouse crane a non-current asset; inventory is reserved for goods held for resale.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Multi-period operational benefit qualifies the warehouse crane as a tangible fixed asset.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Stock awaiting sale remains inventory, not a fixed asset, for the dealer holding it.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.015' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A buyer intending to use the warehouse crane in operations records it as a non-current asset, not inventory, after purchase.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Continued operational use beyond one year makes the delivery scooter a non-current tangible asset.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Long-term operational use makes the delivery scooter a non-current tangible asset, not inventory.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Held for resale rather than use, the delivery scooter counts as inventory within current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Intended use versus resale intent, not physical form, decides whether the delivery scooter is non-current or current.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.016' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Classification follows intended use, not physical form alone.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current assets = 389

Current liabilities gather the short-term claims:

Current liabilities = 212

Current ratio = 389 / 212 ≈ 1.83

The claim says the ratio below 0.76. We have about 1.83, which does not match that comparison.

The statement is false.', 'Current assets = 389

Current liabilities gather the short-term claims:

Current liabilities = 212

Current ratio = 389 / 212 ≈ 1.83

The claim says the ratio exceeds 1.62. We have about 1.83, which matches that comparison.

The statement is true.', 'Acid-test ratio ≈ 0.78.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Working capital = current assets minus current liabilities.

389 - 212 = 177

The claim cites 177. We have 177, so the figures line up.

The statement is true.'] WHERE case_id = 'CASE 6.1.017' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['These are textbook advantages of equity finance.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Total equity changed by about 2.4% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Non-current liabilities are about 120.3% of equity in Year 1.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current ratio in Year 2 is about 1.45.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Trade payables are a current liability regardless of the amount.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.018' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Assets = liabilities + equity is the fundamental balance sheet equation.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Non-current liabilities are about 59.9% of equity in year 1.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Non-current liabilities are about 68.5% of equity in Year 2.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Non-current assets are about 66.8% of total assets in Year 2.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current ratio in year 2 is about 1.48.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.019' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['This matches the textbook distinction between non-current and current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current assets gather the short-term asset lines:

Inventory (136) + Trade receivables (162) + Cash and cash equivalents (34)
= 332

Current liabilities gather the short-term claims:

Trade payables (150) + Bank overdraft (48)
= 198

Current ratio = 332 / 198 ≈ 1.68

The claim says the ratio below 0.93. We have about 1.68, which does not match that comparison.

The statement is false.', 'Acid-test ratio ≈ 0.99.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Equity ratio = total equity / total assets.

718 / 1206 ≈ 59.5%

The claim says the ratio below 33.7%. We have about 59.5%, which does not match that comparison.

The statement is false.', 'From the figures or classification rule involved, debt ratio ≈ 40.5%. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.020' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['An intention to use the delivery scooter over the long term is the deciding factor for non-current classification.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Resale intent, not the dealer''s status as a business, places the delivery scooter in inventory rather than among non-current assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Classification of the delivery scooter depends on whether it is used or held for resale, so identical items can differ across balance sheets.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Intended use, not purchase price, drives the non-current classification of the delivery scooter.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Resale intent keeps the delivery scooter in inventory as a current asset regardless of how long it stays unsold.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.021' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Equity ratio = total equity / total assets.

537 / 1046 ≈ 51.3%

The statement is true.', 'Current assets = 321

Current liabilities gather the short-term claims:

Current liabilities = 106

Current ratio = 321 / 106 ≈ 3.03

The claim says the ratio exceeds 1.41. We have about 3.03, which matches that comparison.

The statement is true.', 'Current assets = 321

Current liabilities gather the short-term claims:

Current liabilities = 106

Current ratio = 321 / 106 ≈ 3.03

The claim says the ratio below 0.95. We have about 3.03, which does not match that comparison.

The statement is false.', 'Equity ratio = total equity / total assets.

537 / 1046 ≈ 51.3%

The claim says the ratio below 26.9%. We have about 51.3%, which does not match that comparison.

The statement is false.', 'Working capital = current assets minus current liabilities.

321 - 106 = 215

The claim cites 215. We have 215, so the figures line up.

The statement is true.'] WHERE case_id = 'CASE 6.1.022' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Resale intent places the delivery scooter in inventory, a current-asset category.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Multi-period operational benefit qualifies the delivery scooter as a tangible fixed asset.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Stock awaiting sale remains inventory, not a fixed asset, for the dealer holding it.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Continued operational use beyond one year makes the packaging line a non-current tangible asset.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Held for resale rather than use, the packaging line counts as inventory within current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.023' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Continued operational use makes the delivery scooter a non-current asset; inventory is reserved for goods held for resale.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Intended use versus resale intent, not physical form, decides whether the packaging line is non-current or current.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'A buyer intending to use the delivery scooter in operations records it as a non-current asset, not inventory, after purchase.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Long-term operational use makes the packaging line a non-current tangible asset, not inventory.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'An intention to use the packaging line over the long term is the deciding factor for non-current classification.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.024' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Long-term assets should be financed with long-term financial resources.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Total equity changed by about 28.7% between the two years.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Equity ratio = total equity / total assets.

202 / 867 ≈ 23.3%

The claim says the ratio more than 2.4%. We have about 23.3%, which matches that comparison.

The statement is true.', 'Non-current liabilities are about 194.1% of equity in Year 1.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Working capital = current assets minus current liabilities.

297 - 273 = 24

The claim cites 1. We have 24, so the figures line up.

The statement is true.'] WHERE case_id = 'CASE 6.1.025' AND tier = 'full';
