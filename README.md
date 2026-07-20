# DHCW Vaccine Service roadmap

A public, accessible roadmap for the Vaccine Service at
[Digital Health and Care Wales (DHCW)](https://dhcw.nhs.wales/). It shows what
we are working on now, what we expect to do next, and the direction we are
setting for later.

**Live site:** https://dhcw-digital-health-and-care-wales.github.io/dhcw-vaccine-roadmap/

> **Draft for discussion.** This roadmap shows direction and priorities, not
> firm commitments. It carries no dates. Now is the firmest; Later is the most
> likely to change as we learn.

## Who it is for

Anyone with an interest in vaccination services in Wales: the people who use
these services, the teams who deliver them, and partners working with the
service.

## How it is structured

The roadmap is organised into three horizons:

- **Now** is work we are actively doing.
- **Next** is what we expect to pick up soon.
- **Later** is the direction we are setting.

The further out the work, the more it may change. We do not put dates on the
roadmap, and Next and Later are not commitments to deliver by a particular time.

## Giving feedback

This is built in the open and feedback is welcome. Please
[open a roadmap feedback issue](https://github.com/DHCW-Digital-Health-and-Care-Wales/dhcw-vaccine-roadmap/issues/new?template=roadmap-feedback.md).

## How often it is updated

We update this roadmap regularly as our plans develop. The site shows a
"last updated" date, and the content is edited in one place
(`src/data/roadmap.ts`).

## Bilingual

The site is built to serve Welsh and English. All display text is language-keyed
and a language toggle is provided. English is the working content for this pass;
where a Welsh string is not yet provided the site falls back to English. The
default language can be switched in one place (`DEFAULT_LANGUAGE` in
`src/lib/i18n.ts`).

## Editing the roadmap content

All content lives in [`src/data/roadmap.ts`](./src/data/roadmap.ts). Updating the
roadmap is a content edit there, not a code change. Each item has a title,
summary, horizon and status. Add Welsh by filling in the `cy` field next to each
`en` field.

## Accessibility and privacy

- We aim to meet WCAG 2.2 AA. See the accessibility statement on the site.
- The site sets no tracking cookies, uses no third-party analytics and
  self-hosts its fonts, so there is nothing to consent to. See the privacy note
  on the site.

## Running and building locally

Requires [Node.js 20](https://nodejs.org/) and npm.

```bash
npm install      # install dependencies
npm run dev      # start the development server
npm run build    # type-check and build for production into dist/
npm run preview  # preview the production build locally
npm run lint     # run ESLint
npm run format   # format with Prettier
```

## Deployment

The site deploys to GitHub Pages from `main` via the workflow in
[`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml). The Vite base
path is set to `/dhcw-vaccine-roadmap/` so assets resolve correctly for this
GitHub Pages project site.

> **Repository setting required:** in **Settings -> Pages**, set the source to
> **GitHub Actions** for deployments to run.

## Design source

The look and feel is based on the Figma Make export in
[`figma-make-export/`](./figma-make-export/), reconciled to this project's
structure and data model. That folder is a design reference only and is not part
of the application build.

## Licence

- **Code:** [MIT](./LICENSE)
- **Content:** [Open Government Licence v3.0](./CONTENT-LICENCE.md)
