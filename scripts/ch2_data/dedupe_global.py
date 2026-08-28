#!/usr/bin/env python3
"""Remove global duplicate statements; re-emit soft modules for re-inject."""

from __future__ import annotations

import importlib
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))

from emit_tasks import emit_module
from replacement_bank import generate_claim, normalize_stmt

SUBS = ("2.1", "2.2", "2.3", "2.4", "2.5")
MOD_NAMES = ("s21", "s22", "s23", "s24", "s25")


def main() -> None:
    mods = {n: importlib.import_module(n) for n in MOD_NAMES}
    by_sub = {sub: mods[f"s{sub.replace('.', '')}"].TASKS for sub in SUBS}

    seen: set[str] = set()
    patched = 0
    for sub in SUBS:
        for gi, t in enumerate(by_sub[sub]):
            stmts = list(t["statements"])
            keys = list(t["answer_key"])
            for ii, s in enumerate(stmts):
                key = normalize_stmt(s)
                if key not in seen:
                    seen.add(key)
                    continue
                truth = bool(keys[ii])
                for bump in range(300):
                    new_s, new_t = generate_claim(
                        sub,
                        want_truth=truth,
                        seed=gi * 17 + ii * 31 + bump,
                        avoid=seen,
                    )
                    nk = normalize_stmt(new_s)
                    if nk not in seen:
                        stmts[ii] = new_s
                        keys[ii] = bool(new_t)
                        seen.add(nk)
                        patched += 1
                        break
            t["statements"] = stmts
            t["answer_key"] = keys
            t["tactical_explanations"] = []

    for sub in SUBS:
        fname = f"s{sub.replace('.', '')}.py"
        text = emit_module(subsection=sub, tasks=by_sub[sub])
        (HERE / fname).write_text(text + "\n")

    print(f"patched {patched} duplicate slots; re-emitted {len(SUBS)} modules (soft-only)")


if __name__ == "__main__":
    main()
