import { generatedDe, generatedUk } from "./generated";
import { extraDe, extraUk } from "./extra";
import { uiExtraDe, uiExtraUk } from "./ui-extra";
import { featuresExtraDe, featuresExtraUk } from "./features-extra";

export type Lang = "en" | "de" | "uk";

export const LANGUAGES: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "de", label: "Deutsch", short: "DE" },
  { code: "uk", label: "Українська", short: "UK" },
];

/**
 * Translation dictionary keyed by the exact English source text as rendered.
 * Anything missing simply stays in English.
 */
const baseDictionary: Record<Exclude<Lang, "en">, Record<string, string>> = {
  de: {
    // Navigation / chrome
    "Exam info": "Prüfungsinfos",
    "Demo Practice": "Demo-Übung",
    "Demo-Practice": "Demo-Übung",
    "Demo-course": "Demo-Kurs",
    "How it works": "So funktioniert's",
    Products: "Produkte",
    Features: "Funktionen",
    FAQ: "FAQ",
    Practice: "Übung",
    "Mock Exams": "Probeprüfungen",
    "Mock Builder": "Prüfungs-Builder",
    "Practice Tasks": "Übungsaufgaben",
    "Study tools": "Lernwerkzeuge",
    Reviews: "Bewertungen",
    "Full Course": "Vollkurs",
    "Light course": "Light-Kurs",
    Dashboard: "Dashboard",
    "Sign in": "Anmelden",
    "Sign up": "Registrieren",
    "Log in": "Anmelden",
    "Log out": "Abmelden",
    Account: "Konto",
    Back: "Zurück",
    Subjects: "Fächer",
    Explanations: "Erklärungen",
    Tasks: "Aufgaben",
    Economics: "Wirtschaft",
    Math: "Mathematik",
    English: "Englisch",
    Unlocked: "Freigeschaltet",
    soon: "bald",

    // Home hero
    "Built by top 1% of the hall": "Erstellt von den besten 1 % des Prüfungssaals",
    "Step by step preparation for your 2027 WU BBE exam":
      "Schritt-für-Schritt-Vorbereitung auf deine WU-BBE-Prüfung 2027",
    "Master every detail and tactic of the actual exam.":
      "Beherrsche jedes Detail und jede Taktik der echten Prüfung.",
    "Try demo-practice": "Demo-Übung testen",
    "50+ tasks for start": "50+ Aufgaben zum Start",
    "Explore Courses": "Kurse entdecken",
    "See all BBE School products": "Alle BBE-School-Produkte ansehen",
    "Beauty of stress and time management": "Stress- und Zeitmanagement meistern",
    "Most common and tricky Mistakes": "Häufigste und heikelste Fehler",
    "Exam life hacks and loopholes": "Prüfungs-Lifehacks und Schlupflöcher",
    "Watch Intro Video": "Intro-Video ansehen",
    "Passing the Exam from Rimini Beach": "Die Prüfung vom Strand von Rimini bestehen",
    "Almost free education.": "Fast kostenlose Ausbildung.",
    "The Real Cost of WU Vienna Admission": "Die wahren Kosten der WU-Wien-Zulassung",
    "Read the full letter": "Den ganzen Brief lesen",

    // How it works
    Course: "Kurs",
    "Mock exams": "Probeprüfungen",
    "Statement explanations with AI beside them": "Aussagen-Erklärungen mit KI daneben",
    "Open a guide, pick a task, submit, then open the full solution. For any statement, tap AI explanation to read the tactical write-up and the AI pass side by side — without leaving the solution panel.":
      "Öffne einen Leitfaden, wähle eine Aufgabe, reiche ein und öffne die volle Lösung. Bei jeder Aussage tippst du auf KI-Erklärung und liest die taktische Analyse und den KI-Pass nebeneinander — ohne die Lösung zu verlassen.",
    "Explore Economics": "Wirtschaft entdecken",
    "Timed drills with the exam calculator": "Timed Mode mit dem Prüfungsrechner",
    "Start from the guide, open a question, switch on timed mode, and use the calculator. Submit, then scroll the full solution so the method sticks.":
      "Starte beim Leitfaden, öffne eine Frage, schalte den Timed Mode ein und nutze den Rechner. Reiche ein und scrolle dann die volle Lösung, bis die Methode sitzt.",
    "Explore Math": "Mathematik entdecken",
    "Passages with show-in-text": "Texte mit „Show in text“",
    "Open the guide, work a passage with statements, and submit. Then use Show in text to jump from each explanation back to the exact lines in the passage.":
      "Öffne den Leitfaden, bearbeite einen Text mit Aussagen und reiche ein. Mit Show in text springst du von jeder Erklärung zurück zu den genauen Zeilen im Text.",
    "Explore English": "Englisch entdecken",
    "Full-length exam simulations": "Vollständige Prüfungssimulationen",
    "Build a mock around your weak spots": "Baue eine Probeprüfung um deine Schwachstellen",
    "Flashcards, matching, and drills": "Karteikarten, Matching und Drills",
    "This walkthrough is next. Use Course to see how Economics, Math, and English practice actually feels.":
      "Diese Tour folgt als Nächstes. Unter Kurs siehst du, wie sich Wirtschaft, Mathematik und Englisch in der Praxis anfühlen.",
    "Walkthrough coming next. Switch back to Course to watch Economics, Math, and English.":
      "Die Tour folgt als Nächstes. Wechsle zurück zu Kurs, um Wirtschaft, Mathematik und Englisch zu sehen.",

    // Products
    "Demo-Practice Package": "Demo-Übungspaket",
    "A free trial with 50+ starter cases across all three subjects and step by step explanations, so you can see what the real exam feels like before committing to anything.":
      "Ein kostenloser Test mit 50+ Einstiegsaufgaben in allen drei Fächern samt Schritt-für-Schritt-Erklärungen – so erlebst du die echte Prüfung, bevor du dich festlegst.",
    "Visit for free": "Kostenlos ansehen",
    "Full BBE Course": "BBE-Vollkurs",
    "The complete prep system: 1500+ practice cases across all three subjects, timing and stress modules, full mock exams, a study assistant, and detailed task breakdowns. Everything you actually need on exam day.":
      "Das komplette Vorbereitungssystem: 1500+ Übungsfälle in allen drei Fächern, Zeit- und Stressmodule, vollständige Probeprüfungen, ein Lernassistent und detaillierte Aufgabenanalysen. Alles, was du am Prüfungstag brauchst.",
    "Buy course · €479": "Kurs kaufen · 479 €",
    "Lite BBE Course": "BBE-Kurs Lite",
    "Access to a curated 950+ question database with clear step by step logic under every statement. Built for steady, self paced preparation when you still have time on your side.":
      "Zugang zu einer kuratierten Datenbank mit 950+ Fragen und klarer Schritt-für-Schritt-Logik unter jeder Aussage. Für ruhige Vorbereitung im eigenen Tempo.",
    "Coming soon": "Demnächst",
    "Unlock full access": "Vollzugang freischalten",
    "Unlock lite access": "Lite-Zugang freischalten",
    "Start Practicing": "Jetzt üben",
    "✓ 100% Free • Instant web access": "✓ 100 % kostenlos • Sofortiger Web-Zugang",

    // Full course feature grid
    "3 Subjects": "3 Fächer",
    "Math, English, and Business & Economics — fully covered.":
      "Mathematik, Englisch sowie Wirtschaft & Business – vollständig abgedeckt.",
    "2000+ Practice Tasks": "2000+ Übungsaufgaben",
    "A constantly growing question bank across every chapter.":
      "Eine ständig wachsende Fragendatenbank für jedes Kapitel.",
    "Direct Support": "Direkter Support",
    "Real answers from real people, not a bot ticket queue.":
      "Echte Antworten von echten Menschen, keine Bot-Warteschlange.",
    "AI Assistance": "KI-Unterstützung",
    "Personalized explanations, on demand, for every question.":
      "Personalisierte Erklärungen auf Abruf für jede Frage.",
    "Full-length simulations under real exam conditions and timing.":
      "Vollständige Simulationen unter echten Prüfungsbedingungen und Zeitvorgaben.",
    "Special Features": "Besondere Funktionen",
    "Exclusive tools you won't find in any other prep course.":
      "Exklusive Tools, die kein anderer Vorbereitungskurs bietet.",

    // Lite course
    "AI-powered explanations": "KI-gestützte Erklärungen",
    "For every question you attempt, get a clear breakdown that teaches the reasoning behind the answer.":
      "Zu jeder bearbeiteten Frage erhältst du eine klare Analyse, die die Logik hinter der Antwort erklärt.",
    "2 full-length timed mock exams": "2 vollständige Probeprüfungen auf Zeit",
    "Test yourself under real conditions and discover where you stand before the real exam.":
      "Teste dich unter echten Bedingungen und finde vor der Prüfung heraus, wo du stehst.",
    "500+ exam-style practice tasks": "500+ prüfungsnahe Übungsaufgaben",
    "Across Math, English, and Business & Economics — enough to build genuine intuition.":
      "In Mathematik, Englisch und Wirtschaft – genug, um echte Intuition aufzubauen.",
    "Community support": "Community-Support",
    "Connect with other applicants working through the same material and share the journey.":
      "Vernetze dich mit anderen Bewerbern, die dasselbe Material durcharbeiten.",
    "Core theory coverage": "Kerntheorie abgedeckt",
    "All three subjects covered with focused theory that supports the practice, not overwhelms it.":
      "Alle drei Fächer mit fokussierter Theorie, die die Praxis unterstützt statt überfordert.",
    "Curated working set": "Kuratiertes Aufgabenset",
    "A genuinely solid foundation pulled from our full question bank, designed for early-stage prep.":
      "Eine solide Grundlage aus unserer vollständigen Fragendatenbank für die frühe Vorbereitungsphase.",

    // Demo package blocks
    "What You Will Master": "Was du meistern wirst",
    "Format Familiarization": "Format kennenlernen",
    "Master the specific True/False logic and partial points system utilized by the university examiners.":
      "Beherrsche die spezielle Richtig/Falsch-Logik und das Teilpunktesystem der Prüfer der Universität.",
    "Baseline Evaluation": "Ausgangsniveau bestimmen",
    "Test your current knowledge across core pillars of Economics, Math, and English in under 30 minutes.":
      "Teste dein aktuelles Wissen in Wirtschaft, Mathematik und Englisch in unter 30 Minuten.",
    "Tactical Review": "Taktische Nachbereitung",
    "Access point-by-point logical breakdowns under each task to see exactly where your reasoning fails.":
      "Sieh dir Punkt-für-Punkt-Analysen unter jeder Aufgabe an und erkenne genau, wo dein Denken scheitert.",

    // Parents page
    "A brutal time constraint.": "Ein brutales Zeitlimit.",
    "A penalty-marking system.": "Ein Strafpunktesystem.",
    "nearly 6 times higher": "fast 6-mal höher",
    "€50 to €100 per hour": "50 bis 100 € pro Stunde",
    "10 times less": "10-mal weniger",
    "top 10% of the class": "beste 10 % des Jahrgangs",
  },
  uk: {
    // Navigation / chrome
    "Exam info": "Про іспит",
    "Demo Practice": "Демо-практика",
    "Demo-Practice": "Демо-практика",
    "Demo-course": "Демо-курс",
    "How it works": "Як це працює",
    Products: "Продукти",
    Features: "Можливості",
    FAQ: "Часті запитання",
    Practice: "Практика",
    "Mock Exams": "Пробні іспити",
    "Mock Builder": "Конструктор іспитів",
    "Practice Tasks": "Практичні завдання",
    "Study tools": "Навчальні інструменти",
    Reviews: "Відгуки",
    "Full Course": "Повний курс",
    "Light course": "Light курс",
    Dashboard: "Кабінет",
    "Sign in": "Увійти",
    "Sign up": "Зареєструватися",
    "Log in": "Увійти",
    "Log out": "Вийти",
    Account: "Акаунт",
    Back: "Назад",
    Subjects: "Предмети",
    Explanations: "Пояснення",
    Tasks: "Завдання",
    Economics: "Економіка",
    Math: "Математика",
    English: "Англійська",
    Unlocked: "Відкрито",
    soon: "скоро",

    // Home hero
    "Built by top 1% of the hall": "Створено найкращим 1% залу",
    "Step by step preparation for your 2027 WU BBE exam":
      "Покрокова підготовка до іспиту WU BBE 2027",
    "Master every detail and tactic of the actual exam.":
      "Опануй кожну деталь і тактику справжнього іспиту.",
    "Try demo-practice": "Спробувати демо-практику",
    "50+ tasks for start": "50+ завдань для старту",
    "Explore Courses": "Переглянути курси",
    "See all BBE School products": "Усі продукти BBE School",
    "Beauty of stress and time management": "Керування стресом і часом",
    "Most common and tricky Mistakes": "Найпоширеніші та найпідступніші помилки",
    "Exam life hacks and loopholes": "Лайфхаки та лазівки іспиту",
    "Watch Intro Video": "Дивитися відео",
    "Passing the Exam from Rimini Beach": "Скласти іспит із пляжу Ріміні",
    "Almost free education.": "Майже безкоштовна освіта.",
    "The Real Cost of WU Vienna Admission": "Справжня ціна вступу до WU Vienna",
    "Read the full letter": "Читати лист повністю",

    // How it works
    Course: "Курс",
    "Mock exams": "Пробні іспити",
    "Statement explanations with AI beside them": "Пояснення тверджень із ШІ поруч",
    "Open a guide, pick a task, submit, then open the full solution. For any statement, tap AI explanation to read the tactical write-up and the AI pass side by side — without leaving the solution panel.":
      "Відкрий гайд, обери завдання, надішли відповідь і відкрий повний розбір. Для будь-якого твердження натисни ШІ-пояснення — тактичний розбір і ШІ стоять поруч, без виходу з панелі розв’язку.",
    "Explore Economics": "До економіки",
    "Timed drills with the exam calculator": "Режим таймера з калькулятором іспиту",
    "Start from the guide, open a question, switch on timed mode, and use the calculator. Submit, then scroll the full solution so the method sticks.":
      "Почни з гайду, відкрий питання, увімкни таймер і скористайся калькулятором. Надішли відповідь, тоді прогорни повний розв’язок, щоб метод закріпився.",
    "Explore Math": "До математики",
    "Passages with show-in-text": "Тексти з Show in text",
    "Open the guide, work a passage with statements, and submit. Then use Show in text to jump from each explanation back to the exact lines in the passage.":
      "Відкрий гайд, розбери текст із твердженнями й надішли відповідь. Show in text повертає з кожного пояснення до точних рядків у тексті.",
    "Explore English": "До англійської",
    "Full-length exam simulations": "Повноформатні симуляції іспиту",
    "Build a mock around your weak spots": "Збери пробний іспит під свої слабкі місця",
    "Flashcards, matching, and drills": "Картки, matching і тренування",
    "This walkthrough is next. Use Course to see how Economics, Math, and English practice actually feels.":
      "Цей огляд буде наступним. У вкладці Курс видно, як насправді виглядає практика з економіки, математики та англійської.",
    "Walkthrough coming next. Switch back to Course to watch Economics, Math, and English.":
      "Огляд буде наступним. Повернись до Курсу, щоб подивитись економіку, математику та англійську.",

    // Products
    "Demo-Practice Package": "Пакет демо-практики",
    "A free trial with 50+ starter cases across all three subjects and step by step explanations, so you can see what the real exam feels like before committing to anything.":
      "Безкоштовна проба: 50+ стартових завдань із трьох предметів і покрокові пояснення, щоб відчути справжній іспит до будь-яких зобов’язань.",
    "Visit for free": "Відкрити безкоштовно",
    "Full BBE Course": "Повний курс BBE",
    "The complete prep system: 1500+ practice cases across all three subjects, timing and stress modules, full mock exams, a study assistant, and detailed task breakdowns. Everything you actually need on exam day.":
      "Повна система підготовки: 1500+ завдань із трьох предметів, модулі часу та стресу, повні пробні іспити, навчальний асистент і детальні розбори. Усе, що потрібно в день іспиту.",
    "Buy course · €479": "Купити курс · €479",
    "Lite BBE Course": "Курс BBE Lite",
    "Access to a curated 950+ question database with clear step by step logic under every statement. Built for steady, self paced preparation when you still have time on your side.":
      "Доступ до бази з 950+ добірних питань із чіткою покроковою логікою під кожним твердженням. Для спокійної підготовки у власному темпі.",
    "Coming soon": "Незабаром",
    "Unlock full access": "Відкрити повний доступ",
    "Unlock lite access": "Відкрити доступ Lite",
    "Start Practicing": "Почати практику",
    "✓ 100% Free • Instant web access": "✓ 100% безкоштовно • Миттєвий доступ",

    // Full course feature grid
    "3 Subjects": "3 предмети",
    "Math, English, and Business & Economics — fully covered.":
      "Математика, англійська та бізнес і економіка — повністю покриті.",
    "2000+ Practice Tasks": "2000+ практичних завдань",
    "A constantly growing question bank across every chapter.":
      "База питань, що постійно зростає, з кожного розділу.",
    "Direct Support": "Пряма підтримка",
    "Real answers from real people, not a bot ticket queue.":
      "Справжні відповіді від людей, а не черга ботів.",
    "AI Assistance": "Допомога ШІ",
    "Personalized explanations, on demand, for every question.":
      "Персональні пояснення на вимогу до кожного питання.",
    "Full-length simulations under real exam conditions and timing.":
      "Повноформатні симуляції у справжніх умовах і з таймінгом іспиту.",
    "Special Features": "Особливі можливості",
    "Exclusive tools you won't find in any other prep course.":
      "Ексклюзивні інструменти, яких немає в інших курсах.",

    // Lite course
    "AI-powered explanations": "Пояснення на основі ШІ",
    "For every question you attempt, get a clear breakdown that teaches the reasoning behind the answer.":
      "До кожного питання — чіткий розбір, який пояснює логіку відповіді.",
    "2 full-length timed mock exams": "2 повні пробні іспити на час",
    "Test yourself under real conditions and discover where you stand before the real exam.":
      "Перевір себе у реальних умовах і дізнайся свій рівень до іспиту.",
    "500+ exam-style practice tasks": "500+ завдань у форматі іспиту",
    "Across Math, English, and Business & Economics — enough to build genuine intuition.":
      "З математики, англійської та економіки — достатньо, щоб виробити справжню інтуїцію.",
    "Community support": "Підтримка спільноти",
    "Connect with other applicants working through the same material and share the journey.":
      "Спілкуйся з іншими вступниками, які проходять той самий матеріал.",
    "Core theory coverage": "Базова теорія",
    "All three subjects covered with focused theory that supports the practice, not overwhelms it.":
      "Усі три предмети з чіткою теорією, що підтримує практику, а не перевантажує.",
    "Curated working set": "Добірний робочий набір",
    "A genuinely solid foundation pulled from our full question bank, designed for early-stage prep.":
      "Міцна основа з нашої повної бази питань для ранньої підготовки.",

    // Demo package blocks
    "What You Will Master": "Що ти опануєш",
    "Format Familiarization": "Знайомство з форматом",
    "Master the specific True/False logic and partial points system utilized by the university examiners.":
      "Опануй логіку «правда/неправда» та систему часткових балів, яку використовують екзаменатори університету.",
    "Baseline Evaluation": "Оцінка стартового рівня",
    "Test your current knowledge across core pillars of Economics, Math, and English in under 30 minutes.":
      "Перевір свої знання з економіки, математики та англійської менш ніж за 30 хвилин.",
    "Tactical Review": "Тактичний розбір",
    "Access point-by-point logical breakdowns under each task to see exactly where your reasoning fails.":
      "Покрокові логічні розбори під кожним завданням показують, де саме дає збій твоє міркування.",

    // Parents page
    "A brutal time constraint.": "Жорстке обмеження часу.",
    "A penalty-marking system.": "Система штрафних балів.",
    "nearly 6 times higher": "майже у 6 разів вище",
    "€50 to €100 per hour": "€50–100 за годину",
    "10 times less": "у 10 разів менше",
    "top 10% of the class": "топ-10% курсу",
  },
};

/** Hand-written entries win over auto-generated page copy. */
export const dictionary: Record<Exclude<Lang, "en">, Record<string, string>> = {
  de: { ...generatedDe, ...extraDe, ...uiExtraDe, ...featuresExtraDe, ...baseDictionary.de },
  uk: { ...generatedUk, ...extraUk, ...uiExtraUk, ...featuresExtraUk, ...baseDictionary.uk },
};

/** Same tables keyed by whitespace-collapsed text, for multi-line JSX nodes. */
const collapsedDictionary: Record<Exclude<Lang, "en">, Record<string, string>> = {
  de: {},
  uk: {},
};
for (const lang of ["de", "uk"] as const) {
  for (const [key, value] of Object.entries(dictionary[lang])) {
    const collapsed = key.replace(/\s+/g, " ").trim();
    if (collapsed && !(collapsed in collapsedDictionary[lang])) {
      collapsedDictionary[lang][collapsed] = value;
    }
  }
}

export function translate(text: string, lang: Lang): string | null {
  if (lang === "en") return null;
  const table = dictionary[lang];
  const trimmed = text.trim();
  if (!trimmed) return null;
  const hit =
    table[trimmed] ?? collapsedDictionary[lang][trimmed.replace(/\s+/g, " ")];
  if (!hit) return null;
  const [, lead = "", , trail = ""] = /^(\s*)([\s\S]*?)(\s*)$/.exec(text) ?? [];
  return `${lead}${hit}${trail}`;
}
