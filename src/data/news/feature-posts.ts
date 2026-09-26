import type { NewsPost } from "./types";

/**
 * Feature release posts for the public news feed.
 * Bodies stay English for v1 (same rule as other news posts).
 */
export const FEATURE_POSTS: NewsPost[] = [
  {
    slug: "demo-exam-is-public",
    title: "Demo Exam is available without an account",
    date: "2026-09-22",
    author: "BBE School creators",
    summary:
      "You can now take the hard practice exam without signing up. Here is why we changed that, and how to use the result.",
    body: [
      {
        type: "p",
        text: "For a while, Demo Exam required an account before you could start. That made sense for us internally, but it was not helpful for students or parents who only wanted one clear link to try the product. Some people even created temporary emails just to look inside.",
      },
      {
        type: "p",
        text: "On 22 September we removed that barrier. You can start the hard BBE-style practice exam without an account, see where points are lost, and decide later whether the full course is right for you. The questions did not become easier. Only access became simpler.",
      },
      {
        type: "media",
        kind: "image",
        src: "/demo-practice-product-v2.png",
        alt: "BBE School practice product visual used around the Demo Exam launch",
        caption:
          "The public Demo Exam page uses the same practice style as the rest of the platform.",
      },
      {
        type: "figure",
        id: "demo-signup-wall",
        caption:
          "Example funnel from before the change. Many people opened the page, but far fewer finished once a signup form appeared.",
      },
      {
        type: "p",
        text: "If you already study inside a course, the answer keys did not suddenly change. What changed is who can try the exam cold. Take it when you have a quiet hour. It is meant to feel demanding. Use the review to find mistakes you can still fix, not only to look at the final score.",
      },
      {
        type: "steps",
        title: "A simple way to take the public demo",
        caption: "A short sequence that makes the result more useful.",
        steps: [
          {
            id: "quiet",
            title: "Set aside a full hour",
            detail:
              "Find a quiet place, put your phone aside, and treat it like a real practice exam rather than a quick quiz.",
          },
          {
            id: "mark",
            title: "Mark carefully",
            detail:
              "Leaving a statement blank is allowed. Marking a false statement can lower your score. If you are unsure, do not mark it just to fill the sheet.",
          },
          {
            id: "leak",
            title: "Review the avoidable mistakes first",
            detail:
              "After you submit, look first at domain errors, over-marking, and rushed false statements. The total score matters less than those patterns.",
          },
        ],
      },
      {
        type: "figure",
        id: "mock-score-leak",
        caption:
          "Where avoidable points are often lost in hard demo reviews. Mathematics usually leads, then economics, then English.",
      },
      {
        type: "aside",
        text: "If a question feels unfair rather than simply hard, tell us which one. Clear feedback helps us improve the bank.",
      },
      {
        type: "cta",
        label: "Open Demo Exam",
        href: "/demo-mock",
        note: "Hard practice exam. No account needed to start.",
      },
    ],
  },
  {
    slug: "mock-builder-left-the-lab",
    title: "Mock Builder is available to students",
    date: "2026-09-11",
    author: "BBE School creators",
    summary:
      "You can now build your own practice exam from the live task banks, instead of waiting only for our fixed papers.",
    body: [
      {
        type: "p",
        text: "For several months we used Mock Builder only inside the team. It helped us test task banks, compare section sizes, and notice when a rewrite made a paper too easy. Then students asked why they could not use the same tool. On 11 September we made it available.",
      },
      {
        type: "media",
        kind: "video",
        src: "/how-it-works/mock-builder.mp4",
        poster: "/how-it-works/mock-builder-poster.jpg",
        alt: "Screen recording of Mock Builder assembling a custom exam",
        caption:
          "A short walkthrough from launch week: choose subjects, pull tasks from the banks, and run your own sitting.",
      },
      {
        type: "p",
        text: "On the BBE side it appears under Products. On WiSo, use the track switch and open the WiSo version. The builder uses the same demanding banks we use elsewhere. You can choose a lighter mix if you want, but that will not make the exam itself easier on the day.",
      },
      {
        type: "tool",
        id: "builder-mix",
        caption:
          "A simple sketch of section balance. It is not the live builder, but it shows how the mix changes the feel of a practice paper.",
      },
      {
        type: "steps",
        title: "A practical way to use Mock Builder",
        caption: "A short workflow that keeps custom papers useful.",
        steps: [
          {
            id: "leak-first",
            title: "Start from your last weak area",
            detail:
              "If mathematics domains caused most of your lost points last time, give mathematics more weight on purpose.",
          },
          {
            id: "one-mix",
            title: "Build one serious mix",
            detail:
              "One well-chosen hard paper usually teaches more than several easy ones.",
          },
          {
            id: "review",
            title: "Review it like a normal mock",
            detail:
              "After you finish, look for avoidable mistakes first. A custom paper still needs a careful review.",
          },
        ],
      },
      {
        type: "cta",
        label: "Open Mock Builder",
        href: "/products/custom-mock-builder",
        note: "Build a practice exam from the live task banks.",
      },
    ],
  },
  {
    slug: "what-shipped-since-may",
    title: "What we released from May to September",
    date: "2026-09-08",
    author: "BBE School creators",
    summary:
      "A clear timeline of the main releases, with short notes for each date and links to longer posts in this feed.",
    body: [
      {
        type: "p",
        text: "We were asked for a simple list of when major features went live. Below is that list from May to September. It does not include every small fix. It covers the releases that changed how students practice. Open a row for a short note, and use the rest of the news feed for longer explanations.",
      },
      {
        type: "media",
        kind: "image",
        src: "/wu-vienna/campus-plaza.jpg",
        alt: "WU Vienna campus plaza",
        caption: "These releases were built for students preparing for WU Vienna.",
      },
      {
        type: "timeline",
        caption:
          "Newer releases are at the top. Older ones are lower. Many of these dates also have a longer post in the feed.",
        entries: [
          {
            id: "demo-exam",
            dateLabel: "22 Sep 2026",
            title: "Demo Exam becomes public",
            note: "Hard practice exam without an account requirement.",
          },
          {
            id: "builder",
            dateLabel: "11 Sep 2026",
            title: "Mock Builder opens to students",
            note: "Custom practice exams from the live task banks.",
          },
          {
            id: "wiso",
            dateLabel: "27 Aug 2026",
            title: "WiSo track opens next to BBE",
            note: "A second entrance-exam path with its own practice surfaces.",
          },
          {
            id: "games",
            dateLabel: "14 Aug 2026",
            title: "Flashcards and Matching in Study tools",
            note: "Shorter practice options for days without a full mock.",
          },
          {
            id: "answer-sheet",
            dateLabel: "2 Aug 2026",
            title: "Answer sheet guide",
            note: "A dedicated page for the official answer-sheet format.",
          },
          {
            id: "scoring",
            dateLabel: "18 Jul 2026",
            title: "Clearer scoring page",
            note: "Partial credit, a floor at zero, and worked examples.",
          },
          {
            id: "tutor",
            dateLabel: "3 Jul 2026",
            title: "Tutor exam mode",
            note: "Subject-focused practice between drills and full papers.",
          },
          {
            id: "subjects",
            dateLabel: "19 Jun 2026",
            title: "Full course subject rooms",
            note: "Separate practice areas for mathematics, English, and economics.",
          },
          {
            id: "dashboard",
            dateLabel: "4 Jun 2026",
            title: "Dashboard as the main entrance",
            note: "Course access and study tools in one place.",
          },
          {
            id: "mocks",
            dateLabel: "16 May 2026",
            title: "First hard mocks go live",
            note: "Practice papers intended to feel close to the real exam.",
          },
          {
            id: "chooser",
            dateLabel: "2 May 2026",
            title: "BBE or WiSo on the homepage",
            note: "A clearer choice between the two entrance exams.",
          },
        ],
      },
      {
        type: "p",
        text: "If you joined recently, this timeline explains why the platform already has many parts. If you have been here since spring, thank you for growing with these releases. The rest of the feed goes into each one in more detail.",
      },
    ],
  },
  {
    slug: "wiso-track-is-live",
    title: "The WiSo track is live next to BBE",
    date: "2026-08-27",
    author: "BBE School creators",
    summary:
      "BBE School now has a clear second path for the WiSo entrance exam, with its own practice pages and course doors.",
    body: [
      {
        type: "p",
        text: "For a long time the site mainly told a BBE story, even though many visitors needed WiSo. On 27 August we opened a real WiSo track: its own hub, demos, course pages, and later its own mock builder. Use the track switch in the header to move between BBE and WiSo. The practice pages then follow the path you chose.",
      },
      {
        type: "media",
        kind: "image",
        src: "/wu-vienna/library-learning-center.jpg",
        alt: "WU Vienna library learning center",
        caption:
          "Both tracks prepare students for WU Vienna, but the exams and languages are different.",
      },
      {
        type: "tool",
        id: "track-compare",
        caption:
          "A short comparison of the two paths. If you are still unsure, read the full BBE vs WiSo page before you buy a course.",
      },
      {
        type: "p",
        text: "If you are preparing for WiSo, do not rely on BBE English practice as a substitute. If you are preparing for BBE, WiSo German economics rooms are not a shortcut. The study mindset can overlap, but the exams themselves are not the same.",
      },
      {
        type: "media",
        kind: "image",
        src: "/full-wiso-course-product-v3.png",
        alt: "WiSo full course product artwork",
        caption: "WiSo course artwork from the track launch.",
      },
      {
        type: "cta",
        label: "Open the WiSo hub",
        href: "/wiso",
        note: "WiSo demos, course pages, and exam information.",
      },
    ],
  },
  {
    slug: "flashcards-and-matching",
    title: "Flashcards and Matching are in Study tools",
    date: "2026-08-14",
    author: "BBE School creators",
    summary:
      "Short practice tools for evenings when a full mock is too much, but rereading notes is not enough.",
    body: [
      {
        type: "p",
        text: "Not every study day has room for a full mock exam. On 14 August we added Flashcards and Matching under Study tools for shorter sessions. The content stays close to exam language on purpose. These tools are meant to support practice, not replace longer sittings.",
      },
      {
        type: "media",
        kind: "video",
        src: "/how-it-works/flashcards.mp4",
        poster: "/how-it-works/flashcards-poster.jpg",
        alt: "Flashcards how-it-works video",
        caption: "A short look at flashcards from launch week.",
      },
      {
        type: "tool",
        id: "flashcard-peek",
        caption:
          "Three sample cards from the economics vocabulary set. The live decks are larger; this only shows how flipping works.",
      },
      {
        type: "media",
        kind: "video",
        src: "/how-it-works/matching.mp4",
        poster: "/how-it-works/matching-poster.jpg",
        alt: "Matching how-it-works video",
        caption: "Matching practice for terms and definitions under light time pressure.",
      },
      {
        type: "figure",
        id: "study-session-length",
        caption:
          "Example median session lengths. Flashcards and Matching exist because not every useful session needs a full mock.",
      },
      {
        type: "aside",
        text: "Use these tools between heavier practice sessions. Knowing a term on a card is not the same as recognising it inside an exam task.",
      },
      {
        type: "cta",
        label: "Open Study tools",
        href: "/dashboard?tab=games",
        note: "Flashcards and Matching are available in the dashboard under Study tools.",
      },
    ],
  },
  {
    slug: "answer-sheet-page",
    title: "A dedicated page for the answer sheet",
    date: "2026-08-02",
    author: "BBE School creators",
    summary:
      "Format mistakes were costing points even when students knew the content. The answer-sheet guide now has its own page.",
    body: [
      {
        type: "p",
        text: "We kept seeing the same problem: a student understands the topic, then loses points because the answer sheet format is unclear. Hiding that information in a long FAQ did not help enough. On 2 August we published a dedicated answer-sheet page so the official format is easier to find and easier to practise with.",
      },
      {
        type: "media",
        kind: "image",
        src: "/wu-vienna/teaching-center.jpg",
        alt: "WU Vienna teaching center",
        caption:
          "Content knowledge and sheet handling are different skills. Both matter on exam day.",
      },
      {
        type: "steps",
        title: "What we recommend before exam week",
        caption: "A short checklist for answer-sheet practice.",
        steps: [
          {
            id: "print",
            title: "Practise with the real layout at least once",
            detail:
              "Confidence on screen is not the same as confidence on the official sheet. Use the real format under time at least once.",
          },
          {
            id: "blank",
            title: "Practise leaving blanks when needed",
            detail:
              "Knowing that you may leave a statement unmarked is part of scoring literacy, not a lack of effort.",
          },
          {
            id: "review",
            title: "Separate content mistakes from format mistakes",
            detail:
              "In review, label the error type. If many losses come from format handling, more content alone will not fix them.",
          },
        ],
      },
      {
        type: "cta",
        label: "Open the answer-sheet page",
        href: "/features/answer-sheet",
        note: "A clear guide to the official answer-sheet format.",
      },
    ],
  },
  {
    slug: "scoring-without-the-fog",
    title: "A clearer explanation of exam scoring",
    date: "2026-07-18",
    author: "BBE School creators",
    summary:
      "Partial credit, a floor at zero, and worked examples. Try the mini tool below, then read the full scoring page.",
    body: [
      {
        type: "p",
        text: "Before mid-July, many questions about scoring were the same: does an unmarked false statement reduce your score, can a task go below zero, and why an almost-correct cluster scored the way it did. On 18 July we expanded the scoring page with clearer rules and worked examples.",
      },
      {
        type: "tool",
        id: "partial-credit",
        caption:
          "A small BBE-style example. Correct marks on true statements add points. Marks on false statements subtract points. Blanks do neither. The score cannot go below zero.",
      },
      {
        type: "p",
        text: "Read the full scoring page once while you are calm. Then take a practice exam and compare your marking habits with the rules. The page will not take the exam for you, but it should remove unnecessary confusion about how points are calculated.",
      },
      {
        type: "media",
        kind: "image",
        src: "/how-it-works/economics-poster.jpg",
        alt: "Economics practice poster",
        caption:
          "Economics clusters are a common place for over-marking. The tool above shows the idea in a calm form.",
      },
      {
        type: "cta",
        label: "Open the BBE scoring page",
        href: "/bbe-exam-scoring",
        note: "Worked examples, partial credit, and the floor at zero.",
      },
    ],
  },
  {
    slug: "tutor-exam-mode",
    title: "Tutor exam mode for focused practice",
    date: "2026-07-03",
    author: "BBE School creators",
    summary:
      "A middle option between short drills and full mock exams, with a tighter review loop by subject.",
    body: [
      {
        type: "p",
        text: "Full mock exams are useful, but they also take a long time. On 3 July we opened Tutor exam mode for subject-focused practice with faster feedback. It does not replace a full paper. It helps you repair one weak area without waiting days for the next long sitting.",
      },
      {
        type: "media",
        kind: "video",
        src: "/how-it-works/tutor-exam.mp4",
        poster: "/how-it-works/tutor-exam-poster.jpg",
        alt: "Tutor exam how-it-works video",
        caption: "A short look at tutor exam mode from July.",
      },
      {
        type: "steps",
        title: "A simple loop that helps",
        caption: "Use tutor mode to repair one problem, then check the result in a full mock.",
        steps: [
          {
            id: "pick-leak",
            title: "Choose one weak area",
            detail:
              "For example domains in mathematics, over-marking in economics, or precise vocabulary in English.",
          },
          {
            id: "tutor",
            title: "Practise that area in tutor mode",
            detail:
              "Stay with the subject long enough for the same mistake to become easier to notice and correct.",
          },
          {
            id: "full",
            title: "Return to a full mock within a few days",
            detail:
              "Check whether the improvement still holds when sections are mixed and you are under time pressure.",
          },
        ],
      },
      {
        type: "figure",
        id: "study-session-length",
        caption:
          "Tutor mode sits between short drills and full papers. That is its place in a weekly study plan.",
      },
      {
        type: "cta",
        label: "Open tutor exam",
        href: "/tutor-exam",
        note: "Subject-focused practice with a clearer review loop.",
      },
    ],
  },
  {
    slug: "full-course-subject-rooms",
    title: "Full course now has separate subject rooms",
    date: "2026-06-19",
    author: "BBE School creators",
    summary:
      "Mathematics, English, and Economics each have their own practice area, so it is clearer what you are training.",
    body: [
      {
        type: "p",
        text: "In the early full course, subjects were harder to separate. On 19 June we introduced clearer subject rooms. It became easier to see where mathematics ends, where English begins, and where economics practice lives. That made navigation simpler and made daily practice more intentional.",
      },
      {
        type: "media",
        kind: "image",
        src: "/full-course-product-v2.png",
        alt: "Full course product artwork",
        caption: "Full course artwork from the subject-room launch.",
      },
      {
        type: "steps",
        title: "How to use the subject rooms well",
        caption: "A short approach that keeps practice focused.",
        steps: [
          {
            id: "diagnose",
            title: "Start with a mixed mock",
            detail:
              "Let a mixed paper show which subject needs the most work this week.",
          },
          {
            id: "block",
            title: "Spend a real block in one room",
            detail:
              "One focused block usually helps more than several short visits across every subject.",
          },
          {
            id: "recheck",
            title: "Check again in a mixed sitting",
            detail:
              "Return to a mixed paper to see whether the improvement still holds under exam-like conditions.",
          },
        ],
      },
      {
        type: "media",
        kind: "image",
        src: "/how-it-works/math-poster.jpg",
        alt: "Mathematics practice poster",
        caption: "The mathematics room focuses on exam-style problem solving, including domains and careful case work.",
      },
      {
        type: "cta",
        label: "See full course subjects",
        href: "/products/full-course-subjects",
        note: "Separate practice areas for each subject.",
      },
    ],
  },
  {
    slug: "dashboard-that-remembers",
    title: "A dashboard that keeps your courses in one place",
    date: "2026-06-04",
    author: "BBE School creators",
    summary:
      "After purchase, you no longer need a list of separate links. The dashboard is the main entrance to your courses and study tools.",
    body: [
      {
        type: "p",
        text: "Earlier, students often received several links after buying a course and then had to find their way again later. On 4 June the dashboard became the main entrance: what you have access to, what you can open, and where study tools live.",
      },
      {
        type: "media",
        kind: "image",
        src: "/wu-vienna/library-interior.jpg",
        alt: "WU Vienna library interior",
        caption:
          "The dashboard is meant to be a clear map, so you can spend your attention on practice rather than navigation.",
      },
      {
        type: "steps",
        title: "What the dashboard is for",
        caption: "A short overview of the main jobs it should do.",
        steps: [
          {
            id: "own",
            title: "See what you have access to",
            detail:
              "Your courses and unlocked areas appear in one place, so you do not have to guess which old link still works.",
          },
          {
            id: "continue",
            title: "Continue practice more easily",
            detail:
              "Return to practice without rebuilding the path from an email or bookmark list.",
          },
          {
            id: "tools",
            title: "Open shorter tools when time is limited",
            detail:
              "Study tools are available here for shorter sessions on busy days.",
          },
        ],
      },
      {
        type: "cta",
        label: "Open dashboard",
        href: "/dashboard",
        note: "The main entrance after purchase.",
      },
    ],
  },
  {
    slug: "first-hard-mocks-went-live",
    title: "The first hard mock exams went live",
    date: "2026-05-16",
    author: "BBE School creators",
    summary:
      "The day practice papers became available to students outside the team, and we began the careful keep-or-cut process that we still use.",
    body: [
      {
        type: "p",
        text: "16 May was the first evening when students outside our team sat mock exams we could not change while they were taking them. Some scores were low. Some explanations needed corrections. We rewrote quickly and learned that publishing a hard paper is more demanding than planning one.",
      },
      {
        type: "media",
        kind: "image",
        src: "/how-it-works/economics-poster.jpg",
        alt: "Economics mock atmosphere poster",
        caption: "Launch-week practice artwork. The tasks behind it were intentionally demanding.",
      },
      {
        type: "figure",
        id: "mock-keep-cut",
        caption:
          "The keep-or-cut habit began that month. Writing drafts is easier than deciding which tasks should stay in front of students.",
      },
      {
        type: "p",
        text: "If your first mock felt unfair, tell us which task. If it felt fair but still difficult, that is closer to the real exam than another round of easy practice. We kept the useful difficulty and removed the parts that were hard only because the wording was unclear.",
      },
      {
        type: "figure",
        id: "mock-rewrite-effort",
        caption:
          "Where editing time still goes after a paper is live: checking false statements and improving explanations.",
      },
      {
        type: "cta",
        label: "Browse mock exams",
        href: "/mock-exams",
        note: "Practice papers that continue the same approach from May.",
      },
    ],
  },
  {
    slug: "bbe-vs-wiso-chooser",
    title: "The homepage now asks BBE or WiSo",
    date: "2026-05-02",
    author: "BBE School creators",
    summary:
      "Two clear doors on the homepage, so visitors choose the entrance exam they are actually preparing for.",
    body: [
      {
        type: "p",
        text: "On 2 May we added a clearer choice on the homepage: BBE or WiSo. It looks simple, but it solved a real problem. Visitors who needed WiSo were no longer pushed into BBE pages by default, and parents could see the difference without writing a long message first.",
      },
      {
        type: "media",
        kind: "image",
        src: "/wu-vienna/audimax.jpg",
        alt: "WU Vienna Audimax",
        caption: "Same university, different entrance exams. The homepage now states that clearly.",
      },
      {
        type: "tool",
        id: "track-compare",
        caption:
          "A short comparison of the two paths. If you need more detail, open the full BBE vs WiSo page before buying a course.",
      },
      {
        type: "aside",
        text: "Choosing the wrong track early is one of the most common expensive mistakes. Take a minute to choose carefully.",
      },
      {
        type: "cta",
        label: "Read BBE vs WiSo",
        href: "/bbe-vs-wiso",
        note: "A longer comparison when the homepage summary is not enough.",
      },
    ],
  },
];
