import type { NewsPost } from "./types";

/**
 * Product-diary posts with ship dates for the public news feed.
 * Bodies stay English for v1 (same rule as other news posts).
 */
export const FEATURE_POSTS: NewsPost[] = [
  {
    slug: "demo-exam-is-public",
    title: "Demo Exam is open without an account",
    date: "2026-09-22",
    author: "BBE School creators",
    summary:
      "We tore down the signup wall on the hard diagnostic mock. Here is why, what you will feel in the sitting, and how to read the score without spiraling.",
    body: [
      {
        type: "p",
        text: "I am going to admit something slightly embarrassing. For weeks we knew Demo Exam should be public, and we still left an account wall on it like a bouncer who only asks for ID after you have already queued. Parents wanted one clean link. Students were inventing throwaway emails just to peek. We told ourselves the wall protected the bank. What it actually protected was our anxiety about first impressions.",
      },
      {
        type: "p",
        text: "On 22 September we opened the door. No account required to start. You sit a hard BBE-shaped mock, you see where recoverable points leak, and only then do you decide whether the full course is worth your money. The bank did not get softer overnight. The welcome mat did.",
      },
      {
        type: "media",
        kind: "image",
        src: "/demo-practice-product-v2.png",
        alt: "BBE School practice product visual used around the Demo Exam launch",
        caption:
          "The public Demo Exam page borrows the same exam-room atmosphere as the rest of practice. Pretty poster, stubborn tasks.",
      },
      {
        type: "figure",
        id: "demo-signup-wall",
        caption:
          "Illustrative funnel from the weeks before launch. Plenty of people landed. Far fewer finished once an email form appeared mid-curiosity.",
      },
      {
        type: "p",
        text: "If you already practice inside a course, nothing sneaky changed in the keys. What changed is who gets to feel the sitting cold. Take it when you have a quiet hour. Do not take it on the tram between stops and then declare the exam impossible. The paper is designed to bruise a little. That bruise is information.",
      },
      {
        type: "steps",
        title: "How we want you to run the public demo",
        caption: "Not a rulebook. Just the sequence that makes the score useful instead of theatrical.",
        steps: [
          {
            id: "quiet",
            title: "Block a real hour",
            detail:
              "Phone elsewhere. Water on the desk. Treat it like a dress rehearsal, not a casual quiz between messages.",
          },
          {
            id: "mark",
            title: "Mark like the room will mark",
            detail:
              "Blanks are allowed. Confident wrong marks are expensive. If you do not know, do not decorate the answer sheet for sport.",
          },
          {
            id: "leak",
            title: "Read leaks, not drama",
            detail:
              "After submit, hunt the recoverable mistakes first: domain slips, over-marking, rushed false claims. The headline score can wait.",
          },
        ],
      },
      {
        type: "figure",
        id: "mock-score-leak",
        caption:
          "Where avoidable points tend to leak in high-difficulty demo reviews. Math leads; economics follows through over-marking; English stays quieter.",
      },
      {
        type: "aside",
        text: "If you walk out annoyed and oddly informed, the page did its job. If you walk out only annoyed, tell us which claim felt dirty.",
      },
      {
        type: "cta",
        label: "Open Demo Exam",
        href: "/demo-mock",
        note: "Public diagnostic mock. No account wall at the door.",
      },
    ],
  },
  {
    slug: "mock-builder-left-the-lab",
    title: "Mock Builder left the lab",
    date: "2026-09-11",
    author: "BBE School creators",
    summary:
      "Custom mocks stopped being an internal stress toy. Watch how it moves, sketch a mix, and steal the workflow we use before a bank ships.",
    body: [
      {
        type: "p",
        text: "Mock Builder lived on our machines for months like a slightly dangerous kitchen gadget. We used it to torture banks, compare section weights, and catch the moment a rewrite made a paper accidentally gentle. Then a student asked, very politely, why only we got to assemble sittings. Fair question. On 11 September the builder left the lab.",
      },
      {
        type: "media",
        kind: "video",
        src: "/how-it-works/mock-builder.mp4",
        poster: "/how-it-works/mock-builder-poster.jpg",
        alt: "Screen recording of Mock Builder assembling a custom exam",
        caption:
          "How-it-works reel from launch week. Subject picks, bank pulls, a sitting that belongs to you instead of last month’s fixed paper.",
      },
      {
        type: "p",
        text: "BBE gets it in the products menu. WiSo gets the twin once you flip the track switch. You pull from the same hard banks we argue about in review. That is the feature and also the warning. If you fish for comfort clusters, the builder will not slap your hand. It will also not pretend your gentle paper predicts exam day.",
      },
      {
        type: "tool",
        id: "builder-mix",
        caption:
          "A toy mixer, not the live product. Use it to feel how section weight changes the story of a sitting before you open the real builder.",
      },
      {
        type: "steps",
        title: "The workflow we still use internally",
        caption: "Steal this. It is how we stop custom papers from becoming random noise.",
        steps: [
          {
            id: "leak-first",
            title: "Start from your last leak map",
            detail:
              "If math domains killed you last time, overweight math on purpose. Revenge practice beats vibes practice.",
          },
          {
            id: "one-mix",
            title: "Build one honest mix, not five soft ones",
            detail:
              "Repeating a comfort paper teaches comfort. One stubborn mix teaches more than a week of polite quizzes.",
          },
          {
            id: "review",
            title: "Review like a fixed mock",
            detail:
              "Custom does not mean casual. Same post-mortem: recoverable leaks first, ego second.",
          },
        ],
      },
      {
        type: "cta",
        label: "Open Mock Builder",
        href: "/products/custom-mock-builder",
        note: "Assemble a sitting from the live hard banks.",
      },
    ],
  },
  {
    slug: "what-shipped-since-may",
    title: "What shipped since May, in one messy timeline",
    date: "2026-09-08",
    author: "BBE School creators",
    summary:
      "A click-through shipping diary with the campus backdrop, the release spine from May to September, and the posts where each feature gets a longer telling.",
    body: [
      {
        type: "p",
        text: "Somebody in the group chat asked for a simple list of when things actually went live. Changelogs are ugly. Our memories are worse. So here is the spine of the year so far: not every commit, just the days that changed how students practice. Tap a row for the short note. Open the older posts below it in the feed when you want the full argument.",
      },
      {
        type: "media",
        kind: "image",
        src: "/wu-vienna/campus-plaza.jpg",
        alt: "WU Vienna campus plaza",
        caption:
          "WU campus on a quiet day. We build for that building, not for a generic startup aesthetic board.",
      },
      {
        type: "timeline",
        caption:
          "Newer releases sit higher. Older ones lower. If a date feels familiar, there is probably a longer post for it elsewhere in this feed.",
        entries: [
          {
            id: "demo-exam",
            dateLabel: "22 Sep 2026",
            title: "Demo Exam goes public",
            note: "Hard diagnostic mock without an account wall. First impressions now survive strangers with one free hour.",
          },
          {
            id: "builder",
            dateLabel: "11 Sep 2026",
            title: "Mock Builder leaves internal-only",
            note: "Students assemble sittings from live banks instead of waiting for our next fixed paper.",
          },
          {
            id: "wiso",
            dateLabel: "27 Aug 2026",
            title: "WiSo track opens beside BBE",
            note: "Same school, second entrance exam. German economics path, mirrored practice surfaces.",
          },
          {
            id: "games",
            dateLabel: "14 Aug 2026",
            title: "Flashcards and Matching hit the dashboard",
            note: "Short-session tools for nights that cannot carry a full mock.",
          },
          {
            id: "answer-sheet",
            dateLabel: "2 Aug 2026",
            title: "Official answer-sheet explainer",
            note: "Format quirks get daylight instead of a buried FAQ paragraph.",
          },
          {
            id: "scoring",
            dateLabel: "18 Jul 2026",
            title: "Scoring page without the fog",
            note: "Partial credit, floors at zero, worked examples you can argue with.",
          },
          {
            id: "tutor",
            dateLabel: "3 Jul 2026",
            title: "Tutor exam mode",
            note: "Tighter subject loops between drills and full papers.",
          },
          {
            id: "subjects",
            dateLabel: "19 Jun 2026",
            title: "Full course subject rooms",
            note: "Math, English, Economics stop sharing one vague doorway.",
          },
          {
            id: "dashboard",
            dateLabel: "4 Jun 2026",
            title: "Dashboard that remembers leaks",
            note: "Course access and study tools in one map for tired evenings.",
          },
          {
            id: "mocks",
            dateLabel: "16 May 2026",
            title: "First hard mocks go live",
            note: "Prototype talk ends. Papers start bruising on purpose.",
          },
          {
            id: "chooser",
            dateLabel: "2 May 2026",
            title: "BBE vs WiSo chooser",
            note: "Homepage stops funneling every visitor into one exam story.",
          },
        ],
      },
      {
        type: "p",
        text: "If you joined last week, this is why the product feels denser than one landing page. If you have been here since spring, thanks for surviving the awkward middle builds. The rest of the feed is where those dates get louder.",
      },
    ],
  },
  {
    slug: "wiso-track-is-live",
    title: "WiSo track is live next to BBE",
    date: "2026-08-27",
    author: "BBE School creators",
    summary:
      "We stopped pretending one product politely covers two entrance exams. Here is what the track switch actually changes, with a chooser you can poke.",
    body: [
      {
        type: "p",
        text: "Spring was full of sentences like “WiSo is coming” while the site still behaved like BBE with a German accent in the FAQ. That was dishonest. On 27 August the WiSo track became a real side of the school: hub, demos, course doors, later its own builder. Flip the header switch and the practice surfaces follow. Stay on the wrong track and you will study the wrong animal with great confidence.",
      },
      {
        type: "media",
        kind: "image",
        src: "/wu-vienna/library-learning-center.jpg",
        alt: "WU Vienna library learning center",
        caption:
          "Same university gravity for both tracks. Different papers. Different languages. Different ways to lose points.",
      },
      {
        type: "tool",
        id: "track-compare",
        caption:
          "A blunt compare tool. If you are still unsure after this, read BBE vs WiSo before you buy anything.",
      },
      {
        type: "p",
        text: "WiSo students: stop borrowing BBE English banks and hoping translation magic appears in the room. BBE students: the WiSo German economics rooms are not a secret shortcut. Overlap in mindset is real. The sittings are not twins. The switcher is there so you stop gaslighting yourself.",
      },
      {
        type: "media",
        kind: "image",
        src: "/full-wiso-course-product-v3.png",
        alt: "WiSo full course product artwork",
        caption: "WiSo course artwork from the track launch. Different door, same seriousness.",
      },
      {
        type: "cta",
        label: "Enter the WiSo hub",
        href: "/wiso",
        note: "German-track demos, course doors, and exam info.",
      },
    ],
  },
  {
    slug: "flashcards-and-matching",
    title: "Flashcards and Matching landed in Study tools",
    date: "2026-08-14",
    author: "BBE School creators",
    summary:
      "Short-session tools for evenings that cannot carry a full mock. Flip a sample card, watch the reel, and keep them in their lane.",
    body: [
      {
        type: "p",
        text: "Not every night is a mock night. Some nights you have twelve minutes, a half-dead brain, and a stubborn wish to do something sharper than rereading a highlighted PDF. On 14 August we put Flashcards and Matching under Study tools for exactly those nights. Exam register on purpose. Cute trivia can wait until you have a seat.",
      },
      {
        type: "media",
        kind: "video",
        src: "/how-it-works/flashcards.mp4",
        poster: "/how-it-works/flashcards-poster.jpg",
        alt: "Flashcards how-it-works video",
        caption: "Flashcards reel from launch. Fast flips, exam vocabulary, no soft aesthetic fog.",
      },
      {
        type: "tool",
        id: "flashcard-peek",
        caption:
          "Three sample cards from the economics register. The live decks are longer and meaner. This is just the gesture.",
      },
      {
        type: "media",
        kind: "video",
        src: "/how-it-works/matching.mp4",
        poster: "/how-it-works/matching-poster.jpg",
        alt: "Matching how-it-works video",
        caption: "Matching reel. Definitions and terms under light pressure, still not a substitute for stems.",
      },
      {
        type: "figure",
        id: "study-session-length",
        caption:
          "Illustrative median session lengths. Cards and matching exist because full mocks are not the only honest unit of work.",
      },
      {
        type: "aside",
        text: "Use these between heavier sittings, not instead of them. A term you only know on a card can still blindside you inside a tired cluster.",
      },
      {
        type: "cta",
        label: "Open Study tools",
        href: "/dashboard?tab=games",
        note: "Flashcards and Matching live under the dashboard Study tools tab.",
      },
    ],
  },
  {
    slug: "answer-sheet-page",
    title: "We shipped a page just for the answer sheet",
    date: "2026-08-02",
    author: "BBE School creators",
    summary:
      "Format confusion was eating known content. So the official answer-sheet explainer got daylight, steps, and no more FAQ burial.",
    body: [
      {
        type: "p",
        text: "There is a special anger that shows up when a student knows the economics and still botches the paper choreography. We kept burying format notes inside long FAQ answers like that would make the problem smaller. It did not. On 2 August the answer-sheet explainer got its own page, because if the official format has quirks, we would rather stare at them with the lights on.",
      },
      {
        type: "media",
        kind: "image",
        src: "/wu-vienna/teaching-center.jpg",
        alt: "WU Vienna teaching center",
        caption:
          "The room does not care that you understood the concept if the sheet choreography fails. Train both.",
      },
      {
        type: "steps",
        title: "What we tell people before exam week",
        caption: "Sheet discipline is a muscle. Treat it like one.",
        steps: [
          {
            id: "print",
            title: "Handle a real sheet at least once",
            detail:
              "Screen confidence is not sheet confidence. Print or open the official layout and mark under time once before the week of the exam.",
          },
          {
            id: "blank",
            title: "Practice strategic blanks",
            detail:
              "Knowing you may leave a statement unmarked is part of scoring literacy, not cowardice.",
          },
          {
            id: "review",
            title: "Separate content misses from format misses",
            detail:
              "In review, tag mistakes. If half your leaks are choreography, another content pack will not save you.",
          },
        ],
      },
      {
        type: "cta",
        label: "Read the answer-sheet page",
        href: "/features/answer-sheet",
        note: "Official format quirks, explained without FAQ archaeology.",
      },
    ],
  },
  {
    slug: "scoring-without-the-fog",
    title: "Scoring without the fog",
    date: "2026-07-18",
    author: "BBE School creators",
    summary:
      "Partial credit, floors at zero, worked examples. Poke a mini scoring toy, then go read the full page while you are still calm.",
    body: [
      {
        type: "p",
        text: "Before mid-July, half our chats were the same fight in different fonts. Does an unmarked false statement punish you. Can a task go negative. Why did an almost-right cluster score like that. On 18 July the scoring page got the worked examples it always needed. Less myth. More mark-scheme behavior.",
      },
      {
        type: "tool",
        id: "partial-credit",
        caption:
          "A tiny BBE-style toy. True statements reward marks. False statements punish marks. Blanks stay quiet. The floor refuses to go negative.",
      },
      {
        type: "p",
        text: "Read the full scoring walkthrough once when you are calm. Then take a mock and watch yourself violate every rule you just nodded at. That gap is the whole point of practice. The page will not sit the exam for you. It will stop you from inventing a private scoring religion.",
      },
      {
        type: "media",
        kind: "image",
        src: "/how-it-works/economics-poster.jpg",
        alt: "Economics practice poster",
        caption:
          "Economics clusters are where over-marking drama loves to happen. The toy above is the calm version of that fight.",
      },
      {
        type: "cta",
        label: "Open BBE scoring explainer",
        href: "/bbe-exam-scoring",
        note: "Worked examples, partial credit, floor at zero.",
      },
    ],
  },
  {
    slug: "tutor-exam-mode",
    title: "Tutor exam mode for tighter loops",
    date: "2026-07-03",
    author: "BBE School creators",
    summary:
      "A middle gear between single drills and full papers. Watch the reel, steal the loop, and do not live here forever.",
    body: [
      {
        type: "p",
        text: "Full mocks are honest. They are also long. On 3 July we opened Tutor exam mode for people who needed a middle gear: subject-focused sittings with a tighter feedback loop. It will not replace a real paper. It will stop you from waiting three days to discover you still butcher domains.",
      },
      {
        type: "media",
        kind: "video",
        src: "/how-it-works/tutor-exam.mp4",
        poster: "/how-it-works/tutor-exam-poster.jpg",
        alt: "Tutor exam how-it-works video",
        caption: "Tutor exam reel from July. Subject focus, faster autopsy, still exam-shaped pressure.",
      },
      {
        type: "steps",
        title: "A loop that actually repairs something",
        caption: "If you only live in tutor mode, mixed sections will still surprise you. Alternate on purpose.",
        steps: [
          {
            id: "pick-leak",
            title: "Pick one leak family",
            detail:
              "Domains, over-marking, vocabulary precision. One family per sitting. Revenge needs a target.",
          },
          {
            id: "tutor",
            title: "Run tutor mode on that family",
            detail:
              "Stay inside the subject long enough for the mistake to get boring. Boring means the repair is sticking.",
          },
          {
            id: "full",
            title: "Return to a full mock within a few days",
            detail:
              "Check whether the repair survives mixed sections and fatigue. If it dies there, the repair was cosplay.",
          },
        ],
      },
      {
        type: "figure",
        id: "study-session-length",
        caption: "Tutor mode sits between drills and full papers on purpose. That is the product niche.",
      },
      {
        type: "cta",
        label: "Open tutor exam",
        href: "/tutor-exam",
        note: "Subject sittings with a tighter feedback loop.",
      },
    ],
  },
  {
    slug: "full-course-subject-rooms",
    title: "Full course got real subject rooms",
    date: "2026-06-19",
    author: "BBE School creators",
    summary:
      "Math, English, and Economics stopped sharing one vague doorway. Here is the artwork, the room logic, and why the blob had to die.",
    body: [
      {
        type: "p",
        text: "Early full-course buyers got dropped into a blob and told good luck. On 19 June that stopped. Subject rooms made it obvious where math ends, where English begins, and where economics is hiding the accounting traps. Navigation got less heroic. Practice got more honest about which muscle you were training that night.",
      },
      {
        type: "media",
        kind: "image",
        src: "/full-course-product-v2.png",
        alt: "Full course product artwork",
        caption: "Full course artwork around the subject-room launch. One purchase, clearer doors.",
      },
      {
        type: "steps",
        title: "How to use the rooms without lying to yourself",
        caption: "Rooms help only if you stop bouncing randomly between them for comfort.",
        steps: [
          {
            id: "diagnose",
            title: "Diagnose with a mixed mock first",
            detail:
              "Do not pick a favorite subject and live there. Let a mixed paper tell you which door deserves the week.",
          },
          {
            id: "block",
            title: "Block time inside one room",
            detail:
              "A real block beats five guilty peeks. Depth repairs leaks. Tourism does not.",
          },
          {
            id: "recheck",
            title: "Recheck in a mixed sitting",
            detail:
              "If the room repair dies under mixed fatigue, you learned something useful about transfer.",
          },
        ],
      },
      {
        type: "media",
        kind: "image",
        src: "/how-it-works/math-poster.jpg",
        alt: "Mathematics practice poster",
        caption: "Math room energy. Domains and discarded roots do not care about your vibe playlist.",
      },
      {
        type: "cta",
        label: "See full course subjects",
        href: "/products/full-course-subjects",
        note: "Separate doors for the muscles you are actually training.",
      },
    ],
  },
  {
    slug: "dashboard-that-remembers",
    title: "A dashboard that remembers where you left the mess",
    date: "2026-06-04",
    author: "BBE School creators",
    summary:
      "We used to send six links after purchase and act surprised when people got lost. June 4 made the dashboard the front door.",
    body: [
      {
        type: "p",
        text: "There is nothing humble about making a student reconstruct your information architecture at 23:40. We used to send a constellation of links after purchase and then blame “user error” when people wandered off. On 4 June the dashboard became the front door: what you own, what you can open, where study tools live, where the mess from last session still sits.",
      },
      {
        type: "media",
        kind: "image",
        src: "/wu-vienna/library-interior.jpg",
        alt: "WU Vienna library interior",
        caption:
          "A map beats a scavenger hunt. The dashboard is boring on purpose so your brain can save drama for the paper.",
      },
      {
        type: "steps",
        title: "What the dashboard is for",
        caption: "Not a social feed. A recovery map for tired evenings.",
        steps: [
          {
            id: "own",
            title: "See what you actually own",
            detail:
              "Course access and unlocked doors in one glance, so you stop guessing whether a link still works.",
          },
          {
            id: "continue",
            title: "Continue instead of re-hunting",
            detail:
              "Return to practice without rebuilding the path from an old email.",
          },
          {
            id: "tools",
            title: "Jump to short tools when energy is low",
            detail:
              "Study tools live here so a twelve-minute night still has a door.",
          },
        ],
      },
      {
        type: "cta",
        label: "Open dashboard",
        href: "/dashboard",
        note: "Front door after purchase. Map, not maze.",
      },
    ],
  },
  {
    slug: "first-hard-mocks-went-live",
    title: "First hard mocks went live",
    date: "2026-05-16",
    author: "BBE School creators",
    summary:
      "The night strangers sat papers we could not patch mid-sitting. Bruises, angry-correct replies, and the keep-or-cut habit that stuck.",
    body: [
      {
        type: "p",
        text: "16 May is still circled on our side of the calendar. That was the first evening strangers sat mocks we could not hotfix while they were inside. Some scores looked brutal. A few explanations earned angry replies that were, annoyingly, correct. We rewrote overnight and learned that shipping a hard paper is less romantic than designing one on a whiteboard.",
      },
      {
        type: "media",
        kind: "image",
        src: "/how-it-works/economics-poster.jpg",
        alt: "Economics mock atmosphere poster",
        caption: "Launch-week atmosphere. The tasks behind the poster were not atmosphere. They were teeth.",
      },
      {
        type: "figure",
        id: "mock-keep-cut",
        caption:
          "The keep-or-cut habit started that month and never left. Drafting is cheap. Letting a muddy cluster reach a student is expensive.",
      },
      {
        type: "p",
        text: "If your first mock felt unfair, maybe it was. Tell us which claim. If it felt fair and still painful, that is closer to the exam than another round of soft drills. We kept the bruise. We threw out the parts that only hurt because we wrote badly.",
      },
      {
        type: "figure",
        id: "mock-rewrite-effort",
        caption:
          "Where hours go once a paper is real. False candidates and step polish still eat the week.",
      },
      {
        type: "cta",
        label: "Browse mock exams",
        href: "/mock-exams",
        note: "The lineage starts here, even if the banks have been rewritten since May.",
      },
    ],
  },
  {
    slug: "bbe-vs-wiso-chooser",
    title: "The homepage finally asks BBE or WiSo",
    date: "2026-05-02",
    author: "BBE School creators",
    summary:
      "Two doors, one school. Poke the compare tool, look at campus, and choose the exam you are actually sitting before you buy a course.",
    body: [
      {
        type: "p",
        text: "On 2 May the chooser went up. Two doors. One school. It looked simple and caused a week of copy arguments about verbs. Worth it. Students who needed WiSo were done squinting at BBE English pages wondering if they had entered the wrong building. Parents stopped writing contact-form essays just to ask which path was theirs.",
      },
      {
        type: "media",
        kind: "image",
        src: "/wu-vienna/audimax.jpg",
        alt: "WU Vienna Audimax",
        caption: "Same destination building. Different entrance exams. The homepage finally says that out loud.",
      },
      {
        type: "tool",
        id: "track-compare",
        caption:
          "If this still feels fuzzy, read the long BBE vs WiSo page before you pay for the wrong shelf of practice.",
      },
      {
        type: "aside",
        text: "The refund people want later is usually a track mistake made on day one. Choose the door while you are calm.",
      },
      {
        type: "cta",
        label: "Read BBE vs WiSo",
        href: "/bbe-vs-wiso",
        note: "Longer compare when the homepage doors are not enough.",
      },
    ],
  },
];
