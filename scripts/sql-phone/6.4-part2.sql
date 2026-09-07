-- Update expanded explanations for 6.4-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Internal Versus External Users". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Employees of a manufacturer have no interest in how secure their jobs and future pay are likely to be when they look at accounting information."

The statement is false.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Internal Versus External Users". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Employees of a retailer look at accounting information mainly to judge how secure their jobs and future pay are likely to be."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Internal Versus External Users". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Owners of a service firm are users outside day-to-day management, so they mainly rely on the business''s published financial accounting statements."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Internal Versus External Users". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Owners of a service firm normally receive formal accounting information no more often than once a year, when the financial accounting statements are published."

The statement is true.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Internal Versus External Users". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Owners of a retailer are internal users who receive management accounting reports every week, in the same way as its own managers."

The statement is false.'] WHERE case_id = 'CASE 6.4.026' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Liquidity From the Balance Sheet 27". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Auditing is the independent checking of accounts for authenticity by an auditing company."

The statement is true.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 182 + 64 + 104 = 350
$$

$$
CL = 247 + 49 = 296
$$

$$
\text{Current ratio} = \frac{350}{296} = 1.1824
$$

Claimed: exceeds 1.89. Actual 1.18.

Reading the arithmetic against the claim: actual current ratio 1.18 versus ''exceeds 1.89'' so the statement does not hold.

The statement is false.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 350 and current liabilities total 296:

$$
WC = CA - CL
$$

$$
CA = 350, \quad CL = 296
$$

$$
WC = 350 - 296 = 54
$$

The statement cites working capital of €54 thousand and that it is positive. Calculated WC is 54, which is positive.

Reading the arithmetic against the claim: WC = 54 is positive as claimed so the statement holds.

The statement is true.', 'TRUE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 366 and total assets = 1,102. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{366}{1,102}
$$

$$
ER = 33.2\%
$$

Claimed: is below 38%. Actual 33.2%.

Reading the arithmetic against the claim: actual equity ratio 33.2% matches ''is below 38%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Inventory as a percentage of current assets.

Name the identity in words: Inventory share of current assets = Inventory ÷ current assets.

From the extract, Inventory = 182 and current assets = 350. Plug the figures step by step:

$$
Share = \frac{\text{Inventory}}{\text{current assets}}
$$

$$
Share = \frac{182}{350}
$$

$$
Share = 52.0\%
$$

Threshold: more than 34.8%. Actual 52.0%.

Reading the arithmetic against the claim: actual share 52.0% matches ''more than 34.8%'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.4.027' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Frequency of Financial Reporting". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Lenders of a service firm are users outside day-to-day management, so they mainly rely on the business''s published financial accounting statements."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Frequency of Financial Reporting". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Lenders of a service firm normally receive formal accounting information no more often than once a year, when the financial accounting statements are published."

The statement is true.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Frequency of Financial Reporting". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Owners of a retailer base their judgement mainly on informal notes prepared for its managers rather than on the published financial statements."

The statement is false.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Frequency of Financial Reporting". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Lenders of a retailer are internal users who receive management accounting reports every week, in the same way as its own managers."

The statement is false.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Frequency of Financial Reporting". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Managers of a retailer are not allowed to see any accounting information more often than the once-a-year published financial statements."

The statement is false.'] WHERE case_id = 'CASE 6.4.028' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Frequency of Management Reporting". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Tax authorities of a service firm are users outside day-to-day management, so they mainly rely on the business''s published financial accounting statements."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Frequency of Management Reporting". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Tax authorities of a service firm normally receive formal accounting information no more often than once a year, when the financial accounting statements are published."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Frequency of Management Reporting". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Managers of a service firm work inside the business and can be given management accounting reports designed around their own questions."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Frequency of Management Reporting". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Managers of a service firm can be supplied with management accounting figures weekly or monthly, well before the annual financial accounting statements are finalised."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Frequency of Management Reporting". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Reports prepared for managers of a service firm can be laid out however suits the decision at hand, unlike the standardised format required of financial accounting statements."

The statement is true.'] WHERE case_id = 'CASE 6.4.029' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Short Balance Sheet Extract 30". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Managerial accounting focuses on providing information for the management of the business to support decisions such as where to cut costs and how to calculate prices."

The statement is true.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 275 and total assets = 529. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{275}{529}
$$

$$
ER = 52.0\%
$$

Claimed: is below 28.2%. Actual 52.0%.

Reading the arithmetic against the claim: actual equity ratio 52.0% does not match ''is below 28.2%'' so the statement does not hold.

The statement is false.', 'FALSE — Borrowed funds are liabilities; equity is the owners'' residual interest.

A bank loan creates an obligation to a lender and cannot be classified as equity.

Using the stem facts: "The long-term bank loan of €162 thousand is correctly classified within equity."

Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The statement is false.', 'FALSE — Single-year statements are routinely used, often with comparatives.

One year limits trends but does not make the extract useless to external users.

Using the stem facts: "Because the extract above (total assets of €529 thousand) covers only one financial year, external users such as shareholders could not rely on it at all."

Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The statement is false.', 'FALSE — Management reports are not bound to the statutory published format.

Internal management accounts may use whatever layout, detail, and frequency managers need. Statutory formats govern published financial statements, not internal packs.

Applied to this stem: "Internal management reports covering the same period as the extract above (total assets of €529 thousand) must follow the identical statutory format shown here."

The statement is false.'] WHERE case_id = 'CASE 6.4.030' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Land has an indefinite useful life and is not depreciated.

Unlike buildings and machinery, land does not wear out through ordinary use. Therefore land stays at cost (subject to impairment rules) without a systematic depreciation charge each year.

Applied to this stem: "Land is not subject to depreciation because it does not wear out through use the way buildings and machinery do."

The statement is true.', 'TRUE — Compare Asset A''s and Asset B''s straight-line annual charges.

$$
A = 10,429, \quad B = 4,600
$$

$$
\frac{10,429 - 4,600}{4,600} = 126.7\%
$$

Threshold: more than 23.2% higher. Actual premium 126.7%.

Reading the arithmetic against the claim: premium 126.7% versus more than 23.2% so the statement holds.

The statement is true.', 'TRUE — Financial accounting reports for external users; management accounting is internal.

A published extract for lenders or shareholders is financial accounting by purpose and audience.

Using the stem facts: "A published version of the extract above, showing the combined asset cost of €101,000 thousand, is an example of external financial reporting that a lender might study before extending credit."

Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The statement is true.', 'TRUE — Audits provide reasonable assurance, not absolute certainty.

The auditor''s opinion addresses the risk of material misstatement in the financial statements. It is not a guarantee that every figure is exact or that the business will prosper.

Applied to this stem: "An independent audit of the extract above, including the the combined asset cost of €101,000 thousand, aims to give reasonable assurance that the figures are free from material misstatement, not an absolute guarantee."

The statement is true.', 'TRUE — Financial accounting reports for external users; management accounting is internal.

A published extract for lenders or shareholders is financial accounting by purpose and audience.

Using the stem facts: "Because the extract above discloses the combined asset cost of €101,000 thousand to outside parties, it is best described as financial accounting rather than management accounting."

Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The statement is true.'] WHERE case_id = 'CASE 6.4.031' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Flexible Formats in Management Accounting". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Employees of a service firm work inside the business and can be given management accounting reports designed around their own questions."

The statement is true.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Flexible Formats in Management Accounting". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Management accounting reports prepared for managers of a retailer must use exactly the same statutory format as the published financial statements."

The statement is false.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Flexible Formats in Management Accounting". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Employees of a retailer are not allowed to see any accounting information more often than the once-a-year published financial statements."

The statement is false.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Flexible Formats in Management Accounting". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Employees of a service firm can be supplied with management accounting figures weekly or monthly, well before the annual financial accounting statements are finalised."

The statement is true.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Flexible Formats in Management Accounting". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Owners of a retailer have no interest in the return earned on the capital they have invested when they look at accounting information."

The statement is false.'] WHERE case_id = 'CASE 6.4.032' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Liquidity From the Balance Sheet 33". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Only external users need accounting information; owners and managers do not."

The statement is false.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 245 + 134 + 43 = 422
$$

$$
CL = 209 + 66 = 275
$$

$$
\text{Current ratio} = \frac{422}{275} = 1.5345
$$

Claimed: is below 1.19. Actual 1.53.

Reading the arithmetic against the claim: actual current ratio 1.53 versus ''is below 1.19'' so the statement does not hold.

The statement is false.', 'FALSE — The acid-test (quick) ratio is a stricter liquidity test: inventory is removed from current assets before dividing by current liabilities.

Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = 422, \quad \text{Inventory} = 245, \quad CL = 275
$$

$$
CA - \text{Inventory} = 422 - 245 = 177
$$

$$
\text{Acid-test} = \frac{177}{275} = 0.6436
$$

Threshold: more than 1.12. Actual 0.64.

Reading the arithmetic against the claim: acid-test 0.64 is not more than 1.12 so the statement does not hold.

The statement is false.', 'TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 245 + 134 + 43 = 422
$$

$$
CL = 209 + 66 = 275
$$

$$
\text{Current ratio} = \frac{422}{275} = 1.5345
$$

Claimed: exceeds 1.36. Actual 1.53.

Reading the arithmetic against the claim: actual current ratio 1.53 versus ''exceeds 1.36'' so the statement holds.

The statement is true.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 443 and total assets = 1,191. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{443}{1,191}
$$

$$
ER = 37.2\%
$$

Claimed: is below 30.9%. Actual 37.2%.

Reading the arithmetic against the claim: actual equity ratio 37.2% does not match ''is below 30.9%'' so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.4.033' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Statutory Formats in Financial Accounting". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Reports prepared for employees of a service firm can be laid out however suits the decision at hand, unlike the standardised format required of financial accounting statements."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Statutory Formats in Financial Accounting". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Owners of a service firm look at accounting information mainly to judge the return earned on the capital they have invested."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Statutory Formats in Financial Accounting". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Lenders of a service firm look at accounting information mainly to judge whether the business will be able to repay what it owes."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Statutory Formats in Financial Accounting". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Tax authorities of a service firm look at accounting information mainly to judge how much tax is due on the business''s profit."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Statutory Formats in Financial Accounting". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Investors of a service firm look at accounting information mainly to judge the likely return and risk before committing further capital."

The statement is true.'] WHERE case_id = 'CASE 6.4.034' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Independent Auditing Explained". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Lenders of a retailer have no interest in whether the business will be able to repay what it owes when they look at accounting information."

The statement is false.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Independent Auditing Explained". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Managers of a service firm look at accounting information mainly to judge controlling costs and choosing between courses of action."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Independent Auditing Explained". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Employees of a service firm look at accounting information mainly to judge how secure their jobs and future pay are likely to be."

The statement is true.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Independent Auditing Explained". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Tax authorities of a retailer have no interest in how much tax is due on the business''s profit when they look at accounting information."

The statement is false.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Independent Auditing Explained". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Investors of a retailer have no interest in the likely return and risk before committing further capital when they look at accounting information."

The statement is false.'] WHERE case_id = 'CASE 6.4.035' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Audit Independence From Management". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Owners of a construction contractor are users outside day-to-day management, so they mainly rely on the business''s published financial accounting statements."

The statement is true.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Audit Independence From Management". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Managers of a retailer have no interest in controlling costs and choosing between courses of action when they look at accounting information."

The statement is false.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Audit Independence From Management". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Employees of a retailer have no interest in how secure their jobs and future pay are likely to be when they look at accounting information."

The statement is false.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Audit Independence From Management". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Owners of a service firm are internal users who receive management accounting reports every week, in the same way as its own managers."

The statement is false.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Audit Independence From Management". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Owners of a service firm base their judgement mainly on informal notes prepared for its managers rather than on the published financial statements."

The statement is false.'] WHERE case_id = 'CASE 6.4.036' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "A True and Fair View". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Lenders of a service firm are internal users who receive management accounting reports every week, in the same way as its own managers."

The statement is false.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "A True and Fair View". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Lenders of a service firm base their judgement mainly on informal notes prepared for its managers rather than on the published financial statements."

The statement is false.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "A True and Fair View". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Managers of a service firm are not allowed to see any accounting information more often than the once-a-year published financial statements."

The statement is false.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "A True and Fair View". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Management accounting reports prepared for managers of a service firm must use exactly the same statutory format as the published financial statements."

The statement is false.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "A True and Fair View". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Owners of a construction contractor normally receive formal accounting information no more often than once a year, when the financial accounting statements are published."

The statement is true.'] WHERE case_id = 'CASE 6.4.037' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Assurance for External Users". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Employees of a service firm are not allowed to see any accounting information more often than the once-a-year published financial statements."

The statement is false.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Assurance for External Users". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Management accounting reports prepared for employees of a service firm must use exactly the same statutory format as the published financial statements."

The statement is false.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Assurance for External Users". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Lenders of a construction contractor are users outside day-to-day management, so they mainly rely on the business''s published financial accounting statements."

The statement is true.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Assurance for External Users". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Owners of a service firm have no interest in the return earned on the capital they have invested when they look at accounting information."

The statement is false.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Assurance for External Users". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Lenders of a service firm have no interest in whether the business will be able to repay what it owes when they look at accounting information."

The statement is false.'] WHERE case_id = 'CASE 6.4.038' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Unaudited Internal Reports". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Lenders of a construction contractor normally receive formal accounting information no more often than once a year, when the financial accounting statements are published."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Unaudited Internal Reports". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Tax authorities of a construction contractor are users outside day-to-day management, so they mainly rely on the business''s published financial accounting statements."

The statement is true.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Unaudited Internal Reports". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Tax authorities of a service firm have no interest in how much tax is due on the business''s profit when they look at accounting information."

The statement is false.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Unaudited Internal Reports". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Managers of a construction contractor work inside the business and can be given management accounting reports designed around their own questions."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Unaudited Internal Reports". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Managers of a construction contractor can be supplied with management accounting figures weekly or monthly, well before the annual financial accounting statements are finalised."

The statement is true.'] WHERE case_id = 'CASE 6.4.039' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Short Balance Sheet Extract 40". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Financial accounting information such as the balance sheet and the income statement is also of interest to decision makers outside the business, for example tax authorities or banks."

The statement is true.', 'TRUE — Inventory is held for sale or for consumption in the operating cycle.

On the balance sheet that places inventory among current assets. It is not an intangible (no physical stock for sale) and not a non-current operating asset (those are used in the business beyond one year rather than turned over as stock).

Applied to this stem: "Inventory of €93 thousand is correctly classified as a current asset."

The statement is true.', 'TRUE — Financial accounting reports for external users; management accounting is internal.

A published extract for lenders or shareholders is financial accounting by purpose and audience.

Using the stem facts: "A published version of the extract above, showing total assets of €410 thousand, is an example of external financial reporting that a lender might study before extending credit."

Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The statement is true.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 182 and total assets = 410. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{182}{410}
$$

$$
ER = 44.4\%
$$

Claimed: is below 33.1%. Actual 44.4%.

Reading the arithmetic against the claim: actual equity ratio 44.4% does not match ''is below 33.1%'' so the statement does not hold.

The statement is false.', 'FALSE — Borrowed funds are liabilities; equity is the owners'' residual interest.

A bank loan creates an obligation to a lender and cannot be classified as equity.

Using the stem facts: "The long-term bank loan of €139 thousand is correctly classified within equity."

Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The statement is false.'] WHERE case_id = 'CASE 6.4.040' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Earnings Per Share From Reported Figures 41". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "A higher stock-exchange quotation for shares already issued benefits selling shareholders, not the corporation''s cash reserves."

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 37, \quad P_{\text{last}} = 30
$$

$$
\frac{30 - 37}{37} = -18.9\%
$$

Threshold: more than 17.6%. Actual -18.9%.

Reading the arithmetic against the claim: the rise is -18.9%, which does not exceed 17.6% so the statement does not hold.

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 30, \quad \text{Shares} = 620,000
$$

$$
\text{MCap} = 30 \times 620,000 = €18.60\text{ million}
$$

Threshold: exceeds €14 million. Actual €18.60 million.

Reading the arithmetic against the claim: market cap €18.60m exceeds €14m so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 364,000, \quad \text{Shares} = 620,000
$$

$$
\frac{364,000}{620,000} = 58.7\%
$$

Threshold: exceed 35.9%. Actual 58.7%.

Reading the arithmetic against the claim: turnover 58.7% exceeds 35.9% so the statement holds.

The statement is true.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 79,000 \quad (June)
$$

Threshold: exceeds 60,891. Actual 79,000.

Reading the arithmetic against the claim: peak volume 79,000 exceeds 60,891 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.4.041' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Shared Transactions, Different Purposes". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Reports prepared for managers of a construction contractor can be laid out however suits the decision at hand, unlike the standardised format required of financial accounting statements."

The statement is true.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Shared Transactions, Different Purposes". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Investors of a service firm have no interest in the likely return and risk before committing further capital when they look at accounting information."

The statement is false.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Shared Transactions, Different Purposes". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Managers of a service firm have no interest in controlling costs and choosing between courses of action when they look at accounting information."

The statement is false.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Shared Transactions, Different Purposes". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Employees of a service firm have no interest in how secure their jobs and future pay are likely to be when they look at accounting information."

The statement is false.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Shared Transactions, Different Purposes". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Owners of a construction contractor are internal users who receive management accounting reports every week, in the same way as its own managers."

The statement is false.'] WHERE case_id = 'CASE 6.4.042' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Recognised Rules for Comparability". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Employees of a construction contractor work inside the business and can be given management accounting reports designed around their own questions."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Recognised Rules for Comparability". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Employees of a construction contractor can be supplied with management accounting figures weekly or monthly, well before the annual financial accounting statements are finalised."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Recognised Rules for Comparability". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Reports prepared for employees of a construction contractor can be laid out however suits the decision at hand, unlike the standardised format required of financial accounting statements."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Recognised Rules for Comparability". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Owners of a construction contractor look at accounting information mainly to judge the return earned on the capital they have invested."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Recognised Rules for Comparability". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Lenders of a construction contractor look at accounting information mainly to judge whether the business will be able to repay what it owes."

The statement is true.'] WHERE case_id = 'CASE 6.4.043' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 17, \quad P_{\text{last}} = 10
$$

$$
\frac{10 - 17}{17} = -41.2\%
$$

Threshold: more than 19.1%. Actual -41.2%.

Reading the arithmetic against the claim: the rise is -41.2%, which does not exceed 19.1% so the statement does not hold.

The statement is false.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 17 \times 647,000 = €11.00\text{m}
$$

$$
\text{MCap}_{\text{last}} = 10 \times 647,000 = €6.47\text{m}
$$

$$
\frac{6.47 - 11.00}{11.00} = -41.2\%
$$

Threshold: more than 11.1%. Actual -41.2%.

Reading the arithmetic against the claim: MCap rose -41.2%, which does not exceed 11.1% so the statement does not hold.

The statement is false.', 'FALSE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 64,000 \quad (May)
$$

Threshold: exceeds 64,491. Actual 64,000.

Reading the arithmetic against the claim: peak volume 64,000 does not exceed 64,491 so the statement does not hold.

The statement is false.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €259\text{ thousand}
$$

The statement claims this amount is below €199 thousand. Actual €259 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €259k is not below €199k so the statement does not hold.

The statement is false.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Earnings Per Share From Reported Figures 44". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "A higher stock-exchange quotation for shares already issued benefits selling shareholders, not the corporation''s cash reserves."

The statement is true.'] WHERE case_id = 'CASE 6.4.044' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Share Price and Market Capitalisation 45". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "High inventory turnover indicates that goods sell well and do not remain in stock for a long time."

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 24, \quad \text{Shares} = 855,000
$$

$$
\text{MCap} = 24 \times 855,000 = €20.52\text{ million}
$$

Threshold: exceeds €18.3 million. Actual €20.52 million.

Reading the arithmetic against the claim: market cap €20.52m exceeds €18.3m so the statement holds.

The statement is true.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 24, \quad P_{\min} = 19
$$

$$
\frac{24 - 19}{19} = 26.3\%
$$

Threshold: more than 24.6%. Actual 26.3%.

Reading the arithmetic against the claim: the gap is 26.3%, which exceeds 24.6% so the statement holds.

The statement is true.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 73,000 \quad (May)
$$

Threshold: exceeds 70,230. Actual 73,000.

Reading the arithmetic against the claim: peak volume 73,000 exceeds 70,230 so the statement holds.

The statement is true.', 'TRUE — Shares outstanding are an annual stock figure reported beside the price table; the claim is simply whether that figure equals the stated count.

Read shares outstanding from the annual figures attached to the extract:

$$
\text{Shares outstanding} = 855,000
$$

The statement claims exactly 855,000. The extract reports 855,000, which matches the claim.

Reading the arithmetic against the claim: extract reports 855,000 versus claimed 855,000 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.4.045' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Owners and Investors as Separate Users". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Owners of a construction contractor base their judgement mainly on informal notes prepared for its managers rather than on the published financial statements."

The statement is false.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Owners and Investors as Separate Users". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Tax authorities of a construction contractor look at accounting information mainly to judge how much tax is due on the business''s profit."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Owners and Investors as Separate Users". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Investors of a construction contractor look at accounting information mainly to judge the likely return and risk before committing further capital."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Owners and Investors as Separate Users". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Managers of a construction contractor look at accounting information mainly to judge controlling costs and choosing between courses of action."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Owners and Investors as Separate Users". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Employees of a construction contractor look at accounting information mainly to judge how secure their jobs and future pay are likely to be."

The statement is true.'] WHERE case_id = 'CASE 6.4.046' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Annual Statements Versus Monthly Reports". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Lenders of a construction contractor are internal users who receive management accounting reports every week, in the same way as its own managers."

The statement is false.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Annual Statements Versus Monthly Reports". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Owners of a hospitality group are users outside day-to-day management, so they mainly rely on the business''s published financial accounting statements."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Annual Statements Versus Monthly Reports". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Owners of a hospitality group normally receive formal accounting information no more often than once a year, when the financial accounting statements are published."

The statement is true.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Annual Statements Versus Monthly Reports". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Lenders of a construction contractor base their judgement mainly on informal notes prepared for its managers rather than on the published financial statements."

The statement is false.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Annual Statements Versus Monthly Reports". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Managers of a construction contractor are not allowed to see any accounting information more often than the once-a-year published financial statements."

The statement is false.'] WHERE case_id = 'CASE 6.4.047' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 21, \quad P_{\text{last}} = 17
$$

$$
\frac{17 - 21}{21} = -19.0\%
$$

Threshold: more than 21.9%. Actual -19.0%.

Reading the arithmetic against the claim: the rise is -19.0%, which does not exceed 21.9% so the statement does not hold.

The statement is false.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Share Price and Market Capitalisation 48". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Only an issue of new shares by the corporation itself raises equity finance; later trading between investors does not."

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 17, \quad \text{Shares} = 716,000
$$

$$
\text{MCap} = 17 \times 716,000 = €12.17\text{ million}
$$

Threshold: exceeds €10.2 million. Actual €12.17 million.

Reading the arithmetic against the claim: market cap €12.17m exceeds €10.2m so the statement holds.

The statement is true.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 21 \times 716,000 = €15.04\text{m}
$$

$$
\text{MCap}_{\text{last}} = 17 \times 716,000 = €12.17\text{m}
$$

$$
\frac{12.17 - 15.04}{15.04} = -19.0\%
$$

Threshold: more than 30.9%. Actual -19.0%.

Reading the arithmetic against the claim: MCap rose -19.0%, which does not exceed 30.9% so the statement does not hold.

The statement is false.', 'FALSE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 95,000 \quad (February)
$$

Threshold: exceeds 99,894. Actual 95,000.

Reading the arithmetic against the claim: peak volume 95,000 does not exceed 99,894 so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.4.048' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 20 \times 602,000 = €12.04\text{m}
$$

$$
\text{MCap}_{\text{last}} = 23 \times 602,000 = €13.85\text{m}
$$

$$
\frac{13.85 - 12.04}{12.04} = 15.0\%
$$

Threshold: more than 18.4%. Actual 15.0%.

Reading the arithmetic against the claim: MCap rose 15.0%, which does not exceed 18.4% so the statement does not hold.

The statement is false.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Listed Company Performance Charts 49". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Working capital should be positive, meaning current assets should be higher than current liabilities."

The statement is true.', 'TRUE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 20, \quad P_{\text{last}} = 23
$$

$$
\frac{23 - 20}{20} = 15.0\%
$$

Threshold: more than 10.6%. Actual 15.0%.

Reading the arithmetic against the claim: the rise is 15.0%, which exceeds 10.6% so the statement holds.

The statement is true.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 23, \quad P_{\min} = 18
$$

$$
\frac{23 - 18}{18} = 27.8\%
$$

Threshold: more than 39.3%. Actual 27.8%.

Reading the arithmetic against the claim: the gap is 27.8%, which does not exceed 39.3% so the statement does not hold.

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 23, \quad \text{Shares} = 602,000
$$

$$
\text{MCap} = 23 \times 602,000 = €13.85\text{ million}
$$

Threshold: exceeds €10.9 million. Actual €13.85 million.

Reading the arithmetic against the claim: market cap €13.85m exceeds €10.9m so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.4.049' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 30, \quad P_{\text{last}} = 36
$$

$$
\frac{36 - 30}{30} = 20.0\%
$$

Threshold: more than 26.8%. Actual 20.0%.

Reading the arithmetic against the claim: the rise is 20.0%, which does not exceed 26.8% so the statement does not hold.

The statement is false.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Earnings Per Share From Reported Figures 50". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Voting rights ordinarily attach to common shares, while preferred shareholders usually accept limited voting rights in return for a preferential dividend."

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 271,000, \quad \text{Shares} = 684,000
$$

$$
\frac{271,000}{684,000} = 39.6\%
$$

Threshold: exceed 33.8%. Actual 39.6%.

Reading the arithmetic against the claim: turnover 39.6% exceeds 33.8% so the statement holds.

The statement is true.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 30 \times 684,000 = €20.52\text{m}
$$

$$
\text{MCap}_{\text{last}} = 36 \times 684,000 = €24.62\text{m}
$$

$$
\frac{24.62 - 20.52}{20.52} = 20.0\%
$$

Threshold: more than 31.9%. Actual 20.0%.

Reading the arithmetic against the claim: MCap rose 20.0%, which does not exceed 31.9% so the statement does not hold.

The statement is false.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 36, \quad P_{\min} = 30
$$

$$
\frac{36 - 30}{30} = 20.0\%
$$

Threshold: more than 44.2%. Actual 20.0%.

Reading the arithmetic against the claim: the gap is 20.0%, which does not exceed 44.2% so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.4.050' AND tier = 'full';
