import json
from pathlib import Path
data=json.loads(Path("src/data/mock-exam-demo-sourced.json").read_text(encoding="utf-8"))
LETTERS="ABCDE"
out=[]
for sub in ("economics", "math"):
  out.append("# "+sub)
  for t in data[sub]:
    out.append("## "+t["case_id"])
    out.append("keys "+str(t["answer_key"]))
    out.append("stmts "+str(t["statements"]))
    for i,e in enumerate(t["tactical_explanations"]):
      out.append("### "+LETTERS[i]+" len="+str(len(e)))
      out.append(e)
      out.append("")
Path("scripts/_demo_expl_dump.md").write_text(chr(10).join(out), encoding="utf-8")
print("dumped", len(out))
