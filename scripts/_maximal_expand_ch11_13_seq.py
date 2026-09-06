#!/usr/bin/env python3
"""Sequential maximal expansion for Ch11–13 tactical_explanations."""
from __future__ import annotations

import json
import math
import re
import sys
from pathlib import Path

ROOT = Path("/workspace")
LETTERS = "ABCDE"

HEADER_RE = re.compile(r"^\*\*([A-E])\.\*\*\s*→\s*(True|False)\b", re.I)
CLOSER_RE = re.compile(
    r"(?:\n|^)\s*(?:"
    r"So the statement is|so the statement is|The statement is|the statement is|"
    r"Matching these figures to the claim, the statement is|"
    r"Comparing that with the claim, the statement is|"
    r"Comparing these figures to the claim, the statement is|"
    r"Comparing the computed figure with the printed claim, the statement is"
    r")\s+(True|False)\.?\s*$",
    re.I | re.M,
)
DISPLAY_RE = re.compile(r"\$\$(.*?)\$\$", re.S)
YIELDS_P_RE = re.compile(
    r"Recover the common success probability \$p\$.*?That calculation yields \$p=([0-9.]+)\$\.",
    re.S,
)
IMPLIES_RE = re.compile(r"\\implies|\\Rightarrow|⇒")
FILLER_RES = [
    re.compile(r"\n*\s*The intermediate algebra above is what justifies the claim\.?\s*", re.I),
    re.compile(r"\n*\s*Matching these figures to the claim[,.]?\s*", re.I),
    re.compile(r"\n*\s*Comparing that with the claim[,.]?\s*", re.I),
    re.compile(r"\n*\s*Comparing these figures to the claim\.?\s*", re.I),
    re.compile(r"\bQED\.?\s*", re.I),
    re.compile(r"\n*\s*(?:Arithmetic already displayed|Accept\.|Reject\.)[^\n]*\.?\s*", re.I),
]
_NUM = r"(?:\d+\.\d+|\d+)"
_TIMES = r"(?:\\times|\\cdot|×|\*)"


def tidy(s: str) -> str:
    s = re.sub(r"[ \t]+\n", "\n", s)
    s = re.sub(r"\n{3,}", "\n\n", s)
    return s.strip()


def fmt_num(x: float) -> str:
    if abs(x - round(x)) < 1e-9:
        return str(int(round(x)))
    return f"{x:.12f}".rstrip("0").rstrip(".")


def top_level_split_on_equals(s: str) -> list[str]:
    parts: list[str] = []
    buf: list[str] = []
    depth = 0
    i = 0
    while i < len(s):
        c = s[i]
        if c == "{":
            depth += 1
            buf.append(c)
            i += 1
            continue
        if c == "}":
            depth = max(0, depth - 1)
            buf.append(c)
            i += 1
            continue
        if depth == 0 and c == "=":
            prev = "".join(buf[-12:])
            if any(prev.endswith(suf) for suf in ("\\neq", "\\equiv", "\\approx", "\\leq", "\\geq", "\\le", "\\ge", "\\ne", "=")):
                buf.append(c)
                i += 1
                continue
            if i + 1 < len(s) and s[i + 1] == "=":
                buf.append(c)
                i += 1
                continue
            parts.append("".join(buf).strip())
            buf = []
            i += 1
            continue
        buf.append(c)
        i += 1
    parts.append("".join(buf).strip())
    return [p for p in parts if p]


def split_approx_chain(rhs: str) -> list[str]:
    s = rhs.strip()
    out: list[str] = []
    while r"\approx" in s:
        idx = s.find(r"\approx")
        left = s[:idx].strip()
        s = s[idx + len(r"\approx") :].strip()
        if left:
            out.append(left)
    if s:
        out.append(rf"\approx {s}" if out else s)
    return out if out else [rhs]


def expand_numeric_sum(expr: str) -> list[str] | None:
    e = expr.replace("−", "-").replace(" ", "")
    if not re.fullmatch(rf"{_NUM}(?:[+\-]{_NUM}){{1,8}}", e):
        return None
    tokens = re.findall(rf"[+\-]?{_NUM}", e)
    nums = [float(t) for t in tokens]
    if len(nums) < 2:
        return None
    steps = []
    running = nums[0]
    for n in nums[1:]:
        prev = running
        running = running + n
        op = "+" if n >= 0 else "-"
        steps.append(f"{fmt_num(prev)} {op} {fmt_num(abs(n))} = {fmt_num(running)}")
    return steps


def expand_numeric_product(expr: str) -> list[str] | None:
    e = expr.strip()
    m = re.fullmatch(rf"({_NUM})\s*(?:{_TIMES})\s*({_NUM})(?:\s*(?:{_TIMES})\s*({_NUM}))?", e)
    if not m:
        return None
    a, b = float(m.group(1)), float(m.group(2))
    if m.group(3):
        c = float(m.group(3))
        return [
            rf"{fmt_num(a)}\times {fmt_num(b)} = {fmt_num(a*b)}",
            rf"{fmt_num(a*b)}\times {fmt_num(c)} = {fmt_num(a*b*c)}",
        ]
    return [rf"{fmt_num(a)}\times {fmt_num(b)} = {fmt_num(a*b)}"]


def expand_binom_eq(inner: str) -> list[str] | None:
    compact = re.sub(r"\s+", "", inner)
    m = re.fullmatch(rf"\\binom\{{(\d+)\}}\{{(\d+)\}}(?:=({_NUM}))?", compact)
    if not m:
        return None
    n, k = int(m.group(1)), int(m.group(2))
    claimed = m.group(3)
    val = math.comb(n, k)
    if n > 60 or k > 12:
        return [rf"\binom{{{n}}}{{{k}}} = {claimed or val}"]
    if k == 0:
        return [rf"\binom{{{n}}}{{0}} = 1"]
    if k == 1:
        return [rf"\binom{{{n}}}{{1}} = {n}"]
    numer_factors = [str(n - i) for i in range(k)]
    denom_tex = r"\cdot ".join(str(i) for i in range(1, k + 1))
    numer_tex = r"\cdot ".join(numer_factors)
    steps = [rf"\binom{{{n}}}{{{k}}} = \dfrac{{{numer_tex}}}{{{denom_tex}}}"]
    prod = 1
    for i, f in enumerate(range(n, n - k, -1)):
        prev = prod
        prod *= f
        if i == 0:
            continue
        if i == 1:
            steps.append(rf"{n}\cdot {n-1} = {prod}")
        else:
            steps.append(rf"{prev}\cdot {f} = {prod}")
    steps.append(rf"\dfrac{{{prod}}}{{{math.factorial(k)}}} = {val}")
    return steps


def split_equals_chain(inner: str) -> list[str]:
    s = re.sub(r"\s+", " ", inner.strip())
    if not s:
        return []
    if any(tok in s for tok in (r"\begin{", r"\matrix", r"\cases", "&")):
        return [s]

    if r"\qquad" in s and s.count("=") >= 2:
        chunks, buf, depth, i = [], [], 0, 0
        while i < len(s):
            if s[i] == "{":
                depth += 1
            elif s[i] == "}":
                depth = max(0, depth - 1)
            if depth == 0 and s.startswith(r"\qquad", i):
                chunks.append("".join(buf).strip().strip(",").strip())
                buf = []
                i += len(r"\qquad")
                continue
            buf.append(s[i])
            i += 1
        chunks.append("".join(buf).strip().strip(",").strip())
        chunks = [c for c in chunks if c]
        if len(chunks) > 1:
            out: list[str] = []
            for ch in chunks:
                out.extend(split_equals_chain(ch))
            return out

    if IMPLIES_RE.search(s):
        pieces = [p.strip(" \n,;") for p in IMPLIES_RE.split(s) if p and p.strip(" \n,;")]
        out = []
        for p in pieces:
            out.extend(split_equals_chain(p) if "=" in p else [p])
        return out

    binom_steps = expand_binom_eq(s)
    if binom_steps and s.count("=") <= 1:
        return binom_steps

    parts = top_level_split_on_equals(s)
    if len(parts) <= 1:
        prod = expand_numeric_product(s)
        return prod if prod else [s]

    out: list[str] = []
    lhs = parts[0]
    rhs_list = parts[1:]
    i = 0
    while i < len(rhs_list):
        rhs = rhs_list[i]
        approx_parts = split_approx_chain(rhs)
        first = approx_parts[0]
        sum_steps = expand_numeric_sum(first)
        prod_steps = None if sum_steps else expand_numeric_product(first)

        if sum_steps:
            out.append(f"{lhs} = {first}" if not out else f"= {first}")
            for st in sum_steps:
                out.append(st)
            if i + 1 < len(rhs_list):
                nxt = rhs_list[i + 1].strip().replace(" ", "")
                last_val = sum_steps[-1].split("=")[-1].strip().replace(" ", "")
                if nxt == last_val:
                    i += 1
            for ap in approx_parts[1:]:
                out.append(ap if ap.startswith(r"\approx") else f"= {ap}")
            i += 1
            continue

        if prod_steps:
            out.append(f"{lhs} = {first}" if not out else f"= {first}")
            for st in prod_steps:
                out.append(st)
            if i + 1 < len(rhs_list):
                nxt = rhs_list[i + 1].strip().replace(" ", "")
                last_val = prod_steps[-1].split("=")[-1].strip().replace(" ", "")
                if nxt == last_val:
                    i += 1
            for ap in approx_parts[1:]:
                out.append(ap if ap.startswith(r"\approx") else f"= {ap}")
            i += 1
            continue

        out.append(f"{lhs} = {first}" if not out else f"= {first}")
        for ap in approx_parts[1:]:
            out.append(ap if ap.startswith(r"\approx") else f"= {ap}")
        i += 1

    deduped: list[str] = []
    for st in out:
        st = re.sub(r"^=\s*=\s*", "= ", st.strip())
        key = re.sub(r"\s+", "", st)
        prev_key = re.sub(r"\s+", "", deduped[-1]) if deduped else None
        if prev_key == key:
            continue
        deduped.append(st)
    return deduped


def expand_display_block(inner: str) -> str:
    steps = split_equals_chain(inner)
    if not steps:
        return f"$$\n{inner.strip()}\n$$"
    return "\n\n".join(f"$$\n{st}\n$$" for st in steps)


def expand_displays_in_text(text: str) -> str:
    return DISPLAY_RE.sub(lambda m: expand_display_block(m.group(1)), text)


def expand_implies_prose_jumps(text: str) -> str:
    text = re.sub(
        r"\$\$\s*([^$]*?)\s*=\s*0\\implies\s*([A-Za-z][A-Za-z0-9_\\\\'{}]*)\s*\$\$\s*\n+\s*\$\$\s*=\s*([^$]+?)\s*\$\$",
        lambda m: (
            f"$$\n{m.group(1).strip()} = 0\n$$\n\n"
            f"$$\n{m.group(2).strip()} = {m.group(3).strip()}\n$$"
        ),
        text,
        flags=re.S,
    )
    return DISPLAY_RE.sub(
        lambda m: expand_display_block(m.group(1)) if IMPLIES_RE.search(m.group(1)) else m.group(0),
        text,
    )


def strip_fillers(text: str) -> str:
    for fr in FILLER_RES:
        text = fr.sub("\n\n", text)
    return text


def normalize_header_closer(text: str, letter: str, is_true: bool) -> str:
    verd = "True" if is_true else "False"
    body = text.strip()
    m = HEADER_RE.match(body)
    if m:
        body = HEADER_RE.sub(f"**{letter}.** → {verd}", body, count=1)
    else:
        body = re.sub(
            r"^(?:\*\*)?(?:Statement\s+)?[A-E](?:\.\s*→|\s+[—–-])\s*(?:True|False)\s*\n+",
            "",
            body,
            count=1,
            flags=re.I,
        )
        body = f"**{letter}.** → {verd}\n\n{body.lstrip()}"

    body = strip_fillers(body)
    body = CLOSER_RE.sub("", body).rstrip()
    body = re.sub(
        rf"(?:Since\s+[^\n]+?[,.]\s*)?(?:the|So the) statement is {verd}\.?\s*$",
        "",
        body,
        flags=re.I,
    ).rstrip()
    # If we stripped a trailing "Since ...," keep the comparison as its own sentence when present earlier
    body = re.sub(r",\s*$", "", body)
    body = re.sub(r"\n\.\s*$", "", body)
    body = re.sub(r"\n{3,}", "\n\n", body)
    body = body.rstrip() + f"\n\nSo the statement is {verd}."
    body = re.sub(rf"(So the statement is {verd}\.\s*)+$", f"So the statement is {verd}.", body)
    return tidy(body) + "\n"


def inject_ch13_p_recovery(expl: str, overview: str) -> str:
    m = YIELDS_P_RE.search(expl)
    if not m:
        return expl
    p_val = m.group(1)
    displays = DISPLAY_RE.findall(overview or "")
    recovery_steps = []
    started = False
    for d in displays:
        ds = d.strip()
        if not started:
            if re.search(r"\bp\b|E\[X\]|\\mathrm\{Var\}|n\s*=|\\dfrac|\\frac", ds):
                started = True
                recovery_steps.append(ds)
            continue
        # continue collecting leading "=" / approx steps and p-related lines
        if ds.startswith("=") or ds.startswith(r"\approx") or re.search(r"\bp\b|\\dfrac|\\frac", ds):
            recovery_steps.append(ds)
        else:
            break
        if len(recovery_steps) >= 8:
            break
    if not recovery_steps:
        recovery = (
            "From the stem quantities, recover the common success probability.\n\n"
            f"$$\np = {p_val}\n$$"
        )
    else:
        blocks = "\n\n".join(expand_display_block(s) for s in recovery_steps[:6])
        recovery = (
            "From the stem quantities, recover the common success probability step by step.\n\n"
            f"{blocks}"
        )
    return YIELDS_P_RE.sub(lambda _m: recovery, expl, count=1)


def expand_one_explanation(expl: str, letter: str, is_true: bool, *, overview: str = "", chapter_hint: str = "") -> str:
    body = expl.strip()
    if chapter_hint.startswith("13") and overview:
        body = inject_ch13_p_recovery(body, overview)
    body = expand_implies_prose_jumps(body)
    body = expand_displays_in_text(body)
    body = expand_displays_in_text(body)
    body = normalize_header_closer(body, letter, is_true)
    return body


def expand_task(task: dict, chapter_hint: str = "") -> int:
    keys = task.get("answer_key") or []
    expls = task.get("tactical_explanations") or []
    overview = task.get("solution_overview") or ""
    if not expls:
        return 0
    changed = 0
    new_expls = []
    for i, expl in enumerate(expls):
        if not isinstance(expl, str):
            new_expls.append(expl)
            continue
        letter = LETTERS[i] if i < len(LETTERS) else chr(ord("A") + i)
        is_true = bool(keys[i]) if i < len(keys) else True
        hm = HEADER_RE.match(expl.strip())
        if hm:
            letter = hm.group(1).upper()
        new = expand_one_explanation(expl, letter, is_true, overview=overview, chapter_hint=chapter_hint)
        if new.rstrip("\n") != expl.rstrip("\n"):
            changed += 1
        new_expls.append(new if new.endswith("\n") else new + "\n")
    task["tactical_explanations"] = new_expls
    return changed


def process_json_range(path: Path, chapter_hint: str, start: int, end: int):
    data = json.loads(path.read_text(encoding="utf-8"))
    tasks = data["tasks"] if isinstance(data, dict) else data
    total = changed = 0
    ids = []
    for task in tasks[start:end]:
        ids.append(task.get("case_id") or "?")
        total += len(task.get("tactical_explanations") or [])
        changed += expand_task(task, chapter_hint=chapter_hint)
    if isinstance(data, dict):
        path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    else:
        path.write_text(json.dumps(tasks, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    return total, changed, ids


def process_json(path: Path, chapter_hint: str):
    data = json.loads(path.read_text(encoding="utf-8"))
    tasks = data["tasks"] if isinstance(data, dict) else data
    total = changed = 0
    for task in tasks:
        total += len(task.get("tactical_explanations") or [])
        changed += expand_task(task, chapter_hint=chapter_hint)
    if isinstance(data, dict):
        path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    else:
        path.write_text(json.dumps(tasks, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    return total, changed


def self_check_json(path: Path, start: int = 0, end: int | None = None) -> list[str]:
    data = json.loads(path.read_text(encoding="utf-8"))
    tasks = data["tasks"] if isinstance(data, dict) else data
    if end is None:
        end = len(tasks)
    errs = []
    for task in tasks[start:end]:
        cid = task.get("case_id") or task.get("id")
        keys = task.get("answer_key") or []
        expls = task.get("tactical_explanations") or []
        for i, (expl, key) in enumerate(zip(expls, keys)):
            letter = LETTERS[i]
            verd = "True" if key else "False"
            if not expl.strip().startswith(f"**{letter}.** → {verd}"):
                errs.append(f"{cid} {letter}: bad header")
            if expl.count("$$") % 2:
                errs.append(f"{cid} {letter}: unbalanced $$")
            if f"So the statement is {verd}." not in expl:
                errs.append(f"{cid} {letter}: missing closer")
            for dm in DISPLAY_RE.finditer(expl):
                if dm.group(1).count("=") >= 3 and r"\begin{" not in dm.group(1):
                    errs.append(f"{cid} {letter}: compressed multi-eq")
                    break
    return errs


TS_STRING_RE = re.compile(r"`((?:\\`|[^`])*)`", re.S)


def expand_ts_file(path: Path):
    text = path.read_text(encoding="utf-8")
    total = changed = 0
    pattern = re.compile(
        r"answer_key:\s*\[([^\]]+)\]\s*,\s*tactical_explanations:\s*\[(.*?)\]\s*,",
        re.S,
    )

    def keys_from(raw: str) -> list[bool]:
        return [tok.strip().lower() == "true" for tok in raw.split(",") if tok.strip().lower() in ("true", "false")]

    def repl(m: re.Match[str]) -> str:
        nonlocal total, changed
        keys = keys_from(m.group(1))
        block = m.group(2)
        strings = list(TS_STRING_RE.finditer(block))
        if not strings:
            return m.group(0)
        new_block = block
        for i, sm in list(enumerate(strings))[::-1]:
            latex = sm.group(1).replace("\\\\", "\\")
            letter = LETTERS[i] if i < 5 else "A"
            is_true = keys[i] if i < len(keys) else True
            hm = HEADER_RE.match(latex.strip())
            if hm:
                letter = hm.group(1).upper()
            new_latex = expand_one_explanation(latex, letter, is_true, chapter_hint="11")
            total += 1
            if new_latex.rstrip() != latex.rstrip():
                changed += 1
            new_src = new_latex.rstrip().replace("\\", "\\\\").replace("`", "\\`")
            new_block = new_block[: sm.start()] + "`" + new_src + "`" + new_block[sm.end() :]
        return f"answer_key: [{m.group(1)}],\n    tactical_explanations: [{new_block}],"

    new_text, n = pattern.subn(repl, text)
    if n == 0:
        print(f"WARNING: no pairs in {path}")
        return 0, 0
    path.write_text(new_text, encoding="utf-8")
    return total, changed


def main() -> None:
    args = sys.argv[1:]
    if args and args[0] == "range":
        fname, a, b = args[1], int(args[2]), int(args[3])
        path = ROOT / "src/data" / fname
        hint = "13" if "13" in fname else ("12" if "12" in fname else "11")
        total, changed, ids = process_json_range(path, hint, a, b)
        errs = self_check_json(path, a, b)
        print(f"{fname}[{a}:{b}]: total={total} changed={changed} errs={len(errs)} {ids[0]}..{ids[-1]}")
        for e in errs[:25]:
            print(" ", e)
        return

    if args and args[0] == "ts":
        path = ROOT / "src/data" / args[1]
        total, changed = expand_ts_file(path)
        print(f"{path.name}: total={total} changed={changed}")
        return

    only = set(args) if args else None
    targets = [
        ("math-ch11-exam.json", "11"),
        ("math-ch12-exam.json", "12"),
        ("math-cases-ch12-probability.json", "12"),
        ("math-ch13-exam.json", "13"),
        ("math-cases-ch13-binomial.json", "13"),
    ]
    for name, hint in targets:
        if only and name not in only:
            continue
        path = ROOT / "src/data" / name
        total, changed = process_json(path, hint)
        errs = self_check_json(path)
        print(f"{name}: total={total} changed={changed} errs={len(errs)}")
        for e in errs[:15]:
            print(" ", e)


if __name__ == "__main__":
    main()
