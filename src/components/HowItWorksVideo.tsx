import { DemoVideoFrame, type DemoClip } from "@/components/DemoVideoFrame";

export type HowItWorksSubject = "economics" | "math" | "english";

const DEMOS: Record<HowItWorksSubject, DemoClip> = {
  economics: {
    src: "/how-it-works/economics.mp4",
    poster: "/how-it-works/economics-poster.jpg",
    pathLabel: "bbe-school.app / demo-practice / economics",
    label: "Economics practice demo",
  },
  math: {
    src: "/how-it-works/math.mp4",
    poster: "/how-it-works/math-poster.jpg",
    pathLabel: "bbe-school.app / demo-practice / math",
    label: "Math practice demo",
  },
  english: {
    src: "/how-it-works/english.mp4",
    poster: "/how-it-works/english-poster.jpg",
    pathLabel: "bbe-school.app / demo-practice / english",
    label: "English practice demo",
  },
};

/** Homepage “How it works” promo clip for a subject. */
export function HowItWorksVideo({ subject }: { subject: HowItWorksSubject }) {
  return <DemoVideoFrame clip={DEMOS[subject]} />;
}

export type FeatureDemoKey = "mock-builder";

const FEATURE_DEMOS: Record<FeatureDemoKey, DemoClip> = {
  "mock-builder": {
    src: "/the-features/mock-builder.mp4",
    poster: "/the-features/mock-builder-poster.jpg",
    pathLabel: "bbe-school.app / products / custom-mock-builder",
    label: "Custom Mock Builder demo",
  },
};

/** Homepage “The Features” promo clips. */
export function FeatureDemoVideo({ feature }: { feature: FeatureDemoKey }) {
  return <DemoVideoFrame clip={FEATURE_DEMOS[feature]} />;
}
