-- Update expanded explanations for 6.5-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — On a stock exchange, existing shares change hands between investors.

That transfer does not raise new capital for the issuer; fresh equity cash comes only from primary issues or similar company transactions.

Using the stem facts: "Secondary-market trading changes who owns the shares; it does not, by itself, inject fresh equity cash into the issuing company."

Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding.

The statement is true.', 'FALSE — Asset turnover shows how many times revenue covers average total assets over the year.

Name the identity in words: asset turnover = revenue ÷ average total assets.

$$
\text{Avg assets} = \frac{796 + 983}{2} = 889.5
$$

$$
AT = \frac{919}{889.5} = 1.0332
$$

Claimed above 1.13. Actual 1.03.

Reading the arithmetic against the claim: asset turnover 1.03 versus ''above 1.13'' so the statement does not hold.

The statement is false.', 'FALSE — Receivables turnover shows how many times revenue covers average trade receivables.

Name the identity in words: receivables turnover = revenue ÷ average trade receivables.

$$
\text{Avg receivables} = \frac{111 + 147}{2} = 129
$$

$$
RT = \frac{919}{129} = 7.1240
$$

Threshold: exceeds 10.53. Actual 7.12.

Reading the arithmetic against the claim: receivables turnover 7.12 does not exceed 10.53 so the statement does not hold.

The statement is false.', 'FALSE — Average inventory and average assets are midpoints of the beginning and ending balances on the extract.

Name the identity in words: average-inventory share = average inventory ÷ average total assets.

$$
\text{Avg inventory} = \frac{136 + 184}{2} = 160
$$

$$
\text{Avg assets} = \frac{796 + 983}{2} = 889.5
$$

$$
\frac{160}{889.5} = 18.0\%
$$

Threshold: less than 15.8%. Actual 18.0%.

Reading the arithmetic against the claim: the share is 18.0% versus ''less than 15.8%'' so the statement does not hold.

The statement is false.', 'FALSE — Cost of sales as a share of revenue is the COS-to-revenue ratio.

Name the identity in words: COS share = cost of sales ÷ revenue.

From the extract, cost of sales = 580 and revenue = 919. Plug the figures step by step:

$$
COS\% = \frac{\text{cost of sales}}{\text{revenue}}
$$

$$
COS\% = \frac{580}{919}
$$

$$
COS\% = 63.1\%
$$

Threshold: more than 67.5%. Actual 63.1%.

Reading the arithmetic against the claim: COS share 63.1% does not exceed 67.5% so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.5.001' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Working Capital Fundamentals in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Working capital is defined as current liabilities minus current assets, so a larger current asset balance always reduces working capital."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Working Capital Fundamentals in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "A business with negative working capital automatically holds more cash than it needs for its daily operations."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Working Capital Fundamentals in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Working capital is defined as current assets minus current liabilities, so a business with more current liabilities than current assets reports negative working capital."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Working Capital Fundamentals in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A comfortable liquidity position generally means current assets are large enough to cover current liabilities with some margin to spare, though the exact margin needed varies by sector."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Working Capital Fundamentals in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The current ratio expresses how many times current assets cover current liabilities, so a ratio above one indicates current assets exceed current liabilities."

The statement is true.'] WHERE case_id = 'CASE 6.5.002' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Working Capital Fundamentals Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A current ratio commonly cited as comfortable falls somewhere between one and a half and two, though this guideline should be read alongside the norms of the specific industry."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Working Capital Fundamentals Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A current ratio below one suggests that current liabilities exceed current assets, which can signal difficulty meeting short-term obligations from those assets alone."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Working Capital Fundamentals Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The acid-test ratio removes inventory from current assets before comparing the remainder with current liabilities, producing a stricter measure of immediate liquidity."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Working Capital Fundamentals Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Because inventory can take time to sell and convert into cash, the acid-test ratio gives a more cautious liquidity picture than the current ratio for businesses holding substantial stock."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Working Capital Fundamentals Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Raising a short-term loan to pay suppliers can increase a business''s cash balance while simultaneously increasing current liabilities, so the net effect on working capital may be negative rather th…"

The statement is true.'] WHERE case_id = 'CASE 6.5.003' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Working Capital Fundamentals for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Relying on extended supplier credit increases current liabilities, which can erode working capital even while the cash balance on hand remains unchanged."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Working Capital Fundamentals for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Strengthening working capital on a lasting basis typically calls for long-term finance or genuine operational improvement rather than another round of short-term borrowing."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Working Capital Fundamentals for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "The current ratio expresses how many times current liabilities cover current assets, so a ratio above one means liabilities exceed assets."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Working Capital Fundamentals for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Working capital problems and cash flow problems are related concepts but are not identical, since working capital reflects a balance-sheet position at a point in time while cash flow tracks movemen…"

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Working Capital Fundamentals for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Return on equity relates profit before interest and tax generated during the period to the equity invested by owners, showing how effectively that equity produced a return."

The statement is true.'] WHERE case_id = 'CASE 6.5.004' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Working Capital Fundamentals Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Because return on equity is judged against the risk owners bear by investing in the business, a modest return may still be considered inadequate if the business carries substantial risk."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Working Capital Fundamentals Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Return on capital employed relates profit before interest and tax to the long-term capital employed in the business, combining funds contributed by both owners and long-term lenders."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Working Capital Fundamentals Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Capital employed can be approximated by adding non-current liabilities to equity, representing the long-term funds financing the business."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Working Capital Fundamentals Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A single return on capital employed figure is most informative when set against the same business''s results in earlier years or against similar businesses in the same industry."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Working Capital Fundamentals Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "A current ratio between one and a half and two is an exact legal requirement that every business in every industry must satisfy."

The statement is false.'] WHERE case_id = 'CASE 6.5.005' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Liquidity From the Balance Sheet 6". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Dividend yield and capital growth are both reasons why investors buy shares, alongside voting rights and the wish to invest in real values that may hold up during inflation."

The statement is true.', 'TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 218 + 166 + 87 = 471
$$

$$
CL = 135 + 87 = 222
$$

$$
\text{Current ratio} = \frac{471}{222} = 2.1216
$$

Claimed: exceeds 1.1. Actual 2.12.

Reading the arithmetic against the claim: actual current ratio 2.12 versus ''exceeds 1.1'' so the statement holds.

The statement is true.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 471 and current liabilities total 222:

$$
WC = CA - CL
$$

$$
CA = 471, \quad CL = 222
$$

$$
WC = 471 - 222 = 249
$$

The statement cites working capital of €249 thousand and that it is positive. Calculated WC is 249, which is positive.

Reading the arithmetic against the claim: WC = 249 is positive as claimed so the statement holds.

The statement is true.', 'FALSE — The acid-test (quick) ratio is a stricter liquidity test: inventory is removed from current assets before dividing by current liabilities.

Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = 471, \quad \text{Inventory} = 218, \quad CL = 222
$$

$$
CA - \text{Inventory} = 471 - 218 = 253
$$

$$
\text{Acid-test} = \frac{253}{222} = 1.1396
$$

Threshold: more than 1.34. Actual 1.14.

Reading the arithmetic against the claim: acid-test 1.14 is not more than 1.34 so the statement does not hold.

The statement is false.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 809 and total assets = 1,339. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{809}{1,339}
$$

$$
ER = 60.4\%
$$

Claimed: is below 25.6%. Actual 60.4%.

Reading the arithmetic against the claim: actual equity ratio 60.4% does not match ''is below 25.6%'' so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.5.006' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Working Capital Fundamentals in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "When comparing return measures across two businesses, using the same definition of profit throughout the comparison avoids distorted conclusions."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Working Capital Fundamentals in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Asset turnover relates revenue generated during the period to the average total assets employed to generate that revenue."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Working Capital Fundamentals in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "If revenue grows more slowly than the asset base a business has invested in, asset turnover will decline even while revenue itself keeps rising."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Working Capital Fundamentals in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Using average asset or inventory balances rather than a single year-end figure helps smooth out timing distortions when calculating turnover ratios."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Working Capital Fundamentals in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "A current ratio below one guarantees that a business can comfortably settle every short-term obligation immediately."

The statement is false.'] WHERE case_id = 'CASE 6.5.007' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Receivables turnover shows how many times revenue covers average trade receivables.

Name the identity in words: receivables turnover = revenue ÷ average trade receivables.

$$
\text{Avg receivables} = \frac{118 + 128}{2} = 123
$$

$$
RT = \frac{1,029}{123} = 8.3659
$$

Threshold: exceeds 10.27. Actual 8.37.

Reading the arithmetic against the claim: receivables turnover 8.37 does not exceed 10.27 so the statement does not hold.

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Turnover and Liquidity Extract 8". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Only an issue of new shares by the corporation itself raises equity finance; later trading between investors does not."

The statement is true.', 'FALSE — Collection days convert receivables turnover into an approximate outstanding period.

Name the identity in words: collection days ≈ 365 ÷ receivables turnover.

$$
RT = \frac{1,029}{123} = 8.3659
$$

$$
\text{Days} = \frac{365}{8.3659} = 43.6
$$

Threshold: more than 52 days. Actual 44 days.

Reading the arithmetic against the claim: collection days 44 do not exceed 52 so the statement does not hold.

The statement is false.', 'FALSE — Average inventory and average assets are midpoints of the beginning and ending balances on the extract.

Name the identity in words: average-inventory share = average inventory ÷ average total assets.

$$
\text{Avg inventory} = \frac{130 + 177}{2} = 153.5
$$

$$
\text{Avg assets} = \frac{865 + 931}{2} = 898
$$

$$
\frac{153.5}{898} = 17.1\%
$$

Threshold: less than 13.9%. Actual 17.1%.

Reading the arithmetic against the claim: the share is 17.1% versus ''less than 13.9%'' so the statement does not hold.

The statement is false.', 'FALSE — Compare inventory turnover with receivables turnover, each built from the same extract''s averages.

Name the identities in words: inventory turnover = cost of sales ÷ average inventory; receivables turnover = revenue ÷ average trade receivables.

$$
IT = \frac{692}{153.5} = 4.5081
$$

$$
RT = \frac{1,029}{123} = 8.3659
$$

Inventory turnover is not higher than receivables turnover.

Reading the arithmetic against the claim: IT 4.51 ≤ RT 8.37 so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.5.008' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Asset and Inventory Turnover 9". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A higher stock-exchange quotation for shares already issued benefits selling shareholders, not the corporation''s cash reserves."

The statement is true.', 'TRUE — Inventory turnover = cost of sales ÷ average inventory; a higher figure means stock moves faster and ties up less cash.

Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\text{Avg inventory} = \frac{147 + 155}{2} = 151
$$

$$
IT = \frac{766}{151} = 5.07
$$

That reading matches the definition used in the claim.

Reading the arithmetic against the claim: inventory turnover is about 5.07, consistent with the stated interpretation so the statement holds.

The statement is true.', 'FALSE — Asset turnover shows how many times revenue covers average total assets over the year.

Name the identity in words: asset turnover = revenue ÷ average total assets.

$$
\text{Avg assets} = \frac{804 + 933}{2} = 868.5
$$

$$
AT = \frac{1,116}{868.5} = 1.2850
$$

Claimed above 1.51. Actual 1.28.

Reading the arithmetic against the claim: asset turnover 1.28 versus ''above 1.51'' so the statement does not hold.

The statement is false.', 'TRUE — Revenue is read directly from the extract and compared with the stated euro-thousand threshold — a level check, not a ratio.

From the extract:

$$
\text{Revenue} = €1,116\text{ thousand}
$$

The statement claims revenue exceeds €1,106 thousand. Actual revenue is €1,116 thousand, which exceeds that level.

Reading the arithmetic against the claim: revenue €1,116k exceeds €1,106k so the statement holds.

The statement is true.', 'TRUE — Asset growth on this extract is a direct comparison of beginning and ending total assets.

Read beginning and ending total assets from the extract:

$$
\text{Assets}_{\text{begin}} = 804
$$

$$
\text{Assets}_{\text{end}} = 933
$$

Assets grew during the year (804 → 933).

Reading the arithmetic against the claim: assets move from 804 to 933 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.009' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Liquidity Through the Current Ratio in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "The acid-test ratio adds inventory to current assets before comparing the total with current liabilities, giving a more lenient measure than the current ratio."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Liquidity Through the Current Ratio in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Because inventory converts into cash instantly, the acid-test ratio and the current ratio always produce identical results for any business."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Liquidity Through the Current Ratio in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Inventory turnover relates the cost of sales incurred during the period to the average inventory held over that same period."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The claim states: Raising a short-term loan to pay suppliers always increases working capital. The reason — the cash received immediately outweighs any increase in liabilities. — does not support that label under the chapter definitions. Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding.

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Liquidity Through the Current Ratio in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Extending supplier credit terms has no effect whatsoever on a business''s current liabilities or its working capital."

The statement is false.'] WHERE case_id = 'CASE 6.5.010' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Liquidity Through the Current Ratio Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Working capital can be strengthened permanently only by taking out repeated short-term loans, since long-term finance has no bearing on the current asset and liability position."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Liquidity Through the Current Ratio Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A higher inventory turnover figure generally indicates that stock is sold and replaced more quickly, tying up less money in unsold goods."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Liquidity Through the Current Ratio Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Inventory turnover is typically expressed as a number of times per year, reflecting how often stock is estimated to be replaced."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Liquidity Through the Current Ratio Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The equity ratio expresses equity as a percentage of total assets, showing what proportion of the asset base owners have financed themselves."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Liquidity Through the Current Ratio Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Working capital and cash flow describe exactly the same concept and can always be used interchangeably without any loss of meaning."

The statement is false.'] WHERE case_id = 'CASE 6.5.011' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Liquidity From the Balance Sheet 12". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Dividend yield and capital growth are both reasons why investors buy shares, alongside voting rights and the wish to invest in real values that may hold up during inflation."

The statement is true.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 449 and current liabilities total 189:

$$
WC = CA - CL
$$

$$
CA = 449, \quad CL = 189
$$

$$
WC = 449 - 189 = 260
$$

The statement cites working capital of €260 thousand and that it is positive. Calculated WC is 260, which is positive.

Reading the arithmetic against the claim: WC = 260 is positive as claimed so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Inventory as a percentage of current assets.

Name the identity in words: Inventory share of current assets = Inventory ÷ current assets.

From the extract, Inventory = 230 and current assets = 449. Plug the figures step by step:

$$
Share = \frac{\text{Inventory}}{\text{current assets}}
$$

$$
Share = \frac{230}{449}
$$

$$
Share = 51.2\%
$$

Threshold: more than 46.9%. Actual 51.2%.

Reading the arithmetic against the claim: actual share 51.2% matches ''more than 46.9%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Trade receivables as a percentage of current assets.

Name the identity in words: Trade receivables share of current assets = Trade receivables ÷ current assets.

From the extract, Trade receivables = 140 and current assets = 449. Plug the figures step by step:

$$
Share = \frac{\text{Trade receivables}}{\text{current assets}}
$$

$$
Share = \frac{140}{449}
$$

$$
Share = 31.2\%
$$

Threshold: less than 46.6%. Actual 31.2%.

Reading the arithmetic against the claim: actual share 31.2% matches ''less than 46.6%'' so the statement holds.

The statement is true.', 'TRUE — Long-term financing is equity plus non-current liabilities; the claim compares that pool with non-current assets.

Name the identity in words: surplus = (equity + non-current liabilities) ÷ non-current assets − 1.

$$
\text{Equity} + \text{NCL} = 577 + 461 = 1,038
$$

$$
\text{NCA} = 778
$$

$$
\frac{1,038}{778} - 1 = 33.4\%
$$

Threshold: more than 30.8%. Actual surplus 33.4%.

Reading the arithmetic against the claim: the surplus is 33.4%, which exceeds 30.8% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.012' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Asset and Inventory Turnover 13". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Once shares are already trading on a stock exchange, a rise in their market price does not itself provide the issuing company with additional funds; only shareholders who sell benefit from the high…"

The statement is true.', 'TRUE — Receivables turnover shows how many times revenue covers average trade receivables.

Name the identity in words: receivables turnover = revenue ÷ average trade receivables.

$$
\text{Avg receivables} = \frac{115 + 123}{2} = 119
$$

$$
RT = \frac{1,252}{119} = 10.5210
$$

Threshold: exceeds 7.21. Actual 10.52.

Reading the arithmetic against the claim: receivables turnover 10.52 exceeds 7.21 so the statement holds.

The statement is true.', 'TRUE — Average inventory and average assets are midpoints of the beginning and ending balances on the extract.

Name the identity in words: average-inventory share = average inventory ÷ average total assets.

$$
\text{Avg inventory} = \frac{129 + 196}{2} = 162.5
$$

$$
\text{Avg assets} = \frac{763 + 942}{2} = 852.5
$$

$$
\frac{162.5}{852.5} = 19.1\%
$$

Threshold: less than 19.7%. Actual 19.1%.

Reading the arithmetic against the claim: the share is 19.1% versus ''less than 19.7%'' so the statement holds.

The statement is true.', 'TRUE — Inventory turnover = cost of sales ÷ average inventory; a higher figure means stock moves faster and ties up less cash.

Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\text{Avg inventory} = \frac{129 + 196}{2} = 162.5
$$

$$
IT = \frac{869}{162.5} = 5.35
$$

That reading matches the definition used in the claim.

Reading the arithmetic against the claim: inventory turnover is about 5.35, consistent with the stated interpretation so the statement holds.

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Asset and Inventory Turnover 13". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Inventory grew by more than 32.9% between Year 1 and Year 2."

The statement is true.'] WHERE case_id = 'CASE 6.5.013' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Liquidity Through the Current Ratio for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Return on equity is calculated by comparing a business''s cash balance with its total liabilities rather than relating profit to equity."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Liquidity Through the Current Ratio for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The debt ratio expresses total liabilities as a percentage of total assets, showing what proportion of the asset base has been financed through borrowing."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Liquidity Through the Current Ratio for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Because equity and liabilities together finance the whole of the balance sheet, the equity ratio and the debt ratio move in opposite directions as one rises the other falls correspondingly."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Liquidity Through the Current Ratio for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "A low return on equity is always acceptable regardless of how much risk the owners have taken on by investing in the business."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Liquidity Through the Current Ratio for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Return on capital employed relates profit before interest and tax to inventory levels rather than to the long-term capital financing the business."

The statement is false.'] WHERE case_id = 'CASE 6.5.014' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Liquidity Through the Current Ratio Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A rising debt ratio generally signals greater reliance on borrowed funds and, with it, increased financial risk for the owners of the business."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Liquidity Through the Current Ratio Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Capital employed is calculated by subtracting non-current liabilities from equity rather than adding the two together."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Liquidity Through the Current Ratio Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Financial statement analysis is commonly organised around four broad questions: whether a business can pay its short-term obligations, whether it is sufficiently profitable, how efficiently it uses…"

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Liquidity Through the Current Ratio Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Liquidity analysis is primarily concerned with whether a business can meet its short-term obligations as they fall due."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Liquidity Through the Current Ratio Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Profitability analysis judges profit not in isolation but in relation to the size of the equity or capital employed that generated it."

The statement is true.'] WHERE case_id = 'CASE 6.5.015' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Liquidity Through the Current Ratio in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "A single return on capital employed figure is always fully meaningful on its own and requires no comparison with other years or similar businesses."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Liquidity Through the Current Ratio in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Comparing return measures calculated using different definitions of profit across two businesses always produces a fair and reliable comparison."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Liquidity Through the Current Ratio in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Financial efficiency analysis asks how effectively a business converts the assets it holds into revenue."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Liquidity Through the Current Ratio in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Asset turnover relates profit for the year to average total assets rather than relating revenue to those assets."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Liquidity Through the Current Ratio in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Asset turnover automatically rises whenever a business adds more assets, regardless of what happens to revenue."

The statement is false.'] WHERE case_id = 'CASE 6.5.016' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 481 and total assets = 1,043. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{481}{1,043}
$$

$$
ER = 46.1\%
$$

Claimed: is below 39.4%. Actual 46.1%.

Reading the arithmetic against the claim: actual equity ratio 46.1% does not match ''is below 39.4%'' so the statement does not hold.

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Balance Sheet Structure Review 17". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A higher stock-exchange quotation for shares already issued benefits selling shareholders, not the corporation''s cash reserves."

The statement is true.', 'TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 96 + 130 + 114 = 340
$$

$$
CL = 133 + 61 = 194
$$

$$
\text{Current ratio} = \frac{340}{194} = 1.7526
$$

Claimed: exceeds 1.09. Actual 1.75.

Reading the arithmetic against the claim: actual current ratio 1.75 versus ''exceeds 1.09'' so the statement holds.

The statement is true.', 'FALSE — The debt ratio places debt against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: debt ratio = debt ÷ total assets.

From the extract, debt = 562 and total assets = 1,043. Plug the figures step by step:

$$
DR = \frac{\text{debt}}{\text{total assets}}
$$

$$
DR = \frac{562}{1,043}
$$

$$
DR = 53.9\%
$$

Claimed: exceeds 76.9%. Actual 53.9%.

Reading the arithmetic against the claim: actual debt ratio 53.9% does not match ''exceeds 76.9%'' so the statement does not hold.

The statement is false.', 'FALSE — This is a composition claim: express Inventory as a percentage of current assets.

Name the identity in words: Inventory share of current assets = Inventory ÷ current assets.

From the extract, Inventory = 96 and current assets = 340. Plug the figures step by step:

$$
Share = \frac{\text{Inventory}}{\text{current assets}}
$$

$$
Share = \frac{96}{340}
$$

$$
Share = 28.2\%
$$

Threshold: more than 31%. Actual 28.2%.

Reading the arithmetic against the claim: actual share 28.2% does not match ''more than 31%'' so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.5.017' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Asset turnover shows how many times revenue covers average total assets over the year.

Name the identity in words: asset turnover = revenue ÷ average total assets.

$$
\text{Avg assets} = \frac{886 + 933}{2} = 909.5
$$

$$
AT = \frac{996}{909.5} = 1.0951
$$

Claimed above 1.29. Actual 1.10.

Reading the arithmetic against the claim: asset turnover 1.10 versus ''above 1.29'' so the statement does not hold.

The statement is false.', 'FALSE — Receivables turnover shows how many times revenue covers average trade receivables.

Name the identity in words: receivables turnover = revenue ÷ average trade receivables.

$$
\text{Avg receivables} = \frac{99 + 147}{2} = 123
$$

$$
RT = \frac{996}{123} = 8.0976
$$

Threshold: exceeds 9.83. Actual 8.10.

Reading the arithmetic against the claim: receivables turnover 8.10 does not exceed 9.83 so the statement does not hold.

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Turnover and Liquidity Extract 18". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Voting rights ordinarily attach to common shares, while preferred shareholders usually accept limited voting rights in return for a preferential dividend."

The statement is true.', 'FALSE — Average inventory and average assets are midpoints of the beginning and ending balances on the extract.

Name the identity in words: average-inventory share = average inventory ÷ average total assets.

$$
\text{Avg inventory} = \frac{136 + 194}{2} = 165
$$

$$
\text{Avg assets} = \frac{886 + 933}{2} = 909.5
$$

$$
\frac{165}{909.5} = 18.1\%
$$

Threshold: less than 13.2%. Actual 18.1%.

Reading the arithmetic against the claim: the share is 18.1% versus ''less than 13.2%'' so the statement does not hold.

The statement is false.', 'FALSE — Revenue is read directly from the extract and compared with the stated euro-thousand threshold — a level check, not a ratio.

From the extract:

$$
\text{Revenue} = €996\text{ thousand}
$$

The statement claims revenue exceeds €1,029 thousand. Actual revenue is €996 thousand, which does not exceed that level.

Reading the arithmetic against the claim: revenue €996k does not exceed €1,029k so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.5.018' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Acid-Test Liquidity Check in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Financial structure analysis examines the balance between funds contributed by owners and funds borrowed from lenders."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Acid-Test Liquidity Check in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Comparing a business''s ratios with those of close competitors in the same industry provides a benchmark that a single isolated figure cannot offer."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Acid-Test Liquidity Check in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Tracking the same ratio for one business across several consecutive years can reveal a trend that a single year''s figure would conceal."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Acid-Test Liquidity Check in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Applying liquidity or gearing benchmarks drawn from an unrelated industry to a business in a very different sector can produce a misleading assessment."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Acid-Test Liquidity Check in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Because liquidity, profitability, financial efficiency and financial structure each capture a different dimension of performance, a rounded assessment of a business draws on all four rather than an…"

The statement is true.'] WHERE case_id = 'CASE 6.5.019' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Turnover and Liquidity Extract 20". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Dividend yield and capital growth are both reasons why investors buy shares, alongside voting rights and the wish to invest in real values that may hold up during inflation."

The statement is true.', 'TRUE — Inventory turnover relates cost of sales to average inventory held.

Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\text{Avg inventory} = \frac{158 + 155}{2} = 156.5
$$

$$
IT = \frac{625}{156.5} = 3.9936
$$

Claimed below 6.24. Actual 3.99.

Reading the arithmetic against the claim: inventory turnover 3.99 versus ''below 6.24'' so the statement holds.

The statement is true.', 'FALSE — Asset turnover shows how many times revenue covers average total assets over the year.

Name the identity in words: asset turnover = revenue ÷ average total assets.

$$
\text{Avg assets} = \frac{836 + 972}{2} = 904
$$

$$
AT = \frac{901}{904} = 0.9967
$$

Claimed above 1.18. Actual 1.00.

Reading the arithmetic against the claim: asset turnover 1.00 versus ''above 1.18'' so the statement does not hold.

The statement is false.', 'FALSE — Receivables turnover shows how many times revenue covers average trade receivables.

Name the identity in words: receivables turnover = revenue ÷ average trade receivables.

$$
\text{Avg receivables} = \frac{113 + 134}{2} = 123.5
$$

$$
RT = \frac{901}{123.5} = 7.2955
$$

Threshold: exceeds 10.47. Actual 7.30.

Reading the arithmetic against the claim: receivables turnover 7.30 does not exceed 10.47 so the statement does not hold.

The statement is false.', 'TRUE — Inventory turnover = cost of sales ÷ average inventory; a higher figure means stock moves faster and ties up less cash.

Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\text{Avg inventory} = \frac{158 + 155}{2} = 156.5
$$

$$
IT = \frac{625}{156.5} = 3.99
$$

That reading matches the definition used in the claim.

Reading the arithmetic against the claim: inventory turnover is about 3.99, consistent with the stated interpretation so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.020' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 166 + 107 + 114 = 387
$$

$$
CL = 152 + 70 = 222
$$

$$
\text{Current ratio} = \frac{387}{222} = 1.7432
$$

Claimed: exceeds 1.86. Actual 1.74.

Reading the arithmetic against the claim: actual current ratio 1.74 versus ''exceeds 1.86'' so the statement does not hold.

The statement is false.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 685 and total assets = 1,197. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{685}{1,197}
$$

$$
ER = 57.2\%
$$

Claimed: is below 27.7%. Actual 57.2%.

Reading the arithmetic against the claim: actual equity ratio 57.2% does not match ''is below 27.7%'' so the statement does not hold.

The statement is false.', 'TRUE — On a stock exchange, existing shares change hands between investors.

That transfer does not raise new capital for the issuer; fresh equity cash comes only from primary issues or similar company transactions.

Using the stem facts: "Secondary-market trading changes who owns the shares; it does not, by itself, inject fresh equity cash into the issuing company."

Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding.

The statement is true.', 'FALSE — The debt ratio places debt against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: debt ratio = debt ÷ total assets.

From the extract, debt = 512 and total assets = 1,197. Plug the figures step by step:

$$
DR = \frac{\text{debt}}{\text{total assets}}
$$

$$
DR = \frac{512}{1,197}
$$

$$
DR = 42.8\%
$$

Claimed: exceeds 54.7%. Actual 42.8%.

Reading the arithmetic against the claim: actual debt ratio 42.8% does not match ''exceeds 54.7%'' so the statement does not hold.

The statement is false.', 'FALSE — This is a composition claim: express Buildings as a percentage of total assets.

Name the identity in words: Buildings share of total assets = Buildings ÷ total assets.

From the extract, Buildings = 471 and total assets = 1,197. Plug the figures step by step:

$$
Share = \frac{\text{Buildings}}{\text{total assets}}
$$

$$
Share = \frac{471}{1,197}
$$

$$
Share = 39.3\%
$$

Threshold: more than 44.2%. Actual 39.3%.

Reading the arithmetic against the claim: actual share 39.3% does not match ''more than 44.2%'' so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.5.021' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Acid-Test Liquidity Check Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A business carrying large seasonal inventories can show a materially lower acid-test ratio than its current ratio would suggest, even when its overall liquidity position is otherwise adequate."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Acid-Test Liquidity Check Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Lenders sometimes write minimum liquidity or gearing requirements into loan agreements, using ratios such as the current ratio or the debt ratio to monitor ongoing risk."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Acid-Test Liquidity Check Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Negative working capital is not automatically a sign of financial distress for a business that collects cash from customers well before it must pay its own suppliers."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Acid-Test Liquidity Check Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A business can report a profit for the year and still face a liquidity squeeze if that profit is tied up in inventory or receivables rather than held as cash."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Acid-Test Liquidity Check Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Return on equity and return on capital employed both start from profit before interest and tax but relate it to a different capital base, owners'' equity in one case and total long-term capital in t…"

The statement is true.'] WHERE case_id = 'CASE 6.5.022' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Acid-Test Liquidity Check for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A firm''s inventory turnover and asset turnover can move in different directions in the same year if inventory management improves while overall investment in non-current assets expands."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "The Acid-Test Liquidity Check for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Using a single year-end balance instead of an average figure never distorts a turnover ratio calculation."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "The Acid-Test Liquidity Check for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Inventory turnover relates revenue to average inventory rather than relating cost of sales to average inventory."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "The Acid-Test Liquidity Check for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "A higher inventory turnover figure generally indicates that more money is being tied up in unsold stock for longer periods."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "The Acid-Test Liquidity Check for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Inventory turnover is always expressed in currency units rather than as a number of times per year."

The statement is false.'] WHERE case_id = 'CASE 6.5.023' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Acid-Test Liquidity Check Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Working capital for a supermarket chain is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Acid-Test Liquidity Check Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A supermarket chain is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Acid-Test Liquidity Check Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The current ratio for a supermarket chain sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "The Acid-Test Liquidity Check Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "The equity ratio expresses total liabilities as a percentage of total assets rather than expressing equity as a percentage of total assets."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "The Acid-Test Liquidity Check Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "The equity ratio and the debt ratio always move in the same direction, both rising or both falling together."

The statement is false.'] WHERE case_id = 'CASE 6.5.024' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Collection days convert receivables turnover into an approximate outstanding period.

Name the identity in words: collection days ≈ 365 ÷ receivables turnover.

$$
RT = \frac{1,288}{140} = 9.2000
$$

$$
\text{Days} = \frac{365}{9.2000} = 39.7
$$

Threshold: more than 53 days. Actual 40 days.

Reading the arithmetic against the claim: collection days 40 do not exceed 53 so the statement does not hold.

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Asset and Inventory Turnover 25". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Inventory grew by more than 36.8% between Year 1 and Year 2."

The statement is false.', 'FALSE — Receivables growth compares ending with beginning trade receivables.

Name the identity in words: growth = (ending − beginning) ÷ beginning.

$$
R_{0} = 140, \quad R_{1} = 140
$$

$$
\frac{140 - 140}{140} = 0.0\%
$$

Threshold: more than 19.4%. Actual 0.0%.

Reading the arithmetic against the claim: growth 0.0% does not exceed 19.4% so the statement does not hold.

The statement is false.', 'TRUE — On a stock exchange, existing shares change hands between investors.

That transfer does not raise new capital for the issuer; fresh equity cash comes only from primary issues or similar company transactions.

Using the stem facts: "Secondary-market trading changes who owns the shares; it does not, by itself, inject fresh equity cash into the issuing company."

Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding.

The statement is true.', 'TRUE — Asset turnover shows how many times revenue covers average total assets over the year.

Name the identity in words: asset turnover = revenue ÷ average total assets.

$$
\text{Avg assets} = \frac{790 + 1,050}{2} = 920
$$

$$
AT = \frac{1,288}{920} = 1.4000
$$

Claimed above 1.14. Actual 1.40.

Reading the arithmetic against the claim: asset turnover 1.40 versus ''above 1.14'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.025' AND tier = 'full';
