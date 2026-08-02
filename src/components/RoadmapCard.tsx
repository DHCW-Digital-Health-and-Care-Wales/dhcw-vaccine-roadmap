import type { RoadmapItem } from '../data/roadmap';
import { useLanguage } from '../lib/i18n';
import { STATUS_LABELS } from '../lib/roadmap-helpers';

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
 * A single roadmap item (docs/BUILD_BRIEF.md Section 4). Shows the title,
 * summary, a text status label and any related services. Never shows a date:
 * the roadmap communicates priority and confidence, not committed dates.
 */
export function RoadmapCard({ item }: { item: RoadmapItem }) {
  const { tr } = useLanguage();

  return (
    <article className="rounded-card border border-border bg-surface p-4 shadow-sm">
      {item.phase ? (
        <p className="mb-2">
          <span
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${
              item.phaseKind === 'discovery'
                ? 'border-purple-300 bg-purple-50 text-purple-800'
                : 'border-border-strong bg-surface-subtle text-ink-700'
            }`}
          >
            {item.phase}
          </span>
        </p>
      ) : null}
      <h4 className="font-bold text-heading">{tr(item.title)}</h4>
      <p className="mt-2 text-sm leading-relaxed text-ink-900">
        {renderSummaryWithMetric(tr(item.summary), item.metric)}
      </p>
      {item.outcome ? (
        <p className="mt-3 text-sm leading-relaxed text-ink-900">
          <strong className="font-semibold text-heading">Outcome:</strong>{' '}
          {item.outcome}
        </p>
      ) : null}
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
