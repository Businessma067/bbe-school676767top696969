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
      "I sat this in 2025 and missed, not by much, which is the worse kind of miss. This year I stopped ticking answers I was only pretty sure about, because the sheet after a mock makes a guess look expensive. English still doesn't feel finished, and that's why this is a 4 rather than a 5, but at least it stopped dragging the math down.",
    de: {
      outcome: "Rang 156",
      quote:
        "Ich bin 2025 angetreten und knapp vorbeigegangen, und knapp ist die blödere Variante. Dieses Jahr habe ich aufgehört, Antworten anzukreuzen, bei denen ich nur ziemlich sicher war, weil der Bogen nach einem Mock das Raten teuer aussehen lässt. Englisch fühlt sich immer noch nicht fertig an, deshalb ist das eine 4 und keine 5, aber wenigstens zieht es Mathe nicht mehr runter.",
    },
    uk: {
      outcome: "Місце 156",
      quote:
        "Я складала це у 2025 і пройшла повз, ненабагато, а це гірший варіант промаху. Цього року я перестала ставити відповіді, в яких була лише майже впевнена, бо аркуш після мока робить вгадування дорогим. Англійська досі не відчувається закритою, тому це 4, а не 5, але хоча б математику вона більше не тягне вниз.",
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
      "My parents booked a tutor for two hours, and he mostly read the textbook out loud, so I went back to the timed sets. The Sunday score moved slowly, but it did move.",
    de: {
      outcome: "Rang 84",
      quote:
        "Meine Eltern haben einen Nachhilfelehrer für zwei Stunden gebucht, und er hat vor allem das Lehrbuch laut vorgelesen, also bin ich zu den Aufgaben auf Zeit zurück. Der Sonntagswert hat sich langsam bewegt, aber er hat sich bewegt.",
    },
    uk: {
      outcome: "Місце 84",
      quote:
        "Батьки записали мене до репетитора на дві години, і він здебільшого читав підручник уголос, тож я повернувся до наборів на час. Недільний бал зрушив повільно, але зрушив.",
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
      "I guessed three economics items after I had already talked myself out of them, and then in the hall I left that type blank. Rank 203 is right on the edge, and leaving them blank turned out to be the annoying choice that was actually right.",
    de: {
      outcome: "Rang 203",
      quote:
        "Ich habe drei Wirtschaftsaufgaben geraten, nachdem ich sie mir schon ausgeredet hatte, und im Saal habe ich diesen Typ dann leer gelassen. Rang 203 ist genau die Kante, und leer lassen war die nervige Entscheidung, die am Ende gestimmt hat.",
    },
    uk: {
      outcome: "Місце 203",
      quote:
        "Я вгадала три економічні завдання вже після того, як сама собі їх відмовила, а в залі такий тип лишила порожнім. Місце 203 це саме край, і порожнє виявилось дратівливим, але правильним вибором.",
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
      "I came from a German school, so I thought English would be the easy third, but it isn't school English, because one word in the statement carries the whole argument. It took about two months before I stopped translating every line in my head. I had overcooked the math, and that part was fine.",
    de: {
      outcome: "Rang 34",
      quote:
        "Ich komme aus einer deutschen Schule, also dachte ich, Englisch sei das leichte Drittel, aber das ist kein Schulenglisch, weil ein Wort in der Aussage das ganze Argument trägt. Es hat ungefähr zwei Monate gedauert, bis ich aufgehört habe, jeden Satz im Kopf zu übersetzen. Mathe hatte ich übertrieben, und der Teil war in Ordnung.",
    },
    uk: {
      outcome: "Місце 34",
      quote:
        "Я зі школи з німецькою, тож думав, що англійська буде легкою третиною, але це не шкільна англійська, бо одне слово в твердженні тягне всю думку. Минуло близько двох місяців, поки я перестав перекладати кожен рядок у голові. Математику я переготував, і той розділ був нормальний.",
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
    quote: "I was sure I had failed, and then the letter said rank 128.",
    de: {
      outcome: "Rang 128",
      quote: "Ich war sicher, dass ich durchgefallen bin, und dann stand im Brief Rang 128.",
    },
    uk: {
      outcome: "Місце 128",
      quote: "Я була впевнена, що завалила, а в листі було місце 128.",
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
      "I'll be honest, I thought there would be more videos, and I barely opened that part. What I actually used was the mocks, a lot of them around 1am, because before this I was working off a shared drive where half the files were some older format, so maybe that's on me. The place is there, rank 176, but I'm giving it 3 stars, since a lot of the work was just me sitting with it. The format was the new part, and the rest I already had to do myself.",
    de: {
      outcome: "Rang 176",
      quote:
        "Ehrlich gesagt dachte ich, es gäbe mehr Videos, und den Teil habe ich kaum aufgemacht. Benutzt habe ich die Mocks, viele davon gegen ein Uhr nachts, weil ich davor auf einem geteilten Drive war, wo die Hälfte der Dateien irgendein älteres Format hatte, also lag das vielleicht an mir. Der Platz ist da, Rang 176, aber ich gebe 3 Sterne, weil viel von der Arbeit einfach ich war, der davor sitzt. Neu war das Format, und den Rest musste ich sowieso selbst machen.",
    },
    uk: {
      outcome: "Місце 176",
      quote:
        "Чесно, я думав, що буде більше відео, і ту частину майже не відкривав. Користувався я моками, багато з них близько першої ночі, бо до цього сидів на спільному диску, де половина файлів була якогось старішого формату, тож, може, це моє. Місце є, 176, але ставлю 3 зірки, бо багато роботи було просто тим, що я сидів над цим. Новим був формат, а решту все одно треба було робити самому.",
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
      "I work weekends, so the plan was dull: about forty minutes after a shift, and one full mock on Sunday, starting in March. That was enough, and starting the same thing in May would not have been. On the real paper I finished with a few minutes left, which never happened in April. I'm dropping a star because nobody mentions how grim those evenings are.",
    de: {
      outcome: "Rang 51",
      quote:
        "Ich arbeite am Wochenende, der Plan war also fad: ungefähr vierzig Minuten nach der Schicht und sonntags ein ganzer Mock, ab März. Das hat gereicht, und dasselbe erst im Mai hätte nicht gereicht. Beim echten Papier war ich mit ein paar Minuten Rest fertig, im April ist das nie passiert. Einen Stern ziehe ich ab, weil niemand sagt, wie zäh diese Abende sind.",
    },
    uk: {
      outcome: "Місце 51",
      quote:
        "У вихідні я працюю, тож план був нудний: близько сорока хвилин після зміни і один повний мок у неділю, з березня. Цього вистачило, а те саме з травня вже ні. Справжній бланк я закінчила з кількома хвилинами в запасі, у квітні так не було жодного разу. Одну зірку знімаю, бо ніхто не каже, які тоскні ці вечори.",
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
      "School economics made me sloppy, because I knew the topic and still lost April points on the wording, and the line-by-line partial credit was embarrassing. Rank 11 looks clean, but the average is hiding the messy attempts.",
    de: {
      outcome: "Rang 11",
      quote:
        "Schul-VWL hat mich schlampig gemacht, weil ich das Thema kannte und im April trotzdem Punkte an der Formulierung verloren habe, und die Teilpunkte Zeile für Zeile waren peinlich. Rang 11 sieht sauber aus, aber der Schnitt versteckt die schlampigen Versuche.",
    },
    uk: {
      outcome: "Місце 11",
      quote:
        "Шкільна економіка зробила мене неуважним, бо тему я знав, а в квітні все одно втратив бали на формулюванні, і часткові бали рядок за рядком були незручні. Місце 11 виглядає чисто, але середнє ховає неохайні спроби.",
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
      "Time ran out on the last math cluster, so I left four blank, and a month earlier I would have filled them in and paid for it. Rank 214 is the version where blanks beat guesses. If you only have six weeks, do the mocks, because another textbook does not teach the clock. It's a 4, since I wanted the math timer to start yelling sooner.",
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
      "I wrote down every answer I changed at the end of a mock, and most of those changes were wrong, so it took until May before I trusted the first read. On the day I changed two, and I still think about one of them, but the letter came anyway.",
    de: {
      outcome: "Rang 67",
      quote:
        "Ich habe jede Antwort aufgeschrieben, die ich am Ende eines Mocks noch geändert habe, und die meisten Änderungen waren falsch, deshalb hat es bis Mai gedauert, bis ich dem ersten Lesen getraut habe. Am Tag selbst habe ich zwei geändert, über eine denke ich immer noch nach, aber der Brief ist trotzdem gekommen.",
    },
    uk: {
      outcome: "Місце 67",
      quote:
        "Я записувала кожну відповідь, яку міняла в кінці мока, і більшість тих змін були хибні, тож до травня я не довіряла першому прочитанню. У день іспиту змінила дві, про одну досі думаю, але лист усе одно прийшов.",
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
    quote:
      "The weak part was economics, not math, because I kept choosing the opposite statement, and once that was obvious I stopped doing it.",
    de: {
      outcome: "Rang 141",
      quote:
        "Schwach war Wirtschaft, nicht Mathe, weil ich immer die gegenteilige Aussage gewählt habe, und als das offensichtlich war, habe ich damit aufgehört.",
    },
    uk: {
      outcome: "Місце 141",
      quote:
        "Слабким місцем була економіка, не математика, бо я раз у раз вибирав протилежне твердження, а коли це стало очевидним, перестав так робити.",
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
      "I studied in the evenings, after work calls, so there was no eight-hour day, and a session was about twenty-five minutes. The exam felt long, but it did not feel like a different exam.",
    de: {
      outcome: "Rang 173",
      quote:
        "Ich habe abends gelernt, nach den Arbeitstelefonaten, also gab es keinen Achtstundentag, und eine Einheit war ungefähr fünfundzwanzig Minuten. Die Prüfung hat sich lang angefühlt, aber nicht wie eine andere Prüfung.",
    },
    uk: {
      outcome: "Місце 173",
      quote:
        "Я вчилась вечорами, після робочих дзвінків, тож восьмигодинного дня не було, і одне заняття тривало близько двадцяти п'яти хвилин. Іспит здався довгим, але не іншим іспитом.",
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
      "Friends who had never sat a timed paper asked me afterwards how you even know when to skip, and I don't have a theory for that. I have a pile of mocks where guessing already cost a rank I didn't want. That's the advice, and it's boring, sorry.",
    de: {
      outcome: "Rang 92",
      quote:
        "Freunde, die noch nie ein Papier auf Zeit geschrieben haben, haben danach gefragt, woher man wissen soll, wann man auslässt, und eine Theorie habe ich dafür nicht. Ich habe einen Stapel Mocks, bei denen Raten schon einen Rang gekostet hat, den ich nicht wollte. Das ist der Rat, und er ist langweilig, sorry.",
    },
    uk: {
      outcome: "Місце 92",
      quote:
        "Друзі, які не писали жодного бланка на час, потім спитали, звідки взагалі знати, коли пропускати, і теорії в мене на це немає. Є купа моків, де вгадування вже коштувало місце, якого я не хотів. Ось і порада, вона нудна, вибачте.",
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
    quote: "I stopped rewriting answers at the end, and the rank came back as 23.",
    de: {
      outcome: "Rang 23",
      quote: "Ich habe aufgehört, Antworten am Ende umzuschreiben, und der Rang war 23.",
    },
    uk: {
      outcome: "Місце 23",
      quote: "Я перестав переписувати відповіді в кінці, і місце вийшло 23.",
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
      "I moved to Vienna in the spring, and German wasn't enough for WiSo, so BBE was the plan rather than a mood. English is still harder than class was in France, the math notation was fine, and the business statements took a long time before they stopped sounding foggy.",
    de: {
      outcome: "Rang 109",
      quote:
        "Ich bin im Frühjahr nach Wien gezogen, und Deutsch hat für WiSo nicht gereicht, also war BBE der Plan und keine Laune. Englisch ist immer noch schwerer als der Unterricht in Frankreich, die Mathe-Notation war in Ordnung, und die Business-Aussagen haben lange gebraucht, bis sie nicht mehr neblig klangen.",
    },
    uk: {
      outcome: "Місце 109",
      quote:
        "Навесні я переїхала до Відня, і німецької на WiSo не вистачало, тож BBE був планом, а не настроєм. Англійська досі важча, ніж заняття у Франції, математичний запис був нормальний, а бізнес-твердження довго звучали туманно.",
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
      "It's the kind of place where you refresh the PDF twice, because the row looks like it can't be right. It didn't make the exam easy, but it made a borderline paper survivable. I skipped more than anyone I talked to afterwards, and apparently that's allowed.",
    de: {
      outcome: "Rang 231",
      quote:
        "Es ist die Sorte Platz, bei der man das PDF zweimal neu lädt, weil die Zeile so aussieht, als könne sie nicht stimmen. Die Prüfung ist davon nicht leicht geworden, aber eine an der Grenze ist überlebbar geworden. Ich habe mehr ausgelassen als alle, mit denen ich danach geredet habe, und anscheinend darf man das.",
    },
    uk: {
      outcome: "Місце 231",
      quote:
        "Це той тип місця, коли оновлюєш PDF двічі, бо рядок виглядає так, ніби він не може бути правильним. Іспит від цього легшим не став, але бланк на межі став прохідним. Я пропустив більше, ніж усі, з ким говорив потім, і, виявляється, так можна.",
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
      "I did the demo first, because I didn't want to pay and then hate the format. I didn't hate it, I hated how specific it is, and that's why I stayed. It was three months, mostly at night, and the rank is better than the mood I had walking out.",
    de: {
      outcome: "Rang 58",
      quote:
        "Zuerst habe ich die Demo gemacht, weil ich nicht zahlen und dann das Format hassen wollte. Gehasst habe ich es nicht, gehasst habe ich, wie konkret es ist, und deshalb bin ich geblieben. Es waren drei Monate, meistens abends, und der Rang ist besser als die Stimmung beim Rausgehen.",
    },
    uk: {
      outcome: "Місце 58",
      quote:
        "Спочатку я пройшла демо, бо не хотіла платити і потім ненавидіти формат. Я його не зненавиділа, я зненавиділа, наскільки він конкретний, і тому лишилась. Це було три місяці, здебільшого вечорами, і місце краще за настрій, з яким я виходила.",
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
    quote:
      "This was my second try. The first year, Sprachverständnis was the part I told myself I would just read carefully, and it buried the score. This year it was the first block of every mock, while I was still awake. I didn't enjoy that order, but rank 188 says it was the right one.",
    de: {
      outcome: "Rang 188",
      quote:
        "Das war mein zweiter Versuch. Im ersten Jahr war Sprachverständnis der Teil, den ich angeblich einfach sorgfältig lesen würde, und er hat den Score begraben. Dieses Jahr war es in jedem Mock der erste Block, solange ich noch wach war. Die Reihenfolge hat mir nicht gefallen, aber Rang 188 sagt, dass sie gestimmt hat.",
    },
    uk: {
      outcome: "Місце 188",
      quote:
        "Це була друга спроба. Першого року Sprachverständnis був розділом, який я збиралась просто уважно прочитати, і він поховав бал. Цього року це був перший блок у кожному моку, поки я ще не спала. Такий порядок мені не подобався, але місце 188 каже, що він був правильний.",
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
      "2011 is the back half, and WiSo has a lot of seats, so I'm not dressing that up. May already showed roughly where I would land, and results day was relief rather than a surprise. The German wording was the whole fight, and the math was ordinary. It showed me the landing early, and it didn't turn me into someone else, so 3 is fair.",
    de: {
      outcome: "Rang 2011",
      quote:
        "2011 ist die hintere Hälfte, und WiSo hat viele Plätze, also rede ich das nicht schön. Der Mai hat schon ungefähr gezeigt, wo ich lande, und der Ergebnistag war Erleichterung, keine Überraschung. Die deutsche Formulierung war der ganze Kampf, und Mathe war gewöhnlich. Es hat mir die Landung früh gezeigt und mich nicht in jemand anderen verwandelt, deshalb ist 3 fair.",
    },
    uk: {
      outcome: "Місце 2011",
      quote:
        "2011 це друга половина, а на WiSo багато місць, тож я це не прикрашаю. Травень уже приблизно показав, куди я сяду, і день результатів був полегшенням, а не сюрпризом. Німецьке формулювання було всією боротьбою, а математика звичайною. Воно рано показало посадку і не зробило мене іншою людиною, тому 3 це чесно.",
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
    quote:
      "My brother sat BBE two years ago and would not stop sending English notes, which is the wrong paper. I used them for a month, my German got worse, which is obvious, and I was annoyed anyway. I stayed with the German statements after that, the math had time again, he still has opinions, and I have a place.",
    de: {
      outcome: "Rang 733",
      quote:
        "Mein Bruder hat vor zwei Jahren BBE gemacht und hörte nicht auf, englische Notizen zu schicken, und das ist das falsche Papier. Einen Monat habe ich sie benutzt, mein Deutsch wurde schlechter, was logisch ist, und genervt war ich trotzdem. Danach bin ich bei den deutschen Aussagen geblieben, Mathe hatte wieder Zeit, er hat immer noch Meinungen, und ich habe einen Platz.",
    },
    uk: {
      outcome: "Місце 733",
      quote:
        "Брат складав BBE два роки тому і не переставав надсилати англійські нотатки, а це не той бланк. Місяць я ними користувалась, німецька стала гіршою, що очевидно, і мене це все одно дратувало. Потім я лишилась на німецьких твердженнях, у математики знову з'явився час, у нього досі є думки, а в мене є місце.",
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
      "I had German in school, but the economics statements are tighter than class. In April I missed a whole row because I saw the topic and skipped the verb, so on the last mock I marked the verb first. It's a small change, and it was the one that mattered.",
    de: {
      outcome: "Rang 1340",
      quote:
        "Ich hatte Deutsch in der Schule, aber die Wirtschaftsaussagen sind enger als der Unterricht. Im April habe ich eine ganze Reihe daneben gehabt, weil ich das Thema gesehen und das Verb übersprungen habe, also habe ich beim letzten Mock zuerst das Verb markiert. Es ist eine kleine Änderung, und sie war die, die gezählt hat.",
    },
    uk: {
      outcome: "Місце 1340",
      quote:
        "Німецька в мене була в школі, але економічні твердження щільніші за урок. У квітні я провалив цілий ряд, бо побачив тему і проскочив дієслово, тож на останньому моку спочатку позначав дієслово. Зміна дрібна, і саме вона вирішила.",
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
    quote: "I finished with time left, which had never happened before, so I opened the PDF twice.",
    de: {
      outcome: "Rang 96",
      quote: "Ich war fertig und hatte noch Zeit, das war vorher nie passiert, also habe ich das PDF zweimal aufgemacht.",
    },
    uk: {
      outcome: "Місце 96",
      quote: "Я закінчила, і час ще лишився, раніше так не було, тож я двічі відкрила PDF.",
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
    quote:
      "I thought Wirtschaft verstehen would be a summary of the book, but summaries don't look like the statements. After a few weeks of cases I could tell which sentence was the trap and which one was only long. I was still tired after the exam, but I wasn't guessing what the paper even was.",
    de: {
      outcome: "Rang 455",
      quote:
        "Ich dachte, Wirtschaft verstehen sei eine Zusammenfassung aus dem Buch, aber Zusammenfassungen sehen nicht aus wie die Aussagen. Nach ein paar Wochen mit Fällen konnte ich sehen, welcher Satz die Falle ist und welcher nur lang. Nach der Prüfung war ich immer noch müde, aber ich habe nicht mehr geraten, was das Papier überhaupt ist.",
    },
    uk: {
      outcome: "Місце 455",
      quote:
        "Я думав, що Wirtschaft verstehen це конспект з книжки, але конспекти не схожі на твердження. Після кількох тижнів кейсів я бачив, яке речення пастка, а яке просто довге. Після іспиту я все одно був виснажений, але вже не вгадував, що це взагалі за бланк.",
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
    quote:
      "I almost moved the application over to BBE in February, because someone said the German paper is just more crowded. Crowded isn't harder for me, since I read faster in German, and the timed sets made that obvious in a boring way, so I stopped having the same argument with myself every Sunday. It's a 4 rather than a 5, because I lost a month on that argument.",
    de: {
      outcome: "Rang 1204",
      quote:
        "Im Februar hätte ich die Bewerbung fast auf BBE gelegt, weil jemand meinte, das deutsche Papier sei einfach voller. Voller ist für mich nicht schwerer, ich lese auf Deutsch schneller, und die Aufgaben auf Zeit haben das auf eine langweilige Art offensichtlich gemacht, also habe ich den Streit mit mir selbst jeden Sonntag gelassen. Es ist eine 4 und keine 5, weil ich mit diesem Streit einen Monat verloren habe.",
    },
    uk: {
      outcome: "Місце 1204",
      quote:
        "У лютому я мало не перенесла заявку на BBE, бо хтось сказав, що німецький бланк просто більш людний. Людно для мене не важче, німецькою я читаю швидше, і набори на час зробили це нудно очевидним, тож я припинила щонеділі сперечатись сама з собою. Це 4, а не 5, бо на ту суперечку пішов місяць.",
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
    quote:
      "I came down for the test and studied from home. German wasn't the problem, partial credit was, because I answered everything, including things I would cross out in a normal exam. One ugly mock, with the points taken off right there, fixed that faster than anyone's advice.",
    de: {
      outcome: "Rang 312",
      quote:
        "Ich bin zur Prüfung runtergefahren und habe von zu Hause gelernt. Deutsch war nicht das Problem, die Teilpunkte waren es, weil ich alles beantwortet habe, auch Dinge, die ich in einer normalen Prüfung durchgestrichen hätte. Ein hässlicher Mock, bei dem die Punkte direkt abgezogen wurden, hat das schneller abgestellt als jeder Rat.",
    },
    uk: {
      outcome: "Місце 312",
      quote:
        "Я приїхала на іспит, а вчилась з дому. Німецька не була проблемою, проблемою були часткові бали, бо я відповідала на все, навіть на те, що на звичайному іспиті викреслила б. Один потворний мок, де бали зняли прямо там, виправив це швидше за будь-чию пораду.",
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
      "German isn't my first language. Going through the grammar pages again did nothing, and fifteen minutes of passages on most days did something, slowly. I still don't love Sprachverständnis, but I got through it without the freeze I had in March. It isn't a 5, because it never felt comfortable, though it stopped pulling the rest of the paper down.",
    de: {
      outcome: "Rang 1677",
      quote:
        "Deutsch ist nicht meine erste Sprache. Die Grammatikseiten noch einmal durchzugehen hat nichts gebracht, und fünfzehn Minuten Texte an den meisten Tagen haben etwas gebracht, langsam. Sprachverständnis mag ich immer noch nicht, aber ich bin durchgekommen, ohne das Einfrieren aus dem März. Es ist keine 5, weil es sich nie bequem angefühlt hat, aber es hat den Rest des Papiers nicht mehr runtergezogen.",
    },
    uk: {
      outcome: "Місце 1677",
      quote:
        "Німецька не моя перша мова. Ще раз пройти граматику не дало нічого, а п'ятнадцять хвилин текстів майже щодня дали дещо, повільно. Sprachverständnis я досі не люблю, але пройшов його без того ступору, який був у березні. Це не 5, бо комфортно не було ніколи, хоча решту бланка воно більше не тягнуло вниз.",
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
    quote:
      "I opened a new topic every twenty minutes and called that revision, until the short mixed sets stopped me. The old notes were three subjects started and none of them finished. The paper was hard and familiar, which is the version I wanted.",
    de: {
      outcome: "Rang 860",
      quote:
        "Ich habe alle zwanzig Minuten ein neues Thema aufgemacht und das Wiederholen genannt, bis die kurzen gemischten Sets mich gestoppt haben. In den alten Notizen waren drei Fächer angefangen und keins fertig. Das Papier war schwer und vertraut, und das ist die Variante, die ich wollte.",
    },
    uk: {
      outcome: "Місце 860",
      quote:
        "Я відкривала нову тему кожні двадцять хвилин і називала це повторенням, поки короткі змішані набори мене не зупинили. У старих нотатках було почато три предмети, і жоден не закінчено. Бланк був важкий і знайомий, і саме такий варіант я хотіла.",
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
      "From April the rule was one full paper a week, and no second paper until I had actually reviewed the first, because otherwise I just collect numbers. The rank was 248, and I reviewed the German block even on the weeks I didn't want to.",
    de: {
      outcome: "Rang 248",
      quote:
        "Ab April galt: ein ganzes Papier pro Woche, und kein zweites, bevor ich das erste wirklich angeschaut hatte, weil ich sonst nur Zahlen sammle. Der Rang war 248, und den deutschen Block habe ich auch in den Wochen angeschaut, in denen ich nicht wollte.",
    },
    uk: {
      outcome: "Місце 248",
      quote:
        "З квітня правило було таке: один повний бланк на тиждень, і другого немає, поки я справді не розберу перший, бо інакше я просто збираю цифри. Місце було 248, і німецький блок я розбирав навіть тими тижнями, коли не хотів.",
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
      "I signed up for both, because nobody could tell me with a straight face which paper I should sit. The deal with my parents was that I would do both until the results, and then choose. I did the math once, since I was not going to redo derivatives in a second language, and the language parts are not the same thing, even though people talk as if they are. I took the BBE seat, and I still wrote the German paper so August wouldn't be me wondering what the other one would have been.",
    de: {
      outcome: "BBE Rang 88, und ein WiSo-Platz",
      quote:
        "Ich habe mich für beide angemeldet, weil mir niemand mit ernstem Gesicht sagen konnte, welches Papier ich schreiben soll. Die Abmachung mit meinen Eltern war, beide bis zu den Ergebnissen, und dann wählen. Mathe habe ich einmal gemacht, Ableitungen wollte ich nicht noch einmal in einer zweiten Sprache üben, und die Sprachteile sind nicht dasselbe, auch wenn Leute so tun. Ich habe den BBE-Platz genommen und das deutsche Papier trotzdem geschrieben, damit der August nicht die Frage ist, was das andere gewesen wäre.",
    },
    uk: {
      outcome: "BBE місце 88, і місце на WiSo",
      quote:
        "Я подалась на обидва, бо ніхто не міг серйозно сказати, який бланк мені писати. Домовленість з батьками була така: обидва до результатів, а потім вибір. Математику я зробила один раз, бо похідні другою мовою переробляти не збиралась, і мовні частини це не одне й те саме, хоча люди говорять так, ніби це так. Я взяла місце на BBE і все одно написала німецький бланк, щоб серпень не був питанням, яким був би інший.",
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
      "They are different papers, and I kept acting as if an economics idea copies over one to one. On the first day I did both, I picked, in German, the trap I had just avoided in English, so after that I stopped putting both language blocks on the same night. I enrolled on WiSo, because German is the Vienna part of the degree, and that was the point. BBE was a place as well, and I left it. It's a 4, because doing both is heavier than the page makes it look, and I wish someone had said that in the first week.",
    de: {
      outcome: "Auf WiSo eingeschrieben",
      quote:
        "Es sind verschiedene Papiere, und ich habe weiter so getan, als würde eine Wirtschaftsidee eins zu eins hinüberkopiert. Am ersten Tag mit beiden habe ich auf Deutsch die Falle gewählt, der ich auf Englisch gerade ausgewichen war, also habe ich danach aufgehört, beide Sprachblöcke am selben Abend zu machen. Eingeschrieben habe ich mich auf WiSo, weil Deutsch der Wien-Teil des Studiums ist, und das war der Punkt. BBE war auch ein Platz, und den habe ich gelassen. Es ist eine 4, weil beides schwerer ist, als es auf der Seite aussieht, und ich hätte gern gehabt, dass das jemand in der ersten Woche sagt.",
    },
    uk: {
      outcome: "Вступив на WiSo",
      quote:
        "Це різні бланки, а я й далі поводився так, ніби економічна ідея копіюється один в один. Першого дня з обома я вибрав німецькою пастку, якої щойно уникнув англійською, тож після того перестав ставити обидва мовні блоки на один вечір. Я вступив на WiSo, бо німецька це віденська частина ступеня, і в цьому був сенс. Місце на BBE теж було, і я його лишив. Це 4, бо робити обидва важче, ніж виглядає на сторінці, і я хотів би, щоб це сказали на першому тижні.",
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
    quote:
      "I wasn't going to drop a language in April just so the week would look lighter. Math once, English on one day and German on another, so the two don't melt together. It was a heavier spring than my friends had with one exam. Both results came in, I took the BBE seat, and I still don't know whether doing both was smart, but I do know the panic in March didn't get to choose for me.",
    de: {
      outcome: "Den BBE-Platz genommen",
      quote:
        "Ich wollte im April keine Sprache streichen, nur damit die Woche leichter aussieht. Mathe einmal, Englisch an einem Tag und Deutsch an einem anderen, damit die beiden nicht zusammenlaufen. Es war ein schwereres Frühjahr als bei Freunden mit einer Prüfung. Beide Ergebnisse waren da, ich habe den BBE-Platz genommen, und ob beides klug war, weiß ich immer noch nicht, aber ich weiß, dass die Panik im März nicht für mich gewählt hat.",
    },
    uk: {
      outcome: "Взяла місце на BBE",
      quote:
        "У квітні я не збиралась викидати мову лише для того, щоб тиждень виглядав легшим. Математика один раз, англійська в один день і німецька в інший, щоб вони не злипались. Весна вийшла важчою, ніж у друзів з одним іспитом. Обидва результати прийшли, я взяла місце на BBE, і досі не знаю, чи обидва були розумним рішенням, але знаю, що паніка в березні не обирала за мене.",
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

const starBuckets = new Set(ACCEPTANCE_NOTES.map((note) => note.stars));

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
  )
) {
  throw new Error("Acceptance notes must be 17 BBE, 11 WiSo, 3 Hybrid, and average 4.7.");
}
