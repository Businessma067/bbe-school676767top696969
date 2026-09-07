-- Update expanded explanations for 5.1-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Identical software licence models shift between producer and consumer labels with the customer, not the design.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

B2b exchange with a business buyer makes the software licence a producer product.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Commercial use by a business purchaser defines the software licence as a producer product.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'FALSE — Exchange is required for a good or service to count as a product in marketing terminology. Items that are only moved internally, given without trade, or not offered for exchange fall outside that definition.

On this stem (desk): internal transfers not offered for external exchange are not products in the marketing sense.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (software licence / household): personal or domestic use by a household purchaser defines the software licence as a consumer product.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
'] WHERE case_id = 'CASE 5.1.26' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Operational needs of a business buyer place an exchanged software licence among producer products.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (desk / logistics company): b2b classification depends on the business purchaser, not solely on the seller''s industry.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

On this stem (software licence / household): personal wishes of a household buyer place an exchanged software licence among consumer products.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (desk / branding): b2c classification depends on the household purchaser, not on retail branding alone.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (desk / logistics company): payment alone does not make the sale b2c; a business buyer implies b2b and a producer product.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 5.1.27' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Inter-business sale of a software licence to a construction contractor is a textbook producer product case.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (desk / resident): the seller''s company status does not make a household sale b2b; it remains b2c with a consumer product.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (software licence / household): household sale of a software licence to a household shopper is a textbook consumer product case.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (desk / logistics company): producer products include goods and services sold to businesses, including a finished desk for a logistics company.

Those restricting words stretch a limited idea past what marketing allows.

The statement is false.
', 'FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (desk / resident): consumer products include ordinary goods and services sold to households, including a desk for a resident.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
'] WHERE case_id = 'CASE 5.1.28' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

A desk is a product when exchanged to fulfil wishes and needs, regardless of advertising timing.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (software licence / household): a software licence remains a product in either channel; only the producer versus consumer label changes with the buyer.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (consultancy / software licence): customer identity on the invoice determines whether the same software licence is recorded as producer or consumer.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (vehicle / restaurant): sales to a business customer classify the vehicle as a b2b producer product, not a consumer product.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Wishes and needs give the exchanged software licence its role as a product rather than a non-market item.

The sentence therefore reports the concept accurately for this case.

The statement is true.
'] WHERE case_id = 'CASE 5.1.29' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Customers in the product definition may be other businesses or private households. That customer identity — not the factory process alone — drives B2B versus B2C product labels.

On this stem (software licence / household): traded software licence offerings create exchange value whether the buyer is a business or a household.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Sales to business customers classify the fabric roll as a b2b producer product.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (fabric / household): sales to household customers classify the fabric roll as a b2c consumer product.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Identical fabric roll models shift between producer and consumer labels with the customer, not the design.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

B2b exchange with a business buyer makes the fabric roll a producer product.

The sentence therefore reports the concept accurately for this case.

The statement is true.
'] WHERE case_id = 'CASE 5.1.30' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

B2c exchange with a household buyer makes the fabric roll a consumer product.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Commercial use by a business purchaser defines the fabric roll as a producer product.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Personal or domestic use by a household purchaser defines the fabric roll as a consumer product.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Operational needs of a business buyer place an exchanged fabric roll among producer products.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Personal wishes of a household buyer place an exchanged fabric roll among consumer products.

The sentence therefore reports the concept accurately for this case.

The statement is true.
'] WHERE case_id = 'CASE 5.1.31' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Sales to a household customer classify the vehicle as a b2c consumer product, not a producer product.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Inter-business sale of a fabric roll to a retail chain is a textbook producer product case.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Household sale of a fabric roll to a domestic customer is a textbook consumer product case.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'FALSE — The same catalogue item can be a producer product in one sale and a consumer product in another. Classification follows the buyer in that transaction, so absolute words like "always" or "only" usually fail.

Identical vehicle models can be producer or consumer products depending on the buyer.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — Marketing''s product definition is deliberately wide: it covers every exchangeable good and every exchangeable service that can fulfil customer wishes and needs. Physical form is not a requirement.

A vehicle can be a product when exchanged as a good or service to fulfil customer wishes and needs.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 5.1.32' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Exchange is required for a good or service to count as a product in marketing terminology. Items that are only moved internally, given without trade, or not offered for exchange fall outside that definition.

Exchange is required for a vehicle to count as a product in marketing terminology.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

A fabric roll remains a product in either channel; only the producer versus consumer label changes with the buyer.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (consultancy / fabric): customer identity on the invoice determines whether the same fabric roll is recorded as producer or consumer.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'FALSE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

On this stem (vehicle / restaurant): business customers have operational wishes and needs that exchanged vehicle offerings can fulfil as products.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Exchange is required for a good or service to count as a product in marketing terminology. Items that are only moved internally, given without trade, or not offered for exchange fall outside that definition.

On this stem (vehicle / households): household customers acquire consumer products such as a vehicle through b2c exchange.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
'] WHERE case_id = 'CASE 5.1.33' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Exchange is required for a good or service to count as a product in marketing terminology. Items that are only moved internally, given without trade, or not offered for exchange fall outside that definition.

On this stem (vehicle): internal transfers not offered for external exchange are not products in the marketing sense.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Wishes and needs give the exchanged fabric roll its role as a product rather than a non-market item.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (vehicle / restaurant): b2b classification depends on the business purchaser, not solely on the seller''s industry.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (vehicle / branding): b2c classification depends on the household purchaser, not on retail branding alone.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (vehicle / restaurant): payment alone does not make the sale b2c; a business buyer implies b2b and a producer product.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 5.1.34' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Traded fabric roll offerings create exchange value whether the buyer is a business or a household.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Sales to business customers classify the cleaning contract as a b2b producer product.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Sales to household customers classify the cleaning contract as a b2c consumer product.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (vehicle): the seller''s company status does not make a household sale b2b; it remains b2c with a consumer product.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (vehicle / restaurant): producer products include goods and services sold to businesses, including a finished vehicle for a restaurant chain.

Those restricting words stretch a limited idea past what marketing allows.

The statement is false.
'] WHERE case_id = 'CASE 5.1.35' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Consumer products include ordinary goods and services sold to households, including a vehicle for a individual consumer.

Those restricting words stretch a limited idea past what marketing allows.

The statement is false.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Identical cleaning contract models shift between producer and consumer labels with the customer, not the design.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

B2b exchange with a business buyer makes the cleaning contract a producer product.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'FALSE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

A vehicle is a product when exchanged to fulfil wishes and needs, regardless of advertising timing.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Commercial use by a business purchaser defines the cleaning contract as a producer product.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
'] WHERE case_id = 'CASE 5.1.36' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Personal or domestic use by a household purchaser defines the cleaning contract as a consumer product.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Sales to a business customer classify the software licence as a b2b producer product, not a consumer product.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (software licence / household): sales to a household customer classify the software licence as a b2c consumer product, not a producer product.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — The same catalogue item can be a producer product in one sale and a consumer product in another. Classification follows the buyer in that transaction, so absolute words like "always" or "only" usually fail.

Identical software licence models can be producer or consumer products depending on the buyer.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — Marketing''s product definition is deliberately wide: it covers every exchangeable good and every exchangeable service that can fulfil customer wishes and needs. Physical form is not a requirement.

A software licence can be a product when exchanged as a good or service to fulfil customer wishes and needs.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 5.1.37' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Operational needs of a business buyer place an exchanged cleaning contract among producer products.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Personal wishes of a household buyer place an exchanged cleaning contract among consumer products.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Inter-business sale of a cleaning contract to a hospital trust is a textbook producer product case.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Household sale of a cleaning contract to a private buyer is a textbook consumer product case.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

A cleaning contract remains a product in either channel; only the producer versus consumer label changes with the buyer.

Under that definition the assertion is the right description of the situation.

The statement is true.
'] WHERE case_id = 'CASE 5.1.38' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Exchange is required for a good or service to count as a product in marketing terminology. Items that are only moved internally, given without trade, or not offered for exchange fall outside that definition.

Exchange is required for a software licence to count as a product in marketing terminology.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (consultancy): customer identity on the invoice determines whether the same cleaning contract is recorded as producer or consumer.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Wishes and needs give the exchanged cleaning contract its role as a product rather than a non-market item.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Traded cleaning contract offerings create exchange value whether the buyer is a business or a household.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'FALSE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Business customers have operational wishes and needs that exchanged software licence offerings can fulfil as products.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 5.1.39' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Sales to business customers classify the training course as a b2b producer product.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'FALSE — Exchange is required for a good or service to count as a product in marketing terminology. Items that are only moved internally, given without trade, or not offered for exchange fall outside that definition.

On this stem (software licence / household): household customers acquire consumer products such as a software licence through b2c exchange.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Sales to household customers classify the training course as a b2c consumer product.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Identical training course models shift between producer and consumer labels with the customer, not the design.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

B2b exchange with a business buyer makes the training course a producer product.

Under that definition the assertion is the right description of the situation.

The statement is true.
'] WHERE case_id = 'CASE 5.1.40' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

B2c exchange with a household buyer makes the training course a consumer product.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Commercial use by a business purchaser defines the training course as a producer product.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Personal or domestic use by a household purchaser defines the training course as a consumer product.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'FALSE — Exchange is required for a good or service to count as a product in marketing terminology. Items that are only moved internally, given without trade, or not offered for exchange fall outside that definition.

On this stem (software licence): internal transfers not offered for external exchange are not products in the marketing sense.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Operational needs of a business buyer place an exchanged training course among producer products.

Under that definition the assertion is the right description of the situation.

The statement is true.
'] WHERE case_id = 'CASE 5.1.41' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (software licence): b2b classification depends on the business purchaser, not solely on the seller''s industry.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Personal wishes of a household buyer place an exchanged training course among consumer products.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (software licence / branding): b2c classification depends on the household purchaser, not on retail branding alone.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Inter-business sale of a training course to a local authority is a textbook producer product case.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Household sale of a training course to a home user is a textbook consumer product case.

The sentence therefore reports the concept accurately for this case.

The statement is true.
'] WHERE case_id = 'CASE 5.1.42' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

A training course remains a product in either channel; only the producer versus consumer label changes with the buyer.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (consultancy): customer identity on the invoice determines whether the same training course is recorded as producer or consumer.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Wishes and needs give the exchanged training course its role as a product rather than a non-market item.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Traded training course offerings create exchange value whether the buyer is a business or a household.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Sales to business customers classify the broadband package as a b2b producer product.

The sentence therefore reports the concept accurately for this case.

The statement is true.
'] WHERE case_id = 'CASE 5.1.43' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (software licence): payment alone does not make the sale b2c; a business buyer implies b2b and a producer product.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (software licence / household): the seller''s company status does not make a household sale b2b; it remains b2c with a consumer product.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (broadband / household): sales to household customers classify the broadband package as a b2c consumer product.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Producer products include goods and services sold to businesses, including a finished software licence for a construction contractor.

Those restricting words stretch a limited idea past what marketing allows.

The statement is false.
', 'FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (software licence / household): consumer products include ordinary goods and services sold to households, including a software licence for a household shopper.

Those restricting words stretch a limited idea past what marketing allows.

The statement is false.
'] WHERE case_id = 'CASE 5.1.44' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

A software licence is a product when exchanged to fulfil wishes and needs, regardless of advertising timing.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Sales to a business customer classify the fabric roll as a b2b producer product, not a consumer product.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Sales to a household customer classify the fabric roll as a b2c consumer product, not a producer product.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Identical broadband package models shift between producer and consumer labels with the customer, not the design.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'FALSE — The same catalogue item can be a producer product in one sale and a consumer product in another. Classification follows the buyer in that transaction, so absolute words like "always" or "only" usually fail.

Identical fabric roll models can be producer or consumer products depending on the buyer.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
'] WHERE case_id = 'CASE 5.1.45' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Marketing''s product definition is deliberately wide: it covers every exchangeable good and every exchangeable service that can fulfil customer wishes and needs. Physical form is not a requirement.

A fabric roll can be a product when exchanged as a good or service to fulfil customer wishes and needs.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Exchange is required for a good or service to count as a product in marketing terminology. Items that are only moved internally, given without trade, or not offered for exchange fall outside that definition.

Exchange is required for a fabric roll to count as a product in marketing terminology.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Business customers have operational wishes and needs that exchanged fabric roll offerings can fulfil as products.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

B2b exchange with a business buyer makes the broadband package a producer product.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'FALSE — Exchange is required for a good or service to count as a product in marketing terminology. Items that are only moved internally, given without trade, or not offered for exchange fall outside that definition.

On this stem (fabric / households): household customers acquire consumer products such as a fabric roll through b2c exchange.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
'] WHERE case_id = 'CASE 5.1.46' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

B2c exchange with a household buyer makes the broadband package a consumer product.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Commercial use by a business purchaser defines the broadband package as a producer product.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'FALSE — Exchange is required for a good or service to count as a product in marketing terminology. Items that are only moved internally, given without trade, or not offered for exchange fall outside that definition.

On this stem (fabric): internal transfers not offered for external exchange are not products in the marketing sense.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Personal or domestic use by a household purchaser defines the broadband package as a consumer product.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Operational needs of a business buyer place an exchanged broadband package among producer products.

The sentence therefore reports the concept accurately for this case.

The statement is true.
'] WHERE case_id = 'CASE 5.1.47' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Personal wishes of a household buyer place an exchanged broadband package among consumer products.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Inter-business sale of a broadband package to a export buyer is a textbook producer product case.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (fabric): b2b classification depends on the business purchaser, not solely on the seller''s industry.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Household sale of a broadband package to a personal customer is a textbook consumer product case.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (fabric / branding): b2c classification depends on the household purchaser, not on retail branding alone.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 5.1.48' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

A broadband package remains a product in either channel; only the producer versus consumer label changes with the buyer.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (fabric): payment alone does not make the sale b2c; a business buyer implies b2b and a producer product.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (fabric): the seller''s company status does not make a household sale b2b; it remains b2c with a consumer product.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Producer products include goods and services sold to businesses, including a finished fabric roll for a retail chain.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Consumer products include ordinary goods and services sold to households, including a fabric roll for a domestic customer.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
'] WHERE case_id = 'CASE 5.1.49' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (consultancy / broadband): customer identity on the invoice determines whether the same broadband package is recorded as producer or consumer.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Wishes and needs give the exchanged broadband package its role as a product rather than a non-market item.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Traded broadband package offerings create exchange value whether the buyer is a business or a household.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Sales to business customers classify the catering tray as a b2b producer product.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'FALSE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

A fabric roll is a product when exchanged to fulfil wishes and needs, regardless of advertising timing.

Those restricting words stretch a limited idea past what marketing allows.

The statement is false.
'] WHERE case_id = 'CASE 5.1.50' AND tier = 'full';
