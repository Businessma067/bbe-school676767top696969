-- Update expanded explanations for 6.5-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Secondary trading does not raise new company funds.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Asset turnover ≈ 1.03.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Receivables turnover ≈ 7.12.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Average inventory are about 18.0% of average total assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Cost of sales is about 63.1% of revenue.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.5.001' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Working capital is current assets minus current liabilities, not the reverse; a larger current asset balance raises it.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Negative working capital means current liabilities exceed current assets and does not imply excess cash.

The absolute wording "automatically" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Working capital equals current assets minus current liabilities by definition.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Some margin of current assets over current liabilities is generally desired, with the required size depending on the sector.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'A current ratio above one means current assets are larger than current liabilities.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.002' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['One and a half to two is a common guideline for the current ratio, tempered by industry context.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'A current ratio below one means liabilities exceed current assets, a possible liquidity warning sign.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Excluding inventory before comparing with current liabilities is what defines the acid-test ratio.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Slow-to-sell inventory is why the acid-test ratio is stricter than the current ratio for stock-heavy businesses.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Short-term borrowing can raise cash yet still reduce working capital because current liabilities also rise.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.003' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Extended supplier credit raises current liabilities and can reduce working capital without any change in cash.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Sustainable working capital improvement relies on long-term finance or operational change, not repeated short-term loans.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'The current ratio compares current assets with current liabilities; a ratio above one means assets exceed liabilities, not the reverse.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Working capital is a point-in-time balance-sheet concept, distinct from cash flow, which tracks movements over time.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Return on equity links profit before interest and tax to owners'' equity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.004' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Risk borne by owners is part of judging whether a given return on equity is adequate.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Return on capital employed links profit before interest and tax to combined owner and long-term lender funds.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Capital employed is approximated as equity plus non-current liabilities.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Comparative context, not an isolated figure, is what makes return on capital employed informative.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'The one-and-a-half to two range is a common guideline, not a legal requirement, and industry norms still matter.

The absolute wording "every" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.'] WHERE case_id = 'CASE 6.5.005' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['These match the textbook motives for buying shares.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current assets gather the short-term asset lines:

Inventory (218) + Trade receivables (166) + Cash and cash equivalents (87)
= 471

Current liabilities gather the short-term claims:

Trade payables (135) + Bank overdraft (87)
= 222

Current ratio = 471 / 222 ≈ 2.12

The claim says the ratio exceeds 1.1. We have about 2.12, which matches that comparison.

The statement is true.', 'Working capital = current assets minus current liabilities.

471 - 222 = 249

The claim cites 249. We have 249, so the figures line up.

The statement is true.', 'Acid-test ratio ≈ 1.14.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Equity ratio = total equity / total assets.

809 / 1339 ≈ 60.4%

The claim says the ratio below 25.6%. We have about 60.4%, which does not match that comparison.

The statement is false.'] WHERE case_id = 'CASE 6.5.006' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A consistent profit definition across a comparison prevents distorted return conclusions.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Asset turnover links revenue to average total assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Assets outgrowing revenue causes asset turnover to fall despite rising revenue.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Averaging balances reduces timing distortions in turnover ratio calculations.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'A current ratio below one suggests current assets may not fully cover current liabilities, the opposite of a guarantee.

The absolute wording "guarantees" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.'] WHERE case_id = 'CASE 6.5.007' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Receivables turnover ≈ 8.37.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'New share capital arises at issue, not in aftermarket trades.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Average collection period ≈ 44 days.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Average inventory are about 17.1% of average total assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventory turnover ≈ 4.51 versus receivables turnover ≈ 8.37.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.5.008' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Secondary-market price rises do not raise new company cash.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'High turnover signals faster stock rotation.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Asset turnover ≈ 1.28.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Apply the case evidence: Revenue = 1,116. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Assets moved from 804 to 933.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.009' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The acid-test ratio excludes inventory, giving a stricter, not more lenient, measure than the current ratio.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventory does not convert into cash instantly, which is exactly why the acid-test ratio can differ from the current ratio.

The absolute wording "instantly" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Inventory turnover links cost of sales to average inventory.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Short-term borrowing raises current liabilities alongside cash, so working capital can fall rather than rise.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Extended supplier credit increases current liabilities and can reduce working capital.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.5.010' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Long-term finance and operational improvement, not repeated short-term loans, sustainably strengthen working capital.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Faster stock rotation and less money tied up in stock is what a higher inventory turnover signals.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Inventory turnover is conventionally expressed as a number of times per year.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'The equity ratio is equity expressed as a percentage of total assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Working capital is a balance-sheet snapshot while cash flow tracks movements over time; the two are related but distinct.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.'] WHERE case_id = 'CASE 6.5.011' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['These match the textbook motives for buying shares.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Working capital = current assets minus current liabilities.

449 - 189 = 260

The claim cites 260. We have 260, so the figures line up.

The statement is true.', 'Inventory are about 51.2% of current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Trade receivables are about 31.2% of current assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Long-term financing covers non-current assets by about 33.4%.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.012' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Secondary-market price rises do not raise new company cash.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Receivables turnover ≈ 10.52.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Average inventory are about 19.1% of average total assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'High turnover signals faster stock rotation.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Inventory changed by about 51.9% between the two years.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.013' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Return on equity relates profit before interest and tax to equity, not cash to liabilities.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'The debt ratio is total liabilities expressed as a percentage of total assets.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Equity and liabilities financing the same total assets means the equity ratio and debt ratio move inversely.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Risk borne by owners is precisely what makes a low return on equity potentially unacceptable.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Return on capital employed relates profit to long-term capital employed, not to inventory levels.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.5.014' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A rising debt ratio reflects greater borrowing reliance and higher financial risk for owners.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Capital employed is approximated by adding non-current liabilities to equity, not subtracting them.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Liquidity, profitability, financial efficiency and financial structure are the four broad analytical questions.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Meeting short-term obligations on time is the focus of liquidity analysis.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Relating profit to equity or capital employed, not viewing it alone, is the essence of profitability analysis.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.015' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Return on capital employed gains meaning chiefly from comparison over time or with peers, not in isolation.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Mixing different profit definitions across a comparison distorts rather than clarifies the result.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Converting assets into revenue effectively is the focus of financial efficiency analysis.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Asset turnover relates revenue to average assets, not profit to assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Asset turnover falls, rather than rises, if added assets are not matched by proportional revenue growth.

The absolute wording "automatically" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.'] WHERE case_id = 'CASE 6.5.016' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Equity ratio = total equity / total assets.

481 / 1043 ≈ 46.1%

The claim says the ratio below 39.4%. We have about 46.1%, which does not match that comparison.

The statement is false.', 'Secondary-market price rises do not raise new company cash.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current assets gather the short-term asset lines:

Inventory (96) + Trade receivables (130) + Cash and cash equivalents (114)
= 340

Current liabilities gather the short-term claims:

Trade payables (133) + Bank overdraft (61)
= 194

Current ratio = 340 / 194 ≈ 1.75

The claim says the ratio exceeds 1.09. We have about 1.75, which matches that comparison.

The statement is true.', 'Apply the case evidence: Debt ratio ≈ 53.9%. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventory are about 28.2% of current assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.5.017' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Asset turnover ≈ 1.10.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Receivables turnover ≈ 8.10.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Common shares vote; preferred shares usually emphasise dividend priority.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Average inventory are about 18.1% of average total assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'From the figures or classification rule involved, revenue = 996. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.5.018' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The owner-versus-lender funding balance is the focus of financial structure analysis.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Peer comparison provides a benchmark an isolated ratio figure lacks.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Multi-year tracking reveals trends a single year''s figure would hide.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Cross-industry benchmarks applied without adjustment can mislead.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'A rounded assessment combines all four analytical dimensions rather than relying on one ratio.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.019' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['These match the textbook motives for buying shares.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Inventory turnover ≈ 3.99.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Asset turnover ≈ 1.00.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Receivables turnover ≈ 7.30.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'High turnover signals faster stock rotation.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.020' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Current assets = 387

Current liabilities gather the short-term claims:

Current liabilities = 222

Current ratio = 387 / 222 ≈ 1.74

The claim says the ratio exceeds 1.86. We have about 1.74, which does not match that comparison.

The statement is false.', 'Equity ratio = total equity / total assets.

685 / 1197 ≈ 57.2%

The claim says the ratio below 27.7%. We have about 57.2%, which does not match that comparison.

The statement is false.', 'Secondary trading does not raise new company funds.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Apply the case evidence: Debt ratio ≈ 42.8%. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Buildings are about 39.3% of total assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.5.021' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Large seasonal inventory can widen the gap between the acid-test ratio and the current ratio without implying a liquidity problem.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Loan agreements can embed minimum liquidity or gearing ratios as ongoing risk monitors.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Fast cash collection ahead of supplier payment can make negative working capital manageable rather than distressed.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Profit tied up in inventory or receivables, rather than cash, can still leave a business facing a liquidity squeeze.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Both return measures use profit before interest and tax but divide it by different capital bases.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.022' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Inventory turnover and asset turnover need not move together, since they relate to different parts of the asset base.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'A single year-end balance can distort turnover ratios, which is exactly why averages are preferred.

The absolute wording "never" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Inventory turnover uses cost of sales relative to average inventory, not revenue.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Higher inventory turnover indicates faster stock rotation and less money tied up, not more.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventory turnover is conventionally expressed as a number of times per year, not in currency units.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.'] WHERE case_id = 'CASE 6.5.023' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The standard working capital definition applies to a supermarket chain: current assets minus current liabilities.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Positive working capital is generally preferable for a supermarket chain as a cushion over short-term obligations.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Current ratio analysis for a supermarket chain compares current assets with current liabilities.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'The equity ratio is equity, not liabilities, expressed as a percentage of total assets; that description matches the debt ratio instead.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Because equity and liabilities finance the same total assets, the equity ratio and debt ratio move inversely, not together.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.'] WHERE case_id = 'CASE 6.5.024' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Average collection period ≈ 40 days.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Inventory changed by about 32.7% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Trade receivables moved from 140 to 140.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Secondary trading does not raise new company funds.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Asset turnover ≈ 1.40.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.5.025' AND tier = 'full';
