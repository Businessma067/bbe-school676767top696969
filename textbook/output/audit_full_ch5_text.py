# -*- coding: utf-8 -*-
"""
Full from-zero text audit of all 60 Ch5 tasks:
  context, statements A–E, solution_overview, tactical_explanations A–E.

Simulates FlashcardMath split + flags data-side mangling.
"""
from __future__ import annotations

import re
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CH5 = ROOT / "src" / "data" / "math-ch5-linear-equations.ts"
REPORT = Path(__file__).with_name("_full_text_audit.txt")

CURRENCY = re.compile(
    r"\$\d+(?:,\d{3})*(?:\.\d+)?(?:/[A-Za-z%]+)?(?!\.\d)(?!,\d)(?![0-9A-Za-z+\-*=<>≠≤≥(\\{^_$])"
)


def looks_like_math_inner(inner: str) -> bool:
    t = (inner or "").strip()
    if not t:
        return False
    if re.search(r"[A-Za-z]{3,}\s+[A-Za-z]{3,}", t):
        return False
    # Answer lines: Notebook = $3.50 | Pen = $1.80
    if "|" in t:
        return False
    if (
        not re.search(r"[=<>≠≤≥]", t)
        and re.search(
            r"\b(?:Shipment|Invoice|Account|Week|Batch|Season|Client|Fund|Route|Day|Point|Job|Branch|cost|total|mixed|price|rate|fee|balance|units?|kg|litres?|miles?)\b",
            t,
            re.I,
        )
    ):
        return False
    if (
        re.search(r"[A-Za-z]{4,}", t)
        and not re.search(r"[=<>≠≤≥]", t)
        and not re.search(r"\\[a-zA-Z]+", t)
    ):
        return False
    if re.search(r"[=<>≠≤≥+×·\-/^\\()_]", t) and re.search(r"[A-Za-z0-9]", t):
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


def extract_tasks(ts: str) -> list[dict]:
    tasks = []
    blocks = re.split(r"\n  \{\n", ts)
    for b in blocks[1:]:

        def field(name: str) -> str:
            m = re.search(rf"{name}: `((?:\\`|[^`])*)`", b)
            if m:
                return bytes(m.group(1), "utf-8").decode("unicode_escape") if False else m.group(1).replace("\\n", "\n").replace("\\`", "`")
            m = re.search(rf'{name}: "((?:\\"|[^"])*)"', b)
            return m.group(1).replace('\\"', '"') if m else ""

        def field_list(name: str) -> list[str]:
            m = re.search(rf"{name}: \[([\s\S]*?)\],\n", b)
            if not m:
                return []
            return [
                x.replace("\\n", "\n").replace("\\`", "`")
                for x in re.findall(r"`((?:\\`|[^`])*)`", m.group(1))
            ]

        case_id = field("case_id")
        if not case_id.startswith("MATH"):
            continue
        tasks.append(
            {
                "case_id": case_id,
                "title": field("title"),
                "context": field("context"),
                "tables_markdown": field("tables_markdown"),
                "statements": field_list("statements"),
                "solution_overview": field("solution_overview"),
                "tactical_explanations": field_list("tactical_explanations"),
            }
        )
    return tasks


def audit_chunk(where: str, text: str) -> list[str]:
    hits: list[str] = []
    if text is None:
        hits.append(f"{where}: NULL")
        return hits
    if not str(text).strip() and "tables" not in where:
        # empty context is ok only for placeholders; Ch5 shouldn't be empty
        if "context" in where or "overview" in where:
            hits.append(f"{where}: EMPTY")
        return hits

    t = text

    # --- data mangling ---
    if re.search(r"\*\*[^*]*[+\-×·/]\.\*\*", t):
        hits.append(f"{where}: dangling operator in bold title")
    if re.search(r"(?m)^\s*\.\d+\S*\s*$", t):
        hits.append(f"{where}: orphan .digit line")
    if re.search(r"(\d+\.\d+[a-zA-Z]\s*=\s*0)(?![.\d])", t):
        hits.append(f"{where}: truncated peel eq")
    if re.search(r"\$[^$\n]*\$\([^$)]*\)\$", t):
        hits.append(f"{where}: split-paren math `$…$(…) $`")
    if re.search(r"\$\s*=\s*", t):
        hits.append(f"{where}: orphan `$=`")
    if re.search(r"=\s*\d+\$\.\d+\$", t):
        hits.append(f"{where}: split decimal scar")
    if re.search(r"\*\*(Watch|Why it fails|Related model)\.", t, re.I):
        hits.append(f"{where}: leftover gimmick label")
    # jammed tokens often from PDF/KaTeX scars
    if re.search(r"\b\w{2,}(?:kg|total|mixed|Coffee|Cocoa|cost)\w", t, re.I):
        if re.search(r"(?:Shipment|mixed|total)\d|\dkg|kg\w|[a-z][A-Z]", t):
            hits.append(f"{where}: possible jammed tokens")

    # --- render simulation ---
    parts = split_math(t)
    for kind, val in parts:
        if kind not in ("inline", "display"):
            continue
        if re.search(r"[A-Za-z]{3,}\s+[A-Za-z]{3,}", val) and not re.search(r"[=<>≠≤≥]", val):
            hits.append(f"{where}: prose rendered as math `{val[:70]}`")
        if re.search(
            r"\b(?:Shipment|Invoice|cost|total|mixed)\b", val, re.I
        ) and not re.search(r"[=<>≠≤≥]", val):
            hits.append(f"{where}: stem-word in math `{val[:70]}`")

    # unpaired $ in remaining text after currency + math consumption
    for kind, val in parts:
        if kind != "text":
            continue
        tmp = CURRENCY.sub("¤", val)
        if tmp.count("$") % 2:
            hits.append(f"{where}: unpaired $ → `{val[:80].replace(chr(10), ' ')}`")

    # old swallow detector (currency…prose…currency with OLD liberal math detector)
    for m in re.finditer(r"\$\d", t):
        cm = CURRENCY.match(t, m.start())
        # use looser currency for OLD detection (without <> block) 
        cm_old = re.match(
            r"\$\d+(?:,\d{3})*(?:\.\d+)?(?:/\w+)?(?![0-9A-Za-z+\-*=(\\{^_$])",
            t[m.start() :],
        )
        if not cm_old:
            continue
        end_amt = m.start() + cm_old.end()
        after = t.find("$", end_amt)
        if after == -1:
            continue
        between = t[m.start() + 1 : after]
        # old: letter+digit ⇒ math
        old_math = bool(
            re.search(r"[=+×·\-/^\\()_]", between)
            or (re.search(r"[A-Za-z]", between) and re.search(r"\d", between))
        )
        new_math = looks_like_math_inner(between)
        if old_math and not new_math:
            # would have been swallowed before; confirm NEW does not
            pass  # counted in summary separately

    return hits


def find_old_swallows(text: str) -> list[str]:
    out = []
    t = text or ""
    for m in re.finditer(r"\$\d", t):
        cm_old = re.match(
            r"\$\d+(?:,\d{3})*(?:\.\d+)?(?:/\w+)?(?![0-9A-Za-z+\-*=(\\{^_$])",
            t[m.start() :],
        )
        if not cm_old:
            continue
        end_amt = m.start() + cm_old.end()
        after = t.find("$", end_amt)
        if after == -1:
            continue
        between = t[m.start() + 1 : after]
        old_math = bool(
            re.search(r"[=+×·\-/^\\()_]", between)
            or (re.search(r"[A-Za-z]", between) and re.search(r"\d", between))
        )
        if old_math and not looks_like_math_inner(between):
            out.append(between[:100].replace("\n", " "))
    return out


def main() -> None:
    tasks = extract_tasks(CH5.read_text(encoding="utf-8"))
    assert len(tasks) == 60, f"expected 60 tasks, got {len(tasks)}"

    by_cat: dict[str, list[str]] = defaultdict(list)
    field_counts = defaultdict(int)
    old_swallow_fields = 0
    missing_ae = []
    short_overview = []

    # spot checks
    samples = {}

    for t in tasks:
        cid = t["case_id"]
        fields = [
            ("context", t["context"]),
            ("tables", t.get("tables_markdown") or ""),
            ("overview", t["solution_overview"]),
        ]
        for i, s in enumerate(t["statements"]):
            fields.append((f"stmt{chr(65+i)}", s))
        expls = t["tactical_explanations"]
        if len(expls) != 5:
            missing_ae.append(f"{cid}: {len(expls)} A–E")
        for i, e in enumerate(expls):
            fields.append((f"expl{chr(65+i)}", e))

        if len((t["solution_overview"] or "").strip()) < 80:
            short_overview.append(cid)

        for name, text in fields:
            field_counts[name.split("0")[0] if False else name[:4]] += 1
            swallows = find_old_swallows(text)
            if swallows:
                old_swallow_fields += 1
                by_cat["old_swallow_fixed_by_parser"].append(
                    f"{cid}/{name}: `{swallows[0]}…`"
                )
            for hit in audit_chunk(f"{cid}/{name}", text):
                # classify
                if "prose rendered as math" in hit or "stem-word in math" in hit:
                    by_cat["CRITICAL_prose_as_math"].append(hit)
                elif "unpaired $" in hit:
                    by_cat["unpaired_$"].append(hit)
                elif "EMPTY" in hit:
                    by_cat["empty"].append(hit)
                elif any(
                    k in hit
                    for k in (
                        "dangling",
                        "orphan",
                        "truncated",
                        "split-paren",
                        "split decimal",
                        "gimmick",
                        "jammed",
                    )
                ):
                    by_cat["CRITICAL_data_mangle"].append(hit)
                else:
                    by_cat["other"].append(hit)

        if "Meridian Commodities" in (t["title"] or ""):
            samples["Meridian"] = split_math(t["context"])
        if cid == "MATH 5.24":
            samples["Solar24"] = [
                ln
                for ln in (t["solution_overview"] or "").splitlines()
                if "0.21u" in ln or "crossover" in ln.lower()
            ]

    # Sanity unit checks embedded
    unit = {
        "meridian_ok": samples.get("Meridian")
        and all(k == "text" for k, _ in samples["Meridian"])
        and "$2,943.20" in samples["Meridian"][0][1],
        "compare_math": split_math("Since $91.80<95$, ok")[0][0] == "text"
        and any(k == "inline" for k, _ in split_math("Since $91.80<95$, ok")),
        "real_eq": any(
            k == "inline" and "x + y = 1" in v for k, v in split_math("See $x + y = 1$ here")
        ),
        "currency_pair": all(
            k == "text"
            for k, _ in split_math("Notebook = $3.50 | Pen = $1.80")
        ),
    }

    lines = []
    lines.append("=== FULL Ch5 TEXT AUDIT (60 tasks × context/statements/overview/A–E) ===")
    lines.append(f"tasks: {len(tasks)}")
    lines.append(f"fields formerly broken by currency-prose swallow: {old_swallow_fields}")
    lines.append("")
    lines.append("--- UNIT CHECKS ---")
    for k, v in unit.items():
        lines.append(f"  {k}: {'PASS' if v else 'FAIL'}")
    lines.append("")
    lines.append("--- CRITICAL: prose rendered as math (should be 0) ---")
    lines += by_cat["CRITICAL_prose_as_math"] or ["(none)"]
    lines.append("")
    lines.append("--- CRITICAL: data mangling scars (should be 0) ---")
    lines += by_cat["CRITICAL_data_mangle"] or ["(none)"]
    lines.append("")
    lines.append("--- unpaired $ after parser (should be 0) ---")
    lines += by_cat["unpaired_$"] or ["(none)"]
    lines.append("")
    lines.append("--- empty required fields ---")
    lines += by_cat["empty"] or ["(none)"]
    lines.append("")
    lines.append("--- A–E count issues ---")
    lines += missing_ae or ["(none)"]
    lines.append("")
    lines.append("--- short overviews ---")
    lines += short_overview or ["(none)"]
    lines.append("")
    lines.append("--- sample: Meridian context parts ---")
    for k, v in samples.get("Meridian") or []:
        lines.append(f"  [{k}] {v}")
    lines.append("")
    lines.append("--- sample: Solar T24 crossover lines ---")
    for ln in samples.get("Solar24") or ["(missing)"]:
        lines.append(f"  {ln}")
    lines.append("")
    lines.append(f"--- old-swallow examples (parser should now keep as text): {len(by_cat['old_swallow_fixed_by_parser'])} ---")
    for x in by_cat["old_swallow_fixed_by_parser"][:25]:
        lines.append(f"  {x}")
    if len(by_cat["old_swallow_fixed_by_parser"]) > 25:
        lines.append(f"  … +{len(by_cat['old_swallow_fixed_by_parser'])-25} more")

    report = "\n".join(lines)
    REPORT.write_text(report, encoding="utf-8")
    print(report)
    print("\nwrote", REPORT)

    crit = (
        len(by_cat["CRITICAL_prose_as_math"])
        + len(by_cat["CRITICAL_data_mangle"])
        + len(by_cat["unpaired_$"])
        + len(by_cat["empty"])
    )
    print(f"\nCRITICAL TOTAL: {crit}")
    print("UNIT:", unit)


if __name__ == "__main__":
    main()
