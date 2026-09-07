-- Update expanded explanations for 6.3-part4 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — ROE on this extract is operating result divided by total equity.

Name the identity in words: ROE = operating result ÷ total equity.

From the extract, operating result = 153 and total equity = 527. Plug the figures step by step:

$$
ROE = \frac{\text{operating result}}{\text{total equity}}
$$

$$
ROE = \frac{153}{527}
$$

$$
ROE = 29.0\%
$$

Threshold: exceeds 32.1%. Actual 29.0%.

Reading the arithmetic against the claim: ROE 29.0% does not exceed 32.1% so the statement does not hold.

The statement is false.', 'FALSE — ROCE relates operating result to capital employed: equity plus non-current liabilities.

Name the identity in words: ROCE = operating result ÷ (equity + non-current liabilities).

$$
\text{Capital employed} = 527 + 331 + 72 = 930
$$

$$
ROCE = \frac{153}{930} = 16.5\%
$$

Threshold: exceeds 19.4%. Actual 16.5%.

Reading the arithmetic against the claim: ROCE 16.5% does not exceed 19.4% so the statement does not hold.

The statement is false.', 'FALSE — Operating-cash conversion here is cash flow from operating activities as a percentage of operating result.

Name the identity in words: conversion = operating cash flow ÷ operating result.

From the extract, operating cash flow = 142 and operating result = 153. Plug the figures step by step:

$$
Conv = \frac{\text{operating cash flow}}{\text{operating result}}
$$

$$
Conv = \frac{142}{153}
$$

$$
Conv = 92.8\%
$$

Threshold: less than 81.5%. Actual 92.8%.

Reading the arithmetic against the claim: conversion 92.8% is not less than 81.5% so the statement does not hold.

The statement is false.', 'TRUE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 527 and total assets = 1,183. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{527}{1,183}
$$

$$
ER = 44.5\%
$$

Claimed: exceeds 36.5%. Actual 44.5%.

Reading the arithmetic against the claim: actual equity ratio 44.5% matches ''exceeds 36.5%'' so the statement holds.

The statement is true.', 'FALSE — This is a composition claim: express Inventory as a percentage of total assets.

Name the identity in words: Inventory share of total assets = Inventory ÷ total assets.

From the extract, Inventory = 184 and total assets = 1,183. Plug the figures step by step:

$$
Share = \frac{\text{Inventory}}{\text{total assets}}
$$

$$
Share = \frac{184}{1,183}
$$

$$
Share = 15.6\%
$$

Threshold: more than 27.1%. Actual 15.6%.

Reading the arithmetic against the claim: actual share 15.6% does not match ''more than 27.1%'' so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.3.076' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Use the case figures for Revenue and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Revenue}_{\text{Y1}} = 805, \quad
\text{Revenue}_{\text{Y2}} = 928
$$

$$
\frac{928 - 805}{805} = 15.3\%
$$

$$
15.3\% > 11.7\%
$$

The actual growth is 15.3%, which is more than the claimed 11.7%.

The statement is true.', 'TRUE — Interest coverage in Year 1 is operating result divided by finance costs.

Name the identity in words: interest coverage = operating result ÷ finance costs.

From the extract, operating result = 228 and finance costs = 18. Plug the figures step by step:

$$
Coverage = \frac{\text{operating result}}{\text{finance costs}}
$$

$$
Coverage = \frac{228}{18}
$$

$$
Coverage = 12.6667
$$

Threshold: more than 5.93. Actual 12.67.

Reading the arithmetic against the claim: coverage 12.67 exceeds 5.93 so the statement holds.

The statement is true.', 'TRUE — Operating margin in Year 2 is operating result divided by revenue.

Name the identity in words: operating margin = operating result ÷ revenue.

From the extract, operating result = 261 and revenue = 928. Plug the figures step by step:

$$
OM = \frac{\text{operating result}}{\text{revenue}}
$$

$$
OM = \frac{261}{928}
$$

$$
OM = 28.1\%
$$

Threshold: exceeds 10.8% in Year 2. Actual 28.1%.

Reading the arithmetic against the claim: operating margin 28.1% exceeds 10.8% so the statement holds.

The statement is true.', 'TRUE — Effective tax rate in Year 1 is income taxes divided by profit before tax.

Name the identity in words: effective tax rate = income taxes ÷ profit before tax.

From the extract, income taxes = 42 and profit before tax = 215. Plug the figures step by step:

$$
ETR = \frac{\text{income taxes}}{\text{profit before tax}}
$$

$$
ETR = \frac{42}{215}
$$

$$
ETR = 19.5\%
$$

Threshold: below 20.1% in Year 1. Actual 19.5%.

Reading the arithmetic against the claim: ETR 19.5% is below 20.1% so the statement holds.

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Revenue and Operating Result Chart 77". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Profit for the year increased by exactly €21 thousand from Year 1 to Year 2."

The statement is true.'] WHERE case_id = 'CASE 6.3.077' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Use the case figures for Inventory and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Inventory}_{\text{Y1}} = 94, \quad
\text{Inventory}_{\text{Y2}} = 110
$$

$$
\frac{110 - 94}{94} = 17.0\%
$$

$$
17.0\% > 13.1\%
$$

The actual growth is 17.0%, which is more than the claimed 13.1%.

The statement is true.', 'TRUE — Use the case figures for Trade payables and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Trade payables}_{\text{Y1}} = 203, \quad
\text{Trade payables}_{\text{Y2}} = 230
$$

$$
\frac{230 - 203}{203} = 13.3\%
$$

$$
13.3\% > 13.3\%
$$

The actual growth is 13.3%, which is more than the claimed 13.3%.

The statement is true.', 'TRUE — Non-current liabilities are the long-term funding claims; here they are long-term bank loan plus bonds payable, compared with total equity.

Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\text{NCL} = 246 + 59 = 305
$$

$$
\text{Equity} = 277
$$

$$
\frac{305}{277} = 110.1\%
$$

Threshold: more than 96.9% in Year 1. Actual 110.1%.

Reading the arithmetic against the claim: Year 1 NCL/equity is 110.1%, which is consistent with ''more than 96.9%'' so the statement holds.

The statement is true.', 'TRUE — Non-current liabilities are the long-term funding claims; here they are long-term bank loan plus bonds payable, compared with total equity.

Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\text{NCL} = 287 + 68 = 355
$$

$$
\text{Equity} = 309
$$

$$
\frac{355}{309} = 114.9\%
$$

Threshold: less than 116.6% in Year 2. Actual 114.9%.

Reading the arithmetic against the claim: Year 2 NCL/equity is 114.9%, which is consistent with ''less than 116.6%'' so the statement holds.

The statement is true.', 'TRUE — This is the Year 2 current ratio read as coverage of current liabilities.

Name the identity in words: coverage = current assets ÷ current liabilities.

$$
\frac{322}{275} = 1.1709
$$

Threshold: less than 1.44. Actual 1.17.

Reading the arithmetic against the claim: actual coverage 1.17 is less than 1.44 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.3.078' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 109 + 153 + 77 = 339
$$

$$
CL = 177 + 88 = 265
$$

$$
\text{Current ratio} = \frac{339}{265} = 1.2792
$$

Claimed: is below 0.74. Actual 1.28.

Reading the arithmetic against the claim: actual current ratio 1.28 versus ''is below 0.74'' so the statement does not hold.

The statement is false.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 339 and current liabilities total 265:

$$
WC = CA - CL
$$

$$
CA = 339, \quad CL = 265
$$

$$
WC = 339 - 265 = 74
$$

The statement cites working capital of €74 thousand and that it is positive. Calculated WC is 74, which is positive.

Reading the arithmetic against the claim: WC = 74 is positive as claimed so the statement holds.

The statement is true.', 'TRUE — The acid-test (quick) ratio is a stricter liquidity test: inventory is removed from current assets before dividing by current liabilities.

Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = 339, \quad \text{Inventory} = 109, \quad CL = 265
$$

$$
CA - \text{Inventory} = 339 - 109 = 230
$$

$$
\text{Acid-test} = \frac{230}{265} = 0.8679
$$

Threshold: more than 0.69. Actual 0.87.

Reading the arithmetic against the claim: acid-test 0.87 is more than 0.69 so the statement holds.

The statement is true.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 446 and total assets = 1,018. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{446}{1,018}
$$

$$
ER = 43.8\%
$$

Claimed: is below 26.4%. Actual 43.8%.

Reading the arithmetic against the claim: actual equity ratio 43.8% does not match ''is below 26.4%'' so the statement does not hold.

The statement is false.', 'TRUE — The debt ratio places debt against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: debt ratio = debt ÷ total assets.

From the extract, debt = 572 and total assets = 1,018. Plug the figures step by step:

$$
DR = \frac{\text{debt}}{\text{total assets}}
$$

$$
DR = \frac{572}{1,018}
$$

$$
DR = 56.2\%
$$

Claimed: exceeds 46.4%. Actual 56.2%.

Reading the arithmetic against the claim: actual debt ratio 56.2% matches ''exceeds 46.4%'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.3.079' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Compare finance-cost growth with operating-result growth; the claim needs both a finance-cost rise above the threshold and outpacing of operating result.

Name the identity in words: growth = (Year 2 − Year 1) ÷ Year 1 for each line.

$$
\text{FC growth} = 25.0\%
$$

$$
\text{OR growth} = 11.3\%
$$

Finance costs did grow by more than 16.6%; they do outpace operating result.

Reading the arithmetic against the claim: FC growth 25.0% vs threshold 16.6% and OR growth 11.3% so the statement holds.

The statement is true.', 'FALSE — Use the case figures for The operating result and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{The operating result}_{\text{Y1}} = 327, \quad
\text{The operating result}_{\text{Y2}} = 364
$$

$$
\frac{364 - 327}{327} = 11.3\%
$$

$$
11.3\% \le  36.4\%
$$

The actual growth is 11.3%, which is not more than the claimed 36.4%.

The statement is false.', 'TRUE — Interest coverage in Year 1 is operating result divided by finance costs.

Name the identity in words: interest coverage = operating result ÷ finance costs.

From the extract, operating result = 327 and finance costs = 16. Plug the figures step by step:

$$
Coverage = \frac{\text{operating result}}{\text{finance costs}}
$$

$$
Coverage = \frac{327}{16}
$$

$$
Coverage = 20.4375
$$

Threshold: more than 11.68. Actual 20.44.

Reading the arithmetic against the claim: coverage 20.44 exceeds 11.68 so the statement holds.

The statement is true.', 'TRUE — Effective tax rate in Year 1 is income taxes divided by profit before tax.

Name the identity in words: effective tax rate = income taxes ÷ profit before tax.

From the extract, income taxes = 76 and profit before tax = 317. Plug the figures step by step:

$$
ETR = \frac{\text{income taxes}}{\text{profit before tax}}
$$

$$
ETR = \frac{76}{317}
$$

$$
ETR = 24.0\%
$$

Threshold: below 31% in Year 1. Actual 24.0%.

Reading the arithmetic against the claim: ETR 24.0% is below 31% so the statement holds.

The statement is true.', 'TRUE — Exact revenue growth must match the stated percentage with no rounding slack beyond the claim.

Name the identity in words: revenue growth = (Year 2 revenue − Year 1 revenue) ÷ Year 1 revenue.

$$
\text{Rev}_{\text{Y1}} = 984, \quad \text{Rev}_{\text{Y2}} = 1,120
$$

$$
\frac{1,120 - 984}{984} = 13.8\%
$$

Claimed exactly 13.8%. Actual 13.8%.

Reading the arithmetic against the claim: actual growth 13.8% equals the claimed 13.8% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.3.080' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Share Price and Market Capitalisation 81". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "A share buyback reduces the number of shares outstanding, which can raise earnings per share even if total profit stays exactly the same."

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 41, \quad \text{Shares} = 681,000
$$

$$
\text{MCap} = 41 \times 681,000 = €27.92\text{ million}
$$

Threshold: exceeds €25.4 million. Actual €27.92 million.

Reading the arithmetic against the claim: market cap €27.92m exceeds €25.4m so the statement holds.

The statement is true.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 230, \quad \frac{\text{Shares}}{1,000} = 681
$$

$$
EPS = \frac{230}{681} = €0.3377
$$

Threshold: exceeds €0.26. Actual ≈ €0.34.

Reading the arithmetic against the claim: EPS €0.34 exceeds €0.26 so the statement holds.

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 38, \quad P_{\text{last}} = 41
$$

$$
\frac{41 - 38}{38} = 7.9\%
$$

Threshold: more than 14.6%. Actual 7.9%.

Reading the arithmetic against the claim: the rise is 7.9%, which does not exceed 14.6% so the statement does not hold.

The statement is false.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 38 \times 681,000 = €25.88\text{m}
$$

$$
\text{MCap}_{\text{last}} = 41 \times 681,000 = €27.92\text{m}
$$

$$
\frac{27.92 - 25.88}{25.88} = 7.9\%
$$

Threshold: more than 18.5%. Actual 7.9%.

Reading the arithmetic against the claim: MCap rose 7.9%, which does not exceed 18.5% so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.3.081' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Listed Company Performance Charts 82". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "A share buyback reduces the number of shares outstanding, which can raise earnings per share even if total profit stays exactly the same."

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 38, \quad P_{\text{last}} = 41
$$

$$
\frac{41 - 38}{38} = 7.9\%
$$

Threshold: more than 26.9%. Actual 7.9%.

Reading the arithmetic against the claim: the rise is 7.9%, which does not exceed 26.9% so the statement does not hold.

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 41, \quad \text{Shares} = 418,000
$$

$$
\text{MCap} = 41 \times 418,000 = €17.14\text{ million}
$$

Threshold: exceeds €14.9 million. Actual €17.14 million.

Reading the arithmetic against the claim: market cap €17.14m exceeds €14.9m so the statement holds.

The statement is true.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 38 \times 418,000 = €15.88\text{m}
$$

$$
\text{MCap}_{\text{last}} = 41 \times 418,000 = €17.14\text{m}
$$

$$
\frac{17.14 - 15.88}{15.88} = 7.9\%
$$

Threshold: more than 16.9%. Actual 7.9%.

Reading the arithmetic against the claim: MCap rose 7.9%, which does not exceed 16.9% so the statement does not hold.

The statement is false.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 41, \quad P_{\min} = 35
$$

$$
\frac{41 - 35}{35} = 17.1\%
$$

Threshold: more than 27.7%. Actual 17.1%.

Reading the arithmetic against the claim: the gap is 17.1%, which does not exceed 27.7% so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.3.082' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Earnings Per Share From Reported Figures 83". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Return on equity and return on capital employed are most meaningful when comparing similar businesses or the same business over time, not as isolated absolute numbers."

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 23, \quad P_{\text{last}} = 29
$$

$$
\frac{29 - 23}{23} = 26.1\%
$$

Threshold: more than 28.2%. Actual 26.1%.

Reading the arithmetic against the claim: the rise is 26.1%, which does not exceed 28.2% so the statement does not hold.

The statement is false.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 23 \times 515,000 = €11.85\text{m}
$$

$$
\text{MCap}_{\text{last}} = 29 \times 515,000 = €14.94\text{m}
$$

$$
\frac{14.94 - 11.85}{11.85} = 26.1\%
$$

Threshold: more than 29.5%. Actual 26.1%.

Reading the arithmetic against the claim: MCap rose 26.1%, which does not exceed 29.5% so the statement does not hold.

The statement is false.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 29, \quad P_{\min} = 23
$$

$$
\frac{29 - 23}{23} = 26.1\%
$$

Threshold: more than 28.1%. Actual 26.1%.

Reading the arithmetic against the claim: the gap is 26.1%, which does not exceed 28.1% so the statement does not hold.

The statement is false.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €287\text{ thousand}
$$

The statement claims this amount is below €238 thousand. Actual €287 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €287k is not below €238k so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.3.083' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 35, \quad P_{\text{last}} = 25
$$

$$
\frac{25 - 35}{35} = -28.6\%
$$

Threshold: more than 16.1%. Actual -28.6%.

Reading the arithmetic against the claim: the rise is -28.6%, which does not exceed 16.1% so the statement does not hold.

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Share Price and Market Capitalisation 84". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "The acid test excludes inventories to give a stricter evaluation of liquidity than the current ratio."

The statement is true.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 35 \times 752,000 = €26.32\text{m}
$$

$$
\text{MCap}_{\text{last}} = 25 \times 752,000 = €18.80\text{m}
$$

$$
\frac{18.80 - 26.32}{26.32} = -28.6\%
$$

Threshold: more than 24.1%. Actual -28.6%.

Reading the arithmetic against the claim: MCap rose -28.6%, which does not exceed 24.1% so the statement does not hold.

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 25, \quad \text{Shares} = 752,000
$$

$$
\text{MCap} = 25 \times 752,000 = €18.80\text{ million}
$$

Threshold: exceeds €16 million. Actual €18.80 million.

Reading the arithmetic against the claim: market cap €18.80m exceeds €16m so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 378,000, \quad \text{Shares} = 752,000
$$

$$
\frac{378,000}{752,000} = 50.3\%
$$

Threshold: exceed 36.3%. Actual 50.3%.

Reading the arithmetic against the claim: turnover 50.3% exceeds 36.3% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.3.084' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 38, \quad P_{\text{last}} = 43
$$

$$
\frac{43 - 38}{38} = 13.2\%
$$

Threshold: more than 19.5%. Actual 13.2%.

Reading the arithmetic against the claim: the rise is 13.2%, which does not exceed 19.5% so the statement does not hold.

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Listed Company Performance Charts 85". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Liquidity refers to the ability of a business to pay its bills and repay its debts on time."

The statement is true.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 38 \times 671,000 = €25.50\text{m}
$$

$$
\text{MCap}_{\text{last}} = 43 \times 671,000 = €28.85\text{m}
$$

$$
\frac{28.85 - 25.50}{25.50} = 13.2\%
$$

Threshold: more than 20%. Actual 13.2%.

Reading the arithmetic against the claim: MCap rose 13.2%, which does not exceed 20% so the statement does not hold.

The statement is false.', 'FALSE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 90,000 \quad (February)
$$

Threshold: exceeds 99,409. Actual 90,000.

Reading the arithmetic against the claim: peak volume 90,000 does not exceed 99,409 so the statement does not hold.

The statement is false.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €266\text{ thousand}
$$

The statement claims this amount is below €239 thousand. Actual €266 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €266k is not below €239k so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.3.085' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — On a stock exchange, existing shares change hands between investors.

That transfer does not raise new capital for the issuer; fresh equity cash comes only from primary issues or similar company transactions.

Using the stem facts: "Secondary-market trading changes who owns the shares; it does not, by itself, inject fresh equity cash into the issuing company."

Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 27, \quad \text{Shares} = 763,000
$$

$$
\text{MCap} = 27 \times 763,000 = €20.60\text{ million}
$$

Threshold: exceeds €16.5 million. Actual €20.60 million.

Reading the arithmetic against the claim: market cap €20.60m exceeds €16.5m so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 400,000, \quad \text{Shares} = 763,000
$$

$$
\frac{400,000}{763,000} = 52.4\%
$$

Threshold: exceed 12.5%. Actual 52.4%.

Reading the arithmetic against the claim: turnover 52.4% exceeds 12.5% so the statement holds.

The statement is true.', 'TRUE — Shares outstanding are an annual stock figure reported beside the price table; the claim is simply whether that figure equals the stated count.

Read shares outstanding from the annual figures attached to the extract:

$$
\text{Shares outstanding} = 763,000
$$

The statement claims exactly 763,000. The extract reports 763,000, which matches the claim.

Reading the arithmetic against the claim: extract reports 763,000 versus claimed 763,000 so the statement holds.

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Earnings Per Share From Reported Figures 86". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "A corporation is not obliged to pay a dividend every year regardless of performance; unpaid dividends over a longer period may make the shares less attractive, but payment is not legally required e…"

The statement is true.'] WHERE case_id = 'CASE 6.3.086' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Share Price and Market Capitalisation 87". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "A corporation is not obliged to pay a dividend every year regardless of performance; unpaid dividends over a longer period may make the shares less attractive, but payment is not legally required e…"

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 34, \quad \text{Shares} = 614,000
$$

$$
\text{MCap} = 34 \times 614,000 = €20.88\text{ million}
$$

Threshold: exceeds €19.1 million. Actual €20.88 million.

Reading the arithmetic against the claim: market cap €20.88m exceeds €19.1m so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 410,000, \quad \text{Shares} = 614,000
$$

$$
\frac{410,000}{614,000} = 66.8\%
$$

Threshold: exceed 32.3%. Actual 66.8%.

Reading the arithmetic against the claim: turnover 66.8% exceeds 32.3% so the statement holds.

The statement is true.', 'TRUE — Shares outstanding are an annual stock figure reported beside the price table; the claim is simply whether that figure equals the stated count.

Read shares outstanding from the annual figures attached to the extract:

$$
\text{Shares outstanding} = 614,000
$$

The statement claims exactly 614,000. The extract reports 614,000, which matches the claim.

Reading the arithmetic against the claim: extract reports 614,000 versus claimed 614,000 so the statement holds.

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Share Price and Market Capitalisation 87". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "High inventory turnover indicates that goods sell well and do not remain in stock for a long time."

The statement is true.'] WHERE case_id = 'CASE 6.3.087' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Listed Company Performance Charts 88". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Voting rights ordinarily attach to common shares, while preferred shareholders usually accept limited voting rights in return for a preferential dividend."

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 36, \quad \text{Shares} = 640,000
$$

$$
\text{MCap} = 36 \times 640,000 = €23.04\text{ million}
$$

Threshold: exceeds €18.4 million. Actual €23.04 million.

Reading the arithmetic against the claim: market cap €23.04m exceeds €18.4m so the statement holds.

The statement is true.', 'TRUE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 30 \times 640,000 = €19.20\text{m}
$$

$$
\text{MCap}_{\text{last}} = 36 \times 640,000 = €23.04\text{m}
$$

$$
\frac{23.04 - 19.20}{19.20} = 20.0\%
$$

Threshold: more than 15.7%. Actual 20.0%.

Reading the arithmetic against the claim: MCap rose 20.0%, which exceeds 15.7% so the statement holds.

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 30, \quad P_{\text{last}} = 36
$$

$$
\frac{36 - 30}{30} = 20.0\%
$$

Threshold: more than 26.4%. Actual 20.0%.

Reading the arithmetic against the claim: the rise is 20.0%, which does not exceed 26.4% so the statement does not hold.

The statement is false.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 285,000, \quad \text{Shares} = 640,000
$$

$$
\frac{285,000}{640,000} = 44.5\%
$$

Threshold: exceed 23.5%. Actual 44.5%.

Reading the arithmetic against the claim: turnover 44.5% exceeds 23.5% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.3.088' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Calculating Gross Profit in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "The balance between papermaking machinery and paper roll inventory on a paper mill''s statements has no bearing on whether the business is becoming more or less capital-intensive."

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: The wages of corporate finance staff are kept out of cost of sales. The reason given — their duties are not directly involved in producing the goods that are sold. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Calculating Gross Profit in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "A ceramics manufacturer is regarded as financing its ceramics kilns and moulding equipment soundly only when they are covered mainly by short-term credit from clay suppliers."

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Calculating Gross Profit in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "The balance between ceramics kilns and moulding equipment and finished ceramics stock on a ceramics manufacturer''s statements has no bearing on whether the business is becoming more or less capital…"

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Calculating Gross Profit in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Pay earned by outbound logistics coordinators is treated as a distribution cost rather than cost of sales, since their work happens after production of the goods is complete."

The statement is true.'] WHERE case_id = 'CASE 6.3.089' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Share Price and Market Capitalisation 90". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Common shareholders are entitled to vote at the annual stockholders'' meeting, whereas holders of preferred shares do not have this right but typically receive a higher dividend."

The statement is true.', 'TRUE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 42, \quad P_{\text{last}} = 57
$$

$$
\frac{57 - 42}{42} = 35.7\%
$$

Threshold: more than 14.3%. Actual 35.7%.

Reading the arithmetic against the claim: the rise is 35.7%, which exceeds 14.3% so the statement holds.

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 57, \quad \text{Shares} = 739,000
$$

$$
\text{MCap} = 57 \times 739,000 = €42.12\text{ million}
$$

Threshold: exceeds €35.9 million. Actual €42.12 million.

Reading the arithmetic against the claim: market cap €42.12m exceeds €35.9m so the statement holds.

The statement is true.', 'TRUE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 42 \times 739,000 = €31.04\text{m}
$$

$$
\text{MCap}_{\text{last}} = 57 \times 739,000 = €42.12\text{m}
$$

$$
\frac{42.12 - 31.04}{31.04} = 35.7\%
$$

Threshold: more than 9.1%. Actual 35.7%.

Reading the arithmetic against the claim: MCap rose 35.7%, which exceeds 9.1% so the statement holds.

The statement is true.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 57, \quad P_{\min} = 42
$$

$$
\frac{57 - 42}{42} = 35.7\%
$$

Threshold: more than 36.2%. Actual 35.7%.

Reading the arithmetic against the claim: the gap is 35.7%, which does not exceed 36.2% so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.3.090' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 28, \quad P_{\text{last}} = 35
$$

$$
\frac{35 - 28}{28} = 25.0\%
$$

Threshold: more than 32%. Actual 25.0%.

Reading the arithmetic against the claim: the rise is 25.0%, which does not exceed 32% so the statement does not hold.

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Listed Company Performance Charts 91". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "The acid test excludes inventories to give a stricter evaluation of liquidity than the current ratio."

The statement is true.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €265\text{ thousand}
$$

The statement claims this amount is below €241 thousand. Actual €265 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €265k is not below €241k so the statement does not hold.

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 35, \quad \text{Shares} = 599,000
$$

$$
\text{MCap} = 35 \times 599,000 = €20.96\text{ million}
$$

Threshold: exceeds €19.8 million. Actual €20.96 million.

Reading the arithmetic against the claim: market cap €20.96m exceeds €19.8m so the statement holds.

The statement is true.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 35, \quad P_{\min} = 28
$$

$$
\frac{35 - 28}{28} = 25.0\%
$$

Threshold: more than 13.1%. Actual 25.0%.

Reading the arithmetic against the claim: the gap is 25.0%, which exceeds 13.1% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.3.091' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Amounts paid to telesales personnel are excluded from cost of sales. The reason given — selling activity takes place only after the goods have already been produced. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Direct labour incurred producing the units sold are included within cost of sales. The reason given — they are incurred directly in producing the goods that a joinery and furniture workshop has sold. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: The wages of administrative assistants are kept out of cost of sales. The reason given — their duties are not directly involved in producing the goods that are sold. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Calculating Gross Profit Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Pay earned by loading bay workers is treated as a distribution cost rather than cost of sales, since their work happens after production of the goods is complete."

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Calculating Gross Profit Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "An automotive parts supplier is regarded as financing its assembly-line robotics soundly only when they are covered mainly by a short-term bank overdraft."

The statement is false.'] WHERE case_id = 'CASE 6.3.092' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Share Price and Market Capitalisation 93". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Working capital should be positive, meaning current assets should be higher than current liabilities."

The statement is true.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 25 \times 731,000 = €18.27\text{m}
$$

$$
\text{MCap}_{\text{last}} = 26 \times 731,000 = €19.01\text{m}
$$

$$
\frac{19.01 - 18.27}{18.27} = 4.0\%
$$

Threshold: more than 13.6%. Actual 4.0%.

Reading the arithmetic against the claim: MCap rose 4.0%, which does not exceed 13.6% so the statement does not hold.

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 26, \quad \text{Shares} = 731,000
$$

$$
\text{MCap} = 26 \times 731,000 = €19.01\text{ million}
$$

Threshold: exceeds €15.8 million. Actual €19.01 million.

Reading the arithmetic against the claim: market cap €19.01m exceeds €15.8m so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 382,000, \quad \text{Shares} = 731,000
$$

$$
\frac{382,000}{731,000} = 52.3\%
$$

Threshold: exceed 33%. Actual 52.3%.

Reading the arithmetic against the claim: turnover 52.3% exceeds 33% so the statement holds.

The statement is true.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 87,000 \quad (March)
$$

Threshold: exceeds 75,951. Actual 87,000.

Reading the arithmetic against the claim: peak volume 87,000 exceeds 75,951 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.3.093' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Amounts paid to regional sales agents are excluded from cost of sales. The reason given — selling activity takes place only after the goods have already been produced. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Calculating Gross Profit for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "The balance between assembly-line robotics and spare automotive parts inventory on an automotive parts supplier''s statements has no bearing on whether the business is becoming more or less capital-…"

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Factory-floor wages tied directly to output produced are included within cost of sales. The reason given — they are incurred directly in producing the goods that a plastics moulding company has sold. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: The wages of office management personnel are kept out of cost of sales. The reason given — their duties are not directly involved in producing the goods that are sold. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Calculating Gross Profit for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "A commercial bakery chain is regarded as financing its ovens and proofing equipment soundly only when they are covered mainly by short-term credit from ingredient suppliers."

The statement is false.'] WHERE case_id = 'CASE 6.3.094' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Calculating Gross Profit Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "The balance between ovens and proofing equipment and dough and ingredient stock on a commercial bakery chain''s statements has no bearing on whether the business is becoming more or less capital-int…"

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Calculating Gross Profit Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "A marine equipment supplier is regarded as financing its dockside cranes and lifting gear soundly only when they are covered mainly by short-term credit from parts suppliers."

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Calculating Gross Profit Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Pay earned by delivery fleet staff is treated as a distribution cost rather than cost of sales, since their work happens after production of the goods is complete."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Amounts paid to the commercial sales force are excluded from cost of sales. The reason given — selling activity takes place only after the goods have already been produced. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Calculating Gross Profit Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "The balance between dockside cranes and lifting gear and spare marine parts inventory on a marine equipment supplier''s statements has no bearing on whether the business is becoming more or less cap…"

The statement is false.'] WHERE case_id = 'CASE 6.3.095' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 40, \quad P_{\min} = 33
$$

$$
\frac{40 - 33}{33} = 21.2\%
$$

Threshold: more than 25.5%. Actual 21.2%.

Reading the arithmetic against the claim: the gap is 21.2%, which does not exceed 25.5% so the statement does not hold.

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Share Price and Market Capitalisation 96". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Making a profit alone does not prove sufficient profitability; profitability ratios relate profit to an indicator of business size such as assets, equity or turnover."

The statement is true.', 'TRUE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 33, \quad P_{\text{last}} = 40
$$

$$
\frac{40 - 33}{33} = 21.2\%
$$

Threshold: more than 9.6%. Actual 21.2%.

Reading the arithmetic against the claim: the rise is 21.2%, which exceeds 9.6% so the statement holds.

The statement is true.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €273\text{ thousand}
$$

The statement claims this amount is below €228 thousand. Actual €273 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €273k is not below €228k so the statement does not hold.

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 40, \quad \text{Shares} = 780,000
$$

$$
\text{MCap} = 40 \times 780,000 = €31.20\text{ million}
$$

Threshold: exceeds €24.7 million. Actual €31.20 million.

Reading the arithmetic against the claim: market cap €31.20m exceeds €24.7m so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.3.096' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Listed Company Performance Charts 97". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Common shareholders are entitled to vote at the annual stockholders'' meeting, whereas holders of preferred shares do not have this right but typically receive a higher dividend."

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 19, \quad P_{\text{last}} = 23
$$

$$
\frac{23 - 19}{19} = 21.1\%
$$

Threshold: more than 29.1%. Actual 21.1%.

Reading the arithmetic against the claim: the rise is 21.1%, which does not exceed 29.1% so the statement does not hold.

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 23, \quad \text{Shares} = 760,000
$$

$$
\text{MCap} = 23 \times 760,000 = €17.48\text{ million}
$$

Threshold: exceeds €13.8 million. Actual €17.48 million.

Reading the arithmetic against the claim: market cap €17.48m exceeds €13.8m so the statement holds.

The statement is true.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €265\text{ thousand}
$$

The statement claims this amount is below €207 thousand. Actual €265 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €265k is not below €207k so the statement does not hold.

The statement is false.', 'TRUE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 19 \times 760,000 = €14.44\text{m}
$$

$$
\text{MCap}_{\text{last}} = 23 \times 760,000 = €17.48\text{m}
$$

$$
\frac{17.48 - 14.44}{14.44} = 21.1\%
$$

Threshold: more than 9%. Actual 21.1%.

Reading the arithmetic against the claim: MCap rose 21.1%, which exceeds 9% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.3.097' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Earnings Per Share From Reported Figures 98". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Liquidity refers to the ability of a business to pay its bills and repay its debts on time."

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 38, \quad \text{Shares} = 840,000
$$

$$
\text{MCap} = 38 \times 840,000 = €31.92\text{ million}
$$

Threshold: exceeds €24.8 million. Actual €31.92 million.

Reading the arithmetic against the claim: market cap €31.92m exceeds €24.8m so the statement holds.

The statement is true.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 235, \quad \frac{\text{Shares}}{1,000} = 840
$$

$$
EPS = \frac{235}{840} = €0.2798
$$

Threshold: exceeds €0.22. Actual ≈ €0.28.

Reading the arithmetic against the claim: EPS €0.28 exceeds €0.22 so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 304,000, \quad \text{Shares} = 840,000
$$

$$
\frac{304,000}{840,000} = 36.2\%
$$

Threshold: exceed 20.5%. Actual 36.2%.

Reading the arithmetic against the claim: turnover 36.2% exceeds 20.5% so the statement holds.

The statement is true.', 'TRUE — Shares outstanding are an annual stock figure reported beside the price table; the claim is simply whether that figure equals the stated count.

Read shares outstanding from the annual figures attached to the extract:

$$
\text{Shares outstanding} = 840,000
$$

The statement claims exactly 840,000. The extract reports 840,000, which matches the claim.

Reading the arithmetic against the claim: extract reports 840,000 versus claimed 840,000 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.3.098' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Calculating Gross Profit in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "A joinery and furniture workshop is regarded as financing its joinery workshop machinery soundly only when they are covered mainly by short-term credit from timber suppliers."

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: The direct cost of goods acquired for resale are included within cost of sales. The reason given — they are incurred directly in producing the goods that a dairy cooperative has sold. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Calculating Gross Profit in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "The balance between joinery workshop machinery and unsold furniture stock on a joinery and furniture workshop''s statements has no bearing on whether the business is becoming more or less capital-in…"

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Calculating Gross Profit in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "A plastics moulding company is regarded as financing its injection-moulding machinery soundly only when they are covered mainly by short-term credit from resin suppliers."

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Calculating Gross Profit in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "The balance between injection-moulding machinery and moulded component stock on a plastics moulding company''s statements has no bearing on whether the business is becoming more or less capital-inte…"

The statement is false.'] WHERE case_id = 'CASE 6.3.099' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Listed Company Performance Charts 100". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Investors may seek income from dividends, capital gains if prices rise, influence through voting, or a hedge of real values against inflation."

The statement is true.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 38 \times 451,000 = €17.14\text{m}
$$

$$
\text{MCap}_{\text{last}} = 40 \times 451,000 = €18.04\text{m}
$$

$$
\frac{18.04 - 17.14}{17.14} = 5.3\%
$$

Threshold: more than 18.9%. Actual 5.3%.

Reading the arithmetic against the claim: MCap rose 5.3%, which does not exceed 18.9% so the statement does not hold.

The statement is false.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 40, \quad P_{\min} = 32
$$

$$
\frac{40 - 32}{32} = 25.0\%
$$

Threshold: more than 43.6%. Actual 25.0%.

Reading the arithmetic against the claim: the gap is 25.0%, which does not exceed 43.6% so the statement does not hold.

The statement is false.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 309, \quad \frac{\text{Shares}}{1,000} = 451
$$

$$
EPS = \frac{309}{451} = €0.6851
$$

Threshold: exceeds €0.58. Actual ≈ €0.69.

Reading the arithmetic against the claim: EPS €0.69 exceeds €0.58 so the statement holds.

The statement is true.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €309\text{ thousand}
$$

The statement claims this amount is below €268 thousand. Actual €309 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €309k is not below €268k so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.3.100' AND tier = 'full';
