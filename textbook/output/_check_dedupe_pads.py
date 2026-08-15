# -*- coding: utf-8 -*-
import json
from pathlib import Path

t = json.loads(Path(__file__).with_name("_ch1_tasks_dump.json").read_text(encoding="utf-8"))
out = []
for tid in ["math-1-99", "math-1-75", "math-1-55", "math-1-94", "math-1-59", "math-1-4", "math-1-11"]:
    x = next(z for z in t if z["id"] == tid)
    out.append(f"\n======== {tid}")
    for e in x["tactical_explanations"]:
        out.append(e)
        out.append("---")

# Also flag any explanation that still has duplicate consecutive similar sentences
dup_hits = []
for x in t:
    for i, e in enumerate(x.get("tactical_explanations") or []):
        paras = [p.strip() for p in e.split("\n\n") if p.strip()]
        for a, b in zip(paras, paras[1:]):
            if a == b:
                dup_hits.append(f"{x['id']}[{i}] exact para dup")
            # short meta dup signals
            for phrase in [
                "contrapositive keeps",
                "Either form can be used",
                "classic counter-pattern",
                "wording overreaches",
                "Working with the contrapostive",
            ]:
                if e.lower().count(phrase.lower()) > 1:
                    dup_hits.append(f"{x['id']}[{i}] multi:{phrase}")

out.append(f"\nDUP HITS: {len(dup_hits)}")
out.extend(dup_hits[:40])
Path(__file__).with_name("_check_dedupe_samples.txt").write_text("\n".join(out), encoding="utf-8")
print("wrote samples", len(out), "dup_hits", len(dup_hits))
