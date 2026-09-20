#!/usr/bin/env python3
"""Statement-only rewrite for economics ch5 cases index 0:30 inclusive."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path("/workspace")
PATH = ROOT / "src/data/economics-cases-ch5-subtopics.json"
FROM_IDX, TO_IDX = 0, 30  # inclusive

CLOSER_RE = re.compile(r"\s*So the statement is (True|False)\.?\s*$", re.I)

# Bodies only (no closer). Closer appended from answer_key on apply.
EXPL: dict[str, list[str]] = {
    "CASE 5.1.01": [
        """Marketing treats a product as anything that can be exchanged to meet customer wishes and needs, including services. Limiting the term to physical goods alone drops maintenance contracts, consulting, and support out of the definition without reason.""",
        """Under the marketing definition, a product is every good and/or service that can be exchanged to fulfil customer wishes and needs. Tangible merchandise and intangible service work sit under the same label once an exchange is on the table.""",
        """Producer versus consumer labels turn on who buys, not on whether the item left a factory. A finished printer sold to another firm is still a producer product even though it is fully assembled merchandise. Factory origin, assembly line history, and industrial design do not decide the category. Marketing asks whether the purchaser is a business or a household in that exchange. Treating manufacture as the test misplaces the buyer criterion and would misclassify countless finished B2B goods.""",
        """Consumer-product status tracks whether the buyer is a private household, not how large the retail pack is. A bulky home appliance bought for domestic use remains a consumer product; a tiny office staple bought by a firm remains a producer product. Packaging size is not the classifying rule.""",
        """Printers sold into offices for commercial work are producer products even though households also buy printers. Visibility of home users does not freeze every printer into the consumer category. Classification follows the actual purchaser in each exchange, so "always consumer" is too absolute.""",
    ],
    "CASE 5.1.02": [
        """Calling every printer a producer product ignores home buyers. The same hardware sold for private domestic use is a consumer product. Manufacture for supply chains does not lock the label for every transaction.""",
        """Marketing defines a product as any good or service offered through exchange to satisfy customer wishes and needs. Physical form is optional; the exchange and the fulfilment purpose are what matter.""",
        """Tangible goods and intangible services both count once they are exchanged with customers. A printer is a good; computer support is a service; training sessions and maintenance contracts sit beside hardware under the same product umbrella. Each becomes a product when traded to meet wishes and needs. Excluding services would shrink the marketing definition without cause and would leave large parts of modern B2B and B2C exchange unexplained.""",
        """Introductory marketing allows other businesses and private households as customers. Producer products serve firms; consumer products serve households. Restricting the customer set to one side would erase half of everyday exchange.""",
        """Producer products are goods and services sold from one business to another in business-to-business exchange. The buyer identity, not the physical shape of the item, places the sale in that B2B producer lane.""",
    ],
    "CASE 5.1.03": [
        """Consumer products are goods and services sold to consumers or private households in business-to-consumer exchange. The B2C path and the household buyer are what place the item in that consumer category.""",
        """Services lack physical form yet still qualify as products when exchanged. Computer support sold to customers therefore sits inside the marketing product definition. Physical form is not a gatekeeper for product status.""",
        """Business-to-business marketing covers producer products exchanged between firms. When one company sells to another for commercial use, the exchange is B2B and the offering is treated as a producer product.""",
        """Business-to-consumer marketing covers consumer products sold to private households. The household buyer and the B2C exchange together mark the consumer-product lane rather than any factory or packaging detail.""",
        """A printer bought for office use by a business is a producer product even when an identical model is sold for home use. Buyer purpose in that transaction decides the label; model identity does not force a single category across all sales. Two units from the same SKU can sit in different lanes on the same day if one buyer is a firm and the other is a household. Classification stays transaction-specific rather than model-locked.""",
    ],
    "CASE 5.1.04": [
        """Marketing products require exchange. Free after-sales advice may help a customer, yet without exchange it does not meet the product test. Satisfaction alone, with no traded good or service, is not enough.""",
        """A printer bought for private home use is a consumer product even when offices buy the same model. Domestic buyer purpose places that sale in the consumer category; office sales of the twin model do not rewrite the home transaction. Marketing does not assign one permanent label to the hardware design. Each exchange is read on its own buyer identity, so home use stays consumer while commercial use of the lookalike machine stays producer.""",
        """Computer support sold mainly to private households is a consumer product in service form. Intangibility does not block product status when households exchange for the support they need.""",
        """Internal transfers between departments of one company are not marketing exchanges with customers. Office supplies moved in-house therefore are not products in the marketing sense, even if they are useful stock.""",
        """Computer support sold to other businesses is a producer product in service form. Firm-to-firm exchange of that service places it in the B2B producer lane alongside tangible producer goods.""",
    ],
    "CASE 5.1.05": [
        """B2B and B2C labels name the customer side of the exchange, not the production technology used to make the item. Injection moulding, contract manufacturing, or hand assembly do not decide the marketing lane. Two identical printers can sit in different lanes solely because one buyer is a firm and the other is a household. Technology describes how the good was made; B2B/B2C describe whom it was sold to.""",
        """Exchange is required before a good or service counts as a product in marketing. Desire without a trade does not complete the definition; the item must be offered through exchange to fulfil wishes and needs.""",
        """Maintenance contracts and similar services become products when exchanged to fulfil customer needs. Intangible form does not disqualify them once the exchange and purpose criteria are met.""",
        """Equipment and materials become products when exchanged to fulfil customer wishes and needs. Tangible producer or consumer goods sit under the product label for the same exchange-based reason as services.""",
        """A printer sold to a corporate client is a producer product because the purchaser is another business operating commercially. Buyer identity, not the printer's physical design, sets that producer classification.""",
    ],
    "CASE 5.1.06": [
        """A printer sold to a private household is a consumer product because the purchaser is a private household or individual consumer. That buyer identity places the exchange in the consumer lane.""",
        """The same printer can be a producer product in one sale and a consumer product in another when the buyer changes. Classification is transaction-specific rather than permanently fixed to the hardware design.""",
        """When a firm exchanges a printer with a corporate client, the deal is business-to-business and the item is a producer product. Commercial buyer purpose and firm-to-firm exchange align on that producer label.""",
        """When a firm exchanges a printer with a private household, the deal is business-to-consumer and the item is a consumer product. Household buyer purpose marks the consumer category for that transaction.""",
        """Marketing classifies a printer sold for commercial operations to a corporate client as a producer product rather than a consumer product. Commercial use by another business is the decisive cue, not retail packaging, brand colour, or shelf placement. The same physical machine could be consumer elsewhere, yet this corporate commercial sale stays in the producer lane because the purchaser operates as a firm.""",
    ],
    "CASE 5.1.07": [
        """Customers of products include other businesses as well as private households. Producer products exist precisely because firms buy from firms. Restricting customers to households alone erases B2B exchange.""",
        """Gifts with no exchange may please recipients, yet marketing still requires exchange for product status. Fulfilment of wishes without a trade does not turn a free gift into a marketed product.""",
        """Portability does not create consumer-product status. A small item sold to a firm remains a producer product; a bulky item sold for home use remains a consumer product. Carry-home size is not the classifying rule.""",
        """Marketing classifies a printer sold for personal or domestic use to a private household as a consumer product rather than a producer product. Domestic buyer purpose, not the printer's weight, colour, or carry-home convenience, decides that consumer label. A light portable unit bought for home use and a heavier desk unit bought for home use are both consumer products when the household is the buyer.""",
        """Bulk and weight do not create producer-product status. A heavy home appliance bought by a household is still a consumer product. Who buys, not how awkward the item is to lift, sets the category.""",
    ],
    "CASE 5.1.08": [
        """Services sold only to businesses are producer products, not consumer products. Ultimate human beneficiaries do not rewrite the firm buyer into a household customer. B2B service exchange stays in the producer lane.""",
        """A printer sold to a corporate client is a producer product. Downstream human needs do not re-label that firm purchase as a consumer product. Classification follows the corporate buyer in the exchange.""",
        """A printer exchanged to fulfil the operational needs of a corporate client counts as a product in the producer category. Commercial use by another business and the presence of exchange complete the producer-product reading. Office throughput, client reporting, and firm workflows are typical operational needs that place the machine on the producer side even if a home twin exists in retail catalogues.""",
        """A printer sold to a private household is a consumer product. The seller being a business firm is normal in B2C and does not flip the sale into the producer category. Buyer side, not seller registration, decides.""",
        """Product labels can change with the buyer even when the design stays fixed. The same printer may be producer in one sale and consumer in another. Fixed design does not force one permanent marketing label for all buyers.""",
    ],
    "CASE 5.1.09": [
        """A printer exchanged to fulfil the personal wishes of a private household counts as a product in the consumer category. Domestic purpose plus exchange place that sale correctly among consumer products.""",
        """Producer products include a printer when it is sold from one business to a corporate client for further commercial activity. Firm buyer and commercial use mark the producer lane for that exchange.""",
        """Product status does not require a manufactured physical good alone. Services exchanged with customers are products too, and a printer that is traded still qualifies as a product as a good. Demanding manufacture-only status is too narrow: it would eject support contracts, consulting, and other intangible exchanges that marketing still treats as products when they meet wishes and needs through trade.""",
        """Strong desire does not replace exchange. A printer counts as a product when it is exchanged to meet wishes and needs; wanting it intensely without a trade does not complete the marketing definition.""",
        """Consumer products include a printer when it is sold to a private household for private consumption or domestic use. Household buyer purpose is the cue that keeps that sale in the consumer category.""",
    ],
    "CASE 5.1.10": [
        """The marketing term product covers a printer in both B2B sales to corporate clients and B2C sales to private households. Exchange channel does not eject the printer from product status; it only shifts producer versus consumer labelling. Corporate invoicing yields a producer product; household checkout yields a consumer product; both remain products because exchange and fulfilment purpose are present.""",
        """A consultancy may list a printer under producer products when invoicing a corporate client and under consumer products when invoicing a private household. The invoice buyer decides which column is correct.""",
        """Fulfilment of customer wishes and needs is the purpose that makes an exchanged printer a product in marketing terminology. Exchange plus that fulfilment purpose, not advertising volume alone, complete the definition.""",
        """Exchange value arises when a printer is traded with a corporate client or a private household to satisfy identifiable customer demand. Both buyer types can create that traded value once demand is met through exchange.""",
        """A computer sold to a manufacturing firm is a producer product because the purchaser is another business operating commercially. Commercial firm buyer identity places the machine in the producer category.""",
    ],
    "CASE 5.1.11": [
        """A computer sold to a family home is a consumer product because the purchaser is a private household or individual consumer. Domestic buyer identity places that exchange in the consumer lane.""",
        """Businesses have operational wishes and needs, so a printer sold to a corporate client remains a product. Marketing does not exclude firm buyers from the product definition; it classifies those sales as producer products.""",
        """Households buy products through ordinary exchange, not only through gifts. A printer sold to a private household is still a marketed product when money or other value is traded for the machine. Treating household purchases as non-products invents a rule the chapter does not use and would erase most consumer-product examples from introductory marketing.""",
        """The same computer may be marketed as a producer product in one transaction and a consumer product in another depending on the buyer. Classification tracks each exchange rather than freezing one label to the hardware.""",
        """A printer moved internally between branches of one corporation is not a marketed exchange with an outside customer. Without that customer exchange, it does not remain a marketed product in the chapter sense.""",
    ],
    "CASE 5.1.12": [
        """When a firm exchanges a computer with a manufacturing firm, the transaction is business-to-business and the item is a producer product. Firm-to-firm commercial exchange sets both the B2B path and the producer label.""",
        """Commercial operations at a manufacturing firm put a purchased computer in the producer-product column rather than the consumer column. Marketing reads the buyer as another business, so the machine is classified as a producer product for that sale.""",
        """Personal or domestic use in a family home puts a purchased computer in the consumer-product column rather than the producer column. Marketing reads the buyer as a private household, so the machine is classified as a consumer product for that sale.""",
        """A computer exchanged to fulfil the operational needs of a manufacturing firm counts as a product in the producer category. Operational firm demand plus exchange complete that producer-product reading. Production planning, design work, and plant administration are typical operational uses that keep the machine on the producer side of the classification.""",
        """A computer exchanged to fulfil the personal wishes of a family home counts as a product in the consumer category. Personal household purpose plus exchange complete the consumer-product reading.""",
    ],
    "CASE 5.1.13": [
        """B2B classification of a printer depends on the corporate client purchaser, not on the seller's industry. A retailer, wholesaler, or specialist vendor selling to a firm still creates a producer-product B2B sale when the buyer is commercial. Seller sector labels do not override buyer identity. The chapter's B2B cue is who purchases for commercial use, not which industry code the seller carries.""",
        """Producer products include a computer when it is sold from one business to a manufacturing firm for further commercial activity. Firm buyer and commercial purpose place that machine in the producer lane.""",
        """B2C classification of a printer depends on the private household purchaser, not on colourful retail branding. Brand colours may attract attention, yet they do not decide consumer-product status.""",
        """Consumer products include a computer when it is sold to a family home for private consumption or domestic use. Household buyer purpose is what keeps that sale in the consumer category.""",
        """The marketing term product covers a computer whether the exchange is B2B with a manufacturing firm or B2C with a family home. Channel changes the producer/consumer label, not whether the computer is a product at all.""",
    ],
    "CASE 5.1.14": [
        """Money changing hands does not make a corporate printer sale B2C. B2C requires a private household buyer. A corporate client purchase remains B2B even though payment occurs.""",
        """A printer sold to a private household is B2C, not B2B. The seller being a registered company is normal in retail and does not turn a household sale into business-to-business exchange.""",
        """Producer products include finished goods sold to firms, not only raw materials. A finished printer sold to a corporate client can be a producer product because the buyer is another business. Limiting the category to raw inputs is too narrow and would misclassify equipment, software licences, and finished tools that firms buy every day for commercial operations.""",
        """Consumer products include routine household purchases, not only luxury items. A routine printer sold to a private household remains a consumer product. Luxury status is not required for the consumer label.""",
        """A consultancy may list a computer under producer products when invoicing a manufacturing firm and under consumer products when invoicing a family home. Buyer identity on each invoice selects the correct column.""",
    ],
    "CASE 5.1.15": [
        """Fulfilment of customer wishes and needs is the purpose that makes an exchanged computer a product in marketing terminology. Exchange plus that purpose complete the definition for the machine.""",
        """Advertising may stimulate demand, yet a printer becomes a product when it is exchanged to meet wishes and needs. Waiting for advertising alone invents a hurdle the marketing definition does not require. Unadvertised machines sold through trade still count; heavily advertised machines that never leave the warehouse as an exchange do not complete the product test on ads alone.""",
        """A computer sold to a manufacturing firm is a producer product. Ultimate human needs downstream do not reclassify that firm purchase as a consumer product. Buyer identity in the exchange decides.""",
        """A computer sold to a family home is a consumer product. The seller being a business firm is expected in B2C and does not push the sale into the producer category.""",
        """Design stability does not freeze one product label for all buyers. The same computer can be producer in one sale and consumer in another when the purchaser changes. Fixed design is not a fixed marketing label.""",
    ],
    "CASE 5.1.16": [
        """A computer can be a product as a traded good, and related services can be products too. Requiring a manufactured physical good alone excludes legitimate service products and over-narrows the definition. Support contracts, configuration work, and training sold through exchange sit beside hardware under the product label when they fulfil customer wishes and needs.""",
        """Exchange value arises when a computer is traded with a manufacturing firm or a family home to satisfy identifiable customer demand. Both buyer types can create that traded value through exchange.""",
        """Desire without exchange does not complete product status. A computer counts as a product when traded to meet wishes and needs; strong wanting alone is not enough if no exchange occurs.""",
        """Businesses have operational wishes and needs, so marketing does not exclude a computer sold to a manufacturing firm from products. That sale is a producer product, not a non-product.""",
        """Households obtain products through purchase and other exchange, not only as gifts. Marketing therefore does not exclude a computer sold to a family home from products; that sale is a consumer product.""",
    ],
    "CASE 5.2.01": [
        """Unsatisfied customers are unlikely to repurchase. Poor experience breaks the repeat path that marketing objectives rely on, so satisfaction matters for keeping demand alive after the first sale.""",
        """Satisfied customers often become loyal customers who may purchase again. Contentment after use is a common bridge from a one-off buy into repeat behaviour that supports sales over time.""",
        """Customer satisfaction is closely related to whether buyers purchase again. Treating satisfaction as unrelated to repurchase ignores how contentment supports loyalty and future sales. Unhappy buyers drift away; content buyers often return; sales and loyalty objectives therefore move with satisfaction rather than in a sealed box beside it. The claim of no link does not fit the objectives framework.""",
        """Customer satisfaction as a marketing objective is interrelated with objectives such as sales and loyalty. Meeting needs feeds retention; retention feeds volume; the goals reinforce one another rather than sitting in sealed boxes.""",
        """Meeting customer wishes and needs is a prerequisite for defining meaningful marketing objectives. Without knowing what buyers want, targets for satisfaction, loyalty, or sales lack a practical anchor in the market.""",
    ],
    "CASE 5.2.02": [
        """A business that ignores customer satisfaction risks losing repeat sales from otherwise viable buyers. Neglect turns first purchases into one-offs and weakens the loyalty path marketing tries to build.""",
        """Loyalty usually needs a satisfactory experience. A dissatisfied customer is unlikely to become a loyal repeat buyer if nothing about the product changes. Habit alone rarely overrides a bad experience, and points or slogans seldom repair unresolved quality or service failures. Without a change in what the buyer receives, discontent blocks the path into genuine loyalty.""",
        """Post-purchase satisfaction influences whether a customer considers the product for a future purchase. After-use feelings feed the next buying decision, so satisfaction sits inside the repurchase loop.""",
        """Customer satisfaction is one marketing objective among others; it does not replace sales and profit goals. Firms pursue satisfaction together with volume and margin targets rather than as a sole substitute.""",
        """Businesses set marketing objectives after analysing customer wishes and needs. Skipping that analysis leaves targets detached from what buyers actually want, which undercuts meaningful objective setting.""",
    ],
    "CASE 5.2.03": [
        """Loyal customers who buy again help sustain sales volume over time. Retention reduces dependence on finding a brand-new buyer for every unit sold and stabilises revenue.""",
        """Customer satisfaction supports retention rather than relying solely on one-off transactions. Content buyers are more likely to return, so satisfaction work backs longer relationships instead of only single sales. Firms that chase only first purchases without caring how buyers feel afterward keep rebuilding the customer base from scratch and miss the retention channel satisfaction is meant to open.""",
        """Satisfied customers often buy again; loyalty is not independent of satisfaction. Claiming that content buyers rarely return reverses the usual link between a good experience and repurchase.""",
        """Satisfied customers may recommend the product to others, extending marketing impact beyond the original sale. Word of mouth from content buyers multiplies reach without needing only paid promotion.""",
        """Customer satisfaction objectives apply to goods producers as well as service firms. Tangible-product businesses still need content buyers if they want repeat sales and loyalty.""",
    ],
    "CASE 5.2.04": [
        """Repeat purchase behaviour is evidence that satisfaction work matters, not proof that satisfaction objectives are unnecessary. Retention often rests on prior contentment; removing the objective would cut the root of many repeats. Seeing buyers return should reinforce satisfaction targets, not license firms to abandon them as optional extras beside volume goals.""",
        """Marketing objectives include ensuring customers are content enough to consider repurchasing. Satisfaction targets exist so buyers remain willing to come back after the first use.""",
        """Dissatisfied customers signal that marketing and product delivery may be missing stated objectives. Rising discontent is feedback that satisfaction aims are not being met in practice.""",
        """Prioritising profitability does not exclude customer satisfaction from marketing objectives. Content buyers support repeat revenue that helps profit; the goals are meant to work together.""",
        """A slight price cut does not reliably turn dissatisfied customers into repeat buyers. Unresolved product problems often outweigh a small discount, so dissatisfaction still blocks loyalty.""",
    ],
    "CASE 5.2.05": [
        """Customer satisfaction is not measured only after profitability targets are met. Firms monitor contentment alongside other objectives because early dissatisfaction threatens future sales and margin.""",
        """Customer satisfaction surveys can inform how well a business is meeting its marketing objectives. Survey feedback shows whether buyers feel needs were met, which feeds objective review.""",
        """A firm pursuing loyalty must first address whether customers are satisfied with the core product. Without a satisfactory experience, loyalty programmes rest on weak ground and rarely stick. Points, clubs, and rewards amplify contentment; they do not permanently replace it. Core product and service experience remain the base on which loyalty objectives can grow.""",
        """Loyal customers normally need prior satisfaction with the product. Loyalty without any satisfactory experience is not the usual path the objectives framework describes.""",
        """Repeat purchase behaviour is more likely when prior use met or exceeded customer expectations. Meeting expectations builds the confidence that brings buyers back for another purchase.""",
    ],
    "CASE 5.2.06": [
        """Customer satisfaction connects to market share and sales volume because content buyers return and unhappy buyers leave. Treating satisfaction as isolated from share and volume ignores that retention channel. Share erodes when discontented customers switch; volume softens when repeats dry up. Satisfaction work therefore feeds the same performance numbers other objectives track.""",
        """A strong brand does not let a business ignore wishes and needs analysis. Brands still fail when offerings drift from what customers want, so analysis remains part of setting sound objectives.""",
        """Customer satisfaction is not separable from long-run sales performance in the marketing framework. Sustained volume depends on buyers who were content enough to return after earlier purchases.""",
        """Satisfaction objectives do not require delight on every dimension before any return visit. Meaningful contentment can support repurchase without perfection on every attribute.""",
        """Rising customer complaints after a campaign indicate problems on satisfaction, not success. Complaint growth is a warning signal, not evidence that satisfaction objectives were achieved.""",
    ],
    "CASE 5.2.07": [
        """Businesses analyse customer wishes and needs because unsatisfied buyers will not sustain demand. Understanding those pressures is how firms avoid building offers that customers refuse to repurchase.""",
        """Satisfaction objectives aim to convert first-time buyers into customers who return. The point is retention after the initial sale, not only a one-off transaction recorded once.""",
        """A marketing plan that achieves high satisfaction can reinforce market share by retaining buyers. Kept customers protect share even when rivals spend heavily on acquisition.""",
        """Satisfied customers often recommend products to others; satisfaction is not kept private by rule. Positive experience commonly spills into referrals that extend reach beyond the first buyer.""",
        """Customer satisfaction is not achieved solely by lowering prices below competitors. Price cuts without adequate product experience leave buyers discontent, so satisfaction needs more than cheapest-ticket positioning. Quality, reliability, and fit with wishes still matter. A bargain that disappoints in use fails satisfaction objectives even when the sticker undercuts rivals.""",
    ],
    "CASE 5.2.08": [
        """A single purchase does not automatically fulfil satisfaction objectives. Objectives look at whether the experience was good enough to support return, not merely whether a first sale occurred.""",
        """Dissatisfied customers do not reliably keep buying out of habit, so satisfaction objectives are not optional. Habit fades when experience is poor, and firms that skip satisfaction work lose repeats to rivals who fix the offer. Treating satisfaction as optional because some buyers linger briefly misreads how quickly discontent clears the repurchase path.""",
        """Customer satisfaction objectives can coexist with profitability. Content buyers support repeat revenue; the chapter does not treat satisfaction and profit as mutually exclusive goals.""",
        """Customer complaints rising over time suggest the satisfaction objective is not being achieved. Persistent complaint growth is practical evidence that buyers are not content with what they received.""",
        """Satisfaction surveys help assess marketing objective performance. Ignoring survey evidence would leave firms blind to whether satisfaction targets are being met in the market.""",
    ],
    "CASE 5.2.09": [
        """Satisfied customers provide a foundation for brand loyalty programmes to succeed. Points and perks work better when the underlying experience already left buyers willing to return.""",
        """If a product fails to meet needs, marketing objectives around sales growth become harder to reach. Growth plans struggle when buyers will not come back after a poor fit with their needs.""",
        """A loyal customer is not simply someone who buys again while remaining dissatisfied. Loyalty in the marketing sense builds on satisfactory prior experience, not on forced or unhappy repeats. Contracts, lock-ins, or lack of alternatives may produce reluctant repurchase, yet that is not the loyalty outcome satisfaction objectives aim to create through contentment.""",
        """Satisfaction with product quality can encourage customers to choose the same brand on the next occasion. Quality contentment is one practical reason buyers stick with a familiar name.""",
        """Marketing objectives treat customer satisfaction as linked to maintaining competitive sales. Keeping buyers content supports the repeat volume that protects sales against rivals.""",
    ],
    "CASE 5.2.10": [
        """A business measuring repurchase rates is indirectly tracking success on satisfaction objectives. Stable repeats often reflect earlier contentment; collapsing repeats often reflect the opposite.""",
        """Customers who feel their wishes were fulfilled are more willing to buy the product again. Fulfilled expectations lower the friction of choosing the same offer next time.""",
        """Satisfaction objectives complement differentiation by ensuring the promised uniqueness is experienced. A USP that looks sharp in ads still fails if buyers leave unhappy after use. Differentiation attracts trial; satisfaction decides whether the uniqueness was real enough to bring people back. The two objectives reinforce each other rather than competing for attention.""",
        """Poor satisfaction can erode market share even when promotional spending remains high. Ads may win trials, yet discontented buyers do not stay, so share slips despite heavy promotion.""",
        """Satisfaction is an objective because unhappy customers simply will not buy the product again. Avoiding that exit is why firms set explicit satisfaction targets alongside other goals.""",
    ],
    "CASE 5.2.11": [
        """Customer satisfaction is pursued alongside market-share work, not only after share targets are already hit. Waiting until share is won leaves retention unprotected while rivals court unhappy buyers.""",
        """Marketing objectives link satisfaction to loyalty rather than treating them as disconnected. Satisfactory experience is the usual base on which loyalty outcomes are built.""",
        """Loyalty outcomes depend on customers having a satisfactory experience with prior purchases. Without that base, loyalty schemes and repeat targets rest on weak behavioural ground.""",
        """Strong differentiation does not remove the need to fulfil wishes and needs. A distinctive offer that still disappoints users will not sustain loyalty or sales. Differentiation and satisfaction work together: uniqueness may win attention, yet unmet needs still drive buyers away. Firms cannot trade away needs analysis merely because branding looks sharp.""",
        """Businesses set satisfaction targets because loyal repeat buyers strengthen several other objectives. Retention supports sales, share, and profit pathways that acquisition alone cannot carry forever.""",
    ],
    "CASE 5.2.12": [
        """Satisfied customers buy again voluntarily; legal contracts are not required for repurchase. Treating repeats as contract-only behaviour misreads why satisfaction objectives exist.""",
        """Meeting needs analysed in the market helps a firm align its product with satisfaction goals. Needs analysis turns vague targets into offers buyers can actually experience as satisfactory.""",
        """Customer satisfaction is related to sales; advertising spend alone does not determine volume. Content buyers return and discontented buyers leave, so satisfaction feeds sales beyond media weight.""",
        """High satisfaction does not let a firm ignore market share. Satisfied buyers help, yet rivals, coverage, distribution gaps, and competitive moves still matter. Satisfaction is support for share, not a substitute for watching it. A content niche can remain small if the firm never converts that contentment into broader competitive presence.""",
        """Dissatisfaction does not improve long-run sales by pushing customers toward alternatives in the range. Unhappy buyers often leave the firm entirely, which hurts rather than helps sustained volume.""",
    ],
    "CASE 5.2.13": [
        """Promotional reach without a good product experience does not meet satisfaction objectives. Awareness that ends in disappointment fails the satisfaction test even when campaign reach looks large.""",
        """Satisfied customers often buy complementary products from the same firm. Contentment can widen the basket rather than freezing buyers on a single item forever.""",
        """A satisfied customer base reduces reliance on constant new-customer acquisition alone. Retention from content buyers lowers the pressure to replace every lost sale with a brand-new prospect.""",
        """Customer satisfaction is relevant to USP objectives because buyers must experience the promised difference. Purely visual differentiation that disappoints in use undercuts both satisfaction and USP aims. A unique look or slogan that fails after purchase leaves buyers discontent and makes the claimed uniqueness hollow. Experience has to match the differentiation story.""",
        """Falling repeat rates beside rising satisfaction scores can reflect lag, segment mix, or measurement issues, not always data error only. The claim that the pattern must be pure error is too absolute.""",
    ],
    "CASE 5.2.14": [
        """Customer satisfaction is one of several marketing objectives a business may pursue. It sits beside sales, loyalty, share, and related aims rather than standing as a lonely exception.""",
        """Satisfaction contributes to profitability indirectly by supporting repeat revenue streams. Content buyers return, which sustains income that one-off acquisition struggles to match alone.""",
        """When customers are satisfied, they are more likely to remain with the firm rather than switch. Contentment raises switching costs in a practical sense by making rivals look less attractive.""",
        """Customer satisfaction does not mean the product must be the cheapest in the market. Buyers can be content with fair value, quality, reliability, or service even when a rival posts a lower sticker price. Satisfaction tracks whether wishes and needs were met, not whether the firm won a pure price race. Cheapness alone is neither necessary nor sufficient.""",
        """Marketing staff may track satisfaction scores alongside sales when reviewing objective performance. Pairing both measures shows whether volume is coming with contentment or only with short-term push.""",
    ],
    "CASE 5.2.15": [
        """Loyalty programmes do not eliminate the need to pursue customer satisfaction objectives. Rewards without a satisfactory core experience rarely create durable loyalty on their own. Points may delay exit briefly, yet unresolved disappointment still pushes buyers toward rivals. Satisfaction work remains necessary even when a rewards scheme is already in place.""",
        """Enrolling dissatisfied customers in a rewards scheme does not reliably generate loyal behaviour. Points cannot permanently paper over a product experience buyers reject.""",
        """A product that delights customers on first use is better positioned to achieve loyalty objectives. A strong opening experience makes later retention tools more effective and more credible.""",
        """Customer satisfaction is not a financial accounting measure identical to gross profit. Satisfaction tracks how buyers feel about the offer; gross profit tracks margin on the accounts.""",
        """Businesses set satisfaction objectives in growing and stable markets as well as declining ones. The aim is useful whenever repeat sales matter, not only when demand is already falling.""",
    ],
}

def wrap(body: str, truth: bool) -> str:
    body = body.strip()
    body = body.replace("\u2014", ", ").replace("\u2013", ", ")
    v = "True" if truth else "False"
    return f"{body}\n\nSo the statement is {v}."


def main() -> None:
    data = json.loads(PATH.read_text())
    missing = []
    for i in range(FROM_IDX, TO_IDX + 1):
        c = data[i]
        cid = c["case_id"]
        if cid not in EXPL:
            missing.append(cid)
            continue
        bodies = EXPL[cid]
        if len(bodies) != 5:
            raise SystemExit(f"{cid}: expected 5 bodies, got {len(bodies)}")
        c["tactical_explanations"] = [
            wrap(bodies[j], bool(c["answer_key"][j])) for j in range(5)
        ]
    if missing:
        raise SystemExit(f"missing EXPL for: {missing}")
    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    print(f"Applied {FROM_IDX}:{TO_IDX} ({TO_IDX - FROM_IDX + 1} cases) -> {PATH}")


if __name__ == "__main__":
    main()
