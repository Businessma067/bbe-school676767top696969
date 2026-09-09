-- Update expanded explanations for 6.4-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Depreciation is non-cash; the cash was usually paid when the asset was bought.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Current assets gather the short-term asset lines:

Inventory (65) + Cash and cash equivalents (55)
= 120

Current liabilities gather the short-term claims:

Current liabilities = 32

Current ratio = 120 / 32 ≈ 3.75

The claim says the ratio exceeds 1.27. We have about 3.75, which matches that comparison.

The statement is true.', 'Inventory is always current.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Financial accounting reports are prepared for external users such as lenders and shareholders.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Audits provide reasonable, not absolute, assurance.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.4.001' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Owners sit outside daily management and depend on financial accounting rather than internal management reports.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Owners are external users who rely on annual financial accounting, not weekly internal management reports.

The absolute wording "every" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Financial accounting statements reach external users such as owners on the statutory annual cycle.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Owners typically rely on published financial accounting statements, not informal internal notes.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Internal users such as managers can receive management accounting far more often than the annual financial statements.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.4.002' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Land is normally excluded from depreciation.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Depreciable amount = cost minus residual value.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Asset A has no residual value.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'External users routinely rely on single-year financial statements, often alongside prior-year comparatives.

The absolute wording "all" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Management accounting reports are flexible and internal; they are not bound by the statutory format of published financial statements.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.4.003' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Management accounting for internal users such as managers is not tied to the statutory format used for financial accounting.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Lenders sit outside daily management and depend on financial accounting rather than internal management reports.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Financial accounting statements reach external users such as lenders on the statutory annual cycle.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Internal users such as employees can receive management accounting far more often than the annual financial statements.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Managers are internal users who can receive management accounting tailored to their needs.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.4.004' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Management accounting for internal users such as employees is not tied to the statutory format used for financial accounting.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Management accounting can reach internal users such as managers far more frequently than annual financial accounting.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Management accounting for internal users such as managers is flexible in format, unlike statutory financial accounting.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Employees are internal users who can receive management accounting tailored to their needs.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Owners focus on the return earned on the capital they have invested when they use accounting information.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.4.005' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Management accounting serves internal decision makers.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current assets = 409

Current liabilities gather the short-term claims:

Current liabilities = 205

Current ratio = 409 / 205 ≈ 2.00

The claim says the ratio exceeds 1.34. We have about 2.00, which matches that comparison.

The statement is true.', 'Working capital = current assets minus current liabilities.

409 - 205 = 204

The claim cites 204. We have 204, so the figures line up.

The statement is true.', 'Equity ratio = total equity / total assets.

265 / 964 ≈ 27.5%

The claim says the ratio below 20%. We have about 27.5%, which does not match that comparison.

The statement is false.', 'From the figures or classification rule involved, debt ratio ≈ 72.5%. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.4.006' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Lenders focus on whether the business will be able to repay what it owes when they use accounting information.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Tax authorities focus on how much tax is due on the business''s profit when they use accounting information.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Investors focus on the likely return and risk before committing further capital when they use accounting information.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Managers focus on controlling costs and choosing between courses of action when they use accounting information.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Employees focus on how secure their jobs and future pay are likely to be when they use accounting information.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.4.007' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Management accounting serves internal decision makers.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Inventory is always current.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Financial accounting reports are prepared for external users such as lenders and shareholders.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Audits provide reasonable, not absolute, assurance.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Reports aimed at external parties fall under financial accounting.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.4.008' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Depreciation is a non-cash expense.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Asset A ≈ €9,286 a year versus Asset B ≈ €4,200 a year.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Financial accounting reports are prepared for external users such as lenders and shareholders.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Audits provide reasonable, not absolute, assurance.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Reports aimed at external parties fall under financial accounting.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.4.009' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Financial accounting serves external as well as internal users.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Working capital = current assets minus current liabilities.

356 - 223 = 133

The claim cites 133. We have 133, so the figures line up.

The statement is true.', 'Apply the case evidence: Debt ratio ≈ 59.5%. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Trade receivables are about 22.8% of current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Cash and cash equivalents are about 33.4% of current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.4.010' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Internal users include owners, managers and employees.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Equity ratio = total equity / total assets.

319 / 517 ≈ 61.7%

The claim says the ratio below 29.8%. We have about 61.7%, which does not match that comparison.

The statement is false.', 'Financial accounting reports are prepared for external users such as lenders and shareholders.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'A loan is a liability, never equity.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'External users routinely rely on single-year financial statements, often alongside prior-year comparatives.

The absolute wording "all" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.'] WHERE case_id = 'CASE 6.4.011' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Owners are typically concerned with the return earned on the capital they have invested.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Lenders are typically concerned with whether the business will be able to repay what it owes.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Owners sit outside daily management and depend on financial accounting rather than internal management reports.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Financial accounting statements reach external users such as owners on the statutory annual cycle.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Tax authorities are typically concerned with how much tax is due on the business''s profit.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.4.012' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Management accounting primarily supports internal decisions.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'External users routinely rely on single-year financial statements, often alongside prior-year comparatives.

The absolute wording "all" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Asset a ≈ €9,250 a year versus asset b ≈ €4,400 a year.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Management accounting reports are flexible and internal; they are not bound by the statutory format of published financial statements.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Figures such as this are routinely published for external users like tax authorities and shareholders.

The absolute wording "never" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.'] WHERE case_id = 'CASE 6.4.013' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Internal users include owners, managers and employees.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Current assets = 467

Current liabilities gather the short-term claims:

Current liabilities = 263

Current ratio = 467 / 263 ≈ 1.78

The claim says the ratio exceeds 1.35. We have about 1.78, which matches that comparison.

The statement is true.', 'Current assets = 467

Current liabilities gather the short-term claims:

Current liabilities = 263

Current ratio = 467 / 263 ≈ 1.78

The claim says the ratio below 0.9. We have about 1.78, which does not match that comparison.

The statement is false.', 'Apply the case evidence: Debt ratio ≈ 52.6%. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Inventory are about 56.3% of current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.4.014' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Land is normally excluded from depreciation.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current assets gather the short-term asset lines:

Inventory (85) + Cash and cash equivalents (76)
= 161

Current liabilities gather the short-term claims:

Current liabilities = 36

Current ratio = 161 / 36 ≈ 4.47

The claim says the ratio exceeds 1.3. We have about 4.47, which matches that comparison.

The statement is true.', 'Equity ratio = total equity / total assets.

279 / 416 ≈ 67.1%

The claim says the ratio below 25.2%. We have about 67.1%, which does not match that comparison.

The statement is false.', 'Inventory is always current.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'A loan is a liability, never equity.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.4.015' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Management accounting primarily supports internal decisions.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Asset A ≈ €9,750 a year versus Asset B ≈ €7,000 a year.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Financial accounting reports are prepared for external users such as lenders and shareholders.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Audits provide reasonable, not absolute, assurance.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Reports aimed at external parties fall under financial accounting.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.4.016' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Depreciation is a non-cash expense.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current assets = 335

Current liabilities gather the short-term claims:

Current liabilities = 252

Current ratio = 335 / 252 ≈ 1.33

The claim says the ratio below 0.83. We have about 1.33, which does not match that comparison.

The statement is false.', 'Current assets = 335

Current liabilities gather the short-term claims:

Current liabilities = 252

Current ratio = 335 / 252 ≈ 1.33

The claim says the ratio exceeds 1.14. We have about 1.33, which matches that comparison.

The statement is true.', 'Acid-test ratio ≈ 1.00.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Working capital = current assets minus current liabilities.

335 - 252 = 83

The claim cites 83. We have 83, so the figures line up.

The statement is true.'] WHERE case_id = 'CASE 6.4.017' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Auditing is an independent verification of the accounts.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Equity ratio = total equity / total assets.

288 / 504 ≈ 57.1%

The claim says the ratio below 31.3%. We have about 57.1%, which does not match that comparison.

The statement is false.', 'A loan is a liability, never equity.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'External users routinely rely on single-year financial statements, often alongside prior-year comparatives.

The absolute wording "all" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Inventory is always current.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.4.018' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Lenders sit outside daily management and depend on financial accounting rather than internal management reports.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Financial accounting statements reach external users such as lenders on the statutory annual cycle.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Managers are internal users who can receive management accounting tailored to their needs.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Management accounting can reach internal users such as managers far more frequently than annual financial accounting.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Management accounting for internal users such as managers is flexible in format, unlike statutory financial accounting.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.4.019' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Internal users include owners, managers and employees.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Asset a ≈ €22,500 a year versus asset b ≈ €4,000 a year.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Financial accounting reports are prepared for external users such as lenders and shareholders.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Audits provide reasonable, not absolute, assurance.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'External users routinely rely on single-year financial statements, often alongside prior-year comparatives.

The absolute wording "all" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.'] WHERE case_id = 'CASE 6.4.020' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Employees are internal users who can receive management accounting tailored to their needs.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Investors are typically concerned with the likely return and risk before committing further capital.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Management accounting can reach internal users such as employees far more frequently than annual financial accounting.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Management accounting for internal users such as employees is flexible in format, unlike statutory financial accounting.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Owners focus on the return earned on the capital they have invested when they use accounting information.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.4.021' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Management accounting primarily supports internal decisions.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Current assets = 324

Current liabilities gather the short-term claims:

Current liabilities = 193

Current ratio = 324 / 193 ≈ 1.68

The claim says the ratio exceeds 1.63. We have about 1.68, which matches that comparison.

The statement is true.', 'Working capital = current assets minus current liabilities.

324 - 193 = 131

The claim cites 131. We have 131, so the figures line up.

The statement is true.', 'Equity ratio = total equity / total assets.

379 / 929 ≈ 40.8%

The claim says the ratio below 39.8%. We have about 40.8%, which does not match that comparison.

The statement is false.', 'From the figures or classification rule involved, debt ratio ≈ 59.2%. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.4.022' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Internal users include owners, managers and employees.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Equity ratio = total equity / total assets.

359 / 525 ≈ 68.4%

The claim says the ratio below 39.6%. We have about 68.4%, which does not match that comparison.

The statement is false.', 'Current assets gather the short-term asset lines:

Inventory (121) + Cash and cash equivalents (55)
= 176

Current liabilities gather the short-term claims:

Current liabilities = 70

Current ratio = 176 / 70 ≈ 2.51

The claim says the ratio exceeds 1.43. We have about 2.51, which matches that comparison.

The statement is true.', 'Inventory is always current.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'A loan is a liability, never equity.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.4.023' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Management accounting primarily supports internal decisions.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Asset A ≈ €16,400 a year versus Asset B ≈ €7,200 a year.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'External users routinely rely on single-year financial statements, often alongside prior-year comparatives.

The absolute wording "all" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Financial accounting reports are prepared for external users such as lenders and shareholders.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Management accounting reports are flexible and internal; they are not bound by the statutory format of published financial statements.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.4.024' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Lenders focus on whether the business will be able to repay what it owes when they use accounting information.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Tax authorities focus on how much tax is due on the business''s profit when they use accounting information.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Investors focus on the likely return and risk before committing further capital when they use accounting information.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Managers are typically concerned with controlling costs and choosing between courses of action.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Managers focus on controlling costs and choosing between courses of action when they use accounting information.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.4.025' AND tier = 'full';
