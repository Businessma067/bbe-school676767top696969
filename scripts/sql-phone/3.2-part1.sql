-- Update expanded explanations for 3.2-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Mining is primary; smelting and manufacturing are secondary.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Tertiary activity delivers services rather than extracting or manufacturing goods.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Primary activity extracts raw materials from the earth.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Banking and insurance are tertiary services, not primary extraction.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Banking and insurance are tertiary services, not secondary manufacturing.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'] WHERE case_id = 'CASE 3.2.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Recreation services and instruction are tertiary activity.

In the case setting — a Tyrolean ski resort hires instructors and sells lift passes to local visitors — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Sector classification follows the stage of activity — extraction, manufacturing, or services — not whether the output feels basic or where the premises sit.

Human resources delivering services are classified as labour.

In the case setting — a Tyrolean ski resort hires instructors and sells lift passes to local visitors — the sentence mislabels the category or overreaches.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Producing physical goods from materials is secondary manufacturing.

Against the scenario (a Tyrolean ski resort hires instructors and sells lift passes to local visitors), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Natural setting does not reclassify service delivery as primary extraction.

Against the scenario (a Tyrolean ski resort hires instructors and sells lift passes to local visitors), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Location does not make a service business primary; activity type determines sector.

In the case setting — a Tyrolean ski resort hires instructors and sells lift passes to local visitors — the sentence mislabels the category or overreaches.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 3.2.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Mining extracts raw materials and is primary-sector activity.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Growing and harvesting crops is primary-sector activity.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Forestry extracts natural resources and is primary activity.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Milling into boards is secondary manufacturing.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Commercial fishing extracts natural resources and is primary activity.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'] WHERE case_id = 'CASE 3.2.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Selling to consumers is tertiary distribution/trade.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Warehousing and logistics are tertiary services.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Vehicle assembly from processed materials is secondary manufacturing.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Garment production from materials is secondary even if products are later retailed.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Processing ore or metal into usable forms is secondary transformation.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 3.2.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Disaster recovery spending increases gdp even when welfare falls.

In the case setting — how, after floods a municipality rebuilds bridges and the spending enters national accounts — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Rebuild spending adds to measured gdp.

The scenario (how, after floods a municipality rebuilds bridges and the spending enters national accounts) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp can increase from rebuilds even when underlying welfare declined.

In the case setting — how, after floods a municipality rebuilds bridges and the spending enters national accounts — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods. GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp sums final domestic production over a defined period.

The scenario (how, after floods a municipality rebuilds bridges and the spending enters national accounts) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp can rise from rebuilds even when underlying welfare declined.

Against the scenario (how, after floods a municipality rebuilds bridges and the spending enters national accounts), the claim attaches the wrong label.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
'] WHERE case_id = 'CASE 3.2.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Banking is classified within the tertiary sector.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Coaching is a service regardless of client location.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Smelting and manufacturing belong to the secondary sector.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Technical support is a tertiary service.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Insurance is a financial service, not resource extraction.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 3.2.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Emerging countries often rely heavily on primary-sector output.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Development shifts activity toward secondary and tertiary sectors.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Emerging countries often rely heavily on primary-sector output.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods. GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Emerging economies depend more on primary activity, not dominant tertiary shares.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Emerging economies depend more on primary activity rather than dominant tertiary shares.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 3.2.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Component production transforms materials into manufactured goods.

The scenario (a farm selling olive oil while a factory fills an industrial production order) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Agricultural production and harvesting remain primary even if some processing occurs on farm.

Against the scenario (a farm selling olive oil while a factory fills an industrial production order), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Selling does not reclassify farming or manufacturing into services.

Against the scenario (a farm selling olive oil while a factory fills an industrial production order), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Manufacturing for business customers remains secondary activity.

Against the scenario (a farm selling olive oil while a factory fills an industrial production order), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Agricultural production remains primary even when products are sold.

Against the scenario (a farm selling olive oil while a factory fills an industrial production order), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 3.2.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Developed eu economies are service-dominated despite food importance.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Advanced eu countries typically see services dominate total output.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp per capita is used as a living-standard indicator.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

High tertiary shares typify advanced, not primary-dominated, economies.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

In developed eu countries the tertiary sector usually exceeds seventy percent.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 3.2.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods. GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp avoids double counting by focusing on final output.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp typically refers to annual domestic final production.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods. GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp measures final domestic production over a defined period.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp is based on geography of production.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods. GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp includes final services produced within borders.

Under that classification the assertion describes the situation correctly.

The statement is true.
'] WHERE case_id = 'CASE 3.2.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods. GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp share does not by itself show sustainability of growth.

The scenario (a GDP report for an EU member state shows services at seventy-four percent of total output) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

The reported figure shows services dominating total output.

In the case setting — a GDP report for an EU member state shows services at seventy-four percent of total output — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Sector classification follows the stage of activity — extraction, manufacturing, or services — not whether the output feels basic or where the premises sit.

High tertiary shares characterise advanced eu states.

The scenario (a GDP report for an EU member state shows services at seventy-four percent of total output) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Advanced eu economies often exceed seventy percent tertiary output.

In the case setting — a GDP report for an EU member state shows services at seventy-four percent of total output — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

More developed economies shift toward services in the three-sector model.

In the case setting — a GDP report for an EU member state shows services at seventy-four percent of total output — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'] WHERE case_id = 'CASE 3.2.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Real growth uses gdp adjusted for inflation.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Inflation-adjusted per capita figures support growth comparisons.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Inflation adjustment isolates real output changes.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Price rises can inflate nominal gdp without real output gains.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — Sector classification follows the stage of activity — extraction, manufacturing, or services — not whether the output feels basic or where the premises sit.

Real comparisons generally require inflation adjustment.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
'] WHERE case_id = 'CASE 3.2.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Coaching remains a service regardless of client location.

The scenario (an Estonian coach delivers remote training sessions to clients in other countries) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Coaching stays a service even when clients are abroad.

The scenario (an Estonian coach delivers remote training sessions to clients in other countries) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Home offices are locations for delivering services, not extracting raw materials.

Against the scenario (an Estonian coach delivers remote training sessions to clients in other countries), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Services produced domestically can count in home-country gdp.

In the case setting — an Estonian coach delivers remote training sessions to clients in other countries — the sentence mislabels the category or overreaches.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Coaching advice is a service output, not extraction of natural resources.

Against the scenario (an Estonian coach delivers remote training sessions to clients in other countries), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 3.2.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Mining extracts raw materials and is primary activity.

The scenario (a Romanian coal mine and a Graz car plant report output in the same quarter) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Assembling cars from materials is secondary activity.

The scenario (a Romanian coal mine and a Graz car plant report output in the same quarter) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Assembly of vehicles is secondary even if inputs came from mining.

The scenario (a Romanian coal mine and a Graz car plant report output in the same quarter) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Core extraction and manufacturing sectors remain primary and secondary.

In the case setting — a Romanian coal mine and a Graz car plant report output in the same quarter — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Office staff do not reclassify extraction or manufacturing into services.

In the case setting — a Romanian coal mine and a Graz car plant report output in the same quarter — the sentence mislabels the category or overreaches.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 3.2.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Incomplete income coverage contributes to gdp criticism.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Informal and non-market activity is often missed by gdp.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Non-market unpaid work is typically outside gdp scope.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Unpaid care work typically falls outside gdp measurement boundaries.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Volunteer labour is generally excluded from official gdp aggregates.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
'] WHERE case_id = 'CASE 3.2.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Different sectors operate side by side in the same economy.

The scenario (an insurance cooperative processes claims while a nearby farm harvests wheat) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Customer service does not make farming tertiary.

Against the scenario (an insurance cooperative processes claims while a nearby farm harvests wheat), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Insurance is a financial service, not resource extraction.

Against the scenario (an insurance cooperative processes claims while a nearby farm harvests wheat), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Farming wheat from land is primary agriculture, not secondary manufacturing.

In the case setting — an insurance cooperative processes claims while a nearby farm harvests wheat — the sentence mislabels the category or overreaches.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Grain harvesting remains primary even when processed into flour later.

In the case setting — an insurance cooperative processes claims while a nearby farm harvests wheat — the sentence mislabels the category or overreaches.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'] WHERE case_id = 'CASE 3.2.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp misses quality and sustainability dimensions critics highlight.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp does not by itself show sustainability or quality of growth.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Measured output can rise while welfare remains impaired.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Output can grow without environmental improvement.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Quality and sustainability are standard gdp criticisms.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 3.2.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Downstream storage and shipbuilding are not primary extraction.

In the case setting — a port warehouse stores imported steel before a shipyard welds hull sections — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Services can support manufacturing downstream.

In the case setting — a port warehouse stores imported steel before a shipyard welds hull sections — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Welding hull sections transforms materials into manufactured vessels.

The scenario (a port warehouse stores imported steel before a shipyard welds hull sections) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Ship construction from steel plate counts as secondary manufacturing output.

In the case setting — a port warehouse stores imported steel before a shipyard welds hull sections — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Storage and logistics are tertiary services.

The scenario (a port warehouse stores imported steel before a shipyard welds hull sections) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
'] WHERE case_id = 'CASE 3.2.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Inflation-adjusted gdp supports real growth comparisons.

In the case setting — a Prague clinic expands while real GDP per capita rises after inflation adjustment — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Healthcare provision is tertiary service activity.

The scenario (a Prague clinic expands while real GDP per capita rises after inflation adjustment) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Real growth requires adjusting for inflation.

In the case setting — a Prague clinic expands while real GDP per capita rises after inflation adjustment — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Healthcare provision is tertiary service activity.

In the case setting — a Prague clinic expands while real GDP per capita rises after inflation adjustment — the sentence mislabels the category or overreaches.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Sector activity contributes to overall measured gdp growth.

In the case setting — a Prague clinic expands while real GDP per capita rises after inflation adjustment — the sentence mislabels the category or overreaches.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
'] WHERE case_id = 'CASE 3.2.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Reconstruction outlays enter gdp as new final expenditure.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Repair and rebuild contracts add to measured national output totals.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp may rise from rebuilds without restoring lost welfare.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Recovery and rebuild spending adds to measured output.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Rebuild spending is included and can raise gdp.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 3.2.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Garment production from materials is secondary activity.

In the case setting — a fishing fleet lands herring while a fashion label sews jackets from imported fabric — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Commercial fishing extracts resources and is primary activity.

In the case setting — a fishing fleet lands herring while a fashion label sews jackets from imported fabric — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Extracting fish remains primary-sector activity.

In the case setting — a fishing fleet lands herring while a fashion label sews jackets from imported fabric — the sentence mislabels the category or overreaches.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Garment manufacturing is secondary, not primary.

In the case setting — a fishing fleet lands herring while a fashion label sews jackets from imported fabric — the sentence mislabels the category or overreaches.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Sewing garments is manufacturing in the secondary sector.

Against the scenario (a fishing fleet lands herring while a fashion label sews jackets from imported fabric), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 3.2.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Software services are tertiary, not manufacturing, in this context.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Repair and support are tertiary service activities.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Their activities are classified as services in the tertiary sector.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Using devices does not make their support activity primary.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Repair and support are services even when goods are involved.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'] WHERE case_id = 'CASE 3.2.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Processing ore into metal is secondary activity.

In the case setting — a mining pit extracts ore while downstream smelters shape metal for machinery plants — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Processing ore into metal is secondary transformation.

Against the scenario (a mining pit extracts ore while downstream smelters shape metal for machinery plants), the claim attaches the wrong label.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Smelting transforms extracted ore; only pit extraction is primary.

Against the scenario (a mining pit extracts ore while downstream smelters shape metal for machinery plants), the claim attaches the wrong label.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Machinery assembly downstream is secondary, not primary extraction.

Against the scenario (a mining pit extracts ore while downstream smelters shape metal for machinery plants), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Natural origin of ore does not keep smelting in the primary sector.

In the case setting — a mining pit extracts ore while downstream smelters shape metal for machinery plants — the sentence mislabels the category or overreaches.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'] WHERE case_id = 'CASE 3.2.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Real growth uses inflation-adjusted gdp.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Sector classification follows the stage of activity — extraction, manufacturing, or services — not whether the output feels basic or where the premises sit.

Real comparisons generally require inflation adjustment.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Sector classification follows the stage of activity — extraction, manufacturing, or services — not whether the output feels basic or where the premises sit.

With stable prices nominal and real growth align closely.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Sector classification follows the stage of activity — extraction, manufacturing, or services — not whether the output feels basic or where the premises sit.

Nominal figures can inflate apparent growth without real gains.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Real growth uses gdp adjusted for inflation.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 3.2.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Printing books is manufacturing in the secondary sector.

In the case setting — a bookstore branch distributes publishers'' titles to local readers — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Retail trade of goods is tertiary activity.

In the case setting — a bookstore branch distributes publishers'' titles to local readers — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Distribution to customers is tertiary-sector activity.

The scenario (a bookstore branch distributes publishers'' titles to local readers) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Retail and distribution of goods are tertiary even for physical products.

In the case setting — a bookstore branch distributes publishers'' titles to local readers — the sentence mislabels the category or overreaches.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Book-related services remain tertiary.

Against the scenario (a bookstore branch distributes publishers'' titles to local readers), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 3.2.25' AND tier = 'full';
