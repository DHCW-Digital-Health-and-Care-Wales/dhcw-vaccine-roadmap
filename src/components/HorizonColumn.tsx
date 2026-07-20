import type { Horizon, Localised, RoadmapItem } from '../data/roadmap';
import { useLanguage } from '../lib/i18n';
import { RoadmapCard } from './RoadmapCard';

interface HorizonColumnProps {
  horizonId: Horizon;
  label: Localised;
  items: RoadmapItem[];
  headingId: string;
}

/**
 * One horizon (Now, Next or Later) within a category, styled after the Figma
 * "outcome" cards: a dark heading bar with the horizon name in text, then the
 * items. On wide screens these sit as columns; on narrow screens they stack.
 * The horizon is always labelled in text, never by colour or position alone
 * (docs/BUILD_BRIEF.md Section 7).
 */
export function HorizonColumn({ label, items, headingId }: HorizonColumnProps) {
  const { lang, tr } = useLanguage();

  return (
    <div className="flex flex-col overflow-hidden rounded-card border border-border bg-surface">
      <h4 id={headingId} className="bg-heading px-4 py-3 font-bold text-white">
        {tr(label)}
      </h4>
      <div className="flex flex-1 flex-col gap-3 p-4">
        {items.length > 0 ? (
          items.map((item) => <RoadmapCard key={item.id} item={item} />)
        ) : (
          <p className="text-sm italic text-ink-500">
            {lang === 'cy'
              ? 'Dim byd i’w ddangos yma eto.'
              : 'Nothing to show here yet.'}
          </p>
        )}
      </div>
    </div>
  );
}
