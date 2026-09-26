import type { NewsPost } from "./types";

/**
 * Product-diary posts with invented ship dates for the public news feed.
 * Bodies stay English for v1 (same rule as other news posts).
 */
export const FEATURE_POSTS: NewsPost[] = [
  {
    slug: "demo-exam-is-public",
    title: "Demo Exam is open without an account",
    date: "2026-09-22",
    author: "BBE School creators",
    summary:
      "We pushed the hard diagnostic mock onto a public page so you can feel the sitting before you buy anything.",
    body: [
      {
        type: "p",
        text: "We kept delaying this because public pages make us nervous. Once a mock is free and linkable, every awkward claim becomes a first impression. Still, hiding the diagnostic behind signup was the wrong trade. Today Demo Exam sits on its own page. No account wall at the door. You can sit a hard BBE-shaped mock, see where the score leaks, and decide later whether the full course is worth it.",
      },
      {
        type: "p",
        text: "If you already practiced inside the course, nothing sneaky changed in the bank overnight. What changed is the door. Parents kept asking for one clean link. Students kept making throwaway emails just to peek. That was silly. Go take it when you have a quiet hour, not when you are half-scrolling on the tram.",
      },
      {
        type: "aside",
        text: "It is supposed to feel tough. If you walk out annoyed and oddly informed, the page did its job.",
      },
    ],
  },
  {
    slug: "mock-builder-left-the-lab",
    title: "Mock Builder left the lab",
    date: "2026-09-11",
    author: "BBE School creators",
    summary:
      "Custom mocks stopped being an internal toy. You can assemble a sitting from the live banks instead of waiting on our next fixed paper.",
    body: [
      {
        type: "p",
        text: "For a while Mock Builder only existed on our machines. We used it to stress-test banks, then forgot students might want the same control. On 11 September we finally put it in the products menu for BBE, with a WiSo twin following on the track switcher. You pick subjects, pull tasks from the hard banks, and run a sitting that is yours rather than whatever paper we published last month.",
      },
      {
        type: "p",
        text: "A few people already tried to build a comfort mock by fishing for easy clusters. The builder will not stop you, but it also will not lie for you. The banks are still the same stubborn banks. If your custom paper feels gentle, that is a selection problem, not a product bug.",
      },
    ],
  },
  {
    slug: "what-shipped-since-may",
    title: "What shipped since May, in one messy timeline",
    date: "2026-09-08",
    author: "BBE School creators",
    summary:
      "A click-through diary of the bigger releases: first mocks, dashboard, tutor mode, WiSo, study tools, answer sheet, builder, demo exam.",
    body: [
      {
        type: "p",
        text: "Somebody in the group chat asked for a simple list of when things actually went live. Fair. Changelogs are ugly and our memories are worse. Below is the shipping diary we wish we had written while building. The dates are the real release windows we care about, not every tiny fix. Tap a row if you want the one-paragraph version of why that day mattered.",
      },
      {
        type: "timeline",
        caption:
          "Not every commit. Just the days that changed how students practice. Older entries sit lower; newer ones sit up top.",
        entries: [
          {
            id: "demo-exam",
            dateLabel: "22 Sep 2026",
            title: "Demo Exam goes public",
            note: "Hard diagnostic mock without an account wall. First impressions now have to survive strangers with one free hour.",
          },
          {
            id: "builder",
            dateLabel: "11 Sep 2026",
            title: "Mock Builder leaves internal-only",
            note: "Students can assemble sittings from live banks instead of waiting for our next fixed paper.",
          },
          {
            id: "wiso",
            dateLabel: "27 Aug 2026",
            title: "WiSo track opens beside BBE",
            note: "Same school, second entrance exam. German economics path, mirrored practice surfaces, track switcher in the header.",
          },
          {
            id: "games",
            dateLabel: "14 Aug 2026",
            title: "Flashcards and Matching hit the dashboard",
            note: "Study tools for the days you cannot sit a full mock but still need reps that are not passive rereading.",
          },
          {
            id: "answer-sheet",
            dateLabel: "2 Aug 2026",
            title: "Official answer-sheet explainer",
            note: "A dedicated page for the paper format people keep misunderstanding under time pressure.",
          },
          {
            id: "scoring",
            dateLabel: "18 Jul 2026",
            title: "Scoring page without the fog",
            note: "Partial credit, floors at zero, worked examples. Less myth, more mark-scheme behavior.",
          },
          {
            id: "tutor",
            dateLabel: "3 Jul 2026",
            title: "Tutor exam mode",
            note: "Guided subject sittings for people who want feedback loops tighter than a full mock review.",
          },
          {
            id: "subjects",
            dateLabel: "19 Jun 2026",
            title: "Full course subject rooms",
            note: "Math, English, Economics stop living in one vague blob and get their own practice doors.",
          },
          {
            id: "dashboard",
            dateLabel: "4 Jun 2026",
            title: "Dashboard that remembers leaks",
            note: "Progress and course access in one place so you are not hunting old links after every session.",
          },
          {
            id: "mocks",
            dateLabel: "16 May 2026",
            title: "First hard mocks go live",
            note: "The day we stopped calling it a prototype and let students sit papers meant to bruise on purpose.",
          },
          {
            id: "chooser",
            dateLabel: "2 May 2026",
            title: "BBE vs WiSo chooser on the homepage",
            note: "Before two tracks existed in product form, we at least stopped pretending every visitor wanted the same exam.",
          },
        ],
      },
      {
        type: "p",
        text: "If you joined last week, this is why the product feels denser than a single landing page. If you have been here since spring, thanks for surviving the awkward middle versions. The next posts in this feed will keep marking the bigger ship days instead of pretending every Tuesday needs a parade.",
      },
    ],
  },
  {
    slug: "wiso-track-is-live",
    title: "WiSo track is live next to BBE",
    date: "2026-08-27",
    author: "BBE School creators",
    summary:
      "Same school, second exam. German economics path, its own demos and mocks, and a header switch that actually means something now.",
    body: [
      {
        type: "p",
        text: "We spent spring pretending one product could politely cover two entrance exams. It could not. On 27 August the WiSo track stopped being a FAQ answer and became a real side of the site: its own hub, demos, course doors, and later its own mock builder. Switch BBE and WiSo in the header and the practice surfaces follow you instead of dumping you back on a generic homepage.",
      },
      {
        type: "p",
        text: "If you are sitting WiSo, do not study from BBE English banks and hope for the best. If you are sitting BBE, the WiSo German economics rooms are not a shortcut. The overlap in mindset is real. The papers are not the same animal.",
      },
    ],
  },
  {
    slug: "flashcards-and-matching",
    title: "Flashcards and Matching landed in Study tools",
    date: "2026-08-14",
    author: "BBE School creators",
    summary:
      "For the evenings when a full mock is too much but rereading notes is too little.",
    body: [
      {
        type: "p",
        text: "Not every night is a mock night. On 14 August we put Flashcards and Matching under Study tools in the dashboard so short sessions still do something sharper than highlighting a PDF. The decks are exam-register on purpose. Cute trivia can wait until after you have a seat at WU.",
      },
      {
        type: "p",
        text: "Use them between heavier sittings, not instead of them. Vocabulary that only exists in a flashcard stack will still surprise you inside a tired English cluster. Same story for matching definitions you have never seen under a stem.",
      },
    ],
  },
  {
    slug: "answer-sheet-page",
    title: "We shipped a page just for the answer sheet",
    date: "2026-08-02",
    author: "BBE School creators",
    summary:
      "Too many people were losing points to format confusion, so the official answer-sheet explainer got its own home.",
    body: [
      {
        type: "p",
        text: "There is a special kind of anger that shows up when a student knows the economics and still botches the paper choreography. On 2 August we published a dedicated answer-sheet feature page because burying that stuff inside a long FAQ was cowardly. If the official format has quirks, we would rather stare at them in daylight.",
      },
      {
        type: "aside",
        text: "Content knowledge and sheet discipline are different muscles. Train both before the room does it for you.",
      },
    ],
  },
  {
    slug: "scoring-without-the-fog",
    title: "Scoring without the fog",
    date: "2026-07-18",
    author: "BBE School creators",
    summary:
      "Partial credit, floors at zero, worked examples. The scoring page stopped being a rumor and became a walkthrough.",
    body: [
      {
        type: "p",
        text: "Before mid-July, half our support chats were the same argument in different fonts: does an unmarked false statement punish you, can a task go negative, why did my almost-right cluster score like that. On 18 July the BBE scoring page got the worked examples it always needed, with the WiSo twin following the same logic on its own track.",
      },
      {
        type: "p",
        text: "Read it once when you are calm. Then take a mock and watch yourself violate every rule you just nodded at. That gap is the whole point of practice.",
      },
    ],
  },
  {
    slug: "tutor-exam-mode",
    title: "Tutor exam mode for tighter loops",
    date: "2026-07-03",
    author: "BBE School creators",
    summary:
      "A subject sitting when you want feedback faster than a full mock review and slower than a single drill.",
    body: [
      {
        type: "p",
        text: "Full mocks are honest, but they are also long. On 3 July we opened Tutor exam mode for people who needed a middle gear: subject-focused sittings with a tighter feedback loop. It will not replace a real paper. It will stop you from waiting three days to discover you still butcher domains.",
      },
      {
        type: "p",
        text: "If you only ever live in tutor mode, you will still be surprised by mixed sections. Alternate. Use tutor mode to repair a leak, then go back to a full sitting and see if the repair survived.",
      },
    ],
  },
  {
    slug: "full-course-subject-rooms",
    title: "Full course got real subject rooms",
    date: "2026-06-19",
    author: "BBE School creators",
    summary:
      "Math, English, and Economics stopped sharing one vague doorway. Each subject got a room with its own practice path.",
    body: [
      {
        type: "p",
        text: "Early full-course buyers were dropped into a blob and told good luck. On 19 June that stopped. Subject rooms made it obvious where math ends, where English begins, and where economics is hiding the accounting traps. Navigation got less heroic. Practice got more honest about which muscle you were training that night.",
      },
    ],
  },
  {
    slug: "dashboard-that-remembers",
    title: "A dashboard that remembers where you left the mess",
    date: "2026-06-04",
    author: "BBE School creators",
    summary:
      "Course access, study tools, and the trail of what you already attempted, in one place instead of a pile of bookmarks.",
    body: [
      {
        type: "p",
        text: "We used to send people six different links after purchase and then act surprised when they got lost. 4 June was the day the dashboard became the front door: what you own, what you can open, where the study tools live. It is still not a social network. It is a map for a tired student who does not want to reconstruct the product from memory at 23:40.",
      },
    ],
  },
  {
    slug: "first-hard-mocks-went-live",
    title: "First hard mocks went live",
    date: "2026-05-16",
    author: "BBE School creators",
    summary:
      "The day we stopped calling the papers a prototype and let them bruise people on purpose.",
    body: [
      {
        type: "p",
        text: "16 May is still circled on our side of the calendar. That was the first evening strangers sat mocks we could not patch while they were inside. Some scores looked brutal. A few explanations got angry replies that were, annoyingly, correct. We rewrote overnight and learned that shipping a hard paper is less romantic than designing one.",
      },
      {
        type: "p",
        text: "If your first mock felt unfair, maybe it was. Tell us which claim. If it felt fair and still painful, that is closer to the exam than another round of soft drills.",
      },
    ],
  },
  {
    slug: "bbe-vs-wiso-chooser",
    title: "The homepage finally asks BBE or WiSo",
    date: "2026-05-02",
    author: "BBE School creators",
    summary:
      "Before the WiSo track was fully built, we at least stopped funneling every visitor into the same exam story.",
    body: [
      {
        type: "p",
        text: "On 2 May the chooser went up. Two doors, one school. It looked simple and caused a week of copy arguments. Worth it. Students who need WiSo were done squinting at BBE English pages wondering if they were in the wrong building. Parents stopped writing essays in the contact form just to ask which path was theirs.",
      },
      {
        type: "aside",
        text: "If you are still unsure, read BBE vs WiSo before you buy a course. The refund you want later is usually a track mistake made on day one.",
      },
    ],
  },
];
