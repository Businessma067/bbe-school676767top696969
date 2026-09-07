-- Update expanded explanations for 3.2-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Wealthier economies often report better health and happiness indicators on average.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Rising gdp per capita commonly tracks improved wellbeing metrics in cross-country data.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

The text acknowledges correlation despite gdp limits.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Correlation does not mean gdp fully measures welfare.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp is usually correlated with wellbeing indicators.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 3.2.26' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Primary extraction commonly supplies secondary manufacturers.

The scenario (a forestry concession supplies logs to a furniture plant finishing dining tables) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Household buyers do not shift furniture making from secondary to tertiary.

In the case setting — a forestry concession supplies logs to a furniture plant finishing dining tables — the sentence mislabels the category or overreaches.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Table finishing at a plant is manufacturing, not a service to consumers.

In the case setting — a forestry concession supplies logs to a furniture plant finishing dining tables — the sentence mislabels the category or overreaches.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Logging is primary resource use; furniture making is a separate secondary stage.

Against the scenario (a forestry concession supplies logs to a furniture plant finishing dining tables), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Retail sale of furniture does not reclassify logging as secondary activity.

In the case setting — a forestry concession supplies logs to a furniture plant finishing dining tables — the sentence mislabels the category or overreaches.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 3.2.27' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Fabricating goods remains secondary even if advice accompanies sales.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Manufactured components are secondary-sector output.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Manufacturing for business customers remains secondary activity.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Manufacturing components from materials is secondary activity.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Selling to firms does not reclassify manufacturing as services.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'] WHERE case_id = 'CASE 3.2.28' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Distribution is a service activity within the tertiary sector.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Technical support is a tertiary service.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

A firm may run secondary production and tertiary services simultaneously.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Manufacturing and distribution occupy different sectors.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

After-sales repair is tertiary but does not erase manufacturing classification.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
'] WHERE case_id = 'CASE 3.2.29' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

National gdp counts output produced inside territorial borders.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Domestic final production in the period is counted.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Location of production determines gdp inclusion.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Foreign production is counted where it occurs, not in home gdp.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Geographic location of production determines which country records the output.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'] WHERE case_id = 'CASE 3.2.30' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Measured output can rise while welfare remains impaired.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Quality and sustainability are standard gdp criticisms.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp totals value produced, not whether output is beneficial.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp does not by itself show sustainability or quality.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp does not by itself show sustainability or quality.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'] WHERE case_id = 'CASE 3.2.31' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Banking is classified within the tertiary sector.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Banking is a financial service, not resource extraction.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Financial services stay tertiary regardless of customer location.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Financial services are tertiary activity.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Financing manufacturers does not turn banking into manufacturing.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 3.2.32' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Sector classification follows the stage of activity — extraction, manufacturing, or services — not whether the output feels basic or where the premises sit.

Warehousing is tertiary; welding is secondary.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Building ships is manufacturing, not service delivery.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Storage before manufacturing is a tertiary service.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Finishing manufactured vessels remains secondary activity.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Building ships from materials is secondary activity.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'] WHERE case_id = 'CASE 3.2.33' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

High service shares show tertiary dominance in advanced economies.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods. GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Sector shares are derived from gdp output breakdowns.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

High tertiary, not primary, shares typify advanced eu states.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Aggregate shares differ from individual firm sector labels.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Less developed countries depend more on primary activity.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 3.2.34' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp per capita is linked to living standards.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp misses some informal and unpaid activity.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods. GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp covers final domestic production over time.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods. GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Final insurance premiums and claims services enter gdp when produced domestically.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods. GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Service-sector final output is included when it meets gdp boundary rules.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 3.2.35' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Retail trade of goods is tertiary activity.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Fulfilment services are tertiary activity.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Mixed firms can span secondary production and tertiary retail.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Distribution and retail are tertiary even for physical products.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Manufacturing and retail occupy different sectors.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'] WHERE case_id = 'CASE 3.2.36' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Support services remain tertiary when linked to goods.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Client location does not reclassify domestic tertiary services.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Technical support is a tertiary service.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Software services are tertiary in this context.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Supporting devices is tertiary, not manufacturing.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 3.2.37' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Sector classification follows the stage of activity — extraction, manufacturing, or services — not whether the output feels basic or where the premises sit.

The model classifies activities, not single labels per economy.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Mixed-sector firms may combine farming with processing or retail activities.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Manufacturing can coexist with service offerings.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Sector classification follows the stage of activity — extraction, manufacturing, or services — not whether the output feels basic or where the premises sit.

Sector labels describe activities, not exclusive limits on what a firm may do.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Sector classification follows the stage of activity — extraction, manufacturing, or services — not whether the output feels basic or where the premises sit.

Classification by activity allows several sector types within one enterprise.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 3.2.38' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Emerging economies typically depend heavily on primary activity first.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Advanced economies still contain all sectors, with tertiary largest.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Advanced economies rely less on primary output shares.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

More developed economies shift toward services.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Development reallocates activity among sectors over time.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'] WHERE case_id = 'CASE 3.2.39' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Correlation exists despite gdp limits.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Sector classification follows the stage of activity — extraction, manufacturing, or services — not whether the output feels basic or where the premises sit.

Per capita averages miss distribution of income.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Per capita averages miss distribution of income.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp per capita is linked to living standards.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Sector mix patterns are tendencies, not single indicators.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
'] WHERE case_id = 'CASE 3.2.40' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Manufacturing remains secondary even if services accompany sales.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Manufacturing remains secondary even if services accompany sales.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Component fabrication stays secondary whatever raw materials are purchased.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Quality steps in manufacturing stay secondary activity.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Input from mines does not change the secondary nature of manufacturing.

Under that classification the assertion describes the situation correctly.

The statement is true.
'] WHERE case_id = 'CASE 3.2.41' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Insurance is a financial service in the tertiary sector.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Core insurance operations are tertiary activity.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Insurance services are tertiary for all customer types.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Risk coverage is a financial service, not resource extraction.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Insurance remains tertiary regardless of what policies cover.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 3.2.42' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Retail distribution is tertiary activity.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Design services can be tertiary; sewing is manufacturing.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Manufacturing uses imported materials in secondary production.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Sewing garments is secondary manufacturing.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Garment production from materials is secondary activity.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'] WHERE case_id = 'CASE 3.2.43' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Coaching is a service classified in the tertiary sector.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Client location does not reclassify domestic tertiary services.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Core coaching remains tertiary even if goods are sold.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Personal coaching is tertiary-sector activity.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Design services are tertiary; book printing is secondary.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 3.2.44' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Fulfilment services are tertiary activity.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Distribution to customers is tertiary-sector activity.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Warehousing before manufacturing is tertiary logistics.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Distribution to readers is tertiary activity.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Distribution is tertiary even when goods are physical.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 3.2.45' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Forestry extracts timber as a natural resource.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Crop production is primary-sector activity.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Primary activity extracts raw materials from the earth.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Mining extracts raw materials and is primary activity.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Extracting fish remains primary-sector activity.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 3.2.46' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Milling logs into boards is secondary manufacturing.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Manufacturing components is secondary activity.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Sewing garments is secondary manufacturing.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Processing ore or metal is secondary transformation.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Building ships from materials is secondary manufacturing.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 3.2.47' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

More developed economies shift toward services in the three-sector model.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp per capita is used as a living-standard indicator.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Developed eu economies show tertiary dominance, not primary dominance.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods. GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

High tertiary shares characterise advanced, not emerging, economies.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

In developed eu countries the tertiary sector usually exceeds seventy percent.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'] WHERE case_id = 'CASE 3.2.48' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Support services remain tertiary when linked to goods.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Client location does not reclassify domestic tertiary services.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Technical support is a tertiary service.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Manufacturing is secondary; support is tertiary alongside it.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Software services are tertiary in this context.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'] WHERE case_id = 'CASE 3.2.49' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Development shifts sector shares toward services in rich economies.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp totals final output; real growth uses adjusted figures.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Standard criticisms include coverage, quality, and rebuild distortions.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Correlation does not mean gdp fully measures welfare.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Manufacturing stays secondary; support can be tertiary alongside it.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'] WHERE case_id = 'CASE 3.2.50' AND tier = 'full';
