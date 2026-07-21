import type { DeliveredSectionData } from '../data/roadmap';
import { useLanguage } from '../lib/i18n';

/**
 * A delivered work section, used for both "Recently delivered" and
 * "Other work we have delivered this year".
 *
 * NEEDS JOSHUA'S INPUT: Both instances of this component currently show a
 * placeholder because there is no reliable delivered-work source in the repo
 * (no shipped items, no changelog, no closed milestones). Add items to the
 * relevant section in src/data/roadmap.ts once content has been reviewed and
 * agreed.
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
        <h2 id={headingId} className="text-2xl font-bold text-heading">
          {tr(section.heading)}
        </h2>

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
                  {tr(item.summary)}
                </p>
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
