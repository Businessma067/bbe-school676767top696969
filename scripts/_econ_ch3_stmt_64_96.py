#!/usr/bin/env python3
"""Rewrite tactical_explanations for ch3 cases [64:96] (CASE 3.5.01–3.6.16).

Statement-only from scratch; wrap True/False closer from answer_key.
"""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path("/workspace")
PATH = ROOT / "src/data/economics-cases-ch3-subtopics.json"


def wrap(text: str, truth: bool) -> str:
    text = text.replace("\u2014", ", ").replace("\u2013", "-").strip()
    v = "True" if truth else "False"
    return text + f"\n\nSo the statement is {v}."


# case_id -> list of 5 body strings (no closer)
EXPL: dict[str, list[str]] = {
    "CASE 3.5.01": [
        "Local scope turns on where customers live and where the firm trades, not on a headcount ceiling of ten. A bakery with twelve bakers still serving one district remains local. Staff size alone never redraws the geographic map of demand.",
        "National businesses sell inside one home country. They need not blanket every state on a continent to earn the national label. Continental coverage would already push toward international or multinational reach, which is a different scope class from domestic-only chains.",
        "Neighbourhood bakeries and regional dairies often struggle to raise capital and to find enough buyers beyond a thin local pool. Banks may treat small geographic footprints as riskier collateral stories, and walk-in traffic can stall once nearby shelves are already filled by rivals. Those twin pressures, thin funding and limited customer reach, sit at the centre of why local and regional firms face harder growth paths than national brands with broader markets. The bakery scene makes the constraint concrete: one district of walk-ins is a narrow revenue base even when bread quality is high.",
        "Local and regional firms characteristically serve a bounded area with customers close at hand. The district bakery fits that pattern: walk-ins within one neighbourhood, not nationwide delivery. Geographic narrowness is the defining trait, not a side detail.",
        "Regional firms stay inside a defined territory such as a province or cluster of counties. Worldwide operations would be multinational, not regional, regardless of how small the marketing budget looks next to a global brand.",
    ],
    "CASE 3.5.02": [
        "VAT registration does not erase undercapitalisation. A provincial dairy can still lack equity or credit for trucks, cold stores, or expansion even after it is on the tax register. Formal filing and funding strength are separate issues.",
        "A national business trades within its home country rather than building foreign sales or plants as its defining reach. Domestic supermarket chains and home-country manufacturers illustrate the class. Crossing borders would move the firm into international or multinational territory instead.",
        "Undercapitalisation bites hardest where firms are small and geographically focused, because cash buffers and investor interest are thinner than for national groups. A dairy limited to one province may struggle to finance new pasteurisers or depot capacity even when demand exists one province away. Limited collateral, thinner management benches, and narrower customer bases all raise the chance that capital runs short before growth plans finish. That is why texts pair undercapitalisation with local and regional scale rather than treating it as a multinational-only problem.",
        "A website that foreigners can open does not make a firm multinational if no cross-border sales or production occur. Visibility abroad is not the same as operating abroad. Multinational status still requires making or selling in more than one country.",
        "National operations usually stretch suppliers and depots across a whole country, so the chain is longer than a bakery buying flour from a mill two streets away. Distance and node count rise with national reach.",
    ],
    "CASE 3.5.03": [
        "Globalisation describes growing cross-border enterprise activity; it does not convert every corner shop into a multinational overnight. A domestic-only supermarket remains national even while global trade expands elsewhere.",
        "International and multinational firms make and/or sell in more than one country. That cross-border production or sales footprint is the definitional marker. A home-country chain that never leaves domestic markets does not meet it; a components maker with plants in several states does.",
        "International trade confronts several legal systems at once: contract rules, product standards, tax codes, and employment law differ by jurisdiction. Compliance is therefore uneven and costly, not uniform under a single world statute. Claiming one worldwide legal system erases exactly the complexity firms face when they source or sell abroad. A supermarket that stayed domestic would avoid that patchwork; once borders enter the picture, lawyers multiply rather than vanish into one global code.",
        "National supply chains typically run longer than purely local ones because goods move across regions of the home country. Domestic transport speed does not magically shorten every link relative to a neighbourhood workshop buying next door. Local proximity usually means fewer miles and fewer intermediaries.",
        "Proximity helps footfall but does not guarantee demand. Local shops still compete, face empty hours, and can fail to attract enough buyers. Customer finding remains a live challenge at local scale.",
    ],
    "CASE 3.5.04": [
        "Regional scope is territorial, not global. Unlimited worldwide customers would describe multinational reach, not a regional haulier or dairy capped inside one province. The regional label itself denies planet-wide customer pools.",
        "Globalisation is commonly framed as the rise of multinational enterprises that produce and sell across borders. Components makers with plants in several countries exemplify that trend. The definition ties the process to cross-border firm activity rather than to vague cultural chatter alone.",
        "Where owners sleep does not fix business scope. A firm that sells nationwide while founders stay in one town is still national, not local, because customers and operations span the country. Residence of shareholders is a weak proxy compared with the geography of sales and production. Treating hometown living as a local label would misclassify almost every domestic chain whose HQ sits in a single city. Scope follows markets and plants, not bedroom addresses.",
        "Crossing borders forces firms to handle different cultures, languages, and currencies in customer contact, contracts, and pricing. Those frictions are core international-business costs, not optional extras. A multi-country manufacturer meets them daily.",
        "International operations stretch supply chains across borders and through differing legal and economic systems. That length and complexity exceed a single-country domestic chain.",
    ],
    "CASE 3.5.05": [
        "Making goods in one country and selling them in another is textbook international or multinational scope. Production and sales footprints already cross a border, which is enough to leave pure national labelling behind.",
        "Local business scope is marked by nearby customers and a limited service area. A district bakery with walk-in trade fits that geometry. Distance to buyers, not brand fame alone, draws the local boundary.",
        "Regional firms still trade inside a defined territory such as neighbouring counties or one province. They may cover more ground than a single-street shop, yet they do not operate worldwide. Holiday operators serving only adjacent counties illustrate the middle band between local and national. Calling regional activity global would erase the territorial limit that gives the regional label meaning. The defined-area rule therefore holds even when the map is wider than one neighbourhood.",
        "Selling only inside the home country is national scope. No foreign sales or foreign plants are required for that label, and none appear when distribution stops at the border. Domestic-only reach is exactly what separates national from international firms.",
        "A multinational need not produce in every country where it sells. Exporting from a few plants into many markets still counts as cross-border enterprise. Mandatory production everywhere is not part of the definition.",
    ],
    "CASE 3.5.06": [
        "A components manufacturer that operates across countries is a multinational enterprise, often reshaping how it organises plants, logistics, and markets. That cross-border footprint matches the multinational label used in the chapter.",
        "Thin capital blocks local firms from hiring, stocking, or opening a second site beyond the immediate catchment. Without funds, even strong local demand nearby cannot finance trucks or larger premises. Limited capital is therefore a binding expansion constraint at local scale.",
        "Opening a foreign bank account does not cancel currency differences. Invoices, costs, and receipts can still arrive in euros, dollars, or other units, and exchange rates still move. Banking access abroad is a payment channel, not a currency union. Exporters invoicing in multiple currencies remain exposed even with accounts in each place. The claim that currency friction disappears at account opening therefore overreaches.",
        "Undercapitalisation is especially familiar among smaller local and regional firms, not a multinational-only disease of foreign factories. Craft businesses that cannot raise funds illustrate the risk at home. Restricting the problem to overseas plants misplaces where thin capital bites first.",
        "Culture and language differences matter for manufacturers managing foreign staff, contracts, and buyers, not only for tourist shops. Cross-border production teams face those frictions daily.",
    ],
    "CASE 3.5.07": [
        "Importing finished goods for domestic resale makes a firm a trader or retailer, not automatically a manufacturer in two countries. Manufacturing requires producing goods, not merely bringing them in for shop shelves.",
        "Doing business in several countries brings several legal systems into play: contracts, product rules, and tax regimes differ by jurisdiction. Firms must cope with that patchwork rather than assuming one home statute travels everywhere. Multiple systems are a defining international complication.",
        "Language differences shape how international firms talk to customers, write manuals, train staff, and negotiate. Misread terms can lose sales or create liability even when the product itself is sound. A subsidiary team that cannot brief local buyers in their language undercuts market entry. That is why language sits beside culture and currency as a standard international friction, not a soft optional skill. Customer contact across borders therefore depends on linguistic capacity as much as on price lists.",
        "Globalisation covers service firms as well as factories. Banks, consultancies, airlines, and software houses operate across borders under the same broad process. Limiting globalisation to manufacturing plants alone is too narrow.",
        "Sourcing and selling nationally usually lengthens the supply chain relative to a purely local producer. More regions, depots, and carriers enter the route when the home country is the market.",
    ],
    "CASE 3.5.08": [
        "Living near customers does not remove the need to seek sales. Local firms still advertise, compete, and can lose trade. Proximity is an advantage, not a permanent full order book.",
        "National businesses operate inside one home country. Using the domestic currency does not secretly place them in more than one country. Cross-border operations would be international; currency choice alone does not redraw that map.",
        "When trade crosses international borders, invoices and costs often arrive in different currencies. Exchange-rate moves then affect margins even if product quality is unchanged. A national manufacturer shipping only domestically may avoid that exposure; an exporter facing euros and dollars cannot. Currency differences are therefore a standard feature of international commerce rather than a quirk of tourist kiosks. Border-crossing trade brings currency risk with it.",
        "A components manufacturer with plants or sales across countries is multinational regardless of where the first plant opened. Hometown origins do not freeze scope forever. First-plant location is history, not the current geographic classification.",
        "Globalisation shows more firms producing and selling beyond a single country. Rising multinational activity is the chapter's compact description of that process.",
    ],
    "CASE 3.5.09": [
        "Regional hauliers that move goods inside one territory still face geographic limits compared with nationwide networks. Their routes stop where the regional map stops, even if trucks are busy every day.",
        "Regional firms cannot ignore capital needs. Banks do not lend equally in every village, and undercapitalisation remains a common regional constraint. Assuming automatic equal credit erases a real funding friction for limited-area operators.",
        "Domestic-only sales and production inside one country describe national scope. A publisher that prints and ships solely at home, or a supermarket chain that never opens foreign stores, fits that class. No foreign plant or foreign shelf is required, and none appears in the domestic-only pattern. The national label is therefore about staying inside the home border, not about how large the domestic map feels. Firms selling in three countries with differing contract laws have already left that national box.",
        "Cross-border manufacturing is international or multinational even if headquarters stays at home. HQ location does not cancel foreign plants. Home HQ plus foreign production is a classic multinational pattern, not a national one.",
        "A plumber serving one town with nearby customers is a local business. The service area and customer proximity match the local definition directly.",
    ],
    "CASE 3.5.10": [
        "Cross-border production partnerships place activity in more than one country, which marks international rather than purely national scope. Shared plants or joint output across borders already leave the domestic-only class.",
        "International firms meet varied economic systems: market rules, regulation, and institutions differ by country. Identical systems in every market would be unusual. Adaptation to local economic frameworks is part of operating abroad.",
        "A domestic-only rail network remains national even if some cargo began life as imports. Moving imported boxes on home tracks does not create foreign subsidiaries or foreign sales by the railway itself. Multinational status needs the firm to make or sell across countries, not merely to touch goods that once crossed a border upstream. Treating any imported crate as proof of multinational rail operations stretches the label past the operator's own geographic footprint.",
        "Local scope is about limited area and nearby customers, not solely about EU SME headcount or turnover tests. A large local utility could still be local geographically while failing an SME size screen. Size rules and geographic scope answer different questions.",
        "Exporting part of output while producing at home can still sit beside a largely national identity if foreign sales are limited, and national labels are not automatically voided by a minority export share. Absolute bans on mixing are too rigid.",
    ],
    "CASE 3.5.11": [
        "Branding across neighbouring counties still sits below full national or international reach. Regional coverage is wider than one street yet narrower than a whole-country network.",
        "National airlines flying domestic routes are national businesses, not local ones, even though planes land at nearby airports. Landing proximity does not shrink a nationwide route map into local scope. The operating area is the country, not one neighbourhood.",
        "Local businesses lean heavily on customers in the immediate area for daily revenue. A shop that lives on walk-ins and nearby regulars rises or falls with that catchment. Online nationwide selling would already break the local pattern; when owners merely live nearby while sales span the country, the local label is a trap. Genuine local dependence means the customer map, not the owner's postcode, stays close. Immediate-area demand is therefore the practical test.",
        "Multinationals still need cultural awareness; they do not succeed by erasing every local language and custom for one corporate tongue. Ignoring cultures is a failure mode, not a membership requirement. Cross-border firms that adapt communicate better with staff and buyers.",
        "Regional seasonal hotels often struggle to find customers in off-season months. Empty rooms are a classic limited-area demand problem, not proof that customer finding vanishes.",
    ],
    "CASE 3.5.12": [
        "Obeying rules in several countries at once raises compliance costs: filings, standards, and legal advice multiply. Cross-border operators pay for that complexity in cash and staff time.",
        "Local market saturation can occur even while population grows if most nearby buyers already have a preferred supplier or if capacity outruns incremental demand. Growth of residents does not guarantee unsaturated shelves for every local firm.",
        "A regional grant that moves money across municipal borders does not turn a tour operator into a multinational. Public funding geography is not the same as producing or selling in foreign countries. Neighbouring-county holidays remain regional even if a county council cheque clears. Multinational status still hinges on cross-border enterprise activity, not on which public purse paid a subsidy. Grant paperwork cannot rewrite the firm's customer map.",
        "Undercapitalisation can block fundraising when a firm is stuck in a small market area with thin collateral and limited investor interest. Regional craft and tourism operators often hit that wall. Capital shortage is a real constraint on limited-area growth.",
        "Where stakeholders sit geographically matters for multinational classification: plants, customers, and suppliers across countries signal cross-border scope. Geography of parties is part of the story, not unrelated noise.",
    ],
    "CASE 3.5.13": [
        "Multinational operations spread stakeholders and activities across countries: staff, suppliers, customers, and regulators appear in more than one jurisdiction. That spread is part of what multinational means.",
        "National scale still lengthens supply chains across regions of the home country. Domestic does not mean short by magic. A nationwide publisher or rail freight network moves goods farther than a neighbourhood supplier.",
        "International business typically lengthens supply chains because goods, documents, and payments travel across borders and through more intermediaries. Email orders may speed communication, yet physical logistics, customs, and multi-country warehousing remain. Treating inbox convenience as a shorter chain confuses messaging with freight. Cross-border manufacturers and sellers still face longer routes than a local workshop. The longer-chain pattern therefore survives digital ordering.",
        "Seasonal regional tourism income comes from a geographically limited customer base of holidaymakers in neighbouring counties. That limited map is why the operator is regional rather than national. Seasonal swings sit on top of that geographic constraint.",
        "A domestic rail freight network running nationally has a longer chain than a neighbourhood supplier serving one district. More nodes and miles enter once the whole country is the operating area.",
    ],
    "CASE 3.5.14": [
        "Translating books into another language does not make a home-country-only publisher international if printing and sales stay domestic. Language choice inside one market is not foreign operations.",
        "A provincial dairy delivering inside one province is regional, not multinational, even when milk crosses county lines. Counties inside one country are not foreign markets. Multinational reach requires more than one country, not more than one county.",
        "Accepting card payments does not remove undercapitalisation risk for local cafés. Card terminals change how customers pay; they do not inject equity for rent, ovens, or wages during quiet months. Thin capital can still close a café that takes cards every day. Confusing payment technology with funding strength misreads both. Local cafés remain exposed to capital shortfalls regardless of plastic versus cash.",
        "Globalisation raises multinational activity; it does not erase national firms from the home economy. Domestic chains and local shops continue beside cross-border giants. Disappearance of national firms is not part of the definition.",
        "Local market saturation arrives when most nearby customers are already served, so extra local capacity wins little new demand. That ceiling is a classic limited-area constraint.",
    ],
    "CASE 3.5.15": [
        "National-scale operations stretch supply chains across the home country through regional depots, carriers, and suppliers. Domestic breadth still lengthens logistics relative to a single-district producer.",
        "Policy support for regional firms often targets operators confined to limited areas: grants, advice, or infrastructure aimed at provincial and county-scale businesses. That focus matches the regional geographic problem set rather than multinational factory building abroad.",
        "Importing finished goods for domestic resale does not by itself create a multinational manufacturer. The firm may be a national wholesaler or retailer with foreign sourcing upstream, yet without foreign production of its own or foreign sales footprint it is not automatically a multi-country manufacturer. Manufacturing in two countries, or selling across several, is a different pattern from bringing stock home to sell. The importer label and the multinational-manufacturer label therefore part company when production stays elsewhere and shelves stay domestic.",
        "Local scope pairs a limited operating area with chiefly nearby customers. Both geography of operations and geography of buyers matter. A district bakery with walk-ins satisfies both sides of that definition.",
        "Operating in two countries increases exposure to different currencies rather than eliminating it. Dual-currency invoicing is a risk source, not a vaccine against exchange-rate moves.",
    ],
    "CASE 3.5.16": [
        "International firms meet varied economic systems as they enter different markets: regulation, competition rules, and institutions are not carbon copies. Adaptation across systems is ordinary international work.",
        "Company registration does not make a neighbourhood bakery national. Walk-in local buyers and a district service area keep the firm local. Legal form and geographic scope answer different questions.",
        "Operating in more than one country forces coordination across languages and currencies for pricing, payroll, contracts, and customer service. Teams in subsidiaries must translate instructions, reconcile accounts in multiple units, and avoid miscommunication that damages sales. That coordination load is heavier than running a single-language domestic chain. Cultural and currency frictions compound when staff manage across borders rather than across one home region. Multi-country presence therefore raises linguistic and monetary coordination costs as a structural feature.",
        "Cultural awareness matters when managing staff and customers in foreign subsidiaries. Practices that work at home can offend or confuse abroad. Ignoring culture raises conflict and turnover risk in international teams.",
        "Producing domestically and exporting only a minority share can still leave a largely national profile when foreign sales are limited or absent from the core model. Minority exports need not rewrite the whole scope label overnight.",
    ],
    "CASE 3.6.01": [
        "Customers who rely on a firm's products are stakeholders even if they own no shares. Interest and effect, not equity certificates, open the stakeholder door. Buyers of bread or software still have a stake in continuity and quality.",
        "Stakeholders are wider than voting shareholders. Employees, suppliers, customers, communities, and governments can all be affected by firm decisions. Shrinking the set to shareholding alone is the older shareholder-only view, not the chapter's stakeholder breadth.",
        "Receiving payment does not eject suppliers or employees from stakeholder status. Wages and invoices are how those groups connect to the firm, and business choices still shape their income security and order volumes. Excluding anyone who is paid would empty the stakeholder map of almost everyone who works with the enterprise. Payment is evidence of a relationship, not proof that the relationship has no stake. Suppliers and staff therefore remain inside the stakeholder set.",
        "Stakeholders include anyone affected by or interested in the business. That broad definition covers owners, managers, employees, customers, suppliers, communities, and other parties touched by outcomes. Narrow ownership tests are too small for the concept used here.",
        "Senior managers are stakeholders, yet they are not the only ones. Shop-floor staff, customers, and suppliers also qualify. Organisation-chart height is not the membership test.",
    ],
    "CASE 3.6.02": [
        "Owners care how the venture performs after opening day. Profit, reputation, and survival still drive their interest. Claiming zero interest once doors open denies the owner's stake in ongoing results.",
        "Profit rewards owners for coordinating staff, suppliers, and customer service into a working enterprise. That residual return is the classic owner payoff when trading goes well. Coordination effort sits behind the profit claim rather than beside it as unrelated charity.",
        "Growing a bakery's reputation can raise the value of the owners' investment over time because goodwill, loyal customers, and brand recognition make the business worth more if sold or expanded. Reputation is an intangible asset that feeds future cash flows, not only a vanity metric. Owners therefore have a stake in how the shop is seen locally, beyond today's till receipts. Stronger standing in the neighbourhood supports both current sales and longer-run equity value. Reputation growth and investment value move together for small owner-managed firms.",
        "Owners accept business risk because poor trading can shrink or wipe out their personal return and invested capital. Downside exposure is part of the owner role, not a myth reserved for employees. Weak sales hit the owner's pocket directly.",
        "As owners they seek profit from daily bread and pastry sales. That profit motive is a core owner interest in the bakery setting described here.",
    ],
    "CASE 3.6.03": [
        "Owner reward tracks how well the business trades: stronger margins and sales raise profit; weak trading cuts it. Reward is tightly related to performance, not floating free of results.",
        "Owners bear financial risk when revenue falls short of costs and may lose invested capital. That downside is the price of claiming residual profit in good times. Capital at risk is central to the owner stakeholder story.",
        "Owners may share gains with staff through bonuses or profit shares, yet they still face downside when sales fall sharply: equity can shrink, drawings can stop, and bankruptcy can erase capital. Claiming no downside while admitting shared gains describes an impossible one-way bet. Limited liability may cap personal assets in some forms, but it does not guarantee that the business stake itself stays positive. Owner exposure remains real when trading turns bad.",
        "Risk and reward apply first to people who provide capital, not only to employees. Owners put money at stake and claim residual returns. Restricting the pair to staff alone reverses the classic ownership logic.",
        "Limited liability does not guarantee positive returns. Owners can still lose the capital they invested in the firm. Profit without risk is not what limited liability means.",
    ],
    "CASE 3.6.04": [
        "Restructuring that threatens jobs shows managers are affected as stakeholders: their roles, teams, and careers sit inside the decision's blast radius. Outcomes land on them, not only on distant shareholders.",
        "Job security matters to managers because firm failure can end their employment and income. That exposure makes them stakeholders in survival and performance. Career risk is not limited to junior staff alone.",
        "Managers look for stable income from the employing firm as a core stakeholder interest, alongside status and promotion chances. Salary continuity depends on the business remaining viable and on decisions that keep their function funded. When owners cut costs or pivot strategy, managerial pay and security move with those choices. Treating managers as pure agents without a stake would ignore how tightly their livelihoods track firm health. Stable income from employment is therefore a legitimate managerial stake, not a side preference.",
        "Managers depend on continued firm success for promotion paths and salary growth. Stalling organisations freeze careers; growing ones open them. That dependence reinforces their stakeholder position.",
        "Managers are stakeholders because business outcomes shape their careers and pay. Effect on livelihood is enough; share ownership is not required.",
    ],
    "CASE 3.6.05": [
        "Staff depend on the bakery's continued operation for wages and job security. If the shop closes, pay packets stop. That dependence is the employee stakeholder link in concrete form.",
        "Employees are stakeholders even without investing capital. Labour contribution and livelihood dependence create a stake. Requiring equity ownership would wrongly shrink the set to shareholders alone.",
        "Job security sits beside monthly wages as a legitimate employee interest. Workers care not only about this month's pay but about whether the role will still exist next year. Bakery staff who identify with a small venture's success often watch both margins and roster stability. Decisions on hours, seasonal cuts, or closure hit security as hard as they hit the wage line. Stakeholder analysis therefore treats security and pay as paired employee concerns rather than as optional soft feelings.",
        "Employees may identify with the bakery and feel pride when it succeeds locally. Identification strengthens engagement and shows a personal stake beyond the payslip. Local success can matter emotionally and professionally to staff.",
        "Receiving this month's wage does not end stakeholder status. Ongoing employment, future pay, and security keep the relationship alive after each payday.",
    ],
    "CASE 3.6.06": [
        "Managers and employees are mutually dependent on the business alongside the owners' venture: the firm needs their labour, and they need the firm for income. That two-way link is mutual dependence.",
        "A firm cannot operate indefinitely without managers or employees contributing labour. Someone must organise and perform work. Claiming endless output with zero staff describes an empty shell, not a going concern.",
        "When the employing firm stops trading, staff livelihoods are hit immediately through lost wages, disrupted careers, and job search costs. Claiming unaffected livelihoods denies the employment relationship's economic core. Mutual dependence means the stoppage harms both sides: owners lose the venture while workers lose pay. Bakery or IT-support closures illustrate the point in small settings as clearly as factory shutdowns do. Staff are not insulated spectators when trading ends.",
        "Mutual dependence also runs between staff and the firm, not only between customers and suppliers. Employment is a two-way stake. Limiting the idea to external trade partners leaves out the internal labour link.",
        "Owners alone do not create output; staff labour is essential, and staff also depend on the firm. The relationship runs both ways rather than as a one-way owner machine.",
    ],
    "CASE 3.6.07": [
        "When personal values line up with company practices, staff engagement often rises because daily work feels coherent rather than forced. Alignment supports motivation inside the stakeholder relationship.",
        "Shared values do not guarantee identical opinions on every management decision. People can share broad principles and still disagree on tactics, timing, or priorities. Uniform voting on all choices is not what shared values mean.",
        "Employment contracts set duties and pay; they do not make shared values irrelevant to stakeholder relations. Culture and value fit still shape cooperation, trust, and willingness to go beyond the minimum clause. A contract can compel attendance without creating commitment. Firms that ignore values often see quieter resistance even when paperwork is perfect. Shared values therefore remain part of how staff and organisation connect beyond the letter of the contract.",
        "Shared values can strengthen cooperation between employees and management on firm goals by reducing friction over what counts as acceptable practice. Alignment makes joint effort easier. That cooperation channel supports organisational performance.",
        "Shared values between staff and the organisation can support business success through better engagement and smoother teamwork. Value fit is a practical performance aid, not only a slogan.",
    ],
    "CASE 3.6.08": [
        "Suppliers expect to be paid for goods delivered to the buying business. Payment for delivery is the baseline commercial interest that makes suppliers stakeholders in the buyer's conduct.",
        "Stakeholder analysis includes suppliers who expect both payment and a continued commercial relationship through future orders. Cash today and volume tomorrow both matter. Truncating supplier interest to a single invoice understates the stake.",
        "Suppliers are stakeholders because firm decisions on order volumes, payment speed, and product specs affect their cash flow and capacity use. A bakery that delays flour payments or suddenly cuts weekly orders pushes pain upstream to the mill. Those effects are why supplier voice appears in stakeholder maps beside customers and staff. Ignoring suppliers because they sit outside the organisation chart misses how tightly their fortunes track the buyer's choices. Cash flow and volumes are the concrete channels of that stake.",
        "Fair payment terms express supplier stakeholder interests, not merely bookkeeping preferences. Late or predatory terms harm the supplier's business. Treating terms as pure accounting detail misses the relational stake.",
        "Suppliers rely on future orders as well as payment for past deliveries. Ongoing demand keeps their own operations viable beyond one cleared invoice.",
    ],
    "CASE 3.6.09": [
        "Late or defective shipments damage the supplier's reputation and future orders, so they are the supplier's concern as well as the buyer's. Quality and timeliness sit on the supplier's side of the relationship.",
        "Suppliers must worry about timeliness because buyers will switch or penalise late delivery. Delivery risk is shared commercially even if contracts allocate some liability. Ignoring the clock is not a viable supplier stance.",
        "Timely delivery is part of the supplier's duty toward the buying firm within the stakeholder relationship. The buyer depends on arrival dates to keep production or shelves running, and the supplier's reliability is how that dependence is honoured. A flour mill that ships late forces a bakery into emergency shortages. Meeting the clock is therefore not a courtesy; it is a core performance expectation that binds supplier and buyer together. Stakeholder analysis treats that punctuality interest as mutual commercial substance.",
        "Suppliers must deliver quality goods on time to satisfy the buying business. Defects and delays break the commercial link. Quality-plus-timeliness is the standard supplier performance pair.",
        "Quality standards apply to external suppliers' goods as well as to internal staff work. Bought-in inputs must meet spec, not only in-house processes.",
    ],
    "CASE 3.6.10": [
        "Mutual dependency means both parties need each other for continued benefit: the bakery needs buyers, and buyers need the bakery's bread. One-sided need would not be mutual.",
        "Firms depend on customers for revenue just as customers depend on firms for products. Denying firm-side dependence erases the sales relationship. Without customers, the till stays empty.",
        "Customers depend on the bakery for product quality and daily availability of fresh bread. Regulars plan breakfasts and shopping routes around that reliability. If loaves turn stale or shelves empty, the customer's stake becomes visible as inconvenience and search for alternatives. Quality and availability are therefore not only marketing phrases; they are the concrete goods customers need from the shop. That dependence sits inside the mutual link with the bakery's need for their spending.",
        "The bakery depends on customers for revenue that keeps the shop trading. Walk-in purchases fund wages, flour, and rent. Customer spending is the firm's lifeblood, not an optional extra.",
        "If the bakery closes, regular customers lose a relied-upon source of fresh bread and must switch at a cost. Closure reveals the customer's stake in continued local supply.",
    ],
    "CASE 3.6.11": [
        "Residents may care about noise, pollution, and jobs created by a nearby firm. Those local effects make community members interested parties even without shareholding.",
        "Communities near a plant can be stakeholders affected by employment, traffic, and local spending. Positive and negative spillovers both count. Geography of impact brings the town into the stakeholder set.",
        "Community opposition to expansion can signal conflicting stakeholder interests: residents may prioritise quiet streets while owners seek growth and managers seek capacity. The clash does not mean communities are outside the map; it shows they are on it with different goals. Planning disputes, petitions, and local hearings are practical evidence of that stake. A firm that treats neighbours as irrelevant often discovers the conflict in delayed permits or damaged reputation. Conflicting interests are normal stakeholder politics, not proof that community voice is illegitimate.",
        "A town that relies on one major employer has a clear stake in that firm's survival because jobs, local shops, and tax bases move with the plant. Single-employer towns illustrate community dependence vividly.",
        "Communities can be stakeholders without signing contracts with the firm. Effect and interest suffice; a formal supply agreement is not required for membership.",
    ],
    "CASE 3.6.12": [
        "Government interest does not vanish wherever markets operate. Even lightly regulated markets still involve tax, law, and public policy stakes. Formal rules may be thin, yet the state interest remains.",
        "Government is a stakeholder through tax, regulation, and policy, not only when it owns shares in nationalised industries. Shareholding is sufficient but not necessary. Ordinary private firms still sit inside the state's interest field.",
        "Regulators represent broader public interest when they set business rules on safety, competition, environment, or consumer protection. Those rules bind firms and reshape stakeholder outcomes for communities and customers. Calling regulation a pure paperwork burden misses its public-interest role in the stakeholder frame. A bakery or manufacturer facing hygiene or emissions standards meets the state as an interested party with a mandate beyond private profit. Regulatory voice is therefore a government stakeholder channel, not an outsider nuisance.",
        "Government has a stake in local tax-paying businesses through revenue, employment, and compliance, not merely through fixed fees. Trading activity feeds public budgets and policy goals. Treating the link as a flat fee only understates the interest.",
        "Government has an interest in business activity through tax, regulation, and public policy. Those channels make the state a stakeholder in firms within its jurisdiction.",
    ],
    "CASE 3.6.13": [
        "Superficial eco-labels without operational change do not fully meet environmental stakeholder expectations. Labels without process improvement are exactly the thin response those stakeholders reject.",
        "Real environmental action matters more than sprinkling the word sustainable through advertising. Stakeholders looking for genuine change discount empty wording. Advertising vocabulary is not a substitute for operational improvement.",
        "Environmental action requires process and product change, not only a logo refresh. Swapping colours on packaging while emissions, waste, or sourcing stay put fails the substance test. Environmental stakeholders watch operations, audits, and measurable impacts. A logo-only programme is green presentation without green practice. Expecting a badge to replace improvement misunderstands what those stakeholders ask firms to do.",
        "Environmental stakeholders expect real action rather than superficial green marketing alone. Substantive cuts in harm, better processes, and honest reporting outrank slogans. That expectation is the core of the environmental stake described here.",
        "Marketing slogans without operational change do not satisfy environmental stakeholders. Empty claims leave the underlying impacts untouched and trust eroded.",
    ],
    "CASE 3.6.14": [
        "Greenwash misleads stakeholders by exaggerating environmental performance beyond what operations actually deliver. The gap between claim and practice is the defining harm.",
        "Greenwash weakens long-term trust once stakeholders notice the exaggeration. Honest reporting builds credibility better than inflated eco-claims. Trust gains from greenwash are illusory and short-lived.",
        "Greenwash is not exceeding standards while modestly understating success. It is the opposite pattern: overstating green performance or hiding harm behind eco-language. Firms that quietly beat targets are not greenwashing by understatement; firms that advertise purity while pollution rises are. Mixing the definition with humble over-compliance confuses virtue with deception. The warning about greenwash targets misleading inflation of green credentials.",
        "Advertising recyclable packaging while increasing pollution elsewhere is a classic greenwash pattern: a narrow green claim masking wider harm. Stakeholders who dig into operations will see the mismatch. That risk is exactly why greenwash damages relations.",
        "Empty eco-slogans without process change can erode stakeholder trust over time as gaps become visible. Credibility falls when words outrun deeds.",
    ],
    "CASE 3.6.15": [
        "Disclosing environmental impacts helps stakeholders judge whether firms take genuine action or only talk. Transparency is a tool for separating substance from spin.",
        "Environmental reporting communicates firm impacts to interested stakeholders such as communities, investors, and regulators. The report is a channel for that information, not a substitute for every operational fix, yet it is part of responsible disclosure.",
        "Sustainability reports can inform communities and investors about emissions, waste, resource use, and planned improvements. Readers use those disclosures to compare firms and to press for better performance. When reports are honest, they support accountability; when they are decorative, they slide toward greenwash. Either way, reporting is discussed as a business responsibility because environmental effects spill beyond the factory gate. Communities living near plants and investors pricing long-run risk both sit in the audience for that information.",
        "Environmental reporting without operational improvement may still mislead stakeholders if glossy pages imply progress that plants have not made. Disclosure paired with inaction can become another greenwash route. Reports need substance behind them.",
        "The natural environment is treated as a stakeholder expecting substantive corporate response to impacts. That framing pushes firms beyond ignoring ecological effects as external to the business.",
    ],
    "CASE 3.6.16": [
        "Environmental spending can reduce short-term profit, creating tension between owners seeking returns and environmental goals seeking cleaner operations. That owner-environment conflict is a standard stakeholder clash.",
        "Plans that maximise profit may raise noise or pollution that communities resist. Growth preferred by owners can collide with resident preferences for quieter, cleaner streets. Profit aims and community concerns often pull apart on the same project.",
        "Different stakeholder groups can want different outcomes from one decision: owners may favour cost cutting, employees job security, communities lower emissions, and suppliers steadier orders. A single investment choice rarely satisfies every group at once. Recognising conflict is part of stakeholder analysis rather than a failure of the framework. Bakeries choosing night baking, factories adding shifts, or firms delaying green upgrades all surface competing interests. The chapter treats that plurality of aims as normal, not as a rare glitch.",
        "Stakeholder groups do not all want the same outcome on every decision. Interests diverge by role and exposure. Assuming universal agreement erases the conflict the topic exists to analyse.",
        "Stakeholder conflict is common and appears among many pairs, not only owners versus customers. Environment, community, staff, and suppliers also clash with one another and with owners.",
    ],
}


def apply() -> None:
    data = json.loads(PATH.read_text())
    slice_cases = data[64:96]
    ids = [c["case_id"] for c in slice_cases]
    assert ids[0] == "CASE 3.5.01" and ids[-1] == "CASE 3.6.16", ids[0:1] + ids[-1:]
    missing = [cid for cid in ids if cid not in EXPL]
    if missing:
        raise SystemExit(f"missing explanations for {missing}")
    extra = sorted(set(EXPL) - set(ids))
    if extra:
        raise SystemExit(f"extra explanations for {extra}")

    for c in slice_cases:
        key = c["answer_key"]
        bodies = list(EXPL[c["case_id"]])
        if len(bodies) != 5:
            raise SystemExit(f"{c['case_id']}: need 5 bodies, got {len(bodies)}")
        opens = [b.split("\n")[0].strip().lower()[:40] for b in bodies]
        if len(set(opens)) < 5:
            raise SystemExit(f"{c['case_id']}: duplicate openings {opens}")
        lens = [len(b) for b in bodies]
        if any(n < 140 for n in lens):
            raise SystemExit(f"{c['case_id']}: body under 140; lens={lens}")
        if max(lens) - min(lens) < 140:
            raise SystemExit(f"{c['case_id']}: spread {max(lens) - min(lens)} < 140; lens={lens}")
        if not any(n >= 320 for n in lens):
            raise SystemExit(f"{c['case_id']}: need >=1 >=320; lens={lens}")
        if not any(n <= 300 for n in lens):
            raise SystemExit(f"{c['case_id']}: need >=1 <=300; lens={lens}")
        expl = [wrap(bodies[i], bool(key[i])) for i in range(5)]
        for i, e in enumerate(expl):
            if "\u2014" in e or "—" in e:
                raise SystemExit(f"{c['case_id']} {chr(65 + i)}: em dash")
        c["tactical_explanations"] = expl

    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
    print(f"Wrote {len(slice_cases)} cases {ids[0]} .. {ids[-1]}")


if __name__ == "__main__":
    apply()
