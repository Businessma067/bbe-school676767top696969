-- Update expanded explanations for 3.4-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Both staff and financial thresholds must be met; high turnover can exclude micro status.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'FALSE — Both staff and turnover thresholds must be satisfied for small status.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.

The statement is false.
', 'FALSE — Micro status requires both the staff ceiling and a turnover or balance sheet cap.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.

The statement is false.
', 'TRUE — Eu micro classification requires fewer than ten employees.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'FALSE — Turnover above €2m can disqualify micro status despite a qualifying balance sheet.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.

The statement is false.
'] WHERE case_id = 'CASE 3.4.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The €10m turnover cap is binding alongside the staff threshold.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
', 'TRUE — Micro firms must meet the staff cap and either the turnover or balance sheet financial ceiling.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — Turnover above €2m breaks the micro financial cap even with a small workforce.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — Small classification additionally requires turnover at or below €10m.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
', 'TRUE — The eu small category sets an upper staff limit below fifty employees.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
'] WHERE case_id = 'CASE 3.4.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Only one financial threshold needs to be met alongside staff; both need not pass.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'TRUE — Eu medium enterprises must employ fewer than 250 people.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'FALSE — Exceeding the balance sheet cap disqualifies medium status even if turnover qualifies.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'FALSE — 240 is below 250 and therefore within the medium staff limit.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'FALSE — Small status requires both staff and turnover limits; breaching turnover removes small classification.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.

The statement is false.
'] WHERE case_id = 'CASE 3.4.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Micro firms are explicitly included in msme/sme groupings.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'FALSE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Smes form the vast majority, not a minority, of eu businesses.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Definitions actively shape finance access and regulatory treatment.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Medium status depends on thresholds, not on geographic scope alone.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'TRUE — Medium classification uses staff plus either turnover or balance sheet financial ceilings.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
'] WHERE case_id = 'CASE 3.4.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Ten thousand staff far exceeds the 250-employee medium ceiling.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — Official eu data cite that about 99% of eu businesses are smes.

Roughly ninety-nine percent of businesses registered in the EU fall inside the SME size classes — micro, small, or medium.

The statement is true.
', 'FALSE — Size affects accounting rules, implying differences by category.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'TRUE — 200 is below the 250-person medium limit.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'FALSE — Exceeding the turnover cap disqualifies micro status even with qualifying staff and balance sheet.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
'] WHERE case_id = 'CASE 3.4.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Eu support and finance often hinge on meeting sme criteria.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Size classification affects which accounting rules apply to a firm.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Ten employees is not fewer than ten, so the staff test fails.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'FALSE — 250 is not fewer than 250; the staff test fails.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'FALSE — Small requires fewer than fifty staff; fifty is not eligible.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is false.
'] WHERE case_id = 'CASE 3.4.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — EU MSME size classes combine a staff ceiling with a financial alternative (turnover or balance sheet). Staff alone never completes the test.

Small and medium tiers cover firms well above ten employees.

Against the scenario (a firm that has one hundred eighty staff, €48m turnover, and a €44m balance sheet), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — Msme refers to micro, small, and medium enterprises collectively.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — EU MSME size classes combine a staff ceiling with a financial alternative (turnover or balance sheet). Staff alone never completes the test.

Growing beyond thresholds can shift reporting requirements.

In the case setting — a firm that has one hundred eighty staff, €48m turnover, and a €44m balance sheet — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Official staff and financial tests determine micro status.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'TRUE — The micro limit is strictly below ten employees; ten does not qualify.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
'] WHERE case_id = 'CASE 3.4.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Surpassing medium criteria places a firm in the large category.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — Support programmes use the standard eu micro thresholds for eligibility.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — The small staff cap is strictly below fifty employees.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
', 'TRUE — Eu micro rules pair staff with one of two financial caps.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — The medium cap excludes firms with 250 or more employees.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
'] WHERE case_id = 'CASE 3.4.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The €43m balance sheet limit is binding for medium classification.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — Qualifying within small limits replaces micro status.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

With ~99% sme share, sme-focused policy reaches most businesses.

The scenario (a components manufacturer employs roughly ten thousand staff worldwide) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Size classification links to differing accounting rules between micro and large firms.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — €10m is the small turnover ceiling in the EU table.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
'] WHERE case_id = 'CASE 3.4.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — €50m is the medium turnover ceiling in the EU table.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'FALSE — Only one financial measure must qualify, not both at once.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'TRUE — Micro staff cap is below ten, much tighter than small''s below fifty.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'FALSE — €50m is the medium turnover cap, not the small cap.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is false.
', 'FALSE — Exceeding the balance sheet cap blocks medium status despite qualifying staff and turnover.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
'] WHERE case_id = 'CASE 3.4.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Two employees is below the ten-person micro limit.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'FALSE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Sme failures can still affect employees, suppliers, and local communities.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Finance programmes rely on standard sme criteria.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Eu definitions combine staff with financial caps for each tier.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

~99% of EU businesses are SMEs by count.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'] WHERE case_id = 'CASE 3.4.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — €52m turnover exceeds the €50m medium ceiling.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'FALSE — €10m is the small cap; medium allows up to €50m.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'FALSE — Forty staff exceeds micro limits and aligns with small staff range instead.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'FALSE — Exceeding micro thresholds moves classification upward if small criteria are met.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'FALSE — EU MSME size classes combine a staff ceiling with a financial alternative (turnover or balance sheet). Staff alone never completes the test.

Sme and large firms face different reporting expectations.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
'] WHERE case_id = 'CASE 3.4.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Local micro ventures contrast with a components manufacturer''s large-scale workforce.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — Both staff and financial caps must be checked.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'FALSE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Export activity does not override sme threshold tests.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — 180 is within medium''s below-250 staff range.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — This matches the eu micro row in the official sme table.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
'] WHERE case_id = 'CASE 3.4.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — There is no minimum staff count for micro beyond the upper cap.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.

The statement is false.
', 'TRUE — EU MSME size classes combine a staff ceiling with a financial alternative (turnover or balance sheet). Staff alone never completes the test.

A components manufacturer illustrates large-scale employment in a rare large firm.

The scenario (a consultancy that has seven staff, €2.3m turnover, and a €1.9m balance sheet) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — 3,000 far exceeds the 250-employee medium cap.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'FALSE — Three hundred staff exceeds medium limits regardless of turnover.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.

The statement is false.
', 'TRUE — €55m exceeds the €50m medium turnover limit.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
'] WHERE case_id = 'CASE 3.4.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Micro firms are part of the ~99% sme majority.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — €43m balance sheet is the medium cap in the EU table.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

Here the figures are about 250 staff and €43m turnover — compare each with the relevant ceiling before classifying.

The statement is true.
', 'FALSE — Turnover above €2m disqualifies micro status even with qualifying balance sheet.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'TRUE — Eight staff fits micro range pending financial tests.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'FALSE — The figure refers to business numbers, not gdp share.

Roughly ninety-nine percent of businesses registered in the EU fall inside the SME size classes — micro, small, or medium.

The statement is false.
'] WHERE case_id = 'CASE 3.4.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Sme-tied support typically excludes large firms.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Exceeding turnover cap blocks medium status despite balance sheet within limits.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'FALSE — €10m is the small turnover cap, not medium.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

Here the figures are about 250 staff and €10m turnover — compare each with the relevant ceiling before classifying.

The statement is false.
', 'TRUE — 30 is below the fifty-employee small cap.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
', 'FALSE — 180 staff exceeds small''s below-fifty limit.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is false.
'] WHERE case_id = 'CASE 3.4.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Combined criteria define each tier in the eu table.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Financial thresholds are mandatory for micro confirmation.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.

The statement is false.
', 'FALSE — Supplier role does not determine size; headcount and financials do.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'TRUE — 125 is below 250 staff limit.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — Staff verification is mandatory alongside turnover.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
'] WHERE case_id = 'CASE 3.4.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Four staff is below ten-employee micro limit.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'FALSE — €2m turnover cap applies to micro, not small.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'FALSE — Turnover breach blocks medium status despite balance sheet within cap.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'FALSE — Few large firms can still account for substantial employment shares.

Roughly ninety-nine percent of businesses registered in the EU fall inside the SME size classes — micro, small, or medium.

The statement is false.
', 'TRUE — Growth can move a firm through sme tiers sequentially.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
'] WHERE case_id = 'CASE 3.4.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Both staff below fifty and turnover below €10m satisfy small criteria.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
', 'TRUE — Thirty-eight is within the small staff limit.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
', 'TRUE — €1.8m meets the micro turnover threshold.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — Six staff meets the micro headcount test though turnover may fail.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — Nine is below the ten-person micro limit.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
'] WHERE case_id = 'CASE 3.4.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Micro firms are included in sme counts and definitions.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'FALSE — Financial caps must also be satisfied for micro status.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'TRUE — 240 is below the 250-person medium limit.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — €48m meets the medium turnover threshold.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'FALSE — EU MSME size classes combine a staff ceiling with a financial alternative (turnover or balance sheet). Staff alone never completes the test.

Large firms face reporting duties rather than exemption.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 3.4.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — €180k meets the micro turnover threshold.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'FALSE — Staff above ten and turnover above €2m exclude micro; small may apply.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'TRUE — Low headcount and turnover can satisfy micro criteria.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — All three metrics can meet medium caps together.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — Staff and both financial figures can meet medium caps.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
'] WHERE case_id = 'CASE 3.4.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Both metrics meet small staff and turnover caps.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
', 'FALSE — 125 staff exceeds small staff limit despite moderate turnover.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is false.
', 'TRUE — 100 staff and €30m turnover can meet medium thresholds pending balance sheet.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — €2m turnover cap applies to micro enterprises.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — Nine is below the ten-person micro limit.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
'] WHERE case_id = 'CASE 3.4.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Each tier has distinct staff and financial thresholds.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'TRUE — €43m balance sheet cap applies to medium enterprises.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — €10m turnover cap applies to small enterprises.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
', 'TRUE — €2m balance sheet cap applies to micro enterprises.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — €50m turnover cap applies to medium enterprises.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
'] WHERE case_id = 'CASE 3.4.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Location does not override eu size thresholds.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.

The statement is false.
', 'FALSE — Medium requires sub-250 staff plus financial tests.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.

The statement is false.
', 'TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Sector does not override eu size threshold tests.

The scenario (a small IT-support venture plan to hire staff and expand turnover) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Only one financial measure must qualify for medium status.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — Only one financial measure must qualify for micro status.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
'] WHERE case_id = 'CASE 3.4.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Progression to medium replaces small when medium limits are satisfied.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — 3,000 staff places a firm outside medium limits.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — Progression to small replaces micro when small limits are satisfied.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Cross-border sales do not replace official size criteria.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — €200m turnover places a firm outside medium limits.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
'] WHERE case_id = 'CASE 3.4.25' AND tier = 'full';
