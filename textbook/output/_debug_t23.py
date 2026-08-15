import re

raw = open("textbook/output/_t23_descrambled.txt", encoding="utf-8").read()
lines = raw.split("\n")
line = lines[3]
out = [repr(line)]
for m in re.finditer(r".{0,3}\s{2,}.{0,3}", line):
    out.append(repr(m.group(0)))
open("textbook/output/_debug_t23_out.txt", "w", encoding="utf-8").write("\n".join(out))
