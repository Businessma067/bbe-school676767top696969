-- Update expanded explanations for 5.6-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — This statement is correct. Market segmentation divides a market into relatively homogeneous subgroups of customers who share relevant characteristics.

The relevant theory comes from market segmentation and targeting. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, segmentation creates subgroups that are relatively homogeneous with respect to relevant customer characteristics. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — The claim is correct. Geographic segmentation groups customers according to where they live or operate, such as a city and its surrounding area.

This statement draws on market segmentation and targeting. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, location-based grouping such as city and surrounding area is geographic segmentation. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'TRUE — The claim is correct. Demographic segmentation uses measurable social characteristics such as age, gender, education level, and income level.

This statement draws on market segmentation and targeting. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, age, gender, education, and income are textbook demographic segmentation variables. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Psychographic segmentation reflects attitudes, values, lifestyle interests, and willingness to pay for particular product philosophies.

This statement draws on market segmentation and targeting. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, attitudes, values, and lifestyle interests underpin psychographic segmentation. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Market segmentation requires every customer in a subgroup to be identical in all personal characteristics.

Although the subject matter is market segmentation and targeting, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, segmentation creates relatively homogeneous subgroups, not perfectly identical individuals. That is why the sentence does not survive careful reading.

Watch the absolute wording "every": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

The statement sounds plausible but fails on precision, so it is false.'] WHERE case_id = 'CASE 5.6.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Evaluated against the textbook standard, this assertion is false. Geographic segmentation classifies customers by income level and education rather than by location.

This tests discrimination within market segmentation and targeting: local versus international scope, equity versus debt, product versus market orientation, and similar pairs.

The statement overreaches because income and education are demographic variables; geographic segmentation uses location. The trap is to agree with the topic while missing the one detail that breaks the logic.

If two ideas are related, the statement may be false because it attributes the feature to the wrong member of the pair.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — This statement is false. Demographic segmentation is defined by lifestyle attitudes and values rather than age or income.

Start from the textbook definition in market segmentation and targeting. A statement is true only if every scope word in the definition is respected—location, purpose, distribution rule, or time horizon.

The statement overreaches because attitudes and values belong to psychographic segmentation; demographics use age, income, and similar traits. The trap is to agree with the topic while missing the one detail that breaks the logic.

Near-miss definitions are deliberately written to sound familiar. Compare the statement phrase by phrase with the book version instead of trusting the overall topic.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Psychographic segmentation is defined solely by postal district and city boundaries.

The question tests a precise definition from the section on market segmentation and targeting. Entrance-exam statements often copy a definition almost correctly; one altered phrase is enough to make the whole sentence wrong.

Applied to this claim, location defines geographic segmentation, not psychographic segmentation. That is why the sentence does not survive careful reading.

A common mistake is to recognise the topic word (GDP, NPO, SME, liability) and stop reading. The exam rewards checking every qualifier in the definition.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Behavioural segmentation ignores how customers buy or use products and focuses only on gender.

This statement draws on market segmentation and targeting. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, behavioural segmentation uses buying and usage patterns; gender is demographic. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — The claim is correct. Behavioural segmentation distinguishes customers by how they buy or use products, such as occasional versus heavy use.

The section on market segmentation and targeting frequently contrasts two similar ideas side by side. A comparison statement is true only if the relationship is stated in the right direction and applies to the right concept pair.

In this setting, buying and usage patterns such as occasional versus heavy use define behavioural segmentation. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 5.6.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. A useful segment should be measurable so that its size and purchasing power can be estimated.

This statement draws on market segmentation and targeting. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, measurability requires that segment size and purchasing power can be estimated. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — This statement is correct. A useful segment should be profitable so that serving it is worthwhile for the business.

The relevant theory comes from market segmentation and targeting. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, profitability means the segment must be worth serving commercially. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. A useful segment should be accessible through communication channels and distribution channels that can reach it.

This statement draws on market segmentation and targeting. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, accessibility requires reachable communication and distribution channels. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — The claim is false. A segment is measurable only when every member has been individually interviewed.

The scenario is a worked example of market segmentation and targeting. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

Applied to this claim, measurability requires estimable size and purchasing power, not interviewing every member. That is why the sentence does not survive careful reading.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — This statement is false. A segment is profitable whenever it is large, even if serving it costs more than the revenue gained.

This tests discrimination within market segmentation and targeting: local versus international scope, equity versus debt, product versus market orientation, and similar pairs.

The statement overreaches because profitability requires worthwhile returns; size alone does not guarantee profit. The trap is to agree with the topic while missing the one detail that breaks the logic.

If two ideas are related, the statement may be false because it attributes the feature to the wrong member of the pair.

Once the overclaim or mislabel is exposed, the only consistent answer is false.'] WHERE case_id = 'CASE 5.6.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The claim is correct. A useful segment should be durable in the sense that it does not change too quickly to support planning.

This statement draws on market segmentation and targeting. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, durability means the segment should remain stable enough for planning rather than vanishing immediately. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. A segment is accessible if it is profitable, regardless of whether communication or distribution can reach it.

The scenario is a worked example of market segmentation and targeting. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

Applied to this claim, accessibility is separate from profitability and requires reachable channels. That is why the sentence does not survive careful reading.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — The claim is correct. Targeting is the process of evaluating each segment''s attractiveness and selecting one or more segments to enter.

This statement draws on market segmentation and targeting. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, targeting evaluates attractiveness and chooses segment(s) to enter. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — The claim is correct. A target market is a group of people or businesses toward whom a firm markets goods, services, or ideas with a strategy designed for their specific needs and preferences.

This statement draws on market segmentation and targeting. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, the target market receives a tailored strategy aimed at its specific needs and preferences. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Positioning is the process by which marketers try to create an image or identity in the minds of their target market.

This statement draws on market segmentation and targeting. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, positioning builds an image or identity in the target market''s minds. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 5.6.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. A durable segment must never change over time in order to qualify for targeting.

Although the subject matter is market segmentation and targeting, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, durability means not changing too quickly, not permanent immutability. That is why the sentence does not survive careful reading.

Watch the absolute wording "never": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'TRUE — The claim is correct. After segments are identified and a target market is chosen, positioning clarifies which product meets the demands of the targeted subgroup.

This statement draws on market segmentation and targeting. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, positioning links the chosen target subgroup to the product that meets its demands. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'FALSE — The claim is false. Targeting means dividing the market into subgroups, while segmentation means choosing which subgroup to enter.

This statement draws on market segmentation and targeting. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, segmentation divides the market; targeting selects segment(s) to enter. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — This statement is correct. Mass marketing ignores different market segments and offers the same product to all customers.

The topic is market segmentation and targeting, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

Applied carefully, mass marketing treats the market as undifferentiated with one product for all. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Positioning occurs before segmentation and targeting in the marketing strategy sequence.

This statement draws on market segmentation and targeting. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, segmentation and targeting precede positioning in the stp sequence. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.'] WHERE case_id = 'CASE 5.6.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Evaluated against the textbook standard, this assertion is correct. Under mass marketing, a product is promoted to all segments in almost the same way.

The topic is market segmentation and targeting, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

Applied carefully, mass marketing uses nearly identical promotion across segments. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Mass marketing is often applied to everyday products such as pens, pencils, soaps, personal hygiene products, and detergents.

This statement draws on market segmentation and targeting. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, universal staples like pens, soaps, and detergents commonly suit mass marketing. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Mass marketing offers different tailored products to each identified market segment.

This statement draws on market segmentation and targeting. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, mass marketing offers the same product broadly; tailored segment products are segment marketing. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — This statement is correct. Mass marketing allows a business to produce a relatively large number of identical products and sell them to a relatively large market.

The relevant theory comes from market segmentation and targeting. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, high-volume identical output sold broadly is characteristic of mass marketing. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — This statement is correct. Economies of scale arise when a large number of identical products is produced and some costs do not increase in direct proportion to output.

Here you must apply ideas from market segmentation and targeting to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, scale economies occur because some costs are shared across a larger identical output. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 5.6.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — This statement is false. Mass marketing promotes the same product differently to every segment with highly customised campaigns.

The topic is market segmentation and targeting, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because mass marketing promotes to all segments in almost the same way. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "every": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — The claim is false. Economies of scale mean that every cost rises in direct proportion to output as production increases.

Although the subject matter is market segmentation and targeting, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, scale economies arise because some costs do not rise in direct proportion to output. That is why the sentence does not survive careful reading.

Watch the absolute wording "every": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'TRUE — The claim is correct. Increased total output of an identical product can reduce cost per unit because shared costs are divided across more units.

The scenario is a worked example of market segmentation and targeting. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, higher identical output spreads costs and lowers average cost per unit. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — This statement is false. Economies of scale always raise cost per unit when total identical output increases.

The topic is market segmentation and targeting, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because increased identical output can reduce cost per unit by spreading shared costs. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "always": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Grouping buyers by adult men and women of all ages alone is geographic segmentation because demographics describe place.

The topic is market segmentation and targeting, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because adult men and women of all ages are demographic, not geographic segmentation. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "all": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Once the overclaim or mislabel is exposed, the only consistent answer is false.'] WHERE case_id = 'CASE 5.6.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Mass marketing can be inflexible and make it harder to react to particular changes in some target markets.

This statement draws on market segmentation and targeting. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, uniform mass coverage reduces flexibility when specific segments shift preferences. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Segment marketing means offering different products to one or more segments after some segmentation.

This statement draws on market segmentation and targeting. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, segment marketing tailors different products to chosen segment(s). The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — This statement is false. Grouping buyers in an Austrian city and its surrounding commuter area is psychographic segmentation because location reflects personal values.

Here you must apply ideas from market segmentation and targeting to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because buyers in an austrian city and its surrounding commuter area illustrate geographic, not psychographic segmentation. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — This statement is false. Targeting buyers unwilling to pay the full price of a brand-new device is behavioural segmentation because attitudes are the same as purchase frequency.

Here you must apply ideas from market segmentation and targeting to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because buyers unwilling to pay the full price of a brand-new device reflect psychographic, not purely behavioural segmentation. The trap is to agree with the topic while missing the one detail that breaks the logic.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Distinguishing occasional users rather than intensive daily operators is demographic segmentation because usage is a social characteristic like age.

The section on market segmentation and targeting frequently contrasts two similar ideas side by side. A comparison statement is true only if the relationship is stated in the right direction and applies to the right concept pair.

Applied to this claim, occasional users rather than intensive daily operators illustrate behavioural, not demographic segmentation. That is why the sentence does not survive careful reading.

Students often remember that two concepts differ but swap the direction of the comparison. Verify which side of the pair is longer, larger, riskier, or more regulated.

Because the decisive detail is wrong, mark the statement false.'] WHERE case_id = 'CASE 5.6.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Segment marketing focuses limited resources on segments where the firm has strategic fit with customer needs and wants.

This statement draws on market segmentation and targeting. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, resource focus on well-understood segments with strategic fit defines segment marketing. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Niche marketing focuses on particular segments and often on subgroups within broader segments through more segmentation.

The relevant theory comes from market segmentation and targeting. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, niche marketing concentrates on narrower subgroups within segments. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — The claim is correct. Many small businesses employ niche marketing because they cannot produce the quantity required for a mass market.

Although the subject matter is market segmentation and targeting, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

In this setting, limited production capacity leads many small firms toward niche marketing. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. A business specialising in a certain field may target only selected segments of a market rather than the whole market.

This tests discrimination within market segmentation and targeting: local versus international scope, equity versus debt, product versus market orientation, and similar pairs.

Applied carefully, specialisation supports targeting selected segments instead of full-market coverage. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. A niche specialist that serves a segment well can become a market leader regardless of firm size.

The relevant theory comes from market segmentation and targeting. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, strong niche performance can yield market leadership despite small scale. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.'] WHERE case_id = 'CASE 5.6.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The claim is correct. Targeting is the first step toward an effective marketing strategy before the marketing mix is applied to serve the target market.

This statement draws on market segmentation and targeting. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, targeting precedes the marketing mix in building an effective strategy. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — The claim is correct. The marketing mix is applied as a second step to serve the needs of the chosen target market.

This statement draws on market segmentation and targeting. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, after targeting, the marketing mix serves the selected target market. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'TRUE — This statement is correct. Grouping buyers in an Austrian city and its surrounding commuter area illustrates geographic segmentation because location defines the subgroup.

Here you must apply ideas from market segmentation and targeting to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, customers in an austrian city and its surrounding commuter area form a geographic segment based on place. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. A segment of an Austrian city and its surrounding commuter area is automatically profitable whenever it can be named on a map.

Although the subject matter is market segmentation and targeting, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, naming an austrian city and its surrounding commuter area does not make the segment profitable; costs and revenue still matter. That is why the sentence does not survive careful reading.

Watch the absolute wording "automatically": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Describing customers as adult men and women of all ages illustrates demographic segmentation using measurable population characteristics.

Although the subject matter is market segmentation and targeting, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

In this setting, adult men and women of all ages exemplify demographic segmentation variables. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.'] WHERE case_id = 'CASE 5.6.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Evaluated against the textbook standard, this assertion is false. A segment of adult men and women of all ages is accessible whenever it is measurable, even if no channel reaches them.

The topic is market segmentation and targeting, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because measurability does not guarantee accessible communication and distribution for adult men and women of all ages. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "all": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. A segment of buyers unwilling to pay the full price of a brand-new device is durable only if preferences never shift, making short-term trends irrelevant.

Here you must apply ideas from market segmentation and targeting to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because durability allows some change; it requires stability for planning, not zero change forever. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — This statement is correct. Targeting buyers unwilling to pay the full price of a brand-new device reflects psychographic segmentation based on attitudes and preferences rather than location alone.

This tests discrimination within market segmentation and targeting: local versus international scope, equity versus debt, product versus market orientation, and similar pairs.

Applied carefully, buyers unwilling to pay the full price of a brand-new device illustrate psychographic segmentation. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — The claim is correct. Distinguishing occasional users rather than intensive daily operators is behavioural segmentation because purchase and usage patterns differ within the product category.

The section on market segmentation and targeting frequently contrasts two similar ideas side by side. A comparison statement is true only if the relationship is stated in the right direction and applies to the right concept pair.

In this setting, occasional users rather than intensive daily operators illustrate behavioural segmentation. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Mass marketing to an Austrian city and its surrounding commuter area requires a different product formula for every neighbourhood street.

The topic is market segmentation and targeting, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because mass marketing uses one product broadly, not a different formula for every street in an austrian city and its surrounding commuter area. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "every": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Because the decisive detail is wrong, mark the statement false.'] WHERE case_id = 'CASE 5.6.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — This statement is false. Niche marketing to buyers unwilling to pay the full price of a brand-new device means selling one identical product to the entire national market.

The relevant theory comes from market segmentation and targeting. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because niche marketing narrows focus; one identical national product is mass marketing. The trap is to agree with the topic while missing the one detail that breaks the logic.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Segment marketing to adult men and women of all ages means ignoring subgroup differences and promoting one undifferentiated offer.

The topic is market segmentation and targeting, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because segment marketing tailors to adult men and women of all ages; ignoring differences describes mass marketing. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "all": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — This statement is false. Positioning toward occasional users rather than intensive daily operators is unnecessary if the firm already completed geographic segmentation.

This tests discrimination within market segmentation and targeting: local versus international scope, equity versus debt, product versus market orientation, and similar pairs.

The statement overreaches because positioning still creates identity for the chosen subgroup after segmentation and targeting. The trap is to agree with the topic while missing the one detail that breaks the logic.

If two ideas are related, the statement may be false because it attributes the feature to the wrong member of the pair.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — The claim is correct. A segment defined for an Austrian city and its surrounding commuter area is measurable when survey and sales data reveal its size and average purchasing power.

The scenario is a worked example of market segmentation and targeting. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, data on an austrian city and its surrounding commuter area can make the geographic segment measurable in size and purchasing power. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. A segment of adult men and women of all ages is profitable only if expected revenue from serving them exceeds the cost of tailored offers.

The scenario is a worked example of market segmentation and targeting. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, profitability for adult men and women of all ages requires revenue to cover the cost of serving that demographic subgroup. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 5.6.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — This statement is false. Targeting occasional users rather than intensive daily operators means listing every possible subgroup without evaluating attractiveness.

The topic is market segmentation and targeting, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because targeting evaluates attractiveness before selecting occasional users rather than intensive daily operators or any subgroup. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "every": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Economies of scale for a niche offer to buyers unwilling to pay the full price of a brand-new device are identical to those for undifferentiated mass production.

This statement draws on market segmentation and targeting. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, niche focus on buyers unwilling to pay the full price of a brand-new device typically lacks the very large identical output that drives scale economies. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. A segment of buyers unwilling to pay the full price of a brand-new device is accessible when advertising and retail channels can reach those customers effectively.

Here you must apply ideas from market segmentation and targeting to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, accessible channels must reach buyers unwilling to pay the full price of a brand-new device for viable targeting. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. A firm serving adult men and women of all ages with strategic fit should spread resources evenly across every segment in the economy.

Although the subject matter is market segmentation and targeting, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, strategic fit implies focus on chosen segments such as adult men and women of all ages, not equal coverage of all segments. That is why the sentence does not survive careful reading.

Watch the absolute wording "all": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Producing a tiny customised batch for buyers unwilling to pay the full price of a brand-new device always yields lower unit cost than mass production of identical units.

The topic is market segmentation and targeting, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because small customised batches for buyers unwilling to pay the full price of a brand-new device do not automatically enjoy mass-production scale economies. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "always": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

The statement sounds plausible but fails on precision, so it is false.'] WHERE case_id = 'CASE 5.6.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Evaluated against the textbook standard, this assertion is false. Grouping buyers by employed wage earners and retired pensioners alone is geographic segmentation because demographics describe place.

Here you must apply ideas from market segmentation and targeting to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because employed wage earners and retired pensioners are demographic, not geographic segmentation. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Grouping buyers in a coastal region and neighbouring inland towns is psychographic segmentation because location reflects personal values.

Here you must apply ideas from market segmentation and targeting to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because buyers in a coastal region and neighbouring inland towns illustrate geographic, not psychographic segmentation. The trap is to agree with the topic while missing the one detail that breaks the logic.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. A segment of occasional users rather than intensive daily operators is durable when usage patterns remain stable enough to justify product and promotion planning.

This tests discrimination within market segmentation and targeting: local versus international scope, equity versus debt, product versus market orientation, and similar pairs.

Applied carefully, durability for occasional users rather than intensive daily operators means the behavioural pattern persists long enough for planning. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Targeting customers who value environmental reuse of second-hand goods is behavioural segmentation because attitudes are the same as purchase frequency.

Here you must apply ideas from market segmentation and targeting to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because customers who value environmental reuse of second-hand goods reflect psychographic, not purely behavioural segmentation. The trap is to agree with the topic while missing the one detail that breaks the logic.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — This statement is false. Distinguishing seasonal purchasers rather than year-round repeat buyers is demographic segmentation because usage is a social characteristic like age.

This tests discrimination within market segmentation and targeting: local versus international scope, equity versus debt, product versus market orientation, and similar pairs.

The statement overreaches because seasonal purchasers rather than year-round repeat buyers illustrate behavioural, not demographic segmentation. The trap is to agree with the topic while missing the one detail that breaks the logic.

If two ideas are related, the statement may be false because it attributes the feature to the wrong member of the pair.

The statement sounds plausible but fails on precision, so it is false.'] WHERE case_id = 'CASE 5.6.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The claim is false. A segment of a coastal region and neighbouring inland towns is automatically profitable whenever it can be named on a map.

Although the subject matter is market segmentation and targeting, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, naming a coastal region and neighbouring inland towns does not make the segment profitable; costs and revenue still matter. That is why the sentence does not survive careful reading.

Watch the absolute wording "automatically": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Mass marketing of a universal staple to an Austrian city and its surrounding commuter area and other areas uses one offer promoted in almost the same way everywhere.

The relevant theory comes from market segmentation and targeting. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, a single staple promoted uniformly across an austrian city and its surrounding commuter area and elsewhere fits mass marketing. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — Evaluated against the textbook standard, this assertion is false. A segment of employed wage earners and retired pensioners is accessible whenever it is measurable, even if no channel reaches them.

Here you must apply ideas from market segmentation and targeting to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because measurability does not guarantee accessible communication and distribution for employed wage earners and retired pensioners. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Segment marketing to adult men and women of all ages would offer differentiated products matching the subgroup''s identified needs rather than one identical item.

Although the subject matter is market segmentation and targeting, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

In this setting, differentiated products for adult men and women of all ages reflect segment marketing. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — This statement is false. A segment of customers who value environmental reuse of second-hand goods is durable only if preferences never shift, making short-term trends irrelevant.

Here you must apply ideas from market segmentation and targeting to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because durability allows some change; it requires stability for planning, not zero change forever. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.'] WHERE case_id = 'CASE 5.6.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Niche marketing to buyers unwilling to pay the full price of a brand-new device concentrates on a narrow subgroup whose specialised preferences justify a focused offer.

This statement draws on market segmentation and targeting. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, a focused offer for buyers unwilling to pay the full price of a brand-new device reflects niche marketing within a broader market. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'FALSE — The claim is false. Mass marketing to a coastal region and neighbouring inland towns requires a different product formula for every neighbourhood street.

Although the subject matter is market segmentation and targeting, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, mass marketing uses one product broadly, not a different formula for every street in a coastal region and neighbouring inland towns. That is why the sentence does not survive careful reading.

Watch the absolute wording "every": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Targeting occasional users rather than intensive daily operators means selecting that behavioural subgroup after judging its attractiveness against segmentation criteria.

The section on market segmentation and targeting frequently contrasts two similar ideas side by side. A comparison statement is true only if the relationship is stated in the right direction and applies to the right concept pair.

In this setting, choosing occasional users rather than intensive daily operators as a focus group is targeting after segment evaluation. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — This statement is correct. Positioning toward buyers unwilling to pay the full price of a brand-new device aims to create a distinct image of which product best serves that attitude-based subgroup.

The relevant theory comes from market segmentation and targeting. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, an identity showing the right product for buyers unwilling to pay the full price of a brand-new device is positioning. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — The claim is correct. Producing millions of identical units for an Austrian city and its surrounding commuter area can spread fixed factory costs and support economies of scale.

This statement draws on market segmentation and targeting. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, high identical volume for an austrian city and its surrounding commuter area can lower unit cost through scale economies. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 5.6.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — This statement is false. Niche marketing to customers who value environmental reuse of second-hand goods means selling one identical product to the entire national market.

The relevant theory comes from market segmentation and targeting. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because niche marketing narrows focus; one identical national product is mass marketing. The trap is to agree with the topic while missing the one detail that breaks the logic.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. A firm with strategic fit serving adult men and women of all ages should concentrate resources on that segment rather than undifferentiated mass coverage.

Although the subject matter is market segmentation and targeting, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

In this setting, strategic fit with adult men and women of all ages supports focused segment marketing. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Grouping buyers in a coastal region and neighbouring inland towns illustrates geographic segmentation because location defines the subgroup.

The scenario is a worked example of market segmentation and targeting. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, customers in a coastal region and neighbouring inland towns form a geographic segment based on place. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Describing customers as employed wage earners and retired pensioners illustrates demographic segmentation using measurable population characteristics.

The relevant theory comes from market segmentation and targeting. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, employed wage earners and retired pensioners exemplify demographic segmentation variables. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Targeting customers who value environmental reuse of second-hand goods reflects psychographic segmentation based on attitudes and preferences rather than location alone.

This tests discrimination within market segmentation and targeting: local versus international scope, equity versus debt, product versus market orientation, and similar pairs.

Applied carefully, customers who value environmental reuse of second-hand goods illustrate psychographic segmentation. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 5.6.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — This statement is correct. Distinguishing seasonal purchasers rather than year-round repeat buyers is behavioural segmentation because purchase and usage patterns differ within the product category.

This tests discrimination within market segmentation and targeting: local versus international scope, equity versus debt, product versus market orientation, and similar pairs.

Applied carefully, seasonal purchasers rather than year-round repeat buyers illustrate behavioural segmentation. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'FALSE — The claim is false. Segment marketing to employed wage earners and retired pensioners means ignoring subgroup differences and promoting one undifferentiated offer.

This statement draws on market segmentation and targeting. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, segment marketing tailors to employed wage earners and retired pensioners; ignoring differences describes mass marketing. That is why the sentence does not survive careful reading.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — The claim is correct. A segment defined for a coastal region and neighbouring inland towns is measurable when survey and sales data reveal its size and average purchasing power.

The scenario is a worked example of market segmentation and targeting. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, data on a coastal region and neighbouring inland towns can make the geographic segment measurable in size and purchasing power. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Positioning toward seasonal purchasers rather than year-round repeat buyers is unnecessary if the firm already completed geographic segmentation.

This tests discrimination within market segmentation and targeting: local versus international scope, equity versus debt, product versus market orientation, and similar pairs.

The statement overreaches because positioning still creates identity for the chosen subgroup after segmentation and targeting. The trap is to agree with the topic while missing the one detail that breaks the logic.

If two ideas are related, the statement may be false because it attributes the feature to the wrong member of the pair.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Targeting seasonal purchasers rather than year-round repeat buyers means listing every possible subgroup without evaluating attractiveness.

Although the subject matter is market segmentation and targeting, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, targeting evaluates attractiveness before selecting seasonal purchasers rather than year-round repeat buyers or any subgroup. That is why the sentence does not survive careful reading.

Watch the absolute wording "every": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

The statement sounds plausible but fails on precision, so it is false.'] WHERE case_id = 'CASE 5.6.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Economies of scale for a niche offer to customers who value environmental reuse of second-hand goods are identical to those for undifferentiated mass production.

This statement draws on market segmentation and targeting. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, niche focus on customers who value environmental reuse of second-hand goods typically lacks the very large identical output that drives scale economies. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. A segment of employed wage earners and retired pensioners is profitable only if expected revenue from serving them exceeds the cost of tailored offers.

The scenario is a worked example of market segmentation and targeting. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, profitability for employed wage earners and retired pensioners requires revenue to cover the cost of serving that demographic subgroup. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — The claim is false. A firm serving employed wage earners and retired pensioners with strategic fit should spread resources evenly across every segment in the economy.

Although the subject matter is market segmentation and targeting, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, strategic fit implies focus on chosen segments such as employed wage earners and retired pensioners, not equal coverage of all segments. That is why the sentence does not survive careful reading.

Watch the absolute wording "every": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Producing a tiny customised batch for customers who value environmental reuse of second-hand goods always yields lower unit cost than mass production of identical units.

The topic is market segmentation and targeting, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because small customised batches for customers who value environmental reuse of second-hand goods do not automatically enjoy mass-production scale economies. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "always": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — This statement is correct. A segment of customers who value environmental reuse of second-hand goods is accessible when advertising and retail channels can reach those customers effectively.

Here you must apply ideas from market segmentation and targeting to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, accessible channels must reach customers who value environmental reuse of second-hand goods for viable targeting. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 5.6.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — This statement is correct. A segment of seasonal purchasers rather than year-round repeat buyers is durable when usage patterns remain stable enough to justify product and promotion planning.

This tests discrimination within market segmentation and targeting: local versus international scope, equity versus debt, product versus market orientation, and similar pairs.

Applied carefully, durability for seasonal purchasers rather than year-round repeat buyers means the behavioural pattern persists long enough for planning. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — The claim is false. Grouping buyers by self-employed professionals and salaried staff alone is geographic segmentation because demographics describe place.

The scenario is a worked example of market segmentation and targeting. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

Applied to this claim, self-employed professionals and salaried staff are demographic, not geographic segmentation. That is why the sentence does not survive careful reading.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Mass marketing of a universal staple to a coastal region and neighbouring inland towns and other areas uses one offer promoted in almost the same way everywhere.

This statement draws on market segmentation and targeting. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, a single staple promoted uniformly across a coastal region and neighbouring inland towns and elsewhere fits mass marketing. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — This statement is correct. Segment marketing to employed wage earners and retired pensioners would offer differentiated products matching the subgroup''s identified needs rather than one identical item.

This tests discrimination within market segmentation and targeting: local versus international scope, equity versus debt, product versus market orientation, and similar pairs.

Applied carefully, differentiated products for employed wage earners and retired pensioners reflect segment marketing. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — This statement is correct. Niche marketing to customers who value environmental reuse of second-hand goods concentrates on a narrow subgroup whose specialised preferences justify a focused offer.

The relevant theory comes from market segmentation and targeting. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, a focused offer for customers who value environmental reuse of second-hand goods reflects niche marketing within a broader market. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.'] WHERE case_id = 'CASE 5.6.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — This statement is correct. Targeting seasonal purchasers rather than year-round repeat buyers means selecting that behavioural subgroup after judging its attractiveness against segmentation criteria.

This tests discrimination within market segmentation and targeting: local versus international scope, equity versus debt, product versus market orientation, and similar pairs.

Applied carefully, choosing seasonal purchasers rather than year-round repeat buyers as a focus group is targeting after segment evaluation. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — The claim is correct. Positioning toward customers who value environmental reuse of second-hand goods aims to create a distinct image of which product best serves that attitude-based subgroup.

This statement draws on market segmentation and targeting. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, an identity showing the right product for customers who value environmental reuse of second-hand goods is positioning. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Producing millions of identical units for a coastal region and neighbouring inland towns can spread fixed factory costs and support economies of scale.

The relevant theory comes from market segmentation and targeting. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, high identical volume for a coastal region and neighbouring inland towns can lower unit cost through scale economies. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — The claim is correct. A firm with strategic fit serving employed wage earners and retired pensioners should concentrate resources on that segment rather than undifferentiated mass coverage.

The section on market segmentation and targeting frequently contrasts two similar ideas side by side. A comparison statement is true only if the relationship is stated in the right direction and applies to the right concept pair.

In this setting, strategic fit with employed wage earners and retired pensioners supports focused segment marketing. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Grouping buyers in a capital district and peripheral suburbs illustrates geographic segmentation because location defines the subgroup.

The scenario is a worked example of market segmentation and targeting. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, customers in a capital district and peripheral suburbs form a geographic segment based on place. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 5.6.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Evaluated against the textbook standard, this assertion is correct. Describing customers as self-employed professionals and salaried staff illustrates demographic segmentation using measurable population characteristics.

The relevant theory comes from market segmentation and targeting. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, self-employed professionals and salaried staff exemplify demographic segmentation variables. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — The claim is false. Grouping buyers in a capital district and peripheral suburbs is psychographic segmentation because location reflects personal values.

The scenario is a worked example of market segmentation and targeting. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

Applied to this claim, buyers in a capital district and peripheral suburbs illustrate geographic, not psychographic segmentation. That is why the sentence does not survive careful reading.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — This statement is correct. Targeting users wanting hands-on help when starting equipment reflects psychographic segmentation based on attitudes and preferences rather than location alone.

This tests discrimination within market segmentation and targeting: local versus international scope, equity versus debt, product versus market orientation, and similar pairs.

Applied carefully, users wanting hands-on help when starting equipment illustrate psychographic segmentation. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — This statement is correct. Distinguishing light users of software licences rather than power users is behavioural segmentation because purchase and usage patterns differ within the product category.

This tests discrimination within market segmentation and targeting: local versus international scope, equity versus debt, product versus market orientation, and similar pairs.

Applied carefully, light users of software licences rather than power users illustrate behavioural segmentation. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — This statement is correct. A segment defined for a capital district and peripheral suburbs is measurable when survey and sales data reveal its size and average purchasing power.

Here you must apply ideas from market segmentation and targeting to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, data on a capital district and peripheral suburbs can make the geographic segment measurable in size and purchasing power. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.'] WHERE case_id = 'CASE 5.6.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Evaluated against the textbook standard, this assertion is correct. A segment of self-employed professionals and salaried staff is profitable only if expected revenue from serving them exceeds the cost of tailored offers.

Here you must apply ideas from market segmentation and targeting to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, profitability for self-employed professionals and salaried staff requires revenue to cover the cost of serving that demographic subgroup. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. A segment of users wanting hands-on help when starting equipment is accessible when advertising and retail channels can reach those customers effectively.

The scenario is a worked example of market segmentation and targeting. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, accessible channels must reach users wanting hands-on help when starting equipment for viable targeting. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'FALSE — This statement is false. Targeting users wanting hands-on help when starting equipment is behavioural segmentation because attitudes are the same as purchase frequency.

Here you must apply ideas from market segmentation and targeting to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because users wanting hands-on help when starting equipment reflect psychographic, not purely behavioural segmentation. The trap is to agree with the topic while missing the one detail that breaks the logic.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. A segment of light users of software licences rather than power users is durable when usage patterns remain stable enough to justify product and promotion planning.

This tests discrimination within market segmentation and targeting: local versus international scope, equity versus debt, product versus market orientation, and similar pairs.

Applied carefully, durability for light users of software licences rather than power users means the behavioural pattern persists long enough for planning. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — This statement is correct. Mass marketing of a universal staple to a capital district and peripheral suburbs and other areas uses one offer promoted in almost the same way everywhere.

The relevant theory comes from market segmentation and targeting. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, a single staple promoted uniformly across a capital district and peripheral suburbs and elsewhere fits mass marketing. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.'] WHERE case_id = 'CASE 5.6.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The claim is correct. Segment marketing to self-employed professionals and salaried staff would offer differentiated products matching the subgroup''s identified needs rather than one identical item.

The section on market segmentation and targeting frequently contrasts two similar ideas side by side. A comparison statement is true only if the relationship is stated in the right direction and applies to the right concept pair.

In this setting, differentiated products for self-employed professionals and salaried staff reflect segment marketing. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — This statement is false. Distinguishing light users of software licences rather than power users is demographic segmentation because usage is a social characteristic like age.

This tests discrimination within market segmentation and targeting: local versus international scope, equity versus debt, product versus market orientation, and similar pairs.

The statement overreaches because light users of software licences rather than power users illustrate behavioural, not demographic segmentation. The trap is to agree with the topic while missing the one detail that breaks the logic.

If two ideas are related, the statement may be false because it attributes the feature to the wrong member of the pair.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Niche marketing to users wanting hands-on help when starting equipment concentrates on a narrow subgroup whose specialised preferences justify a focused offer.

Here you must apply ideas from market segmentation and targeting to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, a focused offer for users wanting hands-on help when starting equipment reflects niche marketing within a broader market. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — This statement is false. A segment of a capital district and peripheral suburbs is automatically profitable whenever it can be named on a map.

The topic is market segmentation and targeting, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because naming a capital district and peripheral suburbs does not make the segment profitable; costs and revenue still matter. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "automatically": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — This statement is correct. Targeting light users of software licences rather than power users means selecting that behavioural subgroup after judging its attractiveness against segmentation criteria.

This tests discrimination within market segmentation and targeting: local versus international scope, equity versus debt, product versus market orientation, and similar pairs.

Applied carefully, choosing light users of software licences rather than power users as a focus group is targeting after segment evaluation. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 5.6.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The claim is false. A segment of self-employed professionals and salaried staff is accessible whenever it is measurable, even if no channel reaches them.

The scenario is a worked example of market segmentation and targeting. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

Applied to this claim, measurability does not guarantee accessible communication and distribution for self-employed professionals and salaried staff. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Positioning toward users wanting hands-on help when starting equipment aims to create a distinct image of which product best serves that attitude-based subgroup.

The scenario is a worked example of market segmentation and targeting. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, an identity showing the right product for users wanting hands-on help when starting equipment is positioning. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — This statement is false. A segment of users wanting hands-on help when starting equipment is durable only if preferences never shift, making short-term trends irrelevant.

Here you must apply ideas from market segmentation and targeting to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because durability allows some change; it requires stability for planning, not zero change forever. The trap is to agree with the topic while missing the one detail that breaks the logic.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — The claim is correct. Producing millions of identical units for a capital district and peripheral suburbs can spread fixed factory costs and support economies of scale.

This statement draws on market segmentation and targeting. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, high identical volume for a capital district and peripheral suburbs can lower unit cost through scale economies. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. A firm with strategic fit serving self-employed professionals and salaried staff should concentrate resources on that segment rather than undifferentiated mass coverage.

This tests discrimination within market segmentation and targeting: local versus international scope, equity versus debt, product versus market orientation, and similar pairs.

Applied carefully, strategic fit with self-employed professionals and salaried staff supports focused segment marketing. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.'] WHERE case_id = 'CASE 5.6.25' AND tier = 'full';
