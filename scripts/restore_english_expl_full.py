#!/usr/bin/env python3
"""Restore full coach prose from a1feddb; put (true)/(false) at end of each expl.

- Do not drop Tip/Trap content (optional callouts stay if present).
- Every explanation keeps its full sentence body.
- Claim line is lettered statement only; verdict trailer goes at the bottom.
"""
from __future__ import annotations

import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PARTS = ROOT / "src" / "data" / "english" / "grammar_parts"
REV = "a1feddb"

CALLOUT = re.compile(r"^(Trap|Tip|Note):\s*", re.I)
VERDICT_INLINE = re.compile(r"\s*\((true|false)\)\.?\s*", re.I)
LETTERS = "ABCDE"


def git_json(path: str) -> dict:
    raw = subprocess.check_output(["git", "show", f"{REV}:{path}"], cwd=ROOT)
    return json.loads(raw.decode("utf-8-sig"))


def clean_claim(claim: str, stmt: str, letter: str) -> str:
    claim = (claim or "").strip()
    if re.match(r"^\*\*[A-E]\)", claim):
        claim = VERDICT_INLINE.sub(" ", claim)
        claim = re.sub(r"\s{2,}", " ", claim).strip()
        claim = re.sub(r"\s+\.\*\*", ".**", claim)
        if not claim.endswith("**"):
            claim = claim.rstrip("*").rstrip()
            if not claim.endswith("."):
                claim += "."
            claim += "**"
        return claim
    # rebuild
    s = stmt.strip()
    if not s.endswith("."):
        s += "."
    return f"**{letter}) {s}**"


def rebuild_expl(old: str, stmt: str, letter: str, is_true: bool) -> str:
    old = (old or "").replace("\r\n", "\n").strip()
    paras = [p.strip() for p in re.split(r"\n\n+", old) if p.strip()]
    if not paras:
        verdict = "true" if is_true else "false"
        s = stmt.strip()
        if not s.endswith("."):
            s += "."
        return f"**{letter}) {s}**\n\n({verdict})\n"

    claim = clean_claim(paras[0], stmt, letter)
    body: list[str] = []
    for p in paras[1:]:
        # Drop a lone leftover (true)/(false) para; we'll re-append
        if re.fullmatch(r"\((true|false)\)\.?", p.strip(), flags=re.I):
            continue
        # Keep Tip/Trap/Note content — optional labels may stay
        body.append(p)

    # If Trap: was the only body and got somehow empty, ensure something remains
    if not body:
        # pull any non-claim text
        rest = old.split("\n\n", 1)
        if len(rest) > 1:
            chunk = VERDICT_INLINE.sub("", rest[1]).strip()
            chunk = re.sub(r"^(?:\*\*)?(Tip|Trap|Note)\.?(?:\*\*)?\s*:\s*", "", chunk, flags=re.I)
            if chunk:
                body.append(chunk)

    verdict = "true" if is_true else "false"
    parts = [claim] + body + [f"({verdict})"]
    return "\n\n".join(parts).strip() + "\n"


def main() -> int:
    bank = git_json("src/data/english/grammar.json")
    by_sub: dict[str, list] = {}
    for t in bank["tasks"]:
        by_sub.setdefault(t["subsection"], []).append(t)

    for i in range(1, 21):
        sid = f"g.{i}"
        path = PARTS / f"{sid}.json"
        data = json.loads(path.read_text(encoding="utf-8-sig"))
        old_tasks = {t["id"]: t for t in by_sub.get(sid, [])}
        for t in data["tasks"]:
            src = old_tasks.get(t["id"])
            if not src:
                continue
            # restore statements/keys from source of truth too if drift
            stmts = src.get("statements") or t.get("statements") or []
            keys = src.get("answer_key") or t.get("answer_key") or []
            old_expls = src.get("tactical_explanations") or []
            new_expls = []
            for idx, (stmt, ans, oe) in enumerate(zip(stmts, keys, old_expls)):
                letter = LETTERS[idx] if idx < 5 else str(idx + 1)
                new_expls.append(rebuild_expl(oe, stmt, letter, bool(ans)))
            t["tactical_explanations"] = new_expls
            t["statements"] = stmts
            t["answer_key"] = keys
            # keep overview in data unused by UI
            if src.get("solution_overview"):
                t["solution_overview"] = src["solution_overview"]
            if src.get("highlights"):
                t["highlights"] = src["highlights"]
        path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print(f"restored {path.name}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
