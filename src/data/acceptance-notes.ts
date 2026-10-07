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
    quote: "Second year in the course. First time I mostly just read and hoped. This time I lived in the mocks, and the sheet after tells you when a guess was expensive, so I stopped ticking stuff I was only kinda sure about. English in there still doesn't feel done, that's the 4. The timed sets are the part that actually stuck.",
    de: {
      outcome: "Rang 156",
      quote: "Zweites Jahr im Kurs. Beim ersten Mal hab ich nur gelesen und gehofft. Diesmal hab ich in den Mocks gelebt, und der Bogen danach zeigt, wann ein Tipp teuer war, also hab ich aufgehört, Sachen anzukreuzen, bei denen ich nur so halb sicher war. Englisch da drin fühlt sich immer noch nicht fertig an, deshalb die 4. Die Aufgaben auf Zeit sind das, was wirklich hängen geblieben ist.",
    },
    uk: {
      outcome: "Місце 156",
      quote: "Другий рік на курсі. Першого разу я здебільшого просто читала і сподівалась. Цього разу жила в моках, і аркуш після них показує, коли вгадування було дорогим, тож я перестала ставити те, в чому була лише наполовину впевнена. Англійська там досі не закрита, тому 4. Набори на час це те, що справді лишилось.",
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
    quote: "My parents booked a tutor and he just read the textbook out loud, so I went back to the timed sets in the course. Sunday score crept up. Slowly, yeah, but it did.",
    de: {
      outcome: "Rang 84",
      quote: "Meine Eltern haben einen Nachhilfelehrer gebucht, und der hat einfach das Lehrbuch laut vorgelesen, also bin ich zu den Aufgaben auf Zeit im Kurs zurück. Der Sonntagswert ist hochgeklettert. Langsam, ja, aber doch.",
    },
    uk: {
      outcome: "Місце 84",
      quote: "Батьки записали репетитора, і він просто читав підручник уголос, тож я повернувся до наборів на час у курсі. Недільний бал повз. Повільно, так, але повз.",
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
    quote: "In the mocks I kept guessing three econ ones after I'd already talked myself out of them. The sheet made that look dumb, so I started leaving that type blank while practicing. Annoying habit, but it was the right one.",
    de: {
      outcome: "Rang 203",
      quote: "In den Mocks hab ich drei Wirtschaftsaufgaben geraten, nachdem ich sie mir schon ausgeredet hatte. Der Bogen hat das dumm aussehen lassen, also hab ich den Typ beim Üben leer gelassen. Nervige Angewohnheit, aber die richtige.",
    },
    uk: {
      outcome: "Місце 203",
      quote: "У моках я раз у раз вгадувала три економічні вже після того, як сама собі їх відмовила. Аркуш робив це дурним, тож на практиці я почала лишати такий тип порожнім. Дратівлива звичка, але правильна.",
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
    quote: "Came from a German school, so I thought the English bit of the course would be the easy part. It's not school English. One word in the statement does the whole point, and it took me like two months to stop translating every line in my head. Math I'd already overdone, that side of the course was whatever.",
    de: {
      outcome: "Rang 34",
      quote: "Deutsche Schule, also dachte ich, der Englisch-Teil im Kurs ist der leichte. Ist kein Schulenglisch. Ein Wort in der Aussage macht den ganzen Punkt, und es hat mich so zwei Monate gekostet, bis ich aufgehört hab, jeden Satz im Kopf zu übersetzen. Mathe hatte ich schon übertrieben, die Seite vom Kurs war egal.",
    },
    uk: {
      outcome: "Місце 34",
      quote: "Я зі школи з німецькою, тож думав, що англійська частина курсу буде легкою. Це не шкільна англійська. Одне слово в твердженні тягне всю думку, і мені знадобилось десь два місяці, щоб перестати перекладати кожен рядок у голові. Математику я вже переготував, той бік курсу був байдужий.",
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
    quote: "Mocks, not videos.",
    de: {
      outcome: "Rang 128",
      quote: "Mocks, nicht Videos.",
    },
    uk: {
      outcome: "Місце 128",
      quote: "Моки, не відео.",
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
    quote: "Honestly I thought there'd be way more videos. I barely opened that part. What I actually used was the mocks, a bunch of them around 1am. Before this I was on a shared drive and half the files were some older format, so maybe the mess was mine. 3 stars, because a lot of it was just me sitting there and the course mostly handed me the format.",
    de: {
      outcome: "Rang 176",
      quote: "Ehrlich, ich dachte es gibt viel mehr Videos. Den Teil hab ich kaum aufgemacht. Benutzt hab ich die Mocks, einen Haufen davon so gegen ein Uhr. Davor war ich auf einem geteilten Drive, die Hälfte der Dateien irgendein älteres Format, also war das Chaos vielleicht meins. 3 Sterne, weil viel davon einfach ich war, der dasitzt, und der Kurs mir halt vor allem das Format gegeben hat.",
    },
    uk: {
      outcome: "Місце 176",
      quote: "Чесно, я думав, буде куди більше відео. Ту частину майже не відкривав. Користувався моками, купа з них десь о першій ночі. До цього сидів на спільному диску, половина файлів якогось старішого формату, тож бардак, може, мій. 3 зірки, бо багато з цього я просто сидів, а курс здебільшого дав формат.",
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
    quote: "I work weekends, so the course plan was boring on purpose. Like 40 minutes after a shift, one full mock on Sunday, from March. That was enough, and starting the same thing in May wouldn't have been. Dropping a star because nobody says how grim those evenings with the timer are.",
    de: {
      outcome: "Rang 51",
      quote: "Ich arbeite am Wochenende, der Kursplan war also absichtlich fad. So 40 Minuten nach der Schicht, sonntags ein ganzer Mock, ab März. Das hat gereicht, und dasselbe erst im Mai hätte nicht gereicht. Ein Stern weniger, weil niemand sagt, wie zäh die Abende mit dem Timer sind.",
    },
    uk: {
      outcome: "Місце 51",
      quote: "У вихідні працюю, тож план по курсу був нудний навмисно. Десь 40 хвилин після зміни, у неділю один повний мок, з березня. Цього вистачило, а те саме з травня вже ні. Знімаю зірку, бо ніхто не каже, які тоскні вечори з таймером.",
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
    quote: "School econ made me sloppy, I knew the topic and still lost points on wording inside the practice sets. The line-by-line sheet was embarrassing, and that's what fixed it. Not another video.",
    de: {
      outcome: "Rang 11",
      quote: "Schul-VWL hat mich schlampig gemacht, Thema gekannt und in den Übungssets trotzdem Punkte an der Formulierung verloren. Der Bogen Zeile für Zeile war peinlich, und genau der hat's gefixt. Nicht noch ein Video.",
    },
    uk: {
      outcome: "Місце 11",
      quote: "Шкільна економіка зробила мене неуважним, тему знав і все одно втрачав бали на формулюванні в практичних наборах. Аркуш рядок за рядком був незручний, і саме він це виправив. Не ще одне відео.",
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
    quote: "The last math cluster in the mocks kept eating the clock, so I started leaving four blank instead of filling them and paying for it. If you've only got six weeks, do the mocks, another textbook doesn't teach the timer. It's a 4 because I wanted that math timer to yell sooner.",
    de: {
      outcome: "Rang 214",
      quote: "Der letzte Matheblock in den Mocks hat immer die Uhr gefressen, also hab ich vier leer gelassen statt sie auszufüllen und dafür zu zahlen. Wer nur sechs Wochen hat, soll die Mocks machen, noch ein Lehrbuch bringt den Timer nicht bei. Eine 4, weil ich wollte, dass der Mathe-Timer früher laut wird.",
    },
    uk: {
      outcome: "Місце 214",
      quote: "Останній блок математики в моках весь час з'їдав час, тож я почала лишати чотири порожніми, а не заповнювати і платити за це. Якщо є лише шість тижнів, робіть моки, ще один підручник таймер не навчить. Це 4, бо я хотіла, щоб таймер з математики кричав раніше.",
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
    quote: "I wrote down every answer I changed at the end of a mock, and most of those changes were wrong. So I started trusting the first read. Took until May. I still think about one of them.",
    de: {
      outcome: "Rang 67",
      quote: "Ich hab jede Antwort aufgeschrieben, die ich am Ende eines Mocks noch geändert hab, und die meisten Änderungen waren falsch. Also hab ich angefangen, dem ersten Lesen zu trauen. Hat bis Mai gedauert. An eine denk ich immer noch.",
    },
    uk: {
      outcome: "Місце 67",
      quote: "Я записувала кожну відповідь, яку міняла в кінці мока, і більшість тих змін були хибні. Тож почала довіряти першому прочитанню. До травня. Про одну досі думаю.",
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
    quote: "Econ sets, finally.",
    de: {
      outcome: "Rang 141",
      quote: "Endlich die Wirtschaftssets.",
    },
    uk: {
      outcome: "Місце 141",
      quote: "Нарешті набори з економіки.",
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
    quote: "evenings, after work calls. no eight-hour day, don't ask. 25 minutes was the whole session, and that was kinda the point of the course for me.",
    de: {
      outcome: "Rang 173",
      quote: "abends, nach den Arbeitstelefonaten. keinen Achtstundentag, nicht fragen. 25 Minuten war die ganze Einheit, und das war für mich irgendwie der Punkt am Kurs.",
    },
    uk: {
      outcome: "Місце 173",
      quote: "вечори, після робочих дзвінків. восьмигодинного дня немає, не питайте. 25 хвилин було ціле заняття, і в цьому для мене був сенс курсу.",
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
    quote: "Friends with zero timed sets asked how you even know when to skip. I don't have a theory. I have a pile of mocks in the course where guessing already cost me. That's the advice, and it's boring, sorry.",
    de: {
      outcome: "Rang 92",
      quote: "Freunde ohne ein einziges Set auf Zeit haben gefragt, woher man wissen soll, wann man auslässt. Eine Theorie hab ich nicht. Ich hab einen Stapel Mocks im Kurs, wo Raten mich schon was gekostet hat. Das ist der Rat, und er ist langweilig, sorry.",
    },
    uk: {
      outcome: "Місце 92",
      quote: "Друзі без жодного набору на час спитали, звідки взагалі знати, коли пропускати. Теорії немає. Є купа моків у курсі, де вгадування мені вже коштувало. Ось порада, вона нудна, вибачте.",
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
    quote: "Stopped rewriting answers.",
    de: {
      outcome: "Rang 23",
      quote: "Hab aufgehört, Antworten umzuschreiben.",
    },
    uk: {
      outcome: "Місце 23",
      quote: "Перестав переписувати відповіді.",
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
    quote: "Moved to Vienna in the spring, and German wasn't enough for the WiSo course, so BBE was the plan, not a mood. English in it is still harder than class was in France. Math notation was fine, the business statements took ages before they stopped sounding foggy.",
    de: {
      outcome: "Rang 109",
      quote: "Im Frühjahr nach Wien, und Deutsch hat für den WiSo-Kurs nicht gereicht, also war BBE der Plan, keine Laune. Englisch darin ist immer noch schwerer als der Unterricht in Frankreich. Mathe-Notation war ok, die Business-Aussagen haben ewig gebraucht, bis sie nicht mehr neblig klangen.",
    },
    uk: {
      outcome: "Місце 109",
      quote: "Навесні переїхала до Відня, німецької на курс WiSo не вистачало, тож BBE був план, не настрій. Англійська там досі важча, ніж заняття у Франції. Математичний запис нормальний, бізнес-твердження довго звучали туманно.",
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
    quote: "It's the kind of course where you refresh the pdf twice because a row looks wrong. Didn't make the stuff easy. Made the borderline sets survivable. I skipped more in the mocks than anyone I talked to, and the course basically treats that as allowed.",
    de: {
      outcome: "Rang 231",
      quote: "Die Sorte Kurs, bei der man das PDF zweimal neu lädt, weil eine Zeile falsch aussieht. Hat den Stoff nicht leicht gemacht. Hat die Sets an der Grenze überlebbar gemacht. In den Mocks hab ich mehr ausgelassen als alle, mit denen ich geredet hab, und der Kurs behandelt das im Grunde als erlaubt.",
    },
    uk: {
      outcome: "Місце 231",
      quote: "Це той тип курсу, коли двічі оновлюєш pdf, бо рядок виглядає неправильно. Легшим матеріал не став. Набори на межі стали прохідними. У моках я пропускав більше, ніж усі, з ким говорив, і курс по суті вважає, що так можна.",
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
    quote: "Did the demo first, didn't want to pay and then hate the format. Didn't hate it. Hated how specific it is, that's why I stayed. Three months, mostly at night, just the mocks. That's the course I mean, not a lecture and not a vibe.",
    de: {
      outcome: "Rang 58",
      quote: "Zuerst die Demo, ich wollte nicht zahlen und dann das Format hassen. Hab ich nicht. Gehasst hab ich, wie konkret es ist, deshalb bin ich geblieben. Drei Monate, meistens nachts, einfach die Mocks. Das mein ich mit dem Kurs, keine Vorlesung und keine Stimmung.",
    },
    uk: {
      outcome: "Місце 58",
      quote: "Спочатку демо, не хотіла платити і потім ненавидіти формат. Не зненавиділа. Зненавиділа, наскільки він конкретний, тому й лишилась. Три місяці, здебільшого вночі, просто моки. Ось про який курс я, не лекція і не настрій.",
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
    quote: "Second go at the course. First year I told myself I'd just read Sprachverständnis carefully, and that part buried me. This time it was the first block of every mock, while I was still awake. I didn't love that order. It's the one that stuck.",
    de: {
      outcome: "Rang 188",
      quote: "Zweiter Durchgang mit dem Kurs. Erstes Jahr hab ich mir gesagt, Sprachverständnis les ich schon sorgfältig, und genau der Teil hat mich begraben. Diesmal war der Block in jedem Mock der erste, solang ich noch wach war. Die Reihenfolge hab ich nicht geliebt. Sie ist die, die hängen geblieben ist.",
    },
    uk: {
      outcome: "Місце 188",
      quote: "Другий захід на курс. Першого року я казала собі, що Sprachverständnis просто уважно прочитаю, і саме цей розділ мене поховав. Цього разу він був першим блоком у кожному моку, поки я ще не спала. Такий порядок я не любила. Саме він лишився.",
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
    quote: "The course didn't turn me into someone else, and I'm not gonna pretend it did. By May the mocks already showed roughly where I'd land. WiSo has a lot of seats, so that was the back half, and I'm not dressing it up. German wording in the sets was the whole fight, math was just normal. Useful, a bit depressing, and 3 is fair.",
    de: {
      outcome: "Rang 2011",
      quote: "Der Kurs hat mich nicht in jemand anderen verwandelt, und ich tu nicht so. Im Mai haben die Mocks schon ungefähr gezeigt, wo ich lande. WiSo hat viele Plätze, also war das die hintere Hälfte, ich red das nicht schön. Deutsche Formulierung in den Sets war der ganze Kampf, Mathe war einfach normal. Nützlich, ein bisschen deprimierend, und 3 ist fair.",
    },
    uk: {
      outcome: "Місце 2011",
      quote: "Курс не зробив мене іншою людиною, і я не буду вдавати, що зробив. У травні моки вже приблизно показали, куди я сяду. На WiSo багато місць, тож це була друга половина, я це не прикрашаю. Німецьке формулювання в наборах було всією боротьбою, математика просто звичайна. Корисно, трохи сумно, і 3 це чесно.",
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
    quote: "My brother did the BBE course two years ago and would not stop sending English notes. Wrong course. I used them for a month, my German got worse, which is obvious, and I was annoyed anyway. After that I stayed on the German statements in the WiSo course, and math had time again.",
    de: {
      outcome: "Rang 733",
      quote: "Mein Bruder hat vor zwei Jahren den BBE-Kurs gemacht und hörte nicht auf, mir englische Notizen zu schicken. Falscher Kurs. Einen Monat hab ich die benutzt, mein Deutsch wurde schlechter, logisch, und genervt war ich trotzdem. Danach bin ich bei den deutschen Aussagen im WiSo-Kurs geblieben, und Mathe hatte wieder Zeit.",
    },
    uk: {
      outcome: "Місце 733",
      quote: "Брат два роки тому проходив курс BBE і не переставав слати англійські нотатки. Не той курс. Місяць я ними користувалась, німецька стала гірша, це очевидно, і мене все одно дратувало. Потім лишилась на німецьких твердженнях у курсі WiSo, і в математики знову був час.",
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
    quote: "I had German in school, sure. The econ statements in the course are tighter than class. In the April sets I saw the topic and skipped the verb, so on the last mock I marked the verb first. Small thing. That was the thing.",
    de: {
      outcome: "Rang 1340",
      quote: "Deutsch in der Schule, klar. Die Wirtschaftsaussagen im Kurs sind enger als der Unterricht. In den April-Sets hab ich das Thema gesehen und das Verb übersprungen, also hab ich beim letzten Mock zuerst das Verb markiert. Klein. Das war die Sache.",
    },
    uk: {
      outcome: "Місце 1340",
      quote: "Німецька в школі, так. Економічні твердження в курсі щільніші за урок. У квітневих наборах я бачив тему і проскакував дієслово, тож на останньому моку спочатку позначав дієслово. Дрібниця. Саме вона.",
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
    quote: "Finally, the mocks.",
    de: {
      outcome: "Rang 96",
      quote: "Endlich die Mocks.",
    },
    uk: {
      outcome: "Місце 96",
      quote: "Нарешті моки.",
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
    quote: "I thought Wirtschaft verstehen in the course was a summary of the book. It isn't, summaries don't look like the statements. A few weeks of cases and I could see which sentence was the trap and which one was just long. Tired after, but I wasn't guessing what the tasks even are.",
    de: {
      outcome: "Rang 455",
      quote: "Dachte, Wirtschaft verstehen im Kurs ist eine Zusammenfassung aus dem Buch. Ist es nicht, Zusammenfassungen sehen nicht aus wie die Aussagen. Paar Wochen Fälle, und ich hab gesehen, welcher Satz die Falle ist und welcher nur lang ist. Danach platt, aber ich hab nicht mehr geraten, was die Aufgaben überhaupt sind.",
    },
    uk: {
      outcome: "Місце 455",
      quote: "Думав, Wirtschaft verstehen в курсі це конспект з книжки. Ні, конспекти не схожі на твердження. Кілька тижнів кейсів, і я бачив, яке речення пастка, а яке просто довге. Потім виснажений, але вже не вгадував, що це взагалі за завдання.",
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
    quote: "In February I almost switched to the BBE course, because someone said the German one is just more crowded. Crowded isn't harder for me, I read faster in German. The timed sets made that boringly obvious. I stopped having the same fight with myself every Sunday. 4, not 5, because that fight cost me a month, not the course.",
    de: {
      outcome: "Rang 1204",
      quote: "Hätte im Februar fast auf den BBE-Kurs gewechselt, irgendwer meinte, der deutsche sei nur voller. Voller ist für mich nicht schwerer, ich les auf Deutsch schneller. Die Aufgaben auf Zeit haben das langweilig klar gemacht. Den Streit mit mir selbst jeden Sonntag hab ich dann gelassen. 4 nicht 5, weil mich der Streit einen Monat gekostet hat, nicht der Kurs.",
    },
    uk: {
      outcome: "Місце 1204",
      quote: "У лютому мало не перейшла на курс BBE, бо хтось сказав, що німецький просто більш людний. Людно для мене не важче, німецькою я читаю швидше. Набори на час зробили це нудно очевидним. Щонеділі сперечатись сама з собою я тоді кинула. 4, не 5, бо місяць з'їла та суперечка, не курс.",
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
    quote: "German in the course wasn't my problem. Partial credit was, because I answered everything, including stuff I'd cross out in a normal set. One ugly mock, points gone right there, fixed that faster than anyone's advice. I did it from home, on the side.",
    de: {
      outcome: "Rang 312",
      quote: "Deutsch im Kurs war nicht mein Problem. Die Teilpunkte waren es, weil ich alles beantwortet hab, auch Zeug, das ich in einem normalen Set durchstreichen würde. Ein hässlicher Mock, Punkte sofort weg, hat das schneller abgestellt als jeder Rat. Von zu Hause, nebenbei.",
    },
    uk: {
      outcome: "Місце 312",
      quote: "Німецька в курсі не була моєю проблемою. Часткові бали були, бо я відповідала на все, навіть на те, що в звичайному наборі викреслила б. Один потворний мок, бали зникли одразу, виправив це швидше за чиюсь пораду. З дому, між іншим.",
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
    quote: "German isn't my first language, and doing the grammar pages in the course again did nothing. 15 minutes of passages most days did something, slow. I still don't love the Sprachverständnis sets. Not a 5, it never felt comfortable, it just stopped sinking the rest of the course.",
    de: {
      outcome: "Rang 1677",
      quote: "Deutsch ist nicht meine erste Sprache, und die Grammatikseiten im Kurs noch mal haben nichts gebracht. 15 Minuten Texte an den meisten Tagen haben was gebracht, langsam. Die Sprachverständnis-Sets mag ich immer noch nicht. Keine 5, bequem war das nie, es hat nur den Rest vom Kurs nicht mehr versenkt.",
    },
    uk: {
      outcome: "Місце 1677",
      quote: "Німецька не моя перша мова, і граматика в курсі ще раз не дала нічого. 15 хвилин текстів майже щодня дали дещо, повільно. Набори Sprachverständnis досі не люблю. Не 5, комфортно не було ніколи, просто решту курсу воно більше не топило.",
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
    quote: "A new topic every 20 minutes, and I called that revision. The short mixed sets in the course stopped that. Old notes were three subjects started and none finished. That's how I actually used it.",
    de: {
      outcome: "Rang 860",
      quote: "Alle 20 Minuten ein neues Thema, und ich hab das Wiederholen genannt. Die kurzen gemischten Sets im Kurs haben das gestoppt. Alte Notizen: drei Fächer angefangen, keins fertig. So hab ich ihn dann wirklich benutzt.",
    },
    uk: {
      outcome: "Місце 860",
      quote: "Нова тема кожні 20 хвилин, і я називала це повторенням. Короткі змішані набори в курсі це зупинили. Старі нотатки: три предмети почато, жоден не закінчено. Ось як я ним насправді користувалась.",
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
    quote: "My own rule inside the course, from April: one full set a week, and no second one until I'd actually looked at the first. Otherwise I just collect numbers. I still went through the German block on the weeks I didn't feel like it.",
    de: {
      outcome: "Rang 248",
      quote: "Meine eigene Regel im Kurs, ab April: ein ganzes Set pro Woche, und kein zweites, bevor ich das erste wirklich angeschaut hab. Sonst sammle ich nur Zahlen. Den deutschen Block hab ich auch in den Wochen angeschaut, in denen ich keine Lust hatte.",
    },
    uk: {
      outcome: "Місце 248",
      quote: "Моє правило всередині курсу, з квітня: один повний набір на тиждень, і другого немає, поки перший справді не розберу. Інакше я просто збираю цифри. Німецький блок розбирав і тими тижнями, коли не хотілось.",
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
    quote: "Signed up for both because nobody could tell me, with a straight face, which course. The deal with my parents was both until I actually had to pick. Math once, I was not redoing derivatives in a second language. The language parts in here are not the same thing, and I don't get why people talk like they are. Glad both sat in one course instead of me buying two.",
    de: {
      outcome: "BBE Rang 88, und ein WiSo-Platz",
      quote: "Für beide angemeldet, weil mir niemand mit ernstem Gesicht sagen konnte, welcher Kurs. Die Abmachung mit meinen Eltern war, beide, bis ich wirklich wählen muss. Mathe einmal, Ableitungen nicht noch mal in einer zweiten Sprache. Die Sprachteile hier sind nicht dasselbe, und ich kapier nicht, warum Leute so tun. Gut, dass beide in einem Kurs waren und ich nicht zwei kaufen musste.",
    },
    uk: {
      outcome: "BBE місце 88, і місце на WiSo",
      quote: "Подалась на обидва, бо ніхто не міг серйозно сказати, який курс. Домовленість з батьками: обидва, поки справді не треба обрати. Математика один раз, похідні другою мовою не переробляла. Мовні частини тут не одне й те саме, і я не розумію, чому так говорять. Добре, що обидва були в одному курсі, а не два окремих.",
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
    quote: "Different courses, and I kept acting like an econ idea copies over one to one. First day with both, in German, I picked the trap I'd just dodged in English. After that I stopped putting both language blocks on the same night. I stuck with the WiSo side, German is the Vienna part, that was the point. 4, because doing both in one place is heavier than the page looks, and I wish someone had said that in week one.",
    de: {
      outcome: "Auf WiSo eingeschrieben",
      quote: "Verschiedene Kurse, und ich hab weiter so getan, als ob eine Wirtschaftsidee eins zu eins rüberkopiert. Erster Tag mit beiden, auf Deutsch, die Falle gewählt, der ich auf Englisch gerade ausgewichen bin. Danach nicht mehr beide Sprachblöcke am selben Abend. Geblieben bin ich auf der WiSo-Seite, Deutsch ist der Wien-Teil, das war der Punkt. 4, weil beides an einem Ort schwerer ist, als es auf der Seite aussieht, und das hätte jemand in Woche eins sagen können.",
    },
    uk: {
      outcome: "Вступив на WiSo",
      quote: "Різні курси, а я й далі поводився так, ніби економічна ідея копіюється один в один. Першого дня з обома, німецькою, вибрав пастку, якої щойно уникнув англійською. Після того не ставив обидва мовні блоки на один вечір. Лишився на боці WiSo, німецька це віденська частина, у цьому був сенс. 4, бо робити обидва в одному місці важче, ніж виглядає на сторінці, і я хотів би, щоб це сказали на першому тижні.",
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
    quote: "I wasn't gonna drop a language from the course in April just so the week looked lighter. Math once, English one day, German the next, so they don't melt together. Heavier spring than friends on one course. I still don't know if both was smart, but the March panic didn't get to choose the plan.",
    de: {
      outcome: "Den BBE-Platz genommen",
      quote: "Wollte im April keine Sprache aus dem Kurs streichen, nur damit die Woche leichter aussieht. Mathe einmal, Englisch einen Tag, Deutsch den nächsten, damit es nicht zusammenläuft. Schwereres Frühjahr als bei Freunden mit einem Kurs. Ob beides klug war, weiß ich noch nicht, aber die Panik im März hat den Plan nicht ausgesucht.",
    },
    uk: {
      outcome: "Взяла місце на BBE",
      quote: "У квітні не збиралась викидати мову з курсу лише щоб тиждень виглядав легше. Математика один раз, англійська в один день, німецька в наступний, щоб не злипались. Весна важча, ніж у друзів з одним курсом. Досі не знаю, чи обидва це було розумно, але паніка в березні план не обирала.",
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
