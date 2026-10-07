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
    quote: "Had the flu in January and forgot I even paid for anything. My sister kept texting if I was studying. I wasn't. When I opened it again I only touched economics, math makes me angry before noon. Videos are long, I skipped them, not a huge issue.",
    de: {
      outcome: "Rang 156",
      quote: "Im Januar Grippe gehabt und vergessen, dass ich überhaupt was bezahlt hab. Meine Schwester hat dauernd geschrieben, ob ich lerne. Hab ich nicht. Als ichs wieder aufgemacht hab, nur Wirtschaft, Mathe macht mich vor dem Mittag aggressiv. Videos sind lang, hab ich übersprungen, kein großes Ding.",
    },
    uk: {
      outcome: "Місце 156",
      quote: "У січні я хворіла на грип і забула, що взагалі за щось платила. Сестра писала, чи я вчусь. Ні. Коли знову відкрила, чіпала тільки економіку, математика злить мене до обіду. Відео довгі, пропустила, не велика біда.",
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
    quote: "Two sessions with a tutor, then I stopped going. He wanted me to highlight a textbook. Sundays were football and then some questions, that was the routine. My parents still think the tutor did the work.",
    de: {
      outcome: "Rang 84",
      quote: "Zwei Stunden Nachhilfe, dann bin ich nicht mehr hingegangen. Er wollte, dass ich ein Lehrbuch anstreiche. Sonntags Fußball und danach ein paar Fragen, das war die Routine. Meine Eltern denken immer noch, der Nachhilfelehrer war's.",
    },
    uk: {
      outcome: "Місце 84",
      quote: "Два заняття з репетитором, потім я перестав ходити. Він хотів, щоб я підкреслював підручник. У неділю футбол і потім кілька питань, ось і весь режим. Батьки досі думають, що це репетитор зробив.",
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
    quote: "There's a tax question I memorised and I still couldn't explain it to my flatmate. She thinks I know what I'm doing. I don't. Rank 203 feels like I got away with it.",
    de: {
      outcome: "Rang 203",
      quote: "Da ist eine Steuerfrage, die ich auswendig kann, und meiner Mitbewohnerin erklären konnte ich sie trotzdem nicht. Sie denkt, ich weiß was ich tu. Weiß ich nicht. Rang 203 fühlt sich an, als wär ich davongekommen.",
    },
    uk: {
      outcome: "Місце 203",
      quote: "Є одне питання про податки, яке я вивчила напам'ять, і сусідці по квартирі все одно не змогла пояснити. Вона думає, я розумію що роблю. Ні. Місце 203 відчувається так, ніби мене пронесло.",
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
    quote: "The apartment was loud, the cafe near Schottentor wasn't much quieter, someone was always on a call. I put headphones on and did English statements. Friends kept sending German notes that didn't match what I was looking at. It got done, I don't have a nicer story.",
    de: {
      outcome: "Rang 34",
      quote: "Die Wohnung war laut, das Cafe beim Schottentor auch nicht leiser, irgendwer telefoniert immer. Kopfhörer rein und englische Aussagen. Freunde haben deutsche Notizen geschickt, die nicht zu dem gepasst haben, was ich angeschaut hab. Ist erledigt, eine schönere Geschichte hab ich nicht.",
    },
    uk: {
      outcome: "Місце 34",
      quote: "Квартира була гучна, кафе біля Schottentor не тихіше, хтось завжди на дзвінку. Надів навушники і робив англійські твердження. Друзі слали німецькі нотатки, які не збігались з тим, що я дивився. Зробилось, гарнішої історії немає.",
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
    quote: "Was fine actually.",
    de: {
      outcome: "Rang 128",
      quote: "War eigentlich ok.",
    },
    uk: {
      outcome: "Місце 128",
      quote: "Насправді нормально.",
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
    quote: "I thought there would be a person, or at least a lot of videos, and there mostly aren't. So the first week I was annoyed. I still did the questions because I had already paid. My cousin in Bucharest had a shared folder from last year and said mine looked cleaner, which is a low bar. I wouldn't tell everyone to get it, and I also wouldn't say the money was thrown away.",
    de: {
      outcome: "Rang 176",
      quote: "Ich dachte da ist eine Person, oder wenigstens viele Videos, und sind es halt nicht. Die erste Woche war ich genervt. Die Fragen hab ich trotzdem gemacht, weil ich schon gezahlt hatte. Mein Cousin in Bukarest hatte einen geteilten Ordner vom letzten Jahr und meinte, bei mir schauts aufgeräumter aus, die Latte liegt niedrig. Ich würd es nicht jedem empfehlen, und ich würd auch nicht sagen, das Geld war weggeworfen.",
    },
    uk: {
      outcome: "Місце 176",
      quote: "Я думав, буде людина, або хоча б багато відео, а їх майже немає. Перший тиждень мене це дратувало. Питання все одно робив, бо вже заплатив. Двоюрідний брат у Бухаресті мав спільну папку з минулого року і сказав, що в мене виглядає охайніше, планка низька. Не всім би радив, і не сказав би, що гроші викинуті.",
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
    quote: "I work Saturday and Sunday at a hotel, so after 11 on weekdays was the slot. Some nights it was twenty minutes and I closed the laptop. In May I almost wrote them for a refund and then didn't. The evenings were miserable, that's the shifts, not a manifesto.",
    de: {
      outcome: "Rang 51",
      quote: "Samstag und Sonntag arbeite ich im Hotel, also war unter der Woche nach 11 der Slot. Manche Abende zwanzig Minuten, Laptop zu. Im Mai hätt ich fast wegen einer Rückerstattung geschrieben und habs dann gelassen. Die Abende waren zäh, das sind die Schichten, kein Manifest.",
    },
    uk: {
      outcome: "Місце 51",
      quote: "У суботу і неділю працюю в готелі, тож у будні після 11 був єдиний час. Деякі вечори двадцять хвилин і я закривала ноутбук. У травні мало не написала за повернення грошей і не написала. Вечори були тяжкі, це зміни, не маніфест.",
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
    quote: "Our econ teacher in school loved definitions and hated examples. I'm the other way round and it showed for years. Here it's mostly examples, which I needed, and I still rushed the first ten of every set. Rank 11 sounds fake when I say it out loud.",
    de: {
      outcome: "Rang 11",
      quote: "Unser VWL-Lehrer in der Schule hat Definitionen geliebt und Beispiele gehasst. Ich bin andersrum, und das hat man jahrelang gesehen. Hier sind eher Beispiele, die hab ich gebraucht, und die ersten zehn von jedem Set hab ich trotzdem gehetzt. Rang 11 klingt falsch, wenn ichs laut sage.",
    },
    uk: {
      outcome: "Місце 11",
      quote: "Вчитель економіки в школі любив означення і ненавидів приклади. Я навпаки, і це було видно роками. Тут здебільшого приклади, мені це було треба, і перші десять у кожному наборі я все одно гнав. Місце 11 звучить фальшиво, коли кажу вголос.",
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
    quote: "Phone stayed in the kitchen so I wouldn't open Instagram. The timer on the screen is quiet and I missed it a lot. Started leaving math blank near the end instead of guessing. I wanted a louder beep. Silly thing to complain about, I know.",
    de: {
      outcome: "Rang 214",
      quote: "Handy blieb in der Küche, damit ich Instagram nicht aufmach. Der Timer am Bildschirm ist leise und ich hab ihn oft überhört. Hab angefangen, Mathe am Ende leer zu lassen statt zu raten. Wollte einen lauteren Piep. Blöde Beschwerde, ich weiß.",
    },
    uk: {
      outcome: "Місце 214",
      quote: "Телефон лишався на кухні, щоб я не відкривала Instagram. Таймер на екрані тихий, я його часто пропускала. Почала лишати математику в кінці порожньою замість вгадування. Хотіла гучніший писк. Дурне, на що скаржитись, знаю.",
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
    quote: "I change answers at the last second, it's a bad habit. For a month I wrote the changes in a notebook to show myself they got worse. They did. On the day I changed two anyway. One of them is still sitting in my head.",
    de: {
      outcome: "Rang 67",
      quote: "Ich änder Antworten in der letzten Sekunde, blöde Angewohnheit. Einen Monat lang hab ich die Änderungen in ein Heft geschrieben, um mir zu zeigen, dass sie schlechter werden. Sind sie. Am Tag hab ich trotzdem zwei geändert. Eine sitzt immer noch im Kopf.",
    },
    uk: {
      outcome: "Місце 67",
      quote: "Я міняю відповіді в останню секунду, погана звичка. Місяць записувала зміни в зошит, щоб самій показати, що вони гірші. Так і було. У день іспиту все одно змінила дві. Одна досі сидить у голові.",
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
    quote: "Econ, not math.",
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
    quote: "After work, on my phone, in bed. Some nights I fell asleep on question 6. It was enough, barely, and I don't feel like dressing that up.",
    de: {
      outcome: "Rang 173",
      quote: "Nach der Arbeit, am Handy, im Bett. Manche Nächte bin ich bei Frage 6 eingeschlafen. Hat gereicht, knapp, und ich hab keine Lust das schönzureden.",
    },
    uk: {
      outcome: "Місце 173",
      quote: "Після роботи, з телефона, в ліжку. Деякі ночі засинала на шостому питанні. Вистачило, ледве, і мені не хочеться це прикрашати.",
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
    quote: "People keep asking me for a plan. I don't have one. I did questions when I was bored and skipped days when I wasn't. If that helps you, fine. I don't think it will.",
    de: {
      outcome: "Rang 92",
      quote: "Leute fragen mich dauernd nach einem Plan. Hab ich nicht. Fragen gemacht, wenn mir langweilig war, Tage ausgelassen, wenn nicht. Wenn dir das hilft, ok. Ich glaub nicht, dass es das tut.",
    },
    uk: {
      outcome: "Місце 92",
      quote: "Люди весь час просять у мене план. Його немає. Робив питання, коли було нудно, і пропускав дні, коли ні. Якщо тобі це допоможе, добре. Я не думаю, що допоможе.",
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
    quote: "I got to Vienna in April and didn't know anyone yet. The kitchen table wobbles, so I used the windowsill. German wasn't good enough for the other option. That's the context, I don't have a smoother version.",
    de: {
      outcome: "Rang 109",
      quote: "Im April nach Wien, kannte noch niemanden. Der Küchentisch wackelt, also die Fensterbank. Deutsch hat für die andere Variante nicht gereicht. Das ist der Kontext, eine glattere Version hab ich nicht.",
    },
    uk: {
      outcome: "Місце 109",
      quote: "У квітні приїхала до Відня і ще нікого не знала. Кухонний стіл хитається, тож сиділа на підвіконні. Німецької на інший варіант не вистачало. Ось контекст, гладшої версії немає.",
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
    quote: "I refreshed the pdf twice because I didn't believe the row. In March I almost didn't pay, my brother said these sites are all the same. Maybe they are. I still opened it most nights.",
    de: {
      outcome: "Rang 231",
      quote: "Ich hab das PDF zweimal neu geladen, weil ich der Zeile nicht geglaubt hab. Im März hätt ich fast nicht gezahlt, mein Bruder sagt, diese Seiten sind alle gleich. Vielleicht sind sie das. Trotzdem hab ichs die meisten Abende aufgemacht.",
    },
    uk: {
      outcome: "Місце 231",
      quote: "Я двічі оновив pdf, бо не вірив рядку. У березні мало не заплатив, брат каже, такі сайти всі однакові. Може й так. Усе одно відкривав більшість вечорів.",
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
    quote: "I opened the demo because I didn't want to pay for something I'd hate. I didn't hate it. I also didn't love it, it's dry and very specific. I kept it for three months anyway, mostly late at night. If you want someone cheering, this isn't that.",
    de: {
      outcome: "Rang 58",
      quote: "Demo aufgemacht, weil ich nicht für was zahlen wollte, das ich hasse. Hab ich nicht. Geliebt hab ichs auch nicht, es ist trocken und sehr konkret. Trotzdem drei Monate behalten, meistens spät. Wenn du jemanden zum Anfeuern willst, ist das hier nicht.",
    },
    uk: {
      outcome: "Місце 58",
      quote: "Відкрила демо, бо не хотіла платити за те, що зненавиджу. Не зненавиділа. І не полюбила, це сухе і дуже конкретне. Все одно лишила на три місяці, здебільшого пізно. Якщо хочеш, щоб хтось підбадьорював, це не те.",
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
    quote: "Second time. First year I always shoved Sprachverständnis to the end and then I was tired. This time I did it first, even though it annoys me. It was enough. I don't have more to say about it.",
    de: {
      outcome: "Rang 188",
      quote: "Zweites Mal. Erstes Jahr hab ich Sprachverständnis immer nach hinten geschoben und dann war ich müde. Diesmal hab ichs zuerst gemacht, auch wenns mich nervt. Hat gereicht. Mehr hab ich dazu nicht zu sagen.",
    },
    uk: {
      outcome: "Місце 188",
      quote: "Другий раз. Першого року я завжди відкладала Sprachverständnis на кінець і потім була втомлена. Цього разу робила спочатку, хоч мене це і дратує. Вистачило. Більше мені сказати нічого.",
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
    quote: "2011, so this is not a success story. The sets in May already looked like that and I didn't suddenly get better. German wording is just hard for me, math was ordinary. I don't think a website fixes that in two months. I'm putting 3 because it showed me early, and because I don't want to oversell it.",
    de: {
      outcome: "Rang 2011",
      quote: "2011, also keine Erfolgsgeschichte. Die Sets im Mai haben schon so ausgeschaut und ich bin nicht plötzlich besser geworden. Deutsche Formulierung ist für mich einfach schwer, Mathe war normal. Ich glaub nicht, dass eine Website das in zwei Monaten richtet. Ich geb 3, weil ichs früh gesehen hab, und weil ichs nicht zu gut verkaufen will.",
    },
    uk: {
      outcome: "Місце 2011",
      quote: "2011, тож це не історія успіху. Набори в травні вже так виглядали, і я раптом не став кращим. Німецьке формулювання для мене просто важке, математика звичайна. Не думаю, що сайт це за два місяці виправить. Ставлю 3, бо побачив рано, і бо не хочу це перехвалювати.",
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
    quote: "My brother sent me his old English notes, wrong subject. I looked at them for a week and noticed my German getting worse, which is sort of obvious. Then I stopped. Math was never the problem for me.",
    de: {
      outcome: "Rang 733",
      quote: "Mein Bruder hat mir seine alten Englisch-Notizen geschickt, falsches Fach. Hab sie eine Woche angeschaut und gemerkt, dass mein Deutsch schlechter wird, was irgendwie logisch ist. Dann hab ichs gelassen. Mathe war bei mir nie das Problem.",
    },
    uk: {
      outcome: "Місце 733",
      quote: "Брат надіслав старі англійські нотатки, не той предмет. Тиждень на них дивилась і помітила, що німецька гіршає, що якось логічно. Потім кинула. Математика в мене ніколи не була проблемою.",
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
    quote: "German at school was fine until the econ sentences, those are meaner. I kept missing the verb. Last month I started underlining it with a pencil in a notebook, not even on the screen. Dumb. Worked better than rereading.",
    de: {
      outcome: "Rang 1340",
      quote: "Deutsch in der Schule war ok, bis zu den Wirtschaftssätzen, die sind gemeiner. Ich hab das Verb dauernd verpasst. Letzten Monat hab ichs mit Bleistift im Heft unterstrichen, nicht mal am Bildschirm. Blöd. Hat besser funktioniert als noch mal lesen.",
    },
    uk: {
      outcome: "Місце 1340",
      quote: "Німецька в школі була нормальна, поки не економічні речення, вони зліші. Я весь час пропускав дієслово. Минулого місяця почав підкреслювати його олівцем у зошиті, навіть не на екрані. Дурне. Спрацювало краще, ніж перечитувати.",
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
    quote: "It was alright.",
    de: {
      outcome: "Rang 96",
      quote: "War ganz ok.",
    },
    uk: {
      outcome: "Місце 96",
      quote: "Було цілком нормально.",
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
    quote: "I thought Wirtschaft was memorising the book. The sentences aren't the book. After a few weeks I stopped writing summaries, they just confused me. That's all I changed.",
    de: {
      outcome: "Rang 455",
      quote: "Ich dachte, Wirtschaft ist das Buch auswendig. Die Sätze sind aber nicht das Buch. Nach ein paar Wochen hab ich aufgehört, Zusammenfassungen zu schreiben, die haben mich nur verwirrt. Mehr hab ich nicht geändert.",
    },
    uk: {
      outcome: "Місце 455",
      quote: "Я думав, економіка це вивчити книжку. Речення це не книжка. Через кілька тижнів перестав писати конспекти, вони тільки плутали. Більше я нічого не міняв.",
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
    quote: "In February I wanted to switch, a friend said German is just more crowded, not harder. For me that's true, I read German faster than English. Arguing with myself still took a month. 4 stars, not because of the material, because of that month. I could have skipped the argument.",
    de: {
      outcome: "Rang 1204",
      quote: "Im Februar wollt ich wechseln, eine Freundin hat gesagt, Deutsch ist nur voller, nicht schwerer. Für mich stimmt das, ich les Deutsch schneller als Englisch. Die Streiterei mit mir selbst hat trotzdem einen Monat gedauert. 4 Sterne, nicht wegen dem Inhalt, wegen dem Monat. Den hätt ich mir sparen können.",
    },
    uk: {
      outcome: "Місце 1204",
      quote: "У лютому хотіла перейти, подруга сказала, що німецька просто більш людна, не важча. Для мене це правда, німецькою я читаю швидше за англійську. Сперечатись сама з собою все одно місяць. 4 зірки, не через матеріал, через той місяць. Можна було без тієї суперечки.",
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
    quote: "Came down from Hamburg only for the date, I studied at home. German was fine. Partial points were new to me, at the start I ticked everything. One set made that very obvious, since then I leave things out. Nothing dramatic.",
    de: {
      outcome: "Rang 312",
      quote: "Bin aus Hamburg nur für den Termin runter, gelernt hab ich zu Hause. Deutsch war ok. Teilpunkte waren neu für mich, am Anfang hab ich alles angekreuzt. Ein Set hat mir das sehr deutlich gezeigt, seitdem lass ich Sachen aus. Nichts Großes.",
    },
    uk: {
      outcome: "Місце 312",
      quote: "Приїхала з Гамбурга тільки на дату, вчилась удома. Німецька була нормальна. Часткові бали були для мене нові, спочатку ставила все. Один набір це дуже ясно показав, відтоді лишаю речі порожніми. Нічого драматичного.",
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
    quote: "Not my first language. Grammar pages did nothing, I already knew that from school. Reading a bit on most days did more, still slow. Sprachverständnis is my least favourite thing to look at. It didn't get comfortable. It got less scary, and that's as far as I'll go.",
    de: {
      outcome: "Rang 1677",
      quote: "Nicht meine erste Sprache. Grammatikseiten haben nichts gebracht, das wusste ich schon aus der Schule. Ein bisschen lesen an den meisten Tagen hat mehr gebracht, immer noch langsam. Sprachverständnis schau ich am ungernsten an. Bequem wurde es nicht. Weniger unheimlich, und weiter geh ich nicht.",
    },
    uk: {
      outcome: "Місце 1677",
      quote: "Не моя перша мова. Сторінки з граматики нічого не дали, це я ще зі школи знав. Трохи читати майже щодня дало більше, все одно повільно. Sprachverständnis мені найменше хочеться бачити. Комфортно не стало. Стало менш страшно, і далі я не піду.",
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
    quote: "I kept switching topic every 20 minutes and called that studying. At some point I only did short mixed sets, otherwise I started three subjects and finished none. I don't look at the old notebooks anymore.",
    de: {
      outcome: "Rang 860",
      quote: "Ich hab alle 20 Minuten das Thema gewechselt und das Lernen genannt. Irgendwann nur noch kurze gemischte Sets, sonst hab ich drei Fächer angefangen und keins fertig. Die alten Hefte schau ich nicht mehr an.",
    },
    uk: {
      outcome: "Місце 860",
      quote: "Я міняла тему кожні 20 хвилин і називала це навчанням. Якийсь момент лишились тільки короткі змішані набори, інакше я починала три предмети і жоден не закінчувала. Старі зошити більше не відкриваю.",
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
    quote: "From April I only let myself do one full set a week. A second one and I was just collecting scores. Some weeks I didn't want to look at the German part. I looked anyway. That's the whole story.",
    de: {
      outcome: "Rang 248",
      quote: "Ab April hab ich mir nur ein ganzes Set pro Woche erlaubt. Ein zweites, und ich hab nur Punkte gesammelt. Manche Wochen wollt ich den deutschen Teil nicht anschauen. Hab ich trotzdem. Das ist die ganze Geschichte.",
    },
    uk: {
      outcome: "Місце 248",
      quote: "З квітня дозволяв собі лише один повний набір на тиждень. Другий, і я просто збирав бали. Деякі тижні не хотів дивитись німецьку частину. Дивився все одно. Ось і вся історія.",
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
    quote: "I signed up for both because my parents couldn't agree which one. We said I'd keep both until the results and then pick. Math I only did once, I'm not doing derivatives twice in two languages. People online talk like the language parts are the same thing. They aren't. I took BBE, and I'm glad the other one was just sitting there.",
    de: {
      outcome: "BBE Rang 88, und ein WiSo-Platz",
      quote: "Ich hab mich für beide angemeldet, weil meine Eltern sich nicht einigen konnten. Wir haben gesagt, beide bis zu den Ergebnissen, dann wählen. Mathe nur einmal, ich mach Ableitungen nicht zweimal in zwei Sprachen. Im Internet tun Leute so, als wären die Sprachteile dasselbe. Sind sie nicht. Ich hab BBE genommen, und gut, dass das andere einfach da lag.",
    },
    uk: {
      outcome: "BBE місце 88, і місце на WiSo",
      quote: "Подалась на обидва, бо батьки не могли домовитись який. Домовились: обидва до результатів, потім вибір. Математику робила один раз, похідні двічі двома мовами не буду. В інтернеті говорять, ніби мовні частини це одне й те саме. Ні. Взяла BBE, і добре, що інший просто лежав.",
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
    quote: "I kept treating them like one exam with the language swapped. First week I missed a German question I had just got right in English, same idea. After that I stopped doing both on the same evening. I enrolled on WiSo. 4, because both together is more work than I thought when I paid, and nobody I know had done it, so I had nobody to ask.",
    de: {
      outcome: "Auf WiSo eingeschrieben",
      quote: "Ich hab die beiden behandelt wie eine Prüfung mit anderer Sprache. Erste Woche eine deutsche Frage daneben, die ich auf Englisch gerade richtig hatte, gleiche Idee. Danach nicht mehr beide am selben Abend. Eingeschrieben auf WiSo. 4, weil beides zusammen mehr Arbeit ist als ich beim Zahlen gedacht hab, und niemand den ich kenn hat das gemacht, also hatte ich niemanden zum Fragen.",
    },
    uk: {
      outcome: "Вступив на WiSo",
      quote: "Я ставився до них як до одного іспиту з іншою мовою. Першого тижня промахнувся в німецькому питанні, яке щойно правильно зробив англійською, та сама думка. Після того не робив обидва в один вечір. Вступив на WiSo. 4, бо разом це більше роботи, ніж я думав коли платив, і ніхто з знайомих так не робив, спитати було нікого.",
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
    quote: "Didn't want to drop a language in April just so the week looked tidier. Math once, English and German on different days, otherwise I mix everything up. Heavier than my friends who only had one. I still don't know if that was smart. I just didn't decide it while panicking.",
    de: {
      outcome: "Den BBE-Platz genommen",
      quote: "Wollt im April keine Sprache streichen, nur damit die Woche hübscher aussieht. Mathe einmal, Englisch und Deutsch an verschiedenen Tagen, sonst vermisch ich alles. Anstrengender als bei Freunden mit nur einem. Ob das klug war, weiß ich immer noch nicht. Ich habs nur nicht in der Panik entschieden.",
    },
    uk: {
      outcome: "Взяла місце на BBE",
      quote: "У квітні не хотіла викидати мову лише щоб тиждень виглядав охайніше. Математика один раз, англійська і німецька в різні дні, інакше все змішується. Важче, ніж у друзів з одним. Чи це було розумно, досі не знаю. Просто не вирішувала це в паніці.",
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
