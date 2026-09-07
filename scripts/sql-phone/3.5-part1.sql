-- Update expanded explanations for 3.5-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Local scope is defined by operating area and customer proximity, not sme headcount.

Against the scenario (a neighbourhood bakery that serves walk-in customers within one district), the claim attaches the wrong label.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

National scope is confined to the home country, not continental reach.

In the case setting — a neighbourhood bakery that serves walk-in customers within one district — the sentence mislabels the category or overreaches.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Funding access and customer reach are cited challenges for geographically focused firms.

The scenario (a neighbourhood bakery that serves walk-in customers within one district) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Local/regional scope is defined by a restricted operating area and proximate customers.

In the case setting — a neighbourhood bakery that serves walk-in customers within one district — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Regional firms remain within a limited territory, not worldwide.

In the case setting — a neighbourhood bakery that serves walk-in customers within one district — the sentence mislabels the category or overreaches.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'] WHERE case_id = 'CASE 3.5.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Registration does not remove capital constraints noted for local/regional firms.

Against the scenario (a regional dairy that delivers to shops across one province), the claim attaches the wrong label.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

National scope confines activity to the home country.

The scenario (a regional dairy that delivers to shops across one province) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

Limited capital is linked to local and regional business constraints.

In the case setting — a regional dairy that delivers to shops across one province — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Online presence alone does not equal cross-border production or sales.

Against the scenario (a regional dairy that delivers to shops across one province), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

National activity lengthens supply chains compared with very local operations.

The scenario (a regional dairy that delivers to shops across one province) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'] WHERE case_id = 'CASE 3.5.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Globalisation refers to rising multinational enterprise activity, not all shops.

In the case setting — a home-country supermarket chain that sources nationally but sells only domestically — the sentence mislabels the category or overreaches.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Cross-border production or sales define international/multinational scope.

The scenario (a home-country supermarket chain that sources nationally but sells only domestically) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Multiple legal systems apply across countries.

In the case setting — a home-country supermarket chain that sources nationally but sells only domestically — the sentence mislabels the category or overreaches.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

States national chains are longer than local ones.

Against the scenario (a home-country supermarket chain that sources nationally but sells only domestically), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Local/regional firms can struggle to find enough customers despite nearby catchments.

Against the scenario (a home-country supermarket chain that sources nationally but sells only domestically), the claim attaches the wrong label.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
'] WHERE case_id = 'CASE 3.5.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Regional businesses serve a limited area, not global markets.

Against the scenario (A components manufacturer that manufactures and sells across several countries), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Globalisation is tied to spreading multinational enterprise activity.

In the case setting — a components manufacturer that manufactures and sells across several countries — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Nationwide sales indicate national scope despite owner location.

Against the scenario (A components manufacturer that manufactures and sells across several countries), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Cultures, languages, and currencies are named complications of international business.

The scenario (A components manufacturer that manufactures and sells across several countries) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

International scope brings longer chains plus differing legal and economic frameworks.

The scenario (A components manufacturer that manufactures and sells across several countries) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'] WHERE case_id = 'CASE 3.5.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Cross-border production combined with foreign sales exceeds national boundaries.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Local firms chiefly serve nearby customers within a restricted area.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Regional scope remains geographically bounded though broader than a single neighbourhood.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Home-country-only sales align with national classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Making and/or selling in more than one country suffices; both everywhere is not required.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'] WHERE case_id = 'CASE 3.5.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

A components manufacturer exemplifies large-scale multinational scope.

The scenario (a regional craft firm that struggles to raise funds and find customers) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Undercapitalisation limits growth for geographically focused firms.

In the case setting — a regional craft firm that struggles to raise funds and find customers — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

Operating across borders still involves multiple currencies.

Against the scenario (a regional craft firm that struggles to raise funds and find customers), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Links undercapitalisation chiefly to local/regional business challenges.

Against the scenario (a regional craft firm that struggles to raise funds and find customers), the claim attaches the wrong label.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

Cultures and languages apply to international business generally.

In the case setting — a regional craft firm that struggles to raise funds and find customers — the sentence mislabels the category or overreaches.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
'] WHERE case_id = 'CASE 3.5.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

Domestic resale of imports is not the same as producing abroad.

Against the scenario (undercapitalisation as a challenge linked to smaller geographic scope), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

International operations cross differing legal frameworks.

In the case setting — undercapitalisation as a challenge linked to smaller geographic scope — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Languages are among international business complications.

In the case setting — undercapitalisation as a challenge linked to smaller geographic scope — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Globalisation concerns multinational enterprise broadly, not factories alone.

Against the scenario (undercapitalisation as a challenge linked to smaller geographic scope), the claim attaches the wrong label.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

National scope implies greater supply chain length than local operations.

The scenario (undercapitalisation as a challenge linked to smaller geographic scope) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'] WHERE case_id = 'CASE 3.5.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Finding customers remains a cited challenge for local/regional firms.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

National firms stay within the home country.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Multiple currencies are part of international business conditions.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

A components manufacturer exemplifies large multinational scope with cross-border activity.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Rising multinationals underpin the view of globalisation.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'] WHERE case_id = 'CASE 3.5.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Regional scope is broader than local but remains below national/international reach.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Raising funds is a stated challenge for local/regional businesses.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Confining activity to the home country is national classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Production abroad contributes to international/multinational scope.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Single-town service fits local scope with proximate customers.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'] WHERE case_id = 'CASE 3.5.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Foreign production links exceed national boundaries.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Economic systems differ internationally.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Domestic routing fits national scope unless operating across countries.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Geographic scope and sme size classification are separate concepts.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Export sales cross national boundaries and affect scope labels.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
'] WHERE case_id = 'CASE 3.5.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Regional reach is limited compared with country-wide or cross-border operations.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Country-wide networks reflect national rather than local scope.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Proximate customers define local enterprise markets.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Cultural differences remain relevant in international operations.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Seasonal regional demand illustrates limited customer-base constraints.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 3.5.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

Multiple jurisdictions raise legal compliance burdens internationally.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Saturation concerns nearby customers already served, not population trends alone.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Regional support targets limited-area firms, not multinational classification.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

Limited capital is a stated challenge for local/regional firms.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Multinational operations spread activities and stakeholders across countries.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 3.5.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Cross-border operations widen geographic stakeholder and activity reach.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

National scope still lengthens chains compared with very local producers.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

International operations lengthen supply chains.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Regional seasonal demand fits limited-area customer dependence.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

National logistics extend supply chains beyond local reach.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'] WHERE case_id = 'CASE 3.5.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Translation alone without foreign sales or production does not establish international scope.

In the case setting — a car parts firm produces in two countries and that sells in five — the sentence mislabels the category or overreaches.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Intraprovincial delivery remains regional, not international.

Against the scenario (a car parts firm produces in two countries and that sells in five), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Payment methods do not remove capital constraints on expansion.

Against the scenario (a car parts firm produces in two countries and that sells in five), the claim attaches the wrong label.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition. International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Globalisation highlights rising multinationals, not elimination of national firms.

In the case setting — a car parts firm produces in two countries and that sells in five — the sentence mislabels the category or overreaches.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Limited local demand can saturate when proximate customers are exhausted.

In the case setting — a car parts firm produces in two countries and that sells in five — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'] WHERE case_id = 'CASE 3.5.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Country-wide activity lengthens domestic supply chains.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Regional programmes align with geographically bounded businesses.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Reselling imports domestically differs from producing across countries.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Pairs limited area with customer proximity for local/regional firms.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

Multiple currencies remain a factor across borders.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 3.5.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Economic systems differ internationally alongside legal frameworks.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Scope follows market reach, not registration formalities alone.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

Multinational activity multiplies language and currency management needs.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

Cultural differences are part of international business complexity.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Scope labels depend on where firms make and sell, not a single metric alone.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'] WHERE case_id = 'CASE 3.5.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Globalisation is tied to rising multinationals in the course framework.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

National networks typically lengthen supply chains versus very local vendors.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Regional rivals operate within the same limited area competing for customers.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Limited markets tie to funding and customer-finding challenges.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

National sourcing extends chains compared with local suppliers.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'] WHERE case_id = 'CASE 3.5.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

International scope pairs geographic spread with legal/economic diversity.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

Limited shipping area indicates local/regional rather than global reach.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Dependence on nearby communities indicates local/regional, not global, scope.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Domestic tax on home-country sales fits national scope.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Foreign production partnerships indicate international activity.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
'] WHERE case_id = 'CASE 3.5.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Domestic-only operations align with national scope.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Multiple jurisdictions raise, not reduce, compliance burdens.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

More than one country in production or sales defines international/multinational scope.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

Limited capital is linked to local/regional constraints.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Customer proximity is central to local business definition.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'] WHERE case_id = 'CASE 3.5.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Foreign production alone can establish international/multinational classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

A single contract does not remove structural capital constraints.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

Scope follows business activity geography, not where owners live.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Capital constraints are emphasised for local/regional firms but are not exclusive to them.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

National procurement within one country remains national scope.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'] WHERE case_id = 'CASE 3.5.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Country-wide sourcing lengthens supply chains versus very local vendors.

The scenario (globalisation trends linked to spreading multinational activity) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Sales in multiple countries indicate international/multinational scope.

In the case setting — globalisation trends linked to spreading multinational activity — the sentence mislabels the category or overreaches.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Cross-border sales alone can establish international scope under the make-or-sell test.

In the case setting — globalisation trends linked to spreading multinational activity — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Intra-country regional reach does not equal cross-border international activity.

The scenario (globalisation trends linked to spreading multinational activity) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Links globalisation to the rise of multinationals.

The scenario (globalisation trends linked to spreading multinational activity) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
'] WHERE case_id = 'CASE 3.5.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Undercapitalisation limits outreach for geographically bounded firms.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Occasional tourist purchases do not establish cross-border make-or-sell activity.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

Currency variation is a named factor in international business.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Domestic suppliers alone do not collapse geographic scope distinctions.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Links globalisation to the rise of multinationals.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 3.5.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

National firms operate within the home country without requiring exports.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Cross-border operations add length and complexity to supply chains.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Domestic-only distribution within one country aligns with national classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Local/regional firms can still struggle to find enough customers despite nearby catchments.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Foreign subsidiaries bring varied legal and cultural hr contexts.

Under that classification the assertion describes the situation correctly.

The statement is true.
'] WHERE case_id = 'CASE 3.5.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Ties globalisation to multinational enterprise growth.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Make-or-sell in more than one country suffices; universal presence is not required.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Capital constraints are emphasised for local/regional firms but are not exclusive to them.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Crossing counties within one country remains regional, not international.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Provincial reach within one country is regional, not international.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'] WHERE case_id = 'CASE 3.5.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Contrasts longer national chains with shorter local ones.

The scenario (a components manufacturer expanded abroad and reinvented its business model) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

International activity crosses differing legal and economic frameworks.

In the case setting — a components manufacturer expanded abroad and reinvented its business model — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Geographic scope and enterprise size classification are separate concepts.

In the case setting — a components manufacturer expanded abroad and reinvented its business model — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

A components manufacturer is the course example of cross-border production and sales.

In the case setting — a components manufacturer expanded abroad and reinvented its business model — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Regional rivals share geographically bounded markets.

The scenario (a components manufacturer expanded abroad and reinvented its business model) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'] WHERE case_id = 'CASE 3.5.25' AND tier = 'full';
