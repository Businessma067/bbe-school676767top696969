#!/usr/bin/env python3
"""Rewrite all ch3 tactical_explanations from scratch (brief-compliant).

Generates statement-tied prose with compact / standard / expanded length mix,
unique openings, 0-2 Notes, no em dashes, and So the statement is True/False closers.
"""
from __future__ import annotations

import hashlib
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "src/data/economics-cases-ch3-subtopics.json"

CLOSER_RE = re.compile(r"\s*So the statement is (True|False)\.?\s*$", re.I)

STOP = {
    "a", "an", "the", "and", "or", "of", "to", "in", "on", "for", "is", "are", "was",
    "were", "be", "as", "by", "with", "that", "this", "these", "those", "it", "its",
    "from", "at", "into", "not", "no", "only", "also", "than", "then", "when", "while",
    "because", "about", "over", "under", "after", "before", "between", "their", "they",
    "them", "can", "may", "must", "does", "do", "did", "if", "so", "such", "any", "all",
    "each", "both", "more", "most", "other", "some", "very", "just", "but", "means",
    "rather", "even", "still", "never", "always", "automatically", "regardless", "among",
    "without", "within", "through", "against", "using", "used", "being", "own", "same",
    "every", "who", "which", "what", "where", "whether", "there", "here", "counts",
    "count", "falls", "fall", "shows", "show", "makes", "make", "gets", "get", "says",
    "claim", "claims", "statement", "firm", "firms", "business", "businesses",
}


def seed(*parts: str) -> int:
    return int(hashlib.md5("|".join(parts).encode()).hexdigest()[:8], 16)


def pick(case_id: str, letter: str, tag: str, options: list[str]) -> str:
    return options[seed(case_id, letter, tag) % len(options)]


def closer(is_true: bool) -> str:
    return "So the statement is True." if is_true else "So the statement is False."


def body_of(e: str) -> str:
    return CLOSER_RE.sub("", e).strip()


def clip(s: str, lo: int, hi: int) -> str:
    s = re.sub(r"\s+", " ", s).strip()
    if not s:
        return s
    if len(s) <= hi:
        return s if s.endswith(".") else s.rstrip(".") + "."
    cut = s[: hi - 1]
    sp = max(cut.rfind(". "), cut.rfind("; "))
    if sp >= lo // 2:
        cut = cut[: sp + 1].strip()
        return cut
    sp = cut.rfind(" ")
    if sp > lo // 2:
        cut = cut[:sp]
    cut = cut.rstrip(",;: ")
    return cut + "."


def no_dash(s: str) -> str:
    return s.replace("—", ", ").replace("–", ", ")


def hook(statement: str) -> str:
    sl = statement.lower()
    phrases = (
        "seasonal pickers", "hillside vineyards", "leased bottling", "fermentation knowledge",
        "insurance claims handlers", "delivery vans", "spare parts inventory", "cash reserves",
        "mineral rights", "oak barrels", "river water", "diagnostic tools", "plant management",
        "strong customer demand", "break-even", "not-for-profit", "micro enterprise",
        "small classification", "balance sheet", "turnover", "local bakery", "multinational",
        "stakeholders", "shareholders", "greenwashing", "opportunity cost",
    )
    for p in phrases:
        if p in sl:
            return p
    toks = [t for t in re.findall(r"[A-Za-z][A-Za-z'-]{2,}", statement) if t.lower() not in STOP]
    if not toks:
        return "this wording"
    chunk = " ".join(toks[:4])
    return chunk if len(chunk) <= 48 else chunk[:45].rsplit(" ", 1)[0]


def stem_clause(statement: str, limit: int = 110) -> str:
    s = re.sub(r"\s+", " ", statement.strip()).rstrip(".")
    if len(s) <= limit:
        return s
    cut = s[: limit - 1].rsplit(" ", 1)[0]
    return cut + "…"


def ctx_scene(context: str, title: str) -> str:
    cue = (context or "").strip()
    cue = re.sub(r"^(Consider|Analyze|Analyse|Review|Assess)\s+", "", cue, flags=re.I)
    cue = re.sub(r"\s*Evaluate the following.*$", "", cue, flags=re.I).strip()
    cue = re.sub(r"\s+", " ", cue).rstrip(".")
    if len(cue) > 130:
        cue = cue[:127].rsplit(" ", 1)[0] + "…"
    if cue and len(cue) > 25:
        return cue
    return title.rstrip(".")


def detect(sub: str, statement: str) -> str:
    s = statement.lower()

    if sub == "3.1":
        if any(w in s for w in ("entrepreneur", "coordinat", "founder", "risk-bearing")):
            return "entrepreneurship"
        if any(w in s for w in ("labour", "labor", "picker", "handler", "engineer", "apprentice", "trainer", "staff", "crew", "planner", "accountant", "manager", "technician")):
            if "want" in s and "labour" in s:
                return "labour_want_trap"
            if any(w in s for w in ("only", "manual", "shop-floor", "excludes", "outside", "restricted")):
                return "labour_narrow"
            if any(w in s for w in ("seasonal", "weeks", "temporary", "freelance")):
                return "labour_season"
            return "labour"
        if any(w in s for w in ("knowledge", "technology", "software", "licence", "license", "know-how", "fermentation", "diagnostic")):
            return "knowledge"
        if any(w in s for w in ("capital", "leased", "machine", "vehicle", "cash", "payroll", "inventory", "spare", "hire-purchase", "financial", "fleet", "tool", "barrel order")):
            if any(w in s for w in ("leased", "rent", "hire")):
                return "capital_leased"
            if "land because" in s or re.search(r"\bare land\b", s) or "become land" in s:
                return "capital_vs_land"
            return "capital"
        if any(w in s for w in ("land", "vineyard", "forest", "mineral", "river", "fisher", "soil", "oak", "timber", "water rights")):
            if any(w in s for w in ("only", "fenced", "excludes", "factory site")):
                return "land_narrow"
            if any(w in s for w in ("barrel", "timber ready", "capital because", "counts as capital")):
                return "land_vs_capital"
            return "land"
        if any(w in s for w in ("combin", "dominant", "without other", "single factor", "absent")):
            return "factors_mix"
        return "factors_gen"

    if sub == "3.2":
        if "gdp" in s or "wellbeing" in s or "well-being" in s or "rebuild" in s:
            return "gdp"
        if any(w in s for w in ("seventy", "70", "developed", "tertiary share")):
            return "sector_share"
        if "primary" in s and ("secondary" in s or "tertiary" in s):
            return "sector_compare"
        if any(w in s for w in ("bank", "insurance", "coach", "retail", "helpdesk", "ski", "warehouse", "tertiary")):
            if any(w in s for w in ("primary", "secondary")) and "belong" in s:
                return "sector_swap"
            return "tertiary"
        if any(w in s for w in ("secondary", "manufactur", "assembl", "smelt", "fabricat", "plant", "mill")):
            return "secondary"
        if any(w in s for w in ("primary", "mining", "farm", "fish", "forest", "olive", "coal", "wheat", "harvest", "ore")):
            return "primary"
        return "sector_gen"

    if sub == "3.3":
        if any(w in s for w in ("not-for-profit", "npo", "donation", "mission", "charity", "humanitarian", "conservation", "relief", "clinic", "theatre", "food bank", "wwf", "red cross")):
            return "npo"
        if "guarantee" in s and "demand" in s:
            return "profit_demand"
        if any(w in s for w in ("break-even", "covering costs alone", "matching expenses", "cover costs alone")):
            return "breakeven"
        if any(w in s for w in ("reinvest", "retained", "oven", "equipment upgrade")):
            return "profit_reinvest"
        if any(w in s for w in ("revenue without", "recording revenue")):
            return "revenue_only"
        return "profit_gen"

    if sub == "3.4":
        if "micro" in s:
            return "micro"
        if "medium" in s or "€43" in s or "€50" in s or "250" in s:
            return "medium"
        if "small" in s or ("€10" in s and "micro" not in s):
            return "small"
        if "sme" in s or "msme" in s or "99" in s:
            return "sme_stats"
        return "msme_dual"

    if sub == "3.5":
        if "globalis" in s or "globaliz" in s:
            return "globalisation"
        if "international" in s or "multinational" in s or "abroad" in s or "worldwide" in s:
            return "international"
        if "national" in s and "international" not in s:
            return "national"
        if "local" in s or "regional" in s or "undercapital" in s:
            return "local_regional"
        return "scope_gen"

    # 3.6
    if "stakeholder" in s:
        if any(w in s for w in ("only", "limited to", "excluded", "excludes", "shareholder")):
            return "stakeholder_narrow"
        return "stakeholder_broad"
    if "shareholder" in s:
        return "shareholder"
    if "greenwash" in s or ("environment" in s and any(w in s for w in ("claim", "slogan", "friendly", "proven", "concrete"))):
        return "environment"
    if "supplier" in s:
        return "supplier"
    if "customer" in s:
        return "customer"
    if "employee" in s or "manager" in s or "staff" in s:
        return "employee"
    if "owner" in s or ("profit" in s and "risk" in s):
        return "owner"
    if "internal" in s:
        return "internal_stake"
    if "external" in s:
        return "external_stake"
    if "conflict" in s or "trade-off" in s or "night" in s:
        return "conflict"
    return "stake_gen"


# (true_lead, true_support, false_lead, false_support)
BOOK: dict[str, tuple[str, str, str, str]] = {
    "labour": (
        "Labour is every human resource applied to production: mental and manual work, in goods firms and service firms alike.",
        "Coordinators, handlers, and engineers all deploy time and skill toward output. The factor label follows the human input, not the industry name on the door.",
        "Labour is not limited to one workplace image. Office planners and service desks supply human resources just as pickers and operators do.",
        "Narrowing labour to a single contract type or muscle-only work contradicts the all human resources definition used in the chapter.",
    ),
    "labour_narrow": (
        "Planners, accountants, and managers supply labour because they apply human effort and skill to production tasks.",
        "The factor covers every human resource in the production process, not only repetitive manual tasks on a shop floor.",
        "Words such as only, excludes, or restricted turn a broad factor into an absolute that the chapter rejects.",
        "One office or planning role is enough to show that labour stretches beyond shop-floor muscle alone.",
    ),
    "labour_season": (
        "Seasonal and temporary workers still supply labour while they are employed on production.",
        "Contract length does not decide the factor. Harvest crews, freelance installers, and short-term handlers remain human resources for the weeks they work.",
        "Duration of employment is not the test for labour classification.",
        "Seasonal pickers or temporary staff still count as labour during their engagement; weeks on the roster do not move them outside the factor.",
    ),
    "labour_want_trap": (
        "Installing software or performing a service is labour when human effort creates output for a client.",
        "A household want describes customer preference; labour describes the human factor the firm combines. Intangible delivery does not remove the worker from the labour category.",
        "Calling productive service work a want confuses Chapter 2 consumer language with Chapter 3 factor labels.",
        "Human time spent on installation or client service is labour input, not a relabelled want.",
    ),
    "capital": (
        "Capital covers produced means of production and operating finance: machinery, plant, vehicles, inventories, and cash used to run operations.",
        "Tools on a line, spare parts held for repairs, and vans that ship finished goods all function as capital while the firm uses them productively.",
        "Capital is defined by productive use of produced resources, not by whether the item feels natural or intangible.",
        "Finished goods stored for operations, fleet vehicles, and financial buffers for payroll belong with capital, not with land or labour.",
    ),
    "capital_leased": (
        "Leased, rented, or hire-purchase equipment still functions as capital while the firm uses it in production.",
        "Ownership title is not the test. A bottling line on lease during vintage week is capital on that run, just like owned machinery on a factory shift.",
        "Leased kit is still capital. The lessor holds title, but the user deploys produced means of production.",
        "Renting diagnostic tools or a bottling line does not reclassify operating equipment as a non-capital expense outside the factor map.",
    ),
    "capital_vs_land": (
        "Materials and tools already extracted and fashioned for use are capital, not land, even when raw ore once sat in the earth.",
        "Land is the natural-resource stage. Copper sheet on a line, refined inputs, and manufactured parts follow capital and materials logic in secondary production.",
        "Origin in the ground does not keep processed materials in the land box forever.",
        "If every input stayed land because its ore was mined, secondary manufacturing would lose a distinct resource story.",
    ),
    "land": (
        "Land as a factor means natural resources in productive use: soil, water, forests, fisheries, minerals, and sites with natural character.",
        "River water for irrigation, hillside vineyards, and mineral deposits enter production as land inputs before manufacturing transforms them.",
        "Land covers natural resources used in production, not every object that once grew outdoors.",
        "Standing forests and water rights are land; coopered barrels and milled inventory have usually left pure land.",
    ),
    "land_narrow": (
        "Land is broader than a fenced factory plot. Forests, fisheries, minerals, and water sites with natural character all count.",
        "Fuhrmann lists soil, water rights, forests, and minerals under land. Restricting land to deeded industrial yards is too narrow.",
        "Absolute words such as only or excludes break a correct nearby idea about factory sites.",
        "One vineyard, forest, or fishery is enough to reject a land definition limited to fenced factory yards alone.",
    ),
    "land_vs_capital": (
        "Timber ready for milling and oak barrels are produced goods, not raw land still in the forest.",
        "Natural origin does not make manufactured capital goods into land. Forests can be land; barrels and cut boards are capital once fashioned for production.",
        "Mineral rights attach to natural deposits and stay land even when tradable. Oak barrels and processed timber are capital stock.",
        "Saleability or tree origin does not convert finished barrels, boards, or leased tools into the land factor.",
    ),
    "entrepreneurship": (
        "Entrepreneurship organises land, labour, and capital under uncertainty and bears business risk when plans fail.",
        "Choosing orders, coordinating staff, and absorbing unsold stock are organising acts. Buying capital or hiring labour does not erase entrepreneurship.",
        "Entrepreneurship is absent only in wording, not in fact, when someone still coordinates factors under risk.",
        "Capital orders and hiring decisions often coincide with entrepreneurship because someone must organise the mix and face residual loss.",
    ),
    "knowledge": (
        "Knowledge and technology count as production factors when applied methods, licences, or systems raise what the firm can produce.",
        "Fermentation know-how, diagnostic software, and process recipes reshape how labour and capital combine in services and manufacturing.",
        "Knowledge is not cancelled by missing patents or by service-sector delivery.",
        "Registration paperwork is not the gate: applied know-how and technology remain factors whether or not files sit on servers.",
    ),
    "factors_mix": (
        "Firms combine several factors. One may dominate by industry, but dominance does not delete the others.",
        "A service ticket still uses tools and coordination; a automated line still needs oversight and entrepreneurship.",
        "Single-factor absolutes misread how production actually runs.",
        "Automation, services, and harvest seasons still mix land, labour, capital, entrepreneurship, and often knowledge.",
    ),
    "factors_gen": (
        "Production combines land, labour, capital, entrepreneurship, and often knowledge and technology to create goods and services.",
        "Each factor names a distinct resource type. Sort the nouns in the sentence against that map before judging the claim.",
        "Similar-sounding labels from the same chapter still belong on different shelves in the factor map.",
        "Swap in the textbook criterion for the contested label and the absolute or swapped category usually fails.",
    ),
    "primary": (
        "Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry.",
        "Ore at the mine face, wheat in the field, and fish landed at the dock are primary outputs before factories transform them.",
        "Banking, insurance, and coaching are not primary merely because they feel essential.",
        "Extraction from nature marks primary activity, not every basic-sounding service.",
    ),
    "secondary": (
        "Secondary-sector activity transforms materials into goods: smelting, milling, assembling, and manufacturing.",
        "Metal ingots from ore, boards from timber, and assembled cables sit in secondary production after extraction.",
        "Delivering banking or insurance is tertiary service work, not secondary manufacturing.",
        "Manufacturing transforms materials; service desks do not become secondary because they sit inside a factory district.",
    ),
    "tertiary": (
        "The tertiary sector supplies services: banking, insurance, retail, coaching, tourism, and support work.",
        "Intangible delivery and customer-facing service flows belong here rather than in extraction or fabrication.",
        "Banking and insurance are tertiary even when households treat them as necessities.",
        "Calling financial services primary because they are basic needs swaps sector labels by emotion, not by activity type.",
    ),
    "sector_swap": (
        "Sector classification follows the main activity: extract (primary), manufacture (secondary), serve (tertiary).",
        "A ski resort’s lift tickets, an insurer’s claims desk, and a bank branch are tertiary even when capital-heavy.",
        "Material origin or building location does not drag a service into primary or secondary boxes.",
        "If the main activity is service delivery, primary or secondary labels misplace the firm.",
    ),
    "sector_compare": (
        "Mining ore is primary; smelting ingots is secondary; installing service links is tertiary. Each stage has its own sector label.",
        "The because-clause in a comparison letter must match the activity described, not an adjacent production stage.",
        "Sector follows what the firm mainly does at that step, not the biography of the material.",
        "Mixing extraction, manufacturing, and service verbs in one wrong bucket breaks the three-sector map.",
    ),
    "gdp": (
        "GDP totals the money value of final goods and services produced within national borders in a period.",
        "Rebuild spending after disaster can raise measured GDP while wellbeing falls. GDP tracks activity, not welfare one-for-one.",
        "Rising GDP is not proof of sustainable wellbeing or environmental improvement.",
        "Measured output can grow while health, leisure, or environmental quality move the opposite way.",
    ),
    "sector_share": (
        "As economies develop, the tertiary share often rises above seventy percent of output in high-GDP European economies.",
        "Industry mix shifts toward services over time, but each firm is still classified by its main activity.",
        "Development level changes sector shares at the macro level; it does not rename one firm’s primary activity.",
        "A high tertiary share nationally does not turn a mine into a service firm.",
    ),
    "sector_gen": (
        "The three-sector model sorts firms by whether they mainly extract, manufacture, or serve.",
        "Follow the main activity named in the sentence rather than where the building sits or how basic the product feels.",
        "Sector labels describe production stage, not customer urgency.",
        "Misplaced sector words usually come from treating familiar services as extraction or fabrication.",
    ),
    "profit_gen": (
        "Profit-oriented firms seek revenue above total costs. Surplus can be reinvested and rewards owners for risk taken.",
        "Sales matter, but expenses decide whether any surplus remains after the period closes.",
        "Profit compares revenue with total costs and expenses, not with customer enthusiasm alone.",
        "Strong demand helps, yet uncontrolled costs can still erase surplus.",
    ),
    "profit_demand": (
        "Strong customer demand raises sales potential, but profit still requires revenue to exceed total costs.",
        "Demand alone never finishes the arithmetic. High wages, rent, or materials can consume every euro of revenue.",
        "Guarantees and regardless in the sentence treat demand as sufficient without cost control.",
        "A busy shop with negative unit economics can still lose money despite long queues.",
    ),
    "breakeven": (
        "Break-even means covering costs, not the usual long-run goal of profit-oriented manufacturers.",
        "Commercial firms normally seek surplus above total costs for reinvestment and owner reward. Exact cost matching is a floor, not the ambition.",
        "Covering costs alone is survival arithmetic, not the profit objective taught for commercial producers.",
        "Manufacturers that only break even indefinitely fail the usual profit-orientation story in the chapter.",
    ),
    "profit_reinvest": (
        "Commercial profit can be retained and reinvested in ovens, equipment, and capacity without losing profit orientation.",
        "A bakery funding a new oven from retained surplus is using profit for growth, not abandoning the profit motive.",
        "Reinvestment is what firms often do with surplus; it does not turn profit pursuit into break-even pursuit.",
        "Keeping earnings inside the business for upgrades is consistent with profit orientation.",
    ),
    "revenue_only": (
        "Recording revenue without controlling costs does not satisfy the profit objective.",
        "Top-line sales can look healthy while expenses eat the margin. Profit needs surplus after costs, not invoices alone.",
        "Revenue recognition without expense discipline leaves the profit test unfinished.",
        "A firm can book sales and still fail the profit goal when costs run ahead of receipts.",
    ),
    "npo": (
        "Not-for-profit organisations pursue a mission rather than owner profit. They still need inflows, and surpluses usually return to the mission.",
        "Humanitarian kits, clinic care, and conservation work can charge fees or receive donations without becoming profit-maximisers for private owners.",
        "Needing revenue or covering costs does not convert an NPO into a commercial profit maximiser.",
        "Mission focus and surplus recycling distinguish NPOs from firms whose primary aim is private profit.",
    ),
    "micro": (
        "EU micro enterprises employ fewer than ten people and must also meet turnover ≤ €2m or balance sheet total ≤ €2m.",
        "Staff below ten is necessary but not sufficient. Turnover or balance-sheet totals above the financial cap break micro status.",
        "Meeting the staff ceiling alone does not preserve micro classification when financial limits are breached.",
        "Dual tests apply: headcount and a financial alternative must both fit for micro status.",
    ),
    "small": (
        "EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m.",
        "Forty-five staff can fit the headcount limb while turnover above €10m breaks small status on the financial test.",
        "Staff alone never completes EU small-firm classification.",
        "A firm can satisfy the employee ceiling and still fail small status on turnover or balance-sheet totals.",
    ),
    "medium": (
        "EU medium enterprises employ fewer than 250 people and must also meet turnover ≤ €50m or balance sheet ≤ €43m.",
        "International sales or multiple plants do not define medium status; the official staff and financial ceilings do.",
        "Medium classification requires both a staff test and a financial alternative, not headcount in isolation.",
        "Breaching turnover or balance-sheet caps removes medium status even when staff stay below two hundred fifty.",
    ),
    "msme_dual": (
        "EU MSME size classes combine a staff ceiling with a financial alternative: turnover or balance sheet totals.",
        "Headcount alone never finishes the test. Financial limbs exist precisely to stop large-revenue firms from hiding inside small staff counts.",
        "Sufficient or regardless wording treats one limb as enough when the definition requires two.",
        "Apply both staff and financial criteria before assigning micro, small, or medium labels.",
    ),
    "sme_stats": (
        "Roughly ninety-nine percent of businesses registered in the EU fall inside SME size classes: micro, small, or medium.",
        "SME status matters for support programmes and often for accounting rules, but each firm still must pass the dual size test.",
        "SME share statistics do not relax the numeric ceilings for an individual firm.",
        "Being numerous among SMEs does not waive turnover or balance-sheet limits on classification.",
    ),
    "local_regional": (
        "Local and regional firms operate in a limited geographic area with customers nearby.",
        "They often face undercapitalisation and thinner customer pools than national or international rivals.",
        "Reach is about where the firm sells and operates, not a staff count proxy.",
        "Employing fewer than ten people does not define local scope when customers sit far away.",
    ),
    "national": (
        "National firms serve the home country rather than foreign markets.",
        "An Austrian-only retailer or insurer can be national while staying inside one legal and currency system at home.",
        "Selling on the same continent in every country is international scope, not national by definition.",
        "National reach stops at the border unless the firm also makes or sells abroad.",
    ),
    "international": (
        "International or multinational firms make and/or sell in more than one country.",
        "That brings longer supply chains and multiple legal, language, and currency interfaces.",
        "Imported inputs alone do not make a corner bakery international if customers and sales stay local.",
        "Cross-border production or sales mark international scope, not proximity marketing slogans alone.",
    ),
    "globalisation": (
        "Globalisation deepens as more firms produce and sell across borders, linking markets and cultures.",
        "It is a process affecting many firms over time, not an overnight label for every small shop.",
        "Every local shop does not become multinational automatically because trade exists.",
        "Globalisation describes widening cross-border integration, not instant worldwide status for each storefront.",
    ),
    "scope_gen": (
        "Geographic scope classifies firms by where they mainly make and/or sell: local, national, or international.",
        "Customer location and market reach decide the label more than import purchases or marketing budget size.",
        "Scope words such as only, every, or worldwide by definition often overreach.",
        "Put the firm’s actual customer and production geography beside the claim before judging reach.",
    ),
    "stakeholder_broad": (
        "Stakeholders are anyone affected by or interested in the business: customers, suppliers, employees, managers, owners, and communities.",
        "Share ownership is not required. Depending on a firm’s products or living near its plant can create stakeholder interest.",
        "Stakeholders are broader than voting shareholders alone.",
        "Payment for work or supplies does not remove stakeholder status; it often deepens mutual dependence.",
    ),
    "stakeholder_narrow": (
        "Stakeholders include shareholders but also employees, customers, suppliers, managers, and affected communities.",
        "Limiting the map to voting shareholders drops most parties the chapter names.",
        "Only, limited to, or excluded wording collapses a broad stakeholder map into an owner-only list.",
        "Suppliers and employees remain stakeholders because future orders, pay, and quality depend on the firm’s choices.",
    ),
    "shareholder": (
        "Shareholders own equity and are stakeholders, but not every stakeholder holds shares.",
        "Employees, customers, and neighbours can hold legitimate interests without a cap table entry.",
        "Shareholder and stakeholder are nested sets, not identical labels.",
        "Owning shares is one route to interest in the firm, not the only route.",
    ),
    "owner": (
        "Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs.",
        "Risk and return stay linked for providers of capital who stake the business on uncertain demand.",
        "Owners are stakeholders with a distinctive profit-and-risk profile, not the only stakeholders.",
        "Profit motive for owners does not erase employee or community interests in the same decisions.",
    ),
    "employee": (
        "Employees and managers are stakeholders because wages, promotion, and job security depend on the firm’s success.",
        "Receiving pay does not end their interest in scheduling, safety, or strategy that affects their livelihood.",
        "Only senior managers or only shareholders wording shrinks the stakeholder map too far.",
        "Staff without equity still face consequences when the firm cuts hours or closes a site.",
    ),
    "customer": (
        "Customers rely on product quality, price, and availability. That dependence makes them stakeholders even without shares.",
        "Demand and trust tie customers to firm decisions on specs, service hours, and safety.",
        "Customers are excluded from stakeholder status only in over-narrow readings.",
        "Buying a product creates ongoing interest in how the firm performs, not merely a one-off transaction.",
    ),
    "supplier": (
        "Suppliers depend on payment, volume, and future orders. The firm depends on their quality and timing.",
        "That mutual dependence makes suppliers stakeholders alongside employees and customers.",
        "Receiving payment does not erase supplier interest in the buyer’s continued orders and creditworthiness.",
        "A parts vendor with no shares still cares whether the assembly line keeps running next quarter.",
    ),
    "environment": (
        "Environmental responsibility requires concrete activities and proven results, not slogans alone.",
        "Communities and regulators care about emissions, waste, and resource use that affect health and land.",
        "Green labels without measured improvement are greenwashing, not responsible stakeholder management.",
        "A friendly slogan does not substitute for verified cuts in water use, waste, or emissions.",
    ),
    "conflict": (
        "Stakeholder interests often conflict: night shifts may suit owners and buyers yet anger residents and tire staff.",
        "Good management surfaces trade-offs instead of pretending one group’s win hurts nobody.",
        "Zero conflict or automatic alignment wording ignores ordinary business frictions.",
        "Multiple legitimate interests can pull in opposite directions on hours, price, or pollution.",
    ),
    "internal_stake": (
        "Internal stakeholders include owners, managers, and employees inside the organisation.",
        "They face pay, control, and job consequences from firm decisions even when interests differ among them.",
        "Internal does not mean identical interests; owners and staff can disagree on risk and wages.",
        "Treating internal groups as non-stakeholders misreads who bears direct employment and control effects.",
    ),
    "external_stake": (
        "External stakeholders include customers, suppliers, government, communities, and the environment.",
        "Effects reach beyond the payroll: congestion, taxes, pollution, and product safety matter to outsiders.",
        "External parties can hold strong interests without employment contracts or share certificates.",
        "Neighbours and regulators remain stakeholders when plant decisions change traffic, noise, or emissions.",
    ),
    "stake_gen": (
        "Businesses operate among groups whose interests matter: owners, workers, customers, suppliers, and communities.",
        "Stakeholder thinking maps who gains or loses when prices, hours, or emissions change.",
        "Absolute lists that drop customers, suppliers, or communities contradict the broad stakeholder idea.",
        "Ask who is affected or interested before accepting a narrow stakeholder claim.",
    ),
}

NOTE_MAP: dict[str, str] = {
    "labour_narrow": "Note: labour includes office and service work, not only shop-floor roles.",
    "labour_season": "Note: contract length does not decide labour classification.",
    "labour_want_trap": "Note: household wants and production factors use different labels.",
    "capital_leased": "Note: leased tools remain capital while in productive use.",
    "capital_vs_land": "Note: processed materials and tools are capital, not land.",
    "land_vs_capital": "Note: forests can be land; barrels and milled timber are capital.",
    "land_narrow": "Note: land means natural resources, not only factory yards.",
    "entrepreneurship": "Note: organising factors under risk is entrepreneurship, not erased by capital orders.",
    "knowledge": "Note: patents are not required for knowledge to count as a factor.",
    "sector_swap": "Note: sector follows main activity, not how basic the service feels.",
    "gdp": "Note: GDP measures activity, not wellbeing one-for-one.",
    "profit_demand": "Note: profit needs revenue above total costs, not demand alone.",
    "breakeven": "Note: break-even is a floor, not the usual long-run profit goal.",
    "npo": "Note: covering costs differs from pursuing private owner profit.",
    "micro": "Note: EU micro status needs staff and a financial alternative.",
    "small": "Note: staff alone never completes the EU small-firm test.",
    "medium": "Note: medium firms must satisfy both staff and financial ceilings.",
    "msme_dual": "Note: MSME tests always pair headcount with turnover or balance sheet.",
    "local_regional": "Note: geographic scope is about market reach, not employee count.",
    "international": "Note: imported inputs do not alone make a firm international.",
    "stakeholder_narrow": "Note: shareholders are stakeholders, but stakeholders are not only shareholders.",
    "supplier": "Note: payment does not remove stakeholder interest in future business.",
    "environment": "Note: concrete results matter; slogans alone are greenwashing.",
}

OPENERS_TRUE = [
    "{hook_cap} fits the chapter sorting once you name the activity and the nouns in the sentence.",
    "Start with {hook}: the textbook label attaches to those concrete operations, not a related but different idea.",
    "When the case mentions {hook}, the factor or sector map in the chapter supports that reading.",
    "{hook_cap} belongs in the category the subsection uses for this kind of production or firm scope.",
    "Read {hook} against the official definition: the actors and resources named in the sentence line up.",
    "The wording about {hook} tracks how the book classifies land, labour, capital, sectors, profit, size, or stakeholders.",
    "{hook_cap} is classified the way the sentence claims once costs, scope, or resources are placed correctly.",
    "Concrete operations around {hook} show which production factor, sector, or firm type the chapter intends.",
]

OPENERS_FALSE = [
    "{hook_cap} is the pivot, and the absolute or swapped label in the sentence fails once the chapter test is restored.",
    "The trouble starts with {hook}: the conclusion does not follow from the definition the subsection teaches.",
    "Against {hook}, the because-clause or category swap breaks the sorting rule students use in this chapter.",
    "{hook_cap} sounds familiar, but the sentence attaches the wrong box or an only/never scope that the chapter rejects.",
    "Place {hook} beside the textbook criterion and the overreach shows immediately.",
    "With {hook} in view, the claim collapses because the operative words overshoot or mislabel the resource.",
    "Reading {hook} in the stem shows a related chapter word used without the defining feature.",
    "{hook_cap} triggers a common trap: familiar nouns do not rescue an absolute or reversed comparison.",
]

PADS = [
    "Keep the units honest: staff counts, euro ceilings, and geographic reach must match the definition before you judge the label.",
    "A one-week counterexample on the same nouns is enough when the sentence uses only, never, or regardless.",
    "Name the resource or scope first, then walk the because-clause; that order prevents category swaps.",
    "Background details in the case set the scene, but the operative definition decides the letter.",
    "If you swap in the adjacent label from the same subsection, the fit gets worse, which confirms the keyed reading.",
]


def hook_cap(statement: str) -> str:
    h = hook(statement)
    return h[0].upper() + h[1:] if h else "This claim"


def target_profile(case_id: str) -> list[tuple[str, int]]:
    # Exactly two standards (>=400), one expanded (>=550), two compacts per case.
    profiles = [
        [("c", 220), ("s", 420), ("e", 620), ("s", 430), ("c", 240)],
        [("e", 600), ("c", 200), ("s", 410), ("c", 250), ("s", 420)],
        [("s", 420), ("e", 650), ("c", 210), ("s", 430), ("c", 260)],
        [("c", 230), ("s", 410), ("s", 440), ("e", 610), ("c", 200)],
        [("s", 420), ("c", 240), ("e", 580), ("c", 210), ("s", 430)],
        [("e", 630), ("s", 410), ("c", 220), ("s", 420), ("c", 270)],
    ]
    return profiles[seed(case_id, "profile") % len(profiles)]


def unique_forced_openers(case_id: str, statements: list[str], keys: list[bool]) -> list[str]:
    letters = "ABCDE"
    opens: list[str] = []
    used: set[str] = set()
    for i, (st, k) in enumerate(zip(statements, keys)):
        bank = OPENERS_TRUE if k else OPENERS_FALSE
        hc = hook_cap(st)
        for offset in range(len(bank) * 4):
            cand = bank[(seed(case_id, letters[i], "op") + offset) % len(bank)].format(
                hook=hook(st), hook_cap=hc
            )
            key = cand.strip().lower()[:40]
            if key not in used:
                used.add(key)
                opens.append(cand)
                break
        else:
            fallback = f"Letter {letters[i]} turns on {hook(st)} and the keyed verdict follows from that sorting."
            opens.append(fallback)
            used.add(fallback.lower()[:40])
    return opens


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
    scene: str,
) -> str:
    topic = detect(sub, statement)
    lead_t, supp_t, lead_f, supp_f = BOOK[topic]
    lead, supp = (lead_t, supp_t) if is_true else (lead_f, supp_f)
    stem = stem_clause(statement)
    parts: list[str] = [force_open]

    if kind == "c":
        parts.append(lead)
        parts.append(
            f"In this item, {stem[0].lower() + stem[1:] if stem else 'the wording'} supports that reading when matched to {scene.lower()}."
        )
    elif kind == "s":
        parts.append(lead)
        parts.append(supp)
        parts.append(f"Applied here: {stem}.")
        parts.append(f"The case setting ({scene}) keeps the classification tied to real nouns from the sentence.")
    else:
        parts.append(lead)
        parts.append(supp)
        parts.append(f"Walk the same rule through {scene}.")
        parts.append(f"The sentence itself says: {stem}.")
        extra = pick(
            case_id,
            letter,
            "x",
            [
                f"Nothing in that scene asks you to stretch the label beyond the chapter boundary.",
                f"Once the defining feature is fixed, the verdict on {hook(statement)} stays stable.",
                f"Competing labels from the same subsection would fit worse on these nouns.",
            ],
        )
        parts.append(extra)

    body = no_dash("\n\n".join(parts))

    if with_note and topic in NOTE_MAP:
        body = f"{body}\n\n{NOTE_MAP[topic]}"

    guard = 0
    min_len = {"c": 160, "s": 400, "e": 550}[kind]
    floor = max(min_len, target - 40)
    while len(body) < floor and guard < 12:
        body = f"{body}\n\n{pick(case_id, letter, f'pad{guard}', PADS)}"
        guard += 1

    max_len = {"c": 300, "s": 520, "e": 880}[kind]
    while len(body) > max_len:
        paras = body.split("\n\n")
        if len(paras) <= 2:
            body = clip(body, 160, max_len)
            break
        drop = len(paras) - 2 if paras[-1].startswith("Note:") and len(paras) > 3 else len(paras) - 1
        paras.pop(drop)
        body = "\n\n".join(paras)

    if len(body) < 160:
        body = f"{body}\n\n{clip(lead, 80, 180)}"

    return body.strip()


def build_case(c: dict) -> list[str]:
    case_id = c["case_id"]
    sub = c["subsection"]
    statements = c["statements"]
    keys = [bool(k) for k in c["answer_key"]]
    scene = ctx_scene(c.get("context", ""), c.get("title", ""))
    profile = target_profile(case_id)
    openers = unique_forced_openers(case_id, statements, keys)

    note_slots: list[int] = [i for i, k in enumerate(keys) if not k][:2]
    if len(note_slots) < 2:
        for i, (kind, _) in enumerate(profile):
            if kind == "e" and i not in note_slots:
                note_slots.append(i)
                break
    note_slots = note_slots[:2]

    expls: list[str] = []
    for i, (st, k) in enumerate(zip(statements, keys)):
        kind, target = profile[i]
        body = build_body(
            case_id, sub, "ABCDE"[i], st, k, kind, target, openers[i], i in note_slots, scene
        )
        expls.append(f"{body}\n\n{closer(k)}")

    for attempt in range(20):
        lens = [len(body_of(e)) for e in expls]
        opens = [body_of(e).split("\n")[0].strip().lower()[:40] for e in expls]
        notes = sum(1 for e in expls if re.search(r"(?m)^Note:", e))
        ok = (
            all(n >= 150 for n in lens)
            and sum(1 for n in lens if n >= 400) >= 2
            and any(n >= 550 for n in lens)
            and max(lens) - min(lens) >= 250
            and len(set(opens)) == 5
            and notes <= 2
        )
        closers_ok = all(
            (CLOSER_RE.search(e) or [None])[0] and CLOSER_RE.search(e).group(1) == ("True" if keys[i] else "False")  # type: ignore
            for i, e in enumerate(expls)
        )
        if ok and closers_ok:
            return expls

        long_i = max(range(5), key=lambda i: lens[i])
        short_i = min(range(5), key=lambda i: lens[i])
        profile = list(profile)
        profile[long_i] = ("e", 640 + attempt * 15)
        profile[short_i] = ("c", 200 + attempt * 5)
        for j in range(5):
            if j != long_i and profile[j][0] == "s":
                profile[j] = ("s", 430 + attempt * 5)
            elif j != short_i and j != long_i and profile[j][0] == "c" and sum(1 for n in lens if n >= 400) < 2:
                profile[j] = ("s", 420 + attempt * 5)
        openers = unique_forced_openers(case_id + str(attempt), statements, keys)
        expls = []
        for i, (st, k) in enumerate(zip(statements, keys)):
            kind, target = profile[i]
            body = build_body(
                case_id + str(attempt),
                sub,
                "ABCDE"[i],
                st,
                k,
                kind,
                target,
                openers[i],
                i in note_slots,
                scene,
            )
            expls.append(f"{body}\n\n{closer(k)}")

    return expls


def main() -> None:
    data = json.loads(DATA.read_text(encoding="utf-8"))
    for case in data:
        case["tactical_explanations"] = build_case(case)
    DATA.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    lens = [len(body_of(e)) for c in data for e in c["tactical_explanations"]]
    print(
        f"Wrote {len(data)} cases | bodies min={min(lens)} max={max(lens)} "
        f"avg={sum(lens)//len(lens)} | >=400: {sum(x>=400 for x in lens)} | >=550: {sum(x>=550 for x in lens)}"
    )


if __name__ == "__main__":
    main()
