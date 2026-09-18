/** German UI copy for WiSo study tools and course chrome. */

export type StudyUiLocale = "en" | "de";

export const WISO_STUDY_INDEX_COPY = {
  flashcards: {
    title: "Karteikarten",
    subtitle: "Wähle ein Fach, um Begriffe und Formeln zu üben.",
    cta: "Karteikarten üben →",
    pairLabel: (n: number, topics: number) => `${n} Karten · ${topics} Themen`,
    matchingBlurb: (title: string) =>
      `Ordne Begriffe und Formeln den Definitionen aus dem ${title}-Stapel zu.`,
    tutorBlurb: (title: string) =>
      `Tutor Bot stellt zufällige Definitions- und Zuordnungsfragen aus dem ${title}-Theorie-Stapel.`,
    comingSoon: "Demnächst",
  },
  matching: {
    title: "Zuordnung",
    subtitle:
      "Verbinde jeden Begriff mit der richtigen Bedeutung. Dieselbe Lernbank wie die Karteikarten, andere Übung.",
    cta: "Zuordnung starten →",
    pairLabel: (n: number, topics: number) => `${n} Paare · ${topics} Themen`,
    matchingBlurb: (title: string) =>
      `Ordne Begriffe und Formeln den Definitionen aus dem ${title}-Stapel zu.`,
    tutorBlurb: (title: string) =>
      `Tutor Bot stellt zufällige Definitions- und Zuordnungsfragen aus dem ${title}-Theorie-Stapel.`,
    comingSoon: "Demnächst",
  },
  "tutor-exam": {
    title: "Tutor-Prüfung",
    subtitle:
      "Ein Lernroboter prüft dich in Theorie. Bei jedem Durchlauf neue Zufallsfragen pro Fach.",
    cta: "Prüfung starten →",
    pairLabel: (n: number) => `${n} Begriffe · neue Mischung jede Prüfung`,
    matchingBlurb: (title: string) =>
      `Ordne Begriffe und Formeln den Definitionen aus dem ${title}-Stapel zu.`,
    tutorBlurb: (title: string) =>
      `Tutor Bot stellt zufällige Definitions- und Zuordnungsfragen aus dem ${title}-Theorie-Stapel.`,
    comingSoon: "Demnächst",
  },
} as const;

export const WISO_FLASHCARD_UI = {
  subjectsBack: "← Fächer",
  known: "Kann ich",
  dontKnow: "Kann ich nicht",
  neu: "Neu",
  topic: "Thema",
  allTopics: (total: number) => `Alle Themen (${total})`,
  shuffle: "Mischen",
  resetProgress: "Fortschritt zurücksetzen",
  flip: "Umdrehen",
  prev: "Zurück",
  skipNext: "Überspringen / weiter (gewichtet)",
  swipeHintKnow: "Kann ich →",
  swipeHintDont: "← Kann ich nicht",
  swipeHintIdle: "Rechts = kann ich · links = kann ich nicht",
  tapToFlip: "Tippen zum Umdrehen · Wischen zum Sortieren",
  tapToFlipBack: "Tippen zum Umdrehen · Ziehen zum Sortieren",
  word: "Wort",
  termFormula: "Begriff / Formel",
  term: "Begriff",
  definition: "Definition",
  explanation: "Erklärung",
  comingSoon: "Demnächst",
  markedKnown: " · als gekannt markiert (selten)",
  markedDontKnow: " · als unbekannt markiert (häufig)",
  reviewed: (n: number) => ` · ${n} wiederholt`,
  ariaFlipBack: "Karteikarten-Erklärung — tippen zum Umdrehen",
  ariaFlipFront: "Karteikarten-Begriff — tippen zum Umdrehen",
  emptyTopic: "Keine Karten in diesem Thema.",
} as const;

export const WISO_MATCHING_UI = {
  subjectsBack: "← Fächer",
  title: "Begriff → Bedeutung verbinden",
  titleHint:
    "Tippe oder ziehe von einem Begriff zur Bedeutung — Linien verbinden sie wie auf Papier. Richtige Paare bleiben fixiert.",
  cardsInDeck: (total: number) => `${total} Karten in diesem Fachstapel.`,
  shuffle: "Mischen",
  newRound: "Neue Runde",
  allTopics: "Alle Themen",
  round: (n: number) => `Runde ${n}`,
  matched: (done: number, total: number) => `Zugeordnet ${done}/${total}`,
  attempts: (n: number) => `Versuche ${n}`,
  accuracy: (n: number) => `Trefferquote ${n}%`,
  concepts: "Begriffe",
  meanings: "Bedeutungen",
  roundComplete: "Runde geschafft",
  nextRound: "Nächste Runde →",
  emptyTopic: "Noch keine Karten in diesem Thema.",
  roundSummary: (correct: number, attempts: number, accuracy: number | null) =>
    `${correct} richtige${correct === 1 ? "s" : ""} Paar${correct === 1 ? "" : "e"} in ${attempts} Versuch${attempts === 1 ? "" : "en"}${accuracy != null ? ` · ${accuracy}% Trefferquote` : ""}.`,
} as const;

export const WISO_TUTOR_UI = {
  subjectsBack: "← Fächer",
  theoryExam: "Theorieprüfung mit Tutor Bot",
  theoryBlurb: (total: number) =>
    `Jeder Start zieht einen neuen Zufallssatz aus ${total} Begriffen. Modi mischen „Was bedeutet das?“ und „Welcher Begriff ist das?“.`,
  reshuffle: "Neu mischen",
  newExam: "Neue Prüfung",
  allTopics: "Alle Themen",
  exam: (n: number) => `Prüfung ${n}`,
  question: "Frage",
  score: "Punkte",
  emptyTopic: "Noch keine Begriffe in diesem Thema.",
  defineHint: "Definiere den Begriff. Wähle die beste Bedeutung.",
  identifyHint: "Lies die Bedeutung. Wähle den passenden Begriff.",
  reveal: "Auflösung",
  nextQuestion: "Nächste Frage →",
  seeResults: "Ergebnis anzeigen →",
  examComplete: "Prüfung beendet",
  pctCorrect: (pct: number) => `${pct}% richtig`,
  again: "Neue Zufallsprüfung →",
} as const;

export const WISO_TUTOR_PROMPTS = {
  define: "Was bedeutet dieser Begriff?",
  identify: "Welcher Begriff passt zu dieser Erklärung?",
} as const;

export const WISO_TUTOR_GREETINGS = [
  "Theorie-Modus startet … Bereit, wenn du bist.",
  "Zufälliger Fragensatz geladen. Testen wir, was du weißt.",
  "Neue Prüfung geladen. Diesmal ohne Wiederholungen.",
  "Bereit. Ich frage — du wählst die beste Antwort.",
] as const;

export const WISO_TUTOR_CORRECT = [
  "Richtig. Gute Erinnerung.",
  "Stimmt — +1 Punkt.",
  "Genau. Nächste Frage kommt.",
  "Ja! Theorie-Check bestanden.",
] as const;

export const WISO_TUTOR_WRONG = [
  "Nicht ganz. Hier ist das richtige Paar.",
  "Daneben — schau dir die Lösung unten an.",
  "Falsch. Weiter so; der Zufall ist streng.",
  "Falsche Antwort. Merke dir diesen Begriff.",
] as const;

export const WISO_TUTOR_RESULT_LINES = {
  high: "Starkes Ergebnis. Du beherrschst diesen Stoff gut.",
  mid: "Solider Mittelfeld-Schnitt. Nochmal mischen und weiter üben.",
  low: "Noch Luft nach oben. Schau dir die Karteikarten noch einmal an.",
} as const;

export const WISO_DASHBOARD_STUDY = {
  sectionEyebrow: "WiSo-Kurs",
  sectionTitle: "WiSo-Lernwerkzeuge",
  sectionTitleSolo: "Lernwerkzeuge",
  sectionBlurb:
    "Öffne WiSo-Karteikarten, Zuordnung und Tutor-Prüfung für Wirtschaft verstehen, Mathematik und Deutsch.",
  introBoth:
    "Du hast beide Kurse — wähle unten WiSo- oder BBE-Werkzeuge. Jeder Satz öffnet eigene Karteikarten, Zuordnung und Tutor-Prüfung.",
  introWisoOnly:
    "Lernwerkzeuge für deinen Full WiSo Course — Wirtschaft, Mathematik und Deutsch.",
  studyToolsHeading: "Lernwerkzeuge",
  flashcardsTitle: "Karteikarten",
  flashcardsBlurb:
    "Übe Wirtschaftsbegriffe, Mathematikformeln und deutschen Wortschatz mit Karteikarten.",
  flashcardsCta: "WiSo-Karteikarten öffnen →",
  matchingTitle: "Zuordnung",
  matchingBlurb:
    "Verbinde jeden Begriff mit der richtigen Definition. Dieselbe Lernbank, andere Interaktion.",
  matchingCta: "WiSo-Zuordnung öffnen →",
  tutorTitle: "Tutor-Prüfung",
  tutorBlurb: "Ein Tutor-Roboter stellt eine zufällige Theorieprüfung. Jedes Mal neue Fragen.",
  tutorCta: "WiSo-Tutor-Prüfung öffnen →",
} as const;

export const WISO_COURSE_SUBJECTS_UI = {
  trackEyebrow: "WiSo-Track",
  pageTitle: "Full WiSo Course",
  chooseSubject: "Wähle ein Fach, um zu beginnen.",
  goToTasks: "Zu den Aufgaben →",
  comingNext: "Demnächst",
  studyEyebrow: "Lernwerkzeuge",
  studyTitle: "WiSo-Karteikarten, Zuordnung & Tutor-Prüfung",
  studyBlurb:
    "Getrennt von den BBE-Lernwerkzeugen — öffne diese für deine WiSo-Kursdecks.",
  back: "← Zurück",
  flashcardsTitle: "WiSo-Karteikarten",
  flashcardsBlurb:
    "Karteikarten zu Wirtschaft (Deutsch), Mathematik und deutschem Wortschatz.",
  matchingTitle: "WiSo-Zuordnung",
  matchingBlurb: "Verbinde jeden Begriff mit der richtigen Definition aus denselben WiSo-Decks.",
  tutorTitle: "WiSo-Tutor-Prüfung",
  tutorBlurb: "Eine zufällige Theorieprüfung, die bei jedem Start neu gemischt wird.",
  openFlashcards: "Karteikarten öffnen →",
  openMatching: "Zuordnung öffnen →",
  openTutor: "Tutor-Prüfung öffnen →",
  econTag: "Wirtschaft",
  mathTag: "Quantitativ",
  germanTag: "Sprache",
  econDescription:
    "Fälle neu zugeordnet auf Wirtschaft verstehen — Grundlagen der Wirtschaft und Unternehmensgrundlagen (Kapitel 2 und 4 folgen).",
  mathDescription:
    "Full-Course-Mathematik mit deutschen Syllabus-Bezeichnungen — Algebra, Funktionen, Finanzmathematik, Wahrscheinlichkeit und mehr.",
  germanDescription:
    "Zehn Lesetexte mit je zehn Aufgaben — akademisches Sprachverständnis für die WiSo-Aufnahmeprüfung.",
} as const;

/** German ModeArt preview snippets for WiSo subject pickers. */
export const WISO_MODE_ART_PREVIEW = {
  economics: {
    flashcard: "Inflation",
    matching: [
      ["Kartell", "Preise absprechen"],
      ["Monopol", "Ein Anbieter"],
    ] as [string, string][],
    tutor: {
      question: "Was sind Opportunitätskosten?",
      options: ["Entgangener Nutzen", "Geld ausgegeben"] as [string, string],
      correct: 0 as 0 | 1,
    },
  },
  math: {
    flashcard: "Diskriminante",
    matching: [
      ["Kettenregel", "f'(g)·g'"],
      ["Potenzregel", "nxⁿ⁻¹"],
    ] as [string, string][],
    tutor: {
      question: "Wenn Δ < 0, reelle Nullstellen?",
      options: ["Keine", "Zwei"] as [string, string],
      correct: 0 as 0 | 1,
    },
  },
  german: {
    flashcard: "Knappheit",
    matching: [
      ["Angebot", "Angebotene Menge"],
      ["Nachfrage", "Gewünschte Menge"],
    ] as [string, string][],
    tutor: {
      question: "Was sind Opportunitätskosten?",
      options: ["Entgangener Nutzen", "Buchhalterische Kosten"] as [string, string],
      correct: 0 as 0 | 1,
    },
  },
} as const;
