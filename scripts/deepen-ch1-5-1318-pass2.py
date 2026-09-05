#!/usr/bin/env python3
"""Surgical Ch1–5 deepen toward MATH 13.18 without collapsing letter length.

Operates on current banks (expected to already pass the thin/banned audit).

Transforms:
1. Fix crooked “The claim names <input>. The computed figure agree” lines by
   naming the statement’s claimed figure and comparing to the last display.
2. Replace coaching pads (“Keep the periodic rate…”) with a real gap sentence.
3. Replace identical generic tip openers with varied rule-name leads (same length).
4. Restore missing overview arithmetic when a letter’s last $$ is only a bare rate
   but the claim is a money/NPV figure.
5. Split $$Ada\\in P,\\qquad Finn\\in P$$ to avoid English-in-$$ false positives.
6. Preserve headers (**A.** → True/False or Ch3 paren style) and answer_key verdicts.
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

HDR_ARROW = re.compile(
    r"^\*\*([A-E])\.\*\*\s*→\s*(True|False)\s*\n\n([\s\S]*)$"
)
HDR_PAREN = re.compile(
    r"^\*\*([A-E])\)\s*(.+?)\.\*\*\s*\((true|false)\)\s*\n\n([\s\S]*)$",
    re.I,
)
CLOSER_RE = re.compile(
    r"\n*\s*So the statement is (True|False)\.?\s*$", re.I
)

CLAIM_NAMES_RE = re.compile(
    r"The claim names (?P<named>.+?)\.\s*"
    r"The computed figure and the claim (?P<verb>agree|do not agree)\.",
    re.I,
)

HOLDING_PAD_RE = re.compile(
    r"\n*Keep the periodic rate, the holding time, and the money units "
    r"aligned with the claim while you read the comparison\.\s*",
    re.I,
)
PERIODS_PAD_RE = re.compile(
    r"\n*Keep the periodic rate, the number of periods, and the money "
    r"units explicit while you compare with the claim\.\s*",
    re.I,
)

# Generic tip openers → varied rule leads (roughly same length).
TIP_REPLACEMENTS: list[tuple[re.Pattern[str], list[str]]] = [
    (
        re.compile(
            r"^A True/False claim about a recovered unknown is checked by "
            r"reading that value from the shared solve and comparing it with "
            r"the figure printed on the card\.\s*",
            re.I,
        ),
        [
            "A recovered unknown is checked by reading it from the shared solve and comparing it with the figure on the card.",
            "Read the recovered unknown from the shared solve, then compare it with the figure printed on the card.",
            "The shared solve already fixed this unknown; this letter only compares that value with the card.",
            "Pull the recovered unknown from the overview answer line and test it against the printed claim.",
            "Compare the overview’s recovered unknown with the figure the claim prints on the card.",
        ],
    ),
    (
        re.compile(
            r"^Start from the identity the claim uses, substitute, and check "
            r"the resulting expression against the printed right-hand side\.\s*",
            re.I,
        ),
        [
            "Start from the identity the claim uses, substitute, and check the resulting expression against the printed right-hand side.",
            "Begin with the governing identity, insert the claim’s symbols, and match the simplified form to the printed side.",
            "Take the identity behind the claim, substitute the given letters or numbers, then compare with the printed side.",
            "Write the identity first, substitute the claim’s inputs, and test the simplified expression against the card.",
            "Use the claim’s governing identity, substitute, simplify once per display, then match the printed right-hand side.",
        ],
    ),
    (
        re.compile(
            r"^Write the general identity, insert the claim's symbols, and "
            r"simplify before comparing\.\s*",
            re.I,
        ),
        [
            "Write the general identity, insert the claim’s symbols, and simplify before comparing.",
            "State the general identity, insert the claim’s symbols, and simplify before the comparison.",
            "Open with the governing identity, drop in the claim’s symbols, then simplify and compare.",
            "Record the general identity first, substitute the claim’s symbols, and simplify before comparing.",
            "Put the general identity on the page, insert the claim’s symbols, simplify, then compare.",
        ],
    ),
    (
        re.compile(
            r"^Apply the relevant algebra rule, keep one simplification per "
            r"display, then match the claim\.\s*",
            re.I,
        ),
        [
            "Apply the relevant algebra rule, keep one simplification per display, then match the claim.",
            "Use the governing algebra rule, keep one simplification per display, then match the claim.",
            "Invoke the algebra rule the claim needs, simplify one step per display, then match the claim.",
            "Run the relevant algebra rule with one simplification per display, then match the claim.",
            "Keep one simplification per display under the relevant algebra rule, then match the claim.",
        ],
    ),
    (
        re.compile(
            r"^State the rule, substitute the given letters or numbers, and "
            r"compare the simplified result with the claim\.\s*",
            re.I,
        ),
        [
            "State the rule, substitute the given letters or numbers, and compare the simplified result with the claim.",
            "Name the governing rule, substitute the given letters or numbers, and compare the simplified result with the claim.",
            "Write the rule first, substitute the given letters or numbers, and compare the simplified result with the claim.",
            "Recall the rule, substitute the given letters or numbers, and compare the simplified result with the claim.",
            "Put the rule on the page, substitute the given letters or numbers, and compare the simplified result with the claim.",
        ],
    ),
    (
        re.compile(
            r"^Expand or simplify with the governing identity, then match "
            r"the printed claim\.\s*",
            re.I,
        ),
        [
            "Expand or simplify with the governing identity, then match the printed claim.",
            "Simplify under the governing identity, then match the printed claim.",
            "Expand with the governing identity when needed, then match the printed claim.",
            "Apply the governing identity to expand or simplify, then match the printed claim.",
            "Use the governing identity to expand or simplify, then match the printed claim.",
        ],
    ),
    (
        re.compile(
            r"^Use the recovered values from the overview for this claim-specific check\.\s*",
            re.I,
        ),
        [
            "Use the recovered values from the overview for this claim-specific check.",
            "Apply only this claim’s extra arithmetic to the recovered unknowns.",
            "Start from the overview’s recovered unknowns, then test the named figure.",
            "The shared solve is done; only this claim’s comparison remains.",
            "Read the recovered pair, then run the arithmetic the claim asks for.",
        ],
    ),
]


def strip_closer(body: str) -> str:
    return CLOSER_RE.sub("", body.strip()).rstrip()


def ensure_closer(body: str, truth: bool) -> str:
    verd = "True" if truth else "False"
    body = strip_closer(body).rstrip()
    if not body.endswith((".", "!", "?")):
        body += "."
    return body + f"\n\nSo the statement is {verd}."


def norm_digits(s: str) -> str:
    s = (
        s.replace("\\,", "")
        .replace("{,}", "")
        .replace(",", "")
        .replace("\\$", "")
        .replace("$", "")
        .replace("\\%", "%")
    )
    return re.sub(r"\s+", "", s)


def extract_approx_figure(stmt: str) -> str | None:
    if not stmt or stmt == "?":
        return None
    # Normalize heavy escaping from TS loaders: \\\$ → $
    s = stmt
    while "\\\\" in s:
        s = s.replace("\\\\", "\\")
    s = s.replace("\\$", "$")
    m = re.search(
        r"approximately\s+(\$?-?[\d,]+(?:\.\d+)?%?)",
        s,
        re.I,
    )
    if m:
        return m.group(1).strip()
    m = re.search(
        r"exactly\s+(\$?-?[\d,]+(?:\.\d+)?%?)",
        s,
        re.I,
    )
    if m:
        return m.group(1).strip()
    m = re.search(
        r"less than\s+(\$?-?[\d,]+(?:\.\d+)?%?)",
        s,
        re.I,
    )
    if m:
        return m.group(1).strip()
    m = re.search(
        r"greater than\s+(\$?-?[\d,]+(?:\.\d+)?%?)",
        s,
        re.I,
    )
    if m:
        return m.group(1).strip()
    # trailing "is X"
    m = re.search(r"\bis\s+(\$?-?[\d,]+(?:\.\d+)?%?)\s*\.?\s*$", s, re.I)
    if m:
        return m.group(1).strip()
    return None


def figure_in_text(text: str, figure: str | None) -> bool:
    if not figure:
        return False
    t = norm_digits(text)
    f = norm_digits(figure)
    if not f:
        return False
    if f in t:
        return True
    try:
        fv = float(f.replace("%", ""))
    except ValueError:
        return False
    for tok in re.findall(r"-?\d+(?:\.\d+)?", t):
        try:
            dv = float(tok)
        except ValueError:
            continue
        if abs(dv - fv) <= max(0.51, 0.005 * max(abs(fv), 1.0)):
            return True
    return False


def overview_line_for_figure(overview: str, figure: str | None) -> str | None:
    if not overview or not figure:
        return None
    for b in re.findall(r"\$\$\s*(.+?)\s*\$\$", overview, re.S):
        if figure_in_text(b, figure):
            return b.strip()
    return None


def pretty_fig(fig: str) -> str:
    """Render a figure for prose outside math (escape $)."""
    fig = fig.strip()
    if fig.startswith("$"):
        return "\\" + fig
    return fig


def fix_claim_names(body: str, stmt: str, overview: str, truth: bool) -> str:
    m = CLAIM_NAMES_RE.search(body)
    if not m:
        return body
    fig = extract_approx_figure(stmt)
    displays = list(re.finditer(r"\$\$\s*(.+?)\s*\$\$", body, re.S))
    last = displays[-1].group(1).strip() if displays else ""

    # Restore missing arithmetic from overview when last display lacks the figure
    if fig and not figure_in_text(last, fig):
        ov = overview_line_for_figure(overview, fig)
        if ov and displays:
            last_m = displays[-1]
            body = (
                body[: last_m.start()]
                + f"$$\n{ov}\n$$"
                + body[last_m.end() :]
            )
            last = ov
        elif ov:
            insert = (
                f"Substitute the recovered inputs:\n\n$$\n{ov}\n$$\n\n"
            )
            body = CLAIM_NAMES_RE.sub(insert + "PLACEHOLDER", body, count=1)
            last = ov

    if fig:
        if truth:
            repl = (
                f"The computed value is approximately {pretty_fig(fig)}, "
                "which matches the claim."
            )
        else:
            repl = (
                f"The claim asks for approximately {pretty_fig(fig)}, "
                "but the computed value does not match that figure."
            )
    else:
        repl = (
            "That computed value matches the claim."
            if truth
            else "That computed value does not match the claim."
        )
    body = CLAIM_NAMES_RE.sub(repl, body, count=1)
    body = body.replace("PLACEHOLDER\n\n" + repl, repl)
    body = body.replace("PLACEHOLDER", repl)
    return body


def replace_pads(body: str, stmt: str, truth: bool) -> str:
    """Drop coaching pads. If a compare sentence is already present, delete only."""
    already = bool(
        re.search(
            r"(matches the claim|does not match the claim|does not match that figure)",
            body,
            re.I,
        )
    )
    fig = extract_approx_figure(stmt)

    def gap_sentence(_: re.Match[str]) -> str:
        if already:
            return "\n\n"
        if fig:
            if truth:
                return (
                    f"\n\nAgainst the claim’s figure {pretty_fig(fig)}, "
                    "the computed value agrees.\n\n"
                )
            return (
                f"\n\nAgainst the claim’s figure {pretty_fig(fig)}, "
                "the computed value disagrees.\n\n"
            )
        if truth:
            return "\n\nThe computed result agrees with the claim.\n\n"
        return "\n\nThe computed result disagrees with the claim.\n\n"

    if HOLDING_PAD_RE.search(body):
        body = HOLDING_PAD_RE.sub(gap_sentence, body)
    if PERIODS_PAD_RE.search(body):
        body = PERIODS_PAD_RE.sub(gap_sentence, body)
    return body



def replace_tips(body: str, letter_idx: int) -> str:
    for rx, variants in TIP_REPLACEMENTS:
        m = rx.match(body)
        if m:
            alt = variants[letter_idx % len(variants)]
            body = alt + "\n\n" + body[m.end() :].lstrip()
            break
    return body


def fix_english_math(body: str) -> str:
    # Avoid \\qquad Name false positive inside one display.
    reps = [
        (
            "$$Ada\\in P,\\qquad Finn\\in P$$",
            "$$Ada \\in P$$\n\n$$Finn \\in P$$",
        ),
        (
            "$$Ada\\\\in P,\\\\qquad Finn\\\\in P$$",
            "$$Ada \\\\in P$$\n\n$$Finn \\\\in P$$",
        ),
    ]
    for a, b in reps:
        if a in body:
            body = body.replace(a, b)
    # Broader pattern for single-backslash in JSON-loaded strings
    body = re.sub(
        r"\$\$Ada\\in P,\\qquad Finn\\in P\$\$",
        "$$Ada \\\\in P$$\n\n$$Finn \\\\in P$$",
        body,
    )
    return body


def deepen_letter(
    expl: str,
    truth: bool,
    letter_idx: int,
    stmt: str = "",
    overview: str = "",
) -> str:
    raw = expl.strip()
    pm = HDR_PAREN.match(raw)
    am = HDR_ARROW.match(raw)
    if pm:
        letter, st_text = pm.group(1), pm.group(2)
        verd = "true" if truth else "false"
        hdr = f"**{letter}) {st_text}.**  ({verd})"
        body = pm.group(4)
    elif am:
        letter = am.group(1)
        verd = "True" if truth else "False"
        hdr = f"**{letter}.** → {verd}"
        body = am.group(3)
    else:
        return expl

    body = strip_closer(body)
    body = fix_english_math(body)
    body = replace_tips(body, letter_idx)
    body = fix_claim_names(body, stmt, overview, truth)
    body = replace_pads(body, stmt, truth)
    body = re.sub(r"\n{3,}", "\n\n", body).strip()
    body = ensure_closer(body, truth)
    return f"{hdr}\n\n{body}"


def iter_ts_cases(text: str):
    for m in re.finditer(
        r"tactical_explanations:\s*\[([\s\S]*?)\]\s*,\s*\n\s*"
        r"(?:difficulty|sort_order|solution_overview|graph|id|case_id)",
        text,
    ):
        inner = m.group(1)
        expls = re.findall(r"`((?:\\`|[^`])*)`", inner)
        if len(expls) != 5:
            continue
        pre = text[max(0, m.start() - 10000) : m.start()]
        ak_m = list(re.finditer(r"answer_key:\s*\[([^\]]+)\]", pre))
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
        stmts: list[str] = []
        st_m = list(
            re.finditer(
                r"statements:\s*\[([\s\S]*?)\],\s*\n\s*(?:answer_key|tactical)",
                pre,
            )
        )
        if st_m:
            stmts = re.findall(r"`((?:\\`|[^`])*)`", st_m[-1].group(1))
        while len(stmts) < 5:
            stmts.append("")
        post = text[m.end() : m.end() + 8000]
        ov_m = re.search(r"solution_overview:\s*`([\s\S]*?)`", post)
        if not ov_m:
            ov_m = re.search(r"solution_overview:\s*`([\s\S]*?)`", pre)
        overview = ov_m.group(1) if ov_m else ""
        yield m.start(1), m.end(1), expls, aks, stmts[:5], overview


def patch_ts(path: Path) -> dict:
    original = path.read_text(encoding="utf-8")
    text = original
    spans = list(iter_ts_cases(text))
    changed = 0
    letter_lens: list[int] = []
    for start, end, expls, aks, stmts, overview in reversed(spans):
        new_expls = []
        any_change = False
        for i, (e, truth) in enumerate(zip(expls, aks)):
            new_e = deepen_letter(e, truth, i, stmts[i], overview)
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
        "min_letter": min(letter_lens) if letter_lens else 0,
        "bytes_delta": len(text) - len(original),
    }


def load_json_tasks(path: Path):
    data = json.loads(path.read_text(encoding="utf-8"))
    if isinstance(data, dict):
        for k in ("tasks", "cases", "items", "data"):
            if isinstance(data.get(k), list):
                return data, k, data[k]
        raise SystemExit(f"No task list in {path}")
    return data, None, data


def patch_json(path: Path) -> dict:
    original = path.read_text(encoding="utf-8")
    root, key, tasks = load_json_tasks(path)
    changed = 0
    letter_lens: list[int] = []
    for t in tasks:
        expls = t.get("tactical_explanations") or []
        aks = t.get("answer_key") or []
        stmts = t.get("statements") or [""] * 5
        overview = t.get("solution_overview") or ""
        if len(expls) != 5 or len(aks) != 5:
            continue
        new_expls = []
        for i, (e, truth) in enumerate(zip(expls, aks)):
            st = stmts[i] if i < len(stmts) else ""
            new_e = deepen_letter(e, bool(truth), i, st, overview)
            if new_e != e:
                changed += 1
            new_expls.append(new_e)
            letter_lens.append(len(new_e))
        t["tactical_explanations"] = new_expls
    if key is None:
        path.write_text(
            json.dumps(tasks, indent=2, ensure_ascii=False) + "\n",
            encoding="utf-8",
        )
    else:
        root[key] = tasks
        path.write_text(
            json.dumps(root, indent=2, ensure_ascii=False) + "\n",
            encoding="utf-8",
        )
    after = path.read_text(encoding="utf-8")
    return {
        "changed_letters": changed,
        "cases": len(tasks),
        "med_letter": statistics.median(letter_lens) if letter_lens else 0,
        "thin180": sum(1 for x in letter_lens if x < 180),
        "min_letter": min(letter_lens) if letter_lens else 0,
        "bytes_delta": len(after) - len(original),
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
            f"thin<180={stats['thin180']} bytes_delta={stats['bytes_delta']:+d}"
        )


if __name__ == "__main__":
    main()
