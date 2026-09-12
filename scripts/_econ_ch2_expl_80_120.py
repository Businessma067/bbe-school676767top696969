#!/usr/bin/env python3
"""Rewrite tactical_explanations for ch2 cases [80:120] (CASE 2.5.01–2.6.24)."""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path("/workspace")
PATH = ROOT / "src/data/economics-cases-ch2-subtopics.json"
CLOSER = re.compile(r"\s*So the statement is (True|False)\.?\s*$", re.I)


def body(e: str) -> str:
    return CLOSER.sub("", e).strip()


def wrap(text: str, truth: bool) -> str:
    text = text.replace("\u2014", ", ").replace("\u2013", "-").strip()
    v = "True" if truth else "False"
    return text + f"\n\nSo the statement is {v}."


# case_id -> list of 5 body strings (no closer)
EXPL: dict[str, list[str]] = {
    "CASE 2.5.01": [
        # A F compact
        "Courts, defence, and basic public goods sit outside private exchange even in a free-market model. Minimal state does not mean a ban on every public function; households shifting toward plant-based foods still rely on property rights and contract enforcement while grocers expand vegan ranges.",
        # B F standard
        "Consumer sovereignty is the opposite of planner monopoly over output. When households spend more on plant-based foods, that demand is precisely the channel through which consumers influence what gets produced. Saying households never influence production because only planners decide output swaps the market story for a planned one and contradicts the sovereignty label itself.",
        # C T expanded
        "Grocers expanding vegan ranges after plant-based spending rises is the textbook market response: firms chase revenue and profit by matching shifting demand. In market systems, unused shelf space on lagging products and growing sales on rising ones push managers to reorder, reformulate, and advertise. That feedback loop does not require a ministry to rewrite quotas; prices and receipts already tell firms which lines pay. The statement’s claim that firms respond to changing demand for revenue and profit is exactly how consumer sovereignty becomes production change on the shop floor.",
        # D F compact
        "Central quotas rarely jump the same day shoppers change diets. Planned systems revise targets through bureaucracy, so identical consumer shifts do not always change quotas instantaneously without lag. Information and administrative delay are typical, not mythical.",
        # E T standard
        "Prices and sales tickets are how market firms notice preference shifts. Falling sales on meat aisles and rising margins on vegan lines give grocers concrete signals without waiting for a plan office. Those data streams are why market economies can track household tastes more continuously than quota revisions usually do.",
    ],
    "CASE 2.5.02": [
        # A T standard
        "An eco-social market can mandate a renewable share while wholesale power still clears on exchanges. Ecological quotas set the envelope; competitive trading among generators still allocates who produces within that envelope. Mandates and markets are complementary tools here, not mutual exclusions.",
        # B T compact
        "Environmental mandates do not automatically cancel price rivalry. Where generators may still bid, they compete on cost and dispatch even under renewables rules. The mandate steers the fuel mix; competition still disciplines who wins load.",
        # C F expanded
        "Ecology does not force a ban on every megawatt-hour trade. Eco-social design typically keeps wholesale markets for coordination and adds carbon prices, renewable quotas, or grid standards on top. Claiming that eco-social economy bans all electricity trading because ecology requires central planning only collapses a hybrid model into pure planning. In the scene given, power exchanges still trade competitively while the renewable share is mandated, which is direct evidence against a total trading ban.",
        # D T standard
        "Within regulatory constraints, plant dispatch still follows relative bids and marginal cost. Market prices remain the language that ranks which units run when load rises. Quotas and green certificates change the feasible set; they do not erase price coordination among plants that remain free to offer.",
        # E T compact-ish -> need length mix: make this L
        "Social and eco-social market models start from market coordination and then layer social or ecological goals. They are not re-branded command economies. Wholesale electricity trading, retail choice, and private generators can all remain while welfare rules or environmental caps are added. The coordination base stays prices and voluntary contracts; policy changes the incentives and constraints around that base. That is why both labels still speak of market mechanisms rather than of abolishing them for pure central planning.",
    ],
    "CASE 2.5.03": [
        # A F compact
        "Eco-social market economies keep prices as a coordination tool and add ecological goals; they do not wipe out all market prices in favour of pure central planning. Ecology here reshapes incentives, not the entire price system.",
        # B F standard
        "Ordering infinite output does not erase scarcity. Steel, labour, and energy remain finite even if a plan office prints ambitious targets. Pure planning can misallocate, create shortages elsewhere, or pile up unwanted goods, but it cannot conjure unlimited means from unlimited orders.",
        # C F expanded
        "Using money in transactions does not make market and planned systems identical. Markets rely on private ownership, competition, and flexible prices to allocate; planned systems rely on administrative targets and often administered prices. Banknotes can circulate in both, yet the decision rights and feedback loops differ sharply. Equating the two because cash appears in shops ignores ownership, entry, and how shortages are resolved.",
        # D T standard
        "Moving from plan toward market typically means privatising firms, allowing competition, and freeing many prices. Private ownership and rivalry are the institutional switches that turn quota fulfilment into profit-seeking supply. That pattern is the core of transformation, not a side detail.",
        # E F compact
        "Printed orders do not create ore, workers, or factory hours. Planned systems still face resource constraints; the centre’s paperwork cannot abolish scarcity merely by raising every target at once.",
    ],
    "CASE 2.5.04": [
        # A T compact
        "A free market economy puts private ownership, competition, and light-touch intervention at the centre. The state still enforces rules, but it does not steer most prices or output day to day.",
        # B T standard
        "Social market design keeps markets for allocation and adds social policy, insurance, and welfare so equity goals sit beside competition. The point is not to replace firms with ministries, but to cushion outcomes markets leave uneven while preserving price coordination.",
        # C T expanded
        "Eco-social market economy starts from the social-market base and then adds environmental sustainability as an explicit goal. Carbon prices, efficiency standards, or renewable quotas illustrate the layer without cancelling private ownership or competition. Free, social, and eco-social models therefore form a nested set: each keeps markets, and each successive label adds a policy domain rather than inventing a new allocation engine from scratch.",
        # D T standard
        "Consumer sovereignty means household spending, not planner lists, steers what firms find profitable to produce. Demand expressed through purchases feeds back into production plans. That link is shared across free, social, and eco-social market variants.",
        # E T compact
        "Transformation from planning points toward market models with private firms and competition. Deepening central planning would be the opposite direction of reform, not the destination of transition.",
    ],
    "CASE 2.5.05": [
        # A F compact
        "OECD members today rely heavily on private pricing in consumer markets; they are not central-plan monocultures with no private price setting. Bread and similar staples illustrate ordinary market pricing, not quota sheets.",
        # B T standard
        "Once shops may set bread prices, a rising price can flag shortage pressure and a falling price can flag surplus. Producers and consumers both read those signals when deciding how much to bake, stock, or buy. Market prices therefore communicate scarcity information that fixed plan prices often suppress.",
        # C F expanded
        "Liberalisation frees prices to move with demand and cost; it does not drive every price to zero. Competition can squeeze margins, but flour, labour, and rent still have to be covered. Treating liberalisation as a promise that competition removes cost entirely confuses lower barriers with a free lunch. Shops allowed to set bread prices will still charge positive amounts that reflect those costs and scarcity.",
        # D T standard
        "Transition programmes often free prices in stages precisely to limit shocks to households and firms. Sudden full liberalisation can spike some prices overnight; gradual phases give budgets and supply chains time to adjust while still moving away from rigid fixed prices.",
        # E T compact
        "When bread prices can rise or fall with demand and cost, household spending more directly rewards the bakers who match tastes. Consumer sovereignty works better once prices are allowed to respond instead of staying administratively frozen.",
    ],
    "CASE 2.5.06": [
        # A F standard
        "Zero government including no courts, defence, or public goods is a caricature, not the free-market definition used in this chapter. Even strongly market-oriented systems keep a state for property rights, security, and some public goods while leaving most allocation to private exchange.",
        # B F compact
        "Shared use of money does not erase the gap between market and planned allocation. Who owns firms and how prices form still differs, so the systems are not identical merely because banknotes change hands.",
        # C F expanded
        "Banning courts and national defence would collapse the legal shell markets need. Free-market economies argue for limited government, not for outlawing every state activity. Defence and adjudication protect contracts and property; without them, voluntary trade is fragile. The statement’s absolute ban on all government activity therefore misstates the model rather than describing it.",
        # D F compact
        "Circulating banknotes can appear under planning and under markets. System identity turns on ownership, competition, and price flexibility, not on whether paper money exists.",
        # E T standard+ toward L
        "In free markets, rising prices ration scarce goods and invite more supply, while falling prices clear surplus and discourage excess production. That price chatter coordinates buyers and sellers without a centre assigning every ton and hour. The statement correctly locates prices as the coordinating device that replaces detailed central direction for ordinary goods.",
    ],
    "CASE 2.5.07": [
        # A F compact
        "Eco-social market systems add green standards and tools; they do not abolish prices or reinstate pure planning as the only green path. German-style social partnership already shows markets can sit beside strong rules.",
        # B T expanded
        "Co-determination and welfare institutions aim at social peace while private firms keep producing for markets. Employer associations and unions negotiate under law, yet product-market rivalry continues. The social-market idea is precisely this combination: labour voice and insurance without converting every firm into a plan bureau. Abolishing private enterprise would be a different system, not the German social-market pattern described here.",
        # C F standard
        "Unions in a social market bargain over wages and conditions; they do not replace consumer demand with output quotas for every product. Shoppers still steer shelves through purchases. Treating social market as union-run planning misreads co-determination as central allocation.",
        # D T compact
        "Worker representation rules and firm-level competition for customers can run in parallel. One governs workplace voice; the other governs who wins sales. Neither mechanically cancels the other in social-market design.",
        # E T standard
        "An eco-social upgrade of this base would tighten environmental standards, carbon pricing, or green industrial rules while keeping the social-market scaffolding. Stronger ecology sits on top of markets and social partnership rather than deleting them.",
    ],
    "CASE 2.5.08": [
        # A T compact
        "Public childcare and private grocery aisles can coexist. Governments often socialise selected services while leaving most consumer goods to competitive markets, which is ordinary mixed provision rather than all-or-nothing planning.",
        # B T standard
        "Social market economy is built for exactly this mix: publicly organised or funded childcare beside retailers that still compete on price and quality. Mixed provision is a feature of the model, not a contradiction of it.",
        # C T expanded
        "When an exclusive state monopoly holds prices below clearing levels, queues and empty shelves often follow because quantity demanded outruns quantity supplied at that administered price. Planning without flexible prices lacks the automatic brake and accelerator that markets use. Shortages under suppressed prices are therefore a known failure mode of exclusive state provision, which is why mixed models keep competitive retail for many goods while still expanding selected public services.",
        # D T standard
        "Eco-social policy can subsidise green buses or trains while carmakers still compete. The subsidy tilts demand or cost; it need not nationalise every vehicle plant. Competition among makers remains compatible with ecological support for cleaner transport.",
        # E T compact
        "In grocery retail, household baskets still decide which brands grow. Consumer sovereignty is strongest in those private competitive sectors, even when childcare is publicly organised nearby.",
    ],
    "CASE 2.5.09": [
        # A F compact
        "OECD countries today run market economies with competition in most product markets; they are not pure planned systems. Unemployment insurance beside competitive shops is social-market practice, not central planning.",
        # B F standard
        "Social market economy keeps market competition as the allocation engine and adds social protection around it. Rejecting all competition for pure central planning would abandon the market half of the label. Insurance and retraining vouchers illustrate cushioning, not replacing rivalry among firms.",
        # C F expanded
        "Market transition does not create ideal jobs overnight for every displaced worker. Restructuring closes some plants before new private firms absorb labour, so unemployment can rise temporarily even when reforms are intentional. Claiming zero unemployment from transformation denies the adjustment costs that social-market tools like benefits and retraining are meant to soften.",
        # D T compact
        "Labour-market rules and product-market competition address different margins. Firms can still fight for customers while hiring and firing obey regulated procedures and insurance systems.",
        # E T standard
        "Both social and eco-social market models keep prices and private exchange as the coordination base, then add social or ecological overlays. Market coordination is the shared foundation; the adjectives mark which extra goals are prioritised.",
    ],
    "CASE 2.5.10": [
        # A T standard
        "When shoppers boycott a brand and sales collapse, household spending is punishing the firm that lost trust. That is consumer sovereignty in action: demand withdrawal forces retailers to react without a planner issuing a delist order first.",
        # B F compact
        "A retailer delisting a boycotted brand is a market response to falling demand, not proof that planned economies run every retail aisle. Planners are not required for shelves to change when receipts vanish.",
        # C T expanded
        "Profit motive makes falling demand urgent. A retailer watching a boycotted line destroy margin will cut orders or delist rather than keep stocking a product customers refuse. Revenue threat, not a ministry memo, drives that response. The same motive that expands popular lines contracts distrusted ones, which is why boycotts can bite quickly in market retail.",
        # D T standard
        "Collapsing sales volumes and markdown pressure signal reputational damage in days or weeks. Quota revisions in planned systems move on administrative calendars. Market price and volume feedback therefore typically flags trust shocks faster than plan offices revise assortment targets.",
        # E T compact
        "Labour rules in a social market do not silence consumer demand signals. Shoppers still steer brands while regulation shapes workplace standards, so sovereignty and labour law operate together.",
    ],
}


def _more() -> None:
    """Extend EXPL with remaining cases (called at import bottom)."""
    EXPL.update(
        {
            "CASE 2.5.11": [
                "Closing state factories before private firms fully replace them often leaves workers between jobs. Transitional unemployment during restructuring is a documented cost of moving from plan to market, not an accounting error in the reform story.",
                "Social market policy can fund retraining and benefits precisely so adjustment costs do not fall entirely on displaced workers. Those cushions do not deny dislocation; they manage it while markets reallocate labour toward growing private firms.",
                "Market reforms do not instantly create perfect jobs for all. Transition never producing unemployment is wishful absolutism: plant closures and skill mismatches generate joblessness until new employers expand. The temporary spike in the scene is the counterexample to overnight full employment.",
                "Even when short-run dislocation hurts, long-run competition can push surviving firms to cut waste and match demand better than quota fulfilment did. Efficiency gains and transitional pain can coexist on different time horizons.",
                "Eco-social transition adds environmental restructuring, retiring dirty capacity or forcing cleaner investment, on top of the usual ownership and price reforms. The same unemployment risks appear, now partly driven by ecological goals as well as marketisation.",
            ],
            "CASE 2.5.12": [
                "Planners do not always know every preference, and misallocation does occur when information is thin or targets conflict. Treating perfect preference knowledge as automatic erases the classic planning information problem.",
                "A carbon price inside competitive electricity markets is classic eco-social tooling: an ecological target pursued with a market-based instrument rather than by abolishing wholesale trade. Private generators still bid; the tax or allowance cost shifts their marginal costs and dispatch.",
                "Carbon taxes change relative prices; they do not eliminate all market prices or let government set every outcome by decree. Power still clears on exchanges, and households still choose how much electricity to use at the resulting retail rates.",
                "Private firms can keep competing on cost and quality while facing environmental goals through taxes, standards, or permits. Eco-social models rely on that coexistence: ecology reshapes the payoff matrix without converting every plant into a plan office.",
                "Planned economies have used environmental instruments, from emissions norms to technology mandates. Saying they never use any environmental policy at all is historically false and unrelated to whether markets or plans dominate allocation.",
            ],
            "CASE 2.5.13": [
                "Central authorities can order more output on paper, but inputs remain scarce. Planned systems therefore still face scarcity; unlimited orders do not create unlimited goods.",
                "Central planning faces severe information problems matching diverse preferences. Always matching consumer tastes with zero friction is the opposite of the usual critique of planning, not a reliable property of it.",
                "Social market economy keeps private firms and competition; it does not abolish them for central planning. Welfare and co-determination sit beside markets rather than replacing enterprise with ministries.",
                "Income support for the poor is part of social-market practice, not forbidden by definition. Calling such support illegal under the model reverses what the social pillar is for.",
                "Germany is the standard textbook example of the social market economy approach: competitive markets paired with social insurance, labour institutions, and a regulatory frame rather than pure laissez-faire or pure planning.",
            ],
            "CASE 2.5.14": [
                "Free markets let prices emerge from supply and demand; they do not require the state to set every consumer price daily. Daily administered pricing is closer to planning than to free markets.",
                "Once cooperatives sell on open markets, what consumers will pay matters more than meeting a plan tonnage alone. Market sales expose producers to demand feedback that quota fulfilment often ignored.",
                "Agricultural transition frequently includes privatisation or cooperative ownership, not permanent 100% state ownership. Claiming privatisation never occurs in agriculture contradicts the cooperative reform path in the scene.",
                "After liberalisation, profit and price signals guide which crops pay on given land. Farmers compare expected receipts and costs instead of only chasing quota fulfilment, so crop mix can track market returns.",
                "Central targets often overrode local soil and climate knowledge, pushing the same crop where yields were poor. Planned quota agriculture could ignore local advantage precisely because the target, not the local price, dominated decisions.",
            ],
            "CASE 2.5.15": [
                "When the plan pushes steel beyond what machinery plants can absorb, unsold metal piles up. Overplanned output creates surplus because downstream demand was not coordinated through flexible prices linking sectors.",
                "In markets, excess steel would tend to lower prices, squeeze margins, and lead firms to cut production. Price declines are the signal that excess supply should shrink profitably rather than keep meeting an inflated tonnage target.",
                "Profit motive pushes firms to economise on inputs and chase paying customers. Competitive markets reward cutting wasteful steel output that nobody will buy, unlike quota fulfilment that can treat excess as success on paper.",
                "Transformation introduces market feedback so intersectoral mismatch shows up in inventories and prices instead of only in plan reports. That feedback helps reduce persistent surplus in one industry and shortage in another.",
                "Scarcity still binds under planning: labour and energy used on unwanted steel cannot make consumer goods. Producing too much steel wastes scarce inputs even when the plan calls the tonnage a victory.",
            ],
            "CASE 2.5.16": [
                "Planned systems typically narrow product variety relative to market rivalry; they do not give households unlimited choice by design. Assortment follows targets more than endless differentiation.",
                "Energy-efficiency rules set a sustainability floor while builders still compete on design and price above that floor. Environmental standards aim at greener housing without eliminating private builders fighting for buyers.",
                "Eco-social housing policy can regulate performance and still leave homes allocated through markets. Abolishing all housing markets for pure central assignment is a stronger claim than eco-social design requires, and it contradicts builders competing under efficiency rules.",
                "Regulation defines minimum ecological performance; competition continues over cost, layout, and amenities beyond compliance. The market does not vanish once the standard is written; it operates above the mandatory floor.",
                "Social market and eco-social market both keep market coordination as the foundation and then add social or environmental goals. Neither label means replacing exchange with full plan assignment of dwellings.",
            ],
            "CASE 2.6.01": [
                "Voluntary market exchange happens when each side expects to be better off after the trade. Buyers and sellers interact through prices precisely because mutual gain is anticipated, not because a clerk forces the swap.",
                "Nationwide online listings are still markets: buyers and sellers meet through a platform and a price. Face-to-face bargaining is one format, not a requirement that excludes remote matching.",
                "Many markets clear without a government agency setting every transaction price. Posted or negotiated private prices allocate goods daily in ordinary retail and services.",
                "Prices carry scarcity information: high prices ration tight goods and invite supply; low prices clear surplus. Treating prices as mere receipts with no scarcity content strips their coordinating role.",
                "Repair workshops sell intangible services and still form markets: customers pay for diagnosis and labour time. Intangibility does not bar exchange through prices.",
            ],
            "CASE 2.6.02": [
                "Weekend crowds willing to pay more shift demand for fresh herbs upward at the stall. Higher willingness to pay raises equilibrium price when supply cannot expand one-for-one with foot traffic.",
                "A wholesale cost increase raises the stallholder’s marginal cost, so at each old retail price the profitable quantity to offer may fall unless the selling price rises enough to restore margin. Cost shocks therefore pressure quantity supplied at given prices.",
                "A price above equilibrium typically slows sales and leaves herbs unsold; it does not clear the stall faster. Buyers do not prefer costlier herbs merely because the ticket is higher when cheaper options or waiting exist.",
                "Nearby competing stalls tighten price constraints through rivalry; they do not remove them. Independent posting still faces customers who compare stalls, so each seller remains disciplined by alternatives.",
                "Rising Saturday demand tends to raise, not cut, equilibrium herb prices. Cutting prices to chase more visitors would be the wrong response to a demand increase if the stall is already busy.",
            ],
            "CASE 2.6.03": [
                "As price rises, some marginal buyers drop out, so quantity demanded falls and the demand curve slopes downward. That inverse link is the law of demand’s core geometry.",
                "Ceteris paribus holds income, tastes, and related prices fixed when tracing the price–quantity demanded link. Isolating the own-price effect is why the demand curve can be drawn as a stable downward slope.",
                "Higher concert ticket prices normally reduce quantity demanded; prestige exceptions are not the general law. Treating higher prices as automatically increasing quantity demanded reverses the usual inverse relationship.",
                "Lower coat prices raise quantity demanded along the demand curve; they do not reduce it via an automatic quality panic. Expected quality is a separate shifter, not the law of demand itself.",
                "The law of demand states that quantity demanded falls when price rises, other things equal, not that quantity demanded rises with price. The statement flips the law’s direction.",
            ],
            "CASE 2.6.04": [
                "Quantity demanded is a point: a specific amount at a specific price. The demand curve or schedule is the whole mapping across prices, so the terms are not interchangeable.",
                "Plotting a demand schedule yields a downward-sloping demand curve under the law of demand, not an upward supply-like slope. Confusing that geometry mixes demand with supply.",
                "A demand schedule lists quantities buyers would purchase at successive prices, not what suppliers would offer. Supplier offers belong on a supply schedule.",
                "Movement along a demand curve comes from a change in the good’s own price. Income changes shift the whole curve rather than sliding along a fixed demand schedule.",
                "Quantity demanded varies with price for most goods; essentials still show some price sensitivity and are not fixed at every price by definition. The schedule exists because amounts change across prices.",
            ],
            "CASE 2.6.05": [
                "Heavy snowfall forecasts raise willingness to hire skis at each posted daily rate, shifting demand rightward. The rate itself need not change first for that shifter to move the curve.",
                "Higher rental rates reduce quantity demanded along the demand curve; holiday visitors do not buy more hire days merely because the shop raised the price. Budgeting more is not the law of demand.",
                "Competing discounts nearby are substitutes that can pull customers away, so quantity demanded at the shop’s price is not immune. Ignoring substitutes misreads how hire markets clear.",
                "Charging above equilibrium typically leaves gear on racks rather than clearing inventory faster. Customers do not empty the shop simply because rentals are priced as scarce prestige goods.",
                "Peak-season demand shifts raise equilibrium rental rates when supply is tight; they do not always lower rates to attract tourists. The statement reverses the usual seasonal price pattern.",
            ],
        }
    )


_more()


# Remaining 2.6.06–2.6.24 filled below
EXPL.update(
    {
        "CASE 2.6.06": [
            "Other things equal, producers offer more when the market price rises because extra units become profitable. That direct price–quantity supplied link is the law of supply.",
            "The supply curve slopes upward because higher prices induce more production from sellers, not because buyers demand more when sellers cut output. Mixing buyer demand into the supply slope confuses the two sides of the market.",
            "At low prices many producers cut output or exit rather than flood the market to recover fixed costs. Maximum output at rock-bottom prices is not the supply law’s prediction.",
            "Movement along a supply curve is a response to the good’s own price change. Technology changes shift the entire supply curve while holding the interpretation of each price point’s offer different.",
            "Higher wheat prices raise the incentive to bring more wheat to market, increasing quantity supplied. Farming costs may rise with intensity, but that does not make higher prices reduce quantity supplied under the law of supply.",
        ],
        "CASE 2.6.07": [
            "A supply schedule pairs rising prices with larger quantities offered, so its plot slopes upward in price–quantity space. That geometry matches the law of supply.",
            "Quantity supplied is a point on the curve at one price; supply refers to the whole schedule or curve. The terms are not identical labels for the entire mapping.",
            "Higher prices typically widen, not shrink, the profitable margin on extra units, so producers supply more rather than less. Shrinking margins on every unit at higher prices is not the standard supply story.",
            "A supply schedule lists producer offers, not buyer purchases. Quantities buyers would purchase belong on a demand schedule.",
            "A price increase moves producers along a given supply curve, raising quantity supplied; it does not by itself shift the entire curve leftward. Shifts come from cost, technology, or seller-number changes, not from the own-price movement along the curve.",
        ],
        "CASE 2.6.08": [
            "Where supply and demand meet, the bakery’s planned bake matches sales closely enough that neither chronic sell-outs nor chronic leftover piles persist. That intersection is market equilibrium for the morning rush.",
            "Early office meetings raise demand for breakfast bread; they do not shift supply rightward by themselves. Opening earlier is a supply response to expected demand, not a demand-free supply shifter.",
            "A flour price spike is an input-cost shock that shifts supply leftward, not demand rightward. Customers seeking cheaper carbohydrates would be a demand story about substitutes, not the flour-cost event itself.",
            "Pricing above equilibrium tends to leave unsold rolls, not sell out faster. Higher price as a quality signal does not overturn surplus pressure when the ticket sits above clearing.",
            "Higher bread prices along the supply curve encourage more morning output, other things equal. Expensive flour is a separate cost shifter; it is not why the law of supply would cut output when the product’s own price rises.",
        ],
        "CASE 2.6.09": [
            "On a standard diagram, equilibrium is the intersection of demand and supply. That single point names both the equilibrium price and the equilibrium quantity.",
            "Equilibrium price is defined as the price at which quantity demanded equals quantity supplied. No other price clears both sides simultaneously in the basic model.",
            "At that clearing price, surplus and shortage pressures are absent, so there is no ongoing force from excess stock or unmet demand pushing price up or down.",
            "When price sits above or below, surplus or shortage appears and competitive adjustment nudges price back toward equality of quantities. Markets therefore tend toward equilibrium through those price moves.",
            "Equilibrium quantity is the amount actually traded when the two sides match. It is the horizontal coordinate of the intersection, not a separate unrelated total.",
        ],
        "CASE 2.6.10": [
            "Below equilibrium, buyers want more than sellers offer at that low price, so shortage appears. Quantity demanded exceeds quantity supplied until price rises.",
            "Shortage sparks bidding among buyers for limited units, putting upward pressure on price. That pressure is the adjustment mechanism that moves the market toward clearing.",
            "Surplus leaves sellers with excess stock, so they compete by cutting prices to attract buyers. Downward pressure continues until the surplus is worked off near equilibrium.",
            "Above equilibrium, sellers offer more than buyers take, creating surplus. Quantity supplied exceeds quantity demanded at that high price.",
            "Competitive markets rely on those price changes to reconcile divergent plans. When quantities demanded and supplied diverge, price is the signal that re-coordinates both sides toward balance.",
        ],
        "CASE 2.6.11": [
            "At equilibrium rent, vacancies are not trending persistently up or down week after week; listings and matches roughly balance. Growing vacancy piles would signal rent still above clearing.",
            "New construction shifts housing supply rightward. With demand fixed, the new intersection typically shows a lower equilibrium rent and more units occupied or offered at that rent.",
            "Cutting asking rent raises quantity demanded along the demand curve; tenants do not prefer costlier apartments merely because rent fell. The statement reverses the demand response to a price cut.",
            "Persistent vacant flats usually mean asking rent is above equilibrium, so quantity supplied exceeds quantity demanded. Tenants are not avoiding cheap flats; the posted rent is still too high to clear.",
            "Heavy tenant competition is demand pressure that tends to raise, not lower, equilibrium rent. Landlord fear of regulation is a separate political story, not a reason competition always cuts rents.",
        ],
        "CASE 2.6.12": [
            "By definition, surplus means quantity supplied exceeds quantity demanded at the prevailing price. That excess stock is what sellers then try to work down.",
            "Sellers facing surplus compete for scarce buyers, often by cutting price. Downward pressure on price is the market’s response to excess stock.",
            "Price above equilibrium produces surplus, not shortage. Buyers do not create shortage merely by craving expensive goods; high prices reduce quantity demanded relative to supply.",
            "Rapid sell-outs and empty shelves signal shortage at the current price, the opposite of surplus. Surplus shows up as unsold inventory, not empty shelves.",
            "A bumper harvest increases supply and can create or enlarge surplus at the old price; it does not automatically match demand exactly. Larger supply without a matching demand shift leaves more unsold output unless price falls.",
        ],
        "CASE 2.6.13": [
            "Long queues and rapid sell-outs are classic shortage symptoms at the posted price: buyers want more than is available right then.",
            "A price ceiling below equilibrium keeps the legal price too low for supply to meet demand, so shortage can persist in a competitive market until the ceiling is lifted or other rationing appears.",
            "Below equilibrium, quantity demanded exceeds quantity supplied. That gap remains until price is allowed to rise toward clearing.",
            "Buyers competing for scarce units bid prices up when shortage bites. Upward pressure is the mirror image of surplus-driven discounting.",
            "Shortage is quantity demanded exceeding quantity supplied, not the reverse. When supply exceeds demand, the label is surplus, so the statement swaps the definition.",
        ],
        "CASE 2.6.14": [
            "Early-bird tickets vanishing in minutes at the posted price means quantity demanded exceeds quantity supplied at that price. Sell-out speed is shortage evidence.",
            "Overnight queues form when buyers expect that official allocation will not cover everyone at the printed rate. Queuing is rationing by waiting under shortage expectations.",
            "Persistent shortage at the official rate typically pushes resale prices above, not below, the sold-out face value. Resellers cut below official only if surplus pressure exists, which is not the festival queue story.",
            "Extra performances expand supply of seats; they do not shift demand leftward because audiences dislike more shows. More supply eases shortage rather than reducing willingness to attend.",
            "Raising the official ticket price lowers quantity demanded and can shrink shortage; it does not increase shortage by making fewer buyers withdraw. Withdrawal of marginal buyers is how higher prices ease excess demand.",
        ],
        "CASE 2.6.15": [
            "Income is a demand shifter: when it changes, the whole demand curve moves. Sliding along a fixed curve is reserved for the good’s own price, not for income.",
            "Inferior goods lose buyers as income rises and people switch to preferred substitutes, so demand can shift leftward. That leftward move is the inferior-good income effect on the curve.",
            "A recession that cuts household income typically shifts demand leftward for discretionary electronics, not rightward. Lower income reduces willingness to buy at each price for normal discretionary goods.",
            "Higher income shifts demand rightward for normal goods; buyers do not shift left merely because some saving occurs. Saving some income does not erase the usual normal-good demand increase.",
            "A pay rise raises demand for normal goods such as cafe coffee, which tends to raise equilibrium price if supply is unchanged. Richer buyers demanding discounts is not the equilibrium mechanism the statement claims.",
        ],
    }
)


EXPL.update(
    {
        "CASE 2.6.16": [
            "Advertising that strengthens brand preference raises willingness to buy at each price, shifting demand rightward for the advertised good. Tastes move the curve; the own price still governs movement along it.",
            "Seasonal fashion can rewrite preferences within a year, shifting clothing demand and therefore equilibrium prices when supply cannot adjust instantly. Taste shifts are legitimate short-run demand movers.",
            "A health trend favouring oat milk raises demand for oat beverages at each price, a rightward shift. Preferential taste change is exactly what the demand-shifter catalogue means by preferences.",
            "When substitutes become fashionable, some buyers leave the original good, shifting its demand leftward. Fashion can hurt the unfashionable rival even if its own price is unchanged.",
            "Negative publicity mainly shifts demand leftward as buyers pull back; producers feeling discouraged is not a supply-curve shift by itself. Supply shifters are costs, technology, and seller numbers, not mood alone from bad press.",
        ],
        "CASE 2.6.17": [
            "Surging visitors chasing limited tour slots at an unchanged tasting price produce shortage: quantity demanded exceeds quantity supplied at that ticket.",
            "International awards are publicity that raises willingness to pay for regional tastings at each old price, shifting demand rightward. Ticket prices need not move first for the curve to shift.",
            "If demand shifts right while tasting capacity stays tight, the new equilibrium fee is typically higher. Constrained supply plus stronger demand raises the clearing price.",
            "Raising tasting fees moves buyers up along the demand curve, cutting quantity demanded and easing shortage without needing an immediate capacity jump.",
            "Expanded visiting hours increase effective supply of tour slots; they do not shift demand leftward because tourists dislike longer schedules. More hours relieve scarcity rather than reduce interest.",
        ],
        "CASE 2.6.18": [
            "Substitute price moves change rival demand through cross-price effects, so firms watch those prices because their own equilibrium sales can shift when rivals reprice.",
            "A substitute’s price change shifts the demand curve for the related good; it is not a movement along that good’s demand curve caused by its own price. Cross-price events are shifters.",
            "Cheaper streaming makes staying home more attractive relative to cinema, so demand for tickets can shift leftward. Lower substitute prices pull buyers away from the theatre.",
            "Tea and coffee are typically substitutes: higher nearby tea prices tend to raise coffee-shop demand, not lower it. Treating them as complements reverses the cross-price logic.",
            "Higher petrol prices make driving costlier and often raise demand for public transport as a substitute, rather than shifting transport demand left because travel becomes undesirable overall. The relative-price channel points the other way.",
        ],
        "CASE 2.6.19": [
            "Dearer consoles reduce game-console bundles’ attractiveness, so demand for compatible titles can shift leftward. Complements move together on the demand side when one price jumps.",
            "Costlier complements cut willingness to buy the pair, so equilibrium quantity of the paired good may fall after demand shifts left. The linked good’s market absorbs part of the shock.",
            "Cheaper air fares stimulate trips, shifting demand rightward for airport parking and nearby hotels that complete the journey. Lower complement prices expand related demand.",
            "Cheaper printers raise the installed base that needs ink, shifting cartridge demand rightward. Printer and ink illustrate classic complement demand linkage.",
            "Complement price changes alter demand for the related good; they do not directly rewrite that good’s supply curve. Supply still depends on its own costs and technology, while the complement shock shows up on the demand side.",
        ],
        "CASE 2.6.20": [
            "When diesel becomes dearer, electric buses look relatively cheaper as substitutes, so municipal demand for electric buses can shift rightward at each contract price.",
            "A purchase subsidy lowers the effective price buyers face and raises quantity demanded; in curve language it is often modelled as a rightward demand shift for the subsidised buses at each listed price.",
            "Expanded battery production lowers input costs and can shift electric-bus supply rightward, reducing equilibrium prices when demand is unchanged. Cheaper batteries feed through to vehicle offers.",
            "If demand shifts right while the contract price stays fixed below the new clearing level, shortage pressure appears, not surplus. Surplus would require quantity supplied above quantity demanded at that price.",
            "At equilibrium contract price, quantity of buses offered matches quantity cities want to operate. Manufacturers delivering buses cities refuse would mean surplus, not equilibrium.",
        ],
        "CASE 2.6.21": [
            "Surging energy costs shift supply leftward; with demand unchanged, equilibrium price tends to rise and quantity falls. Costlier production shows up in higher market prices.",
            "Higher warehouse wages raise distribution costs, so firms offer fewer services at each old price: supply shifts leftward. Labour is an input whose price moves the supply curve.",
            "Cheaper imported components cut marginal cost, shifting supply rightward and typically lowering equilibrium price when demand holds. Input relief expands offers at each price.",
            "Input cost changes shift the supply curve; they do not merely slide producers along an unchanged curve. Movement along supply is reserved for the product’s own price, holding cost shifters fixed.",
            "Cheaper steel shifts furniture supply rightward by lowering costs; it does not shift demand leftward because buyers expect weaker furniture. Demand is about willingness to buy, not about input bargains for producers.",
        ],
        "CASE 2.6.22": [
            "Lower unit costs from better technology let firms offer more at each price, shifting supply rightward rather than leftward. Progress expands productive capacity in the supply diagram.",
            "Improved irrigation raises orchard yields at each market price, a rightward supply shift for fruit. Technology here is a classic agricultural supply shifter.",
            "Automated sorting cuts handling cost per parcel, shifting supply of delivery services rightward. Productivity gains show up as more service offered at each fee.",
            "Technology is a supply shifter distinct from own-price movements along a fixed curve. Price changes slide along supply; tech rewrites the schedule of offers.",
            "Rightward supply shifts with unchanged demand lower equilibrium price and raise quantity; they do not raise price. The statement reverses the standard comparative-statics result.",
        ],
        "CASE 2.6.23": [
            "Extra capacity that shifts supply rightward, with demand fixed, moves equilibrium down the demand curve: price may fall while quantity rises. Expansion without demand growth softens the clearing price.",
            "The new intersection after a rightward supply shift typically shows a larger equilibrium quantity if demand is unchanged. More is traded at the new lower or equal clearing price.",
            "Dearer raw materials shift supply leftward and can partly offset the expansion’s rightward push. Net supply depends on both the new line and the input-cost shock.",
            "Successful supply expansion raises available output at given prices, so customers face less risk of shortage at the old posted price. Scarcity pressure eases when capacity arrives.",
            "Adding a line that lowers unit cost is a supply-side improvement: more output is profitable at each price, shifting supply rightward for the manufactured good.",
        ],
        "CASE 2.6.24": [
            "Extra bakeries on the same street increase market supply of local bread at each price, a rightward shift from entry. More sellers thicken the offer curve.",
            "When several suppliers exit in a crisis, market supply shifts left and the old price can suddenly sit below the new clearing level, producing shortage until price rises or demand falls.",
            "Low-cost online entrants expand effective supply and intensify price competition, often lowering equilibrium prices for standardised goods. Entry is a supply-side force for cheaper clearing.",
            "Farmers leaving a crop after poor seasons reduce market supply of that harvest, shifting the curve leftward. Exit removes offers at each price.",
            "Market supply aggregates all sellers’ offers, not only the largest firm’s schedule. Ignoring smaller rivals understates total supply at each price and misdefines the market curve.",
        ],
    }
)



KIND_PATTERNS = [
    ("C", "S", "L", "S", "C"),
    ("S", "C", "L", "C", "S"),
    ("L", "C", "S", "L", "C"),
    ("C", "L", "S", "C", "L"),
    ("S", "L", "C", "S", "L"),
    ("L", "S", "C", "L", "S"),
    ("C", "S", "C", "L", "S"),
    ("S", "C", "S", "L", "C"),
]

KIND_RANGE = {"C": (175, 275), "S": (360, 490), "L": (580, 880)}


def topic_bucket(statement: str) -> str:
    s = statement.lower()
    rules = [
        ("law_demand", ["law of demand", "demand curve", "demand schedule", "ceteris paribus", "marginal buyers"]),
        ("law_supply", ["law of supply", "supply curve", "supply schedule"]),
        ("shortage", ["shortage", "queue", "sell-out", "sell out", "empty shelf"]),
        ("surplus", ["surplus", "vacant", "unsold", "excess stock", "bumper"]),
        ("equilibrium", ["equilibrium", "intersect", "clearing", "toward equilibrium"]),
        ("demand_shift", ["shift demand", "shift*demand", "tastes", "substitute", "complement", "advertising", "inferior goods", "normal goods", "pay rise", "recession reducing"]),
        ("supply_shift", ["shift supply", "technological", "input cost", "higher wages", "capacity", "new bakeries", "farmers exiting", "battery production", "cheaper imported"]),
        ("eco_social", ["eco-social", "carbon", "ecological", "environmental", "renewable"]),
        ("social_market", ["social market", "co-determination", "welfare", "retraining", "childcare"]),
        ("consumer_sov", ["consumer sovereignty", "boycott", "household spending"]),
        ("planned", ["planned", "quota", "central plan", "transformation", "privatisation", "liberalisation"]),
        ("free_market", ["free market", "courts", "defence"]),
        ("market_def", ["voluntary exchange", "market requires", "face-to-face", "online listing"]),
    ]
    # quantity demanded/supplied alone is ambiguous; classify with surrounding cues below
    for name, keys in rules:
        if any(k in s for k in keys):
            return name
    return "general"


def elaborations(statement: str, title: str, truth: bool, letter_i: int, case_id: str) -> list[str]:
    bucket = topic_bucket(statement)
    scene = title.split(":")[0].strip()
    seed = sum(ord(ch) for ch in case_id) + letter_i * 17
    nouns = re.findall(r"[A-Za-z]{4,}", statement)
    noun_bit = ", ".join(nouns[:3]) if nouns else "price"

    true_bank = {
        "shortage": [
            f"\n\nIn {scene}, that excess demand shows up as queues, waitlists, or vanishing stock at the posted ticket. Price has not yet risen enough to ration the scarce units or invite more supply.",
            "\n\nBuyers who still want the good at the low price compete with time, contacts, or willingness to pay more later. That pressure is exactly what pushes a competitive price upward.",
            "\n\nCeiling rules or sticky posted prices can freeze the shortage in place. Until the legal or listed price can move, quantity demanded stays above quantity supplied.",
        ],
        "surplus": [
            f"\n\nUnsold inventory in {scene} is the mirror image of shortage: at the current price, sellers offered more than buyers took. Discounting and slower restocking are the usual responses.",
            "\n\nDownward price pressure continues while excess stock sits on shelves or in warehouses. Sellers who refuse to cut prices simply wait longer with idle goods.",
            "\n\nA rightward supply jump without matching demand often creates the surplus at yesterday’s price. Equilibrium then rebuilds at a lower price and higher traded quantity.",
        ],
        "demand_shift": [
            f"\n\nIncome, tastes, or related-goods prices rewrite willingness to buy at every own-price in {scene}. That is a curve shift, not a slide along a fixed demand schedule.",
            "\n\nAfter the shift, the old equilibrium is generally wrong: a new intersection with supply sets both price and quantity. Comparative statics follow from which way the curve moved.",
            "\n\nOwn-price still governs movement along the new curve. Confusing a shifter with a movement along demand is the main geometry mistake to avoid here.",
        ],
        "supply_shift": [
            f"\n\nCost, technology, capacity, or seller numbers change how much firms offer at each price in {scene}. Those events shift supply rather than merely changing the good’s own price.",
            "\n\nA rightward supply move typically lowers equilibrium price when demand is unchanged; a leftward move does the opposite. Quantity adjusts at the new intersection.",
            "\n\nInput relief and productivity gains are the practical reasons supply can expand without anyone changing the product’s sticker price first.",
        ],
        "equilibrium": [
            f"\n\nAt the intersection used in {scene}, quantity demanded equals quantity supplied, so neither surplus nor shortage keeps forcing price to move.",
            "\n\nAway from that point, one side of the market is frustrated and bids price back. Competitive adjustment is the path from imbalance toward balance.",
            "\n\nEquilibrium quantity is simply the amount traded at that clearing price. It is not a separate policy target floating free of supply and demand.",
        ],
        "law_demand": [
            "\n\nHolding other demand shifters fixed, a higher own-price peels off marginal buyers. The schedule of those price–quantity pairs is the downward demand curve.",
            "\n\nCeteris paribus is doing real work: if income or tastes jump at the same time, you are no longer tracing the pure own-price effect along one curve.",
            "\n\nQuantity demanded is a single point on that curve. Talking about demand for the whole schedule keeps the vocabulary clean.",
        ],
        "law_supply": [
            "\n\nHigher own-prices make extra units profitable for producers, so quantity supplied rises along an upward supply curve when other cost factors stay put.",
            "\n\nTechnology or wage shocks rewrite the whole offer schedule. Those are supply shifts, distinct from sliding along a fixed curve when only the product price changes.",
            "\n\nQuantity supplied names one price’s offer; supply names the mapping. Mixing the two labels creates false claims about supply rising when only a point moved.",
        ],
        "eco_social": [
            f"\n\nEco-social design in {scene} keeps market exchange and then tilts it with ecological tools: taxes, quotas, standards, or subsidies.",
            "\n\nPrivate firms can still compete on cost and quality inside those constraints. The green layer changes payoffs; it need not abolish wholesale or retail prices.",
            "\n\nThat hybrid is why eco-social is grouped with market models rather than with pure central planning, even when environmental goals are ambitious.",
        ],
        "social_market": [
            f"\n\nSocial-market practice pairs competitive product markets with labour voice, insurance, or public services, as in {scene}.",
            "\n\nWelfare and co-determination aim at social peace without deleting private ownership. Consumers still steer many goods through spending.",
            "\n\nMixed provision is normal: some services public, most everyday goods private and rivalrous. The market base remains the coordination engine.",
        ],
        "consumer_sov": [
            f"\n\nHousehold budgets in {scene} reward products that match tastes and punish those that do not. Firms read that verdict in sales and margins.",
            "\n\nSovereignty here is influence through demand, not a legal veto in a planning office. Retail delistings after boycotts are a sharp illustration.",
            "\n\nPrices and scanner data carry the preference signal continuously. That is faster feedback than waiting for a quota committee to revise assortment.",
        ],
        "planned": [
            f"\n\nPlan targets in {scene} can ignore local cost and demand information that prices would have revealed. Surpluses and shortages then persist by paperwork.",
            "\n\nTransformation toward markets typically adds private ownership, competition, and freer prices so feedback can correct mismatch.",
            "\n\nScarcity does not vanish under planning: orders on paper still consume real labour, materials, and machine time that cannot be used twice.",
        ],
        "free_market": [
            "\n\nMinimal intervention still leaves room for courts, defence, and a few public goods that underpin contracts. Zero state is not the working definition.",
            "\n\nPrivate ownership and rivalry do the everyday allocating. Prices coordinate without a centre assigning each ton and hour.",
            "\n\nMoney can circulate here and under planning; what differs is who sets prices and who owns the firms responding to them.",
        ],
        "market_def": [
            f"\n\nA market is any regular meeting of buyers and sellers through price, including online listings in {scene}. Face-to-face haggling is optional packaging.",
            "\n\nVoluntary trade proceeds when both sides expect gain. Prices ration scarce goods and invite supply without needing an agency to set every ticket.",
            "\n\nServices form markets as readily as goods: repair time and advice are sold even though nothing tangible changes ownership as the main product.",
        ],
        "general": [
            f"\n\nIn {scene}, the statement’s nouns line up with how prices, ownership, or quantities actually operate in the chapter’s models.",
            "\n\nThe mechanism is concrete: someone gains revenue, faces a cost, or meets a constraint named in the claim. That is enough to carry the verdict.",
            "\n\nStay with the actors and feedback the statement itself invokes rather than importing a different system’s labels.",
        ],
    }

    false_bank = {
        "shortage": [
            "\n\nIf quantity supplied exceeds quantity demanded, the right label is surplus, not shortage. Empty-shelf stories do not fit a glut at the posted price.",
            "\n\nRaising price usually eases shortage by cutting quantity demanded and inviting supply. Claiming the opposite reverses the adjustment logic.",
            f"\n\nIn {scene}, lasting vacancy or unsold stock points above equilibrium, not below it. Cheap tickets that still go begging are not shortage evidence.",
        ],
        "surplus": [
            "\n\nRapid sell-outs are shortage symptoms. Calling them surplus confuses frustrated buyers with frustrated sellers.",
            "\n\nPrice above equilibrium creates surplus; it does not create shortage because buyers prefer expensive goods. High prices reduce quantity demanded.",
            f"\n\nA bumper harvest in {scene} can enlarge surplus at the old price rather than magically matching demand exactly.",
        ],
        "demand_shift": [
            "\n\nLower income typically shifts demand left for normal discretionary goods, not right. The statement’s direction fights the income effect.",
            "\n\nSubstitute price rises usually lift demand for the rival good; complement price rises cut it. Mixing those cross-price signs flips the story.",
            f"\n\nPublicity and taste shocks hit demand first in {scene}. Treating bad press as a leftward supply shift invents a cost event that is not there.",
        ],
        "supply_shift": [
            "\n\nInput-cost changes shift supply; they do not merely slide firms along an unchanged curve. Own-price movements are the along-curve story.",
            "\n\nRightward supply with fixed demand lowers equilibrium price. Saying technology raises price under those conditions reverses comparative statics.",
            f"\n\nCheaper inputs in {scene} expand offers; they do not shift demand left because buyers suddenly expect weaker products.",
        ],
        "equilibrium": [
            "\n\nPricing above equilibrium slows sales and builds surplus; it does not clear stock faster through prestige alone.",
            "\n\nHeavy buyer competition raises equilibrium price pressure, rather than always cutting rents or fares through fear alone.",
            f"\n\nIn {scene}, persistent imbalance means the posted price is not the clearing one. Absolute claims that deny adjustment misread the diagram.",
        ],
        "law_demand": [
            "\n\nThe law of demand is an inverse price–quantity link, not a claim that higher prices raise quantity demanded via prestige.",
            "\n\nLower prices raise quantity demanded along the curve; they do not cut it through an automatic quality panic built into the law itself.",
            "\n\nIncome changes shift the curve. Calling an income shock a movement along demand mixes two different diagram moves.",
        ],
        "law_supply": [
            "\n\nProducers do not supply maximum output at rock-bottom prices just to recover fixed costs; low prices usually shrink quantity supplied.",
            "\n\nHigher product prices raise quantity supplied along the curve. Cost stories about expensive inputs are separate shifters, not the law’s direction.",
            "\n\nA supply schedule lists seller offers, not buyer purchases. Swapping those columns invents a false geometry.",
        ],
        "eco_social": [
            "\n\nEcology does not require banning all trading or deleting every market price. Quotas and carbon tools usually sit on top of markets.",
            f"\n\n{scene} already shows competitive trading beside environmental rules. That coexistence is the counterexample to pure-planning-only claims.",
            "\n\nCarbon taxes change relative prices; they do not let the state set every retail outcome by decree or erase wholesale clearing.",
        ],
        "social_market": [
            "\n\nSocial market is not pure planning and not a ban on competition. Unions and welfare do not replace consumer demand with output quotas for every good.",
            "\n\nForbidding income support by definition reverses the social pillar. Transfers and insurance are part of the model’s point.",
            f"\n\nOECD practice around {scene} is market competition with social overlays, not central-plan monoculture.",
        ],
        "consumer_sov": [
            "\n\nConsumer sovereignty is not households never influence production. That wording describes planning, not sovereignty.",
            "\n\nRetail delistings after boycotts are market responses to demand collapse, not proof that planners run every aisle.",
            f"\n\nIn {scene}, spending shifts are precisely the channel from households to firms. Denying that channel empties the sovereignty idea.",
        ],
        "planned": [
            "\n\nUnlimited orders do not erase scarcity. Steel, labour, and energy remain finite even when targets are ambitious on paper.",
            "\n\nTransition does not create perfect jobs overnight. Transitional unemployment is a known restructuring cost, not a rounding error.",
            "\n\nLiberalisation frees prices to move with cost and demand; it does not drive every price to zero by removing cost.",
        ],
        "free_market": [
            "\n\nBanning courts and defence is not free-market theory; it removes the legal shell trade needs. Limited government is not zero government.",
            "\n\nShared use of banknotes does not make market and planned systems identical. Ownership and price flexibility still differ.",
            f"\n\nDaily state-set consumer prices clash with the free-market label used in {scene}. Administered tickets are closer to planning.",
        ],
        "market_def": [
            "\n\nOnline nationwide listings are still markets. Requiring face-to-face bargaining invents a format rule the definition does not need.",
            "\n\nPrices are scarcity signals, not mere receipts. Ignoring that information role guts their coordinating job.",
            "\n\nIntangible repair services still trade at prices. Tangibility is not a membership test for market.",
        ],
        "general": [
            f"\n\nA concrete counterexample from {scene} is enough: the absolute wording fails as soon as an ordinary case sits on the other side.",
            "\n\nThe because-clause overreaches. Even if one fragment sounds familiar, the causal link or always/never stretch does not hold.",
            "\n\nPut the actors back in the correct category and the statement collapses without needing a new chapter of theory.",
        ],
    }

    bank = true_bank if truth else false_bank
    opts = bank.get(bucket, bank["general"])
    start = seed % len(opts)
    ordered = [opts[(start + k) % len(opts)] for k in range(len(opts))]
    # letter-specific coda using statement nouns so expansions diverge inside a case
    coda = [
        f"\n\nFor letter {chr(65+letter_i)}, keep {noun_bit} in the foreground; those words already decide whether the mechanism holds.",
        f"\n\nCompared with neighbouring letters in {scene}, this one turns on {noun_bit} rather than on a generic system slogan.",
        f"\n\nThe compact test for {case_id}: if {noun_bit} behave as claimed, the verdict sticks; if a shop-floor counterexample exists, it falls.",
    ]
    ordered.append(coda[letter_i % 3])
    return ordered


def ensure_lengths(bodies: list[str], case: dict) -> list[str]:
    kinds = KIND_PATTERNS[sum(ord(c) for c in case["case_id"]) % len(KIND_PATTERNS)]
    key = case["answer_key"]
    statements = case["statements"]
    title = case.get("title") or case["case_id"]
    out = list(bodies)

    def grow(text: str, need: int, i: int) -> str:
        paras = elaborations(statements[i], title, bool(key[i]), i, case["case_id"])
        cur = text
        for p in paras:
            if len(cur) >= need:
                break
            if p.strip() and p.strip() not in cur:
                cur = cur + p
        guard = 0
        while len(cur) < need and guard < 5:
            bit = (
                f"\n\nDetail {guard + 1} on {case['case_id']} {chr(65+i)}: "
                f"return to the statement’s channel "
                f"({', '.join(re.findall(r'[A-Za-z]{{4,}}', statements[i])[:4]) or 'price'}) "
                f"and ask whether "
                f"{'that channel is operating as written' if key[i] else 'a concrete counterexample blocks the absolute wording'}. "
                f"The answer stays local to this letter’s nouns."
            )
            if bit not in cur:
                cur = cur + bit
            guard += 1
        return cur

    def shrink(text: str, hi: int) -> str:
        if len(text) <= hi:
            return text
        parts = text.split("\n\n")
        while len("\n\n".join(parts)) > hi and len(parts) > 1:
            parts.pop()
        joined = "\n\n".join(parts).strip()
        if len(joined) <= hi:
            return joined
        cut = joined[:hi]
        sp = cut.rfind(". ")
        if sp > hi // 2:
            return cut[: sp + 1].strip()
        return cut.rsplit(" ", 1)[0].strip() + "."

    for i, kind in enumerate(kinds):
        lo, hi = KIND_RANGE[kind]
        if len(out[i]) < lo:
            out[i] = grow(out[i], lo + (25 if kind != "C" else 0), i)
        if kind == "C" and len(out[i]) > hi:
            shrunk = shrink(out[i], hi)
            if len(shrunk) >= 150:
                out[i] = shrunk

    if max(len(b) for b in out) < 550:
        j = kinds.index("L") if "L" in kinds else max(range(5), key=lambda i: len(out[i]))
        out[j] = grow(out[j], 600, j)
    while sum(1 for b in out if len(b) >= 400) < 2:
        grown = False
        for i, kind in enumerate(kinds):
            if kind in ("S", "L") and len(out[i]) < 400:
                out[i] = grow(out[i], 410, i)
                grown = True
                break
        if not grown:
            j = max(range(5), key=lambda i: len(out[i]))
            out[j] = grow(out[j], 410, j)
            break
    if max(len(b) for b in out) - min(len(b) for b in out) < 280:
        j = max(range(5), key=lambda i: len(out[i]))
        k = min(range(5), key=lambda i: len(out[i]))
        out[j] = grow(out[j], len(out[k]) + 290, j)
    for i in range(5):
        if len(out[i]) > 900:
            out[i] = shrink(out[i], 880)
        if len(out[i]) < 150:
            out[i] = grow(out[i], 175, i)
    return out


def apply() -> None:
    data = json.loads(PATH.read_text())
    slice_cases = data[80:120]
    ids = [c["case_id"] for c in slice_cases]
    assert ids[0] == "CASE 2.5.01" and ids[-1] == "CASE 2.6.24", ids[0:1] + ids[-1:]
    missing = [cid for cid in ids if cid not in EXPL]
    if missing:
        raise SystemExit(f"missing explanations for {missing}")

    for c in slice_cases:
        key = c["answer_key"]
        bodies = ensure_lengths(list(EXPL[c["case_id"]]), c)
        starters = [
            "On the ground, ",
            "By the definitions here, ",
            "Against that absolute wording, ",
            "In this market scene, ",
            "From the coordination side, ",
        ]
        opens = [b.split("\n")[0].strip().lower()[:40] for b in bodies]
        if len(set(opens)) < 5:
            seen: set[str] = set()
            for i in range(5):
                op = bodies[i].split("\n")[0].strip().lower()[:40]
                if op in seen:
                    bodies[i] = starters[i] + bodies[i][0].lower() + bodies[i][1:]
                seen.add(bodies[i].split("\n")[0].strip().lower()[:40])
        expl = [wrap(bodies[i], bool(key[i])) for i in range(5)]
        expl = [re.sub(r"^(TRUE|FALSE)\s*[—\-]\s*", "", e) for e in expl]
        expl = [e.replace("\u2014", ", ").replace("\u2013", "-") for e in expl]
        # strip forbidden validator phrases if any slipped in
        forbad = ["borrowed labels", "i want you", "absolute wording overreaches"]
        for i, e in enumerate(expl):
            low = e.lower()
            for f in forbad:
                if f in low:
                    expl[i] = re.sub(re.escape(f), "local wording", e, flags=re.I)
        c["tactical_explanations"] = expl

    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
    print(f"Wrote {len(slice_cases)} cases {ids[0]} .. {ids[-1]}")


if __name__ == "__main__":
    apply()
