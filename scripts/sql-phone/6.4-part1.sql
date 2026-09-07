-- Update expanded explanations for 6.4-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Short Balance Sheet Extract 1". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Depreciation each year requires an equal cash payment to an outside party when the charge is recorded."

The statement is false.', 'TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 65 + 0 + 55 = 120
$$

$$
CL = 32 + 0 = 32
$$

$$
\text{Current ratio} = \frac{120}{32} = 3.7500
$$

Claimed: exceeds 1.27. Actual 3.75.

Reading the arithmetic against the claim: actual current ratio 3.75 versus ''exceeds 1.27'' so the statement holds.

The statement is true.', 'TRUE — Inventory is held for sale or for consumption in the operating cycle.

On the balance sheet that places inventory among current assets. It is not an intangible (no physical stock for sale) and not a non-current operating asset (those are used in the business beyond one year rather than turned over as stock).

Applied to this stem: "Inventory of €65 thousand is correctly classified as a current asset."

The statement is true.', 'TRUE — Financial accounting reports for external users; management accounting is internal.

A published extract for lenders or shareholders is financial accounting by purpose and audience.

Using the stem facts: "A published version of the extract above, showing total assets of €320 thousand, is an example of external financial reporting that a lender might study before extending credit."

Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The statement is true.', 'TRUE — Audits provide reasonable assurance, not absolute certainty.

The auditor''s opinion addresses the risk of material misstatement in the financial statements. It is not a guarantee that every figure is exact or that the business will prosper.

Applied to this stem: "An independent audit of the extract above, including the total assets of €320 thousand, aims to give reasonable assurance that the figures are free from material misstatement, not an absolute guarantee."

The statement is true.'] WHERE case_id = 'CASE 6.4.001' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Financial Accounting and External Users". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Owners of a manufacturer are users outside day-to-day management, so they mainly rely on the business''s published financial accounting statements."

The statement is true.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Financial Accounting and External Users". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Owners of a manufacturer are internal users who receive management accounting reports every week, in the same way as its own managers."

The statement is false.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Financial Accounting and External Users". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Owners of a manufacturer normally receive formal accounting information no more often than once a year, when the financial accounting statements are published."

The statement is true.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Financial Accounting and External Users". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Owners of a manufacturer base their judgement mainly on informal notes prepared for its managers rather than on the published financial statements."

The statement is false.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Financial Accounting and External Users". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Managers of a manufacturer are not allowed to see any accounting information more often than the once-a-year published financial statements."

The statement is false.'] WHERE case_id = 'CASE 6.4.002' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Land has an indefinite useful life and is not depreciated.

Unlike buildings and machinery, land does not wear out through ordinary use. Therefore land stays at cost (subject to impairment rules) without a systematic depreciation charge each year.

Applied to this stem: "Land is not subject to depreciation because it does not wear out through use the way buildings and machinery do."

The statement is true.', 'TRUE — Depreciable amount = cost − residual value.

A positive residual reduces what is spread over useful life, so annual straight-line charges are lower than if residual were nil. That is why residual is deducted before dividing by life.

Applied to this stem: "Residual value reduces the amount of Asset B''s cost that is spread as depreciation."

The statement is true.', 'TRUE — Nil residual means carrying value reaches zero at the end of useful life.

Once the full cost has been allocated over the asset''s life, book value is nil when residual is nil. That is the accounting end-state of straight-line depreciation with a zero residual.

Applied to this stem: "Asset A will be fully written down to nil residual value at the end of its useful life."

The statement is true.', 'FALSE — Single-year statements are routinely used, often with comparatives.

One year limits trends but does not make the extract useless to external users.

Using the stem facts: "Because the extract above (the combined asset cost of €99,000 thousand) covers only one financial year, external users such as shareholders could not rely on it at all."

Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The statement is false.', 'FALSE — Management reports are not bound to the statutory published format.

Internal management accounts may use whatever layout, detail, and frequency managers need. Statutory formats govern published financial statements, not internal packs.

Applied to this stem: "Internal management reports covering the same period as the extract above (the combined asset cost of €99,000 thousand) must follow the identical statutory format shown here."

The statement is false.'] WHERE case_id = 'CASE 6.4.003' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Management Accounting for Internal Users". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Management accounting reports prepared for managers of a manufacturer must use exactly the same statutory format as the published financial statements."

The statement is false.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Management Accounting for Internal Users". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Lenders of a manufacturer are users outside day-to-day management, so they mainly rely on the business''s published financial accounting statements."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Management Accounting for Internal Users". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Lenders of a manufacturer normally receive formal accounting information no more often than once a year, when the financial accounting statements are published."

The statement is true.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Management Accounting for Internal Users". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Employees of a manufacturer are not allowed to see any accounting information more often than the once-a-year published financial statements."

The statement is false.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Management Accounting for Internal Users". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Managers of a manufacturer work inside the business and can be given management accounting reports designed around their own questions."

The statement is true.'] WHERE case_id = 'CASE 6.4.004' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Owners Weighing Return Against Risk". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Management accounting reports prepared for employees of a manufacturer must use exactly the same statutory format as the published financial statements."

The statement is false.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Owners Weighing Return Against Risk". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Managers of a manufacturer can be supplied with management accounting figures weekly or monthly, well before the annual financial accounting statements are finalised."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Owners Weighing Return Against Risk". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Reports prepared for managers of a manufacturer can be laid out however suits the decision at hand, unlike the standardised format required of financial accounting statements."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Owners Weighing Return Against Risk". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Employees of a manufacturer work inside the business and can be given management accounting reports designed around their own questions."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Owners Weighing Return Against Risk". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Owners of a manufacturer look at accounting information mainly to judge the return earned on the capital they have invested."

The statement is true.'] WHERE case_id = 'CASE 6.4.005' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Liquidity From the Balance Sheet 6". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Managerial accounting focuses on providing information for the management of the business to support decisions such as where to cut costs and how to calculate prices."

The statement is true.', 'TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 192 + 115 + 102 = 409
$$

$$
CL = 170 + 35 = 205
$$

$$
\text{Current ratio} = \frac{409}{205} = 1.9951
$$

Claimed: exceeds 1.34. Actual 2.00.

Reading the arithmetic against the claim: actual current ratio 2.00 versus ''exceeds 1.34'' so the statement holds.

The statement is true.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 409 and current liabilities total 205:

$$
WC = CA - CL
$$

$$
CA = 409, \quad CL = 205
$$

$$
WC = 409 - 205 = 204
$$

The statement cites working capital of €204 thousand and that it is positive. Calculated WC is 204, which is positive.

Reading the arithmetic against the claim: WC = 204 is positive as claimed so the statement holds.

The statement is true.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 265 and total assets = 964. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{265}{964}
$$

$$
ER = 27.5\%
$$

Claimed: is below 20%. Actual 27.5%.

Reading the arithmetic against the claim: actual equity ratio 27.5% does not match ''is below 20%'' so the statement does not hold.

The statement is false.', 'TRUE — The debt ratio places debt against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: debt ratio = debt ÷ total assets.

From the extract, debt = 699 and total assets = 964. Plug the figures step by step:

$$
DR = \frac{\text{debt}}{\text{total assets}}
$$

$$
DR = \frac{699}{964}
$$

$$
DR = 72.5\%
$$

Claimed: exceeds 63.6%. Actual 72.5%.

Reading the arithmetic against the claim: actual debt ratio 72.5% matches ''exceeds 63.6%'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.4.006' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Lenders and Repayment Capacity". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Lenders of a manufacturer look at accounting information mainly to judge whether the business will be able to repay what it owes."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Lenders and Repayment Capacity". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Tax authorities of a manufacturer look at accounting information mainly to judge how much tax is due on the business''s profit."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Lenders and Repayment Capacity". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Investors of a manufacturer look at accounting information mainly to judge the likely return and risk before committing further capital."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Lenders and Repayment Capacity". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Managers of a manufacturer look at accounting information mainly to judge controlling costs and choosing between courses of action."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Lenders and Repayment Capacity". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Employees of a manufacturer look at accounting information mainly to judge how secure their jobs and future pay are likely to be."

The statement is true.'] WHERE case_id = 'CASE 6.4.007' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Short Balance Sheet Extract 8". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Managerial accounting focuses on providing information for the management of the business to support decisions such as where to cut costs and how to calculate prices."

The statement is true.', 'TRUE — Inventory is held for sale or for consumption in the operating cycle.

On the balance sheet that places inventory among current assets. It is not an intangible (no physical stock for sale) and not a non-current operating asset (those are used in the business beyond one year rather than turned over as stock).

Applied to this stem: "Inventory of €116 thousand is correctly classified as a current asset."

The statement is true.', 'TRUE — Financial accounting reports for external users; management accounting is internal.

A published extract for lenders or shareholders is financial accounting by purpose and audience.

Using the stem facts: "A published version of the extract above, showing total assets of €511 thousand, is an example of external financial reporting that a lender might study before extending credit."

Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The statement is true.', 'TRUE — Audits provide reasonable assurance, not absolute certainty.

The auditor''s opinion addresses the risk of material misstatement in the financial statements. It is not a guarantee that every figure is exact or that the business will prosper.

Applied to this stem: "An independent audit of the extract above, including the total assets of €511 thousand, aims to give reasonable assurance that the figures are free from material misstatement, not an absolute guarantee."

The statement is true.', 'TRUE — Financial accounting reports for external users; management accounting is internal.

A published extract for lenders or shareholders is financial accounting by purpose and audience.

Using the stem facts: "Because the extract above discloses total assets of €511 thousand to outside parties, it is best described as financial accounting rather than management accounting."

Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The statement is true.'] WHERE case_id = 'CASE 6.4.008' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Depreciation is a non-cash allocation of a past capital outlay.

Cash left the business when the asset was acquired. The annual depreciation charge merely allocates that past outlay across useful life; recording the charge does not require a fresh cash payment to an outside party in the year of the expense.

Applied to this stem: "Unlike wages or energy costs, depreciation does not cause an actual cash payment in the period when it is charged."

The statement is true.', 'TRUE — Compare Asset A''s and Asset B''s straight-line annual charges.

$$
A = 9,286, \quad B = 4,200
$$

$$
\frac{9,286 - 4,200}{4,200} = 121.1\%
$$

Threshold: more than 29.9% higher. Actual premium 121.1%.

Reading the arithmetic against the claim: premium 121.1% versus more than 29.9% so the statement holds.

The statement is true.', 'TRUE — Financial accounting reports for external users; management accounting is internal.

A published extract for lenders or shareholders is financial accounting by purpose and audience.

Using the stem facts: "A published version of the extract above, showing the combined asset cost of €89,000 thousand, is an example of external financial reporting that a lender might study before extending credit."

Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The statement is true.', 'TRUE — Audits provide reasonable assurance, not absolute certainty.

The auditor''s opinion addresses the risk of material misstatement in the financial statements. It is not a guarantee that every figure is exact or that the business will prosper.

Applied to this stem: "An independent audit of the extract above, including the the combined asset cost of €89,000 thousand, aims to give reasonable assurance that the figures are free from material misstatement, not an absolute guarantee."

The statement is true.', 'TRUE — Financial accounting reports for external users; management accounting is internal.

A published extract for lenders or shareholders is financial accounting by purpose and audience.

Using the stem facts: "Because the extract above discloses the combined asset cost of €89,000 thousand to outside parties, it is best described as financial accounting rather than management accounting."

Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The statement is true.'] WHERE case_id = 'CASE 6.4.009' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Asset Composition Chart 10". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Financial accounting information such as the balance sheet and the income statement is also of interest to decision makers outside the business, for example tax authorities or banks."

The statement is true.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 356 and current liabilities total 223:

$$
WC = CA - CL
$$

$$
CA = 356, \quad CL = 223
$$

$$
WC = 356 - 223 = 133
$$

The statement cites working capital of €133 thousand and that it is positive. Calculated WC is 133, which is positive.

Reading the arithmetic against the claim: WC = 133 is positive as claimed so the statement holds.

The statement is true.', 'TRUE — The debt ratio places debt against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: debt ratio = debt ÷ total assets.

From the extract, debt = 703 and total assets = 1,181. Plug the figures step by step:

$$
DR = \frac{\text{debt}}{\text{total assets}}
$$

$$
DR = \frac{703}{1,181}
$$

$$
DR = 59.5\%
$$

Claimed: exceeds 56%. Actual 59.5%.

Reading the arithmetic against the claim: actual debt ratio 59.5% matches ''exceeds 56%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Trade receivables as a percentage of current assets.

Name the identity in words: Trade receivables share of current assets = Trade receivables ÷ current assets.

From the extract, Trade receivables = 81 and current assets = 356. Plug the figures step by step:

$$
Share = \frac{\text{Trade receivables}}{\text{current assets}}
$$

$$
Share = \frac{81}{356}
$$

$$
Share = 22.8\%
$$

Threshold: less than 48.5%. Actual 22.8%.

Reading the arithmetic against the claim: actual share 22.8% matches ''less than 48.5%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Cash and cash equivalents as a percentage of current assets.

Name the identity in words: Cash and cash equivalents share of current assets = Cash and cash equivalents ÷ current assets.

From the extract, Cash and cash equivalents = 119 and current assets = 356. Plug the figures step by step:

$$
Share = \frac{\text{Cash and cash equivalents}}{\text{current assets}}
$$

$$
Share = \frac{119}{356}
$$

$$
Share = 33.4\%
$$

Threshold: more than 23.1%. Actual 33.4%.

Reading the arithmetic against the claim: actual share 33.4% matches ''more than 23.1%'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.4.010' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Short Balance Sheet Extract 11". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Only external users need accounting information; owners and managers do not."

The statement is false.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 319 and total assets = 517. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{319}{517}
$$

$$
ER = 61.7\%
$$

Claimed: is below 29.8%. Actual 61.7%.

Reading the arithmetic against the claim: actual equity ratio 61.7% does not match ''is below 29.8%'' so the statement does not hold.

The statement is false.', 'TRUE — Financial accounting reports for external users; management accounting is internal.

A published extract for lenders or shareholders is financial accounting by purpose and audience.

Using the stem facts: "A published version of the extract above, showing total assets of €517 thousand, is an example of external financial reporting that a lender might study before extending credit."

Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The statement is true.', 'FALSE — Borrowed funds are liabilities; equity is the owners'' residual interest.

A bank loan creates an obligation to a lender and cannot be classified as equity.

Using the stem facts: "The long-term bank loan of €120 thousand is correctly classified within equity."

Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The statement is false.', 'FALSE — Single-year statements are routinely used, often with comparatives.

One year limits trends but does not make the extract useless to external users.

Using the stem facts: "Because the extract above (total assets of €517 thousand) covers only one financial year, external users such as shareholders could not rely on it at all."

Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The statement is false.'] WHERE case_id = 'CASE 6.4.011' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Tax Authorities and Filed Accounts". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Owners of a manufacturer have no interest in the return earned on the capital they have invested when they look at accounting information."

The statement is false.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Tax Authorities and Filed Accounts". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Lenders of a manufacturer have no interest in whether the business will be able to repay what it owes when they look at accounting information."

The statement is false.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Tax Authorities and Filed Accounts". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Owners of a retailer are users outside day-to-day management, so they mainly rely on the business''s published financial accounting statements."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Tax Authorities and Filed Accounts". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Owners of a retailer normally receive formal accounting information no more often than once a year, when the financial accounting statements are published."

The statement is true.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Tax Authorities and Filed Accounts". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Tax authorities of a manufacturer have no interest in how much tax is due on the business''s profit when they look at accounting information."

The statement is false.'] WHERE case_id = 'CASE 6.4.012' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Short Depreciation Extract 13". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Managerial accounting exists mainly to satisfy tax authorities rather than to support internal decisions."

The statement is false.', 'FALSE — Single-year statements are routinely used, often with comparatives.

One year limits trends but does not make the extract useless to external users.

Using the stem facts: "Because the extract above (the combined asset cost of €98,000 thousand) covers only one financial year, external users such as shareholders could not rely on it at all."

Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The statement is false.', 'TRUE — Compare Asset A''s and Asset B''s straight-line annual charges.

$$
A = 9,250, \quad B = 4,400
$$

$$
\frac{9,250 - 4,400}{4,400} = 110.2\%
$$

Threshold: more than 39.5% higher. Actual premium 110.2%.

Reading the arithmetic against the claim: premium 110.2% versus more than 39.5% so the statement holds.

The statement is true.', 'FALSE — Management reports are not bound to the statutory published format.

Internal management accounts may use whatever layout, detail, and frequency managers need. Statutory formats govern published financial statements, not internal packs.

Applied to this stem: "Internal management reports covering the same period as the extract above (the combined asset cost of €98,000 thousand) must follow the identical statutory format shown here."

The statement is false.', 'FALSE — Published figures exist for outside readers.

Shareholders, lenders, and tax authorities routinely see such amounts.

Using the stem facts: "The the combined asset cost of €98,000 thousand shown above would never be disclosed to any party outside the business under any circumstances."

Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The statement is false.'] WHERE case_id = 'CASE 6.4.013' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Balance Sheet Structure Review 14". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Only external users need accounting information; owners and managers do not."

The statement is false.', 'TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 263 + 166 + 38 = 467
$$

$$
CL = 237 + 26 = 263
$$

$$
\text{Current ratio} = \frac{467}{263} = 1.7757
$$

Claimed: exceeds 1.35. Actual 1.78.

Reading the arithmetic against the claim: actual current ratio 1.78 versus ''exceeds 1.35'' so the statement holds.

The statement is true.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 263 + 166 + 38 = 467
$$

$$
CL = 237 + 26 = 263
$$

$$
\text{Current ratio} = \frac{467}{263} = 1.7757
$$

Claimed: is below 0.9. Actual 1.78.

Reading the arithmetic against the claim: actual current ratio 1.78 versus ''is below 0.9'' so the statement does not hold.

The statement is false.', 'TRUE — The debt ratio places debt against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: debt ratio = debt ÷ total assets.

From the extract, debt = 690 and total assets = 1,313. Plug the figures step by step:

$$
DR = \frac{\text{debt}}{\text{total assets}}
$$

$$
DR = \frac{690}{1,313}
$$

$$
DR = 52.6\%
$$

Claimed: exceeds 47.9%. Actual 52.6%.

Reading the arithmetic against the claim: actual debt ratio 52.6% matches ''exceeds 47.9%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Inventory as a percentage of current assets.

Name the identity in words: Inventory share of current assets = Inventory ÷ current assets.

From the extract, Inventory = 263 and current assets = 467. Plug the figures step by step:

$$
Share = \frac{\text{Inventory}}{\text{current assets}}
$$

$$
Share = \frac{263}{467}
$$

$$
Share = 56.3\%
$$

Threshold: more than 54%. Actual 56.3%.

Reading the arithmetic against the claim: actual share 56.3% matches ''more than 54%'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.4.014' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The claim states: Land is not subject to depreciation. The reason given — it does not wear out through use the way buildings and machinery do. — fits the chapter rule. Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The statement is true.', 'TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 85 + 0 + 76 = 161
$$

$$
CL = 36 + 0 = 36
$$

$$
\text{Current ratio} = \frac{161}{36} = 4.4722
$$

Claimed: exceeds 1.3. Actual 4.47.

Reading the arithmetic against the claim: actual current ratio 4.47 versus ''exceeds 1.3'' so the statement holds.

The statement is true.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 279 and total assets = 416. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{279}{416}
$$

$$
ER = 67.1\%
$$

Claimed: is below 25.2%. Actual 67.1%.

Reading the arithmetic against the claim: actual equity ratio 67.1% does not match ''is below 25.2%'' so the statement does not hold.

The statement is false.', 'TRUE — Inventory is held for sale or for consumption in the operating cycle.

On the balance sheet that places inventory among current assets. It is not an intangible (no physical stock for sale) and not a non-current operating asset (those are used in the business beyond one year rather than turned over as stock).

Applied to this stem: "Inventory of €85 thousand is correctly classified as a current asset."

The statement is true.', 'FALSE — Borrowed funds are liabilities; equity is the owners'' residual interest.

A bank loan creates an obligation to a lender and cannot be classified as equity.

Using the stem facts: "The long-term bank loan of €101 thousand is correctly classified within equity."

Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The statement is false.'] WHERE case_id = 'CASE 6.4.015' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Short Depreciation Extract 16". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Managerial accounting exists mainly to satisfy tax authorities rather than to support internal decisions."

The statement is false.', 'TRUE — Compare Asset A''s and Asset B''s straight-line annual charges.

$$
A = 9,750, \quad B = 7,000
$$

$$
\frac{9,750 - 7,000}{7,000} = 39.3\%
$$

Threshold: more than 32.4% higher. Actual premium 39.3%.

Reading the arithmetic against the claim: premium 39.3% versus more than 32.4% so the statement holds.

The statement is true.', 'TRUE — Financial accounting reports for external users; management accounting is internal.

A published extract for lenders or shareholders is financial accounting by purpose and audience.

Using the stem facts: "A published version of the extract above, showing the combined asset cost of €117,000 thousand, is an example of external financial reporting that a lender might study before extending credit."

Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The statement is true.', 'TRUE — Audits provide reasonable assurance, not absolute certainty.

The auditor''s opinion addresses the risk of material misstatement in the financial statements. It is not a guarantee that every figure is exact or that the business will prosper.

Applied to this stem: "An independent audit of the extract above, including the the combined asset cost of €117,000 thousand, aims to give reasonable assurance that the figures are free from material misstatement, not an absolute guarantee."

The statement is true.', 'TRUE — Financial accounting reports for external users; management accounting is internal.

A published extract for lenders or shareholders is financial accounting by purpose and audience.

Using the stem facts: "Because the extract above discloses the combined asset cost of €117,000 thousand to outside parties, it is best described as financial accounting rather than management accounting."

Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The statement is true.'] WHERE case_id = 'CASE 6.4.016' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Balance Sheet Structure Review 17". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Unlike wages or energy costs, depreciation does not cause an actual cash payment in the period when it is charged."

The statement is true.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 82 + 161 + 92 = 335
$$

$$
CL = 227 + 25 = 252
$$

$$
\text{Current ratio} = \frac{335}{252} = 1.3294
$$

Claimed: is below 0.83. Actual 1.33.

Reading the arithmetic against the claim: actual current ratio 1.33 versus ''is below 0.83'' so the statement does not hold.

The statement is false.', 'TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 82 + 161 + 92 = 335
$$

$$
CL = 227 + 25 = 252
$$

$$
\text{Current ratio} = \frac{335}{252} = 1.3294
$$

Claimed: exceeds 1.14. Actual 1.33.

Reading the arithmetic against the claim: actual current ratio 1.33 versus ''exceeds 1.14'' so the statement holds.

The statement is true.', 'FALSE — The acid-test (quick) ratio is a stricter liquidity test: inventory is removed from current assets before dividing by current liabilities.

Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = 335, \quad \text{Inventory} = 82, \quad CL = 252
$$

$$
CA - \text{Inventory} = 335 - 82 = 253
$$

$$
\text{Acid-test} = \frac{253}{252} = 1.0040
$$

Threshold: more than 1.17. Actual 1.00.

Reading the arithmetic against the claim: acid-test 1.00 is not more than 1.17 so the statement does not hold.

The statement is false.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 335 and current liabilities total 252:

$$
WC = CA - CL
$$

$$
CA = 335, \quad CL = 252
$$

$$
WC = 335 - 252 = 83
$$

The statement cites working capital of €83 thousand and that it is positive. Calculated WC is 83, which is positive.

Reading the arithmetic against the claim: WC = 83 is positive as claimed so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.4.017' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Short Balance Sheet Extract 18". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Auditing is the independent checking of accounts for authenticity by an auditing company."

The statement is true.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 288 and total assets = 504. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{288}{504}
$$

$$
ER = 57.1\%
$$

Claimed: is below 31.3%. Actual 57.1%.

Reading the arithmetic against the claim: actual equity ratio 57.1% does not match ''is below 31.3%'' so the statement does not hold.

The statement is false.', 'FALSE — Borrowed funds are liabilities; equity is the owners'' residual interest.

A bank loan creates an obligation to a lender and cannot be classified as equity.

Using the stem facts: "The long-term bank loan of €144 thousand is correctly classified within equity."

Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The statement is false.', 'FALSE — Single-year statements are routinely used, often with comparatives.

One year limits trends but does not make the extract useless to external users.

Using the stem facts: "Because the extract above (total assets of €504 thousand) covers only one financial year, external users such as shareholders could not rely on it at all."

Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The statement is false.', 'TRUE — Inventory is held for sale or for consumption in the operating cycle.

On the balance sheet that places inventory among current assets. It is not an intangible (no physical stock for sale) and not a non-current operating asset (those are used in the business beyond one year rather than turned over as stock).

Applied to this stem: "Inventory of €145 thousand is correctly classified as a current asset."

The statement is true.'] WHERE case_id = 'CASE 6.4.018' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Investors and Published Statements". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Lenders of a retailer are users outside day-to-day management, so they mainly rely on the business''s published financial accounting statements."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Investors and Published Statements". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Lenders of a retailer normally receive formal accounting information no more often than once a year, when the financial accounting statements are published."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Investors and Published Statements". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Managers of a retailer work inside the business and can be given management accounting reports designed around their own questions."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Investors and Published Statements". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Managers of a retailer can be supplied with management accounting figures weekly or monthly, well before the annual financial accounting statements are finalised."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Investors and Published Statements". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Reports prepared for managers of a retailer can be laid out however suits the decision at hand, unlike the standardised format required of financial accounting statements."

The statement is true.'] WHERE case_id = 'CASE 6.4.019' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Short Depreciation Extract 20". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Only external users need accounting information; owners and managers do not."

The statement is false.', 'TRUE — Compare Asset A''s and Asset B''s straight-line annual charges.

$$
A = 22,500, \quad B = 4,000
$$

$$
\frac{22,500 - 4,000}{4,000} = 462.5\%
$$

Threshold: more than 17.2% higher. Actual premium 462.5%.

Reading the arithmetic against the claim: premium 462.5% versus more than 17.2% so the statement holds.

The statement is true.', 'TRUE — Financial accounting reports for external users; management accounting is internal.

A published extract for lenders or shareholders is financial accounting by purpose and audience.

Using the stem facts: "A published version of the extract above, showing the combined asset cost of €114,000 thousand, is an example of external financial reporting that a lender might study before extending credit."

Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The statement is true.', 'TRUE — Audits provide reasonable assurance, not absolute certainty.

The auditor''s opinion addresses the risk of material misstatement in the financial statements. It is not a guarantee that every figure is exact or that the business will prosper.

Applied to this stem: "An independent audit of the extract above, including the the combined asset cost of €114,000 thousand, aims to give reasonable assurance that the figures are free from material misstatement, not an absolute guarantee."

The statement is true.', 'FALSE — Single-year statements are routinely used, often with comparatives.

One year limits trends but does not make the extract useless to external users.

Using the stem facts: "Because the extract above (the combined asset cost of €114,000 thousand) covers only one financial year, external users such as shareholders could not rely on it at all."

Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The statement is false.'] WHERE case_id = 'CASE 6.4.020' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Managers Controlling Costs Internally". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Employees of a retailer work inside the business and can be given management accounting reports designed around their own questions."

The statement is true.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Managers Controlling Costs Internally". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Investors of a manufacturer have no interest in the likely return and risk before committing further capital when they look at accounting information."

The statement is false.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Managers Controlling Costs Internally". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Employees of a retailer can be supplied with management accounting figures weekly or monthly, well before the annual financial accounting statements are finalised."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Managers Controlling Costs Internally". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Reports prepared for employees of a retailer can be laid out however suits the decision at hand, unlike the standardised format required of financial accounting statements."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Managers Controlling Costs Internally". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Owners of a retailer look at accounting information mainly to judge the return earned on the capital they have invested."

The statement is true.'] WHERE case_id = 'CASE 6.4.021' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Asset Composition Chart 22". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Managerial accounting exists mainly to satisfy tax authorities rather than to support internal decisions."

The statement is false.', 'TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 175 + 83 + 66 = 324
$$

$$
CL = 141 + 52 = 193
$$

$$
\text{Current ratio} = \frac{324}{193} = 1.6788
$$

Claimed: exceeds 1.63. Actual 1.68.

Reading the arithmetic against the claim: actual current ratio 1.68 versus ''exceeds 1.63'' so the statement holds.

The statement is true.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 324 and current liabilities total 193:

$$
WC = CA - CL
$$

$$
CA = 324, \quad CL = 193
$$

$$
WC = 324 - 193 = 131
$$

The statement cites working capital of €131 thousand and that it is positive. Calculated WC is 131, which is positive.

Reading the arithmetic against the claim: WC = 131 is positive as claimed so the statement holds.

The statement is true.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 379 and total assets = 929. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{379}{929}
$$

$$
ER = 40.8\%
$$

Claimed: is below 39.8%. Actual 40.8%.

Reading the arithmetic against the claim: actual equity ratio 40.8% does not match ''is below 39.8%'' so the statement does not hold.

The statement is false.', 'TRUE — The debt ratio places debt against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: debt ratio = debt ÷ total assets.

From the extract, debt = 550 and total assets = 929. Plug the figures step by step:

$$
DR = \frac{\text{debt}}{\text{total assets}}
$$

$$
DR = \frac{550}{929}
$$

$$
DR = 59.2\%
$$

Claimed: exceeds 48.3%. Actual 59.2%.

Reading the arithmetic against the claim: actual debt ratio 59.2% matches ''exceeds 48.3%'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.4.022' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Short Balance Sheet Extract 23". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Only external users need accounting information; owners and managers do not."

The statement is false.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 359 and total assets = 525. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{359}{525}
$$

$$
ER = 68.4\%
$$

Claimed: is below 39.6%. Actual 68.4%.

Reading the arithmetic against the claim: actual equity ratio 68.4% does not match ''is below 39.6%'' so the statement does not hold.

The statement is false.', 'TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 121 + 0 + 55 = 176
$$

$$
CL = 70 + 0 = 70
$$

$$
\text{Current ratio} = \frac{176}{70} = 2.5143
$$

Claimed: exceeds 1.43. Actual 2.51.

Reading the arithmetic against the claim: actual current ratio 2.51 versus ''exceeds 1.43'' so the statement holds.

The statement is true.', 'TRUE — Inventory is held for sale or for consumption in the operating cycle.

On the balance sheet that places inventory among current assets. It is not an intangible (no physical stock for sale) and not a non-current operating asset (those are used in the business beyond one year rather than turned over as stock).

Applied to this stem: "Inventory of €121 thousand is correctly classified as a current asset."

The statement is true.', 'FALSE — Borrowed funds are liabilities; equity is the owners'' residual interest.

A bank loan creates an obligation to a lender and cannot be classified as equity.

Using the stem facts: "The long-term bank loan of €96 thousand is correctly classified within equity."

Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The statement is false.'] WHERE case_id = 'CASE 6.4.023' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Short Depreciation Extract 24". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Managerial accounting exists mainly to satisfy tax authorities rather than to support internal decisions."

The statement is false.', 'TRUE — Compare Asset A''s and Asset B''s straight-line annual charges.

$$
A = 16,400, \quad B = 7,200
$$

$$
\frac{16,400 - 7,200}{7,200} = 127.8\%
$$

Threshold: more than 38.4% higher. Actual premium 127.8%.

Reading the arithmetic against the claim: premium 127.8% versus more than 38.4% so the statement holds.

The statement is true.', 'FALSE — Single-year statements are routinely used, often with comparatives.

One year limits trends but does not make the extract useless to external users.

Using the stem facts: "Because the extract above (the combined asset cost of €120,000 thousand) covers only one financial year, external users such as shareholders could not rely on it at all."

Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The statement is false.', 'TRUE — Financial accounting reports for external users; management accounting is internal.

A published extract for lenders or shareholders is financial accounting by purpose and audience.

Using the stem facts: "A published version of the extract above, showing the combined asset cost of €120,000 thousand, is an example of external financial reporting that a lender might study before extending credit."

Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The statement is true.', 'FALSE — Management reports are not bound to the statutory published format.

Internal management accounts may use whatever layout, detail, and frequency managers need. Statutory formats govern published financial statements, not internal packs.

Applied to this stem: "Internal management reports covering the same period as the extract above (the combined asset cost of €120,000 thousand) must follow the identical statutory format shown here."

The statement is false.'] WHERE case_id = 'CASE 6.4.024' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Employees and Job Security". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Lenders of a retailer look at accounting information mainly to judge whether the business will be able to repay what it owes."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Employees and Job Security". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Tax authorities of a retailer look at accounting information mainly to judge how much tax is due on the business''s profit."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Employees and Job Security". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Investors of a retailer look at accounting information mainly to judge the likely return and risk before committing further capital."

The statement is true.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Employees and Job Security". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Managers of a manufacturer have no interest in controlling costs and choosing between courses of action when they look at accounting information."

The statement is false.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Employees and Job Security". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Managers of a retailer look at accounting information mainly to judge controlling costs and choosing between courses of action."

The statement is true.'] WHERE case_id = 'CASE 6.4.025' AND tier = 'full';
