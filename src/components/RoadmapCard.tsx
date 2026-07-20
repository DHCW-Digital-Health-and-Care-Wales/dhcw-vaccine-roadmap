import type { RoadmapItem } from '../data/roadmap';
import { useLanguage } from '../lib/i18n';
import { STATUS_LABELS } from '../lib/roadmap-helpers';

/**
 * A single roadmap item (docs/BUILD_BRIEF.md Section 4). Shows the title,
 * summary, a text status label and any related services. Never shows a date:
 * the roadmap communicates priority and confidence, not committed dates.
 */
export function RoadmapCard({ item }: { item: RoadmapItem }) {
  const { tr } = useLanguage();

  return (
    <article className="rounded-card border border-border bg-surface p-4 shadow-sm">
      <h4 className="font-bold text-heading">{tr(item.title)}</h4>
      <p className="mt-2 text-sm leading-relaxed text-ink-900">
        {tr(item.summary)}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center rounded-full border border-border-strong bg-surface-subtle px-2.5 py-0.5 text-xs font-medium text-ink-700">
          {tr(STATUS_LABELS[item.status])}
        </span>
        {item.services?.map((service) => (
          <span
            key={service}
            className="inline-flex items-center rounded-full bg-surface-muted px-2.5 py-0.5 text-xs font-medium text-ink-700"
          >
            {service}
          </span>
        ))}
      </div>
    </article>
  );
}
