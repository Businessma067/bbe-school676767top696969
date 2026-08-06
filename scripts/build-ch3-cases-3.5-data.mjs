/**
 * Build scripts/ch3-cases-3.5-data.mjs — 50 FC cases for Fuhrmann Ch3 §3.5
 */
import fs from "node:fs";
import path from "node:path";
import { numSynonymKey } from "./ch3-fc-style-lock.mjs";

const OUT = path.join(import.meta.dirname, "ch3-cases-3.5-data.mjs");
const FORBIDDEN = /\b(automatically|never|zero|always)\b/i;
const BANNED = /\bthe book\b|\bFuhrmann\b|\(alt\s/i;

function pad(n) {
  return String(n).padStart(2, "0");
}

function countTrues(key) {
  return key.filter(Boolean).length;
}

function shuffle(arr, seed) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = (seed * 17 + i * 31) % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const TRUE_COUNTS = shuffle(
  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
  35,
);

const LIFE_NUMS = new Set([1, 2, 3, 4, 6, 7, 14, 21, 25, 31, 35, 40, 43]);

const titles = [
  "Local bakery scope", "Regional supplier reach", "National retailer chain", "AT&S multinational scope",
  "Local customer proximity", "Regional funding challenge", "Undercapitalisation risk", "National supply chain length",
  "International legal complexity", "Globalisation definition", "Local versus national trap", "Regional market limits",
  "National home country focus", "Multinational production", "Currency exposure abroad", "Cultural differences trade",
  "Language barriers commerce", "Local undercapitalisation myth", "National longer chain", "International sales only",
  "Globalisation multinationals", "Regional customer base", "Local area definition", "National boundary trade",
  "Multinational reinvented firm", "Local fund raising", "Regional competitor pressure", "National distribution network",
  "Cross-border manufacturing", "Globalisation rise trend", "Local service radius", "Regional logistics limits",
  "National procurement rules", "International joint venture", "Local community reliance", "Regional brand recognition",
  "National tax jurisdiction", "Multinational HR policies", "Local versus global trap", "Regional export share",
  "National single market", "International compliance cost", "Local capital constraints", "Regional seasonal demand",
  "National carrier dependency", "Multinational stakeholder spread", "Local market saturation", "Regional policy support",
  "National scale advantage", "International scope exam synthesis",
];

const contexts = [
  "A neighbourhood bakery serves walk-in customers within one district; assess geographic scope claims:",
  "A regional dairy delivers to shops across one province; evaluate local, regional, and national labels:",
  "A home-country supermarket chain sources nationally but sells only domestically; assess scope statements:",
  "AT&S manufactures and sells across several countries; evaluate multinational classification claims:",
  "Assess what defines a local or regional business by customer and operating area:",
  "A regional craft firm struggles to raise funds and find customers; evaluate characteristic claims:",
  "Assess undercapitalisation as a challenge linked to smaller geographic scope:",
  "Compare supply chain length for a national manufacturer versus a local workshop:",
  "A firm sells in three countries with differing contract laws; assess international business claims:",
  "Evaluate globalisation as described through the rise of multinational enterprises:",
  "A shop sells nationwide online but is described as local because owners live nearby; assess:",
  "A regional tour operator serves holidaymakers across neighbouring counties only; assess scope:",
  "A publisher prints and distributes exclusively within its home country; assess national scope:",
  "A car parts firm produces in two countries and sells in five; assess multinational claims:",
  "An exporter invoices in euros and dollars across borders; assess international operation claims:",
  "Staff manage teams across cultures in multiple subsidiaries; assess international business features:",
  "Customer support handles queries in four languages across markets; assess scope implications:",
  "Assess whether undercapitalisation affects only local firms and not national ones:",
  "A national food brand sources ingredients through a longer domestic supply chain; assess:",
  "A firm imports finished goods for domestic resale without foreign production; assess international label:",
  "Assess globalisation trends linked to spreading multinational activity:",
  "A furniture maker sells chiefly to buyers within a two-hour drive; assess geographic scope:",
  "Define local business scope using operating area and customer proximity:",
  "A telecom sells mobile plans only within one country's borders; assess national classification:",
  "AT&S expanded abroad and reinvented its business model; assess as a multinational example:",
  "A local café owner struggles to fund expansion beyond the high street; assess capital claims:",
  "Regional retailers face rivals in nearby towns within the same area; assess competitive scope:",
  "A national wholesaler routes goods through warehouses across the home country; assess:",
  "Components are assembled in one country and packaged in another for export; assess:",
  "Evaluate whether globalisation chiefly means more firms operating across borders:",
  "A plumber serves households within one town only; assess local scope claims:",
  "Regional hauliers move goods within a defined territory but not abroad; assess:",
  "Public tenders restrict bidders to national registered firms; assess national scope link:",
  "Two firms from different countries form a production alliance abroad; assess international claims:",
  "A local grocer depends on nearby residents for most revenue; assess local business traits:",
  "A brewery brands itself across one region but not nationally; assess regional scope:",
  "Corporate tax is paid only in the home country while all sales stay domestic; assess:",
  "HR policies differ by subsidiary country in a group with foreign plants; assess:",
  "A student labels any online shop as global regardless of sales geography; assess:",
  "A regional exporter sends forty percent of output to neighbouring countries; assess scope mix:",
  "A rail operator carries freight nationwide on domestic routes only; assess:",
  "Legal compliance costs rise when operating under multiple countries' rules; assess:",
  "Limited capital makes it harder for a local firm to expand its market area; assess:",
  "A seaside hotel relies on regional seasonal visitors; assess geographic scope:",
  "A national airline depends on domestic airports though it faces international rivals; assess:",
  "Stakeholders spread across countries when a firm operates multinationally; assess related scope point:",
  "A local market becomes saturated when most nearby customers already buy; assess:",
  "Regional development grants target firms serving limited areas; assess policy link:",
  "National scale can lengthen the supply chain compared with a local producer; assess:",
  "Synthesise local, regional, national, and international scope distinctions for exam review:",
];

const difficulties = [
  "2/5", "3/5", "3/5", "2/5", "2/5", "4/5", "4/5", "3/5", "4/5", "2/5",
  "5/5", "3/5", "2/5", "3/5", "4/5", "4/5", "3/5", "5/5", "3/5", "5/5",
  "2/5", "2/5", "2/5", "2/5", "2/5", "3/5", "3/5", "3/5", "4/5", "2/5",
  "1/5", "3/5", "3/5", "4/5", "2/5", "3/5", "3/5", "4/5", "5/5", "4/5",
  "3/5", "4/5", "3/5", "3/5", "3/5", "3/5", "3/5", "3/5", "3/5", "1/5",
];

const truths = [
  ["Local and regional businesses typically operate in a limited geographic area with customers nearby.", "Local/regional scope is defined by a restricted operating area and proximate customers."],
  ["Local and regional firms often face challenges raising funds and finding enough customers.", "Funding access and customer reach are cited challenges for geographically focused firms."],
  ["Undercapitalisation is a risk particularly associated with smaller geographically focused firms.", "Limited capital is linked to local and regional business constraints."],
  ["A national business operates within its home country rather than across foreign markets.", "National scope confines activity to the home country."],
  ["National operations typically involve a longer supply chain than a very local producer.", "National activity lengthens supply chains compared with very local operations."],
  ["International or multinational firms make and/or sell in more than one country.", "Cross-border production or sales define international/multinational scope."],
  ["Operating internationally lengthens the supply chain and crosses legal and economic systems.", "International scope brings longer chains plus differing legal and economic frameworks."],
  ["International business must cope with different cultures, languages, and currencies.", "Cultures, languages, and currencies are named complications of international business."],
  ["Globalisation is described as the rise of multinational enterprises operating across borders.", "Globalisation is tied to spreading multinational enterprise activity."],
  ["Selling only within the home country fits national rather than international scope.", "Home-country-only sales align with national classification."],
  ["Manufacturing in one country and selling in another indicates international/multinational scope.", "Cross-border production combined with foreign sales exceeds national boundaries."],
  ["Customer proximity and a limited service area characterise local business scope.", "Local firms chiefly serve nearby customers within a restricted area."],
  ["Regional businesses still operate within a defined territory rather than worldwide.", "Regional scope remains geographically bounded though broader than a single neighbourhood."],
  ["AT&S operating across countries illustrates a multinational enterprise reinventing its model.", "AT&S exemplifies large-scale multinational scope in Fuhrmann Ch3."],
  ["Limited capital can constrain a local firm's ability to expand beyond its immediate market.", "Undercapitalisation limits growth for geographically focused firms."],
  ["Multiple legal systems apply when a firm conducts business in several countries.", "International operations cross differing legal frameworks."],
  ["Language differences matter for customer contact in international markets.", "Languages are among international business complications."],
  ["A longer supply chain is typical when sourcing and selling nationally rather than locally.", "National scope implies greater supply chain length than local operations."],
  ["Currency differences arise when trading across international borders.", "Multiple currencies are part of international business conditions."],
  ["Globalisation reflects more firms producing and selling beyond a single country.", "Rising multinationals underpin the Fuhrmann Ch3 view of globalisation."],
  ["A plumber serving one town operates locally with nearby customers.", "Single-town service fits local scope with proximate customers."],
  ["Regional hauliers moving goods within a territory still face geographic limits compared with national networks.", "Regional scope is broader than local but remains below national/international reach."],
  ["Domestic-only sales and production within one country describe national scope.", "Confining activity to the home country is national classification."],
  ["Cross-border production partnerships indicate international rather than purely national scope.", "Foreign production links exceed national boundaries."],
  ["Local businesses depend heavily on customers in the immediate area.", "Proximate customers define local enterprise markets."],
  ["Regional branding across neighbouring counties remains below national or international scope.", "Regional reach is limited compared with country-wide or cross-border operations."],
  ["Compliance costs increase when obeying rules in several countries simultaneously.", "Multiple jurisdictions raise legal compliance burdens internationally."],
  ["Undercapitalisation can hinder fund raising for firms focused on a small market area.", "Limited capital is a stated challenge for local/regional firms."],
  ["Seasonal regional tourism income reflects a geographically limited customer base.", "Regional seasonal demand fits limited-area customer dependence."],
  ["A domestic rail freight network operating nationally has a longer chain than a neighbourhood supplier.", "National logistics extend supply chains beyond local reach."],
  ["Multinational operations spread stakeholders and activities across countries.", "Cross-border operations widen geographic stakeholder and activity reach."],
  ["Local market saturation occurs when most nearby customers are already served.", "Limited local demand can saturate when proximate customers are exhausted."],
  ["Policy support for regional firms often targets limited-area operators.", "Regional programmes align with geographically bounded businesses."],
  ["National scale operations extend supply chains across the home country.", "Country-wide activity lengthens domestic supply chains."],
  ["Local scope means both limited operating area and chiefly nearby customers.", "Fuhrmann Ch3 pairs limited area with customer proximity for local/regional firms."],
  ["Importing for domestic resale alone does not by itself make a firm a multinational manufacturer.", "Reselling imports domestically differs from producing across countries."],
  ["International firms encounter varied economic systems across markets.", "Economic systems differ internationally alongside legal frameworks."],
  ["Cultural awareness matters when managing staff and customers in foreign subsidiaries.", "Cultural differences are part of international business complexity."],
  ["A neighbourhood bakery with walk-in local buyers is not national merely because it is registered as a company.", "Scope follows market reach, not registration formalities alone."],
  ["Exporting a minority share while producing domestically may still be national if foreign sales are absent.", "Scope labels depend on where firms make and sell, not a single metric alone."],
  ["Operating in more than one country increases coordination across languages and currencies.", "Multinational activity multiplies language and currency management needs."],
  ["Regional firms may struggle to fund growth because their customer base stays geographically bounded.", "Limited markets tie to funding and customer-finding challenges."],
  ["Globalisation in Fuhrmann Ch3 emphasises multinational enterprise growth.", "Globalisation is tied to rising multinationals in the chapter framework."],
  ["National retailers sourcing nationwide face longer supply chains than district shops.", "National sourcing extends chains compared with local suppliers."],
  ["Multinationals combine cross-border production or sales with complex legal environments.", "International scope pairs geographic spread with legal/economic diversity."],
  ["Local enterprises chiefly compete for customers who live or work nearby.", "Customer proximity is central to local business definition."],
  ["International scope requires crossing national borders in making and/or selling goods.", "More than one country in production or sales defines international/multinational scope."],
  ["Undercapitalisation is cited as a challenge for smaller geographically limited businesses.", "Limited capital is linked to local/regional constraints in Fuhrmann Ch3."],
  ["A home-country-only telecom operator fits national rather than multinational classification.", "Domestic-only operations align with national scope."],
  ["Geographic scope labels depend on where a firm operates and sells, not owner residence alone.", "Scope follows business activity geography, not where owners live."],
  ["Undercapitalisation can also affect national firms seeking rapid nationwide expansion.", "Capital constraints are emphasised for local/regional firms but are not exclusive to them."],
  ["A firm that manufactures abroad but sells only at home still crosses into international scope.", "Foreign production alone can establish international/multinational classification."],
  ["Regional delivery across several counties within one country remains below international scope.", "Intra-country regional reach does not equal cross-border international activity."],
  ["National wholesalers coordinating suppliers across the home country face longer chains than street vendors.", "Country-wide sourcing lengthens supply chains versus very local vendors."],
  ["Selling in two countries qualifies as international even if production stays entirely domestic.", "Cross-border sales alone can establish international scope under the make-or-sell test."],
  ["Globalisation describes a trend toward more cross-border enterprise activity.", "Fuhrmann Ch3 links globalisation to the rise of multinationals."],
  ["Local/regional firms may lack funds to invest in marketing beyond their immediate catchment area.", "Undercapitalisation limits outreach for geographically bounded firms."],
  ["Different currencies complicate pricing and payment for firms trading across borders.", "Currency variation is a named factor in international business."],
  ["A national food brand distributing only domestically fits national rather than multinational scope.", "Domestic-only distribution within one country aligns with national classification."],
  ["Multinational groups must reconcile HR practices across subsidiaries in different legal environments.", "Foreign subsidiaries bring varied legal and cultural HR contexts."],
  ["Proximity of customers does not remove the need to compete for sales in local markets.", "Local/regional firms can still struggle to find enough customers despite nearby catchments."],
  ["International supply chains typically extend further than national domestic networks.", "Cross-border operations add length and complexity to supply chains."],
  ["A regional brewery selling across one province but not abroad fits regional scope.", "Provincial reach within one country is regional, not international."],
  ["AT&S illustrates how a firm can operate as a multinational with plants and customers abroad.", "AT&S is the chapter example of cross-border production and sales."],
  ["Local scope is not determined by EU SME headcount thresholds.", "Geographic scope and enterprise size classification are separate concepts."],
  ["Operating nationally implies a longer supply chain than serving one neighbourhood.", "Fuhrmann Ch3 contrasts longer national chains with shorter local ones."],
  ["Cross-border sales expose a firm to multiple legal and economic systems.", "International activity crosses differing legal and economic frameworks."],
  ["Regional firms compete for customers within the same limited territory.", "Regional rivals share geographically bounded markets."],
  ["Globalisation is associated with multinational firms rather than purely local street traders.", "Globalisation centres on rising cross-border enterprise activity."],
  ["Limited capital makes it harder for small-area firms to scale marketing or stock levels.", "Undercapitalisation constrains growth for geographically focused businesses."],
  ["Manufacturing in Austria and selling in Germany satisfies the multinational make-or-sell criterion.", "Production in one country and sales in another indicate international scope."],
  ["National scope excludes routine foreign production even when imports supply raw materials.", "Using imported inputs domestically does not by itself make a firm multinational."],
  ["International firms must manage communication across language differences with customers and staff.", "Language barriers are part of international business complexity."],
  ["A district repair shop with walk-in local trade operates at local geographic scope.", "Nearby walk-in customers within a small area fit local classification."],
  ["Regional seasonal hotels depend on visitors drawn from a limited geographic catchment.", "Seasonal regional tourism reflects bounded customer geography."],
  ["Selling mobile contracts nationwide within Austria alone fits national scope.", "Country-wide domestic sales without foreign markets align with national classification."],
  ["Joint production abroad signals international activity even if finished goods return home.", "Foreign production partnerships exceed purely national scope."],
  ["Local grocers rely on residents and workers living close to the store for most sales.", "Dependence on nearby communities indicates local/regional scope."],
  ["Multinational status follows cross-border make-or-sell activity rather than logo design.", "Scope classification depends on geographic activity, not branding alone."],
  ["National airlines flying domestic routes reflect national operating scope.", "Country-wide domestic networks align with national classification."],
  ["Compliance with several countries' regulations raises costs for international operators.", "Multiple jurisdictions increase international compliance burdens."],
  ["Undercapitalisation is highlighted for local/regional firms but can also constrain ambitious national start-ups.", "Capital shortage is emphasised for small-area firms yet not limited to them alone."],
  ["Export sales to neighbouring countries cross national boundaries and affect scope labels.", "Foreign sales contribute to international rather than purely domestic scope."],
  ["Regional development support often targets firms serving limited local or regional markets.", "Policy programmes frequently aim at geographically bounded operators."],
  ["A national manufacturer sourcing nationwide has a longer chain than a town-based workshop.", "National scale lengthens supply chains relative to very local producers."],
  ["Cultural differences influence management and customer relations in multinational subsidiaries.", "Culture is among the international factors named in Fuhrmann Ch3."],
  ["A firm visible online but shipping only within one city remains local/regional in scope.", "Limited delivery geography indicates local/regional rather than international reach."],
  ["International operations require awareness of differing economic systems in each market.", "Economic systems vary across countries in international business."],
  ["Local market saturation can occur when most proximate customers already purchase from the firm.", "Nearby customer pools can become saturated for local operators."],
  ["Globalisation and multinational growth are linked trends in Fuhrmann Ch3.", "The chapter connects globalisation to spreading multinational activity."],
  ["Regional hauliers confined to one territory do not qualify as multinationals.", "Territory-limited haulage within one country is regional, not international."],
  ["National public procurement within one country does not establish multinational scope.", "Domestic tendering remains national activity."],
  ["Currency exposure arises when invoicing and receiving payment in more than one monetary unit.", "Multiple currencies complicate international transactions."],
  ["A home-country publisher distributing only domestically fits national scope despite foreign-language titles.", "Translation without foreign sales or production does not establish international scope."],
  ["Multinational enterprises coordinate activities across borders under varied legal rules.", "Cross-border operations encounter multiple legal systems."],
  ["Local cafés may struggle to raise expansion capital despite steady neighbourhood footfall.", "Undercapitalisation can limit local firms even with regular nearby customers."],
  ["International scope can arise from foreign sales alone when domestic production continues at home.", "Make-or-sell logic allows international classification through cross-border sales."],
  ["Regional exporters shipping to nearby foreign markets cross into international scope.", "Sales beyond the home country contribute to international classification."],
  ["National distribution networks span the home country and lengthen logistics chains.", "Country-wide distribution extends domestic supply chains."],
  ["Stakeholder geography widens when production and sales spread across countries.", "Multinational activity spreads stakeholders internationally."],
  ["Local enterprises serve customers who chiefly live or work within easy reach of the firm.", "Easy physical reach defines local customer proximity."],
  ["Globalisation refers to increasing cross-border business activity led by multinationals.", "Fuhrmann Ch3 defines globalisation through multinational enterprise growth."],
  ["Undercapitalisation makes fund raising harder for firms tied to small geographic markets.", "Limited catchments compound capital-raising difficulty for local/regional firms."],
  ["A provincial dairy delivering within one province remains regional rather than multinational.", "Intraprovincial delivery stays within regional scope."],
  ["International firms face both longer supply chains and diverse legal environments.", "International scope combines chain length with legal complexity."],
  ["National retailers remain national when all stores and sales stay inside the home country.", "Domestic store networks without foreign sales fit national scope."],
  ["Regional branding across neighbouring counties does not equate to multinational scope.", "Regional identity within one country differs from cross-border operations."],
  ["Operating in three countries with separate contract laws illustrates international legal complexity.", "Multiple legal systems accompany multi-country operations."],
  ["Local/regional businesses may find customer numbers insufficient for rapid growth.", "Finding enough customers is a stated challenge for geographically focused firms."],
  ["Cross-border assembly in one country and packaging in another indicates international production scope.", "Splitting production stages across countries exceeds national boundaries."],
  ["National food brands with country-wide sourcing face longer domestic supply chains than corner shops.", "National sourcing extends chains beyond neighbourhood suppliers."],
  ["Multinational classification requires activity in more than one country through making and/or selling.", "Either cross-border production or sales can establish international scope."],
  ["Regional tour operators serving neighbouring counties only fit regional geographic scope.", "Cross-county service within one country remains regional."],
  ["Globalisation highlights growth of firms operating beyond a single country.", "Cross-border enterprise expansion defines globalisation in Fuhrmann Ch3."],
  ["Limited capital restricts a local firm's ability to widen its customer catchment.", "Undercapitalisation constrains geographic expansion for small-area firms."],
  ["International business crosses cultures as well as legal and economic systems.", "Culture joins legal, economic, language, and currency factors internationally."],
  ["A telecom restricted to domestic mobile plans within one country fits national scope.", "Domestic-only service plans align with national classification."],
  ["AT&S demonstrates multinational scope through foreign plants and international customers.", "The chapter uses AT&S as a cross-border enterprise example."],
  ["Local scope follows where customers are served, not where company directors live.", "Activity geography determines scope rather than owner residence."],
  ["National wholesalers routing goods through domestic warehouses operate at national scope.", "Country-wide domestic logistics align with national classification."],
  ["Selling nationwide online from one town still indicates national scope rather than local.", "Country-wide domestic sales exceed local scope despite owner location."],
  ["Foreign subsidiaries subject HR policy to local legal and cultural conditions.", "Multinational HR must adapt to country-specific contexts."],
  ["Regional seasonal demand shows how customer bases can be geographically bounded.", "Seasonality within a limited area reflects regional market limits."],
  ["International compliance grows when a firm must meet rules in each country of operation.", "Each operating country adds compliance obligations internationally."],
  ["Local firms compete chiefly for nearby residents and workers as customers.", "Local markets centre on proximate customer pools."],
  ["Globalisation is not limited to manufacturing and applies to cross-border enterprise generally.", "Globalisation concerns multinational activity broadly, not factories alone."],
  ["Undercapitalisation remains a risk when local firms cannot finance wider marketing campaigns.", "Limited funds restrict outreach beyond immediate markets."],
  ["Manufacturing abroad while selling at home still involves international production scope.", "Foreign manufacturing crosses national boundaries in the make-or-sell framework."],
  ["Regional hauliers moving goods within a defined territory stay below international scope.", "Territory-bound haulage without cross-border routes is regional."],
  ["National rail freight on domestic routes reflects national operating scope.", "Domestic route networks fit national classification."],
  ["Multinational groups coordinate languages and currencies across border-spanning operations.", "Language and currency management intensify with cross-border activity."],
  ["Local grocers depending on nearby residents illustrate customer proximity in local scope.", "Most revenue from proximate residents indicates local/regional scope."],
  ["International joint ventures abroad signal cross-border enterprise activity.", "Foreign production alliances exceed purely national scope."],
  ["Regional exporters with substantial foreign sales cross into international scope.", "Meaningful export sales beyond the home country affect international classification."],
  ["National procurement rules applying within one country support national scope labelling.", "Domestic-only tender rules align with national activity."],
  ["Globalisation and multinational expansion are presented as connected developments.", "Fuhrmann Ch3 pairs globalisation with rising multinationals."],
  ["Local service radius confined to one town defines local geographic scope.", "Town-limited service fits local classification."],
  ["Cross-border currency use complicates international pricing and settlement.", "Currency differences are integral to international trade."],
  ["Regional firms within one province share geographically limited customer pools.", "Provincial operators draw from bounded regional markets."],
  ["National airlines depending on domestic airports operate at national scope.", "Domestic airport networks reflect national geographic reach."],
  ["International firms encounter multiple economic systems alongside legal differences.", "Economic and legal variation accompanies cross-border operations."],
  ["Local market saturation limits growth when nearby demand is largely met.", "Exhausted proximate demand constrains local expansion."],
  ["Multinational operations distribute stakeholders across several countries.", "Stakeholder geography spreads with cross-border enterprise activity."],
  ["Undercapitalisation can hinder regional firms seeking to expand beyond their territory.", "Capital limits affect geographically bounded firms beyond purely local ones."],
  ["Selling in the home country only, with no foreign production or sales, fits national scope.", "Purely domestic make-and-sell activity aligns with national classification."],
  ["Globalisation describes increasing multinational presence in the world economy.", "Rising multinationals underpin the chapter's globalisation concept."],
  ["Regional development grants targeting limited-area firms reflect regional policy focus.", "Regional support programmes aim at geographically bounded businesses."],
  ["International scope brings language management needs for customer-facing staff.", "Language differences matter in cross-border customer contact."],
  ["Local/regional scope combines limited operating area with chiefly nearby customers.", "Both area and customer proximity define local/regional classification."],
  ["National scale lengthens supply chains relative to neighbourhood producers.", "Country-wide activity extends chains beyond local suppliers."],
  ["AT&S cross-border plants and sales illustrate multinational enterprise scope.", "AT&S embodies international make-and-sell activity in Fuhrmann Ch3."],
  ["Importing finished goods for domestic resale without foreign production stays national for manufacturing scope.", "Domestic resale of imports differs from producing abroad."],
  ["Regional competitors operate within the same limited geographic market.", "Regional rivalry occurs among firms sharing bounded territories."],
  ["International legal complexity grows with each additional country of operation.", "More operating countries mean more legal systems to navigate."],
  ["Local cafés may remain undercapitalised despite accepting card payments from customers.", "Payment methods do not remove capital constraints on expansion."],
  ["Cross-border sales in euros and dollars illustrate currency factors in international business.", "Multiple invoicing currencies reflect international conditions."],
  ["Regional breweries branding across one region but not nationally fit regional scope.", "Intra-country regional branding remains below national reach."],
  ["Multinational HR policies vary by subsidiary to comply with local rules and culture.", "Country-specific HR adaptation accompanies multinational operations."],
  ["Local versus national scope depends on geographic reach of sales, not owner residence.", "Nationwide domestic sales exceed local scope even if owners stay in one town."],
  ["Globalisation trend reflects more enterprises making or selling across borders.", "Cross-border make-or-sell activity underpins globalisation in Fuhrmann Ch3."],
  ["Undercapitalisation is a characteristic challenge for many local and regional businesses.", "Limited capital is prominently linked to geographically focused firms."],
  ["National food brands with extended domestic sourcing networks have longer chains than district shops.", "Extended domestic sourcing lengthens national supply chains."],
  ["International operations require navigating cultures, languages, currencies, and legal systems.", "Fuhrmann Ch3 lists multiple cross-border complication factors together."],
  ["A plumber limited to one town serves customers at local geographic scope.", "Town-only service with nearby households fits local classification."],
  ["Regional hauliers not crossing international borders remain at regional scope.", "Domestic territory haulage without foreign routes is regional."],
  ["Public tenders limited to nationally registered bidders reflect national market scope.", "Domestic procurement rules align with national activity."],
  ["Joint ventures producing abroad indicate international enterprise activity.", "Foreign production partnerships signal cross-border scope."],
  ["Local community reliance for revenue indicates local/regional rather than multinational scope.", "Dependence on nearby communities fits geographically limited scope."],
  ["Corporate tax paid only at home on domestic sales fits national operating scope.", "Home-country tax on domestic sales aligns with national activity."],
  ["Online visibility without cross-border sales does not establish multinational scope.", "Web presence alone does not equal international make-or-sell activity."],
  ["Regional export shares sent to neighbouring countries contribute to international classification.", "Foreign sales beyond the home country affect scope labels."],
  ["National rail operators on domestic-only routes reflect national geographic scope.", "Domestic freight routing fits national classification."],
  ["Compliance costs rise when simultaneous rules from several countries must be met.", "Multi-country compliance increases international cost burdens."],
  ["Limited capital restricts local firms from expanding beyond their immediate market area.", "Undercapitalisation limits geographic expansion for small-area operators."],
  ["Seaside hotels relying on regional seasonal visitors show bounded customer geography.", "Seasonal regional visitors reflect limited catchment areas."],
  ["National airlines using domestic airports operate nationally despite international competition.", "Domestic airport dependence reflects national operating scope."],
  ["Stakeholder spread across countries accompanies multinational enterprise activity.", "Cross-border operations widen stakeholder geography."],
  ["Local saturation occurs when most nearby buyers already purchase from the firm.", "Proximate customer pools can become saturated locally."],
  ["Regional policy support often focuses on firms serving limited geographic markets.", "Regional grants target bounded-area operators."],
  ["National manufacturers typically face longer supply chains than very local workshops.", "National scale extends supply chains beyond neighbourhood producers."],
  ["Synthesis: local/regional scope uses limited area plus nearby customers as defining traits.", "Fuhrmann Ch3 defines local/regional scope through area and customer proximity."],
  ["Synthesis: national scope confines make-and-sell activity to the home country.", "National classification requires home-country-bound operations."],
  ["Synthesis: international/multinational scope requires making and/or selling in more than one country.", "Cross-border make-or-sell defines international/multinational scope."],
  ["Synthesis: globalisation is linked to the rise of multinational enterprises.", "Globalisation and multinational growth are connected in Fuhrmann Ch3."],
  ["Synthesis: international business faces longer chains plus legal, economic, cultural, language, and currency differences.", "Fuhrmann Ch3 bundles multiple cross-border complication factors."],
];

const falses = [
  ["A firm is local only if it employs fewer than ten people regardless of customer location.", "Local scope is defined by operating area and customer proximity, not SME headcount."],
  ["Regional businesses operate worldwide but with smaller marketing budgets than multinationals.", "Regional firms remain within a limited territory, not worldwide."],
  ["National businesses sell in every country on the same continent by definition.", "National scope is confined to the home country, not continental reach."],
  ["A website visible abroad makes a firm multinational even without cross-border sales.", "Online presence alone does not equal cross-border production or sales."],
  ["Undercapitalisation is unknown among local firms once they register for VAT.", "Registration does not remove capital constraints noted for local/regional firms."],
  ["Local businesses face no difficulty finding customers because proximity guarantees demand.", "Local/regional firms can struggle to find enough customers despite nearby catchments."],
  ["National supply chains are shorter than local ones because transport is faster domestically.", "Fuhrmann Ch3 states national chains are longer than local ones."],
  ["International business uses one legal system worldwide so compliance is uniform.", "Multiple legal systems apply across countries."],
  ["Globalisation means every small shop becomes a multinational overnight.", "Globalisation refers to rising multinational enterprise activity, not all shops."],
  ["Selling nationwide while owners stay in one town makes the business local by residence.", "Nationwide sales indicate national scope despite owner location."],
  ["Regional scope allows unlimited customers anywhere on the globe.", "Regional businesses serve a limited area, not global markets."],
  ["A multinational must produce in every country where it sells by definition in Fuhrmann Ch3.", "Making and/or selling in more than one country suffices; both everywhere is not required."],
  ["Currency differences disappear once a firm opens a foreign bank account.", "Operating across borders still involves multiple currencies."],
  ["Culture and language differences matter only to tourist shops, not to manufacturers.", "Cultures and languages apply to international business generally."],
  ["Undercapitalisation affects only multinational firms building foreign factories.", "Fuhrmann Ch3 links undercapitalisation chiefly to local/regional business challenges."],
  ["Importing finished goods for domestic resale makes a firm a manufacturer in two countries.", "Domestic resale of imports is not the same as producing abroad."],
  ["Globalisation excludes service firms and applies only to factories.", "Globalisation concerns multinational enterprise broadly, not factories alone."],
  ["Proximity to customers removes any need to seek sales for local firms.", "Finding customers remains a cited challenge for local/regional firms."],
  ["National businesses operate in more than one country as long as they use domestic currency.", "National firms stay within the home country."],
  ["AT&S is a local enterprise because its first plant was in one town.", "AT&S exemplifies large multinational scope with cross-border activity."],
  ["Regional firms can ignore capital needs because banks lend equally in every village.", "Raising funds is a stated challenge for local/regional businesses."],
  ["Cross-border manufacturing is still national if headquarters stays at home.", "Production abroad contributes to international/multinational scope."],
  ["A domestic-only rail network is multinational because cargo may originate from imports.", "Domestic routing fits national scope unless operating across countries."],
  ["International firms use identical economic systems in every market they enter.", "Economic systems differ internationally."],
  ["Local scope is determined solely by whether the firm is an SME under EU rules.", "Geographic scope and SME size classification are separate concepts."],
  ["Exporting forty percent of output while producing at home cannot coexist with any national label.", "Export sales cross national boundaries and affect scope labels."],
  ["Multinational status requires ignoring local cultures to enforce one corporate language.", "Cultural differences remain relevant in international operations."],
  ["Regional seasonal hotels face no customer-finding challenge during off-season months.", "Seasonal regional demand illustrates limited customer-base constraints."],
  ["National airlines operating domestic routes are local because planes land nearby.", "Country-wide networks reflect national rather than local scope."],
  ["Stakeholder geography is unrelated to whether a firm is multinational.", "Multinational operations spread activities and stakeholders across countries."],
  ["Local market saturation is impossible where population is growing.", "Saturation concerns nearby customers already served, not population trends alone."],
  ["Regional grants prove a firm is multinational because money crosses municipal borders.", "Regional support targets limited-area firms, not multinational classification."],
  ["National scale eliminates supply chain length because everything is domestic.", "National scope still lengthens chains compared with very local producers."],
  ["International business avoids longer supply chains by using email orders.", "International operations lengthen supply chains in Fuhrmann Ch3."],
  ["A provincial dairy delivering within one province is a multinational because milk crosses county lines.", "Intraprovincial delivery remains regional, not international."],
  ["Home-country-only publishers are international if they translate books into another language.", "Translation alone without foreign sales or production does not establish international scope."],
  ["Globalisation means national firms disappear entirely from the home economy.", "Globalisation highlights rising multinationals, not elimination of national firms."],
  ["Local cafés face no undercapitalisation risk if they accept card payments.", "Payment methods do not remove capital constraints on expansion."],
  ["Operating in two countries eliminates exposure to different currencies.", "Multiple currencies remain a factor across borders."],
  ["Regional competitors are irrelevant because regional firms share identical customers.", "Regional rivals operate within the same limited area competing for customers."],
  ["National wholesalers have shorter supply chains than street vendors by Fuhrmann Ch3 definition.", "National networks typically lengthen supply chains versus very local vendors."],
  ["Joint ventures abroad are still purely national if products return home for sale only.", "Foreign production partnerships indicate international activity."],
  ["Local community reliance proves the firm is a multinational serving global communities.", "Dependence on nearby communities indicates local/regional, not global, scope."],
  ["Paying tax only at home proves multinational status because tax law is international.", "Domestic tax on home-country sales fits national scope."],
  ["Any online shop is global scope even if it ships only within one city.", "Limited shipping area indicates local/regional rather than global reach."],
  ["International compliance costs fall when more countries' rules apply simultaneously.", "Multiple jurisdictions raise, not reduce, compliance burdens."],
  ["Undercapitalisation is solved once a regional firm wins one large nearby contract.", "A single contract does not remove structural capital constraints."],
  ["Domestic public tenders make a firm multinational by exposing it to government rules.", "National procurement within one country remains national scope."],
  ["Globalisation and multinational growth are unrelated trends according to Fuhrmann Ch3.", "Fuhrmann Ch3 links globalisation to the rise of multinationals."],
  ["A firm that sells in three countries is still national if its logo uses the home flag.", "Sales in multiple countries indicate international/multinational scope."],
  ["Local/regional and national scopes are identical whenever the firm uses domestic suppliers.", "Domestic suppliers alone do not collapse geographic scope distinctions."],
  ["A neighbourhood bakery is multinational because tourists sometimes buy bread.", "Occasional tourist purchases do not establish cross-border make-or-sell activity."],
  ["National scope requires exporting to at least one foreign market.", "National firms operate within the home country without requiring exports."],
  ["Regional firms are international because they cross internal county borders.", "Crossing counties within one country remains regional, not international."],
  ["Undercapitalisation applies exclusively to local firms and cannot affect national operators.", "Capital constraints are emphasised for local/regional firms but are not exclusive to them."],
  ["Multinational scope demands production and sales in every country on every continent.", "Make-or-sell in more than one country suffices; universal presence is not required."],
  ["Globalisation refers only to cultural exchange with no link to enterprise geography.", "Fuhrmann Ch3 ties globalisation to multinational enterprise growth."],
  ["Local scope is established when the owner walks to work regardless of customer location.", "Scope follows customer and operating geography, not owner commuting."],
  ["International firms share one worldwide currency once they join the WTO.", "Multiple currencies remain in cross-border business."],
  ["A national supermarket chain is local because each store serves a neighbourhood.", "Country-wide domestic retail networks reflect national scope."],
  ["Regional branding across provinces makes a firm multinational.", "Intra-country regional branding differs from cross-border operations."],
  ["Supply chains shorten when a firm expands from local to national scope.", "Fuhrmann Ch3 states national chains are longer than local ones."],
  ["AT&S counts as regional because its Austrian roots define scope permanently.", "AT&S operates internationally with cross-border production and sales."],
  ["Selling domestically online nationwide is local scope because the website is small.", "Nationwide domestic online sales indicate national scope."],
  ["International business faces one uniform culture if staff speak English.", "Cultural differences persist internationally despite a common working language."],
  ["Local firms need not find customers because word of mouth fills every nearby home.", "Finding enough customers remains a challenge for local/regional firms."],
  ["National telecom operators are multinationals when callers use roaming abroad.", "Customer roaming abroad does not make a domestic operator multinational."],
  ["Cross-border manufacturing is national when products are shipped back to the home market only.", "Foreign production contributes to international/multinational scope."],
  ["Regional hauliers become international by crossing a motorway border sign within one country.", "Motorway routing within one country does not create international scope."],
  ["Globalisation requires every national firm to open a foreign subsidiary.", "Globalisation describes a trend of rising multinationals, not mandatory foreign units."],
  ["Undercapitalisation disappears for local firms that join a trade association.", "Membership does not remove capital constraints on geographic expansion."],
  ["International scope is limited to firms that sell in more than ten countries.", "More than one country in make-or-sell suffices for international classification."],
  ["Local/regional firms have longer supply chains than national manufacturers.", "National operations typically involve longer chains than very local producers."],
  ["Multinational HR policies are identical worldwide by Fuhrmann Ch3 definition.", "Subsidiaries often adapt HR to local legal and cultural conditions."],
  ["A firm importing components for domestic assembly is a manufacturer in the supplier's country.", "Using imported inputs domestically differs from producing abroad."],
  ["Regional seasonal tourism proves multinational scope because visitors hold foreign passports.", "Foreign passport holders visiting a regional hotel do not make the hotel multinational."],
  ["National airlines are local because passengers board at nearby airports.", "Domestic airport networks reflect national operating scope."],
  ["Globalisation and multinational activity are separate unrelated concepts in Fuhrmann Ch3.", "The chapter links globalisation to the rise of multinationals."],
  ["Local market saturation cannot occur where a firm offers unique products.", "Uniqueness does not prevent nearby customer pools from becoming saturated."],
  ["International legal complexity disappears when contracts are written in English.", "Multiple legal systems still apply across countries."],
  ["Regional development grants convert recipients into multinationals.", "Regional grants support limited-area firms without establishing cross-border scope."],
  ["National wholesalers are local because each warehouse serves nearby shops.", "Country-wide domestic logistics align with national scope."],
  ["Selling in two countries is still national if both countries share a border.", "Cross-border sales indicate international scope regardless of adjacency."],
  ["Undercapitalisation is irrelevant once a local firm obtains a bank overdraft.", "Overdraft access does not fully remove structural capital constraints."],
  ["International firms avoid currency issues by invoicing only in the home currency abroad.", "Cross-border trade still involves currency conversion and exposure."],
  ["A provincial dairy is national because it supplies an entire province.", "Provincial reach within one country fits regional scope, not national country-wide scope alone."],
  ["Multinational scope requires identical products in every foreign market.", "Make-or-sell in more than one country suffices without uniform product lines."],
  ["Local scope excludes service businesses because services have no geography.", "Service firms can operate locally with nearby customers."],
  ["Globalisation means local businesses cease to exist in the home economy.", "Local firms continue alongside rising multinationals."],
  ["National procurement rules prove international scope because governments are global actors.", "Domestic-only tendering within one country remains national scope."],
  ["Regional competitors prove multinational scope because rivalry crosses town boundaries.", "Regional rivalry within a limited area does not establish international scope."],
  ["International supply chains are shorter than local ones due to container shipping.", "Fuhrmann Ch3 states international operations lengthen supply chains."],
  ["AT&S is classified as national because most staff work in Austria.", "Cross-border production and sales make AT&S a multinational example."],
  ["Local cafés are national when they appear on a city-wide delivery app.", "City-wide delivery may still be local/regional unless sales span the country."],
  ["Culture differences matter only to consumer brands and not to B2B multinationals.", "Cultural factors apply to international business broadly."],
  ["Undercapitalisation is confined to micro firms with fewer than five employees.", "Geographic focus rather than headcount alone links undercapitalisation to local/regional firms."],
  ["National scope excludes firms with foreign shareholders.", "Shareholder nationality does not determine geographic operating scope."],
  ["International joint ventures are national when the partner is from a neighbouring country.", "Foreign production partnerships indicate international activity."],
  ["Regional export shares below fifty percent mean the firm remains purely national.", "Any meaningful foreign sales contribute to international scope analysis."],
  ["Globalisation is defined as free internet access in every country.", "Fuhrmann Ch3 defines globalisation through multinational enterprise growth."],
  ["Local grocers are multinationals when they stock imported wine.", "Selling imported goods locally differs from cross-border make-or-sell activity."],
  ["National food brands with longer domestic chains have shorter logistics than corner shops.", "National sourcing lengthens supply chains compared with very local suppliers."],
  ["Multinational firms use one language internally so local language barriers vanish.", "Language differences remain relevant in international markets."],
  ["Regional tour operators are international because tourists come from abroad.", "Serving foreign visitors within a regional area does not alone make the operator multinational."],
  ["Stakeholder geography stays domestic for multinationals if HQ remains at home.", "Cross-border operations spread stakeholders across countries."],
  ["Local versus national scope differs only by company registration type.", "Market and operating geography determine scope, not registration alone."],
  ["International compliance costs are lower than domestic compliance for multinationals.", "Multiple jurisdictions raise international compliance burdens."],
  ["Undercapitalisation is solved when a regional firm increases prices once.", "A single price change does not remove structural capital constraints."],
  ["National rail freight is multinational when wagons are built abroad.", "Using foreign-built equipment domestically does not make the operator multinational."],
  ["Globalisation requires abolishing national borders for trade.", "Globalisation describes rising cross-border enterprise, not abolition of borders."],
  ["Local firms are regional whenever they employ more than ten people.", "Geographic reach and customer proximity define scope, not headcount alone."],
  ["International scope excludes firms that sell services across borders.", "Cross-border service sales can establish international scope."],
  ["Regional hauliers are national because they connect towns within one country.", "Territory-limited haulage within one country can remain regional rather than national country-wide."],
  ["Multinational classification follows marketing slogans rather than operating geography.", "Scope depends on where firms make and sell, not slogans alone."],
  ["National distributors are local when each driver knows customers personally.", "Country-wide domestic distribution aligns with national scope."],
  ["Currency exposure ends when a firm hedges one invoice in a foreign currency.", "Cross-border operations still involve multiple currencies overall."],
  ["Local scope requires the firm to own its premises rather than rent them.", "Ownership versus renting does not determine geographic scope."],
  ["Globalisation and multinational growth move in opposite directions per Fuhrmann Ch3.", "The chapter links globalisation to rising multinationals."],
  ["International firms face no cultural differences when operating in similar climates.", "Culture is unrelated to climate in Fuhrmann Ch3 international factors."],
  ["Regional breweries are multinationals when their beer wins foreign awards.", "Foreign awards without cross-border sales or production do not establish multinational scope."],
  ["National scope means selling in every region of the home country with no exceptions.", "National scope means home-country confinement, not mandatory presence in every region."],
  ["Undercapitalisation is a multinational problem because foreign plants are expensive.", "Fuhrmann Ch3 emphasises undercapitalisation for local/regional firms."],
  ["Local saturation is irrelevant when a firm can advertise on social media.", "Digital advertising does not remove limited nearby customer pool constraints."],
  ["Cross-border packaging alone without foreign sales or sourcing is sufficient for multinational manufacturing scope.", "Scope analysis considers overall make-and-sell geography, not one isolated step alone."],
  ["AT&S is local because it serves nearby industrial customers in Leoben.", "AT&S operates across countries with international production and sales."],
  ["International legal systems merge when firms sign standardised contracts.", "Multiple legal systems continue to apply across countries."],
  ["Regional policy support proves a firm operates globally.", "Regional grants target limited-area firms without implying global scope."],
  ["National airlines are international because they compete with foreign carriers.", "Competing with foreign airlines does not make a domestic network multinational."],
  ["Local customer proximity means every resident must buy weekly.", "Proximity defines market geography, not mandatory purchase frequency."],
  ["Globalisation refers exclusively to environmental policy agreements.", "Fuhrmann Ch3 ties globalisation to multinational enterprise activity."],
  ["Multinational scope requires sales offices in at least five continents.", "Make-or-sell in more than one country suffices without continental quotas."],
  ["National longer chains apply only to manufacturers and not to national retailers.", "National scope generally lengthens supply chains compared with local operations."],
  ["Regional seasonal hotels are national because tourism contributes to GDP.", "GDP contribution does not redefine geographic operating scope."],
  ["International firms ignore economic system differences once they adopt ERP software.", "Economic systems differ internationally despite shared software tools."],
  ["Local fund raising is easy because nearby banks prefer small-area businesses.", "Raising funds is a stated challenge for local/regional firms."],
  ["Selling nationwide makes a firm multinational if the website lists prices in euros.", "Domestic-only sales in one currency remain national scope."],
  ["Regional exporters are national because exports pass through domestic ports first.", "Foreign sales beyond the home country contribute to international scope."],
  ["Undercapitalisation is unrelated to finding enough customers in local markets.", "Fuhrmann Ch3 links limited capital with customer-finding challenges for local/regional firms."],
  ["International business uses a single culture when products are standardised globally.", "Cultural differences remain relevant despite product standardisation."],
  ["Local plumbers are regional because they might travel twenty kilometres occasionally.", "Occasional short travel within a town area still fits local scope."],
  ["National wholesalers become multinationals when they hire a foreign consultant.", "Hiring foreign advisers without cross-border make-or-sell does not establish multinational scope."],
  ["Globalisation eliminates national firms according to Fuhrmann Ch3.", "National firms continue alongside rising multinationals."],
  ["Multinational HR differences arise only from tax law and not from culture.", "Culture and legal factors both influence multinational HR contexts."],
  ["Regional hauliers crossing county lines within one province are international.", "Intra-provincial routing remains regional, not international."],
  ["Local/regional and international scopes merge whenever a firm uses imported inputs.", "Using imports domestically does not alone establish international operating scope."],
  ["National mobile operators are local because each shop serves one high street.", "Country-wide domestic telecom networks reflect national scope."],
  ["International compliance is uniform when firms hire one global law firm.", "Multiple countries' rules still apply despite centralized legal advice."],
  ["Undercapitalisation disappears once local firms join a franchise chain.", "Franchise membership does not fully remove capital constraints on expansion."],
  ["Globalisation means every product is manufactured in at least two countries.", "Globalisation describes a trend of rising multinationals, not universal dual production."],
  ["Regional brand recognition across one area proves multinational marketing scope.", "Regional branding within one country differs from cross-border operations."],
  ["National tax jurisdiction on domestic sales proves the firm is multinational.", "Domestic tax on home-country sales fits national scope."],
  ["International scope excludes firms that only sell digitally across borders.", "Cross-border digital sales can contribute to international scope."],
  ["Local community reliance makes a firm global because communities exist everywhere.", "Dependence on a nearby community indicates local/regional scope."],
  ["AT&S reinvented its model but remains a national firm because HQ stayed in Austria.", "Cross-border production and sales classify AT&S as multinational."],
  ["Regional logistics limits disappear once a firm buys larger trucks.", "Geographic market boundaries persist despite larger vehicles."],
  ["National scale advantage removes supply chain length according to Fuhrmann Ch3.", "National scale lengthens supply chains compared with local producers."],
  ["Multinational stakeholder spread is unrelated to operating in several countries.", "Cross-border operations spread stakeholders geographically."],
  ["Local market saturation is impossible for firms with loyal social media followers.", "Online followers do not unlimitedly expand proximate customer pools."],
  ["International joint ventures are local when both partners speak the same language.", "Foreign production alliances indicate international activity regardless of shared language."],
  ["Globalisation requires every firm to sell in US dollars.", "Globalisation concerns cross-border enterprise growth, not mandatory dollar sales."],
  ["Regional customer bases are national because regions belong to one country.", "Regional scope is geographically limited within a country, distinct from national country-wide reach."],
  ["Undercapitalisation is solved when a local firm opens a second nearby branch.", "A second branch does not fully remove broader capital constraints."],
  ["International firms face shorter supply chains because shipping is globalised.", "Fuhrmann Ch3 states international operations lengthen supply chains."],
  ["National home country focus excludes firms that import raw materials.", "Imports for domestic production still fit national scope when sales stay domestic."],
  ["Local versus global trap: any firm with a website is multinational.", "Web presence without cross-border make-or-sell does not establish multinational scope."],
  ["Multinational production requires identical factory output volumes in each country.", "Make-or-sell in more than one country suffices without equal volumes."],
  ["Regional export share analysis is irrelevant to scope labelling in Fuhrmann Ch3.", "Foreign sales shares affect whether operations cross national boundaries."],
  ["National carrier dependency makes an airline multinational.", "Dependence on domestic airports reflects national operating scope."],
  ["Globalisation multinationals trend excludes service-sector cross-border firms.", "Globalisation concerns multinational enterprise broadly across sectors."],
  ["Local service radius can span the entire home country if travel is cheap.", "Country-wide service reach indicates national rather than local scope."],
  ["International compliance cost falls when staff speak multiple languages fluently.", "Language skill does not remove multi-jurisdiction compliance obligations."],
  ["Undercapitalisation is absent among regional firms with positive online reviews.", "Reviews do not remove capital constraints on geographic expansion."],
  ["National boundary trade within one country establishes international scope.", "Domestic trade within national boundaries remains national or regional scope."],
  ["Multinational reinvented firm status depends on rebranding alone.", "Scope follows cross-border make-or-sell activity, not rebranding alone."],
  ["Regional competitor pressure proves a firm operates in more than one country.", "Regional rivals share a limited domestic territory without cross-border scope."],
  ["Globalisation rise trend means local businesses no longer face customer-finding challenges.", "Local/regional firms can still struggle to find enough customers."],
  ["International sales only through domestic agents abroad still leave the firm purely national.", "Sales in foreign countries through agents can establish international scope."],
  ["Local area definition includes any firm with fewer than fifty employees.", "Local scope uses operating area and customer proximity, not SME thresholds."],
  ["National distribution networks are local because each depot serves nearby retailers.", "Country-wide domestic warehousing aligns with national scope."],
  ["Currency exposure abroad disappears when the home currency is strong.", "Cross-border operations still involve multiple currencies."],
  ["Regional seasonal demand proves international tourism scope for every hotel.", "Regional seasonal visitors reflect bounded geography, not multinational operation."],
  ["AT&S multinational scope is disproved by its Austrian listing on a domestic exchange.", "Stock exchange location does not override cross-border make-or-sell activity."],
  ["International legal complexity is limited to firms that own property abroad.", "Cross-border operations generally encounter multiple legal systems."],
  ["Local fund raising is effortless because community banks guarantee every loan.", "Raising funds is a cited challenge for local/regional firms."],
  ["National procurement rules make bidders multinationals if goods are imported.", "Domestic procurement within one country remains national scope."],
  ["Globalisation definition includes every firm with foreign customers visiting its website.", "Website visits without cross-border sales do not define globalisation scope."],
  ["Multinational HR policies are national when HQ writes the handbook centrally.", "Foreign subsidiaries still face local legal and cultural HR conditions."],
  ["Regional market limits vanish once a firm advertises in a national newspaper.", "National advertising does not by itself expand operating scope to national reach."],
  ["Undercapitalisation risk applies only where firms refuse equity investment.", "Limited capital is linked to geographically focused firms regardless of financing preference."],
  ["International scope exam synthesis: local and national scopes are identical for online retailers.", "Nationwide domestic online sales differ from neighbourhood local scope."],
  ["Cross-border manufacturing is regional when both plants sit in neighbouring countries.", "Plants in different countries indicate international production scope."],
  ["National longer chain claim applies only when firms own every supplier.", "National scope lengthens chains compared with local operations regardless of ownership."],
  ["Local versus national trap: nationwide online sales remain local if the warehouse is small.", "Nationwide domestic sales indicate national scope despite warehouse size."],
];

function scrubMeta([s, e]) {
  const clean = (t) =>
    t
      .replace(/\s*(?:\bin\b|\baccording to\b|\bper\b)\s*Fuhrmann Ch3\.?/gi, ".")
      .replace(/\bFuhrmann Ch3\s*/gi, "")
      .replace(/\s{2,}/g, " ")
      .replace(/\.\s*\./g, ".")
      .trim();
  return [clean(s), clean(e)];
}

for (let i = 0; i < truths.length; i++) truths[i] = scrubMeta(truths[i]);
for (let i = 0; i < falses.length; i++) falses[i] = scrubMeta(falses[i]);

function dedupePool(pool) {
  const seen = new Set();
  const out = [];
  for (const item of pool) {
    const key = numSynonymKey(item[0]);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(item);
  }
  return out;
}

const truthPool = dedupePool(truths);
const falsePool = dedupePool(falses);

if (truthPool.length < 150) throw new Error(`Need 150 unique truth templates, have ${truthPool.length}`);
if (falsePool.length < 100) throw new Error(`Need 100 unique false templates, have ${falsePool.length}`);

const usedTruth = new Set();
const usedFalse = new Set();

function pickFromPool(pool, usedGlobal, need, caseKeys, explKeys) {
  const picked = [];
  for (const item of pool) {
    if (picked.length >= need) break;
    const id = item[0].trim().toLowerCase();
    if (usedGlobal.has(id)) continue;
    const sk = numSynonymKey(item[0]);
    const ek = item[1].trim().toLowerCase();
    if (caseKeys.has(sk) || explKeys.has(ek)) continue;
    picked.push(item);
    usedGlobal.add(id);
    caseKeys.add(sk);
    explKeys.add(ek);
  }
  if (picked.length < need) {
    throw new Error(`Pool pick failed: need ${need}, got ${picked.length}, used ${usedGlobal.size}`);
  }
  return picked;
}

const cases35 = TRUE_COUNTS.map((trueCount, idx) => {
  const n = idx + 1;
  const caseKeys = new Set();
  const explKeys = new Set();
  const t = pickFromPool(truthPool, usedTruth, trueCount, caseKeys, explKeys);
  const f = pickFromPool(falsePool, usedFalse, 5 - trueCount, caseKeys, explKeys);
  const pairs = shuffle(
    [...t.map(([s, e]) => ({ s, e, v: true })), ...f.map(([s, e]) => ({ s, e, v: false }))],
    n * 7,
  );
  return {
    title: titles[idx],
    context: contexts[idx],
    life: LIFE_NUMS.has(n),
    answer_key: pairs.map((p) => p.v),
    statements: pairs.map((p) => p.s),
    tactical_explanations: pairs.map((p) => `${p.v ? "TRUE" : "FALSE"} — ${p.e}`),
    difficulty_level: difficulties[idx],
  };
});

function validate(cases) {
  if (cases.length !== 50) throw new Error(`Expected 50 cases, got ${cases.length}`);
  for (const k of [1, 2, 3, 4, 5]) {
    const n = cases.filter((c) => countTrues(c.answer_key) === k).length;
    if (n !== 10) throw new Error(`${k}T count ${n}, expected 10`);
  }
  const life = cases.filter((c) => c.life).length;
  if (life < 12 || life > 14) throw new Error(`Life count ${life}, expected ~13`);
  const stmts = cases.flatMap((c) => c.statements);
  if (stmts.length !== 250) throw new Error(`Expected 250 statements, got ${stmts.length}`);
  const seen = new Set();
  for (const s of stmts) {
    const norm = s.trim().toLowerCase();
    if (seen.has(norm)) throw new Error(`Duplicate statement: ${s}`);
    seen.add(norm);
    if (FORBIDDEN.test(s)) throw new Error(`Forbidden word in: ${s}`);
  }
  for (const c of cases) {
    if (!c.context.trim().endsWith(":")) throw new Error(`Context must end with colon: ${c.title}`);
    const caseKeys = new Set();
    const explSet = new Set();
    for (let i = 0; i < c.statements.length; i++) {
      const sk = numSynonymKey(c.statements[i]);
      if (caseKeys.has(sk)) throw new Error(`Twin in ${c.title} stmt ${i + 1}`);
      caseKeys.add(sk);
      const ek = c.tactical_explanations[i].trim().toLowerCase();
      if (explSet.has(ek)) throw new Error(`Dup expl in ${c.title} stmt ${i + 1}`);
      explSet.add(ek);
      if (BANNED.test(c.statements[i]) || BANNED.test(c.tactical_explanations[i])) {
        throw new Error(`Banned phrase in ${c.title} stmt ${i + 1}`);
      }
    }
    if (c.statements.length !== 5 || c.answer_key.length !== 5 || c.tactical_explanations.length !== 5) {
      throw new Error(`Case ${c.title} wrong array lengths`);
    }
    c.tactical_explanations.forEach((t, i) => {
      const expect = c.answer_key[i] ? "TRUE —" : "FALSE —";
      if (!t.startsWith(expect)) throw new Error(`Prefix mismatch in ${c.title} stmt ${i + 1}`);
      if (/the book/i.test(t)) throw new Error(`"the book" in ${c.title}`);
    });
    if (!/^([1-5])\/5$/.test(c.difficulty_level)) throw new Error(`Bad difficulty: ${c.difficulty_level}`);
  }
}

validate(cases35);

const body = `export const cases35 = ${JSON.stringify(cases35, null, 2)};\n`;
fs.writeFileSync(OUT, body, "utf8");
console.log(`Wrote ${OUT}`);
console.log(`Cases: ${cases35.length}, statements: ${cases35.length * 5}, life: ${cases35.filter((c) => c.life).length}`);
