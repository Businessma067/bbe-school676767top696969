#!/usr/bin/env python3
"""Scrub stub fillers and rewrite padded Ch1–5 letters toward MATH 13.18 depth.

Focus:
- Remove banned/stub filler sentences (Set beside…, Name the financial rule…,
  Do not rebuild…, Keep the periodic rate…, shared-two-unknown padding).
- Rewrite Ch5 lookup templates into short teacher-voice checks.
- Keep each chapter's **A.** → True/False header convention.
- Do not pad for length; length tracks real claim work.
"""

from __future__ import annotations

import json
import re
import statistics
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

BANKS = [
    ("ch1-core", ROOT / "src/data/math-ch1-logic.ts", "ts"),
    ("ch1-exam", ROOT / "src/data/math-ch1-exam.json", "json"),
    ("ch2", ROOT / "src/data/math-ch2-cases.json", "json"),
    ("ch3-core", ROOT / "src/data/math-ch11-financial.ts", "ts"),
    ("ch3-exam", ROOT / "src/data/math-ch3-exam.json", "json"),
    ("ch4", ROOT / "src/data/math-ch4-cases.json", "json"),
    ("ch5-core", ROOT / "src/data/math-ch5-linear-equations.ts", "ts"),
    ("ch5-exam", ROOT / "src/data/math-ch5-exam.json", "json"),
]

HDR_RE = re.compile(
    r"^(\*\*([A-E])\.\*\*\s*→\s*(True|False))\s*\n\n([\s\S]*)$"
)
CLOSER_RE = re.compile(
    r"\n*\s*So the statement is (True|False)\.?\s*$", re.I
)

# Generic openers that force identical first lines across letters.
GENERIC_OPENER_RES = [
    re.compile(
        r"^Name the financial rule behind the claim, then substitute "
        r"(?:the concrete numbers|the recovered inputs)\.\s*\n+",
        re.I,
    ),
    re.compile(
        r"^Name the governing exponent law first, then substitute "
        r"the concrete letters or numbers\.\s*\n+",
        re.I,
    ),
    re.compile(
        r"^Name the governing (?:algebra|identity|rule) first, then "
        r"substitute the concrete letters or numbers\.\s*\n+",
        re.I,
    ),
]

PAD_SENTENCE_RES = [
    re.compile(
        r"\n*Keep the periodic rate, the number of periods, and the money "
        r"units explicit while you compare with the claim\.\s*",
        re.I,
    ),
    re.compile(
        r"\n*Do not rebuild the original system; use the overview's recovered "
        r"unknowns for this comparison\.\s*",
        re.I,
    ),
    re.compile(
        r"^Use the recovered holdings from the overview; do not rebuild "
        r"the original transfer system\.\s*\n+",
        re.I,
    ),
    re.compile(
        r"^Use the recovered (?:values|holdings|prices|quantities) from the "
        r"overview; do not rebuild the original[^\n]*\.\s*\n+",
        re.I,
    ),
]

# Ch1 duplicate-compare filler: phrase + repeated display + which-is sentence.
SET_BESIDE_EXACT = re.compile(
    r"\n+Set beside the claim, the computed result is\n+"
    r"\$\$.*?\$\$\n+"
    r"which is exactly what the statement asserts\.",
    re.S,
)
SET_BESIDE_NOT = re.compile(
    r"\n+Set beside the claim, the computed result is\n+"
    r"\$\$.*?\$\$\n+"
    r"which is not what the statement asserts\.",
    re.S,
)
SET_BESIDE_LOOSE = re.compile(
    r"\n+Set beside the claim, the computed result is\n+"
    r"(\$\$.*?\$\$)",
    re.S,
)

# Ch5 lookup template with shared-system padding.
SHARED_LOOKUP = re.compile(
    r"^In the shared two-unknown system, the overview already solved for "
    r"(?P<role>.+?)\.\s*"
    r"State that recovered value before testing the claim:\s*"
    r"\$\$\s*(?P<rec>.+?)\s*\$\$\s*"
    r"The claim asserts\s*"
    r"\$\$\s*(?P<claim>.+?)\s*\$\$\s*"
    r"(?:The recovered value and the claim agree\.|"
    r"Comparing with the recovered value shows they do not agree\.)\s*"
    r"(?:Do not rebuild the original system; use the overview's recovered "
    r"unknowns for this comparison\.\s*)?"
    r"(?:So the statement is (?P<verd>True|False)\.?)?\s*$",
    re.S | re.I,
)

CLAIM_ASSERTS_BLOCK = re.compile(
    r"The claim asserts\s*\$\$\s*(.+?)\s*\$\$\s*"
    r"(?:The recovered value and the claim agree\.|"
    r"Comparing with the recovered value shows they do not agree\.)\s*",
    re.S | re.I,
)

# After scrub, some letters may share the same formula opener. Seed variants.
EAR_OPENERS = [
    "The effective annual rate compounds the periodic rate across every compounding date in one year:",
    "Compound the recovered periodic rate through one full year of credits to obtain the effective annual rate:",
    "One year of compounding turns the periodic rate into an effective annual rate via:",
    "Write the effective annual rate from the periodic rate and the compounding count:",
    "Annualize the recovered periodic rate with the usual effective-rate formula:",
]
FV_OPENERS = [
    "Future value compounds the principal across every credit date:",
    "Grow the principal by the recovered periodic factor across all periods:",
    "The terminal balance applies the recovered growth factor to the deposit:",
    "Compound the opening principal through the recovered number of periods:",
    "Apply the compound-growth formula to the recovered principal and rate:",
]
LOOKUP_OPENERS = [
    "The shared solve isolates",
    "From the overview solve, read",
    "The recovered unknown for this claim is",
    "The system solve already produced",
    "Read off the overview value for",
]


def strip_closer(body: str) -> str:
    return CLOSER_RE.sub("", body.strip()).rstrip()


def ensure_closer(body: str, truth: bool) -> str:
    verd = "True" if truth else "False"
    body = strip_closer(body).rstrip()
    if not body.endswith((".", "!", "?")):
        body += "."
    return body + f"\n\nSo the statement is {verd}."


def rewrite_shared_lookup(body: str, truth: bool, letter_idx: int) -> str | None:
    m = SHARED_LOOKUP.match(strip_closer(body))
    if not m:
        return None
    role = m.group("role").strip()
    rec = m.group("rec").strip()
    claim = m.group("claim").strip()
    lead = LOOKUP_OPENERS[letter_idx % len(LOOKUP_OPENERS)]
    agree = "Those two displays agree." if truth else "Those two displays do not agree."
    return ensure_closer(
        f"{lead} {role}:\n\n$$\n{rec}\n$$\n\n"
        f"The claim asserts\n\n$$\n{claim}\n$$\n\n"
        f"{agree}",
        truth,
    )


def scrub_set_beside(body: str) -> str:
    body = SET_BESIDE_EXACT.sub("\n\nThat matches the claim.", body)
    body = SET_BESIDE_NOT.sub("\n\nThat conflicts with the claim.", body)
    # Leftover phrase with a display: drop the phrase, keep display only if
    # it is not an exact repeat of the previous display.
    def _loose(m: re.Match[str]) -> str:
        return "\n\n" + m.group(1)

    body = SET_BESIDE_LOOSE.sub(_loose, body)
    body = re.sub(
        r"\n+Set beside the claim, the computed result is\s*",
        "\n\n",
        body,
        flags=re.I,
    )
    return body


def scrub_generic_openers(body: str) -> str:
    for rx in GENERIC_OPENER_RES:
        body = rx.sub("", body)
    return body.lstrip()


def scrub_pad_sentences(body: str) -> str:
    for rx in PAD_SENTENCE_RES:
        body = rx.sub("\n\n", body)
    body = re.sub(r"\n{3,}", "\n\n", body)
    return body.strip()


def scrub_claim_asserts_agree(body: str, truth: bool) -> str:
    """Tighten 'The claim asserts $$...$$ The recovered value and the claim agree.'"""

    def repl(m: re.Match[str]) -> str:
        claim = m.group(1).strip()
        if truth:
            return (
                f"The claim asserts\n\n$$\n{claim}\n$$\n\n"
                "Those two figures agree.\n\n"
            )
        return (
            f"The claim asserts\n\n$$\n{claim}\n$$\n\n"
            "Those two figures do not agree.\n\n"
        )

    return CLAIM_ASSERTS_BLOCK.sub(repl, body)


def vary_formula_opener(body: str, letter_idx: int) -> str:
    """Rotate identical EAR/FV lead sentences when they start the letter."""
    for family, variants in (
        (
            "The effective annual rate compounds the periodic rate across every compounding date in one year:",
            EAR_OPENERS,
        ),
        (
            "Future value compounds the principal across every credit date:",
            FV_OPENERS,
        ),
        (
            "Future value compounds the principal through every compounding date:",
            FV_OPENERS,
        ),
    ):
        if body.startswith(family):
            alt = variants[letter_idx % len(variants)]
            if alt != family:
                return alt + body[len(family) :]
    return body


def deepen_letter(expl: str, truth: bool, letter_idx: int) -> str:
    m = HDR_RE.match(expl.strip())
    if not m:
        return expl
    hdr, letter, verd_hdr, body = m.group(1), m.group(2), m.group(3), m.group(4)
    verd = "True" if truth else "False"
    # Force header verdict to answer_key
    hdr = f"**{letter}.** → {verd}"

    # Ch5 shared lookup rewrite first (full template)
    rewritten = rewrite_shared_lookup(body, truth, letter_idx)
    if rewritten:
        return f"{hdr}\n\n{rewritten}"

    body = scrub_set_beside(body)
    body = scrub_generic_openers(body)
    body = scrub_pad_sentences(body)
    body = scrub_claim_asserts_agree(body, truth)
    body = vary_formula_opener(body, letter_idx)

    # Soften residual coaching lines that survived
    body = re.sub(
        r"\n*The recovered value and the claim agree\.\s*",
        "\n\nThose two figures agree.\n\n",
        body,
        flags=re.I,
    )
    body = re.sub(
        r"\n*Comparing with the recovered value shows they do not agree\.\s*",
        "\n\nThose two figures do not agree.\n\n",
        body,
        flags=re.I,
    )
    body = re.sub(r"\n{3,}", "\n\n", body).strip()
    body = ensure_closer(body, truth)
    return f"{hdr}\n\n{body}"


def iter_ts_cases(text: str):
    """Yield (start, end, expls_list, answer_key) spans for tactical_explanations."""
    for m in re.finditer(
        r"tactical_explanations:\s*\[([\s\S]*?)\]\s*,\s*\n\s*"
        r"(?:difficulty|sort_order|solution_overview|graph|id|case_id)",
        text,
    ):
        inner = m.group(1)
        expls = re.findall(r"`((?:\\`|[^`])*)`", inner)
        if len(expls) != 5:
            continue
        # find nearest preceding answer_key
        pre = text[max(0, m.start() - 2500) : m.start()]
        ak_m = list(
            re.finditer(r"answer_key:\s*\[([^\]]+)\]", pre)
        )
        if not ak_m:
            continue
        key_raw = ak_m[-1].group(1)
        aks = [
            tok.strip() == "true"
            for tok in key_raw.split(",")
            if tok.strip() in ("true", "false")
        ]
        if len(aks) != 5:
            continue
        yield m.start(1), m.end(1), expls, aks


def patch_ts(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    # Work back-to-front so offsets stay valid
    spans = list(iter_ts_cases(text))
    changed = 0
    letter_lens: list[int] = []
    for start, end, expls, aks in reversed(spans):
        new_expls = []
        any_change = False
        for i, (e, truth) in enumerate(zip(expls, aks)):
            new_e = deepen_letter(e, truth, i)
            if new_e != e:
                any_change = True
                changed += 1
            new_expls.append(new_e)
            letter_lens.append(len(new_e))
        if any_change:
            new_inner = ",\n".join(f"      `{e}`" for e in new_expls) + ",\n    "
            text = text[:start] + "\n" + new_inner + text[end:]
    path.write_text(text, encoding="utf-8")
    return {
        "changed_letters": changed,
        "cases": len(spans),
        "med_letter": statistics.median(letter_lens) if letter_lens else 0,
        "thin180": sum(1 for x in letter_lens if x < 180),
        "thin250": sum(1 for x in letter_lens if x < 250),
        "min_letter": min(letter_lens) if letter_lens else 0,
    }


def load_json_tasks(path: Path):
    data = json.loads(path.read_text(encoding="utf-8"))
    root = data
    if isinstance(data, dict):
        for k in ("tasks", "cases", "items", "data"):
            if isinstance(data.get(k), list):
                return data, k, data[k]
        raise SystemExit(f"No task list in {path}")
    return data, None, data


def patch_json(path: Path) -> dict:
    root, key, tasks = load_json_tasks(path)
    changed = 0
    letter_lens: list[int] = []
    for t in tasks:
        expls = t.get("tactical_explanations") or []
        aks = t.get("answer_key") or []
        if len(expls) != 5 or len(aks) != 5:
            continue
        new_expls = []
        for i, (e, truth) in enumerate(zip(expls, aks)):
            new_e = deepen_letter(e, bool(truth), i)
            if new_e != e:
                changed += 1
            new_expls.append(new_e)
            letter_lens.append(len(new_e))
        t["tactical_explanations"] = new_expls
    if key is None:
        path.write_text(json.dumps(tasks, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    else:
        root[key] = tasks
        path.write_text(json.dumps(root, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    return {
        "changed_letters": changed,
        "cases": len(tasks),
        "med_letter": statistics.median(letter_lens) if letter_lens else 0,
        "thin180": sum(1 for x in letter_lens if x < 180),
        "thin250": sum(1 for x in letter_lens if x < 250),
        "min_letter": min(letter_lens) if letter_lens else 0,
    }


def main() -> None:
    only = set(sys.argv[1:]) if len(sys.argv) > 1 else None
    for name, path, kind in BANKS:
        if only and name not in only and not any(name.startswith(o) for o in only):
            continue
        if not path.exists():
            print(f"MISSING {path}")
            continue
        stats = patch_ts(path) if kind == "ts" else patch_json(path)
        print(
            f"{name:10} cases={stats['cases']:4} changed={stats['changed_letters']:4} "
            f"med={stats['med_letter']:5.0f} min={stats['min_letter']:4} "
            f"thin<180={stats['thin180']} thin<250={stats['thin250']}"
        )


if __name__ == "__main__":
    main()
