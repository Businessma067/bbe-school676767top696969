import json
from pathlib import Path
data=json.loads(Path("src/data/mock-exam-demo-sourced.json").read_text(encoding="utf-8"))
for t in data["economics"]:
  print("====", t["case_id"])
  print(t["context"][:900])
  print("---")
