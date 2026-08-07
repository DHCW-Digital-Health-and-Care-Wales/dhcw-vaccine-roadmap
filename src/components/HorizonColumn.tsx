import type { Horizon, Localised, RoadmapItem } from '../data/roadmap';
import { useLanguage } from '../lib/i18n';
import { RoadmapCard } from './RoadmapCard';

interface HorizonColumnProps {
  horizonId: Horizon;
  label: Localised;
  items: RoadmapItem[];
  headingId: string;
  accent: string;
}

/**
 * One horizon (Now, Next or Later) rendered as a full-width phase in the
 * sequential roadmap journey. A dark heading bar names the phase in text with
 * an item count, then the items follow in a responsive grid that keeps cards a
 * comfortable reading width while the phases themselves always stack
 * top-to-bottom. The horizon is always labelled in text, never by colour or
 * position alone (docs/BUILD_BRIEF.md Section 7).
 */
export function HorizonColumn({
  label,
  items,
  headingId,
  accent,
}: HorizonColumnProps) {
  const { lang, tr } = useLanguage();

  return (
    <section
      aria-labelledby={headingId}
      className="scroll-mt-28 overflow-hidden rounded-card border border-border bg-surface"
      style={{ borderLeft: `4px solid ${accent}` }}
    >
      <h4
        id={headingId}
        className="flex items-center gap-2 bg-heading px-4 py-3 text-lg font-bold text-white"
      >
        <span>{tr(label)}</span>
        <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full border border-white/30 bg-white/10 px-2 text-xs font-semibold text-white">
          {items.length}
        </span>
      </h4>
      <div className="p-4">
        {items.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {items.map((item) => (
              <RoadmapCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p className="text-sm italic text-ink-500">
            {lang === 'cy'
              ? 'Dim byd i’w ddangos yma eto.'
              : 'Nothing to show here yet.'}
          </p>
        )}
      </div>
    </section>
  );
}
