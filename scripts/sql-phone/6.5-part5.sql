-- Update expanded explanations for 6.5-part5 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Asset Turnover and Revenue Generation Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The current ratio for a pharmaceutical distributor sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Asset Turnover and Revenue Generation Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Working capital for a utility company is calculated by subtracting current assets from current liabilities."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Asset Turnover and Revenue Generation Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Return on equity for a pharmaceutical distributor relates the profit before interest and tax generated during the period to the equity that owners have invested in the business."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Asset Turnover and Revenue Generation Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A return on capital employed figure for a pharmaceutical distributor carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Asset Turnover and Revenue Generation Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Asset turnover for a pharmaceutical distributor relates revenue earned during the period to the average total assets employed to generate that revenue."

The statement is true.'] WHERE case_id = 'CASE 6.5.101' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 45, \quad \text{Shares} = 758,000
$$

$$
\text{MCap} = 45 \times 758,000 = €34.11\text{ million}
$$

Threshold: exceeds €27.7 million. Actual €34.11 million.

Reading the arithmetic against the claim: market cap €34.11m exceeds €27.7m so the statement holds.

The statement is true.', 'TRUE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 38 \times 758,000 = €28.80\text{m}
$$

$$
\text{MCap}_{\text{last}} = 45 \times 758,000 = €34.11\text{m}
$$

$$
\frac{34.11 - 28.80}{28.80} = 18.4\%
$$

Threshold: more than 10.4%. Actual 18.4%.

Reading the arithmetic against the claim: MCap rose 18.4%, which exceeds 10.4% so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 323,000, \quad \text{Shares} = 758,000
$$

$$
\frac{323,000}{758,000} = 42.6\%
$$

Threshold: exceed 34%. Actual 42.6%.

Reading the arithmetic against the claim: turnover 42.6% exceeds 34% so the statement holds.

The statement is true.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 86,000 \quad (January)
$$

Threshold: exceeds 61,167. Actual 86,000.

Reading the arithmetic against the claim: peak volume 86,000 exceeds 61,167 so the statement holds.

The statement is true.', 'TRUE — Shares outstanding are an annual stock figure reported beside the price table; the claim is simply whether that figure equals the stated count.

Read shares outstanding from the annual figures attached to the extract:

$$
\text{Shares outstanding} = 758,000
$$

The statement claims exactly 758,000. The extract reports 758,000, which matches the claim.

Reading the arithmetic against the claim: extract reports 758,000 versus claimed 758,000 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.102' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 21, \quad P_{\text{last}} = 25
$$

$$
\frac{25 - 21}{21} = 19.0\%
$$

Threshold: more than 22.5%. Actual 19.0%.

Reading the arithmetic against the claim: the rise is 19.0%, which does not exceed 22.5% so the statement does not hold.

The statement is false.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 25, \quad P_{\min} = 20
$$

$$
\frac{25 - 20}{20} = 25.0\%
$$

Threshold: more than 15.7%. Actual 25.0%.

Reading the arithmetic against the claim: the gap is 25.0%, which exceeds 15.7% so the statement holds.

The statement is true.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 21 \times 572,000 = €12.01\text{m}
$$

$$
\text{MCap}_{\text{last}} = 25 \times 572,000 = €14.30\text{m}
$$

$$
\frac{14.30 - 12.01}{12.01} = 19.0\%
$$

Threshold: more than 26.1%. Actual 19.0%.

Reading the arithmetic against the claim: MCap rose 19.0%, which does not exceed 26.1% so the statement does not hold.

The statement is false.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 207,000, \quad \text{Shares} = 572,000
$$

$$
\frac{207,000}{572,000} = 36.2\%
$$

Threshold: exceed 21.4%. Actual 36.2%.

Reading the arithmetic against the claim: turnover 36.2% exceeds 21.4% so the statement holds.

The statement is true.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 55,000 \quad (April)
$$

Threshold: exceeds 49,902. Actual 55,000.

Reading the arithmetic against the claim: peak volume 55,000 exceeds 49,902 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.103' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 28, \quad P_{\min} = 21
$$

$$
\frac{28 - 21}{21} = 33.3\%
$$

Threshold: more than 41.1%. Actual 33.3%.

Reading the arithmetic against the claim: the gap is 33.3%, which does not exceed 41.1% so the statement does not hold.

The statement is false.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €317\text{ thousand}
$$

The statement claims this amount is below €244 thousand. Actual €317 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €317k is not below €244k so the statement does not hold.

The statement is false.', 'TRUE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 21, \quad P_{\text{last}} = 28
$$

$$
\frac{28 - 21}{21} = 33.3\%
$$

Threshold: more than 23.7%. Actual 33.3%.

Reading the arithmetic against the claim: the rise is 33.3%, which exceeds 23.7% so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 311,000, \quad \text{Shares} = 635,000
$$

$$
\frac{311,000}{635,000} = 49.0\%
$$

Threshold: exceed 36%. Actual 49.0%.

Reading the arithmetic against the claim: turnover 49.0% exceeds 36% so the statement holds.

The statement is true.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 86,000 \quad (January)
$$

Threshold: exceeds 54,076. Actual 86,000.

Reading the arithmetic against the claim: peak volume 86,000 exceeds 54,076 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.104' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 31 \times 444,000 = €13.76\text{m}
$$

$$
\text{MCap}_{\text{last}} = 39 \times 444,000 = €17.32\text{m}
$$

$$
\frac{17.32 - 13.76}{13.76} = 25.8\%
$$

Threshold: more than 29.3%. Actual 25.8%.

Reading the arithmetic against the claim: MCap rose 25.8%, which does not exceed 29.3% so the statement does not hold.

The statement is false.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 299, \quad \frac{\text{Shares}}{1,000} = 444
$$

$$
EPS = \frac{299}{444} = €0.6734
$$

Threshold: exceeds €0.63. Actual ≈ €0.67.

Reading the arithmetic against the claim: EPS €0.67 exceeds €0.63 so the statement holds.

The statement is true.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 39, \quad P_{\min} = 31
$$

$$
\frac{39 - 31}{31} = 25.8\%
$$

Threshold: more than 43.1%. Actual 25.8%.

Reading the arithmetic against the claim: the gap is 25.8%, which does not exceed 43.1% so the statement does not hold.

The statement is false.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €299\text{ thousand}
$$

The statement claims this amount is below €237 thousand. Actual €299 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €299k is not below €237k so the statement does not hold.

The statement is false.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 91,000 \quad (January)
$$

Threshold: exceeds 62,783. Actual 91,000.

Reading the arithmetic against the claim: peak volume 91,000 exceeds 62,783 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.105' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Asset Turnover and Revenue Generation in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "A utility company reporting negative working capital always holds more cash than it needs for its daily operations."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Asset Turnover and Revenue Generation in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The equity ratio for a pharmaceutical distributor expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Asset Turnover and Revenue Generation in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "The acid-test ratio for a utility company includes inventory within current assets before comparing the total with current liabilities."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The claim states: If a pharmaceutical distributor draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken. The reason given — current liabilities rise. — fits the chapter rule. Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding.

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Asset Turnover and Revenue Generation in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "A single return on capital employed figure for a utility company is always fully meaningful on its own, without any need to compare it against other years or similar businesses."

The statement is false.'] WHERE case_id = 'CASE 6.5.106' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 25, \quad \text{Shares} = 446,000
$$

$$
\text{MCap} = 25 \times 446,000 = €11.15\text{ million}
$$

Threshold: exceeds €8.5 million. Actual €11.15 million.

Reading the arithmetic against the claim: market cap €11.15m exceeds €8.5m so the statement holds.

The statement is true.', 'TRUE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 20 \times 446,000 = €8.92\text{m}
$$

$$
\text{MCap}_{\text{last}} = 25 \times 446,000 = €11.15\text{m}
$$

$$
\frac{11.15 - 8.92}{8.92} = 25.0\%
$$

Threshold: more than 23.9%. Actual 25.0%.

Reading the arithmetic against the claim: MCap rose 25.0%, which exceeds 23.9% so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 338,000, \quad \text{Shares} = 446,000
$$

$$
\frac{338,000}{446,000} = 75.8\%
$$

Threshold: exceed 33.7%. Actual 75.8%.

Reading the arithmetic against the claim: turnover 75.8% exceeds 33.7% so the statement holds.

The statement is true.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 78,000 \quad (January)
$$

Threshold: exceeds 70,887. Actual 78,000.

Reading the arithmetic against the claim: peak volume 78,000 exceeds 70,887 so the statement holds.

The statement is true.', 'TRUE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €186\text{ thousand}
$$

The statement claims this amount is below €269 thousand. Actual €186 thousand is below that threshold.

Reading the arithmetic against the claim: operating result €186k is below €269k so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.107' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Inventory Turnover and Stock Rotation in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Return on equity for a utility company is calculated by comparing the cash balance on the balance sheet with total liabilities rather than relating profit to equity."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Inventory Turnover and Stock Rotation in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Working capital for a transport operator is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Inventory Turnover and Stock Rotation in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Inventory turnover for a utility company is calculated by dividing revenue by average inventory rather than by relating cost of sales to average inventory."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Inventory Turnover and Stock Rotation in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "The current ratio and the acid-test ratio for a utility company always produce identical results, regardless of how much inventory the business holds."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Inventory Turnover and Stock Rotation in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Working capital for a wholesaler is calculated by subtracting current assets from current liabilities."

The statement is false.'] WHERE case_id = 'CASE 6.5.108' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 29, \quad P_{\text{last}} = 22
$$

$$
\frac{22 - 29}{29} = -24.1\%
$$

Threshold: more than 18.4%. Actual -24.1%.

Reading the arithmetic against the claim: the rise is -24.1%, which does not exceed 18.4% so the statement does not hold.

The statement is false.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 29 \times 817,000 = €23.69\text{m}
$$

$$
\text{MCap}_{\text{last}} = 22 \times 817,000 = €17.97\text{m}
$$

$$
\frac{17.97 - 23.69}{23.69} = -24.1\%
$$

Threshold: more than 27.5%. Actual -24.1%.

Reading the arithmetic against the claim: MCap rose -24.1%, which does not exceed 27.5% so the statement does not hold.

The statement is false.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 29, \quad P_{\min} = 22
$$

$$
\frac{29 - 22}{22} = 31.8\%
$$

Threshold: more than 37%. Actual 31.8%.

Reading the arithmetic against the claim: the gap is 31.8%, which does not exceed 37% so the statement does not hold.

The statement is false.', 'FALSE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 92,000 \quad (May)
$$

Threshold: exceeds 96,324. Actual 92,000.

Reading the arithmetic against the claim: peak volume 92,000 does not exceed 96,324 so the statement does not hold.

The statement is false.', 'TRUE — Shares outstanding are an annual stock figure reported beside the price table; the claim is simply whether that figure equals the stated count.

Read shares outstanding from the annual figures attached to the extract:

$$
\text{Shares outstanding} = 817,000
$$

The statement claims exactly 817,000. The extract reports 817,000, which matches the claim.

Reading the arithmetic against the claim: extract reports 817,000 versus claimed 817,000 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.109' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 31, \quad P_{\text{last}} = 25
$$

$$
\frac{25 - 31}{31} = -19.4\%
$$

Threshold: more than 10.3%. Actual -19.4%.

Reading the arithmetic against the claim: the rise is -19.4%, which does not exceed 10.3% so the statement does not hold.

The statement is false.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 31 \times 708,000 = €21.95\text{m}
$$

$$
\text{MCap}_{\text{last}} = 25 \times 708,000 = €17.70\text{m}
$$

$$
\frac{17.70 - 21.95}{21.95} = -19.4\%
$$

Threshold: more than 9.7%. Actual -19.4%.

Reading the arithmetic against the claim: MCap rose -19.4%, which does not exceed 9.7% so the statement does not hold.

The statement is false.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 31, \quad P_{\min} = 25
$$

$$
\frac{31 - 25}{25} = 24.0\%
$$

Threshold: more than 35.1%. Actual 24.0%.

Reading the arithmetic against the claim: the gap is 24.0%, which does not exceed 35.1% so the statement does not hold.

The statement is false.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €297\text{ thousand}
$$

The statement claims this amount is below €276 thousand. Actual €297 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €297k is not below €276k so the statement does not hold.

The statement is false.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 75,000 \quad (June)
$$

Threshold: exceeds 69,773. Actual 75,000.

Reading the arithmetic against the claim: peak volume 75,000 exceeds 69,773 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.110' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Inventory Turnover and Stock Rotation Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A transport operator is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Inventory Turnover and Stock Rotation Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The current ratio for a transport operator sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Inventory Turnover and Stock Rotation Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Return on equity for a transport operator relates the profit before interest and tax generated during the period to the equity that owners have invested in the business."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Inventory Turnover and Stock Rotation Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A return on capital employed figure for a transport operator carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Inventory Turnover and Stock Rotation Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Asset turnover for a transport operator relates revenue earned during the period to the average total assets employed to generate that revenue."

The statement is true.'] WHERE case_id = 'CASE 6.5.111' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 52, \quad \text{Shares} = 819,000
$$

$$
\text{MCap} = 52 \times 819,000 = €42.59\text{ million}
$$

Threshold: exceeds €33.4 million. Actual €42.59 million.

Reading the arithmetic against the claim: market cap €42.59m exceeds €33.4m so the statement holds.

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 39, \quad P_{\text{last}} = 52
$$

$$
\frac{52 - 39}{39} = 33.3\%
$$

Threshold: more than 34.3%. Actual 33.3%.

Reading the arithmetic against the claim: the rise is 33.3%, which does not exceed 34.3% so the statement does not hold.

The statement is false.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 257,000, \quad \text{Shares} = 819,000
$$

$$
\frac{257,000}{819,000} = 31.4\%
$$

Threshold: exceed 17.6%. Actual 31.4%.

Reading the arithmetic against the claim: turnover 31.4% exceeds 17.6% so the statement holds.

The statement is true.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 52, \quad P_{\min} = 39
$$

$$
\frac{52 - 39}{39} = 33.3\%
$$

Threshold: more than 43.9%. Actual 33.3%.

Reading the arithmetic against the claim: the gap is 33.3%, which does not exceed 43.9% so the statement does not hold.

The statement is false.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €314\text{ thousand}
$$

The statement claims this amount is below €299 thousand. Actual €314 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €314k is not below €299k so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.5.112' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 19 \times 546,000 = €10.37\text{m}
$$

$$
\text{MCap}_{\text{last}} = 24 \times 546,000 = €13.10\text{m}
$$

$$
\frac{13.10 - 10.37}{10.37} = 26.3\%
$$

Threshold: more than 33.1%. Actual 26.3%.

Reading the arithmetic against the claim: MCap rose 26.3%, which does not exceed 33.1% so the statement does not hold.

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 24, \quad \text{Shares} = 546,000
$$

$$
\text{MCap} = 24 \times 546,000 = €13.10\text{ million}
$$

Threshold: exceeds €11.9 million. Actual €13.10 million.

Reading the arithmetic against the claim: market cap €13.10m exceeds €11.9m so the statement holds.

The statement is true.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 285, \quad \frac{\text{Shares}}{1,000} = 546
$$

$$
EPS = \frac{285}{546} = €0.5220
$$

Threshold: exceeds €0.48. Actual ≈ €0.52.

Reading the arithmetic against the claim: EPS €0.52 exceeds €0.48 so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 333,000, \quad \text{Shares} = 546,000
$$

$$
\frac{333,000}{546,000} = 61.0\%
$$

Threshold: exceed 30%. Actual 61.0%.

Reading the arithmetic against the claim: turnover 61.0% exceeds 30% so the statement holds.

The statement is true.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 86,000 \quad (May)
$$

Threshold: exceeds 85,316. Actual 86,000.

Reading the arithmetic against the claim: peak volume 86,000 exceeds 85,316 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.113' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 17, \quad \text{Shares} = 622,000
$$

$$
\text{MCap} = 17 \times 622,000 = €10.57\text{ million}
$$

Threshold: exceeds €10 million. Actual €10.57 million.

Reading the arithmetic against the claim: market cap €10.57m exceeds €10m so the statement holds.

The statement is true.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 294, \quad \frac{\text{Shares}}{1,000} = 622
$$

$$
EPS = \frac{294}{622} = €0.4727
$$

Threshold: exceeds €0.43. Actual ≈ €0.47.

Reading the arithmetic against the claim: EPS €0.47 exceeds €0.43 so the statement holds.

The statement is true.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 29, \quad P_{\min} = 17
$$

$$
\frac{29 - 17}{17} = 70.6\%
$$

Threshold: more than 13%. Actual 70.6%.

Reading the arithmetic against the claim: the gap is 70.6%, which exceeds 13% so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 282,000, \quad \text{Shares} = 622,000
$$

$$
\frac{282,000}{622,000} = 45.3\%
$$

Threshold: exceed 15.4%. Actual 45.3%.

Reading the arithmetic against the claim: turnover 45.3% exceeds 15.4% so the statement holds.

The statement is true.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 78,000 \quad (February)
$$

Threshold: exceeds 65,329. Actual 78,000.

Reading the arithmetic against the claim: peak volume 78,000 exceeds 65,329 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.114' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Inventory Turnover and Stock Rotation for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The equity ratio for a transport operator expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Inventory Turnover and Stock Rotation for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "A wholesaler reporting negative working capital always holds more cash than it needs for its daily operations."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The claim states: If a transport operator draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken. The reason given — current liabilities rise. — fits the chapter rule. Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding.

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Inventory Turnover and Stock Rotation for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "The acid-test ratio for a wholesaler includes inventory within current assets before comparing the total with current liabilities."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Inventory Turnover and Stock Rotation for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Working capital for a software subscription business is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital."

The statement is true.'] WHERE case_id = 'CASE 6.5.115' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Inventory Turnover and Stock Rotation Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A software subscription business is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Inventory Turnover and Stock Rotation Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "A single return on capital employed figure for a wholesaler is always fully meaningful on its own, without any need to compare it against other years or similar businesses."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Inventory Turnover and Stock Rotation Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Return on equity for a wholesaler is calculated by comparing the cash balance on the balance sheet with total liabilities rather than relating profit to equity."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Inventory Turnover and Stock Rotation Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The current ratio for a software subscription business sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Inventory Turnover and Stock Rotation Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Inventory turnover for a wholesaler is calculated by dividing revenue by average inventory rather than by relating cost of sales to average inventory."

The statement is false.'] WHERE case_id = 'CASE 6.5.116' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 20, \quad \text{Shares} = 433,000
$$

$$
\text{MCap} = 20 \times 433,000 = €8.66\text{ million}
$$

Threshold: exceeds €7.2 million. Actual €8.66 million.

Reading the arithmetic against the claim: market cap €8.66m exceeds €7.2m so the statement holds.

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 19, \quad P_{\text{last}} = 20
$$

$$
\frac{20 - 19}{19} = 5.3\%
$$

Threshold: more than 22.8%. Actual 5.3%.

Reading the arithmetic against the claim: the rise is 5.3%, which does not exceed 22.8% so the statement does not hold.

The statement is false.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 19 \times 433,000 = €8.23\text{m}
$$

$$
\text{MCap}_{\text{last}} = 20 \times 433,000 = €8.66\text{m}
$$

$$
\frac{8.66 - 8.23}{8.23} = 5.3\%
$$

Threshold: more than 20.8%. Actual 5.3%.

Reading the arithmetic against the claim: MCap rose 5.3%, which does not exceed 20.8% so the statement does not hold.

The statement is false.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 20, \quad P_{\min} = 17
$$

$$
\frac{20 - 17}{17} = 17.6\%
$$

Threshold: more than 23.9%. Actual 17.6%.

Reading the arithmetic against the claim: the gap is 17.6%, which does not exceed 23.9% so the statement does not hold.

The statement is false.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 271, \quad \frac{\text{Shares}}{1,000} = 433
$$

$$
EPS = \frac{271}{433} = €0.6259
$$

Threshold: exceeds €0.52. Actual ≈ €0.63.

Reading the arithmetic against the claim: EPS €0.63 exceeds €0.52 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.117' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 37, \quad P_{\text{last}} = 41
$$

$$
\frac{41 - 37}{37} = 10.8\%
$$

Threshold: more than 18.7%. Actual 10.8%.

Reading the arithmetic against the claim: the rise is 10.8%, which does not exceed 18.7% so the statement does not hold.

The statement is false.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 37 \times 480,000 = €17.76\text{m}
$$

$$
\text{MCap}_{\text{last}} = 41 \times 480,000 = €19.68\text{m}
$$

$$
\frac{19.68 - 17.76}{17.76} = 10.8\%
$$

Threshold: more than 30.5%. Actual 10.8%.

Reading the arithmetic against the claim: MCap rose 10.8%, which does not exceed 30.5% so the statement does not hold.

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 41, \quad \text{Shares} = 480,000
$$

$$
\text{MCap} = 41 \times 480,000 = €19.68\text{ million}
$$

Threshold: exceeds €14.8 million. Actual €19.68 million.

Reading the arithmetic against the claim: market cap €19.68m exceeds €14.8m so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 353,000, \quad \text{Shares} = 480,000
$$

$$
\frac{353,000}{480,000} = 73.5\%
$$

Threshold: exceed 8.4%. Actual 73.5%.

Reading the arithmetic against the claim: turnover 73.5% exceeds 8.4% so the statement holds.

The statement is true.', 'FALSE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 91,000 \quad (June)
$$

Threshold: exceeds 92,825. Actual 91,000.

Reading the arithmetic against the claim: peak volume 91,000 does not exceed 92,825 so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.5.118' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 19, \quad P_{\text{last}} = 20
$$

$$
\frac{20 - 19}{19} = 5.3\%
$$

Threshold: more than 12.4%. Actual 5.3%.

Reading the arithmetic against the claim: the rise is 5.3%, which does not exceed 12.4% so the statement does not hold.

The statement is false.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 19 \times 420,000 = €7.98\text{m}
$$

$$
\text{MCap}_{\text{last}} = 20 \times 420,000 = €8.40\text{m}
$$

$$
\frac{8.40 - 7.98}{7.98} = 5.3\%
$$

Threshold: more than 10.6%. Actual 5.3%.

Reading the arithmetic against the claim: MCap rose 5.3%, which does not exceed 10.6% so the statement does not hold.

The statement is false.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 20, \quad P_{\min} = 17
$$

$$
\frac{20 - 17}{17} = 17.6\%
$$

Threshold: more than 25.8%. Actual 17.6%.

Reading the arithmetic against the claim: the gap is 17.6%, which does not exceed 25.8% so the statement does not hold.

The statement is false.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €302\text{ thousand}
$$

The statement claims this amount is below €261 thousand. Actual €302 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €302k is not below €261k so the statement does not hold.

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 20, \quad \text{Shares} = 420,000
$$

$$
\text{MCap} = 20 \times 420,000 = €8.40\text{ million}
$$

Threshold: exceeds €7.6 million. Actual €8.40 million.

Reading the arithmetic against the claim: market cap €8.40m exceeds €7.6m so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.119' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Inventory Turnover and Stock Rotation in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Return on equity for a software subscription business relates the profit before interest and tax generated during the period to the equity that owners have invested in the business."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Inventory Turnover and Stock Rotation in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "The current ratio and the acid-test ratio for a wholesaler always produce identical results, regardless of how much inventory the business holds."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Inventory Turnover and Stock Rotation in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A return on capital employed figure for a software subscription business carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Inventory Turnover and Stock Rotation in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Asset turnover for a software subscription business relates revenue earned during the period to the average total assets employed to generate that revenue."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Inventory Turnover and Stock Rotation in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The equity ratio for a software subscription business expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds."

The statement is true.'] WHERE case_id = 'CASE 6.5.120' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 18, \quad \text{Shares} = 480,000
$$

$$
\text{MCap} = 18 \times 480,000 = €8.64\text{ million}
$$

Threshold: exceeds €7.7 million. Actual €8.64 million.

Reading the arithmetic against the claim: market cap €8.64m exceeds €7.7m so the statement holds.

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 30, \quad P_{\text{last}} = 18
$$

$$
\frac{18 - 30}{30} = -40.0\%
$$

Threshold: more than 27.3%. Actual -40.0%.

Reading the arithmetic against the claim: the rise is -40.0%, which does not exceed 27.3% so the statement does not hold.

The statement is false.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 30, \quad P_{\min} = 18
$$

$$
\frac{30 - 18}{18} = 66.7\%
$$

Threshold: more than 25.6%. Actual 66.7%.

Reading the arithmetic against the claim: the gap is 66.7%, which exceeds 25.6% so the statement holds.

The statement is true.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 30 \times 480,000 = €14.40\text{m}
$$

$$
\text{MCap}_{\text{last}} = 18 \times 480,000 = €8.64\text{m}
$$

$$
\frac{8.64 - 14.40}{14.40} = -40.0\%
$$

Threshold: more than 24.6%. Actual -40.0%.

Reading the arithmetic against the claim: MCap rose -40.0%, which does not exceed 24.6% so the statement does not hold.

The statement is false.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 289,000, \quad \text{Shares} = 480,000
$$

$$
\frac{289,000}{480,000} = 60.2\%
$$

Threshold: exceed 38.9%. Actual 60.2%.

Reading the arithmetic against the claim: turnover 60.2% exceeds 38.9% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.121' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Equity Ratio in Financial Structure in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The debt ratio for a software subscription business expresses the proportion of total assets financed through liabilities rather than through owners'' equity."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "The Equity Ratio in Financial Structure in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Working capital for an online retailer is calculated by subtracting current assets from current liabilities."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The claim states: If a software subscription business draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken. The reason given — current liabilities rise. — fits the chapter rule. Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding.

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Equity Ratio in Financial Structure in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Working capital for a medical-device maker is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Equity Ratio in Financial Structure in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A medical-device maker is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account."

The statement is true.'] WHERE case_id = 'CASE 6.5.122' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Equity Ratio in Financial Structure Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The current ratio for a medical-device maker sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Equity Ratio in Financial Structure Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Return on equity for a medical-device maker relates the profit before interest and tax generated during the period to the equity that owners have invested in the business."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Equity Ratio in Financial Structure Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A return on capital employed figure for a medical-device maker carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Equity Ratio in Financial Structure Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Asset turnover for a medical-device maker relates revenue earned during the period to the average total assets employed to generate that revenue."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Equity Ratio in Financial Structure Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The equity ratio for a medical-device maker expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds."

The statement is true.'] WHERE case_id = 'CASE 6.5.123' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 36, \quad P_{\text{last}} = 45
$$

$$
\frac{45 - 36}{36} = 25.0\%
$$

Threshold: more than 8.4%. Actual 25.0%.

Reading the arithmetic against the claim: the rise is 25.0%, which exceeds 8.4% so the statement holds.

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 45, \quad \text{Shares} = 403,000
$$

$$
\text{MCap} = 45 \times 403,000 = €18.14\text{ million}
$$

Threshold: exceeds €14.5 million. Actual €18.14 million.

Reading the arithmetic against the claim: market cap €18.14m exceeds €14.5m so the statement holds.

The statement is true.', 'TRUE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 36 \times 403,000 = €14.51\text{m}
$$

$$
\text{MCap}_{\text{last}} = 45 \times 403,000 = €18.14\text{m}
$$

$$
\frac{18.14 - 14.51}{14.51} = 25.0\%
$$

Threshold: more than 13.5%. Actual 25.0%.

Reading the arithmetic against the claim: MCap rose 25.0%, which exceeds 13.5% so the statement holds.

The statement is true.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 202, \quad \frac{\text{Shares}}{1,000} = 403
$$

$$
EPS = \frac{202}{403} = €0.5012
$$

Threshold: exceeds €0.47. Actual ≈ €0.50.

Reading the arithmetic against the claim: EPS €0.50 exceeds €0.47 so the statement holds.

The statement is true.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 45, \quad P_{\min} = 36
$$

$$
\frac{45 - 36}{36} = 25.0\%
$$

Threshold: more than 12%. Actual 25.0%.

Reading the arithmetic against the claim: the gap is 25.0%, which exceeds 12% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.124' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "The Equity Ratio in Financial Structure for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "A online retailer reporting negative working capital always holds more cash than it needs for its daily operations."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "The Equity Ratio in Financial Structure for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "The acid-test ratio for an online retailer includes inventory within current assets before comparing the total with current liabilities."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Equity Ratio in Financial Structure for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The debt ratio for a medical-device maker expresses the proportion of total assets financed through liabilities rather than through owners'' equity."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The claim states: If a medical-device maker draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken. The reason given — current liabilities rise. — fits the chapter rule. Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding.

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "The Equity Ratio in Financial Structure for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "A single return on capital employed figure for an online retailer is always fully meaningful on its own, without any need to compare it against other years or similar businesses."

The statement is false.'] WHERE case_id = 'CASE 6.5.125' AND tier = 'full';
