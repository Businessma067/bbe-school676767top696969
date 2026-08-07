# Economics course theory rewrite guide

Write premium online-course markdown. Source: `/workspace/tmp/source/chN.md` ONLY.

## Structure (do NOT mirror textbook paragraph order)

```markdown
# Chapter N — Title

> **Chapter overview**
> 2-3 sentences: why this chapter matters for the BBE exam and for Tina & Steve.

> **Learning path**
> - Bullet: what student will understand after 2.1
> - Bullet: ...
> (one per main section 2.1–2.7)

---

## 2.1 Section title

> **In this section**
> One sentence preview.

[2-4 short paragraphs — original wording, course voice]

### [Concept subheading when helpful]

[content]

| Markdown | tables | for all data |

![Descriptive caption](image-url)

> **Example — Tina & Steve** (or AT&S)
> Short applied example.

> **Key ideas**
> - bullet
> - bullet

---
```

## Rules

1. Keep section IDs exactly: `## 2.1`, `### 2.6.1`, etc.
2. Target word count: source words × 1.20 (20% longer than source)
3. Include ALL images from source with descriptive alt text in caption
4. Convert ALL plain-text tables to proper markdown tables
5. Add diagrams from source as images; where no image exists, use a fenced ASCII diagram in a ` ```text ` block
6. Use blockquotes only for: Chapter overview, Learning path, In this section, Example, Formula, Key ideas
7. No external economics knowledge; only textbook concepts
8. Preserve all formulas, numbers, terminology exactly
9. Separate sections with `---`
10. Do not copy textbook sentences — rewrite from understanding

## Image URLs

Copy image URLs exactly from source file `![...](url)`.
