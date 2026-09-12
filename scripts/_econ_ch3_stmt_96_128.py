#!/usr/bin/env python3
"""Hand-authored statement-only tactical_explanations for ch3 cases [96:128]."""
from __future__ import annotations

import json
from pathlib import Path

PATH = Path("/workspace/src/data/economics-cases-ch3-subtopics.json")
START, END = 96, 128


def wrap(body: str, truth: bool) -> str:
    body = body.replace(chr(0x2014), ", ").replace(chr(0x2013), "-").strip()
    v = "True" if truth else "False"
    return f"{body}\n\nSo the statement is {v}."


# Per case: list of 5 body strings (no closer). Truth taken from answer_key.
BODIES: dict[str, list[str]] = {}

BODIES["CASE 3.6.17"] = [
    "Legal form and financing rules shape how a firm reports, raises funds, and answers to owners, lenders, and staff. A partnership and a limited company do not face the same liability or disclosure path, and that difference can help or hinder meeting stakeholder needs. Structure is therefore part of success, not a side detail.",
    "Partners share personal liability differently from shareholders in a company. Switching from partnership to company can reallocate who bears losses and who can walk away. Owner risk sharing really does change with that legal choice.",
    "Course materials list legal structure beside finance, markets, and costs as something that can sway overall business success. Form affects capital access, liability, and how easily outsiders trust the firm. A bakery set up as a sole trader faces different constraints from one registered as a company when lenders or landlords assess risk. Those constraints feed into whether owners, staff, and suppliers stay satisfied over time. Listing legal structure among success factors is therefore accurate for this chapter, not an optional footnote.",
    "Companies often owe accounts, tax filings, and governance reports to owners, regulators, and sometimes employees. Legal form sets which of those duties bite and how public they are. Reporting toward stakeholder groups is not identical across all forms.",
    "Duties to shareholders, partners, or members differ by legal form. So do duties toward creditors when insolvency rules kick in. Legal form shapes those obligations across stakeholder groups in ways owners feel day to day.",
]

BODIES["CASE 3.6.18"] = [
    "Debt versus equity decides who loses first when cash runs short. Owners and lenders share risk differently under each mix. Financial structure therefore matters to owner stakeholders, not only to the balance sheet layout.",
    "Creditors watch gearing because unpaid loans threaten their recovery. Owners watch it because leverage can wipe equity. Calling financial structure an accountants-only topic ignores those stakeholding interests completely.",
    "Borrowing shifts downside toward lenders if covenants fail, and toward owners if equity absorbs the first losses. A bakery that expands on bank loans places repayment pressure on a different group from one funded only by owner savings. Stakeholder groups who bear risk therefore move when borrowing decisions change. Claiming that borrowing never reallocates risk among stakeholders contradicts how debt contracts work in practice. The absolute \"no effect\" wording fails as soon as an ordinary loan is compared with pure equity finance.",
    "Interest and dividends are funded from different claims on cash. Equity and debt mix decides whose returns get priority when profits are thin. Treating that mix as unrelated to stakeholder returns invents a wall that finance does not draw.",
    "Accountants record the mix, yet creditors and owners live with its consequences for repayment and residual claims. Financial structure is their concern as well, not a bookkeeping hobby sealed off from stakeholder analysis.",
]

BODIES["CASE 3.6.19"] = [
    "Even an IT-support venture loses customers if it ignores what local clients actually want fixed and how they want it priced. Taste and preference language in the stem still points to market awareness: miss the trend and both buyers and the firm's own returns suffer.",
    "A bakery that tracks what regulars prefer keeps the two-way link of supply and demand alive. Market awareness supports that mutual dependency with buyers through menus, hours, and product mix adjustments.",
    "Market awareness means noticing customer wants and rival moves before they empty the till. A small IT-support firm that watches complaint themes and nearby competitors can adjust packages, response times, and prices. Those adjustments answer pressures from customer stakeholders and from competing providers chasing the same contracts. Ignoring the market leaves both groups unheard until revenue falls. The statement correctly ties awareness to handling those stakeholder pressures, not to a vague slogan about being informed.",
    "Customers are the first people market awareness serves: preference shifts, service gaps, and willingness to pay. Rivals matter too, but excluding customers invents a rival-only rule the idea does not use.",
    "Knowing what rival bakeries offer helps an IT-support owner keep quality sharp for regular buyers who can walk away. Rival watching protects customer relationships rather than replacing them.",
]

BODIES["CASE 3.6.20"] = [
    "Cost control and profit decide whether owners see returns and whether wage budgets stay open. Managing both therefore shapes owner returns and employee jobs together across ordinary trading cycles.",
    "Suppliers lose orders when a firm cuts purchasing after weak profits, and staff lose shifts when payroll is trimmed. Costs and profitability reach far beyond owners alone into those other groups.",
    "Cheaper ingredients can dull flavour, shrink portions, or raise complaints at the counter. Customer satisfaction is a stakeholder outcome tied directly to what goes into the product. A bakery that slashes flour quality to protect margins often pays for it in fewer returning buyers. Saying ingredient cost cuts never touch customer satisfaction denies that product channel. The link from cost decisions to customer experience is ordinary retail reality, so the \"no effect\" claim is wrong.",
    "Unprofitable firms shed hours, freeze hiring, or close sites. Job security moves with whether the business can still earn a surplus. Pretending employees are insulated from profitability ignores that dependence.",
    "Suppliers need repeat orders to plan milling and deliveries. Weak profitability often shrinks purchasing plans, so future orders are not sealed off from profit levels at the buying firm.",
]

BODIES["CASE 3.6.21"] = [
    "Keeping profit inside the firm can fund equipment, branding, or capacity that lifts future value. Owners who skip a dividend may be aiming at that longer build rather than at cash today.",
    "When sales disappoint, owners absorb falling residual income and capital losses on what they invested. Risk and reward stay linked for them rather than floating apart.",
    "Successful risk bearing is partly repaid when the business or its shares become worth more over time. Owners who stayed through lean months see that upside as compensation for earlier downside. Rising value is not a gift separate from risk; it is one way the chapter describes owner reward. A neighbourhood bakery that grows its brand and cash flow can lift the sale price of the business for the same owners who funded the early losses. The statement captures that reward channel correctly.",
    "Owners commonly want shares or the whole business to become more valuable over the years. That preference sits beside profit extraction as a core owner aim in stakeholder analysis.",
    "Stronger brands can raise what buyers would pay for the firm as a going concern. Brand building is one practical path to higher owner valuation when trading stays healthy.",
]

BODIES["CASE 3.6.22"] = [
    "Managers have careers, bonuses, and reputations tied to the firm. Being paid does not erase that stake in outcomes. Calling them non-stakeholders because they execute orders misreads the definition used here.",
    "Customers depend on quality and supply without ever joining the board. Board seats are not the entry ticket to stakeholder status. Limiting customers to directors invents a rule the chapter does not use.",
    "Shareholders matter, yet employees, customers, suppliers, communities, and regulators also hold interests in a listed company. Stakeholder language is deliberately wider than the shareholder register. A listed bakery chain still affects staff wages, supplier invoices, and neighbourhood traffic. Shrinking the set to shareholders alone collapses the concept the student is claiming to apply. The assertion that only shareholders count is therefore false for this chapter's definition.",
    "Customers and employees are classic stakeholder groups even when they own no shares. Ownership is one route into the set, not the only route. Excluding them contradicts mutual-dependence teaching in the unit.",
    "Anyone affected by or interested in the business can be a stakeholder under the wide definition. Shareholders are included in that set, not exclusive owners of the label.",
]

BODIES["CASE 3.6.23"] = [
    "Ordinary employees care about keeping their jobs through quiet months, not only managers. Job security concerns run through the payroll, not just the senior suite sitting above the shop floor.",
    "Wages matter, and so does the chance that the job will still exist next month. Job security sits beside income as a legitimate employee stakeholder interest in this chapter.",
    "Staff wages stop if the firm closes, and insecurity rises long before closure when shifts are cut. Continued operation is therefore the platform under both pay and security. A bakery assistant depends on daily trading just as a plant worker depends on production schedules. That dependence is why employees appear in stakeholder maps. The statement correctly ties livelihoods to the firm's ongoing activity rather than treating jobs as free-standing guarantees.",
    "Share ownership is not required for stakeholder status in the chapter definition. Employees hold interests through pay and security even when the register lists none of their names.",
    "Managers and employees both need the firm to keep trading if their livelihoods are to continue. Shared dependence on profitable operation is real for both groups on the payroll.",
]

BODIES["CASE 3.6.24"] = [
    "Being paid for last week's flour does not feed next week's production plan at the mill. Suppliers also need predictable orders so they can staff shifts and stock ingredients ahead of demand.",
    "Past payment settles one invoice; it does not remove the need for a steady order book afterward. Predictable volumes remain relevant after cash for prior deliveries arrives.",
    "When a bakery cancels or delays flour orders, the miller's cash timing and staffing roster both wobble. Overtime plans, casual hires, and supplier-to-supplier purchases further up the chain can unravel. That threat is why order reliability is a stakeholder issue, not a courtesy. A single late schedule can leave bags unsold and wages uncovered. The statement is right that delayed or cancelled orders can endanger the supplier's ability to keep people paid and bills current.",
    "Stakeholder interest continues across future contracts and planning cycles. Settling one invoice closes that bill; it does not end the relationship or the interest in what comes next.",
    "Suppliers watch future volumes because idle capacity still costs money for wages and storage. Payment for past loads alone does not capture their full ongoing stake.",
]

BODIES["CASE 3.6.25"] = [
    "Regulars who count on a bakery for daily bread lose out when quality slips or trays arrive late. Customer harm from unreliable supply is a stakeholder effect, not a private annoyance only.",
    "Fair prices and steady quality bring neighbourhood buyers back week after week. Those two conditions keep loyalty working at the counter for customer stakeholders.",
    "Owners care about margins, yet quality and price are lived first by the people eating the product. Customer stakeholders judge whether the loaf is worth the coin and whether it tastes as expected. A bakery that treats quality as an owner-only metric ignores who actually consumes the goods. Price spikes and stale batches hit buyers directly. Claiming quality and price matter only to owners erases the customer side of mutual dependence.",
    "Households rely on firms for safe, available products in the right quantity at usable times. That dependence is exactly why customers sit inside stakeholder analysis.",
    "If the shop closes, locals lose a convenient supply of bread and related goods nearby. Neighbourhood buyers therefore hold a stake in the bakery staying open for daily needs.",
]

BODIES["CASE 3.6.26"] = [
    "Jobs, traffic, and local spending from nearby firms change residents' daily lives in concrete ways. Those effects make local communities stakeholders around the site.",
    "Communities need not buy from the firm to feel noise, congestion, or hiring waves. Expansion can still spark conflict without a direct trading relationship at the till.",
    "Employment effects on a town are public enough to enter stakeholder maps even when each contract is private between firm and worker. A plant that hires hundreds reshapes household incomes and services nearby. Calling jobs private does not remove community interest in whether those jobs stay. Stakeholder analysis already includes such spill-overs. The claim that community job concerns fall outside stakeholder issues is therefore wrong.",
    "Residents near an industrial plant notice noise, pollution, and hiring patterns. Those impacts create genuine care about how the firm runs, which is stakeholder territory.",
    "Commercial success influences hiring levels and local spending in surrounding streets. Communities near a plant therefore have an interest in how the firm performs commercially.",
]

BODIES["CASE 3.6.27"] = [
    "Even lightly regulated markets still involve tax, contract law, and basic standards that firms must meet. Government interest does not vanish just because planners step back from day-to-day prices.",
    "Tax takes a share of trading results that rises and falls with activity, not only a flat unrelated fee. Government therefore holds a stake in how local firms perform.",
    "When inspectors enforce safety, labelling, or competition rules, the state is acting on interests that reach beyond any single owner. That enforcement posture is one way government shows up as a stakeholder in firm conduct. A bakery facing hygiene checks experiences that stake directly. Rule enforcement is not neutral scenery; it expresses public claims on how businesses behave. The statement correctly reads enforcement as stakeholder action rather than as an outsider hobby.",
    "Compliance inspections connect oversight to how firms treat workers, customers, and the environment. Government's stake shows up in that monitoring link to wider interests.",
    "Tax takes rise and fall with trading success across the local base. Collection therefore gives government a stake in local firm performance, not a detached spectator seat.",
]

BODIES["CASE 3.6.28"] = [
    "Slogans on a website leave emissions and waste unchanged on the shop floor. Environmental stakeholders look for process change, not catchphrases alone that never reach production.",
    "A green leaf printed on a bag does not clean a production line or cut effluent. Cosmetic labels without operational change fail to meet environmental expectations fully.",
    "Environmental stakeholders want measurable cuts in harm: cleaner processes, less waste, safer disposal. Marketing copy can support those measures but cannot replace them. A firm that prints eco while leaving boilers and effluent untouched still disappoints that group. The chapter distinguishes substantive action from slogan-led image work. Beyond slogans, the expectation of real measures remains, which is exactly what this statement affirms.",
    "Rebranding packaging while processes stay dirty does not satisfy environmental stakeholders who track real harm. Process improvement is still required beside any new label.",
    "Advertising the word sustainable matters less than shop-floor action that actually reduces harm. Real measures outrank the label when environmental stakeholders judge performance.",
]

BODIES["CASE 3.6.29"] = [
    "Wages and job security give employees a stake even when they hold no shares in the register. Share ownership is not the filter that decides who counts as a stakeholder.",
    "Late payment or cancelled orders hit a supplier's cash and planning for staff and stock. Those decisions are why suppliers count as stakeholders in the buying firm's map.",
    "A plant that adds lorry traffic or hiring changes the neighbourhood around it. Residents who live with that noise, congestion, or job access are affected parties. Stakeholder language covers them even if they never buy the factory's output. Communities near a site therefore belong in the map beside owners and staff. The statement is right to count those traffic and job effects as stakeholder grounds.",
    "The definition reaches anyone affected by or interested in the business across its activities. Shareholders are one group inside a wider set, not the whole set by themselves.",
    "Customers who rely on a firm's products stand in mutual dependence with that firm for supply. That dependence makes them stakeholders without any need for share certificates.",
]

BODIES["CASE 3.6.30"] = [
    "Weak trading can cut dividends, retained earnings, and the market value of capital owners put in. Poor performance therefore lands on owner returns and invested value together.",
    "Owners who took earlier downside often see rising share or business value as the matching upside later. Reward follows accepted risk rather than arriving as a free guarantee.",
    "Businesses do not guarantee profits; many fail or earn nothing for long stretches. Owners can lose the capital they risked. Saying reward arrives without risk invents a safety net the chapter does not grant. A bakery that never turns a surplus still leaves its owners exposed. Guaranteed profit would erase the owner risk story entirely, so the claim is false.",
    "Profit and a return for bearing risk are standard owner aims in stakeholder teaching for this unit. Seeking those outcomes is ordinary owner behaviour, not optional colour.",
    "Owners know invested capital can shrink when results disappoint over a season or longer. Accepting that downside exposure is part of the owner role described in the chapter.",
]

BODIES["CASE 3.6.31"] = [
    "Manager pay, bonuses, and job security still track firm health over time when results turn. Fixed salary language does not let managers ignore results forever without personal consequence.",
    "When trading stops permanently, wage payments stop with the payroll that funded them. Staff cannot cash cheques from a firm that no longer exists as a going concern.",
    "Managers draw salaries and careers from continued operation; employees draw wages and security from the same source. Both groups therefore rely on the firm staying open. A closure ends managerial posts and shop-floor jobs together. Mutual livelihood dependence is why both appear on stakeholder lists. The statement correctly pairs managers and employees under that shared reliance rather than treating only one side as exposed.",
    "Firms need labour to bake, deliver, sell, and keep records day after day. Employees need wages, and the firm needs employees; the dependence runs both ways through operations.",
    "Staff-firm dependence is its own livelihood link, separate from customer-supplier market ties. Limiting mutual dependence to market pairs alone is too narrow for this chapter.",
]

BODIES["CASE 3.6.32"] = [
    "Flour supply involves the miller as well as the bakery owners who place the orders. Both sides hold stakes in payment and order continuity. Owner-only wording erases the supplier entirely.",
    "A neighbourhood bakery's flour supplier expects to be paid on time and to see further orders. Those expectations mark a supplier stakeholder in the bakery relationship.",
    "The bakery needs reliable flour quality to bake; the supplier needs the bakery's orders to keep mills busy and invoices flowing. That two-way reliance is mutual dependence in a concrete supply chain. If either side fails, the other feels it quickly in product gaps or idle capacity. Stakeholder analysis uses exactly this kind of pairing. The statement describes that bakery-supplier dependence accurately.",
    "Late bakery orders push the flour supplier's cash timing and staffing off plan for the week. Threats to cash flow and rosters follow delayed schedules into the supplier's own bills.",
    "Buyers need goods in usable condition; suppliers need paid demand that continues. Orders and cash flow tie the two sides together in ordinary trade relationships.",
]

BODIES["CASE 3.6.33"] = [
    "Customers often rely on particular suppliers for quality, location, or habit in weekly shopping. Dependence is not one-way from firm to revenue alone; buyers feel supplier continuity too.",
    "Losing a relied-upon supplier is itself a stakeholder link: access, price, and convenience change for those customers. Saying there is no link contradicts that everyday effect on households.",
    "Households and firms both need suppliers to make goods available when wanted. Customers rely on that availability just as suppliers rely on demand. A bakery without flour cannot serve buyers; buyers without the bakery lose a convenient source. Denying customer reliance on suppliers breaks that chain. The statement's one-sided wording is therefore false.",
    "If a trusted supplier closes its doors, customers lose access to what they regularly bought there. That loss is a direct customer effect tied to the supplier's fate.",
    "Reliable supply matters to buyers who plan meals and menus; paid custom matters to suppliers who plan output. The reliance runs both directions through the same transactions.",
]

BODIES["CASE 3.6.34"] = [
    "Noise from a new plant lands on nearby residents whether or not they buy the output. That impact creates community stakeholder interests in how the firm operates day and night.",
    "Warehouse jobs feed local incomes through wages spent nearby. Employment linked to the site gives the community a stake in continued operation of that facility.",
    "A new warehouse changes lorry flows, hiring patterns, and sometimes housing demand in the town. Those shifts create interests for residents who live with the traffic and for workers who want the jobs. Community stakeholder status follows from those effects, not from share certificates. Opposition or support both signal that the town is inside the firm's impact zone. The statement correctly treats traffic and jobs as grounds for community stakeholder interests.",
    "When neighbours fight a warehouse plan, their preferences clash with the developer's growth aims. That clash is conflicting stakeholder interests playing out in planning meetings.",
    "Extra lorry movements raise noise and congestion for nearby residents along approach roads. Those effects are stakeholder impacts from the new facility on the surrounding community.",
]

BODIES["CASE 3.6.35"] = [
    "Rules try to let firms trade while shielding wider groups from avoidable harm. That balancing aim is what regulation is for when stakeholder interests are mapped against business activity.",
    "Product safety, competition, and reporting rules express public protection goals in written form. Regulator-set business rules reflect that wider public interest rather than private whim alone.",
    "Businesses still operate inside tax systems, contract law, and sector standards. Independence from public policy is a myth for ordinary firms. Regulators hold a stakeholder role precisely because policy shapes what firms may do. A bakery closed for hygiene breaches meets that role in blunt form. Claiming regulators have no stakeholder part because firms are independent denies the institutional setting of markets.",
    "Environmental rules speak for community and public interests the state is charged to protect. Government acts as a stakeholder through those rules when firms affect shared resources.",
    "Roads move freight and customers as well as private leisure trips across a region. Public road building is tied to business logistics, not mere amusement for officials.",
]

BODIES["CASE 3.6.36"] = [
    "Published sustainability figures let investors and communities see emissions, waste, or resource use. That information role is why disclosure matters to both groups when they judge a site.",
    "Locals assessing a facility often use published environmental data as evidence of impacts. Communities may rely on those disclosures when arguing about expansion or mitigation.",
    "Investors comparing environmental claims need comparable data, not only glossy ads. Sustainability disclosures give them a basis to test whether performance matches marketing. A components maker that reports spills and energy use lets capital providers judge credibility. Without that paper trail, green claims stay hard to verify. The statement correctly assigns disclosures a role in investor judgment of environmental credibility.",
    "A green logo on packaging does not replace structured environmental reporting to interested parties. Labels and reports serve different jobs; one does not retire the other.",
    "Reporting is meant to reveal impacts to interested parties, including communities near facilities. Hiding impacts would defeat the purpose of the disclosure exercise entirely.",
]

BODIES["CASE 3.6.37"] = [
    "Cash spent on cleaner kit can reduce what is left for short-term profit targets this year. Higher profit aims may therefore clash with environmental spending on abatement.",
    "Many decisions force a choice between margin protection and abatement cost. Perfect alignment in every decision is unrealistic; trade-offs appear often on the same budget line.",
    "Owners may want faster payback while environmental groups want deeper cuts that cost more now. Spending priorities diverge on timing and scale. Agreement without exception would erase conflict from the map, yet chapter examples of profit versus environment exist precisely because priorities collide. A firm delaying filter upgrades to protect dividends shows the split. Absolute harmony on every priority is therefore false.",
    "Pollution control that raises costs squeezes residual returns owners care about each quarter. Tension with owner interests is real when abatement is expensive relative to cash flow.",
    "Cleaner production outlays can trim near-term profit and pull owner aims away from environmental aims. That tension between groups is acknowledged correctly in the statement.",
]

BODIES["CASE 3.6.38"] = [
    "Bigger sites mean more vans, earlier baking, and louder yards before dawn. Expansion plans can clash with what neighbours want for noise and traffic on residential streets.",
    "Objections to a bakery extension show owners and community pulling different ways over the same project. Conflicting stakeholder interests appear clearly in that local dispute.",
    "An IT-support venture that wants growth through a larger bakery footprint may schedule more deliveries past homes that prefer quiet streets. Growth ambition and neighbour preferences over traffic then conflict directly. Stakeholder analysis expects such clashes when one group's gain is another's cost. The mixed wording in the stem still points to that growth-versus-amenity tension. The statement correctly names the conflict between expansion aims and neighbours' wish to limit delivery traffic.",
    "Extra bakery profit can rise with scale while noise rises for people next door at peak hours. Owners and neighbours can be pulled in different directions by the same extension project.",
    "Neighbours who oppose an extension are defending local amenities against the venture's growth plans. That opposition displays conflicting stakeholder interests over how the area should feel.",
]

BODIES["CASE 3.6.39"] = [
    "Staff and the firm depend on each other for work and wages across every shift. Mutual dependence is not limited to customer-supplier pairs out in the product market.",
    "Exam review language still points to the core definition used in the unit: stakeholders are anyone affected by or interested in the business. That wide net is the standard reading.",
    "Capital providers matter, yet stakeholder analysis also covers employees, customers, suppliers, communities, and government. Restricting the tool to shareholders because they supply capital confuses one important group with the whole framework. A firm can please investors and still harm a river community. Analysis that stops at the share register misses those effects. The only-shareholders limit is therefore false.",
    "Persuasive slogans without real environmental change are greenwash, not genuine satisfaction. Environmental stakeholders are not paid in marketing copy alone when harm continues.",
    "Even well-managed firms can face owner-versus-community or profit-versus-environment clashes. Good success-factor work does not erase conflicting interests from the stakeholder map.",
]

BODIES["CASE 3.6.40"] = [
    "Shop staff need the bakery for wages and for the chance the job continues through quiet seasons. Those needs mark them as employee stakeholders in how the shop trades.",
    "Owners want profit from daily sales and accept that poor trading can cut the value of what they put in. Risk and reward sit with them as owner stakeholders.",
    "A neighbourhood bakery touches owners seeking returns, staff seeking pay, flour suppliers seeking orders, and neighbours living with early deliveries. Each group holds a distinct interest in how the shop runs. Stakeholder maps for small food businesses routinely include all four. Leaving any one out would miss either internal livelihoods or external spill-overs. The statement correctly gathers owners, staff, suppliers, and neighbours as stakeholders together.",
    "Capital from an IT-support venture does not monopolise stakeholder status around the bakery. Staff, suppliers, and neighbours still hold interests regardless of who funded the start.",
    "The flour supplier wants timely payment and continuing orders from the bakery counter. Those expectations define a supplier stakeholder stake in the shop's buying behaviour.",
]

BODIES["CASE 3.6.41"] = [
    "Plant employees feel hiring freezes, safety rules, and closure risks from corporate decisions upstream. They are stakeholders inside the manufacturer's operations across sites.",
    "Host-country regulators tax, inspect, and license the manufacturer's sites under local law. Those roles create government stakeholder interests in how the firm operates locally.",
    "Towns near components plants see payroll spending in shops and pressure on roads or housing when shifts expand. Communities can therefore be stakeholders through jobs and local spending even when they never buy a component. Multinational footprints multiply those local effects across countries. Ignoring community stakes would shrink the analysis to the head office only. The statement correctly counts nearby communities among parties affected by the facilities.",
    "Across operating countries the manufacturer touches employees, suppliers, communities, and regulators in parallel. That spread matches a multinational stakeholder map rather than a single-office list.",
    "Shareholders are one group among many around a global producer. Employees, suppliers, communities, and regulators also hold stakes in a multinational manufacturer of components.",
]

BODIES["CASE 3.6.42"] = [
    "Unsupported eco-claims that later fail destroy trust with investors and communities. Honest reporting builds more durable stakeholder trust than bold fiction about green performance.",
    "Eco-labels stuck on boxes while processes stay dirty disappoint environmental stakeholders quickly. Superficial labelling without operational change fails their expectations of real improvement.",
    "If pollution rises while packaging claims stay green, environmental stakeholders are not satisfied. Performance and claims have moved in opposite directions. A firm dumping more waste while advertising friendly boxes is the textbook greenwash pattern. Satisfaction would require harm to fall, not merely words to brighten. The claim that green packaging alone satisfies those stakeholders even as pollution climbs is therefore false.",
    "Greenwash exaggerates environmental performance in ads relative to what the firm actually does on site. That exaggeration misleads stakeholders who take the ads at face value.",
    "Promoting recyclable boxes while dumping waste illegally is a clear greenwash illustration for any exam. Advertising and practice have come apart in a way stakeholders can spot.",
]

BODIES["CASE 3.6.43"] = [
    "Payment fairness shapes supplier cash flow, which is central to how that stakeholder is treated week to week. Cash concerns belong inside stakeholder analysis of the buying firm.",
    "Late invoices starve supplier working capital even if the buyer's finance team feels only a paperwork delay. Supplier stakeholders feel the cash gap directly in their own bills.",
    "Fair payment terms decide when a supplier can pay its own staff and creditors. That timing is stakeholder treatment, not a private accounting preference. A bakery that stretches flour invoices may keep its own books tidy while harming the miller's liquidity. Stakeholder analysis notices that imbalance. The statement correctly lifts fair terms above a narrow accountant-only frame.",
    "A signed contract still leaves interest in whether invoices are paid on the dates promised in the schedule. Timing remains a live stakeholder concern after signature day.",
    "Legal wording may set the terms on paper, yet fairness to suppliers is also a stakeholder issue about how partners are treated when cash is tight in practice.",
]

BODIES["CASE 3.6.44"] = [
    "When daily practices match what staff believe is right, engagement tends to rise on the floor. Value fit between person and company supports that engagement for employee stakeholders.",
    "Shared values help people pull in the same direction on quality and service standards. That alignment can support overall business success when teams face busy periods together.",
    "Cooperation on targets is easier when personal standards and company standards do not constantly clash. Alignment reduces friction over how work should be done and why it matters. A bakery team that shares pride in honest ingredients will defend quality without constant policing. Stakeholder teaching treats that cultural fit as a success-related factor, not as soft decoration. The statement correctly links value alignment to better cooperation on business objectives.",
    "Staff who share organisational values often feel the firm's wins as partly their own achievement. Closer identification with success follows that overlap between personal and company aims.",
    "Aligned values make it simpler for employees and managers to pursue the same objectives each week. Cooperation benefits from that shared ground when priorities compete for time.",
]

BODIES["CASE 3.6.45"] = [
    "Many owners care about building lasting value in the firm, not only about draining cash now. Long-term value sits inside owner interests beside any short-term extraction.",
    "Risk and reward for owners include whether the business grows in value over years of trading. Long-term value growth is tied to those concerns, not unrelated to stakeholder aims.",
    "Choosing dividends versus ploughing profit back changes how much capital stays inside to fund future growth. That weighing alters the long-term value path owners care about. A bakery paying every euro out as cash may please short-term pockets while starving equipment upgrades. Reinvestment can reverse that trade-off. The statement correctly connects the dividend-reinvestment choice to long-term owner value.",
    "Retained profit can fund capacity and brand that raise what the business is worth later on sale. Keeping earnings in can build long-term owner value rather than only today's cash.",
    "Reinvestment decisions change owner wealth prospects through future capacity and earnings power. They are not an accountants-only curiosity sealed away from stakeholder interests.",
]

BODIES["CASE 3.6.46"] = [
    "In most markets buyers can walk to another shop or brand when service fails. Claiming switching is impossible everywhere invents a universal lock-in that ordinary retail does not show.",
    "Quality slips do not automatically hand every buyer decisive leverage in every setting. Habit, distance, and thin local alternatives can keep people buying even when the loaf is worse for a while, so revenue need not fall on cue. Treating a quality dip as a guaranteed gift of switching power overstates how quickly influence shows up. Where alternatives are weak, buyers may stay despite poorer quality. The blanket causal wording therefore fails as an always-true rule for this letter.",
    "When quality falls and alternatives exist, customers can leave and take their spending with them. That exit is stakeholder influence working through revenue. A bakery that lets standards slip watches regulars try the shop across the street. Firms feel that pressure as lost sales, which is why customer power appears in stakeholder analysis. The statement correctly links quality decline, switching, and revenue effects without claiming miracles in every market structure.",
    "Organised boycotts after poor service cut sales until practice changes at the counter. That episode shows customer stakeholder power over firm revenue in a public, organised form.",
    "Small daily purchases still add up across many regulars, and buyers can simply stop coming. Quantity per visit does not erase customer power at a neighbourhood bakery.",
]

BODIES["CASE 3.6.47"] = [
    "Factory closure ends the jobs tied to that employer for households in the town. Community job loss follows directly from the shutdown when no replacement employer steps in quickly.",
    "Expansion or closure decisions spill into local incomes, services, and morale beyond the factory gate. Community stakeholders feel those major employer moves in shops and schools nearby.",
    "Residents whose family members work at the plant care about shift patterns, safety, and whether the site stays open. That household link creates a community stakeholder interest in the firm's future even for people who never clock in themselves. A single-company town concentrates that interest further. Stakeholder maps that stop at the employee list miss those family and neighbourhood ties. The statement correctly counts such residents among interested parties.",
    "Wages spent in local shops link community welfare to continued factory operation through retail demand. Local spending is one clear channel of that community stake in the firm.",
    "When jobs cluster at one company, the town's continuity interest focuses on that firm's survival. Concentration of employment sharpens the community stake in whether trading continues.",
]

BODIES["CASE 3.6.48"] = [
    "Firms use publicly funded roads, ports, and power links in daily trading with customers and suppliers. Infrastructure investment therefore sits inside the business stakeholder context for government.",
    "Taxes from trading help pay for roads and networks businesses then use for deliveries and staff travel. Public infrastructure funding and firm performance are linked that way through the budget.",
    "General-use roads still carry delivery vans, staff commutes, and customer trips to shops. Logistics needs ride on the same asphalt as private cars. A regional distributor schedules routes on public highways every day. Claiming zero connection between public roads and business logistics ignores that shared use. The separation asserted here does not hold in ordinary freight practice.",
    "Axle limits, driver hours, and safety checks set by regulators change how road-dependent firms plan routes. Transport standards are a stakeholder-facing constraint on distributor operations.",
    "Public roads move distributor loads as well as private traffic between towns. Business logistics lean on that shared network whenever goods leave the warehouse gate.",
]


def main() -> None:
    data = json.loads(PATH.read_text())
    chunk = data[START:END]
    ids = [c["case_id"] for c in chunk]
    missing = [cid for cid in ids if cid not in BODIES]
    if missing:
        raise SystemExit(f"missing bodies for {missing}")
    extra = sorted(set(BODIES) - set(ids))
    if extra:
        raise SystemExit(f"extra bodies {extra}")

    for c in chunk:
        bodies = BODIES[c["case_id"]]
        if len(bodies) != 5:
            raise SystemExit(f"{c['case_id']}: need 5 bodies")
        expl = []
        for i, body in enumerate(bodies):
            if chr(0x2014) in body:
                raise SystemExit(f"{c['case_id']} {chr(65+i)}: em dash in body")
            expl.append(wrap(body, bool(c["answer_key"][i])))
        c["tactical_explanations"] = expl

    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
    print(f"Wrote explanations for indices [{START}:{END}] {ids[0]} .. {ids[-1]} ({len(ids)} cases)")


if __name__ == "__main__":
    main()
