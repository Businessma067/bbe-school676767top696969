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
      "I sat in 2025, missed by a little, and spent this year on the mocks instead of another textbook. The thing that actually changed was leaving a blank when I was only pretty sure, because the sheet after a mock makes a guess look expensive. English still doesn't feel finished, which is why this is a 4. The July letter said rank 156, and that was enough.",
    de: {
      outcome: "Rang 156",
      quote:
        "Ich bin 2025 angetreten, knapp vorbeigegangen und habe dieses Jahr die Mocks gemacht statt noch ein Lehrbuch. Geändert hat sich, dass ich leer gelassen habe, wenn ich nur ziemlich sicher war, weil der Bogen nach einem Mock das Raten teuer aussehen lässt. Englisch fühlt sich immer noch nicht fertig an, deshalb ist das eine 4. Im Juli stand Rang 156 im Brief, und das hat gereicht.",
    },
    uk: {
      outcome: "Місце 156",
      quote:
        "Я складала у 2025, пройшла повз зовсім трохи і цей рік сиділа на моках, а не на ще одному підручнику. Справжня зміна була в тому, що я лишала порожнє, коли була лише майже впевнена, бо аркуш після мока робить вгадування дорогим. Англійська досі не відчувається закритою, тому це 4. У липневому листі було місце 156, і цього вистачило.",
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
      "My parents booked a tutor and he read the textbook out loud, so I went back to the timed sets. The Sunday score moved, slowly.",
    de: {
      outcome: "Rang 84",
      quote:
        "Meine Eltern haben einen Nachhilfelehrer gebucht, und er hat das Lehrbuch laut vorgelesen, also bin ich zu den Aufgaben auf Zeit zurück. Der Sonntagswert hat sich bewegt, langsam.",
    },
    uk: {
      outcome: "Місце 84",
      quote:
        "Батьки записали репетитора, і він читав підручник уголос, тож я повернувся до наборів на час. Недільний бал зрушив, повільно.",
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
      "In the hall I left three economics ones blank after I had already talked myself out of them on a mock. Rank 203 is the edge, and blank was the annoying choice that was actually right.",
    de: {
      outcome: "Rang 203",
      quote:
        "Im Saal habe ich drei Wirtschaftsaufgaben leer gelassen, nachdem ich sie mir in einem Mock schon ausgeredet hatte. Rang 203 ist die Kante, und leer war die nervige Entscheidung, die gestimmt hat.",
    },
    uk: {
      outcome: "Місце 203",
      quote:
        "У залі я лишила три економічні порожніми після того, як на моку вже сама собі їх відмовила. Місце 203 це край, і порожнє було дратівливим вибором, який виявився правильним.",
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
      "I came from a German school and thought English would be the easy third, but one word in the statement does the whole argument. It took about two months before I stopped translating every line in my head. Math I had already overcooked, so that part was fine.",
    de: {
      outcome: "Rang 34",
      quote:
        "Ich komme aus einer deutschen Schule und dachte, Englisch sei das leichte Drittel, aber ein Wort in der Aussage macht das ganze Argument. Es hat ungefähr zwei Monate gedauert, bis ich aufgehört habe, jeden Satz im Kopf zu übersetzen. Mathe hatte ich schon übertrieben, der Teil war in Ordnung.",
    },
    uk: {
      outcome: "Місце 34",
      quote:
        "Я зі школи з німецькою і думав, що англійська буде легкою третиною, але одне слово в твердженні тягне всю думку. Минуло близько двох місяців, поки я перестав перекладати кожен рядок у голові. Математику я вже переготував, тож той розділ був нормальний.",
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
    quote: "Thought I failed.",
    de: {
      outcome: "Rang 128",
      quote: "Dachte, durchgefallen.",
    },
    uk: {
      outcome: "Місце 128",
      quote: "Думала, що завалила.",
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
      "I thought the course would be mostly videos, and I barely opened that part. What I used was the mocks, a lot of them around one in the morning. Before this I was on a shared drive where half the files were some older format, so maybe the mess was mine. Rank 176 is a place, and I'm still giving it 3 stars because a lot of the work was just me sitting there. The format was new, and the rest I already had to do myself.",
    de: {
      outcome: "Rang 176",
      quote:
        "Ich dachte, der Kurs sei vor allem Videos, und den Teil habe ich kaum aufgemacht. Benutzt habe ich die Mocks, viele davon gegen ein Uhr. Davor war ich auf einem geteilten Drive, die Hälfte der Dateien irgendein älteres Format, also war das Durcheinander vielleicht meins. Rang 176 ist ein Platz, und ich gebe trotzdem 3 Sterne, weil viel von der Arbeit einfach ich war, der davor sitzt. Das Format war neu, den Rest musste ich sowieso selbst machen.",
    },
    uk: {
      outcome: "Місце 176",
      quote:
        "Я думав, що курс це здебільшого відео, і ту частину майже не відкривав. Користувався я моками, багато з них близько першої ночі. До цього сидів на спільному диску, де половина файлів була старішого формату, тож безлад, може, мій. Місце 176 є, і я все одно ставлю 3 зірки, бо багато роботи було просто тим, що я сидів над цим. Новим був формат, а решту все одно треба було робити самому.",
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
      "I work weekends, so it was about forty minutes after a shift and one full mock on Sunday, from March. That was enough, and starting the same thing in May would not have been. On the real paper I finished with a few minutes left, which April never did. I'm dropping a star because nobody mentions how grim those evenings are.",
    de: {
      outcome: "Rang 51",
      quote:
        "Ich arbeite am Wochenende, also waren es ungefähr vierzig Minuten nach der Schicht und sonntags ein ganzer Mock, ab März. Das hat gereicht, und dasselbe erst im Mai hätte nicht gereicht. Beim echten Papier war ich mit ein paar Minuten Rest fertig, im April nie. Einen Stern ziehe ich ab, weil niemand sagt, wie zäh diese Abende sind.",
    },
    uk: {
      outcome: "Місце 51",
      quote:
        "У вихідні я працюю, тож це було близько сорока хвилин після зміни і один повний мок у неділю, з березня. Цього вистачило, а те саме з травня вже ні. Справжній бланк я закінчила з кількома хвилинами, у квітні так не було. Одну зірку знімаю, бо ніхто не каже, які тоскні ці вечори.",
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
      "School economics made me sloppy: I knew the topic and still lost April points on the wording. Rank 11 looks clean, and the average hides how messy the attempts were.",
    de: {
      outcome: "Rang 11",
      quote:
        "Schul-VWL hat mich schlampig gemacht: Thema gekannt und im April trotzdem Punkte an der Formulierung verloren. Rang 11 sieht sauber aus, und der Schnitt versteckt, wie schlampig die Versuche waren.",
    },
    uk: {
      outcome: "Місце 11",
      quote:
        "Шкільна економіка зробила мене неуважним: тему знав і в квітні все одно втратив бали на формулюванні. Місце 11 виглядає чисто, а середнє ховає, якими неохайними були спроби.",
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
      "Time ran out on the last math cluster, so I left four blank, and a month earlier I would have filled them and paid for it. Rank 214 is the version where blanks beat guesses. If you only have six weeks, do the mocks, because another textbook does not teach the clock. It's a 4, since I wanted the math timer to start yelling sooner.",
    de: {
      outcome: "Rang 214",
      quote:
        "Beim letzten Matheblock war die Zeit weg, also habe ich vier leer gelassen, und einen Monat früher hätte ich sie ausgefüllt und dafür bezahlt. Rang 214 ist die Variante, in der Leer besser ist als Raten. Wer nur sechs Wochen hat, soll die Mocks machen, weil noch ein Lehrbuch die Uhr nicht beibringt. Es ist eine 4, weil ich wollte, dass der Mathe-Timer früher laut wird.",
    },
    uk: {
      outcome: "Місце 214",
      quote:
        "На останньому блоці з математики час закінчився, тож я лишила чотири порожніми, а місяць раніше заповнила б їх і заплатила за це. Місце 214 це варіант, де порожнє краще за вгадування. Якщо є лише шість тижнів, робіть моки, бо ще один підручник годинника не навчить. Це 4, бо я хотіла, щоб таймер з математики починав кричати раніше.",
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
      "I wrote down every answer I changed at the end of a mock, and most of those changes were wrong. On the day I changed two, and I still think about one of them. The letter came anyway.",
    de: {
      outcome: "Rang 67",
      quote:
        "Ich habe jede Antwort aufgeschrieben, die ich am Ende eines Mocks noch geändert habe, und die meisten Änderungen waren falsch. Am Tag selbst habe ich zwei geändert, über eine denke ich immer noch nach. Der Brief ist trotzdem gekommen.",
    },
    uk: {
      outcome: "Місце 67",
      quote:
        "Я записувала кожну відповідь, яку міняла в кінці мока, і більшість тих змін були хибні. У день іспиту змінила дві, про одну досі думаю. Лист усе одно прийшов.",
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
    quote: "Economics, not math.",
    de: {
      outcome: "Rang 141",
      quote: "Wirtschaft, nicht Mathe.",
    },
    uk: {
      outcome: "Місце 141",
      quote: "Економіка, не математика.",
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
      "Evenings, after work calls, about twenty-five minutes, because there was no eight-hour day. The exam felt long, but it did not feel like a different exam.",
    de: {
      outcome: "Rang 173",
      quote:
        "Abends, nach den Arbeitstelefonaten, ungefähr fünfundzwanzig Minuten, weil es keinen Achtstundentag gab. Die Prüfung hat sich lang angefühlt, aber nicht wie eine andere Prüfung.",
    },
    uk: {
      outcome: "Місце 173",
      quote:
        "Вечори, після робочих дзвінків, близько двадцяти п'яти хвилин, бо восьмигодинного дня не було. Іспит здався довгим, але не іншим іспитом.",
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
    quote:
      "Friends who never sat a timed paper asked how you know when to skip, and I don't have a theory for that. I have a pile of mocks where guessing already cost a rank I didn't want. That's the whole advice, and it's boring.",
    de: {
      outcome: "Rang 92",
      quote:
        "Freunde, die noch nie ein Papier auf Zeit geschrieben haben, haben gefragt, woher man wissen soll, wann man auslässt, und eine Theorie habe ich dafür nicht. Ich habe einen Stapel Mocks, bei denen Raten schon einen Rang gekostet hat, den ich nicht wollte. Das ist der ganze Rat, und er ist langweilig.",
    },
    uk: {
      outcome: "Місце 92",
      quote:
        "Друзі, які не писали бланка на час, спитали, звідки знати, коли пропускати, і теорії в мене на це немає. Є купа моків, де вгадування вже коштувало місце, якого я не хотів. Ось і вся порада, вона нудна.",
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
    quote: "Stopped changing answers.",
    de: {
      outcome: "Rang 23",
      quote: "Aufgehört, Antworten zu ändern.",
    },
    uk: {
      outcome: "Місце 23",
      quote: "Перестав міняти відповіді.",
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
      "I moved to Vienna in the spring, and German wasn't enough for WiSo, so BBE was the plan. English is still harder than class was in France. The math notation was fine, and the business statements took weeks before they stopped sounding foggy.",
    de: {
      outcome: "Rang 109",
      quote:
        "Ich bin im Frühjahr nach Wien gezogen, und Deutsch hat für WiSo nicht gereicht, also war BBE der Plan. Englisch ist immer noch schwerer als der Unterricht in Frankreich. Die Mathe-Notation war in Ordnung, und die Business-Aussagen haben Wochen gebraucht, bis sie nicht mehr neblig klangen.",
    },
    uk: {
      outcome: "Місце 109",
      quote:
        "Навесні я переїхала до Відня, і німецької на WiSo не вистачало, тож BBE був планом. Англійська досі важча, ніж заняття у Франції. Математичний запис був нормальний, а бізнес-твердження кілька тижнів звучали туманно.",
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
      "I refreshed the pdf twice because rank 231 looked wrong. It didn't make the exam easy, but a borderline paper was survivable, and skipping more than everyone else was apparently allowed.",
    de: {
      outcome: "Rang 231",
      quote:
        "Ich habe das PDF zweimal neu geladen, weil Rang 231 falsch aussah. Die Prüfung ist davon nicht leicht geworden, aber ein Papier an der Grenze war überlebbar, und mehr auszulassen als alle anderen war anscheinend erlaubt.",
    },
    uk: {
      outcome: "Місце 231",
      quote:
        "Я двічі оновив PDF, бо місце 231 виглядало неправильно. Іспит від цього легшим не став, але бланк на межі виявився прохідним, і пропускати більше за всіх, виявляється, можна.",
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
      "I did the demo first because I didn't want to pay and then hate the format. I didn't hate it. I hated how specific it is, and that's why I stayed for three months, mostly at night. The paper itself was quieter than the last mock. The rank is better than the mood I had walking out.",
    de: {
      outcome: "Rang 58",
      quote:
        "Zuerst die Demo, weil ich nicht zahlen und dann das Format hassen wollte. Gehasst habe ich es nicht. Gehasst habe ich, wie konkret es ist, und deshalb bin ich drei Monate geblieben, meistens abends. Das Papier selbst war ruhiger als der letzte Mock. Der Rang ist besser als die Stimmung beim Rausgehen.",
    },
    uk: {
      outcome: "Місце 58",
      quote:
        "Спочатку я пройшла демо, бо не хотіла платити і потім ненавидіти формат. Я його не зненавиділа. Я зненавиділа, наскільки він конкретний, і тому лишилась на три місяці, здебільшого вечорами. Сам бланк був спокійніший за останній мок. Місце краще за настрій, з яким я виходила.",
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
      "Second try. The first year I told myself I would just read Sprachverständnis carefully, and that is what buried the score. This time it was the first block of every mock, while I was still awake. I didn't like that order, but rank 188 says it was the right one.",
    de: {
      outcome: "Rang 188",
      quote:
        "Zweiter Versuch. Im ersten Jahr habe ich Sprachverständnis auf „einfach sorgfältig lesen“ geschoben, und genau das hat den Score begraben. Diesmal war es in jedem Mock der erste Block, solange ich noch wach war. Die Reihenfolge hat mir nicht gefallen, Rang 188 sagt aber, dass sie gestimmt hat.",
    },
    uk: {
      outcome: "Місце 188",
      quote:
        "Друга спроба. Першого року я казала собі, що Sprachverständnis просто уважно прочитаю, і саме це поховало бал. Цього разу це був перший блок у кожному моку, поки я ще не спала. Такий порядок мені не подобався, але місце 188 каже, що він був правильний.",
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
      "2011 is the back half, and WiSo has a lot of seats, so I'm not dressing that up. May already showed roughly where I would land. Results day was relief, not a surprise. The German wording was the whole fight, and the math was ordinary. It showed me the landing early, and it didn't turn me into someone else, so 3 is fair.",
    de: {
      outcome: "Rang 2011",
      quote:
        "2011 ist die hintere Hälfte, und WiSo hat viele Plätze, also rede ich das nicht schön. Der Mai hat schon ungefähr gezeigt, wo ich lande. Der Ergebnistag war Erleichterung, keine Überraschung. Die deutsche Formulierung war der ganze Kampf, und Mathe war gewöhnlich. Es hat mir die Landung früh gezeigt und mich nicht in jemand anderen verwandelt, deshalb ist 3 fair.",
    },
    uk: {
      outcome: "Місце 2011",
      quote:
        "2011 це друга половина, а на WiSo багато місць, тож я це не прикрашаю. Травень уже приблизно показав, куди я сяду. День результатів був полегшенням, а не сюрпризом. Німецьке формулювання було всією боротьбою, а математика звичайною. Воно рано показало посадку і не зробило мене іншою людиною, тому 3 це чесно.",
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
      "My brother sat BBE two years ago and kept sending English notes, which is the wrong paper. I used them for a month, my German got worse, which is obvious, and I was annoyed anyway. After that I stayed with the German statements, and math had time again. He still has opinions, and I have a place.",
    de: {
      outcome: "Rang 733",
      quote:
        "Mein Bruder hat vor zwei Jahren BBE gemacht und mir dauernd englische Notizen geschickt, also das falsche Papier. Einen Monat habe ich sie benutzt, mein Deutsch ist schlechter geworden, was logisch ist und mich trotzdem geärgert hat. Danach bin ich bei den deutschen Aussagen geblieben, und Mathe hatte wieder Zeit. Er hat immer noch Meinungen, ich habe einen Platz.",
    },
    uk: {
      outcome: "Місце 733",
      quote:
        "Брат складав BBE два роки тому і весь час надсилав англійські нотатки, а це не той бланк. Місяць я ними користувалась, німецька стала гіршою, що очевидно, і мене це все одно дратувало. Потім я лишилась на німецьких твердженнях, і в математики знову з'явився час. У нього досі є думки, а в мене є місце.",
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
      "I had German in school, but the economics statements are tighter than class. In April I missed a row because I saw the topic and skipped the verb, so on the last mock I marked the verb first.",
    de: {
      outcome: "Rang 1340",
      quote:
        "Ich hatte Deutsch in der Schule, aber die Wirtschaftsaussagen sind enger als der Unterricht. Im April habe ich eine Reihe daneben gehabt, weil ich das Thema gesehen und das Verb übersprungen habe, also habe ich beim letzten Mock zuerst das Verb markiert.",
    },
    uk: {
      outcome: "Місце 1340",
      quote:
        "Німецька в мене була в школі, але економічні твердження щільніші за урок. У квітні я провалив ряд, бо побачив тему і проскочив дієслово, тож на останньому моку спочатку позначав дієслово.",
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
    quote: "Time left, finally.",
    de: {
      outcome: "Rang 96",
      quote: "Endlich Zeit übrig.",
    },
    uk: {
      outcome: "Місце 96",
      quote: "Нарешті лишився час.",
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
      "I thought Wirtschaft verstehen would be a summary of the book, but summaries don't look like the statements. After a few weeks of cases I could tell which sentence was the trap and which one was only long. I was still tired after the exam, but I wasn't guessing what the paper was supposed to be.",
    de: {
      outcome: "Rang 455",
      quote:
        "Ich dachte, Wirtschaft verstehen sei eine Zusammenfassung aus dem Buch, aber Zusammenfassungen sehen nicht aus wie die Aussagen. Nach ein paar Wochen Fällen habe ich gesehen, welcher Satz die Falle ist und welcher nur lang ist. Nach der Prüfung war ich trotzdem kaputt, nur habe ich nicht mehr geraten, was das Papier überhaupt sein soll.",
    },
    uk: {
      outcome: "Місце 455",
      quote:
        "Я думав, що Wirtschaft verstehen це конспект з книжки, але конспекти не схожі на твердження. Після кількох тижнів кейсів я бачив, яке речення пастка, а яке просто довге. Після іспиту я все одно був виснажений, але вже не вгадував, чим цей бланк взагалі має бути.",
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
      "In February I almost moved the application to BBE, because someone said the German paper is just more crowded. Crowded isn't harder for me, since I read faster in German. The timed sets made that obvious in a boring way. I stopped having the same argument with myself every Sunday. It's a 4 rather than a 5, because that argument cost me a month.",
    de: {
      outcome: "Rang 1204",
      quote:
        "Im Februar hätte ich die Bewerbung fast auf BBE gelegt, weil jemand meinte, das deutsche Papier sei einfach voller. Voller ist für mich nicht schwerer, ich lese auf Deutsch schneller. Die Aufgaben auf Zeit haben das langweilig offensichtlich gemacht. Den Sonntagsstreit mit mir selbst habe ich dann gelassen. Es ist eine 4 und keine 5, weil dieser Streit einen Monat gekostet hat.",
    },
    uk: {
      outcome: "Місце 1204",
      quote:
        "У лютому я мало не перенесла заявку на BBE, бо хтось сказав, що німецький бланк просто більш людний. Людно для мене не важче, німецькою я читаю швидше. Набори на час зробили це нудно очевидним. Щонеділі сперечатись сама з собою я тоді припинила. Це 4, а не 5, бо та суперечка коштувала місяць.",
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
      "I came down for the test and studied from home. German wasn't the problem, partial credit was, because I answered everything, including things I would cross out in a normal exam. One ugly mock, with the points gone right there, fixed that faster than anyone's advice.",
    de: {
      outcome: "Rang 312",
      quote:
        "Ich bin zur Prüfung runtergefahren und habe von zu Hause gelernt. Deutsch war nicht das Problem, die Teilpunkte waren es, weil ich alles beantwortet habe, auch Sachen, die ich in einer normalen Klausur durchgestrichen hätte. Ein hässlicher Mock, bei dem die Punkte sofort weg waren, hat das schneller abgestellt als jeder Rat.",
    },
    uk: {
      outcome: "Місце 312",
      quote:
        "Я приїхала на іспит, а вчилась з дому. Німецька не була проблемою, проблемою були часткові бали, бо я відповідала на все, навіть на те, що на звичайному іспиті викреслила б. Один потворний мок, де бали зникли одразу, виправив це швидше за будь-чию пораду.",
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
      "German isn't my first language. Going through the grammar pages again did nothing, and fifteen minutes of passages on most days did something, slowly. I still don't love Sprachverständnis, but I got through it without the freeze from March. It isn't a 5, because it never felt comfortable, though it stopped pulling the rest of the paper down.",
    de: {
      outcome: "Rang 1677",
      quote:
        "Deutsch ist nicht meine erste Sprache. Die Grammatikseiten noch einmal durchzugehen hat nichts gebracht, und fünfzehn Minuten Texte an den meisten Tagen haben etwas gebracht, langsam. Sprachverständnis mag ich immer noch nicht, aber ich bin durchgekommen ohne das Einfrieren aus dem März. Es ist keine 5, weil es sich nie bequem angefühlt hat, aber den Rest des Papiers hat es nicht mehr runtergezogen.",
    },
    uk: {
      outcome: "Місце 1677",
      quote:
        "Німецька не моя перша мова. Ще раз пройти граматику не дало нічого, а п'ятнадцять хвилин текстів майже щодня дали дещо, повільно. Sprachverständnis я досі не люблю, але пройшов його без того ступору з березня. Це не 5, бо комфортно не було ніколи, хоча решту бланка воно більше не тягнуло вниз.",
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
      "A new topic every twenty minutes, and I called that revision, until the short mixed sets stopped me. The old notes were three subjects started and none of them finished. The paper was hard and familiar, which is the version I wanted.",
    de: {
      outcome: "Rang 860",
      quote:
        "Alle zwanzig Minuten ein neues Thema, und ich habe das Wiederholen genannt, bis die kurzen gemischten Sets mich gestoppt haben. In den alten Notizen waren drei Fächer angefangen und keins fertig. Das Papier war schwer und vertraut, also genau die Variante, die ich wollte.",
    },
    uk: {
      outcome: "Місце 860",
      quote:
        "Нова тема кожні двадцять хвилин, і я називала це повторенням, поки короткі змішані набори мене не зупинили. У старих нотатках було почато три предмети, і жоден не закінчено. Бланк був важкий і знайомий, тобто саме той варіант, який я хотіла.",
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
      "From April the rule was one full paper a week, and no second paper until I had actually reviewed the first, because otherwise I just collect numbers. Rank 248, and I still reviewed the German block on the weeks I didn't want to.",
    de: {
      outcome: "Rang 248",
      quote:
        "Ab April galt: ein ganzes Papier pro Woche, und kein zweites, bevor ich das erste wirklich angeschaut hatte, weil ich sonst nur Zahlen sammle. Rang 248, und den deutschen Block habe ich auch in den Wochen angeschaut, in denen ich nicht wollte.",
    },
    uk: {
      outcome: "Місце 248",
      quote:
        "З квітня правило було таке: один повний бланк на тиждень, і другого немає, поки я справді не розберу перший, бо інакше я просто збираю цифри. Місце 248, і німецький блок я розбирав навіть тими тижнями, коли не хотів.",
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
      "I signed up for both because nobody could say, with a straight face, which paper I should sit. The deal with my parents was both until the results, and then I choose. I did the math once, since I was not going to redo derivatives in a second language. The language parts are not the same thing, even though people talk as if they are. I took the BBE seat, and I still wrote the German paper so August would not be me wondering.",
    de: {
      outcome: "BBE Rang 88, und ein WiSo-Platz",
      quote:
        "Ich habe mich für beide angemeldet, weil mir niemand mit ernstem Gesicht sagen konnte, welches Papier ich schreiben soll. Die Abmachung mit meinen Eltern war, beide bis zu den Ergebnissen, und dann wählen. Mathe habe ich einmal gemacht, Ableitungen wollte ich nicht noch einmal in einer zweiten Sprache üben. Die Sprachteile sind nicht dasselbe, auch wenn Leute so tun. Ich habe den BBE-Platz genommen und das deutsche Papier trotzdem geschrieben, damit der August nicht die Frage ist.",
    },
    uk: {
      outcome: "BBE місце 88, і місце на WiSo",
      quote:
        "Я подалась на обидва, бо ніхто не міг серйозно сказати, який бланк мені писати. Домовленість з батьками була така: обидва до результатів, а потім вибір. Математику я зробила один раз, бо похідні другою мовою переробляти не збиралась. Мовні частини це не одне й те саме, хоча люди говорять так, ніби це так. Я взяла місце на BBE і все одно написала німецький бланк, щоб серпень не був питанням.",
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
      "They are different papers, and I kept acting as if an economics idea copies over one to one. On the first day with both I picked, in German, the trap I had just avoided in English. After that I stopped putting both language blocks on the same night. I enrolled on WiSo, because German is the Vienna part, and that was the point of the degree. It's a 4, because doing both is heavier than the page makes it look, and I wish someone had said that in the first week.",
    de: {
      outcome: "Auf WiSo eingeschrieben",
      quote:
        "Es sind verschiedene Papiere, und ich habe weiter so getan, als würde eine Wirtschaftsidee eins zu eins hinüberkopiert. Am ersten Tag mit beiden habe ich auf Deutsch die Falle gewählt, der ich auf Englisch gerade ausgewichen war. Danach habe ich aufgehört, beide Sprachblöcke am selben Abend zu machen. Eingeschrieben habe ich mich auf WiSo, weil Deutsch der Wien-Teil ist, und das war der Punkt am Studium. Es ist eine 4, weil beides schwerer ist, als es auf der Seite aussieht, und das hätte jemand in der ersten Woche sagen können.",
    },
    uk: {
      outcome: "Вступив на WiSo",
      quote:
        "Це різні бланки, а я й далі поводився так, ніби економічна ідея копіюється один в один. Першого дня з обома я вибрав німецькою пастку, якої щойно уникнув англійською. Після того перестав ставити обидва мовні блоки на один вечір. Я вступив на WiSo, бо німецька це віденська частина, і в цьому був сенс ступеня. Це 4, бо робити обидва важче, ніж виглядає на сторінці, і я хотів би, щоб це сказали на першому тижні.",
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
      "I wasn't dropping a language in April just so the week would look lighter. Math once, English on one day and German on another, so the two don't melt together. It was a heavier spring than my friends had with one exam. Both results came in, I took the BBE seat, and I still don't know if doing both was smart, but the panic in March didn't get to choose.",
    de: {
      outcome: "Den BBE-Platz genommen",
      quote:
        "Im April wollte ich keine Sprache streichen, nur damit die Woche leichter aussieht. Mathe einmal, Englisch an einem Tag und Deutsch am anderen, damit es nicht zusammenläuft. Es war ein schwereres Frühjahr als bei Freunden mit einer Prüfung. Beide Ergebnisse waren da, ich habe den BBE-Platz genommen, und ob beides klug war, weiß ich noch nicht, aber die Panik im März hat nicht für mich gewählt.",
    },
    uk: {
      outcome: "Взяла місце на BBE",
      quote:
        "У квітні я не збиралась викидати мову лише для того, щоб тиждень виглядав легшим. Математика один раз, англійська в один день і німецька в інший, щоб вони не злипались. Весна вийшла важчою, ніж у друзів з одним іспитом. Обидва результати прийшли, я взяла місце на BBE, і досі не знаю, чи обидва були розумним рішенням, але паніка в березні не обирала.",
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
      note.quote[0] !== note.quote[0]?.toUpperCase() ||
      !/[.,]/.test(note.quote),
  ) ||
  !originals.some((text) => wordCount(text) <= 3) ||
  !originals.some((text) => sentenceCount(text) >= 5) ||
  !ACCEPTANCE_NOTES.some((note) => note.track === "wiso" && note.sourceLang === "de") ||
  !ACCEPTANCE_NOTES.some((note) => note.track === "hybrid" && note.sourceLang === "de")
) {
  throw new Error("Acceptance notes must be 17 BBE, 11 WiSo, 3 Hybrid, and average 4.7.");
}
