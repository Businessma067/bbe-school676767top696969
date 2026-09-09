#!/usr/bin/env python3
"""Rewrite tactical_explanations for CASE 5.1.01–5.1.40 with length diversity."""
from __future__ import annotations

import json
from pathlib import Path

PATH = Path(__file__).resolve().parents[1] / "src/data/economics-cases-ch5-subtopics.json"

REWRITES: dict[str, list[str]] = {
    "CASE 5.1.01": [
        "Marketing’s product definition is deliberately wide: every good and every service that can be exchanged to meet customer wishes and needs. The claim truncates that to physical goods alone and pushes services outside the fence. That is not how the chapter draws the line.\n\nA paid maintenance visit, a consultancy hour, or a cleaning contract sold to a client is still a product even though nothing tangible changes hands. Excluding services would leave half of modern offerings unclassified. Physical form is not the gatekeeper.\n\nSo the statement is False.",
        "A marketing product is any good or service exchanged to fulfil customer wishes and needs.\n\nSo the statement is True.",
        "Producer-product status turns on the buyer, not on whether the item left a factory. A printer sold to another firm is a producer product; the same model sold to a household is a consumer product. Factory origin does not decide the label, and “manufactured rather than purchased by the customer” confuses production with customer type.\n\nSo the statement is False.",
        "Retail packaging size does not define a consumer product. The test is whether the buyer is a household (or individual consumer) versus a business. A small flour bag sold to a supermarket shopper can be a consumer product while a bulk sack sold to a restaurant is a producer product — packaging is not the classification rule.\n\nSo the statement is False.",
        "Households are highly visible printer users, but visibility does not freeze every printer as a consumer product. Classification follows the purchaser in each deal. An office printer bought by a logistics firm for commercial work is a producer product; the identical model sold for home study use is a consumer product.\n\nSaying printers are “always” consumer products because households are the most visible end users collapses B2B and B2C into one label. The chapter refuses that collapse.\n\nSo the statement is False.",
    ],
    "CASE 5.1.02": [
        "Being manufactured for commercial supply chains does not lock a printer into the producer-product box forever. Producer versus consumer follows who buys in that transaction, not who assembled the machine upstream. Sold to a private household for home use, the same printer is a consumer product even though factories and distributors sit behind it.\n\nA corporate IT desk buying the model for office workflows would correctly call it a producer product. “Always producer” ignores that buyer switch.\n\nSo the statement is False.",
        "Marketing calls any exchanged good or service that satisfies customer wishes and needs a product.\n\nSo the statement is True.",
        "Tangible goods and intangible services both qualify once they are exchanged with customers. A printer on a shelf and a remote support contract on an invoice can each be products under that rule, because form does not decide membership.\n\nSo the statement is True.",
        "Introductory marketing treats other businesses and private households as legitimate customers of products. A firm buying bulk flour and a household buying a small bag are both inside the frame — B2B and B2C sit side by side.\n\nSo the statement is True.",
        "Producer products are the goods and services one business sells to another in business-to-business exchange. The bakery’s bulk flour sacks sold to restaurants are a clean example: firm-to-firm trade for commercial use, not a household retail basket.\n\nThat B2B channel is exactly what the producer-product label marks. Household sales of the same flour in smaller bags would sit on the consumer side instead.\n\nSo the statement is True.",
    ],
    "CASE 5.1.03": [
        "Consumer products are goods and services sold to private households in B2C exchange.\n\nSo the statement is True.",
        "Lack of physical form does not eject computer support from the product set. Marketing’s definition already includes services when they are exchanged to fulfil customer wishes and needs. A support contract sold to a household or a firm is still a product — service shape, not an exception.\n\nIf intangibility barred product status, entire industries of maintenance, consultancy, and training would fall outside the textbook frame. The chapter keeps them inside.\n\nSo the statement is False.",
        "Business-to-business marketing is the channel that carries producer products between firms. When one company sells equipment or support to another, the B2B label and the producer-product label travel together.\n\nSo the statement is True.",
        "Business-to-consumer marketing is the channel that carries consumer products to private households. Household printers, home support plans, and similar offerings sit in that B2C lane.\n\nSo the statement is True.",
        "Buyer use decides the label, not catalogue twins. A printer bought for office operations by a business is a producer product even when an identical home model sits in the same brochure. The corporate purchase is firm-to-firm for commercial work; the home twin is a separate consumer-product transaction.\n\nIdentical hardware does not force identical classification across buyers.\n\nSo the statement is True.",
    ],
    "CASE 5.1.04": [
        "Free after-sales advice may help the bakery’s restaurant clients or supermarket shoppers, but without payment or another form of exchange it is not a marketed product in this chapter’s sense. Satisfaction alone does not create product status.\n\nThe flour sacks and bags that change hands for money are products; a complimentary tip shouted across the loading dock is goodwill, not an exchanged offering. The claim skips the exchange requirement.\n\nSo the statement is False.",
        "Private home use puts a printer in the consumer-product category even if offices buy the same model.\n\nSo the statement is True.",
        "Computer support sold mainly to private households is a consumer product delivered as a service. The intangible form does not push it out of the consumer-product lane when households are the buyers.\n\nSo the statement is True.",
        "Moving office supplies between departments inside one company is an internal transfer, not a market exchange with an outside customer. That move is not a product in the marketing sense, even if the items look identical to what the firm sells externally.\n\nSo the statement is False.",
        "Computer support sold to other businesses is a producer product in service form — firm-to-firm exchange for commercial needs. Just as the bakery’s bulk flour goes to restaurants as a producer good, a support contract sold to those restaurants’ IT desks is a producer service.\n\nThe service shape does not flip the B2B classification; the business buyer keeps the producer label in place.\n\nSo the statement is True.",
    ],
    "CASE 5.1.05": [
        "B2B and B2C name the customer relationship, not the production technology on the factory floor. Who purchases — firm or household — sets those labels. A high-tech line versus a craft process does not decide B2B versus B2C.\n\nSo the statement is False.",
        "Exchange is required before marketing treats a good or service as a product.\n\nSo the statement is True.",
        "A maintenance contract exchanged to fulfil customer needs is a product even though it is a service. Intangibility does not block product status once the trade is in place.\n\nSo the statement is True.",
        "Equipment and materials count as products when they are exchanged to fulfil customer wishes and needs. A printer sold to a corporate client, spare toner sold with it, and related hardware all sit inside that definition once money (or another exchange) changes hands.\n\nGoods are not “products only if branded”; the exchange-and-need test is what matters here.\n\nSo the statement is True.",
        "A corporate client buying a printer for commercial use is another business operating commercially, so the sale is a producer product. The purchaser identity — firm versus household — is the chapter’s classification key.\n\nIf the same model later sold to a home user, that second deal would be a consumer product. This statement correctly sticks to the corporate purchaser.\n\nSo the statement is True.",
    ],
    "CASE 5.1.06": [
        "A private household buying a printer places that sale in the consumer-product category.\n\nSo the statement is True.",
        "One printer design can be billed as a producer product to a corporate client and as a consumer product to a household. The buyer in that transaction flips the label without redesigning the machine. Marketing does not freeze a SKU into a single lifelong category.\n\nA morning B2B invoice and an afternoon B2C walk-in sale of the same model are both coherent under the chapter’s rule.\n\nSo the statement is True.",
        "Firm-to-firm exchange of a printer with a corporate client is business-to-business, and the item is a producer product. The commercial buyer, not the hardware specs, drives that reading.\n\nSo the statement is True.",
        "Firm-to-household exchange of a printer is business-to-consumer, and the item is a consumer product. Private use by the household is what lands it on that side of the ledger.\n\nSo the statement is True.",
        "Commercial operations for a corporate client put the printer among producer products, not among household consumer products. Marketing classifies by purchaser and use context: office workflows and firm invoices point to the producer lane.\n\nCalling that sale a consumer product would ignore who is actually buying and why the machine is needed.\n\nSo the statement is True.",
    ],
    "CASE 5.1.07": [
        "Other businesses are legitimate product customers in B2B exchange, not only households.\n\nSo the statement is False.",
        "A gift with no exchange may please the recipient, but marketing reserves “product” for offerings traded with customers. Handing someone a free printer as a present does not turn that gift into a marketed product under the exchange test.\n\nFulfilment of wishes without a trade is outside the definition the chapter uses. Desire alone is not enough, and skipping the exchange step is exactly where this claim fails.\n\nSo the statement is False.",
        "Portability does not create a consumer product. A compact printer sold to an office is still a producer product; whether an individual can carry it home is irrelevant to B2B versus B2C classification.\n\nSo the statement is False.",
        "Personal or domestic use by a private household puts the printer in the consumer-product category rather than the producer category. Buyer and use context decide, not factory branding.\n\nSo the statement is True.",
        "Weight or bulk does not create a producer product. A heavy machine sold to a household for home use remains a consumer product; mass is irrelevant to B2B versus B2C. Conversely, a light laptop sold to a firm for commercial work is still a producer product.\n\nThe claim treats physical awkwardness as a classification rule — it is not. Buyer identity does the work that weight never can.\n\nSo the statement is False.",
    ],
    "CASE 5.1.08": [
        "Services sold only to businesses are producer products. Ultimate human beneficiaries do not re-label firm-to-firm exchange as consumer. The textile mill’s B2B fabric support sold to garment makers stays producer-side.\n\nSo the statement is False.",
        "A corporate client is a business buyer, so the printer is a producer product. Saying every sale “ultimately serves human needs” does not flip that B2B purchase into a consumer product. Employees who later use the machine are not the marketing customer in the classification sense.\n\nThe mill’s fabric rolls to garment manufacturers work the same way: commercial buyers keep the producer label.\n\nSo the statement is False.",
        "A printer exchanged for a corporate client’s operational needs is a producer product.\n\nSo the statement is True.",
        "The seller being a business firm is true of almost every marketed offering. A private household buyer still makes that printer a consumer product, not a producer product — seller legal form is not the test.\n\nSo the statement is False.",
        "Design can stay fixed while the buyer changes. A corporate sale of the printer is producer; a household sale of the same design is consumer. One permanent label for all buyers fights that switch.\n\nThe textile mill’s identical fabric can leave as producer rolls to manufacturers and as consumer remnant bundles to craft buyers — the design’s stability never freezes the label.\n\nSo the statement is False.",
    ],
    "CASE 5.1.09": [
        "Exchanging a printer for a private household’s personal wishes places it among consumer products.\n\nSo the statement is True.",
        "Sold from one business to a corporate client for further commercial activity, the printer sits among producer products. Firm-to-firm commercial use is the producer-product pattern.\n\nSo the statement is True.",
        "Manufactured physical form is not a gatekeeper. Services exchanged with customers are products too, and even for goods the exchange-and-need test is what matters. Claiming a printer is “not a product” unless it is a manufactured physical good misstates the definition.\n\nA support plan sold alongside the printer is a product without being a manufactured object; the printer itself is a product because of exchange, not because of factory paperwork.\n\nSo the statement is False.",
        "Strong desire without exchange does not create a marketed product. The printer needs a trade with a customer. Wishing hard for a machine on a shop window does not make that unit a product for you until exchange occurs.\n\nSo the statement is False.",
        "Sold to a private household for private consumption or domestic use, the printer is a consumer product. That is the B2C reading of the same hardware that might be a producer product when a corporate client buys it for office work.\n\nDomestic use by the household is what lands this letter on the consumer side.\n\nSo the statement is True.",
    ],
    "CASE 5.1.10": [
        "An exchanged printer is still a marketing product in both B2B and B2C deals.\n\nSo the statement is True.",
        "The same consultancy can book the printer under producer products for a corporate client and under consumer products for a private household. Buyer channel splits the catalogue row without requiring two different machines.\n\nMorning invoice to a firm, afternoon invoice to a home user — both listings are coherent under introductory marketing terminology.\n\nSo the statement is True.",
        "Fulfilment of customer wishes and needs is the purpose that turns an exchanged printer into a marketing product. Without that purpose tied to exchange, the hardware is just inventory.\n\nSo the statement is True.",
        "Trading the printer with a corporate client or a private household creates exchange value when it satisfies identifiable demand on either side. Both buyer types can generate that value through a real trade.\n\nSo the statement is True.",
        "A manufacturing firm buying a computer for commercial use is another business operating commercially, so that sale is a producer product. The purchaser identity matches the producer-product rule the same way an office printer purchase does.\n\nHousehold buyers of computers would sit on the consumer side; this letter correctly stays with the manufacturing firm.\n\nSo the statement is True.",
    ],
    "CASE 5.1.11": [
        "A computer sold to a family home is a consumer product because the buyer is a private household.\n\nSo the statement is True.",
        "Businesses do have wishes and needs in the marketing sense: uptime, print volume, workflow fit. Selling a printer to a corporate client does not exclude it from products; it places the deal among producer products.\n\nThe claim invents a rule that firms lack needs and therefore cannot buy products — that rule is not in the chapter, and a corporate printer invoice is a counterexample sitting in plain sight.\n\nSo the statement is False.",
        "Households buy products constantly; they are not limited to receiving gifts. A printer sold to a private household is a consumer product precisely because of that B2C exchange, not because households only get presents.\n\nSo the statement is False.",
        "The same computer may be marketed as a producer product in one transaction and a consumer product in another depending on the buyer. A manufacturing firm purchase and a family-home purchase of identical hardware illustrate the switch without any redesign.\n\nFixed SKU, flexible classification — that is the chapter’s point about buyer context.\n\nSo the statement is True.",
        "A printer transferred internally between branches of one corporation is an internal stock move, not a marketed product exchange with an outside customer. No external trade means no product in the marketing sense for that transfer.\n\nSo the statement is False.",
    ],
    "CASE 5.1.12": [
        "When a firm exchanges a computer with a manufacturing firm, the transaction is business-to-business and the item is a producer product. Firm-to-firm commercial exchange is the classic producer-product pattern.\n\nSo the statement is True.",
        "A computer sold for commercial operations to a manufacturing firm is a producer product.\n\nSo the statement is True.",
        "A computer sold for personal or domestic use to a family home is a consumer product rather than a producer product. Private household use lands it on the B2C side.\n\nSo the statement is True.",
        "A computer exchanged to fulfil the operational needs of a manufacturing firm counts as a product in the producer category. The academy’s compliance workshops sold to company staff follow the same producer logic: business buyers, commercial purpose.\n\nOperational need plus firm purchaser is what the producer label marks, whether the offering is hardware or a training seat.\n\nSo the statement is True.",
        "A computer exchanged to fulfil the personal wishes of a family home counts as a product in the consumer category. Parallel to the academy’s evening language courses sold to individual learners, the household buyer and private purpose keep the consumer-product reading.\n\nPersonal wishes plus household purchaser — consumer side, not producer.\n\nSo the statement is True.",
    ],
    "CASE 5.1.13": [
        "B2B classification of a printer depends on the corporate client purchaser, not on the seller’s industry label. A stationery wholesaler and a specialist IT reseller can both make B2B printer sales when the buyer is a firm.\n\nSeller sector does not override purchaser identity. The claim puts the wrong party in the driver’s seat for the B2B label, as if industry codes decided the channel.\n\nSo the statement is False.",
        "A computer sold business-to-business for commercial activity is a producer product.\n\nSo the statement is True.",
        "B2C classification of a printer depends on the private household purchaser, not on colourful retail branding. Plain packaging sold to a home user is still B2C; flashy branding sold to a firm does not create B2C.\n\nSo the statement is False.",
        "A computer sold to a family home for private consumption or domestic use is a consumer product. Household buyer and private use decide that lane.\n\nSo the statement is True.",
        "The marketing term product covers a computer whether the exchange is B2B with a manufacturing firm or B2C with a family home. Channel changes the producer-versus-consumer label, not whether an exchanged offering counts as a product at all.\n\nBoth deals clear the exchange-and-need hurdle that the definition requires, so neither sale falls outside “product.”\n\nSo the statement is True.",
    ],
    "CASE 5.1.14": [
        "Money changing hands does not turn a corporate printer sale into B2C; the buyer is still a firm.\n\nSo the statement is False.",
        "A printer sold to a private household is B2C, not B2B. The seller being a registered company is normal for almost every marketed good and does not reclassify household buyers as business customers.\n\nSo the statement is False.",
        "Producer products are not limited to raw materials. A finished printer sold to a corporate client is a producer product when the purchaser is another business buying for commercial use. Finished goods sit comfortably in the producer lane alongside inputs.\n\nRestricting producer products to raw materials alone would misread the chapter’s B2B scope and leave finished office equipment unclassified when firms buy it.\n\nSo the statement is False.",
        "Consumer products are not limited to luxury items. A routine printer sold to a private household is still a consumer product. Everyday goods and services sold B2C count fully under the household-buyer rule.\n\nSo the statement is False.",
        "A consultancy may list a computer under producer products when invoicing a manufacturing firm and under consumer products when invoicing a family home. Same offering type, two buyer contexts, two catalogue rows — that dual listing is exactly what the buyer-based rule allows.\n\nThe invoice party flips the label without rewriting the hardware specs on either deal.\n\nSo the statement is True.",
    ],
    "CASE 5.1.15": [
        "Fulfilment of wishes and needs is what makes an exchanged computer a marketing product.\n\nSo the statement is True.",
        "A printer becomes a product when it is exchanged to satisfy customer demand, not only after advertising creates desire. Advertising may stimulate interest, but exchange is the definitional hinge. An unadvertised printer sold over the counter to a household is already a consumer product.\n\nThe claim postpones product status until ads run — that sequencing is wrong, and it would deny product status to countless quiet over-the-counter trades.\n\nSo the statement is False.",
        "A computer sold to a manufacturing firm is a producer product. “Every sale ultimately serves human needs” does not re-label firm-to-firm commercial purchases as consumer products.\n\nSo the statement is False.",
        "A computer sold to a family home is a consumer product. The seller being a business firm is true of nearly all marketed sales and does not turn household buyers into producer-product customers.\n\nSo the statement is False.",
        "The same computer need not keep one fixed product label for all buyers. Design can stay constant while a manufacturing-firm purchase is producer and a family-home purchase is consumer. Fixed design never freezes classification across buyer types.\n\nOne SKU, two legitimate labels depending on the deal — that flexibility is the point of buyer-based classification.\n\nSo the statement is False.",
    ],
    "CASE 5.1.16": [
        "A computer is a product when exchanged to fulfil customer wishes and needs — manufactured physical form is not a necessary condition in the marketing definition. Services exchanged with customers are products too, and even for goods the trade matters more than factory origin stories.\n\nThe wholesaler’s printer sales to offices and households are products because of exchange, not because of a manufacturing certificate.\n\nSo the statement is False.",
        "Trading a computer to meet firm or household demand creates exchange value.\n\nSo the statement is True.",
        "Exchange is not irrelevant. Strong desire without a trade does not make a computer a marketed product for that customer. Window-shopping intensity is not the definitional test.\n\nSo the statement is False.",
        "Businesses have wishes and needs — capacity, reliability, cost control. Selling a computer to a manufacturing firm includes it among producer products; it does not exclude it from products.\n\nSo the statement is False.",
        "Households buy products; they are not limited to gifts. A computer sold to a family home is a consumer product precisely because of B2C exchange. Claiming households “only receive gifts, not products” invents a restriction the chapter does not teach.\n\nWalk-in household buyers at the wholesaler are buying consumer products, not accepting presents.\n\nSo the statement is False.",
    ],
    "CASE 5.1.17": [
        "A desk sold to a logistics company is a producer product because another business is the purchaser.\n\nSo the statement is True.",
        "A desk sold to a resident is a consumer product because the purchaser is a private household or individual consumer. Private use keeps it on the B2C side of the classification.\n\nSo the statement is True.",
        "The same desk may be marketed as a producer product in one transaction and a consumer product in another depending on the buyer. A logistics company purchase for warehouse offices and a resident purchase for a study room illustrate the switch without redesigning the desk.\n\nBuyer context, not timber species, flips the label from one deal to the next. That is why catalogues can list one SKU under two channels.\n\nSo the statement is True.",
        "When a firm exchanges a desk with a logistics company, the transaction is business-to-business and the item is a producer product. Firm-to-firm commercial exchange is the producer pattern.\n\nSo the statement is True.",
        "Marketing classifies a desk sold for commercial operations to a logistics company as a producer product rather than a consumer product. Commercial operations by a business buyer are the producer-product cues.\n\nA later sale of the same model to a resident would be consumer — this letter stays with the logistics company deal and its commercial purpose.\n\nSo the statement is True.",
    ],
    "CASE 5.1.18": [
        "A desk sold for domestic use to a resident is a consumer product, not a producer product.\n\nSo the statement is True.",
        "A computer transferred internally between branches of one corporation remains an internal stock movement. Without an external customer exchange, it is not a marketed product in the chapter’s sense.\n\nMoving a machine from Branch A’s storeroom to Branch B’s floor does not create a B2B or B2C product sale, even if both branches later use the machine heavily for daily work.\n\nSo the statement is False.",
        "A desk exchanged to fulfil the operational needs of a logistics company counts as a product in the producer category. Operational need plus business buyer marks producer status.\n\nSo the statement is True.",
        "A desk exchanged to fulfil the personal wishes of a resident counts as a product in the consumer category. Personal wishes plus household buyer mark consumer status on that sale.\n\nSo the statement is True.",
        "B2B classification of a computer depends on the manufacturing firm purchaser, not on the seller’s industry. An electronics retailer and a specialist B2B dealer can both make B2B sales when the buyer is a manufacturing firm.\n\nSeller industry does not override purchaser identity when the chapter assigns the B2B label to that computer deal.\n\nSo the statement is False.",
    ],
    "CASE 5.1.19": [
        "Producer products include a desk when it is sold from one business to a logistics company for further commercial activity. Firm-to-firm commercial sale is the producer pattern.\n\nSo the statement is True.",
        "B2C classification of a computer depends on the family home purchaser, not on colourful retail branding. Plain cartons sold to a household are still B2C; neon branding sold to a firm does not invent a household customer.\n\nBranding aesthetics are not the classification rule, and treating them as one would mis-sort countless plain-pack household sales into the wrong channel.\n\nSo the statement is False.",
        "A desk sold to a resident for private or domestic use is a consumer product.\n\nSo the statement is True.",
        "The marketing term product covers a desk whether the exchange is B2B with a logistics company or B2C with a resident. Channel changes the subtype, not product membership itself.\n\nSo the statement is True.",
        "A consultancy may list a desk under producer products when invoicing a logistics company and under consumer products when invoicing a resident. Dual listing mirrors dual buyer contexts for the same offering type.\n\nThe invoice party decides which row the desk occupies on that sale, without any need to redesign the furniture between channels.\n\nSo the statement is True.",
    ],
    "CASE 5.1.20": [
        "Fulfilment of wishes and needs makes an exchanged desk a product in marketing terms.\n\nSo the statement is True.",
        "Exchange value arises when a desk is traded with a logistics company or a resident to satisfy identifiable customer demand. Both buyer types can generate that value through exchange.\n\nSo the statement is True.",
        "A vehicle sold to a restaurant chain is a producer product because the purchaser is another business operating commercially. The dealer’s van leased to a delivery firm follows the same producer logic: commercial buyer, commercial use.\n\nRestaurant-chain purchase keeps the producer label; a private family purchase of the same chassis would sit on the consumer side instead.\n\nSo the statement is True.",
        "A vehicle sold to an individual consumer is a consumer product because the purchaser is a private household or individual consumer. Private transport use lands it on the B2C side.\n\nSo the statement is True.",
        "The same vehicle may be marketed as a producer product in one transaction and a consumer product in another depending on the buyer. A restaurant-chain fleet purchase and a family private-transport purchase of the same model illustrate the switch without redesign.\n\nThe dealer’s dual channel — vans to firms, cars to families — is the lived version of that rule.\n\nSo the statement is True.",
    ],
    "CASE 5.1.21": [
        "Firm-to-firm exchange of a vehicle with a restaurant chain is business-to-business, and the item is a producer product. Commercial fleet use by the chain locks in that reading for the dealer’s van or car.\n\nSo the statement is True.",
        "A vehicle sold for commercial operations to a restaurant chain is a producer product.\n\nSo the statement is True.",
        "A vehicle sold for personal or domestic use to an individual consumer is a consumer product rather than a producer product. Private use by that consumer lands it on the B2C side of the label.\n\nSo the statement is True.",
        "A vehicle exchanged to fulfil the operational needs of a restaurant chain counts as a product in the producer category. Delivery schedules, catering runs, and staff transport are commercial needs — not household leisure.\n\nOperational need plus business buyer is what the producer label marks for that van or car on the restaurant invoice.\n\nSo the statement is True.",
        "A vehicle exchanged to fulfil the personal wishes of an individual consumer counts as a product in the consumer category. Weekend trips and private commuting are personal uses, so the same model that was producer for the restaurant becomes consumer here.\n\nPersonal wishes plus individual purchaser keep the consumer reading, even when the chassis matches a fleet twin.\n\nSo the statement is True.",
    ],
    "CASE 5.1.22": [
        "Money alone does not make a firm’s computer purchase B2C.\n\nSo the statement is False.",
        "A computer sold to a family home is B2C, not B2B. The seller being a registered company is ordinary and does not turn household buyers into business customers for classification purposes.\n\nSo the statement is False.",
        "Producer products are not limited to raw materials. A finished computer sold to a manufacturing firm is a producer product when another business buys it for commercial use. Finished goods belong in the producer lane alongside inputs.\n\nLimiting producer products to raw materials alone would leave office hardware unclassified in B2B deals — a reading the chapter rejects.\n\nSo the statement is False.",
        "Producer products include a vehicle when it is sold from one business to a restaurant chain for further commercial activity. Firm-to-firm commercial sale is the producer pattern for that vehicle on the fleet invoice.\n\nSo the statement is True.",
        "Consumer products are not limited to luxury items. A routine computer sold to a family home is still a consumer product. Everyday B2C goods count fully when the purchaser is a household rather than a firm.\n\nSo the statement is False.",
    ],
    "CASE 5.1.23": [
        "A vehicle sold to an individual consumer for private use is a consumer product.\n\nSo the statement is True.",
        "A computer becomes a product when exchanged to satisfy demand, not only after advertising creates desire. Ads may help, but exchange is the hinge. An unadvertised machine sold to a household is already a consumer product.\n\nPostponing product status until campaigns run would erase quiet over-the-counter sales from the definition the chapter actually uses.\n\nQuiet sales without campaigns still clear the exchange-and-need test.\n\nSo the statement is False.",
        "A desk sold to a logistics company is a producer product. “Every sale ultimately serves human needs” does not re-label firm-to-firm commercial purchases as consumer products for warehouse offices.\n\nSo the statement is False.",
        "The marketing term product covers a vehicle whether the exchange is B2B with a restaurant chain or B2C with an individual consumer. Channel changes the subtype, not membership in “product.”\n\nBoth the fleet invoice and the private sale clear the exchange-and-need test.\n\nSo the statement is True.",
        "A consultancy may list a vehicle under producer products when invoicing a restaurant chain and under consumer products when invoicing an individual consumer. Dual listing mirrors dual buyer contexts for the same model.\n\nThe invoice party flips the row without redesigning the chassis between deals.\n\nSo the statement is True.",
    ],
    "CASE 5.1.24": [
        "Fulfilment of wishes and needs makes an exchanged vehicle a marketing product.\n\nSo the statement is True.",
        "A desk sold to a resident is a consumer product. The seller being a business firm is true of nearly all marketed sales and does not turn household buyers into producer-product customers at the showroom.\n\nSo the statement is False.",
        "The same desk need not keep one fixed product label for all buyers. Design can stay constant while a logistics-company purchase is producer and a resident purchase is consumer. Fixed design never freezes classification across channels.\n\nOne SKU, two legitimate labels depending on who buys — that is the buyer-context rule the chapter teaches.\n\nSo the statement is False.",
        "Manufactured physical form is not required for product status in marketing. Services exchanged with customers are products too, and even for desks the exchange-and-need test matters more than factory origin.\n\nClaiming a desk is “not a product” unless it is a manufactured physical good misstates the definition — and would oddly exclude telecom broadband plans from product status as well.\n\nSo the statement is False.",
        "Exchange value arises when a vehicle is traded with a restaurant chain or an individual consumer to satisfy identifiable demand. Both buyer types can generate that value through a real trade rather than mere desire.\n\nSo the statement is True.",
    ],
    "CASE 5.1.25": [
        "A software licence sold to a construction contractor is a producer product.\n\nSo the statement is True.",
        "Exchange is not irrelevant to whether a desk counts as a product. Strong desire without a trade does not create marketed product status. A resident staring at a showroom desk still needs exchange before it is their product.\n\nDesire intensity is not the definitional test the chapter applies to furniture or anything else.\n\nWindow-shopping intensity never substitutes for that trade step in the definition.\n\nSo the statement is False.",
        "Businesses have wishes and needs — space planning, durability, budget fit. Selling a desk to a logistics company includes it among producer products; it does not exclude it from products because firms supposedly lack needs.\n\nSo the statement is False.",
        "Households buy products; they are not limited to gifts. A desk sold to a resident is a consumer product because of B2C exchange. Claiming households only receive gifts invents a restriction the chapter does not teach.\n\nShowroom sales to residents are consumer-product trades, not present-giving ceremonies.\n\nSo the statement is False.",
        "A software licence sold to a household shopper is a consumer product because the purchaser is a private household or individual consumer. Private use of that licence keeps it on the B2C side of the catalogue.\n\nSo the statement is True.",
    ],
    "CASE 5.1.26": [
        "The same software licence may be marketed as a producer product in one transaction and a consumer product in another depending on the buyer. A construction-contractor purchase and a household-shopper purchase of related licences illustrate the switch.\n\nBuyer context flips the label without rewriting the code base between those two invoices.\n\nSo the statement is True.",
        "When a firm exchanges a software licence with a construction contractor, the transaction is business-to-business and the item is a producer product. Firm-to-firm commercial exchange is the producer pattern for that licence.\n\nSo the statement is True.",
        "Marketing classifies a software licence sold for commercial operations to a construction contractor as a producer product rather than a consumer product. Commercial operations by a business buyer are the producer cues on that invoice.\n\nSo the statement is True.",
        "A desk transferred internally between branches of one corporation is an internal stock move, not a marketed product exchange with an outside customer. No external trade means no product in the marketing sense for that transfer.\n\nShifting furniture from one warehouse wing to another does not create a B2B sale, even if both wings need the desks urgently.\n\nInternal logistics is not market exchange with an outside customer.\n\nSo the statement is False.",
        "A software licence sold for personal use to a household shopper is a consumer product.\n\nSo the statement is True.",
    ],
    "CASE 5.1.27": [
        "A software licence for a contractor’s operational needs is a producer product.\n\nSo the statement is True.",
        "B2B classification of a desk depends on the logistics company purchaser, not on the seller’s industry. A furniture maker and a contract office supplier can both make B2B desk sales when the buyer is a logistics firm.\n\nSeller sector does not override purchaser identity for the B2B label on that furniture deal.\n\nSo the statement is False.",
        "A software licence exchanged to fulfil the personal wishes of a household shopper counts as a product in the consumer category. Personal budgeting or home use keeps that licence on the consumer side.\n\nPersonal wishes plus household purchaser — consumer, not producer — even when the vendor also sells to contractors.\n\nThe household invoice is the concrete counterweight to any “always producer” reading of software.\n\nSo the statement is True.",
        "B2C classification of a desk depends on the resident purchaser, not on colourful retail branding. Plain finish sold to a resident is still B2C; flashy branding sold to a firm does not invent a household customer for channel labels.\n\nSo the statement is False.",
        "Money changing hands does not turn a logistics-company desk purchase into B2C; the buyer is still a business. Payment alone never decides B2B versus B2C — purchaser identity does that work.\n\nSo the statement is False.",
    ],
    "CASE 5.1.28": [
        "A software licence sold to a construction contractor for commercial activity is a producer product.\n\nSo the statement is True.",
        "A desk sold to a resident is B2C, not B2B. The seller being a registered company is ordinary and does not reclassify household buyers as business customers at the showroom till.\n\nSo the statement is False.",
        "Consumer products include a software licence when sold to a household shopper for private or domestic use. Household buyer and private use decide that lane for the licence row.\n\nSo the statement is True.",
        "Producer products are not limited to raw materials. A finished desk sold to a logistics company is a producer product when another business buys it for commercial use. Finished furniture sits in the producer lane alongside inputs.\n\nRestricting producer products to raw materials alone would mis-sort every finished office desk sold B2B into a non-category the chapter never creates.\n\nSo the statement is False.",
        "Consumer products are not limited to luxury items. A routine desk sold to a resident is still a consumer product. Everyday showroom pieces sold B2C count fully under the household-buyer rule without any luxury threshold.\n\nSo the statement is False.",
    ],
    "CASE 5.1.29": [
        "A desk becomes a product when exchanged to satisfy demand, not only after advertising creates desire. Ads may help, but exchange is the hinge. An unadvertised desk sold to a resident is already a consumer product.\n\nWaiting for campaigns before granting product status would erase quiet showroom trades from the definition the chapter actually uses.\n\nProduct status arrives with the trade, not with the media plan.\n\nSo the statement is False.",
        "The marketing term product covers a software licence in both B2B contractor deals and B2C household deals. Channel changes the subtype, not membership in “product.”\n\nSo the statement is True.",
        "A consultancy may list a software licence under producer products when invoicing a construction contractor and under consumer products when invoicing a household shopper. Dual listing mirrors dual buyer contexts.\n\nThe invoice party flips the row without rewriting the licence code between those two deals.\n\nSo the statement is True.",
        "A vehicle sold to a restaurant chain is a producer product. “Every sale ultimately serves human needs” does not re-label firm-to-firm commercial purchases as consumer products for the fleet.\n\nSo the statement is False.",
        "Fulfilment of wishes and needs makes an exchanged software licence a product.\n\nSo the statement is True.",
    ],
    "CASE 5.1.30": [
        "Exchange value arises when a software licence is traded with a construction contractor or a household shopper to satisfy identifiable demand. Both buyer types can generate that value through a real trade rather than idle interest.\n\nSo the statement is True.",
        "A fabric roll sold to a retail chain is a producer product.\n\nSo the statement is True.",
        "A fabric roll sold to a domestic customer is a consumer product because the purchaser is a private household or individual consumer. Private sewing or home use keeps it on the B2C side of the mill’s sales book.\n\nSo the statement is True.",
        "The same fabric roll may be marketed as a producer product in one transaction and a consumer product in another depending on the buyer. A retail-chain purchase for resale and a domestic customer’s craft purchase illustrate the switch without changing the cloth.\n\nBuyer context flips the label; weave and colour do not decide producer versus consumer.\n\nThe mill can invoice the same weave twice in one day under two different labels.\n\nSo the statement is True.",
        "When a firm exchanges a fabric roll with a retail chain, the transaction is business-to-business and the item is a producer product. Firm-to-firm commercial exchange is the producer pattern for that roll.\n\nThe mill-to-retailer invoice is exactly the B2B scene the producer label marks in this chapter.\n\nSo the statement is True.",
    ],
    "CASE 5.1.31": [
        "Exchanging a fabric roll with a domestic customer is B2C, and the item is a consumer product.\n\nSo the statement is True.",
        "Marketing classifies a fabric roll sold for commercial operations to a retail chain as a producer product rather than a consumer product. Commercial operations by a business buyer are the producer cues on that invoice.\n\nSo the statement is True.",
        "A fabric roll sold for personal use to a domestic customer is a consumer product.\n\nSo the statement is True.",
        "A fabric roll exchanged to fulfil the operational needs of a retail chain counts as a product in the producer category. Shelf replenishment and garment production inputs are commercial needs, not home crafts.\n\nOperational need plus retail-chain purchaser marks the producer label for that roll.\n\nSo the statement is True.",
        "A fabric roll exchanged to fulfil the personal wishes of a domestic customer counts as a product in the consumer category. Home sewing projects and personal crafts are private uses, so the same cloth that was producer for the chain becomes consumer here.\n\nPersonal wishes plus domestic purchaser keep the consumer reading even when the mill also supplies retailers.\n\nSo the statement is True.",
    ],
    "CASE 5.1.32": [
        "A vehicle sold to an individual consumer is a consumer product, not a producer product.\n\nSo the statement is False.",
        "Producer products include a fabric roll when sold from one business to a retail chain for further commercial activity. Firm-to-firm commercial sale is the producer pattern for that cloth.\n\nSo the statement is True.",
        "Consumer products include a fabric roll when sold to a domestic customer for private or domestic use. Household buyer and private use decide that lane at the market stall or remnant counter.\n\nSo the statement is True.",
        "The same vehicle need not keep one fixed product label for all buyers. Design can stay constant while a restaurant-chain purchase is producer and an individual-consumer purchase is consumer. Fixed design never freezes classification across channels.\n\nOne chassis, two legitimate labels depending on who buys — that is the buyer-context rule the IT consultancy’s dual channel (firms versus residents) also illustrates for support services.\n\nSo the statement is False.",
        "Manufactured physical form is not required for product status. Services exchanged with customers are products too, and even for vehicles the exchange-and-need test matters more than factory origin.\n\nClaiming a vehicle is “not a product” unless manufactured physical goods misstates the definition — and would oddly exclude the consultancy’s own support contracts from product status.\n\nSo the statement is False.",
    ],
    "CASE 5.1.33": [
        "Strong desire without exchange does not make a vehicle a marketed product.\n\nSo the statement is False.",
        "The marketing term product covers a fabric roll whether the exchange is B2B with a retail chain or B2C with a domestic customer. Channel changes the subtype, not membership in the product set.\n\nSo the statement is True.",
        "A consultancy may list a fabric roll under producer products when invoicing a retail chain and under consumer products when invoicing a domestic customer. Dual listing mirrors dual buyer contexts for the same cloth.\n\nThe invoice party flips the row without reweaving the fabric between those two deals.\n\nSo the statement is True.",
        "Businesses have wishes and needs — fleet size, payload, cost control. Selling a vehicle to a restaurant chain includes it among producer products; it does not exclude it from products because “businesses lack needs” in some invented sense.\n\nSo the statement is False.",
        "Households buy products; they are not limited to gifts. A vehicle sold to an individual consumer is a consumer product because of B2C exchange. Claiming households only receive gifts invents a restriction the chapter does not teach.\n\nPrivate buyers at the dealer are purchasing consumer products, not accepting presents from the lot.\n\nThe private-buyer invoice is the concrete counterexample to the gift-only claim.\n\nSo the statement is False.",
    ],
    "CASE 5.1.34": [
        "A vehicle transferred internally between branches of one corporation is an internal stock move, not a marketed product. No external customer exchange means no product in the marketing sense for that transfer.\n\nShifting a van from Region North’s yard to Region South’s depot does not create a B2B sale, even if both regions need the vehicle for routes.\n\nNo outside customer means no marketed product on that paperwork.\n\nSo the statement is False.",
        "Fulfilment of wishes and needs makes an exchanged fabric roll a product.\n\nSo the statement is True.",
        "B2B classification of a vehicle depends on the restaurant chain purchaser, not on the seller’s industry. A franchised dealer and a fleet specialist can both make B2B sales when the buyer is a restaurant chain.\n\nSeller industry does not override purchaser identity for the B2B label on that fleet deal.\n\nSo the statement is False.",
        "B2C classification of a vehicle depends on the individual consumer purchaser, not on colourful retail branding. Plain fleet paint sold to a private buyer is still B2C; neon wraps sold to a firm do not invent a household customer.\n\nSo the statement is False.",
        "Money changing hands does not turn a restaurant-chain vehicle purchase into B2C; the buyer is still a business. Payment alone never decides B2B versus B2C — purchaser identity does that sorting.\n\nSo the statement is False.",
    ],
    "CASE 5.1.35": [
        "Exchange value arises when a fabric roll is traded to meet retail-chain or domestic demand.\n\nSo the statement is True.",
        "A cleaning contract sold to a hospital trust is a producer product because another business is the purchaser operating commercially on that site. Firm-to-firm facilities work keeps the producer label.\n\nSo the statement is True.",
        "A cleaning contract sold to a private buyer is a consumer product because the purchaser is a private household or individual consumer. Private premises cleaning keeps it on the B2C side of the vendor’s book.\n\nSo the statement is True.",
        "A vehicle sold to an individual consumer is B2C, not B2B. The seller being a registered company is ordinary and does not reclassify private buyers as business customers for channel labels on the paperwork.\n\nSo the statement is False.",
        "Producer products are not limited to raw materials. A finished vehicle sold to a restaurant chain is a producer product when another business buys it for commercial use. Finished goods sit in the producer lane alongside inputs.\n\nRestricting producer products to raw materials alone would mis-sort every finished fleet vehicle sold B2B into a gap the chapter never opens. Clearly.\n\nSo the statement is False.",
    ],
    "CASE 5.1.36": [
        "Luxury status is not required for a private vehicle to be a consumer product.\n\nSo the statement is False.",
        "The same cleaning contract may be marketed as a producer product in one transaction and a consumer product in another depending on the buyer. A hospital-trust purchase and a private-buyer purchase illustrate the switch without rewriting the service checklist.\n\nBuyer context flips the label; mop technique and shift rotas do not decide producer versus consumer.\n\nThe trust invoice and the private home visit can share a checklist and still sit in opposite categories.\n\nSo the statement is True.",
        "When a firm exchanges a cleaning contract with a hospital trust, the transaction is business-to-business and the item is a producer product. Firm-to-firm commercial exchange is the producer pattern for that service on the trust invoice.\n\nSo the statement is True.",
        "A vehicle becomes a product when exchanged to satisfy demand, not only after advertising creates desire. Ads may help, but exchange is the hinge. An unadvertised car sold to a private buyer is already a consumer product.\n\nPostponing product status until campaigns run would erase quiet dealer-lot sales from the definition the chapter uses.\n\nSo the statement is False.",
        "Marketing classifies a cleaning contract sold for commercial operations to a hospital trust as a producer product rather than a consumer product. Commercial operations by a business buyer are the producer cues for that contract.\n\nSo the statement is True.",
    ],
    "CASE 5.1.37": [
        "A cleaning contract for a private buyer’s domestic use is a consumer product.\n\nSo the statement is True.",
        "A software licence sold to a construction contractor is a producer product. “Every sale ultimately serves human needs” does not re-label firm-to-firm commercial purchases as consumer products.\n\nEmployees who later use the software are not the marketing customer that decides producer versus consumer on the contractor invoice.\n\nSo the statement is False.",
        "A software licence sold to a household shopper is a consumer product. The seller being a business firm is ordinary and does not turn household buyers into producer-product customers for that download or disc.\n\nSo the statement is False.",
        "The same software licence need not keep one fixed product label for all buyers. Design can stay constant while a construction-contractor purchase is producer and a household-shopper purchase is consumer. Fixed design never freezes classification across channels.\n\nOne codebase, two legitimate labels depending on who licenses it — that is the buyer-context rule.\n\nSo the statement is False.",
        "Manufactured physical form is not required for product status. A software licence exchanged with customers is a product even though nothing tangible ships. Claiming it is “not a product” unless manufactured physical goods misstates the definition.\n\nIntangible licences and cleaning contracts both clear the exchange-and-need test without factory form.\n\nSo the statement is False.",
    ],
    "CASE 5.1.38": [
        "A cleaning contract for a hospital trust’s operational needs is a producer product.\n\nSo the statement is True.",
        "A cleaning contract exchanged to fulfil the personal wishes of a private buyer counts as a product in the consumer category. Home cleaning wishes keep that contract on the consumer side of the vendor’s schedule.\n\nPersonal wishes plus private purchaser — consumer, not producer — even when the same crew also cleans hospitals.\n\nThe private-buyer booking is the concrete scene that keeps the consumer label alive.\n\nSo the statement is True.",
        "Producer products include a cleaning contract when sold from one business to a hospital trust for further commercial activity. Firm-to-firm commercial sale is the producer pattern for that service on the trust’s facilities invoice.\n\nSo the statement is True.",
        "Consumer products include a cleaning contract when sold to a private buyer for private or domestic use. Household buyer and private use decide that lane for the home visit.\n\nSo the statement is True.",
        "The marketing term product covers a cleaning contract whether the exchange is B2B with a hospital trust or B2C with a private buyer. Channel changes the subtype, not membership in “product.”\n\nBoth the trust invoice and the private home contract clear the exchange-and-need hurdle the definition requires.\n\nSo the statement is True.",
    ],
    "CASE 5.1.39": [
        "Strong desire without exchange does not make a software licence a marketed product.\n\nSo the statement is False.",
        "A consultancy may list a cleaning contract under producer products when invoicing a hospital trust and under consumer products when invoicing a private buyer. Dual listing mirrors dual buyer contexts for the same service type.\n\nThe invoice party flips the row without rewriting the cleaning checklist between those two deals.\n\nShared mop technique never forces a shared producer-versus-consumer label across buyers.\n\nSo the statement is True.",
        "Fulfilment of wishes and needs makes an exchanged cleaning contract a marketing product.\n\nSo the statement is True.",
        "Exchange value arises when a cleaning contract is traded with a hospital trust or a private buyer to satisfy identifiable demand. Both buyer types can generate that value through a real trade rather than idle interest.\n\nSo the statement is True.",
        "Businesses have wishes and needs — compliance, reporting, uptime. Selling a software licence to a construction contractor includes it among producer products; it does not exclude it from products because “businesses lack needs.”\n\nA contractor invoice for the licence is a counterexample to that invented exclusion sitting in plain sight.\n\nNeeds language applies to firms just as it does to households in this chapter.\n\nSo the statement is False.",
    ],
    "CASE 5.1.40": [
        "A training course sold to a local authority is a producer product.\n\nSo the statement is True.",
        "Households buy products; they are not limited to gifts. A software licence sold to a household shopper is a consumer product because of B2C exchange. Claiming households only receive gifts invents a restriction the chapter does not teach.\n\nHome budgeting app purchases are consumer-product trades, not present-giving from the vendor.\n\nSo the statement is False.",
        "A training course sold to a home user is a consumer product because the purchaser is a private household or individual consumer. Private learning keeps it on the B2C side of the academy’s timetable.\n\nSo the statement is True.",
        "The same training course may be marketed as a producer product in one transaction and a consumer product in another depending on the buyer. A local-authority staff booking and a home-user evening seat illustrate the switch without rewriting the syllabus.\n\nBuyer context flips the label; slide decks and room numbers do not.\n\nSo the statement is True.",
        "When a firm exchanges a training course with a local authority, the transaction is business-to-business and the item is a producer product. Firm-to-firm commercial exchange is the producer pattern — parallel to the catering firm’s conference lunches for corporate clients versus birthday trays for families.\n\nThe authority invoice marks the producer side of that dual channel clearly.\n\nSo the statement is True.",
    ],
}


def main() -> None:
    data = json.loads(PATH.read_text())
    by_id = {c["case_id"]: c for c in data}
    for cid, expls in REWRITES.items():
        if cid not in by_id:
            raise SystemExit(f"missing {cid}")
        c = by_id[cid]
        if len(expls) != 5:
            raise SystemExit(f"{cid}: expected 5 explanations")
        for i, e in enumerate(expls):
            want = "True" if c["answer_key"][i] else "False"
            if not e.rstrip().endswith(f"So the statement is {want}."):
                raise SystemExit(f"{cid} {chr(65+i)}: closer mismatch")
        c["tactical_explanations"] = expls
    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
    print(f"Updated {len(REWRITES)} cases in {PATH}")


if __name__ == "__main__":
    main()
