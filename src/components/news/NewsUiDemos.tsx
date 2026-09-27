import {
  DemoAnswerSheet,
  DemoBankCraft,
  DemoBuilderMix,
  DemoDashContinue,
  DemoExamGate,
  DemoFlashEcon,
  DemoHardMock,
  DemoMatchLock,
  DemoMathDelta,
  DemoMathRoom,
  DemoScoreFloor,
  DemoShipDiary,
  DemoTrackDoor,
  DemoTutorAsk,
  DemoWelcomePeek,
  DemoWisoKarte,
  DemoWisoMatch,
} from "@/components/news/demos";

/**
 * Unique per-post product demos.
 * Each id maps to an original animated component under ./demos —
 * none wrap PracticeSimulator or MockBuilderSimulator.
 */
const DEMOS = {
  "demo-exam-gate": DemoExamGate,
  "builder-topic-mix": DemoBuilderMix,
  "ship-diary-pulse": DemoShipDiary,
  "wiso-karte-flip": DemoWisoKarte,
  "wiso-match-board": DemoWisoMatch,
  "flash-econ-sort": DemoFlashEcon,
  "match-lock-in": DemoMatchLock,
  "sheet-bubble-fill": DemoAnswerSheet,
  "score-floor-zero": DemoScoreFloor,
  "tutor-domain-ask": DemoTutorAsk,
  "math-room-calc": DemoMathRoom,
  "math-delta-cards": DemoMathDelta,
  "dash-continue": DemoDashContinue,
  "hard-mock-palette": DemoHardMock,
  "track-door-pick": DemoTrackDoor,
  "welcome-eng-peek": DemoWelcomePeek,
  "bank-keep-cut": DemoBankCraft,
} as const;

export type NewsDemoId = keyof typeof DEMOS;

export function NewsUiDemo({ id, caption }: { id: string; caption: string }) {
  const Demo = DEMOS[id as NewsDemoId];
  if (!Demo) return null;
  return <Demo caption={caption} />;
}
