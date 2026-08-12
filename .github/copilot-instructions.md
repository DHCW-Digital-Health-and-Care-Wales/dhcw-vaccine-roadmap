# GitHub Copilot instructions — DHCW Vaccine Service roadmap

Guidance for GitHub Copilot and other AI coding assistants working in this
repository. Follow these alongside the human-facing docs in
[`CONTRIBUTING.md`](../CONTRIBUTING.md) and [`docs/`](../docs/).

## Project summary

A public, accessible, bilingual (English/Welsh) roadmap website for the Vaccine
Service at Digital Health and Care Wales. Vite + React + TypeScript, styled with
Tailwind CSS, deployed as a static site to GitHub Pages. All roadmap content
lives in a single data file, `src/data/roadmap.ts`; updating the roadmap is a
content edit there, not a code change.

## ROADMAP DESIGN STANDARD

When implementing or changing any roadmap view, default to the canonical
chronological layout (see
[`docs/ROADMAP_PRESENTATION_STANDARD.md`](../docs/ROADMAP_PRESENTATION_STANDARD.md)
and [ADR 0001](../docs/adr/0001-roadmap-chronology-presentation-pattern.md)):

- **Render phases sequentially** as a Now → Next → Later journey down the page.
- **Use stacked, full-width sections** — one section per time horizon.
- **Avoid side-by-side time-horizon columns.** Do not introduce three-column /
  board / swimlane layouts for Now, Next and Later unless there is a documented
  business requirement and a new superseding ADR.
- **Maintain responsive card grids within each section** — cards read
  left-to-right and wrap (single column on mobile, wrapping on tablet, multiple
  columns on desktop). No horizontal scrolling of content down to 320px.
- **Preserve accessibility and localisation** — semantic landmarks, a single
  logical heading order, horizons labelled in text (never by colour or position
  alone), and every user-facing string language-keyed for English and Welsh.

Future layout generation should default to this pattern.

## Content and behaviour must not change with layout work

Layout changes must not alter roadmap data, card text, dates, categories,
filtering, search, navigation, localisation or accessibility features. Keep all
display text in `src/data/roadmap.ts` and keep it language-keyed (`en` and `cy`).

## Coding conventions

- TypeScript throughout, strict mode on. Keep components small and named after
  what they show (`CategorySection`, `HorizonColumn`, `RoadmapCard`, ...).
  `HorizonColumn` is a historical name and renders a full-width stacked section,
  not a column.
- No content hard-coded in components; read it from `src/data/roadmap.ts`.
- Match existing branding, colours, typography and spacing. Do not rely on
  colour alone to convey meaning.
- Run `npm run lint` and `npm run build` before proposing changes.
- British English in interface copy. No em dashes. No exclamation marks.
