#!/usr/bin/env python3
"""Live-teacher, book-grounded rewrite for economics CASE 5.5.* and 5.6.* only.

Grounded in Fuhrmann 5.5 Market research and 5.6 Market segmentation / targeting.
Does not change statements, answer_key, or other subsections.
"""
from __future__ import annotations

import hashlib
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "src/data/economics-cases-ch5-subtopics.json"
OUT_JSON = ROOT / "scripts/_econ_ch55_56_book_align_rewrites.json"

CLOSER_RE = re.compile(r"\s*So the statement is (True|False)\.?\s*$", re.I)


def seed(*parts: str) -> int:
    return int(hashlib.md5("|".join(parts).encode()).hexdigest()[:8], 16)


def pick(case_id: str, letter: str, tag: str, options: list[str]) -> str:
    return options[seed(case_id, letter, tag) % len(options)]


def closer(is_true: bool) -> str:
    return "So the statement is True." if is_true else "So the statement is False."


def body_of(e: str) -> str:
    return CLOSER_RE.sub("", e).strip()


def detect(statement: str, sub: str) -> str:
    s = statement.lower()

    if sub == "5.6":
        # Criteria claims often name a demographic/psychographic group — criteria win first
        if re.search(r"\baccessible\b", s) and ("measurable" in s or "channel" in s or "whenever" in s or "when" in s):
            return "crit_acc"
        if re.search(r"\bdurable\b", s) or ("never change" in s and "segment" in s):
            return "crit_dur"
        if re.search(r"\bprofitab", s) or "automatically profitable" in s:
            return "crit_prof"
        if re.search(r"\bmeasurable\b", s) and "demographic" not in s and "geographic" not in s and "psychographic" not in s and "behaviour" not in s and "behavior" not in s:
            return "crit_meas"
        if "marketing mix" in s:
            return "mix_after"
        if "economies of scale" in s or "cost per unit" in s or "total output" in s:
            return "mass_scale"
        if "inflexib" in s:
            return "mass_flex"
        if "mass marketing" in s or ("same product" in s and "all customer" in s) or (
            "promoted" in s and "same way" in s
        ):
            return "mass"
        if "niche" in s:
            return "niche"
        if "segment marketing" in s or ("different products" in s and "segment" in s):
            return "segmkt"
        if "position" in s:
            return "position"
        if "geographic" in s:
            return "geo"
        if "demographic" in s:
            return "demo"
        if "psychographic" in s:
            return "psycho"
        if "behaviour" in s or "behavior" in s:
            return "behav"
        if "occasional" in s or "heavy use" in s:
            return "behav"
        if "homogeneous" in s or "identical" in s or "segmentation divides" in s:
            return "seg_def"
        if "target market" in s:
            return "target_market"
        if "targeting" in s or "attractiveness" in s or ("select" in s and "segment" in s):
            return "target"
        if "employed" in s or "retired" in s or "self-employed" in s:
            return "demo"
        if "lifestyle" in s or ("values" in s and "segment" in s) or "second-hand" in s:
            return "psycho"
        if "measurable" in s:
            return "crit_meas"
        if "accessible" in s:
            return "crit_acc"
        if "durable" in s:
            return "crit_dur"
        if "profitab" in s:
            return "crit_prof"
        return "seg_gen"

    # ---- 5.5: order matters (specific before loose keywords) ----
    if "relative market share" in s or ("relative" in s and "share" in s) or (
        "largest competitor" in s
    ):
        return "rel_share"
    if "absolute market share" in s or ("absolute" in s and "share" in s):
        return "abs_share"
    if "market share" in s:
        return "mshare"
    if "market potential" in s or "sales potential" in s or (
        "potential" in s and ("volume" in s or "exceed" in s or "gains from" in s or "increase" in s)
    ):
        return "potential"
    if (
        "market size" in s
        or "market volume" in s
        or ("total sales" in s and ("all" in s or "industry" in s or "market" in s))
        or ("value" in s and "quantity" in s)
        or "pieces sold" in s
        or ("expressed as" in s and ("euro" in s or "quantity" in s or "value" in s))
    ):
        return "msize"
    if any(k in s for k in ("pcb", "substrate", "electronics market", "wearable", "iot", "aim")):
        return "ats_measure"

    # Primary / secondary before buyer/online loose matches
    if "secondary" in s or (
        any(k in s for k in ("government", "association", "existing research", "free of charge", "already been done", "published"))
        and "primary" not in s
    ):
        return "secondary"
    if "primary" in s or any(
        k in s
        for k in (
            "questionnaire",
            "personal interview",
            "telephone interview",
            "online survey",
            "market research institute",
            "empirical study",
            "empirical studies",
        )
    ):
        return "primary"

    if "customer analysis" in s:
        return "cust_overview"
    if any(k in s for k in ("influencer", "children", "parents", "buyer and the user", "user of a product", "buyer", "user")) and any(
        k in s for k in ("not the same", "distinct", "influence", "payment", "who")
    ):
        return "cust_who"
    if "b2b" in s or "b2c" in s or "business-to-business" in s or "business-to-consumer" in s:
        return "cust_who"
    if "who its" in s or "who the customers" in s or "current and potential customers" in s:
        return "cust_who"
    if "what the customers do" in s or "preferred use" in s or ("improve" in s and "product" in s):
        return "cust_what"
    if "where the customers" in s or "distribution channel" in s or (
        "channel" in s and "survey" not in s
    ):
        return "cust_where"
    if "when the customers" in s or "season" in s or (
        "timing" in s and "interview" not in s
    ) or "price differentiation over the year" in s or "production planning" in s:
        return "cust_when"
    if "why customers" in s or "motive" in s or ("prefer" in s and "product" in s):
        return "cust_why"
    if "prospective" in s or "competition" in s or "industry in general" in s:
        return "research_scope"
    if "small business" in s and "afford" in s:
        return "primary"
    return "research_gen"


# Teaching paragraphs: (lead, support, false_lead, false_support)
# Used with statement-specific glue.

BOOK = {
    "primary": (
        "Primary market research collects new empirical evidence for the firm’s own questions — questionnaires, personal or telephone interviews, online surveys, or a study run by a market-research institute.",
        "Because the brief is tailored, Steve and Tina can ask which machines people want, what they will pay, and how much support they need. That fit is also why primary work is costly: administering hundreds of forms, running interviews, building a survey, and interpreting results all burn cash, so small shops often cannot fund a full programme.",
        "Primary research means new fieldwork for this firm’s brief. Reusing finished government tables or association reports without collecting fresh data is secondary research, not primary.",
        "A brand-new questionnaire written only for the commissioning business is the opposite of a secondary source. Mixing those labels collapses the chapter’s two-source map.",
    ),
    "secondary": (
        "Secondary information reuses research someone else already produced — government agencies, trade or industry associations, or other firms’ published reports.",
        "It is often free or cheap and handy for sizing a market, yet usually too general to answer a shop’s exact pricing or support questions. Tina and Steve might skim a free laptop-ownership brief and still need primary interviews for willingness to pay.",
        "Secondary sources do not begin with a bespoke questionnaire programme designed solely for one commissioning business. That fresh collection is primary research.",
        "If the claim treats published statistics as a tailored empirical study, it swaps the source types the chapter keeps apart.",
    ),
    "cust_overview": (
        "Customer analysis is a core strand of market research: who buys, what they do with the product, where and when they buy, and why they choose one offer over another.",
        "Those five angles feed product improvement, channel choice, seasonal planning, and motive work that can raise share.",
        "Customer analysis is not a vague mood check. Skipping who/what/where/when/why leaves product and channel decisions guessing.",
        "A single demographic label without use, channel, timing, or motive still leaves the research map incomplete.",
    ),
    "cust_who": (
        "Who the customers are includes whether the market is B2C (households) or B2B (other firms), and whether buyer, user, and influencer are the same person.",
        "Children may shape the choice while parents pay. Steve and Tina sell both to home users and to small offices — the same machine can sit in either lane depending on who invoices.",
        "Buyer and user need not be identical, and an influencer can steer the purchase without writing the cheque.",
        "Treating those roles as one person erases the chapter’s warning about influence without payment.",
    ),
    "cust_what": (
        "Learning what customers do with the product — preferred use — lets the firm improve features that match real jobs, not catalogue fantasy.",
        "A laptop bought for occasional email and one bought for design work are different improvement agendas for the same repair desk.",
        "Ignoring use cases and redesigning from internal hunches alone wastes the point of customer analysis.",
        "Use knowledge is not optional colour; it steers which support packages and configurations belong on the shelf.",
    ),
    "cust_where": (
        "Where customers buy reveals preferred distribution channels and can expose weak links that push the firm toward alternative routes — retail floors, web shops, or direct visits.",
        "If most SOHO clients order refurbished machines online but still want on-site setup, the channel map has to carry both paths.",
        "Channel data is not trivia. Pretending purchase location does not matter leaves logistics and availability blind.",
        "A claim that freezes one channel as the only place customers buy overstates what a single snapshot can prove.",
    ),
    "cust_when": (
        "When customers buy exposes seasonal swings so production can be planned ahead and prices differentiated across the year.",
        "Back-to-school laptop weeks and quiet mid-winter months call for different stock and offer intensity at the same desk.",
        "Timing is not irrelevant noise. Treating demand as perfectly flat ignores the seasonal planning the chapter highlights.",
        "If the statement denies seasonality’s planning value, it cuts away a practical use of the “when” question.",
    ),
    "cust_why": (
        "Why customers choose — motives and preferences — feeds product development and efforts to raise market share against rivals.",
        "Someone buying refurbished for environmental reasons needs a different story than someone buying only on sticker price.",
        "Motives are not decorative. Skipping preference research leaves development and share tactics without a compass.",
        "A claim that motives never matter for share or design contradicts the customer-analysis checklist.",
    ),
    "msize": (
        "Market size (market volume) is total sales of the product by all businesses in the defined market, expressed as value (for example euros) or as quantity (pieces sold).",
        "AT&S tracks PCB and substrate market volume to judge how the industry floor is moving before it reads its own position.",
        "Market size is not one firm’s sales, and it is not the same thing as that firm’s market-share percentage.",
        "Confusing industry volume with one brand’s slice swaps the market-measure labels the chapter keeps apart.",
    ),
    "mshare": (
        "Market share is the proportion of a defined market held by a business, product, or brand — own sales divided by total market sales.",
        "Managers and investors both watch the figure because it shows relative importance versus rivals inside the same market boundary.",
        "Reversing the fraction — total market sales divided by one firm’s sales — does not yield market share.",
        "Upside-down arithmetic produces a meaningless multiple, not a percentage share of the market.",
    ),
    "abs_share": (
        "Absolute market share equals sales of one business (or brand) divided by market volume. If sales are €150,000 and market volume is €1,000,000, absolute share is 15%.",
        "The figure helps inside the firm and for potential investors, provided units and market boundaries match — yet it still says little about the largest rival.",
        "Absolute share alone does not describe how the firm sits against its largest competitor; that comparison needs relative share.",
        "Reporting absolute share as if it already ranked you against the leader hides the competitive gap.",
    ),
    "rel_share": (
        "Relative market share equals own market share divided by the largest competitor’s market share. With 15% against a leader at 30%, relative share is 15/30 = 0.5.",
        "The ratio adds competitive context absolute share refuses to show — parity is 1.0; below 1.0 means smaller than the leader.",
        "Relative share is not another name for absolute share, and it is not own sales divided by market volume alone.",
        "Dropping the leader from the denominator collapses relative share back into a lonely absolute reading.",
    ),
    "potential": (
        "Market potential can exceed current market volume when unrealised customers remain. A firm’s sales potential can exceed current sales volume by winning rivals’ customers and claiming part of that unrealised growth.",
        "Think of market volume as what all firms sell now, and market potential as volume plus buyers still outside the pool; sales potential sits above today’s sales for the same reason.",
        "Potential is not identical to today’s volume. Treating volume and potential as synonyms erases the chapter’s gap between realised and reachable demand.",
        "If the claim says potential cannot exceed volume, it denies the book’s explicit inequality.",
    ),
    "research_scope": (
        "Market research covers existing and prospective customers, competition, and the industry in general — not only last quarter’s invoice list.",
        "Prospective buyers matter as much as current ones when Tina and Steve plan which support packages to launch next.",
        "Narrowing research to one internal spreadsheet while ignoring rivals and industry context understates the chapter’s scope.",
        "Competition and industry outlook sit inside the research brief, not as optional extras.",
    ),
    "ats_measure": (
        "Market measures in industry reports can track segment growth — CCC versus AIM electronics slices, wearables, IoT, or automotive applications — so a firm can judge position and future demand.",
        "Those published forecasts are typically secondary inputs that still help frame later primary questions about the firm’s own offer.",
        "Industry segment charts are not a substitute for knowing your own absolute and relative share inside a clearly defined market.",
        "A glossy growth story without a market definition still leaves share arithmetic unfinished.",
    ),
    "research_gen": (
        "Market research turns customer, rival, and industry information into evidence for marketing decisions instead of guesswork.",
        "Primary and secondary sources, customer analysis, and market measures are the toolkit section 5.5 stacks together.",
        "Guesswork without structured evidence is exactly what market research is meant to replace.",
        "If the claim denies the need for that evidence, it fights the whole point of the subsection.",
    ),
    "seg_def": (
        "Market segmentation divides a market into relatively homogeneous subgroups that share characteristics relevant for marketing decisions.",
        "Age, location, values, or usage intensity can be the glue; perfect sameness across every personal trait is not required.",
        "“Relatively homogeneous” is not “identical in all characteristics.” Two neighbours in the same city with different incomes already break an absolute identity claim.",
        "Demanding total identity makes segmentation impossible and misreads the book’s wording.",
    ),
    "geo": (
        "Geographic segmentation groups customers by where they live or operate — for Tina and Steve, the Austrian city and surrounding area.",
        "City versus hinterland changes logistics, which support visits are realistic, and how offers are worded.",
        "Geographic cuts are about place, not income brackets or lifestyle attitudes.",
        "Parking demographics or psychographics under a geographic label mixes the segmentation bases.",
    ),
    "demo": (
        "Demographic segmentation uses measurable social markers such as age, gender, education, income, and employment status — employed, retired, or self-employed.",
        "Tina and Steve explicitly list adult men and women of all ages across those employment groups as demographic descriptors.",
        "Demographics are not lifestyle values or pure location labels. Attitudes belong to psychographics; city boundaries belong to geography.",
        "Swapping lifestyle language into the demographic box muddies which base you are actually using.",
    ),
    "psycho": (
        "Psychographic segmentation reflects attitudes, values, and interests — willingness to buy second-hand, care for the environment, or desire for start-up assistance.",
        "A refurbished-laptop buyer who wants green reuse is a psychographic story even inside one city ring.",
        "Psychographics are not defined solely by postal codes. Place is geographic; values and willingness-to-pay philosophies are psychographic.",
        "Reducing psychographics to map boundaries deletes the values the chapter lists.",
    ),
    "behav": (
        "Behavioural segmentation distinguishes how people buy or use products — occasional versus heavy use, loyalty patterns, occasions, or benefits sought.",
        "Tina and Steve target occasional laptop users who do not need the latest release but do need support — a usage pattern, not a gender label.",
        "Wanting hands-on start-up help is an attitude or assistance preference — psychographic territory — not the same thing as a behavioural usage-frequency cut. Attitudes are not purchase frequency.",
        "Calling an attitude segment “behavioural” because someone also buys occasionally mixes two bases the chapter keeps apart.",
    ),
    "crit_meas": (
        "A useful segment must be measurable — you can estimate its size and purchasing power before pouring budget into it.",
        "Without a size reading, “our kind of customer” stays a slogan rather than a plan.",
        "Measurable does not mean every member has been personally interviewed. Estimates of size and spending power can be enough.",
        "Census-level interviewing is not the measurability test the chapter sets.",
    ),
    "crit_prof": (
        "A useful segment must be profitable — revenue from serving it has to justify the cost of the tailored offer.",
        "Small niches can still clear the bar when willingness to pay and low waste line up for a specialist desk.",
        "Large is not automatically profitable. A huge group that costs more to serve than it returns fails the profitability screen.",
        "Headcount alone never proves a segment earns its keep.",
    ),
    "crit_acc": (
        "A useful segment must be accessible through communication and distribution channels that can actually reach it.",
        "Newsletters, local shops, and on-site visits are access tools Tina and Steve can use inside their city ring.",
        "If you cannot talk to the group or deliver to them, the segment exists on paper only.",
        "Naming a group without a reachable channel fails the accessibility criterion.",
    ),
    "crit_dur": (
        "A useful segment should be durable — stable enough that it does not dissolve before plans pay off.",
        "Fashion-micro tribes that vanish in weeks rarely justify a full product rebuild for a small IT shop.",
        "Durable means “not changing too quickly,” not “frozen forever with zero change allowed.”",
        "Absolute permanence is a stricter test than the chapter’s durability wording.",
    ),
    "target": (
        "Targeting evaluates each segment’s attractiveness and selects one or more segments to enter with a tailored strategy. The book calls targeting the first step toward an effective marketing strategy.",
        "After the screens for measurable, profitable, accessible, durable groups, managers still have to choose where limited resources go.",
        "Targeting is not “serve everyone with one unchanged offer.” That indifference to segments is mass marketing.",
        "Skipping attractiveness screening and blasting the whole city is not targeting in the chapter’s sense.",
    ),
    "target_market": (
        "A target market is a group of people or businesses toward whom a firm markets goods, services, or ideas with a strategy designed to satisfy their specific needs and preferences.",
        "Tina and Steve’s SOHO pocket with limited funds and high support need is a target market once chosen, not merely a demographic observation.",
        "Calling every passer-by a target market without selection empties the term.",
        "Without a strategy aimed at that group’s needs, the label is decorative.",
    ),
    "position": (
        "Positioning is the process of creating an image or identity in the minds of the chosen target market(s) so it is clear which product meets their demands.",
        "After segmentation and targeting, positioning answers which offer owns which mental slot for those buyers.",
        "Positioning is not inventing a random slogan with no link to the chosen segment’s needs.",
        "Jumping to identity language before choosing targets skips the STP sequence the figure shows.",
    ),
    "mass": (
        "Mass marketing ignores segment differences and offers the same product — promoted in almost the same way — to all customers. Pens, soaps, and detergents often fit because needs are widely shared.",
        "The approach can reach a large market with one formula, but it stays blunt when one pocket of demand shifts.",
        "Mass marketing is a poor default for specialised needs. One uniform laptop-and-support package for every niche rarely matches SOHO constraints.",
        "Calling every city-wide campaign “mass” just because the map is large erases segment and niche options.",
    ),
    "mass_scale": (
        "Mass marketing’s scale upside is economies of scale: when many identical units are produced, some costs do not rise in direct proportion and can be spread, so cost per unit falls as total output rises.",
        "That is why everyday staples often stay on a single formula and a single promotion style across many buyers.",
        "Scale economies do not magically appear for a tiny specialist run that never reaches mass output.",
        "Claiming unit costs fall without increased identical output misstates the mechanism the chapter names.",
    ),
    "mass_flex": (
        "On the other side of the ledger, mass marketing is inflexible and makes it harder to react when particular target pockets change.",
        "One soap formula for everyone cannot pivot quickly when one neighbourhood suddenly wants a different scent or refill system.",
        "Inflexibility is a recognised drawback, not proof that mass marketing never works for staples.",
        "Denying the flexibility cost misreads the balanced account the chapter gives.",
    ),
    "segmkt": (
        "Segment marketing means offering different products to one or more segments — some segmentation — and focusing limited resources where strategic fit is strongest.",
        "Different packages for employed office buyers versus retired home users is a textbook segment-marketing move.",
        "Segment marketing is not identical to mass marketing’s single offer, and it is not automatically as deep as niche focus inside a subgroup.",
        "One soap for all shoppers is mass marketing, not segment marketing.",
    ),
    "niche": (
        "Niche marketing focuses on particular segments and may offer different products to subgroups within segments — more segmentation. Many small firms choose niches because they cannot supply mass quantities; specialists can still lead inside their pocket.",
        "Tina and Steve niche on individuals, sole proprietors, and SOHO clients with limited budgets, no need for the newest release, and high need for technical support.",
        "Niche focus is deliberate depth, not random neglect of research. Ignoring evidence is not a niche strategy.",
        "Mass-scale output targets contradict the niche logic the chapter assigns to small specialists.",
    ),
    "mix_after": (
        "After targeting, the firm still needs a marketing mix — product, price, place, promotion — as the second step that actually serves the chosen target market.",
        "Section 5.7 builds that mix once 5.6 has named whom you serve.",
        "Targeting alone does not finish the job; without a coherent mix the chosen segment never receives a usable offer.",
        "Stopping at a segment name with no mix leaves strategy half-built.",
    ),
    "seg_gen": (
        "Segmentation, targeting, and positioning work as a sequence: group similar customers, choose whom to serve, then shape the offer’s identity for those minds.",
        "Bases can be geographic, demographic, psychographic, or behavioural — used alone or combined when they help decisions.",
        "Skipping grouping and selection while jumping straight to a slogan breaks the STP path the chapter draws.",
        "Without measurable, profitable, accessible, durable segments, fine slicing wastes resources.",
    ),
}


SCENES = {
    "5.5": [
        "Tina and Steve’s repair desk planning weekend interviews about laptop budgets",
        "a small IT shop weighing a paid survey against a free chamber report",
        "AT&S reading Prismark PCB and substrate volume figures before board season",
        "a coastal e-bike firm checking winter versus summer battery-swap demand",
        "a home-office buyer paying the invoice while a teenage user picks the machine",
        "a SOHO client comparing refurbished machines online then booking on-site setup",
    ],
    "5.6": [
        "Tina and Steve carving a SOHO niche that wants second-hand machines plus start-up help",
        "a detergent brand running one soap formula and one city-wide ad for every shopper",
        "a niche repair studio focusing on occasional laptop users rather than power gamers",
        "a city-and-suburbs slice of employed, retired, and self-employed adult buyers",
        "an environmentally minded pocket happy to reuse refurbished kit",
        "a specialist desk that leads inside support-heavy home offices despite small scale",
    ],
}


OPENERS_TRUE = [
    "Listen to what the sentence actually claims about {hook}.",
    "Keep {hook} attached to the firm’s real decision, not to a slogan.",
    "Start from the chapter’s wording on {hook} and stay there.",
    "Put {hook} on the table beside a live customer scene.",
    "Read {hook} the way a manager would before spending research money.",
]
OPENERS_FALSE = [
    "Here is the catch with {hook}.",
    "The claim overreaches on {hook}.",
    "Watch the label swap around {hook}.",
    "If that reading of {hook} were right, the chapter’s distinctions would collapse.",
    "Do not let familiar vocabulary rescue a wrong use of {hook}.",
]


def hook(statement: str) -> str:
    m = re.search(
        r"(primary market research|secondary (?:information|data|research|sources?)|questionnaires?|"
        r"personal interviews?|telephone interviews?|online surveys?|market research institute|"
        r"government agencies|industry associations?|absolute market share|"
        r"relative market share|market volume|market potential|sales potential|market size|"
        r"market share|customer analysis|distribution channels?|seasonal(?:ity| fluctuations?)?|"
        r"geographic segmentation|demographic segmentation|psychographic segmentation|"
        r"behavioural segmentation|behavioral segmentation|mass marketing|segment marketing|"
        r"niche marketing|economies of scale|target market|positioning|"
        r"B2B|B2C)",
        statement,
        re.I,
    )
    if m:
        return m.group(0)
    # single keyword fallbacks (keep SHORT — openers embed this phrase)
    for kw in (
        "measurable", "profitable", "accessible", "durable", "targeting", "segmentation",
        "primary", "secondary", "influencer", "seasonality", "questionnaire", "interview",
    ):
        if kw in statement.lower():
            return kw
    words = [w.strip(",.;:'\"") for w in statement.split()[:4]]
    return " ".join(words)


def stem_glue(statement: str) -> str:
    """One short sentence echoing distinctive stem nouns."""
    # Trim to a usable clause
    s = statement.strip()
    if len(s) > 160:
        s = s[:157].rsplit(" ", 1)[0] + "…"
    return f"The stem says: “{s}”"


def target_profile(case_id: str) -> list[tuple[str, int]]:
    """Return [(kind, body_target)] for A–E with mandatory mix."""
    # kinds: compact / standard / expanded
    profiles = [
        [("c", 210), ("s", 360), ("e", 620), ("s", 400), ("c", 240)],
        [("e", 580), ("c", 200), ("s", 420), ("c", 250), ("s", 380)],
        [("s", 340), ("e", 640), ("c", 220), ("s", 410), ("c", 260)],
        [("c", 230), ("s", 390), ("s", 430), ("e", 600), ("c", 210)],
        [("s", 370), ("c", 240), ("e", 560), ("c", 200), ("s", 450)],
        [("e", 610), ("s", 350), ("c", 230), ("s", 400), ("c", 270)],
    ]
    return profiles[seed(case_id, "profile") % len(profiles)]


def build_body(
    case_id: str,
    sub: str,
    letter: str,
    statement: str,
    is_true: bool,
    kind: str,
    target: int,
    force_open: str,
    with_note: bool,
) -> str:
    topic = detect(statement, sub)
    lead_t, supp_t, lead_f, supp_f = BOOK[topic]
    lead, supp = (lead_t, supp_t) if is_true else (lead_f, supp_f)
    sc = pick(case_id, letter, "scene", SCENES[sub])
    hk = hook(statement)

    parts: list[str] = [force_open]

    if kind == "c":
        # compact: opener + lead + short scene (+ stem hook)
        parts.append(lead)
        parts.append(f"Concrete scene: {sc}.")
        parts.append(stem_glue(statement) if len(statement) < 140 else f"That is the chapter’s reading of {hk}.")
        if not is_true:
            parts.append(supp.split(".")[0] + ".")
    elif kind == "s":
        parts.append(lead)
        parts.append(supp)
        parts.append(f"Hold that against {sc}.")
        parts.append(stem_glue(statement))
    else:  # expanded
        parts.append(lead)
        parts.append(supp)
        parts.append(f"Walk the same idea through {sc}.")
        parts.append(stem_glue(statement))
        if is_true:
            parts.append(
                pick(
                    case_id,
                    letter,
                    "xtrue",
                    [
                        f"Nothing in that scene asks you to stretch {hk} beyond the chapter’s definition.",
                        f"Once {hk} is kept inside that boundary, the sentence lines up with how the book teaches the tool.",
                        f"Managers using {hk} this way are doing ordinary section work, not inventing a parallel theory.",
                    ],
                )
            )
        else:
            parts.append(
                pick(
                    case_id,
                    letter,
                    "xfalse",
                    [
                        f"One clear counter-scene around {hk} is enough to reject the overclaim.",
                        f"Put the right label back on {hk} and the absolute wording falls away.",
                        f"The neighbouring concept students mix with {hk} belongs on a different shelf.",
                    ],
                )
            )

    body = "\n\n".join(parts)

    if with_note:
        note_map_55 = {
            "primary": "Note: primary versus secondary is about who collected the data and for what brief — not about whether the page contains numbers.",
            "secondary": "Note: primary versus secondary is about who collected the data and for what brief — not about whether the page contains numbers.",
            "abs_share": "Note: absolute share compares you to the whole market; relative share compares you to the leader.",
            "rel_share": "Note: absolute share compares you to the whole market; relative share compares you to the leader.",
            "mshare": "Note: absolute share compares you to the whole market; relative share compares you to the leader.",
            "msize": "Note: market volume is realised industry sales; market potential can sit above that when unrealised buyers remain.",
            "potential": "Note: market volume is realised industry sales; market potential can sit above that when unrealised buyers remain.",
            "cust_who": "Note: buyer, user, and influencer can be three different people in one purchase.",
            "cust_when": "Note: timing data feeds both production planning and price differentiation across the year.",
        }
        note_map_56 = {
            "geo": "Note: geographic, demographic, psychographic, and behavioural bases answer different questions — keep their contents on separate shelves.",
            "demo": "Note: geographic, demographic, psychographic, and behavioural bases answer different questions — keep their contents on separate shelves.",
            "psycho": "Note: geographic, demographic, psychographic, and behavioural bases answer different questions — keep their contents on separate shelves.",
            "behav": "Note: geographic, demographic, psychographic, and behavioural bases answer different questions — keep their contents on separate shelves.",
            "mass": "Note: mass, segment, and niche marketing differ by how many segments you serve and how deeply the offer splits.",
            "mass_scale": "Note: mass, segment, and niche marketing differ by how many segments you serve and how deeply the offer splits.",
            "mass_flex": "Note: mass, segment, and niche marketing differ by how many segments you serve and how deeply the offer splits.",
            "segmkt": "Note: mass, segment, and niche marketing differ by how many segments you serve and how deeply the offer splits.",
            "niche": "Note: mass, segment, and niche marketing differ by how many segments you serve and how deeply the offer splits.",
            "crit_meas": "Note: measurable, profitable, accessible, and durable are screens for useful segments, not decorative adjectives.",
            "crit_prof": "Note: measurable, profitable, accessible, and durable are screens for useful segments, not decorative adjectives.",
            "crit_acc": "Note: measurable, profitable, accessible, and durable are screens for useful segments, not decorative adjectives.",
            "crit_dur": "Note: measurable, profitable, accessible, and durable are screens for useful segments, not decorative adjectives.",
            "seg_def": "Note: relatively homogeneous means similar on relevant traits — not identical on every personal characteristic.",
            "target": "Note: targeting chooses whom to serve; the marketing mix is the later step that serves them.",
            "position": "Note: positioning shapes identity after segments are chosen — it is not a slogan invented before targeting.",
        }
        amap = note_map_55 if sub == "5.5" else note_map_56
        note = amap.get(topic) or (
            "Note: keep the chapter label attached to the stem’s nouns — neighbouring concepts sit on other shelves."
        )
        body = f"{body}\n\n{note}"

    pads = (
        [
            f"Say the decision out loud with {hk} still in the sentence and check whether any scope word smuggles an overreach.",
            f"A rival desk running the opposite policy for a week would show quickly whether {hk} behaves as claimed.",
            f"Keep the units and market boundary honest whenever {hk} turns into a number on a slide.",
            f"Steve and Tina’s desk is a fair stress test: if {hk} works there, the chapter’s definition is doing real work.",
            f"Investors reading a share slide still need the same {hk} boundary the textbook draws — fuzzy markets invent fake precision.",
        ]
        if sub == "5.5"
        else [
            f"Ask which customers would be over-served or ignored if {hk} were applied exactly as written.",
            f"A small specialist and a detergent mass brand can both be rational — they simply use {hk} differently.",
            f"Stable planning needs {hk} to survive more than one promotional week.",
            f"Tina and Steve’s SOHO niche only works when {hk} stays measurable, reachable, and worth the support hours.",
            f"Mixing bases under one label for {hk} is how a tidy segmentation chart becomes a useless average customer.",
        ]
    )
    # Expand until near target (especially expanded letters)
    guard = 0
    while len(body) < target - 30 and guard < 5:
        body = f"{body}\n\n{pads[(seed(case_id, letter, f'pad{guard}')) % len(pads)]}"
        guard += 1

    # Trim if too long for kind
    max_len = {"c": 320, "s": 520, "e": 850}[kind]
    max_len = max(max_len, target + 80)
    while len(body) > max_len:
        paras = body.split("\n\n")
        if len(paras) <= 2:
            body = body[: max_len - 1].rsplit(" ", 1)[0] + "."
            break
        drop_idx = len(paras) - 1
        if paras[-1].startswith("Note:") and len(paras) > 3:
            drop_idx = len(paras) - 2
        paras.pop(drop_idx)
        body = "\n\n".join(paras)

    if len(body) < 160:
        body = f"{body}\n\nConcrete scene: {sc}."

    return body


def unique_forced_openers(case_id: str, statements: list[str], keys: list[bool]) -> list[str]:
    letters = "ABCDE"
    opens: list[str] = []
    used: set[str] = set()
    for i, (st, k) in enumerate(zip(statements, keys)):
        hk = hook(st)
        bank = OPENERS_TRUE if k else OPENERS_FALSE
        # rotate uniquely
        for offset in range(len(bank) * 3):
            cand = bank[(seed(case_id, letters[i], "op") + offset) % len(bank)].format(hook=hk)
            key = cand.split(".")[0].strip().lower()[:52]
            if key not in used:
                used.add(key)
                opens.append(cand)
                break
        else:
            # hard unique fallback
            cand = f"{'True path' if k else 'False path'} for letter {letters[i]} on {hk}."
            opens.append(cand)
            used.add(cand.lower()[:52])
    return opens


def build_case(c: dict) -> list[str]:
    case_id = c["case_id"]
    sub = c["subsection"]
    statements = c["statements"]
    keys = c["answer_key"]
    letters = "ABCDE"
    profile = target_profile(case_id)
    openers = unique_forced_openers(case_id, statements, keys)

    # Assign up to 2 notes on false letters preferring expanded/standard
    note_slots = []
    for i, k in enumerate(keys):
        if not k:
            note_slots.append(i)
    note_slots = note_slots[:2]
    if len(note_slots) < 2:
        # optionally one true expanded
        for i, (kind, _) in enumerate(profile):
            if kind == "e" and i not in note_slots:
                note_slots.append(i)
                break
    note_slots = note_slots[:2]

    expls = []
    for i, (st, k) in enumerate(zip(statements, keys)):
        kind, target = profile[i]
        body = build_body(
            case_id,
            sub,
            letters[i],
            st,
            k,
            kind,
            target,
            openers[i],
            with_note=(i in note_slots and kind != "c"),
        )
        expls.append(f"{body}\n\n{closer(k)}")

    # Validate/repair loop
    for attempt in range(15):
        lens = [len(body_of(e)) for e in expls]
        opens = [body_of(e).split(".")[0].strip().lower()[:52] for e in expls]
        notes = sum(1 for e in expls if re.search(r"(?m)^Note:", e))
        ok = (
            all(n >= 160 for n in lens)
            and sum(1 for n in lens if n >= 400) >= 2
            and any(n >= 550 for n in lens)
            and max(lens) - min(lens) >= 200
            and len(set(opens)) == 5
            and notes <= 2
        )
        closers_ok = True
        for i, e in enumerate(expls):
            m = CLOSER_RE.search(e)
            want = "True" if keys[i] else "False"
            if not m or m.group(1) != want:
                closers_ok = False
        if ok and closers_ok:
            return expls

        # repair: force one expanded and one compact
        long_i = max(range(5), key=lambda i: seed(case_id, f"long{attempt}", str(i)))
        short_i = (long_i + 2) % 5
        new_profile = list(profile)
        new_profile[long_i] = ("e", 620 + attempt * 10)
        new_profile[short_i] = ("c", 200)
        # ensure another >=400
        mid_i = (long_i + 1) % 5
        if mid_i != short_i:
            new_profile[mid_i] = ("s", 420)
        profile = new_profile
        openers = unique_forced_openers(case_id + str(attempt), statements, keys)
        expls = []
        for i, (st, k) in enumerate(zip(statements, keys)):
            kind, target = profile[i]
            body = build_body(
                case_id,
                sub,
                letters[i],
                st,
                k,
                kind,
                target,
                openers[i],
                with_note=(i in note_slots and kind == "e"),
            )
            expls.append(f"{body}\n\n{closer(k)}")

    return expls


def main() -> int:
    data = json.loads(DATA.read_text())
    cases = [c for c in data if c["subsection"] in ("5.5", "5.6")]
    assert len(cases) == 95, len(cases)

    # Freeze other subsections from current file (must match git HEAD intent)
    other_before = {
        c["case_id"]: json.loads(json.dumps(c["tactical_explanations"]))
        for c in data
        if c["subsection"] not in ("5.5", "5.6")
    }

    rewrites = {c["case_id"]: build_case(c) for c in cases}
    OUT_JSON.write_text(json.dumps(rewrites, indent=2, ensure_ascii=False) + "\n")

    by = {c["case_id"]: c for c in data}
    for cid, expl in rewrites.items():
        assert by[cid]["subsection"] in ("5.5", "5.6")
        by[cid]["tactical_explanations"] = expl

    for cid, expl in other_before.items():
        by[cid]["tactical_explanations"] = expl

    DATA.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
    print(f"Wrote {len(rewrites)} cases")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
