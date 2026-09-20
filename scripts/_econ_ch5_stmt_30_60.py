#!/usr/bin/env python3
"""Hand-authored statement-only tactical_explanations for ch5 cases [30:60]."""
from __future__ import annotations

import json
import re
from pathlib import Path

PATH = Path("/workspace/src/data/economics-cases-ch5-subtopics.json")
SLICE = slice(30, 60)
CLOSER = re.compile(r"\s*So the statement is (True|False)\.?\s*$", re.I)


def wrap(body: str, truth: bool) -> str:
    body = body.replace("\u2014", ", ").replace("\u2013", "-").strip()
    v = "True" if truth else "False"
    return f"{body}\n\nSo the statement is {v}."


# Per case: list of 5 body strings (no closer). Truth taken from answer_key.
BODIES: dict[str, list[str]] = {}

BODIES["CASE 5.2.15"] = [
    # A F compact
    "Loyalty schemes reward repeats with points or discounts, yet they do not cancel satisfaction work. A points card cannot repair a disappointing product or rude service. Firms still need clear satisfaction goals alongside membership mechanics. Treating the programme as a full substitute for those objectives misreads what loyalty tools actually do.",
    # B F standard
    "Enrolment in a rewards scheme does not convert anger into loyalty. Buyers who leave unhappy after a purchase may ignore points balances and switch brands. Dissatisfaction undermines repeat intent even when a card sits in the wallet. The claim that rewards alone produce loyal behaviour from unhappy customers is false.",
    # C T expanded
    "First-use delight creates a memory of value that loyalty programmes later try to deepen. When a product works well at the opening trial, buyers are more willing to return, recommend, and stay enrolled. Differentiation messages that overpromise then underdeliver reverse that path. Positioning for loyalty therefore begins with an experience that matches or exceeds the promise, not only with points maths after the fact. Delight on day one is a practical advantage for loyalty objectives, exactly as the statement says.",
    # D F standard
    "Customer satisfaction tracks how buyers feel about quality, service, and fulfilment of promises. Gross profit is an accounting margin on sales. They are different measures used for different decisions. Equating satisfaction with gross profit collapses a marketing outcome into a financial line item it is not.",
    # E F compact
    "Growing and mature markets also set satisfaction targets so complaints stay low and repeats rise. Declining markets are not a special licence. Limiting satisfaction objectives to declining conditions invents a restriction the chapter does not use.",
]

BODIES["CASE 5.2.16"] = [
    # A F compact
    "Satisfaction reduces switching risk but never locks buyers permanently. A rival with a clearer unique selling proposition can still win them over. \"Never switch\" overstates how far a good experience binds a customer when a stronger USP appears.",
    # B F standard
    "Maximising production volume measures output, not whether buyers feel promises were kept. Satisfaction objectives watch complaint rates, repeats, and perceived value. Flooding the bakery with extra loaves does not fulfil those buyer-facing goals by itself. Volume and satisfaction are separate targets.",
    # C F expanded
    "A unique selling proposition highlights a difference buyers care about: fresher ingredients, a signature recipe, or reliable delivery windows. Identical features on every rival product would erase uniqueness, not create it. USP language exists precisely because offerings are not the same on every attribute. Calling USP a synonym for total identity reverses the idea. The bakery's tracking of promotional responses and repeats assumes some meaningful difference that can be communicated and tested.",
    # D T standard
    "A trial promotion can lift short-run sales, yet a poor first experience after the offer converts those trials into lost trust. Dissatisfaction after the campaign undoes the temporary volume gain. That sequence matches how the statement links post-trial dissatisfaction to reversed campaign results.",
    # E T compact
    "Satisfaction objectives push the firm to deliver the differentiation story it advertised. If messaging promised freshness or service speed, operations must meet that bar. The objectives therefore encourage delivery of what was promised.",
]

BODIES["CASE 5.3.01"] = [
    # A F compact
    "Product orientation begins with the offering and its specs, then turns to selling. Starting with a needs analysis is the market-oriented sequence, not the product-oriented one. The claim swaps the two opening moves.",
    # B T standard
    "Product-oriented firms invest first in what the item is: materials, design, technical features. Selling logic comes afterward, often with confidence that strong features will pull demand. That product-first, sell-later rhythm is exactly what the statement describes.",
    # C T expanded
    "Market orientation reverses the sequence. Managers research what customers need and want, then shape the product to those requirements. A fashion buyer surveying style preferences before commissioning lines follows that path. The analysis is not a late cosmetic step; it guides what gets made. Tailoring after listening is the core market-oriented move, and the statement states it cleanly.",
    # D T standard
    "Both orientations can chase the same headline goals, such as growth, share, or satisfaction. What differs is the starting point: specs first versus needs first. Identical objectives with different strategic beginnings are therefore possible.",
    # E T compact
    "Product-oriented success stories lean on feature quality and craftsmanship to win buyers. Heavy early reliance on product strength is characteristic of that orientation. The statement captures that reliance correctly.",
]

BODIES["CASE 5.3.02"] = [
    # A T expanded
    "Market-oriented firms watch shifting needs and wants continuously, so they can redesign offerings before rivals still locked into fixed specs notice the change. Anticipation is the timing advantage: earlier response when preferences move. Product-oriented competitors who perfect features first may learn of the shift only after sales slip. That earlier response edge is the advantage named in the statement, and it is why many businesses have tilted toward market orientation over recent decades.",
    # B F compact
    "Defining specifications first and checking buyer interest later is product orientation. Market-oriented firms analyse needs before locking specs. The claim assigns the wrong sequence to market orientation.",
    # C F standard
    "Orientation describes starting focus, not a mandatory split of every marketing objective. Two firms can both seek profitability or share while one begins with features and the other with needs. \"Always completely different objectives\" overstates the divide.",
    # D F standard
    "Product orientation emphasises feature quality; it does not discard quality for empty advertising. Aggressive ads without strong features would contradict the product-first logic. The claim invents a caricature rather than the chapter definition.",
    # E F compact
    "Market orientation studies changing needs precisely so firms can anticipate shifts. Focusing only on frozen current specs is the opposite stance. The claim denies the anticipation strength market orientation is known for.",
]

BODIES["CASE 5.3.03"] = [
    # A T compact
    "Suitable orientation depends on the product and how crowded the market is. A highly technical niche may reward product focus; a fashion-heavy field may reward market listening. No single orientation fits every setting by default.",
    # B F standard
    "Competitive intensity and product character change which starting point works better. Treating suitability as identical for every product ignores those conditions. A workshop crafting unique furniture faces different pressures than a mass fashion retailer surveying seasonal tastes.",
    # C T expanded
    "Even firms that invest heavily in internal development still need markets that will buy. Strong specs cannot rescue a product nobody wants. Customer expectations about fit, style, price, and service remain relevant while engineering proceeds. Neglecting those expectations invites inventory that sits unsold. The warning that markets must not be ignored during product emphasis is therefore sound, and many chapter examples stress that balance.",
    # D T standard
    "Customer relationship management aims at lasting ties across many purchases, not a one-off transaction mindset. Newsletters, coupons, and follow-up contact exist to keep the relationship alive between visits. Treating each sale as isolated would defeat that CRM purpose.",
    # E T compact
    "CRM databases store contacts so firms can mail or email newsletters, coupons, and product notes that invite another purchase. Retained data is the practical engine of that repeat encouragement.",
]

BODIES["CASE 5.3.04"] = [
    # A T standard
    "Detailed CRM profiles hold names, contacts, and purchase trails. Misusing that information damages trust and can break legal duties. Sensitive handling is therefore indispensable when profiles grow richer, not a decorative extra.",
    # B T compact
    "Loyalty cards and personal accounts usually require identifiable data in exchange for discounts. Shoppers often accept less anonymity to obtain those benefits. The trade is willing, not accidental.",
    # C F expanded
    "Strong specifications help selling stories, yet they do not licence a firm to ignore markets. Buyers still judge fit, timing, and value. A furniture workshop that perfects craftsmanship while skipping whether people want modular or traditional designs risks beautiful stock that sits idle. Markets and expectations remain binding even when product quality is high. The claim that specs alone allow total neglect of customers is false.",
    # D T standard
    "Purchase histories and preference signals let firms send relevant offers instead of generic blasts. Collecting buying-behaviour data for that tailoring is ordinary CRM practice. Personalised coupons and recommendations rest on those records.",
    # E T compact
    "Product orientation opens with production and features; customer needs get attention later in the selling stage. That initial emphasis on the product itself is the orientation's defining start.",
]

BODIES["CASE 5.3.05"] = [
    # A F compact
    "CRM is built for long-term relationships across repeated contacts, not for isolated one-sale thinking. Newsletters and coupons exist to bring people back. Calling CRM a single-transaction tool reverses its aim.",
    # B T standard
    "Market orientation puts needs and wants at the front of decisions about what to make and how to promote it. Production follows listening rather than leading it. That customer-first emphasis is the core of the orientation.",
    # C F expanded
    "CRM systems retain customer records precisely so later mailings and coupons can be sent. Immediate deletion after each purchase would erase the contact path the tools are designed to use. Loyalty programmes and seasonal offers depend on stored addresses and histories. The claim describes the opposite of how CRM databases operate. Without retained data, relationship continuity collapses.",
    # D F standard
    "Loyalty programmes accumulate personal details that must be handled carefully. Sensitivity is not optional window dressing when identifiable records sit in the system. Treating careful use as unnecessary understates the risk to trust.",
    # E F compact
    "Loyalty cards and personal accounts create identifiable records by design. Full anonymity cannot coexist with named accounts that track purchases for rewards. The \"always preserve anonymity\" claim is false.",
]

BODIES["CASE 5.3.06"] = [
    # A F compact
    "CRM routinely collects buying-behaviour data so offers can be tailored. Collection for marketing personalisation is a standard purpose, not a prohibited act. The claim invents a ban that blocks the practice CRM exists to enable.",
    # B F expanded
    "Orientation differences run through development focus: product-first specs versus needs-first design. Advertising slogans may differ as a side effect, but the strategic split is deeper than wording on posters. A product-oriented electronics maker engineers features before campaigns; a market-oriented bookshop stocks after reading sales patterns. Treating the contrast as slogan-only empties the chapter distinction.",
    # C F standard
    "Market orientation means shaping output around customer requirements, not around isolated engineering taste. Producing whatever engineers prefer without reference to buyers is closer to unchecked product focus. The claim reverses market orientation's meaning.",
    # D T compact
    "Over recent decades many firms have shifted from product-first habits toward market listening as competition and changing preferences intensified. That historical move is widely noted in the chapter discussion.",
    # E F standard
    "CRM increases contact between sales through mailings and offers meant to encourage return visits. Avoiding contact would undermine the relationship goal. The claim that CRM discourages repeats by silence is the opposite of practice.",
]

BODIES["CASE 5.3.07"] = [
    # A T compact
    "Product-oriented thinking often assumes strong features and quality will pull demand with limited early market research. \"A good product sells itself\" summarises that belief. The statement matches that selling logic.",
    # B T standard
    "Market orientation asks what customers need and want, then builds offers around those answers rather than around internal preferences alone. Isolation from buyer requirements would break the orientation. Alignment with customer demand is the point.",
    # C T expanded
    "Stored personal records let CRM teams contact people with relevant newsletters, coupons, or restock notes. Informed contact between purchases is how the system encourages another visit. Without retained data, the firm cannot personalise follow-up. Relationship continuity depends on that memory of who bought what. Encouraging return purchases through informed contact is therefore a central CRM outcome, exactly as stated.",
    # D T standard
    "As loyalty programmes expand, more identifiable data moves through marketing systems. Sensitivity around how that data is used has become a major topic for trust and compliance. The importance of careful handling rises with programme scale.",
    # E T compact
    "Tailored offers draw on purchase histories and account details so messages match individual preferences. Stored knowledge is the input; personalisation is the output.",
]

BODIES["CASE 5.3.08"] = [
    # A F compact
    "Discounts from loyalty programmes increase, not erase, the need for careful data handling. More personal records mean more sensitivity risk. Calling sensitivity irrelevant after discounts start is false.",
    # B T expanded
    "Market-oriented firms analyse requirements first, then tailor products. Product-oriented firms define specifications first, then work out how to sell. A furniture workshop investing in craftsmanship before researching modular versus traditional demand is acting in the product-oriented sequence. The contrast in starting points is the orientation definition itself. The statement pairs those sequences correctly and cleanly.",
    # C F standard
    "Believing a good product sells itself without studying needs is a product-oriented posture. Market-oriented businesses study needs before locking the offer. Assigning the \"sells itself\" belief to market orientation mislabels the firm.",
    # D F standard
    "Upfront needs analysis followed by tailored products is market orientation. Product-oriented firms do not begin that way; they lock specs first. The claim assigns the market sequence to product-oriented firms.",
    # E F compact
    "Many businesses have moved toward market orientation, not abandoned it for a universal return to product focus. Claiming a complete reversal invents a trend that contradicts the chapter narrative.",
]

BODIES["CASE 5.3.09"] = [
    # A T compact
    "Two rivals can share profitability or share targets while one starts from features and the other from needs. Orientation choice and headline objectives are not forced to move in lockstep. Identical goals with different orientations remain possible.",
    # B F standard
    "Newsletters and coupons rely on stored emails, addresses, and purchase tags. Without personal records the messages cannot be targeted or even delivered. Claiming CRM mailings need no data contradicts how the systems work.",
    # C T expanded
    "Market-oriented rivals who watch shifting wants can redesign earlier. Product-oriented competitors refining internal specs may notice the same shift only after demand moves away. Timing of response is a practical difference between the orientations. Anticipation gives the market-oriented side a head start when preferences change. The statement's claim about later response from product-oriented competitors matches that timing logic.",
    # D T standard
    "Email newsletters and coupons keep contact alive between purchases by using retained customer data. That continuity is a deliberate CRM retention tactic, not a random blast without records.",
    # E T compact
    "Loyalty cards tie discounts to identifiable shoppers, showing a willing trade of anonymity for benefits. The exchange is visible every time a card is scanned for points.",
]

BODIES["CASE 5.3.10"] = [
    # A F compact
    "Many customers do surrender anonymity for loyalty discounts they find worthwhile. Calling every discount worthless and every surrender impossible ignores ordinary card and account sign-ups. The absolute wording fails.",
    # B F standard
    "Buying-behaviour data in CRM is gathered to tailor marketing offers, not merely to fill tax forms. Preference signals guide coupons and recommendations. Restricting the purpose to tax reporting misstates commercial use.",
    # C F expanded
    "Market-oriented competitors analyse needs early so they can respond sooner when wants change. Waiting for engineers to finish specs before considering buyers is closer to product orientation and tends to delay market response. Assigning later response to market orientation reverses the timing advantage discussed in the chapter. The claim is therefore false.",
    # D T standard
    "Purchase and browsing records reveal what individuals value, so promotional content can be matched accordingly. Tailoring rests on those behaviour trails. Matching content to likely value is a core CRM marketing use.",
    # E F compact
    "Product orientation places production and features first; needs follow later. Putting needs ahead at the initial stage is market orientation. The claim swaps the opening priorities.",
]

BODIES["CASE 5.3.11"] = [
    # A T expanded
    "Technically strong specifications can still fail if buyers' expectations about style, timing, or service have moved on. Neglecting those evolving expectations leaves a polished product without a matching market. CRM and market research exist partly to catch that drift. Success depends on fit with customers, not only on internal technical excellence. The warning that neglected expectations undermine success is therefore right.",
    # B F compact
    "Orientation is a strategic choice, not a legal mandate that forces every firm in a sector into market orientation. Product-oriented and market-oriented businesses can coexist in one industry.",
    # C T standard
    "Market-oriented businesses analyse needs first, then tailor products, so customer focus leads final specification choices. That order places the buyer ahead of locked internal specs. The statement describes the sequence accurately.",
    # D T standard
    "Product-oriented businesses define the product and its specifications internally before detailed selling plans. Selling thoughts arrive after the offering is set. That delayed selling focus is characteristic of the orientation.",
    # E T compact
    "Sensitive personal-data handling protects trust that long-term CRM relationships need. Careless use would erode the very continuity the system tries to build. Sensitivity therefore supports sustainable CRM.",
]

BODIES["CASE 5.3.12"] = [
    # A T compact
    "CRM builds long-term relationships partly by mailing or emailing product information that invites another visit. Contact between purchases is intentional relationship work, not noise.",
    # B T standard
    "Registering a personal account typically means sharing identifiable details. Customers often accept that reduction in anonymity because loyalty schemes deliver discounts and special offers they value. The trade is familiar in retail CRM.",
    # C T expanded
    "A bookshop reading category sales before choosing new titles uses buying-behaviour evidence to stock what readers are likely to want. Broader CRM practice similarly collects customer and purchase data so offers can be personalised. Tailoring after data collection is how preferences become concrete promotions. Without those records, personalisation collapses into generic messaging. The statement correctly links data collection to tailored offers.",
    # D F standard
    "Long-term CRM relationships rely on ongoing communication; automatic silent return is not assumed. Newsletters and coupons exist because contact matters. Claiming no communication is required contradicts CRM design.",
    # E T compact
    "Whether product or market orientation fits better depends on product type and competitive conditions. No fixed rule assigns one orientation to every firm forever.",
]

BODIES["CASE 5.3.13"] = [
    # A F compact
    "Commercial CRM programmes hold personal data for marketing contact, so sensitivity matters for private firms as well as agencies. Limiting the topic to government alone is wrong.",
    # B T standard
    "Product orientation centres production and feature development before detailed external needs work. Customer analysis comes later relative to that internal start. The statement names that sequencing correctly.",
    # C F expanded
    "Shared marketing objectives such as growth or satisfaction do not prove shared orientation. One firm may begin with specs while another begins with surveys, yet both chase the same headline target. Identical goals leave room for different starting points. Treating matching objectives as proof of matching orientation collapses two separate choices into one. The claim is false.",
    # D F standard
    "Market-oriented firms often collect customer data precisely because customer focus requires evidence about needs and wants. Data collection supports, rather than contradicts, that focus. The claim invents a contradiction.",
    # E F compact
    "Product-oriented businesses still advertise to communicate features; they do not ban promotion. Assuming buyers will discover everything without any advertising overstates product-first logic.",
]

BODIES["CASE 5.3.14"] = [
    # A T compact
    "Market orientation puts customers' needs and wants at the front when shaping the offer. Production and promotion follow that reading of demand. The foregrounding of the customer is the orientation's signature.",
    # B T standard
    "Coupons aimed at registered customers are a classic CRM retention tactic meant to pull another purchase. Retention tools sit alongside newsletters and product updates. The statement correctly places coupons in that toolkit.",
    # C T expanded
    "CRM systems keep identifiable contacts so firms can reach people again with offers and information. Because those records name individuals, personal-data sensitivity is unavoidable. Trust depends on careful use of what loyalty and account programmes store. Sensitivity is not a side topic; it follows from how CRM contact works. The statement links sensitivity to retained identifiable information accurately.",
    # D F standard
    "Loyalty programmes typically require identification to award discounts. They do not force anonymity; they trade anonymity for benefits. Claiming programmes force unidentified status reverses the usual design.",
    # E T compact
    "When needs and wants begin to change, market-oriented firms that already listen can respond earlier. That timing edge is a recognised advantage of the approach.",
]

BODIES["CASE 5.3.15"] = [
    # A T standard
    "Product-oriented firms stake success mainly on feature quality rather than on continuous market adaptation. The selling story leans on what the product is. That bet on features matches the orientation's emphasis.",
    # B T compact
    "Registered loyalty programmes show customers accepting less anonymity to obtain price benefits. Sign-up and card use make the trade visible. The illustration in the statement is accurate.",
    # C F expanded
    "Tailored offers exist because CRM stores individual preference and purchase signals, not only industry-wide aggregates. Personalisation would be impossible if only sector averages were kept. Account-level histories drive which coupon or product note a customer receives. Claiming tailored offers ignore personal preferences because only aggregates are stored contradicts CRM practice. The statement is false.",
    # D F standard
    "Even advanced specifications do not justify neglecting customer expectations. Markets still decide whether the technical package fits. Recommending neglect when specs are strong is poor advice and contradicts the chapter warning.",
    # E F compact
    "CRM aims at ongoing relationships across many contacts, not at a single campaign with no continuity. Equating CRM with one short promotion erases its long-term purpose.",
]

BODIES["CASE 5.3.16"] = [
    # A T expanded
    "Stored histories of interests and purchases let firms email product information that matches what someone already cared about. A consumer-electronics maker that later designs campaigns around features can still use CRM memory to target likely buyers. Alignment with prior interests raises relevance and response odds. Without stored histories, messages stay generic. Enabling tailored email from those records is exactly what the statement describes.",
    # B F compact
    "Personal accounts and loyalty cards routinely record buying behaviour for later marketing contact. Denying that recording function misstates how the tools work.",
    # C F standard
    "Market orientation emphasises needs and wants; it does not delete product quality from the agenda. Offers still must perform. Claiming only opinions matter and quality is irrelevant caricatures the orientation.",
    # D F standard
    "Product orientation centres production and features; it does not ignore production for service scripts alone. The claim reverses the orientation's focus entirely.",
    # E T compact
    "Both orientations may seek customer satisfaction as an objective, yet product orientation still locks specifications before detailed selling. Shared goals do not erase that sequencing difference.",
]

BODIES["CASE 5.4.01"] = [
    # A T compact
    "Firms do not only answer existing demand; continuous product launches and advertising can create new wishes. Marketing activity shapes wants as well as serving them. The statement names that creative role correctly.",
    # B T standard
    "Some advertising informs fairly; other campaigns manipulate through misleading pressure or exploitation. When persuasion crosses into manipulation, practice is regarded as unethical. The chapter treats that distinction as real, not optional.",
    # C T expanded
    "Easy checkout paths, credit offers, and constant promotion can push households past what their budgets can sustain. Many people then spend more than they can afford, not because prices alone jumped, but because marketing lowered friction and raised desire. Unplanned extras accumulate into financial strain. Recognising that channel-and-message push is part of marketing responsibility. The statement links overspending to marketing and easy purchasing correctly.",
    # D T standard
    "Shoppers often leave with more than the list they wrote. Promotional messages trigger add-ons beyond the original plan. Intention and checkout totals diverge when persuasion works. That pattern is ordinary in retail settings.",
    # E T compact
    "People frequently buy items they do not really need and later leave them unused. Wardrobes and cupboards filled with barely used goods illustrate that pattern of weak lasting purpose.",
]

BODIES["CASE 5.4.02"] = [
    # A T standard
    "Short-lived goods discarded after brief use show overconsumption in action. Cheap seasonal fashion worn a few times then thrown away is a clear case. The statement's illustration matches that pattern.",
    # B T compact
    "Marketing responsibility discussions treat greater awareness of sustainable production and consumption as desirable for firms and households alike. Both sides are asked to take the topic seriously.",
    # C T expanded
    "Consuming too much can strain household budgets, fill storage with unused items, and raise environmental costs from production and disposal. Responsible businesses and consumers are expected to recognise those risks when they plan production and purchases. Awareness is presented as a shared duty, not a niche hobby. Ignoring the risks leaves volume-driven habits unchallenged. The statement correctly frames potential risks as something both sides should see.",
    # D F standard
    "Businesses also influence wishes through new products and advertising; they do not only respond to fixed existing needs. Continuous launches and campaigns create demand. The \"never influence\" claim is false.",
    # E F compact
    "Higher sales and feature information do not automatically make advertising ethical. Manipulation can raise sales while remaining unfair. Ethics depends on how persuasion is done, not only on whether volume rises.",
]

BODIES["CASE 5.4.03"] = [
    # A T compact
    "Responsibility discussions expect businesses and consumers to act more sustainably rather than chasing volume alone. Shared duty replaces a pure sales-maximising mindset. The statement states that expectation correctly.",
    # B T standard
    "Computers and similar equipment should be used longer and repaired at the first fault when feasible, instead of immediate replacement. Extending service life cuts waste from premature upgrades. The advice is a concrete sustainability practice.",
    # C T expanded
    "Repair and reuse stretch the useful life of durable goods, delaying the resource cost of new production. Premature replacement purchases add waste even when the old unit could still work after maintenance. Sustainability arguments therefore favour fixing and reusing over discarding at the first inconvenience. Households and firms that repair support that longer-life path. The statement links repairing and reusing to extended life and fewer early replacements accurately.",
    # D F standard
    "Overconsumption is not limited to wealthy households. Modest-income shoppers can also buy short-lived goods they barely use when promotions push extras. Restricting the problem to the rich alone is false.",
    # E T compact
    "More consumers favour higher-quality garments with longer expected use over cheap clothes discarded after a few months. That shift away from throwaway fashion is part of the sustainability discussion.",
]

BODIES["CASE 5.4.04"] = [
    # A T standard
    "High-quality clothes that stay in good condition can be given to friends or exchanged, extending use without a new factory purchase. Sharing and passing on stretch the garment's life. The statement describes that extension correctly.",
    # B F compact
    "Promotional messages routinely alter purchasing intentions; shoppers often spend beyond the amount they first planned. Claiming consumers always stick exactly to the initial plan denies that influence.",
    # C F expanded
    "Not every purchase reflects a genuine long-term need destined for extended use. Impulse buys and fashion trials often sit unused or are discarded quickly. Treating all purchases as lasting-need fulfilment ignores overconsumption patterns the chapter criticises. Short-use goods and unused wardrobe items are counterexamples. The absolute claim is therefore false.",
    # D T standard
    "Renting high-quality clothes for one event can beat buying inexpensive outfits that will rarely be worn again. Temporary access matches infrequent need without ownership waste. The preference stated is a recognised sustainable alternative.",
    # E F compact
    "Sustainable production is a shared duty; businesses cannot shrug it off while maximising short-term sales alone. Placing responsibility solely on consumers misreads the chapter's two-sided ask.",
]

BODIES["CASE 5.4.05"] = [
    # A T compact
    "Garment rental lets consumers wear quality pieces for a short need without buying cheap items destined for brief use. Temporary access substitutes for ownership of rarely worn clothes. That model matches the statement.",
    # B T standard
    "Firms that only stimulate demand can push people to buy more even when they already have enough. Volume-driven promotion feeds overconsumption. Focusing solely on stimulation without regard to sufficiency is the risk named here.",
    # C T expanded
    "Sustainable production asks businesses to look past the next sale toward longer-run consequences for waste, trust, and resource use. Developing and marketing products with only immediate volume in mind can ignore those effects. Responsibility means weighing how offers are made and how long goods stay useful. Consequences beyond the checkout are part of the production decision. The statement's requirement to consider those wider effects is correct.",
    # D F standard
    "Repair is sometimes cheaper and more sustainable than replacement; cost is not always higher for fixing. Immediate replacement is not the only rational path. The absolute cost claim fails.",
    # E T compact
    "Advertising-driven impulse buys can strain budgets and fill storage with unused products. Financial and clutter costs follow unplanned extras. That household outcome is a recognised overconsumption risk.",
]

BODIES["CASE 5.4.06"] = [
    # A T standard
    "Ethical advertising sits inside responsible business conduct on the sustainability agenda. Fair persuasion is treated as part of how firms should behave, not as an optional extra. The statement places ethics correctly in that frame.",
    # B T expanded
    "Maintaining repairable equipment extends product life and avoids the waste of discarding units that still work after service. Swapping for newer models at the first fault raises disposal and production costs without necessity. Clothing-swap logic for garments has a parallel in keeping machines usable through maintenance. Waste falls when life is extended. The statement's comparison of maintenance versus discard for newer models is therefore sound.",
    # C T compact
    "Consumers who ask whether an advertised product is truly needed make more sustainable purchasing choices. Questioning desire before checkout reduces impulse waste. That contribution is real.",
    # D T standard
    "Clothing rental and similar access models earn revenue from temporary use instead of pushing ownership of rarely worn items. Firm income aligns with short-term access. That alignment matches the statement.",
    # E T compact
    "Campaigns that create new desires can pull spending away from priorities people held before they saw the ads. Distorted priorities are a recognised marketing responsibility concern.",
]

BODIES["CASE 5.4.07"] = [
    # A T compact
    "Low-price clothes expected to last only briefly and then be thrown away exemplify overconsumption in apparel. Throwaway patterns are the case the statement names. The label fits.",
    # B T standard
    "Responsible businesses may restrain promotions that exploit vulnerabilities and push spending past what households can afford. Limits on those techniques are part of ethical marketing. The statement describes that restraint correctly.",
    # C T expanded
    "Refurbishment returns equipment to usable condition so durable goods stay in circulation instead of heading early to disposal. Circular use depends on such programmes alongside repair. Consumers gain working products without always buying new; firms reduce waste streams. Supporting circular use through refurbishment is a concrete sustainability practice. The statement links those programmes to circular use accurately.",
    # D T standard
    "When people exchange quality garments, they meet clothing needs without parallel demand for new cheap alternatives among the group. Social exchange substitutes for some new purchases. Reduced parallel demand is the economic effect described.",
    # E T compact
    "Promotions that push households past planned spending show marketing widening the gap between intention and outcome. Checkout totals exceed the list. That illustration is familiar and correct.",
]

BODIES["CASE 5.4.08"] = [
    # A T standard
    "Sustainability-oriented consumers prefer durable, repairable goods over disposable items built for early disposal. Longevity and repairability guide those choices. The preference stated matches that orientation.",
    # B T compact
    "Renting premium apparel for events reduces the incentive to buy single-use low-quality outfits for occasional wear. Temporary access covers the occasion without ownership waste.",
    # C T expanded
    "Awareness of consumption risks is framed as necessary for producers and end consumers when they evaluate market behaviour. Both sides are asked to see how overbuying, short use, and volume push create costs. Without that awareness, responsibility discussions have no shared starting point. Producers shape offers; consumers shape purchase discipline. Presenting awareness as necessary for both is exactly the chapter stance.",
    # D F standard
    "Renting can be more sustainable than buying the cheapest single-event garment that will barely be worn again. \"Always less sustainable\" denies that common comparison. The absolute claim is false.",
    # E F compact
    "Durability still interests many consumers; cheap disposable clothing is not the only apparel trend. Quality and sharing trends coexist with fast fashion. The \"only trend\" claim fails.",
]

BODIES["CASE 5.4.09"] = [
    # A T expanded
    "Sharing arrangements let several people meet an infrequent need with one durable unit instead of each buying new. Tools, formal wear, or similar goods fit that pattern. Resource use falls when ownership is not duplicated for rare occasions. Product-sharing therefore satisfies needs without a new unit for every user. The statement describes that efficiency correctly.",
    # B T compact
    "Immediate replacement of machines that could be repaired conflicts with advice to extend life through maintenance and parts renewal. Repair-first guidance is the sustainable path named here.",
    # C F standard
    "Passing clothes to friends helps extend use, yet businesses still must consider sustainable production. Consumer sharing does not erase producer responsibility. The claim that passing on eliminates any business duty is false.",
    # D F standard
    "Ethical advertising can mention genuine benefits while remaining fair. Persuasion is not automatically manipulative. Banning all benefit claims would empty informative marketing. The absolute definition fails.",
    # E T compact
    "Continuous product launches feed a culture of wanting more than established needs require. Novelty itself becomes a pull. That contribution to excess wanting is what the statement asserts.",
]

BODIES["CASE 5.4.10"] = [
    # A T standard
    "Unplanned purchases that break affordable limits can leave households under financial stress. That stress is the economic consequence of overspending relative to means. The statement links the outcome to the cause correctly.",
    # B F compact
    "Marketing activity helps create and shape consumer wants; demand is not fixed independently of promotion and product launches. Claiming businesses have no role erases that influence.",
    # C F expanded
    "Even inexpensive goods create risks when consumed in excess: budget strain, clutter, and environmental costs from production and disposal. Low replacement prices do not erase those risks. Overconsumption remains a responsibility topic whether or not items are cheap to replace. The claim of \"no risks\" when prices are low is false.",
    # D F standard
    "Sustainability often favours repair when feasible rather than automatic immediate replacement. Feasibility of repair matters. Always requiring replacement regardless of repair options contradicts that advice.",
    # E F compact
    "Garment rental can cut waste from cheap single-use event outfits outside luxury niches as well. Limiting rental's waste-reduction role to luxury markets alone is false.",
]

BODIES["CASE 5.4.11"] = [
    # A F compact
    "Marketing responsibility does not require freezing all new product development. Firms can innovate while still advertising ethically and avoiding pure volume push. Stopping every launch is an extreme misreading of responsibility.",
    # B F standard
    "Promotional influence, not only price rises, can push consumers past affordable limits. Easy offers and persuasive messages matter. Claiming excess spending happens only via price increases denies marketing's role.",
    # C T expanded
    "Choosing quality apparel supports longer wear and makes informal circulation to friends or swaps more realistic than rapid disposal after a few months. Durability turns clothing into something that can travel between users. Throwaway cheap fashion blocks that path. Quality-focused choices therefore align with longer use and sharing rather than brief ownership then trash. The statement captures that support correctly.",
    # D F standard
    "Unused purchases sitting in wardrobes show that advertising often stimulates new wants beyond existing needs. If ads only informed fixed needs, those idle goods would be rarer. The \"only informs\" reading is false.",
    # E T compact
    "Supporting longer product life and avoiding purely volume-driven promotion are ways businesses contribute to sustainability. Those practices match the responsibility agenda better than endless push for more units alone.",
]

BODIES["CASE 5.4.12"] = [
    # A F compact
    "Durable high-quality clothing can be shared or passed on precisely because it remains usable. Durability enables transfer; it does not prevent it. The claim reverses the practical link between quality and sharing.",
    # B T standard
    "Unethical advertising damages trust and clashes with expectations of fair, responsible business practice. Manipulation undercuts the relationship firms claim to build. The conflict named in the statement is real.",
    # C F expanded
    "Sustainable consumption favours longer use and careful replacement when items are worn out; it does not demand that every product be kept forever. Worn-out goods may still be replaced responsibly. Absolute forever-keeping would freeze households in broken equipment and shredded clothes. The chapter's sustainability ask is about reducing wasteful turnover, not banning all replacement. The \"never replace\" claim is therefore false.",
    # D F standard
    "Green labels alone while unlimited volume promotion continues do not meet sustainability goals. Practices must change, not only messaging. Advertising virtue without restraint fails the responsibility test.",
    # E T compact
    "Purchases without lasting purpose often sit unused, showing waste tied to marketing-stimulated wants. Idle goods are the visible leftover of that stimulation. The demonstration in the statement holds.",
]


def main() -> None:
    data = json.loads(PATH.read_text())
    ids = [c["case_id"] for c in data[SLICE]]
    missing = [cid for cid in ids if cid not in BODIES]
    if missing:
        raise SystemExit(f"missing bodies for {missing}")
    extra = sorted(set(BODIES) - set(ids))
    if extra:
        raise SystemExit(f"extra bodies {extra}")

    for c in data[SLICE]:
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
    print(f"Wrote explanations for {ids[0]} .. {ids[-1]} ({len(ids)} cases)")


if __name__ == "__main__":
    main()
