-- Update expanded explanations for 3.4-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['€2.1m breaks the micro turnover threshold.

Applied carefully, "€2.1m turnover exceeds the €2m micro turnover cap" lines up with the textbook idea without adding an extra restriction.

The statement is true.', '€10.4m breaks the small turnover threshold.

Applied carefully, "€10.4m turnover exceeds the €10m small turnover cap" lines up with the textbook idea without adding an extra restriction.

The statement is true.', '€52m breaks the medium turnover threshold.

Applied carefully, "€52m turnover exceeds the €50m medium turnover cap" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Ten employees fail micro but small requires further staff and turnover tests.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', '€44m breaks the medium balance sheet threshold.

Applied carefully, "A €44m balance sheet exceeds the €43m medium balance sheet cap" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.4.26' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Eight is below the ten-person micro limit.

Applied carefully, "Eight employees fall short of the micro tier''s fewer-than-ten staff threshold" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Seven is below the ten-person micro limit.

Applied carefully, "A seven-person workforce remains within micro staffing limits under EU rules" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Ten is not fewer than ten; the micro staff test fails.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', '250 is not fewer than 250; the medium staff test fails.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Fifty is not fewer than fifty; the small staff test fails.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.4.27' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['180 is below the 250-person medium limit.

Applied carefully, "One hundred and eighty employees remain within the medium staffing band below two hundred and fifty" lines up with the textbook idea without adding an extra restriction.

The statement is true.', '100 is below the 250-person medium limit.

Applied carefully, "A medium exporter employing one hundred workers stays under the two-hundred-fifty employee ceiling" lines up with the textbook idea without adding an extra restriction.

The statement is true.', '€2.1m exceeds the €2m micro turnover threshold.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', '€10.4m exceeds the €10m small turnover threshold.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', '120 is below the 250-person medium limit.

Applied carefully, "One hundred and twenty workers on payroll still qualifies as medium under the staff cap" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.4.28' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['€52m exceeds the €50m medium turnover threshold.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', '€44m exceeds the €43m medium balance sheet threshold.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Two is below ten and fits the micro staff ceiling.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Six is below ten and fits the micro staff ceiling.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', '200 is below the 250-person medium limit.

Applied carefully, "Two hundred staff fits the medium employee ceiling below two hundred and fifty" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.4.29' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['45 is below the fifty-employee small limit.

Applied carefully, "Forty-five staff fits the small employee ceiling below fifty" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Thirty is below fifty and fits the small staff ceiling.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', '180 exceeds the fifty-employee small limit.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', '200 exceeds the fifty-employee small limit.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', '3,000 far exceeds the 250-person medium limit.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.4.30' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['€1.8m is within the €2m micro turnover ceiling.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Micro enterprises form part of the sme category.

Applied carefully, "Micro firms are included in SME counts and MSME groupings" lines up with the textbook idea without adding an extra restriction.

The statement is true.', '10,000 far exceeds the 250-person medium limit.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', '€9.5m is within the €10m small turnover ceiling.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', '€49m is within the €50m medium turnover ceiling.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.4.31' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Forty-five staff exceeds the micro ceiling of fewer than ten.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Large classification brings reporting obligations.

Applied carefully, "Large firms face reporting duties rather than exemption from financial disclosure" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'High sme share by number shapes eu business policy.

Applied carefully, "Because SMEs are numerous by count, SME-focused policy reaches most EU businesses" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Large employers can be few in number yet significant in jobs.

Applied carefully, "Few large firms can still account for substantial employment despite being rare by count" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Sme insolvency has stakeholder effects beyond firm count statistics.

Applied carefully, "SME failures can still affect employees, suppliers, and local communities" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.4.32' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Thirty-eight staff exceeds the micro ceiling of fewer than ten.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Small combines staff ceiling with the €10m turnover cap.

Applied carefully, "Small status requires fewer than fifty staff plus turnover at or below €10m" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Medium combines staff ceiling with turnover or balance sheet caps.

Applied carefully, "Medium status requires fewer than two hundred and fifty staff plus a qualifying financial test" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Finance schemes rely on official size criteria.

Applied carefully, "EU support programmes use standard SME thresholds to verify applicant eligibility" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Financial caps must be verified alongside headcount.

Applied carefully, "A firm with nine staff still needs turnover or balance sheet data to confirm micro status" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.4.33' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Medium status depends on eu thresholds, not geographic scope.

The absolute wording "regardless" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'A components manufacturer''s ~10,000 staff exceeds the 250-person medium ceiling.

Applied carefully, "A components manufacturer is classified as large under EU thresholds because headcount far exceeds medium limits" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Micro combines staff ceiling with one financial cap.

Applied carefully, "Micro status requires fewer than ten staff plus turnover at or below €2m or balance sheet at or below €2m" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Six employees is below the ten-person micro limit.

Applied carefully, "a neighbourhood bakery with six staff meets the micro headcount test" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Financial caps must be verified alongside headcount.

Applied carefully, "A firm with eight staff still needs turnover or balance sheet data to confirm micro status" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.4.34' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Four employees is below the ten-person micro limit.

Applied carefully, "A village craft business with four staff meets the micro headcount test" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Supplier relationships do not determine eu size classification.

The absolute wording "regardless" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Two employees is below the ten-person micro limit.

Applied carefully, "A local repair shop with two staff meets the micro headcount test" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Thirty employees is below the fifty-person small limit.

Applied carefully, "A retailer with thirty staff meets the small headcount test" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Official sme criteria gate access to many support schemes.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.4.35' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Nine employees is below the ten-person micro limit.

Applied carefully, "An architect practice with nine staff meets the micro headcount test" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Ten is not fewer than ten, so micro staff test fails.

Applied carefully, "A family firm with exactly ten staff fails the micro headcount test" lines up with the textbook idea without adding an extra restriction.

The statement is true.', '250 is not fewer than 250, so medium staff test fails.

Applied carefully, "A textile plant with exactly two hundred fifty staff fails the medium headcount test" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Thirty-eight employees is below the fifty-person small limit.

Applied carefully, "A wholesaler with thirty-eight staff meets the small headcount test" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Fifty is not fewer than fifty, so small staff test fails.

Applied carefully, "A logistics company with exactly fifty staff fails the small headcount test" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.4.36' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['€43m is the medium balance sheet ceiling.

Applied carefully, "The medium financial test treats €43m as the upper balance sheet bound" lines up with the textbook idea without adding an extra restriction.

The statement is true.', '€2m is the micro balance sheet ceiling.

Applied carefully, "Micro eligibility includes balance sheet totals that do not exceed €2m" lines up with the textbook idea without adding an extra restriction.

The statement is true.', '€10m is the small turnover ceiling.

Applied carefully, "Small-enterprise turnover qualification allows figures up to the €10m ceiling" lines up with the textbook idea without adding an extra restriction.

The statement is true.', '€2m is the micro turnover ceiling.

Applied carefully, "Micro turnover qualification permits annual sales up to €2m under EU tables" lines up with the textbook idea without adding an extra restriction.

The statement is true.', '€50m is the medium turnover ceiling.

Applied carefully, "Medium turnover qualification permits figures up to €50m when other criteria hold" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.4.37' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Fifty staff fails small but medium tier may still apply.

The absolute wording "instantly" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Breaching either financial cap can block medium classification.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'The statistic measures business counts rather than gdp share.

Applied carefully, "The ninety-nine percent SME statistic refers to business numbers, not GDP share" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Either financial cap can disqualify medium status when breached.

The absolute wording "entirely" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Ten staff fails micro but small and medium tiers still exist.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.4.38' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Either financial cap can disqualify medium status when breached.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Support programmes use standard eu micro criteria.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Financial thresholds are mandatory for micro confirmation.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Only one financial measure must qualify for micro status.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Sme labels affect support and reporting, not just description.

Applied carefully, "Definitions actively shape finance access and regulatory treatment of firms" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.4.39' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Each tier requires joint staff and financial tests.

Applied carefully, "Meeting one SME criterion alone does not guarantee overall SME status in a tier" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Micro firms contribute to the ~99% sme majority by number.

Applied carefully, "Micro enterprises dominate EU business counts as part of the broader SME group" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Financial thresholds are mandatory for micro confirmation.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Firms can move from micro to small to medium with growth.

Applied carefully, "Progression through SME tiers follows successive threshold crossings as firms grow" lines up with the textbook idea without adding an extra restriction.

The statement is true.', '€10m is the small turnover cap, not the micro cap.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.4.40' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Small uses combined staff and turnover criteria.

Applied carefully, "Small enterprises must satisfy staff limits and the €10m turnover cap" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Incomplete data prevents reliable sme verification.

Applied carefully, "Classification review requires both headcount and financial figures for EU SME tiers" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Sme-tied support excludes firms above medium thresholds.

Applied carefully, "A firm crossing medium limits becomes ineligible for certain EU SME finance programmes" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Medium uses combined staff and financial criteria.

Applied carefully, "Medium enterprises must satisfy staff limits and at least one financial cap" lines up with the textbook idea without adding an extra restriction.

The statement is true.', '3,000 employees exceeds all SME staff ceilings.

Applied carefully, "A tech group with three thousand staff is treated as large under EU size rules" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.4.41' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Size classification affects applicable accounting rules.

Applied carefully, "Accounting rule sets can differ between micro firms and large groups such as a components manufacturer" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Micro, small, and medium each have separate threshold rows.

Applied carefully, "EU SME tables pair each tier with distinct staff and financial ceilings" lines up with the textbook idea without adding an extra restriction.

The statement is true.', '€43m is the medium balance sheet cap in the EU table.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', '€10m is the small turnover cap, not the medium cap.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', '€2m is the micro turnover cap, not the small cap.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.4.42' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A small IT-support venture illustrate micro-scale operations, not large enterprise status.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', '€52m exceeds the €50m medium turnover cap.

Applied carefully, "One hundred and twenty staff with €52m turnover fails the medium turnover test" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The statistic refers to business numbers, not employment share.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'A components manufacturer''s ~10,000 staff exceeds medium limits.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', '€55m exceeds the €50m medium turnover cap.

Applied carefully, "Two hundred staff with €55m turnover fails the medium turnover test" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.4.43' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['200 is below the 250-person medium limit.

Applied carefully, "An engineering firm with two hundred staff can meet the medium staff test" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Micro grants use standard eu micro criteria.

Applied carefully, "Grant eligibility for micro enterprises requires meeting official micro thresholds" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Lenders check official sme thresholds for guarantee schemes.

Applied carefully, "SME verification for bank loans may require proof of headcount and turnover bands" lines up with the textbook idea without adding an extra restriction.

The statement is true.', '240 is below the 250-person medium limit.

Applied carefully, "A manufacturer with two hundred forty staff can meet the medium staff test" lines up with the textbook idea without adding an extra restriction.

The statement is true.', '180 staff and €45m turnover fit medium ceilings.

Applied carefully, "One hundred and eighty staff with €45m turnover can meet medium staff and turnover tests" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.4.44' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['€49m meets the medium turnover threshold.

Applied carefully, "Medium turnover of €49m stays within the €50m medium cap" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Micro firms are included in sme counts.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', '€9.5m meets the small turnover threshold.

Applied carefully, "Small turnover of €9.5m stays within the €10m small cap" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Headcount alone does not confirm micro status.

Applied carefully, "A firm at eight staff is not confirmed as micro without financial verification" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Ten staff fails micro but further tiers depend on additional tests.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.4.45' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Headcount alone does not confirm micro status.

Applied carefully, "A firm at nine staff is not confirmed as micro without financial verification" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Turnover above €2m removes micro status but small or medium may apply.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', '€1.5m meets the micro turnover threshold.

Applied carefully, "Micro turnover of €1.5m stays within the €2m micro cap" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Small requires turnover at or below €10m as well.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Medium requires sub-250 staff plus financial tests.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.4.46' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Fifty staff fails the below-fifty small staff test.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Financial thresholds are mandatory for micro confirmation.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', '€1.6m meets the micro balance sheet threshold.

Applied carefully, "Micro turnover of €1.6m balance sheet context still allows €1.6m balance sheet under €2m cap" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Headcount and financial thresholds determine eu size classification.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Ten staff fails the below-ten micro staff test.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.4.47' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['€1.7m meets the micro balance sheet threshold.

Applied carefully, "Micro turnover of €1.7m balance sheet total stays within the €2m micro balance sheet cap" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Course examples contrast micro local ventures with a components manufacturer scale.

Applied carefully, "A small IT-support venture serve as micro-scale examples alongside a components manufacturer as a large firm" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Combined criteria define eu sme tiers in the official table.

Applied carefully, "SME classification principles combine staff ceilings with turnover and/or balance sheet caps" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The statistic measures business counts.

Applied carefully, "About ninety-nine percent of EU businesses are SMEs by number rather than by employment share alone" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', '€42m meets the medium balance sheet threshold.

Applied carefully, "Medium balance sheet of €42m stays within the €43m medium cap" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.4.48' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Sme-tied finance programmes typically exclude large firms.

Applied carefully, "An SME may lose access to certain guarantee schemes after reclassification as large" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Msme terminology covers micro, small, and medium categories together.

Applied carefully, "Micro enterprises remain part of MSME groupings alongside small and medium firms" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Exceeding medium thresholds exits sme bands.

Applied carefully, "Crossing the medium employee or financial ceiling moves classification toward large enterprise status" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Official staff and financial tests determine micro status.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Definitions gate eligibility for sme support.

Applied carefully, "Official size categories matter for EU-backed finance and support programme access" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.4.49' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Geographic scope does not replace official eu size thresholds.

Applied carefully, "EU SME definitions apply equally regardless of whether a firm operates locally or nationally" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The medium balance sheet cap is binding alongside staff limits.

Applied carefully, "Balance sheet totals can disqualify medium status even when turnover appears moderate" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Small classification requires both staff and turnover tests.

Applied carefully, "Staff headcount alone cannot confirm small status without checking the turnover cap" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Only one financial measure must qualify alongside staff for medium status.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Small classification requires turnover at or below €10m.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.4.50' AND tier = 'full';
