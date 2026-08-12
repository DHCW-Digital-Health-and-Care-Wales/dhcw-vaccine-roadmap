# 1. Roadmap chronology presentation pattern

- **Status:** Accepted
- **Date:** 2026-08-12
- **Deciders:** Vaccine Service roadmap maintainers
- **Applies to:** All roadmap presentation in this repository and, as a shared
  DHCW pattern, other DHCW roadmap products.

## Context

The roadmap communicates work across three time horizons: **Now**, **Next**
and **Later**. Two broad layouts are possible:

1. **Parallel columns** — the horizons sit side by side as three columns
   (a board or "swimlane" style), so a reader scans across columns.
2. **Stacked chronological sections** — the horizons stack vertically down the
   page, one full-width section per horizon, so a reader reads left-to-right
   within a section before moving down to the next horizon.

The original build brief (`docs/BUILD_BRIEF.md`) allowed either orientation and
deferred the choice to the Figma design. In practice the side-by-side column
layout created cross-column scanning, wrapped awkwardly on tablets, and pushed
content into horizontal scrolling on small screens. It also under-served the
chronological story the roadmap is trying to tell.

## Decision

Roadmaps in this repository **shall be displayed as vertically stacked
chronological sections** in the order **Now → Next → Later**.

- Each horizon is a full-width, clearly labelled section.
- Sections are stacked top-to-bottom in chronological order.
- Within each section, roadmap cards are laid out in a **responsive grid** that
  reads left-to-right and wraps as needed (single column on mobile, wrapping on
  tablet, multi-column on desktop).
- Side-by-side time-horizon columns are **not** the default and should not be
  introduced without a documented business requirement and a superseding ADR.

Accessibility, localisation (English/Welsh), filtering, search, navigation and
card interactions are preserved and are independent of this layout decision.

## Consequences

**Positive**

- **Readability** — readers follow a single top-to-bottom journey instead of
  scanning across three columns.
- **Accessibility** — a single logical reading order and heading hierarchy;
  horizons are labelled in text, never by column position or colour alone.
- **Mobile usability** — sections stack naturally; no horizontal scrolling of
  content down to 320px.
- **Responsive behaviour** — cards reflow within each section instead of
  columns being squeezed.
- **Chronological storytelling** — the Now → Next → Later sequence is explicit.
- **Consistency** — aligns with other DHCW roadmap products (for example the
  Choose Pharmacy roadmap).
- **Reduced cognitive load** — one focus per section at a time.

**Trade-offs**

- The three horizons can no longer be compared at a single glance across the top
  of the page. This is accepted: the horizon explainer and section headers keep
  the model legible without a columnar comparison.
- The `HorizonColumn` component keeps its historical name for continuity even
  though it now renders a full-width stacked section, not a column.

## Related

- Canonical standard: [`docs/ROADMAP_PRESENTATION_STANDARD.md`](../ROADMAP_PRESENTATION_STANDARD.md)
- Contributor guidance: [`CONTRIBUTING.md`](../../CONTRIBUTING.md)
- AI guidance: [`.github/copilot-instructions.md`](../../.github/copilot-instructions.md)
- Historical brief (superseded on layout orientation): [`docs/BUILD_BRIEF.md`](../BUILD_BRIEF.md)
