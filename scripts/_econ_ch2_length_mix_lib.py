"""Helpers for economics length-mix rewrites."""
from __future__ import annotations
import re

CLOSER_RE = re.compile(r"\s*So the statement is (True|False)\.?\s*$", re.I)


def wrap(body: str, truth: bool) -> str:
    v = "True" if truth else "False"
    return body.rstrip() + f"\n\nSo the statement is {v}."


def body_len(e: str) -> int:
    return len(CLOSER_RE.sub("", e).strip())


def ensure_long(body: str, extra: str) -> str:
    b = body.strip()
    if len(b) >= 360:
        return b
    b2 = b + "\n\n" + extra.strip()
    return b2


def ensure_med(body: str, extra: str) -> str:
    b = body.strip()
    if 160 <= len(b) <= 320:
        return b
    if len(b) < 160:
        b = (b + " " + extra.strip()).strip()
    if len(b) > 320:
        b = b[:317].rsplit(" ", 1)[0] + "."
    return b


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
