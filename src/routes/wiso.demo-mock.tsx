import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AuthModal } from "@/components/AuthModal";
import { LocalizedLink } from "@/components/LocalizedLink";
import { SiteHeader } from "@/components/SiteHeader";
import { ExamStartAnswerMode } from "@/components/mock-exam/ExamStartAnswerMode";
import { SeoFaq, buildFaqPageJsonLd } from "@/components/SeoFaq";
import { useAuthGate } from "@/hooks/use-auth-gate";
import { WISO_PRACTICE_ROUTES } from "@/config/wiso-exam-hub";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { WISO_MOCK_EXAM_DEMO_SECTION_COUNTS } from "@/lib/wiso-mock-exam-demo-content";
import { getFreeWisoDemoMockExam, type MockExamSummary } from "@/lib/mock-exams";
import { storeExamTrack } from "@/lib/exam-track";
import { socialImageMetaForPath } from "@/lib/seo/social-image";
import { clearSession, loadSession, sessionUsesAnswerSheet } from "@/lib/mock-exam-session";
import { fetchMockAttempts, type MockAttempt } from "@/lib/user-progress";
import {
  BookOpen,
  CheckCircle2,
  Clock,
  FileText,
  PlayCircle,
  Timer,
  Trophy,
} from "lucide-react";
import examHallAsset from "@/assets/exam-hall-real.png.asset.json";

const DEMO = getFreeWisoDemoMockExam();
const DEMO_HOURS = DEMO.durationMinutes / 60;
const INDIGO = "#3730A3";
const PATH = "/wiso/demo-mock" as const;

const demoMockFaqs = [
  {
    question: "Ist die WiSo-Demo-Probeprüfung wirklich kostenlos?",
    answer:
      "Ja. Du brauchst ein kostenloses BBE-School-Konto (keine Kreditkarte), damit wir Versuch, Punkte und Review speichern können. Der Start der Prüfung selbst kostet nichts.",
  },
  {
    question: "Wie nah ist das an der echten WU-WiSo-Aufnahmeprüfung?",
    answer:
      "Es spiegelt das Format: Wirtschaft verstehen, Deutsch (Sprachverständnis) und Mathematik unter einem 2-Stunden-Limit, mit Teilpunktesystem (wi2) wie in der offiziellen Bewertung.",
  },
  {
    question: "Wie viele Fragen hat die kostenlose Demo-Probeprüfung?",
    answer:
      "33 Fragen für etwa 164 Punkte: 10 Wirtschaft, 10 Deutsch und 13 Mathematik.",
  },
  {
    question: "Muss ich den Timer nutzen?",
    answer:
      "Nein. Du kannst mit 2-Stunden-Timer starten (automatische Abgabe bei null) oder ohne Timer, wenn du zuerst auf Genauigkeit achten willst. Der Timed-Modus ist die bessere Diagnose für Prüfungstag-Tempo.",
  },
  {
    question: "Sehe ich nach dem Abschluss Erklärungen?",
    answer:
      "Ja. Nach dem Abgeben siehst du deinen Score und kannst jede Aufgabe inkl. Lösungswegen öffnen.",
  },
  {
    question: "Was sollte ich nach der Demo-Probeprüfung tun?",
    answer:
      "Nutze deine schwachen Abschnitte als Leitfaden. Starte mit dem kostenlosen Demo Practice in Wirtschaft, Mathe und Deutsch, und schalte später volle Mocks und den Full Course frei.",
  },
];

const pageTitle =
  "Kostenlose WiSo-Probeprüfung online | WU Aufnahmeprüfung | BBE School";
const pageDescription =
  "Kostenlose vollständige WiSo-Probeprüfung: 33 Fragen, 2 Stunden, Teilpunktesystem. Kostenloses Konto — keine Kreditkarte. Starte deine Diagnose jetzt.";

export const Route = createFileRoute("/wiso/demo-mock")({
  head: () => ({
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildFaqPageJsonLd(demoMockFaqs)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: pageTitle,
          description: pageDescription,
          url: `https://bbe-school.com${PATH}`,
          inLanguage: "de",
          isPartOf: {
            "@type": "WebSite",
            name: "BBE School",
            url: "https://bbe-school.com",
          },
          about: {
            "@type": "Thing",
            name: "WU Wien WiSo Aufnahmeprüfung",
          },
        }),
      },
    ],
    links: [...hreflangLinks(PATH), { rel: "canonical", href: `https://bbe-school.com${PATH}` }],
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `https://bbe-school.com${PATH}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow" },
      ...socialImageMetaForPath(PATH),
    ],
  }),
  component: WisoDemoMockPage,
});

const benefits = [
  {
    title: "Echtes Prüfungsformat",
    body: "Wirtschaft, Deutsch und Mathematik in einem Durchgang — dieselbe Fachreihenfolge und derselbe Zeitdruck wie am Prüfungstag.",
  },
  {
    title: "Offizielles Scoring",
    body: "Teilpunkte nach wi2 spiegeln das Teilpunktesystem wider — dein Prozentsatz sagt etwas aus.",
  },
  {
    title: "Harte Diagnose, kein Spielzeug",
    body: "Aus anspruchsvollen Übungsbanken zusammengestellt, damit du siehst, wo Punkte wirklich verloren gehen.",
  },
  {
    title: "Review mit Erklärungen",
    body: "Nach dem Abgeben öffnest du jede Aufgabe erneut, prüfst deine Urteile und lernst die Lösungen.",
  },
];

const steps = [
  {
    n: "1",
    title: "Kostenloses Konto anlegen",
    body: "E-Mail oder Google — keine Zahlungsdaten. Wir brauchen nur ein Konto, um deinen Versuch zu speichern.",
  },
  {
    n: "2",
    title: "Timer und Antwortmodus wählen",
    body: "Timed (2 Stunden) für eine echte Diagnose, oder ohne Timer. Digitales Antwortblatt oder Klick-Modus.",
  },
  {
    n: "3",
    title: "Abschließen, Score und Review",
    body: "Punkte sehen und den vollen Review öffnen, um schwache Themen zu treffen — bevor du etwas kaufst.",
  },
];

export function WisoDemoMockPage() {
  const navigate = useNavigate();
  const authGate = useAuthGate();
  const [startOpen, setStartOpen] = useState(false);
  const [withAnswerSheet, setWithAnswerSheet] = useState(true);
  const [bestAttempt, setBestAttempt] = useState<MockAttempt | null>(null);
  const [inProgress, setInProgress] = useState<{
    timed: boolean;
    answerSheet: boolean;
  } | null>(null);
  const [attempts, setAttempts] = useState<MockAttempt[]>([]);
  const [attemptsReady, setAttemptsReady] = useState(false);
  const [pendingStart, setPendingStart] = useState(false);

  useEffect(() => {
    storeExamTrack("wiso");
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const history = await fetchMockAttempts();
      if (cancelled) return;
      const demoAttempts = history.filter((a) => a.exam_id === DEMO.id);
      setAttempts(demoAttempts);
      setAttemptsReady(true);
      const best = demoAttempts.reduce<MockAttempt | null>((acc, a) => {
        if (!acc || a.points_earned > acc.points_earned) return a;
        return acc;
      }, null);
      setBestAttempt(best);

      const s = loadSession(DEMO.id);
      if (s) {
        setInProgress({ timed: s.timed, answerSheet: sessionUsesAnswerSheet(s) });
      } else {
        setInProgress(null);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const completed = attempts.filter((a) => a.completed_at);

  useEffect(() => {
    if (!authGate.signedIn || !pendingStart) return;
    setPendingStart(false);
    setWithAnswerSheet(true);
    setStartOpen(true);
  }, [authGate.signedIn, pendingStart]);

  const requireAuthThen = (action: () => void) => {
    if (!authGate.requireAuth()) {
      setPendingStart(true);
      return;
    }
    action();
  };

  const openStart = () => {
    requireAuthThen(() => {
      setWithAnswerSheet(true);
      setStartOpen(true);
    });
  };

  const start = (timed: boolean) => {
    if (!authGate.requireAuth()) {
      setPendingStart(true);
      setStartOpen(false);
      return;
    }
    clearSession(DEMO.id);
    setInProgress(null);
    setStartOpen(false);
    navigate({
      to: "/mock-exams/$examId/take",
      params: { examId: DEMO.id },
      search: { timed, answerSheet: withAnswerSheet },
    });
  };

  const resume = () => {
    requireAuthThen(() => {
      if (!inProgress) return;
      navigate({
        to: "/mock-exams/$examId/take",
        params: { examId: DEMO.id },
        search: { timed: inProgress.timed, answerSheet: inProgress.answerSheet },
      });
    });
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader
        compact
        maxWidthClassName="max-w-6xl"
        actions={
          <LocalizedLink
            to={WISO_PRACTICE_ROUTES.demo}
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            Kostenlose Übung →
          </LocalizedLink>
        }
      />

      <main>
        <section className="relative overflow-hidden border-b border-border">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: `url(${examHallAsset.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/85 via-background/92 to-background"
            aria-hidden
          />

          <div className="relative mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12">
              <div>
                <p
                  className="mb-3 text-sm font-semibold uppercase tracking-wide"
                  style={{ color: INDIGO }}
                >
                  Kostenlose WU-WiSo-Diagnose
                </p>
                <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                  Kostenlose WiSo-Probeprüfung online
                </h1>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Eine vollständige, anspruchsvolle Diagnose der WU-WiSo-Aufnahmeprüfung — gleiches
                  Format, gleiches 2-Stunden-Fenster, gleiches Teilpunktesystem. Kostenlos mit Konto;
                  keine Kreditkarte.
                </p>

                <ul className="mt-6 space-y-2 text-sm text-foreground">
                  {[
                    "33 Fragen · 164 Punkte · 2 Stunden",
                    "Wirtschaft, Deutsch und Mathematik in einem Durchgang",
                    "Mit oder ohne Timer · digitales Antwortblatt optional",
                    "Score + voller Review nach dem Abgeben",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0"
                        style={{ color: INDIGO }}
                        aria-hidden
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <ExamCard
                exam={DEMO}
                best={bestAttempt}
                inProgress={inProgress}
                onStart={openStart}
                onResume={resume}
                featured
              />
            </div>

            <div className="mt-12 flex flex-col items-center gap-3 text-center">
              {inProgress ? (
                <div className="flex w-full max-w-lg flex-col gap-3 sm:flex-row sm:justify-center">
                  <button
                    type="button"
                    onClick={resume}
                    className="inline-flex flex-1 items-center justify-center gap-3 rounded-xl bg-foreground px-10 py-5 text-lg font-semibold text-background shadow-lg transition-all hover:opacity-90 sm:text-xl"
                  >
                    <PlayCircle className="h-6 w-6 sm:h-7 sm:w-7" />
                    Demo-Prüfung fortsetzen
                  </button>
                  <button
                    type="button"
                    onClick={openStart}
                    className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-6 py-5 text-base font-semibold transition-all hover:bg-secondary"
                  >
                    Neu starten…
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={openStart}
                  className="inline-flex w-full max-w-lg items-center justify-center gap-3 rounded-xl bg-foreground px-10 py-5 text-lg font-semibold text-background shadow-lg transition-all hover:opacity-90 sm:text-xl"
                >
                  <PlayCircle className="h-6 w-6 sm:h-7 sm:w-7" />
                  {bestAttempt
                    ? "Kostenlose Demo erneut schreiben"
                    : "Kostenlose Demo starten"}
                </button>
              )}
              <LocalizedLink
                to={WISO_PRACTICE_ROUTES.demo}
                className="inline-flex items-center justify-center rounded-md px-5 py-2 text-sm font-semibold underline-offset-4 hover:underline"
                style={{ color: INDIGO }}
              >
                Oder zuerst Fachübungen ausprobieren
              </LocalizedLink>
              <p className="text-xs text-muted-foreground">
                Kostenloses Konto nötig, um Fortschritt zu speichern — keine Kreditkarte, kein Kauf.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary/30">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border sm:grid-cols-4">
            {[
              { label: "Fragen", value: String(DEMO.questionCount) },
              { label: "Zeitlimit", value: `${DEMO_HOURS} h` },
              { label: "Punkte gesamt", value: String(DEMO.pointsTotal) },
              { label: "Preis", value: "Kostenlos" },
            ].map((stat) => (
              <div key={stat.label} className="bg-background px-6 py-8 text-center">
                <div className="font-display text-3xl font-bold tracking-tight text-foreground">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Was in der kostenlosen Demo-Probeprüfung steckt
            </h2>
            <p className="mt-3 text-muted-foreground">
              Ein Durchgang, der den Aufbau der WU-WiSo-Aufnahmeprüfung spiegelt — drei Teile,
              Teilpunkte und Prüfungstag-Tempo.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                subject: "Wirtschaft verstehen",
                count: WISO_MOCK_EXAM_DEMO_SECTION_COUNTS.economics,
                detail:
                  "True/False-Aussagencluster unter gemeinsamen Stämmen — Definitionen, Märkte und Bilanzkennzahlen.",
              },
              {
                subject: "Deutsch",
                count: WISO_MOCK_EXAM_DEMO_SECTION_COUNTS.german,
                detail:
                  "Leseverständnis zu „Nudging und die Grenzen verhaltensökonomischer Politik“ — wie in der Prüfung.",
              },
              {
                subject: "Mathematik",
                count: WISO_MOCK_EXAM_DEMO_SECTION_COUNTS.math,
                detail:
                  "Matura-Tiefe: Algebra, Funktionen, Wahrscheinlichkeit und Rechnen unter Zeitdruck.",
              },
            ].map((block) => (
              <div key={block.subject} className="border-t-2 pt-5" style={{ borderColor: INDIGO }}>
                <p
                  className="text-xs font-semibold uppercase tracking-wide"
                  style={{ color: INDIGO }}
                >
                  {block.count} Fragen
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold">{block.subject}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{block.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-secondary/25">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Warum diese Diagnose vor dem Kurskauf
              </h2>
              <p className="mt-3 text-muted-foreground">
                Werbung und Kursseiten können alles versprechen. Eine harte Probeprüfung zeigt dir —
                in Punkten — wo du wirklich stehst.
              </p>
            </div>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0"
                    style={{ color: INDIGO }}
                    aria-hidden
                  />
                  <div>
                    <h3 className="font-display text-base font-semibold">{b.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            So funktioniert die kostenlose Demo-Prüfung
          </h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n}>
                <span className="font-display text-3xl font-bold" style={{ color: `${INDIGO}cc` }}>
                  {s.n}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <button
              type="button"
              onClick={openStart}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-semibold text-background transition-all hover:opacity-90"
            >
              <PlayCircle className="h-4 w-4" />
              {inProgress
                ? "Prüfung fortsetzen"
                : bestAttempt
                  ? "Demo erneut schreiben"
                  : "Kostenlose Demo starten"}
            </button>
          </div>
        </section>

        <section id="results" className="border-t border-border bg-secondary/20">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
            <h2 className="mb-6 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Deine Demo-Ergebnisse
            </h2>
            {!authGate.ready || !attemptsReady ? (
              <p className="text-sm text-muted-foreground">Ergebnisse werden geladen…</p>
            ) : !authGate.signedIn ? (
              <div className="rounded-2xl border border-dashed border-border bg-card/50 p-10 text-center">
                <Trophy className="mx-auto mb-3 h-6 w-6 text-taupe" />
                <p className="text-sm text-muted-foreground">
                  Melde dich an, um die Demo-Probeprüfung zu starten und hier deine Ergebnisse zu
                  sehen.
                </p>
                <button
                  type="button"
                  onClick={() => authGate.setAuthOpen(true)}
                  className="mt-4 inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-all hover:opacity-90"
                >
                  Anmelden und weiter
                </button>
              </div>
            ) : completed.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border bg-card/50 p-10 text-center">
                <Trophy className="mx-auto mb-3 h-6 w-6 text-taupe" />
                <p className="text-sm text-muted-foreground">
                  Noch keine Demo-Versuche. Schließe die Prüfung ab — dann erscheint dein Score hier.
                </p>
              </div>
            ) : (
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
                        <p className="mt-1 flex items-center gap-2 text-xs text-taupe">
                          <Clock className="h-3.5 w-3.5" />
                          {new Date(c.completed_at).toLocaleDateString("de-AT", {
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
                          <div className="text-xs text-taupe">{pct}%</div>
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
            )}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Nach dem Mock
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Nutze die Diagnose als Baseline und übe dann die Teile, die dich Punkte gekostet
                haben.
              </p>
              <ul className="mt-6 space-y-4">
                <li>
                  <LocalizedLink
                    to={WISO_PRACTICE_ROUTES.demo}
                    className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:shadow-sm"
                    style={{ ["--hover-border" as string]: `${INDIGO}66` }}
                  >
                    <BookOpen
                      className="mt-0.5 h-5 w-5 shrink-0"
                      style={{ color: INDIGO }}
                      aria-hidden
                    />
                    <span>
                      <span className="font-display font-semibold group-hover:opacity-90">
                        Kostenloses Demo Practice
                      </span>
                      <span className="mt-1 block text-sm text-muted-foreground">
                        Basisfälle in Wirtschaft, Mathe und Deutsch mit Erklärungen.
                      </span>
                    </span>
                  </LocalizedLink>
                </li>
                <li>
                  <LocalizedLink
                    to="/wiso/entrance-exam"
                    className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:shadow-sm"
                  >
                    <FileText
                      className="mt-0.5 h-5 w-5 shrink-0"
                      style={{ color: INDIGO }}
                      aria-hidden
                    />
                    <span>
                      <span className="font-display font-semibold">
                        WiSo-Aufnahmeprüfung — Überblick
                      </span>
                      <span className="mt-1 block text-sm text-muted-foreground">
                        Format, Themen, Scoring und wie das Auswahlverfahren funktioniert.
                      </span>
                    </span>
                  </LocalizedLink>
                </li>
                <li>
                  <LocalizedLink
                    to={WISO_PRACTICE_ROUTES.products}
                    className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:shadow-sm"
                  >
                    <Trophy
                      className="mt-0.5 h-5 w-5 shrink-0"
                      style={{ color: INDIGO }}
                      aria-hidden
                    />
                    <span>
                      <span className="font-display font-semibold">Full Course &amp; Mock-Katalog</span>
                      <span className="mt-1 block text-sm text-muted-foreground">
                        Volumen-Übung und weitere timed Mocks freischalten, wenn du soweit bist.
                      </span>
                    </span>
                  </LocalizedLink>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Häufig gestellte Fragen
              </h2>
              <SeoFaq items={demoMockFaqs} className="mt-6" defaultOpenIndex={0} />
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-foreground text-background">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 sm:flex-row sm:items-center lg:px-8">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight">
                Bereit für deinen Baseline-Score?
              </h2>
              <p className="mt-2 max-w-lg text-sm text-background/75">
                Starte die kostenlose WiSo-Probeprüfung — 33 Fragen, 2 Stunden, voller Review nach dem
                Abgeben.
              </p>
            </div>
            <button
              type="button"
              onClick={openStart}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-background px-5 py-3 text-sm font-semibold text-foreground transition-all hover:opacity-90"
            >
              <PlayCircle className="h-4 w-4" />
              {inProgress ? "Prüfung fortsetzen" : "Kostenlose Demo starten"}
            </button>
          </div>
        </section>
      </main>

      <Dialog open={startOpen} onOpenChange={setStartOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">{DEMO.title}</DialogTitle>
            <DialogDescription>
              Vollständige Simulation, {DEMO.pointsTotal} Punkte gesamt.
            </DialogDescription>
          </DialogHeader>

          <div className="rounded-xl border border-border bg-secondary/40 p-4 text-sm">
            <div className="flex items-center justify-between py-1">
              <span className="text-muted-foreground">Wirtschaft</span>
              <span className="font-semibold">
                {WISO_MOCK_EXAM_DEMO_SECTION_COUNTS.economics} Fragen
              </span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-muted-foreground">Deutsch</span>
              <span className="font-semibold">
                {WISO_MOCK_EXAM_DEMO_SECTION_COUNTS.german} Fragen
              </span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-muted-foreground">Mathematik</span>
              <span className="font-semibold">
                {WISO_MOCK_EXAM_DEMO_SECTION_COUNTS.math} Fragen
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between border-t border-border pt-2">
              <span className="font-semibold">Gesamt</span>
              <span className="font-semibold">{DEMO.questionCount} Fragen</span>
            </div>
          </div>

          <p className="text-xs text-taupe">
            Mit Timer ist die Prüfung auf 2 Stunden begrenzt und wird bei null automatisch
            abgegeben.
          </p>

          <ExamStartAnswerMode
            withAnswerSheet={withAnswerSheet}
            onChange={setWithAnswerSheet}
            locale="de"
          />

          <div className="mt-1 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => start(true)}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-all hover:opacity-90"
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

      <AuthModal
        open={authGate.authOpen}
        onOpenChange={(open) => {
          authGate.setAuthOpen(open);
          if (!open) setPendingStart(false);
        }}
        defaultMode="signup"
      />
    </div>
  );
}

function ExamCard({
  exam,
  best,
  inProgress,
  onStart,
  onResume,
  featured = false,
}: {
  exam: MockExamSummary;
  best: MockAttempt | null;
  inProgress: { timed: boolean; answerSheet: boolean } | null;
  onStart: () => void;
  onResume: () => void;
  featured?: boolean;
}) {
  return (
    <div
      className={
        featured
          ? "flex flex-col rounded-2xl border border-border bg-card/95 p-6 shadow-lg backdrop-blur-sm"
          : "flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
      }
    >
      <div className="mb-3 flex items-center gap-2">
        <FileText className="h-4 w-4" style={{ color: INDIGO }} />
        <h2 className="font-display text-lg font-semibold">{exam.title}</h2>
      </div>
      <p className="flex-1 text-sm text-muted-foreground">
        {exam.questionCount} Fragen · {exam.durationMinutes / 60} Stunden · {exam.pointsTotal}{" "}
        Punkte
        {exam.contentRev ? (
          <span className="mt-1 block font-mono text-[10px] tracking-wide text-muted-foreground/70">
            rev {exam.contentRev}
          </span>
        ) : null}
      </p>
      {best && (
        <p className="mt-2 text-xs font-semibold" style={{ color: INDIGO }}>
          Abgeschlossen · Best {best.points_earned.toFixed(1)}/{best.points_total}
        </p>
      )}
      {inProgress && (
        <p className="mt-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
          In Bearbeitung — du kannst fortsetzen, wo du aufgehört hast
        </p>
      )}
      {inProgress ? (
        <div className="mt-5 flex flex-col gap-2">
          <button
            type="button"
            onClick={onResume}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-all hover:opacity-90"
          >
            <PlayCircle className="h-4 w-4" />
            Prüfung fortsetzen
          </button>
          <button
            type="button"
            onClick={onStart}
            className="inline-flex items-center justify-center rounded-md border border-border bg-card px-4 py-2 text-xs font-semibold transition-all hover:bg-secondary"
          >
            Neu starten…
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={onStart}
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-all hover:opacity-90"
        >
          <PlayCircle className="h-4 w-4" />
          {best ? "Erneut schreiben" : "Prüfung starten"}
        </button>
      )}
    </div>
  );
}
