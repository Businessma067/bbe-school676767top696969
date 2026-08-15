"""Patch EnglishTasksPage for Math-style full Explanation panel."""
from pathlib import Path

path = Path("src/components/EnglishTasksPage.tsx")
text = path.read_text(encoding="utf-8")

# 1) Inject shared CaseCard explanation props helper strings into both CaseCard usages
OLD_CARD_PROPS = """                activeExplanationIndex={
                  explanation?.caseId === activeCase.id ? explanation.statementIndex : null
                }
                onRequestExplanation={(i) => requestExplanation(activeCase, i)}
                onGraded={(ok, correctCount) => {"""

NEW_CARD_PROPS = """                activeExplanationIndex={
                  explanation?.caseId === activeCase.id ? explanation.statementIndex : null
                }
                onRequestExplanation={(i) => requestExplanation(activeCase, i)}
                explanationsOpen={showExplanations}
                onToggleExplanations={() => setShowExplanations((v) => !v)}
                onGraded={(ok, correctCount) => {"""

if text.count(OLD_CARD_PROPS) < 1:
    raise SystemExit("card props pattern not found")
text = text.replace(OLD_CARD_PROPS, NEW_CARD_PROPS)

# texts CaseCard uses slightly different indentation (18 spaces vs 16)
OLD_TEXTS = """                  activeExplanationIndex={
                    explanation?.caseId === activeCase.id ? explanation.statementIndex : null
                  }
                  onRequestExplanation={(i) => requestExplanation(activeCase, i)}
                  onGraded={(ok, correctCount) => {"""

NEW_TEXTS = """                  activeExplanationIndex={
                    explanation?.caseId === activeCase.id ? explanation.statementIndex : null
                  }
                  onRequestExplanation={(i) => requestExplanation(activeCase, i)}
                  explanationsOpen={showExplanations}
                  onToggleExplanations={() => setShowExplanations((v) => !v)}
                  onGraded={(ok, correctCount) => {"""

if OLD_TEXTS in text:
    text = text.replace(OLD_TEXTS, NEW_TEXTS)

# 2) Replace PracticeRightSlot body to prefer AllExplanationsPanel
start = text.find("          <PracticeRightSlot")
end = text.find("          </PracticeRightSlot>")
if start < 0 or end < 0:
    raise SystemExit("PracticeRightSlot not found")
end = text.find("\n", end) + 1

new_slot = r'''          <PracticeRightSlot
            className={
              isTextsCase
                ? "lg:sticky lg:top-20 lg:block lg:h-[calc(100vh-6rem)] lg:w-[min(42rem,46vw)] lg:shrink-0 xl:w-[min(44rem,42vw)]"
                : undefined
            }
          >
            {showExplanations && activeCase && !isLocked(tier, activeIdx) ? (
              <AllExplanationsPanel
                task={activeCase}
                index={activeIdx}
                onClose={() => setShowExplanations(false)}
              />
            ) : isTextsCase && activeCase && !isLocked(tier, activeIdx) ? (
              <div className="flex h-full flex-col gap-4 overflow-y-auto overscroll-contain pr-1">
                <CaseCard
                  key={activeCase.id}
                  data={activeCase}
                  index={activeIdx}
                  passage={activePassage}
                  inRevision={progress.revision.includes(activeCase.id)}
                  alreadyPassed={progress.passed.includes(activeCase.id)}
                  isTexts
                  activeExplanationIndex={
                    explanation?.caseId === activeCase.id ? explanation.statementIndex : null
                  }
                  onRequestExplanation={(i) => requestExplanation(activeCase, i)}
                  explanationsOpen={showExplanations}
                  onToggleExplanations={() => setShowExplanations((v) => !v)}
                  onGraded={(ok, correctCount) => {
                    recordResult(activeCase.id, ok);
                    const chLabel =
                      activeChapter && activeChapter !== "revision"
                        ? chapters.find((c) => c.key === activeChapter)?.title ?? activeChapter
                        : "Revision";
                    void recordTaskAttempt({
                      subject: "english",
                      chapter: chLabel,
                      taskKey: `${tier}:${activeCase.case_id || activeCase.id}`,
                      taskTitle: activeCase.title,
                      correctCount,
                      statementCount:
                        activeCase.answer_key.length || activeCase.statements.length,
                    });
                  }}
                  onResetProgress={() => resetCaseIds([activeCase.id])}
                />
                <div className="flex items-center justify-between pb-2">
                  <button
                    type="button"
                    onClick={() => setActiveIdx((i) => Math.max(0, i - 1))}
                    disabled={activeIdx === 0}
                    className="inline-flex items-center gap-1 rounded-md border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground transition disabled:opacity-40"
                  >
                    <ChevronLeft className="h-4 w-4" /> Prev
                  </button>
                  <span className="text-xs text-muted-foreground">
                    {activeIdx + 1} / {activeList.length}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveIdx((i) => Math.min(activeList.length - 1, i + 1))}
                    disabled={
                      activeIdx >= activeList.length - 1 || isLocked(tier, activeIdx + 1)
                    }
                    className="inline-flex items-center gap-1 rounded-md border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground transition disabled:opacity-40"
                  >
                    {isLocked(tier, activeIdx + 1) ? (
                      <>
                        <Lock className="h-3.5 w-3.5" /> Locked
                      </>
                    ) : (
                      <>
                        Next <ChevronRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-border bg-card p-6 text-center text-xs text-muted-foreground">
                Submit answers, then tap <span className="mx-1 font-semibold text-foreground">Explanation</span>
                for a full walkthrough of every statement.
              </div>
            )}
          </PracticeRightSlot>
'''

text = text[:start] + new_slot + text[end:]

# 3) Patch CaseCard signature + footer
# Replace per-statement expl UI with Math-style single Explanation button

old_sig = '''function CaseCard({
  data,
  index,
  passage,
  onGraded,
  inRevision,
  alreadyPassed,
  onResetProgress,
  isTexts,
  activeExplanationIndex,
  onRequestExplanation,
}: {
  data: EnglishTask;
  index: number;
  passage: string;
  onGraded: (allCorrect: boolean, correctCount: number) => void;
  inRevision: boolean;
  alreadyPassed: boolean;
  onResetProgress: () => void;
  isTexts: boolean;
  activeExplanationIndex: number | null;
  onRequestExplanation: (i: number) => void;
}) {'''

new_sig = '''function CaseCard({
  data,
  index,
  passage,
  onGraded,
  inRevision,
  alreadyPassed,
  onResetProgress,
  isTexts,
  activeExplanationIndex,
  onRequestExplanation,
  explanationsOpen,
  onToggleExplanations,
}: {
  data: EnglishTask;
  index: number;
  passage: string;
  onGraded: (allCorrect: boolean, correctCount: number) => void;
  inRevision: boolean;
  alreadyPassed: boolean;
  onResetProgress: () => void;
  isTexts: boolean;
  activeExplanationIndex: number | null;
  onRequestExplanation: (i: number) => void;
  explanationsOpen: boolean;
  onToggleExplanations: () => void;
}) {'''

if old_sig not in text:
    raise SystemExit("CaseCard signature not found")
text = text.replace(old_sig, new_sig)

# Remove openExpl state usage complexity - keep for texts highlight only
# Replace the checked block under each statement to only show highlight button for texts

import re

pattern = r'''              \{checked && \(
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick=\{\(\) => setOpenExpl\(\(s\) => \(\{ \.\.\.s, \[i\]: !s\[i\] \}\)\)\}
                    className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-2\.5 py-1 text-\[11px\] font-semibold text-foreground hover:bg-secondary"
                  >
                    Explanation
                    <ChevronDown
                      className=\{cn\(
                        "h-3\.5 w-3\.5 transition-transform",
                        openExpl\[i\] && "rotate-180",
                      \)\}
                    />
                  </button>
                  <button
                    type="button"
                    onClick=\{\(\) => onRequestExplanation\(i\)\}
                    className=\{cn\(
                      "inline-flex items-center gap-1 rounded-md border px-2\.5 py-1 text-\[11px\] font-semibold transition-colors",
                      activeExplanationIndex === i
                        \? "border-primary bg-primary text-primary-foreground"
                        : "border-primary/60 bg-primary/10 text-primary hover:bg-primary/20",
                    \)\}
                  >
                    <Sparkles className="h-3 w-3" />
                    \{isTexts
                      \? activeExplanationIndex === i
                        \? "Highlighted in passage →"
                        : "Show AI text explanation"
                      : activeExplanationIndex === i
                        \? "Open in coach →"
                        : "Show AI breakdown"\}
                  </button>
                  \{openExpl\[i\] && \(
                    <p
                      className=\{cn\(
                        "mt-1 w-full rounded-md p-3 text-xs leading-relaxed whitespace-pre-line",
                        isCorrect
                          \? "bg-emerald-500/10 text-emerald-900 dark:text-emerald-200"
                          : "bg-destructive/10 text-destructive",
                      \)\}
                    >
                      \{data\.tactical_explanations\[i\]\}
                    </p>
                  \)\}
                </div>
              \)\}'''

# Simpler: find by unique substring
marker = '              {checked && (\n                <div className="mt-3 flex flex-wrap items-center gap-2">'
idx = text.find(marker)
if idx < 0:
    raise SystemExit("per-statement expl block not found")
# find closing of this block - next "            </li>" after idx
close = text.find("            </li>", idx)
# walk back to find the checked block end before </li>
block_end = text.rfind("              )}", idx, close)
if block_end < 0:
    raise SystemExit("block end not found")
block_end = text.find("\n", block_end) + 1

new_block = '''              {checked && isTexts && (
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onRequestExplanation(i)}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-[11px] font-semibold transition-colors",
                      activeExplanationIndex === i
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-primary/60 bg-primary/10 text-primary hover:bg-primary/20",
                    )}
                  >
                    <Sparkles className="h-3 w-3" />
                    {activeExplanationIndex === i
                      ? "Highlighted in passage \\u2192"
                      : "Show in passage"}
                  </button>
                </div>
              )}
'''
# fix unicode in new_block
new_block = new_block.replace("\\u2192", "\u2192")

text = text[:idx] + new_block + text[block_end:]

# Replace footer buttons
old_footer = '''      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        {!checked ? (
          <button
            type="button"
            onClick={handleSubmit}
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
          >
            Check Answers / Submit
          </button>
        ) : (
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
          >
            <RotateCcw className="h-4 w-4" /> Try again
          </button>
        )}

        {checked && (
          <div
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-bold",
              correctCount === n
                ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
                : "bg-destructive/15 text-destructive",
            )}
          >
            {correctCount === n
              ? `${n}/${n} — case counted ✓`
              : `${correctCount}/${n} — sent to Revision`}
          </div>
        )}
      </div>'''

new_footer = '''      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {!checked ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
            >
              Check Answers / Submit
            </button>
          ) : (
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
            >
              <RotateCcw className="h-4 w-4" /> Try again
            </button>
          )}
          {checked && (
            <button
              type="button"
              onClick={onToggleExplanations}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-md border px-4 py-2.5 text-sm font-semibold transition-all",
                explanationsOpen
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : "border-border bg-background text-foreground hover:bg-secondary",
              )}
            >
              <Sparkles className="h-4 w-4" />
              {explanationsOpen ? "Hide Explanation" : "Explanation"}
            </button>
          )}
        </div>
        {checked && (
          <span className="text-sm font-semibold text-muted-foreground">
            {correctCount}/{n} correct
          </span>
        )}
      </div>'''

if old_footer not in text:
    # try with special dash variants
    raise SystemExit("footer not found")
text = text.replace(old_footer, new_footer)

# 4) Add AllExplanationsPanel before ReadingPanel
panel = r'''
function AllExplanationsPanel({
  task,
  index,
  onClose,
}: {
  task: EnglishTask;
  index: number;
  onClose: () => void;
}) {
  const letters = "ABCDE";
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="flex items-start justify-between gap-2 border-b border-border px-4 py-3">
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-widest text-taupe">
            Full solution · Task {index + 1}
          </p>
          <h3 className="mt-0.5 truncate font-display text-sm font-bold">{task.title}</h3>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="shrink-0 rounded-md border border-border bg-background px-2 py-1 text-[10px] font-semibold text-muted-foreground hover:bg-secondary hover:text-foreground"
        >
          Close
        </button>
      </div>
      <div className="min-h-0 flex-1 space-y-5 overflow-y-auto bg-white px-6 py-6 sm:px-8 sm:py-7">
        {task.solution_overview?.trim() ? (
          <div>
            <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Overview
            </p>
            <p className="whitespace-pre-line text-[13px] leading-relaxed text-foreground">
              {task.solution_overview.trim()}
            </p>
          </div>
        ) : null}
        {task.statements.map((stmt, i) => {
          const ok = !!task.answer_key[i];
          const expl = (task.tactical_explanations[i] ?? "").trim();
          return (
            <div key={i} className="border-t border-border/70 pt-4 first:border-t-0 first:pt-0">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  {letters[i] ?? i + 1})
                </span>
                <span
                  className={cn(
                    "rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest",
                    ok
                      ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
                      : "bg-destructive/15 text-destructive",
                  )}
                >
                  {ok ? "TRUE" : "FALSE"}
                </span>
              </div>
              <p className="mb-2 text-[13px] font-medium leading-relaxed text-foreground">{stmt}</p>
              <p className="whitespace-pre-line text-[13px] leading-relaxed text-muted-foreground">
                {expl}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

'''

if "function AllExplanationsPanel" not in text:
    text = text.replace("function ReadingPanel({", panel + "function ReadingPanel({")

# Remove unused openExpl if still declared - leave it, might cause lint; clean it
text = text.replace(
    "  const [openExpl, setOpenExpl] = useState<Record<number, boolean>>({});\n",
    "",
)
text = text.replace("    setOpenExpl({});\n", "")

path.write_text(text, encoding="utf-8")
print("patched ok", len(text.splitlines()))
