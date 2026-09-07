-- Update expanded explanations for 3.1-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Capital includes financial resources used in production — working cash and funds that bridge payroll — alongside plant and equipment. Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Financial resources supporting operations are part of capital.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Capital includes financial resources used in production — working cash and funds that bridge payroll — alongside plant and equipment.

Capital includes both equipment and operating finance.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Capital includes financial resources used in production — working cash and funds that bridge payroll — alongside plant and equipment.

Operating finance is included in capital.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Land is the natural-resource factor; manufactured tools, machines, barrels, and vehicles are capital even when they stand on farmland or travel outdoors.

Processing machinery is capital even with agricultural inputs.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Parts held for service production are capital inventories.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'] WHERE case_id = 'CASE 3.1.26' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Equipment and inventories used in wine production are capital.

In the case setting — a Burgenland vineyard buys oak barrels and contracts seasonal pickers before harvest — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing. Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Winemaking integrates multiple factors beyond land alone.

The scenario (a Burgenland vineyard buys oak barrels and contracts seasonal pickers before harvest) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible.

Workers in production supply human resources as labour.

In the case setting — a Burgenland vineyard buys oak barrels and contracts seasonal pickers before harvest — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Vineyards are natural resources within land.

In the case setting — a Burgenland vineyard buys oak barrels and contracts seasonal pickers before harvest — the sentence mislabels the category or overreaches.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Organising contracts and inputs is entrepreneurship.

In the case setting — a Burgenland vineyard buys oak barrels and contracts seasonal pickers before harvest — the sentence mislabels the category or overreaches.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
'] WHERE case_id = 'CASE 3.1.27' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Tools used up in production are capital inputs.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Capital is defined by productive use of produced means of production (and operating finance), not by ownership title. Leased or hire-purchase equipment still functions as capital while in use.

Leased equipment used in production remains capital.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible.

Most lines still require labour for operation and maintenance.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Maintenance workers are labour; machines remain capital.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible.

Designed machinery is capital; design work is knowledge and labour.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'] WHERE case_id = 'CASE 3.1.28' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.

Tools and software used to perform services are technology factors.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Repair work is labour; parts held for service are capital.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing. Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Training applies know-how through human resource work.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing. Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Service firms integrate multiple factors in delivery.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Organising the venture and bearing risk is entrepreneurship.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'] WHERE case_id = 'CASE 3.1.29' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Factors of production are land, labour, capital, entrepreneurship, and often knowledge and technology, combined to create goods and services.

Component suppliers combine factors to produce inputs other firms need.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing. Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Production draws on multiple listed factors together.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Large manufacturers integrate labour, materials, equipment, and coordination.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing. Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

The venture uses skills, tools, finance, and coordination together.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Dominance does not eliminate combined use of other factors.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 3.1.30' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Vineyards are natural resources classified under land.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.

Paid technical service work is labour.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Money for equipment is capital; approval is entrepreneurial decision-making.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Vision and coordination are entrepreneurship; attracted finance is capital.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Land is the natural-resource factor; manufactured tools, machines, barrels, and vehicles are capital even when they stand on farmland or travel outdoors.

Processing equipment is capital even on agricultural land.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 3.1.31' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Mineral deposits are natural resources within the land factor.

In the case setting — a mining supplier must deliver drill bits before a pit shutdown window closes — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Delivery integrates multiple factors, not capital by itself.

In the case setting — a mining supplier must deliver drill bits before a pit shutdown window closes — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Tools and inventories used in extraction support are capital.

The scenario (a mining supplier must deliver drill bits before a pit shutdown window closes) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible.

Workers preparing and dispatching goods supply human resources as labour.

The scenario (a mining supplier must deliver drill bits before a pit shutdown window closes) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Coordinating timed delivery is entrepreneurship.

In the case setting — a mining supplier must deliver drill bits before a pit shutdown window closes — the sentence mislabels the category or overreaches.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 3.1.32' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible.

Paid technical service work is labour.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Running the venture differs from performing tasks.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Human operators remain labour; machines are capital.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.

Knowledge also matters in service businesses.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Support work is labour using capital tools.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 3.1.33' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

On this stem, the keyed answer treats the sentence as a correct application of that idea: «Naming one dominant factor means other factors are irrelevant to production».

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Heavy capital use does not eliminate other factors.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.

Dominant factors differ by model without removing others.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Service firms use capital alongside labour.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Agriculture integrates multiple factors beyond land alone.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'] WHERE case_id = 'CASE 3.1.34' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Automated machinery used in operations is capital.

The scenario (a distribution hub adds warehouse robots while keeping manual pick teams for odd-shaped orders) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Facilities and machinery used in logistics are capital.

The scenario (a distribution hub adds warehouse robots while keeping manual pick teams for odd-shaped orders) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Coordinating mixed systems and staffing is entrepreneurship.

In the case setting — a distribution hub adds warehouse robots while keeping manual pick teams for odd-shaped orders — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Pickers are labour; equipment they use is capital.

In the case setting — a distribution hub adds warehouse robots while keeping manual pick teams for odd-shaped orders — the sentence mislabels the category or overreaches.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible.

Many hubs retain labour alongside capital equipment.

In the case setting — a distribution hub adds warehouse robots while keeping manual pick teams for odd-shaped orders — the sentence mislabels the category or overreaches.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 3.1.35' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Soil quality is a natural resource within land.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Subsurface minerals are natural resources within land.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Transport equipment remains capital during haulage.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Land is the natural-resource factor; manufactured tools, machines, barrels, and vehicles are capital even when they stand on farmland or travel outdoors.

Processing machinery is capital.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Transport equipment is capital, not land.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'] WHERE case_id = 'CASE 3.1.36' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it. Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Services use capital, labour, and entrepreneurship together.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Service firms still use premises, tools, and finance as capital.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible.

Insurance also uses technology, capital, and coordination.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible.

Workshops still use parts, tools, and technology.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Factors of production are land, labour, capital, entrepreneurship, and often knowledge and technology, combined to create goods and services.

Training uses knowledge through labour.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 3.1.37' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Organising resources and operations is entrepreneurship.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Coordinating production inputs and timing is entrepreneurship.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Designing how factors combine operationally is entrepreneurial work.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Spending alone is not entrepreneurship; entrepreneurship organises and combines factors.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Organising inputs and contracts is entrepreneurial coordination.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'] WHERE case_id = 'CASE 3.1.38' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing. Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Service firms integrate multiple factors in delivery.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Performing repairs is labour; coordinating the firm is entrepreneurship.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Installation work is labour; parts are capital.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Parts held for service production are capital inventories.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.

Tools used to deliver services are technology factors.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
'] WHERE case_id = 'CASE 3.1.39' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Coordinating production factors is entrepreneurship.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible.

Inspection work is skilled human resource use.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Manufacturing still requires labour, materials, and coordination.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots. Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Manufacturing uses materials alongside capital and labour.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Manufacturing integrates labour, materials, equipment, and coordination.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
'] WHERE case_id = 'CASE 3.1.40' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Equipment used in processing is capital, not land.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Vineyards and agricultural output relate to the land factor.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.

Production knowledge and experience are important factors.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Water sources used in production are natural resources within land.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Land is the natural-resource factor; manufactured tools, machines, barrels, and vehicles are capital even when they stand on farmland or travel outdoors.

Processed barrels used in production are capital.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'] WHERE case_id = 'CASE 3.1.41' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible.

Support and repair work deploys skilled human resources.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.

Technology used to perform services is a production factor.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Inventories used to deliver services are capital.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Their repair and software work combines multiple production factors.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — Factors of production are land, labour, capital, entrepreneurship, and often knowledge and technology, combined to create goods and services.

Coordination and risk-bearing are entrepreneurship.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 3.1.42' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Vision and coordination belong to entrepreneurship, not capital.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Capital includes financial resources used in production — working cash and funds that bridge payroll — alongside plant and equipment. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Operating cash is capital; spending decisions may reflect entrepreneurship.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Capital is resources used; entrepreneurship organises those resources.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Purchasing equipment is capital use; organising purchases is entrepreneurship.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Borrowed finance used for equipment is financial capital.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 3.1.43' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.

Know-how applied to deliver services is part of knowledge as a factor.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.

Programming work is labour applying know-how.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.

Service firms apply know-how and tools alongside labour.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.

Training deploys know-how via human resource work.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.

Production knowledge and experience are important factors.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'] WHERE case_id = 'CASE 3.1.44' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.

Office and service staff are human resources classified as labour.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Labour classification turns on whether people supply effort to production, not on contract length. Seasonal and freelance workers still count as labour while they work.

Short-term workers are human resources within the labour factor.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Labour means all human resources used in production — manual and office work, permanent and seasonal, manufacturing and services. Narrowing it to one contract type or workplace role misstates the factor.

Permanent and seasonal workers both supply labour.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Contractors supply labour; the organiser provides entrepreneurship.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Specialists deploying human effort are labour.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
'] WHERE case_id = 'CASE 3.1.45' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.

Manufacturing integrates multiple factors rather than one alone.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Businesses still combine factors even when one appears dominant.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Businesses combine multiple factors rather than one alone.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Services still rely on capital, technology, and coordination.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Winemaking also requires labour, capital, and management.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
'] WHERE case_id = 'CASE 3.1.46' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Capital includes equipment and financial resources.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Purchasing equipment is capital; organising purchases is entrepreneurship.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Capital is defined by productive use of produced means of production (and operating finance), not by ownership title. Leased or hire-purchase equipment still functions as capital while in use.

Leased productive equipment still counts as capital.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Capital includes financial resources used in production — working cash and funds that bridge payroll — alongside plant and equipment.

Financial resources supporting operations are part of capital.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Inventories used in operations belong to capital.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'] WHERE case_id = 'CASE 3.1.47' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Factors of production are land, labour, capital, entrepreneurship, and often knowledge and technology, combined to create goods and services.

Businesses combine factors even when examples emphasise one.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.

The venture uses skills, tools, finance, and coordination.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Component suppliers combine factors to produce inputs.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it. Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Winemaking blends multiple listed factors.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Manufacturing integrates labour, materials, equipment, and coordination.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
'] WHERE case_id = 'CASE 3.1.48' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Equipment used in processing is capital.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Coordinating harvest and equipment is entrepreneurship.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Vineyards are natural resources classified under land.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Farming and processing combine multiple factors.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Seasonal workers are human resources classified as labour.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 3.1.49' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing. Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Production typically integrates multiple listed factors.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Large manufacturers integrate workforce, materials, equipment, and coordination.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing. Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

The venture uses skills, tools, finance, and coordination together.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Winemaking combines multiple factors beyond land.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Dominance does not remove combined use of other factors.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 3.1.50' AND tier = 'full';
