# -*- coding: utf-8 -*-
import re
from pathlib import Path

src = Path("src/lib/i18n/ui-extra.ts").read_text(encoding="utf-8")
de_full = src[src.find("export const uiExtraDe") : src.find("export const uiExtraUk")]
de_demo = re.findall(r'^  "([^"]+)":', de_full[de_full.rfind("// demo-mock") :], re.M)
uk_full = src[src.find("export const uiExtraUk") :]
uk_demo = re.findall(r'^  "([^"]+)":', uk_full[uk_full.rfind("// demo-mock") :], re.M)
print("DE", len(de_demo), "UK", len(uk_demo))
print("only DE", sorted(set(de_demo) - set(uk_demo)))
print("only UK", sorted(set(uk_demo) - set(de_demo)))
