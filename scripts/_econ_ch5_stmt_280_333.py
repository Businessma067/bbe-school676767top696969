#!/usr/bin/env python3
"""Hand-authored statement-only tactical_explanations for ch5 cases [280:333]."""
from __future__ import annotations

import json
import re
from pathlib import Path

PATH = Path("/workspace/src/data/economics-cases-ch5-subtopics.json")
SLICE = slice(280, 333)
CLOSER = re.compile(r"\s*So the statement is (True|False)\.?\s*$", re.I)


def wrap(body: str, truth: bool) -> str:
    body = body.replace("\u2014", ", ").replace("\u2013", "-").strip()
    v = "True" if truth else "False"
    return f"{body}\n\nSo the statement is {v}."


# Per case: list of 5 body strings (no closer). Truth taken from answer_key.
BODIES: dict[str, list[str]] = {}

BODIES["CASE 5.7.122"] = [
    # A T
    "Inside the marketing mix, product is the offering customers actually receive. PeakMeal Prep still has to choose what meals, kits, or services to sell before price tags and ads make sense. That centrality is why product sits at the heart of marketing and ranks as the business's most important decision.",
    # B T
    "Few firms live on a single SKU forever. PeakMeal Prep, like most businesses, typically fields a range: different meals, sizes, or related services rather than one lone item. A product range lets the firm cover more needs and segments without inventing a new company for every variant. The statement simply records that ordinary practice.",
    # C T
    "A brand is a name, word, symbol, or sign that marks one offer or company off from rivals. PeakMeal Prep uses branding so shoppers can recognise the line, trust expected quality, and return for familiar meals. Differentiation, recognition, and loyalty are exactly what brands are built to deliver. Without some distinguishing mark, every prep kit would compete as an anonymous commodity. The statement therefore matches the chapter's branding role.",
    # D F
    "Price is only one of the four Ps. PeakMeal Prep still must decide what is sold, how it is packed, and which variants belong in the range. Charging cleverly cannot erase the need for product decisions.",
    # E T
    "A relaunch can rest on minor changes such as new packaging, colours, or labels when the core product stays recognisable. PeakMeal Prep may refresh packs that way without a full redesign. Those small packaging moves sit inside the relaunch idea the chapter describes.",
]

BODIES["CASE 5.7.123"] = [
    # A T
    "Depth grows when a firm adds variants inside a line it already runs, such as more bike sizes or colours under one GlassHarbor family. That is line deepening, not a brand-new product category.",
    # B T
    "Width expands when managers open additional product lines rather than only stacking variants inside one line. More lines mean a wider mix across categories. GlassHarbor widens the mix by adding, for example, accessories as a separate line beside bikes.",
    # C T
    "Contraction trims the assortment by dropping weak products or entire lines that no longer earn their place. Elimination is the deliberate opposite of expansion. Cutting a slow trail-bike series is a textbook contraction move. Managers track depth when they count how many versions sit under one line name, which keeps planning concrete when assortment meetings turn vague.",
    # D T
    "Alteration updates products already on the list as tastes and technology shift over time. GlassHarbor may refresh geometries or materials without deleting the line. Changing what exists, rather than only adding or cutting, is the alteration strategy.",
    # E F
    "Mix extension adds a new product line; it does not mean wiping every line out in one stroke. Deleting everything would be extreme contraction, not extension. Equating mix extension with total deletion reverses the chapter's vocabulary.",
]

BODIES["CASE 5.7.124"] = [
    # A T
    "Adding more DockLantern lantern finishes or battery packs inside the same lantern line deepens that line. Depth is about variants within an existing family, not inventing an unrelated second business overnight. DockLantern planners therefore separate depth projects from width projects on the roadmap so budgets are not spent as if every new SKU were a new line.",
    # B T
    "DockLantern widens its product mix when it introduces whole new lines, such as camping cookware beside lanterns. Counting more lines is the width measure. Line count, not flavour count inside one line, drives mix width.",
    # C T
    "When DockLantern retires a weak lantern series or an entire accessory line, that elimination is contraction. Contraction can remove single products or whole lines. The statement names that pruning correctly.",
    # D T
    "Over time DockLantern may redesign housings, LEDs, or kits while keeping the line alive. That ongoing change to existing offers is alteration. Alteration is neither pure addition nor pure deletion.",
    # E F
    "Calling mix extension the same as deleting every line at once confuses growth with wipe-out. Mix extension introduces another line; mass deletion shrinks the mix. DockLantern planning cannot treat those opposites as identical.",
]

BODIES["CASE 5.7.125"] = [
    # A T
    "Business units can ship components that look alike to outsiders yet serve distinct segments and use cases. Alpine Soap Works can mirror that logic with ranges tuned to different buyer needs even when formulas share ingredients.",
    # B T
    "Product cycles need not move in lockstep across those ranges. One unit may sit in growth while another matures, even if hardware or ingredients look similar to non-experts. Cycle timing follows customer applications, not surface resemblance.",
    # C T
    "Industrial B2B marketing still segments: machine builders, medical-device makers, and consumer-electronics firms want different specs and service levels. Segmentation remains useful when the buyer is another business. Alpine Soap's B2B buyers illustrate the same point. Without that segment lens, Alpine Soap would price and promote unlike buyers as if they shared one identical brief, which industrial practice rejects.",
    # D F
    "Similar-looking components do not force one frozen marketing mix forever. Price, place, and promotion can differ by segment even when a layperson sees the same board or bottle. Permanent mix identity from appearance alone is a false rule.",
    # E T
    "Portfolio tools such as life-cycle stages and BCG thinking still guide firms that sell mainly to other businesses. Targeting B2B customers does not retire product-portfolio analysis. Alpine Soap can still balance stars, cows, and question marks across units.",
]

BODIES["CASE 5.7.126"] = [
    # A T
    "RiverBloom can run units whose creams look technically close yet solve different segment jobs: spa partners versus retail households, for example. Technical kinship does not erase distinct customer needs. Separate ranges for separate segments remain legitimate. RiverBloom therefore writes separate briefs per unit even when chemists see overlapping ingredient lists, because customer jobs still diverge.",
    # B T
    "Even when jars share base ingredients, life-cycle paths can diverge across RiverBloom ranges. One line may need launch spend while another harvests mature sales. Outsiders seeing similar components often miss those cycle differences.",
    # C T
    "B2B cosmetics or ingredient sales still benefit from segmentation by channel, volume, and formulation needs. Industrial marketing does not collapse into one anonymous buyer type. RiverBloom's planning keeps offer segmentation inside B2B work.",
    # D F
    "Lookalike formulas do not oblige RiverBloom to lock every unit into one identical mix for all time. Different buyers can justify different prices, packs, and messages. Appearance to non-experts is not a forever mix sentence.",
    # E T
    "When RiverBloom sells to other businesses, portfolio balance still matters: which lines to fund, harvest, or exit. B2B targeting does not cancel portfolio thinking. The statement keeps that toolkit in play.",
]

BODIES["CASE 5.7.127"] = [
    # A T
    "Extension strategies aim to stretch the life cycle so sales do not slide straight into decline. Mesa Tools may refresh offers or open new uses to keep demand alive. Preventing decline by extending the cycle is the point of those moves.",
    # B T
    "Ansoff-linked extension often means reshaping the product mix and entering new markets. Mesa Tools can add lines or geographies to buy more life-cycle time. Those two paths sit among the important extension strategies the chapter links to Ansoff.",
    # C T
    "Market penetration works on the current product inside the current market through better promotion, access, or usage. Mesa Tools stays with known tools and known buyers while trying to sell more. That existing-product, existing-market focus matches the penetration definition. Penetration keeps Mesa Tools inside known demand while still fighting for more volume before riskier Ansoff moves are required.",
    # D F
    "Poor dogs sit in low-growth settings with weak share; they are not automatic candidates for endless star-scale funding. Mesa Tools should not pour heaviest star investment into every dog indefinitely. The statement's always-and-forever rule is false.",
    # E T
    "In the life-cycle strategy table, maturity is paired with defensive positioning as growth cools and rivalry intensifies. Mesa Tools defending share in a mature tool category fits that association. The statement correctly ties defence to maturity.",
]

BODIES["CASE 5.7.128"] = [
    # A T
    "Canvas & Kiln uses extension strategies to keep kiln and canvas lines from fading once maturity threatens decline. Stretching the life cycle is the explicit goal. Sales protection through cycle extension is what those strategies are for.",
    # B T
    "Changing the studio's product mix and stepping into new markets are core Ansoff-style extension levers for Canvas & Kiln. New clay lines or new city workshops illustrate the idea. Mix change and market entry matter for life-cycle stretch.",
    # C T
    "Penetration at Canvas & Kiln means pushing existing products harder to existing customers: classes, kits, or glazes already known. It does not invent a brand-new category or a brand-new audience first. Existing product in the existing market is the penetration lane. That existing-market focus is why Canvas & Kiln often tries penetration before costlier diversification experiments.",
    # D F
    "Treating every poor dog as if it deserved permanent star-level cash reverses BCG logic. Canvas & Kiln should not fund weak, low-growth items like stars forever. Indefinite heaviest investment in dogs is the wrong rule.",
    # E T
    "Defensive positioning lines up with maturity in the chapter's strategy table, when Canvas & Kiln protects share rather than inventing the category. That maturity-defence link is what the statement asserts.",
]

BODIES["CASE 5.7.129"] = [
    # A T
    "Introduction usually courts innovators and early adopters who accept novelty before the mass market arrives. VoltSnack Bars would pitch early recipes to that curious fringe first. The statement matches the early-stage customer focus.",
    # B T
    "Once growth and maturity take hold, the summary table leans on the mass market rather than only pioneers. VoltSnack needs broader reach as the bar becomes familiar. Mass-market emphasis in those stages is the table's reading.",
    # C T
    "In decline, the same table points toward loyal customers who still buy after fashion has moved on. VoltSnack may lean on that residual loyalty. Loyalty focus in decline is the claimed pattern.",
    # D F
    "Sales are not highest at the absolute start of introduction before launch spend; early stages often begin with low or zero sales and heavy promotion cost. VoltSnack would not expect peak revenue before any launch activity. The claim invents an early sales peak that the cycle does not show. Early launch charts usually climb from near-zero sales after spend begins, which is the opposite of a pre-spend peak.",
    # E T
    "Decline strategy may chase efficiency, milk remaining demand, or prepare an exit. VoltSnack can choose streamlining or withdrawal rather than forced growth spending. Efficiency or exit are recognised decline options.",
]

BODIES["CASE 5.7.130"] = [
    # A T
    "Cedar Print Shop's introduction of a new print service typically speaks first to innovators and early adopters. Those buyers tolerate teething issues and novelty. Targeting that early pair is standard introduction practice.",
    # B T
    "Growth and maturity, in the summary table Cedar Print Shop follows, shift attention toward the mass market. Volume then comes from mainstream print buyers, not only enthusiasts. The table's mass-market lean in those stages is correct.",
    # C T
    "Decline, on that table, rests more on loyal customers still ordering familiar formats. Cedar Print Shop may keep serving that loyal core while others leave. Loyal-customer emphasis in decline matches the statement.",
    # D F
    "Peak sales do not appear at the very beginning of introduction before launch spend; introduction often starts soft while promotion ramps. Cedar Print Shop should not expect maximum sales before any launch outlay. The timing claim is false. Cedar Print Shop's intro dashboards likewise expect spend before scale, not maximum revenue on day zero with empty launch budgets.",
    # E T
    "When a print line declines, Cedar Print Shop may stress efficiency or plan exit rather than endless expansion. Those decline strategies sit inside the chapter's options. Efficiency or exit remain valid focuses.",
]

BODIES["CASE 5.7.131"] = [
    # A T
    "Question marks combine low relative share with high market growth. HarborDrill Bits in a booming bit category but still small versus the leader fits that cell. Low share in high growth is the definition.",
    # B T
    "Cash cows throw off cash that can bankroll stars and the question marks managers still believe in. HarborDrill can recycle mature-line profits into those bets. Funding stars and selected question marks from cow revenue is standard portfolio practice. Without cow cash, HarborDrill would struggle to keep stars visible and to nurse the question marks worth a second round.",
    # C T
    "A healthy portfolio keeps poor dogs limited because they drain attention in low-growth, low-share cells. HarborDrill should avoid stacking too many of them. The caution against too many dogs is sound.",
    # D T
    "Stars already hold high share in high-growth markets yet still need investment to defend that position. HarborDrill cannot treat stars as free cash machines yet. High share plus high growth with ongoing investment need describes stars correctly.",
    # E F
    "High share in high growth names a star, not a poor dog. Poor dogs sit in low growth with low share. HarborDrill mislabels the cell if it calls high-share high-growth items dogs.",
]

BODIES["CASE 5.7.132"] = [
    # A T
    "At Lumen Desk Lamps, a fast-growing lamp niche where the firm still trails the leader is a question-mark setting. Low relative share plus high growth is the pairing. That BCG reading matches the statement.",
    # B T
    "Mature lamp lines that act as cash cows can underwrite Lumen's stars and the question marks worth backing. Cow cash is the usual funding source. Supporting stars and chosen question marks from cow revenue is the intended flow.",
    # C T
    "Lumen Desk Lamps weakens its portfolio if too many poor dogs linger without a plan. Low-growth weaklings should stay scarce. Avoiding an overcrowded dog kennel is the portfolio rule stated.",
    # D T
    "Lumen's stars already enjoy high share in growing lamp markets, yet promotion and capacity spend continue. Investment does not stop just because share is strong. High share, high growth, and ongoing investment still define the star cell. Lumen therefore budgets ongoing star support even after share looks strong, because rivals in growth markets rarely sleep.",
    # E F
    "Calling high share in high growth a poor dog flips the BCG labels. That cell is a star; dogs are the low-share low-growth corner. Lumen Desk Lamps cannot redefine dogs that way.",
]

BODIES["CASE 5.7.133"] = [
    # A T
    "Without a clear superiority or difference, FrostBite Ice Cream struggles to justify charging more than rival scoops. Buyers ask why they should pay a premium for a lookalike tub. Higher price needs a product reason the statement correctly flags as missing when difference is absent. Commodity sameness forces FrostBite toward matching or undercutting, not toward unexplained premiums buyers will reject.",
    # B T
    "Strong demand gives FrostBite room to set a higher price because buyers compete for limited tubs or seasonal flavours. Scarcity of willing supply relative to interest supports firmer tags. High demand as a price support is the claim's logic.",
    # C T
    "Total cost is the sum of fixed costs that do not move with each scoop and variable costs that do. FrostBite's rent plus cream and cups illustrate that split. Fixed plus variable is the total-cost composition.",
    # D T
    "Break-even sits where the revenue line crosses total cost, so FrostBite covers all costs with no profit yet beyond that point. That intersection is the break-even definition. Meeting total cost with revenue is exactly the statement's marker.",
    # E F
    "Fixed costs do not drop to zero in the short run each time one extra unit sells; rent and similar commitments remain. FrostBite still owes the shop lease after selling one more cone. The always-to-zero claim invents false cost behaviour.",
]

BODIES["CASE 5.7.134"] = [
    # A T
    "NovaKiosk Drinks cannot defend a higher shelf price if the drink is neither better nor meaningfully different from rivals. Premium tags need a product story. Harder justification without superiority is what the statement says. NovaKiosk's buyers compare neighbouring bottles instantly, so unjustified premiums collapse without a difference story.",
    # B T
    "When kiosk demand runs hot, NovaKiosk can support a higher price because customers still queue. Demand pressure lifts feasible prices. High demand backing a higher price matches ordinary pricing logic in the chapter.",
    # C T
    "NovaKiosk's total costs bundle fixed obligations such as kiosk fees with variable syrup and cup costs. Both layers belong in the total. Fixed and variable together compose total cost.",
    # D T
    "On NovaKiosk's chart, break-even is the crossing of revenue and total cost. Below that point losses persist; at the cross, costs are covered. That meeting point is the break-even definition restated.",
    # E F
    "Selling one more drink does not erase fixed costs in the short run. NovaKiosk's site fee stays due regardless of that extra unit. Claiming fixed costs always fall to zero with each sale is false.",
]

BODIES["CASE 5.7.135"] = [
    # A T
    "Fixed costs can jump in steps when Quilt & Needle needs another room, machine, or admin hire at higher output. They are not forever flat at every scale. Stepped increases with capacity needs are recognised in the chapter.",
    # B T
    "Contribution is price minus variable cost per unit and first helps cover fixed costs before profit appears. Quilt & Needle watches contribution to see how fast fixed costs are paid down. Covering fixed costs then profit is contribution's role. Quilt & Needle therefore watches contribution per kit as the bridge from covering studio overhead into actual profit.",
    # C T
    "Break-even softens if Quilt & Needle raises price or trims variable cost, widening contribution per unit. Fewer units then suffice to cover fixed costs. Price up and/or variable cost down eases break-even as claimed.",
    # D T
    "Once revenues pass total cost, Quilt & Needle has cleared break-even and can move into profit territory. Excess of revenue over total cost is that turning region. The statement describes that passage correctly.",
    # E F
    "Variable costs move with output; fixed costs do not rise one-for-one with each unit in the basic short-run picture. The statement swaps those behaviours. Quilt & Needle would misread costs if it treated variables as flat and fixed as per-unit.",
]

BODIES["CASE 5.7.136"] = [
    # A T
    "Orbit Pet Treats may see fixed costs step up when a second kitchen, packer, or supervisor becomes necessary at higher volumes. Capacity thresholds create those steps. Space, equipment, or admin needs can lift fixed costs in jumps. Those capacity steps are why Orbit Pet Treats revisits fixed-cost budgets whenever volume crosses a new threshold.",
    # B T
    "Each treat's contribution after variable cost helps Orbit Pet Treats chip away at fixed costs and, beyond that, earn profit. Contribution is the bridge from covering overhead to profit. That covering-then-profit path is correct.",
    # C T
    "Orbit Pet Treats can ease break-even by lifting price and/or cutting variable cost per bag, which raises contribution. The fixed-cost mountain becomes climbable with fewer bags. Those two levers match the statement.",
    # D T
    "When Orbit Pet Treats' revenues exceed total cost, break-even is cleared and profit becomes possible. Revenue above total cost is the profitable side of the chart. The statement's sequencing is right.",
    # E F
    "Saying variable costs ignore output while fixed costs rise with every unit reverses the definitions Orbit Pet Treats should use. Variables track volume; fixed costs stay put between capacity steps. The swapped claim is false.",
]

BODIES["CASE 5.7.137"] = [
    # A T
    "Inelastic demand shows up for necessities people buy anyway, such as the book's salt, fuel, or medicine examples. PineShelf Furniture can still learn from that pattern when buyers need a basic shelf despite price moves. Need-driven inelasticity is the point. PineShelf can borrow that necessity logic when a basic storage need barely flinches at moderate price moves.",
    # B T
    "When substitutes are scarce, PineShelf buyers respond less to price, so demand is more inelastic. Hard-to-replace items keep quantity steadier. Lack of easy substitutes strengthens inelasticity as stated.",
    # C T
    "Over the long run, habits shift and substitutes appear, so some once-inelastic demand can become more elastic. PineShelf may face more alternatives later. Long-run elasticity rising with habits and substitutes matches the claim.",
    # D T
    "Durable goods that store well can spur quick purchases when prices fall, as buyers stock ahead. PineShelf cabinets bought on a sale illustrate that rush. Stockable durables and fast response to price drops fit the statement.",
    # E F
    "Price elasticity measures how quantity demanded responds to price changes, not the font size on a tag. PineShelf misreads the tool if it thinks typography is the metric. Ignoring quantity responses falsifies the definition.",
]

BODIES["CASE 5.7.138"] = [
    # A T
    "BlueCompass Apps can see inelastic patches when users treat a feature as a must-have, akin to the book's salt, fuel, or medicine examples. Need-like attachment mutes quantity swings. Necessities-style inelasticity is what the statement recalls. BlueCompass product managers use that necessity analogy when core workflows keep users paying despite fee nudges.",
    # B T
    "If BlueCompass users cannot switch apps easily, demand stays more inelastic to price. Weak substitution options flatten quantity responses. Hard substitution raising inelasticity is correct.",
    # C T
    "Longer horizons let BlueCompass users change habits or find rival apps, so demand may grow more elastic. Short-run stickiness need not last forever. Habits and substitutes lifting long-run elasticity matches the chapter.",
    # D T
    "Even for digital durables or licences that users can 'stock' via longer subscriptions, price cuts can pull purchases forward quickly. BlueCompass may see a rush when fees drop. Stockable durables responding fast to lower prices fits the idea.",
    # E F
    "Elasticity is about quantity reaction to price, not how large the price numerals look on screen. BlueCompass cannot redefine elasticity as font metrics. The tag-font claim is false.",
]

BODIES["CASE 5.7.139"] = [
    # A T
    "Even a strong StoneOven loaf fails commercially if customers cannot find it where they expect bread to be sold. Access gaps kill good products. Place failure despite product strength is the warning.",
    # B T
    "Energy-drink makers need partners to reach nationwide or cross-border shelves; StoneOven can learn the same partner logic for bakery distribution at scale. Solo coverage of a whole country is rarely realistic. Partners for wide geographic sell-through are necessary as stated. StoneOven scaling beyond one district hits the same partner requirement energy-drink makers face nationwide.",
    # C T
    "Telemarketing appears among the distribution-channel options in the chapter's place toolkit. StoneOven could use phone-based ordering as one path. Listing telemarketing as a channel option is accurate.",
    # D T
    "Distributors are a recognised channel type firms may employ to move goods toward markets. StoneOven may rely on them for regional reach. Distributors belonging among channel types is correct.",
    # E F
    "Services still need place decisions: booking sites, studios, or delivery slots. Claiming place is irrelevant because services 'cannot be distributed' erases service access design. StoneOven catering or bakery services still require convenient access.",
]

BODIES["CASE 5.7.140"] = [
    # A T
    "TideWash Detergent can formulate a superb clean and still flop if shoppers never see it on expected shelves. Finding the product where buyers look is non-negotiable. Strong product plus missing place still fails.",
    # B T
    "Wide geographic sell-through for drinks or detergents usually needs partners across a country or countries; TideWash faces the same scale problem. National coverage rarely runs on one van alone. Partner need for cross-country selling is the statement's truth. TideWash national plans therefore assume distributor or retail partners rather than one depot covering every postcode alone.",
    # C T
    "TideWash planning can treat telemarketing as one distribution-channel option among others listed in the book. Phone sales sit in the place menu. That listing makes the statement true.",
    # D T
    "Distributors belong in the set of channel types TideWash may use to move detergent toward retailers. They are not an exotic exception. Channel-type status for distributors is correct.",
    # E F
    "Place remains relevant for services TideWash might bundle, such as cleaning advice or delivery slots; services are not exempt from access design. Saying place decisions vanish for services is false. Distribution of access still matters.",
]

BODIES["CASE 5.7.141"] = [
    # A T
    "North Harbor Clocks may mix channels: own boutique, web shop, and specialist retailers depending on the clock line. One product can justify several paths. Using one or more channels by product is normal. Channel maps at North Harbor Clocks change with premium longcase lines versus low-cost alarm SKUs for that reason. The chapter's vocabulary only holds if managers keep that distinction sharp when they brief teams and allocate budgets.",
    # B T
    "Selling online over the internet is an explicit place option in the chapter. North Harbor Clocks can ship dials direct from a web storefront. Internet selling as a listed place choice is correct.",
    # C T
    "Kiosks can function as a distribution format for smaller clock accessories or tickets to repair services. Compact retail points count. Kiosk format as distribution is recognised.",
    # D T
    "Wholesalers mainly resell to other businesses, not primarily to final household buyers. North Harbor may sell cases to a wholesaler who then serves jewellers. Business-to-business resale is the wholesaler role.",
    # E F
    "Appointing a wholesaler does not force North Harbor Clocks to abandon branding forever. Brand marks can travel through wholesale channels. Permanent brand abandonment is not a wholesaler requirement.",
]

BODIES["CASE 5.7.142"] = [
    # A T
    "PeakMeal Prep can choose different distribution channels by meal kit versus ready tray, or run several at once. Channel choice follows the product. One or more paths depending on the product matches practice. Meal-kit versus bulk-catering paths at PeakMeal Prep illustrate why channel counts follow the product, not a single dogma.",
    # B T
    "Internet selling is on the place menu PeakMeal Prep can use for subscription checkouts and delivery. Online is not an afterthought outside place. Explicit internet place option is correct.",
    # C T
    "Kiosks can distribute PeakMeal samples or grab-and-go packs as a format in the place toolkit. Small footprint outlets still count as distribution. Kiosk format belongs among options.",
    # D T
    "Wholesalers serving PeakMeal Prep resell mainly to businesses such as retailers, not primarily to end consumers eating at home. Their customer is another firm. That B2B resale role is the wholesaler definition.",
    # E F
    "Working with a wholesaler does not oblige PeakMeal Prep to erase its brand forever. Branded kits can move through wholesale intact. Forced permanent brand abandonment is false.",
]

BODIES["CASE 5.7.143"] = [
    # A T
    "Promotion should tell people what GlassHarbor Bikes offers and why it helps, not broadcast unrelated trivia. Benefit and product information are the job. Informing about products and benefits is the rightful focus. GlassHarbor campaigns that wander into unrelated news burn attention without moving bikes or parts. The chapter's vocabulary only holds if managers keep that distinction sharp when they brief teams and allocate budgets.",
    # B T
    "Social-media advertising sits on the chapter's advertising list GlassHarbor can use. Feeds and stories are recognised ad vehicles. Inclusion of social media in that list makes the statement true.",
    # C T
    "Personal selling matters when GlassHarbor staff explain bikes and serve buyers well face to face or by consult. Communication quality and service shape the sale. Salespeople communicating and serving well is the personal-selling point.",
    # D T
    "PR builds constructive relationships with stakeholders around GlassHarbor Bikes, from community groups to press. Positive stakeholder ties are the PR aim. Developing those relationships matches the definition.",
    # E F
    "Promotion works best when it serves the target segment's needs, not when it fights them on purpose. GlassHarbor should align messages with rider wants. Deliberate conflict with segment needs is the opposite of good promotion.",
]

BODIES["CASE 5.7.144"] = [
    # A T
    "DockLantern Co should promote lantern benefits and product facts rather than random unrelated headlines. Information that helps buyers choose is the promotional task. Product-and-benefit focus is correct; trivia is not. DockLantern creative briefs therefore tether every line to runtime, weather rating, or pack contents buyers care about.",
    # B T
    "Advertising lists in the chapter include social media, which DockLantern Co can use for launch clips and ads. That channel is inside advertising, not outside it. Listed social-media advertising supports the statement.",
    # C T
    "When DockLantern salespeople explain runtime and serve customers carefully, personal selling does its job. Talk and service quality move the purchase. Communication plus good service is why personal selling matters.",
    # D T
    "PR for DockLantern Co cultivates positive stakeholder relationships, not one-off shouting. Trust with partners, press, and community is the craft. Positive stakeholder relations are PR's purpose.",
    # E F
    "Fighting the chosen segment's needs on purpose would sabotage DockLantern promotion. Messages should fit those needs. Claiming best results from deliberate conflict is false.",
]

BODIES["CASE 5.7.145"] = [
    # A T
    "Cash-cow status does not outlaw promotion tools for Alpine Soap Works; lighter use is allowed, a total legal ban is not. That reading follows the chapter directly.",
    # B T
    "Stars still require promotion investment so Alpine Soap can defend a strong growing position. High share does not pause communication spend. Maintaining star strength needs ongoing promotion support.",
    # C T
    "Cash cows usually attract less investment because market growth is already low and the position is established. Alpine Soap harvests more than it pours in. Lower investment with low growth is the cow pattern. The chapter's vocabulary only holds if managers keep that distinction sharp when they brief teams and allocate budgets.",
    # D T
    "Sales promotions sit beside advertising as distinct tools inside the broader promotion mix. Alpine Soap may run coupons without calling them ads. Distinct-tool status for sales promotions is correct.",
    # E F
    "Cash-cow status does not make every promotion tool illegal to use. Alpine Soap may still advertise lightly or run PR. A legal ban on all promotion for cows is invented nonsense.",
]

BODIES["CASE 5.7.146"] = [
    # A T
    "RiverBloom Cosmetics typically spends heavily on advertisements and sales events when introducing a new cream. Awareness is expensive at the start. Heavy intro spending on those tools matches the life-cycle reading. RiverBloom launch calendars therefore reserve outsized ad and event budgets for introduction weeks on purpose.",
    # B T
    "Even RiverBloom stars need promotion budgets to hold a strong place in a growing beauty niche. Investment continues after share is won. Star maintenance through promotion spend is correct.",
    # C T
    "RiverBloom cash cows usually see lighter investment once growth slows and the line is established. Harvest logic replaces launch logic. Less investment because growth is low fits the cow cell.",
    # D T
    "Within promotion, RiverBloom treats sales promotions as tools distinct from advertising, such as gift-with-purchase versus media ads. Both live under promotion. Distinct-alongside-advertising status is true.",
    # E F
    "Nothing in the chapter outlaws all promotion tools the moment a RiverBloom line becomes a cash cow. Selective lighter use is not a legal ban. The illegality claim is false.",
]

BODIES["CASE 5.7.147"] = [
    # A T
    "The mix idea for Mesa Tools pairs an affordable price with a convenient place and a clear promotional message around the product. All four strands work together. Affordable price, convenient place, and message is the blend described.",
    # B T
    "Market research sits under the mix diagram as the evidence base for Mesa Tools' P choices. Research informs what customers need before tools are priced and placed. Underpinning the diagram with research is correct.",
    # C T
    "Harmonising product, price, place, and promotion beats maximising one P while breaking the others. Mesa Tools gains little from brilliant ads if the tool is wrong or unreachable. Balance across Ps matters more than one-P maximisation. Mesa Tools learns that lesson when a sharp campaign cannot rescue a tool customers neither want nor can obtain.",
    # D T
    "Place convenience for Mesa Tools means customers can access the offer through retail presence, delivery, or other easy paths. Access is the convenience test. Delivery or retail presence belongs in that reading.",
    # E F
    "A mix with only promotion and no product cannot satisfy targeted needs; there must be something real to buy. Mesa Tools cannot advertise a void into a complete mix. Promotion alone fails the mix test.",
]

BODIES["CASE 5.7.148"] = [
    # A T
    "Canvas & Kiln's mix ideal still joins an affordable price, a convenient place, and a promotional message to the studio's product. The four-P blend is the point. Pairing those elements matches the chapter's mix idea.",
    # B T
    "In Canvas & Kiln planning, market research underpins the mix diagram before prices and places are set. Evidence precedes the Ps. Research under the diagram is correctly stated.",
    # C T
    "Canvas & Kiln should tune the Ps together rather than maxing promotion while wrecking price or place. One broken P spoils the chord. Harmonising beats one-sided maximisation. Canvas & Kiln sees the same failure mode when loud posters cannot fix a broken class schedule or an unreachable studio. The chapter's vocabulary only holds if managers keep that distinction sharp when they brief teams and allocate budgets.",
    # D T
    "Convenient place for Canvas & Kiln covers how students reach classes or clay kits, including delivery and retail presence. Access design is place. Those access routes fit the convenience claim.",
    # E F
    "Promotion without a product leaves Canvas & Kiln unable to fulfil needs; the mix requires an actual offer. Ads for nothing are not a complete mix. Only-promotion satisfaction is false.",
]

BODIES["CASE 5.7.149"] = [
    # A T
    "If a VoltSnack Bars relaunch still leaves customers unsatisfied, major changes or elimination can follow. Minor pack tweaks are not always enough. Escalation to bigger change or exit matches the chapter path.",
    # B T
    "Line extension adds variants inside an existing VoltSnack line; mix extension adds an entirely new line. Depth versus width language separates the two. That line-versus-mix distinction is correct. VoltSnack planners label depth work and width work differently so extension projects do not blur into each other. The chapter's vocabulary only holds if managers keep that distinction sharp when they brief teams and allocate budgets.",
    # C T
    "Specialisation means VoltSnack offers just one product line rather than many categories. Focus on a single line is the definition. One-line specialisation matches the statement.",
    # D T
    "Diversifying production widens VoltSnack's product mix by adding different lines. Width grows with line count. Increasing mix width via different lines is diversification as stated.",
    # E F
    "Elimination is a product-mix strategy (contraction), not a promotion tool like ads or PR. VoltSnack dropping a bar is assortment policy, not a flyer. Classifying elimination as promotion is false.",
]

BODIES["CASE 5.7.150"] = [
    # A T
    "When Cedar Print Shop's relaunch fails to keep print buyers happy, major redesign or elimination may be next. Relaunch is not an endless patch. Major change or elimination after weak relaunch is the stated sequence.",
    # B T
    "Cedar Print Shop deepens a line by extension inside it and widens the mix by adding a new line. Line extension and mix extension are different moves. The statement separates them correctly. Cedar Print Shop uses the same line-versus-mix vocabulary when deciding whether to add sizes or add an entire category. The chapter's vocabulary only holds if managers keep that distinction sharp when they brief teams and allocate budgets.",
    # C T
    "Specialisation at Cedar Print Shop means running just one product line. Narrow focus is the deliberate choice. One-line offering is the specialisation definition.",
    # D T
    "Diversifying Cedar Print Shop's production adds different lines and thereby lifts product-mix width. More categories mean a wider mix. Width via different lines matches diversification.",
    # E F
    "Elimination belongs with product-mix contraction, not with promotion tools. Cedar Print Shop retiring a format is not an advertising tactic. Calling elimination promotion misclassifies it.",
]

BODIES["CASE 5.7.151"] = [
    # A T
    "During growth, HarborDrill Bits may see average costs fall as output rises and economies of scale appear. Spreading fixed costs and learning effects help. Falling average costs from scale in growth is correct. HarborDrill plant managers watch unit cost during growth precisely because scale can pull averages down. The chapter's vocabulary only holds if managers keep that distinction sharp when they brief teams and allocate budgets.",
    # B T
    "Rising market share while the bit market still grows can turn a HarborDrill item into a star. High share plus high growth is the star cell. Share gains in a growing market creating a star matches BCG logic.",
    # C T
    "Maturity slows growth and often intensifies competition, pressing HarborDrill on prices and promotion costs. Rivalry gets expensive. Slower growth with competitive pressure on price and promotion is the maturity pattern.",
    # D T
    "Decline can show rapidly falling sales as HarborDrill demand fades. The drop need not be gentle. Rapid sales decline is a recognised decline feature.",
    # E F
    "Economies of scale mean unit costs can fall as output rises, not that every cost rises exactly with output forever. HarborDrill would misuse the term under the proportional-rise claim. The statement's forever rise invents the opposite of scale economies.",
]

BODIES["CASE 5.7.152"] = [
    # A T
    "Lumen Desk Lamps in growth can enjoy lower average costs once volume unlocks economies of scale. Higher output spreads overheads. Average-cost decline from scale in growth is the claim's truth. Lumen Desk Lamps tracks the same average-cost relief when lamp volume climbs through the growth stage. The chapter's vocabulary only holds if managers keep that distinction sharp when they brief teams and allocate budgets.",
    # B T
    "If Lumen gains share while lamp demand still grows, the line can become a star. Growth market plus strong share is the star definition. Share increase in a still-growing market creating a star is correct.",
    # C T
    "In maturity, Lumen Desk Lamps faces slower growth and heavier rivalry that squeezes prices and lifts promotion needs. Competitive pressure replaces easy expansion. That maturity squeeze matches the statement.",
    # D T
    "Decline at Lumen can feature rapidly falling sales as fashion or LED generations move on. Steep drops are possible. Rapid sales decline is accurately named.",
    # E F
    "Scale economies are about efficiency at higher output, not a rule that every cost rises proportionally forever. Lumen Desk Lamps should reject that proportional-rise definition. The false reading contradicts economies of scale.",
]

BODIES["CASE 5.7.153"] = [
    # A T
    "Familiar FrostBite branding can comfort travellers who feel homesick abroad when they spot the same tub design. Recognition reduces uncertainty in a strange aisle. Reassurance for uncomfortable travellers is a branding benefit the chapter notes. FrostBite leans on that traveller reassurance when airport freezers stock the familiar tub design abroad.",
    # B T
    "Brands can promise a stable quality level kept across countries, so FrostBite ice cream tastes as expected in different markets. Consistency is part of the brand guarantee. Cross-country quality signalling matches the claim.",
    # C T
    "Building a USP and brand recognition are intended branding outcomes for FrostBite. The mark should make the offer stand out and be remembered. Those intentions are correctly listed.",
    # D T
    "Brand loyalty is another intended outcome: repeat FrostBite purchases because the name is trusted. Loyalty is not an accident; branding aims for it. Intended loyalty outcome is true.",
    # E F
    "Global brands often keep colour and font consistent rather than changing them in every country. Forced redesign everywhere would undermine recognition. Saying brands must change look in every country or cease to be brands is false.",
]

BODIES["CASE 5.7.154"] = [
    # A T
    "NovaKiosk Drinks with a familiar mark can reassure travellers who feel uncomfortable or homesick when they find the same logo abroad. Known branding eases choice anxiety. That reassurance role matches the chapter. NovaKiosk counts on the same homesick recognition when tourists spot the logo in a foreign transit hall. The chapter's vocabulary only holds if managers keep that distinction sharp when they brief teams and allocate budgets.",
    # B T
    "NovaKiosk branding can signal stable quality maintained across countries so the drink meets expectations everywhere. Quality consistency travel with the mark. Cross-border quality signalling is correct.",
    # C T
    "USP and brand recognition are outcomes NovaKiosk branding intends to create. Distinctiveness plus memorability are the goals. Those intended outcomes are accurately stated.",
    # D T
    "Loyalty to the NovaKiosk name is an intended branding result, not a side effect managers ignore. Repeat purchase is part of the brief. Brand loyalty as intended outcome is true.",
    # E F
    "NovaKiosk need not alter colour and font in every country to remain a brand; consistency often strengthens brands. Mandatory perpetual redesign is not the rule. The must-change-or-cease claim is false.",
]

BODIES["CASE 5.7.155"] = [
    # A T
    "Market penetration is low risk for Quilt & Needle because both the product and the market are already known. Familiar fabric classes sold to familiar students illustrate that safety. Known product and market keep penetration low risk.",
    # B T
    "Product development is slightly riskier than penetration because Quilt & Needle changes the offer while staying in a known market. New kits for existing customers add product uncertainty. Slightly higher risk than penetration matches Ansoff's ladder.",
    # C T
    "Market development finds new target groups for an existing Quilt & Needle product, such as corporate workshops using current kits. The product stays; the audience shifts. New targets for an existing product is the definition.",
    # D T
    "Diversification can lower long-run risk by spreading Quilt & Needle across lines and segments so one flop hurts less. Breadth hedges concentration. Spreading across lines and segments as risk reduction is correct.",
    # E F
    "Market development changes one unknown (the market) while diversification often changes both product and market, so diversification is typically riskier. Claiming market development is riskier because it changes two unknowns reverses the ladder. Quilt & Needle should not invert that ranking. Ansoff ranks diversification higher on risk because product and market can both be new, unlike market development's single shift.",
]

BODIES["CASE 5.7.156"] = [
    # A T
    "Orbit Pet Treats faces low risk in market penetration because it already knows the treats and the pet-owner market. Pushing more of the same to the same buyers stays on familiar ground. Known product and market explain the low risk.",
    # B T
    "Developing a new Orbit treat for the same pet market is slightly riskier than pure penetration. The product changes; the audience does not. That slight risk step up versus penetration is Ansoff's ordering.",
    # C T
    "Market development for Orbit Pet Treats seeks new target groups for an existing treat, such as a new country or a vet channel. Existing product, new audience. New targets for an existing product matches the definition.",
    # D T
    "Diversification lets Orbit Pet Treats spread across lines and segments, which can reduce long-run dependence on one bet. Portfolio breadth cushions shocks. Risk reduction by spreading is correctly stated.",
    # E F
    "Saying market development is riskier than diversification because it changes two unknowns at once misstates Ansoff: diversification usually juggles more unknowns. Orbit Pet Treats should treat diversification as the riskier climb. The inverted claim is false. Orbit Pet Treats should therefore treat diversification as the steeper climb, not demote market development below it on risk.",
]

BODIES["CASE 5.7.157"] = [
    # A T
    "In the book's short-run discussion, variable costs set the absolute lower limit for price at PineShelf Furniture. Pricing below variable cost worsens the cash loss on each sale. That lower-limit role for variable cost is correct.",
    # B T
    "The amount by which PineShelf's price exceeds variable cost is contribution toward fixed costs. Wider gaps cover overhead faster. Contribution as the excess over variable cost matches the definition.",
    # C T
    "Distribution pricing in competitive bidding often adds a markup to variable costs for PineShelf deliveries. Variable cost plus markup is a practical quoting base. Markup on variable costs in those settings is the stated method.",
    # D T
    "A bulk PineShelf offer that still yields positive contribution can be rational when higher-priced alternative sales are not assured. Some contribution beats idle capacity with none. Rational acceptance of contribution-positive bulk deals fits the chapter logic. PineShelf accepts those contribution-positive bulk lots when showroom traffic will not reliably fill the same capacity at list price.",
    # E F
    "Fixed costs do not vary one-for-one with each extra cabinet in the basic short-run diagram. PineShelf's rent stays put when one more unit sells. Per-unit fixed-cost variation is false in that diagram.",
]

BODIES["CASE 5.7.158"] = [
    # A T
    "BlueCompass Apps treats variable costs as the short-run absolute floor for price in the book's discussion. Going under that floor deepens losses per licence. Variable cost as lower price limit is correct.",
    # B T
    "Price minus variable cost at BlueCompass is contribution that helps cover fixed costs such as platform overhead. Each paid licence chips at those fixed costs. Excess over variable cost as contribution is right.",
    # C T
    "In competitive or bid-like settings, BlueCompass distribution pricing may add a markup onto variable costs. Cost-plus-variable logic guides the quote. Markup on variable costs matches the statement.",
    # D T
    "Accepting a contribution-positive bulk BlueCompass deal can be sensible if richer sales are not locked in. Partial cover of fixed costs beats zero contribution. Rational bulk acceptance when alternatives are unsure is true. BlueCompass likewise takes contribution-positive enterprise bundles when higher list seats are not contractually assured.",
    # E F
    "Fixed costs in the basic short-run diagram do not tick up with every extra BlueCompass seat sold. They stay fixed between steps. One-for-one fixed-cost variation with each unit is false.",
]

BODIES["CASE 5.7.159"] = [
    # A T
    "If StoneOven Bakery prices like a luxury brand but sells only through deep-discount warehouses, customers get mixed signals. Price and place collide. Luxury price with discount-only place can confuse as claimed.",
    # B T
    "Promotion that promises features StoneOven does not ship breaks mix harmony because the message outruns the product. Trust erodes when ads invent specs. Promising absent features is a harmony break. StoneOven loses trust twice: once when the promise is false, and again when the rest of the mix looks incoherent. The chapter's vocabulary only holds if managers keep that distinction sharp when they brief teams and allocate budgets.",
    # C T
    "All four Ps should be tuned so they play in tune for StoneOven's target market rather than fighting each other. Coherence across product, price, place, and promotion is the mix ideal. Playing in tune for the target is correct.",
    # D T
    "Research should inform StoneOven's mix choices so Ps reflect real customer needs and constraints. Guesswork alone is weaker. Research informing mix decisions matches the diagram's foundation.",
    # E F
    "Harmonisation is not maximising promotion spend while deleting price and place decisions. StoneOven still needs coherent price and access. Dropping those Ps contradicts harmony.",
]

BODIES["CASE 5.7.160"] = [
    # A T
    "TideWash Detergent priced as luxury yet found only in deep-discount warehouses sends conflicting cues. Shoppers doubt which world the brand lives in. Luxury price with discount-only place confuses the mix.",
    # B T
    "When TideWash ads promise enzymes or scents the bottle lacks, promotion breaks mix harmony. The message must match the shipped product. Promising unshipped features is the harmony failure named. TideWash pays for that break in harmony through returns, cynicism, and messages that no longer match the bottle. The chapter's vocabulary only holds if managers keep that distinction sharp when they brief teams and allocate budgets.",
    # C T
    "TideWash should set all four Ps so they support one another for the chosen target market. Tuned together beats internal contradiction. Playing in tune across the Ps is the standard.",
    # D T
    "Market research ought to guide TideWash mix choices rather than pure intuition. Evidence shapes viable price, place, and message. Research informing those choices is correct.",
    # E F
    "Maximising promotion while erasing price and place work is not harmonisation for TideWash. Harmony needs all relevant Ps, not one loud P. Deleting price and place decisions falsifies the idea.",
]

BODIES["CASE 5.7.161"] = [
    # A T
    "BCG balance at PeakMeal Prep means holding stars and cash cows, funding chosen question marks, and keeping poor dogs scarce. That blend is what a balanced product portfolio looks like. Too many dogs or missing cows would skew the set. That reading keeps BCG language tight so funding debates do not redefine cells mid-meeting. The chapter's vocabulary only holds if managers keep that distinction sharp when they brief teams and allocate budgets.",
    # B T
    "Cash flowing from PeakMeal Prep's cash cows can bankroll stars that may later mature into cows themselves. Today's harvest funds tomorrow's leaders. Cow revenue supporting stars on that path matches portfolio logic.",
    # C T
    "Selective belief matters: PeakMeal Prep should back question marks it trusts rather than sprinkling equal cash on every weak idea. Not every low-share high-growth bet deserves the same cheque. Investing in believed question marks beats equal funding of all weak notions.",
    # D F
    "Poor dogs at PeakMeal Prep are not high-share products in rapidly growing markets; that cell describes stars. Dogs combine weak share with low growth. Mislabeling dogs as high-share high-growth items is false.",
    # E T
    "Profits at PeakMeal Prep often crest in maturity before decline pressures cut in. Peak-then-pressure is the usual life-cycle profit story. Maturity-stage peaking before decline fits the model.",
]

BODIES["CASE 5.7.162"] = [
    # A T
    "A healthy GlassHarbor Bikes portfolio mixes high-growth winners with cash generators and a few carefully chosen question marks, while limiting poor dogs. Balance across BCG cells is the goal. Stars, cows, question marks, and few dogs form that blend.",
    # B T
    "Revenues from GlassHarbor Bikes cash cows are the usual war chest for stars that could become the next cows. Harvest funds build future strength. Funding stars from cow cash toward future cow status is correct. Without that funding bridge, growth cells starve while mature lines merely hoard idle cash. The chapter's vocabulary only holds if managers keep that distinction sharp when they brief teams and allocate budgets.",
    # C T
    "Equal funding of every frail idea wastes GlassHarbor Bikes resources; question marks need belief-based selection. Managers pick the bets they credit. Investing in trusted question marks rather than all weak ideas equally is the rule.",
    # D F
    "Calling GlassHarbor Bikes poor dogs high-share items in fast growth markets swaps them with stars. The dog cell is low share and low growth. That high-share high-growth definition for dogs is wrong.",
    # E T
    "At GlassHarbor Bikes, maturity often delivers the profit peak before decline begins to squeeze margins and sales. Timing of the crest matters for planning. Peaking before decline pressures mount matches the cycle.",
]

BODIES["CASE 5.7.163"] = [
    # A T
    "Portfolio craft at DockLantern Co blends stars, cash cows, and selective question marks without overcrowding poor dogs. Cell diversity with dog restraint is balance. That BCG mix is what the statement describes.",
    # B T
    "DockLantern Co's cow lines throw off cash that can keep stars supplied until some of them settle into cow roles later. Transfer from harvest to growth is intentional. Cow revenues funding stars as future cows is right.",
    # C T
    "Belief filters DockLantern Co's question-mark spend: promising bets get fuel; scattergun equal funding of every weak notion does not. Selection beats blanket support. Invest in believed question marks, not every weak idea equally. Scattergun parity among weak notions dilutes the few question marks that could still tip into stars. The chapter's vocabulary only holds if managers keep that distinction sharp when they brief teams and allocate budgets.",
    # D F
    "High share in a rapidly growing market names a star at DockLantern Co, not a poor dog. Dogs live in the low-growth weak-share corner. Relabeling dogs as high-share high-growth products falsifies BCG.",
    # E T
    "Life-cycle profit at DockLantern Co commonly tops out in maturity, then decline starts pressing sales and margins downward. The peak precedes the squeeze. Maturity peaking before decline pressure is accurate.",
]

BODIES["CASE 5.7.164"] = [
    # A T
    "Stars, cash cows, chosen question marks, and a short leash on poor dogs describe balance in Alpine Soap Works's product portfolio. Missing any healthy cell or flooding dogs breaks the blend. That four-part caution is the portfolio ideal.",
    # B T
    "When Alpine Soap Works milks cash cows, the proceeds can finance stars destined to become future cows if growth cools with share intact. Money moves from harvest to invest. Cow-funded stars becoming future cows matches the flow.",
    # C T
    "Alpine Soap Works ought to put question-mark money behind ideas it believes in, not split funds evenly across every weak concept. Conviction guides the chequebook. Belief-based question-mark investment is correct.",
    # D F
    "Poor dogs at Alpine Soap Works fail the high-share rapid-growth test; those traits belong to stars. Low growth plus low share mark dogs instead. The stated dog definition is therefore false. Confusing the cells would send star-sized budgets into the wrong corner of the matrix. The chapter's vocabulary only holds if managers keep that distinction sharp when they brief teams and allocate budgets.",
    # E T
    "Before decline bites, Alpine Soap Works often sees profits peak while the line is still mature. Planning should expect that crest. Maturity-stage profit peaks ahead of decline pressures.",
]

BODIES["CASE 5.7.165"] = [
    # A T
    "Keeping RiverBloom Cosmetics's portfolio balanced means starring growth winners, harvesting cows, nurturing selected question marks, and refusing a kennel of poor dogs. Mix and restraint travel together. Stars, cows, question marks, few dogs is the blend.",
    # B T
    "Cash-cow income at RiverBloom Cosmetics can underwrite stars that managers hope will graduate into cows later. Present cash builds future harvest. Funding stars from cows toward future cow status is sound.",
    # C T
    "Rather than funding every weak idea the same, RiverBloom Cosmetics should concentrate on question marks it actually believes can win. Priorities beat parity among duds. Selective question-mark investment is the stated discipline.",
    # D F
    "Rapid growth plus high share is star territory for RiverBloom Cosmetics, so poor dogs cannot be defined that way. Dogs sit opposite on both axes. The high-share high-growth dog claim is false.",
    # E T
    "RiverBloom Cosmetics typically records strongest profits in maturity, then faces decline pressures that chip away at that peak. Crest then pressure is the pattern. Maturity peaking before decline mounts fits. Managers who miss that crest timing cut prices too late or invest as if growth were still accelerating. The chapter's vocabulary only holds if managers keep that distinction sharp when they brief teams and allocate budgets.",
]

BODIES["CASE 5.7.166"] = [
    # A T
    "Balance for Mesa Tools is a BCG spread: stars and cows in the core, question marks under watch, poor dogs kept few. Portfolio health is about that composition. Blending those cells without dog overload is correct. That reading keeps BCG language tight so funding debates do not redefine cells mid-meeting. The chapter's vocabulary only holds if managers keep that distinction sharp when they brief teams and allocate budgets.",
    # B T
    "Stars at Mesa Tools often live on cash-cow revenues until growth slows and they themselves can act as cows. The baton pass is deliberate. Cow cash funding stars as future cows matches portfolio teaching.",
    # C T
    "Question marks at Mesa Tools deserve cash only when managers believe in them, not when every weak pitch gets an equal slice. Uneven belief implies uneven budgets. Investing in trusted question marks beats equal weak-idea funding.",
    # D F
    "Misreading Mesa Tools's poor dogs as high-share products in rapid growth markets confuses them with stars. Share and growth are both low for dogs. That definition fails.",
    # E T
    "Profit curves at Mesa Tools frequently crest during maturity, after which decline pressures rise. Timing the peak informs harvest plans. Peaking before decline pressures is the life-cycle claim.",
]

BODIES["CASE 5.7.167"] = [
    # A T
    "Studio lines at Canvas & Kiln stay balanced when stars and cash cows coexist with picked question marks and few poor dogs. Cell variety without dog clutter is the target. That blend defines a balanced portfolio.",
    # B T
    "Harvesting Canvas & Kiln cash cows frees money to support stars that may become the next cows once markets mature. Cash migrates along the matrix. Cow revenues funding future-cow stars is accurate. Without that funding bridge, growth cells starve while mature lines merely hoard idle cash. The chapter's vocabulary only holds if managers keep that distinction sharp when they brief teams and allocate budgets.",
    # C T
    "Canvas & Kiln should not sprinkle identical budgets on every fragile idea; question marks need a belief screen first. Weak notions stay unfunded without conviction. Belief-first question-mark investment is right.",
    # D F
    "High-share rapid-growth labels star products at Canvas & Kiln; poor dogs never wear that badge. Dogs are the low-low cell. Defining dogs via high share and rapid growth is false.",
    # E T
    "In Canvas & Kiln's life cycle, maturity often holds the profit high point before decline begins to press. Expect the crest, then the squeeze. Maturity peaks ahead of decline pressures.",
]

BODIES["CASE 5.7.168"] = [
    # A T
    "For VoltSnack Bars, portfolio balance mixes stars, cash cows, and vetted question marks while capping poor dogs. Too many dogs or no cows would unbalance snacks and bars alike. The stated blend is the BCG ideal.",
    # B T
    "VoltSnack Bars can route cash-cow profits into stars that might later settle as cows when growth fades. Funding today shapes harvest tomorrow. Cow-to-star funding toward future cows is correct.",
    # C T
    "Belief gates question-mark spend at VoltSnack Bars: promising low-share high-growth bars get support; every weak idea does not get the same cheque. Selection is the discipline. Trusted question marks over equal weak funding matches the claim. Scattergun parity among weak notions dilutes the few question marks that could still tip into stars.",
    # D F
    "Poor dogs at VoltSnack Bars are not the high-share rapid-growth set; those are stars. Weak share and low growth mark dogs. The false definition swaps the cells.",
    # E T
    "Snack-line profits at VoltSnack Bars often peak in maturity before decline pressures appear. Managers harvest around that crest. Peaking then facing decline pressure is the cycle story.",
]

BODIES["CASE 5.7.169"] = [
    # A T
    "Print offerings at Cedar Print Shop form a balanced portfolio when stars and cows sit beside chosen question marks and few poor dogs. Composition across BCG cells is the balance test. That mix is what managers aim for.",
    # B T
    "Cash cows at Cedar Print Shop can bankroll stars expected to turn into cows after growth cools. The funding bridge is standard. Cow revenues supporting stars as future cows is right.",
    # C T
    "Instead of equal cash for every weak print concept, Cedar Print Shop should invest in question marks it believes can scale. Parity among duds wastes margin. Belief-based selection is the correct rule.",
    # D F
    "Describing Cedar Print Shop poor dogs as high-share products in rapidly growing markets simply restates the star cell. Dogs occupy the opposite corner. That dog definition is false. Confusing the cells would send star-sized budgets into the wrong corner of the matrix. The chapter's vocabulary only holds if managers keep that distinction sharp when they brief teams and allocate budgets.",
    # E T
    "Maturity-stage profits at Cedar Print Shop commonly peak, then decline pressures start to mount against volume and price. Crest precedes stress. That sequencing matches the life cycle.",
]

BODIES["CASE 5.7.170"] = [
    # A T
    "Drill-bit portfolios at HarborDrill Bits stay sound by blending stars, cash cows, selective question marks, and restrained poor dogs. Balance is a cell mix, not a single hero SKU. Stars-cows-question-marks-few-dogs is the blend.",
    # B T
    "Money from HarborDrill Bits cash cows can keep stars financed until some become cows in slower markets. Harvest pays for defence and growth. Funding stars from cows toward future cow roles fits.",
    # C T
    "HarborDrill Bits allocates question-mark funds by conviction, refusing to bankroll every weak idea at the same rate. Unequal belief means unequal spend. Investing in believed question marks is correct.",
    # D F
    "Rapid growth with high share never defines a poor dog at HarborDrill Bits; that pairing defines a star. Dogs lack both growth and share strength. The claimed dog definition fails.",
    # E T
    "Before decline presses, HarborDrill Bits often enjoys peak profits in maturity. Planning harvests around that window. Maturity peaking ahead of decline pressures is accurate. Managers who miss that crest timing cut prices too late or invest as if growth were still accelerating. The chapter's vocabulary only holds if managers keep that distinction sharp when they brief teams and allocate budgets.",
]

BODIES["CASE 5.7.171"] = [
    # A T
    "Lamp lines at Lumen Desk Lamps look balanced when the set includes stars and cash cows, a few believed question marks, and not too many poor dogs. BCG variety with dog limits is the standard. That portfolio blend matches the statement. That reading keeps BCG language tight so funding debates do not redefine cells mid-meeting. The chapter's vocabulary only holds if managers keep that distinction sharp when they brief teams and allocate budgets.",
    # B T
    "Lumen Desk Lamps's cow cash can finance stars that may later become cows once growth slows but share stays strong. The matrix describes that handoff. Cow-funded stars as future cows is correct.",
    # C T
    "Equal cheques for every frail lamp idea dilute Lumen Desk Lamps; question marks need a belief filter. Managers fund the bets they credit. Selective question-mark investment beats equal weak-idea funding.",
    # D F
    "Poor dogs at Lumen Desk Lamps cannot be redefined as high-share products in rapidly growing markets without erasing the star cell. Low-low is the dog home. The high-share high-growth dog claim is false.",
    # E T
    "Profit at Lumen Desk Lamps often reaches its high point in maturity, after which decline pressures build. Timing that peak guides pricing and spend. Peaking before decline mounts fits the model.",
]

BODIES["CASE 5.7.172"] = [
    # A T
    "Ice-cream portfolios at FrostBite Ice Cream balance when stars and cows share space with picked question marks and sparse poor dogs. Cell coverage without dog overload is health. That blend is the balanced-portfolio claim.",
    # B T
    "Cash cows at FrostBite Ice Cream generate the euros that can support stars on their way to becoming future cows. Harvest cash is reinvestment fuel. Funding stars from cow revenues toward future cows is right. Without that funding bridge, growth cells starve while mature lines merely hoard idle cash. The chapter's vocabulary only holds if managers keep that distinction sharp when they brief teams and allocate budgets.",
    # C T
    "FrostBite Ice Cream should back question marks it believes in and skip equal funding of every weak flavour notion. Conviction ranks the bets. Belief-based investment over equal weak funding matches the rule.",
    # D F
    "High share plus rapid growth is star language at FrostBite Ice Cream, so using it to define poor dogs is a category error. Dogs are weak in low-growth markets. The false definition does not hold.",
    # E T
    "During maturity, FrostBite Ice Cream often sees profits peak before decline pressures start cutting in. The crest is a planning landmark. Maturity-stage peaking before decline is correct.",
]

BODIES["CASE 5.7.173"] = [
    # A T
    "Drink portfolios at NovaKiosk Drinks stay balanced by combining stars, cash cows, chosen question marks, and few poor dogs. Missing cows or flooding dogs would tip the set. That BCG blend is the target mix.",
    # B T
    "Revenues from NovaKiosk Drinks cash cows can pay for star support so those drinks may become cows later. Cash moves from mature to growing cells. Cow funding of stars as future cows is accurate.",
    # C T
    "Rather than matching budgets across every weak kiosk idea, NovaKiosk Drinks invests in question marks managers actually trust. Selection disciplines spend. Trusted question marks over equal weak funding is correct. Scattergun parity among weak notions dilutes the few question marks that could still tip into stars. The chapter's vocabulary only holds if managers keep that distinction sharp when they brief teams and allocate budgets.",
    # D F
    "Labeling NovaKiosk Drinks poor dogs as high-share products in rapidly growing markets steals the star definition. Dogs lack that strength pairing. The statement's dog definition is therefore false.",
    # E T
    "Profits for NovaKiosk Drinks lines commonly peak in maturity and then meet decline pressures. Harvest timing follows that crest. Peaking before decline pressures mount matches the cycle.",
]

BODIES["CASE 5.7.174"] = [
    # A T
    "Workshop lines at Quilt & Needle form a balanced portfolio when stars and cash cows sit with selective question marks and not too many poor dogs. Mix across cells plus dog restraint equals balance. That blend is what the statement names.",
    # B T
    "Cash-cow takings at Quilt & Needle can underwrite stars that may graduate into cows after growth cools. Today's surplus funds tomorrow's harvest candidates. Cow revenues supporting future-cow stars fit portfolio logic.",
    # C T
    "Quilt & Needle puts question-mark investment behind ideas it believes in instead of funding every weak concept equally. Belief screens the list. Selective backing of question marks is the right discipline.",
    # D F
    "Poor dogs at Quilt & Needle are the low-share low-growth problem children, not high-share products in rapid growth. Stars own that high-high cell. Redefining dogs as high-share high-growth is false. Confusing the cells would send star-sized budgets into the wrong corner of the matrix. The chapter's vocabulary only holds if managers keep that distinction sharp when they brief teams and allocate budgets.",
    # E T
    "Maturity often gives Quilt & Needle its profit peak, after which decline pressures begin to mount on sales and margins. Crest then pressure is expected. Peaking before decline matches the life-cycle reading.",
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
