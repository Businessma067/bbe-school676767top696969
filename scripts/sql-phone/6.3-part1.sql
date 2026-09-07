-- Update expanded explanations for 6.3-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Reading Financial Statements With Caution in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "A business''s balance sheet and income statement for a single year should be read cautiously, since one year''s figures alone can create a misleading impression of overall performance."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Reading Financial Statements With Caution in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Because a balance sheet and income statement summarise a whole year of trading into a limited set of totals, important detail can be lost and should be sought elsewhere before conclusions are drawn."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Reading Financial Statements With Caution in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "An improvement in profit for the year need not reflect stronger underlying trading, since it could instead result from a one-off event that will not repeat."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Reading Financial Statements With Caution in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Reading the explanatory notes that accompany a balance sheet and income statement can clarify movements that the main statements alone leave unexplained."

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Reading Financial Statements With Caution in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "A business''s balance sheet and income statement for a single year can always be trusted on their own, since one year''s figures alone give a complete impression of overall performance."

The statement is false.'] WHERE case_id = 'CASE 6.3.001' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Reading Financial Statements With Caution Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "A cautious reader treats any single figure drawn from the financial statements as a starting point for further inquiry rather than as a final conclusion in itself."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Reading Financial Statements With Caution Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Placing several years of a business''s balance sheets and income statements side by side reveals directional trends that cannot be seen from any single year."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Reading Financial Statements With Caution Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Following revenue, cost of sales and profit for the year across several reporting periods helps show the direction in which a business''s performance is heading."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Reading Financial Statements With Caution Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Comparing successive balance sheets shows whether a business''s asset base and its sources of finance are expanding, contracting or holding steady over time."

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Reading Financial Statements With Caution Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "Because a balance sheet and income statement summarise a whole year of trading into a limited set of totals, no detail is ever lost and nothing further needs to be sought."

The statement is false.'] WHERE case_id = 'CASE 6.3.002' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Buying software with cash always increases total assets. The reason — a new asset is added without reducing any other asset. — does not support that label under the chapter definitions. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is false.', 'FALSE — ROE on this extract is operating result divided by total equity.

Name the identity in words: ROE = operating result ÷ total equity.

From the extract, operating result = 192 and total equity = 736. Plug the figures step by step:

$$
ROE = \frac{\text{operating result}}{\text{total equity}}
$$

$$
ROE = \frac{192}{736}
$$

$$
ROE = 26.1\%
$$

Threshold: exceeds 35.1%. Actual 26.1%.

Reading the arithmetic against the claim: ROE 26.1% does not exceed 35.1% so the statement does not hold.

The statement is false.', 'FALSE — Operating-cash conversion here is cash flow from operating activities as a percentage of operating result.

Name the identity in words: conversion = operating cash flow ÷ operating result.

From the extract, operating cash flow = 176 and operating result = 192. Plug the figures step by step:

$$
Conv = \frac{\text{operating cash flow}}{\text{operating result}}
$$

$$
Conv = \frac{176}{192}
$$

$$
Conv = 91.7\%
$$

Threshold: less than 78.6%. Actual 91.7%.

Reading the arithmetic against the claim: conversion 91.7% is not less than 78.6% so the statement does not hold.

The statement is false.', 'FALSE — This is a composition claim: express Inventory as a percentage of total assets.

Name the identity in words: Inventory share of total assets = Inventory ÷ total assets.

From the extract, Inventory = 223 and total assets = 1,235. Plug the figures step by step:

$$
Share = \frac{\text{Inventory}}{\text{total assets}}
$$

$$
Share = \frac{223}{1,235}
$$

$$
Share = 18.1\%
$$

Threshold: more than 25.7%. Actual 18.1%.

Reading the arithmetic against the claim: actual share 18.1% does not match ''more than 25.7%'' so the statement does not hold.

The statement is false.', 'TRUE — ROCE relates operating result to capital employed: equity plus non-current liabilities.

Name the identity in words: ROCE = operating result ÷ (equity + non-current liabilities).

$$
\text{Capital employed} = 736 + 227 + 79 = 1,042
$$

$$
ROCE = \frac{192}{1,042} = 18.4\%
$$

Threshold: exceeds 15.5%. Actual 18.4%.

Reading the arithmetic against the claim: ROCE 18.4% exceeds 15.5% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.3.003' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Reading Financial Statements With Caution for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Looking at several consecutive years of results makes it easier to tell whether an unusual figure was a temporary blip or the start of a lasting change."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Reading Financial Statements With Caution for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "A trend that persists across three or more reporting periods carries more weight than a single period''s outcome when judging a business''s direction of travel."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Reading Financial Statements With Caution for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Judging whether a business''s results are strong or weak is more reliable when its figures are set alongside those of comparable businesses in the same industry."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Reading Financial Statements With Caution for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "A profit margin that appears strong when viewed in isolation may turn out to be unremarkable once measured against the margins earned by similar businesses."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Reading Financial Statements With Caution for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Sector-wide benchmarks help determine whether an individual business''s asset structure or profitability is ordinary for its industry or genuinely stands out."

The statement is true.'] WHERE case_id = 'CASE 6.3.004' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Gross margin is gross profit divided by revenue; the claim compares the Year-2 margin with Year 1 in percentage points.

Name the identity in words: gross margin = gross profit ÷ revenue; Δ = GPM₂ − GPM₁.

$$
GPM_{1} = \frac{318}{794} = 40.1\%
$$

$$
GPM_{2} = \frac{388}{968} = 40.1\%
$$

$$
\Delta = 0.0\text{ percentage points}
$$

Threshold: more than 4.6 pp higher in Year 2. Actual Δ = 0.0 pp.

Reading the arithmetic against the claim: margin rose by 0.0 pp versus more than 4.6 pp so the statement does not hold.

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Revenue and Operating Result Chart 5". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Purchase of a plant, machinery or other long-term asset for cash is classified as cash flow from investing activities."

The statement is true.', 'FALSE — Use the case figures for The operating result and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{The operating result}_{\text{Y1}} = 244, \quad
\text{The operating result}_{\text{Y2}} = 293
$$

$$
\frac{293 - 244}{244} = 20.1\%
$$

$$
20.1\% \le  39.7\%
$$

The actual growth is 20.1%, which is not more than the claimed 39.7%.

The statement is false.', 'FALSE — Compare finance-cost growth with operating-result growth; the claim needs both a finance-cost rise above the threshold and outpacing of operating result.

Name the identity in words: growth = (Year 2 − Year 1) ÷ Year 1 for each line.

$$
\text{FC growth} = 9.5\%
$$

$$
\text{OR growth} = 20.1\%
$$

Finance costs did not grow by more than 43.6%; they do not outpace operating result.

Reading the arithmetic against the claim: FC growth 9.5% vs threshold 43.6% and OR growth 20.1% so the statement does not hold.

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Revenue and Operating Result Chart 5". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "The operating result covers finance costs less than 12.48 times over in Year 2."

The statement is false.'] WHERE case_id = 'CASE 6.3.005' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Reading Financial Statements With Caution Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Comparing a business''s statements with those of its direct competitors can reveal whether a change in results reflects conditions across the whole industry or is specific to that one business."

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Reading Financial Statements With Caution Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "An improvement in profit for the year always reflects stronger underlying trading, since one-off events never affect the reported profit figure."

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Reading Financial Statements With Caution Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "Reading the explanatory notes that accompany a balance sheet and income statement never adds anything beyond what the main statements alone already show."

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Reading Financial Statements With Caution Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Without a suitable point of comparison, a reader has no reliable way of judging whether a given profit margin counts as good or poor performance."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Reading Financial Statements With Caution Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "The relative weight of non-current assets against current assets on a business''s balance sheet gives an indication of how capital-intensive its operations are."

The statement is true.'] WHERE case_id = 'CASE 6.3.006' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Reading Financial Statements With Caution in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "A business holding a larger share of its resources in current assets typically has more of its wealth available for conversion into cash within the coming year."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Reading Financial Statements With Caution in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Studying how the balance between current and non-current assets shifts over time helps explain how a business is choosing to deploy its resources."

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Reading Financial Statements With Caution in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "A cautious reader treats any single figure drawn from the financial statements as a final conclusion in itself, with no need for further inquiry."

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Reading Financial Statements With Caution in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "An increasing share of non-current assets over successive years can point to a business committing more heavily to long-term productive capacity."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Reading Financial Statements With Caution in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Businesses in capital-intensive industries tend to carry a heavier weighting of non-current assets relative to current assets than businesses that trade mainly in quickly turned-over stock."

The statement is true.'] WHERE case_id = 'CASE 6.3.007' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Two-Year Balance Sheet Review 8". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Equity usually does not have to be repaid on a fixed schedule, helps the business stay relatively independent from creditors, and cushions losses."

The statement is true.', 'TRUE — Use the case figures for Total assets and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total assets}_{\text{Y1}} = 1,185, \quad
\text{Total assets}_{\text{Y2}} = 1,312
$$

$$
\frac{1,312 - 1,185}{1,185} = 10.7\%
$$

$$
10.7\% > 10.6\%
$$

The actual growth is 10.7%, which is more than the claimed 10.6%.

The statement is true.', 'TRUE — Non-current liabilities are the long-term funding claims; here they are long-term bank loan plus bonds payable, compared with total equity.

Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\text{NCL} = 253 + 95 = 348
$$

$$
\text{Equity} = 654
$$

$$
\frac{348}{654} = 53.2\%
$$

Threshold: less than 80.2% in Year 2. Actual 53.2%.

Reading the arithmetic against the claim: Year 2 NCL/equity is 53.2%, which is consistent with ''less than 80.2%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Non-current assets as a percentage of total assets in Year 2.

Name the identity in words: Non-current assets share of total assets in Year 2 = Non-current assets ÷ total assets in Year 2.

From the extract, Non-current assets = 901 and total assets in Year 2 = 1,312. Plug the figures step by step:

$$
Share = \frac{\text{Non-current assets}}{\text{total assets in Year 2}}
$$

$$
Share = \frac{901}{1,312}
$$

$$
Share = 68.7\%
$$

Threshold: more than 61.8%. Actual 68.7%.

Reading the arithmetic against the claim: actual share 68.7% matches ''more than 61.8%'' so the statement holds.

The statement is true.', 'TRUE — This is the Year 2 current ratio read as coverage of current liabilities.

Name the identity in words: coverage = current assets ÷ current liabilities.

$$
\frac{411}{310} = 1.3258
$$

Threshold: less than 2.01. Actual 1.33.

Reading the arithmetic against the claim: actual coverage 1.33 is less than 2.01 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.3.008' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 265 + 71 + 93 = 429
$$

$$
CL = 225 + 38 = 263
$$

$$
\text{Current ratio} = \frac{429}{263} = 1.6312
$$

Claimed: is below 1.22. Actual 1.63.

Reading the arithmetic against the claim: actual current ratio 1.63 versus ''is below 1.22'' so the statement does not hold.

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Liquidity From the Balance Sheet 9". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "The balance sheet identity requires that total assets always equal the sum of total liabilities and total equity, which is why any increase in assets must be matched by an increase in either liabil…"

The statement is true.', 'TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 265 + 71 + 93 = 429
$$

$$
CL = 225 + 38 = 263
$$

$$
\text{Current ratio} = \frac{429}{263} = 1.6312
$$

Claimed: exceeds 1.57. Actual 1.63.

Reading the arithmetic against the claim: actual current ratio 1.63 versus ''exceeds 1.57'' so the statement holds.

The statement is true.', 'FALSE — The acid-test (quick) ratio is a stricter liquidity test: inventory is removed from current assets before dividing by current liabilities.

Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = 429, \quad \text{Inventory} = 265, \quad CL = 263
$$

$$
CA - \text{Inventory} = 429 - 265 = 164
$$

$$
\text{Acid-test} = \frac{164}{263} = 0.6236
$$

Threshold: more than 0.71. Actual 0.62.

Reading the arithmetic against the claim: acid-test 0.62 is not more than 0.71 so the statement does not hold.

The statement is false.', 'TRUE — This is a composition claim: express Inventory as a percentage of current assets.

Name the identity in words: Inventory share of current assets = Inventory ÷ current assets.

From the extract, Inventory = 265 and current assets = 429. Plug the figures step by step:

$$
Share = \frac{\text{Inventory}}{\text{current assets}}
$$

$$
Share = \frac{265}{429}
$$

$$
Share = 61.8\%
$$

Threshold: more than 52.1%. Actual 61.8%.

Reading the arithmetic against the claim: actual share 61.8% matches ''more than 52.1%'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.3.009' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Comparing Results Across Several Years in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "Placing several years of a business''s balance sheets and income statements side by side reveals nothing beyond what a single year''s figures already show."

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Comparing Results Across Several Years in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "Following revenue, cost of sales and profit for the year across several reporting periods provides no indication of the direction in which a business''s performance is heading."

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: When a business''s equity rises mainly. The reason given — retained earnings have grown while share capital stays the same, that growth has been funded internally out of past profit. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Comparing Results Across Several Years in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Tracking share capital and retained earnings separately over successive years shows whether a business''s equity growth has come from owner contributions or from accumulated profit."

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Comparing Results Across Several Years in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "Comparing successive balance sheets provides no way of telling whether a business''s asset base or sources of finance are expanding, contracting or holding steady."

The statement is false.'] WHERE case_id = 'CASE 6.3.010' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — ROCE relates operating result to capital employed: equity plus non-current liabilities.

Name the identity in words: ROCE = operating result ÷ (equity + non-current liabilities).

$$
\text{Capital employed} = 543 + 417 + 44 = 1,004
$$

$$
ROCE = \frac{227}{1,004} = 22.6\%
$$

Threshold: exceeds 25.8%. Actual 22.6%.

Reading the arithmetic against the claim: ROCE 22.6% does not exceed 25.8% so the statement does not hold.

The statement is false.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 543 and total assets = 1,149. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{543}{1,149}
$$

$$
ER = 47.3\%
$$

Claimed: exceeds 47.3%. Actual 47.3%.

Reading the arithmetic against the claim: actual equity ratio 47.3% does not match ''exceeds 47.3%'' so the statement does not hold.

The statement is false.', 'FALSE — Operating-cash conversion here is cash flow from operating activities as a percentage of operating result.

Name the identity in words: conversion = operating cash flow ÷ operating result.

From the extract, operating cash flow = 232 and operating result = 227. Plug the figures step by step:

$$
Conv = \frac{\text{operating cash flow}}{\text{operating result}}
$$

$$
Conv = \frac{232}{227}
$$

$$
Conv = 102.2\%
$$

Threshold: less than 82.1%. Actual 102.2%.

Reading the arithmetic against the claim: conversion 102.2% is not less than 82.1% so the statement does not hold.

The statement is false.', 'TRUE — Non-current assets are held for use beyond one accounting period.

Useful life beyond one year plus operating intent (not ordinary resale) define the category.

Using the stem facts: "Non-current assets normally have a useful life of more than one year and are intended to be used in the business for longer than one year."

Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'TRUE — ROE on this extract is operating result divided by total equity.

Name the identity in words: ROE = operating result ÷ total equity.

From the extract, operating result = 227 and total equity = 543. Plug the figures step by step:

$$
ROE = \frac{\text{operating result}}{\text{total equity}}
$$

$$
ROE = \frac{227}{543}
$$

$$
ROE = 41.8\%
$$

Threshold: exceeds 24.6%. Actual 41.8%.

Reading the arithmetic against the claim: ROE 41.8% exceeds 24.6% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.3.011' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Gross margin is gross profit divided by revenue; the claim compares the Year-2 margin with Year 1 in percentage points.

Name the identity in words: gross margin = gross profit ÷ revenue; Δ = GPM₂ − GPM₁.

$$
GPM_{1} = \frac{284}{755} = 37.6\%
$$

$$
GPM_{2} = \frac{324}{883} = 36.7\%
$$

$$
\Delta = -0.9\text{ percentage points}
$$

Threshold: more than 3.2 pp higher in Year 2. Actual Δ = -0.9 pp.

Reading the arithmetic against the claim: margin rose by -0.9 pp versus more than 3.2 pp so the statement does not hold.

The statement is false.', 'FALSE — Use the case figures for The operating result and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{The operating result}_{\text{Y1}} = 203, \quad
\text{The operating result}_{\text{Y2}} = 238
$$

$$
\frac{238 - 203}{203} = 17.2\%
$$

$$
17.2\% \le  42.2\%
$$

The actual growth is 17.2%, which is not more than the claimed 42.2%.

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Profit and Loss Over Two Years 12". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Profit for the year increases equity through retained earnings, while a loss decreases equity."

The statement is true.', 'FALSE — Use the case figures for Revenue and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Revenue}_{\text{Y1}} = 755, \quad
\text{Revenue}_{\text{Y2}} = 883
$$

$$
\frac{883 - 755}{755} = 17.0\%
$$

$$
17.0\% \le  21\%
$$

The actual growth is 17.0%, which is not more than the claimed 21%.

The statement is false.', 'FALSE — Use the case figures for Profit for the year and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Profit for the year}_{\text{Y1}} = 146, \quad
\text{Profit for the year}_{\text{Y2}} = 163
$$

$$
\frac{163 - 146}{146} = 11.6\%
$$

$$
11.6\% \le  27.7\%
$$

The actual growth is 11.6%, which is not more than the claimed 27.7%.

The statement is false.'] WHERE case_id = 'CASE 6.3.012' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Comparing Results Across Several Years Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "A business that grows its equity mostly through retained earnings is relying less on outside investors than one whose equity growth comes mainly from new share issues."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Comparing Results Across Several Years Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "The pattern of a business''s equity growth over several years, whether driven by retained profit or fresh capital, reveals something about its underlying financing strategy."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Comparing Results Across Several Years Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "If share capital has remained unchanged for several years while equity has still grown, retained earnings must account for the entire increase."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Comparing Results Across Several Years Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "A business is considered to be financing its non-current assets soundly when their total value does not exceed the combined total of equity and non-current liabilities."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Comparing Results Across Several Years Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Relying on long-term sources of finance, rather than short-term borrowing that must soon be renewed, is regarded as the prudent way to fund long-lived assets."

The statement is true.'] WHERE case_id = 'CASE 6.3.013' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Comparing Results Across Several Years for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "Looking at several consecutive years of results makes it harder to tell whether an unusual figure was a temporary blip or the start of a lasting change."

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Comparing Results Across Several Years for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "A trend that persists across three or more reporting periods carries no more weight than a single period''s outcome when judging a business''s direction of travel."

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Comparing Results Across Several Years for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "When non-current assets exceed the sum of equity and non-current liabilities, part of those long-term assets must be financed by current liabilities, which increases financial risk."

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Comparing Results Across Several Years for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "Judging whether a business''s results are strong or weak is unaffected by whether its figures are set alongside those of comparable businesses in the same industry."

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Comparing Results Across Several Years for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Matching the expected life of an asset with the maturity of the finance used to fund it is a widely accepted principle of sound financial management."

The statement is true.'] WHERE case_id = 'CASE 6.3.014' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Use the case figures for Total assets and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total assets}_{\text{Y1}} = 922, \quad
\text{Total assets}_{\text{Y2}} = 1,028
$$

$$
\frac{1,028 - 922}{922} = 11.5\%
$$

$$
11.5\% \le  23.4\%
$$

The actual growth is 11.5%, which is not more than the claimed 23.4%.

The statement is false.', 'FALSE — Use the case figures for Inventory and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Inventory}_{\text{Y1}} = 133, \quad
\text{Inventory}_{\text{Y2}} = 147
$$

$$
\frac{147 - 133}{133} = 10.5\%
$$

$$
10.5\% \le  27.1\%
$$

The actual growth is 10.5%, which is not more than the claimed 27.1%.

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Comparative Balance Sheet Analysis 15". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "The balance sheet shows assets, liabilities and equity at a point in time, while the income statement summarises revenues, costs and expenses over a period."

The statement is true.', 'FALSE — Use the case figures for Trade payables and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Trade payables}_{\text{Y1}} = 211, \quad
\text{Trade payables}_{\text{Y2}} = 231
$$

$$
\frac{231 - 211}{211} = 9.5\%
$$

$$
9.5\% \le  17.6\%
$$

The actual growth is 9.5%, which is not more than the claimed 17.6%.

The statement is false.', 'FALSE — Use the case figures for Cash and cash equivalents and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Cash and cash equivalents}_{\text{Y1}} = 103, \quad
\text{Cash and cash equivalents}_{\text{Y2}} = 113
$$

$$
\frac{113 - 103}{103} = 9.7\%
$$

$$
-9.7\% \le  12.1\%
$$

The actual decline is -9.7%, which is not more than the claimed 12.1%.

The statement is false.'] WHERE case_id = 'CASE 6.3.015' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Asset Composition Chart 16". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "The balance sheet identity requires that total assets always equal the sum of total liabilities and total equity, which is why any increase in assets must be matched by an increase in either liabil…"

The statement is true.', 'TRUE — This is a composition claim: express Trade receivables as a percentage of current assets.

Name the identity in words: Trade receivables share of current assets = Trade receivables ÷ current assets.

From the extract, Trade receivables = 95 and current assets = 285. Plug the figures step by step:

$$
Share = \frac{\text{Trade receivables}}{\text{current assets}}
$$

$$
Share = \frac{95}{285}
$$

$$
Share = 33.3\%
$$

Threshold: less than 36.9%. Actual 33.3%.

Reading the arithmetic against the claim: actual share 33.3% matches ''less than 36.9%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Cash and cash equivalents as a percentage of current assets.

Name the identity in words: Cash and cash equivalents share of current assets = Cash and cash equivalents ÷ current assets.

From the extract, Cash and cash equivalents = 106 and current assets = 285. Plug the figures step by step:

$$
Share = \frac{\text{Cash and cash equivalents}}{\text{current assets}}
$$

$$
Share = \frac{106}{285}
$$

$$
Share = 37.2\%
$$

Threshold: more than 30.7%. Actual 37.2%.

Reading the arithmetic against the claim: actual share 37.2% matches ''more than 30.7%'' so the statement holds.

The statement is true.', 'TRUE — Inventory is held for sale or for consumption in the operating cycle.

On the balance sheet that places inventory among current assets. It is not an intangible (no physical stock for sale) and not a non-current operating asset (those are used in the business beyond one year rather than turned over as stock).

Applied to this stem: "Inventory of €84 thousand is correctly classified as a current asset rather than a non-current intangible asset."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Asset Composition Chart 16". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Total assets of €1,025 thousand equal total equity plus total liabilities."

The statement is true.'] WHERE case_id = 'CASE 6.3.016' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Return and Cash Flow Extract 17". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Purchase of a plant, machinery or other long-term asset for cash is classified as cash flow from investing activities."

The statement is true.', 'TRUE — ROE on this extract is operating result divided by total equity.

Name the identity in words: ROE = operating result ÷ total equity.

From the extract, operating result = 171 and total equity = 508. Plug the figures step by step:

$$
ROE = \frac{\text{operating result}}{\text{total equity}}
$$

$$
ROE = \frac{171}{508}
$$

$$
ROE = 33.7\%
$$

Threshold: exceeds 31.3%. Actual 33.7%.

Reading the arithmetic against the claim: ROE 33.7% exceeds 31.3% so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Inventory as a percentage of total assets.

Name the identity in words: Inventory share of total assets = Inventory ÷ total assets.

From the extract, Inventory = 257 and total assets = 1,071. Plug the figures step by step:

$$
Share = \frac{\text{Inventory}}{\text{total assets}}
$$

$$
Share = \frac{257}{1,071}
$$

$$
Share = 24.0\%
$$

Threshold: more than 10.2%. Actual 24.0%.

Reading the arithmetic against the claim: actual share 24.0% matches ''more than 10.2%'' so the statement holds.

The statement is true.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 448 and current liabilities total 225:

$$
WC = CA - CL
$$

$$
CA = 448, \quad CL = 225
$$

$$
WC = 448 - 225 = 223
$$

Calculated WC is 223, which is positive.

Reading the arithmetic against the claim: WC = 223 is positive as claimed so the statement holds.

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Return and Cash Flow Extract 17". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Cash flow from investing activities was an outflow this year."

The statement is true.'] WHERE case_id = 'CASE 6.3.017' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Comparing Results Across Several Years Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "A profit margin that appears strong when viewed in isolation remains equally strong once measured against the margins earned by similar businesses."

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Comparing Results Across Several Years Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "Sector-wide benchmarks provide no basis for determining whether an individual business''s asset structure or profitability is ordinary for its industry or genuinely stands out."

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Comparing Results Across Several Years Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Financing long-lived production assets through short-term credit that must be repaid within a year exposes a business to the risk of needing to refinance repeatedly."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Comparing Results Across Several Years Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Cost of sales is confined to the direct costs incurred in producing or acquiring the goods a business has actually sold during the period."

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Comparing Results Across Several Years Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "Comparing a business''s statements with those of its direct competitors can never reveal whether a change in results reflects conditions across the whole industry or is specific to that one business."

The statement is false.'] WHERE case_id = 'CASE 6.3.018' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Comparing Results Across Several Years in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Only costs that can be traced directly to manufacturing or acquiring the units a business has sold belong within cost of sales."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Comparing Results Across Several Years in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Materials physically consumed in manufacturing the units sold form part of cost of sales, while costs incurred once production is finished generally do not."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Comparing Results Across Several Years in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Because cost of sales is restricted to direct production costs, functions such as administration and distribution are reported in separate lines of the income statement."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Comparing Results Across Several Years in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Direct labour spent physically producing the goods sold is treated as part of cost of sales, unlike labour spent on functions unrelated to production."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Comparing Results Across Several Years in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Gross profit is arrived at by deducting cost of sales from revenue, before any operating expenses such as distribution or administrative costs are taken into account."

The statement is true.'] WHERE case_id = 'CASE 6.3.019' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Non-current assets are held for use beyond one accounting period.

Useful life beyond one year plus operating intent (not ordinary resale) define the category.

Using the stem facts: "Non-current assets normally have a useful life of more than one year and are intended to be used in the business for longer than one year."

Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'TRUE — Use the case figures for Revenue and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Revenue}_{\text{Y1}} = 763, \quad
\text{Revenue}_{\text{Y2}} = 912
$$

$$
\frac{912 - 763}{763} = 19.5\%
$$

$$
19.5\% > 15.1\%
$$

The actual growth is 19.5%, which is more than the claimed 15.1%.

The statement is true.', 'FALSE — Gross margin is gross profit divided by revenue; the claim compares the Year-2 margin with Year 1 in percentage points.

Name the identity in words: gross margin = gross profit ÷ revenue; Δ = GPM₂ − GPM₁.

$$
GPM_{1} = \frac{274}{763} = 35.9\%
$$

$$
GPM_{2} = \frac{329}{912} = 36.1\%
$$

$$
\Delta = 0.2\text{ percentage points}
$$

Threshold: more than 2.3 pp higher in Year 2. Actual Δ = 0.2 pp.

Reading the arithmetic against the claim: margin rose by 0.2 pp versus more than 2.3 pp so the statement does not hold.

The statement is false.', 'FALSE — Use the case figures for The operating result and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{The operating result}_{\text{Y1}} = 194, \quad
\text{The operating result}_{\text{Y2}} = 237
$$

$$
\frac{237 - 194}{194} = 22.2\%
$$

$$
22.2\% \le  41.1\%
$$

The actual growth is 22.2%, which is not more than the claimed 41.1%.

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Profit and Loss Over Two Years 20". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "The operating result covers finance costs less than 11.41 times over in Year 2."

The statement is true.'] WHERE case_id = 'CASE 6.3.020' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Comparative Balance Sheet Analysis 21". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Current assets such as inventory, trade receivables and cash normally have higher liquidity and are not expected to be used longer than a year."

The statement is true.', 'TRUE — Use the case figures for Total assets and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Total assets}_{\text{Y1}} = 1,092, \quad
\text{Total assets}_{\text{Y2}} = 1,231
$$

$$
\frac{1,231 - 1,092}{1,092} = 12.7\%
$$

$$
12.7\% > 6.2\%
$$

The actual growth is 12.7%, which is more than the claimed 6.2%.

The statement is true.', 'TRUE — Compute each year''s equity ratio from the balance-sheet totals, then the change in percentage points.

$$
R_{Y1} = \frac{289}{1,092} = 26.5\%
$$

$$
R_{Y2} = \frac{372}{1,231} = 30.2\%
$$

$$
\Delta = +3.8\text{ percentage points}
$$

Required: improved by more than 3.1 pp. Actual change +3.8 pp.

The statement is true.', 'TRUE — Compute each year''s debt ratio from the balance-sheet totals, then the change in percentage points.

$$
R_{Y1} = \frac{803}{1,092} = 73.5\%
$$

$$
R_{Y2} = \frac{859}{1,231} = 69.8\%
$$

$$
\Delta = -3.8\text{ percentage points}
$$

Required: fell by more than 3.2 pp. Actual change -3.8 pp.

The statement is true.', 'TRUE — Non-current liabilities are the long-term funding claims; here they are long-term bank loan plus bonds payable, compared with total equity.

Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\text{NCL} = 425 + 69 = 494
$$

$$
\text{Equity} = 289
$$

$$
\frac{494}{289} = 170.9\%
$$

Threshold: more than 66.8% in Year 1. Actual 170.9%.

Reading the arithmetic against the claim: Year 1 NCL/equity is 170.9%, which is consistent with ''more than 66.8%'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.3.021' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Collecting payment on a trade receivable is cash from operating activities. The reason given — it comes from the core trading cycle. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 255 + 171 + 105 = 531
$$

$$
CL = 76 + 77 = 153
$$

$$
\text{Current ratio} = \frac{531}{153} = 3.4706
$$

Claimed: exceeds 1.77. Actual 3.47.

Reading the arithmetic against the claim: actual current ratio 3.47 versus ''exceeds 1.77'' so the statement holds.

The statement is true.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 531 and current liabilities total 153:

$$
WC = CA - CL
$$

$$
CA = 531, \quad CL = 153
$$

$$
WC = 531 - 153 = 378
$$

The statement cites working capital of €378 thousand and that it is positive. Calculated WC is 378, which is positive.

Reading the arithmetic against the claim: WC = 378 is positive as claimed so the statement holds.

The statement is true.', 'TRUE — The acid-test (quick) ratio is a stricter liquidity test: inventory is removed from current assets before dividing by current liabilities.

Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = 531, \quad \text{Inventory} = 255, \quad CL = 153
$$

$$
CA - \text{Inventory} = 531 - 255 = 276
$$

$$
\text{Acid-test} = \frac{276}{153} = 1.8039
$$

Threshold: more than 1.05. Actual 1.80.

Reading the arithmetic against the claim: acid-test 1.80 is more than 1.05 so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Inventory as a percentage of current assets.

Name the identity in words: Inventory share of current assets = Inventory ÷ current assets.

From the extract, Inventory = 255 and current assets = 531. Plug the figures step by step:

$$
Share = \frac{\text{Inventory}}{\text{current assets}}
$$

$$
Share = \frac{255}{531}
$$

$$
Share = 48.0\%
$$

Threshold: more than 39%. Actual 48.0%.

Reading the arithmetic against the claim: actual share 48.0% matches ''more than 39%'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.3.022' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Benchmarking Against Industry Peers in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "Even without a suitable point of comparison, a reader can still judge reliably whether a given profit margin counts as good or poor performance."

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Benchmarking Against Industry Peers in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "The relative weight of non-current assets against current assets on a business''s balance sheet gives no indication of how capital-intensive its operations are."

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Benchmarking Against Industry Peers in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "The margin represented by gross profit reflects how much a business earns from producing and selling its goods before overhead costs such as administration are considered."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Benchmarking Against Industry Peers in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Distribution costs and administrative expenses are deducted from gross profit, not from revenue directly, on the way to arriving at the operating result."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Benchmarking Against Industry Peers in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Two businesses can report identical gross profit yet end up with very different operating results if their distribution and administrative costs differ."

The statement is true.'] WHERE case_id = 'CASE 6.3.023' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Benchmarking Against Industry Peers Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "A widening gap between revenue and cost of sales, expressed as a proportion of revenue, indicates that gross profit margin is improving."

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Benchmarking Against Industry Peers Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "A business holding a larger share of its resources in current assets typically has less of its wealth available for conversion into cash within the coming year."

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Benchmarking Against Industry Peers Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "Studying how the balance between current and non-current assets shifts over time reveals nothing about how a business is choosing to deploy its resources."

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Benchmarking Against Industry Peers Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "An increasing share of non-current assets over successive years can only point to a business reducing its commitment to long-term productive capacity."

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Benchmarking Against Industry Peers Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "Businesses in capital-intensive industries tend to carry a lighter weighting of non-current assets relative to current assets than businesses that trade mainly in quickly turned-over stock."

The statement is false.'] WHERE case_id = 'CASE 6.3.024' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Revenue and Operating Result Chart 25". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Current assets such as inventory, trade receivables and cash normally have higher liquidity and are not expected to be used longer than a year."

The statement is true.', 'FALSE — Gross margin is gross profit divided by revenue; the claim compares the Year-2 margin with Year 1 in percentage points.

Name the identity in words: gross margin = gross profit ÷ revenue; Δ = GPM₂ − GPM₁.

$$
GPM_{1} = \frac{420}{1,053} = 39.9\%
$$

$$
GPM_{2} = \frac{493}{1,235} = 39.9\%
$$

$$
\Delta = 0.0\text{ percentage points}
$$

Threshold: more than 2.6 pp higher in Year 2. Actual Δ = 0.0 pp.

Reading the arithmetic against the claim: margin rose by 0.0 pp versus more than 2.6 pp so the statement does not hold.

The statement is false.', 'FALSE — Use the case figures for The operating result and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{The operating result}_{\text{Y1}} = 338, \quad
\text{The operating result}_{\text{Y2}} = 399
$$

$$
\frac{399 - 338}{338} = 18.0\%
$$

$$
18.0\% \le  56.6\%
$$

The actual growth is 18.0%, which is not more than the claimed 56.6%.

The statement is false.', 'FALSE — Use the case figures for Profit for the year and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Profit for the year}_{\text{Y1}} = 246, \quad
\text{Profit for the year}_{\text{Y2}} = 283
$$

$$
\frac{283 - 246}{246} = 15.0\%
$$

$$
15.0\% \le  33.6\%
$$

The actual growth is 15.0%, which is not more than the claimed 33.6%.

The statement is false.', 'FALSE — Compare finance-cost growth with operating-result growth; the claim needs both a finance-cost rise above the threshold and outpacing of operating result.

Name the identity in words: growth = (Year 2 − Year 1) ÷ Year 1 for each line.

$$
\text{FC growth} = 33.3\%
$$

$$
\text{OR growth} = 18.0\%
$$

Finance costs did not grow by more than 36.5%; they do outpace operating result.

Reading the arithmetic against the claim: FC growth 33.3% vs threshold 36.5% and OR growth 18.0% so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.3.025' AND tier = 'full';
