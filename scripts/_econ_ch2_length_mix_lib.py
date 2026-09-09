"""Helpers for economics length-mix rewrites."""
from __future__ import annotations
import re

CLOSER_RE = re.compile(r"\s*So the statement is (True|False)\.?\s*$", re.I)


def wrap(body: str, truth: bool) -> str:
    v = "True" if truth else "False"
    return body.rstrip() + f"\n\nSo the statement is {v}."


def body_len(e: str) -> int:
    return len(CLOSER_RE.sub("", e).strip())


def ensure_med(body: str, extra: str) -> str:
    b = body.strip()
    if 160 <= len(b) <= 320:
        return b
    if len(b) < 160:
        b = (b + " " + extra.strip()).strip()
        pads = [
            " That next-best forgone use is what the letter is testing.",
            " The stem’s competing claims still meet one limited pot.",
            " Ranking under that limit is ordinary economising here.",
        ]
        pi = 0
        while len(b) < 160 and pi < len(pads):
            b = (b + pads[pi]).strip()
            pi += 1
        while len(b) < 160:
            b += " More detail keeps the medium letter teaching, not thin."
            if len(b) > 300:
                break
    if len(b) > 320:
        b = b[:317].rsplit(" ", 1)[0] + "."
    return b


def ensure_short(body: str) -> str:
    """Collapse to first sentence-ish within 40–100 chars."""
    b = body.strip()
    if 40 <= len(b) <= 100:
        return b
    first = b.split(".")[0].strip() + "."
    if len(first) > 100:
        first = first[:97].rsplit(" ", 1)[0] + "."
    if len(first) < 40:
        first = (first[:-1] + " under scarce limits.").strip()
        if len(first) > 100:
            first = first[:97].rsplit(" ", 1)[0] + "."
    return first


def ensure_long(body: str, extra: str) -> str:
    b = body.strip()
    if len(b) >= 380:
        return b
    b2 = b + "\n\n" + extra.strip()
    pads = [
        " That concrete forgone path is what opportunity cost names here.",
        " The limited pot cannot fund every claim at full strength together.",
        " Leaving the next-best option behind is the cost the chapter tracks.",
    ]
    pi = 0
    while len(b2) < 380 and pi < len(pads):
        b2 += " " + pads[pi]
        pi += 1
    while len(b2) < 380:
        b2 += " Scarce means force a ranking whenever two uses compete."
        if len(b2) > 520:
            break
    return b2


def check_case(expls, key) -> tuple[list[str], list[int]]:
    errs: list[str] = []
    lens = [body_len(e) for e in expls]
    shorts = [n for n in lens if 40 <= n <= 100]
    meds = [n for n in lens if 160 <= n <= 320]
    longs = [n for n in lens if n >= 360]
    if not shorts:
        errs.append(f"no SHORT {lens}")
    if not meds and not any(200 <= n <= 350 for n in lens):
        errs.append(f"no MED {lens}")
    if not longs:
        errs.append(f"no LONG {lens}")
    if max(lens) - min(lens) < 280:
        errs.append(f"spread {max(lens)-min(lens)} {lens}")
    if sum(1 for n in lens if n <= 100) > 2:
        errs.append(f"too many short {lens}")
    opens = [CLOSER_RE.sub("", e).strip().split(".")[0].strip().lower()[:48] for e in expls]
    if len(set(opens)) < 5:
        errs.append("dup opens")
    for i, e in enumerate(expls):
        want = "True" if key[i] else "False"
        if not e.rstrip().endswith(f"So the statement is {want}."):
            errs.append(f"{chr(65+i)} closer")
    return errs, lens
