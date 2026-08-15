import re

raw = open("textbook/output/logic_pdf_extract.txt", encoding="utf-8").read()
parts = re.split(r"(?=Task \d+(?:\.|\n))", raw)
part = next(p for p in parts if re.match(r"Task 41(?:\.|\n)", p))

OPERATOR_SYMBOLS = {"\u2227", "\u2228", "\u00ac", "\u21d2", "\u21d4", "\u2208", "\u2209", "\u2286", "\u2282", "\u222a", "\u2229", "\u2205", "\u25b3", "\u2200", "\u2203"}


def descramble(part: str) -> str:
    lines = part.split("\n")
    text_lines = []
    symbol_queue = []
    for line in lines:
        s = line.strip()
        if s in OPERATOR_SYMBOLS:
            symbol_queue.append(s)
        else:
            text_lines.append(line)
    text = "\n".join(text_lines)
    qi = [0]

    def repl(m):
        if qi[0] < len(symbol_queue):
            sym = symbol_queue[qi[0]]
            qi[0] += 1
            return f" {sym} "
        return m.group(0)

    return re.sub(r"[ \t]{2,}", repl, text)


part = descramble(part)

stm_block = re.search(
    r"(?:Statements \(True / False\):|^a\))\s*(.*?)(?=\n(?:Explanations:|Answers))",
    part,
    re.S | re.M,
)
text_for_stmts = stm_block.group(0) if stm_block else part

out = ["STM_BLOCK FOUND: " + str(bool(stm_block)), "----", text_for_stmts, "----"]

for letter in "abcde":
    sm = re.search(
        rf"(?ms)^{letter}\)\s*(.+?)(?=\n(?:[a-e]\)|Explanations:|Answers|&|\Z))",
        text_for_stmts,
    )
    val = repr(sm.group(1)) if sm else "None"
    out.append(f"{letter}: matched={bool(sm)} -> {val}")

open("textbook/output/_debug_t41_out.txt", "w", encoding="utf-8").write("\n".join(out))
