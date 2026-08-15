# BBE site theory writing memory

Use this file whenever you write or rewrite **theory** for the BBE School site (especially Math Full Course chapters 1–13, and the same voice for Economics theory when aligning formats).

Goal: one stable format so students are not scared or confused when they move from chapter to chapter. Same rhythm, same labels, same tone.

Reference implementation: `src/data/math-theory/ch13.md` (Binomial). Treat it as the style gold standard until a newer chapter is intentionally set as the new standard.

---

## Where theory lives

| Subject | Markdown files | Registry |
| --- | --- | --- |
| Math | `src/data/math-theory/chN.md` | `src/data/math-course-theory.ts` |
| Economics | `src/data/economics-theory/chN.md` | `src/data/economics-course-theory.ts` |

Rendered by `src/components/TheoryReader.tsx` (KaTeX for math, white page, wide readable column).

After adding a new math chapter file, register it in `MATH_COURSE_THEORY` with `num`, `title`, `markdown`, and optional PDF fields.

---

## Scope rule (critical)

1. Write **only topics that exist on the live course / current guide for that chapter**.
2. Do **not** invent extra theory (e.g. Poisson, calculator manuals, skewness) just because it is “related”.
3. If expanding for beginners, expand **inside** existing section IDs. Do not invent new numbered sections that are not part of the chapter map.
4. Keep formulas, numbers, and exam meanings intact. Explain more; do not change math truth.

---

## Markdown skeleton (one format for every chapter)

```markdown
# Chapter N — Short title

[2–4 sentences overview: what this chapter is for on the BBE exam, that it starts from zero if needed, and what the student will meet. Plain language.]

## Learning objectives

- Bullet: concrete skill after studying
- …
- (about 5–8 bullets)

---

## N.1 Section title

### Optional subheading when a concept needs a name

[Teaching prose]

**Example 1.** …

**Example 2.** …   <!-- only if useful; 1–3 examples per section is enough -->

---

## N.2 Next section

…

---

## N.k Summary reference   <!-- or similar closing section -->

| Task | Method |
| --- | --- |
| … | … |

[key formulas]

**Working order…** short checklist for exam statements.

**Self-check.** a few plain questions the student should be able to answer.
```

### Structural habits

- Use `#` once (chapter title).
- Use `## N.x` for main sections (exact IDs matter for TOC chips).
- Use `###` sparingly for named concepts inside a section.
- Separate major blocks with `---`.
- Prefer markdown tables for wording ↔ notation maps and condition checklists.
- Display math with `$$ ... $$`. Inline math with `$...$`.
- Prefer numbered or bulleted lists for orderings / cases. Avoid fenced `` ```text `` `` blocks for ordinary lists (they look like code and break the reading flow).

---

## Voice and style (how a person wrote it)

Write like a calm tutor explaining to someone who may know nothing yet.

Do:

- Short and medium sentences. Split long chains into new sentences.
- Everyday verbs: “write down”, “check”, “watch”, “use”, “this means”.
- Explain symbols when they first appear (`n`, `p`, `X`, …).
- One idea per paragraph when teaching a hard step.
- Keep examples concrete (quiz, free throws, inspection) and reuse the same story across a section when it helps.

Avoid:

- Em-dashes and dash piles (`—`, long ` – ` chains). Prefer commas, periods, or “so / because / which”.
- AI filler: “It is important to note”, “In conclusion”, “delve”, “robust”, “leverage”, “comprehensive overview”.
- Over-formal textbook stacking with many semicolons.
- Fake enthusiasm or marketing tone.
- Inventing pedagogy the exam never uses.

### Definitions pattern

Prefer plain prose over “Term — long definition” with a dash:

```markdown
**Success** is the outcome being counted, with fixed probability $p$ on each trial.
```

Not:

```markdown
**Success** — The outcome being counted — for example …
```

### Examples pattern

```markdown
**Example 1.** Short setup in one or two sentences.

- Bullet facts if helpful
- …

One short wrap-up sentence that states the takeaway.
```

---

## Teaching depth

For beginners (default for Math theory v2+):

1. Say what the situation looks like in real life.
2. Name the symbols.
3. State the rule / formula.
4. Unpack the formula piece by piece when it is new.
5. Show 1–3 worked or check examples with the same numbers the chapter already uses when possible.
6. Point out the exam trap in one clear sentence (not a sermon).

Do not make the chapter twice as long with fluff. Extra length should buy clarity, not decoration.

---

## UI / reading constraints (TheoryReader)

When writing content, assume:

- White background, normal sans body text, readable size.
- Wide column with side padding (not a tiny newspaper column, not edge-to-edge).
- Tables, lists, and KaTeX display formulas are first-class.
- TOC chips are built from `##` / `###` headings; keep headings short and stable.

Do not depend on yellow paper, serif textbook look, or monospace “code” dumps for narrative content.

---

## Consistency checklist before shipping a chapter

- [ ] Same skeleton as other theory chapters (`#`, Learning objectives, `## N.x`, examples, closing summary).
- [ ] Only live-site topics for that chapter.
- [ ] Symbols defined on first use.
- [ ] Examples labeled `**Example 1.**` etc., not random callout systems.
- [ ] Few or no em-dashes; human wording.
- [ ] No raw code fences for ordinary lists.
- [ ] Formulas and numbers match the exam / practice material.
- [ ] Registered in the subject theory registry if new.
- [ ] Student could jump from Ch13 to this chapter and still feel “same product”.

---

## Quick do / don’t

| Do | Don’t |
| --- | --- |
| Start from zero when the chapter is foundational | Assume the student already knows the jargon |
| Keep section map aligned with the course | Add “bonus” sections that are not on the site |
| Reuse clear example stories | Change numbers mid-chapter without reason |
| Plain tutor English | Em-dash essay style or AI brochure tone |
| Tables for wording ↔ math | One giant paragraph of exam English |

---

## How to use this memory

In Cursor, mention this file when asking to write theory for another chapter, for example:

> Follow `scripts/bbe-theory-writing-memory.md` and write theory for Math Chapter 7 like ch13.

That is enough to keep one format across all 13 math chapters (and aligned economics theory when needed).
