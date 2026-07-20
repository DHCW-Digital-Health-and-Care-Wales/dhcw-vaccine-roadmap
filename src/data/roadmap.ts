/**
 * Single source of roadmap content.
 *
 * Updating the roadmap is a content edit here, not a code change. Every piece
 * of display text is language-keyed so Welsh and English are both supported.
 * Welsh values are left empty for now; the UI falls back to English when a
 * Welsh string is empty (see src/lib/i18n.ts).
 */

export type Horizon = 'now' | 'next' | 'later';
export type ItemStatus = 'exploring' | 'in-progress' | 'shipped';

/** Every piece of display text is language-keyed. */
export interface Localised {
  cy: string; // Welsh
  en: string; // English
}

export interface Category {
  id: string;
  name: Localised;
  headline: Localised;
  description: Localised;
  accent: string;
}

export interface RoadmapItem {
  id: string;
  title: Localised;
  summary: Localised;
  categoryId: string;
  horizon: Horizon;
  status: ItemStatus;
  services?: string[];
  updated: string;
}

export interface RoadmapMeta {
  title: Localised;
  intro: Localised;
  horizonNote: Localised;
  owner: string;
  lastUpdated: string;
  reviewNote: Localised;
  statusLabel: string;
}

export interface Roadmap {
  meta: RoadmapMeta;
  horizons: { id: Horizon; label: Localised; definition: Localised }[];
  categories: Category[];
  items: RoadmapItem[];
}

const TODO_CY = '';
const UPDATED_AT = '2026-07-20';
const CATEGORY_ID = 'vaccine-service';

const localised = (en: string): Localised => ({ cy: TODO_CY, en });

export const roadmap: Roadmap = {
  meta: {
    title: localised('DHCW Vaccine Service roadmap'),
    intro: localised(
      'This roadmap shows what the Vaccine Service at Digital Health and Care Wales is working on now, what is coming next, and the direction we expect to take later.',
    ),
    horizonNote: localised(
      'Now is what we are actively working on. Next is what we expect to pick up soon. Later is the direction we are setting as we learn more with users, families and partners. We do not put dates on roadmap items, and Next and Later are not firm delivery commitments.',
    ),
    owner: 'Vaccine Service, Digital Health and Care Wales',
    lastUpdated: UPDATED_AT,
    reviewNote: localised(
      'We update this roadmap as plans develop and we learn from delivery.',
    ),
    statusLabel: 'Draft for discussion',
  },

  horizons: [
    {
      id: 'now',
      label: localised('Now'),
      definition: localised(
        'Work that is underway now and shaping the next changes to the service.',
      ),
    },
    {
      id: 'next',
      label: localised('Next'),
      definition: localised(
        'Work we expect to pick up soon as current delivery moves forward.',
      ),
    },
    {
      id: 'later',
      label: localised('Later'),
      definition: localised(
        'Longer-term direction that will keep evolving as we learn more.',
      ),
    },
  ],

  categories: [
    {
      id: CATEGORY_ID,
      name: localised('Vaccine Service'),
      headline: localised('Now, Next and Later for the Vaccine Service'),
      description: localised(
        'This roadmap is a simple view of the work shaping vaccination services in Wales. Each card shows a change we are working on now, preparing to take on next, or planning for later.',
      ),
      accent: '#325083',
    },
  ],

  items: [
    {
      id: 'menb-response-in-schools',
      title: localised('Getting ready for the MenB response in schools'),
      summary: localised(
        "We're updating the Welsh Immunisation System so nurses can record MenB vaccinations in schools. It uses the same system they already use for flu and HPV, so there's less to learn.",
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      updated: UPDATED_AT,
    },
    {
      id: 'digital-consent-with-families',
      title: localised('Testing digital consent with families'),
      summary: localised(
        "We're trying out a new way for parents and young people to give consent for school vaccinations online. Right now, families fill in paper forms. Digital consent should be faster and clearer. We're testing it with real families first, and we're being careful to design it so young people can give consent for themselves where that's the right thing to do.",
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      updated: UPDATED_AT,
    },
    {
      id: 'learning-what-school-nurses-need',
      title: localised('Learning what school nurses need'),
      summary: localised(
        "We're sitting with school nurses to understand how they work. We show them early designs and change things based on what they say. This happens before we build much of anything.",
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      updated: UPDATED_AT,
    },
    {
      id: 'building-the-next-two-updates',
      title: localised('Building the next two updates'),
      summary: localised(
        "Every few weeks we release updates to the system based on what users have asked for. We're finalising what goes into the next two releases and building them now.",
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      updated: UPDATED_AT,
    },
    {
      id: 'getting-ready-for-winter',
      title: localised('Getting ready for winter'),
      summary: localised(
        "Flu, COVID, and RSV vaccinations happen every winter across Wales. We're agreeing what needs to change in the system with Public Health Wales and the seven health boards.",
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      updated: UPDATED_AT,
    },
    {
      id: 'migrating-the-database-stack',
      title: localised('Migrating the database stack'),
      summary: localised(
        'The system that holds vaccination records is moving to a new database. Migration work reaches code complete, then enters regression testing. This proves the new stack keeps every existing feature working before any live service moves.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      updated: UPDATED_AT,
    },
    {
      id: 'replacing-older-servers',
      title: localised('Replacing older servers'),
      summary: localised(
        "We're replacing servers that are no longer supported. Users won't notice, but the service stays stable and secure.",
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      updated: UPDATED_AT,
    },
    {
      id: 'menb-goes-live',
      title: localised('MenB goes live'),
      summary: localised(
        "Nurses start recording MenB vaccinations in schools. We'll be with teams during the first sessions to fix anything that isn't right.",
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',
      updated: UPDATED_AT,
    },
    {
      id: 'small-number-of-schools-try-the-new-system',
      title: localised('A small number of schools try the new system'),
      summary: localised(
        "We move from testing designs to using the service for real, in a small number of schools. We watch closely, learn every week, and change things as we go.",
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',
      updated: UPDATED_AT,
    },
    {
      id: 'second-update-goes-out-with-training',
      title: localised('The second update goes out with training'),
      summary: localised(
        'Nurses get the training they need before winter starts. This gives them time to get comfortable with the changes.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',
      updated: UPDATED_AT,
    },
    {
      id: 'first-real-training-at-a-pilot-site',
      title: localised('First real training at a pilot site'),
      summary: localised(
        'The first group of school nurses use the new way of working. What we learn here shapes how we roll it out to everyone else.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',
      updated: UPDATED_AT,
    },
    {
      id: 'more-families-try-digital-consent',
      title: localised('More families try digital consent'),
      summary: localised(
        'We keep testing digital consent. More families, more schools, more evidence about what works.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',
      updated: UPDATED_AT,
    },
    {
      id: 'refreshing-the-storage',
      title: localised('Refreshing the storage'),
      summary: localised(
        'Behind the scenes, we refresh some of the storage that keeps the service running.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',
      updated: UPDATED_AT,
    },
    {
      id: 'planning-the-following-release',
      title: localised('Planning the following release'),
      summary: localised(
        'We give ourselves time to plan the next set of changes properly, rather than rushing.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',
      updated: UPDATED_AT,
    },
    {
      id: 'winter-vaccinations-across-wales',
      title: localised('Winter vaccinations across Wales'),
      summary: localised(
        'Flu, COVID, and RSV vaccinations start across all seven health boards. This is the busiest time of the year for the system.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      updated: UPDATED_AT,
    },
    {
      id: 'school-vaccinations-become-part-of-the-main-system',
      title: localised('School vaccinations become part of the main system'),
      summary: localised(
        'We bring school vaccinations into the same platform as adult and childhood ones. One record for each person. One way of working for nurses.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      updated: UPDATED_AT,
    },
    {
      id: 'childrens-health-system-continues-to-join-up',
      title: localised("Children's health system continues to join up"),
      summary: localised(
        "CYPrIS is the system that holds children's health information. We keep bringing it together with the Welsh Immunisation System, so every child in Wales has one clear digital record.",
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      updated: UPDATED_AT,
    },
    {
      id: 'wider-training-for-school-nurses',
      title: localised('Wider training for school nurses'),
      summary: localised(
        'We take what we learned at the pilot site and train nurses across Wales.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      updated: UPDATED_AT,
    },
    {
      id: 'pre-school-vaccinations',
      title: localised('Pre-school vaccinations'),
      summary: localised(
        "We're talking with clinical and policy colleagues about how pre-school vaccinations fit into the system. More on this when we've agreed the shape.",
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      updated: UPDATED_AT,
    },
    {
      id: 'connecting-with-the-nhs-wales-app',
      title: localised('Connecting with the NHS Wales App'),
      summary: localised(
        'We start the conversation about how vaccination records reach people through the NHS Wales App. This means checking your own vaccination history on your phone.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      updated: UPDATED_AT,
    },
    {
      id: 'getting-ready-for-the-full-move-to-the-cloud',
      title: localised('Getting ready for the full move to the cloud'),
      summary: localised(
        'We prepare the new home for the system before the full migration in March 2027.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      updated: UPDATED_AT,
    },
    {
      id: 'digital-consent-keeps-growing',
      title: localised('Digital consent keeps growing'),
      summary: localised(
        'We keep testing and improving digital consent until the evidence tells us it is ready for the next stage.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      updated: UPDATED_AT,
    },
  ],
};
