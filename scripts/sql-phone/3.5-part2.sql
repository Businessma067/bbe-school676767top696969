-- Update expanded explanations for 3.5-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Production in one country and sales in another indicate international scope.

Applied carefully, "Manufacturing in Austria and selling in Germany satisfies the multinational make-or-sell criterion" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Undercapitalisation constrains growth for geographically focused businesses.

Applied carefully, "Limited capital makes it harder for small-area firms to scale marketing or stock levels" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Globalisation centres on rising cross-border enterprise activity.

Applied carefully, "Globalisation is associated with multinational firms rather than purely local street traders" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'Scope follows customer and operating geography, not owner commuting.

The absolute wording "regardless" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Using imported inputs domestically does not by itself make a firm multinational.

Applied carefully, "National scope excludes routine foreign production even when imports supply raw materials" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.5.26' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Nearby walk-in customers within a small area fit local classification.

Applied carefully, "A district repair shop with walk-in local trade operates at local geographic scope" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Language barriers are part of international business complexity.

Applied carefully, "International firms must manage communication across language differences with customers and staff" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Country-wide domestic sales without foreign markets align with national classification.

Applied carefully, "Selling mobile contracts nationwide within Austria alone fits national scope" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Foreign production partnerships exceed purely national scope.

Applied carefully, "Joint production abroad signals international activity even if finished goods return home" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Seasonal regional tourism reflects bounded customer geography.

Applied carefully, "Regional seasonal hotels depend on visitors drawn from a limited geographic catchment" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.5.27' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Dependence on nearby communities indicates local/regional scope.

Applied carefully, "Local grocers rely on residents and workers living close to the store for most sales" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Country-wide domestic networks align with national classification.

Applied carefully, "National airlines flying domestic routes reflect national operating scope" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Multiple jurisdictions increase international compliance burdens.

Applied carefully, "Compliance with several countries'' regulations raises costs for international operators" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Capital shortage is emphasised for small-area firms yet not limited to them alone.

Applied carefully, "Undercapitalisation is highlighted for local/regional firms but can also constrain ambitious national start-ups" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Scope classification depends on geographic activity, not branding alone.

Applied carefully, "Multinational status follows cross-border make-or-sell activity rather than logo design" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.'] WHERE case_id = 'CASE 3.5.28' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Policy programmes frequently aim at geographically bounded operators.

Applied carefully, "Regional development support often targets firms serving limited local or regional markets" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'National scale lengthens supply chains relative to very local producers.

Applied carefully, "A national manufacturer sourcing nationwide has a longer chain than a town-based workshop" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Culture is among the international factors named.

Applied carefully, "Cultural differences influence management and customer relations in multinational subsidiaries" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Multiple currencies remain in cross-border business.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Foreign sales contribute to international rather than purely domestic scope.

Applied carefully, "Export sales to neighbouring countries cross national boundaries and affect scope labels" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.5.29' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Limited delivery geography indicates local/regional rather than international reach.

Applied carefully, "A firm visible online but shipping only within one city remains local/regional in scope" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Country-wide domestic retail networks reflect national scope.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Intra-country regional branding differs from cross-border operations.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'States national chains are longer than local ones.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'A components manufacturer operates internationally with cross-border production and sales.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.5.30' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Finding enough customers remains a challenge for local/regional firms.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Economic systems vary across countries in international business.

Applied carefully, "International operations require awareness of differing economic systems in each market" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Nearby customer pools can become saturated for local operators.

Applied carefully, "Local market saturation can occur when most proximate customers already purchase from the firm" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Nationwide domestic online sales indicate national scope.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Cultural differences persist internationally despite a common working language.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.5.31' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Customer roaming abroad does not make a domestic operator multinational.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Multiple currencies complicate international transactions.

Applied carefully, "Currency exposure arises when invoicing and receiving payment in more than one monetary unit" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The course connects globalisation to spreading multinational activity.

Applied carefully, "Globalisation and multinational growth are linked trends" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Territory-limited haulage within one country is regional, not international.

Applied carefully, "Regional hauliers confined to one territory do not qualify as multinationals" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Domestic tendering remains national activity.

Applied carefully, "National public procurement within one country does not establish multinational scope" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.5.32' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Foreign production contributes to international/multinational scope.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Make-or-sell logic allows international classification through cross-border sales.

Applied carefully, "International scope can arise from foreign sales alone when domestic production continues at home" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Undercapitalisation can limit local firms even with regular nearby customers.

Applied carefully, "Local cafés may struggle to raise expansion capital despite steady neighbourhood footfall" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Translation without foreign sales or production does not establish international scope.

Applied carefully, "A home-country publisher distributing only domestically fits national scope despite foreign-language titles" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Cross-border operations encounter multiple legal systems.

Applied carefully, "Multinational enterprises coordinate activities across borders under varied legal rules" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.5.33' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['More than one country in make-or-sell suffices for international classification.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Globalisation describes a trend of rising multinationals, not mandatory foreign units.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Motorway routing within one country does not create international scope.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Membership does not remove capital constraints on geographic expansion.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Sales beyond the home country contribute to international classification.

Applied carefully, "Regional exporters shipping to nearby foreign markets cross into international scope" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.5.34' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Multinational activity spreads stakeholders internationally.

Applied carefully, "Stakeholder geography widens when production and sales spread across countries" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Defines globalisation through multinational enterprise growth.

Applied carefully, "Globalisation refers to increasing cross-border business activity led by multinationals" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Country-wide distribution extends domestic supply chains.

Applied carefully, "National distribution networks span the home country and lengthen logistics chains" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Easy physical reach defines local customer proximity.

Applied carefully, "Local enterprises serve customers who chiefly live or work within easy reach of the firm" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Limited catchments compound capital-raising difficulty for local/regional firms.

Applied carefully, "Undercapitalisation makes fund raising harder for firms tied to small geographic markets" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.5.35' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Intraprovincial delivery stays within regional scope.

Applied carefully, "A provincial dairy delivering within one province remains regional rather than multinational" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'Multiple legal systems accompany multi-country operations.

Applied carefully, "Operating in three countries with separate contract laws illustrates international legal complexity" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Domestic store networks without foreign sales fit national scope.

Applied carefully, "National retailers remain national when all stores and sales stay inside the home country" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'International scope combines chain length with legal complexity.

Applied carefully, "International firms face both longer supply chains and diverse legal environments" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Regional identity within one country differs from cross-border operations.

Applied carefully, "Regional branding across neighbouring counties does not equate to multinational scope" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.5.36' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Cross-county service within one country remains regional.

Applied carefully, "Regional tour operators serving neighbouring counties only fit regional geographic scope" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Either cross-border production or sales can establish international scope.

Applied carefully, "Multinational classification requires activity in more than one country through making and/or selling" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Splitting production stages across countries exceeds national boundaries.

Applied carefully, "Cross-border assembly in one country and packaging in another indicates international production scope" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Finding enough customers is a stated challenge for geographically focused firms.

Applied carefully, "Local/regional businesses may find customer numbers insufficient for rapid growth" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'National sourcing extends chains beyond neighbourhood suppliers.

Applied carefully, "National food brands with country-wide sourcing face longer domestic supply chains than corner shops" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.5.37' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Culture joins legal, economic, language, and currency factors internationally.

Applied carefully, "International business crosses cultures as well as legal and economic systems" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Subsidiaries often adapt hr to local legal and cultural conditions.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Cross-border enterprise expansion defines globalisation.

Applied carefully, "Globalisation highlights growth of firms operating beyond a single country" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'National operations typically involve longer chains than very local producers.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Undercapitalisation constrains geographic expansion for small-area firms.

Applied carefully, "Limited capital restricts a local firm''s ability to widen its customer catchment" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.5.38' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The course uses a components manufacturer as a cross-border enterprise example.

Applied carefully, "A components manufacturer demonstrates multinational scope through foreign plants and international customers" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Domestic airport networks reflect national operating scope.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Foreign passport holders visiting a regional hotel do not make the hotel multinational.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Using imported inputs domestically differs from producing abroad.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Domestic-only service plans align with national classification.

Applied carefully, "A telecom restricted to domestic mobile plans within one country fits national scope" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.5.39' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Activity geography determines scope rather than owner residence.

Applied carefully, "Local scope follows where customers are served, not where company directors live" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Country-wide domestic sales exceed local scope despite owner location.

Applied carefully, "Selling nationwide online from one town still indicates national scope rather than local" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'Multinational hr must adapt to country-specific contexts.

Applied carefully, "Foreign subsidiaries subject HR policy to local legal and cultural conditions" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Country-wide domestic logistics align with national classification.

Applied carefully, "National wholesalers routing goods through domestic warehouses operate at national scope" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Seasonality within a limited area reflects regional market limits.

Applied carefully, "Regional seasonal demand shows how customer bases can be geographically bounded" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.5.40' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Local markets centre on proximate customer pools.

Applied carefully, "Local firms compete chiefly for nearby residents and workers as customers" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The course links globalisation to the rise of multinationals.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Multiple legal systems still apply across countries.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Each operating country adds compliance obligations internationally.

Applied carefully, "International compliance grows when a firm must meet rules in each country of operation" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Uniqueness does not prevent nearby customer pools from becoming saturated.

The absolute wording "cannot" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 3.5.41' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Globalisation concerns multinational activity broadly, not factories alone.

Applied carefully, "Globalisation is not limited to manufacturing and applies to cross-border enterprise generally" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Limited funds restrict outreach beyond immediate markets.

Applied carefully, "Undercapitalisation remains a risk when local firms cannot finance wider marketing campaigns" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Regional grants support limited-area firms without establishing cross-border scope.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Territory-bound haulage without cross-border routes is regional.

Applied carefully, "Regional hauliers moving goods within a defined territory stay below international scope" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Foreign manufacturing crosses national boundaries in the make-or-sell framework.

Applied carefully, "Manufacturing abroad while selling at home still involves international production scope" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.5.42' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Overdraft access does not fully remove structural capital constraints.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Domestic route networks fit national classification.

Applied carefully, "National rail freight on domestic routes reflects national operating scope" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Cross-border trade still involves currency conversion and exposure.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Cross-border sales indicate international scope regardless of adjacency.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Country-wide domestic logistics align with national scope.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.5.43' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Foreign production alliances exceed purely national scope.

Applied carefully, "International joint ventures abroad signal cross-border enterprise activity" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Provincial reach within one country fits regional scope, not national country-wide scope alone.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Make-or-sell in more than one country suffices without uniform product lines.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Most revenue from proximate residents indicates local/regional scope.

Applied carefully, "Local grocers depending on nearby residents illustrate customer proximity in local scope" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Language and currency management intensify with cross-border activity.

Applied carefully, "Multinational groups coordinate languages and currencies across border-spanning operations" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.5.44' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Domestic-only tender rules align with national activity.

Applied carefully, "National procurement rules applying within one country support national scope labelling" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Town-limited service fits local classification.

Applied carefully, "Local service radius confined to one town defines local geographic scope" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Pairs globalisation with rising multinationals.

Applied carefully, "Globalisation and multinational expansion are presented as connected developments" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Meaningful export sales beyond the home country affect international classification.

Applied carefully, "Regional exporters with substantial foreign sales cross into international scope" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Currency differences are integral to international trade.

Applied carefully, "Cross-border currency use complicates international pricing and settlement" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.5.45' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Provincial operators draw from bounded regional markets.

Applied carefully, "Regional firms within one province share geographically limited customer pools" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Economic and legal variation accompanies cross-border operations.

Applied carefully, "International firms encounter multiple economic systems alongside legal differences" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Domestic airport networks reflect national geographic reach.

Applied carefully, "National airlines depending on domestic airports operate at national scope" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Local firms continue alongside rising multinationals.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Service firms can operate locally with nearby customers.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.5.46' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Domestic-only tendering within one country remains national scope.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'States international operations lengthen supply chains.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Exhausted proximate demand constrains local expansion.

Applied carefully, "Local market saturation limits growth when nearby demand is largely met" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Cross-border production and sales make a components manufacturer a multinational example.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Regional rivalry within a limited area does not establish international scope.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.5.47' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Stakeholder geography spreads with cross-border enterprise activity.

Applied carefully, "Multinational operations distribute stakeholders across several countries" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Cultural factors apply to international business broadly.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'City-wide delivery may still be local/regional unless sales span the country.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Geographic focus rather than headcount alone links undercapitalisation to local/regional firms.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Capital limits affect geographically bounded firms beyond purely local ones.

Applied carefully, "Undercapitalisation can hinder regional firms seeking to expand beyond their territory" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.5.48' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Foreign production partnerships indicate international activity.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Any meaningful foreign sales contribute to international scope analysis.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Shareholder nationality does not determine geographic operating scope.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Defines globalisation through multinational enterprise growth.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Purely domestic make-and-sell activity aligns with national classification.

Applied carefully, "Selling in the home country only, with no foreign production or sales, fits national scope" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.5.49' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Language differences matter in cross-border customer contact.

Applied carefully, "International scope brings language management needs for customer-facing staff" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Regional support programmes aim at geographically bounded businesses.

Applied carefully, "Regional development grants targeting limited-area firms reflect regional policy focus" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Rising multinationals underpin the course globalisation concept.

Applied carefully, "Globalisation describes increasing multinational presence in the world economy" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Both area and customer proximity define local/regional classification.

Applied carefully, "Local/regional scope combines limited operating area with chiefly nearby customers" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Country-wide activity extends chains beyond local suppliers.

Applied carefully, "National scale lengthens supply chains relative to neighbourhood producers" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.5.50' AND tier = 'full';
