# Patch remaining scar lines directly in math-ch1-logic.ts (notebook transfer).
from pathlib import Path
import re

TS = Path(__file__).resolve().parents[2] / "src" / "data" / "math-ch1-logic.ts"
text = TS.read_text(encoding="utf-8")

repls = [
    (
        r"The correct result is B \\setminus C = \\{6, 9, 12\\}, not \\{3, 6, 9, 12\\}$.",
        r"The correct result is $B \\setminus C = \\{6, 9, 12\\}$, not $\\{3, 6, 9, 12\\}$.",
    ),
    (
        r"$\\{1,2\\}$ and \\{2,3,4\\} share the element 2, so the blocks of \\mathcal{S}'$ are not disjoint",
        r"$\\{1,2\\}$ and $\\{2,3,4\\}$ share the element 2, so the blocks of $\\mathcal{S}'$ are not disjoint",
    ),
    (
        r"$2 \\in A$ and x \\in B, so the ordered pair (2,x), with first coordinate from A and second from B, belongs to A \\times B$.",
        r"$2 \\in A$ and $x \\in B$, so the ordered pair (2,x), with first coordinate from A and second from B, belongs to $A \\times B$.",
    ),
    (
        r'translates to Q \\Rightarrow P (the converse), the same trap as statement (a) worded differently - it is NOT equivalent to P \\Rightarrow Q$.',
        r'translates to $Q \\Rightarrow P$ (the converse), the same trap as statement (a) worded differently - it is NOT equivalent to $P \\Rightarrow Q$.',
    ),
    (
        r"$\\neg P \\Rightarrow \\neg Q (the inverse), not guaranteed",
        r"$\\neg P \\Rightarrow \\neg Q$ (the inverse), not guaranteed",
    ),
]

# Fix trailing-only cardinality formulas: `\lvert A\rvert - ... = 16$.` missing opener
text2 = re.sub(
    r"(overlap: )(\\\\lvert [^$]+?= \d+)(\$)",
    r"\1$\2$",
    text,
)

n = 0
for a, b in repls:
    c = text2.count(a)
    if c:
        text2 = text2.replace(a, b)
        n += c
        print(f"fixed x{c}: {a[:50]}...")
    else:
        print(f"MISS: {a[:60]}...")

# Also fix unclosed `$10 \in A \cap B` / `$5 \in A \setminus B` if present
text2, c1 = re.subn(
    r"(\$10 \\\\in A \\\\cap B)(?!\$)",
    r"$10 \\in A \\cap B$",
    text2,
)
text2, c2 = re.subn(
    r"(\$5 \\\\in A \\\\setminus B)(?!\$)",
    r"$5 \\in A \\setminus B$",
    text2,
)
print("cap close", c1, "setminus close", c2)

TS.write_text(text2, encoding="utf-8")
print("wrote", n, "literal fixes")
