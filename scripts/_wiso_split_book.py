"""Split the WISO 2026 book extract into subsection files + chapter theory MD."""
from __future__ import annotations

from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = Path(
    r"C:\Users\bubli\.cursor\projects\c-Users-bubli-Projects-bbe-school-fixed"
    r"\agent-tools\399c54ed-fb5c-4b20-8a23-2f7a8b02d5f5.txt"
)
OUT = ROOT / "scripts" / "_wiso_extract"
THEORY = ROOT / "src" / "data" / "wiso-economics-theory"
OUT.mkdir(parents=True, exist_ok=True)
THEORY.mkdir(parents=True, exist_ok=True)

SUBS = [
    ("1.1", "1.1 Jeder Mensch ist Teil der Wirtschaft"),
    ("1.2", "1.2 Arbeitsteilung und Spezialisierung kennzeichnen unsere Wirtschaft"),
    ("1.3", "1.3 Wirtschaften bedeutet Entscheidungen zu treffen"),
    ("1.4", "1.4 Der Wirtschaftskreislauf"),
    ("1.5", "1.5 Geld als Tauschmittel im Wirtschaftskreislauf"),
    ("2.1", "2.1 Einbettung der Wirtschaft in Gesellschaft und Umwelt"),
    ("2.2", "2.2 Nachhaltigkeit"),
    ("2.3", "2.3 Entkopplung von Wirtschaftswachstum und Umweltschäden"),
    ("2.4", "2.4 Wirtschaften innerhalb der Erdsystemgrenzen"),
    ("2.5", "2.5 Soziales Wohlbefinden als Ziel nachhaltigen Wirtschaftens"),
    ("2.6", "2.6 Gesellschaftliche Voraussetzungen"),
    ("3.1", "3.1 Was ist ein Unternehmen und welche Arten von Unternehmen gibt es"),
    ("3.2", "3.2 Rechtsformen von Unternehmen"),
    ("3.3", "3.3 Wie Unternehmen finanzielle Mittel aufbringen"),
    ("3.4", "3.4 Welche Fragen das Rechnungswesen beantwortet"),
    ("3.5", "3.5 Marketing"),
    ("4.1", "4.1 Digitale Transformation"),
    ("4.2", "4.2 Neue Produkte, Dienstleistungen und Geschäftsmodelle"),
    ("4.3", "4.3 Das Internet als Plattform für Unternehmen"),
    ("4.4", "4.4 Wirtschaftsinformatik als übergreifende Disziplin"),
]

CHAPTER_TITLES = {
    1: "Warum wir wirtschaften und was Wirtschaften bedeutet",
    2: "Wirtschaft als Teil der Gesellschaft und Umwelt",
    3: "Was Wirtschaften für Unternehmen bedeutet",
    4: "Digitalisierung und Vernetzung von Wirtschaft und Gesellschaft",
}


def main() -> None:
    text = SRC.read_text(encoding="utf-8")
    lines = text.splitlines()

    # Find start line of each subsection header
    starts: list[tuple[str, int]] = []
    for i, line in enumerate(lines):
        stripped = line.strip()
        for sid, needle in SUBS:
            if stripped.startswith("#### " + sid) or stripped.startswith("## " + sid):
                starts.append((sid, i))
                break

    if len(starts) != len(SUBS):
        found = [s[0] for s in starts]
        missing = [s[0] for s in SUBS if s[0] not in found]
        raise SystemExit(f"Found {found}; missing {missing}")

    starts.append(("END", len(lines)))

    by_sub: dict[str, str] = {}
    for i, (sid, start) in enumerate(starts[:-1]):
        end = starts[i + 1][1]
        body = "\n".join(lines[start:end]).strip() + "\n"
        by_sub[sid] = body
        out = OUT / f"sub_{sid.replace('.', '_')}.txt"
        out.write_text(body, encoding="utf-8")
        print(f"{sid}: {len(body)} chars -> {out.name}")

    for ch in (1, 2, 3, 4):
        parts = [f"# Kapitel {ch}: {CHAPTER_TITLES[ch]}\n"]
        for sid, _ in SUBS:
            if sid.startswith(f"{ch}."):
                block = by_sub[sid]
                # Promote #### 1.1 to ## 1.1 for TheoryReader TOC
                block = block.replace("#### ", "## ", 1)
                block = block.replace("#### ", "### ")
                parts.append(block.rstrip())
                parts.append("")
        path = THEORY / f"ch{ch}.md"
        path.write_text("\n".join(parts).strip() + "\n", encoding="utf-8")
        print(f"theory ch{ch}: {path} ({path.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
