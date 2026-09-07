-- Update expanded explanations for 5.1-part3 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Sales to a business customer classify the cleaning contract as a b2b producer product, not a consumer product.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Sales to a household customer classify the cleaning contract as a b2c consumer product, not a producer product.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Sales to household customers classify the catering tray as a b2c consumer product.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Identical catering tray models shift between producer and consumer labels with the customer, not the design.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'FALSE — The same catalogue item can be a producer product in one sale and a consumer product in another. Classification follows the buyer in that transaction, so absolute words like "always" or "only" usually fail.

Identical cleaning contract models can be producer or consumer products depending on the buyer.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
'] WHERE case_id = 'CASE 5.1.51' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Marketing''s product definition is deliberately wide: it covers every exchangeable good and every exchangeable service that can fulfil customer wishes and needs. Physical form is not a requirement.

A cleaning contract can be a product when exchanged as a good or service to fulfil customer wishes and needs.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

B2b exchange with a business buyer makes the catering tray a producer product.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'FALSE — Exchange is required for a good or service to count as a product in marketing terminology. Items that are only moved internally, given without trade, or not offered for exchange fall outside that definition.

Exchange is required for a cleaning contract to count as a product in marketing terminology.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Commercial use by a business purchaser defines the catering tray as a producer product.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'FALSE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Business customers have operational wishes and needs that exchanged cleaning contract offerings can fulfil as products.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 5.1.52' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Personal or domestic use by a household purchaser defines the catering tray as a consumer product.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'FALSE — Exchange is required for a good or service to count as a product in marketing terminology. Items that are only moved internally, given without trade, or not offered for exchange fall outside that definition.

On this stem (households): household customers acquire consumer products such as a cleaning contract through b2c exchange.

Those restricting words stretch a limited idea past what marketing allows.

The statement is false.
', 'FALSE — Exchange is required for a good or service to count as a product in marketing terminology. Items that are only moved internally, given without trade, or not offered for exchange fall outside that definition.

Internal transfers not offered for external exchange are not products in the marketing sense.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

B2b classification depends on the business purchaser, not solely on the seller''s industry.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Operational needs of a business buyer place an exchanged catering tray among producer products.

The sentence therefore reports the concept accurately for this case.

The statement is true.
'] WHERE case_id = 'CASE 5.1.53' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

B2c classification depends on the household purchaser, not on retail branding alone.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Personal wishes of a household buyer place an exchanged catering tray among consumer products.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Payment alone does not make the sale b2c; a business buyer implies b2b and a producer product.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Inter-business sale of a catering tray to a warehouse operator is a textbook producer product case.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

The seller''s company status does not make a household sale b2b; it remains b2c with a consumer product.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 5.1.54' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Household sale of a catering tray to a household member is a textbook consumer product case.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Producer products include goods and services sold to businesses, including a finished cleaning contract for a hospital trust.

Those restricting words stretch a limited idea past what marketing allows.

The statement is false.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (household): a catering tray remains a product in either channel; only the producer versus consumer label changes with the buyer.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (consultancy / household): customer identity on the invoice determines whether the same catering tray is recorded as producer or consumer.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Wishes and needs give the exchanged catering tray its role as a product rather than a non-market item.

Under that definition the assertion is the right description of the situation.

The statement is true.
'] WHERE case_id = 'CASE 5.1.55' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Consumer products include ordinary goods and services sold to households, including a cleaning contract for a private buyer.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

A cleaning contract is a product when exchanged to fulfil wishes and needs, regardless of advertising timing.

Those restricting words stretch a limited idea past what marketing allows.

The statement is false.
', 'FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Sales to a business customer classify the training course as a b2b producer product, not a consumer product.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Customers in the product definition may be other businesses or private households. That customer identity — not the factory process alone — drives B2B versus B2C product labels.

Traded catering tray offerings create exchange value whether the buyer is a business or a household.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Sales to a household customer classify the training course as a b2c consumer product, not a producer product.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'] WHERE case_id = 'CASE 5.1.56' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

B2b network maintenance for a business customer is classified as a producer product.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'FALSE — The same catalogue item can be a producer product in one sale and a consumer product in another. Classification follows the buyer in that transaction, so absolute words like "always" or "only" usually fail.

Identical training course models can be producer or consumer products depending on the buyer.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

B2c network maintenance for a household customer is classified as a consumer product.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

On this stem (maintenance contract): business-need fulfilment through exchanged network maintenance makes the service a product sold b2b.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Household-wish fulfilment through exchanged network maintenance makes the service a product sold b2c.

Under that definition the assertion is the right description of the situation.

The statement is true.
'] WHERE case_id = 'CASE 5.1.57' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Marketing''s product definition is deliberately wide: it covers every exchangeable good and every exchangeable service that can fulfil customer wishes and needs. Physical form is not a requirement.

A training course can be a product when exchanged as a good or service to fulfil customer wishes and needs.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Exchange is required for a good or service to count as a product in marketing terminology. Items that are only moved internally, given without trade, or not offered for exchange fall outside that definition.

Exchange is required for a training course to count as a product in marketing terminology.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Business customers have operational wishes and needs that exchanged training course offerings can fulfil as products.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Network maintenance under a commercial contract to a insurance company is a producer product service.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'FALSE — Exchange is required for a good or service to count as a product in marketing terminology. Items that are only moved internally, given without trade, or not offered for exchange fall outside that definition.

On this stem (households): household customers acquire consumer products such as a training course through b2c exchange.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
'] WHERE case_id = 'CASE 5.1.58' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Network maintenance for personal or domestic benefit to a retired couple is a consumer product service.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'FALSE — Exchange is required for a good or service to count as a product in marketing terminology. Items that are only moved internally, given without trade, or not offered for exchange fall outside that definition.

Internal transfers not offered for external exchange are not products in the marketing sense.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

B2b classification depends on the business purchaser, not solely on the seller''s industry.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Dual-channel network maintenance sales illustrate producer and consumer labels driven by customer type.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — The same catalogue item can be a producer product in one sale and a consumer product in another. Classification follows the buyer in that transaction, so absolute words like "always" or "only" usually fail.

Exchange of network maintenance with either business or household buyers keeps it within the product concept.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
'] WHERE case_id = 'CASE 5.1.59' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

B2b purchase of network maintenance by a insurance company yields a producer product classification.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

B2c classification depends on the household purchaser, not on retail branding alone.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Payment alone does not make the sale b2c; a business buyer implies b2b and a producer product.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

B2c purchase of network maintenance by a retired couple yields a consumer product classification.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Intangible network maintenance counts as a product once exchanged to satisfy needs.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
'] WHERE case_id = 'CASE 5.1.60' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

The seller''s company status does not make a household sale b2b; it remains b2c with a consumer product.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Paid transfer of network maintenance to a customer with unmet wishes or needs defines a marketing product.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Producer products include goods and services sold to businesses, including a finished training course for a local authority.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

B2b payroll processing for a business customer is classified as a producer product.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Consumer products include ordinary goods and services sold to households, including a training course for a home user.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
'] WHERE case_id = 'CASE 5.1.61' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

B2c payroll processing for a household customer is classified as a consumer product.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'FALSE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

A training course is a product when exchanged to fulfil wishes and needs, regardless of advertising timing.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Business-need fulfilment through exchanged payroll processing makes the service a product sold b2b.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Sales to a business customer classify the broadband package as a b2b producer product, not a consumer product.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Household-wish fulfilment through exchanged payroll processing makes the service a product sold b2c.

Under that definition the assertion is the right description of the situation.

The statement is true.
'] WHERE case_id = 'CASE 5.1.62' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Payroll processing under a commercial contract to a accounting partnership is a producer product service.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Payroll processing for personal or domestic benefit to a young professional is a consumer product service.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Dual-channel payroll processing sales illustrate producer and consumer labels driven by customer type.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — The same catalogue item can be a producer product in one sale and a consumer product in another. Classification follows the buyer in that transaction, so absolute words like "always" or "only" usually fail.

Exchange of payroll processing with either business or household buyers keeps it within the product concept.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Sales to a household customer classify the broadband package as a b2c consumer product, not a producer product.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'] WHERE case_id = 'CASE 5.1.63' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The same catalogue item can be a producer product in one sale and a consumer product in another. Classification follows the buyer in that transaction, so absolute words like "always" or "only" usually fail.

Identical broadband package models can be producer or consumer products depending on the buyer.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Marketing''s product definition is deliberately wide: it covers every exchangeable good and every exchangeable service that can fulfil customer wishes and needs. Physical form is not a requirement.

A broadband package can be a product when exchanged as a good or service to fulfil customer wishes and needs.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Exchange is required for a good or service to count as a product in marketing terminology. Items that are only moved internally, given without trade, or not offered for exchange fall outside that definition.

Exchange is required for a broadband package to count as a product in marketing terminology.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Business customers have operational wishes and needs that exchanged broadband package offerings can fulfil as products.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

B2b purchase of payroll processing by a accounting partnership yields a producer product classification.

The sentence therefore reports the concept accurately for this case.

The statement is true.
'] WHERE case_id = 'CASE 5.1.64' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Exchange is required for a good or service to count as a product in marketing terminology. Items that are only moved internally, given without trade, or not offered for exchange fall outside that definition.

On this stem (broadband / households): household customers acquire consumer products such as a broadband package through b2c exchange.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — Exchange is required for a good or service to count as a product in marketing terminology. Items that are only moved internally, given without trade, or not offered for exchange fall outside that definition.

On this stem (broadband): internal transfers not offered for external exchange are not products in the marketing sense.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

B2c purchase of payroll processing by a young professional yields a consumer product classification.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Intangible payroll processing counts as a product once exchanged to satisfy needs.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Paid transfer of payroll processing to a customer with unmet wishes or needs defines a marketing product.

Under that definition the assertion is the right description of the situation.

The statement is true.
'] WHERE case_id = 'CASE 5.1.65' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

B2b equipment leasing for a business customer is classified as a producer product.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (broadband): b2b classification depends on the business purchaser, not solely on the seller''s industry.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

B2c equipment leasing for a household customer is classified as a consumer product.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (broadband / branding): b2c classification depends on the household purchaser, not on retail branding alone.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (broadband): payment alone does not make the sale b2c; a business buyer implies b2b and a producer product.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 5.1.66' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Business-need fulfilment through exchanged equipment leasing makes the service a product sold b2b.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Household-wish fulfilment through exchanged equipment leasing makes the service a product sold b2c.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Equipment leasing under a commercial contract to a shipping line is a producer product service.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Equipment leasing for personal or domestic benefit to a suburban family is a consumer product service.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Dual-channel equipment leasing sales illustrate producer and consumer labels driven by customer type.

The sentence therefore reports the concept accurately for this case.

The statement is true.
'] WHERE case_id = 'CASE 5.1.67' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (broadband): the seller''s company status does not make a household sale b2b; it remains b2c with a consumer product.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — The same catalogue item can be a producer product in one sale and a consumer product in another. Classification follows the buyer in that transaction, so absolute words like "always" or "only" usually fail.

Exchange of equipment leasing with either business or household buyers keeps it within the product concept.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

B2b purchase of equipment leasing by a shipping line yields a producer product classification.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

B2c purchase of equipment leasing by a suburban family yields a consumer product classification.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Intangible equipment leasing counts as a product once exchanged to satisfy needs.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
'] WHERE case_id = 'CASE 5.1.68' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Producer products include goods and services sold to businesses, including a finished broadband package for a export buyer.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Paid transfer of equipment leasing to a customer with unmet wishes or needs defines a marketing product.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

B2b staff training for a business customer is classified as a producer product.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

B2c staff training for a household customer is classified as a consumer product.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Business-need fulfilment through exchanged staff training makes the service a product sold b2b.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
'] WHERE case_id = 'CASE 5.1.69' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Household-wish fulfilment through exchanged staff training makes the service a product sold b2c.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Staff training under a commercial contract to a engineering plant is a producer product service.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Staff training for personal or domestic benefit to a student renter is a consumer product service.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Dual-channel staff training sales illustrate producer and consumer labels driven by customer type.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — The same catalogue item can be a producer product in one sale and a consumer product in another. Classification follows the buyer in that transaction, so absolute words like "always" or "only" usually fail.

Exchange of staff training with either business or household buyers keeps it within the product concept.

The sentence therefore reports the concept accurately for this case.

The statement is true.
'] WHERE case_id = 'CASE 5.1.70' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

B2b purchase of staff training by a engineering plant yields a producer product classification.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

B2c purchase of staff training by a student renter yields a consumer product classification.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Intangible staff training counts as a product once exchanged to satisfy needs.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Paid transfer of staff training to a customer with unmet wishes or needs defines a marketing product.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

B2b security monitoring for a business customer is classified as a producer product.

The sentence therefore reports the concept accurately for this case.

The statement is true.
'] WHERE case_id = 'CASE 5.1.71' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Consumer products include ordinary goods and services sold to households, including a broadband package for a personal customer.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

B2c security monitoring for a household customer is classified as a consumer product.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Business-need fulfilment through exchanged security monitoring makes the service a product sold b2b.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Household-wish fulfilment through exchanged security monitoring makes the service a product sold b2c.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Security monitoring under a commercial contract to a data centre operator is a producer product service.

Under that definition the assertion is the right description of the situation.

The statement is true.
'] WHERE case_id = 'CASE 5.1.72' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

A broadband package is a product when exchanged to fulfil wishes and needs, regardless of advertising timing.

Those restricting words stretch a limited idea past what marketing allows.

The statement is false.
', 'FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Sales to a business customer classify the catering tray as a b2b producer product, not a consumer product.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Sales to a household customer classify the catering tray as a b2c consumer product, not a producer product.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Security monitoring for personal or domestic benefit to a self-employed artisan is a consumer product service.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Dual-channel security monitoring sales illustrate producer and consumer labels driven by customer type.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
'] WHERE case_id = 'CASE 5.1.73' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The same catalogue item can be a producer product in one sale and a consumer product in another. Classification follows the buyer in that transaction, so absolute words like "always" or "only" usually fail.

Exchange of security monitoring with either business or household buyers keeps it within the product concept.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

B2b purchase of security monitoring by a data centre operator yields a producer product classification.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'FALSE — The same catalogue item can be a producer product in one sale and a consumer product in another. Classification follows the buyer in that transaction, so absolute words like "always" or "only" usually fail.

Identical catering tray models can be producer or consumer products depending on the buyer.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

B2c purchase of security monitoring by a self-employed artisan yields a consumer product classification.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Intangible security monitoring counts as a product once exchanged to satisfy needs.

The sentence therefore reports the concept accurately for this case.

The statement is true.
'] WHERE case_id = 'CASE 5.1.74' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Paid transfer of security monitoring to a customer with unmet wishes or needs defines a marketing product.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'FALSE — Marketing''s product definition is deliberately wide: it covers every exchangeable good and every exchangeable service that can fulfil customer wishes and needs. Physical form is not a requirement.

A catering tray can be a product when exchanged as a good or service to fulfil customer wishes and needs.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

B2b document printing for a business customer is classified as a producer product.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'FALSE — Exchange is required for a good or service to count as a product in marketing terminology. Items that are only moved internally, given without trade, or not offered for exchange fall outside that definition.

Exchange is required for a catering tray to count as a product in marketing terminology.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

B2c document printing for a household customer is classified as a consumer product.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
'] WHERE case_id = 'CASE 5.1.75' AND tier = 'full';
