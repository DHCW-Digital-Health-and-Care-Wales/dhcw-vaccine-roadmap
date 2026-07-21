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

/**
 * A single item in a delivered work section.
 * Items are populated by Joshua from real delivery records only.
 */
export interface DeliveredItem {
  id: string;
  title: Localised;
  summary: Localised;
}

/**
 * A delivered work section (Recently delivered / Other work this year).
 * Items must come from a real delivery source. Leave items empty and
 * use the placeholder text until Joshua confirms the content.
 */
export interface DeliveredSectionData {
  id: string;
  heading: Localised;
  description: Localised;
  /** Visible on-page placeholder shown when items is empty. */
  placeholder: Localised;
  items: DeliveredItem[];
}

export interface RoadmapMeta {
  title: Localised;
  /**
   * Agreed verbatim wording — do not edit.
   * Stored here so it is language-keyed alongside all other copy.
   */
  vision: Localised;
  /**
   * Agreed verbatim wording — do not edit.
   * Stored here so it is language-keyed alongside all other copy.
   */
  serviceDescription: Localised;
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
  /**
   * NEEDS JOSHUA'S INPUT — no reliable delivered-work source exists in the
   * repo (no shipped items, no changelog, no closed milestones). Scaffold only.
   * Do not populate with invented items.
   */
  recentlyDelivered: DeliveredSectionData;
  /**
   * NEEDS JOSHUA'S INPUT — same evidence rule as recentlyDelivered above.
   */
  otherDelivered: DeliveredSectionData;
}

const TODO_CY = '';
const UPDATED_AT = '2026-07-20';
const CATEGORY_ID = 'vaccine-service';

const localised = (en: string): Localised => ({ cy: TODO_CY, en });

export const roadmap: Roadmap = {
  meta: {
    title: localised('DHCW Vaccine Service roadmap'),

    // Agreed verbatim wording — do not edit.
    vision: localised(
      'To provide one national digital service, from stock to surveillance. Finding, protecting, remembering, and learning, so that vaccination in Wales stays prudent, equitable, and evidence-led for every person and every dose.',
    ),

    // Agreed verbatim wording — do not edit.
    serviceDescription: localised(
      'We help Wales to deliver efficient, data-driven vaccination services by providing a near real-time, user-centred immunisation service that streamlines data management, enhances citizen access, and supports informed decision-making.',
    ),

    // Task 5: removed Oxford comma before "and the direction"; applied natural
    // contractions ("we're", "what's").
    intro: localised(
      "This roadmap shows what we're working on now, what's coming next and the direction we expect to take later.",
    ),
    // Task 5: applied natural contractions ("don't", "aren't").
    horizonNote: localised(
      "Now is what we are actively working on. Next is what we expect to pick up soon. Later is the direction we're setting as we learn more with users, families and partners. We don't put dates on roadmap items, and Next and Later aren't firm delivery commitments.",
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
      // Task 5: applied natural contraction ("we're working on").
      description: localised(
        "This roadmap is a simple view of the work shaping vaccination services in Wales. Each card shows a change we're working on now, planning to take on next, or working towards later.",
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
      // Task 5: removed Oxford comma from "Flu, COVID, and RSV" list.
      summary: localised(
        "Flu, COVID and RSV vaccinations happen every winter across Wales. We're agreeing what needs to change in the system with Public Health Wales and the seven health boards.",
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
        'We move from testing designs to using the service for real, in a small number of schools. We watch closely, learn every week, and change things as we go.',
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
      // Task 5: removed Oxford comma from "Flu, COVID, and RSV" list.
      summary: localised(
        'Flu, COVID and RSV vaccinations start across all seven health boards. This is the busiest time of the year for the system.',
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
      // Task 5: removed the specific future date "March 2027" in line with the
      // roadmap principle of no dates on future items. Reframed to use horizon
      // language instead. PR flags this for Joshua to confirm the reframing.
      summary: localised(
        "We're preparing the new home for the system ahead of the full migration to the cloud.",
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

  // NEEDS JOSHUA'S INPUT.
  // There is no reliable source of delivered work in this repo: no items are
  // marked 'shipped', there is no changelog and there are no closed milestones.
  // Scaffold only. Do not add items without a real delivery source.
  recentlyDelivered: {
    id: 'recently-delivered',
    heading: localised('Recently delivered'),
    description: localised(
      "Work we've completed recently and that is now live in the service.",
    ),
    placeholder: localised(
      'Content to be confirmed. This section will list recently delivered work once reviewed and agreed with the service team.',
    ),
    items: [],
  },

  // NEEDS JOSHUA'S INPUT.
  // Same evidence rule: no items without a real delivery source.
  otherDelivered: {
    id: 'other-delivered',
    heading: localised('Other work we have delivered this year'),
    description: localised(
      'A broader view of the delivery this year that sits outside the main roadmap horizons.',
    ),
    placeholder: localised(
      'Content to be confirmed. This section will capture wider delivery this year once reviewed and agreed with the service team.',
    ),
    items: [],
  },
};
