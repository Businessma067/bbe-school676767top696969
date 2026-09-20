#!/usr/bin/env python3
"""Hand-authored statement-only tactical_explanations for ch5 cases [120:160]."""
from __future__ import annotations

import json
import re
from pathlib import Path

PATH = Path("/workspace/src/data/economics-cases-ch5-subtopics.json")
SLICE = slice(120, 160)


def wrap(body: str, truth: bool) -> str:
    body = body.replace("\u2014", ", ").replace("\u2013", "-").strip()
    v = "True" if truth else "False"
    return f"{body}\n\nSo the statement is {v}."


BODIES: dict[str, list[str]] = {}

BODIES["CASE 5.5.57"] = [
    "Published trade statistics on industrial adhesives already exist as industry records. Reusing them to size total sales is secondary information, not new fieldwork.",
    "Customer analysis for adhesives can ask where plants buy, when orders peak for construction seasons, and why one binder brand wins contracts. Those where-when-why questions sit inside the same buyer toolkit used in other markets. Segment wording does not change the method.",
    "Absolute market share divides firm sales by total market sales. Fifty-seven million euros over a 342 million euro adhesives market is 57/342, which equals about 0.167, or 16.7 per cent. The statement reports that ratio correctly for the industrial adhesives figures given. No rival comparison is required for this absolute calculation.",
    "Relative share divides the firm's absolute percentage by the leader's. Sixteen point seven over 41.75 equals 0.4 in adhesives. That head-to-head ratio is exactly what the statement computes.",
    "Buyers still outside the adhesives category can enter later. Their possible demand lifts market potential above today's realised market volume in this industry setting.",
]

BODIES["CASE 5.5.58"] = [
    "In growing markets, sales potential routinely sits above current sales volume. Subtracting volume from potential therefore need not yield zero; gains and growth leave a positive gap.",
    "One adhesives firm can raise sales potential above today's volume by winning rival accounts and by claiming a share of market expansion. Those two routes are standard potential components in the chapter.",
    "An online survey before a commercial laundry equipment update collects fresh answers for the launch brief. Analysing those responses is primary research that can sharpen positioning on features buyers actually want. Survey evidence beats guesswork about channel and timing needs. The statement correctly links that fieldwork to better positioning.",
    "Trade statistics already published on commercial laundry equipment are existing sources. Using them to estimate industry sales is secondary research, not new interviewing.",
    "Laundry-equipment customer analysis may probe purchase points, seasonal peaks, and supplier preference motives. Those strands belong in buyer research for the segment.",
]

BODIES["CASE 5.5.59"] = [
    "Fifteen per cent absolute share means the firm accounts for fifteen of every hundred sales euros, not that the market is fifteen times the firm's sales. The multiple reading invents a false meaning.",
    "Seventy-four million over 518 million equals about 0.143, or 14.3 per cent. Absolute share is firm sales divided by market sales, so the laundry-equipment arithmetic matches the definition.",
    "A relative share of one means the firm's absolute percentage equals the largest rival's percentage. It is a ratio of one, not a claim of one per cent of total market sales. Confusing the head-to-head ratio with an absolute one-per-cent reading misstates the metric. Relative share never equals absolute percentage by definition.",
    "Primary research stays primary for whoever first collected it for their brief. A later firm reading those results is doing secondary reuse; the original study does not flip labels when the reader changes.",
    "Paying a fee for an industry database still reuses existing data. Fee access does not convert secondary sources into primary fieldwork for the paying firm.",
]

BODIES["CASE 5.5.60"] = [
    "Customer analysis covers who, what, where, when, and why. Limiting it to who and what alone drops channel, timing, and motive strands the chapter includes.",
    "Quantity and value are different units, yet both can describe market size and can be compared across periods once the unit is held fixed. Saying pieces and euros can never be compared invents an absolute ban the chapter does not teach.",
    "Relative market share divides absolute share by the leader's share. Fourteen point three per cent against about 42.9 per cent yields roughly 0.33 in commercial laundry equipment. The statement's ratio follows that definition with the given percentages. Absolute figures alone would not produce the rivalry reading without that division.",
    "Untapped buyers who could enter laundry equipment still sit outside current volume. Their possible demand raises market potential above realised sales for the category.",
    "One laundry firm's sales potential can exceed present volume via rival wins and market growth. Those components sit inside the potential breakdown used in the chapter.",
]

BODIES["CASE 5.5.61"] = [
    "Hiring an institute for field interviews before an accounting-software launch gathers new data for positioning. Commissioned fieldwork is primary research that can improve the updated line's aim.",
    "Absolute share is a percentage of the whole market; relative share is a ratio against the leader. Those numbers coincide only by accident, not always. Treating them as identical invents a false rule.",
    "Published trade statistics on enterprise accounting software already exist as industry sources. Reusing them to estimate total sales is secondary information rather than fresh interviewing. Secondary work is appropriate precisely when published figures can size the market. The statement places those statistics correctly in that secondary role.",
    "Independence of an institute does not decide whether data are primary or secondary. Institutes often collect new primary data for clients; secondary status turns on reuse of existing sources, not on organisational independence.",
    "Accounting-software customer analysis can ask purchase channels, demand peaks, and preference motives. Those questions belong in buyer research for the segment.",
]

BODIES["CASE 5.5.62"] = [
    "Primary fieldwork is often costlier than reusing secondary sources. Small firms do not always prefer primary because it is cheaper; that cost claim is backwards.",
    "Ninety-one million over 728 million equals 0.125, or 12.5 per cent absolute share. Producer sales divided by market sales give that percentage for enterprise accounting software.",
    "Relative share puts 12.5 per cent against a leader at 25 per cent, which equals 0.5. The ratio shows the firm at half the leader's absolute weight in accounting software. That head-to-head reading is what relative share is designed to show. Absolute percentages alone would not reveal the rivalry gap without this division, and the arithmetic matches the statement.",
    "Software buyers not yet in the category can still adopt later. Their possible demand lifts market potential above current market volume in enterprise accounting software.",
    "Why-customer motives are studied while sales are healthy, not only after they hit zero. Waiting for collapse invents a false timing rule for motive research.",
]

BODIES["CASE 5.5.63"] = [
    "Where-customer data track where buyers purchase, not where suppliers locate factories. Factory maps answer a production question, not the customer-channel question.",
    "An accounting-software firm's sales potential can exceed current volume through gains from competitors and through a share of market growth. Those routes are standard potential components.",
    "Designing a primary study around channel preferences before an organic breakfast cereal launch collects new answers for positioning. Channel insight can reshape retail placement and promotions for the updated line. Primary design beats recycling unrelated reports. The statement correctly ties that study to improved positioning.",
    "Published trade statistics on organic breakfast cereals are existing sources. Using them to estimate industry sales is secondary market information rather than new interviews.",
    "Cereal customer analysis may ask where shoppers buy, when demand peaks, and why one brand wins. Those strands fit the buyer-research toolkit for the category.",
]

BODIES["CASE 5.6.01"] = [
    "Market segmentation splits a market into subgroups that are relatively alike on traits that matter for marketing. Shared relevant characteristics define those homogeneous clusters.",
    "Geographic segmentation sorts buyers by where they live or operate, such as a city plus its surrounding area. Location, not income or lifestyle, is the grouping key.",
    "Demographic segmentation uses measurable social traits: age, gender, education, and income are classic examples. Those variables can be counted and compared across groups without reading attitudes or purchase frequency. Marketers use them because they are observable and often available in census or survey data. The statement lists that demographic toolkit correctly.",
    "Psychographic segmentation turns on attitudes, values, lifestyle interests, and willingness to pay for particular product philosophies. Soft preference traits, not postal codes, define the cut.",
    "Segments need relative homogeneity on relevant traits, not identity on every personal characteristic. Requiring total sameness invents an impossible standard for useful groups.",
]

BODIES["CASE 5.6.02"] = [
    "Geographic segmentation classifies by location, not by income or education. Those social measures belong to demographic cuts, so the statement swaps categories.",
    "Demographic segmentation is built on age, gender, education, and income. Lifestyle attitudes and values define psychographics instead. Swapping those definitions mislabels the demographic cut.",
    "Psychographic segmentation reflects attitudes, values, and lifestyle interests. Postal districts and city boundaries are geographic variables, not psychographic ones. Defining psychographics solely by map lines collapses two distinct segmentation bases into one false rule. Location belongs under geographic segmentation.",
    "Behavioural segmentation focuses on how customers buy or use products. Gender is a demographic trait, so treating behaviour as gender-only ignores purchase and usage patterns.",
    "Behavioural segmentation separates occasional from heavy users by purchase and usage intensity. That usage distinction is exactly the behavioural cut described in the statement.",
]

BODIES["CASE 5.6.03"] = [
    "A useful segment must be measurable so managers can estimate size and purchasing power. Without those estimates, planning spend and capacity lacks a numerical base.",
    "Profitability requires that serving the segment be worthwhile: expected revenue should cover the cost of tailored offers. Large but loss-making groups fail this criterion.",
    "Accessibility means communication and distribution can actually reach the subgroup. A measurable, profitable segment still fails if ads and retail paths cannot touch it. Channels that connect to the buyers are therefore part of the usefulness test, alongside size and profit checks. The statement names that reach requirement correctly for a useful segment.",
    "Measurability allows estimates from samples, sales data, or statistics. Interviewing every member individually is not required for a segment to count as measurable.",
    "Sheer size does not guarantee profit if serving costs exceed revenue. Profitability turns on net return, not headcount alone for the segment.",
]

BODIES["CASE 5.6.04"] = [
    "Durability means the segment stays stable enough to support planning. Rapid churn that outruns strategy cycles fails that usefulness test for marketers.",
    "Accessibility is about reach through communication and distribution. Profitability alone cannot make a segment accessible if no channel touches the buyers. Conflating the two criteria is wrong.",
    "Targeting evaluates how attractive each segment is and then selects one or more to enter. It sits after segmentation has drawn the subgroups and before positioning shapes the offer. Choosing where to compete is the heart of targeting, not redrawing the map of the market. The statement states that evaluation-and-selection role correctly.",
    "A target market is the people or businesses a firm markets to with a strategy built for their needs and preferences. Specific needs, not the whole population, define the focus.",
    "Positioning tries to create an image or identity in the minds of the target market. That mental placement is the chapter's positioning definition for marketers.",
]

BODIES["CASE 5.6.05"] = [
    "Durable means stable enough for planning, not frozen forever. Segments may shift slowly and still qualify; a never-change rule invents an absolute ban.",
    "Once segments exist and a target is chosen, positioning clarifies which product meets that subgroup's demands. Image and identity work follow targeting, not replace it.",
    "Segmentation divides the market into subgroups; targeting chooses which of those subgroups to enter. The statement reverses the two labels. Mixing the verbs invents a false sequence and would leave managers dividing when they should be selecting. Correct order keeps division first and choice second, before any positioning work begins.",
    "Mass marketing ignores segment differences and pushes the same product to all customers. One offer for everyone is the mass approach described in the chapter.",
    "The usual sequence is segmentation, then targeting, then positioning. Putting positioning first contradicts that marketing strategy order for the firm.",
]

BODIES["CASE 5.6.06"] = [
    "Under mass marketing, promotion treats segments almost alike with one shared approach. Near-uniform messaging across the market is the mass pattern.",
    "Everyday staples such as pens, soaps, hygiene goods, and detergents often suit mass marketing because many buyers share similar basic needs. The statement's product list fits that everyday use case.",
    "Mass marketing offers the same product to the whole market rather than tailored variants for each segment. Differentiated offers belong to segment marketing. Claiming mass marketing supplies different tailored products to each segment swaps the mass and segment definitions. Uniformity, not customisation per cluster, is the mass rule.",
    "Mass marketing supports producing many identical units for a large market. Scale of identical output is part of the mass logic for everyday goods.",
    "Economies of scale appear when identical output rises and some costs do not climb in lockstep with volume. Shared costs spread across more units of output.",
]

BODIES["CASE 5.6.07"] = [
    "Mass marketing promotes one product in almost the same way everywhere, not with highly customised campaigns per segment. Customisation contradicts the mass approach.",
    "Economies of scale mean some costs do not rise in direct proportion to output. Claiming every cost rises proportionally denies the scale effect the chapter describes.",
    "When identical output increases, shared factory and overhead costs divide across more units, so cost per unit can fall. That spreading of fixed or joint costs is the mechanism behind lower unit cost at higher volume. Managers watch total output of the same product precisely for this unit-cost effect. The statement captures that output-to-unit-cost link correctly for identical products.",
    "Economies of scale lower, rather than raise, cost per unit as identical output grows. Claiming they always raise unit cost reverses the concept taught here.",
    "Grouping by adult men and women of all ages is demographic, not geographic. Demographics describe people traits such as age and gender, not place on a map.",
]

BODIES["CASE 5.6.08"] = [
    "Mass marketing's one-size approach can be inflexible when particular target markets shift. Reacting to niche changes is harder under a uniform offer.",
    "Segment marketing offers different products to one or more segments after segmentation has identified them. Differentiation by subgroup is the segment approach.",
    "An Austrian city and its commuter belt form a geographic cut based on location. Psychographics turn on attitudes and values, not map lines. Calling that city-commuter grouping psychographic mislabels a geographic segment. Place defines the subgroup here, while income or lifestyle would belong under other bases entirely.",
    "Unwillingness to pay full price for a new device is an attitude or value stance, hence psychographic. Behavioural cuts track purchase and usage frequency, not payment willingness alone.",
    "Occasional versus intensive daily use is behavioural segmentation. Usage intensity is not a demographic social characteristic like age or education.",
]

BODIES["CASE 5.6.09"] = [
    "Segment marketing concentrates limited resources where strategic fit with customer needs is strongest. Focused fit beats scattering effort across every cluster.",
    "Niche marketing goes further into particular segments and often into subgroups inside broader segments. Extra segmentation depth is part of the niche path.",
    "Many small firms lack the capacity for mass-market volumes, so niche marketing lets them serve narrower groups they can supply. Quantity limits push them toward focused segments rather than undifferentiated national coverage. Specialisation matches resource constraints. The statement links small-business scale to niche practice correctly.",
    "A specialist may target only selected segments instead of the whole market. Selective focus is normal when expertise fits particular clusters of buyers.",
    "A niche specialist that serves its segment well can lead that niche regardless of overall firm size. Leadership follows fit, not headcount across the industry.",
]

BODIES["CASE 5.6.10"] = [
    "Targeting comes first in building strategy before the marketing mix is applied to serve the chosen market. Selection precedes mix design for the firm.",
    "After the target is chosen, the marketing mix is the second step that serves those needs. Product, price, place, and promotion follow targeting.",
    "Buyers in an Austrian city and its surrounding commuter area are grouped by location. That place-based cut is geographic segmentation. Commuter belts and city cores share a spatial definition rather than an attitude or income definition. City-plus-commuter examples are textbook geography cuts. The statement therefore illustrates geographic segmentation correctly.",
    "Naming a city-commuter area on a map does not prove the segment is profitable. Profitability still requires revenue above serving costs for that geography.",
    "Adult men and women of all ages are demographic descriptors. Age and gender are measurable population characteristics for that demographic cut.",
]

BODIES["CASE 5.6.11"] = [
    "Measurability does not guarantee accessibility. Without channels that reach adult men and women of all ages, the segment remains unreachable despite good size estimates.",
    "Durability allows slow change; it does not demand that preferences never shift. Short-term noise can be ignored without requiring permanent freeze of the price-sensitive device segment.",
    "Buyers unwilling to pay full price for a brand-new device are grouped by attitude toward price and novelty. That preference stance is psychographic, not a pure location cut. Targeting them therefore reflects psychographic segmentation based on willingness-to-pay attitudes. The statement places the cut in the right category.",
    "Occasional versus intensive daily operators differ in purchase and usage intensity. That pattern difference is behavioural segmentation within the product category.",
    "Mass marketing to a city-commuter area uses one offer, not a different formula for every street. Street-level customisation contradicts mass logic for that geography.",
]

BODIES["CASE 5.6.12"] = [
    "Niche marketing concentrates on a narrow subgroup, not on selling one identical product to the entire national market. National uniformity is mass marketing, not niche.",
    "Segment marketing differentiates offers across subgroups. Ignoring differences and pushing one undifferentiated item is mass marketing, so the statement mislabels segment work.",
    "Positioning still matters after geographic segmentation because the firm must place an image for the chosen behavioural subgroup. Completing a location cut does not finish strategy. Occasional versus intensive users still need a clear product identity in their minds. Calling positioning unnecessary after geography invents a false stopping rule for the sequence.",
    "Survey and sales data can estimate size and purchasing power for an Austrian city-commuter segment. Those estimates satisfy measurability without interviewing every resident.",
    "Adult men and women of all ages are profitable only when expected revenue exceeds serving costs. Size alone does not settle the profit test for that group.",
]

BODIES["CASE 5.6.13"] = [
    "Targeting selects attractive subgroups; it does not mean listing every possible cluster without evaluation. Undifferentiated listing skips the attractiveness step.",
    "Niche offers typically forgo mass economies of scale. Claiming identical scale economies for a price-sensitive device niche and undifferentiated mass production is false.",
    "Accessibility for buyers unwilling to pay full device prices requires advertising and retail paths that actually reach them. When those channels work, the segment meets the reach criterion even if it is narrower than the mass market. Communication and distribution access are the test. The statement states that accessibility condition correctly.",
    "Strategic fit with adult men and women of all ages calls for concentrating resources on that segment, not spreading evenly across every segment in the economy.",
    "Tiny customised batches rarely undercut mass unit costs. Claiming they always yield lower unit cost than identical mass runs reverses typical cost logic.",
]

BODIES["CASE 5.6.14"] = [
    "Employed wage earners and retired pensioners are demographic groups. Demographics describe people traits, not place, so calling that cut geographic is wrong.",
    "A coastal region and neighbouring inland towns form a geographic location cut. Psychographics concern values and attitudes, not map adjacency. Mislabeling the coastal grouping as psychographic confuses place with values.",
    "Occasional versus intensive daily operators remain a useful behavioural segment when usage stays stable enough for product and promotion plans. Durability does not require zero change, only enough steadiness to justify investment. Planning cycles need that relative stability. The statement links usage durability to planning correctly.",
    "Valuing environmental reuse of second-hand goods is an attitude, hence psychographic. Behavioural segmentation tracks purchase frequency and usage, not that value stance alone.",
    "Seasonal versus year-round purchasing is behavioural. Usage timing is not a demographic trait like age or education level among buyers in the category.",
]

BODIES["CASE 5.6.15"] = [
    "Map names alone do not prove profit for a coastal-inland segment. Profitability still needs revenue above the cost of serving those towns and regions.",
    "Mass marketing of a universal staple across an Austrian city, its commuter belt, and other areas uses one offer promoted almost the same way everywhere. Uniform promotion is the mass pattern.",
    "Accessibility requires channels that reach employed wage earners and retired pensioners. Measurability of those demographic groups does not create reach if ads and distribution miss them. Treating measurable as automatically accessible collapses two separate criteria. The statement's even-if-no-channel claim is therefore false.",
    "Segment marketing to adult men and women of all ages would differentiate products to match subgroup needs rather than one identical item. Differentiation is the segment approach.",
    "Environmental-reuse values may shift slowly and still leave a durable segment. Requiring never-shift preferences invents an absolute freeze rule for usefulness.",
]

BODIES["CASE 5.6.16"] = [
    "Niche marketing to price-sensitive device buyers concentrates on a narrow subgroup whose preferences justify a focused offer. Narrow depth is the niche idea.",
    "Mass marketing to coastal and inland towns uses one product approach, not a different formula per street. Street-level customisation contradicts mass marketing.",
    "Targeting occasional rather than intensive daily operators means selecting that behavioural subgroup after judging attractiveness against measurability, profit, access, and durability. Selection follows evaluation; it is not a raw list of every cluster. Behavioural usage intensity defines who is chosen. The statement describes that targeting step correctly.",
    "Positioning toward price-sensitive device buyers builds a distinct image of which product serves that attitude-based subgroup. Mental identity work is positioning.",
    "Millions of identical units for an Austrian city-commuter market can spread fixed factory costs and support economies of scale. Volume spreads shared costs across output.",
]

BODIES["CASE 5.6.17"] = [
    "Niche marketing to environmental-reuse buyers focuses on a narrow subgroup, not on one identical product for the entire nation. National sameness is mass marketing.",
    "Strategic fit with adult men and women of all ages calls for concentrating resources on that demographic segment rather than undifferentiated mass coverage. Focus follows fit.",
    "Coastal regions and neighbouring inland towns are grouped by location. That place definition is geographic segmentation. Buyers share a spatial frame rather than an income or lifestyle frame in this cut. Neighbouring inland towns still belong under geography when the link is place. The statement therefore illustrates geographic segmentation correctly for those areas.",
    "Employed wage earners and retired pensioners are demographic descriptors based on measurable population characteristics. Employment and retirement status fit that demographic cut.",
    "Valuing environmental reuse of second-hand goods is an attitude-based psychographic cut, not a location-only grouping. Preferences define the segment in this example.",
]

BODIES["CASE 5.6.18"] = [
    "Seasonal purchasers versus year-round repeat buyers differ in purchase timing and usage patterns. That difference is behavioural segmentation inside the product category.",
    "Segment marketing differentiates for employed wage earners and retired pensioners. Ignoring differences and promoting one undifferentiated offer is mass marketing, not segment marketing.",
    "Survey and sales figures can reveal size and average purchasing power for a coastal-inland segment. Those estimates make the geographic group measurable without a census of every resident. Measurability rests on workable sample or sales data, not exhaustive interviews of every household. The statement ties data to measurability correctly for that place-based group.",
    "Positioning toward seasonal purchasers remains necessary after geographic work because the firm still needs an image for that behavioural subgroup. Geography alone does not finish positioning.",
    "Targeting seasonal buyers means selecting after attractiveness checks, not listing every subgroup without evaluation. Listing without judgment is not targeting as defined here.",
]

BODIES["CASE 5.6.19"] = [
    "Niche offers for environmental-reuse buyers typically lack the volume of undifferentiated mass production, so scale economies are not identical. Equating them is false.",
    "Employed wage earners and retired pensioners form a profitable segment only when expected revenue exceeds tailored-offer costs. Net return, not mere naming, decides profitability.",
    "Strategic fit with employed and retired groups calls for concentrating resources on that demographic segment. Spreading evenly across every segment in the economy would dilute the fit advantage. Focus is the point of selecting a strategically matching cluster. The even-spread claim therefore contradicts segment strategy.",
    "Tiny customised batches for environmental-reuse buyers do not always beat mass unit costs. Mass identical runs usually enjoy lower unit cost from scale advantages.",
    "Environmental-reuse buyers are accessible when advertising and retail channels reach them effectively. Reach through communication and distribution is the accessibility test.",
]

BODIES["CASE 5.6.20"] = [
    "Seasonal versus year-round purchase patterns can be durable when they stay stable enough for product and promotion planning. Relative steadiness supports investment in the offer.",
    "Self-employed professionals and salaried staff are demographic groups. Demographics are people traits, not place, so calling that cut geographic mislabels it.",
    "Mass marketing of a universal staple across a coastal region, inland towns, and other areas uses one offer promoted almost the same way everywhere. Uniformity across geography is the mass approach. Local street customisation is not required under that logic. The statement describes that one-offer pattern correctly for a staple product.",
    "Segment marketing to employed and retired groups would differentiate products to match needs rather than one identical item. Differentiation defines segment marketing in this case.",
    "Niche marketing to environmental-reuse buyers concentrates on a narrow subgroup whose specialised preferences justify a focused offer. Narrow depth is niche practice here.",
]

BODIES["CASE 5.6.21"] = [
    "Targeting seasonal rather than year-round buyers selects that behavioural subgroup after judging attractiveness against segmentation criteria. Evaluation precedes selection.",
    "Positioning toward environmental-reuse buyers builds a distinct image of which product serves that attitude-based subgroup. Identity in the target's mind is positioning.",
    "Producing millions of identical units for coastal and inland towns spreads fixed factory costs across high volume. That spreading supports economies of scale when the offer stays undifferentiated. Shared costs fall per unit as identical output rises. The statement links volume production to scale correctly for that geography.",
    "Strategic fit with employed wage earners and retired pensioners should concentrate resources on that segment rather than mass coverage of everyone. Focus follows fit.",
    "A capital district and peripheral suburbs form a geographic segment because location defines the subgroup. Place, not income, is the grouping key in this cut.",
]

BODIES["CASE 5.6.22"] = [
    "Self-employed professionals and salaried staff are demographic descriptors using measurable population characteristics. Employment status fits that demographic cut.",
    "Capital districts and peripheral suburbs are geographic location groups. Psychographics concern values and attitudes, so calling the capital-suburb cut psychographic confuses place with values.",
    "Users wanting hands-on help when starting equipment are grouped by service attitude and preference, not by map location alone. That preference stance is psychographic segmentation. Targeting them reflects attitudes toward assisted start-up rather than pure geography. The statement places the cut correctly in the psychographic category.",
    "Light versus power users of software licences differ in purchase and usage intensity. That pattern difference is behavioural segmentation within the software category.",
    "Survey and sales data can measure size and purchasing power for a capital-suburb segment. Those estimates satisfy measurability for the geographic group described.",
]

BODIES["CASE 5.6.23"] = [
    "Self-employed and salaried segments are profitable only when expected revenue exceeds the cost of tailored offers. Naming the group does not settle the profit test.",
    "Hands-on-help users are accessible when advertising and retail channels reach them effectively. Communication and distribution reach define accessibility for this subgroup.",
    "Wanting hands-on help when starting equipment is an attitude or preference about service style, which is psychographic. Behavioural segmentation tracks purchase frequency and usage intensity, not that service attitude. Equating attitudes with purchase frequency collapses two bases. The statement therefore mislabels the cut as behavioural.",
    "Light versus power software users form a durable behavioural segment when usage stays stable enough for product and promotion plans. Relative steadiness supports planning.",
    "Mass marketing a universal staple across a capital district, suburbs, and other areas uses one offer promoted almost the same way everywhere. Uniform promotion is mass logic.",
]

BODIES["CASE 5.6.24"] = [
    "Segment marketing to self-employed and salaried staff offers differentiated products matching subgroup needs rather than one identical item. Differentiation is the segment approach.",
    "Light versus power software use is behavioural, based on usage intensity. Demographics cover age, income, and similar social traits; usage is not demographic like age.",
    "Niche marketing to users wanting hands-on start-up help concentrates on a narrow subgroup whose specialised preferences justify a focused offer. Depth into that service-attitude niche differs from covering every buyer with one mass product. Specialisation matches the narrow preference set. The statement describes niche concentration correctly.",
    "Naming a capital district and suburbs on a map does not prove automatic profitability. Revenue must still exceed serving costs for the geographic segment.",
    "Targeting light software users means selecting that behavioural subgroup after judging attractiveness against segmentation criteria. Selection follows evaluation of the cluster.",
]

BODIES["CASE 5.6.25"] = [
    "Measurability of self-employed and salaried groups does not create accessibility if no channel reaches them. Reach and measurement remain separate criteria for usefulness.",
    "Positioning toward hands-on-help users creates a distinct image of which product serves that attitude-based subgroup. Mental identity for the niche is positioning work.",
    "Durability for hands-on-help preferences requires only enough stability for planning, not a forever freeze that makes short-term trends irrelevant by definition. Preferences may drift slowly without destroying the segment. Absolute never-shift rules invent an impossible test. The statement's only-if-never-shift claim is therefore false.",
    "Millions of identical units for a capital-suburb geography can spread fixed factory costs and support economies of scale. Volume spreads shared costs across identical output.",
    "Strategic fit with self-employed and salaried staff should concentrate resources on that segment rather than undifferentiated mass coverage. Focus follows fit for the firm.",
]

BODIES["CASE 5.6.26"] = [
    "Mountain provinces and valley municipalities are grouped by location. That place definition illustrates geographic segmentation for those regional buyers.",
    "Households grouped by declared income brackets are a demographic cut using measurable population characteristics. Income levels fit demographic segmentation as taught.",
    "Mass marketing to a capital district and suburbs uses one offer, not a different product formula for every neighbourhood street. Street-level customisation contradicts the mass approach. Uniformity across the area is the mass rule for staples. The statement's every-street requirement invents a false mass condition that the chapter never teaches.",
    "Shoppers prioritising reliability over fashionable novelty are grouped by attitude and preference. That psychographic cut is not location alone for the targeting decision.",
    "Niche marketing to hands-on-help users focuses on a narrow subgroup, not on one identical product for the entire national market. National sameness is mass marketing.",
]

BODIES["CASE 5.6.27"] = [
    "Infrequent maintainers versus continuous heavy consumers differ in purchase and usage patterns. That intensity difference is behavioural segmentation in the category.",
    "Mountain-province and valley segments are measurable when survey and sales data reveal size and average purchasing power. Estimates satisfy measurability without full interviews.",
    "Segment marketing to self-employed and salaried staff differentiates offers for those subgroups. Ignoring differences and promoting one undifferentiated item is mass marketing. The statement swaps the segment label onto a mass practice. Differentiation by needs, not sameness of offer, defines segment marketing here for those employment groups.",
    "Positioning toward light software users remains necessary after geographic segmentation because image still must be set for that behavioural subgroup. Geography alone does not finish positioning.",
    "Income-bracket households are profitable only when expected revenue exceeds tailored-offer costs. Net return decides the profit criterion for that demographic group.",
]

BODIES["CASE 5.6.28"] = [
    "Reliability-over-novelty shoppers are accessible when advertising and retail channels reach them effectively. Communication and distribution reach define accessibility here.",
    "Infrequent maintainers versus heavy consumers form a durable behavioural segment when usage stays stable enough for product and promotion planning. Relative steadiness supports plans.",
    "Targeting light software users means selecting that behavioural subgroup after judging attractiveness. Listing every possible subgroup without evaluation skips targeting's core step. Attractiveness checks against segmentation criteria come before selection. The statement's list-without-evaluation reading is therefore false.",
    "Niche offers for hands-on-help users typically lack mass volume, so scale economies are not identical to undifferentiated mass production. Equating them is wrong.",
    "Strategic fit with self-employed and salaried staff calls for concentrated resources, not even spreads across every segment in the economy. Focus follows fit.",
]

BODIES["CASE 5.6.29"] = [
    "Mass marketing a universal staple across mountain provinces, valleys, and other areas uses one offer promoted almost the same way everywhere. Uniform promotion is mass logic.",
    "Segment marketing to income-bracket households would differentiate products to match subgroup needs rather than one identical item. Differentiation defines the segment approach.",
    "Niche marketing to reliability-over-novelty shoppers concentrates on a narrow preference subgroup whose specialised attitudes justify a focused offer. Depth into that psychographic niche differs from covering every buyer with one mass staple. Specialisation matches the reliability priority. The statement describes niche concentration correctly.",
    "Tiny customised batches for hands-on-help users do not always yield lower unit cost than mass identical production. Scale usually favours the mass run on unit cost.",
    "Targeting infrequent maintainers selects that behavioural subgroup after judging attractiveness against segmentation criteria. Evaluation precedes selection of the cluster.",
]

BODIES["CASE 5.6.30"] = [
    "Positioning toward reliability-over-novelty shoppers builds a distinct image of which product serves that attitude-based subgroup. Mental identity work is positioning.",
    "Millions of identical units for mountain provinces and valleys can spread fixed factory costs and support economies of scale. Volume spreads shared costs across geography.",
    "Strategic fit with income-bracket households should concentrate resources on that demographic segment rather than undifferentiated mass coverage. Focusing where fit is strongest improves the chance that tailored offers pay off. Scattering across every group would dilute that advantage. The statement links fit to resource concentration correctly.",
    "Border counties and adjacent cross-border shoppers are grouped by location. That place definition illustrates geographic segmentation for the cross-border trade area.",
    "Buyers classified by completed education level form a demographic segment using measurable population characteristics. Education status fits that demographic cut cleanly.",
]

BODIES["CASE 5.6.31"] = [
    "Clients seeking personalised service rather than self-service are grouped by service attitude. That preference cut is psychographic, not location alone for targeting.",
    "Trial buyers before occasional repeat purchase differ in purchase stage and usage pattern. That difference is behavioural segmentation within the product category.",
    "Border-county and cross-border shopper segments are measurable when survey and sales data reveal size and average purchasing power. Geographic groups become useful once those estimates exist. Measurability does not require interviewing every cross-border buyer. The statement ties data to the measurable criterion correctly.",
    "Income-bracket households are demographic, not geographic. Demographics describe people traits; place describes geography. Mislabeling income groups as geographic confuses the bases.",
    "Education-level buyers are profitable only when expected revenue exceeds tailored-offer costs. Net return, not education labels alone, settles profitability for the segment.",
]

BODIES["CASE 5.6.32"] = [
    "Mountain provinces and valley municipalities are geographic location groups. Psychographics concern values, so calling that place cut psychographic mislabels the basis.",
    "Reliability-over-novelty priorities are attitudes, hence psychographic. Behavioural segmentation tracks purchase frequency and usage, not that preference stance. Equating attitudes with frequency collapses two bases.",
    "Infrequent maintainers versus continuous heavy consumers differ in usage intensity, which is behavioural. Demographics cover age, income, and similar social traits. Treating usage as demographic like age invents a false category swap. Purchase and usage patterns define the behavioural cut here, not census-style social measures.",
    "Personalised-service clients are accessible when advertising and retail channels reach them effectively. Communication and distribution reach define accessibility for that psychographic group.",
    "Naming a mountain-valley area on a map does not prove automatic profitability. Revenue must still exceed the cost of serving that geographic segment of buyers.",
]

BODIES["CASE 5.7.01"] = [
    "A marketing mix is a harmonised blend of tools that best meets needs and wants in the targeted market. Coordination across tools is the point of the mix.",
    "The mix includes product, price, place, and promotion. Price and place are not left entirely to competitors; the firm sets them as mix elements. Dropping those two invents a two-P mix the chapter does not teach.",
    "Product is a core mix element; pricing alone does not determine sales. Features, quality, and assortment shape demand alongside price, channels, and messages. Calling product the least important because price alone drives sales invents a false ranking among the tools. All four Ps work together in the chapter's marketing mix overview.",
    "Place in the mix means distribution and channel decisions that get the offer to customers, not the geographic address of headquarters. HQ location is not the place-P definition.",
    "The four elements product, price, place, and promotion are the classic four Ps of the marketing mix. That list matches the chapter overview of the mix toolkit.",
]


def _lens(bodies: list[str]) -> list[int]:
    return [len(b) for b in bodies]


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
        lens = _lens(bodies)
        if any(n < 140 for n in lens):
            raise SystemExit(f"{c['case_id']}: body under 140; lens={lens}")
        if max(lens) - min(lens) < 140:
            raise SystemExit(f"{c['case_id']}: spread {max(lens) - min(lens)} < 140; lens={lens}")
        if not any(n >= 320 for n in lens):
            raise SystemExit(f"{c['case_id']}: need >=1 >=320; lens={lens}")
        if not any(n <= 300 for n in lens):
            raise SystemExit(f"{c['case_id']}: need >=1 <=300; lens={lens}")
        opens = [b.split("\n")[0].strip().lower()[:40] for b in bodies]
        if len(set(opens)) < 5:
            raise SystemExit(f"{c['case_id']}: duplicate openings {opens}")
        expl = []
        for i, body in enumerate(bodies):
            if "—" in body:
                raise SystemExit(f"{c['case_id']} {chr(65 + i)}: em dash in body")
            expl.append(wrap(body, bool(c["answer_key"][i])))
        c["tactical_explanations"] = expl

    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
    print(
        f"Wrote explanations for {ids[0]} .. {ids[-1]} ({len(ids)} cases) "
        f"slice[{SLICE.start}:{SLICE.stop}]"
    )


if __name__ == "__main__":
    main()
