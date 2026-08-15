import json
import re
from pathlib import Path

BANKS = Path(__file__).with_name("ch1_logic_banks")
CMD = re.compile(r"\\(?:neg|forall|exists|in|notin|cup|cap|subseteq|subset|emptyset|land|lor|Rightarrow|Leftrightarrow|triangle|times|setminus)\b")

out = []
for f in sorted(BANKS.glob("*_V2.json")):
    tasks = json.loads(f.read_text(encoding="utf-8"))
    for t in tasks:
        fields = {
            "context": t["context"],
            **{f"stmt{i}": s for i, s in enumerate(t["statements"])},
            **{f"expl{i}": s for i, s in enumerate(t["tactical_explanations"])},
            "overview": t["solution_overview"],
        }
        for name, text in fields.items():
            # Treat plain currency amounts ($20,000 / $1 million) as ordinary text,
            # not math delimiters, matching the frontend's currency detection -
            # otherwise a lone currency "$" throws off in/out-of-math tracking.
            text2 = re.sub(r"\$\d[\d,]*(?:\.\d+)?(?:\s*(?:million|billion|thousand))?", "\uE000", text)
            in_math = False
            i = 0
            clean = []
            while i < len(text2):
                if text2[i] == "$":
                    in_math = not in_math
                    i += 1
                    continue
                if not in_math:
                    clean.append(text2[i])
                i += 1
            outside = "".join(clean)
            for m in CMD.finditer(outside):
                out.append(f"{t['id']} {name}: {m.group(0)!r} outside $..$ -- {outside[max(0,m.start()-40):m.start()+40]!r}")
        # Also check for leftover unescaped set-literal braces inside $...$.
        # Real LaTeX-command argument braces (\mathcal{P}, \binom{4}{3}, 2^{|A|},
        # \mathbb{Z}) are legitimate - strip those first, then anything left is a
        # genuine unescaped literal brace bug.
        LEGIT_GROUP = re.compile(r"(?:\\[a-zA-Z]+|\^)\{[^{}]*\}")
        for name, text in fields.items():
            for m in re.finditer(r"\$[^$]*\$", text):
                inner = m.group(0)[1:-1]
                stripped = inner
                for _ in range(5):
                    new = LEGIT_GROUP.sub("", stripped)
                    if new == stripped:
                        break
                    stripped = new
                if re.search(r"(?<!\\)[{}]", stripped):
                    out.append(f"{t['id']} {name}: unescaped brace inside math: {m.group(0)!r}")

Path(__file__).with_name("_audit_v2_raw_latex_out.txt").write_text("\n".join(out) or "CLEAN", encoding="utf-8")
print("done", len(out))
