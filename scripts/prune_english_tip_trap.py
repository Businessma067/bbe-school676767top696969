#!/usr/bin/env python3
"""Prune Tip/Trap callouts by difficulty/context; strip claim (true)/(false)."""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PARTS = ROOT / "src" / "data" / "english" / "grammar_parts"

CALLOUT_PARA = re.compile(
    r"^(?:\*\*)?(Tip|Trap|Note)\.?(?:\*\*)?\s*:\s*(.+)$",
    re.I | re.S,
)
VERDICT = re.compile(r"\s*\((true|false)\)\.?", re.I)
DIFF_N = re.compile(r"^(\d)")


def diff_level(s: str) -> int:
    m = DIFF_N.match(str(s or "3/5"))
    return int(m.group(1)) if m else 3


def tokenize(s: str) -> set[str]:
    return set(re.findall(r"[a-z0-9']+", s.lower()))


def overlap_ratio(body: str, cue: str) -> float:
    wb, wc = tokenize(body), tokenize(cue)
    if not wb or not wc:
        return 0.0
    return len(wb & wc) / max(1, len(wc))


def should_keep(kind: str, is_true: bool, level: int, body: str, cue: str) -> bool:
    kind = kind.lower()
    cue = cue.strip()
    if len(cue) < 12:
        return False
    if overlap_ratio(body, cue) >= 0.6:
        return False
    if level <= 2:
        return False
    if kind == "trap":
        # Subtle false items from mid difficulty
        return (not is_true) and level >= 3
    if kind in ("tip", "note"):
        # Short additive cue on harder true items only
        return is_true and level >= 4 and len(cue) <= 160
    return False


def clean_claim(claim: str) -> str:
    claim = VERDICT.sub("", claim)
    claim = re.sub(r"\s{2,}", " ", claim).strip()
    # **A) text.**
    claim = re.sub(r"\s+\.\*\*", ".**", claim)
    if re.match(r"^\*\*[A-E]\)", claim) and not claim.rstrip().endswith("**"):
        claim = claim.rstrip("*").rstrip()
        if not claim.endswith("."):
            claim += "."
        claim += "**"
    return claim


def clean_expl(text: str, is_true: bool, level: int) -> str:
    text = (text or "").replace("\r\n", "\n").strip()
    if not text:
        return text
    paras = [p.strip() for p in re.split(r"\n\n+", text) if p.strip()]
    if not paras:
        return text

    claim = clean_claim(paras[0]) if re.match(r"^\*\*[A-E]\)", paras[0]) else paras[0]
    rest = paras[1:] if claim == clean_claim(paras[0]) or re.match(r"^\*\*[A-E]\)", paras[0]) else paras
    if re.match(r"^\*\*[A-E]\)", paras[0]):
        rest = paras[1:]
    else:
        rest = paras
        claim = ""

    body: list[str] = []
    kept_callouts: list[str] = []

    for p in rest:
        m = CALLOUT_PARA.match(p)
        if m:
            kind, cue = m.group(1), m.group(2).strip()
            body_so_far = "\n\n".join(body)
            if should_keep(kind, is_true, level, body_so_far, cue):
                label = kind.capitalize()
                if label.lower() == "trap":
                    kept_callouts.append(f"Trap: {cue}")
                else:
                    kept_callouts.append(f"**{label}:** {cue}")
            else:
                # Drop callout. If body empty and this carries real explanation, fold unlabeled.
                if not body and cue:
                    body.append(cue)
            continue

        # Prose that begins with Trap:/Tip: inline
        lead = re.match(r"^(Trap|Tip|Note):\s*(.+)$", p, re.I | re.S)
        if lead:
            kind, cue = lead.group(1), lead.group(2).strip()
            body_so_far = "\n\n".join(body)
            if should_keep(kind, is_true, level, body_so_far, cue):
                if kind.lower() == "trap":
                    kept_callouts.append(f"Trap: {cue}")
                else:
                    kept_callouts.append(f"**{kind.capitalize()}:** {cue}")
            else:
                body.append(cue)
            continue

        body.append(p)

    parts = ([claim] if claim else []) + body + kept_callouts
    return "\n\n".join(parts).strip() + "\n"


def count_callouts(s: str) -> int:
    return len(re.findall(r"(?im)^(?:\*\*)?(?:Tip|Trap|Note)\.?(?:\*\*)?\s*:", s))


def process_file(path: Path) -> tuple[int, int]:
    data = json.loads(path.read_text(encoding="utf-8-sig"))
    before_n = after_n = 0
    for t in data.get("tasks") or []:
        level = diff_level(t.get("difficulty_level") or "3/5")
        keys = t.get("answer_key") or []
        expls = t.get("tactical_explanations") or []
        new = []
        for a, e in zip(keys, expls):
            before_n += count_callouts(e or "")
            cleaned = clean_expl(e or "", bool(a), level)
            after_n += count_callouts(cleaned)
            new.append(cleaned)
        # pad if needed
        while len(new) < len(expls):
            new.append(expls[len(new)])
        t["tactical_explanations"] = new[:5]
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return before_n - after_n, after_n


def main() -> int:
    rem = kep = 0
    for i in range(1, 21):
        r, k = process_file(PARTS / f"g.{i}.json")
        rem += r
        kep += k
        print(f"g.{i}.json: pruned {r}, kept {k}")
    print(f"TOTAL pruned {rem}, kept {kep}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
