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
    quote: "I stick to the mocks and the explanation after them. The other modes are there, I just don't open all of them. English feels a bit lighter than the rest, that's my only thing. The timed mocks are what I keep coming back to.",
    de: {
      outcome: "Rang 156",
      quote: "Ich bleib bei den Mocks und der Erklärung danach. Die anderen Modi sind da, ich mach nur nicht alle auf. Englisch fühlt sich ein bisschen leichter an als der Rest, das ist mein einziger Punkt. Die Mocks auf Zeit sind das, was ich immer wieder aufmach.",
    },
    uk: {
      outcome: "Місце 156",
      quote: "Я сиджу на моках і на поясненні після них. Інші режими є, я просто не відкриваю всі. Англійська трохи легша за решту, це єдина моя штука. Моки на час це те, до чого я повертаюсь.",
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
    quote: "My tutor spent two hours reading the textbook at me. Here I just see what I got wrong, and there are different modes so I'm not doing the same thing every day. I liked this more.",
    de: {
      outcome: "Rang 84",
      quote: "Mein Nachhilfelehrer hat mir zwei Stunden das Lehrbuch vorgelesen. Hier seh ich einfach, was falsch war, und es gibt verschiedene Modi, also mach ich nicht jeden Tag dasselbe. Das war mir lieber.",
    },
    uk: {
      outcome: "Місце 84",
      quote: "Репетитор дві години читав мені підручник. Тут я просто бачу, де помилився, і режимів кілька, тож не роблю одне й те саме щодня. Мені так більше сподобалось.",
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
    quote: "When I sat, the economics questions were the ones that felt familiar. The explanations had already caught me talking myself out of the right answer, so I stopped guessing on those. I did the same thing on the day.",
    de: {
      outcome: "Rang 203",
      quote: "Als ich geschrieben hab, waren die Wirtschaftsfragen die vertrauten. Die Erklärungen hatten mich schon erwischt, wie ich mir die richtige Antwort ausrede, also hab ich da nicht mehr geraten. Am Tag hab ich dasselbe gemacht.",
    },
    uk: {
      outcome: "Місце 203",
      quote: "Коли я складала, економічні питання були знайомими. Пояснення вже зловили, що я сама собі відмовляю правильну відповідь, тож там я перестала вгадувати. На іспиті зробила так само.",
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
    quote: "The English here isn't school English. One word in the question turns the meaning, and the explanation is what got me to stop translating every line. Math I already knew, so I barely opened that part.",
    de: {
      outcome: "Rang 34",
      quote: "Englisch hier ist kein Schulenglisch. Ein Wort in der Frage dreht die Bedeutung, und die Erklärung ist das, weshalb ich nicht mehr jede Zeile übersetzt hab. Mathe konnte ich schon, den Teil hab ich kaum aufgemacht.",
    },
    uk: {
      outcome: "Місце 34",
      quote: "Англійська тут не шкільна. Одне слово в питанні перевертає сенс, і пояснення це те, через що я перестав перекладати кожен рядок. Математику я вже знав, той розділ майже не відкривав.",
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
    quote: "The platform is good, there's enough material. I only got through about half and I still passed. So the tasks are more than enough.",
    de: {
      outcome: "Rang 128",
      quote: "Die Plattform ist gut, Material ist genug da. Ich hab nur ungefähr die Hälfte geschafft und trotzdem bestanden. Die Aufgaben reichen also mehr als aus.",
    },
    uk: {
      outcome: "Місце 128",
      quote: "Платформа хороша, матеріалу достатньо. Я пройшла десь половину і все одно склала. Тож завдань більш ніж вистачає.",
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
    quote: "I thought someone would walk me through the topics. You get the tasks and the explanations, and you do them on your own. I opened a couple of the other modes. I still did the mocks. It shows you the format, but if you want a teacher this isn't that, so I left it at 3.",
    de: {
      outcome: "Rang 176",
      quote: "Ich dachte, da geht jemand die Themen mit mir durch. Du bekommst die Aufgaben und die Erklärungen, und du machst sie allein. Ein paar andere Modi hab ich aufgemacht. Die Mocks hab ich trotzdem gemacht. Das Format sieht man, aber wer einen Lehrer will, ist hier falsch, deshalb eine 3.",
    },
    uk: {
      outcome: "Місце 176",
      quote: "Думав, хтось проведе мене по темах. Дають завдання і пояснення, і робиш їх сам. Кілька інших режимів я відкрив. Моки все одно зробив. Формат видно, але якщо хочеш викладача, це не те, тож лишив 3.",
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
    quote: "I liked all of it. I personally don't think it suits everyone, because it's fully self-study, and it's not for people who think the work will be done for them. You actually have to sit down and learn it yourself. If you do that, the platform is worth the money.",
    de: {
      outcome: "Rang 51",
      quote: "Mir hat alles gefallen. Ich glaub persönlich nicht, dass es jedem passt, weil es reines Selbststudium ist, und nichts für Leute, die denken, die Arbeit wird für sie erledigt. Man muss sich wirklich hinsetzen und es selbst lernen. Wenn man das tut, ist die Plattform das Geld wert.",
    },
    uk: {
      outcome: "Місце 51",
      quote: "Мені все сподобалось. Особисто думаю, що підійде не всім, бо це повністю самонавчання, і точно не для тих, хто думає, що за них усе зроблять. Треба реально сісти і вчитись самій. Якщо так робиш, платформа варта своїх грошей.",
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
    quote: "What I like is the explanations. On the other platforms I tried, this just isn't there, and here they go through the task from the start to the end. The feedback comes back quickly too. That actually helps.",
    de: {
      outcome: "Rang 11",
      quote: "Was mir gefällt, sind die Erklärungen. Auf den anderen Plattformen, die ich probiert hab, gibt es das einfach nicht, und hier gehen sie die Aufgabe von vorne bis hinten durch. Das Feedback kommt auch schnell. Das hilft wirklich.",
    },
    uk: {
      outcome: "Місце 11",
      quote: "Мені подобаються пояснення. На інших платформах, які я пробував, такого просто немає, а тут завдання розбирають від початку до кінця. Фідбек теж приходить швидко. Це реально допомагає.",
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
    quote: "The beep on the math timer is very quiet and I miss it, then I guess the last few. The correction takes those points, which is fair. If I only had a few weeks, I'd still start with the mocks.",
    de: {
      outcome: "Rang 214",
      quote: "Der Piep beim Mathe-Timer ist sehr leise und ich überhör ihn, dann rat ich die letzten paar. Die Korrektur zieht die Punkte ab, was fair ist. Hätt ich nur ein paar Wochen, würd ich trotzdem mit den Mocks anfangen.",
    },
    uk: {
      outcome: "Місце 214",
      quote: "Писк таймера з математики дуже тихий, я його пропускаю і потім вгадую останні кілька. Розбір знімає ті бали, і це справедливо. Якби в мене було лише кілька тижнів, я б все одно почала з моків.",
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
    quote: "Changing my answers at the end was a bad habit, and the breakdown after each mock kept showing me it made things worse. By May I trusted the first read more. On the day I still changed one.",
    de: {
      outcome: "Rang 67",
      quote: "Antworten am Ende noch zu ändern war eine blöde Angewohnheit, und die Auswertung nach jedem Mock hat mir immer wieder gezeigt, dass es schlechter wird. Ab Mai hab ich dem ersten Lesen mehr getraut. Am Tag hab ich trotzdem eine geändert.",
    },
    uk: {
      outcome: "Місце 67",
      quote: "Міняти відповіді в кінці була погана звичка, і розбір після кожного мока раз у раз показував, що від цього гірше. З травня я більше довіряла першому прочитанню. На іспиті одну все одно змінила.",
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
    quote: "I do the tasks on my phone after work. One go is about 25 minutes, which is all I have. There's a lot of material, I haven't run out.",
    de: {
      outcome: "Rang 173",
      quote: "Die Aufgaben mach ich nach der Arbeit am Handy. Ein Durchgang dauert ungefähr 25 Minuten, mehr hab ich nicht. Material ist viel da, mir ist noch keins ausgegangen.",
    },
    uk: {
      outcome: "Місце 173",
      quote: "Завдання роблю з телефона після роботи. Один захід це десь 25 хвилин, більше в мене немає. Матеріалу багато, мені ще не закінчився.",
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
      quote: "Im Vergleich zu den anderen Optionen, die ich angeschaut hab, ist das die beste.",
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
    quote: "For this money the platform is really worth it. I like that there are lots of modes, so it doesn't get boring. The full mocks are there, so I can go through the material properly. The mock builder is the best mode for me, I haven't seen it on any other platform. Overall, for the price, it's great.",
    de: {
      outcome: "Rang 23",
      quote: "Für das Geld ist die Plattform wirklich das wert. Mir gefällt, dass es viele Modi gibt, deshalb wird es nicht langweilig. Die ganzen Mocks sind da, also kann ich das Material richtig durchgehen. Der Mock Builder ist für mich der beste Modus, den hab ich auf keiner anderen Plattform gesehen. Insgesamt ist es für den Preis richtig gut.",
    },
    uk: {
      outcome: "Місце 23",
      quote: "За ці гроші платформа справді того варта. Мені подобається, що режимів багато, тож не набридає. Повні моки є, тож матеріал можна пройти нормально. Mock builder для мене найкращий режим, на інших платформах я такого не бачив. Загалом за цю ціну це дуже добре.",
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
    quote: "The English business questions are what I wanted, and when I sat they were the part that felt familiar. Notes friends sent me from WiSo didn't match this course. Math in here never slowed me down.",
    de: {
      outcome: "Rang 109",
      quote: "Die englischen Business-Fragen sind das, was ich wollte, und als ich geschrieben hab, war das der vertraute Teil. Notizen, die Freunde mir aus WiSo geschickt haben, haben zu diesem Kurs nicht gepasst. Mathe darin hat mich nie aufgehalten.",
    },
    uk: {
      outcome: "Місце 109",
      quote: "Англійські бізнес-питання це те, що мені було треба, і коли я складала, саме вони були знайомими. Нотатки, які друзі слали з WiSo, до цього курсу не підходили. Математика тут мене ніколи не гальмувала.",
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
    quote: "I almost didn't pay. My brother said every prep site is the same, and then I found the mock builder, which the others don't have. I ended up on it most evenings.",
    de: {
      outcome: "Rang 231",
      quote: "Ich hätt fast nicht gezahlt. Mein Bruder sagt, jede Vorbereitungsseite ist gleich, und dann hab ich den Mock Builder gefunden, den die anderen nicht haben. Die meisten Abende war ich dann dort.",
    },
    uk: {
      outcome: "Місце 231",
      quote: "Мало не заплатив. Брат каже, усі сайти для підготовки однакові, а потім я знайшов mock builder, якого в інших немає. Більшість вечорів я потім сидів там.",
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
    quote: "When I walked out of the exam I thought, thank god I picked this course. The tasks were about 90% like the ones here. In math there was one probability question I hadn't seen, but I think they made the exam harder on purpose this year. Everything else was very close. I did three mock exams, and that prepared me really well.",
    de: {
      outcome: "Rang 58",
      quote: "Als ich aus der Prüfung kam, hab ich gedacht, Gott sei Dank hab ich diesen Kurs genommen. Die Aufgaben waren ungefähr zu 90% wie die hier. In Mathe war eine Wahrscheinlichkeitsfrage, die ich nicht kannte, aber ich glaub, die Prüfung war dieses Jahr extra schwerer. Der Rest war sehr nah dran. Ich hab drei Mock-Prüfungen gemacht, und das hat mich wirklich gut vorbereitet.",
    },
    uk: {
      outcome: "Місце 58",
      quote: "Коли я вийшла з іспиту, подумала, слава богу, що обрала цей курс. Завдання були десь на 90% як тут. У математиці було одне питання з probability, якого я не бачила, але я думаю, цього року іспит навмисно зробили складнішим. Решта була дуже схожа. Я зробила три мок-іспити, і це мене дуже добре підготувало.",
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
    quote: "Second time. First year I always left Sprachverständnis until I had nothing left, and the score stuck there. This time I put that block first in the mocks and I went into the exam the same way. I still don't love the order, but it was the right one.",
    de: {
      outcome: "Rang 188",
      quote: "Zweites Mal. Im ersten Jahr hab ich Sprachverständnis immer nach hinten gelegt, bis nichts mehr da war, und der Score ist dort hängen geblieben. Diesmal hab ich den Block in den Mocks zuerst gemacht und bin so in die Prüfung. Die Reihenfolge mag ich immer noch nicht, aber sie war die richtige.",
    },
    uk: {
      outcome: "Місце 188",
      quote: "Удруге. Першого року я завжди лишала Sprachverständnis на кінець, поки вже нічого не було, і бал там застряг. Цього разу ставила цей блок у моках першим і так само зайшла на іспит. Порядок мені досі не дуже, але він був правильний.",
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
    quote: "The tasks in May already had me in the back half, and that's where I ended up. They didn't make my German better. Math in there is ordinary. I never thought a few months of this would fix that. 3 from me, seeing it early was still worth it.",
    de: {
      outcome: "Rang 2011",
      quote: "Die Aufgaben im Mai hatten mich schon in der hinteren Hälfte, und dort bin ich auch gelandet. Mein Deutsch ist davon nicht besser geworden. Mathe darin ist gewöhnlich. Ein paar Monate davon sollten das auch nicht richten. Eine 3 von mir, es früh zu sehen war trotzdem gut.",
    },
    uk: {
      outcome: "Місце 2011",
      quote: "Завдання в травні вже тримали мене в другій половині, і там я й опинився. Німецьку вони мені не покращили. Математика там звичайна. Кілька місяців цього німецьку й не мали виправити. Від мене 3, рано це побачити все одно було варто.",
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
    quote: "My brother sent me stuff from the BBE course. Different exam, it didn't do anything for my German. After a few days I left it. On WiSo the German questions are what I actually needed.",
    de: {
      outcome: "Rang 733",
      quote: "Mein Bruder hat mir Sachen aus dem BBE-Kurs geschickt. Anderes Examen, für mein Deutsch hat das nichts gebracht. Nach ein paar Tagen hab ich es liegen lassen. Bei WiSo sind die deutschen Aufgaben das, was ich wirklich gebraucht hab.",
    },
    uk: {
      outcome: "Місце 733",
      quote: "Брат надіслав мені матеріали з курсу BBE. Інший іспит, для моєї німецької це нічого не дало. Через кілька днів я це залишила. На WiSo німецькі питання це те, що мені справді було треба.",
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
    quote: "The economics questions here are harder than school, in a good way. I kept missing the verb. The explanations helped more than the grammar pages, so I stopped opening those.",
    de: {
      outcome: "Rang 1340",
      quote: "Die Wirtschaftsfragen hier sind schwerer als in der Schule, im guten Sinn. Das Verb hab ich dauernd verpasst. Die Erklärungen haben mehr gebracht als die Grammatikseiten, die hab ich dann nicht mehr aufgemacht.",
    },
    uk: {
      outcome: "Місце 1340",
      quote: "Економічні питання тут важчі, ніж у школі, у хорошому сенсі. Дієслово я весь час пропускав. Пояснення допомогли більше за сторінки з граматики, тож я їх більше не відкривав.",
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
    quote: "Wirtschaft verstehen here isn't a summary of the book. My own summaries didn't look like the questions, they just confused me. After a few weeks I dropped the summaries and did the cases. The cases are what I open.",
    de: {
      outcome: "Rang 455",
      quote: "Wirtschaft verstehen ist hier keine Zusammenfassung vom Buch. Meine eigenen Zusammenfassungen haben nicht ausgeschaut wie die Fragen, die haben mich nur verwirrt. Nach ein paar Wochen hab ich die Zusammenfassungen sein lassen und die Fälle gemacht. Die Fälle mach ich auf.",
    },
    uk: {
      outcome: "Місце 455",
      quote: "Wirtschaft verstehen тут це не конспект книжки. Мої конспекти не були схожі на питання, вони тільки плутали. Через кілька тижнів я конспекти залишив і робив кейси. Кейси це те, що я відкриваю.",
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
    quote: "In February I nearly switched to the BBE course, someone said the German one is just more crowded. Once I did the mocks, crowded didn't feel harder. I still spent a month talking myself through it. The tasks were fine the whole time. 4, because of that month, not because of the platform.",
    de: {
      outcome: "Rang 1204",
      quote: "Im Februar wär ich fast auf den BBE-Kurs gewechselt, jemand meinte, der deutsche sei nur voller. Als ich die Mocks gemacht hab, hat sich voller nicht schwerer angefühlt. Einen Monat hab ich trotzdem mit mir geredet. Die Aufgaben waren die ganze Zeit in Ordnung. 4, wegen dem Monat, nicht wegen der Plattform.",
    },
    uk: {
      outcome: "Місце 1204",
      quote: "У лютому я мало не перейшла на курс BBE, хтось сказав, що німецький просто більш людний. Коли я зробила моки, людно не відчувалось важче. Місяць я все одно проговорювала це сама з собою. Завдання весь час були нормальні. 4, через той місяць, не через платформу.",
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
    quote: "I learned partial points here, school didn't have that. At the start I ticked everything in the mocks, and one mock took the points straight off. After that I left things blank. Same on the exam.",
    de: {
      outcome: "Rang 312",
      quote: "Teilpunkte hab ich hier gelernt, in der Schule gab es das nicht. Am Anfang hab ich in den Mocks alles angekreuzt, und ein Mock hat die Punkte gleich abgezogen. Danach hab ich Sachen leer gelassen. Auf der Prüfung genauso.",
    },
    uk: {
      outcome: "Місце 312",
      quote: "Часткові бали я зрозуміла тут, у школі такого не було. Спочатку в моках я ставила все, і один мок одразу зняв бали. Після того лишала порожнім. На іспиті так само.",
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
    quote: "Second time through, the grammar pages didn't add much. The short texts on most days moved me more, slowly. Sprachverständnis is still the part I like least, so not a full 5, but it stopped dragging the rest down.",
    de: {
      outcome: "Rang 1677",
      quote: "Beim zweiten Durchgang haben die Grammatikseiten nicht viel gebracht. Die kurzen Texte an den meisten Tagen haben mich mehr weitergebracht, langsam. Sprachverständnis ist immer noch der Teil, den ich am wenigsten mag, also keine volle 5, aber er hat den Rest nicht mehr runtergezogen.",
    },
    uk: {
      outcome: "Місце 1677",
      quote: "Удруге сторінки з граматики мало що дали. Короткі тексти майже щодня зрушували більше, повільно. Sprachverständnis досі частина, яка мені подобається найменше, тож не повні 5, але вона перестала тягнути решту вниз.",
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
    quote: "I used to switch topic every 20 minutes and call that studying. The short mixed tasks stopped me doing that. My old notes were three subjects started and none of them finished. The tasks are what I actually used from the course.",
    de: {
      outcome: "Rang 860",
      quote: "Ich hab alle 20 Minuten das Thema gewechselt und das Lernen genannt. Die kurzen gemischten Aufgaben haben mich davon abgebracht. In den alten Notizen waren drei Fächer angefangen und keins fertig. Die Aufgaben sind das, was ich vom Kurs wirklich benutzt hab.",
    },
    uk: {
      outcome: "Місце 860",
      quote: "Я міняла тему кожні 20 хвилин і називала це навчанням. Короткі змішані завдання це зупинили. У старих нотатках три предмети почато і жоден не закінчено. Завдання це те, чим я справді користувалась з курсу.",
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
    quote: "I only do one full mock a week, and I don't start the next one until I've read the explanation. Otherwise I was just collecting scores. I still open the German part in the weeks I don't feel like it.",
    de: {
      outcome: "Rang 248",
      quote: "Ich mach nur einen ganzen Mock pro Woche, und den nächsten fang ich nicht an, bevor ich die Erklärung gelesen hab. Sonst hab ich nur Punkte gesammelt. Den deutschen Teil mach ich auch in den Wochen auf, in denen ich keine Lust hab.",
    },
    uk: {
      outcome: "Місце 248",
      quote: "Роблю лише один повний мок на тиждень і наступний не починаю, поки не прочитаю пояснення. Інакше я просто збирав бали. Німецьку частину все одно відкриваю тими тижнями, коли не хочеться.",
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
    quote: "Both tracks are in the one purchase, that's why I got it, my parents couldn't choose. Math you only do once, I wasn't doing derivatives again in the other language. The language parts aren't the same thing. I took the BBE seat. The WiSo tasks were there the whole time, so I wasn't choosing blind.",
    de: {
      outcome: "BBE Rang 88, und ein WiSo-Platz",
      quote: "Beide Tracks sind in einem Kauf, deshalb hab ich ihn genommen, meine Eltern konnten sich nicht entscheiden. Mathe ist nur einmal, Ableitungen mach ich nicht noch mal in der anderen Sprache. Die Sprachteile sind nicht dasselbe. Den BBE-Platz hab ich genommen. Die WiSo-Aufgaben waren die ganze Zeit da, also hab ich nicht blind gewählt.",
    },
    uk: {
      outcome: "BBE місце 88, і місце на WiSo",
      quote: "Обидва треки в одній покупці, тому я її і взяла, батьки не могли обрати. Математика один раз, похідні іншою мовою я не переробляла. Мовні частини це не одне й те саме. Взяла місце на BBE. Завдання WiSo були весь час поруч, тож я обирала не наосліп.",
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
    quote: "The English and the German aren't the same, and I kept treating them like they were. In the first week I missed in German a question I'd just got right in English. After that I stopped doing both languages on the same evening. I ended up on WiSo. It's a 4 because doing both is more work than it looks, and the work itself is fine.",
    de: {
      outcome: "Auf WiSo eingeschrieben",
      quote: "Englisch und Deutsch sind nicht dasselbe, und ich hab sie weiter behandelt, als wären sie es. In der ersten Woche lag ich auf Deutsch daneben bei einer Frage, die ich auf Englisch gerade richtig hatte. Danach nicht mehr beide Sprachen am selben Abend. Gelandet bin ich auf WiSo. Eine 4, weil beides mehr Arbeit ist, als es aussieht, und die Arbeit selbst ist in Ordnung.",
    },
    uk: {
      outcome: "Вступив на WiSo",
      quote: "Англійська і німецька це не одне й те саме, а я й далі ставився до них так, ніби одне. Першого тижня промахнувся німецькою в питанні, яке щойно правильно зробив англійською. Потім не робив обидві мови в один вечір. Зрештою на WiSo. Це 4, бо обидві разом це більше роботи, ніж виглядає, а сама робота нормальна.",
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
    quote: "I kept both languages in the package. Math once, and English and German not on the same day, or I mix everything up. It's more than one course, and for me that was right, I didn't have to drop a language halfway through.",
    de: {
      outcome: "Den BBE-Platz genommen",
      quote: "Beide Sprachen sind im Paket geblieben. Mathe einmal, und Englisch und Deutsch nicht am selben Tag, sonst bring ich alles durcheinander. Mehr als ein Kurs, und für mich hat das gepasst, ich musste mitten in der Vorbereitung keine Sprache streichen.",
    },
    uk: {
      outcome: "Взяла місце на BBE",
      quote: "Обидві мови лишились у пакеті. Математика один раз, а англійська і німецька не в один день, інакше я все плутаю. Це більше, ніж один курс, і для мене так було правильно, мову посеред підготовки викидати не довелось.",
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
