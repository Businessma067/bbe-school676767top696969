# Chapter 6 — agent rebuild brief (authoritative)

Follow `scripts/FC-STYLE-LOCK.md` if present. Slot plan is **source of truth**: `scripts/ch6-slot-plan.json`.

## Counts (NOT equal)

| Sub | Total | Text (~40%) | Table (~60%) | Formula weight | Scope |
|-----|-------|-------------|--------------|----------------|-------|
| 6.5 | 160 | 64 | 96 | **heaviest** | ratio analysis, liquidity, returns, turnover |
| 6.2 | 150 | 60 | 90 | **heavy** | P&L, cash flow sections, depreciation |
| 6.1 | 130 | 52 | 78 | moderate | what a balance sheet is, classification, equity ratio |
| 6.3 | 125 | 50 | 75 | moderate | reading BS + income statement, margins, interpretation |
| 6.4 | 60 | 24 | 36 | **minimal** | financial vs management accounting, users, audit — **half-page only; do NOT dump whole-chapter material** |

TRUE counts 1–5 even inside each subtopic (already in slot plan). Difficulty already in slot plan. Halves are **interleaved** in the slot plan — do not reorder.

## Hard quality rules

1. Anonymous firms only. No Tina/Steve/AT&S/named exam brands.
2. Context ends exactly: `Evaluate the following economic assertions:`
3. Use EXACT `answer_key` and `difficulty_level` from slot plan for that `case_id`.
4. Spell out terms — **no** EBIT, EBITDA, ROCE, ROE, EPS, WC, P&L, BS, IS, CF abbreviations in student-facing text.
5. **Zero** parenthetical formula hints in statements (no “(cost of sales divided by…)”, “(current assets / current liabilities)”).
6. **No obvious read-offs**: ban statements that just compare two printed line items (“Buildings of €374 thousand exceed machinery of €129 thousand”, “Total liabilities of €X exceed total equity of €Y”). Require calculation, classification judgment, threshold tests, or conceptual reasoning.
7. Explanations: `TRUE — …` / `FALSE — …` clear and specific.
8. No duplicate statements within the subtopic bank (and avoid near-dups Jaccard ≥ 0.78 inside a case).
9. ~25% SCENE contexts among **text** cases; rest THEORY (`Analyze`/`Review` stems).

## Table half mix inside each subtopic’s table slots

- **~60%**: balance sheets (prefer comparative 2-year), cash flow, income statement — **BS slightly over-weighted** within this 60%.
- **~40%**: charts — share prices, market capitalisation, earnings per share, share turnover, asset pies, comparative bars via `[[CHART type="bar|line|pie" title="…"]]` … `[[/CHART]]` plus markdown `|` tables.

## Outputs

Text agent: rewrite `scripts/gen-ch6-part-{sub}-text.mjs` and run it → `scripts/ch6-part-{sub}-text.json`.

Table agent: rewrite `scripts/gen-ch6-table-bank.mjs` (+ shared helpers if needed) and run → `scripts/ch6-part-6.{1-5}-table.json`.

Use `scripts/ch6-fc-gen-shared.mjs` `buildCases` / `validateAndWrite` for text.
Use `scripts/ch6-table-gen-shared.mjs` for BS/CF/P&L helpers and charts.

Pool sizing for text: TRUE ≥ (textSlots × 3.2), FALSE ≥ (textSlots × 2.2), all unique.
