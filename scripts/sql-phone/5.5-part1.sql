-- Update expanded explanations for 5.5-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Primary research uses tailored empirical methods such as questionnaires administered to hundreds of respondents to collect data for the firm.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'New bespoke questionnaires produce primary information, not secondary data.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Primary research uses tailored empirical methods such as personal interviews with selected buyers to collect data for the firm.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Primary research uses tailored empirical methods such as online surveys distributed to a defined sample to collect data for the firm.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Primary research uses tailored empirical methods such as empirical studies commissioned from a market research institute to collect data for the firm.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 5.5.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The textbook defines primary information as data from a new empirical study or institute collection.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Primary research is designed around the commissioning firm''s specific questions and interests.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Questionnaire administration and data analysis contribute to the high cost of primary research.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Interview-based primary research involves significant collection and processing costs.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Online surveys remain primary research and carry analysis costs noted in the chapter.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 5.5.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The chapter notes that especially small businesses struggle to fund costly primary studies.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Tailored primary studies can target firm-specific who and what customer questions.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Reusing published statistics is secondary research; primary requires new empirical collection.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Willingness to pay and support needs are examples of questions primary research can address.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Market share divides business sales by total market sales, not the reverse.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 5.5.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Absolute share uses firm sales over market volume, not rival sales over firm sales.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Demographic comparisons within a tailored primary study are part of customer analysis.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'That formula describes absolute share; relative share compares with the leader''s share.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Why-customer motives can be explored through primary interview research.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Primary research can be tailored to test where customers prefer to buy.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 5.5.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['When-customer timing can be captured directly in a primary empirical study.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Market size is total sales of all firms in the market, not one firm alone.

The absolute wording "all" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'The chapter assumes potential can exceed volume when unconverted customers remain.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Sales potential may exceed current sales volume through gains and market growth.

The absolute wording "cannot" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Secondary information is usually general and not tailored to one firm.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.'] WHERE case_id = 'CASE 5.5.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Institute collection on behalf of the business is primary information in the textbook framework.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Tailored primary research fills gaps left by non-specific secondary data.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Large-scale questionnaires produce primary information when gathered for the firm''s study.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Primary research is costly due to collection and analysis, especially for small firms.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Why-customers choose is an explicit customer-analysis dimension.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 5.5.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Customer analysis includes who, what, where, when, and why.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Competitive purchasing behaviour can be investigated through tailored primary research.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'B2c markets have consumers as customers; business customers indicate b2b.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'B2b markets involve business customers, not final consumers.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Product opinion questions in a tailored study are primary customer insight.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 5.5.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Analysis and interpretation costs contribute to primary research expense for smaller businesses.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'The chapter notes buyer and user may differ.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Children may influence choices even when adults pay.

The absolute wording "never" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Where customers buy helps identify distribution channels.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'When customers buy can reveal seasonal patterns.

The absolute wording "cannot" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.'] WHERE case_id = 'CASE 5.5.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Motives and preferences matter for development and share enhancement.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Primary data are gathered for the current empirical study rather than reused unchanged.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Market research covers customers, competitors, and industry conditions.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Primary studies can target prospective as well as existing customers.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'What-customer use patterns can be captured through primary interviews.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 5.5.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Relative share is a ratio against the leader''s share, not 100% minus absolute share.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Absolute share uses firm sales over market volume, not rival over firm.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Primary studies can include pricing questions tailored to the firm''s product.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Where-customer preferences can be collected in a tailored primary survey.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Institute-run bespoke studies supply primary information to the commissioning business.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 5.5.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Secondary data come from prior research conducted by others.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Government publications are listed as sources of secondary market information.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Association research can supply secondary information to firms in the sector.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Research published by other businesses can be used as secondary information.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Free secondary data are noted in the chapter though they may be general.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 5.5.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The textbook states secondary information is typically general rather than firm-specific.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Published association statistics are secondary information gathered earlier by others.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Secondary data can provide general context ahead of primary research.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Reused published forecasts are secondary data in the market-research framework.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Secondary research done for other aims can still inform general market learning.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 5.5.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Potential can exceed volume when unconverted customers remain.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Government industry reviews are secondary sources of market information.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Secondary data reuse existing studies rather than new firm-administered questionnaires.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'National statistics published elsewhere are secondary information.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Broad segment coverage is a feature of general secondary data.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 5.5.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Different original purposes limit how tailored secondary data can be.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Association output reports are secondary sources for size measures.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Published market forecasts reused by the firm are secondary information.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Reusing existing research avoids the cost of a new primary collection programme.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Other firms'' published reports function as secondary sources.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 5.5.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Sales potential can exceed current sales volume.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Tailored questionnaires still produce primary information.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Government secondary data tend to be aggregate and general.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Who-customers are a core dimension of customer analysis in the chapter.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Reading published data does not convert secondary information into primary.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 5.5.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Electronic collection does not make a new survey secondary.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'B2c markets serve consumers as customers in the textbook classification.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'B2b markets involve business customers purchasing from the firm.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'The chapter distinguishes buyer and user roles among customers.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Influencers can shape decisions without being the paying buyer.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 5.5.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The textbook gives children influencing purchases paid for by parents as an example.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'What-customers do with products supports need-based development.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Preferred-use knowledge feeds product improvement in customer analysis.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Where-customers buy links to channel identification.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Where-customer data can expose channel weaknesses noted in the chapter.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 5.5.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Channel analysis can prompt alternative channel strategies.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Institute-conducted interviews for the study are primary collection.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Outside publisher does not make prior research primary.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Market share is the firm''s proportion, not total industry sales.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', '50,000/1,000,000 is 5%, not 50%.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 5.5.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['When-customers buy reveals seasonal patterns for planning.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', '150,000/1,000,000 is 15%, not 1.5%.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Relative share is 15/30 = 0.5, not 45%.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Equal shares give relative share of 1.0, not zero.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Timing analysis supports forward production planning.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 5.5.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Seasonal timing links to differentiated pricing over the year.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Why-customers choose addresses motives and preferences.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Why-customer insight supports development and share growth.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Research covers both current and potential customers in the chapter overview.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Competitors and industry context are within market research scope.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 5.5.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Customer type determines b2c versus b2b classification.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Relative share is a ratio against the leader, not the same percentage.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Preferred use settings are part of what-customer research.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'The example shows how who-customer research maps to market type and roles.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'The example shows how who-customer research maps to market type and roles.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 5.5.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The example shows how who-customer research maps to market type and roles.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'The example shows how who-customer research maps to market type and roles.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'The example shows how who-customer research maps to market type and roles.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Purchase-location analysis identifies channel preferences such as retail stores.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Market size may be expressed as value or quantity.

The absolute wording "never" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.'] WHERE case_id = 'CASE 5.5.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Purchase-location analysis identifies channel preferences such as online platforms.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Market size may be expressed as quantity or value.

The absolute wording "never" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Timing research identifies seasonal peaks such as winter holiday periods.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Motive analysis can identify preferences such as lower total cost of ownership.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Motive analysis can identify preferences such as perceived product reliability.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 5.5.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Motive analysis can identify preferences such as faster delivery performance.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Where-customer analysis concerns purchase location, not factory location.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Motive analysis can identify preferences such as environmental reputation of the brand.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'When-customer analysis concerns purchase timing, not design timing.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Motive analysis can identify preferences such as availability of after-sales support.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 5.5.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Market size or volume is total industry sales in the textbook definition.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Value expression of market size uses currency totals.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Quantity expression counts units sold across the market.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Market share is defined as the firm''s proportion of total market sales.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Share equals business sales divided by all market sales.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 5.5.25' AND tier = 'full';
