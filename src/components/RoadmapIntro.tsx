import type { RoadmapMeta } from '../data/roadmap';
import { useLanguage } from '../lib/i18n';
import { formatDate } from '../lib/roadmap-helpers';

/**
 * Title section (docs/BUILD_BRIEF.md Section 4): the roadmap title, the
 * "Draft for Discussion" status label, a visible "last updated" date and the
 * short intro. Rendered as the page's primary heading.
 */
export function RoadmapIntro({ meta }: { meta: RoadmapMeta }) {
  const { lang, tr } = useLanguage();

  return (
    <section
      id="about"
      aria-labelledby="roadmap-title"
      className="scroll-mt-28 bg-surface-subtle px-4 pb-12 pt-28 sm:px-6 sm:pt-32"
    >
      <div className="mx-auto max-w-content">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-heading px-3 py-1 text-sm font-medium text-white">
            {meta.statusLabel}
          </span>
          <span className="text-sm text-ink-700">
            {lang === 'cy' ? 'Diweddarwyd ddiwethaf' : 'Last updated'}:{' '}
            <time dateTime={meta.lastUpdated}>
              {formatDate(meta.lastUpdated, lang)}
            </time>
          </span>
        </div>

        <h1
          id="roadmap-title"
          className="mt-4 text-3xl font-bold text-heading sm:text-4xl"
        >
          {tr(meta.title)}
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-900">
          {tr(meta.intro)}
        </p>
      </div>
    </section>
  );
}
