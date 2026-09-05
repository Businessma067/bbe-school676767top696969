#!/usr/bin/env python3
"""Polish tactical explanations toward Chapter 13 teacher voice.

Rules (from MATH 13.* banks):
- Content-first: name the idea this claim needs, then formula, then numbers.
- No rotating coaching openers ("Begin from the governing rule…", "Recall the rule…").
- No "live claim says" / flip-meta commentary.
- One plain closer: "So the statement is True/False."
- Keep KaTeX; one algebraic step per $$ block when possible.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

META_OPENER_RES = [
    re.compile(
        r"^(?:"
        r"Recall the rule, substitute the given letters or numbers, and compare the simplified result with the claim\.|"
        r"Use the governing identity to expand or simplify, then match the printed claim\.|"
        r"Invoke the algebra rule the claim needs, simplify one step per display, then match the claim\.|"
        r"Begin with the governing identity, insert the claim’s symbols, and match the simplified form to the claim\.|"
        r"Write the general identity, insert the claim’s symbols, and simplify before comparing\.|"
        r"Parse the printed claim, reduce both sides, and compare\.|"
        r"Begin from the governing identity and simplify one display at a time\.|"
        r"Begin from the governing algebra rule, reduce one display at a time, then compare\.|"
        r"State what the overview already settled, then test whether the claim matches that result\.|"
        r"Name the rule behind the claim, then match the recovered expression or number to the printed figure\.|"
        r"Name the recovered subscriber model, then substitute the claimed time:|"
        r"Begin from the governing rule for this claim, then isolate one identity or evaluation per display line\.|"
        r"After substituting the stem parameters, simplify exactly once per line and only then compare the resulting number with the claimed threshold; the direction of that final comparison decides the statement\.|"
        r"Name the growth law that the claim depends on, then substitute the recovered values\.|"
        r"Read the recovered parameters from the overview and test only this comparison\.|"
        r"Convert the claim into one equation in the shared model and solve it step by step\.|"
        r"Keep the continuous-versus-discrete distinction explicit while checking the claim\.|"
        r"Translate the wording into a threshold comparison against the recovered level\.|"
        r"Isolate the exact inequality the claim asserts, then plug in the recovered figures\.|"
        r"Work letter-locally from the shared recoveries; do not rebuild the whole stem model\.|"
        r"Check units and the initial level first, then finish the claim's numerical comparison\.|"
        r"Rewrite the claim as a one-line test against the recovered continuous or discrete path\.|"
        r"Use logs only if the claim forces a solve-for-time step; otherwise compare levels directly\.|"
        r"The live claim says:.*|"
        r"The claim asserts:.*"
        r")\s*",
        re.I | re.M,
    )
]

TRAILING_COACH_RES = [
    re.compile(
        r"\n+Name the governing rule, substitute the concrete numbers, then compare with the claim\.?\s*$",
        re.I,
    ),
    re.compile(
        r"\n+Recall the rule, substitute the given letters or numbers, and compare the simplified result with the claim\.?\s*$",
        re.I,
    ),
    re.compile(
        r"\n+After substituting the stem parameters, simplify exactly once per line[^\n]*\s*$",
        re.I,
    ),
]

AWKWARD_FLIP = [
    (r"\blies not strictly below\b", "does not lie strictly below"),
    (r"\blies not strictly above\b", "does not lie strictly above"),
    (r"\ba factor not strictly larger than\b", "a factor that is not strictly larger than"),
    (r"\ba factor not strictly smaller than\b", "a factor that is not strictly smaller than"),
    (r"\bis not strictly less than\b", "is not strictly less than"),  # ok
    (r"\bgrows at continuous annual force different from\b", "does not grow at continuous annual force"),
]


HEADER_RE = re.compile(
    r"^(\*\*([A-E])\.\*\*\s*→\s*(True|False))\s*\n\n([\s\S]*)$"
)


def scrub_letter(text: str) -> tuple[str, str, str]:
    """Return (header_line, verd, body)."""
    m = HEADER_RE.match(text.strip())
    if not m:
        raise ValueError("bad header: " + text[:60])
    header, letter, verd, body = m.group(1), m.group(2), m.group(3), m.group(4)
    del letter
    body = body.strip()
    for pat in META_OPENER_RES:
        body = pat.sub("", body).strip()
    for pat in TRAILING_COACH_RES:
        body = pat.sub("", body).strip()
    body = re.sub(
        r"(?is)\n*So the statement is (?:True|False)\.?\s*$",
        "",
        body,
    ).strip()
    body = re.sub(r"\n{3,}", "\n\n", body).strip()
    return header, verd, body


def deepen_body(body: str, statement: str, verd: str, stem_kind: str | None) -> str:
    """Add a short teacher bridge when the body is only bare displays."""
    body = body.strip()
    # Fix awkward flip English inside body if any leaked
    for a, b in AWKWARD_FLIP:
        body = re.sub(a, b, body)

    n_disp = body.count("$$")
    # If already has prose (>= one sentence before first $$) and length ok, keep.
    first = body.split("$$", 1)[0].strip()
    has_prose = len(first) >= 40 and not first.startswith("$$")
    if has_prose and len(body) >= 180 and n_disp >= 2:
        return body.rstrip(".") + f".\n\nSo the statement is {verd}."

    # Stem-aware one-line teaching lead (content, not coaching meta).
    leads = {
        "cont_vs_disc_annual": "Continuous force $k$ compounds through $e^{kt}$; a discrete annual model uses $(1+r)^{t}$ instead.",
        "gdp_per_capita_trap": "GDP per capita is a ratio of two exponential paths, so its force is a difference of forces, not a sum.",
        "radioactive_decay": "Half-life converts to a continuous decay constant through $k=\ln 2/T_{1/2}$.",
        "piecewise_rate_solve_t": "After the switch time the path restarts from the level already reached, with the new force.",
        "compound_interest": "Compound growth multiplies by the same factor each period; logs undo that product when we solve for time.",
        "investment_solve_t": "Solving for time means taking a logarithm of both sides of the growth equation.",
        "log_equations_linear": "A logarithmic equation is equivalent to an exponential one after the definition of $\log_b$ is applied.",
        "log_equations_quadratic": "A substitution such as $u=\log_b x$ can turn a log equation into an ordinary quadratic.",
        "change_of_base_solve": "Change-of-base rewrites every logarithm in terms of a single convenient base.",
        "elasticity_log_linear": "Constant elasticity means $\ln Q$ is linear in $\ln P$, with slope equal to that elasticity.",
        "graph_of_log": "The logarithm $\log_b x$ is defined only for $x>0$ and crosses the axis at $x=1$.",
        "nested_logs": "A nested logarithm is defined only when every inner expression stays in the domain of the outer log.",
        "newton_cooling": "Newton cooling closes the gap to ambient temperature by a constant continuous force.",
        "unit_trap_millions": "The stem's unit (millions, billions, ...) is already built into the initial level of the model.",
        "bacteria_period_growth": "Periodic doubling (or $n$-fold growth) is an exponential recurrence; logs recover the time.",
        "compare_growth_models": "Two growth laws are identical for all $t$ only when their one-step multipliers agree.",
        "inverse_exp_log": "Exponential and logarithm with the same base undo each other on the appropriate domain.",
        "log_domain": "A real logarithm $\log_b x$ requires $x>0$ (and $b>0$, $b\ne 1$).",
        "log_of_growth": "Taking logs turns a multiplicative growth factor into an additive change.",
        "log_product_quotient": "Logarithms send products to sums and quotients to differences.",
        "mixed_cont_disc_log": "Compare continuous and discrete closed forms, then use logs only when the claim asks for a time.",
        "mixed_decay_invest": "Decay and investment are the same exponential family with opposite signs on the force.",
        "mixed_elasticity_growth": "Elasticity from a log-log slope must be read off the recovered linear relation.",
        "mixed_gdp_piecewise": "Piecewise GDP paths need the level at the switch before the second force is applied.",
        "mixed_piecewise_log": "Logs solve for time on each smooth piece separately after the switch level is known.",
        "mixed_two_populations": "Two populations meet when their closed forms are equal; logs turn that into a linear equation in $t$.",
        "ph_log_concentration": "pH is a base-10 log of hydrogen concentration; differences of pH are log-ratios of concentration ratios.",
        "richter_energy_ratio": "Richter magnitudes differ by a log of energy; an additive magnitude gap is a multiplicative energy ratio.",
        "semi_log_straight": "On a semi-log plot a pure exponential becomes a straight line whose slope is the continuous force.",
    }

    lead = ""  # do not prepend stem leads — they clone across A–E
    if False:
        body = lead + "\n\n" + body

    # Closer only — Ch13 short letters often end right after the comparison display.
    return body.rstrip(".") + f".\n\nSo the statement is {verd}."


def polish_task(task: dict) -> dict:
    stem = task.get("stem_kind") or task.get("stem_kind")
    teas = []
    stmts = task["statements"]
    # Support both answer_key and answer_key field names
    keys = task.get("answer_key") or task.get("answer_key")
    for i, e in enumerate(task["tactical_explanations"]):
        header, verd, body = scrub_letter(e)
        # Force verd from key if present
        if keys is not None:
            verd = "True" if keys[i] else "False"
            header = re.sub(r"→\s*(True|False)", f"→ {verd}", header)
        body = deepen_body(body, stmts[i], verd, stem)
        teas.append(f"{header}\n\n{body}")
    task = dict(task)
    task["tactical_explanations"] = teas
    # Fix awkward English in statements from flips
    new_stmts = []
    for s in stmts:
        for a, b in AWKWARD_FLIP:
            s = re.sub(a, b, s)
        # "lies not" patterns
        s = re.sub(r"\blies not strictly\b", "does not lie strictly", s)
        s = re.sub(
            r"\bmultiplies the population by a factor not strictly larger than\b",
            "multiplies the population by a factor that is not strictly larger than",
            s,
        )
        new_stmts.append(s)
    task["statements"] = new_stmts
    return task


def polish_json(path: Path) -> tuple[int, int]:
    data = json.loads(path.read_text())
    tasks = data["tasks"] if isinstance(data, dict) else data
    before = sum(len(e) for t in tasks for e in t["tactical_explanations"])
    tasks = [polish_task(t) for t in tasks]
    after = sum(len(e) for t in tasks for e in t["tactical_explanations"])
    if isinstance(data, dict):
        data["tasks"] = tasks
        path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    else:
        path.write_text(json.dumps(tasks, ensure_ascii=False, indent=2) + "\n")
    return before, after


def polish_ts(path: Path) -> tuple[int, int]:
    """Scrub meta openers inside TS template-literal explanations."""
    text = path.read_text()
    before = len(text)

    def repl(m: re.Match[str]) -> str:
        raw = m.group(0)
        inner = m.group(1)
        if not re.match(r"\*\*[A-E]\.\*\*\s*→", inner.strip()):
            return raw
        try:
            header, verd, body = scrub_letter(inner)
        except ValueError:
            return raw
        body = re.sub(r"\n{3,}", "\n\n", body).strip()
        if "so the statement is" not in body.lower():
            body = body.rstrip(".") + f".\n\nSo the statement is {verd}."
        # Escape for TS template literal: keep as original escaping style — we only
        # scrub content; return with same backtick wrapping.
        new_inner = f"{header}\n\n{body}"
        # Preserve escaped backticks / ${ in original if any — simple path: no ${ in expls
        return "`" + new_inner.replace("\\", "\\\\").replace("`", "\\`") + "`"

    # Too risky to regex-replace all TS strings; do line-oriented scrub of known openers only.
    out = text
    for pat in META_OPENER_RES:
        out = pat.sub("", out)
    for pat in TRAILING_COACH_RES:
        out = pat.sub("", out)
    # Fix doubled blank lines in strings
    out = re.sub(r"(\n\n)\\n\n", r"\1", out)
    path.write_text(out)
    return before, len(out)


def main() -> None:
    json_banks = [
        ROOT / "src/data/math-ch10-exp-log.json",
        ROOT / "src/data/math-ch1-exam.json",
        ROOT / "src/data/math-ch2-cases.json",
        ROOT / "src/data/math-ch3-exam.json",
        ROOT / "src/data/math-ch4-cases.json",
        ROOT / "src/data/math-ch5-exam.json",
        ROOT / "src/data/math-ch7-linear-quadratic.json",
        ROOT / "src/data/math-ch7-mixed-exam.json",
        ROOT / "src/data/math-ch8-exam.json",
        ROOT / "src/data/math-ch9-polynomials.json",
        ROOT / "src/data/math-ch9-mixed-exam.json",
    ]
    ts_banks = [
        ROOT / "src/data/math-ch1-logic.ts",
        ROOT / "src/data/math-ch11-financial.ts",
        ROOT / "src/data/math-ch5-linear-equations.ts",
        ROOT / "src/data/math-ch8-power-functions.ts",
    ]
    for p in json_banks:
        if not p.exists():
            print("skip missing", p)
            continue
        b, a = polish_json(p)
        print(f"{p.name}: bytes {b} → {a}")
    for p in ts_banks:
        if not p.exists():
            print("skip missing", p)
            continue
        b, a = polish_ts(p)
        print(f"{p.name}: chars {b} → {a}")


if __name__ == "__main__":
    main()
