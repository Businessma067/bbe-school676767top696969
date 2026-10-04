# Hybrid BBE + WiSo Course — Plan

Goal: one product, one study path, and one practice system that prepares students for **both** WU entrance exams at once — BBE and WiSo — without doubling homework.

Status: **Coming soon** (product card live on `/products`; content/modes not sold yet).

---

## 1. Why hybrid

Many applicants keep both tracks open (language, places, timing). Overlap is real:

| Pillar | BBE | WiSo | Hybrid approach |
|--------|-----|------|-----------------|
| Mathematics | Yes | Yes | **Shared core** + track-specific timing packs |
| Economics / business | Yes (EN) | Yes (DE, *Wirtschaft verstehen*) | **Shared concepts** + language layer |
| Language | English | German reading | **Parallel language tracks** (not shared drills) |
| Exam format / scoring | BBE rules | WiSo partial-credit rules | **Dual exam modes** on the same task bank where possible |

Students should not buy two full courses and do two unrelated weekly plans.

---

## 2. Product promise (student-facing)

**One plan. One task queue. Two exam modes.**

- Single weekly roadmap that covers shared math/econ once.
- Language work split: English for BBE, German reading for WiSo.
- Practice items tagged `shared` | `bbe-only` | `wiso-only`.
- Mock / tutor modes that can switch scoring + UI between BBE and WiSo without restarting the course.

---

## 3. Content architecture

### 3.1 Shared core (do once)

1. **Math core** — algebra, functions, sequences, combinatorics, probability, geometry depth shared by both exams.
2. **Economics concept core** — markets, firms, national accounts, money, policy basics mapped to both BBE econ and *Wirtschaft verstehen* chapters.
3. **Exam skills** — timing, answer-sheet habits, partial-credit awareness, stress modules (mode-aware).

### 3.2 Track overlays (do in parallel, lighter load)

1. **BBE English overlay** — grammar, vocab, reading packs already in Full BBE.
2. **WiSo German overlay** — reading comprehension packs already in Full WiSo.
3. **Econ language overlay** — same idea in EN (BBE wording) vs DE (*Wirtschaft verstehen* phrasing); concept ID shared in the CMS.

### 3.3 Task model (data)

Each practice item should carry:

```ts
{
  id: string
  conceptIds: string[]
  languages: ("en" | "de")[]
  tracks: ("bbe" | "wiso" | "shared")[]
  modes: ("drill" | "timed" | "mock" | "tutor")[]
}
```

Hybrid UI filters by active track mode but defaults the study plan to **shared-first**, then overlays.

---

## 4. Study modes (single product UX)

| Mode | What it does | Hybrid twist |
|------|----------------|--------------|
| **Learn** | Theory + short checks | Shared theory; language examples switchable EN/DE where both exist |
| **Drill** | Untimed practice | Shared bank by default; overlay filter for EN/DE-only |
| **Timed** | Subject timing trainers | Clock + item mix matches selected exam mode |
| **Mock** | Full exam simulators | Toggle **BBE mock** vs **WiSo mock** (format, count, scoring) |
| **Tutor exam** | Guided exam run | Same toggle; explanations reuse shared concept IDs |
| **Flashcards / matching** | Recall | Shared concepts + language-specific decks |

Primary rule: the student never maintains two separate progress trees. Progress is stored once; track toggles only change **mode + language overlay**.

---

## 5. Suggested curriculum skeleton (8–12 weeks)

Adjust length by start date; keep the “shared first” order.

1. **Weeks 1–2** — Diagnostic (short BBE + short WiSo), math foundations, econ map of shared concepts.
2. **Weeks 3–5** — Shared math heavy + shared econ concepts; light EN + DE reading daily (20–30 min each).
3. **Weeks 6–7** — Language push (EN or DE depending on weakness) while keeping shared mixed drills.
4. **Weeks 8–9** — Dual timed modes: alternate BBE-format days and WiSo-format days.
5. **Weeks 10–11** — Full mocks: at least 2 BBE-style + 2 WiSo-style; review by concept ID (not by track silo).
6. **Week 12** — Peak week: one mock of the primary target exam + light maintenance for the secondary.

---

## 6. Access & packaging (later implementation)

Proposed SKU (not live yet):

- **Hybrid Full Course** — includes Full BBE + Full WiSo content entitlements under one purchase, plus hybrid planner and dual modes.
- Upgrade path: owners of one track can top-up to hybrid.
- Price TBD (above single-track €449; below naive 2×).

Entitlements sketch:

- `ownsFullCourse` OR `ownsWisoFullCourse` OR `ownsHybridCourse`
- Hybrid unlocks both route trees **and** a dedicated hybrid hub (e.g. `/products/hybrid-course` or `/hybrid`).

---

## 7. Build phases

### Phase A — Teaser (this PR)

- [x] Product card + Coming Soon icon on `/products`
- [x] Written plan (`docs/hybrid-bbe-wiso-course-plan.md`)

### Phase B — Hybrid hub shell

- [ ] Coming-soon landing page with waitlist / notify CTA
- [ ] Explain shared vs overlay in plain language
- [ ] Link from BBE and WiSo product pages

### Phase C — Data tagging

- [ ] Tag math/econ items `shared` where overlap is real
- [ ] Keep EN/DE language items track-specific
- [ ] Concept ID bridge between BBE econ and *Wirtschaft verstehen*

### Phase D — Dual modes

- [ ] Exam mode toggle (BBE ↔ WiSo) in mock/tutor/timed
- [ ] Scoring engine respects selected mode
- [ ] Single progress dashboard with “readiness BBE / readiness WiSo”

### Phase E — Hybrid planner

- [ ] Auto weekly plan: shared queue + language overlays
- [ ] Avoid double-counting shared topics in XP/progress
- [ ] Checkout + entitlements for hybrid SKU

---

## 8. Success metrics

- Students on hybrid finish shared topics once (no duplicate completion events).
- Mock scores available separately for BBE mode and WiSo mode.
- Support load: fewer “which course do I buy if I might switch?” tickets.
- Conversion: applicants undecided on track choose hybrid instead of delaying purchase.

---

## 9. Out of scope for v1

- Separate third curriculum rewrite from scratch (reuse existing banks).
- Live tutoring included by default.
- Guaranteeing official WU syllabus identity — keep unofficial-prep disclaimers.
