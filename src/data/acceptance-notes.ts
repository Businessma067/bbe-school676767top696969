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
    quote:
      "So I open a mock, do it, then the explanation, and that's pretty much all I do, the other modes are sitting there but I don't go into them, and English feels a bit lighter than the rest, that bugs me a bit, but I keep coming back to the timed mocks.",
    de: {
      outcome: "Rang 156",
      quote:
        "Also ich mach einen Mock auf, mach ihn, dann die Erklärung, und das ist eigentlich alles, was ich mach, die anderen Modi sind da, aber ich geh da nicht rein, und Englisch fühlt sich ein bisschen leichter an als der Rest, das stört mich ein bisschen, aber ich komm immer wieder zu den Mocks auf Zeit zurück.",
    },
    uk: {
      outcome: "Місце 156",
      quote:
        "Ну я відкриваю мок, роблю його, потім пояснення, і це по суті все, що я роблю, інші режими є, але я туди не заходжу, і англійська трохи легша за решту, мене це трохи чіпляє, але я знову повертаюсь до моків на час.",
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
    quote:
      "My tutor spent two hours reading the textbook at me, and I still didn't know what I'd got wrong. Here it shows me straight away, and there are different modes so I'm not stuck on the same thing every evening, and I liked that more.",
    de: {
      outcome: "Rang 84",
      quote:
        "Mein Nachhilfelehrer hat mir zwei Stunden das Lehrbuch vorgelesen, und ich hab trotzdem nicht kapiert, wo ich daneben lag. Hier seh ich das sofort, und es gibt verschiedene Modi, also mach ich nicht jeden Abend dasselbe, und das war mir lieber.",
    },
    uk: {
      outcome: "Місце 84",
      quote:
        "Репетитор дві години читав мені підручник, і я все одно не розумів, що зробив не так. Тут це видно одразу, і режимів кілька, тож я не застрягаю щовечора на тому самому, і мені так більше сподобалось.",
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
    quote:
      "The explanations had already caught me talking myself out of the right answer on the economics questions. So I stopped guessing on those. I did the same in the real paper, and after I came out that part didn't worry me.",
    de: {
      outcome: "Rang 203",
      quote:
        "Die Erklärungen hatten mich bei den Wirtschaftsfragen schon erwischt, wie ich mir die richtige Antwort ausrede. Also hab ich da aufgehört zu raten. In der echten Prüfung hab ich's genauso gemacht, und als ich rauskam, hat mich der Teil nicht mehr beunruhigt.",
    },
    uk: {
      outcome: "Місце 203",
      quote:
        "Пояснення вже спіймали мене на тому, що в економіці я сама відмовлялась від правильної відповіді. Тож я перестала там вгадувати. На реальному іспиті зробила так само, і після того, як вийшла, ця частина мене вже не турбувала.",
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
    quote:
      "School English didn't prepare me for this, one word in the question flips the meaning and I used to translate every line before I picked an answer, but the explanation made me stop, and math I already knew so I barely open that part.",
    de: {
      outcome: "Rang 34",
      quote:
        "Schulenglisch hat mich darauf nicht vorbereitet, ein Wort in der Frage dreht die Bedeutung und ich hab früher jede Zeile übersetzt, bevor ich eine Antwort angekreuzt hab, aber die Erklärung hat mir das abgewöhnt, und Mathe konnte ich schon, also mach ich den Teil kaum auf.",
    },
    uk: {
      outcome: "Місце 34",
      quote:
        "Шкільна англійська мене до цього не підготувала, одне слово в питанні перевертає сенс, і я раніше перекладав кожен рядок, перед тим як обрати відповідь, але пояснення мене від цього відучило, а математику я вже знав, тож той розділ майже не відкриваю.",
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
    quote:
      "I passed, and I'd only got through about half the material, so yeah, there are more than enough tasks. The platform's good, I just never finished the rest.",
    de: {
      outcome: "Rang 128",
      quote:
        "Ich hab bestanden, und ich war nur ungefähr bei der Hälfte vom Material, also ja, da sind mehr als genug Aufgaben. Die Plattform ist gut, ich hab den Rest einfach nie fertig gemacht.",
    },
    uk: {
      outcome: "Місце 128",
      quote:
        "Я склала іспит, а матеріалу пройшла десь лише половину, тож так, завдань там більш ніж вистачає. Платформа хороша, решту я просто не доробла.",
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
    quote:
      "I thought a teacher was going to go through the topics with me. Nobody does. You get the tasks, and the explanations, and then you're on your own. I did the mocks anyway, I'd already paid, so stopping felt stupid. I still want someone teaching me, and you don't get that here.",
    de: {
      outcome: "Rang 176",
      quote:
        "Ich dachte, ein Lehrer geht die Themen mit mir durch. Macht keiner. Du kriegst die Aufgaben und die Erklärungen, und dann bist du allein damit. Die Mocks hab ich trotzdem gemacht, ich hatte schon gezahlt, also war aufhören blöd. Ich will trotzdem, dass mich jemand unterrichtet, und das kriegst du hier nicht.",
    },
    uk: {
      outcome: "Місце 176",
      quote:
        "Я думав, викладач пройде теми зі мною. Ніхто цього не робить. Там завдання, і пояснення, а далі ти сам. Моки я все одно зробив, бо вже заплатив, і кидати було тупо. Мені досі хочеться, щоб мене хтось учив, і цього тут немає.",
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
    quote:
      "I liked it, but personally I don't think it'll suit everyone, because it's fully self-study, and it's not for people who think someone's going to do the work for them. You have to actually study, and if you do, it's worth the money.",
    de: {
      outcome: "Rang 51",
      quote:
        "Mir hat's gefallen, aber ich persönlich glaub nicht, dass es jedem passt, weil es komplett Selbstlernen ist und nichts für Leute, die denken, jemand macht die Arbeit für sie. Man muss wirklich lernen, und wenn man das tut, ist es das Geld wert.",
    },
    uk: {
      outcome: "Місце 51",
      quote:
        "Мені сподобалось, але особисто я не думаю, що це всім підійде, бо це повністю самонавчання і не для тих, хто думає, що хтось зробить роботу за них. Треба реально вчитися, і якщо так робиш, це варте грошей.",
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
    quote:
      "On the other platforms I tried, the explanations didn't really help, but here they actually do, they go through the task from the start to the end, and the feedback comes back fast.",
    de: {
      outcome: "Rang 11",
      quote:
        "Auf den anderen Plattformen, die ich probiert hab, haben die Erklärungen nicht wirklich geholfen, aber hier schon, die gehen die Aufgabe von vorne bis hinten durch, und das Feedback kommt schnell zurück.",
    },
    uk: {
      outcome: "Місце 11",
      quote:
        "На інших платформах, які я пробував, пояснення майже не допомагали, а тут допомагають, розбирають завдання від початку до кінця, і фідбек приходить швидко.",
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
    quote:
      "The beep on the math timer is so quiet that I miss it, and then I'm guessing the last few, and the correction takes those points off, which is fair. If I only had a few weeks, I'd still start with the mocks.",
    de: {
      outcome: "Rang 214",
      quote:
        "Der Piepton beim Mathe-Timer ist so leise, dass ich ihn verpass, und dann rat ich die letzten paar, und die Korrektur zieht die Punkte ab, was fair ist. Hätt ich nur ein paar Wochen, würd ich trotzdem mit den Mocks anfangen.",
    },
    uk: {
      outcome: "Місце 214",
      quote:
        "Писк таймера з математики такий тихий, що я його пропускаю, і потім вгадую останні кілька, а розбір знімає ті бали, і це справедливо. Якби в мене було лише кілька тижнів, я б все одно почала з моків.",
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
    quote:
      "Changing my answers at the end was a bad habit. The breakdown after each mock kept showing me that it made the score worse, so by May I trusted the first answer more. In the actual exam I still changed one, I couldn't help it.",
    de: {
      outcome: "Rang 67",
      quote:
        "Antworten am Ende noch zu ändern war eine blöde Angewohnheit. Die Auswertung nach jedem Mock hat mir immer gezeigt, dass der Score davon schlechter wird, also hab ich ab Mai der ersten Antwort mehr getraut. In der Prüfung hab ich trotzdem eine geändert, ich konnt's nicht lassen.",
    },
    uk: {
      outcome: "Місце 67",
      quote:
        "У мене була погана звичка міняти відповіді в кінці. Розбір після кожного мока весь час показував, що бал від цього падає, тож з травня я більше довіряла першій відповіді. На реальному іспиті одну все одно змінила, не стрималась.",
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
    quote:
      "After work I do the tasks on my phone, one go is about 25 minutes and that's all I've got. There's a pile of material, so I haven't run out.",
    de: {
      outcome: "Rang 173",
      quote:
        "Nach der Arbeit mach ich die Aufgaben am Handy, ein Durchgang ist ungefähr 25 Minuten und mehr hab ich nicht. Es ist ein Haufen Material da, also ist mir noch keins ausgegangen.",
    },
    uk: {
      outcome: "Місце 173",
      quote:
        "Після роботи роблю завдання з телефону, один захід це десь 25 хвилин, і більше в мене немає. Матеріалу купа, тож він мені ще не закінчився.",
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
    quote: "I had a look at the other options, and compared with those, this is the best one.",
    de: {
      outcome: "Rang 92",
      quote: "Ich hab mir die anderen Optionen angeschaut, und verglichen mit denen ist das die beste.",
    },
    uk: {
      outcome: "Місце 92",
      quote: "Я глянув інші варіанти, і порівняно з ними цей найкращий.",
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
    quote:
      "For this money the platform is really worth it, there are lots of modes so it doesn't get boring, and the mocks let me go through the material. Then the mock builder, that's the best practice mode, because no other platform has it, so overall for the price it's great.",
    de: {
      outcome: "Rang 23",
      quote:
        "Für das Geld ist die Plattform wirklich das wert, es gibt jede Menge Modi, also wird's nicht langweilig, und mit den Mocks geh ich das Material durch. Und dann der Mock Builder, das ist der beste Übungsmodus, den hat keine andere Plattform, also ist es für den Preis insgesamt richtig gut.",
    },
    uk: {
      outcome: "Місце 23",
      quote:
        "За ці гроші платформа справді того варта, режимів купа, тож не набридає, і матеріал я проходжу на моках. А далі mock builder, це найкращий режим практики, бо більше ніде такого немає, тож за ціну загалом дуже добре.",
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
    quote:
      "I wanted the English business questions. In the real paper those were the ones I could just answer, and my friends' notes from WiSo didn't match this course. Math in here never slowed me down.",
    de: {
      outcome: "Rang 109",
      quote:
        "Ich wollte die englischen Business-Fragen. In der Prüfung waren das die, die ich einfach beantworten konnte, und die Notizen von Freunden aus WiSo haben zu diesem Kurs nicht gepasst. Mathe hier hat mich nie aufgehalten.",
    },
    uk: {
      outcome: "Місце 109",
      quote:
        "Я хотіла англійські бізнес-питання. На реальному іспиті я на них просто відповіла, а нотатки друзів з WiSo до цього курсу не підійшли. Математика тут мене ніколи не гальмувала.",
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
    quote:
      "I almost didn't pay, my brother kept saying every prep site is the same, but then I found the mock builder and the others don't have it, so I'm on it most evenings.",
    de: {
      outcome: "Rang 231",
      quote:
        "Ich hätt fast nicht gezahlt, mein Bruder hat dauernd gesagt, jede Vorbereitungsseite ist gleich, aber dann hab ich den Mock Builder gefunden, und den haben die anderen nicht, also sitz ich jetzt fast jeden Abend dort.",
    },
    uk: {
      outcome: "Місце 231",
      quote:
        "Я мало не заплатив, брат увесь час казав, що всі сайти для підготовки однакові, але потім я знайшов mock builder, а в інших його немає, тож тепер я там майже щовечора.",
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
    quote:
      "After the exam I was so glad I'd picked this course. The tasks were about 90% the same as the ones here, but in math there was one probability question I hadn't seen, and I think they made the exam harder on purpose this year. I did three mock exams, and that prepared me.",
    de: {
      outcome: "Rang 58",
      quote:
        "Nach der Prüfung war ich so froh, dass ich diesen Kurs genommen hab. Die Aufgaben waren ungefähr zu 90% dieselben wie hier, aber in Mathe war eine Wahrscheinlichkeitsfrage, die ich nicht gesehen hatte, und ich glaub, die haben die Prüfung dieses Jahr extra schwerer gemacht. Ich hab drei Mock-Prüfungen gemacht, und das hat mich vorbereitet.",
    },
    uk: {
      outcome: "Місце 58",
      quote:
        "Після іспиту я була дуже рада, що обрала цей курс. Завдання були десь на 90% такі самі, як тут, але в математиці було одне питання з ймовірності, якого я не бачила, і я думаю, цього року іспит навмисно зробили важчим. Я зробила три мок-іспити, і це мене підготувало.",
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
    quote:
      "Second time for me, and the first year I always shoved Sprachverständnis right to the end, until there was nothing left, and the score got stuck right there. This time I did that block first in the mocks and in the actual exam too, I still don't like the order, but it was the right one.",
    de: {
      outcome: "Rang 188",
      quote:
        "Zweites Mal für mich, und im ersten Jahr hab ich Sprachverständnis immer ganz nach hinten geschoben, bis nichts mehr übrig war, und genau dort ist der Score hängen geblieben. Diesmal hab ich den Block in den Mocks zuerst gemacht und in der Prüfung auch, die Reihenfolge mag ich immer noch nicht, aber sie war die richtige.",
    },
    uk: {
      outcome: "Місце 188",
      quote:
        "У мене це вдруге, і першого року я завжди відсувала Sprachverständnis аж на кінець, поки нічого не лишалось, і бал застряг саме там. Цього разу я зробила цей блок у моках першим і на реальному іспиті теж, порядок мені досі не подобається, але він був правильний.",
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
    quote:
      "Back in May the tasks already had me in the back half, and that's the half I landed in. My German hasn't got any better from them, the math is ordinary, and I never thought a few months here would fix my German. I'm glad I saw where I stood this early though.",
    de: {
      outcome: "Rang 2011",
      quote:
        "Schon im Mai haben mich die Aufgaben in die hintere Hälfte gebracht, und dort bin ich auch gelandet. Mein Deutsch ist davon nicht besser geworden, Mathe ist gewöhnlich, und ich hab nie gedacht, dass ein paar Monate hier mein Deutsch richten. Ich bin aber froh, dass ich so früh gesehen hab, wo ich steh.",
    },
    uk: {
      outcome: "Місце 2011",
      quote:
        "Ще в травні завдання вже тримали мене в другій половині, і там я й опинився. Німецька від них кращою не стала, математика звичайна, і я ніколи не думав, що кілька місяців тут виправлять мою німецьку. Але я радий, що так рано побачив, де я стою.",
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
    quote:
      "My brother sent me stuff from the BBE course, different exam, it didn't do anything for my German, and after a few days I left it. On WiSo the German questions are what I actually needed.",
    de: {
      outcome: "Rang 733",
      quote:
        "Mein Bruder hat mir Sachen aus dem BBE-Kurs geschickt, anderes Examen, für mein Deutsch hat das nichts gebracht, und nach ein paar Tagen hab ich's liegen lassen. Bei WiSo sind die deutschen Fragen das, was ich wirklich gebraucht hab.",
    },
    uk: {
      outcome: "Місце 733",
      quote:
        "Брат надіслав мені матеріали з курсу BBE, інший іспит, для моєї німецької це нічого не дало, і через кілька днів я це залишила. На WiSo німецькі питання це те, що мені справді було треба.",
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
    quote:
      "I keep missing the verb on the economics questions, they're harder than they were in school, and the explanations helped more than the grammar pages, so I don't open the grammar pages anymore.",
    de: {
      outcome: "Rang 1340",
      quote:
        "Ich verpass dauernd das Verb in den Wirtschaftsfragen, die sind schwerer als in der Schule, und die Erklärungen haben mehr gebracht als die Grammatikseiten, also mach ich die Grammatikseiten nicht mehr auf.",
    },
    uk: {
      outcome: "Місце 1340",
      quote:
        "Я весь час пропускаю дієслово в економічних питаннях, вони важчі, ніж були в школі, і пояснення допомогли більше за сторінки з граматики, тож я перестав відкривати граматичні сторінки.",
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
    quote: "After the exam I noticed the mocks were just the exam again.",
    de: {
      outcome: "Rang 96",
      quote: "Mir ist nach der Prüfung aufgefallen, die Mocks waren einfach die Prüfung noch mal.",
    },
    uk: {
      outcome: "Місце 96",
      quote: "Після іспиту я помітила, моки були просто той самий іспит ще раз.",
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
    quote:
      "Wirtschaft verstehen here, that's not a summary of the book. My own summaries didn't look like the questions, they just confused me, so after a few weeks I dropped them and now I do the cases, those are what I open.",
    de: {
      outcome: "Rang 455",
      quote:
        "Wirtschaft verstehen hier, das ist keine Zusammenfassung vom Buch. Meine eigenen Zusammenfassungen haben nicht ausgeschaut wie die Fragen, die haben mich nur verwirrt, also hab ich sie nach ein paar Wochen sein lassen und mach jetzt die Fälle, die mach ich auf.",
    },
    uk: {
      outcome: "Місце 455",
      quote:
        "Wirtschaft verstehen тут, це не конспект книжки. Мої власні конспекти не були схожі на питання, вони мене тільки плутали, тож через кілька тижнів я їх залишив і тепер роблю кейси, їх я і відкриваю.",
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
    quote:
      "Someone said in February the German course was just more crowded, and I nearly switched to BBE, but once I did the mocks they didn't feel harder, and the tasks were fine the whole time. I still argued with myself for a month, so I put a 4, and it's because of that month, not the platform.",
    de: {
      outcome: "Rang 1204",
      quote:
        "Jemand hat im Februar gesagt, der deutsche Kurs sei nur voller, und ich wär fast auf BBE gewechselt, aber als ich die Mocks gemacht hab, haben die sich nicht schwerer angefühlt, und die Aufgaben waren die ganze Zeit in Ordnung. Trotzdem hab ich einen Monat mit mir selbst diskutiert, also hab ich eine 4 gegeben, und die liegt an dem Monat, nicht an der Plattform.",
    },
    uk: {
      outcome: "Місце 1204",
      quote:
        "Хтось у лютому сказав, що німецький курс просто людніший, і я мало не перейшла на BBE, але коли я зробила моки, важчими вони не відчувались, і завдання весь час були нормальні. Місяць я все одно сперечалась сама з собою, тож я поставила 4, і це через той місяць, а не через платформу.",
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
    quote:
      "Partial points weren't a thing at my school, I only learned that here. At the start I ticked everything in the mocks, and one mock took the points straight off me. After that I left stuff blank instead, and in the actual exam too.",
    de: {
      outcome: "Rang 312",
      quote:
        "Teilpunkte gab's bei uns in der Schule nicht, das hab ich erst hier gelernt. Am Anfang hab ich in den Mocks alles angekreuzt, und ein Mock hat mir die Punkte sofort abgezogen. Danach hab ich lieber leer gelassen, und in der Prüfung auch.",
    },
    uk: {
      outcome: "Місце 312",
      quote:
        "Часткових балів у нас у школі не було, я зрозуміла це тільки тут. Спочатку в моках я відмічала все, і один мок одразу зняв мені бали. Після того я вже не заповнювала все, і на реальному іспиті теж.",
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
    quote:
      "I'm going through it again, and the grammar pages still don't add much, I get more out of the short texts on most days, slowly though. Sprachverständnis is still the part I like least, so I can't give a full 5, but it stopped dragging the rest down.",
    de: {
      outcome: "Rang 1677",
      quote:
        "Ich geh's noch mal durch, und die Grammatikseiten bringen immer noch nicht viel, aus den kurzen Texten hol ich an den meisten Tagen mehr raus, nur langsam. Sprachverständnis ist immer noch der Teil, den ich am wenigsten mag, also kann ich keine volle 5 geben, aber er zieht den Rest nicht mehr runter.",
    },
    uk: {
      outcome: "Місце 1677",
      quote:
        "Я проходжу це ще раз, і сторінки з граматики досі мало що дають, короткі тексти майже щодня дають мені більше, тільки повільно. Sprachverständnis досі частина, яка мені подобається найменше, тож повну 5 я б не поставив, але вона перестала тягнути решту вниз.",
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
    quote:
      "A new topic every 20 minutes, and I called that studying, my notes had three subjects started and none of them finished, until the short mixed tasks stopped me jumping around, and those are what I use from the course.",
    de: {
      outcome: "Rang 860",
      quote:
        "Alle 20 Minuten ein neues Thema, und das hab ich Lernen genannt, in den Notizen waren drei Fächer angefangen und keins fertig, bis die kurzen gemischten Aufgaben mich vom Springen abgebracht haben, und genau die benutz ich vom Kurs.",
    },
    uk: {
      outcome: "Місце 860",
      quote:
        "Нова тема кожні 20 хвилин, і я називала це навчанням, у нотатках три предмети початі і жоден не дописаний, поки короткі змішані завдання не зупинили це стрибання, і саме їх я з курсу використовую.",
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
    quote:
      "I only do one full mock a week, and I don't start the next one until I've read the explanation, because otherwise I was just collecting scores. I still open the German part in the weeks I don't feel like it.",
    de: {
      outcome: "Rang 248",
      quote:
        "Ich mach nur einen ganzen Mock die Woche, und den nächsten fang ich nicht an, bevor ich die Erklärung gelesen hab, weil ich sonst nur Scores gesammelt hab. Den deutschen Teil mach ich auch in den Wochen auf, in denen ich keine Lust hab.",
    },
    uk: {
      outcome: "Місце 248",
      quote:
        "Роблю лише один повний мок на тиждень і наступний не починаю, поки не прочитаю пояснення, бо інакше я просто збирав бали. Німецьку частину все одно відкриваю тими тижнями, коли не хочеться.",
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
    quote:
      "Both tracks come in the one purchase, that's why I got it, my parents couldn't choose. Math you only do once, so I wasn't doing derivatives again in the other language, and the language parts aren't the same thing. After the exam I took the BBE seat, and the WiSo tasks were there the whole time, so I wasn't choosing blind.",
    de: {
      outcome: "BBE Rang 88, und ein WiSo-Platz",
      quote:
        "Beide Tracks sind in einem Kauf, deshalb hab ich den genommen, meine Eltern konnten sich nicht entscheiden. Mathe macht man nur einmal, also hab ich Ableitungen nicht noch mal in der anderen Sprache gemacht, und die Sprachteile sind nicht dasselbe. Nach der Prüfung hab ich den BBE-Platz genommen, und die WiSo-Aufgaben waren die ganze Zeit da, also hab ich nicht blind gewählt.",
    },
    uk: {
      outcome: "BBE місце 88, і місце на WiSo",
      quote:
        "Обидва треки в одній покупці, тому я її і взяла, батьки не могли обрати. Математику робиш один раз, тож похідні іншою мовою я не переробляла, і мовні частини це не одне й те саме. Після іспиту я взяла місце на BBE, і завдання WiSo були весь час поруч, тож я обирала не наосліп.",
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
    quote:
      "I kept treating the English and the German like they were the same thing, and they're not, in the first week I got a German question wrong that I'd just got right in English. So I stopped doing both languages on the same evening and I ended up on WiSo, it's a 4 because doing both is more work than it looks, and the work itself is fine.",
    de: {
      outcome: "Auf WiSo eingeschrieben",
      quote:
        "Ich hab Englisch und Deutsch behandelt, als wären sie dasselbe, sind sie aber nicht, in der ersten Woche war ich auf Deutsch bei einer Frage daneben, die ich auf Englisch gerade richtig hatte. Also hab ich beide Sprachen nicht mehr am selben Abend gemacht und bin auf WiSo gelandet, eine 4, weil beides mehr Arbeit ist, als es aussieht, und die Arbeit selbst ist in Ordnung.",
    },
    uk: {
      outcome: "Вступив на WiSo",
      quote:
        "Я ставився до англійської і німецької так, ніби це одне й те саме, а це не так, першого тижня помилився в німецькому питанні, яке щойно правильно зробив англійською. Тож я перестав робити обидві мови в один вечір і опинився на WiSo, це 4, бо обидві разом це більше роботи, ніж виглядає, а сама робота нормальна.",
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
    quote:
      "If I do English and German on the same day I mix everything up, so I kept both languages in the package, but not on the same day, and math only once, more than one course was right for me, and I didn't have to drop a language halfway through.",
    de: {
      outcome: "Den BBE-Platz genommen",
      quote:
        "Wenn ich Englisch und Deutsch am selben Tag mach, bring ich alles durcheinander, also hab ich beide Sprachen im Paket behalten, aber nicht am selben Tag, und Mathe nur einmal, mehr als ein Kurs war für mich richtig, und eine Sprache auf halber Strecke streichen musste ich nicht.",
    },
    uk: {
      outcome: "Взяла місце на BBE",
      quote:
        "Якщо я роблю англійську і німецьку в один день, я все плутаю, тож я лишила обидві мови в пакеті, але не в один день, а математику лише раз, більше ніж один курс було для мене правильно, і мову на півдорозі я не викидала.",
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
