-- Update expanded explanations for 3.2-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Mining is primary; smelting and manufacturing are secondary.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Tertiary activity delivers services rather than extracting or manufacturing goods.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Primary activity extracts raw materials from the earth.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Banking and insurance are tertiary services, not primary extraction.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Banking and insurance are tertiary services, not secondary manufacturing.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 3.2.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Recreation services and instruction are tertiary activity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Human resources delivering services are classified as labour.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Producing physical goods from materials is secondary manufacturing.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Natural setting does not reclassify service delivery as primary extraction.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Location does not make a service business primary; activity type determines sector.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 3.2.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Mining extracts raw materials and is primary-sector activity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Growing and harvesting crops is primary-sector activity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Forestry extracts natural resources and is primary activity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Milling into boards is secondary manufacturing.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Commercial fishing extracts natural resources and is primary activity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 3.2.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Selling to consumers is tertiary distribution/trade.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Warehousing and logistics are tertiary services.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Vehicle assembly from processed materials is secondary manufacturing.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Garment production from materials is secondary even if products are later retailed.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Processing ore or metal into usable forms is secondary transformation.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 3.2.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Disaster recovery spending increases gdp even when welfare falls.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Rebuild spending adds to measured gdp.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Gdp can increase from rebuilds even when underlying welfare declined.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Gdp sums final domestic production over a defined period.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Gdp can rise from rebuilds even when underlying welfare declined.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.'] WHERE case_id = 'CASE 3.2.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Banking is classified within the tertiary sector.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Coaching is a service regardless of client location.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Smelting and manufacturing belong to the secondary sector.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Technical support is a tertiary service.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Insurance is a financial service, not resource extraction.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 3.2.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Emerging countries often rely heavily on primary-sector output.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Development shifts activity toward secondary and tertiary sectors.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Emerging countries often rely heavily on primary-sector output.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Emerging economies depend more on primary activity, not dominant tertiary shares.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Emerging economies depend more on primary activity rather than dominant tertiary shares.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 3.2.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Component production transforms materials into manufactured goods.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Agricultural production and harvesting remain primary even if some processing occurs on farm.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Selling does not reclassify farming or manufacturing into services.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Manufacturing for business customers remains secondary activity.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Agricultural production remains primary even when products are sold.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 3.2.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Developed eu economies are service-dominated despite food importance.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Advanced eu countries typically see services dominate total output.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Gdp per capita is used as a living-standard indicator.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'High tertiary shares typify advanced, not primary-dominated, economies.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'In developed eu countries the tertiary sector usually exceeds seventy percent.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 3.2.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Gdp avoids double counting by focusing on final output.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Gdp typically refers to annual domestic final production.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Gdp measures final domestic production over a defined period.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Gdp is based on geography of production.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Gdp includes final services produced within borders.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 3.2.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Gdp share does not by itself show sustainability of growth.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'The reported figure shows services dominating total output.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'High tertiary shares characterise advanced eu states.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Advanced eu economies often exceed seventy percent tertiary output.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'More developed economies shift toward services in the three-sector model.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 3.2.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Real growth uses gdp adjusted for inflation.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Inflation-adjusted per capita figures support growth comparisons.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Inflation adjustment isolates real output changes.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Price rises can inflate nominal gdp without real output gains.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Real comparisons generally require inflation adjustment.

The absolute wording "never" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.'] WHERE case_id = 'CASE 3.2.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Coaching remains a service regardless of client location.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Coaching stays a service even when clients are abroad.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Home offices are locations for delivering services, not extracting raw materials.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Services produced domestically can count in home-country gdp.

The absolute wording "cannot" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Coaching advice is a service output, not extraction of natural resources.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 3.2.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Mining extracts raw materials and is primary activity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Assembling cars from materials is secondary activity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Assembly of vehicles is secondary even if inputs came from mining.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Core extraction and manufacturing sectors remain primary and secondary.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Office staff do not reclassify extraction or manufacturing into services.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 3.2.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Incomplete income coverage contributes to gdp criticism.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Informal and non-market activity is often missed by gdp.

The absolute wording "every" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Non-market unpaid work is typically outside gdp scope.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Unpaid care work typically falls outside gdp measurement boundaries.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Volunteer labour is generally excluded from official gdp aggregates.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.'] WHERE case_id = 'CASE 3.2.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Different sectors operate side by side in the same economy.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Customer service does not make farming tertiary.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Insurance is a financial service, not resource extraction.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Farming wheat from land is primary agriculture, not secondary manufacturing.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Grain harvesting remains primary even when processed into flour later.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 3.2.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Gdp misses quality and sustainability dimensions critics highlight.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Gdp does not by itself show sustainability or quality of growth.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Measured output can rise while welfare remains impaired.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Output can grow without environmental improvement.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Quality and sustainability are standard gdp criticisms.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 3.2.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Downstream storage and shipbuilding are not primary extraction.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Services can support manufacturing downstream.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Welding hull sections transforms materials into manufactured vessels.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Ship construction from steel plate counts as secondary manufacturing output.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Storage and logistics are tertiary services.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 3.2.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Inflation-adjusted gdp supports real growth comparisons.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Healthcare provision is tertiary service activity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Real growth requires adjusting for inflation.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Healthcare provision is tertiary service activity.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Sector activity contributes to overall measured gdp growth.

The absolute wording "cannot" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.'] WHERE case_id = 'CASE 3.2.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Reconstruction outlays enter gdp as new final expenditure.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Repair and rebuild contracts add to measured national output totals.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Gdp may rise from rebuilds without restoring lost welfare.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Recovery and rebuild spending adds to measured output.

The absolute wording "automatically" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Rebuild spending is included and can raise gdp.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 3.2.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Garment production from materials is secondary activity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Commercial fishing extracts resources and is primary activity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Extracting fish remains primary-sector activity.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Garment manufacturing is secondary, not primary.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Sewing garments is manufacturing in the secondary sector.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 3.2.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Software services are tertiary, not manufacturing, in this context.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Repair and support are tertiary service activities.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Their activities are classified as services in the tertiary sector.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Using devices does not make their support activity primary.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Repair and support are services even when goods are involved.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 3.2.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Processing ore into metal is secondary activity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Processing ore into metal is secondary transformation.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Smelting transforms extracted ore; only pit extraction is primary.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Machinery assembly downstream is secondary, not primary extraction.

The absolute wording "every" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Natural origin of ore does not keep smelting in the primary sector.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 3.2.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Real growth uses inflation-adjusted gdp.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Real comparisons generally require inflation adjustment.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'With stable prices nominal and real growth align closely.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Nominal figures can inflate apparent growth without real gains.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Real growth uses gdp adjusted for inflation.

The absolute wording "all" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.'] WHERE case_id = 'CASE 3.2.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Printing books is manufacturing in the secondary sector.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Retail trade of goods is tertiary activity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Distribution to customers is tertiary-sector activity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Retail and distribution of goods are tertiary even for physical products.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Book-related services remain tertiary.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 3.2.25' AND tier = 'full';
