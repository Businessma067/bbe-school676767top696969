#!/usr/bin/env python3
"""Rewrite tactical_explanations for CASE 5.1.01–CASE 5.1.50 from scratch (ch6 teacher voice)."""
from __future__ import annotations

import json
from pathlib import Path

PATH = Path("/workspace/src/data/economics-cases-ch5-subtopics.json")

# Each value: list of 5 explanation strings ending with So the statement is True/False.
REWRITES: dict[str, list[str]] = {
    "CASE 5.1.01": [
        "Services sit inside the marketing product definition. A consultancy hour or a maintenance visit sold to a customer is still a product even though nothing physical changes hands.\n\nPhysical goods alone are too narrow.\n\nSo the statement is False.",
        "In marketing language a product is every good and/or service that can be exchanged to fulfil customers’ wishes and needs.\n\nMerchandise and services both count once that exchange is on the table.\n\nSo the statement is True.",
        "Producer versus consumer turns on who buys, not on whether the item left a factory.\n\nA printer sold to another firm is a producer product; the same model sold to a household is a consumer product. Factory origin does not decide the label.\n\nSo the statement is False.",
        "Retail packaging size does not define a consumer product. Household versus business buyer does.\n\nA small bag sold to a supermarket shopper can be consumer; a bulk sack sold to a restaurant can be producer — packaging is not the test.\n\nSo the statement is False.",
        "Households are visible printer users, but that does not freeze every printer as a consumer product.\n\nAn office printer bought by a logistics firm is a producer product; the identical model sold for home use is a consumer product. “Always” fails the buyer test.\n\nSo the statement is False.",
    ],
    "CASE 5.1.02": [
        "Manufacturer supply chains do not lock a printer into the producer-product box.\n\nSold to a private household for home use, that printer is a consumer product even though a factory made it for commercial distribution.\n\nSo the statement is False.",
        "Marketing’s product idea is simple: any good or service offered through exchange to satisfy customer wishes and needs.\n\nSo the statement is True.",
        "Tangible goods and intangible services both qualify once they are exchanged with customers.\n\nA printer and a support contract can each be products under that rule.\n\nSo the statement is True.",
        "Introductory marketing treats other businesses and private households as legitimate customers of products.\n\nB2B and B2C are both inside the frame.\n\nSo the statement is True.",
        "Producer products are the goods and services one business sells to another in business-to-business exchange.\n\nSo the statement is True.",
    ],
    "CASE 5.1.03": [
        "Consumer products are goods and services sold to consumers or private households in business-to-consumer exchange.\n\nSo the statement is True.",
        "Lack of physical form does not eject computer support from the product set.\n\nWhen support is sold to customers, marketing still calls it a product — service form, not an exception.\n\nSo the statement is False.",
        "Business-to-business marketing is the channel that carries producer products between firms.\n\nSo the statement is True.",
        "Business-to-consumer marketing is the channel that carries consumer products to private households.\n\nSo the statement is True.",
        "Buyer use decides the label. A printer bought for office operations by a business is a producer product even when an identical home model sits in the catalogue.\n\nSo the statement is True.",
    ],
    "CASE 5.1.04": [
        "Free after-sales advice may help the customer, but without payment or another form of exchange it is not a marketed product in this chapter’s sense.\n\nSatisfaction alone does not create product status.\n\nSo the statement is False.",
        "Private home use puts a printer in the consumer-product category, even when offices buy the same model as a producer product.\n\nSo the statement is True.",
        "Computer support sold mainly to private households is a consumer product delivered as a service.\n\nSo the statement is True.",
        "Moving office supplies between departments inside one company is an internal transfer, not a market exchange with an outside customer.\n\nThat move is not a product in the marketing sense.\n\nSo the statement is False.",
        "Computer support sold to other businesses is a producer product in service form — firm-to-firm exchange.\n\nSo the statement is True.",
    ],
    "CASE 5.1.05": [
        "B2B and B2C name the customer relationship, not the production technology on the factory floor.\n\nWho purchases — firm or household — sets those labels.\n\nSo the statement is False.",
        "Exchange is required before marketing treats a good or service as a product.\n\nDesire without a trade is not enough.\n\nSo the statement is True.",
        "A maintenance contract exchanged to fulfil customer needs is a product even though it is a service.\n\nSo the statement is True.",
        "Equipment and materials count as products when they are exchanged to fulfil customer wishes and needs.\n\nSo the statement is True.",
        "A corporate client buying a printer for commercial use is another business, so the sale is a producer product.\n\nSo the statement is True.",
    ],
    "CASE 5.1.06": [
        "A private household or individual consumer purchasing a printer places that sale in the consumer-product category.\n\nSo the statement is True.",
        "One printer design can be billed as a producer product to a corporate client and as a consumer product to a household.\n\nThe buyer in that transaction flips the label without redesigning the machine.\n\nSo the statement is True.",
        "Firm-to-firm exchange of a printer with a corporate client is business-to-business, and the item is a producer product.\n\nSo the statement is True.",
        "Firm-to-household exchange of a printer is business-to-consumer, and the item is a consumer product.\n\nSo the statement is True.",
        "Commercial operations for a corporate client put the printer among producer products, not among household consumer products.\n\nSo the statement is True.",
    ],
    "CASE 5.1.07": [
        "Other businesses are customers too.\n\nSo the statement is False.",
        "A gift with no exchange may please the recipient, but marketing reserves “product” for offerings traded with customers.\n\nHanding someone a free printer as a present does not turn that gift into a marketed product under the exchange test.\n\nSo the statement is False.",
        "Portability does not create a consumer product. A compact printer sold to an office is still a producer product; size is not the test.\n\nSo the statement is False.",
        "Personal or domestic use by a private household puts the printer in the consumer-product category rather than the producer category.\n\nSo the statement is True.",
        "Weight or bulk does not create a producer product.\n\nA heavy machine sold to a household for home use remains a consumer product; mass is irrelevant to B2B versus B2C.\n\nSo the statement is False.",
    ],
    "CASE 5.1.08": [
        "Services sold only to businesses are producer products. Ultimate human beneficiaries do not re-label firm-to-firm exchange as consumer.\n\nSo the statement is False.",
        "A corporate client is a business buyer, so the printer is a producer product.\n\nSaying every sale “ultimately serves human needs” does not flip that B2B purchase into a consumer product.\n\nSo the statement is False.",
        "Exchanging a printer to meet a corporate client’s operational needs creates a marketed product on the producer side.\n\nSo the statement is True.",
        "The seller being a business firm is true of almost every marketed offering. A private household buyer still makes that printer a consumer product, not a producer product.\n\nSo the statement is False.",
        "Design can stay fixed while the buyer changes. Corporate sale → producer; household sale → consumer.\n\nOne permanent label for all buyers fights that switch.\n\nSo the statement is False.",
    ],
    "CASE 5.1.09": [
        "Exchanging a printer to meet a private household’s personal wishes places it among consumer products.\n\nSo the statement is True.",
        "Sold from one business to a corporate client for further commercial activity, the printer sits among producer products.\n\nSo the statement is True.",
        "Manufactured physical form is not a gatekeeper. Services exchanged with customers are products too, and even for goods the exchange-and-need test is what matters.\n\nClaiming a printer is “not a product” unless it is manufactured physical goods misstates the definition.\n\nSo the statement is False.",
        "Strong desire without exchange does not create a marketed product. The printer needs a trade with a customer.\n\nSo the statement is False.",
        "Sold to a private household for private consumption or domestic use, the printer is a consumer product.\n\nSo the statement is True.",
    ],
    "CASE 5.1.10": [
        "Whether the invoice goes to a corporate client (B2B) or a private household (B2C), an exchanged printer is still a product in marketing terms.\n\nSo the statement is True.",
        "The same consultancy can book the printer under producer products for a corporate client and under consumer products for a private household.\n\nBuyer channel splits the catalogue row.\n\nSo the statement is True.",
        "Fulfilment of customer wishes and needs is the purpose that turns an exchanged printer into a marketing product.\n\nSo the statement is True.",
        "Trading the printer with a corporate client or a private household creates exchange value when it satisfies identifiable demand on either side.\n\nSo the statement is True.",
        "A manufacturing firm buying a computer for commercial use is another business, so that sale is a producer product.\n\nSo the statement is True.",
    ],
    "CASE 5.1.11": [
        "A family home purchasing a computer is a private household buyer, so the sale is a consumer product.\n\nSo the statement is True.",
        "Businesses have operational wishes and needs. A printer sold to a corporate client is still a product — a producer product — not an exclusion from the product set.\n\nSo the statement is False.",
        "Households buy products for private use. A printer sold to a private household is a consumer product, not a gift outside marketing.\n\nSo the statement is False.",
        "One computer specification can be producer for a manufacturing firm and consumer for a family home, depending on who pays.\n\nSo the statement is True.",
        "Branch-to-branch transfers inside one corporation never leave the firm as a market exchange.\n\nWithout an outside customer, that printer move is not a marketed product.\n\nSo the statement is False.",
    ],
    "CASE 5.1.12": [
        "Firm sells computer to manufacturing firm → B2B producer product.\n\nSo the statement is True.",
        "Commercial operations for a manufacturing firm put the computer among producer products rather than household consumer products.\n\nThe buyer’s commercial role — not the machine’s appearance — is what keeps it off the consumer list.\n\nSo the statement is True.",
        "Family home, personal use: consumer product.\n\nSo the statement is True.",
        "Meeting a manufacturing firm’s operational needs through exchange places the computer in the producer-product category.\n\nSo the statement is True.",
        "When the family home’s personal wishes are met by that paid computer, marketing parks the sale in the consumer-product category.\n\nSo the statement is True.",
    ],
    "CASE 5.1.13": [
        "B2B hinges on the corporate client as purchaser, not on which industry the seller sits in.\n\nChange the buyer to a household and the same seller’s printer becomes B2C.\n\nSo the statement is False.",
        "Sold from one business to a manufacturing firm for further commercial activity, the computer is a producer product.\n\nSo the statement is True.",
        "Colourful retail branding does not decide B2C. The private household as purchaser does.\n\nSo the statement is False.",
        "Sold to a family home for private consumption or domestic use, the computer is a consumer product.\n\nSo the statement is True.",
        "B2B with a manufacturing firm or B2C with a family home — either way, an exchanged computer is a product.\n\nSo the statement is True.",
    ],
    "CASE 5.1.14": [
        "Payment only proves exchange happened. The corporate client is still a business buyer, so the printer is B2B producer — not B2C.\n\nSo the statement is False.",
        "Company registration on the seller’s side does not create B2B.\n\nSo the statement is False.",
        "Producer products are not limited to raw materials. A finished printer sold to a corporate client is still a producer product because the buyer is a business.\n\nSo the statement is False.",
        "Everyday household printers still count as consumer products. Luxury branding is not part of the definition.\n\nA routine model sold to a private household is B2C consumer regardless of how plain the packaging looks.\n\nSo the statement is False.",
        "Invoice the manufacturing firm and the computer sits under producer products; invoice the family home and it sits under consumer products.\n\nSame item, two customer channels.\n\nSo the statement is True.",
    ],
    "CASE 5.1.15": [
        "An exchanged computer becomes a marketing product because it fulfils customer wishes and needs.\n\nSo the statement is True.",
        "A campaign can create awareness, yet the printer becomes a product only when it is exchanged with a customer.\n\nLaunch-day advertising is not the moment product status begins.\n\nSo the statement is False.",
        "A manufacturing firm is a business buyer, so the computer is a producer product.\n\nUltimate human needs do not reclassify that B2B purchase as consumer.\n\nSo the statement is False.",
        "The seller being a business firm does not make a family-home computer a producer product. The household is a private consumer, so the sale is B2C.\n\nSo the statement is False.",
        "The same computer can be producer for a manufacturing firm and consumer for a family home with no design change.\n\nA single permanent label ignores that buyer switch.\n\nSo the statement is False.",
    ],
    "CASE 5.1.16": [
        "Even setting the computer aside, marketing products include exchanged services. Restricting “product” to manufactured physical goods is too narrow either way.\n\nA computer traded to meet customer needs is already a product; the claim’s gatekeeper is wrong.\n\nSo the statement is False.",
        "Trading a computer with a manufacturing firm or a family home creates exchange value when it satisfies identifiable customer demand.\n\nSo the statement is True.",
        "Desire alone is not enough. Without an exchange with a customer, the computer is not yet a marketed product.\n\nSo the statement is False.",
        "Firms have operational wishes and needs. Selling a computer to a manufacturing firm still creates a product — a producer product.\n\nExcluding business buyers is wrong.\n\nSo the statement is False.",
        "Family homes buy products, not mere gifts. A computer sold to a family home is a consumer product.\n\nSo the statement is False.",
    ],
    "CASE 5.1.17": [
        "Logistics company as purchaser → producer product.\n\nSo the statement is True.",
        "A resident purchasing a desk is a private household or individual consumer, so the desk is a consumer product.\n\nSo the statement is True.",
        "One desk design can be producer for a logistics company and consumer for a resident, depending on who buys.\n\nNothing about the timber or finish has to change for that dual labelling to work.\n\nSo the statement is True.",
        "Firm-to-firm exchange of a desk with a logistics company is business-to-business, and the item is a producer product.\n\nSo the statement is True.",
        "Commercial operations for a logistics company put the desk among producer products rather than household consumer products.\n\nA warehouse office desk is not reclassified as consumer just because similar models appear in homes.\n\nSo the statement is True.",
    ],
    "CASE 5.1.18": [
        "Personal or domestic use by a resident puts the desk in the consumer-product category rather than the producer category.\n\nSo the statement is True.",
        "Internal branch transfers of a computer stay inside the corporation. No outside exchange means no marketed product.\n\nSo the statement is False.",
        "Meeting a logistics company’s operational needs through exchange places the desk in the producer-product category.\n\nSo the statement is True.",
        "Meeting a resident’s personal wishes through exchange places the desk in the consumer-product category.\n\nSo the statement is True.",
        "B2B classification follows the manufacturing firm as purchaser, not the seller’s industry code.\n\nSwap the buyer to a household and the same computer seller would be in B2C.\n\nSo the statement is False.",
    ],
    "CASE 5.1.19": [
        "Business sells desk to logistics company for commercial activity → producer product.\n\nSo the statement is True.",
        "Shelf graphics and colourful branding do not decide B2C.\n\nThe family-home purchaser does. Brand a computer loudly and still sell it to a factory, and you remain in B2B producer territory.\n\nSo the statement is False.",
        "Sold to a resident for private consumption or domestic use, the desk is a consumer product.\n\nSo the statement is True.",
        "Whether the desk goes to a logistics company (B2B) or a resident (B2C), an exchanged desk is still a product.\n\nSo the statement is True.",
        "A consultancy can list the desk under producer products when invoicing a logistics company and under consumer products when invoicing a resident.\n\nSo the statement is True.",
    ],
    "CASE 5.1.20": [
        "Fulfilment of customer wishes and needs is what makes an exchanged desk a product in marketing terminology.\n\nSo the statement is True.",
        "Trading the desk with a logistics company or a resident creates exchange value when it satisfies identifiable demand.\n\nSo the statement is True.",
        "A restaurant chain buying a vehicle for commercial use is another business, so the vehicle is a producer product.\n\nSo the statement is True.",
        "An individual consumer purchasing a vehicle is a private household buyer, so the vehicle is a consumer product.\n\nSo the statement is True.",
        "The same vehicle model can be marketed as a producer product to a restaurant chain and as a consumer product to an individual, depending on the buyer.\n\nSo the statement is True.",
    ],
    "CASE 5.1.21": [
        "Restaurant chain buys the vehicle → B2B producer product.\n\nSo the statement is True.",
        "Commercial operations for a restaurant chain put the vehicle among producer products rather than household consumer products.\n\nDelivery vans on a restaurant account stay producer even if families drive similar models privately.\n\nSo the statement is True.",
        "Individual consumer, domestic use: consumer product.\n\nSo the statement is True.",
        "Meeting a restaurant chain’s operational needs through exchange places the vehicle in the producer-product category.\n\nSo the statement is True.",
        "When an individual consumer’s personal wishes are met by that purchase, the vehicle sits in the consumer-product category.\n\nSo the statement is True.",
    ],
    "CASE 5.1.22": [
        "Cash at the till does not convert a manufacturing-firm computer sale into B2C. Organisational buyer → B2B.\n\nSo the statement is False.",
        "A family home is a private consumer. The seller’s company registration does not flip that computer sale into B2B.\n\nSo the statement is False.",
        "Finished computers sold to manufacturing firms are producer products. The “raw materials only” rule is too narrow.\n\nSo the statement is False.",
        "Sold from one business to a restaurant chain for further commercial activity, the vehicle is a producer product.\n\nSo the statement is True.",
        "Luxury is not a membership rule for consumer products.\n\nA plain, routine computer sold to a family home is still a consumer product under B2C exchange.\n\nSo the statement is False.",
    ],
    "CASE 5.1.23": [
        "Sold to an individual consumer for private consumption or domestic use, the vehicle is a consumer product.\n\nSo the statement is True.",
        "When a computer is traded with a customer it is a product — the ad launch date does not decide that.\n\nDemand may grow from promotion, but exchange is what marketing counts.\n\nSo the statement is False.",
        "A logistics company is a business buyer, so the desk is a producer product.\n\nUltimate human needs do not turn that B2B sale into a consumer product.\n\nSo the statement is False.",
        "B2B with a restaurant chain or B2C with an individual consumer — either way, an exchanged vehicle is a product.\n\nSo the statement is True.",
        "Invoice the restaurant chain and the vehicle sits under producer products; invoice the individual consumer and it sits under consumer products.\n\nSo the statement is True.",
    ],
    "CASE 5.1.24": [
        "An exchanged vehicle becomes a marketing product because it fulfils customer wishes and needs.\n\nSo the statement is True.",
        "The seller being a business firm does not make a resident’s desk a producer product. The resident is a private consumer, so the sale is B2C.\n\nSo the statement is False.",
        "Design can stay fixed while the buyer changes. Logistics company → producer desk; resident → consumer desk.\n\nOne fixed label for all buyers is too rigid.\n\nSo the statement is False.",
        "Desks are often physical goods, but that is not the gatekeeper for product status — and services exchanged with customers are products too.\n\nSaying a desk is “not a product” unless it is a manufactured physical good misstates the marketing definition.\n\nSo the statement is False.",
        "Trading the vehicle with a restaurant chain or an individual consumer creates exchange value when it satisfies identifiable customer demand.\n\nSo the statement is True.",
    ],
    "CASE 5.1.25": [
        "A construction contractor buying a software licence for commercial use is another business, so the licence is a producer product.\n\nSo the statement is True.",
        "Desire without a trade is not enough for the desk.\n\nSo the statement is False.",
        "Logistics companies have operational wishes and needs just as households do.\n\nSelling them a desk still creates a marketed product — a producer product — rather than shutting business buyers out of the product concept.\n\nSo the statement is False.",
        "Residents buy products for private use. A desk sold to a resident is a consumer product, not a gift outside marketing.\n\nSo the statement is False.",
        "A household shopper purchasing a software licence is a private consumer, so the licence is a consumer product.\n\nSo the statement is True.",
    ],
    "CASE 5.1.26": [
        "One software licence can be producer for a construction contractor and consumer for a household shopper, depending on who buys.\n\nSo the statement is True.",
        "Firm-to-firm exchange of a software licence with a construction contractor is business-to-business, and the item is a producer product.\n\nSo the statement is True.",
        "Commercial operations for a construction contractor put the software licence among producer products rather than household consumer products.\n\nSo the statement is True.",
        "Moving a desk between branches inside one corporation is an internal transfer, not a sale to an outside customer.\n\nThat move is not a marketed product.\n\nSo the statement is False.",
        "Personal or domestic use by a household shopper puts the software licence among consumer products rather than producer products.\n\nSo the statement is True.",
    ],
    "CASE 5.1.27": [
        "Contractor’s operational needs met by exchanged software licence → producer product.\n\nSo the statement is True.",
        "B2B turns on the logistics company as purchaser. The seller’s industry label does not override purchaser identity for a desk sale.\n\nSo the statement is False.",
        "Meeting a household shopper’s personal wishes through exchange places the software licence in the consumer-product category.\n\nSo the statement is True.",
        "B2C turns on the resident as purchaser, not on colourful retail branding around the desk.\n\nSo the statement is False.",
        "Money changing hands on a logistics-company desk invoice only shows payment occurred.\n\nThe buyer remains a business, so the sale stays B2B producer, not B2C.\n\nSo the statement is False.",
    ],
    "CASE 5.1.28": [
        "Sold from one business to a construction contractor for further commercial activity, the software licence is a producer product.\n\nSo the statement is True.",
        "Resident buyer → B2C. Seller’s company papers do not flip it to B2B.\n\nSo the statement is False.",
        "Sold to a household shopper for private consumption or domestic use, the software licence is a consumer product.\n\nSo the statement is True.",
        "Producer products include finished goods sold to businesses.\n\nA finished desk sold to a logistics company is still a producer product; raw materials are only one slice of that set.\n\nSo the statement is False.",
        "A routine desk sold to a resident is still a consumer product. Luxury status is not required.\n\nSo the statement is False.",
    ],
    "CASE 5.1.29": [
        "Advertising may precede demand, but the desk becomes a product when it is exchanged with a customer.\n\nSo the statement is False.",
        "Whether the software licence goes to a construction contractor (B2B) or a household shopper (B2C), an exchanged licence is still a product.\n\nSo the statement is True.",
        "A consultancy can book the software licence under producer products for a construction contractor and under consumer products for a household shopper.\n\nSo the statement is True.",
        "A restaurant chain is a business buyer, so the vehicle is a producer product.\n\nUltimate human needs do not re-label that B2B purchase as consumer.\n\nSo the statement is False.",
        "Fulfilment of customer wishes and needs is the purpose that makes an exchanged software licence a marketing product.\n\nSo the statement is True.",
    ],
    "CASE 5.1.30": [
        "Trading a software licence with a construction contractor or a household shopper creates exchange value when it satisfies identifiable demand.\n\nSo the statement is True.",
        "A retail chain buying a fabric roll for commercial use is another business, so the roll is a producer product.\n\nSo the statement is True.",
        "A domestic customer purchasing a fabric roll is a private household buyer, so the roll is a consumer product.\n\nSo the statement is True.",
        "The same fabric roll can be marketed as a producer product to a retail chain and as a consumer product to a domestic customer.\n\nBuyer identity switches the label.\n\nSo the statement is True.",
        "Exchanging a fabric roll with a retail chain is business-to-business, and the item is a producer product.\n\nSo the statement is True.",
    ],
    "CASE 5.1.31": [
        "Domestic customer → B2C consumer product.\n\nSo the statement is True.",
        "Commercial operations for a retail chain put the fabric roll among producer products rather than household consumer products.\n\nWholesale rolls for store stock stay producer even when craft shops sell remnants to hobbyists.\n\nSo the statement is True.",
        "Personal or domestic use by a domestic customer puts the fabric roll among consumer products rather than producer products.\n\nSo the statement is True.",
        "Meeting a retail chain’s operational needs through exchange places the fabric roll in the producer-product category.\n\nSo the statement is True.",
        "When a domestic customer’s personal wishes are met by that fabric purchase, marketing records a consumer product.\n\nSo the statement is True.",
    ],
    "CASE 5.1.32": [
        "The seller being a business firm does not make an individual consumer’s vehicle a producer product. The buyer is a private consumer, so the sale is B2C.\n\nSo the statement is False.",
        "Sold from one business to a retail chain for further commercial activity, the fabric roll is a producer product.\n\nSo the statement is True.",
        "Sold to a domestic customer for private consumption or domestic use, the fabric roll is a consumer product.\n\nSo the statement is True.",
        "The same vehicle can be producer for a restaurant chain and consumer for an individual with no design change.\n\nLocking one fixed label for all buyers is wrong.\n\nSo the statement is False.",
        "Vehicles are typically physical goods, but product status does not require “manufactured physical good” as a gatekeeper — and exchanged services are products too.\n\nThe claim is too narrow.\n\nSo the statement is False.",
    ],
    "CASE 5.1.33": [
        "Wanting a vehicle is not the same as exchanging for one.\n\nSo the statement is False.",
        "B2B with a retail chain or B2C with a domestic customer — either way, an exchanged fabric roll is a product.\n\nSo the statement is True.",
        "Invoice the retail chain and the fabric roll sits under producer products; invoice the domestic customer and it sits under consumer products.\n\nSo the statement is True.",
        "Restaurant chains have operational wishes and needs. Selling them a vehicle still creates a product — a producer product.\n\nExcluding business buyers from the product set because they are firms is a misread of the chapter.\n\nSo the statement is False.",
        "Individual consumers buy products for private use. A vehicle sold to an individual is a consumer product, not a gift outside marketing.\n\nSo the statement is False.",
    ],
    "CASE 5.1.34": [
        "Shifting a vehicle between branches inside one corporation never leaves the firm as a market exchange.\n\nInternal transfers are not marketed products.\n\nSo the statement is False.",
        "An exchanged fabric roll becomes a marketing product because it fulfils customer wishes and needs.\n\nSo the statement is True.",
        "B2B hinges on the restaurant chain as purchaser, not on the seller’s industry.\n\nSo the statement is False.",
        "Colourful retail branding does not decide B2C. The individual consumer as purchaser does for a vehicle sale.\n\nSo the statement is False.",
        "Payment alone does not make a restaurant-chain vehicle sale B2C. That buyer is organisational, so the sale stays B2B.\n\nSo the statement is False.",
    ],
    "CASE 5.1.35": [
        "Trading a fabric roll with a retail chain or a domestic customer creates exchange value when it satisfies identifiable customer demand.\n\nSo the statement is True.",
        "A hospital trust buying a cleaning contract for commercial/organisational use is another business, so the contract is a producer product.\n\nSo the statement is True.",
        "A private buyer purchasing a cleaning contract is a private household or individual consumer, so the contract is a consumer product.\n\nSo the statement is True.",
        "Individual consumer remains a private buyer.\n\nSo the statement is False.",
        "Finished vehicles sold to restaurant chains are producer products.\n\nLimiting producer products to raw materials alone would wrongly eject every finished van, laptop, or desk from B2B classification.\n\nSo the statement is False.",
    ],
    "CASE 5.1.36": [
        "Routine household vehicles still qualify as consumer products.\n\nSo the statement is False.",
        "One cleaning contract can be producer for a hospital trust and consumer for a private buyer, depending on who pays.\n\nSo the statement is True.",
        "Firm-to-firm exchange of a cleaning contract with a hospital trust is business-to-business, and the item is a producer product.\n\nSo the statement is True.",
        "An advertisement may spark interest in a vehicle, but marketing counts the product when the trade happens, not when the campaign airs.\n\nSo the statement is False.",
        "Commercial operations for a hospital trust put the cleaning contract among producer products rather than household consumer products.\n\nSo the statement is True.",
    ],
    "CASE 5.1.37": [
        "Personal or domestic use by a private buyer puts the cleaning contract among consumer products rather than producer products.\n\nSo the statement is True.",
        "A construction contractor is a business buyer, so the software licence is a producer product.\n\nUltimate human needs do not turn that B2B sale into a consumer product.\n\nSo the statement is False.",
        "The seller being a business firm does not make a household shopper’s software licence a producer product. The shopper is a private consumer.\n\nSo the statement is False.",
        "Design can stay fixed while the buyer changes. Contractor → producer licence; household shopper → consumer licence.\n\nOne permanent label for all buyers fights that switch.\n\nSo the statement is False.",
        "Software licences are typically intangible services or rights, yet traded to meet customer needs they are still products.\n\nRequiring a manufactured physical good is too narrow.\n\nSo the statement is False.",
    ],
    "CASE 5.1.38": [
        "Hospital trust’s operational needs + exchange → producer-product cleaning contract.\n\nSo the statement is True.",
        "Private buyer’s personal wishes + exchange → consumer-product cleaning contract.\n\nHousehold cleaning for a private buyer is not re-labelled producer just because the same crew also serves trusts.\n\nSo the statement is True.",
        "Sold from one business to a hospital trust for further commercial activity, the cleaning contract is a producer product.\n\nSo the statement is True.",
        "Sold to a private buyer for private consumption or domestic use, the cleaning contract is a consumer product.\n\nSo the statement is True.",
        "Whether the cleaning contract goes to a hospital trust (B2B) or a private buyer (B2C), an exchanged contract is still a product.\n\nSo the statement is True.",
    ],
    "CASE 5.1.39": [
        "Desire without exchange does not make a software licence a marketed product.\n\nSo the statement is False.",
        "A consultancy can list the cleaning contract under producer products when invoicing a hospital trust and under consumer products when invoicing a private buyer.\n\nSo the statement is True.",
        "Fulfilment of customer wishes and needs is the purpose that makes an exchanged cleaning contract a marketing product.\n\nSo the statement is True.",
        "Trading the cleaning contract with a hospital trust or a private buyer creates exchange value when it satisfies identifiable demand.\n\nSo the statement is True.",
        "Construction contractors have operational wishes and needs. Selling them a software licence still creates a product — a producer product.\n\nFirms are not barred from the product concept; they simply sit on the B2B side.\n\nSo the statement is False.",
    ],
    "CASE 5.1.40": [
        "A local authority buying a training course for organisational use is another business (organisational) buyer, so the course is a producer product.\n\nSo the statement is True.",
        "Household shoppers buy products for private use. A software licence sold to a household shopper is a consumer product, not a gift outside marketing.\n\nSo the statement is False.",
        "A home user purchasing a training course is a private household or individual consumer, so the course is a consumer product.\n\nSo the statement is True.",
        "The same training course can be marketed as a producer product to a local authority and as a consumer product to a home user.\n\nBuyer channel splits the label.\n\nSo the statement is True.",
        "Exchanging a training course with a local authority is business-to-business, and the item is a producer product.\n\nSo the statement is True.",
    ],
    "CASE 5.1.41": [
        "Home-user training course → B2C consumer product.\n\nSo the statement is True.",
        "Commercial operations for a local authority put the training course among producer products rather than household consumer products.\n\nSo the statement is True.",
        "Personal or domestic use by a home user puts the training course among consumer products rather than producer products.\n\nSo the statement is True.",
        "Branch-to-branch transfers of a software licence inside one corporation stay inside the firm.\n\nNo outside customer pays, so that internal move is not a marketed product under the exchange test.\n\nSo the statement is False.",
        "Meeting a local authority’s operational needs through exchange places the training course in the producer-product category.\n\nSo the statement is True.",
    ],
    "CASE 5.1.42": [
        "B2B classification follows the construction contractor as purchaser, not the seller’s industry code.\n\nSwap the buyer to a household and the same software seller would be in B2C.\n\nSo the statement is False.",
        "Meeting a home user’s personal wishes through exchange places the training course in the consumer-product category.\n\nSo the statement is True.",
        "Colourful retail branding is irrelevant to B2C. The household shopper as purchaser decides for a software-licence sale.\n\nSo the statement is False.",
        "Sold from one business to a local authority for further commercial activity, the training course is a producer product.\n\nSo the statement is True.",
        "Sold to a home user for private consumption or domestic use, the training course is a consumer product.\n\nSo the statement is True.",
    ],
    "CASE 5.1.43": [
        "B2B with a local authority or B2C with a home user — either way, an exchanged training course is a product.\n\nSo the statement is True.",
        "A consultancy can book the training course under producer products for a local authority and under consumer products for a home user.\n\nSo the statement is True.",
        "Wishes and needs fulfilled via exchange make the training course a product.\n\nSo the statement is True.",
        "Trading the training course with a local authority or a home user creates exchange value when it satisfies identifiable customer demand.\n\nSo the statement is True.",
        "An export buyer purchasing a broadband package for commercial use is another business, so the package is a producer product.\n\nCross-border does not change the B2B logic — purchaser identity still governs.\n\nSo the statement is True.",
    ],
    "CASE 5.1.44": [
        "Payment does not turn a contractor software sale into B2C. Business buyer → B2B.\n\nSo the statement is False.",
        "A household shopper is a private consumer. The seller’s company registration does not flip that software-licence sale into B2B.\n\nSo the statement is False.",
        "A personal customer purchasing a broadband package is a private household or individual consumer, so the package is a consumer product.\n\nResidential broadband sits on the B2C side even when the provider also sells enterprise packages.\n\nSo the statement is True.",
        "Finished software licences sold to construction contractors are producer products. Restricting producer products to raw materials alone is too narrow.\n\nSo the statement is False.",
        "A routine software licence sold to a household shopper is still a consumer product. Luxury status is not required.\n\nSo the statement is False.",
    ],
    "CASE 5.1.45": [
        "A software licence is a product when exchanged with a customer. Promotion may help demand form, but the campaign itself does not confer product status.\n\nSo the statement is False.",
        "A retail chain is a business buyer, so the fabric roll is a producer product.\n\nUltimate human needs do not reclassify that B2B purchase as consumer.\n\nSo the statement is False.",
        "The seller being a business firm does not make a domestic customer’s fabric roll a producer product. The domestic customer is a private consumer.\n\nSo the statement is False.",
        "One broadband package can be producer for an export buyer and consumer for a personal customer without any redesign.\n\nSo the statement is True.",
        "The same fabric roll can be producer for a retail chain and consumer for a domestic customer with no design change.\n\nA single permanent label ignores that buyer switch.\n\nSo the statement is False.",
    ],
    "CASE 5.1.46": [
        "Even for a physical fabric roll, marketing does not reserve “product” for manufactured goods alone — and the roll traded to meet customer needs already qualifies.\n\nThe manufactured-physical-good gatekeeper is too narrow.\n\nSo the statement is False.",
        "Desire alone is not enough. Without an exchange with a customer, the fabric roll is not yet a marketed product.\n\nSo the statement is False.",
        "Retail chains have operational wishes and needs. Selling them a fabric roll still creates a product — a producer product.\n\nExcluding business buyers is wrong.\n\nSo the statement is False.",
        "Exchanging a broadband package with an export buyer is business-to-business, and the item is a producer product.\n\nSo the statement is True.",
        "Domestic customers buy products for private use. A fabric roll sold to a domestic customer is a consumer product, not a gift outside marketing.\n\nSo the statement is False.",
    ],
    "CASE 5.1.47": [
        "Exchanging a broadband package with a personal customer is business-to-consumer, and the item is a consumer product.\n\nSo the statement is True.",
        "Commercial operations for an export buyer put the broadband package among producer products rather than household consumer products.\n\nSo the statement is True.",
        "Moving a fabric roll between branches inside one corporation is an internal transfer, not a market exchange with an outside customer.\n\nThat move is not a marketed product.\n\nSo the statement is False.",
        "Personal or domestic use by a personal customer puts the broadband package among consumer products rather than producer products.\n\nSo the statement is True.",
        "Meeting an export buyer’s operational needs through exchange places the broadband package in the producer-product category.\n\nSo the statement is True.",
    ],
    "CASE 5.1.48": [
        "Personal customer’s wishes + exchanged broadband → consumer product.\n\nSo the statement is True.",
        "Sold from one business to an export buyer for further commercial activity, the broadband package is a producer product.\n\nSo the statement is True.",
        "B2B turns on the retail chain as purchaser.\n\nThe fabric seller’s industry code does not decide the producer label; swap in a household buyer and the same seller would be in B2C.\n\nSo the statement is False.",
        "Sold to a personal customer for private consumption or domestic use, the broadband package is a consumer product.\n\nSo the statement is True.",
        "B2C turns on the domestic customer as purchaser, not on colourful retail branding around the fabric roll.\n\nSo the statement is False.",
    ],
    "CASE 5.1.49": [
        "Whether the broadband package goes to an export buyer (B2B) or a personal customer (B2C), an exchanged package is still a product.\n\nSo the statement is True.",
        "Retail-chain fabric sale stays B2B despite payment.\n\nSo the statement is False.",
        "A domestic customer is a private consumer. Seller registration does not make the fabric-roll sale B2B.\n\nSo the statement is False.",
        "Finished fabric rolls sold to retail chains are producer products. The “raw materials only” rule is too narrow.\n\nSo the statement is False.",
        "A routine fabric roll sold to a domestic customer is still a consumer product.\n\nLuxury fabric is not required — everyday metres for home sewing qualify under B2C.\n\nSo the statement is False.",
    ],
    "CASE 5.1.50": [
        "A consultancy can list the broadband package under producer products when invoicing an export buyer and under consumer products when invoicing a personal customer.\n\nSo the statement is True.",
        "Exchanged broadband fulfils wishes and needs → marketing product.\n\nSo the statement is True.",
        "Trading the broadband package with an export buyer or a personal customer creates exchange value when it satisfies identifiable demand.\n\nSo the statement is True.",
        "A warehouse operator buying a catering tray for commercial use is another business, so the tray is a producer product.\n\nSo the statement is True.",
        "Advertising may precede demand, but the fabric roll becomes a product when it is exchanged with a customer.\n\nA catalogue launch without a trade does not yet create product status in this chapter’s sense.\n\nSo the statement is False.",
    ],
}

def main() -> None:
    data = json.loads(PATH.read_text())
    rewritten = 0
    blockers: list[str] = []
    for case in data:
        cid = case["case_id"]
        if cid not in REWRITES:
            continue
        expl = REWRITES[cid]
        if len(expl) != 5:
            blockers.append(f"{cid}: expected 5 explanations, got {len(expl)}")
            continue
        if len(case["answer_key"]) != 5 or len(case["statements"]) != 5:
            blockers.append(f"{cid}: statements/answer_key length mismatch")
            continue
        for i, (text, ans) in enumerate(zip(expl, case["answer_key"])):
            expected = "So the statement is True." if ans else "So the statement is False."
            if not text.rstrip().endswith(expected):
                blockers.append(f"{cid} {chr(65+i)}: closer mismatch (ans={ans})")
            if text.lstrip().startswith(("TRUE", "FALSE", "True —", "False —", "True -", "False -")):
                blockers.append(f"{cid} {chr(65+i)}: banned verdict prefix")
            for ban in (
                "tied to buyer type",
                "whichever the stem is testing",
                "Walk the claim",
                "Definition letters live or die",
                "matches the chapter reading",
            ):
                if ban in text:
                    blockers.append(f"{cid} {chr(65+i)}: banned phrase '{ban}'")
        openings = [t.split("\n", 1)[0] for t in expl]
        if len(set(openings)) < 5:
            blockers.append(f"{cid}: duplicate openings among A–E")
        case["tactical_explanations"] = expl
        rewritten += 1

    seen: dict[str, str] = {}
    for cid, expl in REWRITES.items():
        for i, text in enumerate(expl):
            key = text.strip()
            if key in seen:
                blockers.append(f"{cid} {chr(65+i)} identical to {seen[key]}")
            else:
                seen[key] = f"{cid} {chr(65+i)}"

    if blockers:
        print("BLOCKERS:")
        for b in blockers:
            print(" -", b)
        raise SystemExit(1)

    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
    print(f"Rewrote {rewritten} cases (CASE 5.1.01–CASE 5.1.50).")


if __name__ == "__main__":
    main()

