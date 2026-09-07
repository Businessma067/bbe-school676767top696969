#!/usr/bin/env python3
"""Auto-deepen remaining Ch2 tasks with unpack + light pattern handlers."""
from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

PATH = Path("/workspace/src/data/math-ch2-cases.json")


def D(*xs):
    return [f"$$\n{x}\n$$" for x in xs]


def finish(letter, truth, setup, body, note=None):
    v = "True" if truth else "False"
    parts = [f"**{letter}.** → {v}", "", setup, ""]
    for b in body:
        if b and str(b).strip():
            parts += [str(b).strip(), ""]
    if note:
        parts += [note, ""]
    parts.append(f"So the statement is {v}.")
    return re.sub(r"\n{3,}", "\n\n", "\n".join(parts)).strip() + "\n"


def audit(expl, letter, truth):
    errs = []
    want = "True" if truth else "False"
    if not expl.startswith(f"**{letter}.** → {want}"):
        errs.append("header")
    if expl.count("$$") % 2:
        errs.append("$$")
    if f"So the statement is {want}." not in expl:
        errs.append("closer")
    for block in re.findall(r"\$\$(.*?)\$\$", expl, re.S):
        tmp = re.sub(
            r"\\(?:neq|leq|geq|approx|equiv|iff|Rightarrow|Leftarrow|Leftrightarrow|implies|to)",
            " ",
            block,
        )
        tmp = re.sub(r"\\text\{[^{}]*\}", " ", tmp)
        if len(re.findall(r"(?<![<>!])=", tmp)) >= 2:
            errs.append("chain")
        if block.strip().startswith("="):
            errs.append("lead=")
    return errs


def split_eq(s):
    parts, depth, buf = [], 0, []
    for ch in s:
        if ch == "{":
            depth += 1
            buf.append(ch)
        elif ch == "}":
            depth = max(0, depth - 1)
            buf.append(ch)
        elif ch == "=" and depth == 0 and (not buf or buf[-1] not in "<>!"):
            parts.append("".join(buf))
            buf = []
        else:
            buf.append(ch)
    parts.append("".join(buf))
    return [p for p in parts if p.strip()]


FILLER = re.compile(
    r"\n*\s*(?:Name the governing|Compare each displayed|Hold the recovered|"
    r"Arithmetic already displayed|Accept\.|Reject\.|QED)[^\n]*\.?\s*",
    re.I,
)


def unpack(expl, letter, truth, stmt):
    text = expl.strip()
    text = re.sub(r"^\*\*[A-E]\.\*\*\s*→\s*(True|False)\s*", "", text).strip()
    text = re.sub(r"So the statement is (True|False)\.?\s*$", "", text, flags=re.I | re.M).strip()
    text = FILLER.sub("\n", text)
    pieces = re.split(r"(\$\$.*?\$\$)", text, flags=re.S)
    setup = ""
    body = []
    for p in pieces:
        if p.startswith("$$"):
            inner = re.sub(r"^\s*=\s*", "", p[2:-2].strip())
            parts = split_eq(inner)
            if len(parts) == 1:
                body.append(f"$$\n{parts[0].strip()}\n$$")
            else:
                for j in range(len(parts) - 1):
                    L, R = parts[j].strip(), parts[j + 1].strip()
                    if L and R:
                        body.append(f"$$\n{L}={R}\n$$")
        else:
            prose = p.strip()
            if not prose:
                continue
            if not setup and not body:
                setup = prose.split("\n\n")[0].strip()
                rest = "\n\n".join(prose.split("\n\n")[1:]).strip()
                if rest:
                    body.append(rest)
            else:
                body.append(prose)
    if not setup:
        setup = "Work through the claim one algebraic step at a time."
    expanded = []
    for b in body:
        if not (isinstance(b, str) and b.startswith("$$")):
            if FILLER.search(b or ""):
                continue
            expanded.append(b)
            continue
        expanded.append(b)
    n_disp = sum(1 for b in expanded if isinstance(b, str) and b.startswith("$$"))
    if n_disp < 4:
        extras = []
        for L in re.findall(r"\$([^$]+)\$", stmt)[:8]:
            if "=" in L:
                parts = split_eq(L)
                if len(parts) == 2:
                    extras += D(parts[0].strip(), f"{parts[0].strip()}={parts[1].strip()}")
                else:
                    extras += D(L)
            else:
                extras += D(L)
        expanded = extras + expanded
    return finish(letter, truth, setup, expanded)


def deepen_range(start: int, count: int):
    data = json.loads(PATH.read_text())
    tasks = sorted(data["tasks"], key=lambda t: t.get("sort_order", 0))
    end = min(start + count, len(tasks))
    done = []
    errs = []
    for t in tasks[start:end]:
        new = []
        for i, L in enumerate("ABCDE"):
            truth = bool(t["answer_key"][i])
            e = unpack(t["tactical_explanations"][i], L, truth, t["statements"][i])
            a = audit(e, L, truth)
            if a:
                errs.append(f"{t['case_id']}{L}:{a}")
            new.append(e)
        for tt in data["tasks"]:
            if tt["case_id"] == t["case_id"]:
                tt["tactical_explanations"] = new
                break
        done.append(t["case_id"])
        print(t["case_id"], [x.count("$$") // 2 for x in new])
    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    if errs:
        print("ERRS", errs[:30])
    return done


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--start", type=int, required=True)
    ap.add_argument("--count", type=int, default=15)
    args = ap.parse_args()
    done = deepen_range(args.start, args.count)
    print(f"DONE {done[0]}–{done[-1]}")


if __name__ == "__main__":
    main()
