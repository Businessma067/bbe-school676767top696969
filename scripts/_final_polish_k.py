# -*- coding: utf-8 -*-
"""Final polish: clean MATH 12.187 micro-junk; thicken short simple letters slightly."""
import json
import re
from pathlib import Path

PATH = Path("src/data/mock-exam-demo-sourced.json")
TS = Path("src/lib/mock-exam-demo-content.ts")
PATCH = Path("scripts/patch_demo_explanations.py")
REV = "2026-09-26k · demo expl closer to mocks 2-4"
DD = "$$"

data = json.loads(PATH.read_text(encoding="utf-8"))
patch_src = PATCH.read_text(encoding="utf-8")
cut = patch_src.find("# Apply + validate")
start = patch_src.find("NEW = {}")
ns = {}
exec("NEW = {}\n" + patch_src[start + len("NEW = {}") : cut], ns, ns)
AUTH = ns["NEW"]

by = {t["case_id"]: t for t in data["math"]}

# Use authored MATH 12.187 (shared-model correct; cleaner)
by["MATH 12.187"]["tactical_explanations"] = [x.strip() for x in AUTH["MATH 12.187"]]

# Thicken 13.108 A–D toward mock rhythm (still compact)
by["MATH 13.108"]["tactical_explanations"][0] = r"""**A.** → True

From the stem mean $E[X]=11.2$ on $n=14$ independent trials,

$$
p=\dfrac{E[X]}{n}=\dfrac{11.2}{14}=0.8
$$

Each trial fails with the complementary probability

$$
1-p=1-0.8=0.2
$$

which is exactly the failure probability stated in the claim.

So the statement is True."""

by["MATH 13.108"]["tactical_explanations"][1] = r"""**B.** → False

For a binomial count the mean is the product of the trial count and the success probability. With $n=12$ and the recovered $p=0.8$,

$$
E[X]=np=12\cdot 0.8=9.6
$$

The claim reports $4.8$. Because $9.6\neq 4.8$, the statement is false.

So the statement is False."""

by["MATH 13.108"]["tactical_explanations"][2] = r"""**C.** → True

Binomial variance is $np(1-p)$. Insert $n=50$, $p=0.8$, and $1-p=0.2$:

$$
\mathrm{Var}(X)=50\cdot 0.8\cdot 0.2
$$

$$
50\cdot 0.8=40\qquad 40\cdot 0.2=8
$$

The variance equals $8$, matching the claim.

So the statement is True."""

by["MATH 13.108"]["tactical_explanations"][3] = r"""**D.** → False

Independence means a run of three successes multiplies the same probability on every trial:

$$
p^{3}=(0.8)^{3}=0.512
$$

Compare with the claimed cutoff $0.3$:

$$
0.512\ge 0.3
$$

The inequality in the claim therefore fails.

So the statement is False."""

# Keep E as already cleaned in narrow polish — re-read current
# (already good)

# Thicken DEMO MATH 8 A/B slightly
by["DEMO MATH 8.H01"]["tactical_explanations"][0] = r"""**A.** → True

Daytime tariff has two pieces: a fixed base of EUR $12$ and a per-kilometre rate of EUR $0.8$. For distance $d$ the kilometre charge is $0.8d$, so the bill is

$$
C_{\mathrm{day}}(d)=12+0.8d
$$

which is exactly the claimed daytime formula.

So the statement is True."""

by["DEMO MATH 8.H01"]["tactical_explanations"][1] = r"""**B.** → True

Night runs keep the same kilometre rate and add a flat surcharge of EUR $5$:

$$
C_{\mathrm{night}}(d)=C_{\mathrm{day}}(d)+5=12+0.8d+5
$$

for every $d>0$. The night bill is therefore exactly EUR $5$ more than the day bill at the same distance.

So the statement is True."""

# Clean leftover orphaned multiply displays in any letter: drop lines that are only N×M=K
# when adjacent to a merged form — light pass on all math
ORPHAN = re.compile(
    r"\n\$\$\n(?:4\\times 98=392|4\\times 94=376|4\\times 85=340)\n\$\$\n"
)


def clean_orphans(text: str) -> str:
    text = ORPHAN.sub("\n", text)
    # Drop standalone "0.04\times 0.98" then keep next merged line
    text = re.sub(
        r"\n\$\$\n0\.04\\times 0\.\d+\n\$\$\n\n",
        "\n",
        text,
    )
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


for t in data["math"]:
    t["tactical_explanations"] = [clean_orphans(e) for e in t["tactical_explanations"]]


def stats(subject):
    lens, blocks = [], []
    for t in data[subject]:
        for e in t["tactical_explanations"]:
            lens.append(len(e))
            blocks.append(e.count(DD) // 2)
    return {
        "avg": round(sum(lens) / len(lens), 1),
        "min": min(lens),
        "max": max(lens),
        "bavg": round(sum(blocks) / len(blocks), 2),
    }


print("final", {s: stats(s) for s in ("economics", "math")})

errors = []
checked = 0
for subject in ("economics", "math"):
    for task in data[subject]:
        for i, letter in enumerate("ABCDE"):
            checked += 1
            want = "True" if task["answer_key"][i] else "False"
            expl = task["tactical_explanations"][i]
            if not expl.startswith(f"**{letter}.** → {want}"):
                errors.append(f"{task['case_id']} {letter}")
            if expl.count(DD) % 2:
                errors.append(f"{task['case_id']} {letter} $$")
print("checked", checked, "errors", len(errors))
if errors:
    print(errors[:10])
    raise SystemExit(1)

PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
ts = TS.read_text(encoding="utf-8")
ts2, n = re.subn(
    r'export const MOCK_EXAM_DEMO_CONTENT_REV\s*=\s*\n?\s*"[^"]*";',
    f'export const MOCK_EXAM_DEMO_CONTENT_REV =\n  "{REV}";',
    ts,
    count=1,
)
assert n == 1
TS.write_text(ts2, encoding="utf-8")
print("wrote")
