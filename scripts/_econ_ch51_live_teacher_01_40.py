#!/usr/bin/env python3
"""Live-teacher rewrite for CASE 5.1.01–CASE 5.1.40 tactical_explanations."""
from __future__ import annotations

import json
import re
from pathlib import Path

PATH = Path("/workspace/src/data/economics-cases-ch5-subtopics.json")
FROM_ID, TO_ID = "CASE 5.1.01", "CASE 5.1.40"

# Hand-crafted live-teacher explanations. Body lengths mix compact/standard/expanded.
# Closers match answer_key. 0–2 Note: blocks per case. Unique openings within each case.

REWRITES: dict[str, list[str]] = {
    "CASE 5.1.01": [
        """Marketing’s product definition is deliberately wide: every good and every service that can be exchanged to meet customer wishes and needs. The claim truncates that to physical goods alone and pushes services outside the fence. That is not how the chapter draws the line.

A paid maintenance visit, a consultancy hour, or a cloud support ticket still counts as a product once it is traded. Excluding services would hollow out half of modern marketing catalogues.

Note: do not treat “product” as a synonym for “physical SKU” — intangibles sit inside the same definition when exchange is present.

So the statement is False.""",
        """In marketing language a product is every good and/or service that can be exchanged to fulfil customers’ wishes and needs. Merchandise on a shelf and a service appointment on a calendar both qualify once that exchange is on the table. The definition is purpose-and-trade, not shape-and-weight.

Walk a bakery: bulk flour sacks and a paid recipe-advice call are both products under that rule. Calling only the sack a product would misread the chapter’s opening definition.

So the statement is True.""",
        """Producer versus consumer turns on who buys, not on whether the item left a factory. A printer sold to another firm is a producer product; the same model sold to a household is a consumer product. Factory origin does not decide the label.

If that were true, every manufactured item would freeze as “producer” forever, which collapses the B2B/B2C distinction the chapter teaches.

So the statement is False.""",
        """Retail packaging size does not define a consumer product. Household versus business buyer does. A small bag sold to a supermarket shopper can be consumer; a bulk sack sold to a restaurant can be producer — packaging is not the test.

Picture the bakery’s flour line: the 1 kg retail bag and the 25 kg catering sack are classified by who pays the invoice, not by how many centimetres of plastic wrap they wear.

So the statement is False.""",
        """Households are visible printer users, but that does not freeze every printer as a consumer product. An office printer bought by a logistics firm is a producer product; the identical model sold for home use is a consumer product. “Always” fails the buyer test.

Here is the catch: visibility of end users is not the classification rule. Who purchases in this transaction is.

So the statement is False.""",
    ],
    "CASE 5.1.02": [
        """Manufacturer supply chains do not lock a printer into the producer-product box. Sold to a private household for home use, that printer is a consumer product even though a factory made it for commercial distribution.

If “produced for commercial supply chains” were enough, every factory-made good would stay producer forever — and the household channel would disappear from the taxonomy. The chapter refuses that freeze.

So the statement is False.""",
        """Marketing’s product idea is simple and oral-exam ready: any good or service offered through exchange to satisfy customer wishes and needs. Once that trade happens, the offering enters the product set — tangible or not.

A printer on a desk and a remote support hour on an invoice both pass the same gate.

So the statement is True.""",
        """Tangible goods and intangible services both qualify once they are exchanged with customers. A printer and a support contract can each be products under that rule. Form does not eject the offering; missing exchange would.

In class we would put a laptop and a software-update subscription side by side and ask the same question: was it traded to meet a need? If yes, both are products.

So the statement is True.""",
        """Introductory marketing treats other businesses and private households as legitimate customers of products. B2B and B2C are both inside the frame. Restricting “customer” to households alone would erase producer products from the map.

A corporate IT desk and a family shopping for a home machine are both customers in this terminology.

So the statement is True.""",
        """Producer products are the goods and services one business sells to another in business-to-business exchange. That firm-to-firm trade — flour sacks to restaurants, printers to offices, support contracts to clinics — is the producer side of the catalogue.

Household retail is the other lane. The statement correctly parks producer products on the B2B lane.

Note: “producer product” names the buyer relationship, not “something a producer made.”

So the statement is True.""",
    ],
    "CASE 5.1.03": [
        """Consumer products are goods and services sold to consumers or private households in business-to-consumer exchange. That is the B2C lane in plain words: the buyer is a household or individual consumer, and the offering is traded to meet their wishes and needs.

A home printer, a residential support visit, or a small retail flour bag all sit here when that buyer profile holds.

So the statement is True.""",
        """Lack of physical form does not eject computer support from the product set. When support is sold to customers, marketing still calls it a product — service form, not an exception. The trap is equating “product” with “thing you can drop on your foot.”

Picture a household paying for remote PC help: nothing tangible ships, yet the exchange fulfils a need, so the chapter still labels it a product.

Note: intangibility changes delivery, not product status.

So the statement is False.""",
        """Business-to-business marketing is the channel that carries producer products between firms. When one company invoices another for equipment, materials, or support, you are in B2B and the items are producer products.

The bakery selling bulk flour to restaurants is living that channel, not the supermarket aisle.

So the statement is True.""",
        """Business-to-consumer marketing is the channel that carries consumer products to private households. Shoppers, residents, and individual buyers — not other firms — sit on that side of the desk.

Evening retail bags of flour and a home printer purchase are classic B2C moves under this reading.

So the statement is True.""",
        """Buyer use decides the label. A printer bought for office operations by a business is a producer product even when an identical home model sits in the catalogue. Matching SKUs do not force matching classifications.

If that twin in the consumer brochure could re-label the office sale, the chapter’s buyer test would collapse. It does not: office invoice → producer product.

So the statement is True.""",
    ],
    "CASE 5.1.04": [
        """Free after-sales advice may help the customer, but without payment or another form of exchange it is not a marketed product in this chapter’s sense. Satisfaction alone does not create product status.

Walk the bakery counter: a complimentary tip on how to store flour is goodwill, not a traded product. Charge for a consulting session and the same advice becomes a product because exchange appears.

Note: “helpful” ≠ “product”; exchange is the missing piece in the claim.

So the statement is False.""",
        """Private home use puts a printer in the consumer-product category, even when offices buy the same model as a producer product. The machine can wear two labels across two invoices without changing its screws.

That dual life is exactly what the buyer test allows — household invoice means consumer product.

So the statement is True.""",
        """Computer support sold mainly to private households is a consumer product delivered as a service. Intangibility does not push it into some non-product bin; B2C exchange keeps it on the consumer side of the map.

A weekend home-visit fix billed to a family is the classroom picture here.

So the statement is True.""",
        """Moving office supplies between departments inside one company is an internal transfer, not a market exchange with an outside customer. That move is not a product in the marketing sense.

No external buyer, no marketed product — just stock shifting on the same balance sheet. The bakery sending flour from the packing room to its own café is the same idea.

So the statement is False.""",
        """Computer support sold to other businesses is a producer product in service form — firm-to-firm exchange. A clinic or restaurant paying for IT help is buying a producer product even though nothing physical arrives on a pallet.

Services inherit the same B2B/B2C split goods do; the claim gets that right for the business channel.

So the statement is True.""",
    ],
    "CASE 5.1.05": [
        """B2B and B2C name the customer relationship, not the production technology on the factory floor. Who purchases — firm or household — sets those labels. CNC machines versus hand tools never decide the marketing channel tag.

If technology were the test, two identical printers could not sit in opposite channels, yet they do once buyers differ.

So the statement is False.""",
        """Exchange is required before marketing treats a good or service as a product. Desire without a trade is not enough. A neighbour who “really wants” your spare printer has a wish; until something is exchanged, the chapter withholds the product label.

That gatekeeping is deliberate: marketing products live in markets, not in daydreams.

So the statement is True.""",
        """A maintenance contract exchanged to fulfil customer needs is a product even though it is a service. The purpose-and-exchange test does not demand a physical shell.

Households and firms both buy such contracts; each sale still counts as a product under the definition.

So the statement is True.""",
        """Equipment and materials count as products when they are exchanged to fulfil customer wishes and needs. A lathe sold to a workshop, toner sold to an office, or flour sold to a baker — goods pass the same gate services do once trade and purpose line up.

Tangibility helps logistics; it is not a special exemption from the definition.

So the statement is True.""",
        """A corporate client buying a printer for commercial use is another business, so the sale is a producer product. The purchaser identity — business operating commercially — is the whole reason for that label.

Picture the invoice headed to a logistics HQ rather than a flat share: producer product, not consumer, even if the box looks identical on the shelf.

Note: end-user humans inside the firm do not reclassify the B2B purchase as consumer.

So the statement is True.""",
    ],
    "CASE 5.1.06": [
        """A private household or individual consumer purchasing a printer places that sale in the consumer-product category. The buyer is not a firm; the use is personal or domestic; the channel is B2C. That is the clean classification the statement gives.

So the statement is True.""",
        """One printer design can be billed as a producer product to a corporate client and as a consumer product to a household. The buyer in that transaction flips the label without redesigning the machine.

Walk two invoices for the same SKU: office fleet purchase versus a Saturday home buyer. Same chassis, opposite product categories — exactly what the chapter allows.

So the statement is True.""",
        """Firm-to-firm exchange of a printer with a corporate client is business-to-business, and the item is a producer product. The marketing channel and the product category move together once the purchaser is another business.

That pairing is the B2B half of the taxonomy, stated correctly here.

So the statement is True.""",
        """Firm-to-household exchange of a printer is business-to-consumer, and the item is a consumer product. Private-household purchaser plus personal use locks both the channel tag and the product category on the consumer side.

No corporate VAT number on the invoice means you are not in the producer lane.

So the statement is True.""",
        """Commercial operations for a corporate client put the printer among producer products, not among household consumer products. The firm is buying capacity for its own business, so marketing parks the sale on the producer side.

If someone pointed at “people eventually use it” to force a consumer label, they would be mixing ultimate human use with the buyer test — a classic trap the chapter avoids.

Note: commercial operations on a corporate invoice beat “looks like a home gadget” every time.

So the statement is True.""",
    ],
    "CASE 5.1.07": [
        """Other businesses are customers too. Producer products exist precisely because firms buy from firms. Claiming customers can only be private households erases the B2B half of marketing terminology in one stroke.

A restaurant buying flour, an office buying printers, a clinic buying support — those are customers under the chapter’s definition.

So the statement is False.""",
        """A gift with no exchange may please the recipient, but marketing reserves “product” for offerings traded with customers. Handing someone a free printer as a present does not turn that gift into a marketed product under the exchange test.

Fulfilment of wishes without a trade is generosity, not marketing product status. The chapter is strict on that gate.

Note: “they wanted it” is not a substitute for exchange.

So the statement is False.""",
        """Portability does not create a consumer product. A compact printer sold to an office is still a producer product; size is not the test. Being “small enough to carry home” is a logistics detail, not a classification rule.

If that were true, every laptop sold to a bank would flip to consumer the moment it fits in a backpack — absurd under the buyer test.

So the statement is False.""",
        """Personal or domestic use by a private household puts the printer in the consumer-product category rather than the producer category. That is the household lane stated cleanly: buyer type plus use type.

The office twin of the same model stays producer; the home invoice stays consumer.

So the statement is True.""",
        """Weight or bulk does not create a producer product. A heavy machine sold to a household for home use remains a consumer product; mass is irrelevant to B2B versus B2C.

Picture a bulky home printer on a flat share’s floor: still consumer. Picture a featherweight model on a corporate desk: still producer. Scale tips shipping costs, not the label.

So the statement is False.""",
    ],
    "CASE 5.1.08": [
        """Services sold only to businesses are producer products. Ultimate human beneficiaries do not re-label firm-to-firm exchange as consumer. Employees may enjoy the outcome, but the purchaser is still a firm.

The textile mill buying IT support for its looms is in the producer lane even though people run those looms.

So the statement is False.""",
        """A corporate client is a business buyer, so the printer is a producer product. Saying every sale “ultimately serves human needs” does not flip that B2B purchase into a consumer product.

That “ultimate human needs” line is a favourite exam trap: it sounds profound and erases the buyer test. The chapter keeps the test.

Note: ultimate beneficiaries ≠ purchaser identity.

So the statement is False.""",
        """Exchanging a printer to meet a corporate client’s operational needs creates a marketed product on the producer side. Trade plus operational purpose plus business buyer — that trio is the producer-product picture.

The mill’s office buying machines for shipping labels lives exactly there.

So the statement is True.""",
        """The seller being a business firm is true of almost every marketed offering. A private household buyer still makes that printer a consumer product, not a producer product. Seller type does not decide producer versus consumer.

If seller-is-a-firm were enough, every retail sale would be producer — which collapses the whole map.

So the statement is False.""",
        """Design can stay fixed while the buyer changes. Corporate sale → producer; household sale → consumer. One permanent label for all buyers fights that switch.

The textile mill’s remnant craft stall and its garment-factory rolls can even share cloth chemistry while wearing opposite product labels once buyers differ. Printers work the same way.

So the statement is False.""",
    ],
    "CASE 5.1.09": [
        """Exchanging a printer to meet a private household’s personal wishes places it among consumer products. Personal wishes, household buyer, exchange present — that is the consumer category in one breath.

So the statement is True.""",
        """Sold from one business to a corporate client for further commercial activity, the printer sits among producer products. Firm-to-firm trade for ongoing business use is the producer-product lane, stated correctly.

So the statement is True.""",
        """Manufactured physical form is not a gatekeeper. Services exchanged with customers are products too, and even for goods the exchange-and-need test is what matters. Claiming a printer is “not a product” unless it is manufactured physical goods misstates the definition — and would oddly eject support contracts sitting next to that printer in the same deal.

If that were true, half the catalogue would vanish the moment nothing arrives in a cardboard box.

Note: “manufactured physical good” is a subset of products, not the whole set.

So the statement is False.""",
        """Strong desire without exchange does not create a marketed product. The printer needs a trade with a customer. Lusting after a machine in a shop window is not enough for the chapter’s definition.

In class we would separate “I want it” from “I bought it / traded for it.” Only the second clears the product gate.

So the statement is False.""",
        """Sold to a private household for private consumption or domestic use, the printer is a consumer product. Domestic use plus household purchaser locks the consumer label without needing a special luxury or packaging story.

That is the home side of the identical-SKU split.

So the statement is True.""",
    ],
    "CASE 5.1.10": [
        """Whether the invoice goes to a corporate client (B2B) or a private household (B2C), an exchanged printer is still a product in marketing terms. Channel splits producer versus consumer; it does not eject the offering from the product set.

So the statement is True.""",
        """The same consultancy can book the printer under producer products for a corporate client and under consumer products for a private household. Buyer channel splits the catalogue row without inventing a new machine.

That dual listing is not sloppy bookkeeping — it is the taxonomy working as designed.

So the statement is True.""",
        """Fulfilment of customer wishes and needs is the purpose that turns an exchanged printer into a marketing product. Without that purpose-and-exchange pairing, you may have inventory, but you do not yet have a product in this chapter’s sense.

Office ops needs and home homework needs both count as purposes once trade happens.

So the statement is True.""",
        """Trading the printer with a corporate client or a private household creates exchange value when it satisfies identifiable demand on either side. Demand can be commercial or domestic; the trade still generates the exchange value the definition expects.

So the statement is True.""",
        """A manufacturing firm buying a computer for commercial use is another business, so that sale is a producer product. Purchaser identity — business operating commercially — carries the label.

Picture the factory’s CAD stations: identical looking PCs in a family living room would be consumer products; on the shop floor they are producer products.

Note: “computer” versus “printer” does not change the buyer test.

So the statement is True.""",
    ],
    "CASE 5.1.11": [
        """A computer sold to a family home is a consumer product because the purchaser is a private household or individual consumer. Domestic buyer, personal use context — consumer category, full stop.

So the statement is True.""",
        """Businesses absolutely have wishes and needs in marketing language: uptime, throughput, compliance, cost control. Excluding a printer sold to a corporate client because “businesses do not have wishes” invents a rule the chapter never wrote.

Corporate CRM and ops briefs are full of needs. Firm buyers stay inside the product definition.

Note: “wishes and needs” are not reserved for households.

So the statement is False.""",
        """Households buy products all the time — they are not stuck in a gift-only economy. Excluding a printer sold to a private household because “households only receive gifts” confuses birthday presents with market exchange.

A family paying at checkout is buying a consumer product, not receiving a gift.

So the statement is False.""",
        """The same computer may be marketed as a producer product in one transaction and a consumer product in another depending on the buyer. Manufacturing firm invoice versus family-home invoice — same chassis, opposite labels.

That flexibility is the point of buyer-based classification, not a bug.

So the statement is True.""",
        """A printer transferred internally between branches of one corporation is stock moving inside a single legal entity, not a marketed product sold to an outside customer. No external exchange, no marketing product status.

Think of HQ shipping spare printers to a regional depot: logistics, not a B2B sale.

So the statement is False.""",
    ],
    "CASE 5.1.12": [
        """When a firm exchanges a computer with a manufacturing firm, the transaction is business-to-business and the item is a producer product. Firm buyer, commercial exchange — B2B channel and producer category travel together.

The training academy’s corporate compliance workshop sits in the same logic: business customer, producer-side offering.

So the statement is True.""",
        """Marketing classifies a computer sold for commercial operations to a manufacturing firm as a producer product rather than a consumer product. Commercial operations on a firm invoice keep it off the household lane.

So the statement is True.""",
        """Marketing classifies a computer sold for personal or domestic use to a family home as a consumer product rather than a producer product. Personal use plus household purchaser is the consumer lane, stated cleanly.

Evening language courses sold to individual learners follow the same household-side pattern in the academy context.

So the statement is True.""",
        """A computer exchanged to fulfil the operational needs of a manufacturing firm counts as a product in the producer category. Operational needs are a legitimate purpose; the business buyer supplies the producer label.

If someone argued “only households have needs,” they would be wrong — factories have operational needs every day.

So the statement is True.""",
        """A computer exchanged to fulfil the personal wishes of a family home counts as a product in the consumer category. Personal wishes plus household exchange — consumer product without needing luxury branding or special packaging.

That is the home half of the academy’s dual catalogue: company staff workshops versus individual evening learners, same teaching idea applied to computers.

Note: personal wishes do not make the sale “not a product”; they place it on the consumer side.

So the statement is True.""",
    ],
    "CASE 5.1.13": [
        """B2B classification of a printer depends on the corporate client purchaser, not on the seller’s industry. A consumer-electronics brand can still run a B2B sale when another firm buys. Seller industry is a red herring.

If industry of the seller decided the channel, every electronics maker would be permanently B2C — which is false once corporate invoices appear.

So the statement is False.""",
        """Producer products include a computer when it is sold from one business to a manufacturing firm for further commercial activity. Firm-to-firm trade for ongoing business use is textbook producer-product territory.

So the statement is True.""",
        """B2C classification of a printer depends on the private household purchaser, not on colourful retail branding. Neon stickers and window displays do not create B2C; a household buyer does.

A dull grey box sold to a family is still B2C. A brightly branded unit sold to a corporate fleet can still be B2B.

Note: branding aesthetics ≠ channel classification.

So the statement is False.""",
        """Consumer products include a computer when it is sold to a family home for private consumption or domestic use. Domestic use plus household buyer locks the consumer label.

So the statement is True.""",
        """The marketing term product covers a computer whether the exchange is B2B with a manufacturing firm or B2C with a family home. Both channels host products; they simply split into producer versus consumer categories afterward.

One definition, two buyer lanes — that is the architecture.

So the statement is True.""",
    ],
    "CASE 5.1.14": [
        """Money changing hands does not automatically make a sale B2C. A printer sold to a corporate client is B2B because the purchaser is a business, even though payment occurs. Payment is common to both channels.

If “money moved” equalled B2C, every wholesale invoice would be mislabeled consumer.

So the statement is False.""",
        """A printer sold to a private household is B2C, not B2B, even when the seller is a registered company. Almost every retailer is a registered company; that fact does not drag household sales into B2B.

Seller registration is ambient noise; purchaser type is the signal.

So the statement is False.""",
        """Producer products are not limited to raw materials. A finished printer sold to a corporate client is still a producer product because another business bought it for commercial use. Finished goods sit comfortably in the producer set.

Flour sacks, assembled printers, support contracts — all can be producer products when firms buy them.

Note: “raw materials only” is a common false restriction.

So the statement is False.""",
        """Consumer products are not limited to luxury items. A routine printer sold to a private household is still a consumer product. Everyday goods dominate the consumer category; luxury is a style niche, not a definitional gate.

Calling only champagne and designer bags “consumer products” would empty the supermarket aisle from the taxonomy.

So the statement is False.""",
        """A consultancy may list a computer under producer products when invoicing a manufacturing firm and under consumer products when invoicing a family home. Same consultancy, same machine family, two catalogue rows driven by buyer context.

That dual listing is how professional services firms often mirror the chapter’s split in practice.

So the statement is True.""",
    ],
    "CASE 5.1.15": [
        """Fulfilment of customer wishes and needs is the purpose that makes an exchanged computer a product in marketing terminology. Purpose plus exchange — that pairing is the definition’s engine.

So the statement is True.""",
        """A printer becomes a product when it is exchanged to meet customer wishes and needs, not only after advertising creates demand. Ads may stimulate demand, but exchange — not the campaign — is what the definition requires.

A quiet B2B sale with no billboard can still be a full marketed product. An ad with zero trade creates no product status by itself.

Note: advertising can help demand; it does not replace exchange in the definition.

So the statement is False.""",
        """A computer sold to a manufacturing firm is a producer product, not a consumer product. “Every sale ultimately serves human needs” does not flip firm-to-firm exchange into the consumer category.

Workers may use the machines, but the purchaser is the firm — producer product stays.

So the statement is False.""",
        """A computer sold to a family home is a consumer product even though the seller is a business firm. Seller-is-a-business is nearly universal and cannot redefine household purchases as producer products.

If it could, B2C would vanish from textbooks.

So the statement is False.""",
        """The same computer need not keep one fixed product label for all buyers. Design can stay constant while the buyer flips the category: manufacturing firm → producer; family home → consumer.

“Design never changes” is true and irrelevant to classification.

So the statement is False.""",
    ],
    "CASE 5.1.16": [
        """A computer can be a product even when the discussion stretches to related services, and the “manufactured physical good only” gate is wrong for marketing’s product definition. Exchange and need fulfilment — not cardboard and screws — decide product status.

Support hours sold beside the machine are products too. Claiming “not a product unless manufactured physical” fights that breadth.

Note: physical manufacture describes many goods; it does not exhaust the product set.

So the statement is False.""",
        """Exchange value arises when a computer is traded with a manufacturing firm or a family home to satisfy identifiable customer demand. Commercial demand and household demand both count; both trades create exchange value under the chapter’s reading.

So the statement is True.""",
        """Exchange is not irrelevant. Strong desire without a trade still leaves you short of a marketed product. The computer must be exchanged with a customer.

In class we would say: wanting is motivation; exchanging is the product gate.

So the statement is False.""",
        """Marketing does not exclude a computer from products when sold to a manufacturing firm. Businesses have wishes and needs — capacity, reliability, cost — and firm purchases sit squarely inside the product definition as producer products.

The “businesses have no wishes” line is a trap, not a chapter rule.

So the statement is False.""",
        """Marketing does not exclude a computer from products when sold to a family home. Households buy products constantly; they are not limited to receiving gifts. A paid home computer is a consumer product.

Gift rhetoric erases the entire B2C market — which the chapter keeps firmly in view.

So the statement is False.""",
    ],
    "CASE 5.1.17": [
        """A desk sold to a logistics company is a producer product because the purchaser is another business operating commercially. Warehouse admin desks, dispatch benches, planning tables — firm buyer, commercial use, producer label.

So the statement is True.""",
        """A desk sold to a resident is a consumer product because the purchaser is a private household or individual consumer. Home study desks and dining-room writing tables sit on the consumer side once that buyer profile holds.

So the statement is True.""",
        """The same desk may be marketed as a producer product in one transaction and a consumer product in another depending on the buyer. Logistics-company invoice versus resident invoice — identical timber, opposite categories.

That dual path is the classification lesson applied to furniture instead of printers.

So the statement is True.""",
        """When a firm exchanges a desk with a logistics company, the transaction is business-to-business and the item is a producer product. Channel and category align on the business-buyer side.

So the statement is True.""",
        """Marketing classifies a desk sold for commercial operations to a logistics company as a producer product rather than a consumer product. Commercial operations on a firm invoice keep furniture in the producer lane just as they do for printers and computers.

If someone pointed at “people sit at desks” to force a consumer label, they would again confuse end use with purchaser identity — the familiar trap.

Note: seating humans does not convert a B2B furniture sale into B2C.

So the statement is True.""",
    ],
    "CASE 5.1.18": [
        """Marketing classifies a desk sold for personal or domestic use to a resident as a consumer product rather than a producer product. Domestic use plus resident buyer — consumer lane, cleanly stated.

So the statement is True.""",
        """A computer transferred internally between branches of one corporation remains inside one organisation. That is not a marketed product sale to an outside customer; it is an internal asset move.

No external exchange means the marketing product label does not apply, even if paperwork looks busy.

Note: internal logistics ≠ market exchange.

So the statement is False.""",
        """A desk exchanged to fulfil the operational needs of a logistics company counts as a product in the producer category. Operational needs are valid purposes; the business purchaser supplies the producer tag.

So the statement is True.""",
        """A desk exchanged to fulfil the personal wishes of a resident counts as a product in the consumer category. Personal wishes plus household exchange place furniture on the consumer side without needing a luxury story.

So the statement is True.""",
        """B2B classification of a computer depends on the manufacturing firm purchaser, not on the seller’s industry. A consumer brand can sell B2B; an industrial brand can sell B2C. Purchaser identity steers the channel tag.

Seller-industry shortcuts fail the moment mixed channels appear in the same firm’s order book.

So the statement is False.""",
    ],
    "CASE 5.1.19": [
        """Producer products include a desk when it is sold from one business to a logistics company for further commercial activity. Firm-to-firm furniture for ongoing operations is producer-product territory.

So the statement is True.""",
        """B2C classification of a computer depends on the family-home purchaser, not on colourful retail branding. Bright posters do not create B2C; a household buyer does.

A plain beige PC sold to a family is B2C. A neon-wrapped unit sold into a factory can still be B2B.

Note: shelf theatre ≠ channel rule.

So the statement is False.""",
        """Consumer products include a desk when it is sold to a resident for private consumption or domestic use. Resident buyer, domestic setting — consumer product.

So the statement is True.""",
        """The marketing term product covers a desk whether the exchange is B2B with a logistics company or B2C with a resident. Both trades host products; afterward they split into producer versus consumer categories.

One umbrella term, two buyer lanes.

So the statement is True.""",
        """A consultancy may list a desk under producer products when invoicing a logistics company and under consumer products when invoicing a resident. Catalogue rows follow buyer context, not timber species.

That dual listing shows the taxonomy working in ordinary commercial practice.

So the statement is True.""",
    ],
    "CASE 5.1.20": [
        """Fulfilment of customer wishes and needs is the purpose that makes an exchanged desk a product in marketing terminology. Without that purpose tied to exchange, you have wood in a warehouse, not a marketed product.

So the statement is True.""",
        """Exchange value arises when a desk is traded with a logistics company or a resident to satisfy identifiable customer demand. Commercial demand and household demand both generate exchange value once the trade happens.

So the statement is True.""",
        """A vehicle sold to a restaurant chain is a producer product because the purchaser is another business operating commercially. Delivery vans, catering trucks, staff shuttles — firm buyer, commercial use, producer label.

So the statement is True.""",
        """A vehicle sold to an individual consumer is a consumer product because the purchaser is a private household or individual consumer. Private motoring sits on the consumer side of the same metal.

So the statement is True.""",
        """The same vehicle may be marketed as a producer product in one transaction and a consumer product in another depending on the buyer. Restaurant-chain fleet order versus individual private sale — same model line, opposite categories.

That is the printer lesson rewritten for cars and vans, and it still holds.

Note: VIN sameness does not freeze the product label across buyers.

So the statement is True.""",
    ],
    "CASE 5.1.21": [
        """When a firm exchanges a vehicle with a restaurant chain, the transaction is business-to-business and the item is a producer product. Business purchaser plus commercial exchange — B2B and producer travel together.

So the statement is True.""",
        """Marketing classifies a vehicle sold for commercial operations to a restaurant chain as a producer product rather than a consumer product. Commercial operations on a chain invoice keep the van in the producer lane.

So the statement is True.""",
        """Marketing classifies a vehicle sold for personal or domestic use to an individual consumer as a consumer product rather than a producer product. Personal use plus individual purchaser — consumer lane.

So the statement is True.""",
        """A vehicle exchanged to fulfil the operational needs of a restaurant chain counts as a product in the producer category. Operational needs (deliveries, catering runs) are valid purposes; the chain as buyer supplies the producer tag.

So the statement is True.""",
        """A vehicle exchanged to fulfil the personal wishes of an individual consumer counts as a product in the consumer category. Personal wishes plus private purchase place the car on the consumer side without needing luxury branding.

If someone argued private cars are “not products” because they are wishes not ops needs, they would misunderstand — personal wishes are exactly how consumer products are framed.

Note: personal wishes are a purpose, not a reason to deny product status.

So the statement is True.""",
    ],
    "CASE 5.1.22": [
        """Money changing hands does not turn a manufacturing-firm computer purchase into B2C. The purchaser is a business, so the channel is B2B even though payment occurs. Payment is shared by both channels.

Wholesale wire transfers are not consumer checkout by another name.

So the statement is False.""",
        """A computer sold to a family home is B2C, not B2B, even when the seller is a registered company. Retailers are usually registered companies; that does not drag household sales into B2B.

Purchaser type beats seller registration every time.

So the statement is False.""",
        """Producer products are not limited to raw materials. A finished computer sold to a manufacturing firm is still a producer product because another business bought it for commercial use. Assembled equipment belongs in the producer set whenever firms buy it.

Note: finished goods can be producer products — raw-materials-only is a false fence.

So the statement is False.""",
        """Producer products include a vehicle when it is sold from one business to a restaurant chain for further commercial activity. Firm-to-firm vehicle sales for ongoing operations sit in the producer category by the buyer test.

So the statement is True.""",
        """Consumer products are not limited to luxury items. A routine computer sold to a family home is still a consumer product. Everyday machines dominate household purchases; luxury is optional, not definitional.

So the statement is False.""",
    ],
    "CASE 5.1.23": [
        """Consumer products include a vehicle when it is sold to an individual consumer for private consumption or domestic use. Private motoring, household buyer — consumer product.

So the statement is True.""",
        """A computer becomes a product when exchanged to meet wishes and needs, not only after advertising creates demand. Quiet sales without campaigns still clear the definition; ads without exchange do not create product status by themselves.

The trap swaps a demand-stimulant for the definition’s actual gate.

Note: ads can help; exchange still decides.

So the statement is False.""",
        """A desk sold to a logistics company is a producer product, not a consumer product. “Every sale ultimately serves human needs” does not re-label firm-to-firm furniture as consumer.

Dispatchers sit at those desks, yet the purchaser remains the logistics firm.

So the statement is False.""",
        """The marketing term product covers a vehicle whether the exchange is B2B with a restaurant chain or B2C with an individual consumer. Both channels host products; categories split afterward into producer versus consumer.

So the statement is True.""",
        """A consultancy may list a vehicle under producer products when invoicing a restaurant chain and under consumer products when invoicing an individual consumer. Buyer context splits the catalogue row for vans and cars just as it does for printers and desks.

So the statement is True.""",
    ],
    "CASE 5.1.24": [
        """Fulfilment of customer wishes and needs is the purpose that makes an exchanged vehicle a product in marketing terminology. Purpose plus exchange — that is the engine, for vans and private cars alike.

So the statement is True.""",
        """A desk sold to a resident is a consumer product even though the seller is a business firm. Seller-is-a-business cannot redefine household furniture as a producer product.

If it could, every IKEA sale would be B2B — nonsense under the chapter.

So the statement is False.""",
        """The same desk need not keep one fixed product label for all buyers. Design can stay fixed while logistics-company versus resident invoices flip producer versus consumer.

“Design never changes” is irrelevant to classification.

Note: fixed design ≠ fixed product category.

So the statement is False.""",
        """A desk is still a product when exchanged to meet needs; “manufactured physical good” is not a special exclusive gate that the definition demands in those words — and related services show the definition is wider than cardboard anyway. The claim’s “unless manufactured physical” fence misstates how marketing draws the product set.

Exchange and need fulfilment are the real tests.

So the statement is False.""",
        """Exchange value arises when a vehicle is traded with a restaurant chain or an individual consumer to satisfy identifiable customer demand. Fleet demand and private demand both count once the trade happens.

So the statement is True.""",
    ],
    "CASE 5.1.25": [
        """A software licence sold to a construction contractor is a producer product because the purchaser is another business operating commercially. Digital goods inherit the same buyer test as desks and vans.

So the statement is True.""",
        """Exchange is not irrelevant for a desk. Strong desire without a trade still fails the product gate. The desk must be exchanged with a customer.

Wanting a writing table is motivation; buying it (or otherwise trading for it) is what creates marketed product status.

Note: desire intensity never substitutes for exchange.

So the statement is False.""",
        """Marketing does not exclude a desk from products when sold to a logistics company. Businesses have wishes and needs — workspace, ergonomics, workflow — and firm purchases are producer products inside the definition.

The “no wishes” line is a trap.

So the statement is False.""",
        """Marketing does not exclude a desk from products when sold to a resident. Households buy furniture as consumer products; they are not limited to receiving gifts.

Paid delivery to a flat is a market exchange, not a birthday surprise by definition.

So the statement is False.""",
        """A software licence sold to a household shopper is a consumer product because the purchaser is a private household or individual consumer. Home budgeting apps and personal licences sit on the consumer side of the same vendor catalogue that sells enterprise payroll systems.

So the statement is True.""",
    ],
    "CASE 5.1.26": [
        """The same software licence may be marketed as a producer product in one transaction and a consumer product in another depending on the buyer. Construction-contractor enterprise seat versus household personal licence — same vendor family, opposite categories.

Digital goods flip labels the same way printers do.

So the statement is True.""",
        """When a firm exchanges a software licence with a construction contractor, the transaction is business-to-business and the item is a producer product. Business purchaser plus commercial exchange — B2B and producer align.

So the statement is True.""",
        """Marketing classifies a software licence sold for commercial operations to a construction contractor as a producer product rather than a consumer product. Commercial operations on a contractor invoice keep the licence in the producer lane.

So the statement is True.""",
        """A desk transferred internally between branches of one corporation is an internal asset move, not a marketed product sold to an outside customer. No external exchange, no marketing product status.

HQ shipping spare desks to a regional depot is logistics on one balance sheet.

Note: internal transfer paperwork can look formal and still fail the exchange test.

So the statement is False.""",
        """Marketing classifies a software licence sold for personal or domestic use to a household shopper as a consumer product rather than a producer product. Personal use plus household purchaser — consumer lane for code as for furniture.

So the statement is True.""",
    ],
    "CASE 5.1.27": [
        """A software licence exchanged to fulfil the operational needs of a construction contractor counts as a product in the producer category. Operational needs (payroll, scheduling, site logs) are valid purposes; the contractor as buyer supplies the producer tag.

So the statement is True.""",
        """B2B classification of a desk depends on the logistics company purchaser, not on the seller’s industry. A lifestyle furniture brand can still run B2B when firms buy. Seller industry is the wrong dial.

Note: mixed-channel sellers are common; purchaser identity still rules.

So the statement is False.""",
        """A software licence exchanged to fulfil the personal wishes of a household shopper counts as a product in the consumer category. Personal wishes plus household exchange place the licence on the consumer side.

So the statement is True.""",
        """B2C classification of a desk depends on the resident purchaser, not on colourful retail branding. Paint and posters do not create B2C; a household buyer does.

So the statement is False.""",
        """A desk sold to a logistics company is B2B, not B2C, even though money changes hands. Payment occurs in both channels; the business purchaser is what makes this sale B2B.

Treating any paid invoice as B2C would erase wholesale furniture entirely.

So the statement is False.""",
    ],
    "CASE 5.1.28": [
        """Producer products include a software licence when it is sold from one business to a construction contractor for further commercial activity. Firm-to-firm licensing for ongoing operations is producer-product territory.

So the statement is True.""",
        """A desk sold to a resident is B2C, not B2B, even when the seller is a registered company. Registration of the seller is ambient; purchaser type decides the channel.

So the statement is False.""",
        """Consumer products include a software licence when it is sold to a household shopper for private consumption or domestic use. Home use plus household buyer — consumer product for code.

So the statement is True.""",
        """Producer products are not limited to raw materials. A finished desk sold to a logistics company is still a producer product because another business bought it for commercial use. Assembled furniture belongs in the producer set whenever firms buy it.

Note: “raw materials only” would wrongly eject finished office furniture from producer products.

So the statement is False.""",
        """Consumer products are not limited to luxury items. A routine desk sold to a resident is still a consumer product. Everyday furniture fills the consumer category; luxury is optional styling, not a definitional requirement.

So the statement is False.""",
    ],
    "CASE 5.1.29": [
        """A desk becomes a product when it is exchanged to meet wishes and needs, not only after advertising creates demand. Silent B2B furniture orders without campaigns still clear the definition; billboards without trade do not create product status alone.

Note: advertising stimulates; exchange constitutes.

So the statement is False.""",
        """The marketing term product covers a software licence whether the exchange is B2B with a construction contractor or B2C with a household shopper. Both channels host products; categories split into producer versus consumer afterward.

Intangible licences sit under the same umbrella as desks and vans.

So the statement is True.""",
        """A consultancy may list a software licence under producer products when invoicing a construction contractor and under consumer products when invoicing a household shopper. Buyer context splits the digital catalogue the same way it splits hardware.

So the statement is True.""",
        """A vehicle sold to a restaurant chain is a producer product, not a consumer product. “Every sale ultimately serves human needs” does not flip firm-to-firm fleet purchases into the consumer category.

Drivers are human; the purchaser is still the chain.

So the statement is False.""",
        """Fulfilment of customer wishes and needs is the purpose that makes an exchanged software licence a product in marketing terminology. Purpose plus exchange — that engine runs for code as for physical goods.

So the statement is True.""",
    ],
    "CASE 5.1.30": [
        """Exchange value arises when a software licence is traded with a construction contractor or a household shopper to satisfy identifiable customer demand. Enterprise demand and home demand both generate exchange value once the trade happens.

So the statement is True.""",
        """A fabric roll sold to a retail chain is a producer product because the purchaser is another business operating commercially. Textile mill to retailer — firm buyer, commercial use, producer label.

So the statement is True.""",
        """A fabric roll sold to a domestic customer is a consumer product because the purchaser is a private household or individual consumer. Craft buyers and home sewists sit on the consumer side of the same cloth.

So the statement is True.""",
        """The same fabric roll may be marketed as a producer product in one transaction and a consumer product in another depending on the buyer. Retail-chain bolt order versus domestic remnant purchase — shared cloth chemistry, opposite categories.

That is the identical-good lesson applied to textiles.

So the statement is True.""",
        """When a firm exchanges a fabric roll with a retail chain, the transaction is business-to-business and the item is a producer product. Business purchaser plus commercial exchange — B2B and producer align for cloth just as for printers.

Note: fabric “feels domestic” in craft culture, but a chain invoice still makes it a producer product.

So the statement is True.""",
    ],
    "CASE 5.1.31": [
        """When a firm exchanges a fabric roll with a domestic customer, the transaction is business-to-consumer and the item is a consumer product. Household purchaser plus personal use — B2C and consumer category travel together.

So the statement is True.""",
        """Marketing classifies a fabric roll sold for commercial operations to a retail chain as a producer product rather than a consumer product. Commercial operations on a chain invoice keep the cloth in the producer lane.

So the statement is True.""",
        """Marketing classifies a fabric roll sold for personal or domestic use to a domestic customer as a consumer product rather than a producer product. Personal use plus domestic purchaser — consumer lane.

So the statement is True.""",
        """A fabric roll exchanged to fulfil the operational needs of a retail chain counts as a product in the producer category. Operational needs (restocking shelves, cutting stock) are valid purposes; the chain as buyer supplies the producer tag.

So the statement is True.""",
        """A fabric roll exchanged to fulfil the personal wishes of a domestic customer counts as a product in the consumer category. Personal wishes plus household exchange place the cloth on the consumer side without needing a luxury story.

If someone treated “wishes” as too soft for product status, they would misread the consumer-product definition — wishes are part of the purpose language.

Note: personal wishes are how consumer products are framed, not a reason to deny the label.

So the statement is True.""",
    ],
    "CASE 5.1.32": [
        """A vehicle sold to an individual consumer is a consumer product, not a producer product, even though the seller is a business firm. Seller-is-a-business is nearly universal and cannot redefine private car sales as producer products.

If it could, every dealership sale would be B2B — collapsing the map.

So the statement is False.""",
        """Producer products include a fabric roll when it is sold from one business to a retail chain for further commercial activity. Firm-to-firm cloth for ongoing retail operations is producer-product territory.

So the statement is True.""",
        """Consumer products include a fabric roll when it is sold to a domestic customer for private consumption or domestic use. Domestic sewist or craft buyer — consumer product.

So the statement is True.""",
        """The same vehicle need not keep one fixed product label for all buyers. Design can stay fixed while restaurant-chain versus individual-consumer invoices flip producer versus consumer.

“Design never changes” is true and irrelevant.

Note: fixed body style ≠ fixed product category across buyers.

So the statement is False.""",
        """A vehicle can be a product under marketing’s exchange-and-need definition; insisting it is “not a product unless manufactured physical” misstates the breadth of the product set and muddies the real test. Related services around that vehicle (maintenance contracts) are products too when exchanged.

The IT consultancy’s dual book — firm network contracts and home-visit support — shows intangibles already sit inside the definition beside any van on the driveway.

So the statement is False.""",
    ],
    "CASE 5.1.33": [
        """Exchange is not irrelevant for a vehicle. Strong desire without a trade still fails the product gate. The vehicle must be exchanged with a customer.

Wanting a car in a showroom is motivation; completing the trade is what creates marketed product status.

Note: desire never substitutes for exchange.

So the statement is False.""",
        """The marketing term product covers a fabric roll whether the exchange is B2B with a retail chain or B2C with a domestic customer. Both channels host products; categories split afterward.

So the statement is True.""",
        """A consultancy may list a fabric roll under producer products when invoicing a retail chain and under consumer products when invoicing a domestic customer. Buyer context splits the textile catalogue row.

So the statement is True.""",
        """Marketing does not exclude a vehicle from products when sold to a restaurant chain. Businesses have wishes and needs — delivery capacity, reliability, cost — and firm purchases are producer products inside the definition.

The “businesses have no wishes” trap fails again.

So the statement is False.""",
        """Marketing does not exclude a vehicle from products when sold to an individual consumer. Households buy cars as consumer products; they are not limited to receiving gifts.

A paid private purchase is market exchange, not a present by default.

So the statement is False.""",
    ],
    "CASE 5.1.34": [
        """A vehicle transferred internally between branches of one corporation is an internal asset move, not a marketed product sold to an outside customer. No external exchange, no marketing product status.

HQ reallocating vans across regions is logistics on one balance sheet, even if transfer forms look formal.

Note: internal fleet moves ≠ B2B sales.

So the statement is False.""",
        """Fulfilment of customer wishes and needs is the purpose that makes an exchanged fabric roll a product in marketing terminology. Purpose plus exchange — that engine runs for cloth as for code and cars.

So the statement is True.""",
        """B2B classification of a vehicle depends on the restaurant-chain purchaser, not on the seller’s industry. An automotive brand aimed at consumers can still run B2B fleet sales. Purchaser identity steers the channel.

Seller-industry shortcuts break as soon as mixed channels appear.

So the statement is False.""",
        """B2C classification of a vehicle depends on the individual consumer purchaser, not on colourful retail branding. Showroom theatre does not create B2C; a household buyer does.

A plain white van sold privately can be B2C. A flashy wrapped fleet unit sold to a chain can be B2B.

So the statement is False.""",
        """A vehicle sold to a restaurant chain is B2B, not B2C, even though money changes hands. Payment is common to both channels; the business purchaser makes this sale B2B.

Treating any paid invoice as B2C would mislabel every fleet purchase.

So the statement is False.""",
    ],
    "CASE 5.1.35": [
        """Exchange value arises when a fabric roll is traded with a retail chain or a domestic customer to satisfy identifiable customer demand. Commercial demand and household demand both generate exchange value once the trade happens.

So the statement is True.""",
        """A cleaning contract sold to a hospital trust is a producer product because the purchaser is another business operating commercially. Intangible cleaning inherits the buyer test: trust invoice → producer product.

So the statement is True.""",
        """A cleaning contract sold to a private buyer is a consumer product because the purchaser is a private household or individual consumer. Residential cleaning sits on the consumer side of the same service type.

So the statement is True.""",
        """A vehicle sold to an individual consumer is B2C, not B2B, even when the seller is a registered company. Dealership registration does not drag private motoring into B2B.

Purchaser type remains the signal.

So the statement is False.""",
        """Producer products are not limited to raw materials. A finished vehicle sold to a restaurant chain is still a producer product because another business bought it for commercial use. Assembled vans belong in the producer set whenever firms buy them.

Note: “raw materials only” would wrongly eject finished fleet vehicles from producer products.

So the statement is False.""",
    ],
    "CASE 5.1.36": [
        """Consumer products are not limited to luxury items. A routine vehicle sold to an individual consumer is still a consumer product. Everyday cars fill the consumer category; luxury badges are optional styling, not a definitional gate.

If only luxury counted, most private motoring would vanish from the taxonomy — which the chapter never requires.

So the statement is False.""",
        """The same cleaning contract may be marketed as a producer product in one transaction and a consumer product in another depending on the buyer. Hospital-trust commercial clean versus private-home clean — same service skill, opposite categories.

That dual path is the buyer test applied to services.

So the statement is True.""",
        """When a firm exchanges a cleaning contract with a hospital trust, the transaction is business-to-business and the item is a producer product. Business purchaser plus commercial exchange — B2B and producer align for services.

So the statement is True.""",
        """A vehicle becomes a product when it is exchanged to meet wishes and needs, not only after advertising creates demand. Quiet fleet deals without campaigns still clear the definition; ads without exchange do not create product status alone.

Note: campaigns can help demand; exchange still constitutes the product in this chapter’s sense.

So the statement is False.""",
        """Marketing classifies a cleaning contract sold for commercial operations to a hospital trust as a producer product rather than a consumer product. Commercial operations on a trust invoice keep the service in the producer lane.

So the statement is True.""",
    ],
    "CASE 5.1.37": [
        """Marketing classifies a cleaning contract sold for personal or domestic use to a private buyer as a consumer product rather than a producer product. Domestic use plus private buyer — consumer lane for the service.

So the statement is True.""",
        """A software licence sold to a construction contractor is a producer product, not a consumer product. “Every sale ultimately serves human needs” does not flip firm-to-firm licensing into the consumer category.

Staff may use the software; the purchaser remains the contractor.

Note: ultimate human use ≠ purchaser identity.

So the statement is False.""",
        """A software licence sold to a household shopper is a consumer product, not a producer product, even though the seller is a business firm. Seller-is-a-business cannot redefine home licences as producer products.

So the statement is False.""",
        """The same software licence need not keep one fixed product label for all buyers. Design (or codebase) can stay fixed while contractor versus household invoices flip producer versus consumer.

“Design never changes” is irrelevant to classification.

So the statement is False.""",
        """A software licence is still a product when exchanged to meet needs; demanding a “manufactured physical good” misstates marketing’s product definition and would eject pure digital offerings from the set. Exchange and need fulfilment are the real tests — and the licence clears them when traded.

The vendor’s dual catalogue (enterprise payroll versus home budgeting) already treats both as products.

So the statement is False.""",
    ],
    "CASE 5.1.38": [
        """A cleaning contract exchanged to fulfil the operational needs of a hospital trust counts as a product in the producer category. Operational hygiene needs are valid purposes; the trust as buyer supplies the producer tag.

So the statement is True.""",
        """A cleaning contract exchanged to fulfil the personal wishes of a private buyer counts as a product in the consumer category. Personal wishes plus household exchange place the service on the consumer side.

Residential deep-cleans and hospital corridor contracts can share techniques while wearing opposite labels.

So the statement is True.""",
        """Producer products include a cleaning contract when it is sold from one business to a hospital trust for further commercial activity. Firm-to-firm service for ongoing operations is producer-product territory.

So the statement is True.""",
        """Consumer products include a cleaning contract when it is sold to a private buyer for private consumption or domestic use. Private buyer, domestic setting — consumer product for the service.

So the statement is True.""",
        """The marketing term product covers a cleaning contract whether the exchange is B2B with a hospital trust or B2C with a private buyer. Both channels host products; categories split into producer versus consumer afterward.

One umbrella term for a shared service type across two buyer lanes — that is the architecture the statement names.

Note: service form does not force a single channel; buyer context still splits the label.

So the statement is True.""",
    ],
    "CASE 5.1.39": [
        """Exchange is not irrelevant for a software licence. Strong desire without a trade still fails the product gate. The licence must be exchanged with a customer.

Wanting an app is motivation; completing the licence trade is what creates marketed product status.

Note: desire intensity never substitutes for exchange.

So the statement is False.""",
        """A consultancy may list a cleaning contract under producer products when invoicing a hospital trust and under consumer products when invoicing a private buyer. Buyer context splits the service catalogue the same way computer support splits across firm and home visits.

So the statement is True.""",
        """Fulfilment of customer wishes and needs is the purpose that makes an exchanged cleaning contract a product in marketing terminology. Purpose plus exchange — that engine runs for cleaning as for licences and vans.

So the statement is True.""",
        """Exchange value arises when a cleaning contract is traded with a hospital trust or a private buyer to satisfy identifiable customer demand. Institutional demand and household demand both generate exchange value once the trade happens.

So the statement is True.""",
        """Marketing does not exclude a software licence from products when sold to a construction contractor. Businesses have wishes and needs — compliance, scheduling, cost control — and firm licences are producer products inside the definition.

The “businesses have no wishes” trap fails for digital goods exactly as it fails for desks.

So the statement is False.""",
    ],
    "CASE 5.1.40": [
        """A training course sold to a local authority is a producer product because the purchaser is another business operating commercially. Staff upskilling for an organisation sits on the producer side — same buyer test as conference catering for corporate clients.

So the statement is True.""",
        """Marketing does not exclude a software licence from products when sold to a household shopper. Households buy digital products constantly; they are not limited to receiving gifts. A paid home licence is a consumer product.

Gift rhetoric would erase B2C software markets the chapter keeps in view.

Note: households buy products; gifts are a different story.

So the statement is False.""",
        """A training course sold to a home user is a consumer product because the purchaser is a private household or individual consumer. Personal learning sits on the consumer side of the same training firm that sells authority contracts — parallel to birthday party trays versus conference lunches.

So the statement is True.""",
        """The same training course may be marketed as a producer product in one transaction and a consumer product in another depending on the buyer. Local-authority cohort versus home-user enrolment — shared curriculum, opposite categories.

That dual path is the buyer test applied to education services.

So the statement is True.""",
        """When a firm exchanges a training course with a local authority, the transaction is business-to-business and the item is a producer product. Business purchaser plus commercial exchange — B2B and producer align for training just as for catering contracts and software seats.

If someone pointed at “learners are people” to force a consumer label, they would confuse end participants with the purchasing organisation — the familiar trap.

So the statement is True.""",
    ],
}


def body_len(text: str) -> int:
    return len(re.sub(r"\s*So the statement is (True|False)\.?\s*$", "", text, flags=re.I).strip())


def main() -> None:
    data = json.loads(PATH.read_text())
    ids = [c["case_id"] for c in data]
    i0, i1 = ids.index(FROM_ID), ids.index(TO_ID)
    n = 0
    for c in data[i0 : i1 + 1]:
        cid = c["case_id"]
        if cid not in REWRITES:
            raise SystemExit(f"missing rewrite for {cid}")
        expl = REWRITES[cid]
        if len(expl) != 5:
            raise SystemExit(f"{cid}: need 5 explanations")
        for i, (e, key) in enumerate(zip(expl, c["answer_key"])):
            want = "True" if key else "False"
            if not e.rstrip().endswith(f"So the statement is {want}."):
                raise SystemExit(f"{cid} {chr(65+i)}: closer mismatch want={want}")
        c["tactical_explanations"] = expl
        lens = [body_len(e) for e in expl]
        print(f"{cid} lens={lens} spread={max(lens)-min(lens)} notes={sum(1 for e in expl if re.search(r'(?m)^Note:', e))}")
        n += 1
    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
    print(f"Wrote {n} cases -> {PATH}")


if __name__ == "__main__":
    main()
