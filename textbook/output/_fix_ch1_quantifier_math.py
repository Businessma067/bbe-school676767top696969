# -*- coding: utf-8 -*-
"""
Repair Ch1 Logic quantifier / broken-$ math across every statement & explanation.

Root UI bug (fixed separately): FlashcardMath treated \\exists as English \"exists\".
This pass rewrites mangled spans like `$\\exists x$, P(x)` → `$\\exists x\\,P(x)$`.
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
import importlib.util

spec = importlib.util.spec_from_file_location("build", Path(__file__).parent / "_build_ch1_v2.py")
build = importlib.util.module_from_spec(spec)
spec.loader.exec_module(build)

DUMP = Path(__file__).with_name("_ch1_tasks_dump.json")


def fix_math(s: str) -> str:
    if not s:
        return s

    # Never bold-wrap math
    s = re.sub(r"\*\*(\$[^$]+\$)\*\*", r"\1", s)
    s = re.sub(r"\*\*(\$\$[^$]+\$\$)\*\*", r"\1", s)

    # "$\exists x$, P(x)" / "$\forall x$, P(x)" → single math span
    s = re.sub(
        r"\$\\exists\s*x\$,\s*P\(x\)",
        r"$\\exists x\\,P(x)$",
        s,
    )
    s = re.sub(
        r"\$\\forall\s*x\$,\s*P\(x\)",
        r"$\\forall x\\,P(x)$",
        s,
    )
    s = re.sub(
        r"\$\\exists\s*x\$,\s*\$\\neg\s*P\(x\)\$",
        r"$\\exists x\\,\\neg P(x)$",
        s,
    )
    s = re.sub(
        r"\$\\forall\s*x\$,\s*\$\\neg\s*P\(x\)\$",
        r"$\\forall x\\,\\neg P(x)$",
        s,
    )

    # "$\exists x$, $\neg P(x)$" variants
    s = re.sub(
        r"\$\\exists\s*x\$,\s*\$([^$]+)\$",
        r"$\\exists x\\,\1$",
        s,
    )
    s = re.sub(
        r"\$\\forall\s*x\$,\s*\$([^$]+)\$",
        r"$\\forall x\\,\1$",
        s,
    )

    # Broken: $\neg ( \forall x$, P(x)) ≡ $\exists x$, $\neg P(x)$
    s = re.sub(
        r"\$\\neg\s*\(\s*\\forall\s*x\$,\s*P\(x\)\)\s*≡\s*\$\\exists\s*x\$,\s*\$\\neg\s*P\(x\)\$",
        r"$\\neg(\\forall x\\,P(x)) \\equiv \\exists x\\,\\neg P(x)$",
        s,
    )
    s = re.sub(
        r"\$\\neg\s*\(\\forall\s*x\$,\s*P\(x\)\)\s*≡\s*\$\\exists\s*x\$,\s*\$\\neg\s*P\(x\)\$",
        r"$\\neg(\\forall x\\,P(x)) \\equiv \\exists x\\,\\neg P(x)$",
        s,
    )
    s = re.sub(
        r"\$\\neg\s*\(\\exists\s*x\$,\s*P\(x\)\)\s*≡\s*\$\\forall\s*x\$,\s*\$\\neg\s*P\(x\)\$",
        r"$\\neg(\\exists x\\,P(x)) \\equiv \\forall x\\,\\neg P(x)$",
        s,
    )

    # $\neg ( \forall x$, ...
    s = re.sub(
        r"\$\\neg\s*\(\s*\\forall\s*x\$,",
        r"$\\neg(\\forall x\\,",
        s,
    )
    s = re.sub(
        r"\$\\neg\s*\(\\forall\s*x\$,",
        r"$\\neg(\\forall x\\,",
        s,
    )

    # "$\forall$ day" / "$\exists$ day" → prose or math
    s = re.sub(r"\$\\forall\$\s*day", r"every day", s)
    s = re.sub(r"\$\\exists\$\s*day", r"some day", s)
    s = re.sub(r"\$\\forall\$\s*failed", r"every failed", s)
    s = re.sub(r"\$\\exists\$\s*a\b", r"there exists a", s)
    s = re.sub(r"\$\\exists\$\s*\(game\)", r"$\\exists$ (game)", s)

    # $(\exists$ an employee...`) → wrap properly or prose
    s = re.sub(
        r"\$\(\\exists\$\s*an employee late every single day\)",
        r"(some employee is late every day)",
        s,
    )
    s = re.sub(
        r"\(\$\\exists\$\s*an employee late every single day\)",
        r"(some employee is late every day)",
        s,
    )

    # " $\forall x$, ..." with leading quote space
    s = re.sub(r'"\s*\$\\forall\s*x\s*,\s*', r'"$\\forall x\\, ', s)
    s = re.sub(r'"\s*\$\\exists\s*x\s*,\s*', r'"$\\exists x\\, ', s)
    s = re.sub(r'"\s*\$\\forall\s*x\s+\\in', r'"$\\forall x \\in', s)
    s = re.sub(r'"\s*\$\\exists\s*x\s+\\in', r'"$\\exists x \\in', s)

    # Close dangling: "$\forall x \in P$, x is odd" → keep membership in math, English out
    s = re.sub(
        r"\$\\forall\s*x\s*\\in\s*P\$,\s*x is odd",
        r"$\\forall x \\in P$, $x$ is odd",
        s,
    )

    # $( \forall$ → $\forall$ / $(\forall x$
    s = re.sub(r"\(\s*\\forall\s*→\s*\$\\exists\s*,\s*\$\\exists\s*→\s*\$\\forall\s*\)",
               r"($\\forall\\to\\exists$, $\\exists\\to\\forall$)", s)
    s = re.sub(
        r"\$\(\s*\\forall\s*→\s*\$\\exists\s*,\s*\$\\exists\s*→\s*\$\\forall\s*\)\$?",
        r"$(\\forall \\rightarrow \\exists,\\; \\exists \\rightarrow \\forall)$",
        s,
    )
    s = re.sub(
        r"\(\s*\\forall\s*→\s*\$\\exists\s*,\s*\$\\exists\s*→\s*\$\\forall\s*\)",
        r"$(\\forall \\rightarrow \\exists,\\; \\exists \\rightarrow \\forall)$",
        s,
    )

    # Bare leftover: $\forall$ → without closing properly mid-prose
    # "$\forall$ failed chip $\exists a$ defect" style already partly handled

    # "$x^2$ ≥ 0" / "$x^2$ < 0" / "$x^2$ = -1" → keep relation in math
    s = re.sub(r"\$x\^2\$\s*≥\s*0", r"$x^2 \\ge 0$", s)
    s = re.sub(r"\$x\^2\$\s*<\s*0", r"$x^2 < 0$", s)
    s = re.sub(r"\$x\^2\$\s*=\s*-1", r"$x^2 = -1$", s)
    s = re.sub(r"\$x\^2\$\s*=\s*9", r"$x^2 = 9$", s)

    # $\neg$ Late → $\neg\mathrm{Late}$ or prose
    s = re.sub(r"\$\\neg\$\s*Late", r"$\\neg\\mathrm{Late}$", s)

    # $( \forall x$, $\forall$ day,$\neg$ Late) 
    s = re.sub(
        r"\$\(\s*\\forall\s*x\$,\s*\$\\forall\$\s*day,\s*\$\\neg\$\s*Late\)",
        r"$(\\forall x\\,\\forall d\\,\\neg\\mathrm{Late}(x,d))$",
        s,
    )
    s = re.sub(
        r"\(\s*\\forall\s*x\$,\s*\$\\forall\$\s*day,\s*\$\\neg\$\s*Late\)",
        r"$(\\forall x\\,\\forall d\\,\\neg\\mathrm{Late}(x,d))$",
        s,
    )

    # Specific known bad statement (math-1-85 E)
    s = s.replace(
        "To prove $\\exists x$, P(x) true, one satisfying value suffices; to prove $\\forall x$, P(x) true, one needs a general argument for an arbitrary x, not a finite check.",
        "To prove $\\exists x\\,P(x)$ is true, one satisfying value suffices; to prove $\\forall x\\,P(x)$ is true, one needs a general argument for an arbitrary $x$, not a finite check.",
    )
    s = s.replace(
        'To prove a universal statement " $\\forall x$, P(x)" is true, it suffices to check it for x = 1 and x = 2',
        'To prove a universal statement "$\\forall x\\,P(x)$" is true, it suffices to check it for $x = 1$ and $x = 2$',
    )
    s = s.replace(
        'To prove an existential statement " $\\exists x$, P(x)" is true, it suffices to exhibit just one value of x for which P(x) holds',
        'To prove an existential statement "$\\exists x\\,P(x)$" is true, it suffices to exhibit just one value of $x$ for which $P(x)$ holds',
    )

    # Pad leftovers
    for fr in (
        " into symbols, the shared facts decide it directly.",
        " into symbols, the shared facts decide it directly",
        "So the claim is true: it lines up with those shared facts into symbols, the shared facts decide it directly.",
        "So the claim is true: it lines up with those shared facts",
    ):
        s = s.replace(fr, "")

    s = re.sub(r"\n{3,}", "\n\n", s)
    return s.strip() if s.strip() != s and False else s  # keep trailing structure


def main() -> None:
    tasks = json.loads(DUMP.read_text(encoding="utf-8"))
    out = []
    for t in tasks:
        t["context"] = fix_math(t["context"])
        t["solution_overview"] = fix_math(t["solution_overview"])
        t["statements"] = [fix_math(s) for s in t["statements"]]
        t["tactical_explanations"] = [fix_math(s) for s in t["tactical_explanations"]]
        out.append(build.normalize_task_dollars(t))
    build.write_ts(out)

    # report remaining suspicious patterns
    bad = 0
    for t in out:
        blob = "\n".join(
            [t["context"], t["solution_overview"], *t["statements"], *t["tactical_explanations"]]
        )
        if re.search(r"\$\\exists\s*x\$,", blob) or re.search(r"\$\\forall\s*x\$,", blob):
            bad += 1
            print("still", t["id"])
        if "**$" in blob:
            print("bold-math", t["id"])
            bad += 1
    print("wrote", len(out), "remaining_bad", bad)


if __name__ == "__main__":
    main()
