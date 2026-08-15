# -*- coding: utf-8 -*-
import importlib.util
from pathlib import Path

spec = importlib.util.spec_from_file_location("dedupe", Path(__file__).with_name("_dedupe_ch1_expl.py"))
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)

samples = [
    "**D.** → True\n\n"
    "An implication and its **contrapositive** carry the same information:\n\n"
    "$$p \\Rightarrow q \\quad\\Leftrightarrow\\quad \\neg q \\Rightarrow \\neg p$$\n\n"
    "Either form can be used freely; they never disagree.\n\n"
    "The contrapostive $\\neg Q \\Rightarrow \\neg P$ is always logically equivalent to $P \\Rightarrow Q$ - a structural guarantee for any implication.\n\n"
    "The contrapostive keeps the same truth value as the original implication.\n\n"
    "That matches the shared facts, so the statement is True.",
    "**D.** → True\n\n"
    "An implication and its **contrapositive** carry the same information:\n\n"
    "$$p \\Rightarrow q \\quad\\Leftrightarrow\\quad \\neg q \\Rightarrow \\neg p$$\n\n"
    "Either form can be used freely; they never disagree.\n\n"
    "The contrapostive is always equivalent to the original theorem, which is true, so the contrapostive is true too - and indeed it's the standard tool for proving unboundedness implies divergence.\n\n"
    "The contrapostive keeps the same truth value as the original implication.\n\n"
    "Working with the contrapostive is often easier when the original wording is awkward: deny the conclusion first, then deny the premise, and check whether that **forced** chain matches the claim.\n\n"
    "That matches the shared facts, so the statement is True.",
]

out = []
for i, s in enumerate(samples):
    c = mod.clean_expl(s)
    out.append(f"===== SAMPLE {i} =====\n{c}\n")
Path(__file__).with_name("_dbg_clean_out.txt").write_text("\n".join(out), encoding="utf-8")
print("wrote", len(out))
