import { useMemo, useState } from "react";
import { BookOpen, Check, ChevronDown, Clock, Loader2 } from "lucide-react";
import { TopicWeightSelector } from "@/components/custom-mock/TopicWeightSelector";
import {
  CUSTOM_MOCK_MAX_QUESTIONS,
  CUSTOM_MOCK_MINUTES_PER_QUESTION,
  durationMinutesForQuestionCount,
} from "@/config/custom-mock-builder";
import { getCustomMockChapters } from "@/data/custom-mock-catalog";
import { balancedPoint, type TopicWeightTopic, type Vec2 } from "@/lib/topic-weight-engine";
import { cn } from "@/lib/utils";
import { DemoCursor } from "./DemoCursor";
import { DemoShell, type DemoProps } from "./DemoShell";
import { useDemoPlayer } from "./useDemoPlayer";

const ACCENT = "#E85D3A";

/**
 * News demo of Custom Mock Builder — same chrome as MockBuilderSimulator /
 * live /products/custom-mock-builder (real chapters + TopicWeightSelector).
 * Does not wrap MockBuilderSimulator.
 */
export function DemoBuilderMix({ caption }: DemoProps) {
  const chapters = useMemo(() => getCustomMockChapters("economics").slice(0, 4), []);

  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [selected, setSelected] = useState<string[]>([]);
  const [questionCount, setQuestionCount] = useState(10);
  const [countDraft, setCountDraft] = useState("10");
  const [weightPoint, setWeightPoint] = useState<Vec2>(balancedPoint());
  const [building, setBuilding] = useState(false);
  const [dialog, setDialog] = useState(false);

  const weightTopics: TopicWeightTopic[] = useMemo(
    () =>
      selected.map((id) => ({
        id,
        label: id,
        shortLabel: id,
      })),
    [selected],
  );

  const durationMinutes = durationMinutesForQuestionCount(questionCount);

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(
    async (api) => {
      setFade(true);
      await api.wait(260);
      setExpanded({});
      setSelected([]);
      setQuestionCount(10);
      setCountDraft("10");
      setWeightPoint(balancedPoint());
      setBuilding(false);
      setDialog(false);
      if (api.scroll()) api.scroll()!.scrollTop = 0;
      setFade(false);
      await api.wait(180);

      const chapter = chapters[1] ?? chapters[0];
      if (!chapter) return;

      await api.moveTo(`[data-d="ch-${chapter.num}"]`);
      await api.click();
      setExpanded({ [chapter.num]: true });
      await api.wait(80);

      const picks = chapter.subtopics.slice(0, 3);
      for (const s of picks) {
        if (api.cancelled()) return;
        await api.moveTo(`[data-d="sub-${s.id}"]`);
        await api.click();
        setSelected((prev) => [...prev, s.id]);
        await api.wait(70);
      }
      await api.wait(80);

      await api.moveTo('[data-d="count"]');
      await api.click();
      for (const chunk of ["", "1", "12"]) {
        if (api.cancelled()) return;
        setCountDraft(chunk);
        await api.wait(70);
      }
      setQuestionCount(12);
      await api.wait(100);

      const path: Vec2[] = [
        { x: 0.12, y: -0.32 },
        { x: 0.42, y: -0.1 },
        { x: 0.3, y: 0.28 },
        { x: -0.18, y: 0.2 },
        { x: -0.05, y: -0.08 },
      ];
      await api.moveTo('[data-d="weight"] [data-weight-handle]');
      await api.click();
      let from: Vec2 = balancedPoint();
      for (const p of path) {
        if (api.cancelled()) return;
        const dist = Math.hypot(p.x - from.x, p.y - from.y);
        const start = from;
        await api.tween(260 + dist * 240, (eased) => {
          setWeightPoint({
            x: start.x + (p.x - start.x) * eased,
            y: start.y + (p.y - start.y) * eased,
          });
          api.snapTo('[data-d="weight"] [data-weight-handle]');
        });
        from = p;
        await api.wait(70);
      }
      await api.wait(100);

      await api.moveTo('[data-d="build"]');
      await api.click();
      setBuilding(true);
      await api.wait(420);
      setBuilding(false);
      setDialog(true);
      await api.wait(160);

      await api.moveTo('[data-d="start"]');
      await api.click();
      setDialog(false);
      await api.wait(360);
    },
    [chapters],
  );

  return (
    <DemoShell
      url="/products/custom-mock-builder"
      caption={caption}
      stageClassName="bg-paper p-3 sm:p-4"
    >
      <div ref={stageRef} className="relative">
        <div
          ref={scrollRef}
          className={cn(
            "news-uniq-scroll h-[520px] overflow-y-auto overscroll-contain rounded-2xl border border-border bg-card p-5 shadow-sm transition-opacity duration-500 sm:h-[560px] sm:p-6 lg:h-[620px]",
            fade ? "opacity-0" : "opacity-100",
          )}
        >
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span
              className="rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white"
              style={{ backgroundColor: ACCENT }}
            >
              Custom Mock Builder
            </span>
            <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
              Economics
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start">
            <div className="min-w-0">
              <h3 className="font-display text-base font-semibold">Select topics & subtopics</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Expand a chapter and tick sections. Topics appear as vertices on the right.
              </p>

              <ul className="mt-4 space-y-2">
                {chapters.map((ch) => {
                  const open = expanded[ch.num] === true;
                  const count = ch.subtopics.filter((s) => selected.includes(s.id)).length;
                  return (
                    <li key={ch.num} className="overflow-hidden rounded-xl border border-border">
                      <div
                        data-d={`ch-${ch.num}`}
                        className="flex items-center gap-2 bg-secondary/30 px-3 py-2.5 text-left"
                      >
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 shrink-0 text-muted-foreground transition-transform",
                            open ? "rotate-0" : "-rotate-90",
                          )}
                        />
                        <span className="font-display text-sm font-semibold">{ch.heading}</span>
                        <span className="truncate text-xs text-muted-foreground">{ch.title}</span>
                        {count > 0 ? (
                          <span
                            className="ml-auto shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold"
                            style={{ backgroundColor: `${ACCENT}22`, color: ACCENT }}
                          >
                            {count}/{ch.subtopics.length}
                          </span>
                        ) : null}
                      </div>
                      {open ? (
                        <ul className="divide-y divide-border/60 px-2 py-1">
                          {ch.subtopics.map((s) => {
                            const checked = selected.includes(s.id);
                            return (
                              <li key={s.id}>
                                <div
                                  className={cn(
                                    "flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors",
                                    checked ? "bg-secondary/60" : "",
                                  )}
                                >
                                  <span
                                    data-d={`sub-${s.id}`}
                                    className={cn(
                                      "mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded border-2 transition-all",
                                      checked ? "text-white" : "border-border bg-background",
                                    )}
                                    style={
                                      checked
                                        ? { backgroundColor: ACCENT, borderColor: ACCENT }
                                        : undefined
                                    }
                                  >
                                    {checked ? <Check className="h-3 w-3" strokeWidth={3} /> : null}
                                  </span>
                                  <span>
                                    <span className="text-sm font-semibold tabular-nums">
                                      {s.id}
                                    </span>
                                    <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                                      {s.title}
                                    </span>
                                  </span>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      ) : null}
                    </li>
                  );
                })}
              </ul>

              <h3 className="mt-6 font-display text-sm font-semibold">Number of Questions</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                1–{CUSTOM_MOCK_MAX_QUESTIONS} for the whole mock ·{" "}
                {CUSTOM_MOCK_MINUTES_PER_QUESTION} min each timed
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium">Questions</span>
                <span
                  data-d="count"
                  className="w-24 rounded-md border border-border bg-card px-3 py-2 text-sm font-semibold tabular-nums"
                  style={{ borderColor: countDraft !== "10" ? ACCENT : undefined }}
                >
                  {countDraft || "|"}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  {durationMinutes} min timed
                </span>
              </div>
            </div>

            <div data-d="weight" className="min-w-0">
              <TopicWeightSelector
                topics={weightTopics}
                questionCount={questionCount}
                point={weightPoint}
                onPointChange={setWeightPoint}
                title="Topic Weight Selector"
                accent={ACCENT}
                subjectLabel="Economics"
              />
            </div>
          </div>

          <div
            data-d="build"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-semibold text-white shadow-sm"
            style={{ backgroundColor: ACCENT, boxShadow: `0 4px 14px -4px ${ACCENT}80` }}
          >
            {building ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Building mock…
              </>
            ) : (
              <>
                <BookOpen className="h-4 w-4" />
                Create Economics Mock from Full Course
              </>
            )}
          </div>
        </div>

        <div
          className={cn(
            "pointer-events-none absolute inset-0 z-10 grid place-items-center rounded-2xl bg-black/70 p-4 transition-opacity duration-500",
            dialog ? "opacity-100" : "opacity-0",
          )}
        >
          <div
            className={cn(
              "w-full max-w-sm rounded-2xl border border-border bg-card p-5 shadow-2xl transition-all duration-500",
              dialog ? "translate-y-0 scale-100" : "translate-y-3 scale-95",
            )}
          >
            <p className="font-display text-base font-semibold">
              Economics Mock · Chapter {chapters[1]?.num ?? 2}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {questionCount} questions · {durationMinutes} minutes timed
            </p>
            <div className="mt-4 grid gap-2">
              <span
                data-d="start"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-4 py-3 text-sm font-semibold text-background"
              >
                <Clock className="h-4 w-4" />
                Timed ({durationMinutes} min)
              </span>
              <span className="inline-flex items-center justify-center rounded-md border border-border bg-card px-4 py-3 text-sm font-semibold">
                Untimed practice
              </span>
            </div>
          </div>
        </div>

        <DemoCursor cursorRef={cursorRef} clicking={clicking} />
      </div>
    </DemoShell>
  );
}
