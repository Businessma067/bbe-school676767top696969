#!/usr/bin/env python3
"""Live-teacher CASE 3.3.*"""
from __future__ import annotations

REWRITES: dict[str, list[str]] = {
    "CASE 3.3.01": [
        """The wording fails because it claims that strong customer demand alone guarantees profit regardless of expenses — and that overreach is wrong. Familiar words, wrong box. Profit compares revenues with costs — strong demand alone never finishes the arithmetic. That conclusion does not follow from the definition. A bakery funding ovens from retained surplus is profit-oriented reinvestment. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording fails because it claims that break-even performance is the primary long-run goal of most profit-oriented manufacturers — and that overreach is wrong. Familiar words, wrong box. Profit-oriented firms aim for revenues above costs; surplus can be reinvested and also rewards risk. That conclusion does not follow from the definition. RiverAid needs donations before kits ship; surplus buys more kits, not private dividends. Correct sorting leaves it false.

So the statement is False.""",
        """The wording fails because it claims that recording revenue without controlling costs satisfies the profit objective — and that overreach is wrong. Profit-oriented firms aim for revenues above costs; surplus can be reinvested and also rewards risk. Against that rule, the absolute wording overreaches. The Red Cross, WWF or Greenpeace cover costs for a mission — cash still matters. Profit-oriented Basics is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
        """The wording fails because it claims that profit means matching expenses exactly while ignoring any surplus — and that overreach is wrong. Familiar words, wrong box. Profit-oriented firms aim for revenues above costs; surplus can be reinvested and also rewards risk. A counter-scene refuses the shortcut. A clinic billing insurers to keep staff paid can remain an NPO when surplus deepens care. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording fails because it claims that covering costs alone is the usual long-run goal of profit-oriented manufacturers — and that overreach is wrong. Familiar words, wrong box. Profit-oriented firms aim for revenues above costs; surplus can be reinvested and also rewards risk. That conclusion does not follow from the definition. A bakery funding ovens from retained surplus is profit-oriented reinvestment. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.

So the statement is False.""",
    ],
    "CASE 3.3.02": [
        """The wording holds because seeking revenue above costs to buy new ovens reflects profit-oriented reinvestment logic. Walk the activity named here. Profit-oriented firms aim for revenues above costs; surplus can be reinvested and also rewards risk. Nothing in the sentence forces a narrower box than the book allows. A bakery funding ovens from retained surplus is profit-oriented reinvestment. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.

So the statement is True.""",
        """The wording holds because retained surplus from profitable sales can finance equipment upgrades. Start from the subsection map. Profit-oriented firms aim for revenues above costs; surplus can be reinvested and also rewards risk. Nothing in the sentence forces a narrower box than the book allows. RiverAid needs donations before kits ship; surplus buys more kits, not private dividends. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording holds because the shop treats higher revenue than expenses as the basis for buying new ovens. Keep Fuhrmann’s wording in front. Profit-oriented firms aim for revenues above costs; surplus can be reinvested and also rewards risk. Nothing in the sentence forces a narrower box than the book allows. The Red Cross, WWF or Greenpeace cover costs for a mission — cash still matters. The labels line up with the book.

So the statement is True.""",
        """That sentence overshoots. Profit-oriented firms aim for revenues above costs; surplus can be reinvested and also rewards risk. So “Durability requires distributing all earnings immediately to owners” cannot stand. A clinic billing insurers to keep staff paid can remain an NPO when surplus deepens care. Bakery Oven Reinvestment is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
        """The wording fails because it claims that oven purchases must come from donations rather than business surplus — and that overreach is wrong. Here is the slip. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. That conclusion does not follow from the definition. A bakery funding ovens from retained surplus is profit-oriented reinvestment. Refuse the category swap and the claim collapses.

So the statement is False.""",
    ],
    "CASE 3.3.03": [
        """Walk the activity named here. Profit-oriented firms aim for revenues above costs; surplus can be reinvested and also rewards risk. Applied to this wording — Cost control matters because profit compares revenue with total expenses — the label holds. A bakery funding ovens from retained surplus is profit-oriented reinvestment. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Start from the subsection map. Profit-oriented firms aim for revenues above costs; surplus can be reinvested and also rewards risk. Applied to this wording — Commercial expansion often relies on profit rather than persistent losses — the label holds. RiverAid needs donations before kits ship; surplus buys more kits, not private dividends.

So the statement is True.""",
        """Profit-oriented firms aim for revenues above costs; surplus can be reinvested and also rewards risk. That is why margin above break-even allows commercial firms to expand operations fits. The Red Cross, WWF or Greenpeace cover costs for a mission — cash still matters. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Start from the subsection map. Profit-oriented firms aim for revenues above costs; surplus can be reinvested and also rewards risk. Applied to this wording — Profit emerges when revenue exceeds total costs in a period — the label holds. A clinic billing insurers to keep staff paid can remain an NPO when surplus deepens care. The labels line up with the book.

So the statement is True.""",
        """Start from the subsection map. Profit-oriented firms aim for revenues above costs; surplus can be reinvested and also rewards risk. Applied to this wording — Profit orientation requires revenues to exceed costs and expenses — the label holds. In Revenue versus Costs, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. A bakery funding ovens from retained surplus is profit-oriented reinvestment.

Note: needing revenue ≠ chasing private owner profit as primary aim.

So the statement is True.""",
    ],
    "CASE 3.3.04": [
        """The wording fails because it claims that charging a cost-recovery fee for some supplies converts a humanitarian NPO into a profit-maximising firm — and that overreach is wrong. Familiar words, wrong box. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. Against that rule, the absolute wording overreaches. A bakery funding ovens from retained surplus is profit-oriented reinvestment. Disaster Relief Funding is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
        """The wording holds because any surplus from donations can be reinvested into further relief work. Start from the subsection map. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. The named pieces sit inside that course category. RiverAid needs donations before kits ship; surplus buys more kits, not private dividends. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. So “Not-for-profit status means the organisation may ignore funding entirely” cannot stand. The Red Cross, WWF or Greenpeace cover costs for a mission — cash still matters.

So the statement is False.""",
        """The wording fails because it claims that dispatching kits without prior inflows is typical NPO practice — and that overreach is wrong. Familiar words, wrong box. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. Against that rule, the absolute wording overreaches. A clinic billing insurers to keep staff paid can remain an NPO when surplus deepens care. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording fails because it claims that relief organisations need no inflows because volunteers supply everything — and that overreach is wrong. That sentence overshoots. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. A counter-scene refuses the shortcut. A bakery funding ovens from retained surplus is profit-oriented reinvestment. Correct sorting leaves it false.

So the statement is False.""",
    ],
    "CASE 3.3.05": [
        """The wording holds because profits can fund new equipment that improves future service capacity. Keep Fuhrmann’s wording in front. Profit-oriented firms aim for revenues above costs; surplus can be reinvested and also rewards risk. Nothing in the sentence forces a narrower box than the book allows. A bakery funding ovens from retained surplus is profit-oriented reinvestment. The labels line up with the book.

So the statement is True.""",
        """Walk the activity named here. Profit-oriented firms aim for revenues above costs; surplus can be reinvested and also rewards risk. Applied to this wording — Retained profit can be reinvested to improve durability and sustainability of a business — the label holds. In Profit Reinvestment, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. RiverAid needs donations before kits ship; surplus buys more kits, not private dividends.

Note: needing revenue ≠ chasing private owner profit as primary aim.

So the statement is True.""",
        """The wording holds because reinvestment supports long-run survival alongside owner returns. Keep Fuhrmann’s wording in front. Profit-oriented firms aim for revenues above costs; surplus can be reinvested and also rewards risk. Nothing in the sentence forces a narrower box than the book allows. The Red Cross, WWF or Greenpeace cover costs for a mission — cash still matters. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording holds because repair shops reinvesting profit into diagnostic tools show commercial reinvestment. Keep Fuhrmann’s wording in front. Profit-oriented firms aim for revenues above costs; surplus can be reinvested and also rewards risk. The named pieces sit inside that course category. A clinic billing insurers to keep staff paid can remain an NPO when surplus deepens care.

So the statement is True.""",
        """The wording fails because it claims that profit cannot fund equipment because it must be distributed immediately — and that overreach is wrong. Familiar words, wrong box. Profit-oriented firms aim for revenues above costs; surplus can be reinvested and also rewards risk. A counter-scene refuses the shortcut. A bakery funding ovens from retained surplus is profit-oriented reinvestment. Refuse the category swap and the claim collapses.

So the statement is False.""",
    ],
    "CASE 3.3.06": [
        """Walk the activity named here. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. Applied to this wording — Selling merchandise can raise funds for habitat work within an NPO model — the label holds. A bakery funding ovens from retained surplus is profit-oriented reinvestment. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording holds because merchandise income helps cover operating costs while funding conservation work. Walk the activity named here. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. Nothing in the sentence forces a narrower box than the book allows. RiverAid needs donations before kits ship; surplus buys more kits, not private dividends. The labels line up with the book.

So the statement is True.""",
        """The wording fails because it claims that habitat work funded from surplus proves the organisation maximises owner wealth — and that overreach is wrong. Profit-oriented firms aim for revenues above costs; surplus can be reinvested and also rewards risk. A counter-scene refuses the shortcut. The Red Cross, WWF or Greenpeace cover costs for a mission — cash still matters. Merchandise and Mission Funding is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

Note: needing revenue ≠ chasing private owner profit as primary aim.

So the statement is False.""",
        """NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. So “A conservation NPO seeks maximum private owner wealth like a listed corporation” cannot stand. A clinic billing insurers to keep staff paid can remain an NPO when surplus deepens care. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """That sentence overshoots. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. So “A conservation NPO must distribute merchandise surplus as private shareholder dividends” cannot stand. A bakery funding ovens from retained surplus is profit-oriented reinvestment.

So the statement is False.""",
    ],
    "CASE 3.3.07": [
        """The wording holds because investors treat retained profit as reward for capital placed at risk. Start from the subsection map. Profits reward owners and investors for risk taken. Nothing in the sentence forces a narrower box than the book allows. A bakery funding ovens from retained surplus is profit-oriented reinvestment.

So the statement is True.""",
        """The wording holds because owner return logic treats profit as payoff for committing capital to uncertain ventures. Profit-oriented firms aim for revenues above costs; surplus can be reinvested and also rewards risk. Nothing in the sentence forces a narrower box than the book allows. RiverAid needs donations before kits ship; surplus buys more kits, not private dividends. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Profit-oriented firms aim for revenues above costs; surplus can be reinvested and also rewards risk. So “Profit orientation excludes any return to owners because customers pay prices” cannot stand. The Red Cross, WWF or Greenpeace cover costs for a mission — cash still matters. Correct sorting leaves it false. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.  Put the counter-scene beside the absolute claim and the definition wins.

So the statement is False.""",
        """Keep Fuhrmann’s wording in front. Profits reward owners and investors for risk taken. Applied to this wording — Profits reward owners and investors for the risk they have taken — the label holds. In Owner and Investor Reward, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. A clinic billing insurers to keep staff paid can remain an NPO when surplus deepens care.

So the statement is True.""",
        """The wording fails because it claims that owners deserve no return when revenues exceed expenses — and that overreach is wrong. That sentence overshoots. Profit-oriented firms aim for revenues above costs; surplus can be reinvested and also rewards risk. Against that rule, the absolute wording overreaches. A bakery funding ovens from retained surplus is profit-oriented reinvestment. Refuse the category swap and the claim collapses.

So the statement is False.""",
    ],
    "CASE 3.3.08": [
        """The wording fails because it claims that investors bear no risk in startups because lenders absorb all uncertainty — and that overreach is wrong. Familiar words, wrong box. Profits reward owners and investors for risk taken. A counter-scene refuses the shortcut. A bakery funding ovens from retained surplus is profit-oriented reinvestment. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording fails because it claims that startups are NPOs because early years may show low margins — and that overreach is wrong. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. Against that rule, the absolute wording overreaches. RiverAid needs donations before kits ship; surplus buys more kits, not private dividends.

So the statement is False.""",
        """The wording fails because it claims that covering costs fully removes any need to reward risk-bearing owners — and that overreach is wrong. Familiar words, wrong box. Profits reward owners and investors for risk taken. A counter-scene refuses the shortcut. The Red Cross, WWF or Greenpeace cover costs for a mission — cash still matters. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """Profits reward owners and investors for risk taken. So “Profit has no connection to capital placed at risk” cannot stand. A clinic billing insurers to keep staff paid can remain an NPO when surplus deepens care. Correct sorting leaves it false. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.  Put the counter-scene beside the absolute claim and the definition wins. Match the book’s category.

So the statement is False.""",
        """That sentence overshoots. Profit-oriented firms aim for revenues above costs; surplus can be reinvested and also rewards risk. So “Risk-bearing founders should expect no return when revenues exceed expenses” cannot stand. A bakery funding ovens from retained surplus is profit-oriented reinvestment. Startup Founder Risk is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
    ],
    "CASE 3.3.09": [
        """Start from the subsection map. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. Applied to this wording — Mission delivery still requires enough inflows to finance operations — the label holds. In Not-for-Profit Organisation Aims, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. A bakery funding ovens from retained surplus is profit-oriented reinvestment.

Note: needing revenue ≠ chasing private owner profit as primary aim.

So the statement is True.""",
        """Keep Fuhrmann’s wording in front. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. That is why not-for-profit organisations pursue a social or environmental mission rather than owner… fits. RiverAid needs donations before kits ship; surplus buys more kits, not private dividends. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Keep Fuhrmann’s wording in front. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. That is why a surplus in an NPO is typically used to further the organisation's purpose fits. The Red Cross, WWF or Greenpeace cover costs for a mission — cash still matters.

So the statement is True.""",
        """The wording holds because humanitarian, conservation, and environmental campaign NPOs all pursue mission delivery rather than private profit. Keep Fuhrmann’s wording in front. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. Nothing in the sentence forces a narrower box than the book allows. A clinic billing insurers to keep staff paid can remain an NPO when surplus deepens care. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording fails because it claims that not-for-profit status means the organisation may ignore funding needs entirely — and that overreach is wrong. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. That conclusion does not follow from the definition. A bakery funding ovens from retained surplus is profit-oriented reinvestment. Correct sorting leaves it false.

So the statement is False.""",
    ],
    "CASE 3.3.10": [
        """Profit-oriented firms aim for revenues above costs; surplus can be reinvested and also rewards risk. That is why surplus from billing can improve patient services rather than owner payouts fits. A bakery funding ovens from retained surplus is profit-oriented reinvestment. The labels line up with the book.

So the statement is True.""",
        """The wording holds because treating patients while covering costs shows mission delivery with financial discipline. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. The named pieces sit inside that course category. In Charity Clinic Cost Coverage, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. RiverAid needs donations before kits ship; surplus buys more kits, not private dividends.

So the statement is True.""",
        """Keep Fuhrmann’s wording in front. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. Applied to this wording — Billing insurers to cover running costs aligns with not-for-profit cost coverage — the label holds. The Red Cross, WWF or Greenpeace cover costs for a mission — cash still matters. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording fails because it claims that billing insurers converts the clinic into a listed corporation — and that overreach is wrong. Familiar words, wrong box. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. That conclusion does not follow from the definition. A clinic billing insurers to keep staff paid can remain an NPO when surplus deepens care.

So the statement is False.""",
        """The wording fails because it claims that community clinics prove NPOs never need to cover staff or supply costs — and that overreach is wrong. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. A counter-scene refuses the shortcut. A bakery funding ovens from retained surplus is profit-oriented reinvestment. Refuse the category swap and the claim collapses.

So the statement is False.""",
    ],
    "CASE 3.3.11": [
        """The wording fails because it claims that nPOs ignore revenue because mission work is voluntary in nature — and that overreach is wrong. Familiar words, wrong box. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. A counter-scene refuses the shortcut. A bakery funding ovens from retained surplus is profit-oriented reinvestment. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording holds because food banks track whether donations cover warehouse rent for ongoing operation. Walk the activity named here. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. The named pieces sit inside that course category. RiverAid needs donations before kits ship; surplus buys more kits, not private dividends. The labels line up with the book.

So the statement is True.""",
        """Walk the activity named here. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. Applied to this wording — Not-for-profit status does not prevent earning surplus reinvested for the mission — the label holds. In Covering Costs in NPOs, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. The Red Cross, WWF or Greenpeace cover costs for a mission — cash still matters.

So the statement is True.""",
        """Familiar words, wrong box. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. So “Mission delivery requires no financial inflows once an NPO is registered” cannot stand. A clinic billing insurers to keep staff paid can remain an NPO when surplus deepens care. Refuse the category swap and the claim collapses. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.

So the statement is False.""",
        """The wording fails because it claims that donor income frees an NPO from covering operating costs responsibly — and that overreach is wrong. Here is the slip. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. That conclusion does not follow from the definition. A bakery funding ovens from retained surplus is profit-oriented reinvestment.

So the statement is False.""",
    ],
    "CASE 3.3.12": [
        """Walk the activity named here. Profit-oriented firms aim for revenues above costs; surplus can be reinvested and also rewards risk. Applied to this wording — Ticket income covering nightly running costs lets performances continue — the label holds. A bakery funding ovens from retained surplus is profit-oriented reinvestment. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.

So the statement is True.""",
        """The wording holds because outreach funded from surplus shows mission reinvestment of NPO gains. Keep Fuhrmann’s wording in front. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. Nothing in the sentence forces a narrower box than the book allows. RiverAid needs donations before kits ship; surplus buys more kits, not private dividends. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """Start from the subsection map. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. That is why performances require covered costs even when the mission is cultural outreach fits. The Red Cross, WWF or Greenpeace cover costs for a mission — cash still matters. The labels line up with the book. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.

So the statement is True.""",
        """NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. That is why reinvesting ticket surplus in outreach uses NPO gains for mission expansion fits. In NGO Theatre Ticket Surplus, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. A clinic billing insurers to keep staff paid can remain an NPO when surplus deepens care.

So the statement is True.""",
        """The wording holds because the theatre combines earned ticket income with mission reinvestment aims. Keep Fuhrmann’s wording in front. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. Nothing in the sentence forces a narrower box than the book allows. A bakery funding ovens from retained surplus is profit-oriented reinvestment. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
    ],
    "CASE 3.3.13": [
        """Profit-oriented firms aim for revenues above costs; surplus can be reinvested and also rewards risk. That is why donor income supports campaigns when earned revenue is limited fits. A bakery funding ovens from retained surplus is profit-oriented reinvestment. The subsection’s definitions back the wording without stretching. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.

So the statement is True.""",
        """The wording fails because it claims that mixed donations and fees cannot sustain an NPO because only one revenue source is allowed — and that overreach is wrong. Familiar words, wrong box. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. A counter-scene refuses the shortcut. RiverAid needs donations before kits ship; surplus buys more kits, not private dividends. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.

So the statement is False.""",
        """The wording fails because it claims that prior surplus cannot fund later aid shipments for humanitarian organisations — and that overreach is wrong. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. A counter-scene refuses the shortcut. The Red Cross, WWF or Greenpeace cover costs for a mission — cash still matters. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording fails because it claims that humanitarian NGOs dispatch kits before any funding because urgency overrides finance — and that overreach is wrong. Here is the slip. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. Against that rule, the absolute wording overreaches. A clinic billing insurers to keep staff paid can remain an NPO when surplus deepens care. Correct sorting leaves it false.

So the statement is False.""",
        """Here is the slip. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. So “Donor gifts remove any need for NPOs to cover operating costs responsibly” cannot stand. A bakery funding ovens from retained surplus is profit-oriented reinvestment. Donations as Revenue is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

Note: needing revenue ≠ chasing private owner profit as primary aim.

So the statement is False.""",
    ],
    "CASE 3.3.14": [
        """The wording holds because retained profit can reward investors for capital exposed to business risk. Start from the subsection map. Profits reward owners and investors for risk taken. Nothing in the sentence forces a narrower box than the book allows. In Investors and Retained Profit, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. A bakery funding ovens from retained surplus is profit-oriented reinvestment.

So the statement is True.""",
        """The wording holds because investors expect profit as compensation for capital committed to the firm. Walk the activity named here. Profits reward owners and investors for risk taken. The named pieces sit inside that course category. RiverAid needs donations before kits ship; surplus buys more kits, not private dividends. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording holds because retained earnings and investor reward both link to business risk-bearing. Start from the subsection map. Profits reward owners and investors for risk taken. Nothing in the sentence forces a narrower box than the book allows. The Red Cross, WWF or Greenpeace cover costs for a mission — cash still matters. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.

So the statement is True.""",
        """The wording fails because it claims that fixed wages to investors replace profit regardless of business performance — and that overreach is wrong. Here is the slip. Profits reward owners and investors for risk taken. A counter-scene refuses the shortcut. A clinic billing insurers to keep staff paid can remain an NPO when surplus deepens care. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording fails because it claims that capital at risk deserves no return when revenues exceed expenses — and that overreach is wrong. Profits reward owners and investors for risk taken. A counter-scene refuses the shortcut. A bakery funding ovens from retained surplus is profit-oriented reinvestment. Correct sorting leaves it false.

So the statement is False.""",
    ],
    "CASE 3.3.15": [
        """NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. That is why donations and membership fees can fund not-for-profit operations fits. A bakery funding ovens from retained surplus is profit-oriented reinvestment. The labels line up with the book. Walk the claim once more with the chapter’s definitions in front and refuse any shortcut that swaps one course category for another; the book’s line is stricter than the absolute wording suggests.  Keep every noun inside the subsection’s own box rather than a neighbouring label.

So the statement is True.""",
        """Keep Fuhrmann’s wording in front. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. Applied to this wording — Trading surplus can support mission spending within an NPO model — the label holds. In NPO Revenue Mix, you are applying the same sorting rule as on the page, not inventing an extra category. Glue each noun to that rule and the assertion survives. RiverAid needs donations before kits ship; surplus buys more kits, not private dividends.

So the statement is True.""",
        """The wording fails because it claims that not-for-profit organisations never generate any surplus by definition — and that overreach is wrong. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. That conclusion does not follow from the definition. The Red Cross, WWF or Greenpeace cover costs for a mission — cash still matters. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording fails because it claims that mission spending can only be financed by government grants — and that overreach is wrong. Here is the slip. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. That conclusion does not follow from the definition. A clinic billing insurers to keep staff paid can remain an NPO when surplus deepens care.

So the statement is False.""",
        """The wording fails because it claims that any surplus must be paid out as dividends to private owners — and that overreach is wrong. Profit-oriented firms aim for revenues above costs; surplus can be reinvested and also rewards risk. A counter-scene refuses the shortcut. A bakery funding ovens from retained surplus is profit-oriented reinvestment. Refuse the category swap and the claim collapses.

So the statement is False.""",
    ],
    "CASE 3.3.16": [
        """The wording holds because a humanitarian NPO kit dispatch requires prior inflows to fund materials and logistics. Keep Fuhrmann’s wording in front. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. Nothing in the sentence forces a narrower box than the book allows. A bakery funding ovens from retained surplus is profit-oriented reinvestment. The subsection’s definitions back the wording without stretching.

So the statement is True.""",
        """The wording holds because mission delivery, not private profit-maximisation, is the organisation's primary aim. Walk the activity named here. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. Nothing in the sentence forces a narrower box than the book allows. RiverAid needs donations before kits ship; surplus buys more kits, not private dividends. The labels line up with the book.

So the statement is True.""",
        """The wording fails because it claims that a humanitarian NPO is legally the same as any listed for-profit corporation — and that overreach is wrong. NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. That conclusion does not follow from the definition. The Red Cross, WWF or Greenpeace cover costs for a mission — cash still matters. Humanitarian NPO Characteristics is where students drag a familiar word into the wrong box. Keep the subsection’s definition and drop the overreach.

So the statement is False.""",
        """NPOs mainly cover costs while pursuing a mission; they still need inflows, and surplus strengthens projects. So “A humanitarian NPO operates without covering staff or warehouse costs” cannot stand. A clinic billing insurers to keep staff paid can remain an NPO when surplus deepens care. Refuse the category swap and the claim collapses.

So the statement is False.""",
        """The wording fails because it claims that any surplus must be distributed as private shareholder dividends — and that overreach is wrong. Profit-oriented firms aim for revenues above costs; surplus can be reinvested and also rewards risk. That conclusion does not follow from the definition. A bakery funding ovens from retained surplus is profit-oriented reinvestment.

So the statement is False.""",
    ],
}
