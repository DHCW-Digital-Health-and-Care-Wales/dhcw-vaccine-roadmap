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
  phase?: string;
  phaseKind?: 'discovery';
  outcome?: string;
  metric?: string;
  capabilities?: { label: string; items: string[] };
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
  metric?: string;
  capabilities?: { label: string; items: string[] };
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
  recentlyDelivered: DeliveredSectionData;
  otherDelivered: DeliveredSectionData;
}

const TODO_CY = '';
const UPDATED_AT = '2026-08-02';
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
      id: 'winter-respiratory-campaign',
      title: localised('Winter respiratory campaign'),
      summary: localised(
        'Getting WIS ready for the autumn and winter respiratory campaigns. This year eligibility is widening, with a new RSV group for people aged 65 to 74 at risk, changes for the autumn flu campaign, and the COVID-19 autumn campaign.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      outcome:
        'WIS is ready to record flu, COVID-19 and RSV vaccinations across every health board through the winter season.',
      updated: UPDATED_AT,
    },
    {
      id: 'system-generated-appointments-sga',
      title: localised('System Generated Appointments (SGA)'),
      summary: localised(
        'Piloting System Generated Appointments and appointment mapping, with training and support.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      outcome:
        'NHS staff can schedule appointments with more automation and less reliance on DHCW support teams.',
      updated: UPDATED_AT,
    },
    {
      id: 'letter-updates',
      title: localised('Letter updates'),
      summary: localised(
        "Updating the existing WIS letter templates for this year's autumn campaigns.",
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      outcome:
        'Existing letters are accurate and up to date for the autumn campaigns.',
      updated: UPDATED_AT,
    },
    {
      id: 'school-immunisation-service',
      title: localised('School immunisation service'),
      summary: localised(
        'Early build and testing of the school immunisation service.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      phase: 'Alpha',
      outcome:
        'Tested prototypes for running school vaccination sessions digitally, ready to build on.',
      updated: UPDATED_AT,
    },
    {
      id: 'electronic-consent',
      title: localised('Electronic consent'),
      summary: localised(
        'Early build and testing of electronic consent for vaccination.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      phase: 'Alpha',
      outcome:
        'A tested way for parents and guardians to give consent online, with less reliance on paper forms.',
      updated: UPDATED_AT,
    },
    {
      id: 'registrant-consent-recording',
      title: localised('Registrant Consent Recording'),
      summary: localised(
        'Recording registrant consent at the point of vaccination, keeping WIS up to date with regulatory change.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      outcome:
        'The service stays in line with current requirements for recording consent.',
      updated: UPDATED_AT,
    },
    {
      id: 'clearer-vaccination-warnings',
      title: localised('Clearer vaccination warnings'),
      summary: localised(
        "Clearer warnings when a vaccination looks like a duplicate, or when the person isn't in a priority group.",
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      outcome: 'Staff can catch possible recording errors before they happen.',
      updated: UPDATED_AT,
    },
    {
      id: 'new-stock-management-designs',
      title: localised('New stock management designs'),
      summary: localised(
        'Prototyping new designs for managing vaccine stock, tested with the people who use them.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      outcome:
        'Updated designs that reflect user feedback and bring the look and feel into line with the rest of the product.',
      updated: UPDATED_AT,
    },
    {
      id: 'user-management-for-organisations',
      title: localised('User management for organisations'),
      summary: localised(
        'Enhancing user management in WIS so organisations can add and manage their own users.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      outcome:
        'Organisations set up their own staff more quickly, with less reliance on central administration.',
      updated: UPDATED_AT,
    },
    {
      id: 'more-frequent-gp-write-back',
      title: localised('More frequent GP write-back'),
      summary: localised(
        'Investigating whether we can send vaccination updates back to GP records more often, working with IUVO and EMIS.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'exploring',
      phase: 'Discovery',
      phaseKind: 'discovery',
      outcome:
        'A clear view of whether more frequent updates are feasible, and what it would take to deliver them.',
      updated: UPDATED_AT,
    },
    {
      id: 'storage-area-network-san',
      title: localised('Storage Area Network (SAN)'),
      summary: localised(
        'Essential infrastructure work on the Storage Area Network.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',
      outcome:
        'Essential maintenance keeps the storage behind WIS running reliably.',
      updated: UPDATED_AT,
    },
    {
      id: 'school-immunisation-recording-and-stock',
      title: localised('School immunisation: recording and stock'),
      summary: localised(
        'Recording and managing HPV, MenACWY and Teenage Booster (3-in-1) through consent forms, with writeback to CYPrIS and GP systems, and updates to the data warehouse. Writeback to GP systems is being extended to EMIS, covering flu alongside the 3-in-1 booster and MenACWY.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',
      phase: 'Beta · Phase 1',
      services: ['CYPrIS', 'GP systems', 'Data warehouse'],
      capabilities: {
        label: 'What this phase covers',
        items: [
          'Record HPV, MenACWY and Teenage Booster (3-in-1) vaccinations through consent forms.',
          'Configure and maintain vaccination defaults for these vaccines.',
          'Manage the full vaccine stock lifecycle for these vaccines.',
          'Identify children who need vaccination and are eligible for catch-up clinics.',
          'Support the batch recording of vaccination outcomes.',
          'Writeback to CYPrIS and to GP systems.',
          'Extended writeback to EMIS, covering flu, the 3-in-1 booster and MenACWY.',
          'Update the data warehouse.',
          'Advanced Patient Search available for the new vaccines.',
        ],
      },
      outcome:
        'School-age vaccinations for HPV, MenACWY and the 3-in-1 booster are recorded in WIS and flow through to GP records and reporting.',
      updated: UPDATED_AT,
    },
    {
      id: 'new-one-page-letters',
      title: localised('New one-page letters'),
      summary: localised(
        'Releasing new, shorter, citizen-tested letter templates that replace the current ones.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',
      outcome:
        'Improved written communication, and cost savings from reducing letter length.',
      updated: UPDATED_AT,
    },
    {
      id: 'improved-error-messages',
      title: localised('Improved error messages'),
      summary: localised(
        'Further improvements to the error messages people see in WIS, so problems are easier to understand and put right.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',
      outcome:
        'Users spend less time working out what went wrong and know how to get help faster.',
      updated: UPDATED_AT,
    },
    {
      id: 'managing-not-in-wales-records',
      title: localised('Managing “not in Wales” records'),
      summary: localised(
        'Building on the recently defined requirements, developing how WIS manages records for people who have moved away from Wales.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',
      outcome:
        'Better data quality, with records kept up to date when people move away.',
      updated: UPDATED_AT,
    },
    {
      id: 'continuous-improvement',
      title: localised('Continuous improvement'),
      summary: localised(
        'Improvements to WIS identified through the winter campaign.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      outcome:
        'WIS keeps improving based on what we learn from the winter campaign.',
      updated: UPDATED_AT,
    },
    {
      id: 'spring-campaign',
      title: localised('Spring campaign'),
      summary: localised(
        'Getting WIS ready for the spring campaign.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      outcome: 'WIS is ready for the spring vaccination campaign.',
      updated: UPDATED_AT,
    },
    {
      id: 'school-immunisation-a-home-in-wis',
      title: localised('School immunisation: a home in WIS'),
      summary: localised(
        'Making school immunisation a permanent part of WIS, so school vaccination teams use the same core service as other vaccination programmes.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      phase: 'Beta · Phase 2',
      capabilities: {
        label: 'What this phase covers',
        items: [
          'Bring school vaccination workflows into the core WIS service.',
          'Use one person record across school and non-school vaccination pathways.',
          'Align school vaccination reporting with the wider WIS reporting model.',
          'Support consistent ways of working for school vaccination teams across Wales.',
        ],
      },
      outcome:
        'School immunisation is a permanent part of WIS, giving one record and one way of working for school vaccinations.',
      updated: UPDATED_AT,
    },
    {
      id: 'school-immunisation-electronic-consent',
      title: localised('School immunisation: electronic consent'),
      summary: localised(
        'Developing electronic consent for school vaccinations, so consent can be collected and managed digitally.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      phase: 'Beta · Phase 3',
      capabilities: {
        label: 'What this phase covers',
        items: [
          'Let parents and guardians complete school vaccination consent online.',
          'Present consent information in a clear format for school vaccination teams.',
          'Support consent responses and updates before school sessions take place.',
          'Reduce paper handling across school vaccination consent processes.',
        ],
      },
      outcome:
        'Parents and guardians can give consent online for school vaccinations, with fewer paper forms and faster responses.',
      updated: UPDATED_AT,
    },
    {
      id: 'live-cloud-and-postgresql-migration',
      title: localised('Live cloud and PostgreSQL migration'),
      summary: localised(
        'Moving WIS onto cloud hosting and a PostgreSQL database.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      outcome:
        'WIS runs on modern cloud hosting, making it more reliable and easier to improve and scale in response to demand.',
      updated: UPDATED_AT,
    },
    {
      id: 'cypris-maintenance-and-security',
      title: localised('CYPrIS maintenance and security'),
      summary: localised(
        'Essential maintenance and security upgrades to CYPrIS, the child health platform that works alongside WIS.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      services: ['CYPrIS'],
      outcome:
        'CYPrIS stays secure and reliable while we focus new development on WIS.',
      updated: UPDATED_AT,
    },
    {
      id: 'pre-school-immunisation',
      title: localised('Pre-school immunisation'),
      summary: localised(
        'Discovery into pre-school immunisation.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      phase: 'Discovery',
      phaseKind: 'discovery',
      outcome:
        'A clear understanding of how WIS could support pre-school vaccination.',
      updated: UPDATED_AT,
    },
    {
      id: 'nhs-wales-app-vaccine-features',
      title: localised('NHS Wales App vaccine features'),
      summary: localised(
        'Possible discovery into vaccine features in the NHS Wales App, subject to prioritisation.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      phase: 'Discovery',
      phaseKind: 'discovery',
      services: ['NHS Wales App'],
      outcome:
        "People can see their vaccination record and what they're due in the NHS Wales App.",
      updated: UPDATED_AT,
    },
  ],

  recentlyDelivered: {
    id: 'recently-delivered',
    heading: localised('Recently delivered'),
    description: localised(
      "Work we've completed recently and that is now live in the service.",
    ),
    placeholder: localised(
      'Content to be confirmed. This section will list recently delivered work once reviewed and agreed with the service team.',
    ),
    items: [
      {
        id: 'cloud-work-code-complete',
        title: localised('Cloud work code complete'),
        summary: localised(
          'Development is finished. More follows once the cloud infrastructure becomes available.',
        ),
      },
      {
        id: 'cloud-and-infrastructure-testing',
        title: localised('Cloud and infrastructure testing'),
        summary: localised(
          'Testing the cloud and infrastructure work, including performance testing.',
        ),
      },
      {
        id: 'menb-recording',
        title: localised('MenB recording'),
        summary: localised(
          'Recording MenB vaccinations in WIS, with writeback to GP records through EMIS. Around 10,000 recorded in the first week since release.',
        ),
        metric: '10,000',
        capabilities: {
          label: 'What the first release covered',
          items: [
            'Record MenB vaccinations in WIS.',
            'View vaccination history where recorded in WIS.',
            'Report through the data warehouse.',
            'Strike through a vaccination.',
            'Set up a vaccine default.',
            'Writeback to GP records through EMIS, subject to external dependencies.',
          ],
        },
      },
      {
        id: 'essential-server-maintenance',
        title: localised('Essential server maintenance'),
        summary: localised(
          'Keeping the servers behind WIS healthy and up to date.',
        ),
      },
      {
        id: 'not-in-wales-records',
        title: localised('“Not in Wales” records'),
        summary: localised(
          'Requirements defined for recording people who are not registered in Wales.',
        ),
      },
      {
        id: 'reporting-data-for-rsv-and-flu',
        title: localised('Reporting data for RSV and flu'),
        summary: localised(
          'Added opt-out and location data for RSV and flu to the reporting views, improving the accuracy of uptake data.',
        ),
      },
    ],
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
