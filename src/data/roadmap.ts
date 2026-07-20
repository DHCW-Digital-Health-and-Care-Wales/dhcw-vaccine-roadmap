/**
 * Single source of roadmap content (docs/BUILD_BRIEF.md Section 5).
 *
 * Updating the roadmap is a content edit here, not a code change. Every piece
 * of display text is language-keyed so Welsh and English are both supported.
 * Welsh values are left as clearly marked placeholders for now; the UI falls
 * back to English when a Welsh string is empty (see src/lib/i18n.ts).
 */

export type Horizon = 'now' | 'next' | 'later';
export type ItemStatus = 'exploring' | 'in-progress' | 'shipped';

/** Every piece of display text is language-keyed. */
export interface Localised {
  cy: string; // Welsh
  en: string; // English
}

export interface Category {
  id: string; // slug, e.g. 'access-inclusion'
  name: Localised; // formal theme name
  headline: Localised; // warm, outcome-led headline
  description: Localised;
  accent: string; // brand colour token for this theme
}

export interface RoadmapItem {
  id: string;
  title: Localised;
  summary: Localised;
  categoryId: string;
  horizon: Horizon;
  status: ItemStatus;
  services?: string[]; // e.g. ['WIS', 'Choose Pharmacy', 'CYPrIS']
  updated: string; // ISO date, e.g. '2026-06-26'
}

export interface RoadmapMeta {
  title: Localised;
  intro: Localised;
  horizonNote: Localised; // the forward-looking note
  owner: string;
  lastUpdated: string; // ISO date
  reviewNote: Localised; // how often we update it
  statusLabel: string; // 'Draft for Discussion'
}

export interface Roadmap {
  meta: RoadmapMeta;
  horizons: { id: Horizon; label: Localised; definition: Localised }[];
  categories: Category[];
  items: RoadmapItem[];
}

// Welsh translations are outstanding. English is the working default for this
// pass; the UI falls back to English wherever a Welsh string is empty.
const TODO_CY = ''; // TODO: Welsh translation

export const roadmap: Roadmap = {
  meta: {
    title: {
      cy: TODO_CY,
      en: 'Primary, Community and Mental Health: our roadmap',
    },
    intro: {
      cy: TODO_CY,
      en: 'This roadmap shows what we are working on across primary, community and mental health care in Wales, and where we are heading. We have grouped our work under six outcomes that matter to the people we serve.',
    },
    horizonNote: {
      cy: TODO_CY,
      en: 'Now is what we are actively working on. Next is what we expect to pick up. Later is the direction we are setting. The further out the work, the more it may change as we learn. We do not put dates on this roadmap, and Next and Later are not commitments to deliver by a particular time.',
    },
    owner:
      'Primary, Community and Mental Health Directorate, Digital Health and Care Wales',
    lastUpdated: '2026-06-26',
    reviewNote: {
      cy: TODO_CY,
      en: 'We update this roadmap regularly as our plans develop.',
    },
    statusLabel: 'Draft for Discussion',
  },

  // Horizon definitions from docs/BUILD_BRIEF.md Section 1.
  horizons: [
    {
      id: 'now',
      label: { cy: TODO_CY, en: 'Now' },
      definition: {
        cy: TODO_CY,
        en: 'Work we are actively doing. It is well understood and underway. Items here can carry more detail.',
      },
    },
    {
      id: 'next',
      label: { cy: TODO_CY, en: 'Next' },
      definition: {
        cy: TODO_CY,
        en: 'What we expect to pick up next. It is direction, and it may change based on what we learn from the work happening now.',
      },
    },
    {
      id: 'later',
      label: { cy: TODO_CY, en: 'Later' },
      definition: {
        cy: TODO_CY,
        en: 'The direction we are setting. It is deliberately high level and will take shape as we get closer.',
      },
    },
  ],

  // The six outcome categories. Descriptions are used verbatim from
  // docs/BUILD_BRIEF.md Section 6. Each category has a distinct accent so the
  // themes are visually separable, but meaning never relies on colour alone.
  categories: [
    {
      id: 'access-inclusion',
      name: { cy: TODO_CY, en: 'Access and Inclusion' },
      headline: { cy: TODO_CY, en: "When you need it, it's there." },
      description: {
        cy: TODO_CY,
        en: "When you need care, whether that's from your GP, a pharmacy, a community service or mental health support, reaching it should be quick and simple. This theme covers the everyday ways you get to primary and community care and how we're making them easier, so you spend less time waiting and chasing. It also gives the teams who care for you time back from admin to focus on care. Going digital should never shut anyone out. If getting online is hard for you, or not something you want, you'll still be able to reach the care you need. As more services move online, we're making sure the people who face the biggest barriers get the most support.",
      },
      accent: '#325083',
    },
    {
      id: 'workforce-capability',
      name: { cy: TODO_CY, en: 'Workforce and Capability' },
      headline: {
        cy: TODO_CY,
        en: 'People who care for you, supported to do it well.',
      },
      description: {
        cy: TODO_CY,
        en: "The people who care for you should have digital tools they're confident using. This theme is about making sure staff across primary and community care, including mental health, are well-supported to get the best from the systems they rely on every day. It's also about the jobs we create. We're growing skilled digital careers here in Wales, in engineering, product, design and data, so that public money builds lasting capability and good jobs at home.",
      },
      accent: '#12A3C9',
    },
    {
      id: 'digital-economy-sustainability',
      name: { cy: TODO_CY, en: 'Digital Economy and Sustainability' },
      headline: { cy: TODO_CY, en: 'Public money, lasting value.' },
      description: {
        cy: TODO_CY,
        en: "Public money goes furthest when services are built around the people who use them. This theme is about spending well on digital services across primary and community care, including mental health, and designing them so they make a real difference. That means starting from real user needs and proving new ideas work before we scale them. It also means building on open standards so we're never locked into a single supplier, growing teams and skills that stay in Wales, and making sure every pound spent reaches frontline care.",
      },
      accent: '#005AA8',
    },
    {
      id: 'safety-resilience',
      name: { cy: TODO_CY, en: 'Safety and Resilience' },
      headline: { cy: TODO_CY, en: 'Foundations you can count on.' },
      description: {
        cy: TODO_CY,
        en: "When you use a digital service for your care, it needs to be there and working. This theme is about the systems and connections that keep primary, community and mental health services running day to day. We're making them safer and more resilient, so services stay reliable and recover quickly when something does go wrong. Dependable foundations also let services run in real time and support new ways of caring for you.",
      },
      accent: '#1B294A',
    },
    {
      id: 'data-collaboration',
      name: { cy: TODO_CY, en: 'Data and Collaboration' },
      headline: { cy: TODO_CY, en: 'Your information, working for your care.' },
      description: {
        cy: TODO_CY,
        en: "Your care is safer when the people looking after you can see the right information at the right time. This theme is about joining up information across primary and community care, including mental health, so you don't have to repeat your story and nothing important gets missed. Used responsibly, the same information helps us understand where need is greatest and plan services around it. We look after your information carefully and are open about how it's used, sharing it only where it helps your care.",
      },
      accent: '#4C6272',
    },
    {
      id: 'equity-innovation',
      name: { cy: TODO_CY, en: 'Equity and Innovation' },
      headline: { cy: TODO_CY, en: 'Innovation that reaches everyone.' },
      description: {
        cy: TODO_CY,
        en: 'New ideas in digital health should reach the people who need them most, not just those who find technology easy. This is about making sure that as we develop and scale new approaches across primary, community and mental health care, we do it in a way that reduces health inequalities rather than deepening them. Faster adoption of innovation across Wales only counts as success when it works for everyone.',
      },
      accent: '#C9941A',
    },
  ],

  // Placeholder items, one per category, spread across the three horizons, so
  // the layout renders populated. Each English title is prefixed with
  // [Example] to mark it for replacement (docs/BUILD_BRIEF.md Section 5).
  items: [
    {
      id: 'access-inclusion-example',
      title: {
        cy: TODO_CY,
        en: '[Example] Making it easier to find and reach the right care',
      },
      summary: {
        cy: TODO_CY,
        en: 'Reducing the time people spend searching and waiting by making routes into primary and community care simpler to find and use.',
      },
      categoryId: 'access-inclusion',
      horizon: 'now',
      status: 'in-progress',
      updated: '2026-06-26',
    },
    {
      id: 'workforce-capability-example',
      title: {
        cy: TODO_CY,
        en: '[Example] Growing digital product, design and engineering careers in Wales',
      },
      summary: {
        cy: TODO_CY,
        en: 'Building lasting digital skills and good jobs at home so public investment strengthens capability within Wales.',
      },
      categoryId: 'workforce-capability',
      horizon: 'now',
      status: 'in-progress',
      updated: '2026-06-26',
    },
    {
      id: 'safety-resilience-example',
      title: {
        cy: TODO_CY,
        en: '[Example] Moving core services onto resilient cloud foundations',
      },
      summary: {
        cy: TODO_CY,
        en: 'Making the systems behind everyday care safer and quicker to recover when something goes wrong.',
      },
      categoryId: 'safety-resilience',
      horizon: 'now',
      status: 'exploring',
      updated: '2026-06-26',
    },
    {
      id: 'digital-economy-sustainability-example',
      title: {
        cy: TODO_CY,
        en: '[Example] Building our services on open standards and open code by default',
      },
      summary: {
        cy: TODO_CY,
        en: 'Avoiding lock-in to a single supplier and making sure more of every pound spent reaches frontline care.',
      },
      categoryId: 'digital-economy-sustainability',
      horizon: 'next',
      status: 'exploring',
      updated: '2026-06-26',
    },
    {
      id: 'data-collaboration-example',
      title: {
        cy: TODO_CY,
        en: '[Example] Joining up information across primary and community care',
      },
      summary: {
        cy: TODO_CY,
        en: 'Helping the people who look after you see the right information at the right time, so nothing important gets missed.',
      },
      categoryId: 'data-collaboration',
      horizon: 'later',
      status: 'exploring',
      updated: '2026-06-26',
    },
    {
      id: 'equity-innovation-example',
      title: {
        cy: TODO_CY,
        en: '[Example] Testing new approaches first with the communities who face the biggest barriers',
      },
      summary: {
        cy: TODO_CY,
        en: 'Designing and scaling innovation in a way that narrows health inequalities rather than widening them.',
      },
      categoryId: 'equity-innovation',
      horizon: 'later',
      status: 'exploring',
      updated: '2026-06-26',
    },
  ],
};
