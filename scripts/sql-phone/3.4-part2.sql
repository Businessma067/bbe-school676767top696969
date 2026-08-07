-- Update expanded explanations for 3.4-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — This statement is correct. €2.1m turnover exceeds the €2m micro turnover cap.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, €2.1m breaks the micro turnover threshold. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — The claim is correct. €10.4m turnover exceeds the €10m small turnover cap.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, €10.4m breaks the small turnover threshold. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — This statement is correct. €52m turnover exceeds the €50m medium turnover cap.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, €52m breaks the medium turnover threshold. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Firms skip the small tier whenever they hire a tenth employee.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, ten employees fail micro but small requires further staff and turnover tests. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — The claim is correct. A €44m balance sheet exceeds the €43m medium balance sheet cap.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, €44m breaks the medium balance sheet threshold. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.'] WHERE case_id = 'CASE 3.4.26' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Eight employees fall short of the micro tier''s fewer-than-ten staff threshold.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, eight is below the ten-person micro limit. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. A seven-person workforce remains within micro staffing limits under EU rules.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, seven is below the ten-person micro limit. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — This statement is false. Exactly ten staff satisfies the micro requirement of fewer than ten employees.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because ten is not fewer than ten; the micro staff test fails. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Exactly two hundred fifty staff satisfies the medium requirement of fewer than two hundred and fifty.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, 250 is not fewer than 250; the medium staff test fails. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Exactly fifty staff satisfies the small enterprise requirement of fewer than fifty.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because fifty is not fewer than fifty; the small staff test fails. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.'] WHERE case_id = 'CASE 3.4.27' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Evaluated against the textbook standard, this assertion is correct. One hundred and eighty employees remain within the medium staffing band below two hundred and fifty.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, 180 is below the 250-person medium limit. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. A medium exporter employing one hundred workers stays under the two-hundred-fifty employee ceiling.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, 100 is below the 250-person medium limit. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. €2.1m turnover still meets the micro turnover cap of €2m.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, €2.1m exceeds the €2m micro turnover threshold. That is why the sentence does not survive careful reading.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — The claim is false. €10.4m turnover still meets the small turnover cap of €10m.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, €10.4m exceeds the €10m small turnover threshold. That is why the sentence does not survive careful reading.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — This statement is correct. One hundred and twenty workers on payroll still qualifies as medium under the staff cap.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, 120 is below the 250-person medium limit. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.'] WHERE case_id = 'CASE 3.4.28' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The claim is false. €52m turnover still meets the medium turnover cap of €50m.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, €52m exceeds the €50m medium turnover threshold. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. A €44m balance sheet still meets the medium balance sheet cap of €43m.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, €44m exceeds the €43m medium balance sheet threshold. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Two workers on payroll automatically places the shop above the micro employee band.

Although the subject matter is business size, SMEs, and large enterprises, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, two is below ten and fits the micro staff ceiling. That is why the sentence does not survive careful reading.

Watch the absolute wording "automatically": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Employing six people forces the business out of micro classification on headcount alone.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because six is below ten and fits the micro staff ceiling. The trap is to agree with the topic while missing the one detail that breaks the logic.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Two hundred staff fits the medium employee ceiling below two hundred and fifty.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, 200 is below the 250-person medium limit. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.'] WHERE case_id = 'CASE 3.4.29' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Forty-five staff fits the small employee ceiling below fifty.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, 45 is below the fifty-employee small limit. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'FALSE — This statement is false. Thirty staff exceeds the small employee ceiling of fewer than fifty.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because thirty is below fifty and fits the small staff ceiling. The trap is to agree with the topic while missing the one detail that breaks the logic.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. One hundred and eighty staff fits the small employee ceiling below fifty.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because 180 exceeds the fifty-employee small limit. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — This statement is false. Two hundred staff fits the small employee ceiling below fifty.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because 200 exceeds the fifty-employee small limit. The trap is to agree with the topic while missing the one detail that breaks the logic.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Three thousand staff fits the medium employee ceiling below two hundred and fifty.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, 3,000 far exceeds the 250-person medium limit. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.'] WHERE case_id = 'CASE 3.4.30' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The claim is false. Turnover of €1.8m exceeds the micro turnover cap of €2m.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, €1.8m is within the €2m micro turnover ceiling. That is why the sentence does not survive careful reading.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Micro firms are included in SME counts and MSME groupings.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, micro enterprises form part of the sme category. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Ten thousand a components manufacturer staff fits the medium employee ceiling below two hundred and fifty.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because 10,000 far exceeds the 250-person medium limit. The trap is to agree with the topic while missing the one detail that breaks the logic.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — This statement is false. Turnover of €9.5m exceeds the small turnover cap of €10m.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because €9.5m is within the €10m small turnover ceiling. The trap is to agree with the topic while missing the one detail that breaks the logic.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Turnover of €49m exceeds the medium turnover cap of €50m.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because €49m is within the €50m medium turnover ceiling. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.'] WHERE case_id = 'CASE 3.4.31' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. A firm with forty-five staff is micro because it employs fewer than fifty people.

The scenario is a worked example of business size, SMEs, and large enterprises. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

Applied to this claim, forty-five staff exceeds the micro ceiling of fewer than ten. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — The claim is correct. Large firms face reporting duties rather than exemption from financial disclosure.

The section on business size, SMEs, and large enterprises frequently contrasts two similar ideas side by side. A comparison statement is true only if the relationship is stated in the right direction and applies to the right concept pair.

In this setting, large classification brings reporting obligations. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Because SMEs are numerous by count, SME-focused policy reaches most EU businesses.

The scenario is a worked example of business size, SMEs, and large enterprises. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, high sme share by number shapes eu business policy. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — The claim is correct. Few large firms can still account for substantial employment despite being rare by count.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, large employers can be few in number yet significant in jobs. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — The claim is correct. SME failures can still affect employees, suppliers, and local communities.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, sme insolvency has stakeholder effects beyond firm count statistics. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.'] WHERE case_id = 'CASE 3.4.32' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — This statement is false. A firm with thirty-eight staff is micro because it employs fewer than fifty people.

Here you must apply ideas from business size, SMEs, and large enterprises to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because thirty-eight staff exceeds the micro ceiling of fewer than ten. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — The claim is correct. Small status requires fewer than fifty staff plus turnover at or below €10m.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, small combines staff ceiling with the €10m turnover cap. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Medium status requires fewer than two hundred and fifty staff plus a qualifying financial test.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, medium combines staff ceiling with turnover or balance sheet caps. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. EU support programmes use standard SME thresholds to verify applicant eligibility.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, finance schemes rely on official size criteria. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — This statement is correct. A firm with nine staff still needs turnover or balance sheet data to confirm micro status.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, financial caps must be verified alongside headcount. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 3.4.33' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The claim is false. Medium status follows from international operations regardless of headcount.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, medium status depends on eu thresholds, not geographic scope. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. A components manufacturer is classified as large under EU thresholds because headcount far exceeds medium limits.

Start from the textbook definition in business size, SMEs, and large enterprises. A statement is true only if every scope word in the definition is respected—location, purpose, distribution rule, or time horizon.

Applied carefully, a components manufacturer''s ~10,000 staff exceeds the 250-person medium ceiling. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Micro status requires fewer than ten staff plus turnover at or below €2m or balance sheet at or below €2m.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, micro combines staff ceiling with one financial cap. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. a neighbourhood bakery with six staff meets the micro headcount test.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, six employees is below the ten-person micro limit. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. A firm with eight staff still needs turnover or balance sheet data to confirm micro status.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, financial caps must be verified alongside headcount. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.'] WHERE case_id = 'CASE 3.4.34' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The claim is correct. A village craft business with four staff meets the micro headcount test.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, four employees is below the ten-person micro limit. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'FALSE — This statement is false. Micro status follows from supplying larger manufacturers regardless of headcount.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because supplier relationships do not determine eu size classification. The trap is to agree with the topic while missing the one detail that breaks the logic.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. A local repair shop with two staff meets the micro headcount test.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, two employees is below the ten-person micro limit. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. A retailer with thirty staff meets the small headcount test.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, thirty employees is below the fifty-person small limit. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — The claim is false. SME classification is optional for firms seeking EU support programmes.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, official sme criteria gate access to many support schemes. That is why the sentence does not survive careful reading.

Because the decisive detail is wrong, mark the statement false.'] WHERE case_id = 'CASE 3.4.35' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Evaluated against the textbook standard, this assertion is correct. An architect practice with nine staff meets the micro headcount test.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, nine employees is below the ten-person micro limit. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — This statement is correct. A family firm with exactly ten staff fails the micro headcount test.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, ten is not fewer than ten, so micro staff test fails. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — The claim is correct. A textile plant with exactly two hundred fifty staff fails the medium headcount test.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, 250 is not fewer than 250, so medium staff test fails. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. A wholesaler with thirty-eight staff meets the small headcount test.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, thirty-eight employees is below the fifty-person small limit. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. A logistics company with exactly fifty staff fails the small headcount test.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, fifty is not fewer than fifty, so small staff test fails. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 3.4.36' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — This statement is correct. The medium financial test treats €43m as the upper balance sheet bound.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, €43m is the medium balance sheet ceiling. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Micro eligibility includes balance sheet totals that do not exceed €2m.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, €2m is the micro balance sheet ceiling. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Small-enterprise turnover qualification allows figures up to the €10m ceiling.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, €10m is the small turnover ceiling. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — This statement is correct. Micro turnover qualification permits annual sales up to €2m under EU tables.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, €2m is the micro turnover ceiling. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Medium turnover qualification permits figures up to €50m when other criteria hold.

Here you must apply ideas from business size, SMEs, and large enterprises to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, €50m is the medium turnover ceiling. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.'] WHERE case_id = 'CASE 3.4.37' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Evaluated against the textbook standard, this assertion is false. Fifty-one employees instantly relegate a firm to large-enterprise status with no intermediate tier.

The topic is business size, SMEs, and large enterprises, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because fifty staff fails small but medium tier may still apply. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "instantly": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Both turnover and balance sheet must fail for medium status to be denied.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because breaching either financial cap can block medium classification. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — The claim is correct. The ninety-nine percent SME statistic refers to business numbers, not GDP share.

The question tests a precise definition from the section on business size, SMEs, and large enterprises. Entrance-exam statements often copy a definition almost correctly; one altered phrase is enough to make the whole sentence wrong.

In this setting, the statistic measures business counts rather than gdp share. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Meeting the turnover threshold for medium size does not let the firm ignore the balance-sheet criterion entirely.

Although the subject matter is business size, SMEs, and large enterprises, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, either financial cap can disqualify medium status when breached. That is why the sentence does not survive careful reading.

Watch the absolute wording "entirely": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Eleven employees immediately push a business into the large-firm category skipping SME tiers.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, ten staff fails micro but small and medium tiers still exist. That is why the sentence does not survive careful reading.

Once the overclaim or mislabel is exposed, the only consistent answer is false.'] WHERE case_id = 'CASE 3.4.38' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The claim is false. Passing the balance-sheet test alone does not drop the turnover test from the medium-size classification.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, either financial cap can disqualify medium status when breached. That is why the sentence does not survive careful reading.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Grant schemes ignore official micro thresholds when the applicant is a local shop.

Here you must apply ideas from business size, SMEs, and large enterprises to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because support programmes use standard eu micro criteria. The trap is to agree with the topic while missing the one detail that breaks the logic.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. A firm with nine staff is confirmed micro without turnover documentation.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, financial thresholds are mandatory for micro confirmation. That is why the sentence does not survive careful reading.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Both turnover and balance sheet must pass for micro status to be granted.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, only one financial measure must qualify for micro status. That is why the sentence does not survive careful reading.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'TRUE — The claim is correct. Definitions actively shape finance access and regulatory treatment of firms.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, sme labels affect support and reporting, not just description. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.'] WHERE case_id = 'CASE 3.4.39' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The claim is correct. Meeting one SME criterion alone does not guarantee overall SME status in a tier.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, each tier requires joint staff and financial tests. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'TRUE — The claim is correct. Micro enterprises dominate EU business counts as part of the broader SME group.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, micro firms contribute to the ~99% sme majority by number. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'FALSE — This statement is false. A firm with eight staff is confirmed micro without turnover documentation.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because financial thresholds are mandatory for micro confirmation. The trap is to agree with the topic while missing the one detail that breaks the logic.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Progression through SME tiers follows successive threshold crossings as firms grow.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, firms can move from micro to small to medium with growth. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — Evaluated against the textbook standard, this assertion is false. The EU micro cap for turnover is €10m rather than €2m.

This tests discrimination within business size, SMEs, and large enterprises: local versus international scope, equity versus debt, product versus market orientation, and similar pairs.

The statement overreaches because €10m is the small turnover cap, not the micro cap. The trap is to agree with the topic while missing the one detail that breaks the logic.

If two ideas are related, the statement may be false because it attributes the feature to the wrong member of the pair.

The statement sounds plausible but fails on precision, so it is false.'] WHERE case_id = 'CASE 3.4.40' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The claim is correct. Small enterprises must satisfy staff limits and the €10m turnover cap.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, small uses combined staff and turnover criteria. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — The claim is correct. Classification review requires both headcount and financial figures for EU SME tiers.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, incomplete data prevents reliable sme verification. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'TRUE — This statement is correct. A firm crossing medium limits becomes ineligible for certain EU SME finance programmes.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, sme-tied support excludes firms above medium thresholds. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — This statement is correct. Medium enterprises must satisfy staff limits and at least one financial cap.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, medium uses combined staff and financial criteria. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — The claim is correct. A tech group with three thousand staff is treated as large under EU size rules.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, 3,000 employees exceeds all SME staff ceilings. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.'] WHERE case_id = 'CASE 3.4.41' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Accounting rule sets can differ between micro firms and large groups such as a components manufacturer.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, size classification affects applicable accounting rules. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. EU SME tables pair each tier with distinct staff and financial ceilings.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, micro, small, and medium each have separate threshold rows. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'FALSE — The claim is false. The EU medium cap for balance sheet is €50m rather than €43m.

The section on business size, SMEs, and large enterprises frequently contrasts two similar ideas side by side. A comparison statement is true only if the relationship is stated in the right direction and applies to the right concept pair.

Applied to this claim, €43m is the medium balance sheet cap in the EU table. That is why the sentence does not survive careful reading.

Students often remember that two concepts differ but swap the direction of the comparison. Verify which side of the pair is longer, larger, riskier, or more regulated.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — The claim is false. Labeling €10m as the medium turnover ceiling misstates the EU threshold for that tier.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, €10m is the small turnover cap, not the medium cap. That is why the sentence does not survive careful reading.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — The claim is false. Calling €2m the small turnover cap incorrectly swaps micro and small financial limits.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, €2m is the micro turnover cap, not the small cap. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.'] WHERE case_id = 'CASE 3.4.42' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Evaluated against the textbook standard, this assertion is false. A small IT-support venture count as a large enterprise because their bakery supplies many customers.

Here you must apply ideas from business size, SMEs, and large enterprises to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because a small IT-support venture illustrate micro-scale operations, not large enterprise status. The trap is to agree with the topic while missing the one detail that breaks the logic.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'TRUE — The claim is correct. One hundred and twenty staff with €52m turnover fails the medium turnover test.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, €52m exceeds the €50m medium turnover cap. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — This statement is false. About ninety-nine percent of EU employees work in SMEs because ninety-nine percent of firms are SMEs.

Here you must apply ideas from business size, SMEs, and large enterprises to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because the statistic refers to business numbers, not employment share. The trap is to agree with the topic while missing the one detail that breaks the logic.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — This statement is false. A components manufacturer counts as a medium enterprise because its Austrian headquarters defines EU size.

Here you must apply ideas from business size, SMEs, and large enterprises to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because a components manufacturer''s ~10,000 staff exceeds medium limits. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Two hundred staff with €55m turnover fails the medium turnover test.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, €55m exceeds the €50m medium turnover cap. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.'] WHERE case_id = 'CASE 3.4.43' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Evaluated against the textbook standard, this assertion is correct. An engineering firm with two hundred staff can meet the medium staff test.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, 200 is below the 250-person medium limit. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — The claim is correct. Grant eligibility for micro enterprises requires meeting official micro thresholds.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, micro grants use standard eu micro criteria. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — This statement is correct. SME verification for bank loans may require proof of headcount and turnover bands.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, lenders check official sme thresholds for guarantee schemes. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — This statement is correct. A manufacturer with two hundred forty staff can meet the medium staff test.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, 240 is below the 250-person medium limit. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — This statement is correct. One hundred and eighty staff with €45m turnover can meet medium staff and turnover tests.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, 180 staff and €45m turnover fit medium ceilings. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.'] WHERE case_id = 'CASE 3.4.44' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Evaluated against the textbook standard, this assertion is correct. Medium turnover of €49m stays within the €50m medium cap.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, €49m meets the medium turnover threshold. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Micro enterprises are omitted from the ninety-nine percent SME business count.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, micro firms are included in sme counts. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — This statement is correct. Small turnover of €9.5m stays within the €10m small cap.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, €9.5m meets the small turnover threshold. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — The claim is correct. A firm at eight staff is not confirmed as micro without financial verification.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, headcount alone does not confirm micro status. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. A firm becomes large immediately upon employing a tenth worker.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, ten staff fails micro but further tiers depend on additional tests. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.'] WHERE case_id = 'CASE 3.4.45' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — This statement is correct. A firm at nine staff is not confirmed as micro without financial verification.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, headcount alone does not confirm micro status. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'FALSE — The claim is false. A firm becomes large immediately upon reaching €2.1m turnover.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, turnover above €2m removes micro status but small or medium may apply. That is why the sentence does not survive careful reading.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Micro turnover of €1.5m stays within the €2m micro cap.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, €1.5m meets the micro turnover threshold. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — This statement is false. One criterion alone is enough for small status when staff are forty-five.

Here you must apply ideas from business size, SMEs, and large enterprises to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because small requires turnover at or below €10m as well. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — This statement is false. One criterion alone is enough for medium status when turnover is €40m.

Here you must apply ideas from business size, SMEs, and large enterprises to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because medium requires sub-250 staff plus financial tests. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.'] WHERE case_id = 'CASE 3.4.46' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Headcount alone confirms small status for a fifty-employee logistics company.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, fifty staff fails the below-fifty small staff test. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — This statement is false. Incomplete turnover data still proves micro status when staff are nine.

Here you must apply ideas from business size, SMEs, and large enterprises to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because financial thresholds are mandatory for micro confirmation. The trap is to agree with the topic while missing the one detail that breaks the logic.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — This statement is correct. Micro turnover of €1.6m balance sheet context still allows €1.6m balance sheet under €2m cap.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, €1.6m meets the micro balance sheet threshold. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — The claim is false. Supplier status to phone makers determines a components manufacturer size classification.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, headcount and financial thresholds determine eu size classification. That is why the sentence does not survive careful reading.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Headcount alone confirms micro status for a ten-employee family firm.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because ten staff fails the below-ten micro staff test. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.'] WHERE case_id = 'CASE 3.4.47' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Evaluated against the textbook standard, this assertion is correct. Micro turnover of €1.7m balance sheet total stays within the €2m micro balance sheet cap.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, €1.7m meets the micro balance sheet threshold. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. A small IT-support venture serve as micro-scale examples alongside a components manufacturer as a large firm.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, course examples contrast micro local ventures with a components manufacturer scale. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — The claim is correct. SME classification principles combine staff ceilings with turnover and/or balance sheet caps.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, combined criteria define eu sme tiers in the official table. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — This statement is correct. About ninety-nine percent of EU businesses are SMEs by number rather than by employment share alone.

This tests discrimination within business size, SMEs, and large enterprises: local versus international scope, equity versus debt, product versus market orientation, and similar pairs.

Applied carefully, the statistic measures business counts. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Medium balance sheet of €42m stays within the €43m medium cap.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, €42m meets the medium balance sheet threshold. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 3.4.48' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. An SME may lose access to certain guarantee schemes after reclassification as large.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, sme-tied finance programmes typically exclude large firms. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — This statement is correct. Micro enterprises remain part of MSME groupings alongside small and medium firms.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, msme terminology covers micro, small, and medium categories together. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Crossing the medium employee or financial ceiling moves classification toward large enterprise status.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, exceeding medium thresholds exits sme bands. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Village craft workshops are exempt from EU micro turnover caps.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, official staff and financial tests determine micro status. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — This statement is correct. Official size categories matter for EU-backed finance and support programme access.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, definitions gate eligibility for sme support. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 3.4.49' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Evaluated against the textbook standard, this assertion is correct. EU SME definitions apply equally regardless of whether a firm operates locally or nationally.

The relevant theory comes from business size, SMEs, and large enterprises. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, geographic scope does not replace official eu size thresholds. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — This statement is correct. Balance sheet totals can disqualify medium status even when turnover appears moderate.

Here you must apply ideas from business size, SMEs, and large enterprises to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, the medium balance sheet cap is binding alongside staff limits. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Staff headcount alone cannot confirm small status without checking the turnover cap.

The topic is business size, SMEs, and large enterprises, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

Applied carefully, small classification requires both staff and turnover tests. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'FALSE — The claim is false. Medium status requires both turnover and balance sheet below their caps simultaneously.

This statement draws on business size, SMEs, and large enterprises. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, only one financial measure must qualify alongside staff for medium status. That is why the sentence does not survive careful reading.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Small status ignores turnover when staff remain below fifty.

Here you must apply ideas from business size, SMEs, and large enterprises to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because small classification requires turnover at or below €10m. The trap is to agree with the topic while missing the one detail that breaks the logic.

Once the overclaim or mislabel is exposed, the only consistent answer is false.'] WHERE case_id = 'CASE 3.4.50' AND tier = 'full';
