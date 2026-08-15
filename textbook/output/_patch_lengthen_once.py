from pathlib import Path

p = Path(__file__).with_name("_lengthen_ch1_all.py")
t = p.read_text(encoding="utf-8")
old = """        else:
            add(
                \"Chain the relevant rules and contrappositives, then read this wording against what is forced.\"
            )"""
new = """        elif sc >= 4:
            add(
                \"Chain the relevant rules and contrappositives, then read this wording against what is forced.\"
            )"""
# file uses "contrapositives"
old = old.replace("contrappositives", "contrapositives")
new = new.replace("contrappositives", "contrapositives")
if old not in t:
    raise SystemExit("block not found")
t = t.replace(old, new, 1)
old2 = 'r"(?:Compute the relevant set or count on a scratch line[^.]*\\.)",'
new2 = (
    'r"(?:Compute the relevant set or count on a scratch line[^.]*\\.)|"\n'
    '    r"(?:Chain the relevant rules and contrappositives[^.]*\\.)",'
)
if old2 not in t:
    raise SystemExit("method pad anchor not found: " + repr(t[t.find("METHOD_PAD"):t.find("METHOD_PAD")+450]))
t = t.replace(old2, new2, 1)
p.write_text(t, encoding="utf-8")
print("patched")
