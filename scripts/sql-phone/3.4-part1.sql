-- Update expanded explanations for 3.4-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Both staff and financial thresholds must be met; high turnover can exclude micro status.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Both staff and turnover thresholds must be satisfied for small status.

The absolute wording "guarantees" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Micro status requires both the staff ceiling and a turnover or balance sheet cap.

The absolute wording "regardless" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Eu micro classification requires fewer than ten employees.

Applied carefully, "Under the EU definition, a micro enterprise may employ fewer than ten people" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Turnover above €2m can disqualify micro status despite a qualifying balance sheet.

The absolute wording "regardless" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 3.4.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The €10m turnover cap is binding alongside the staff threshold.

Applied carefully, "Turnover above €10m can push a firm out of the small category even when staff remain below fifty" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Micro firms must meet the staff cap and either the turnover or balance sheet financial ceiling.

Applied carefully, "Micro status allows either turnover up to €2m or a balance sheet total up to €2m alongside the staff limit" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Turnover above €2m breaks the micro financial cap even with a small workforce.

Applied carefully, "Exceeding the €2m turnover cap can disqualify a firm from micro status even when staff are below ten" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Small classification additionally requires turnover at or below €10m.

Applied carefully, "Small status also requires turnover not exceeding €10m" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The eu small category sets an upper staff limit below fifty employees.

Applied carefully, "A small enterprise may employ fewer than fifty people under EU definitions" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.4.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Only one financial threshold needs to be met alongside staff; both need not pass.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Eu medium enterprises must employ fewer than 250 people.

Applied carefully, "Medium enterprises employ fewer than two hundred and fifty people under EU definitions" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Exceeding the balance sheet cap disqualifies medium status even if turnover qualifies.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', '240 is below 250 and therefore within the medium staff limit.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Small status requires both staff and turnover limits; breaching turnover removes small classification.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.4.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Micro firms are explicitly included in msme/sme groupings.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Smes form the vast majority, not a minority, of eu businesses.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Definitions actively shape finance access and regulatory treatment.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Medium status depends on thresholds, not on geographic scope alone.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Medium classification uses staff plus either turnover or balance sheet financial ceilings.

Applied carefully, "Medium status permits turnover up to €50m or a balance sheet total up to €43m together with the staff cap" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.4.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Ten thousand staff far exceeds the 250-employee medium ceiling.

Applied carefully, "A workforce of about ten thousand places a components manufacturer outside EU medium enterprise limits" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Official eu data cite that about 99% of eu businesses are smes.

Applied carefully, "Approximately ninety-nine percent of businesses in the EU are SMEs" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Size affects accounting rules, implying differences by category.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', '200 is below the 250-person medium limit.

Applied carefully, "Two hundred employees fall within the medium staff threshold" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Exceeding the turnover cap disqualifies micro status even with qualifying staff and balance sheet.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.4.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Eu support and finance often hinge on meeting sme criteria.

Applied carefully, "Official SME classification can determine eligibility for EU support programmes and finance schemes" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Size classification affects which accounting rules apply to a firm.

Applied carefully, "Size definitions matter because accounting rules may differ for smaller and larger firms" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Ten employees is not fewer than ten, so the staff test fails.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', '250 is not fewer than 250; the staff test fails.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Small requires fewer than fifty staff; fifty is not eligible.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.4.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Small and medium tiers cover firms well above ten employees.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Msme refers to micro, small, and medium enterprises collectively.

Applied carefully, "MSME commonly groups micro, small, and medium enterprises under one umbrella term" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Growing beyond thresholds can shift reporting requirements.

Applied carefully, "Crossing size thresholds can change which accounting rules apply to a business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Official staff and financial tests determine micro status.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'The micro limit is strictly below ten employees; ten does not qualify.

Applied carefully, "Exactly ten staff exceeds the micro employee ceiling of fewer than ten" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.4.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Surpassing medium criteria places a firm in the large category.

Applied carefully, "Exceeding medium staff or financial thresholds generally moves a firm out of SME status" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Support programmes use the standard eu micro thresholds for eligibility.

Applied carefully, "Grant schemes often require proof that the applicant meets official micro enterprise criteria" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The small staff cap is strictly below fifty employees.

Applied carefully, "Exactly fifty staff exceeds the small category employee limit" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Eu micro rules pair staff with one of two financial caps.

Applied carefully, "Micro firms must meet the staff cap and either the turnover or balance sheet financial limit" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The medium cap excludes firms with 250 or more employees.

Applied carefully, "Exactly 250 staff exceeds the medium employee ceiling" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.4.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The €43m balance sheet limit is binding for medium classification.

Applied carefully, "A balance sheet above €43m can disqualify medium status even with low turnover" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Qualifying within small limits replaces micro status.

Applied carefully, "Crossing micro limits while staying within small thresholds reclassifies the firm as small" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'With ~99% sme share, sme-focused policy reaches most businesses.

Applied carefully, "Policies supporting SMEs affect the vast majority of EU businesses by number" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Size classification links to differing accounting rules between micro and large firms.

Applied carefully, "Size differences can mean different accounting rule sets for a micro supplier and a components manufacturer" lines up with the textbook idea without adding an extra restriction.

The statement is true.', '€10m is the small turnover ceiling in the EU table.

Applied carefully, "Small enterprises must record turnover not exceeding €10m" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.4.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['€50m is the medium turnover ceiling in the EU table.

Applied carefully, "Medium enterprises may report turnover up to €50m under EU definitions" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Only one financial measure must qualify, not both at once.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Micro staff cap is below ten, much tighter than small''s below fifty.

Applied carefully, "Micro requires fewer than ten staff plus financial caps, stricter than small staff limits" lines up with the textbook idea without adding an extra restriction.

The statement is true.', '€50m is the medium turnover cap, not the small cap.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Exceeding the balance sheet cap blocks medium status despite qualifying staff and turnover.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.4.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Two employees is below the ten-person micro limit.

Applied carefully, "Two people employed falls well within the micro staff ceiling" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Sme failures can still affect employees, suppliers, and local communities.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Finance programmes rely on standard sme criteria.

Applied carefully, "Lenders may verify SME status using official headcount and turnover thresholds" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Eu definitions combine staff with financial caps for each tier.

Applied carefully, "SME tiers require joint satisfaction of staff and relevant financial thresholds" lines up with the textbook idea without adding an extra restriction.

The statement is true.', '~99% of EU businesses are SMEs by count.

Applied carefully, "Most EU businesses by count are classified within SME size bands" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.4.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['€52m turnover exceeds the €50m medium ceiling.

Applied carefully, "Turnover above €50m disqualifies medium status even if balance sheet qualifies" lines up with the textbook idea without adding an extra restriction.

The statement is true.', '€10m is the small cap; medium allows up to €50m.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Forty staff exceeds micro limits and aligns with small staff range instead.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Exceeding micro thresholds moves classification upward if small criteria are met.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Sme and large firms face different reporting expectations.

The absolute wording "all" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 3.4.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Local micro ventures contrast with a components manufacturer''s large-scale workforce.

Applied carefully, "A small IT-support venture illustrate micro-scale operations compared with a components manufacturer''s large workforce" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Both staff and financial caps must be checked.

Applied carefully, "Complete staff and financial data are needed to verify micro or other SME tiers" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Export activity does not override sme threshold tests.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', '180 is within medium''s below-250 staff range.

Applied carefully, "One hundred and eighty employees fits the medium staff band if financial tests also pass" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'This matches the eu micro row in the official sme table.

Applied carefully, "Micro pairs sub-ten staff with €2m turnover or balance sheet limits" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.4.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['There is no minimum staff count for micro beyond the upper cap.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'A components manufacturer illustrates large-scale employment in a rare large firm.

Applied carefully, "Large firms like a components manufacturer can employ thousands despite being few in number" lines up with the textbook idea without adding an extra restriction.

The statement is true.', '3,000 far exceeds the 250-employee medium cap.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Three hundred staff exceeds medium limits regardless of turnover.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', '€55m exceeds the €50m medium turnover limit.

Applied carefully, "Turnover above €50m prevents medium classification when that cap is breached" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.4.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Micro firms are part of the ~99% sme majority.

Applied carefully, "Micro enterprises form a large part of the SME group that dominates EU business counts" lines up with the textbook idea without adding an extra restriction.

The statement is true.', '€43m balance sheet is the medium cap in the EU table.

Applied carefully, "€43m is the medium balance sheet ceiling paired with sub-250 staff" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Turnover above €2m disqualifies micro status even with qualifying balance sheet.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Eight staff fits micro range pending financial tests.

Applied carefully, "Eight staff is compatible with micro but financial figures must still be verified" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The figure refers to business numbers, not gdp share.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.4.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Sme-tied support typically excludes large firms.

Applied carefully, "Leaving SME status can end eligibility for certain EU SME finance programmes" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Exceeding turnover cap blocks medium status despite balance sheet within limits.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', '€10m is the small turnover cap, not medium.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', '30 is below the fifty-employee small cap.

Applied carefully, "Thirty staff is within the small enterprise employee limit" lines up with the textbook idea without adding an extra restriction.

The statement is true.', '180 staff exceeds small''s below-fifty limit.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.4.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Combined criteria define each tier in the eu table.

Applied carefully, "EU SME tiers combine employee ceilings with turnover and/or balance sheet caps" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Financial thresholds are mandatory for micro confirmation.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Supplier role does not determine size; headcount and financials do.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', '125 is below 250 staff limit.

Applied carefully, "One hundred and twenty-five staff satisfies the medium employee threshold" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Staff verification is mandatory alongside turnover.

Applied carefully, "Staff headcount must be verified alongside turnover for medium classification" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.4.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Four staff is below ten-employee micro limit.

Applied carefully, "Four employees fall within the micro staff ceiling" lines up with the textbook idea without adding an extra restriction.

The statement is true.', '€2m turnover cap applies to micro, not small.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Turnover breach blocks medium status despite balance sheet within cap.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Few large firms can still account for substantial employment shares.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Growth can move a firm through sme tiers sequentially.

Applied carefully, "A firm can progress from micro to small to medium as metrics cross successive thresholds" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.4.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Both staff below fifty and turnover below €10m satisfy small criteria.

Applied carefully, "Forty-five staff and €9.5m turnover together meet EU small enterprise thresholds" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Thirty-eight is within the small staff limit.

Applied carefully, "Thirty-eight staff fits the small employee ceiling below fifty" lines up with the textbook idea without adding an extra restriction.

The statement is true.', '€1.8m meets the micro turnover threshold.

Applied carefully, "€1.8m turnover stays within the micro turnover cap of €2m" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Six staff meets the micro headcount test though turnover may fail.

Applied carefully, "Six employees fit the micro staff ceiling even when turnover exceeds €2m" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Nine is below the ten-person micro limit.

Applied carefully, "Nine employees satisfy the micro staff ceiling of fewer than ten people" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.4.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Micro firms are included in sme counts and definitions.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Financial caps must also be satisfied for micro status.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', '240 is below the 250-person medium limit.

Applied carefully, "Two hundred and forty employees fits the medium staff ceiling below two hundred and fifty" lines up with the textbook idea without adding an extra restriction.

The statement is true.', '€48m meets the medium turnover threshold.

Applied carefully, "€48m turnover is within the €50m medium turnover cap" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Large firms face reporting duties rather than exemption.

The absolute wording "all" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 3.4.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['€180k meets the micro turnover threshold.

Applied carefully, "€180k turnover is well below the €2m micro turnover cap" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Staff above ten and turnover above €2m exclude micro; small may apply.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Low headcount and turnover can satisfy micro criteria.

Applied carefully, "Four staff with €600k turnover can qualify as micro when financial caps are met" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'All three metrics can meet medium caps together.

Applied carefully, "Two hundred staff with €49m turnover and a €42m balance sheet can satisfy medium thresholds" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Staff and both financial figures can meet medium caps.

Applied carefully, "One hundred and twenty-five staff with €25m turnover and €30m balance sheet can satisfy medium thresholds" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.4.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Both metrics meet small staff and turnover caps.

Applied carefully, "Thirty staff with €9.9m turnover satisfies EU small enterprise thresholds" lines up with the textbook idea without adding an extra restriction.

The statement is true.', '125 staff exceeds small staff limit despite moderate turnover.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', '100 staff and €30m turnover can meet medium thresholds pending balance sheet.

Applied carefully, "One hundred staff with €30m turnover fits the medium staff and turnover bands" lines up with the textbook idea without adding an extra restriction.

The statement is true.', '€2m turnover cap applies to micro enterprises.

Applied carefully, "€2m is the micro turnover ceiling in the EU SME table" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Nine is below the ten-person micro limit.

Applied carefully, "Nine staff fits the micro employee ceiling pending turnover verification" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.4.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Each tier has distinct staff and financial thresholds.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', '€43m balance sheet cap applies to medium enterprises.

Applied carefully, "€43m is the medium balance sheet ceiling in the EU SME table" lines up with the textbook idea without adding an extra restriction.

The statement is true.', '€10m turnover cap applies to small enterprises.

Applied carefully, "€10m is the small turnover ceiling in the EU SME table" lines up with the textbook idea without adding an extra restriction.

The statement is true.', '€2m balance sheet cap applies to micro enterprises.

Applied carefully, "€2m is the micro balance sheet ceiling in the EU SME table" lines up with the textbook idea without adding an extra restriction.

The statement is true.', '€50m turnover cap applies to medium enterprises.

Applied carefully, "€50m is the medium turnover ceiling in the EU SME table" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.4.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Location does not override eu size thresholds.

The absolute wording "regardless" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Medium requires sub-250 staff plus financial tests.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Sector does not override eu size threshold tests.

Applied carefully, "SME status depends on official headcount and financial thresholds, not on industry sector" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Only one financial measure must qualify for medium status.

Applied carefully, "Meeting either the medium turnover cap or the medium balance sheet cap can satisfy the financial test" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Only one financial measure must qualify for micro status.

Applied carefully, "Micro status can be granted when balance sheet totals alone stay within the micro financial ceiling" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.4.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Progression to medium replaces small when medium limits are satisfied.

Applied carefully, "Expanding headcount and turnover past small-tier limits can push a firm into the medium category" lines up with the textbook idea without adding an extra restriction.

The statement is true.', '3,000 staff places a firm outside medium limits.

Applied carefully, "Three thousand staff far exceeds the two hundred and fifty employee medium ceiling" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Progression to small replaces micro when small limits are satisfied.

Applied carefully, "Outgrowing micro employee or financial caps can move a workshop into the small enterprise band" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Cross-border sales do not replace official size criteria.

Applied carefully, "Export activity does not override EU SME threshold tests for classification" lines up with the textbook idea without adding an extra restriction.

The statement is true.', '€200m turnover places a firm outside medium limits.

Applied carefully, "€200m turnover far exceeds the €50m medium turnover ceiling" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.4.25' AND tier = 'full';
