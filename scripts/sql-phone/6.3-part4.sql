-- Update expanded explanations for 6.3-part4 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Return on equity ≈ 29.0%.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Return on capital employed ≈ 16.5%.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Cash conversion ≈ 92.8% of the operating result.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Equity ratio = total equity / total assets.

527 / 1367 ≈ 38.6%

The claim says the ratio exceeds 36.5%. We have about 38.6%, which matches that comparison.

The statement is true.', 'Inventory are about 15.6% of total assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.3.076' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Revenue changed by about 15.3% between the two years.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Interest coverage in Year 1 ≈ 12.7 times.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Operating margin in year 2 ≈ 28.1%.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Effective tax rate in Year 1 ≈ 19.5%.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Profit moved from 173 to 194.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.3.077' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Inventory changed by about 17.0% between the two years.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Trade payables changed by about 13.3% between the two years.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Non-current liabilities are about 110.1% of equity in Year 1.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Non-current liabilities are about 114.9% of equity in Year 2.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current ratio in Year 2 is about 1.17.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.3.078' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Current assets = 339

Current liabilities gather the short-term claims:

Current liabilities = 265

Current ratio = 339 / 265 ≈ 1.28

The claim says the ratio below 0.74. We have about 1.28, which does not match that comparison.

The statement is false.', 'Working capital = current assets minus current liabilities.

339 - 265 = 74

The claim cites 74. We have 74, so the figures line up.

The statement is true.', 'Acid-test ratio ≈ 0.87.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Equity ratio = total equity / total assets.

446 / 1018 ≈ 43.8%

The claim says the ratio below 26.4%. We have about 43.8%, which does not match that comparison.

The statement is false.', 'Apply the case evidence: Debt ratio ≈ 56.2%. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.3.079' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Finance costs moved from 16 to 20; operating result moved from 327 to 364.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'The operating result changed by about 11.3% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Interest coverage in Year 1 ≈ 20.4 times.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Effective tax rate in year 1 ≈ 24.0%.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Actual revenue growth ≈ 13.8%.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.3.080' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Fewer shares increase earnings per share for an unchanged profit.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Market capitalisation ≈ €27.9 million.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Earnings per share ≈ €0.34.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Apply the case evidence: Price change ≈ 7.9%. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Apply the case evidence: €25.9m → €27.9m. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.3.081' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Fewer shares increase earnings per share for an unchanged profit.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'From the figures or classification rule involved, price change ≈ 7.9%. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Market capitalisation ≈ €17.1 million.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'From the figures or classification rule involved, €15.9m → €17.1m. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'From the figures or classification rule involved, range €35-€41. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.3.082' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Comparative context matters for return ratios.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Apply the case evidence: Price change ≈ 26.1%. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Apply the case evidence: €11.8m → €14.9m. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Apply the case evidence: Range €23-€29. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Operating result = 287.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.3.083' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Price change ≈ -28.6%.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventories are left out of the acid-test calculation.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'From the figures or classification rule involved, €26.3m → €18.8m. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Market capitalisation ≈ €18.8 million.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Turnover ≈ 50.3% of shares outstanding.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.3.084' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Apply the case evidence: Price change ≈ 13.2%. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Liquidity is about timely payment of obligations.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'From the figures or classification rule involved, €25.5m → €28.9m. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Peak monthly volume = 90,000.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Operating result = 266.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.3.085' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Secondary trading does not raise new company funds.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Market capitalisation ≈ €20.6 million.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Turnover ≈ 52.4% of shares outstanding.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Shares outstanding = 763,000.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Dividends are not a mandatory annual cash outflow.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.3.086' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Dividends are not a mandatory annual cash outflow.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Market capitalisation ≈ €20.9 million.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Turnover ≈ 66.8% of shares outstanding.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Shares outstanding = 614,000.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Fast inventory turnover signals healthy stock movement.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.3.087' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Common shares vote; preferred shares usually emphasise dividend priority.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Market capitalisation ≈ €23.0 million.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Apply the case evidence: €19.2m → €23.0m. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Apply the case evidence: Price change ≈ 20.0%. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Turnover ≈ 44.5% of shares outstanding.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.3.088' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The asset mix directly reflects capital intensity; the balance is not irrelevant.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Cost of sales reflects direct production costs only, not general administrative wages.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Covering long-term assets mainly with current liabilities is considered risky, not sound financing.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'The asset mix directly reflects capital intensity; the balance is not irrelevant.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Distribution wages are incurred after production and are not part of cost of sales.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.3.089' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Common shares vote; preferred shares usually trade voting rights for a higher dividend.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Apply the case evidence: Price change ≈ 35.7%. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Market capitalisation ≈ €42.1 million.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Apply the case evidence: €31.0m → €42.1m. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'From the figures or classification rule involved, range €42-€57. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.3.090' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['From the figures or classification rule involved, price change ≈ 25.0%. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventories are left out of the acid-test calculation.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Operating result = 265.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Market capitalisation ≈ €21.0 million.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Apply the case evidence: Range €28-€35. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.3.091' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Selling costs occur after production and are excluded from cost of sales.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Direct production or acquisition costs are exactly what cost of sales is meant to capture.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Cost of sales reflects direct production costs only, not general administrative wages.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Distribution wages are incurred after production and are not part of cost of sales.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Covering long-term assets mainly with current liabilities is considered risky, not sound financing.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.3.092' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Positive working capital supports day-to-day payment capacity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Apply the case evidence: €18.3m → €19.0m. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Market capitalisation ≈ €19.0 million.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Turnover ≈ 52.3% of shares outstanding.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Peak monthly volume = 87,000.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.3.093' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Selling costs occur after production and are excluded from cost of sales.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'The asset mix directly reflects capital intensity; the balance is not irrelevant.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Direct production or acquisition costs are exactly what cost of sales is meant to capture.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Cost of sales reflects direct production costs only, not general administrative wages.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Covering long-term assets mainly with current liabilities is considered risky, not sound financing.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.3.094' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The asset mix directly reflects capital intensity; the balance is not irrelevant.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Covering long-term assets mainly with current liabilities is considered risky, not sound financing.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Distribution wages are incurred after production and are not part of cost of sales.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Selling costs occur after production and are excluded from cost of sales.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'The asset mix directly reflects capital intensity; the balance is not irrelevant.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.3.095' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['From the figures or classification rule involved, range €33-€40. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Absolute profit is not enough without relating it to capital employed.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Apply the case evidence: Price change ≈ 21.2%. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Operating result = 273.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Market capitalisation ≈ €31.2 million.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.3.096' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Common shares vote; preferred shares usually trade voting rights for a higher dividend.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Apply the case evidence: Price change ≈ 21.1%. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Market capitalisation ≈ €17.5 million.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Operating result = 265.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Apply the case evidence: €14.4m → €17.5m. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.3.097' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Liquidity is about timely payment of obligations.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Market capitalisation ≈ €31.9 million.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Earnings per share ≈ €0.28.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Turnover ≈ 36.2% of shares outstanding.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Shares outstanding = 840,000.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.3.098' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Covering long-term assets mainly with current liabilities is considered risky, not sound financing.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Direct production or acquisition costs are exactly what cost of sales is meant to capture.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'The asset mix directly reflects capital intensity; the balance is not irrelevant.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Covering long-term assets mainly with current liabilities is considered risky, not sound financing.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'The asset mix directly reflects capital intensity; the balance is not irrelevant.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.3.099' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Textbook motives for buying shares include dividends, growth, voting and real-value motives.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Apply the case evidence: €17.1m → €18.0m. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'From the figures or classification rule involved, range €32-€40. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Earnings per share ≈ €0.69.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Operating result = 309.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.3.100' AND tier = 'full';
