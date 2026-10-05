import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type Dispatch, type SetStateAction } from "react";
import { Check, ChevronRight } from "lucide-react";
import {
  BRIDGE_PASS_RATIO,
  BRIDGE_TERMS,
  BRIDGE_UNITS,
  bridgeCasesInOrder,
  bridgeUnitFor,
  getBridgeCase,
  nextBridgeCaseId,
} from "@/data/hybrid-bridge-library";
import type { BridgeCase, BridgeSide } from "@/data/hybrid-bridge-cases";
import { HYBRID_ACCENT } from "@/lib/hybrid-course";
import {
  loadHybridProgress,
  recordBridgeScore,
  type BridgeScore,
  type HybridProgress,
} from "@/lib/hybrid-progress";
import { cn } from "@/lib/utils";

type SideKey = "bbe" | "wiso";

const BBE = "#C2643A";
const WISO = "#3730A3";

function emptyAnswers(count: number): Array<boolean | null> {
  return Array.from({ length: count }, () => null);
}

function scoreSide(
  side: BridgeSide,
  answers: Array<boolean | null>,
): { correct: number; total: number; complete: boolean } {
  const total = side.statements.length;
  const complete =
    answers.length >= total && answers.slice(0, total).every((value) => value != null);
  const correct = side.statements.reduce(
    (sum, statement, index) => sum + (answers[index] === statement.answer ? 1 : 0),
    0,
  );
  return { correct, total, complete };
}

function SidePlayer({
  side,
  label,
  accent,
  trueLabel,
  falseLabel,
  answers,
  checked,
  onToggle,
}: {
  side: BridgeSide;
  label: string;
  accent: string;
  trueLabel: string;
  falseLabel: string;
  answers: Array<boolean | null>;
  checked: boolean;
  onToggle: (index: number, value: boolean) => void;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: accent }}>
        {label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-foreground">{side.stem}</p>
      <ul className="mt-4 space-y-3">
        {side.statements.map((statement, index) => {
          const chosen = answers[index];
          const correct = checked && chosen === statement.answer;
          const wrong = checked && chosen != null && chosen !== statement.answer;
          return (
            <li key={index} className="rounded-xl border border-border/80 p-3">
              <p className="text-sm text-foreground">{statement.text}</p>
              <div className="mt-2 flex gap-2">
                {(
                  [
                    [true, trueLabel],
                    [false, falseLabel],
                  ] as const
                ).map(([value, labelText]) => (
                  <button
                    key={labelText}
                    type="button"
                    disabled={checked}
                    onClick={() => onToggle(index, value)}
                    className={cn(
                      "rounded-md px-3 py-1.5 text-xs font-semibold transition-colors",
                      chosen === value
                        ? "text-white"
                        : "border border-border bg-background text-foreground",
                      checked && statement.answer === value && "ring-2 ring-emerald-500",
                      wrong && chosen === value && "bg-destructive text-white",
                      correct && chosen === value && "bg-emerald-600 text-white",
                    )}
                    style={!checked && chosen === value ? { backgroundColor: accent } : undefined}
                  >
                    {labelText}
                  </button>
                ))}
              </div>
              {checked ? (
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {statement.explanation}
                </p>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function BridgeWorkshop({
  caseId,
  onOpenCase,
}: {
  caseId?: string;
  onOpenCase: (id: string | null) => void;
}) {
  const ordered = useMemo(() => bridgeCasesInOrder(), []);
  const active = caseId ? getBridgeCase(caseId) : undefined;
  const [progress, setProgress] = useState<HybridProgress | null>(null);
  const [stage, setStage] = useState<SideKey>("bbe");
  const [bbeAnswers, setBbeAnswers] = useState<Array<boolean | null>>([]);
  const [wisoAnswers, setWisoAnswers] = useState<Array<boolean | null>>([]);
  const [bbeChecked, setBbeChecked] = useState(false);
  const [wisoChecked, setWisoChecked] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    setProgress(loadHybridProgress());
  }, []);

  useEffect(() => {
    if (!active) return;
    setStage("bbe");
    setBbeAnswers(emptyAnswers(active.bbe.statements.length));
    setWisoAnswers(emptyAnswers(active.wiso.statements.length));
    setBbeChecked(false);
    setWisoChecked(false);
    setNotice(null);
  }, [active]);

  const passed = new Set(progress?.bridgePassed ?? []);
  const cleared = ordered.filter((item) => passed.has(item.id)).length;
  const nextOpenId = ordered.find((item) => !passed.has(item.id))?.id ?? ordered[0]?.id ?? null;

  const open = (id: string) => onOpenCase(id);

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
      <aside className="lg:sticky lg:top-24 lg:max-h-[calc(100svh-7rem)] lg:overflow-y-auto">
        <div className="rounded-2xl border border-border bg-card p-4">
          <p
            className="text-xs font-semibold uppercase tracking-[0.16em]"
            style={{ color: HYBRID_ACCENT }}
          >
            Library
          </p>
          <p className="mt-1 font-display text-lg font-semibold">
            {cleared} / {ordered.length} bridged
          </p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            A case counts once, after both languages reach {Math.round(BRIDGE_PASS_RATIO * 100)}%.
          </p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full"
              style={{
                width: `${ordered.length ? (cleared / ordered.length) * 100 : 0}%`,
                backgroundColor: HYBRID_ACCENT,
              }}
            />
          </div>
        </div>
        <div className="mt-3 space-y-3">
          {BRIDGE_UNITS.map((unit) => {
            const cases = unit.caseIds
              .map((id) => getBridgeCase(id))
              .filter((item): item is BridgeCase => !!item);
            const unitDone = cases.filter((item) => passed.has(item.id)).length;
            return (
              <section key={unit.id} className="rounded-2xl border border-border bg-card p-3">
                <div className="flex items-baseline justify-between gap-2 px-1">
                  <h2 className="font-display text-sm font-semibold">{unit.title}</h2>
                  <span className="text-[11px] text-muted-foreground">
                    {unitDone}/{cases.length}
                  </span>
                </div>
                <p className="px-1 pb-2 text-[11px] leading-relaxed text-muted-foreground">
                  {unit.blurb}
                </p>
                <ul className="space-y-1">
                  {cases.map((item) => {
                    const selected = item.id === active?.id;
                    const done = passed.has(item.id);
                    const best = progress?.bridgeBest[item.id];
                    return (
                      <li key={item.id}>
                        <button
                          type="button"
                          onClick={() => open(item.id)}
                          className={cn(
                            "flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-xs",
                            selected ? "text-white" : "hover:bg-secondary",
                          )}
                          style={selected ? { backgroundColor: HYBRID_ACCENT } : undefined}
                        >
                          <span className="w-3 shrink-0">{done ? "✓" : ""}</span>
                          <span className="min-w-0 flex-1">{item.conceptTitle}</span>
                          {best ? (
                            <span
                              className={cn(
                                "shrink-0 tabular-nums",
                                selected ? "text-white/80" : "text-muted-foreground",
                              )}
                            >
                              {best.bbeCorrect + best.wisoCorrect}/{best.total * 2}
                            </span>
                          ) : null}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </div>
      </aside>

      <div>
        {active ? (
          <CasePlayer
            active={active}
            stage={stage}
            setStage={setStage}
            bbeAnswers={bbeAnswers}
            wisoAnswers={wisoAnswers}
            setBbeAnswers={setBbeAnswers}
            setWisoAnswers={setWisoAnswers}
            bbeChecked={bbeChecked}
            wisoChecked={wisoChecked}
            setBbeChecked={setBbeChecked}
            setWisoChecked={setWisoChecked}
            notice={notice}
            setNotice={setNotice}
            cleared={passed.has(active.id)}
            onProgress={setProgress}
            onOpenCase={onOpenCase}
          />
        ) : (
          <LibraryIntro
            cleared={cleared}
            total={ordered.length}
            nextId={nextOpenId}
            onOpen={open}
          />
        )}
      </div>
    </div>
  );
}

function LibraryIntro({
  cleared,
  total,
  nextId,
  onOpen,
}: {
  cleared: number;
  total: number;
  nextId: string | null;
  onOpen: (id: string) => void;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <p
        className="text-xs font-semibold uppercase tracking-[0.16em]"
        style={{ color: HYBRID_ACCENT }}
      >
        How a case works
      </p>
      <h2 className="mt-2 font-display text-2xl font-semibold">One concept, two papers</h2>
      <ol className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
        <li>1. Read the English stem and mark every statement true or false.</li>
        <li>
          2. Check it. Explanations stay on the card. Then do the German stem of the same idea.
        </li>
        <li>
          3. The concept is bridged when each side is at least {Math.round(BRIDGE_PASS_RATIO * 100)}
          % correct.
        </li>
      </ol>
      <p className="mt-4 text-sm text-foreground">
        {cleared} of {total} concepts cleared.
      </p>
      {nextId ? (
        <button
          type="button"
          onClick={() => onOpen(nextId)}
          className="mt-5 inline-flex items-center rounded-md px-4 py-2.5 text-sm font-semibold text-white"
          style={{ backgroundColor: HYBRID_ACCENT }}
        >
          {cleared > 0 ? "Continue the next open case" : "Start the first case"}
          <ChevronRight className="ml-1 h-4 w-4" />
        </button>
      ) : null}
    </div>
  );
}

function CasePlayer({
  active,
  stage,
  setStage,
  bbeAnswers,
  wisoAnswers,
  setBbeAnswers,
  setWisoAnswers,
  bbeChecked,
  wisoChecked,
  setBbeChecked,
  setWisoChecked,
  notice,
  setNotice,
  cleared,
  onProgress,
  onOpenCase,
}: {
  active: BridgeCase;
  stage: SideKey;
  setStage: (side: SideKey) => void;
  bbeAnswers: Array<boolean | null>;
  wisoAnswers: Array<boolean | null>;
  setBbeAnswers: Dispatch<SetStateAction<Array<boolean | null>>>;
  setWisoAnswers: Dispatch<SetStateAction<Array<boolean | null>>>;
  bbeChecked: boolean;
  wisoChecked: boolean;
  setBbeChecked: (value: boolean) => void;
  setWisoChecked: (value: boolean) => void;
  notice: string | null;
  setNotice: (value: string | null) => void;
  cleared: boolean;
  onProgress: (progress: HybridProgress) => void;
  onOpenCase: (id: string | null) => void;
}) {
  const unit = bridgeUnitFor(active.id);
  const terms = BRIDGE_TERMS[active.id] ?? [];
  const bbeScore = scoreSide(active.bbe, bbeAnswers);
  const wisoScore = scoreSide(active.wiso, wisoAnswers);
  const nextId = nextBridgeCaseId(active.id);

  const finish = (wisoNowChecked: boolean) => {
    if (!bbeChecked || !wisoNowChecked) return;
    const score: BridgeScore = {
      bbeCorrect: bbeScore.correct,
      wisoCorrect: wisoScore.correct,
      total: bbeScore.total,
    };
    const bbeOk = bbeScore.total > 0 && bbeScore.correct / bbeScore.total >= BRIDGE_PASS_RATIO;
    const wisoOk = wisoScore.total > 0 && wisoScore.correct / wisoScore.total >= BRIDGE_PASS_RATIO;
    const passed = bbeOk && wisoOk;
    const next = recordBridgeScore(active.id, score, passed);
    onProgress(next);
    setNotice(
      passed
        ? `Bridged. ${score.bbeCorrect}/${score.total} English, ${score.wisoCorrect}/${score.total} German.`
        : `Not yet. ${score.bbeCorrect}/${score.total} English, ${score.wisoCorrect}/${score.total} German. Retry the side under ${Math.round(BRIDGE_PASS_RATIO * 100)}%.`,
    );
  };

  const retry = () => {
    setBbeAnswers(emptyAnswers(active.bbe.statements.length));
    setWisoAnswers(emptyAnswers(active.wiso.statements.length));
    setBbeChecked(false);
    setWisoChecked(false);
    setStage("bbe");
    setNotice(null);
  };

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            {unit?.title}
          </p>
          <h2 className="mt-1 font-display text-2xl font-semibold">{active.conceptTitle}</h2>
        </div>
        {cleared ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-teal-700/10 px-3 py-1 text-xs font-semibold text-teal-800">
            <Check className="h-3.5 w-3.5" /> Bridged
          </span>
        ) : null}
      </div>

      {terms.length > 0 ? (
        <ul className="mb-4 flex flex-wrap gap-2">
          {terms.map((term) => (
            <li
              key={term.en}
              className="rounded-full border border-border bg-card px-3 py-1 text-[11px]"
            >
              <span className="font-semibold">{term.en}</span>
              <span className="text-muted-foreground"> · {term.de}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mb-4 flex gap-2">
        {(
          [
            ["bbe", "1 · BBE English", BBE],
            ["wiso", "2 · WiSo German", WISO],
          ] as const
        ).map(([key, label, color]) => (
          <button
            key={key}
            type="button"
            onClick={() => setStage(key)}
            className={cn(
              "rounded-md px-4 py-2 text-sm font-semibold",
              stage === key ? "text-white" : "border border-border bg-card",
            )}
            style={stage === key ? { backgroundColor: color } : undefined}
          >
            {label}
          </button>
        ))}
      </div>

      {stage === "bbe" ? (
        <SidePlayer
          side={active.bbe}
          label="BBE · English"
          accent={BBE}
          trueLabel="True"
          falseLabel="False"
          answers={bbeAnswers}
          checked={bbeChecked}
          onToggle={(index, value) =>
            setBbeAnswers((prev) => prev.map((item, i) => (i === index ? value : item)))
          }
        />
      ) : (
        <SidePlayer
          side={active.wiso}
          label="WiSo · Deutsch"
          accent={WISO}
          trueLabel="Richtig"
          falseLabel="Falsch"
          answers={wisoAnswers}
          checked={wisoChecked}
          onToggle={(index, value) =>
            setWisoAnswers((prev) => prev.map((item, i) => (i === index ? value : item)))
          }
        />
      )}

      {notice ? <p className="mt-4 text-sm font-medium text-foreground">{notice}</p> : null}

      <div className="mt-5 flex flex-wrap gap-3">
        {stage === "bbe" ? (
          <button
            type="button"
            onClick={() => {
              if (!bbeScore.complete) {
                setNotice("Mark every English statement before checking.");
                return;
              }
              setBbeChecked(true);
              setNotice(`${bbeScore.correct}/${bbeScore.total} on the English side.`);
              setStage("wiso");
            }}
            className="rounded-md px-4 py-2.5 text-sm font-semibold text-white"
            style={{ backgroundColor: BBE }}
          >
            Check English → German
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              if (!bbeChecked) {
                setNotice("Check the English side first.");
                setStage("bbe");
                return;
              }
              if (!wisoScore.complete) {
                setNotice("Mark every German statement before checking.");
                return;
              }
              setWisoChecked(true);
              finish(true);
            }}
            className="rounded-md px-4 py-2.5 text-sm font-semibold text-white"
            style={{ backgroundColor: WISO }}
          >
            Check German and score the bridge
          </button>
        )}
        <button
          type="button"
          onClick={retry}
          className="rounded-md border border-border bg-card px-4 py-2.5 text-sm font-semibold"
        >
          Retry case
        </button>
        {nextId ? (
          <button
            type="button"
            onClick={() => onOpenCase(nextId)}
            className="rounded-md border border-border bg-card px-4 py-2.5 text-sm font-semibold"
          >
            Next concept
          </button>
        ) : (
          <Link
            to="/hybrid/course"
            className="rounded-md border border-border bg-card px-4 py-2.5 text-sm font-semibold"
          >
            Back to course
          </Link>
        )}
      </div>
    </div>
  );
}
