#!/usr/bin/env python3
"""Hand-authored statement-only tactical_explanations for ch5 cases [60:90]."""
from __future__ import annotations

import json
import re
from pathlib import Path

PATH = Path("/workspace/src/data/economics-cases-ch5-subtopics.json")
START, END = 60, 90
CLOSER = re.compile(r"\s*So the statement is (True|False)\.?\s*$", re.I)


def wrap(body: str, truth: bool) -> str:
    body = body.replace("\u2014", ", ").replace("\u2013", "-").strip()
    v = "True" if truth else "False"
    return f"{body}\n\nSo the statement is {v}."


# Per case: list of 5 body strings (no closer). Truth taken from answer_key.
BODIES: dict[str, list[str]] = {}

BODIES["CASE 5.4.13"] = [
    # A F compact
    "Laptop workshops, phone refurbishers, and appliance technicians repair electronics every week. Reuse also covers computers passed to a second owner after cleaning and parts swaps. Limiting repair and reuse to clothing invents a product wall the chapter does not draw.",
    # B F standard
    "Rental firms still own the inventory they lease out. Damaged garments or poorly maintained tools hurt rebooking rates, so landlords keep standards high. Eliminating customer ownership does not erase the lessor's incentive to protect asset quality. The claim that rental removes all maintenance incentives is wrong.",
    # C F expanded
    "Ethical advertising matches claims to real performance and impact. A low-power laptop and a high-draw gaming machine should not share identical energy promises. Truthful messaging can differ by product when the differences are real. Forcing one generic script for every SKU would erase relevant facts consumers need. Ethics demands accuracy, not copy-paste sameness across unlike goods.",
    # D F standard
    "Knowing a price does not by itself define need. Shoppers still buy extras after seeing clear tags, especially under persuasive promotion. Overconsumption is about volume and necessity, not whether the euro amount was visible. Price information alone does not make excess demand disappear.",
    # E T compact
    "Borrowing a high-quality dress or tool for a short need avoids a full purchase that would sit unused afterward. Temporary rental therefore supports lighter, more sustainable consumption patterns without forcing ownership for rare occasions.",
]

BODIES["CASE 5.4.14"] = [
    # A T standard
    "Promotions can nudge people past planned baskets into impulse extras. Marketing teams that ignore that effect treat budgets as someone else's problem. Recognising the risk of unnecessary purchases is part of responsible promotional practice, exactly as the statement says.",
    # B F compact
    "Cheap throwaway fashion still burns materials, logistics, and landfill space after a few wears. A low shelf price does not cancel short useful life. Calling that pattern sustainable because garments are inexpensive confuses price with resource impact.",
    # C T expanded
    "Fixing a working coat zipper or resoleing boots keeps fabric and hardware in use instead of sending the item to disposal. New manufacturing then faces less replacement demand for the same wardrobe function. Resource pressure falls when repair displaces fresh production runs. Consumers who choose that path reduce the materials and energy that would have gone into another unit. The statement links repair to lower manufacturing pressure correctly.",
    # D T standard
    "A well-made jacket that lasts several seasons can be worn by one person, then passed or rented to others before fibres fail. Circulation multiplies wear per unit of cloth. Durability is what makes that multi-user path realistic.",
    # E T compact
    "Targeted ads often surface non-essential add-ons after the planned items are chosen. Shoppers then overrun the budget they set before entering the store or site. That pattern matches everyday impulse overspend under promotion.",
]

BODIES["CASE 5.4.15"] = [
    # A T compact
    "Pushing unit volume without regard for waste or replacement cycles can lock customers into faster repurchase. Firms that chase growth that way can intensify overconsumption rather than curb it.",
    # B T standard
    "Occasion outfits worn once a year sit idle if each guest buys their own. A rental pool lets many clients share the same premium garment across events. Ownership of rarely used formalwear is replaced by shared use, which is the efficiency the statement describes.",
    # C T expanded
    "Ethical promotion leaves room for the buyer to decide without hiding faults or leaning on fear and flattery. Incomplete information and emotional pressure are tools of manipulation, not of respect. Autonomy means the customer can weigh performance and price with honest signals. Campaigns that refuse those shortcuts treat the audience as decision-makers. The statement states that respect-versus-exploitation contrast accurately.",
    # D T standard
    "Goods that lose usefulness within days of purchase rarely anchored a lasting need. Short post-purchase life is a warning that the buy was peripheral or fashion-driven. That reading matches how the chapter links durability to need.",
    # E T compact
    "Workshops that fix laptops and desktops return machines to service instead of discarding them for minor faults. Keeping equipment running is a clear repair example, not a clothing-only practice.",
]

BODIES["CASE 5.4.16"] = [
    # A F compact
    "When ads push unplanned extras, firms help shape the spend that follows. Claiming zero responsibility for those budget overruns ignores how promotion works. Marketing that sparks impulse buys is not a neutral bystander.",
    # B T standard
    "Community swap events move quality garments between wearers without a trip to buy new low-cost replacements. Each swap extends fabric life and cuts demand for fresh cheap stock. Circulation replaces disposal-and-repurchase for that wardrobe slot.",
    # C F expanded
    "Refurbishing a sound chassis with new batteries or screens often uses far less material than building a unit from raw inputs. Condition matters: a lightly used device is a candidate for refurbishment, not automatic scrap. Blanket claims that refurbishment always wastes more than new manufacture ignore those savings. Manufacturers and repair shops routinely choose remanufacture when the base product is still solid. The absolute wording is therefore false.",
    # D T standard
    "Electronics retailers refresh models and advertise features that shoppers had not requested. Creating new wishes sits alongside meeting stated demand. Continuous development plus promotion can manufacture desire, not only respond to it.",
    # E F compact
    "Premium rental racks often stock higher-quality eventwear than bargain retail racks. Clients need not purchase to access that tier. Saying rental cannot beat cheap retail quality invents a false limit.",
]

BODIES["CASE 5.5.01"] = [
    # A T standard
    "Questionnaires written for one firm's questions and sent to hundreds of respondents are classic primary collection. The design serves that business's interests rather than recycling an old public table. Scale does not turn the programme into secondary data.",
    # B F compact
    "A brand-new questionnaire built only for the commissioning firm is primary work. Secondary information comes from existing publications and prior studies. Mixing those labels reverses the definitions.",
    # C T expanded
    "Personal interviews with selected buyers generate fresh answers shaped around the firm's product line and decision criteria. The conversation is commissioned for that study, not lifted unchanged from a statistical yearbook. Interview guides, sampling, and follow-ups all belong to primary design. Industrial buyers describing next-generation circuit-board needs illustrate the method in a B2B setting. The statement correctly places those interviews inside primary market research.",
    # D T standard
    "Online surveys aimed at a defined sample and written for the firm's questions collect new primary data. Distribution channel does not change the classification: electronic delivery still yields primary responses when the study is bespoke.",
    # E T compact
    "Paying a market research institute to run an empirical study for the firm's brief is still primary research. The institute collects new evidence tailored to that commission.",
]

BODIES["CASE 5.5.02"] = [
    # A T compact
    "Primary information arrives when the firm runs an empirical study itself or hires an institute to collect the data for that purpose. Both routes create new evidence rather than reuse old publications.",
    # B T standard
    "Commissioners can shape samples, wording, and topics around their own product and segment questions. That tailoring is a defining advantage of primary work over general published tables. The study exists to answer this firm's interests.",
    # C T expanded
    "Large questionnaire programmes need design, distribution, coding, and analysis. Staff time, incentives, and processing budgets accumulate quickly. Those outlays are a major reason primary research is expensive compared with downloading a free statistical release. Firms weigh that cost against the precision of answers they cannot get elsewhere. The statement correctly flags questionnaire administration and analysis as a central cost driver.",
    # D T standard
    "Personal and telephone interviews require trained callers, scheduling, and often higher per-response cost than a simple web form. Data-collection spend is therefore substantial when interviews are the method.",
    # E T compact
    "Even online surveys need setup, cleaning, and interpretation. Those analysis costs keep primary research from being free just because the form is digital.",
]

BODIES["CASE 5.5.03"] = [
    # A T standard
    "Extensive primary programmes with large samples and field staff exceed many small-firm budgets. Cost of collection is why those businesses often lean on cheaper secondary sources first. The affordability barrier is real.",
    # B T compact
    "A study designed for one firm can ask who its customers are and which products they buy. That firm-specific who-and-what detail is exactly what primary research is built to deliver.",
    # C F expanded
    "Published government statistics that already exist are secondary sources. Primary market research collects new empirical data through surveys, interviews, or commissioned studies. Reusing an old statistical table without new fieldwork is not primary work. Confusing reuse with primary collection collapses the chapter's source distinction. The claim is therefore false.",
    # D T standard
    "Willingness-to-pay and expected supplier support are questions a firm can put directly to respondents in a primary design. Those answers guide pricing and service packages better than generic aggregates alone.",
    # E F compact
    "Market share divides one firm's sales by total market sales, not the reverse. Flipping numerator and denominator invents a percentage that does not measure share.",
]

BODIES["CASE 5.5.04"] = [
    # A F compact
    "Absolute market share is the firm's own sales divided by total market volume. Using the largest rival's sales over the firm's sales invents a different ratio. That formula does not define absolute share.",
    # B T standard
    "Primary instruments can split respondents by age, gender, or other groups and compare answers across those cells. Segment contrasts of that kind are a routine use of bespoke data collection.",
    # C F expanded
    "Relative market share compares the firm's position with a leading competitor, typically firm share divided by leader share. Dividing the firm's sales by total market volume and calling the percentage relative share confuses it with absolute share. Absolute share uses market volume in the denominator; relative share uses competitive standing. Mixing those formulae mislabels the metric. The statement's definition is therefore wrong.",
    # D T standard
    "Interviews let respondents explain preference drivers in their own words: features, service, price, or trust. That why-depth is hard to extract from secondary aggregates alone. Primary interviews are built for that exploration.",
    # E T compact
    "A primary study can focus on which channels buyers prefer so the firm evaluates distributors, direct sales, or online paths. Channel questions belong inside empirical design.",
]

BODIES["CASE 5.5.05"] = [
    # A T standard
    "Asking when purchases occur and recording those dates in a new study can expose seasonal peaks. Fresh timing data are primary evidence for planning stock and promotions. The statement describes that use correctly.",
    # B F compact
    "Market size is total sales across all businesses in the market, not one firm's revenue alone. Equating size with a single seller's volume shrinks the concept incorrectly.",
    # C F expanded
    "Market potential includes room from customers who have not yet bought or who could buy more. Current market volume only counts what is already sold. Those totals match only in a fully saturated edge case, not as a universal rule. Claiming they are always equal erases unconverted demand and treats every market as finished. Hospital buyers still outside a wholesaler's list are potential, not volume. The absolute wording is therefore false.",
    # D F standard
    "Sales potential is the upside a firm could still reach above today's volume. Publishing annual revenue does not freeze that ceiling. Growth, new segments, or share gains can lift sales beyond the latest reported figure.",
    # E F compact
    "Secondary reports are written for other purposes and often stay general. Readers rarely get a study shaped around one firm's private questions. Tailoring is a primary advantage, not a secondary guarantee.",
]

BODIES["CASE 5.5.06"] = [
    # A T compact
    "Hiring a market research institute to collect data under the firm's brief is a standard primary route. The institute's fieldwork still produces primary information for that commission.",
    # B T standard
    "Published statistics give broad aggregates that may omit buyer-level detail a firm needs. Primary work is the right tool when those gaps matter. Bespoke questions fill what general tables cannot supply.",
    # C T expanded
    "Questionnaires sent to thousands of respondents for one commissioning study collect new answers for that design. Volume of replies does not turn the programme secondary. What matters is that the data are gathered for this research rather than scraped unchanged from prior publications. Large samples remain primary when they serve the firm's study. The statement classifies them correctly.",
    # D F standard
    "Designing questions in-house does not erase interviewer time, software, incentives, or analysis labour. Primary research still costs money even when the firm writes the script itself. Calling it free confuses authorship with price.",
    # E F compact
    "Customer analysis includes why buyers prefer one product over another. Dropping the why dimension empties motive research from the checklist.",
]

BODIES["CASE 5.5.07"] = [
    # A F compact
    "Customer analysis spans who, what, where, when, and why. Limiting it to identity alone cuts out product use, channels, timing, and motives the chapter lists together.",
    # B T standard
    "Primary questions can ask whether respondents also buy rivals' substitutes. That competitive overlap is valuable intelligence for positioning. Fresh answers on multi-sourcing belong in primary work.",
    # C F expanded
    "Business-to-consumer markets sell to final household consumers, not to other firms buying inputs for production. Industrial input purchases belong in business-to-business settings. Swapping those labels reverses the customer type. A family buying toothpaste is B2C; a factory buying resin is B2B. The statement's B2C definition is therefore false.",
    # D F standard
    "Business-to-business customers are other organisations, not final household consumers. Households appear in B2C. Claiming B2B buyers are always final consumers inverts the typology.",
    # E T compact
    "Product-line questions written for a study can capture what buyers think about features and quality. That opinion evidence is primary when collected for the firm's design.",
]

BODIES["CASE 5.5.08"] = [
    # A T standard
    "Interpreting primary datasets takes skilled time after collection ends. Small firms often skip that cost and lean on cheaper secondary releases instead. Analysis expense is part of the primary burden.",
    # B F compact
    "Parents buy toys that children use; procurement officers buy tools that technicians operate. Buyer and user frequently differ. Forcing them to be the same person in every market is false.",
    # C F expanded
    "Children shape choices through requests, demonstrations, and brand preference even when adults pay. Payment-card ownership is not required for influence. Toy, cereal, and app markets routinely show that pattern. Denying any child influence because only adults hold cards ignores observed household decision roles. The claim is therefore false.",
    # D F standard
    "Where-customer work maps preferred purchase locations and therefore preferred channels: stores, web shops, or agents. Saying it is unrelated to distribution channels cuts the link the analysis is built to make.",
    # E F compact
    "Purchase dates are recorded in many studies and POS extracts. When-analysis uses those dates to spot seasonal swings. Claiming dates are never recorded is simply wrong.",
]

BODIES["CASE 5.5.09"] = [
    # A F compact
    "Why-customer findings feed product changes and share strategies when motives become clear. Calling that work irrelevant to development and growth discards a core use of motive research.",
    # B T standard
    "Primary information is newly gathered for the present study. Earlier publications used unchanged are secondary. Fresh collection is the dividing line the statement names.",
    # C F expanded
    "Market research covers customers as well as competitors and industry conditions. Customer analysis of who buys, what they do, where and when they purchase, and why they choose is central, not optional. Limiting research to rivals alone would leave demand unexplained. Firms need buyer insight beside competitive scans. The exclusion claim is therefore false.",
    # D T standard
    "Primary designs can sample prospects who have not purchased yet. Learning barriers and triggers among non-buyers is a legitimate primary goal. Conversion research sits inside that scope.",
    # E T compact
    "Personal interviews let customers describe preferred product use in their own phrasing. That qualitative depth is a strength of primary interviewing.",
]

BODIES["CASE 5.5.10"] = [
    # A F compact
    "Relative share is not one hundred minus absolute share. That leftover percentage describes everyone else combined, not relative standing versus a leader.",
    # B F standard
    "Absolute share uses the firm's sales over market volume. Dividing the leader's share by the firm's share produces a different competitive index, not absolute share. The formula in the statement is reversed and mislabeled.",
    # C T expanded
    "Willingness-to-pay questions placed in a tailored survey test price points directly with respondents. Firms hear how demand might react before changing list prices. That price probe is a classic primary use case. Secondary tables rarely ask the firm's exact SKUs at the firm's exact proposed levels. The statement correctly places pricing tests inside tailored primary research.",
    # D T standard
    "When survey respondents name preferred outlets or platforms, the firm can reshape channel strategy with primary evidence. Stated shopper location guides where to list and promote.",
    # E T compact
    "Paying an institute to design and run the study still yields empirical primary research. Outsourcing fieldwork does not convert the project into secondary reuse.",
]

BODIES["CASE 5.5.11"] = [
    # A T compact
    "Secondary information rests on research another organisation already finished. The reading firm reuses those results instead of collecting fresh fieldwork for the same tables.",
    # B T standard
    "Government agencies publish industry and retail figures that firms download as secondary sources. Official origin does not make the data primary for the reader. Publication precedes the firm's use.",
    # C T expanded
    "Trade and industry associations often survey members or compile sector statistics and share them with participants. Member firms then treat those releases as secondary inputs. The association, not the reading firm, ran the original collection. Access through membership still leaves the data secondary for each user. The statement places association research correctly in the secondary column.",
    # D T standard
    "Competitor white papers, supplier market notes, and published studies from other firms can inform a reader's market view as secondary material. Prior publication is what classifies them.",
    # E T compact
    "Many secondary releases are free or low-cost, yet they may ignore one firm's niche questions. Cheap access does not guarantee a perfect fit.",
]

BODIES["CASE 5.5.12"] = [
    # A T standard
    "Secondary datasets are usually built for broad audiences and remain general. They rarely mirror one firm's private product and segment checklist. That generality is a known limit of secondary work.",
    # B T compact
    "Industry consumption statistics from a trade body already exist before the firm opens the file. Relying on them is secondary research, not a new primary programme.",
    # C T expanded
    "Broad secondary background helps a firm see market size, trends, and structure before spending on bespoke fieldwork. Teams often sequence secondary first, then design primary questions around remaining gaps. Skipping that overview can waste primary budget on facts already public. Using secondary sources as a prelude is therefore practical. The statement captures that sequencing value.",
    # D T standard
    "Forecasts sold by research houses and later reused by a manufacturer were not collected for that manufacturer's unique brief. Reuse classifies them as secondary market information.",
    # E T compact
    "Even when compiled for another purpose, secondary series can reveal overall industry direction useful to a later reader tracking growth, contraction, or structural change.",
]

BODIES["CASE 5.5.13"] = [
    # A F compact
    "Market volume is current total sales; market potential includes further possible demand. Treating the terms as identical erases that gap. They are related but not synonyms.",
    # B T standard
    "An annual industry review from a government department is published material the firm did not collect itself. Reading it is textbook secondary research use.",
    # C T expanded
    "Secondary information arrives ready-made, so the firm need not run its own questionnaire to obtain those figures. Skipping field administration is a cost advantage of secondary work. Primary programmes still matter when questions are missing, but the secondary path avoids that burden for the reused tables. The statement correctly notes that secondary use does not require a house questionnaire.",
    # D T standard
    "National retail-sales statistics released for public or trade use are secondary when a retailer consults them. The retailer did not commission that national collection for its alone.",
    # E T compact
    "Secondary coverage can describe whole segments while saying little about one firm's accounts. Breadth without account-level detail is a common secondary profile.",
]

BODIES["CASE 5.5.14"] = [
    # A T standard
    "Secondary projects answer someone else's brief, so they may skip questions this firm would ask in primary work. Gaps in coverage are expected, not surprising. That omission risk is why firms still run primary studies.",
    # B T compact
    "Association reports on total sector output give secondary context for sizing the market. The association, not the reading firm, produced the totals.",
    # C T expanded
    "Published electronics-market forecasts already exist when a components manufacturer opens them. Consuming those forecasts is secondary research even if the numbers are highly relevant. Relevance does not convert prior publication into primary collection. The manufacturer saves fieldwork cost while accepting possible mismatch with its exact niches. The statement classifies that reading correctly.",
    # D T standard
    "Avoiding a full bespoke empirical programme cuts data-collection spend. Secondary sources deliver that saving by reusing work already paid for elsewhere.",
    # E T compact
    "Market reports from other businesses, whether sold or shared, can supplement understanding as secondary inputs alongside public statistics and association releases.",
]

BODIES["CASE 5.5.15"] = [
    # A F compact
    "Mature firms can still hold unused sales potential above today's volume. Equality of sales volume and sales potential is not automatic with age. Upside can remain.",
    # B F standard
    "Writing the survey questions in-house does not make the resulting answers secondary. Primary status follows fresh collection for the study, not authorship location. Commissioning firms routinely draft items and still hold primary data.",
    # C T expanded
    "Government agencies often publish industry trends without naming private customer accounts. Firms read those series as secondary context for markets and cycles. Missing account names is normal for public statistics. Managers still gain directional insight even without CRM-level detail. The statement describes that secondary pattern accurately.",
    # D T standard
    "Who-customer questions about current and potential buyers sit at the start of many customer-analysis plans. Market research routinely includes that identity step.",
    # E F compact
    "Reading government statistics in a board meeting does not reinvent them as primary data. Prior publication keeps them secondary regardless of the room.",
]

BODIES["CASE 5.5.16"] = [
    # A F compact
    "Storing survey answers on a server does not make the study secondary. An online survey run for the firm's brief remains primary. Medium of storage is irrelevant to the classification.",
    # B T standard
    "When buyers are final consumers, the firm is in a business-to-consumer market. Household end users define that side of the typology. The statement states the mapping cleanly.",
    # C T expanded
    "Customers that are other businesses purchasing for organisational use place the seller in a business-to-business market. Final household consumers are not the demand side there. Component makers selling to device assemblers illustrate the pattern. Labeling follows customer type, not product technology alone. The statement's B2B rule is therefore correct.",
    # D T standard
    "Gift buyers, corporate purchasers, and caregivers often pay while someone else uses the item. Customer analysis treats buyer and user as separable roles. They need not be the same person.",
    # E T compact
    "Influencers shape choices through advice or preference even when another person pays. Payment completion and influence are distinct roles in the decision set.",
]

BODIES["CASE 5.5.17"] = [
    # A T compact
    "Children request flavours, characters, or apps while parents or grandparents complete payment. Influence without paying is a familiar household pattern in customer analysis.",
    # B T standard
    "What-customer work studies how products are used so development can match real needs. Usage insight guides features, packaging, and instructions. The statement places that purpose correctly.",
    # C T expanded
    "Deeper knowledge of preferred use lets teams redesign interfaces, sizes, or bundles that fit actual routines. Guesswork falls when evidence on use accumulates. Product improvement then tracks customer practice rather than internal hunches alone. Firms that invest in that learning typically ship closer fits. The statement links knowledge of use to improvement accurately.",
    # D T standard
    "Where-customer analysis maps purchase locations to preferred channels such as stores, e-commerce, or agents. Channel strategy starts from those location findings.",
    # E T compact
    "Weak spots in the current channel mix show up when purchase-location data cluster away from the firm's present outlets. Location analysis can expose that mismatch.",
]

BODIES["CASE 5.5.18"] = [
    # A T standard
    "If buyers cluster in channels the firm underuses, where-customer findings can push a shift to alternatives. Evidence on location supports channel redesign rather than habit alone.",
    # B F compact
    "Telephone interviews run for a commissioned study remain primary even when an institute's staff dials. Who holds the phone does not turn fresh answers into secondary reuse.",
    # C F expanded
    "Trade-association reports already exist when the requesting business reads them. Outside authorship does not make them primary; prior completion for another purpose does. Primary status requires new collection for this firm's study. Association origin alone is not enough. The claim that such reports are primary because the association is external is therefore false.",
    # D F standard
    "Market share is one firm's (or brand's) slice of market sales, not the industry total itself. Total industry sales are market size or volume. Confusing share with the whole misstates the metric.",
    # E F compact
    "Fifty thousand in a one-million market is five per cent absolute share, not fifty. The percentage is sales over market volume times one hundred.",
]

BODIES["CASE 5.5.19"] = [
    # A T compact
    "Recording when customers buy reveals seasonal swings in demand. Timing maps are a standard when-customer output used for staffing, stock, and promotion planning across the year.",
    # B F standard
    "One hundred fifty thousand euros in a one-million market is fifteen per cent absolute share, not one point five. Dividing 150,000 by 1,000,000 yields 0.15. The stated percentage is off by a factor of ten.",
    # C F expanded
    "Relative share is absolute share divided by the leader's share when both are expressed consistently. Fifteen over thirty equals one half, or fifty per cent relative share, not forty-five. Multiplying or adding the percentages invents a wrong figure. Competitive standing uses that ratio, not an arbitrary sum. The statement's arithmetic is therefore false.",
    # D F standard
    "If both the firm and the leader hold twenty per cent absolute share, relative share equals one (or one hundred per cent on a percentage reading of the ratio), not zero. Equal shares mean parity with the leader.",
    # E T compact
    "Predictable demand peaks let production ramp before the rush arrives. Knowing purchase timing supports that advance planning instead of scrambling after shelves empty.",
]

BODIES["CASE 5.5.20"] = [
    # A T standard
    "Seasonal timing insight can justify different prices in peak and off-peak windows. When-customer analysis therefore supports period-based price differentiation.",
    # B T compact
    "Why-customer work asks what drives choice of one product over another. Motives and preference reasons sit at the centre of that dimension for marketers.",
    # C T expanded
    "Motives and preferences guide which features to strengthen and which messages to emphasise. Firms that learn those drivers can improve products and lift share more deliberately than by guessing. Development roadmaps and positioning both draw on that evidence. Ignoring why-answers leaves product bets under-informed. The statement correctly ties motive learning to development and share goals.",
    # D T standard
    "Market research profiles existing customers and prospects who might buy. Both groups belong in the information set, not only current accounts.",
    # E T compact
    "Competition and industry conditions sit beside customer profiles in market research scope. The field is wider than buyer lists alone when strategy is set.",
]

BODIES["CASE 5.5.21"] = [
    # A T compact
    "Who-customer research separates household end users from organisational buyers for the same product category. That split defines consumer versus business markets.",
    # B F standard
    "Relative share compares the firm with a leader and need not equal the absolute percentage of market volume. Absolute and relative figures answer different questions. Treating them as the same percentage confuses the two metrics.",
    # C T expanded
    "What-customer analysis can show home use, workplace use, or industrial-process use for the same category. Context of use changes packaging, support, and channel choices. Mapping those settings is a concrete deliverable of the what dimension. Firms redesign offerings when use context differs sharply across segments. The statement describes that use-mapping role correctly.",
    # D T standard
    "Hospital procurement teams buying medical supplies are organisational customers. Studying them is business-to-business customer analysis inside market research.",
    # E T compact
    "Household shoppers in retail aisles illustrate business-to-consumer purchasing. Customer analysis of those shoppers is classic B2C market research work.",
]

BODIES["CASE 5.5.22"] = [
    # A T standard
    "Fleet managers buying commercial vehicles act as organisational customers. Their acquisition decisions belong in business-to-business customer analysis.",
    # B T compact
    "Teenagers who recommend apps can steer purchases that parents pay for. Influence without payment is a recognised role in customer analysis of households.",
    # C T expanded
    "Factory maintenance staff may use industrial components daily while managers or procurement officers place the orders. Separating user from buyer clarifies training, packaging, and complaint paths. Customer analysis that interviews users captures operational reality the buyer may not feel. The statement correctly places maintenance staff as users of components bought by managers.",
    # D T standard
    "Where-customer research can find rising preference for retail stores in some categories. Channel mixes then tilt toward physical outlets for those lines.",
    # E F compact
    "Market size may be stated in euros or in pieces sold. Barring quantity measures invents a false restriction. Both units appear in ordinary market reports.",
]

BODIES["CASE 5.5.23"] = [
    # A T compact
    "Where-customer research can show a shift toward online platforms for certain categories. Channel strategy then follows that location preference.",
    # B F standard
    "Market size is often expressed as a euro sales total as well as in units. Forbidding monetary measures is wrong. Value and quantity are both valid size languages.",
    # C T expanded
    "Winter holiday spikes appear in when-customer calendars for gift lines, food, and seasonal goods. Higher volumes in those weeks are a timing finding, not a mystery. Production and staffing plans lean on that seasonality. Capturing purchase timing makes those peaks visible in the data. The statement describes that holiday-volume use of when-analysis correctly.",
    # D T standard
    "Lower total cost of ownership can be the decisive why for choosing a supplier. Motive research that surfaces cost-of-ownership reasoning explains share shifts beyond sticker price alone.",
    # E T compact
    "Perceived reliability is a frequent why-driver in supplier choice. Why-customer research is built to detect that preference when buyers explain selection.",
]

BODIES["CASE 5.5.24"] = [
    # A T standard
    "Faster delivery performance can win orders when buyers weigh lead time heavily. Why-customer interviews and surveys surface that motive when it drives choice.",
    # B F compact
    "Where-customer analysis asks where customers buy, not where factories sit. Plant location is a production topic, not the where dimension of customer analysis.",
    # C T expanded
    "Environmental reputation can tip supplier choice when buyers score brands on sustainability. Why-customer research that asks about those criteria will record green preference alongside price and quality. Product and communications teams then know whether reputation investments move demand. Ignoring that motive leaves a visible driver unexplained. The statement correctly includes environmental reputation among why-findings.",
    # D F standard
    "When-customer analysis tracks when customers purchase, not when engineers design products. Design calendars belong elsewhere. Timing of demand is the when dimension.",
    # E T compact
    "After-sales support availability can decide supplier choice. Why-research captures that service motive when buyers name support in interviews.",
]

BODIES["CASE 5.5.25"] = [
    # A T compact
    "Market size, also called market volume, sums sales of a product across all businesses in that market. One firm's revenue alone is not the market total.",
    # B T standard
    "Expressing market size in euros (or another currency) is standard when value matters more than unit counts. Monetary market volume is a recognised form of the measure.",
    # C T expanded
    "Piece counts, tonnes, or other quantity units also express market size when physical volume is the planning language. A market of two million units is as valid a size statement as a euro total. Firms choose the unit that matches how they forecast capacity and share. Both languages appear in the same chapter toolkit. The statement correctly allows quantity measures.",
    # D T standard
    "Market share is the slice of those market sales held by a business, product, or brand. Proportion, not the absolute industry total, defines share.",
    # E T compact
    "Dividing the firm's sales by total market sales yields market share. That ratio is the calculation the statement names for each firm's share.",
]

BODIES["CASE 5.5.26"] = [
    # A F compact
    "What-customer analysis studies what buyers do with products, not what rivals charge. Competitor price lists belong to competitive intelligence, not the what-use dimension.",
    # B T standard
    "Absolute market share is one business's sales volume divided by total market volume. That ratio is the textbook absolute-share definition. The statement states it correctly.",
    # C T expanded
    "One hundred fifty thousand euros of sales in a one-million euro market is 150,000 / 1,000,000 = 0.15, or fifteen per cent absolute share. The arithmetic follows directly from the absolute-share formula. Misplacing the decimal would invent a different percentage, but fifteen per cent is the right result here. Numerical examples like this anchor the definition in practice. The statement's calculation is therefore true.",
    # D F standard
    "Who-customer analysis identifies current and potential customers in the market, not which internal employees staff the service desk. Internal staffing is an HR topic. Customer identity is outward-facing.",
    # E F compact
    "Why-customer analysis asks why buyers choose products, not why factory costs rose. Cost accounting spikes are a different question from purchase motives.",
]


def main() -> None:
    data = json.loads(PATH.read_text())
    slice_cases = data[START:END]
    ids = [c["case_id"] for c in slice_cases]
    missing = [cid for cid in ids if cid not in BODIES]
    if missing:
        raise SystemExit(f"missing bodies for {missing}")
    extra = sorted(set(BODIES) - set(ids))
    if extra:
        raise SystemExit(f"extra bodies {extra}")

    for c in slice_cases:
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
    print(f"Wrote explanations for {ids[0]} .. {ids[-1]} ({len(ids)} cases) indices [{START}:{END}]")


if __name__ == "__main__":
    main()
