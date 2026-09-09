-- Update expanded explanations for 5.2-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Dissatisfied customers typically withhold repeat purchases, which is why satisfaction is a core marketing objective.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Satisfaction frequently leads to loyalty and repeat buying behaviour.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Satisfaction is explicitly interrelated with repeat purchase and loyalty objectives.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'The text links satisfaction to other marketing goals rather than treating it in isolation.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Businesses analyse wishes and needs before clarifying the objectives they pursue.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 5.2.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Unsatisfied customers tend not to return, undermining sales and loyalty objectives.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Dissatisfied customers are unlikely to buy again per the marketing framework.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Future purchase intent is tied to how satisfied the customer felt after buying.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Satisfaction is one of several objectives, not the sole aim.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'The text requires market and wishes/needs analysis before setting objectives.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 5.2.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Repeat purchases from loyal customers support the sales objective.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Satisfaction aims at ongoing relationships, not isolated single purchases.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Satisfied customers often become loyal and may buy again.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Positive satisfaction can generate word-of-mouth that supports sales growth.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Satisfaction is a general marketing objective for businesses fulfilling customer needs.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 5.2.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Repeat purchase is evidence satisfaction objectives matter, not that they are redundant.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Repurchase potential is linked to satisfaction in the marketing objectives framework.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Persistent dissatisfaction indicates objectives around satisfaction are not being met.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Profitability does not remove satisfaction from the set of possible objectives.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'The text states dissatisfied customers will not buy again, not merely resist until a small discount.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 5.2.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Satisfaction is an objective in its own right, not a post-profit afterthought.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Feedback instruments help assess progress toward satisfaction goals.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Loyalty generally builds on satisfaction with what was purchased.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Loyalty in the framework builds on satisfied customers who may buy again.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Expectations met through satisfactory experience encourage buying again.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 5.2.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Satisfaction is interrelated with other marketing objectives including sales.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Wishes and needs analysis precedes clear marketing objectives regardless of brand strength.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'The text presents satisfaction as interrelated with sales and other objectives.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'The text requires satisfaction, not impossible perfection on every dimension.

The absolute wording "every" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Rising complaints signal failure on satisfaction objectives.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 5.2.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Understanding needs helps avoid the outcome where buyers refuse repeat purchase.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'The satisfaction objective supports turning initial purchases into repeat business.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Retained satisfied buyers help maintain share against competitors.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Satisfied customers may recommend products, extending marketing impact.

The absolute wording "never" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Price cuts alone do not define satisfaction in the marketing objectives framework.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 5.2.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A single purchase does not prove satisfaction objectives are met.

The absolute wording "automatically" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Dissatisfied customers will not buy again according to the text.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Objectives are interrelated and can coexist within a marketing plan.

The absolute wording "cannot" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Elevated complaints indicate failure relative to the satisfaction goal.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Surveys help assess whether satisfaction objectives are being achieved.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 5.2.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Loyalty initiatives work best when underlying satisfaction is already present.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Unmet needs undermine sales because buyers avoid repeat purchase.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Loyalty is linked to satisfied customers who possibly buy again.

The absolute wording "regardless" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Quality satisfaction supports brand-level repeat choice.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Satisfaction and sales objectives are presented as interrelated.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 5.2.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Repurchase frequency reflects whether customers remain satisfied.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Fulfilled wishes support the repeat purchase outcome described in the text.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Customers must be satisfied with the differentiated offer for loyalty to follow.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Dissatisfied customers may switch to rivals, reducing relative share.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'The text states dissatisfied customers will not buy again.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 5.2.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Satisfaction is not deferred until share targets are met.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Satisfaction and loyalty are explicitly linked in the framework.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Loyalty in the framework follows from satisfactory prior buying experiences.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Fulfilling wishes and needs remains central even with differentiation.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Loyal repeat buyers support sales, share, and profitability aims.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 5.2.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Repeat purchase from satisfaction is voluntary customer behaviour.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Market analysis of wishes and needs supports satisfaction objectives.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Satisfaction interrelates with sales through repeat purchase and loyalty.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Satisfaction supports but does not replace other objectives like share.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Dissatisfaction leads customers not to buy again, harming sales.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 5.2.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Reach alone does not satisfy; experience with the product matters.

The absolute wording "regardless" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Satisfied customers may buy other products from the firm.

The absolute wording "never" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Retention of satisfied buyers supplements acquisition in meeting sales goals.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Usp and satisfaction interrelate when customers experience the differentiated offer.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Falling repurchase despite claimed satisfaction may reflect real objective failure.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.'] WHERE case_id = 'CASE 5.2.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The text lists satisfaction among multiple possible marketing objectives.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Repeat revenue from satisfied customers can support profit objectives.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Satisfaction reduces switching, helping maintain share and sales.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Satisfaction concerns meeting wishes and needs, not being cheapest.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Satisfaction metrics complement sales data in objective review.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 5.2.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Loyalty programmes complement but do not replace satisfaction objectives.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Dissatisfaction undermines loyalty even with rewards enrolment.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Positive first-use experience supports subsequent loyalty.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Satisfaction is a marketing objective distinct from gross profit.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Satisfaction is a general objective across market conditions.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 5.2.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Satisfaction helps retention but does not make switching impossible.

The absolute wording "never" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Maximising production volume does not equate to customer satisfaction.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Usp means the product is or is considered different from similar products.

The absolute wording "all" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Temporary sales spikes fail if buyers are dissatisfied and do not return.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Delivering on promises links satisfaction to credible usp claims.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 5.2.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Household repeat visits indicate ongoing satisfaction.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Recurring revenue from loyal buyers can support profit aims.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Differentiation can be based on perception and promotion as well as characteristics.

The absolute wording "every" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Building a brand supports creating a usp per the text.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Satisfaction is one objective among several, not the only one.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 5.2.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Falling satisfaction can foreshadow share loss to rivals.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Satisfaction with the core offer supports acceptance of related products.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Repeat purchase from satisfied customers is explicitly noted.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Usp objectives assume satisfaction sustains the loyalty usp is meant to create.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Understanding needs informs what satisfaction should look like.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 5.2.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Service satisfaction supports broader objective success.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Usp concerns differentiation, not total market dominance.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Differentiation is also called product differentiation in the usp context.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Repeat buyers lower effective acquisition cost, aiding profitability.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Preventing abandonment through satisfaction supports retention.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 5.2.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Differentiation can arise from promotion and how customers perceive the product.

The absolute wording "cannot" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Usp positions the product as special, unique, or better than the rest.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Usp helps attract many loyal customers, not only one-time buyers.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Loyal satisfied buyers may resist switching on price alone.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Brand-building supports rather than undermines usp creation.

The absolute wording "all" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.'] WHERE case_id = 'CASE 5.2.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Feedback reveals whether perceived differentiation is experienced as satisfactory.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Usp interrelates with satisfaction when customers experience the offer.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Usp and differentiation are general marketing objectives.

The absolute wording "never" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Promotion-based perception is explicitly valid for differentiation.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Product lines may carry distinct usps within a brand.

The absolute wording "cannot" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.'] WHERE case_id = 'CASE 5.2.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Dissatisfaction can spread wariness across the firm''s offerings.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Usp aims to attract loyal customers through perceived difference.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Fulfilling wishes and needs is the broader aim satisfaction supports.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Differentiation requires difference from similar products, not exact copying.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Usp concerns uniqueness or perceived superiority, not price alone.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 5.2.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Satisfaction often precedes loyalty in the described relationship.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Repurchase signals progress on satisfaction-linked loyalty.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Retained buyers help hold share against competitors.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Multi-period sales benefit when satisfaction drives repeat buying.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Usp attraction of loyal customers assumes satisfactory product experience.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 5.2.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Satisfaction and sales objectives reinforce each other in the text.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Better satisfaction can show up as higher retention over time.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Usp is defined as actual or perceived difference from similar offerings.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Differentiation may rest on tangible product features.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Brand-building supports usp within marketing objectives.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 5.2.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Promotion and perception are valid bases for differentiation.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Customers may consider a product different even when functional similarities exist.

The absolute wording "cannot" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Usp supports competitiveness but does not alone guarantee share.

The absolute wording "guarantees" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Packaging and presentation can contribute to perceived differentiation.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Brand-building is explicitly linked to usp creation.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 5.2.25' AND tier = 'full';
