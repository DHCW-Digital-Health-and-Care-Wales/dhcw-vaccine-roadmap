0. Goal and what success looks like

Build a public, accessible roadmap website for the Primary, Community and Mental Health (PCMH) Directorate at Digital Health and Care Wales (DHCW). It uses a Now, Next, Later format set across six outcome categories. It is hosted on GitHub Pages from the repo DHCW-Digital-Health-and-Care-Wales/PCMH-Roadmap.

This first pass is about the look, feel and structure, not the detailed content. Seed the six categories with the exact copy in Section 6, and use clearly marked placeholder items so the layout renders with something in it. I will replace the placeholder items with real work.

Success for this pass:


The site matches the Figma Make design in look and feel.
It renders the six categories and the three horizons (Now, Next, Later) with placeholder items.
It is driven by a single content file, so updating the roadmap is a content edit, not a code change.
It meets WCAG 2.2 AA and is built so Welsh and English can both be served.
It deploys cleanly to GitHub Pages.
It works on a phone first, since most readers will be on one.


1. The roadmap concept and the principles behind it

This is an outcome-led roadmap, not a feature list. Group work by the problem we are solving and the outcome we are aiming for, under the six categories in Section 6.

Now, Next, Later communicates priority and confidence, not committed dates. Hold to these meanings throughout the copy and the design:


Now is work we are actively doing. It is well understood and underway. Items here can carry more detail.
Next is what we expect to pick up next. It is direction, and it may change based on what we learn from the work happening now.
Later is the direction we are setting. It is deliberately high level and will take shape as we get closer.


The further out the work, the more it may change, and the design should make that legible rather than hide it. Do not show dates on items. Do not imply firm delivery commitments for Next or Later.

Honesty over polish. This roadmap should reflect the real picture, including the rough edges. Avoid neat symmetry for its own sake. Do not pad. Do not overpromise.

Build it to be maintained. A roadmap that stops getting updated loses its value, so the content model must be easy to edit and the site must show when it was last updated.

2. Tech stack and project setup

Use:


Vite + React + TypeScript for the app.
Tailwind CSS for styling. Figma Make exports Tailwind, so this keeps the design close to source.
Node 20, npm for package management.
No backend. This is a static site. All content lives in a data file.


Project conventions:


TypeScript throughout, strict on.
Keep components small and named after what they show (HorizonColumn, CategorySection, RoadmapCard, LanguageToggle, RoadmapHeader).
Put all roadmap content in src/data/roadmap.ts (see Section 5). No content hard-coded in components.
Prettier and ESLint configured. A simple, sensible config is fine.


If a /figma-make-export folder exists in the repo, treat it as the design source (see Section 3).

3. Design, brand and how to ingest the Figma design

The Figma Make design is the source of truth for look and feel. Ingest it in this order of preference:


Exported Figma Make code (preferred). If /figma-make-export is present, read it and use it as the visual foundation. Lift the layout, type scale, spacing, colour usage and component structure from it. Adapt it to this brief's structure and data model rather than rebuilding from scratch.
Figma Dev Mode MCP (if configured locally). Read design tokens and layout from the active selection in the Figma desktop app. Note this may be limited for Figma Make files, so treat what you get as guidance and reconcile with the brief.
Rebuild from description (fallback). If neither is available, build to the layout in Section 4 and the brand below, and ask me to share screenshots of the Figma design to check against.


Whichever path, the visual outcome should match the Figma design, and the structure and behaviour should match this brief. Where the Figma design and this brief disagree on structure, follow the brief and tell me what diverged.

Brand and design system. This is a digital product, so the DHCW Design System V2 conventions apply, not the document brand. Derive tokens from the Figma design first. Where a token is not specified:


Type: use the DHCW digital interface font, Roboto. Do not use Rubik here. Rubik is the document font and the two systems should not be conflated. Load Roboto from a self-hosted file or a privacy-respecting source (see privacy in Section 9), with a system sans-serif fallback.
Colour: DHCW palette as design tokens:

Navy #1B294A
DHCW Blue #12A3C9
NHS Wales Blue #325083
Yellow #F8CA4D
Plus a neutral scale for text, borders and backgrounds. Body text must meet 4.5:1 contrast against its background.



Set these as CSS variables or Tailwind theme tokens so they are easy to change in one place.


Assign each of the six categories an accent colour drawn from the palette and neutrals, so categories are visually distinct. Do not rely on colour alone to carry meaning (see accessibility, Section 7).

British English in all interface copy. No em dashes. No exclamation marks.

4. Information architecture and layout

Two axes: six categories (the themes) and three horizons (Now, Next, Later).

Recommended layout, to reconcile with the Figma design:


A header with the roadmap title, a short intro, a visible "last updated" date, a "Draft for Discussion" label, and the language toggle.
A short, plain-English explainer of what Now, Next and Later mean, and a one-line forward-looking note that this shows direction and priorities rather than firm commitments or dates.
The roadmap body, grouped by category. For each category, show its warm headline and its formal name, its description, and within it the items split across Now, Next and Later.
Within a category, present the three horizons as columns on wider screens and as stacked, clearly labelled sections on narrow screens.
A footer with feedback route, links to the accessibility statement and privacy note, the licence, and a link back to the GitHub repo.


If the Figma design instead organises by horizon first (three columns) with category shown as a tag or filter on each card, follow the Figma design. Either is valid. Keep whichever the design uses consistent and accessible.

Keep it close to a single page. A simple in-page structure avoids client-side routing problems on GitHub Pages. If you add a separate page (for example the accessibility statement), handle the GitHub Pages routing gotcha in Section 10.

Optional enhancements, only if they fit the design and time allows. Mark them clearly and keep them off by default if unfinished:


A filter to show one category or one horizon at a time.
A small confidence indicator on items (for example higher confidence in Now, lower in Later), to make uncertainty explicit.
A "what we are not doing yet" area, which adds focus by being explicit about what is out of scope.


5. Content model

All content lives in src/data/roadmap.ts. Use this shape (adjust names if cleaner, but keep it language-keyed so Welsh and English are both supported from the start):

tsexport type Horizon = 'now' | 'next' | 'later';
export type ItemStatus = 'exploring' | 'in-progress' | 'shipped';

// Every piece of display text is language-keyed.
export interface Localised {
  cy: string; // Welsh
  en: string; // English
}

export interface Category {
  id: string;            // slug, e.g. 'access-inclusion'
  name: Localised;       // formal theme name
  headline: Localised;   // warm, outcome-led headline
  description: Localised;
  accent: string;        // brand colour token for this theme
}

export interface RoadmapItem {
  id: string;
  title: Localised;
  summary: Localised;
  categoryId: string;
  horizon: Horizon;
  status: ItemStatus;
  services?: string[];   // e.g. ['WIS', 'Choose Pharmacy', 'CYPrIS']
  updated: string;       // ISO date, e.g. '2026-06-26'
}

export interface RoadmapMeta {
  title: Localised;
  intro: Localised;
  horizonNote: Localised;     // the forward-looking note
  owner: string;
  lastUpdated: string;        // ISO date
  reviewNote: Localised;      // how often we update it
  statusLabel: string;        // 'Draft for Discussion'
}

export interface Roadmap {
  meta: RoadmapMeta;
  horizons: { id: Horizon; label: Localised; definition: Localised }[];
  categories: Category[];
  items: RoadmapItem[];
}

For Welsh fields, leave the value as an empty string or a clearly marked // TODO: Welsh translation placeholder. English is the working default for now. The UI must not break when a Welsh string is empty: fall back to English and, in development only, log which strings are missing Welsh.

Seed meta with English copy along these lines (I can edit later):


title.en: "Primary, Community and Mental Health: our roadmap"
intro.en: "This roadmap shows what we are working on across primary, community and mental health care in Wales, and where we are heading. We have grouped our work under six outcomes that matter to the people we serve."
horizonNote.en: "Now is what we are actively working on. Next is what we expect to pick up. Later is the direction we are setting. The further out the work, the more it may change as we learn. We do not put dates on this roadmap, and Next and Later are not commitments to deliver by a particular time."
reviewNote.en: "We update this roadmap regularly as our plans develop."
statusLabel: "Draft for Discussion"
lastUpdated: today's date in ISO format.


Seed the three horizons with the definitions in Section 1.

Seed the six categories with the exact copy in Section 6.

Seed placeholder items. Add six placeholder items, one per category, spread across the three horizons, so the layout is populated. Keep them outcome-shaped, high level, with no dates. Prefix each English title with [Example] so I know to replace them. Suggested safe placeholders:


Access and Inclusion (Now): "[Example] Making it easier to find and reach the right care"
Workforce and Capability (Now): "[Example] Growing digital product, design and engineering careers in Wales"
Safety and Resilience (Now): "[Example] Moving core services onto resilient cloud foundations"
Digital Economy and Sustainability (Next): "[Example] Building our services on open standards and open code by default"
Data and Collaboration (Later): "[Example] Joining up information across primary and community care"
Equity and Innovation (Later): "[Example] Testing new approaches first with the communities who face the biggest barriers"


Give each a one or two sentence summary.en, a sensible status, and an updated date. These are illustrative and exist only to show the layout.

6. The six outcome categories (use this copy exactly)

Each category has a warm, outcome-led headline and a formal name. Display both. Use these descriptions verbatim for description.en.

1. Headline: "When you need it, it's there." Name: "Access and Inclusion."
When you need care, whether that's from your GP, a pharmacy, a community service or mental health support, reaching it should be quick and simple. This theme covers the everyday ways you get to primary and community care and how we're making them easier, so you spend less time waiting and chasing. It also gives the teams who care for you time back from admin to focus on care. Going digital should never shut anyone out. If getting online is hard for you, or not something you want, you'll still be able to reach the care you need. As more services move online, we're making sure the people who face the biggest barriers get the most support.

2. Headline: "People who care for you, supported to do it well." Name: "Workforce and Capability."
The people who care for you should have digital tools they're confident using. This theme is about making sure staff across primary and community care, including mental health, are well-supported to get the best from the systems they rely on every day. It's also about the jobs we create. We're growing skilled digital careers here in Wales, in engineering, product, design and data, so that public money builds lasting capability and good jobs at home.

3. Headline: "Public money, lasting value." Name: "Digital Economy and Sustainability."
Public money goes furthest when services are built around the people who use them. This theme is about spending well on digital services across primary and community care, including mental health, and designing them so they make a real difference. That means starting from real user needs and proving new ideas work before we scale them. It also means building on open standards so we're never locked into a single supplier, growing teams and skills that stay in Wales, and making sure every pound spent reaches frontline care.

4. Headline: "Foundations you can count on." Name: "Safety and Resilience."
When you use a digital service for your care, it needs to be there and working. This theme is about the systems and connections that keep primary, community and mental health services running day to day. We're making them safer and more resilient, so services stay reliable and recover quickly when something does go wrong. Dependable foundations also let services run in real time and support new ways of caring for you.

5. Headline: "Your information, working for your care." Name: "Data and Collaboration."
Your care is safer when the people looking after you can see the right information at the right time. This theme is about joining up information across primary and community care, including mental health, so you don't have to repeat your story and nothing important gets missed. Used responsibly, the same information helps us understand where need is greatest and plan services around it. We look after your information carefully and are open about how it's used, sharing it only where it helps your care.

6. Headline: "Innovation that reaches everyone." Name: "Equity and Innovation."
New ideas in digital health should reach the people who need them most, not just those who find technology easy. This is about making sure that as we develop and scale new approaches across primary, community and mental health care, we do it in a way that reduces health inequalities rather than deepening them. Faster adoption of innovation across Wales only counts as success when it works for everyone.

Suggested category ids: access-inclusion, workforce-capability, digital-economy-sustainability, safety-resilience, data-collaboration, equity-innovation.

7. Accessibility (non-negotiable)

This is a Welsh public sector website, so meet WCAG 2.2 AA. Two of the six categories are about reaching everyone, so the site itself must not exclude anyone.


Semantic HTML with proper landmarks (header, main, nav, footer) and a single logical heading hierarchy.
Every category is a section with a heading. Every horizon is labelled clearly in text, not by colour or position alone.
Status and horizon are conveyed in text, never by colour alone. If you use colour or icons for status, pair them with a visible text label.
Full keyboard operability. Visible focus styles on every interactive element. A "skip to content" link.
Colour contrast: 4.5:1 for normal text, 3:1 for large text and meaningful non-text elements.
Respect prefers-reduced-motion. Keep animation minimal and never essential to understanding.
Responsive and mobile-first. Test down to 320px width. No horizontal scrolling of content.
Set the page lang attribute and update it when the language toggle changes (cy or en).
Images and icons have appropriate alt text or are marked decorative.
Run an automated check (for example axe) and fix what it finds. Note that automated checks do not catch everything.


8. Bilingual structure (Welsh and English)

Welsh Language Standards require Welsh to be treated no less favourably than English. Build for that from the start, even though English is the working content for this pass.


The content model is already language-keyed (Section 5). Keep it that way.
Add a clear language toggle in the header (Cymraeg / English). It switches all keyed display text and updates the page lang attribute.
Persist the choice for the session without third-party cookies. A simple approach is fine, for example a URL parameter or a same-site preference; avoid anything that needs a cookie banner.
When a Welsh string is empty, fall back to English so nothing breaks. In development, surface a list of strings still missing Welsh so translation is easy to complete later.
The eventual default per DHCW brand is Welsh first. For now, English may be the default so I can review content quickly. Flag this as a setting I can flip in one place.


9. Open working: README, licence, feedback, disclaimer, accessibility, privacy

This is a public roadmap built in the open, so the repo and site should reflect that.

README.md covering: what the roadmap is, who it is for, how it is structured (the six categories and Now, Next, Later), what Now, Next and Later mean and the fact that it carries no date commitments, how to give feedback, how often it is updated, how to run and build the project locally, and a link to the live site.

Feedback route. Add a clear way for people to comment. A link to open a GitHub issue is the simplest. Add a short issue template for roadmap feedback. Put the feedback link in the footer and the README.

Forward-looking note. Include a short, plain note on the site and in the README that this shows direction and priorities, that Now is the firmest and Later the most likely to change, and that it does not commit us to delivering anything by a particular date. Keep it honest and brief.

Accessibility statement. UK public sector websites need one. Add a page or clearly linked section stating the target standard (WCAG 2.2 AA), any known gaps, and how to report an accessibility problem. Leave placeholders for the contact route and review date for me to confirm.

Privacy. Default to no third-party analytics and no tracking cookies, so there is nothing to consent to. Self-host fonts rather than calling a third-party font service, to avoid leaking visitor data. If any measurement is wanted later, note that it should be privacy-respecting and cookie-free, and I will decide. Add a short privacy note saying the site sets no tracking cookies and shares no personal data.

Licence. Recommended default: MIT for the code and Open Government Licence v3 for the content. Add the appropriate LICENSE file(s) and a short licensing note in the README. Confirm with me before finalising (see Section 13).

10. Deployment to GitHub Pages

This is a project site, so it serves at https://dhcw-digital-health-and-care-wales.github.io/PCMH-Roadmap/. Two things matter: the base path and the deploy workflow.

Vite base path. Set the base to the repo name so assets resolve:

ts// vite.config.ts
export default defineConfig({
  base: '/PCMH-Roadmap/',
  // ...plugins
});

GitHub Actions workflow. Add .github/workflows/deploy.yml:

yamlname: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4

Repo setting (I will do this, do not attempt it yourself). In the repo, under Settings then Pages, set the source to GitHub Actions. Tell me clearly that this step is needed and that I need to do it.

Routing gotcha. If you add client-side routing, GitHub Pages will 404 on deep links and refreshes. Prefer a single page to avoid this. If routing is needed, copy dist/index.html to dist/404.html as part of the build so unknown paths fall back to the app, and use paths that respect the base. State which approach you took.

You do not need a .nojekyll file with this Actions-based deploy. Do not add one unless something requires it.

11. Definition of done for this pass


 Site builds with npm run build and runs with npm run dev with no errors.
 Look and feel matches the Figma Make design, or the divergences are listed for me.
 Six categories render, each with its headline, formal name and description from Section 6, verbatim.
 Now, Next and Later render per category, with the placeholder items in place and clearly marked [Example].
 All content comes from src/data/roadmap.ts. No content hard-coded in components.
 Content model is language-keyed and a working language toggle is present. English content seeded, Welsh placeholders in place, English fallback working.
 WCAG 2.2 AA checks pass on an automated run, with manual keyboard and focus checks done. Status and horizon never rely on colour alone.
 Works mobile-first down to 320px, no horizontal scroll.
 "Last updated" date, "Draft for Discussion" label and the forward-looking note are visible.
 README, accessibility statement, privacy note, licence file(s), feedback link and issue template are present.
 GitHub Actions workflow and Vite base path are set, and the build artefact is correct. You have told me to switch Pages source to GitHub Actions.
 British English throughout. No em dashes. No exclamation marks. No dates on roadmap items.


12. Suggested build order

Work in phases and pause after each for me to review.


Scaffold. Vite + React + TypeScript + Tailwind. ESLint and Prettier. Folder structure. Ingest the Figma design per Section 3 and set up brand tokens.
Content model. Build src/data/roadmap.ts, seed meta, the three horizons, the six categories verbatim, and the placeholder items.
Layout and components. Header, horizon explainer and forward-looking note, category sections, horizon columns, roadmap cards, footer. Match the Figma design.
Bilingual and language toggle. Language-keyed rendering, toggle, English fallback, lang attribute switching.
Accessibility pass. Landmarks, headings, keyboard, focus, contrast, reduced motion, automated check, fixes.
Open-working files. README, accessibility statement, privacy note, licence, feedback issue template.
Deployment. Vite base path, GitHub Actions workflow, build check. Tell me to set the Pages source.


13. Decisions to confirm with me before finalising

Proceed with the defaults if I am not available, but flag these:


Licence. Default: MIT for code, Open Government Licence v3 for content. Confirm or change.
Welsh as default language. Default for now: English, with Welsh to follow and a one-line setting to flip to Welsh-first later. Confirm.
Layout orientation. Whether the roadmap groups by category first (with Now, Next, Later inside each) or by horizon first (three columns with category as a tag or filter). Default: follow the Figma design; if the Figma design is ambiguous, group by category first. Confirm which the Figma design uses.
