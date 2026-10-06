import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type Dispatch, type SetStateAction } from "react";
import { Check, ChevronRight } from "lucide-react";
import { StatementMarkTable } from "@/components/StatementMarkTable";
import {
  practiceExplanationToggleClass,
  practiceSubmitButtonClass,
  practiceTryAgainButtonClass,
} from "@/lib/practice-button-styles";
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
  const correct = side.statements.reduce(
    (sum, statement, index) => sum + ((answers[index] === true) === statement.answer ? 1 : 0),
    0,
  );
  return { correct, total, complete: true };
}

function SidePlayer({
  side,
  label,
  statementHeading,
  trueHeading,
  answers,
  checked,
  explanationsOpen,
  onToggle,
}: {
  side: BridgeSide;
  label: string;
  statementHeading: string;
  trueHeading: string;
  answers: Array<boolean | null>;
  checked: boolean;
  explanationsOpen: boolean;
  onToggle: (index: number) => void;
}) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
          {label}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-foreground">{side.stem}</p>
      <StatementMarkTable
        statements={side.statements.map((statement) => statement.text)}
        marked={side.statements.map((_, index) => answers[index] === true)}
        answerKey={side.statements.map((statement) => statement.answer)}
        checked={checked}
        onToggle={onToggle}
        statementHeading={statementHeading}
        trueHeading={trueHeading}
      />
      {checked && explanationsOpen ? (
        <div className="mt-4 space-y-3 rounded-xl border border-border bg-secondary/30 p-4 text-sm sm:p-5">
          {side.statements.map((statement, index) => (
            <p key={index} className="leading-relaxed text-foreground">
              <span className="font-semibold">{String.fromCharCode(65 + index)}.</span>{" "}
              {statement.explanation}
            </p>
          ))}
        </div>
      ) : null}
    </article>
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
  const [bbeExplain, setBbeExplain] = useState(false);
  const [wisoExplain, setWisoExplain] = useState(false);

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
    setBbeExplain(false);
    setWisoExplain(false);
    setNotice(null);
  }, [active]);

  const passed = new Set(progress?.bridgePassed ?? []);
  const cleared = ordered.filter((item) => passed.has(item.id)).length;
  const nextOpenId = ordered.find((item) => !passed.has(item.id))?.id ?? ordered[0]?.id ?? null;

  const open = (id: string) => onOpenCase(id);

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
      <aside className="lg:sticky lg:top-24 lg:max-h-[calc(100svh-7rem)] lg:overflow-y-auto">
        <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
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
                            selected ? "bg-primary/10 font-semibold" : "hover:bg-secondary",
                          )}
                        >
                          <span className="w-3 shrink-0">{done ? "✓" : ""}</span>
                          <span className="min-w-0 flex-1">{item.conceptTitle}</span>
                          {best ? (
                            <span className="shrink-0 tabular-nums text-muted-foreground">
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
            bbeExplain={bbeExplain}
            wisoExplain={wisoExplain}
            setBbeExplain={setBbeExplain}
            setWisoExplain={setWisoExplain}
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
    <div className="rounded-2xl border border-dashed border-border bg-card p-8 text-center sm:p-10">
      <h2 className="font-display text-2xl font-semibold">One concept, two papers</h2>
      <ol className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
        <li>1. Read the English stem and mark each true statement.</li>
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
          className={`mt-5 ${practiceSubmitButtonClass}`}
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
  bbeExplain,
  wisoExplain,
  setBbeExplain,
  setWisoExplain,
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
  bbeExplain: boolean;
  wisoExplain: boolean;
  setBbeExplain: (value: boolean) => void;
  setWisoExplain: (value: boolean) => void;
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
    setBbeExplain(false);
    setWisoExplain(false);
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

      <div className="mb-4 flex flex-wrap gap-2">
        {(
          [
            ["bbe", "BBE", BBE],
            ["wiso", "WiSo", WISO],
          ] as const
        ).map(([key, label, color]) => (
          <button
            key={key}
            type="button"
            onClick={() => setStage(key)}
            className={cn(
              "rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-all",
              stage === key
                ? "text-white shadow-md"
                : "border-border bg-card text-muted-foreground hover:border-foreground/30 hover:text-foreground",
            )}
            style={stage === key ? { backgroundColor: color, borderColor: color } : undefined}
          >
            {label}
          </button>
        ))}
      </div>

      {stage === "bbe" ? (
        <SidePlayer
          side={active.bbe}
          label="BBE · English"
          statementHeading="Statement"
          trueHeading="True"
          answers={bbeAnswers}
          checked={bbeChecked}
          explanationsOpen={bbeExplain}
          onToggle={(index) =>
            setBbeAnswers((prev) => prev.map((item, i) => (i === index ? item !== true : item)))
          }
        />
      ) : (
        <SidePlayer
          side={active.wiso}
          label="WiSo · Deutsch"
          statementHeading="Aussage"
          trueHeading="Richtig"
          answers={wisoAnswers}
          checked={wisoChecked}
          explanationsOpen={wisoExplain}
          onToggle={(index) =>
            setWisoAnswers((prev) => prev.map((item, i) => (i === index ? item !== true : item)))
          }
        />
      )}

      {notice ? <p className="mt-4 text-sm font-medium text-foreground">{notice}</p> : null}

      <div className="mt-5 flex flex-wrap gap-3">
        {stage === "bbe" && !bbeChecked ? (
          <button
            type="button"
            onClick={() => {
              setBbeChecked(true);
              setBbeExplain(true);
              setNotice(`${bbeScore.correct}/${bbeScore.total} correct`);
              setStage("wiso");
            }}
            className={practiceSubmitButtonClass}
          >
            Check Answers / Submit
          </button>
        ) : null}
        {stage === "wiso" && !wisoChecked ? (
          <button
            type="button"
            onClick={() => {
              if (!bbeChecked) {
                setNotice("Check the English side first.");
                setStage("bbe");
                return;
              }
              setWisoChecked(true);
              setWisoExplain(true);
              finish(true);
            }}
            className={practiceSubmitButtonClass}
          >
            Check Answers / Submit
          </button>
        ) : null}
        {(stage === "bbe" && bbeChecked) || (stage === "wiso" && wisoChecked) ? (
          <>
            <button type="button" onClick={retry} className={practiceTryAgainButtonClass}>
              Try again
            </button>
            <button
              type="button"
              onClick={() =>
                stage === "bbe" ? setBbeExplain(!bbeExplain) : setWisoExplain(!wisoExplain)
              }
              className={practiceExplanationToggleClass(stage === "bbe" ? bbeExplain : wisoExplain)}
            >
              {(stage === "bbe" ? bbeExplain : wisoExplain) ? "Hide Explanation" : "Explanation"}
            </button>
          </>
        ) : null}
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
