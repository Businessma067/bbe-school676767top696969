-- Update expanded explanations for 6.3-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Profit and Loss Over Two Years 26". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Current assets such as inventory, trade receivables and cash normally have higher liquidity and are not expected to be used longer than a year."

The statement is true.', 'TRUE — Compare finance-cost growth with operating-result growth; the claim needs both a finance-cost rise above the threshold and outpacing of operating result.

Name the identity in words: growth = (Year 2 − Year 1) ÷ Year 1 for each line.

$$
\text{FC growth} = 31.8\%
$$

$$
\text{OR growth} = 7.8\%
$$

Finance costs did grow by more than 25%; they do outpace operating result.

Reading the arithmetic against the claim: FC growth 31.8% vs threshold 25% and OR growth 7.8% so the statement holds.

The statement is true.', 'TRUE — Interest coverage in Year 1 is operating result divided by finance costs.

Name the identity in words: interest coverage = operating result ÷ finance costs.

From the extract, operating result = 205 and finance costs = 22. Plug the figures step by step:

$$
Coverage = \frac{\text{operating result}}{\text{finance costs}}
$$

$$
Coverage = \frac{205}{22}
$$

$$
Coverage = 9.3182
$$

Threshold: more than 9.28. Actual 9.32.

Reading the arithmetic against the claim: coverage 9.32 exceeds 9.28 so the statement holds.

The statement is true.', 'TRUE — Operating margin in Year 2 is operating result divided by revenue.

Name the identity in words: operating margin = operating result ÷ revenue.

From the extract, operating result = 221 and revenue = 927. Plug the figures step by step:

$$
OM = \frac{\text{operating result}}{\text{revenue}}
$$

$$
OM = \frac{221}{927}
$$

$$
OM = 23.8\%
$$

Threshold: exceeds 13.9% in Year 2. Actual 23.8%.

Reading the arithmetic against the claim: operating margin 23.8% exceeds 13.9% so the statement holds.

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Profit and Loss Over Two Years 26". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Profit for the year increased by exactly €3 thousand from Year 1 to Year 2."

The statement is true.'] WHERE case_id = 'CASE 6.3.026' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Use the case figures for Total equity and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total equity}_{\text{Y1}} = 542, \quad
\text{Total equity}_{\text{Y2}} = 532
$$

$$
\frac{532 - 542}{542} = -1.8\%
$$

$$
-1.8\% \le  21.7\%
$$

The actual growth is -1.8%, which is not more than the claimed 21.7%.

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Comparative Balance Sheet Analysis 27". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Current assets such as inventory, trade receivables and cash normally have higher liquidity and are not expected to be used longer than a year."

The statement is true.', 'TRUE — Non-current liabilities are the long-term funding claims; here they are long-term bank loan plus bonds payable, compared with total equity.

Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\text{NCL} = 388 + 53 = 441
$$

$$
\text{Equity} = 532
$$

$$
\frac{441}{532} = 82.9\%
$$

Threshold: less than 91.7% in Year 2. Actual 82.9%.

Reading the arithmetic against the claim: Year 2 NCL/equity is 82.9%, which is consistent with ''less than 91.7%'' so the statement holds.

The statement is true.', 'TRUE — This is the Year 2 current ratio read as coverage of current liabilities.

Name the identity in words: coverage = current assets ÷ current liabilities.

$$
\frac{336}{171} = 1.9649
$$

Threshold: less than 2.02. Actual 1.96.

Reading the arithmetic against the claim: actual coverage 1.96 is less than 2.02 so the statement holds.

The statement is true.', 'FALSE — Use the case figures for Total assets and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total assets}_{\text{Y1}} = 1,102, \quad
\text{Total assets}_{\text{Y2}} = 1,144
$$

$$
\frac{1,144 - 1,102}{1,102} = 3.8\%
$$

$$
3.8\% \le  12.2\%
$$

The actual growth is 3.8%, which is not more than the claimed 12.2%.

The statement is false.'] WHERE case_id = 'CASE 6.3.027' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 280 + 61 + 31 = 372
$$

$$
CL = 161 + 65 = 226
$$

$$
\text{Current ratio} = \frac{372}{226} = 1.6460
$$

Claimed: exceeds 1.82. Actual 1.65.

Reading the arithmetic against the claim: actual current ratio 1.65 versus ''exceeds 1.82'' so the statement does not hold.

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Asset Composition Chart 28". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Current assets such as inventory, trade receivables and cash normally have higher liquidity and are not expected to be used longer than a year."

The statement is true.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 280 + 61 + 31 = 372
$$

$$
CL = 161 + 65 = 226
$$

$$
\text{Current ratio} = \frac{372}{226} = 1.6460
$$

Claimed: is below 1.26. Actual 1.65.

Reading the arithmetic against the claim: actual current ratio 1.65 versus ''is below 1.26'' so the statement does not hold.

The statement is false.', 'FALSE — The acid-test (quick) ratio is a stricter liquidity test: inventory is removed from current assets before dividing by current liabilities.

Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = 372, \quad \text{Inventory} = 280, \quad CL = 226
$$

$$
CA - \text{Inventory} = 372 - 280 = 92
$$

$$
\text{Acid-test} = \frac{92}{226} = 0.4071
$$

Threshold: more than 1.3. Actual 0.41.

Reading the arithmetic against the claim: acid-test 0.41 is not more than 1.3 so the statement does not hold.

The statement is false.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 688 and total assets = 1,166. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{688}{1,166}
$$

$$
ER = 59.0\%
$$

Claimed: is below 35.4%. Actual 59.0%.

Reading the arithmetic against the claim: actual equity ratio 59.0% does not match ''is below 35.4%'' so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.3.028' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Benchmarking Against Industry Peers for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "The operating result, also described as earnings before interest and taxes, measures profit from core operations before the effects of financing costs and income tax are included."

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: When a business''s equity rises mainly. The reason — retained earnings have grown while share capital stays the same, that growth must have come from a new issue of shares to owners. — does not support that label under the chapter definitions. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Benchmarking Against Industry Peers for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "Tracking share capital and retained earnings separately over successive years provides no way of telling whether a business''s equity growth has come from owner contributions or from accumulated pro…"

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Benchmarking Against Industry Peers for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "A business that grows its equity mostly through retained earnings is relying just as heavily on outside investors as one whose equity growth comes mainly from new share issues."

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Benchmarking Against Industry Peers for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "The pattern of a business''s equity growth over several years reveals nothing about its underlying financing strategy, regardless of whether it is driven by retained profit or fresh capital."

The statement is false.'] WHERE case_id = 'CASE 6.3.029' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Benchmarking Against Industry Peers Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Excluding financing costs and income tax from the operating result allows a business''s core trading performance to be judged separately from how it happens to be financed or taxed."

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Benchmarking Against Industry Peers Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "If share capital has remained unchanged for several years while equity has still grown, that growth cannot be explained by retained earnings."

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Benchmarking Against Industry Peers Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "A business is considered to be financing its non-current assets soundly only when their total value is covered mainly by current liabilities."

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Benchmarking Against Industry Peers Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "Relying on short-term borrowing that must soon be renewed, rather than long-term sources of finance, is regarded as the prudent way to fund long-lived assets."

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Benchmarking Against Industry Peers Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "When non-current assets exceed the sum of equity and non-current liabilities, this always indicates a conservative and low-risk financing position."

The statement is false.'] WHERE case_id = 'CASE 6.3.030' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Compare finance-cost growth with operating-result growth; the claim needs both a finance-cost rise above the threshold and outpacing of operating result.

Name the identity in words: growth = (Year 2 − Year 1) ÷ Year 1 for each line.

$$
\text{FC growth} = 26.7\%
$$

$$
\text{OR growth} = 8.6\%
$$

Finance costs did grow by more than 21.9%; they do outpace operating result.

Reading the arithmetic against the claim: FC growth 26.7% vs threshold 21.9% and OR growth 8.6% so the statement holds.

The statement is true.', 'TRUE — Interest coverage in Year 1 is operating result divided by finance costs.

Name the identity in words: interest coverage = operating result ÷ finance costs.

From the extract, operating result = 245 and finance costs = 15. Plug the figures step by step:

$$
Coverage = \frac{\text{operating result}}{\text{finance costs}}
$$

$$
Coverage = \frac{245}{15}
$$

$$
Coverage = 16.3333
$$

Threshold: more than 8.44. Actual 16.33.

Reading the arithmetic against the claim: coverage 16.33 exceeds 8.44 so the statement holds.

The statement is true.', 'FALSE — Gross margin is gross profit divided by revenue; the claim compares the Year-2 margin with Year 1 in percentage points.

Name the identity in words: gross margin = gross profit ÷ revenue; Δ = GPM₂ − GPM₁.

$$
GPM_{1} = \frac{326}{847} = 38.5\%
$$

$$
GPM_{2} = \frac{359}{950} = 37.8\%
$$

$$
\Delta = -0.7\text{ percentage points}
$$

Threshold: more than 3.8 pp higher in Year 2. Actual Δ = -0.7 pp.

Reading the arithmetic against the claim: margin rose by -0.7 pp versus more than 3.8 pp so the statement does not hold.

The statement is false.', 'TRUE — Operating margin in Year 2 is operating result divided by revenue.

Name the identity in words: operating margin = operating result ÷ revenue.

From the extract, operating result = 266 and revenue = 950. Plug the figures step by step:

$$
OM = \frac{\text{operating result}}{\text{revenue}}
$$

$$
OM = \frac{266}{950}
$$

$$
OM = 28.0\%
$$

Threshold: exceeds 14% in Year 2. Actual 28.0%.

Reading the arithmetic against the claim: operating margin 28.0% exceeds 14% so the statement holds.

The statement is true.', 'TRUE — Effective tax rate in Year 1 is income taxes divided by profit before tax.

Name the identity in words: effective tax rate = income taxes ÷ profit before tax.

From the extract, income taxes = 46 and profit before tax = 233. Plug the figures step by step:

$$
ETR = \frac{\text{income taxes}}{\text{profit before tax}}
$$

$$
ETR = \frac{46}{233}
$$

$$
ETR = 19.7\%
$$

Threshold: below 21.3% in Year 1. Actual 19.7%.

Reading the arithmetic against the claim: ETR 19.7% is below 21.3% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.3.031' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Use the case figures for Revenue and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Revenue}_{\text{Y1}} = 840, \quad
\text{Revenue}_{\text{Y2}} = 945
$$

$$
\frac{945 - 840}{840} = 12.5\%
$$

$$
12.5\% > 10.1\%
$$

The actual growth is 12.5%, which is more than the claimed 10.1%.

The statement is true.', 'TRUE — Compare finance-cost growth with operating-result growth; the claim needs both a finance-cost rise above the threshold and outpacing of operating result.

Name the identity in words: growth = (Year 2 − Year 1) ÷ Year 1 for each line.

$$
\text{FC growth} = 26.3\%
$$

$$
\text{OR growth} = 3.8\%
$$

Finance costs did grow by more than 10%; they do outpace operating result.

Reading the arithmetic against the claim: FC growth 26.3% vs threshold 10% and OR growth 3.8% so the statement holds.

The statement is true.', 'FALSE — Gross margin is gross profit divided by revenue; the claim compares the Year-2 margin with Year 1 in percentage points.

Name the identity in words: gross margin = gross profit ÷ revenue; Δ = GPM₂ − GPM₁.

$$
GPM_{1} = \frac{289}{840} = 34.4\%
$$

$$
GPM_{2} = \frac{319}{945} = 33.8\%
$$

$$
\Delta = -0.6\text{ percentage points}
$$

Threshold: more than 2.2 pp higher in Year 2. Actual Δ = -0.6 pp.

Reading the arithmetic against the claim: margin rose by -0.6 pp versus more than 2.2 pp so the statement does not hold.

The statement is false.', 'FALSE — Use the case figures for The operating result and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{The operating result}_{\text{Y1}} = 210, \quad
\text{The operating result}_{\text{Y2}} = 218
$$

$$
\frac{218 - 210}{210} = 3.8\%
$$

$$
3.8\% \le  28.1\%
$$

The actual growth is 3.8%, which is not more than the claimed 28.1%.

The statement is false.', 'FALSE — Use the case figures for Profit for the year and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Profit for the year}_{\text{Y1}} = 158, \quad
\text{Profit for the year}_{\text{Y2}} = 155
$$

$$
\frac{155 - 158}{158} = -1.9\%
$$

$$
-1.9\% \le  22.6\%
$$

The actual growth is -1.9%, which is not more than the claimed 22.6%.

The statement is false.'] WHERE case_id = 'CASE 6.3.032' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Non-current liabilities are the long-term funding claims; here they are long-term bank loan plus bonds payable, compared with total equity.

Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\text{NCL} = 329 + 40 = 369
$$

$$
\text{Equity} = 513
$$

$$
\frac{369}{513} = 71.9\%
$$

Threshold: more than 52.9% in Year 1. Actual 71.9%.

Reading the arithmetic against the claim: Year 1 NCL/equity is 71.9%, which is consistent with ''more than 52.9%'' so the statement holds.

The statement is true.', 'FALSE — Use the case figures for Total equity and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total equity}_{\text{Y1}} = 513, \quad
\text{Total equity}_{\text{Y2}} = 571
$$

$$
\frac{571 - 513}{513} = 11.3\%
$$

$$
11.3\% \le  15.8\%
$$

The actual growth is 11.3%, which is not more than the claimed 15.8%.

The statement is false.', 'FALSE — Use the case figures for Total assets and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total assets}_{\text{Y1}} = 1,020, \quad
\text{Total assets}_{\text{Y2}} = 1,143
$$

$$
\frac{1,143 - 1,020}{1,020} = 12.1\%
$$

$$
12.1\% \le  21\%
$$

The actual growth is 12.1%, which is not more than the claimed 21%.

The statement is false.', 'FALSE — Use the case figures for Inventory and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Inventory}_{\text{Y1}} = 186, \quad
\text{Inventory}_{\text{Y2}} = 216
$$

$$
\frac{216 - 186}{186} = 16.1\%
$$

$$
16.1\% \le  29\%
$$

The actual growth is 16.1%, which is not more than the claimed 29%.

The statement is false.', 'FALSE — Use the case figures for Trade payables and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Trade payables}_{\text{Y1}} = 82, \quad
\text{Trade payables}_{\text{Y2}} = 90
$$

$$
\frac{90 - 82}{82} = 9.8\%
$$

$$
9.8\% \le  24.9\%
$$

The actual growth is 9.8%, which is not more than the claimed 24.9%.

The statement is false.'] WHERE case_id = 'CASE 6.3.033' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 109 + 71 + 35 = 215
$$

$$
CL = 165 + 71 = 236
$$

$$
\text{Current ratio} = \frac{215}{236} = 0.9110
$$

Claimed: is below 0.99. Actual 0.91.

Reading the arithmetic against the claim: actual current ratio 0.91 versus ''is below 0.99'' so the statement holds.

The statement is true.', 'TRUE — The debt ratio places debt against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: debt ratio = debt ÷ total assets.

From the extract, debt = 719 and total assets = 1,003. Plug the figures step by step:

$$
DR = \frac{\text{debt}}{\text{total assets}}
$$

$$
DR = \frac{719}{1,003}
$$

$$
DR = 71.7\%
$$

Claimed: exceeds 67.1%. Actual 71.7%.

Reading the arithmetic against the claim: actual debt ratio 71.7% matches ''exceeds 67.1%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Inventory as a percentage of current assets.

Name the identity in words: Inventory share of current assets = Inventory ÷ current assets.

From the extract, Inventory = 109 and current assets = 215. Plug the figures step by step:

$$
Share = \frac{\text{Inventory}}{\text{current assets}}
$$

$$
Share = \frac{109}{215}
$$

$$
Share = 50.7\%
$$

Threshold: more than 35.6%. Actual 50.7%.

Reading the arithmetic against the claim: actual share 50.7% matches ''more than 35.6%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Trade receivables as a percentage of current assets.

Name the identity in words: Trade receivables share of current assets = Trade receivables ÷ current assets.

From the extract, Trade receivables = 71 and current assets = 215. Plug the figures step by step:

$$
Share = \frac{\text{Trade receivables}}{\text{current assets}}
$$

$$
Share = \frac{71}{215}
$$

$$
Share = 33.0\%
$$

Threshold: less than 35.6%. Actual 33.0%.

Reading the arithmetic against the claim: actual share 33.0% matches ''less than 35.6%'' so the statement holds.

The statement is true.', 'TRUE — Inventory is held for sale or for consumption in the operating cycle.

On the balance sheet that places inventory among current assets. It is not an intangible (no physical stock for sale) and not a non-current operating asset (those are used in the business beyond one year rather than turned over as stock).

Applied to this stem: "Inventory of €109 thousand is correctly classified as a current asset rather than a non-current intangible asset."

The statement is true.'] WHERE case_id = 'CASE 6.3.034' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — ROE on this extract is operating result divided by total equity.

Name the identity in words: ROE = operating result ÷ total equity.

From the extract, operating result = 201 and total equity = 626. Plug the figures step by step:

$$
ROE = \frac{\text{operating result}}{\text{total equity}}
$$

$$
ROE = \frac{201}{626}
$$

$$
ROE = 32.1\%
$$

Threshold: exceeds 41.4%. Actual 32.1%.

Reading the arithmetic against the claim: ROE 32.1% does not exceed 41.4% so the statement does not hold.

The statement is false.', 'FALSE — ROCE relates operating result to capital employed: equity plus non-current liabilities.

Name the identity in words: ROCE = operating result ÷ (equity + non-current liabilities).

$$
\text{Capital employed} = 626 + 419 + 55 = 1,100
$$

$$
ROCE = \frac{201}{1,100} = 18.3\%
$$

Threshold: exceeds 25.3%. Actual 18.3%.

Reading the arithmetic against the claim: ROCE 18.3% does not exceed 25.3% so the statement does not hold.

The statement is false.', 'TRUE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 626 and total assets = 1,253. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{626}{1,253}
$$

$$
ER = 50.0\%
$$

Claimed: exceeds 47%. Actual 50.0%.

Reading the arithmetic against the claim: actual equity ratio 50.0% matches ''exceeds 47%'' so the statement holds.

The statement is true.', 'FALSE — Operating-cash conversion here is cash flow from operating activities as a percentage of operating result.

Name the identity in words: conversion = operating cash flow ÷ operating result.

From the extract, operating cash flow = 199 and operating result = 201. Plug the figures step by step:

$$
Conv = \frac{\text{operating cash flow}}{\text{operating result}}
$$

$$
Conv = \frac{199}{201}
$$

$$
Conv = 99.0\%
$$

Threshold: less than 87%. Actual 99.0%.

Reading the arithmetic against the claim: conversion 99.0% is not less than 87% so the statement does not hold.

The statement is false.', 'FALSE — This is a composition claim: express Inventory as a percentage of total assets.

Name the identity in words: Inventory share of total assets = Inventory ÷ total assets.

From the extract, Inventory = 273 and total assets = 1,253. Plug the figures step by step:

$$
Share = \frac{\text{Inventory}}{\text{total assets}}
$$

$$
Share = \frac{273}{1,253}
$$

$$
Share = 21.8\%
$$

Threshold: more than 27.6%. Actual 21.8%.

Reading the arithmetic against the claim: actual share 21.8% does not match ''more than 27.6%'' so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.3.035' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Non-current liabilities are the long-term funding claims; here they are long-term bank loan plus bonds payable, compared with total equity.

Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\text{NCL} = 375 + 91 = 466
$$

$$
\text{Equity} = 552
$$

$$
\frac{466}{552} = 84.4\%
$$

Threshold: less than 101.2% in Year 2. Actual 84.4%.

Reading the arithmetic against the claim: Year 2 NCL/equity is 84.4%, which is consistent with ''less than 101.2%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Non-current assets as a percentage of total assets in Year 2.

Name the identity in words: Non-current assets share of total assets in Year 2 = Non-current assets ÷ total assets in Year 2.

From the extract, Non-current assets = 838 and total assets in Year 2 = 1,362. Plug the figures step by step:

$$
Share = \frac{\text{Non-current assets}}{\text{total assets in Year 2}}
$$

$$
Share = \frac{838}{1,362}
$$

$$
Share = 61.5\%
$$

Threshold: more than 55.9%. Actual 61.5%.

Reading the arithmetic against the claim: actual share 61.5% matches ''more than 55.9%'' so the statement holds.

The statement is true.', 'TRUE — This is the Year 2 current ratio read as coverage of current liabilities.

Name the identity in words: coverage = current assets ÷ current liabilities.

$$
\frac{524}{344} = 1.5233
$$

Threshold: less than 1.64. Actual 1.52.

Reading the arithmetic against the claim: actual coverage 1.52 is less than 1.64 so the statement holds.

The statement is true.', 'FALSE — Use the case figures for Total equity and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total equity}_{\text{Y1}} = 517, \quad
\text{Total equity}_{\text{Y2}} = 552
$$

$$
\frac{552 - 517}{517} = 6.8\%
$$

$$
6.8\% \le  16.6\%
$$

The actual growth is 6.8%, which is not more than the claimed 16.6%.

The statement is false.', 'TRUE — Long-term financing is equity plus non-current liabilities; the claim compares that pool with non-current assets.

Name the identity in words: surplus = (equity + non-current liabilities) ÷ non-current assets − 1.

$$
\text{Equity} + \text{NCL} = 517 + 435 = 952
$$

$$
\text{NCA} = 785
$$

$$
\frac{952}{785} - 1 = 21.3\%
$$

Threshold: more than 20.8%. Actual surplus 21.3%.

Reading the arithmetic against the claim: the surplus is 21.3%, which exceeds 20.8% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.3.036' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Use the case figures for Total equity and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total equity}_{\text{Y1}} = 896, \quad
\text{Total equity}_{\text{Y2}} = 960
$$

$$
\frac{960 - 896}{896} = 7.1\%
$$

$$
7.1\% \le  16.5\%
$$

The actual growth is 7.1%, which is not more than the claimed 16.5%.

The statement is false.', 'TRUE — Non-current liabilities are the long-term funding claims; here they are long-term bank loan plus bonds payable, compared with total equity.

Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\text{NCL} = 230 + 48 = 278
$$

$$
\text{Equity} = 960
$$

$$
\frac{278}{960} = 29.0\%
$$

Threshold: less than 105.9% in Year 2. Actual 29.0%.

Reading the arithmetic against the claim: Year 2 NCL/equity is 29.0%, which is consistent with ''less than 105.9%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Non-current assets as a percentage of total assets in Year 2.

Name the identity in words: Non-current assets share of total assets in Year 2 = Non-current assets ÷ total assets in Year 2.

From the extract, Non-current assets = 962 and total assets in Year 2 = 1,363. Plug the figures step by step:

$$
Share = \frac{\text{Non-current assets}}{\text{total assets in Year 2}}
$$

$$
Share = \frac{962}{1,363}
$$

$$
Share = 70.6\%
$$

Threshold: more than 60.3%. Actual 70.6%.

Reading the arithmetic against the claim: actual share 70.6% matches ''more than 60.3%'' so the statement holds.

The statement is true.', 'TRUE — Current liabilities are due within one year or the operating cycle.

Trade payables to suppliers are routinely short-term; the euro amount does not change that rule.

Using the stem facts: "Trade payables of €76 thousand in Year 2 are correctly classified as a current liability, since suppliers are normally expected to be paid within one year."

Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'FALSE — Use the case figures for Total assets and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total assets}_{\text{Y1}} = 1,249, \quad
\text{Total assets}_{\text{Y2}} = 1,363
$$

$$
\frac{1,363 - 1,249}{1,249} = 9.1\%
$$

$$
9.1\% \le  22.8\%
$$

The actual growth is 9.1%, which is not more than the claimed 22.8%.

The statement is false.'] WHERE case_id = 'CASE 6.3.037' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Benchmarking Against Industry Peers in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Tracking the operating result over several years shows how a business''s core trading is developing independently of changes in interest rates or tax policy."

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Benchmarking Against Industry Peers in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "Matching the expected life of an asset with the maturity of the finance used to fund it has no bearing on whether a business is considered soundly financed."

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Benchmarking Against Industry Peers in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Two businesses reporting an identical operating result can still end up with different profit for the year if their finance costs or tax rates differ."

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Benchmarking Against Industry Peers in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "Financing long-lived production assets through short-term credit that must be repaid within a year removes any risk of needing to refinance."

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Benchmarking Against Industry Peers in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "A decline in profit for the year alongside a stable or rising operating result suggests the cause lies in financing costs or taxation rather than in core trading."

The statement is true.'] WHERE case_id = 'CASE 6.3.038' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 215 + 174 + 52 = 441
$$

$$
CL = 118 + 82 = 200
$$

$$
\text{Current ratio} = \frac{441}{200} = 2.2050
$$

Claimed: exceeds 1.08. Actual 2.21.

Reading the arithmetic against the claim: actual current ratio 2.21 versus ''exceeds 1.08'' so the statement holds.

The statement is true.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 441 and current liabilities total 200:

$$
WC = CA - CL
$$

$$
CA = 441, \quad CL = 200
$$

$$
WC = 441 - 200 = 241
$$

The statement cites working capital of €241 thousand and that it is positive. Calculated WC is 241, which is positive.

Reading the arithmetic against the claim: WC = 241 is positive as claimed so the statement holds.

The statement is true.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 215 + 174 + 52 = 441
$$

$$
CL = 118 + 82 = 200
$$

$$
\text{Current ratio} = \frac{441}{200} = 2.2050
$$

Claimed: is below 1.01. Actual 2.21.

Reading the arithmetic against the claim: actual current ratio 2.21 versus ''is below 1.01'' so the statement does not hold.

The statement is false.', 'TRUE — The debt ratio places debt against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: debt ratio = debt ÷ total assets.

From the extract, debt = 712 and total assets = 1,269. Plug the figures step by step:

$$
DR = \frac{\text{debt}}{\text{total assets}}
$$

$$
DR = \frac{712}{1,269}
$$

$$
DR = 56.1\%
$$

Claimed: exceeds 55.9%. Actual 56.1%.

Reading the arithmetic against the claim: actual debt ratio 56.1% matches ''exceeds 55.9%'' so the statement holds.

The statement is true.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 557 and total assets = 1,269. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{557}{1,269}
$$

$$
ER = 43.9\%
$$

Claimed: is below 20.5%. Actual 43.9%.

Reading the arithmetic against the claim: actual equity ratio 43.9% does not match ''is below 20.5%'' so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.3.039' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Use the case figures for Revenue and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Revenue}_{\text{Y1}} = 785, \quad
\text{Revenue}_{\text{Y2}} = 919
$$

$$
\frac{919 - 785}{785} = 17.1\%
$$

$$
17.1\% > 12.5\%
$$

The actual growth is 17.1%, which is more than the claimed 12.5%.

The statement is true.', 'FALSE — Gross margin is gross profit divided by revenue; the claim compares the Year-2 margin with Year 1 in percentage points.

Name the identity in words: gross margin = gross profit ÷ revenue; Δ = GPM₂ − GPM₁.

$$
GPM_{1} = \frac{290}{785} = 36.9\%
$$

$$
GPM_{2} = \frac{333}{919} = 36.2\%
$$

$$
\Delta = -0.7\text{ percentage points}
$$

Threshold: more than 1.7 pp higher in Year 2. Actual Δ = -0.7 pp.

Reading the arithmetic against the claim: margin rose by -0.7 pp versus more than 1.7 pp so the statement does not hold.

The statement is false.', 'TRUE — Compare finance-cost growth with operating-result growth; the claim needs both a finance-cost rise above the threshold and outpacing of operating result.

Name the identity in words: growth = (Year 2 − Year 1) ÷ Year 1 for each line.

$$
\text{FC growth} = 50.0\%
$$

$$
\text{OR growth} = 13.0\%
$$

Finance costs did grow by more than 19.5%; they do outpace operating result.

Reading the arithmetic against the claim: FC growth 50.0% vs threshold 19.5% and OR growth 13.0% so the statement holds.

The statement is true.', 'TRUE — Interest coverage in Year 1 is operating result divided by finance costs.

Name the identity in words: interest coverage = operating result ÷ finance costs.

From the extract, operating result = 192 and finance costs = 14. Plug the figures step by step:

$$
Coverage = \frac{\text{operating result}}{\text{finance costs}}
$$

$$
Coverage = \frac{192}{14}
$$

$$
Coverage = 13.7143
$$

Threshold: more than 4.62. Actual 13.71.

Reading the arithmetic against the claim: coverage 13.71 exceeds 4.62 so the statement holds.

The statement is true.', 'TRUE — Operating margin in Year 2 is operating result divided by revenue.

Name the identity in words: operating margin = operating result ÷ revenue.

From the extract, operating result = 217 and revenue = 919. Plug the figures step by step:

$$
OM = \frac{\text{operating result}}{\text{revenue}}
$$

$$
OM = \frac{217}{919}
$$

$$
OM = 23.6\%
$$

Threshold: exceeds 10.4% in Year 2. Actual 23.6%.

Reading the arithmetic against the claim: operating margin 23.6% exceeds 10.4% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.3.040' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "The Current and Non-Current Asset Balance in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "An expenditure is an outflow of cash or resources, while an expense is the portion of that outflow recognised in the income statement as belonging to the current period."

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "The Current and Non-Current Asset Balance in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "Cost of sales includes every cost a business incurs during the period, regardless of whether the cost relates directly to the goods sold."

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "The Current and Non-Current Asset Balance in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "Any cost that benefits the business in some way, even indirectly, belongs within cost of sales."

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Materials physically consumed in manufacturing the units sold are excluded from cost of sales. The reason — they are considered an overhead. — does not support that label under the chapter definitions. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "The Current and Non-Current Asset Balance in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Paying in advance for a full year of insurance cover is an expenditure at the time of payment, but it becomes an expense only as each period of cover passes."

The statement is true.'] WHERE case_id = 'CASE 6.3.041' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "The Current and Non-Current Asset Balance Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "A single large expenditure can result in expense being recognised gradually across several future accounting periods rather than all at once."

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "The Current and Non-Current Asset Balance Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "Because cost of sales includes every departmental cost, functions such as administration and distribution are absorbed into it rather than reported separately."

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Direct labour spent physically producing the goods sold is excluded from cost of sales. The reason — wages are always treated as an administrative cost. — does not support that label under the chapter definitions. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: The distinction between expenditure and expense matters. The reason given — it explains why a business''s cash outflow for a year can differ substantially from its reported expenses for that year. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "The Current and Non-Current Asset Balance Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "Gross profit is arrived at by deducting all operating expenses, including distribution and administrative costs, from revenue."

The statement is false.'] WHERE case_id = 'CASE 6.3.042' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "The Current and Non-Current Asset Balance for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Buying an asset that will be used for several years is an expenditure immediately, but only part of its cost becomes an expense in the year of purchase."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "The Current and Non-Current Asset Balance for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Comparing how quickly revenue grows against how quickly cost of sales grows over successive years shows whether a business is becoming more or less efficient at producing what it sells."

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "The Current and Non-Current Asset Balance for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "The margin represented by gross profit reflects a business''s overall profitability after every overhead cost, including administration, has already been deducted."

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "The Current and Non-Current Asset Balance for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "If cost of sales grows more slowly than revenue over a period, the resulting gross profit margin will widen across that period."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "The Current and Non-Current Asset Balance for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "A business whose cost of sales consistently outpaces its revenue growth will see its gross profit margin come under sustained pressure."

The statement is true.'] WHERE case_id = 'CASE 6.3.043' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Use the case figures for Revenue and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Revenue}_{\text{Y1}} = 770, \quad
\text{Revenue}_{\text{Y2}} = 904
$$

$$
\frac{904 - 770}{770} = 17.4\%
$$

$$
17.4\% > 12.4\%
$$

The actual growth is 17.4%, which is more than the claimed 12.4%.

The statement is true.', 'TRUE — Compare finance-cost growth with operating-result growth; the claim needs both a finance-cost rise above the threshold and outpacing of operating result.

Name the identity in words: growth = (Year 2 − Year 1) ÷ Year 1 for each line.

$$
\text{FC growth} = 44.4\%
$$

$$
\text{OR growth} = 10.0\%
$$

Finance costs did grow by more than 37.8%; they do outpace operating result.

Reading the arithmetic against the claim: FC growth 44.4% vs threshold 37.8% and OR growth 10.0% so the statement holds.

The statement is true.', 'FALSE — Gross margin is gross profit divided by revenue; the claim compares the Year-2 margin with Year 1 in percentage points.

Name the identity in words: gross margin = gross profit ÷ revenue; Δ = GPM₂ − GPM₁.

$$
GPM_{1} = \frac{322}{770} = 41.8\%
$$

$$
GPM_{2} = \frac{374}{904} = 41.4\%
$$

$$
\Delta = -0.4\text{ percentage points}
$$

Threshold: more than 4.4 pp higher in Year 2. Actual Δ = -0.4 pp.

Reading the arithmetic against the claim: margin rose by -0.4 pp versus more than 4.4 pp so the statement does not hold.

The statement is false.', 'FALSE — Use the case figures for The operating result and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{The operating result}_{\text{Y1}} = 240, \quad
\text{The operating result}_{\text{Y2}} = 264
$$

$$
\frac{264 - 240}{240} = 10.0\%
$$

$$
10.0\% \le  59.9\%
$$

The actual growth is 10.0%, which is not more than the claimed 59.9%.

The statement is false.', 'FALSE — Use the case figures for Profit for the year and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Profit for the year}_{\text{Y1}} = 182, \quad
\text{Profit for the year}_{\text{Y2}} = 194
$$

$$
\frac{194 - 182}{182} = 6.6\%
$$

$$
6.6\% \le  29.3\%
$$

The actual growth is 6.6%, which is not more than the claimed 29.3%.

The statement is false.'] WHERE case_id = 'CASE 6.3.044' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Use the case figures for Total equity and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total equity}_{\text{Y1}} = 474, \quad
\text{Total equity}_{\text{Y2}} = 524
$$

$$
\frac{524 - 474}{474} = 10.5\%
$$

$$
10.5\% \le  14.5\%
$$

The actual growth is 10.5%, which is not more than the claimed 14.5%.

The statement is false.', 'TRUE — Use the case figures for Trade payables and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Trade payables}_{\text{Y1}} = 184, \quad
\text{Trade payables}_{\text{Y2}} = 214
$$

$$
\frac{214 - 184}{184} = 16.3\%
$$

$$
16.3\% > 8.4\%
$$

The actual growth is 16.3%, which is more than the claimed 8.4%.

The statement is true.', 'TRUE — Non-current liabilities are the long-term funding claims; here they are long-term bank loan plus bonds payable, compared with total equity.

Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\text{NCL} = 217 + 94 = 311
$$

$$
\text{Equity} = 524
$$

$$
\frac{311}{524} = 59.4\%
$$

Threshold: less than 75.7% in Year 2. Actual 59.4%.

Reading the arithmetic against the claim: Year 2 NCL/equity is 59.4%, which is consistent with ''less than 75.7%'' so the statement holds.

The statement is true.', 'FALSE — Use the case figures for Total assets and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total assets}_{\text{Y1}} = 1,013, \quad
\text{Total assets}_{\text{Y2}} = 1,129
$$

$$
\frac{1,129 - 1,013}{1,013} = 11.5\%
$$

$$
11.5\% \le  14.9\%
$$

The actual growth is 11.5%, which is not more than the claimed 14.9%.

The statement is false.', 'FALSE — Use the case figures for Inventory and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Inventory}_{\text{Y1}} = 231, \quad
\text{Inventory}_{\text{Y2}} = 247
$$

$$
\frac{247 - 231}{231} = 6.9\%
$$

$$
6.9\% \le  20.7\%
$$

The actual growth is 6.9%, which is not more than the claimed 20.7%.

The statement is false.'] WHERE case_id = 'CASE 6.3.045' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "The Current and Non-Current Asset Balance Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Stable growth in both revenue and cost of sales at similar rates tends to keep a business''s gross profit margin relatively steady from year to year."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "The Current and Non-Current Asset Balance Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Rising revenue figures alone do not guarantee improving profitability if cost of sales is rising at an even faster pace."

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "The Current and Non-Current Asset Balance Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "Distribution costs and administrative expenses are deducted directly from revenue at the same stage as cost of sales, before gross profit is calculated."

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "The Current and Non-Current Asset Balance Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "Two businesses that report identical gross profit will always end up with identical operating results, regardless of their distribution and administrative costs."

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "The Current and Non-Current Asset Balance Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Reading the balance sheet and income statement together gives a fuller picture of a business''s position and performance than studying either statement on its own."

The statement is true.'] WHERE case_id = 'CASE 6.3.046' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 259 + 69 + 107 = 435
$$

$$
CL = 214 + 87 = 301
$$

$$
\text{Current ratio} = \frac{435}{301} = 1.4452
$$

Claimed: exceeds 1.84. Actual 1.45.

Reading the arithmetic against the claim: actual current ratio 1.45 versus ''exceeds 1.84'' so the statement does not hold.

The statement is false.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 259 + 69 + 107 = 435
$$

$$
CL = 214 + 87 = 301
$$

$$
\text{Current ratio} = \frac{435}{301} = 1.4452
$$

Claimed: is below 0.68. Actual 1.45.

Reading the arithmetic against the claim: actual current ratio 1.45 versus ''is below 0.68'' so the statement does not hold.

The statement is false.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 435 and current liabilities total 301:

$$
WC = CA - CL
$$

$$
CA = 435, \quad CL = 301
$$

$$
WC = 435 - 301 = 134
$$

The statement cites working capital of €134 thousand and that it is positive. Calculated WC is 134, which is positive.

Reading the arithmetic against the claim: WC = 134 is positive as claimed so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Inventory as a percentage of current assets.

Name the identity in words: Inventory share of current assets = Inventory ÷ current assets.

From the extract, Inventory = 259 and current assets = 435. Plug the figures step by step:

$$
Share = \frac{\text{Inventory}}{\text{current assets}}
$$

$$
Share = \frac{259}{435}
$$

$$
Share = 59.5\%
$$

Threshold: more than 55.2%. Actual 59.5%.

Reading the arithmetic against the claim: actual share 59.5% matches ''more than 55.2%'' so the statement holds.

The statement is true.', 'FALSE — The acid-test (quick) ratio is a stricter liquidity test: inventory is removed from current assets before dividing by current liabilities.

Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = 435, \quad \text{Inventory} = 259, \quad CL = 301
$$

$$
CA - \text{Inventory} = 435 - 259 = 176
$$

$$
\text{Acid-test} = \frac{176}{301} = 0.5847
$$

Threshold: more than 0.97. Actual 0.58.

Reading the arithmetic against the claim: acid-test 0.58 is not more than 0.97 so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.3.047' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "The Current and Non-Current Asset Balance in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "A widening gap between revenue and cost of sales, expressed as a proportion of revenue, indicates that gross profit margin is deteriorating."

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "The Current and Non-Current Asset Balance in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "A strong profit for the year shown in the income statement can be undermined by a weak financing position revealed only by the balance sheet."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "The Current and Non-Current Asset Balance in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Changes in working capital shown on the balance sheet can help explain why cash movements differ from the profit for the year reported in the income statement."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "The Current and Non-Current Asset Balance in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Judging a business''s overall financial health requires weighing income statement performance against balance sheet strength rather than looking at either alone."

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "The Current and Non-Current Asset Balance in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "The operating result, also described as earnings before interest and taxes, is calculated only after financing costs and income tax have already been deducted."

The statement is false.'] WHERE case_id = 'CASE 6.3.048' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Sources of Equity Growth in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "A business could report rising profit for the year while its balance sheet simultaneously shows a deteriorating financing structure, so both statements need to be considered together."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Sources of Equity Growth in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "A beverage bottling company is regarded as financing its bottling line machinery soundly when their value does not exceed equity plus a long-term bottling equipment loan."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Sources of Equity Growth in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Tracking the balance between bottling line machinery and bottled stock awaiting dispatch on a beverage bottling company''s statements over several years shows whether the business is becoming more o…"

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Sources of Equity Growth in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "A paper mill is regarded as financing its papermaking machinery soundly when their value does not exceed equity plus a long-term papermill mortgage."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Sources of Equity Growth in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Tracking the balance between papermaking machinery and paper roll inventory on a paper mill''s statements over several years shows whether the business is becoming more or less capital-intensive."

The statement is true.'] WHERE case_id = 'CASE 6.3.049' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Use the case figures for The operating result and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{The operating result}_{\text{Y1}} = 179, \quad
\text{The operating result}_{\text{Y2}} = 216
$$

$$
\frac{216 - 179}{179} = 20.7\%
$$

$$
20.7\% \le  32.8\%
$$

The actual growth is 20.7%, which is not more than the claimed 32.8%.

The statement is false.', 'TRUE — Use the case figures for Revenue and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Revenue}_{\text{Y1}} = 730, \quad
\text{Revenue}_{\text{Y2}} = 873
$$

$$
\frac{873 - 730}{730} = 19.6\%
$$

$$
19.6\% > 17.6\%
$$

The actual growth is 19.6%, which is more than the claimed 17.6%.

The statement is true.', 'TRUE — Compare finance-cost growth with operating-result growth; the claim needs both a finance-cost rise above the threshold and outpacing of operating result.

Name the identity in words: growth = (Year 2 − Year 1) ÷ Year 1 for each line.

$$
\text{FC growth} = 42.9\%
$$

$$
\text{OR growth} = 20.7\%
$$

Finance costs did grow by more than 25.2%; they do outpace operating result.

Reading the arithmetic against the claim: FC growth 42.9% vs threshold 25.2% and OR growth 20.7% so the statement holds.

The statement is true.', 'TRUE — Interest coverage in Year 1 is operating result divided by finance costs.

Name the identity in words: interest coverage = operating result ÷ finance costs.

From the extract, operating result = 179 and finance costs = 14. Plug the figures step by step:

$$
Coverage = \frac{\text{operating result}}{\text{finance costs}}
$$

$$
Coverage = \frac{179}{14}
$$

$$
Coverage = 12.7857
$$

Threshold: more than 6.23. Actual 12.79.

Reading the arithmetic against the claim: coverage 12.79 exceeds 6.23 so the statement holds.

The statement is true.', 'FALSE — Use the case figures for Profit for the year and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Profit for the year}_{\text{Y1}} = 133, \quad
\text{Profit for the year}_{\text{Y2}} = 151
$$

$$
\frac{151 - 133}{133} = 13.5\%
$$

$$
13.5\% \le  16.1\%
$$

The actual growth is 13.5%, which is not more than the claimed 16.1%.

The statement is false.'] WHERE case_id = 'CASE 6.3.050' AND tier = 'full';
