# Chapter 6 bank generation — style lock

Follow `scripts/FC-STYLE-LOCK.md` exactly.

## Volume
5 subtopics × **150** cases = **750** total.

| Case IDs | Mode | Notes |
| --- | --- | --- |
| `CASE 6.x.01`–`CASE 6.x.75` | **TEXTUAL** (Part 1) | FC theory/scene style; book concepts; no tables/charts required |
| `CASE 6.x.76`–`CASE 6.x.150` | **TABLE/CHART** (Part 2) | Dense FS + Recharts; see below |

## Part 2 split (within 76–150, i.e. 75 cases)
- **~3/5 (~45)** balance sheet / income statement / cash flow tables (comparatives, multi-statement packs; lean toward more balance sheets)
- **~2/5 (~30)** stock/market charts & reporting (EPS, market capitalisation, share turnover, price charts, other unique graphs)

## Hard rules
- NO Tina, Steve, AT&S, named textbook brands as exam props, "in the chapter"
- Context ends: `Evaluate the following economic assertions:`
- Spell out terms: operating result, return on capital employed, return on equity, earnings before interest and taxes — **no EBIT/ROE/ROCE/EPS as abbreviations in student text** (say "earnings per share")
- **Zero formula/definition hints in parentheses** in statements
- No near-duplicate statements globally within a subtopic bank
- Explanations: `TRUE —` / `FALSE —` with clear reasoning
- Slot plan `scripts/ch6-slot-plan.json` is authoritative for `answer_key` and `difficulty_level`

## Subtopics
- 6.1 What a balance sheet is
- 6.2 Other components of the financial statement of a business
- 6.3 What can be learnt from reading a balance sheet and an income statement
- 6.4 Use of these accounts – types of accounting
- 6.5 Analysis of financial statements

## Output
- Text: `scripts/ch6-part-{sub}-text.json` (75 cases)
- Later table: `scripts/ch6-part-{sub}-table.json` (75 cases)
- Merged: `src/data/economics-cases-ch6-subtopics.json`
- SQL migration for Cloud insert
