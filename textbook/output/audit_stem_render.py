# -*- coding: utf-8 -*-
"""
Full stem audit: simulate FlashcardMath dollar-splitting on every Ch5 (+Ch13)
context, statement, overview, and A–E explanation. Flag:
  - currency…prose…currency swallowed as one math span
  - math spans that contain English prose (crooked italic KaTeX)
  - odd unpaired $ after accounting for currency
"""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CH5 = ROOT / "src" / "data" / "math-ch5-linear-equations.ts"
CH13 = ROOT / "src" / "data" / "math-cases-ch13-binomial.json"
OV = ROOT / "textbook" / "output" / "ch5_expl_overrides.json"
REPORT = Path(__file__).with_name("_stem_render_audit.txt")

CURRENCY = re.compile(
    r"\$\d+(?:,\d{3})*(?:\.\d+)?(?:/[A-Za-z%]+)?(?!\.\d)(?!,\d)(?![0-9A-Za-z+\-*=(\\{^_$])"
)


def looks_like_math_inner(inner: str) -> bool:
    t = (inner or "").strip()
    if not t:
        return False
    if re.search(r"[A-Za-z]{3,}\s+[A-Za-z]{3,}", t):
        return False
    if (
        "=" not in t
        and re.search(
            r"\b(?:Shipment|Invoice|Account|Week|Batch|Season|Client|Fund|Route|Day|Point|Job|Branch|cost|total|mixed|price|rate|fee|balance|units?|kg|litres?|miles?)\b",
            t,
            re.I,
        )
    ):
        return False
    if re.search(r"[A-Za-z]{4,}", t) and "=" not in t and not re.search(r"\\[a-zA-Z]+", t):
        return False
    if re.search(r"[=+×·\-/^\\()_]", t) and re.search(r"[A-Za-z0-9]", t):
        return True
    if re.fullmatch(r"[+\-]?\d+(?:\.\d+)?", t):
        return True
    if (
        len(t) <= 48
        and re.search(r"[a-zA-Z]", t)
        and re.search(r"\d", t)
        and re.fullmatch(r"[+\-\d.a-zA-Z\s×·*^/()]+", t)
    ):
        return True
    return False


def split_math(text: str) -> list[tuple[str, str]]:
    """Return list of (kind, value) with kind in text|inline|display."""
    s = (
        (text or "")
        .replace("\\(", "$")
        .replace("\\)", "$")
        .replace("\\[", "$$")
        .replace("\\]", "$$")
    )
    parts: list[tuple[str, str]] = []
    i = 0
    buf: list[str] = []

    def flush() -> None:
        if buf:
            parts.append(("text", "".join(buf)))
            buf.clear()

    while i < len(s):
        if s.startswith("$$", i):
            end = s.find("$$", i + 2)
            if end != -1:
                flush()
                parts.append(("display", s[i + 2 : end].strip()))
                i = end + 2
                continue
        if s[i] == "$":
            m = CURRENCY.match(s, i)
            if m:
                after = s.find("$", m.end())
                between = "" if after == -1 else s[i + 1 : after]
                if not (after != -1 and looks_like_math_inner(between)):
                    buf.append(m.group(0))
                    i = m.end()
                    continue
            end = s.find("$", i + 1)
            if end != -1:
                inner = s[i + 1 : end]
                if looks_like_math_inner(inner):
                    flush()
                    parts.append(("inline", inner.strip()))
                    i = end + 1
                    continue
        buf.append(s[i])
        i += 1
    flush()
    if not parts:
        parts.append(("text", s))
    return parts


def old_looks_like_math(inner: str) -> bool:
    """Pre-fix detector — used to find stems that WERE broken in production."""
    t = (inner or "").strip()
    if not t:
        return False
    if re.search(r"[A-Za-z]{3,}\s+[A-Za-z]{3,}", t):
        return False
    if re.search(r"[=+×·\-/^\\()_]", t):
        return True
    if re.search(r"[A-Za-z]", t) and re.search(r"\d", t):
        return True
    if re.fullmatch(r"[+\-]?\d+(?:\.\d+)?", t):
        return True
    return False


def find_swallow_candidates(text: str) -> list[str]:
    """Dollar pairs that currency…prose…currency would be misread by old logic."""
    hits = []
    s = text or ""
    for m in re.finditer(r"\$\d", s):
        # mimic old path: currency match then check between next $
        cm = CURRENCY.match(s, m.start())
        if not cm:
            continue
        after = s.find("$", cm.end())
        if after == -1:
            continue
        between = s[m.start() + 1 : after]
        if old_looks_like_math(between) and not looks_like_math_inner(between):
            hits.append(between[:90].replace("\n", " "))
    return hits


def extract_ch5_tasks(ts: str) -> list[dict]:
    """Rough extract of task objects from TS export (fields we need)."""
    tasks = []
    # Split on task case_id boundaries roughly
    blocks = re.split(r"\n  \{\n", ts)
    for b in blocks[1:]:
        def field(name: str) -> str:
            m = re.search(rf"{name}: `((?:\\`|[^`])*)`", b)
            if m:
                return m.group(1).replace("\\`", "`").replace("\\n", "\n")
            m = re.search(rf'{name}: "((?:\\"|[^"])*)"', b)
            return m.group(1).replace('\\"', '"') if m else ""

        def field_list(name: str) -> list[str]:
            m = re.search(rf"{name}: \[([\s\S]*?)\],\n", b)
            if not m:
                return []
            return re.findall(r"`((?:\\`|[^`])*)`", m.group(1))

        case_id = field("case_id")
        if not case_id:
            continue
        tasks.append(
            {
                "case_id": case_id,
                "title": field("title"),
                "context": field("context"),
                "statements": field_list("statements"),
                "solution_overview": field("solution_overview"),
                "tactical_explanations": field_list("tactical_explanations"),
            }
        )
    return tasks


def audit_text(where: str, text: str) -> list[str]:
    issues = []
    if not text:
        return issues
    swallow = find_swallow_candidates(text)
    for sw in swallow:
        issues.append(f"{where}: OLD-SWALLOW (was KaTeX prose): `{sw}…`")

    parts = split_math(text)
    for kind, val in parts:
        if kind not in ("inline", "display"):
            continue
        # New parser should never emit prose-heavy math; if it does, flag hard
        if re.search(r"[A-Za-z]{3,}\s+[A-Za-z]{3,}", val) and "=" not in val:
            issues.append(f"{where}: NEW-MATH-PROSE `{val[:80]}`")
        if re.search(
            r"\b(?:Shipment|Invoice|cost|total|mixed)\b", val, re.I
        ) and "=" not in val:
            issues.append(f"{where}: NEW-MATH-STEM-WORD `{val[:80]}`")

    # Unpaired $ left as text (single orphans)
    for kind, val in parts:
        if kind != "text":
            continue
        # After removing currency, leftover $
        tmp = CURRENCY.sub("¤", val)
        if tmp.count("$") % 2:
            issues.append(f"{where}: unpaired-$ in text `{val[:70]}`")

    return issues


def main() -> None:
    ch5_ts = CH5.read_text(encoding="utf-8")
    tasks = extract_ch5_tasks(ch5_ts)
    print(f"extracted Ch5 tasks: {len(tasks)}")

    all_issues: list[tuple[str, str]] = []
    meridian = None
    for t in tasks:
        if "Meridian Commodities" in (t.get("title") or ""):
            meridian = t
        cid = t["case_id"]
        for issue in audit_text(f"{cid}/context", t.get("context") or ""):
            all_issues.append((cid, issue))
        for i, s in enumerate(t.get("statements") or []):
            for issue in audit_text(f"{cid}/stmt{chr(65+i)}", s):
                all_issues.append((cid, issue))
        for issue in audit_text(f"{cid}/overview", t.get("solution_overview") or ""):
            all_issues.append((cid, issue))
        for i, e in enumerate(t.get("tactical_explanations") or []):
            for issue in audit_text(f"{cid}/expl{chr(65+i)}", e):
                all_issues.append((cid, issue))

    if CH13.exists():
        ch13 = json.loads(CH13.read_text(encoding="utf-8"))
        for t in ch13.get("tasks") or []:
            cid = t.get("case_id") or t.get("id") or "?"
            for issue in audit_text(f"CH13/{cid}/context", t.get("context") or ""):
                all_issues.append((cid, issue))
            for i, s in enumerate(t.get("statements") or []):
                for issue in audit_text(f"CH13/{cid}/stmt{chr(65+i)}", s):
                    all_issues.append((cid, issue))

    swallow_n = sum(1 for _, i in all_issues if "OLD-SWALLOW" in i)
    new_bad = sum(1 for _, i in all_issues if i.startswith("NEW-") or "NEW-" in i)
    unpaired = sum(1 for _, i in all_issues if "unpaired" in i)

    print("=== STEM RENDER AUDIT ===")
    print(f"Ch5 tasks: {len(tasks)}")
    print(f"OLD-SWALLOW findings (broken before fix): {swallow_n}")
    print(f"NEW parser prose-as-math: {new_bad}")
    print(f"unpaired $ leftovers: {unpaired}")

    if meridian:
        print("\n--- Meridian context split (NEW) ---")
        for kind, val in split_math(meridian["context"]):
            print(f"  [{kind}] {val[:100]!r}")

    # Top swallow examples
    print("\n--- Sample OLD-SWALLOW (first 15) ---")
    shown = 0
    for cid, issue in all_issues:
        if "OLD-SWALLOW" in issue:
            print(f"  {issue}")
            shown += 1
            if shown >= 15:
                break

    lines = [
        "=== STEM RENDER AUDIT ===",
        f"Ch5 tasks: {len(tasks)}",
        f"OLD-SWALLOW: {swallow_n}",
        f"NEW prose-as-math: {new_bad}",
        f"unpaired: {unpaired}",
        "",
    ]
    for cid, issue in all_issues:
        lines.append(issue)
    REPORT.write_text("\n".join(lines), encoding="utf-8")
    print("\nwrote", REPORT)


if __name__ == "__main__":
    main()
