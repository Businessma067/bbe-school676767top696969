# -*- coding: utf-8 -*-
"""Hand-fix mangled quantifier math left by prior regex passes."""
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

# Exact string replacements (old → new)
EXACT: list[tuple[str, str]] = [
    # math-1-50 statements
    (
        'The negation of " $\\forall x\\,x^2$ ≥ 0" is " $\\exists x\\,x^2$ < 0."',
        'The negation of "$\\forall x\\, (x^2 \\ge 0)$" is "$\\exists x\\, (x^2 < 0)$."',
    ),
    (
        'The statement " $\\exists x$ such that $x^2 = -1$" is true.',
        'The statement "$\\exists x\\, (x^2 = -1)$" is true.',
    ),
    (
        'The negation of " $\\exists x$ such that x > 100" is " $\\forall x$, x ≤ 100."',
        'The negation of "$\\exists x\\, (x > 100)$" is "$\\forall x\\, (x \\le 100)$."',
    ),
    (
        '" $\\forall x$ > 0, $\\exists y$ such that y > x" is a true statement.',
        '"$\\forall x > 0\\, \\exists y\\, (y > x)$" is a true statement.',
    ),
    (
        '" $\\exists y$ such that $\\forall x$ > 0, y > x" is a true statement.',
        '"$\\exists y\\, \\forall x > 0\\, (y > x)$" is a true statement.',
    ),
    # math-1-50 expl A (mangled)
    (
        "Negating a universal quantifier gives an existential quantifier with the negated inner statement: $\\neg(\\forall x\\, P(x)) ≡ $\\exists x\\,\\neg P(x).\n\nHere \\neg (x$^2 ≥ 0) is $x^2 < 0$.",
        "Negating a universal quantifier gives an existential with the inner formula negated:\n\n"
        "$$\\neg(\\forall x\\, P(x)) \\equiv \\exists x\\, \\neg P(x)$$\n\n"
        "Here $\\neg(x^2 \\ge 0)$ is $x^2 < 0$.",
    ),
    (
        "$\\neg (\\exists x$, P(x)) ≡ $\\forall x\\,\\neg P(x)$.\n\nNegating \"x > 100\" gives \"x ≤ 100,\" matching the statement exactly.",
        "$$\\neg(\\exists x\\, P(x)) \\equiv \\forall x\\, \\neg P(x)$$\n\n"
        "Negating \"$x > 100$\" gives \"$x \\le 100$,\" matching the statement exactly.",
    ),
    # math-1-52
    (
        'The negation of "$\\forall x \\in \\{1,...,20\\}$, x is prime $\\Rightarrow x$ is odd" is "$\\exists x \\in \\{1,...,20\\}$, x is prime and x is even"',
        'The negation of "$\\forall x \\in \\{1,\\ldots,20\\}\\, (\\mathrm{Prime}(x) \\Rightarrow \\mathrm{Odd}(x))$" '
        'is "$\\exists x \\in \\{1,\\ldots,20\\}\\, (\\mathrm{Prime}(x) \\land \\mathrm{Even}(x))$"',
    ),
    (
        'The general rule $\\neg(\\forall x\\, $P(x) \\Rightarrow Q(x)) ≡ \\exists x\\,P(x) \\land \\neg Q(x) applies here: negating "prime \\Rightarrow$ odd" gives "prime AND even," matching the statement exactly.',
        "The general rule is\n\n"
        "$$\\neg(\\forall x\\, (P(x) \\Rightarrow Q(x))) \\equiv \\exists x\\, (P(x) \\land \\neg Q(x))$$\n\n"
        "Negating \"prime $\\Rightarrow$ odd\" gives \"prime and even,\" matching the statement exactly.",
    ),
    # math-1-73 / 96
    (
        "$\\neg(\\forall x\\, P(x)) ≡ $\\exists x\\,\\neg P(x)$.",
        "$$\\neg(\\forall x\\, P(x)) \\equiv \\exists x\\, \\neg P(x)$$",
    ),
    (
        "$\\neg(\\forall x\\, P(x)) ≡ $\\exists x\\,\\neg P(x)$: negating the universal claim correctly yields an existence claim for a **counterexample** triangle.",
        "$$\\neg(\\forall x\\, P(x)) \\equiv \\exists x\\, \\neg P(x)$$\n\n"
        "Negating the universal claim correctly yields an existence claim for a **counterexample** triangle.",
    ),
    # math-1-85 D/E statements & related
    (
        'For "Some employee always arrives late" $(\\exists$ an employee late every single day), the correct negation is "All employees are never late."',
        'For "Some employee always arrives late" '
        "($\\exists$ an employee who is late every day), "
        'the correct negation is "All employees are never late."',
    ),
    (
        "To prove $\\exists x\\,P(x)$ is true, one satisfying value suffices; to prove $\\forall x\\,P(x)$ is true, one needs a general argument for an arbitrary $x$, not a finite check.",
        "To prove $\\exists x\\,P(x)$ is true, one satisfying value suffices; "
        "to prove $\\forall x\\,P(x)$ is true, one needs a general argument for an arbitrary $x$, not a finite check.",
    ),
    (
        "The original is $\\exists x$, $\\forall$ day, Late(x,day); its negation is $\\forall x$, $\\exists$ day,$\\neg$ Late(x,day) - \"every employee has at least one non-late day,\" weaker than \"all employees are never late\" $( \\forall x$, $\\forall$ day,$\\neg$ Late).",
        "The original is $\\exists x\\, \\forall d\\, \\mathrm{Late}(x,d)$; "
        "its negation is $\\forall x\\, \\exists d\\, \\neg\\mathrm{Late}(x,d)$ — "
        "\"every employee has at least one non-late day,\" weaker than "
        "\"all employees are never late\" ($\\forall x\\, \\forall d\\, \\neg\\mathrm{Late}(x,d)$).",
    ),
    (
        "The original is $\\exists x$, every day, Late(x,day); its negation is $\\forall x$, some day,$\\neg\\mathrm{Late}$(x,day) - \"every employee has at least one non-late day,\" weaker than \"all employees are never late\" $(\\forall x\\,\\forall d\\,\\neg\\mathrm{Late}(x,d))$.",
        "The original is $\\exists x\\, \\forall d\\, \\mathrm{Late}(x,d)$; "
        "its negation is $\\forall x\\, \\exists d\\, \\neg\\mathrm{Late}(x,d)$ — "
        "\"every employee has at least one non-late day,\" weaker than "
        "\"all employees are never late\" ($\\forall x\\, \\forall d\\, \\neg\\mathrm{Late}(x,d)$).",
    ),
    # more statement cleanups
    (
        '"$\\forall x \\in \\{1,...,20\\}$, if x is divisible by 4, then x is divisible by 2" is true',
        '"$\\forall x \\in \\{1,\\ldots,20\\}$, if $x$ is divisible by 4, then $x$ is divisible by 2" is true',
    ),
    (
        '"$\\forall x \\in \\{1,...,20\\}$, if x is divisible by 2, then x is divisible by 4" is true',
        '"$\\forall x \\in \\{1,\\ldots,20\\}$, if $x$ is divisible by 2, then $x$ is divisible by 4" is true',
    ),
    (
        '"$\\exists x \\in \\{1,...,20\\}$ such that x is divisible by both 3 and 5" is true',
        '"$\\exists x \\in \\{1,\\ldots,20\\}$ such that $x$ is divisible by both 3 and 5" is true',
    ),
    (
        '" $\\forall x \\in P$, x is odd" is a true statement',
        '"$\\forall x \\in P$, $x$ is odd" is a true statement',
    ),
]

# Regex cleanup for remaining scars
REGEXES: list[tuple[str, str]] = [
    # unpaired "$... ≡ $..." → use \equiv inside one span or display
    (
        r"\$\\neg\(\\forall x\\,\s*P\(x\)\)\s*≡\s*\$\\exists x\\,\\neg P\(x\)\.?",
        r"$$\\neg(\\forall x\\, P(x)) \\equiv \\exists x\\, \\neg P(x)$$",
    ),
    (
        r"\$\\neg\(\\forall x\\,\s*P\(x\)\)\s*≡\s*\$\\exists x\\,\\neg P\(x\)",
        r"$$\\neg(\\forall x\\, P(x)) \\equiv \\exists x\\, \\neg P(x)$$",
    ),
    # "prime \Rightarrow$ odd" scar
    (r"prime \\Rightarrow\$ odd", r"prime $\\Rightarrow$ odd"),
    (r"\\neg \(x\$\^2", r"$\\neg(x^2"),
    # leftover pad
    (
        r"\s*into symbols, the shared facts decide it directly\.?",
        "",
    ),
    (
        r"So the claim is true: it lines up with those shared facts\.?",
        "So the statement is True.",
    ),
]


def fix(s: str) -> str:
    for a, b in EXACT:
        s = s.replace(a, b)
    for pat, repl in REGEXES:
        s = re.sub(pat, repl, s)
    # Fix odd: "$\exists$ (game)" keep as prose
    s = s.replace("$\\exists$ (game)", "an existential claim (a game)")
    # Quantifier flips scar
    s = re.sub(
        r"\$\(\s*\\forall\s*→\s*\$\\exists\s*,\s*\$\\exists\s*→\s*\$\\forall\s*\)\$?",
        r"$(\\forall\\to\\exists,\\ \\exists\\to\\forall)$",
        s,
    )
    s = re.sub(
        r"flips the quantifiers \(\s*\\forall\s*→\s*\$\\exists\s*,\s*\$\\exists\s*→\s*\$\\forall\s*\)",
        r"flips the quantifiers ($\\forall \\to \\exists$, $\\exists \\to \\forall$)",
        s,
    )
    s = re.sub(
        r"flips the quantifiers \$\(\\forall\s*→\s*\$\\exists\s*,\s*\$\\exists\s*→\s*\$\\forall\s*\)\$?",
        r"flips the quantifiers ($\\forall \\to \\exists$, $\\exists \\to \\forall$)",
        s,
    )
    # "$\forall$ failed" leftovers
    s = s.replace('"$\\forall$ failed chip $\\exists a$ defect code"', '"every failed chip has some defect code"')
    s = s.replace('"$\\exists a$ single code $\\forall$ failed chip"', '"one code covers every failed chip"')
    s = re.sub(r'"\$\\forall\$ failed chip \$\\exists a\$ defect code"', r'"every failed chip has some defect code"', s)
    s = re.sub(
        r'"\$\\exists a\$ single code \$\\forall\$ failed chip"',
        r'"one code covers every failed chip"',
        s,
    )
    s = re.sub(r"\n{3,}", "\n\n", s)
    return s


def odd_dollars(s: str) -> bool:
    n = 0
    i = 0
    while i < len(s):
        if s.startswith("$$", i):
            i += 2
            continue
        if s[i] == "$":
            n += 1
        i += 1
    return n % 2 == 1


def main() -> None:
    tasks = json.loads(DUMP.read_text(encoding="utf-8"))
    out = []
    for t in tasks:
        t["context"] = fix(t["context"])
        t["solution_overview"] = fix(t["solution_overview"])
        t["statements"] = [fix(s) for s in t["statements"]]
        t["tactical_explanations"] = [fix(s) for s in t["tactical_explanations"]]
        out.append(build.normalize_task_dollars(t))
    build.write_ts(out)

    odd = []
    for t in out:
        for field, vals in [
            ("ctx", [t["context"]]),
            ("ov", [t["solution_overview"]]),
            ("stmt", t["statements"]),
            ("expl", t["tactical_explanations"]),
        ]:
            for i, s in enumerate(vals):
                if odd_dollars(s):
                    odd.append(f"{t['id']} {field}{i}")
    print("wrote", len(out), "odd_$", len(odd))
    for x in odd[:30]:
        print(" ", x)


if __name__ == "__main__":
    main()
