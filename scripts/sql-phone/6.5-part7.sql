-- Update expanded explanations for 6.5-part7 (10 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 315, \quad \frac{\text{Shares}}{1,000} = 408
$$

$$
EPS = \frac{315}{408} = €0.7721
$$

Threshold: exceeds €0.73. Actual ≈ €0.77.

Reading the arithmetic against the claim: EPS €0.77 exceeds €0.73 so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 350,000, \quad \text{Shares} = 408,000
$$

$$
\frac{350,000}{408,000} = 85.8\%
$$

Threshold: exceed 25%. Actual 85.8%.

Reading the arithmetic against the claim: turnover 85.8% exceeds 25% so the statement holds.

The statement is true.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 74,000 \quad (June)
$$

Threshold: exceeds 67,570. Actual 74,000.

Reading the arithmetic against the claim: peak volume 74,000 exceeds 67,570 so the statement holds.

The statement is true.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 28, \quad P_{\min} = 22
$$

$$
\frac{28 - 22}{22} = 27.3\%
$$

Threshold: more than 29.8%. Actual 27.3%.

Reading the arithmetic against the claim: the gap is 27.3%, which does not exceed 29.8% so the statement does not hold.

The statement is false.', 'TRUE — Shares outstanding are an annual stock figure reported beside the price table; the claim is simply whether that figure equals the stated count.

Read shares outstanding from the annual figures attached to the extract:

$$
\text{Shares outstanding} = 408,000
$$

The statement claims exactly 408,000. The extract reports 408,000, which matches the claim.

Reading the arithmetic against the claim: extract reports 408,000 versus claimed 408,000 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.151' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 28, \quad P_{\text{last}} = 35
$$

$$
\frac{35 - 28}{28} = 25.0\%
$$

Threshold: more than 13.6%. Actual 25.0%.

Reading the arithmetic against the claim: the rise is 25.0%, which exceeds 13.6% so the statement holds.

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 35, \quad \text{Shares} = 644,000
$$

$$
\text{MCap} = 35 \times 644,000 = €22.54\text{ million}
$$

Threshold: exceeds €19.3 million. Actual €22.54 million.

Reading the arithmetic against the claim: market cap €22.54m exceeds €19.3m so the statement holds.

The statement is true.', 'FALSE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 87,000 \quad (June)
$$

Threshold: exceeds 93,396. Actual 87,000.

Reading the arithmetic against the claim: peak volume 87,000 does not exceed 93,396 so the statement does not hold.

The statement is false.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 35, \quad P_{\min} = 28
$$

$$
\frac{35 - 28}{28} = 25.0\%
$$

Threshold: more than 17.6%. Actual 25.0%.

Reading the arithmetic against the claim: the gap is 25.0%, which exceeds 17.6% so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 384,000, \quad \text{Shares} = 644,000
$$

$$
\frac{384,000}{644,000} = 59.6\%
$$

Threshold: exceed 27.3%. Actual 59.6%.

Reading the arithmetic against the claim: turnover 59.6% exceeds 27.3% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.152' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Four Pillars of Ratio Analysis in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The current ratio for a publishing house sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "The Four Pillars of Ratio Analysis in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "A transport operator reporting negative working capital always holds more cash than it needs for its daily operations."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "The Four Pillars of Ratio Analysis in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "The acid-test ratio for a transport operator includes inventory within current assets before comparing the total with current liabilities."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "The Four Pillars of Ratio Analysis in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "A single return on capital employed figure for a transport operator is always fully meaningful on its own, without any need to compare it against other years or similar businesses."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "The Four Pillars of Ratio Analysis in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Return on equity for a transport operator is calculated by comparing the cash balance on the balance sheet with total liabilities rather than relating profit to equity."

The statement is false.'] WHERE case_id = 'CASE 6.5.153' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 33, \quad P_{\text{last}} = 35
$$

$$
\frac{35 - 33}{33} = 6.1\%
$$

Threshold: more than 27%. Actual 6.1%.

Reading the arithmetic against the claim: the rise is 6.1%, which does not exceed 27% so the statement does not hold.

The statement is false.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 33 \times 582,000 = €19.21\text{m}
$$

$$
\text{MCap}_{\text{last}} = 35 \times 582,000 = €20.37\text{m}
$$

$$
\frac{20.37 - 19.21}{19.21} = 6.1\%
$$

Threshold: more than 11.8%. Actual 6.1%.

Reading the arithmetic against the claim: MCap rose 6.1%, which does not exceed 11.8% so the statement does not hold.

The statement is false.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 35, \quad P_{\min} = 30
$$

$$
\frac{35 - 30}{30} = 16.7\%
$$

Threshold: more than 28.8%. Actual 16.7%.

Reading the arithmetic against the claim: the gap is 16.7%, which does not exceed 28.8% so the statement does not hold.

The statement is false.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 358,000, \quad \text{Shares} = 582,000
$$

$$
\frac{358,000}{582,000} = 61.5\%
$$

Threshold: exceed 18.9%. Actual 61.5%.

Reading the arithmetic against the claim: turnover 61.5% exceeds 18.9% so the statement holds.

The statement is true.', 'FALSE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 94,000 \quad (February)
$$

Threshold: exceeds 96,788. Actual 94,000.

Reading the arithmetic against the claim: peak volume 94,000 does not exceed 96,788 so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.5.154' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 41, \quad P_{\min} = 33
$$

$$
\frac{41 - 33}{33} = 24.2\%
$$

Threshold: more than 24.3%. Actual 24.2%.

Reading the arithmetic against the claim: the gap is 24.2%, which does not exceed 24.3% so the statement does not hold.

The statement is false.', 'TRUE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 33 \times 435,000 = €14.36\text{m}
$$

$$
\text{MCap}_{\text{last}} = 41 \times 435,000 = €17.84\text{m}
$$

$$
\frac{17.84 - 14.36}{14.36} = 24.2\%
$$

Threshold: more than 23.8%. Actual 24.2%.

Reading the arithmetic against the claim: MCap rose 24.2%, which exceeds 23.8% so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 350,000, \quad \text{Shares} = 435,000
$$

$$
\frac{350,000}{435,000} = 80.5\%
$$

Threshold: exceed 34.3%. Actual 80.5%.

Reading the arithmetic against the claim: turnover 80.5% exceeds 34.3% so the statement holds.

The statement is true.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €256\text{ thousand}
$$

The statement claims this amount is below €221 thousand. Actual €256 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €256k is not below €221k so the statement does not hold.

The statement is false.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 88,000 \quad (January)
$$

Threshold: exceeds 58,884. Actual 88,000.

Reading the arithmetic against the claim: peak volume 88,000 exceeds 58,884 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.155' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Four Pillars of Ratio Analysis Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Return on equity for a publishing house relates the profit before interest and tax generated during the period to the equity that owners have invested in the business."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Four Pillars of Ratio Analysis Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A return on capital employed figure for a publishing house carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Four Pillars of Ratio Analysis Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Asset turnover for a publishing house relates revenue earned during the period to the average total assets employed to generate that revenue."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Four Pillars of Ratio Analysis Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The equity ratio for a publishing house expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The claim states: If a publishing house draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken. The reason given — current liabilities rise. — fits the chapter rule. Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding.

The statement is true.'] WHERE case_id = 'CASE 6.5.156' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Four Pillars of Ratio Analysis for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Working capital for a telecommunications provider is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Four Pillars of Ratio Analysis for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A telecommunications provider is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Four Pillars of Ratio Analysis for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The current ratio for a telecommunications provider sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "The Four Pillars of Ratio Analysis for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Inventory turnover for a transport operator is calculated by dividing revenue by average inventory rather than by relating cost of sales to average inventory."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Four Pillars of Ratio Analysis for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Return on equity for a telecommunications provider relates the profit before interest and tax generated during the period to the equity that owners have invested in the business."

The statement is true.'] WHERE case_id = 'CASE 6.5.157' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 14, \quad \text{Shares} = 769,000
$$

$$
\text{MCap} = 14 \times 769,000 = €10.77\text{ million}
$$

Threshold: exceeds €8.7 million. Actual €10.77 million.

Reading the arithmetic against the claim: market cap €10.77m exceeds €8.7m so the statement holds.

The statement is true.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 21, \quad P_{\min} = 14
$$

$$
\frac{21 - 14}{14} = 50.0\%
$$

Threshold: more than 39.6%. Actual 50.0%.

Reading the arithmetic against the claim: the gap is 50.0%, which exceeds 39.6% so the statement holds.

The statement is true.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 21 \times 769,000 = €16.15\text{m}
$$

$$
\text{MCap}_{\text{last}} = 14 \times 769,000 = €10.77\text{m}
$$

$$
\frac{10.77 - 16.15}{16.15} = -33.3\%
$$

Threshold: more than 16.6%. Actual -33.3%.

Reading the arithmetic against the claim: MCap rose -33.3%, which does not exceed 16.6% so the statement does not hold.

The statement is false.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 359,000, \quad \text{Shares} = 769,000
$$

$$
\frac{359,000}{769,000} = 46.7\%
$$

Threshold: exceed 20.4%. Actual 46.7%.

Reading the arithmetic against the claim: turnover 46.7% exceeds 20.4% so the statement holds.

The statement is true.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 87,000 \quad (February)
$$

Threshold: exceeds 57,679. Actual 87,000.

Reading the arithmetic against the claim: peak volume 87,000 exceeds 57,679 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.158' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Four Pillars of Ratio Analysis Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A return on capital employed figure for a telecommunications provider carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "The Four Pillars of Ratio Analysis Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "The current ratio and the acid-test ratio for a transport operator always produce identical results, regardless of how much inventory the business holds."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Four Pillars of Ratio Analysis Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Asset turnover for a telecommunications provider relates revenue earned during the period to the average total assets employed to generate that revenue."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Four Pillars of Ratio Analysis Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The equity ratio for a telecommunications provider expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The claim states: If a telecommunications provider draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken. The reason given — current liabilities rise. — fits the chapter rule. Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding.

The statement is true.'] WHERE case_id = 'CASE 6.5.159' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 298, \quad \frac{\text{Shares}}{1,000} = 447
$$

$$
EPS = \frac{298}{447} = €0.6667
$$

Threshold: exceeds €0.61. Actual ≈ €0.67.

Reading the arithmetic against the claim: EPS €0.67 exceeds €0.61 so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 276,000, \quad \text{Shares} = 447,000
$$

$$
\frac{276,000}{447,000} = 61.7\%
$$

Threshold: exceed 16.1%. Actual 61.7%.

Reading the arithmetic against the claim: turnover 61.7% exceeds 16.1% so the statement holds.

The statement is true.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 34 \times 447,000 = €15.20\text{m}
$$

$$
\text{MCap}_{\text{last}} = 43 \times 447,000 = €19.22\text{m}
$$

$$
\frac{19.22 - 15.20}{15.20} = 26.5\%
$$

Threshold: more than 28.5%. Actual 26.5%.

Reading the arithmetic against the claim: MCap rose 26.5%, which does not exceed 28.5% so the statement does not hold.

The statement is false.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €298\text{ thousand}
$$

The statement claims this amount is below €251 thousand. Actual €298 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €298k is not below €251k so the statement does not hold.

The statement is false.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 79,000 \quad (January)
$$

Threshold: exceeds 51,658. Actual 79,000.

Reading the arithmetic against the claim: peak volume 79,000 exceeds 51,658 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.160' AND tier = 'full';
