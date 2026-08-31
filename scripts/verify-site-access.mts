/**
 * Lightweight verification for site lockdown helpers.
 * Run: npx tsx scripts/verify-site-access.mts
 */
import {
  DEMO_ONLY_HREF,
  hasFullSiteAccess,
  isFullSiteProtectedPath,
} from "../src/lib/site-access.ts";

let failed = 0;

function assert(cond: boolean, msg: string) {
  if (!cond) {
    console.error("FAIL:", msg);
    failed += 1;
  }
}

for (const [email, expected] of [
  ["georgtyrin@gmail.com", true],
  ["GeorgTyrin@gmail.com", true],
  ["info@spray-go.com", true],
  ["INFO@SPRAY-GO.COM", true],
  ["student@example.com", false],
  ["", false],
  [null, false],
  [undefined, false],
] as const) {
  assert(hasFullSiteAccess(email) === expected, `hasFullSiteAccess(${String(email)}) === ${expected}`);
}

for (const [path, expected] of [
  ["/demo-practice", false],
  ["/demo-practice/math", false],
  ["/products/demo-practice", false],
  ["/products/full-course", false],
  ["/products/lite-bbe-course", false],
  ["/flashcards", true],
  ["/flashcards/math", true],
  ["/matching/economics", true],
  ["/tutor-exam", true],
  ["/mock-exams/1/take", true],
  ["/practice", true],
  ["/dashboard", true],
  ["/products/full-course-math", true],
  ["/products/lite-bbe-course-english", true],
  ["/products/custom-mock-builder", true],
  ["/admin", true],
  ["/login", false],
] as const) {
  assert(
    isFullSiteProtectedPath(path) === expected,
    `isFullSiteProtectedPath(${path}) === ${expected}`,
  );
}

assert(DEMO_ONLY_HREF === "/demo-practice", "demo href");

if (failed) {
  console.error(`verify-site-access: ${failed} failure(s)`);
  process.exit(1);
}
console.log("verify-site-access: ALL_PASS");
