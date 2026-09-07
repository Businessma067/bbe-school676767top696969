-- Update expanded explanations for 6.4-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Employees are typically concerned with how secure their jobs and future pay are likely to be.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Employees focus on how secure their jobs and future pay are likely to be when they use accounting information.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Owners sit outside daily management and depend on financial accounting rather than internal management reports.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Financial accounting statements reach external users such as owners on the statutory annual cycle.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Owners are external users who rely on annual financial accounting, not weekly internal management reports.

The absolute wording "every" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.'] WHERE case_id = 'CASE 6.4.026' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Auditing is an independent verification of the accounts.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current assets = 350

Current liabilities gather the short-term claims:

Current liabilities = 296

Current ratio = 350 / 296 ≈ 1.18

The claim says the ratio exceeds 1.89. We have about 1.18, which does not match that comparison.

The statement is false.', 'Working capital = current assets minus current liabilities.

350 - 296 = 54

The claim cites 54. We have 54, so the figures line up.

The statement is true.', 'Equity ratio = total equity / total assets.

366 / 1102 ≈ 33.2%

The claim says the ratio below 38%. We have about 33.2%, which matches that comparison.

The statement is true.', 'Inventory are about 52.0% of current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.4.027' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Lenders sit outside daily management and depend on financial accounting rather than internal management reports.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Financial accounting statements reach external users such as lenders on the statutory annual cycle.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Owners typically rely on published financial accounting statements, not informal internal notes.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Lenders are external users who rely on annual financial accounting, not weekly internal management reports.

The absolute wording "every" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Internal users such as managers can receive management accounting far more often than the annual financial statements.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.4.028' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Tax authorities sit outside daily management and depend on financial accounting rather than internal management reports.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Financial accounting statements reach external users such as tax authorities on the statutory annual cycle.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Managers are internal users who can receive management accounting tailored to their needs.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Management accounting can reach internal users such as managers far more frequently than annual financial accounting.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Management accounting for internal users such as managers is flexible in format, unlike statutory financial accounting.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.4.029' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Management accounting serves internal decision makers.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Equity ratio = total equity / total assets.

275 / 529 ≈ 52.0%

The claim says the ratio below 28.2%. We have about 52.0%, which does not match that comparison.

The statement is false.', 'A loan is a liability, never equity.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'External users routinely rely on single-year financial statements, often alongside prior-year comparatives.

The absolute wording "all" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Management accounting reports are flexible and internal; they are not bound by the statutory format of published financial statements.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.4.030' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Land is normally excluded from depreciation.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Asset A ≈ €10,429 a year versus Asset B ≈ €4,600 a year.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Financial accounting reports are prepared for external users such as lenders and shareholders.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Audits provide reasonable, not absolute, assurance.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Reports aimed at external parties fall under financial accounting.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.4.031' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Employees are internal users who can receive management accounting tailored to their needs.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Management accounting for internal users such as managers is not tied to the statutory format used for financial accounting.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Internal users such as employees can receive management accounting far more often than the annual financial statements.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Management accounting can reach internal users such as employees far more frequently than annual financial accounting.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Owners are typically concerned with the return earned on the capital they have invested.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.4.032' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Internal users include owners, managers and employees.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Current assets = 422

Current liabilities gather the short-term claims:

Current liabilities = 275

Current ratio = 422 / 275 ≈ 1.53

The claim says the ratio below 1.19. We have about 1.53, which does not match that comparison.

The statement is false.', 'Acid-test ratio ≈ 0.64.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Current assets = 422

Current liabilities gather the short-term claims:

Current liabilities = 275

Current ratio = 422 / 275 ≈ 1.53

The claim says the ratio exceeds 1.36. We have about 1.53, which matches that comparison.

The statement is true.', 'Equity ratio = total equity / total assets.

443 / 1191 ≈ 37.2%

The claim says the ratio below 30.9%. We have about 37.2%, which does not match that comparison.

The statement is false.'] WHERE case_id = 'CASE 6.4.033' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Management accounting for internal users such as employees is flexible in format, unlike statutory financial accounting.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Owners focus on the return earned on the capital they have invested when they use accounting information.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Lenders focus on whether the business will be able to repay what it owes when they use accounting information.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Tax authorities focus on how much tax is due on the business''s profit when they use accounting information.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Investors focus on the likely return and risk before committing further capital when they use accounting information.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.4.034' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Lenders are typically concerned with whether the business will be able to repay what it owes.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Managers focus on controlling costs and choosing between courses of action when they use accounting information.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Employees focus on how secure their jobs and future pay are likely to be when they use accounting information.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Tax authorities are typically concerned with how much tax is due on the business''s profit.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Investors are typically concerned with the likely return and risk before committing further capital.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.4.035' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Owners sit outside daily management and depend on financial accounting rather than internal management reports.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Managers are typically concerned with controlling costs and choosing between courses of action.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Employees are typically concerned with how secure their jobs and future pay are likely to be.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Owners are external users who rely on annual financial accounting, not weekly internal management reports.

The absolute wording "every" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Owners typically rely on published financial accounting statements, not informal internal notes.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.4.036' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Lenders are external users who rely on annual financial accounting, not weekly internal management reports.

The absolute wording "every" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Lenders typically rely on published financial accounting statements, not informal internal notes.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Internal users such as managers can receive management accounting far more often than the annual financial statements.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Management accounting for internal users such as managers is not tied to the statutory format used for financial accounting.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Financial accounting statements reach external users such as owners on the statutory annual cycle.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.4.037' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Internal users such as employees can receive management accounting far more often than the annual financial statements.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Management accounting for internal users such as employees is not tied to the statutory format used for financial accounting.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Lenders sit outside daily management and depend on financial accounting rather than internal management reports.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Owners are typically concerned with the return earned on the capital they have invested.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Lenders are typically concerned with whether the business will be able to repay what it owes.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.4.038' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Financial accounting statements reach external users such as lenders on the statutory annual cycle.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Tax authorities sit outside daily management and depend on financial accounting rather than internal management reports.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Tax authorities are typically concerned with how much tax is due on the business''s profit.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Managers are internal users who can receive management accounting tailored to their needs.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Management accounting can reach internal users such as managers far more frequently than annual financial accounting.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.4.039' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Financial accounting serves external as well as internal users.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Inventory is always current.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Financial accounting reports are prepared for external users such as lenders and shareholders.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Equity ratio = total equity / total assets.

182 / 410 ≈ 44.4%

The claim says the ratio below 33.1%. We have about 44.4%, which does not match that comparison.

The statement is false.', 'A loan is a liability, never equity.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.4.040' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Secondary-market price rises do not raise new company cash.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Price change ≈ -18.9%.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Market capitalisation ≈ €18.6 million.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Turnover ≈ 58.7% of shares outstanding.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Peak monthly volume = 79,000.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.4.041' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Management accounting for internal users such as managers is flexible in format, unlike statutory financial accounting.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Investors are typically concerned with the likely return and risk before committing further capital.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Managers are typically concerned with controlling costs and choosing between courses of action.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Employees are typically concerned with how secure their jobs and future pay are likely to be.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Owners are external users who rely on annual financial accounting, not weekly internal management reports.

The absolute wording "every" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.'] WHERE case_id = 'CASE 6.4.042' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Employees are internal users who can receive management accounting tailored to their needs.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Management accounting can reach internal users such as employees far more frequently than annual financial accounting.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Management accounting for internal users such as employees is flexible in format, unlike statutory financial accounting.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Owners focus on the return earned on the capital they have invested when they use accounting information.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Lenders focus on whether the business will be able to repay what it owes when they use accounting information.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.4.043' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Price change ≈ -41.2%.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Apply the case evidence: €11.0m → €6.5m. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Peak monthly volume = 64,000.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Operating result = 259.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Secondary-market price rises do not raise new company cash.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.4.044' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Fast inventory turnover signals healthy stock movement.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Market capitalisation ≈ €20.5 million.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'From the figures or classification rule involved, range €19-€24. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Peak monthly volume = 73,000.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Shares outstanding = 855,000.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.4.045' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Owners typically rely on published financial accounting statements, not informal internal notes.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Tax authorities focus on how much tax is due on the business''s profit when they use accounting information.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Investors focus on the likely return and risk before committing further capital when they use accounting information.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Managers focus on controlling costs and choosing between courses of action when they use accounting information.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Employees focus on how secure their jobs and future pay are likely to be when they use accounting information.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.4.046' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Lenders are external users who rely on annual financial accounting, not weekly internal management reports.

The absolute wording "every" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Owners sit outside daily management and depend on financial accounting rather than internal management reports.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Financial accounting statements reach external users such as owners on the statutory annual cycle.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Lenders typically rely on published financial accounting statements, not informal internal notes.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Internal users such as managers can receive management accounting far more often than the annual financial statements.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.4.047' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Price change ≈ -19.0%.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'New share capital arises at issue, not in aftermarket trades.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Market capitalisation ≈ €12.2 million.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'From the figures or classification rule involved, €15.0m → €12.2m. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Peak monthly volume = 95,000.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.4.048' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Apply the case evidence: €12.0m → €13.8m. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Positive working capital supports day-to-day payment capacity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'From the figures or classification rule involved, price change ≈ 15.0%. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Apply the case evidence: Range €18-€23. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Market capitalisation ≈ €13.8 million.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.4.049' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Apply the case evidence: Price change ≈ 20.0%. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Common shares vote; preferred shares usually emphasise dividend priority.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Turnover ≈ 39.6% of shares outstanding.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Apply the case evidence: €20.5m → €24.6m. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Apply the case evidence: Range €30-€36. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.4.050' AND tier = 'full';
