-- Update expanded explanations for 6.3-part3 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Sources of Equity Growth Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "A ceramics manufacturer is regarded as financing its ceramics kilns and moulding equipment soundly when their value does not exceed equity plus long-term kiln financing."

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Sources of Equity Growth Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "Because the operating result already includes financing costs and income tax, it cannot be used to judge a business''s core trading performance separately from financing or tax."

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Sources of Equity Growth Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Tracking the balance between ceramics kilns and moulding equipment and finished ceramics stock on a ceramics manufacturer''s statements over several years shows whether the business is becoming more…"

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Sources of Equity Growth Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "An automotive parts supplier is regarded as financing its assembly-line robotics soundly when their value does not exceed equity plus a long-term robotics lease."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Sources of Equity Growth Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Tracking the balance between assembly-line robotics and spare automotive parts inventory on an automotive parts supplier''s statements over several years shows whether the business is becoming more …"

The statement is true.'] WHERE case_id = 'CASE 6.3.051' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Gross margin is gross profit divided by revenue; the claim compares the Year-2 margin with Year 1 in percentage points.

Name the identity in words: gross margin = gross profit ÷ revenue; Δ = GPM₂ − GPM₁.

$$
GPM_{1} = \frac{365}{889} = 41.1\%
$$

$$
GPM_{2} = \frac{433}{1,082} = 40.0\%
$$

$$
\Delta = -1.0\text{ percentage points}
$$

Threshold: more than 5 pp higher in Year 2. Actual Δ = -1.0 pp.

Reading the arithmetic against the claim: margin rose by -1.0 pp versus more than 5 pp so the statement does not hold.

The statement is false.', 'FALSE — Use the case figures for The operating result and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{The operating result}_{\text{Y1}} = 294, \quad
\text{The operating result}_{\text{Y2}} = 344
$$

$$
\frac{344 - 294}{294} = 17.0\%
$$

$$
17.0\% \le  54.6\%
$$

The actual growth is 17.0%, which is not more than the claimed 54.6%.

The statement is false.', 'FALSE — Use the case figures for Profit for the year and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Profit for the year}_{\text{Y1}} = 221, \quad
\text{Profit for the year}_{\text{Y2}} = 252
$$

$$
\frac{252 - 221}{221} = 14.0\%
$$

$$
14.0\% \le  14.6\%
$$

The actual growth is 14.0%, which is not more than the claimed 14.6%.

The statement is false.', 'TRUE — Use the case figures for Revenue and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Revenue}_{\text{Y1}} = 889, \quad
\text{Revenue}_{\text{Y2}} = 1,082
$$

$$
\frac{1,082 - 889}{889} = 21.7\%
$$

$$
21.7\% > 16.9\%
$$

The actual growth is 21.7%, which is more than the claimed 16.9%.

The statement is true.', 'FALSE — Compute each year''s effective tax rate, then the change in percentage points.

Name the identity in words: ETR = income taxes ÷ profit before tax; Δ = ETR₂ − ETR₁.

$$
ETR_{1} = 19.6\%
$$

$$
ETR_{2} = 20.5\%
$$

$$
\Delta = +0.9\text{ percentage points}
$$

Threshold: rose by more than 1.7 pp. Actual +0.9 pp.

Reading the arithmetic against the claim: ETR changed by +0.9 pp versus more than 1.7 pp so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.3.052' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Sources of Equity Growth for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "A commercial bakery chain is regarded as financing its ovens and proofing equipment soundly when their value does not exceed equity plus a long-term bakery expansion loan."

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Sources of Equity Growth for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "Tracking the operating result over several years cannot show how a business''s core trading is developing, since the figure already reflects changes in interest rates and tax policy."

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Sources of Equity Growth for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "Two businesses reporting an identical operating result must always end up with identical profit for the year, regardless of their finance costs or tax rates."

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Sources of Equity Growth for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Tracking the balance between ovens and proofing equipment and dough and ingredient stock on a commercial bakery chain''s statements over several years shows whether the business is becoming more or …"

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Sources of Equity Growth for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "A marine equipment supplier is regarded as financing its dockside cranes and lifting gear soundly when their value does not exceed equity plus a long-term dockyard loan."

The statement is true.'] WHERE case_id = 'CASE 6.3.053' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Sources of Equity Growth Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Tracking the balance between dockside cranes and lifting gear and spare marine parts inventory on a marine equipment supplier''s statements over several years shows whether the business is becoming …"

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Sources of Equity Growth Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "A joinery and furniture workshop is regarded as financing its joinery workshop machinery soundly when their value does not exceed equity plus a long-term workshop mortgage."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Sources of Equity Growth Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Tracking the balance between joinery workshop machinery and unsold furniture stock on a joinery and furniture workshop''s statements over several years shows whether the business is becoming more or…"

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Sources of Equity Growth Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "A plastics moulding company is regarded as financing its injection-moulding machinery soundly when their value does not exceed equity plus long-term moulding equipment finance."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Sources of Equity Growth Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "A dairy cooperative is regarded as financing its chilling and pasteurising plant soundly when their value does not exceed equity plus a long-term dairy plant loan."

The statement is true.'] WHERE case_id = 'CASE 6.3.054' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Use the case figures for Total equity and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total equity}_{\text{Y1}} = 452, \quad
\text{Total equity}_{\text{Y2}} = 489
$$

$$
\frac{489 - 452}{452} = 8.2\%
$$

$$
8.2\% \le  28\%
$$

The actual growth is 8.2%, which is not more than the claimed 28%.

The statement is false.', 'FALSE — Use the case figures for Trade payables and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Trade payables}_{\text{Y1}} = 166, \quad
\text{Trade payables}_{\text{Y2}} = 195
$$

$$
\frac{195 - 166}{166} = 17.5\%
$$

$$
17.5\% \le  21.9\%
$$

The actual growth is 17.5%, which is not more than the claimed 21.9%.

The statement is false.', 'FALSE — Use the case figures for Cash and cash equivalents and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Cash and cash equivalents}_{\text{Y1}} = 77, \quad
\text{Cash and cash equivalents}_{\text{Y2}} = 89
$$

$$
\frac{89 - 77}{77} = 15.6\%
$$

$$
-15.6\% \le  10.9\%
$$

The actual decline is -15.6%, which is not more than the claimed 10.9%.

The statement is false.', 'TRUE — Use the case figures for Total assets and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total assets}_{\text{Y1}} = 986, \quad
\text{Total assets}_{\text{Y2}} = 1,102
$$

$$
\frac{1,102 - 986}{986} = 11.8\%
$$

$$
11.8\% > 10.1\%
$$

The actual growth is 11.8%, which is more than the claimed 10.1%.

The statement is true.', 'FALSE — Compute each year''s equity ratio from the balance-sheet totals, then the change in percentage points.

$$
R_{Y1} = \frac{452}{986} = 45.8\%
$$

$$
R_{Y2} = \frac{489}{1,102} = 44.4\%
$$

$$
\Delta = -1.5\text{ percentage points}
$$

Required: improved by more than 8.4 pp. Actual change -1.5 pp.

The statement is false.'] WHERE case_id = 'CASE 6.3.055' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 172 + 112 + 33 = 317
$$

$$
CL = 120 + 52 = 172
$$

$$
\text{Current ratio} = \frac{317}{172} = 1.8430
$$

Claimed: is below 1.2. Actual 1.84.

Reading the arithmetic against the claim: actual current ratio 1.84 versus ''is below 1.2'' so the statement does not hold.

The statement is false.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 453 and total assets = 1,109. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{453}{1,109}
$$

$$
ER = 40.8\%
$$

Claimed: is below 24.8%. Actual 40.8%.

Reading the arithmetic against the claim: actual equity ratio 40.8% does not match ''is below 24.8%'' so the statement does not hold.

The statement is false.', 'TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 172 + 112 + 33 = 317
$$

$$
CL = 120 + 52 = 172
$$

$$
\text{Current ratio} = \frac{317}{172} = 1.8430
$$

Claimed: exceeds 1.15. Actual 1.84.

Reading the arithmetic against the claim: actual current ratio 1.84 versus ''exceeds 1.15'' so the statement holds.

The statement is true.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 317 and current liabilities total 172:

$$
WC = CA - CL
$$

$$
CA = 317, \quad CL = 172
$$

$$
WC = 317 - 172 = 145
$$

The statement cites working capital of €145 thousand and that it is positive. Calculated WC is 145, which is positive.

Reading the arithmetic against the claim: WC = 145 is positive as claimed so the statement holds.

The statement is true.', 'FALSE — The debt ratio places debt against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: debt ratio = debt ÷ total assets.

From the extract, debt = 656 and total assets = 1,109. Plug the figures step by step:

$$
DR = \frac{\text{debt}}{\text{total assets}}
$$

$$
DR = \frac{656}{1,109}
$$

$$
DR = 59.2\%
$$

Claimed: exceeds 62.1%. Actual 59.2%.

Reading the arithmetic against the claim: actual debt ratio 59.2% does not match ''exceeds 62.1%'' so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.3.056' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Sources of Equity Growth in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Tracking the balance between chilling and pasteurising plant and dairy products awaiting delivery on a dairy cooperative''s statements over several years shows whether the business is becoming more …"

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Sources of Equity Growth in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "A decline in profit for the year alongside a stable or rising operating result always means that core trading performance has deteriorated."

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Sources of Equity Growth in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "A mining equipment lessor is regarded as financing its heavy mining equipment held for hire soundly when their value does not exceed equity plus long-term mining equipment finance."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Sources of Equity Growth in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Tracking the balance between heavy mining equipment held for hire and replacement parts inventory on a mining equipment lessor''s statements over several years shows whether the business is becoming…"

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Sources of Equity Growth in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "A textile dyeing company is regarded as financing its dyeing vats and finishing lines soundly when their value does not exceed equity plus a long-term dyeing plant loan."

The statement is true.'] WHERE case_id = 'CASE 6.3.057' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Matching Long-Term Assets to Long-Term Finance in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Tracking the balance between dyeing vats and finishing lines and dyed fabric stock on a textile dyeing company''s statements over several years shows whether the business is becoming more or less ca…"

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Matching Long-Term Assets to Long-Term Finance in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "An expenditure and an expense refer to exactly the same amount recognised in exactly the same accounting period, with no distinction between them."

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Matching Long-Term Assets to Long-Term Finance in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "An appliance repair network is regarded as financing its diagnostic and repair equipment soundly when their value does not exceed equity plus a long-term equipment finance lease."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Matching Long-Term Assets to Long-Term Finance in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Tracking the balance between diagnostic and repair equipment and spare repair components on an appliance repair network''s statements over several years shows whether the business is becoming more o…"

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Matching Long-Term Assets to Long-Term Finance in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "A seed and fertiliser distributor is regarded as financing its seed processing plant soundly when their value does not exceed equity plus a long-term seed processing loan."

The statement is true.'] WHERE case_id = 'CASE 6.3.058' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Use the case figures for Revenue and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Revenue}_{\text{Y1}} = 839, \quad
\text{Revenue}_{\text{Y2}} = 1,011
$$

$$
\frac{1,011 - 839}{839} = 20.5\%
$$

$$
20.5\% > 8.4\%
$$

The actual growth is 20.5%, which is more than the claimed 8.4%.

The statement is true.', 'TRUE — Compare finance-cost growth with operating-result growth; the claim needs both a finance-cost rise above the threshold and outpacing of operating result.

Name the identity in words: growth = (Year 2 − Year 1) ÷ Year 1 for each line.

$$
\text{FC growth} = 35.0\%
$$

$$
\text{OR growth} = 18.7\%
$$

Finance costs did grow by more than 15.4%; they do outpace operating result.

Reading the arithmetic against the claim: FC growth 35.0% vs threshold 15.4% and OR growth 18.7% so the statement holds.

The statement is true.', 'TRUE — Interest coverage in Year 1 is operating result divided by finance costs.

Name the identity in words: interest coverage = operating result ÷ finance costs.

From the extract, operating result = 241 and finance costs = 20. Plug the figures step by step:

$$
Coverage = \frac{\text{operating result}}{\text{finance costs}}
$$

$$
Coverage = \frac{241}{20}
$$

$$
Coverage = 12.0500
$$

Threshold: more than 8.37. Actual 12.05.

Reading the arithmetic against the claim: coverage 12.05 exceeds 8.37 so the statement holds.

The statement is true.', 'TRUE — Operating margin in Year 2 is operating result divided by revenue.

Name the identity in words: operating margin = operating result ÷ revenue.

From the extract, operating result = 286 and revenue = 1,011. Plug the figures step by step:

$$
OM = \frac{\text{operating result}}{\text{revenue}}
$$

$$
OM = \frac{286}{1,011}
$$

$$
OM = 28.3\%
$$

Threshold: exceeds 18.7% in Year 2. Actual 28.3%.

Reading the arithmetic against the claim: operating margin 28.3% exceeds 18.7% so the statement holds.

The statement is true.', 'TRUE — Effective tax rate in Year 1 is income taxes divided by profit before tax.

Name the identity in words: effective tax rate = income taxes ÷ profit before tax.

From the extract, income taxes = 50 and profit before tax = 227. Plug the figures step by step:

$$
ETR = \frac{\text{income taxes}}{\text{profit before tax}}
$$

$$
ETR = \frac{50}{227}
$$

$$
ETR = 22.0\%
$$

Threshold: below 22.2% in Year 1. Actual 22.0%.

Reading the arithmetic against the claim: ETR 22.0% is below 22.2% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.3.059' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Matching Long-Term Assets to Long-Term Finance Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "Paying in advance for a full year of insurance cover is recognised entirely as an expense at the moment of payment, regardless of which period the cover relates to."

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Matching Long-Term Assets to Long-Term Finance Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "A single large expenditure must always be recognised entirely as an expense within the same accounting period in which it occurs."

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Matching Long-Term Assets to Long-Term Finance Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Tracking the balance between seed processing plant and seed and fertiliser stock on a seed and fertiliser distributor''s statements over several years shows whether the business is becoming more or …"

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Matching Long-Term Assets to Long-Term Finance Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "A scaffolding rental firm is regarded as financing its scaffolding held for long-term hire soundly when their value does not exceed equity plus a long-term scaffolding fleet loan."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Matching Long-Term Assets to Long-Term Finance Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Tracking the balance between scaffolding held for long-term hire and scaffolding materials awaiting short-term hire on a scaffolding rental firm''s statements over several years shows whether the bu…"

The statement is true.'] WHERE case_id = 'CASE 6.3.060' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Gross margin is gross profit divided by revenue; the claim compares the Year-2 margin with Year 1 in percentage points.

Name the identity in words: gross margin = gross profit ÷ revenue; Δ = GPM₂ − GPM₁.

$$
GPM_{1} = \frac{353}{950} = 37.2\%
$$

$$
GPM_{2} = \frac{427}{1,128} = 37.9\%
$$

$$
\Delta = 0.7\text{ percentage points}
$$

Threshold: more than 3.5 pp higher in Year 2. Actual Δ = 0.7 pp.

Reading the arithmetic against the claim: margin rose by 0.7 pp versus more than 3.5 pp so the statement does not hold.

The statement is false.', 'TRUE — Interest coverage in Year 1 is operating result divided by finance costs.

Name the identity in words: interest coverage = operating result ÷ finance costs.

From the extract, operating result = 273 and finance costs = 20. Plug the figures step by step:

$$
Coverage = \frac{\text{operating result}}{\text{finance costs}}
$$

$$
Coverage = \frac{273}{20}
$$

$$
Coverage = 13.6500
$$

Threshold: more than 8.22. Actual 13.65.

Reading the arithmetic against the claim: coverage 13.65 exceeds 8.22 so the statement holds.

The statement is true.', 'TRUE — Operating margin in Year 2 is operating result divided by revenue.

Name the identity in words: operating margin = operating result ÷ revenue.

From the extract, operating result = 321 and revenue = 1,128. Plug the figures step by step:

$$
OM = \frac{\text{operating result}}{\text{revenue}}
$$

$$
OM = \frac{321}{1,128}
$$

$$
OM = 28.5\%
$$

Threshold: exceeds 10.9% in Year 2. Actual 28.5%.

Reading the arithmetic against the claim: operating margin 28.5% exceeds 10.9% so the statement holds.

The statement is true.', 'TRUE — Effective tax rate in Year 1 is income taxes divided by profit before tax.

Name the identity in words: effective tax rate = income taxes ÷ profit before tax.

From the extract, income taxes = 60 and profit before tax = 259. Plug the figures step by step:

$$
ETR = \frac{\text{income taxes}}{\text{profit before tax}}
$$

$$
ETR = \frac{60}{259}
$$

$$
ETR = 23.2\%
$$

Threshold: below 27.2% in Year 1. Actual 23.2%.

Reading the arithmetic against the claim: ETR 23.2% is below 27.2% so the statement holds.

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Revenue and Operating Result Chart 61". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Profit for the year increased by exactly €32 thousand from Year 1 to Year 2."

The statement is true.'] WHERE case_id = 'CASE 6.3.061' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Matching Long-Term Assets to Long-Term Finance for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "An industrial cleaning company is regarded as financing its industrial cleaning machinery soundly when their value does not exceed equity plus a long-term cleaning equipment loan."

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: The distinction between expenditure and expense is irrelevant. The reason — a business''s cash outflow for a year is always identical to its reported expenses for that year. — does not support that label under the chapter definitions. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Matching Long-Term Assets to Long-Term Finance for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Tracking the balance between industrial cleaning machinery and cleaning supplies inventory on an industrial cleaning company''s statements over several years shows whether the business is becoming m…"

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Matching Long-Term Assets to Long-Term Finance for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "Buying an asset that will be used for several years results in its entire cost becoming an expense in the year of purchase."

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Matching Long-Term Assets to Long-Term Finance for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "Comparing how quickly revenue grows against how quickly cost of sales grows over successive years reveals nothing about how efficiently a business produces what it sells."

The statement is false.'] WHERE case_id = 'CASE 6.3.062' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Matching Long-Term Assets to Long-Term Finance Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "If cost of sales grows more slowly than revenue over a period, the resulting gross profit margin will narrow across that period."

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Matching Long-Term Assets to Long-Term Finance Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "A business whose cost of sales consistently outpaces its revenue growth will see its gross profit margin improve steadily over time."

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Matching Long-Term Assets to Long-Term Finance Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "Stable growth in both revenue and cost of sales at similar rates tends to make a business''s gross profit margin swing wildly from year to year."

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Matching Long-Term Assets to Long-Term Finance Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "Rising revenue figures alone always guarantee improving profitability, regardless of how quickly cost of sales is rising."

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: The wages of head office administrators are kept out of cost of sales. The reason given — their duties are not directly involved in producing the goods that are sold. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.'] WHERE case_id = 'CASE 6.3.063' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Use the case figures for Total assets and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total assets}_{\text{Y1}} = 1,076, \quad
\text{Total assets}_{\text{Y2}} = 1,146
$$

$$
\frac{1,146 - 1,076}{1,076} = 6.5\%
$$

$$
6.5\% \le  22.5\%
$$

The actual growth is 6.5%, which is not more than the claimed 22.5%.

The statement is false.', 'FALSE — Use the case figures for Inventory and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Inventory}_{\text{Y1}} = 83, \quad
\text{Inventory}_{\text{Y2}} = 88
$$

$$
\frac{88 - 83}{83} = 6.0\%
$$

$$
6.0\% \le  19\%
$$

The actual growth is 6.0%, which is not more than the claimed 19%.

The statement is false.', 'TRUE — Non-current liabilities are the long-term funding claims; here they are long-term bank loan plus bonds payable, compared with total equity.

Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\text{NCL} = 289 + 68 = 357
$$

$$
\text{Equity} = 650
$$

$$
\frac{357}{650} = 54.9\%
$$

Threshold: less than 76.5% in Year 2. Actual 54.9%.

Reading the arithmetic against the claim: Year 2 NCL/equity is 54.9%, which is consistent with ''less than 76.5%'' so the statement holds.

The statement is true.', 'FALSE — Use the case figures for Trade payables and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Trade payables}_{\text{Y1}} = 61, \quad
\text{Trade payables}_{\text{Y2}} = 69
$$

$$
\frac{69 - 61}{61} = 13.1\%
$$

$$
13.1\% \le  25.5\%
$$

The actual growth is 13.1%, which is not more than the claimed 25.5%.

The statement is false.', 'FALSE — Use the case figures for Cash and cash equivalents and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Cash and cash equivalents}_{\text{Y1}} = 41, \quad
\text{Cash and cash equivalents}_{\text{Y2}} = 50
$$

$$
\frac{50 - 41}{41} = 22.0\%
$$

$$
-22.0\% \le  18.4\%
$$

The actual decline is -22.0%, which is not more than the claimed 18.4%.

The statement is false.'] WHERE case_id = 'CASE 6.3.064' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Matching Long-Term Assets to Long-Term Finance in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Pay earned by despatch and loading staff is treated as a distribution cost rather than cost of sales, since their work happens after production of the goods is complete."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Amounts paid to account managers are excluded from cost of sales. The reason given — selling activity takes place only after the goods have already been produced. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Raw materials consumed directly in production are included within cost of sales. The reason given — they are incurred directly in producing the goods that a beverage bottling company has sold. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Matching Long-Term Assets to Long-Term Finance in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "Reading the balance sheet and income statement together adds nothing beyond what studying either statement on its own would already reveal."

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: The wages of payroll and accounts clerks are kept out of cost of sales. The reason given — their duties are not directly involved in producing the goods that are sold. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.'] WHERE case_id = 'CASE 6.3.065' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 212 + 128 + 81 = 421
$$

$$
CL = 142 + 82 = 224
$$

$$
\text{Current ratio} = \frac{421}{224} = 1.8795
$$

Claimed: exceeds 1.25. Actual 1.88.

Reading the arithmetic against the claim: actual current ratio 1.88 versus ''exceeds 1.25'' so the statement holds.

The statement is true.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 421 and current liabilities total 224:

$$
WC = CA - CL
$$

$$
CA = 421, \quad CL = 224
$$

$$
WC = 421 - 224 = 197
$$

The statement cites working capital of €197 thousand and that it is positive. Calculated WC is 197, which is positive.

Reading the arithmetic against the claim: WC = 197 is positive as claimed so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Inventory as a percentage of current assets.

Name the identity in words: Inventory share of current assets = Inventory ÷ current assets.

From the extract, Inventory = 212 and current assets = 421. Plug the figures step by step:

$$
Share = \frac{\text{Inventory}}{\text{current assets}}
$$

$$
Share = \frac{212}{421}
$$

$$
Share = 50.4\%
$$

Threshold: more than 34.1%. Actual 50.4%.

Reading the arithmetic against the claim: actual share 50.4% matches ''more than 34.1%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Trade receivables as a percentage of current assets.

Name the identity in words: Trade receivables share of current assets = Trade receivables ÷ current assets.

From the extract, Trade receivables = 128 and current assets = 421. Plug the figures step by step:

$$
Share = \frac{\text{Trade receivables}}{\text{current assets}}
$$

$$
Share = \frac{128}{421}
$$

$$
Share = 30.4\%
$$

Threshold: less than 37.1%. Actual 30.4%.

Reading the arithmetic against the claim: actual share 30.4% matches ''less than 37.1%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Cash and cash equivalents as a percentage of current assets.

Name the identity in words: Cash and cash equivalents share of current assets = Cash and cash equivalents ÷ current assets.

From the extract, Cash and cash equivalents = 81 and current assets = 421. Plug the figures step by step:

$$
Share = \frac{\text{Cash and cash equivalents}}{\text{current assets}}
$$

$$
Share = \frac{81}{421}
$$

$$
Share = 19.2\%
$$

Threshold: more than 15.4%. Actual 19.2%.

Reading the arithmetic against the claim: actual share 19.2% matches ''more than 15.4%'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.3.066' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Use the case figures for The operating result and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{The operating result}_{\text{Y1}} = 261, \quad
\text{The operating result}_{\text{Y2}} = 289
$$

$$
\frac{289 - 261}{261} = 10.7\%
$$

$$
10.7\% \le  33.2\%
$$

The actual growth is 10.7%, which is not more than the claimed 33.2%.

The statement is false.', 'TRUE — Use the case figures for Revenue and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Revenue}_{\text{Y1}} = 893, \quad
\text{Revenue}_{\text{Y2}} = 1,045
$$

$$
\frac{1,045 - 893}{893} = 17.0\%
$$

$$
17.0\% > 11.9\%
$$

The actual growth is 17.0%, which is more than the claimed 11.9%.

The statement is true.', 'TRUE — Compare finance-cost growth with operating-result growth; the claim needs both a finance-cost rise above the threshold and outpacing of operating result.

Name the identity in words: growth = (Year 2 − Year 1) ÷ Year 1 for each line.

$$
\text{FC growth} = 46.7\%
$$

$$
\text{OR growth} = 10.7\%
$$

Finance costs did grow by more than 39.9%; they do outpace operating result.

Reading the arithmetic against the claim: FC growth 46.7% vs threshold 39.9% and OR growth 10.7% so the statement holds.

The statement is true.', 'FALSE — Use the case figures for Profit for the year and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Profit for the year}_{\text{Y1}} = 199, \quad
\text{Profit for the year}_{\text{Y2}} = 220
$$

$$
\frac{220 - 199}{199} = 10.6\%
$$

$$
10.6\% \le  13.1\%
$$

The actual growth is 10.6%, which is not more than the claimed 13.1%.

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Revenue and Operating Result Chart 67". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "The operating result covers finance costs less than 12.21 times over in Year 2."

The statement is false.'] WHERE case_id = 'CASE 6.3.067' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Defining Cost of Sales in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Pay earned by outbound freight handlers is treated as a distribution cost rather than cost of sales, since their work happens after production of the goods is complete."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Amounts paid to field sales representatives are excluded from cost of sales. The reason given — selling activity takes place only after the goods have already been produced. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Direct factory labour on the production line are included within cost of sales. The reason given — they are incurred directly in producing the goods that a paper mill has sold. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: The wages of reception and clerical staff are kept out of cost of sales. The reason given — their duties are not directly involved in producing the goods that are sold. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Defining Cost of Sales in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "A strong profit for the year shown in the income statement guarantees that the balance sheet will also show a strong financing position."

The statement is false.'] WHERE case_id = 'CASE 6.3.068' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Defining Cost of Sales Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Pay earned by delivery drivers is treated as a distribution cost rather than cost of sales, since their work happens after production of the goods is complete."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Amounts paid to the retail sales team are excluded from cost of sales. The reason given — selling activity takes place only after the goods have already been produced. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Defining Cost of Sales Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "Changes in working capital shown on the balance sheet have no bearing on why cash movements might differ from the profit for the year reported in the income statement."

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Components purchased for direct assembly are included within cost of sales. The reason given — they are incurred directly in producing the goods that a ceramics manufacturer has sold. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Defining Cost of Sales Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "Judging a business''s overall financial health can be done reliably by looking at the income statement alone, without any reference to the balance sheet."

The statement is false.'] WHERE case_id = 'CASE 6.3.069' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Use the case figures for Total assets and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total assets}_{\text{Y1}} = 1,129, \quad
\text{Total assets}_{\text{Y2}} = 1,269
$$

$$
\frac{1,269 - 1,129}{1,129} = 12.4\%
$$

$$
12.4\% > 6.1\%
$$

The actual growth is 12.4%, which is more than the claimed 6.1%.

The statement is true.', 'TRUE — Non-current liabilities are the long-term funding claims; here they are long-term bank loan plus bonds payable, compared with total equity.

Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\text{NCL} = 384 + 47 = 431
$$

$$
\text{Equity} = 568
$$

$$
\frac{431}{568} = 75.9\%
$$

Threshold: more than 67.8% in Year 1. Actual 75.9%.

Reading the arithmetic against the claim: Year 1 NCL/equity is 75.9%, which is consistent with ''more than 67.8%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Non-current assets as a percentage of total assets in Year 2.

Name the identity in words: Non-current assets share of total assets in Year 2 = Non-current assets ÷ total assets in Year 2.

From the extract, Non-current assets = 812 and total assets in Year 2 = 1,269. Plug the figures step by step:

$$
Share = \frac{\text{Non-current assets}}{\text{total assets in Year 2}}
$$

$$
Share = \frac{812}{1,269}
$$

$$
Share = 64.0\%
$$

Threshold: more than 63.8%. Actual 64.0%.

Reading the arithmetic against the claim: actual share 64.0% matches ''more than 63.8%'' so the statement holds.

The statement is true.', 'TRUE — Long-term financing is equity plus non-current liabilities; the claim compares that pool with non-current assets.

Name the identity in words: surplus = (equity + non-current liabilities) ÷ non-current assets − 1.

$$
\text{Equity} + \text{NCL} = 568 + 431 = 999
$$

$$
\text{NCA} = 720
$$

$$
\frac{999}{720} - 1 = 38.7\%
$$

Threshold: more than 37.3%. Actual surplus 38.7%.

Reading the arithmetic against the claim: the surplus is 38.7%, which exceeds 37.3% so the statement holds.

The statement is true.', 'TRUE — Current liabilities are due within one year or the operating cycle.

Trade payables to suppliers are routinely short-term; the euro amount does not change that rule.

Using the stem facts: "Trade payables of €71 thousand in Year 2 are correctly classified as a current liability, since suppliers are normally expected to be paid within one year."

Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.'] WHERE case_id = 'CASE 6.3.070' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: The wages of human resources personnel are kept out of cost of sales. The reason given — their duties are not directly involved in producing the goods that are sold. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Defining Cost of Sales for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "A business cannot report rising profit for the year while its balance sheet simultaneously shows a deteriorating financing structure, since the two always move in the same direction."

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Defining Cost of Sales for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "A beverage bottling company is regarded as financing its bottling line machinery soundly only when they are covered mainly by short-term credit from bottle and packaging suppliers."

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Defining Cost of Sales for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "The balance between bottling line machinery and bottled stock awaiting dispatch on a beverage bottling company''s statements has no bearing on whether the business is becoming more or less capital-i…"

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Defining Cost of Sales for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Pay earned by warehouse dispatch personnel is treated as a distribution cost rather than cost of sales, since their work happens after production of the goods is complete."

The statement is true.'] WHERE case_id = 'CASE 6.3.071' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Non-current liabilities are the long-term funding claims; here they are long-term bank loan plus bonds payable, compared with total equity.

Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\text{NCL} = 305 + 89 = 394
$$

$$
\text{Equity} = 529
$$

$$
\frac{394}{529} = 74.5\%
$$

Threshold: more than 67.2% in Year 1. Actual 74.5%.

Reading the arithmetic against the claim: Year 1 NCL/equity is 74.5%, which is consistent with ''more than 67.2%'' so the statement holds.

The statement is true.', 'FALSE — Use the case figures for Total equity and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total equity}_{\text{Y1}} = 529, \quad
\text{Total equity}_{\text{Y2}} = 580
$$

$$
\frac{580 - 529}{529} = 9.6\%
$$

$$
9.6\% \le  20.9\%
$$

The actual growth is 9.6%, which is not more than the claimed 20.9%.

The statement is false.', 'FALSE — Use the case figures for Total assets and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total assets}_{\text{Y1}} = 1,177, \quad
\text{Total assets}_{\text{Y2}} = 1,296
$$

$$
\frac{1,296 - 1,177}{1,177} = 10.1\%
$$

$$
10.1\% \le  16.1\%
$$

The actual growth is 10.1%, which is not more than the claimed 16.1%.

The statement is false.', 'TRUE — Non-current liabilities are the long-term funding claims; here they are long-term bank loan plus bonds payable, compared with total equity.

Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\text{NCL} = 345 + 100 = 445
$$

$$
\text{Equity} = 580
$$

$$
\frac{445}{580} = 76.7\%
$$

Threshold: less than 119.3% in Year 2. Actual 76.7%.

Reading the arithmetic against the claim: Year 2 NCL/equity is 76.7%, which is consistent with ''less than 119.3%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Non-current assets as a percentage of total assets in Year 2.

Name the identity in words: Non-current assets share of total assets in Year 2 = Non-current assets ÷ total assets in Year 2.

From the extract, Non-current assets = 811 and total assets in Year 2 = 1,296. Plug the figures step by step:

$$
Share = \frac{\text{Non-current assets}}{\text{total assets in Year 2}}
$$

$$
Share = \frac{811}{1,296}
$$

$$
Share = 62.6\%
$$

Threshold: more than 56.5%. Actual 62.6%.

Reading the arithmetic against the claim: actual share 62.6% matches ''more than 56.5%'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.3.072' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Amounts paid to business development staff are excluded from cost of sales. The reason given — selling activity takes place only after the goods have already been produced. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Defining Cost of Sales Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "A paper mill is regarded as financing its papermaking machinery soundly only when they are covered mainly by short-term credit from pulp suppliers."

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Production supplies consumed making the units sold are included within cost of sales. The reason given — they are incurred directly in producing the goods that an automotive parts supplier has sold. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: The wages of general office administrators are kept out of cost of sales. The reason given — their duties are not directly involved in producing the goods that are sold. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Defining Cost of Sales Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Pay earned by courier and transport staff is treated as a distribution cost rather than cost of sales, since their work happens after production of the goods is complete."

The statement is true.'] WHERE case_id = 'CASE 6.3.073' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Amounts paid to sales commission earners are excluded from cost of sales. The reason given — selling activity takes place only after the goods have already been produced. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: The direct purchase cost of goods bought for resale are included within cost of sales. The reason given — they are incurred directly in producing the goods that a commercial bakery chain has sold. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: The wages of back-office support staff are kept out of cost of sales. The reason given — their duties are not directly involved in producing the goods that are sold. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Defining Cost of Sales in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Pay earned by distribution centre employees is treated as a distribution cost rather than cost of sales, since their work happens after production of the goods is complete."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Materials directly consumed manufacturing the goods sold are included within cost of sales. The reason given — they are incurred directly in producing the goods that a marine equipment supplier has sold. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.'] WHERE case_id = 'CASE 6.3.074' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 93 + 98 + 38 = 229
$$

$$
CL = 154 + 41 = 195
$$

$$
\text{Current ratio} = \frac{229}{195} = 1.1744
$$

Claimed: is below 0.88. Actual 1.17.

Reading the arithmetic against the claim: actual current ratio 1.17 versus ''is below 0.88'' so the statement does not hold.

The statement is false.', 'FALSE — The acid-test (quick) ratio is a stricter liquidity test: inventory is removed from current assets before dividing by current liabilities.

Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = 229, \quad \text{Inventory} = 93, \quad CL = 195
$$

$$
CA - \text{Inventory} = 229 - 93 = 136
$$

$$
\text{Acid-test} = \frac{136}{195} = 0.6974
$$

Threshold: more than 0.81. Actual 0.70.

Reading the arithmetic against the claim: acid-test 0.70 is not more than 0.81 so the statement does not hold.

The statement is false.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 326 and total assets = 840. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{326}{840}
$$

$$
ER = 38.8\%
$$

Claimed: is below 22.8%. Actual 38.8%.

Reading the arithmetic against the claim: actual equity ratio 38.8% does not match ''is below 22.8%'' so the statement does not hold.

The statement is false.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 229 and current liabilities total 195:

$$
WC = CA - CL
$$

$$
CA = 229, \quad CL = 195
$$

$$
WC = 229 - 195 = 34
$$

The statement cites working capital of €34 thousand and that it is positive. Calculated WC is 34, which is positive.

Reading the arithmetic against the claim: WC = 34 is positive as claimed so the statement holds.

The statement is true.', 'FALSE — The debt ratio places debt against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: debt ratio = debt ÷ total assets.

From the extract, debt = 514 and total assets = 840. Plug the figures step by step:

$$
DR = \frac{\text{debt}}{\text{total assets}}
$$

$$
DR = \frac{514}{840}
$$

$$
DR = 61.2\%
$$

Claimed: exceeds 75.3%. Actual 61.2%.

Reading the arithmetic against the claim: actual debt ratio 61.2% does not match ''exceeds 75.3%'' so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.3.075' AND tier = 'full';
