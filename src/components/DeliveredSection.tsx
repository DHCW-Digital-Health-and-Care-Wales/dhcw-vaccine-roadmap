import type { DeliveredSectionData } from '../data/roadmap';
import { useLanguage } from '../lib/i18n';

function renderSummaryWithMetric(summary: string, metric?: string) {
  if (!metric || !summary.includes(metric)) {
    return summary;
  }

  const [before, after] = summary.split(metric, 2);
  return (
    <>
      {before}
      <strong className="rounded bg-heading/10 px-1 font-semibold text-heading">
        {metric}
      </strong>
      {after}
    </>
  );
}

/**
 * A delivered work section, used for both "Recently delivered" and
 * "Other work we have delivered this year".
 *
 * Matches the card pattern and tokens used in the existing horizon sections.
 */
export function DeliveredSection({
  section,
}: {
  section: DeliveredSectionData;
}) {
  const { tr } = useLanguage();
  const headingId = `delivered-${section.id}`;

  return (
    <section
      aria-labelledby={headingId}
      className="border-b border-border bg-surface px-4 py-12 sm:px-6"
    >
      <div className="mx-auto max-w-content">
        <div className="flex items-center gap-2">
          <h2 id={headingId} className="text-2xl font-bold text-heading">
            {tr(section.heading)}
          </h2>
          <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full border border-border bg-surface-subtle px-2 text-xs font-semibold text-ink-700">
            {section.items.length}
          </span>
        </div>

        <p className="mt-4 max-w-3xl leading-relaxed text-ink-900">
          {tr(section.description)}
        </p>

        {section.items.length > 0 ? (
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {section.items.map((item) => (
              <article
                key={item.id}
                className="rounded-card border border-border bg-surface p-4 shadow-sm"
              >
                <h3 className="font-bold text-heading">{tr(item.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-900">
                  {renderSummaryWithMetric(tr(item.summary), item.metric)}
                </p>
                {item.capabilities ? (
                  <details className="mt-3 rounded-card border border-border bg-surface-subtle p-3">
                    <summary className="cursor-pointer text-sm font-semibold text-heading">
                      {item.capabilities.label}
                    </summary>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink-900">
                      {item.capabilities.items.map((capability) => (
                        <li key={capability}>{capability}</li>
                      ))}
                    </ul>
                  </details>
                ) : null}
              </article>
            ))}
          </div>
        ) : (
          /* Placeholder — visible on page until Joshua confirms content. */
          <div className="mt-6 rounded-card border border-border bg-surface-subtle p-5">
            <p className="font-medium text-ink-700">
              {tr(section.placeholder)}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
