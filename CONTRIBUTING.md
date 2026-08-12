# Contributing to the DHCW Vaccine Service roadmap

Thank you for helping improve this roadmap. This guide covers development
conventions. For roadmap **content** changes, see
[Editing the roadmap content](./README.md#editing-the-roadmap-content) — content
lives in `src/data/roadmap.ts` and is edited there, not in components.

## Getting started

Requires [Node.js 20](https://nodejs.org/) and npm.

```bash
npm install      # install dependencies
npm run dev      # start the development server
npm run build    # type-check and build for production into dist/
npm run preview  # preview the production build locally
npm run lint     # run ESLint
npm run format   # format with Prettier
```

Run `npm run lint` and `npm run build` before opening a pull request.

## Roadmap layout standard

The roadmap is presented as a **vertically stacked chronological journey**:
**Now → Next → Later**. This is the canonical, default pattern, formalised in
[ADR 0001](./docs/adr/0001-roadmap-chronology-presentation-pattern.md) and
described in
[`docs/ROADMAP_PRESENTATION_STANDARD.md`](./docs/ROADMAP_PRESENTATION_STANDARD.md).

When implementing or changing roadmap views:

- **Render roadmap phases as sequential full-width sections stacked
  vertically.** Now, Next and Later each occupy their own full-width section,
  one below the next.
- **Do not introduce three-column (side-by-side time-horizon) layouts** unless
  there is a documented business requirement, agreed with the maintainers and
  recorded in a new ADR that supersedes ADR 0001.
- **Prioritise chronological reading flow** — the reader moves top-to-bottom
  through Now, then Next, then Later.
- **Keep responsive card grids within each section** — cards read left-to-right
  and wrap (single column on mobile, wrapping on tablet, multiple columns on
  desktop). No horizontal scrolling of content down to 320px.
- **Preserve accessibility and localisation** — semantic landmarks, a single
  logical heading order, horizons labelled in text (never by colour or position
  alone), and all display text language-keyed for English and Welsh.

The layout components are in `src/components/`, principally `CategorySection`
(stacks the horizons vertically) and `HorizonColumn` (renders one horizon as a
full-width section with a responsive card grid). `HorizonColumn` keeps its
historical name but renders a stacked section, not a column.

## General conventions

- TypeScript throughout, strict mode on. Keep components small and named after
  what they show.
- No content hard-coded in components; read it from `src/data/roadmap.ts`, and
  keep every user-facing string language-keyed (`en` and `cy`).
- Match existing branding, colours, typography and spacing. Do not rely on
  colour alone to convey meaning.
- British English in interface copy. No em dashes. No exclamation marks.

## Architecture decisions

Significant design decisions are recorded as ADRs in
[`docs/adr/`](./docs/adr/). To change an accepted decision, add a new ADR that
supersedes the previous one rather than editing the accepted record.
