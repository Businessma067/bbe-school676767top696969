#!/usr/bin/env python3
"""Hand-authored statement-only tactical_explanations for ch5 cases [160:200]."""
from __future__ import annotations

import json
import re
from pathlib import Path

PATH = Path("/workspace/src/data/economics-cases-ch5-subtopics.json")
SLICE = slice(160, 200)
CLOSER = re.compile(r"\s*So the statement is (True|False)\.?\s*$", re.I)


def wrap(body: str, truth: bool) -> str:
    body = body.replace("\u2014", ", ").replace("\u2013", "-").strip()
    v = "True" if truth else "False"
    return f"{body}\n\nSo the statement is {v}."


# Per case: list of 5 body strings (no closer). Truth taken from answer_key.
BODIES: dict[str, list[str]] = {}

BODIES["CASE 5.7.02"] = [
    # A F compact
    "Promotion is the communication side of the mix: advertising, personal selling, sales events, and public relations. Cutting list price to clear warehouse stock is a price decision, not the definition of promotion.",
    # B F standard
    "A product line groups similar offerings, such as several laptop models that differ only in detail. Laptops and restaurant meals share no product similarity and would not form one line merely for accounting convenience. Relatedness, not ledger grouping, defines a line.",
    # C F expanded
    "Mix extension widens the portfolio by adding an entirely new product line, such as yogurts beside ice cream. Another flavour inside the same ice-cream range deepens one existing line and is therefore line extension. Treating an extra flavour as mix extension swaps width for depth and mislabels the move. The chapter keeps those two expansion routes distinct for a reason. The statement therefore fails.",
    # D T standard
    "The marketing-mix idea is to offer a suitable good, charge an affordable price, place it where buyers can reach it, and communicate a promotional message that supports sales. That four-part coordination is exactly what the statement summarises.",
    # E T compact
    "Choices on product, price, place, and promotion draw on market-research findings about the targeted customers. Research anchors those mix decisions rather than leaving them to guesswork alone.",
]

BODIES["CASE 5.7.03"] = [
    # A F compact
    "Line extension adds variants inside one existing line. Adding an entirely new yogurt line beside ice cream widens mix width and is mix extension, not line extension.",
    # B F standard
    "A relaunch can refresh packaging, colour, or presentation while the product stays in the line. Elimination and full category replacement are separate contraction or substitution choices, not a required step for every relaunch.",
    # C F expanded
    "Minor packaging changes sit under product-mix alteration as a relaunch. Mix extension means adding a new product line to the portfolio, not restyling how an existing line appears on the shelf. Labelling a packaging tweak as mix extension confuses alteration with width expansion. The chapter's alteration path already covers those surface refreshes. The statement therefore misclassifies the change.",
    # D T standard
    "Each of the four Ps contains several tools that marketers combine inside the overall mix. Advertising and personal selling under promotion, or discounts under price, illustrate that toolkit structure. The statement describes that layered design correctly.",
    # E F compact
    "Brand loyalty is built through the product element as recognition and trust around the offer, not only through promotion messages. Placing loyalty exclusively under promotion erases the product-side role of brands.",
]

BODIES["CASE 5.7.04"] = [
    # A F compact
    "Brands use names, symbols, and signs customers can see and recognise. Patents may protect technology, yet they do not replace the visible brand marks that differentiate products in the market.",
    # B T standard
    "A harmonised marketing mix coordinates product, price, place, and promotion instead of letting each P drift on its own. Alignment across the four tools is the point of treating them as one mix.",
    # C T expanded
    "The four Ps give managers a checklist for what is sold, what is charged, where buyers can obtain it, and how the offer is promoted. Using that frame keeps those decisions pointed at the same customer target. Without it, price might undercut product quality claims or place might block access while ads promise convenience. Coordination is the practical payoff of the framework. The statement captures that alignment role accurately.",
    # D T standard
    "Marketing-mix planning aims to satisfy targeted customers' needs and wants by combining the available tools. Customer satisfaction through coordinated decisions is the planning purpose named here.",
    # E F compact
    "Introduction typically begins with low or negative profit while development and launch costs outweigh early sales. Peak profit belongs later, usually in maturity, not at introduction by default.",
]

BODIES["CASE 5.7.05"] = [
    # A T compact
    "Within the marketing mix, product covers every good and service the business offers. Tangible items and related services sit under that same product P.",
    # B F standard
    "Decline is the stage of falling sales and shrinking profit as the product nears the end of its cycle. Highest volume and peak profit belong earlier, typically around maturity, not in decline.",
    # C T expanded
    "Product sits at the centre of marketing because without a credible offer the other Ps have nothing solid to price, place, or promote. Managers treat product decisions as the most important mix choice for that reason. Features, range, brand, and life-cycle role all hang on what is being sold. Price and promotion cannot rescue an offer that fails its purpose. Calling product the heart of the mix therefore matches the chapter framing.",
    # D F standard
    "Maturity length varies widely by category; detergents may linger for years while fads fade quickly. No rule forces every product out of maturity in under one year.",
    # E F compact
    "A question mark pairs low relative market share with high market growth. High share with low growth describes a cash cow, not a question mark.",
]

BODIES["CASE 5.7.06"] = [
    # A T compact
    "Most firms sell a range of products rather than a single item. Portfolios with several offerings are the ordinary business pattern the statement describes.",
    # B T standard
    "Slightly different laptop models form a product line because the goods are closely related variants. Similarity within that group is what makes them a line rather than unrelated catalogue items.",
    # C T expanded
    "A business may specialise in one product line or diversify across several, such as laptops and monitors sold together. Specialisation keeps mix width narrow; diversification widens it by adding distinct lines. Both strategies are legitimate product-mix choices depending on capability and market aim. The statement correctly allows either path. Breadth of lines, not a single mandatory structure, defines the mix decision.",
    # D T standard
    "Adding more distinct product lines increases product-mix width. Width measures how many different lines the firm offers, so more lines mean a wider mix.",
    # E F compact
    "A star combines high relative market share with high market growth. Low share and low growth describe a poor dog, not a star. The BCG cell depends on both axes together.",
]

BODIES["CASE 5.7.07"] = [
    # A T standard
    "Offering only laptop computers means the firm specialises in one product line. That single-line focus illustrates specialisation within the product mix as the statement says.",
    # B F compact
    "A cash cow holds high relative share in a low-growth market and usually needs less expansion spend. Low share in a rapidly growing market is a question mark, not a cash cow.",
    # C F expanded
    "A poor dog combines low relative market share with low market growth and sits near the least attractive portfolio corner. High share with high growth describes a star, the opposite of a poor dog. Calling the poor dog the most valuable position reverses the BCG ranking. Value concentrates in stars and cash cows, not in weak share and weak growth together. The statement therefore fails.",
    # D F standard
    "The BCG matrix plots relative market share against market growth. Absolute share versus unit production cost is not the chapter's BCG axes and invents a different diagram.",
    # E F compact
    "Penetration pricing starts low to win share quickly. A very high initial price aimed at early adopters is price skimming, not penetration pricing.",
]

BODIES["CASE 5.7.08"] = [
    # A T compact
    "Technical support and online help are services offered to customers, so they count as products under the product element. Intangible form does not eject them from that P.",
    # B F standard
    "Price skimming launches high and may later fall as competition rises. Launching low to maximise early volume is penetration pricing. The statement swaps those two strategies.",
    # C T expanded
    "Packaging, labelling, and colour choices shape how the offer appears and are treated as product decisions inside the mix. Those surface attributes still belong to what is sold, not only to advertising copy. A colour refresh or new label can support recognition without changing the core formula. Product managers therefore own packaging variants alongside features and range. The statement places those elements correctly under product.",
    # D F standard
    "Cost-plus pricing builds selling price from production costs plus a markup. Ignoring costs and copying only competitor ads is not cost-plus logic.",
    # E T compact
    "Goods, related services, and tailored software can each stand as distinct products in one portfolio. Multiple product types inside one firm are allowed under the product P.",
]

BODIES["CASE 5.7.09"] = [
    # A T compact
    "Brands exist to differentiate the offer inside the product element. Differentiation through name, symbol, or sign is a core brand purpose in that P.",
    # B T standard
    "A brand is a name, a few words, and/or a symbol or sign that distinguishes a product or business. That visible identity package is exactly the definition used here.",
    # C T expanded
    "Brands are meant to support a unique selling proposition, make the offer recognisable, and encourage loyalty so customers return. Recognition and trust grow when the mark stays consistent and quality holds. Without those aims, a logo would be decoration rather than a marketing asset. The chapter links brands to USP, recognition, and loyalty for that reason. The statement restates those intentions correctly.",
    # D F standard
    "Psychological pricing often uses charm endings such as €9.99; it does not require every item to sell at a round €10.00. Forcing round numbers alone misstates the tool.",
    # E F compact
    "Wholesalers typically sell in bulk to retailers, not only as branded retail shops selling straight to final consumers. The statement invents a wholesaler role the chapter does not require.",
]

BODIES["CASE 5.7.10"] = [
    # A T expanded
    "Some brands keep the same look worldwide, including colour and font, so recognition travels with travellers and across markets. Consistency supports that global familiarity. Local tweaks may exist, yet many marks stay visually stable on purpose. Worldwide sameness of key brand cues is therefore a real branding practice. The statement describes that pattern accurately.",
    # B T standard
    "Brands can signal a stable quality level customers expect to find again. That quality guarantee function helps buyers choose with less uncertainty across purchases.",
    # C T compact
    "Familiar brands can make choice feel safer when customers buy abroad, because the mark signals known quality and trust. Trust and safety of choice are brand benefits named here.",
    # D T standard
    "Brand loyalty pushes customers to repurchase products tied to a trusted name or symbol. Repeat buying is the loyalty outcome the statement describes.",
    # E T compact
    "A recognisable brand symbol can reinforce the USP carried through the wider marketing mix. Symbol and message work together rather than in isolation.",
]

BODIES["CASE 5.7.11"] = [
    # A F compact
    "Retailers buy to sell to end customers at shops or other points of sale. Reselling exclusively to other wholesalers describes a wholesaler-to-wholesaler path, not the retailer role.",
    # B T expanded
    "Minor packaging or colour changes are called a relaunch under product-mix alteration. The core product stays, while presentation is refreshed to regain attention. That limited change is distinct from eliminating the item or adding a whole new line. Managers use relaunch when a light refresh may restore appeal. The statement classifies those minor changes correctly.",
    # C T compact
    "When a relaunch fails to satisfy customers, major redesign or elimination from the line may follow. Escalation beyond a light refresh is part of alteration and contraction logic.",
    # D T standard
    "Line extension adds new products inside an existing line, such as more ice-cream flavours. Depth increases while the line identity remains. That is the move the statement names.",
    # E F compact
    "Direct distribution reaches customers without intermediaries. Requiring at least two intermediaries describes an indirect path, the opposite of direct.",
]

BODIES["CASE 5.7.12"] = [
    # A T compact
    "Adding yogurts beside an ice-cream range introduces a new product line and is therefore mix extension. Portfolio width rises when that second line appears.",
    # B T standard
    "Line extension deepens one product line by adding variants within it. Extra flavours or versions increase depth without creating a separate line. The statement states that depth effect correctly.",
    # C F expanded
    "Indirect distribution relies on intermediaries such as wholesalers and retailers. Personal delivery by the producer to every household with no retailer is direct distribution, or at least not the indirect pattern. The statement reverses the channel logic by treating producer-only delivery as indirect. Intermediaries are the defining feature of the indirect path. The claim therefore fails.",
    # D F standard
    "Online sales channels let customers buy, so they belong to place as access and distribution, not only to promotion as advertising. Enabling purchase keeps them inside place decisions.",
    # E T compact
    "Mix extension raises the number of product lines the business offers. More lines mean a wider mix under that expansion route, not merely deeper variants.",
]

BODIES["CASE 5.7.13"] = [
    # A F compact
    "Personal selling is a promotion tool: sales staff communicate and persuade. Negotiated discounts may use price levers, yet that does not reclassify personal selling as a permanent price tool that replaces promotion.",
    # B T standard
    "Product-mix expansion proceeds through line extension or mix extension. Those two routes deepen a line or add new lines. The statement names both expansion strategies correctly.",
    # C F expanded
    "Advertising informs and persuades as a promotion tool; it does not decide which warehouse holds finished goods. Warehouse storage sits under place and operations, not under advertising classification. Calling advertising a place tool because of storage invents a false link. Message design and media choice remain promotional work. The statement therefore misplaces advertising in the mix.",
    # D T compact
    "Alteration changes existing products over time so a new range replaces the previous one. That refreshed set is the alteration outcome described here.",
    # E F standard
    "Public relations builds a favourable image as a promotion activity. Eliminating weak brands is product-mix contraction, not public relations. The statement confuses image work with portfolio pruning.",
]

BODIES["CASE 5.7.14"] = [
    # A F expanded
    "Economies of scale in growth typically lower average unit costs as output rises, not raise them. Higher volume spreads fixed costs and can improve efficiency. Claiming costs always rise with growth output reverses that usual pattern. Falling average costs help explain why profit often improves in growth. The absolute upward-cost claim therefore fails.",
    # B T compact
    "Removing products or whole lines from the range is contraction within product-mix strategy. Portfolio pruning is exactly that contraction move.",
    # C F standard
    "Cash cows sit in low-growth markets and usually receive lower promotional investment while revenues stay strong. Highest promotion in rapidly growing segments fits stars or question marks better than cash cows.",
    # D F compact
    "Stars still need promotional and production investment to defend a strong position in a growing market. First reaching high share does not end the need to invest.",
    # E T standard
    "When a relaunch looks unpromising, the firm may eliminate the product from its range. Elimination after a weak relaunch prospect is a recognised contraction choice.",
]

BODIES["CASE 5.7.15"] = [
    # A T standard
    "Product-mix strategies cover expansion, alteration, and contraction in the textbook framework. Those three routes organise how the portfolio grows, changes, or shrinks.",
    # B F expanded
    "Product-mix contraction removes products or lines from the range. Adding new flavours inside an ice-cream line deepens that line and is line extension, an expansion move. Labelling flavour additions as contraction reverses the direction of change. Depth increases when variants arrive; contraction would cut offerings instead. The statement therefore fails.",
    # C T compact
    "Specialising in one product line narrows product-mix width. Width stays small when only one sort of product is offered across the portfolio.",
    # D T standard
    "Diversifying across different product lines increases mix width. More distinct lines widen the portfolio under that diversification path as intended.",
    # E F compact
    "Increasing mix width means adding different product lines, not only more variants inside one line. Variants within one line raise depth, not width.",
]

BODIES["CASE 5.7.16"] = [
    # A F compact
    "Specialising in one product line keeps the mix narrow; it does not diversify by adding different lines. Diversification requires more lines, the opposite of single-line focus.",
    # B F standard
    "A harmonised mix still rests on customer needs in the targeted market. Heavy promotion cannot justify ignoring those needs. Research-based customer fit remains required.",
    # C F expanded
    "Market research informs price, place, and promotion as well as product. Channel design, message content, and pricing levels all draw on what research finds about the target. Claiming research touches only product would leave the other Ps unguided. The chapter ties mix decisions generally to research findings. The narrow product-only claim is therefore false.",
    # D T standard
    "The product life cycle is a theoretical model of stages across a product's life that differ in sales volume and profit. Introduction, growth, maturity, and decline are those stages. The statement states that model role correctly.",
    # E F compact
    "Fad products often leave the market quickly, sometimes within a year. Detergents and toothpaste illustrate long maturity, not fad-like decades of maturity for fads themselves.",
]

BODIES["CASE 5.7.17"] = [
    # A F compact
    "Detergents and toothpaste are textbook examples of long or seemingly indefinite maturity, not of fad cycles under one year. Short fad timing belongs to other categories.",
    # B T standard
    "Before launch there are no sales, yet development costs already exist, so introduction begins in loss. Cost without revenue is the early introduction pattern the statement names.",
    # C T expanded
    "After launch, low introductory prices and heavy promotion can keep costs above sales for a stretch of the introduction stage. Awareness spending and trial discounts raise outflows while volume is still thin. That early imbalance is why introduction often shows loss even after the product is on the market. Managers expect the gap to narrow only toward the end of the phase. The statement links low prices and heavy promotion to costs exceeding sales correctly.",
    # D T compact
    "Toward the end of introduction, revenues may finally exceed costs and a small profit can appear. That late-introduction turn toward profit is a recognised possibility.",
    # E T standard
    "In growth, sales rise faster than costs and average costs may fall through economies of scale. Rapid volume with improving cost positions is the growth pattern described here.",
]

BODIES["CASE 5.7.18"] = [
    # A F expanded
    "Adding yogurts beside ice cream creates a new product line and is mix extension. Line extension would add variants inside the ice-cream line itself. Calling the yogurt addition line extension confuses width expansion with depth expansion. The portfolio gains a second line rather than more ice-cream flavours. The classification in the statement is therefore wrong.",
    # B T standard
    "Profit usually rises in growth and peaks in maturity. That sales-and-profit path across those stages is the life-cycle pattern the statement reports.",
    # C T compact
    "Changing packaging colours on an existing shampoo is a relaunch under alteration, not contraction. The product stays; presentation is refreshed.",
    # D T standard
    "Eliminating a weak product is contraction, not line extension. Line extension would add variants; removal shrinks the range. The statement's classification is correct.",
    # E T compact
    "Low share in a fast-growing market at launch is a question mark, not a cash cow. Cash cows need high share in low-growth settings instead of that launch profile.",
]

BODIES["CASE 5.7.19"] = [
    # A T standard
    "In maturity, market growth slows while the product may still hold high share. Slowing growth with retained strength is the maturity picture the statement gives.",
    # B T expanded
    "During decline, sales fall and profits fall, sometimes quickly, as the product approaches the end of its cycle. Demand weakens and competitive pressure can accelerate the drop. Managers may cut support or prepare elimination when that path continues. The stage is defined by those downward movements, not by peak volume. The statement describes decline correctly.",
    # C T compact
    "Life-cycle stage lengths vary enormously across product categories. Some mature for decades; others fade within months. That variation is real.",
    # D T standard
    "High share after market growth has slowed is a cash cow rather than a star. Stars still need high growth alongside high share. The statement's cash-cow reading is right.",
    # E T compact
    "Detergents, toothpaste, or perfumes may stay in a long or seemingly indefinite maturity phase. Extended maturity for such staples is a classic life-cycle observation.",
]

BODIES["CASE 5.7.20"] = [
    # A T compact
    "High share while the market is still growing marks a star, not a poor dog. Poor dogs combine low share with low growth near decline instead.",
    # B T standard
    "Low share with low market growth near decline is a poor dog, not a question mark. Question marks need high growth despite low share. The classification in the statement matches BCG logic.",
    # C T expanded
    "A low launch price meant to build share quickly is penetration pricing. Price skimming instead starts high and may fall later as competition rises. The two strategies aim at different early revenue and volume goals. Managers choose penetration when rapid trial and share matter more than early skim margins. Labelling the low-launch path as penetration rather than skimming is therefore correct.",
    # D T standard
    "Fad products may run a very short life cycle and leave the market in less than a year. Brief popularity then withdrawal is the fad pattern named here.",
    # E T compact
    "A high initial price later reduced over time is price skimming, not penetration. Penetration would start low to chase volume from the outset.",
]

BODIES["CASE 5.7.21"] = [
    # A T standard
    "In maturity, rising competition often forces lower prices and higher promotional spend, which pressures profits. That squeeze from rivalry is a typical maturity dynamic.",
    # B T compact
    "The Boston Consulting Group matrix classifies products by relative market share and market growth. Those two axes define the four portfolio boxes.",
    # C T expanded
    "A product with low relative market share in a rapidly growing market is a question mark. The growth opportunity is large, yet the firm's competitive weight is still weak. Heavy investment may be needed if managers want to turn it into a star. Without support, the position can stall despite the growing market. The statement assigns that low-share, high-growth cell correctly.",
    # D T compact
    "During introduction a product can sit as a question mark: low share in a market that is still growing. Early launch often matches that BCG cell.",
    # E T standard
    "When share rises while the market keeps growing, the product may become a star. Moving from question mark toward star follows that share gain in growth.",
]

BODIES["CASE 5.7.22"] = [
    # A T expanded
    "Stars are valuable because they hold a strong market position while the market itself is still growing. High relative share plus growth creates both current strength and future potential. Cash generated and competitive standing make the position worth defending. Managers therefore treat stars as priority assets in the portfolio. The statement's value reading matches that BCG logic.",
    # B T compact
    "Firms invest in promotion and production capacity to keep a star's strong position. Defending growth-market leadership requires ongoing support, not neglect.",
    # C T standard
    "When growth slows but share stays high, the product may become a cash cow. The move from star toward cash cow follows that growth slowdown with retained strength.",
    # D T compact
    "Cash cows usually receive lower investment because growth is low while revenues remain high. Harvesting cash with lighter spend is the typical treatment.",
    # E T standard
    "As a product nears decline with low growth and relatively low share, it increasingly becomes a poor dog. Weak share in a fading market is that BCG corner.",
]

BODIES["CASE 5.7.23"] = [
    # A T compact
    "Poor dogs combine low relative market share with low market growth on the BCG matrix. That weak-weak cell is the definition the statement uses.",
    # B T expanded
    "Stars occupy high relative market share together with high market growth. Leadership in an expanding market is what makes the cell a star rather than a cash cow or question mark. Investment aims to protect that dual strength. Losing either share or growth would push the product toward another box. The statement places stars on those two high axes correctly.",
    # C T standard
    "The price element is the amount customers pay for the goods or services offered. Payment for the offer is the core meaning of that marketing-mix P.",
    # D T compact
    "An affordable price sits beside convenient place and promotional communication in the basic marketing-mix idea. Price is one of those coordinated pillars.",
    # E T standard
    "Introductory prices may be set low at launch to attract customers in the introduction phase. Trial-friendly launch pricing is a recognised introduction tactic.",
]

BODIES["CASE 5.7.24"] = [
    # A T compact
    "Cost-plus pricing adds a markup to production costs to set the selling price. Cost base plus margin is the cost-plus rule the statement states.",
    # B T standard
    "Selling only through the firm's own shops is direct distribution because no independent intermediary sits between producer and buyer. Own-shop paths illustrate that direct place choice.",
    # C T standard
    "Supplying supermarkets through a wholesaler is indirect distribution: the wholesaler is an intermediary on the path to retail. Direct would skip that middle step.",
    # D T expanded
    "Television commercials that communicate product benefits are advertising under promotion, not place decisions about physical access. Ads persuade and inform; warehouses and aisles handle availability. Mixing the commercial with place would confuse message tools with channel tools. Media spend belongs in the promotion toolkit. The statement's advertising classification is therefore right.",
    # E T compact
    "Penetration pricing sets a relatively low price to gain market share quickly after launch. Fast volume through a low entry price is the penetration aim.",
]

BODIES["CASE 5.7.25"] = [
    # A T compact
    "Price skimming starts with a high initial price that may later fall as competition increases. Early skim then gradual reduction is the skimming path.",
    # B T standard
    "Competitive pricing sets the product's price in line with rival offerings in the same market. Matching or tracking competitors is the competitive-pricing logic named here.",
    # C T expanded
    "Making a product available in supermarket aisles is a place decision about where customers can buy. Promotion would communicate about the product rather than put it on the shelf. Aisle presence is distribution access, not an advertising tool by itself. Channel coverage and retail listing sit under place for that reason. The statement correctly assigns supermarket availability to place rather than promotion.",
    # D T compact
    "Psychological pricing uses prices such as €9.99 to shape perceptions of affordability. Charm endings are a classic psychological-pricing device.",
    # E T standard
    "Discounts, payment terms, and trade allowances are price tools inside the marketing mix. They adjust what buyers effectively pay without changing the core list alone.",
]

BODIES["CASE 5.7.26"] = [
    # A T expanded
    "List price and negotiated trade discounts together determine the effective price channel customers actually pay. A high list with a deep trade cut can land near a lower net than a modest list with no discount. Channel negotiations therefore belong inside price management, not only as paperwork beside it. Effective price is the outcome managers track. The statement links list and trade discounts to that effective price correctly.",
    # B T standard
    "Sales representatives visiting business clients practise personal selling, not public relations. Direct sales contact is the personal-selling tool; PR builds broader image through other channels.",
    # C T compact
    "Price differentiation charges different prices to distinct customer groups or channels. Segment- or channel-based price splits are that differentiation tool.",
    # D T standard
    "Press releases that build corporate reputation are public relations, not sales promotion. Image-building communications sit under PR rather than short-term purchase incentives.",
    # E T compact
    "A temporary price cut during a sales event is a price decision tied to promotional activity. Event pricing bridges price and promotion without erasing either P.",
]

BODIES["CASE 5.7.27"] = [
    # A T standard
    "Finance instalment offers spread payments over time and form part of the overall price package customers face. Timing of payment belongs with price design, not only with product features.",
    # B T expanded
    "Loyalty discounts reward repeat customers and sit inside the price element of the mix. Lower prices for returning buyers adjust what loyal customers pay and encourage repurchase. Those discounts are not advertising messages alone; they change the money exchanged. Retention pricing tools therefore belong under price alongside list and trade terms. The statement places loyalty discounts correctly.",
    # C T compact
    "Losses from development costs before sales take off belong to introduction, not maturity. Maturity is later, when growth has slowed and profit often peaks.",
    # D T standard
    "Place concerns where and how the product is made available to customers. Access and distribution channels are the place agenda, not the firm's internal office address alone.",
    # E T compact
    "A convenient place to buy supports the basic marketing-mix goal of accessible purchase. Easy access is one pillar of that coordinated mix idea.",
]

BODIES["CASE 5.7.28"] = [
    # A T compact
    "Rapid sales increases with falling average costs mark growth rather than decline. Decline shows falling sales, not accelerating volume with better costs.",
    # B T standard
    "Profit peaking while market growth slows marks maturity rather than introduction. Introduction is early and often loss-making; maturity is where profit commonly peaks.",
    # C T expanded
    "Falling sales and profits as demand weakens mark decline rather than growth. Growth is the rising-sales phase; decline is the opposite trajectory. Managers may cut support or prepare exit when that weakening continues. Confusing decline with growth would reverse the life-cycle reading entirely. The statement assigns the falling path to decline correctly.",
    # D T standard
    "Place decisions focus on customer access and distribution channels, not on where the firm's own offices sit. Buyer reach matters more than headquarters location for this P.",
    # E T compact
    "Direct distribution sells to customers without wholesalers or retailers in between. Skipping intermediaries is the defining feature of that place choice.",
]

BODIES["CASE 5.7.29"] = [
    # A T standard
    "Indirect distribution uses intermediaries such as wholesalers and retailers to reach final consumers. Middlemen on the path are what make the channel indirect.",
    # B T compact
    "Wholesalers buy in bulk and resell to retailers inside the distribution channel. Bulk-in, retail-out is the classic wholesaler role described here.",
    # C T expanded
    "Retailers make products available to end customers at shops, supermarkets, or other points of sale. They sit at the last commercial step before the household or final buyer. Without retail access, many consumer goods would not reach everyday purchase occasions. Place planning therefore treats retailers as a core intermediary type. The statement describes that end-customer access role correctly.",
    # D T compact
    "Online sales platforms can serve as a place channel alongside physical shops for the same product. Digital and physical access can coexist under place.",
    # E T standard
    "Selling through own shops is direct distribution within the place element. The firm reaches buyers without independent intermediaries on that path.",
]

BODIES["CASE 5.7.30"] = [
    # A T expanded
    "Supplying supermarkets through a wholesaler illustrates indirect distribution in the place P. The wholesaler stands between producer and retail outlet, so the path is not direct. Indirect channels trade some control for broader retail reach. Managers accept that middle step when supermarket coverage matters. The statement's illustration matches the indirect pattern.",
    # B T compact
    "Intensive distribution places products in many outlets to maximise convenience. Wide availability is the intensive coverage goal for customers.",
    # C T standard
    "Selective distribution limits outlet numbers to protect brand positioning and service standards. Fewer, chosen partners keep control higher than intensive coverage.",
    # D T compact
    "Exclusive distribution uses a very limited set of specialised partners. Scarcity of outlets supports premium positioning and tight partner standards.",
    # E T standard
    "Home-delivery logistics extend place convenience after a showroom purchase. Delivery continues the access promise beyond the store floor itself.",
]

BODIES["CASE 5.7.31"] = [
    # A T compact
    "Distribution-channel analysis can reveal weaknesses and push managers toward alternative channels in place planning. Spotting gaps is meant to trigger channel remedies.",
    # B T expanded
    "Promotion covers communicating a message in order to promote the sale of the product. Advertising, personal selling, sales promotion, and public relations sit under that communication umbrella. Without a message path, customers may never learn why they should buy. Place puts the product within reach; promotion explains and persuades. The statement defines that promotional role correctly.",
    # C T standard
    "Advertising informs and persuades target customers as a promotional tool. Information plus persuasion is the advertising job inside the mix.",
    # D F compact
    "Even when breakfast cereals are physical goods, installation or support services can still count under the product P for that business. Services remain products when offered.",
    # E F standard
    "A global brand typically signals consistent quality to protect recognition; sharp quality swings across countries would undermine that recognition. Guaranteeing wild quality variation without harm to recognition contradicts brand logic.",
]

BODIES["CASE 5.7.32"] = [
    # A F compact
    "Selling exclusively through wholesalers means intermediaries are used, so distribution is indirect. Direct distribution would skip wholesalers entirely.",
    # B T standard
    "Sales promotion uses short-term incentives and sales events to stimulate purchase. Temporary push tools sit under that promotional category.",
    # C T standard
    "Personal selling involves direct contact between sales staff and customers to promote the product. Face-to-face or direct sales dialogue is the personal-selling path.",
    # D T expanded
    "Public relations builds a favourable image of the business or brand among stakeholders. Press work, community messages, and reputation management belong here rather than in short-term coupon events alone. Image effects can support sales indirectly by raising trust. Managers use PR when credibility and standing matter alongside harder sell tools. The statement places PR in that image-building role correctly.",
    # E F compact
    "A low introductory price to win early volume is penetration pricing. Price skimming aims high at early luxury or early-adopter willingness to pay, not low launch pricing.",
]

BODIES["CASE 5.7.33"] = [
    # A F compact
    "Removing an outdated model after failed relaunches is contraction, not mix extension. Mix extension would add a new product line rather than cut an old one.",
    # B T standard
    "Firms may spend heavily on advertisements and sales events during introduction to create awareness and trial. Heavy early promotion is a common introduction pattern.",
    # C F expanded
    "High share in a no-growth market is a cash cow, not a question mark. Question marks have low share in high-growth markets and may need growth investment. Treating a high-share, no-growth cereal as a question mark that needs maximum growth spend reverses BCG placement. Cash cows are usually harvested with lighter investment. The statement therefore fails.",
    # D T compact
    "Promotional spending in growth helps maintain a star's strong market position. Stars still need that continued support while the market expands.",
    # E T standard
    "Cash-cow products in low-growth markets usually receive lower promotional investment than stars. Harvesting with lighter spend fits that low-growth, high-share cell.",
]

BODIES["CASE 5.7.34"] = [
    # A T expanded
    "Window displays and social-media campaigns communicate the product message and therefore count as promotional tools. Both push information and persuasion toward target buyers. Place would be about where the product can be obtained; these tools talk about the offer. Managers mix offline and online message channels under promotion for that reason. The statement classifies those displays and campaigns correctly.",
    # B T standard
    "Brochure advertising and reservation campaigns can coordinate promotion with price and place decisions. Message, offer terms, and access timing work best when planned together.",
    # C T compact
    "A sales force calling on business customers is part of the promotion mix for organisational buyers. Personal selling carries the promotional contact in that B2B setting.",
    # D T standard
    "Promotional messages should reflect the needs of the targeted segment identified through market research. Research-based fit keeps claims relevant to the intended audience.",
    # E T compact
    "Near decline, rising competition may push promotional costs up as firms fight for remaining demand. Higher spend on a shrinking market is a recognised late-cycle pressure.",
]

BODIES["CASE 5.7.35"] = [
    # A T compact
    "Market research informs product design, pricing, distribution channels, and promotional messages together. All four Ps draw on findings about the target market.",
    # B T expanded
    "A harmonised marketing mix aligns an affordable price, a convenient place, a suitable product, and a clear promotional message. Each P supports the same customer target rather than pulling in conflicting directions. Research findings feed that alignment so the offer, charge, access path, and message fit one another. Without harmony, a strong ad can promise what place cannot deliver. The statement captures that coordinated mix idea correctly.",
    # C F compact
    "Social-media posts that promote cereals are promotion, not place. Place chooses how and where buyers obtain the product, not which warehouse holds stock for an ad post.",
    # D F standard
    "Charm pricing at €9.99 is a price-element tool that shapes payment perceptions. It is not merely a promotional slogan outside price. Psychological price endings belong under price.",
    # E F compact
    "Running shoes being physical goods does not block services such as fitting support from counting under the product P. Offered services remain products in the mix.",
]

BODIES["CASE 5.7.36"] = [
    # A F compact
    "Global brands usually protect recognition by keeping quality reasonably consistent across countries. Sharp quality swings would damage recognition, not leave it untouched.",
    # B F standard
    "Exclusive selling through wholesalers uses intermediaries and is therefore indirect distribution. Direct distribution would reach buyers without that wholesale middle step.",
    # C F expanded
    "A low introductory price aimed at building volume is penetration pricing. Price skimming sets a high early price for buyers willing to pay more at launch. Treating a low launch price as skimming aimed only at luxury early adopters reverses both the level and the usual skimming audience. Penetration seeks quick share; skimming seeks early margin. The statement therefore mislabels the tactic.",
    # D T standard
    "Different business units may offer products with distinct characteristics and cycles aimed at separate segments. Portfolio diversity across units is a normal organisational pattern.",
    # E F compact
    "Removing an outdated model after failed relaunches is contraction, not mix extension. Expansion would add lines or deepen lines rather than eliminate a weak model.",
]

BODIES["CASE 5.7.37"] = [
    # A T standard
    "Used equipment sales, support services, and tailored software can coexist as distinct products in one portfolio. Multiple offer types under one firm fit the product element.",
    # B T compact
    "Adding a new flavour inside an existing household-cleaners range is line extension that deepens that line. Depth rises without creating a separate line.",
    # C T expanded
    "Introducing an entirely new household-cleaners product line beside an existing range is mix extension that widens the portfolio. Width grows because a distinct line appears, not merely another variant of the old line. Managers use mix extension when they want new categories under the same business. Confusing that move with line extension would understate how much the mix changes. The statement classifies the new-line addition correctly.",
    # D F compact
    "High share in a no-growth market is a cash cow, not a question mark needing maximum growth investment. Question marks have low share in high-growth markets.",
    # E T standard
    "Refreshing household-cleaners packaging colours without changing the core formula is a relaunch under product-mix alteration. Presentation changes while the product stays.",
]

BODIES["CASE 5.7.38"] = [
    # A T expanded
    "Removing an underperforming household-cleaners variant is contraction in the product-mix strategy. The range shrinks when weak items leave. Contraction differs from relaunch, which would try a refresh first, and from extension, which would add offerings. Managers prune when support no longer pays off. The statement places that removal under contraction correctly.",
    # B T compact
    "A brand symbol and consistent label design support differentiation and recognition under the product P. Visible brand cues help buyers tell the offer apart.",
    # C T standard
    "Low introductory pricing for a new household-cleaners product can attract first buyers in the introduction stage. Trial-friendly launch prices fit that early life-cycle phase.",
    # D T compact
    "Selling through a company website and partner retailers combines online and indirect place channels. Digital direct access and retail intermediaries can run together.",
    # E T standard
    "Seasonal sales events promoting household cleaners are sales-promotion tools within promotion. Short-term purchase incentives and events sit in that promotional category.",
]

BODIES["CASE 5.7.39"] = [
    # A F compact
    "Social-media posts promoting running shoes are promotion, not place. Place concerns access and distribution, not which warehouse an ad references.",
    # B F expanded
    "Charm pricing at €9.99 is a price decision that shapes what customers pay and how affordable the figure feels. Treating it only as advertising copy and never as price ignores the psychological-pricing tool inside the price P. Message may mention the figure, yet the ending itself is a pricing choice. Price and promotion can interact without erasing the price classification. The statement's never-a-price reading is therefore false.",
    # C F standard
    "Smart watches being physical goods does not prevent installation or support services from counting under the product P. Services offered with or beside the watch remain products.",
    # D T compact
    "Adding a new flavour variant within an existing sportswear range is line extension that deepens the line. Depth increases inside the same line identity.",
    # E T standard
    "Introducing an entirely new sportswear product line beside an existing range is mix extension that widens the portfolio. A new line raises mix width rather than only line depth.",
]

BODIES["CASE 5.7.40"] = [
    # A T compact
    "Refreshing sportswear packaging colours without changing the core formula is a relaunch under product-mix alteration. Surface refresh without formula change fits that relaunch path.",
    # B T standard
    "Removing an underperforming sportswear variant is contraction in the product-mix strategy. Cutting the weak item shrinks the range rather than extending it.",
    # C T standard
    "A sportswear brand symbol and consistent label design support differentiation and recognition in the product P. Brand marks help customers identify and prefer the offer.",
    # D F expanded
    "A global smart-watches brand typically protects recognition by keeping quality reasonably stable across markets. Guaranteeing sharp quality swings while claiming recognition is unharmed contradicts how brands work. Travellers and multi-market buyers expect the mark to mean a maintained standard. Undermining quality would erode that expectation. The statement's guarantee of harmless variation therefore fails.",
    # E F compact
    "Selling smart watches only through wholesalers uses intermediaries and is indirect distribution. Direct distribution would omit those wholesale intermediaries.",
]

BODIES["CASE 5.7.41"] = [
    # A T standard
    "Low introductory pricing for a new sportswear product can attract first buyers during introduction. Early trial pricing fits that life-cycle stage's need for awareness and trial.",
    # B T compact
    "Selling sportswear through a company website and partner retailers combines online and indirect place channels. Own-site access and retail partners can operate side by side.",
    # C T expanded
    "Seasonal sales events promoting sportswear are sales-promotion tools within the promotion element. They create short-term reasons to buy through events and incentives rather than only through long-running brand ads. Managers time those pushes to seasons when demand can be stimulated. Sales promotion sits beside advertising, personal selling, and public relations in the promotion mix. The statement places seasonal events in that sales-promotion slot correctly.",
    # D T compact
    "Adding a new flavour variant within an existing organic-cereals range is line extension that deepens the line. Extra variants raise depth inside the same line.",
    # E T standard
    "Introducing an entirely new organic-cereals product line beside an existing range is mix extension that widens the portfolio. Portfolio width grows with that new line.",
]


def main() -> None:
    data = json.loads(PATH.read_text())
    chunk = data[SLICE]
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
            if "—" in body:
                raise SystemExit(f"{c['case_id']} {chr(65+i)}: em dash in body")
            expl.append(wrap(body, bool(c["answer_key"][i])))
        c["tactical_explanations"] = expl

    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
    print(f"Wrote explanations for {ids[0]} .. {ids[-1]} ({len(ids)} cases) slice[{SLICE.start}:{SLICE.stop}]")


if __name__ == "__main__":
    main()
