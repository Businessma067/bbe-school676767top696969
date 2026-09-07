-- Update expanded explanations for 6.4-part3 (10 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Share Price and Market Capitalisation 51". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Dividend yield and capital growth are both reasons why investors buy shares, alongside voting rights and the wish to invest in real values that may hold up during inflation."

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 46, \quad \text{Shares} = 411,000
$$

$$
\text{MCap} = 46 \times 411,000 = €18.91\text{ million}
$$

Threshold: exceeds €14.3 million. Actual €18.91 million.

Reading the arithmetic against the claim: market cap €18.91m exceeds €14.3m so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 269,000, \quad \text{Shares} = 411,000
$$

$$
\frac{269,000}{411,000} = 65.5\%
$$

Threshold: exceed 10.3%. Actual 65.5%.

Reading the arithmetic against the claim: turnover 65.5% exceeds 10.3% so the statement holds.

The statement is true.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 47, \quad P_{\min} = 38
$$

$$
\frac{47 - 38}{38} = 23.7\%
$$

Threshold: more than 27.1%. Actual 23.7%.

Reading the arithmetic against the claim: the gap is 23.7%, which does not exceed 27.1% so the statement does not hold.

The statement is false.', 'FALSE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 86,000 \quad (March)
$$

Threshold: exceeds 86,167. Actual 86,000.

Reading the arithmetic against the claim: peak volume 86,000 does not exceed 86,167 so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.4.051' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Listed Company Performance Charts 52". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "A corporation is not obliged to pay a dividend every year regardless of performance; unpaid dividends over a longer period may make the shares less attractive, but payment is not legally required e…"

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 40, \quad \text{Shares} = 612,000
$$

$$
\text{MCap} = 40 \times 612,000 = €24.48\text{ million}
$$

Threshold: exceeds €21.1 million. Actual €24.48 million.

Reading the arithmetic against the claim: market cap €24.48m exceeds €21.1m so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 321,000, \quad \text{Shares} = 612,000
$$

$$
\frac{321,000}{612,000} = 52.5\%
$$

Threshold: exceed 10.1%. Actual 52.5%.

Reading the arithmetic against the claim: turnover 52.5% exceeds 10.1% so the statement holds.

The statement is true.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 95,000 \quad (March)
$$

Threshold: exceeds 62,416. Actual 95,000.

Reading the arithmetic against the claim: peak volume 95,000 exceeds 62,416 so the statement holds.

The statement is true.', 'TRUE — Shares outstanding are an annual stock figure reported beside the price table; the claim is simply whether that figure equals the stated count.

Read shares outstanding from the annual figures attached to the extract:

$$
\text{Shares outstanding} = 612,000
$$

The statement claims exactly 612,000. The extract reports 612,000, which matches the claim.

Reading the arithmetic against the claim: extract reports 612,000 versus claimed 612,000 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.4.052' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 20, \quad P_{\text{last}} = 13
$$

$$
\frac{13 - 20}{20} = -35.0\%
$$

Threshold: more than 34.7%. Actual -35.0%.

Reading the arithmetic against the claim: the rise is -35.0%, which does not exceed 34.7% so the statement does not hold.

The statement is false.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Earnings Per Share From Reported Figures 53". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Only an issue of new shares by the corporation itself raises equity finance; later trading between investors does not."

The statement is true.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 20, \quad P_{\min} = 13
$$

$$
\frac{20 - 13}{13} = 53.8\%
$$

Threshold: more than 38.1%. Actual 53.8%.

Reading the arithmetic against the claim: the gap is 53.8%, which exceeds 38.1% so the statement holds.

The statement is true.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 20 \times 467,000 = €9.34\text{m}
$$

$$
\text{MCap}_{\text{last}} = 13 \times 467,000 = €6.07\text{m}
$$

$$
\frac{6.07 - 9.34}{9.34} = -35.0\%
$$

Threshold: more than 14.4%. Actual -35.0%.

Reading the arithmetic against the claim: MCap rose -35.0%, which does not exceed 14.4% so the statement does not hold.

The statement is false.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €263\text{ thousand}
$$

The statement claims this amount is below €254 thousand. Actual €263 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €263k is not below €254k so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.4.053' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Tailored Reports for Managers". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Lenders of a hospitality group are users outside day-to-day management, so they mainly rely on the business''s published financial accounting statements."

The statement is true.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Tailored Reports for Managers". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Management accounting reports prepared for managers of a construction contractor must use exactly the same statutory format as the published financial statements."

The statement is false.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Tailored Reports for Managers". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Employees of a construction contractor are not allowed to see any accounting information more often than the once-a-year published financial statements."

The statement is false.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Tailored Reports for Managers". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Lenders of a hospitality group normally receive formal accounting information no more often than once a year, when the financial accounting statements are published."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Tailored Reports for Managers". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Managers of a hospitality group work inside the business and can be given management accounting reports designed around their own questions."

The statement is true.'] WHERE case_id = 'CASE 6.4.054' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Why Employees Read Trading Updates". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Managers of a hospitality group can be supplied with management accounting figures weekly or monthly, well before the annual financial accounting statements are finalised."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Why Employees Read Trading Updates". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Reports prepared for managers of a hospitality group can be laid out however suits the decision at hand, unlike the standardised format required of financial accounting statements."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Why Employees Read Trading Updates". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Employees of a hospitality group work inside the business and can be given management accounting reports designed around their own questions."

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Why Employees Read Trading Updates". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Owners of a hospitality group look at accounting information mainly to judge the return earned on the capital they have invested."

The statement is true.', 'FALSE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

Absolute or misapplied wording conflicts with the rule for "Why Employees Read Trading Updates". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Rejected claim: "Management accounting reports prepared for employees of a construction contractor must use exactly the same statutory format as the published financial statements."

The statement is false.'] WHERE case_id = 'CASE 6.4.055' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Earnings Per Share From Reported Figures 56". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Dividend yield and capital growth are both reasons why investors buy shares, alongside voting rights and the wish to invest in real values that may hold up during inflation."

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 25, \quad \text{Shares} = 891,000
$$

$$
\text{MCap} = 25 \times 891,000 = €22.27\text{ million}
$$

Threshold: exceeds €20.6 million. Actual €22.27 million.

Reading the arithmetic against the claim: market cap €22.27m exceeds €20.6m so the statement holds.

The statement is true.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 81,000 \quad (March)
$$

Threshold: exceeds 56,233. Actual 81,000.

Reading the arithmetic against the claim: peak volume 81,000 exceeds 56,233 so the statement holds.

The statement is true.', 'TRUE — Shares outstanding are an annual stock figure reported beside the price table; the claim is simply whether that figure equals the stated count.

Read shares outstanding from the annual figures attached to the extract:

$$
\text{Shares outstanding} = 891,000
$$

The statement claims exactly 891,000. The extract reports 891,000, which matches the claim.

Reading the arithmetic against the claim: extract reports 891,000 versus claimed 891,000 so the statement holds.

The statement is true.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Earnings Per Share From Reported Figures 56". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "High inventory turnover indicates that goods sell well and do not remain in stock for a long time."

The statement is true.'] WHERE case_id = 'CASE 6.4.056' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Share Price and Market Capitalisation 57". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "A higher stock-exchange quotation for shares already issued benefits selling shareholders, not the corporation''s cash reserves."

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 28, \quad P_{\text{last}} = 36
$$

$$
\frac{36 - 28}{28} = 28.6\%
$$

Threshold: more than 31.5%. Actual 28.6%.

Reading the arithmetic against the claim: the rise is 28.6%, which does not exceed 31.5% so the statement does not hold.

The statement is false.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 28 \times 711,000 = €19.91\text{m}
$$

$$
\text{MCap}_{\text{last}} = 36 \times 711,000 = €25.60\text{m}
$$

$$
\frac{25.60 - 19.91}{19.91} = 28.6\%
$$

Threshold: more than 32.9%. Actual 28.6%.

Reading the arithmetic against the claim: MCap rose 28.6%, which does not exceed 32.9% so the statement does not hold.

The statement is false.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 36, \quad P_{\min} = 28
$$

$$
\frac{36 - 28}{28} = 28.6\%
$$

Threshold: more than 41%. Actual 28.6%.

Reading the arithmetic against the claim: the gap is 28.6%, which does not exceed 41% so the statement does not hold.

The statement is false.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €274\text{ thousand}
$$

The statement claims this amount is below €267 thousand. Actual €274 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €274k is not below €267k so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.4.057' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 19, \quad P_{\text{last}} = 24
$$

$$
\frac{24 - 19}{19} = 26.3\%
$$

Threshold: more than 33.9%. Actual 26.3%.

Reading the arithmetic against the claim: the rise is 26.3%, which does not exceed 33.9% so the statement does not hold.

The statement is false.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 24, \quad P_{\min} = 19
$$

$$
\frac{24 - 19}{19} = 26.3\%
$$

Threshold: more than 36.9%. Actual 26.3%.

Reading the arithmetic against the claim: the gap is 26.3%, which does not exceed 36.9% so the statement does not hold.

The statement is false.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Listed Company Performance Charts 58". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Once shares are already trading on a stock exchange, a rise in their market price does not itself provide the issuing company with additional funds; only shareholders who sell benefit from the high…"

The statement is true.', 'FALSE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 253,000, \quad \text{Shares} = 779,000
$$

$$
\frac{253,000}{779,000} = 32.5\%
$$

Threshold: exceed 37.4%. Actual 32.5%.

Reading the arithmetic against the claim: turnover 32.5% does not exceed 37.4% so the statement does not hold.

The statement is false.', 'FALSE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 80,000 \quad (January)
$$

Threshold: exceeds 86,180. Actual 80,000.

Reading the arithmetic against the claim: peak volume 80,000 does not exceed 86,180 so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.4.058' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 31, \quad P_{\text{last}} = 20
$$

$$
\frac{20 - 31}{31} = -35.5\%
$$

Threshold: more than 23.4%. Actual -35.5%.

Reading the arithmetic against the claim: the rise is -35.5%, which does not exceed 23.4% so the statement does not hold.

The statement is false.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 31 \times 830,000 = €25.73\text{m}
$$

$$
\text{MCap}_{\text{last}} = 20 \times 830,000 = €16.60\text{m}
$$

$$
\frac{16.60 - 25.73}{25.73} = -35.5\%
$$

Threshold: more than 16%. Actual -35.5%.

Reading the arithmetic against the claim: MCap rose -35.5%, which does not exceed 16% so the statement does not hold.

The statement is false.', 'FALSE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 71,000 \quad (May)
$$

Threshold: exceeds 79,688. Actual 71,000.

Reading the arithmetic against the claim: peak volume 71,000 does not exceed 79,688 so the statement does not hold.

The statement is false.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €224\text{ thousand}
$$

The statement claims this amount is below €209 thousand. Actual €224 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €224k is not below €209k so the statement does not hold.

The statement is false.', 'TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Earnings Per Share From Reported Figures 59". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Making a profit alone does not prove sufficient profitability; profitability ratios relate profit to an indicator of business size such as assets, equity or turnover."

The statement is true.'] WHERE case_id = 'CASE 6.4.059' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life).

The wording matches the relevant rule for "Share Price and Market Capitalisation 60". Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation (cost minus residual, spread over useful life). Applied here: "Skipping a dividend in a weak year is legally possible; the main risk is that investors find the shares less attractive if dividends stay unpaid for long."

The statement is true.', 'TRUE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 42, \quad P_{\text{last}} = 52
$$

$$
\frac{52 - 42}{42} = 23.8\%
$$

Threshold: more than 20.2%. Actual 23.8%.

Reading the arithmetic against the claim: the rise is 23.8%, which exceeds 20.2% so the statement holds.

The statement is true.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 52, \quad P_{\min} = 42
$$

$$
\frac{52 - 42}{42} = 23.8\%
$$

Threshold: more than 36.7%. Actual 23.8%.

Reading the arithmetic against the claim: the gap is 23.8%, which does not exceed 36.7% so the statement does not hold.

The statement is false.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 283, \quad \frac{\text{Shares}}{1,000} = 413
$$

$$
EPS = \frac{283}{413} = €0.6852
$$

Threshold: exceeds €0.55. Actual ≈ €0.69.

Reading the arithmetic against the claim: EPS €0.69 exceeds €0.55 so the statement holds.

The statement is true.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 78,000 \quad (February)
$$

Threshold: exceeds 63,983. Actual 78,000.

Reading the arithmetic against the claim: peak volume 78,000 exceeds 63,983 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.4.060' AND tier = 'full';
