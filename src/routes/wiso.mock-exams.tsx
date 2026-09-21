import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SiteHeader } from "@/components/SiteHeader";
import { LocalizedLink } from "@/components/LocalizedLink";
import { ExamStartAnswerMode } from "@/components/mock-exam/ExamStartAnswerMode";
import { MockScoreTrend } from "@/components/mock-exam/MockScoreTrend";
import {
  WISO_MOCK_EXAMS,
  getWisoExamsForTier,
  isCustomExamId,
  isWisoCuratedMockId,
  type MockExamSummary,
  type ProductTier,
} from "@/lib/mock-exams";
import { WISO_MOCK_EXAM_1_SECTION_COUNTS } from "@/lib/wiso-mock-exam-1-content";
import { clearSession, loadSession, sessionUsesAnswerSheet } from "@/lib/mock-exam-session";
import { storeExamTrack } from "@/lib/exam-track";
import { fetchMockAttempts, type MockAttempt } from "@/lib/user-progress";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { socialImageMetaForPath } from "@/lib/seo/social-image";
import { Clock, FileText, PlayCircle, Timer, Trophy } from "lucide-react";

const PATH = "/wiso/mock-exams" as const;
const INDIGO = "#3730A3";

export const Route = createFileRoute("/wiso/mock-exams")({
  head: () => ({
    links: [...hreflangLinks(PATH), { rel: "canonical", href: `https://bbe-school.com${PATH}` }],
    meta: [
      { title: "WiSo Mock Exams | BBE School" },
      {
        name: "description",
        content:
          "Full-length WU WiSo mock exams: Wirtschaft verstehen, mathematics, and German reading on dedicated /wiso URLs.",
      },
      { property: "og:title", content: "WiSo Mock Exams | BBE School" },
      {
        property: "og:description",
        content:
          "Full-length WU WiSo mock exams with Teilpunktesystem scoring and German Sprachverständnis.",
      },
      ...socialImageMetaForPath(PATH),
    ],
  }),
  component: WisoMockExamsPage,
});

export function WisoMockExamsPage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<MockExamSummary | null>(null);
  const [withAnswerSheet, setWithAnswerSheet] = useState(true);
  const [tier, setTier] = useState<ProductTier | "none" | null>(null);
  const [attempts, setAttempts] = useState<MockAttempt[] | null>(null);
  const [inProgress, setInProgress] = useState<
    Record<string, { timed: boolean; answerSheet: boolean }>
  >({});

  useEffect(() => {
    storeExamTrack("wiso");
    let cancelled = false;
    (async () => {
      const [{ fetchAccessState, accessOwnsWisoFull }, history] = await Promise.all([
        import("@/lib/entitlements"),
        fetchMockAttempts(),
      ]);
      const state = await fetchAccessState();
      if (cancelled) return;
      setTier(accessOwnsWisoFull(state) ? "full" : "none");
      setAttempts(history);

      const progress: Record<string, { timed: boolean; answerSheet: boolean }> = {};
      for (const exam of WISO_MOCK_EXAMS) {
        const s = loadSession(exam.id);
        if (s) progress[exam.id] = { timed: s.timed, answerSheet: sessionUsesAnswerSheet(s) };
      }
      setInProgress(progress);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const exams = tier === "full" ? getWisoExamsForTier("full") : [];
  const completed = (attempts ?? []).filter(
    (a) => isWisoCuratedMockId(a.exam_id) && !isCustomExamId(a.exam_id),
  );
  const bestByExam = new Map<string, MockAttempt>();
  for (const a of completed) {
    const prev = bestByExam.get(a.exam_id);
    if (!prev || a.points_earned > prev.points_earned) bestByExam.set(a.exam_id, a);
  }
  const locked = tier !== "full";

  const start = (timed: boolean) => {
    if (!selected) return;
    clearSession(selected.id);
    setInProgress((prev) => {
      const next = { ...prev };
      delete next[selected.id];
      return next;
    });
    navigate({
      to: "/mock-exams/$examId/take",
      params: { examId: selected.id },
      search: { timed, answerSheet: withAnswerSheet },
    });
  };

  const resume = (exam: MockExamSummary) => {
    const saved = inProgress[exam.id];
    if (!saved) return;
    navigate({
      to: "/mock-exams/$examId/take",
      params: { examId: exam.id },
      search: { timed: saved.timed, answerSheet: saved.answerSheet },
    });
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader compact maxWidthClassName="max-w-5xl" />
      <main className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-800 dark:text-indigo-300">
            WiSo · WU Aufnahmeprüfung
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            WiSo Mock Exams
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Volle Probeprüfungen für WiSo: Wirtschaft verstehen, Mathematik und deutsches
            Sprachverständnis, mit demselben Teilpunktesystem wie in der echten Prüfung.
          </p>
        </div>

        <section className="mb-14">
          <h2 className="mb-5 font-display text-xl font-semibold">Verfügbare Prüfungen</h2>
          {tier === null ? (
            <p className="text-sm text-muted-foreground">Lade Zugang…</p>
          ) : locked ? (
            <div className="rounded-2xl border border-dashed border-indigo-300/70 bg-indigo-50/40 p-6 text-sm text-muted-foreground dark:border-indigo-800/50 dark:bg-indigo-950/30">
              WiSo Mock Exams gehören zum Full WiSo Course.{" "}
              <LocalizedLink
                to="/wiso/products/full-course"
                className="font-semibold text-indigo-800 underline-offset-4 hover:underline dark:text-indigo-300"
              >
                Full WiSo Course ansehen →
              </LocalizedLink>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {exams.map((exam) => (
                <div
                  key={exam.id}
                  className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <FileText className="h-4 w-4" style={{ color: INDIGO }} />
                    <h3 className="font-display text-lg font-semibold">{exam.title}</h3>
                  </div>
                  <p className="flex-1 text-sm text-muted-foreground">
                    {exam.questionCount} Fragen · {exam.durationMinutes / 60} Stunden
                    {exam.pointsTotal ? ` · ${exam.pointsTotal} Punkte` : null}
                    {exam.contentRev ? (
                      <span className="mt-1 block font-mono text-[10px] tracking-wide text-muted-foreground/70">
                        rev {exam.contentRev}
                      </span>
                    ) : null}
                  </p>
                  {bestByExam.has(exam.id) && (
                    <p className="mt-2 text-xs font-semibold" style={{ color: INDIGO }}>
                      Abgeschlossen · best {bestByExam.get(exam.id)!.points_earned.toFixed(1)}/
                      {bestByExam.get(exam.id)!.points_total}
                    </p>
                  )}
                  {inProgress[exam.id] && (
                    <p className="mt-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
                      In Bearbeitung — du kannst fortsetzen
                    </p>
                  )}
                  {inProgress[exam.id] ? (
                    <div className="mt-5 flex flex-col gap-2">
                      <button
                        type="button"
                        onClick={() => resume(exam)}
                        className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
                        style={{ backgroundColor: INDIGO }}
                      >
                        <PlayCircle className="h-4 w-4" />
                        Fortsetzen
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setWithAnswerSheet(true);
                          setSelected(exam);
                        }}
                        className="inline-flex items-center justify-center rounded-md border border-border bg-card px-4 py-2 text-xs font-semibold transition-all hover:bg-secondary"
                      >
                        Neu starten…
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setWithAnswerSheet(true);
                        setSelected(exam);
                      }}
                      className="mt-5 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
                      style={{ backgroundColor: INDIGO }}
                    >
                      <PlayCircle className="h-4 w-4" />
                      {bestByExam.has(exam.id) ? "Erneut starten" : "Prüfung starten"}
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

        <section>
          <h2 className="mb-5 font-display text-xl font-semibold">Abgeschlossene Prüfungen</h2>
          {attempts === null ? (
            <p className="text-sm text-muted-foreground">Lade Ergebnisse…</p>
          ) : completed.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-card/50 p-10 text-center">
              <Trophy className="mx-auto mb-3 h-6 w-6 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                Noch keine WiSo-Mocks abgeschlossen. Nach der ersten Probeprüfung erscheinen die
                Ergebnisse hier.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <MockScoreTrend attempts={completed} />
              <div className="space-y-3">
                {completed.map((c) => {
                  const pct = Math.round((c.points_earned / c.points_total) * 100);
                  return (
                    <div
                      key={c.id}
                      className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div>
                        <h3 className="font-display text-base font-semibold">{c.exam_title}</h3>
                        <p className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="h-3.5 w-3.5" />
                          {new Date(c.completed_at).toLocaleDateString(undefined, {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                      <div className="flex items-center gap-5">
                        <div className="text-right">
                          <div className="font-display text-lg font-bold" style={{ color: INDIGO }}>
                            {c.points_earned.toFixed(1)}/{c.points_total}
                          </div>
                          <div className="text-xs text-muted-foreground">{pct}%</div>
                        </div>
                        <Link
                          to="/mock-exams/$examId/review"
                          params={{ examId: c.exam_id }}
                          className="rounded-md border border-border bg-secondary px-4 py-2 text-sm font-semibold transition-all hover:bg-secondary/70"
                        >
                          Öffnen
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </section>
      </main>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">{selected?.title}</DialogTitle>
            <DialogDescription>
              Volle WiSo-Simulation, {selected?.pointsTotal ?? WISO_MOCK_EXAMS[0]?.pointsTotal}{" "}
              Punkte insgesamt.
            </DialogDescription>
          </DialogHeader>

          <div className="rounded-xl border border-border bg-secondary/40 p-4 text-sm">
            <div className="flex items-center justify-between py-1">
              <span className="text-muted-foreground">Wirtschaft</span>
              <span className="font-semibold">
                {WISO_MOCK_EXAM_1_SECTION_COUNTS.economics} Fragen
              </span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-muted-foreground">Deutsch</span>
              <span className="font-semibold">
                {WISO_MOCK_EXAM_1_SECTION_COUNTS.german} Fragen
              </span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-muted-foreground">Mathematik</span>
              <span className="font-semibold">
                {WISO_MOCK_EXAM_1_SECTION_COUNTS.math} Fragen
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between border-t border-border pt-2">
              <span className="font-semibold">Gesamt</span>
              <span className="font-semibold">
                {WISO_MOCK_EXAM_1_SECTION_COUNTS.economics +
                  WISO_MOCK_EXAM_1_SECTION_COUNTS.german +
                  WISO_MOCK_EXAM_1_SECTION_COUNTS.math}{" "}
                Fragen
              </span>
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            Mit Timer ist die Prüfung auf 2 Stunden begrenzt und wird automatisch abgegeben, wenn die
            Zeit abläuft.
          </p>

          <ExamStartAnswerMode withAnswerSheet={withAnswerSheet} onChange={setWithAnswerSheet} />

          <div className="mt-1 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => start(true)}
              className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
              style={{ backgroundColor: INDIGO }}
            >
              <Timer className="h-4 w-4" />
              Mit Timer starten (2:00:00)
            </button>
            <button
              type="button"
              onClick={() => start(false)}
              className="inline-flex items-center justify-center rounded-md border border-border bg-card px-4 py-2.5 text-sm font-semibold transition-all hover:bg-secondary"
            >
              Ohne Timer starten
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
