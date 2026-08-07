-- Update expanded explanations for 3.4-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Because staff are below ten, a firm remains a micro enterprise despite turnover above €2m.

The scenario is a worked example of business size, SMEs, and large enterprises. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

Applied to this claim, both staff and financial thresholds must be met; high turnover can exclude micro status. That is why the sentence does not survive careful reading.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Forty-five staff alone guarantees small classification even if turnover exceeds €10m.

The scenario is a worked example of business size, SMEs, and large enterprises. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

Applied to this claim, both staff and turnover thresholds must be satisfied for small status. That is why the sentence does not survive careful reading.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Meeting the staff ceiling alone is sufficient for micro status regardless of turnover or balance sheet totals.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, micro status requires both the staff ceiling and a turnover or balance sheet cap. That is why the sentence does not survive careful reading.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — The claim is correct. Under the EU definition, a micro enterprise may employ fewer than ten people.

The question tests a precise definition from the section on business size, SMEs, and large enterprises. Entrance-exam statements often copy a definition almost correctly; one altered phrase is enough to make the whole sentence wrong.

In this setting, eu micro classification requires fewer than ten employees. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. A firm qualifies as micro because its balance sheet is below €2m, regardless of turnover above €2m.

The scenario is a worked example of business size, SMEs, and large enterprises. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

Applied to this claim, turnover above €2m can disqualify micro status despite a qualifying balance sheet. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.'] WHERE case_id = 'CASE 3.4.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Turnover above €10m can push a firm out of the small category even when staff remain below fifty.

The scenario is a worked example of business size, SMEs, and large enterprises. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, the €10m turnover cap is binding alongside the staff threshold. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'TRUE — The claim is correct. Micro status allows either turnover up to €2m or a balance sheet total up to €2m alongside the staff limit.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, micro firms must meet the staff cap and either the turnover or balance sheet financial ceiling. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Exceeding the €2m turnover cap can disqualify a firm from micro status even when staff are below ten.

The scenario is a worked example of business size, SMEs, and large enterprises. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, turnover above €2m breaks the micro financial cap even with a small workforce. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Small status also requires turnover not exceeding €10m.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, small classification additionally requires turnover at or below €10m. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. A small enterprise may employ fewer than fifty people under EU definitions.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, the eu small category sets an upper staff limit below fifty employees. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.'] WHERE case_id = 'CASE 3.4.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — This statement is false. A firm fails the medium test because both financial figures must be below their respective caps.

Here you must apply ideas from business size, SMEs, and large enterprises to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because only one financial threshold needs to be met alongside staff; both need not pass. The trap is to agree with the topic while missing the one detail that breaks the logic.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Medium enterprises employ fewer than two hundred and fifty people under EU definitions.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, eu medium enterprises must employ fewer than 250 people. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Because turnover is within €50m, balance sheet size is irrelevant for medium classification.

Here you must apply ideas from business size, SMEs, and large enterprises to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because exceeding the balance sheet cap disqualifies medium status even if turnover qualifies. The trap is to agree with the topic while missing the one detail that breaks the logic.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Two hundred and forty employees exceed the medium staff ceiling.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because 240 is below 250 and therefore within the medium staff limit. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — The claim is false. Thirty-eight staff alone keeps a firm in the small category despite turnover above €10m.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, small status requires both staff and turnover limits; breaching turnover removes small classification. That is why the sentence does not survive careful reading.

Once the overclaim or mislabel is exposed, the only consistent answer is false.'] WHERE case_id = 'CASE 3.4.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — This statement is false. MSME excludes micro firms and covers only small and medium categories.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because micro firms are explicitly included in msme/sme groupings. The trap is to agree with the topic while missing the one detail that breaks the logic.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. SMEs represent a narrow minority of EU firms because large corporations dominate registration statistics.

The scenario is a worked example of business size, SMEs, and large enterprises. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

Applied to this claim, smes form the vast majority, not a minority, of eu businesses. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — The claim is false. SME labels are purely descriptive and have no effect on access to finance or reporting rules.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, definitions actively shape finance access and regulatory treatment. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — The claim is false. A components manufacturer counts as a medium enterprise because it operates internationally.

The scenario is a worked example of business size, SMEs, and large enterprises. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

Applied to this claim, medium status depends on thresholds, not on geographic scope alone. That is why the sentence does not survive careful reading.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'TRUE — This statement is correct. Medium status permits turnover up to €50m or a balance sheet total up to €43m together with the staff cap.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, medium classification uses staff plus either turnover or balance sheet financial ceilings. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.'] WHERE case_id = 'CASE 3.4.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — This statement is correct. A workforce of about ten thousand places a components manufacturer outside EU medium enterprise limits.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, ten thousand staff far exceeds the 250-employee medium ceiling. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — The claim is correct. Approximately ninety-nine percent of businesses in the EU are SMEs.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, official eu data cite that about 99% of eu businesses are smes. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — This statement is false. Accounting requirements are identical for micro firms and large multinationals under EU practice.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because size affects accounting rules, implying differences by category. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Two hundred employees fall within the medium staff threshold.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, 200 is below the 250-person medium limit. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — The claim is false. Seven staff and a €1.9m balance sheet guarantee micro status despite turnover above €2m.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, exceeding the turnover cap disqualifies micro status even with qualifying staff and balance sheet. That is why the sentence does not survive careful reading.

Once the overclaim or mislabel is exposed, the only consistent answer is false.'] WHERE case_id = 'CASE 3.4.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — This statement is correct. Official SME classification can determine eligibility for EU support programmes and finance schemes.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, eu support and finance often hinge on meeting sme criteria. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Size definitions matter because accounting rules may differ for smaller and larger firms.

Here you must apply ideas from business size, SMEs, and large enterprises to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, size classification affects which accounting rules apply to a firm. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Ten employees still count as micro because the threshold says fewer than ten.

The scenario is a worked example of business size, SMEs, and large enterprises. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

Applied to this claim, ten employees is not fewer than ten, so the staff test fails. That is why the sentence does not survive careful reading.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — The claim is false. Two hundred and fifty employees satisfies the medium requirement of fewer than two hundred and fifty.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, 250 is not fewer than 250; the staff test fails. That is why the sentence does not survive careful reading.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Fifty employees meets the small enterprise staff requirement of fewer than fifty.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because small requires fewer than fifty staff; fifty is not eligible. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.'] WHERE case_id = 'CASE 3.4.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Evaluated against the textbook standard, this assertion is false. Any firm with more than ten employees is classified as large under EU rules.

Start from the textbook definition in business size, SMEs, and large enterprises. A statement is true only if every scope word in the definition is respected—location, purpose, distribution rule, or time horizon.

The statement overreaches because small and medium tiers cover firms well above ten employees. The trap is to agree with the topic while missing the one detail that breaks the logic.

Near-miss definitions are deliberately written to sound familiar. Compare the statement phrase by phrase with the book version instead of trusting the overall topic.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — This statement is correct. MSME commonly groups micro, small, and medium enterprises under one umbrella term.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, msme refers to micro, small, and medium enterprises collectively. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — The claim is correct. Crossing size thresholds can change which accounting rules apply to a business.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, growing beyond thresholds can shift reporting requirements. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Any local shop qualifies as micro without reference to staff or turnover data.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, official staff and financial tests determine micro status. That is why the sentence does not survive careful reading.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'TRUE — The claim is correct. Exactly ten staff exceeds the micro employee ceiling of fewer than ten.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, the micro limit is strictly below ten employees; ten does not qualify. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 3.4.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Evaluated against the textbook standard, this assertion is correct. Exceeding medium staff or financial thresholds generally moves a firm out of SME status.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, surpassing medium criteria places a firm in the large category. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Grant schemes often require proof that the applicant meets official micro enterprise criteria.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, support programmes use the standard eu micro thresholds for eligibility. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — This statement is correct. Exactly fifty staff exceeds the small category employee limit.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, the small staff cap is strictly below fifty employees. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — This statement is correct. Micro firms must meet the staff cap and either the turnover or balance sheet financial limit.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, eu micro rules pair staff with one of two financial caps. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Exactly 250 staff exceeds the medium employee ceiling.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, the medium cap excludes firms with 250 or more employees. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 3.4.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The claim is correct. A balance sheet above €43m can disqualify medium status even with low turnover.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, the €43m balance sheet limit is binding for medium classification. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Crossing micro limits while staying within small thresholds reclassifies the firm as small.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, qualifying within small limits replaces micro status. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Policies supporting SMEs affect the vast majority of EU businesses by number.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, with ~99% sme share, sme-focused policy reaches most businesses. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Size differences can mean different accounting rule sets for a micro supplier and a components manufacturer.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, size classification links to differing accounting rules between micro and large firms. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Small enterprises must record turnover not exceeding €10m.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, €10m is the small turnover ceiling in the EU table. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 3.4.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The claim is correct. Medium enterprises may report turnover up to €50m under EU definitions.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, €50m is the medium turnover ceiling in the EU table. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'FALSE — The claim is false. Micro classification requires both turnover and balance sheet to stay below €2m simultaneously.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, only one financial measure must qualify, not both at once. That is why the sentence does not survive careful reading.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — The claim is correct. Micro requires fewer than ten staff plus financial caps, stricter than small staff limits.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, micro staff cap is below ten, much tighter than small''s below fifty. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Small firms may report turnover up to €50m provided staff are below fifty.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, €50m is the medium turnover cap, not the small cap. That is why the sentence does not survive careful reading.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Medium status is confirmed because staff and turnover both qualify despite balance sheet breach.

Here you must apply ideas from business size, SMEs, and large enterprises to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because exceeding the balance sheet cap blocks medium status despite qualifying staff and turnover. The trap is to agree with the topic while missing the one detail that breaks the logic.

Because the decisive detail is wrong, mark the statement false.'] WHERE case_id = 'CASE 3.4.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — This statement is correct. Two people employed falls well within the micro staff ceiling.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, two employees is below the ten-person micro limit. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Because SMEs are numerous, individual SME failures have no community impact.

The scenario is a worked example of business size, SMEs, and large enterprises. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

Applied to this claim, sme failures can still affect employees, suppliers, and local communities. That is why the sentence does not survive careful reading.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Lenders may verify SME status using official headcount and turnover thresholds.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, finance programmes rely on standard sme criteria. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. SME tiers require joint satisfaction of staff and relevant financial thresholds.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, eu definitions combine staff with financial caps for each tier. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — The claim is correct. Most EU businesses by count are classified within SME size bands.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, ~99% of EU businesses are SMEs by count. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.'] WHERE case_id = 'CASE 3.4.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Turnover above €50m disqualifies medium status even if balance sheet qualifies.

The scenario is a worked example of business size, SMEs, and large enterprises. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, €52m turnover exceeds the €50m medium ceiling. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Medium turnover cap is €10m, identical to the small limit.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because €10m is the small cap; medium allows up to €50m. The trap is to agree with the topic while missing the one detail that breaks the logic.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — This statement is false. Any firm with forty staff is micro because it employs fewer than fifty people.

Here you must apply ideas from business size, SMEs, and large enterprises to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because forty staff exceeds micro limits and aligns with small staff range instead. The trap is to agree with the topic while missing the one detail that breaks the logic.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Adding staff and sales can leave a firm classified as micro even after crossing small thresholds.

Start from the textbook definition in business size, SMEs, and large enterprises. A statement is true only if every scope word in the definition is respected—location, purpose, distribution rule, or time horizon.

The statement overreaches because exceeding micro thresholds moves classification upward if small criteria are met. The trap is to agree with the topic while missing the one detail that breaks the logic.

Near-miss definitions are deliberately written to sound familiar. Compare the statement phrase by phrase with the book version instead of trusting the overall topic.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — The claim is false. All EU firms file identical full public accounts regardless of size category.

Although the subject matter is business size, SMEs, and large enterprises, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, sme and large firms face different reporting expectations. That is why the sentence does not survive careful reading.

Watch the absolute wording "all": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

The statement sounds plausible but fails on precision, so it is false.'] WHERE case_id = 'CASE 3.4.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. A small IT-support venture illustrate micro-scale operations compared with a components manufacturer''s large workforce.

The section on business size, SMEs, and large enterprises frequently contrasts two similar ideas side by side. A comparison statement is true only if the relationship is stated in the right direction and applies to the right concept pair.

In this setting, local micro ventures contrast with a components manufacturer''s large-scale workforce. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Complete staff and financial data are needed to verify micro or other SME tiers.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, both staff and financial caps must be checked. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — Evaluated against the textbook standard, this assertion is false. SME definitions are irrelevant once a firm exports outside the home country.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because export activity does not override sme threshold tests. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — The claim is correct. One hundred and eighty employees fits the medium staff band if financial tests also pass.

The scenario is a worked example of business size, SMEs, and large enterprises. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, 180 is within medium''s below-250 staff range. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Micro pairs sub-ten staff with €2m turnover or balance sheet limits.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, this matches the eu micro row in the official sme table. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.'] WHERE case_id = 'CASE 3.4.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — This statement is false. Operating alone prevents micro classification because micro requires at least five staff.

Here you must apply ideas from business size, SMEs, and large enterprises to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because there is no minimum staff count for micro beyond the upper cap. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — The claim is correct. Large firms like a components manufacturer can employ thousands despite being few in number.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, a components manufacturer illustrates large-scale employment in a rare large firm. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Three thousand staff can still fall within medium limits if turnover is managed.

Here you must apply ideas from business size, SMEs, and large enterprises to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because 3,000 far exceeds the 250-employee medium cap. The trap is to agree with the topic while missing the one detail that breaks the logic.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Turnover within €10m alone makes a firm small even with three hundred employees.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, three hundred staff exceeds medium limits regardless of turnover. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Turnover above €50m prevents medium classification when that cap is breached.

The scenario is a worked example of business size, SMEs, and large enterprises. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, €55m exceeds the €50m medium turnover limit. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 3.4.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — This statement is correct. Micro enterprises form a large part of the SME group that dominates EU business counts.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, micro firms are part of the ~99% sme majority. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — The claim is correct. €43m is the medium balance sheet ceiling paired with sub-250 staff.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, €43m balance sheet is the medium cap in the EU table. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Nine staff and a €1.6m balance sheet confirm micro status despite €2.05m turnover.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because turnover above €2m disqualifies micro status even with qualifying balance sheet. The trap is to agree with the topic while missing the one detail that breaks the logic.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Eight staff is compatible with micro but financial figures must still be verified.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, eight staff fits micro range pending financial tests. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'FALSE — Evaluated against the textbook standard, this assertion is false. The ninety-nine percent statistic proves SMEs generate ninety-nine percent of EU GDP.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because the figure refers to business numbers, not gdp share. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.'] WHERE case_id = 'CASE 3.4.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The claim is correct. Leaving SME status can end eligibility for certain EU SME finance programmes.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, sme-tied support typically excludes large firms. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — The claim is false. Medium status holds because balance sheet is within €43m despite turnover above €50m.

The scenario is a worked example of business size, SMEs, and large enterprises. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

Applied to this claim, exceeding turnover cap blocks medium status despite balance sheet within limits. That is why the sentence does not survive careful reading.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Medium pairs sub-250 staff with a €10m turnover cap.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because €10m is the small turnover cap, not medium. The trap is to agree with the topic while missing the one detail that breaks the logic.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'TRUE — This statement is correct. Thirty staff is within the small enterprise employee limit.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, 30 is below the fifty-employee small cap. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'FALSE — This statement is false. One hundred and eighty staff keeps a firm in the small category because turnover is below €50m.

Here you must apply ideas from business size, SMEs, and large enterprises to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because 180 staff exceeds small''s below-fifty limit. The trap is to agree with the topic while missing the one detail that breaks the logic.

Once the overclaim or mislabel is exposed, the only consistent answer is false.'] WHERE case_id = 'CASE 3.4.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The claim is correct. EU SME tiers combine employee ceilings with turnover and/or balance sheet caps.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, combined criteria define each tier in the eu table. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — This statement is false. Nine staff alone proves micro status without financial documentation.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because financial thresholds are mandatory for micro confirmation. The trap is to agree with the topic while missing the one detail that breaks the logic.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — This statement is false. A components manufacturer counts as a micro enterprise because it supplies components to phone makers.

Here you must apply ideas from business size, SMEs, and large enterprises to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because supplier role does not determine size; headcount and financials do. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. One hundred and twenty-five staff satisfies the medium employee threshold.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, 125 is below 250 staff limit. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — The claim is correct. Staff headcount must be verified alongside turnover for medium classification.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, staff verification is mandatory alongside turnover. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 3.4.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The claim is correct. Four employees fall within the micro staff ceiling.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, four staff is below ten-employee micro limit. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — Evaluated against the textbook standard, this assertion is false. €2m turnover cap applies to small enterprises rather than micro.

This tests discrimination within business size, SMEs, and large enterprises: local versus international scope, equity versus debt, product versus market orientation, and similar pairs.

The statement overreaches because €2m turnover cap applies to micro, not small. The trap is to agree with the topic while missing the one detail that breaks the logic.

If two ideas are related, the statement may be false because it attributes the feature to the wrong member of the pair.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — This statement is false. €55m turnover confirms medium status because balance sheet is below €43m.

Here you must apply ideas from business size, SMEs, and large enterprises to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because turnover breach blocks medium status despite balance sheet within cap. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — This statement is false. Because SMEs are ninety-nine percent of firms, large firms employ fewer than one percent of workers.

Here you must apply ideas from business size, SMEs, and large enterprises to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because few large firms can still account for substantial employment shares. The trap is to agree with the topic while missing the one detail that breaks the logic.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'TRUE — The claim is correct. A firm can progress from micro to small to medium as metrics cross successive thresholds.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, growth can move a firm through sme tiers sequentially. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 3.4.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — This statement is correct. Forty-five staff and €9.5m turnover together meet EU small enterprise thresholds.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, both staff below fifty and turnover below €10m satisfy small criteria. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — The claim is correct. Thirty-eight staff fits the small employee ceiling below fifty.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, thirty-eight is within the small staff limit. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'TRUE — The claim is correct. €1.8m turnover stays within the micro turnover cap of €2m.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, €1.8m meets the micro turnover threshold. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Six employees fit the micro staff ceiling even when turnover exceeds €2m.

Here you must apply ideas from business size, SMEs, and large enterprises to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, six staff meets the micro headcount test though turnover may fail. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Nine employees satisfy the micro staff ceiling of fewer than ten people.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, nine is below the ten-person micro limit. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.'] WHERE case_id = 'CASE 3.4.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The claim is false. Micro firms are excluded from SME statistics because they are too small to register.

The scenario is a worked example of business size, SMEs, and large enterprises. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

Applied to this claim, micro firms are included in sme counts and definitions. That is why the sentence does not survive careful reading.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — The claim is false. Eight staff proves a firm is micro without checking turnover or balance sheet.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, financial caps must also be satisfied for micro status. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — The claim is correct. Two hundred and forty employees fits the medium staff ceiling below two hundred and fifty.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, 240 is below the 250-person medium limit. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. €48m turnover is within the €50m medium turnover cap.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, €48m meets the medium turnover threshold. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'FALSE — The claim is false. Large classification removes all legal duties to publish any financial information.

Although the subject matter is business size, SMEs, and large enterprises, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, large firms face reporting duties rather than exemption. That is why the sentence does not survive careful reading.

Watch the absolute wording "all": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

The statement sounds plausible but fails on precision, so it is false.'] WHERE case_id = 'CASE 3.4.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. €180k turnover is well below the €2m micro turnover cap.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, €180k meets the micro turnover threshold. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. A retailer is micro because turnover is under €10m despite thirty staff.

The scenario is a worked example of business size, SMEs, and large enterprises. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

Applied to this claim, staff above ten and turnover above €2m exclude micro; small may apply. That is why the sentence does not survive careful reading.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Four staff with €600k turnover can qualify as micro when financial caps are met.

Here you must apply ideas from business size, SMEs, and large enterprises to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, low headcount and turnover can satisfy micro criteria. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — This statement is correct. Two hundred staff with €49m turnover and a €42m balance sheet can satisfy medium thresholds.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, all three metrics can meet medium caps together. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. One hundred and twenty-five staff with €25m turnover and €30m balance sheet can satisfy medium thresholds.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, staff and both financial figures can meet medium caps. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.'] WHERE case_id = 'CASE 3.4.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Thirty staff with €9.9m turnover satisfies EU small enterprise thresholds.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, both metrics meet small staff and turnover caps. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. A firm is small because turnover is only €25m despite one hundred twenty-five staff.

The scenario is a worked example of business size, SMEs, and large enterprises. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

Applied to this claim, 125 staff exceeds small staff limit despite moderate turnover. That is why the sentence does not survive careful reading.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'TRUE — This statement is correct. One hundred staff with €30m turnover fits the medium staff and turnover bands.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, 100 staff and €30m turnover can meet medium thresholds pending balance sheet. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. €2m is the micro turnover ceiling in the EU SME table.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, €2m turnover cap applies to micro enterprises. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Nine staff fits the micro employee ceiling pending turnover verification.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, nine is below the ten-person micro limit. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.'] WHERE case_id = 'CASE 3.4.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Evaluated against the textbook standard, this assertion is false. Micro, small, and medium are identical categories with the same staff ceilings.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because each tier has distinct staff and financial thresholds. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. €43m is the medium balance sheet ceiling in the EU SME table.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, €43m balance sheet cap applies to medium enterprises. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. €10m is the small turnover ceiling in the EU SME table.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, €10m turnover cap applies to small enterprises. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — This statement is correct. €2m is the micro balance sheet ceiling in the EU SME table.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, €2m balance sheet cap applies to micro enterprises. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. €50m is the medium turnover ceiling in the EU SME table.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, €50m turnover cap applies to medium enterprises. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.'] WHERE case_id = 'CASE 3.4.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Village location prevents micro classification regardless of size metrics.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, location does not override eu size thresholds. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. €40m turnover alone is sufficient proof of medium enterprise status.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, medium requires sub-250 staff plus financial tests. That is why the sentence does not survive careful reading.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. SME status depends on official headcount and financial thresholds, not on industry sector.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, sector does not override eu size threshold tests. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'TRUE — This statement is correct. Meeting either the medium turnover cap or the medium balance sheet cap can satisfy the financial test.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, only one financial measure must qualify for medium status. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — This statement is correct. Micro status can be granted when balance sheet totals alone stay within the micro financial ceiling.

Here you must apply ideas from business size, SMEs, and large enterprises to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, only one financial measure must qualify for micro status. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 3.4.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — This statement is correct. Expanding headcount and turnover past small-tier limits can push a firm into the medium category.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, progression to medium replaces small when medium limits are satisfied. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — The claim is correct. Three thousand staff far exceeds the two hundred and fifty employee medium ceiling.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, 3,000 staff places a firm outside medium limits. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'TRUE — This statement is correct. Outgrowing micro employee or financial caps can move a workshop into the small enterprise band.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, progression to small replaces micro when small limits are satisfied. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Export activity does not override EU SME threshold tests for classification.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, cross-border sales do not replace official size criteria. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. €200m turnover far exceeds the €50m medium turnover ceiling.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, €200m turnover places a firm outside medium limits. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.'] WHERE case_id = 'CASE 3.4.25' AND tier = 'full';
