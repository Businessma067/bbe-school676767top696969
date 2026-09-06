#!/usr/bin/env python3
"""Rewrite naked textbook-rule STATEMENTS into concrete multi-step claims.

Policy:
  - statements / contexts: strip or rewrite rule dumps
  - explanations: NEVER delete; only adapt substitutions / expand steps
  - keep answer_key unless a rewrite forces a documented flip
"""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

# ---------------------------------------------------------------------------
# Detection
# ---------------------------------------------------------------------------

PURE_LOG_EXP = re.compile(
    r"(?x)"
    r"\\ln\s*\(\s*e\^"
    r"|e\^\{k\\ln\s*a\}"
    r"|e\^\{\\ln\(P_0\)\+kt\}"
    r"|\\log\s*\(\s*ab\s*\)\s*="
    r"|\\log\s*\(\s*a/b\s*\)\s*="
    r"|\\log\s*\(\s*a\s*\+\s*b\s*\)\s*="
    r"|\\log\s*\(\s*a\^"
    r"|\\log\s*\(\s*a\^\{2\}\s*\)\s*=\s*\(\\log\s*a\)\^\{2\}"
    r"|Also,\s*\$\\log_\{b\}"
    r"|\$f\(t\)=e\^\{t\\ln\s*a\}\$"
    r"|The identity holds for every such"
    r"|\$P_\\lambda\(t\)=P_\{-\\lambda\}\(-t\)\$\s*holds"
)

CH2_UNIVERSAL = re.compile(
    r"(?i)("
    r"holds for every"
    r"|for every real"
    r"|for every admissible"
    r"|for every positive"
    r"|The (?:unit shift|gap-four pattern|quotient identity|rational-power identity)"
    r"|Squaring \$[^$]+\$ yields"
    r"|Completing the square rewrites"
    r"|Recognising .+ as .+ is valid for every"
    r"|Prints \$"
    r")"
)

SKIP_AS_MODEL_CLAIM = re.compile(
    r"(?i)("
    r"inequality"
    r"|solutions? for every"
    r"|equation has"
    r"|defined for all"
    r"|admits two"
    r"|argument of the logarithm"
    r"|product \$u"
    r"|substitution \$u"
    r"|A\(t\)>B\(t\)"
    r"|dfrac\{A\(t\)\}"
    r"|dfrac\{B\(t\)\}"
    r"|dfrac\{d\}\{dt\}"
    r"|functional equation holds automatically"
    r"|P\(n\)=P\(0\)"
    r"|m\(n T"
    r"|P\(nt\)="
    r"|f\(g\(t\)\)=t"
    r"|g\(f\(x\)\)=x"
    r"|g\(f\(t\)\)=t"
    r"|f\(g\(x\)\)=x"
    r"|ln P\(t\)="
    r"|ln\\ln P"
    r"|e\^\{\\ln P\(t\)"
    r"|For every \$P_0>0\$ and every \$k\$, the identity \$P\(0\)"
    r"|If \$P\(t\)=P_0"
    r")"
)


def is_rule_dump_statement(s: str, chapter_hint: str) -> bool:
    # Pure log/exp textbook identities always count (even if other skip tokens appear).
    if PURE_LOG_EXP.search(s):
        return True
    if re.search(r"Also,\s*\$\\log_\{b\}", s):
        return True
    if re.search(r"^\$\\log\(", s) and re.search(r"for all", s):
        return True
    if re.search(r"^\$f\(t\)=e\^\{t\\ln a\}\$", s):
        return True
    if re.search(r"\$P_\\lambda\(t\)=P_\{-\\lambda\}\(-t\)\$\s*holds", s):
        return True
    if re.search(r"^\$\\ln\\bigl\(e\^\{kt\}\\bigr\)=kt\$", s):
        return True
    if re.search(r"^For every \$a>0\$ and every real \$k\$, \$e\^\{k\\ln a\}", s):
        return True
    if re.search(r"^\$e\^\{\\ln\(P_0\)\+kt\}", s):
        return True

    # Model / inequality / solution-set claims are not rule dumps.
    if SKIP_AS_MODEL_CLAIM.search(s):
        return False

    if chapter_hint.startswith("2") and CH2_UNIVERSAL.search(s):
        if re.search(r"\b(?:With|Given|If|At)\b[^.]{0,40}=\s*-?\d", s):
            return False
        if re.search(r"both .+ equal \$?-?\d", s):
            return False
        if re.search(r"yields \$[^$]*\d[^$]*\$", s) and "for every" not in s.lower():
            return False
        if "reciprocal of the sum" in s:
            return False
        return True
    return False


# ---------------------------------------------------------------------------
# Concrete rewrites (hand patterns + generic fallback)
# ---------------------------------------------------------------------------

# Exact statement → (new_statement, expl_suffix_or_None, key_flip_or_None)
# key_flip: None keep; True/False means set key to that value

EXACT: dict[str, tuple[str, str | None]] = {}


def _reg(old: str, new: str, expl_note: str | None = None) -> None:
    EXACT[old] = (new, expl_note)


# --- Ch2 warm-ups ---
_reg(
    "Squaring $x+1$ yields $x^2+2x+1$ for every real $x$.",
    "At $x=4$, both $(x+1)^2$ and $x^2+2x+1$ equal $25$.",
    "Substitute $x=4$: $(4+1)^2=25$ and $4^2+2\\cdot4+1=25$.",
)
_reg(
    "$(2t)^2=4t^2$ for every real $t$.",
    "At $t=3$, both $(2t)^2$ and $4t^2$ equal $36$.",
    "Substitute $t=3$: $(2\\cdot3)^2=36$ and $4\\cdot3^2=36$.",
)
_reg(
    "The unit shift $a^2-1=(a-1)(a+1)$ holds for every real $a$.",
    "At $a=5$, both $a^2-1$ and $(a-1)(a+1)$ equal $24$.",
    "Substitute $a=5$: $25-1=24$ and $(5-1)(5+1)=24$.",
)
_reg(
    "The gap-four pattern $r^2-4=(r-2)(r+2)$ holds for every real $r$.",
    "At $r=6$, both $r^2-4$ and $(r-2)(r+2)$ equal $32$.",
    "Substitute $r=6$: $36-4=32$ and $(6-2)(6+2)=32$.",
)
_reg(
    "For every real $x$, $x^2+6x+11=(x+3)^2+2$, hence $x^2+6x+11\\ge 2$.",
    "At $x=1$, both $x^2+6x+11$ and $(x+3)^2+2$ equal $18$, and $18\\ge 2$.",
    "Substitute $x=1$: $1+6+11=18$ and $(4)^2+2=18$.",
)
_reg(
    "For every real $k$, it holds that $(3k-2)^2-(9k^2-12k+3)=1$.",
    # Preserve False intent: claim the expansion equals the wrong quadratic
    "At $k=1$, expanding $(3k-2)^2$ yields the quadratic $9k^2-12k+3$.",
    "Expand: $(3-2)^2=1$, while $9-12+3=0$, so the printed quadratic is not the expansion.",
)
_reg(
    "For every real $y$, it holds that $9y^2-12y+4=(3y-2)^2$.",
    "At $y=2$, both $9y^2-12y+4$ and $(3y-2)^2$ equal $16$.",
    "Substitute $y=2$: $36-24+4=16$ and $(6-2)^2=16$.",
)
_reg(
    "Splitting $z^2-25$ as $(z-5)(z+5)$ holds for every real $z$.",
    "At $z=7$, both $z^2-25$ and $(z-5)(z+5)$ equal $24$.",
    "Substitute $z=7$: $49-25=24$ and $(7-5)(7+5)=24$.",
)
_reg(
    "For every real $x$, $x^2+6x+11=(x+3)^2-2$, hence $x^2+6x+11$ can fall below $2$.",
    "At $x=0$, both $x^2+6x+11$ and $(x+3)^2-2$ equal $11$, so the rewritten form can fall below $2$.",
    "At $x=0$: left side $11$, claimed rewrite $9-2=7\\neq11$. The wrong constant $-2$ fails.",
)
_reg(
    "For every real pair $(a,b)$, it holds that $(a+b)^3-(a-b)^3=2b(3a^2+b^2)$.",
    "At $a=2$, $b=1$, both $(a+b)^3-(a-b)^3$ and $2b(3a^2+b^2)$ equal $26$.",
    "Compute $(3)^3-(1)^3=26$ and $2\\cdot1\\cdot(12+1)=26$.",
)
_reg(
    "For every real $c$, it holds that $(6c-1)^2=36c^2-12c+1$.",
    "At $c=1$, both $(6c-1)^2$ and $36c^2-12c+1$ equal $25$.",
    "Substitute $c=1$: $5^2=25$ and $36-12+1=25$.",
)
_reg(
    "For every real $p$, it holds that $(7p-1)^2=49p^2-14p+1$.",
    "At $p=1$, both $(7p-1)^2$ and $49p^2-14p+1$ equal $36$.",
    "Substitute $p=1$: $6^2=36$ and $49-14+1=36$.",
)
_reg(
    "For every real $a$, it holds that $(2a-1)^2=4a^2-4a+1$.",
    "At $a=3$, both $(2a-1)^2$ and $4a^2-4a+1$ equal $25$.",
    "Substitute $a=3$: $5^2=25$ and $36-12+1=25$.",
)
_reg(
    "For every real pair $(x,y)$, $(x^2-y^2)^2+(2xy)^2=(x^2+y^2)^2$.",
    "At $x=2$, $y=1$, both $(x^2-y^2)^2+(2xy)^2$ and $(x^2+y^2)^2$ equal $25$.",
    "Compute $(4-1)^2+(4)^2=9+16=25$ and $(4+1)^2=25$.",
)
_reg(
    "For every real pair $(x,y)$, $x^3+y^3=(x+y)(x^2-xy+y^2)$.",
    "At $x=2$, $y=1$, both $x^3+y^3$ and $(x+y)(x^2-xy+y^2)$ equal $9$.",
    "Compute $8+1=9$ and $(3)(4-2+1)=9$.",
)
_reg(
    "For every real $x$, $(x-1)(x+1)(x^2+1)(x^4+1)=x^8-1$.",
    "At $x=2$, both $(x-1)(x+1)(x^2+1)(x^4+1)$ and $x^8-1$ equal $255$.",
    "Compute $(1)(3)(5)(17)=255$ and $256-1=255$.",
)
_reg(
    "For every real $x$, $(x-1)(x+1)(x^2+1)(x^4+1)=x^{16}-1$.",
    "At $x=2$, both $(x-1)(x+1)(x^2+1)(x^4+1)$ and $x^{16}-1$ equal $255$.",
    "Left side $255$, while $2^{16}-1=65535\\neq255$.",
)
_reg(
    "For every real $t$, $t^2+6t+11=(t+3)^2+2$, hence $t^2+6t+11\\ge 2$.",
    "At $t=1$, both $t^2+6t+11$ and $(t+3)^2+2$ equal $18$, and $18\\ge 2$.",
    "Substitute $t=1$: both sides equal $18$.",
)
_reg(
    "For every real $t$, $t^2+6t+11=(t+3)^2-2$, hence $t^2+6t+11$ can fall below $2$.",
    "At $t=0$, both $t^2+6t+11$ and $(t+3)^2-2$ equal $11$, so the rewritten form can fall below $2$.",
    "At $t=0$ the sides are $11$ and $7$; the claimed rewrite fails.",
)
_reg(
    "For every real $p$, it holds that $(5p-1)^2=25p^2-10p+1$.",
    "At $p=1$, both $(5p-1)^2$ and $25p^2-10p+1$ equal $16$.",
    "Substitute $p=1$: $4^2=16$ and $25-10+1=16$.",
)

# Ch10 pure identities
_reg(
    "For every $a>0$ and every real $k$, $e^{k\\ln a}=a^{k}$.",
    "With $a=e$ and $k=2$, both $e^{k\\ln a}$ and $a^{k}$ equal $e^{2}$.",
    "Substitute $a=e$, $k=2$: $e^{2\\ln e}=e^{2}$ and $e^{2}=e^{2}$.",
)
_reg(
    "$e^{\\ln(P_0)+kt}$ equals $P_0 e^{kt}$ for every $P_0>0$.",
    "With $P_0=e$, $k=1$, $t=0$, both $e^{\\ln(P_0)+kt}$ and $P_0 e^{kt}$ equal $e$.",
    "Substitute: $e^{\\ln e+0}=e$ and $e\\cdot e^{0}=e$.",
)
_reg(
    "$\\ln(e^{kt})=kt$ for every real $k,t$.",
    "With $k=2$ and $t=3$, both $\\ln(e^{kt})$ and $kt$ equal $6$.",
    "Substitute: $\\ln(e^{6})=6$ and $2\\cdot3=6$.",
)
_reg(
    "$\\ln\\bigl(e^{kt}\\bigr)=kt$ for every real $k,t$.",
    "With $k=2$ and $t=3$, both $\\ln\\bigl(e^{kt}\\bigr)$ and $kt$ equal $6$.",
    "Substitute: $\\ln(e^{6})=6$ and $2\\cdot3=6$.",
)
_reg(
    "$f(t)=e^{t\\ln a}$ for every real $t$.",
    "With $a=e$ and $t=2$, both $f(t)=a^{t}$ and $e^{t\\ln a}$ equal $e^{2}$.",
    "By definition $a^{t}=e^{t\\ln a}$; at these letters both equal $e^{2}$.",
)
_reg(
    "$\\log(ab)=\\log a+\\log b$ for all $a>0$, $b>0$.",
    "With $a=4$, $b=8$ and base $2$, both $\\log(ab)$ and $\\log a+\\log b$ equal $5$.",
    "Compute $\\log_2 32=5$ and $2+3=5$.",
)
_reg(
    "$\\log(a/b)=\\log a-\\log b$ for all $a>0$, $b>0$.",
    "With $a=8$, $b=2$ and base $2$, both $\\log(a/b)$ and $\\log a-\\log b$ equal $2$.",
    "Compute $\\log_2 4=2$ and $3-1=2$.",
)
_reg(
    "$\\log(a+b)=\\log a+\\log b$ for all $a>0$, $b>0$.",
    "With $a=4$, $b=4$ and base $2$, both $\\log(a+b)$ and $\\log a+\\log b$ equal $3$.",
    "Left: $\\log_2 8=3$; right: $2+2=4\\neq3$.",
)
_reg(
    "$\\log(a^{c})=c\\log a$ for all $a>0$ and all real $c$.",
    "With $a=4$, $c=3$ and base $2$, both $\\log(a^{c})$ and $c\\log a$ equal $6$.",
    "Compute $\\log_2(64)=6$ and $3\\cdot2=6$.",
)
_reg(
    "$\\log(a^{2})=(\\log a)^{2}$ for all $a>0$.",
    "With $a=8$ and base $2$, both $\\log(a^{2})$ and $(\\log a)^{2}$ equal $6$.",
    "Left: $\\log_2 64=6$; right: $3^{2}=9\\neq6$.",
)
_reg(
    "Also, $\\log_{b}1=0$ for every admissible base $b$.",
    "With base $b=5$, both $\\log_{b}1$ and $0$ agree.",
    "By definition $b^{0}=1$, so $\\log_5 1=0$.",
)
_reg(
    "Also, $\\log_{b}b=1$ for every admissible base $b$.",
    "With base $b=7$, both $\\log_{b}b$ and $1$ agree.",
    "By definition $b^{1}=b$, so $\\log_7 7=1$.",
)
_reg(
    "$P_\\lambda(t)=P_{-\\lambda}(-t)$ holds for every real $\\lambda$ and every real $t$.",
    "With $\\lambda=2$ and $t=3$, both $P_\\lambda(t)$ and $P_{-\\lambda}(-t)$ equal $P_0 e^{6}$.",
    "Expand: $P_0 e^{2\\cdot3}=P_0 e^{6}$ and $P_0 e^{-2\\cdot(-3)}=P_0 e^{6}$.",
)


def generic_ch2_rewrite(s: str, key: bool) -> tuple[str, str] | None:
    """Fallback: turn 'For every real X, LHS=RHS' into a concrete plug-in."""
    m = re.match(
        r"(?i)^For every real (?:pair |triple |quadruple )?\(?([a-z,\s]+)\)?,?\s*(?:it holds that\s*)?\$(.+)\$(?:\s*,?\s*hence.+)?$",
        s.strip(),
    )
    if not m:
        m2 = re.match(
            r"(?i)^(?:Completing the square rewrites|Recognising|Prints|Splitting)\s+(.+)$",
            s.strip(),
        )
        if not m2:
            return None
        # leave complex ones if not in EXACT — try a light concrete wrapper
        body = s
        if key:
            return (
                f"Evaluating a concrete instance confirms: {body[0].lower() + body[1:]}"
                if False
                else None
            )
        return None

    letters = [x.strip() for x in m.group(1).split(",") if x.strip()]
    formula = m.group(2).strip()

    # pick small integers
    vals = {}
    pool = [2, 1, 3, 4, 5]
    for i, L in enumerate(letters):
        # skip if letter looks like a tuple label already handled
        if len(L) > 3:
            continue
        vals[L] = pool[i % len(pool)]

    if not vals:
        return None

    # Build "At a=2, b=1, both LHS and RHS ..." when formula has =
    if "=" in formula and not re.search(r"[<>]", formula):
        left, right = formula.split("=", 1)
        left, right = left.strip(), right.strip()
        # Keep symbolic claim but with concrete letters
        assign = ", ".join(f"${k}={v}$" for k, v in vals.items())
        if key:
            new = f"At {assign}, both ${left}$ and ${right}$ agree."
            note = f"Substitute {assign} into both sides of ${left}={right}$ and compare."
        else:
            new = f"At {assign}, both ${left}$ and ${right}$ agree."
            note = f"Substitute {assign}; the two sides disagree, so the claimed identity fails at this point."
        return new, note

    assign = ", ".join(f"${k}={v}$" for k, v in vals.items())
    new = f"At {assign}, the claim ${formula}$ holds."
    note = f"Substitute {assign} into ${formula}$."
    return new, note


def adapt_explanation(expl: str, note: str | None, letter: str, key: bool) -> str:
    """Append a concrete substitution paragraph; never delete existing rule math."""
    if not note:
        return expl
    # If explanation already contains a similar concrete check, leave alone
    if "Substitute" in expl and note.split(":")[0] in expl:
        return expl
    # Insert concrete check just before the closer
    closer = re.search(r"\nSo the statement is (?:True|False)\.\s*$", expl)
    inject = f"\n\nConcrete check for the rewritten claim:\n\n{note}\n"
    # Prefer displaying note as prose + keep any $$ if note has none
    if not note.startswith("$$") and "=" in note and "$" in note:
        inject = f"\n\nConcrete check for the rewritten claim. {note}\n"
    if closer:
        return expl[: closer.start()] + inject + expl[closer.start() :]
    return expl + inject + f"\nSo the statement is {'True' if key else 'False'}."


def load_json(path: Path):
    data = json.loads(path.read_text())
    key = "tasks" if "tasks" in data else "cases" if "cases" in data else None
    return data, key


def chapter_hint(path: Path, case: dict) -> str:
    cid = case.get("case_id", "")
    m = re.search(r"MATH\s+(\d+)", cid)
    if m:
        return m.group(1)
    if "ch2" in path.name:
        return "2"
    if "ch10" in path.name:
        return "10"
    if "ch6" in path.name:
        return "6"
    if "ch4" in path.name:
        return "4"
    return "?"


def process_file(path: Path, stats: dict) -> None:
    data, list_key = load_json(path)
    cases = data[list_key] if list_key else data
    changed = False
    for case in cases:
        hint = chapter_hint(path, case)
        stmts = case.get("statements") or []
        expls = case.get("tactical_explanations") or []
        keys = case.get("answer_key") or []
        for i, s in enumerate(stmts):
            if not is_rule_dump_statement(s, hint):
                continue
            stats["detected"] += 1
            key = bool(keys[i]) if i < len(keys) else True
            letter = chr(65 + i)

            if s in EXACT:
                new_s, note = EXACT[s]
            else:
                # try mild ch2 generic
                gen = generic_ch2_rewrite(s, key) if hint.startswith("2") else None
                if gen is None:
                    # ch10 / residual: wrap with a concrete specialization sentence
                    if PURE_LOG_EXP.search(s) or "for every" in s.lower() or "for all" in s.lower():
                        # specialize common residual patterns
                        new_s, note = specialize_residual(s, key)
                        if new_s is None:
                            stats["skipped"] += 1
                            continue
                    else:
                        stats["skipped"] += 1
                        continue
                else:
                    new_s, note = gen

            if new_s == s:
                stats["skipped"] += 1
                continue

            stmts[i] = new_s
            if i < len(expls):
                expls[i] = adapt_explanation(expls[i], note, letter, key)
            stats["rewritten"] += 1
            stats["examples"].append(f"{path.name} {case.get('case_id')} {letter}: {s[:80]} → {new_s[:80]}")
            changed = True

        # Context teaching-box cleanup (contexts only)
        ctx = case.get("context") or ""
        new_ctx, n_ctx = strip_context_rule_boxes(ctx)
        if n_ctx:
            case["context"] = new_ctx
            stats["ctx_stripped"] += n_ctx
            changed = True

    if changed:
        path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
        stats["files"] += 1


def specialize_residual(s: str, key: bool) -> tuple[str | None, str | None]:
    """Handle remaining high-value identity dumps with templates."""
    # Brahmagupta-style / domain-label leftovers: add concrete numbers
    m = re.search(
        r"For every real quadruple \(([a-z]),([a-z]),([a-z]),([a-z])\), it holds that \$(.+)\$",
        s,
    )
    if m:
        a, b, c, d, formula = m.groups()
        # fix known typo pattern v/z confusion by keeping letters
        new = (
            f"At ${a}=1$, ${b}=2$, ${c}=2$, ${d}=1$, both sides of "
            f"${formula}$ equal $25$."
        )
        note = f"Substitute the four letters into ${formula}$ and compare both sides."
        if not key:
            new = (
                f"At ${a}=1$, ${b}=2$, ${c}=2$, ${d}=1$, both sides of "
                f"${formula}$ equal $25$."
            )
        return new, note

    m = re.search(
        r"For every real pair \(([a-z]),([a-z])\), \$(.+)\$",
        s,
    )
    if m:
        a, b, formula = m.groups()
        if "=" in formula:
            L, R = formula.split("=", 1)
            new = f"At ${a}=2$, ${b}=1$, both ${L.strip()}$ and ${R.strip()}$ agree."
            note = f"Substitute ${a}=2$, ${b}=1$ into both sides."
            return new, note

    m = re.search(
        r"For every real \$([a-z])\$, \$(.+)\$",
        s,
    )
    if m:
        x, formula = m.groups()
        if "=" in formula:
            L, R = formula.split("=", 1)
            new = f"At ${x}=2$, both ${L.strip()}$ and ${R.strip()}$ agree."
            note = f"Substitute ${x}=2$ into both sides."
            return new, note

    # Power / root identities
    m = re.search(
        r"For every real (?:pair )?\(?([a-z,\s]+)\)?,?\s*\$\\sqrt\[(\d)\]\{(.+?)\}=(.+)\$",
        s,
    )
    if m:
        letters = [x.strip() for x in m.group(1).split(",") if x.strip()]
        root_n, inside, rhs = m.group(2), m.group(3), m.group(4)
        assign = ", ".join(
            f"${L}={v}$" for L, v in zip(letters, [2, 1, 3, 4])
        ) or "$x=2$"
        new = (
            f"At {assign}, both $\\sqrt[{root_n}]{{{inside}}}$ and ${rhs}$ agree."
            if key
            else f"At {assign}, both $\\sqrt[{root_n}]{{{inside}}}$ and ${rhs}$ agree."
        )
        note = f"Substitute {assign} and compare the root with the claimed right-hand side."
        return new, note

    m = re.search(
        r"For every real \$([a-z])\$, \$\(([^)]+)\)\^(\d)=([^$]+)\$",
        s,
    )
    if m:
        x, base, exp, rhs = m.groups()
        new = f"At ${x}=2$, both $({base})^{{{exp}}}$ and ${rhs}$ agree."
        note = f"Substitute ${x}=2$ into both sides."
        return new, note

    # Absolute value / simple
    if re.search(r"For every real \$x\$, \$\\|x\\|\\ge 0\$", s):
        return (
            "At $x=-3$, both $|x|$ and $3$ agree, and $|x|\\ge 0$.",
            "Substitute $x=-3$: $|-3|=3\\ge 0$.",
        )

    # Quotient / rational-power identity named forms
    if "quotient identity" in s.lower() or "rational-power identity" in s.lower():
        if key:
            return (
                "With $a=4$, $b=2$, $m=3$, $n=1$, $k=2$, both sides of the displayed power-quotient identity agree.",
                "Substitute the concrete positive letters into both sides and compare.",
            )
        return (
            "With $a=4$, $b=2$, $m=3$, $n=1$, $k=2$, both sides of the displayed identity agree.",
            "Substitute; the two sides disagree under the printed exponents.",
        )

    # Completing the square
    m = re.match(
        r"Completing the square rewrites \$(.+)\$ as \$(.+)\$ for every real \$([a-z])\$\.",
        s,
    )
    if m:
        left, right, x = m.groups()
        new = f"At ${x}=3$, both ${left}$ and ${right}$ agree."
        note = f"Substitute ${x}=3$ into both the original quadratic and the completed-square form."
        return new, note

    # Recognising
    m = re.match(
        r"Recognising \$(.+)\$ as \$(.+)\$ is valid for every real pair\.",
        s,
    )
    if m:
        left, right = m.groups()
        new = f"At $x=2$, $y=1$, both ${left}$ and ${right}$ agree."
        note = "Substitute $x=2$, $y=1$ into both spellings."
        return new, note

    # Prints wrong identity
    m = re.match(r"Prints \$(.+)\$ for every real \$([a-z])\$\.", s)
    if m:
        formula, x = m.groups()
        new = f"At ${x}=1$, the printed equality ${formula}$ holds."
        note = f"Substitute ${x}=1$ into ${formula}$; the sides disagree."
        return new, note

    # For z>0 identity
    m = re.match(r"For \$z>0\$, the identity \$(.+)\$ holds\.", s)
    if m:
        formula = m.group(1)
        new = f"At $z=8$, both sides of ${formula}$ agree."
        note = f"Substitute $z=8$ into ${formula}$."
        return new, note

    return None, None


def strip_context_rule_boxes(ctx: str) -> tuple[str, int]:
    """Remove pasted general-rule teaching displays from contexts only."""
    removed = 0

    # Specific known teaching chain in 10.2.48
    def repl_chain(m: re.Match) -> str:
        nonlocal removed
        body = m.group(0)
        if re.search(
            r"\\log\s*a\s*-\s*\\log\s*b\s*=\s*\\log.*\\frac\{\\log a\}\{\\log b\}",
            body,
        ):
            removed += 1
            return "Claimed chain for $a,b>0$ mixes a true quotient step with a false ratio-of-logs step. "
        return body

    out = re.sub(
        r"Claimed chain for \$a,b>0\$:\s*\$\$.*?\$\$\.?",
        repl_chain,
        ctx,
        flags=re.S,
    )

    # Generic: display that is ONLY an abstract textbook identity (no model def)
    ABSTRACT_ONLY = re.compile(
        r"\$\$\s*("
        r"i_m\s*=\s*\\frac\{r\}\{12\}"
        r"|FV\s*=\s*P\(1\+i\)\^\{nt\}"
        r"|\\Delta\s*=\s*b\^\{?2\}?\s*-\s*4ac"
        r"|\(a\+b\)\^2\s*=\s*a\^2\+2ab\+b\^2"
        r"|\\log_b\(u\\cdot v\)\s*=\s*\\log_b u\+\\log_b v"
        r")\s*\$\$",
        re.S,
    )

    def drop_abs(m: re.Match) -> str:
        nonlocal removed
        removed += 1
        return ""

    out2, n = ABSTRACT_ONLY.subn(drop_abs, out)
    removed += n
    out2 = re.sub(r"\n{3,}", "\n\n", out2)
    out2 = re.sub(r"  +", " ", out2)
    return out2.strip() if removed else ctx, removed


def main() -> None:
    stats = {
        "detected": 0,
        "rewritten": 0,
        "skipped": 0,
        "ctx_stripped": 0,
        "files": 0,
        "examples": [],
    }
    files = sorted((ROOT / "src/data").glob("math-ch*.json")) + sorted(
        (ROOT / "src/data").glob("math-cases-ch*.json")
    )
    for path in files:
        process_file(path, stats)

    print(json.dumps({k: v for k, v in stats.items() if k != "examples"}, indent=2))
    print("--- examples ---")
    for e in stats["examples"][:40]:
        print(e)
    print(f"... total rewritten {stats['rewritten']}, skipped {stats['skipped']}")


if __name__ == "__main__":
    main()
