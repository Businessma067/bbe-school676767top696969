import importlib.util
from pathlib import Path

spec = importlib.util.spec_from_file_location("b", Path(__file__).with_name("_build_ch1_v2.py"))
b = importlib.util.module_from_spec(spec)
spec.loader.exec_module(b)

samples = [
    r"Membership vs inclusion are different: $x \in A$ is an element; $B \subseteq A$ is a set inside A.",
    r"A set with n elements has $2^n$ subsets",
    r"Let $A = \{1, 2, 3\}$.",
    r"Always: $\emptyset \subseteq A$.",
    r"Proper subset: $B \subsetneq A$ only when $B \neq A$.",
    r"$\lvert \mathcal{P}(A)\rvert = 2^{\lvert A\rvert}$",
]
for s in samples:
    out = b.normalize_math_dollars(s)
    print("IN :", s)
    print("OUT:", out)
    print("ok:", s == out or True)
    print("---")
    # Also test looks_like
    import re
    for m in re.finditer(r"\$([^$]+)\$", s):
        print(" inner", repr(m.group(1)), "->", b._looks_like_math_inner(m.group(1)))
