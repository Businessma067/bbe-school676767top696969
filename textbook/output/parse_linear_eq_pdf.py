# -*- coding: utf-8 -*-
import json
import re
from pathlib import Path

import pymupdf

doc = pymupdf.open(r"c:\Users\bubli\Downloads\Linear_Equations_All_60_Tasks_Reranked-1.pdf")
pages = [p.get_text() for p in doc]
body = "\n".join(pages[1:])

parts = re.split(r"(?=^TASK\s+\d+\s+[—\-])", body, flags=re.M)
tasks = []

for part in parts:
    part = part.strip()
    if not part.startswith("TASK"):
        continue
    m = re.match(r"TASK\s+(\d+)\s+[—\-]\s*(.+)", part)
    if not m:
        print("BAD header", part[:80])
        continue
    num = int(m.group(1))
    title_line = m.group(2).split("\n")[0].strip()

    dm = re.search(r"Difficulty:\s*([0-9.]+)/10", part)
    diff10 = float(dm.group(1)) if dm else None

    fm = re.search(r"Format:\s*(.+)", part)
    fmt = fm.group(1).strip() if fm else ""

    gm = re.search(r"GIVEN\n([\s\S]*?)\nSTATEMENTS\n", part)
    given = gm.group(1).strip() if gm else ""

    sm = re.search(r"STATEMENTS\n([\s\S]*?)\nMATHEMATICAL MODEL", part)
    stmts_raw = sm.group(1).strip() if sm else ""
    statements = []
    for lab in "ABCDE":
        mm = re.search(rf"{lab}\.\s+(.*?)(?=\n[A-E]\.\s|\Z)", stmts_raw, re.S)
        if mm:
            statements.append(re.sub(r"\s+", " ", mm.group(1)).strip())

    mm2 = re.search(r"MATHEMATICAL MODEL\n([\s\S]*?)\nSTEP-BY-STEP SOLUTION", part)
    model = mm2.group(1).strip() if mm2 else ""

    solm = re.search(r"STEP-BY-STEP SOLUTION\n([\s\S]*?)\nSTATEMENT ANALYSIS", part)
    solution = solm.group(1).strip() if solm else ""

    am = re.search(r"STATEMENT ANALYSIS\n([\s\S]*?)\nGENERAL EXPLANATION\n", part)
    analysis = am.group(1).strip() if am else ""

    answers = []
    explanations = []
    for lab in "ABCDE":
        mm = re.search(
            rf"(?:^|\n){lab}\n(TRUE|FALSE)\n([\s\S]*?)(?=\n[A-E]\n(?:TRUE|FALSE)\n|\Z)",
            analysis,
        )
        if mm:
            answers.append(mm.group(1) == "TRUE")
            explanations.append(re.sub(r"\s+", " ", mm.group(2)).strip())
        else:
            answers.append(None)
            explanations.append("")

    genm = re.search(r"GENERAL EXPLANATION\n([\s\S]*)", part)
    general = re.sub(r"\s+", " ", genm.group(1)).strip() if genm else ""

    if diff10 is not None:
        d5 = max(1, min(5, int(round(diff10 / 2.0))))
        diff_level = f"{d5}/5"
    else:
        diff_level = "3/5"

    # Build context from narrative before GIVEN (story + maybe table)
    header_end = part.find("\nGIVEN\n")
    narrative = ""
    if header_end > 0:
        head = part[:header_end]
        # drop first lines (TASK title, Format, prev refs)
        lines = head.split("\n")
        skip = 0
        for i, line in enumerate(lines):
            if line.startswith("TASK ") or line.startswith("Format:") or line.startswith("(previously"):
                skip = i + 1
                continue
            if not line.strip():
                skip = i + 1
                continue
            break
        narrative = "\n".join(lines[skip:]).strip()

    tasks.append(
        {
            "num": num,
            "title": title_line,
            "format": fmt,
            "difficulty_10": diff10,
            "difficulty_level": diff_level,
            "narrative": narrative,
            "given": given,
            "statements": statements,
            "answer_key": answers,
            "explanations": explanations,
            "model": model,
            "solution": solution,
            "general": general,
        }
    )

print("parsed", len(tasks))
incomplete = [
    t["num"]
    for t in tasks
    if len(t["statements"]) != 5 or None in t["answer_key"] or len(t["explanations"]) != 5
]
print("incomplete", incomplete)
print("diff sample", [(t["num"], t["difficulty_10"], t["difficulty_level"]) for t in tasks[:8]])
print("t1 answers", tasks[0]["answer_key"])
print("t1 stmts", tasks[0]["statements"])

out = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\textbook\output\linear_eq_60_raw.json")
out.write_text(json.dumps(tasks, ensure_ascii=False, indent=2), encoding="utf-8")
print("wrote", out, out.stat().st_size)
