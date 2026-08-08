# -*- coding: utf-8 -*-
"""
Selectively deepen Ch5 Overview + A–E by real complexity — not everywhere.

light  — lean (cap body paras)
medium — +1 origin-of-numbers para in Overview; A–E only when fiddly
heavy  — same + optional extra A–E para on hard false / conversion traps
"""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed")
OUT = ROOT / "textbook" / "output"
RAW = json.loads((OUT / "linear_eq_60_raw.json").read_text(encoding="utf-8"))
OV = OUT / "ch5_expl_overrides.json"

INLINE_JUNK = re.compile(
    r"\s*\*\*(?:Related model relation|Watch|Why it fails|Direct check|Where it breaks|Setup|Computation)\.?\*\*"
    r"[^\n]*",
    flags=re.I,
)
FILLER_END = re.compile(
    r"\n+"
    r"(?:Substituting the solved unknowns into the scenario described by the statement[^\n]*"
    r"|Compare that recomputed figure with the wording of the statement[^\n]*)"
    r"(?:\n(?!\s*\*\*|\s*$)[^\n]*)*",
    flags=re.I,
)
BOILER_LEAD = re.compile(
    r"^(?:This claim holds under the solved system|This claim does not hold once the system is solved correctly)"
    r"\.[^\n]*\n+",
    flags=re.I,
)

COMPLEX_MARKERS = [
    (r"\bfee\b|\btax\b|\bdelivery\b", 0.6),
    (r"\bforecast\b|\bunused\b|\bdistractor\b|\bcannot be used\b", 1.0),
    (r"\bhead[\s-]?start\b", 0.8),
    (r"\bovertime\b|\bpremium\b", 0.7),
    (r"\bwaste\b|\busable\b", 0.6),
    (r"\bconvert|\bmiles?\b|\blitres?\b|\bml\b", 0.7),
    (r"\baudit\b|\bdiscrepan", 0.8),
    (r"\bpercent|\b%\b|\bmarkup\b|\binterest\b", 0.4),
    (r"\bmix\b|\bblend\b|\bsuspension\b|\bconcentration\b", 0.5),
]


def flatten(s: str) -> str:
    return re.sub(r"\s+", " ", (s or "").strip())


def band(task: dict) -> str:
    d = float(task.get("difficulty_10") or 5)
    blob = f"{task.get('context') or ''} {task.get('model') or ''} {task.get('title') or ''}".lower()
    score = d
    for rx, bump in COMPLEX_MARKERS:
        if re.search(rx, blob, flags=re.I):
            score += bump
    if score < 3.5:
        return "light"
    if score < 7.0:
        return "medium"
    return "heavy"


def clean_text(s: str) -> str:
    s = INLINE_JUNK.sub("", s)
    s = FILLER_END.sub("", s)
    s = BOILER_LEAD.sub("", s)
    s = re.sub(r"\n{3,}", "\n\n", s)
    return s.strip()


def paras_overlap(a: str, b: str) -> bool:
    def numset(s: str) -> set[str]:
        out: set[str] = set()
        for x in re.findall(r"\d+(?:\.\d+)?", s):
            try:
                out.add(f"{float(x):.4g}")
            except ValueError:
                out.add(x)
        return out

    shared = numset(a) & numset(b)
    if len(shared) >= 3:
        return True
    ka = re.sub(r"[^a-z0-9]+", "", a.lower())
    kb = re.sub(r"[^a-z0-9]+", "", b.lower())
    if len(ka) >= 40 and (ka[:50] in kb or kb[:50] in ka):
        return True
    return False


GENERIC_FILLER = (
    "figure in the claim is not an independent",
    "figure in the claim is rebuilt",
    "substituting the solved unknowns into the scenario",
    "the usual slip is treating a coefficient",
    "claimed figure follows from substituting",
    "rebuild the expression from the solved system rather than treating",
    "rebuild the claimed figure from the solved unknowns",
)


def split_header_body(expl: str) -> tuple[str, list[str]]:
    expl = clean_text(expl)
    parts = [p.strip() for p in re.split(r"\n\s*\n", expl) if p.strip()]
    if not parts:
        return "", []
    header = parts[0]
    deduped: list[str] = []
    for p in parts[1:]:
        if len(p) < 12:
            continue
        hit = False
        for i, prev in enumerate(deduped):
            if paras_overlap(p, prev):
                if len(p) > len(prev):
                    deduped[i] = p
                hit = True
                break
        if not hit:
            deduped.append(p)
    return header, deduped


def stmt_needs_extra(stmt: str, verdict: bool, b: str) -> bool:
    s = stmt.lower()
    fiddly = any(
        k in s
        for k in (
            "if ",
            "had ",
            "instead",
            "would",
            "more than",
            "less than",
            "ratio",
            "%",
            "convert",
            "forecast",
            "waste",
            "overtime",
            "fee",
            "audit",
            "blend",
        )
    )
    if b == "light":
        return False
    if b == "medium":
        return fiddly or not verdict
    return fiddly or not verdict or True  # heavy: allow when thin, capped later


def origin_paragraph(task: dict) -> str:
    model = task.get("model") or ""
    ctx = flatten(task.get("context") or "")
    lines = [ln.strip() for ln in model.splitlines() if "=" in ln][:2]
    bits: list[str] = []
    blob = (ctx + " " + model).lower()
    if re.search(r"fee|tax|delivery", blob):
        bits.append(
            "The printed totals are not raw unknown×quantity rows: any shared fee or tax "
            "is peeled off first, and only then do the remaining amounts become the right-hand sides."
        )
    if re.search(r"forecast|cannot be used|distractor", blob):
        bits.append(
            "Only the observation rows that report actual measured totals enter the system; "
            "forecast or unused rows stay out of the coefficients."
        )
    if re.search(r"head[\s-]?start|overtime|premium", blob):
        bits.append(
            "Time coefficients come from the story's clocks—head-starts, overtime hours, "
            "or duration multipliers—not from the headline total alone."
        )
    if re.search(r"convert|mile|litre|\bml\b", blob):
        bits.append(
            "Before writing coefficients, every quantity is converted into one shared unit "
            "(for example miles→km or L→mL) so the left-hand sides match the right-hand side units."
        )
    if re.search(r"waste|usable", blob):
        bits.append(
            "Waste allowances change how many units are purchased relative to usable amounts; "
            "the equations follow the as-ordered quantities that actually appear on the invoice."
        )
    if not bits and lines:
        bits.append(
            "Each left-hand coefficient is a quantity taken straight from an observation row or bill; "
            "the matching right-hand side is that observation's total in the same units."
        )
    return " ".join(bits[:2])


def deepen_overview(ov: str, task: dict, b: str) -> str:
    ov = clean_text(ov)
    if b == "light":
        return ov
    origin = origin_paragraph(task)
    if not origin:
        return ov
    if "peeled off first" in ov or "Time coefficients come from" in ov or "converted into one shared unit" in ov:
        return ov
    m = re.search(r"(\*\*Part 1:[^*]+\*\*\s*\n\n)([\s\S]*?)(\n\n\*\*\d+\.)", ov)
    if not m:
        return ov
    mid = m.group(2)
    if origin[:48].lower() in mid.lower():
        return ov
    inserted = m.group(1) + mid.rstrip() + "\n\n" + origin + m.group(3)
    return ov[: m.start()] + inserted + ov[m.end() :]


def deepen_expl(expl: str, stmt: str, verdict: bool, task: dict, b: str) -> str:
    header, body = split_header_body(expl)
    if not header:
        return clean_text(expl)

    body = [p for p in body if not any(g in p.lower() for g in GENERIC_FILLER)]

    if b == "light":
        max_paras = 2
    elif b == "medium":
        max_paras = 3 if stmt_needs_extra(stmt, verdict, b) else 2
    else:
        max_paras = 3 if stmt_needs_extra(stmt, verdict, b) else 2

    body = body[:max_paras]

    # Only invent prose when there is almost nothing left after cleanup
    if stmt_needs_extra(stmt, verdict, b) and len(body) == 0:
        body.append(
            "Rebuild the claimed figure from the solved unknowns and the quantities "
            "named in the statement, then compare with the threshold in the wording."
        )
    elif (
        b == "heavy"
        and not verdict
        and stmt_needs_extra(stmt, verdict, b)
        and len(body) == 1
        and len(body[0]) < 120
        and not re.search(r"\$[^$]*=", body[0])
        and len(body) < max_paras
    ):
        body.append(
            "Rebuild the expression from the solved system rather than treating a "
            "coefficient, fee, or converted unit as if it were already the final answer."
        )

    return "\n\n".join([header, *body[:max_paras]])


def main() -> None:
    data = json.loads(OV.read_text(encoding="utf-8"))
    counts = {"light": 0, "medium": 0, "heavy": 0}
    for t in RAW:
        n = t["num"]
        key = str(n)
        b = band(t)
        counts[b] += 1
        item = data.get(key) or {}
        item["solution_overview"] = deepen_overview(item.get("solution_overview") or "", t, b)
        stmts = t.get("statements") or []
        keys = t.get("answer_key") or []
        expls = list(item.get("tactical_explanations") or [])
        while len(expls) < len(stmts):
            expls.append("")
        for i, stmt in enumerate(stmts):
            verdict = bool(keys[i]) if i < len(keys) else True
            expls[i] = deepen_expl(expls[i], stmt, verdict, t, b)
        item["tactical_explanations"] = expls
        data[key] = item

    OV.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("bands", counts)
    for n in (1, 4, 15, 43, 53):
        t = next(x for x in RAW if x["num"] == n)
        e = data[str(n)]["tactical_explanations"][1]
        paras = [p for p in e.split("\n\n") if p.strip()]
        has_origin = "peeled off" in data[str(n)]["solution_overview"] or "coefficients" in data[str(n)][
            "solution_overview"
        ].lower() and ("Time coefficients" in data[str(n)]["solution_overview"] or "converted into" in data[str(n)]["solution_overview"] or "forecast or unused" in data[str(n)]["solution_overview"] or "Waste allowances" in data[str(n)]["solution_overview"] or "observation row" in data[str(n)]["solution_overview"])
        print(f"\n=== {n} [{band(t)}] A–E body≈{len(paras)-1} overview_origin={has_origin}")
        print(e[:420], "…")


if __name__ == "__main__":
    main()
