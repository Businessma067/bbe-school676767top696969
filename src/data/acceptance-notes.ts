export type AcceptanceTrack = "bbe" | "wiso" | "hybrid";

export type StarRating = 3 | 4 | 5;

type LangCopy = {
  quote: string;
  outcome: string;
};

export type AcceptanceNote = {
  id: string;
  track: AcceptanceTrack;
  name: string;
  city: string;
  /** English source. Shared month labels are translated once. */
  when: "July 2025" | "August 2025" | "July 2026" | "August 2026";
  outcome: string;
  stars: StarRating;
  /** Set when the student wrote in German. English stays in `quote`. */
  sourceLang?: "en" | "de";
  quote: string;
  de: LangCopy;
  uk: LangCopy;
};

export const ACCEPTANCE_NOTES: AcceptanceNote[] = [
  {
    id: "bbe-klara",
    track: "bbe",
    name: "Klara",
    city: "Salzburg",
    when: "July 2026",
    outcome: "Rank 156",
    stars: 4,
    quote: "I pretty much just open the mocks and then the explanation after, the other modes are there but I don't really go into them, and English feels a bit lighter than the rest which is my only thing, so the timed mocks are what I keep coming back to.",
    de: {
      outcome: "Rang 156",
      quote: "Ich mach eigentlich nur die Mocks auf und dann die Erklärung danach, die anderen Modi sind da aber ich geh da nicht wirklich rein, und Englisch fühlt sich ein bisschen leichter an als der Rest, das ist mein einziger Punkt, also sind die Mocks auf Zeit das, wo ich immer wieder lande.",
    },
    uk: {
      outcome: "Місце 156",
      quote: "Я по суті відкриваю тільки моки і потім пояснення після них, інші режими є, але я туди майже не заходжу, і англійська трохи легша за решту, це єдина моя штука, тож моки на час це те, куди я знову повертаюсь.",
    },
  },
  {
    id: "bbe-pavel",
    track: "bbe",
    name: "Pavel",
    city: "Brno",
    when: "August 2026",
    outcome: "Rank 84",
    stars: 5,
    quote: "My tutor spent two hours reading the textbook at me, and here I just see what I got wrong and there are different modes so I'm not doing the same thing every day, which I liked more.",
    de: {
      outcome: "Rang 84",
      quote: "Mein Nachhilfelehrer hat mir zwei Stunden das Lehrbuch vorgelesen, und hier seh ich einfach was falsch war und es gibt verschiedene Modi, also mach ich nicht jeden Tag dasselbe, und das war mir lieber.",
    },
    uk: {
      outcome: "Місце 84",
      quote: "Репетитор дві години читав мені підручник, а тут я просто бачу де помилився, і режимів кілька, тож не роблю одне й те саме щодня, і мені так більше сподобалось.",
    },
  },
  {
    id: "bbe-nika",
    track: "bbe",
    name: "Nika",
    city: "Warsaw",
    when: "July 2025",
    outcome: "Rank 203",
    stars: 5,
    quote: "When I sat, the economics questions were the ones that felt familiar, because the explanations had already caught me talking myself out of the right answer so I stopped guessing on those, and I did the same thing on the day.",
    de: {
      outcome: "Rang 203",
      quote: "Als ich geschrieben hab, waren die Wirtschaftsfragen die vertrauten, weil die Erklärungen mich schon erwischt hatten, wie ich mir die richtige Antwort ausrede, also hab ich da nicht mehr geraten, und am Tag hab ich dasselbe gemacht.",
    },
    uk: {
      outcome: "Місце 203",
      quote: "Коли я складала, економічні питання були знайомими, бо пояснення вже зловили, що я сама собі відмовляю правильну відповідь, тож там я перестала вгадувати, і на іспиті зробила так само.",
    },
  },
  {
    id: "bbe-emil",
    track: "bbe",
    name: "Emil",
    city: "Munich",
    when: "July 2026",
    outcome: "Rank 34",
    stars: 5,
    quote: "The English here isn't school English, one word in the question turns the meaning, and the explanation is what got me to stop translating every line, math I already knew so I barely opened that part.",
    de: {
      outcome: "Rang 34",
      quote: "Englisch hier ist kein Schulenglisch, ein Wort in der Frage dreht die Bedeutung, und die Erklärung ist das, weshalb ich nicht mehr jede Zeile übersetzt hab, Mathe konnte ich schon, den Teil hab ich kaum aufgemacht.",
    },
    uk: {
      outcome: "Місце 34",
      quote: "Англійська тут не шкільна, одне слово в питанні перевертає сенс, і пояснення це те, через що я перестав перекладати кожен рядок, математику я вже знав, тож той розділ майже не відкривав.",
    },
  },
  {
    id: "bbe-hana",
    track: "bbe",
    name: "Hana",
    city: "Prague",
    when: "July 2026",
    outcome: "Rank 128",
    stars: 5,
    quote: "The platform is good and there's enough material, I only got through about half and I still passed, so the tasks are more than enough.",
    de: {
      outcome: "Rang 128",
      quote: "Die Plattform ist gut und Material ist genug da, ich hab nur ungefähr die Hälfte geschafft und trotzdem bestanden, die Aufgaben reichen also mehr als aus.",
    },
    uk: {
      outcome: "Місце 128",
      quote: "Платформа хороша і матеріалу достатньо, я пройшла десь половину і все одно склала, тож завдань більш ніж вистачає.",
    },
  },
  {
    id: "bbe-andrei",
    track: "bbe",
    name: "Andrei",
    city: "Cluj",
    when: "August 2026",
    outcome: "Rank 176",
    stars: 3,
    quote: "So I sat down and I thought someone would walk me through the topics. They don't. You get the tasks and the explanations and you figure it out yourself. I still did the mocks, because I'd already opened them. If you want a teacher this isn't that, so I left it at 3.",
    de: {
      outcome: "Rang 176",
      quote: "Also ich hab mich hingesetzt und gedacht, da geht jemand die Themen mit mir durch. Tut keiner. Du bekommst die Aufgaben und die Erklärungen und musst es selbst rausfinden. Die Mocks hab ich trotzdem gemacht, weil ich sie schon aufgemacht hatte. Wer einen Lehrer will, ist hier falsch, deshalb eine 3.",
    },
    uk: {
      outcome: "Місце 176",
      quote: "Ну я сів і думав, хтось проведе мене по темах. Ніхто не проводить. Дають завдання і пояснення, і розбираєшся сам. Моки я все одно зробив, бо вже відкрив їх. Якщо хочеш викладача, це не те, тож лишив 3.",
    },
  },
  {
    id: "bbe-sara",
    track: "bbe",
    name: "Sara",
    city: "Innsbruck",
    when: "August 2025",
    outcome: "Rank 51",
    stars: 4,
    quote: "I liked all of it, but I personally don't think it suits everyone, because it's fully self-study and it's not for people who think the work will be done for them, you actually have to sit down and learn it yourself, and if you do that the platform is worth the money.",
    de: {
      outcome: "Rang 51",
      quote: "Mir hat alles gefallen, aber ich glaub persönlich nicht, dass es jedem passt, weil es reines Selbstlernen ist und nichts für Leute, die denken, die Arbeit wird für sie erledigt, man muss sich wirklich hinsetzen und es selbst lernen, und wenn man das tut, ist die Plattform das Geld wert.",
    },
    uk: {
      outcome: "Місце 51",
      quote: "Мені все сподобалось, але особисто думаю, що підійде не всім, бо це повністю самонавчання і точно не для тих, хто думає, що за них усе зроблять, треба реально сісти і вчитись самій, і якщо так робиш, платформа варта своїх грошей.",
    },
  },
  {
    id: "bbe-leon",
    track: "bbe",
    name: "Leon",
    city: "Vienna",
    when: "July 2026",
    outcome: "Rank 11",
    stars: 5,
    quote: "What I like is that unlike the other platforms I tried, the explanations actually help, because they go through the task from the start to the end and the feedback comes back really fast, and on the other sites I opened that just wasn't there.",
    de: {
      outcome: "Rang 11",
      quote: "Was mir gefällt ist, dass die Erklärungen wirklich helfen, anders als auf den anderen Plattformen, die ich probiert hab, weil sie die Aufgabe von vorne bis hinten durchgehen und das Feedback richtig schnell kommt, und auf den anderen Seiten, die ich aufgemacht hab, war das einfach nicht da.",
    },
    uk: {
      outcome: "Місце 11",
      quote: "Мені подобається, що на відміну від інших платформ, які я пробував, пояснення реально допомагають, бо вони розбирають завдання від початку до кінця і фідбек приходить дуже швидко, а на інших сайтах, які я відкривав, такого просто не було.",
    },
  },
  {
    id: "bbe-olena",
    track: "bbe",
    name: "Olena",
    city: "Lviv",
    when: "July 2026",
    outcome: "Rank 214",
    stars: 4,
    quote: "The beep on the math timer is very quiet and I miss it and then I guess the last few, and the correction takes those points which is fair, but if I only had a few weeks I'd still start with the mocks.",
    de: {
      outcome: "Rang 214",
      quote: "Der Piep beim Mathe-Timer ist sehr leise und ich überhör ihn und rat dann die letzten paar, und die Korrektur zieht die Punkte ab, was fair ist, aber hätt ich nur ein paar Wochen, würd ich trotzdem mit den Mocks anfangen.",
    },
    uk: {
      outcome: "Місце 214",
      quote: "Писк таймера з математики дуже тихий, я його пропускаю і потім вгадую останні кілька, і розбір знімає ті бали, це справедливо, але якби в мене було лише кілька тижнів, я б все одно почала з моків.",
    },
  },
  {
    id: "bbe-petra",
    track: "bbe",
    name: "Petra",
    city: "Wiener Neustadt",
    when: "July 2026",
    outcome: "Rank 67",
    stars: 5,
    quote: "Changing my answers at the end was a bad habit, and the breakdown after each mock kept showing me it made things worse, so by May I trusted the first read more, though on the day I still changed one.",
    de: {
      outcome: "Rang 67",
      quote: "Antworten am Ende noch zu ändern war eine blöde Angewohnheit, und die Auswertung nach jedem Mock hat mir immer wieder gezeigt, dass es schlechter wird, ab Mai hab ich dem ersten Lesen mehr getraut, am Tag hab ich trotzdem eine geändert.",
    },
    uk: {
      outcome: "Місце 67",
      quote: "Міняти відповіді в кінці була погана звичка, і розбір після кожного мока раз у раз показував, що від цього гірше, тож з травня я більше довіряла першому прочитанню, хоч на іспиті одну все одно змінила.",
    },
  },
  {
    id: "bbe-lukas",
    track: "bbe",
    name: "Lukáš",
    city: "Košice",
    when: "August 2026",
    outcome: "Rank 141",
    stars: 5,
    quote: "Worth the money.",
    de: {
      outcome: "Rang 141",
      quote: "Das Geld wert.",
    },
    uk: {
      outcome: "Місце 141",
      quote: "Варте своїх грошей.",
    },
  },
  {
    id: "bbe-iryna",
    track: "bbe",
    name: "Iryna",
    city: "Dnipro",
    when: "July 2025",
    outcome: "Rank 173",
    stars: 5,
    quote: "I do the tasks on my phone after work, one go is about 25 minutes which is all I have, and there's a lot of material so I haven't run out.",
    de: {
      outcome: "Rang 173",
      quote: "Die Aufgaben mach ich nach der Arbeit am Handy, ein Durchgang ist ungefähr 25 Minuten und mehr hab ich nicht, und Material ist viel da, mir ist noch keins ausgegangen.",
    },
    uk: {
      outcome: "Місце 173",
      quote: "Завдання роблю з телефона після роботи, один захід це десь 25 хвилин і більше в мене немає, матеріалу багато, тож мені ще не закінчився.",
    },
  },
  {
    id: "bbe-nikola",
    track: "bbe",
    name: "Nikola",
    city: "Belgrade",
    when: "July 2026",
    outcome: "Rank 92",
    stars: 5,
    quote: "Compared with the other options I looked at, this is the best one.",
    de: {
      outcome: "Rang 92",
      quote: "Im Vergleich zu den anderen, die ich angeschaut hab, ist das die beste Variante.",
    },
    uk: {
      outcome: "Місце 92",
      quote: "Порівняно з іншими варіантами, які я дивився, це найкращий.",
    },
  },
  {
    id: "bbe-felix",
    track: "bbe",
    name: "Felix",
    city: "Linz",
    when: "August 2025",
    outcome: "Rank 23",
    stars: 5,
    quote: "For this money the platform is really worth it, I like that there are so many modes that it doesn't get boring, and the mocks are there so I can actually go through the material, and then there's the mock builder, which I think is the best way to practice because I haven't seen it on any other platform, so for this price it's great.",
    de: {
      outcome: "Rang 23",
      quote: "Für das Geld ist die Plattform wirklich das wert, mir gefällt, dass es so viele Modi gibt, dass es nicht langweilig wird, und die Mocks sind da, also kann ich das Material wirklich durchgehen, und dann kommt der Mock Builder, den ich für die beste Art zu üben halt, weil ich den auf keiner anderen Plattform gesehen hab, also ist es für den Preis richtig gut.",
    },
    uk: {
      outcome: "Місце 23",
      quote: "За ці гроші платформа справді того варта, мені подобається, що режимів стільки, що не набридає, і моки є, тож матеріал можна реально пройти, а потім іде mock builder, який я вважаю найкращим способом практикуватись, бо на інших платформах я такого не бачив, тож за цю ціну це дуже добре.",
    },
  },
  {
    id: "bbe-camille",
    track: "bbe",
    name: "Camille",
    city: "Lyon",
    when: "July 2026",
    outcome: "Rank 109",
    stars: 5,
    quote: "The English business questions are what I wanted, and when I sat they were the part that felt familiar, friends' notes from WiSo didn't match this course, and math in here never slowed me down.",
    de: {
      outcome: "Rang 109",
      quote: "Die englischen Business-Fragen sind das, was ich wollte, und als ich geschrieben hab, war das der vertraute Teil, Notizen von Freunden aus WiSo haben zu diesem Kurs nicht gepasst, und Mathe darin hat mich nie aufgehalten.",
    },
    uk: {
      outcome: "Місце 109",
      quote: "Англійські бізнес-питання це те, що мені було треба, і коли я складала, саме вони були знайомими, нотатки друзів з WiSo до цього курсу не підходили, а математика тут мене ніколи не гальмувала.",
    },
  },
  {
    id: "bbe-marek",
    track: "bbe",
    name: "Marek",
    city: "Kraków",
    when: "July 2026",
    outcome: "Rank 231",
    stars: 5,
    quote: "I almost didn't pay, because my brother said every prep site is the same, and then I found the mock builder, which the others don't have, so I ended up on it most evenings.",
    de: {
      outcome: "Rang 231",
      quote: "Ich hätt fast nicht gezahlt, weil mein Bruder sagt, jede Vorbereitungsseite ist gleich, und dann hab ich den Mock Builder gefunden, den die anderen nicht haben, also war ich die meisten Abende dort.",
    },
    uk: {
      outcome: "Місце 231",
      quote: "Мало не заплатив, бо брат каже, що всі сайти для підготовки однакові, а потім я знайшов mock builder, якого в інших немає, тож більшість вечорів я потім сидів там.",
    },
  },
  {
    id: "bbe-tereza",
    track: "bbe",
    name: "Tereza",
    city: "Plzeň",
    when: "August 2026",
    outcome: "Rank 58",
    stars: 5,
    quote: "When I walked out of the exam I thought thank god I picked this course, because the tasks were about 90% like the ones here, only in math there was one probability question I hadn't seen, but I think they made the exam harder on purpose this year, and apart from that it was very close, and I did three mock exams and that prepared me really well.",
    de: {
      outcome: "Rang 58",
      quote: "Als ich aus der Prüfung kam, hab ich gedacht, Gott sei Dank hab ich diesen Kurs genommen, weil die Aufgaben ungefähr zu 90% wie die hier waren, nur in Mathe war eine Wahrscheinlichkeitsfrage, die ich nicht kannte, aber ich glaub, die Prüfung war dieses Jahr extra schwerer, und sonst war es sehr nah dran, und ich hab drei Mock-Prüfungen gemacht und das hat mich wirklich gut vorbereitet.",
    },
    uk: {
      outcome: "Місце 58",
      quote: "Коли я вийшла з іспиту, подумала, слава богу, що обрала цей курс, бо завдання були десь на 90% як тут, тільки в математиці було одне питання з probability, якого я не бачила, але я думаю, цього року іспит навмисно зробили складнішим, а так усе було дуже схоже, і я зробила три мок-іспити, і це мене дуже добре підготувало.",
    },
  },
  {
    id: "wiso-amelie",
    track: "wiso",
    name: "Amelie",
    city: "Vienna",
    when: "July 2025",
    outcome: "Rank 188",
    stars: 5,
    sourceLang: "de",
    quote: "Second time, first year I always left Sprachverständnis until I had nothing left and the score stuck there, this time I put that block first in the mocks and I went into the exam the same way, I still don't love the order but it was the right one.",
    de: {
      outcome: "Rang 188",
      quote: "Zweites Mal, im ersten Jahr hab ich Sprachverständnis immer nach hinten gelegt, bis nichts mehr da war, und der Score ist dort hängen geblieben, diesmal hab ich den Block in den Mocks zuerst gemacht und bin so in die Prüfung, die Reihenfolge mag ich immer noch nicht, aber sie war die richtige.",
    },
    uk: {
      outcome: "Місце 188",
      quote: "Удруге, першого року я завжди лишала Sprachverständnis на кінець, поки вже нічого не було, і бал там застряг, цього разу ставила цей блок у моках першим і так само зайшла на іспит, порядок мені досі не дуже, але він був правильний.",
    },
  },
  {
    id: "wiso-filip",
    track: "wiso",
    name: "Filip",
    city: "Bratislava",
    when: "July 2026",
    outcome: "Rank 2011",
    stars: 3,
    quote: "The tasks in May already had me in the back half and that's where I ended up, they didn't make my German better and the math is ordinary, I never thought a few months of this would fix that, so 3 from me, seeing it early was still worth it.",
    de: {
      outcome: "Rang 2011",
      quote: "Die Aufgaben im Mai hatten mich schon in der hinteren Hälfte und dort bin ich auch gelandet, mein Deutsch ist davon nicht besser geworden und Mathe ist gewöhnlich, ein paar Monate davon sollten das auch nicht richten, also eine 3 von mir, es früh zu sehen war trotzdem gut.",
    },
    uk: {
      outcome: "Місце 2011",
      quote: "Завдання в травні вже тримали мене в другій половині, і там я й опинився, німецьку вони мені не покращили, математика звичайна, кілька місяців цього німецьку й не мали виправити, тож від мене 3, рано це побачити все одно було варто.",
    },
  },
  {
    id: "wiso-theresa",
    track: "wiso",
    name: "Theresa",
    city: "Klagenfurt",
    when: "July 2026",
    outcome: "Rank 733",
    stars: 5,
    sourceLang: "de",
    quote: "My brother sent me stuff from the BBE course, different exam, it didn't do anything for my German, after a few days I left it, on WiSo the German questions are what I actually needed.",
    de: {
      outcome: "Rang 733",
      quote: "Mein Bruder hat mir Sachen aus dem BBE-Kurs geschickt, anderes Examen, für mein Deutsch hat das nichts gebracht, nach ein paar Tagen hab ich es liegen lassen, bei WiSo sind die deutschen Aufgaben das, was ich wirklich gebraucht hab.",
    },
    uk: {
      outcome: "Місце 733",
      quote: "Брат надіслав мені матеріали з курсу BBE, інший іспит, для моєї німецької це нічого не дало, через кілька днів я це залишила, на WiSo німецькі питання це те, що мені справді було треба.",
    },
  },
  {
    id: "wiso-marko",
    track: "wiso",
    name: "Marko",
    city: "Zagreb",
    when: "August 2026",
    outcome: "Rank 1340",
    stars: 5,
    quote: "The economics questions here are harder than school, in a good way, I kept missing the verb, and the explanations helped more than the grammar pages so I stopped opening those.",
    de: {
      outcome: "Rang 1340",
      quote: "Die Wirtschaftsfragen hier sind schwerer als in der Schule, im guten Sinn, das Verb hab ich dauernd verpasst, und die Erklärungen haben mehr gebracht als die Grammatikseiten, die hab ich dann nicht mehr aufgemacht.",
    },
    uk: {
      outcome: "Місце 1340",
      quote: "Економічні питання тут важчі, ніж у школі, у хорошому сенсі, дієслово я весь час пропускав, і пояснення допомогли більше за сторінки з граматики, тож я їх більше не відкривав.",
    },
  },
  {
    id: "wiso-jasmin",
    track: "wiso",
    name: "Jasmin",
    city: "St. Pölten",
    when: "July 2026",
    outcome: "Rank 96",
    stars: 5,
    sourceLang: "de",
    quote: "The mocks were like the exam.",
    de: {
      outcome: "Rang 96",
      quote: "Die Mocks waren wie die Prüfung.",
    },
    uk: {
      outcome: "Місце 96",
      quote: "Моки були як іспит.",
    },
  },
  {
    id: "wiso-henrik",
    track: "wiso",
    name: "Henrik",
    city: "Graz",
    when: "August 2026",
    outcome: "Rank 455",
    stars: 5,
    sourceLang: "de",
    quote: "Wirtschaft verstehen here isn't a summary of the book, my own summaries didn't look like the questions and they just confused me, so after a few weeks I dropped the summaries and did the cases, those are what I open.",
    de: {
      outcome: "Rang 455",
      quote: "Wirtschaft verstehen ist hier keine Zusammenfassung vom Buch, meine eigenen Zusammenfassungen haben nicht ausgeschaut wie die Fragen und haben mich nur verwirrt, nach ein paar Wochen hab ich die Zusammenfassungen sein lassen und die Fälle gemacht, die mach ich auf.",
    },
    uk: {
      outcome: "Місце 455",
      quote: "Wirtschaft verstehen тут це не конспект книжки, мої конспекти не були схожі на питання і тільки плутали, тож через кілька тижнів я конспекти залишив і робив кейси, їх я і відкриваю.",
    },
  },
  {
    id: "wiso-lara",
    track: "wiso",
    name: "Lara",
    city: "Bregenz",
    when: "July 2026",
    outcome: "Rank 1204",
    stars: 4,
    sourceLang: "de",
    quote: "In February I nearly switched to the BBE course because someone said the German one is just more crowded, but once I did the mocks it didn't feel harder, I still spent a month talking myself through it even though the tasks were fine the whole time, so 4 because of that month and not because of the platform.",
    de: {
      outcome: "Rang 1204",
      quote: "Im Februar wär ich fast auf den BBE-Kurs gewechselt, weil jemand meinte, der deutsche sei nur voller, aber als ich die Mocks gemacht hab, hat sich das nicht schwerer angefühlt, einen Monat hab ich trotzdem mit mir geredet, obwohl die Aufgaben die ganze Zeit in Ordnung waren, also 4 wegen dem Monat und nicht wegen der Plattform.",
    },
    uk: {
      outcome: "Місце 1204",
      quote: "У лютому я мало не перейшла на курс BBE, бо хтось сказав, що німецький просто більш людний, але коли я зробила моки, важче це не відчувалось, місяць я все одно проговорювала це сама з собою, хоча завдання весь час були нормальні, тож 4 через той місяць, а не через платформу.",
    },
  },
  {
    id: "wiso-svenja",
    track: "wiso",
    name: "Svenja",
    city: "Hamburg",
    when: "July 2025",
    outcome: "Rank 312",
    stars: 5,
    sourceLang: "de",
    quote: "I learned partial points here, school didn't have that, at the start I ticked everything in the mocks and one mock took the points straight off, so after that I left things blank, and on the exam I did the same.",
    de: {
      outcome: "Rang 312",
      quote: "Teilpunkte hab ich hier gelernt, in der Schule gab es das nicht, am Anfang hab ich in den Mocks alles angekreuzt und ein Mock hat die Punkte gleich abgezogen, danach hab ich Sachen leer gelassen, und auf der Prüfung genauso.",
    },
    uk: {
      outcome: "Місце 312",
      quote: "Часткові бали я зрозуміла тут, у школі такого не було, спочатку в моках я ставила все, і один мок одразу зняв бали, тож після того лишала порожнім, і на іспиті так само.",
    },
  },
  {
    id: "wiso-kristof",
    track: "wiso",
    name: "Kristóf",
    city: "Győr",
    when: "August 2026",
    outcome: "Rank 1677",
    stars: 4,
    quote: "Second time through, the grammar pages didn't add much and the short texts on most days moved me more, slowly, Sprachverständnis is still the part I like least so not a full 5, but it stopped dragging the rest down.",
    de: {
      outcome: "Rang 1677",
      quote: "Beim zweiten Durchgang haben die Grammatikseiten nicht viel gebracht und die kurzen Texte an den meisten Tagen haben mich mehr weitergebracht, langsam, Sprachverständnis ist immer noch der Teil, den ich am wenigsten mag, also keine volle 5, aber er hat den Rest nicht mehr runtergezogen.",
    },
    uk: {
      outcome: "Місце 1677",
      quote: "Удруге сторінки з граматики мало що дали, а короткі тексти майже щодня зрушували більше, повільно, Sprachverständnis досі частина, яка мені подобається найменше, тож не повні 5, але вона перестала тягнути решту вниз.",
    },
  },
  {
    id: "wiso-anja",
    track: "wiso",
    name: "Anja",
    city: "Maribor",
    when: "July 2026",
    outcome: "Rank 860",
    stars: 5,
    sourceLang: "de",
    quote: "I used to switch topic every 20 minutes and call that studying, the short mixed tasks stopped me doing that, my old notes were three subjects started and none of them finished, and the tasks are what I actually used from the course.",
    de: {
      outcome: "Rang 860",
      quote: "Ich hab alle 20 Minuten das Thema gewechselt und das Lernen genannt, die kurzen gemischten Aufgaben haben mich davon abgebracht, in den alten Notizen waren drei Fächer angefangen und keins fertig, die Aufgaben sind das, was ich vom Kurs wirklich benutzt hab.",
    },
    uk: {
      outcome: "Місце 860",
      quote: "Я міняла тему кожні 20 хвилин і називала це навчанням, короткі змішані завдання це зупинили, у старих нотатках три предмети почато і жоден не закінчено, і завдання це те, чим я справді користувалась з курсу.",
    },
  },
  {
    id: "wiso-denis",
    track: "wiso",
    name: "Denis",
    city: "Sarajevo",
    when: "July 2026",
    outcome: "Rank 248",
    stars: 5,
    quote: "I only do one full mock a week and I don't start the next one until I've read the explanation, otherwise I was just collecting scores, and I still open the German part in the weeks I don't feel like it.",
    de: {
      outcome: "Rang 248",
      quote: "Ich mach nur einen ganzen Mock pro Woche und den nächsten fang ich nicht an, bevor ich die Erklärung gelesen hab, sonst hab ich nur Punkte gesammelt, und den deutschen Teil mach ich auch in den Wochen auf, in denen ich keine Lust hab.",
    },
    uk: {
      outcome: "Місце 248",
      quote: "Роблю лише один повний мок на тиждень і наступний не починаю, поки не прочитаю пояснення, інакше я просто збирав бали, а німецьку частину все одно відкриваю тими тижнями, коли не хочеться.",
    },
  },
  {
    id: "hybrid-karolina",
    track: "hybrid",
    name: "Karolina",
    city: "Kraków",
    when: "July 2026",
    outcome: "BBE rank 88, and a WiSo place",
    stars: 5,
    quote: "Both tracks are in the one purchase, which is why I got it, my parents couldn't choose, math you only do once so I wasn't doing derivatives again in the other language, the language parts aren't the same thing, I took the BBE seat, and the WiSo tasks were there the whole time so I wasn't choosing blind.",
    de: {
      outcome: "BBE Rang 88, und ein WiSo-Platz",
      quote: "Beide Tracks sind in einem Kauf, deshalb hab ich ihn genommen, meine Eltern konnten sich nicht entscheiden, Mathe ist nur einmal, also hab ich Ableitungen nicht noch mal in der anderen Sprache gemacht, die Sprachteile sind nicht dasselbe, den BBE-Platz hab ich genommen, und die WiSo-Aufgaben waren die ganze Zeit da, also hab ich nicht blind gewählt.",
    },
    uk: {
      outcome: "BBE місце 88, і місце на WiSo",
      quote: "Обидва треки в одній покупці, тому я її і взяла, батьки не могли обрати, математика один раз, тож похідні іншою мовою я не переробляла, мовні частини це не одне й те саме, взяла місце на BBE, і завдання WiSo були весь час поруч, тож я обирала не наосліп.",
    },
  },
  {
    id: "hybrid-ben",
    track: "hybrid",
    name: "Ben",
    city: "Budapest",
    when: "August 2026",
    outcome: "Enrolled on WiSo",
    stars: 4,
    quote: "The English and the German aren't the same and I kept treating them like they were, in the first week I missed in German a question I'd just got right in English, so I stopped doing both languages on the same evening and I ended up on WiSo, it's a 4 because doing both is more work than it looks and the work itself is fine.",
    de: {
      outcome: "Auf WiSo eingeschrieben",
      quote: "Englisch und Deutsch sind nicht dasselbe und ich hab sie weiter behandelt, als wären sie es, in der ersten Woche lag ich auf Deutsch daneben bei einer Frage, die ich auf Englisch gerade richtig hatte, also hab ich danach nicht mehr beide Sprachen am selben Abend gemacht und bin auf WiSo gelandet, eine 4, weil beides mehr Arbeit ist, als es aussieht, und die Arbeit selbst ist in Ordnung.",
    },
    uk: {
      outcome: "Вступив на WiSo",
      quote: "Англійська і німецька це не одне й те саме, а я й далі ставився до них так, ніби одне, першого тижня промахнувся німецькою в питанні, яке щойно правильно зробив англійською, тож потім не робив обидві мови в один вечір і зрештою опинився на WiSo, це 4, бо обидві разом це більше роботи, ніж виглядає, а сама робота нормальна.",
    },
  },
  {
    id: "hybrid-yasmin",
    track: "hybrid",
    name: "Yasmin",
    city: "Vienna",
    when: "July 2026",
    outcome: "Took the BBE seat",
    stars: 5,
    sourceLang: "de",
    quote: "I kept both languages in the package, math once, and English and German not on the same day or I mix everything up, it's more than one course and for me that was right, I didn't have to drop a language halfway through.",
    de: {
      outcome: "Den BBE-Platz genommen",
      quote: "Beide Sprachen sind im Paket geblieben, Mathe einmal, und Englisch und Deutsch nicht am selben Tag, sonst bring ich alles durcheinander, mehr als ein Kurs und für mich hat das gepasst, ich musste mitten in der Vorbereitung keine Sprache streichen.",
    },
    uk: {
      outcome: "Взяла місце на BBE",
      quote: "Обидві мови лишились у пакеті, математика один раз, а англійська і німецька не в один день, інакше я все плутаю, це більше, ніж один курс, і для мене так було правильно, мову посеред підготовки викидати не довелось.",
    },
  },
];

const TRACKS: AcceptanceTrack[] = ["bbe", "wiso", "hybrid"];

export function notesFor(track: AcceptanceTrack): AcceptanceNote[] {
  return ACCEPTANCE_NOTES.filter((note) => note.track === track);
}

export function noteCount(track?: AcceptanceTrack): number {
  return track ? notesFor(track).length : ACCEPTANCE_NOTES.length;
}

export function noteById(id: string): AcceptanceNote {
  const note = ACCEPTANCE_NOTES.find((item) => item.id === id);
  if (!note) throw new Error(`Missing acceptance note ${id}`);
  return note;
}

/** Three pinned cards per landing page, taken from the longer list. */
export function pinnedNote(id: string, opts?: { fire?: boolean }) {
  const note = noteById(id);
  const german = note.sourceLang === "de";
  return {
    id: note.id,
    name: `${note.name}, ${note.city}`,
    quote: german ? note.de.quote : note.quote,
    english: note.quote,
    ukrainian: note.uk.quote,
    sourceLang: (note.sourceLang ?? "en") as "en" | "de",
    badge: note.outcome,
    fire: opts?.fire ?? false,
  };
}

/** One decimal, same rounding the page shows. 31 notes land on 4.7. */
export function averageStarsLabel(notes: readonly AcceptanceNote[] = ACCEPTANCE_NOTES): string {
  const sum = notes.reduce((total, note) => total + note.stars, 0);
  return (sum / notes.length).toFixed(1);
}

export function acceptanceNoteDictionary(lang: "de" | "uk"): Record<string, string> {
  const out: Record<string, string> = {};
  for (const note of ACCEPTANCE_NOTES) {
    out[note.quote] = note[lang].quote;
    out[note.outcome] = note[lang].outcome;
  }
  return out;
}

export const ACCEPTANCE_NOTE_COUNTS = {
  bbe: noteCount("bbe"),
  wiso: noteCount("wiso"),
  hybrid: noteCount("hybrid"),
  all: noteCount(),
} as const;

function wordCount(text: string): number {
  return text.trim().split(/\s+/).length;
}

function sentenceCount(text: string): number {
  return text.split(/[.!?]+/).filter((part) => part.trim()).length;
}

const starBuckets = new Set(ACCEPTANCE_NOTES.map((note) => note.stars));
const originals = ACCEPTANCE_NOTES.map((note) => (note.sourceLang === "de" ? note.de.quote : note.quote));

if (
  ACCEPTANCE_NOTE_COUNTS.bbe !== 17 ||
  ACCEPTANCE_NOTE_COUNTS.wiso !== 11 ||
  ACCEPTANCE_NOTE_COUNTS.hybrid !== 3 ||
  new Set(ACCEPTANCE_NOTES.map((note) => note.id)).size !== ACCEPTANCE_NOTES.length ||
  TRACKS.length !== 3 ||
  !starBuckets.has(3) ||
  !starBuckets.has(4) ||
  !starBuckets.has(5) ||
  averageStarsLabel() !== "4.7" ||
  ACCEPTANCE_NOTES.some(
    (note) =>
      note.quote !== note.quote.trim() ||
      note.quote.includes("??") ||
      !/[.,]/.test(note.quote),
  ) ||
  !originals.some((text) => wordCount(text) <= 3) ||
  !originals.some((text) => sentenceCount(text) >= 5) ||
  !ACCEPTANCE_NOTES.some((note) => note.track === "wiso" && note.sourceLang === "de") ||
  !ACCEPTANCE_NOTES.some((note) => note.track === "hybrid" && note.sourceLang === "de")
) {
  throw new Error("Acceptance notes must be 17 BBE, 11 WiSo, 3 Hybrid, and average 4.7.");
}
