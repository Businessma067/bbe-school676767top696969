"""Clone BBE economics practice page into WISO Wirtschaft practice page."""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
src = ROOT / "src" / "routes" / "products.full-course-economics.tsx"
dst = ROOT / "src" / "routes" / "products.full-course-wiso-economics.tsx"
text = src.read_text(encoding="utf-8")

repls = [
    (
        'import { loadAllEconomicsChapterTasks } from "@/data/economics-chapters";',
        'import { loadAllWisoEconomicsChapterTasks } from "@/data/wiso-economics-chapters";',
    ),
    (
        'export const Route = createFileRoute("/products/full-course-economics")({',
        'export const Route = createFileRoute("/products/full-course-wiso-economics")({',
    ),
    (
        '{ title: "Economics — Full Course — BBE School" },',
        '{ title: "WISO Wirtschaft — Full Course — BBE School" },',
    ),
    (
        'content: "Full Course Economics: chapter-by-chapter practice cases, theory reader and tactical breakdowns for the WU Vienna BBE entrance exam."',
        'content: "Full Course WISO Wirtschaft: chapter-by-chapter practice cases and teacher explanations for Wirtschaft verstehen (WU WISO Aufnahmeprüfung 2026)."',
    ),
    (
        """const CHAPTERS: { num: number; title: string }[] = [
  { num: 2, title: "Basic Economic Concepts" },
  { num: 3, title: "Focus on different types of businesses" },
  { num: 4, title: "Forms of business ownership and sources of finance" },
  { num: 5, title: "Marketing" },
  { num: 6, title: "Accounting – keeping record of business transactions" },
];""",
        """const CHAPTERS: { num: number; title: string }[] = [
  { num: 1, title: "Warum wir wirtschaften und was Wirtschaften bedeutet" },
  { num: 2, title: "Wirtschaft als Teil der Gesellschaft und Umwelt" },
  { num: 3, title: "Was Wirtschaften für Unternehmen bedeutet" },
  { num: 4, title: "Digitalisierung und Vernetzung von Wirtschaft und Gesellschaft" },
];""",
    ),
    (
        'const STORAGE_KEY = "bbe.economics.progress.v1";',
        'const STORAGE_KEY = "wiso.economics.progress.v1";',
    ),
    (
        "const loaded = await loadAllEconomicsChapterTasks();",
        "const loaded = await loadAllWisoEconomicsChapterTasks();",
    ),
    (
        "        subject: \"economics\",\n        chapterLabel: `Chapter ${theoryChapter}`,",
        "        subject: \"economics\",\n        chapterLabel: `Kapitel ${theoryChapter}`,",
    ),
    (
        "        title: ch?.title ? `${ch.title} (theory)` : `Theory · Chapter ${theoryChapter}`,",
        "        title: ch?.title ? `${ch.title} (Theorie)` : `Theorie · Kapitel ${theoryChapter}`,",
    ),
    (
        "        theorySnippet: `Economics theory for chapter ${theoryChapter}${ch?.title ? `: ${ch.title}` : \"\"}.`,",
        "        theorySnippet: `WISO-Theorie zu Kapitel ${theoryChapter}${ch?.title ? `: ${ch.title}` : \"\"}.`,",
    ),
    (
            '            ? "Revision"',
            '            ? "Wiederholung"',
    ),
    (
        "            : `Chapter ${chNum}${chTitle ? ` · ${chTitle}` : \"\"}`",
        "            : `Kapitel ${chNum}${chTitle ? ` · ${chTitle}` : \"\"}`",
    ),
    (
        """            <TheoryReader
              chapter={theoryChapter}
              title={CHAPTERS.find((c) => c.num === theoryChapter)?.title ?? ""}
              onGoToPractice={() => {""",
        """            <TheoryReader
              chapter={theoryChapter}
              title={CHAPTERS.find((c) => c.num === theoryChapter)?.title ?? ""}
              subject="wiso-economics"
              onGoToPractice={() => {""",
    ),
]

for old, new in repls:
    if old not in text:
        raise SystemExit(f"pattern not found:\n{old[:120]}")
    text = text.replace(old, new, 1)

dst.write_text(text, encoding="utf-8")
print(f"wrote {dst}")
