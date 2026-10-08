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
    quote: "The page after a mock is the part I use, it lists which guesses cost points. The lessons I don't finish, they're slow. English still feels thin, so not a 5. I stayed a second year because the timed sets are the useful bit.",
    de: {
      outcome: "Rang 156",
      quote: "Die Seite nach einem Mock ist der Teil, den ich benutze, da steht, welche geratenen Antworten Punkte kosten. Die Lektionen schau ich nicht zu Ende, die sind langsam. Englisch fühlt sich immer noch dünn an, deshalb keine 5. Zweites Jahr bin ich wegen der Aufgaben auf Zeit geblieben.",
    },
    uk: {
      outcome: "Місце 156",
      quote: "Сторінка після мока це те, чим я користуюся, там видно, які вгадані відповіді коштують балів. Уроки я не дочитую, вони повільні. Англійська досі виглядає тонкою, тому не 5. Другий рік лишилась через набори на час.",
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
    quote: "A tutor spent two hours reading the textbook at me, and these sets just mark the line I got wrong, on a Sunday, without him. Clearer, and nothing fancy about it.",
    de: {
      outcome: "Rang 84",
      quote: "Ein Nachhilfelehrer hat mir zwei Stunden das Lehrbuch vorgelesen, und die Sets hier markieren einfach die Zeile, die falsch war, am Sonntag, ohne ihn. Klarer, und nichts Besonderes daran.",
    },
    uk: {
      outcome: "Місце 84",
      quote: "Репетитор дві години читав мені підручник, а набори тут просто позначають рядок, який я зробив неправильно, у неділю, без нього. Ясніше, і нічого особливого в цьому немає.",
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
    quote: "I redid the economics cases, because on three of them the correction caught that I'd talked myself out of the answer and guessed anyway. After that I left that type blank.",
    de: {
      outcome: "Rang 203",
      quote: "Die Wirtschaftsfälle hab ich noch mal gemacht, weil die Korrektur bei dreien gesehen hat, dass ich mir die Antwort schon ausgeredet und trotzdem geraten hab. Danach hab ich den Typ leer gelassen.",
    },
    uk: {
      outcome: "Місце 203",
      quote: "Економічні кейси я переробляла, бо в трьох розбір побачив, що я вже сама собі відмовила відповідь і все одно вгадала. Після того такий тип лишала порожнім.",
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
    quote: "English here is not the English from school, one word in the statement turns the point, and Show in text is how I stopped translating the whole passage. Math I already knew, so those lessons stayed closed.",
    de: {
      outcome: "Rang 34",
      quote: "Englisch hier ist nicht das Englisch aus der Schule, ein Wort in der Aussage dreht den Punkt, und über Show in text hab ich aufgehört, die ganze Passage zu übersetzen. Mathe konnte ich schon, die Lektionen dazu sind zu geblieben.",
    },
    uk: {
      outcome: "Місце 34",
      quote: "Англійська тут не шкільна, одне слово в твердженні перевертає сенс, і через Show in text я перестав перекладати весь текст. Математику я вже знав, ті уроки лишились закритими.",
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
    quote: "Mocks over lessons.",
    de: {
      outcome: "Rang 128",
      quote: "Mocks statt Lektionen.",
    },
    uk: {
      outcome: "Місце 128",
      quote: "Моки, не уроки.",
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
    quote: "I paid because I thought someone would walk through the topics. What you get is practice sets, and the explanations are short. The lessons are there, I opened maybe two. I still did the mocks, since the money was already gone, and a lot of them late. 3, the question format is there, the teaching isn't.",
    de: {
      outcome: "Rang 176",
      quote: "Ich hab gezahlt, weil ich dachte, da geht jemand die Themen durch. Was du bekommst, sind Übungssets, und die Erklärungen sind kurz. Lektionen gibt es, aufgemacht hab ich vielleicht zwei. Die Mocks hab ich trotzdem gemacht, das Geld war schon weg, viele davon spät. 3, das Fragenformat ist da, der Unterricht nicht.",
    },
    uk: {
      outcome: "Місце 176",
      quote: "Заплатив, бо думав, хтось проведе по темах. Натомість практичні набори, а пояснення короткі. Уроки є, я відкрив може два. Моки все одно робив, бо гроші вже пішли, і багато з них пізно. 3, формат питань є, викладання ні.",
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
    quote: "The short sets are the right length, one block and you can stop, and Sunday is the full mock. In May I almost asked for a refund because the timer had worn me out. I didn't send it. 4, those timed evenings were grim and the questions themselves were fine.",
    de: {
      outcome: "Rang 51",
      quote: "Die kurzen Sets haben die richtige Länge, ein Block und man kann aufhören, und Sonntag ist der ganze Mock. Im Mai hätt ich fast eine Rückerstattung verlangt, der Timer hat mich fertiggemacht. Abgeschickt hab ich das nicht. 4, die Abende mit Timer waren zäh, die Fragen selbst waren in Ordnung.",
    },
    uk: {
      outcome: "Місце 51",
      quote: "Короткі набори нормальної довжини, один блок і можна зупинитись, а в неділю повний мок. У травні мало не попросила гроші назад, таймер мене вимотав. Не відправила. 4, ті вечори з таймером були тяжкі, а самі питання нормальні.",
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
    quote: "School notes didn't match these questions at all. The line-by-line correction is blunt, which helped, because I kept losing points on wording I thought I already knew. I still rush the first ten in a set.",
    de: {
      outcome: "Rang 11",
      quote: "Schulnotizen haben zu diesen Fragen überhaupt nicht gepasst. Die Korrektur Zeile für Zeile ist direkt, und das hat geholfen, weil ich dauernd Punkte an Formulierungen verloren hab, die ich schon kannte. Die ersten zehn in einem Set hetz ich immer noch.",
    },
    uk: {
      outcome: "Місце 11",
      quote: "Шкільні нотатки з цими питаннями взагалі не збігались. Розбір рядок за рядком різкий, і це допомогло, бо я втрачав бали на формулюваннях, які ніби вже знав. Перші десять у наборі я досі жену.",
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
    quote: "The math timer in the mocks is too quiet, I miss it and then guess the last cluster, and the correction takes the points. If you only have a few weeks, do the mocks, reading the lessons doesn't teach the clock. 4, for that beep.",
    de: {
      outcome: "Rang 214",
      quote: "Der Mathe-Timer in den Mocks ist zu leise, ich überhör ihn und rat dann den letzten Block, und die Korrektur zieht die Punkte ab. Wer nur ein paar Wochen hat, soll die Mocks machen, die Lektionen bringen die Uhr nicht bei. 4, wegen dem Piep.",
    },
    uk: {
      outcome: "Місце 214",
      quote: "Таймер з математики в моках занадто тихий, я його пропускаю і потім вгадую останній блок, а розбір знімає бали. Якщо є лише кілька тижнів, робіть моки, уроки годинника не вчать. 4, через той писк.",
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
    quote: "I wrote down every answer I changed at the end of a mock, and the breakdown showed most of those changes were wrong. I didn't trust the first read until May. I still change one sometimes.",
    de: {
      outcome: "Rang 67",
      quote: "Ich hab jede Antwort aufgeschrieben, die ich am Ende eines Mocks noch geändert hab, und in der Auswertung waren die meisten Änderungen falsch. Dem ersten Lesen hab ich erst im Mai getraut. Eine änder ich immer noch manchmal.",
    },
    uk: {
      outcome: "Місце 67",
      quote: "Записувала кожну відповідь, яку міняла в кінці мока, і в розборі більшість тих змін були хибні. Першому прочитанню довірилась тільки в травні. Одну інколи міняю досі.",
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
    quote: "Econ sets helped.",
    de: {
      outcome: "Rang 141",
      quote: "Wirtschaftssets haben geholfen.",
    },
    uk: {
      outcome: "Місце 141",
      quote: "Набори з економіки допомогли.",
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
    quote: "The sets work on a phone, one takes about 25 minutes, and the questions are the right kind even when I do them half asleep.",
    de: {
      outcome: "Rang 173",
      quote: "Die Sets gehen am Handy, eins dauert ungefähr 25 Minuten, und die Fragen sind die richtige Sorte, auch wenn ich sie halb eingeschlafen mach.",
    },
    uk: {
      outcome: "Місце 173",
      quote: "Набори нормально йдуть з телефона, один займає десь 25 хвилин, і питання ті, що треба, навіть коли роблю їх напівсонна.",
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
    quote: "There isn't a study plan in it, it's a pile of mocks, and the scoring punishes guessing, which is the part that changed how I answer.",
    de: {
      outcome: "Rang 92",
      quote: "Einen Lernplan gibt es da nicht, es ist ein Stapel Mocks, und die Punktevergabe bestraft Raten, das ist der Teil, der geändert hat, wie ich antworte.",
    },
    uk: {
      outcome: "Місце 92",
      quote: "Плану навчання там немає, це купа моків, і нарахування карає вгадування, через це я перестав вгадувати.",
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
    quote: "Would buy again.",
    de: {
      outcome: "Rang 23",
      quote: "Würd ich nochmal kaufen.",
    },
    uk: {
      outcome: "Місце 23",
      quote: "Купив би ще раз.",
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
    quote: "I paid for the English business statements, friends' WiSo notes didn't match this course, and the math notation in the sets was fine. Those statements took weeks before they stopped sounding foggy.",
    de: {
      outcome: "Rang 109",
      quote: "Ich hab für die englischen Business-Aussagen gezahlt, WiSo-Notizen von Freunden haben zu diesem Kurs nicht gepasst, und die Mathe-Notation in den Sets war ok. Die Aussagen haben Wochen gebraucht, bis sie nicht mehr neblig klangen.",
    },
    uk: {
      outcome: "Місце 109",
      quote: "Платила за англійські бізнес-твердження, нотатки друзів з WiSo до цього курсу не підходили, а математичний запис у наборах нормальний. Твердження кілька тижнів звучали туманно.",
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
    quote: "I almost didn't pay, my brother said every prep site is the same, and these sets are pickier than the free pdfs I already had. I opened them most nights anyway.",
    de: {
      outcome: "Rang 231",
      quote: "Ich hätt fast nicht gezahlt, mein Bruder sagt, jede Vorbereitungsseite ist gleich, und diese Sets sind kleinlicher als die gratis PDFs, die ich schon hatte. Trotzdem hab ich sie die meisten Abende aufgemacht.",
    },
    uk: {
      outcome: "Місце 231",
      quote: "Мало не заплатив, брат каже, усі сайти для підготовки однакові, а ці набори прискіпливіші за безкоштовні pdf, які в мене вже були. Все одно відкривав їх більшість вечорів.",
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
    quote: "I did the demo so I wouldn't pay and then hate the format. I didn't hate it. It's dry, and very specific, which is also why I didn't cancel. For three months I used the mocks, at night, and left the lessons. If you want lectures, look somewhere else.",
    de: {
      outcome: "Rang 58",
      quote: "Demo gemacht, damit ich nicht zahl und dann das Format hasse. Hab ich nicht. Es ist trocken und sehr konkret, deshalb hab ich auch nicht gekündigt. Drei Monate die Mocks benutzt, nachts, und die Lektionen gelassen. Wenn du Vorlesungen willst, such woanders.",
    },
    uk: {
      outcome: "Місце 58",
      quote: "Зробила демо, щоб не заплатити і потім ненавидіти формат. Не зненавиділа. Воно сухе і дуже конкретне, тому й не скасувала. Три місяці користувалась моками, вночі, а уроки лишала. Якщо хочеш лекції, шукай деінде.",
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
    quote: "Second time through the WiSo sets. First year I always pushed Sprachverständnis to the end, until I was tired, and the score died on it. Now that block is first in every mock I start. I don't like the order, but it's the one that stuck.",
    de: {
      outcome: "Rang 188",
      quote: "Zweites Mal mit den WiSo-Sets. Erstes Jahr hab ich Sprachverständnis immer nach hinten geschoben, bis ich müde war, und der Score ist daran gestorben. Jetzt mach ich den Block in jedem Mock zuerst. Die Reihenfolge mag ich nicht, aber sie bleibt hängen.",
    },
    uk: {
      outcome: "Місце 188",
      quote: "Другий раз по наборах WiSo. Першого року я завжди відсувала Sprachverständnis на кінець, поки не втомилась, і бал на цьому й помирав. Тепер цей блок перший у кожному моку, який я починаю. Порядок мені не подобається, але саме він лишається.",
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
    quote: "The sets in May already showed I'd land in the back half, and they were right. They did not make my German better. The math questions were ordinary. I don't think this material fixes that in a few months. 3, seeing it early was useful, and there wasn't much else.",
    de: {
      outcome: "Rang 2011",
      quote: "Die Sets im Mai haben schon gezeigt, dass ich in der hinteren Hälfte lande, und das hat gestimmt. Mein Deutsch ist davon nicht besser geworden. Die Mathefragen waren gewöhnlich. Ich glaub nicht, dass das Material das in ein paar Monaten richtet. 3, es früh zu sehen war brauchbar, und viel mehr war nicht da.",
    },
    uk: {
      outcome: "Місце 2011",
      quote: "Набори в травні вже показали, що я сяду в другій половині, і так і було. Німецьку вони мені не покращили. Питання з математики звичайні. Не думаю, що цей матеріал це за кілька місяців виправить. 3, рано це побачити було корисно, а більше там майже нічого.",
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
    quote: "My brother sent me files from the BBE course, wrong material, my German got worse off them. I looked for a week and dropped them. In the WiSo sets the German statements are what I needed, math in there was never the tight part for me.",
    de: {
      outcome: "Rang 733",
      quote: "Mein Bruder hat mir Dateien aus dem BBE-Kurs geschickt, falsches Material, mein Deutsch ist davon schlechter geworden. Nach einer Woche hab ich sie gelassen. In den WiSo-Sets sind die deutschen Aussagen das, was ich gebraucht hab, Mathe war bei mir nie der knappe Teil.",
    },
    uk: {
      outcome: "Місце 733",
      quote: "Брат надіслав файли з курсу BBE, не той матеріал, німецька від них стала гірша. Тиждень подивилась і викинула. У наборах WiSo німецькі твердження це те, що мені було треба, математика там у мене ніколи не була вузьким місцем.",
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
    quote: "The economics statements in these sets are tighter than school, I kept missing the verb, and underlining it on paper helped more than the grammar pages, so I stopped opening those.",
    de: {
      outcome: "Rang 1340",
      quote: "Die Wirtschaftsaussagen in den Sets sind enger als in der Schule, das Verb hab ich dauernd verpasst, und auf Papier unterstreichen hat mehr gebracht als die Grammatikseiten, die hab ich dann nicht mehr aufgemacht.",
    },
    uk: {
      outcome: "Місце 1340",
      quote: "Економічні твердження в цих наборах щільніші, ніж у школі, дієслово я весь час пропускав, і підкреслювати його на папері допомогло більше за сторінки з граматики, тож я їх більше не відкривав.",
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
    quote: "The mocks are good.",
    de: {
      outcome: "Rang 96",
      quote: "Mocks sind gut.",
    },
    uk: {
      outcome: "Місце 96",
      quote: "Моки хороші.",
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
    quote: "Wirtschaft verstehen here is not a summary of the book. My own summaries didn't look like the statements, they just confused me. After a few weeks of cases I dropped the summaries, the cases are the part I open.",
    de: {
      outcome: "Rang 455",
      quote: "Wirtschaft verstehen ist hier keine Zusammenfassung vom Buch. Meine eigenen Zusammenfassungen haben nicht ausgeschaut wie die Aussagen, die haben mich nur verwirrt. Nach ein paar Wochen mit den Fällen hab ich die Zusammenfassungen gelassen, die Fälle sind der Teil, den ich aufmach.",
    },
    uk: {
      outcome: "Місце 455",
      quote: "Wirtschaft verstehen тут це не конспект книжки. Мої власні конспекти не були схожі на твердження, вони тільки плутали. Через кілька тижнів кейсів я конспекти кинув, кейси це те, що я відкриваю.",
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
    quote: "In February I nearly switched to the BBE course, someone said the German one is just more crowded. For me crowded isn't harder, and the timed sets showed that. I still argued with myself for a month. 4 stars, the month was the annoying part, the tasks were fine. I could have skipped the argument.",
    de: {
      outcome: "Rang 1204",
      quote: "Im Februar wär ich fast auf den BBE-Kurs gewechselt, jemand meinte, der deutsche sei nur voller. Für mich ist voller nicht schwerer, und die Aufgaben auf Zeit haben das gezeigt. Einen Monat hab ich trotzdem mit mir gestritten. 4 Sterne, genervt hat der Monat, die Aufgaben waren in Ordnung. Den Streit hätt ich mir sparen können.",
    },
    uk: {
      outcome: "Місце 1204",
      quote: "У лютому мало не перейшла на курс BBE, хтось сказав, що німецький просто більш людний. Для мене людно не означає важче, і набори на час це показали. Місяць я все одно сперечалась із собою. 4 зірки, дратував місяць, завдання були нормальні. Суперечку можна було не починати.",
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
    quote: "Partial points were new to me. At the start I ticked everything in the mocks, and one set took the points off right there, so now I leave things blank. The German in the materials was fine for me, I did the sets from home.",
    de: {
      outcome: "Rang 312",
      quote: "Teilpunkte kannte ich nicht. Am Anfang hab ich in den Mocks alles angekreuzt, und ein Set hat die Punkte gleich abgezogen, seitdem lass ich Sachen leer. Das Deutsch im Material war für mich ok, die Sets hab ich von zu Hause gemacht.",
    },
    uk: {
      outcome: "Місце 312",
      quote: "Часткові бали я не знала. Спочатку в моках ставила все, і один набір одразу зняв бали, відтоді лишаю порожнім. Німецька в матеріалах для мене була нормальна, набори робила з дому.",
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
    quote: "The grammar pages did nothing the second time through, short passages on most days did more, slowly. I still don't like the Sprachverständnis sets, so not a 5. They never felt fine, they just stopped dragging the other sections down.",
    de: {
      outcome: "Rang 1677",
      quote: "Die Grammatikseiten haben beim zweiten Durchgang nichts gebracht, kurze Texte an den meisten Tagen haben mehr gebracht, langsam. Die Sprachverständnis-Sets mag ich immer noch nicht, also keine 5. Bequem waren sie nie, sie haben nur die anderen Teile nicht mehr runtergezogen.",
    },
    uk: {
      outcome: "Місце 1677",
      quote: "Сторінки з граматики вдруге не дали нічого, короткі тексти майже щодня дали більше, повільно. Набори Sprachverständnis мені досі не подобаються, тож не 5. Нормально вони не відчувались, просто перестали тягнути вниз інші розділи.",
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
    quote: "Changing topic every 20 minutes is not studying, even if I called it that, and the short mixed sets stopped me doing it. My old notes were three subjects started and none finished. From the whole course, the sets are what I used.",
    de: {
      outcome: "Rang 860",
      quote: "Alle 20 Minuten das Thema zu wechseln ist kein Lernen, auch wenn ich es so genannt hab, und die kurzen gemischten Sets haben genau das gestoppt. In meinen alten Notizen waren drei Fächer angefangen und keins fertig. Vom ganzen Kurs hab ich die Sets benutzt.",
    },
    uk: {
      outcome: "Місце 860",
      quote: "Міняти тему кожні 20 хвилин це не навчання, хоч я так і називала, і короткі змішані набори якраз це зупинили. У старих нотатках три предмети почато і жоден не закінчено. З усього курсу я користувалась наборами.",
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
    quote: "One full set a week, and I don't open the next until I've looked at the correction, otherwise the scores don't mean anything. The German block I still open on weeks I don't want to.",
    de: {
      outcome: "Rang 248",
      quote: "Ein ganzes Set pro Woche, und das nächste mach ich nicht auf, bevor ich die Korrektur angeschaut hab, sonst sagen die Punkte nichts. Den deutschen Block mach ich auch in Wochen auf, in denen ich nicht will.",
    },
    uk: {
      outcome: "Місце 248",
      quote: "Лише один повний набір на тиждень, і наступний не відкриваю, поки не подивлюсь розбір, інакше бали нічого не значать. Німецький блок все одно відкриваю тими тижнями, коли не хочеться.",
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
    quote: "Both tracks sit in one purchase, which is why I paid, my parents couldn't pick. Math is once, I'm not redoing derivatives in the other language. The language sections are not copies of each other, even when the page makes them sound close. I took the BBE seat. Having the WiSo sets there meant I wasn't guessing about that course later.",
    de: {
      outcome: "BBE Rang 88, und ein WiSo-Platz",
      quote: "Beide Tracks sind in einem Kauf, deshalb hab ich gezahlt, meine Eltern konnten sich nicht entscheiden. Mathe ist einmal, Ableitungen mach ich nicht noch mal in der anderen Sprache. Die Sprachteile sind keine Kopien voneinander, auch wenn die Seite sie nah klingen lässt. Den BBE-Platz hab ich genommen. Die WiSo-Sets lagen da, also musste ich später nicht über den Kurs raten.",
    },
    uk: {
      outcome: "BBE місце 88, і місце на WiSo",
      quote: "Обидва треки в одній покупці, тому я і платила, батьки не могли обрати. Математика один раз, похідні іншою мовою не переробляю. Мовні розділи не копії один одного, навіть якщо на сторінці вони звучать близько. Взяла місце на BBE. Те, що набори WiSo були поруч, означало, що потім не довелось гадати про той курс.",
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
    quote: "The two sets are different, and I kept treating an idea as if it copies across. First week I missed in German a question I had just got right in English. I stopped doing both language blocks the same night. I enrolled on WiSo. 4, keeping both inside one purchase is heavier than the page makes it look.",
    de: {
      outcome: "Auf WiSo eingeschrieben",
      quote: "Die zwei Sets sind verschieden, und ich hab eine Idee weiter behandelt, als würde sie rüberkopiert. Erste Woche auf Deutsch daneben, was ich auf Englisch gerade richtig hatte. Danach nicht mehr beide Sprachblöcke am selben Abend. Eingeschrieben auf WiSo. 4, beides in einem Kauf ist schwerer, als die Seite es aussehen lässt.",
    },
    uk: {
      outcome: "Вступив на WiSo",
      quote: "Два набори різні, а я й далі вважав, що думка просто переноситься. Першого тижня німецькою промахнувся в питанні, яке щойно правильно зробив англійською. Потім не робив обидва мовні блоки в один вечір. Вступив на WiSo. 4, тримати обидва в одній покупці важче, ніж це виглядає на сторінці.",
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
    quote: "I didn't drop a language out of the package just to make the week look lighter. Math once, English and German not on the same day, or I mix the sets up. More work than a single course, and I'm still not sure the package was worth it. At least I didn't decide that while panicking.",
    de: {
      outcome: "Den BBE-Platz genommen",
      quote: "Ich hab keine Sprache aus dem Paket gestrichen, nur damit die Woche leichter aussieht. Mathe einmal, Englisch und Deutsch nicht am selben Tag, sonst vermisch ich die Sets. Mehr Arbeit als bei einem einzelnen Kurs, und ob sich das Paket gelohnt hat, weiß ich immer noch nicht ganz. Entschieden hab ich das wenigstens nicht in der Panik.",
    },
    uk: {
      outcome: "Взяла місце на BBE",
      quote: "Не викидала мову з пакета лише щоб тиждень виглядав легше. Математика один раз, англійська і німецька не в один день, інакше набори змішуються. Більше роботи, ніж в одному курсі, і чи пакет того вартий, досі не зовсім знаю. Принаймні не вирішувала це в паніці.",
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
