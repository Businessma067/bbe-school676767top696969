from pathlib import Path

replacements = [
    (
        "rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6",
        "rounded-xl border border-border bg-card p-5 sm:p-6",
    ),
    (
        "rounded-2xl border border-border bg-card p-3 shadow-sm",
        "rounded-xl border border-border bg-card p-3",
    ),
    (
        "rounded-2xl border border-border bg-card shadow-sm",
        "rounded-xl border border-border bg-card",
    ),
    (
        "flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm",
        "flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card",
    ),
    (
        "min-h-0 flex-1 overflow-hidden rounded-2xl border border-border bg-[#fdf9f0] shadow-sm",
        "min-h-0 flex-1 overflow-hidden rounded-xl border border-border bg-card",
    ),
    (
        "min-h-0 flex-1 overflow-y-auto rounded-2xl border border-border bg-card p-4 shadow-sm",
        "min-h-0 flex-1 overflow-y-auto rounded-xl border border-border bg-card p-4",
    ),
    (
        "rounded-2xl border border-primary/30 bg-primary/5 px-4 py-2.5",
        "rounded-lg border border-primary/25 bg-primary/5 px-4 py-2.5",
    ),
    (
        "text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
        "text-xs font-semibold text-muted-foreground",
    ),
    (
        "text-[10px] font-bold uppercase tracking-widest text-taupe",
        "text-xs font-semibold text-muted-foreground",
    ),
    (
        "text-[10px] font-bold uppercase tracking-widest text-primary",
        "text-xs font-semibold text-primary",
    ),
    (
        "text-[10px] font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-300",
        "text-xs font-semibold text-emerald-700 dark:text-emerald-300",
    ),
    (
        "text-[10px] font-bold uppercase tracking-widest text-destructive",
        "text-xs font-semibold text-destructive",
    ),
    (
        "text-[10px] font-medium uppercase tracking-[0.2em] text-taupe",
        "text-xs font-medium text-muted-foreground",
    ),
    (
        "rounded-md bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary",
        "rounded-md bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary",
    ),
    (
        "rounded-md bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-300",
        "rounded-md bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300",
    ),
    (
        "rounded-md bg-destructive/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-destructive",
        "rounded-md bg-destructive/10 px-2 py-0.5 text-xs font-semibold text-destructive",
    ),
    (
        "rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-taupe",
        "rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground",
    ),
    (
        "rounded-md bg-secondary px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
        "rounded-md bg-secondary px-2 py-0.5 text-xs font-semibold text-muted-foreground",
    ),
]

files = [
    Path("src/components/MathTasksPage.tsx"),
    Path("src/components/EnglishTasksPage.tsx"),
    Path("src/components/StudyProgressSection.tsx"),
    Path("src/routes/demo-practice.economics.tsx"),
]

for path in files:
    if not path.exists():
        print("MISSING", path)
        continue
    text = path.read_text(encoding="utf-8")
    original = text
    for a, b in replacements:
        text = text.replace(a, b)
    text = text.replace("rounded-2xl border border-border", "rounded-xl border border-border")
    text = text.replace("rounded-2xl border border-dashed", "rounded-xl border border-dashed")
    text = text.replace(" shadow-sm", "")
    text = text.replace("uppercase tracking-widest", "")
    text = text.replace("tracking-widest", "")
    if text != original:
        path.write_text(text, encoding="utf-8")
        print("updated", path)
    else:
        print("unchanged", path)
