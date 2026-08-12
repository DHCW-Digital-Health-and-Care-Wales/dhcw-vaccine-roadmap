# Roadmap Presentation Standard

DHCW roadmaps should be presented as a chronological journey.

Preferred structure:

1. Now
2. Next
3. Later

Each phase should occupy a full-width horizontal section.

Avoid side-by-side columns representing time horizons.

Within each section:

- Use responsive card grids.
- Preserve accessibility.
- Preserve localisation.
- Preserve existing card content and metadata.

This pattern is the default roadmap experience unless a documented exception is
approved.

---

## Status

This is the **canonical, default** presentation pattern for roadmaps in this
repository. It is formalised in
[ADR 0001: Roadmap chronology presentation pattern](./adr/0001-roadmap-chronology-presentation-pattern.md)
(Status: Accepted). Where older documentation (for example
[`BUILD_BRIEF.md`](./BUILD_BRIEF.md)) describes side-by-side column layouts, that
guidance is **superseded** by this standard and the ADR.

## The pattern in detail

The roadmap is a single top-to-bottom journey. The three horizons stack
vertically down the page in chronological order:

```
NOW
────────────────────────────────
Card | Card | Card
Card | Card | Card
        ↓
NEXT
────────────────────────────────
Card | Card | Card
Card | Card | Card
        ↓
LATER
────────────────────────────────
Card | Card | Card
Card | Card | Card
```

- **Stacked, not columnar.** Now, Next and Later are full-width sections stacked
  vertically, never three parallel time-horizon columns.
- **Chronological order.** Sections always appear Now, then Next, then Later.
- **Prominent section headers.** Each horizon has a clear, visible text label so
  meaning is never carried by position or colour alone.
- **Responsive card grid inside each section.** Cards read left-to-right and
  wrap: a single column on mobile, wrapping on tablet, and multiple columns on
  desktop. There is no horizontal scrolling of content down to 320px.

## Rationale

- **Improved readability** — one reading path down the page instead of scanning
  across columns.
- **Improved accessibility** — a single logical reading order and heading
  hierarchy; horizons labelled in text.
- **Reduced cross-column scanning** — readers finish a horizon before moving on.
- **Better chronological storytelling** — the Now → Next → Later sequence is
  explicit.
- **Improved responsive behaviour** — cards reflow within a section rather than
  columns being squeezed on smaller screens.
- **Consistency with other DHCW roadmap products** — for example the Choose
  Pharmacy roadmap.

## What this standard does not change

Layout orientation is independent of content and behaviour. This standard does
**not** change roadmap data, cards, dates, categories, filtering, search,
navigation, localisation (English/Welsh) or accessibility features. Those are
preserved regardless of layout.

## Where this is implemented

Roadmap content lives in `src/data/roadmap.ts`. The stacked presentation is
produced by the layout components in `src/components/`, principally
`CategorySection` (stacks the horizons vertically) and `HorizonColumn` (renders
one horizon as a full-width section with a responsive card grid). The
`HorizonColumn` name is historical; it renders a stacked section, not a column.

## Exceptions

A side-by-side column layout may only be introduced when there is a documented
business requirement, agreed with the roadmap maintainers and recorded in a new
ADR that supersedes ADR 0001.
