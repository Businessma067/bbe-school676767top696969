-- Update expanded explanations for 3.5-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Local scope is defined by operating area and customer proximity, not sme headcount.

The absolute wording "regardless" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'National scope is confined to the home country, not continental reach.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Funding access and customer reach are cited challenges for geographically focused firms.

Applied carefully, "Local and regional firms often face challenges raising funds and finding enough customers" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Local/regional scope is defined by a restricted operating area and proximate customers.

Applied carefully, "Local and regional businesses typically operate in a limited geographic area with customers nearby" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Regional firms remain within a limited territory, not worldwide.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.5.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Registration does not remove capital constraints noted for local/regional firms.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'National scope confines activity to the home country.

Applied carefully, "A national business operates within its home country rather than across foreign markets" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'Limited capital is linked to local and regional business constraints.

Applied carefully, "Undercapitalisation is a risk particularly associated with smaller geographically focused firms" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Online presence alone does not equal cross-border production or sales.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'National activity lengthens supply chains compared with very local operations.

Applied carefully, "National operations typically involve a longer supply chain than a very local producer" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.5.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Globalisation refers to rising multinational enterprise activity, not all shops.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Cross-border production or sales define international/multinational scope.

Applied carefully, "International or multinational firms make and/or sell in more than one country" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Multiple legal systems apply across countries.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'States national chains are longer than local ones.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Local/regional firms can struggle to find enough customers despite nearby catchments.

The absolute wording "guarantees" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 3.5.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Regional businesses serve a limited area, not global markets.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Globalisation is tied to spreading multinational enterprise activity.

Applied carefully, "Globalisation is described as the rise of multinational enterprises operating across borders" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Nationwide sales indicate national scope despite owner location.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Cultures, languages, and currencies are named complications of international business.

Applied carefully, "International business must cope with different cultures, languages, and currencies" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'International scope brings longer chains plus differing legal and economic frameworks.

Applied carefully, "Operating internationally lengthens the supply chain and crosses legal and economic systems" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.5.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Cross-border production combined with foreign sales exceeds national boundaries.

Applied carefully, "Manufacturing in one country and selling in another indicates international/multinational scope" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Local firms chiefly serve nearby customers within a restricted area.

Applied carefully, "Customer proximity and a limited service area characterise local business scope" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Regional scope remains geographically bounded though broader than a single neighbourhood.

Applied carefully, "Regional businesses still operate within a defined territory rather than worldwide" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'Home-country-only sales align with national classification.

Applied carefully, "Selling only within the home country fits national rather than international scope" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'Making and/or selling in more than one country suffices; both everywhere is not required.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 3.5.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A components manufacturer exemplifies large-scale multinational scope.

Applied carefully, "A components manufacturer operating across countries illustrates a multinational enterprise reinventing its model" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Undercapitalisation limits growth for geographically focused firms.

Applied carefully, "Limited capital can constrain a local firm''s ability to expand beyond its immediate market" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Operating across borders still involves multiple currencies.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Links undercapitalisation chiefly to local/regional business challenges.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Cultures and languages apply to international business generally.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.5.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Domestic resale of imports is not the same as producing abroad.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'International operations cross differing legal frameworks.

Applied carefully, "Multiple legal systems apply when a firm conducts business in several countries" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Languages are among international business complications.

Applied carefully, "Language differences matter for customer contact in international markets" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Globalisation concerns multinational enterprise broadly, not factories alone.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'National scope implies greater supply chain length than local operations.

Applied carefully, "A longer supply chain is typical when sourcing and selling nationally rather than locally" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.'] WHERE case_id = 'CASE 3.5.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Finding customers remains a cited challenge for local/regional firms.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'National firms stay within the home country.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Multiple currencies are part of international business conditions.

Applied carefully, "Currency differences arise when trading across international borders" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'A components manufacturer exemplifies large multinational scope with cross-border activity.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Rising multinationals underpin the view of globalisation.

Applied carefully, "Globalisation reflects more firms producing and selling beyond a single country" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.5.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Regional scope is broader than local but remains below national/international reach.

Applied carefully, "Regional hauliers moving goods within a territory still face geographic limits compared with national networks" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Raising funds is a stated challenge for local/regional businesses.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Confining activity to the home country is national classification.

Applied carefully, "Domestic-only sales and production within one country describe national scope" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Production abroad contributes to international/multinational scope.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Single-town service fits local scope with proximate customers.

Applied carefully, "A plumber serving one town operates locally with nearby customers" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.5.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Foreign production links exceed national boundaries.

Applied carefully, "Cross-border production partnerships indicate international rather than purely national scope" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'Economic systems differ internationally.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Domestic routing fits national scope unless operating across countries.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Geographic scope and sme size classification are separate concepts.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Export sales cross national boundaries and affect scope labels.

The absolute wording "cannot" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 3.5.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Regional reach is limited compared with country-wide or cross-border operations.

Applied carefully, "Regional branding across neighbouring counties remains below national or international scope" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Country-wide networks reflect national rather than local scope.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Proximate customers define local enterprise markets.

Applied carefully, "Local businesses depend heavily on customers in the immediate area" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Cultural differences remain relevant in international operations.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Seasonal regional demand illustrates limited customer-base constraints.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.5.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Multiple jurisdictions raise legal compliance burdens internationally.

Applied carefully, "Compliance costs increase when obeying rules in several countries simultaneously" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Saturation concerns nearby customers already served, not population trends alone.

The absolute wording "impossible" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Regional support targets limited-area firms, not multinational classification.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Limited capital is a stated challenge for local/regional firms.

Applied carefully, "Undercapitalisation can hinder fund raising for firms focused on a small market area" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Multinational operations spread activities and stakeholders across countries.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.5.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Cross-border operations widen geographic stakeholder and activity reach.

Applied carefully, "Multinational operations spread stakeholders and activities across countries" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'National scope still lengthens chains compared with very local producers.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'International operations lengthen supply chains.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Regional seasonal demand fits limited-area customer dependence.

Applied carefully, "Seasonal regional tourism income reflects a geographically limited customer base" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'National logistics extend supply chains beyond local reach.

Applied carefully, "A domestic rail freight network operating nationally has a longer chain than a neighbourhood supplier" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.5.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Translation alone without foreign sales or production does not establish international scope.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Intraprovincial delivery remains regional, not international.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Payment methods do not remove capital constraints on expansion.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Globalisation highlights rising multinationals, not elimination of national firms.

The absolute wording "entirely" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Limited local demand can saturate when proximate customers are exhausted.

Applied carefully, "Local market saturation occurs when most nearby customers are already served" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.5.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Country-wide activity lengthens domestic supply chains.

Applied carefully, "National scale operations extend supply chains across the home country" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Regional programmes align with geographically bounded businesses.

Applied carefully, "Policy support for regional firms often targets limited-area operators" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Reselling imports domestically differs from producing across countries.

Applied carefully, "Importing for domestic resale alone does not by itself make a firm a multinational manufacturer" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Pairs limited area with customer proximity for local/regional firms.

Applied carefully, "Local scope means both limited operating area and chiefly nearby customers" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Multiple currencies remain a factor across borders.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.5.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Economic systems differ internationally alongside legal frameworks.

Applied carefully, "International firms encounter varied economic systems across markets" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Scope follows market reach, not registration formalities alone.

Applied carefully, "A neighbourhood bakery with walk-in local buyers is not national merely because it is registered as a company" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Multinational activity multiplies language and currency management needs.

Applied carefully, "Operating in more than one country increases coordination across languages and currencies" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Cultural differences are part of international business complexity.

Applied carefully, "Cultural awareness matters when managing staff and customers in foreign subsidiaries" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Scope labels depend on where firms make and sell, not a single metric alone.

Applied carefully, "Exporting a minority share while producing domestically may still be national if foreign sales are absent" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.5.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Globalisation is tied to rising multinationals in the course framework.

Applied carefully, "Globalisation. emphasises multinational enterprise growth" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'National networks typically lengthen supply chains versus very local vendors.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Regional rivals operate within the same limited area competing for customers.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Limited markets tie to funding and customer-finding challenges.

Applied carefully, "Regional firms may struggle to fund growth because their customer base stays geographically bounded" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'National sourcing extends chains compared with local suppliers.

Applied carefully, "National retailers sourcing nationwide face longer supply chains than district shops" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.5.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['International scope pairs geographic spread with legal/economic diversity.

Applied carefully, "Multinationals combine cross-border production or sales with complex legal environments" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Limited shipping area indicates local/regional rather than global reach.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Dependence on nearby communities indicates local/regional, not global, scope.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Domestic tax on home-country sales fits national scope.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Foreign production partnerships indicate international activity.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.5.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Domestic-only operations align with national scope.

Applied carefully, "A home-country-only telecom operator fits national rather than multinational classification" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'Multiple jurisdictions raise, not reduce, compliance burdens.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'More than one country in production or sales defines international/multinational scope.

Applied carefully, "International scope requires crossing national borders in making and/or selling goods" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Limited capital is linked to local/regional constraints.

Applied carefully, "Undercapitalisation is cited as a challenge for smaller geographically limited businesses" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Customer proximity is central to local business definition.

Applied carefully, "Local enterprises chiefly compete for customers who live or work nearby" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.5.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Foreign production alone can establish international/multinational classification.

Applied carefully, "A firm that manufactures abroad but sells only at home still crosses into international scope" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'A single contract does not remove structural capital constraints.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Scope follows business activity geography, not where owners live.

Applied carefully, "Geographic scope labels depend on where a firm operates and sells, not owner residence alone" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Capital constraints are emphasised for local/regional firms but are not exclusive to them.

Applied carefully, "Undercapitalisation can also affect national firms seeking rapid nationwide expansion" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'National procurement within one country remains national scope.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.5.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Country-wide sourcing lengthens supply chains versus very local vendors.

Applied carefully, "National wholesalers coordinating suppliers across the home country face longer chains than street vendors" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Sales in multiple countries indicate international/multinational scope.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Cross-border sales alone can establish international scope under the make-or-sell test.

Applied carefully, "Selling in two countries qualifies as international even if production stays entirely domestic" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Intra-country regional reach does not equal cross-border international activity.

Applied carefully, "Regional delivery across several counties within one country remains below international scope" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Links globalisation to the rise of multinationals.

Applied carefully, "Globalisation describes a trend toward more cross-border enterprise activity" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.5.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Undercapitalisation limits outreach for geographically bounded firms.

Applied carefully, "Local/regional firms may lack funds to invest in marketing beyond their immediate catchment area" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Occasional tourist purchases do not establish cross-border make-or-sell activity.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Currency variation is a named factor in international business.

Applied carefully, "Different currencies complicate pricing and payment for firms trading across borders" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Domestic suppliers alone do not collapse geographic scope distinctions.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Links globalisation to the rise of multinationals.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.5.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['National firms operate within the home country without requiring exports.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Cross-border operations add length and complexity to supply chains.

Applied carefully, "International supply chains typically extend further than national domestic networks" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Domestic-only distribution within one country aligns with national classification.

Applied carefully, "A national food brand distributing only domestically fits national rather than multinational scope" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'Local/regional firms can still struggle to find enough customers despite nearby catchments.

Applied carefully, "Proximity of customers does not remove the need to compete for sales in local markets" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Foreign subsidiaries bring varied legal and cultural hr contexts.

Applied carefully, "Multinational groups must reconcile HR practices across subsidiaries in different legal environments" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.5.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Ties globalisation to multinational enterprise growth.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Make-or-sell in more than one country suffices; universal presence is not required.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Capital constraints are emphasised for local/regional firms but are not exclusive to them.

The absolute wording "exclusively" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Crossing counties within one country remains regional, not international.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Provincial reach within one country is regional, not international.

Applied carefully, "A regional brewery selling across one province but not abroad fits regional scope" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.5.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Contrasts longer national chains with shorter local ones.

Applied carefully, "Operating nationally implies a longer supply chain than serving one neighbourhood" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'International activity crosses differing legal and economic frameworks.

Applied carefully, "Cross-border sales expose a firm to multiple legal and economic systems" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Geographic scope and enterprise size classification are separate concepts.

Applied carefully, "Local scope is not determined by EU SME headcount thresholds" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'A components manufacturer is the course example of cross-border production and sales.

Applied carefully, "A components manufacturer illustrates how a firm can operate as a multinational with plants and customers abroad" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Regional rivals share geographically bounded markets.

Applied carefully, "Regional firms compete for customers within the same limited territory" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.5.25' AND tier = 'full';
