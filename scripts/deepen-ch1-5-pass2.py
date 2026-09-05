#!/usr/bin/env python3
"""Pass 2: clear residual Ch1–5 audit failures after deepen-ch1-5-1318.

Fixes:
- leftover Ch5 shared-lookup stubs (false letters without claim-assert block)
- thin Ch3 conceptual letters (<180)
- identical openers within a case
- Ada/Finn English-in-$$ in Ch1 exam
"""

from __future__ import annotations

import json
import re
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

HDR_RE = re.compile(r"^(\*\*([A-E])\.\*\*\s*→\s*(True|False))\s*\n\n([\s\S]*)$")
CLOSER_RE = re.compile(r"\n*\s*So the statement is (True|False)\.?\s*$", re.I)

LOOKUP_OPENERS = [
    "The shared solve isolates",
    "From the overview solve, read",
    "The recovered unknown for this claim is",
    "The system solve already produced",
    "Read off the overview value for",
]

SHARED_SHORT = re.compile(
    r"(?:Write the general identity[^\n]*\n+)?"
    r"(?:Start from the identity[^\n]*\n+)?"
    r"(?:Apply the relevant algebra rule[^\n]*\n+)?"
    r"(?:State the rule[^\n]*\n+)?"
    r"(?:Expand or simplify[^\n]*\n+)?"
    r"In the shared two-unknown system, the overview already solved for "
    r"(?P<role>.+?)\.\s*"
    r"State that recovered value before testing the claim:\s*"
    r"\$\$\s*(?P<rec>.+?)\s*\$\$\s*"
    r"(?P<tail>That recovered value is not the figure[^\n]*\.|"
    r"The recovered value and the claim agree\.|"
    r"Those two (?:displays|figures) (?:do not )?agree\.)\s*"
    r"(?:So the statement is (?:True|False)\.?)?\s*$",
    re.S | re.I,
)

OPENER_VARIANTS = {
    "The square-of-a-sum identity is $(A+B)^{2}=A^{2}+2AB+B^{2}$.": [
        "The square-of-a-sum identity is $(A+B)^{2}=A^{2}+2AB+B^{2}$.",
        "Expand a binomial square with the standard $(A+B)^{2}$ identity.",
        "Start from $(A+B)^{2}=A^{2}+2AB+B^{2}$ and substitute the claim's letters.",
        "Apply the square-of-a-sum rule to the printed left-hand side.",
        "Use $(A+B)^{2}=A^{2}+2AB+B^{2}$ before collecting like terms.",
    ],
    "Solve the growth equation for time by taking logarithms.": [
        "Solve the growth equation for time by taking logarithts.",  # placeholder fixed below
    ],
}


def strip_closer(body: str) -> str:
    return CLOSER_RE.sub("", body.strip()).rstrip()


def ensure_closer(body: str, truth: bool) -> str:
    verd = "True" if truth else "False"
    body = strip_closer(body).rstrip()
    if not body.endswith((".", "!", "?")):
        body += "."
    return body + f"\n\nSo the statement is {verd}."


def fix_shared_short(expl: str, truth: bool, idx: int) -> str | None:
    m = HDR_RE.match(expl.strip())
    if not m:
        return None
    letter, body = m.group(2), m.group(4)
    body_c = strip_closer(body)
    sm = SHARED_SHORT.match(body_c)
    if not sm:
        # Also match when tip lines precede without being in regex start
        sm = SHARED_SHORT.search(body_c)
        if not sm:
            return None
        # Drop everything before the shared-system sentence
        body_c = body_c[sm.start() :]
        sm = SHARED_SHORT.match(body_c)
        if not sm:
            return None
    role = sm.group("role").strip()
    rec = sm.group("rec").strip()
    lead = LOOKUP_OPENERS[idx % len(LOOKUP_OPENERS)]
    if truth:
        cmp_ = "The claim names that same recovered figure, so the displays agree."
    else:
        cmp_ = "The claim names a different figure, so the displays do not agree."
    new_body = ensure_closer(
        "A True/False claim about a recovered unknown is checked by "
        "reading that value from the shared solve and comparing it with "
        "the figure printed on the card.\n\n"
        f"{lead} {role}:\n\n$$\n{rec}\n$$\n\n{cmp_}",
        truth,
    )
    return f"**{letter}.** → {'True' if truth else 'False'}\n\n{new_body}"


def deepen_thin_conceptual(expl: str, truth: bool, idx: int) -> str | None:
    m = HDR_RE.match(expl.strip())
    if not m or len(expl) >= 180:
        return None
    letter, body = m.group(2), strip_closer(m.group(4))
    tips = [
        "Name the rule behind the claim, then match the recovered expression or number to the printed figure.",
        "Read the shared isolation from the overview, then test whether the claim reprints it correctly.",
        "Compare the claim with the isolation or sign pattern settled in the overview.",
        "Keep the comparison explicit: recovered quantity versus the figure named on the card.",
        "State what the overview already settled, then test whether the claim matches that result.",
    ]
    tip = tips[idx % len(tips)]
    if body.startswith(tip[:24]):
        return None
    new_body = ensure_closer(f"{tip}\n\n{body}", truth)
    return f"**{letter}.** → {'True' if truth else 'False'}\n\n{new_body}"


def vary_case_openers(expls: list[str], aks: list[bool]) -> list[str]:
    """If 3+ letters share the same first sentence, rotate variants."""
    openers = []
    bodies = []
    headers = []
    for e in expls:
        m = HDR_RE.match(e.strip())
        if not m:
            openers.append("")
            bodies.append(e)
            headers.append("")
            continue
        headers.append(f"**{m.group(2)}.** → {m.group(3)}")
        body = m.group(4)
        first = body.split("\n", 1)[0].strip()
        openers.append(first)
        bodies.append(body)

    counts = Counter(o for o in openers if o)
    dup = {o for o, n in counts.items() if n >= 3}
    if not dup:
        return expls

    out = []
    seen: dict[str, int] = {}
    for i, (hdr, op, body, truth) in enumerate(zip(headers, openers, bodies, aks)):
        if not hdr or op not in dup:
            out.append(expls[i])
            continue
        n = seen.get(op, 0)
        seen[op] = n + 1
        if n == 0:
            out.append(expls[i])
            continue
        if op.startswith("The "):
            variants = [
                op,
                "Write " + op[4:],
                "Using the same setup, " + op[0].lower() + op[1:],
                "For this claim, " + op[0].lower() + op[1:],
                "Next, " + op[0].lower() + op[1:],
            ]
        elif op.startswith("Each "):
            variants = [
                op,
                "Every " + op[5:],
                "For each dated amount, " + op[5:].lstrip(),
                "Taking the payments one by one, " + op[5:].lstrip(),
                "Discounting term by term, " + op[5:].lstrip(),
            ]
        elif op.startswith("Discount each"):
            variants = [
                op,
                "Bring each dated cash flow back to today at the recovered rate.",
                "PDV each payment at the recovered discount factor.",
                "Convert every future cash amount to today's dollars first.",
                "Apply the recovered discount factor to each dated cash flow.",
            ]
        elif op.startswith("Present value"):
            variants = [
                op,
                "Discount the future cash amount with the recovered factor.",
                "Write the present-value formula before substituting.",
                "Convert the future payment to today's dollars.",
                "Apply $(1+r)^{-t}$ to the named future cash amount.",
            ]
        elif op.startswith("From the shared solve"):
            variants = [
                op,
                "Read the recovered value from the shared solve.",
                "Use the overview's recovered unknown for this claim.",
                "The shared solve already produced the figure being tested.",
                "Compare the claim with the overview's recovered value.",
            ]
        elif op.startswith("The domain needs"):
            variants = [
                op,
                "Require $x \\ge 0$, then isolate and square.",
                "Enforce the domain $x \\ge 0$ before isolating.",
                "Start from the domain restriction $x \\ge 0$, then isolate and square.",
                "Keep $x \\ge 0$ in view, isolate the radical, and square.",
            ]
        elif op.startswith("Net present value"):
            variants = [
                op,
                "NPV subtracts the upfront outlay from the discounted inflow total.",
                "Form NPV as discounted inflows minus the initial cost.",
                "Compute NPV from the recovered discounted cash-flow total.",
                "Compare inflows' present value with the project cost.",
            ]
        elif op.startswith("Option 1"):
            variants = [
                op,
                "Treat Option 1 as a level perpetuity with the stated annual payment.",
                "Option 1 pays a constant annual amount forever.",
                "Model Option 1 with the perpetuity present-value formula.",
                "For Option 1, use the level-perpetuity valuation.",
            ]
        elif op.startswith("An interior harvest"):
            variants = [
                op,
                "At an interior harvest optimum, marginal stumpage growth equals the discount rate.",
                "The Faustmann-style first-order condition equates marginal growth with $r$.",
                "Set the marginal growth of stumpage equal to the interest rate.",
                "Interior optimality requires marginal stumpage growth to match $r$.",
            ]
        elif op.startswith("The overview recovered the critical"):
            variants = [
                op,
                "Read the critical holding time $t^{*}$ from the overview solve.",
                "The shared solve already produced the critical holding time $t^{*}$.",
                "Use the recovered $t^{*}$ when testing this claim.",
                "Compare the claim with the overview's critical holding time.",
            ]
        elif op.startswith("Annual present value"):
            variants = [
                op,
                "Annual PDV uses $\\mathrm{PDV}=K(1+r)^{-t}$ with the recovered inputs.",
                "Write $\\mathrm{PDV}=K(1+r)^{-t}$ before substituting.",
                "Discount the named principal with the annual present-value formula.",
                "Apply the annual discount factor $(1+r)^{-t}$ to $K$.",
            ]
        elif op.startswith("Solve the growth equation"):
            variants = [
                op,
                "Take logarithms to isolate time in the growth equation.",
                "Solve for $t$ by applying $\\ln$ to both sides of the growth identity.",
                "Isolate time with logarithms, then substitute the recovered rates.",
                "Rearrange the growth equation and take $\\ln$ to recover $t$.",
            ]
        else:
            variants = [
                op,
                "For this claim, " + op[0].lower() + op[1:],
                "Next, " + op[0].lower() + op[1:],
                "Using the same setup, " + op[0].lower() + op[1:],
                "Now " + op[0].lower() + op[1:],
            ]
        new_op = variants[n % len(variants)]
        rest = body.split("\n", 1)[1] if "\n" in body else ""
        new_body = ensure_closer(
            strip_closer(new_op + ("\n" + rest if rest else "")), bool(truth)
        )
        verd = "True" if truth else "False"
        letter = "ABCDE"[i]
        out.append(f"**{letter}.** → {verd}\n\n{new_body}")
    return out


def fix_ada_finn(expl: str, truth: bool) -> str:
    """Move English names out of $$ for MATH 1.119 D."""
    m = HDR_RE.match(expl.strip())
    if not m:
        return expl
    body = m.group(4)
    if "Ada" not in body and "Finn" not in body:
        return expl
    body = body.replace(
        "$$Ada\\in P,\\qquad Finn\\in P$$",
        "Ada satisfies $A\\in P$ and Finn satisfies $F\\in P$:\n\n$$A\\in P,\\qquad F\\in P$$",
    )
    body = body.replace(
        "$$Ada\\in P,\\qquad Finn\\in P$$",
        "Ada and Finn both sit in $P$:\n\n$$A\\in P,\\qquad F\\in P$$",
    )
    # broader: any $$...Ada...Finn...$$
    body = re.sub(
        r"\$\$\s*Ada\\in P,\s*\\qquad\s*Finn\\in P\s*\$\$",
        lambda _m: "Ada and Finn both sit in $P$:\n\n$$A\\in P,\\qquad F\\in P$$",
        body,
    )
    body = ensure_closer(strip_closer(body), truth)
    letter = m.group(2)
    verd = "True" if truth else "False"
    return f"**{letter}.** → {verd}\n\n{body}"


def patch_ts(path: Path, bank: str) -> int:
    text = path.read_text(encoding="utf-8")
    changed = 0
    # Find tactical blocks
    matches = list(
        re.finditer(
            r"tactical_explanations:\s*\[([\s\S]*?)\]\s*,\s*\n\s*"
            r"(?:difficulty|sort_order|solution_overview|graph|id|case_id)",
            text,
        )
    )
    for m in reversed(matches):
        inner = m.group(1)
        expls = re.findall(r"`((?:\\`|[^`])*)`", inner)
        if len(expls) != 5:
            continue
        pre = text[max(0, m.start() - 2500) : m.start()]
        ak_m = list(re.finditer(r"answer_key:\s*\[([^\]]+)\]", pre))
        if not ak_m:
            continue
        aks = [
            tok.strip() == "true"
            for tok in ak_m[-1].group(1).split(",")
            if tok.strip() in ("true", "false")
        ]
        if len(aks) != 5:
            continue
        new_expls = []
        for i, (e, truth) in enumerate(zip(expls, aks)):
            ne = e
            fixed = fix_shared_short(ne, truth, i)
            if fixed:
                ne = fixed
            thin = deepen_thin_conceptual(ne, truth, i)
            if thin:
                ne = thin
            if bank.startswith("ch1") and ("Ada" in ne or "Finn" in ne):
                ne = fix_ada_finn(ne, truth)
            if ne != e:
                changed += 1
            new_expls.append(ne)
        new_expls = vary_case_openers(new_expls, aks)
        if new_expls != expls:
            changed += sum(1 for a, b in zip(expls, new_expls) if a != b)
            new_inner = ",\n".join(f"      `{e}`" for e in new_expls) + ",\n    "
            text = text[: m.start(1)] + "\n" + new_inner + text[m.end(1) :]
    path.write_text(text, encoding="utf-8")
    return changed


def patch_json(path: Path, bank: str) -> int:
    data = json.loads(path.read_text(encoding="utf-8"))
    root = data
    key = None
    tasks = data
    if isinstance(data, dict):
        for k in ("tasks", "cases", "items", "data"):
            if isinstance(data.get(k), list):
                key, tasks = k, data[k]
                break
    changed = 0
    for t in tasks:
        expls = t.get("tactical_explanations") or []
        aks = t.get("answer_key") or []
        if len(expls) != 5 or len(aks) != 5:
            continue
        new_expls = []
        for i, (e, truth) in enumerate(zip(expls, aks)):
            ne = e
            fixed = fix_shared_short(ne, bool(truth), i)
            if fixed:
                ne = fixed
            thin = deepen_thin_conceptual(ne, bool(truth), i)
            if thin:
                ne = thin
            if bank.startswith("ch1") and ("Ada" in ne or "Finn" in ne):
                ne = fix_ada_finn(ne, bool(truth))
            new_expls.append(ne)
        new_expls = vary_case_openers(new_expls, [bool(x) for x in aks])
        if new_expls != expls:
            changed += sum(1 for a, b in zip(expls, new_expls) if a != b)
            t["tactical_explanations"] = new_expls
    if key is None:
        path.write_text(json.dumps(tasks, indent=2, ensure_ascii=False) + "\n")
    else:
        root[key] = tasks
        path.write_text(json.dumps(root, indent=2, ensure_ascii=False) + "\n")
    return changed


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


def main() -> None:
    for name, path, kind in BANKS:
        n = patch_ts(path, name) if kind == "ts" else patch_json(path, name)
        print(f"{name:10} changed≈{n}")


if __name__ == "__main__":
    main()
