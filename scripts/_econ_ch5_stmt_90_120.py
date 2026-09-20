#!/usr/bin/env python3
"""Hand-authored statement-only tactical_explanations for ch5 cases [90:120]."""
from __future__ import annotations

import json
import re
from pathlib import Path

PATH = Path("/workspace/src/data/economics-cases-ch5-subtopics.json")
SLICE = slice(90, 120)
CLOSER = re.compile(r"\s*So the statement is (True|False)\.?\s*$", re.I)


def wrap(body: str, truth: bool) -> str:
    body = body.replace("\u2014", ", ").replace("\u2013", "-").strip()
    v = "True" if truth else "False"
    return f"{body}\n\nSo the statement is {v}."


# Per case: list of 5 body strings (no closer). Truth taken from answer_key.
BODIES: dict[str, list[str]] = {}

BODIES["CASE 5.5.27"] = [
    # A T compact
    "Absolute market share shows how large one firm's sales are relative to the whole market. Managers track it to judge their own weight, and investors use it when sizing a company's industry footprint. That dual usefulness is exactly what the statement claims.",
    # B T standard
    "A single absolute percentage names only the focal firm's slice of total sales. It does not list rival percentages, nor does it show whether competitors are gaining or losing ground. Two firms can share the same absolute figure while facing very different rival sets. Without further comparison, absolute share is a thin window on competitive performance.",
    # C T expanded
    "Relative market share is built as a head-to-head ratio: the firm's own share against the largest competitor's share. The point is competitive context, not another percentage of the whole market. If the leader is far ahead, relative share falls below one; if the firm leads, the ratio rises above one. That comparison is the definition the chapter uses, and the statement states it cleanly. Absolute figures alone cannot supply that rivalry reading.",
    # D T standard
    "The usual formula divides the firm's market share by the largest rival's market share. Numerator and denominator are both share figures, so the result is a ratio. Fifteen per cent versus thirty per cent yields 0.5 under that rule. The statement restates that division correctly.",
    # E T compact
    "Fifteen divided by thirty equals one half. With those absolute percentages, relative market share is therefore 0.5. The arithmetic matches the chapter's relative-share definition.",
]

BODIES["CASE 5.5.28"] = [
    # A F compact
    "Influencers shape preferences or specifications without necessarily paying. Parents, technical advisers, and users can steer a choice while someone else settles the invoice. Forcing influencer and payer to be identical invents a rule customer analysis does not use.",
    # B T standard
    "Absolute share reports only the firm's own percentage of market sales. Relative share places that figure against the leader, which reveals whether the firm trails, matches, or outpaces the strongest rival. That competitive framing is information absolute share cannot deliver alone.",
    # C F expanded
    "A business-to-business market sells to other firms: components to assemblers, adhesives to factories, fleets to logistics operators. Advertising on social media to the general public describes a consumer-facing channel, not the B2B buyer type. Mixing the communication medium with the customer classification invents a false definition. B2B is about who buys, not about which ad platform is used.",
    # D T standard
    "Market volume counts sales already made by firms active today. Market potential adds room from people or firms who could buy but have not yet. When that unused demand exists, potential sits above volume. The statement names that gap correctly.",
    # E F compact
    "Secondary research reuses existing sources such as published statistics or trade reports. Personal interviews with every customer would be primary fieldwork, and secondary work does not require that exhaustive interviewing.",
]

BODIES["CASE 5.5.29"] = [
    # A T standard
    "Sales volume is what the firm sells now. Sales potential can sit higher when customers can be won from rivals or when the whole market expands. Those achievable gains are part of potential, so potential may exceed current volume.",
    # B F compact
    "An annual report published last year is an existing document. Reusing it is secondary research. Primary research means collecting new data for the current question, not recycling last year's published pages.",
    # C F expanded
    "Market research looks outward at customers, competitors, and industry conditions as well as supporting internal decisions. Limiting it to internal accounting would erase competitor tracking, segment sizing, and buyer studies. Industry development information is squarely inside the research scope. The claim that market research ignores industry conditions is therefore false.",
    # D F standard
    "Winning customers from rivals is a standard route to raising one firm's sales above today's volume. Those gains from competitors sit inside sales potential, not outside it. Excluding them contradicts the chapter's sales-potential breakdown.",
    # E F compact
    "A share of rising market potential is listed as a sales-potential component alongside current volume and gains from rivals. Excluding that growth share misstates how potential is built for one firm.",
]

BODIES["CASE 5.5.30"] = [
    # A F compact
    "Absolute share is one percentage for the focal firm. It does not itemise every smaller rival's performance or give a full competitive scorecard. Detail on each competitor requires further data.",
    # B F standard
    "Absolute share names only the firm's own slice. It does not identify each rival by name or percentage. Relative share against the largest competitor supplies competitive context absolute figures lack, so calling relative share unnecessary is wrong.",
    # C T expanded
    "Sales potential asks how much the firm could sell if it captures more of the opportunity set. One concrete path is taking buyers who currently purchase from competitors. Those gains raise potential above present sales volume without requiring the whole market to grow first. Including rival-customer wins in potential matches the chapter's components. The statement is therefore correct.",
    # D F standard
    "Market volume aggregates sales of all firms active in the product market. Restricting volume to the focal business alone confuses volume with that firm's sales volume. Competitors' sales belong in the market total.",
    # E F compact
    "When market potential exceeds market volume, room remains to grow. Sales potential need not equal current sales volume in that setting; the two concepts stay distinct.",
]

BODIES["CASE 5.5.31"] = [
    # A T compact
    "If overall market potential expands, a firm may claim part of that extra room as its own sales potential. That growth share is a recognised component alongside current volume and gains from rivals.",
    # B T standard
    "Market volume is the sum of sales already realised by every firm currently selling in the market. It is an industry-wide total, not one company's invoice book. Recording all active firms' sales is the definition the statement uses.",
    # C T expanded
    "Industry-development research tracks how a sector is evolving: growth pockets, new applications, competitive intensity, and demand shifts. Managers use those signals to judge where their firm stands and where it might go next. Without that outward scan, position and prospect assessments rest on internal numbers alone. Market research on industry development therefore supports evaluation of both present standing and future outlook, exactly as claimed.",
    # D T standard
    "Brand market share equals brand sales divided by total category sales. Costs or capacity do not replace sales in that ratio. The statement states the sales-over-category rule correctly.",
    # E T compact
    "Value market size follows euro sales. A rise from 57.5 million to 59.7 million euros is an increase in that value measure. The statement reports the movement accurately.",
]

BODIES["CASE 5.5.32"] = [
    # A F compact
    "An institute running questionnaires for a client is collecting new data for that client's brief. That commissioned fieldwork is primary research. External administration does not turn primary collection into secondary reuse.",
    # B T standard
    "Market size in value terms tracks total euro sales. When packaging sales move from 420 million to 450 million euros, the value measure of market size has risen. The statement records that increase correctly.",
    # C T expanded
    "The same value logic applies in services markets. Logistics sales climbing from 310 million to 325 million euros enlarge the euro measure of market size even if physical tonnes are not the metric in use. Value market size follows money totals. Reporting that rise as an increase in market size measured in value matches the chapter's quantity-versus-value distinction and keeps the example inside the correct unit.",
    # D T standard
    "Eighty divided by four hundred equals 0.2, or 20 per cent. Absolute market share is firm sales over total market sales, so the arithmetic in the statement is right.",
    # E F compact
    "Free secondary sources are typically general statistics or published reports. They are not custom-built for each small firm's product line. Claiming they are always tailored overstates what free secondary data provide.",
]

BODIES["CASE 5.5.33"] = [
    # A F compact
    "Primary studies can be expensive to design, field, and analyse. The chapter does not claim every small business can afford that cost. Affordability for all small firms is an invented guarantee.",
    # B T standard
    "Forty-five million divided by three hundred million equals 0.15, or 15 per cent absolute share. Firm sales over total market sales produce that percentage. The statement's arithmetic is correct.",
    # C F expanded
    "Customer analysis asks who buys, what they use products for, where and when they purchase, and why they choose one offer. Those questions sit inside market research, not beside it as an optional extra. Dropping customer analysis would leave managers without buyer insight while still calling the work market research. The claim that customer analysis is unrelated is therefore false.",
    # D F standard
    "Where-customer findings can reveal weak showrooms, thin retail coverage, or unused online paths. Spotting those gaps can push managers toward alternative channels. Channels are not frozen forever; research exists partly to challenge them.",
    # E F compact
    "When-customer timing can show seasonal peaks and troughs. Those patterns support charging differently across the year. Denying any link to price differentiation contradicts that use of timing data.",
]

BODIES["CASE 5.5.34"] = [
    # A T compact
    "Twelve million over forty-eight million equals one quarter. Absolute share is therefore 25 per cent. The statement's ratio matches the definition.",
    # B F standard
    "What-customer research on preferred use shows how buyers actually deploy a product. That insight guides feature changes, packaging, and positioning so the offer fits real use. Saying preferred-use information cannot guide improvement erases a core product-development input.",
    # C F expanded
    "Market research covers people and firms who already buy and those who might buy if needs are met. Prospective customers belong in that scope because untapped demand shapes market potential and sales plans. Excluding them would shrink research to a rear-view mirror of past purchasers only. The statement's exclusion is therefore wrong.",
    # D F standard
    "Market share uses sales in the numerator, not the brand's cost base. Cost figures measure expense structure, not competitive slice of category sales. Replacing sales with costs invents a false formula.",
    # E F compact
    "The denominator is total market sales, not the firm's production capacity. Capacity describes how much could be made; share describes how much of market sales the firm already accounts for.",
]

BODIES["CASE 5.5.35"] = [
    # A T compact
    "Seven million divided by one hundred forty million equals 0.05. Absolute market share is therefore 5 per cent. The calculation matches the chapter rule.",
    # B F standard
    "A relative share of 1.5 is a ratio against the leader's share, not a claim that the firm holds 1.5 per cent of the whole market. Confusing the ratio with an absolute percentage misreads the measure.",
    # C F expanded
    "Relative share of 0.5 means the firm's percentage is half the largest competitor's percentage. It says nothing about withdrawing from half of a geographic territory. Geography and exit decisions are separate from the relative-share ratio. Treating 0.5 as a half-market withdrawal invents a meaning the metric does not carry.",
    # D T standard
    "Fifteen per cent divided by thirty per cent equals 0.5. That is the relative market share under the leader-comparison formula. The statement's numbers line up with the definition.",
    # E T compact
    "Percentage market share expresses one firm's sales as a portion of all market sales. That is the ordinary absolute-share reading in percentage form.",
]

BODIES["CASE 5.5.36"] = [
    # A T standard
    "Absolute market share summarises how large a firm's sales are inside the industry total. Investors often inspect that figure when judging scale and competitive weight. Using absolute share in that assessment matches ordinary investor practice described in the chapter.",
    # B F compact
    "Willingness to pay is a classic primary-research question. Governments do not uniquely set every price, and primary work routinely probes what buyers would pay. Banning that topic invents a false limit.",
    # C F expanded
    "Secondary sources can sketch market size or industry trends, yet they rarely replace who-what-where-when-why customer analysis tailored to the firm. Managers still need buyer insight for channels, timing, motives, and product use. Claiming secondary research always substitutes for customer analysis overstates secondary reach and understates the need for direct customer work.",
    # D F standard
    "In B2B markets the customers are other businesses, even when those businesses \"consume\" inputs in production. Labeling them consumers confuses household final buyers with organisational purchasers. B2B classification follows the buyer type, not the everyday verb consume.",
    # E T compact
    "Relative share below one means the firm's percentage trails the largest competitor's percentage. The firm is smaller than the leader on that ratio scale.",
]

BODIES["CASE 5.5.37"] = [
    # A F compact
    "Supermarket household shoppers are final consumers in a B2C setting. Calling them business customers in B2B markets mislabels the buyer type. B2B customers are other firms, not grocery households.",
    # B T standard
    "When relative share exceeds one, the firm's percentage share is larger than the leader's. That reading is the direct meaning of a ratio above unity against the largest competitor.",
    # C T expanded
    "Customer analysis is organised around who the buyers are, what they do with the product, where and when they purchase, and why they choose one offer. Those five strands sit together inside market research rather than as isolated hobbies. Integrating them gives a usable picture of demand for planning and positioning. The statement correctly treats that integration as part of market research.",
    # D F standard
    "If every firm's sales rise, total market sales rise. Market size measured by those sales increases, not decreases. Simultaneous growth enlarges the pie; it does not shrink market size.",
    # E F compact
    "Two firms each at twenty per cent yield a relative share of one against each other, not two. Twenty divided by twenty equals one under the relative-share formula.",
]

BODIES["CASE 5.5.38"] = [
    # A F compact
    "Newly commissioned empirical studies collect fresh data for a business brief. That makes them primary. Calling them secondary because they are tailored reverses the primary-secondary split.",
    # B F standard
    "Published forecasts that a firm reuses without new collection are secondary sources. Informing strategy does not convert reuse into primary fieldwork. Primary status requires new gathering for the current question.",
    # C T expanded
    "Primary research can be designed to test whether men and women differ in product preferences. Surveys, interviews, or experiments collect new answers on that specific comparison. The design can target gender differences without relying only on old published tables. That tailored collection is a legitimate primary brief, and the statement describes it accurately.",
    # D F standard
    "Market research data include customer behaviour, competitor moves, and industry conditions, not merely the firm's own ledgers. Limiting coverage to internal accounts empties the research idea of its outward purpose.",
    # E T compact
    "Trade-association secondary data often report sector totals without naming each buyer's account. Aggregate output figures can still inform market sizing even when individual accounts are absent.",
]

BODIES["CASE 5.5.39"] = [
    # A T compact
    "Where-customer work maps purchase locations such as retail, wholesale, or online. Weak traffic or thin coverage in those channels can surface as channel weakness. Spotting that pattern is a direct use of where-analysis.",
    # B T standard
    "When-customer patterns reveal predictable peaks before they arrive. Production can be scheduled earlier so stock and capacity meet the surge. Timing insight therefore supports advance scheduling, not only after-the-fact reporting.",
    # C T expanded
    "Why-customer research digs into motives: price, warranty, local supply, brand trust, or feature fit. Those motives help explain why buyers switch between close rivals in the same category. Substitution is not random when a decisive preference is known. Motive insight therefore clarifies competitive switching inside a product class, which is what the statement asserts.",
    # D T standard
    "Market research is not limited to today's buyers. Prospective buyers who might purchase if needs are met belong in the data picture because they shape potential demand. Describing those prospects is part of research scope.",
    # E F compact
    "Where customers buy is a core customer-analysis question. Producers do not monopolise channel choice; buyers' purchase places still matter and are studied.",
]

BODIES["CASE 5.5.40"] = [
    # A T standard
    "Market share places one firm's sales over the sum of sales of all businesses in the product market. That total forms the denominator. Without all-firm sales, the percentage cannot be computed as defined.",
    # B F compact
    "When-customer analysis studies when purchases occur, such as seasons or dayparts. It does not ask when the firm was founded. Founding dates belong to company history, not purchase timing.",
    # C F expanded
    "Why-customer analysis asks why buyers choose a product: quality, price, service, warranty, or other motives that decide a purchase. It is not a mission statement about why the firm exists as a legal entity. Confusing buyer motives with corporate purpose swaps the research object entirely. The chapter ties why-questions to purchase reasons and competitive preference, so the statement is false.",
    # D F standard
    "Absolute share puts firm sales in the numerator and market volume (total market sales) in the denominator. Reversing those positions invents the wrong fraction. Market volume is not the numerator.",
    # E F compact
    "Relative share divides by the largest competitor's share, not by total market sales. Using total market sales as the denominator describes absolute share logic, not relative share.",
]

BODIES["CASE 5.5.41"] = [
    # A T compact
    "Absolute market share places the firm's own sales in the numerator and total market sales in the denominator. Own sales as the top of the fraction is the standard construction.",
    # B F standard
    "New applications typically expand possible demand, which raises market potential relative to current volume. Potential falling below volume whenever new uses appear reverses the usual relationship. Emerging uses enlarge the opportunity set; they do not push potential under volume.",
    # C T expanded
    "Relative market share is a ratio whose denominator is the market leader's share. The firm's share sits in the numerator so the result shows standing against the strongest rival. Using total market sales instead would recreate absolute share. Keeping the leader's share in the denominator is what makes the measure relative, and the statement names that correctly.",
    # D T standard
    "Customers not yet buying are part of market potential beyond current market volume. That unused room is why potential can exceed volume. The statement includes those non-purchasers accurately.",
    # E T compact
    "Sales volume is the firm's own current sales in the market. It is a single-business figure, not the industry total that market volume records.",
]

BODIES["CASE 5.5.42"] = [
    # A F compact
    "Sales potential can rise above sales volume when rival customers can still be won. Capping potential at today's volume denies that competitive-gain path. The chapter treats gains from competitors as a potential component.",
    # B F standard
    "Summarising primary interview findings in an internal memo does not change the data's origin. The interviews remain primary collection; the memo is only a reporting format. Relabeling them secondary because managers read a summary invents a false conversion rule.",
    # C F expanded
    "A trade association survey completed last year is an existing published source. A member reading it this year is reusing secondary information, not conducting primary fieldwork. Primary status would require new collection for the member's current brief. Calendar lag and membership do not turn last year's survey into primary data for this year's reader.",
    # D T standard
    "Gains from competitors are one listed route to lifting sales potential above current volume. Winning those buyers enlarges what the firm could sell without waiting for market-wide growth alone.",
    # E T compact
    "When market potential rises, a firm may claim a share of that expansion as sales potential. That growth share is an accepted component of potential.",
]

BODIES["CASE 5.5.43"] = [
    # A T compact
    "Government industry statistics already exist and can be reused without new fieldwork. That reuse makes them free secondary market information when they fit the learning need.",
    # B T standard
    "Personal interviews allow follow-up questions that probe motives in depth. That flexibility supports why-customer inquiry in primary studies. Surveys alone may miss those layered answers; interviews are built for them.",
    # C T expanded
    "Online surveys can reach large samples quickly, yet the key classification question is whether the data are newly collected for the firm's purpose. Fresh online collection remains primary even at scale. Scale does not force a secondary label. The statement correctly keeps newly gathered online surveys inside primary research.",
    # D T standard
    "Electronic questionnaires still gather new answers for a research brief. Administration mode does not redefine primary as secondary. Thousands of electronic responses can remain primary programmes.",
    # E T compact
    "A B2B components supplier studies other firms that buy for fleets or production, not household final consumers. That buyer focus matches business-to-business research.",
]

BODIES["CASE 5.5.44"] = [
    # A T compact
    "A B2C retailer sells to household shoppers as final consumers. Researching that group is the natural customer focus for the retailer's market work.",
    # B T standard
    "In business purchases, an influencer may recommend specifications while a formal buyer later signs. Influence and payment roles can split. The statement allows that separation correctly.",
    # C F expanded
    "Fifteen per cent market share means fifteen of every hundred euros of market sales, not fifteen of every hundred euros of the firm's own revenue. Own revenue is the firm's sales total; market share compares those sales with the industry total. Treating share as a fraction of own revenue invents a circular measure that never compares with rivals. The claim is therefore false.",
    # D T standard
    "What-customer research asks how products are used. For office furniture, home-office versus corporate use is a natural preferred-use contrast that can guide design and marketing.",
    # E T compact
    "Where-customer data can compare showroom and e-commerce purchases for one brand. That location contrast is exactly what where-analysis is for.",
]

BODIES["CASE 5.5.45"] = [
    # A T compact
    "Heating equipment often sees replacement demand peak in winter. When-customer research can detect that seasonal surge and feed planning. Winter peaks are a classic timing finding.",
    # B T standard
    "Why-customer work may show that warranty terms outweigh list price for some buyers. That motive ranking guides offers and communication better than assuming price alone decides. Highlighting warranty as decisive matches how motive research is used.",
    # C T expanded
    "Market size can be measured in physical units such as tonnes sold across all firms. The volume idea is the same as in euro measures: total activity in the market, only the unit changes. Quantity market size therefore applies the volume concept with tonnes or pieces instead of money. The statement states that unit switch correctly without inventing a different economic idea.",
    # D T standard
    "Euro sales across the market measure size in value terms. That monetary total is the same volume concept expressed in money units. The statement pairs value units with the volume idea correctly.",
    # E F compact
    "Fifteen divided by thirty equals 0.5, not two. Relative share is firm share over leader share, so the firm trailing at half the leader's percentage has relative share 0.5.",
]

BODIES["CASE 5.5.46"] = [
    # A F compact
    "Twenty divided by ten equals two, not 0.5. A firm with twice the leader's percentage has relative share of 2. The statement reverses the arithmetic.",
    # B T standard
    "Fifteen per cent absolute share means fifteen of every hundred euros of market sales belong to the firm. That reading is the ordinary percentage interpretation of absolute share.",
    # C F expanded
    "Industrial buyers purchasing components for factory lines are organisational customers in a B2B market. They buy inputs for production, not final goods for household consumption. B2C classification applies to final household consumers, not to factories assembling with purchased parts. Applying B2C here mislabels both the buyer type and the market form. The statement is therefore false.",
    # D T standard
    "Relative share of 0.5 means the firm's percentage is half the market leader's percentage. Half the leader's share is exactly what the ratio records.",
    # E F compact
    "Individuals buying clothing for personal use are B2C shoppers. Calling that pattern B2B misclassifies household retail demand as business purchasing.",
]

BODIES["CASE 5.5.47"] = [
    # A T compact
    "Relative share of 1.5 means the firm's percentage is one and a half times the leader's percentage. The ratio multiplies the leader's share by 1.5 for the comparison reading.",
    # B T standard
    "Customer analysis alone does not exhaust industry position work. Research on competitors and competitive structure complements buyer insight when managers judge where they stand. Both strands belong in market research for positioning.",
    # C F expanded
    "Influencers can shape a purchase without holding legal title to the product. Technical advisers, users, and children may steer specifications or brand choice while ownership and payment sit with someone else. Requiring title before influence can matter invents a property rule the chapter does not use for customer analysis. Influence is about decision impact, not ownership paperwork or invoice names.",
    # D T standard
    "Secondary forecasts can outline segment growth before a firm spends on primary interviews. Using published growth rates first is a normal sequencing of secondary then primary work.",
    # E F compact
    "What-customer research studies how customers use goods, not what shareholders earn. Shareholder returns belong to finance reporting, not preferred-use analysis.",
]

BODIES["CASE 5.5.48"] = [
    # A T compact
    "Asking what buyers would pay in a primary study helps set price bands that match demand for a launch. Willingness-to-pay answers are practical inputs, not decorative survey filler.",
    # B F standard
    "Where-customer research maps where purchases occur: shops, dealers, online carts. It does not study mining locations for raw materials. Confusing purchase place with upstream extraction misnames the research object.",
    # C T expanded
    "If where-analysis shows buyers already gather online while the firm leans on weak physical outlets, managers can expand the underused digital channel. Purchase-location evidence therefore can trigger channel investment, not only describe the status quo. Alternative-channel moves are a practical outcome of where-customer findings, which is what the statement asserts.",
    # D T standard
    "Peaks in when-customer data can justify higher prices in busy weeks and softer prices in quiet ones. Timing insight supports calendar-based price differentiation.",
    # E T compact
    "Why-customer motives identify what to stress in advertising. If warranty or local supply decides, campaigns can lead with that motive rather than a weaker claim.",
]

BODIES["CASE 5.5.49"] = [
    # A F compact
    "Market size for a category sums sales across firms, not only the leader's sales. Using the leader alone understates the market and invents a wrong size measure.",
    # B F standard
    "Absolute market share needs total market sales in the denominator. Without that total, the percentage cannot be computed as defined. Claiming share can be computed without all-firm sales skips a required input.",
    # C F expanded
    "Downloading a government file does not turn secondary published data into primary research. The employee is reusing an existing source, not collecting new observations. Primary status depends on new gathering for the firm's question, not on who clicks the download button. The statement's conversion rule is therefore false.",
    # D F standard
    "Sample size does not redefine primary as secondary. A large newly collected sample remains primary. Crossing one thousand respondents invents a false threshold for reclassification.",
    # E T compact
    "Market volume adds current sales of all competing firms offering the product. That industry sum is the volume definition the statement uses.",
]

BODIES["CASE 5.5.50"] = [
    # A T compact
    "When additional buyers remain available, sales potential can sit above today's sales volume. Untapped capture is exactly why potential and volume can diverge for one firm.",
    # B F standard
    "Customer analysis includes prospective buyers who might purchase if needs are met, not only past purchasers. Excluding prospects would ignore a key source of market potential. The statement's restriction is too narrow.",
    # C F expanded
    "When-customer timing data often reveal seasonal swings in demand across months or weeks. Production planning uses those swings to build stock early, book overtime, or scale capacity before the peak arrives. Claiming seasonal fluctuations cannot inform planning contradicts a standard operational use of purchase-timing analysis. Timing research exists partly to feed operations calendars, not only to describe past sales after the fact.",
    # D F standard
    "Motive research can reshape offers and messaging so more buyers choose the firm, which can raise market share. Share is not fixed by regulation in the chapter's market setting. Motives therefore can affect share strategies.",
    # E F compact
    "Gains from competitors belong to sales potential for the firm that might win them. Market volume already counts those sales under the rivals who currently hold them.",
]

BODIES["CASE 5.5.51"] = [
    # A T standard
    "Non-buyers who could still enter the category leave demand beyond current sales. Market potential therefore can exceed market volume when that untapped demand remains. The statement names the gap correctly.",
    # B T compact
    "Absolute share is one business's sales as a percentage of total market sales. That percentage reading is the ordinary absolute-share expression.",
    # C F expanded
    "A share of growth in market potential is treated as part of sales potential, not as part of current market volume. Volume records sales already made; potential growth share is forward-looking opportunity for one firm. Parking that growth share inside volume mixes realised totals with prospective gains. The statement misassigns the component.",
    # D T standard
    "Relative share is a ratio of shares, not another direct percentage of total market sales. Expressing it as a ratio distinguishes it from absolute percentage share.",
    # E T compact
    "Institutes can run questionnaire fieldwork for clients. That commissioned collection remains primary data gathering even though an external body administers it.",
]

BODIES["CASE 5.5.52"] = [
    # A T compact
    "Trade-body reports often sketch market size from existing industry data. Firms reuse those secondary overviews before computing their own share from internal sales against the total.",
    # B F standard
    "Investors do examine absolute market share when judging how large a firm is inside its industry. Relative share adds competitive context, but it does not erase absolute share from investor reading. Claiming investors ignore absolute share is too strong.",
    # C F expanded
    "Relative share compares the firm with its largest competitor, not the smallest rival in the field. The leader comparison is the whole point of the measure: how the firm stands against the strongest player. Using the smallest rival would invent a different ratio and usually inflate the firm's standing. Annual reports and textbooks keep the largest competitor in the denominator for that reason. The statement's smallest-competitor rule therefore fails.",
    # D T standard
    "Children can steer grocery choices while adults pay at checkout. That split illustrates influencer roles in customer analysis without requiring children to be the legal buyers.",
    # E T compact
    "In industrial markets, users of components may differ from managers who sign contracts. User and buyer roles can separate in B2B purchasing.",
]

BODIES["CASE 5.5.53"] = [
    # A F compact
    "Postal and online questionnaires both gather new answers when run for a research brief. Delivery mode does not make post secondary and online primary. Both can be primary collection methods.",
    # B F standard
    "Reading a competitor's published review reuses an existing source. That is secondary information for the reader's firm, not primary data creation. Publication by a rival does not convert reading into primary fieldwork.",
    # C T expanded
    "What-customer research on preferred use shows how buyers actually deploy a product. Matching features to those uses reduces the gap between design and need. Product teams can cut unused extras and strengthen valued functions. Preferred-use insight therefore lowers mismatch risk, which is the practical payoff the statement describes.",
    # D F standard
    "Market research routinely covers competition and industry conditions alongside customers. Rivals may withhold private data, yet published signals, share figures, and observable moves still inform competitive analysis. Excluding competition entirely is false.",
    # E F compact
    "Children can influence without being legal buyers. Parents or other adults often complete payment in B2C settings. Influence does not force legal buyer status.",
]

BODIES["CASE 5.5.54"] = [
    # A T compact
    "Weak showroom traffic from where-research can push managers toward stronger dealer support. Channel findings are meant to trigger remedies, not only to record empty floors.",
    # B T standard
    "When-research that flags predictable summer demand lets firms build inventory earlier. Advance stock preparation is a direct operational use of timing patterns.",
    # C T expanded
    "Why-research that finds a preference for local suppliers can reshape regional messages, partner lists, and service promises. Motive insight moves from abstract preference into concrete marketing choices. Regional campaigns that stress local availability follow naturally from that finding. The statement links why-insight to regional messaging correctly.",
    # D T standard
    "A printed-circuit-board supplier can commission a tailored questionnaire before an updated line launches. That new collection is primary research aimed at positioning. Custom questions beat generic guesses about buyer needs.",
    # E T compact
    "Published trade statistics on printed circuit boards are existing sources. Reusing them to estimate total industry sales is secondary market information.",
]

BODIES["CASE 5.5.55"] = [
    # A F compact
    "In B2B markets, users, influencers, and formal buyers can be different people. One contract per person is not required, and user need not equal buyer. Forcing coincidence invents a false rule.",
    # B F standard
    "Customers do reveal purchase places through surveys, sales data, and channel analytics. Where-research exists precisely to detect weak channels. Claiming weakness can never be detected denies that evidence path.",
    # C T expanded
    "Customer analysis in printed circuit boards can ask where buyers source boards, when demand peaks for projects, and why one supplier is preferred. Those where-when-why strands fit the same research toolkit used in other markets. Segment-specific wording does not change the underlying customer-analysis logic. The statement correctly applies that toolkit to the PCB setting.",
    # D T standard
    "Forty million over two hundred million equals 0.2, or 20 per cent absolute share. Firm sales divided by market sales produce that percentage. The arithmetic is correct.",
    # E F compact
    "When-customer patterns across the year are a natural basis for price differentiation by season or peak weeks. Claiming no link ignores that timing use.",
]

BODIES["CASE 5.5.56"] = [
    # A T compact
    "Twenty per cent divided by forty per cent equals 0.5. In printed circuit boards, that relative market share follows from absolute share against the leading rival. The ratio matches the definition.",
    # B T standard
    "Buyers not yet served can still enter the printed-circuit-board category. Their possible demand lifts market potential above current market volume. Untapped entrants are the reason potential can exceed volume here.",
    # C T expanded
    "One PCB firm's sales potential can rise above its present sales volume by winning customers from rivals and by claiming part of market growth. Those components sit inside sales potential in the chapter's breakdown. Current volume alone understates what the firm could sell if competitive gains and expansion materialise. The statement therefore describes a realistic potential above volume.",
    # D F standard
    "Market volume plus potential customers does not equal one firm's sales volume. Sales volume is the firm's own current sales; market volume is the industry total; potential customers belong to market potential. Adding volume to prospects does not produce a single firm's sales figure.",
    # E T compact
    "Telephone interviews with adhesives buyers before a launch collect new answers for positioning. That primary fieldwork can improve how the updated line is aimed at real buyer needs.",
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
