#!/usr/bin/env python3
"""Maximally deepen economics Chapter 3 tactical explanations."""
from __future__ import annotations
import json, re
from pathlib import Path
ROOT = Path("/workspace")
PATH = ROOT / "src/data/economics-cases-ch3-subtopics.json"
FILLER_PHRASES = (
    "A student who", "Check the sentence against", "Read the quantifier",
    "Map the scenario onto", "Check that the comparison", "matched the topic to",
    "Compare the sentence, word for word", "Words such as never, always, only, or all",
)

def extract_mid(expl: str) -> str:
    parts = [p.strip() for p in expl.strip().split("\n\n") if p.strip()]
    if not parts: return ""
    if parts[-1].startswith("The statement is"): parts = parts[:-1]
    if parts and (parts[0].startswith("TRUE —") or parts[0].startswith("FALSE —")):
        head = parts[0]
        if " — " in head:
            after = head.split(" — ", 1)[1]
            for closer in ("The statement is true.", "The statement is false."):
                if after.endswith(closer): after = after[: -len(closer)].strip()
            parts = [after] + parts[1:]
        else:
            parts = parts[1:]
    mid = "\n\n".join(parts).strip()
    cleaned = []
    for sent in re.split(r"(?<=[.!?])\s+", mid):
        if any(bad.lower() in sent.lower() for bad in FILLER_PHRASES): continue
        cleaned.append(sent)
    return " ".join(cleaned).strip()

def _stem_focus(statement: str) -> str:
    keys = re.findall(
        r"\b(labour|labor|capital|land|entrepreneurship|knowledge|technology|primary|secondary|tertiary|GDP|profit|break-even|NPO|not-for-profit|micro|small|medium|SME|MSME|turnover|balance sheet|local|regional|national|international|multinational|globalisation|globalization|stakeholder|shareholder|owner|manager|employee|customer|supplier|winery|vineyard|bakery|dairy|workshop|repair|mining|farming|banking|insurance|coaching)\b",
        statement, re.I)
    seen, out = set(), []
    for k in keys:
        kl = k.lower()
        if kl not in seen:
            seen.add(kl); out.append(k)
    return ", ".join(out[:4])

def _mid_aligns(mid: str, statement: str, truth: bool) -> bool:
    if not mid or len(mid) < 20: return False
    ml, sl = mid.lower(), statement.lower()
    if truth:
        if any(w in sl for w in ("outside", "exclud", "irrelevant", "alone", "only", "never", "regardless", "guarantees")):
            if any(w in ml for w in ("still supply", "still count", "combin", "alongside", "include", "remains capital")):
                return False
        if any(w in ml for w in ("the statement is false", "overclaim", "misstates", "fails")): return False
    else:
        if "the statement is true" in ml: return False
    if sl.rstrip(".") in ml: return False
    return True

def expand_msme_numeric(statement: str, mid: str, truth: bool) -> str | None:
    s = statement.lower()
    if not any(k in s for k in ("micro", "small", "medium", "€", "euro", "turnover", "balance sheet", "staff", "employee", "sme", "msme")):
        return None
    paras = []
    if mid: paras.append(mid.rstrip(".") + ".")
    if "micro" in s:
        paras.append("Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.")
    if re.search(r"\bsmall\b", s) and "micro" not in s:
        paras.append("EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.")
    if "medium" in s:
        paras.append("EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.")
    if "99" in s or "ninety-nine" in s:
        paras.append("Roughly ninety-nine percent of businesses registered in the EU fall inside the SME size classes — micro, small, or medium.")
    m_turn = re.search(r"€\s*([\d.,]+)\s*m", statement, re.I)
    m_staff = re.search(r"(\d[\d,]*)\s*(?:staff|employees|people|workers)", statement, re.I)
    if m_staff and m_turn:
        staff = int(m_staff.group(1).replace(",", "")); turn = float(m_turn.group(1).replace(",", ""))
        paras.append(f"Here the figures are about {staff:g} staff and €{turn:g}m turnover — compare each with the relevant ceiling before classifying.")
        if staff < 10 and turn > 2:
            paras.append(f"Staff {staff:g} fits the micro headcount ceiling (<10), but turnover €{turn:g}m exceeds the €2m micro financial cap, so micro status fails on the financial limb.")
        elif staff < 50 and turn > 10:
            paras.append(f"Staff {staff:g} fits the small headcount ceiling (<50), but turnover €{turn:g}m exceeds the €10m small financial cap.")
    if not truth and any(w in s for w in ("alone", "regardless", "sufficient", "guarantees")):
        paras.append("The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.")
    seen, out = set(), []
    for p in paras:
        if p not in seen: seen.add(p); out.append(p)
    body = "\n\n".join(out)
    return body if len(body) >= 120 else None

def concept_lede(subsection: str, statement: str) -> str:
    sl = statement.lower(); bits = []
    if subsection == "3.1":
        if any(w in sl for w in ("labour", "labor", "human resource", "picker", "technician", "handler", "engineer", "apprentice", "trainer", "operator", "staff time", "crew")):
            if "only" in sl and any(w in sl for w in ("manual", "shop-floor", "manufacturing floor", "permanent")):
                bits.append("Labour means all human resources used in production — manual and office work, permanent and seasonal, manufacturing and services. Narrowing it to one contract type or workplace role misstates the factor.")
            elif any(w in sl for w in ("seasonal", "weeks", "temporary", "freelance", "volunteer")):
                bits.append("Labour classification turns on whether people supply effort to production, not on contract length. Seasonal and freelance workers still count as labour while they work.")
            else:
                bits.append("Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible.")
        if any(w in sl for w in ("capital", "machine", "equipment", "van", "truck", "robot", "inventory", "spare", "leased", "hire-purchase", "cash", "working capital", "barrel", "tooling", "pasteuris")):
            if any(w in sl for w in ("leased", "rent", "hire-purchase")):
                bits.append("Capital is defined by productive use of produced means of production (and operating finance), not by ownership title. Leased or hire-purchase equipment still functions as capital while in use.")
            elif "land because" in sl or "become land" in sl or re.search(r"\bare land\b", sl):
                bits.append("Land is the natural-resource factor; manufactured tools, machines, barrels, and vehicles are capital even when they stand on farmland or travel outdoors.")
            elif any(w in sl for w in ("financial", "cash", "payroll", "working capital")):
                bits.append("Capital includes financial resources used in production — working cash and funds that bridge payroll — alongside plant and equipment.")
            elif not any("Capital is defined" in b or "Capital includes" in b or "Capital covers" in b for b in bits):
                bits.append("Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.")
        if any(w in sl for w in ("land", "vineyard", "mineral", "forest", "timber", "water", "soil", "ore", "topsoil")):
            if not any("Land is the natural" in b or "Land as a factor" in b for b in bits):
                bits.append("Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.")
        if any(w in sl for w in ("entrepreneur", "coordinat", "founder")) or ("owner" in sl and "risk" in sl):
            bits.append("Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.")
        if any(w in sl for w in ("knowledge", "technology", "software", "know-how", "fermentation", "diagnostic", "licence", "license")):
            bits.append("Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.")
        if any(w in sl for w in ("combin", "dominant", "only labour", "without other", "single factor", "one dominant", "irrelevant")):
            bits.append("Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.")
        if not bits:
            bits.append("Factors of production are land, labour, capital, entrepreneurship, and often knowledge and technology, combined to create goods and services.")
    elif subsection == "3.2":
        if "primary" in sl:
            bits.append("Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.")
        if any(w in sl for w in ("secondary", "smelt", "manufactur", "assembl", "mill", "fabricat")):
            bits.append("Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.")
        if any(w in sl for w in ("tertiary", "banking", "insurance", "coach", "retail", "service", "lift pass", "instruction")):
            bits.append("Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.")
        if any(w in sl for w in ("gdp", "wellbeing", "well-being", "disaster", "rebuild")):
            bits.append("GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.")
        if not bits:
            bits.append("Sector classification follows the stage of activity — extraction, manufacturing, or services — not whether the output feels basic or where the premises sit.")
    elif subsection == "3.3":
        if any(w in sl for w in ("not-for-profit", "npo", "donation", "relief", "humanitarian")):
            bits.append("Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.")
        elif any(w in sl for w in ("break-even", "covering costs alone", "matching expenses exactly")):
            bits.append("Profit-oriented firms seek a surplus of revenue over total costs, not merely break-even. Covering costs alone is a floor, not the usual long-run commercial goal.")
        elif any(w in sl for w in ("reinvest", "retained", "equipment upgrade", "new oven", "durability")):
            bits.append("Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.")
        elif any(w in sl for w in ("demand alone", "guarantees profit", "regardless of expense")):
            bits.append("Profit compares revenue with total costs and expenses. Strong demand raises the chance of sales, but costs can still erase any surplus.")
        else:
            bits.append("Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.")
    elif subsection == "3.4":
        if "micro" in sl:
            bits.append("EU micro enterprises employ fewer than ten people and must also meet a financial alternative: turnover ≤ €2m or balance sheet ≤ €2m. Staff fit without financial fit is not enough.")
        elif "medium" in sl:
            bits.append("EU medium enterprises employ fewer than 250 people and must also meet turnover ≤ €50m or balance sheet ≤ €43m. International sales alone do not define medium status.")
        elif "small" in sl or "sme" in sl or "msme" in sl:
            bits.append("EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.")
        else:
            bits.append("EU MSME size classes combine a staff ceiling with a financial alternative (turnover or balance sheet). Staff alone never completes the test.")
    elif subsection == "3.5":
        if any(w in sl for w in ("local", "regional")):
            bits.append("Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.")
        if "national" in sl and "international" not in sl and "multi" not in sl:
            bits.append("National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.")
        if any(w in sl for w in ("international", "multinational", "globalisation", "globalization")):
            bits.append("International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.")
        if not bits:
            bits.append("Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.")
    elif subsection == "3.6":
        if any(w in sl for w in ("stakeholder", "shareholder")):
            bits.append("Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.")
        if "owner" in sl or ("profit" in sl and "risk" in sl):
            bits.append("Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.")
        if any(w in sl for w in ("manager", "employee", "staff", "job security", "wage")):
            bits.append("Managers and employees are stakeholders because pay, promotion, and job security depend on the firm's continued success. Receiving wages does not end that interest.")
        if not bits:
            bits.append("Stakeholders are parties affected by or interested in the business, broader than shareholders alone.")
    else:
        bits.append("Apply the chapter definition carefully to every scope word in the claim.")
    seen, out = set(), []
    for b in bits:
        if b not in seen: seen.add(b); out.append(b)
    return " ".join(out)

def _application(statement: str, truth: bool, focus: str) -> str:
    pin = statement.rstrip(".")
    if len(pin) > 140: pin = pin[:137] + "…"
    focus_bit = f" ({focus})" if focus else ""
    if truth:
        return f"On this stem{focus_bit}, the keyed answer treats the sentence as a correct application of that idea: «{pin}»."
    if any(q in statement.lower() for q in ("always", "never", "only", "cannot", "regardless", "guarantees", "alone", "entirely")):
        return f"The sentence overreaches with absolute scope{focus_bit}: «{pin}». Once the textbook criterion is restored, those restricting words no longer hold."
    if "because" in statement.lower():
        return f"The reason clause does not justify the category it assigns{focus_bit}: «{pin}». Cause and label come apart under the chapter definition."
    return f"The claim mislabels the category or reverses the comparison{focus_bit}: «{pin}». Swap in the correct test and the assertion fails."

def deepen_letter(subsection: str, statement: str, truth: bool, old_expl: str, context: str = "") -> str:
    mid = extract_mid(old_expl)
    header = "TRUE —" if truth else "FALSE —"
    closer = "The statement is true." if truth else "The statement is false."
    if subsection == "3.4":
        numeric = expand_msme_numeric(statement, mid if _mid_aligns(mid, statement, truth) else "", truth)
        if numeric:
            text = f"{header} {numeric.strip()}\n\n{closer}"
            return re.sub(r"\n{3,}", "\n\n", text).strip() + "\n"
    lede = concept_lede(subsection, statement)
    chunks = [lede]
    focus = _stem_focus(statement)
    if _mid_aligns(mid, statement, truth):
        mid_clean = mid[0].upper() + mid[1:]
        if not mid_clean.endswith("."): mid_clean += "."
        if mid_clean.lower()[:50] not in lede.lower():
            chunks.append(mid_clean)
    else:
        chunks.append(_application(statement, truth, focus))
    ctx = (context or "").strip()
    if ctx and len(ctx) > 40:
        cue = re.sub(r"^Consider\s+", "", ctx, flags=re.I)
        cue = re.sub(r"\s*Evaluate the following.*$", "", cue, flags=re.I).strip()
        if cue and len(cue) < 160 and not re.match(r"^(Review|Analyze|Analyse)\b", cue, re.I):
            if cue.lower() not in lede.lower():
                pick = sum(ord(c) for c in statement) % 2
                if truth:
                    hooks = (f"In the case setting — {cue[0].lower() + cue[1:].rstrip('.')} — that reading fits the facts given.",
                             f"The scenario ({cue.rstrip('.')}) supports that classification.")
                else:
                    hooks = (f"In the case setting — {cue[0].lower() + cue[1:].rstrip('.')} — the sentence mislabels the category or overreaches.",
                             f"Against the scenario ({cue.rstrip('.')}), the claim attaches the wrong label.")
                chunks.append(hooks[pick])
    pick = sum(ord(c) for c in statement) % 3
    if truth:
        teach = ("Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.",
                 "The sentence therefore reports the concept accurately for this item.",
                 "Under that classification the assertion describes the situation correctly.")
    else:
        sl = statement.lower()
        if any(q in sl for q in ("always", "never", "only", "cannot", "regardless", "guarantees", "alone")):
            teach = ("The absolute wording is what breaks the claim once the correct test is applied.",
                     "One clear counterexample under the right criterion is enough to reject the sentence.",
                     "Those restricting words stretch a limited idea past what the definition allows.")
        else:
            teach = ("Swap in the textbook criterion and the sentence no longer describes the case.",
                     "The mislabelled category or reversed comparison is enough to reject the claim.",
                     "Once the defining feature is restored, the assertion falls away.")
    chunks.append(teach[pick])
    body = "\n\n".join(chunks)
    text = f"{header} {body.strip()}\n\n{closer}"
    return re.sub(r"\n{3,}", "\n\n", text).strip() + "\n"

def audit_case(case: dict) -> list[str]:
    errs = []; key, expls = case["answer_key"], case["tactical_explanations"]
    if len(expls) != 5 or len(key) != 5: return [f"{case['case_id']}: expected 5"]
    for i, (k, e) in enumerate(zip(key, expls)):
        letter = "ABCDE"[i]
        want = "TRUE —" if k else "FALSE —"
        if not e.startswith(want): errs.append(f"{case['case_id']} {letter}: opener")
        closer = "The statement is true." if k else "The statement is false."
        if not e.rstrip().endswith(closer): errs.append(f"{case['case_id']} {letter}: closer")
        for bad in FILLER_PHRASES:
            if bad in e: errs.append(f"{case['case_id']} {letter}: filler")
        body = e[len(want):].strip()
        if body.endswith(closer): body = body[: -len(closer)].strip()
        if len(body) < 120: errs.append(f"{case['case_id']} {letter}: thin ({len(body)})")
    return errs

def deepen_case(case: dict) -> dict:
    sub, ctx = case["subsection"], case.get("context") or ""
    case["tactical_explanations"] = [
        deepen_letter(sub, stmt, bool(truth), old, ctx)
        for stmt, truth, old in zip(case["statements"], case["answer_key"], case["tactical_explanations"])
    ]
    return case

def load(): return json.loads(PATH.read_text(encoding="utf-8"))
def save(data): PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

def deepen_range(start_id: str, end_id: str, *, write: bool = True):
    data = load(); ids, capturing = [], False
    for c in data:
        if c["case_id"] == start_id: capturing = True
        if capturing: ids.append(c["case_id"])
        if c["case_id"] == end_id: break
    by_id = {c["case_id"]: c for c in data}
    ok, errs = [], []
    for cid in ids:
        case = by_id[cid]; deepen_case(case); e = audit_case(case)
        if e: errs.extend(e)
        else: ok.append(cid); print(f"OK {cid}")
    if errs: return ok, errs
    if write: save(data)
    return ok, errs
