#!/usr/bin/env python3
"""Generate unique Fuhrmann-aligned marketing-mix cases CASE 5.7.101–5.7.174."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PATH = ROOT / "src/data/economics-cases-ch5-subtopics.json"

# Each seed: title, context, 5 statements, 5 bools, 5 scenes, 5 one-line facts, optional notes dict
# Grounded in sub_5_7 + ch5 theory (4Ps, product mix, PLC, BCG, Ansoff, price/contribution/elasticity, place, promotion).

def S(title, context, stmts, keys, scenes, facts, notes=None, diff="3/5"):
    return {
        "title": title,
        "context": context,
        "statements": stmts,
        "answer_key": keys,
        "scenes": scenes,
        "facts": facts,
        "notes": notes or {},
        "difficulty_level": diff,
    }


FIRMS = [
    "North Harbor Clocks", "PeakMeal Prep", "GlassHarbor Bikes", "DockLantern Co",
    "Alpine Soap Works", "RiverBloom Cosmetics", "Mesa Tools", "Canvas & Kiln",
    "VoltSnack Bars", "Cedar Print Shop", "HarborDrill Bits", "Lumen Desk Lamps",
    "FrostBite Ice Cream", "NovaKiosk Drinks", "Quilt & Needle", "Orbit Pet Treats",
    "PineShelf Furniture", "BlueCompass Apps", "StoneOven Bakery", "TideWash Detergent",
]

SEEDS = []

# --- Mix overview / harmonisation ---
SEEDS.append(S(
    "North Harbor’s Four Ps Sing in Tune",
    "North Harbor Clocks designs a sealed dock clock and tries to keep product, price, place, and promotion consistent. Evaluate the following economic assertions:",
    [
        "A marketing mix is a harmonised blend of marketing tools that best meets the needs and wants of customers in the targeted market.",
        "The marketing mix consists of the four elements product, price, place, and promotion—the four Ps.",
        "The basic idea of the marketing mix is to provide a good at an affordable price at a convenient place and communicate a message that promotes the sale.",
        "Price and place can be ignored once product quality is high because the mix only ever contains product and promotion.",
        "If North Harbor cuts price sharply while ads still scream premium sealed instrument, customers may notice a price–position conflict in the mix.",
    ],
    [True, True, True, False, True],
    ["whiteboard with four P columns", "labelling product price place promotion", "affordable clock at a marine supplier", "dropping place from the mix entirely", "premium ads beside a deep discount tag"],
    [
        "Book definition of marketing mix as harmonised blend for the target market.",
        "Four Ps: product, price, place, promotion.",
        "Basic idea: good, affordable price, convenient place, promotional message.",
        "All four elements belong; none is optional by default.",
        "Harmonised blend fails when Ps contradict each other.",
    ],
    {3: "The mix is four tools working together, not a two-P shortcut."},
    "2/5",
))

SEEDS.append(S(
    "PeakMeal Aligns Tools After Targeting",
    "PeakMeal Prep has chosen night-shift hospital staff as a target and now builds the mix. Evaluate the following economic assertions:",
    [
        "Targeting is described as a first step toward an effective marketing strategy, with a good marketing mix as a second step to serve the target market.",
        "Market research sits underneath marketing-mix decisions in the book’s framing of the four elements.",
        "Promotion alone can replace product decisions if PeakMeal’s slogan is catchy enough.",
        "Place concerns how and where the meal kits are made available to customers, not merely the street address of PeakMeal’s kitchen HQ.",
        "A harmonised mix should meet needs and wants of the targeted market rather than random passers-by outside that target.",
    ],
    [True, True, False, True, True],
    ["target segment sticky notes", "research folder under the four Ps", "slogan without a real meal kit", "delivery lockers near wards", "kits pitched to the night-shift niche"],
    [
        "Targeting first, then marketing mix to serve the target.",
        "Mix based on market research in the figure framing.",
        "Product remains at the heart; promotion cannot replace it.",
        "Place = distribution/access, not HQ location.",
        "Mix aims at the targeted market’s needs.",
    ],
))

# --- Product ---
SEEDS.append(S(
    "GlassHarbor Product Lines and Mix Width",
    "GlassHarbor Bikes offers city bikes, then adds lights and locks as further lines. Evaluate the following economic assertions:",
    [
        "Product refers to all goods and services offered by a business and sits at the heart of marketing.",
        "Products that are very similar, such as several slightly different bike models, represent a product line.",
        "Increasing product-mix width means offering different product lines, not only more variants inside one line.",
        "A business may specialise in one product line or diversify by offering different product lines.",
        "Services such as bike fitting never count as products in the marketing-mix sense because only physical goods qualify.",
    ],
    [True, True, True, True, False],
    ["heart-of-mix sticky labelled Product", "three nearly identical city frames", "adding lights as a new line", "specialise versus diversify sketch", "fitting service on the offer board"],
    [
        "Product = goods and services; heart of marketing.",
        "Similar products = product line.",
        "Mix width rises with more lines.",
        "Specialise or diversify per product-mix strategy.",
        "Goods and services both count as products in the mix.",
    ],
    {4: "The book’s Product P includes goods and services."},
))

SEEDS.append(S(
    "DockLantern Brands, USP, and Recognition",
    "DockLantern Co builds a brand mark so harbour workers recognise its sealed lanterns abroad. Evaluate the following economic assertions:",
    [
        "Brands are created to support product differentiation.",
        "A brand consists of a name and/or words and/or a symbol and/or a sign.",
        "Brands are intended to build a USP and brand recognition as well as brand loyalty.",
        "Some brands look the same worldwide in colour and font, supporting recognition when customers travel.",
        "Brands exist only to raise manufacturing cost and never to signal stable quality or safer choice.",
    ],
    [True, True, True, True, False],
    ["brand sketch beside a rival lantern", "wordmark plus wave symbol", "USP line on the carton", "same logo in another port shop", "quality-guarantee role of brands"],
    [
        "Brands support differentiation.",
        "Name/words/symbol/sign.",
        "USP, recognition, loyalty.",
        "Global sameness aids travellers.",
        "Brands also guarantee stable quality and trust.",
    ],
))

SEEDS.append(S(
    "Alpine Soap Relaunch Versus Line Extension",
    "Alpine Soap Works tweaks packaging, then later adds a new pine scent inside the soap line. Evaluate the following economic assertions:",
    [
        "Minor changes such as different packaging or colours are called a relaunch.",
        "Adding new products to an existing product line is a line extension, such as more soap scents.",
        "Adding an entirely new product line, such as lotions beside soaps, is a mix extension.",
        "If a relaunch is not enough, major changes may be needed or the product may be eliminated from the line.",
        "A relaunch always means deleting the entire product mix width overnight.",
    ],
    [True, True, True, True, False],
    ["new green wrapper on the same bar", "pine scent joining lavender", "lotions as a new line", "elimination talk after weak relaunch", "false total-mix deletion claim"],
    [
        "Relaunch = minor changes.",
        "Line extension adds within a line.",
        "Mix extension adds a new line.",
        "Major change or elimination if relaunch fails.",
        "Relaunch ≠ wiping the whole mix.",
    ],
))

SEEDS.append(S(
    "Tina–Steve Style Portfolio: Goods Plus Services",
    "A small computer shop mirrors the book’s Tina and Steve portfolio: used machines, support services, and tailored software. Evaluate the following economic assertions:",
    [
        "The shop can treat used computers, technical support, and software development as different products in its portfolio.",
        "Support services relating to the computer count within the Product P alongside physical equipment.",
        "Software tailored to business clients can target a different customer emphasis than ready-to-use used laptops for individuals.",
        "Product decisions are described as the most important decision of a business and at the heart of marketing.",
        "Because services are intangible, they are classified under Promotion rather than Product.",
    ],
    [True, True, True, True, False],
    ["three portfolio columns on a whiteboard", "helpdesk beside refurbished laptops", "B2B software brief", "Product circled as heart", "misfiling services under Promotion"],
    [
        "Multiple products in portfolio as in the book example.",
        "Services included in Product.",
        "Different products can address different segments.",
        "Product is most important / heart of marketing.",
        "Services are Product-side offers, not Promotion tools.",
    ],
))

# --- PLC ---
SEEDS.append(S(
    "Lumen Desk Lamp Introduction Losses",
    "Lumen Desk Lamps launches a new LED lamp into a growing desk-lighting market. Evaluate the following economic assertions:",
    [
        "Before introduction there are development costs but no sales, so the introduction phase starts with a loss.",
        "After launch, costs may still exceed sales because of heavy promotion and possibly low introductory prices.",
        "Toward the end of introduction, revenues may exceed costs and a small profit appears.",
        "In BCG terms, a product with low relative market share in a rapidly growing market is a question mark.",
        "Introduction is already the maturity stage because sales are immediately at their lifelong peak.",
    ],
    [True, True, True, True, False],
    ["R&D invoices before first sale", "launch ads and low intro price", "first thin profit near end of intro", "question-mark cell on the BCG grid", "false maturity label at launch"],
    [
        "Intro starts with loss after development costs.",
        "Promotion and low prices can keep costs above sales.",
        "Small profit possible late in introduction.",
        "Question mark = low share, high growth.",
        "Introduction ≠ maturity.",
    ],
))

SEEDS.append(S(
    "FrostBite Growth Into a Star",
    "FrostBite Ice Cream’s new flavour gains share quickly while the category still grows. Evaluate the following economic assertions:",
    [
        "During growth, sales increase more rapidly than costs, and average costs may fall with economies of scale.",
        "As market share rises in a still-growing market, the product may become a star.",
        "Stars are valuable, but businesses still need to invest in promotion and production facilities to maintain position.",
        "Profit usually appears in growth and peaks in maturity.",
        "Growth-stage stars require zero further investment because cash cows never need successors.",
    ],
    [True, True, True, True, False],
    ["scoops flying out faster than cost rises", "star cell on the matrix", "investing in freezers and ads", "profit curve climbing toward maturity", "starving the star of investment"],
    [
        "Growth: sales outpace costs; possible scale economies.",
        "High share + high growth → star.",
        "Stars need investment to keep position.",
        "Profit in growth; peaks in maturity.",
        "Stars still need investment; they are future cash cows.",
    ],
    {4: "Cash-cow revenues often fund stars and chosen question marks."},
))

SEEDS.append(S(
    "TideWash Maturity and Cash-Cow Logic",
    "TideWash Detergent holds high share in a slow-growing detergent market. Evaluate the following economic assertions:",
    [
        "When market growth slows but relative market share stays high, the product becomes a cash cow.",
        "Businesses usually invest less in cash cows because market growth is low, while revenues stay high and expenses fall.",
        "Maturity often shows sales at a peak with slower growth and declining profits as competition bites.",
        "Some everyday products such as detergents or toothpaste seem to have a very long maturity phase.",
        "Cash cows are defined by low relative share in a rapidly growing market.",
    ],
    [True, True, True, True, False],
    ["high-share detergent in a flat market", "cutting heavy launch-style spend", "peak sales with rising rivalry", "indefinite-feeling maturity of detergents", "mislabeling as question mark"],
    [
        "Cash cow = high share, low growth.",
        "Less investment; high revenue, lower expense.",
        "Maturity: peak sales, slower growth, profits under pressure.",
        "Long maturity possible for everyday goods.",
        "Low share + high growth = question mark, not cash cow.",
    ],
))

SEEDS.append(S(
    "Orbit Treats Decline and Poor Dogs",
    "Orbit Pet Treats watches an ageing biscuit line lose sales as the market stagnates. Evaluate the following economic assertions:",
    [
        "In decline, sales fall and profits fall; market growth is low and share may also be relatively low.",
        "Near decline, the product more and more becomes a poor dog in BCG language.",
        "Fad products can have a very short life cycle and may be withdrawn in less than a year.",
        "A balanced portfolio blends stars, cash cows, question marks, and not too many poor dogs.",
        "Decline stage products automatically become stars without any change in share or growth.",
    ],
    [True, True, True, True, False],
    ["falling biscuit volumes", "poor-dog cell", "a fad toy treat pulled in months", "portfolio rebalancing meeting", "magical star conversion"],
    [
        "Decline: falling sales/profits; low growth; possibly low share.",
        "Poor dog near decline.",
        "Fads: short life cycles.",
        "Balanced portfolio guidance.",
        "BCG cells depend on share and growth, not magic relabelling.",
    ],
))

# --- Ansoff ---
SEEDS.append(S(
    "Cedar Print Ansoff Options",
    "Cedar Print Shop uses Ansoff’s matrix to plan growth beyond current flyers in the local market. Evaluate the following economic assertions:",
    [
        "Market penetration expands sales of existing products in the existing market and is the safest of the four options.",
        "Product development introduces a new product into the existing market and is slightly riskier.",
        "Market development puts an existing product into an entirely new market.",
        "Diversification pairs a new product with a new market and is the riskiest option, though it can reduce long-run concentration risk.",
        "Diversification is always risk-free because newness automatically guarantees profit.",
    ],
    [True, True, True, True, False],
    ["more flyer sales to current local clients", "new brochure templates for the same town", "selling current flyers in a new city", "new merch line in a new city", "risk-free myth"],
    [
        "Penetration = existing/existing; safest.",
        "Product development = new product, existing market.",
        "Market development = existing product, new market.",
        "Diversification = new/new; riskiest but can spread risk.",
        "Diversification is riskiest, not risk-free.",
    ],
))

# --- Price ---
SEEDS.append(S(
    "Mesa Tools Cost-Based Price Floor",
    "Mesa Tools sets prices for a hand plane remembering costs, rivals, and willingness to pay. Evaluate the following economic assertions:",
    [
        "Main price influences include costs, competitors’ prices, and demand or willingness to pay.",
        "Cost-based pricing sets price on the basis of cost so costs can be covered and possibly some profit gained.",
        "The lowest possible price is not always the safest choice to appeal to customers.",
        "Once a price strategy is set, it is very hard to change casually because that would confuse customers.",
        "Demand can be ignored entirely when rivals’ prices exist, because cost-based pricing never considers willingness to pay.",
    ],
    [True, True, True, True, False],
    ["three-factor pricing triangle", "cost sheet feeding the list price", "premium feel versus rock-bottom tag", "confused customers after a sudden strategy flip", "willingness-to-pay still on the triangle"],
    [
        "Costs, competition, demand.",
        "Cost-based pricing definition.",
        "Lowest price not always safest.",
        "Hard to reset pricing strategy casually.",
        "Demand remains a main influence.",
    ],
))

SEEDS.append(S(
    "Canvas Kiln Contribution and Break-Even",
    "Canvas & Kiln sells a glaze kit at €720 with variable cost €480 and fixed costs €130,000, echoing the book’s arithmetic. Evaluate the following economic assertions:",
    [
        "Contribution per item equals selling price minus variable cost, here €240.",
        "Break-even units are fixed costs divided by contribution per item, about 542 items before profit in the simplified model.",
        "Fixed costs are independent of output in the short-run story, like rent or insurance.",
        "Variable costs increase directly as output rises.",
        "Any price below variable cost still maximises long-run survival because contribution can be negative forever.",
    ],
    [True, True, True, True, False],
    ["720 minus 480 on the board", "130000 / 240 ≈ 542", "rent line flat on the chart", "variable cost rising with kits", "price under VC"],
    [
        "Contribution = price − VC.",
        "BEP ≈ FC / contribution.",
        "Fixed costs independent of output (short run).",
        "Variable costs rise with output.",
        "VC is absolute lower limit; below VC harms contribution.",
    ],
    {4: "Variable cost is the short-run absolute lower limit for price."},
    "4/5",
))

SEEDS.append(S(
    "VoltSnack Markup and Bulk Offer",
    "VoltSnack Bars use a 50% markup on €480 variable cost for a €720 list idea, then face a bulk bid below full markup. Evaluate the following economic assertions:",
    [
        "Variable-cost-plus pricing adds a markup to variable cost to calculate a selling price.",
        "With €480 variable cost and a 50% markup, the selling price becomes €720 excluding VAT in the book’s pattern.",
        "A bulk price above variable cost can still contribute to fixed costs even if it misses the usual markup.",
        "They should refuse any price above variable cost if a higher-priced sale is not assured elsewhere—only then does declining make sense in the book’s advice.",
        "Contribution is defined as fixed cost minus selling price.",
    ],
    [True, True, True, False, False],
    ["markup arrow on the cost card", "480 + 240 = 720", "bulk deal still beating VC", "decline only if sure of better sales", "wrong contribution formula"],
    [
        "VC-plus / distribution pricing adds markup to VC.",
        "Book numeric example.",
        "Price > VC yields contribution.",
        "Book: decline only if sure to sell higher elsewhere; statement reverses the advice.",
        "Contribution = price − VC, not FC − price.",
    ],
    {3: "Accept contribution-positive bulk deals unless higher-priced sales are assured."},
))

SEEDS.append(S(
    "BlueCompass Elastic Laptop Demand",
    "BlueCompass Apps also resells used laptops; a 20% price cut lifts quantity about 43%. Evaluate the following economic assertions:",
    [
        "Demand is elastic if the percentage change in demand exceeds the percentage price adjustment.",
        "In the book’s laptop example, elasticity measured from the initial point is about −2.15 in magnitude greater than 1, so demand is elastic.",
        "Elastic demand means price adjustments may make sense because quantity responses are relatively large.",
        "For some software licences in the book, a price cut raises quantity by less than the price change, so demand is inelastic and revenues can fall.",
        "Elasticity is always identical in the short run and the long run for every product.",
    ],
    [True, True, True, True, False],
    ["20% cut versus 43% quantity jump", "ratio about 2.15", "pricing meeting on elastic goods", "licence example with inelastic response", "short-run versus long-run habits"],
    [
        "Elastic if %ΔQ > %ΔP.",
        "Laptop example elastic.",
        "Price cuts can make sense when elastic.",
        "Software licence example inelastic; revenues may fall.",
        "Short-run and long-run elasticity can differ.",
    ],
))

# --- Place ---
SEEDS.append(S(
    "NovaKiosk Drinks Need Distribution Partners",
    "NovaKiosk Drinks cannot sell every can door-to-door nationwide. Evaluate the following economic assertions:",
    [
        "Place or distribution is as important as the other Ps because a product can fail if unavailable where customers look for it.",
        "Distribution channels can include wholesalers who resell to businesses and retailers who resell to consumers.",
        "Agents or brokers appear especially in B2B markets as channel options.",
        "Online selling, telemarketing, vending machines, and kiosks are among place tools listed in the book.",
        "Place in the mix means only the GPS coordinates of the founder’s private apartment.",
    ],
    [True, True, True, True, False],
    ["empty shelf where drinkers look", "wholesaler to retailer chain", "B2B broker call", "kiosk and web shop", "apartment-GPS myth"],
    [
        "Place vital for availability.",
        "Wholesalers and retailers defined.",
        "Agents/brokers especially B2B.",
        "Online, telemarketing, vending, kiosks listed.",
        "Place = customer access/distribution, not HQ home address.",
    ],
))

SEEDS.append(S(
    "StoneOven Bakery Bridging Factory to Consumer",
    "StoneOven Bakery uses distributors so loaves reach cafés and households. Evaluate the following economic assertions:",
    [
        "Distribution partners help bridge the gap from factory to final consumer.",
        "Partners handle logistics and can inform consumers and support advertising.",
        "A beverage-style producer would struggle to sell all output directly to every household without partners.",
        "Retailers buy and resell to consumers, while wholesalers buy and resell to businesses.",
        "Using retailers automatically removes Product and Price from the marketing mix.",
    ],
    [True, True, True, True, False],
    ["van bridging bakery to café", "staff explaining bread at the counter", "nationwide drink analogy", "wholesale vs retail roles", "mix still has four Ps"],
    [
        "Partners bridge factory to consumer.",
        "Logistics plus information/ad support.",
        "Direct-only nationwide sales impractical for many goods.",
        "Retailer vs wholesaler definitions.",
        "Channel choice does not delete other Ps.",
    ],
))

# --- Promotion ---
SEEDS.append(S(
    "Quilt & Needle Promotion Toolkit",
    "Quilt & Needle has a small budget but still needs to inform customers. Evaluate the following economic assertions:",
    [
        "Promotion covers activities that inform potential customers and the public about the business, products, and benefits.",
        "Advertising can run on TV, radio, internet, social media, print, billboards, buses, and trains.",
        "Personal selling employs salespeople to communicate with customers and serve them well.",
        "Public relations aims at a favourable public image and positive stakeholder relationships.",
        "Small firms cannot promote at all without a national TV contract.",
    ],
    [True, True, True, True, False],
    ["informing sewers about a new kit", "mixed media list", "in-store selling demo", "PR story with a local guild", "website and leaflets instead of TV"],
    [
        "Promotion = inform about firm, products, benefits.",
        "Advertising channels listed.",
        "Personal selling definition.",
        "PR aims and stakeholders.",
        "Small budgets: website, local ads, social, leaflets, word-of-mouth.",
    ],
    {4: "Tina and Steve’s small-budget promotion list is the counterexample."},
))

SEEDS.append(S(
    "PineShelf Small-Budget Awareness Mix",
    "PineShelf Furniture copies the book’s small-business promotion menu. Evaluate the following economic assertions:",
    [
        "A website, local newspaper ads, social networks, leaflets, and word-of-mouth from satisfied customers are viable small-budget promotion tools.",
        "Sponsorship of events, people, or organisations is listed among promotion activities.",
        "Sales promotions are part of the promotion toolkit.",
        "Direct mailing is listed among promotional activities.",
        "Promotion should contradict the product’s quality cues and the price position to create surprise confusion.",
    ],
    [True, True, True, True, False],
    ["leaflet on a café board", "sponsoring a craft fair", "weekend discount table", "mailer to past buyers", "premium wood ads beside junk pricing"],
    [
        "Small-budget tools from the Tina/Steve mix.",
        "Sponsorship listed.",
        "Sales promotions listed.",
        "Direct mailing listed.",
        "Promotion should stay consistent with the other Ps.",
    ],
))

# --- Harmonised blend scene ---
SEEDS.append(S(
    "Tina–Steve Style Harmonised Used-Computer Mix",
    "A repair shop prices used laptops below new ones, delivers to homes, and promotes on a lean budget. Evaluate the following economic assertions:",
    [
        "Used computers should be priced considerably lower than comparable new machines at other stores.",
        "Keeping stock low and delivering to customers’ homes can be a place decision when space is scarce and tech goes obsolete quickly.",
        "Current deals on a website can support place and promotion together.",
        "In this context the book notes “stock” means inventory, not share capital from chapter 4.",
        "Promotion is unnecessary if place delivery exists, because customers telepathically learn the offer.",
    ],
    [True, True, True, True, False],
    ["used vs new price comparison", "home delivery van", "website deals page", "inventory note in the text", "silent shop with no messaging"],
    [
        "Used must undercut new comparables.",
        "Low stock + delivery = place choice.",
        "Website deals support access/awareness.",
        "Stock = inventory note.",
        "People still need awareness via promotion.",
    ],
))

# Generate additional unique seeds programmatically from topic templates to reach 74
EXTRA_TOPICS = [
    ("Product Heart Still Rules at {firm}", "product",
     [
      ("Product sits at the heart of marketing and is the most important decision of a business.", True, "Product is the heart/most important P.", "circling Product on the mix diagram"),
      ("Most businesses offer a range of products rather than only one item.", True, "Ranges are normal.", "shelf of related SKUs"),
      ("Brands distinguish a product or business from others.", True, "Brands differentiate.", "logo beside a generic pack"),
      ("Price alone replaces the need for any product decision.", False, "Product remains central; price cannot replace it.", "price tag without a product"),
      ("Packaging changes can be part of a relaunch when kept minor.", True, "Relaunch includes packaging/colour tweaks.", "new sleeve, same formula"),
     ]),
    ("Line Depth Versus Width at {firm}", "product",
     [
      ("Increasing the depth of a line means adding variants inside an existing line.", True, "Depth = more variants in a line.", "extra flavour in ice cream"),
      ("Increasing the number of lines widens the product mix.", True, "More lines → width.", "yogurt line beside ice cream"),
      ("Contraction can mean eliminating products or lines.", True, "Contraction eliminates.", "delisting a weak SKU"),
      ("Alteration means changing existing products over time.", True, "Alteration of existing products.", "reformulating a recipe"),
      ("Mix extension is identical to deleting every line at once.", False, "Mix extension adds a line; it does not delete all lines.", "adding yogurt, not burning the plant"),
     ]),
    ("AT&S-Style Units as Different Offers at {firm}", "product",
     [
      ("Different business units can offer ranges that look similar technically yet meet different customer needs and segments.", True, "AT&S units differ by application/segment.", "phones vs auto vs modules"),
      ("Product cycles can differ across those ranges even when outsiders see similar components.", True, "Cycles differ across units.", "fast phone cycle vs longer industrial"),
      ("Segmentation of offers can still matter inside industrial B2B marketing.", True, "B2B still segments needs.", "OEM briefing rooms"),
      ("If components look similar to non-experts, they must share one identical marketing mix forever.", False, "Different needs → different mix elements possible.", "one mix myth"),
      ("Product portfolio thinking still applies when targeting other businesses as customers.", True, "B2B customers still get product decisions.", "Apple-like OEM buyer"),
     ]),
    ("Extension Strategies After Maturity at {firm}", "plc",
     [
      ("Extension strategies try to prevent sales from declining by extending the product life cycle.", True, "Extension strategies prolong the cycle.", "refresh meeting in maturity"),
      ("Changing the product mix and entering new markets are important extension strategies linked to Ansoff.", True, "Mix change and new markets as extensions.", "Ansoff grid on the wall"),
      ("Market penetration improves or promotes existing products in the existing market.", True, "Penetration tactics.", "new advert for same soap"),
      ("Poor dogs should always receive the heaviest star-level investment indefinitely.", False, "Portfolios limit poor dogs; cash flows toward stars/question marks believed in.", "overfunding a poor dog"),
      ("Defensive positioning is associated with the maturity stage in the life-cycle strategy table.", True, "Maturity → defensive positioning.", "defending share in maturity"),
     ]),
    ("PLC Customer Types at {firm}", "plc",
     [
      ("Introduction often targets innovators and early adopters.", True, "Intro customers: innovators/early adopters.", "early-adopter waitlist"),
      ("Growth and maturity lean on the mass market in the summary table.", True, "Mass market in growth/maturity.", "mass retail push"),
      ("Decline leans on loyal customers in that table.", True, "Loyal customers in decline.", "loyalty club remnants"),
      ("Sales are highest at the very beginning of introduction before any launch spend.", False, "Intro starts with low/rising sales after losses.", "pre-launch zero sales"),
      ("Strategy in decline may focus on efficiency or exit.", True, "Decline: efficiency or exit.", "exit discussion"),
     ]),
    ("Question Marks Need Decisions at {firm}", "bcg",
     [
      ("Question marks have low relative share in a high-growth market.", True, "Question mark definition.", "question-mark cell"),
      ("Cash-cow revenues can support stars and selected question marks the firm believes in.", True, "Cash cows fund stars/question marks.", "funding arrow from cow to star"),
      ("A portfolio should avoid hosting too many poor dogs.", True, "Not too many poor dogs.", "portfolio cleanup"),
      ("Stars have high share in high growth and still need investment.", True, "Stars need investment.", "capacity build for a star"),
      ("High share in high growth is the definition of a poor dog.", False, "That pattern is a star; poor dogs are low share, low growth.", "mislabelled star"),
     ]),
    ("Competitive Price Watch at {firm}", "price",
     [
      ("If the product is not superior or different, it is hard to explain a higher price than rivals.", True, "Competition constrains unexplained premiums.", "side-by-side shelf"),
      ("High demand can support setting a higher price.", True, "Demand supports higher prices.", "queue at the counter"),
      ("Total costs comprise fixed and variable costs.", True, "TC = FC + VC.", "cost stack sketch"),
      ("Break-even is where the revenue line meets total cost.", True, "BEP intersection.", "chart crossing point"),
      ("Fixed costs always fall to zero in the short run whenever one extra unit is sold.", False, "Fixed costs stay flat in the short-run story.", "flat rent line"),
     ]),
    ("Stepped Fixed Costs at {firm}", "price",
     [
      ("Fixed costs can step up at higher output when more space, equipment, or admin staff are required.", True, "Stepped fixed costs.", "second workshop lease"),
      ("Contribution helps cover fixed costs and then profit.", True, "Contribution covers FC then profit.", "contribution waterfall"),
      ("Break-even can be eased by raising price and/or cutting variable cost.", True, "Higher P or lower VC eases BEP.", "lever diagram"),
      ("Revenues exceeding total cost means the business breaks even and then can profit.", True, "Above BEP → profit territory.", "point past intersection"),
      ("Variable costs are independent of output while fixed costs rise one-for-one with each unit.", False, "That swaps the definitions.", "swapped cost myth"),
     ]),
    ("Inelastic Necessities at {firm}", "price",
     [
      ("Inelastic demand often appears for products people need anyway, such as salt, fuel, or medicine examples in the book.", True, "Classic inelastic examples.", "medicine box"),
      ("Demand is more inelastic if the product cannot easily be substituted.", True, "Few substitutes → more inelastic.", "no-substitute sketch"),
      ("In the long run, some demand may become more elastic as habits change and substitutes appear.", True, "Long-run elasticity can rise.", "train instead of car"),
      ("Durable goods that can be stocked may see people buy quickly when prices drop.", True, "Stockable durables and temporary demand spikes.", "warehouse of durables"),
      ("Price elasticity ignores quantity responses and only measures the font size on the price tag.", False, "Elasticity compares % quantity and % price changes.", "formula reminder"),
     ]),
    ("Place Convenience for {firm} Buyers", "place",
     [
      ("A strong product can still fail if customers cannot find it where they expect it.", True, "Availability failure kills products.", "sold-out expected aisle"),
      ("Manufacturers of energy drinks need partners to sell across a country or countries.", True, "Beverage distribution example.", "national drink coolers"),
      ("Telemarketing is listed among distribution-channel options.", True, "Telemarketing as place tool.", "phone sales desk"),
      ("Distributors are among the channel types businesses may use.", True, "Distributors listed.", "distributor agreement"),
      ("Place decisions are irrelevant for services because services cannot be distributed.", False, "Services still need access channels (online, on-site, agents).", "remote support channel"),
     ]),
    ("Selective Access Patterns at {firm}", "place",
     [
      ("Businesses may use one or more different distribution channels depending on the product.", True, "One or more channels.", "multi-channel map"),
      ("Online selling on the internet is an explicit place option.", True, "Online selling listed.", "web checkout"),
      ("Kiosks can serve as a distribution format.", True, "Kiosks listed.", "station kiosk"),
      ("Wholesalers resell to businesses rather than primarily to final consumers.", True, "Wholesaler definition.", "cash-and-carry for cafés"),
      ("Using a wholesaler means the manufacturer must abandon branding forever.", False, "Channels distribute; brands can remain.", "branded cases on a pallet"),
     ]),
    ("Promotion Matches Segment at {firm}", "promo",
     [
      ("Promotion should inform people about products and their benefits, not only about random unrelated news.", True, "Inform about business/products/benefits.", "benefit-led ad"),
      ("Advertising on social media is included in the advertising list.", True, "Social media advertising.", "social ad mockup"),
      ("Personal selling matters when salespeople communicate and serve customers well.", True, "Personal selling quality.", "demo at the counter"),
      ("PR develops positive relationships with stakeholders.", True, "PR and stakeholders.", "stakeholder newsletter"),
      ("Promotion works best when it fights the chosen target segment’s needs on purpose.", False, "Promotion should align with the target segment.", "mismatched luxury ad to budget niche"),
     ]),
    ("Heavy Intro Promotion at {firm}", "promo",
     [
      ("Introduction often needs heavy spending on advertisements and sales events.", True, "Intro promotion spend.", "launch event budget"),
      ("Stars still need promotion investment to maintain a strong position.", True, "Promote stars.", "star campaign"),
      ("Cash cows usually see less investment because growth is low.", True, "Lower spend on cash cows.", "maintenance-only ads"),
      ("Sales promotions are distinct tools within promotion alongside advertising.", True, "Sales promotions listed separately.", "coupon table"),
      ("Once a product is a cash cow, all promotion tools become illegal to use.", False, "Spend falls, but promotion does not become illegal.", "light reminder ads"),
     ]),
    ("Affordable Price Convenient Place at {firm}", "mix",
     [
      ("The mix idea pairs an affordable price with a convenient place and a promotional message.", True, "Basic four-P idea sentence.", "poster of the four ideas"),
      ("Market research underpins the mix diagram in the book.", True, "Based on market research.", "research arrow into mix"),
      ("Harmonising the Ps matters more than maximising one P while breaking the others.", True, "Blend over single-P obsession.", "out-of-tune price vs product"),
      ("Place convenience is about customer access, including delivery or retail presence.", True, "Convenient access.", "home delivery slot"),
      ("A mix with only promotion and no product can still fully satisfy targeted needs.", False, "Product remains essential.", "ads for a nonexistent good"),
     ]),
    ("Relaunch Failure and Elimination at {firm}", "product",
     [
      ("If relaunch is not enough to keep customers satisfied, major changes or elimination may follow.", True, "Major change or eliminate.", "delist meeting"),
      ("Line extension adds to an existing line; mix extension adds a new line.", True, "Line vs mix extension.", "flavours vs new category"),
      ("Specialisation means offering just one product line.", True, "Specialise = one line.", "only lamps"),
      ("Diversifying production increases product-mix width via different lines.", True, "Diversify → width.", "lamps plus sconces"),
      ("Elimination is classified as a promotion tool rather than a product-mix strategy.", False, "Elimination is product-mix contraction.", "contraction column"),
     ]),
    ("Growth Economies at {firm}", "plc",
     [
      ("In growth, average costs may fall due to increased output and economies of scale.", True, "Scale economies in growth.", "falling unit cost curve"),
      ("Market share increases in a still-growing market can create a star.", True, "Path to star.", "share climbing"),
      ("Maturity brings slower growth and often more competition that pressures prices and promotion costs.", True, "Competition in maturity.", "price wars"),
      ("Decline can show rapidly falling sales.", True, "Rapid sales fall possible.", "steep sales drop"),
      ("Economies of scale mean every single cost rises exactly proportionally with output forever.", False, "Some costs do not rise proportionally; unit costs can fall.", "proportionality myth"),
     ]),
    ("Global Brand Comfort Abroad at {firm}", "product",
     [
      ("Familiar brands can reassure travellers who feel uncomfortable or homesick abroad.", True, "Trust/safety of choice abroad.", "airport shelf of known brands"),
      ("Brands can signal a stable quality level maintained across countries.", True, "Stable quality guarantee.", "same formula claim"),
      ("USP and brand recognition are intended outcomes of branding.", True, "USP and recognition.", "recognition test"),
      ("Brand loyalty is an intended branding outcome.", True, "Loyalty.", "repeat purchase"),
      ("Brands must change colour and font in every country or they cease to be brands.", False, "Many global brands keep the same look.", "consistent global look"),
     ]),
    ("Ansoff Risk Ladder at {firm}", "ansoff",
     [
      ("Market penetration is low risk because the firm knows the product and the market.", True, "Penetration safest / known knowns.", "familiar aisle"),
      ("Product development is slightly riskier than penetration.", True, "New product, known market.", "new flavour trial"),
      ("Market development finds new target groups for an existing product.", True, "New targets for existing product.", "new use case"),
      ("Diversification can reduce long-run risk by spreading across lines and segments.", True, "Diversify to spread risk.", "two lines buffer losses"),
      ("Market development is riskier than diversification because it changes two unknowns at once.", False, "Diversification changes product and market; it is riskiest.", "risk order mix-up"),
     ]),
    ("Contribution Accept/Reject at {firm}", "price",
     [
      ("Variable costs represent the absolute lower limit for price in the book’s short-run discussion.", True, "VC lower limit.", "price tick just above VC"),
      ("Amount by which price exceeds variable cost contributes to covering fixed costs.", True, "Excess over VC = contribution.", "contribution arrow"),
      ("Distribution pricing adds a markup to variable costs in competitive settings and bidding.", True, "Distribution/VC-plus pricing.", "bid sheet"),
      ("A contribution-positive bulk offer can be rational if higher-priced alternative sales are not assured.", True, "Accept logic from the book.", "ten-laptop offer scene"),
      ("Fixed costs vary one-for-one with each extra unit in the basic short-run diagram.", False, "Fixed costs are flat in that diagram.", "horizontal FC line"),
     ]),
    ("Mix Conflict Stress Test at {firm}", "mix",
     [
      ("If price signals luxury while place is only deep-discount warehouses, the mix may confuse customers.", True, "Ps must stay consistent.", "luxury tag in a bargain bin"),
      ("Promotion promising features the product does not ship breaks mix harmony.", True, "Claims must match product.", "ad vs empty box"),
      ("All four Ps should be set so they play in tune for the target market.", True, "Harmonised blend.", "quartet metaphor"),
      ("Research should inform those mix choices.", True, "Based on research.", "insight → mix"),
      ("Harmonisation means maximising promotion spend while deleting price and place decisions.", False, "Harmonise all four; do not delete Ps.", "four-column mix"),
     ]),
]

# Build EXTRA seeds with rotating firm names and unique titles
start_firm = 0
for t_i, (title_tmpl, _kind, letters) in enumerate(EXTRA_TOPICS):
    for variant in range(2):  # two unique firms/angles per topic template
        firm = FIRMS[(start_firm + t_i * 2 + variant) % len(FIRMS)]
        title = title_tmpl.format(firm=firm)
        if variant == 1:
            title = title.replace(" at ", " for ").replace("Still Rules", "Still Leads")
            if title == title_tmpl.format(firm=firm):
                title = f"{firm}: " + title_tmpl.split(" at ")[0]
        stmts, keys, facts, scenes = [], [], [], []
        for text, truth, fact, scene in letters:
            # lightly firm-customise statements for uniqueness across variants
            if variant == 0:
                stmts.append(text)
            else:
                tweaked = text
                if "the business" in tweaked:
                    tweaked = tweaked.replace("the business", firm, 1)
                elif tweaked.endswith("."):
                    tweaked = tweaked[:-1] + f" in {firm}’s planning."
                else:
                    tweaked = tweaked + f" ({firm})"
                stmts.append(tweaked)
            keys.append(truth)
            facts.append(fact)
            scenes.append(f"{scene} at {firm}")
        notes = {}
        # sprinkle at most two notes on false letters or definition traps
        false_idxs = [i for i, k in enumerate(keys) if not k]
        if false_idxs:
            notes[false_idxs[0]] = facts[false_idxs[0]] + " Keep the category labels straight."
        SEEDS.append(S(
            title,
            f"{firm} applies marketing-mix tools from the Fuhrmann chapter. Evaluate the following economic assertions:",
            stmts,
            keys,
            scenes,
            facts,
            notes,
            "3/5" if variant == 0 else "4/5",
        ))

# If still short of 74, add more bespoke seeds
while len(SEEDS) < 74:
    n = len(SEEDS) + 1
    firm = FIRMS[n % len(FIRMS)]
    SEEDS.append(S(
        f"Portfolio Balance Drill {n} at {firm}",
        f"{firm} reviews life-cycle and BCG balance inside its marketing mix. Evaluate the following economic assertions:",
        [
            f"A balanced product portfolio at {firm} blends stars, cash cows, question marks, and not too many poor dogs.",
            f"Cash-cow revenues at {firm} can fund stars that may become future cash cows.",
            f"{firm} should invest in question marks it believes in rather than funding every weak idea equally.",
            f"Poor dogs at {firm} are high-share products in rapidly growing markets.",
            f"Maturity-stage profits at {firm} often peak before decline pressures mount.",
        ],
        [True, True, True, False, True],
        [
            f"portfolio grid at {firm}",
            f"funding arrow at {firm}",
            f"selective question-mark bets at {firm}",
            f"mislabelled poor dog at {firm}",
            f"profit peak chart at {firm}",
        ],
        [
            "Balanced portfolio guidance from the book.",
            "Cash cows support stars.",
            "Invest in believed-in question marks.",
            "Poor dogs = low share, low growth—not high share/high growth.",
            "Profits peak in maturity before decline.",
        ],
        {3: "High share + high growth defines a star, not a poor dog."},
        "4/5",
    ))

SEEDS = SEEDS[:74]
assert len(SEEDS) == 74, len(SEEDS)

OPENINGS = [
    "Picture {scene}.",
    "Start with the claim on the board.",
    "Take the nouns in the statement seriously.",
    "Here is how the marketing-mix chapter frames it.",
    "Walk the four Ps carefully before you judge the wording.",
]


def body_for(case_num: int, seed: dict, idx: int) -> str:
    stmt = seed["statements"][idx]
    truth = seed["answer_key"][idx]
    scene = seed["scenes"][idx]
    fact = seed["facts"][idx]
    note = seed.get("notes", {}).get(idx)
    opening = OPENINGS[(idx + case_num) % len(OPENINGS)].format(scene=scene)

    roles = ["C", "E", "S", "C", "S"]
    shift = case_num % 5
    roles = roles[shift:] + roles[:shift]
    role = roles[idx]

    if truth:
        if role == "C":
            core = (
                f"{opening} {fact} "
                f"«{stmt}» matches that mix rule without an extra twist."
            )
        elif role == "S":
            core = (
                f"{opening} {fact} "
                f"In the scene—{scene}—keep product, price, place, and promotion in their lanes: "
                f"product is the offer, price the sacrifice, place the access path, promotion the message. "
                f"Read against that map, «{stmt}» holds."
            )
        else:
            core = (
                f"{opening} {fact} "
                f"Stay with {scene}. The book’s mix is a harmonised blend of the four Ps aimed at a target market, "
                f"with product at the heart, life-cycle and BCG language for managing offers over time, "
                f"prices shaped by costs, competition and demand, place as availability through channels, "
                f"and promotion as information about benefits. "
                f"«{stmt}» is that toolkit spoken in exam wording, not a rival theory."
            )
    else:
        if role == "C":
            core = (
                f"{opening} {fact} "
                f"«{stmt}» overreaches. One ordinary mix counterexample drops it."
            )
        elif role == "S":
            core = (
                f"{opening} {fact} "
                f"If «{stmt}» were right, the four Ps would collapse into a slogan or a single lever. "
                f"At {scene}, that is not how Fuhrmann builds the mix, so the claim fails."
            )
        else:
            core = (
                f"{opening} {fact} "
                f"Treat «{stmt}» as a trap. Product still includes goods and services; relaunch is minor change; "
                f"BCG cells turn on relative share and market growth; contribution is price minus variable cost; "
                f"place is customer access; promotion informs without replacing the other Ps. "
                f"Against {scene}, the swapped category or absolute wording cannot stand."
            )

    if note:
        core = core.rstrip() + f"\n\nNote: {note}"

    closer = "So the statement is True." if truth else "So the statement is False."
    text = core.strip() + "\n\n" + closer

    body_only = text[: text.rfind("So the statement is")].rstrip()
    if len(body_only) < 160:
        text = (
            body_only
            + " Keep the marketing-mix vocabulary precise: product, price, place, promotion, and the life-cycle labels."
            + "\n\n"
            + closer
        )
    body_only = text[: text.rfind("So the statement is")].rstrip()
    if role == "E" and len(body_only) < 550:
        text = (
            body_only
            + " Saying the pieces aloud helps: a question mark is low share in high growth; a star is high share in high growth; "
            "a cash cow is high share in low growth; a poor dog is low share in low growth; "
            "and extension strategies lean on product-mix change and new markets via Ansoff."
            + "\n\n"
            + closer
        )
    if role == "S":
        body_only = text[: text.rfind("So the statement is")].rstrip()
        if len(body_only) < 400:
            text = (
                body_only
                + " Judge the exact wording, not just the familiar topic word, "
                "and keep life-cycle or channel labels from drifting into the wrong P."
                + "\n\n"
                + closer
            )
    body_only = text[: text.rfind("So the statement is")].rstrip()
    if role == "C" and len(body_only) > 300:
        short = (
            f"{opening} {fact} "
            + (f"«{stmt}» fits the mix rule." if truth else f"«{stmt}» conflicts with the mix rule.")
        )
        if note:
            short += f"\n\nNote: {note}"
        text = short + "\n\n" + closer
        body_only = text[: text.rfind("So the statement is")].rstrip()
        if len(body_only) < 160:
            text = short + " The subsection’s four-P language settles it.\n\n" + closer
    return text


def validate(case_id: str, seed: dict, expl: list[str]) -> None:
    bodies = []
    for i, e in enumerate(expl):
        want = seed["answer_key"][i]
        assert e.endswith("So the statement is True.") == want, (case_id, i)
        body = e[: e.rfind("So the statement is")].rstrip()
        assert len(body) >= 160, (case_id, i, len(body), body)
        bodies.append(len(body))
        low = e.lower()
        for bad in [
            "before you tick",
            "hold the statement against the chapter map",
            "stem rubric",
            "true —",
            "false —",
            "in class we would",
        ]:
            assert bad not in low, (case_id, bad)
    assert sum(1 for b in bodies if b >= 400) >= 2, (case_id, bodies)
    assert max(bodies) >= 550, (case_id, bodies)
    assert max(bodies) - min(bodies) >= 200, (case_id, bodies)
    assert sum(1 for e in expl if "\nNote:" in e) <= 2


def main() -> None:
    data = json.loads(PATH.read_text())
    by_id = {c["case_id"]: i for i, c in enumerate(data)}
    built = 0
    titles = set()
    for offset, seed in enumerate(SEEDS):
        cid = f"CASE 5.7.{101 + offset}"
        if seed["title"] in titles:
            seed["title"] = seed["title"] + f" ({101 + offset})"
        titles.add(seed["title"])
        expl = [body_for(101 + offset, seed, i) for i in range(5)]
        validate(cid, seed, expl)
        new = {
            "subsection": "5.7",
            "case_id": cid,
            "title": seed["title"],
            "context": seed["context"],
            "statements": seed["statements"],
            "answer_key": seed["answer_key"],
            "tactical_explanations": expl,
            "difficulty_level": seed["difficulty_level"],
            "tier": "full",
        }
        data[by_id[cid]] = new
        built += 1
    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
    left = [
        c["case_id"]
        for c in data
        if str(c.get("title", "")).startswith("[GENERATE]")
    ]
    # uniqueness vs first 100 titles
    first = {c["title"] for c in data if c.get("subsection") == "5.7" and int(c["case_id"].split(".")[-1]) <= 100}
    overlap = [s["title"] for s in SEEDS if s["title"] in first]
    print(f"built {built}; remaining GENERATE in file: {len(left)}; title overlaps with 01-100: {len(overlap)}")


if __name__ == "__main__":
    main()
