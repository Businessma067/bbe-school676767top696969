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
    quote: `sat this in 2025 and missed. not by a lot, which is the worse version.
this year i stopped ticking things i was only "pretty sure" about. the sheet after a mock makes a guess look expensive. english i still dont trust. at least it stopped dragging math down.
4, not 5. i wanted english to feel finished. it doesnt.`,
    de: {
      outcome: "Rang 156",
      quote: `2025 angetreten und knapp vorbei. das ist die blödere variante.
dies jahr hab ich aufgehört, sachen anzukreuzen bei denen ich nur „ziemlich sicher“ war. der bogen nach einem mock macht raten teuer. englisch trau ich immer noch nicht. wenigstens zieht es mathe nicht mehr runter.
4, nicht 5. ich wollte dass englisch sich fertig anfühlt. tut es nicht.`,
    },
    uk: {
      outcome: "Місце 156",
      quote: `складала у 2025 і пройшла повз. не набагато, це гірший варіант.
цього року перестала ставити те, в чому була лише «майже впевнена». аркуш після мока робить вгадування дорогим. англійській досі не довіряю. хоча б математику вона більше не тягне вниз.
4, не 5. хотіла щоб англійська відчувалась закритою. ні.`,
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
      "parents booked a tutor. two hours. he read the textbook out loud. i went back to the timed sets. sunday score moved. slowly, but it moved.",
    de: {
      outcome: "Rang 84",
      quote:
        "eltern haben einen nachhilfelehrer gebucht. zwei stunden. er hat das lehrbuch laut vorgelesen. ich bin zu den timed sets zurück. sonntagsscore hat sich bewegt. langsam, aber er hat sich bewegt.",
    },
    uk: {
      outcome: "Місце 84",
      quote:
        "батьки записали до репетитора. дві години. він читав підручник уголос. я повернувся до timed-наборів. недільний бал зрушив. повільно, але зрушив.",
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
      "ok so i guessed 3 econ ones AFTER i had already talked myself out of them?? and then in the hall i left that type blank. rank 203 which is. the edge. blank was the right annoying choice",
    de: {
      outcome: "Rang 203",
      quote:
        "also ich hab 3 wirtschaftsaussagen geraten NACHDEM ich sie mir schon ausgeredet hatte?? und im saal hab ich die sorte dann leer gelassen. rang 203 ist. die kante. leer war die richtige nervige entscheidung",
    },
    uk: {
      outcome: "Місце 203",
      quote:
        "короче я вгадала 3 економічні ПІСЛЯ того як сама собі їх вже відмовила?? а в залі такий тип лишила порожнім. місце 203 це. край. порожнє було правильне дратівливе рішення",
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
      "came from a german school so i thought english was the easy third. it isnt school english. one word in the statement does the whole argument. two months before i stopped translating every line in my head. math i had overcooked, that part was whatever.",
    de: {
      outcome: "Rang 34",
      quote:
        "deutsche schule, also dachte ich englisch ist das leichte drittel. ist kein schulenglisch. ein wort in der aussage macht das ganze argument. zwei monate bis ich aufgehört hab jeden satz im kopf zu übersetzen. mathe hatte ich übertrieben, der teil war egal.",
    },
    uk: {
      outcome: "Місце 34",
      quote:
        "зі школи німецькою, тож думав що англійська легка третина. це не шкільна англійська. одне слово в твердженні тягне всю думку. два місяці поки я перестав перекладати кожен рядок у голові. математику переготував, той розділ був байдужий.",
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
    quote: "rank 128. thought i failed",
    de: {
      outcome: "Rang 128",
      quote: "rang 128. dachte durchgefallen",
    },
    uk: {
      outcome: "Місце 128",
      quote: "місце 128. думала що завалила",
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
    quote: `ill be honest i thought there would be more videos. barely opened that part. what i actually used was the mocks, a lot of them at 1am. before this i was on a shared drive and half the files were some older format, so maybe thats on me.
place is there, rank 176. 3 stars because a lot of it was just me sitting with it. the format was the new part. the rest i already had to do myself.`,
    de: {
      outcome: "Rang 176",
      quote: `ehrlich, ich dachte es gibt mehr videos. den teil hab ich kaum aufgemacht. benutzt hab ich die mocks, viele um 1 uhr. davor war ich auf einem geteilten drive, hälfte der dateien irgendein älteres format, vielleicht mein fehler.
platz ist da, rang 176. 3 sterne weil viel davon einfach ich war, der davor sitzt. das format war das neue. den rest musste ich sowieso selber machen.`,
    },
    uk: {
      outcome: "Місце 176",
      quote: `чесно, думав буде більше відео. ту частину майже не відкривав. користувався моками, багато з них о 1 ночі. до цього сидів на спільному диску, половина файлів якогось старішого формату, може це моє.
місце є, 176. 3 зірки бо багато з цього просто я сидів над цим. новим був формат. решту все одно треба було робити самому.`,
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
    quote: `weekends i work, so the plan was dull. ~40 min after a shift, one full mock sunday, from march.
that was enough. starting the same thing in may wouldnt have been.
real paper i finished with a few minutes left. april never did that.
dropping a star because nobody mentions how grim the evenings are.`,
    de: {
      outcome: "Rang 51",
      quote: `am wochenende arbeit, der plan war fad. ca 40 min nach der schicht, sonntag ein ganzer mock, ab märz.
das hat gereicht. dasselbe ab mai hätte nicht gereicht.
echtes papier mit ein paar minuten rest fertig. im april nie.
ein stern weniger, weil niemand sagt wie zäh die abende sind.`,
    },
    uk: {
      outcome: "Місце 51",
      quote: `у вихідні працюю, план був нудний. ~40 хв після зміни, у неділю один повний мок, з березня.
вистачило. те саме з травня вже ні.
справжній бланк закінчила з кількома хвилинами. у квітні так не було.
зірку знімаю, бо ніхто не каже які тоскні вечори.`,
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
      "school econ made me sloppy. knew the topic, still dropped april points on wording. line-by-line partial credit was embarrassing. rank 11 looks clean. the average is hiding the messy ones.",
    de: {
      outcome: "Rang 11",
      quote:
        "schul-vwl hat mich schlampig gemacht. thema gekannt, im april trotzdem punkte an der formulierung verloren. teilpunkte zeile für zeile waren peinlich. rang 11 sieht sauber aus. der schnitt versteckt die schlampigen.",
    },
    uk: {
      outcome: "Місце 11",
      quote:
        "шкільна економіка зробила мене неуважним. тему знав, у квітні все одно втратив бали на формулюванні. часткові бали рядок за рядком були незручні. місце 11 виглядає чисто. середнє ховає неохайні.",
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
    quote: `time died on the last math cluster. left 4 blank. a month earlier i wouldve filled them and paid for it.
rank 214 = blanks beat guesses.
six weeks? do the mocks. another textbook doesnt teach the clock.
4. i wanted the math timer to yell sooner.`,
    de: {
      outcome: "Rang 214",
      quote: `zeit war weg beim letzten matheblock. 4 leer gelassen. einen monat früher hätte ich sie ausgefüllt und dafür gezahlt.
rang 214 = leer schlägt raten.
sechs wochen? mocks. noch ein lehrbuch bringt die uhr nicht bei.
4. ich wollte dass der mathe-timer früher schreit.`,
    },
    uk: {
      outcome: "Місце 214",
      quote: `час зник на останньому блоці математики. 4 лишила порожніми. місяць раніше заповнила б і заплатила за це.
місце 214 = порожні кращі за вгадування.
шість тижнів? моки. ще один підручник годинник не навчить.
4. хотіла щоб таймер з математики кричав раніше.`,
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
      "wrote down every answer i changed at the end of a mock. most of those changes were wrong. may until i trusted the first read. on the day i changed two. still think about one. the letter came anyway",
    de: {
      outcome: "Rang 67",
      quote:
        "hab jede antwort aufgeschrieben die ich am ende eines mocks noch geändert hab. die meisten änderungen waren falsch. bis mai bis ich dem ersten lesen getraut hab. am tag zwei geändert. an eine denk ich noch. der brief kam trotzdem",
    },
    uk: {
      outcome: "Місце 67",
      quote:
        "записувала кожну відповідь, яку міняла в кінці мока. більшість змін були хибні. до травня поки довірилась першому прочитанню. у день іспиту змінила дві. про одну досі думаю. лист все одно прийшов",
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
    quote: "econ not math. picked the opposite statement. obvious. wasnt doing it.",
    de: {
      outcome: "Rang 141",
      quote: "wirtschaft nicht mathe. die gegenteilige aussage gewählt. offensichtlich. hab ich nicht gemacht.",
    },
    uk: {
      outcome: "Місце 141",
      quote: "економіка не математика. вибрав протилежне твердження. очевидно. я так не робив.",
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
    quote: `evenings, after work calls. no 8-hour day, dont ask.
25 minutes was the whole session.
exam felt long. didnt feel like a different exam.`,
    de: {
      outcome: "Rang 173",
      quote: `abends, nach den arbeitstelefonaten. keinen 8-stunden-tag, nicht fragen.
25 minuten war die ganze einheit.
prüfung lang. nicht wie eine andere prüfung.`,
    },
    uk: {
      outcome: "Місце 173",
      quote: `вечори, після робочих дзвінків. восьмигодинного дня немає, не питайте.
25 хвилин було ціле заняття.
іспит довгий. не як інший іспит.`,
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
      "friends with zero timed papers asked me after, how do you even know when to skip. i dont have a theory for that. i have a pile of mocks where guessing already cost a rank i didnt want. thats the advice. its boring. sorry.",
    de: {
      outcome: "Rang 92",
      quote:
        "freunde ohne ein einziges papier auf zeit haben danach gefragt, woher man wissen soll wann man auslässt. eine theorie hab ich nicht. ich hab einen stapel mocks wo raten schon einen rang gekostet hat den ich nicht wollte. das ist der rat. er ist langweilig. sorry.",
    },
    uk: {
      outcome: "Місце 92",
      quote:
        "друзі без жодного бланка на час потім спитали, звідки взагалі знати коли пропускати. теорії немає. є купа моків, де вгадування вже коштувало місце якого я не хотів. ось порада. вона нудна. вибачте.",
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
    quote: "stopped rewriting answers at the end. rank 23",
    de: {
      outcome: "Rang 23",
      quote: "hab aufgehört antworten am ende umzuschreiben. rang 23",
    },
    uk: {
      outcome: "Місце 23",
      quote: "перестав переписувати відповіді в кінці. місце 23",
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
      "moved to vienna in the spring. german wasnt enough for wiso, so bbe was the plan, not a mood. english still harder than class in france. math notation fine. business statements took ages to stop sounding foggy.",
    de: {
      outcome: "Rang 109",
      quote:
        "im frühjahr nach wien. deutsch hat für wiso nicht gereicht, bbe war der plan, keine laune. englisch trotzdem schwerer als der unterricht in frankreich. mathe-notation ok. business-aussagen haben ewig gebraucht bis sie nicht mehr neblig klangen.",
    },
    uk: {
      outcome: "Місце 109",
      quote:
        "навесні переїхала до відня. німецької на wiso не вистачало, тож bbe був план, не настрій. англійська все одно важча за заняття у франції. математичний запис нормальний. бізнес-твердження довго звучали туманно.",
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
    quote: `the kind of place where you refresh the pdf. twice. because the row looks wrong.
didnt make the exam easy. made a borderline one survivable.
skipped more than anyone i talked to after. apparently thats allowed??`,
    de: {
      outcome: "Rang 231",
      quote: `die sorte platz wo man das pdf neu lädt. zweimal. weil die zeile falsch aussieht.
prüfung nicht leicht gemacht. eine an der grenze überlebbar.
mehr ausgelassen als alle mit denen ich danach geredet hab. anscheinend darf man das??`,
    },
    uk: {
      outcome: "Місце 231",
      quote: `той тип місця, коли оновлюєш pdf. двічі. бо рядок виглядає неправильно.
іспит легким не став. бланк на межі став прохідним.
пропустив більше ніж усі з ким говорив потім. виявляється так можна??`,
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
      "demo first. didnt want to pay and then hate the format. didnt hate it. hated how specific it is, thats why i stayed. three months, mostly nights. rank is better than the mood walking out.",
    de: {
      outcome: "Rang 58",
      quote:
        "zuerst die demo. nicht zahlen und dann das format hassen. hab ich nicht. gehasst hab ich wie konkret es ist, deshalb bin ich geblieben. drei monate, meistens abends. rang besser als die stimmung beim rausgehen.",
    },
    uk: {
      outcome: "Місце 58",
      quote:
        "спочатку демо. не хотіла платити і потім ненавидіти формат. не зненавиділа. зненавиділа наскільки він конкретний, тому й лишилась. три місяці, здебільшого вечори. місце краще за настрій на виході.",
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
      "second try. first year sprachverständnis was the part id 'just read carefully'. it buried the score. this year first block in every mock, while i was awake. didnt like it. rank 188 says the order was the right one.",
    de: {
      outcome: "Rang 188",
      quote:
        "zweiter versuch. erstes jahr war sprachverständnis der teil den ich „einfach sorgfältig lese“. hat den score begraben. dies jahr erster block in jedem mock, solang ich wach war. hat mir nicht gefallen. rang 188 sagt die reihenfolge war die richtige.",
    },
    uk: {
      outcome: "Місце 188",
      quote:
        "друга спроба. першого року sprachverständnis був розділ який я «просто уважно прочитаю». він поховав бал. цього року перший блок у кожному моку, поки я не сплю. не подобалось. місце 188 каже що порядок був правильний.",
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
    quote: `2011. back half. wiso has a lot of seats, im not dressing that up.
may already showed where id land. results day was relief, not a surprise.
german wording = the whole fight. math was normal.
it showed me the landing early. it didnt turn me into someone else. 3 is fair.`,
    de: {
      outcome: "Rang 2011",
      quote: `2011. hintere hälfte. wiso hat viele plätze, ich red das nicht schön.
mai hat schon gezeigt wo ich lande. ergebnistag war erleichterung, keine überraschung.
deutsche formulierung = der ganze kampf. mathe war normal.
es hat mir die landung früh gezeigt. es hat mich nicht in jemand anderen verwandelt. 3 ist fair.`,
    },
    uk: {
      outcome: "Місце 2011",
      quote: `2011. друга половина. у wiso багато місць, я це не прикрашаю.
травень уже показав куди я сяду. день результатів був полегшення, не сюрприз.
німецьке формулювання = вся боротьба. математика була звичайна.
воно рано показало посадку. воно не зробило мене іншою людиною. 3 це чесно.`,
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
      "brother did bbe two years ago and would not stop sending english notes. wrong paper. used them a month, german got worse, which is obvious and i was still annoyed. stayed on the german statements and math had time again. he has opinions. i have a place.",
    de: {
      outcome: "Rang 733",
      quote:
        "bruder hat vor zwei jahren bbe gemacht und hörte nicht auf englisch-notizen zu schicken. falsches papier. einen monat benutzt, deutsch wurde schlechter, logisch, und ich war trotzdem genervt. bei den deutschen aussagen geblieben, mathe hatte wieder zeit. er hat meinungen. ich hab einen platz.",
    },
    uk: {
      outcome: "Місце 733",
      quote:
        "брат складав bbe два роки тому і не переставав слати англійські нотатки. не той бланк. місяць ними користувалась, німецька стала гірша, це очевидно, і мене все одно дратувало. лишилась на німецьких твердженнях і в математики знову був час. у нього думки. у мене місце.",
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
      "german in school. econ statements are tighter than class. april i missed a row of them, saw the topic, skipped the verb. last mock i marked the verb first. small. that was the thing.",
    de: {
      outcome: "Rang 1340",
      quote:
        "deutsch in der schule. wirtschaftsaussagen enger als der unterricht. im april eine reihe daneben, thema gesehen, verb übersprungen. letzter mock: verb zuerst markiert. klein. das war die sache.",
    },
    uk: {
      outcome: "Місце 1340",
      quote:
        "німецька в школі. економічні твердження щільніші за урок. у квітні провалив цілий ряд, побачив тему, проскочив дієслово. останній мок: спочатку дієслово. дрібниця. саме вона.",
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
    quote: "time left?? first time",
    de: {
      outcome: "Rang 96",
      quote: "zeit übrig?? zum ersten mal",
    },
    uk: {
      outcome: "Місце 96",
      quote: "лишився час?? вперше",
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
      "thought wirtschaft verstehen was a summary from the book. summaries dont look like the statements. a few weeks of cases and i could see which sentence was the trap and which one was just long. still tired after the exam. wasnt guessing what the paper even is.",
    de: {
      outcome: "Rang 455",
      quote:
        "dachte wirtschaft verstehen ist eine zusammenfassung aus dem buch. zusammenfassungen sehen nicht aus wie die aussagen. ein paar wochen fälle und ich hab gesehen welcher satz die falle ist und welcher nur lang. nach der prüfung trotzdem kaputt. hab nicht mehr geraten was das papier überhaupt ist.",
    },
    uk: {
      outcome: "Місце 455",
      quote:
        "думав wirtschaft verstehen це конспект з книжки. конспекти не схожі на твердження. кілька тижнів кейсів і я бачив яке речення пастка, а яке просто довге. після іспиту все одно виснажений. більше не вгадував що це взагалі за бланк.",
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
    quote: `almost moved the application to bbe in february. someone said the german paper is "just more crowded". crowded isnt harder for me, i read faster in german. timed sets made that boringly obvious. stopped having the sunday argument.
4 not 5. i lost a month on that argument.`,
    de: {
      outcome: "Rang 1204",
      quote: `hätte die bewerbung im februar fast auf bbe gelegt. jemand meinte das deutsche papier sei „einfach voller“. voller ist für mich nicht schwerer, ich lese auf deutsch schneller. timed sets haben das langweilig offensichtlich gemacht. den sonntagsstreit hab ich gelassen.
4 nicht 5. einen monat hab ich mit dem streit verloren.`,
    },
    uk: {
      outcome: "Місце 1204",
      quote: `у лютому мало не перенесла заявку на bbe. хтось сказав що німецький бланк «просто більш людний». людно для мене не важче, німецькою я читаю швидше. timed-набори зробили це нудно очевидним. недільну суперечку з собою припинила.
4 не 5. місяць на ту суперечку згаяла.`,
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
      "came down for the test, studied from home. german wasnt the problem. partial credit was. i answered everything, including things id cross out in a normal exam. one ugly mock, points subtracted right there, fixed it faster than anyone's advice.",
    de: {
      outcome: "Rang 312",
      quote:
        "zur prüfung runtergefahren, von zuhause gelernt. deutsch war nicht das problem. teilpunkte waren es. ich hab alles beantwortet, auch sachen die ich in einer normalen prüfung durchgestrichen hätte. ein hässlicher mock, punkte direkt abgezogen, das hat schneller aufgehört als jeder rat.",
    },
    uk: {
      outcome: "Місце 312",
      quote:
        "приїхала на іспит, вчилась з дому. німецька не була проблемою. часткові бали були. я відповідала на все, навіть на те що на звичайному іспиті викреслила б. один потворний мок, бали зняті прямо там, виправив це швидше за чиюсь пораду.",
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
    quote: `not my first language. grammar pages again: nothing. 15 min of passages most days: something, slow.
still dont love sprachverständnis. got through it without the freeze from march.
not a 5. it never felt comfortable. it stopped sinking the rest.`,
    de: {
      outcome: "Rang 1677",
      quote: `nicht meine erste sprache. grammatikseiten nochmal: nichts. 15 min texte an den meisten tagen: etwas, langsam.
sprachverständnis mag ich immer noch nicht. durchgekommen ohne das einfrieren vom märz.
keine 5. bequem war das nie. es hat den rest nicht mehr versenkt.`,
    },
    uk: {
      outcome: "Місце 1677",
      quote: `не моя перша мова. граматика ще раз: нічого. 15 хв текстів майже щодня: щось, повільно.
sprachverständnis досі не люблю. пройшов без того ступору з березня.
не 5. комфортно не було ніколи. решту воно більше не топило.`,
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
      "new topic every 20 minutes and i called that revision. short mixed sets stopped it. old notes: three subjects started, none finished. paper was hard and familiar. that was the one i wanted.",
    de: {
      outcome: "Rang 860",
      quote:
        "alle 20 minuten ein neues thema und ich hab das wiederholen genannt. kurze gemischte sets haben das gestoppt. alte notizen: drei fächer angefangen, keins fertig. papier schwer und vertraut. das war das, das ich wollte.",
    },
    uk: {
      outcome: "Місце 860",
      quote:
        "нова тема кожні 20 хвилин і я називала це повторенням. короткі змішані набори це зупинили. старі нотатки: три предмети почато, жоден не закінчено. бланк важкий і знайомий. саме такий я хотіла.",
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
    quote: `rule, from april:
one full paper a week
no second paper until the first one is actually reviewed
otherwise i just collect numbers
rank 248. german block, reviewed it even when i didnt want to`,
    de: {
      outcome: "Rang 248",
      quote: `regel, ab april:
ein ganzes papier pro woche
kein zweites bevor das erste wirklich angeschaut ist
sonst sammle ich nur zahlen
rang 248. deutscher block, angeschaut auch wenn ich nicht wollte`,
    },
    uk: {
      outcome: "Місце 248",
      quote: `правило, з квітня:
один повний бланк на тиждень
другого немає поки перший справді розібраний
інакше я просто збираю цифри
місце 248. німецький блок, розбирав навіть коли не хотів`,
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
    quote: `signed up for both. nobody could say, with a straight face, which paper.
deal with my parents: both, until the results, then pick.
math once. i did not redo derivatives in a second language. the language parts are not the same thing and i dont get why people talk like they are.
took bbe. still wrote the german paper so august wouldnt be me wondering.`,
    de: {
      outcome: "BBE Rang 88, und ein WiSo-Platz",
      quote: `für beide angemeldet. niemand konnte mit ernstem gesicht sagen welches papier.
abmachung mit den eltern: beide, bis zu den ergebnissen, dann wählen.
mathe einmal. ableitungen nicht nochmal in einer zweiten sprache. die sprachteile sind nicht dasselbe und ich versteh nicht warum leute so tun.
bbe genommen. das deutsche papier trotzdem geschrieben, damit der august nicht nur die frage ist.`,
    },
    uk: {
      outcome: "BBE місце 88, і місце на WiSo",
      quote: `подалась на обидва. ніхто не міг серйозно сказати який бланк.
домовленість з батьками: обидва, до результатів, потім вибір.
математика один раз. похідні другою мовою не переробляла. мовні частини це не одне й те саме і я не розумію чому так говорять.
взяла bbe. німецький бланк все одно написала, щоб серпень не був одним питанням.`,
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
    quote: `different papers. i kept acting like an econ idea copies over 1:1. first day with both, in german, i picked the trap i had just dodged in english. after that, not both language blocks on the same night.
wiso is where i enrolled. german is the vienna part, that was the point of the degree.
bbe was a place too. left it.
4. doing both is heavier than it looks on the page. wish someone had said that in week one.`,
    de: {
      outcome: "Auf WiSo eingeschrieben",
      quote: `verschiedene papiere. ich hab so getan als ob eine wirtschaftsidee 1:1 rüberkopiert. erster tag mit beiden, auf deutsch, die falle gewählt der ich auf englisch gerade ausgewichen bin. danach nicht mehr beide sprachblöcke am selben abend.
eingeschrieben auf wiso. deutsch ist der wien-teil, das war der punkt am studium.
bbe war auch ein platz. gelassen.
4. beides ist schwerer als es auf der seite aussieht. hätte das jemand in woche eins sagen können.`,
    },
    uk: {
      outcome: "Вступив на WiSo",
      quote: `різні бланки. я й далі поводився ніби економічна ідея копіюється 1:1. першого дня з обома, німецькою, вибрав пастку якої щойно уникнув англійською. після того не обидва мовні блоки в один вечір.
вступив на wiso. німецька це віденська частина, у цьому був сенс ступеня.
bbe теж був місцем. лишив.
4. робити обидва важче ніж виглядає на сторінці. хотів би щоб це сказали на першому тижні.`,
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
      "wasnt dropping a language in april just so the week looks nicer. math once. english one day, german another, so they dont melt. heavier spring than friends on one exam. both results came. took bbe. still dont know if both was smart. i know march panic didnt get to choose.",
    de: {
      outcome: "Den BBE-Platz genommen",
      quote:
        "im april keine sprache gestrichen nur damit die woche hübscher aussieht. mathe einmal. englisch an einem tag, deutsch am anderen, damit es nicht zusammenläuft. schwereres frühjahr als freunde mit einer prüfung. beide ergebnisse da. bbe genommen. ob beides klug war weiß ich noch nicht. ich weiß dass die panik im märz nicht gewählt hat.",
    },
    uk: {
      outcome: "Взяла місце на BBE",
      quote:
        "у квітні не викидала мову лише щоб тиждень виглядав легше. математика один раз. англійська в один день, німецька в інший, щоб не злипались. весна важча ніж у друзів з одним іспитом. обидва результати прийшли. взяла bbe. досі не знаю чи обидва це було розумно. знаю що паніка в березні не обирала.",
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
  averageStarsLabel() !== "4.7"
) {
  throw new Error("Acceptance notes must be 17 BBE, 11 WiSo, 3 Hybrid, and average 4.7.");
}
