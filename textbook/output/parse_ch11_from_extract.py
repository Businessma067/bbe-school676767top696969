# -*- coding: utf-8 -*-
"""Parse all Ch11 subsection extracts into ch11_raw.json (expected ~123 tasks)."""
from __future__ import annotations

import json
import re
from pathlib import Path

EXTRACT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\textbook\output\ch11_extract")
OUT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\textbook\output\ch11_raw.json")

SUBSECTION_META = {
    "11.1": "Interest Periods and Effective Rates",
    "11.2": "Continuous Compounding",
    "11.3": "Present Value",
    "11.4": "Geometric Series",
    "11.5": "Annuities, Annuities Due & Perpetuities",
    "11.6": "Mortgage Repayments",
    "11.7": "Internal Rate of Return",
}


def clean_ws(s: str) -> str:
    s = (s or "").replace("\u00ad", "").replace("\u2212", "-").replace("\u2013", "-").replace("\u2014", "-")
    s = re.sub(r"[ \t]+", " ", s)
    s = re.sub(r"\n{3,}", "\n\n", s)
    return s.strip()


def flatten(s: str) -> str:
    return re.sub(r"\s+", " ", clean_ws(s)).strip()


def strip_headers(s: str) -> str:
    lines = []
    for ln in s.splitlines():
        t = ln.strip()
        if not t:
            lines.append("")
            continue
        if re.match(r"^===== PAGE", t):
            continue
        if re.match(r"^Page\s+\d+\s*$", t, re.I):
            continue
        if re.match(r"^Financial Mathematics Practice Worksheet\s*$", t, re.I):
            continue
        if re.match(r"^Chapter 11\.\d+", t, re.I) and "Task" not in t:
            continue
        if re.match(r"^Section 11\.\d+", t, re.I) and "Task" not in t:
            continue
        if re.match(r"^Practice Worksheet", t, re.I):
            continue
        lines.append(ln)
    return "\n".join(lines)


def round_difficulty(raw: str) -> tuple[str, str]:
    m = re.search(r"(\d+(?:\.\d+)?)\s*/\s*5", raw or "")
    if not m:
        return "3/5", (raw or "").strip() or "3/5"
    val = float(m.group(1))
    n = max(1, min(5, int(round(val))))
    return f"{n}/5", f"{val:g}/5"


def parse_final_answers(block: str) -> list[bool] | None:
    # Final Answers — a: TRUE, b: FALSE, ...
    m = re.search(r"Final Answers\s*[—\-–:]*\s*(.+)", block, re.I | re.S)
    if m:
        chunk = m.group(1).split("\n")[0]
        pairs = re.findall(r"[a-eA-E]\s*[:\-–]\s*(TRUE|FALSE)", chunk, re.I)
        if len(pairs) >= 5:
            return [p.upper() == "TRUE" for p in pairs[:5]]
    # A: TRUE | B: FALSE | ...
    pairs = re.findall(r"[A-Ea-e]\s*:\s*(TRUE|FALSE)", block, re.I)
    if len(pairs) >= 5:
        # Prefer a line that has many on one line
        for ln in block.splitlines():
            p2 = re.findall(r"[A-Ea-e]\s*:\s*(TRUE|FALSE)", ln, re.I)
            if len(p2) >= 5:
                return [p.upper() == "TRUE" for p in p2[:5]]
        return [p.upper() == "TRUE" for p in pairs[:5]]
    return None


def answers_from_explanations(expl_block: str) -> list[bool] | None:
    out: list[bool | None] = [None] * 5
    for m in re.finditer(
        r"(?im)^\s*([a-eA-E])\)\s*(TRUE|FALSE)\b\.?\s*",
        expl_block,
    ):
        idx = ord(m.group(1).lower()) - ord("a")
        if 0 <= idx < 5:
            out[idx] = m.group(2).upper() == "TRUE"
    if all(x is not None for x in out):
        return [bool(x) for x in out]
    # 11.7 style: A) text without TRUE then answer line elsewhere
    return None


def split_statement_letters(block: str) -> list[str]:
    """Split a)/b)/… or A)/B)/… statement list into 5 strings."""
    block = clean_ws(block)
    # Find starts
    matches = list(re.finditer(r"(?m)^\s*([a-eA-E])\)\s+", block))
    if len(matches) < 5:
        matches = list(re.finditer(r"(?m)^\s*([a-eA-E])[\.\)]\s+", block))
    if len(matches) < 5:
        return []
    # Take first 5 letter starts in order a..e / A..E
    by_letter: dict[str, tuple[int, int]] = {}
    for m in matches:
        letter = m.group(1).lower()
        if letter not in by_letter:
            by_letter[letter] = (m.start(), m.end())
    letters = [chr(ord("a") + i) for i in range(5)]
    if not all(L in by_letter for L in letters):
        return []
    stmts = []
    for i, L in enumerate(letters):
        start = by_letter[L][1]
        end = by_letter[letters[i + 1]][0] if i < 4 else len(block)
        stmts.append(flatten(block[start:end]))
    return stmts


def split_expl_letters(block: str) -> list[str]:
    """Explanations a) TRUE. text …"""
    block = clean_ws(block)
    matches = list(re.finditer(r"(?m)^\s*([a-eA-E])\)\s*", block))
    if len(matches) < 5:
        return []
    by_letter: dict[str, int] = {}
    for m in matches:
        letter = m.group(1).lower()
        if letter not in by_letter:
            by_letter[letter] = m.start()
    letters = [chr(ord("a") + i) for i in range(5)]
    if not all(L in by_letter for L in letters):
        return []
    out = []
    for i, L in enumerate(letters):
        start = by_letter[L]
        end = by_letter[letters[i + 1]] if i < 4 else len(block)
        chunk = block[start:end].strip()
        # strip leading "a) TRUE. " / "A) "
        chunk = re.sub(r"^[a-eA-E]\)\s*(TRUE|FALSE)\b\.?\s*", "", chunk, flags=re.I)
        chunk = re.sub(r"^[a-eA-E]\)\s*", "", chunk)
        out.append(flatten(chunk))
    return out


def parse_standard_file(sid: str, text: str) -> list[dict]:
    text = strip_headers(text)
    # Split on Task N.
    parts = re.split(r"(?im)(?=^Task\s+\d+\.)", text)
    tasks = []
    for part in parts:
        m = re.match(r"(?is)^Task\s+(\d+)\.\s*([^\n]+)\n(.*)$", part.strip())
        if not m:
            continue
        num = int(m.group(1))
        title = flatten(m.group(2))
        body = m.group(3)

        dm = re.search(
            r"(?i)(?:difficulty score|Difficulty)\s*:?\s*(\d+(?:\.\d+)?\s*/\s*5)",
            body,
        )
        if not dm:
            dm = re.search(r"\((\d+(?:\.\d+)?\s*/\s*5)\)", body)
        diff_level, diff_raw = round_difficulty(dm.group(1) if dm else "3/5")

        # Cut statement section
        sm = re.search(r"(?is)Statements?\s*(?:\(True\s*/\s*False\))?\s*:?\s*\n", body)
        sol_m = re.search(r"(?is)\nSolution\s*[–\-—]?\s*Task\s+\d+", body)
        if not sm:
            print(f"WARN {sid} Task {num}: no Statements")
            continue

        pre = body[: sm.start()]
        # remove difficulty line from context
        pre = re.sub(
            r"(?im)^\(?\s*(?:difficulty score|Difficulty)\s*:?\s*\d+(?:\.\d+)?\s*/\s*5\s*\)?\s*$",
            "",
            pre,
        )
        context = flatten(pre)

        after_stmt = body[sm.end() :]
        if sol_m and sol_m.start() > sm.start():
            stmt_block = body[sm.end() : sol_m.start()]
            sol_body = body[sol_m.end() :]
            # remove "Solution – Task N" residual title line if any
            sol_body = re.sub(r"(?is)^[^\n]*\n", "", sol_body, count=0)
            # Actually sol_m ends after "Task N" — keep rest
            sol_body = body[sol_m.start() :]
            sol_body = re.sub(r"(?is)^Solution\s*[–\-—]?\s*Task\s+\d+\s*", "", sol_body)
        else:
            stmt_block = after_stmt
            sol_body = ""

        statements = split_statement_letters(stmt_block)
        if len(statements) != 5:
            print(f"WARN {sid} Task {num}: statements={len(statements)}")
            continue

        # sections inside solution
        given = ""
        formulas = ""
        steps = ""
        expl_block = ""
        gm = re.search(r"(?is)\bGiven\s*:?\s*(.*?)(?=\bFormula|\bStep-by-Step|\bExplanation\b|\bFinal Answers\b|$)", sol_body)
        if gm:
            given = flatten(gm.group(1))
        fm = re.search(r"(?is)\bFormula(?:\(s\))?\s*:?\s*(.*?)(?=\bStep-by-Step|\bExplanation\b|\bFinal Answers\b|$)", sol_body)
        if fm:
            formulas = flatten(fm.group(1))
        stm = re.search(
            r"(?is)\bStep-by-Step(?:\s+Calculations?)?\s*:?\s*(.*?)(?=\bExplanation\b|\bFinal Answers\b|$)",
            sol_body,
        )
        if stm:
            steps = flatten(stm.group(1))
        em = re.search(
            r"(?is)\bExplanation of (?:Each )?Statements?\s*:?\s*(.*?)(?=\bFinal Answers\b|$)",
            sol_body,
        )
        if em:
            expl_block = em.group(1)

        explanations = split_expl_letters(expl_block) if expl_block else []
        answers = parse_final_answers(sol_body)
        if answers is None:
            answers = answers_from_explanations(expl_block)
        if answers is None or len(answers) != 5:
            print(f"WARN {sid} Task {num}: answers missing")
            continue
        if len(explanations) != 5:
            # build minimal from expl_block lines
            if expl_block:
                explanations = split_expl_letters(expl_block)
            if len(explanations) != 5:
                explanations = [""] * 5
                print(f"WARN {sid} Task {num}: explanations padded")

        tasks.append(
            {
                "local_num": num,
                "title": title,
                "difficulty_raw": diff_raw,
                "difficulty_level": diff_level,
                "context": context,
                "statements": statements,
                "answer_key": answers,
                "given": given,
                "formulas": formulas,
                "steps": steps,
                "explanations": explanations,
            }
        )
    tasks.sort(key=lambda t: t["local_num"])
    return tasks


def parse_11_7(text: str) -> list[dict]:
    text = strip_headers(text)
    parts = re.split(r"(?im)(?=^TASK\s+\d+\s*$)", text)
    tasks = []
    for part in parts:
        m = re.match(r"(?is)^TASK\s+(\d+)\s*\n(.*)$", part.strip())
        if not m:
            continue
        num = int(m.group(1))
        body = m.group(2)
        dm = re.search(r"(?i)Difficulty\s*:\s*(\d+(?:\.\d+)?\s*/\s*5)", body)
        diff_level, diff_raw = round_difficulty(dm.group(1) if dm else "3/5")

        # Context: after difficulty until Given: or Statements:
        body2 = re.sub(r"(?im)^Difficulty\s*:.*$", "", body, count=1)
        sm = re.search(r"(?is)\nStatements\s*:\s*\n", body2)
        if not sm:
            print(f"WARN 11.7 Task {num}: no Statements")
            continue
        pre = body2[: sm.start()]
        # drop Given table section from context — keep narrative before Given
        gm = re.search(r"(?is)\bGiven\s*:", pre)
        if gm:
            context = flatten(pre[: gm.start()])
            given_chunk = pre[gm.start() :]
        else:
            context = flatten(pre)
            given_chunk = ""

        after = body2[sm.end() :]
        em = re.search(r"(?is)\nExplanation of Statements\s*:\s*\n", after)
        if em:
            stmt_block = after[: em.start()]
            rest = after[em.end() :]
        else:
            stmt_block = after
            rest = ""

        # answers often after explanations
        answers = parse_final_answers(rest) or parse_final_answers(body)
        # Explanations A) without TRUE prefix
        explanations = split_expl_letters("Explanation:\n" + rest) if rest else []
        # Better: split on A) B) in rest before answer line
        expl_only = rest
        ans_line = re.search(r"(?im)^[A-E]\s*:\s*(TRUE|FALSE)", expl_only)
        if ans_line:
            expl_only = expl_only[: ans_line.start()]
            if answers is None:
                answers = parse_final_answers(rest[ans_line.start() :])
        explanations = split_expl_letters(expl_only)
        statements = split_statement_letters(stmt_block)

        # Formulas / steps from given_chunk + body before statements
        formulas = ""
        steps = ""
        fm = re.search(r"(?is)\bFormula(?:\(s\))?\s*:\s*(.*?)(?=\bStep-by-Step|\bStatements\b|$)", body2)
        if fm:
            formulas = flatten(fm.group(1))
        stm = re.search(r"(?is)\bStep-by-Step(?:\s+Calculations?)?\s*:\s*(.*?)(?=\bStatements\b|$)", body2)
        if stm:
            steps = flatten(stm.group(1))

        if len(statements) != 5:
            print(f"WARN 11.7 Task {num}: statements={len(statements)}")
            continue
        if answers is None or len(answers) != 5:
            # Infer from explanation first words? or NPV language
            print(f"WARN 11.7 Task {num}: trying answer line elsewhere")
            answers = parse_final_answers(part)
        if answers is None or len(answers) != 5:
            print(f"FAIL 11.7 Task {num}: no answers")
            continue
        if len(explanations) != 5:
            explanations = (explanations + [""] * 5)[:5]
            print(f"WARN 11.7 Task {num}: explanations padded")

        tasks.append(
            {
                "local_num": num,
                "title": flatten(context.split(".")[0])[:80] or f"IRR Task {num}",
                "difficulty_raw": diff_raw,
                "difficulty_level": diff_level,
                "context": context,
                "statements": statements,
                "answer_key": answers,
                "given": flatten(given_chunk),
                "formulas": formulas,
                "steps": steps,
                "explanations": explanations,
            }
        )
    tasks.sort(key=lambda t: t["local_num"])
    return tasks


def main() -> None:
    subsections = []
    total = 0
    for sid, title in SUBSECTION_META.items():
        path = EXTRACT / f"{sid}.txt"
        text = path.read_text(encoding="utf-8")
        if sid == "11.7":
            tasks = parse_11_7(text)
        else:
            tasks = parse_standard_file(sid, text)
        # unique local_nums
        seen = set()
        uniq = []
        for t in tasks:
            if t["local_num"] in seen:
                print(f"DUP {sid} task {t['local_num']}")
                continue
            seen.add(t["local_num"])
            uniq.append(t)
        print(f"{sid}: {len(uniq)} tasks")
        total += len(uniq)
        subsections.append({"id": sid, "title": title, "tasks": uniq})

    data = {
        "chapter": 11,
        "chapter_title": "Financial mathematics",
        "subsections": subsections,
    }
    OUT.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print("TOTAL", total, "wrote", OUT)
    if total < 120:
        raise SystemExit(f"Expected ~123 tasks, got {total}")


if __name__ == "__main__":
    main()
