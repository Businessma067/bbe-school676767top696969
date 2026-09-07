-- Update expanded explanations for 2.3-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Microeconomics studies individual decision units — one household, one firm, one transaction — even when prices change or a public bonus sits in the background.

Household budget choices are central to microeconomics. Businesses matter too, but they are not the only units economics studies.

Map that definition onto the case where evaluate core definitional claims about economics as a discipline. Even if the stem mentions related details (here: Household), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Absolute wording is the trap: economics definitions leave room for counterexamples — another actor, another scope, a non-money cost, or a public function that still exists. One clear counterexample rejects the sentence.

The statement is false.
', 'FALSE — Microeconomics studies individual decision units — one household, one firm, one transaction — even when prices change or a public bonus sits in the background.

Economics studies households and firms. Excluding household decisions in favour of “only corporate profit maximisation” misstates the discipline.

Map that definition onto the case where evaluate core definitional claims about economics as a discipline. Even if the stem mentions related details (here: household), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Words such as only/never/always stretch a limited idea past what the definition allows; restore the ordinary exceptions and the claim collapses.

The statement is false.
', 'FALSE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Aggregate price-level questions are macro. Naming one consumer in a sentence does not drag the price level into microeconomics.

Map that definition onto the case where evaluate core definitional claims about economics as a discipline. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Restore the textbook test and the assertion falls away: it mislabels the category or reverses the comparison the chapter actually teaches.

The statement is false.
', 'FALSE — Economics builds theories to explain observed behaviour and to predict effects of choices and policies. It assumes scarce resources and is not limited to collecting anecdotes.

Sciences explain and predict with theories under uncertainty. Perfect prediction of human behaviour is not a prerequisite for calling economics a science.

Map that definition onto the case where evaluate core definitional claims about economics as a discipline. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Restore the textbook test and the assertion falls away: it mislabels the category or reverses the comparison the chapter actually teaches.

The statement is false.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Micro and macro apply the same core scarcity/choice idea at different scopes — units/markets versus the whole economy.

Map that definition onto the case where evaluate core definitional claims about economics as a discipline. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

A useful check is the opposite error: treat opportunity cost as the money paid, or treat one buyer’s choice as macro, or treat a shift as a movement — those near-misses fail, which confirms this wording.

The statement is true.
'] WHERE case_id = 'CASE 2.3.26' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

National GDP growth for the whole country is a macro aggregate, not a single firm’s private decision.

Map that definition onto the case where spot which scope label fits each example. The claim’s actors and constraints (here: firm) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

If you replaced the key term with its neighbour (accounting outlay, micro/macro swap, movement vs shift), the sentence would stop matching the stem — that contrast locks the idea.

The statement is true.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Ask what unit is being studied: one household, firm, or transaction is micro; nationwide totals and overall price-level or output aggregates are macro. Scope decides the label. Focus points: firm.

Map that definition onto the case where spot which scope label fits each example. The claim’s actors and constraints (here: firm) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The keyed true reading survives exactly because it keeps the chapter’s criterion and the stem’s numbers/actors aligned.

The statement is true.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Economy-wide unemployment across all regions is a macro indicator, not one household’s choice.

Map that definition onto the case where spot which scope label fits each example. The claim’s actors and constraints (here: household) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The keyed true reading survives exactly because it keeps the chapter’s criterion and the stem’s numbers/actors aligned.

The statement is true.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

A student comparing two part-time offers under limited time is a micro-level choice between alternatives.

Map that definition onto the case where spot which scope label fits each example. The claim’s actors and constraints (here: student, micro) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

A useful check is the opposite error: treat opportunity cost as the money paid, or treat one buyer’s choice as macro, or treat a shift as a movement — those near-misses fail, which confirms this wording.

The statement is true.
', 'FALSE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Money appears in both micro and macro. Classification depends on whether one unit or the whole economy is analysed — not on the mere presence of money.

Map that definition onto the case where spot which scope label fits each example. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Absolute wording is the trap: economics definitions leave room for counterexamples — another actor, another scope, a non-money cost, or a public function that still exists. One clear counterexample rejects the sentence.

The statement is false.
'] WHERE case_id = 'CASE 2.3.27' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Micro and macro share vocabulary (price, demand, cost, scarcity) and routinely appear together in one course.

Map that definition onto the case where one pharmacy switches a customer to a cheaper generic drug to save the household five euros monthly. Even if the stem mentions related details (here: Micro, macro), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

The absolute quantifier is doing the damage. Soften it to the chapter’s actual scope and the remaining content no longer supports a false blanket rule.

The statement is false.
', 'FALSE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

One pharmacy’s generic switch for one household is micro. Healthcare being a national sector does not force every drug-price discussion into macro.

Map that definition onto the case where one pharmacy switches a customer to a cheaper generic drug to save the household five euros monthly. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

The because-clause attaches the wrong reason to the label. A real detail (a national programme, a zero wage, shared premises, use of money) does not justify the over-broad conclusion.

The statement is false.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Economy-wide pharmaceutical spending affecting public budgets is an aggregate — macroeconomics.

Map that definition onto the case where one pharmacy switches a customer to a cheaper generic drug to save the household five euros monthly. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

If you replaced the key term with its neighbour (accounting outlay, micro/macro swap, movement vs shift), the sentence would stop matching the stem — that contrast locks the idea.

The statement is true.
', 'TRUE — Microeconomics studies individual decision units — one household, one firm, one transaction — even when prices change or a public bonus sits in the background.

Limited household income guiding substitution toward a cheaper generic is classic micro economising.

Map that definition onto the case where one pharmacy switches a customer to a cheaper generic drug to save the household five euros monthly. The claim’s actors and constraints (here: household) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'FALSE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Micro and macro are related branches of one discipline, not unrelated fields with completely different subject matter.

Map that definition onto the case where one pharmacy switches a customer to a cheaper generic drug to save the household five euros monthly. Even if the stem mentions related details (here: Micro, macro), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Swap in the correct criterion and the sentence no longer describes the case — that is enough to mark it false.

The statement is false.
'] WHERE case_id = 'CASE 2.3.28' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Microeconomics studies individual decision units — one household, one firm, one transaction — even when prices change or a public bonus sits in the background.

Economics studies decisions under limited resources by households and businesses across the economy — the unifying definition.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Ask what unit is being studied: one household, firm, or transaction is micro; nationwide totals and overall price-level or output aggregates are macro. Scope decides the label.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

If you replaced the key term with its neighbour (accounting outlay, micro/macro swap, movement vs shift), the sentence would stop matching the stem — that contrast locks the idea.

The statement is true.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Ask what unit is being studied: one household, firm, or transaction is micro; nationwide totals and overall price-level or output aggregates are macro. Scope decides the label. Focus points: inflation.

Held against the chapter test (here: inflation), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

If you replaced the key term with its neighbour (accounting outlay, micro/macro swap, movement vs shift), the sentence would stop matching the stem — that contrast locks the idea.

The statement is true.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Both branches aim to explain and predict using economic theories at their respective scopes.

Held against the chapter test (here: micro, macro), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

The keyed true reading survives exactly because it keeps the chapter’s criterion and the stem’s numbers/actors aligned.

The statement is true.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

The same scarcity logic underlies micro choices and macro outcomes built from many such choices.

Held against the chapter test (here: scarcity, micro, macro), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

The keyed true reading survives exactly because it keeps the chapter’s criterion and the stem’s numbers/actors aligned.

The statement is true.
'] WHERE case_id = 'CASE 2.3.29' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Economics builds theories to explain observed behaviour and to predict effects of choices and policies. It assumes scarce resources and is not limited to collecting anecdotes.

Building theories to explain why outcomes occur is the explanatory scientific role of economics.

Map that definition onto the case where evaluate the scientific role of economics. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'TRUE — Economics builds theories to explain observed behaviour and to predict effects of choices and policies. It assumes scarce resources and is not limited to collecting anecdotes.

Using theories to predict effects of decisions and policies is the predictive role paired with explanation.

Map that definition onto the case where evaluate the scientific role of economics. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'FALSE — Economics builds theories to explain observed behaviour and to predict effects of choices and policies. It assumes scarce resources and is not limited to collecting anecdotes.

Useful theories guide decisions under uncertainty. Perfect foresight is not required for usefulness.

Map that definition onto the case where evaluate the scientific role of economics. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

The mismatch is in the defining feature, not in a missing buzzword; fix the feature and the claim disappears.

The statement is false.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Micro theories target individual market responses; macro theories target aggregate trends — predictive aims at each scope.

Map that definition onto the case where evaluate the scientific role of economics. The claim’s actors and constraints (here: Micro, macro) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

If you replaced the key term with its neighbour (accounting outlay, micro/macro swap, movement vs shift), the sentence would stop matching the stem — that contrast locks the idea.

The statement is true.
', 'FALSE — Economics builds theories to explain observed behaviour and to predict effects of choices and policies. It assumes scarce resources and is not limited to collecting anecdotes.

Imperfect predictability does not mean economics cannot explain or predict anything. Theories still organise evidence and forecasts scientifically.

Map that definition onto the case where evaluate the scientific role of economics. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Words such as only/never/always stretch a limited idea past what the definition allows; restore the ordinary exceptions and the claim collapses.

The statement is false.
'] WHERE case_id = 'CASE 2.3.30' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Microeconomics studies individual decision units — one household, one firm, one transaction — even when prices change or a public bonus sits in the background.

Tie the claim to limited means versus unlimited ends, to goods versus services, or to the household/entrepreneur role actually performing the action in the stem. Focus points: Household.

Held against the chapter test (here: Household), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

That because/means bridge is the part to defend on an exam: it ties the stem’s facts to the definition.

This item’s published answer key marks the claim as shown; score the letter to that key while keeping the chapter definition clear for revision.

The statement is true.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Ask what unit is being studied: one household, firm, or transaction is micro; nationwide totals and overall price-level or output aggregates are macro. Scope decides the label. Focus points: household, firm.

Held against the chapter test (here: household, firm), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

A useful check is the opposite error: treat opportunity cost as the money paid, or treat one buyer’s choice as macro, or treat a shift as a movement — those near-misses fail, which confirms this wording.

The statement is true.
', 'FALSE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

One shop’s inventory list is a firm-level operations detail — micro, not macro. Macro studies economy-wide aggregates.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Swap in the correct criterion and the sentence no longer describes the case — that is enough to mark it false.

The statement is false.
', 'FALSE — Economics studies how agents allocate scarce resources among competing uses. Both household budgeting and firm decisions sit inside that subject; scope then splits into micro and macro.

Economics assumes scarce (limited) resources and studies allocation and choice — not unlimited resources and “only accounting rules.”.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Words such as only/never/always stretch a limited idea past what the definition allows; restore the ordinary exceptions and the claim collapses.

The statement is false.
', 'FALSE — Economics builds theories to explain observed behaviour and to predict effects of choices and policies. It assumes scarce resources and is not limited to collecting anecdotes.

Economics constructs theories to explain and predict; it is not limited to collecting anecdotes.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

The absolute quantifier is doing the damage. Soften it to the chapter’s actual scope and the remaining content no longer supports a false blanket rule.

The statement is false.
'] WHERE case_id = 'CASE 2.3.31' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Analysing only this driver’s shift choice for one vehicle is a single-unit study — microeconomics.

Map that definition onto the case where a ride-share driver comparing Friday night airport runs with Saturday morning suburban trips for one vehicle. The claim’s actors and constraints (here: shift) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

If you replaced the key term with its neighbour (accounting outlay, micro/macro swap, movement vs shift), the sentence would stop matching the stem — that contrast locks the idea.

The statement is true.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

National ride-share employment totals are aggregates — macro — unlike this driver’s personal shift plan.

Map that definition onto the case where a ride-share driver comparing Friday night airport runs with Saturday morning suburban trips for one vehicle. The claim’s actors and constraints (here: shift) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The keyed true reading survives exactly because it keeps the chapter’s criterion and the stem’s numbers/actors aligned.

The statement is true.
', 'TRUE — Economics studies how agents allocate scarce resources among competing uses. Both household budgeting and firm decisions sit inside that subject; scope then splits into micro and macro.

Limited time and fuel force the driver’s allocation — inside economics’ scarce-resource focus.

Map that definition onto the case where a ride-share driver comparing Friday night airport runs with Saturday morning suburban trips for one vehicle. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

City-wide average trip earnings published by authorities are an aggregate — macroeconomics.

Map that definition onto the case where a ride-share driver comparing Friday night airport runs with Saturday morning suburban trips for one vehicle. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The keyed true reading survives exactly because it keeps the chapter’s criterion and the stem’s numbers/actors aligned.

The statement is true.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Ask what unit is being studied: one household, firm, or transaction is micro; nationwide totals and overall price-level or output aggregates are macro. Scope decides the label.

Map that definition onto the case where a ride-share driver comparing Friday night airport runs with Saturday morning suburban trips for one vehicle. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

If you replaced the key term with its neighbour (accounting outlay, micro/macro swap, movement vs shift), the sentence would stop matching the stem — that contrast locks the idea.

The statement is true.
'] WHERE case_id = 'CASE 2.3.32' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Ask what unit is being studied: one household, firm, or transaction is micro; nationwide totals and overall price-level or output aggregates are macro. Scope decides the label.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

If you replaced the key term with its neighbour (accounting outlay, micro/macro swap, movement vs shift), the sentence would stop matching the stem — that contrast locks the idea.

The statement is true.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Ask what unit is being studied: one household, firm, or transaction is micro; nationwide totals and overall price-level or output aggregates are macro. Scope decides the label. Focus points: micro, macro.

Held against the chapter test (here: micro, macro), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

A useful check is the opposite error: treat opportunity cost as the money paid, or treat one buyer’s choice as macro, or treat a shift as a movement — those near-misses fail, which confirms this wording.

The statement is true.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Ask what unit is being studied: one household, firm, or transaction is micro; nationwide totals and overall price-level or output aggregates are macro. Scope decides the label. Focus points: inflation.

Held against the chapter test (here: inflation), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

If you replaced the key term with its neighbour (accounting outlay, micro/macro swap, movement vs shift), the sentence would stop matching the stem — that contrast locks the idea.

The statement is true.
', 'FALSE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

One firm’s staffing can be micro even though labour markets also have national (macro) measures. “Staffing” alone does not force the macro label.

Held against the chapter test (here: macro), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

The because-clause attaches the wrong reason to the label. A real detail (a national programme, a zero wage, shared premises, use of money) does not justify the over-broad conclusion.

The statement is false.
', 'FALSE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Individual shops contribute to GDP, but a national GDP revision is an aggregate statistic — macro — not micro because of that contribution.

Held against the chapter test (here: micro), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Reject the reason link first — once the because-clause fails, the heading category fails with it.

The statement is false.
'] WHERE case_id = 'CASE 2.3.33' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Ask what unit is being studied: one household, firm, or transaction is micro; nationwide totals and overall price-level or output aggregates are macro. Scope decides the label.

Map that definition onto the case where a tailor adjusting suit prices after linen costs rise, examining only her Vienna atelier. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The keyed true reading survives exactly because it keeps the chapter’s criterion and the stem’s numbers/actors aligned.

The statement is true.
', 'FALSE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Clothing prices can be micro (one atelier) or macro (national apparel price index). They are not “always micro” even when aggregated nationally — aggregation moves toward macro.

Map that definition onto the case where a tailor adjusting suit prices after linen costs rise, examining only her Vienna atelier. Even if the stem mentions related details (here: micro), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Absolute wording is the trap: economics definitions leave room for counterexamples — another actor, another scope, a non-money cost, or a public function that still exists. One clear counterexample rejects the sentence.

The statement is false.
', 'FALSE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

A single tailor’s price rise is micro. The existence of inflation as a macro topic does not make every price increase macro.

Map that definition onto the case where a tailor adjusting suit prices after linen costs rise, examining only her Vienna atelier. Even if the stem mentions related details (here: inflation), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Cause and category come apart: the stem may mention something true without that fact proving the absolute claim built on top of it.

The statement is false.
', 'FALSE — Microeconomics studies individual decision units — one household, one firm, one transaction — even when prices change or a public bonus sits in the background.

Walk the definition onto the stem’s actors and constraints, then spot where the sentence’s category or absolute reason breaks that check.

Map that definition onto the case where a tailor adjusting suit prices after linen costs rise, examining only her Vienna atelier. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

The absolute quantifier is doing the damage. Soften it to the chapter’s actual scope and the remaining content no longer supports a false blanket rule.

The statement is false.
', 'FALSE — Economics studies how agents allocate scarce resources among competing uses. Both household budgeting and firm decisions sit inside that subject; scope then splits into micro and macro.

Craft tailoring still involves prices, costs, and customer choices — economics applies alongside artisan skill.

Map that definition onto the case where a tailor adjusting suit prices after linen costs rise, examining only her Vienna atelier. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Absolute wording is the trap: economics definitions leave room for counterexamples — another actor, another scope, a non-money cost, or a public function that still exists. One clear counterexample rejects the sentence.

The statement is false.
'] WHERE case_id = 'CASE 2.3.34' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Ask what unit is being studied: one household, firm, or transaction is micro; nationwide totals and overall price-level or output aggregates are macro. Scope decides the label. Focus points: Inflation.

Held against the chapter test (here: Inflation), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

If you replaced the key term with its neighbour (accounting outlay, micro/macro swap, movement vs shift), the sentence would stop matching the stem — that contrast locks the idea.

The statement is true.
', 'TRUE — Economics builds theories to explain observed behaviour and to predict effects of choices and policies. It assumes scarce resources and is not limited to collecting anecdotes.

Economics builds theories to explain rate rises and predicted inflation effects — scientific aims applied to monetary policy.

Held against the chapter test (here: inflation), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

One saver relocating deposits after the rate rise is a single-unit portfolio choice — microeconomics.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

If you replaced the key term with its neighbour (accounting outlay, micro/macro swap, movement vs shift), the sentence would stop matching the stem — that contrast locks the idea.

The statement is true.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Ask what unit is being studied: one household, firm, or transaction is micro; nationwide totals and overall price-level or output aggregates are macro. Scope decides the label. Focus points: inflation.

Held against the chapter test (here: inflation), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

If you replaced the key term with its neighbour (accounting outlay, micro/macro swap, movement vs shift), the sentence would stop matching the stem — that contrast locks the idea.

The statement is true.
', 'FALSE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Macro policy discussion does not abolish micro analysis of households and firms responding to the policy.

Held against the chapter test (here: Macro, micro), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Swap in the correct criterion and the sentence no longer describes the case — that is enough to mark it false.

The statement is false.
'] WHERE case_id = 'CASE 2.3.35' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Macroeconomics analyses whole-economy totals and overall performance. Nationwide statistics belong here; one household’s purchase or one café’s menu change does not.

Unit-level study covers one buyer or seller; economy-wide study covers national totals — the classroom classification rule.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Ask what unit is being studied: one household, firm, or transaction is micro; nationwide totals and overall price-level or output aggregates are macro. Scope decides the label. Focus points: inflation.

Held against the chapter test (here: inflation), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

A useful check is the opposite error: treat opportunity cost as the money paid, or treat one buyer’s choice as macro, or treat a shift as a movement — those near-misses fail, which confirms this wording.

The statement is true.
', 'TRUE — Macroeconomics analyses whole-economy totals and overall performance. Nationwide statistics belong here; one household’s purchase or one café’s menu change does not.

The discipline develops models at unit level and aggregate level to analyse scarcity at both scopes.

Held against the chapter test (here: scarcity), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'FALSE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Government activity can be micro (one contract, one local permit) or macro (national fiscal stance). It is not automatically macro.

Held against the chapter test (here: government), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Absolute wording is the trap: economics definitions leave room for counterexamples — another actor, another scope, a non-money cost, or a public function that still exists. One clear counterexample rejects the sentence.

The statement is false.
', 'FALSE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

One canteen meal choice is micro. Food’s link to national health spending does not reclassify every meal as macro.

Held against the chapter test (here: macro), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Reject the reason link first — once the because-clause fails, the heading category fails with it.

The statement is false.
'] WHERE case_id = 'CASE 2.3.36' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Economics studies how agents allocate scarce resources among competing uses. Both household budgeting and firm decisions sit inside that subject; scope then splits into micro and macro.

Comparing data plans under limited monthly spending is household allocation — inside economics.

Map that definition onto the case where a family comparing two mobile data plans for their tablets, ignoring national telecom investment totals. The claim’s actors and constraints (here: services) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Economy-wide telecom investment is a macro topic; one family’s tablet plan alone is not that aggregate question.

Map that definition onto the case where a family comparing two mobile data plans for their tablets, ignoring national telecom investment totals. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The keyed true reading survives exactly because it keeps the chapter’s criterion and the stem’s numbers/actors aligned.

The statement is true.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Ask what unit is being studied: one household, firm, or transaction is micro; nationwide totals and overall price-level or output aggregates are macro. Scope decides the label.

Map that definition onto the case where a family comparing two mobile data plans for their tablets, ignoring national telecom investment totals. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The keyed true reading survives exactly because it keeps the chapter’s criterion and the stem’s numbers/actors aligned.

The statement is true.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Ask what unit is being studied: one household, firm, or transaction is micro; nationwide totals and overall price-level or output aggregates are macro. Scope decides the label.

Map that definition onto the case where a family comparing two mobile data plans for their tablets, ignoring national telecom investment totals. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

A useful check is the opposite error: treat opportunity cost as the money paid, or treat one buyer’s choice as macro, or treat a shift as a movement — those near-misses fail, which confirms this wording.

The statement is true.
', 'FALSE — Classify the claim by analytical scope — individual units (micro) versus economy-wide aggregates (macro) — and by whether economics is explaining or predicting under scarcity.

Wi-Fi may change the value of a mobile plan; it does not remove price, data caps, and budget trade-offs from economic analysis.

Map that definition onto the case where a family comparing two mobile data plans for their tablets, ignoring national telecom investment totals. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

The absolute quantifier is doing the damage. Soften it to the chapter’s actual scope and the remaining content no longer supports a false blanket rule.

The statement is false.
'] WHERE case_id = 'CASE 2.3.37' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Ask what unit is being studied: one household, firm, or transaction is micro; nationwide totals and overall price-level or output aggregates are macro. Scope decides the label.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

If you replaced the key term with its neighbour (accounting outlay, micro/macro swap, movement vs shift), the sentence would stop matching the stem — that contrast locks the idea.

The statement is true.
', 'TRUE — Economics builds theories to explain observed behaviour and to predict effects of choices and policies. It assumes scarce resources and is not limited to collecting anecdotes.

Walk the definition onto the stem’s actors and constraints, then confirm the sentence’s category and reason both survive that check.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'FALSE — Classify the claim by analytical scope — individual units (micro) versus economy-wide aggregates (macro) — and by whether economics is explaining or predicting under scarcity.

Science uses provisional, tested theories under uncertainty. Perfect forecasts are not the entry ticket.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

The absolute quantifier is doing the damage. Soften it to the chapter’s actual scope and the remaining content no longer supports a false blanket rule.

The statement is false.
', 'FALSE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Both micro and macro are scientific branches with theories and evidence — not “only macro is scientific.”.

Held against the chapter test (here: micro), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

The absolute quantifier is doing the damage. Soften it to the chapter’s actual scope and the remaining content no longer supports a false blanket rule.

The statement is false.
', 'FALSE — Economics builds theories to explain observed behaviour and to predict effects of choices and policies. It assumes scarce resources and is not limited to collecting anecdotes.

Walk the definition onto the stem’s actors and constraints, then spot where the sentence’s category or absolute reason breaks that check.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Words such as only/never/always stretch a limited idea past what the definition allows; restore the ordinary exceptions and the claim collapses.

The statement is false.
'] WHERE case_id = 'CASE 2.3.38' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Ask what unit is being studied: one household, firm, or transaction is micro; nationwide totals and overall price-level or output aggregates are macro. Scope decides the label. Focus points: Household, micro.

Held against the chapter test (here: Household, micro), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

The keyed true reading survives exactly because it keeps the chapter’s criterion and the stem’s numbers/actors aligned.

The statement is true.
', 'FALSE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Crossing a border does not automatically make analysis macro. Scope still depends on one firm/shipment versus national totals.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

The mismatch is in the defining feature, not in a missing buzzword; fix the feature and the claim disappears.

The statement is false.
', 'FALSE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Trade appears in both micro (one exporter) and macro (trade balance). Containers holding individual products do not force “micro only.”.

Held against the chapter test (here: micro), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Words such as only/never/always stretch a limited idea past what the definition allows; restore the ordinary exceptions and the claim collapses.

The statement is false.
', 'FALSE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

A price change, a national bonus in the background, or the word “economy” does not by itself make an analysis macro. If the object of study is still one actor’s choice, the correct scope remains micro — and the reverse for aggregates. Focus points: shipping, macro, goods.

Held against the chapter test (here: shipping, macro, goods), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

The because-clause attaches the wrong reason to the label. A real detail (a national programme, a zero wage, shared premises, use of money) does not justify the over-broad conclusion.

The statement is false.
', 'FALSE — Economics studies how agents allocate scarce resources among competing uses. Both household budgeting and firm decisions sit inside that subject; scope then splits into micro and macro.

Salary, registration status, or use of money does not abolish scarcity, redefine goods as services, or bar households from exchange. Absolute exclusions are the usual failure mode.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

The mismatch is in the defining feature, not in a missing buzzword; fix the feature and the claim disappears.

The statement is false.
'] WHERE case_id = 'CASE 2.3.39' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Microeconomics studies individual decision units — one household, one firm, one transaction — even when prices change or a public bonus sits in the background.

Walk the definition onto the stem’s actors and constraints, then confirm the sentence’s category and reason both survive that check.

Map that definition onto the case where a studio analyst reviewing only one indie studio''s hiring plan while many studios receive venture funding. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'TRUE — Economics studies how agents allocate scarce resources among competing uses. Both household budgeting and firm decisions sit inside that subject; scope then splits into micro and macro.

Walk the definition onto the stem’s actors and constraints, then confirm the sentence’s category and reason both survive that check.

Map that definition onto the case where a studio analyst reviewing only one indie studio''s hiring plan while many studios receive venture funding. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Ask what unit is being studied: one household, firm, or transaction is micro; nationwide totals and overall price-level or output aggregates are macro. Scope decides the label.

Map that definition onto the case where a studio analyst reviewing only one indie studio''s hiring plan while many studios receive venture funding. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

If you replaced the key term with its neighbour (accounting outlay, micro/macro swap, movement vs shift), the sentence would stop matching the stem — that contrast locks the idea.

The statement is true.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Ask what unit is being studied: one household, firm, or transaction is micro; nationwide totals and overall price-level or output aggregates are macro. Scope decides the label.

Map that definition onto the case where a studio analyst reviewing only one indie studio''s hiring plan while many studios receive venture funding. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

If you replaced the key term with its neighbour (accounting outlay, micro/macro swap, movement vs shift), the sentence would stop matching the stem — that contrast locks the idea.

The statement is true.
', 'TRUE — Macroeconomics analyses whole-economy totals and overall performance. Nationwide statistics belong here; one household’s purchase or one café’s menu change does not.

Walk the definition onto the stem’s actors and constraints, then confirm the sentence’s category and reason both survive that check.

Map that definition onto the case where a studio analyst reviewing only one indie studio''s hiring plan while many studios receive venture funding. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Keep the reason clause: it names why the classification holds (forgone alternative, scope of analysis, price signal, or institutional rule) rather than restating the conclusion alone.

This item’s published answer key marks the claim as shown; score the letter to that key while keeping the chapter definition clear for revision.

The statement is true.
'] WHERE case_id = 'CASE 2.3.40' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Ask what unit is being studied: one household, firm, or transaction is micro; nationwide totals and overall price-level or output aggregates are macro. Scope decides the label. Focus points: household.

Map that definition onto the case where a chemist recommending a cheaper own-brand lotion to save a customer eight euros monthly. The claim’s actors and constraints (here: household) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The keyed true reading survives exactly because it keeps the chapter’s criterion and the stem’s numbers/actors aligned.

This item’s published answer key marks the claim as shown; score the letter to that key while keeping the chapter definition clear for revision.

The statement is true.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Ask what unit is being studied: one household, firm, or transaction is micro; nationwide totals and overall price-level or output aggregates are macro. Scope decides the label.

Map that definition onto the case where a chemist recommending a cheaper own-brand lotion to save a customer eight euros monthly. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

If you replaced the key term with its neighbour (accounting outlay, micro/macro swap, movement vs shift), the sentence would stop matching the stem — that contrast locks the idea.

The statement is true.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Explaining a household brand switch to economise under a tight budget is a micro explanatory aim.

Map that definition onto the case where a chemist recommending a cheaper own-brand lotion to save a customer eight euros monthly. The claim’s actors and constraints (here: household) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

If you replaced the key term with its neighbour (accounting outlay, micro/macro swap, movement vs shift), the sentence would stop matching the stem — that contrast locks the idea.

The statement is true.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Ask what unit is being studied: one household, firm, or transaction is micro; nationwide totals and overall price-level or output aggregates are macro. Scope decides the label.

Map that definition onto the case where a chemist recommending a cheaper own-brand lotion to save a customer eight euros monthly. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

A useful check is the opposite error: treat opportunity cost as the money paid, or treat one buyer’s choice as macro, or treat a shift as a movement — those near-misses fail, which confirms this wording.

The statement is true.
', 'FALSE — Economics studies how agents allocate scarce resources among competing uses. Both household budgeting and firm decisions sit inside that subject; scope then splits into micro and macro.

Walk the definition onto the stem’s actors and constraints, then spot where the sentence’s category or absolute reason breaks that check.

Map that definition onto the case where a chemist recommending a cheaper own-brand lotion to save a customer eight euros monthly. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Absolute wording is the trap: economics definitions leave room for counterexamples — another actor, another scope, a non-money cost, or a public function that still exists. One clear counterexample rejects the sentence.

The statement is false.
'] WHERE case_id = 'CASE 2.3.41' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Ask what unit is being studied: one household, firm, or transaction is micro; nationwide totals and overall price-level or output aggregates are macro. Scope decides the label.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

If you replaced the key term with its neighbour (accounting outlay, micro/macro swap, movement vs shift), the sentence would stop matching the stem — that contrast locks the idea.

The statement is true.
', 'TRUE — Classify the claim by analytical scope — individual units (micro) versus economy-wide aggregates (macro) — and by whether economics is explaining or predicting under scarcity.

Finite land and funds among projects make the council’s choice an economic allocation problem.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Ask what unit is being studied: one household, firm, or transaction is micro; nationwide totals and overall price-level or output aggregates are macro. Scope decides the label.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

The keyed true reading survives exactly because it keeps the chapter’s criterion and the stem’s numbers/actors aligned.

The statement is true.
', 'FALSE — Macroeconomics analyses whole-economy totals and overall performance. Nationwide statistics belong here; one household’s purchase or one café’s menu change does not.

Economic theory applies at unit level and aggregate level — not only to nationwide aggregates.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Absolute wording is the trap: economics definitions leave room for counterexamples — another actor, another scope, a non-money cost, or a public function that still exists. One clear counterexample rejects the sentence.

The statement is false.
', 'FALSE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Housing can be micro (one permit, one searcher) or macro (national starts, rates). Interest-rate changes are one macro channel, not the only time housing is macro — and micro housing analysis exists regardless.

Held against the chapter test (here: macro), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Words such as only/never/always stretch a limited idea past what the definition allows; restore the ordinary exceptions and the claim collapses.

The statement is false.
'] WHERE case_id = 'CASE 2.3.42' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Ask what unit is being studied: one household, firm, or transaction is micro; nationwide totals and overall price-level or output aggregates are macro. Scope decides the label.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

If you replaced the key term with its neighbour (accounting outlay, micro/macro swap, movement vs shift), the sentence would stop matching the stem — that contrast locks the idea.

The statement is true.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

A worker choosing between two hourly offers under limited time is a micro labour allocation.

Held against the chapter test (here: micro), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

The keyed true reading survives exactly because it keeps the chapter’s criterion and the stem’s numbers/actors aligned.

The statement is true.
', 'TRUE — Macroeconomics analyses whole-economy totals and overall performance. Nationwide statistics belong here; one household’s purchase or one café’s menu change does not.

Walk the definition onto the stem’s actors and constraints, then confirm the sentence’s category and reason both survive that check.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

This item’s published answer key marks the claim as shown; score the letter to that key while keeping the chapter definition clear for revision.

The statement is true.
', 'TRUE — Microeconomics studies individual decision units — one household, one firm, one transaction — even when prices change or a public bonus sits in the background.

Wage examples are micro or macro depending on whether one transaction or the whole labour market is analysed.

Held against the chapter test (here: wage), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Ask what unit is being studied: one household, firm, or transaction is micro; nationwide totals and overall price-level or output aggregates are macro. Scope decides the label.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

If you replaced the key term with its neighbour (accounting outlay, micro/macro swap, movement vs shift), the sentence would stop matching the stem — that contrast locks the idea.

The statement is true.
'] WHERE case_id = 'CASE 2.3.43' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Economics builds theories to explain observed behaviour and to predict effects of choices and policies. It assumes scarce resources and is not limited to collecting anecdotes.

Explaining and predicting with constructed theories is the scientific mandate of economics — even when behaviour is imperfectly predictable.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'FALSE — Economics builds theories to explain observed behaviour and to predict effects of choices and policies. It assumes scarce resources and is not limited to collecting anecdotes.

Unemployment is a core economics (especially macro) topic; it is not reserved for sociology alone.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Swap in the correct criterion and the sentence no longer describes the case — that is enough to mark it false.

The statement is false.
', 'FALSE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Both micro and macro study scarcity. Macro does not assume unlimited growth while micro alone owns scarcity.

Held against the chapter test (here: Macro, micro, scarcity), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

The mismatch is in the defining feature, not in a missing buzzword; fix the feature and the claim disappears.

The statement is false.
', 'FALSE — Classify the claim by analytical scope — individual units (micro) versus economy-wide aggregates (macro) — and by whether economics is explaining or predicting under scarcity.

Walk the definition onto the stem’s actors and constraints, then spot where the sentence’s category or absolute reason breaks that check.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

The mismatch is in the defining feature, not in a missing buzzword; fix the feature and the claim disappears.

The statement is false.
', 'FALSE — Classify the claim by analytical scope — individual units (micro) versus economy-wide aggregates (macro) — and by whether economics is explaining or predicting under scarcity.

Competitive responses are modelled in micro theory (reaction, pricing, entry) — not dismissed as pure randomness.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Restore the textbook test and the assertion falls away: it mislabels the category or reverses the comparison the chapter actually teaches.

The statement is false.
'] WHERE case_id = 'CASE 2.3.44' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Trading off paid hours today against unpaid portfolio work for future clients is a micro time-allocation explanation.

Map that definition onto the case where a freelance translator dividing weekly hours between paid client work and unpaid portfolio updating. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

If you replaced the key term with its neighbour (accounting outlay, micro/macro swap, movement vs shift), the sentence would stop matching the stem — that contrast locks the idea.

The statement is true.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Ask what unit is being studied: one household, firm, or transaction is micro; nationwide totals and overall price-level or output aggregates are macro. Scope decides the label.

Map that definition onto the case where a freelance translator dividing weekly hours between paid client work and unpaid portfolio updating. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The keyed true reading survives exactly because it keeps the chapter’s criterion and the stem’s numbers/actors aligned.

The statement is true.
', 'FALSE — Classify the claim by analytical scope — individual units (micro) versus economy-wide aggregates (macro) — and by whether economics is explaining or predicting under scarcity.

Service and freelance decisions count as business decision-making, not only factory production.

Map that definition onto the case where a freelance translator dividing weekly hours between paid client work and unpaid portfolio updating. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

The absolute quantifier is doing the damage. Soften it to the chapter’s actual scope and the remaining content no longer supports a false blanket rule.

The statement is false.
', 'FALSE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Small freelancer hours still relate to aggregates when many freelancers are summed; smallness does not ban the link — and micro analysis stands alone anyway.

Map that definition onto the case where a freelance translator dividing weekly hours between paid client work and unpaid portfolio updating. Even if the stem mentions related details (here: macro), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Absolute wording is the trap: economics definitions leave room for counterexamples — another actor, another scope, a non-money cost, or a public function that still exists. One clear counterexample rejects the sentence.

The statement is false.
', 'FALSE — Microeconomics studies individual decision units — one household, one firm, one transaction — even when prices change or a public bonus sits in the background.

Walk the definition onto the stem’s actors and constraints, then spot where the sentence’s category or absolute reason breaks that check.

Map that definition onto the case where a freelance translator dividing weekly hours between paid client work and unpaid portfolio updating. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Words such as only/never/always stretch a limited idea past what the definition allows; restore the ordinary exceptions and the claim collapses.

The statement is false.
'] WHERE case_id = 'CASE 2.3.45' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Ask what unit is being studied: one household, firm, or transaction is micro; nationwide totals and overall price-level or output aggregates are macro. Scope decides the label.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

The keyed true reading survives exactly because it keeps the chapter’s criterion and the stem’s numbers/actors aligned.

The statement is true.
', 'TRUE — Microeconomics studies individual decision units — one household, one firm, one transaction — even when prices change or a public bonus sits in the background.

Walk the definition onto the stem’s actors and constraints, then confirm the sentence’s category and reason both survive that check.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — Microeconomics studies individual decision units — one household, one firm, one transaction — even when prices change or a public bonus sits in the background.

Tie the claim to limited means versus unlimited ends, to goods versus services, or to the household/entrepreneur role actually performing the action in the stem.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Ask what unit is being studied: one household, firm, or transaction is micro; nationwide totals and overall price-level or output aggregates are macro. Scope decides the label. Focus points: micro, macro.

Held against the chapter test (here: micro, macro), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

If you replaced the key term with its neighbour (accounting outlay, micro/macro swap, movement vs shift), the sentence would stop matching the stem — that contrast locks the idea.

The statement is true.
', 'TRUE — Microeconomics studies individual decision units — one household, one firm, one transaction — even when prices change or a public bonus sits in the background.

Walk the definition onto the stem’s actors and constraints, then confirm the sentence’s category and reason both survive that check.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
'] WHERE case_id = 'CASE 2.3.46' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Microeconomics studies individual decision units — one household, one firm, one transaction — even when prices change or a public bonus sits in the background.

Walk the definition onto the stem’s actors and constraints, then confirm the sentence’s category and reason both survive that check.

Map that definition onto the case where commentators discussing whether euro-area inflation at 2.3 percent requires tighter policy across the whole currency bloc. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'FALSE — Macroeconomics analyses whole-economy totals and overall performance. Nationwide statistics belong here; one household’s purchase or one café’s menu change does not.

Economics uses observational data, models, and natural experiments — not laboratory experiments on national aggregates only.

Map that definition onto the case where commentators discussing whether euro-area inflation at 2.3 percent requires tighter policy across the whole currency bloc. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Absolute wording is the trap: economics definitions leave room for counterexamples — another actor, another scope, a non-money cost, or a public function that still exists. One clear counterexample rejects the sentence.

The statement is false.
', 'FALSE — Economics builds theories to explain observed behaviour and to predict effects of choices and policies. It assumes scarce resources and is not limited to collecting anecdotes.

Walk the definition onto the stem’s actors and constraints, then spot where the sentence’s category or absolute reason breaks that check.

Map that definition onto the case where commentators discussing whether euro-area inflation at 2.3 percent requires tighter policy across the whole currency bloc. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Words such as only/never/always stretch a limited idea past what the definition allows; restore the ordinary exceptions and the claim collapses.

The statement is false.
', 'FALSE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

One grocery item’s price in one shop is micro. Saying “inflation” casually does not make that single price macro inflation analysis.

Map that definition onto the case where commentators discussing whether euro-area inflation at 2.3 percent requires tighter policy across the whole currency bloc. Even if the stem mentions related details (here: Inflation), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

The because-clause attaches the wrong reason to the label. A real detail (a national programme, a zero wage, shared premises, use of money) does not justify the over-broad conclusion.

The statement is false.
', 'FALSE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

National inflation measurement does not abolish micro analysis of household and firm responses.

Map that definition onto the case where commentators discussing whether euro-area inflation at 2.3 percent requires tighter policy across the whole currency bloc. Even if the stem mentions related details (here: Micro, inflation), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

The mismatch is in the defining feature, not in a missing buzzword; fix the feature and the claim disappears.

The statement is false.
'] WHERE case_id = 'CASE 2.3.47' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Explaining and predicting the student’s shift choice is a micro aim about individual behaviour.

Held against the chapter test (here: student, shift), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

If you replaced the key term with its neighbour (accounting outlay, micro/macro swap, movement vs shift), the sentence would stop matching the stem — that contrast locks the idea.

The statement is true.
', 'TRUE — Economics studies how agents allocate scarce resources among competing uses. Both household budgeting and firm decisions sit inside that subject; scope then splits into micro and macro.

Families (and students) splitting limited hours and pay among competing ends is core economics.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — Economics builds theories to explain observed behaviour and to predict effects of choices and policies. It assumes scarce resources and is not limited to collecting anecdotes.

Walk the definition onto the stem’s actors and constraints, then confirm the sentence’s category and reason both survive that check. Focus points: government, subsidy, student.

Held against the chapter test (here: government, subsidy, student), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

If many students’ hour changes shifted the national unemployment rate, that aggregate effect would be macroeconomics.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

If you replaced the key term with its neighbour (accounting outlay, micro/macro swap, movement vs shift), the sentence would stop matching the stem — that contrast locks the idea.

The statement is true.
', 'FALSE — Economics studies how agents allocate scarce resources among competing uses. Both household budgeting and firm decisions sit inside that subject; scope then splits into micro and macro.

Students are economic actors. Not being a company does not place the situation outside economics.

Held against the chapter test (here: student), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Reject the reason link first — once the because-clause fails, the heading category fails with it.

The statement is false.
'] WHERE case_id = 'CASE 2.3.48' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

National car-sales totals after an incentive scheme are macroeconomic (aggregate) rather than firm-level analysis.

Held against the chapter test (here: firm), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

The keyed true reading survives exactly because it keeps the chapter’s criterion and the stem’s numbers/actors aligned.

The statement is true.
', 'TRUE — Macroeconomics analyses whole-economy totals and overall performance. Nationwide statistics belong here; one household’s purchase or one café’s menu change does not.

Walk the definition onto the stem’s actors and constraints, then confirm the sentence’s category and reason both survive that check.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

This item’s published answer key marks the claim as shown; score the letter to that key while keeping the chapter definition clear for revision.

The statement is true.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

One household’s car purchase remains micro even when a national purchase bonus exists — policy backdrop ≠ automatic macro reclassification of the buyer.

Held against the chapter test (here: household), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

If you replaced the key term with its neighbour (accounting outlay, micro/macro swap, movement vs shift), the sentence would stop matching the stem — that contrast locks the idea.

The statement is true.
', 'FALSE — Economics builds theories to explain observed behaviour and to predict effects of choices and policies. It assumes scarce resources and is not limited to collecting anecdotes.

Human unpredictability complicates forecasting; it does not remove all scientific content from economics.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

The absolute quantifier is doing the damage. Soften it to the chapter’s actual scope and the remaining content no longer supports a false blanket rule.

The statement is false.
', 'FALSE — Microeconomics studies individual decision units — one household, one firm, one transaction — even when prices change or a public bonus sits in the background.

Households remain micro subjects when governments offer subsidies; subsidies change incentives, they do not exclude households.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Restore the textbook test and the assertion falls away: it mislabels the category or reverses the comparison the chapter actually teaches.

The statement is false.
'] WHERE case_id = 'CASE 2.3.49' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Ask what unit is being studied: one household, firm, or transaction is micro; nationwide totals and overall price-level or output aggregates are macro. Scope decides the label. Focus points: firm.

Map that definition onto the case where analysts studying only one Styrian winery''s quarterly bottle output while ignoring national wine export totals. The claim’s actors and constraints (here: firm) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The keyed true reading survives exactly because it keeps the chapter’s criterion and the stem’s numbers/actors aligned.

The statement is true.
', 'TRUE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

Ask what unit is being studied: one household, firm, or transaction is micro; nationwide totals and overall price-level or output aggregates are macro. Scope decides the label.

Map that definition onto the case where analysts studying only one Styrian winery''s quarterly bottle output while ignoring national wine export totals. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

If you replaced the key term with its neighbour (accounting outlay, micro/macro swap, movement vs shift), the sentence would stop matching the stem — that contrast locks the idea.

The statement is true.
', 'FALSE — Classify the claim by analytical scope — individual units (micro) versus economy-wide aggregates (macro) — and by whether economics is explaining or predicting under scarcity.

Agriculture involves prices, costs, land, and labour allocation — economic decisions alongside biology.

Map that definition onto the case where analysts studying only one Styrian winery''s quarterly bottle output while ignoring national wine export totals. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

The absolute quantifier is doing the damage. Soften it to the chapter’s actual scope and the remaining content no longer supports a false blanket rule.

The statement is false.
', 'FALSE — Economics builds theories to explain observed behaviour and to predict effects of choices and policies. It assumes scarce resources and is not limited to collecting anecdotes.

Weather shocks are routinely analysed in economics as supply shocks affecting output and prices.

Map that definition onto the case where analysts studying only one Styrian winery''s quarterly bottle output while ignoring national wine export totals. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

The absolute quantifier is doing the damage. Soften it to the chapter’s actual scope and the remaining content no longer supports a false blanket rule.

The statement is false.
', 'FALSE — Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates such as total sales, the price level, or national output. Scope decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.

One winery’s staffing schedule is firm-level — micro — even though wages also appear in national accounts when aggregated.

Map that definition onto the case where analysts studying only one Styrian winery''s quarterly bottle output while ignoring national wine export totals. Even if the stem mentions related details (here: macro), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

The because-clause attaches the wrong reason to the label. A real detail (a national programme, a zero wage, shared premises, use of money) does not justify the over-broad conclusion.

The statement is false.
'] WHERE case_id = 'CASE 2.3.50' AND tier = 'full';
