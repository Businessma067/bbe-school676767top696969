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
    quote: "The page after a mock is what I actually read, it shows which guesses cost points. I don't finish the lessons, they move slowly. English feels a bit lighter than the other parts, that's my only real nitpick. The timed sets are what I kept opening.",
    de: {
      outcome: "Rang 156",
      quote: "Die Seite nach einem Mock ist das, was ich wirklich lese, da steht, welche geratenen Antworten Punkte kosten. Die Lektionen schau ich nicht zu Ende, die ziehen sich. Englisch fühlt sich ein bisschen leichter an als der Rest, das ist mein einziger echter Punkt. Die Aufgaben auf Zeit sind das, was ich immer wieder aufgemacht hab.",
    },
    uk: {
      outcome: "Місце 156",
      quote: "Сторінка після мока це те, що я справді читаю, там видно, які вгадані відповіді коштують балів. Уроки я не дочитую, вони тягнуться. Англійська трохи легша за решту, це єдина справжня придирка. Набори на час це те, що я відкривала знову.",
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
    quote: "My tutor spent two hours reading the textbook at me. In these sets you just see the line you missed, and that was enough for a Sunday. I preferred it.",
    de: {
      outcome: "Rang 84",
      quote: "Mein Nachhilfelehrer hat mir zwei Stunden das Lehrbuch vorgelesen. In den Sets siehst du einfach die Zeile, die daneben war, und das hat für einen Sonntag gereicht. Mir war das lieber.",
    },
    uk: {
      outcome: "Місце 84",
      quote: "Репетитор дві години читав мені підручник. У цих наборах просто видно рядок, який ти промахнув, і на неділю цього вистачало. Мені так більше підійшло.",
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
    quote: "When I sat, the economics cases were the familiar ones. In the course the correction had caught me talking myself out of the right answer and guessing, so I started leaving that type blank, and I did the same on the day.",
    de: {
      outcome: "Rang 203",
      quote: "Als ich geschrieben hab, waren die Wirtschaftsfälle die vertrauten. Im Kurs hat die Korrektur erwischt, dass ich mir die richtige Antwort ausrede und trotzdem rate, also hab ich den Typ leer gelassen, und am Tag genauso.",
    },
    uk: {
      outcome: "Місце 203",
      quote: "Коли я складала, економічні кейси були знайомими. У курсі розбір зловив, що я сама собі відмовляю правильну відповідь і все одно вгадую, тож такий тип я почала лишати порожнім, і на іспиті так само.",
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
    quote: "On the exam the English did the same thing as the sets, one word in the statement and the point turns. Show in text is what got me to stop translating the whole passage before I went in. Math I already knew, so those lessons stayed closed.",
    de: {
      outcome: "Rang 34",
      quote: "In der Prüfung hat Englisch dasselbe gemacht wie die Sets, ein Wort in der Aussage und der Punkt dreht sich. Über Show in text hab ich aufgehört, vorher die ganze Passage zu übersetzen. Mathe konnte ich schon, die Lektionen dazu sind zu geblieben.",
    },
    uk: {
      outcome: "Місце 34",
      quote: "На іспиті англійська робила те саме, що й набори: одне слово в твердженні і сенс перевертається. Через Show in text я перестав перед цим перекладати весь текст. Математику я вже знав, ті уроки лишились закритими.",
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
    quote: "I thought someone would walk me through the topics. What I got was practice sets, with short explanations after them. There are lessons, I opened two. I still worked through the mocks. The format is useful and I had to piece the topics together myself, so I left it at 3.",
    de: {
      outcome: "Rang 176",
      quote: "Ich dachte, da geht jemand die Themen mit mir durch. Bekommen hab ich Übungssets, mit kurzen Erklärungen danach. Lektionen gibt es, zwei hab ich aufgemacht. Die Mocks hab ich trotzdem durchgearbeitet. Das Format ist brauchbar, die Themen hab ich mir selbst zusammensetzen müssen, deshalb eine 3.",
    },
    uk: {
      outcome: "Місце 176",
      quote: "Думав, хтось проведе мене по темах. Отримав практичні набори, з короткими поясненнями після них. Уроки є, я відкрив два. Моки все одно пройшов. Формат корисний, а теми довелось збирати самому, тож лишив 3.",
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
    quote: "Short sets are a good length, you finish a block and you can stop, and I left the full mock for Sundays. Around May the timer started to wear me out. The questions themselves were fine, so 4 from me.",
    de: {
      outcome: "Rang 51",
      quote: "Kurze Sets haben eine gute Länge, ein Block und man kann aufhören, den ganzen Mock hab ich auf Sonntag gelegt. Gegen Mai hat der Timer angefangen, mich müde zu machen. Die Fragen selbst waren in Ordnung, deshalb eine 4 von mir.",
    },
    uk: {
      outcome: "Місце 51",
      quote: "Короткі набори хорошої довжини, закінчила блок і можна зупинитись, а повний мок я лишала на неділю. Ближче до травня таймер почав вимотувати. Самі питання були нормальні, тож від мене 4.",
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
    quote: "School notes didn't line up with these questions. The correction goes line by line and it's pretty direct, and I needed that, the points I lost were on wording I thought I already knew. I still go too fast on the first ten of a set.",
    de: {
      outcome: "Rang 11",
      quote: "Schulnotizen haben zu diesen Fragen nicht gepasst. Die Korrektur geht Zeile für Zeile und ist ziemlich direkt, und das hab ich gebraucht, die Punkte hab ich an Formulierungen verloren, die ich schon kannte. Die ersten zehn in einem Set mach ich immer noch zu schnell.",
    },
    uk: {
      outcome: "Місце 11",
      quote: "Шкільні нотатки з цими питаннями не збігались. Розбір іде рядок за рядком і досить прямий, і мені це було треба, бали я втрачав на формулюваннях, які ніби вже знав. Перші десять у наборі я досі роблю зашвидко.",
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
    quote: "The math timer beeps very quietly. I miss it, guess the last few, and the correction takes the points, which is fair. I'd just turn the beep up. With only a few weeks I'd still start with the mocks.",
    de: {
      outcome: "Rang 214",
      quote: "Der Mathe-Timer piepst sehr leise. Ich überhör ihn, rat die letzten paar, und die Korrektur zieht die Punkte ab, was fair ist. Ich würd nur den Piep lauter drehen. Mit nur ein paar Wochen würd ich trotzdem mit den Mocks anfangen.",
    },
    uk: {
      outcome: "Місце 214",
      quote: "Таймер з математики пищить дуже тихо. Я його пропускаю, вгадую останні кілька, і розбір знімає бали, це справедливо. Я б тільки зробила писк гучнішим. Якби було лише кілька тижнів, все одно почала б з моків.",
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
    quote: "Changing answers at the end was a habit of mine, and the breakdown kept showing those changes were worse. By May I trusted the first read more. On the day I still changed one, and I already knew from the course that it was probably the worse choice.",
    de: {
      outcome: "Rang 67",
      quote: "Antworten am Ende noch zu ändern war bei mir eine Angewohnheit, und die Auswertung hat immer wieder gezeigt, dass die Änderungen schlechter waren. Ab Mai hab ich dem ersten Lesen mehr getraut. Am Tag hab ich trotzdem eine geändert, und vom Kurs wusste ich schon, dass das wahrscheinlich die schlechtere Wahl war.",
    },
    uk: {
      outcome: "Місце 67",
      quote: "Міняти відповіді в кінці була моя звичка, і розбір раз у раз показував, що ці зміни гірші. З травня я більше довіряла першому прочитанню. На іспиті одну все одно змінила, і з курсу вже знала, що це, ймовірно, гірший вибір.",
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
    quote: "One set is about 25 minutes and it works on a phone, so it fits after work. The questions are the kind you actually need.",
    de: {
      outcome: "Rang 173",
      quote: "Ein Set dauert ungefähr 25 Minuten und geht am Handy, also passt es nach der Arbeit. Die Fragen sind die Sorte, die man wirklich braucht.",
    },
    uk: {
      outcome: "Місце 173",
      quote: "Один набір це десь 25 хвилин, і він іде з телефона, тож влазить після роботи. Питання саме ті, які справді потрібні.",
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
    quote: "There isn't a big study plan on top, you get the mocks. Guessing costs points in them, so I stopped, and that was the useful bit for me.",
    de: {
      outcome: "Rang 92",
      quote: "Einen großen Lernplan gibt es obendrauf nicht, du bekommst die Mocks. Raten kostet darin Punkte, also hab ich aufgehört, und das war für mich der brauchbare Teil.",
    },
    uk: {
      outcome: "Місце 92",
      quote: "Великого плану навчання зверху немає, даєш собі моки. Вгадування в них коштує балів, тож я перестав, і для мене це була корисна частина.",
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
    quote: "I sat in July. The paper felt like another mock, same sort of wording and the same time pressure. Glad the mocks were what I'd been doing.",
    de: {
      outcome: "Rang 23",
      quote: "Ich hab im Juli geschrieben. Die Prüfung hat sich angefühlt wie ein weiterer Mock, dieselbe Art Formulierung und derselbe Zeitdruck. Gut, dass die Mocks das waren, was ich gemacht hab.",
    },
    uk: {
      outcome: "Місце 23",
      quote: "Складав у липні. Іспит був як ще один мок, такі самі формулювання і такий самий час. Добре, що моки були тим, чим я займався.",
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
    quote: "The English business statements are what I paid for, and when I sat they were the familiar part. Notes friends sent from WiSo didn't match this course. Math notation in the sets was never what held me up.",
    de: {
      outcome: "Rang 109",
      quote: "Die englischen Business-Aussagen sind das, wofür ich gezahlt hab, und als ich geschrieben hab, waren sie der vertraute Teil. Notizen, die Freunde aus WiSo geschickt haben, haben zu diesem Kurs nicht gepasst. Die Mathe-Notation in den Sets hat mich nie aufgehalten.",
    },
    uk: {
      outcome: "Місце 109",
      quote: "Англійські бізнес-твердження це те, за що я платила, і коли я складала, вони були знайомою частиною. Нотатки, які друзі слали з WiSo, до цього курсу не підходили. Математичний запис у наборах мене ніколи не тримав.",
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
    quote: "I almost skipped paying, my brother said these sites are all the same. The sets are fussier than the free pdfs I already had. I opened them most evenings anyway.",
    de: {
      outcome: "Rang 231",
      quote: "Ich hätt fast nicht gezahlt, mein Bruder sagt, diese Seiten sind alle gleich. Die Sets sind kleinlicher als die gratis PDFs, die ich schon hatte. Trotzdem hab ich sie die meisten Abende aufgemacht.",
    },
    uk: {
      outcome: "Місце 231",
      quote: "Мало не пропустив оплату, брат каже, ці сайти всі однакові. Набори прискіпливіші за безкоштовні pdf, які в мене вже були. Все одно відкривав їх більшість вечорів.",
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
    quote: "I opened the demo before paying, to see the format. It was fine. Dry, and very specific, which is what I wanted once I saw it. For three months I did the mocks at night and barely touched the lessons. Lectures aren't really in there.",
    de: {
      outcome: "Rang 58",
      quote: "Demo aufgemacht, bevor ich zahl, um das Format zu sehen. War in Ordnung. Trocken und sehr konkret, und genau das wollt ich, sobald ich es gesehen hab. Drei Monate hab ich die Mocks nachts gemacht und die Lektionen kaum angerührt. Vorlesungen sind da nicht wirklich drin.",
    },
    uk: {
      outcome: "Місце 58",
      quote: "Відкрила демо перед оплатою, щоб побачити формат. Було нормально. Сухе і дуже конкретне, і саме це мені було треба, щойно я це побачила. Три місяці робила моки вночі і майже не чіпала уроки. Лекцій там по суті немає.",
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
    quote: "Second time now. First year I always left Sprachverständnis until nothing was left in me, and the score stuck there. This time I put that block first in the mocks and I went into the exam the same way. I still don't love the order, but it was the right one.",
    de: {
      outcome: "Rang 188",
      quote: "Zweites Mal jetzt. Im ersten Jahr hab ich Sprachverständnis immer nach hinten gelegt, bis nichts mehr da war, und der Score ist dort hängen geblieben. Diesmal hab ich den Block in den Mocks zuerst gemacht und bin genauso in die Prüfung. Die Reihenfolge find ich immer noch nicht toll, aber sie war die richtige.",
    },
    uk: {
      outcome: "Місце 188",
      quote: "Тепер удруге. Першого року я завжди лишала Sprachverständnis на кінець, поки вже нічого не лишалось, і бал там і застряг. Цього разу я ставила цей блок у моках першим і так само зайшла на іспит. Порядок мені досі не дуже, але він був правильний.",
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
    quote: "The sets in May already had me around the back half, and that's where I landed. They didn't pull my German up. Math in there is ordinary. I never expected a few months of sets to fix that. 3 from me, seeing it early was worth having.",
    de: {
      outcome: "Rang 2011",
      quote: "Die Sets im Mai hatten mich schon in der hinteren Hälfte, und dort bin ich auch gelandet. Mein Deutsch haben sie nicht hochgezogen. Mathe darin ist gewöhnlich. Ein paar Monate Sets sollten das auch nicht richten. Eine 3 von mir, es früh zu sehen war es wert.",
    },
    uk: {
      outcome: "Місце 2011",
      quote: "Набори в травні вже тримали мене в другій половині, і там я й опинився. Німецьку вони мені не підтягнули. Математика там звичайна. Кілька місяців наборів це й не мали виправити. Від мене 3, побачити це рано було варто.",
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
    quote: "My brother sent me files from the BBE course. Different exam, they didn't do anything for my German. After a few days I left them. In the WiSo sets the German statements are what I needed, math was never the tight part for me.",
    de: {
      outcome: "Rang 733",
      quote: "Mein Bruder hat mir Dateien aus dem BBE-Kurs geschickt. Anderes Examen, für mein Deutsch haben die nichts gebracht. Nach ein paar Tagen hab ich sie liegen lassen. In den WiSo-Sets sind die deutschen Aussagen das, was ich gebraucht hab, Mathe war bei mir nicht der knappe Teil.",
    },
    uk: {
      outcome: "Місце 733",
      quote: "Брат надіслав файли з курсу BBE. Інший іспит, для моєї німецької вони нічого не дали. Через кілька днів я їх залишила. У наборах WiSo німецькі твердження це те, що мені було треба, математика в мене не була вузьким місцем.",
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
    quote: "The economics statements here are tighter than what we did at school. I kept missing the verb, and underlining it helped more than the grammar pages, so I left those pages alone.",
    de: {
      outcome: "Rang 1340",
      quote: "Die Wirtschaftsaussagen hier sind enger als das, was wir in der Schule gemacht haben. Das Verb hab ich dauernd verpasst, und es zu unterstreichen hat mehr gebracht als die Grammatikseiten, die hab ich dann gelassen.",
    },
    uk: {
      outcome: "Місце 1340",
      quote: "Економічні твердження тут щільніші, ніж те, що ми робили в школі. Дієслово я весь час пропускав, і підкреслювати його допомогло більше за сторінки з граматики, тож їх я залишив.",
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
    quote: "Wirtschaft verstehen here isn't a summary of the book. My own summaries didn't look like the statements, they just mixed me up. After a few weeks with the cases I dropped the summaries. The cases are what I open.",
    de: {
      outcome: "Rang 455",
      quote: "Wirtschaft verstehen ist hier keine Zusammenfassung vom Buch. Meine eigenen Zusammenfassungen haben nicht ausgeschaut wie die Aussagen, die haben mich nur durcheinandergebracht. Nach ein paar Wochen mit den Fällen hab ich die Zusammenfassungen sein lassen. Die Fälle mach ich auf.",
    },
    uk: {
      outcome: "Місце 455",
      quote: "Wirtschaft verstehen тут це не конспект книжки. Мої власні конспекти не були схожі на твердження, вони тільки плутали. Через кілька тижнів з кейсами я конспекти залишив. Кейси це те, що я відкриваю.",
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
    quote: "In February I nearly switched over to the BBE course, someone said the German one is just more crowded. With the timed sets, crowded didn't feel harder. I still spent a month talking myself through it. The tasks were fine the whole time. 4, because of that month.",
    de: {
      outcome: "Rang 1204",
      quote: "Im Februar wär ich fast auf den BBE-Kurs gewechselt, jemand meinte, der deutsche sei nur voller. Mit den Aufgaben auf Zeit hat sich voller nicht schwerer angefühlt. Trotzdem hab ich einen Monat mit mir geredet. Die Aufgaben waren die ganze Zeit in Ordnung. 4 Sterne, wegen dem Monat.",
    },
    uk: {
      outcome: "Місце 1204",
      quote: "У лютому я мало не перейшла на курс BBE, хтось сказав, що німецький просто більш людний. З наборами на час людно не відчувалось важче. Місяць я все одно проговорювала це сама з собою. Завдання весь час були нормальні. 4, через той місяць.",
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
    quote: "I learned partial points in the course, school didn't have that. At the start I ticked everything in the mocks, one set took the points straight off, and after that I left things blank. Same on the exam. The German in the materials was no problem for me.",
    de: {
      outcome: "Rang 312",
      quote: "Teilpunkte hab ich im Kurs gelernt, in der Schule gab es das nicht. Am Anfang hab ich in den Mocks alles angekreuzt, ein Set hat die Punkte gleich abgezogen, und danach hab ich Sachen leer gelassen. Auf der Prüfung genauso. Mit dem Deutsch im Material hatte ich kein Problem.",
    },
    uk: {
      outcome: "Місце 312",
      quote: "Часткові бали я вивчила в курсі, у школі такого не було. Спочатку в моках я ставила все, один набір одразу зняв бали, і після того я лишала порожнім. На іспиті так само. З німецькою в матеріалах у мене проблем не було.",
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
    quote: "Second time through, the grammar pages didn't add much. Short passages on most days moved me more, slowly. Sprachverständnis is still the part I like least, so not a full 5, but it stopped pulling the rest down.",
    de: {
      outcome: "Rang 1677",
      quote: "Beim zweiten Durchgang haben die Grammatikseiten nicht viel dazugetan. Kurze Texte an den meisten Tagen haben mich mehr weitergebracht, langsam. Sprachverständnis ist immer noch der Teil, den ich am wenigsten mag, also keine volle 5, aber er hat den Rest nicht mehr runtergezogen.",
    },
    uk: {
      outcome: "Місце 1677",
      quote: "Удруге сторінки з граматики мало що додали. Короткі тексти майже щодня зрушували більше, повільно. Sprachverständnis досі частина, яка мені подобається найменше, тож не повні 5, але вона перестала тягнути решту вниз.",
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
    quote: "I used to switch topic every 20 minutes and call that studying. The short mixed sets stopped me. Old notes were three subjects started and none of them finished, and the sets are what I actually used from the course.",
    de: {
      outcome: "Rang 860",
      quote: "Ich hab alle 20 Minuten das Thema gewechselt und das Lernen genannt. Die kurzen gemischten Sets haben mich gestoppt. In den alten Notizen waren drei Fächer angefangen und keins fertig, und die Sets sind das, was ich vom Kurs wirklich benutzt hab.",
    },
    uk: {
      outcome: "Місце 860",
      quote: "Я міняла тему кожні 20 хвилин і називала це навчанням. Короткі змішані набори це зупинили. У старих нотатках три предмети почато і жоден не закінчено, і набори це те, чим я справді користувалась з курсу.",
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
    quote: "I only do one full set a week, and I don't open the next one until I've looked at the correction. Otherwise I was just collecting scores. I still open the German block in the weeks I don't feel like it.",
    de: {
      outcome: "Rang 248",
      quote: "Ich mach nur ein ganzes Set pro Woche, und das nächste mach ich nicht auf, bevor ich die Korrektur angeschaut hab. Sonst hab ich nur Punkte gesammelt. Den deutschen Block mach ich auch in den Wochen auf, in denen ich keine Lust hab.",
    },
    uk: {
      outcome: "Місце 248",
      quote: "Роблю лише один повний набір на тиждень і наступний не відкриваю, поки не подивлюсь розбір. Інакше я просто збирав бали. Німецький блок все одно відкриваю тими тижнями, коли не хочеться.",
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
    quote: "Both tracks come in the one purchase, and that's why I got it, my parents couldn't pick. Math is only once, I wasn't redoing derivatives in the other language. The language sections aren't the same thing. I took the BBE seat. The WiSo sets had been there the whole time, so I wasn't choosing blind.",
    de: {
      outcome: "BBE Rang 88, und ein WiSo-Platz",
      quote: "Beide Tracks sind in einem Kauf, deshalb hab ich ihn genommen, meine Eltern konnten sich nicht entscheiden. Mathe ist nur einmal, Ableitungen mach ich nicht noch in der anderen Sprache. Die Sprachteile sind nicht dasselbe. Den BBE-Platz hab ich genommen. Die WiSo-Sets waren die ganze Zeit da, also hab ich nicht blind gewählt.",
    },
    uk: {
      outcome: "BBE місце 88, і місце на WiSo",
      quote: "Обидва треки в одній покупці, тому я її і взяла, батьки не могли обрати. Математика лише раз, похідні іншою мовою я не переробляла. Мовні розділи це не одне й те саме. Взяла місце на BBE. Набори WiSo були весь час поруч, тож я обирала не наосліп.",
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
    quote: "The two language sets don't match each other, and I kept treating them like they did. In the first week I missed a German question I'd just got right in English. I stopped putting both language blocks on the same evening. I ended up on WiSo. It's a 4 because doing both is heavier than it looks on the page, and the work itself is fine.",
    de: {
      outcome: "Auf WiSo eingeschrieben",
      quote: "Die zwei Sprachsets passen nicht zueinander, und ich hab sie weiter behandelt, als würden sie das. In der ersten Woche lag ich auf Deutsch daneben bei einer Frage, die ich auf Englisch gerade richtig hatte. Danach nicht mehr beide Sprachblöcke am selben Abend. Gelandet bin ich auf WiSo. Eine 4, weil beides schwerer ist, als es auf der Seite aussieht, und die Arbeit selbst ist in Ordnung.",
    },
    uk: {
      outcome: "Вступив на WiSo",
      quote: "Два мовні набори не збігаються між собою, а я й далі ставився до них так, ніби збігаються. Першого тижня промахнувся в німецькому питанні, яке щойно правильно зробив англійською. Потім не ставив обидва мовні блоки на один вечір. Зрештою на WiSo. Це 4, бо обидва разом важчі, ніж виглядає на сторінці, а сама робота нормальна.",
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
    quote: "I kept both languages in the package. Math once, and English and German not on the same day, or I mix the sets up. It's more than a single course, and for me that was right, I didn't have to drop a language halfway through.",
    de: {
      outcome: "Den BBE-Platz genommen",
      quote: "Beide Sprachen sind im Paket geblieben. Mathe einmal, und Englisch und Deutsch nicht am selben Tag, sonst bring ich die Sets durcheinander. Mehr als ein einzelner Kurs, und für mich hat das gepasst, ich musste keine Sprache mitten in der Vorbereitung streichen.",
    },
    uk: {
      outcome: "Взяла місце на BBE",
      quote: "Обидві мови лишились у пакеті. Математика один раз, а англійська і німецька не в один день, інакше я плутаю набори. Це більше, ніж один курс, і для мене так було правильно, мову посеред підготовки викидати не довелось.",
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
