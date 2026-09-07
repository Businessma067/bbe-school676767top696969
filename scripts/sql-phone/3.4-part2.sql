-- Update expanded explanations for 3.4-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — €2.1m breaks the micro turnover threshold.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — €10.4m breaks the small turnover threshold.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
', 'TRUE — €52m breaks the medium turnover threshold.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'FALSE — Ten employees fail micro but small requires further staff and turnover tests.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is false.
', 'TRUE — €44m breaks the medium balance sheet threshold.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
'] WHERE case_id = 'CASE 3.4.26' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Eight is below the ten-person micro limit.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — Seven is below the ten-person micro limit.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'FALSE — Ten is not fewer than ten; the micro staff test fails.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'FALSE — 250 is not fewer than 250; the medium staff test fails.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'FALSE — Fifty is not fewer than fifty; the small staff test fails.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is false.
'] WHERE case_id = 'CASE 3.4.27' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — 180 is below the 250-person medium limit.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — 100 is below the 250-person medium limit.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'FALSE — €2.1m exceeds the €2m micro turnover threshold.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'FALSE — €10.4m exceeds the €10m small turnover threshold.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is false.
', 'TRUE — 120 is below the 250-person medium limit.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
'] WHERE case_id = 'CASE 3.4.28' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — €52m exceeds the €50m medium turnover threshold.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'FALSE — €44m exceeds the €43m medium balance sheet threshold.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'FALSE — Two is below ten and fits the micro staff ceiling.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'FALSE — Six is below ten and fits the micro staff ceiling.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.

The statement is false.
', 'TRUE — 200 is below the 250-person medium limit.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
'] WHERE case_id = 'CASE 3.4.29' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — 45 is below the fifty-employee small limit.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
', 'FALSE — Thirty is below fifty and fits the small staff ceiling.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is false.
', 'FALSE — 180 exceeds the fifty-employee small limit.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is false.
', 'FALSE — 200 exceeds the fifty-employee small limit.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is false.
', 'FALSE — 3,000 far exceeds the 250-person medium limit.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
'] WHERE case_id = 'CASE 3.4.30' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — €1.8m is within the €2m micro turnover ceiling.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'TRUE — Micro enterprises form part of the sme category.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'FALSE — 10,000 far exceeds the 250-person medium limit.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'FALSE — €9.5m is within the €10m small turnover ceiling.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is false.
', 'FALSE — €49m is within the €50m medium turnover ceiling.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
'] WHERE case_id = 'CASE 3.4.31' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Forty-five staff exceeds the micro ceiling of fewer than ten.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'TRUE — EU MSME size classes combine a staff ceiling with a financial alternative (turnover or balance sheet). Staff alone never completes the test.

Large classification brings reporting obligations.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

High sme share by number shapes eu business policy.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — EU MSME size classes combine a staff ceiling with a financial alternative (turnover or balance sheet). Staff alone never completes the test.

Large employers can be few in number yet significant in jobs.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Sme insolvency has stakeholder effects beyond firm count statistics.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'] WHERE case_id = 'CASE 3.4.32' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Thirty-eight staff exceeds the micro ceiling of fewer than ten.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'TRUE — Small combines staff ceiling with the €10m turnover cap.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
', 'TRUE — Medium combines staff ceiling with turnover or balance sheet caps.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Finance schemes rely on official size criteria.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Financial caps must be verified alongside headcount.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
'] WHERE case_id = 'CASE 3.4.33' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Medium status depends on eu thresholds, not geographic scope.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.

The statement is false.
', 'TRUE — A components manufacturer''s ~10,000 staff exceeds the 250-person medium ceiling.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — Micro combines staff ceiling with one financial cap.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — Six employees is below the ten-person micro limit.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — Financial caps must be verified alongside headcount.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
'] WHERE case_id = 'CASE 3.4.34' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Four employees is below the ten-person micro limit.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'FALSE — Supplier relationships do not determine eu size classification.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.

The statement is false.
', 'TRUE — Two employees is below the ten-person micro limit.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — Thirty employees is below the fifty-person small limit.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
', 'FALSE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Official sme criteria gate access to many support schemes.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 3.4.35' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Nine employees is below the ten-person micro limit.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — Thirty-eight employees is below the fifty-person small limit.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
', 'TRUE — EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
'] WHERE case_id = 'CASE 3.4.36' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — €43m is the medium balance sheet ceiling.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — €2m is the micro balance sheet ceiling.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — €10m is the small turnover ceiling.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
', 'TRUE — €2m is the micro turnover ceiling.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — €50m is the medium turnover ceiling.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
'] WHERE case_id = 'CASE 3.4.37' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — EU MSME size classes combine a staff ceiling with a financial alternative (turnover or balance sheet). Staff alone never completes the test.

Fifty staff fails small but medium tier may still apply.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Breaching either financial cap can block medium classification.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'TRUE — The statistic measures business counts rather than gdp share.

Roughly ninety-nine percent of businesses registered in the EU fall inside the SME size classes — micro, small, or medium.

The statement is true.
', 'FALSE — Either financial cap can disqualify medium status when breached.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'FALSE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Ten staff fails micro but small and medium tiers still exist.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 3.4.38' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Either financial cap can disqualify medium status when breached.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.

The statement is false.
', 'FALSE — Support programmes use standard eu micro criteria.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'FALSE — Financial thresholds are mandatory for micro confirmation.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'FALSE — Only one financial measure must qualify for micro status.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'TRUE — EU MSME size classes combine a staff ceiling with a financial alternative (turnover or balance sheet). Staff alone never completes the test.

Sme labels affect support and reporting, not just description.

Under that classification the assertion describes the situation correctly.

The statement is true.
'] WHERE case_id = 'CASE 3.4.39' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Each tier requires joint staff and financial tests.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Micro firms contribute to the ~99% sme majority by number.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'FALSE — Financial thresholds are mandatory for micro confirmation.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Firms can move from micro to small to medium with growth.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — €10m is the small turnover cap, not the micro cap.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
'] WHERE case_id = 'CASE 3.4.40' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Small uses combined staff and turnover criteria.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
', 'TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Incomplete data prevents reliable sme verification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Sme-tied support excludes firms above medium thresholds.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — Medium uses combined staff and financial criteria.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — EU MSME size classes combine a staff ceiling with a financial alternative (turnover or balance sheet). Staff alone never completes the test.

3,000 employees exceeds all SME staff ceilings.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'] WHERE case_id = 'CASE 3.4.41' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Size classification affects applicable accounting rules.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Micro, small, and medium each have separate threshold rows.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — €43m is the medium balance sheet cap in the EU table.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'FALSE — €10m is the small turnover cap, not the medium cap.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'FALSE — €2m is the micro turnover cap, not the small cap.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
'] WHERE case_id = 'CASE 3.4.42' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — A small IT-support venture illustrate micro-scale operations, not large enterprise status.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is false.
', 'TRUE — €52m exceeds the €50m medium turnover cap.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'FALSE — The statistic refers to business numbers, not employment share.

Roughly ninety-nine percent of businesses registered in the EU fall inside the SME size classes — micro, small, or medium.

The statement is false.
', 'FALSE — A components manufacturer''s ~10,000 staff exceeds medium limits.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'TRUE — €55m exceeds the €50m medium turnover cap.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
'] WHERE case_id = 'CASE 3.4.43' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — 200 is below the 250-person medium limit.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — Micro grants use standard eu micro criteria.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Lenders check official sme thresholds for guarantee schemes.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — 240 is below the 250-person medium limit.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — 180 staff and €45m turnover fit medium ceilings.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
'] WHERE case_id = 'CASE 3.4.44' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — €49m meets the medium turnover threshold.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'FALSE — Micro firms are included in sme counts.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

Roughly ninety-nine percent of businesses registered in the EU fall inside the SME size classes — micro, small, or medium.

The statement is false.
', 'TRUE — €9.5m meets the small turnover threshold.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
', 'TRUE — Headcount alone does not confirm micro status.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'FALSE — EU MSME size classes combine a staff ceiling with a financial alternative (turnover or balance sheet). Staff alone never completes the test.

Ten staff fails micro but further tiers depend on additional tests.

In the case setting — a retailer that has thirty staff and €9.9m turnover — the sentence mislabels the category or overreaches.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 3.4.45' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Headcount alone does not confirm micro status.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'FALSE — EU MSME size classes combine a staff ceiling with a financial alternative (turnover or balance sheet). Staff alone never completes the test.

Turnover above €2m removes micro status but small or medium may apply.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — €1.5m meets the micro turnover threshold.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'FALSE — Small requires turnover at or below €10m as well.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.

The statement is false.
', 'FALSE — Medium requires sub-250 staff plus financial tests.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.

The statement is false.
'] WHERE case_id = 'CASE 3.4.46' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Fifty staff fails the below-fifty small staff test.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.

The statement is false.
', 'FALSE — Financial thresholds are mandatory for micro confirmation.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'TRUE — €1.6m meets the micro balance sheet threshold.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'FALSE — EU MSME size classes combine a staff ceiling with a financial alternative (turnover or balance sheet). Staff alone never completes the test.

Headcount and financial thresholds determine eu size classification.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Ten staff fails the below-ten micro staff test.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.

The statement is false.
'] WHERE case_id = 'CASE 3.4.47' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — €1.7m meets the micro balance sheet threshold.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — Course examples contrast micro local ventures with a components manufacturer scale.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Combined criteria define eu sme tiers in the official table.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — The statistic measures business counts.

Roughly ninety-nine percent of businesses registered in the EU fall inside the SME size classes — micro, small, or medium.

The statement is true.
', 'TRUE — €42m meets the medium balance sheet threshold.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
'] WHERE case_id = 'CASE 3.4.48' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Sme-tied finance programmes typically exclude large firms.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Msme terminology covers micro, small, and medium categories together.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — Exceeding medium thresholds exits sme bands.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'FALSE — Official staff and financial tests determine micro status.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'TRUE — EU MSME size classes combine a staff ceiling with a financial alternative (turnover or balance sheet). Staff alone never completes the test.

Definitions gate eligibility for sme support.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'] WHERE case_id = 'CASE 3.4.49' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Geographic scope does not replace official eu size thresholds.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — The medium balance sheet cap is binding alongside staff limits.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — Small classification requires both staff and turnover tests.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
', 'FALSE — Only one financial measure must qualify alongside staff for medium status.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'FALSE — Small classification requires turnover at or below €10m.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is false.
'] WHERE case_id = 'CASE 3.4.50' AND tier = 'full';
