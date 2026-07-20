import type { Roadmap } from '../data/roadmap';
import { useLanguage } from '../lib/i18n';

/**
 * Plain-English explainer of what Now, Next and Later mean, plus the
 * forward-looking note that this shows direction and priorities rather than
 * firm commitments or dates (docs/BUILD_BRIEF.md Section 4).
 */
export function HorizonExplainer({ roadmap }: { roadmap: Roadmap }) {
  const { lang, tr } = useLanguage();
  const headingId = 'horizons-explainer-heading';

  return (
    <section
      aria-labelledby={headingId}
      className="border-b border-border bg-surface px-4 py-12 sm:px-6"
    >
      <div className="mx-auto max-w-content">
        <h2 id={headingId} className="text-2xl font-bold text-heading">
          {lang === 'cy' ? 'Nawr, Nesaf a Hwyrach' : 'Now, Next and Later'}
        </h2>

        <dl className="mt-6 grid gap-4 md:grid-cols-3">
          {roadmap.horizons.map((horizon) => (
            <div
              key={horizon.id}
              className="rounded-card border border-border bg-surface-subtle p-5"
            >
              <dt className="text-lg font-bold text-heading">
                {tr(horizon.label)}
              </dt>
              <dd className="mt-2 leading-relaxed text-ink-900">
                {tr(horizon.definition)}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-6 max-w-3xl leading-relaxed text-ink-700">
          {tr(roadmap.meta.horizonNote)}
        </p>
      </div>
    </section>
  );
}
