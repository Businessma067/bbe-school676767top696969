import { isDictionaryLang, type Lang } from "./languages";

export type { Lang } from "./languages";
export { LANGUAGES } from "./languages";

/**
 * Translation dictionary keyed by the exact English source text as rendered.
 * Anything missing simply stays in English.
 *
 * Sync core = chrome/nav/common UI in baseDictionary only. Heavy page packs
 * load via dynamic import() through ensureDictionaryReady(lang, { scopes })
 * so English first paint does not ship ~1.1MB of DE/UK copy, and DE/UK
 * routes only pull the packs their path needs (home / news / wiso / all).
 */
type EditedLang = "de" | "uk";

const baseDictionary: Record<EditedLang, Record<string, string>> = {
  de: {
    // Navigation / chrome
    "Exam info": "Prüfungsinfos",
    "Demo Practice": "Demo-Übung",
    "Demo-Practice": "Demo-Übung",
    "Demo-course": "Demo-Kurs",
    "Demo Exam": "Demo-Prüfung",
    "How it works": "So funktioniert's",
    "WiSo oder BBE": "WiSo oder BBE",
    Products: "Produkte",
    Features: "Funktionen",
    News: "Neuigkeiten",
    FAQ: "FAQ",
    Practice: "Übung",
    "Mock Exams": "Probeprüfungen",
    "Mock Builder": "Prüfungs-Builder",
    "Practice Tasks": "Übungsaufgaben",
    "Study tools": "Lernwerkzeuge",
    Reviews: "Bewertungen",
    "Full Course": "Vollkurs",
    Dashboard: "Dashboard",
    "Sign in": "Anmelden",
    "Sign up": "Registrieren",
    "Log in": "Anmelden",
    "Log out": "Abmelden",
    Account: "Konto",
    "Toggle color theme": "Farbdarstellung umschalten",
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
    "Step by step preparation for your 2027 WU BBE exam":
      "Schritt-für-Schritt-Vorbereitung auf deine WU-BBE-Prüfung 2027",
    "Step by step preparation for your 2027 WU exam":
      "Schritt-für-Schritt-Vorbereitung auf deine WU-Prüfung 2027",
    "Step by step preparation for your 2027 WU WiSo exam":
      "Schritt-für-Schritt-Vorbereitung auf deine WU-WiSo-Prüfung 2027",
    "Your 2027 WU WiSo exam, prepared one stage at a time":
      "Deine WU-WiSo-Prüfung 2027, vorbereitet Stufe für Stufe",
    "WiSo and BBE": "WiSo und BBE",
    "WiSo, BBE, and Hybrid": "WiSo, BBE und Hybrid",
    "One platform. Two entrance exams. Pick the path that matches how you want to study at WU Vienna.":
      "Eine Plattform. Zwei Aufnahmeprüfungen. Wähle den Weg, der zu deinem Studium an der WU Wien passt.",
    "Enter BBE preparation": "Zur BBE-Vorbereitung",
    "Enter WiSo preparation": "Zur WiSo-Vorbereitung",
    "Coming soon": "Demnächst",
    "Learn more about the difference between the exams":
      "Mehr über die Unterschiede zwischen den Prüfungen erfahren",
    "Why Choose Us": "Warum wir",
    "Why Choose US": "Warum wir",
    "3,000+ practice questions": "3.000+ Übungsfragen",
    "3000+ questions": "3000+ Fragen",
    "Mock builder": "Prüfungs-Builder",
    "Full timed mock exams": "Vollständige timed Probeprüfungen",
    "Custom mock builder": "Eigener Prüfungs-Builder",
    "Flashcards, matching & drills": "Karteikarten, Matching & Drills",
    "Capital preservation": "Kapitalerhalt",
    "Top-tier outcomes": "Top-Karrierewege",
    "BBE preparation": "BBE-Vorbereitung",
    "WiSo preparation": "WiSo-Vorbereitung",
    "Master every detail and tactic of the actual exam.":
      "Beherrsche jedes Detail und jede Taktik der echten Prüfung.",
    "Try demo-practice": "Demo-Übung testen",
    "Demo course": "Demo-Kurs",
    "Demo mock": "Demo-Mock",
    "Free hard diagnostic": "Kostenlose harte Diagnose",
    "Free after sign-up": "Kostenlos nach Anmeldung",
    "Sign in to take the demo mock": "Anmelden, um den Demo-Mock zu starten",
    "The free demo course stays open without an account. The full timed demo mock needs a free registration first so we can save your attempt.":
      "Der kostenlose Demo-Kurs bleibt ohne Konto offen. Für den timed Demo-Mock brauchst du zuerst eine kostenlose Registrierung, damit wir deinen Versuch speichern können.",
    "Create a free account": "Kostenloses Konto erstellen",
    "Or try the demo course without registering →":
      "Oder den Demo-Kurs ohne Registrierung ausprobieren →",
    "50+ tasks for start": "50+ Aufgaben zum Start",
    "100+ questions": "100+ Fragen",
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
    "See why each statement is true or false":
      "Sieh, warum jede Aussage wahr oder falsch ist",
    "You work economics cases in the real exam format, 680+ questions in the Full Course. After you submit, tap Explanation beside any statement and read why it holds or fails, without leaving the solution.":
      "Du bearbeitest Wirtschafts-Fälle im echten Prüfungsformat, 680+ Fragen im Vollkurs. Nach dem Einreichen tippst du bei jeder Aussage auf Erklärung und liest, warum sie hält oder fällt, ohne die Lösung zu verlassen.",
    "Explore Economics": "Wirtschaft entdecken",
    "Practice under the same time pressure": "Übe unter demselben Zeitdruck",
    "Open a math task from the 2,800-question bank, turn on timed mode, and use the exam calculator. When you finish, walk through the full solution step by step until the method sticks.":
      "Öffne eine Mathe-Aufgabe aus dem 2.800-Fragen-Bank, schalte den Timed Mode ein und nutze den Prüfungsrechner. Danach gehst du die volle Lösung Schritt für Schritt durch, bis die Methode sitzt.",
    "Explore Math": "Mathematik entdecken",
    "Jump from the explanation back into the passage":
      "Springe von der Erklärung zurück in den Text",
    "Answer statements on a reading passage from the 700+ English bank. Then use Show in text to jump from each explanation to the exact lines that support it.":
      "Beantworte Aussagen zu einem Lesetext aus der 700+-Englisch-Bank. Mit Show in text springst du von jeder Erklärung zu den genauen Zeilen, die sie stützen.",
    "Explore English": "Englisch entdecken",
    "See why each statement holds or fails":
      "Sieh, warum jede Aussage hält oder fällt",
    "You work Wirtschaft verstehen cases in the exam format. After you submit, open the full solution and tap Explanation beside any statement to see the reasoning.":
      "Du bearbeitest Wirtschaft-verstehen-Fälle im Prüfungsformat. Nach dem Einreichen öffnest du die volle Lösung und tippst bei jeder Aussage auf Erklärung, um die Begründung zu sehen.",
    "Open a WiSo math task, switch on timed mode, and use the calculator. After you submit, read the full solution so the method sticks under German wording.":
      "Öffne eine WiSo-Mathe-Aufgabe, schalte den Timed Mode ein und nutze den Rechner. Nach dem Einreichen liest du die volle Lösung, bis die Methode unter deutschem Wording sitzt.",
    "Jump from the explanation back into the text":
      "Springe von der Erklärung zurück in den Text",
    "Work a German reading passage with statements, submit your answers, then use Show in text to jump from each explanation back to the exact lines in the text.":
      "Bearbeite einen deutschen Lesetext mit Aussagen, reiche ein und springe mit Show in text von jeder Erklärung zurück zu den genauen Zeilen im Text.",
    "Explore German": "Deutsch entdecken",
    "Full-length exam simulations": "Vollständige Prüfungssimulationen",
    "Build a mock around your weak spots": "Baue eine Probeprüfung um deine Schwachstellen",
    "Choose the chapters and subtopics you struggle with, set the mix and question count, then start. You get a timed mock drawn from the Full Course, not a random paper.":
      "Wähle die Kapitel und Unterthemen, bei denen du schwächelst, stelle Mix und Fragenanzahl ein und starte. Du bekommst eine timed Probeprüfung aus dem Vollkurs, kein Zufallspapier.",
    "Open Mock Builder": "Prüfungs-Builder öffnen",
    "Finish the paper and read the result": "Beende die Prüfung und lies das Ergebnis",
    "Answer one English question, one math question, and one economics question on the 34-question mock. After you submit, the results chart shows how long each of the 34 questions took. Open Tasks and read the explanations.":
      "Beantworte eine Englisch-, eine Mathe- und eine Wirtschaftsaufgabe in der Probeprüfung mit 34 Aufgaben. Nach dem Abgeben zeigt das Ergebnisdiagramm, wie lange jede der 34 Aufgaben gedauert hat. Öffne Aufgaben und lies die Erklärungen.",
    "Open Mock Exams": "Probeprüfungen öffnen",
    Theory: "Theorie",
    "Read the theory the tasks assume": "Lies die Theorie, die die Aufgaben voraussetzen",
    "Every Full Course chapter has its own theory reader: the definitions, the formulas, and the reasoning the true and false statements rely on. Open any chapter and read the part you need before you practice.":
      "Jedes Kapitel im Vollkurs hat einen eigenen Theorie-Reader: Definitionen, Formeln und die Begründung, auf der die Richtig-falsch-Aussagen aufbauen. Öffne ein beliebiges Kapitel und lies den Teil, den du brauchst, bevor du übst.",
    "Open Math theory": "Mathe-Theorie öffnen",
    Flashcards: "Karteikarten",
    Matching: "Matching",
    "Tutor Exam": "Tutor-Prüfung",
    "Flip cards until the terms stick": "Drehe Karten, bis die Begriffe sitzen",
    "Go through economics definitions, math formulas, and English vocabulary. Flip each card, mark how well you know it, and keep going until recall feels automatic.":
      "Geh Wirtschaftsdefinitionen, Matheformeln und Englisch-Vokabeln durch. Drehe jede Karte, markiere, wie gut du sie kannst, und mach weiter, bis der Abruf automatisch sitzt.",
    "Go through Wirtschaft verstehen terms, math formulas, and German reading vocabulary. Flip each card, mark how well you know it, and keep going until recall feels automatic.":
      "Geh Wirtschaft-verstehen-Begriffe, Matheformeln und Deutsch-Lesewortschatz durch. Drehe jede Karte, markiere, wie gut du sie kannst, und mach weiter, bis der Abruf automatisch sitzt.",
    "Open Flashcards": "Karteikarten öffnen",
    "Match each term to its meaning": "Ordne jedem Begriff seine Bedeutung zu",
    "Pair terms with definitions on a timed board. Same decks as the flashcards, just a different way to practice.":
      "Paare Begriffe mit Definitionen auf einem Timed-Board. Dieselben Decks wie die Karteikarten, nur eine andere Übungsform.",
    "Pair terms with definitions on a timed board. Same WiSo decks as the flashcards, just a different way to practice.":
      "Paare Begriffe mit Definitionen auf einem Timed-Board. Dieselben WiSo-Decks wie die Karteikarten, nur eine andere Übungsform.",
    "Open Matching": "Matching öffnen",
    "Quiz yourself on theory": "Quizze dich zur Theorie",
    "Each run gives you a fresh set of theory questions. Answer, get instant feedback, and keep going until the wording feels familiar.":
      "Jeder Durchlauf bringt dir ein frisches Set Theoriefragen. Antworte, hol dir Sofortfeedback und mach weiter, bis das Wording vertraut wirkt.",
    "Each run gives you a fresh set of WiSo theory questions. Answer, get instant feedback, and keep going until the wording feels familiar.":
      "Jeder Durchlauf bringt dir ein frisches Set WiSo-Theoriefragen. Antworte, hol dir Sofortfeedback und mach weiter, bis das Wording vertraut wirkt.",
    "Open Tutor Exam": "Tutor-Prüfung öffnen",
    "Zoom in": "Vergrößern",
    "Zoom out": "Verkleinern",
    "Close zoom": "Vergrößerung schließen",

    // Products
    "Demo-Practice Package": "Demo-Übungspaket",
    "A free trial with 50+ starter cases across all three subjects, with step by step explanations of the exam format.":
      "Ein kostenloser Test mit 50+ Einstiegsaufgaben in allen drei Fächern samt Schritt-für-Schritt-Erklärungen zum Prüfungsformat.",
    "Visit for free": "Kostenlos ansehen",
    "Full BBE Course": "BBE-Vollkurs",
    "3,512 questions across Economics, Mathematics and English, plus 6+ mock exams, a study assistant, and clear task breakdowns.":
      "3.512 Fragen in Economics, Mathematik und Englisch, plus 6+ Probeprüfungen, ein Lernassistent und klare Aufgabenaufschlüsselungen.",
    "Buy course · €411": "Kurs kaufen · 411 €",
    "Unlock full access": "Vollzugang freischalten",
    "Start Practicing": "Jetzt üben",
    "✓ 100% Free • Instant web access": "✓ 100 % kostenlos • Sofortiger Web-Zugang",

    // Full course feature grid
    "3 Subjects": "3 Fächer",
    "Math, English, and Business & Economics, fully covered.":
      "Mathematik, Englisch sowie Wirtschaft & Business, vollständig abgedeckt.",
    "3,512 Questions": "3.512 Fragen",
    "A constantly growing question bank across every chapter.":
      "Eine ständig wachsende Fragendatenbank für jedes Kapitel.",
    "Direct Support": "Direkter Support",
    "Real answers from real people, not a bot ticket queue.":
      "Echte Antworten von echten Menschen, keine Bot-Warteschlange.",
    "A written explanation for every question.": "Eine schriftliche Erklärung zu jeder Frage.",
    "6+ Mock Exams": "6+ Probeprüfungen",
    "Full-length simulations under real exam conditions and timing.":
      "Vollständige Simulationen unter echten Prüfungsbedingungen und Zeitvorgaben.",
    "Special Features": "Besondere Funktionen",
    "Exclusive tools you won't find in any other prep course.":
      "Exklusive Tools, die kein anderer Vorbereitungskurs bietet.",

    // Lite course
    "AI-powered explanations": "Erklärungen",
    "For every question you attempt, a breakdown of the reasoning behind the answer.":
      "Zu jeder bearbeiteten Frage eine Analyse der Logik hinter der Antwort.",
    "2 full-length timed mock exams": "2 vollständige Probeprüfungen auf Zeit",
    "Test yourself under real conditions and discover where you stand before the real exam.":
      "Teste dich unter echten Bedingungen und finde vor der Prüfung heraus, wo du stehst.",
    "500+ exam-style practice tasks": "500+ prüfungsnahe Übungsaufgaben",
    "Math, English, and Business & Economics, covering the exam chapters.":
      "In Mathematik, Englisch und Wirtschaft, über die Prüfungskapitel.",
    "Community support": "Community-Support",
    "Connect with other applicants working through the same material.":
      "Vernetze dich mit anderen Bewerbern, die dasselbe Material durcharbeiten.",
    "Core theory coverage": "Kerntheorie abgedeckt",
    "All three subjects covered with focused theory that supports the practice, not overwhelms it.":
      "Alle drei Fächer mit fokussierter Theorie, die die Praxis unterstützt statt überfordert.",
    "Curated working set": "Kuratiertes Aufgabenset",
    "A working set taken from the full question bank for early prep.":
      "Ein Aufgabenset aus unserer vollständigen Fragendatenbank für die frühe Vorbereitung.",

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
    "Demo Exam": "Демо-іспит",
    "How it works": "Як це працює",
    "WiSo oder BBE": "WiSo чи BBE",
    Products: "Продукти",
    Features: "Можливості",
    News: "Новини",
    FAQ: "Часті запитання",
    Practice: "Практика",
    "Mock Exams": "Пробні іспити",
    "Mock Builder": "Конструктор іспитів",
    "Practice Tasks": "Практичні завдання",
    "Study tools": "Навчальні інструменти",
    Reviews: "Відгуки",
    "Full Course": "Повний курс",
    Dashboard: "Кабінет",
    "Sign in": "Увійти",
    "Sign up": "Зареєструватися",
    "Log in": "Увійти",
    "Log out": "Вийти",
    Account: "Акаунт",
    "Toggle color theme": "Перемкнути тему",
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
    "Step by step preparation for your 2027 WU BBE exam":
      "Покрокова підготовка до іспиту WU BBE 2027",
    "Step by step preparation for your 2027 WU exam":
      "Покрокова підготовка до іспиту WU 2027",
    "Step by step preparation for your 2027 WU WiSo exam":
      "Покрокова підготовка до іспиту WU WiSo 2027",
    "Your 2027 WU WiSo exam, prepared one stage at a time":
      "Твій іспит WU WiSo 2027, підготовка крок за кроком",
    "WiSo and BBE": "WiSo та BBE",
    "WiSo, BBE, and Hybrid": "WiSo, BBE і Hybrid",
    "One platform. Two entrance exams. Pick the path that matches how you want to study at WU Vienna.":
      "Одна платформа. Два вступні іспити. Обери шлях, який відповідає тому, як ти хочеш навчатися у WU Vienna.",
    "Enter BBE preparation": "Перейти до підготовки BBE",
    "Enter WiSo preparation": "Перейти до підготовки WiSo",
    "Coming soon": "Незабаром",
    "Learn more about the difference between the exams":
      "Дізнатися більше про різницю між іспитами",
    "Why Choose Us": "Чому ми",
    "Why Choose US": "Чому ми",
    "3,000+ practice questions": "3 000+ практичних питань",
    "3000+ questions": "3000+ питань",
    "Mock builder": "Конструктор іспитів",
    "Full timed mock exams": "Повні пробні іспити на час",
    "Custom mock builder": "Власний конструктор іспитів",
    "Flashcards, matching & drills": "Картки, matching і тренування",
    "Capital preservation": "Збереження капіталу",
    "Top-tier outcomes": "Топ-кар’єрні результати",
    "BBE preparation": "Підготовка BBE",
    "WiSo preparation": "Підготовка WiSo",
    "Master every detail and tactic of the actual exam.":
      "Опануй кожну деталь і тактику справжнього іспиту.",
    "Try demo-practice": "Спробувати демо-практику",
    "Demo course": "Демо-курс",
    "Demo mock": "Демо-мок",
    "Free hard diagnostic": "Безкоштовна складна діагностика",
    "Free after sign-up": "Безкоштовно після реєстрації",
    "Sign in to take the demo mock": "Увійди, щоб скласти демо-мок",
    "The free demo course stays open without an account. The full timed demo mock needs a free registration first so we can save your attempt.":
      "Безкоштовний демо-курс доступний без акаунта. Повний timed демо-мок потребує безкоштовної реєстрації, щоб зберегти спробу.",
    "Create a free account": "Створити безкоштовний акаунт",
    "Or try the demo course without registering →":
      "Або спробуй демо-курс без реєстрації →",
    "50+ tasks for start": "50+ завдань для старту",
    "100+ questions": "100+ питань",
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
    "See why each statement is true or false":
      "Побач, чому кожне твердження правильне чи хибне",
    "You work economics cases in the real exam format, 680+ questions in the Full Course. After you submit, tap Explanation beside any statement and read why it holds or fails, without leaving the solution.":
      "Ти розбираєш кейси з економіки в реальному форматі іспиту, 680+ питань у повному курсі. Після здачі натисни Пояснення біля будь-якого твердження й прочитай, чому воно тримається чи падає, не виходячи з розв’язку.",
    "Explore Economics": "До економіки",
    "Practice under the same time pressure": "Тренуйся під тим самим часовим тиском",
    "Open a math task from the 2,800-question bank, turn on timed mode, and use the exam calculator. When you finish, walk through the full solution step by step until the method sticks.":
      "Відкрий задачу з математики з банку на 2800 питань, увімкни таймер і скористайся калькулятором іспиту. Потім пройди повний розв’язок крок за кроком, доки метод не закріпиться.",
    "Explore Math": "До математики",
    "Jump from the explanation back into the passage":
      "Перейди з пояснення назад у текст",
    "Answer statements on a reading passage from the 700+ English bank. Then use Show in text to jump from each explanation to the exact lines that support it.":
      "Відповідай на твердження до тексту з банку 700+ англійських питань. Show in text перекидає з кожного пояснення до точних рядків, які його підтверджують.",
    "Explore English": "До англійської",
    "See why each statement holds or fails":
      "Побач, чому кожне твердження тримається чи падає",
    "You work Wirtschaft verstehen cases in the exam format. After you submit, open the full solution and tap Explanation beside any statement to see the reasoning.":
      "Ти розбираєш кейси Wirtschaft verstehen у форматі іспиту. Після здачі відкрий повний розв’язок і натисни Пояснення біля будь-якого твердження, щоб побачити логіку.",
    "Open a WiSo math task, switch on timed mode, and use the calculator. After you submit, read the full solution so the method sticks under German wording.":
      "Відкрий задачу з математики WiSo, увімкни таймер і скористайся калькулятором. Після здачі прочитай повний розв’язок, щоб метод закріпився під німецьким формулюванням.",
    "Jump from the explanation back into the text":
      "Перейди з пояснення назад у текст",
    "Work a German reading passage with statements, submit your answers, then use Show in text to jump from each explanation back to the exact lines in the text.":
      "Розбери німецький текст із твердженнями, надішли відповіді, тоді Show in text поверне з кожного пояснення до точних рядків у тексті.",
    "Explore German": "До німецької",
    "Full-length exam simulations": "Повноформатні симуляції іспиту",
    "Build a mock around your weak spots": "Збери пробний іспит під свої слабкі місця",
    "Choose the chapters and subtopics you struggle with, set the mix and question count, then start. You get a timed mock drawn from the Full Course, not a random paper.":
      "Обери розділи й підтеми, де ти слабший, задай мікс і кількість питань і стартуй. Отримаєш timed пробний іспит із повного курсу, не випадковий варіант.",
    "Open Mock Builder": "Відкрити конструктор іспитів",
    "Finish the paper and read the result": "Закінчи пробний іспит і прочитай результат",
    "Answer one English question, one math question, and one economics question on the 34-question mock. After you submit, the results chart shows how long each of the 34 questions took. Open Tasks and read the explanations.":
      "Дай відповідь на одне питання з англійської, одне з математики й одне з економіки в пробному іспиті на 34 завдання. Після здачі графік результату показує, скільки часу пішло на кожне з 34 завдань. Відкрий Завдання і прочитай пояснення.",
    "Open Mock Exams": "Відкрити пробні іспити",
    Theory: "Теорія",
    "Read the theory the tasks assume": "Прочитай теорію, на яку спираються завдання",
    "Every Full Course chapter has its own theory reader: the definitions, the formulas, and the reasoning the true and false statements rely on. Open any chapter and read the part you need before you practice.":
      "У кожного розділу повного курсу є своя теорія: означення, формули і хід думки, на якому тримаються твердження «правильно» і «неправильно». Відкрий будь-який розділ і прочитай потрібну частину перед практикою.",
    "Open Math theory": "Відкрити теорію математики",
    Flashcards: "Картки",
    Matching: "Matching",
    "Tutor Exam": "Tutor Exam",
    "Flip cards until the terms stick": "Перевертай картки, доки терміни не закріпляться",
    "Go through economics definitions, math formulas, and English vocabulary. Flip each card, mark how well you know it, and keep going until recall feels automatic.":
      "Пройди визначення з економіки, формули з математики та англійську лексику. Перевертай кожну картку, познач, наскільки добре її знаєш, і йди далі, доки пригадування не стане автоматичним.",
    "Go through Wirtschaft verstehen terms, math formulas, and German reading vocabulary. Flip each card, mark how well you know it, and keep going until recall feels automatic.":
      "Пройди терміни Wirtschaft verstehen, формули з математики та лексику німецького читання. Перевертай кожну картку, познач, наскільки добре її знаєш, і йди далі, доки пригадування не стане автоматичним.",
    "Open Flashcards": "Відкрити картки",
    "Match each term to its meaning": "Зістав кожен термін із значенням",
    "Pair terms with definitions on a timed board. Same decks as the flashcards, just a different way to practice.":
      "Зістав терміни з визначеннями на timed-дошці. Ті самі колоди, що й у картках, просто інший формат практики.",
    "Pair terms with definitions on a timed board. Same WiSo decks as the flashcards, just a different way to practice.":
      "Зістав терміни з визначеннями на timed-дошці. Ті самі колоди WiSo, що й у картках, просто інший формат практики.",
    "Open Matching": "Відкрити Matching",
    "Quiz yourself on theory": "Перевір себе з теорії",
    "Each run gives you a fresh set of theory questions. Answer, get instant feedback, and keep going until the wording feels familiar.":
      "Кожен запуск дає свіжий набір теорії. Відповідай, отримуй миттєвий фідбек і йди далі, доки формулювання не стане звичним.",
    "Each run gives you a fresh set of WiSo theory questions. Answer, get instant feedback, and keep going until the wording feels familiar.":
      "Кожен запуск дає свіжий набір теорії WiSo. Відповідай, отримуй миттєвий фідбек і йди далі, доки формулювання не стане звичним.",
    "Open Tutor Exam": "Відкрити Tutor Exam",
    "Zoom in": "Збільшити",
    "Zoom out": "Зменшити",
    "Close zoom": "Закрити збільшення",

    // Products
    "Demo-Practice Package": "Пакет демо-практики",
    "A free trial with 50+ starter cases across all three subjects, with step by step explanations of the exam format.":
      "Безкоштовна проба: 50+ стартових завдань із трьох предметів і покрокові пояснення формату іспиту.",
    "Visit for free": "Відкрити безкоштовно",
    "Full BBE Course": "Повний курс BBE",
    "3,512 questions across Economics, Mathematics and English, plus 6+ mock exams, a study assistant, and clear task breakdowns.":
      "3 512 питань з Economics, математики й англійської, плюс 6+ пробних іспитів, навчальний асистент і зрозумілі розбори задач.",
    "Buy course · €411": "Купити курс · €411",
    "Unlock full access": "Відкрити повний доступ",
    "Start Practicing": "Почати практику",
    "✓ 100% Free • Instant web access": "✓ 100% безкоштовно • Миттєвий доступ",

    // Full course feature grid
    "3 Subjects": "3 предмети",
    "Math, English, and Business & Economics, fully covered.":
      "Математика, англійська та бізнес і економіка, повністю покриті.",
    "3,512 Questions": "3 512 питань",
    "A constantly growing question bank across every chapter.":
      "База питань, що постійно зростає, з кожного розділу.",
    "Direct Support": "Пряма підтримка",
    "Real answers from real people, not a bot ticket queue.":
      "Справжні відповіді від людей, а не черга ботів.",
    "A written explanation for every question.": "Письмове пояснення до кожного питання.",
    "6+ Mock Exams": "6+ пробних іспитів",
    "Full-length simulations under real exam conditions and timing.":
      "Повноформатні симуляції у справжніх умовах і з таймінгом іспиту.",
    "Special Features": "Особливі можливості",
    "Exclusive tools you won't find in any other prep course.":
      "Ексклюзивні інструменти, яких немає в інших курсах.",

    // Lite course
    "AI-powered explanations": "Пояснення",
    "For every question you attempt, a breakdown of the reasoning behind the answer.":
      "До кожного питання розбір логіки відповіді.",
    "2 full-length timed mock exams": "2 повні пробні іспити на час",
    "Test yourself under real conditions and discover where you stand before the real exam.":
      "Перевір себе у реальних умовах і дізнайся свій рівень до іспиту.",
    "500+ exam-style practice tasks": "500+ завдань у форматі іспиту",
    "Math, English, and Business & Economics, covering the exam chapters.":
      "Математика, англійська та економіка, за розділами іспиту.",
    "Community support": "Підтримка спільноти",
    "Connect with other applicants working through the same material.":
      "Спілкуйся з іншими вступниками, які проходять той самий матеріал.",
    "Core theory coverage": "Базова теорія",
    "All three subjects covered with focused theory that supports the practice, not overwhelms it.":
      "Усі три предмети з чіткою теорією, що підтримує практику, а не перевантажує.",
    "Curated working set": "Добірний робочий набір",
    "A working set taken from the full question bank for early prep.":
      "Робочий набір із повної бази питань для ранньої підготовки.",

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

/**
 * Sync seed only. Heavy packs merge in later (same precedence as before:
 * later packs overwrite earlier; baseDictionary always wins).
 */
export const dictionary: Record<EditedLang, Record<string, string>> = {
  de: { ...baseDictionary.de },
  uk: { ...baseDictionary.uk },
};

/** Keys that lazy packs must never overwrite (hand-written chrome wins). */
const coreProtectedKeys: Record<EditedLang, Set<string>> = {
  de: new Set(Object.keys(dictionary.de)),
  uk: new Set(Object.keys(dictionary.uk)),
};

/** Same tables keyed by whitespace-collapsed text, for multi-line JSX nodes. */
const collapsedDictionary: Record<"de" | "uk", Record<string, string>> = {
  de: {},
  uk: {},
};

function indexCollapsed(lang: EditedLang, key: string, value: string) {
  const collapsed = key.replace(/\s+/g, " ").trim();
  if (collapsed && !(collapsed in collapsedDictionary[lang])) {
    collapsedDictionary[lang][collapsed] = value;
  }
}

function rebuildCollapsed(lang: EditedLang) {
  collapsedDictionary[lang] = {};
  for (const [key, value] of Object.entries(dictionary[lang])) {
    indexCollapsed(lang, key, value);
  }
}

for (const lang of ["de", "uk"] as const) {
  rebuildCollapsed(lang);
}

let packVersion = 0;
const packListeners = new Set<() => void>();

function emitPackVersion() {
  packVersion += 1;
  for (const listener of packListeners) listener();
}

/** Subscribe to lazy-pack merges (used by useDictionaryPackVersion). */
export function subscribeDictionaryPacks(listener: () => void): () => void {
  packListeners.add(listener);
  return () => packListeners.delete(listener);
}

export function getDictionaryPackVersion(): number {
  return packVersion;
}

function mergePack(lang: EditedLang, pack: Record<string, string>, protect: Set<string>) {
  const table = dictionary[lang];
  for (const [key, value] of Object.entries(pack)) {
    if (protect.has(key)) continue;
    if (typeof value !== "string" || !value) continue;
    table[key] = value;
  }
}

type PackSlice = Record<string, string>;

/** Route-scoped dictionary packs. `core` = sync baseDictionary only (no heavy load). */
export type DictionaryScope = "core" | "home" | "news" | "wiso" | "all";

type NamedPackLoader = {
  id: string;
  scope: Exclude<DictionaryScope, "core" | "all">;
  load: () => Promise<{ de: PackSlice; uk: PackSlice }>;
};

/**
 * Dynamic imports keep these out of the English first-paint graph.
 * Order matches the former static spread (later wins, then core protects).
 * Every pack still exists and loads when its scope (or `all`) is requested.
 */
const HEAVY_PACK_LOADERS: NamedPackLoader[] = [
  {
    id: "generated",
    scope: "home",
    load: () =>
      import("./generated").then((m) => ({ de: m.generatedDe, uk: m.generatedUk })),
  },
  {
    id: "extra",
    scope: "home",
    load: () => import("./extra").then((m) => ({ de: m.extraDe, uk: m.extraUk })),
  },
  {
    id: "ui-extra",
    scope: "home",
    load: () => import("./ui-extra").then((m) => ({ de: m.uiExtraDe, uk: m.uiExtraUk })),
  },
  {
    id: "features-extra",
    scope: "home",
    load: () =>
      import("./features-extra").then((m) => ({
        de: m.featuresExtraDe,
        uk: m.featuresExtraUk,
      })),
  },
  {
    id: "bbe-vs-wiso-extra",
    scope: "home",
    load: () =>
      import("./bbe-vs-wiso-extra").then((m) => ({
        de: m.bbeVsWisoExtraDe,
        uk: m.bbeVsWisoExtraUk,
      })),
  },
  {
    id: "wu-vienna-extra",
    scope: "home",
    load: () =>
      import("./wu-vienna-extra").then((m) => ({
        de: m.wuViennaExtraDe,
        uk: m.wuViennaExtraUk,
      })),
  },
  {
    id: "hub-gap-extra",
    scope: "home",
    load: () =>
      import("./hub-gap-extra").then((m) => ({
        de: m.hubGapExtraDe,
        uk: m.hubGapExtraUk,
      })),
  },
  {
    id: "home-extra",
    scope: "home",
    load: () => import("./home-extra").then((m) => ({ de: m.homeExtraDe, uk: m.homeExtraUk })),
  },
  {
    id: "wiso-hub-extra",
    scope: "wiso",
    load: () =>
      import("./wiso-hub-extra").then((m) => ({
        de: m.wisoHubExtraDe,
        uk: m.wisoHubExtraUk,
      })),
  },
  {
    id: "copy-voice-extra",
    scope: "home",
    load: () =>
      import("./copy-voice-extra").then((m) => ({
        de: m.copyVoiceExtraDe,
        uk: m.copyVoiceExtraUk,
      })),
  },
  {
    id: "news-extra",
    scope: "news",
    load: () => import("./news-extra").then((m) => ({ de: m.newsExtraDe, uk: m.newsExtraUk })),
  },
  {
    id: "news-body-extra",
    scope: "news",
    load: () =>
      import("./news-body-extra").then((m) => ({
        de: m.newsBodyExtraDe,
        uk: m.newsBodyExtraUk,
      })),
  },
  {
    id: "reviews-extra",
    scope: "home",
    load: () =>
      import("./reviews-extra").then((m) => ({
        de: m.reviewsChromeDe,
        uk: m.reviewsChromeUk,
      })),
  },
  {
    id: "acceptance-notes",
    scope: "home",
    load: () =>
      import("@/data/acceptance-notes").then((m) => ({
        de: m.acceptanceNoteDictionary("de"),
        uk: m.acceptanceNoteDictionary("uk"),
      })),
  },
];

const loadedPackSlices = new Map<string, { de: PackSlice; uk: PackSlice }>();
const mergedScopes = new Set<DictionaryScope>(["core"]);
let packsInflight: Promise<void> | null = null;
let packsInflightKey = "";

function rebuildDictionaryFromLoadedPacks() {
  for (const lang of ["de", "uk"] as const) {
    // Reset to sync core, then re-apply every loaded pack in canonical order
    // so scoped loads never invert later-wins precedence.
    dictionary[lang] = { ...baseDictionary[lang] };
    const protect = coreProtectedKeys[lang];
    for (const pack of HEAVY_PACK_LOADERS) {
      const slice = loadedPackSlices.get(pack.id);
      if (!slice) continue;
      mergePack(lang, slice[lang], protect);
    }
    rebuildCollapsed(lang);
  }
  emitPackVersion();
}

function normalizeScopes(scopes: DictionaryScope[] | undefined): DictionaryScope[] {
  if (!scopes || scopes.length === 0) return ["all"];
  const out = new Set<DictionaryScope>();
  for (const s of scopes) {
    if (s === "all") return ["all"];
    out.add(s);
  }
  out.add("core");
  return [...out];
}

/** Pick dictionary scopes from a locale or app pathname (locale prefix stripped). */
export function dictionaryScopesForPath(pathname: string): DictionaryScope[] {
  let path = pathname || "/";
  const m = path.match(/^\/(de|uk)(\/|$)/);
  if (m) {
    path = path.slice(m[1].length + 1) || "/";
  }
  path = path.replace(/\/+$/, "") || "/";

  if (path === "/news" || path.startsWith("/news/")) {
    return ["core", "news"];
  }
  // WiSo marketing shares FAQ/footer/chrome keys that live in home packs.
  // `wiso` alone left those strings English on /de/wiso and /uk/wiso.
  if (path === "/wiso" || path.startsWith("/wiso/")) {
    return ["core", "home", "wiso"];
  }
  if (
    path === "/" ||
    path === "/products" ||
    path.startsWith("/products/") ||
    path === "/bbe" ||
    path.startsWith("/bbe") ||
    path === "/hybrid" ||
    path === "/how-it-works" ||
    path === "/reviews" ||
    path === "/parents" ||
    path === "/important-features" ||
    path.startsWith("/features/") ||
    path === "/demo-practice" ||
    path.startsWith("/demo-practice/") ||
    path === "/demo-mock" ||
    path === "/login" ||
    path === "/signup" ||
    path === "/reset-password" ||
    path === "/account" ||
    path === "/terms" ||
    path === "/privacy" ||
    path === "/wu-vienna" ||
    path === "/bbe-vs-wiso" ||
    path === "/payment/success" ||
    path === "/payment/failed"
  ) {
    return ["core", "home"];
  }
  // Unknown / study surfaces: load everything so no strings are missing.
  return ["all"];
}

function loadersForScopes(scopes: DictionaryScope[]): NamedPackLoader[] {
  if (scopes.includes("all")) return HEAVY_PACK_LOADERS;
  const wanted = new Set(scopes);
  return HEAVY_PACK_LOADERS.filter((p) => wanted.has(p.scope));
}

async function mergeScopedPacks(scopes: DictionaryScope[]): Promise<void> {
  const normalized = normalizeScopes(scopes);
  if (normalized.includes("all") && loadedPackSlices.size === HEAVY_PACK_LOADERS.length) {
    mergedScopes.add("all");
    return;
  }
  if (
    !normalized.includes("all") &&
    normalized.every((s) => s === "core" || mergedScopes.has(s))
  ) {
    return;
  }

  const loaders = loadersForScopes(normalized).filter((p) => !loadedPackSlices.has(p.id));
  if (loaders.length === 0) {
    for (const s of normalized) mergedScopes.add(s);
    if (loadedPackSlices.size === HEAVY_PACK_LOADERS.length) mergedScopes.add("all");
    return;
  }

  const slices = await Promise.all(loaders.map((p) => p.load()));
  loaders.forEach((p, i) => {
    loadedPackSlices.set(p.id, slices[i]!);
  });
  for (const s of normalized) mergedScopes.add(s);
  if (loadedPackSlices.size === HEAVY_PACK_LOADERS.length) mergedScopes.add("all");
  rebuildDictionaryFromLoadedPacks();
}

export type EnsureDictionaryOptions = {
  /** Which pack groups to load. Defaults to `all` for safety when unknown. */
  scopes?: DictionaryScope[];
};

/**
 * Ensures requested DE/UK packs are loaded and merged. No-op for `en` / auto langs.
 * Safe to call from SSR beforeLoad (locale routes) and from the client.
 * Packs are cumulative — later calls only fetch scopes not yet merged.
 */
export function ensureDictionaryReady(
  lang: Lang,
  opts?: EnsureDictionaryOptions,
): Promise<void> {
  if (!isDictionaryLang(lang)) return Promise.resolve();
  const scopes = normalizeScopes(opts?.scopes);
  if (
    scopes.includes("all")
      ? loadedPackSlices.size === HEAVY_PACK_LOADERS.length
      : scopes.every((s) => s === "core" || mergedScopes.has(s))
  ) {
    return Promise.resolve();
  }

  const key = scopes.slice().sort().join(",");
  if (packsInflight && packsInflightKey === key) return packsInflight;

  // Coalesce overlapping in-flight work: await the prior batch, then merge.
  const prior = packsInflight;
  const run = async () => {
    if (prior) await prior;
    await mergeScopedPacks(scopes);
  };
  packsInflightKey = key;
  packsInflight = run().finally(() => {
    packsInflight = null;
    packsInflightKey = "";
  });
  return packsInflight;
}

/** True once every heavy pack has been merged (both DE and UK tables). */
export function isDictionaryReady(): boolean {
  return loadedPackSlices.size === HEAVY_PACK_LOADERS.length;
}

/**
 * Warm core+home packs after idle on EN so a later DE/UK home nav is snappy.
 * Does not pull news/wiso packs.
 */
export function scheduleDictionaryWarm(): void {
  if (mergedScopes.has("home") && mergedScopes.has("core")) return;
  if (typeof window === "undefined") return;

  const start = () => {
    void ensureDictionaryReady("de", { scopes: ["core", "home"] });
  };

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(() => start(), { timeout: 4000 });
  } else {
    setTimeout(start, 1500);
  }
}

export function translate(text: string, lang: Lang): string | null {
  if (!isDictionaryLang(lang)) return null;
  const table = dictionary[lang];
  const trimmed = text.trim();
  if (!trimmed) return null;
  const hit =
    table[trimmed] ?? collapsedDictionary[lang][trimmed.replace(/\s+/g, " ")];
  // Plain-object tables: ignore inherited keys such as "constructor".
  if (typeof hit !== "string" || !hit) return null;
  const [, lead = "", , trail = ""] = /^(\s*)([\s\S]*?)(\s*)$/.exec(text) ?? [];
  return `${lead}${hit}${trail}`;
}

/** Collapsed-key index of sync core only — never grows with lazy packs. */
const collapsedBaseDictionary: Record<EditedLang, Record<string, string>> = {
  de: {},
  uk: {},
};
for (const lang of ["de", "uk"] as const) {
  for (const [key, value] of Object.entries(baseDictionary[lang])) {
    const collapsed = key.replace(/\s+/g, " ").trim();
    if (collapsed && !(collapsed in collapsedBaseDictionary[lang])) {
      collapsedBaseDictionary[lang][collapsed] = value;
    }
  }
}

/**
 * Whether JSX should wrap a string in `I18nText`.
 * Uses ONLY the sync `baseDictionary` so SSR (packs already merged in
 * beforeLoad) and the client's first paint (packs not yet in module state)
 * build the same React tree. Lazy-pack hits still translate via `translate`
 * inside already-wrapped nodes once packs merge, and via PageTranslator
 * for strings that are pack-only.
 */
export function hasStaticTranslation(text: string): boolean {
  const trimmed = text.trim();
  if (!trimmed) return false;
  const collapsed = trimmed.replace(/\s+/g, " ");
  for (const lang of ["de", "uk"] as const) {
    const hit =
      baseDictionary[lang][trimmed] ?? collapsedBaseDictionary[lang][collapsed];
    if (typeof hit === "string" && hit) return true;
  }
  return false;
}
