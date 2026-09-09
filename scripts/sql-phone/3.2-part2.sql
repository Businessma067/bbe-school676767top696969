-- Update expanded explanations for 3.2-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Wealthier economies often report better health and happiness indicators on average.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Rising gdp per capita commonly tracks improved wellbeing metrics in cross-country data.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'The text acknowledges correlation despite gdp limits.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Correlation does not mean gdp fully measures welfare.

The absolute wording "every" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Gdp is usually correlated with wellbeing indicators.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 3.2.26' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Primary extraction commonly supplies secondary manufacturers.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Household buyers do not shift furniture making from secondary to tertiary.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Table finishing at a plant is manufacturing, not a service to consumers.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Logging is primary resource use; furniture making is a separate secondary stage.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Retail sale of furniture does not reclassify logging as secondary activity.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 3.2.27' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Fabricating goods remains secondary even if advice accompanies sales.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Manufactured components are secondary-sector output.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Manufacturing for business customers remains secondary activity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Manufacturing components from materials is secondary activity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Selling to firms does not reclassify manufacturing as services.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 3.2.28' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Distribution is a service activity within the tertiary sector.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Technical support is a tertiary service.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'A firm may run secondary production and tertiary services simultaneously.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Manufacturing and distribution occupy different sectors.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'After-sales repair is tertiary but does not erase manufacturing classification.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 3.2.29' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['National gdp counts output produced inside territorial borders.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Domestic final production in the period is counted.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Location of production determines gdp inclusion.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Foreign production is counted where it occurs, not in home gdp.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Geographic location of production determines which country records the output.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 3.2.30' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Measured output can rise while welfare remains impaired.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Quality and sustainability are standard gdp criticisms.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Gdp totals value produced, not whether output is beneficial.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Gdp does not by itself show sustainability or quality.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Gdp does not by itself show sustainability or quality.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 3.2.31' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Banking is classified within the tertiary sector.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Banking is a financial service, not resource extraction.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Financial services stay tertiary regardless of customer location.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Financial services are tertiary activity.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Financing manufacturers does not turn banking into manufacturing.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 3.2.32' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Warehousing is tertiary; welding is secondary.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Building ships is manufacturing, not service delivery.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Storage before manufacturing is a tertiary service.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Finishing manufactured vessels remains secondary activity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Building ships from materials is secondary activity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 3.2.33' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['High service shares show tertiary dominance in advanced economies.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Sector shares are derived from gdp output breakdowns.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'High tertiary, not primary, shares typify advanced eu states.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Aggregate shares differ from individual firm sector labels.

The absolute wording "every" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Less developed countries depend more on primary activity.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 3.2.34' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Gdp per capita is linked to living standards.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Gdp misses some informal and unpaid activity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Gdp covers final domestic production over time.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Final insurance premiums and claims services enter gdp when produced domestically.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Service-sector final output is included when it meets gdp boundary rules.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 3.2.35' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Retail trade of goods is tertiary activity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Fulfilment services are tertiary activity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Mixed firms can span secondary production and tertiary retail.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Distribution and retail are tertiary even for physical products.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Manufacturing and retail occupy different sectors.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 3.2.36' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Support services remain tertiary when linked to goods.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Client location does not reclassify domestic tertiary services.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Technical support is a tertiary service.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Software services are tertiary in this context.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Supporting devices is tertiary, not manufacturing.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 3.2.37' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The model classifies activities, not single labels per economy.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Mixed-sector firms may combine farming with processing or retail activities.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Manufacturing can coexist with service offerings.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Sector labels describe activities, not exclusive limits on what a firm may do.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Classification by activity allows several sector types within one enterprise.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 3.2.38' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Emerging economies typically depend heavily on primary activity first.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Advanced economies still contain all sectors, with tertiary largest.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Advanced economies rely less on primary output shares.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'More developed economies shift toward services.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Development reallocates activity among sectors over time.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 3.2.39' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Correlation exists despite gdp limits.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Per capita averages miss distribution of income.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Per capita averages miss distribution of income.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Gdp per capita is linked to living standards.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Sector mix patterns are tendencies, not single indicators.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 3.2.40' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Manufacturing remains secondary even if services accompany sales.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Manufacturing remains secondary even if services accompany sales.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Component fabrication stays secondary whatever raw materials are purchased.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Quality steps in manufacturing stay secondary activity.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Input from mines does not change the secondary nature of manufacturing.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 3.2.41' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Insurance is a financial service in the tertiary sector.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Core insurance operations are tertiary activity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Insurance services are tertiary for all customer types.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Risk coverage is a financial service, not resource extraction.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Insurance remains tertiary regardless of what policies cover.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 3.2.42' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Retail distribution is tertiary activity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Design services can be tertiary; sewing is manufacturing.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Manufacturing uses imported materials in secondary production.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Sewing garments is secondary manufacturing.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Garment production from materials is secondary activity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 3.2.43' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Coaching is a service classified in the tertiary sector.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Client location does not reclassify domestic tertiary services.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Core coaching remains tertiary even if goods are sold.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Personal coaching is tertiary-sector activity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Design services are tertiary; book printing is secondary.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 3.2.44' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Fulfilment services are tertiary activity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Distribution to customers is tertiary-sector activity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Warehousing before manufacturing is tertiary logistics.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Distribution to readers is tertiary activity.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Distribution is tertiary even when goods are physical.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 3.2.45' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Forestry extracts timber as a natural resource.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Crop production is primary-sector activity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Primary activity extracts raw materials from the earth.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Mining extracts raw materials and is primary activity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Extracting fish remains primary-sector activity.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 3.2.46' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Milling logs into boards is secondary manufacturing.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Manufacturing components is secondary activity.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Sewing garments is secondary manufacturing.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Processing ore or metal is secondary transformation.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Building ships from materials is secondary manufacturing.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 3.2.47' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['More developed economies shift toward services in the three-sector model.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Gdp per capita is used as a living-standard indicator.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Developed eu economies show tertiary dominance, not primary dominance.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'High tertiary shares characterise advanced, not emerging, economies.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'In developed eu countries the tertiary sector usually exceeds seventy percent.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 3.2.48' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Support services remain tertiary when linked to goods.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Client location does not reclassify domestic tertiary services.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Technical support is a tertiary service.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Manufacturing is secondary; support is tertiary alongside it.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Software services are tertiary in this context.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 3.2.49' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Development shifts sector shares toward services in rich economies.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Gdp totals final output; real growth uses adjusted figures.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Standard criticisms include coverage, quality, and rebuild distortions.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Correlation does not mean gdp fully measures welfare.

The absolute wording "every" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Manufacturing stays secondary; support can be tertiary alongside it.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 3.2.50' AND tier = 'full';
