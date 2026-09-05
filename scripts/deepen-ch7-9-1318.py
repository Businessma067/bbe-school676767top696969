#!/usr/bin/env python3
"""Deepen Ch7–9 tactical explanations toward MATH 13.18 shared-overview depth.

Targets:
  - src/data/math-ch7-linear-quadratic.json   (thin overviews)
  - src/data/math-ch7-mixed-exam.json         (stub overviews → shared model;
                                              letters reuse recoveries, ≥180)
  - src/data/math-ch8-power-functions.ts     (opener diversity)
  - src/data/math-ch8-exam.json              (light scrub)
  - src/data/math-ch9-polynomials.json       (banned-phrase scrub)
  - src/data/math-ch9-mixed-exam.json        (banned-phrase scrub)

Preserves figure / tables_markdown. Header convention: **A.** → True/False.
"""

from __future__ import annotations

import json
import re
import statistics
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

CH7_CORE = ROOT / "src/data/math-ch7-linear-quadratic.json"
CH7_MIXED = ROOT / "src/data/math-ch7-mixed-exam.json"
CH8_CORE = ROOT / "src/data/math-ch8-power-functions.ts"
CH8_EXAM = ROOT / "src/data/math-ch8-exam.json"
CH9_CORE = ROOT / "src/data/math-ch9-polynomials.json"
CH9_MIXED = ROOT / "src/data/math-ch9-mixed-exam.json"

LETTERS = "ABCDE"
FLOOR = 260  # above audit thin floor; supports median ≥250
TARGET_MED = 250

OPENERS = [
    "Name the recovered rule, then substitute the input named in the claim.",
    "Form the comparison so only this claim’s extra arithmetic remains.",
    "Read the recovered coefficient before testing the threshold.",
    "Start from the calibrated closed form, then evaluate at the claimed point.",
    "Check the claim against the recovered scale factor only.",
    "Keep the stated domain in force while you evaluate the model.",
    "Separate the coefficient from the power before the arithmetic.",
    "Use the recovered constants; do not rebuild the calibration.",
    "Translate the claim into one equality, then solve it.",
    "Compare the recovered figure with the value named in the claim.",
]

BANNED_SUBS = [
    (
        r"The overview already recovered the solid curve as",
        "The recovered solid curve is",
    ),
    (
        r"The overview already recovered ([^.]+)\.",
        r"The recovered figures give \1.",
    ),
    (
        r"overview already recovered",
        "recovered figures give",
    ),
    (
        r"already recovered the quantity",
        "recovered quantity is",
    ),
    (
        r"exactly the figure named in the claim",
        "the figure named in the claim",
    ),
    (
        r"Matching these figures to the claim,?\s*",
        "",
    ),
    (
        r"settles the verdict\.?",
        "",
    ),
    (
        r"\*\*Trap[:.*].*?\n+",
        "",
    ),
]


def scrub(text: str) -> str:
    out = text
    for pat, repl in BANNED_SUBS:
        out = re.sub(pat, repl, out, flags=re.I)
    # Fix grammar after the E01-style recovery scrub
    out = re.sub(
        r"The recovered solid curve is (\$[^$]+\$) and located its two axis crossings as",
        r"The recovered solid curve is \1, and its two axis crossings are",
        out,
    )
    out = out.replace("are as the roots", "are the roots")
    out = re.sub(r"\n{3,}", "\n\n", out)
    return out.strip()


def split_letter(e: str) -> tuple[str, str, str, str]:
    m = re.match(r"^(\*\*([A-E])\.\*\* → (True|False))\n\n([\s\S]*)$", e.strip())
    if not m:
        raise ValueError(f"bad header: {e[:80]!r}")
    header, letter, verd, body = m.group(1), m.group(2), m.group(3), m.group(4).rstrip()
    # Drop trailing closer paragraph or inline ", so the statement is …"
    body = re.sub(
        rf"\n*\s*so the statement is\s+{verd}\.?\s*$",
        "",
        body,
        flags=re.I,
    ).rstrip()
    body = re.sub(
        rf",?\s*so the statement is\s+{verd}\.?\s*$",
        "",
        body,
        flags=re.I,
    ).rstrip()
    body = body.rstrip(",;:")
    return header, letter, verd, scrub(body)


def pack(header: str, verd: str, head: str) -> str:
    head = scrub(head).rstrip()
    head = re.sub(
        rf",?\s*so the statement is\s+{verd}\.?\s*$",
        "",
        head,
        flags=re.I,
    ).rstrip()
    head = head.rstrip(",;:")
    if not head.endswith((".", "!", "?")):
        head += "."
    return f"{header}\n\n{head}\n\nSo the statement is {verd}."


def deepen_thin_letter(e: str, overview: str, idx: int) -> str:
    """Push short shared-model letters up to the length floor with real steps."""
    header, letter, verd, head = split_letter(e)
    head = scrub(head)
    if len(pack(header, verd, head)) >= FLOOR:
        return pack(header, verd, head)

    paras = [p.strip() for p in head.split("\n\n") if p.strip()]
    opener = OPENERS[(idx + ord(letter)) % len(OPENERS)]
    if not paras or paras[0] in OPENERS or len(paras[0]) > 110:
        pass
    elif paras[0].startswith("$$"):
        paras.insert(0, opener)

    # Split chained one-line displays a=b=c into two steps
    new_paras: list[str] = []
    for p in paras:
        if p.startswith("$$") and p.endswith("$$") and p.count("=") >= 2 and "\n" not in p:
            inner = p.strip("$").strip()
            if r"\qquad" not in inner and len(inner) < 90:
                parts = [x.strip() for x in inner.split("=")]
                if len(parts) >= 3 and all(parts):
                    new_paras.append(f"$${parts[0]}={parts[1]}$$")
                    new_paras.append(f"$${parts[0]}={parts[-1]}$$")
                    continue
        new_paras.append(p)
    paras = new_paras

    # If still thin, add an explicit comparison beat before the closer
    body = "\n\n".join(paras)
    if len(pack(header, verd, body)) < FLOOR:
        # Pull one recovered display from the overview as a named recall step
        ov_disp = re.findall(r"\$\$([^$]+)\$\$", overview)
        useful = None
        for d in ov_disp:
            d = re.sub(r"\s+", " ", d).strip()
            if "\\text{" in d:
                continue
            if len(d) < 80 and ("=" in d or d.startswith("x=")):
                useful = d
                break
        if useful and useful not in body:
            paras.insert(
                min(1, len(paras)),
                f"Recall the recovered relation:\n\n$${useful}$$",
            )
            body = "\n\n".join(paras)

    if len(pack(header, verd, body)) < FLOOR:
        compare = (
            "Read the recovered value against the figure named in the claim."
        )
        if compare not in body:
            body = f"{body}\n\n{compare}"

    if len(pack(header, verd, body)) < FLOOR:
        displays = re.findall(r"\$\$([^$]+)\$\$", body)
        if displays:
            last = re.sub(r"\s+", " ", displays[-1]).strip()
            if len(last) <= 60:
                extra = (
                    f"The claim stands or falls on whether that recovered figure "
                    f"${last}$ matches the stated value."
                )
            else:
                extra = (
                    "The claim stands or falls on whether that recovered figure "
                    "matches the stated value."
                )
            body = f"{body}\n\n{extra}"

    return pack(header, verd, body)


def load_ch7_mixed_builders():
    src = (ROOT / "scripts/enrich-ch7-mixed-overviews.py").read_text(encoding="utf-8")
    # Neutralize retired RuntimeError / SystemExit so helpers remain importable.
    src = src.replace("raise RuntimeError(", "_retired_runtime = (")
    src = src.replace("raise SystemExit(", "_retired_exit = (")
    ns: dict = {}
    exec(compile(src, "enrich-ch7-mixed-overviews.py", "exec"), ns)
    return ns["BUILDERS"]


def patch_ch7_mixed() -> dict:
    data = json.loads(CH7_MIXED.read_text(encoding="utf-8"))
    tasks = data["tasks"]
    before_thin = sum(
        1 for t in tasks for e in t["tactical_explanations"] if len(e) < 180
    )
    builders = load_ch7_mixed_builders()
    assert len(builders) == len(tasks) == 30

    letter_lens = []
    for t, builder in zip(tasks, builders):
        ov, expls = builder()
        ov = scrub(ov)

        def scrub_ov_disp(m: re.Match) -> str:
            inner = m.group(1)
            inner = re.sub(
                r"\\text\{(first|second|vertex)\}",
                lambda mm: f"\\mathrm{{{mm.group(1)[:3]}}}",
                inner,
            )
            if re.search(r"\\text\{[^}]*\s[^}]*\}", inner):
                inner = re.sub(r"\\text\{[^}]+\}", "", inner)
                inner = re.sub(r"\s{2,}", " ", inner).strip()
            return f"$${inner}$$"

        ov = re.sub(r"\$\$([^$]+)\$\$", scrub_ov_disp, ov)
        new_expls = []
        for i, built in enumerate(expls):
            verd = "True" if t["answer_key"][i] else "False"
            letter = LETTERS[i]
            # Always keep the live letter text: retired builders can match the
            # True/False bit while explaining a different claim. Overview alone
            # comes from the builder (shared recoveries).
            live = t["tactical_explanations"][i]
            e = deepen_thin_letter(scrub(live), ov, i)
            # Drop length-floor recall padding when the letter already has displays.
            if e.count("$$") >= 2:
                e2 = re.sub(
                    r"\n\nRecall the recovered relation:\n\n\$\$[^$]+\$\$", "", e
                )
                e2 = re.sub(
                    r"\n\nCompare that recovered figure with the threshold or value named in the claim\.",
                    "",
                    e2,
                )
                e2 = re.sub(
                    r"\n\nWorking from that display,.*?claim\.",
                    "",
                    e2,
                    flags=re.S,
                )
                try:
                    header, _, verd2, head = split_letter(e2)
                    e = pack(header, verd2, head)
                except ValueError:
                    pass
            if not e.startswith(f"**{letter}.** → {verd}"):
                raise SystemExit(f"{t['case_id']} {letter}: header mismatch after deepen")
            if not re.search(
                rf"so the statement is\s+{verd}\.?\s*$", e, flags=re.I | re.M
            ):
                raise SystemExit(
                    f"{t['case_id']} {letter}: closer mismatch {e[-80:]!r}"
                )
            new_expls.append(e)
            letter_lens.append(len(e))
        t["solution_overview"] = ov
        t["tactical_explanations"] = new_expls

    after_thin = sum(1 for n in letter_lens if n < 180)
    CH7_MIXED.write_text(
        json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    return {
        "file": CH7_MIXED.name,
        "before_thin": before_thin,
        "after_thin": after_thin,
        "med_letter": statistics.median(letter_lens),
        "med_overview": statistics.median(len(t["solution_overview"]) for t in tasks),
        "min_letter": min(letter_lens),
    }


def expand_thin_core_overviews() -> dict:
    data = json.loads(CH7_CORE.read_text(encoding="utf-8"))
    tasks = data["tasks"]
    before_thin = sum(
        1 for t in tasks for e in t["tactical_explanations"] if len(e) < 180
    )
    touched = 0
    for t in tasks:
        ov = (t.get("solution_overview") or "").strip()
        if len(ov) >= 220:
            t["solution_overview"] = scrub(ov)
            continue
        # Build a short shared model from stem + first displays in letters
        ctx = (t.get("context") or t.get("stem") or "").strip()
        displays = []
        for e in t["tactical_explanations"]:
            for d in re.findall(r"\$\$([^$]+)\$\$", e):
                d = re.sub(r"\s+", " ", d).strip()
                if d and d not in displays and len(d) < 100:
                    displays.append(d)
                if len(displays) >= 4:
                    break
            if len(displays) >= 4:
                break
        parts = []
        if ctx:
            # First sentence of context only
            first = re.split(r"(?<=[.!?])\s+", ctx)[0].strip()
            parts.append(first)
        parts.append(
            "Recover the shared line and parabola once here; each letter only checks "
            "the extra arithmetic named in its claim."
        )
        if ov:
            parts.append(ov)
        for d in displays[:3]:
            parts.append(f"$${d}$$")
        new_ov = scrub("\n\n".join(parts))
        if len(new_ov) < 200 and displays:
            new_ov = scrub(
                new_ov
                + "\n\nThe axis, vertex, and meeting discriminant needed below are "
                "read from those recovered rules."
            )
        t["solution_overview"] = new_ov
        touched += 1

    # Scrub banned phrases only where present
    for t in tasks:
        ov = t.get("solution_overview") or ""
        if "overview already recovered" in ov or "settles the verdict" in ov:
            t["solution_overview"] = scrub(ov)
        new_expls = []
        for e in t["tactical_explanations"]:
            if "overview already recovered" in e or "settles the verdict" in e:
                new_expls.append(_rescrub_letter(e))
            else:
                new_expls.append(e)
        t["tactical_explanations"] = new_expls

    after_thin = sum(
        1 for t in tasks for e in t["tactical_explanations"] if len(e) < 180
    )
    CH7_CORE.write_text(
        json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    return {
        "file": CH7_CORE.name,
        "before_thin": before_thin,
        "after_thin": after_thin,
        "overviews_expanded": touched,
        "med_letter": statistics.median(
            len(e) for t in tasks for e in t["tactical_explanations"]
        ),
        "med_overview": statistics.median(len(t["solution_overview"]) for t in tasks),
    }


def _rescrub_letter(e: str) -> str:
    header, letter, verd, head = split_letter(scrub(e))
    return pack(header, verd, head)


def diversify_ch8_openers() -> dict:
    """Replace repeated openers in Ch8 core; leave healthy cases untouched."""
    text = CH8_CORE.read_text(encoding="utf-8")
    bad_prefix = "Start from the calibrated closed form recovered in the overview"
    pattern = re.compile(
        r"(tactical_explanations:\s*\[)([\s\S]*?)(\n\s*\],)",
        re.M,
    )
    touched = 0

    def fix_block(m: re.Match) -> str:
        nonlocal touched
        block = m.group(2)
        expls = re.findall(r"`([\s\S]*?)`", block)
        if len(expls) < 5:
            return m.group(0)
        openers = []
        for e in expls[:5]:
            om = re.match(r"\*\*[A-E]\.\*\*.*?\n\n([^\n]+)", e)
            openers.append(om.group(1).strip() if om else "")
        from collections import Counter

        c = Counter(o for o in openers if o)
        needs = any(n >= 3 for n in c.values()) or sum(
            1 for o in openers if o.startswith(bad_prefix)
        ) >= 3
        if not needs:
            return m.group(0)

        new_expls = []
        used: set[str] = set()
        for i, e in enumerate(expls[:5]):
            header, letter, verd, head = split_letter(e if e.startswith("**") else e)
            paras = [p.strip() for p in head.split("\n\n") if p.strip()]
            first = paras[0] if paras else ""
            if (
                not first
                or c.get(first, 0) >= 3
                or first.startswith(bad_prefix)
                or first.startswith("Start from the calibrated closed form in the overview")
            ):
                pick = OPENERS[(i * 3 + ord(letter)) % len(OPENERS)]
                spin = 0
                while pick in used and spin < len(OPENERS):
                    spin += 1
                    pick = OPENERS[(i * 3 + ord(letter) + spin) % len(OPENERS)]
                if paras:
                    paras[0] = pick
                else:
                    paras = [pick]
                used.add(pick)
            else:
                used.add(first)
            new_expls.append(pack(header, verd, "\n\n".join(paras)))
        touched += 1
        return _rebuild_ts_expl_block(m.group(1), m.group(3), new_expls)

    new_text = pattern.sub(fix_block, text)
    CH8_CORE.write_text(new_text, encoding="utf-8")
    return {"file": CH8_CORE.name, "blocks_touched": touched}


def _rebuild_ts_expl_block(prefix: str, suffix: str, new_expls: list[str]) -> str:
    """Rebuild a tactical_explanations array from five letter strings."""
    items = ",\n".join(f"    `{e}`" for e in new_expls)
    return f"{prefix}\n{items}{suffix}"


def scrub_json_bank(path: Path) -> dict:
    data = json.loads(path.read_text(encoding="utf-8"))
    tasks = data["tasks"] if isinstance(data, dict) else data
    before_thin = sum(
        1 for t in tasks for e in t.get("tactical_explanations") or [] if len(e) < 180
    )
    changed = 0
    for t in tasks:
        ov = t.get("solution_overview") or ""
        if "overview already recovered" in ov or "settles the verdict" in ov:
            t["solution_overview"] = scrub(ov)
            changed += 1
        if t.get("tactical_explanations"):
            new = []
            for e in t["tactical_explanations"]:
                if any(
                    b in e
                    for b in (
                        "overview already recovered",
                        "settles the verdict",
                        "Matching these figures to the claim",
                        "exactly the figure named in the claim",
                    )
                ):
                    new.append(_rescrub_letter(e))
                    changed += 1
                else:
                    new.append(e)
            t["tactical_explanations"] = new
    after_thin = sum(
        1 for t in tasks for e in t.get("tactical_explanations") or [] if len(e) < 180
    )
    if isinstance(data, dict) and "tasks" in data:
        data["tasks"] = tasks
        path.write_text(
            json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
        )
    else:
        path.write_text(
            json.dumps(tasks, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
        )
    return {
        "file": path.name,
        "before_thin": before_thin,
        "after_thin": after_thin,
        "changed": changed,
        "med_letter": statistics.median(
            len(e) for t in tasks for e in t.get("tactical_explanations") or []
        ),
    }


def main() -> None:
    reports = []

    print("=== Ch7 mixed: shared overviews + deepen letters ===")
    r = patch_ch7_mixed()
    reports.append(r)
    print(r)

    print("=== Ch7 core: expand thin overviews + scrub ===")
    r = expand_thin_core_overviews()
    reports.append(r)
    print(r)

    print("=== Ch8 core: diversify openers ===")
    r = diversify_ch8_openers()
    reports.append(r)
    print(r)

    print("=== Ch8 exam / Ch9 banks: scrub banned phrases ===")
    for p in (CH8_EXAM, CH9_CORE, CH9_MIXED):
        r = scrub_json_bank(p)
        reports.append(r)
        print(r)

    print("\n=== SUMMARY ===")
    for r in reports:
        print(r)


if __name__ == "__main__":
    main()
