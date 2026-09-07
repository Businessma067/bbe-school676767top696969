-- Update expanded explanations for 5.1-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Marketing''s product definition is deliberately wide: it covers every exchangeable good and every exchangeable service that can fulfil customer wishes and needs. Physical form is not a requirement.

Products include both goods and services when they are exchanged to fulfil customer wishes and needs.

Those restricting words stretch a limited idea past what marketing allows.

The statement is false.
', 'TRUE — In marketing terminology, a product is every good and/or service that can be exchanged to fulfil the wishes and needs of customers — tangible merchandise and intangible services alike.

The textbook definition treats exchangeable goods and services together as products aimed at customer wishes and needs.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Producer products are defined by b2b sale to another business, not by the manufacturing location.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Consumer products are defined by b2c sale to consumers or households, not by packaging size.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (printer / households): a printer bought for office use by a business is a producer product even if identical home models exist.

Those restricting words stretch a limited idea past what marketing allows.

The statement is false.
'] WHERE case_id = 'CASE 5.1.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (printer / printers): a printer bought for private home use is a consumer product even when the same model is sold to offices.

Those restricting words stretch a limited idea past what marketing allows.

The statement is false.
', 'TRUE — In marketing terminology, a product is every good and/or service that can be exchanged to fulfil the wishes and needs of customers — tangible merchandise and intangible services alike.

Exchangeable goods and services that address customer wishes and needs fall within the marketing product definition.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — In marketing terminology, a product is every good and/or service that can be exchanged to fulfil the wishes and needs of customers — tangible merchandise and intangible services alike.

Goods and services alike count as products once they are exchanged to fulfil customer wishes and needs.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — Customers in the product definition may be other businesses or private households. That customer identity — not the factory process alone — drives B2B versus B2C product labels.

On this stem (households): the product definition explicitly allows business customers and household customers.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

B2b sales of goods and services to other businesses are classified as producer products.

The sentence therefore reports the concept accurately for this case.

The statement is true.
'] WHERE case_id = 'CASE 5.1.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

B2c sales directed at consumers or households are classified as consumer products.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'FALSE — Marketing''s product definition is deliberately wide: it covers every exchangeable good and every exchangeable service that can fulfil customer wishes and needs. Physical form is not a requirement.

On this stem (Computer / support services): services such as computer support are products when exchanged to fulfil customer wishes and needs.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Producer products are linked to b2b marketing because the purchaser is another business.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (households): consumer products are linked to b2c marketing because the purchaser is a consumer or household.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Office purchase by a business makes the printer a producer product regardless of identical home models.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
'] WHERE case_id = 'CASE 5.1.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Exchange is required for a good or service to count as a product in marketing terminology. Items that are only moved internally, given without trade, or not offered for exchange fall outside that definition.

Exchange is required; free advice not offered for trade falls outside the marketing product definition.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Home purchase by a household makes the printer a consumer product regardless of identical office models.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (Computer / support services): household-directed computer support is a b2c consumer product in service form.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'FALSE — Exchange is required for a good or service to count as a product in marketing terminology. Items that are only moved internally, given without trade, or not offered for exchange fall outside that definition.

Items not offered for external exchange are not products in marketing terminology.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (Computer / support services): business-directed computer support is a b2b producer product in service form.

Under that definition the assertion is the right description of the situation.

The statement is true.
'] WHERE case_id = 'CASE 5.1.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

B2b and b2c describe whether the customer is a business or a household, not production technology.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — Exchange is required for a good or service to count as a product in marketing terminology. Items that are only moved internally, given without trade, or not offered for exchange fall outside that definition.

Products must be capable of exchange; items not offered for trade fall outside the definition.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

On this stem (maintenance contracts): exchanged services that satisfy needs qualify as products alongside goods.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Exchanged goods that satisfy wishes and needs are products within marketing terminology.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (printer / corporate client): sales to business customers classify the printer as a b2b producer product.

Under that definition the assertion is the right description of the situation.

The statement is true.
'] WHERE case_id = 'CASE 5.1.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (printer / household): sales to household customers classify the printer as a b2c consumer product.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Identical printer models shift between producer and consumer labels with the customer, not the design.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (printer / corporate client): b2b exchange with a business buyer makes the printer a producer product.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (printer / household): b2c exchange with a household buyer makes the printer a consumer product.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (printer / corporate client): commercial use by a business purchaser defines the printer as a producer product.

Under that definition the assertion is the right description of the situation.

The statement is true.
'] WHERE case_id = 'CASE 5.1.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The same catalogue item can be a producer product in one sale and a consumer product in another. Classification follows the buyer in that transaction, so absolute words like "always" or "only" usually fail.

Customers may be other businesses or private households according to the product definition.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — Exchange is required for a good or service to count as a product in marketing terminology. Items that are only moved internally, given without trade, or not offered for exchange fall outside that definition.

Without exchange, gifted goods are not products in the marketing sense.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Consumer products are defined by household or consumer purchase, not by physical size alone.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (printer / household): personal or domestic use by a household purchaser defines the printer as a consumer product.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Producer products are defined by business purchase, not by weight or bulk alone.

Those restricting words stretch a limited idea past what marketing allows.

The statement is false.
'] WHERE case_id = 'CASE 5.1.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Services sold to businesses are producer products in b2b exchange.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (printer / corporate client): sales to a business customer classify the printer as a b2b producer product, not a consumer product.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

On this stem (printer / corporate client): operational needs of a business buyer place an exchanged printer among producer products.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (printer / household): sales to a household customer classify the printer as a b2c consumer product, not a producer product.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — The same catalogue item can be a producer product in one sale and a consumer product in another. Classification follows the buyer in that transaction, so absolute words like "always" or "only" usually fail.

Identical printer models can be producer or consumer products depending on the buyer.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
'] WHERE case_id = 'CASE 5.1.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

On this stem (printer / household): personal wishes of a household buyer place an exchanged printer among consumer products.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (printer / corporate client): inter-business sale of a printer to a corporate client is a textbook producer product case.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'FALSE — Marketing''s product definition is deliberately wide: it covers every exchangeable good and every exchangeable service that can fulfil customer wishes and needs. Physical form is not a requirement.

A printer can be a product when exchanged as a good or service to fulfil customer wishes and needs.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Exchange is required for a good or service to count as a product in marketing terminology. Items that are only moved internally, given without trade, or not offered for exchange fall outside that definition.

Exchange is required for a printer to count as a product in marketing terminology.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (printer / household): household sale of a printer to a private household is a textbook consumer product case.

Under that definition the assertion is the right description of the situation.

The statement is true.
'] WHERE case_id = 'CASE 5.1.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (printer / corporate client): a printer remains a product in either channel; only the producer versus consumer label changes with the buyer.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (consultancy / printer): customer identity on the invoice determines whether the same printer is recorded as producer or consumer.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Wishes and needs give the exchanged printer its role as a product rather than a non-market item.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — Customers in the product definition may be other businesses or private households. That customer identity — not the factory process alone — drives B2B versus B2C product labels.

On this stem (printer / corporate client): traded printer offerings create exchange value whether the buyer is a business or a household.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (computer / manufacturing firm): sales to business customers classify the computer as a b2b producer product.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
'] WHERE case_id = 'CASE 5.1.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (computer / family home): sales to household customers classify the computer as a b2c consumer product.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'FALSE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

On this stem (printer / corporate client): business customers have operational wishes and needs that exchanged printer offerings can fulfil as products.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Exchange is required for a good or service to count as a product in marketing terminology. Items that are only moved internally, given without trade, or not offered for exchange fall outside that definition.

On this stem (printer / household): household customers acquire consumer products such as a printer through b2c exchange.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Identical computer models shift between producer and consumer labels with the customer, not the design.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'FALSE — Exchange is required for a good or service to count as a product in marketing terminology. Items that are only moved internally, given without trade, or not offered for exchange fall outside that definition.

On this stem (printer): internal transfers not offered for external exchange are not products in the marketing sense.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 5.1.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (computer / manufacturing firm): b2b exchange with a business buyer makes the computer a producer product.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (computer / manufacturing firm): commercial use by a business purchaser defines the computer as a producer product.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (computer / family home): personal or domestic use by a household purchaser defines the computer as a consumer product.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

On this stem (computer / manufacturing firm): operational needs of a business buyer place an exchanged computer among producer products.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

On this stem (computer / family home): personal wishes of a household buyer place an exchanged computer among consumer products.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
'] WHERE case_id = 'CASE 5.1.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (printer / corporate client): b2b classification depends on the business purchaser, not solely on the seller''s industry.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (computer / manufacturing firm): inter-business sale of a computer to a manufacturing firm is a textbook producer product case.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (printer / branding): b2c classification depends on the household purchaser, not on retail branding alone.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (computer / family home): household sale of a computer to a family home is a textbook consumer product case.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (computer / manufacturing firm): a computer remains a product in either channel; only the producer versus consumer label changes with the buyer.

The sentence therefore reports the concept accurately for this case.

The statement is true.
'] WHERE case_id = 'CASE 5.1.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (printer / corporate client): payment alone does not make the sale b2c; a business buyer implies b2b and a producer product.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (printer / household): the seller''s company status does not make a household sale b2b; it remains b2c with a consumer product.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (printer / corporate client): producer products include goods and services sold to businesses, including a finished printer for a corporate client.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (printer / household): consumer products include ordinary goods and services sold to households, including a printer for a private household.

Those restricting words stretch a limited idea past what marketing allows.

The statement is false.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (consultancy / computer): customer identity on the invoice determines whether the same computer is recorded as producer or consumer.

Under that definition the assertion is the right description of the situation.

The statement is true.
'] WHERE case_id = 'CASE 5.1.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Wishes and needs give the exchanged computer its role as a product rather than a non-market item.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'FALSE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

A printer is a product when exchanged to fulfil wishes and needs, regardless of advertising timing.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (computer / manufacturing firm): sales to a business customer classify the computer as a b2b producer product, not a consumer product.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (computer / family home): sales to a household customer classify the computer as a b2c consumer product, not a producer product.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — The same catalogue item can be a producer product in one sale and a consumer product in another. Classification follows the buyer in that transaction, so absolute words like "always" or "only" usually fail.

Identical computer models can be producer or consumer products depending on the buyer.

Those restricting words stretch a limited idea past what marketing allows.

The statement is false.
'] WHERE case_id = 'CASE 5.1.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Marketing''s product definition is deliberately wide: it covers every exchangeable good and every exchangeable service that can fulfil customer wishes and needs. Physical form is not a requirement.

A computer can be a product when exchanged as a good or service to fulfil customer wishes and needs.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

On this stem (computer / manufacturing firm): traded computer offerings create exchange value whether the buyer is a business or a household.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'FALSE — Exchange is required for a good or service to count as a product in marketing terminology. Items that are only moved internally, given without trade, or not offered for exchange fall outside that definition.

Exchange is required for a computer to count as a product in marketing terminology.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

On this stem (computer / manufacturing firm): business customers have operational wishes and needs that exchanged computer offerings can fulfil as products.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Exchange is required for a good or service to count as a product in marketing terminology. Items that are only moved internally, given without trade, or not offered for exchange fall outside that definition.

On this stem (computer / family home): household customers acquire consumer products such as a computer through b2c exchange.

Those restricting words stretch a limited idea past what marketing allows.

The statement is false.
'] WHERE case_id = 'CASE 5.1.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (desk / logistics company): sales to business customers classify the desk as a b2b producer product.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (desk / resident): sales to household customers classify the desk as a b2c consumer product.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Identical desk models shift between producer and consumer labels with the customer, not the design.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (desk / logistics company): b2b exchange with a business buyer makes the desk a producer product.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (desk / logistics company): commercial use by a business purchaser defines the desk as a producer product.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
'] WHERE case_id = 'CASE 5.1.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (desk / resident): personal or domestic use by a household purchaser defines the desk as a consumer product.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'FALSE — Exchange is required for a good or service to count as a product in marketing terminology. Items that are only moved internally, given without trade, or not offered for exchange fall outside that definition.

On this stem (computer): internal transfers not offered for external exchange are not products in the marketing sense.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

On this stem (desk / logistics company): operational needs of a business buyer place an exchanged desk among producer products.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

On this stem (desk / resident): personal wishes of a household buyer place an exchanged desk among consumer products.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (computer / manufacturing firm): b2b classification depends on the business purchaser, not solely on the seller''s industry.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 5.1.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (desk / logistics company): inter-business sale of a desk to a logistics company is a textbook producer product case.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (computer / branding): b2c classification depends on the household purchaser, not on retail branding alone.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (desk / resident): household sale of a desk to a resident is a textbook consumer product case.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (desk / logistics company): a desk remains a product in either channel; only the producer versus consumer label changes with the buyer.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (consultancy / desk): customer identity on the invoice determines whether the same desk is recorded as producer or consumer.

Under that definition the assertion is the right description of the situation.

The statement is true.
'] WHERE case_id = 'CASE 5.1.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Wishes and needs give the exchanged desk its role as a product rather than a non-market item.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

On this stem (desk / logistics company): traded desk offerings create exchange value whether the buyer is a business or a household.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (vehicle / restaurant): sales to business customers classify the vehicle as a b2b producer product.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (vehicle / household): sales to household customers classify the vehicle as a b2c consumer product.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Identical vehicle models shift between producer and consumer labels with the customer, not the design.

Under that definition the assertion is the right description of the situation.

The statement is true.
'] WHERE case_id = 'CASE 5.1.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (vehicle / restaurant): b2b exchange with a business buyer makes the vehicle a producer product.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (vehicle / restaurant): commercial use by a business purchaser defines the vehicle as a producer product.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Personal or domestic use by a household purchaser defines the vehicle as a consumer product.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

On this stem (vehicle / restaurant): operational needs of a business buyer place an exchanged vehicle among producer products.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Personal wishes of a household buyer place an exchanged vehicle among consumer products.

Under that definition the assertion is the right description of the situation.

The statement is true.
'] WHERE case_id = 'CASE 5.1.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (computer / manufacturing firm): payment alone does not make the sale b2c; a business buyer implies b2b and a producer product.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (computer / family home): the seller''s company status does not make a household sale b2b; it remains b2c with a consumer product.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (computer / manufacturing firm): producer products include goods and services sold to businesses, including a finished computer for a manufacturing firm.

Those restricting words stretch a limited idea past what marketing allows.

The statement is false.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (vehicle / restaurant): inter-business sale of a vehicle to a restaurant chain is a textbook producer product case.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (computer / family home): consumer products include ordinary goods and services sold to households, including a computer for a family home.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
'] WHERE case_id = 'CASE 5.1.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

Household sale of a vehicle to a individual consumer is a textbook consumer product case.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'FALSE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

A computer is a product when exchanged to fulfil wishes and needs, regardless of advertising timing.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (desk / logistics company): sales to a business customer classify the desk as a b2b producer product, not a consumer product.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (vehicle / restaurant): a vehicle remains a product in either channel; only the producer versus consumer label changes with the buyer.

Under that definition the assertion is the right description of the situation.

The statement is true.
', 'TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (consultancy / vehicle): customer identity on the invoice determines whether the same vehicle is recorded as producer or consumer.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
'] WHERE case_id = 'CASE 5.1.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

Wishes and needs give the exchanged vehicle its role as a product rather than a non-market item.

The sentence therefore reports the concept accurately for this case.

The statement is true.
', 'FALSE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

On this stem (desk / resident): sales to a household customer classify the desk as a b2c consumer product, not a producer product.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — The same catalogue item can be a producer product in one sale and a consumer product in another. Classification follows the buyer in that transaction, so absolute words like "always" or "only" usually fail.

Identical desk models can be producer or consumer products depending on the buyer.

Those restricting words stretch a limited idea past what marketing allows.

The statement is false.
', 'FALSE — Marketing''s product definition is deliberately wide: it covers every exchangeable good and every exchangeable service that can fulfil customer wishes and needs. Physical form is not a requirement.

A desk can be a product when exchanged as a good or service to fulfil customer wishes and needs.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

On this stem (vehicle / restaurant): traded vehicle offerings create exchange value whether the buyer is a business or a household.

Under that definition the assertion is the right description of the situation.

The statement is true.
'] WHERE case_id = 'CASE 5.1.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Producer products are goods and services sold from one business to another (B2B). What matters is the purchaser''s identity as a business customer, not factory origin, weight, packaging, or the seller''s registration alone.

Sales to business customers classify the software licence as a b2b producer product.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
', 'FALSE — Exchange is required for a good or service to count as a product in marketing terminology. Items that are only moved internally, given without trade, or not offered for exchange fall outside that definition.

Exchange is required for a desk to count as a product in marketing terminology.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — A product in marketing is any good and/or service that can be exchanged to fulfil customer wishes and needs, whether the customer is a firm or a household.

On this stem (desk / logistics company): business customers have operational wishes and needs that exchanged desk offerings can fulfil as products.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Exchange is required for a good or service to count as a product in marketing terminology. Items that are only moved internally, given without trade, or not offered for exchange fall outside that definition.

On this stem (desk / resident): household customers acquire consumer products such as a desk through b2c exchange.

Those restricting words stretch a limited idea past what marketing allows.

The statement is false.
', 'TRUE — Consumer products are goods and services sold to consumers or private households (B2C). The household or individual buyer defines the label, not retail branding, luxury status, or physical size.

On this stem (software licence / household): sales to household customers classify the software licence as a b2c consumer product.

Nothing in the wording contradicts that marketing test, so the claim is sound.

The statement is true.
'] WHERE case_id = 'CASE 5.1.25' AND tier = 'full';
