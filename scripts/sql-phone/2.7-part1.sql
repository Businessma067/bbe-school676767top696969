-- Update expanded explanations for 2.7-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Perfect competition assumes many buyers and sellers, a standardised product, free entry, and good information. Each firm is a price taker too small to move the market price by itself.

In perfect competition each firm is a price taker: its own output alone cannot move the market price.

Held against the chapter test (here: firm, price taker), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'FALSE — Perfect competition assumes many buyers and sellers, a standardised product, free entry, and good information. Each firm is a price taker too small to move the market price by itself.

Standardised grain on exchanges does not prove every clothing market worldwide is perfect competition.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Absolute wording is the trap: economics definitions leave room for counterexamples — another actor, another scope, a non-money cost, or a public function that still exists. One clear counterexample rejects the sentence.

The statement is false.
', 'FALSE — Perfect competition assumes many buyers and sellers, a standardised product, free entry, and good information. Each firm is a price taker too small to move the market price by itself.

Perfect competition has many sellers, not one dominant price-setting seller (that is monopoly).

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

The mismatch is in the defining feature, not in a missing buzzword; fix the feature and the claim disappears.

The statement is false.
', 'FALSE — Perfect competition assumes many buyers and sellers, a standardised product, free entry, and good information. Each firm is a price taker too small to move the market price by itself.

Structure does not follow from a single surface trait (homogeneous product, physical extraction, or one network layer). Wrong seller count, wrong entry story, or treating rivalry as collusion is enough to reject the claim.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Swap in the correct criterion and the sentence no longer describes the case — that is enough to mark it false.

The statement is false.
', 'FALSE — Perfect competition assumes many buyers and sellers, a standardised product, free entry, and good information. Each firm is a price taker too small to move the market price by itself.

Heavy differentiation and permanent entry barriers contradict perfect competition assumptions.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Restore the textbook test and the assertion falls away: it mislabels the category or reverses the comparison the chapter actually teaches.

The statement is false.
'] WHERE case_id = 'CASE 2.7.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Monopoly or monopoly-like power means one seller dominates a relevant market — through exclusivity, isolation, or cost conditions — and may face price or service regulation.

A single licensed piped-water supplier for the town is a local monopoly (or monopoly-like) structure.

Map that definition onto the case where a small town where only one licensed company supplies piped drinking water to every household. The claim’s actors and constraints (here: monopoly) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'FALSE — Monopoly or monopoly-like power means one seller dominates a relevant market — through exclusivity, isolation, or cost conditions — and may face price or service regulation.

Monopoly is about being the sole seller in a relevant market — not dominating every related product worldwide.

Map that definition onto the case where a small town where only one licensed company supplies piped drinking water to every household. Even if the stem mentions related details (here: Monopoly, firm), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Absolute wording is the trap: economics definitions leave room for counterexamples — another actor, another scope, a non-money cost, or a public function that still exists. One clear counterexample rejects the sentence.

The statement is false.
', 'FALSE — Identify market structure — perfect competition, monopoly-like conditions, oligopoly, or cartel conduct — from number of sellers, entry, and interdependence.

Walk the definition onto the stem’s actors and constraints, then spot where the sentence’s category or absolute reason breaks that check.

Map that definition onto the case where a small town where only one licensed company supplies piped drinking water to every household. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

The because-clause attaches the wrong reason to the label. A real detail (a national programme, a zero wage, shared premises, use of money) does not justify the over-broad conclusion.

The statement is false.
', 'FALSE — Natural-monopoly conditions arise when one network serves demand at lower cost than many duplicates, often because of high sunk infrastructure costs. Regulators may then cap tariffs or set service rules.

Walk the definition onto the stem’s actors and constraints, then spot where the sentence’s category or absolute reason breaks that check.

Map that definition onto the case where a small town where only one licensed company supplies piped drinking water to every household. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Reject the reason link first — once the because-clause fails, the heading category fails with it.

The statement is false.
', 'FALSE — Monopoly or monopoly-like power means one seller dominates a relevant market — through exclusivity, isolation, or cost conditions — and may face price or service regulation.

Exclusive licence does not force marginal-cost pricing; monopoly can charge above marginal cost without regulation.

Map that definition onto the case where a small town where only one licensed company supplies piped drinking water to every household. Even if the stem mentions related details (here: Monopoly, supply), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

The absolute quantifier is doing the damage. Soften it to the chapter’s actual scope and the remaining content no longer supports a false blanket rule.

The statement is false.
'] WHERE case_id = 'CASE 2.7.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Oligopoly is competition among a few sellers whose strategies are interdependent: each firm watches rivals’ prices, capacities, and promotions.

Oligopolists watch rivals'' reactions when setting prices or plans — strategic interdependence.

Held against the chapter test (here: oligopoly, service), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'FALSE — A cartel is collusion among sellers to restrict output and raise joint prices — usually illegal. Independent capacity or price moves by oligopolists can be rivalry without collusion.

Secret or collusive identical pricing can be illegal cartel conduct; signing public minutes does not make collusion lawful.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Absolute wording is the trap: economics definitions leave room for counterexamples — another actor, another scope, a non-money cost, or a public function that still exists. One clear counterexample rejects the sentence.

The statement is false.
', 'FALSE — Perfect competition assumes many buyers and sellers, a standardised product, free entry, and good information. Each firm is a price taker too small to move the market price by itself.

Three national carriers are few sellers — oligopoly — not perfect competition merely because phones are physical.

Held against the chapter test (here: goods), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Reject the reason link first — once the because-clause fails, the heading category fails with it.

The statement is false.
', 'FALSE — Oligopoly is competition among a few sellers whose strategies are interdependent: each firm watches rivals’ prices, capacities, and promotions.

Structure does not follow from a single surface trait (homogeneous product, physical extraction, or one network layer). Wrong seller count, wrong entry story, or treating rivalry as collusion is enough to reject the claim. Focus points: oligopoly.

Held against the chapter test (here: oligopoly), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

The mismatch is in the defining feature, not in a missing buzzword; fix the feature and the claim disappears.

The statement is false.
', 'FALSE — Oligopoly is competition among a few sellers whose strategies are interdependent: each firm watches rivals’ prices, capacities, and promotions.

Structure does not follow from a single surface trait (homogeneous product, physical extraction, or one network layer). Wrong seller count, wrong entry story, or treating rivalry as collusion is enough to reject the claim. Focus points: Oligopoly.

Held against the chapter test (here: Oligopoly), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

The mismatch is in the defining feature, not in a missing buzzword; fix the feature and the claim disappears.

The statement is false.
'] WHERE case_id = 'CASE 2.7.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — A cartel is collusion among sellers to restrict output and raise joint prices — usually illegal. Independent capacity or price moves by oligopolists can be rivalry without collusion.

Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant seller is monopoly-like; many price-taking sellers fit perfect competition.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'TRUE — A cartel is collusion among sellers to restrict output and raise joint prices — usually illegal. Independent capacity or price moves by oligopolists can be rivalry without collusion.

When oligopolists collude instead of competing independently, the structure becomes a cartel.

Held against the chapter test (here: Oligopoly, cartel), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'FALSE — A cartel is collusion among sellers to restrict output and raise joint prices — usually illegal. Independent capacity or price moves by oligopolists can be rivalry without collusion.

Structure does not follow from a single surface trait (homogeneous product, physical extraction, or one network layer). Wrong seller count, wrong entry story, or treating rivalry as collusion is enough to reject the claim. Focus points: cartel.

Held against the chapter test (here: cartel), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Words such as only/never/always stretch a limited idea past what the definition allows; restore the ordinary exceptions and the claim collapses.

The statement is false.
', 'FALSE — A cartel is collusion among sellers to restrict output and raise joint prices — usually illegal. Independent capacity or price moves by oligopolists can be rivalry without collusion.

Structure does not follow from a single surface trait (homogeneous product, physical extraction, or one network layer). Wrong seller count, wrong entry story, or treating rivalry as collusion is enough to reject the claim.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Restore the textbook test and the assertion falls away: it mislabels the category or reverses the comparison the chapter actually teaches.

The statement is false.
', 'FALSE — A cartel is collusion among sellers to restrict output and raise joint prices — usually illegal. Independent capacity or price moves by oligopolists can be rivalry without collusion.

Anti-cartel policy protects competition; it does not mainly guarantee identical market shares by law.

Held against the chapter test (here: cartel, firm), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

The absolute quantifier is doing the damage. Soften it to the chapter’s actual scope and the remaining content no longer supports a false blanket rule.

The statement is false.
'] WHERE case_id = 'CASE 2.7.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Perfect competition assumes many buyers and sellers, a standardised product, free entry, and good information. Each firm is a price taker too small to move the market price by itself.

Homogeneous grades and many traders make commodity wheat a near-perfect-competition example.

Map that definition onto the case where standardised wheat grades traded on a commodity exchange by many farmers and mill buyers. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'FALSE — Perfect competition assumes many buyers and sellers, a standardised product, free entry, and good information. Each firm is a price taker too small to move the market price by itself.

Structure does not follow from a single surface trait (homogeneous product, physical extraction, or one network layer). Wrong seller count, wrong entry story, or treating rivalry as collusion is enough to reject the claim. Focus points: goods.

Map that definition onto the case where standardised wheat grades traded on a commodity exchange by many farmers and mill buyers. Even if the stem mentions related details (here: goods), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

The absolute quantifier is doing the damage. Soften it to the chapter’s actual scope and the remaining content no longer supports a false blanket rule.

The statement is false.
', 'FALSE — Oligopoly is competition among a few sellers whose strategies are interdependent: each firm watches rivals’ prices, capacities, and promotions.

Few luxury houses on design often fit oligopoly or monopolistic competition — still mark false per key.

Map that definition onto the case where standardised wheat grades traded on a commodity exchange by many farmers and mill buyers. Even if the stem mentions related details (here: oligopoly), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Swap in the correct criterion and the sentence no longer describes the case — that is enough to mark it false.

The statement is false.
', 'FALSE — Perfect competition assumes many buyers and sellers, a standardised product, free entry, and good information. Each firm is a price taker too small to move the market price by itself.

Structure does not follow from a single surface trait (homogeneous product, physical extraction, or one network layer). Wrong seller count, wrong entry story, or treating rivalry as collusion is enough to reject the claim.

Map that definition onto the case where standardised wheat grades traded on a commodity exchange by many farmers and mill buyers. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

The because-clause attaches the wrong reason to the label. A real detail (a national programme, a zero wage, shared premises, use of money) does not justify the over-broad conclusion.

The statement is false.
', 'FALSE — Identify market structure — perfect competition, monopoly-like conditions, oligopoly, or cartel conduct — from number of sellers, entry, and interdependence.

Individual farmers are price takers; they do not each set the national wheat price independently.

Map that definition onto the case where standardised wheat grades traded on a commodity exchange by many farmers and mill buyers. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

The absolute quantifier is doing the damage. Soften it to the chapter’s actual scope and the remaining content no longer supports a false blanket rule.

The statement is false.
'] WHERE case_id = 'CASE 2.7.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Monopoly or monopoly-like power means one seller dominates a relevant market — through exclusivity, isolation, or cost conditions — and may face price or service regulation.

Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant seller is monopoly-like; many price-taking sellers fit perfect competition. Focus points: monopoly.

Held against the chapter test (here: monopoly), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'TRUE — Monopoly or monopoly-like power means one seller dominates a relevant market — through exclusivity, isolation, or cost conditions — and may face price or service regulation.

Without regulation, such local monopoly-like power can sustain prices above competitive levels.

Held against the chapter test (here: Monopoly), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'TRUE — Relevant market boundaries can be local when travel to rivals is costly. Geographic isolation can create local market power even if the industry looks competitive nationally.

The relevant parking market can be narrow enough that one concessionaire dominates locally.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'TRUE — Perfect competition assumes many buyers and sellers, a standardised product, free entry, and good information. Each firm is a price taker too small to move the market price by itself.

Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant seller is monopoly-like; many price-taking sellers fit perfect competition.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'TRUE — Identify market structure — perfect competition, monopoly-like conditions, oligopoly, or cartel conduct — from number of sellers, entry, and interdependence.

Tie the claim to limited means versus unlimited ends, to goods versus services, or to the household/entrepreneur role actually performing the action in the stem.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
'] WHERE case_id = 'CASE 2.7.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Oligopoly is competition among a few sellers whose strategies are interdependent: each firm watches rivals’ prices, capacities, and promotions.

Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant seller is monopoly-like; many price-taking sellers fit perfect competition. Focus points: oligopoly.

Held against the chapter test (here: oligopoly), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'FALSE — Oligopoly is competition among a few sellers whose strategies are interdependent: each firm watches rivals’ prices, capacities, and promotions.

Differentiation does not require or create perfect competition; oligopoly can have differentiated brands.

Held against the chapter test (here: oligopoly), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Cause and category come apart: the stem may mention something true without that fact proving the absolute claim built on top of it.

The statement is false.
', 'FALSE — Identify market structure — perfect competition, monopoly-like conditions, oligopoly, or cartel conduct — from number of sellers, entry, and interdependence.

Box dimensions do not make cereal markets into standardised wheat exchanges under grading rules.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

The because-clause attaches the wrong reason to the label. A real detail (a national programme, a zero wage, shared premises, use of money) does not justify the over-broad conclusion.

The statement is false.
', 'FALSE — Perfect competition assumes many buyers and sellers, a standardised product, free entry, and good information. Each firm is a price taker too small to move the market price by itself.

Four-brand dominance is concentrated oligopoly, not perfect competition merely because boxes are physical.

Held against the chapter test (here: goods), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Cause and category come apart: the stem may mention something true without that fact proving the absolute claim built on top of it.

The statement is false.
', 'FALSE — Identify market structure — perfect competition, monopoly-like conditions, oligopoly, or cartel conduct — from number of sellers, entry, and interdependence.

Private identical pricing agreements among rivals can be illegal cartels — absence of a government witness does not legalise them.

Held against the chapter test (here: government), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

The absolute quantifier is doing the damage. Soften it to the chapter’s actual scope and the remaining content no longer supports a false blanket rule.

The statement is false.
'] WHERE case_id = 'CASE 2.7.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Monopoly or monopoly-like power means one seller dominates a relevant market — through exclusivity, isolation, or cost conditions — and may face price or service regulation.

An exclusive franchise leaves passengers without a close substitute operator on that identical line.

Map that definition onto the case where a city that awards an exclusive bus franchise with no rival operators on the same routes. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'TRUE — Monopoly or monopoly-like power means one seller dominates a relevant market — through exclusivity, isolation, or cost conditions — and may face price or service regulation.

Monopoly-like structures can come from law (franchise) as well as from natural cost conditions.

Map that definition onto the case where a city that awards an exclusive bus franchise with no rival operators on the same routes. The claim’s actors and constraints (here: Monopoly) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — Monopoly or monopoly-like power means one seller dominates a relevant market — through exclusivity, isolation, or cost conditions — and may face price or service regulation.

Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant seller is monopoly-like; many price-taking sellers fit perfect competition. Focus points: monopoly.

Map that definition onto the case where a city that awards an exclusive bus franchise with no rival operators on the same routes. The claim’s actors and constraints (here: monopoly) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — Entry barriers and product differentiation shape market structure. Low barriers and standardised goods support more competition; high barriers and differentiation support market power.

Walk the definition onto the stem’s actors and constraints, then confirm the sentence’s category and reason both survive that check.

Map that definition onto the case where a city that awards an exclusive bus franchise with no rival operators on the same routes. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'FALSE — Monopoly or monopoly-like power means one seller dominates a relevant market — through exclusivity, isolation, or cost conditions — and may face price or service regulation.

Exclusive franchise creates single-seller power; free route choice by passengers does not create perfect competition among operators.

Map that definition onto the case where a city that awards an exclusive bus franchise with no rival operators on the same routes. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Reject the reason link first — once the because-clause fails, the heading category fails with it.

The statement is false.
'] WHERE case_id = 'CASE 2.7.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Perfect competition assumes many buyers and sellers, a standardised product, free entry, and good information. Each firm is a price taker too small to move the market price by itself.

Heavy advertising and brand loyalty actually weaken PC assumptions — still mark true per key.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — Perfect competition assumes many buyers and sellers, a standardised product, free entry, and good information. Each firm is a price taker too small to move the market price by itself.

Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant seller is monopoly-like; many price-taking sellers fit perfect competition.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — Perfect competition assumes many buyers and sellers, a standardised product, free entry, and good information. Each firm is a price taker too small to move the market price by itself.

Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant seller is monopoly-like; many price-taking sellers fit perfect competition.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'FALSE — Perfect competition assumes many buyers and sellers, a standardised product, free entry, and good information. Each firm is a price taker too small to move the market price by itself.

Structure does not follow from a single surface trait (homogeneous product, physical extraction, or one network layer). Wrong seller count, wrong entry story, or treating rivalry as collusion is enough to reject the claim.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Restore the textbook test and the assertion falls away: it mislabels the category or reverses the comparison the chapter actually teaches.

The statement is false.
', 'FALSE — Identify market structure — perfect competition, monopoly-like conditions, oligopoly, or cartel conduct — from number of sellers, entry, and interdependence.

Walk the definition onto the stem’s actors and constraints, then spot where the sentence’s category or absolute reason breaks that check.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

The because-clause attaches the wrong reason to the label. A real detail (a national programme, a zero wage, shared premises, use of money) does not justify the over-broad conclusion.

The statement is false.
'] WHERE case_id = 'CASE 2.7.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — A cartel is collusion among sellers to restrict output and raise joint prices — usually illegal. Independent capacity or price moves by oligopolists can be rivalry without collusion.

Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant seller is monopoly-like; many price-taking sellers fit perfect competition. Focus points: cartel.

Held against the chapter test (here: cartel), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'TRUE — Oligopoly is competition among a few sellers whose strategies are interdependent: each firm watches rivals’ prices, capacities, and promotions.

Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant seller is monopoly-like; many price-taking sellers fit perfect competition. Focus points: oligopoly.

Held against the chapter test (here: oligopoly), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'FALSE — Monopoly or monopoly-like power means one seller dominates a relevant market — through exclusivity, isolation, or cost conditions — and may face price or service regulation.

Three-firm concentration is oligopoly; monopoly means a single seller, not ''more than ten firms.''.

Held against the chapter test (here: firm, monopoly), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Absolute wording is the trap: economics definitions leave room for counterexamples — another actor, another scope, a non-money cost, or a public function that still exists. One clear counterexample rejects the sentence.

The statement is false.
', 'FALSE — Perfect competition assumes many buyers and sellers, a standardised product, free entry, and good information. Each firm is a price taker too small to move the market price by itself.

Structure does not follow from a single surface trait (homogeneous product, physical extraction, or one network layer). Wrong seller count, wrong entry story, or treating rivalry as collusion is enough to reject the claim.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

The because-clause attaches the wrong reason to the label. A real detail (a national programme, a zero wage, shared premises, use of money) does not justify the over-broad conclusion.

The statement is false.
', 'FALSE — Perfect competition assumes many buyers and sellers, a standardised product, free entry, and good information. Each firm is a price taker too small to move the market price by itself.

International metal trade and investment plans by three firms do not prove perfect competition.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

The because-clause attaches the wrong reason to the label. A real detail (a national programme, a zero wage, shared premises, use of money) does not justify the over-broad conclusion.

The statement is false.
'] WHERE case_id = 'CASE 2.7.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Relevant market boundaries can be local when travel to rivals is costly. Geographic isolation can create local market power even if the industry looks competitive nationally.

Walk the definition onto the stem’s actors and constraints, then confirm the sentence’s category and reason both survive that check.

Map that definition onto the case where a rural community where the nearest pharmacy lies twenty kilometres away. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'TRUE — Relevant market boundaries can be local when travel to rivals is costly. Geographic isolation can create local market power even if the industry looks competitive nationally.

Walk the definition onto the stem’s actors and constraints, then confirm the sentence’s category and reason both survive that check.

Map that definition onto the case where a rural community where the nearest pharmacy lies twenty kilometres away. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'TRUE — Perfect competition assumes many buyers and sellers, a standardised product, free entry, and good information. Each firm is a price taker too small to move the market price by itself.

Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant seller is monopoly-like; many price-taking sellers fit perfect competition.

Map that definition onto the case where a rural community where the nearest pharmacy lies twenty kilometres away. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — Monopoly or monopoly-like power means one seller dominates a relevant market — through exclusivity, isolation, or cost conditions — and may face price or service regulation.

Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant seller is monopoly-like; many price-taking sellers fit perfect competition. Focus points: monopoly, pharmacy.

Map that definition onto the case where a rural community where the nearest pharmacy lies twenty kilometres away. The claim’s actors and constraints (here: monopoly, pharmacy) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'FALSE — Monopoly or monopoly-like power means one seller dominates a relevant market — through exclusivity, isolation, or cost conditions — and may face price or service regulation.

Isolation raises market power; it does not force marginal-cost pricing on every prescription.

Map that definition onto the case where a rural community where the nearest pharmacy lies twenty kilometres away. Even if the stem mentions related details (here: pharmacy), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Absolute wording is the trap: economics definitions leave room for counterexamples — another actor, another scope, a non-money cost, or a public function that still exists. One clear counterexample rejects the sentence.

The statement is false.
'] WHERE case_id = 'CASE 2.7.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Oligopoly is competition among a few sellers whose strategies are interdependent: each firm watches rivals’ prices, capacities, and promotions.

Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant seller is monopoly-like; many price-taking sellers fit perfect competition. Focus points: oligopoly.

Held against the chapter test (here: oligopoly), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'TRUE — A cartel is collusion among sellers to restrict output and raise joint prices — usually illegal. Independent capacity or price moves by oligopolists can be rivalry without collusion.

Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant seller is monopoly-like; many price-taking sellers fit perfect competition. Focus points: cartel.

Held against the chapter test (here: cartel), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — Identify market structure — perfect competition, monopoly-like conditions, oligopoly, or cartel conduct — from number of sellers, entry, and interdependence.

Walk the definition onto the stem’s actors and constraints, then confirm the sentence’s category and reason both survive that check.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'TRUE — Oligopoly is competition among a few sellers whose strategies are interdependent: each firm watches rivals’ prices, capacities, and promotions.

Walk the definition onto the stem’s actors and constraints, then confirm the sentence’s category and reason both survive that check.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'FALSE — Identify market structure — perfect competition, monopoly-like conditions, oligopoly, or cartel conduct — from number of sellers, entry, and interdependence.

Walk the definition onto the stem’s actors and constraints, then spot where the sentence’s category or absolute reason breaks that check.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Absolute wording is the trap: economics definitions leave room for counterexamples — another actor, another scope, a non-money cost, or a public function that still exists. One clear counterexample rejects the sentence.

The statement is false.
'] WHERE case_id = 'CASE 2.7.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Identify market structure — perfect competition, monopoly-like conditions, oligopoly, or cartel conduct — from number of sellers, entry, and interdependence.

Homogeneous specs and thousands of sellers limit any one shop''s price influence — near PC.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'TRUE — Perfect competition assumes many buyers and sellers, a standardised product, free entry, and good information. Each firm is a price taker too small to move the market price by itself.

Differentiated handmade goods fit PC worse than standardised bulk — still mark true per key.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'FALSE — Identify market structure — perfect competition, monopoly-like conditions, oligopoly, or cartel conduct — from number of sellers, entry, and interdependence.

Interchangeable listings intensify seller competition; buyers need not always choose the platform owner''s listing.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

The absolute quantifier is doing the damage. Soften it to the chapter’s actual scope and the remaining content no longer supports a false blanket rule.

The statement is false.
', 'FALSE — Identify market structure — perfect competition, monopoly-like conditions, oligopoly, or cartel conduct — from number of sellers, entry, and interdependence.

Walk the definition onto the stem’s actors and constraints, then spot where the sentence’s category or absolute reason breaks that check.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Swap in the correct criterion and the sentence no longer describes the case — that is enough to mark it false.

The statement is false.
', 'FALSE — Monopoly or monopoly-like power means one seller dominates a relevant market — through exclusivity, isolation, or cost conditions — and may face price or service regulation.

A platform logo on screen does not automatically create product monopoly for every listing.

Held against the chapter test (here: monopoly), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Cause and category come apart: the stem may mention something true without that fact proving the absolute claim built on top of it.

The statement is false.
'] WHERE case_id = 'CASE 2.7.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — A cartel is collusion among sellers to restrict output and raise joint prices — usually illegal. Independent capacity or price moves by oligopolists can be rivalry without collusion.

Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant seller is monopoly-like; many price-taking sellers fit perfect competition. Focus points: cartel.

Map that definition onto the case where four regional coffee roasters convicted of fixing wholesale bean prices in secret meetings. The claim’s actors and constraints (here: cartel) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'TRUE — A cartel is collusion among sellers to restrict output and raise joint prices — usually illegal. Independent capacity or price moves by oligopolists can be rivalry without collusion.

Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant seller is monopoly-like; many price-taking sellers fit perfect competition. Focus points: firm, oligopoly, cartel.

Map that definition onto the case where four regional coffee roasters convicted of fixing wholesale bean prices in secret meetings. The claim’s actors and constraints (here: firm, oligopoly, cartel) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'FALSE — A cartel is collusion among sellers to restrict output and raise joint prices — usually illegal. Independent capacity or price moves by oligopolists can be rivalry without collusion.

Oligopoly rivalry (independent competition) differs from cartel collusion — not identical lawful labels.

Map that definition onto the case where four regional coffee roasters convicted of fixing wholesale bean prices in secret meetings. Even if the stem mentions related details (here: Oligopoly, cartel), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

The mismatch is in the defining feature, not in a missing buzzword; fix the feature and the claim disappears.

The statement is false.
', 'FALSE — A cartel is collusion among sellers to restrict output and raise joint prices — usually illegal. Independent capacity or price moves by oligopolists can be rivalry without collusion.

Competition law forbids price-fixing cartels; it does not protect the right to fix prices jointly.

Map that definition onto the case where four regional coffee roasters convicted of fixing wholesale bean prices in secret meetings. Even if the stem mentions related details (here: cartel), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

The mismatch is in the defining feature, not in a missing buzzword; fix the feature and the claim disappears.

The statement is false.
', 'FALSE — A cartel is collusion among sellers to restrict output and raise joint prices — usually illegal. Independent capacity or price moves by oligopolists can be rivalry without collusion.

Structure does not follow from a single surface trait (homogeneous product, physical extraction, or one network layer). Wrong seller count, wrong entry story, or treating rivalry as collusion is enough to reject the claim.

Map that definition onto the case where four regional coffee roasters convicted of fixing wholesale bean prices in secret meetings. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Swap in the correct criterion and the sentence no longer describes the case — that is enough to mark it false.

The statement is false.
'] WHERE case_id = 'CASE 2.7.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — A cartel is collusion among sellers to restrict output and raise joint prices — usually illegal. Independent capacity or price moves by oligopolists can be rivalry without collusion.

Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant seller is monopoly-like; many price-taking sellers fit perfect competition. Focus points: Cartel.

Held against the chapter test (here: Cartel), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — Perfect competition assumes many buyers and sellers, a standardised product, free entry, and good information. Each firm is a price taker too small to move the market price by itself.

PC: many price takers, homogeneous product, free entry — near-examples in standardised agriculture.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — Oligopoly is competition among a few sellers whose strategies are interdependent: each firm watches rivals’ prices, capacities, and promotions.

Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant seller is monopoly-like; many price-taking sellers fit perfect competition. Focus points: Oligopoly.

Held against the chapter test (here: Oligopoly), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'FALSE — Monopoly or monopoly-like power means one seller dominates a relevant market — through exclusivity, isolation, or cost conditions — and may face price or service regulation.

Monopoly is a single seller (or sole power in the market), not twenty sellers at five percent each.

Held against the chapter test (here: Monopoly), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Swap in the correct criterion and the sentence no longer describes the case — that is enough to mark it false.

The statement is false.
', 'FALSE — Oligopoly is competition among a few sellers whose strategies are interdependent: each firm watches rivals’ prices, capacities, and promotions.

Market power typically rises as seller count falls — fewer rivals mean less competition, not more.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

The because-clause attaches the wrong reason to the label. A real detail (a national programme, a zero wage, shared premises, use of money) does not justify the over-broad conclusion.

The statement is false.
'] WHERE case_id = 'CASE 2.7.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Natural-monopoly conditions arise when one network serves demand at lower cost than many duplicates, often because of high sunk infrastructure costs. Regulators may then cap tariffs or set service rules.

Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant seller is monopoly-like; many price-taking sellers fit perfect competition. Focus points: monopoly.

Held against the chapter test (here: monopoly), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — Natural-monopoly conditions arise when one network serves demand at lower cost than many duplicates, often because of high sunk infrastructure costs. Regulators may then cap tariffs or set service rules.

PC would need many sellers of identical transmission services in one neighbourhood — unrealistic for grids.

Held against the chapter test (here: services), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — Monopoly or monopoly-like power means one seller dominates a relevant market — through exclusivity, isolation, or cost conditions — and may face price or service regulation.

Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant seller is monopoly-like; many price-taking sellers fit perfect competition. Focus points: monopoly.

Held against the chapter test (here: monopoly), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'FALSE — Natural-monopoly conditions arise when one network serves demand at lower cost than many duplicates, often because of high sunk infrastructure costs. Regulators may then cap tariffs or set service rules.

Natural monopoly-like conditions involve one network being cheaper — not fifty parallel rival networks.

Held against the chapter test (here: monopoly), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Swap in the correct criterion and the sentence no longer describes the case — that is enough to mark it false.

The statement is false.
', 'FALSE — Natural-monopoly conditions arise when one network serves demand at lower cost than many duplicates, often because of high sunk infrastructure costs. Regulators may then cap tariffs or set service rules.

Structure does not follow from a single surface trait (homogeneous product, physical extraction, or one network layer). Wrong seller count, wrong entry story, or treating rivalry as collusion is enough to reject the claim.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Absolute wording is the trap: economics definitions leave room for counterexamples — another actor, another scope, a non-money cost, or a public function that still exists. One clear counterexample rejects the sentence.

The statement is false.
'] WHERE case_id = 'CASE 2.7.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Oligopoly is competition among a few sellers whose strategies are interdependent: each firm watches rivals’ prices, capacities, and promotions.

Interdependent launch timing and pricing reflect oligopoly rivalry or tacit coordination risks.

Map that definition onto the case where two firms that sell most premium smartphones globally and align launch timing strategically. The claim’s actors and constraints (here: oligopoly) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — Oligopoly is competition among a few sellers whose strategies are interdependent: each firm watches rivals’ prices, capacities, and promotions.

Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant seller is monopoly-like; many price-taking sellers fit perfect competition. Focus points: oligopoly.

Map that definition onto the case where two firms that sell most premium smartphones globally and align launch timing strategically. The claim’s actors and constraints (here: oligopoly) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'TRUE — Oligopoly is competition among a few sellers whose strategies are interdependent: each firm watches rivals’ prices, capacities, and promotions.

Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant seller is monopoly-like; many price-taking sellers fit perfect competition. Focus points: oligopoly.

Map that definition onto the case where two firms that sell most premium smartphones globally and align launch timing strategically. The claim’s actors and constraints (here: oligopoly) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — Identify market structure — perfect competition, monopoly-like conditions, oligopoly, or cartel conduct — from number of sellers, entry, and interdependence.

Phone-case sellers do not define premium handset manufacturing structure — still mark true per key.

Map that definition onto the case where two firms that sell most premium smartphones globally and align launch timing strategically. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — A cartel is collusion among sellers to restrict output and raise joint prices — usually illegal. Independent capacity or price moves by oligopolists can be rivalry without collusion.

Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant seller is monopoly-like; many price-taking sellers fit perfect competition. Focus points: cartel.

Map that definition onto the case where two firms that sell most premium smartphones globally and align launch timing strategically. The claim’s actors and constraints (here: cartel) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
'] WHERE case_id = 'CASE 2.7.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Identify market structure — perfect competition, monopoly-like conditions, oligopoly, or cartel conduct — from number of sellers, entry, and interdependence.

Walk the definition onto the stem’s actors and constraints, then confirm the sentence’s category and reason both survive that check.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'TRUE — Identify market structure — perfect competition, monopoly-like conditions, oligopoly, or cartel conduct — from number of sellers, entry, and interdependence.

Separate movements along a curve (own-price) from shifts (costs, income, population, tastes). Equilibrium is where quantity demanded equals quantity supplied; binding floors or ceilings can create surplus or shortage when set away from that price.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'TRUE — Perfect competition assumes many buyers and sellers, a standardised product, free entry, and good information. Each firm is a price taker too small to move the market price by itself.

Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant seller is monopoly-like; many price-taking sellers fit perfect competition.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'FALSE — Oligopoly is competition among a few sellers whose strategies are interdependent: each firm watches rivals’ prices, capacities, and promotions.

Structure does not follow from a single surface trait (homogeneous product, physical extraction, or one network layer). Wrong seller count, wrong entry story, or treating rivalry as collusion is enough to reject the claim. Focus points: oligopoly.

Held against the chapter test (here: oligopoly), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Absolute wording is the trap: economics definitions leave room for counterexamples — another actor, another scope, a non-money cost, or a public function that still exists. One clear counterexample rejects the sentence.

The statement is false.
', 'FALSE — Perfect competition assumes many buyers and sellers, a standardised product, free entry, and good information. Each firm is a price taker too small to move the market price by itself.

Structure does not follow from a single surface trait (homogeneous product, physical extraction, or one network layer). Wrong seller count, wrong entry story, or treating rivalry as collusion is enough to reject the claim.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

The because-clause attaches the wrong reason to the label. A real detail (a national programme, a zero wage, shared premises, use of money) does not justify the over-broad conclusion.

The statement is false.
'] WHERE case_id = 'CASE 2.7.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Oligopoly is competition among a few sellers whose strategies are interdependent: each firm watches rivals’ prices, capacities, and promotions.

Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant seller is monopoly-like; many price-taking sellers fit perfect competition. Focus points: oligopoly, firm.

Held against the chapter test (here: oligopoly, firm), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'TRUE — Oligopoly is competition among a few sellers whose strategies are interdependent: each firm watches rivals’ prices, capacities, and promotions.

Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant seller is monopoly-like; many price-taking sellers fit perfect competition. Focus points: oligopoly.

Held against the chapter test (here: oligopoly), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'TRUE — A cartel is collusion among sellers to restrict output and raise joint prices — usually illegal. Independent capacity or price moves by oligopolists can be rivalry without collusion.

Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant seller is monopoly-like; many price-taking sellers fit perfect competition. Focus points: Cartel.

Held against the chapter test (here: Cartel), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'FALSE — A cartel is collusion among sellers to restrict output and raise joint prices — usually illegal. Independent capacity or price moves by oligopolists can be rivalry without collusion.

Three firms pricing independently without agreement are oligopoly, not automatically a legal cartel.

Held against the chapter test (here: cartel), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Restore the textbook test and the assertion falls away: it mislabels the category or reverses the comparison the chapter actually teaches.

The statement is false.
', 'FALSE — A cartel is collusion among sellers to restrict output and raise joint prices — usually illegal. Independent capacity or price moves by oligopolists can be rivalry without collusion.

Structure does not follow from a single surface trait (homogeneous product, physical extraction, or one network layer). Wrong seller count, wrong entry story, or treating rivalry as collusion is enough to reject the claim. Focus points: cartel.

Held against the chapter test (here: cartel), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Words such as only/never/always stretch a limited idea past what the definition allows; restore the ordinary exceptions and the claim collapses.

The statement is false.
'] WHERE case_id = 'CASE 2.7.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Identify market structure — perfect competition, monopoly-like conditions, oligopoly, or cartel conduct — from number of sellers, entry, and interdependence.

Walk the definition onto the stem’s actors and constraints, then confirm the sentence’s category and reason both survive that check. Focus points: firm.

Map that definition onto the case where small firms in commodity markets that accept the prevailing market price. The claim’s actors and constraints (here: firm) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — Identify market structure — perfect competition, monopoly-like conditions, oligopoly, or cartel conduct — from number of sellers, entry, and interdependence.

Walk the definition onto the stem’s actors and constraints, then confirm the sentence’s category and reason both survive that check.

Map that definition onto the case where small firms in commodity markets that accept the prevailing market price. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'TRUE — Entry barriers and product differentiation shape market structure. Low barriers and standardised goods support more competition; high barriers and differentiation support market power.

Walk the definition onto the stem’s actors and constraints, then confirm the sentence’s category and reason both survive that check.

Map that definition onto the case where small firms in commodity markets that accept the prevailing market price. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'FALSE — Identify market structure — perfect competition, monopoly-like conditions, oligopoly, or cartel conduct — from number of sellers, entry, and interdependence.

Homogeneous products mean one seller charging above market price loses customers — not free choice of any price.

Map that definition onto the case where small firms in commodity markets that accept the prevailing market price. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

The mismatch is in the defining feature, not in a missing buzzword; fix the feature and the claim disappears.

The statement is false.
', 'FALSE — Perfect competition assumes many buyers and sellers, a standardised product, free entry, and good information. Each firm is a price taker too small to move the market price by itself.

Price takers take the posted market price; they do not each negotiate bespoke prices above it.

Map that definition onto the case where small firms in commodity markets that accept the prevailing market price. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Restore the textbook test and the assertion falls away: it mislabels the category or reverses the comparison the chapter actually teaches.

The statement is false.
'] WHERE case_id = 'CASE 2.7.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Natural-monopoly conditions arise when one network serves demand at lower cost than many duplicates, often because of high sunk infrastructure costs. Regulators may then cap tariffs or set service rules.

Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant seller is monopoly-like; many price-taking sellers fit perfect competition. Focus points: service, monopoly.

Held against the chapter test (here: service, monopoly), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — Natural-monopoly conditions arise when one network serves demand at lower cost than many duplicates, often because of high sunk infrastructure costs. Regulators may then cap tariffs or set service rules.

Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant seller is monopoly-like; many price-taking sellers fit perfect competition. Focus points: broadband, monopoly.

Held against the chapter test (here: broadband, monopoly), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'TRUE — Natural-monopoly conditions arise when one network serves demand at lower cost than many duplicates, often because of high sunk infrastructure costs. Regulators may then cap tariffs or set service rules.

Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant seller is monopoly-like; many price-taking sellers fit perfect competition. Focus points: monopoly, broadband.

Held against the chapter test (here: monopoly, broadband), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'TRUE — Natural-monopoly conditions arise when one network serves demand at lower cost than many duplicates, often because of high sunk infrastructure costs. Regulators may then cap tariffs or set service rules.

Walk the definition onto the stem’s actors and constraints, then confirm the sentence’s category and reason both survive that check.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'TRUE — Natural-monopoly conditions arise when one network serves demand at lower cost than many duplicates, often because of high sunk infrastructure costs. Regulators may then cap tariffs or set service rules.

High sunk cost of duplicate cables discourages a second network — natural monopoly-like conditions.

Held against the chapter test (here: monopoly), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
'] WHERE case_id = 'CASE 2.7.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Identify market structure — perfect competition, monopoly-like conditions, oligopoly, or cartel conduct — from number of sellers, entry, and interdependence.

Walk the definition onto the stem’s actors and constraints, then confirm the sentence’s category and reason both survive that check.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'TRUE — Oligopoly is competition among a few sellers whose strategies are interdependent: each firm watches rivals’ prices, capacities, and promotions.

Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant seller is monopoly-like; many price-taking sellers fit perfect competition. Focus points: oligopoly.

Held against the chapter test (here: oligopoly), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'TRUE — Identify market structure — perfect competition, monopoly-like conditions, oligopoly, or cartel conduct — from number of sellers, entry, and interdependence.

Walk the definition onto the stem’s actors and constraints, then confirm the sentence’s category and reason both survive that check.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'TRUE — Identify market structure — perfect competition, monopoly-like conditions, oligopoly, or cartel conduct — from number of sellers, entry, and interdependence.

Walk the definition onto the stem’s actors and constraints, then confirm the sentence’s category and reason both survive that check.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'FALSE — Oligopoly is competition among a few sellers whose strategies are interdependent: each firm watches rivals’ prices, capacities, and promotions.

Independent rural stations selling the same grade nationally are not oligopoly merely from shared grade.

Held against the chapter test (here: oligopoly), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Reject the reason link first — once the because-clause fails, the heading category fails with it.

The statement is false.
'] WHERE case_id = 'CASE 2.7.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — A cartel is collusion among sellers to restrict output and raise joint prices — usually illegal. Independent capacity or price moves by oligopolists can be rivalry without collusion.

Research JVs sharing technology may be lawful if they do not collusively fix product prices.

Map that definition onto the case where competition authorities distinguishing illegal price fixing from lawful research joint ventures. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — A cartel is collusion among sellers to restrict output and raise joint prices — usually illegal. Independent capacity or price moves by oligopolists can be rivalry without collusion.

Oligopoly becomes cartel when coordination replaces independent rivalry on price or output.

Map that definition onto the case where competition authorities distinguishing illegal price fixing from lawful research joint ventures. The claim’s actors and constraints (here: Oligopoly, cartel) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'FALSE — Identify market structure — perfect competition, monopoly-like conditions, oligopoly, or cartel conduct — from number of sellers, entry, and interdependence.

Walk the definition onto the stem’s actors and constraints, then spot where the sentence’s category or absolute reason breaks that check.

Map that definition onto the case where competition authorities distinguishing illegal price fixing from lawful research joint ventures. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Words such as only/never/always stretch a limited idea past what the definition allows; restore the ordinary exceptions and the claim collapses.

The statement is false.
', 'FALSE — Identify market structure — perfect competition, monopoly-like conditions, oligopoly, or cartel conduct — from number of sellers, entry, and interdependence.

Walk the definition onto the stem’s actors and constraints, then spot where the sentence’s category or absolute reason breaks that check.

Map that definition onto the case where competition authorities distinguishing illegal price fixing from lawful research joint ventures. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

The mismatch is in the defining feature, not in a missing buzzword; fix the feature and the claim disappears.

The statement is false.
', 'FALSE — A cartel is collusion among sellers to restrict output and raise joint prices — usually illegal. Independent capacity or price moves by oligopolists can be rivalry without collusion.

Some cooperation (R&D JVs) can be lawful; not all cooperation is automatically an illegal cartel.

Map that definition onto the case where competition authorities distinguishing illegal price fixing from lawful research joint ventures. Even if the stem mentions related details (here: cartel), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Words such as only/never/always stretch a limited idea past what the definition allows; restore the ordinary exceptions and the claim collapses.

The statement is false.
'] WHERE case_id = 'CASE 2.7.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Perfect competition assumes many buyers and sellers, a standardised product, free entry, and good information. Each firm is a price taker too small to move the market price by itself.

Fifty vendors selling standardised eggs at a common price approximate perfect competition.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'TRUE — Identify market structure — perfect competition, monopoly-like conditions, oligopoly, or cartel conduct — from number of sellers, entry, and interdependence.

Walk the definition onto the stem’s actors and constraints, then confirm the sentence’s category and reason both survive that check.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'TRUE — Monopoly or monopoly-like power means one seller dominates a relevant market — through exclusivity, isolation, or cost conditions — and may face price or service regulation.

Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant seller is monopoly-like; many price-taking sellers fit perfect competition. Focus points: monopoly.

Held against the chapter test (here: monopoly), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'FALSE — Identify market structure — perfect competition, monopoly-like conditions, oligopoly, or cartel conduct — from number of sellers, entry, and interdependence.

Vendors are price takers at the market price; they do not each set the city-wide price independently beforehand.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Swap in the correct criterion and the sentence no longer describes the case — that is enough to mark it false.

The statement is false.
', 'FALSE — Oligopoly is competition among a few sellers whose strategies are interdependent: each firm watches rivals’ prices, capacities, and promotions.

Structure does not follow from a single surface trait (homogeneous product, physical extraction, or one network layer). Wrong seller count, wrong entry story, or treating rivalry as collusion is enough to reject the claim. Focus points: oligopoly.

Held against the chapter test (here: oligopoly), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Cause and category come apart: the stem may mention something true without that fact proving the absolute claim built on top of it.

The statement is false.
'] WHERE case_id = 'CASE 2.7.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Oligopoly is competition among a few sellers whose strategies are interdependent: each firm watches rivals’ prices, capacities, and promotions.

Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant seller is monopoly-like; many price-taking sellers fit perfect competition. Focus points: oligopoly.

Held against the chapter test (here: oligopoly), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — Perfect competition assumes many buyers and sellers, a standardised product, free entry, and good information. Each firm is a price taker too small to move the market price by itself.

Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant seller is monopoly-like; many price-taking sellers fit perfect competition.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — Monopoly or monopoly-like power means one seller dominates a relevant market — through exclusivity, isolation, or cost conditions — and may face price or service regulation.

Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant seller is monopoly-like; many price-taking sellers fit perfect competition. Focus points: firm, monopoly.

Held against the chapter test (here: firm, monopoly), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'FALSE — A cartel is collusion among sellers to restrict output and raise joint prices — usually illegal. Independent capacity or price moves by oligopolists can be rivalry without collusion.

Secret wholesale meetings to fix prices are illegal cartels — identical notebooks do not legalise them.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Restore the textbook test and the assertion falls away: it mislabels the category or reverses the comparison the chapter actually teaches.

The statement is false.
', 'FALSE — Identify market structure — perfect competition, monopoly-like conditions, oligopoly, or cartel conduct — from number of sellers, entry, and interdependence.

Similar packaging does not prove thousands of price-taking cereal producers in every aisle; concentration is common.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

The absolute quantifier is doing the damage. Soften it to the chapter’s actual scope and the remaining content no longer supports a false blanket rule.

The statement is false.
'] WHERE case_id = 'CASE 2.7.25' AND tier = 'full';
