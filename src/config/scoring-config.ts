export const SCORING_CONFIG = {
  economics: { taskCount: 10, totalPoints: 64, defaultMaxPerTask: 6.4 },
  math: { taskCount: 13, totalPoints: 62.4, defaultMaxPerTask: 4.8 },
  english: { taskCount: 11, totalPoints: 33.6, defaultMaxPerTask: 3.05 },
  examTotalPoints: 160,
} as const;

export type SubjectKey = "economics" | "math" | "english";

export const SUBJECT_META: Record<
  SubjectKey,
  { label: string; color: string; badgeClass: string }
> = {
  economics: {
    label: "Economics",
    color: "#E85D3A",
    badgeClass: "bg-[#E85D3A]/10 text-[#E85D3A] border-[#E85D3A]/30",
  },
  english: {
    label: "English",
    color: "#2DD4A8",
    badgeClass: "bg-[#2DD4A8]/10 text-[#0F9B7C] border-[#2DD4A8]/40",
  },
  math: {
    label: "Math",
    color: "#3B82F6",
    badgeClass: "bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/30",
  },
};
