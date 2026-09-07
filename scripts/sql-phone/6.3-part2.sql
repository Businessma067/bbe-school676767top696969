-- Update expanded explanations for 6.3-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Current assets turn into cash within the normal operating cycle.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Finance costs moved from 22 to 29; operating result moved from 205 to 221.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Interest coverage in Year 1 ≈ 9.3 times.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Operating margin in year 2 ≈ 23.8%.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Profit moved from 144 to 147.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.3.026' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Total equity changed by about -1.8% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Current assets turn into cash within the normal operating cycle.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Non-current liabilities are about 82.9% of equity in Year 2.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current ratio in Year 2 is about 1.96.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Total assets changed by about 3.8% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.3.027' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Current assets = 372

Current liabilities gather the short-term claims:

Current liabilities = 226

Current ratio = 372 / 226 ≈ 1.65

The claim says the ratio exceeds 1.82. We have about 1.65, which does not match that comparison.

The statement is false.', 'Current assets turn into cash within the normal operating cycle.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current assets = 372

Current liabilities gather the short-term claims:

Current liabilities = 226

Current ratio = 372 / 226 ≈ 1.65

The claim says the ratio below 1.26. We have about 1.65, which does not match that comparison.

The statement is false.', 'Acid-test ratio ≈ 0.41.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Equity ratio = total equity / total assets.

688 / 1166 ≈ 59.0%

The claim says the ratio below 35.4%. We have about 59.0%, which does not match that comparison.

The statement is false.'] WHERE case_id = 'CASE 6.3.028' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The operating result, i.e. earnings before interest and taxes, excludes financing costs and income tax.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'With share capital unchanged, equity growth cannot come from new shares; it must be retained earnings.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Separate tracking of these two components is exactly how the source of equity growth is identified.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Growth funded by retained earnings relies less on outside investors than growth funded by new shares.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'This pattern is precisely what reveals a business''s underlying financing strategy.

The absolute wording "regardless" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.'] WHERE case_id = 'CASE 6.3.029' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Excluding financing and tax lets the operating result isolate core trading performance.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'With share capital unchanged, retained earnings are exactly what explain rising equity.

The absolute wording "cannot" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Covering long-term assets mainly with current liabilities is considered risky, not sound.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Funding long-lived assets mainly with short-term borrowing is regarded as risky, not prudent.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'This situation indicates a risky, not conservative, financing position.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.'] WHERE case_id = 'CASE 6.3.030' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Finance costs moved from 15 to 19; operating result moved from 245 to 266.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Interest coverage in Year 1 ≈ 16.3 times.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Gross margins were 38.5% then 37.8%.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Operating margin in Year 2 ≈ 28.0%.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Effective tax rate in Year 1 ≈ 19.7%.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.3.031' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Revenue changed by about 12.5% between the two years.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Finance costs moved from 19 to 24; operating result moved from 210 to 218.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Gross margins were 34.4% then 33.8%.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'The operating result changed by about 3.8% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Profit for the year changed by about -1.9% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.3.032' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Non-current liabilities are about 71.9% of equity in Year 1.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Total equity changed by about 11.3% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Total assets changed by about 12.1% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventory changed by about 16.1% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Trade payables changed by about 9.8% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.3.033' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Current assets = 215

Current liabilities gather the short-term claims:

Current liabilities = 236

Current ratio = 215 / 236 ≈ 0.91

The claim says the ratio below 0.99. We have about 0.91, which matches that comparison.

The statement is true.', 'Apply the case evidence: Debt ratio ≈ 71.7%. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Inventory are about 50.7% of current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Trade receivables are about 33.0% of current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Inventory is always a current asset.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.3.034' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Return on equity ≈ 32.1%.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Return on capital employed ≈ 18.3%.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Equity ratio = total equity / total assets.

626 / 1498 ≈ 41.8%

The claim says the ratio exceeds 47%. We have about 41.8%, which matches that comparison.

The statement is true.', 'Cash conversion ≈ 99.0% of the operating result.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventory are about 21.8% of total assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.3.035' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Non-current liabilities are about 84.4% of equity in Year 2.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Non-current assets are about 61.5% of total assets in Year 2.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current ratio in year 2 is about 1.52.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Total equity changed by about 6.8% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Long-term financing covers non-current assets by about 21.3% in year 1.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.3.036' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Total equity changed by about 7.1% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Non-current liabilities are about 29.0% of equity in year 2.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Non-current assets are about 70.6% of total assets in year 2.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Trade payables are a current liability regardless of the amount.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Total assets changed by about 9.1% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.3.037' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Multi-year operating result tracking isolates trading trends from interest rate or tax changes.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'This matching principle is central to being considered a soundly financed business.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Identical operating results can yield different profit for the year given differing finance costs or tax rates.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Short-term financing of long-lived assets creates, rather than removes, refinancing risk.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Falling profit for the year with a stable operating result points to financing or tax causes, not trading.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.3.038' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Current assets = 441

Current liabilities gather the short-term claims:

Current liabilities = 200

Current ratio = 441 / 200 ≈ 2.21

The claim says the ratio exceeds 1.08. We have about 2.21, which matches that comparison.

The statement is true.', 'Working capital = current assets minus current liabilities.

441 - 200 = 241

The claim cites 241. We have 241, so the figures line up.

The statement is true.', 'Current assets = 441

Current liabilities gather the short-term claims:

Current liabilities = 200

Current ratio = 441 / 200 ≈ 2.21

The claim says the ratio below 1.01. We have about 2.21, which does not match that comparison.

The statement is false.', 'Apply the case evidence: Debt ratio ≈ 56.1%. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Equity ratio = total equity / total assets.

557 / 1269 ≈ 43.9%

The claim says the ratio below 20.5%. We have about 43.9%, which does not match that comparison.

The statement is false.'] WHERE case_id = 'CASE 6.3.039' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Revenue changed by about 17.1% between the two years.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Gross margins were 36.9% then 36.2%.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Finance costs moved from 14 to 21; operating result moved from 192 to 217.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Interest coverage in Year 1 ≈ 13.7 times.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Operating margin in year 2 ≈ 23.6%.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.3.040' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Expenditure is the outflow itself; expense is the portion recognised for the current period.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Cost of sales is limited to direct costs; not every cost incurred belongs there.

The absolute wording "every" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Only directly traceable costs belong in cost of sales; indirect benefit is not sufficient.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Materials consumed directly in production are a direct cost and belong within cost of sales.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'A prepayment is an expenditure immediately but becomes an expense only in the periods it covers.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.3.041' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A large expenditure can be spread as expense across several future periods.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Administration and distribution are reported separately, not absorbed into cost of sales.

The absolute wording "every" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Direct production labour is a core component of cost of sales, not an administrative cost.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Distinguishing expenditure from expense explains gaps between cash outflow and reported expense in a year.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Gross profit only deducts cost of sales from revenue; operating expenses are deducted later.

The absolute wording "all" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.'] WHERE case_id = 'CASE 6.3.042' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Buying a multi-year asset is an immediate expenditure, with only part becoming expense that year.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Comparing revenue growth with cost of sales growth reveals changing production efficiency.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Gross profit is calculated before, not after, overhead costs such as administration are deducted.

The absolute wording "every" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Cost of sales growing more slowly than revenue widens the gross profit margin.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Cost of sales consistently outpacing revenue growth puts sustained pressure on the gross profit margin.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.3.043' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Revenue changed by about 17.4% between the two years.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Finance costs moved from 18 to 26; operating result moved from 240 to 264.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Gross margins were 41.8% then 41.4%.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'The operating result changed by about 10.0% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Profit for the year changed by about 6.6% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.3.044' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Total equity changed by about 10.5% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Trade payables changed by about 16.3% between the two years.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Non-current liabilities are about 59.4% of equity in year 2.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Total assets changed by about 11.5% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventory changed by about 6.9% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.3.045' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Revenue and cost of sales growing at similar rates tends to keep the margin steady.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Rising revenue does not guarantee improving profitability if cost of sales rises even faster.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'These costs are deducted after gross profit has already been calculated, not alongside cost of sales.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Identical gross profit does not guarantee identical operating results if operating expenses differ.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Reading both statements together gives a fuller picture than studying either alone.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.3.046' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Current assets = 435

Current liabilities gather the short-term claims:

Current liabilities = 301

Current ratio = 435 / 301 ≈ 1.45

The claim says the ratio exceeds 1.84. We have about 1.45, which does not match that comparison.

The statement is false.', 'Current assets = 435

Current liabilities gather the short-term claims:

Current liabilities = 301

Current ratio = 435 / 301 ≈ 1.45

The claim says the ratio below 0.68. We have about 1.45, which does not match that comparison.

The statement is false.', 'Working capital = current assets minus current liabilities.

435 - 301 = 134

The claim cites 134. We have 134, so the figures line up.

The statement is true.', 'Inventory are about 59.5% of current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Acid-test ratio ≈ 0.58.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.3.047' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A widening such gap indicates an improving, not deteriorating, gross profit margin.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'A strong income statement result can be undermined by weaknesses only the balance sheet reveals.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Balance sheet working capital changes help explain gaps between cash movement and reported profit.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Overall financial health requires weighing both statements together, not either alone.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'The operating result is calculated before, not after, financing costs and income tax.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.3.048' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Rising profit can coincide with a deteriorating balance sheet, so both statements matter jointly.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Non-current assets covered by equity and non-current liabilities reflect sound long-term financing.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Changes in the non-current versus current asset split over time signal shifting capital intensity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Non-current assets covered by equity and non-current liabilities reflect sound long-term financing.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Changes in the non-current versus current asset split over time signal shifting capital intensity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.3.049' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The operating result changed by about 20.7% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Revenue changed by about 19.6% between the two years.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Finance costs moved from 14 to 20; operating result moved from 179 to 216.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Interest coverage in Year 1 ≈ 12.8 times.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Profit for the year changed by about 13.5% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.3.050' AND tier = 'full';
