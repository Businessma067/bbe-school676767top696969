#!/usr/bin/env python3
"""Hand-authored statement-only tactical_explanations for ch5 cases [240:280]."""
from __future__ import annotations

import json
import re
from pathlib import Path

PATH = Path("/workspace/src/data/economics-cases-ch5-subtopics.json")
SLICE = slice(240, 280)
CLOSER = re.compile(r"\s*So the statement is (True|False)\.?\s*$", re.I)


def wrap(body: str, truth: bool) -> str:
    body = body.replace("\u2014", ", ").replace("\u2013", "-").strip()
    v = "True" if truth else "False"
    return f"{body}\n\nSo the statement is {v}."


# Per case: list of 5 body strings (no closer). Truth taken from answer_key.
BODIES: dict[str, list[str]] = {}

BODIES['CASE 5.7.82'] = [
    'Familiar names cut search friction for fitness enthusiasts facing crowded shelves of similar gear. Brand trust becomes a practical filter when offers look alike. That value is exactly what the statement highlights for this segment.',
    'Retiree research can reshape features, price bands, outlet choice, and messaging together. Limiting its role to promotion alone erases three of the four Ps. Product, price, and place all draw on the same buyer insight from that fieldwork.',
    'Premium fitness gear often needs trained staff, fitting advice, or careful presentation at the point of sale. Selective distribution limits partners to outlets that can hold that service standard. Spreading the same premium line through every discount aisle would undercut the quality promise enthusiasts expect. Controlled place choices therefore suit premium offers aimed at this segment when service quality must stay protected.',
    'Brands sit inside the Product P as names, words, symbols, or signs that distinguish the offer. Retirees can still take reassurance from a familiar brand even when promotion also uses brand cues. Claiming brands belong only to promotion misplaces them in the mix.',
    'Introductory price cuts change the Price P, not assortment width or depth. Product-mix contraction means dropping lines or items. A lower launch fee is not mix contraction.',
]

BODIES['CASE 5.7.83'] = [
    'Channels preferred by retirees decide how and where the offer reaches them. That decision is Place in the marketing mix, even if staff greet buyers warmly in store. Advertising slogans and other messages belong to Promotion. The channel itself does not become a promotion activity merely because words are spoken there. Mislabeling preferred channels as slogan work alone confuses Place with Promotion.',
    'Fitness enthusiasts may need demos, fitting tips, or safety briefings before buying specialised equipment. Personal selling lets staff walk through those details face to face. When explanation is required, that promotion tool fits the purchase situation.',
    'Staff who advise retirees are doing personal selling under Promotion. Lasting list prices sit under Price. Sales talk does not set permanent prices for all future years.',
    'A product line groups similar items that share category logic, such as related aids for older buyers. Food beside machinery would widen mix across unrelated lines, not define one line. Unrelated categories are the wrong test for line status.',
    'Premium-buyer insight can reset specifications, fees, stockists, and campaigns. Blocking product, price, and place from that research invents a false boundary.',
]

BODIES['CASE 5.7.84'] = [
    'Premium buyers can still take quality cues from a familiar brand. Brands belong with Product, not Promotion alone. Denying any reassurance on that myth misstates the mix.',
    'Updated packaging or colours count as a relaunch: a minor refresh of an existing offer. Fitness enthusiasts can notice the refresh without a whole new product line. Relaunch renews appeal while line structure stays put.',
    'Cutting an introductory price for premium buyers is a pricing move under the Price P. Product-mix contraction would remove products or lines from the assortment itself. Revenue per unit may fall for a launch period without any mix contraction occurring. Classifying the intro price as mix contraction therefore swaps a price tactic for an assortment change and misreads both tools.',
    'Preferred channels for premium buyers are Place decisions about availability and partner quality. Promotion covers slogans and communication, not the channel map. Calling channel selection promotion because slogans appear somewhere mislabels Place.',
    'Personal selling explains complex premium offers; it does not rewrite lasting list prices. Equating sales talk with permanent price-setting collapses Promotion into Price.',
]

BODIES['CASE 5.7.85'] = [
    'Premium lines stay coherent when items share related features and uses. Food plus machinery is mix width across lines, not one product line. Unrelated categories fail as a line test.',
    'Budget-shopper research can steer cheaper variants, clear price points, accessible outlets, and matching messages. Promotion is not its only legitimate use. Product, price, and place all benefit from the same segment facts.',
    'A budget variant added inside an existing fitness line is line extension: depth grows without a new line. Fitness enthusiasts who want a lower-priced option can be reached while mix width stays unchanged. The assortment stays focused inside one coherent category rather than spreading into unrelated goods. That is the line-extension logic the statement describes for attracting the segment without widening the whole mix.',
    'Home-office findings can change desk-friendly features, subscription fees, delivery options, and ad copy at once. Market research therefore feeds all four mix elements for that segment. Guiding product, price, place, and promotion together matches how the chapter uses research.',
    'Budget shoppers still lean on familiar brands for quality cues. Brands are Product tools, not Promotion-only ornaments. Denying reassurance on a promotion-only myth is wrong.',
]

BODIES['CASE 5.7.86'] = [
    'Messages aimed at home-office workers should match what is sold, what it costs, and where it can be obtained. Promotion that promises one thing while product, price, or place deliver another creates mix conflict. Alignment across the Ps is the point of a tailored message.',
    'Affordable fees for home-office buyers support value beside convenient delivery and clear talk. Price works with place and promotion, not alone. That combined mix goal is what the statement names.',
    'Home-office buyers often compare many similar tools in crowded online listings. A trusted brand name shortens that comparison and reduces perceived risk of a poor choice. Familiar labels therefore matter when close substitutes compete on features that look nearly identical at first glance. Brand trust is especially valuable for this segment for that filtering reason.',
    'Premium home-office offers may need setup help or carefully chosen stockists. Selective distribution keeps service standards under control. Flooding every low-service outlet would weaken the premium promise for these buyers.',
    'When a home-office product is hard to grasp from a webpage alone, staff can close the gap. Personal selling supplies detail before purchase. The tool fits explanation-heavy buying tasks.',
]

BODIES['CASE 5.7.87'] = [
    'Fresh packaging for home-office workers can revive interest without inventing a new line. That minor change is a relaunch. Appeal updates while line structure stays in place.',
    'Adding a cheaper home-office variant inside the current line deepens the line rather than widening the whole mix. Line extension targets budget-minded buyers in that segment without opening unrelated categories. Width stays put; depth grows.',
    'Budget-conscious shopper studies can reshape recipes, price ladders, store lists, and campaign themes together. Product features, fee levels, outlets, and messages all sit downstream of those findings. Treating research as promotion-only would waste insight that belongs across the mix. The statement correctly opens the work to all four Ps for thrifty shoppers.',
    'Copy for budget-conscious shoppers must fit the actual product, its price, and the places it is sold. A bargain claim the shelf cannot support breaks the mix. Harmonised promotion keeps the message honest across the other Ps.',
    'Value pricing for thrifty shoppers works best beside convenient outlets and clear communication. Affordable price supports that wider marketing-mix aim, not a fee in isolation.',
]

BODIES['CASE 5.7.88'] = [
    'A low launch price for budget shoppers is still Price, not product-mix contraction. Contraction removes items or lines. Temporary revenue per unit is not assortment shrinkage.',
    'Even price-sensitive shoppers often prefer a known name over an unknown bargain. Brand trust reduces fear of wasting scarce money on a poor choice. Familiar labels stay valuable when competing offers look similar on price alone.',
    'Premium offers aimed at thrifty shoppers still need outlets that can protect service and presentation. Selective distribution limits partners to those that can hold that standard. Broad discount dumping would clash with a premium service promise. Place control therefore suits premium targeting even when the audience watches every euro, because quality delivery still has to be supervised.',
    'Complex goods sold to budget-conscious buyers may still need face-to-face explanation of features and running costs. Personal selling can supply that detail before money changes hands. Effectiveness follows the need for explanation, not income labels alone.',
    'Preferred channels for budget shoppers are Place choices about reach. Promotion is communication, not the channel map. Channel use is not slogan work alone.',
]

BODIES['CASE 5.7.89'] = [
    'New colours or packs for budget-conscious shoppers can refresh an existing offer. Relaunch covers those minor updates without a brand-new product line. The line stays; the look updates.',
    'A cheaper scent, size, or model added for thrifty buyers inside the current line is line extension. Mix width does not expand into unrelated lines. Attracting budget-conscious shoppers this way keeps the assortment inside one coherent line.',
    'Premium-buyer research can change materials, fee ladders, exclusive outlets, and tone of voice together. Product, price, place, and promotion all sit downstream of those findings. Opening research to the full mix rather than ads alone matches how marketing decisions are built for that segment. The statement states that full-mix guidance correctly.',
    'Premium-facing promotion should echo product quality, price position, and the places where the offer is sold. A luxury slogan beside a discount-bin placement breaks that harmony. Alignment across chosen channels keeps the mix coherent for premium buyers.',
    'Affordable pricing can still matter for some premium buyers who want value without chaos. Convenient place and clear communication complete the mix goal beside that price.',
]

BODIES['CASE 5.7.90'] = [
    'Staff who sell to budget shoppers practise personal selling under Promotion. Floor conversations help explain offers and close sales, yet they do not lock permanent list prices for every future year. Lasting price architecture remains a Price P decision. Treating personal selling as a multi-year price tool collapses two distinct mix elements into one.',
    'Premium buyers often pay more when they trust the name behind the offer. Familiar brands signal consistency among close substitutes. Brand trust is especially valuable there.',
    'Selective outlets help premium brands control fitting, advice, and aftercare for premium buyers. Unlimited distribution would risk weak service at the point of sale. Limiting partners protects the quality story the premium price assumes.',
    'Detailed premium products may need guided demos before purchase. Personal selling supplies that explanation face to face. When complexity is high, the tool matches the buying task for premium customers.',
    'Packaging updates for premium buyers can revive interest without opening a new line. Relaunch means minor change with the same line structure. Fresh appeal needs no mix-width expansion.',
]

BODIES['CASE 5.7.91'] = [
    'A cheaper premium-line variant can pull price-sensitive premium buyers without inventing a second line. Line extension deepens the existing line. Mix width stays unchanged.',
    'Rural-household research can reshape rugged features, affordable fees, local stockists, and plain-language ads together. All four Ps can move on those findings. Guiding product, price, place, and promotion is the intended use of the work.',
    'Budget-shopper product lines stay coherent when items are related in use and category. Demanding food next to machinery as a line requirement invents a false test. Unrelated categories describe mix width across different lines, not the definition of one line. Similarity, not chaos, marks a product line in the chapter sense.',
    'Promotion aimed at rural households should match the product, the price, and the outlets that actually serve those buyers. A city-only message beside rural place gaps breaks the mix. Alignment keeps communication honest across the other Ps.',
    'Rural customer research can change product specs, fees, and outlets as well as ads. Limiting it to promotion alone invents a false research fence.',
]

BODIES['CASE 5.7.92'] = [
    'Affordable pricing for rural households supports value beside convenient local places and clear talk. Price works inside that wider mix goal, not as a lone lever.',
    'Rural households comparing sparse local options often lean on names they already know. Brand trust reduces risk when substitutes are hard to inspect in person. Familiar labels are especially valuable in that setting.',
    'Premium offers aimed at rural households may still need partners who can install, advise, or maintain the product properly. Selective distribution keeps those service capabilities in the channel. Dumping the same premium line through every weak outlet would break the quality promise. Controlled place choices therefore suit premium targeting when service must stay reliable far from dense city support networks.',
    'Rural customers can still find reassurance in a familiar brand. Brand identity sits with Product even when ads repeat the name. Claiming brands belong only to Promotion wrongly denies that product-side reassurance.',
    'When rural buyers face complex gear, face-to-face explanation helps before purchase. Personal selling supplies that detail. The tool fits explanation-heavy rural sales situations.',
]

BODIES['CASE 5.7.93'] = [
    'Updated packs for rural households can refresh an existing offer without a new line. That minor change is a relaunch. Appeal shifts while line structure holds.',
    'A budget rural variant inside the current line is line extension, not mix-width growth. Households wanting a cheaper option stay inside one coherent line. Depth rises; unrelated categories stay out.',
    'Urban-commuter research can change compact features, pass pricing, station kiosks, and rush-hour messages together. Product, price, place, and promotion all sit downstream of those findings. Opening the research to the full mix matches how marketers build offers for time-pressed city travellers. Ads alone would leave the other Ps under-informed.',
    'Messages for urban commuters should fit the product, the fare-like price, and the places they actually buy. A calm weekend tone beside a chaotic peak-hour channel breaks harmony. Alignment across chosen places keeps promotion coherent.',
    'Affordable pricing for urban commuters supports value with convenient pickup points and clear communication. That combined mix goal is what the statement names.',
]

BODIES['CASE 5.7.94'] = [
    'Urban commuters comparing similar grab-and-go offers often pick a name they trust. Brand trust filters clutter on a busy route. Familiar labels are especially valuable there.',
    'Premium offers for urban commuters may need tidy outlets, trained staff, or reliable lockers. Selective distribution protects that service quality. Unlimited dumping would weaken the premium promise in a high-traffic setting.',
    'Some urban-commuter products need quick demos of apps, passes, or device setup before money changes hands. Personal selling can deliver that explanation in a short face-to-face window. When detail matters and time is scarce, staff guidance beats a silent shelf. Effectiveness follows the need for explanation in that purchase moment.',
    'Packaging refreshes aimed at urban commuters can renew appeal without inventing a new product line. Relaunch language covers those minor updates. Line structure stays while the look updates.',
    'A low rural intro price is Price, not product-mix contraction. Contraction removes assortment items. Launch fees do not equal mix shrinkage.',
]

BODIES['CASE 5.7.95'] = [
    'A budget urban variant inside the current line deepens that line for thrifty commuters. Mix width does not widen into unrelated goods. Line extension keeps the category coherent.',
    'Channels preferred by rural customers decide availability and partner reach. That is Place, even when in-store talk includes slogans. Promotion covers communication tools; it does not swallow the channel decision itself. Calling preferred channels a promotion activity because advertising words appear somewhere misfiles Place under Promotion and erases distribution logic.',
    'Personal selling to rural customers is Promotion work: explanation and service in conversation. Permanent multi-year list prices remain Price decisions. Sales staff do not redefine lasting price strategy merely by advising buyers.',
    'Small-business-owner research can reshape durable features, invoice pricing, trade outlets, and B2B messages together. All four Ps can move on those findings. Full-mix guidance is the correct reading of that research role.',
    'Rural product lines need related items, not food glued to machinery. Unrelated categories mark mix width, not one line. Similarity defines the line.',
]

BODIES['CASE 5.7.96'] = [
    'Business-client research can change specs, fees, and logistics as well as ads. Limiting it to promotion alone invents a false fence across the mix.',
    'Messages for small-business owners should match the product, the price, and the trade channels used. A consumer slogan beside B2B place partners breaks the mix. Alignment keeps promotion honest across the other Ps.',
    'Business clients still take quality and risk cues from familiar brands when choosing suppliers. Brand names, marks, and signs sit with Product even if campaigns repeat them. Claiming brands belong exclusively to Promotion erases that product role and wrongly denies any reassurance effect for organisational buyers who care about continuity and safer choice.',
    'Low intro pricing for business clients is a Price tactic. Product-mix contraction would drop items from the assortment. Lower revenue per unit at launch is not mix contraction.',
    'Preferred business channels are Place decisions about reach and partners. Slogan work is Promotion. Channel choice is not advertising by another name.',
]

BODIES['CASE 5.7.97'] = [
    'Personal selling to business clients explains offers under Promotion. It does not set permanent list prices for all future years. Price strategy stays a separate P.',
    'Business-client lines group related goods and services for firm buyers. Food beside machinery would be unrelated mix width, not one line. Unrelated categories fail as the line definition.',
    'Affordable pricing for small-business owners supports value when paired with convenient ordering places and clear communication. The marketing-mix goal is that combined package rather than a rock-bottom fee alone. Place and promotion complete the story beside price. The statement names that wider aim correctly for this organisational segment.',
    'Young-family research can reshape safety features, pack prices, store lists, and campaign tone together. Promotion is only one outlet for those findings. Blocking product, price, and place invents a false limit.',
    'Small-business owners comparing similar supplier offers often lean on names they trust. Brand trust cuts risk among close substitutes. Familiar labels are especially valuable there.',
]

BODIES['CASE 5.7.98'] = [
    'Young families can still find reassurance in familiar brands. Brands sit with Product, not Promotion alone. Denying reassurance on that myth is wrong.',
    'Premium offers for small-business owners may need trained partners or controlled trade outlets. Selective distribution protects service quality. Unlimited weak stockists would undercut the premium promise for firm buyers.',
    'An introductory price cut aimed at young families changes what they pay, not which products remain in the assortment. Product-mix contraction means removing lines or items. Temporary revenue per unit from a launch price therefore cannot be classified as mix contraction. The claim swaps a Price move for an assortment decision and mislabels both.',
    'Channels preferred by young families are Place choices about convenience and partners. Promotion handles slogans and other messages. Treating channel selection as slogan-only work misfiles Place.',
    'Sales staff advising young families practise personal selling, not multi-year price setting. Lasting prices stay under Price. Conversation is not the list-price engine.',
]

BODIES['CASE 5.7.99'] = [
    'Complex offers for small-business owners often need demos before purchase. Personal selling supplies that explanation. The tool fits detail-heavy B2B buying moments.',
    'Updated packaging aimed at small-business owners can refresh appeal without inventing a new product line. That minor change is a relaunch. Line structure holds while the look updates.',
    "A budget variant added for small-business owners inside the current line deepens that line without widening the whole mix. Line extension keeps related items together while opening a cheaper entry point. Mix width stays put because no unrelated new line appears. Attracting firm buyers this way matches the chapter's line-extension idea.",
    'A separate unit for mobile-device components can serve its own segment with distinct product traits and life-cycle timing. Portfolio logic allows that specialised focus. Distinct characteristics and cycles fit a dedicated business unit reading.',
    'Share and growth place mobile-device components as question mark, star, cash cow, or poor dog. Portfolio labels follow those two axes. Classification is not fixed by the component name alone.',
]

BODIES['CASE 5.7.100'] = [
    "Young-family product lines need related items that share a category logic, such as baby-care variants. Demanding food next to machinery as a membership rule invents nonsense. Unrelated categories describe mix width across lines, not what makes one line. Similarity remains the chapter's line test for keeping a coherent assortment together.",
    'Commuter research can change product features, fee bands, and outlet lists as well as advertising copy. Treating the work as promotion-only invents a false research fence across the mix.',
    'Commuters can still take reassurance from familiar brands on a rushed purchase. Brands belong with Product even when promotion repeats the name. A promotion-only brand myth wrongly denies that reassurance.',
    'Technical support tied to mobile-device components is an intangible offer that still sits under Product. Services count in the Product P beside hardware. Support is not ejected to Promotion merely because it is intangible.',
    'Low intro pricing for commuters is Price, not mix contraction. Assortment drops define contraction. Launch fees do not shrink the mix by themselves.',
]

BODIES['CASE 5.7.101'] = [
    "A marketing mix is a harmonised blend of tools aimed at the target market's needs and wants. Random tools without that fit miss the definition. Harmony for the target is the point.",
    "The four elements are product, price, place, and promotion. Those four Ps make up the marketing mix in the chapter's framing. Other tools may appear in practice, yet this basic set is what the statement names.",
    'The basic mix idea is to offer a suitable good at an affordable price in a convenient place while communicating a message that supports the sale. Each P plays a part in that package rather than standing alone. Product without place, or price without promotion, can still fail the customer. The statement restates that combined aim cleanly for introductory marketing.',
    'High product quality does not retire Price or Place from the mix. Customers still need affordable terms and available outlets. Claiming the mix shrinks to product and promotion alone is false.',
    'Sharp price cuts beside premium sealed-instrument ads create a price-position clash. Customers can spot that mix conflict. Harmonised cues matter when North Harbor prices and messages diverge.',
]

BODIES['CASE 5.7.102'] = [
    "Targeting comes first so the firm knows whom to serve; a good marketing mix is the next step that delivers for that target. Strategy builds in that order in the chapter's framing. Mix tools follow the chosen segment rather than inventing a segment later.",
    "Market research sits underneath mix decisions in the book's framing. Findings feed product, price, place, and promotion. Research is the base layer, not an afterthought slogan.",
    'A catchy PeakMeal slogan cannot replace decisions about what the meal kit actually contains. Promotion supports the sale; it does not erase Product. If the kit fails on taste, portions, or ingredients, clever wording will not carry the strategy alone. Product choices remain necessary even when the slogan is memorable and strong.',
    "Place asks how and where meal kits reach customers: delivery, pickup, retail partners, and timing. The street address of PeakMeal's kitchen HQ is not the whole Place story. Availability for the buyer is the focus.",
    "A harmonised mix should serve the targeted market's needs, not random passers-by outside that target. Off-target tools waste effort. Fit to the chosen segment is required.",
]

BODIES['CASE 5.7.103'] = [
    'Product covers all goods and services the business offers and sits at the heart of marketing. Tangible and intangible offers both belong. That central role is what the statement names.',
    'Several slightly different bike models that share the same category logic form a product line. Similarity of the items, not unrelated jumble, marks the line. The bike example matches that definition.',
    'Product-mix width grows when the firm adds different product lines, such as bikes plus apparel. Adding more variants inside one bike line deepens that line instead. Width and depth are different dimensions. Increasing width therefore means more lines, not only more models inside a single line, exactly as the statement says.',
    'A firm may specialise in one product line or diversify across several lines. Both strategies are open in the chapter. Specialisation and diversification describe those width choices.',
    'Bike fitting is a service and still counts as a product in the mix sense. Physical goods are not the only qualifying offers. Services belong under Product too.',
]

BODIES['CASE 5.7.104'] = [
    'Brands exist to support product differentiation among competing offers. Names and marks help buyers tell one seller from another. Differentiation is a core brand purpose.',
    'A brand can be a name, words, a symbol, a sign, or a combination of those elements. Any of those cues can carry brand identity. The statement lists that flexible composition correctly.',
    'Brands are meant to build a unique selling proposition, recognition in the market, and loyalty over time. Differentiation alone is not the whole job; memory and repeat preference matter too. Recognition helps buyers find the offer again, and loyalty stabilises demand. The statement gathers those intended brand outcomes in one claim.',
    'Some brands keep the same colours and fonts worldwide so travellers recognise them instantly. Consistent visual identity supports that recognition abroad. The statement describes that global look correctly.',
    'Brands are not invented merely to raise factory cost. They also signal stable quality and safer choice. Cost-only purpose invents a false brand story.',
]

BODIES['CASE 5.7.105'] = [
    "Minor changes such as new packaging or colours are called a relaunch. The product stays; the presentation refreshes. That is the chapter's relaunch label.",
    'Adding new soap scents to an existing soap line is line extension. New items join a related line rather than inventing an unrelated category. Depth grows inside the line.',
    'Adding lotions beside soaps creates an entirely new product line and therefore extends mix width. That move is mix extension, not merely another scent inside soaps. Line extension deepens one line; mix extension adds a line. The lotion example matches mix extension because the category itself is new beside the soap line.',
    'When a relaunch is not enough, managers may make major changes or eliminate the product from the line. Escalation or exit remain open after minor refreshes fail. The statement names those next steps correctly.',
    'A relaunch is a minor refresh, not overnight deletion of mix width. Wiping every line is elimination on a huge scale. Relaunch does not mean that wipeout.',
]

BODIES['CASE 5.7.106'] = [
    'Used computers, technical support, and software development can sit as different products in one shop portfolio. Goods and services both qualify. Portfolio breadth can mix those offers.',
    'Support services tied to the computer belong under the Product P with the hardware. Intangibility does not move them to another P. Product covers related services as well as equipment.',
    'Software written for business clients can emphasise firm workflows, while ready-to-use used laptops may emphasise individual convenience. Different customer emphases can justify different product designs inside the same shop. Targeting shapes what counts as the right product for each group. The statement correctly separates those emphases without forcing one identical offer on both.',
    'Product decisions are described as the most important business decision and the heart of marketing. Without a suitable offer, price, place, and promotion have little to sell. That central ranking matches the chapter wording.',
    'Intangible services still sit under Product, not Promotion. Promotion communicates; it does not absorb every service. Classification by intangibility alone is wrong.',
]

BODIES['CASE 5.7.107'] = [
    'Before launch, development costs arrive while sales are still zero. Introduction therefore begins in loss. Costs without revenue open the phase that way.',
    'After launch, heavy promotion and possibly low intro prices can keep costs above sales for a time. Early introduction often stays unprofitable for that reason. The statement describes that cost-sales gap correctly.',
    'Toward the end of introduction, revenues may finally exceed costs and a small profit can appear. The phase is not permanently locked in loss once sales begin to cover spending. Timing inside introduction matters: early loss can give way to a thin surplus before growth takes over. The statement names that late-introduction turn correctly.',
    'Low relative share in a rapidly growing market is the BCG question-mark position. Growth is attractive, yet weak share makes the product uncertain. That pairing is the question-mark definition.',
    'Introduction is not maturity. Sales are not yet at a lifelong peak at launch. Calling the opening phase maturity invents the wrong life-cycle stage.',
]

BODIES['CASE 5.7.108'] = [
    'In growth, sales rise faster than costs, and average costs may fall with scale. That pattern marks the growth stage. Economies of scale can appear as volume builds.',
    'Rising share inside a still-growing market can turn the product into a BCG star. High growth plus stronger relative share define that cell. The statement links those movements correctly.',
    'Stars are valuable, yet they still need investment in promotion and production capacity to defend position. Attractive share in a growing market does not fund itself automatically. Rivals keep pressing, so facilities and communication spending continue. The statement correctly refuses a hands-off reading of stars in the growth stage.',
    'Profit usually appears during growth and often peaks in maturity. Life-cycle cash timing follows that broad pattern in the chapter. The statement restates those profit milestones correctly.',
    'Growth-stage stars still need investment, and later cash cows still need successors in the portfolio. Zero further spending invents a false free pass after growth begins.',
]

BODIES['CASE 5.7.109'] = [
    'When growth slows but relative share stays high, the product becomes a cash cow. High share in a slow market is the cash-cow cell. That BCG shift matches the statement.',
    'Firms usually invest less in cash cows because growth is low, while revenues stay strong and expenses can fall. Harvesting cash from that position is the usual play. The statement describes that lighter investment pattern correctly.',
    'Maturity often shows sales near a peak with slower growth as competition intensifies and profits begin to fade. The stage is not a permanent profit festival. Rival entry and price pressure commonly bite as the market settles. The statement captures that mature-market pattern of high sales, slower growth, and declining profits.',
    'Everyday items such as detergents or toothpaste can linger in maturity for a very long time. Not every product races through the cycle quickly. Long maturity phases are recognised in the chapter.',
    'Cash cows have high relative share in low-growth markets. Low share in rapid growth describes question marks. The statement swaps those BCG cells.',
]

BODIES['CASE 5.7.110'] = [
    'In decline, sales and profits fall while market growth is low and share may weaken. That combination marks the decline stage. Soft demand and softer results arrive together.',
    'Near decline, weak share in a low-growth market pushes the product toward poor-dog status in BCG language. The portfolio label follows those two weak readings. The statement links decline with that poor-dog drift correctly.',
    'Fad products can race through the life cycle and leave the market in less than a year. Not every offer enjoys a long maturity plateau. Short fashion waves may force early withdrawal once interest collapses. The statement correctly allows very short cycles for fad items that burn bright and then vanish quickly from shelves.',
    'A balanced portfolio mixes stars, cash cows, and question marks while limiting poor dogs. Too many weak low-growth items drain resources. Balance across BCG cells is the portfolio aim named here.',
    'Decline does not automatically create stars. Stars need high share in growing markets. Life-cycle stage labels alone cannot rewrite share and growth figures.',
]

BODIES['CASE 5.7.111'] = [
    'Market penetration pushes existing products harder in the existing market and is the safest Ansoff path. Familiar product and familiar market keep risk lower. That safety ranking matches the statement.',
    'Product development places a new product into the market the firm already knows. Newness on the product side raises risk a step above pure penetration. The statement ranks that option correctly as slightly riskier.',
    'Market development takes an existing product into an entirely new market, such as a new region or customer type. The product stays familiar while the market does not. That combination sits above penetration on risk because market knowledge is thinner. The statement states the market-development move cleanly for the Ansoff grid.',
    'Diversification pairs a new product with a new market and is the riskiest Ansoff option, though it can reduce long-run concentration risk. Both axes are new. The statement names that risk peak and the diversification upside together.',
    'Diversification is not risk-free just because both product and market are new. Newness does not guarantee profit on its own. Calling the path always safe invents a false Ansoff reading.',
]

BODIES['CASE 5.7.112'] = [
    "Main price influences include costs, rivals' prices, and demand or willingness to pay. Those three inputs shape pricing. The statement lists the core set correctly.",
    'Cost-based pricing starts from cost so the firm can cover outlays and possibly earn a margin. Cost is the anchor for the calculation. The statement restates that cost-based logic correctly.',
    'The lowest possible price is not always the safest way to win customers. Ultra-low fees can signal poor quality, invite unsustainable losses, or start price wars. Appeal and safety are not identical to rock-bottom pricing. The statement correctly warns against treating the lowest figure as automatically the best choice.',
    'Once a price strategy is set, casual changes confuse customers who expected consistency. Stability matters after the strategy is chosen. The statement notes how hard casual revision becomes.',
    'Demand and willingness to pay still matter even when rivals post prices. Cost-based work does not erase demand as an influence forever. Ignoring demand entirely is too absolute a claim.',
]

BODIES['CASE 5.7.113'] = [
    "Contribution per item equals selling price minus variable cost. With the book's figures that contribution is 240 euros. The arithmetic matches the definition.",
    'Break-even units equal fixed costs divided by contribution per item, about 542 items in the simplified model before profit. Fixed costs need that many contributions to be covered. The statement reports that break-even reading correctly.',
    'Fixed costs such as rent or insurance stay independent of output in the short-run story used here. They do not rise automatically with each extra unit. That independence is why contribution per item is needed to cover them. The statement names fixed-cost behaviour correctly for that simplified classroom pricing setting.',
    'Variable costs rise directly as output rises. More units mean more variable outlays in the short-run story. That direct link is the variable-cost definition used in the chapter.',
    'Prices below variable cost produce negative contribution and cannot maximise long-run survival forever. Negative contribution forever is not a survival strategy.',
]

BODIES['CASE 5.7.114'] = [
    'Variable-cost-plus pricing adds a markup to variable cost to set a selling price. Cost plus percentage yields the quote. That is the method the statement names.',
    "With 480 euros variable cost and a 50 percent markup, selling price becomes 720 euros excluding VAT in the book's pattern. Half of 480 is 240; 480 plus 240 is 720. The arithmetic matches the worked example.",
    'A bulk price above variable cost can still throw off contribution toward fixed costs even when it misses the usual markup target. Contribution remains positive whenever price clears variable cost. Refusing every below-markup deal would ignore that fixed-cost help. The statement correctly keeps bulk prices above variable cost inside useful pricing territory.',
    'Managers should not refuse every price above variable cost merely because a higher-priced sale is not already assured elsewhere. Such prices still contribute to fixed costs. Declining makes more sense when a better sale would be displaced, not as a blanket refusal of any above-variable offer.',
    "Contribution is selling price minus variable cost, not fixed cost minus selling price. The inverted formula reverses the chapter contribution definition.",
]

BODIES['CASE 5.7.115'] = [
    'Demand is elastic when the percentage quantity change exceeds the percentage price change. Quantity moves more than price in relative terms. That comparison is the elasticity test named here.',
    "In the book's laptop example, elasticity from the initial point is about -2.15 in magnitude, greater than 1, so demand counts as elastic. Relative quantity response outruns the price move. The statement reports that elastic reading correctly.",
    'When demand is elastic, quantity responds strongly to price moves, so price adjustments can matter for revenue and volume planning. Weak responses would make fine price tweaks less powerful. Elasticity therefore informs whether price tools are likely to shift sales a lot. The statement links elastic demand to the usefulness of price adjustments for that reason.',
    'For some software licences in the book, a price cut raises quantity by less than the price change, so demand is inelastic and revenues can fall. Weak quantity response fails to offset the lower fee. The statement records that inelastic outcome correctly.',
    'Elasticity can differ between short run and long run for many products. Claiming identical values for every product forever is too absolute. Time horizon matters for the measure.',
]

BODIES['CASE 5.7.116'] = [
    'Place matters as much as the other Ps because a good product fails if buyers cannot find it. Availability is part of marketing success. Distribution is not optional decoration.',
    'Channels can include wholesalers who resell to businesses and retailers who resell to consumers. Those intermediary roles are standard Place options. The statement names both correctly.',
    'Agents or brokers appear especially in B2B markets as channel options that link sellers and organisational buyers. They may not take title the way a classic wholesaler does, yet they still sit inside Place. Business markets often rely on that intermediary form. The statement correctly locates agents and brokers among B2B channel choices.',
    'Online selling, telemarketing, vending machines, and kiosks are listed among Place tools in the book. Direct and automated formats count beside shops. The statement recalls that Place toolkit correctly.',
    "Place is about how customers obtain the offer, not only the founder's apartment GPS pin. Distribution logic is wider than a private address. The claim shrinks Place absurdly.",
]

BODIES['CASE 5.7.117'] = [
    'Distribution partners bridge the gap from factory to final consumer. Few producers reach every buyer alone. Partners close that distance in the Place system.',
    'Partners handle logistics and can also inform consumers and support advertising. Place work includes physical movement plus communication help at the outlet. The statement names those dual partner roles correctly.',
    'A beverage-style producer would struggle to sell every bottle directly to every household without intermediaries. Scale and geographic spread make direct-only selling impractical. Wholesalers and retailers exist partly for that reason. The statement correctly stresses how hard full direct selling would be for that kind of producer.',
    'Retailers buy and resell to consumers; wholesalers buy and resell to businesses. Buyer type on the next step distinguishes the two. The statement states that resale split correctly.',
    'Using retailers does not delete Product or Price from the mix. Those Ps remain alongside Place. Retail presence is not a wipe of the other elements.',
]

BODIES['CASE 5.7.118'] = [
    'Promotion covers activities that inform potential customers and the public about the business, products, and benefits. Information and persuasion sit in that P. The statement defines the scope correctly.',
    'Advertising can run on TV, radio, internet, social media, print, billboards, buses, and trains. Multiple media belong in the advertising toolkit. The statement lists that range correctly.',
    'Personal selling employs salespeople to communicate with customers and serve them well in conversation. It is a promotion tool built on human contact rather than one-way mass ads. Service quality in the dialogue matters alongside the pitch. The statement captures that people-based promotion role cleanly for the marketing mix.',
    'Public relations aims at a favourable public image and positive stakeholder relationships. Image and relations, not only paid ads, sit inside PR. The statement names that PR purpose correctly.',
    'Small firms can promote without national TV contracts via local ads, web, leaflets, and word of mouth. TV is not a gatekeeper for all promotion. The claim overstates the barrier.',
]

BODIES['CASE 5.7.119'] = [
    'A website, local newspaper ads, social networks, leaflets, and word-of-mouth from satisfied customers are realistic promotion tools on a small budget. National campaigns are not required before any communication can start. Those lower-cost channels still inform buyers and support sales. The statement correctly lists viable small-budget promotion options.',
    'Sponsorship of events, people, or organisations is listed among promotion activities. Paid association is part of the toolkit. The statement places sponsorship correctly.',
    'Sales promotions such as coupons, contests, or short-term incentives sit inside the promotion toolkit. They are not outside Promotion. The statement includes them correctly among promotional tools.',
    'Direct mailing is listed among promotional activities in the chapter. Addressed messages to prospects or customers count as promotion. The statement recalls that listing correctly.',
    'Promotion should support product quality cues and price position, not contradict them for shock value. Surprise confusion breaks mix harmony. Contradiction is not the goal.',
]

BODIES['CASE 5.7.120'] = [
    'Used computers should be priced well below comparable new machines elsewhere. The value gap is the pricing logic for second-hand stock. That lower price reading matches the book context.',
    'Keeping stock low and delivering to homes can be a Place decision when space is scarce and tech ages quickly. Inventory policy and delivery shape availability. The statement correctly treats those choices as distribution logic.',
    'Posting current deals on a website can support Place by showing how to obtain the machines and Promotion by advertising the offer. One digital surface can carry both availability and persuasion. The mix elements overlap usefully there. The statement correctly allows website deals to serve place and promotion together in this shop setting.',
    "In this shop context, stock means inventory of machines, not share capital from the finance chapter. Vocabulary shifts with the marketing setting. The book's note on that meaning is what the statement reports.",
    'Delivery alone does not replace promotion; buyers still need to learn the offer exists. Telepathy is not a channel. Place without communication leaves demand uninformed.',
]

BODIES['CASE 5.7.121'] = [
    'Product sits at the heart of marketing and is treated as the most important business decision. Without a suitable offer the other Ps have little to carry. That central ranking matches the chapter.',
    'Most businesses offer a range of products rather than a single item. Assortments and lines are normal in practice. The statement describes that multi-product pattern correctly.',
    'Brands distinguish a product or business from rivals through names, words, symbols, or signs. Differentiation and recognition depend on that identity work. Without brand cues, offers blur together in crowded markets. The statement correctly places distinction as a core brand job for buyers comparing close alternatives.',
    'Price cannot replace product decisions. A fee with nothing worthwhile to sell still fails the customer. Product choices remain necessary beside any price strategy.',
    'Minor packaging changes can form part of a relaunch when the refresh stays small. The product continues while presentation updates. Packaging tweaks fit that relaunch reading.',
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
