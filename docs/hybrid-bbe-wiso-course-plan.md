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

### Phase A — Teaser

- [x] Product card + icon on `/products`
- [x] Written plan (`docs/hybrid-bbe-wiso-course-plan.md`)

### Phase B — Hybrid hub shell (live)

- [x] Sales page `/products/hybrid-course` (SKU `hybrid-full-course`, €649)
- [x] Hub `/hybrid` with Twin Readiness + Shared-First Planner
- [x] Modes: Bridge, Mirror, Exam Flip, Dual Mock Day, Decision Lab, Shared Math
- [x] Checkout grants Hybrid + Full BBE + Full WiSo enrollments

### Phase C — Data tagging

- [x] Bridge / Mirror seed packs with `conceptId`
- [ ] Broader tagging across full econ banks
- [ ] Populate `source_bbe_*` links at scale

### Phase D — Dual modes

- [x] Exam Flip mode (BBE ↔ WiSo framing)
- [x] Dual Mock Day launcher into existing mocks
- [x] Twin Readiness dashboard
- [ ] Deeper scoring engine parity inside full mock take pages

### Phase E — Hybrid planner

- [x] Auto daily Shared-First plan
- [x] Shared math progress sync into readiness
- [x] Checkout + entitlements for hybrid SKU

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

---

## 10. What already exists vs what is new

Hybrid is **not** “buy BBE + WiSo and get two dashboards”. The SKU must include modes and task shapes that neither track has alone.

### Already in Full BBE / Full WiSo (reuse)

- Subject practice (math / econ / EN or DE)
- Timed drills, full mocks, mock builder
- Flashcards, matching, tutor exam
- Partial-credit awareness, answer-sheet sims, theory

### New product layer (Hybrid-only)

| New mode / surface | Why it does not exist yet |
|--------------------|---------------------------|
| **Twin Readiness Board** | One dashboard with two gauges: readiness BBE % and readiness WiSo % from the same progress graph |
| **Shared-First Planner** | Auto daily queue: shared math/econ once, then EN + DE overlays — no double homework |
| **Exam Flip** | Mid-session or mid-mock toggle BBE ↔ WiSo (format, language of stems, scoring rules) without leaving the run |
| **Bridge Cases** | Same concept, two stems: EN (BBE) + DE (*Wirtschaft verstehen*) back-to-back |
| **Mirror Drill** | After a shared concept check, immediately do the “other language” wording of the same idea |
| **Split Language Lane** | Parallel EN / DE daily lanes with separate mastery, not mixed into one subject card |
| **Dual Mock Day** | Half BBE-format + half WiSo-format in one sitting (or A/B day schedule) |
| **Decision Lab** | Short module: “which exam am I stronger for?” using comparative diagnostics |
| **Trap Diff Mode** | Highlight traps that are BBE-typical vs WiSo-typical (English nuance vs German reading length / DE econ phrasing) |
| **Transfer Review** | Mistake review grouped by concept ID across both tracks (“you miss elasticity in EN *and* DE”) |

---

## 11. New modes in detail

### 11.1 Twin Readiness Board (home of Hybrid)

- Two rings / bars: **BBE ready** · **WiSo ready**
- Under each: weakest pillar (Math / Econ / Language)
- Shared math mastery feeds **both** rings once
- Language mastery feeds only its ring
- CTA of the day comes from the planner, not from “pick a subject”

### 11.2 Shared-First Planner

Daily pack example (~60–90 min):

1. **Shared block** (35–45 min) — math or econ concepts tagged `shared`
2. **Language A** (15–20 min) — EN *or* DE (rotates or follows weakness)
3. **Language B** (10–15 min) — the other language, lighter
4. Optional **Exam Flip sprint** (10 min) — same 4–6 items scored twice under both rule sets (simulates “how would this feel on the other paper?”)

Progress rules:

- Completing a `shared` item increments shared mastery once
- Completing a bridge pair increments concept + both language overlays
- Never ask the student to redo the same math chapter separately for BBE and WiSo

### 11.3 Exam Flip

Toggle available in timed / tutor / mock:

- Changes stem language when a bilingual pair exists
- Changes question count / mix / clock defaults to that exam’s format
- Changes scoring (BBE wi2-style vs WiSo Teilpunktesystem tables as already used per track)
- Keeps the same attempt ID so review can show “score if BBE” vs “score if WiSo” on dual-scorable items

### 11.4 Bridge Cases (new task shape)

```ts
type BridgeCase = {
  conceptId: string
  shared: { stem: string; statements: Statement[] } // language-neutral math, or concept gloss
  bbe: { stem: string; statements: Statement[]; lang: "en" }
  wiso: { stem: string; statements: Statement[]; lang: "de" }
  mode: "sequential" | "compare" | "blind-flip"
}
```

Modes for a bridge case:

1. **sequential** — student does EN then DE (or reverse); explanation ties both to one concept
2. **compare** — after answering one side, show the other stem and ask “same truth value?”
3. **blind-flip** — system flips language mid-case without warning (stress / wording transfer)

### 11.5 Mirror Drill

Short mode after any shared econ concept:

- 6–10 micro-statements alternating EN / DE
- Goal: prove the concept is language-proof, not memorized in one wording
- Scoring: concept mastery + bilingual transfer score

### 11.6 Dual Mock Day

Not a third fake exam format. Two real formats, one calendar day:

- Morning: BBE-length mock (or shortened diagnostic)
- Evening: WiSo-length mock
- Or interleaved “blocks”: Math shared → Econ BBE → Econ WiSo → Language EN → Language DE

Review UI merges mistakes by concept, then splits by track for readiness.

### 11.7 Decision Lab (unique conversion + retention tool)

For students who bought Hybrid because they are undecided:

- Week 2 and Week 6 comparative diagnostics
- Output: “your current edge is BBE / WiSo / too close to call”
- Does **not** lock them in; updates Twin Readiness and planner weights
- Marketing angle: Hybrid is the product for people who refuse to burn a year guessing the wrong track

---

## 12. How assignments / tasks are structured

### 12.1 Item tags (CMS / bank)

Every practice item:

| Field | Values | Role |
|-------|--------|------|
| `conceptIds` | e.g. `elasticity`, `binomial` | Cross-track mastery |
| `tracks` | `shared` \| `bbe` \| `wiso` | Planner routing |
| `languages` | `en` \| `de` \| both | Overlay filter |
| `pairId` | optional bridge link | Bridge / Mirror |
| `examFormats` | `bbe-mock` \| `wiso-mock` \| `drill` | Mode eligibility |
| `trapFamily` | `en-nuance` \| `de-length` \| `partial-credit` \| `math-speed` | Trap Diff |

### 12.2 Student-facing task types

1. **Shared drill** — classic T/F or MC; counts once for both exams  
2. **Overlay drill** — EN-only or DE-only language / econ wording  
3. **Bridge case** — paired EN+DE on one concept  
4. **Mirror set** — micro alternating language  
5. **Format sprint** — timed block locked to BBE or WiSo rules  
6. **Full mock** — existing BBE / WiSo simulators, launched from Hybrid hub  
7. **Flip review** — after a mock, re-score selected items under the other system where valid  

### 12.3 Weekly assignment shape (what the student “has to do”)

Not “finish BBE chapter 4 and WiSo chapter 4”. Instead:

```
Week N assignment
├── Shared Math pack (1)     → mastery shared
├── Shared Econ pack (1)     → mastery shared
├── Bridge Econ set (1)      → concept + EN + DE
├── English lane (daily lite)
├── German lane (daily lite)
└── Weekend: Exam Flip mock  → BBE mock OR WiSo mock (alternating)
```

Completion = shared packs done + both language minimums + one format session.

### 12.4 What “done” means

- Concept green when shared accuracy ≥ threshold **and** (if econ) at least one bridge/mirror pass  
- BBE ready when shared + EN overlay + ≥ N BBE-format sessions pass bar  
- WiSo ready when shared + DE overlay + ≥ N WiSo-format sessions pass bar  

---

## 13. Hybrid hub IA (product surfaces)

```
/hybrid  (or /products/hybrid-course)
├── Twin Readiness Board
├── Today's plan (Shared-First Planner)
├── Practice
│   ├── Shared Math
│   ├── Shared Econ
│   ├── Bridge / Mirror
│   ├── English lane
│   └── German lane
├── Modes
│   ├── Exam Flip timed
│   ├── Dual Mock Day
│   ├── Decision Lab
│   └── Trap Diff review
├── Library (deep links into existing BBE + WiSo banks / mocks / tools)
└── Settings: primary target exam (weights planner)
```

Existing BBE/WiSo tools stay; Hybrid is the **orchestrator + new modes**, not a third siloed bank.

---

## 14. Why this is a new product (pitch)

- **One homework stream** for two exams — competitors sell two courses  
- **Bridge / Mirror** trains transfer, not memorization in one language  
- **Exam Flip + Dual Mock Day** make format switching a skill, not a panic  
- **Decision Lab** turns indecision into a paid feature instead of a lost sale  
- **Twin Readiness** answers the only question dual applicants care about: “am I ready for *both*, and which is safer?”

---

## 15. Build priority for the new layer

1. Twin Readiness + Shared-First Planner (empty states OK)  
2. Item tagging + Bridge Cases v1 (econ concepts with EN/DE pairs)  
3. Exam Flip on timed + one mock launcher  
4. Mirror Drill  
5. Decision Lab diagnostics  
6. Dual Mock Day scheduler + Transfer Review  
7. Checkout / entitlements / upgrade from single track
