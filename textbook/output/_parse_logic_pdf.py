"""Parse LOGIC.pdf into structured JSON for Chapter 1 authoring."""
from __future__ import annotations

import json
import re
from pathlib import Path

PDF = Path(r"C:\Users\bubli\Downloads\Telegram Desktop\LOGIC.pdf")
# v2 extraction (see _extract_logic_v2.py) rebuilds lines from character-level
# bounding boxes instead of PyMuPDF's own line/span grouping, which mis-places
# operator glyphs (∧/∨/∪/∩/⊆/¬/...) rendered in a differing embedded font.
OUT_TXT = Path(__file__).with_name("logic_pdf_extract_v2.txt")
OUT_JSON = Path(__file__).with_name("logic_parsed.json")

# PyMuPDF extracts these special glyphs out of their inline position: the main
# text line keeps a run of spaces where the glyph belongs, and the glyph itself
# is dumped as its own solo line shortly after. Reinsert each solo glyph into
# the next available multi-space gap, in reading order (verified against the
# source PDF: this recovers exactly the correct connective for every case
# checked, e.g. Task 23's "P _ Q=false, P _ Q=true" + queued "∧ ∨ ∧ ∨").
OPERATOR_SYMBOLS = {"∧", "∨", "¬", "⇒", "⇔", "∈", "∉", "⊆", "⊂", "∪", "∩", "∅", "△", "∀", "∃"}


def descramble(part: str) -> str:
    lines = part.split("\n")
    text_lines: list[str] = []
    symbol_queue: list[str] = []
    for line in lines:
        s = line.strip()
        if s in OPERATOR_SYMBOLS:
            symbol_queue.append(s)
        else:
            text_lines.append(line)
    text = "\n".join(text_lines)

    qi = [0]

    def repl(m: re.Match) -> str:
        if qi[0] < len(symbol_queue):
            sym = symbol_queue[qi[0]]
            qi[0] += 1
            return f" {sym} "
        return m.group(0)

    return re.sub(r"[ \t]{2,}", repl, text)


def main() -> None:
    raw = OUT_TXT.read_text(encoding="utf-8")

    parts = re.split(r"(?=Task \d+(?:\.|\n))", raw)
    tasks: list[dict] = []
    for part in parts:
        m = re.match(r"Task (\d+)(?:\.\s*([^\n]+))?", part)
        if not m:
            continue
        part = descramble(part)
        num = int(m.group(1))
        title = (m.group(2) or "").strip()
        src = re.search(r"\(source:\s*([^)]+)\)", part)
        score_m = re.search(r"difficulty score\s+(\d+)/8", part, re.I)
        score = int(score_m.group(1)) if score_m else None

        gen = re.search(
            r"General Solution:\s*(.*?)(?=\n(?:a\)|Statements|Answers))",
            part,
            re.S,
        )
        ctx_m = re.search(r"Context:\s*(.*?)(?=\nGeneral Solution:)", part, re.S)

        stmts: list[str] = []
        stm_block = re.search(
            r"(?:Statements \(True / False\):|^a\))\s*(.*?)(?=\n(?:Explanations:|Answers))",
            part,
            re.S | re.M,
        )
        text_for_stmts = stm_block.group(0) if stm_block else part
        for letter in "abcde":
            sm = re.search(
                rf"(?ms)^{letter}\)\s*(.+?)(?=\n(?:[a-e]\)|Explanations:|Answers|&)|\Z)",
                text_for_stmts,
            )
            if sm:
                stmts.append(re.sub(r"\s+", " ", sm.group(1)).strip())
            else:
                sm2 = re.search(rf"(?ms)^{letter}\)\s*(.+)$", text_for_stmts)
                if sm2:
                    stmts.append(re.sub(r"\s+", " ", sm2.group(1)).strip())

        answers: list[bool] = []
        expls: list[str] = []
        exp_block = re.search(
            r"(?:Explanations:|Answers & Explanations:|Answers:)\s*(.*)",
            part,
            re.S,
        )
        if exp_block:
            eb = exp_block.group(1)
            for letter in "abcde":
                em = re.search(
                    rf"(?ms)^{letter}\)\s*((?:True|False|TRUE|FALSE)[^\n]*)(.*?)(?=\n(?:[a-e]\))|\Z)",
                    eb,
                )
                if em:
                    head = em.group(1).strip()
                    rest = re.sub(r"\s+", " ", em.group(2)).strip()
                    answers.append(head.lower().startswith("true"))
                    expls.append(f"{letter}) {head} {rest}".strip())
                else:
                    em2 = re.search(
                        rf"(?ms)^{letter}\)\s*(True|False)\.\s*(.*?)(?=\n(?:[a-e]\))|\Z)",
                        eb,
                    )
                    if em2:
                        answers.append(em2.group(1).lower() == "true")
                        expls.append(
                            f"{letter}) {em2.group(1)}. "
                            + re.sub(r"\s+", " ", em2.group(2)).strip()
                        )

        context = ""
        if ctx_m:
            context = re.sub(r"\s+", " ", ctx_m.group(1)).strip()
        else:
            let = re.search(r"(Let [^\n]+(?:\n[^\n]+){0,3})", part)
            if let:
                context = re.sub(r"\s+", " ", let.group(1)).strip()
        general = re.sub(r"\s+", " ", gen.group(1)).strip() if gen else ""

        tasks.append(
            {
                "pdf_num": num,
                "title": title or f"Task {num}",
                "difficulty_score_8": score,
                "source": src.group(1).strip() if src else None,
                "context": context,
                "general_solution": general,
                "statements": stmts[:5],
                "answer_key": answers[:5],
                "explanations_raw": expls[:5],
                "raw_excerpt": part[:3500],
            }
        )

    OUT_JSON.write_text(json.dumps(tasks, ensure_ascii=False, indent=2), encoding="utf-8")
    print("tasks", len(tasks))
    ok = sum(
        1
        for t in tasks
        if len(t["statements"]) == 5 and len(t["answer_key"]) == 5
    )
    print("complete 5/5", ok, "/", len(tasks))
    for t in tasks:
        print(
            f"{t['pdf_num']:02d} stmts={len(t['statements'])} ans={len(t['answer_key'])} "
            f"expl={len(t['explanations_raw'])} score={t['difficulty_score_8']} | {t['title'][:60]}"
        )


if __name__ == "__main__":
    main()
