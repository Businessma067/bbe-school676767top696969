/**
 * Gap-fill translations for strings that stayed English on DE/UK pages:
 * cycle dates, dynamic FAQ answers, scoring table fragments, homepage FAQs,
 * and prep-roadmap chrome.
 * Keys are the English source text as rendered (whitespace collapsed for lookup).
 */

export const hubGapExtraDe: Record<string, string> = {
  // ---------- Cycle / dates (2027) ----------
  "September 6, 2026": "6. September 2026",
  "Last updated: September 6, 2026": "Zuletzt aktualisiert: 6. September 2026",
  "June 30, 2027, 3:00 to 5:00 p.m. CEST": "30. Juni 2027, 15:00 bis 17:00 Uhr MESZ",
  "March to May 2027 (exact window announced by WU)":
    "März bis Mai 2027 (genaues Zeitfenster wird von der WU bekannt gegeben)",
  "Announced with the 2027 registration window":
    "Wird mit dem Anmeldezeitraum 2027 bekannt gegeben",
  "Until the 2027 BBE exam · 30 June": "Bis zur BBE-Prüfung 2027 · 30. Juni",

  // ---------- Dynamic FAQ answers ----------
  "240 places are referenced in the BBE Entrance Exam Guide overview.":
    "Im Überblick des BBE-Aufnahmeprüfungsleitfadens werden 240 Plätze genannt.",
  "BBE School practice scoring uses 60 points for Economics (10 tasks × 6), 31 for English (11 tasks; text 4 · grammar 3 · vocabulary 2), and 69 for Mathematics (14 tasks with per-question maxima), for 160 points overall. Approximate score weighting: Economics 37.5%, English 19%, Mathematics 43%.":
    "Die Übungsbewertung von BBE School verwendet 60 Punkte für Wirtschaft (10 Aufgaben × 6), 31 für Englisch (11 Aufgaben; Text 4 · Grammatik 3 · Wortschatz 2) und 69 für Mathematik (14 Aufgaben mit Maxima pro Frage), insgesamt 160 Punkte. Ungefähre Gewichtung: Wirtschaft 37,5 %, Englisch 19 %, Mathematik 43 %.",
  "Based on the most recent exam: 10 Economics & Business questions (approx. 37.5% score weighting) and 11 English questions (approx. 19% score weighting).":
    "Laut der letzten Prüfung: 10 Fragen Wirtschaft & Betriebswirtschaft (ca. 37,5 % Gewichtung) und 11 Englischfragen (ca. 19 % Gewichtung).",
  "Based on the most recent exam: 14 mathematics questions, with approximately 43% score weighting.":
    "Laut der letzten Prüfung: 14 Mathematikfragen mit etwa 43 % Gewichtung.",

  // ---------- Scoring page copy that diverged from generated keys ----------
  "In BBE School practice and mocks, task maxima follow the most recent exam’s published point distribution (Economics uniform; English by question type; Mathematics per task):":
    "In den Übungen und Probeprüfungen der BBE School folgen die Aufgabenmaxima der veröffentlichten Punkteverteilung der letzten Prüfung (Wirtschaft einheitlich; Englisch nach Fragetyp; Mathematik pro Aufgabe):",

  // ---------- Scoring page fragments ----------
  "Max / task": "Max. / Aufgabe",
  "Varies (3–7)": "Variiert (3–7)",
  "Mathematics points per question:": "Mathematikpunkte pro Frage:",
  "English by type:": "Englisch nach Typ:",
  each: "je",
  "points for text questions,": "Punkte für Textfragen,",
  "for grammar,": "für Grammatik,",
  "for vocabulary.": "für Wortschatz.",
  "For comparison, the WiSo written exam in the same cycle totaled":
    "Zum Vergleich umfasste die schriftliche WiSo-Prüfung im selben Zyklus insgesamt",
  "points.": "Punkte.",
  "(sum": "(Summe",
  "(floored at 0)": "(auf 0 begrenzt)",
  "Exam total": "Prüfung gesamt",
  Tasks: "Aufgaben",
  "Section total": "Abschnittssumme",
  "text 4 · grammar 3 · vocabulary 2": "Text 4 · Grammatik 3 · Wortschatz 2",

  // ---------- Homepage FAQ answers ----------
  "Yes, absolutely. Every single case in our database is engineered to replicate the real exam experience with maximum precision. We follow the official True/False framework with exactly 5 independent statements per case, completely eliminating blind guessing. Instead of just repeating standard definitions, our platform introduces the same intricate logical, timeline, and structural traps that match the high difficulty level of the actual university entrance test.":
    "Ja, absolut. Jeder einzelne Fall in unserer Datenbank ist so konstruiert, dass er das echte Prüfungserlebnis möglichst präzise abbildet. Wir folgen dem offiziellen Wahr/Falsch-Rahmen mit genau 5 unabhängigen Aussagen pro Fall und schließen so blindes Raten weitgehend aus. Statt nur Standarddefinitionen zu wiederholen, baut die Plattform dieselben kniffligen Logik-, Zeit- und Strukturfallen ein, die dem hohen Schwierigkeitsgrad der echten Aufnahmeprüfung entsprechen.",
  "Yes, our content engine tracks changes constantly to ensure perfect synchronization. All questions, formulas, and language parameters across all three subjects (Economics, Mathematics, and Language Proficiency) are dynamically updated to align strictly with the most recent university entry guidelines and the current versions of the official materials. You will never waste time practicing outdated concepts.":
    "Ja, unsere Content-Engine verfolgt Änderungen laufend, damit alles synchron bleibt. Alle Fragen, Formeln und Sprachparameter in den drei Fächern (Wirtschaft, Mathematik und Sprachkompetenz) werden dynamisch aktualisiert und strikt an die neuesten Zulassungsrichtlinien sowie die aktuellen offiziellen Materialien angeglichen. Du verschwendest keine Zeit mit veralteten Konzepten.",
  "Yes, this is directly solved by our signature feature: Isolated Tactical Explanations. The moment you click the check button, the simulator unfolds a dedicated breakdown directly beneath each individual statement, instantly revealing the exact logic or trap where most students struggle. Furthermore, your dashboard includes a dedicated Error Tracking Revision Block, allowing you to automatically filter and rerun only the specific cases you failed, ensuring you master your weakest topics before the exam day.":
    "Ja, genau dafür gibt es unsere Kernfunktion: Isolierte taktische Erklärungen. Sobald du auf Prüfen klickst, öffnet der Simulator unter jeder einzelnen Aussage eine eigene Analyse und zeigt sofort die genaue Logik oder Falle, an der die meisten scheitern. Im Dashboard gibt es außerdem einen Fehler-Tracking-Wiederholungsblock, mit dem du automatisch nur die Fälle filterst und erneut übst, die du falsch hattest – damit du deine Schwachstellen vor dem Prüfungstag meistern kannst.",
  "Yes, completely. You can run full Mock Tests that replicate the exact layout and strict time limits of the real exam day. To ensure a 100% authentic experience, we have integrated official Answer Sheets (Antwortbögen). You will practice transferring your choices under time pressure, eliminating any risk of formatting mistakes during the actual test.":
    "Ja, vollständig. Du kannst komplette Probeprüfungen absolvieren, die Layout und strikte Zeitlimits des echten Prüfungstags abbilden. Für ein möglichst authentisches Erlebnis haben wir offizielle Antwortbögen integriert. Du übst, deine Markierungen unter Zeitdruck zu übertragen – und reduzierst so das Risiko von Übertragungsfehlern in der echten Prüfung.",
  "Because we don't just give you plain textbooks—we provide a premium simulator with unique tools you won't find anywhere else on the market. We built exclusive, market-first features: Stress-Test Modules to handle exam pressure, Timing Tests to master your speed, and an automatic Revision Block to fix your mistakes. Combined with real answer sheet replicas and instant feedback, it is the only tool available that makes you 100% ready for the actual exam.":
    "Weil wir dir nicht nur einfache Lehrbücher geben – sondern einen Premium-Simulator mit einzigartigen Tools, die du sonst kaum findest. Wir haben exklusive Features gebaut: Stress-Test-Module für Prüfungsdruck, Timing-Tests für dein Tempo und einen automatischen Wiederholungsblock für Fehler. Zusammen mit realistischen Antwortbogen-Nachbildungen und sofortigem Feedback ist das das Tool, das dich wirklich prüfungstagfertig macht.",
  "The platform is fully responsive and optimized for all devices, including smartphones, tablets, and laptops. Every interactive True/False toggle, slide-down tactical explanation, and dashboard tracker is engineered to run flawlessly on any screen size. This cross-device optimization ensures you can maximize your preparation efficiency and practice high-stress exam tasks on the go, anytime and anywhere.":
    "Die Plattform ist vollständig responsiv und für alle Geräte optimiert – Smartphones, Tablets und Laptops. Jeder interaktive Wahr/Falsch-Schalter, jede ausklappbare taktische Erklärung und jeder Dashboard-Tracker läuft auf jeder Bildschirmgröße. So kannst du effizient vorbereiten und anspruchsvolle Prüfungsaufgaben unterwegs üben – jederzeit und überall.",
  "No, absolutely zero limits. Within each chapter, you can simply click the reset button and specifically choose which sections or question sets you want to clear. You can repeat this customizable reset process infinitely, allowing you to rerun the entire multi-subject question database 5, 10, or 20 times right up until your actual exam date to master your speed and analytical skills.":
    "Nein, absolut keine Limits. In jedem Kapitel kannst du zurücksetzen und gezielt wählen, welche Abschnitte oder Fragensets gelöscht werden. Diesen anpassbaren Reset kannst du beliebig oft wiederholen und die gesamte Mehrfach-Fragendatenbank 5-, 10- oder 20-mal bis zum Prüfungstag durchlaufen – für Tempo und Analysefähigkeit.",
  "Your premium access remains fully active until the official university entrance exam date for the current academic year concludes. You get continuous, unlimited access to the entire question database, error-tracking features, and all structural updates right up until you walk into the test room.":
    "Dein Premium-Zugang bleibt voll aktiv, bis der offizielle Termin der Aufnahmeprüfung für das aktuelle Studienjahr vorbei ist. Du hast durchgehend unbegrenzten Zugriff auf die gesamte Fragendatenbank, Fehler-Tracking und alle strukturellen Updates – bis du den Prüfungssaal betrittst.",

  // ---------- Homepage parents teaser (wording differs from /parents) ----------
  "The volume of competitors is not even the hardest part. The real difficulty is buried in the structural rules the university uses to break the field. Your child gets less than a minute per statement to scan a dense English passage or work through a data-sufficiency style problem entirely in their head. And at WU Vienna a wrong answer does not just score zero. The computer actively subtracts points from what the student got right elsewhere.":
    "Die Menge der Mitbewerber ist noch nicht einmal der schwerste Teil. Die eigentliche Schwierigkeit steckt in den strukturellen Regeln, mit denen die Universität das Feld aussiebt. Dein Kind hat weniger als eine Minute pro Aussage, um einen dichten englischen Text zu erfassen oder eine Aufgabe im Kopf zu lösen. Und an der WU Wien bringt eine falsche Antwort nicht einfach null Punkte: Der Computer zieht aktiv Punkte von dem ab, was sonst richtig war.",

  // ---------- Prep roadmap ----------
  "Free Demo": "Kostenlose Demo",
  "100+ tasks, 1 mock exam, all 3 subjects": "100+ Aufgaben, 1 Probeprüfung, alle 3 Fächer",
  "Build the Fundamentals": "Grundlagen aufbauen",
  "3000+ questions, self-paced": "3000+ Fragen, im eigenen Tempo",
  "Full Simulation": "Vollsimulation",
  "Interactive modes, customized mocks, and timed exam practice":
    "Interaktive Modi, individuelle Probeprüfungen und Timed Mode",
  "Exam Day": "Prüfungstag",
  "2027 BBE, WU Vienna": "BBE 2027, WU Wien",
  "you are here": "du bist hier",
  "Step by step preparation: Free Demo, Build the Fundamentals, Full Simulation, Exam Day":
    "Schritt-für-Schritt-Vorbereitung: Kostenlose Demo, Grundlagen aufbauen, Vollsimulation, Prüfungstag",

  // ---------- Visible chrome labels ----------
  "BBE School home": "BBE School Startseite",
  "BBE Exam sections": "BBE-Prüfungsbereiche",
  "Open case assistant": "Fall-Assistent öffnen",
  "Close case assistant": "Fall-Assistent schließen",
  "Change language": "Sprache ändern",
};

export const hubGapExtraUk: Record<string, string> = {
  // ---------- Cycle / dates (2027) ----------
  "September 6, 2026": "6 вересня 2026",
  "Last updated: September 6, 2026": "Оновлено: 6 вересня 2026",
  "June 30, 2027, 3:00 to 5:00 p.m. CEST": "30 червня 2027 р., з 15:00 до 17:00 за CEST",
  "March to May 2027 (exact window announced by WU)":
    "Березень–травень 2027 (точне вікно оголошує WU)",
  "Announced with the 2027 registration window":
    "Оголошується разом із періодом реєстрації 2027",
  "Until the 2027 BBE exam · 30 June": "До іспиту BBE 2027 · 30 червня",

  // ---------- Dynamic FAQ answers ----------
  "240 places are referenced in the BBE Entrance Exam Guide overview.":
    "В огляді посібника з вступного іспиту BBE зазначено 240 місць.",
  "BBE School practice scoring uses 60 points for Economics (10 tasks × 6), 31 for English (11 tasks; text 4 · grammar 3 · vocabulary 2), and 69 for Mathematics (14 tasks with per-question maxima), for 160 points overall. Approximate score weighting: Economics 37.5%, English 19%, Mathematics 43%.":
    "Система оцінювання практики BBE School використовує 60 балів за економіку (10 завдань × 6), 31 за англійську (11 завдань; текст 4 · граматика 3 · словник 2) і 69 за математику (14 завдань із максимумами за питання), загалом 160 балів. Приблизна вага: економіка 37,5 %, англійська 19 %, математика 43 %.",
  "Based on the most recent exam: 10 Economics & Business questions (approx. 37.5% score weighting) and 11 English questions (approx. 19% score weighting).":
    "За останнім іспитом: 10 питань з економіки та бізнесу (прибл. 37,5 % ваги) і 11 питань з англійської (прибл. 19 % ваги).",
  "Based on the most recent exam: 14 mathematics questions, with approximately 43% score weighting.":
    "За останнім іспитом: 14 питань з математики з приблизно 43 % ваги.",

  // ---------- Scoring page copy that diverged from generated keys ----------
  "In BBE School practice and mocks, task maxima follow the most recent exam’s published point distribution (Economics uniform; English by question type; Mathematics per task):":
    "У практиці та пробних іспитах BBE School максимуми завдань відповідають опублікованому розподілу балів останнього іспиту (економіка однаково; англійська за типом питання; математика за завданням):",

  // ---------- Scoring page fragments ----------
  "Max / task": "Макс. / завдання",
  "Varies (3–7)": "Варіюється (3–7)",
  "Mathematics points per question:": "Балів з математики за питання:",
  "English by type:": "Англійська за типом:",
  each: "кожна",
  "points for text questions,": "балів за текстові питання,",
  "for grammar,": "за граматику,",
  "for vocabulary.": "за словник.",
  "For comparison, the WiSo written exam in the same cycle totaled":
    "Для порівняння письмовий іспит WiSo в тому ж циклі мав загалом",
  "points.": "балів.",
  "(sum": "(сума",
  "(floored at 0)": "(обмежено до 0)",
  "Exam total": "Іспит загалом",
  Tasks: "Завдання",
  "Section total": "Сума розділу",
  "text 4 · grammar 3 · vocabulary 2": "текст 4 · граматика 3 · словник 2",

  // ---------- Homepage FAQ answers ----------
  "Yes, absolutely. Every single case in our database is engineered to replicate the real exam experience with maximum precision. We follow the official True/False framework with exactly 5 independent statements per case, completely eliminating blind guessing. Instead of just repeating standard definitions, our platform introduces the same intricate logical, timeline, and structural traps that match the high difficulty level of the actual university entrance test.":
    "Так, абсолютно. Кожен кейс у нашій базі створений так, щоб максимально точно відтворити реальний іспит. Ми дотримуємося офіційного формату True/False з рівно 5 незалежними твердженнями в кожному кейсі, майже виключаючи сліпе вгадування. Замість простого повторення стандартних визначень платформа додає ті самі логічні, часові та структурні пастки, що відповідають високій складності справжнього вступного тесту.",
  "Yes, our content engine tracks changes constantly to ensure perfect synchronization. All questions, formulas, and language parameters across all three subjects (Economics, Mathematics, and Language Proficiency) are dynamically updated to align strictly with the most recent university entry guidelines and the current versions of the official materials. You will never waste time practicing outdated concepts.":
    "Так, наш контент-рушій постійно відстежує зміни для повної синхронізації. Усі питання, формули та мовні параметри з трьох предметів (економіка, математика та мовна компетенція) динамічно оновлюються згідно з найновішими правилами вступу та актуальними офіційними матеріалами. Ви не витратите час на застарілі концепції.",
  "Yes, this is directly solved by our signature feature: Isolated Tactical Explanations. The moment you click the check button, the simulator unfolds a dedicated breakdown directly beneath each individual statement, instantly revealing the exact logic or trap where most students struggle. Furthermore, your dashboard includes a dedicated Error Tracking Revision Block, allowing you to automatically filter and rerun only the specific cases you failed, ensuring you master your weakest topics before the exam day.":
    "Так, саме для цього є наша ключова функція: ізольовані тактичні пояснення. Щойно ви натискаєте перевірку, симулятор розгортає розбір під кожним твердженням і миттєво показує логіку чи пастку, на якій більшість спотикається. У дашборді також є блок повторення помилок: можна автоматично відфільтрувати й перепроходити лише провалені кейси, щоб зміцнити слабкі теми до дня іспиту.",
  "Yes, completely. You can run full Mock Tests that replicate the exact layout and strict time limits of the real exam day. To ensure a 100% authentic experience, we have integrated official Answer Sheets (Antwortbögen). You will practice transferring your choices under time pressure, eliminating any risk of formatting mistakes during the actual test.":
    "Так, повністю. Ви можете проходити повноцінні пробні іспити з тим самим макетом і жорсткими лімітами часу, що й у реальний день. Для автентичності інтегровано офіційні бланки відповідей (Antwortbögen). Ви тренуєте перенесення відповідей під тиском часу — і зменшуєте ризик помилок оформлення на справжньому іспиті.",
  "Because we don't just give you plain textbooks—we provide a premium simulator with unique tools you won't find anywhere else on the market. We built exclusive, market-first features: Stress-Test Modules to handle exam pressure, Timing Tests to master your speed, and an automatic Revision Block to fix your mistakes. Combined with real answer sheet replicas and instant feedback, it is the only tool available that makes you 100% ready for the actual exam.":
    "Бо ми даємо не просто підручники — а преміум-симулятор з унікальними інструментами, яких майже немає на ринку. Ми збудували ексклюзивні функції: модулі стрес-тесту, тести на час і автоматичний блок повторення помилок. Разом із реалістичними бланками та миттєвим зворотним зв’язком це інструмент, який справді готує до реального іспиту.",
  "The platform is fully responsive and optimized for all devices, including smartphones, tablets, and laptops. Every interactive True/False toggle, slide-down tactical explanation, and dashboard tracker is engineered to run flawlessly on any screen size. This cross-device optimization ensures you can maximize your preparation efficiency and practice high-stress exam tasks on the go, anytime and anywhere.":
    "Платформа повністю адаптивна й оптимізована для смартфонів, планшетів і ноутбуків. Кожен інтерактивний перемикач True/False, розгортаєме тактичне пояснення та трекер у дашборді працюють на будь-якому екрані. Тож ви можете ефективно готуватися й тренувати складні завдання будь-де й будь-коли.",
  "No, absolutely zero limits. Within each chapter, you can simply click the reset button and specifically choose which sections or question sets you want to clear. You can repeat this customizable reset process infinitely, allowing you to rerun the entire multi-subject question database 5, 10, or 20 times right up until your actual exam date to master your speed and analytical skills.":
    "Ні, жодних лімітів. У кожному розділі можна скинути прогрес і обрати, які саме частини чи набори питань очистити. Цей налаштовуваний скид можна повторювати безмежно й проходити всю багатопредметну базу 5, 10 чи 20 разів аж до дня іспиту — щоб відточити швидкість і аналітику.",
  "Your premium access remains fully active until the official university entrance exam date for the current academic year concludes. You get continuous, unlimited access to the entire question database, error-tracking features, and all structural updates right up until you walk into the test room.":
    "Ваш преміум-доступ лишається активним до завершення офіційної дати вступного іспиту поточного навчального року. Ви маєте безперервний необмежений доступ до всієї бази питань, відстеження помилок і всіх структурних оновлень — аж до входу в іспитову залу.",

  // ---------- Homepage parents teaser ----------
  "The volume of competitors is not even the hardest part. The real difficulty is buried in the structural rules the university uses to break the field. Your child gets less than a minute per statement to scan a dense English passage or work through a data-sufficiency style problem entirely in their head. And at WU Vienna a wrong answer does not just score zero. The computer actively subtracts points from what the student got right elsewhere.":
    "Кількість конкурентів — навіть не найважча частина. Справжня складність у структурних правилах, якими університет відсіює поле. Вашій дитині менше хвилини на твердження, щоб прочитати щільний англійський текст або розв’язати задачу в голові. А у WU Vienna неправильна відповідь — це не просто нуль: комп’ютер активно віднімає бали від того, що вже було правильно.",

  // ---------- Prep roadmap ----------
  "Free Demo": "Безкоштовне демо",
  "100+ tasks, 1 mock exam, all 3 subjects": "100+ завдань, 1 пробний іспит, усі 3 предмети",
  "Build the Fundamentals": "Закласти основи",
  "3000+ questions, self-paced": "3000+ питань у власному темпі",
  "Full Simulation": "Повна симуляція",
  "Interactive modes, customized mocks, and timed exam practice":
    "Інтерактивні режими, кастомні пробні іспити та практика на час",
  "Exam Day": "День іспиту",
  "2027 BBE, WU Vienna": "BBE 2027, WU Відень",
  "you are here": "ви тут",
  "Step by step preparation: Free Demo, Build the Fundamentals, Full Simulation, Exam Day":
    "Покрокова підготовка: безкоштовне демо, основи, повна симуляція, день іспиту",

  // ---------- Visible chrome labels ----------
  "BBE School home": "Головна BBE School",
  "BBE Exam sections": "Розділи іспиту BBE",
  "Open case assistant": "Відкрити асистента кейсу",
  "Close case assistant": "Закрити асистента кейсу",
  "Change language": "Змінити мову",
};
