# -*- coding: utf-8 -*-
"""
Polish pass: replace garbage-compressed math letters with authored patch bodies,
and hand-write a clean MATH 13.108 E binomial tail.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PATH = ROOT / "src" / "data" / "mock-exam-demo-sourced.json"
TS = ROOT / "src" / "lib" / "mock-exam-demo-content.ts"
PATCH = ROOT / "scripts" / "patch_demo_explanations.py"
REV = "2026-09-26k · demo expl closer to mocks 2-4"
DD = "$$"

data = json.loads(PATH.read_text(encoding="utf-8"))

patch_src = PATCH.read_text(encoding="utf-8")
cut = patch_src.find("# Apply + validate")
start = patch_src.find("NEW = {}")
ns: dict = {}
exec("NEW = {}\n" + patch_src[start + len("NEW = {}") : cut], ns, ns)
AUTH = ns["NEW"]

FORCE_AUTH_CASES = {
    "DEMO MATH 5.H01",
    "DEMO MATH 7.H01",
    "DEMO MATH 8.H01",
    "DEMO MATH 9.H01",
    "DEMO MATH 10.H01",
    "DEMO MATH 11.H01",
    "MATH 11.99",
    "MATH 12.187",
    "DEMO MATH 1.H02",
    "DEMO MATH 2.H02",
}

# Clean binomial tail for 13.108 E — terms kept, micro-arithmetic merged.
E_13_108 = r"""**E.** → False

Let $X\sim\mathrm{Bin}(6,0.8)$. The event “at most $4$ successes” is

$$
P(X\le 4)=\sum_{x=0}^{4}\binom{6}{x}(0.8)^{x}(0.2)^{6-x}
$$

Term $x=0$:

$$
P(X=0)=\binom{6}{0}(0.8)^{0}(0.2)^{6}=1\cdot 1\cdot 0.000064=0.000064
$$

Term $x=1$:

$$
\binom{6}{1}=6,\qquad (0.2)^{5}=0.00032
$$

$$
P(X=1)=6\cdot 0.8\cdot 0.00032=0.001536
$$

Term $x=2$:

$$
\binom{6}{2}=15,\qquad (0.8)^{2}=0.64,\qquad (0.2)^{4}=0.0016
$$

$$
P(X=2)=15\cdot 0.64\cdot 0.0016=0.01536
$$

Term $x=3$:

$$
\binom{6}{3}=20,\qquad (0.8)^{3}=0.512,\qquad (0.2)^{3}=0.008
$$

$$
P(X=3)=20\cdot 0.512\cdot 0.008=0.08192
$$

Term $x=4$:

$$
\binom{6}{4}=15,\qquad (0.8)^{4}=0.4096,\qquad (0.2)^{2}=0.04
$$

$$
P(X=4)=15\cdot 0.4096\cdot 0.04=0.24576
$$

Sum:

$$
0.000064+0.001536+0.01536+0.08192+0.24576=0.34464
$$

$$
0.34464<0.5
$$

The probability is below $0.5$, so the claim fails.

So the statement is False."""

# Slightly thicken 13.108 A–D from auth if needed — use auth as-is but merge
# the most trivial write-then-eval pairs in A.
A_13_108 = r"""**A.** → True

Recover the success probability from the stem mean and trial count:

$$
p=\dfrac{11.2}{14}=0.8
$$

The failure probability is the complement:

$$
1-p=1-0.8=0.2
$$

which matches the claim.

So the statement is True."""

B_13_108 = r"""**B.** → False

For $X\sim\mathrm{Bin}(n,p)$ the mean is

$$
E[X]=np=12\cdot 0.8=9.6
$$

The claim reports $4.8$, which is not equal to $9.6$.

So the statement is False."""

C_13_108 = r"""**C.** → True

Binomial variance:

$$
\mathrm{Var}(X)=np(1-p)=50\cdot 0.8\cdot 0.2
$$

$$
50\cdot 0.8=40,\qquad 40\cdot 0.2=8
$$

which matches the claimed variance.

So the statement is True."""

D_13_108 = r"""**D.** → False

Three independent successes multiply the same probability:

$$
p^{3}=(0.8)^{3}=0.512
$$

$$
0.512\ge 0.3
$$

so the claim’s inequality fails.

So the statement is False."""


def polish_auth(text: str) -> str:
    """Light merge of trailing write-then-eval pairs in authored text."""
    # Merge $$\\n expr \\n$$\\n\\n$$\\n= result$$ patterns already mostly merged in auth
    # Merge consecutive short: c=90 then m=180-90 then 180-90=90
    text = re.sub(
        r"\$\$\n(m=180-90)\n\$\$\n\n\$\$\n180-90=90\n\$\$",
        "$$\n\\1=90\n$$",
        text,
    )
    text = re.sub(
        r"\$\$\n(c=\\\\frac\{1800\}\{20\})\n\$\$\n\n\$\$\n\\\\frac\{1800\}\{20\}=90\n\$\$\n\n\$\$\nc=90\n\$\$",
        "$$\nc=\\\\frac{1800}{20}=90\n$$",
        text,
    )
    return text.strip()


def stats(subject):
    lens, blocks = [], []
    for t in data[subject]:
        for e in t["tactical_explanations"]:
            lens.append(len(e))
            blocks.append(e.count(DD) // 2)
    return {
        "n": len(lens),
        "avg": round(sum(lens) / len(lens), 1),
        "min": min(lens),
        "max": max(lens),
        "bavg": round(sum(blocks) / len(blocks), 2),
    }


before = {s: stats(s) for s in ("economics", "math")}

for task in data["math"]:
    cid = task["case_id"]
    if cid == "MATH 13.108":
        task["tactical_explanations"] = [A_13_108, B_13_108, C_13_108, D_13_108, E_13_108]
        continue
    if cid in FORCE_AUTH_CASES and cid in AUTH:
        task["tactical_explanations"] = [polish_auth(x) for x in AUTH[cid]]

# Keep econ as-is (already good avg). Optionally force remaining thin econ from auth
# if any letter still teaches formula identities
for task in data["economics"]:
    cid = task["case_id"]
    if cid in AUTH:
        # Prefer auth when current still has formula-teaching text blocks
        new = []
        for i, cur in enumerate(task["tactical_explanations"]):
            if "\\text{" in cur and "\\frac{\\text" in cur:
                new.append(AUTH[cid][i].strip())
            elif len(cur) > 520 and len(AUTH[cid][i]) < len(cur):
                # still bloated — take auth
                new.append(AUTH[cid][i].strip())
            else:
                new.append(cur)
        task["tactical_explanations"] = new

after = {s: stats(s) for s in ("economics", "math")}
print("BEFORE polish", before)
print("AFTER  polish", after)

# Validate headers
errors = []
checked = 0
for subject in ("economics", "math"):
    for task in data[subject]:
        for i, letter in enumerate("ABCDE"):
            checked += 1
            want = "True" if task["answer_key"][i] else "False"
            expl = task["tactical_explanations"][i]
            if not expl.startswith(f"**{letter}.** → {want}"):
                errors.append(f"{task['case_id']} {letter}: got {expl[:50]!r}")
            if expl.count(DD) % 2:
                errors.append(f"{task['case_id']} {letter}: unbalanced")

print("checked", checked, "errors", len(errors))
for e in errors[:20]:
    print(" ", e)
if errors:
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
